import { AppConfig } from '../../types/app';
interface ChromeProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function IPhoneChrome({ onOpenApp }: ChromeProps): import("react").JSX.Element;
export { IPhoneChrome as IPhoneShell, IPhoneChrome as IPhoneTheme };
