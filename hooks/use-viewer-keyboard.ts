'use client';

import { useEffect } from 'react';

// Escape closes, arrows move, and the page behind stops scrolling.
export function useViewerKeyboard({
  onClose,
  onMove,
}: {
  onClose: () => void;
  onMove: (by: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onMove]);
}
