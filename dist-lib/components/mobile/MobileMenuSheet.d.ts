import { MenuBarMenu } from '../../types/app';
interface MobileMenuSheetProps {
    menus: MenuBarMenu[];
    appId: string;
    open: boolean;
    onClose: () => void;
}
/**
 * Bottom-sheet menu for iPhone/Android — auto-translated from the same
 * `menuBarMenus` data macOS/Windows use (no separate mobile-only field on
 * AppConfig). Nested `children` expand/collapse inline (accordion) instead
 * of a desktop-style flyout, which doesn't suit touch/mobile ergonomics.
 */
export declare function MobileMenuSheet({ menus, appId, open, onClose }: MobileMenuSheetProps): import('react').ReactPortal | null;
export {};
