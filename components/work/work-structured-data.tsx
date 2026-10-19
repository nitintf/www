import { projectSchema } from '@/components/work/project-structured-data';
import type { Project } from '@/lib/work';

export function WorkStructuredData({ projects }: { projects: Project[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Work by Nitin Panwar',
    itemListElement: projects.map((project, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: projectSchema(project),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
