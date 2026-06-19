'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useStore } from '@/store';
import { WidgetCard } from './WidgetCard';

/**
 * Renders all desktop widget instances on top of the wallpaper,
 * below icons and windows.
 */
export function WidgetLayer() {
  const instances = useStore((s) => s.widgetInstances);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      <AnimatePresence>
        {instances.map((inst) => (
          <motion.div
            key={inst.instanceId}
            className="pointer-events-auto"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{ position: 'absolute', left: 0, top: 0 }}
          >
            <WidgetCard instance={inst} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
