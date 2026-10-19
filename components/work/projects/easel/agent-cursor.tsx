import { motion } from 'motion/react';
import { SCENE_SPRING } from '@/components/work/constants';
import {
  EASEL,
  FRAME,
  type Box,
} from '@/components/work/projects/easel/constants';

export function AgentCursor({ target }: { target: Box }) {
  return (
    <motion.div
      className="pointer-events-none absolute z-20"
      initial={false}
      animate={{
        left: `${((target.x + target.w * 0.8) / FRAME.box.w) * 100}%`,
        top: `${((target.y + target.h * 0.7) / FRAME.box.h) * 100}%`,
      }}
      transition={SCENE_SPRING}
    >
      <svg viewBox="0 0 16 16" className="w-[1.8cqw] drop-shadow">
        <path
          d="M2 1l11 6-5 1.5L6 14z"
          fill={EASEL.agent}
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <span
        className="ml-[1.2cqw] rounded-[0.4cqw] px-[0.6cqw] py-[0.15cqw] text-[0.9cqw] text-white"
        style={{ background: EASEL.agent }}
      >
        claude
      </span>
    </motion.div>
  );
}
