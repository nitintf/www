'use client';

import { createContext, useContext } from 'react';

// Scenes inside a paused card hold still on their resting frame, so only
// the card someone is looking at spends time animating.
const ScenePauseContext = createContext(false);

export const ScenePauseProvider = ScenePauseContext.Provider;

export function useScenePaused() {
  return useContext(ScenePauseContext);
}
