'use client';

import { AnimatePresence } from 'motion/react';
import { useCallback, useRef, useState } from 'react';
import { STRIP_INSET } from '@/components/work/constants';
import { WorkCard } from '@/components/work/work-card';
import { WorkViewer } from '@/components/work/work-viewer';
import { useDragScroll } from '@/hooks/use-drag-scroll';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { flipBetween, type Flip } from '@/lib/utils/flip';
import type { Project } from '@/lib/work';

export function WorkStrip({ projects }: { projects: Project[] }) {
  const { ref, wasDragged } = useDragScroll<HTMLDivElement>();
  const reducedMotion = useReducedMotion();
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [opened, setOpened] = useState<{ index: number; from: DOMRect } | null>(
    null,
  );
  const [lifted, setLifted] = useState<number | null>(null);
  const [landing, setLanding] = useState<Flip | null>(null);

  const open = (index: number) => {
    const card = cards.current[index];
    if (!card) return;
    setLifted(index);
    setOpened({ index, from: card.getBoundingClientRect() });
    window.history.pushState(
      window.history.state,
      '',
      `/work/${projects[index].slug}`,
    );
  };

  // Called with the card the viewer closes on and where it is now. The strip
  // re-centres only if the viewer moved, then the card flies back to its slot.
  const close = useCallback(
    (index: number, current: DOMRect) => {
      const strip = ref.current;
      const card = cards.current[index];
      if (!strip || !card) return;
      if (index !== opened?.index) {
        const item = card.parentElement!;
        strip.scrollLeft =
          item.offsetLeft + item.offsetWidth / 2 - strip.clientWidth / 2;
      }
      setLifted(index);
      setLanding(
        reducedMotion
          ? null
          : flipBetween(card.getBoundingClientRect(), current),
      );
      setOpened(null);
    },
    [ref, opened?.index, reducedMotion],
  );

  return (
    <>
      <div
        ref={ref}
        role="region"
        aria-label="Work, scroll sideways for more"
        className="no-scrollbar relative left-1/2 w-screen -translate-x-1/2 cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain active:cursor-grabbing"
        style={{ scrollPaddingInline: STRIP_INSET }}
      >
        <ul
          className="flex w-max list-none gap-card-gap"
          style={{ paddingInline: STRIP_INSET }}
        >
          {projects.map((project, i) => (
            <li
              key={project.slug}
              className="w-[min(var(--spacing-card),82vw)] shrink-0 snap-start"
            >
              <button
                type="button"
                aria-label={`Open ${project.name}`}
                className={`block w-full cursor-pointer rounded-[var(--theme-radius-card)] text-left ${lifted === i ? 'invisible' : ''}`}
                onClick={() => {
                  if (!wasDragged()) open(i);
                }}
              >
                <div ref={(el) => void (cards.current[i] = el)}>
                  <WorkCard slug={project.slug} paused={opened !== null} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence custom={landing} onExitComplete={() => setLifted(null)}>
        {opened && (
          <WorkViewer
            key="viewer"
            projects={projects}
            openedAt={opened.index}
            from={opened.from}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}
