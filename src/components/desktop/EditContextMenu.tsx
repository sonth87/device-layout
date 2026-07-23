'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { useTranslation } from '@/hooks/useTranslation';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';

/** 1 dòng trong menu — item thường hoặc separator (`separator: true`, mọi field khác bỏ qua). */
export interface EditMenuEntry {
  key: string;
  label?: string;
  onSelect?: () => void;
  disabled?: boolean;
  separator?: boolean;
}

/** Thông tin ngữ cảnh tại điểm right-click — đủ để host tự quyết định (vd chỉ can thiệp khi
 * target nằm trong 1 app cụ thể, qua target.closest('[data-app-id="..."]')). */
export interface EditContextMenuInfo {
  target: HTMLElement;
  isEditable: boolean;
  isImage: boolean;
  hasSelection: boolean;
}

/**
 * Host (app nhúng DeviceLayout, vd sky-app) tự quyết định danh sách item CUỐI CÙNG — nhận
 * `defaultItems` (danh sách device-layout tự build sẵn theo `info`) và `info`, trả về mảng entry
 * để render. Toàn quyền: giữ nguyên (trả lại defaultItems), thêm (spread + entry mới), bớt
 * (filter theo key), sắp xếp lại, hoặc thay thế hoàn toàn (bỏ qua defaultItems, trả mảng riêng) —
 * kể cả return [] để tắt hẳn context menu tại 1 vùng cụ thể (vd 1 app muốn tự vẽ menu riêng bằng
 * cơ chế khác, không dùng chung menu global này). Trả `null`/`undefined` = dùng defaultItems y
 * nguyên (không cần host tự spread lại nếu không có gì để đổi).
 */
export type ResolveEditContextMenuItems = (
  defaultItems: EditMenuEntry[],
  info: EditContextMenuInfo
) => EditMenuEntry[] | null | undefined;

interface EditContextMenuProps {
  children: React.ReactNode;
  resolveItems?: ResolveEditContextMenuItems;
}

const ITEM_CLS =
  'flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none ' +
  'text-[13px] text-black dark:text-white ' +
  'data-[highlighted]:bg-blue-500 data-[highlighted]:text-white ' +
  'data-[disabled]:opacity-40 data-[disabled]:pointer-events-none ' +
  'transition-colors';

const SEPARATOR_CLS = 'my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10';

const MENU_CLS = 'min-w-[180px] outline-none z-[99999]';

interface EditFlags {
  isEditable: boolean;
  isImage: boolean;
  hasSelection: boolean;
  canUndo: boolean;
  canRedo: boolean;
  canCut: boolean;
  canCopy: boolean;
  canPaste: boolean;
  canSelectAll: boolean;
  imageSrc: string | null;
}

function readEditFlags(target: EventTarget | null): { target: HTMLElement; flags: EditFlags } | null {
  if (!(target instanceof HTMLElement)) return null;

  const isImage = target instanceof HTMLImageElement;
  const isTextInput =
    (target instanceof HTMLInputElement && target.type !== 'checkbox' && target.type !== 'radio' && target.type !== 'button' && target.type !== 'submit') ||
    target instanceof HTMLTextAreaElement;
  const isEditable = !target.hasAttribute('disabled') && !(target as HTMLInputElement | HTMLTextAreaElement).readOnly && (isTextInput || target.isContentEditable);

  const selection = window.getSelection?.();
  const selectionText = selection?.toString() ?? '';
  const hasSelection = selectionText.length > 0;

  // Không có API DOM chuẩn để biết chính xác "canUndo"/"canRedo" của 1 input cụ thể (khác
  // document.execCommand đã deprecated, không đáng tin) — coi như luôn khả dụng khi đang ở vùng
  // editable, để user tự thử (Ctrl/Cmd+Z vẫn hoạt động qua trình duyệt bất kể enabled ở đây).
  const canUndo = isEditable;
  const canRedo = isEditable;
  const canCut = isEditable && hasSelection;
  const canCopy = hasSelection;
  const canPaste = isEditable;
  const canSelectAll = isEditable || isImage || hasSelection || target.isContentEditable;

  if (!isEditable && !isImage && !hasSelection) return null;

  return {
    target,
    flags: {
      isEditable,
      isImage,
      hasSelection,
      canUndo,
      canRedo,
      canCut,
      canCopy,
      canPaste,
      canSelectAll,
      imageSrc: isImage ? (target as HTMLImageElement).currentSrc || (target as HTMLImageElement).src : null,
    },
  };
}

async function pasteIntoTarget(target: EventTarget | null) {
  // navigator.clipboard.readText() là API chuẩn (không deprecated), nhưng CHỈ trả về string —
  // không tự chèn vào đúng vị trí con trỏ như execCommand('paste') từng làm, nên phải tự chèn:
  // setRangeText() cho input/textarea (giữ đúng selectionStart/End, hỗ trợ native, undo-able qua
  // InputEvent), execCommand('insertText') cho contentEditable (KHÔNG đọc clipboard — chỉ chèn
  // text đã có sẵn — nên không bị chặn permission như execCommand('paste') trực tiếp).
  let text: string;
  try {
    text = await navigator.clipboard.readText();
  } catch {
    // Web thuần chưa cấp quyền Clipboard-Read (hoặc API không tồn tại) — thử execCommand('paste')
    // như phương án cuối, hoạt động trên Electron (nơi feature này chủ yếu phục vụ).
    document.execCommand('paste');
    return;
  }
  if (!text) return;

  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    const start = target.selectionStart ?? target.value.length;
    const end = target.selectionEnd ?? target.value.length;
    target.setRangeText(text, start, end, 'end');
    target.dispatchEvent(new Event('input', { bubbles: true }));
  } else if (target instanceof HTMLElement && target.isContentEditable) {
    target.focus();
    document.execCommand('insertText', false, text);
  }
}

function execEditCommand(command: 'undo' | 'redo' | 'cut' | 'copy' | 'selectAll', target: EventTarget | null) {
  if (command === 'selectAll' && target instanceof HTMLElement && !(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement)) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection?.removeAllRanges();
    selection?.addRange(range);
    return;
  }
  // document.execCommand là deprecated nhưng vẫn là cách duy nhất hoạt động xuyên suốt mọi
  // input/textarea/contentEditable từ ngữ cảnh menu ở NGOÀI chính input đó (không có ref trực
  // tiếp tới input bị click) — trình duyệt hiện đại (Chromium/Electron's renderer) vẫn hỗ trợ đủ
  // cho undo/redo/cut/copy/selectAll. Riêng 'paste' tách thành pasteIntoTarget() (dùng Clipboard
  // API chuẩn thay vì execCommand('paste') — bị Chrome chặn trên web thuần vì lý do bảo mật).
  document.execCommand(command);
}

async function saveImage(src: string) {
  const a = document.createElement('a');
  a.href = src;
  a.download = src.split('/').pop()?.split('?')[0] || 'image';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Build danh sách item mặc định của device-layout theo `flags` — hàm thuần, không JSX, để host's
 * `resolveItems` (nhận lại đúng mảng này) có thể filter/spread/sắp xếp lại dễ dàng theo `key`. */
function buildDefaultEntries(flags: EditFlags, target: EventTarget | null, t: Record<string, string>): EditMenuEntry[] {
  const entries: EditMenuEntry[] = [];

  if (flags.isImage && flags.imageSrc) {
    const src = flags.imageSrc;
    entries.push({ key: 'saveImage', label: t.saveImage, onSelect: () => void saveImage(src) });
    entries.push({ key: 'sep-save-image', separator: true });
  }

  if (flags.isEditable) {
    entries.push({ key: 'undo', label: t.menuUndo, disabled: !flags.canUndo, onSelect: () => execEditCommand('undo', target) });
    entries.push({ key: 'redo', label: t.menuRedo, disabled: !flags.canRedo, onSelect: () => execEditCommand('redo', target) });
    entries.push({ key: 'sep-undo-redo', separator: true });
    entries.push({ key: 'cut', label: t.menuCut, disabled: !flags.canCut, onSelect: () => execEditCommand('cut', target) });
  }

  entries.push({ key: 'copy', label: t.menuCopy, disabled: !flags.canCopy, onSelect: () => execEditCommand('copy', target) });

  if (flags.isEditable) {
    entries.push({ key: 'paste', label: t.menuPaste, disabled: !flags.canPaste, onSelect: () => void pasteIntoTarget(target) });
  }

  entries.push({ key: 'sep-select-all', separator: true });
  entries.push({ key: 'selectAll', label: t.menuSelectAll, disabled: !flags.canSelectAll, onSelect: () => execEditCommand('selectAll', target) });

  return entries;
}

/**
 * Context menu (chuột phải) cho Copy/Paste/Cut/Select All/Save Image — BỌC TOÀN BỘ app (giống
 * ThemeProvider's root div trước đây chỉ preventDefault() vô điều kiện). Không dùng menu native
 * của browser/Electron vì 2 lý do (chốt qua trao đổi 2026-07-23):
 *   1. Browser không cho "lọc bớt" menu mặc định (Inspect/Search Google/...) — chỉ toàn bộ hoặc
 *      không gì cả.
 *   2. Cần HÀNH VI GIỐNG HỆT trên cả web (Next.js dev/preview) lẫn khi nhúng trong Electron (host
 *      app như sky-app) — tự vẽ menu đảm bảo nhất quán, không phụ thuộc host tự implement riêng.
 *
 * `resolveItems` prop (tuỳ chọn) — cho host TOÀN QUYỀN can thiệp danh sách cuối cùng (thêm/bớt/
 * ghi đè/sắp xếp lại, theo target cụ thể), tránh việc device-layout "khoá cứng" hoàn toàn context
 * menu và không app nào tích hợp thêm được (feedback thật, 2026-07-23).
 *
 * Cơ chế mở/đóng: Radix's ContextMenu.Trigger tự compose `onContextMenu` truyền vào (chạy TRƯỚC)
 * với handler nội bộ của nó (@radix-ui/primitive's composeEventHandlers) — nếu handler của mình
 * gọi `event.preventDefault()`, Radix thấy `event.defaultPrevented === true` và KHÔNG mở Content
 * (xem check `!event.defaultPrevented` trong compose) — tức tự nhiên tái tạo lại đúng hành vi cũ
 * (chặn hoàn toàn context menu ở vùng desktop/icon/window chrome) mà không cần State `open` thủ
 * công. Ngược lại, nếu KHÔNG preventDefault (target hợp lệ: input/text/image), Radix tự chạy tiếp
 * và mở Content tại đúng vị trí click.
 */
export function EditContextMenu({ children, resolveItems }: EditContextMenuProps) {
  const { t } = useTranslation();
  const [entries, setEntries] = useState<EditMenuEntry[] | null>(null);
  // Lưu target gốc để các lệnh Cut/Copy/Paste/SelectAll biết áp dụng lên đúng phần tử nào — menu
  // Content render qua Portal (ra ngoài cây DOM gốc), nên KHÔNG thể dựa vào document.activeElement
  // lúc click Item (focus đã rời khỏi input khi menu mở).
  const targetRef = useRef<EventTarget | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Đóng menu khi pointerdown xảy ra NGOÀI Content — tự làm thay vì dựa vào Radix's
  // DismissableLayer (lắng nghe pointerdown ở BUBBLE phase trên document, xem
  // @radix-ui/react-dismissable-layer's usePointerDownOutside). device-layout's Window.tsx (và
  // nhiều nơi khác trong WindowChrome.tsx/useWindowDrag.ts) gọi `e.stopPropagation()` trên
  // onPointerDown để focus window/app khi click vào nó — điều này chặn native pointerdown KHÔNG
  // BAO GIỜ nổi bọt tới document, nên bubble-phase listener của Radix không bao giờ thấy click đó
  // (bug thật, 2026-07-23: click ra ngoài trong CÙNG app thì tắt được vì đường nổi bọt chưa gặp
  // stopPropagation nào, nhưng click sang app/window KHÁC để focus nó thì never đóng được — đúng
  // như user mô tả). Sửa bằng CAPTURE-phase listener của riêng mình — capture chạy TRƯỚC mọi
  // handler khác (kể cả stopPropagation() ở bubble phase của Window.tsx không kịp chặn), nên luôn
  // thấy được pointerdown dù xảy ra ở bất kỳ đâu, kể cả trong 1 Window/app hoàn toàn khác.
  useEffect(() => {
    if (!entries) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (contentRef.current?.contains(event.target as Node)) return;
      setEntries(null);
    };
    document.addEventListener('pointerdown', handlePointerDown, { capture: true });
    return () => document.removeEventListener('pointerdown', handlePointerDown, { capture: true });
  }, [entries]);

  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    const result = readEditFlags(event.target);
    if (!result) {
      // Target không phải input/text/image (desktop, icon, window chrome...) — PHẢI tự
      // preventDefault ở đây (không "để rơi qua" cho browser xử lý), vì ThemeProvider's root div
      // không còn preventDefault vô điều kiện nữa (đã sửa để cho phép editable nổi lên tới đây) —
      // nếu bỏ qua bước này, right-click vùng thường sẽ lộ ra menu mặc định thật của Chromium
      // (Inspect/Reload/...), phá vỡ hành vi mô phỏng desktop OS.
      event.preventDefault();
      setEntries(null);
      return;
    }
    targetRef.current = event.target;
    const defaultEntries = buildDefaultEntries(result.flags, event.target, t as unknown as Record<string, string>);
    const resolved = resolveItems?.(defaultEntries, {
      target: result.target,
      isEditable: result.flags.isEditable,
      isImage: result.flags.isImage,
      hasSelection: result.flags.hasSelection,
    });
    const finalEntries = resolved ?? defaultEntries;
    if (finalEntries.length === 0) {
      // Host trả về [] — chủ động tắt hẳn menu tại vùng này, coi như không hợp lệ.
      event.preventDefault();
      setEntries(null);
      return;
    }
    setEntries(finalEntries);
  }, [resolveItems, t]);

  return (
    <ContextMenu.Root
      // ContextMenu.Root KHÔNG hỗ trợ `open` controlled (khác Dialog/DropdownMenu — chỉ có
      // `onOpenChange`, xem @radix-ui/react-context-menu's ContextMenuProps) — không thể làm
      // fully-controlled 2 chiều. `onOpenChange` vẫn cần giữ để bắt các đường đóng KHÁC click-
      // outside mà mình chưa tự xử lý (Escape, chọn xong 1 Item) — đồng bộ 1 chiều Radix →
      // `entries`. Riêng click-outside dùng capture-phase listener riêng bên dưới (useEffect) vì
      // Radix's DismissableLayer lắng nghe pointerdown ở BUBBLE phase trên document, và
      // device-layout's Window.tsx gọi stopPropagation() trên pointerdown để focus window khi
      // click vào nó — chặn mất native event trước khi tới bubble-phase listener của Radix nếu
      // click đó rơi vào 1 Window/app KHÁC (bug thật, 2026-07-23).
      //
      // `modal={false}` — BẮT BUỘC. Radix's @radix-ui/react-menu (dưới ContextMenu) tự đặt
      // `disableOutsidePointerEvents: context.open` khi modal=true (default), tức áp
      // `pointer-events: none` lên body cho đến khi Radix's INTERNAL `open` về false. Vì mình
      // không có cách ép Radix đóng thật (không có `open` controlled), khi capture-phase listener
      // tự setEntries(null) mà Radix vẫn tưởng đang mở, toàn bộ app bị khoá pointer-events —
      // không click được BẤT CỨ ĐÂU (đúng hiện tượng user báo). modal=false tắt hẳn cơ chế khoá
      // đó, để dismiss hoàn toàn do mình tự quản lý qua `entries`.
      modal={false}
      onOpenChange={(open) => {
        if (!open) setEntries(null);
      }}
    >
      <ContextMenu.Trigger asChild onContextMenu={handleContextMenu}>
        <div className="contents">{children}</div>
      </ContextMenu.Trigger>

      {/* Content chỉ thực sự có nội dung khi `entries` khớp lần mở gần nhất — Radix vẫn cần
         Root luôn có 1 Trigger + Content đăng ký sẵn (kể cả trước lần mở hợp lệ đầu tiên), nên
         không thể bỏ hẳn Portal/Content khi `entries` null, chỉ render rỗng. */}
      <ContextMenu.Portal>
        <ContextMenu.Content asChild className={MENU_CLS}>
          {entries ? (
            <LiquidGlass ref={contentRef} variant="panel" className="p-1">
              <div>
                {entries.map((entry) =>
                  entry.separator ? (
                    <ContextMenu.Separator key={entry.key} className={SEPARATOR_CLS} />
                  ) : (
                    <ContextMenu.Item key={entry.key} className={ITEM_CLS} disabled={entry.disabled} onSelect={entry.onSelect}>
                      {entry.label}
                    </ContextMenu.Item>
                  )
                )}
              </div>
            </LiquidGlass>
          ) : (
            <div />
          )}
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
