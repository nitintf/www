import { motion } from 'motion/react';
import { FRAME, type Layer } from '@/components/work/projects/easel/constants';

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

function LayerContent({ kind }: { kind: Layer['kind'] }) {
  switch (kind) {
    case 'status':
      return (
        <div className="flex h-full items-center justify-between px-[8%] text-[0.75cqw] font-semibold text-black">
          <span>9:41</span>
          <span>●●●</span>
        </div>
      );
    case 'art':
      return (
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff3e0,#f3c89c_55%,#e5a77a)]" />
      );
    case 'heading':
      return (
        <p className="text-[1.5cqw] font-bold leading-[1.05] tracking-tight text-black">
          Build habits that stick.
        </p>
      );
    case 'body':
      return (
        <div className="space-y-[0.5cqw] pt-[0.3cqw]">
          <span className="block h-[0.6cqw] w-full rounded-full bg-black/15" />
          <span className="block h-[0.6cqw] w-3/4 rounded-full bg-black/15" />
        </div>
      );
    case 'button':
      return (
        <div className="flex size-full items-center justify-center rounded-[0.7cqw] bg-[#7c6cff] text-[0.95cqw] font-medium text-white">
          Get started
        </div>
      );
  }
}

export function FrameLayer({
  layer,
  selected,
}: {
  layer: Layer;
  selected: boolean;
}) {
  const { box } = layer;
  return (
    <motion.div
      className="absolute"
      style={{
        left: pct(box.x, FRAME.box.w),
        top: pct(box.y, FRAME.box.h),
        width: pct(box.w, FRAME.box.w),
        height: pct(box.h, FRAME.box.h),
        outline: selected ? '1.5px solid #4a7dff' : 'none',
        outlineOffset: 1,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <LayerContent kind={layer.kind} />
    </motion.div>
  );
}
