'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useStore } from '@/store';
import { WALLPAPERS, WALLPAPER_COLORS, ALL_WALLPAPERS } from '@/config/wallpapers.config';
import { useWallpaperImport } from '@/lib/wallpaper-import';
import { WallpaperSection } from './WallpaperSection';
import { WallpaperDetailPanel } from './WallpaperDetailPanel';

/**
 * Full wallpaper picker content: Pictures / Colors / custom-folder sections
 * (each a WallpaperSection) plus the right-hand detail panel — mirrors
 * macOS System Settings > Wallpaper. Rendered by both WallpaperPicker
 * (desktop right-click modal) and SettingsWallpaper (Settings app page);
 * neither wraps it in anything picker-specific, so this stays layout-only.
 */
type SectionId = 'pictures' | 'colors' | 'custom';

export function WallpaperPickerContent() {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);
  const customWallpapers = useStore((s) => s.customWallpapers);
  const addCustomWallpaper = useStore((s) => s.addCustomWallpaper);
  const wallpaperCycle = useStore((s) => s.wallpaperCycle);

  const importWallpaper = useWallpaperImport();
  const [importing, setImporting] = useState(false);
  const [expandedSection, setExpandedSection] = useState<SectionId | null>(null);

  const selected = ALL_WALLPAPERS.find((w) => w.id === wallpaperId)
    ?? customWallpapers.find((w) => w.id === wallpaperId)
    ?? WALLPAPERS[0];

  const selectedIsCustom = customWallpapers.some((w) => w.id === wallpaperId);

  async function handleImport() {
    if (!importWallpaper || importing) return;
    setImporting(true);
    try {
      const wallpaper = await importWallpaper();
      if (wallpaper) {
        addCustomWallpaper(wallpaper);
        setWallpaper(wallpaper.id);
      }
    } finally {
      setImporting(false);
    }
  }

  function toggleSection(id: SectionId) {
    setExpandedSection((current) => (current === id ? null : id));
  }

  return (
    <div className="flex gap-5">
      <div className="flex-1 min-w-0 space-y-5">
        {(expandedSection === null || expandedSection === 'pictures') && (
          <WallpaperSection
            title="Pictures"
            items={WALLPAPERS}
            selectedId={wallpaperId}
            cyclingGroup={wallpaperCycle.enabled && wallpaperCycle.group === 'builtin'}
            onSelect={setWallpaper}
            expanded={expandedSection === 'pictures'}
            onToggleExpanded={() => toggleSection('pictures')}
          />
        )}

        {(expandedSection === null || expandedSection === 'colors') && (
          <WallpaperSection
            title="Colors"
            items={WALLPAPER_COLORS}
            selectedId={wallpaperId}
            onSelect={setWallpaper}
            shape="circle"
            expanded={expandedSection === 'colors'}
            onToggleExpanded={() => toggleSection('colors')}
          />
        )}

        {(expandedSection === null || expandedSection === 'custom') && (
          <WallpaperSection
            title="Your Photos"
            items={customWallpapers}
            selectedId={wallpaperId}
            cyclingGroup={wallpaperCycle.enabled && wallpaperCycle.group === 'custom'}
            onSelect={setWallpaper}
            expanded={expandedSection === 'custom'}
            onToggleExpanded={() => toggleSection('custom')}
            leadingActions={
              importWallpaper && (
                <button
                  onClick={handleImport}
                  disabled={importing}
                  title="Add a Photo"
                  className="shrink-0 w-24 aspect-video rounded-(--radius-input) border-2 border-dashed border-black/15 dark:border-white/15 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors text-black/40 dark:text-white/40 disabled:opacity-50"
                >
                  <Plus className="w-5 h-5" />
                </button>
              )
            }
          />
        )}
      </div>

      {expandedSection === null && (
        <WallpaperDetailPanel wallpaper={selected} cycleGroup={selectedIsCustom ? 'custom' : 'builtin'} />
      )}
    </div>
  );
}

interface WallpaperPickerModalProps {
  onClose: () => void;
}

/** Modal wrapper — used from the desktop right-click context menu (Wallpaper.tsx). */
export function WallpaperPickerModal({ onClose }: WallpaperPickerModalProps) {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white/90 dark:bg-[#151821]/95 backdrop-blur-xl rounded-(--radius-card) p-6 shadow-2xl w-[600px] max-w-[95vw] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 shrink-0">
          <h2 className="text-sm font-semibold">Wallpaper</h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto pr-1.5">
          <WallpaperPickerContent />
        </div>
      </div>
    </div>
  );
}
