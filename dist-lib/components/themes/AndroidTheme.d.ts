import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function AndroidChrome({ onOpenApp }: ChromeProps): import("react/jsx-runtime").JSX.Element;
export { AndroidChrome as AndroidShell, AndroidChrome as AndroidTheme };
