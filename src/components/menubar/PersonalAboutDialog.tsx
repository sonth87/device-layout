"use client";

import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface PersonalAboutDialogProps {
  onClose: () => void;
}

export function PersonalAboutDialog({ onClose }: PersonalAboutDialogProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const dragStart = useRef<{
    mx: number;
    my: number;
    ox: number;
    oy: number;
  } | null>(null);

  const onTitleBarPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest("button")) return;
      e.preventDefault();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragStart.current = {
        mx: e.clientX,
        my: e.clientY,
        ox: offset.x,
        oy: offset.y,
      };
    },
    [offset],
  );

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
      y: dragStart.current.oy + (e.clientY - dragStart.current.my),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 99999 }}
    >
      <div className="absolute inset-0 pointer-events-auto" onClick={onClose} />
      <div
        className="relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-80 overflow-hidden pointer-events-auto"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Title bar */}
        <div
          className="w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5"
          onPointerDown={onTitleBarPointerDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div
            className="flex items-center gap-2"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer"
              style={{ backgroundColor: "#ff5f57" }}
            >
              {hovering && (
                <X className="w-2 h-2 text-red-900/80" strokeWidth={3} />
              )}
            </button>
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: "#d1d1d1" }}
            />
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: "#d1d1d1" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-8 pt-6 pb-7 gap-2 select-none">
          <div className="w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            S
          </div>
          <div className="text-[17px] font-bold text-black/90 dark:text-white/90">
            Skyline
          </div>
          <div className="text-[13px] text-black/55 dark:text-white/55">
            sonth87@gmail.com
          </div>
          <div className="w-full h-px bg-black/10 dark:bg-white/10 my-2" />
          <div className="text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed">
            macOS Desktop Layout
            <br />
            Version 1.0 · Built with Next.js & React
          </div>
          <a
            href="https://github.com/sonth87/device-layout"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1 pointer-events-auto"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            sonth87/device-layout
          </a>
          <div className="text-[11px] text-black/35 dark:text-white/35 text-center mt-1">
            © 2024 Skyline. All rights reserved.
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
