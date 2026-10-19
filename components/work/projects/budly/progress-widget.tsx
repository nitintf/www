/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react';
import { SCENE_SPRING } from '@/components/work/constants';
import { WIDGET } from '@/components/work/projects/budly/constants';
import { WidgetShell } from '@/components/work/projects/budly/widget-shell';

export function ProgressWidget({
  done,
  total,
}: {
  done: number;
  total: number;
}) {
  return (
    <WidgetShell className="left-[6cqw] top-[12cqw] size-[19cqw] -rotate-[5deg] p-[1.8cqw]">
      <img
        src="/work/bud.webp"
        alt=""
        draggable={false}
        className="absolute -right-[3cqw] -top-[1cqw] w-[14cqw] opacity-95"
      />
      <div className="absolute inset-x-[1.8cqw] bottom-[1.8cqw]">
        <p className="text-[3.4cqw] font-bold leading-none tabular-nums">
          {done}
          <span
            className="text-[1.6cqw] font-semibold"
            style={{ color: WIDGET.faint }}
          >
            /{total}
          </span>
        </p>
        <p
          className="pt-[0.4cqw] text-[1.1cqw]"
          style={{ color: WIDGET.faint }}
        >
          {total - done === 0 ? 'all done' : `${total - done} to go`}
        </p>
        <div
          className="mt-[0.8cqw] h-[0.5cqw] overflow-hidden rounded-full"
          style={{ background: WIDGET.ring }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: WIDGET.ink }}
            initial={false}
            animate={{ width: `${(done / total) * 100}%` }}
            transition={SCENE_SPRING}
          />
        </div>
      </div>
    </WidgetShell>
  );
}
