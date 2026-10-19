export const SENTENCES = [
  'So the build is ready, can you test it on Tuesday and send me the notes after?',
  'Remind me to call mom after the standup, and book the train for Friday.',
  'Ship the fix today, then write up what broke and why it took us so long.',
];

export const TYPING_MS = 4200;
export const HOLD_MS = 5000;
export const CLEAR_MS = 700;
export const BAR_COUNT = 26;

export const PHASES = { listening: 0, holding: 1, clearing: 2 } as const;
const PHASE_COUNT = 3;

// Listen, hold the finished sentence, clear; once per sentence.
export const DICTATION_DURATIONS = SENTENCES.flatMap(() => [
  TYPING_MS + 400,
  HOLD_MS,
  CLEAR_MS,
]);

export function phaseOf(step: number) {
  return {
    sentence: Math.floor(step / PHASE_COUNT),
    phase: step % PHASE_COUNT,
  };
}

export const DICTA_GREEN = '#3ddc84';
