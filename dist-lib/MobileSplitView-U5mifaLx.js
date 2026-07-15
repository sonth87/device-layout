import { H as e, V as t, n } from "./MobileAppViewer-BQvzaP0h.js";
import { n as r } from "./AppViewport-BDJLAndL.js";
import { createContext as i, useContext as a, useEffect as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/apps/MobileSplitView.tsx
var l = i(null);
function u() {
	return a(l);
}
var d = {
	initial: { x: "100%" },
	animate: { x: 0 },
	exit: { x: "100%" },
	transition: {
		type: "spring",
		stiffness: 420,
		damping: 40
	}
};
function f({ list: i, detail: a, onBack: u, className: f = "", listClassName: p = "", detailClassName: m = "", sidebarWidth: h = "w-60" }) {
	let { width: g } = r(), _ = g > 0 && g < 480, v = n();
	return o(() => {
		if (!(!_ || !v)) return v(a !== null), () => v(!1);
	}, [
		_,
		a,
		v
	]), _ ? /* @__PURE__ */ c("div", {
		className: `relative h-full overflow-hidden ${f}`,
		children: [/* @__PURE__ */ s("div", {
			className: `absolute inset-0 ${p}`,
			children: i
		}), /* @__PURE__ */ s(e, { children: a !== null && /* @__PURE__ */ s(t.div, {
			...d,
			className: `absolute inset-0 bg-white dark:bg-[#0F1115] ${m}`,
			children: /* @__PURE__ */ s(l.Provider, {
				value: u,
				children: a
			})
		}, "detail") })]
	}) : /* @__PURE__ */ c("div", {
		className: `flex h-full ${f}`,
		children: [/* @__PURE__ */ s("aside", {
			className: `${h} shrink-0 border-r border-black/10 dark:border-white/10 overflow-y-auto ${p}`,
			children: i
		}), /* @__PURE__ */ s("main", {
			className: `flex-1 min-w-0 ${m}`,
			children: a ?? /* @__PURE__ */ s("div", {
				className: "flex h-full items-center justify-center text-sm text-black/30 dark:text-white/30",
				children: "Select an item"
			})
		})]
	});
}
//#endregion
export { u as n, f as t };
