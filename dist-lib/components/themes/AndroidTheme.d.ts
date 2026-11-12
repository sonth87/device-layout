import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
    /**
     * Rendering full-bleed on a real phone (or a narrow viewport). The device
     * already has its own status bar, so the simulated status bar and bottom nav
     * are not drawn; apps are listed on a home-screen grid instead.
     */
    isRealDevice?: boolean;
}
export declare function AndroidChrome({ onOpenApp, isRealDevice }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { AndroidChrome as AndroidShell, AndroidChrome as AndroidTheme };
