# URL State

## Overview

All open windows are serialized to URL search params and hydrated back on page load. This allows sharing a URL that opens the exact same set of windows at the same positions — including maximized state and prevRect.

---

## Wire Format

Each open, non-minimized window becomes one `?w=` param:

```
?w=<appId>:<x>,<y>,<width>,<height>[:<flags>[:<prevX>,<prevY>,<prevWidth>,<prevHeight>]]
```

| Segment | Description |
|---------|-------------|
| `appId` | The app identifier from `apps.config.ts` |
| `x,y,width,height` | Current window rect (integers) |
| `flags` | Bitmask: `1` = minimized, `2` = maximized |
| `prevX,prevY,prevWidth,prevHeight` | Restore rect (only present when `flags > 0`) |

Multiple windows use repeated `?w=` params:

```
?w=finder:100,200,800,560&w=terminal:0,28,1440,868:2:300,100,680,440
```

- `finder` at (100, 200), size 800×560, no flags, no prevRect
- `terminal` at (0, 28), size 1440×868, maximized (`flags=2`), prevRect = (300, 100, 680, 440)

---

## Encoding (`url-codec.ts`)

`encodeWindowToParam(win: WindowState): string`

Encodes a single `WindowState` to the wire format string. Omits trailing segments when they contain no information:
- Omits `prevRect` segment when flags = 0
- Omits `flags` segment when flags = 0

`decodeWindowFromParam(param: string): DecodedWindow | null`

Parses a wire format string. Returns `null` on malformed input. Returns:

```ts
{
  appId: string
  rect: WindowRect
  flags: number
  prevRect: WindowRect | null
  isMaximized: boolean
  isMinimized: boolean
}
```

---

## Sync Hook (`useWindowUrlSync.ts`)

Mounted once in the root layout. Handles both directions:

**Store → URL (write)**

Subscribes to the Zustand store. On any window state change, encodes all windows and replaces the browser URL using `history.replaceState` (no navigation, no scroll).

**URL → Store (hydration)**

On mount, reads all `?w=` params from `window.location.search`, decodes them, and calls `openWindow` for each. Passes `isMaximized` and `prevRect` so windows reopen in their exact saved state.

Hydration is skipped during SSR (the hook bails early if `typeof window === 'undefined'`).

---

## Flags Bitmask

```ts
const FLAGS = {
  MINIMIZED: 1,   // 0b01
  MAXIMIZED: 2,   // 0b10
};

// Check
const isMaximized = (flags & FLAGS.MAXIMIZED) !== 0;

// Set
flags |= FLAGS.MAXIMIZED;

// Clear
flags &= ~FLAGS.MAXIMIZED;
```

---

## Persistence vs URL State

URL state covers window positions, sizes, and open/closed status. It does NOT cover:
- Wallpaper selection (persisted in `localStorage` via Zustand persist middleware)
- Theme / OS preference (persisted in `localStorage`)
- Color scheme (persisted in `localStorage`)
- App content state — each app is responsible for its own persistence if needed

The URL is designed to be shareable. Paste a URL into a new browser tab and the same windows open.

---

## Security

Window rects from URL params are parsed as integers. Invalid values (NaN, out-of-bound) fall back to the app's `defaultSize` from `apps.config.ts`. `appId` is validated against the registered app list — unrecognized IDs are silently ignored during hydration.
