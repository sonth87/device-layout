'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/store';

const PEEK_ZONE = 6; // px from top edge to trigger title-bar reveal
const AUTO_HIDE_DELAY_MS = 400; // ms after cursor leaves safe zone before hiding again

/**
 * Registers a document-level mousemove listener that reveals the fullscreen
 * window chrome (title bar) when the cursor hovers near the top edge, and
 * hides it again after the cursor leaves the title bar / peek zone.
 *
 * Driven by the `fullscreenChromeRevealed` store flag so that Window.tsx
 * animates the title bar overlay in lockstep.
 *
 * Call this once per theme shell component. It is a no-op when no window is
 * currently in fullscreen mode.
 */
export function useFullscreenPeek() {
  const hasFullScreen = useStore((s) =>
    Object.values(s.windows).some((w) => w.isFullScreen && !w.isMinimized)
  );
  const revealed = useStore((s) => s.fullscreenChromeRevealed);
  const setRevealed = useStore((s) => s.setFullscreenChromeRevealed);

  // Ref to read live value inside the event handler without stale closure
  const revealedRef = useRef(revealed);
  useEffect(() => { revealedRef.current = revealed; }, [revealed]);

  useEffect(() => {
    if (!hasFullScreen) {
      setRevealed(false);
      return;
    }

    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let revealTimer: ReturnType<typeof setTimeout> | null = null;

    const handlePeek = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInsideWindowChrome = target?.closest('[data-windowchrome="true"]');
      const isInsideDropdown =
        target?.closest('[data-menu-portal="true"]') ||
        target?.closest('[data-radix-popper-content-wrapper]');

      if (e.clientY <= PEEK_ZONE) {
        // Hovering near the top edge — schedule reveal
        if (!revealTimer) {
          revealTimer = setTimeout(() => {
            setRevealed(true);
            revealTimer = null;
          }, 300);
        }
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
      } else if (isInsideWindowChrome || isInsideDropdown || target?.closest('[data-menubar="true"]')) {
        // Inside the title bar or a dropdown it opened — keep revealed
        if (revealTimer) { clearTimeout(revealTimer); revealTimer = null; }
        if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
        if (!revealedRef.current) setRevealed(true);
      } else {
        // Cursor left the safe zone — start hide timer
        if (revealTimer) { clearTimeout(revealTimer); revealTimer = null; }
        if (!hideTimer) {
          hideTimer = setTimeout(() => setRevealed(false), AUTO_HIDE_DELAY_MS);
        }
      }
    };

    document.addEventListener('mousemove', handlePeek);
    return () => {
      document.removeEventListener('mousemove', handlePeek);
      if (hideTimer) clearTimeout(hideTimer);
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, [hasFullScreen, setRevealed]);
}
