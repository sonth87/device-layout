export type SnapZone =
  | "left"
  | "right"
  | "top"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | null;

type SnapListener = (
  zone: SnapZone,
  isDragging: boolean,
  topInset: number,
  bottomInset: number,
) => void;

const listeners = new Set<SnapListener>();

export function onSnapZoneChange(fn: SnapListener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function emitSnapZone(
  zone: SnapZone,
  isDragging: boolean,
  topInset = 0,
  bottomInset = 0,
): void {
  listeners.forEach((fn) => fn(zone, isDragging, topInset, bottomInset));
}

/**
 * Calculate which snap zone a pointer is in, or null.
 * topInset: reserved px at the top (e.g. menu bar height for macOS).
 * The "top" snap trigger is the bottom edge of that inset, not y=0.
 */
export function getSnapZone(px: number, py: number, topInset = 0): SnapZone {
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  const EDGE = 10; // px from edge to trigger snap

  const atLeft = px <= EDGE;
  const atRight = px >= vpW - EDGE;
  // "top" snap requires pointer to be within top 25px of viewport (inside MenuBar area)
  const atTop = py <= (topInset > 0 ? 25 : EDGE);
  const atBottom = py >= vpH - EDGE;

  if (atTop && atLeft) return "top-left";
  if (atTop && atRight) return "top-right";
  if (atTop) return "top";
  if (atLeft && atBottom) return "bottom-left";
  if (atRight && atBottom) return "bottom-right";
  if (atLeft) return "left";
  if (atRight) return "right";
  return null;
}

/**
 * Get the window rect for a snap zone.
 * topInset: reserved px at the top (menu bar / taskbar) — snapped windows start below it.
 */
export function getSnapRect(
  zone: SnapZone,
  topInset = 0,
  bottomInset = 0,
): { x: number; y: number; width: number; height: number } | null {
  if (!zone) return null;
  const vpW = window.innerWidth;
  const vpH = window.innerHeight;
  const top = topInset;
  const available = vpH - top - bottomInset;

  switch (zone) {
    case "left":
      return { x: 0, y: top, width: vpW / 2, height: available };
    case "right":
      return { x: vpW / 2, y: top, width: vpW / 2, height: available };
    case "top":
      return { x: 0, y: top, width: vpW, height: available };
    case "top-left":
      return { x: 0, y: top, width: vpW / 2, height: available / 2 };
    case "top-right":
      return { x: vpW / 2, y: top, width: vpW / 2, height: available / 2 };
    case "bottom-left":
      return {
        x: 0,
        y: top + available / 2,
        width: vpW / 2,
        height: available / 2,
      };
    case "bottom-right":
      return {
        x: vpW / 2,
        y: top + available / 2,
        width: vpW / 2,
        height: available / 2,
      };
    default:
      return null;
  }
}
