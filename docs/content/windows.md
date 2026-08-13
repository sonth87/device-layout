# Window Management

## Overview

Windows in **Device Layout** provide a desktop OS windowing environment in the browser. The system supports multiple window types (Standard App Windows, Floating Windows/Dialogs, and Mobile Fullscreen Views), rich chrome styling options, per-app menu configurations, and magnetic drag-and-drop mechanics.

---

## Window Types

### 1. Standard App Windows (`Window.tsx`)
Standard windows are managed centrally by the Zustand store (`window-slice.ts`) and rendered inside `WindowManager` using Motion's `AnimatePresence`.

- **State Management**: Persisted in `store.windows` as a dictionary of `WindowState`.
- **Interactions**: Supports 8-direction resizing (`ResizeHandle.tsx`), titlebar dragging, viewport boundary clamping, magnetic edge snapping, and Snap Assist layout snapping.
- **Window States**: Normal, Maximized (`isMaximized`), Fullscreen (`isFullScreen`), and Minimized (`isMinimized`).
- **Stacking Order**: Dynamic `zIndex` derived from `zCounter` whenever a window is focused.

### 2. Floating Windows & Dialogs (`FloatingWindow.tsx`)
Floating windows are standalone dialogs (e.g. *About This Mac*, *About App*, settings modals, log viewers) rendered directly to `document.body` (or a custom container) via React `createPortal`.

- **Independent Stacking**: Fixed `zIndex: 99999` to ensure they float above all standard windows. Does not appear on Dock or App Switcher.
- **Interaction Modes (`blocking`)**:
  - `blocking={false}` (Default): Allows user to click and interact with windows/desktop behind the floating window.
  - `blocking={true}`: Renders a full-viewport transparent backdrop (`pointer-events-auto`) that blocks clicks underneath.
- **Boundary Clamping & Edge Snap**: Constrained from dragging above the top MenuBar (`hardMinY = topInset`) or off-screen, with 50px magnetic edge snapping (`applyEdgeSnap`).
- **Focus Management**: Automatically unfocuses all standard windows (`isFocused = false`, `focusedWindowId = null`) on mount and pointer capture (`onPointerDownCapture`). Restores focus to the top-most standard window on unmount.

### 3. Mobile Fullscreen Views (`IPhoneTheme.tsx` / `AndroidTheme.tsx`)
On mobile OS themes (`iphone`, `android`), apps open fullscreen inside the mobile device chrome. `WindowManager`, drag/resize hooks, and desktop chrome are bypassed.

---

## Window State (`WindowState`)

```ts
export interface WindowState {
  id: string;
  appId: string;
  title: string;
  rect: WindowRect;             // { x, y, width, height } — current position and size
  prevRect: WindowRect | null;  // Saved before maximize; restored on unmaximize/drag
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  isFullScreen: boolean;        // True macOS fullscreen (fills viewport over menubar + dock)
  isFocused: boolean;
  hasMenuBar: boolean;
  hasStatusBar: boolean;
}
```

---

## Window Configuration & Chrome Options (`AppConfig`)

An app configures its window appearance and chrome features in `AppConfig`:

```ts
export interface AppConfig {
  id: string;
  name: string;
  icon: string | ComponentType<any>;
  
  // Dimensions & Constraints
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  minSize?: { width: number; height: number };        // Default: { width: 320, height: 240 }
  launchMode?: 'single' | 'multi';                    // Single instance vs multi window
  
  // Chrome Styling
  titleBarMode?: 'normal' | 'transparent';            // Standard chrome vs transparent overlay
  hasMenuBar?: boolean;                               // Per-app menubar inside window header
  hasStatusBar?: boolean;                             // Per-app statusbar at window bottom
  
  // Menus & Actions
  menuBarMenus?: MenuBarMenu[];                       // Declarative top menu bar
  appNameMenuExtraItems?: MenuBarItem[];              // Custom items for bold app-name dropdown
  contextMenu?: ContextMenuAction[];                  // Right-click context menu on desktop/dock
}
```

---

## Menu Bar & Toolbars Configuration

### 1. System Menu Bar (macOS MenuBar)
The top menubar renders global system controls and active app menus:
- **Apple Menu ()**: System actions (*About This Mac*, *System Settings*, *Restart*, *Shut Down*).
- **Bold Active App Dropdown**: Contains *"About {app}"*, custom extra items (`appNameMenuExtraItems`), and *"Quit {app}"*.
- **Declarative App Menus (`menuBarMenus`)**: Top-level menus (e.g. *File*, *Edit*, *View*, *Format*, *Help*).

Each `MenuBarItem` supports:
- `key`: Unique item identifier.
- `label`: Item text displayed in menu.
- `action`: Custom action string. Dispatched via `CustomEvent('app:menu:action', { detail: { appId, action } })`.
- `shortcut`: Displayed keyboard shortcut (e.g. `⌘N`, `Ctrl+S`).
- `checked`: Boolean indicating a native checkmark state.
- `disabled` & `separator`: Visual menu flags.
- `children`: Sub-menu items.

### 2. Window Chrome (`WindowChrome.tsx`)
- **Traffic Lights / Controls**: macOS traffic lights (red close, yellow minimize, green zoom/fullscreen) or Windows 11 title bar buttons.
- **Title & Icon**: Renders app icon and title centered or aligned according to active OS theme.
- **Transparent Titlebar (`titleBarMode: 'transparent'`)**: Merges titlebar with window content canvas.

### 3. Window Status Bar (`WindowStatusBar.tsx`)
When `hasStatusBar: true`, renders a status footer at the bottom of the window for status indicators, item counts, or zoom controls.

---

## Floating Window API (`FloatingWindow.tsx`)

Composed dialogs (such as `AboutDialog` and `PersonalAboutDialog`) use `FloatingWindow`:

```tsx
import { FloatingWindow } from '@/components/shared/FloatingWindow';

<FloatingWindow
  onClose={() => setShow(false)}
  title="System Information"
  width={320}
  blocking={false}
  resizable={true}
>
  <div>Dialog Content</div>
</FloatingWindow>
```

### Props Reference (`FloatingWindowProps`)

| Prop | Type | Default | Description |
|---|---|---|---|
| `onClose` | `() => void` | **Required** | Callback when closing the floating window |
| `title` | `ReactNode` | `undefined` | Header title text next to traffic lights |
| `width` | `number` | `288` | Initial window width in pixels |
| `height` | `number` | `undefined` | Initial window height in pixels |
| `blocking` | `boolean` | `false` | If `true`, renders a backdrop that blocks clicks underneath |
| `resizable` | `boolean` | `false` | Enables bottom-right corner resize handle |
| `minWidth` | `number` | `260` | Minimum resizable width in pixels |
| `minHeight` | `number` | `160` | Minimum resizable height in pixels |
| `contentClassName` | `string` | `undefined` | Custom Tailwind classes for children container |
| `container` | `Element` | `document.body` | Target DOM element for portal rendering |

---

## Drag Mechanics (`useWindowDrag.ts`)

Window dragging is initiated by pointer down on the titlebar and captured via `setPointerCapture`.

### Boundary Clamping & Resistance
- **Top Boundary (`dragTopInset`)**: Windows cannot be dragged above the bottom of the MenuBar.
- **Viewport Constraints**: Windows maintain a minimum visible overlap (`200px`) inside the viewport unless `allowDragOutOfBounds` is enabled in store.

### Drag-from-Fullscreen Restore
If a maximized window is dragged from its titlebar:
1. `toggleMaximize` is called immediately to restore normal dimensions.
2. `startRef` adjusts position proportionally so the cursor grabs the restored window at the same relative horizontal percentage.
3. Drag tracking continues seamlessly.

### Edge Snapping & Snap Assist (`SnapAssist.tsx`)
During drag, pointer position triggers `getSnapZone`. When a zone is active, `SnapAssist` renders a visual snap preview overlay:
- `top` → Maximizes window (`isMaximized = true`, saves `prevRect`).
- `left / right / corners` → Resizes window to 50% split or quadrant rect.

---

## Resize Mechanics (`useWindowResize.ts`)

Eight `ResizeHandle` elements are positioned around window edges and corners (`n, ne, e, se, s, sw, w, nw`).
- Clamped by `appConfig.minSize`.
- Perform move and resize in a single `requestAnimationFrame` for 60fps performance.

