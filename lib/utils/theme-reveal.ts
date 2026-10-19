type TransitionDocument = Document & {
  startViewTransition?: (update: () => void) => {
    ready: Promise<void>;
    finished: Promise<void>;
  };
};

const DURATION_MS = 650;
// Width of the feathered edge, in px.
const SOFT_EDGE = 90;
const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

// Reveals the new theme through a soft-edged circle growing out of `origin`
// until it passes the farthest corner, with a glowing ring riding its edge.
export function revealTheme(
  origin: { x: number; y: number },
  glow: string,
  apply: () => void,
) {
  const doc = document as TransitionDocument;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!doc.startViewTransition || reduced) {
    apply();
    return;
  }

  const { x, y } = origin;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const root = document.documentElement;
  root.style.setProperty('--reveal-x', `${x}px`);
  root.style.setProperty('--reveal-y', `${y}px`);
  root.style.setProperty('--reveal-soft', `${SOFT_EDGE}px`);

  let ring: HTMLDivElement | null = null;
  const transition = doc.startViewTransition(() => {
    apply();
    ring = document.createElement('div');
    ring.className = 'theme-reveal-ring';
    ring.style.left = `${x - radius}px`;
    ring.style.top = `${y - radius}px`;
    ring.style.width = ring.style.height = `${radius * 2}px`;
    ring.style.setProperty('--glow', glow);
    document.body.appendChild(ring);
  });

  transition.ready
    .then(() => {
      root.animate(
        { '--reveal-radius': ['0px', `${radius + SOFT_EDGE}px`] },
        {
          duration: DURATION_MS,
          easing: EASING,
          fill: 'forwards',
          pseudoElement: '::view-transition-new(root)',
        },
      );
      root.animate(
        {
          transform: ['scale(0)', 'scale(1)'],
          opacity: [1, 1, 0],
          offset: [0, 0.75, 1],
        },
        {
          duration: DURATION_MS,
          easing: EASING,
          pseudoElement: '::view-transition-new(theme-glow)',
        },
      );
    })
    .catch(() => {});

  transition.finished.finally(() => {
    ring?.remove();
    for (const name of ['--reveal-x', '--reveal-y', '--reveal-soft']) {
      root.style.removeProperty(name);
    }
  });
}
