import { TextLink } from '@/components/ui/text-link';
import { moreProjects } from '@/lib/work';

export function MoreProjects() {
  return (
    <p className="pt-block text-base text-muted">
      also{' '}
      {moreProjects.map((project, i) => (
        <span key={project.name}>
          <TextLink href={project.href}>{project.name}</TextLink>
          {i < moreProjects.length - 1 ? ', ' : '.'}
        </span>
      ))}
    </p>
  );
}
