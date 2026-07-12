'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import { SnapAssist } from '@/components/window/SnapAssist';
import { GlobalAboutDialog } from '@/components/shared/AboutDialog';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';

const PEEK_ZONE = 20; // px from top/bottom edge to trigger menu bar / dock reveal
// Total slide distance: dock height (≈80px) + offset bottom (16px) + a little extra
const DOCK_HIDE_Y = 120;
const MENU_BAR_HEIGHT = 28; // matches --menubar-height; slide distance when hidden
const AUTO_HIDE_DELAY_MS = 3000; // mouse leaves menu bar area → re-hide after this

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
  // True fullscreen (green button) is stricter than maximize — it also hides
  // the menu bar, not just the dock (see types/window.ts's WindowState.isFullScreen
  // doc comment for the distinction).
  const hasFullScreen = useStore((s) =>
    Object.values(s.windows).some((w) => w.isFullScreen && !w.isMinimized)
  );

  // Dock auto-hides in both maximize and fullscreen (unchanged from before).
  const [dockPeeking, setDockPeeking] = useState(false);
  const [dockHovered, setDockHovered] = useState(false);
  const dockAutoHide = hasMaximized || hasFullScreen;
  const dockVisible = !dockAutoHide || dockPeeking || dockHovered;

  const handleDockPeek = useCallback((e: MouseEvent) => {
    setDockPeeking(e.clientY >= window.innerHeight - PEEK_ZONE);
  }, []);

  useEffect(() => {
    if (!dockAutoHide) {
      setDockPeeking(false);
      return;
    }
    document.addEventListener('mousemove', handleDockPeek);
    return () => document.removeEventListener('mousemove', handleDockPeek);
  }, [dockAutoHide, handleDockPeek]);

  // Menu bar only auto-hides in true fullscreen. Reveal on hover near the top
  // edge; re-hide 3s after the pointer leaves the menu bar strip (not just
  // the peek zone — once revealed, the bar itself extends past PEEK_ZONE).
  const [menuBarRevealed, setMenuBarRevealed] = useState(false);
  const menuBarVisible = !hasFullScreen || menuBarRevealed;

  useEffect(() => {
    if (!hasFullScreen) {
      setMenuBarRevealed(false);
      return;
    }
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const handlePeek = (e: MouseEvent) => {
      if (e.clientY <= PEEK_ZONE) {
        setMenuBarRevealed(true);
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      } else if (e.clientY > MENU_BAR_HEIGHT) {
        if (!hideTimer) {
          hideTimer = setTimeout(() => setMenuBarRevealed(false), AUTO_HIDE_DELAY_MS);
        }
      }
    };
    document.addEventListener('mousemove', handlePeek);
    return () => {
      document.removeEventListener('mousemove', handlePeek);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [hasFullScreen]);

  return (
    <>
      {/* Snap assist overlay */}
      <SnapAssist />

      {/* About dialog — listens globally for action:about events */}
      <GlobalAboutDialog />

      {/* Menubar — on top, full width; auto-hides in true fullscreen */}
      <motion.div
        className="absolute top-0 inset-x-0 z-40 pointer-events-none"
        animate={{ y: menuBarVisible ? 0 : -MENU_BAR_HEIGHT }}
        transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
      >
        <div className="pointer-events-auto">
          <MenuBar onSpotlight={onSpotlight} />
        </div>
      </motion.div>

      {/* Dock — auto-hides when a window is maximized or fullscreen */}
      <motion.div
        className="absolute inset-x-0 z-40 flex justify-center pointer-events-none"
        style={{ bottom: 'var(--dock-offset-bottom)' }}
        animate={{ y: dockVisible ? 0 : DOCK_HIDE_Y }}
        transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
        onMouseEnter={() => setDockHovered(true)}
        onMouseLeave={() => { setDockHovered(false); setDockPeeking(false); }}
      >
        <div className="pointer-events-auto">
          <Dock onOpenApp={onOpenApp} />
        </div>
      </motion.div>
    </>
  );
}

export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
