import { ImageResponse } from 'next/og';
import { OG_SIZE, OgCard } from '@/lib/og/og-card';
import { findProject, projects } from '@/lib/work';

export const alt = 'A project by Nitin Panwar';
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = findProject((await params).slug);
  return new ImageResponse(
    <OgCard
      title={project?.name ?? 'nitin panwar'}
      subtitle={
        project ? `${project.what}, by nitin panwar` : 'full-stack engineer'
      }
    />,
    size,
  );
}
