import type { Project } from '@/lib/work';

export function ViewerDots({
  projects,
  active,
  onSelect,
}: {
  projects: Project[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="flex justify-center gap-2 pt-5"
      onClick={(e) => e.stopPropagation()}
    >
      {projects.map((project, i) => (
        <button
          key={project.slug}
          type="button"
          aria-label={`Show ${project.name}`}
          aria-current={i === active ? 'true' : undefined}
          onClick={() => onSelect(i)}
          className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
            i === active ? 'w-5 bg-fg' : 'w-1.5 bg-faint hover:bg-muted'
          }`}
        />
      ))}
    </div>
  );
}
