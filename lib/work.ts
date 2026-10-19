export type ProjectSlug =
  | 'promptomato'
  | 'budly'
  | 'dicta'
  | 'layout'
  | 'easel';

export interface Project {
  slug: ProjectSlug;
  name: string;
  what: string;
  story: string;
  stack: string;
  platform: string;
  category: string;
  status?: string;
  url?: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: 'promptomato',
    name: 'promptomato',
    what: 'a tiny tomato in your mac notch',
    story:
      'dictation, meeting notes and focus, right from the notch. hold fn and talk to write in any app, get notes from every call with no bot in the meeting, and a small tomato notices when you drift.',
    stack: 'swift 6, swiftui, on-device llm',
    platform: 'macOS',
    category: 'ProductivityApplication',
    url: 'https://promptomato.app',
    links: [{ label: 'promptomato.app', href: 'https://promptomato.app' }],
  },
  {
    slug: 'budly',
    name: 'budly',
    what: 'a calm habit app for ios and android',
    story:
      'bud, a small sprout, copies what you do and slowly learns your habits. hold to log, skip a day and bud has a couch day too, and after about 66 days a habit is learned and a new leaf grows.',
    stack: 'expo, react native, sqlite, widgets',
    platform: 'iOS, Android',
    category: 'LifestyleApplication',
    status: 'coming soon',
    links: [],
  },
  {
    slug: 'dicta',
    name: 'dicta',
    what: 'voice to text for the mac, fully on-device',
    story:
      'speech to polished text with models that run on your machine. no cloud, no subscription, no limits, and your words never leave the mac.',
    stack: 'rust, tauri, typescript, whisper',
    platform: 'macOS',
    category: 'ProductivityApplication',
    url: 'https://dicta.nitin.sh',
    links: [
      { label: 'dicta.nitin.sh', href: 'https://dicta.nitin.sh' },
      { label: 'github', href: 'https://github.com/nitintf/dicta' },
    ],
  },
  {
    slug: 'layout',
    name: 'layout',
    what: 'window management for macos',
    story:
      'snap windows to halves, quarters or full screen from the menu bar or a shortcut, with the gap between windows set the way you like.',
    stack: 'electron, react, typescript',
    platform: 'macOS',
    category: 'UtilitiesApplication',
    url: 'https://github.com/nitintf/layout',
    links: [{ label: 'github', href: 'https://github.com/nitintf/layout' }],
  },
  {
    slug: 'easel',
    name: 'easel',
    what: 'a design studio driven by claude',
    story:
      'an ai-native design canvas. agents build and edit your frames over mcp while you watch, and you stay in control of every layer.',
    stack: 'typescript, mcp, claude',
    platform: 'macOS',
    category: 'DesignApplication',
    url: 'https://github.com/nitintf/easel',
    links: [{ label: 'github', href: 'https://github.com/nitintf/easel' }],
  },
];

export const moreProjects = [
  { name: 'claudewatch', href: 'https://github.com/nitintf/claudewatch' },
  { name: 'openport', href: 'https://github.com/nitintf/openport' },
  { name: 'nl2sql', href: 'https://github.com/nitintf/nl2sql' },
  { name: 'nullmail', href: 'https://github.com/nitintf/nullmail' },
  { name: 'commet', href: 'https://github.com/nitintf/commet' },
  { name: 'navi', href: 'https://github.com/nitintf/navi' },
];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
