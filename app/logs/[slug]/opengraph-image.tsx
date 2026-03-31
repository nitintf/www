import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getLogBySlug, getAllLogSlugs } from '@/lib/logs';

export const alt = 'Nitin Panwar — Logs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllLogSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  const title = log?.meta.title ?? slug;
  const description = log?.meta.description ?? '';

  const fontsDir = join(process.cwd(), 'assets', 'fonts');
  const sentient = await readFile(join(fontsDir, 'Sentient-Regular.otf'));
  const sentientItalic = await readFile(
    join(fontsDir, 'Sentient-RegularItalic.otf'),
  );

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
      {/* Log title */}
      <div
        style={{
          fontSize: 48,
          fontFamily: 'Sentient Italic',
          fontWeight: 500,
          color: '#171717',
          letterSpacing: '0.03em',
          lineHeight: 1.3,
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description && (
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
          {description}
        </div>
      )}

      {/* Author — bottom-left */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '10px',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontFamily: 'Sentient Italic',
            color: '#525252',
            letterSpacing: '0.03em',
          }}
        >
          Nitin Panwar
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#a3a3a3',
          }}
        >
          —
        </div>
        <div
          style={{
            fontSize: 20,
            fontFamily: 'Sentient',
            color: '#a3a3a3',
            letterSpacing: '0.03em',
          }}
        >
          nitin.sh
        </div>
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
