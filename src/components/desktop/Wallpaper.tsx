'use client';

import * as ContextMenu from '@radix-ui/react-context-menu';
import { Check, ChevronRight } from 'lucide-react';
import { useStore } from '@/store';
import { useImageReady } from '@/hooks/useImageReady';
import { useStoreHydrated } from '@/hooks/useStoreHydrated';
import { useResolvedWallpaper } from '@/hooks/useResolvedWallpaper';
import { resolveAssetUrl, useAssetBase } from '@/lib/asset-base';
import { wallpaperFitToCss } from '@/lib/wallpaper-fit';
import { ViewOptionsDialog } from './ViewOptionsDialog';
import { useTranslation } from '@/hooks/useTranslation';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import type { StackGroupBy } from '@/types/desktop';


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

export function Wallpaper({ children, isSimpleMode = false }: WallpaperProps & { isSimpleMode?: boolean }) {
  const { t } = useTranslation();
  const useStacks               = useStore((s) => s.useStacks);
  const stackGroupBy           = useStore((s) => s.stackGroupBy);
  const toggleStacks           = useStore((s) => s.toggleStacks);
  const setStackGroupBy        = useStore((s) => s.setStackGroupBy);
  const openWidgetGallery      = useStore((s) => s.openWidgetGallery);
  const fitMode                = useStore((s) => s.wallpaperFitMode);
  const desktopViewOptionsOpen = useStore((s) => s.desktopViewOptionsOpen);
  const setDesktopViewOptionsOpen = useStore((s) => s.setDesktopViewOptionsOpen);
  const apps                    = useStore((s) => s.apps);
  const launchApp               = useStore((s) => s.launchApp);
  const setSettingsActiveTab    = useStore((s) => s.setSettingsActiveTab);
  const hydrated               = useStoreHydrated();

  const assetBase = useAssetBase();
  const wallpaper = useResolvedWallpaper();
  const wallpaperUrl = resolveAssetUrl(assetBase, wallpaper.url ?? '');
  // Colors don't have an image to wait on — ready immediately.
  const imageReady = useImageReady(wallpaperUrl, hydrated && wallpaper.kind !== 'color');
  const wallpaperReady = wallpaper.kind === 'color' ? hydrated : imageReady;
  // Falls back to the container's own bg-[#1e1e2e] (see below) when the
  // image 404s or hasn't loaded yet — never points background-image at a
  // broken URL (useImageReady.ts's onerror handling is what makes this safe).
  const backgroundImage = hydrated && wallpaperReady && wallpaper.kind !== 'color' ? `url(${wallpaperUrl})` : 'none';

  const groupByOptions: { id: StackGroupBy; label: string }[] = [
    { id: 'kind',             label: t.kind },
    { id: 'shared-by',        label: t.sharedBy },
    { id: 'date-last-opened', label: t.dateLastOpened },
    { id: 'date-added',       label: t.dateAdded },
    { id: 'date-modified',    label: t.dateModified },
    { id: 'date-created',     label: t.dateCreated },
    { id: 'tags',             label: t.tags },
  ];

  if (isSimpleMode) {
    return (
      <>
        {/* Simple Mode: solid background light/dark according to settings */}
        <div className="absolute inset-0 overflow-hidden bg-[#f4f4f5] dark:bg-[#18181b]" />

        {/* Render children inside a sibling overlay so they are outside of the Trigger DOM tree */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <ContextMenu.Root>
        {/* Trigger wraps ONLY the bare wallpaper background div */}
        <ContextMenu.Trigger asChild>
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
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content asChild className={MENU_CLS}>
            <LiquidGlass variant="panel" className="p-1">
              <div>
                {/* Change Wallpaper */}
                <ContextMenu.Item
                  className={ITEM_CLS}
                  onSelect={() => {
                    const settingsApp = Object.values(apps).find((a) => a.id === 'settings');
                    if (settingsApp) {
                      setSettingsActiveTab('wallpaper');
                      launchApp(settingsApp);
                    }
                  }}
                >
                  {t.changeWallpaper}
                </ContextMenu.Item>

                {/* Edit Widgets */}
                <ContextMenu.Item
                  className={ITEM_CLS}
                  onSelect={() => openWidgetGallery()}
                >
                  {t.editWidgets}
                </ContextMenu.Item>

                <ContextMenu.Separator className={SEPARATOR_CLS} />

                {/* Use Stacks */}
                <ContextMenu.Item
                  className={ITEM_CLS}
                  onSelect={() => toggleStacks()}
                >
                  <span className="w-3.5 shrink-0 flex items-center justify-center">
                    {useStacks && <Check className="w-3 h-3 stroke-[2.5]" />}
                  </span>
                  {t.useStacks}
                </ContextMenu.Item>

                {/* Group Stacks By — submenu */}
                <ContextMenu.Sub>
                  <ContextMenu.SubTrigger
                    className={`${ITEM_CLS} data-[state=open]:bg-blue-500 data-[state=open]:text-white`}
                  >
                    <span className="w-3.5 shrink-0" />
                    <span className="flex-1">{t.groupStacksBy}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60" />
                  </ContextMenu.SubTrigger>

                  <ContextMenu.Portal>
                    <ContextMenu.SubContent
                      asChild
                      className={MENU_CLS}
                      sideOffset={2}
                      alignOffset={-4}
                    >
                      <LiquidGlass variant="panel" className="p-1">
                        <div>
                          {groupByOptions.map(({ id, label }) => (
                            <ContextMenu.Item
                              key={id}
                              className={ITEM_CLS}
                              onSelect={() => setStackGroupBy(id)}
                            >
                              <span className="w-3.5 shrink-0 flex items-center justify-center">
                                {stackGroupBy === id && (
                                  <Check className="w-3 h-3 stroke-[2.5]" />
                                )}
                              </span>
                              {label}
                            </ContextMenu.Item>
                          ))}
                        </div>
                      </LiquidGlass>
                    </ContextMenu.SubContent>
                  </ContextMenu.Portal>
                </ContextMenu.Sub>

                <ContextMenu.Separator className={SEPARATOR_CLS} />

                {/* Show View Options */}
                <ContextMenu.Item
                  className={ITEM_CLS}
                  onSelect={() => setDesktopViewOptionsOpen(true)}
                >
                  <span className="w-3.5 shrink-0" />
                  {t.showViewOptions}
                </ContextMenu.Item>
              </div>
            </LiquidGlass>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>

      {/* Render children inside a sibling overlay so they are outside of the Trigger DOM tree */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {children}
      </div>

      {/* View Options Dialog */}
      <ViewOptionsDialog />
    </>
  );
}
