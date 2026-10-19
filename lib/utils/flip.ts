export interface Flip {
  x: number;
  y: number;
  scale: number;
}

// Transform (origin top-left) that makes a box at `to` look like it sits at
// `from`. Both boxes share an aspect ratio, so one scale is enough.
export function flipBetween(from: DOMRect, to: DOMRect): Flip {
  return {
    x: from.left - to.left,
    y: from.top - to.top,
    scale: from.width / to.width,
  };
}
