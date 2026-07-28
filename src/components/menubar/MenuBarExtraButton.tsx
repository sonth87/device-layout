'use client';

import { useContext, useState } from 'react';
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

  // Controlled (thay vì uncontrolled như trước) — CẦN để tự đóng khi bấm 1 mục hành động
  // trong item.content (vd "Xem log" mở cửa sổ log riêng). Không tự đóng thì popover đứng
  // yên phía sau cửa sổ vừa mở, và do cửa sổ (FloatingWindow, z 99999) luôn vẽ trên popover
  // (z 9999) nên trông như cửa sổ "đè" lên menu — đúng hành vi menu thật (MenuDropdown.tsx)
  // là bấm 1 mục thì đóng menu ngay, không phải lỗi z-index.
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root modal={false} open={open} onOpenChange={setOpen}>
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
          // z-index PHẢI lớn hơn zIndex 99999 của FloatingWindow (giá trị số quyết định thứ
          // tự vẽ, không phải thứ tự DOM, khi cả 2 khác giá trị) — thanh menu bar trên macOS
          // thật LUÔN nổi trên mọi cửa sổ app, không riêng gì lúc mới mở. Trước đó z-[9999]
          // (thấp hơn 99999) khiến popover này luôn vẽ DƯỚI bất kỳ FloatingWindow nào đang mở
          // cùng lúc (vd EngineManager) dù đóng/mở lại popover theo cách nào — bug thật phát
          // hiện qua ảnh chụp: cửa sổ "Quản lý engine" đè lên nửa popover trạng thái TTS.
          className="z-[100000] outline-none"
          onInteractOutside={(e) => {
            // Không đóng khi bấm vào phần tử con của chính popover.
            const target = e.target as Element;
            if (target.closest('[data-radix-popper-content-wrapper]')) e.preventDefault();
          }}
          onFocusOutside={(e) => e.preventDefault()}
          onClick={(e) => {
            // Bấm 1 <button> bên trong content (mục hành động) → đóng popover, cùng hành vi
            // "chọn mục thì đóng menu" của MenuDropdown.tsx. Nội dung do host cung cấp
            // (item.content) nên không biết trước cấu trúc — dò bằng closest('button') thay
            // vì bắt callback riêng.
            if ((e.target as HTMLElement).closest('button')) setOpen(false);
          }}
        >
          <LiquidGlass variant="panel" className="min-w-56 max-w-sm p-3">
            {item.content}
          </LiquidGlass>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
