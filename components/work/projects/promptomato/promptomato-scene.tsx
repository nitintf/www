'use client';

import { useSequence } from '@/hooks/use-sequence';
import {
  NOTCH_DURATIONS,
  NUDGES,
  WALLPAPER,
} from '@/components/work/projects/promptomato/constants';
import { MenuBar } from '@/components/work/projects/promptomato/menu-bar';
import { Notch } from '@/components/work/projects/promptomato/notch';

export function PromptomatoScene() {
  const { ref, step } = useSequence(NOTCH_DURATIONS);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-x-[6cqw] top-[7cqw] bottom-0 overflow-hidden rounded-t-[2.4cqw]"
        style={{ background: WALLPAPER }}
      >
        <MenuBar />
        <Notch open={step % 2 === 0} nudge={NUDGES[Math.floor(step / 2)]} />
      </div>
    </div>
  );
}
