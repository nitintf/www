import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  // Use fallback content if no title/description provided
  const displayTitle = title || 'Nitin Panwar';
  const displayDescription = description || 'Senior Software Engineer';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: '"Geist Sans", system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top left branding */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '60px',
            fontSize: '28px',
            fontWeight: '500',
            color: '#fff',
            fontFamily: '"Geist Mono", monospace',
            letterSpacing: '0.5px',
          }}
        >
          nitin.sh
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100%',
            padding: '100px 80px',
          }}
        >
          <h1
            style={{
              fontSize: title ? '56px' : '64px',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: '#fff',
              lineHeight: '1.1',
              maxWidth: '900px',
            }}
          >
            {displayTitle}
          </h1>

          <p
            style={{
              fontSize: '28px',
              color: '#888',
              lineHeight: '1.3',
              maxWidth: '700px',
              margin: 0,
            }}
          >
            {displayDescription}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
