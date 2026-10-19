export interface WindowBox {
  left: number;
  top: number;
  width: number;
  height: number;
  z: number;
}

export interface Arrangement {
  command: string | null;
  windows: [WindowBox, WindowBox, WindowBox];
}

export const ARRANGEMENTS: Arrangement[] = [
  {
    command: null,
    windows: [
      { left: 6, top: 10, width: 48, height: 52, z: 1 },
      { left: 36, top: 28, width: 52, height: 56, z: 2 },
      { left: 18, top: 46, width: 40, height: 44, z: 3 },
    ],
  },
  {
    command: 'Left Half',
    windows: [
      { left: 0, top: 0, width: 50, height: 100, z: 3 },
      { left: 50, top: 0, width: 50, height: 100, z: 2 },
      { left: 50, top: 50, width: 50, height: 50, z: 1 },
    ],
  },
  {
    command: 'Top Right',
    windows: [
      { left: 0, top: 0, width: 50, height: 50, z: 2 },
      { left: 50, top: 0, width: 50, height: 50, z: 3 },
      { left: 0, top: 50, width: 100, height: 50, z: 1 },
    ],
  },
  {
    command: 'Maximize',
    windows: [
      { left: 0, top: 0, width: 100, height: 100, z: 3 },
      { left: 50, top: 0, width: 50, height: 50, z: 2 },
      { left: 0, top: 50, width: 100, height: 50, z: 1 },
    ],
  },
];

export const MENU_ITEMS = [
  'Left Half',
  'Right Half',
  'Top Left',
  'Top Right',
  'Maximize',
  'Center',
];
export const WINDOW_COLORS = ['#5b8def', '#e9a23b', '#4fb286'];
export const WINDOW_GAP_CQW = 1.2;

// Even steps hold an arrangement; odd steps open the menu on the next one.
export const SNAP_DURATIONS = [1600, 900, 2000, 900, 2000, 900, 2000];

export const SHORTCUTS: Record<string, string[]> = {
  'Left Half': ['⌃', '⌥', '←'],
  'Top Right': ['⌃', '⌥', 'I'],
  Maximize: ['⌃', '⌥', '↩'],
};
