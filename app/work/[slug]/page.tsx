import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Page } from '@/components/layout/page';
import { Section } from '@/components/layout/section';
import { ExternalLinkIcon } from '@/components/ui/external-link-icon';
import { NewTabHint } from '@/components/ui/new-tab-hint';
import { TextLink } from '@/components/ui/text-link';
import { ProjectStructuredData } from '@/components/work/project-structured-data';
import { WorkCard } from '@/components/work/work-card';
import { findProject, projects } from '@/lib/work';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name}, ${project.what}`,
    description: project.story,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function WorkPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();
  const others = projects.filter((other) => other.slug !== project.slug);

  return (
    <Page label={project.name}>
      <ProjectStructuredData project={project} />
      <header>
        <h1 className="text-base text-fg">{project.name}</h1>
        <p className="text-base text-muted">
          {project.what}
          {project.status && ` · ${project.status}`}
        </p>
      </header>

      <div className="pt-block">
        <WorkCard slug={project.slug} />
      </div>

      <div className="pt-block space-y-paragraph text-base leading-body text-fg">
        <p>{project.story}</p>
        <p className="text-sm text-muted">built with {project.stack}</p>
        {project.links.length > 0 && (
          <p className="flex gap-x-inline">
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
      </div>

      <Section title="more work">
        <p className="flex flex-wrap gap-x-inline gap-y-2 text-base">
          {others.map((other) => (
            <TextLink key={other.slug} href={`/work/${other.slug}`}>
              {other.name}
            </TextLink>
          ))}
        </p>
      </Section>
    </Page>
  );
}
