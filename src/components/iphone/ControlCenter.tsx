'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wifi, Bluetooth, Plane, Moon, Volume2, Sun, Camera,
  Flashlight, Timer, Sliders,
} from 'lucide-react';
import { useStore } from '@/store';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { cn } from '@/lib/utils';

interface ControlCenterProps {
  open: boolean;
  onClose: () => void;
}

interface Toggle {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

export function IPhoneControlCenter({ open, onClose }: ControlCenterProps) {
  const colorScheme = useStore((s) => s.colorScheme);
  const setColorScheme = useStore((s) => s.setColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);
  const setGlassEnabled = useStore((s) => s.setGlassEnabled);

  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(65);
  const [toggles, setToggles] = useState<Toggle[]>([
    { id: 'wifi',      label: 'Wi-Fi',     icon: <Wifi className="w-5 h-5" />,       active: true  },
    { id: 'bluetooth', label: 'Bluetooth', icon: <Bluetooth className="w-5 h-5" />,  active: true  },
    { id: 'airplane',  label: 'Airplane',  icon: <Plane className="w-5 h-5" />,      active: false },
    { id: 'focus',     label: 'Focus',     icon: <Moon className="w-5 h-5" />,       active: false },
  ]);

  const flipToggle = (id: string) =>
    setToggles((prev) => prev.map((t) => t.id === id ? { ...t, active: !t.active } : t));

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-9985"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 38 }}
            className="absolute top-0 right-0 z-9986 p-4 pt-10 w-80"
          >
            <LiquidGlass variant="panel" className="p-4">
              <div className="space-y-3.5">
                {/* Connectivity toggles grid */}
                <div className="grid grid-cols-2 gap-2">
                  {toggles.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => flipToggle(t.id)}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-2xl transition-colors',
                        t.active ? 'bg-white/90 dark:bg-white/20' : 'bg-white/20 dark:bg-white/10'
                      )}
                    >
                      <span className={t.active ? 'text-blue-500' : 'text-white/70'}>{t.icon}</span>
                      <span className={cn('text-[12px] font-semibold', t.active ? 'text-black dark:text-white' : 'text-white/70')}>{t.label}</span>
                    </button>
                  ))}
                </div>

                {/* Brightness */}
                <div className="flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5">
                  <Sun className="w-4 h-4 text-white/70 shrink-0" />
                  <input type="range" min={0} max={100} value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="flex-1 accent-white" />
                </div>

                {/* Volume */}
                <div className="flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5">
                  <Volume2 className="w-4 h-4 text-white/70 shrink-0" />
                  <input type="range" min={0} max={100} value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 accent-white" />
                </div>

                {/* Quick actions 2×2 */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { icon: <Camera className="w-5 h-5" />, label: 'Camera' },
                    { icon: <Flashlight className="w-5 h-5" />, label: 'Flash' },
                    { icon: <Timer className="w-5 h-5" />, label: 'Timer' },
                    { icon: <Sliders className="w-5 h-5" />, label: 'Adjust' },
                  ].map((a) => (
                    <button key={a.label} className="flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/15 hover:bg-white/25 transition-colors">
                      <span className="text-white">{a.icon}</span>
                      <span className="text-[9px] text-white/60">{a.label}</span>
                    </button>
                  ))}
                </div>

                {/* Dark mode toggle */}
                <button
                  onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
                  className="w-full flex items-center justify-between bg-white/15 rounded-2xl px-3 py-2.5"
                >
                  <span className="text-[12px] text-white font-medium">Dark Mode</span>
                  <div className={cn('w-9 h-5 rounded-full transition-colors', colorScheme === 'dark' ? 'bg-blue-500' : 'bg-white/30')}>
                    <div className={cn('w-4 h-4 rounded-full bg-white m-0.5 transition-transform shadow', colorScheme === 'dark' ? 'translate-x-4' : 'translate-x-0')} />
                  </div>
                </button>
              </div>
            </LiquidGlass>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
