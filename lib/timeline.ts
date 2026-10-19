import { ampd, codersera, dicta, promptomato } from '@/lib/links';
import type { Rich } from '@/lib/rich-text';

export interface TimelineYear {
  label: string;
  items: Rich[];
}

export const timeline: TimelineYear[] = [
  {
    label: '2026',
    items: [['working on ', promptomato, ' and budly']],
  },
  {
    label: '2025',
    items: [
      [
        'joined ',
        ampd,
        ', software for batteries that replace diesel generators',
      ],
      ['made ', dicta, ', on-device voice to text for the mac'],
    ],
  },
  {
    label: '2024',
    items: [['promoted to senior engineer at bitcs']],
  },
  {
    label: '2023',
    items: [
      ['joined bitcs, built raven and more websockets than anyone asked for'],
      ['graduated, b.tech in computer science'],
    ],
  },
  {
    label: '2021',
    items: [
      [
        'first real job at ',
        codersera,
        '. learned production is just localhost with consequences',
      ],
      ['frontend intern at sapio analytics'],
    ],
  },
  {
    label: '2019',
    items: [['finished school, picked computer science']],
  },
  {
    label: '2000',
    items: [['born. no commits that year']],
  },
];
