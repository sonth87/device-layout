import { AppConfig } from '../../types/app';
interface HomeScreenProps {
    onOpenApp: (app: AppConfig) => void;
    statusBarHeight: number;
    navBarHeight: number;
    homeIndicatorHeight: number;
}
export declare function IPhoneHomeScreen({ onOpenApp, statusBarHeight, navBarHeight, homeIndicatorHeight, }: HomeScreenProps): import("react").JSX.Element;
export {};
