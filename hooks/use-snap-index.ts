'use client';

import { useCallback, useEffect, useState, type RefObject } from 'react';

function nearestChild(scroller: HTMLElement) {
  const center = scroller.scrollLeft + scroller.clientWidth / 2;
  const children = [
    ...scroller.querySelectorAll<HTMLElement>('[data-snap-item]'),
  ];
  let best = 0;
  let bestDistance = Infinity;
  children.forEach((child, i) => {
    const distance = Math.abs(
      child.offsetLeft + child.offsetWidth / 2 - center,
    );
    if (distance < bestDistance) {
      best = i;
      bestDistance = distance;
    }
  });
  return best;
}

function leftFor(scroller: HTMLElement, index: number) {
  const child =
    scroller.querySelectorAll<HTMLElement>('[data-snap-item]')[index];
  if (!child) return scroller.scrollLeft;
  return child.offsetLeft - (scroller.clientWidth - child.offsetWidth) / 2;
}

// Tracks which `[data-snap-item]` is centred in a horizontal scroller.
export function useSnapIndex(
  ref: RefObject<HTMLElement | null>,
  initialIndex: number,
) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIndex(nearestChild(scroller)));
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  const scrollTo = useCallback(
    (target: number) => {
      const scroller = ref.current;
      if (!scroller) return;
      scroller.scrollTo({
        left: leftFor(scroller, target),
        behavior: 'smooth',
      });
    },
    [ref],
  );

  // Jumps without animation; used to open on the clicked card.
  const jumpTo = useCallback((scroller: HTMLElement, target: number) => {
    scroller.scrollLeft = leftFor(scroller, target);
  }, []);

  return { index, scrollTo, jumpTo };
}
