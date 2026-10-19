import { motion } from 'motion/react';
import { BUDLY } from '@/components/work/projects/budly/constants';

export function CheckCircle({ checked }: { checked: boolean }) {
  return (
    <motion.span
      className="flex size-[2.6cqw] items-center justify-center rounded-full border-[0.25cqw]"
      initial={false}
      animate={{
        backgroundColor: checked ? BUDLY.mint : 'rgba(0,0,0,0)',
        borderColor: checked ? BUDLY.mint : BUDLY.ring,
        scale: checked ? [1, 1.18, 1] : 1,
      }}
      transition={{ duration: 0.35 }}
    >
      {checked && (
        <svg viewBox="0 0 24 24" className="w-[1.5cqw]">
          <motion.path
            d="M5 12.5l4.5 4.5L19 7.5"
            fill="none"
            stroke={BUDLY.check}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      )}
    </motion.span>
  );
}
