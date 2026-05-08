'use client';

import { useEffect, useRef } from 'react';

interface SwipeOptions {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  /** Minimum px distance to trigger swipe */
  threshold?: number;
  /** Minimum velocity px/ms */
  velocityThreshold?: number;
}

/**
 * Detects swipe gestures via pointer events on the given element (or window if null).
 * Returns a ref to attach to the element you want to listen on.
 */
export function useSwipeGesture<T extends HTMLElement>(
  options: SwipeOptions,
  targetRef?: React.RefObject<T | null>,
) {
  const {
    onSwipeUp,
    onSwipeDown,
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    velocityThreshold = 0.2,
  } = options;

  const start = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    const el: EventTarget = targetRef?.current ?? window;
    if (!el) return;

    const onDown = (e: Event) => {
      const pe = e as PointerEvent;
      start.current = { x: pe.clientX, y: pe.clientY, t: Date.now() };
    };

    const onUp = (e: Event) => {
      if (!start.current) return;
      const pe = e as PointerEvent;
      const dx = pe.clientX - start.current.x;
      const dy = pe.clientY - start.current.y;
      const dt = Math.max(1, Date.now() - start.current.t);
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      start.current = null;

      if (absDx < threshold && absDy < threshold) return;

      // Determine dominant axis
      if (absDx > absDy) {
        const vx = absDx / dt;
        if (vx < velocityThreshold) return;
        if (dx > 0) onSwipeRight?.();
        else onSwipeLeft?.();
      } else {
        const vy = absDy / dt;
        if (vy < velocityThreshold) return;
        if (dy > 0) onSwipeDown?.();
        else onSwipeUp?.();
      }
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
    };
  }, [onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight, threshold, velocityThreshold, targetRef]);
}
