import { ImageResponse } from 'next/og';
import { OG_SIZE, OgCard } from '@/lib/og/og-card';

export const alt = 'Nitin Panwar, full-stack engineer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OgCard
      title="nitin panwar"
      subtitle="full-stack engineer from india, building apps for the web, the mac and phones"
    />,
    size,
  );
}
