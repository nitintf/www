import { motion } from 'motion/react';
import { ExternalLinkIcon } from '@/components/ui/external-link-icon';
import { NewTabHint } from '@/components/ui/new-tab-hint';
import type { Project } from '@/lib/work';

export function WorkDetails({ project }: { project: Project }) {
  return (
    <motion.div
      className="mx-auto w-full max-w-content px-gutter"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-base text-fg">
        {project.name}
        <span className="text-muted">, {project.what}</span>
        {project.status && (
          <span className="text-muted"> · {project.status}</span>
        )}
      </h3>
      <p className="pt-2 text-base leading-body text-fg">{project.story}</p>
      <p className="pt-2 text-sm text-muted">{project.stack}</p>
      {project.links.length > 0 && (
        <p className="flex gap-x-inline pt-3 text-base">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="line-link"
            >
              {link.label}
              <ExternalLinkIcon />
              <NewTabHint />
            </a>
          ))}
        </p>
      )}
    </motion.div>
  );
}
