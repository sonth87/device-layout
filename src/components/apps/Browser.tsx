"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { useAppTranslation } from "@/hooks/useAppTranslation";
import { useBrowser } from "@/hooks/useBrowser";

const BROWSER_LOCALE = {
  en: {
    placeholder: "Search or enter URL...",
    openInNewTab: "Open in new tab",
  },
  vi: {
    placeholder: "Tìm kiếm hoặc nhập URL...",
    openInNewTab: "Mở trong tab mới",
  },
  ja: {
    placeholder: "検索またはURLを入力...",
    openInNewTab: "新しいタブで開く",
  },
  ko: {
    placeholder: "검색 또는 URL 입력...",
    openInNewTab: "새 탭에서 열기",
  },
  zh: {
    placeholder: "搜索或输入网址...",
    openInNewTab: "在新标签页中打开",
  },
  th: {
    placeholder: "ค้นหาหรือป้อน URL...",
    openInNewTab: "เปิดในแท็บใหม่",
  },
} as const;
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Lock,
  X,
  ExternalLink,
} from "lucide-react";
import type { AppContentProps } from "./AppRegistry";
import { useStore } from "@/store";

export function Browser({ appId }: AppContentProps) {
  const { t } = useAppTranslation(appId, BROWSER_LOCALE);
  const appConfig = useStore((s) => s.apps[appId]);
  const browser = useBrowser();
  const initialUrl = appConfig?.iframeUrl ?? "https://dantri.com.vn";

  // Log browser environment detection on mount
  useEffect(() => {
    console.log(
      `[Browser] Initialized with ${browser.isElectron() ? "Electron" : "Web"} provider`
    );
  }, [browser]);

  const [navHistory, setNavHistory] = useState<string[]>([initialUrl]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [inputUrl, setInputUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);

  const url = navHistory[historyIdx];
  const canGoBack = historyIdx > 0;
  const canGoForward = historyIdx < navHistory.length - 1;

  // Swipe gesture accumulator for edge strips
  const swipeAccRef = useRef(0);
  const swipeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Edge-strip pointer drag tracking
  const edgeDragRef = useRef<{ startX: number; side: "left" | "right" } | null>(
    null,
  );

  const navigate = (target: string) => {
    let normalized = target.trim();
    if (
      !normalized.startsWith("http://") &&
      !normalized.startsWith("https://")
    ) {
      if (/^[^/\s]+\.[^/\s]+/.test(normalized)) {
        normalized = `https://${normalized}`;
      } else {
        normalized = `https://www.google.com/search?q=${encodeURIComponent(normalized)}`;
      }
    }
    setNavHistory((prev) => [...prev.slice(0, historyIdx + 1), normalized]);
    setHistoryIdx((prev) => prev + 1);
    setInputUrl(normalized);
    setLoading(true);
  };

  const goBack = () => {
    if (!canGoBack) return;
    const idx = historyIdx - 1;
    setHistoryIdx(idx);
    setInputUrl(navHistory[idx]);
    setLoading(true);
  };

  const goForward = () => {
    if (!canGoForward) return;
    const idx = historyIdx + 1;
    setHistoryIdx(idx);
    setInputUrl(navHistory[idx]);
    setLoading(true);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(inputUrl);
  };

  const openInNewTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  /** Horizontal wheel on the nav bar area → back/forward */
  const handleNavBarWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) return; // handled by GestureBlocker
    const dx = e.deltaX;
    if (Math.abs(dx) < Math.abs(e.deltaY)) return; // vertical scroll, ignore
    swipeAccRef.current += dx;
    clearTimeout(swipeTimerRef.current);
    swipeTimerRef.current = setTimeout(() => {
      swipeAccRef.current = 0;
    }, 300);
    if (swipeAccRef.current < -100) {
      goBack();
      swipeAccRef.current = 0;
    } else if (swipeAccRef.current > 100) {
      goForward();
      swipeAccRef.current = 0;
    }
  };

  /** Edge strip pointer handlers — left strip = back, right strip = forward */
  const onEdgePointerDown = (e: React.PointerEvent, side: "left" | "right") => {
    edgeDragRef.current = { startX: e.clientX, side };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onEdgePointerUp = (e: React.PointerEvent) => {
    const drag = edgeDragRef.current;
    if (!drag) return;
    edgeDragRef.current = null;
    const delta = e.clientX - drag.startX;
    if (drag.side === "left" && delta > 40) goBack();
    if (drag.side === "right" && delta < -40) goForward();
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115]">
      {/* Navigation bar — also catches horizontal swipe for back/forward */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#151821] shrink-0"
        onWheel={handleNavBarWheel}
      >
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30"
          onClick={goBack}
          disabled={!canGoBack}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30"
          onClick={goForward}
          disabled={!canGoForward}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10"
          onClick={() => navigate(url)}
        >
          <RefreshCw
            className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
          />
        </button>

        {/* URL bar */}
        <form
          onSubmit={onSubmit}
          className="flex-1 flex items-center gap-1.5 bg-white dark:bg-neutral-700 rounded-md px-2 py-1 border border-black/10 dark:border-white/10"
        >
          <Lock className="w-3 h-3 text-black/30 dark:text-white/30 shrink-0" />
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="flex-1 bg-transparent text-xs outline-none"
            placeholder={t.placeholder}
          />
          {inputUrl && (
            <button type="button" onClick={() => setInputUrl("")}>
              <X className="w-3 h-3 text-black/30 dark:text-white/30" />
            </button>
          )}
        </form>

        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-black/50 dark:text-white/50"
          onClick={openInNewTab}
          title={t.openInNewTab}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* iframe content + edge gesture strips for back/forward */}
      <div className="flex-1 relative overflow-hidden">
        <iframe
          src={url}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          title="Browser content"
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0F1115] z-10">
            <RefreshCw className="w-6 h-6 animate-spin text-black/30 dark:text-white/30" />
          </div>
        )}

        {/* Left edge strip — drag right to go back */}
        <div
          className="absolute left-0 top-0 bottom-0 w-3 z-20 cursor-w-resize"
          onPointerDown={(e) => onEdgePointerDown(e, "left")}
          onPointerUp={onEdgePointerUp}
          onPointerCancel={() => {
            edgeDragRef.current = null;
          }}
        />
        {/* Right edge strip — drag left to go forward */}
        <div
          className="absolute right-0 top-0 bottom-0 w-3 z-20 cursor-e-resize"
          onPointerDown={(e) => onEdgePointerDown(e, "right")}
          onPointerUp={onEdgePointerUp}
          onPointerCancel={() => {
            edgeDragRef.current = null;
          }}
        />
      </div>
    </div>
  );
}
