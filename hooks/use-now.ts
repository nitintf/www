'use client';

import { useEffect, useState } from 'react';

// The current time, refreshed every `everyMs`. Null until mounted, so
// server and client render the same thing.
export function useNow(everyMs = 30_000) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, everyMs);
    return () => window.clearInterval(id);
  }, [everyMs]);

  return now;
}
