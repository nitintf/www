'use client';

import { NowPlaying } from '@/components/footer/now-playing';
import { useNow } from '@/hooks/use-now';
import { useNowPlaying } from '@/hooks/use-now-playing';
import { HOME_PLACE } from '@/lib/constants';
import type { Status } from '@/lib/status';
import { homeTime } from '@/lib/utils/time';

// "12:03 pm in noida, india · 31° and clear · 14 commits this week ·
// listening to …"
export function StatusLine({ status }: { status: Status }) {
  const now = useNow();
  const track = useNowPlaying();

  const parts: React.ReactNode[] = [
    now ? `${homeTime(now)} in ${HOME_PLACE}` : HOME_PLACE,
    status.weather &&
      `${status.weather.temperature}° and ${status.weather.summary}`,
    status.commitsThisWeek &&
      `${status.commitsThisWeek} ${status.commitsThisWeek === 1 ? 'commit' : 'commits'} this week`,
    track && <NowPlaying track={track} />,
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
