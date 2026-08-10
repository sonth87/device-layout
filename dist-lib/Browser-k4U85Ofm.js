import { t as e } from "./store-D89CiGUZ.js";
import { t } from "./createLucideIcon--WjuKCts.js";
import { t as n } from "./refresh-cw-BNk9TuR7.js";
import { t as r } from "./x-BYw6fhgP.js";
import { t as i } from "./useAppTranslation-Bw8OYmig.js";
import { t as a } from "./useBrowser-DEKA4mMw.js";
import { useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
var d = t("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), f = t("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), p = t("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), m = t("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), h = {
	en: {
		placeholder: "Search or enter URL...",
		openInNewTab: "Open in new tab"
	},
	vi: {
		placeholder: "Tìm kiếm hoặc nhập URL...",
		openInNewTab: "Mở trong tab mới"
	},
	ja: {
		placeholder: "検索またはURLを入力...",
		openInNewTab: "新しいタブで開く"
	},
	ko: {
		placeholder: "검색 또는 URL 입력...",
		openInNewTab: "새 탭에서 열기"
	},
	zh: {
		placeholder: "搜索或输入网址...",
		openInNewTab: "在新标签页中打开"
	},
	th: {
		placeholder: "ค้นหาหรือป้อน URL...",
		openInNewTab: "เปิดในแท็บใหม่"
	}
};
function g({ appId: t }) {
	let { t: g } = i(t, h), _ = e((e) => e.apps[t]), v = a(), y = _?.iframeUrl ?? "https://dantri.com.vn";
	o(() => {
		console.log(`[Browser] Initialized with ${v.isElectron() ? "Electron" : "Web"} provider`);
	}, [v]);
	let [b, x] = c([y]), [S, C] = c(0), [w, T] = c(y), [E, D] = c(!1), O = b[S], k = S > 0, A = S < b.length - 1, j = s(0), M = s(void 0), N = s(null), P = (e) => {
		let t = e.trim();
		!t.startsWith("http://") && !t.startsWith("https://") && (t = /^[^/\s]+\.[^/\s]+/.test(t) ? `https://${t}` : `https://www.google.com/search?q=${encodeURIComponent(t)}`), x((e) => [...e.slice(0, S + 1), t]), C((e) => e + 1), T(t), D(!0);
	}, F = () => {
		if (!k) return;
		let e = S - 1;
		C(e), T(b[e]), D(!0);
	}, I = () => {
		if (!A) return;
		let e = S + 1;
		C(e), T(b[e]), D(!0);
	}, L = (e) => {
		e.preventDefault(), P(w);
	}, R = () => {
		window.open(O, "_blank", "noopener,noreferrer");
	}, z = (e) => {
		if (e.ctrlKey) return;
		let t = e.deltaX;
		Math.abs(t) < Math.abs(e.deltaY) || (j.current += t, clearTimeout(M.current), M.current = setTimeout(() => {
			j.current = 0;
		}, 300), j.current < -100 ? (F(), j.current = 0) : j.current > 100 && (I(), j.current = 0));
	}, B = (e, t) => {
		N.current = {
			startX: e.clientX,
			side: t
		}, e.currentTarget.setPointerCapture(e.pointerId);
	}, V = (e) => {
		let t = N.current;
		if (!t) return;
		N.current = null;
		let n = e.clientX - t.startX;
		t.side === "left" && n > 40 && F(), t.side === "right" && n < -40 && I();
	};
	return /* @__PURE__ */ u("div", {
		className: "flex flex-col h-full bg-white dark:bg-[#0F1115]",
		children: [/* @__PURE__ */ u("div", {
			className: "flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#151821] shrink-0",
			onWheel: z,
			children: [
				/* @__PURE__ */ l("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30",
					onClick: F,
					disabled: !k,
					children: /* @__PURE__ */ l(d, { className: "w-3.5 h-3.5" })
				}),
				/* @__PURE__ */ l("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30",
					onClick: I,
					disabled: !A,
					children: /* @__PURE__ */ l(f, { className: "w-3.5 h-3.5" })
				}),
				/* @__PURE__ */ l("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10",
					onClick: () => P(O),
					children: /* @__PURE__ */ l(n, { className: `w-3.5 h-3.5 ${E ? "animate-spin" : ""}` })
				}),
				/* @__PURE__ */ u("form", {
					onSubmit: L,
					className: "flex-1 flex items-center gap-1.5 bg-white dark:bg-neutral-700 rounded-md px-2 py-1 border border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ l(m, { className: "w-3 h-3 text-black/30 dark:text-white/30 shrink-0" }),
						/* @__PURE__ */ l("input", {
							value: w,
							onChange: (e) => T(e.target.value),
							className: "flex-1 bg-transparent text-xs outline-none",
							placeholder: g.placeholder
						}),
						w && /* @__PURE__ */ l("button", {
							type: "button",
							onClick: () => T(""),
							children: /* @__PURE__ */ l(r, { className: "w-3 h-3 text-black/30 dark:text-white/30" })
						})
					]
				}),
				/* @__PURE__ */ l("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-black/50 dark:text-white/50",
					onClick: R,
					title: g.openInNewTab,
					children: /* @__PURE__ */ l(p, { className: "w-3.5 h-3.5" })
				})
			]
		}), /* @__PURE__ */ u("div", {
			className: "flex-1 relative overflow-hidden",
			children: [
				/* @__PURE__ */ l("iframe", {
					src: O,
					className: "w-full h-full border-0",
					sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
					onLoad: () => D(!1),
					onError: () => D(!1),
					title: "Browser content"
				}),
				E && /* @__PURE__ */ l("div", {
					className: "absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0F1115] z-10",
					children: /* @__PURE__ */ l(n, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
				}),
				/* @__PURE__ */ l("div", {
					className: "absolute left-0 top-0 bottom-0 w-3 z-20 cursor-w-resize",
					onPointerDown: (e) => B(e, "left"),
					onPointerUp: V,
					onPointerCancel: () => {
						N.current = null;
					}
				}),
				/* @__PURE__ */ l("div", {
					className: "absolute right-0 top-0 bottom-0 w-3 z-20 cursor-e-resize",
					onPointerDown: (e) => B(e, "right"),
					onPointerUp: V,
					onPointerCancel: () => {
						N.current = null;
					}
				})
			]
		})]
	});
}
//#endregion
export { g as Browser };
