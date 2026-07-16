---
name: device-layout
description: Understand, develop, debug, and expand the Device Layout desktop simulation framework. Use this skill when asked to add new apps, register custom widgets, add settings tabs, implement localization, or modify the core layout system.
---

# Device Layout System Developer Skill

This skill contains the complete architecture blueprint, system rules, store design patterns, library integration guidelines, VFS/Storage rules, and step-by-step checklists for developers and AI agents working on the **Device Layout** desktop simulation system.

---

## 1. Directory Structure Blueprint

Developers must adhere to this folder organization when adding or modifying components:

```
src/
├── app/                    # Next.js App Router entrypoints (for standalone web sandbox)
│   └── globals.css         ← Global CSS compiling Tailwind v4 rules
├── components/
│   ├── apps/               # Application window contents (one file per app)
│   │   ├── AppRegistry.tsx         ← Maps AppConfig.component string to React components
│   │   ├── Settings.tsx            ← System Settings shell app
│   │   ├── settings/               ← App-specific settings panels
│   │   │   ├── AppSettingsRegistry.tsx  ← Maps appSettings key to settings component
│   │   │   ├── SettingsGeneral.tsx
│   │   │   ├── SettingsAppearance.tsx
│   │   │   └── TerminalSettings.tsx     ← Example settings panel
│   │   └── ui/             # Reusable settings UI primitives (AppSection, AppToggle)
│   ├── desktop/            # Desktop chrome elements (Dock, MenuBar, Wallpaper, IconGrid)
│   ├── liquid-glass/       # LiquidGlass glassmorphism styling wrapper
│   ├── widgets/            # HomeScreen / Desktop Widget components
│   │   └── WidgetRenderer.tsx      ← Lazy-load registry map for widgets
│   └── shared/             # Shared components (AppIconImage, etc.)
├── config/
│   ├── apps.config.ts      ← [CRITICAL] CENTRAL APP REGISTRY
│   ├── themes.config.ts    ← OS theme configs (macOS, iPad, iPhone, Windows, Android)
│   └── widgets.config.ts   ← Aggregates app-specific & built-in widgets
├── hooks/
│   ├── useTranslation.ts   ← System-level translation hook (6 languages)
│   └── useAppTranslation.ts ← App-specific translation hook
├── store/
│   ├── index.ts            ← Zustand RootStore combining all slices
│   ├── app-slice.ts        ← App process state, window list, focus state
│   ├── widget-slice.ts     ← Widget instances layout & gallery controls
│   └── vfs-slice.ts        ← Virtual File System state and browser persistence
└── types/
    ├── app.ts              ← Types for AppConfig, MenuBarMenu, ContextMenuAction
    └── widget.ts           ← Types for WidgetInstance, WidgetDefinition
```

---

## 2. Consuming Device Layout as a Library

The project can be built as a standalone ESM library package (`dist-lib/`) to be embedded inside a host application (e.g. an Electron shell, parent Next.js site, or custom web client).

### 2.1 The Library Build Pipeline
Run the following commands to compile and package the library:
```bash
pnpm build:lib      # Compiles source files into dist-lib/ (index.js, style.css, types)
pnpm pack           # Creates a tarball (e.g., sonth87-device-layout-0.1.0.tgz)
```

### 2.2 Installing and Importing in a Host Project
1. Install the built tarball in the host app's `package.json`:
   ```json
   "dependencies": {
     "@sonth87/device-layout": "file:./path/to/sonth87-device-layout-0.1.0.tgz"
   }
   ```
2. Import the React component and styles at the host app's root entrypoint:
   ```tsx
   import { DeviceLayout } from '@sonth87/device-layout';
   import '@sonth87/device-layout/style.css'; // Pre-compiled Tailwind v4 CSS
   ```

### 2.3 Key Configuration Props
- `apps: AppConfig[]`: Array of app configs. Host applications should provide custom app components directly via the `render` prop (e.g. `render: MyDashboard`) instead of editing the library's internal `AppRegistry`.
- `assetBaseUrl: string`: Base URL prefix for static assets (wallpapers, videos, and app icons). The host app must host these assets and point this prop to them (e.g. `/assets/`).
- `onImportWallpaper`: Callback function providing wallpaper import capabilities ("Add a Photo" button).
- `updateActions`: Functions hook to support OTA update checks (e.g. Electron auto-updaters).
- `isSimpleMode: boolean`: Enforces a minimal, layout-only macOS-styled wrapper (no Dock, no default apps, no desktop context menus, solid background, minimal menubar, no widgets).

---

## 3. Registering Widgets & Settings for Host Apps

When building custom host apps that are embedded in `DeviceLayout`, their custom widgets and settings tabs must be declared in the core library codebase before executing `pnpm build:lib`.

### 3.1 Custom App Widgets Registration
1. In `apps.config.ts`, include the `widgets` array within the custom app config:
   ```ts
   widgets: [
     {
       id: 'my-custom-widget',
       name: 'Custom Status',
       sizes: ['small', 'medium'],
       componentKey: 'MyCustomWidget',
     }
   ]
   ```
2. Lazy-import the widget component in `src/components/widgets/WidgetRenderer.tsx`:
   ```ts
   const WIDGET_COMPONENTS = {
     // ...
     MyCustomWidget: lazy(() => import('./built-in/MyCustomWidget').then((m) => ({ default: m.MyCustomWidget }))),
   };
   ```

### 3.2 Custom App Settings Registration
1. Declare the `appSettings` key in the custom app config block:
   ```ts
   appSettings: 'MyCustomSettings',
   ```
2. Lazy-import the settings panel component in `src/components/apps/settings/AppSettingsRegistry.tsx`:
   ```ts
   const APP_SETTINGS_MAP = {
     // ...
     MyCustomSettings: lazy(() => import('./MyCustomSettings').then((m) => ({ default: m.MyCustomSettings }))),
   };
   ```

---

## 4. CSS Isolation & Stacking Context Scoping

To prevent host application styles from clashing with the library or vice-versa, the library employs a two-tier CSS isolation system:

### 4.1 Compiled Stylesheet Delivery
- **No Host Configuration Needed**: The library pre-compiles and bundles Tailwind v4 into `dist-lib/style.css`. The host application does not need to install Tailwind to render `DeviceLayout`.
- **Global styling safety**: While the library styles are globally loaded via `style.css`, all selectors target simulator container classes.

### 4.2 Stacking Context Scoping
- **`isolation: "isolate"`**: This CSS property is applied to the window viewport layer inside [LiquidGlass.tsx](file:///Users/skyline/PROJECTS/device-layout/src/components/liquid-glass/LiquidGlass.tsx).
- **Z-Index Bleed Prevention**: The isolation property scopes all `z-index` layering inside the custom application contents. Modals, dropdowns, and layouts inside your custom apps will never bleed into or overlap the OS-level chrome (MenuBar, Dock, taskbars) unless you explicitly mount them to the root document body portal.

---

## 5. Core Zustand Store & VFS

The simulator relies on a single **unified Zustand store** containing multiple slices combined using Immer middleware.

### 5.1 The Virtual File System (VFS) & Storage Layer
Applications must persist user data through the VFS slice instead of accessing `localStorage` directly.
- **Root directory**: `/Users/user/` (e.g. `/Users/user/Documents/Notes/`).
- **Data Persistence**: The VFS automatically serializes its files in browser `localStorage` under `desktop-layout-store`.
- **VFS Slice APIs**:
  - `vfsWriteFile(path: string, content: string, mimeType?: string)`: Writes or updates a file.
  - `vfsReadFile(path: string)`: Returns file content string, or null if file doesn't exist.
  - `vfsDeleteFile(path: string)`: Deletes file from the virtual directory.

### 5.2 Atomic Updates Rule
When modifying multiple window states, focusing apps, or updating widgets, **never run multiple store actions sequentially inside loops**. Instead, run them inside a single Immer `set` transaction:
```ts
// GOOD - Single state transaction, zero intermediate render cycles
set((state: any) => {
  for (const id of windowIds) {
    if (state.windows[id]) {
      state.windows[id].isMinimized = true;
      state.windows[id].isFocused = false;
    }
  }
  state.focusedWindowId = null;
  state.activeAppId = null;
});
```

---

## 6. Localization Guidelines

All strings displayed to the user must be localized using:

- **Global Strings**: Added to translation dictionaries in `src/hooks/useTranslation.ts` and loaded via `useTranslation()`.
- **App-Specific Strings**: Declared in the app config's `locale` property:
  ```ts
  locale: {
    en: { greeting: 'Hello' },
    vi: { greeting: 'Xin chào' },
  }
  ```
  And retrieved inside app files using:
  ```ts
  import { useAppTranslation } from '@/hooks/useAppTranslation';
  
  const { t } = useAppTranslation('my-app-id');
  // Use: t.greeting
  ```
