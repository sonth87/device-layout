'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wifi, Bluetooth, Plane, Moon, Volume2, Sun, Battery,
  RotateCcw, Flashlight, Bell, BellOff, Eye, Cast,
  ChevronDown, X,
} from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';

interface QuickSettingsProps {
  open: boolean;
  onClose: () => void;
}

interface QSTile {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

export function AndroidQuickSettings({ open, onClose }: QuickSettingsProps) {
  const notifications = useStore((s) => s.notifications);
  const dismissNotification = useStore((s) => s.dismissNotification);
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);

  const [expanded, setExpanded] = useState(false);
  const [brightness, setBrightness] = useState(70);
  const [tiles, setTiles] = useState<QSTile[]>([
    { id: 'wifi',       label: 'Wi-Fi',       icon: <Wifi className="w-4 h-4" />,        active: true  },
    { id: 'bluetooth',  label: 'Bluetooth',   icon: <Bluetooth className="w-4 h-4" />,   active: false },
    { id: 'dnd',        label: 'Do Not Dist', icon: <BellOff className="w-4 h-4" />,     active: false },
    { id: 'airplane',   label: 'Airplane',    icon: <Plane className="w-4 h-4" />,       active: false },
    { id: 'rotate',     label: 'Auto Rotate', icon: <RotateCcw className="w-4 h-4" />,   active: true  },
    { id: 'flashlight', label: 'Flashlight',  icon: <Flashlight className="w-4 h-4" />,  active: false },
    { id: 'battery',    label: 'Battery Sav', icon: <Battery className="w-4 h-4" />,     active: false },
    { id: 'cast',       label: 'Cast',        icon: <Cast className="w-4 h-4" />,        active: false },
    { id: 'dark',       label: 'Dark Mode',   icon: <Moon className="w-4 h-4" />,        active: colorScheme === 'dark' },
    { id: 'eye',        label: 'Eye Comfort', icon: <Eye className="w-4 h-4" />,         active: false },
    { id: 'bell',       label: 'Notifications',icon: <Bell className="w-4 h-4" />,       active: true  },
    { id: 'data',       label: 'Mobile Data', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 1h4v22H1zm9 8h4v14h-4zm9-8h4v22h-4z"/></svg>, active: true },
  ]);

  const flipTile = (id: string) => {
    if (id === 'dark') {
      setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    }
    setTiles((prev) => prev.map((t) => t.id === id ? { ...t, active: !t.active } : t));
  };

  const unreadNotifs = notifications.filter((n) => !n.read);
  const visibleTiles = expanded ? tiles : tiles.slice(0, 6);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9980]" onClick={onClose} />

          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            className="fixed top-0 inset-x-0 z-[9981] bg-neutral-900/97 backdrop-blur-3xl rounded-b-3xl pb-4 pt-10"
          >
            {/* Close + expand */}
            <div className="flex items-center justify-between px-4 pb-2">
              <button onClick={onClose} className="p-1.5 rounded-full bg-white/10">
                <X className="w-4 h-4 text-white/70" />
              </button>
              <button
                onClick={() => setExpanded((e) => !e)}
                className="p-1.5 rounded-full bg-white/10"
              >
                <ChevronDown className={cn('w-4 h-4 text-white/70 transition-transform', expanded ? 'rotate-180' : '')} />
              </button>
            </div>

            {/* Brightness */}
            <div className="flex items-center gap-3 px-4 py-2">
              <Sun className="w-4 h-4 text-white/60 shrink-0" />
              <input type="range" min={0} max={100} value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="flex-1 h-1 rounded-full accent-teal-400" />
            </div>

            {/* Tiles */}
            <div className="grid grid-cols-3 gap-2 px-4 pt-2">
              {visibleTiles.map((t) => (
                <button
                  key={t.id}
                  onClick={() => flipTile(t.id)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-colors text-left',
                    t.active ? 'bg-teal-500/30 border border-teal-400/40' : 'bg-white/8'
                  )}
                >
                  <span className={t.active ? 'text-teal-300' : 'text-white/50'}>{t.icon}</span>
                  <span className={cn('text-[10px] font-medium leading-tight', t.active ? 'text-white' : 'text-white/50')}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Notifications */}
            {unreadNotifs.length > 0 && (
              <div className="mt-3 px-4 space-y-2">
                <div className="h-px bg-white/10" />
                {unreadNotifs.slice(0, 3).map((n) => (
                  <div key={n.id} className="flex items-center gap-3 py-2 group">
                    <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{n.appName.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-white/90 font-medium">{n.title}</p>
                      <p className="text-[10px] text-white/50 truncate">{n.body}</p>
                    </div>
                    <button
                      onClick={() => dismissNotification(n.id)}
                      className="text-white/20 hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
