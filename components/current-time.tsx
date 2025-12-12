'use client';

import { useCurrentTime } from '@/hooks/use-current-time';

export default function CurrentTime() {
  const currentTime = useCurrentTime();

  return (
    <span aria-live="polite" aria-atomic="true">
      It&apos;s <time dateTime={new Date().toISOString()}>{currentTime}</time>{' '}
      for Nitin
    </span>
  );
}
