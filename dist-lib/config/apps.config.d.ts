import { AppConfig, MenuBarMenu } from '../types/app';
/**
 * App registry — add new apps here.
 * icon: use "lucide:IconName" for lucide icons, or "/icons/file.svg" for custom SVGs
 * color: gradient color pair for the icon background [from, to]
 */
/** Fallback menus shown when no specific app is focused */
export declare const DEFAULT_MENU_BAR_MENUS: MenuBarMenu[];
export declare const APPS_CONFIG: AppConfig[];
/** Default dock order (app IDs) */
export declare const DEFAULT_DOCK_APPS: string[];
