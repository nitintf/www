import { GITHUB_USER, HOME_COORDINATES } from '@/lib/constants';
import { describeWeather } from '@/lib/utils/weather';

const REVALIDATE_SECONDS = 1800;
const TIMEOUT_MS = 3000;
const GITHUB_HEADERS = { Accept: 'application/vnd.github+json' };

export interface Status {
  weather?: { temperature: number; summary: string };
  commitsThisWeek?: number;
}

async function getJson<T>(url: string, headers?: HeadersInit): Promise<T> {
  const res = await fetch(url, {
    headers,
    next: { revalidate: REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${url} answered ${res.status}`);
  return res.json() as Promise<T>;
}

async function getWeather(): Promise<Status['weather']> {
  const { latitude, longitude } = HOME_COORDINATES;
  const data = await getJson<{
    current: { temperature_2m: number; weather_code: number };
  }>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
  );
  return {
    temperature: Math.round(data.current.temperature_2m),
    summary: describeWeather(data.current.weather_code),
  };
}

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

interface PushEvent {
  type: string;
  created_at: string;
  repo: { name: string };
  payload: { before?: string; head?: string };
}

// GitHub's public events no longer say how many commits a push held, so
// each recent push is counted with the compare API.
async function getCommitsThisWeek(): Promise<number> {
  const events = await getJson<PushEvent[]>(
    `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=100`,
    GITHUB_HEADERS,
  );
  const since = Date.now() - WEEK_MS;
  const pushes = events.filter(
    (event) =>
      event.type === 'PushEvent' &&
      new Date(event.created_at).getTime() > since &&
      event.payload.before &&
      event.payload.head,
  );
  const counts = await Promise.all(
    pushes.map((push) =>
      getJson<{ total_commits: number }>(
        `https://api.github.com/repos/${push.repo.name}/compare/${push.payload.before}...${push.payload.head}`,
        GITHUB_HEADERS,
      )
        .then((compare) => compare.total_commits)
        .catch(() => 1),
    ),
  );
  return counts.reduce((sum, count) => sum + count, 0);
}

// Cached on the server; any part that fails is left out.
export async function getStatus(): Promise<Status> {
  const [weather, commits] = await Promise.allSettled([
    getWeather(),
    getCommitsThisWeek(),
  ]);
  return {
    weather: weather.status === 'fulfilled' ? weather.value : undefined,
    commitsThisWeek: commits.status === 'fulfilled' ? commits.value : undefined,
  };
}
