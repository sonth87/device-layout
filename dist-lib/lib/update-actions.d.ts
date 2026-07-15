export interface UpdateStatus {
    /** 'bundled' nếu chưa từng OTA/update-qua-file (đang dùng bản build sẵn). */
    runningRendererVersion: string;
    pendingRendererVersion: string | null;
    /** Mô tả bản pendingRendererVersion (từ VERSION.json's entry.summary), null nếu không có. */
    pendingReleaseNotes: string | null;
    nativeUpdateDownloaded: boolean;
    nativeUpdateVersion: string | null;
}
export interface PickUpdateFileResult {
    ok: boolean;
    kind: 'renderer-zip' | 'installer' | 'cancelled';
    bundleVersion?: string;
    fileName?: string;
    error?: string;
}
export type UpdateProgressPhase = 'idle' | 'checking' | 'downloading' | 'extracting' | 'done' | 'error';
export interface UpdateProgress {
    phase: UpdateProgressPhase;
    percent: number | null;
    bundleVersion?: string;
    error?: string;
}
export type CheckUpdateFn = () => Promise<UpdateStatus>;
export type PickUpdateFileFn = () => Promise<PickUpdateFileResult>;
export type OnProgressFn = (cb: (p: UpdateProgress) => void) => () => void;
export interface UpdateActions {
    checkUpdate: CheckUpdateFn;
    pickUpdateFile: PickUpdateFileFn;
    /** Subscribe tới tiến trình tải/áp dụng OTA renderer. Omit nếu host không
     * hỗ trợ progress (SettingsUpdate.tsx chỉ hiện trạng thái tĩnh qua
     * checkUpdate(), không có % động). */
    onProgress?: OnProgressFn;
}
export declare const UpdateActionsProvider: import('react').Provider<UpdateActions | null>;
export declare function useUpdateActions(): UpdateActions | null;
