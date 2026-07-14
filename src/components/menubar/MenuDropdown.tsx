"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import type { MenuBarItem } from "@/types/app";
import { DropdownPanel } from "./DropdownPanel";
import { MenuItemRow, MenuSeparator, useMenuBtnClass, menuBarButtonClass, getMenuLabel } from "./MenuItems";

interface MenuDropdownProps {
  label: string;
  items: MenuBarItem[];
  appId: string | null;
  windowId?: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export function MenuDropdown({
  label,
  items,
  appId,
  windowId,
  activeId,
  setActiveId,
}: MenuDropdownProps) {
  const open = activeId === label;
  const setOpen = useCallback(
    (o: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof o === "function" ? o(open) : o;
      setActiveId(nextOpen ? label : null);
    },
    [open, label, setActiveId],
  );

  const btnClass = useMenuBtnClass();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const handleItemClick = (item: MenuBarItem) => {
    setOpen(false);
    if (item.action && appId) {
      window.dispatchEvent(
        new CustomEvent("app:menu:action", {
          detail: { appId, action: item.action, windowId },
        }),
      );
    }
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
          if (activeId !== null) setActiveId(label);
        }}
        className={cn(
          menuBarButtonClass,
          open ? "bg-accent-active text-white" : btnClass,
        )}
      >
        {getMenuLabel(label, t)}
      </button>

      <DropdownPanel
        anchorRef={buttonRef}
        open={open}
        onClose={handleClose}
        minWidth={192}
      >
        {items.map((item, i) =>
          item.separator ? (
            <MenuSeparator key={`sep-${i}`} />
          ) : (
            <MenuItemRow key={item.key} item={item} t={t} onSelect={handleItemClick} />
          ),
        )}
      </DropdownPanel>
    </>
  );
}
