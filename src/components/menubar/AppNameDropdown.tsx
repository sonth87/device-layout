"use client";

import { useRef, useCallback } from "react";
import { useStore } from "@/store";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import type { AppConfig } from "@/types/app";
import { DropdownPanel } from "./DropdownPanel";
import { MenuItem, MenuSeparator, useMenuBtnClass, menuBarButtonClass } from "./MenuItems";

interface AppNameDropdownProps {
  appConfig: AppConfig | null;
  appId: string | null;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export function AppNameDropdown({
  appConfig,
  appId,
  activeId,
  setActiveId,
}: AppNameDropdownProps) {
  const open = activeId === "app-name";
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? "app-name" : null);
    },
    [open, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeWindow = useStore((s) => s.closeWindow);
  const { t, getAppName } = useTranslation();

  const appName = appConfig
    ? getAppName(appConfig.id, appConfig.name)
    : t.appNameFinder;
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const dispatchAction = (action: string) => {
    if (!appId) return;
    window.dispatchEvent(
      new CustomEvent("app:menu:action", { detail: { appId, action } }),
    );
  };

  const handleQuit = () => {
    setOpen(false);
    if (!appId) return;
    const { windows } = useStore.getState();
    const appWindows = Object.values(windows).filter((w) => w.appId === appId);
    appWindows.forEach((w) => closeWindow(w.id));
  };

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={(e) => {
          if (e.button !== 0) return;
          setOpen((o) => !o);
        }}
        onMouseEnter={() => {
          if (activeId !== null) setActiveId("app-name");
        }}
        className={cn(
          menuBarButtonClass,
          "font-semibold",
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        <span className="text-[13px] font-semibold">{appName}</span>
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={208}
      >
        <MenuItem
          label={`${t.aboutApp} ${appName}`}
          onClick={() => {
            setOpen(false);
            dispatchAction("about");
          }}
          disabled={!appId}
        />
        <MenuSeparator />
        <MenuItem label={t.services} disabled />
        <MenuSeparator />
        <MenuItem label={`${t.hide} ${appName}`} shortcut="⌘H" disabled />
        <MenuItem label={t.hideOthers} shortcut="⌥⌘H" disabled />
        <MenuItem label={t.showAll} disabled />
        <MenuSeparator />
        <MenuItem
          label={`${t.quit} ${appName}`}
          shortcut="⌘Q"
          onClick={handleQuit}
        />
      </DropdownPanel>
    </>
  );
}
