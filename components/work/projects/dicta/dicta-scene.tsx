'use client';

import { useSequence } from '@/hooks/use-sequence';
import { useTypewriter } from '@/hooks/use-typewriter';
import {
  DICTATION_DURATIONS,
  PHASES,
  SENTENCES,
  TYPING_MS,
  phaseOf,
} from '@/components/work/projects/dicta/constants';
import { RecordingPill } from '@/components/work/projects/dicta/recording-pill';
import { Transcript } from '@/components/work/projects/dicta/transcript';

export function DictaScene() {
  const { ref, step, reduced } = useSequence(
    DICTATION_DURATIONS,
    PHASES.holding,
  );
  const { sentence, phase } = phaseOf(step);
  const text = SENTENCES[sentence];
  const listening = !reduced && phase === PHASES.listening;

  const typed = useTypewriter({
    text,
    durationMs: TYPING_MS,
    typing: listening,
    clear: !reduced && phase === PHASES.clearing,
  });

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col items-center justify-center gap-[4cqw] px-[8cqw]"
    >
      <RecordingPill listening={listening} />
      <Transcript text={text.slice(0, reduced ? text.length : typed)} />
    </div>
  );
}
