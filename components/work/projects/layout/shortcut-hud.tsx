import { motion } from 'motion/react';
import { SHORTCUTS } from '@/components/work/projects/layout/constants';

export function ShortcutHud({ command }: { command: string }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1cqw] rounded-[2cqw] bg-black/55 px-[3cqw] py-[2cqw] text-white backdrop-blur-md"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
    >
      <span className="flex gap-[0.6cqw]">
        {SHORTCUTS[command].map((key) => (
          <kbd
            key={key}
            className="flex size-[3.6cqw] items-center justify-center rounded-[0.8cqw] border border-white/25 bg-white/10 font-sans text-[1.8cqw]"
          >
            {key}
          </kbd>
        ))}
      </span>
      <span className="text-[1.4cqw] font-medium">{command}</span>
    </motion.div>
  );
}
