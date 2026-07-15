interface SwipeOptions {
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    /** Minimum px distance to trigger swipe */
    threshold?: number;
    /** Minimum velocity px/ms */
    velocityThreshold?: number;
}
/**
 * Detects swipe gestures via pointer events on the given element (or window if null).
 * Returns a ref to attach to the element you want to listen on.
 */
export declare function useSwipeGesture<T extends HTMLElement>(options: SwipeOptions, targetRef?: React.RefObject<T | null>): void;
export {};
