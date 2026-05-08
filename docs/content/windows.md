# Window Management

## Overview

Windows are rendered by `WindowManager` using `AnimatePresence` from Motion. Each window is an animated `motion.div` whose position, size, and state come entirely from the Zustand store. `useWindowDrag` and `useWindowResize` use pointer capture for drag/resize operations.

---

## Window State

```ts
interface WindowState {
  id: string
  appId: string
  title: string
  rect: WindowRect          // { x, y, width, height } — current position/size
  prevRect: WindowRect | null  // saved before maximize; restored on unmaximize
  zIndex: number
  isMinimized: boolean
  isMaximized: boolean
  isFocused: boolean
}
```

`prevRect` is the single source of truth for "where should this window go when restored". It is set by `maximizeWindow`, preserved during minimize, and consumed by `restoreWindow` and drag-from-fullscreen.

---

## Drag (`useWindowDrag.ts`)

Drag is initiated by pointer down on the window title bar. The hook uses `pointer capture` (`setPointerCapture`) so the window continues to track the pointer even when off-screen.

### Edge resistance

The window cannot be dragged so that its title bar goes above `dragTopInset` (the menubar bottom). Approaching that boundary creates resistance — the window slows down before clamping.

### Drag-from-fullscreen restore

If the window is maximized when the pointer goes down:
1. `toggleMaximize` is called immediately to restore the window
2. `startRef` is adjusted so the cursor grabs the window proportionally (e.g. if dragging at 60% of the maximized width, the cursor attaches at 60% of the restored width)
3. Drag continues normally

### Snap detection

During drag, cursor position is passed to `getSnapZone` on every `pointermove`. When a zone is detected, `emitSnapZone` fires and `SnapAssist` renders the preview overlay.

Top snap is detected by **window Y position**, not cursor Y:
```ts
const atTopBoundary = nextY <= dragTopInset && rawCursorY < dragTopInset;
```

On pointer up, if a snap zone was detected:
- `top` → `maximizeWindow(id)` (sets `isMaximized = true`, saves `prevRect`)
- `left / right / corners` → `moveWindow + resizeWindow` to the snap rect

---

## Resize (`useWindowResize.ts`)

Eight `ResizeHandle` components are absolutely positioned at the edges and corners of each window. On pointer down, the handle captures the pointer and begins tracking delta from the initial position.

Constraints:
- `minSize` is enforced per app (from `AppConfig`)
- The window cannot be resized so its left/top goes above/left of its boundaries
- Resize and move happen in a single `requestAnimationFrame` callback for performance

---

## Snap Assist (`SnapAssist.tsx`)

`SnapAssist` listens to the snap event bus and renders a transparent overlay showing where the window will snap. It is mounted by the theme compositor with `topInset` and `bottomInset` matching the active theme.

Zone layout:

```
┌──────────────────────────────────────┐  ← topInset (menubar bottom)
│  top-left   │      top       │ top-right │
│─────────────┼────────────────┼──────────│
│             │                │          │
│    left     │   (no zone)    │  right   │
│             │                │          │
└──────────────────────────────────────┘  ← viewport bottom - bottomInset
```

Zone colors:
- macOS: white/20 with glass backdrop (matches dock/menubar glass)
- Windows: `#0078d4` blue (Win11 accent)

---

## Maximize / Fullscreen

`maximizeWindow(id)` in the store:
1. Reads current `rect` into `prevRect`
2. Computes the maximized rect: `{ x: 0, y: topInset, width: viewportWidth, height: viewportHeight - topInset - bottomInset }`
3. Sets `isMaximized = true`

`Window.tsx` renders maximized windows using the stored rect (not `inset: 0`). This ensures the window starts at the correct Y (below the menubar) rather than at the top of the viewport.

### macOS dock auto-hide

When any window has `isMaximized = true` and is not minimized, `MacOSTheme` animates the dock downward by `dockHeight + dockOffsetBottom`. The dock re-appears when:
- The cursor enters the dock (`onMouseEnter`)
- The cursor is within 20px of the viewport bottom (`mousemove` listener)

---

## Z-index / Focus

Clicking a window calls `focusWindow(id)`, which:
- Sets `isFocused = true` on the target, `false` on all others
- Assigns the target the highest `zIndex` in the stack

The `zIndex` values are assigned monotonically — the focused window always renders on top.

---

## Open / Close Animation

`WindowManager` wraps all windows in `AnimatePresence`. Each `Window` has:
- `initial={{ opacity: 0, scale: 0.92 }}`
- `animate={{ opacity: 1, scale: 1 }}`
- `exit={{ opacity: 0, scale: 0.92 }}`

Motion spring config is tuned per action (open/close vs drag/resize).

---

## Mobile Themes

On `isMobile` themes (iPhone OS, Android), apps open fullscreen and there is no `WindowManager`. The chrome (`IPhoneTheme`, `AndroidTheme`) renders the active app as a full-viewport component. Drag/resize hooks are not used.
