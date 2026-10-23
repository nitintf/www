'use client';

import { motion } from 'motion/react';
import {
  CARD_GAP,
  CARD_SIZE,
  VIEWPORT_GUTTER,
} from '@/components/location/constants';
import { IndiaMap } from '@/components/location/india-map';
import { useNow } from '@/hooks/use-now';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { HOME_COORDINATES, HOME_TIMEZONE_LABEL } from '@/lib/constants';
import { formatCoordinates } from '@/lib/utils/coordinates';
import type { PopoverPlacement } from '@/lib/utils/popover-placement';
import { homeTime } from '@/lib/utils/time';

const CHIP = 'rounded-full border border-line px-3 py-1';

// The map with where I am and the time there. Grows out of the word it
// is anchored to.
export function LocationCard({
  id,
  placement,
}: {
  id: string;
  placement: PopoverPlacement;
}) {
  const reduced = useReducedMotion();
  const now = useNow();
  const above = placement.side === 'top';
  const nudge = reduced ? 0 : above ? 6 : -6;

  return (
    <motion.span
      id={id}
      role="tooltip"
      initial={{ opacity: 0, scale: reduced ? 1 : 0.95, y: nudge }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', duration: 0.35, bounce: 0.15 },
      }}
      exit={{
        opacity: 0,
        scale: reduced ? 1 : 0.97,
        y: nudge / 2,
        transition: { duration: 0.14, ease: 'easeIn' },
      }}
      style={{
        width: `min(${CARD_SIZE.width}px, calc(100vw - ${VIEWPORT_GUTTER * 2}px))`,
        left: placement.offset,
        [above ? 'bottom' : 'top']: `calc(100% + ${CARD_GAP}px)`,
        transformOrigin: above ? 'bottom center' : 'top center',
      }}
      className="absolute z-50 block rounded-[var(--theme-radius-card)] border border-line bg-card px-4 pt-5 pb-4 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.3)]"
    >
      <IndiaMap reduced={reduced} />
      <span className="mt-4 flex items-center justify-between gap-2 text-sm whitespace-nowrap tabular-nums">
        <span className={`${CHIP} text-muted`}>
          {formatCoordinates(HOME_COORDINATES)}
        </span>
        {now && (
          <span className={`${CHIP} text-fg`}>
            {homeTime(now)} {HOME_TIMEZONE_LABEL}
          </span>
        )}
      </span>
    </motion.span>
  );
}
