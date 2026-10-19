import { TextLink } from '@/components/ui/text-link';
import type { TimelineGroup } from '@/components/ui/timeline';

export const timeline: TimelineGroup[] = [
  {
    label: '2026',
    items: [
      <>
        working on{' '}
        <TextLink href="https://promptomato.app">promptomato</TextLink> and
        budly
      </>,
    ],
  },
  {
    label: '2025',
    items: [
      <>
        joined <TextLink href="https://www.ampd.energy">ampd energy</TextLink>,
        software for batteries that replace diesel generators
      </>,
      <>
        made <TextLink href="https://dicta.nitin.sh">dicta</TextLink>, on-device
        voice to text for the mac
      </>,
    ],
  },
  {
    label: '2024',
    items: ['promoted to senior engineer at bitcs'],
  },
  {
    label: '2023',
    items: [
      'joined bitcs, built raven and more websockets than anyone asked for',
      'graduated, b.tech in computer science',
    ],
  },
  {
    label: '2021',
    items: [
      <>
        first real job at{' '}
        <TextLink href="https://codersera.com">codersera</TextLink>. learned
        production is just localhost with consequences
      </>,
      'frontend intern at sapio analytics',
    ],
  },
  {
    label: '2019',
    items: ['finished school, picked computer science'],
  },
  {
    label: '2000',
    items: ['born. no commits that year'],
  },
];
