import { MotionValue } from 'motion/react';
interface UseWindowDragOptions {
    windowId: string;
    x: MotionValue<number>;
    y: MotionValue<number>;
    width?: MotionValue<number>;
    height?: MotionValue<number>;
}
export declare function useWindowDrag({ windowId, x, y, width, height }: UseWindowDragOptions): {
    onPointerDown: (e: React.PointerEvent) => void;
};
export {};
