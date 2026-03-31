import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nitin Panwar — Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const sentient = await fetch(
    new URL('../assets/fonts/Sentient-Regular.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const sentientItalic = await fetch(
    new URL('../assets/fonts/Sentient-RegularItalic.otf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        backgroundColor: '#fafafa',
        padding: '80px',
      }}
    >
      {/* Name — Role (mirrors site header) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '12px',
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontFamily: 'Sentient Italic',
            fontWeight: 500,
            color: '#171717',
            letterSpacing: '0.03em',
          }}
        >
          Nitin Panwar
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#a3a3a3',
          }}
        >
          —
        </div>
        <div
          style={{
            fontSize: 48,
            fontFamily: 'Sentient Italic',
            color: '#525252',
            letterSpacing: '0.03em',
          }}
        >
          Engineer
        </div>
      </div>

      {/* Bio */}
      <div
        style={{
          fontSize: 22,
          fontFamily: 'Sentient',
          color: '#737373',
          lineHeight: 1.5,
          marginTop: '20px',
          maxWidth: '800px',
        }}
      >
        Software engineer with 5+ years of experience building web, mobile, and
        backend systems.
      </div>

      {/* URL bottom-right */}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          fontSize: 20,
          fontFamily: 'Sentient',
          color: '#a3a3a3',
          letterSpacing: '0.03em',
        }}
      >
        nitin.sh
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Sentient',
          data: sentient,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Sentient Italic',
          data: sentientItalic,
          style: 'italic',
          weight: 400,
        },
      ],
    },
  );
}
