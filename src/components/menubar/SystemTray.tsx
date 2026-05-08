'use client';

import { Wifi, Battery, Volume2 } from 'lucide-react';
import { MenuBarClock } from './MenuBarClock';
import { ControlCenter } from './ControlCenter';

/** Windows 11 system tray — right side of the taskbar */
export function SystemTray() {
  return (
    <div className="absolute right-3 inset-y-0 flex items-center gap-1">
      <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
        <Wifi className="w-3.5 h-3.5 text-white" />
      </button>
      <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
        <Volume2 className="w-3.5 h-3.5 text-white" />
      </button>
      <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
        <Battery className="w-3.5 h-3.5 text-white" />
      </button>
      <ControlCenter />
      <div className="pl-1 text-white">
        <MenuBarClock />
      </div>
    </div>
  );
}
