interface WindowChromeProps {
    windowId: string;
    onPointerDown: (e: React.PointerEvent) => void;
}
export declare function WindowChrome({ windowId, onPointerDown }: WindowChromeProps): import("react").JSX.Element;
export {};
