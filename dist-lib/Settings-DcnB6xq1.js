import { g as e } from "./MobileAppViewer-DbLQ9qcr.js";
import { t } from "./store-DYo5O0gz.js";
import { t as n } from "./utils-B6YmNDS2.js";
import { t as r } from "./createLucideIcon--WjuKCts.js";
import { d as i, f as a, g as o, i as s, n as c, o as l, p as u, s as d, u as f } from "./update-actions-vjwZ_SeR.js";
import { t as p } from "./settings-B5duO7Zc.js";
import { n as m } from "./music-D8WdwHqS.js";
import { t as h } from "./plus-Dx6tdmvY.js";
import { t as g } from "./refresh-cw-BNk9TuR7.js";
import { t as _ } from "./useTranslation-BFiuUWuF.js";
import { n as v, t as y } from "./holidays-service-CqYEsHC1.js";
import { t as b } from "./useAppLayout-DfaXs-1a.js";
import { n as x, r as S, t as C } from "./MobileSplitView-klzRPBSF.js";
import { a as w, i as T, n as E, r as D, t as O } from "./ui-D0242z7L.js";
import { Suspense as k, lazy as A, useCallback as j, useEffect as M, useRef as N, useState as P } from "react";
import { Fragment as F, jsx as I, jsxs as L } from "react/jsx-runtime";
var ee = r("layout-grid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]), te = r("paintbrush", [
	["path", {
		d: "m14.622 17.897-10.68-2.913",
		key: "vj2p1u"
	}],
	["path", {
		d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
		key: "18tc5c"
	}],
	["path", {
		d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
		key: "ytzfxy"
	}]
]), R = {
	en: "English (US)",
	vi: "Tiếng Việt",
	ja: "日本語",
	ko: "한국어",
	zh: "简体中文",
	th: "ไทย"
}, z = {
	en: "🇺🇸",
	vi: "🇻🇳",
	ja: "🇯🇵",
	ko: "🇰🇷",
	zh: "🇨🇳",
	th: "🇹🇭"
}, B = [
	"en",
	"vi",
	"ja",
	"ko",
	"zh",
	"th"
], ne = Object.keys(y);
function re() {
	let { t: e, language: n } = _(), r = t((e) => e.setLanguage), i = t((e) => e.country) ?? "vn", a = t((e) => e.setCountry), [o, s] = P(!1), [c, l] = P(!1);
	return /* @__PURE__ */ I("div", {
		className: "space-y-2",
		children: [
			{
				id: "about",
				label: e.about,
				description: "Desktop Layout v1.0.0",
				expandable: !0
			},
			{
				id: "lang",
				label: e.languageRegion,
				description: `${z[n]} ${R[n]}`,
				expandable: !0
			},
			{
				id: "dateTime",
				label: e.dateTime,
				description: (/* @__PURE__ */ new Date()).toLocaleDateString(n === "en" ? "en-US" : n === "vi" ? "vi-VN" : n === "ja" ? "ja-JP" : n === "ko" ? "ko-KR" : n === "zh" ? "zh-CN" : n === "th" ? "th-TH" : "en-US", { dateStyle: "long" }),
				expandable: !1
			},
			{
				id: "airDrop",
				label: e.airDrop,
				description: "Configured for nearby devices",
				expandable: !1
			},
			{
				id: "sharing",
				label: e.sharing,
				description: "Hostname: desktop-layout",
				expandable: !1
			},
			{
				id: "startupDisk",
				label: e.startupDisk,
				description: "Macintosh HD",
				expandable: !1
			}
		].map(({ id: t, label: u, description: d, expandable: f }) => {
			let p = t === "about", m = t === "lang";
			return /* @__PURE__ */ L("div", {
				className: "overflow-hidden rounded-[var(--radius-card)] bg-white dark:bg-white/5 shadow-sm",
				children: [
					/* @__PURE__ */ L("div", {
						onClick: () => {
							p ? s((e) => !e) : m && l((e) => !e);
						},
						className: `flex items-center justify-between px-4 py-3 select-none ${f ? "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/8 transition-colors" : ""}`,
						children: [/* @__PURE__ */ I("span", {
							className: "text-sm font-medium text-black/90 dark:text-white/90",
							children: u
						}), /* @__PURE__ */ L("span", {
							className: "text-xs text-black/40 dark:text-white/40 flex items-center gap-1.5 min-w-0 max-w-[55%] justify-end",
							children: [/* @__PURE__ */ I("span", {
								className: "truncate",
								children: d
							}), /* @__PURE__ */ I("svg", {
								className: `w-3.5 h-3.5 opacity-35 shrink-0 transition-transform duration-200 ${f && (p ? o : m && c) ? "rotate-90" : ""}`,
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ I("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M9 5l7 7-7 7"
								})
							})]
						})]
					}),
					p && /* @__PURE__ */ I("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${o ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ I("div", {
							className: "py-3 px-4 space-y-0",
							children: [
								{
									label: "Author",
									value: /* @__PURE__ */ I("span", {
										className: "font-semibold text-blue-500 tracking-wider",
										children: "SKYLINE"
									})
								},
								{
									label: "Name",
									value: /* @__PURE__ */ I("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "SONTH"
									})
								},
								{
									label: "GitHub",
									value: /* @__PURE__ */ L("a", {
										href: "https://github.com/sonth87",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-blue-500 hover:underline flex items-center gap-1 font-mono",
										children: ["github/sonth87", /* @__PURE__ */ I("svg", {
											className: "w-3 h-3",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ I("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											})
										})]
									})
								},
								{
									label: "Date of Birth",
									value: /* @__PURE__ */ I("span", {
										className: "text-black/80 dark:text-white/80 font-mono",
										children: "--/--/----"
									})
								},
								{
									label: "Country",
									value: /* @__PURE__ */ I("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "🇻🇳 VietNam"
									})
								}
							].map((e, t) => /* @__PURE__ */ L("div", {
								className: `flex justify-between items-center py-2 text-xs ${t > 0 ? "border-t border-black/5 dark:border-white/5" : ""}`,
								children: [/* @__PURE__ */ I("span", {
									className: "text-black/50 dark:text-white/50 font-medium",
									children: e.label
								}), e.value]
							}, e.label))
						})
					}),
					m && /* @__PURE__ */ I("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${c ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ L("div", {
							className: "py-3.5 px-4 space-y-3.5",
							children: [/* @__PURE__ */ L("div", { children: [/* @__PURE__ */ I("span", {
								className: "text-xs text-black/50 dark:text-white/50 font-medium block mb-2",
								children: e.preferredLanguage
							}), /* @__PURE__ */ L("div", {
								className: "relative",
								children: [/* @__PURE__ */ I("select", {
									value: n,
									onChange: (e) => r(e.target.value),
									className: "w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8",
									children: B.map((e) => /* @__PURE__ */ L("option", {
										value: e,
										className: "bg-white dark:bg-[#151821] text-black dark:text-white",
										children: [
											z[e],
											" ",
											R[e]
										]
									}, e))
								}), /* @__PURE__ */ I("div", {
									className: "absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40",
									children: /* @__PURE__ */ I("svg", {
										className: "w-3.5 h-3.5 text-black dark:text-white",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ I("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M19 9l-7 7-7-7"
										})
									})
								})]
							})] }), /* @__PURE__ */ L("div", { children: [/* @__PURE__ */ L("span", {
								className: "text-xs text-black/50 dark:text-white/50 font-medium block mb-2",
								children: ["Region / Country", /* @__PURE__ */ I("span", {
									className: "ml-1.5 text-[10px] text-black/30 dark:text-white/30 font-normal",
									children: "(affects holidays)"
								})]
							}), /* @__PURE__ */ L("div", {
								className: "relative",
								children: [/* @__PURE__ */ I("select", {
									value: i,
									onChange: (e) => a(e.target.value),
									className: "w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8",
									children: ne.map((e) => /* @__PURE__ */ L("option", {
										value: e,
										className: "bg-white dark:bg-[#151821] text-black dark:text-white",
										children: [
											v[e]?.flag,
											" ",
											v[e]?.name ?? e.toUpperCase()
										]
									}, e))
								}), /* @__PURE__ */ I("div", {
									className: "absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40",
									children: /* @__PURE__ */ I("svg", {
										className: "w-3.5 h-3.5 text-black dark:text-white",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ I("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M19 9l-7 7-7-7"
										})
									})
								})]
							})] })]
						})
					})
				]
			}, t);
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsAppearance.tsx
var V = [
	"macos",
	"ipad",
	"iphone",
	"windows",
	"android"
], ie = [
	{
		id: "multicolor",
		bg: "bg-gradient-to-tr from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-500",
		label: "Multicolor"
	},
	{
		id: "blue",
		bg: "bg-[#007afe]",
		label: "Blue"
	},
	{
		id: "purple",
		bg: "bg-[#9d3fc6]",
		label: "Purple"
	},
	{
		id: "pink",
		bg: "bg-[#f353a7]",
		label: "Pink"
	},
	{
		id: "red",
		bg: "bg-[#e03b30]",
		label: "Red"
	},
	{
		id: "orange",
		bg: "bg-[#f38218]",
		label: "Orange"
	},
	{
		id: "yellow",
		bg: "bg-[#f5c400]",
		label: "Yellow"
	},
	{
		id: "green",
		bg: "bg-[#63be44]",
		label: "Green"
	},
	{
		id: "graphite",
		bg: "bg-[#8e8e93]",
		label: "Graphite"
	}
], H = [
	{
		id: "automatic",
		label: "Automatic",
		color: "#ffb3b3"
	},
	{
		id: "blue",
		label: "Blue",
		color: "#b3d7ff"
	},
	{
		id: "purple",
		label: "Purple",
		color: "#e5b3ff"
	},
	{
		id: "pink",
		label: "Pink",
		color: "#ffb3df"
	},
	{
		id: "red",
		label: "Red",
		color: "#ffb3b3"
	},
	{
		id: "orange",
		label: "Orange",
		color: "#ffd9b3"
	},
	{
		id: "yellow",
		label: "Yellow",
		color: "#fff5b3"
	},
	{
		id: "green",
		label: "Green",
		color: "#c7ffb3"
	},
	{
		id: "graphite",
		label: "Graphite",
		color: "#d9d9d9"
	}
], ae = {
	multicolor: "#007afe",
	blue: "#007afe",
	purple: "#9d3fc6",
	pink: "#f353a7",
	red: "#e03b30",
	orange: "#f38218",
	yellow: "#f5c400",
	green: "#63be44",
	graphite: "#8e8e93"
};
function oe() {
	let r = t((e) => e.osTheme), i = t((e) => e.colorScheme), a = t((e) => e.resolvedColorScheme), o = t((e) => e.glassEnabled), s = t((e) => e.setOSTheme), c = t((e) => e.setColorScheme), l = t((e) => e.setGlassEnabled), u = t((e) => e.glassMode), d = t((e) => e.setGlassMode), f = t((e) => e.accentColor), p = t((e) => e.highlightColor), m = t((e) => e.allowDragOutOfBounds), h = t((e) => e.setAccentColor), g = t((e) => e.setHighlightColor), v = t((e) => e.setAllowDragOutOfBounds), { t: y, language: x } = _(), { isNarrow: S } = b(), [C, k] = P(!1), A = N(null);
	M(() => {
		let e = (e) => {
			A.current && !A.current.contains(e.target) && k(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let j = H.find((e) => e.id === p) || H[0], F = [
		{
			id: "auto",
			label: y.colorSchemeAuto,
			preview: /* @__PURE__ */ L("div", {
				className: "w-full h-full rounded-lg flex overflow-hidden border border-black/5 dark:border-white/5",
				children: [/* @__PURE__ */ I("div", {
					className: "flex-1 bg-slate-100 p-1.5 flex flex-col gap-1 border-r border-black/5",
					children: /* @__PURE__ */ L("div", {
						className: "flex-1 bg-white rounded-l-md shadow-sm p-1 flex flex-col justify-between border-y border-l border-black/5",
						children: [/* @__PURE__ */ L("div", {
							className: "flex gap-0.5",
							children: [/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-red-400" }), /* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-yellow-400" })]
						}), /* @__PURE__ */ I("div", { className: "h-1.5 bg-red-100 rounded-l w-4" })]
					})
				}), /* @__PURE__ */ I("div", {
					className: "flex-1 bg-[#1b2030] p-1.5 flex flex-col gap-1",
					children: /* @__PURE__ */ L("div", {
						className: "flex-1 bg-[#151821] rounded-r-md shadow-sm p-1 flex flex-col justify-between border-y border-r border-white/5",
						children: [/* @__PURE__ */ L("div", {
							className: "flex gap-0.5 justify-end",
							children: [/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }), /* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-green-400" })]
						}), /* @__PURE__ */ I("div", { className: "h-1.5 bg-red-950 rounded-r w-4 ml-auto" })]
					})
				})]
			})
		},
		{
			id: "light",
			label: y.colorSchemeLight,
			preview: /* @__PURE__ */ I("div", {
				className: "w-full h-full bg-slate-100 rounded-lg p-1.5 flex flex-col gap-1 border border-black/5",
				children: /* @__PURE__ */ L("div", {
					className: "flex-1 bg-white rounded-md shadow-sm p-1 flex flex-col justify-between border border-black/5",
					children: [/* @__PURE__ */ L("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ I("div", { className: "h-1.5 bg-red-100 rounded w-6" })]
				})
			})
		},
		{
			id: "dark",
			label: y.colorSchemeDark,
			preview: /* @__PURE__ */ I("div", {
				className: "w-full h-full bg-[#1b2030] rounded-lg p-1.5 flex flex-col gap-1 border border-white/5",
				children: /* @__PURE__ */ L("div", {
					className: "flex-1 bg-[#151821] rounded-md shadow-sm p-1 flex flex-col justify-between border border-white/5",
					children: [/* @__PURE__ */ L("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ I("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ I("div", { className: "h-1.5 bg-red-950 rounded w-6" })]
				})
			})
		}
	];
	return /* @__PURE__ */ L("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ I(w, {
				title: y.osTheme,
				children: S ? /* @__PURE__ */ I(T, { children: V.map((t) => /* @__PURE__ */ I(D, {
					label: e[t].name,
					active: r === t,
					onPress: () => s(t)
				}, t)) }) : /* @__PURE__ */ I(O, {
					narrow: 2,
					medium: 3,
					wide: 3,
					gap: "12px",
					children: V.map((t) => {
						let i = e[t];
						return /* @__PURE__ */ L("button", {
							onClick: () => s(t),
							className: n("rounded-xl border-2 p-3 text-left transition-all", r === t ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-transparent bg-white hover:border-black/10 dark:bg-white/5 dark:hover:border-white/10"),
							children: [/* @__PURE__ */ I("p", {
								className: "text-sm font-semibold text-black/90 dark:text-white/90",
								children: i.name
							}), /* @__PURE__ */ I("p", {
								className: "mt-1 text-xs text-black/50 dark:text-white/50 leading-5",
								children: i.description
							})]
						}, t);
					})
				})
			}),
			/* @__PURE__ */ I(w, {
				title: y.colorScheme,
				children: S ? /* @__PURE__ */ I(T, { children: F.map(({ id: e, label: t }) => /* @__PURE__ */ I(D, {
					label: t,
					active: i === e,
					onPress: () => c(e)
				}, e)) }) : /* @__PURE__ */ I("div", {
					className: "flex gap-5",
					children: F.map(({ id: e, label: t, preview: r }) => /* @__PURE__ */ L("button", {
						onClick: () => c(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ I("div", {
							className: n("w-24 h-16 rounded-xl p-0.5 transition-all", i === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: r
						}), /* @__PURE__ */ I("span", {
							className: n("text-xs font-semibold", i === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})
			}),
			/* @__PURE__ */ I(w, {
				title: y.effects,
				children: /* @__PURE__ */ I(T, { children: /* @__PURE__ */ I(D, {
					label: y.liquidGlass,
					subtitle: y.liquidGlassDesc,
					control: /* @__PURE__ */ I(E, {
						checked: o,
						onChange: l
					})
				}) })
			}),
			o && /* @__PURE__ */ L(w, {
				title: "Liquid Glass",
				children: [/* @__PURE__ */ I("p", {
					className: "text-xs text-black/50 dark:text-white/50 mb-3 -mt-2",
					children: "Choose your preferred look for Liquid Glass."
				}), /* @__PURE__ */ I("div", {
					className: "flex gap-5",
					children: [{
						id: "clear",
						label: "Clear",
						preview: /* @__PURE__ */ L("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: [/* @__PURE__ */ I("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/30 via-transparent to-transparent" }), /* @__PURE__ */ L("div", {
								className: "w-16 h-10 rounded-lg bg-white/10 border border-white/40 shadow-md flex items-center justify-center backdrop-blur-[3px] overflow-hidden",
								children: [/* @__PURE__ */ I("div", { className: "absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" }), /* @__PURE__ */ I("div", { className: "w-8 h-4 rounded bg-white/20 border border-white/10" })]
							})]
						})
					}, {
						id: "tinted",
						label: "Tinted",
						preview: /* @__PURE__ */ I("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: /* @__PURE__ */ I("div", {
								className: "w-16 h-10 rounded-lg bg-white/25 border border-white/25 shadow-md flex items-center justify-center backdrop-blur-[16px] overflow-hidden",
								children: /* @__PURE__ */ I("div", { className: "w-8 h-4 rounded bg-white/30 border border-white/10" })
							})
						})
					}].map(({ id: e, label: t, preview: r }) => /* @__PURE__ */ L("button", {
						onClick: () => d(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ I("div", {
							className: n("w-24 h-16 rounded-xl p-0.5 transition-all", u === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: r
						}), /* @__PURE__ */ I("span", {
							className: n("text-xs font-semibold", u === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})]
			}),
			/* @__PURE__ */ I(w, {
				title: "Theme",
				children: /* @__PURE__ */ L(T, {
					className: "!overflow-visible",
					children: [
						/* @__PURE__ */ L("div", {
							className: "px-4 py-3 flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ I("span", {
								className: "text-[15px] text-black dark:text-white pt-1 shrink-0",
								children: "Color"
							}), /* @__PURE__ */ I("div", {
								className: "flex items-start gap-1 flex-wrap justify-end",
								children: ie.map((e) => /* @__PURE__ */ L("div", {
									className: "flex flex-col items-center gap-1 min-w-[36px] shrink-0",
									children: [/* @__PURE__ */ I("button", {
										onClick: () => h(e.id),
										className: "w-8 h-8 flex items-center justify-center rounded-full focus:outline-none transition-transform active:scale-95",
										children: /* @__PURE__ */ I("div", {
											className: n("w-5 h-5 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all", e.bg, f === e.id ? "scale-105" : "hover:scale-110"),
											style: { boxShadow: f === e.id ? `0 0 0 2px ${a === "dark" ? "#2c2c2e" : "#ffffff"}, 0 0 0 4px ${ae[e.id]}` : void 0 }
										})
									}), e.id === "multicolor" && /* @__PURE__ */ I("span", {
										className: "text-[10px] text-black/40 dark:text-white/40 leading-none mt-0.5 whitespace-nowrap",
										children: "Multicolor"
									})]
								}, e.id))
							})]
						}),
						/* @__PURE__ */ I(D, {
							label: "Text highlight color",
							control: /* @__PURE__ */ L("div", {
								className: "relative",
								ref: A,
								children: [/* @__PURE__ */ L("button", {
									onClick: () => k((e) => !e),
									className: "flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 rounded-lg text-xs text-black/85 dark:text-white/85 shadow-sm transition-all focus:outline-none min-w-[140px] justify-between",
									children: [/* @__PURE__ */ L("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ I("span", {
											className: "w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0",
											style: { backgroundColor: p === "automatic" ? {
												multicolor: "#b3d7ff",
												blue: "#b3d7ff",
												purple: "#e5b3ff",
												pink: "#ffb3df",
												red: "#ffb3b3",
												orange: "#ffd9b3",
												yellow: "#fff5b3",
												green: "#c7ffb3",
												graphite: "#d9d9d9"
											}[f] || "#b3d7ff" : j.color }
										}), /* @__PURE__ */ I("span", { children: j.label })]
									}), /* @__PURE__ */ I("svg", {
										className: "w-3 h-3 opacity-60 ml-2",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ I("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M19 9l-7 7-7-7"
										})
									})]
								}), C && /* @__PURE__ */ I("div", {
									className: "absolute right-0 bottom-full mb-1 w-44 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden",
									children: H.map((e) => /* @__PURE__ */ L("button", {
										onClick: () => {
											g(e.id), k(!1);
										},
										className: "w-full flex items-center justify-between px-3 py-1.5 text-xs text-black/80 dark:text-white/80 hover:bg-accent-active hover:text-white transition-colors text-left focus:outline-none",
										children: [/* @__PURE__ */ L("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ I("span", {
												className: "w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0",
												style: { backgroundColor: e.id === "automatic" ? {
													multicolor: "#b3d7ff",
													blue: "#b3d7ff",
													purple: "#e5b3ff",
													pink: "#ffb3df",
													red: "#ffb3b3",
													orange: "#ffd9b3",
													yellow: "#fff5b3",
													green: "#c7ffb3",
													graphite: "#d9d9d9"
												}[f] || "#b3d7ff" : e.color }
											}), /* @__PURE__ */ I("span", { children: e.label })]
										}), p === e.id && /* @__PURE__ */ I("svg", {
											className: "w-3.5 h-3.5 text-accent-active hover:text-white shrink-0 ml-2",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											strokeWidth: 2.5,
											children: /* @__PURE__ */ I("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												d: "M5 13l4 4L19 7"
											})
										})]
									}, e.id))
								})]
							})
						}),
						/* @__PURE__ */ I(D, {
							label: x === "vi" ? "Cho phép kéo cửa sổ ra ngoài màn hình" : "Allow dragging windows out of bounds",
							control: /* @__PURE__ */ I(E, {
								checked: m,
								onChange: v
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/wallpaper/WallpaperThumb.tsx
function U({ src: e, alt: t }) {
	let [r, i] = P(!1);
	return /* @__PURE__ */ L("div", {
		className: "relative w-full h-full bg-zinc-200 dark:bg-zinc-800",
		children: [!r && /* @__PURE__ */ I("div", { className: "absolute inset-0 bg-zinc-300 dark:bg-zinc-850 animate-pulse" }), /* @__PURE__ */ I("img", {
			src: e,
			alt: t,
			className: n("w-full h-full object-cover transition-opacity duration-300", r ? "opacity-100" : "opacity-0"),
			onLoad: () => i(!0),
			onError: () => i(!0)
		})]
	});
}
function W({ posterSrc: e, videoSrc: t, alt: r }) {
	let [i, a] = P(!1), o = N(null);
	return /* @__PURE__ */ L("div", {
		className: "relative w-full h-full bg-zinc-900",
		onMouseEnter: () => {
			a(!0), o.current?.play();
		},
		onMouseLeave: () => {
			a(!1), o.current && (o.current.pause(), o.current.currentTime = 0);
		},
		children: [/* @__PURE__ */ I("img", {
			src: e,
			alt: r,
			className: n("absolute inset-0 w-full h-full object-cover transition-opacity duration-300", i ? "opacity-0" : "opacity-100")
		}), /* @__PURE__ */ I("video", {
			ref: o,
			src: t,
			muted: !0,
			loop: !0,
			playsInline: !0,
			preload: "none",
			className: n("absolute inset-0 w-full h-full object-cover transition-opacity duration-300", i ? "opacity-100" : "opacity-0")
		})]
	});
}
function G({ wallpaper: e, selected: t, cycling: r, onClick: i, shape: a = "card", size: o = "md" }) {
	let s = d();
	if (e.kind === "color") {
		let r = o === "sm" ? "w-9 h-9" : "w-11 h-11";
		return /* @__PURE__ */ I("button", {
			onClick: i,
			title: e.name,
			className: n("relative rounded-full shrink-0 transition-all border-2", r, t ? "ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-[#151821] border-white/60" : "border-black/10 dark:border-white/10 hover:scale-105"),
			style: { backgroundColor: e.colorHex }
		});
	}
	let c = l(s, e.thumbnail ?? e.url ?? ""), u = a === "circle", f = e.videoUrl ? l(s, e.videoUrl) : null;
	return /* @__PURE__ */ L("button", {
		onClick: i,
		title: e.name,
		className: n("relative overflow-hidden border-2 transition-all shrink-0", u ? "w-20 h-28 rounded-[28px]" : "aspect-video rounded-(--radius-input) w-full", t ? "border-blue-500 scale-105 shadow-lg z-10" : "border-transparent hover:border-white/40 hover:scale-102"),
		children: [
			e.kind === "live" && /* @__PURE__ */ I("span", {
				className: "absolute top-1.5 right-1.5 px-1 py-0.5 bg-black/60 text-white text-[8px] font-bold tracking-wider rounded uppercase z-10 select-none pointer-events-none",
				children: "LIVE"
			}),
			r && /* @__PURE__ */ I("span", {
				className: "absolute top-1.5 left-1.5 z-10 w-4 h-4 rounded-full bg-black/60 flex items-center justify-center",
				children: /* @__PURE__ */ I(g, { className: "w-2.5 h-2.5 text-white" })
			}),
			e.kind === "live" && f ? /* @__PURE__ */ I(W, {
				posterSrc: c,
				videoSrc: f,
				alt: e.name
			}) : /* @__PURE__ */ I(U, {
				src: c,
				alt: e.name
			})
		]
	});
}
//#endregion
//#region src/components/wallpaper/WallpaperSection.tsx
function K({ title: e, items: t, selectedId: r, cyclingGroup: i, onSelect: a, leadingActions: o, shape: s = "card" }) {
	let [c, l] = P(!1);
	return t.length === 0 && !o ? null : /* @__PURE__ */ L("div", { children: [/* @__PURE__ */ L("div", {
		className: "flex items-center justify-between mb-2 px-0.5",
		children: [/* @__PURE__ */ I("p", {
			className: "text-[11px] font-semibold text-black/60 dark:text-white/60 select-none",
			children: e
		}), t.length > 0 && /* @__PURE__ */ I("button", {
			onClick: () => l((e) => !e),
			className: "text-[11px] text-blue-600 dark:text-blue-400 hover:underline select-none",
			children: c ? "Show Less" : `Show All (${t.length})`
		})]
	}), /* @__PURE__ */ L("div", {
		className: n(s === "circle" ? "items-start" : "items-center", c ? "flex flex-wrap gap-2 p-1.5" : "flex gap-3 overflow-x-auto p-1.5"),
		children: [o, t.map((e) => /* @__PURE__ */ L("div", {
			className: c ? s === "circle" ? "w-12" : "w-24" : s === "circle" ? "shrink-0 w-12" : "shrink-0 w-24",
			children: [/* @__PURE__ */ I(G, {
				wallpaper: e,
				selected: e.id === r,
				cycling: i && e.id === r,
				onClick: () => a(e.id),
				shape: s,
				size: c && s === "circle" ? "sm" : "md"
			}), s === "circle" && /* @__PURE__ */ I("p", {
				className: "text-[10px] text-center mt-1 text-black/60 dark:text-white/60 truncate select-none",
				children: e.name
			})]
		}, e.id))]
	})] });
}
//#endregion
//#region src/components/wallpaper/WallpaperDetailPanel.tsx
var q = {
	fill: "Fill Screen",
	fit: "Fit to Screen",
	stretch: "Stretch to Fill Screen",
	center: "Center",
	tile: "Tile"
}, J = {
	"5m": "Every 5 Minutes",
	"10m": "Every 10 Minutes",
	"30m": "Every 30 Minutes",
	"1h": "Every Hour",
	"2h": "Every 2 Hours",
	"5h": "Every 5 Hours",
	"1d": "Every Day"
}, Y = "bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none appearance-none cursor-pointer";
function se({ wallpaper: e, cycleGroup: n, variant: r = "vertical" }) {
	let i = d(), a = t((e) => e.wallpaperFitMode), o = t((e) => e.setWallpaperFitMode), s = t((e) => e.wallpaperCycle), c = t((e) => e.setWallpaperCycle), u = e.kind === "color" ? null : l(i, e.thumbnail ?? e.url ?? ""), f = s.group === n;
	return r === "vertical" ? /* @__PURE__ */ L("div", {
		className: "w-full space-y-4",
		children: [/* @__PURE__ */ I("div", {
			className: "relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10",
			children: e.kind === "color" ? /* @__PURE__ */ I("div", {
				className: "absolute inset-0",
				style: { backgroundColor: e.colorHex }
			}) : /* @__PURE__ */ I("img", {
				src: u ?? void 0,
				alt: e.name,
				className: "w-full h-full object-cover"
			})
		}), /* @__PURE__ */ L("div", {
			className: "space-y-3",
			children: [e.kind !== "color" && /* @__PURE__ */ L("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ I("span", {
					className: "text-xs text-black/60 dark:text-white/60",
					children: e.name
				}), /* @__PURE__ */ I("div", {
					className: "relative",
					children: /* @__PURE__ */ I("select", {
						value: a,
						onChange: (e) => o(e.target.value),
						className: Y,
						children: Object.keys(q).map((e) => /* @__PURE__ */ I("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: q[e]
						}, e))
					})
				})]
			}), e.kind !== "color" && /* @__PURE__ */ L("div", {
				className: "space-y-2 pt-2 border-t border-black/10 dark:border-white/10",
				children: [/* @__PURE__ */ L("label", {
					className: "flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer",
					children: [/* @__PURE__ */ I("span", { children: "Shuffle" }), /* @__PURE__ */ I("input", {
						type: "checkbox",
						checked: f && s.enabled,
						onChange: (e) => c({
							enabled: e.target.checked,
							group: n
						}),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				}), f && s.enabled && /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ L("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ I("span", {
						className: "text-[11px] text-black/50 dark:text-white/50",
						children: "Interval"
					}), /* @__PURE__ */ I("select", {
						value: s.interval,
						onChange: (e) => c({ interval: e.target.value }),
						className: Y,
						children: Object.keys(J).map((e) => /* @__PURE__ */ I("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: J[e]
						}, e))
					})]
				}), /* @__PURE__ */ L("label", {
					className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer",
					children: [/* @__PURE__ */ I("span", { children: "Randomly" }), /* @__PURE__ */ I("input", {
						type: "checkbox",
						checked: s.randomOrder,
						onChange: (e) => c({ randomOrder: e.target.checked }),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				})] })]
			})]
		})]
	}) : /* @__PURE__ */ L("div", {
		className: "w-full flex gap-5 items-start bg-neutral-50/50 dark:bg-white/2 p-3 rounded-2xl border border-black/5 dark:border-white/5",
		children: [/* @__PURE__ */ I("div", {
			className: "relative w-1/2 max-w-[240px] aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shrink-0",
			children: e.kind === "color" ? /* @__PURE__ */ I("div", {
				className: "absolute inset-0",
				style: { backgroundColor: e.colorHex }
			}) : /* @__PURE__ */ I("img", {
				src: u ?? void 0,
				alt: e.name,
				className: "w-full h-full object-cover"
			})
		}), /* @__PURE__ */ L("div", {
			className: "flex-1 space-y-3 min-w-0 pt-1",
			children: [/* @__PURE__ */ L("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ I("span", {
					className: "text-xs font-semibold text-black/85 dark:text-white/90 truncate",
					children: e.name
				}), e.kind !== "color" && /* @__PURE__ */ I("div", {
					className: "relative shrink-0",
					children: /* @__PURE__ */ I("select", {
						value: a,
						onChange: (e) => o(e.target.value),
						className: Y,
						children: Object.keys(q).map((e) => /* @__PURE__ */ I("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: q[e]
						}, e))
					})
				})]
			}), e.kind !== "color" && /* @__PURE__ */ L("div", {
				className: "space-y-2.5 pt-2.5 border-t border-black/5 dark:border-white/5",
				children: [/* @__PURE__ */ L("label", {
					className: "flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer",
					children: [/* @__PURE__ */ I("span", { children: "Shuffle" }), /* @__PURE__ */ I("input", {
						type: "checkbox",
						checked: f && s.enabled,
						onChange: (e) => c({
							enabled: e.target.checked,
							group: n
						}),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				}), f && s.enabled && /* @__PURE__ */ L("div", {
					className: "space-y-2.5",
					children: [/* @__PURE__ */ L("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ I("span", {
							className: "text-[11px] text-black/50 dark:text-white/50",
							children: "Interval"
						}), /* @__PURE__ */ I("select", {
							value: s.interval,
							onChange: (e) => c({ interval: e.target.value }),
							className: Y,
							children: Object.keys(J).map((e) => /* @__PURE__ */ I("option", {
								value: e,
								className: "bg-white dark:bg-[#151821] text-black dark:text-white",
								children: J[e]
							}, e))
						})]
					}), /* @__PURE__ */ L("label", {
						className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer",
						children: [/* @__PURE__ */ I("span", { children: "Randomly" }), /* @__PURE__ */ I("input", {
							type: "checkbox",
							checked: s.randomOrder,
							onChange: (e) => c({ randomOrder: e.target.checked }),
							className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/wallpaper/WallpaperPickerContent.tsx
function ce({ variant: e = "vertical" } = {}) {
	let n = t((e) => e.wallpaperId), r = t((e) => e.setWallpaper), i = t((e) => e.customWallpapers), a = t((e) => e.addCustomWallpaper), o = t((e) => e.wallpaperCycle), c = s(), l = f(), [u, d] = P(!1), p = l.all.find((e) => e.id === n) ?? i.find((e) => e.id === n) ?? l.pictures[0], m = i.some((e) => e.id === n);
	async function g() {
		if (!(!c || u)) {
			d(!0);
			try {
				let e = await c();
				e && (a(e), r(e.id));
			} finally {
				d(!1);
			}
		}
	}
	return /* @__PURE__ */ L("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ I(se, {
				wallpaper: p,
				cycleGroup: m ? "custom" : "builtin",
				variant: e
			}),
			/* @__PURE__ */ I(K, {
				title: "Pictures",
				items: l.pictures,
				selectedId: n,
				cyclingGroup: o.enabled && o.group === "builtin",
				onSelect: r
			}),
			/* @__PURE__ */ I(K, {
				title: "Live Wallpapers",
				items: l.live,
				selectedId: n,
				onSelect: r
			}),
			/* @__PURE__ */ I(K, {
				title: "Colors",
				items: l.colors,
				selectedId: n,
				onSelect: r,
				shape: "circle"
			}),
			/* @__PURE__ */ I(K, {
				title: "Your Photos",
				items: i,
				selectedId: n,
				cyclingGroup: o.enabled && o.group === "custom",
				onSelect: r,
				leadingActions: c && /* @__PURE__ */ I("button", {
					onClick: g,
					disabled: u,
					title: "Add a Photo",
					className: "shrink-0 w-24 aspect-video rounded-(--radius-input) border-2 border-dashed border-black/15 dark:border-white/15 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors text-black/40 dark:text-white/40 disabled:opacity-50",
					children: /* @__PURE__ */ I(h, { className: "w-5 h-5" })
				})
			})
		]
	});
}
//#endregion
//#region src/components/apps/settings/SettingsWallpaper.tsx
function le() {
	return /* @__PURE__ */ I(ce, { variant: "horizontal" });
}
//#endregion
//#region src/components/apps/settings/SettingsDesktopDock.tsx
var ue = 12, de = 64, fe = 1.4, X = "w-full h-1 accent-red-500";
function pe() {
	let e = t((e) => e.dockAppIds), r = t((e) => e.apps), i = t((e) => e.pinToDock), a = t((e) => e.unpinFromDock), o = t((e) => e.dockSize), s = t((e) => e.setDockSize), c = t((e) => e.dockMagnification), l = t((e) => e.setDockMagnification), d = t((e) => e.dockAutoHide), f = t((e) => e.showOpenAppIndicators), p = t((e) => e.setDockAutoHide), m = t((e) => e.setShowOpenAppIndicators), { t: h } = _(), g = Object.values(r).filter((e) => !e.disabled);
	return /* @__PURE__ */ L("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ L("div", { children: [/* @__PURE__ */ I("h3", {
			className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-3",
			children: h.desktopDock
		}), /* @__PURE__ */ L("div", {
			className: "rounded-card bg-white dark:bg-white/5 px-4 py-3 space-y-4",
			children: [
				/* @__PURE__ */ L("div", {
					className: "grid grid-cols-2 gap-6",
					children: [/* @__PURE__ */ L("div", { children: [/* @__PURE__ */ I("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: /* @__PURE__ */ I("span", { children: h.dockSize })
					}), /* @__PURE__ */ I("input", {
						type: "range",
						min: ue,
						max: de,
						value: o,
						onChange: (e) => s(+e.target.value),
						className: X
					})] }), /* @__PURE__ */ L("div", { children: [/* @__PURE__ */ L("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: [/* @__PURE__ */ I("span", { children: h.dockMagnification }), /* @__PURE__ */ I("span", {
							className: "text-black/30 dark:text-white/30",
							children: c === 0 ? h.dockMagnificationOff : ""
						})]
					}), /* @__PURE__ */ I("input", {
						type: "range",
						min: 0,
						max: fe,
						step: .05,
						value: c,
						onChange: (e) => l(+e.target.value),
						className: X
					})] })]
				}),
				/* @__PURE__ */ I("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ L("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ I("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Automatically hide and show the Dock"
					}), /* @__PURE__ */ I("button", {
						onClick: () => p(!d),
						className: n("relative h-5 w-9 shrink-0 rounded-full transition-colors", d ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ I("span", { className: n("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", d ? "left-4.5" : "left-0.5") })
					})]
				}),
				/* @__PURE__ */ I("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ L("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ I("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Show indicators for open applications"
					}), /* @__PURE__ */ I("button", {
						onClick: () => m(!f),
						className: n("relative h-5 w-9 shrink-0 rounded-full transition-colors", f ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ I("span", { className: n("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", f ? "left-4.5" : "left-0.5") })
					})]
				})
			]
		})] }), /* @__PURE__ */ L("div", { children: [
			/* @__PURE__ */ I("h3", {
				className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-1",
				children: h.dockApps
			}),
			/* @__PURE__ */ I("p", {
				className: "text-xs text-black/40 dark:text-white/40 mb-3",
				children: h.dockAppsDesc
			}),
			/* @__PURE__ */ I("div", {
				className: "space-y-1.5",
				children: g.map((t) => {
					let r = e.includes(t.id);
					return /* @__PURE__ */ L("div", {
						className: "flex items-center justify-between rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-2.5",
						children: [/* @__PURE__ */ L("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ I(u, {
								appConfig: t,
								size: 32
							}), /* @__PURE__ */ I("span", {
								className: "text-sm font-medium text-black/90 dark:text-white/90",
								children: t.name
							})]
						}), /* @__PURE__ */ I("button", {
							onClick: () => r ? a(t.id) : i(t.id),
							className: n("relative h-6 w-11 shrink-0 rounded-full transition-colors", r ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
							children: /* @__PURE__ */ I("span", { className: n("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", r ? "left-5.5" : "left-0.5") })
						})]
					}, t.id);
				})
			})
		] })]
	});
}
//#endregion
//#region src/components/apps/settings/SettingsNotifications.tsx
function me() {
	let { t: e } = _();
	return /* @__PURE__ */ I("div", {
		className: "space-y-5",
		children: /* @__PURE__ */ L("div", {
			className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 flex flex-col items-center justify-center text-center gap-2",
			children: [/* @__PURE__ */ I("svg", {
				className: "w-10 h-10 text-black/20 dark:text-white/20",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ I("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				})
			}), /* @__PURE__ */ I("p", {
				className: "text-sm font-medium text-black/40 dark:text-white/40",
				children: e.notificationsComingSoon
			})]
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsUpdate.tsx
var he = {
	idle: "",
	checking: "Đang kiểm tra…",
	downloading: "Đang tải bản cập nhật…",
	extracting: "Đang giải nén…",
	done: "Hoàn tất.",
	error: "Lỗi cập nhật."
};
function Z({ label: e, value: t }) {
	return /* @__PURE__ */ L("div", {
		className: "flex justify-between items-center text-xs",
		children: [/* @__PURE__ */ I("span", {
			className: "text-black/50 dark:text-white/50",
			children: e
		}), /* @__PURE__ */ I("span", {
			className: "text-black/80 dark:text-white/80 font-mono truncate max-w-[60%]",
			children: t
		})]
	});
}
function ge() {
	let e = c(), t = a((e) => e.status), n = a((e) => e.setStatus), [r, i] = P(!1), [o, s] = P(null), [l, u] = P(null);
	M(() => {
		if (e?.onProgress) return e.onProgress((t) => {
			u(t), t.phase === "done" && e.checkUpdate().then(n).catch(() => {}), t.phase === "error" && s({
				ok: !1,
				message: t.error ?? "Cập nhật thất bại."
			});
		});
	}, [e, n]);
	async function d() {
		if (!(!e || r)) {
			i(!0), s(null);
			try {
				let r = t?.pendingRendererVersion ?? null, i = t?.nativeUpdateDownloaded ?? !1, [a] = await Promise.all([e.checkUpdate(), new Promise((e) => setTimeout(e, 500))]);
				n(a);
				let o = !!a.pendingRendererVersion && a.pendingRendererVersion !== r, c = a.nativeUpdateDownloaded && !i;
				s(o || c ? {
					ok: !0,
					message: "Đã tìm thấy bản cập nhật mới."
				} : {
					ok: !0,
					message: "Đang dùng phiên bản mới nhất."
				});
			} catch (e) {
				s({
					ok: !1,
					message: e instanceof Error ? e.message : "Kiểm tra cập nhật thất bại."
				});
			} finally {
				i(!1);
			}
		}
	}
	return e ? /* @__PURE__ */ L("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ L("div", {
				className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 space-y-2",
				children: [
					/* @__PURE__ */ I(Z, {
						label: "Phiên bản renderer đang chạy",
						value: t?.runningRendererVersion ?? "—"
					}),
					/* @__PURE__ */ I(Z, {
						label: "Bản chờ áp dụng",
						value: t?.pendingRendererVersion ?? "Không có"
					}),
					/* @__PURE__ */ I(Z, {
						label: "Bản cài đặt native đã tải",
						value: t?.nativeUpdateDownloaded ? t.nativeUpdateVersion ?? "Có" : "Không có"
					})
				]
			}),
			t?.pendingRendererVersion && t.pendingReleaseNotes && /* @__PURE__ */ L("div", {
				className: "rounded-(--radius-input) bg-blue-500/10 px-3 py-2 text-xs text-blue-700 dark:text-blue-300 whitespace-pre-line",
				children: [
					/* @__PURE__ */ L("strong", { children: [
						"Bản ",
						t.pendingRendererVersion,
						":"
					] }),
					" ",
					t.pendingReleaseNotes
				]
			}),
			l && l.phase !== "idle" && l.phase !== "error" && /* @__PURE__ */ L("div", {
				className: "rounded-(--radius-input) bg-black/5 dark:bg-white/5 px-3 py-2 space-y-1.5",
				children: [/* @__PURE__ */ L("div", {
					className: "text-xs text-black/60 dark:text-white/60",
					children: [he[l.phase], l.phase === "downloading" && l.percent !== null ? ` ${l.percent}%` : ""]
				}), l.phase === "downloading" && /* @__PURE__ */ I("div", {
					className: "h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden",
					children: /* @__PURE__ */ I("div", {
						className: "h-full rounded-full bg-blue-500 transition-all",
						style: { width: l.percent === null ? "30%" : `${l.percent}%` }
					})
				})]
			}),
			/* @__PURE__ */ I("button", {
				onClick: d,
				disabled: r,
				className: "w-full rounded-(--radius-input) bg-blue-500 text-white text-sm font-medium py-2 disabled:opacity-50",
				children: r ? "Đang kiểm tra…" : "Kiểm tra cập nhật"
			}),
			o && /* @__PURE__ */ I("div", {
				className: `rounded-(--radius-input) px-3 py-2 text-xs ${o.ok ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`,
				children: o.message
			})
		]
	}) : /* @__PURE__ */ I("div", {
		className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 text-center text-sm text-black/40 dark:text-white/40",
		children: "Tính năng cập nhật không khả dụng trên nền tảng này."
	});
}
//#endregion
//#region src/components/apps/settings/AppSettingsRegistry.tsx
var Q = { TerminalSettings: A(() => import("./TerminalSettings-DNDZp2wX.js").then((e) => ({ default: e.TerminalSettings }))) };
function _e({ settingsKey: e }) {
	let t = Q[e];
	return t ? /* @__PURE__ */ I(k, {
		fallback: /* @__PURE__ */ I("div", {
			className: "flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40",
			children: "Loading…"
		}),
		children: /* @__PURE__ */ I(t, {})
	}) : /* @__PURE__ */ L("div", {
		className: "flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40",
		children: [
			"No settings panel registered for \"",
			e,
			"\"."
		]
	});
}
//#endregion
//#region src/components/apps/Settings.tsx
function $({ lucideIcon: e, iconColor: t, label: r, active: i, onClick: a, iconEl: o, hasBadge: s }) {
	return /* @__PURE__ */ L("button", {
		onClick: a,
		className: n("w-full flex items-center gap-3 px-3 py-2 rounded-(--radius-input) text-left transition-colors focus:outline-none text-sm", i ? "bg-accent-active text-white" : "text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/8"),
		children: [o ?? (e ? /* @__PURE__ */ L("span", {
			className: "relative w-7 h-7 rounded-(--radius-input) flex items-center justify-center shrink-0",
			style: { background: `linear-gradient(135deg, ${t?.[0] ?? "#636366"}, ${t?.[1] ?? "#48484a"})` },
			children: [/* @__PURE__ */ I(e, {
				className: "w-4 h-4 text-white",
				strokeWidth: 1.8
			}), s && /* @__PURE__ */ I("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
		}) : null), /* @__PURE__ */ I("span", {
			className: "truncate font-medium",
			children: r
		})]
	});
}
function ve({ windowId: e }) {
	let { t: n } = _(), r = t((e) => e.apps), s = a((e) => e.status), l = c(), d = Object.values(r).filter((e) => !e.disabled && e.appSettings), f = t((e) => e.settingsActiveTab), h = t((e) => e.setSettingsActiveTab), [v, y] = S(f);
	M(() => {
		y(f);
	}, [f, y]);
	let b = [
		{
			id: "general",
			label: n.general,
			description: n.generalDesc,
			lucideIcon: p,
			color: ["#636366", "#48484a"],
			component: re
		},
		{
			id: "update",
			label: n.softwareUpdate,
			description: n.softwareUpdateDesc,
			lucideIcon: g,
			color: ["#ff9500", "#c93400"],
			component: ge
		},
		{
			id: "appearance",
			label: n.appearance,
			description: n.appearanceDesc,
			lucideIcon: te,
			color: ["#5e5ce6", "#3634a3"],
			component: oe
		},
		{
			id: "wallpaper",
			label: n.wallpaper,
			description: n.wallpaperDesc,
			lucideIcon: m,
			color: ["#30d158", "#25a244"],
			component: le
		},
		{
			id: "desktop-dock",
			label: n.desktopDock,
			description: n.desktopDockDesc,
			lucideIcon: ee,
			color: ["#0a84ff", "#0055d4"],
			component: pe
		},
		{
			id: "notifications",
			label: n.notifications,
			description: n.notificationsDesc,
			lucideIcon: o,
			color: ["#ff3b30", "#cc2323"],
			component: me
		}
	], x = l ? b : b.filter((e) => e.id !== "update"), w = j((e) => {
		y(e), e && h(e);
	}, [y, h]), T = (() => {
		if (!v) return null;
		if (v.startsWith("app:")) {
			let e = r[v.slice(4)];
			return e ? {
				label: e.name,
				description: "",
				appConfig: e
			} : null;
		}
		return x.find((e) => e.id === v) ?? null;
	})();
	return /* @__PURE__ */ I(C, {
		list: /* @__PURE__ */ L("aside", {
			className: "flex flex-col h-full overflow-y-auto bg-neutral-200/60 dark:bg-[#11141B] px-3 py-4 gap-1",
			children: [
				/* @__PURE__ */ I("div", {
					className: "mb-3 mx-1",
					children: /* @__PURE__ */ L("label", {
						className: "flex items-center gap-2 bg-black/8 dark:bg-white/8 rounded-(--radius-input) px-3 py-1.5",
						children: [/* @__PURE__ */ I("svg", {
							className: "w-3.5 h-3.5 text-black/40 dark:text-white/40 shrink-0",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ I("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							})
						}), /* @__PURE__ */ I("input", {
							type: "search",
							placeholder: n.search,
							className: "bg-transparent text-sm text-black/80 dark:text-white/80 placeholder:text-black/35 dark:placeholder:text-white/35 outline-none w-full"
						})]
					})
				}),
				/* @__PURE__ */ I("p", {
					className: "px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: n.system
				}),
				x.map((e) => /* @__PURE__ */ I($, {
					lucideIcon: e.lucideIcon,
					iconColor: e.color,
					label: e.label,
					active: v === e.id,
					onClick: () => w(e.id),
					hasBadge: e.id === "update" && i(s)
				}, e.id)),
				d.length > 0 && /* @__PURE__ */ L(F, { children: [/* @__PURE__ */ I("p", {
					className: "px-3 mt-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: n.applications
				}), d.map((e) => /* @__PURE__ */ I($, {
					label: e.name,
					active: v === `app:${e.id}`,
					onClick: () => w(`app:${e.id}`),
					iconEl: /* @__PURE__ */ I("div", {
						className: "w-7 h-7 shrink-0",
						children: /* @__PURE__ */ I(u, {
							appConfig: e,
							size: 28
						})
					})
				}, e.id))] })
			]
		}),
		detail: T ? /* @__PURE__ */ I(ye, {
			label: T.label,
			description: T.description,
			lucideIcon: "lucideIcon" in T ? T.lucideIcon : void 0,
			iconColor: "color" in T ? T.color : void 0,
			appConfig: "appConfig" in T ? T.appConfig : void 0,
			children: (() => {
				if (!v) return null;
				if (v.startsWith("app:")) {
					let e = r[v.slice(4)];
					return e?.appSettings ? /* @__PURE__ */ I(_e, { settingsKey: e.appSettings }) : null;
				}
				let e = x.find((e) => e.id === v);
				if (!e) return null;
				let t = e.component;
				return /* @__PURE__ */ I(t, {});
			})()
		}) : null,
		onBack: () => y(null),
		detailTitle: T?.label ?? "",
		className: "bg-neutral-100 dark:bg-[#0F1115]",
		sidebarWidth: "w-56",
		listClassName: "bg-neutral-200/60 dark:bg-[#11141B]"
	});
}
function ye({ label: e, description: t, lucideIcon: n, iconColor: r, appConfig: i, children: a }) {
	let o = x();
	return /* @__PURE__ */ L("div", {
		className: "flex flex-col h-full bg-neutral-100 dark:bg-[#0F1115]",
		children: [o && /* @__PURE__ */ L("div", {
			className: "shrink-0 flex items-center gap-2 px-3 h-11 border-b border-black/8 dark:border-white/8 bg-neutral-100 dark:bg-[#0F1115]",
			children: [/* @__PURE__ */ L("button", {
				onClick: o,
				className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0",
				children: [/* @__PURE__ */ I("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2.5,
					children: /* @__PURE__ */ I("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M15 19l-7-7 7-7"
					})
				}), /* @__PURE__ */ I("span", {
					className: "text-[14px] font-medium",
					children: "Settings"
				})]
			}), /* @__PURE__ */ I("h1", {
				className: "flex-1 text-[15px] font-semibold text-black/90 dark:text-white/90 text-center truncate pr-16",
				children: e
			})]
		}), /* @__PURE__ */ L("div", {
			className: "flex-1 overflow-y-auto",
			children: [!o && /* @__PURE__ */ L("div", {
				className: "flex flex-col items-center justify-center pt-8 pb-6 px-6 text-center border-b border-black/6 dark:border-white/6",
				children: [
					/* @__PURE__ */ I("div", {
						className: "mb-3",
						children: i ? /* @__PURE__ */ I("div", {
							className: "w-14 h-14",
							children: /* @__PURE__ */ I(u, {
								appConfig: i,
								size: 56
							})
						}) : n ? /* @__PURE__ */ I("span", {
							className: "w-14 h-14 rounded-[14px] flex items-center justify-center shadow-sm",
							style: { background: `linear-gradient(135deg, ${r?.[0] ?? "#636366"}, ${r?.[1] ?? "#48484a"})` },
							children: /* @__PURE__ */ I(n, {
								className: "w-7 h-7 text-white",
								strokeWidth: 1.6
							})
						}) : null
					}),
					/* @__PURE__ */ I("h1", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90 mb-1",
						children: e
					}),
					t && /* @__PURE__ */ I("p", {
						className: "text-[12px] text-black/45 dark:text-white/45 max-w-xs leading-relaxed",
						children: t
					})
				]
			}), /* @__PURE__ */ I("div", {
				className: "p-5 pb-8",
				children: a
			})]
		})]
	});
}
//#endregion
export { ve as Settings };
