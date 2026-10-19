import { Equalizer } from '@/components/footer/equalizer';
import { NewTabHint } from '@/components/ui/new-tab-hint';
import type { Track } from '@/lib/spotify';
import { timeAgo } from '@/lib/utils/time';

export function NowPlaying({ track, now }: { track: Track; now: Date | null }) {
  return (
    <span>
      {track.playing && <Equalizer />}
      {track.playing ? 'listening to ' : 'last played '}
      <a
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="line-link"
      >
        {track.title.toLowerCase()}
        <NewTabHint />
      </a>{' '}
      by {track.artist.toLowerCase()}
      {!track.playing &&
        track.playedAt &&
        now &&
        `, ${timeAgo(track.playedAt, now)}`}
    </span>
  );
}
