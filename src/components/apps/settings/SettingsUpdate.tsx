'use client';

import { useEffect, useState } from 'react';
import { useUpdateActions, type UpdateProgress } from '@/lib/update-actions';
import { useUpdateStatusStore } from '@/lib/update-status-store';

const PHASE_LABEL: Record<UpdateProgress['phase'], string> = {
  idle: '',
  checking: 'Đang kiểm tra…',
  downloading: 'Đang tải bản cập nhật…',
  extracting: 'Đang giải nén…',
  done: 'Hoàn tất.',
  error: 'Lỗi cập nhật.',
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <span className="text-black/50 dark:text-white/50">{label}</span>
      <span className="text-black/80 dark:text-white/80 font-mono truncate max-w-[60%]">{value}</span>
    </div>
  );
}

export function SettingsUpdate() {
  const actions = useUpdateActions();
  const status = useUpdateStatusStore((s) => s.status);
  const setStatus = useUpdateStatusStore((s) => s.setStatus);
  const [checking, setChecking] = useState(false);
  const [lastResult, setLastResult] = useState<{ ok: boolean; message: string } | null>(null);
  const [progress, setProgress] = useState<UpdateProgress | null>(null);

  useEffect(() => {
    if (!actions?.onProgress) return;
    return actions.onProgress((p) => {
      setProgress(p);
      if (p.phase === 'done') {
        actions.checkUpdate().then(setStatus).catch(() => {});
      }
      if (p.phase === 'error') {
        setLastResult({ ok: false, message: p.error ?? 'Cập nhật thất bại.' });
      }
    });
  }, [actions, setStatus]);

  async function handleCheck() {
    if (!actions || checking) return;
    setChecking(true);
    setLastResult(null);
    try {
      setStatus(await actions.checkUpdate());
    } finally {
      setChecking(false);
    }
  }

  if (!actions) {
    return (
      <div className="rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 text-center text-sm text-black/40 dark:text-white/40">
        Tính năng cập nhật không khả dụng trên nền tảng này.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 space-y-2">
        <Row label="Phiên bản renderer đang chạy" value={status?.runningRendererVersion ?? '—'} />
        <Row label="Bản chờ áp dụng" value={status?.pendingRendererVersion ?? 'Không có'} />
        <Row
          label="Bản cài đặt native đã tải"
          value={status?.nativeUpdateDownloaded ? (status.nativeUpdateVersion ?? 'Có') : 'Không có'}
        />
      </div>

      {status?.pendingRendererVersion && status.pendingReleaseNotes && (
        <div className="rounded-(--radius-input) bg-blue-500/10 px-3 py-2 text-xs text-blue-700 dark:text-blue-300 whitespace-pre-line">
          <strong>Bản {status.pendingRendererVersion}:</strong> {status.pendingReleaseNotes}
        </div>
      )}

      {progress && progress.phase !== 'idle' && progress.phase !== 'error' && (
        <div className="rounded-(--radius-input) bg-black/5 dark:bg-white/5 px-3 py-2 space-y-1.5">
          <div className="text-xs text-black/60 dark:text-white/60">
            {PHASE_LABEL[progress.phase]}
            {progress.phase === 'downloading' && progress.percent !== null ? ` ${progress.percent}%` : ''}
          </div>
          {progress.phase === 'downloading' && (
            <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-500 transition-all"
                style={{ width: progress.percent !== null ? `${progress.percent}%` : '30%' }}
              />
            </div>
          )}
        </div>
      )}

      {/* Update qua file (kernel:update:pickFile) tạm ẩn khỏi UI — xem
          docs/dev/versioning.md's mục "Update qua file — tạm ẩn khỏi UI".
          Backend (UpdateActions.pickUpdateFile) giữ nguyên, có thể bật lại. */}
      <button
        onClick={handleCheck}
        disabled={checking}
        className="w-full rounded-(--radius-input) bg-blue-500 text-white text-sm font-medium py-2 disabled:opacity-50"
      >
        {checking ? 'Đang kiểm tra…' : 'Kiểm tra cập nhật'}
      </button>

      {lastResult && (
        <div
          className={`rounded-(--radius-input) px-3 py-2 text-xs ${
            lastResult.ok
              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
              : 'bg-red-500/10 text-red-600 dark:text-red-400'
          }`}
        >
          {lastResult.message}
        </div>
      )}
    </div>
  );
}
