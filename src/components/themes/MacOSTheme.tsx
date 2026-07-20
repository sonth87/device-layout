'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import { GlobalAboutDialog } from '@/components/shared/AboutDialog';
import { useStore } from '@/store';
import { useWallpaperLuminance } from '@/hooks/useWallpaperLuminance';
import type { AppConfig } from '@/types/app';

const PEEK_ZONE = 20; // px from top/bottom edge to trigger menu bar / dock reveal
// Total slide distance: dock height (≈80px) + offset bottom (16px) + a little extra
const DOCK_HIDE_Y = 120;
const MENU_BAR_HEIGHT = 28; // matches --menubar-height; slide distance when hidden
const WINDOW_CHROME_HEIGHT = 44; // matches --window-chrome-height
const DOCK_AUTO_HIDE_DELAY_MS = 1500;
const MENU_BAR_AUTO_HIDE_DELAY_MS = 650; // mouse leaves fullscreen top menu area -> re-hide after this

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
  onSpotlight?: () => void;
  onAppSwitcher?: () => void;
  isSimpleMode?: boolean;
}

/** macOS chrome overlay — menubar fixed at top, dock floats at bottom center. */
export function MacOSChrome({ onOpenApp, onSpotlight, isSimpleMode = false }: ChromeProps) {
  // Detect top-strip luminance of the current wallpaper and keep
  // wallpaperTextTheme in the store updated (with localStorage caching).
  useWallpaperLuminance();

  const hasMaximized = useStore((s) =>
    Object.values(s.windows).some((w) => w.isMaximized && !w.isMinimized)
  );
  // True fullscreen (green button) is stricter than maximize — it also hides
  // the menu bar, not just the dock (see types/window.ts's WindowState.isFullScreen
  // doc comment for the distinction).
  const hasFullScreen = useStore((s) =>
    Object.values(s.windows).some((w) => w.isFullScreen && !w.isMinimized)
  );

  // Read URL params to detect maximized/fullscreen windows BEFORE
  // async hydration completes — prevents chrome/dock from flashing visible on F5.
  const [urlState, setUrlState] = useState({ hasMaximized: false, hasFullScreen: false });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    let hasMax = false;
    let hasFull = false;
    for (const p of params.getAll('w')) {
      const flags = parseInt(p.split(':')[2] ?? '0', 10);
      if (flags & 2) hasMax = true;
      if (flags & 4) hasFull = true;
    }
    setUrlState({ hasMaximized: hasMax, hasFullScreen: hasFull });
  }, []);

  const urlHydrated = useStore((s) => s.urlHydrated);

  const isFullScreenActive = hasFullScreen || (!urlHydrated && urlState.hasFullScreen);
  const storeDockAutoHide = useStore((s) => s.dockAutoHide);
  // Before URL hydration: use url pre-scan to avoid dock flash; after: use live state
  const dockAutoHide = hasMaximized || isFullScreenActive || storeDockAutoHide || (urlState.hasMaximized && !urlHydrated);

  const [dockRevealed, setDockRevealed] = useState(false);
  const [dockHovered, setDockHovered] = useState(false);
  const dockVisible = !dockAutoHide || dockRevealed || dockHovered;
  // Ref to the dock element so we can read its horizontal bounds for the peek zone
  const dockRef = useRef<HTMLDivElement>(null);

  // When URL hydration completes and dock needs to hide, reset dockRevealed
  // so the dock animation runs smoothly from visible → hidden
  useEffect(() => {
    if (urlHydrated && dockAutoHide) {
      setDockRevealed(false);
    }
  }, [urlHydrated, dockAutoHide]);

  useEffect(() => {
    if (!dockAutoHide || isSimpleMode) {
      setDockRevealed(false);
      return;
    }
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const handlePeek = (e: MouseEvent) => {
      const isNearBottom = e.clientY >= window.innerHeight - PEEK_ZONE;

      // Constrain X to the dock's actual horizontal footprint (± 24px padding)
      let isOverDock = true;
      if (isNearBottom && dockRef.current) {
        const { left, right } = dockRef.current.getBoundingClientRect();
        const H_PAD = 24;
        isOverDock = e.clientX >= left - H_PAD && e.clientX <= right + H_PAD;
      }

      if ((isNearBottom && isOverDock) || dockHovered) {
        setDockRevealed(true);
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
      } else {
        if (!hideTimer) {
          hideTimer = setTimeout(() => setDockRevealed(false), DOCK_AUTO_HIDE_DELAY_MS);
        }
      }
    };
    document.addEventListener('mousemove', handlePeek);
    return () => {
      document.removeEventListener('mousemove', handlePeek);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [dockAutoHide, dockHovered, isSimpleMode]);

  // Menu bar (+ the fullscreen window's own title bar, see Window.tsx) only
  // auto-hides in true fullscreen. Reveal on hover near the top edge;
  // re-hide shortly after the pointer leaves the menu bar strip (not just the
  // peek zone — once revealed, the bar itself extends past PEEK_ZONE). Lives
  // in the store (not local state) so Window.tsx's title bar can read the
  // same value and slide in lockstep.
  const menuBarRevealed = useStore((s) => s.fullscreenChromeRevealed);
  const setMenuBarRevealed = useStore((s) => s.setFullscreenChromeRevealed);
  const menuBarVisible = !isFullScreenActive || menuBarRevealed;

  useEffect(() => {
    if (!hasFullScreen) {
      setMenuBarRevealed(false);
      return;
    }
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let revealTimer: ReturnType<typeof setTimeout> | null = null;
    const handlePeek = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInsideMenuBar = target?.closest('[data-menubar="true"]');
      const isInsideWindowChrome = target?.closest('[data-windowchrome="true"]');
      const isInsideDropdown = target?.closest('[data-menu-portal="true"]') || target?.closest('[data-radix-popper-content-wrapper]');

      if (e.clientY <= PEEK_ZONE) {
        // Delay reveal by 0.5s when hovering near top edge
        if (!revealTimer) {
          revealTimer = setTimeout(() => {
            setMenuBarRevealed(true);
            revealTimer = null;
          }, 500);
        }
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      } else if (isInsideMenuBar || isInsideWindowChrome || isInsideDropdown) {
        // Keep revealed when inside menu bar or dropdowns
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      } else {
        // Start hide timer when leaving
        if (revealTimer) { clearTimeout(revealTimer); revealTimer = null; }
        if (!hideTimer) {
          hideTimer = setTimeout(() => setMenuBarRevealed(false), MENU_BAR_AUTO_HIDE_DELAY_MS);
        }
      }
    };
    document.addEventListener('mousemove', handlePeek);
    return () => {
      document.removeEventListener('mousemove', handlePeek);
      if (hideTimer) clearTimeout(hideTimer);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, [hasFullScreen, setMenuBarRevealed]);

  return (
    <>
      {/* About dialog — listens globally for action:about events */}
      <GlobalAboutDialog />

      {/* Menubar — on top, full width; auto-hides in true fullscreen */}
      <motion.div
        className="absolute top-0 inset-x-0 z-40 pointer-events-none"
        animate={{ y: menuBarVisible ? 0 : -MENU_BAR_HEIGHT }}
        transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
      >
        <div className="pointer-events-auto">
          <MenuBar
            onSpotlight={onSpotlight}
            isSimpleMode={isSimpleMode}
            forceDark={hasFullScreen}
          />
        </div>
      </motion.div>

      {/* Dock — auto-hides when a window is maximized or fullscreen. Completely hidden in Simple Mode. */}
      {!isSimpleMode && (
        <motion.div
          className="absolute inset-x-0 z-40 flex justify-center pointer-events-none"
          style={{ bottom: 'var(--dock-offset-bottom)' }}
          animate={{ y: dockVisible ? 0 : DOCK_HIDE_Y }}
          transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
          onMouseEnter={() => setDockHovered(true)}
          onMouseLeave={() => setDockHovered(false)}
        >
          <div ref={dockRef} className="pointer-events-auto">
            <Dock onOpenApp={onOpenApp} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
