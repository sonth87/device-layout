"use client";

import { FloatingWindow } from "@/components/shared/FloatingWindow";

interface PersonalAboutDialogProps {
  onClose: () => void;
}

export function PersonalAboutDialog({ onClose }: PersonalAboutDialogProps) {
  return (
    <FloatingWindow onClose={onClose} width={320}>
      <div className="flex flex-col items-center px-8 pt-6 pb-7 gap-2">
        <div className="w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg select-none">
          S
        </div>
        <div className="text-[17px] font-bold text-black/90 dark:text-white/90 select-none">
          Skyline
        </div>
        <div className="text-[13px] text-black/55 dark:text-white/55 select-none">
          sonth87@gmail.com
        </div>
        <div className="w-full h-px bg-black/10 dark:bg-white/10 my-2" />
        <div className="text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed select-none">
          macOS Desktop Layout
          <br />
          Version 1.0 · Built with Next.js & React
        </div>
        <a
          href="https://github.com/sonth87/device-layout"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1 pointer-events-auto select-none"
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
        <div className="text-[11px] text-black/35 dark:text-white/35 text-center mt-1 select-none">
          © 2026 Skyline. All rights reserved.
        </div>
      </div>
    </FloatingWindow>
  );
}
