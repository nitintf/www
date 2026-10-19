import { motion } from 'motion/react';
import { SCENE_SPRING } from '@/components/work/constants';
import {
  WINDOW_GAP_CQW,
  type WindowBox,
} from '@/components/work/projects/layout/constants';

const half = WINDOW_GAP_CQW / 2;

const offset = (percent: number) =>
  `calc(${percent}% + ${percent ? half : 0}cqw)`;
const span = (percent: number) =>
  `calc(${percent}% - ${percent < 100 ? half : 0}cqw)`;

export function AppWindow({ box, color }: { box: WindowBox; color: string }) {
  return (
    <motion.div
      className="absolute overflow-hidden rounded-[1.2cqw] bg-white shadow-[0_1cqw_3cqw_-1cqw_rgb(0_0_0/0.35)]"
      initial={false}
      animate={{
        left: offset(box.left),
        top: offset(box.top),
        width: span(box.width),
        height: span(box.height),
        zIndex: box.z,
      }}
      transition={SCENE_SPRING}
    >
      <div
        className="flex h-[2.8cqw] items-center gap-[0.6cqw] px-[1.2cqw]"
        style={{ background: color }}
      >
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-[0.9cqw] rounded-full bg-white/70" />
        ))}
      </div>
      <div className="space-y-[1cqw] p-[1.6cqw]">
        {['w-3/4', 'w-1/2', 'w-2/3'].map((width) => (
          <span
            key={width}
            className={`block h-[1cqw] rounded-full bg-black/10 ${width}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
