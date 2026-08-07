export type SnapZone = "left" | "right" | "top" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | null;
type SnapListener = (zone: SnapZone, isDragging: boolean, topInset: number, bottomInset: number) => void;
export declare function onSnapZoneChange(fn: SnapListener): () => void;
export declare function emitSnapZone(zone: SnapZone, isDragging: boolean, topInset?: number, bottomInset?: number): void;
/**
 * Calculate which snap zone a pointer is in, or null.
 * topInset: reserved px at the top (e.g. menu bar height for macOS).
 * The "top" snap trigger is the bottom edge of that inset, not y=0.
 */
export declare function getSnapZone(px: number, py: number, topInset?: number): SnapZone;
/**
 * Get the window rect for a snap zone.
 * topInset: reserved px at the top (menu bar / taskbar) — snapped windows start below it.
 */
export declare function getSnapRect(zone: SnapZone, topInset?: number, bottomInset?: number): {
    x: number;
    y: number;
    width: number;
    height: number;
} | null;
export {};
