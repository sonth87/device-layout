import { t as e } from "./store-DU55EtUQ.js";
import { t } from "./createLucideIcon--WjuKCts.js";
import { t as n } from "./refresh-cw-BNk9TuR7.js";
import { t as r } from "./x-BYw6fhgP.js";
import { t as i } from "./useAppTranslation-6c6n7ofM.js";
import { useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
var l = t("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), u = t("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), d = t("external-link", [
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
]), f = t("lock", [["rect", {
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
}]]), p = {
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
function m({ appId: t }) {
	let { t: m } = i(t, p), h = e((e) => e.apps[t])?.iframeUrl ?? "https://dantri.com.vn", [g, _] = o([h]), [v, y] = o(0), [b, x] = o(h), [S, C] = o(!1), w = g[v], T = v > 0, E = v < g.length - 1, D = a(0), O = a(void 0), k = a(null), A = (e) => {
		let t = e.trim();
		!t.startsWith("http://") && !t.startsWith("https://") && (t = /^[^/\s]+\.[^/\s]+/.test(t) ? `https://${t}` : `https://www.google.com/search?q=${encodeURIComponent(t)}`), _((e) => [...e.slice(0, v + 1), t]), y((e) => e + 1), x(t), C(!0);
	}, j = () => {
		if (!T) return;
		let e = v - 1;
		y(e), x(g[e]), C(!0);
	}, M = () => {
		if (!E) return;
		let e = v + 1;
		y(e), x(g[e]), C(!0);
	}, N = (e) => {
		e.preventDefault(), A(b);
	}, P = () => {
		window.open(w, "_blank", "noopener,noreferrer");
	}, F = (e) => {
		if (e.ctrlKey) return;
		let t = e.deltaX;
		Math.abs(t) < Math.abs(e.deltaY) || (D.current += t, clearTimeout(O.current), O.current = setTimeout(() => {
			D.current = 0;
		}, 300), D.current < -100 ? (j(), D.current = 0) : D.current > 100 && (M(), D.current = 0));
	}, I = (e, t) => {
		k.current = {
			startX: e.clientX,
			side: t
		}, e.currentTarget.setPointerCapture(e.pointerId);
	}, L = (e) => {
		let t = k.current;
		if (!t) return;
		k.current = null;
		let n = e.clientX - t.startX;
		t.side === "left" && n > 40 && j(), t.side === "right" && n < -40 && M();
	};
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col h-full bg-white dark:bg-[#0F1115]",
		children: [/* @__PURE__ */ c("div", {
			className: "flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#151821] shrink-0",
			onWheel: F,
			children: [
				/* @__PURE__ */ s("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30",
					onClick: j,
					disabled: !T,
					children: /* @__PURE__ */ s(l, { className: "w-3.5 h-3.5" })
				}),
				/* @__PURE__ */ s("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30",
					onClick: M,
					disabled: !E,
					children: /* @__PURE__ */ s(u, { className: "w-3.5 h-3.5" })
				}),
				/* @__PURE__ */ s("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10",
					onClick: () => A(w),
					children: /* @__PURE__ */ s(n, { className: `w-3.5 h-3.5 ${S ? "animate-spin" : ""}` })
				}),
				/* @__PURE__ */ c("form", {
					onSubmit: N,
					className: "flex-1 flex items-center gap-1.5 bg-white dark:bg-neutral-700 rounded-md px-2 py-1 border border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ s(f, { className: "w-3 h-3 text-black/30 dark:text-white/30 shrink-0" }),
						/* @__PURE__ */ s("input", {
							value: b,
							onChange: (e) => x(e.target.value),
							className: "flex-1 bg-transparent text-xs outline-none",
							placeholder: m.placeholder
						}),
						b && /* @__PURE__ */ s("button", {
							type: "button",
							onClick: () => x(""),
							children: /* @__PURE__ */ s(r, { className: "w-3 h-3 text-black/30 dark:text-white/30" })
						})
					]
				}),
				/* @__PURE__ */ s("button", {
					className: "p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-black/50 dark:text-white/50",
					onClick: P,
					title: m.openInNewTab,
					children: /* @__PURE__ */ s(d, { className: "w-3.5 h-3.5" })
				})
			]
		}), /* @__PURE__ */ c("div", {
			className: "flex-1 relative overflow-hidden",
			children: [
				/* @__PURE__ */ s("iframe", {
					src: w,
					className: "w-full h-full border-0",
					sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
					onLoad: () => C(!1),
					onError: () => C(!1),
					title: "Browser content"
				}),
				S && /* @__PURE__ */ s("div", {
					className: "absolute inset-0 flex items-center justify-center bg-white dark:bg-[#0F1115] z-10",
					children: /* @__PURE__ */ s(n, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
				}),
				/* @__PURE__ */ s("div", {
					className: "absolute left-0 top-0 bottom-0 w-3 z-20 cursor-w-resize",
					onPointerDown: (e) => I(e, "left"),
					onPointerUp: L,
					onPointerCancel: () => {
						k.current = null;
					}
				}),
				/* @__PURE__ */ s("div", {
					className: "absolute right-0 top-0 bottom-0 w-3 z-20 cursor-e-resize",
					onPointerDown: (e) => I(e, "right"),
					onPointerUp: L,
					onPointerCancel: () => {
						k.current = null;
					}
				})
			]
		})]
	});
}
//#endregion
export { m as Browser };
