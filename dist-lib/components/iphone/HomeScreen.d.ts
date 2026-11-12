import { AppConfig } from '../../types/app';
interface HomeScreenProps {
    onOpenApp: (app: AppConfig) => void;
    statusBarHeight: number;
    navBarHeight: number;
    homeIndicatorHeight: number;
    /**
     * Running full-bleed on a real phone: the device draws its own status bar and
     * home indicator, so offset content by the CSS safe-area insets instead.
     */
    useSafeArea?: boolean;
}
export declare function IPhoneHomeScreen({ onOpenApp, statusBarHeight, navBarHeight, homeIndicatorHeight, useSafeArea, }: HomeScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
