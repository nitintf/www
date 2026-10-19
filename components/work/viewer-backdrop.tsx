import { motion } from 'motion/react';
import { FADE_TRANSITION } from '@/components/work/constants';

export function ViewerBackdrop() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 bg-bg/80 backdrop-blur-2xl backdrop-saturate-[1.8] will-change-[opacity]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={FADE_TRANSITION}
    />
  );
}
