import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function WindowsChrome({ onOpenApp }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { WindowsChrome as WindowsShell, WindowsChrome as WindowsTheme };
