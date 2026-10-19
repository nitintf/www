'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useScenePaused } from '@/components/work/scene-pause';

// Loops through steps, holding each for its own duration. Pauses off
// screen, and stays on `restingStep` when motion is reduced or the card is
// paused.
export function useSequence(durations: number[], restingStep = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();
  const paused = useScenePaused();
  const reduced = reducedMotion || paused;
  const durationsRef = useRef(durations);

  useEffect(() => {
    durationsRef.current = durations;
  });

  useEffect(() => {
    if (!inView || reduced) return;
    const all = durationsRef.current;
    const id = window.setTimeout(
      () => setStep((s) => (s + 1) % all.length),
      all[step],
    );
    return () => window.clearTimeout(id);
  }, [step, inView, reduced]);

  return { ref, step: reduced ? restingStep : step, reduced };
}
