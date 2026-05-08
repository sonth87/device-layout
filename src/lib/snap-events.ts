export type SnapZone =
  | 'left'
  | 'right'
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | null;

type SnapListener = (zone: SnapZone, isDragging: boolean) => void;

const listeners = new Set<SnapListener>();

export function onSnapZoneChange(fn: SnapListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function emitSnapZone(zone: SnapZone, isDragging: boolean): void {
  listeners.forEach((fn) => fn(zone, isDragging));
}

/** Calculate which snap zone a pointer is in, or null */
export function getSnapZone(px: number, py: number): SnapZone {
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  const EDGE = 10; // px from edge to trigger snap

  const atLeft   = px <= EDGE;
  const atRight  = px >= vpW - EDGE;
  const atTop    = py <= EDGE;
  const atBottom = py >= vpH - EDGE;

  if (atTop && atLeft)   return 'top-left';
  if (atTop && atRight)  return 'top-right';
  if (atTop)             return 'top';
  if (atLeft && atBottom)  return 'bottom-left';
  if (atRight && atBottom) return 'bottom-right';
  if (atLeft)            return 'left';
  if (atRight)           return 'right';
  return null;
}

/** Get the window rect for a snap zone */
export function getSnapRect(zone: SnapZone): { x: number; y: number; width: number; height: number } | null {
  if (!zone) return null;
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  const TASKBAR_H = 48; // reserve taskbar height at bottom
  const available = vpH - TASKBAR_H;

  switch (zone) {
    case 'left':         return { x: 0,         y: 0,           width: vpW / 2,  height: available };
    case 'right':        return { x: vpW / 2,    y: 0,           width: vpW / 2,  height: available };
    case 'top':          return { x: 0,         y: 0,           width: vpW,      height: available };
    case 'top-left':     return { x: 0,         y: 0,           width: vpW / 2,  height: available / 2 };
    case 'top-right':    return { x: vpW / 2,    y: 0,           width: vpW / 2,  height: available / 2 };
    case 'bottom-left':  return { x: 0,         y: available / 2, width: vpW / 2, height: available / 2 };
    case 'bottom-right': return { x: vpW / 2,    y: available / 2, width: vpW / 2, height: available / 2 };
    default:             return null;
  }
}
