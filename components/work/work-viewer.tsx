'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import {
  FADE_TRANSITION,
  OPEN_CARD,
  OPEN_CARD_WIDTH,
  ZOOM_TRANSITION,
} from '@/components/work/constants';
import { ViewerBackdrop } from '@/components/work/viewer-backdrop';
import { ViewerCard } from '@/components/work/viewer-card';
import { ViewerDots } from '@/components/work/viewer-dots';
import { WorkDetails } from '@/components/work/work-details';
import { useDragScroll } from '@/hooks/use-drag-scroll';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useSnapIndex } from '@/hooks/use-snap-index';
import { useViewerKeyboard } from '@/hooks/use-viewer-keyboard';
import { useViewerUrl } from '@/hooks/use-viewer-url';
import { flipBetween } from '@/lib/utils/flip';
import { clamp } from '@/lib/utils/math';
import { openCardRect } from '@/lib/utils/open-card-rect';
import type { Project } from '@/lib/work';

const ROW_INSET = `calc((100vw - ${OPEN_CARD_WIDTH}) / 2)`;
const CARD_TOP = `${OPEN_CARD.top * 100}vh`;
const DETAILS_TOP = `calc(${CARD_TOP} + ${OPEN_CARD_WIDTH} * 0.7 + 2.5rem)`;

export function WorkViewer({
  projects,
  openedAt,
  from,
  onClose,
}: {
  projects: Project[];
  openedAt: number;
  from: DOMRect;
  onClose: (index: number, current: DOMRect) => void;
}) {
  const { ref, wasDragged } = useDragScroll<HTMLDivElement>();
  const { index, scrollTo, jumpTo } = useSnapIndex(ref, openedAt);
  const flyers = useRef<(HTMLDivElement | null)[]>([]);
  const dialog = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  useFocusTrap(dialog);
  const [start] = useState(() => flipBetween(from, openCardRect()));
  // Scroll snapping follows transforms, so it stays off while a card is
  // zooming or it would drag the row along with the card.
  const [zooming, setZooming] = useState(true);

  // Before the first paint, so the row opens on the clicked card.
  useLayoutEffect(() => {
    if (ref.current) jumpTo(ref.current, openedAt);
  }, [ref, jumpTo, openedAt]);

  const close = useCallback(() => {
    const flyer = flyers.current[index];
    if (!flyer) return;
    setZooming(true);
    onClose(index, flyer.getBoundingClientRect());
  }, [index, onClose]);

  // Closing goes back in history; the popstate that follows runs `close`.
  const closing = useRef(false);
  const requestClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    window.history.back();
  }, []);
  useViewerUrl(projects[index].slug, close);

  const move = useCallback(
    (by: number) => scrollTo(clamp(index + by, 0, projects.length - 1)),
    [index, projects.length, scrollTo],
  );
  useViewerKeyboard({ onClose: requestClose, onMove: move });

  return (
    <motion.div
      ref={dialog}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={projects[index].name}
      className="fixed inset-0 z-50 overflow-hidden outline-none"
      exit={{ opacity: 1, transition: { duration: ZOOM_TRANSITION.duration } }}
      onClick={requestClose}
    >
      <ViewerBackdrop />

      <div
        ref={ref}
        className={`no-scrollbar absolute inset-0 flex items-start overflow-x-auto overscroll-x-contain ${zooming ? '' : 'snap-x snap-mandatory'}`}
        style={{
          gap: `${OPEN_CARD.gapRem}rem`,
          paddingInline: ROW_INSET,
          scrollPaddingInline: ROW_INSET,
          paddingTop: CARD_TOP,
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            data-snap-item
            className="w-[min(38rem,78vw)] shrink-0 snap-center"
            style={{ originX: 0, originY: 0 }}
            initial={
              i === openedAt && !reducedMotion
                ? { x: start.x, y: start.y, scale: start.scale }
                : false
            }
            animate={{ x: 0, y: 0, scale: 1 }}
            transition={ZOOM_TRANSITION}
            onAnimationComplete={() => {
              if (i === openedAt) setZooming(false);
            }}
          >
            <ViewerCard
              ref={(el) => void (flyers.current[i] = el)}
              project={project}
              active={i === index}
              entering={i === openedAt}
              onSelect={() => {
                if (!wasDragged() && i !== index) scrollTo(i);
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute inset-x-0 z-10"
        style={{ top: DETAILS_TOP }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ...FADE_TRANSITION, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        <AnimatePresence mode="wait">
          <WorkDetails key={projects[index].slug} project={projects[index]} />
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { ...FADE_TRANSITION, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        <ViewerDots projects={projects} active={index} onSelect={scrollTo} />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            requestClose();
          }}
          className="absolute right-gutter top-gutter z-10 cursor-pointer text-base text-muted transition-colors hover:text-fg"
        >
          close
        </button>
      </motion.div>
    </motion.div>
  );
}
