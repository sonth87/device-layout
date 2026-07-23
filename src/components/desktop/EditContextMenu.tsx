'use client';

import { useCallback, useRef, useState } from 'react';
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
      onOpenChange={(open) => {
        // Root chạy UNCONTROLLED nếu không có `onOpenChange` — Radix tự đóng Content khi click ra
        // ngoài/Escape/chọn item, nhưng KHÔNG có cách nào cho mình biết để dọn `entries` theo (2
        // state độc lập, dễ lệch nhau). Khi Radix báo đóng (open === false) vì bất kỳ lý do gì,
        // dọn `entries` về null ngay — nếu không, lần click-ra-ngoài kế tiếp thấy `entries` cũ
        // còn "sống" trong React state trong khi Radix's internal open đã false, gây lệch pha
        // khiến DismissableLayer's click-outside không đóng được nữa (bug thật, 2026-07-23: phải
        // bấm đúng 1 menu item mới tắt được, click ra ngoài không ăn).
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
            <LiquidGlass variant="panel" className="p-1">
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
