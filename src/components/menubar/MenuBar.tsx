"use client";

import { useState } from "react";
import { Wifi, Battery, Search } from "lucide-react";
import { useStore } from "@/store";
import { MenuBarClock } from "./MenuBarClock";
import { ControlCenter } from "./ControlCenter";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";
import { DEFAULT_MENU_BAR_MENUS } from "@/config/apps.config";
import { cn } from "@/lib/utils";
import type { MenuBarMenu } from "@/types/app";

import { MenuBarThemeCtx, menuBarButtonClass } from "./MenuItems";
import { AppleMenuDropdown } from "./AppleMenuDropdown";
import { AppNameDropdown } from "./AppNameDropdown";
import { MenuDropdown } from "./MenuDropdown";

export function MenuBar({ onSpotlight }: { onSpotlight?: () => void } = {}) {
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeApp = activeAppId ? apps[activeAppId] : null;
  const menus: MenuBarMenu[] =
    activeApp?.menuBarMenus ?? DEFAULT_MENU_BAR_MENUS;
  const wallpaperTextTheme = useStore((s) => s.wallpaperTextTheme);

  // Build text / hover classes that adapt to wallpaper luminance rather than
  // the system color scheme, so dark text is used on bright wallpapers and
  // vice versa, regardless of Light/Dark Mode.
  const iconClass =
    wallpaperTextTheme === "light"
      ? "text-black/70 hover:bg-black/10"
      : "text-white/80 hover:bg-white/10";
  const iconBtnClass = cn(menuBarButtonClass, "px-2", iconClass);

  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  return (
    <MenuBarThemeCtx.Provider value={wallpaperTextTheme}>
      <LiquidGlass variant="menubar">
        <div
          data-menubar="true"
          className="flex h-(--menubar-height) w-full items-center px-2"
        >
          {/* Left: Apple + app menus */}
          <div className="flex shrink-0 items-center gap-0.5">
            {/* Apple menu */}
            <AppleMenuDropdown
              activeId={activeDropdownId}
              setActiveId={setActiveDropdownId}
            />
            {/* Active app name dropdown */}
            <AppNameDropdown
              appConfig={activeApp}
              appId={activeAppId}
              activeId={activeDropdownId}
              setActiveId={setActiveDropdownId}
            />
            {/* App menu dropdowns */}
            {menus.map((menu) => (
              <MenuDropdown
                key={menu.label}
                label={menu.label}
                items={menu.items}
                appId={activeAppId}
                activeId={activeDropdownId}
                setActiveId={setActiveDropdownId}
              />
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right: system icons */}
          <div className="flex shrink-0 items-center gap-0.5">
            <button
              onClick={onSpotlight}
              className={iconBtnClass}
              title="Spotlight Search (⌘Space)"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <button className={iconBtnClass}>
              <Wifi className="w-3.5 h-3.5" />
            </button>
            <button className={iconBtnClass}>
              <Battery className="w-3.5 h-3.5" />
            </button>
            <ControlCenter />
            <div className="flex h-6 items-center rounded-md px-2">
              <MenuBarClock />
            </div>
          </div>
        </div>
      </LiquidGlass>
    </MenuBarThemeCtx.Provider>
  );
}

// Re-export subcomponents/helpers for other parts of the application (e.g. WindowMenuBar, MobileMenuSheet)
export { MenuDropdown } from "./MenuDropdown";
export { getMenuLabel, getMenuItemLabel } from "./MenuItems";
