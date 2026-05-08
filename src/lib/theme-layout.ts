import type { CSSProperties } from 'react';
import type { ThemeConfig } from '@/types/theme';

type ThemeCssVars = CSSProperties & Record<`--${string}`, string>;

const px = (value: number) => `${value}px`;

export function getThemeCssVars(config: ThemeConfig): ThemeCssVars {
  const { desktopInsets, chrome, window } = config.layout;

  return {
    '--dock-height': px(chrome.dockHeight),
    '--dock-offset-bottom': px(chrome.dockOffsetBottom),
    '--menubar-height': px(chrome.menuBarHeight),
    '--taskbar-height': px(chrome.taskbarHeight),
    '--navbar-height': px(chrome.navBarHeight),
    '--statusbar-height': px(chrome.statusBarHeight),
    '--window-chrome-height': px(chrome.windowChromeHeight),
    '--desktop-inset-top': px(desktopInsets.top),
    '--desktop-inset-right': px(desktopInsets.right),
    '--desktop-inset-bottom': px(desktopInsets.bottom),
    '--desktop-inset-left': px(desktopInsets.left),
    '--window-maximize-top-inset': px(window.maximizeInsets.top),
    '--window-maximize-bottom-inset': px(window.maximizeInsets.bottom),
    '--window-drag-top-inset': px(window.dragTopInset),
    '--window-min-title-visible-height': px(window.minTitleVisibleHeight),
  };
}
