import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function IPadChrome({ onOpenApp }: ChromeProps): import("react").JSX.Element;
export { IPadChrome as IPadShell, IPadChrome as IPadTheme };
