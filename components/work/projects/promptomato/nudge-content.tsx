/* eslint-disable @next/next/no-img-element */
import { motion } from 'motion/react';
import type { Nudge } from '@/components/work/projects/promptomato/constants';

export function NudgeContent({ nudge }: { nudge: Nudge }) {
  return (
    <motion.div
      className="flex h-full items-center gap-[1.4cqw] px-[2cqw] pt-[0.7cqw]"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.18 } }}
      exit={{ opacity: 0, transition: { duration: 0.12 } }}
    >
      <img
        src={nudge.face}
        alt=""
        draggable={false}
        className="w-[6.6cqw] shrink-0"
      />
      <div className="min-w-0 text-white">
        <p className="text-[1.45cqw] font-semibold leading-tight">
          {nudge.title}
        </p>
        <p className="mt-[0.3cqw] text-[1cqw] leading-snug text-white/70">
          {nudge.body}
        </p>
        <div className="mt-[0.7cqw] flex gap-[0.6cqw]">
          {nudge.actions.map((action, i) => (
            <span
              key={action}
              className={`rounded-full px-[1cqw] py-[0.3cqw] text-[0.95cqw] font-medium ${
                i === 0 ? 'bg-[#e5533d]' : 'bg-white/15'
              }`}
            >
              {action}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
