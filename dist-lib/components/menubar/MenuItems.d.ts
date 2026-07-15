import { MenuBarItem } from '../../types/app';
import { TranslationKey } from '../../hooks/useTranslation';
type TranslationDict = Record<TranslationKey, string>;
export declare const MenuBarThemeCtx: import('react').Context<"light" | "dark">;
/** Returns Tailwind classes for an inactive menu-bar button. */
export declare function useMenuBtnClass(): "text-black/80 hover:bg-black/10" | "text-white/85 hover:bg-white/10";
export declare const menuBarButtonClass = "flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors";
export declare function MenuItem({ label, shortcut, disabled, onClick, }: {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    onClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function MenuSeparator(): import("react/jsx-runtime").JSX.Element;
export declare function getMenuLabel(label: string, t: TranslationDict): string;
export declare function getMenuItemLabel(label: string, t: TranslationDict): string;
export declare function MenuItemRow({ item, t, onSelect, }: {
    item: MenuBarItem;
    t: TranslationDict;
    onSelect: (item: MenuBarItem) => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
