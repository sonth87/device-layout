# Device Layout — Architecture & Developer Guide

> Last updated: 2026-06  
> Read this before adding a new app, language, widget, or system setting.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [App Registration System](#app-registration-system)
4. [Language / i18n System](#language--i18n-system)
5. [Widget System](#widget-system)
6. [System Settings Integration](#system-settings-integration)
7. [Store Architecture](#store-architecture)
8. [Adding a New App — Step-by-Step](#adding-a-new-app--step-by-step)
9. [Adding a New Language](#adding-a-new-language)

---

## Project Overview

Device Layout is a macOS/iOS/Android/Windows desktop simulator built with **Next.js** (App Router), **TypeScript**, **Zustand** (store), and vanilla **CSS + Tailwind**.

The core metaphor:
- **Desktop**: icon grid, wallpaper, context menu (right-click)
- **Windows**: resizable, draggable, z-indexed app windows
- **Dock**: pinned app shortcuts
- **Menu Bar**: macOS-style global menu for the focused app
- **Widgets**: small configurable components on the desktop
- **System Settings**: per-section settings panels similar to macOS System Settings

---

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── apps/               # App window contents (one file per app)
│   │   ├── AppRegistry.tsx         ← lazy-load map for all app components
│   │   ├── Settings.tsx            ← System Settings shell
│   │   ├── settings/               ← individual settings panels
│   │   │   ├── SettingsGeneral.tsx
│   │   │   ├── SettingsAppearance.tsx
│   │   │   ├── SettingsDesktopDock.tsx
│   │   │   ├── SettingsWallpaper.tsx
│   │   │   ├── SettingsNotifications.tsx
│   │   │   ├── AppSettingsRegistry.tsx  ← maps appSettings key → component
│   │   │   └── TerminalSettings.tsx     ← example per-app settings panel
│   │   └── ui/             # Shared settings UI primitives (AppSection, AppToggle…)
│   ├── desktop/            # Desktop chrome (dock, menubar, wallpaper, icon grid)
│   └── shared/             # Shared components (AppIconImage, etc.)
├── config/
│   ├── apps.config.ts      ← 🔑 REGISTER APPS HERE (AppConfig[])
│   ├── themes.config.ts    ← OS themes (macOS, iPad, iPhone, Windows, Android)
│   ├── wallpapers.config.ts
│   └── widgets.config.ts   ← widget definitions (auto-filled from apps.config)
├── hooks/
│   ├── useTranslation.ts   ← system-level translations (all 6 languages)
│   └── useAppTranslation.ts ← per-app locale hook (follows system language)
├── store/
│   ├── index.ts            ← root zustand store
│   ├── desktop-slice.ts    ← wallpaper, icons, dock, language
│   ├── app-slice.ts        ← open windows, focus
│   └── ...
└── types/
    ├── app.ts              ← AppConfig, MenuBarMenu, ContextMenuAction
    ├── locale.ts           ← SupportedLang, AppLocale, LANG_LABELS, LANG_FLAGS
    ├── widget.ts           ← WidgetDefinition
    └── ...
```

---

## App Registration System

Every app in the system is declared as an `AppConfig` object in **`src/config/apps.config.ts`**.

### `AppConfig` Reference

```ts
interface AppConfig {
  // ── Required ─────────────────────────────────────────────────────────
  id: string;           // Unique slug, e.g. 'notes', 'browser'
  name: string;         // Display name shown in dock and title bar
  icon: string;         // "lucide:IconName" or "/path/to/icon.svg"
  component: string;    // Key in AppRegistry.tsx APP_COMPONENTS map

  // ── Icon appearance ───────────────────────────────────────────────────
  iconColor?: [string, string];  // Gradient [from, to] for icon background
  iconTextColor?: string;        // Icon foreground color (default: white)

  // ── Window defaults ───────────────────────────────────────────────────
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  minSize?: { width: number; height: number };

  // ── Launch behavior ───────────────────────────────────────────────────
  launchMode?: 'single' | 'multi'; // 'single': only one window; 'multi': multiple allowed
  mobileFullscreen?: boolean;      // On iOS/Android themes, always open fullscreen

  // ── Context menu (right-click on dock icon) ───────────────────────────
  contextMenu?: ContextMenuAction[];

  // ── macOS-style menu bar ──────────────────────────────────────────────
  hasMenuBar?: boolean;
  menuBarMenus?: MenuBarMenu[];  // Static menu bar declarations

  // ── Status bar ────────────────────────────────────────────────────────
  hasStatusBar?: boolean;

  // ── System Settings integration ───────────────────────────────────────
  appSettings?: string;  // Key in AppSettingsRegistry → renders panel in System Settings

  // ── Widgets ───────────────────────────────────────────────────────────
  widgets?: Omit<WidgetDefinition, 'appId'>[];

  // ── Localization ──────────────────────────────────────────────────────
  locale?: AppLocale;  // App-level locale dictionary (see Language System below)

  // ── Other ─────────────────────────────────────────────────────────────
  category?: string;    // Logical group: 'system' | 'developer' | 'productivity' | etc.
  disabled?: boolean;   // Hide app from UI
  badge?: string | number;  // Dock badge text/number
  iframeUrl?: string;   // Used by IframeApp component
  mdxSlug?: string;     // Used by MdxApp component
}
```

### Registering the Component

After declaring in `apps.config.ts`, add a lazy import in **`AppRegistry.tsx`**:

```ts
// src/components/apps/AppRegistry.tsx
const APP_COMPONENTS = {
  MyApp: lazy(() => import('./MyApp').then((m) => ({ default: m.MyApp }))),
};
```

The `component` field in `AppConfig` must match the key in this map.

---

## Language / i18n System

The system has **two tiers** of localization:

### Tier 1 — System Language

Controls **all shared UI**: Settings panels, sidebar labels, wallpaper context menu, menu bar, dock tooltips, etc.

**Where the setting lives**: `System Settings → General → Language & Region`  
**Where the state lives**: `store.language` (persisted to localStorage)  
**How to use it**:

```ts
import { useTranslation } from '@/hooks/useTranslation';

function MyComponent() {
  const { t, language } = useTranslation();
  return <p>{t.search}</p>;  // resolves to the current language
}
```

**Adding a translation key**:
1. Add the key + English value to the `en` object in `src/hooks/useTranslation.ts`
2. Add the translated value to every other language object (`vi`, `ja`, `ko`, `zh`, `th`)

**Adding a new system language**:
1. Add the language code to `SupportedLang` in `src/types/locale.ts`
2. Add the language code to the `language` union in `src/store/desktop-slice.ts`
3. Add a complete translation object to `src/hooks/useTranslation.ts`
4. Add the language label/flag to `LANG_LABELS`/`LANG_FLAGS` in `src/types/locale.ts`
5. Add the `<option>` in `SettingsGeneral.tsx`

---

### Tier 2 — App Language (per-app locale)

Each app can declare its own locale dictionary, independently of the system language.

**Key rules**:
- The **system language** always determines which locale to load (no per-app language override UI).
- If the app doesn't have the current system language, it falls back to `en` automatically.
- If an app only supports one language (e.g. just `en`), it always shows in English regardless of system language — this is the expected behavior.

**How to declare an app locale in `apps.config.ts`**:

```ts
// src/config/apps.config.ts
{
  id: 'my-app',
  locale: {
    en: { title: 'My App', search: 'Search...' },
    vi: { title: 'Ứng dụng của tôi', search: 'Tìm kiếm...' },
    ja: { title: 'マイアプリ', search: '検索...' },
    // Other languages are optional; missing ones fall back to 'en'
  },
}
```

**How to use in the app component**:

```ts
import { useAppTranslation } from '@/hooks/useAppTranslation';

// Option A: inline locale (defined directly in component)
const MY_LOCALE = {
  en: { search: 'Search', newItem: 'New Item' },
  vi: { search: 'Tìm kiếm', newItem: 'Mục mới' },
} as const;

function MyApp({ appId }: { appId: string }) {
  const { t, lang, isSystemLang } = useAppTranslation(appId, MY_LOCALE);
  return <input placeholder={t.search} />;
}

// Option B: locale from AppConfig.locale (no inline needed)
function MyApp({ appId }: { appId: string }) {
  const { t } = useAppTranslation(appId);
  return <input placeholder={t.search} />;
}
```

**`useAppTranslation` return value**:

| Field | Type | Description |
|-------|------|-------------|
| `t` | `T` | Resolved translation object for current language |
| `lang` | `SupportedLang` | Language actually used (`'en'` if falling back) |
| `isSystemLang` | `boolean` | `true` if the resolved lang matches system lang |

---

### Supported Languages

| Code | Name | Flag |
|------|------|------|
| `en` | English (US) | 🇺🇸 |
| `vi` | Tiếng Việt | 🇻🇳 |
| `ja` | 日本語 | 🇯🇵 |
| `ko` | 한국어 | 🇰🇷 |
| `zh` | 简体中文 | 🇨🇳 |
| `th` | ไทย | 🇹🇭 |

---

## Widget System

Widgets are declared in `AppConfig.widgets` as an array of `WidgetDefinition` (without `appId` — it's auto-filled):

```ts
// src/config/apps.config.ts
{
  id: 'clock',
  widgets: [
    {
      id: 'clock-analog',         // unique widget id
      name: 'Analog Clock',       // display name
      description: 'Classic analog clock face',
      sizes: ['small'],           // 'small' | 'medium' | 'large'
      componentKey: 'ClockWidget', // key in widgets registry
    },
  ],
}
```

The widget component must be registered in the widget component registry (see `src/config/widgets.config.ts`).

---

## System Settings Integration

Apps can add their own panel inside System Settings by:

1. Setting `appSettings: 'MySettingsKey'` in `AppConfig`
2. Creating a component at `src/components/apps/settings/MySettings.tsx`
3. Registering it in `AppSettingsRegistry.tsx`:
   ```ts
   const APP_SETTINGS_COMPONENTS = {
     MySettingsKey: lazy(() => import('./MySettings').then(m => ({ default: m.MySettings }))),
   };
   ```

The panel will appear under the **Applications** section in the System Settings sidebar.

**Header is automatic**: The `SettingsContent` wrapper in `Settings.tsx` automatically renders the app icon, name, and description at the top of the panel — you don't need to add a title in your panel component.

---

## Store Architecture

The root store (`src/store/index.ts`) is built with **Zustand + Immer + Persist**.

| Slice | State |
|-------|-------|
| `desktop-slice` | `wallpaperId`, `iconLayout`, `dockAppIds`, `language`, `useStacks`, `stackGroupBy` |
| `app-slice` | `apps` (loaded from config), open windows, focus state |
| `widget-slice` | active widgets on desktop |
| `notification-slice` | notification queue |
| `vfs-slice` | in-memory virtual file system (used by Finder, Notes, Terminal) |

All state is persisted to `localStorage` under the key `desktop-layout-v1` (except ephemeral window positions).

---

## Adding a New App — Step-by-Step

1. **Declare in `apps.config.ts`**
   ```ts
   { id: 'my-app', name: 'My App', icon: 'lucide:Star', component: 'MyApp', ... }
   ```

2. **Create the component** at `src/components/apps/MyApp.tsx`
   ```ts
   export function MyApp({ appId, windowId }: AppContentProps) { ... }
   ```

3. **Register in `AppRegistry.tsx`**
   ```ts
   MyApp: lazy(() => import('./MyApp').then(m => ({ default: m.MyApp }))),
   ```

4. **Add locale** (optional but recommended)
   ```ts
   // In apps.config.ts
   locale: { en: { ... }, vi: { ... } }
   // In MyApp.tsx
   const { t } = useAppTranslation(appId, MY_INLINE_LOCALE);
   ```

5. **Add widgets** (optional): declare in `AppConfig.widgets` + register in widget registry.

6. **Add settings panel** (optional): set `appSettings: 'MyAppSettings'`, create panel, register in `AppSettingsRegistry.tsx`.

---

## Adding a New Language

1. Add code to `SupportedLang` union in `src/types/locale.ts`
2. Add `language` to the union in `src/store/desktop-slice.ts`
3. Add a complete translation object to `src/hooks/useTranslation.ts` (copy from `en` and translate all values)
4. Add `LANG_LABELS` and `LANG_FLAGS` entries in `src/types/locale.ts`
5. The language automatically appears in `Settings → General → Language & Region` dropdown
