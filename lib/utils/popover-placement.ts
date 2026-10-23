import { clamp } from '@/lib/utils/math';

export type PopoverPlacement = { side: 'top' | 'bottom'; offset: number };

// Above the anchor when it fits, otherwise below. Centred on the anchor but
// kept inside the viewport; `offset` is relative to the anchor's left edge.
export function popoverPlacement(
  anchor: DOMRect,
  size: { width: number; height: number },
  gap: number,
  gutter: number,
): PopoverPlacement {
  const side = anchor.top > size.height + gap + gutter ? 'top' : 'bottom';
  const left = clamp(
    anchor.left + anchor.width / 2 - size.width / 2,
    gutter,
    window.innerWidth - gutter - size.width,
  );
  return { side, offset: left - anchor.left };
}
