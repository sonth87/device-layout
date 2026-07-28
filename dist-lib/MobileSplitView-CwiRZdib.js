import { C as e, n as t, w as n } from "./MobileAppViewer-DsHz8IN2.js";
import { t as r } from "./store-XIGE1L5-.js";
import { n as i } from "./AppViewport-BDJLAndL.js";
import { createContext as a, useContext as o, useEffect as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/apps/MobileSplitView.tsx
var f = a(null);
function p() {
	return o(f);
}
function m(e) {
	let t = r((e) => e.osTheme), n = t === "iphone" || t === "android", [a, o] = l(() => n ? null : e), { width: u } = i(), d = u > 0 && u < 480, f = c(n);
	return s(() => {
		if (u !== 0 && f.current !== d) {
			let t = d ? null : e;
			requestAnimationFrame(() => {
				o(t);
			}), f.current = d;
		}
	}, [
		u,
		d,
		e
	]), [a, o];
}
var h = {
	initial: { x: "100%" },
	animate: { x: 0 },
	exit: { x: "100%" },
	transition: {
		type: "spring",
		stiffness: 420,
		damping: 40
	}
};
function g({ list: a, detail: o, onBack: c, className: l = "", listClassName: p = "", detailClassName: m = "", sidebarWidth: g = "w-60" }) {
	let _ = r((e) => e.osTheme), v = _ === "iphone" || _ === "android", { width: y } = i(), b = y > 0 && y < 480 || y === 0 && v, x = t();
	return s(() => {
		if (!(!b || !x)) return x(o !== null), () => x(!1);
	}, [
		b,
		o,
		x
	]), b ? /* @__PURE__ */ d("div", {
		className: `relative h-full overflow-hidden ${l}`,
		children: [/* @__PURE__ */ u("div", {
			className: `absolute inset-0 ${p}`,
			children: a
		}), /* @__PURE__ */ u(n, { children: o !== null && /* @__PURE__ */ u(e.div, {
			...h,
			className: `absolute inset-0 bg-white dark:bg-[#0F1115] ${m}`,
			children: /* @__PURE__ */ u(f.Provider, {
				value: c,
				children: o
			})
		}, "detail") })]
	}) : /* @__PURE__ */ d("div", {
		className: `flex h-full ${l}`,
		children: [/* @__PURE__ */ u("aside", {
			className: `${g} shrink-0 border-r border-black/10 dark:border-white/10 overflow-y-auto ${p}`,
			children: a
		}), /* @__PURE__ */ u("main", {
			className: `flex-1 min-w-0 ${m}`,
			children: o ?? /* @__PURE__ */ u("div", {
				className: "flex h-full items-center justify-center text-sm text-black/30 dark:text-white/30",
				children: "Select an item"
			})
		})]
	});
}
//#endregion
export { p as n, m as r, g as t };
