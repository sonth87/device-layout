'use client';

import { useState, useCallback } from 'react';
import { ChevronLeft, Settings2, Paintbrush, Image, LayoutGrid, Bell, type LucideIcon } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { SettingsGeneral } from './settings/SettingsGeneral';
import { SettingsAppearance } from './settings/SettingsAppearance';
import { SettingsWallpaper } from './settings/SettingsWallpaper';
import { SettingsDesktopDock } from './settings/SettingsDesktopDock';
import { SettingsNotifications } from './settings/SettingsNotifications';
import { AppSettingsPanel } from './settings/AppSettingsRegistry';
import type { AppContentProps } from './AppRegistry';
import { useRef } from 'react';

// ─── System settings sections ──────────────────────────────────────────────

type SystemSectionId = 'general' | 'appearance' | 'wallpaper' | 'desktop-dock' | 'notifications';

const SYSTEM_SECTIONS: {
  id: SystemSectionId;
  label: string;
  lucideIcon: LucideIcon;
  color: [string, string];
  component: () => React.ReactElement;
}[] = [
  {
    id: 'general',
    label: 'General',
    lucideIcon: Settings2,
    color: ['#636366', '#48484a'],
    component: SettingsGeneral,
  },
  {
    id: 'appearance',
    label: 'Appearance',
    lucideIcon: Paintbrush,
    color: ['#5e5ce6', '#3634a3'],
    component: SettingsAppearance,
  },
  {
    id: 'wallpaper',
    label: 'Wallpaper',
    lucideIcon: Image,
    color: ['#30d158', '#25a244'],
    component: SettingsWallpaper,
  },
  {
    id: 'desktop-dock',
    label: 'Desktop & Dock',
    lucideIcon: LayoutGrid,
    color: ['#0a84ff', '#0055d4'],
    component: SettingsDesktopDock,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    lucideIcon: Bell,
    color: ['#ff3b30', '#cc2323'],
    component: SettingsNotifications,
  },
];

// ─── Sidebar item ────────────────────────────────────────────────────────────

function SidebarItem({
  lucideIcon: Icon,
  iconColor,
  label,
  active,
  onClick,
  iconEl,
}: {
  lucideIcon?: LucideIcon;
  iconColor?: [string, string];
  label: string;
  active: boolean;
  onClick: () => void;
  iconEl?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-input)] text-left transition-colors',
        'focus:outline-none text-sm',
        active
          ? 'bg-red-500/90 text-white'
          : 'hover:bg-black/5 dark:hover:bg-white/8'
      )}
    >
      {iconEl ?? (
        Icon ? (
          <span
            className="w-7 h-7 rounded-[var(--radius-input)] flex items-center justify-center shrink-0"
            style={{ background: `linear-gradient(135deg, ${iconColor?.[0] ?? '#636366'}, ${iconColor?.[1] ?? '#48484a'})` }}
          >
            <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
          </span>
        ) : null
      )}
      <span className="truncate font-medium">{label}</span>
    </button>
  );
}

// ─── Main Settings component ─────────────────────────────────────────────────

export function Settings({ windowId }: AppContentProps) {
  const apps = useStore((s) => s.apps);
  void windowId;

  // Apps that declare app-specific settings panels
  const appSettingsList = Object.values(apps).filter(
    (a) => !a.disabled && a.appSettings
  );

  type ActiveId = SystemSectionId | `app:${string}`;
  const [activeId, setActiveId] = useState<ActiveId>('general');
  // Whether the sidebar is visible on narrow screens
  const [showContent, setShowContent] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerSize = useResizeObserver(containerRef);
  const isNarrow = containerSize.width > 0 && containerSize.width < 620;

  const select = useCallback((id: ActiveId) => {
    setActiveId(id);
    if (isNarrow) setShowContent(true);
  }, [isNarrow]);

  const goBack = () => setShowContent(false);

  // Resolve current content
  const renderContent = () => {
    if (activeId.startsWith('app:')) {
      const appId = activeId.slice(4);
      const app = apps[appId];
      if (!app?.appSettings) return null;
      return <AppSettingsPanel settingsKey={app.appSettings} />;
    }
    const section = SYSTEM_SECTIONS.find((s) => s.id === activeId);
    if (!section) return null;
    const Component = section.component;
    return <Component />;
  };

  const activeSectionLabel = (() => {
    if (activeId.startsWith('app:')) {
      const appId = activeId.slice(4);
      return apps[appId]?.name ?? '';
    }
    return SYSTEM_SECTIONS.find((s) => s.id === activeId)?.label ?? '';
  })();

  const sidebar = (
    <aside className="flex flex-col h-full overflow-y-auto bg-neutral-200/60 dark:bg-neutral-800/60 px-3 py-4 gap-1">
      {/* Search bar placeholder */}
      <div className="mb-3 mx-1">
        <label className="flex items-center gap-2 bg-black/8 dark:bg-white/8 rounded-[var(--radius-input)] px-3 py-1.5">
          <svg className="w-3.5 h-3.5 text-black/40 dark:text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent text-sm text-black/80 dark:text-white/80 placeholder:text-black/35 dark:placeholder:text-white/35 outline-none w-full"
          />
        </label>
      </div>

      {/* System group */}
      <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35">
        System
      </p>
      {SYSTEM_SECTIONS.map((section) => (
        <SidebarItem
          key={section.id}
          lucideIcon={section.lucideIcon}
          iconColor={section.color}
          label={section.label}
          active={activeId === section.id}
          onClick={() => select(section.id)}
        />
      ))}

      {/* Applications group */}
      {appSettingsList.length > 0 && (
        <>
          <p className="px-3 mt-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35">
            Applications
          </p>
          {appSettingsList.map((app) => (
            <SidebarItem
              key={app.id}
              label={app.name}
              active={activeId === `app:${app.id}`}
              onClick={() => select(`app:${app.id}` as ActiveId)}
              iconEl={
                <div className="w-7 h-7 shrink-0">
                  <AppIconImage appConfig={app} size={28} />
                </div>
              }
            />
          ))}
        </>
      )}
    </aside>
  );

  const content = (
    <main className="flex-1 min-w-0 overflow-y-auto bg-neutral-100 dark:bg-neutral-900 p-5 pb-8">
      {/* Mobile back button */}
      {isNarrow && (
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-blue-500 text-sm mb-4 -ml-1"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      )}

      {/* Section header */}
      <div className="mb-6 flex items-center gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{activeSectionLabel}</h1>
        </div>
      </div>

      {renderContent()}
    </main>
  );

  return (
    <div ref={containerRef} className="flex h-full overflow-hidden">
      {isNarrow ? (
        // Mobile: show either sidebar or content
        showContent ? content : sidebar
      ) : (
        // Desktop: two-panel side by side
        <>
          <div className="w-56 shrink-0 border-r border-black/10 dark:border-white/10">
            {sidebar}
          </div>
          {content}
        </>
      )}
    </div>
  );
}
