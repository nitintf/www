'use client';

import { motion } from 'motion/react';
import {
  BORDER_DRAW_S,
  DETAIL_DELAY_S,
  DETAIL_FADE_S,
} from '@/components/location/constants';
import { LocationPin } from '@/components/location/location-pin';
import { INDIA_MAP, INDIA_MAP_PIN } from '@/lib/india-map';

const PADDING = 6;

// The land is there from the first frame. The border draws itself outwards
// from the pin, then the state lines and rivers fade in.
export function IndiaMap({ reduced }: { reduced: boolean }) {
  const { width, height, border, states, rivers, home } = INDIA_MAP;

  return (
    <svg
      viewBox={`${-PADDING} ${-PADDING} ${width + PADDING * 2} ${height + PADDING * 2}`}
      className="block h-auto w-full overflow-visible"
      aria-label="Map of India with a pin near Noida"
      role="img"
    >
      <path d={border} fill="var(--theme-color-map-land)" />
      <path d={home} fill="var(--theme-color-map-home)" />
      <motion.g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? false : { opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: DETAIL_FADE_S, delay: DETAIL_DELAY_S },
        }}
      >
        <path
          d={states}
          stroke="var(--theme-color-map-states)"
          strokeWidth={0.8}
        />
        <path
          d={rivers}
          stroke="var(--theme-color-map-river)"
          strokeWidth={0.9}
        />
      </motion.g>
      <motion.path
        d={border}
        fill="none"
        stroke="var(--theme-color-map-border)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{
          pathLength: 1,
          transition: { duration: BORDER_DRAW_S, ease: [0.45, 0, 0.25, 1] },
        }}
      />
      <LocationPin x={INDIA_MAP_PIN.x} y={INDIA_MAP_PIN.y} reduced={reduced} />
    </svg>
  );
}
