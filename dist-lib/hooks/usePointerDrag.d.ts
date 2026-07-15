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
export declare function usePointerDrag({ onDragStart, onDragMove, onDragEnd }: UsePointerDragOptions): {
    onPointerDown: (e: React.PointerEvent) => void;
};
