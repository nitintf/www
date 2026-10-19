export const EASEL = {
  window: '#1e1e1e',
  panel: '#252526',
  border: 'rgb(255 255 255 / 0.08)',
  field: '#2d2d30',
  text: '#e4e4e4',
  muted: '#8b8b8b',
  faint: '#5f5f5f',
  accent: '#4a7dff',
  selected: '#2b3a5c',
  agent: '#7c6cff',
};

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type LayerKind = 'status' | 'art' | 'heading' | 'body' | 'button';

export interface Layer {
  name: string;
  kind: LayerKind;
  box: Box;
}

export const FRAME = {
  name: 'Frame 1 — Mobile',
  box: { x: 213, y: -125, w: 375, h: 812 },
};

export const LAYERS: Layer[] = [
  { name: 'Status bar', kind: 'status', box: { x: 0, y: 0, w: 375, h: 44 } },
  {
    name: 'Illustration',
    kind: 'art',
    box: { x: 112, y: 150, w: 150, h: 150 },
  },
  { name: 'Heading', kind: 'heading', box: { x: 32, y: 344, w: 311, h: 76 } },
  { name: 'Body', kind: 'body', box: { x: 32, y: 438, w: 290, h: 44 } },
  { name: 'Button', kind: 'button', box: { x: 32, y: 716, w: 311, h: 52 } },
];

export const PROMPT = 'Design a sign-up screen for a habit app';

// Prompt, one step per layer added, then done.
export const BUILD_DURATIONS = [1500, ...LAYERS.map(() => 950), 2400];
export const DONE_STEP = LAYERS.length + 1;
