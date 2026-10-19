export interface Nudge {
  face: string;
  title: string;
  body: string;
  actions: string[];
}

export const NUDGES: Nudge[] = [
  {
    face: '/work/tomato-happy.webp',
    title: 'Standup in 5 min',
    body: 'Good moment to stand up, stretch and grab some water before it starts.',
    actions: ['Nice'],
  },
  {
    face: '/work/tomato-sip.webp',
    title: 'Sip break!',
    body: "It's been 45 minutes. Finish a glass of water, then carry on.",
    actions: ['Nice'],
  },
  {
    face: '/work/tomato-cross.webp',
    title: "Hey! That's YouTube.",
    body: 'You still have 42 minutes of focus. Close it and get back to it.',
    actions: ['OK, closing it', "It's research"],
  },
];

const OPEN_MS = 2800;
const CLOSED_MS = 900;

// Open on even steps, closed on odd ones, one pair per nudge.
export const NOTCH_DURATIONS = NUDGES.flatMap(() => [OPEN_MS, CLOSED_MS]);

export const WALLPAPER =
  'radial-gradient(90% 80% at 80% 100%, #d0583d 0%, transparent 60%), radial-gradient(80% 90% at 10% 100%, #6b2f6a 0%, transparent 65%), #2a1530';
