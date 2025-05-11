'use client';

import { useEffect, useRef } from 'react';

const CURSOR_SIZE = 12;
const CURSOR_COLOR = '#fff';
const SMOOTHING = 0.18; // Lower is smoother

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * SMOOTHING;
      pos.current.y += (mouse.current.y - pos.current.y) * SMOOTHING;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - CURSOR_SIZE / 2}px, ${pos.current.y - CURSOR_SIZE / 2}px, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: '50%',
        background: CURSOR_COLOR,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'background 0.2s',
        willChange: 'transform',
      }}
    />
  );
}
