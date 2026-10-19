'use client';

import { useEffect, useState, type RefObject } from 'react';

// Whether the element is on screen, so off-screen animations can pause.
export function useInView(ref: RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}
