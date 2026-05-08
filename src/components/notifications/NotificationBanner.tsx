'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import type { AppNotification } from '@/types/notification';

// Global event bus for new notification triggers
type BannerEvent = { notificationId: string };
const listeners = new Set<(e: BannerEvent) => void>();
export function emitNotification(notificationId: string) {
  listeners.forEach((fn) => fn({ notificationId }));
}

interface BannerProps {
  notification: AppNotification;
  onDismiss: () => void;
}

function Banner({ notification, onDismiss }: BannerProps) {
  const launchApp = useStore((s) => s.launchApp);
  const apps = useStore((s) => s.apps);
  const { osTheme } = useTheme();

  const isWindows = osTheme === 'windows';

  useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const handleClick = () => {
    const app = apps[notification.appId];
    if (app) launchApp(app);
    onDismiss();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: isWindows ? 20 : -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: isWindows ? 20 : -20, scale: 0.93, transition: { duration: 0.2 } }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
      className={cn(
        'flex items-start gap-3 w-80 p-3 cursor-pointer select-none',
        'bg-white/88 dark:bg-neutral-800/88 backdrop-blur-2xl',
        'border border-black/10 dark:border-white/10',
        'shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]',
        isWindows ? 'rounded-lg' : 'rounded-2xl',
      )}
      onClick={handleClick}
    >
      <div className="w-9 h-9 rounded-[20%] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-sm">
        <span className="text-white text-xs font-bold">{notification.appName.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-black/50 dark:text-white/40 uppercase tracking-wide leading-none mb-0.5">
          {notification.appName}
        </p>
        <p className="text-[13px] font-semibold text-black dark:text-white leading-snug truncate">
          {notification.title}
        </p>
        {notification.body && (
          <p className="text-[12px] text-black/60 dark:text-white/50 leading-snug line-clamp-2 mt-0.5">
            {notification.body}
          </p>
        )}
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onDismiss(); }}
        className="shrink-0 w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </motion.div>
  );
}

/**
 * NotificationBanner — mounts once at app root, listens for pushed notifications.
 * Position: top-right for macOS/iPad, bottom-right for Windows, top-center for iPhone.
 */
export function NotificationBanner() {
  const notifications = useStore((s) => s.notifications);
  const dismissNotification = useStore((s) => s.dismissNotification);
  const { osTheme } = useTheme();

  // Show the 3 most recent unread notifications
  const visible = notifications.filter((n) => !n.read).slice(0, 3);

  const dismiss = useCallback((id: string) => {
    dismissNotification(id);
  }, [dismissNotification]);

  const positionClass = osTheme === 'windows'
    ? 'bottom-14 right-4'
    : osTheme === 'iphone' || osTheme === 'android'
      ? 'top-12 inset-x-4'
      : 'top-8 right-4';

  return (
    <div className={cn('fixed z-[9999] flex flex-col gap-2 pointer-events-none', positionClass)}>
      <AnimatePresence mode="popLayout">
        {visible.map((n) => (
          <div key={n.id} className="pointer-events-auto">
            <Banner notification={n} onDismiss={() => dismiss(n.id)} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
