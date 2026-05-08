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

export interface AppConfig {
  id: string;
  name: string;
  /** "lucide:IconName" or "/path/to/icon.svg" */
  icon: string;
  /** Gradient color pair [from, to] for icon background */
  iconColor?: [string, string];
  /** Text/icon color inside icon background (default white) */
  iconTextColor?: string;
  /** Key matching a lazy import in AppRegistry */
  component: string;
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
}

export interface AppInstance {
  appId: string;
  windowIds: string[];
}
