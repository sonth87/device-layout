"use client";
import { C as e, S as t, a as n, b as r, c as i, d as a, g as o, h as s, i as c, l, m as u, o as d, r as f, s as p, u as m, y as h } from "./Combination-dkRdWOFm.js";
import { A as g, C as _, D as v, E as y, O as b, S as x, T as S, a as C, b as w, c as T, d as E, f as D, g as O, i as k, j as A, k as j, l as M, m as N, o as ee, p as P, r as te, s as ne, t as re, u as ie, v as ae, w as oe, x as F, y as se } from "./MobileAppViewer-8sWgnhGz.js";
import { c as ce, d as le, l as ue, s as de, t as I, u as fe } from "./store-Bjl9rhnp.js";
import { t as L } from "./utils-B6YmNDS2.js";
import { t as R } from "./createLucideIcon--WjuKCts.js";
import { a as pe, c as me, d as he, f as ge, g as _e, h as ve, i as ye, l as be, m as xe, n as Se, o as Ce, p as z, r as we, s as Te, t as Ee, u as De } from "./update-actions-Zxg_iYqy.js";
import { t as Oe } from "./check-DoT5IS9-.js";
import { t as ke } from "./chevron-right-BcSxNxws.js";
import { t as Ae } from "./grid-3x3-CZiMuCC6.js";
import { t as je } from "./monitor-CDDW7biH.js";
import { _ as Me, a as Ne, c as Pe, d as Fe, f as Ie, g as Le, h as Re, i as ze, l as Be, m as Ve, n as He, o as Ue, p as We, r as Ge, s as Ke, t as qe, u as Je, v as Ye } from "./dist-Bo4kSy1Q.js";
import { t as Xe } from "./search-BKG97C0x.js";
import { t as Ze } from "./sun-DdSv2tyc.js";
import { t as Qe } from "./volume-2-DAfADR-a.js";
import { t as B } from "./x-BYw6fhgP.js";
import { t as V } from "./useTranslation-BpGBgycp.js";
import * as H from "react";
import $e, { Suspense as et, lazy as tt, startTransition as nt, useCallback as U, useContext as rt, useEffect as W, useInsertionEffect as it, useMemo as at, useRef as G, useState as K } from "react";
import { Fragment as q, jsx as J, jsxs as Y } from "react/jsx-runtime";
import { createPortal as ot } from "react-dom";
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/follow-value.mjs
function st(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, l = () => {
		let t = lt(e.get()), r = lt(a);
		if (t === r) {
			c();
			return;
		}
		let s = i ? i.getGeneratorVelocity() : e.getVelocity();
		c(), i = new g({
			keyframes: [t, r],
			velocity: s,
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: o
		});
	}, u = () => {
		l(), e.animation = i ?? void 0, e.events.animationStart?.notify(), i?.then(() => {
			e.animation = void 0, e.events.animationComplete?.notify();
		});
	};
	if (e.attach((e, t) => {
		a = e, o = (e) => t(ct(e, s)), A.postRender(u);
	}, c), j(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(ct(t, s), !1)) : e.set(ct(t, s));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return c;
}
function ct(e, t) {
	return t ? e + t : e;
}
function lt(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function ut(e, t = {}) {
	let { isStatic: n } = rt(b), r = () => j(e) ? e.get() : e;
	if (n) return oe(r);
	let i = S(r());
	return it(() => st(i, e, t), [i, JSON.stringify(t)]), i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-spring.mjs
function dt(e, t = {}) {
	return ut(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region src/components/liquid-glass/GlassFilter.tsx
function ft() {
	return /* @__PURE__ */ J("svg", {
		"aria-hidden": !0,
		style: {
			position: "absolute",
			width: 0,
			height: 0,
			overflow: "hidden"
		},
		children: /* @__PURE__ */ Y("defs", { children: [/* @__PURE__ */ Y("filter", {
			id: "lg-distort",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ J("feGaussianBlur", {
					in: "SourceAlpha",
					stdDeviation: "5",
					result: "edge_blur"
				}),
				/* @__PURE__ */ J("feSpecularLighting", {
					in: "edge_blur",
					surfaceScale: "5",
					specularConstant: "1.8",
					specularExponent: "45",
					lightingColor: "#ffffff",
					result: "specular",
					children: /* @__PURE__ */ J("feDistantLight", {
						azimuth: 225,
						elevation: 60
					})
				}),
				/* @__PURE__ */ J("feComposite", {
					in: "specular",
					in2: "SourceAlpha",
					operator: "in",
					result: "specular_masked"
				}),
				/* @__PURE__ */ J("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.015",
					numOctaves: 2,
					seed: 5,
					result: "noise"
				}),
				/* @__PURE__ */ J("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "noise",
					scale: 28,
					xChannelSelector: "R",
					yChannelSelector: "G",
					result: "refracted"
				}),
				/* @__PURE__ */ J("feColorMatrix", {
					in: "refracted",
					type: "saturate",
					values: "2.2",
					result: "refracted_saturated"
				}),
				/* @__PURE__ */ J("feBlend", {
					in: "specular_masked",
					in2: "refracted_saturated",
					mode: "screen"
				})
			]
		}), /* @__PURE__ */ Y("filter", {
			id: "glass-distortion",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ J("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.001 0.005",
					numOctaves: 1,
					seed: 17,
					result: "turbulence"
				}),
				/* @__PURE__ */ Y("feComponentTransfer", {
					in: "turbulence",
					result: "mapped",
					children: [
						/* @__PURE__ */ J("feFuncR", {
							type: "gamma",
							amplitude: "1",
							exponent: 10,
							offset: .5
						}),
						/* @__PURE__ */ J("feFuncG", {
							type: "gamma",
							amplitude: 0,
							exponent: 1,
							offset: 0
						}),
						/* @__PURE__ */ J("feFuncB", {
							type: "gamma",
							amplitude: 0,
							exponent: 1,
							offset: .5
						})
					]
				}),
				/* @__PURE__ */ J("feGaussianBlur", {
					in: "turbulence",
					stdDeviation: "3",
					result: "softMap"
				}),
				/* @__PURE__ */ J("feSpecularLighting", {
					in: "softMap",
					surfaceScale: "5",
					specularConstant: 1,
					specularExponent: 100,
					lightingColor: "white",
					result: "specLight",
					children: /* @__PURE__ */ J("fePointLight", {
						x: -200,
						y: -200,
						z: 300
					})
				}),
				/* @__PURE__ */ J("feComposite", {
					in: "specLight",
					operator: "arithmetic",
					k1: 0,
					k2: 1,
					k3: 1,
					k4: 0,
					result: "litImage"
				}),
				/* @__PURE__ */ J("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "softMap",
					scale: 180,
					xChannelSelector: "R",
					yChannelSelector: "G"
				})
			]
		})] })
	});
}
//#endregion
//#region src/hooks/useResizeObserver.ts
function pt() {
	let [e, t] = K({
		width: typeof window < "u" ? window.innerWidth : 1280,
		height: typeof window < "u" ? window.innerHeight : 800
	});
	return W(() => {
		let e = () => t({
			width: window.innerWidth,
			height: window.innerHeight
		});
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), e;
}
var mt = R("bell-off", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
		key: "178tsu"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}],
	["path", {
		d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
		key: "1hqiys"
	}]
]), ht = R("bluetooth", [["path", {
	d: "m7 7 10 10-5 5V2l5 5L7 17",
	key: "1q5490"
}]]), gt = R("cast", [
	["path", {
		d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
		key: "3zrzxg"
	}],
	["path", {
		d: "M2 12a9 9 0 0 1 8 8",
		key: "g6cvee"
	}],
	["path", {
		d: "M2 16a5 5 0 0 1 4 4",
		key: "1y1dii"
	}],
	["line", {
		x1: "2",
		x2: "2.01",
		y1: "20",
		y2: "20",
		key: "xu2jvo"
	}]
]), _t = R("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]), vt = R("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), yt = R("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), bt = R("flashlight", [
	["path", {
		d: "M12 13v1",
		key: "176q98"
	}],
	["path", {
		d: "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z",
		key: "17vh7j"
	}],
	["path", {
		d: "M6 6h12",
		key: "n6hhss"
	}]
]), xt = R("grid-2x2", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), St = R("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]), Ct = R("minimize-2", [
	["path", {
		d: "m14 10 7-7",
		key: "oa77jy"
	}],
	["path", {
		d: "M20 10h-6V4",
		key: "mjg0md"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M4 14h6v6",
		key: "rmj7iw"
	}]
]), wt = R("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Tt = R("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), Et = R("plane", [["path", {
	d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
	key: "1v9wt8"
}]]), Dt = R("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), Ot = R("signal", [
	["path", {
		d: "M2 20h.01",
		key: "4haj6o"
	}],
	["path", {
		d: "M7 20v-4",
		key: "j294jx"
	}],
	["path", {
		d: "M12 20v-8",
		key: "i3yub9"
	}],
	["path", {
		d: "M17 20V8",
		key: "1tkaf5"
	}],
	["path", {
		d: "M22 4v16",
		key: "sih9yq"
	}]
]), kt = R("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), At = R("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]), jt = R("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
//#endregion
//#region src/components/window/WindowChrome.tsx
function Mt({ windowId: e, onPointerDown: t }) {
	let n = I((t) => t.windows[e]), r = I((e) => e.apps[n?.appId ?? ""]), i = I((e) => e.closeWindow), a = I((e) => e.minimizeWindow), o = I((e) => e.toggleMaximize), s = I((e) => e.toggleFullScreen), { config: c } = F(), l = pt(), [u, d] = K(!1), { getAppName: f } = V(), [p, m] = K("basic"), [h, g] = K(!1), [_, v] = K(!1), y = G(null), b = n?.appId === "calculator";
	if (W(() => {
		if (!b) return;
		let t = (t) => {
			let n = t;
			n.detail.windowId === e && (n.detail.mode && m(n.detail.mode), n.detail.showHistory !== void 0 && g(n.detail.showHistory));
		};
		return window.addEventListener("app:calculator:state-changed", t), () => window.removeEventListener("app:calculator:state-changed", t);
	}, [b, e]), W(() => {
		if (!_) return;
		let e = (e) => {
			y.current && !y.current.contains(e.target) && v(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [_]), !n) return null;
	let x = r?.titleBarMode === "transparent", { top: S, bottom: C } = c.layout.window.maximizeInsets, w = {
		x: 0,
		y: S,
		width: l.width,
		height: l.height - S - C
	}, { osTheme: T } = F(), E = T === "ipad";
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: L("flex items-center gap-0 h-(--window-chrome-height) px-4 shrink-0", "select-none cursor-default z-30", x ? "bg-transparent border-b-0" : L("border-b border-black/8 dark:border-white/8", n.isFocused ? "bg-neutral-100/95 dark:bg-[#151821]/97" : "bg-neutral-50/95 dark:bg-[#0F1115]/97")),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, w),
		onMouseEnter: () => d(!0),
		onMouseLeave: () => d(!1),
		children: [/* @__PURE__ */ Y("div", {
			className: L("absolute left-4 flex items-center gap-2 origin-left transition-all duration-200 ease-out z-10", E && "hover:scale-130 hover:gap-1.5"),
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ J("button", {
					onClick: () => i(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90",
					style: { backgroundColor: n.isFocused || u ? "#ff5f57" : "#d1d1d1" },
					title: "Close",
					children: u && /* @__PURE__ */ J(B, {
						className: "w-2.5 h-2.5 text-red-950 dark:text-red-950/90",
						strokeWidth: 3.5
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => a(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90",
					style: { backgroundColor: n.isFocused || u ? "#febc2e" : "#d1d1d1" },
					title: "Minimize",
					children: u && /* @__PURE__ */ J(wt, {
						className: "w-2.5 h-2.5 text-yellow-950 dark:text-yellow-950/90",
						strokeWidth: 3.5
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => s(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75 active:scale-90",
					style: { backgroundColor: n.isFocused || u ? "#28c840" : "#d1d1d1" },
					title: n.isFullScreen ? "Exit Full Screen" : "Enter Full Screen",
					children: u && (n.isFullScreen || n.isMaximized ? /* @__PURE__ */ J(Ct, {
						className: "w-2 h-2 text-green-950 dark:text-green-950/90",
						strokeWidth: 3.5
					}) : /* @__PURE__ */ J(St, {
						className: "w-2 h-2 text-green-950 dark:text-green-950/90",
						strokeWidth: 3.5
					}))
				})
			]
		}), x && n.appId === "calculator" ? /* @__PURE__ */ Y("div", {
			className: "flex-1 flex items-center justify-between pl-16 h-full select-none",
			children: [/* @__PURE__ */ J("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ J("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: L("p-1.5 rounded-md transition-colors", h ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					title: "Toggle History Sidebar",
					children: /* @__PURE__ */ J(Tt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ Y("div", {
				className: "relative",
				ref: y,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ Y("button", {
					onClick: () => v(!_),
					className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md active:bg-black/15 transition-all",
					children: [
						/* @__PURE__ */ J(ve, { className: "w-3.5 h-3.5 text-neutral-500" }),
						/* @__PURE__ */ J("span", {
							className: "capitalize text-[11px]",
							children: p
						}),
						/* @__PURE__ */ J(se, { className: "w-3 h-3 text-neutral-400" })
					]
				}), _ && /* @__PURE__ */ J("div", {
					className: "absolute right-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl",
					children: [
						"basic",
						"scientific",
						"programmer"
					].map((t) => /* @__PURE__ */ Y("button", {
						onClick: () => {
							window.dispatchEvent(new CustomEvent("app:calculator:set-mode", { detail: {
								windowId: e,
								mode: t
							} })), v(!1);
						},
						className: L("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", p === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ J("span", {
							className: "capitalize",
							children: t
						}), p === t && /* @__PURE__ */ J(Oe, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : /* @__PURE__ */ J("div", {
			className: "w-full flex items-center justify-center pointer-events-none",
			children: !x && /* @__PURE__ */ J("span", {
				className: L("text-[13px] font-medium truncate max-w-[220px]", n.isFocused ? "text-black/75 dark:text-white/80" : "text-black/35 dark:text-white/35"),
				children: f(n.appId, n.title)
			})
		})]
	});
}
function Nt({ windowId: e, onPointerDown: t }) {
	let { osTheme: n } = F();
	return J(n === "windows" ? Pt : Mt, {
		windowId: e,
		onPointerDown: t
	});
}
function Pt({ windowId: e, onPointerDown: t }) {
	let n = I((t) => t.windows[e]), r = I((e) => e.apps[n?.appId ?? ""]), i = I((e) => e.closeWindow), a = I((e) => e.minimizeWindow), o = I((e) => e.toggleMaximize), s = I((e) => e.enterFullScreen), c = I((e) => e.exitFullScreen), { config: l } = F(), u = pt(), { getAppName: d } = V(), [f, p] = K(!1), [m, h] = K("basic"), [g, _] = K(!1), [v, y] = K(!1), b = G(null), x = n?.appId === "calculator";
	if (W(() => {
		if (!x) return;
		let t = (t) => {
			let n = t;
			n.detail.windowId === e && (n.detail.mode && h(n.detail.mode), n.detail.showHistory !== void 0 && _(n.detail.showHistory));
		};
		return window.addEventListener("app:calculator:state-changed", t), () => window.removeEventListener("app:calculator:state-changed", t);
	}, [x, e]), W(() => {
		if (!v) return;
		let e = (e) => {
			b.current && !b.current.contains(e.target) && y(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [v]), !n) return null;
	let S = r?.titleBarMode === "transparent", { top: C, bottom: w } = l.layout.window.maximizeInsets, T = {
		x: 0,
		y: C,
		width: u.width,
		height: u.height - C - w
	};
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: L("flex items-center h-(--window-chrome-height) shrink-0 z-30", S ? "bg-transparent border-b-0" : "bg-neutral-100/98 dark:bg-[#151821]/98 border-b border-black/8 dark:border-white/8", "select-none cursor-default"),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, T),
		onMouseEnter: () => p(!0),
		onMouseLeave: () => p(!1),
		children: [S && n.appId === "calculator" ? /* @__PURE__ */ Y("div", {
			className: "flex-1 flex items-center gap-4 pl-3 h-full select-none",
			children: [/* @__PURE__ */ J("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ J("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: L("p-1 rounded-md transition-colors", g ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					children: /* @__PURE__ */ J(Tt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ Y("div", {
				className: "relative",
				ref: b,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ Y("button", {
					onClick: () => y(!v),
					className: "flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md",
					children: [
						/* @__PURE__ */ J(ve, { className: "w-3 h-3" }),
						/* @__PURE__ */ J("span", {
							className: "capitalize text-[11px]",
							children: m
						}),
						/* @__PURE__ */ J(se, { className: "w-3 h-3" })
					]
				}), v && /* @__PURE__ */ J("div", {
					className: "absolute left-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl",
					children: [
						"basic",
						"scientific",
						"programmer"
					].map((t) => /* @__PURE__ */ Y("button", {
						onClick: () => {
							window.dispatchEvent(new CustomEvent("app:calculator:set-mode", { detail: {
								windowId: e,
								mode: t
							} })), y(!1);
						},
						className: L("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", m === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ J("span", {
							className: "capitalize",
							children: t
						}), m === t && /* @__PURE__ */ J(Oe, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : S ? /* @__PURE__ */ J("div", { className: "flex-1 pointer-events-none" }) : /* @__PURE__ */ J("span", {
			className: L("flex-1 text-[12px] font-medium truncate pl-3 transition-colors", n.isFocused ? "text-black/75 dark:text-white/75" : "text-black/35 dark:text-white/35"),
			children: d(n.appId, n.title)
		}), /* @__PURE__ */ Y("div", {
			className: "flex items-center h-full pr-1",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ J("button", {
					onClick: () => a(e),
					className: L("w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95", n.isFocused || f ? "hover:bg-black/10 dark:hover:bg-white/10 text-black/70 dark:text-white/70" : "text-black/30 dark:text-white/30 pointer-events-none"),
					children: /* @__PURE__ */ J(wt, {
						className: "w-3.5 h-3.5",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => {
						n.isFullScreen ? c(e) : n.isMaximized ? o(e, T) : s(e);
					},
					className: L("w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95", n.isFocused || f ? "hover:bg-black/10 dark:hover:bg-white/10 text-black/70 dark:text-white/70" : "text-black/30 dark:text-white/30 pointer-events-none"),
					title: n.isMaximized || n.isFullScreen ? "Restore" : "Fullscreen",
					children: n.isMaximized || n.isFullScreen ? /* @__PURE__ */ J(_t, {
						className: "w-3 h-3 rotate-180",
						strokeWidth: 2
					}) : /* @__PURE__ */ J(kt, {
						className: "w-3 h-3",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => i(e),
					className: L("w-11 h-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95", n.isFocused || f ? "hover:bg-red-500 hover:text-white text-black/70 dark:text-white/70" : "text-black/30 dark:text-white/30 pointer-events-none"),
					children: /* @__PURE__ */ J(B, {
						className: "w-3.5 h-3.5",
						strokeWidth: 2
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/window/WindowMenuBar.tsx
function Ft({ windowId: e }) {
	let t = I((t) => t.windows[e]), n = I((e) => e.apps), { t: r } = V(), [i, a] = K(null);
	if (!t) return null;
	let o = n[t.appId]?.menuBarMenus ?? ce;
	return /* @__PURE__ */ J("div", {
		id: `window-menubar-${e}`,
		className: "flex items-center h-7 px-2 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-0.5",
		children: o.map((e) => /* @__PURE__ */ J(ne, {
			label: e.label,
			items: e.items,
			appId: t.appId,
			windowId: t.id,
			activeId: i,
			setActiveId: a
		}, e.label))
	});
}
//#endregion
//#region src/components/window/WindowStatusBar.tsx
function It({ windowId: e }) {
	return I((t) => t.windows[e]) ? /* @__PURE__ */ J("div", {
		id: `window-statusbar-${e}`,
		className: "flex items-center h-6 px-3 border-t border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs text-black/50 dark:text-white/50"
	}) : null;
}
//#endregion
//#region src/components/window/ResizeHandle.tsx
var Lt = {
	n: "top-0 left-2 right-2 h-1",
	s: "bottom-0 left-2 right-2 h-1",
	e: "right-0 top-2 bottom-2 w-1",
	w: "left-0 top-2 bottom-2 w-1",
	ne: "top-0 right-0 w-3 h-3",
	nw: "top-0 left-0 w-3 h-3",
	se: "bottom-0 right-0 w-3 h-3",
	sw: "bottom-0 left-0 w-3 h-3"
}, Rt = [
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w",
	"nw"
];
function zt({ getResizeHandler: e }) {
	return /* @__PURE__ */ J(q, { children: Rt.map((t) => /* @__PURE__ */ J(Bt, {
		edge: t,
		onPointerDown: e(t)
	}, t)) });
}
function Bt({ edge: e, onPointerDown: t }) {
	return /* @__PURE__ */ J("div", {
		className: L("absolute z-50", Lt[e], ue[e]),
		onPointerDown: t,
		"aria-hidden": !0
	});
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/vanilla/shallow.mjs
var Vt = (e) => Symbol.iterator in e, Ht = (e) => "entries" in e, Ut = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, Wt = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function Gt(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Vt(e) && Vt(t) ? Ht(e) && Ht(t) ? Ut(e, t) : Wt(e, t) : Ut({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/react/shallow.mjs
function Kt(e) {
	let t = $e.useRef(void 0);
	return (n) => {
		let r = e(n);
		return Gt(t.current, r) ? t.current : t.current = r;
	};
}
//#endregion
//#region src/lib/snap-events.ts
var qt = /* @__PURE__ */ new Set();
function Jt(e) {
	return qt.add(e), () => qt.delete(e);
}
function Yt(e, t, n = 0, r = 0) {
	qt.forEach((i) => i(e, t, n, r));
}
function Xt(e, t, n = 0) {
	let r = window.innerWidth, i = window.innerHeight, a = e <= 10, o = e >= r - 10, s = t <= (n > 0 ? 25 : 10), c = t >= i - 10;
	return s && a ? "top-left" : s && o ? "top-right" : s ? "top" : a && c ? "bottom-left" : o && c ? "bottom-right" : a ? "left" : o ? "right" : null;
}
function Zt(e, t = 0, n = 0) {
	if (!e) return null;
	let r = window.innerWidth, i = window.innerHeight, a = t, o = i - a - n;
	switch (e) {
		case "left": return {
			x: 0,
			y: a,
			width: r / 2,
			height: o
		};
		case "right": return {
			x: r / 2,
			y: a,
			width: r / 2,
			height: o
		};
		case "top": return {
			x: 0,
			y: a,
			width: r,
			height: o
		};
		case "top-left": return {
			x: 0,
			y: a,
			width: r / 2,
			height: o / 2
		};
		case "top-right": return {
			x: r / 2,
			y: a,
			width: r / 2,
			height: o / 2
		};
		case "bottom-left": return {
			x: 0,
			y: a + o / 2,
			width: r / 2,
			height: o / 2
		};
		case "bottom-right": return {
			x: r / 2,
			y: a + o / 2,
			width: r / 2,
			height: o / 2
		};
		default: return null;
	}
}
//#endregion
//#region src/components/window/useWindowDrag.ts
var Qt = 50;
function $t(e, t, n, r, i, a, o) {
	let s = Math.max(r, Math.min(i, e));
	return a && t > r && s < t ? t - s < Qt ? t : s + Qt : o && n < i && s > n ? s - n < Qt ? n : s - Qt : s;
}
function en({ windowId: e, x: t, y: n, width: r, height: i }) {
	let { moveWindow: a, resizeWindow: o, maximizeWindow: s, toggleMaximize: c, focusWindow: l } = I(Kt((e) => ({
		moveWindow: e.moveWindow,
		resizeWindow: e.resizeWindow,
		maximizeWindow: e.maximizeWindow,
		toggleMaximize: e.toggleMaximize,
		focusWindow: e.focusWindow
	}))), u = I((e) => e.allowDragOutOfBounds), { config: d } = F(), f = G(null);
	return { onPointerDown: U((c) => {
		if (c.button !== 0) return;
		c.preventDefault(), c.stopPropagation(), l(e), c.currentTarget.setPointerCapture(c.pointerId);
		let p = I.getState().windows[e];
		if (p?.isMaximized || p?.isFullScreen || p?.prevRect) {
			let e = p.rect.width < window.innerWidth && p.rect.width > 0 ? p.rect.width : 800, r = p.rect.height < window.innerHeight && p.rect.height > 0 ? p.rect.height : 600, i = p.prevRect ?? {
				x: Math.round(window.innerWidth / 2 - e / 2),
				y: Math.round(window.innerHeight / 2 - r / 2),
				width: e,
				height: r
			};
			f.current = {
				mouseX: c.clientX,
				mouseY: c.clientY,
				winX: t.get(),
				winY: n.get(),
				escaped: !1,
				pendingRestore: {
					prevRect: i,
					maximizedRect: { ...p.rect }
				}
			};
		} else f.current = {
			mouseX: c.clientX,
			mouseY: c.clientY,
			winX: t.get(),
			winY: n.get(),
			escaped: !1
		};
		let m = d.layout.window.dragTopInset, h = d.layout.chrome.taskbarHeight, g = window.innerWidth, _ = window.innerHeight, v = document.getElementById(`window-${e}`), y = v?.offsetWidth ?? 600, b = v?.offsetHeight ?? 400, x = I.getState().allowDragOutOfBounds ? -(y - 200) : 0, S = I.getState().allowDragOutOfBounds ? g - Math.min(200, y) : g - y, C = m, w = I.getState().allowDragOutOfBounds ? _ - Math.min(200, b) : _ - h - b, T = f.current?.winX ?? t.get(), E = f.current?.winY ?? n.get(), D = T < x || T > S || E < C || E > w;
		f.current && (f.current.escaped = D);
		let O = (a) => {
			if (!f.current) return;
			if (f.current.pendingRestore) {
				let t = a.clientX - f.current.mouseX, n = a.clientY - f.current.mouseY;
				if (Math.hypot(t, n) < 5) return;
				let { prevRect: s, maximizedRect: c } = f.current.pendingRestore, l = (f.current.mouseX - c.x) / c.width, u = Math.round(f.current.mouseX - s.width * Math.min(Math.max(l, .1), .9)), d = f.current.mouseY - 15;
				I.setState((t) => {
					let n = t.windows[e];
					n && (n.rect = {
						x: u,
						y: d,
						width: s.width,
						height: s.height
					}, n.prevRect = null, n.isMaximized = !1, n.isFullScreen = !1);
				}), r && r.set(s.width), i && i.set(s.height), o(e, {
					x: u,
					y: d,
					width: s.width,
					height: s.height
				}), f.current.winX = u, f.current.winY = d, delete f.current.pendingRestore;
			}
			let s = window.innerWidth, c = window.innerHeight, l = f.current.winX + (a.clientX - f.current.mouseX), p = f.current.winY + (a.clientY - f.current.mouseY), g = document.getElementById(`window-${e}`), _ = g?.offsetWidth ?? 600, v = g?.offsetHeight ?? 400;
			d.layout.window.minTitleVisibleHeight;
			let y = u ? -(_ - Math.min(200, _)) : 0, b = u ? s - Math.min(200, _) : s - _, x = m, S = u ? c - Math.min(200, v) : c - h - v, C = s - _, w = c - h - v;
			if (!f.current) return;
			let T = f.current.escaped, E = !T && !1, D = !T && !0, O = T ? -Infinity : y, k = T ? Infinity : b, A = T ? -Infinity : x, j = T ? Infinity : S, M = $t(l, 0, C, O, k, !T, !T), N = $t(p, x, w, A, j, E, D);
			t.set(M), n.set(N), Yt(a.clientY <= 25 ? "top" : Xt(a.clientX, a.clientY, m), !0, m, h);
		}, k = (r) => {
			if (!f.current) return;
			if (f.current.pendingRestore) {
				f.current = null, window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", k);
				return;
			}
			let i = t.get(), c = n.get(), l = r.clientY <= 25 ? "top" : Xt(r.clientX, r.clientY, m), u = Zt(l, m, h);
			u ? l === "top" ? s(e, u) : o(e, u) : a(e, i, c), Yt(null, !1, m, h), f.current = null, window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", k);
		};
		window.addEventListener("pointermove", O), window.addEventListener("pointerup", k);
	}, [
		d.layout.window.dragTopInset,
		d.layout.chrome.taskbarHeight,
		d.layout.window.minTitleVisibleHeight,
		t,
		n,
		e,
		a,
		o,
		s,
		c,
		l
	]) };
}
//#endregion
//#region src/components/window/useWindowResize.ts
function tn({ windowId: e, x: t, y: n, width: r, height: i, minWidth: a = 320, minHeight: o = 240 }) {
	let s = I((e) => e.resizeWindow), { config: c } = F(), l = G(null);
	return { getResizeHandler: U((u) => (d) => {
		d.preventDefault(), d.stopPropagation(), d.currentTarget.setPointerCapture(d.pointerId);
		let f = I.getState().windows[e], p = {
			x: t.get(),
			y: n.get(),
			width: r.get(),
			height: i.get()
		};
		if (f?.isFullScreen || f?.isMaximized) {
			let a = f.prevRect ?? {
				x: Math.round((window.innerWidth - 800) / 2),
				y: Math.round((window.innerHeight - 600) / 2),
				width: 800,
				height: 600
			};
			I.setState((t) => {
				let n = t.windows[e];
				n && (n.isFullScreen = !1, n.isMaximized = !1, n.rect = { ...a }, n.prevRect = null);
			}), t.set(a.x), n.set(a.y), r.set(a.width), i.set(a.height), p = { ...a };
		}
		l.current = {
			mouseX: d.clientX,
			mouseY: d.clientY,
			rect: p
		};
		let m = (e) => {
			if (!l.current) return;
			let s = e.clientX - l.current.mouseX, d = e.clientY - l.current.mouseY, f = c.layout.window.dragTopInset, p = c.layout.chrome.taskbarHeight, m = {
				minX: 0,
				minY: f,
				maxX: window.innerWidth,
				maxY: window.innerHeight - p
			}, h = fe(u, s, d, l.current.rect, a, o, m);
			t.set(h.x), n.set(h.y), r.set(h.width), i.set(h.height);
		}, h = () => {
			l.current && (s(e, {
				x: t.get(),
				y: n.get(),
				width: r.get(),
				height: i.get()
			}), l.current = null, window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", h));
		};
		window.addEventListener("pointermove", m), window.addEventListener("pointerup", h);
	}, [
		t,
		n,
		r,
		i,
		e,
		a,
		o,
		s,
		c.layout.window.dragTopInset,
		c.layout.chrome.taskbarHeight
	]) };
}
//#endregion
//#region src/components/window/Window.tsx
function nn({ windowId: e }) {
	let t = I((t) => t.windows[e]), n = I((e) => e.focusWindow), r = I((e) => e.setActiveApp), i = I((e) => e.exitFullScreen), a = I((e) => e.apps), { isFloating: o, isMobile: s, config: c } = F();
	W(() => {
		if (!t?.isFullScreen || !t.isFocused) return;
		let n = (t) => {
			t.key === "Escape" && i(e);
		};
		return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
	}, [
		t?.isFullScreen,
		t?.isFocused,
		e,
		i
	]);
	let l = S(t?.isFullScreen ? 0 : t?.rect.x ?? 100), u = S(t?.isFullScreen ? 0 : t?.rect.y ?? 100), d = S(t?.isFullScreen ? typeof window < "u" ? window.innerWidth : 800 : t?.rect.width ?? 800), f = S(t?.isFullScreen ? typeof window < "u" ? window.innerHeight : 600 : t?.rect.height ?? 600);
	W(() => {
		if (!t) return;
		let e = typeof window < "u" ? window.innerWidth : 800, n = typeof window < "u" ? window.innerHeight : 600, r = t.isFullScreen ? 0 : t.rect.x, i = t.isFullScreen ? 0 : t.rect.y, a = t.isFullScreen ? e : t.rect.width, o = t.isFullScreen ? n : t.rect.height;
		t.isFullScreen ? (l.set(r), u.set(i), d.set(a), f.set(o)) : (_(l, r, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), _(u, i, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), _(d, a, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), _(f, o, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}));
	}, [
		t?.rect.x,
		t?.rect.y,
		t?.rect.width,
		t?.rect.height,
		t?.isFullScreen
	]);
	let { onPointerDown: p } = en({
		windowId: e,
		x: l,
		y: u,
		width: d,
		height: f
	}), m = t ? a[t.appId] : void 0, { getResizeHandler: h } = tn({
		windowId: e,
		x: l,
		y: u,
		width: d,
		height: f,
		minWidth: m?.minSize?.width ?? 320,
		minHeight: m?.minSize?.height ?? 240
	});
	if (!t) return null;
	let g = o && !s;
	return /* @__PURE__ */ Y(y.div, {
		id: `window-${e}`,
		initial: "hidden",
		animate: t.isMinimized ? "minimized" : "visible",
		exit: "exit",
		variants: {
			hidden: {
				scale: .9,
				opacity: 0
			},
			visible: {
				scale: 1,
				opacity: 1,
				transition: {
					type: "spring",
					stiffness: 500,
					damping: 38
				}
			},
			minimized: {
				scale: .05,
				opacity: 0,
				transition: {
					duration: .25,
					ease: [
						.4,
						0,
						.2,
						1
					]
				}
			},
			exit: {
				scale: .88,
				opacity: 0,
				transition: { duration: .15 }
			}
		},
		style: s ? {
			position: "absolute",
			inset: 0,
			zIndex: t.zIndex,
			transformOrigin: "bottom center",
			borderRadius: "var(--radius-window)"
		} : {
			position: "absolute",
			x: l,
			y: u,
			width: d,
			height: f,
			zIndex: t.zIndex,
			transformOrigin: "bottom center",
			borderRadius: t.isFullScreen || t.isMaximized ? 0 : "var(--radius-window)"
		},
		className: L("flex flex-col overflow-hidden", t.isMinimized ? "pointer-events-none" : "pointer-events-auto", t.isFocused ? "shadow-[0_22px_70px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.25)]", !t.isFocused && "brightness-95", "bg-(--window-body-bg)", t.isFocused ? "ring-1 ring-white/20" : ""),
		onPointerDown: (i) => {
			n(e), t?.appId && r(t.appId), t.isFocused || i.stopPropagation();
		},
		children: [
			!t.isFullScreen && /* @__PURE__ */ J("div", {
				className: L(m?.titleBarMode === "transparent" ? "absolute top-0 inset-x-0 z-20" : "relative"),
				children: /* @__PURE__ */ J(Nt, {
					windowId: e,
					onPointerDown: p
				})
			}),
			t.hasMenuBar && !c.hasMenuBar && /* @__PURE__ */ J(Ft, { windowId: e }),
			/* @__PURE__ */ J("div", {
				className: "flex-1 overflow-auto min-h-0 window-body",
				children: /* @__PURE__ */ J(te, {
					appId: t.appId,
					windowId: e
				})
			}),
			t.hasStatusBar && /* @__PURE__ */ J(It, { windowId: e }),
			g && !t.isMaximized && !t.isFullScreen && /* @__PURE__ */ J(zt, { getResizeHandler: h })
		]
	});
}
//#endregion
//#region src/components/window/SnapAssist.tsx
var rn = {
	left: "Snap Left",
	right: "Snap Right",
	top: "Maximize",
	"top-left": "Top Left",
	"top-right": "Top Right",
	"bottom-left": "Bottom Left",
	"bottom-right": "Bottom Right"
};
function an(e) {
	return e === "macos" ? {
		bg: "rgba(255,255,255,0.12)",
		border: "rgba(255,255,255,0.55)",
		labelBg: "rgba(255,255,255,0.18)",
		labelText: "rgba(255,255,255,0.95)",
		highlight: !0
	} : {
		bg: "rgba(59,130,246,0.18)",
		border: "rgba(59,130,246,0.55)",
		labelBg: "rgba(59,130,246,0.30)",
		labelText: "rgb(191,219,254)",
		highlight: !1
	};
}
function on({ zone: e, style: t, topInset: n, bottomInset: r }) {
	let i = Zt(e, n, r);
	return i ? /* @__PURE__ */ Y(y.div, {
		initial: {
			opacity: 0,
			scale: .97
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .97
		},
		transition: { duration: .1 },
		className: "absolute pointer-events-none rounded-xl flex items-center justify-center overflow-hidden",
		style: {
			left: i.x + 6,
			top: i.y + 6,
			width: i.width - 12,
			height: i.height - 12,
			background: t.bg,
			border: `1.5px solid ${t.border}`,
			backdropFilter: "blur(6px)"
		},
		children: [t.highlight && /* @__PURE__ */ J("span", {
			"aria-hidden": !0,
			className: "absolute inset-x-0 top-0 h-px pointer-events-none",
			style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.7) 50%, transparent 95%)" }
		}), /* @__PURE__ */ J("span", {
			className: "text-[13px] font-semibold px-3 py-1 rounded-full",
			style: {
				background: t.labelBg,
				color: t.labelText,
				backdropFilter: "blur(4px)"
			},
			children: rn[e]
		})]
	}, e) : null;
}
function sn() {
	let [e, t] = K(null), [n, r] = K(!1), [i, a] = K(0), [o, s] = K(0), { osTheme: c } = F(), l = an(c), u = I((e) => e.focusedWindowId), d = I((e) => e.windows), f = (u ? d[u] : null)?.zIndex ?? 10;
	return W(() => Jt((e, n, i, o) => {
		t(e), r(n), a(i), s(o);
	}), []), n ? /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: f },
		children: /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ J(on, {
			zone: e,
			style: l,
			topInset: i,
			bottomInset: o
		}, e) })
	}) : null;
}
//#endregion
//#region src/lib/url-codec.ts
function cn(e) {
	if (!e || !e.appId || e.appId === "undefined" || e.appId === "null") return "";
	let t = !!e.isMinimized | (e.isMaximized ? 2 : 0) | (e.isFullScreen ? 4 : 0) | (e.isFocused ? 8 : 0), n = [
		Math.round(e.rect.x),
		Math.round(e.rect.y),
		Math.round(e.rect.width),
		Math.round(e.rect.height)
	].join(",");
	if (t === 0) return `${e.appId}:${n}`;
	if (e.prevRect) {
		let r = [
			Math.round(e.prevRect.x),
			Math.round(e.prevRect.y),
			Math.round(e.prevRect.width),
			Math.round(e.prevRect.height)
		].join(",");
		return `${e.appId}:${n}:${t}:${r}`;
	}
	return `${e.appId}:${n}:${t}`;
}
function ln(e) {
	let t = e.split(":");
	if (t.length < 2) return null;
	let n = t[0];
	if (!n || n === "undefined" || n === "null") return null;
	let r = t[1], i = t[2], a = t[3], o = r.split(",").map(Number);
	if (o.length !== 4 || o.some(isNaN)) return null;
	let [s, c, l, u] = o, d = i ? parseInt(i, 10) : 0, f = null;
	if (a) {
		let e = a.split(",").map(Number);
		if (e.length === 4 && !e.some(isNaN)) {
			let [t, n, r, i] = e;
			f = {
				x: t,
				y: n,
				width: r,
				height: i
			};
		}
	}
	return {
		appId: n,
		rect: {
			x: s,
			y: c,
			width: l,
			height: u
		},
		prevRect: f,
		isMinimized: !!(d & 1),
		isMaximized: !!(d & 2),
		isFullScreen: !!(d & 4),
		isFocused: !!(d & 8)
	};
}
//#endregion
//#region src/hooks/useWindowUrlSync.ts
function un() {
	let e = I((e) => e.windows), t = I((e) => e.apps), n = I((e) => e.openWindow), r = I((e) => e.focusWindow), i = I((e) => e.urlHydrated), a = I((e) => e.setUrlHydrated), { config: o } = F();
	W(() => {
		if (i || Object.keys(t).length === 0) return;
		let e = new URLSearchParams(window.location.search).getAll("w");
		if (e.some((e) => {
			let n = ln(e);
			return n && !t[n.appId];
		})) return;
		let s = null;
		for (let r of e) {
			let e = ln(r);
			if (!e) continue;
			let i = t[e.appId];
			if (!i) continue;
			let a = e.rect;
			if (e.isFullScreen) a = {
				x: 0,
				y: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
			else if (e.isMaximized) {
				let { top: e, bottom: t } = o.layout.window.maximizeInsets;
				a = {
					x: 0,
					y: e,
					width: window.innerWidth,
					height: Math.max(1, window.innerHeight - e - t)
				};
			}
			let c = n(i, {
				...a,
				isMaximized: e.isMaximized,
				isFullScreen: e.isFullScreen,
				prevRect: e.prevRect
			});
			e.isFocused && (s = c);
		}
		s && r(s), a(!0);
	}, [
		t,
		n,
		r,
		i,
		a,
		o
	]), W(() => {
		if (!i) return;
		let t = new URLSearchParams(window.location.search);
		t.delete("w");
		for (let n of Object.values(e)) {
			let e = cn(n);
			e && t.append("w", e);
		}
		let n = `${window.location.pathname}${t.toString() ? `?${t.toString()}` : ""}`;
		n !== window.location.href.replace(window.location.origin, "") && window.history.replaceState(null, "", n);
	}, [e, i]);
}
//#endregion
//#region src/components/window/WindowManager.tsx
function dn() {
	un();
	let e = I((e) => e.windows), t = I((e) => e.apps), n = I((e) => e.resizeWindow), r = I((e) => e.syncWindowRect);
	I((e) => e.exitFullScreen);
	let i = I((e) => e.allowDragOutOfBounds), a = pt(), { config: o } = F();
	W(() => {
		let s = {
			x: 0,
			y: o.layout.window.maximizeInsets.top,
			width: a.width,
			height: Math.max(1, a.height - o.layout.window.maximizeInsets.top - o.layout.window.maximizeInsets.bottom)
		};
		for (let o of Object.values(e)) {
			let e = t[o.appId];
			if (!e) continue;
			let c;
			if (o.isFullScreen) c = {
				x: 0,
				y: 0,
				width: a.width,
				height: a.height
			};
			else if (o.isMaximized) c = s;
			else {
				let t = e.minSize?.width ?? 320, n = e.minSize?.height ?? 240, r = Math.min(Math.max(o.rect.width, t), a.width), l = Math.min(Math.max(o.rect.height, n), a.height);
				if (i) {
					let e = Math.min(200, r), t = Math.min(200, l), n = s.x - (r - e), i = s.x + s.width - e, a = s.y, u = s.y + s.height - t;
					c = {
						x: Math.min(Math.max(o.rect.x, n), i),
						y: Math.min(Math.max(o.rect.y, a), u),
						width: r,
						height: l
					};
				} else c = le(o.rect, s, {
					minWidth: t,
					minHeight: n
				});
			}
			(c.x !== o.rect.x || c.y !== o.rect.y || c.width !== o.rect.width || c.height !== o.rect.height) && (o.isFullScreen || o.isMaximized ? r(o.id, c) : n(o.id, c));
		}
	}, [
		t,
		e,
		n,
		r,
		i,
		a.width,
		a.height,
		o.layout.window.maximizeInsets.top,
		o.layout.window.maximizeInsets.bottom
	]);
	let s = Object.keys(e);
	return /* @__PURE__ */ Y("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden z-20",
		children: [/* @__PURE__ */ J(sn, {}), /* @__PURE__ */ J(v, { children: s.map((e) => /* @__PURE__ */ J(nn, { windowId: e }, e)) })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var fn = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), pn = "VisuallyHidden", mn = H.forwardRef((e, t) => /* @__PURE__ */ J(o.span, {
	...e,
	ref: t,
	style: {
		...fn,
		...e.style
	}
}));
mn.displayName = pn;
var hn = mn, [gn, _n] = r("Tooltip", [m]), vn = m(), yn = "TooltipProvider", bn = 700, xn = "tooltip.open", [Sn, Cn] = gn(yn), wn = (e) => {
	let { __scopeTooltip: t, delayDuration: n = bn, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = H.useRef(!0), s = H.useRef(!1), c = H.useRef(0);
	return H.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ J(Sn, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: H.useCallback(() => {
			window.clearTimeout(c.current), o.current = !1;
		}, []),
		onClose: H.useCallback(() => {
			window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r);
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: H.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
wn.displayName = yn;
var Tn = "Tooltip", [En, Dn] = gn(Tn), On = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = e, u = Cn(Tn, e.__scopeTooltip), d = vn(t), [p, m] = H.useState(null), h = a(), g = H.useRef(0), _ = s ?? u.disableHoverableContent, v = c ?? u.delayDuration, y = H.useRef(!1), [b, x] = f({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(xn))) : u.onClose(), o?.(e);
		},
		caller: Tn
	}), S = H.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), C = H.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, y.current = !1, x(!0);
	}, [x]), w = H.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, x(!1);
	}, [x]), T = H.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			y.current = !0, x(!0), g.current = 0;
		}, v);
	}, [v, x]);
	return H.useEffect(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []), /* @__PURE__ */ J(l, {
		...d,
		children: /* @__PURE__ */ J(En, {
			scope: t,
			contentId: h,
			open: b,
			stateAttribute: S,
			trigger: p,
			onTriggerChange: m,
			onTriggerEnter: H.useCallback(() => {
				u.isOpenDelayedRef.current ? T() : C();
			}, [
				u.isOpenDelayedRef,
				T,
				C
			]),
			onTriggerLeave: H.useCallback(() => {
				_ ? w() : (window.clearTimeout(g.current), g.current = 0);
			}, [w, _]),
			onOpen: C,
			onClose: w,
			disableHoverableContent: _,
			children: n
		})
	});
};
On.displayName = Tn;
var kn = "TooltipTrigger", An = H.forwardRef((n, r) => {
	let { __scopeTooltip: i, ...a } = n, s = Dn(kn, i), c = Cn(kn, i), l = vn(i), u = t(r, H.useRef(null), s.onTriggerChange), f = H.useRef(!1), p = H.useRef(!1), m = H.useCallback(() => f.current = !1, []);
	return H.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ J(d, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ J(o.button, {
			"aria-describedby": s.open ? s.contentId : void 0,
			"data-state": s.stateAttribute,
			...a,
			ref: u,
			onPointerMove: e(n.onPointerMove, (e) => {
				e.pointerType !== "touch" && !p.current && !c.isPointerInTransitRef.current && (s.onTriggerEnter(), p.current = !0);
			}),
			onPointerLeave: e(n.onPointerLeave, () => {
				s.onTriggerLeave(), p.current = !1;
			}),
			onPointerDown: e(n.onPointerDown, () => {
				s.open && s.onClose(), f.current = !0, document.addEventListener("pointerup", m, { once: !0 });
			}),
			onFocus: e(n.onFocus, () => {
				f.current || s.onOpen();
			}),
			onBlur: e(n.onBlur, s.onClose),
			onClick: e(n.onClick, s.onClose)
		})
	});
});
An.displayName = kn;
var jn = "TooltipPortal", [Mn, Nn] = gn(jn, { forceMount: void 0 }), Pn = (e) => {
	let { __scopeTooltip: t, forceMount: r, children: i, container: a } = e, o = Dn(jn, t);
	return /* @__PURE__ */ J(Mn, {
		scope: t,
		forceMount: r,
		children: /* @__PURE__ */ J(c, {
			present: r || o.open,
			children: /* @__PURE__ */ J(n, {
				asChild: !0,
				container: a,
				children: i
			})
		})
	});
};
Pn.displayName = jn;
var Fn = "TooltipContent", In = H.forwardRef((e, t) => {
	let n = Nn(Fn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = Dn(Fn, e.__scopeTooltip);
	return /* @__PURE__ */ J(c, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ J(Vn, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ J(Ln, {
			side: i,
			...a,
			ref: t
		})
	});
}), Ln = H.forwardRef((e, n) => {
	let r = Dn(Fn, e.__scopeTooltip), i = Cn(Fn, e.__scopeTooltip), a = H.useRef(null), o = t(n, a), [s, c] = H.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = H.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = H.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = Gn(r, Wn(r, n.getBoundingClientRect())), a = Kn(t.getBoundingClientRect()), o = Jn([...i, ...a]);
		c(o), f(!0);
	}, [f]);
	return H.useEffect(() => () => p(), [p]), H.useEffect(() => {
		if (l && d) {
			let e = (e) => m(e, d), t = (e) => m(e, l);
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), H.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !qn(n, s);
				r ? p() : i && (p(), u());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ J(Vn, {
		...e,
		ref: o
	});
}), [Rn, zn] = gn(Tn, { isInside: !1 }), Bn = h("TooltipContent"), Vn = H.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = e, l = Dn(Fn, n), d = vn(n), { onClose: f } = l;
	return H.useEffect(() => (document.addEventListener(xn, f), () => document.removeEventListener(xn, f)), [f]), H.useEffect(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target?.contains(l.trigger) && f();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, f]), /* @__PURE__ */ J(u, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: f,
		children: /* @__PURE__ */ Y(i, {
			"data-state": l.stateAttribute,
			...d,
			...c,
			ref: t,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ J(Bn, { children: r }), /* @__PURE__ */ J(Rn, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ J(hn, {
					id: l.contentId,
					role: "tooltip",
					children: a || r
				})
			})]
		})
	});
});
In.displayName = Fn;
var Hn = "TooltipArrow", Un = H.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = vn(n);
	return zn(Hn, n).isInside ? null : /* @__PURE__ */ J(p, {
		...i,
		...r,
		ref: t
	});
});
Un.displayName = Hn;
function Wn(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function Gn(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function Kn(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function qn(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Jn(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Yn(t);
}
function Yn(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Xn = wn, Zn = On, Qn = An, $n = Pn, er = In, tr = 120;
function nr({ appConfig: e, isRunning: t, hasMinimized: n, mouseX: r, onOpen: i, baseSize: a, maxSize: o }) {
	let s = G(null), [c, l] = K(!1), { getAppName: u } = V(), d = u(e.id, e.name), f = I((e) => e.showOpenAppIndicators), p = ge((e) => e.status), m = e.id === "settings" && he(p), h = a + 10, g = oe(r, (e) => {
		if (!s.current) return 121;
		let t = s.current.getBoundingClientRect();
		return Math.abs(e - (t.left + t.width / 2));
	}), _ = dt(oe(g, [0, tr], [o, a], { clamp: !0 }), {
		stiffness: 350,
		damping: 22,
		mass: .5
	});
	return W(() => {
		g.dirty();
	}, [
		a,
		o,
		g
	]), /* @__PURE__ */ J(Xn, {
		delayDuration: 500,
		children: /* @__PURE__ */ Y(Zn, { children: [/* @__PURE__ */ Y(y.div, {
			ref: s,
			className: "relative flex flex-col justify-end items-center overflow-visible",
			style: {
				width: _,
				height: h
			},
			children: [/* @__PURE__ */ J(Qn, {
				asChild: !0,
				children: /* @__PURE__ */ Y(y.button, {
					style: {
						width: _,
						height: _
					},
					className: "relative shrink-0 flex items-center justify-center",
					animate: c ? { y: [
						0,
						-22,
						-2,
						-14,
						0,
						-6,
						0
					] } : { y: 0 },
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					onClick: () => {
						l(!0), setTimeout(() => l(!1), 700), i(e);
					},
					whileTap: { scale: .88 },
					"aria-label": d,
					children: [/* @__PURE__ */ J(z, {
						appConfig: e,
						size: o,
						fill: !0,
						className: "w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
					}), m && /* @__PURE__ */ J("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
				})
			}), /* @__PURE__ */ Y("div", {
				className: "shrink-0 h-1.5 flex items-center justify-center gap-1 -mb-0.5",
				children: [f && t && !n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" }), f && n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" })]
			})]
		}), /* @__PURE__ */ J($n, { children: /* @__PURE__ */ Y(er, {
			side: "top",
			sideOffset: 8,
			className: "\n              relative overflow-hidden\n              rounded-[var(--radius-card)]\n              backdrop-blur-2xl\n              bg-white/20 dark:bg-white/10\n              border border-white/40 dark:border-white/20\n              shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]\n              text-white dark:text-white text-[12px] font-medium px-3 py-1.5\n              pointer-events-none\n              z-50\n            ",
			children: [/* @__PURE__ */ J("span", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 50%, transparent 95%)" }
			}), /* @__PURE__ */ J("span", {
				className: "relative z-10",
				children: d
			})]
		}) })] })
	});
}
//#endregion
//#region src/components/dock/Dock.tsx
function rr({ onOpenApp: e }) {
	let t = I((e) => e.dockAppIds), n = I((e) => e.apps), r = I((e) => e.runningAppIds), i = I((e) => e.windows), a = I((e) => e.launchApp), o = I((e) => e.dockSize), s = I((e) => e.dockMagnification), c = Math.max(o * (1 + s), o + s * 54), l = c - o, u = S(Infinity), d = t.map((e) => n[e]).filter(Boolean), f = r.filter((e) => !t.includes(e)).map((e) => n[e]).filter(Boolean), p = (e) => {
		a(e);
	}, m = Math.round(o * .28), h = Math.round(o * .47), g = Math.round(o * .12), _ = Math.round(o * .2);
	return /* @__PURE__ */ Y("div", {
		"data-dock": "true",
		className: "relative overflow-visible",
		style: { paddingTop: l },
		onMouseMove: (e) => u.set(e.clientX),
		onMouseLeave: () => u.set(Infinity),
		children: [/* @__PURE__ */ J("div", {
			className: "absolute inset-x-0 bottom-0",
			style: { top: l },
			children: /* @__PURE__ */ J(D, {
				variant: "dock",
				className: "absolute inset-0",
				borderRadius: Math.round(o * .5)
			})
		}), /* @__PURE__ */ Y("div", {
			className: "relative z-10 flex items-end overflow-visible",
			style: {
				gap: m,
				paddingLeft: h,
				paddingRight: h,
				paddingTop: g,
				paddingBottom: _
			},
			children: [
				d.map((e) => /* @__PURE__ */ J(nr, {
					appConfig: e,
					isRunning: r.includes(e.id),
					hasMinimized: Object.values(i).some((t) => t.appId === e.id && t.isMinimized),
					mouseX: u,
					onOpen: p,
					baseSize: o,
					maxSize: c
				}, e.id)),
				f.length > 0 && /* @__PURE__ */ J("div", {
					className: "shrink-0 self-stretch my-1 rounded-full bg-white/30 dark:bg-white/20",
					style: {
						width: 1,
						marginLeft: Math.round(m * .5),
						marginRight: Math.round(m * .5)
					}
				}),
				f.map((e) => /* @__PURE__ */ J(nr, {
					appConfig: e,
					isRunning: !0,
					hasMinimized: Object.values(i).some((t) => t.appId === e.id && t.isMinimized),
					mouseX: u,
					onOpen: p,
					baseSize: o,
					maxSize: c
				}, e.id))
			]
		})]
	});
}
//#endregion
//#region src/components/shared/AboutDialog.tsx
function ir({ appConfig: e, onClose: t }) {
	let { getAppName: n } = V();
	return /* @__PURE__ */ Y(ie, {
		onClose: t,
		width: 288,
		children: [
			/* @__PURE__ */ J("div", {
				className: "w-20 h-20 mb-1",
				children: /* @__PURE__ */ J(z, {
					appConfig: e,
					size: 80
				})
			}),
			/* @__PURE__ */ J("div", {
				className: "text-[17px] font-bold text-black/90 dark:text-white/90 text-center",
				children: n(e.id, e.name)
			}),
			/* @__PURE__ */ J("div", {
				className: "text-[12px] text-black/50 dark:text-white/50 text-center",
				children: "Version 1.0 (1.0)"
			}),
			/* @__PURE__ */ J("div", { className: "w-full h-px bg-black/10 dark:bg-white/10 my-1" }),
			/* @__PURE__ */ Y("div", {
				className: "text-[11px] text-black/40 dark:text-white/40 text-center leading-relaxed",
				children: [
					"Copyright © 2026 Skyline",
					/* @__PURE__ */ J("br", {}),
					"All rights reserved."
				]
			})
		]
	});
}
function ar() {
	let [e, t] = K(null);
	return W(() => {
		let e = (e) => {
			let { appId: n, action: r } = e.detail;
			if (r !== "about") return;
			let i = I.getState().apps[n];
			i && t(i);
		};
		return window.addEventListener("app:menu:action", e), () => window.removeEventListener("app:menu:action", e);
	}, []), e ? /* @__PURE__ */ J(ir, {
		appConfig: e,
		onClose: () => t(null)
	}) : null;
}
//#endregion
//#region src/hooks/useWallpaperLuminance.ts
var or = 28, sr = 120, cr = "wallpaper_luma_";
function lr(e) {
	let t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function ur(e) {
	try {
		let t = localStorage.getItem(cr + e);
		if (t === "light" || t === "dark") return t;
	} catch {}
	return null;
}
function dr(e, t) {
	try {
		localStorage.setItem(cr + e, t);
	} catch {}
}
var fr = /* @__PURE__ */ new Map();
function pr(e) {
	return new Promise((t) => {
		let n = new Image();
		n.crossOrigin = "anonymous", n.onload = () => {
			try {
				let e = document.createElement("canvas");
				e.width = sr, e.height = or;
				let r = e.getContext("2d");
				if (!r) {
					t("dark");
					return;
				}
				r.drawImage(n, 0, 0, n.naturalWidth, Math.min(n.naturalHeight, or * 2), 0, 0, sr, or);
				let i = r.getImageData(0, 0, sr, or).data, a = 0;
				for (let e = 0; e < i.length; e += 4) a += .299 * i[e] + .587 * i[e + 1] + .114 * i[e + 2];
				t(a / (i.length / 4) > 128 ? "light" : "dark");
			} catch {
				t("dark");
			}
		}, n.onerror = () => t("dark"), n.src = e;
	});
}
function mr() {
	let e = I((e) => e.osTheme), t = I((e) => e.wallpaperId), n = De();
	W(() => {
		if (e !== "macos") return;
		let r = n.all.find((e) => e.id === t);
		if (!r) return;
		let i = (e) => I.getState().setWallpaperTextTheme(e);
		if (fr.has(t)) {
			i(fr.get(t));
			return;
		}
		let a = ur(t);
		if (a) {
			fr.set(t, a), i(a);
			return;
		}
		if (r.kind === "color" && r.colorHex) {
			let e = lr(r.colorHex) > 128 ? "light" : "dark";
			fr.set(t, e), dr(t, e), i(e);
			return;
		}
		r.url && pr(r.url).then((e) => {
			fr.set(t, e), dr(t, e), i(e);
		});
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/hooks/useFullscreenPeek.ts
var hr = 6, gr = 400;
function _r() {
	let e = I((e) => Object.values(e.windows).some((e) => e.isFullScreen && !e.isMinimized)), t = I((e) => e.fullscreenChromeRevealed), n = I((e) => e.setFullscreenChromeRevealed), r = G(t);
	W(() => {
		r.current = t;
	}, [t]), W(() => {
		if (!e) {
			n(!1);
			return;
		}
		let t = null, i = null, a = (e) => {
			let a = e.target, o = a?.closest("[data-windowchrome=\"true\"]"), s = a?.closest("[data-menu-portal=\"true\"]") || a?.closest("[data-radix-popper-content-wrapper]");
			e.clientY <= hr ? (i ||= setTimeout(() => {
				n(!0), i = null;
			}, 300), t &&= (clearTimeout(t), null)) : o || s || a?.closest("[data-menubar=\"true\"]") ? (i &&= (clearTimeout(i), null), t &&= (clearTimeout(t), null), r.current || n(!0)) : (i &&= (clearTimeout(i), null), t ||= setTimeout(() => n(!1), gr));
		};
		return document.addEventListener("mousemove", a), () => {
			document.removeEventListener("mousemove", a), t && clearTimeout(t), i && clearTimeout(i);
		};
	}, [e, n]);
}
//#endregion
//#region src/components/themes/MacOSTheme.tsx
var vr = 6, yr = 120, br = 28, xr = 1500;
function Sr({ onOpenApp: e, onSpotlight: t, isSimpleMode: n = !1, fallbackMenuBarAppId: r }) {
	let i = ee(), a = i.dock && (!i.isSimpleModeActive || i.dock);
	mr();
	let o = I((e) => Object.values(e.windows).some((e) => e.isMaximized && !e.isMinimized)), s = I((e) => Object.values(e.windows).some((e) => e.isFullScreen && !e.isMinimized)), [c, l] = K({
		hasMaximized: !1,
		hasFullScreen: !1
	});
	W(() => {
		if (typeof window > "u") return;
		let e = new URLSearchParams(window.location.search), t = !1, n = !1;
		for (let r of e.getAll("w")) {
			let e = parseInt(r.split(":")[2] ?? "0", 10);
			e & 2 && (t = !0), e & 4 && (n = !0);
		}
		l({
			hasMaximized: t,
			hasFullScreen: n
		});
	}, []);
	let u = I((e) => e.urlHydrated), d = s || !u && c.hasFullScreen, f = I((e) => e.dockAutoHide), p = o || d || f || c.hasMaximized && !u, [m, h] = K(!1), [g, _] = K(!1), v = !p || m || g, b = G(null);
	W(() => {
		u && p && h(!1);
	}, [u, p]), W(() => {
		if (!p || n) {
			h(!1);
			return;
		}
		let e = null, t = (t) => {
			let n = t.clientY >= window.innerHeight - vr, r = !0;
			if (n && b.current) {
				let { left: e, right: n } = b.current.getBoundingClientRect();
				r = t.clientX >= e - 24 && t.clientX <= n + 24;
			}
			n && r || g ? (h(!0), e &&= (clearTimeout(e), null)) : e ||= setTimeout(() => h(!1), xr);
		};
		return document.addEventListener("mousemove", t), () => {
			document.removeEventListener("mousemove", t), e && clearTimeout(e);
		};
	}, [
		p,
		g,
		n
	]);
	let x = I((e) => e.fullscreenChromeRevealed), S = !d || x;
	_r();
	let C = I((e) => {
		let t = Object.values(e.windows).filter((e) => e.isFullScreen && !e.isMinimized);
		return t.length === 0 ? null : (t.find((e) => e.isFocused) ?? t.reduce((e, t) => e.zIndex > t.zIndex ? e : t)).id;
	}), [w, T] = K(!1), E = G(x);
	return W(() => {
		E.current = x;
	}, [x]), W(() => {
		if (!d) {
			T(!1);
			return;
		}
		let e = (e) => {
			T(e.clientY < 50 && !E.current);
		};
		return document.addEventListener("mousemove", e), () => document.removeEventListener("mousemove", e);
	}, [d]), W(() => {
		x && T(!1);
	}, [x]), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(ar, {}),
		d && /* @__PURE__ */ J(y.div, {
			className: "absolute top-0 inset-x-0 z-[50] h-2.5 pointer-events-none backdrop-blur-sm",
			initial: { y: "-100%" },
			animate: { y: w ? "0%" : "-100%" },
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 40,
				mass: .5
			},
			style: { background: "linear-gradient(to bottom, rgba(128,128,128,0.35) 0%, transparent 100%)" }
		}),
		d && C && /* @__PURE__ */ J(y.div, {
			className: "absolute top-0 inset-x-0 z-[35] pointer-events-auto",
			animate: { y: x ? br : "-100%" },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			children: /* @__PURE__ */ J(Nt, {
				windowId: C,
				onPointerDown: () => {}
			})
		}),
		/* @__PURE__ */ J(y.div, {
			className: "absolute top-0 inset-x-0 z-40 pointer-events-none",
			animate: { y: S ? 0 : -28 },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			children: /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(k, {
					onSpotlight: t,
					isSimpleMode: n,
					fallbackMenuBarAppId: r,
					forceDark: s
				})
			})
		}),
		a && /* @__PURE__ */ J(y.div, {
			className: "absolute inset-x-0 z-40 flex justify-center pointer-events-none",
			style: { bottom: "var(--dock-offset-bottom)" },
			animate: { y: v ? 0 : yr },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			onMouseEnter: () => _(!0),
			onMouseLeave: () => _(!1),
			children: /* @__PURE__ */ J("div", {
				ref: b,
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(rr, { onOpenApp: e })
			})
		})
	] });
}
//#endregion
//#region src/hooks/useImageReady.ts
function Cr(e, t = !0) {
	let [n, r] = K(null), [i, a] = K(null);
	return W(() => {
		if (!t || !e) return;
		let n = !1, i = new Image();
		return i.onload = () => {
			n || r(e);
		}, i.onerror = () => {
			n || a(e);
		}, i.src = e, i.complete && r(e), () => {
			n = !0;
		};
	}, [e, t]), t && !!e && n === e && i !== e;
}
//#endregion
//#region src/hooks/useStoreHydrated.ts
function wr() {
	let [e, t] = K(() => I.persist.hasHydrated());
	return W(() => {
		let e = I.persist.onHydrate(() => {
			t(!1);
		}), n = I.persist.onFinishHydration(() => {
			t(!0);
		});
		return () => {
			e(), n();
		};
	}, []), e;
}
//#endregion
//#region src/hooks/useResolvedWallpaper.ts
function Tr() {
	let e = I((e) => e.wallpaperId), t = I((e) => e.customWallpapers), n = De();
	return [...n.all, ...t].find((t) => t.id === e) || (n.all.find((e) => e.id === n.defaultId) ?? n.pictures[0]);
}
//#endregion
//#region src/components/iphone/LockScreen.tsx
function Er() {
	let [e, t] = K("");
	return W(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ J(q, { children: e });
}
function Dr({ onUnlock: e }) {
	let t = wr(), n = Te(), r = Tr(), i = Ce(n, r.url ?? ""), a = Cr(i, t && r.kind !== "color"), o = t && a && r.kind !== "color" ? `url(${i})` : "none", s = r.kind === "color" ? r.colorHex : "#1e1e2e", c = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ Y(y.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			y: -60,
			transition: {
				duration: .4,
				ease: "easeIn"
			}
		},
		className: "absolute inset-0 z-9999 flex flex-col items-center select-none",
		style: {
			backgroundColor: s,
			backgroundImage: o,
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [
			/* @__PURE__ */ J("div", { className: "absolute inset-0 bg-black/20 backdrop-blur-sm" }),
			/* @__PURE__ */ Y("div", {
				className: "relative z-10 flex flex-col items-center pt-16 flex-1",
				children: [
					/* @__PURE__ */ J("div", {
						className: "text-white text-7xl font-thin tracking-tighter leading-none",
						children: /* @__PURE__ */ J(Er, {})
					}),
					/* @__PURE__ */ J("p", {
						className: "text-white/80 text-lg font-medium mt-2",
						children: c
					}),
					/* @__PURE__ */ J("div", {
						className: "mt-8 w-72 space-y-2 max-h-52 overflow-hidden",
						children: [{
							app: "Messages",
							message: "You have a new message"
						}, {
							app: "Calendar",
							message: "Meeting in 15 minutes"
						}].map((e, t) => /* @__PURE__ */ Y("div", {
							className: "bg-white/15 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20",
							children: [/* @__PURE__ */ J("p", {
								className: "text-[10px] font-semibold text-white/60 uppercase",
								children: e.app
							}), /* @__PURE__ */ J("p", {
								className: "text-[13px] text-white/90 mt-0.5",
								children: e.message
							})]
						}, t))
					})
				]
			}),
			/* @__PURE__ */ Y("div", {
				className: "relative z-10 pb-12 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ J(y.div, {
					animate: { y: [
						0,
						-8,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 1.8,
						ease: "easeInOut"
					},
					className: "cursor-pointer",
					onClick: e,
					children: /* @__PURE__ */ J("div", {
						className: "w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center",
						children: /* @__PURE__ */ J("svg", {
							className: "w-5 h-5 text-white",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ J("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M5 15l7-7 7 7"
							})
						})
					})
				}), /* @__PURE__ */ J("p", {
					className: "text-white/60 text-[12px] font-medium tracking-wide",
					children: "Swipe up to unlock"
				})]
			})
		]
	}, "lockscreen");
}
//#endregion
//#region src/components/ipad/HomeScreen.tsx
var Or = 6, kr = 4, X = Or * kr, Ar = 6, jr = 600, Mr = (e, t, n) => {
	let r = [...e], i = r[t];
	if (r[t] = null, e[n] === null) return r[n] = i, r;
	if (t > n) {
		for (let e = t; e > n; e--) r[e] = r[e - 1];
		r[n] = i;
	} else {
		for (let e = t; e < n; e++) r[e] = r[e + 1];
		r[n] = i;
	}
	return r;
};
function Nr({ onOpenApp: e }) {
	let t = I((e) => e.apps), { getAppName: n } = V(), [r, i] = K(0), [a, o] = K(!1), [s, c] = K(() => {
		let e = I.getState().apps, t = Object.values(e).filter((e) => !e.disabled).slice(Ar).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / X)), r = [...t];
		for (; r.length < n * X;) r.push(null);
		return r;
	}), [l, u] = K(s), [d, f] = K(null), [p, m] = K(!1), [h, g] = K({
		x: 0,
		y: 0
	}), _ = G(null), [v, b] = K(768), x = G(0), S = G(r), C = G(s), w = G(l), T = G(d);
	W(() => {
		S.current = r;
	}, [r]), W(() => {
		C.current = s;
	}, [s]), W(() => {
		w.current = l;
	}, [l]), W(() => {
		T.current = d;
	}, [d]), W(() => {
		if (!_.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) b(t.contentRect.width || 768);
		});
		return e.observe(_.current), () => e.disconnect();
	}, []);
	let E = Object.values(t).filter((e) => !e.disabled).slice(0, Ar), D = d ? l : s, O = Math.max(1, Math.ceil(D.length / X));
	d && (O += 1);
	let k = [];
	for (let e = 0; e < O * X; e += X) {
		let t = D.slice(e, e + X);
		for (; t.length < X;) t.push(null);
		k.push(t);
	}
	let A = U((e) => {
		e !== S.current && i(e);
	}, []), j = G(null), M = () => {
		j.current = setTimeout(() => o(!0), jr);
	}, N = () => {
		j.current && clearTimeout(j.current);
	}, ee = () => {
		a && o(!1);
	}, P = (e, t) => {
		f(e), m(!0);
		let n = "touches" in t ? t.touches[0].clientX : t.clientX, r = "touches" in t ? t.touches[0].clientY : t.clientY;
		g({
			x: n,
			y: r
		});
	};
	return U(() => {}, []), W(() => {
		if (!d) return;
		let e = (e) => {
			g({
				x: e.clientX,
				y: e.clientY
			});
			let t = S.current, n = T.current;
			if (!n) return;
			let r = _.current?.querySelectorAll(".grid")?.[t];
			if (r) {
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / Or)), l = Math.floor(o / (i.height / kr));
				if (s >= 0 && s < Or && l >= 0 && l < kr) {
					let e = l * Or + s, r = t * X + e, i = [...C.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * X;
							for (; i.length < e;) i.push(null);
						}
						let e = Mr(i, a, r);
						C.current = e, w.current = e, u(e), c(e);
					}
				}
			}
			let i = _.current?.getBoundingClientRect();
			if (i) {
				let t = e.clientX, n = Date.now();
				if (n - x.current > 1200) {
					let e = S.current;
					t < i.left + 50 && e > 0 ? (A(e - 1), x.current = n) : t > i.right - 50 && (A(e + 1), x.current = n);
				}
			}
		}, t = () => {
			let e = [...w.current], t = S.current, n = -1;
			for (let t = e.length - 1; t >= 0; t--) if (e[t] !== null) {
				n = t;
				break;
			}
			let r = Math.max(1, Math.ceil((n + 1) / X)), a = e.slice(0, r * X);
			c(a), u(a), t >= r && i(r - 1), f(null), m(!1);
		};
		return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
			window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t);
		};
	}, [d, A]), /* @__PURE__ */ Y("div", {
		ref: _,
		className: "absolute inset-0 flex flex-col overflow-hidden px-6 pt-12 pb-36 pointer-events-auto",
		onPointerDown: M,
		onPointerUp: N,
		onPointerCancel: N,
		onClick: ee,
		children: [
			/* @__PURE__ */ J("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ J(y.div, {
					drag: !p && "x",
					dragDirectionLock: !0,
					dragConstraints: {
						left: -(O - 1) * v,
						right: 0
					},
					animate: { x: -r * v },
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 30
					},
					onDragEnd: (e, t) => {
						let n = t.offset.x, i = t.velocity.x, a = r, o = v / 4;
						n < -o || i < -300 ? a = Math.min(O - 1, r + 1) : (n > o || i > 300) && (a = Math.max(0, r - 1)), A(a);
					},
					className: "flex h-full w-full cursor-grab active:cursor-grabbing",
					children: k.map((n, r) => /* @__PURE__ */ J("div", {
						className: "h-full shrink-0 grid gap-x-4 gap-y-6",
						style: {
							gridTemplateColumns: `repeat(${Or}, 1fr)`,
							gridTemplateRows: `repeat(${kr}, 1fr)`,
							width: v
						},
						children: n.map((n, r) => {
							if (n) {
								let i = t[n];
								if (i) return /* @__PURE__ */ J(Pr, {
									app: i,
									index: r,
									jiggling: a,
									activeDragId: d,
									onPointerDownStart: () => m(!0),
									onPointerDownEnd: () => m(!1),
									onOpen: e,
									onDragStart: P
								}, i.id);
							}
							return /* @__PURE__ */ Y("div", {
								className: "flex flex-col items-center gap-2 min-w-0 opacity-0 pointer-events-none select-none",
								children: [/* @__PURE__ */ J("div", { style: {
									width: 72,
									height: 72
								} }), /* @__PURE__ */ J("span", {
									className: "text-xs leading-tight max-w-[72px] truncate",
									children: "Empty"
								})]
							}, `empty-${r}`);
						})
					}, r))
				})
			}),
			O > 1 && /* @__PURE__ */ J("div", {
				className: "flex justify-center gap-2 py-2",
				children: Array.from({ length: O }).map((e, t) => /* @__PURE__ */ J("button", {
					onClick: (e) => {
						e.stopPropagation(), A(t);
					},
					className: L("rounded-full transition-all duration-200", t === r ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50")
				}, t))
			}),
			/* @__PURE__ */ J("div", {
				className: "absolute bottom-3 inset-x-6 z-10 pointer-events-auto",
				children: /* @__PURE__ */ J("div", {
					className: "rounded-3xl px-6 py-3 flex items-center justify-around",
					style: {
						background: "rgba(255,255,255,0.18)",
						backdropFilter: "blur(24px) saturate(180%)",
						WebkitBackdropFilter: "blur(24px) saturate(180%)",
						boxShadow: "0 2px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)"
					},
					children: E.map((t) => /* @__PURE__ */ J("button", {
						onClick: () => e(t),
						className: "flex flex-col items-center justify-center transition-transform active:scale-95",
						children: /* @__PURE__ */ J(z, {
							appConfig: t,
							size: 64
						})
					}, t.id))
				})
			}),
			d && t[d] && /* @__PURE__ */ Y("div", {
				className: "fixed pointer-events-none z-[99999] flex flex-col items-center gap-2 select-none",
				style: {
					left: h.x - 36,
					top: h.y - 36,
					width: 72,
					transform: "scale(1.15)",
					filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.35))"
				},
				children: [/* @__PURE__ */ J(z, {
					appConfig: t[d],
					size: 72
				}), /* @__PURE__ */ J("span", {
					className: "text-white text-xs font-semibold text-center leading-tight drop-shadow-md max-w-[72px] truncate",
					children: n(d, t[d].name)
				})]
			})
		]
	});
}
function Pr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = V(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
		x: 0,
		y: 0
	}), p = G(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, jr);
	}, h = (t) => {
		p.current || (f.current.x !== 0 || f.current.y !== 0) && Math.hypot(t.clientX - f.current.x, t.clientY - f.current.y) > 5 && (u.current && clearTimeout(u.current), p.current = !0, s(e.id, t.nativeEvent));
	}, g = () => {
		u.current && clearTimeout(u.current), f.current = {
			x: 0,
			y: 0
		}, a();
	}, _ = () => {
		u.current && clearTimeout(u.current), f.current = {
			x: 0,
			y: 0
		}, a();
	}, v = (t) => {
		t.stopPropagation(), !(d.current || n) && o(e);
	}, b = r === e.id;
	return /* @__PURE__ */ Y(y.div, {
		layout: !b,
		"data-app-id": e.id,
		className: "flex flex-col items-center gap-2 min-w-0 select-none relative cursor-grab active:cursor-grabbing",
		onPointerDown: m,
		onPointerMove: h,
		onPointerUp: g,
		onPointerCancel: _,
		onClick: v,
		style: {
			touchAction: "none",
			zIndex: b ? 100 : 10,
			visibility: b ? "hidden" : "visible"
		},
		children: [/* @__PURE__ */ J(y.div, {
			animate: n ? {
				rotate: [
					0,
					-3.5,
					3.5,
					-3.5,
					3.5,
					0
				],
				x: [
					0,
					-1.2,
					1.2,
					-1.2,
					1.2,
					0
				],
				y: [
					0,
					1.2,
					-1.2,
					1.2,
					-1.2,
					0
				],
				transition: {
					repeat: Infinity,
					duration: .5,
					delay: t % 8 * .04
				}
			} : {
				rotate: 0,
				x: 0,
				y: 0
			},
			className: "relative pointer-events-none",
			children: /* @__PURE__ */ J(z, {
				appConfig: e,
				size: 72
			})
		}), /* @__PURE__ */ J("span", {
			className: "text-white text-xs font-medium text-center leading-tight drop-shadow-md max-w-[72px] truncate pointer-events-none",
			children: l
		})]
	});
}
//#endregion
//#region src/components/iphone/ControlCenter.tsx
function Fr({ open: e, onClose: t }) {
	let n = I((e) => e.colorScheme), r = I((e) => e.setColorScheme);
	I((e) => e.glassEnabled), I((e) => e.setGlassEnabled);
	let [i, a] = K(80), [o, s] = K(65), [c, l] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(N, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ht, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(Et, { className: "w-5 h-5" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(ae, { className: "w-5 h-5" }),
			active: !1
		}
	]), u = (e) => l((t) => t.map((t) => t.id === e ? {
		...t,
		active: !t.active
	} : t));
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9985",
		onClick: t
	}), /* @__PURE__ */ J(y.div, {
		initial: {
			y: "-100%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: "-100%",
			opacity: 0
		},
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 38
		},
		className: "absolute top-0 right-0 z-9986 p-4 pt-10 w-80",
		children: /* @__PURE__ */ J(D, {
			variant: "panel",
			className: "p-4",
			children: /* @__PURE__ */ Y("div", {
				className: "space-y-3.5",
				children: [
					/* @__PURE__ */ J("div", {
						className: "grid grid-cols-2 gap-2",
						children: c.map((e) => /* @__PURE__ */ Y("button", {
							onClick: () => u(e.id),
							className: L("flex items-center gap-3 p-3 rounded-2xl transition-colors", e.active ? "bg-white/90 dark:bg-white/20" : "bg-white/20 dark:bg-white/10"),
							children: [/* @__PURE__ */ J("span", {
								className: e.active ? "text-blue-500" : "text-white/70",
								children: e.icon
							}), /* @__PURE__ */ J("span", {
								className: L("text-[12px] font-semibold", e.active ? "text-black dark:text-white" : "text-white/70"),
								children: e.label
							})]
						}, e.id))
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ J(Ze, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
							type: "range",
							min: 0,
							max: 100,
							value: i,
							onChange: (e) => a(Number(e.target.value)),
							className: "flex-1 accent-white"
						})]
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ J(Qe, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
							type: "range",
							min: 0,
							max: 100,
							value: o,
							onChange: (e) => s(Number(e.target.value)),
							className: "flex-1 accent-white"
						})]
					}),
					/* @__PURE__ */ J("div", {
						className: "grid grid-cols-4 gap-2",
						children: [
							{
								icon: /* @__PURE__ */ J(xe, { className: "w-5 h-5" }),
								label: "Camera"
							},
							{
								icon: /* @__PURE__ */ J(bt, { className: "w-5 h-5" }),
								label: "Flash"
							},
							{
								icon: /* @__PURE__ */ J(At, { className: "w-5 h-5" }),
								label: "Timer"
							},
							{
								icon: /* @__PURE__ */ J(O, { className: "w-5 h-5" }),
								label: "Adjust"
							}
						].map((e) => /* @__PURE__ */ Y("button", {
							className: "flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/15 hover:bg-white/25 transition-colors",
							children: [/* @__PURE__ */ J("span", {
								className: "text-white",
								children: e.icon
							}), /* @__PURE__ */ J("span", {
								className: "text-[9px] text-white/60",
								children: e.label
							})]
						}, e.label))
					}),
					/* @__PURE__ */ Y("button", {
						onClick: () => r(n === "dark" ? "light" : "dark"),
						className: "w-full flex items-center justify-between bg-white/15 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ J("span", {
							className: "text-[12px] text-white font-medium",
							children: "Dark Mode"
						}), /* @__PURE__ */ J("div", {
							className: L("w-9 h-5 rounded-full transition-colors", n === "dark" ? "bg-blue-500" : "bg-white/30"),
							children: /* @__PURE__ */ J("div", { className: L("w-4 h-4 rounded-full bg-white m-0.5 transition-transform shadow", n === "dark" ? "translate-x-4" : "translate-x-0") })
						})]
					})
				]
			})
		})
	})] }) });
}
//#endregion
//#region src/hooks/useSwipeGesture.ts
function Ir(e, t) {
	let { onSwipeUp: n, onSwipeDown: r, onSwipeLeft: i, onSwipeRight: a, threshold: o = 50, velocityThreshold: s = .2 } = e, c = G(null);
	W(() => {
		let e = t?.current ?? window;
		if (!e) return;
		let l = (e) => {
			let t = e;
			c.current = {
				x: t.clientX,
				y: t.clientY,
				t: Date.now()
			};
		}, u = (e) => {
			if (!c.current) return;
			let t = e, l = t.clientX - c.current.x, u = t.clientY - c.current.y, d = Math.max(1, Date.now() - c.current.t), f = Math.abs(l), p = Math.abs(u);
			if (c.current = null, !(f < o && p < o)) if (f > p) {
				if (f / d < s) return;
				l > 0 ? a?.() : i?.();
			} else {
				if (p / d < s) return;
				u > 0 ? r?.() : n?.();
			}
		};
		return e.addEventListener("pointerdown", l), e.addEventListener("pointerup", u), () => {
			e.removeEventListener("pointerdown", l), e.removeEventListener("pointerup", u);
		};
	}, [
		n,
		r,
		i,
		a,
		o,
		s,
		t
	]);
}
//#endregion
//#region src/components/themes/IPadTheme.tsx
function Lr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1);
	return Ir({
		onSwipeUp: () => n(!1),
		onSwipeDown: () => i(!0)
	}), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(v, { children: t && /* @__PURE__ */ J(Dr, { onUnlock: () => n(!1) }) }),
		/* @__PURE__ */ Y("div", {
			className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none",
			style: { height: "var(--statusbar-height)" },
			children: [/* @__PURE__ */ J("span", {
				className: "min-w-0",
				children: /* @__PURE__ */ J(P, {})
			}), /* @__PURE__ */ Y("div", {
				className: "flex items-center gap-1.5 text-white",
				children: [/* @__PURE__ */ J(N, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ J(w, { className: "w-4 h-4" })]
			})]
		}),
		/* @__PURE__ */ J(Nr, { onOpenApp: e }),
		/* @__PURE__ */ J(Fr, {
			open: r,
			onClose: () => i(!1)
		}),
		/* @__PURE__ */ J("div", {
			className: "absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-40",
			children: /* @__PURE__ */ J("div", { className: "w-32 h-1 bg-white/30 rounded-full" })
		})
	] });
}
//#endregion
//#region src/components/dock/NavBar.tsx
function Rr({ onOpenApp: e, navBarHeight: t = 72 }) {
	let n = I((e) => e.dockAppIds).slice(0, 4), r = I((e) => e.apps), i = I((e) => e.runningAppIds), { getAppName: a } = V(), o = n.map((e) => r[e]).filter(Boolean);
	return /* @__PURE__ */ J("div", {
		className: "flex items-center justify-around px-6",
		style: {
			height: t,
			background: "rgba(255,255,255,0.18)",
			backdropFilter: "blur(24px) saturate(180%)",
			WebkitBackdropFilter: "blur(24px) saturate(180%)"
		},
		children: o.map((t) => /* @__PURE__ */ J("button", {
			onClick: () => e(t),
			className: L("flex items-center justify-center transition-opacity active:scale-95", i.includes(t.id) ? "opacity-100" : "opacity-90"),
			"aria-label": a(t.id, t.name),
			children: /* @__PURE__ */ J(z, {
				appConfig: t,
				size: 52
			})
		}, t.id))
	});
}
//#endregion
//#region src/components/iphone/DynamicIsland.tsx
function zr({ onClick: e }) {
	let [t, n] = K("compact"), r = I((e) => e.notifications).find((e) => !e.read);
	return /* @__PURE__ */ J("div", {
		className: "cursor-pointer",
		onClick: () => {
			n((e) => e === "compact" ? "expanded" : "compact"), e?.();
		},
		children: /* @__PURE__ */ J(y.div, {
			animate: t === "expanded" ? {
				width: 240,
				height: 72,
				borderRadius: 24
			} : {
				width: 120,
				height: 34,
				borderRadius: 17
			},
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 38
			},
			className: "bg-black overflow-hidden flex items-center justify-center",
			children: /* @__PURE__ */ J(v, {
				mode: "wait",
				children: t === "compact" ? /* @__PURE__ */ J(y.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "flex items-center gap-2 px-3",
					children: /* @__PURE__ */ J("div", { className: "w-2 h-2 rounded-full bg-neutral-700" })
				}, "compact") : /* @__PURE__ */ Y(y.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .9
					},
					className: "flex items-center gap-3 px-4 w-full",
					children: [/* @__PURE__ */ J("div", {
						className: "w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0",
						children: /* @__PURE__ */ J("span", {
							className: "text-white text-xs font-bold",
							children: r?.appName.charAt(0) ?? "!"
						})
					}), /* @__PURE__ */ Y("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ J("p", {
							className: "text-white text-[10px] font-semibold",
							children: r?.appName ?? "Notification"
						}), /* @__PURE__ */ J("p", {
							className: "text-white/70 text-[10px] truncate",
							children: r?.title ?? "No new notifications"
						})]
					})]
				}, "expanded")
			})
		})
	});
}
//#endregion
//#region src/components/iphone/HomeScreen.tsx
var Br = 4, Vr = 6, Z = Br * Vr, Hr = 600, Ur = (e, t, n) => {
	let r = [...e], i = r[t];
	if (r[t] = null, e[n] === null) return r[n] = i, r;
	if (t > n) {
		for (let e = t; e > n; e--) r[e] = r[e - 1];
		r[n] = i;
	} else {
		for (let e = t; e < n; e++) r[e] = r[e + 1];
		r[n] = i;
	}
	return r;
};
function Wr({ onOpenApp: e, statusBarHeight: t, navBarHeight: n, homeIndicatorHeight: r }) {
	let i = I((e) => e.apps), { getAppName: a } = V(), [o, s] = K(0), [c, l] = K(!1), [u, d] = K(() => {
		let e = I.getState().apps, t = Object.values(e).filter((e) => !e.disabled).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / Z)), r = [...t];
		for (; r.length < n * Z;) r.push(null);
		return r;
	}), [f, p] = K(u), [m, h] = K(null), [g, _] = K(!1), [v, b] = K({
		x: 0,
		y: 0
	}), x = G(null), [S, C] = K(393), w = G(0), T = G(o), E = G(u), D = G(f), O = G(m);
	W(() => {
		T.current = o;
	}, [o]), W(() => {
		E.current = u;
	}, [u]), W(() => {
		D.current = f;
	}, [f]), W(() => {
		O.current = m;
	}, [m]), W(() => {
		if (!x.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) C(t.contentRect.width || 393);
		});
		return e.observe(x.current), () => e.disconnect();
	}, []);
	let k = m ? f : u, A = Math.max(1, Math.ceil(k.length / Z));
	m && (A += 1);
	let j = [];
	for (let e = 0; e < A * Z; e += Z) {
		let t = k.slice(e, e + Z);
		for (; t.length < Z;) t.push(null);
		j.push(t);
	}
	let M = U((e) => {
		e !== T.current && s(e);
	}, []), N = G(null), ee = () => {
		N.current = setTimeout(() => l(!0), Hr);
	}, P = () => {
		N.current && clearTimeout(N.current);
	}, te = () => {
		c && l(!1);
	}, ne = (e, t) => {
		h(e), _(!0);
		let n = "touches" in t ? t.touches[0].clientX : t.clientX, r = "touches" in t ? t.touches[0].clientY : t.clientY;
		b({
			x: n,
			y: r
		});
	};
	U(() => {
		if (!m) return;
		let e = [...f], t = -1;
		for (let n = e.length - 1; n >= 0; n--) if (e[n] !== null) {
			t = n;
			break;
		}
		let n = Math.max(1, Math.ceil((t + 1) / Z)), r = e.slice(0, n * Z);
		d(r), p(r), o >= n && s(n - 1), h(null), _(!1);
	}, [m, o]), W(() => {
		if (!m) return;
		let e = (e) => {
			b({
				x: e.clientX,
				y: e.clientY
			});
			let t = T.current, n = O.current;
			if (!n) return;
			let r = x.current?.querySelectorAll(".grid")?.[t];
			if (r) {
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / Br)), c = Math.floor(o / (i.height / Vr));
				if (s >= 0 && s < Br && c >= 0 && c < Vr) {
					let e = c * Br + s, r = t * Z + e, i = [...E.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * Z;
							for (; i.length < e;) i.push(null);
						}
						let e = Ur(i, a, r);
						E.current = e, D.current = e, p(e), d(e);
					}
				}
			}
			let i = x.current?.getBoundingClientRect();
			if (i) {
				let t = e.clientX, n = Date.now();
				if (n - w.current > 1200) {
					let e = T.current;
					t < i.left + 36 && e > 0 ? (M(e - 1), w.current = n) : t > i.right - 36 && (M(e + 1), w.current = n);
				}
			}
		}, t = () => {
			let e = [...D.current], t = T.current, n = -1;
			for (let t = e.length - 1; t >= 0; t--) if (e[t] !== null) {
				n = t;
				break;
			}
			let r = Math.max(1, Math.ceil((n + 1) / Z)), i = e.slice(0, r * Z);
			d(i), p(i), t >= r && s(r - 1), h(null), _(!1);
		};
		return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
			window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t);
		};
	}, [m, M]);
	let re = (e, t) => {
		let n = t.offset.x, r = t.velocity.x, i = o, a = S / 4;
		n < -a || r < -300 ? i = Math.min(A - 1, o + 1) : (n > a || r > 300) && (i = Math.max(0, o - 1)), M(i);
	}, ie = n + r + 32;
	return /* @__PURE__ */ Y("div", {
		ref: x,
		className: "absolute inset-0 overflow-hidden",
		style: {
			paddingTop: t + 12,
			paddingBottom: ie
		},
		onPointerDown: ee,
		onPointerUp: P,
		onPointerCancel: P,
		onClick: te,
		children: [
			/* @__PURE__ */ J("div", {
				className: "h-full w-full overflow-hidden",
				children: /* @__PURE__ */ J(y.div, {
					drag: !g && "x",
					dragDirectionLock: !0,
					dragConstraints: {
						left: -(A - 1) * S,
						right: 0
					},
					animate: { x: -o * S },
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 30
					},
					onDragEnd: re,
					className: "flex h-full w-full cursor-grab active:cursor-grabbing",
					children: j.map((t, n) => /* @__PURE__ */ J("div", {
						className: "h-full shrink-0 grid px-4",
						style: {
							gridTemplateColumns: `repeat(${Br}, 1fr)`,
							gridTemplateRows: `repeat(${Vr}, 1fr)`,
							gap: "16px 8px",
							width: S
						},
						children: t.map((t, n) => {
							if (t) {
								let r = i[t];
								if (r) return /* @__PURE__ */ J(Gr, {
									app: r,
									index: n,
									jiggling: c,
									activeDragId: m,
									onPointerDownStart: () => _(!0),
									onPointerDownEnd: () => _(!1),
									onOpen: e,
									onDragStart: ne
								}, r.id);
							}
							return /* @__PURE__ */ Y("div", {
								className: "flex flex-col items-center gap-1.5 opacity-0 pointer-events-none select-none",
								children: [/* @__PURE__ */ J("div", { style: {
									width: 60,
									height: 60
								} }), /* @__PURE__ */ J("span", {
									className: "text-[11px] leading-tight max-w-[64px] truncate",
									children: "Empty"
								})]
							}, `empty-${n}`);
						})
					}, n))
				})
			}),
			/* @__PURE__ */ J("div", {
				className: "absolute inset-x-0 flex justify-center items-center gap-1.5",
				style: {
					bottom: n + r + 6,
					height: 16
				},
				children: Array.from({ length: A }).map((e, t) => /* @__PURE__ */ J("button", {
					onClick: (e) => {
						e.stopPropagation(), M(t);
					},
					className: L("rounded-full transition-all duration-200", t === o ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50")
				}, t))
			}),
			m && i[m] && /* @__PURE__ */ Y("div", {
				className: "fixed pointer-events-none z-[99999] flex flex-col items-center gap-1.5 select-none",
				style: {
					left: v.x - 30,
					top: v.y - 30,
					width: 60,
					transform: "scale(1.15)",
					filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
				},
				children: [/* @__PURE__ */ J(z, {
					appConfig: i[m],
					size: 60
				}), /* @__PURE__ */ J("span", {
					className: "text-white text-[11px] font-semibold text-center leading-tight drop-shadow-md max-w-[64px] truncate",
					children: a(m, i[m].name)
				})]
			})
		]
	});
}
function Gr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = V(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
		x: 0,
		y: 0
	}), p = G(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, Hr);
	}, h = (t) => {
		p.current || (f.current.x !== 0 || f.current.y !== 0) && Math.hypot(t.clientX - f.current.x, t.clientY - f.current.y) > 5 && (u.current && clearTimeout(u.current), p.current = !0, s(e.id, t.nativeEvent));
	}, g = () => {
		u.current && clearTimeout(u.current), f.current = {
			x: 0,
			y: 0
		}, a();
	}, _ = () => {
		u.current && clearTimeout(u.current), f.current = {
			x: 0,
			y: 0
		}, a();
	}, v = (t) => {
		t.stopPropagation(), !(d.current || n) && o(e);
	}, b = r === e.id;
	return /* @__PURE__ */ Y(y.div, {
		layout: !b,
		"data-app-id": e.id,
		className: "flex flex-col items-center gap-1.5 select-none relative cursor-grab active:cursor-grabbing",
		onPointerDown: m,
		onPointerMove: h,
		onPointerUp: g,
		onPointerCancel: _,
		onClick: v,
		style: {
			touchAction: "none",
			zIndex: b ? 100 : 10,
			visibility: b ? "hidden" : "visible"
		},
		children: [/* @__PURE__ */ J(y.div, {
			animate: n ? {
				rotate: [
					0,
					-3.5,
					3.5,
					-3.5,
					3.5,
					0
				],
				x: [
					0,
					-1.2,
					1.2,
					-1.2,
					1.2,
					0
				],
				y: [
					0,
					1.2,
					-1.2,
					1.2,
					-1.2,
					0
				],
				transition: {
					repeat: Infinity,
					duration: .5,
					delay: t % 5 * .05
				}
			} : {
				rotate: 0,
				x: 0,
				y: 0
			},
			className: "relative pointer-events-none",
			children: /* @__PURE__ */ J(z, {
				appConfig: e,
				size: 60
			})
		}), /* @__PURE__ */ J("span", {
			className: "text-white text-[11px] font-medium text-center leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] max-w-[64px] truncate pointer-events-none",
			children: l
		})]
	});
}
//#endregion
//#region src/components/themes/IPhoneTheme.tsx
function Kr() {
	let [e, t] = K("");
	return W(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ J(q, { children: e });
}
var qr = 50, Jr = 72, Yr = 20;
function Xr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), a = G(null), o = I((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return Ir({
		onSwipeUp: () => {
			s || n(!1);
		},
		onSwipeDown: () => {
			s || i(!0);
		}
	}, a), /* @__PURE__ */ Y("div", {
		ref: a,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ J(v, { children: t && /* @__PURE__ */ J(Dr, { onUnlock: () => n(!1) }) }),
			/* @__PURE__ */ J(Wr, {
				onOpenApp: e,
				statusBarHeight: qr,
				navBarHeight: Jr,
				homeIndicatorHeight: Yr
			}),
			/* @__PURE__ */ J(re, {
				statusBarHeight: qr,
				navBarHeight: Jr,
				homeIndicatorHeight: Yr
			}),
			/* @__PURE__ */ Y("div", {
				className: "absolute top-0 inset-x-0 z-40 grid pointer-events-none",
				style: {
					height: qr,
					gridTemplateColumns: "1fr auto 1fr"
				},
				children: [
					/* @__PURE__ */ J("div", {
						className: "flex items-start pt-3.5 pl-5 text-white text-[15px] font-semibold tabular-nums",
						children: /* @__PURE__ */ J(Kr, {})
					}),
					/* @__PURE__ */ J("div", {
						className: "flex items-start justify-center pt-1.5",
						children: /* @__PURE__ */ J(zr, {})
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-start justify-end pt-3.5 pr-5 gap-2 text-white",
						children: [
							/* @__PURE__ */ J(Ot, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(N, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(w, { className: "w-[22px] h-[22px]" })
						]
					})
				]
			}),
			/* @__PURE__ */ J(Fr, {
				open: r,
				onClose: () => i(!1)
			}),
			!s && /* @__PURE__ */ Y("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				style: { height: 92 },
				children: [/* @__PURE__ */ J(Rr, {
					onOpenApp: e,
					navBarHeight: Jr
				}), /* @__PURE__ */ J("div", {
					className: "flex items-center justify-center",
					style: { height: Yr },
					children: /* @__PURE__ */ J("div", { className: "w-32 h-1 bg-white/40 rounded-full" })
				})]
			})
		]
	});
}
//#endregion
//#region src/components/windows/StartMenu.tsx
var Zr = [
	{
		label: "Welcome.txt",
		subtitle: "Just now",
		icon: "📄"
	},
	{
		label: "System Settings",
		subtitle: "5 minutes ago",
		icon: "⚙️"
	},
	{
		label: "README.md",
		subtitle: "Today",
		icon: "📝"
	}
];
function Qr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = I((e) => e.apps), o = I((e) => e.dockAppIds), { t: s, getAppName: c } = V(), l = o.map((e) => a[e]).filter(Boolean), u = Object.values(a).filter((e) => !e.disabled), d = r ? u.filter((e) => c(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : [], f = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9980]",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
		initial: {
			opacity: 0,
			y: 20,
			scale: .97
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 16,
			scale: .97
		},
		transition: {
			type: "spring",
			stiffness: 500,
			damping: 38
		},
		className: "fixed z-[9981] bottom-14 left-1/2 -translate-x-1/2 w-[640px] max-w-[95vw] bg-white/90 dark:bg-neutral-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden flex flex-col",
		style: { maxHeight: "480px" },
		children: [
			/* @__PURE__ */ J("div", {
				className: "px-6 pt-5 pb-3",
				children: /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2.5 bg-black/5 dark:bg-white/10 rounded-xl px-3.5 py-2.5 border border-black/10 dark:border-white/15",
					children: [/* @__PURE__ */ J(Xe, { className: "w-4 h-4 text-black/40 dark:text-white/50 shrink-0" }), /* @__PURE__ */ J("input", {
						autoFocus: !0,
						value: r,
						onChange: (e) => i(e.target.value),
						placeholder: "Search for apps, files, settings",
						className: "flex-1 bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
					})]
				})
			}),
			r ? /* @__PURE__ */ J("div", {
				className: "px-4 pb-4 overflow-y-auto max-h-72",
				children: d.length === 0 ? /* @__PURE__ */ Y("p", {
					className: "text-center text-black/40 dark:text-white/40 text-sm py-6",
					children: [
						"No results for “",
						r,
						"”"
					]
				}) : d.map((e) => /* @__PURE__ */ Y("button", {
					onClick: () => f(e),
					className: "flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-left",
					children: [/* @__PURE__ */ J(z, {
						appConfig: e,
						size: 32
					}), /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", {
						className: "text-[13px] text-black dark:text-white font-medium",
						children: c(e.id, e.name)
					}), /* @__PURE__ */ J("p", {
						className: "text-[11px] text-black/40 dark:text-white/40",
						children: e.category ?? "Application"
					})] })]
				}, e.id))
			}) : /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ Y("div", {
				className: "px-6 pb-4",
				children: [/* @__PURE__ */ Y("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ J("h3", {
						className: "text-[12px] font-semibold text-black/60 dark:text-white/60 uppercase tracking-widest",
						children: "Pinned"
					}), /* @__PURE__ */ J("button", {
						className: "text-[11px] text-black/40 hover:text-black/70 dark:text-white/40 dark:hover:text-white/70 transition-colors",
						children: "All apps →"
					})]
				}), /* @__PURE__ */ J("div", {
					className: "grid grid-cols-6 gap-1",
					children: l.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => f(e),
						className: "flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
						children: [/* @__PURE__ */ J(z, {
							appConfig: e,
							size: 36
						}), /* @__PURE__ */ J("span", {
							className: "text-[10px] text-black/80 dark:text-white/80 truncate w-full text-center leading-tight",
							children: c(e.id, e.name)
						})]
					}, e.id))
				})]
			}), /* @__PURE__ */ Y("div", {
				className: "px-6 pb-3 border-t border-black/5 dark:border-white/8",
				children: [/* @__PURE__ */ J("h3", {
					className: "text-[12px] font-semibold text-black/60 dark:text-white/60 uppercase tracking-widest mt-3 mb-2",
					children: "Recommended"
				}), /* @__PURE__ */ J("div", {
					className: "grid grid-cols-3 gap-1",
					children: Zr.map((e) => /* @__PURE__ */ Y("button", {
						className: "flex items-center gap-2.5 p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-left",
						children: [/* @__PURE__ */ J("span", {
							className: "text-2xl w-8 text-center shrink-0",
							children: e.icon
						}), /* @__PURE__ */ Y("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ J("p", {
								className: "text-[12px] text-black/90 dark:text-white/90 font-medium truncate",
								children: e.label
							}), /* @__PURE__ */ J("p", {
								className: "text-[10px] text-black/40 dark:text-white/40 truncate",
								children: e.subtitle
							})]
						})]
					}, e.label))
				})]
			})] }),
			/* @__PURE__ */ Y("div", {
				className: "flex items-center justify-between px-6 py-3 border-t border-black/5 dark:border-white/8 mt-auto bg-black/5 dark:bg-black/20",
				children: [/* @__PURE__ */ Y("button", {
					className: "flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					children: [/* @__PURE__ */ J("div", {
						className: "w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center",
						children: /* @__PURE__ */ J(jt, { className: "w-4 h-4 text-white" })
					}), /* @__PURE__ */ J("span", {
						className: "text-[12px] text-black/80 dark:text-white/80 font-semibold",
						children: "User"
					})]
				}), /* @__PURE__ */ J("button", {
					className: "p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					title: "Power",
					children: /* @__PURE__ */ J(Dt, { className: "w-4.5 h-4.5 text-black/60 dark:text-white/60" })
				})]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/windows/SystemTray.tsx
function $r({ open: e, onClose: t }) {
	let n = I((e) => e.notifications), r = I((e) => e.dismissNotification), i = n.filter((e) => !e.read), [a, o] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(N, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ht, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(Et, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(ae, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery",
			icon: /* @__PURE__ */ J(w, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "display",
			label: "Display",
			icon: /* @__PURE__ */ J(je, { className: "w-4 h-4" }),
			active: !1
		}
	]), s = (e) => {
		o((t) => t.map((t) => t.id === e ? {
			...t,
			active: !t.active
		} : t));
	}, c = /* @__PURE__ */ new Date(), l = new Date(c.getFullYear(), c.getMonth() + 1, 0).getDate(), u = new Date(c.getFullYear(), c.getMonth(), 1).getDay(), d = c.toLocaleString("default", {
		month: "long",
		year: "numeric"
	}), f = [...Array.from({ length: u }, () => null), ...Array.from({ length: l }, (e, t) => t + 1)];
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9970]",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
		initial: {
			opacity: 0,
			y: 12,
			scale: .97
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 8,
			scale: .97
		},
		transition: {
			type: "spring",
			stiffness: 500,
			damping: 38
		},
		className: "fixed z-[9971] bottom-12 right-4 w-[380px] bg-white/90 dark:bg-neutral-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden",
		children: [
			/* @__PURE__ */ Y("div", {
				className: "px-5 pt-4 pb-3 border-b border-black/8 dark:border-white/8",
				children: [/* @__PURE__ */ J("div", {
					className: "text-3xl font-light text-black dark:text-white",
					children: /* @__PURE__ */ J(P, {})
				}), /* @__PURE__ */ J("p", {
					className: "text-[12px] text-black/50 dark:text-white/50 mt-0.5",
					children: c.toLocaleDateString("en-US", {
						weekday: "long",
						month: "long",
						day: "numeric"
					})
				})]
			}),
			/* @__PURE__ */ J("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8",
				children: /* @__PURE__ */ J("div", {
					className: "grid grid-cols-3 gap-2",
					children: a.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => s(e.id),
						className: L("flex flex-col items-start gap-1.5 p-3 rounded-xl transition-colors text-left border", e.active ? "bg-blue-500 dark:bg-blue-600 border-blue-500 dark:border-blue-600" : "bg-black/5 dark:bg-white/8 border-black/5 dark:border-white/5 hover:bg-black/8 dark:hover:bg-white/12"),
						children: [/* @__PURE__ */ J("div", {
							className: L("w-6 h-6 flex items-center justify-center", e.active ? "text-white" : "text-black/60 dark:text-white/60"),
							children: e.icon
						}), /* @__PURE__ */ J("span", {
							className: L("text-[10px] font-medium", e.active ? "text-white" : "text-black/60 dark:text-white/50"),
							children: e.label
						})]
					}, e.id))
				})
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8 space-y-2.5",
				children: [/* @__PURE__ */ J(ei, {
					icon: /* @__PURE__ */ J(Qe, { className: "w-3.5 h-3.5" }),
					defaultValue: 75
				}), /* @__PURE__ */ J(ei, {
					icon: /* @__PURE__ */ J(Ze, { className: "w-3.5 h-3.5" }),
					defaultValue: 80
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8",
				children: [/* @__PURE__ */ J("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: d
				}), /* @__PURE__ */ Y("div", {
					className: "grid grid-cols-7 gap-0.5 text-center",
					children: [[
						"S",
						"M",
						"T",
						"W",
						"T",
						"F",
						"S"
					].map((e, t) => /* @__PURE__ */ J("div", {
						className: "text-[9px] text-black/40 dark:text-white/30 pb-1",
						children: e
					}, t)), f.map((e, t) => /* @__PURE__ */ J("div", {
						className: L("text-[11px] w-7 h-7 flex items-center justify-center rounded-full mx-auto", e === c.getDate() ? "bg-blue-500 text-white font-semibold" : e ? "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 cursor-default" : ""),
						children: e
					}, t))]
				})]
			}),
			i.length > 0 && /* @__PURE__ */ Y("div", {
				className: "px-5 py-3 max-h-36 overflow-y-auto",
				children: [/* @__PURE__ */ J("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: "Notifications"
				}), i.slice(0, 4).map((e) => /* @__PURE__ */ Y("div", {
					className: "flex items-start gap-2.5 py-1.5 group",
					children: [
						/* @__PURE__ */ J("div", {
							className: "w-6 h-6 rounded bg-blue-600 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ J(_e, { className: "w-3 h-3 text-white" })
						}),
						/* @__PURE__ */ Y("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ J("p", {
								className: "text-[11px] text-black/80 dark:text-white/90 font-medium truncate",
								children: e.title
							}), /* @__PURE__ */ J("p", {
								className: "text-[10px] text-black/40 dark:text-white/40 truncate",
								children: e.body
							})]
						}),
						/* @__PURE__ */ J("button", {
							onClick: () => r(e.id),
							className: "text-black/20 dark:text-white/20 hover:text-black/60 dark:hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ J(ke, { className: "w-3 h-3" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
function ei({ icon: e, defaultValue: t }) {
	let [n, r] = K(t);
	return /* @__PURE__ */ Y("div", {
		className: "flex items-center gap-2.5",
		children: [
			/* @__PURE__ */ J("span", {
				className: "text-black/50 dark:text-white/50 w-4 shrink-0",
				children: e
			}),
			/* @__PURE__ */ J("input", {
				type: "range",
				min: 0,
				max: 100,
				value: n,
				onChange: (e) => r(Number(e.target.value)),
				className: "flex-1 h-1 rounded-full accent-blue-500"
			}),
			/* @__PURE__ */ Y("span", {
				className: "text-[10px] text-black/40 dark:text-white/40 w-7 text-right",
				children: [n, "%"]
			})
		]
	});
}
//#endregion
//#region src/components/dock/Taskbar.tsx
function ti({ onOpenApp: e }) {
	let { windowsStartIcon: t } = M(), [n, r] = K(!1), [i, a] = K(!1), o = I((e) => e.dockAppIds), s = I((e) => e.apps), c = I((e) => e.runningAppIds), l = I((e) => e.launchApp), u = I((e) => e.restoreWindow), d = I((e) => e.focusWindow), f = I((e) => e.windows), { t: p, getAppName: m } = V(), h = o.map((e) => s[e]).filter(Boolean), g = (e) => {
		l(e);
	};
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(Qr, {
			open: n,
			onClose: () => r(!1),
			onOpenApp: (t) => {
				e(t), r(!1);
			}
		}),
		/* @__PURE__ */ J($r, {
			open: i,
			onClose: () => a(!1)
		}),
		/* @__PURE__ */ Y("div", {
			className: "absolute bottom-0 inset-x-0 z-50 flex items-center justify-center h-(--taskbar-height)",
			style: {
				background: "var(--taskbar-bg)",
				backdropFilter: "blur(20px)",
				borderTop: "1px solid var(--taskbar-border)"
			},
			children: [/* @__PURE__ */ Y("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ J("button", {
						onClick: () => {
							r((e) => !e), a(!1);
						},
						className: L("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", n && "bg-black/10 dark:bg-white/15"),
						title: "Start",
						children: t ? /* @__PURE__ */ J("span", {
							className: "flex items-center justify-center h-5 w-auto max-h-5 select-none [&>svg]:h-full [&>svg]:w-auto [&>img]:h-full [&>img]:w-auto",
							children: t
						}) : /* @__PURE__ */ Y("svg", {
							viewBox: "0 0 24 24",
							className: "w-5 h-5",
							fill: "currentColor",
							children: [
								/* @__PURE__ */ J("rect", {
									x: "3",
									y: "3",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-400"
								}),
								/* @__PURE__ */ J("rect", {
									x: "13",
									y: "3",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-500"
								}),
								/* @__PURE__ */ J("rect", {
									x: "3",
									y: "13",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-500"
								}),
								/* @__PURE__ */ J("rect", {
									x: "13",
									y: "13",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-400"
								})
							]
						})
					}),
					/* @__PURE__ */ J("button", {
						onClick: () => {
							r((e) => !e), a(!1);
						},
						className: L("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", n && "bg-black/10 dark:bg-white/15"),
						title: "Search",
						children: /* @__PURE__ */ J(Xe, { className: "w-4 h-4 text-black/70 dark:text-white/80" })
					}),
					h.map((e) => {
						let t = c.includes(e.id), n = m(e.id, e.name), r = Object.values(f).filter((t) => t.appId === e.id);
						return /* @__PURE__ */ Y("div", {
							className: "relative group/taskitem flex items-center justify-center",
							children: [/* @__PURE__ */ Y("button", {
								onClick: () => g(e),
								className: L("w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative", "hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20", t && "bg-black/5 dark:bg-white/10"),
								"aria-label": n,
								title: n,
								children: [/* @__PURE__ */ J(z, {
									appConfig: e,
									size: 28
								}), t && /* @__PURE__ */ J("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--win-accent)" })]
							}), r.length > 0 && /* @__PURE__ */ J("div", {
								className: "hidden group-hover/taskitem:flex absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 bg-[#f3f3f3]/95 dark:bg-[#1f242b]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 p-2 rounded-xl shadow-2xl z-50 flex flex-col gap-1.5 w-40 pointer-events-auto select-none",
								children: r.map((t) => /* @__PURE__ */ Y("div", {
									onClick: () => {
										u(t.id), d(t.id);
									},
									className: "flex flex-col gap-1.5 w-full text-left",
									children: [/* @__PURE__ */ Y("div", {
										className: "flex items-center gap-1.5 px-1 pb-1 border-b border-black/5 dark:border-white/5 text-[10px] text-black/80 dark:text-white/80 font-semibold truncate",
										children: [/* @__PURE__ */ J(z, {
											appConfig: e,
											size: 14
										}), /* @__PURE__ */ J("span", {
											className: "truncate",
											children: t.title
										})]
									}), /* @__PURE__ */ J("div", {
										className: L("h-20 rounded-md overflow-hidden flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 shadow-inner border border-black/5 dark:border-white/5", e.id === "terminal" ? "bg-black text-[6px] text-green-400 font-mono p-1.5 justify-start items-start" : e.id === "settings" ? "bg-slate-200 dark:bg-neutral-800 p-1 flex gap-1" : "bg-gradient-to-br from-blue-500 to-indigo-600"),
										children: e.id === "terminal" ? /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", { children: "Microsoft Windows [Version 10.0.22631]" }), /* @__PURE__ */ J("p", {
											className: "mt-1",
											children: "C:\\Users\\User>_"
										})] }) : e.id === "settings" ? /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", { className: "w-1/3 h-full bg-black/5 dark:bg-white/5 rounded-sm" }), /* @__PURE__ */ J("div", { className: "flex-1 h-full bg-black/10 dark:bg-white/10 rounded-sm" })] }) : /* @__PURE__ */ J(z, {
											appConfig: e,
											size: 28
										})
									})]
								}, t.id))
							})]
						}, e.id);
					})
				]
			}), /* @__PURE__ */ J("div", {
				className: "absolute right-2 flex items-center",
				children: /* @__PURE__ */ J("button", {
					onClick: () => {
						a((e) => !e), r(!1);
					},
					className: L("px-2 h-8 flex items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors", i && "bg-black/10 dark:bg-white/15"),
					title: "System tray",
					children: /* @__PURE__ */ J("span", {
						className: "text-xs text-black/80 dark:text-white/80 tabular-nums",
						children: /* @__PURE__ */ J(P, {})
					})
				})
			})]
		})
	] });
}
//#endregion
//#region src/components/themes/WindowsTheme.tsx
function ni({ onOpenApp: e }) {
	return _r(), /* @__PURE__ */ J(q, { children: /* @__PURE__ */ J("div", {
		className: "absolute bottom-0 inset-x-0 z-40 pointer-events-none",
		children: /* @__PURE__ */ J("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ J(ti, { onOpenApp: e })
		})
	}) });
}
//#endregion
//#region src/components/android/AppDrawer.tsx
function ri({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = I((e) => e.apps), { t: o, getAppName: s } = V(), c = Object.values(a).filter((e) => !e.disabled), l = r ? c.filter((e) => s(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : c, u = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: .5 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980 bg-black",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 40
		},
		drag: "y",
		dragConstraints: {
			top: 0,
			bottom: 0
		},
		dragElastic: .2,
		onDragEnd: (e, n) => {
			n.offset.y > 100 && t();
		},
		className: "absolute bottom-0 inset-x-0 z-9981 bg-neutral-900/96 backdrop-blur-3xl rounded-t-3xl max-h-[85%] flex flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ J("div", {
				className: "flex justify-center pt-3 pb-1",
				children: /* @__PURE__ */ J("div", { className: "w-10 h-1 bg-white/30 rounded-full" })
			}),
			/* @__PURE__ */ J("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2.5 bg-white/10 rounded-2xl px-3 py-2.5",
					children: [
						/* @__PURE__ */ J(Xe, { className: "w-4 h-4 text-white/50 shrink-0" }),
						/* @__PURE__ */ J("input", {
							value: r,
							onChange: (e) => i(e.target.value),
							placeholder: o.search,
							className: "flex-1 bg-transparent text-[13px] text-white placeholder:text-white/40 outline-none"
						}),
						r && /* @__PURE__ */ J("button", {
							onClick: () => i(""),
							children: /* @__PURE__ */ J(B, { className: "w-3.5 h-3.5 text-white/40" })
						})
					]
				})
			}),
			/* @__PURE__ */ J("div", {
				className: "flex-1 overflow-y-auto px-4 pb-8",
				children: /* @__PURE__ */ J("div", {
					className: "grid grid-cols-4 gap-y-5 gap-x-2 py-4",
					children: l.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => u(e),
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ J("div", {
							className: "w-14 h-14 rounded-2xl overflow-hidden",
							children: /* @__PURE__ */ J(z, {
								appConfig: e,
								size: 56
							})
						}), /* @__PURE__ */ J("span", {
							className: "text-white/80 text-[10px] text-center leading-tight max-w-[60px] truncate",
							children: s(e.id, e.name)
						})]
					}, e.id))
				})
			})
		]
	})] }) });
}
//#endregion
//#region src/components/android/QuickSettings.tsx
function ii({ open: e, onClose: t }) {
	let n = I((e) => e.notifications), r = I((e) => e.dismissNotification), i = I((e) => e.colorScheme), a = I((e) => e.setColorScheme), [o, s] = K(!1), [c, l] = K(70), [u, d] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(N, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ht, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dnd",
			label: "Do Not Dist",
			icon: /* @__PURE__ */ J(mt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(Et, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "rotate",
			label: "Auto Rotate",
			icon: /* @__PURE__ */ J(Ye, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "flashlight",
			label: "Flashlight",
			icon: /* @__PURE__ */ J(bt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery Sav",
			icon: /* @__PURE__ */ J(w, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "cast",
			label: "Cast",
			icon: /* @__PURE__ */ J(gt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dark",
			label: "Dark Mode",
			icon: /* @__PURE__ */ J(ae, { className: "w-4 h-4" }),
			active: i === "dark"
		},
		{
			id: "eye",
			label: "Eye Comfort",
			icon: /* @__PURE__ */ J(vt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "bell",
			label: "Notifications",
			icon: /* @__PURE__ */ J(_e, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "data",
			label: "Mobile Data",
			icon: /* @__PURE__ */ J("svg", {
				className: "w-4 h-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ J("path", { d: "M1 1h4v22H1zm9 8h4v14h-4zm9-8h4v22h-4z" })
			}),
			active: !0
		}
	]), f = (e) => {
		e === "dark" && a(i === "dark" ? "light" : "dark"), d((t) => t.map((t) => t.id === e ? {
			...t,
			active: !t.active
		} : t));
	}, p = n.filter((e) => !e.read), m = o ? u : u.slice(0, 6);
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
		initial: { y: "-100%" },
		animate: { y: 0 },
		exit: { y: "-100%" },
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 38
		},
		className: "absolute top-0 inset-x-0 z-9981 bg-neutral-900/97 backdrop-blur-3xl rounded-b-3xl pb-4 pt-10",
		children: [
			/* @__PURE__ */ Y("div", {
				className: "flex items-center justify-between px-4 pb-2",
				children: [/* @__PURE__ */ J("button", {
					onClick: t,
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ J(B, { className: "w-4 h-4 text-white/70" })
				}), /* @__PURE__ */ J("button", {
					onClick: () => s((e) => !e),
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ J(se, { className: L("w-4 h-4 text-white/70 transition-transform", o ? "rotate-180" : "") })
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex items-center gap-3 px-4 py-2",
				children: [/* @__PURE__ */ J(Ze, { className: "w-4 h-4 text-white/60 shrink-0" }), /* @__PURE__ */ J("input", {
					type: "range",
					min: 0,
					max: 100,
					value: c,
					onChange: (e) => l(Number(e.target.value)),
					className: "flex-1 h-1 rounded-full accent-teal-400"
				})]
			}),
			/* @__PURE__ */ J("div", {
				className: "grid grid-cols-3 gap-2 px-4 pt-2",
				children: m.map((e) => /* @__PURE__ */ Y("button", {
					onClick: () => f(e.id),
					className: L("flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-colors text-left", e.active ? "bg-teal-500/30 border border-teal-400/40" : "bg-white/8"),
					children: [/* @__PURE__ */ J("span", {
						className: e.active ? "text-teal-300" : "text-white/50",
						children: e.icon
					}), /* @__PURE__ */ J("span", {
						className: L("text-[10px] font-medium leading-tight", e.active ? "text-white" : "text-white/50"),
						children: e.label
					})]
				}, e.id))
			}),
			p.length > 0 && /* @__PURE__ */ Y("div", {
				className: "mt-3 px-4 space-y-2",
				children: [/* @__PURE__ */ J("div", { className: "h-px bg-white/10" }), p.slice(0, 3).map((e) => /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-3 py-2 group",
					children: [
						/* @__PURE__ */ J("div", {
							className: "w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ J("span", {
								className: "text-white text-xs font-bold",
								children: e.appName.charAt(0)
							})
						}),
						/* @__PURE__ */ Y("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ J("p", {
								className: "text-[11px] text-white/90 font-medium",
								children: e.title
							}), /* @__PURE__ */ J("p", {
								className: "text-[10px] text-white/50 truncate",
								children: e.body
							})]
						}),
						/* @__PURE__ */ J("button", {
							onClick: () => r(e.id),
							className: "text-white/20 hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ J(B, { className: "w-3.5 h-3.5" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/themes/AndroidTheme.tsx
function ai() {
	let [e, t] = K("");
	return W(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ J(q, { children: e });
}
var oi = 32, si = 76, ci = 0;
function li({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), a = G(null), o = I((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return Ir({
		onSwipeUp: () => {
			s || n(!0);
		},
		onSwipeDown: () => {
			s || i(!0);
		}
	}, a), /* @__PURE__ */ Y("div", {
		ref: a,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ Y("div", {
				className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 text-white text-[13px] font-semibold tabular-nums pointer-events-none",
				style: { height: oi },
				children: [/* @__PURE__ */ J(ai, {}), /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ J(Ot, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(N, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(w, { className: "w-[20px] h-[20px]" })
					]
				})]
			}),
			/* @__PURE__ */ J(re, {
				statusBarHeight: oi,
				navBarHeight: si,
				homeIndicatorHeight: ci
			}),
			!s && /* @__PURE__ */ J("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				children: /* @__PURE__ */ J(Rr, {
					onOpenApp: e,
					navBarHeight: si
				})
			}),
			/* @__PURE__ */ J(ri, {
				open: t,
				onClose: () => n(!1),
				onOpenApp: (t) => {
					e(t), n(!1);
				}
			}),
			/* @__PURE__ */ J(ii, {
				open: r,
				onClose: () => i(!1)
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context-menu@2.2.16_@types+react-dom@19.2.3_@types+react@19.2.14__@type_7ddebea395c65d3c4d3683b445765102/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var ui = "ContextMenu", [di, fi] = r(ui, [Me]), Q = Me(), [pi, mi] = di(ui), hi = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e, [o, c] = H.useState(!1), l = Q(t), u = s(r), d = H.useCallback((e) => {
		c(e), u(e);
	}, [u]);
	return /* @__PURE__ */ J(pi, {
		scope: t,
		open: o,
		onOpenChange: d,
		modal: a,
		children: /* @__PURE__ */ J(Ie, {
			...l,
			dir: i,
			open: o,
			onOpenChange: d,
			modal: a,
			children: n
		})
	});
};
hi.displayName = ui;
var gi = "ContextMenuTrigger", _i = H.forwardRef((t, n) => {
	let { __scopeContextMenu: r, disabled: i = !1, ...a } = t, s = mi(gi, r), c = Q(r), l = H.useRef({
		x: 0,
		y: 0
	}), u = H.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...l.current
	}) }), d = H.useRef(0), f = H.useCallback(() => window.clearTimeout(d.current), []), p = (e) => {
		l.current = {
			x: e.clientX,
			y: e.clientY
		}, s.onOpenChange(!0);
	};
	return H.useEffect(() => f, [f]), H.useEffect(() => void (i && f()), [i, f]), /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(qe, {
		...c,
		virtualRef: u
	}), /* @__PURE__ */ J(o.span, {
		"data-state": s.open ? "open" : "closed",
		"data-disabled": i ? "" : void 0,
		...a,
		ref: n,
		style: {
			WebkitTouchCallout: "none",
			...t.style
		},
		onContextMenu: i ? t.onContextMenu : e(t.onContextMenu, (e) => {
			f(), p(e), e.preventDefault();
		}),
		onPointerDown: i ? t.onPointerDown : e(t.onPointerDown, Ki((e) => {
			f(), d.current = window.setTimeout(() => p(e), 700);
		})),
		onPointerMove: i ? t.onPointerMove : e(t.onPointerMove, Ki(f)),
		onPointerCancel: i ? t.onPointerCancel : e(t.onPointerCancel, Ki(f)),
		onPointerUp: i ? t.onPointerUp : e(t.onPointerUp, Ki(f))
	})] });
});
_i.displayName = gi;
var vi = "ContextMenuPortal", yi = (e) => {
	let { __scopeContextMenu: t, ...n } = e;
	return /* @__PURE__ */ J(Be, {
		...Q(t),
		...n
	});
};
yi.displayName = vi;
var bi = "ContextMenuContent", xi = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = mi(bi, n), a = Q(n), o = H.useRef(!1);
	return /* @__PURE__ */ J(ze, {
		...a,
		...r,
		ref: t,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), !t.defaultPrevented && o.current && t.preventDefault(), o.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), !t.defaultPrevented && !i.modal && (o.current = !0);
		},
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
xi.displayName = bi;
var Si = "ContextMenuGroup", Ci = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ne, {
		...Q(n),
		...r,
		ref: t
	});
});
Ci.displayName = Si;
var wi = "ContextMenuLabel", Ti = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Pe, {
		...Q(n),
		...r,
		ref: t
	});
});
Ti.displayName = wi;
var Ei = "ContextMenuItem", Di = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ue, {
		...Q(n),
		...r,
		ref: t
	});
});
Di.displayName = Ei;
var Oi = "ContextMenuCheckboxItem", ki = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ge, {
		...Q(n),
		...r,
		ref: t
	});
});
ki.displayName = Oi;
var Ai = "ContextMenuRadioGroup", ji = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Je, {
		...Q(n),
		...r,
		ref: t
	});
});
ji.displayName = Ai;
var Mi = "ContextMenuRadioItem", Ni = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Fe, {
		...Q(n),
		...r,
		ref: t
	});
});
Ni.displayName = Mi;
var Pi = "ContextMenuItemIndicator", Fi = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ke, {
		...Q(n),
		...r,
		ref: t
	});
});
Fi.displayName = Pi;
var Ii = "ContextMenuSeparator", Li = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(We, {
		...Q(n),
		...r,
		ref: t
	});
});
Li.displayName = Ii;
var Ri = "ContextMenuArrow", zi = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(He, {
		...Q(n),
		...r,
		ref: t
	});
});
zi.displayName = Ri;
var Bi = "ContextMenuSub", Vi = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = Q(t), [s, c] = f({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Bi
	});
	return /* @__PURE__ */ J(Ve, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Vi.displayName = Bi;
var Hi = "ContextMenuSubTrigger", Ui = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Le, {
		...Q(n),
		...r,
		ref: t
	});
});
Ui.displayName = Hi;
var Wi = "ContextMenuSubContent", Gi = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Re, {
		...Q(n),
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Gi.displayName = Wi;
function Ki(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var qi = hi, Ji = _i, Yi = yi, Xi = xi, Zi = Di, Qi = Li;
//#endregion
//#region src/lib/wallpaper-fit.ts
function $i(e) {
	switch (e) {
		case "fill": return {
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		};
		case "fit": return {
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		};
		case "stretch": return {
			backgroundSize: "100% 100%",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		};
		case "center": return {
			backgroundSize: "auto",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		};
		case "tile": return {
			backgroundSize: "auto",
			backgroundRepeat: "repeat",
			backgroundPosition: "top left"
		};
	}
}
//#endregion
//#region src/components/desktop/ViewOptionsDialog.tsx
function ea() {
	let { t: e } = V(), t = I((e) => e.desktopViewOptionsOpen), n = I((e) => e.setDesktopViewOptionsOpen), r = I((e) => e.useStacks), i = I((e) => e.stackGroupBy), a = I((e) => e.toggleStacks), o = I((e) => e.setStackGroupBy), s = I((e) => e.desktopSortBy), c = I((e) => e.setDesktopSortBy), l = I((e) => e.desktopIconSize), u = I((e) => e.setDesktopIconSize), d = I((e) => e.desktopGridSpacing), f = I((e) => e.setDesktopGridSpacing), p = I((e) => e.desktopTextSize), m = I((e) => e.setDesktopTextSize), h = I((e) => e.desktopLabelPosition), g = I((e) => e.setDesktopLabelPosition), [_, v] = K({
		x: 0,
		y: 0
	}), [y, b] = K(!1), x = G(null), S = U((e) => {
		e.target.closest("button") || e.target.closest("select") || e.target.closest("input") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), x.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: _.x,
			oy: _.y
		});
	}, [_]), C = U((e) => {
		x.current && v({
			x: x.current.ox + (e.clientX - x.current.mx),
			y: x.current.oy + (e.clientY - x.current.my)
		});
	}, []), w = U(() => {
		x.current = null;
	}, []), T = (e) => {
		e === "none" ? r && a() : (r || a(), o(e));
	};
	return !t || typeof document > "u" ? null : ot(/* @__PURE__ */ J("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99998 },
		children: /* @__PURE__ */ Y("div", {
			className: "relative flex flex-col bg-neutral-100/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-[280px] overflow-hidden pointer-events-auto text-black dark:text-white",
			style: { transform: `translate(${_.x}px, ${_.y}px)` },
			onPointerMove: C,
			onPointerUp: w,
			onPointerCancel: w,
			children: [/* @__PURE__ */ Y("div", {
				className: "w-full flex items-center justify-between px-4 pt-3 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: S,
				onMouseEnter: () => b(!0),
				onMouseLeave: () => b(!1),
				children: [
					/* @__PURE__ */ Y("div", {
						className: "flex items-center gap-2",
						onPointerDown: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ J("button", {
								onClick: () => n(!1),
								className: "w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100",
								style: { backgroundColor: "#ff5f57" },
								title: "Close",
								children: y && /* @__PURE__ */ J(B, {
									className: "w-2.5 h-2.5 text-red-950 dark:text-red-950/90",
									strokeWidth: 3.5
								})
							}),
							/* @__PURE__ */ J("div", {
								className: "w-4 h-4 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							}),
							/* @__PURE__ */ J("div", {
								className: "w-4 h-4 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							})
						]
					}),
					/* @__PURE__ */ J("span", {
						className: "text-[13px] font-semibold text-black/80 dark:text-white/80 absolute left-1/2 -translate-x-1/2",
						children: "Desktop"
					}),
					/* @__PURE__ */ J("div", { className: "w-14" })
				]
			}), /* @__PURE__ */ Y("div", {
				className: "flex flex-col p-4 gap-4 text-[13px] select-none",
				children: [
					/* @__PURE__ */ Y("div", {
						className: "flex flex-col gap-2.5",
						children: [/* @__PURE__ */ Y("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ J("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Stack By:"
							}), /* @__PURE__ */ Y("select", {
								value: r ? i : "none",
								onChange: (e) => T(e.target.value),
								className: "bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none",
								children: [
									/* @__PURE__ */ J("option", {
										value: "none",
										children: "None"
									}),
									/* @__PURE__ */ J("option", {
										value: "kind",
										children: "Kind"
									}),
									/* @__PURE__ */ J("option", {
										value: "shared-by",
										children: "Shared By"
									}),
									/* @__PURE__ */ J("option", {
										value: "date-last-opened",
										children: "Date Last Opened"
									}),
									/* @__PURE__ */ J("option", {
										value: "date-added",
										children: "Date Added"
									}),
									/* @__PURE__ */ J("option", {
										value: "date-modified",
										children: "Date Modified"
									}),
									/* @__PURE__ */ J("option", {
										value: "date-created",
										children: "Date Created"
									}),
									/* @__PURE__ */ J("option", {
										value: "tags",
										children: "Tags"
									})
								]
							})]
						}), /* @__PURE__ */ Y("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ J("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Sort By:"
							}), /* @__PURE__ */ Y("select", {
								value: s,
								onChange: (e) => c(e.target.value),
								className: "bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none",
								children: [
									/* @__PURE__ */ J("option", {
										value: "none",
										children: "None"
									}),
									/* @__PURE__ */ J("option", {
										value: "name",
										children: "Name"
									}),
									/* @__PURE__ */ J("option", {
										value: "kind",
										children: "Kind"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ J("div", { className: "h-px bg-black/10 dark:bg-white/10 -mx-4" }),
					/* @__PURE__ */ Y("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ Y("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ Y("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ J("span", {
									className: "text-black/70 dark:text-white/70",
									children: "Icon size:"
								}), /* @__PURE__ */ Y("span", {
									className: "text-xs text-black/50 dark:text-white/50",
									children: [
										l,
										"×",
										l
									]
								})]
							}), /* @__PURE__ */ Y("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ J(yt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "16",
										max: "128",
										value: l,
										onChange: (e) => u(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(yt, { className: "w-7 h-7 text-black/75 dark:text-white/75" })
								]
							})]
						}), /* @__PURE__ */ Y("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ J("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Grid spacing:"
							}), /* @__PURE__ */ Y("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ J(xt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "0",
										max: "100",
										value: d,
										onChange: (e) => f(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(Ae, { className: "w-6 h-6 text-black/75 dark:text-white/75" })
								]
							})]
						})]
					}),
					/* @__PURE__ */ J("div", { className: "h-px bg-black/10 dark:bg-white/10 -mx-4" }),
					/* @__PURE__ */ Y("div", {
						className: "flex flex-col gap-3.5",
						children: [/* @__PURE__ */ Y("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ J("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Text size:"
							}), /* @__PURE__ */ J("select", {
								value: p,
								onChange: (e) => m(Number(e.target.value)),
								className: "bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-20 focus:outline-none",
								children: [
									10,
									11,
									12,
									13,
									14,
									15,
									16
								].map((e) => /* @__PURE__ */ J("option", {
									value: e,
									children: e
								}, e))
							})]
						}), /* @__PURE__ */ Y("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ J("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Label position:"
							}), /* @__PURE__ */ Y("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ Y("label", {
									className: "flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ J("input", {
										type: "radio",
										name: "labelPosition",
										value: "bottom",
										checked: h === "bottom",
										onChange: () => g("bottom"),
										className: "w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
									}), /* @__PURE__ */ J("span", { children: "Bottom" })]
								}), /* @__PURE__ */ Y("label", {
									className: "flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ J("input", {
										type: "radio",
										name: "labelPosition",
										value: "right",
										checked: h === "right",
										onChange: () => g("right"),
										className: "w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
									}), /* @__PURE__ */ J("span", { children: "Right" })]
								})]
							})]
						})]
					})
				]
			})]
		})
	}), document.body);
}
//#endregion
//#region src/components/desktop/Wallpaper.tsx
var ta = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", na = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", ra = "min-w-[220px] outline-none z-[99999]";
function ia({ children: e }) {
	let { t } = V(), n = ee(), r = I((e) => e.useStacks), i = I((e) => e.toggleStacks), a = I((e) => e.openWidgetGallery), o = I((e) => e.wallpaperFitMode), s = I((e) => e.setDesktopViewOptionsOpen), c = I((e) => e.apps), l = I((e) => e.launchApp), u = I((e) => e.setSettingsActiveTab), d = wr(), [f, p] = K(!1), m = Te(), h = Tr(), g = Ce(m, h.url ?? ""), _ = Cr(g, d && h.kind !== "color"), v = h.kind === "color" ? d : _, y = d && v && h.kind !== "color" ? `url(${g})` : "none", b = () => {
		let e = Object.values(c).find((e) => e.id === "settings");
		e ? (u("wallpaper"), l(e)) : p(!0);
	}, x = () => n.wallpaper ? /* @__PURE__ */ J("div", {
		className: "absolute inset-0 overflow-hidden bg-[#1e1e2e]",
		children: h.kind === "color" ? /* @__PURE__ */ J("div", {
			className: "absolute inset-0",
			style: {
				backgroundColor: h.colorHex,
				transition: "background-color 120ms ease-out"
			}
		}) : d && h.kind === "live" && h.videoUrl ? /* @__PURE__ */ J("video", {
			src: Ce(m, h.videoUrl),
			autoPlay: !0,
			loop: !0,
			muted: !0,
			playsInline: !0,
			className: "absolute inset-0 w-full h-full object-cover"
		}, h.videoUrl) : /* @__PURE__ */ J("div", {
			className: "absolute inset-0",
			style: {
				backgroundImage: y,
				...$i(o),
				transition: "background-image 120ms ease-out"
			}
		})
	}) : /* @__PURE__ */ J("div", { className: "absolute inset-0 overflow-hidden bg-[#f4f4f5] dark:bg-[#18181b]" }), S = n.contextMenu && (n.wallpaperPicker || n.widgets.allowGalleryEdit || n.iconGrid);
	return /* @__PURE__ */ Y(q, { children: [
		n.contextMenu && S ? /* @__PURE__ */ Y(qi, { children: [/* @__PURE__ */ J(Ji, {
			asChild: !0,
			children: x()
		}), /* @__PURE__ */ J(Yi, { children: /* @__PURE__ */ J(Xi, {
			asChild: !0,
			className: ra,
			children: /* @__PURE__ */ J(D, {
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ Y("div", { children: [
					n.wallpaperPicker && /* @__PURE__ */ J(Zi, {
						className: ta,
						onSelect: b,
						children: t.changeWallpaper
					}),
					n.widgets.allowGalleryEdit && /* @__PURE__ */ J(Zi, {
						className: ta,
						onSelect: () => a(),
						children: t.editWidgets
					}),
					(n.wallpaperPicker || n.widgets.allowGalleryEdit) && n.iconGrid && /* @__PURE__ */ J(Qi, { className: na }),
					n.iconGrid && /* @__PURE__ */ Y(q, { children: [
						/* @__PURE__ */ Y(Zi, {
							className: ta,
							onSelect: () => i(),
							children: [/* @__PURE__ */ J("span", {
								className: "w-3.5 shrink-0 flex items-center justify-center",
								children: r && /* @__PURE__ */ J(Oe, { className: "w-3 h-3 stroke-[2.5]" })
							}), t.useStacks]
						}),
						/* @__PURE__ */ J(Qi, { className: na }),
						/* @__PURE__ */ Y(Zi, {
							className: ta,
							onSelect: () => s(!0),
							children: [/* @__PURE__ */ J("span", { className: "w-3.5 shrink-0" }), t.showViewOptions]
						})
					] })
				] })
			})
		}) })] }) : x(),
		/* @__PURE__ */ J("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			children: e
		}),
		/* @__PURE__ */ J(ea, {}),
		f && /* @__PURE__ */ J("div", {
			className: "fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto",
			children: /* @__PURE__ */ Y("div", {
				className: "w-full max-w-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-zinc-900 dark:text-white transition-colors",
				children: [/* @__PURE__ */ Y("div", {
					className: "px-4 py-3 border-b border-black/10 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80",
					children: [/* @__PURE__ */ J("h3", {
						className: "font-semibold text-sm text-zinc-900 dark:text-white",
						children: t.changeWallpaper
					}), /* @__PURE__ */ J("button", {
						onClick: () => p(!1),
						className: "p-1 rounded-lg hover:bg-black/5 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors",
						children: /* @__PURE__ */ J(B, { className: "w-4 h-4" })
					})]
				}), /* @__PURE__ */ J("div", {
					className: "p-4 overflow-y-auto flex-1 bg-white dark:bg-zinc-900",
					children: /* @__PURE__ */ J(we, { variant: "horizontal" })
				})]
			})
		})
	] });
}
//#endregion
//#region src/components/desktop/EditContextMenu.tsx
var aa = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", oa = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", sa = "min-w-[180px] outline-none z-[99999]";
function ca(e) {
	if (!(e instanceof HTMLElement)) return null;
	let t = e instanceof HTMLImageElement, n = e instanceof HTMLInputElement && e.type !== "checkbox" && e.type !== "radio" && e.type !== "button" && e.type !== "submit" || e instanceof HTMLTextAreaElement, r = !e.hasAttribute("disabled") && !e.readOnly && (n || e.isContentEditable), i = ((window.getSelection?.())?.toString() ?? "").length > 0, a = r, o = r, s = r && i, c = i, l = r, u = r || t || i || e.isContentEditable;
	return !r && !t && !i ? null : {
		target: e,
		flags: {
			isEditable: r,
			isImage: t,
			hasSelection: i,
			canUndo: a,
			canRedo: o,
			canCut: s,
			canCopy: c,
			canPaste: l,
			canSelectAll: u,
			imageSrc: t ? e.currentSrc || e.src : null
		}
	};
}
async function la(e) {
	let t;
	try {
		t = await navigator.clipboard.readText();
	} catch {
		document.execCommand("paste");
		return;
	}
	if (t) if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		let n = e.selectionStart ?? e.value.length, r = e.selectionEnd ?? e.value.length;
		e.setRangeText(t, n, r, "end"), e.dispatchEvent(new Event("input", { bubbles: !0 }));
	} else e instanceof HTMLElement && e.isContentEditable && (e.focus(), document.execCommand("insertText", !1, t));
}
function ua(e, t) {
	if (e === "selectAll" && t instanceof HTMLElement && !(t instanceof HTMLInputElement) && !(t instanceof HTMLTextAreaElement)) {
		let e = window.getSelection(), n = document.createRange();
		n.selectNodeContents(t), e?.removeAllRanges(), e?.addRange(n);
		return;
	}
	document.execCommand(e);
}
async function da(e) {
	let t = document.createElement("a");
	t.href = e, t.download = e.split("/").pop()?.split("?")[0] || "image", document.body.appendChild(t), t.click(), t.remove();
}
function fa(e, t, n) {
	let r = [];
	if (e.isImage && e.imageSrc) {
		let t = e.imageSrc;
		r.push({
			key: "saveImage",
			label: n.saveImage,
			onSelect: () => void da(t)
		}), r.push({
			key: "sep-save-image",
			separator: !0
		});
	}
	return e.isEditable && (r.push({
		key: "undo",
		label: n.menuUndo,
		disabled: !e.canUndo,
		onSelect: () => ua("undo", t)
	}), r.push({
		key: "redo",
		label: n.menuRedo,
		disabled: !e.canRedo,
		onSelect: () => ua("redo", t)
	}), r.push({
		key: "sep-undo-redo",
		separator: !0
	}), r.push({
		key: "cut",
		label: n.menuCut,
		disabled: !e.canCut,
		onSelect: () => ua("cut", t)
	})), r.push({
		key: "copy",
		label: n.menuCopy,
		disabled: !e.canCopy,
		onSelect: () => ua("copy", t)
	}), e.isEditable && r.push({
		key: "paste",
		label: n.menuPaste,
		disabled: !e.canPaste,
		onSelect: () => void la(t)
	}), r.push({
		key: "sep-select-all",
		separator: !0
	}), r.push({
		key: "selectAll",
		label: n.menuSelectAll,
		disabled: !e.canSelectAll,
		onSelect: () => ua("selectAll", t)
	}), r;
}
function pa({ children: e, resolveItems: t }) {
	let { t: n } = V(), [r, i] = K(null), a = G(null), o = G(null);
	return W(() => {
		if (!r) return;
		let e = (e) => {
			o.current?.contains(e.target) || i(null);
		};
		return document.addEventListener("pointerdown", e, { capture: !0 }), () => document.removeEventListener("pointerdown", e, { capture: !0 });
	}, [r]), /* @__PURE__ */ Y(qi, {
		modal: !1,
		onOpenChange: (e) => {
			e || i(null);
		},
		children: [/* @__PURE__ */ J(Ji, {
			asChild: !0,
			onContextMenu: U((e) => {
				let r = ca(e.target);
				if (!r) {
					e.preventDefault(), i(null);
					return;
				}
				a.current = e.target;
				let o = fa(r.flags, e.target, n), s = t?.(o, {
					target: r.target,
					isEditable: r.flags.isEditable,
					isImage: r.flags.isImage,
					hasSelection: r.flags.hasSelection
				}) ?? o;
				if (s.length === 0) {
					e.preventDefault(), i(null);
					return;
				}
				i(s);
			}, [t, n]),
			children: /* @__PURE__ */ J("div", {
				className: "contents",
				children: e
			})
		}), /* @__PURE__ */ J(Yi, { children: /* @__PURE__ */ J(Xi, {
			asChild: !0,
			className: sa,
			children: r ? /* @__PURE__ */ J(D, {
				ref: o,
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ J("div", { children: r.map((e) => e.separator ? /* @__PURE__ */ J(Qi, { className: oa }, e.key) : /* @__PURE__ */ J(Zi, {
					className: aa,
					disabled: e.disabled,
					onSelect: e.onSelect,
					children: e.label
				}, e.key)) })
			}) : /* @__PURE__ */ J("div", {})
		}) })]
	});
}
//#endregion
//#region src/components/desktop/AppIcon.tsx
var ma = 6, ha = 700;
function ga({ items: e, appId: t, onClose: n }) {
	let r = (e) => {
		n(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return /* @__PURE__ */ J(q, { children: e.map((e) => e.separator ? /* @__PURE__ */ J(Qi, { className: "my-1 h-px bg-black/10 dark:bg-white/10" }, e.key) : /* @__PURE__ */ Y(Zi, {
		disabled: e.disabled,
		onSelect: () => r(e.action),
		className: "flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors",
		children: [e.label, e.shortcut && /* @__PURE__ */ J("span", {
			className: "text-[10px] opacity-50 ml-4",
			children: e.shortcut
		})]
	}, e.key)) });
}
function _a({ items: e, appId: t, anchorX: n, anchorY: r, onClose: i }) {
	let a = Math.min(n, window.innerWidth - 192 - 8), o = (e) => {
		i(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return ot(/* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", {
		className: "fixed inset-0 z-9998",
		onPointerDown: i
	}), /* @__PURE__ */ J("div", {
		className: "fixed z-9999 min-w-48 bg-white/90 dark:bg-[#151821]/95 backdrop-blur-2xl rounded-menu shadow-2xl border border-black/10 dark:border-white/8 p-1 text-xs overflow-hidden",
		style: {
			left: a,
			top: r - 8,
			transform: "translateY(-100%)"
		},
		children: e.map((e) => e.separator ? /* @__PURE__ */ J("div", { className: "my-1 h-px bg-black/10 dark:bg-white/10 mx-2" }, e.key) : /* @__PURE__ */ Y("button", {
			disabled: e.disabled,
			onPointerDown: (t) => {
				t.stopPropagation(), o(e.action);
			},
			className: L("w-full flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none text-left", e.disabled ? "opacity-40" : "hover:bg-blue-500 hover:text-white transition-colors"),
			children: [/* @__PURE__ */ J("span", { children: e.label }), e.shortcut && /* @__PURE__ */ J("span", {
				className: "text-[10px] opacity-50 ml-4",
				children: e.shortcut
			})]
		}, e.key))
	})] }), document.body);
}
function va({ appConfig: e, x: t, y: n, onOpen: r, onDrop: i, onDragStart: a, onDrag: o, isSelected: s = !1, onSelect: c, onUpAfterClick: l }) {
	let u = I((e) => e.desktopIconSize), d = I((e) => e.desktopLabelPosition), f = I((e) => e.desktopTextSize), [p, m] = K(!1), { getAppName: h } = V(), g = h(e.id, e.name), [_, v] = K({
		x: t,
		y: n
	}), [y, b] = K(!1), [x, S] = K(null), C = G(null), w = G(0), T = G(null), E = G(null), O = G(!1), k = G({
		x: t,
		y: n,
		onDrop: i,
		onOpen: r,
		onDragStart: a,
		onDrag: o,
		onUpAfterClick: l
	});
	k.current = {
		x: t,
		y: n,
		onDrop: i,
		onOpen: r,
		onDragStart: a,
		onDrag: o,
		onUpAfterClick: l
	};
	let A = p ? _ : {
		x: t,
		y: n
	}, j = () => {
		E.current &&= (clearTimeout(E.current), null);
	};
	return /* @__PURE__ */ Y(q, { children: [x && e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J(_a, {
		items: e.contextMenu,
		appId: e.id,
		anchorX: x.x,
		anchorY: x.y,
		onClose: () => S(null)
	}), /* @__PURE__ */ Y(qi, { children: [/* @__PURE__ */ J(Ji, {
		asChild: !0,
		children: /* @__PURE__ */ J("div", {
			"data-app-icon": "true",
			"data-app-id": e.id,
			className: L("absolute pointer-events-auto", e.disabled && "opacity-40 pointer-events-none"),
			style: {
				left: A.x,
				top: A.y,
				width: d === "bottom" ? u + 56 : u + 104,
				zIndex: p ? 1e3 : 1,
				transition: p ? "none" : "left 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)"
			},
			children: /* @__PURE__ */ Y("button", {
				className: L("flex w-full items-center select-none rounded-lg", d === "bottom" ? "flex-col text-center gap-2 p-2" : "flex-row text-left gap-3 p-2", "focus:outline-none transition-transform duration-75", s ? "bg-white/8 dark:bg-white/5" : "hover:bg-white/15", y && !p && "scale-90 opacity-80", p && "scale-105 opacity-90 drop-shadow-2xl"),
				onPointerDown: (r) => {
					if (r.button !== 0) return;
					r.stopPropagation(), b(!0), O.current = r.pointerType === "touch", c && c(e.id, r), C.current = {
						startMouseX: r.clientX,
						startMouseY: r.clientY,
						startX: t,
						startY: n,
						moved: !1
					}, r.currentTarget.setPointerCapture(r.pointerId), O.current && e.contextMenu && e.contextMenu.length > 0 && (E.current = setTimeout(() => {
						if (E.current = null, C.current && !C.current.moved) {
							try {
								r.target.releasePointerCapture(r.pointerId);
							} catch {}
							b(!1), S({
								x: C.current.startMouseX,
								y: C.current.startMouseY
							}), C.current = null, window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", a);
						}
					}, ha));
					let i = (e) => {
						if (!C.current) return;
						let t = e.clientX - C.current.startMouseX, n = e.clientY - C.current.startMouseY;
						if (!C.current.moved && Math.hypot(t, n) < ma) return;
						j();
						let r = !C.current.moved;
						C.current.moved = !0, m(!0);
						let i = C.current.startX + t, a = C.current.startY + n;
						v({
							x: i,
							y: a
						}), r && k.current.onDragStart && k.current.onDragStart(), k.current.onDrag && k.current.onDrag(i, a);
					}, a = (t) => {
						if (j(), b(!1), window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", a), !C.current) return;
						let n = t.clientX - C.current.startMouseX, r = t.clientY - C.current.startMouseY, o = C.current.moved, s = C.current.startX, c = C.current.startY;
						C.current = null, m(!1), o ? k.current.onDrop(s + n, c + r) : (k.current.onUpAfterClick && k.current.onUpAfterClick(e.id), w.current += 1, w.current === 2 ? (w.current = 0, T.current && clearTimeout(T.current), k.current.onOpen(e)) : T.current = setTimeout(() => {
							w.current = 0;
						}, 350));
					};
					window.addEventListener("pointermove", i), window.addEventListener("pointerup", a);
				},
				"aria-label": `Open ${g}`,
				children: [/* @__PURE__ */ Y("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ J(z, {
						appConfig: e,
						size: u,
						className: "drop-shadow-xl"
					}), e.badge !== void 0 && /* @__PURE__ */ J("span", {
						className: "absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow",
						children: e.badge
					})]
				}), /* @__PURE__ */ J("span", {
					className: L("block w-full text-white font-medium leading-tight px-0 py-0.5 rounded-[4px] border border-transparent", d === "bottom" ? "text-center mx-auto" : "text-left"),
					style: {
						fontSize: `${f}px`,
						maxWidth: d === "bottom" ? `${u + 48}px` : "100px",
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						wordBreak: "break-word",
						backgroundColor: s ? "var(--accent-color)" : void 0,
						borderColor: s ? "rgba(255,255,255,0.1)" : "transparent",
						textShadow: s ? "none" : "0 2px 0px rgba(0,0,0,0.3), 0 0 5px rgba(0,0,0,0.5)"
					},
					children: g
				})]
			})
		})
	}), e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J(Yi, { children: /* @__PURE__ */ J(Xi, {
		asChild: !0,
		className: "min-w-48 outline-none z-[99999]",
		children: /* @__PURE__ */ J(D, {
			variant: "panel",
			className: "p-1 text-xs",
			children: /* @__PURE__ */ J("div", { children: /* @__PURE__ */ J(ga, {
				items: e.contextMenu,
				appId: e.id,
				onClose: () => {}
			}) })
		})
	}) })] })] });
}
function ya({ appList: e, posMap: t, activeDrag: n, maxRows: r, maxCols: i, cellW: a, cellH: o, desktopSortBy: s = "none", useStacks: c = !1 }) {
	let l = e.map((e, n) => {
		let i = t[e.id], l = n, u = !1;
		if (i && s === "none" && !c) {
			let e = Math.max(0, Math.round((i.x - 20) / a)), t = Math.max(0, Math.min(r - 1, Math.round((i.y - 20) / o)));
			l = e * r + t, u = !0;
		}
		return {
			appId: e.id,
			hasStored: u,
			preferredIndex: l,
			originalIndex: n
		};
	}), u = -1;
	if (n) {
		let e = Math.max(0, Math.min(i - 1, Math.round((n.x - 20) / a))), t = Math.max(0, Math.min(r - 1, Math.round((n.y - 20) / o)));
		u = e * r + t;
	}
	let d = l.filter((e) => !n || e.appId !== n.appId);
	d.sort((e, t) => e.preferredIndex === t.preferredIndex ? e.hasStored === t.hasStored ? e.originalIndex - t.originalIndex : e.hasStored ? -1 : 1 : e.preferredIndex - t.preferredIndex);
	let f = /* @__PURE__ */ new Set();
	u !== -1 && f.add(u);
	let p = {};
	for (let e of d) {
		let t = e.preferredIndex;
		for (; f.has(t);) t++;
		f.add(t), p[e.appId] = t;
	}
	n && u !== -1 && (p[n.appId] = u);
	let m = {};
	for (let e in p) {
		let t = p[e], n = Math.floor(t / r), i = t % r;
		m[e] = {
			x: n * a + 20,
			y: i * o + 20
		};
	}
	return {
		coords: m,
		hoveredIndex: u
	};
}
function ba({ onOpenApp: e }) {
	let { config: t } = F(), n = pt(), r = I((e) => e.apps), i = I((e) => e.iconLayout), a = I((e) => e.setIconLayout), o = I((e) => e.desktopIconSize), s = I((e) => e.desktopGridSpacing), c = I((e) => e.desktopLabelPosition), l = I((e) => e.desktopSortBy), u = I((e) => e.useStacks), d = I((e) => e.stackGroupBy), f = G(null), { getAppName: p } = V(), [m, h] = K(null), [g, _] = K(/* @__PURE__ */ new Set()), [v, y] = K(null), [b, x] = K({}), S = G(!1), C = 108, w = 124;
	if (c === "bottom") {
		let e = 44 + (s - 50) * .8, t = 32 + (s - 50) * .8;
		C = o + e, w = o + 28 + t;
	} else {
		let e = 32 + (s - 50) * .8, t = 20 + (s - 50) * .8;
		C = o + 80 + e, w = o + t;
	}
	let T = Math.max(0, n.height - t.layout.desktopInsets.top - t.layout.desktopInsets.bottom), E = Math.max(0, n.width - t.layout.desktopInsets.left - t.layout.desktopInsets.right), D = Math.max(1, Math.floor((T - 40) / w)), O = Math.max(1, Math.floor((E - 40) / C)), k = Object.values(r).filter((e) => !e.disabled), A = u ? d : l, j = [...k];
	A === "name" || A === "shared-by" || A === "date-last-opened" || A === "date-added" || A === "date-modified" || A === "date-created" || A === "tags" ? j.sort((e, t) => {
		let n = p(e.id, e.name), r = p(t.id, t.name);
		return n.localeCompare(r);
	}) : A === "kind" && j.sort((e, t) => {
		let n = e.category ?? "Other", r = t.category ?? "Other", i = n.localeCompare(r);
		return i === 0 ? p(e.id, e.name).localeCompare(p(t.id, t.name)) : i;
	});
	let M = {};
	for (let e of i) M[e.appId] = {
		x: e.x,
		y: e.y
	};
	let N = G(g);
	N.current = g;
	let ee = G(j);
	ee.current = j;
	let P = {}, te = -1;
	if (m && g.has(m.appId)) {
		let e = b[m.appId] || {
			x: m.x,
			y: m.y
		}, t = m.x - e.x, n = m.y - e.y, { coords: r } = ya({
			appList: j.filter((e) => !g.has(e.id)),
			posMap: M,
			activeDrag: null,
			maxRows: D,
			maxCols: O,
			cellW: C,
			cellH: w,
			desktopSortBy: l,
			useStacks: u
		});
		for (let e of j) if (g.has(e.id)) {
			let r = b[e.id] || {
				x: 0,
				y: 0
			};
			P[e.id] = {
				x: r.x + t,
				y: r.y + n
			};
		} else P[e.id] = r[e.id] || {
			x: 20,
			y: 20
		};
		let i = Math.max(0, Math.min(O - 1, Math.round((m.x - 20) / C))), a = Math.max(0, Math.min(D - 1, Math.round((m.y - 20) / w)));
		te = i * D + a;
	} else {
		let e = ya({
			appList: j,
			posMap: M,
			activeDrag: m,
			maxRows: D,
			maxCols: O,
			cellW: C,
			cellH: w,
			desktopSortBy: l,
			useStacks: u
		});
		P = e.coords, te = e.hoveredIndex;
	}
	let ne = G(P);
	ne.current = P;
	let re = G(C);
	re.current = C;
	let ie = G(w);
	ie.current = w, W(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = e.target;
			if (t.closest("[id^=\"window-\"]") || t.closest("[data-windowchrome=\"true\"]") || t.closest("[data-menubar=\"true\"]") || t.closest("[data-dock=\"true\"]") || t.closest("[data-widget=\"true\"]") || t.closest("[data-app-icon=\"true\"]") || t.closest("[data-menu-portal=\"true\"]") || t.closest("[data-radix-popper-content-wrapper]") || !f.current) return;
			let n = f.current.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top, a = e.shiftKey || e.metaKey || e.ctrlKey, o = a ? new Set(N.current) : /* @__PURE__ */ new Set();
			a || _(/* @__PURE__ */ new Set()), y({
				startX: r,
				startY: i,
				currentX: r,
				currentY: i
			}), S.current = !0;
			let s = (e) => {
				if (!S.current || !f.current) return;
				let t = f.current.getBoundingClientRect(), n = e.clientX - t.left, s = e.clientY - t.top;
				y((e) => e ? {
					...e,
					currentX: n,
					currentY: s
				} : null);
				let c = Math.min(r, n), l = Math.min(i, s), u = Math.max(r, n), d = Math.max(i, s), p = new Set(o);
				f.current.querySelectorAll("[data-app-icon=\"true\"]").forEach((e) => {
					let n = e.getAttribute("data-app-id");
					if (!n) return;
					let r = e.getBoundingClientRect(), i = r.left - t.left, o = r.top - t.top, s = r.right - t.left, f = r.bottom - t.top;
					c < s && u > i && l < f && d > o ? p.add(n) : a || p.delete(n);
				}), _(p);
			}, c = () => {
				S.current = !1, y(null), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", c);
			};
			window.addEventListener("pointermove", s), window.addEventListener("pointerup", c);
		};
		return window.addEventListener("pointerdown", e), () => {
			window.removeEventListener("pointerdown", e);
		};
	}, []);
	let ae = (e, t) => {
		t.shiftKey || t.metaKey || t.ctrlKey ? _((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		}) : g.has(e) || _(/* @__PURE__ */ new Set([e]));
	}, oe = (e) => {
		_(/* @__PURE__ */ new Set([e]));
	}, se = (e) => {
		let t = g;
		g.has(e) || (t = /* @__PURE__ */ new Set([e]), _(t));
		let n = {};
		for (let e of t) n[e] = P[e] || {
			x: 0,
			y: 0
		};
		x(n), h({
			appId: e,
			x: P[e]?.x || 0,
			y: P[e]?.y || 0
		});
	}, ce = (e, t, n) => {
		let r = b[e];
		if (!r) {
			h(null);
			return;
		}
		let i = g.has(e) ? g : /* @__PURE__ */ new Set([e]), o = {};
		for (let e of j) {
			let a = M[e.id] || {
				x: 20,
				y: 20
			};
			if (i.has(e.id)) {
				let i = b[e.id] || {
					x: 20,
					y: 20
				}, a = Math.round((i.x - 20) / C), s = Math.round((i.y - 20) / w), c = Math.round((r.x - 20) / C), l = Math.round((r.y - 20) / w), u = Math.round((t - 20) / C), d = Math.round((n - 20) / w), f = u - c, p = d - l, m = Math.max(0, a + f), h = Math.max(0, s + p);
				o[e.id] = {
					x: m * C + 20,
					y: h * w + 20
				};
			} else o[e.id] = { ...a };
		}
		let { coords: s } = ya({
			appList: j,
			posMap: o,
			activeDrag: null,
			maxRows: D,
			maxCols: O,
			cellW: C,
			cellH: w,
			desktopSortBy: l,
			useStacks: u
		}), c = j.map((e) => {
			let t = Math.round((s[e.id].x - 20) / C), n = Math.round((s[e.id].y - 20) / w);
			return {
				appId: e.id,
				x: t * C + 20,
				y: n * w + 20
			};
		});
		a(c), h(null), x({});
	};
	return /* @__PURE__ */ Y("div", {
		ref: f,
		className: "absolute inset-0 pointer-events-none select-none z-10",
		style: {
			top: "var(--desktop-inset-top)",
			right: "var(--desktop-inset-right)",
			bottom: "var(--desktop-inset-bottom)",
			left: "var(--desktop-inset-left)"
		},
		children: [
			v && /* @__PURE__ */ J("div", {
				className: "absolute rounded-sm border border-white/70 bg-white/25 shadow-sm pointer-events-none z-20 backdrop-blur-[1px]",
				style: {
					left: Math.min(v.startX, v.currentX),
					top: Math.min(v.startY, v.currentY),
					width: Math.abs(v.startX - v.currentX),
					height: Math.abs(v.startY - v.currentY)
				}
			}),
			m && (() => {
				let e = g.has(m.appId), t = e ? Array.from(g) : [m.appId], n = b[m.appId] || {
					x: m.x,
					y: m.y
				}, i = Math.round((n.x - 20) / C), a = Math.round((n.y - 20) / w), s = Math.floor(te / D), l = te % D, u = c === "bottom" ? o + 24 : o + 104, d = c === "bottom" ? o + 40 : o + 24;
				return /* @__PURE__ */ J(q, { children: t.map((t) => {
					let n = r[t];
					if (!n) return null;
					let c = b[t] || {
						x: 0,
						y: 0
					}, f = Math.round((c.x - 20) / C), m = Math.round((c.y - 20) / w), h = e ? f - i : 0, g = e ? m - a : 0, _ = s + h, v = l + g;
					if (_ < 0 || _ >= O || v < 0 || v >= D) return null;
					let y = _ * C + 20, x = v * w + 20, S = p(n.id, n.name);
					return /* @__PURE__ */ Y("div", {
						className: "absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5 z-30",
						style: {
							left: y + (C - u) / 2,
							top: x + (w - d) / 2,
							width: u,
							height: d,
							transition: "left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)"
						},
						children: [/* @__PURE__ */ J("div", {
							className: "opacity-20 scale-75 select-none pointer-events-none",
							children: /* @__PURE__ */ J(z, {
								appConfig: n,
								size: o
							})
						}), /* @__PURE__ */ J("span", {
							className: "block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate opacity-20 mt-2 select-none pointer-events-none",
							style: { textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)" },
							children: S
						})]
					}, `ghost-${t}`);
				}) });
			})(),
			j.map((t) => {
				let { x: n, y: r } = P[t.id] || {
					x: 0,
					y: 0
				};
				return /* @__PURE__ */ J(va, {
					appConfig: t,
					x: n,
					y: r,
					isSelected: g.has(t.id),
					onOpen: e,
					onSelect: ae,
					onUpAfterClick: oe,
					onDragStart: () => se(t.id),
					onDrag: (e, n) => h({
						appId: t.id,
						x: e,
						y: n
					}),
					onDrop: (e, n) => ce(t.id, e, n)
				}, t.id);
			})
		]
	});
}
//#endregion
//#region src/types/widget.ts
var xa = {
	small: {
		w: 170,
		h: 170
	},
	medium: {
		w: 360,
		h: 170
	},
	large: {
		w: 360,
		h: 360
	}
}, Sa = [{
	id: "weather",
	appId: "__built-in__",
	name: "Weather",
	description: "Current weather conditions",
	sizes: ["small", "medium"],
	componentKey: "WeatherWidget"
}], Ca = [...de.flatMap((e) => (e.widgets ?? []).map((t) => ({
	...t,
	appId: e.id
}))), ...Sa];
[...new Set(Ca.map((e) => e.appId))];
function wa(e) {
	return Ca.find((t) => t.id === e);
}
//#endregion
//#region src/components/widgets/WidgetRenderer.tsx
var Ta = {
	ClockWidget: tt(() => import("./ClockWidget-CdVR4PUt.js").then((e) => ({ default: e.ClockWidget }))),
	ClockDarkWidget: tt(() => import("./ClockWidget-CdVR4PUt.js").then((e) => ({ default: e.ClockDarkWidget }))),
	ClockWorldWidget: tt(() => import("./ClockWidget-CdVR4PUt.js").then((e) => ({ default: e.ClockWorldWidget }))),
	ClockDigitalWidget: tt(() => import("./ClockWidget-CdVR4PUt.js").then((e) => ({ default: e.ClockDigitalWidget }))),
	ClockFlipWidget: tt(() => import("./ClockWidget-CdVR4PUt.js").then((e) => ({ default: e.ClockFlipWidget }))),
	CalendarWidget: tt(() => import("./CalendarWidget-5RcsEhGl.js").then((e) => ({ default: e.CalendarWidget }))),
	CalendarTodayWidget: tt(() => import("./CalendarWidget-5RcsEhGl.js").then((e) => ({ default: e.CalendarTodayWidget }))),
	WeatherWidget: tt(() => import("./WeatherWidget-D4EQ_pKf.js").then((e) => ({ default: e.WeatherWidget }))),
	NotesWidget: tt(() => import("./NotesWidget-CWxNXfe-.js").then((e) => ({ default: e.NotesWidget })))
};
function Ea({ componentKey: e, size: t }) {
	let n = Ta[e];
	return n ? /* @__PURE__ */ J(et, {
		fallback: /* @__PURE__ */ J("div", { className: "w-full h-full rounded-[20px] bg-white/5 animate-pulse" }),
		children: /* @__PURE__ */ J(n, { size: t })
	}) : /* @__PURE__ */ J("div", {
		className: "w-full h-full flex items-center justify-center text-white/30 text-xs rounded-[20px] bg-white/5",
		children: "Unknown widget"
	});
}
//#endregion
//#region src/components/widgets/WidgetCard.tsx
var Da = 4;
function Oa({ instance: e }) {
	let t = I((e) => e.moveWidget), n = I((e) => e.removeWidget), r = I((e) => e.isEditingWidgets), i = wa(e.definitionId), { w: a, h: o } = xa[e.size], [s, c] = K({
		x: e.x,
		y: e.y
	}), l = G(null);
	return i ? /* @__PURE__ */ Y(y.div, {
		"data-widget": "true",
		className: "absolute",
		style: {
			left: s.x,
			top: s.y,
			width: a,
			height: o,
			zIndex: r ? 1001 : 5
		},
		animate: r ? { rotate: [
			-.8,
			.8,
			-.8
		] } : { rotate: 0 },
		transition: r ? {
			repeat: Infinity,
			duration: .25,
			ease: "easeInOut"
		} : { duration: .15 },
		onPointerDown: (n) => {
			if (n.button !== 0 || n.target.closest("[data-widget-remove]")) return;
			n.stopPropagation(), n.preventDefault(), l.current = {
				startMouseX: n.clientX,
				startMouseY: n.clientY,
				startX: s.x,
				startY: s.y,
				moved: !1
			}, n.currentTarget.setPointerCapture(n.pointerId);
			let r = (e) => {
				if (!l.current) return;
				let t = e.clientX - l.current.startMouseX, n = e.clientY - l.current.startMouseY;
				!l.current.moved && Math.hypot(t, n) < Da || (l.current.moved = !0, c({
					x: l.current.startX + t,
					y: l.current.startY + n
				}));
			}, i = (n) => {
				if (window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", i), !l.current) return;
				let a = n.clientX - l.current.startMouseX, o = n.clientY - l.current.startMouseY, s = l.current.startX + a, u = l.current.startY + o;
				l.current = null, c({
					x: s,
					y: u
				}), t(e.instanceId, s, u);
			};
			window.addEventListener("pointermove", r), window.addEventListener("pointerup", i);
		},
		children: [r && /* @__PURE__ */ J("button", {
			"data-widget-remove": !0,
			onClick: () => n(e.instanceId),
			className: "absolute -top-2 -left-2 z-10 w-5 h-5 bg-black/80 border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors",
			"aria-label": "Remove widget",
			children: /* @__PURE__ */ J(B, { className: "w-3 h-3 text-white" })
		}), /* @__PURE__ */ J("div", {
			className: "w-full h-full cursor-grab active:cursor-grabbing",
			children: /* @__PURE__ */ J(D, {
				variant: "widget",
				className: "w-full h-full",
				children: /* @__PURE__ */ J(Ea, {
					componentKey: i.componentKey,
					size: e.size
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/widgets/WidgetLayer.tsx
function ka() {
	let e = I((e) => e.widgetInstances);
	return /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: I((e) => e.isEditingWidgets) ? 1001 : 2 },
		children: /* @__PURE__ */ J(v, { children: e.map((e) => /* @__PURE__ */ J(y.div, {
			className: "pointer-events-auto",
			initial: {
				scale: .7,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			exit: {
				scale: .7,
				opacity: 0
			},
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 30
			},
			style: {
				position: "absolute",
				left: 0,
				top: 0
			},
			children: /* @__PURE__ */ J(Oa, { instance: e })
		}, e.instanceId)) })
	});
}
//#endregion
//#region src/components/widgets/WidgetGalleryPanel.tsx
function Aa({ ghost: e }) {
	let { w: t, h: n } = xa[e.size];
	return ot(/* @__PURE__ */ J("div", {
		className: "fixed pointer-events-none z-[99999] rounded-[20px] overflow-hidden opacity-80",
		style: {
			left: e.x - t / 2,
			top: e.y - n / 2,
			width: t,
			height: n
		},
		children: /* @__PURE__ */ J(D, {
			variant: "widget",
			className: "w-full h-full",
			children: /* @__PURE__ */ J(Ea, {
				componentKey: e.def.componentKey,
				size: e.size
			})
		})
	}), document.body);
}
function ja({ def: e, size: t, onDragStart: n, cardIndex: r }) {
	let { w: i, h: a } = xa[t], o = Math.min(140 / i, 110 / a), s = Math.round(i * o), c = Math.round(a * o), [l, u] = K(!1);
	return W(() => {
		let e = setTimeout(() => {
			u(!0);
		}, 150 + r * 50);
		return () => clearTimeout(e);
	}, [r]), /* @__PURE__ */ Y("div", {
		className: "flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing select-none",
		onPointerDown: (r) => {
			l && (r.preventDefault(), n(e, t, r.clientX, r.clientY));
		},
		children: [/* @__PURE__ */ J("div", {
			className: "rounded-[14px] overflow-hidden bg-white/5 border border-white/10",
			style: {
				width: s,
				height: c
			},
			children: /* @__PURE__ */ J("div", {
				style: {
					width: i,
					height: a,
					transform: `scale(${o})`,
					transformOrigin: "top left",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ J(D, {
					variant: "widget",
					className: "w-full h-full",
					children: l ? /* @__PURE__ */ J(Ea, {
						componentKey: e.componentKey,
						size: t
					}) : /* @__PURE__ */ J("div", { className: "w-full h-full bg-black/5 dark:bg-white/5 animate-pulse" })
				})
			})
		}), /* @__PURE__ */ J("p", {
			className: "text-black/60 dark:text-white/70 text-[10px] text-center leading-tight max-w-[120px] truncate",
			children: t
		})]
	});
}
function Ma({ appId: e, selected: t, onClick: n }) {
	let r = I((e) => e.apps), { t: i, getAppName: a } = V(), o = e === "__built-in__" ? null : r[e], s = o ? a(o.id, o.name) : i.builtIn;
	return /* @__PURE__ */ Y("button", {
		onClick: n,
		className: L("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", t ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
		children: [o ? /* @__PURE__ */ J(z, {
			appConfig: o,
			size: 20,
			className: "rounded-md shrink-0"
		}) : /* @__PURE__ */ J("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" }), /* @__PURE__ */ J("span", {
			className: "text-[13px] truncate",
			children: s
		})]
	});
}
function Na() {
	let e = I((e) => e.closeWidgetGallery), t = I((e) => e.addWidget), n = I((e) => e.apps), { t: r, getAppName: i, getWidgetName: a, getWidgetDescription: o } = V(), [s, c] = K(""), [l, u] = K("__all__"), [d, f] = K(null), [p, m] = K(!1), h = G(null), g = G(null);
	W(() => {
		let e = setTimeout(() => {
			m(!0);
		}, 200);
		return () => clearTimeout(e);
	}, []);
	let _ = [...new Set(Ca.map((e) => e.appId))], b = Ca.filter((e) => {
		let t = l === "__all__" || e.appId === l, r = s.toLowerCase(), c = !r || a(e.id, e.name).toLowerCase().includes(r) || o(e.id, e.description ?? "").toLowerCase().includes(r) || i(e.appId, n[e.appId]?.name ?? "").toLowerCase().includes(r);
		return t && c;
	}), x = {};
	for (let e of b) x[e.appId] || (x[e.appId] = []), x[e.appId].push(e);
	let S = U((e, n, r, i) => {
		g.current = {
			def: e,
			size: n
		}, f({
			def: e,
			size: n,
			x: r,
			y: i
		});
		let a = (e) => {
			f((t) => t ? {
				...t,
				x: e.clientX,
				y: e.clientY
			} : null);
		}, o = (e) => {
			window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o);
			let n = h.current;
			if ((!n || !n.contains(e.target)) && g.current) {
				let { def: n, size: r } = g.current, { w: i, h: a } = xa[r];
				t(n, r, e.clientX - i / 2, e.clientY - a / 2);
			}
			g.current = null, f(null);
		};
		window.addEventListener("pointermove", a), window.addEventListener("pointerup", o);
	}, [t]);
	W(() => {
		let t = (t) => {
			t.key === "Escape" && e();
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [e]);
	let C = d !== null;
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(y.div, {
			className: "fixed inset-0 z-[1000] bg-black/20 dark:bg-black/50",
			initial: { opacity: 0 },
			animate: { opacity: +!C },
			exit: { opacity: 0 },
			onClick: e
		}),
		/* @__PURE__ */ J(y.div, {
			ref: h,
			className: "fixed bottom-0 left-1/2 z-[1002] flex flex-col w-full max-w-[960px]",
			style: { height: "58vh" },
			initial: {
				y: "100%",
				x: "-50%"
			},
			animate: {
				y: C ? "110%" : 0,
				x: "-50%"
			},
			exit: {
				y: "100%",
				x: "-50%"
			},
			transition: {
				type: "spring",
				stiffness: 340,
				damping: 36
			},
			children: /* @__PURE__ */ J(D, {
				variant: "panel",
				borderRadius: "20px 20px 0 0",
				className: "flex-1 mx-3 mb-0 flex flex-col shadow-2xl",
				children: /* @__PURE__ */ Y("div", {
					className: "flex flex-col w-full h-full",
					children: [/* @__PURE__ */ Y("div", {
						className: "flex flex-1 overflow-hidden",
						children: [/* @__PURE__ */ Y("div", {
							className: "w-52 shrink-0 border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col p-3 gap-1 overflow-y-auto",
							children: [
								/* @__PURE__ */ Y("div", {
									className: "relative mb-2",
									children: [
										/* @__PURE__ */ J(Xe, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30" }),
										/* @__PURE__ */ J("input", {
											type: "text",
											placeholder: r.searchWidgets,
											value: s,
											onChange: (e) => c(e.target.value),
											className: "w-full bg-black/5 dark:bg-white/8 text-black dark:text-white text-[13px] placeholder-black/30 dark:placeholder-white/30 rounded-[8px] pl-8 pr-3 py-1.5 outline-none border border-black/10 dark:border-white/10 focus:border-black/20 dark:focus:border-white/20 transition-colors"
										}),
										s && /* @__PURE__ */ J("button", {
											onClick: () => c(""),
											className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60",
											children: /* @__PURE__ */ J(B, { className: "w-3 h-3" })
										})
									]
								}),
								/* @__PURE__ */ Y("button", {
									onClick: () => u("__all__"),
									className: L("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", l === "__all__" ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
									children: [/* @__PURE__ */ J("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" }), /* @__PURE__ */ J("span", {
										className: "text-[13px]",
										children: r.allWidgets
									})]
								}),
								_.map((e) => /* @__PURE__ */ J(Ma, {
									appId: e,
									selected: l === e,
									onClick: () => u(e)
								}, e))
							]
						}), /* @__PURE__ */ J("div", {
							className: "flex-1 overflow-y-auto p-4",
							children: p ? Object.keys(x).length === 0 ? /* @__PURE__ */ J("div", {
								className: "flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm",
								children: r.noWidgetsFound
							}) : (() => {
								let e = 0;
								return Object.entries(x).map(([t, o]) => {
									let s = t === "__built-in__" ? r.builtIn : i(t, n[t]?.name ?? t);
									return /* @__PURE__ */ Y("div", {
										className: "mb-8",
										children: [/* @__PURE__ */ Y("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ J("p", {
												className: "text-black dark:text-white text-[13px] font-semibold",
												children: s
											}), t !== "__built-in__" && /* @__PURE__ */ Y("p", {
												className: "text-black/30 dark:text-white/30 text-[11px]",
												children: [
													r.fromApp,
													" ",
													s
												]
											})]
										}), o.map((t) => /* @__PURE__ */ Y("div", {
											className: "mb-4",
											children: [/* @__PURE__ */ J("p", {
												className: "text-black/50 dark:text-white/50 text-[11px] mb-2 font-medium",
												children: a(t.id, t.name)
											}), /* @__PURE__ */ J("div", {
												className: "flex flex-wrap gap-4",
												children: t.sizes.map((n) => {
													let r = e++;
													return /* @__PURE__ */ J(ja, {
														def: t,
														size: n,
														onDragStart: S,
														cardIndex: r
													}, n);
												})
											})]
										}, t.id))]
									}, t);
								});
							})() : /* @__PURE__ */ J("div", {
								className: "flex flex-col gap-6",
								children: [1, 2].map((e) => /* @__PURE__ */ Y("div", {
									className: "mb-4 animate-pulse",
									children: [/* @__PURE__ */ J("div", { className: "h-4 w-24 bg-black/10 dark:bg-white/10 rounded mb-4" }), /* @__PURE__ */ Y("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ J("div", { className: "h-[110px] w-[110px] bg-black/10 dark:bg-white/10 rounded-[14px]" }), /* @__PURE__ */ J("div", { className: "h-[110px] w-[140px] bg-black/10 dark:bg-white/10 rounded-[14px]" })]
									})]
								}, e))
							})
						})]
					}), /* @__PURE__ */ Y("div", {
						className: "flex items-center justify-between px-5 py-3 border-t border-black/[0.06] dark:border-white/[0.06] shrink-0",
						children: [/* @__PURE__ */ J("p", {
							className: "text-black/40 dark:text-white/40 text-[12px]",
							children: r.dragWidgetHint
						}), /* @__PURE__ */ J("button", {
							onClick: e,
							className: "px-5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold rounded-[8px] transition-colors",
							children: r.done
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ J(v, { children: d && /* @__PURE__ */ J(Aa, { ghost: d }) })
	] });
}
//#endregion
//#region src/components/macOS/Spotlight.tsx
function Pa({ open: e, onClose: t }) {
	let [n, r] = K(""), [i, a] = K(0), o = G(null), s = I((e) => e.apps), c = I((e) => e.launchApp), { t: l, getAppName: u } = V();
	W(() => {
		e && (nt(() => {
			r(""), a(0);
		}), setTimeout(() => o.current?.focus(), 50));
	}, [e]);
	let d = U((e) => {
		c(e), t();
	}, [c, t]), f = Object.values(s).filter((e) => !e.disabled), p = n.trim() ? f.filter((e) => u(e.id, e.name).toLowerCase().includes(n.toLowerCase())).map((e) => ({
		type: "app",
		label: u(e.id, e.name),
		subtitle: e.category ?? "Application",
		app: e
	})) : f.slice(0, 8).map((e) => ({
		type: "app",
		label: u(e.id, e.name),
		subtitle: "Application",
		app: e
	}));
	return /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9990] bg-black/30 backdrop-blur-sm",
		onClick: t
	}), /* @__PURE__ */ J(y.div, {
		initial: {
			opacity: 0,
			scale: .95,
			y: -20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .93,
			y: -10
		},
		transition: {
			type: "spring",
			stiffness: 600,
			damping: 40
		},
		className: "fixed z-[9991] left-1/2 top-[18%] -translate-x-1/2 w-[640px] max-w-[95vw]",
		children: /* @__PURE__ */ Y(D, {
			variant: "window",
			className: "overflow-hidden shadow-2xl",
			children: [
				/* @__PURE__ */ Y("div", {
					className: "flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ J(Xe, { className: "w-5 h-5 text-black/40 dark:text-white/40 shrink-0" }),
						/* @__PURE__ */ J("input", {
							ref: o,
							value: n,
							onChange: (e) => {
								r(e.target.value), a(0);
							},
							onKeyDown: (e) => {
								if (e.key === "Escape") {
									t();
									return;
								}
								e.key === "ArrowDown" && (e.preventDefault(), a((e) => Math.min(e + 1, p.length - 1))), e.key === "ArrowUp" && (e.preventDefault(), a((e) => Math.max(e - 1, 0))), e.key === "Enter" && p[i]?.app && d(p[i].app);
							},
							placeholder: l.search,
							className: "flex-1 bg-transparent text-[17px] font-light outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
						}),
						n && /* @__PURE__ */ J("button", {
							onClick: () => r(""),
							className: "p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10",
							children: /* @__PURE__ */ J(B, { className: "w-3.5 h-3.5" })
						})
					]
				}),
				p.length > 0 && /* @__PURE__ */ Y("div", {
					className: "max-h-80 overflow-y-auto py-1",
					children: [p.length > 0 && /* @__PURE__ */ J("p", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/30 px-4 pt-2 pb-1",
						children: n ? l.search : l.applications
					}), p.map((e, t) => /* @__PURE__ */ Y("button", {
						onClick: () => e.app && d(e.app),
						onMouseEnter: () => a(t),
						className: L("flex items-center gap-3 w-full px-4 py-2 text-left transition-colors", t === i ? "bg-blue-500 text-white" : "hover:bg-black/5 dark:hover:bg-white/5"),
						children: [e.app && /* @__PURE__ */ J(z, {
							appConfig: e.app,
							size: 32
						}), /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", {
							className: L("text-[13px] font-medium", t === i ? "text-white" : ""),
							children: e.label
						}), e.subtitle && /* @__PURE__ */ J("p", {
							className: L("text-[11px]", t === i ? "text-white/70" : "text-black/40 dark:text-white/40"),
							children: e.subtitle
						})] })]
					}, e.label + t))]
				}),
				n && p.length === 0 && /* @__PURE__ */ Y("div", {
					className: "py-8 text-center text-black/40 dark:text-white/40 text-sm",
					children: [
						"No results for “",
						n,
						"”"
					]
				})
			]
		})
	})] }) });
}
//#endregion
//#region src/components/macOS/AppSwitcher.tsx
function Fa({ open: e, onClose: t }) {
	let n = I((e) => e.apps), r = I((e) => e.runningAppIds), i = I((e) => e.launchApp), a = I((e) => e.dockAppIds), { getAppName: o } = V(), s = Array.from(/* @__PURE__ */ new Set([...r, ...a])).map((e) => n[e]).filter(Boolean), [c, l] = K(0);
	return W(() => {
		if (!e) return;
		nt(() => {
			l(0);
		});
		let n = (e) => {
			if (!e.metaKey && !e.ctrlKey) {
				t();
				return;
			}
			e.key === "Tab" && (e.preventDefault(), l((t) => e.shiftKey ? (t - 1 + s.length) % s.length : (t + 1) % s.length)), e.key === "Escape" && t();
		}, r = (e) => {
			if (e.key === "Meta" || e.key === "Control") {
				let e = s[c];
				e && i(e), t();
			}
		};
		return window.addEventListener("keydown", n), window.addEventListener("keyup", r), () => {
			window.removeEventListener("keydown", n), window.removeEventListener("keyup", r);
		};
	}, [
		e,
		s.length,
		c
	]), /* @__PURE__ */ J(v, { children: e && /* @__PURE__ */ J(y.div, {
		initial: {
			opacity: 0,
			scale: .9
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .9,
			transition: { duration: .12 }
		},
		transition: {
			type: "spring",
			stiffness: 600,
			damping: 40
		},
		className: "fixed z-[9995] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
		children: /* @__PURE__ */ Y(D, {
			variant: "panel",
			className: "px-4 py-3",
			children: [/* @__PURE__ */ J("div", {
				className: "flex items-end gap-3",
				children: s.map((e, n) => /* @__PURE__ */ Y("button", {
					onClick: () => {
						i(e), t();
					},
					onMouseEnter: () => l(n),
					className: "flex flex-col items-center gap-2 p-2 rounded-xl transition-colors",
					children: [/* @__PURE__ */ J(y.div, {
						animate: { scale: n === c ? 1.15 : 1 },
						transition: {
							type: "spring",
							stiffness: 600,
							damping: 30
						},
						children: /* @__PURE__ */ J(z, {
							appConfig: e,
							size: 52
						})
					}), /* @__PURE__ */ J("span", {
						className: L("text-[11px] font-medium truncate max-w-[60px] text-center", n === c ? "text-white" : "text-white/70"),
						children: o(e.id, e.name)
					})]
				}, e.id))
			}), s[c] && /* @__PURE__ */ J("p", {
				className: "text-center text-white/80 text-xs mt-1",
				children: o(s[c].id, s[c].name)
			})]
		})
	}) });
}
//#endregion
//#region src/components/notifications/NotificationBanner.tsx
function Ia({ notification: e, onDismiss: t }) {
	let n = I((e) => e.launchApp), r = I((e) => e.apps), { osTheme: i } = F(), a = i === "windows";
	return W(() => {
		let e = setTimeout(t, 5e3);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ Y(y.div, {
		layout: !0,
		initial: {
			opacity: 0,
			y: a ? 20 : -20,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: a ? 20 : -20,
			scale: .93,
			transition: { duration: .2 }
		},
		transition: {
			type: "spring",
			stiffness: 500,
			damping: 40
		},
		className: L("flex items-start gap-3 w-80 p-3 cursor-pointer select-none", "bg-white/88 dark:bg-[#151821]/90 backdrop-blur-2xl", "border border-black/10 dark:border-white/8", "shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]", a ? "rounded-lg" : "rounded-2xl"),
		onClick: () => {
			let i = r[e.appId];
			i && n(i), t();
		},
		children: [
			/* @__PURE__ */ J("div", {
				className: "w-9 h-9 rounded-[20%] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-sm",
				children: /* @__PURE__ */ J("span", {
					className: "text-white text-xs font-bold",
					children: e.appName.charAt(0)
				})
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ J("p", {
						className: "text-[11px] font-semibold text-black/50 dark:text-white/40 uppercase tracking-wide leading-none mb-0.5",
						children: e.appName
					}),
					/* @__PURE__ */ J("p", {
						className: "text-[13px] font-semibold text-black dark:text-white leading-snug truncate",
						children: e.title
					}),
					e.body && /* @__PURE__ */ J("p", {
						className: "text-[12px] text-black/60 dark:text-white/50 leading-snug line-clamp-2 mt-0.5",
						children: e.body
					})
				]
			}),
			/* @__PURE__ */ J("button", {
				onClick: (e) => {
					e.stopPropagation(), t();
				},
				className: "shrink-0 w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors",
				children: /* @__PURE__ */ J(B, { className: "w-3 h-3" })
			})
		]
	});
}
function La() {
	let e = I((e) => e.notifications), t = I((e) => e.dismissNotification), { osTheme: n } = F(), r = e.filter((e) => !e.read).slice(0, 3), i = U((e) => {
		t(e);
	}, [t]);
	return /* @__PURE__ */ J("div", {
		className: L("fixed z-[9999] flex flex-col gap-2 pointer-events-none", n === "windows" ? "bottom-14 right-4" : n === "iphone" || n === "android" ? "top-12 inset-x-4" : "top-8 right-4"),
		children: /* @__PURE__ */ J(v, {
			mode: "popLayout",
			children: r.map((e) => /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(Ia, {
					notification: e,
					onDismiss: () => i(e.id)
				})
			}, e.id))
		})
	});
}
//#endregion
//#region src/hooks/useKeyboardShortcuts.ts
function Ra({ onSpotlight: e, onAppSwitcher: t } = {}) {
	let n = I((e) => e.closeWindow), r = I((e) => e.minimizeWindow), i = I((e) => e.focusedWindowId), a = I((e) => e.osTheme);
	W(() => {
		let o = (o) => {
			if (o.metaKey || o.ctrlKey) switch (o.key) {
				case "w":
					i && (o.preventDefault(), n(i));
					break;
				case "m":
					i && (o.preventDefault(), r(i));
					break;
				case " ":
					(a === "macos" || a === "ipad") && (o.preventDefault(), e?.());
					break;
				case "Tab":
					o.preventDefault(), t?.();
					break;
			}
		};
		return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
	}, [
		i,
		a,
		n,
		r,
		e,
		t
	]);
}
//#endregion
//#region src/hooks/useWallpaperCycle.ts
var za = {
	"5m": 5 * 6e4,
	"10m": 10 * 6e4,
	"30m": 30 * 6e4,
	"1h": 60 * 6e4,
	"2h": 120 * 6e4,
	"5h": 300 * 6e4,
	"1d": 1440 * 6e4
};
function Ba() {
	let e = I((e) => e.wallpaperCycle), t = I((e) => e.customWallpapers), n = I((e) => e.wallpaperId), r = I((e) => e.setWallpaper), i = De(), a = G(0);
	W(() => {
		if (!e.enabled) return;
		let o = e.group === "custom" ? t : i.pictures;
		if (o.length === 0) return;
		let s = setInterval(() => {
			if (e.randomOrder) {
				let e = o[Math.floor(Math.random() * o.length)];
				if (o.length > 1) {
					let t = 0;
					for (; e.id === n && t < 10;) e = o[Math.floor(Math.random() * o.length)], t += 1;
				}
				r(e.id);
			} else a.current = (a.current + 1) % o.length, r(o[a.current].id);
		}, za[e.interval]);
		return () => clearInterval(s);
	}, [
		e.enabled,
		e.interval,
		e.randomOrder,
		e.group,
		t,
		i.pictures,
		r
	]);
}
//#endregion
//#region src/lib/theme-layout.ts
var $ = (e) => `${e}px`;
function Va(e) {
	let { desktopInsets: t, chrome: n, window: r } = e.layout;
	return {
		"--dock-height": $(n.dockHeight),
		"--dock-offset-bottom": $(n.dockOffsetBottom),
		"--menubar-height": $(n.menuBarHeight),
		"--taskbar-height": $(n.taskbarHeight),
		"--navbar-height": $(n.navBarHeight),
		"--statusbar-height": $(n.statusBarHeight),
		"--window-chrome-height": $(n.windowChromeHeight),
		"--desktop-inset-top": $(t.top),
		"--desktop-inset-right": $(t.right),
		"--desktop-inset-bottom": $(t.bottom),
		"--desktop-inset-left": $(t.left),
		"--window-maximize-top-inset": $(r.maximizeInsets.top),
		"--window-maximize-bottom-inset": $(r.maximizeInsets.bottom),
		"--window-drag-top-inset": $(r.dragTopInset),
		"--window-min-title-visible-height": $(r.minTitleVisibleHeight)
	};
}
//#endregion
//#region src/utils/simple-mode-resolver.ts
var Ha = [
	"macos",
	"windows",
	"ipad",
	"iphone",
	"android"
];
function Ua(e, t = "macos") {
	if (!e) return {
		isSimpleModeActive: !1,
		wallpaper: !0,
		allowLiveWallpapers: !0,
		contextMenu: !0,
		wallpaperPicker: !0,
		iconGrid: !0,
		menuBar: {
			enabled: !0,
			clock: !0,
			controlCenter: !0,
			spotlight: !0,
			appleMenu: !0,
			appNameMenu: !0,
			appSwitcher: !0,
			extras: !0
		},
		widgets: {
			showWidgets: !0,
			allowGalleryEdit: !0
		},
		dock: !0,
		defaultApps: !0,
		allowedOSThemes: Ha,
		allowDarkModeToggle: !0
	};
	if (e === !0) return {
		isSimpleModeActive: !0,
		wallpaper: !1,
		allowLiveWallpapers: !0,
		contextMenu: !1,
		wallpaperPicker: !1,
		iconGrid: !1,
		menuBar: {
			enabled: !0,
			clock: !1,
			controlCenter: !1,
			spotlight: !1,
			appleMenu: !1,
			appNameMenu: !0,
			appSwitcher: !1,
			extras: !0
		},
		widgets: {
			showWidgets: !1,
			allowGalleryEdit: !1
		},
		dock: !1,
		defaultApps: !1,
		allowedOSThemes: [t],
		allowDarkModeToggle: !0
	};
	let n = e, r = {
		enabled: !0,
		clock: !1,
		controlCenter: !1,
		spotlight: !1,
		appleMenu: !1,
		appNameMenu: !0,
		appSwitcher: !1,
		extras: !0
	};
	typeof n.menuBar == "boolean" ? r = {
		enabled: n.menuBar,
		clock: n.menuBar,
		controlCenter: n.menuBar,
		spotlight: n.menuBar,
		appleMenu: n.menuBar,
		appNameMenu: n.menuBar,
		appSwitcher: n.menuBar,
		extras: n.menuBar
	} : typeof n.menuBar == "object" && n.menuBar !== null && (r = {
		enabled: !0,
		clock: !!n.menuBar.clock,
		controlCenter: !!n.menuBar.controlCenter,
		spotlight: !!n.menuBar.spotlight,
		appleMenu: !!n.menuBar.appleMenu,
		appNameMenu: n.menuBar.appNameMenu ?? !0,
		appSwitcher: !!n.menuBar.appSwitcher,
		extras: n.menuBar.extras ?? !0
	});
	let i = {
		showWidgets: !1,
		allowGalleryEdit: !1
	};
	typeof n.widgets == "boolean" ? i = {
		showWidgets: n.widgets,
		allowGalleryEdit: n.widgets
	} : typeof n.widgets == "object" && n.widgets !== null && (i = {
		showWidgets: !!n.widgets.showWidgets,
		allowGalleryEdit: !!n.widgets.allowGalleryEdit
	});
	let a = n.allowedOSThemes && n.allowedOSThemes.length > 0 ? n.allowedOSThemes : [t];
	return {
		isSimpleModeActive: !0,
		wallpaper: !!n.wallpaper,
		allowLiveWallpapers: n.allowLiveWallpapers ?? !0,
		contextMenu: !!n.contextMenu,
		wallpaperPicker: !!(n.wallpaperPicker ?? n.wallpaper),
		iconGrid: n.iconGrid ?? !0,
		menuBar: r,
		widgets: i,
		dock: !!n.dock,
		defaultApps: n.defaultApps ?? !1,
		allowedOSThemes: a,
		allowDarkModeToggle: n.allowDarkModeToggle ?? !0
	};
}
//#endregion
//#region src/components/themes/ThemeProvider.tsx
function Wa({ apps: e, defaultApps: t, builtInApps: n, isSimpleMode: r = !1, colorScheme: i, osTheme: a, fallbackMenuBarAppId: o = null, resolveEditContextMenuItems: s } = {}) {
	let c = I((e) => e.osTheme), l = I((e) => e.setOSTheme), u = I((e) => e.colorScheme), d = I((e) => e.setColorScheme), f = I((e) => e.resolvedColorScheme), p = I((e) => e.resolveColorScheme);
	W(() => {
		a && a !== c && l(a);
	}, [
		a,
		c,
		l
	]), W(() => {
		i && i !== u && d(i);
	}, [
		i,
		u,
		d
	]);
	let m = I((e) => e.registerApps), h = I((e) => e.launchApp), g = I((e) => e.glassEnabled), _ = I((e) => e.isEditingWidgets), b = I((e) => e.accentColor), S = I((e) => e.highlightColor), [w, T] = K(!1), [E, D] = K(!1), [O, k] = K(!1), A = at(() => Ua(r, c), [r, c]);
	W(() => {
		let e = () => {
			let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = window.innerWidth <= 768;
			k(e || t);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), Ra({
		onSpotlight: () => T((e) => !e),
		onAppSwitcher: () => D((e) => !e)
	}), Ba();
	let j = at(() => {
		let r = n === void 0 ? t : n, i = r === void 0 ? A.isSimpleModeActive ? A.defaultApps : !(e && e.length > 0) : r, a = [];
		if (i === !0) a = de;
		else if (Array.isArray(i)) {
			let e = new Set(i);
			a = de.filter((t) => e.has(t.id));
		}
		if (e) {
			let t = new Set(e.map((e) => e.id)), n = a.filter((e) => !t.has(e.id));
			return [...e, ...n];
		}
		return a;
	}, [
		e,
		t,
		n,
		A.isSimpleModeActive,
		A.defaultApps
	]);
	W(() => {
		m(j);
	}, [m, j]), W(() => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			p(e.matches);
		};
		return p(e.matches), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [u, p]);
	let M = c;
	W(() => {
		let e = document.documentElement;
		e.setAttribute("data-os-theme", M), e.setAttribute("data-glass", g ? "true" : "false"), e.classList.toggle("dark", f === "dark");
		let t = {
			multicolor: "#007afe",
			blue: "#007afe",
			purple: "#9d3fc6",
			pink: "#f353a7",
			red: "#e03b30",
			orange: "#f38218",
			yellow: "#f5c400",
			green: "#63be44",
			graphite: "#8e8e93"
		}[b] || "#007afe";
		e.style.setProperty("--accent-color", t), e.style.setProperty("--win-accent", t);
		let n = {
			blue: "rgba(0, 122, 254, 0.25)",
			purple: "rgba(157, 63, 198, 0.25)",
			pink: "rgba(243, 83, 167, 0.25)",
			red: "rgba(224, 59, 48, 0.25)",
			orange: "rgba(243, 130, 24, 0.25)",
			yellow: "rgba(245, 196, 0, 0.3)",
			green: "rgba(99, 190, 68, 0.25)",
			graphite: "rgba(142, 142, 147, 0.3)"
		}, r = "";
		r = S === "automatic" ? n[b === "multicolor" ? "blue" : b] || "rgba(0, 122, 254, 0.25)" : n[S] || "rgba(0, 122, 254, 0.25)", e.style.setProperty("--highlight-color", r);
	}, [
		M,
		f,
		g,
		b,
		S
	]);
	let N = U((e) => {
		h(e);
	}, [h]), ee = M === "macos" || M === "ipad", P = M !== "ipad" && M !== "iphone" && M !== "android", te = M === "iphone" || M === "android", ne = x[M];
	return A.isSimpleModeActive && M === "macos" && !A.dock && (ne = {
		...ne,
		hasDock: !1,
		layout: {
			...ne.layout,
			desktopInsets: {
				top: 30,
				right: 0,
				bottom: 0,
				left: 0
			},
			chrome: {
				...ne.layout.chrome,
				dockHeight: 0,
				dockOffsetBottom: 0
			},
			window: {
				...ne.layout.window,
				maximizeInsets: {
					top: 30,
					bottom: 0
				}
			}
		}
	}), /* @__PURE__ */ J(C, {
		features: A,
		children: /* @__PURE__ */ J("div", {
			className: L("w-full h-full overflow-hidden relative select-none", f === "dark" && "dark"),
			"data-os-theme": M,
			"data-glass": g ? "true" : "false",
			style: Va(ne),
			children: /* @__PURE__ */ Y(pa, {
				resolveItems: s,
				children: [
					/* @__PURE__ */ J(ft, {}),
					/* @__PURE__ */ J(La, {}),
					ee && !A.isSimpleModeActive && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(Pa, {
						open: w,
						onClose: () => T(!1)
					}), /* @__PURE__ */ J(Fa, {
						open: E,
						onClose: () => D(!1)
					})] }),
					te ? /* @__PURE__ */ J("div", {
						className: L("absolute inset-0 flex items-center justify-center", O ? "bg-transparent" : "bg-black/60"),
						children: /* @__PURE__ */ Y("div", {
							className: L("relative overflow-hidden", !O && "shadow-2xl ring-1 ring-white/10"),
							style: {
								height: O ? "100%" : "min(calc(100dvh - 32px), 926px)",
								width: O ? "100%" : "min(calc((min(calc(100dvh - 32px), 926px)) * 0.4612676056338028), 100vw)",
								borderRadius: O ? "0px" : "min(44px, calc(min(calc(100dvh - 32px), 926px) * 0.047))"
							},
							children: [/* @__PURE__ */ J(ia, { children: null }), /* @__PURE__ */ J(v, {
								mode: "wait",
								children: /* @__PURE__ */ Y(y.div, {
									className: "absolute inset-0",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									children: [M === "iphone" && /* @__PURE__ */ J(Xr, { onOpenApp: N }), M === "android" && /* @__PURE__ */ J(li, { onOpenApp: N })]
								}, M)
							})]
						})
					}) : /* @__PURE__ */ Y(q, { children: [
						/* @__PURE__ */ J("div", {
							className: "absolute inset-0",
							children: /* @__PURE__ */ Y(ia, { children: [
								A.widgets.showWidgets && /* @__PURE__ */ J(ka, {}),
								P && (!A.isSimpleModeActive || A.iconGrid) && /* @__PURE__ */ J(ba, { onOpenApp: N }, "icon-grid"),
								/* @__PURE__ */ J(dn, {}, "window-manager")
							] })
						}),
						/* @__PURE__ */ J(v, { children: A.widgets.allowGalleryEdit && _ && /* @__PURE__ */ J(Na, {}) }),
						/* @__PURE__ */ J(v, {
							mode: "wait",
							children: /* @__PURE__ */ Y(y.div, {
								className: "absolute inset-0 pointer-events-none",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: .2 },
								children: [
									M === "macos" && /* @__PURE__ */ J(Sr, {
										isSimpleMode: A.isSimpleModeActive,
										fallbackMenuBarAppId: o,
										onOpenApp: N,
										onSpotlight: A.menuBar.spotlight ? () => T(!0) : void 0,
										onAppSwitcher: A.menuBar.appSwitcher ? () => D(!0) : void 0
									}),
									M === "ipad" && /* @__PURE__ */ J(Lr, { onOpenApp: N }),
									M === "windows" && /* @__PURE__ */ J(ni, { onOpenApp: N })
								]
							}, M)
						})
					] })
				]
			})
		})
	});
}
//#endregion
//#region src/hooks/useMenuAction.ts
function Ga(e, t, n) {
	W(() => {
		let r = (r) => {
			let i = r.detail;
			i.appId === e && (n && i.windowId && i.windowId !== n || t(i.action));
		};
		return window.addEventListener("app:menu:action", r), () => window.removeEventListener("app:menu:action", r);
	}, [
		e,
		t,
		n
	]);
}
function Ka(e, t) {
	W(() => {
		let n = (n) => {
			let r = n.detail;
			r.appId === e && t(r.action);
		};
		return window.addEventListener("app:context:action", n), () => window.removeEventListener("app:context:action", n);
	}, [e, t]);
}
//#endregion
//#region src/lib.tsx
function qa() {
	let e = Se();
	return W(() => {
		e && e.checkUpdate().then(ge.getState().setStatus).catch(() => {});
	}, [e]), null;
}
function Ja(e) {
	let { assetBaseUrl: t = "https://device-layout.vercel.app", apps: n, defaultApps: r, builtInApps: i, onImportWallpaper: a, wallpapers: o, liveWallpapers: s, allowLiveWallpapers: c = !0, updateActions: l, isSimpleMode: u, colorScheme: d, osTheme: f, fallbackMenuBarAppId: p, resolveEditContextMenuItems: m, menuBarExtras: h, macOSAppleIcon: g, windowsStartIcon: _ } = e;
	return /* @__PURE__ */ J(pe, {
		value: t,
		children: /* @__PURE__ */ J(me, {
			value: be(o, s, c),
			children: /* @__PURE__ */ J(ye, {
				value: a ?? null,
				children: /* @__PURE__ */ J(Ee, {
					value: l ?? null,
					children: /* @__PURE__ */ J(E, {
						value: h ?? [],
						children: /* @__PURE__ */ Y(T, {
							config: {
								macOSAppleIcon: g,
								windowsStartIcon: _
							},
							children: [/* @__PURE__ */ J(qa, {}), /* @__PURE__ */ J(Wa, {
								apps: n,
								defaultApps: r,
								builtInApps: i,
								isSimpleMode: u,
								colorScheme: d,
								osTheme: f,
								fallbackMenuBarAppId: p,
								wallpapers: o,
								liveWallpapers: s,
								allowLiveWallpapers: c,
								resolveEditContextMenuItems: m
							})]
						})
					})
				})
			})
		})
	});
}
//#endregion
export { de as APPS_CONFIG, Ja as DeviceLayout, ie as FloatingWindow, he as hasAvailableUpdate, Ce as resolveAssetUrl, Te as useAssetBase, Ka as useContextAction, Ga as useMenuAction, I as useStore, ge as useUpdateStatusStore };
