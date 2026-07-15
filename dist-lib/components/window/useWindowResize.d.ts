import { MotionValue } from 'motion/react';
import { ResizeEdge } from '../../types/window';
interface UseWindowResizeOptions {
    windowId: string;
    x: MotionValue<number>;
    y: MotionValue<number>;
    width: MotionValue<number>;
    height: MotionValue<number>;
    minWidth?: number;
    minHeight?: number;
}
export declare function useWindowResize({ windowId, x, y, width, height, minWidth, minHeight, }: UseWindowResizeOptions): {
    getResizeHandler: (edge: ResizeEdge) => (e: React.PointerEvent) => void;
};
export {};
