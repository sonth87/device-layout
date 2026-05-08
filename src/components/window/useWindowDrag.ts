'use client';

import { useCallback, useRef } from 'react';
import type { MotionValue } from 'motion/react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { emitSnapZone, getSnapZone, getSnapRect } from '@/lib/snap-events';

// How many px from the edge before resistance kicks in
const RESIST_ZONE = 80;
// Resistance factor (0 = stuck, 1 = none)
const RESIST_FACTOR = 0.12;

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
  const resizeWindow = useStore((s) => s.resizeWindow);
  const maximizeWindow = useStore((s) => s.maximizeWindow);
  const { config } = useTheme();
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

      const dragTopInset = config.layout.window.dragTopInset;
      // For macOS (no taskbar): bottomInset = 0 so fullscreen fills to viewport bottom.
      // For Windows: bottomInset = taskbarHeight so maximize respects the taskbar.
      const bottomInset = config.layout.chrome.taskbarHeight;

      const onMove = (mv: PointerEvent) => {
        if (!startRef.current) return;
        const vpW = window.innerWidth;
        const vpH = window.innerHeight;

        const rawX = startRef.current.winX + (mv.clientX - startRef.current.mouseX);
        const rawY = startRef.current.winY + (mv.clientY - startRef.current.mouseY);

        const winEl = document.getElementById(`window-${windowId}`);
        const winW = winEl?.offsetWidth ?? 600;
        const minTitleVisibleHeight = config.layout.window.minTitleVisibleHeight;

        // Y: can't go above menubar, hard floor below
        const minY = dragTopInset;
        const maxY = vpH - minTitleVisibleHeight;

        // X: keep at least some of window visible
        const minX = -(winW - 120);
        const maxX = vpW - 120;

        const nextX = applyResistance(rawX, minX, maxX);
        const nextY = Math.min(maxY, Math.max(minY, rawY)); // Y: hard clamp (no resistance on vertical — feels odd)

        x.set(nextX);
        y.set(nextY);

        // Detect top snap by whether the window has hit the top boundary (minY),
        // rather than raw pointer Y — the pointer is usually mid-titlebar so it
        // never gets close enough to viewport top to trigger the EDGE check.
        const atTopBoundary = nextY <= minY && rawY < minY;
        const zone = atTopBoundary ? 'top' : getSnapZone(mv.clientX, mv.clientY, dragTopInset);
        emitSnapZone(zone, true, dragTopInset, bottomInset);
      };

      const onUp = (uv: PointerEvent) => {
        if (!startRef.current) return;
        const finalX = x.get();
        const finalY = y.get();

        // Check if we released over a snap zone
        // Same logic as onMove: use window position for top, pointer edges for sides.
        const finalRawY = startRef.current
          ? startRef.current.winY + (uv.clientY - startRef.current.mouseY)
          : y.get();
        const minY = dragTopInset;
        const atTopBoundary = finalX !== undefined && finalRawY < minY;
        const zone = atTopBoundary ? 'top' : getSnapZone(uv.clientX, uv.clientY, dragTopInset);
        const snapRect = getSnapRect(zone, dragTopInset, bottomInset);
        if (snapRect) {
          if (zone === 'top') {
            // Full-screen snap — mark as maximized so auto-hide dock triggers
            maximizeWindow(windowId, snapRect);
          } else {
            resizeWindow(windowId, snapRect);
          }
        } else {
          moveWindow(windowId, finalX, finalY);
        }

        emitSnapZone(null, false, dragTopInset, bottomInset);
        startRef.current = null;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [config.layout.window.dragTopInset, config.layout.chrome.taskbarHeight, config.layout.window.minTitleVisibleHeight, x, y, windowId, moveWindow, resizeWindow, maximizeWindow]
  );

  return { onPointerDown };
}
