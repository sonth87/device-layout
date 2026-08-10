import { WindowRect, ResizeEdge } from '../types/window';
interface FitWindowRectOptions {
    minWidth?: number;
    minHeight?: number;
}
/**
 * Applies spring resistance when value is within RESIST_ZONE of 0 or maxValue.
 * The closer to the edge, the more resistance. Requires ESCAPE_EXTRA beyond
 * the edge boundary to fully escape.
 */
export declare function applyEdgeResistance(value: number, maxValue: number, zone?: number): number;
/** Snap to edge if released close enough */
export declare function snapIfClose(value: number, maxValue: number, zone?: number): number;
/** Clamp value between min and max */
export declare function clamp(value: number, min: number, max: number): number;
export declare function fitWindowRectToViewport(rect: WindowRect, viewportRect: WindowRect, { minWidth, minHeight }?: FitWindowRectOptions): WindowRect;
export interface ResizeBounds {
    minX?: number;
    minY?: number;
    maxX?: number;
    maxY?: number;
}
/**
 * Compute new WindowRect after a resize drag.
 * Clamps to provided minimum dimensions and optional viewport bounds.
 */
export declare function calcResizeDelta(edge: ResizeEdge, dx: number, dy: number, rect: WindowRect, minWidth?: number, minHeight?: number, bounds?: ResizeBounds): WindowRect;
/** Cursor CSS class per resize edge */
export declare const EDGE_CURSORS: Record<ResizeEdge, string>;
export {};
