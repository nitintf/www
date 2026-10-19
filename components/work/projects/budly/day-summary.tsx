import { motion } from 'motion/react';
import { SCENE_SPRING } from '@/components/work/constants';
import { BUDLY } from '@/components/work/projects/budly/constants';

export function DaySummary({ done, total }: { done: number; total: number }) {
  return (
    <div className="mt-[1.2cqw] flex items-center gap-[1.3cqw]">
      <motion.img
        key={done}
        src="/work/bud.webp"
        alt=""
        draggable={false}
        className="w-[5.6cqw]"
        animate={{
          y: done > 0 ? [0, -6, 0] : 0,
          rotate: done > 0 ? [0, -6, 0] : 0,
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-[1.05cqw] leading-snug">
          {done === total
            ? 'All done. Bud is taking it easy.'
            : 'Afternoon. One small thing at a time.'}
        </p>
        <div className="mt-[0.7cqw] flex items-center gap-[0.8cqw]">
          <div
            className="h-[0.5cqw] flex-1 overflow-hidden rounded-full"
            style={{ background: BUDLY.track }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: BUDLY.mint }}
              initial={false}
              animate={{ width: `${(done / total) * 100}%` }}
              transition={SCENE_SPRING}
            />
          </div>
          <span
            className="text-[0.95cqw] tabular-nums"
            style={{ color: BUDLY.muted }}
          >
            {done} of {total}
          </span>
        </div>
      </div>
    </div>
  );
}
