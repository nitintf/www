import { Equalizer } from '@/components/footer/equalizer';
import { NewTabHint } from '@/components/ui/new-tab-hint';
import type { Track } from '@/lib/spotify';

export function NowPlaying({ track }: { track: Track }) {
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
    </span>
  );
}
