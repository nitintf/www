import { ImageResponse } from 'next/og';
import { OG_SIZE, OgCard } from '@/lib/og/og-card';

export const alt = 'Resume of Nitin Panwar';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OgCard
      title="resume"
      subtitle="nitin panwar, full-stack engineer: experience, projects and skills"
    />,
    size,
  );
}
