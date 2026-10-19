import type { ProjectSlug } from '@/lib/work';

export const ZOOM_EASE = [0.32, 0.72, 0, 1] as const;
export const ZOOM_TRANSITION = { duration: 0.45, ease: ZOOM_EASE } as const;
export const FADE_TRANSITION = { duration: 0.3, ease: 'easeOut' } as const;
export const SCENE_SPRING = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
} as const;

// Distance from the window edge to the text column, so the strip can run
// edge to edge while its first card lines up with the text.
export const STRIP_INSET =
  'max(var(--spacing-gutter), calc((100vw - var(--container-content)) / 2 + var(--spacing-gutter)))';

export const CARD_TEXTURES: Record<ProjectSlug, string> = {
  promptomato: 'texture-diagonal',
  budly: 'texture-dots',
  dicta: 'texture-waves',
  layout: 'texture-plus',
  easel: 'texture-stagger',
};

// Size and place of an opened card; must match the viewer's
// w-[min(38rem,78vw)] so the zoom lands where the card is laid out.
export const OPEN_CARD = {
  maxRem: 38,
  maxViewport: 0.78,
  top: 0.12,
  gapRem: 1.5,
};
export const OPEN_CARD_WIDTH = `min(${OPEN_CARD.maxRem}rem, ${OPEN_CARD.maxViewport * 100}vw)`;
