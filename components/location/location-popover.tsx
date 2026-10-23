'use client';

import { AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';
import { useId } from 'react';
import {
  CARD_GAP,
  CARD_SIZE,
  CLOSE_DELAY_MS,
  OPEN_DELAY_MS,
  VIEWPORT_GUTTER,
} from '@/components/location/constants';
import { useHoverPopover } from '@/hooks/use-hover-popover';

const loadCard = () => import('@/components/location/location-card');

// The card carries the map data, so it loads on first hover, not with the
// page.
const LocationCard = dynamic(() => loadCard().then((m) => m.LocationCard), {
  ssr: false,
});

// A word in the copy that opens a map of where I am. Hover on a mouse,
// tap on touch, focus from the keyboard.
export function LocationPopover({ children }: { children: React.ReactNode }) {
  const id = useId();
  const { ref, open, placement, show, hide } = useHoverPopover<HTMLSpanElement>(
    { size: CARD_SIZE, gap: CARD_GAP, gutter: VIEWPORT_GUTTER },
  );

  const showSoon = (delay = 0) => {
    loadCard();
    show(delay);
  };

  return (
    <span
      ref={ref}
      className="relative inline-block"
      onPointerEnter={(e) =>
        e.pointerType === 'mouse' && showSoon(OPEN_DELAY_MS)
      }
      onPointerLeave={(e) => e.pointerType === 'mouse' && hide(CLOSE_DELAY_MS)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => showSoon()}
        onFocus={(e) => e.currentTarget.matches(':focus-visible') && showSoon()}
        onBlur={() => hide(CLOSE_DELAY_MS)}
        className="cursor-default border-b border-dotted border-line-strong leading-[inherit]"
      >
        {children}
      </button>
      <AnimatePresence>
        {open && <LocationCard id={id} placement={placement} />}
      </AnimatePresence>
    </span>
  );
}
