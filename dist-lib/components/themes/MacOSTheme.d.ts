import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
    onSpotlight?: () => void;
    onAppSwitcher?: () => void;
    isSimpleMode?: boolean;
    fallbackMenuBarAppId?: string | null;
}
export declare function MacOSChrome({ onOpenApp, onSpotlight, isSimpleMode, fallbackMenuBarAppId }: ChromeProps): import("react").JSX.Element;
export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
