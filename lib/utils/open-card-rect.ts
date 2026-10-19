import { OPEN_CARD } from '@/components/work/constants';

// Where the centred card sits once the viewer is open, worked out from the
// window size so the zoom can start on the very first frame.
export function openCardRect() {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const width = Math.min(
    OPEN_CARD.maxRem * rem,
    window.innerWidth * OPEN_CARD.maxViewport,
  );
  const height = width * 0.7;
  const left = (window.innerWidth - width) / 2;
  const top = window.innerHeight * OPEN_CARD.top;
  return new DOMRect(left, top, width, height);
}
