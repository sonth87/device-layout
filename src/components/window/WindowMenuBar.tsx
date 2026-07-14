'use client';

import { useState } from 'react';
import { useStore } from '@/store';
import { useTranslation } from '@/hooks/useTranslation';
import { DEFAULT_MENU_BAR_MENUS } from '@/config/apps.config';
import { MenuDropdown } from '@/components/menubar/MenuBar';

interface WindowMenuBarProps {
  windowId: string;
}

/**
 * Per-window menu bar — Windows-mode (and iPad, which shares the same
 * windowed-app pipeline) equivalent of macOS's global MenuBar. Each window
 * shows its OWN app's menuBarMenus, independent of focus/activeAppId — this
 * matches real Windows behavior (every window keeps its own menu bar),
 * unlike macOS where the top menu bar swaps to whichever app is active.
 *
 * Reuses MenuDropdown (and its submenu-flyout logic) from MenuBar.tsx rather
 * than duplicating it — same items dispatch through the same
 * 'app:menu:action' CustomEvent, just always including this window's id so
 * useMenuAction(appId, handler, windowId) can filter per-window if needed.
 */
export function WindowMenuBar({ windowId }: WindowMenuBarProps) {
  const win = useStore((s) => s.windows[windowId]);
  const apps = useStore((s) => s.apps);
  const { t } = useTranslation();
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  if (!win) return null;

  const appConfig = apps[win.appId];
  const menus = appConfig?.menuBarMenus ?? DEFAULT_MENU_BAR_MENUS;

  return (
    <div
      id={`window-menubar-${windowId}`}
      className="flex items-center h-7 px-2 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-0.5"
    >
      {menus.map((menu) => (
        <MenuDropdown
          key={menu.label}
          label={menu.label}
          items={menu.items}
          appId={win.appId}
          windowId={win.id}
          activeId={activeDropdownId}
          setActiveId={setActiveDropdownId}
        />
      ))}
    </div>
  );
}
