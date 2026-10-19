'use client';

import { AnimatePresence } from 'motion/react';
import { useSequence } from '@/hooks/use-sequence';
import { AppWindow } from '@/components/work/projects/layout/app-window';
import {
  ARRANGEMENTS,
  SNAP_DURATIONS,
  WINDOW_COLORS,
} from '@/components/work/projects/layout/constants';
import { ShortcutHud } from '@/components/work/projects/layout/shortcut-hud';
import { DesktopMenuBar } from '@/components/work/projects/layout/desktop-menu-bar';
import { SnapMenu } from '@/components/work/projects/layout/snap-menu';

export function LayoutScene() {
  const { ref, step } = useSequence(SNAP_DURATIONS, 2);
  const menuOpen = step % 2 === 1;
  const current = ARRANGEMENTS[menuOpen ? (step - 1) / 2 : step / 2];
  const nextCommand = menuOpen ? ARRANGEMENTS[(step + 1) / 2].command : null;

  return (
    <div ref={ref} className="absolute inset-0">
      <div className="absolute inset-[5cqw] overflow-hidden rounded-[2cqw] bg-[linear-gradient(135deg,#c9d6e8,#e6dccd)]">
        <DesktopMenuBar />
        <div className="absolute inset-x-[1.4cqw] bottom-[1.4cqw] top-[4.8cqw]">
          {current.windows.map((box, i) => (
            <AppWindow key={i} box={box} color={WINDOW_COLORS[i]} />
          ))}
        </div>
        <AnimatePresence>
          {menuOpen && <SnapMenu highlighted={nextCommand} />}
        </AnimatePresence>
        <AnimatePresence>
          {!menuOpen && current.command && (
            <ShortcutHud key={current.command} command={current.command} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
