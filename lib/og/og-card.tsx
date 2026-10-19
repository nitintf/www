import {
  DOODLE_STROKES,
  DOODLE_VIEWBOX,
} from '@/components/layout/doodle-strokes';

export const OG_SIZE = { width: 1200, height: 630 };

const INK = '#171717';
const MUTED = '#7a7a78';

// Share image in the site's look: the name with its smiley-and-arrow doodle,
// a line under it, and the address at the bottom.
export function OgCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fbfbfa',
        padding: '96px 104px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ fontSize: 72, color: INK, letterSpacing: '-0.02em' }}>
            {title}
          </div>
          <svg
            width="240"
            height="100"
            viewBox={DOODLE_VIEWBOX}
            style={{
              marginLeft: 8,
              marginTop: -40,
              transform: 'rotate(-8deg)',
            }}
          >
            {DOODLE_STROKES.map((stroke) => (
              <path
                key={stroke.d}
                d={stroke.d}
                fill="none"
                stroke={INK}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>
        <div
          style={{ fontSize: 40, color: MUTED, marginTop: 20, maxWidth: 900 }}
        >
          {subtitle}
        </div>
      </div>
      <div style={{ fontSize: 30, color: MUTED }}>nitin.sh</div>
    </div>
  );
}
