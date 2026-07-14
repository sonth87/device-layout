"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";

interface DropdownPanelProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  minWidth?: number;
  children: React.ReactNode;
}

export function DropdownPanel({
  anchorRef,
  open,
  onClose,
  minWidth = 192,
  children,
}: DropdownPanelProps) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, left: rect.left });
  }, [open, anchorRef]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      // Don't close when clicking the trigger button or inside the panel
      if (anchorRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      onClose();
    };
    document.addEventListener("mousedown", handler, true);
    return () => document.removeEventListener("mousedown", handler, true);
  }, [open, onClose, anchorRef]);

  if (!open || !pos || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={panelRef}
      data-menu-portal="true"
      className="fixed z-[99999] outline-none"
      style={{ top: pos.top, left: pos.left, minWidth }}
    >
      <LiquidGlass variant="panel" className="py-1 px-1 w-full">
        {children}
      </LiquidGlass>
    </div>,
    document.body,
  );
}
