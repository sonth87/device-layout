'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wifi, Bluetooth, Plane, Moon, Volume2, Sun, ChevronRight,
  Bell, Battery, Monitor
} from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';

interface SystemTrayProps {
  open: boolean;
  onClose: () => void;
}

interface QuickToggle {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

export function SystemTray({ open, onClose }: SystemTrayProps) {
  const notifications = useStore((s) => s.notifications);
  const dismissNotification = useStore((s) => s.dismissNotification);
  const unread = notifications.filter((n) => !n.read);

  const [toggles, setToggles] = useState<QuickToggle[]>([
    { id: 'wifi',      label: 'Wi-Fi',      icon: <Wifi className="w-4 h-4" />,       active: true  },
    { id: 'bluetooth', label: 'Bluetooth',  icon: <Bluetooth className="w-4 h-4" />,  active: true  },
    { id: 'airplane',  label: 'Airplane',   icon: <Plane className="w-4 h-4" />,      active: false },
    { id: 'focus',     label: 'Focus',      icon: <Moon className="w-4 h-4" />,       active: false },
    { id: 'battery',   label: 'Battery',    icon: <Battery className="w-4 h-4" />,    active: true  },
    { id: 'display',   label: 'Display',    icon: <Monitor className="w-4 h-4" />,    active: false },
  ]);

  const toggleItem = (id: string) => {
    setToggles((prev) => prev.map((t) => t.id === id ? { ...t, active: !t.active } : t));
  };

  // Mini calendar
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const monthName = now.toLocaleString('default', { month: 'long', year: 'numeric' });
  const days: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9970]" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 500, damping: 38 }}
            className="fixed z-[9971] bottom-12 right-4 w-[380px] bg-white/90 dark:bg-neutral-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden"
          >
            {/* Header: Date + Time */}
            <div className="px-5 pt-4 pb-3 border-b border-black/8 dark:border-white/8">
              <div className="text-3xl font-light text-black dark:text-white">
                <MenuBarClock />
              </div>
              <p className="text-[12px] text-black/50 dark:text-white/50 mt-0.5">{now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Quick toggles grid */}
            <div className="px-5 py-3 border-b border-black/8 dark:border-white/8">
              <div className="grid grid-cols-3 gap-2">
                {toggles.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => toggleItem(t.id)}
                    className={cn(
                      'flex flex-col items-start gap-1.5 p-3 rounded-xl transition-colors text-left border',
                      t.active 
                        ? 'bg-blue-500 dark:bg-blue-600 border-blue-500 dark:border-blue-600' 
                        : 'bg-black/5 dark:bg-white/8 border-black/5 dark:border-white/5 hover:bg-black/8 dark:hover:bg-white/12'
                    )}
                  >
                    <div className={cn('w-6 h-6 flex items-center justify-center', t.active ? 'text-white' : 'text-black/60 dark:text-white/60')}>{t.icon}</div>
                    <span className={cn('text-[10px] font-medium', t.active ? 'text-white' : 'text-black/60 dark:text-white/50')}>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Volume + Brightness */}
            <div className="px-5 py-3 border-b border-black/8 dark:border-white/8 space-y-2.5">
              <SliderRow icon={<Volume2 className="w-3.5 h-3.5" />} defaultValue={75} />
              <SliderRow icon={<Sun className="w-3.5 h-3.5" />} defaultValue={80} />
            </div>

            {/* Calendar */}
            <div className="px-5 py-3 border-b border-black/8 dark:border-white/8">
              <p className="text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2">{monthName}</p>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {['S','M','T','W','T','F','S'].map((d, i) => (
                  <div key={i} className="text-[9px] text-black/40 dark:text-white/30 pb-1">{d}</div>
                ))}
                {days.map((d, i) => (
                  <div key={i} className={cn(
                    'text-[11px] w-7 h-7 flex items-center justify-center rounded-full mx-auto',
                    d === now.getDate() 
                      ? 'bg-blue-500 text-white font-semibold' 
                      : d 
                        ? 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 cursor-default' 
                        : ''
                  )}>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            {unread.length > 0 && (
              <div className="px-5 py-3 max-h-36 overflow-y-auto">
                <p className="text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2">Notifications</p>
                {unread.slice(0, 4).map((n) => (
                  <div key={n.id} className="flex items-start gap-2.5 py-1.5 group">
                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center shrink-0">
                      <Bell className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-black/80 dark:text-white/90 font-medium truncate">{n.title}</p>
                      <p className="text-[10px] text-black/40 dark:text-white/40 truncate">{n.body}</p>
                    </div>
                    <button onClick={() => dismissNotification(n.id)}
                      className="text-black/20 dark:text-white/20 hover:text-black/60 dark:hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-3 h-3" />
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

function SliderRow({ icon, defaultValue }: { icon: React.ReactNode; defaultValue: number }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-black/50 dark:text-white/50 w-4 shrink-0">{icon}</span>
      <input
        type="range" min={0} max={100} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="flex-1 h-1 rounded-full accent-blue-500"
      />
      <span className="text-[10px] text-black/40 dark:text-white/40 w-7 text-right">{value}%</span>
    </div>
  );
}
