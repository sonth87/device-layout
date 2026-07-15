import { RefObject } from 'react';
export interface Size {
    width: number;
    height: number;
}
export declare function useResizeObserver(ref: RefObject<Element | null>): Size;
/** Convenience: observe viewport size */
export declare function useViewportSize(): Size;
