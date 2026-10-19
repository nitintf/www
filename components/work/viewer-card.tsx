'use client';

import { motion, type Variants } from 'motion/react';
import { forwardRef } from 'react';
import { FADE_TRANSITION, ZOOM_TRANSITION } from '@/components/work/constants';
import { WorkCard } from '@/components/work/work-card';
import type { Flip } from '@/lib/utils/flip';
import type { Project } from '@/lib/work';

const flight: Variants = {
  land: (to: Flip | null) =>
    to
      ? { ...to, transition: ZOOM_TRANSITION }
      : { opacity: 0, transition: FADE_TRANSITION },
  fade: { opacity: 0, transition: FADE_TRANSITION },
};

export const ViewerCard = forwardRef<
  HTMLDivElement,
  {
    project: Project;
    active: boolean;
    entering: boolean;
    onSelect: () => void;
  }
>(function ViewerCard({ project, active, entering, onSelect }, ref) {
  return (
    <motion.button
      type="button"
      aria-label={`Show ${project.name}`}
      className="block w-full cursor-pointer rounded-[var(--theme-radius-card)] text-left"
      initial={entering ? false : { opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.5, scale: active ? 1 : 0.95 }}
      transition={{ ...FADE_TRANSITION, delay: entering ? 0 : 0.12 }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <motion.div
        ref={ref}
        style={{ originX: 0, originY: 0 }}
        variants={flight}
        exit={active ? 'land' : 'fade'}
      >
        <WorkCard slug={project.slug} paused={!active} />
      </motion.div>
    </motion.button>
  );
});
