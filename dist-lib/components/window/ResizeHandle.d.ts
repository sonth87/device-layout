import { ResizeEdge } from '../../types/window';
interface ResizeHandleProps {
    edge: ResizeEdge;
    onPointerDown: (e: React.PointerEvent) => void;
}
export declare function ResizeHandles({ getResizeHandler, }: {
    getResizeHandler: (edge: ResizeEdge) => (e: React.PointerEvent) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function ResizeHandle({ edge, onPointerDown }: ResizeHandleProps): import("react/jsx-runtime").JSX.Element;
export {};
