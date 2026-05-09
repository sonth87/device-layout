'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import { SnapAssist } from '@/components/window/SnapAssist';
import { GlobalAboutDialog } from '@/components/shared/AboutDialog';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';

const PEEK_ZONE = 20; // px from bottom edge to trigger dock reveal
// Total slide distance: dock height (≈80px) + offset bottom (16px) + a little extra
const DOCK_HIDE_Y = 120;

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
  onSpotlight?: () => void;
  onAppSwitcher?: () => void;
}

/** macOS chrome overlay — menubar fixed at top, dock floats at bottom center. */
export function MacOSChrome({ onOpenApp, onSpotlight }: ChromeProps) {
  const hasMaximized = useStore((s) =>
    Object.values(s.windows).some((w) => w.isMaximized && !w.isMinimized)
  );

  // dockVisible:
  //   - true when no window is maximized (normal mode)
  //   - false when any window is maximized (auto-hide mode), unless peeking/hovered
  const [peeking, setPeeking] = useState(false);
  const [hovered, setHovered] = useState(false);

  const dockVisible = !hasMaximized || peeking || hovered;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPeeking(e.clientY >= window.innerHeight - PEEK_ZONE);
  }, []);

  useEffect(() => {
    if (!hasMaximized) {
      setPeeking(false);
      return;
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [hasMaximized, handleMouseMove]);

  return (
    <>
      {/* Snap assist overlay */}
      <SnapAssist />

      {/* About dialog — listens globally for action:about events */}
      <GlobalAboutDialog />

      {/* Menubar — on top, full width */}
      <div className="absolute top-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <MenuBar onSpotlight={onSpotlight} />
        </div>
      </div>

      {/* Dock — auto-hides when a window is maximized */}
      <motion.div
        className="absolute inset-x-0 z-40 flex justify-center pointer-events-none"
        style={{ bottom: 'var(--dock-offset-bottom)' }}
        animate={{ y: dockVisible ? 0 : DOCK_HIDE_Y }}
        transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPeeking(false); }}
      >
        <div className="pointer-events-auto">
          <Dock onOpenApp={onOpenApp} />
        </div>
      </motion.div>
    </>
  );
}

export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
