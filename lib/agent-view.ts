import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants';
import { intro } from '@/lib/home';
import { profiles } from '@/lib/links';
import { now, nowCaption } from '@/lib/now';
import { timeline } from '@/lib/timeline';
import { link, richToMarkdown } from '@/lib/utils/markdown';
import { moreProjects, projects, type Project } from '@/lib/work';

const markdownPath = (path: string) => (path === '/' ? '/.md' : `${path}.md`);

function page(title: string, path: string, body: string[]) {
  const twin = `> Markdown twin of ${SITE_URL}${path === '/' ? '' : path}. Index: ${SITE_URL}/llms.txt`;
  return [`# ${title}`, twin, ...body].join('\n\n') + '\n';
}

const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

const projectLine = (project: Project) =>
  `${link(project.name, markdownPath(`/work/${project.slug}`))}: ${project.what}${project.status ? ` (${project.status})` : ''}`;

const moreLine = () =>
  `also ${moreProjects.map((project) => link(project.name, project.href)).join(', ')}.`;

export function homeMarkdown() {
  return page(SITE_NAME, '/', [
    ...intro.map(richToMarkdown),
    list(profiles.map((profile) => link(profile.label, profile.href))),
    '## Work',
    list(projects.map(projectLine)),
    moreLine(),
    '## Timeline',
    list(
      timeline.flatMap((year) =>
        year.items.map((item) => `${year.label}: ${richToMarkdown(item)}`),
      ),
    ),
  ]);
}

export function nowMarkdown() {
  return page('Now', '/now', [...now.map(richToMarkdown), `_${nowCaption}_`]);
}

export function projectMarkdown(project: Project) {
  const others = projects.filter((other) => other.slug !== project.slug);
  return page(project.name, `/work/${project.slug}`, [
    `**${project.what}**`,
    project.story,
    list([
      `platform: ${project.platform}`,
      `stack: ${project.stack}`,
      ...(project.status ? [`status: ${project.status}`] : []),
      ...project.links.map((l) => link(l.label, l.href)),
    ]),
    '## More work',
    list(others.map(projectLine)),
  ]);
}

export function llmsTxt() {
  return (
    [
      `# ${SITE_NAME}`,
      `> ${SITE_DESCRIPTION}`,
      'Personal site of Nitin Panwar. Every page has a markdown twin at the same path plus .md.',
      '## Pages',
      list([
        `${link('Home', markdownPath('/'))}: who i am, links, work and timeline`,
        `${link('Now', markdownPath('/now'))}: what i'm working on and learning right now`,
      ]),
      '## Work',
      list(projects.map(projectLine)),
      '## Optional',
      list([
        `${link('Resume', '/cv.pdf')}: pdf`,
        ...profiles
          .filter((profile) => profile.href.startsWith('http'))
          .map((profile) => link(profile.label, profile.href)),
      ]),
    ].join('\n\n') + '\n'
  );
}
