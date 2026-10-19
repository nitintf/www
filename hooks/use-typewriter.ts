'use client';

import { useEffect, useState } from 'react';

const TICK_MS = 30;

// Reveals `text` over `durationMs` while `typing` is true; `clear` empties
// it. Returns how many characters are showing.
export function useTypewriter({
  text,
  durationMs,
  typing,
  clear,
}: {
  text: string;
  durationMs: number;
  typing: boolean;
  clear: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typing) {
      const started = performance.now();
      const perChar = durationMs / text.length;
      const id = window.setInterval(() => {
        const n = Math.min(
          text.length,
          Math.floor((performance.now() - started) / perChar),
        );
        setCount(n);
        if (n >= text.length) window.clearInterval(id);
      }, TICK_MS);
      return () => window.clearInterval(id);
    }
    if (clear) {
      const id = window.setTimeout(() => setCount(0), 0);
      return () => window.clearTimeout(id);
    }
  }, [typing, clear, text, durationMs]);

  return count;
}
