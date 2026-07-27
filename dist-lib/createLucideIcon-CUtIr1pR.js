import { createContext as e, createElement as t, forwardRef as n, useContext as r } from "react";
//#region ../sky-app/node_modules/.pnpm/lucide-react@1.25.0_react@19.2.8/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var i = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), o = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), s = (e) => {
	let t = o(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, c = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, l = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, u = e({}), d = () => r(u), f = n(({ color: e, size: n, strokeWidth: r, absoluteStrokeWidth: a, className: o = "", children: s, iconNode: u, ...f }, p) => {
	let { size: m = 24, strokeWidth: h = 2, absoluteStrokeWidth: g = !1, color: _ = "currentColor", className: v = "" } = d() ?? {}, y = a ?? g ? Number(r ?? h) * 24 / Number(n ?? m) : r ?? h;
	return t("svg", {
		ref: p,
		...c,
		width: n ?? m ?? c.width,
		height: n ?? m ?? c.height,
		stroke: e ?? _,
		strokeWidth: y,
		className: i("lucide", v, o),
		...!s && !l(f) && { "aria-hidden": "true" },
		...f
	}, [...u.map(([e, n]) => t(e, n)), ...Array.isArray(s) ? s : [s]]);
}), p = (e, r) => {
	let o = n(({ className: n, ...o }, c) => t(f, {
		ref: c,
		iconNode: r,
		className: i(`lucide-${a(s(e))}`, `lucide-${e}`, n),
		...o
	}));
	return o.displayName = s(e), o;
};
//#endregion
export { p as t };
