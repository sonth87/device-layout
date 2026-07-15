import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./chevron-right-BcSxNxws.js";
import { t as n } from "./useAppLayout-DfaXs-1a.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/apps/ui/AppSection.tsx
function o({ title: t, description: n, children: r, className: o }) {
	return /* @__PURE__ */ a("section", {
		className: e("space-y-3", o),
		children: [(t || n) && /* @__PURE__ */ a("div", { children: [t && /* @__PURE__ */ i("h2", {
			className: "text-[13px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40 px-1",
			children: t
		}), n && /* @__PURE__ */ i("p", {
			className: "text-xs text-black/40 dark:text-white/40 mt-0.5 px-1",
			children: n
		})] }), r]
	});
}
//#endregion
//#region src/components/apps/ui/AppListGroup.tsx
function s({ children: t, className: n }) {
	return /* @__PURE__ */ i("div", {
		className: e("rounded-xl overflow-hidden", "divide-y divide-black/8 dark:divide-white/8", "bg-white dark:bg-white/5", "border border-black/8 dark:border-white/8", n),
		children: t
	});
}
//#endregion
//#region src/components/apps/ui/AppListRow.tsx
function c({ label: n, subtitle: o, icon: s, value: c, control: l, onPress: u, active: d, disabled: f, className: p }) {
	let m = /* @__PURE__ */ a(r, { children: [
		s && /* @__PURE__ */ i("span", {
			className: "shrink-0 text-black/50 dark:text-white/50",
			children: s
		}),
		/* @__PURE__ */ a("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ i("span", {
				className: e("text-[15px] leading-tight", d ? "font-medium" : "text-black dark:text-white", f && "opacity-40"),
				style: { color: d ? "var(--accent-color)" : void 0 },
				children: n
			}), o && /* @__PURE__ */ i("p", {
				className: "text-[12px] text-black/40 dark:text-white/40 mt-0.5 leading-tight",
				children: o
			})]
		}),
		l ? /* @__PURE__ */ i("span", {
			className: "shrink-0 ml-3",
			children: l
		}) : c === void 0 ? d && !u ? /* @__PURE__ */ i("svg", {
			className: "w-4 h-4 shrink-0 ml-3",
			style: { color: "var(--accent-color)" },
			fill: "none",
			viewBox: "0 0 24 24",
			stroke: "currentColor",
			strokeWidth: 2.5,
			children: /* @__PURE__ */ i("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M5 13l4 4L19 7"
			})
		}) : null : /* @__PURE__ */ i("span", {
			className: "shrink-0 ml-3 text-[15px] text-black/40 dark:text-white/40",
			children: c
		}),
		u && !l && /* @__PURE__ */ i(t, { className: "w-4 h-4 text-black/25 dark:text-white/25 shrink-0 ml-1" })
	] }), h = e("w-full flex items-center gap-3 px-4 py-3 text-left transition-colors", u && !f && "hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/8 dark:active:bg-white/8", f && "pointer-events-none", p);
	return u ? /* @__PURE__ */ i("button", {
		onClick: u,
		disabled: f,
		className: h,
		children: m
	}) : /* @__PURE__ */ i("div", {
		className: h,
		children: m
	});
}
//#endregion
//#region src/components/apps/ui/AppToggle.tsx
function l({ checked: t, onChange: n, disabled: r }) {
	return /* @__PURE__ */ i("button", {
		role: "switch",
		"aria-checked": t,
		disabled: r,
		onClick: (e) => {
			e.stopPropagation(), n(!t);
		},
		className: e("relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors duration-200", !t && "bg-black/15 dark:bg-white/20", r && "opacity-40 pointer-events-none"),
		style: { backgroundColor: t ? "var(--accent-color)" : void 0 },
		children: /* @__PURE__ */ i("span", { className: e("absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md transition-all duration-200", t ? "left-[22px]" : "left-[2px]") })
	});
}
//#endregion
//#region src/components/apps/ui/AppGrid.tsx
function u({ narrow: t = 2, medium: r = 3, wide: a = 4, gap: o = "8px", children: s, className: c }) {
	let { cols: l } = n(), u = l(t, r, a);
	return /* @__PURE__ */ i("div", {
		className: e("grid", c),
		style: {
			gridTemplateColumns: `repeat(${u}, minmax(0, 1fr))`,
			gap: o
		},
		children: s
	});
}
//#endregion
export { o as a, s as i, l as n, c as r, u as t };
