import { projectMarkdown } from '@/lib/agent-view';
import { markdownResponse } from '@/lib/utils/markdown';
import { findProject, projects } from '@/lib/work';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const project = findProject((await params).slug);
  if (!project) return new Response('Not found', { status: 404 });
  return markdownResponse(projectMarkdown(project));
}
