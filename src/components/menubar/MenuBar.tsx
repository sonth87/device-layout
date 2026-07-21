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

import { useSimpleModeFeatures } from "@/contexts/SimpleModeContext";

export function MenuBar({
  onSpotlight,
  isSimpleMode = false,
  forceDark = false,
}: {
  onSpotlight?: () => void;
  isSimpleMode?: boolean;
  forceDark?: boolean;
} = {}) {
  const features = useSimpleModeFeatures();
  const activeAppId = useStore((s) => s.activeAppId);
  const apps = useStore((s) => s.apps);
  const activeApp = activeAppId ? apps[activeAppId] : null;

  const showAppleMenu = features.menuBar.appleMenu;
  const showAppNameMenu = features.menuBar.appNameMenu || Boolean(activeApp);
  const menus: MenuBarMenu[] =
    activeApp?.menuBarMenus ?? (features.isSimpleModeActive ? [] : DEFAULT_MENU_BAR_MENUS);
  const wallpaperTextTheme = useStore((s) => s.wallpaperTextTheme);

  const effectiveTheme = forceDark ? "dark" : wallpaperTextTheme;
  const iconClass =
    effectiveTheme === "light"
      ? "text-black/70 hover:bg-black/10"
      : "text-white/80 hover:bg-white/10";
  const iconBtnClass = cn(menuBarButtonClass, "px-2", iconClass);

  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  if (!features.menuBar.enabled) {
    return null;
  }

  const hasRightIcons =
    features.menuBar.spotlight || features.menuBar.controlCenter || features.menuBar.clock;

  return (
    <MenuBarThemeCtx.Provider value={effectiveTheme}>
      <LiquidGlass
        variant="menubar"
        forceGlass={forceDark ? false : undefined}
        className={forceDark ? "border-black/70 bg-[#111318] shadow-none" : undefined}
      >
        <div
          data-menubar="true"
          data-fullscreen-menubar={forceDark ? "true" : undefined}
          className="flex h-(--menubar-height) w-full items-center px-2"
        >
          {/* Left: Apple + app menus */}
          <div className="flex shrink-0 items-center gap-0.5">
            {/* Apple menu */}
            {showAppleMenu && (
              <AppleMenuDropdown
                activeId={activeDropdownId}
                setActiveId={setActiveDropdownId}
              />
            )}
            {/* Active app name dropdown */}
            {showAppNameMenu && (
              <AppNameDropdown
                appConfig={activeApp}
                appId={activeAppId}
                activeId={activeDropdownId}
                setActiveId={setActiveDropdownId}
              />
            )}
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

          {/* Right: system icons. */}
          {hasRightIcons && (
            <div className="flex shrink-0 items-center gap-0.5">
              {features.menuBar.spotlight && (
                <button
                  onClick={onSpotlight}
                  className={iconBtnClass}
                  title="Spotlight Search (⌘Space)"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              )}

              {features.menuBar.controlCenter && (
                <>
                  <button className={iconBtnClass}>
                    <Wifi className="w-3.5 h-3.5" />
                  </button>
                  <button className={iconBtnClass}>
                    <Battery className="w-3.5 h-3.5" />
                  </button>
                  <ControlCenter forceDark={forceDark} />
                </>
              )}

              {features.menuBar.clock && (
                <div className="flex h-6 items-center rounded-md px-2">
                  <MenuBarClock forceDark={forceDark} />
                </div>
              )}
            </div>
          )}
        </div>
      </LiquidGlass>
    </MenuBarThemeCtx.Provider>
  );
}

// Re-export subcomponents/helpers for other parts of the application (e.g. WindowMenuBar, MobileMenuSheet)
export { MenuDropdown } from "./MenuDropdown";
export { getMenuLabel, getMenuItemLabel } from "./MenuItems";
