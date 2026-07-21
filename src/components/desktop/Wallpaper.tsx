'use client';

import { useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { Check, X } from 'lucide-react';
import { useStore } from '@/store';
import { useImageReady } from '@/hooks/useImageReady';
import { useStoreHydrated } from '@/hooks/useStoreHydrated';
import { useResolvedWallpaper } from '@/hooks/useResolvedWallpaper';
import { resolveAssetUrl, useAssetBase } from '@/lib/asset-base';
import { wallpaperFitToCss } from '@/lib/wallpaper-fit';
import { ViewOptionsDialog } from './ViewOptionsDialog';
import { useTranslation } from '@/hooks/useTranslation';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { useSimpleModeFeatures } from '@/contexts/SimpleModeContext';
import { WallpaperPickerContent } from '@/components/wallpaper/WallpaperPickerContent';

interface WallpaperProps {
  children: React.ReactNode;
}

const ITEM_CLS =
  'flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none ' +
  'text-[13px] text-black dark:text-white ' +
  'data-[highlighted]:bg-blue-500 data-[highlighted]:text-white ' +
  'data-[disabled]:opacity-40 data-[disabled]:pointer-events-none ' +
  'transition-colors';

const SEPARATOR_CLS = 'my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10';

const MENU_CLS = 'min-w-[220px] outline-none z-[99999]';

export function Wallpaper({ children }: WallpaperProps) {
  const { t } = useTranslation();
  const features = useSimpleModeFeatures();

  const useStacks               = useStore((s) => s.useStacks);
  const toggleStacks           = useStore((s) => s.toggleStacks);
  const openWidgetGallery      = useStore((s) => s.openWidgetGallery);
  const fitMode                = useStore((s) => s.wallpaperFitMode);
  const setDesktopViewOptionsOpen = useStore((s) => s.setDesktopViewOptionsOpen);
  const apps                    = useStore((s) => s.apps);
  const launchApp               = useStore((s) => s.launchApp);
  const setSettingsActiveTab    = useStore((s) => s.setSettingsActiveTab);
  const hydrated               = useStoreHydrated();

  const [standalonePickerOpen, setStandalonePickerOpen] = useState(false);

  const assetBase = useAssetBase();
  const wallpaper = useResolvedWallpaper();
  const wallpaperUrl = resolveAssetUrl(assetBase, wallpaper.url ?? '');
  const imageReady = useImageReady(wallpaperUrl, hydrated && wallpaper.kind !== 'color');
  const wallpaperReady = wallpaper.kind === 'color' ? hydrated : imageReady;
  const backgroundImage = hydrated && wallpaperReady && wallpaper.kind !== 'color' ? `url(${wallpaperUrl})` : 'none';

  const handleOpenWallpaperPicker = () => {
    const settingsApp = Object.values(apps).find((a) => a.id === 'settings');
    if (settingsApp) {
      setSettingsActiveTab('wallpaper');
      launchApp(settingsApp);
    } else {
      setStandalonePickerOpen(true);
    }
  };

  // Background Element
  const renderBackground = () => {
    if (!features.wallpaper) {
      return <div className="absolute inset-0 overflow-hidden bg-[#f4f4f5] dark:bg-[#18181b]" />;
    }

    return (
      <div className="absolute inset-0 overflow-hidden bg-[#1e1e2e]">
        {wallpaper.kind === 'color' ? (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: wallpaper.colorHex, transition: 'background-color 120ms ease-out' }}
          />
        ) : hydrated && wallpaper.kind === 'live' && wallpaper.videoUrl ? (
          <video
            key={wallpaper.videoUrl}
            src={resolveAssetUrl(assetBase, wallpaper.videoUrl)}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage,
              ...wallpaperFitToCss(fitMode),
              transition: 'background-image 120ms ease-out',
            }}
          />
        )}
      </div>
    );
  };

  // Determine which items to show in ContextMenu
  const showContextMenuItems =
    features.contextMenu &&
    (features.wallpaperPicker || features.widgets.allowGalleryEdit || features.iconGrid);

  return (
    <>
      {features.contextMenu && showContextMenuItems ? (
        <ContextMenu.Root>
          <ContextMenu.Trigger asChild>
            {renderBackground()}
          </ContextMenu.Trigger>

          <ContextMenu.Portal>
            <ContextMenu.Content asChild className={MENU_CLS}>
              <LiquidGlass variant="panel" className="p-1">
                <div>
                  {/* Change Wallpaper */}
                  {features.wallpaperPicker && (
                    <ContextMenu.Item
                      className={ITEM_CLS}
                      onSelect={handleOpenWallpaperPicker}
                    >
                      {t.changeWallpaper}
                    </ContextMenu.Item>
                  )}

                  {/* Edit Widgets */}
                  {features.widgets.allowGalleryEdit && (
                    <ContextMenu.Item
                      className={ITEM_CLS}
                      onSelect={() => openWidgetGallery()}
                    >
                      {t.editWidgets}
                    </ContextMenu.Item>
                  )}

                  {(features.wallpaperPicker || features.widgets.allowGalleryEdit) && features.iconGrid && (
                    <ContextMenu.Separator className={SEPARATOR_CLS} />
                  )}

                  {/* Icon Grid Stacks & View options */}
                  {features.iconGrid && (
                    <>
                      <ContextMenu.Item
                        className={ITEM_CLS}
                        onSelect={() => toggleStacks()}
                      >
                        <span className="w-3.5 shrink-0 flex items-center justify-center">
                          {useStacks && <Check className="w-3 h-3 stroke-[2.5]" />}
                        </span>
                        {t.useStacks}
                      </ContextMenu.Item>

                      <ContextMenu.Separator className={SEPARATOR_CLS} />

                      <ContextMenu.Item
                        className={ITEM_CLS}
                        onSelect={() => setDesktopViewOptionsOpen(true)}
                      >
                        <span className="w-3.5 shrink-0" />
                        {t.showViewOptions}
                      </ContextMenu.Item>
                    </>
                  )}
                </div>
              </LiquidGlass>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        </ContextMenu.Root>
      ) : (
        renderBackground()
      )}

      {/* Render children inside sibling overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {children}
      </div>

      {/* View Options Dialog */}
      <ViewOptionsDialog />

      {/* Standalone Wallpaper Picker Modal (Simple Mode fallback when Settings app is omitted) */}
      {standalonePickerOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto">
          <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-zinc-900 dark:text-white transition-colors">
            <div className="px-4 py-3 border-b border-black/10 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80">
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">{t.changeWallpaper}</h3>
              <button
                onClick={() => setStandalonePickerOpen(false)}
                className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 bg-white dark:bg-zinc-900">
              <WallpaperPickerContent variant="horizontal" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

