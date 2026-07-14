# Widget System

## Overview

Widgets are small interactive components placed directly on the desktop canvas — similar to iOS Home Screen widgets or macOS Notification Center widgets. Each widget is an instance of a registered `WidgetDefinition`. Widgets can be added, removed, and repositioned by the user via the **Widget Gallery** (macOS: right-click desktop → Edit Widgets).

---

## Widget Sizes

| Size | Dimensions |
|------|-----------|
| `small` | 170 × 170 px |
| `medium` | 360 × 170 px |
| `large` | 360 × 360 px |

---

## Declaring Widgets in an App

Widgets are declared as part of `AppConfig.widgets[]`. The `appId` field is auto-filled by `widgets.config.ts` — do not set it manually.

```ts
// src/config/apps.config.ts
{
  id: 'my-app',
  name: 'My App',
  // ...
  widgets: [
    {
      id: 'my-app-clock',
      name: 'My App Clock',
      description: 'Shows a live clock from My App',
      sizes: ['small', 'medium'],
      componentKey: 'MyAppClock',
    },
  ],
}
```

`WidgetDefinition` fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Globally unique widget ID (e.g. `'clock-analog'`) |
| `name` | `string` | Display name shown in the gallery |
| `description` | `string?` | Short description shown in gallery |
| `sizes` | `WidgetSize[]` | Which sizes the widget supports (`'small'`, `'medium'`, `'large'`) |
| `componentKey` | `string` | Key into `WIDGET_COMPONENTS` lazy map in `WidgetRenderer` |

---

## Registering the Widget Component

Add a lazy import to `src/components/widgets/WidgetRenderer.tsx` (or the equivalent registry file):

```ts
const WIDGET_COMPONENTS = {
  MyAppClock: lazy(() => import('./MyAppClock').then((m) => ({ default: m.MyAppClock }))),
};
```

Then create the component file. A widget component receives `size` as a prop:

```tsx
// src/components/widgets/MyAppClock.tsx
'use client';

import type { WidgetSize } from '@/types/widget';

export function MyAppClock({ size }: { size: WidgetSize }) {
  return (
    <div className="flex items-center justify-center h-full text-2xl font-bold">
      12:00
    </div>
  );
}
```

---

## Built-in Widgets

Built-in widgets not tied to any specific app are declared in `BUILT_IN_WIDGETS` inside `src/config/widgets.config.ts` with `appId: '__built-in__'`.

---

## Widget Gallery

The gallery opens all open windows are minimized and shows all registered widgets grouped by app. When the user closes the gallery (Done), all previously minimized windows are restored.

Store actions:

| Action | Description |
|--------|-------------|
| `openWidgetGallery()` | Minimizes all windows, opens the gallery |
| `closeWidgetGallery()` | Closes gallery, restores minimized windows |
| `addWidget(def, size, x, y)` | Places a new widget instance on the desktop |
| `removeWidget(instanceId)` | Removes a widget instance |
| `moveWidget(instanceId, x, y)` | Updates widget position |
