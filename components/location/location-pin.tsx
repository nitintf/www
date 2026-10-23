'use client';

import { motion } from 'motion/react';
import { PIN_WAVE } from '@/components/location/constants';

// A maps app location dot: blue with a white ring, sending out a wave that
// grows and fades, then resting before the next.
export function LocationPin({
  x,
  y,
  reduced,
}: {
  x: number;
  y: number;
  reduced: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {!reduced && (
        <motion.circle
          r={7}
          fill="var(--theme-color-map-pin)"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, PIN_WAVE.scale],
            opacity: [PIN_WAVE.opacity, 0],
          }}
          transition={{
            duration: PIN_WAVE.duration,
            ease: [0.25, 0.6, 0.4, 1],
            repeat: Infinity,
            repeatDelay: PIN_WAVE.rest,
          }}
        />
      )}
      <circle
        r={7.5}
        fill="var(--theme-color-map-pin-ring)"
        style={{ filter: 'drop-shadow(0 1px 1.5px rgb(0 0 0 / 0.35))' }}
      />
      <circle r={5.5} fill="var(--theme-color-map-pin)" />
    </g>
  );
}
