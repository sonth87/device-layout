# External App Integration (`render` prop)

## Overview

The `render` prop on `AppConfig` allows a **host application** (e.g. an Electron shell, a Next.js wrapper, or any parent app consuming Device Layout as a library) to register custom app components **without touching the internal `AppRegistry`**. This is the primary integration point for deploying Device Layout as a multi-app platform.

---

## How It Works

`AppContent` in `AppRegistry.tsx` checks `appConfig.render` before looking up a component key in the internal registry:

```tsx
// AppRegistry.tsx
if (appConfig.render) {
  const ExternalComponent = appConfig.render;
  return (
    <Suspense fallback={<AppLoadingSkeleton />}>
      <AppViewportProvider>
        <ExternalComponent appId={appId} windowId={windowId} />
      </AppViewportProvider>
    </Suspense>
  );
}
```

This means `render` always takes priority over `component`. No code changes are needed inside this repository.

---

## Registering an External App

In your host application, register the app by pushing to (or replacing) `APPS_CONFIG` before the store initializes, or by calling a runtime registration function if provided:

```ts
// In your host app entry point
import { APPS_CONFIG } from 'device-layout/config/apps.config';
import { MyDashboard } from './MyDashboard';

APPS_CONFIG.push({
  id: 'my-dashboard',
  name: 'Dashboard',
  icon: 'lucide:LayoutDashboard',
  iconColor: ['#6366f1', '#4f46e5'],
  render: MyDashboard,   // <-- your component, no registry needed
  defaultSize: { width: 1000, height: 700 },
  minSize: { width: 600, height: 400 },
  category: 'productivity',
});
```

---

## Component Interface

External components receive the same props as built-in apps:

```tsx
interface AppContentProps {
  appId: string;     // the id from AppConfig
  windowId: string;  // unique window instance id
}

export function MyDashboard({ appId, windowId }: AppContentProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Your app content */}
    </div>
  );
}
```

The root element **must** fill the available area (`h-full`). `AppViewportProvider` wraps the component and provides a `ResizeObserver`-backed context for layout-responsive components.

---

## Using the AppViewport Context

Inside an external app component, use `useAppViewport()` to get the current window content area size:

```tsx
import { useAppViewport } from 'device-layout/components/apps/AppViewport';

export function MyDashboard() {
  const { width, height } = useAppViewport();

  return (
    <div>
      Window content area: {width} × {height}
    </div>
  );
}
```

This is measured against the **window content area** — not the browser viewport — so it works correctly at any window size.

---

## Using OS Services from External Apps

External apps have full access to the Zustand store and can use all the same hooks as built-in apps:

```ts
// Dispatch a notification
const pushNotification = useStore((s) => s.pushNotification);
pushNotification({ appId: 'my-dashboard', title: 'Data loaded' });

// Listen for menu bar actions
useMenuAction(appId, (action) => {
  if (action === 'refresh') refetch();
});

// Read/write the virtual filesystem
const vfsWriteFile = useStore((s) => s.vfsWriteFile);
vfsWriteFile('/Users/user/Documents/export.csv', csvData, 'text/csv');
```

---

## Isolation Notes

Each app window is wrapped in `AppViewportProvider` which creates an isolated `ResizeObserver` context. The `isolation: "isolate"` CSS property is applied on the glass layer (`LiquidGlass.tsx`) to create a new stacking context — ensuring z-index layering inside app content does not bleed into the window chrome.

This means:
- Your app's internal `z-index` values are scoped to the window frame
- Dropdowns, modals, and overlays inside your app render on top of app content but below the OS chrome (menubar, dock)
- Use `portal`-based solutions (Radix UI `Portal`, `createPortal`) if you need your overlay to escape the window frame
