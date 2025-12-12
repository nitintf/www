'use client';

import Link from 'next/link';
import { useCurrentTime } from '@/hooks/use-current-time';

export default function Footer() {
  const currentTime = useCurrentTime();

  return (
    <footer
      className="mt-4 flex items-center justify-start gap-3 text-sm text-neutral-500"
      aria-label="Site footer"
    >
      <span aria-live="polite" aria-atomic="true">
        It&apos;s <time dateTime={new Date().toISOString()}>{currentTime}</time>{' '}
        for Nitin
      </span>
      <span aria-hidden="true" className="text-neutral-400">
        •
      </span>
      <nav
        aria-label="Social links and resources"
        className="flex items-center gap-3"
      >
        <a
          href="https://www.linkedin.com/in/nitin-panwarr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
          aria-label="Visit Nitin Panwar on LinkedIn (opens in new tab)"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nitintf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
          aria-label="Visit Nitin Panwar on GitHub (opens in new tab)"
        >
          GitHub
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
          aria-label="Download CV or Resume (opens in new tab)"
        >
          CV/Resume
        </a>
        <Link
          href="/logs"
          className="underline text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded transition-colors"
          aria-label="View logs"
        >
          Logs
        </Link>
      </nav>
    </footer>
  );
}
