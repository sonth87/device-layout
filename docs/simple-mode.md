# Simple Mode Integration Guide

This guide explains how to integrate and use **Simple Mode** in the `@sonth87/device-layout` desktop simulator package.

## Overview

Simple Mode is a minimal, clean theme configuration designed for embedded environments where you want to use the simulator layout without the full macOS OS identity.

When enabled:
- **No Default Apps:** All default apps (Finder, Terminal, Settings, Notes, Calendar, etc.) are omitted by default.
- **macOS Layout Base:** The simulator aligns top Menubar and window positioning to the macOS layout style.
- **No Dock:** The desktop Dock is completely hidden and disabled.
- **No Context Menu:** Right-clicking the desktop wallpaper does not open the default options menu.
- **Solid Color Background:** Wallpaper images and videos are replaced by a solid background that automatically adapts to light and dark color schemes (`#f4f4f5` for light mode, `#18181b` for dark mode).
- **Minimal Top Menu:** Hides the Apple logo dropdown and the right-side system tools (Search, Wifi, Battery, Control Center, Clock), showing only active menu items on the left.
- **No Widgets:** The widget system is completely disabled.

---

## Code Integration

To enable Simple Mode, pass the `isSimpleMode` prop to the `<DeviceLayout>` component.

```tsx
import { DeviceLayout } from '@sonth87/device-layout';
import '@sonth87/device-layout/style.css';

export function MyEmbeddedApp() {
  const customApps = [
    {
      id: 'my-app',
      name: 'My Dashboard',
      icon: 'lucide:LayoutDashboard',
      iconColor: ['#007afe', '#0051d5'],
      component: 'MyDashboard',
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    }
  ];

  return (
    <DeviceLayout
      isSimpleMode={true}
      apps={customApps}
    />
  );
}
```

---

## Local Development & Testing

A testing page has been set up at `/simple` in the standalone sandbox.

To run the simulator locally in Simple Mode:
```bash
npm run dev:simple
```
This command starts the local development environment and automatically opens your browser to `http://localhost:3000/simple`.
