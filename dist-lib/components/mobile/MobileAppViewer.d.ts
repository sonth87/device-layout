export declare function useHideMobileAppHeader(): ((hidden: boolean) => void) | null;
interface MobileAppViewerProps {
    statusBarHeight: number;
    navBarHeight: number;
    homeIndicatorHeight?: number;
}
export declare function MobileAppViewer({ statusBarHeight, navBarHeight, homeIndicatorHeight }: MobileAppViewerProps): import("react").JSX.Element;
export {};
