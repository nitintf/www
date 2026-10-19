'use client';

import { useEffect, useRef } from 'react';

const DRAG_THRESHOLD = 4;

// Lets a mouse drag a horizontal scroller. `wasDragged` tells a click
// handler to ignore the click that ends a drag.
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const dragged = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let drag: { x: number; left: number } | null = null;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      drag = { x: e.clientX, left: el.scrollLeft };
      dragged.current = false;
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > DRAG_THRESHOLD) {
        dragged.current = true;
        el.style.scrollSnapType = 'none';
      }
      el.scrollLeft = drag.left - dx;
    };
    const onUp = () => {
      drag = null;
      el.style.scrollSnapType = '';
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return { ref, wasDragged: () => dragged.current };
}
