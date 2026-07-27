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
export type ResolveEditContextMenuItems = (defaultItems: EditMenuEntry[], info: EditContextMenuInfo) => EditMenuEntry[] | null | undefined;
interface EditContextMenuProps {
    children: React.ReactNode;
    resolveItems?: ResolveEditContextMenuItems;
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
export declare function EditContextMenu({ children, resolveItems }: EditContextMenuProps): import("react").JSX.Element;
export {};
