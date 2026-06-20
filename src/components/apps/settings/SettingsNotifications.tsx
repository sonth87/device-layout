'use client';

import { useTranslation } from '@/hooks/useTranslation';

export function SettingsNotifications() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      <div className="rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 flex flex-col items-center justify-center text-center gap-2">
        <svg className="w-10 h-10 text-black/20 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <p className="text-sm font-medium text-black/40 dark:text-white/40">
          {t.notificationsComingSoon}
        </p>
      </div>
    </div>
  );
}
