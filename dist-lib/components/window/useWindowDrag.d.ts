import { MotionValue } from 'motion/react';
interface UseWindowDragOptions {
    windowId: string;
    x: MotionValue<number>;
    y: MotionValue<number>;
}
export declare function useWindowDrag({ windowId, x, y }: UseWindowDragOptions): {
    onPointerDown: (e: React.PointerEvent) => void;
};
export {};
