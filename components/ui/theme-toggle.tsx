'use client';

import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { playClick } from '@/lib/utils/click-sound';

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const dark = mounted && resolvedTheme === 'dark';

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={() => {
        playClick(!dark);
        setTheme(dark ? 'light' : 'dark');
      }}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 8 }}
      whileTap={{ scale: 0.8 }}
      transition={{
        type: 'spring',
        stiffness: 420,
        damping: 20,
        delay: mounted ? 0 : 0.2,
      }}
      className="fixed right-4 top-4 z-40 cursor-pointer p-2 text-faint transition-colors duration-200 hover:text-fg sm:right-6 sm:top-6"
    >
      <svg viewBox="0 0 24 24" className="size-[15px]">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 3a9 9 0 0 0 0 18z"
          fill="currentColor"
          className="theme-toggle-half"
          style={{ transform: `rotate(${dark ? 180 : 0}deg)` }}
        />
      </svg>
    </motion.button>
  );
}
