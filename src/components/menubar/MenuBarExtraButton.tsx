'use client';

import { useContext } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { cn } from '@/lib/utils';
import type { MenuBarExtraItem, MenuBarExtraStatus } from '@/lib/menu-bar-extras';
import { MenuBarThemeCtx, menuBarButtonClass } from './MenuItems';

const STATUS_DOT_CLASS: Record<MenuBarExtraStatus, string> = {
  ok: 'bg-green-500',
  busy: 'bg-yellow-400 animate-pulse',
  error: 'bg-red-500',
  neutral: 'bg-neutral-400',
};

/**
 * 1 icon "menu bar extra" do host đăng ký (xem lib/menu-bar-extras.ts) — nút trigger +
 * popover, style khớp ControlCenter.tsx (cùng LiquidGlass variant="panel", cùng
 * align/sideOffset) để nhất quán với các popover khác trên menu bar.
 *
 * Không dùng markup cố định như ControlCenter — `item.content` do host cung cấp toàn bộ,
 * vì mỗi host cần hiển thị thông tin khác nhau (ví dụ sky-app hiện trạng thái service TTS).
 */
export function MenuBarExtraButton({
  item,
  forceDark = false,
}: {
  item: MenuBarExtraItem;
  forceDark?: boolean;
}) {
  const theme = useContext(MenuBarThemeCtx);
  const effectiveTheme = forceDark ? 'dark' : theme;
  const iconClass =
    effectiveTheme === 'light' ? 'text-black/70 hover:bg-black/10' : 'text-white/80 hover:bg-white/10';

  return (
    <Popover.Root modal={false}>
      <Popover.Trigger asChild>
        <button
          className={cn(
            menuBarButtonClass,
            'relative px-2',
            iconClass,
            // Radix tự set data-state="open"/"closed" trên trigger — không cần React state
            // riêng để biết popover đang mở. Cùng class 'nút đang chọn' mà MenuDropdown.tsx
            // dùng, để icon này trông nhất quán với các menu khác khi đang mở.
            'data-[state=open]:bg-accent-active data-[state=open]:text-white',
          )}
          title={item.label}
          aria-label={item.label}
        >
          {item.icon}
          {item.status && (
            <span
              className={cn(
                'absolute bottom-0.5 right-0.5 h-1.5 w-1.5 rounded-full ring-1 ring-black/20',
                STATUS_DOT_CLASS[item.status],
              )}
            />
          )}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={6}
          className="z-[9999] outline-none"
          onInteractOutside={(e) => {
            // Không đóng khi bấm vào phần tử con của chính popover.
            const target = e.target as Element;
            if (target.closest('[data-radix-popper-content-wrapper]')) e.preventDefault();
          }}
          onFocusOutside={(e) => e.preventDefault()}
        >
          <LiquidGlass variant="panel" className="min-w-56 max-w-sm p-3">
            {item.content}
          </LiquidGlass>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
