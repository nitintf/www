import type { Project } from '@/lib/work';

// The same content the viewer shows, rendered on the server as plain HTML
// so search engines and screen readers get every project without clicking.
export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="sr-only">
      {projects.map((project) => (
        <article key={project.slug}>
          <h3>
            <a href={`/work/${project.slug}`}>
              {project.name}, {project.what}
            </a>
          </h3>
          <p>{project.story}</p>
          <p>Built with {project.stack}.</p>
          {project.status && <p>{project.status}</p>}
          {project.links.map((link) => (
            <a key={link.href} href={link.href}>
              {project.name} on {link.label}
            </a>
          ))}
        </article>
      ))}
    </div>
  );
}
