import { o as e, v as t } from "./MobileAppViewer-PCK02RB8.js";
import { t as n } from "./store-BtS6MnQC.js";
import { t as r } from "./utils-Cj4W_oyi.js";
import { t as i } from "./createLucideIcon-CUtIr1pR.js";
import { d as a, f as o, g as s, n as c, p as l, r as u } from "./update-actions-tfJtdXWs.js";
import { t as d } from "./settings-MQ_i6wrJ.js";
import { n as f } from "./music-Cv3gAB9X.js";
import { t as p } from "./refresh-cw-C1z2U_RW.js";
import { t as m } from "./useTranslation-CVx_nMue.js";
import { n as h, t as g } from "./holidays-service-CqYEsHC1.js";
import { t as _ } from "./useAppLayout-DfaXs-1a.js";
import { n as v, r as y, t as b } from "./MobileSplitView-B_p9G_j-.js";
import { a as x, i as S, n as C, r as w, t as T } from "./ui-boJ7nJ3n.js";
import { Suspense as E, lazy as D, useCallback as O, useEffect as k, useRef as A, useState as j } from "react";
import { Fragment as M, jsx as N, jsxs as P } from "react/jsx-runtime";
var F = i("layout-grid", [
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
]), I = i("paintbrush", [
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
]), L = {
	en: "English (US)",
	vi: "Tiếng Việt",
	ja: "日本語",
	ko: "한국어",
	zh: "简体中文",
	th: "ไทย"
}, R = {
	en: "🇺🇸",
	vi: "🇻🇳",
	ja: "🇯🇵",
	ko: "🇰🇷",
	zh: "🇨🇳",
	th: "🇹🇭"
}, z = [
	"en",
	"vi",
	"ja",
	"ko",
	"zh",
	"th"
], B = Object.keys(g);
function V() {
	let { t: e, language: t } = m(), r = n((e) => e.setLanguage), i = n((e) => e.country) ?? "vn", a = n((e) => e.setCountry), [o, s] = j(!1), [c, l] = j(!1);
	return /* @__PURE__ */ N("div", {
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
				description: `${R[t]} ${L[t]}`,
				expandable: !0
			},
			{
				id: "dateTime",
				label: e.dateTime,
				description: (/* @__PURE__ */ new Date()).toLocaleDateString(t === "en" ? "en-US" : t === "vi" ? "vi-VN" : t === "ja" ? "ja-JP" : t === "ko" ? "ko-KR" : t === "zh" ? "zh-CN" : t === "th" ? "th-TH" : "en-US", { dateStyle: "long" }),
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
		].map(({ id: n, label: u, description: d, expandable: f }) => {
			let p = n === "about", m = n === "lang";
			return /* @__PURE__ */ P("div", {
				className: "overflow-hidden rounded-[var(--radius-card)] bg-white dark:bg-white/5 shadow-sm",
				children: [
					/* @__PURE__ */ P("div", {
						onClick: () => {
							p ? s((e) => !e) : m && l((e) => !e);
						},
						className: `flex items-center justify-between px-4 py-3 select-none ${f ? "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/8 transition-colors" : ""}`,
						children: [/* @__PURE__ */ N("span", {
							className: "text-sm font-medium text-black/90 dark:text-white/90",
							children: u
						}), /* @__PURE__ */ P("span", {
							className: "text-xs text-black/40 dark:text-white/40 flex items-center gap-1.5 min-w-0 max-w-[55%] justify-end",
							children: [/* @__PURE__ */ N("span", {
								className: "truncate",
								children: d
							}), /* @__PURE__ */ N("svg", {
								className: `w-3.5 h-3.5 opacity-35 shrink-0 transition-transform duration-200 ${f && (p ? o : m && c) ? "rotate-90" : ""}`,
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ N("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M9 5l7 7-7 7"
								})
							})]
						})]
					}),
					p && /* @__PURE__ */ N("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${o ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ N("div", {
							className: "py-3 px-4 space-y-0",
							children: [
								{
									label: "Author",
									value: /* @__PURE__ */ N("span", {
										className: "font-semibold text-blue-500 tracking-wider",
										children: "SKYLINE"
									})
								},
								{
									label: "Name",
									value: /* @__PURE__ */ N("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "SONTH"
									})
								},
								{
									label: "GitHub",
									value: /* @__PURE__ */ P("a", {
										href: "https://github.com/sonth87",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-blue-500 hover:underline flex items-center gap-1 font-mono",
										children: ["github/sonth87", /* @__PURE__ */ N("svg", {
											className: "w-3 h-3",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ N("path", {
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
									value: /* @__PURE__ */ N("span", {
										className: "text-black/80 dark:text-white/80 font-mono",
										children: "--/--/----"
									})
								},
								{
									label: "Country",
									value: /* @__PURE__ */ N("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "🇻🇳 VietNam"
									})
								}
							].map((e, t) => /* @__PURE__ */ P("div", {
								className: `flex justify-between items-center py-2 text-xs ${t > 0 ? "border-t border-black/5 dark:border-white/5" : ""}`,
								children: [/* @__PURE__ */ N("span", {
									className: "text-black/50 dark:text-white/50 font-medium",
									children: e.label
								}), e.value]
							}, e.label))
						})
					}),
					m && /* @__PURE__ */ N("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${c ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ P("div", {
							className: "py-3.5 px-4 space-y-3.5",
							children: [/* @__PURE__ */ P("div", { children: [/* @__PURE__ */ N("span", {
								className: "text-xs text-black/50 dark:text-white/50 font-medium block mb-2",
								children: e.preferredLanguage
							}), /* @__PURE__ */ P("div", {
								className: "relative",
								children: [/* @__PURE__ */ N("select", {
									value: t,
									onChange: (e) => r(e.target.value),
									className: "w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8",
									children: z.map((e) => /* @__PURE__ */ P("option", {
										value: e,
										className: "bg-white dark:bg-[#151821] text-black dark:text-white",
										children: [
											R[e],
											" ",
											L[e]
										]
									}, e))
								}), /* @__PURE__ */ N("div", {
									className: "absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40",
									children: /* @__PURE__ */ N("svg", {
										className: "w-3.5 h-3.5 text-black dark:text-white",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ N("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M19 9l-7 7-7-7"
										})
									})
								})]
							})] }), /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ P("span", {
								className: "text-xs text-black/50 dark:text-white/50 font-medium block mb-2",
								children: ["Region / Country", /* @__PURE__ */ N("span", {
									className: "ml-1.5 text-[10px] text-black/30 dark:text-white/30 font-normal",
									children: "(affects holidays)"
								})]
							}), /* @__PURE__ */ P("div", {
								className: "relative",
								children: [/* @__PURE__ */ N("select", {
									value: i,
									onChange: (e) => a(e.target.value),
									className: "w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8",
									children: B.map((e) => /* @__PURE__ */ P("option", {
										value: e,
										className: "bg-white dark:bg-[#151821] text-black dark:text-white",
										children: [
											h[e]?.flag,
											" ",
											h[e]?.name ?? e.toUpperCase()
										]
									}, e))
								}), /* @__PURE__ */ N("div", {
									className: "absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40",
									children: /* @__PURE__ */ N("svg", {
										className: "w-3.5 h-3.5 text-black dark:text-white",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ N("path", {
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
			}, n);
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsAppearance.tsx
var H = [
	"macos",
	"ipad",
	"iphone",
	"windows",
	"android"
], U = [
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
], W = [
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
], G = {
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
function K() {
	let i = n((e) => e.osTheme), a = n((e) => e.colorScheme), o = n((e) => e.resolvedColorScheme), s = n((e) => e.glassEnabled), c = n((e) => e.setOSTheme), l = n((e) => e.setColorScheme), u = n((e) => e.setGlassEnabled), d = n((e) => e.glassMode), f = n((e) => e.setGlassMode), p = n((e) => e.accentColor), h = n((e) => e.highlightColor), g = n((e) => e.allowDragOutOfBounds), v = n((e) => e.setAccentColor), y = n((e) => e.setHighlightColor), b = n((e) => e.setAllowDragOutOfBounds), { t: E, language: D } = m(), { isNarrow: O } = _(), [M, F] = j(!1), I = A(null);
	k(() => {
		let e = (e) => {
			I.current && !I.current.contains(e.target) && F(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let L = W.find((e) => e.id === h) || W[0], R = [
		{
			id: "auto",
			label: E.colorSchemeAuto,
			preview: /* @__PURE__ */ P("div", {
				className: "w-full h-full rounded-lg flex overflow-hidden border border-black/5 dark:border-white/5",
				children: [/* @__PURE__ */ N("div", {
					className: "flex-1 bg-slate-100 p-1.5 flex flex-col gap-1 border-r border-black/5",
					children: /* @__PURE__ */ P("div", {
						className: "flex-1 bg-white rounded-l-md shadow-sm p-1 flex flex-col justify-between border-y border-l border-black/5",
						children: [/* @__PURE__ */ P("div", {
							className: "flex gap-0.5",
							children: [/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-red-400" }), /* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-yellow-400" })]
						}), /* @__PURE__ */ N("div", { className: "h-1.5 bg-red-100 rounded-l w-4" })]
					})
				}), /* @__PURE__ */ N("div", {
					className: "flex-1 bg-[#1b2030] p-1.5 flex flex-col gap-1",
					children: /* @__PURE__ */ P("div", {
						className: "flex-1 bg-[#151821] rounded-r-md shadow-sm p-1 flex flex-col justify-between border-y border-r border-white/5",
						children: [/* @__PURE__ */ P("div", {
							className: "flex gap-0.5 justify-end",
							children: [/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }), /* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-green-400" })]
						}), /* @__PURE__ */ N("div", { className: "h-1.5 bg-red-950 rounded-r w-4 ml-auto" })]
					})
				})]
			})
		},
		{
			id: "light",
			label: E.colorSchemeLight,
			preview: /* @__PURE__ */ N("div", {
				className: "w-full h-full bg-slate-100 rounded-lg p-1.5 flex flex-col gap-1 border border-black/5",
				children: /* @__PURE__ */ P("div", {
					className: "flex-1 bg-white rounded-md shadow-sm p-1 flex flex-col justify-between border border-black/5",
					children: [/* @__PURE__ */ P("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ N("div", { className: "h-1.5 bg-red-100 rounded w-6" })]
				})
			})
		},
		{
			id: "dark",
			label: E.colorSchemeDark,
			preview: /* @__PURE__ */ N("div", {
				className: "w-full h-full bg-[#1b2030] rounded-lg p-1.5 flex flex-col gap-1 border border-white/5",
				children: /* @__PURE__ */ P("div", {
					className: "flex-1 bg-[#151821] rounded-md shadow-sm p-1 flex flex-col justify-between border border-white/5",
					children: [/* @__PURE__ */ P("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ N("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ N("div", { className: "h-1.5 bg-red-950 rounded w-6" })]
				})
			})
		}
	], z = e(), B = H.filter((e) => z.allowedOSThemes.includes(e));
	return /* @__PURE__ */ P("div", {
		className: "space-y-6",
		children: [
			B.length > 1 && /* @__PURE__ */ N(x, {
				title: E.osTheme,
				children: O ? /* @__PURE__ */ N(S, { children: B.map((e) => /* @__PURE__ */ N(w, {
					label: t[e].name,
					active: i === e,
					onPress: () => c(e)
				}, e)) }) : /* @__PURE__ */ N(T, {
					narrow: 2,
					medium: 3,
					wide: 3,
					gap: "12px",
					children: B.map((e) => {
						let n = t[e];
						return /* @__PURE__ */ P("button", {
							onClick: () => c(e),
							className: r("rounded-xl border-2 p-3 text-left transition-all", i === e ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-transparent bg-white hover:border-black/10 dark:bg-white/5 dark:hover:border-white/10"),
							children: [/* @__PURE__ */ N("p", {
								className: "text-sm font-semibold text-black/90 dark:text-white/90",
								children: n.name
							}), /* @__PURE__ */ N("p", {
								className: "mt-1 text-xs text-black/50 dark:text-white/50 leading-5",
								children: n.description
							})]
						}, e);
					})
				})
			}),
			/* @__PURE__ */ N(x, {
				title: E.colorScheme,
				children: O ? /* @__PURE__ */ N(S, { children: R.map(({ id: e, label: t }) => /* @__PURE__ */ N(w, {
					label: t,
					active: a === e,
					onPress: () => l(e)
				}, e)) }) : /* @__PURE__ */ N("div", {
					className: "flex gap-5",
					children: R.map(({ id: e, label: t, preview: n }) => /* @__PURE__ */ P("button", {
						onClick: () => l(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ N("div", {
							className: r("w-24 h-16 rounded-xl p-0.5 transition-all", a === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: n
						}), /* @__PURE__ */ N("span", {
							className: r("text-xs font-semibold", a === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})
			}),
			/* @__PURE__ */ N(x, {
				title: E.effects,
				children: /* @__PURE__ */ N(S, { children: /* @__PURE__ */ N(w, {
					label: E.liquidGlass,
					subtitle: E.liquidGlassDesc,
					control: /* @__PURE__ */ N(C, {
						checked: s,
						onChange: u
					})
				}) })
			}),
			s && /* @__PURE__ */ P(x, {
				title: "Liquid Glass",
				children: [/* @__PURE__ */ N("p", {
					className: "text-xs text-black/50 dark:text-white/50 mb-3 -mt-2",
					children: "Choose your preferred look for Liquid Glass."
				}), /* @__PURE__ */ N("div", {
					className: "flex gap-5",
					children: [{
						id: "clear",
						label: "Clear",
						preview: /* @__PURE__ */ P("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: [/* @__PURE__ */ N("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/30 via-transparent to-transparent" }), /* @__PURE__ */ P("div", {
								className: "w-16 h-10 rounded-lg bg-white/10 border border-white/40 shadow-md flex items-center justify-center backdrop-blur-[3px] overflow-hidden",
								children: [/* @__PURE__ */ N("div", { className: "absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" }), /* @__PURE__ */ N("div", { className: "w-8 h-4 rounded bg-white/20 border border-white/10" })]
							})]
						})
					}, {
						id: "tinted",
						label: "Tinted",
						preview: /* @__PURE__ */ N("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: /* @__PURE__ */ N("div", {
								className: "w-16 h-10 rounded-lg bg-white/25 border border-white/25 shadow-md flex items-center justify-center backdrop-blur-[16px] overflow-hidden",
								children: /* @__PURE__ */ N("div", { className: "w-8 h-4 rounded bg-white/30 border border-white/10" })
							})
						})
					}].map(({ id: e, label: t, preview: n }) => /* @__PURE__ */ P("button", {
						onClick: () => f(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ N("div", {
							className: r("w-24 h-16 rounded-xl p-0.5 transition-all", d === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: n
						}), /* @__PURE__ */ N("span", {
							className: r("text-xs font-semibold", d === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})]
			}),
			/* @__PURE__ */ N(x, {
				title: "Theme",
				children: /* @__PURE__ */ P(S, {
					className: "!overflow-visible",
					children: [
						/* @__PURE__ */ P("div", {
							className: "px-4 py-3 flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ N("span", {
								className: "text-[15px] text-black dark:text-white pt-1 shrink-0",
								children: "Color"
							}), /* @__PURE__ */ N("div", {
								className: "flex items-start gap-1 flex-wrap justify-end",
								children: U.map((e) => /* @__PURE__ */ P("div", {
									className: "flex flex-col items-center gap-1 min-w-[36px] shrink-0",
									children: [/* @__PURE__ */ N("button", {
										onClick: () => v(e.id),
										className: "w-8 h-8 flex items-center justify-center rounded-full focus:outline-none transition-transform active:scale-95",
										children: /* @__PURE__ */ N("div", {
											className: r("w-5 h-5 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all", e.bg, p === e.id ? "scale-105" : "hover:scale-110"),
											style: { boxShadow: p === e.id ? `0 0 0 2px ${o === "dark" ? "#2c2c2e" : "#ffffff"}, 0 0 0 4px ${G[e.id]}` : void 0 }
										})
									}), e.id === "multicolor" && /* @__PURE__ */ N("span", {
										className: "text-[10px] text-black/40 dark:text-white/40 leading-none mt-0.5 whitespace-nowrap",
										children: "Multicolor"
									})]
								}, e.id))
							})]
						}),
						/* @__PURE__ */ N(w, {
							label: "Text highlight color",
							control: /* @__PURE__ */ P("div", {
								className: "relative",
								ref: I,
								children: [/* @__PURE__ */ P("button", {
									onClick: () => F((e) => !e),
									className: "flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 rounded-lg text-xs text-black/85 dark:text-white/85 shadow-sm transition-all focus:outline-none min-w-[140px] justify-between",
									children: [/* @__PURE__ */ P("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ N("span", {
											className: "w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0",
											style: { backgroundColor: h === "automatic" ? {
												multicolor: "#b3d7ff",
												blue: "#b3d7ff",
												purple: "#e5b3ff",
												pink: "#ffb3df",
												red: "#ffb3b3",
												orange: "#ffd9b3",
												yellow: "#fff5b3",
												green: "#c7ffb3",
												graphite: "#d9d9d9"
											}[p] || "#b3d7ff" : L.color }
										}), /* @__PURE__ */ N("span", { children: L.label })]
									}), /* @__PURE__ */ N("svg", {
										className: "w-3 h-3 opacity-60 ml-2",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ N("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M19 9l-7 7-7-7"
										})
									})]
								}), M && /* @__PURE__ */ N("div", {
									className: "absolute right-0 bottom-full mb-1 w-44 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden",
									children: W.map((e) => /* @__PURE__ */ P("button", {
										onClick: () => {
											y(e.id), F(!1);
										},
										className: "w-full flex items-center justify-between px-3 py-1.5 text-xs text-black/80 dark:text-white/80 hover:bg-accent-active hover:text-white transition-colors text-left focus:outline-none",
										children: [/* @__PURE__ */ P("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ N("span", {
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
												}[p] || "#b3d7ff" : e.color }
											}), /* @__PURE__ */ N("span", { children: e.label })]
										}), h === e.id && /* @__PURE__ */ N("svg", {
											className: "w-3.5 h-3.5 text-accent-active hover:text-white shrink-0 ml-2",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											strokeWidth: 2.5,
											children: /* @__PURE__ */ N("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												d: "M5 13l4 4L19 7"
											})
										})]
									}, e.id))
								})]
							})
						}),
						/* @__PURE__ */ N(w, {
							label: D === "vi" ? "Cho phép kéo cửa sổ ra ngoài màn hình" : "Allow dragging windows out of bounds",
							control: /* @__PURE__ */ N(C, {
								checked: g,
								onChange: b
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/apps/settings/SettingsWallpaper.tsx
function q() {
	return /* @__PURE__ */ N(u, { variant: "horizontal" });
}
//#endregion
//#region src/components/apps/settings/SettingsDesktopDock.tsx
var J = 12, Y = 64, X = 1.4, Z = "w-full h-1 accent-red-500";
function ee() {
	let e = n((e) => e.dockAppIds), t = n((e) => e.apps), i = n((e) => e.pinToDock), a = n((e) => e.unpinFromDock), o = n((e) => e.dockSize), s = n((e) => e.setDockSize), c = n((e) => e.dockMagnification), u = n((e) => e.setDockMagnification), d = n((e) => e.dockAutoHide), f = n((e) => e.showOpenAppIndicators), p = n((e) => e.setDockAutoHide), h = n((e) => e.setShowOpenAppIndicators), { t: g } = m(), _ = Object.values(t).filter((e) => !e.disabled);
	return /* @__PURE__ */ P("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ P("div", { children: [/* @__PURE__ */ N("h3", {
			className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-3",
			children: g.desktopDock
		}), /* @__PURE__ */ P("div", {
			className: "rounded-card bg-white dark:bg-white/5 px-4 py-3 space-y-4",
			children: [
				/* @__PURE__ */ P("div", {
					className: "grid grid-cols-2 gap-6",
					children: [/* @__PURE__ */ P("div", { children: [/* @__PURE__ */ N("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: /* @__PURE__ */ N("span", { children: g.dockSize })
					}), /* @__PURE__ */ N("input", {
						type: "range",
						min: J,
						max: Y,
						value: o,
						onChange: (e) => s(+e.target.value),
						className: Z
					})] }), /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ P("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: [/* @__PURE__ */ N("span", { children: g.dockMagnification }), /* @__PURE__ */ N("span", {
							className: "text-black/30 dark:text-white/30",
							children: c === 0 ? g.dockMagnificationOff : ""
						})]
					}), /* @__PURE__ */ N("input", {
						type: "range",
						min: 0,
						max: X,
						step: .05,
						value: c,
						onChange: (e) => u(+e.target.value),
						className: Z
					})] })]
				}),
				/* @__PURE__ */ N("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ P("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ N("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Automatically hide and show the Dock"
					}), /* @__PURE__ */ N("button", {
						onClick: () => p(!d),
						className: r("relative h-5 w-9 shrink-0 rounded-full transition-colors", d ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ N("span", { className: r("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", d ? "left-4.5" : "left-0.5") })
					})]
				}),
				/* @__PURE__ */ N("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ P("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ N("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Show indicators for open applications"
					}), /* @__PURE__ */ N("button", {
						onClick: () => h(!f),
						className: r("relative h-5 w-9 shrink-0 rounded-full transition-colors", f ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ N("span", { className: r("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", f ? "left-4.5" : "left-0.5") })
					})]
				})
			]
		})] }), /* @__PURE__ */ P("div", { children: [
			/* @__PURE__ */ N("h3", {
				className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-1",
				children: g.dockApps
			}),
			/* @__PURE__ */ N("p", {
				className: "text-xs text-black/40 dark:text-white/40 mb-3",
				children: g.dockAppsDesc
			}),
			/* @__PURE__ */ N("div", {
				className: "space-y-1.5",
				children: _.map((t) => {
					let n = e.includes(t.id);
					return /* @__PURE__ */ P("div", {
						className: "flex items-center justify-between rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-2.5",
						children: [/* @__PURE__ */ P("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ N(l, {
								appConfig: t,
								size: 32
							}), /* @__PURE__ */ N("span", {
								className: "text-sm font-medium text-black/90 dark:text-white/90",
								children: t.name
							})]
						}), /* @__PURE__ */ N("button", {
							onClick: () => n ? a(t.id) : i(t.id),
							className: r("relative h-6 w-11 shrink-0 rounded-full transition-colors", n ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
							children: /* @__PURE__ */ N("span", { className: r("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", n ? "left-5.5" : "left-0.5") })
						})]
					}, t.id);
				})
			})
		] })]
	});
}
//#endregion
//#region src/components/apps/settings/SettingsNotifications.tsx
function te() {
	let { t: e } = m();
	return /* @__PURE__ */ N("div", {
		className: "space-y-5",
		children: /* @__PURE__ */ P("div", {
			className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 flex flex-col items-center justify-center text-center gap-2",
			children: [/* @__PURE__ */ N("svg", {
				className: "w-10 h-10 text-black/20 dark:text-white/20",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ N("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				})
			}), /* @__PURE__ */ N("p", {
				className: "text-sm font-medium text-black/40 dark:text-white/40",
				children: e.notificationsComingSoon
			})]
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsUpdate.tsx
var ne = {
	idle: "",
	checking: "Đang kiểm tra…",
	downloading: "Đang tải bản cập nhật…",
	extracting: "Đang giải nén…",
	done: "Hoàn tất.",
	error: "Lỗi cập nhật."
};
function Q({ label: e, value: t }) {
	return /* @__PURE__ */ P("div", {
		className: "flex justify-between items-center text-xs",
		children: [/* @__PURE__ */ N("span", {
			className: "text-black/50 dark:text-white/50",
			children: e
		}), /* @__PURE__ */ N("span", {
			className: "text-black/80 dark:text-white/80 font-mono truncate max-w-[60%]",
			children: t
		})]
	});
}
function re() {
	let e = c(), t = o((e) => e.status), n = o((e) => e.setStatus), [r, i] = j(!1), [a, s] = j(null), [l, u] = j(null);
	k(() => {
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
	return e ? /* @__PURE__ */ P("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ P("div", {
				className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 space-y-2",
				children: [
					/* @__PURE__ */ N(Q, {
						label: "Phiên bản renderer đang chạy",
						value: t?.runningRendererVersion ?? "—"
					}),
					/* @__PURE__ */ N(Q, {
						label: "Bản chờ áp dụng",
						value: t?.pendingRendererVersion ?? "Không có"
					}),
					/* @__PURE__ */ N(Q, {
						label: "Bản cài đặt native đã tải",
						value: t?.nativeUpdateDownloaded ? t.nativeUpdateVersion ?? "Có" : "Không có"
					})
				]
			}),
			t?.pendingRendererVersion && t.pendingReleaseNotes && /* @__PURE__ */ P("div", {
				className: "rounded-(--radius-input) bg-blue-500/10 px-3 py-2 text-xs text-blue-700 dark:text-blue-300 whitespace-pre-line",
				children: [
					/* @__PURE__ */ P("strong", { children: [
						"Bản ",
						t.pendingRendererVersion,
						":"
					] }),
					" ",
					t.pendingReleaseNotes
				]
			}),
			l && l.phase !== "idle" && l.phase !== "error" && /* @__PURE__ */ P("div", {
				className: "rounded-(--radius-input) bg-black/5 dark:bg-white/5 px-3 py-2 space-y-1.5",
				children: [/* @__PURE__ */ P("div", {
					className: "text-xs text-black/60 dark:text-white/60",
					children: [ne[l.phase], l.phase === "downloading" && l.percent !== null ? ` ${l.percent}%` : ""]
				}), l.phase === "downloading" && /* @__PURE__ */ N("div", {
					className: "h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden",
					children: /* @__PURE__ */ N("div", {
						className: "h-full rounded-full bg-blue-500 transition-all",
						style: { width: l.percent === null ? "30%" : `${l.percent}%` }
					})
				})]
			}),
			/* @__PURE__ */ N("button", {
				onClick: d,
				disabled: r,
				className: "w-full rounded-(--radius-input) bg-blue-500 text-white text-sm font-medium py-2 disabled:opacity-50",
				children: r ? "Đang kiểm tra…" : "Kiểm tra cập nhật"
			}),
			a && /* @__PURE__ */ N("div", {
				className: `rounded-(--radius-input) px-3 py-2 text-xs ${a.ok ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`,
				children: a.message
			})
		]
	}) : /* @__PURE__ */ N("div", {
		className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 text-center text-sm text-black/40 dark:text-white/40",
		children: "Tính năng cập nhật không khả dụng trên nền tảng này."
	});
}
//#endregion
//#region src/components/apps/settings/AppSettingsRegistry.tsx
var ie = { TerminalSettings: D(() => import("./TerminalSettings-CdTmkW22.js").then((e) => ({ default: e.TerminalSettings }))) };
function ae({ settingsKey: e }) {
	let t = ie[e];
	return t ? /* @__PURE__ */ N(E, {
		fallback: /* @__PURE__ */ N("div", {
			className: "flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40",
			children: "Loading…"
		}),
		children: /* @__PURE__ */ N(t, {})
	}) : /* @__PURE__ */ P("div", {
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
function $({ lucideIcon: e, iconColor: t, label: n, active: i, onClick: a, iconEl: o, hasBadge: s }) {
	return /* @__PURE__ */ P("button", {
		onClick: a,
		className: r("w-full flex items-center gap-3 px-3 py-2 rounded-(--radius-input) text-left transition-colors focus:outline-none text-sm", i ? "bg-accent-active text-white" : "text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/8"),
		children: [o ?? (e ? /* @__PURE__ */ P("span", {
			className: "relative w-7 h-7 rounded-(--radius-input) flex items-center justify-center shrink-0",
			style: { background: `linear-gradient(135deg, ${t?.[0] ?? "#636366"}, ${t?.[1] ?? "#48484a"})` },
			children: [/* @__PURE__ */ N(e, {
				className: "w-4 h-4 text-white",
				strokeWidth: 1.8
			}), s && /* @__PURE__ */ N("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
		}) : null), /* @__PURE__ */ N("span", {
			className: "truncate font-medium",
			children: n
		})]
	});
}
function oe({ windowId: e }) {
	let { t } = m(), r = n((e) => e.apps), i = o((e) => e.status), u = c(), h = Object.values(r).filter((e) => !e.disabled && e.appSettings), g = n((e) => e.settingsActiveTab), _ = n((e) => e.setSettingsActiveTab), [v, x] = y(g);
	k(() => {
		x(g);
	}, [g, x]);
	let S = [
		{
			id: "general",
			label: t.general,
			description: t.generalDesc,
			lucideIcon: d,
			color: ["#636366", "#48484a"],
			component: V
		},
		{
			id: "update",
			label: t.softwareUpdate,
			description: t.softwareUpdateDesc,
			lucideIcon: p,
			color: ["#ff9500", "#c93400"],
			component: re
		},
		{
			id: "appearance",
			label: t.appearance,
			description: t.appearanceDesc,
			lucideIcon: I,
			color: ["#5e5ce6", "#3634a3"],
			component: K
		},
		{
			id: "wallpaper",
			label: t.wallpaper,
			description: t.wallpaperDesc,
			lucideIcon: f,
			color: ["#30d158", "#25a244"],
			component: q
		},
		{
			id: "desktop-dock",
			label: t.desktopDock,
			description: t.desktopDockDesc,
			lucideIcon: F,
			color: ["#0a84ff", "#0055d4"],
			component: ee
		},
		{
			id: "notifications",
			label: t.notifications,
			description: t.notificationsDesc,
			lucideIcon: s,
			color: ["#ff3b30", "#cc2323"],
			component: te
		}
	], C = u ? S : S.filter((e) => e.id !== "update"), w = O((e) => {
		x(e), e && _(e);
	}, [x, _]), T = (() => {
		if (!v) return null;
		if (v.startsWith("app:")) {
			let e = r[v.slice(4)];
			return e ? {
				label: e.name,
				description: "",
				appConfig: e
			} : null;
		}
		return C.find((e) => e.id === v) ?? null;
	})();
	return /* @__PURE__ */ N(b, {
		list: /* @__PURE__ */ P("aside", {
			className: "flex flex-col h-full overflow-y-auto bg-neutral-200/60 dark:bg-[#11141B] px-3 py-4 gap-1",
			children: [
				/* @__PURE__ */ N("div", {
					className: "mb-3 mx-1",
					children: /* @__PURE__ */ P("label", {
						className: "flex items-center gap-2 bg-black/8 dark:bg-white/8 rounded-(--radius-input) px-3 py-1.5",
						children: [/* @__PURE__ */ N("svg", {
							className: "w-3.5 h-3.5 text-black/40 dark:text-white/40 shrink-0",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ N("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							})
						}), /* @__PURE__ */ N("input", {
							type: "search",
							placeholder: t.search,
							className: "bg-transparent text-sm text-black/80 dark:text-white/80 placeholder:text-black/35 dark:placeholder:text-white/35 outline-none w-full"
						})]
					})
				}),
				/* @__PURE__ */ N("p", {
					className: "px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: t.system
				}),
				C.map((e) => /* @__PURE__ */ N($, {
					lucideIcon: e.lucideIcon,
					iconColor: e.color,
					label: e.label,
					active: v === e.id,
					onClick: () => w(e.id),
					hasBadge: e.id === "update" && a(i)
				}, e.id)),
				h.length > 0 && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N("p", {
					className: "px-3 mt-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: t.applications
				}), h.map((e) => /* @__PURE__ */ N($, {
					label: e.name,
					active: v === `app:${e.id}`,
					onClick: () => w(`app:${e.id}`),
					iconEl: /* @__PURE__ */ N("div", {
						className: "w-7 h-7 shrink-0",
						children: /* @__PURE__ */ N(l, {
							appConfig: e,
							size: 28
						})
					})
				}, e.id))] })
			]
		}),
		detail: T ? /* @__PURE__ */ N(se, {
			label: T.label,
			description: T.description,
			lucideIcon: "lucideIcon" in T ? T.lucideIcon : void 0,
			iconColor: "color" in T ? T.color : void 0,
			appConfig: "appConfig" in T ? T.appConfig : void 0,
			children: (() => {
				if (!v) return null;
				if (v.startsWith("app:")) {
					let e = r[v.slice(4)];
					return e?.appSettings ? /* @__PURE__ */ N(ae, { settingsKey: e.appSettings }) : null;
				}
				let e = C.find((e) => e.id === v);
				if (!e) return null;
				let t = e.component;
				return /* @__PURE__ */ N(t, {});
			})()
		}) : null,
		onBack: () => x(null),
		detailTitle: T?.label ?? "",
		className: "bg-neutral-100 dark:bg-[#0F1115]",
		sidebarWidth: "w-56",
		listClassName: "bg-neutral-200/60 dark:bg-[#11141B]"
	});
}
function se({ label: e, description: t, lucideIcon: n, iconColor: r, appConfig: i, children: a }) {
	let o = v();
	return /* @__PURE__ */ P("div", {
		className: "flex flex-col h-full bg-neutral-100 dark:bg-[#0F1115]",
		children: [o && /* @__PURE__ */ P("div", {
			className: "shrink-0 flex items-center gap-2 px-3 h-11 border-b border-black/8 dark:border-white/8 bg-neutral-100 dark:bg-[#0F1115]",
			children: [/* @__PURE__ */ P("button", {
				onClick: o,
				className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0",
				children: [/* @__PURE__ */ N("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2.5,
					children: /* @__PURE__ */ N("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M15 19l-7-7 7-7"
					})
				}), /* @__PURE__ */ N("span", {
					className: "text-[14px] font-medium",
					children: "Settings"
				})]
			}), /* @__PURE__ */ N("h1", {
				className: "flex-1 text-[15px] font-semibold text-black/90 dark:text-white/90 text-center truncate pr-16",
				children: e
			})]
		}), /* @__PURE__ */ P("div", {
			className: "flex-1 overflow-y-auto",
			children: [!o && /* @__PURE__ */ P("div", {
				className: "flex flex-col items-center justify-center pt-8 pb-6 px-6 text-center border-b border-black/6 dark:border-white/6",
				children: [
					/* @__PURE__ */ N("div", {
						className: "mb-3",
						children: i ? /* @__PURE__ */ N("div", {
							className: "w-14 h-14",
							children: /* @__PURE__ */ N(l, {
								appConfig: i,
								size: 56
							})
						}) : n ? /* @__PURE__ */ N("span", {
							className: "w-14 h-14 rounded-[14px] flex items-center justify-center shadow-sm",
							style: { background: `linear-gradient(135deg, ${r?.[0] ?? "#636366"}, ${r?.[1] ?? "#48484a"})` },
							children: /* @__PURE__ */ N(n, {
								className: "w-7 h-7 text-white",
								strokeWidth: 1.6
							})
						}) : null
					}),
					/* @__PURE__ */ N("h1", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90 mb-1",
						children: e
					}),
					t && /* @__PURE__ */ N("p", {
						className: "text-[12px] text-black/45 dark:text-white/45 max-w-xs leading-relaxed",
						children: t
					})
				]
			}), /* @__PURE__ */ N("div", {
				className: "p-5 pb-8",
				children: a
			})]
		})]
	});
}
//#endregion
export { oe as Settings };
