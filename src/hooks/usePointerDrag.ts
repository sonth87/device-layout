'use client';

import { useCallback, useRef } from 'react';

export interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
}

export interface UsePointerDragOptions {
  onDragStart?: (e: PointerEvent) => void;
  onDragMove?: (e: PointerEvent, dx: number, dy: number) => void;
  onDragEnd?: (e: PointerEvent, dx: number, dy: number) => void;
}

/**
 * Generic pointer-capture drag primitive.
 * Returns an onPointerDown handler to attach to any element.
 */
export function usePointerDrag({ onDragStart, onDragMove, onDragEnd }: UsePointerDragOptions) {
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      startRef.current = { x: e.clientX, y: e.clientY };
      onDragStart?.(e.nativeEvent);

      const onMove = (moveEvent: PointerEvent) => {
        if (!startRef.current) return;
        const dx = moveEvent.clientX - startRef.current.x;
        const dy = moveEvent.clientY - startRef.current.y;
        onDragMove?.(moveEvent, dx, dy);
      };

      const onUp = (upEvent: PointerEvent) => {
        if (!startRef.current) return;
        const dx = upEvent.clientX - startRef.current.x;
        const dy = upEvent.clientY - startRef.current.y;
        onDragEnd?.(upEvent, dx, dy);
        startRef.current = null;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [onDragStart, onDragMove, onDragEnd]
  );

  return { onPointerDown };
}
