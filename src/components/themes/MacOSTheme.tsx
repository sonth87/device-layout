'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import { GlobalAboutDialog } from '@/components/shared/AboutDialog';
import { WindowChrome } from '@/components/window/WindowChrome';
import { useStore } from '@/store';
import { useWallpaperLuminance } from '@/hooks/useWallpaperLuminance';
import { useFullscreenPeek } from '@/hooks/useFullscreenPeek';
import type { AppConfig } from '@/types/app';

const PEEK_ZONE = 6; // px from top edge to trigger menu bar / dock reveal in fullscreen
// Total slide distance: dock height (≈80px) + offset bottom (16px) + a little extra
const DOCK_HIDE_Y = 120;
const MENU_BAR_HEIGHT = 28; // matches --menubar-height; slide distance when hidden
const WINDOW_CHROME_HEIGHT = 44; // matches --window-chrome-height
const DOCK_AUTO_HIDE_DELAY_MS = 1500;
const MENU_BAR_AUTO_HIDE_DELAY_MS = 400; // mouse leaves fullscreen top menu area -> re-hide after this

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
  onSpotlight?: () => void;
  onAppSwitcher?: () => void;
  isSimpleMode?: boolean;
  fallbackMenuBarAppId?: string | null;
}

/** macOS chrome overlay — menubar fixed at top, dock floats at bottom center. */
import { useSimpleModeFeatures } from '@/contexts/SimpleModeContext';

export function MacOSChrome({ onOpenApp, onSpotlight, isSimpleMode = false, fallbackMenuBarAppId }: ChromeProps) {
  const features = useSimpleModeFeatures();
  const showDock = features.dock && (!features.isSimpleModeActive || features.dock);
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

  // Menu bar (+ the fullscreen window's own title bar) only auto-hides in true
  // fullscreen. The shared useFullscreenPeek hook drives fullscreenChromeRevealed
  // in the store; both MacOS menu bar and Window.tsx title bar read it in lockstep.
  const menuBarRevealed = useStore((s) => s.fullscreenChromeRevealed);
  const menuBarVisible = !isFullScreenActive || menuBarRevealed;
  // macOS extends the safe zone to include [data-menubar] elements in addition
  // to [data-windowchrome] — handled inside the hook for both.
  useFullscreenPeek();

  // Fullscreen window: find the focused (or topmost) fullscreen window so we
  // can render its title bar at the correct global z-level (above the chrome
  // overlay wrapper which otherwise clips it).
  const fullscreenWindowId = useStore((s) => {
    const wins = Object.values(s.windows).filter((w) => w.isFullScreen && !w.isMinimized);
    if (wins.length === 0) return null;
    // Prefer the focused one; fall back to the one with the highest z-index.
    const focused = wins.find((w) => w.isFocused);
    return (focused ?? wins.reduce((a, b) => (a.zIndex > b.zIndex ? a : b))).id;
  });

  // Peek-hint proximity state (cursor within 50px of top, but chrome not yet revealed).
  const [peekHintNear, setPeekHintNear] = useState(false);
  const chromeRevealedRef = useRef(menuBarRevealed);
  useEffect(() => { chromeRevealedRef.current = menuBarRevealed; }, [menuBarRevealed]);
  useEffect(() => {
    if (!isFullScreenActive) { setPeekHintNear(false); return; }
    const PROXIMITY = 50;
    const handleMove = (e: MouseEvent) => {
      setPeekHintNear(e.clientY < PROXIMITY && !chromeRevealedRef.current);
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, [isFullScreenActive]);
  useEffect(() => {
    if (menuBarRevealed) setPeekHintNear(false);
  }, [menuBarRevealed]);

  return (
    <>
      {/* About dialog — listens globally for action:about events */}
      <GlobalAboutDialog />

      {/* Peek-hint strip — slides down from the very top when cursor hovers near
          the edge in fullscreen but chrome not yet revealed. Rendered at z-[50]
          (above the z-40 MenuBar) so it's always visible regardless of window
          stacking. pointer-events-none so it never blocks clicks. */}
      {isFullScreenActive && (
        <motion.div
          className="absolute top-0 inset-x-0 z-[50] h-2.5 pointer-events-none backdrop-blur-sm"
          initial={{ y: '-100%' }}
          animate={{ y: peekHintNear ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.5 }}
          style={{
            background: 'linear-gradient(to bottom, rgba(128,128,128,0.35) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Fullscreen window title bar — rendered here at z-[35] so it sits above
          the chrome-overlay wrapper (which has no explicit z-index) but below
          the MenuBar (z-40). Slides down from above together with the MenuBar
          when fullscreenChromeRevealed becomes true.
          When NOT in fullscreen, Window.tsx renders the chrome as usual. */}
      {isFullScreenActive && fullscreenWindowId && (
        <motion.div
          className="absolute top-0 inset-x-0 z-[35] pointer-events-auto"
          animate={{ y: menuBarRevealed ? MENU_BAR_HEIGHT : '-100%' }}
          transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
        >
          <WindowChrome windowId={fullscreenWindowId} onPointerDown={() => {}} />
        </motion.div>
      )}

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
            fallbackMenuBarAppId={fallbackMenuBarAppId}
            forceDark={hasFullScreen}
          />
        </div>
      </motion.div>

      {/* Dock — auto-hides when a window is maximized or fullscreen. Controlled by features.dock */}
      {showDock && (
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
