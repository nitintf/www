import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
  description: 'Projects and tools built by Nitin Panwar.',
};

interface WorkItem {
  title: string;
  description: string;
  tag: string;
  url: string;
}

const works: WorkItem[] = [
  {
    title: 'promptomato',
    description: 'A tiny tomato companion that keeps you focused.',
    tag: 'macOS · AI',
    url: 'https://promptomato.app',
  },
  {
    title: 'dicta',
    description: 'On-device voice-to-text for macOS.',
    tag: 'macOS',
    url: 'https://dicta.nitin.sh',
  },
  {
    title: 'easel',
    description: 'Design studio powered by Claude via MCP.',
    tag: 'macOS · AI',
    url: 'https://github.com/nitintf/easel',
  },
  {
    title: 'navi',
    description: 'AI-powered shell guide for developers.',
    tag: 'CLI · AI',
    url: 'https://github.com/nitintf/navi',
  },
  {
    title: 'nullmail',
    description: 'Self-deployable temp mail SMTP service.',
    tag: 'Go',
    url: 'https://github.com/nitintf/nullmail',
  },
  {
    title: 'layout',
    description: 'Seamless window and app management.',
    tag: 'macOS',
    url: 'https://github.com/nitintf/layout',
  },
  {
    title: 'commet',
    description: 'AI-powered commit message generator.',
    tag: 'CLI · AI',
    url: 'https://github.com/nitintf/commet',
  },
  {
    title: 'nl2sql',
    description: 'Natural language to SQL conversion.',
    tag: 'AI',
    url: 'https://github.com/nitintf/nl2sql',
  },
  {
    title: 'claudewatch',
    description: 'Themed status line for Claude Code.',
    tag: 'CLI',
    url: 'https://github.com/nitintf/claudewatch',
  },
  {
    title: 'openport',
    description: 'Expose local services via secure tunnels.',
    tag: 'Go · CLI',
    url: 'https://github.com/nitintf/openport',
  },
];

export default function WorksPage() {
  return (
    <main role="main" aria-label="Works">
      <div className="w-full max-w-2xl mx-auto px-8 pb-8">
        <h1 className="sr-only">Works — Nitin Panwar</h1>
        <div className="pt-5">
          <p className="text-sm leading-relaxed text-ui-10">
            I like building tools that solve problems I run into myself. Most of
            these started as weekend experiments — a scratch for an itch — and
            grew from there. I care more about things being useful than
            polished.
          </p>
        </div>

        <ul className="list-none divide-y divide-ui-4/40 mt-12">
          {works.map((item) => (
            <li key={item.title}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="plain-link group flex items-baseline justify-between gap-4 py-2.5"
              >
                <div className="min-w-0 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-ui-12 group-hover:text-accent-500 transition-colors shrink-0">
                    {item.title}
                  </span>
                  <span className="text-xs text-ui-8">{item.description}</span>
                </div>
                <span className="text-[11px] text-ui-7 shrink-0 tabular-nums">
                  {item.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
