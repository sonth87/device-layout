import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./useAppLayout-DfaXs-1a.js";
import { a as n, i as r, n as i, r as a, t as o } from "./ui-D0242z7L.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/apps/settings/TerminalSettings.tsx
var u = [
	12,
	13,
	14,
	16,
	18,
	20
], d = [
	{
		id: "dark",
		label: "Dark",
		bg: "#1c1c1e",
		fg: "#ffffff"
	},
	{
		id: "light",
		label: "Light",
		bg: "#ffffff",
		fg: "#1c1c1e"
	},
	{
		id: "solarized",
		label: "Solarized",
		bg: "#002b36",
		fg: "#839496"
	},
	{
		id: "dracula",
		label: "Dracula",
		bg: "#282a36",
		fg: "#f8f8f2"
	}
], f = [
	"block",
	"bar",
	"underline"
];
function p() {
	let [p, m] = s(14), [h, g] = s("dark"), [_, v] = s("block"), [y, b] = s(!1), { isNarrow: x } = t();
	return /* @__PURE__ */ l("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ c(n, {
				title: "Theme",
				children: x ? /* @__PURE__ */ c(r, { children: d.map((e) => /* @__PURE__ */ c(a, {
					label: e.label,
					icon: /* @__PURE__ */ c("span", {
						className: "w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[10px] font-mono",
						style: {
							background: e.bg,
							color: e.fg
						},
						children: "$"
					}),
					active: h === e.id,
					onPress: () => g(e.id)
				}, e.id)) }) : /* @__PURE__ */ c(o, {
					narrow: 2,
					medium: 4,
					wide: 4,
					gap: "12px",
					children: d.map((t) => /* @__PURE__ */ l("button", {
						onClick: () => g(t.id),
						className: e("rounded-xl border-2 p-3 text-left transition-all", h === t.id ? "border-blue-500" : "border-transparent hover:border-black/10 dark:hover:border-white/10"),
						style: { background: t.bg },
						children: [/* @__PURE__ */ c("p", {
							className: "text-xs font-mono mb-1",
							style: { color: t.fg },
							children: "$ _"
						}), /* @__PURE__ */ c("p", {
							className: "text-xs font-medium",
							style: { color: t.fg },
							children: t.label
						})]
					}, t.id))
				})
			}),
			/* @__PURE__ */ c(n, {
				title: "Font Size",
				children: x ? /* @__PURE__ */ c(r, { children: u.map((e) => /* @__PURE__ */ c(a, {
					label: `${e}px`,
					active: p === e,
					onPress: () => m(e)
				}, e)) }) : /* @__PURE__ */ c("div", {
					className: "flex flex-wrap gap-2",
					children: u.map((t) => /* @__PURE__ */ l("button", {
						onClick: () => m(t),
						className: e("rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all", p === t ? "bg-blue-500 text-white" : "bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [t, "px"]
					}, t))
				})
			}),
			/* @__PURE__ */ c(n, {
				title: "Cursor Style",
				children: x ? /* @__PURE__ */ c(r, { children: f.map((e) => /* @__PURE__ */ c(a, {
					label: e.charAt(0).toUpperCase() + e.slice(1),
					active: _ === e,
					onPress: () => v(e)
				}, e)) }) : /* @__PURE__ */ c("div", {
					className: "flex gap-2",
					children: f.map((t) => /* @__PURE__ */ c("button", {
						onClick: () => v(t),
						className: e("rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all", _ === t ? "bg-blue-500 text-white" : "bg-white dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10"),
						children: t
					}, t))
				})
			}),
			/* @__PURE__ */ c(n, {
				title: "Sound",
				children: /* @__PURE__ */ c(r, { children: /* @__PURE__ */ c(a, {
					label: "Bell Sound",
					subtitle: "Play a sound when the terminal bell is triggered",
					control: /* @__PURE__ */ c(i, {
						checked: y,
						onChange: b
					})
				}) })
			})
		]
	});
}
//#endregion
export { p as TerminalSettings };
