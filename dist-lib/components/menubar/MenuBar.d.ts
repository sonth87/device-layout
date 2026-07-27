export declare function MenuBar({ onSpotlight, isSimpleMode, forceDark, fallbackMenuBarAppId, }?: {
    onSpotlight?: () => void;
    isSimpleMode?: boolean;
    forceDark?: boolean;
    fallbackMenuBarAppId?: string | null;
}): import("react").JSX.Element | null;
export { MenuDropdown } from './MenuDropdown';
export { getMenuLabel, getMenuItemLabel } from './MenuItems';
