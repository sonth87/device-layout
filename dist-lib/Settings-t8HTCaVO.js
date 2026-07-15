import { L as e } from "./MobileAppViewer-BQvzaP0h.js";
import { t } from "./store-DU55EtUQ.js";
import { t as n } from "./utils-B6YmNDS2.js";
import { t as r } from "./createLucideIcon--WjuKCts.js";
import { _ as i, f as a, h as o, m as s, n as c, p as l, r as u } from "./update-actions-EoqExmV9.js";
import { n as d } from "./music-ByFpMQPn.js";
import { t as f } from "./refresh-cw-BNk9TuR7.js";
import { t as p } from "./useTranslation-C7Ov8uGR.js";
import { t as m } from "./useAppLayout-DfaXs-1a.js";
import { n as h, t as g } from "./MobileSplitView-U5mifaLx.js";
import { a as _, i as v, n as y, r as b, t as x } from "./ui-D0242z7L.js";
import { Suspense as S, lazy as C, useCallback as w, useEffect as T, useRef as E, useState as D } from "react";
import { Fragment as O, jsx as k, jsxs as A } from "react/jsx-runtime";
var j = r("layout-grid", [
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
]), M = r("paintbrush", [
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
]), N = {
	en: "English (US)",
	vi: "Tiếng Việt",
	ja: "日本語",
	ko: "한국어",
	zh: "简体中文",
	th: "ไทย"
}, P = {
	en: "🇺🇸",
	vi: "🇻🇳",
	ja: "🇯🇵",
	ko: "🇰🇷",
	zh: "🇨🇳",
	th: "🇹🇭"
}, F = [
	"en",
	"vi",
	"ja",
	"ko",
	"zh",
	"th"
];
function I() {
	let { t: e, language: n } = p(), r = t((e) => e.setLanguage), [i, a] = D(!1), [o, s] = D(!1);
	return /* @__PURE__ */ k("div", {
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
				description: `${P[n]} ${N[n]}`,
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
		].map(({ id: t, label: c, description: l, expandable: u }) => {
			let d = t === "about", f = t === "lang";
			return /* @__PURE__ */ A("div", {
				className: "overflow-hidden rounded-[var(--radius-card)] bg-white dark:bg-white/5 shadow-sm",
				children: [
					/* @__PURE__ */ A("div", {
						onClick: () => {
							d ? a((e) => !e) : f && s((e) => !e);
						},
						className: `flex items-center justify-between px-4 py-3 select-none ${u ? "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/8 transition-colors" : ""}`,
						children: [/* @__PURE__ */ k("span", {
							className: "text-sm font-medium text-black/90 dark:text-white/90",
							children: c
						}), /* @__PURE__ */ A("span", {
							className: "text-xs text-black/40 dark:text-white/40 flex items-center gap-1.5 min-w-0 max-w-[55%] justify-end",
							children: [/* @__PURE__ */ k("span", {
								className: "truncate",
								children: l
							}), /* @__PURE__ */ k("svg", {
								className: `w-3.5 h-3.5 opacity-35 shrink-0 transition-transform duration-200 ${u && (d ? i : f && o) ? "rotate-90" : ""}`,
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ k("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M9 5l7 7-7 7"
								})
							})]
						})]
					}),
					d && /* @__PURE__ */ k("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${i ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ k("div", {
							className: "py-3 px-4 space-y-0",
							children: [
								{
									label: "Author",
									value: /* @__PURE__ */ k("span", {
										className: "font-semibold text-blue-500 tracking-wider",
										children: "SKYLINE"
									})
								},
								{
									label: "Name",
									value: /* @__PURE__ */ k("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "SONTH"
									})
								},
								{
									label: "GitHub",
									value: /* @__PURE__ */ A("a", {
										href: "https://github.com/sonth87",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-blue-500 hover:underline flex items-center gap-1 font-mono",
										children: ["github/sonth87", /* @__PURE__ */ k("svg", {
											className: "w-3 h-3",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ k("path", {
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
									value: /* @__PURE__ */ k("span", {
										className: "text-black/80 dark:text-white/80 font-mono",
										children: "--/--/----"
									})
								},
								{
									label: "Country",
									value: /* @__PURE__ */ k("span", {
										className: "text-black/80 dark:text-white/80 font-medium",
										children: "🇻🇳 VietNam"
									})
								}
							].map((e, t) => /* @__PURE__ */ A("div", {
								className: `flex justify-between items-center py-2 text-xs ${t > 0 ? "border-t border-black/5 dark:border-white/5" : ""}`,
								children: [/* @__PURE__ */ k("span", {
									className: "text-black/50 dark:text-white/50 font-medium",
									children: e.label
								}), e.value]
							}, e.label))
						})
					}),
					f && /* @__PURE__ */ k("div", {
						className: `transition-all duration-300 ease-in-out overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] ${o ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
						children: /* @__PURE__ */ k("div", {
							className: "py-3.5 px-4 space-y-3.5",
							children: /* @__PURE__ */ A("div", { children: [/* @__PURE__ */ k("span", {
								className: "text-xs text-black/50 dark:text-white/50 font-medium block mb-2",
								children: e.preferredLanguage
							}), /* @__PURE__ */ A("div", {
								className: "relative",
								children: [/* @__PURE__ */ k("select", {
									value: n,
									onChange: (e) => r(e.target.value),
									className: "w-full bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none cursor-pointer pr-8",
									children: F.map((e) => /* @__PURE__ */ A("option", {
										value: e,
										className: "bg-white dark:bg-[#151821] text-black dark:text-white",
										children: [
											P[e],
											" ",
											N[e]
										]
									}, e))
								}), /* @__PURE__ */ k("div", {
									className: "absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none opacity-40",
									children: /* @__PURE__ */ k("svg", {
										className: "w-3.5 h-3.5 text-black dark:text-white",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ k("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M19 9l-7 7-7-7"
										})
									})
								})]
							})] })
						})
					})
				]
			}, t);
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsAppearance.tsx
var L = [
	"macos",
	"ipad",
	"iphone",
	"windows",
	"android"
], R = [
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
], z = [
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
], B = {
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
function V() {
	let r = t((e) => e.osTheme), i = t((e) => e.colorScheme), a = t((e) => e.resolvedColorScheme), o = t((e) => e.glassEnabled), s = t((e) => e.setOSTheme), c = t((e) => e.setColorScheme), l = t((e) => e.setGlassEnabled), u = t((e) => e.glassMode), d = t((e) => e.setGlassMode), f = t((e) => e.accentColor), h = t((e) => e.highlightColor), g = t((e) => e.allowDragOutOfBounds), S = t((e) => e.setAccentColor), C = t((e) => e.setHighlightColor), w = t((e) => e.setAllowDragOutOfBounds), { t: O, language: j } = p(), { isNarrow: M } = m(), [N, P] = D(!1), F = E(null);
	T(() => {
		let e = (e) => {
			F.current && !F.current.contains(e.target) && P(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	let I = z.find((e) => e.id === h) || z[0], V = [
		{
			id: "auto",
			label: O.colorSchemeAuto,
			preview: /* @__PURE__ */ A("div", {
				className: "w-full h-full rounded-lg flex overflow-hidden border border-black/5 dark:border-white/5",
				children: [/* @__PURE__ */ k("div", {
					className: "flex-1 bg-slate-100 p-1.5 flex flex-col gap-1 border-r border-black/5",
					children: /* @__PURE__ */ A("div", {
						className: "flex-1 bg-white rounded-l-md shadow-sm p-1 flex flex-col justify-between border-y border-l border-black/5",
						children: [/* @__PURE__ */ A("div", {
							className: "flex gap-0.5",
							children: [/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-red-400" }), /* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-yellow-400" })]
						}), /* @__PURE__ */ k("div", { className: "h-1.5 bg-red-100 rounded-l w-4" })]
					})
				}), /* @__PURE__ */ k("div", {
					className: "flex-1 bg-[#1b2030] p-1.5 flex flex-col gap-1",
					children: /* @__PURE__ */ A("div", {
						className: "flex-1 bg-[#151821] rounded-r-md shadow-sm p-1 flex flex-col justify-between border-y border-r border-white/5",
						children: [/* @__PURE__ */ A("div", {
							className: "flex gap-0.5 justify-end",
							children: [/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }), /* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-green-400" })]
						}), /* @__PURE__ */ k("div", { className: "h-1.5 bg-red-950 rounded-r w-4 ml-auto" })]
					})
				})]
			})
		},
		{
			id: "light",
			label: O.colorSchemeLight,
			preview: /* @__PURE__ */ k("div", {
				className: "w-full h-full bg-slate-100 rounded-lg p-1.5 flex flex-col gap-1 border border-black/5",
				children: /* @__PURE__ */ A("div", {
					className: "flex-1 bg-white rounded-md shadow-sm p-1 flex flex-col justify-between border border-black/5",
					children: [/* @__PURE__ */ A("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ k("div", { className: "h-1.5 bg-red-100 rounded w-6" })]
				})
			})
		},
		{
			id: "dark",
			label: O.colorSchemeDark,
			preview: /* @__PURE__ */ k("div", {
				className: "w-full h-full bg-[#1b2030] rounded-lg p-1.5 flex flex-col gap-1 border border-white/5",
				children: /* @__PURE__ */ A("div", {
					className: "flex-1 bg-[#151821] rounded-md shadow-sm p-1 flex flex-col justify-between border border-white/5",
					children: [/* @__PURE__ */ A("div", {
						className: "flex gap-0.5",
						children: [
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-red-400" }),
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-yellow-400" }),
							/* @__PURE__ */ k("div", { className: "w-1 h-1 rounded-full bg-green-400" })
						]
					}), /* @__PURE__ */ k("div", { className: "h-1.5 bg-red-950 rounded w-6" })]
				})
			})
		}
	];
	return /* @__PURE__ */ A("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ k(_, {
				title: O.osTheme,
				children: M ? /* @__PURE__ */ k(v, { children: L.map((t) => /* @__PURE__ */ k(b, {
					label: e[t].name,
					active: r === t,
					onPress: () => s(t)
				}, t)) }) : /* @__PURE__ */ k(x, {
					narrow: 2,
					medium: 3,
					wide: 3,
					gap: "12px",
					children: L.map((t) => {
						let i = e[t];
						return /* @__PURE__ */ A("button", {
							onClick: () => s(t),
							className: n("rounded-xl border-2 p-3 text-left transition-all", r === t ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-transparent bg-white hover:border-black/10 dark:bg-white/5 dark:hover:border-white/10"),
							children: [/* @__PURE__ */ k("p", {
								className: "text-sm font-semibold text-black/90 dark:text-white/90",
								children: i.name
							}), /* @__PURE__ */ k("p", {
								className: "mt-1 text-xs text-black/50 dark:text-white/50 leading-5",
								children: i.description
							})]
						}, t);
					})
				})
			}),
			/* @__PURE__ */ k(_, {
				title: O.colorScheme,
				children: M ? /* @__PURE__ */ k(v, { children: V.map(({ id: e, label: t }) => /* @__PURE__ */ k(b, {
					label: t,
					active: i === e,
					onPress: () => c(e)
				}, e)) }) : /* @__PURE__ */ k("div", {
					className: "flex gap-5",
					children: V.map(({ id: e, label: t, preview: r }) => /* @__PURE__ */ A("button", {
						onClick: () => c(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ k("div", {
							className: n("w-24 h-16 rounded-xl p-0.5 transition-all", i === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: r
						}), /* @__PURE__ */ k("span", {
							className: n("text-xs font-semibold", i === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})
			}),
			/* @__PURE__ */ k(_, {
				title: O.effects,
				children: /* @__PURE__ */ k(v, { children: /* @__PURE__ */ k(b, {
					label: O.liquidGlass,
					subtitle: O.liquidGlassDesc,
					control: /* @__PURE__ */ k(y, {
						checked: o,
						onChange: l
					})
				}) })
			}),
			o && /* @__PURE__ */ A(_, {
				title: "Liquid Glass",
				children: [/* @__PURE__ */ k("p", {
					className: "text-xs text-black/50 dark:text-white/50 mb-3 -mt-2",
					children: "Choose your preferred look for Liquid Glass."
				}), /* @__PURE__ */ k("div", {
					className: "flex gap-5",
					children: [{
						id: "clear",
						label: "Clear",
						preview: /* @__PURE__ */ A("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: [/* @__PURE__ */ k("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/30 via-transparent to-transparent" }), /* @__PURE__ */ A("div", {
								className: "w-16 h-10 rounded-lg bg-white/10 border border-white/40 shadow-md flex items-center justify-center backdrop-blur-[3px] overflow-hidden",
								children: [/* @__PURE__ */ k("div", { className: "absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" }), /* @__PURE__ */ k("div", { className: "w-8 h-4 rounded bg-white/20 border border-white/10" })]
							})]
						})
					}, {
						id: "tinted",
						label: "Tinted",
						preview: /* @__PURE__ */ k("div", {
							className: "relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600",
							children: /* @__PURE__ */ k("div", {
								className: "w-16 h-10 rounded-lg bg-white/25 border border-white/25 shadow-md flex items-center justify-center backdrop-blur-[16px] overflow-hidden",
								children: /* @__PURE__ */ k("div", { className: "w-8 h-4 rounded bg-white/30 border border-white/10" })
							})
						})
					}].map(({ id: e, label: t, preview: r }) => /* @__PURE__ */ A("button", {
						onClick: () => d(e),
						className: "flex flex-col items-center gap-1.5 focus:outline-none",
						children: [/* @__PURE__ */ k("div", {
							className: n("w-24 h-16 rounded-xl p-0.5 transition-all", u === e ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-neutral-900" : "hover:opacity-80"),
							children: r
						}), /* @__PURE__ */ k("span", {
							className: n("text-xs font-semibold", u === e ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"),
							children: t
						})]
					}, e))
				})]
			}),
			/* @__PURE__ */ k(_, {
				title: "Theme",
				children: /* @__PURE__ */ A(v, {
					className: "!overflow-visible",
					children: [
						/* @__PURE__ */ A("div", {
							className: "px-4 py-3 flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ k("span", {
								className: "text-[15px] text-black dark:text-white pt-1 shrink-0",
								children: "Color"
							}), /* @__PURE__ */ k("div", {
								className: "flex items-start gap-1 flex-wrap justify-end",
								children: R.map((e) => /* @__PURE__ */ A("div", {
									className: "flex flex-col items-center gap-1 min-w-[36px] shrink-0",
									children: [/* @__PURE__ */ k("button", {
										onClick: () => S(e.id),
										className: "w-8 h-8 flex items-center justify-center rounded-full focus:outline-none transition-transform active:scale-95",
										children: /* @__PURE__ */ k("div", {
											className: n("w-5 h-5 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-all", e.bg, f === e.id ? "scale-105" : "hover:scale-110"),
											style: { boxShadow: f === e.id ? `0 0 0 2px ${a === "dark" ? "#2c2c2e" : "#ffffff"}, 0 0 0 4px ${B[e.id]}` : void 0 }
										})
									}), e.id === "multicolor" && /* @__PURE__ */ k("span", {
										className: "text-[10px] text-black/40 dark:text-white/40 leading-none mt-0.5 whitespace-nowrap",
										children: "Multicolor"
									})]
								}, e.id))
							})]
						}),
						/* @__PURE__ */ k(b, {
							label: "Text highlight color",
							control: /* @__PURE__ */ A("div", {
								className: "relative",
								ref: F,
								children: [/* @__PURE__ */ A("button", {
									onClick: () => P((e) => !e),
									className: "flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 rounded-lg text-xs text-black/85 dark:text-white/85 shadow-sm transition-all focus:outline-none min-w-[140px] justify-between",
									children: [/* @__PURE__ */ A("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ k("span", {
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
											}[f] || "#b3d7ff" : I.color }
										}), /* @__PURE__ */ k("span", { children: I.label })]
									}), /* @__PURE__ */ k("svg", {
										className: "w-3 h-3 opacity-60 ml-2",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2.5,
										children: /* @__PURE__ */ k("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M19 9l-7 7-7-7"
										})
									})]
								}), N && /* @__PURE__ */ k("div", {
									className: "absolute right-0 bottom-full mb-1 w-44 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden",
									children: z.map((e) => /* @__PURE__ */ A("button", {
										onClick: () => {
											C(e.id), P(!1);
										},
										className: "w-full flex items-center justify-between px-3 py-1.5 text-xs text-black/80 dark:text-white/80 hover:bg-accent-active hover:text-white transition-colors text-left focus:outline-none",
										children: [/* @__PURE__ */ A("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ k("span", {
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
											}), /* @__PURE__ */ k("span", { children: e.label })]
										}), h === e.id && /* @__PURE__ */ k("svg", {
											className: "w-3.5 h-3.5 text-accent-active hover:text-white shrink-0 ml-2",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											strokeWidth: 2.5,
											children: /* @__PURE__ */ k("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												d: "M5 13l4 4L19 7"
											})
										})]
									}, e.id))
								})]
							})
						}),
						/* @__PURE__ */ k(b, {
							label: j === "vi" ? "Cho phép kéo cửa sổ ra ngoài màn hình" : "Allow dragging windows out of bounds",
							control: /* @__PURE__ */ k(y, {
								checked: g,
								onChange: w
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
function H() {
	return /* @__PURE__ */ k(u, { variant: "horizontal" });
}
//#endregion
//#region src/components/apps/settings/SettingsDesktopDock.tsx
var U = 12, W = 64, G = 1.4, K = "w-full h-1 accent-red-500";
function q() {
	let e = t((e) => e.dockAppIds), r = t((e) => e.apps), i = t((e) => e.pinToDock), a = t((e) => e.unpinFromDock), o = t((e) => e.dockSize), c = t((e) => e.setDockSize), l = t((e) => e.dockMagnification), u = t((e) => e.setDockMagnification), d = t((e) => e.dockAutoHide), f = t((e) => e.showOpenAppIndicators), m = t((e) => e.setDockAutoHide), h = t((e) => e.setShowOpenAppIndicators), { t: g } = p(), _ = Object.values(r).filter((e) => !e.disabled);
	return /* @__PURE__ */ A("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ A("div", { children: [/* @__PURE__ */ k("h3", {
			className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-3",
			children: g.desktopDock
		}), /* @__PURE__ */ A("div", {
			className: "rounded-card bg-white dark:bg-white/5 px-4 py-3 space-y-4",
			children: [
				/* @__PURE__ */ A("div", {
					className: "grid grid-cols-2 gap-6",
					children: [/* @__PURE__ */ A("div", { children: [/* @__PURE__ */ k("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: /* @__PURE__ */ k("span", { children: g.dockSize })
					}), /* @__PURE__ */ k("input", {
						type: "range",
						min: U,
						max: W,
						value: o,
						onChange: (e) => c(+e.target.value),
						className: K
					})] }), /* @__PURE__ */ A("div", { children: [/* @__PURE__ */ A("div", {
						className: "flex items-center justify-between text-xs text-black/50 dark:text-white/50 mb-1.5",
						children: [/* @__PURE__ */ k("span", { children: g.dockMagnification }), /* @__PURE__ */ k("span", {
							className: "text-black/30 dark:text-white/30",
							children: l === 0 ? g.dockMagnificationOff : ""
						})]
					}), /* @__PURE__ */ k("input", {
						type: "range",
						min: 0,
						max: G,
						step: .05,
						value: l,
						onChange: (e) => u(+e.target.value),
						className: K
					})] })]
				}),
				/* @__PURE__ */ k("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ A("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ k("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Automatically hide and show the Dock"
					}), /* @__PURE__ */ k("button", {
						onClick: () => m(!d),
						className: n("relative h-5 w-9 shrink-0 rounded-full transition-colors", d ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ k("span", { className: n("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", d ? "left-4.5" : "left-0.5") })
					})]
				}),
				/* @__PURE__ */ k("div", { className: "h-px bg-black/5 dark:bg-white/5 -mx-4" }),
				/* @__PURE__ */ A("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ k("span", {
						className: "text-xs font-medium text-black/80 dark:text-white/80",
						children: "Show indicators for open applications"
					}), /* @__PURE__ */ k("button", {
						onClick: () => h(!f),
						className: n("relative h-5 w-9 shrink-0 rounded-full transition-colors", f ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
						children: /* @__PURE__ */ k("span", { className: n("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all", f ? "left-4.5" : "left-0.5") })
					})]
				})
			]
		})] }), /* @__PURE__ */ A("div", { children: [
			/* @__PURE__ */ k("h3", {
				className: "text-sm font-semibold text-black/90 dark:text-white/90 mb-1",
				children: g.dockApps
			}),
			/* @__PURE__ */ k("p", {
				className: "text-xs text-black/40 dark:text-white/40 mb-3",
				children: g.dockAppsDesc
			}),
			/* @__PURE__ */ k("div", {
				className: "space-y-1.5",
				children: _.map((t) => {
					let r = e.includes(t.id);
					return /* @__PURE__ */ A("div", {
						className: "flex items-center justify-between rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-2.5",
						children: [/* @__PURE__ */ A("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ k(s, {
								appConfig: t,
								size: 32
							}), /* @__PURE__ */ k("span", {
								className: "text-sm font-medium text-black/90 dark:text-white/90",
								children: t.name
							})]
						}), /* @__PURE__ */ k("button", {
							onClick: () => r ? a(t.id) : i(t.id),
							className: n("relative h-6 w-11 shrink-0 rounded-full transition-colors", r ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
							children: /* @__PURE__ */ k("span", { className: n("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", r ? "left-5.5" : "left-0.5") })
						})]
					}, t.id);
				})
			})
		] })]
	});
}
//#endregion
//#region src/components/apps/settings/SettingsNotifications.tsx
function J() {
	let { t: e } = p();
	return /* @__PURE__ */ k("div", {
		className: "space-y-5",
		children: /* @__PURE__ */ A("div", {
			className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 flex flex-col items-center justify-center text-center gap-2",
			children: [/* @__PURE__ */ k("svg", {
				className: "w-10 h-10 text-black/20 dark:text-white/20",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ k("path", {
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				})
			}), /* @__PURE__ */ k("p", {
				className: "text-sm font-medium text-black/40 dark:text-white/40",
				children: e.notificationsComingSoon
			})]
		})
	});
}
//#endregion
//#region src/components/apps/settings/SettingsUpdate.tsx
var Y = {
	idle: "",
	checking: "Đang kiểm tra…",
	downloading: "Đang tải bản cập nhật…",
	extracting: "Đang giải nén…",
	done: "Hoàn tất.",
	error: "Lỗi cập nhật."
};
function X({ label: e, value: t }) {
	return /* @__PURE__ */ A("div", {
		className: "flex justify-between items-center text-xs",
		children: [/* @__PURE__ */ k("span", {
			className: "text-black/50 dark:text-white/50",
			children: e
		}), /* @__PURE__ */ k("span", {
			className: "text-black/80 dark:text-white/80 font-mono truncate max-w-[60%]",
			children: t
		})]
	});
}
function Z() {
	let e = c(), t = l((e) => e.status), n = l((e) => e.setStatus), [r, i] = D(!1), [a, o] = D(null), [s, u] = D(null);
	T(() => {
		if (e?.onProgress) return e.onProgress((t) => {
			u(t), t.phase === "done" && e.checkUpdate().then(n).catch(() => {}), t.phase === "error" && o({
				ok: !1,
				message: t.error ?? "Cập nhật thất bại."
			});
		});
	}, [e, n]);
	async function d() {
		if (!(!e || r)) {
			i(!0), o(null);
			try {
				let r = t?.pendingRendererVersion ?? null, i = t?.nativeUpdateDownloaded ?? !1, [a] = await Promise.all([e.checkUpdate(), new Promise((e) => setTimeout(e, 500))]);
				n(a);
				let s = !!a.pendingRendererVersion && a.pendingRendererVersion !== r, c = a.nativeUpdateDownloaded && !i;
				o(s || c ? {
					ok: !0,
					message: "Đã tìm thấy bản cập nhật mới."
				} : {
					ok: !0,
					message: "Đang dùng phiên bản mới nhất."
				});
			} catch (e) {
				o({
					ok: !1,
					message: e instanceof Error ? e.message : "Kiểm tra cập nhật thất bại."
				});
			} finally {
				i(!1);
			}
		}
	}
	return e ? /* @__PURE__ */ A("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ A("div", {
				className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-3 space-y-2",
				children: [
					/* @__PURE__ */ k(X, {
						label: "Phiên bản renderer đang chạy",
						value: t?.runningRendererVersion ?? "—"
					}),
					/* @__PURE__ */ k(X, {
						label: "Bản chờ áp dụng",
						value: t?.pendingRendererVersion ?? "Không có"
					}),
					/* @__PURE__ */ k(X, {
						label: "Bản cài đặt native đã tải",
						value: t?.nativeUpdateDownloaded ? t.nativeUpdateVersion ?? "Có" : "Không có"
					})
				]
			}),
			t?.pendingRendererVersion && t.pendingReleaseNotes && /* @__PURE__ */ A("div", {
				className: "rounded-(--radius-input) bg-blue-500/10 px-3 py-2 text-xs text-blue-700 dark:text-blue-300 whitespace-pre-line",
				children: [
					/* @__PURE__ */ A("strong", { children: [
						"Bản ",
						t.pendingRendererVersion,
						":"
					] }),
					" ",
					t.pendingReleaseNotes
				]
			}),
			s && s.phase !== "idle" && s.phase !== "error" && /* @__PURE__ */ A("div", {
				className: "rounded-(--radius-input) bg-black/5 dark:bg-white/5 px-3 py-2 space-y-1.5",
				children: [/* @__PURE__ */ A("div", {
					className: "text-xs text-black/60 dark:text-white/60",
					children: [Y[s.phase], s.phase === "downloading" && s.percent !== null ? ` ${s.percent}%` : ""]
				}), s.phase === "downloading" && /* @__PURE__ */ k("div", {
					className: "h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden",
					children: /* @__PURE__ */ k("div", {
						className: "h-full rounded-full bg-blue-500 transition-all",
						style: { width: s.percent === null ? "30%" : `${s.percent}%` }
					})
				})]
			}),
			/* @__PURE__ */ k("button", {
				onClick: d,
				disabled: r,
				className: "w-full rounded-(--radius-input) bg-blue-500 text-white text-sm font-medium py-2 disabled:opacity-50",
				children: r ? "Đang kiểm tra…" : "Kiểm tra cập nhật"
			}),
			a && /* @__PURE__ */ k("div", {
				className: `rounded-(--radius-input) px-3 py-2 text-xs ${a.ok ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`,
				children: a.message
			})
		]
	}) : /* @__PURE__ */ k("div", {
		className: "rounded-[var(--radius-card)] bg-white dark:bg-white/5 px-4 py-8 text-center text-sm text-black/40 dark:text-white/40",
		children: "Tính năng cập nhật không khả dụng trên nền tảng này."
	});
}
//#endregion
//#region src/components/apps/settings/AppSettingsRegistry.tsx
var Q = { TerminalSettings: C(() => import("./TerminalSettings-DNDZp2wX.js").then((e) => ({ default: e.TerminalSettings }))) };
function ee({ settingsKey: e }) {
	let t = Q[e];
	return t ? /* @__PURE__ */ k(S, {
		fallback: /* @__PURE__ */ k("div", {
			className: "flex h-40 items-center justify-center text-sm text-black/40 dark:text-white/40",
			children: "Loading…"
		}),
		children: /* @__PURE__ */ k(t, {})
	}) : /* @__PURE__ */ A("div", {
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
	return /* @__PURE__ */ A("button", {
		onClick: a,
		className: n("w-full flex items-center gap-3 px-3 py-2 rounded-(--radius-input) text-left transition-colors focus:outline-none text-sm", i ? "bg-accent-active text-white" : "text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/8"),
		children: [o ?? (e ? /* @__PURE__ */ A("span", {
			className: "relative w-7 h-7 rounded-(--radius-input) flex items-center justify-center shrink-0",
			style: { background: `linear-gradient(135deg, ${t?.[0] ?? "#636366"}, ${t?.[1] ?? "#48484a"})` },
			children: [/* @__PURE__ */ k(e, {
				className: "w-4 h-4 text-white",
				strokeWidth: 1.8
			}), s && /* @__PURE__ */ k("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
		}) : null), /* @__PURE__ */ k("span", {
			className: "truncate font-medium",
			children: r
		})]
	});
}
function te({ windowId: e }) {
	let { t: n } = p(), r = t((e) => e.apps), u = l((e) => e.status), m = c(), h = Object.values(r).filter((e) => !e.disabled && e.appSettings), [_, v] = D("general"), y = [
		{
			id: "general",
			label: n.general,
			description: n.generalDesc,
			lucideIcon: o,
			color: ["#636366", "#48484a"],
			component: I
		},
		{
			id: "update",
			label: n.softwareUpdate,
			description: n.softwareUpdateDesc,
			lucideIcon: f,
			color: ["#ff9500", "#c93400"],
			component: Z
		},
		{
			id: "appearance",
			label: n.appearance,
			description: n.appearanceDesc,
			lucideIcon: M,
			color: ["#5e5ce6", "#3634a3"],
			component: V
		},
		{
			id: "wallpaper",
			label: n.wallpaper,
			description: n.wallpaperDesc,
			lucideIcon: d,
			color: ["#30d158", "#25a244"],
			component: H
		},
		{
			id: "desktop-dock",
			label: n.desktopDock,
			description: n.desktopDockDesc,
			lucideIcon: j,
			color: ["#0a84ff", "#0055d4"],
			component: q
		},
		{
			id: "notifications",
			label: n.notifications,
			description: n.notificationsDesc,
			lucideIcon: i,
			color: ["#ff3b30", "#cc2323"],
			component: J
		}
	], b = m ? y : y.filter((e) => e.id !== "update"), x = w((e) => v(e), []), S = (() => {
		if (!_) return null;
		if (_.startsWith("app:")) {
			let e = r[_.slice(4)];
			return e ? {
				label: e.name,
				description: "",
				appConfig: e
			} : null;
		}
		return b.find((e) => e.id === _) ?? null;
	})();
	return /* @__PURE__ */ k(g, {
		list: /* @__PURE__ */ A("aside", {
			className: "flex flex-col h-full overflow-y-auto bg-neutral-200/60 dark:bg-[#11141B] px-3 py-4 gap-1",
			children: [
				/* @__PURE__ */ k("div", {
					className: "mb-3 mx-1",
					children: /* @__PURE__ */ A("label", {
						className: "flex items-center gap-2 bg-black/8 dark:bg-white/8 rounded-(--radius-input) px-3 py-1.5",
						children: [/* @__PURE__ */ k("svg", {
							className: "w-3.5 h-3.5 text-black/40 dark:text-white/40 shrink-0",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ k("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							})
						}), /* @__PURE__ */ k("input", {
							type: "search",
							placeholder: n.search,
							className: "bg-transparent text-sm text-black/80 dark:text-white/80 placeholder:text-black/35 dark:placeholder:text-white/35 outline-none w-full"
						})]
					})
				}),
				/* @__PURE__ */ k("p", {
					className: "px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: n.system
				}),
				b.map((e) => /* @__PURE__ */ k($, {
					lucideIcon: e.lucideIcon,
					iconColor: e.color,
					label: e.label,
					active: _ === e.id,
					onClick: () => x(e.id),
					hasBadge: e.id === "update" && a(u)
				}, e.id)),
				h.length > 0 && /* @__PURE__ */ A(O, { children: [/* @__PURE__ */ k("p", {
					className: "px-3 mt-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-black/35 dark:text-white/35",
					children: n.applications
				}), h.map((e) => /* @__PURE__ */ k($, {
					label: e.name,
					active: _ === `app:${e.id}`,
					onClick: () => x(`app:${e.id}`),
					iconEl: /* @__PURE__ */ k("div", {
						className: "w-7 h-7 shrink-0",
						children: /* @__PURE__ */ k(s, {
							appConfig: e,
							size: 28
						})
					})
				}, e.id))] })
			]
		}),
		detail: S ? /* @__PURE__ */ k(ne, {
			label: S.label,
			description: S.description,
			lucideIcon: "lucideIcon" in S ? S.lucideIcon : void 0,
			iconColor: "color" in S ? S.color : void 0,
			appConfig: "appConfig" in S ? S.appConfig : void 0,
			children: (() => {
				if (!_) return null;
				if (_.startsWith("app:")) {
					let e = r[_.slice(4)];
					return e?.appSettings ? /* @__PURE__ */ k(ee, { settingsKey: e.appSettings }) : null;
				}
				let e = b.find((e) => e.id === _);
				if (!e) return null;
				let t = e.component;
				return /* @__PURE__ */ k(t, {});
			})()
		}) : null,
		onBack: () => v(null),
		detailTitle: S?.label ?? "",
		className: "bg-neutral-100 dark:bg-[#0F1115]",
		sidebarWidth: "w-56",
		listClassName: "bg-neutral-200/60 dark:bg-[#11141B]"
	});
}
function ne({ label: e, description: t, lucideIcon: n, iconColor: r, appConfig: i, children: a }) {
	let o = h();
	return /* @__PURE__ */ A("div", {
		className: "flex flex-col h-full bg-neutral-100 dark:bg-[#0F1115]",
		children: [o && /* @__PURE__ */ A("div", {
			className: "shrink-0 flex items-center gap-2 px-3 h-11 border-b border-black/8 dark:border-white/8 bg-neutral-100 dark:bg-[#0F1115]",
			children: [/* @__PURE__ */ A("button", {
				onClick: o,
				className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0",
				children: [/* @__PURE__ */ k("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2.5,
					children: /* @__PURE__ */ k("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M15 19l-7-7 7-7"
					})
				}), /* @__PURE__ */ k("span", {
					className: "text-[14px] font-medium",
					children: "Settings"
				})]
			}), /* @__PURE__ */ k("h1", {
				className: "flex-1 text-[15px] font-semibold text-black/90 dark:text-white/90 text-center truncate pr-16",
				children: e
			})]
		}), /* @__PURE__ */ A("div", {
			className: "flex-1 overflow-y-auto",
			children: [!o && /* @__PURE__ */ A("div", {
				className: "flex flex-col items-center justify-center pt-8 pb-6 px-6 text-center border-b border-black/6 dark:border-white/6",
				children: [
					/* @__PURE__ */ k("div", {
						className: "mb-3",
						children: i ? /* @__PURE__ */ k("div", {
							className: "w-14 h-14",
							children: /* @__PURE__ */ k(s, {
								appConfig: i,
								size: 56
							})
						}) : n ? /* @__PURE__ */ k("span", {
							className: "w-14 h-14 rounded-[14px] flex items-center justify-center shadow-sm",
							style: { background: `linear-gradient(135deg, ${r?.[0] ?? "#636366"}, ${r?.[1] ?? "#48484a"})` },
							children: /* @__PURE__ */ k(n, {
								className: "w-7 h-7 text-white",
								strokeWidth: 1.6
							})
						}) : null
					}),
					/* @__PURE__ */ k("h1", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90 mb-1",
						children: e
					}),
					t && /* @__PURE__ */ k("p", {
						className: "text-[12px] text-black/45 dark:text-white/45 max-w-xs leading-relaxed",
						children: t
					})
				]
			}), /* @__PURE__ */ k("div", {
				className: "p-5 pb-8",
				children: a
			})]
		})]
	});
}
//#endregion
export { te as Settings };
