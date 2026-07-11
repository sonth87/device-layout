import type { ComponentType } from 'react';
import type { WidgetDefinition } from './widget';
import type { AppLocale } from './locale';

/**
 * Props passed to every app's root component — whether built-in
 * (resolved via `component` key) or external (passed directly via `render`).
 */
export interface AppContentProps {
  appId: string;
  windowId: string;
}

export interface ContextMenuAction {
  key: string;
  label: string;
  shortcut?: string;
  /** Identifier dispatched to the app's event handler */
  action: string;
  separator?: boolean;
  disabled?: boolean;
  children?: ContextMenuAction[];
}

export interface MenuBarItem {
  key: string;
  label: string;
  /** Action string dispatched via 'app:menu:action' CustomEvent */
  action?: string;
  shortcut?: string;
  separator?: boolean;
  disabled?: boolean;
  children?: MenuBarItem[];
}

export interface MenuBarMenu {
  label: string;
  items: MenuBarItem[];
}

export interface AppConfig {
  id: string;
  name: string;
  /** "lucide:IconName" or "/path/to/icon.svg" */
  icon: string;
  /** Gradient color pair [from, to] for icon background */
  iconColor?: [string, string];
  /** Text/icon color inside icon background (default white) */
  iconTextColor?: string;
  /** Key matching a lazy import in AppRegistry (built-in apps) */
  component?: string;
  /**
   * External app component, passed directly instead of a registry key.
   * Takes priority over `component` when both are set. Lets a host
   * application (e.g. an Electron shell) register its own apps without
   * touching AppRegistry's internal APP_COMPONENTS map.
   */
  render?: ComponentType<AppContentProps>;
  disabled?: boolean;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  minSize?: { width: number; height: number };
  contextMenu?: ContextMenuAction[];
  hasMenuBar?: boolean;
  hasStatusBar?: boolean;
  /** Logical category used for grouping */
  category?: string;
  /** On iOS/Android themes, always open fullscreen */
  mobileFullscreen?: boolean;
  /** Used by IframeApp component */
  iframeUrl?: string;
  /** Used by MdxApp component — slug maps to /content/*.mdx */
  mdxSlug?: string;
  /** Dock/taskbar badge text or number */
  badge?: string | number;
  /** Default launcher behavior for this app */
  launchMode?: 'single' | 'multi';
  /** Top menu bar declarations for macOS MenuBar (replaces hardcoded APP_MENUS) */
  menuBarMenus?: MenuBarMenu[];
  /** Key in AppSettingsRegistry — renders this app's panel inside System Settings */
  appSettings?: string;
  /**
   * Widgets this app provides.
   * Omit appId here — it is auto-filled by widgets.config.ts from the AppConfig.id.
   */
  widgets?: Omit<WidgetDefinition, 'appId'>[];
  /**
   * App-level locale dictionary.
   * Declare translated strings for any languages the app supports.
   * - `en` is required and used as the fallback.
   * - The system language is used to pick the right locale; if the app
   *   doesn't support the current language, `en` is used automatically.
   * @see types/locale.ts
   */
  locale?: AppLocale;
}

export interface AppInstance {
  appId: string;
  windowIds: string[];
}
