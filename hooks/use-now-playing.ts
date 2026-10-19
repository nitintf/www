'use client';

import { useEffect, useState } from 'react';
import type { Track } from '@/lib/spotify';

const POLL_MS = 60_000;

export function useNowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = () =>
      fetch('/api/now-playing')
        .then((res) => res.json() as Promise<{ track: Track | null }>)
        .then((data) => !cancelled && setTrack(data.track))
        .catch(() => {});
    load();
    const id = window.setInterval(() => {
      if (!document.hidden) load();
    }, POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return track;
}
