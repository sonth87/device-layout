import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
    onSpotlight?: () => void;
    onAppSwitcher?: () => void;
    isSimpleMode?: boolean;
}
/** macOS chrome overlay — menubar fixed at top, dock floats at bottom center. */
export declare function MacOSChrome({ onOpenApp, onSpotlight, isSimpleMode }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
