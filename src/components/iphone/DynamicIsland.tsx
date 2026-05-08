'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';

interface DynamicIslandProps {
  onClick?: () => void;
}

type IslandState = 'compact' | 'expanded';

export function DynamicIsland({ onClick }: DynamicIslandProps) {
  const [state, setState] = useState<IslandState>('compact');
  const notifications = useStore((s) => s.notifications);
  const latestUnread = notifications.find((n) => !n.read);

  const toggle = () => {
    setState((s) => s === 'compact' ? 'expanded' : 'compact');
    onClick?.();
  };

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 cursor-pointer" onClick={toggle}>
      <motion.div
        animate={state === 'expanded'
          ? { width: 240, height: 72, borderRadius: 24 }
          : { width: 120, height: 34, borderRadius: 17 }
        }
        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
        className="bg-black overflow-hidden flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {state === 'compact' ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 px-3"
            >
              {/* Camera dot */}
              <div className="w-2 h-2 rounded-full bg-neutral-700" />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-3 px-4 w-full"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">
                  {latestUnread?.appName.charAt(0) ?? '!'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[10px] font-semibold">{latestUnread?.appName ?? 'Notification'}</p>
                <p className="text-white/70 text-[10px] truncate">{latestUnread?.title ?? 'No new notifications'}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
