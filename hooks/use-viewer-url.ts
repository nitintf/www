'use client';

import { useEffect, useRef } from 'react';

// Mirrors the open card in the address bar as /work/<slug>, so it can be
// shared, and lets the browser's back button close the viewer.
export function useViewerUrl(slug: string, onBack: () => void) {
  const onBackRef = useRef(onBack);
  useEffect(() => {
    onBackRef.current = onBack;
  });

  useEffect(() => {
    window.history.replaceState(window.history.state, '', `/work/${slug}`);
  }, [slug]);

  useEffect(() => {
    const onPop = () => onBackRef.current();
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
}
