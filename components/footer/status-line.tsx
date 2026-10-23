'use client';

import { NowPlaying } from '@/components/footer/now-playing';
import { useNow } from '@/hooks/use-now';
import { useNowPlaying } from '@/hooks/use-now-playing';
import type { Status } from '@/lib/status';
import { homeTime } from '@/lib/utils/time';

// "it's 12:03 pm for nitin · 31° and clear · 14 commits this week ·
// listening to …"
export function StatusLine({ status }: { status: Status }) {
  const now = useNow();
  const track = useNowPlaying();

  const parts: React.ReactNode[] = [
    now && `it's ${homeTime(now)} for nitin`,
    status.weather &&
      `${status.weather.temperature}° and ${status.weather.summary}`,
    status.commitsThisWeek &&
      `${status.commitsThisWeek} ${status.commitsThisWeek === 1 ? 'commit' : 'commits'} this week`,
    track && <NowPlaying track={track} now={now} />,
  ].filter(Boolean);

  return (
    <p className="text-sm text-muted">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && ' · '}
          {part}
        </span>
      ))}
    </p>
  );
}
