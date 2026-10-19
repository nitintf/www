import { ImageResponse } from 'next/og';
import { OG_SIZE, OgCard } from '@/lib/og/og-card';

export const alt = 'What Nitin Panwar is up to right now';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OgCard
      title="now"
      subtitle="what nitin panwar is working on, building and learning right now"
    />,
    size,
  );
}
