import { AppConfig } from '../../types/app';
interface NavBarProps {
    onOpenApp: (app: AppConfig) => void;
    /** Height in px of the nav bar row (does not include home indicator) */
    navBarHeight?: number;
}
/** Bottom dock — used by iPhone OS and Android themes */
export declare function NavBar({ onOpenApp, navBarHeight }: NavBarProps): import("react").JSX.Element;
export {};
