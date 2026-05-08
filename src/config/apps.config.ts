import type { AppConfig } from '@/types/app';

/**
 * App registry — add new apps here.
 * icon: use "lucide:IconName" for lucide icons, or "/icons/file.svg" for custom SVGs
 * color: gradient color pair for the icon background [from, to]
 */
export const APPS_CONFIG: AppConfig[] = [
  {
    id: 'finder',
    name: 'Finder',
    icon: 'lucide:Folder',
    iconColor: ['#1a6cff', '#0051d5'],
    component: 'Finder',
    defaultSize: { width: 800, height: 560 },
    minSize: { width: 400, height: 300 },
    hasMenuBar: true,
    category: 'system',
    contextMenu: [
      { key: 'new-window', label: 'New Finder Window', action: 'newWindow' },
      { key: 'sep1', label: '', action: '', separator: true },
      { key: 'get-info', label: 'Get Info', action: 'getInfo' },
    ],
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: 'lucide:SquareTerminal',
    iconColor: ['#1c1c1e', '#3a3a3c'],
    component: 'Terminal',
    defaultSize: { width: 680, height: 440 },
    minSize: { width: 360, height: 240 },
    hasStatusBar: true,
    category: 'developer',
    contextMenu: [
      { key: 'new-tab', label: 'New Tab', action: 'newTab' },
      { key: 'new-window', label: 'New Window', action: 'newWindow' },
    ],
  },
  {
    id: 'settings',
    name: 'System Settings',
    icon: 'lucide:Settings2',
    iconColor: ['#636366', '#48484a'],
    component: 'Settings',
    defaultSize: { width: 760, height: 520 },
    minSize: { width: 480, height: 400 },
    hasMenuBar: false,
    category: 'system',
  },
  {
    id: 'browser',
    name: 'Browser',
    icon: 'lucide:Globe',
    iconColor: ['#0a84ff', '#0055d4'],
    component: 'Browser',
    defaultSize: { width: 1024, height: 700 },
    minSize: { width: 480, height: 400 },
    hasMenuBar: true,
    hasStatusBar: false,
    category: 'internet',
    contextMenu: [
      { key: 'new-tab', label: 'New Tab', action: 'newTab' },
      { key: 'new-window', label: 'New Window', action: 'newWindow' },
    ],
  },
  {
    id: 'textedit',
    name: 'TextEdit',
    icon: 'lucide:FileText',
    iconColor: ['#ffffff', '#f5f5f5'],
    iconTextColor: '#1c1c1e',
    component: 'TextEditor',
    defaultSize: { width: 600, height: 480 },
    minSize: { width: 320, height: 240 },
    hasMenuBar: true,
    category: 'productivity',
    contextMenu: [
      { key: 'new', label: 'New Document', action: 'newDocument' },
    ],
  },
];

/** Default dock order (app IDs) */
export const DEFAULT_DOCK_APPS = ['finder', 'browser', 'terminal', 'textedit', 'settings'];
