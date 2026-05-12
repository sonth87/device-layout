'use client';

import { useState, useCallback } from 'react';
import { Settings2, Paintbrush, Image, LayoutGrid, Bell, type LucideIcon } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { AppIconImage } from '@/components/shared/AppIconImage';
import { SettingsGeneral } from './settings/SettingsGeneral';
import { SettingsAppearance } from './settings/SettingsAppearance';
import { SettingsWallpaper } from './settings/SettingsWallpaper';
import { SettingsDesktopDock } from './settings/SettingsDesktopDock';
import { SettingsNotifications } from './settings/SettingsNotifications';
import { AppSettingsPanel } from './settings/AppSettingsRegistry';
import { MobileSplitView, useMobileSplitBack } from './MobileSplitView';
import type { AppContentProps } from './AppRegistry';

type SystemSectionId = 'general' | 'appearance' | 'wallpaper' | 'desktop-dock' | 'notifications';

const SYSTEM_SECTIONS: {
  id: SystemSectionId;
  label: string;
  lucideIcon: LucideIcon;
  color: [string, string];
  component: () => React.ReactElement;
}[] = [
  { id: 'general',       label: 'General',       lucideIcon: Settings2, color: ['#636366', '#48484a'], component: SettingsGeneral },
  { id: 'appearance',    label: 'Appearance',    lucideIcon: Paintbrush, color: ['#5e5ce6', '#3634a3'], component: SettingsAppearance },
  { id: 'wallpaper',     label: 'Wallpaper',     lucideIcon: Image,      color: ['#30d158', '#25a244'], component: SettingsWallpaper },
  { id: 'desktop-dock',  label: 'Desktop & Dock',lucideIcon: LayoutGrid, color: ['#0a84ff', '#0055d4'], component: SettingsDesktopDock },
  { id: 'notifications', label: 'Notifications', lucideIcon: Bell,       color: ['#ff3b30', '#cc2323'], component: SettingsNotifications },
];

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
        'w-full flex items-center gap-3 px-3 py-2 rounded-(--radius-input) text-left transition-colors focus:outline-none text-sm',
        active ? 'bg-red-500/90 text-white' : 'hover:bg-black/5 dark:hover:bg-white/8'
      )}
    >
      {iconEl ?? (Icon ? (
        <span
          className="w-7 h-7 rounded-(--radius-input) flex items-center justify-center shrink-0"
          style={{ background: `linear-gradient(135deg, ${iconColor?.[0] ?? '#636366'}, ${iconColor?.[1] ?? '#48484a'})` }}
        >
          <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
        </span>
      ) : null)}
      <span className="truncate font-medium">{label}</span>
    </button>
  );
}

export function Settings({ windowId }: AppContentProps) {
  const apps = useStore((s) => s.apps);
  void windowId;

  const appSettingsList = Object.values(apps).filter((a) => !a.disabled && a.appSettings);

  type ActiveId = SystemSectionId | `app:${string}`;
  const [activeId, setActiveId] = useState<ActiveId | null>(null);

  const select = useCallback((id: ActiveId) => setActiveId(id), []);

  const activeSectionLabel = (() => {
    if (!activeId) return '';
    if (activeId.startsWith('app:')) return apps[activeId.slice(4)]?.name ?? '';
    return SYSTEM_SECTIONS.find((s) => s.id === activeId)?.label ?? '';
  })();

  const renderContent = () => {
    if (!activeId) return null;
    if (activeId.startsWith('app:')) {
      const app = apps[activeId.slice(4)];
      if (!app?.appSettings) return null;
      return <AppSettingsPanel settingsKey={app.appSettings} />;
    }
    const section = SYSTEM_SECTIONS.find((s) => s.id === activeId);
    if (!section) return null;
    const Component = section.component;
    return <Component />;
  };

  const sidebarPanel = (
    <aside className="flex flex-col h-full overflow-y-auto bg-neutral-200/60 dark:bg-[#11141B] px-3 py-4 gap-1">
      <div className="mb-3 mx-1">
        <label className="flex items-center gap-2 bg-black/8 dark:bg-white/8 rounded-(--radius-input) px-3 py-1.5">
          <svg className="w-3.5 h-3.5 text-black/40 dark:text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="search" placeholder="Search"
            className="bg-transparent text-sm text-black/80 dark:text-white/80 placeholder:text-black/35 dark:placeholder:text-white/35 outline-none w-full" />
        </label>
      </div>

      <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35">System</p>
      {SYSTEM_SECTIONS.map((section) => (
        <SidebarItem key={section.id} lucideIcon={section.lucideIcon} iconColor={section.color}
          label={section.label} active={activeId === section.id} onClick={() => select(section.id)} />
      ))}

      {appSettingsList.length > 0 && (
        <>
          <p className="px-3 mt-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35">Applications</p>
          {appSettingsList.map((app) => (
            <SidebarItem key={app.id} label={app.name}
              active={activeId === `app:${app.id}`}
              onClick={() => select(`app:${app.id}` as ActiveId)}
              iconEl={<div className="w-7 h-7 shrink-0"><AppIconImage appConfig={app} size={28} /></div>}
            />
          ))}
        </>
      )}
    </aside>
  );

  return (
    <MobileSplitView
      list={sidebarPanel}
      detail={activeId ? <SettingsContent label={activeSectionLabel}>{renderContent()}</SettingsContent> : null}
      onBack={() => setActiveId(null)}
      detailTitle={activeSectionLabel}
      className="bg-neutral-100 dark:bg-[#0F1115]"
      sidebarWidth="w-56"
      listClassName="bg-neutral-200/60 dark:bg-[#11141B]"
    />
  );
}

function SettingsContent({ label, children }: { label: string; children: React.ReactNode }) {
  const mobileBack = useMobileSplitBack();
  return (
    <div className="flex flex-col h-full bg-neutral-100 dark:bg-[#0F1115]">
      {/* Sticky header — single row: back + title */}
      {mobileBack && (
        <div className="shrink-0 flex items-center gap-2 px-3 h-11 border-b border-black/8 dark:border-white/8 bg-neutral-100 dark:bg-[#0F1115]">
          <button
            onClick={mobileBack}
            className="flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[14px] font-medium">Settings</span>
          </button>
          <h1 className="flex-1 text-[15px] font-semibold text-center truncate pr-16">{label}</h1>
        </div>
      )}
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-5 pb-8">
        {!mobileBack && (
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">{label}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
