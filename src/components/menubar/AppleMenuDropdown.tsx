"use client";

import { useState, useRef, useCallback } from "react";
import { useStore } from "@/store";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { DropdownPanel } from "./DropdownPanel";
import { MenuItem, MenuSeparator, useMenuBtnClass, menuBarButtonClass } from "./MenuItems";
import { PersonalAboutDialog } from "./PersonalAboutDialog";
import { useCustomOSIcon } from "@/contexts/CustomOSIconContext";

interface AppleMenuDropdownProps {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export function AppleMenuDropdown({ activeId, setActiveId }: AppleMenuDropdownProps) {
  const { macOSAppleIcon } = useCustomOSIcon();
  const open = activeId === "apple";
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? "apple" : null);
    },
    [open, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const [showAbout, setShowAbout] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const apps = useStore((s) => s.apps);
  const launchApp = useStore((s) => s.launchApp);
  const { t } = useTranslation();
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleSystemSettings = () => {
    setOpen(false);
    const settingsApp = apps["settings"];
    if (settingsApp) launchApp(settingsApp);
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
          if (activeId !== null) setActiveId("apple");
        }}
        className={cn(
          menuBarButtonClass,
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        {macOSAppleIcon ? (
          <span className="flex items-center justify-center h-4 w-auto max-h-4 shrink-0 select-none [&>svg]:h-full [&>svg]:w-auto [&>img]:h-full [&>img]:w-auto">
            {macOSAppleIcon}
          </span>
        ) : (
          <span className="text-2xl leading-none font-sans">&#xf8ff;</span>
        )}
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={220}
      >
        <MenuItem
          label={t.aboutThisMac}
          onClick={() => {
            setOpen(false);
            setShowAbout(true);
          }}
        />
        <MenuSeparator />
        <MenuItem label={t.systemSettings} onClick={handleSystemSettings} />
      </DropdownPanel>

      {showAbout && <PersonalAboutDialog onClose={() => setShowAbout(false)} />}
    </>
  );
}
