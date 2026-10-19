'use client';

import { createContext, useContext, type ReactNode } from 'react';

// Scenes inside a paused card hold still on their resting frame, so only
// the card someone is looking at spends time animating.
const ScenePauseContext = createContext(false);

export function ScenePauseProvider({
  value,
  children,
}: {
  value: boolean;
  children: ReactNode;
}) {
  return <ScenePauseContext value={value}>{children}</ScenePauseContext>;
}

export function useScenePaused() {
  return useContext(ScenePauseContext);
}
