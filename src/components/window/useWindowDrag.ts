'use client';

import { useCallback, useRef } from 'react';
import type { MotionValue } from 'motion/react';
import { useStore } from '@/store';

// How many px from the edge before resistance kicks in
const RESIST_ZONE = 80;
// Resistance factor (0 = stuck, 1 = none)
const RESIST_FACTOR = 0.12;
// To escape the edge you must drag this far past it
const ESCAPE_THRESHOLD = 60;

const MENUBAR_H = 28;
const MIN_TITLE_VISIBLE_H = 40; // at least 40px of title bar below menubar

function applyResistance(raw: number, minStop: number, maxStop: number): number {
  if (raw < minStop - RESIST_ZONE) {
    // Deep off left/top edge — hard clamp
    return minStop - RESIST_ZONE * RESIST_FACTOR;
  }
  if (raw < minStop) {
    // Near left/top — soft resistance
    const t = (raw - (minStop - RESIST_ZONE)) / RESIST_ZONE;
    return minStop - RESIST_ZONE * (1 - t) * (1 - RESIST_FACTOR);
  }
  if (raw > maxStop + RESIST_ZONE) {
    // Deep off right/bottom edge — hard clamp
    return maxStop + RESIST_ZONE * RESIST_FACTOR;
  }
  if (raw > maxStop) {
    // Near right/bottom — soft resistance
    const t = (raw - maxStop) / RESIST_ZONE;
    return maxStop + RESIST_ZONE * t * RESIST_FACTOR;
  }
  return raw;
}

interface UseWindowDragOptions {
  windowId: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useWindowDrag({ windowId, x, y }: UseWindowDragOptions) {
  const moveWindow = useStore((s) => s.moveWindow);
  const startRef = useRef<{
    mouseX: number;
    mouseY: number;
    winX: number;
    winY: number;
    escaped: boolean;
  } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      startRef.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        winX: x.get(),
        winY: y.get(),
        escaped: false,
      };

      const onMove = (mv: PointerEvent) => {
        if (!startRef.current) return;
        const vpW = window.innerWidth;
        const vpH = window.innerHeight;

        const rawX = startRef.current.winX + (mv.clientX - startRef.current.mouseX);
        const rawY = startRef.current.winY + (mv.clientY - startRef.current.mouseY);

        const winEl = document.getElementById(`window-${windowId}`);
        const winW = winEl?.offsetWidth ?? 600;

        // Y: can't go above menubar, hard floor below
        const minY = MENUBAR_H;
        const maxY = vpH - MIN_TITLE_VISIBLE_H;

        // X: keep at least some of window visible
        const minX = -(winW - 120);
        const maxX = vpW - 120;

        const nextX = applyResistance(rawX, minX, maxX);
        const nextY = Math.min(maxY, Math.max(minY, rawY)); // Y: hard clamp (no resistance on vertical — feels odd)

        x.set(nextX);
        y.set(nextY);
      };

      const onUp = () => {
        if (!startRef.current) return;
        // Snap back if escaped beyond soft limits
        const finalX = x.get();
        const finalY = y.get();
        moveWindow(windowId, finalX, finalY);
        startRef.current = null;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [x, y, windowId, moveWindow]
  );

  return { onPointerDown };
}
