import { AnimatePresence } from 'motion/react';
import type { Nudge } from '@/components/work/projects/promptomato/constants';
import { NudgeContent } from '@/components/work/projects/promptomato/nudge-content';

export function Notch({ open, nudge }: { open: boolean; nudge: Nudge }) {
  return (
    <div
      className={`absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden bg-black transition-[width,height,border-radius] duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
        open
          ? 'h-[11.5cqw] w-[42cqw] rounded-b-[2.8cqw]'
          : 'h-[3.4cqw] w-[16cqw] rounded-b-[1.3cqw]'
      }`}
    >
      <AnimatePresence mode="wait">
        {open && <NudgeContent key={nudge.title} nudge={nudge} />}
      </AnimatePresence>
    </div>
  );
}
