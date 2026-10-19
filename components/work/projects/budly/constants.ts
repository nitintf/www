export type HabitIconName = 'drop' | 'book' | 'gym' | 'heart';

export interface Habit {
  name: string;
  detail: string;
  tint: string;
  icon: HabitIconName;
}

export const HABITS: Habit[] = [
  {
    name: 'Drink water',
    detail: 'Every day · 8 glasses',
    tint: '#2f4a57',
    icon: 'drop',
  },
  { name: 'Read', detail: 'Every day · 15 min', tint: '#4a3d22', icon: 'book' },
  { name: 'Gym', detail: '3 times a week', tint: '#24392f', icon: 'gym' },
  { name: 'Quit smoking', detail: 'Quit', tint: '#352b3d', icon: 'heart' },
];

// One step per habit logged, then a pause on "all done".
export const LOG_DURATIONS = [1400, 1100, 1100, 1100, 2200];

export const WIDGET = {
  cream: 'linear-gradient(160deg, #fbecd6, #f0cfa6)',
  ink: '#5a3d2b',
  faint: 'rgb(90 61 43 / 0.45)',
  ring: 'rgb(90 61 43 / 0.25)',
};

export const BUDLY = {
  background: '#151a18',
  row: '#1f2522',
  track: '#2a312e',
  ring: '#3a423e',
  text: '#eef2ef',
  muted: '#9aa49f',
  mint: '#8fd3a9',
  check: '#12201a',
};

export const TABS = ['Today', 'Focus', 'Journal', 'Progress'] as const;
export type TabName = (typeof TABS)[number];
