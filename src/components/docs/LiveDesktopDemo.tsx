"use client";

import React from "react";
import { DeviceLayout } from "@/lib";
import type { AppConfig } from "@/types/app";

function SampleDemoApp({ windowId }: { appId: string; windowId: string }) {
  return (
    <div className="p-4 bg-slate-950 text-slate-100 h-full flex flex-col justify-between font-sans">
      <div>
        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live Simulator Container
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-3">
          This live preview is running directly inside the documentation page.
          Try dragging the window, resizing it, or interacting with the menu
          bar!
        </p>
      </div>
      <div className="text-xs bg-slate-900/90 p-2.5 rounded border border-slate-800/80 font-mono text-slate-300">
        Active Window: <span className="text-blue-400">{windowId}</span>
      </div>
    </div>
  );
}

const demoApps: AppConfig[] = [
  {
    id: "demo-app",
    name: "Interactive Demo",
    icon: "lucide:Sparkles",
    iconColor: ["#3B82F6", "#1D4ED8"],
    render: SampleDemoApp,
    defaultSize: { width: 460, height: 280 },
    hasMenuBar: true,
  },
];

export function LiveDesktopDemo() {
  return (
    <div className="my-6 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl h-[520px] relative bg-slate-950">
      <DeviceLayout
        colorScheme="dark"
        osTheme="macos"
        apps={demoApps}
        builtInApps
      />
    </div>
  );
}
