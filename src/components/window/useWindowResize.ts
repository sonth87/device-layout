'use client';

import { useCallback, useRef } from 'react';
import type { MotionValue } from 'motion/react';
import type { ResizeEdge } from '@/types/window';
import { useStore } from '@/store';
import { calcResizeDelta } from '@/lib/window-math';

interface UseWindowResizeOptions {
  windowId: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  minWidth?: number;
  minHeight?: number;
}

export function useWindowResize({
  windowId,
  x,
  y,
  width,
  height,
  minWidth = 320,
  minHeight = 240,
}: UseWindowResizeOptions) {
  const resizeWindow = useStore((s) => s.resizeWindow);
  const startRef = useRef<{
    mouseX: number;
    mouseY: number;
    rect: { x: number; y: number; width: number; height: number };
  } | null>(null);

  const getResizeHandler = useCallback(
    (edge: ResizeEdge) =>
      (e: React.PointerEvent) => {
        e.preventDefault();
        e.stopPropagation();
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

        const win = useStore.getState().windows[windowId];
        let startRect = { x: x.get(), y: y.get(), width: width.get(), height: height.get() };

        if (win?.isFullScreen || win?.isMaximized) {
          const restoredRect = win.prevRect ?? {
            x: Math.round((window.innerWidth - 800) / 2),
            y: Math.round((window.innerHeight - 600) / 2),
            width: 800,
            height: 600,
          };
          useStore.setState((state) => {
            const w = state.windows[windowId];
            if (w) {
              w.isFullScreen = false;
              w.isMaximized = false;
              w.rect = { ...restoredRect };
              w.prevRect = null;
            }
          });
          x.set(restoredRect.x);
          y.set(restoredRect.y);
          width.set(restoredRect.width);
          height.set(restoredRect.height);
          startRect = { ...restoredRect };
        }

        startRef.current = {
          mouseX: e.clientX,
          mouseY: e.clientY,
          rect: startRect,
        };

        const onMove = (mv: PointerEvent) => {
          if (!startRef.current) return;
          const dx = mv.clientX - startRef.current.mouseX;
          const dy = mv.clientY - startRef.current.mouseY;
          const newRect = calcResizeDelta(edge, dx, dy, startRef.current.rect, minWidth, minHeight);
          x.set(newRect.x);
          y.set(newRect.y);
          width.set(newRect.width);
          height.set(newRect.height);
        };

        const onUp = () => {
          if (!startRef.current) return;
          resizeWindow(windowId, {
            x: x.get(),
            y: y.get(),
            width: width.get(),
            height: height.get(),
          });
          startRef.current = null;
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
        };

        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      },
    [x, y, width, height, windowId, minWidth, minHeight, resizeWindow]
  );

  return { getResizeHandler };
}
