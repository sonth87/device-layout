'use client';

import { useEffect } from 'react';

/**
 * Prevents the host browser's native zoom (Ctrl+wheel / pinch-to-zoom)
 * and Safari's gesturestart/gesturechange pinch events from firing.
 *
 * Event propagation is NOT stopped, so individual app components can still
 * read wheel events (e.g. Photos zoom) — only the browser default is prevented.
 *
 * We also rely on `overscroll-behavior: none` in globals.css to block
 * the two-finger swipe-to-navigate gesture at the page level.
 */
export function GestureBlocker() {
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };

    // Safari fires gesturestart/change for pinch-zoom instead of ctrlKey+wheel
    const onGesture = (e: Event) => e.preventDefault();

    document.addEventListener('wheel', onWheel, { passive: false, capture: true });
    document.addEventListener('gesturestart', onGesture);
    document.addEventListener('gesturechange', onGesture);

    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true });
      document.removeEventListener('gesturestart', onGesture);
      document.removeEventListener('gesturechange', onGesture);
    };
  }, []);

  return null;
}
