'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  popoverPlacement,
  type PopoverPlacement,
} from '@/lib/utils/popover-placement';

type Options = {
  size: { width: number; height: number };
  gap: number;
  gutter: number;
};

// Open state and placement for a popover anchored to an inline element.
// Escape, a tap outside, or scrolling closes it.
export function useHoverPopover<T extends HTMLElement>({
  size,
  gap,
  gutter,
}: Options) {
  const ref = useRef<T>(null);
  const timer = useRef<number>(undefined);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopoverPlacement>({
    side: 'bottom',
    offset: 0,
  });

  const show = useCallback(
    (delay = 0) => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        const anchor = ref.current?.getBoundingClientRect();
        if (!anchor) return;
        setPlacement(popoverPlacement(anchor, size, gap, gutter));
        setOpen(true);
      }, delay);
    },
    [size, gap, gutter],
  );

  const hide = useCallback((delay = 0) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), delay);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => hide();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && hide();
    const onPointerDown = (e: PointerEvent) =>
      !ref.current?.contains(e.target as Node) && hide();
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('scroll', close, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', close);
    };
  }, [open, hide]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { ref, open, placement, show, hide };
}
