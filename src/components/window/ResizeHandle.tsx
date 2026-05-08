'use client';

import { cn } from '@/lib/utils';
import { EDGE_CURSORS } from '@/lib/window-math';
import type { ResizeEdge } from '@/types/window';

interface ResizeHandleProps {
  edge: ResizeEdge;
  onPointerDown: (e: React.PointerEvent) => void;
}

const EDGE_CLASSES: Record<ResizeEdge, string> = {
  n:  'top-0 left-2 right-2 h-1',
  s:  'bottom-0 left-2 right-2 h-1',
  e:  'right-0 top-2 bottom-2 w-1',
  w:  'left-0 top-2 bottom-2 w-1',
  ne: 'top-0 right-0 w-3 h-3',
  nw: 'top-0 left-0 w-3 h-3',
  se: 'bottom-0 right-0 w-3 h-3',
  sw: 'bottom-0 left-0 w-3 h-3',
};

const ALL_EDGES: ResizeEdge[] = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

export function ResizeHandles({
  getResizeHandler,
}: {
  getResizeHandler: (edge: ResizeEdge) => (e: React.PointerEvent) => void;
}) {
  return (
    <>
      {ALL_EDGES.map((edge) => (
        <ResizeHandle key={edge} edge={edge} onPointerDown={getResizeHandler(edge)} />
      ))}
    </>
  );
}

export function ResizeHandle({ edge, onPointerDown }: ResizeHandleProps) {
  return (
    <div
      className={cn('absolute z-50', EDGE_CLASSES[edge], EDGE_CURSORS[edge])}
      onPointerDown={onPointerDown}
      aria-hidden
    />
  );
}
