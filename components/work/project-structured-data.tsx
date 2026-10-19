import { SITE_URL } from '@/lib/constants';
import type { Project } from '@/lib/work';

export function projectSchema(project: Project) {
  return {
    '@type': 'SoftwareApplication',
    name: project.name,
    description: `${project.what}. ${project.story}`,
    applicationCategory: project.category,
    operatingSystem: project.platform,
    url: `${SITE_URL}/work/${project.slug}`,
    ...(project.url && { sameAs: project.url }),
    author: { '@type': 'Person', name: 'Nitin Panwar', url: SITE_URL },
  };
}

export function ProjectStructuredData({ project }: { project: Project }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...projectSchema(project),
        }),
      }}
    />
  );
}
