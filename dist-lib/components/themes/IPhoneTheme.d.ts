import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
    /**
     * Rendering full-bleed on a real phone (or a narrow viewport). The device
     * already has its own status bar / notch / home indicator, so the simulated
     * status bar (clock + Dynamic Island) and bottom dock are not drawn.
     */
    isRealDevice?: boolean;
}
export declare function IPhoneChrome({ onOpenApp, isRealDevice }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { IPhoneChrome as IPhoneShell, IPhoneChrome as IPhoneTheme };
