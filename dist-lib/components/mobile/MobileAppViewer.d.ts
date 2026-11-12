export declare function useHideMobileAppHeader(): ((hidden: boolean) => void) | null;
interface MobileAppViewerProps {
    statusBarHeight: number;
    navBarHeight: number;
    homeIndicatorHeight?: number;
    /**
     * Running full-bleed on a real phone: skip the simulated status bar / dock
     * spacers and the fake home-indicator pill, and respect the device safe area.
     */
    useSafeArea?: boolean;
}
export declare function MobileAppViewer({ statusBarHeight, navBarHeight, homeIndicatorHeight, useSafeArea }: MobileAppViewerProps): import("react/jsx-runtime").JSX.Element;
export {};
