import 'server-only';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL =
  'https://api.spotify.com/v1/me/player/currently-playing';
const RECENT_URL =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const RECENT_WINDOW_MS = 15 * 60 * 1000;
const TIMEOUT_MS = 3000;

export interface Track {
  title: string;
  artist: string;
  url: string;
  playing: boolean;
}

interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
}

let cached: { token: string; expiresAt: number } | null = null;

async function accessToken() {
  if (cached && cached.expiresAt > Date.now()) return cached.token;

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN)
    return null;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };
  // Renew a minute early so a request never goes out with an expired token.
  cached = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cached.token;
}

function toTrack(track: SpotifyTrack, playing: boolean): Track {
  return {
    title: track.name,
    artist: track.artists[0]?.name ?? '',
    url: track.external_urls.spotify,
    playing,
  };
}

async function spotify<T>(url: string, token: string): Promise<T | null> {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 204 || !res.ok) return null;
  return res.json() as Promise<T>;
}

// What's playing now, or the last track if it ended in the last 15 minutes.
export async function getNowPlaying(): Promise<Track | null> {
  const token = await accessToken();
  if (!token) return null;

  const current = await spotify<{
    is_playing: boolean;
    currently_playing_type: string;
    item: SpotifyTrack | null;
  }>(NOW_PLAYING_URL, token);
  if (current?.item && current.currently_playing_type === 'track') {
    return toTrack(current.item, current.is_playing);
  }

  const recent = await spotify<{
    items: { played_at: string; track: SpotifyTrack }[];
  }>(RECENT_URL, token);
  const last = recent?.items[0];
  if (
    last &&
    Date.now() - new Date(last.played_at).getTime() < RECENT_WINDOW_MS
  ) {
    return toTrack(last.track, false);
  }
  return null;
}
