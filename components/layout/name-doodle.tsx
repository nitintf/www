import {
  DOODLE_STROKES,
  DOODLE_VIEWBOX,
} from '@/components/layout/doodle-strokes';

const starts = DOODLE_STROKES.map((_, i) =>
  DOODLE_STROKES.slice(0, i).reduce((sum, stroke) => sum + stroke.duration, 0),
);

export function NameDoodle() {
  return (
    <svg
      viewBox={DOODLE_VIEWBOX}
      aria-hidden="true"
      className="pointer-events-none absolute -top-8 left-full ml-1 w-24 -rotate-[6deg] overflow-visible text-fg"
    >
      {DOODLE_STROKES.map((stroke, i) => (
        <path
          key={stroke.d}
          d={stroke.d}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="doodle-stroke"
          style={
            {
              '--duration': `${stroke.duration}ms`,
              '--delay': `${starts[i] + 30}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </svg>
  );
}
