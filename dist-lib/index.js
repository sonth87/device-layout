"use client";
import { C as e, S as t, a as n, b as r, c as i, d as a, g as o, h as s, i as c, l, m as u, o as d, r as f, s as p, u as m, y as h } from "./Combination-dkRdWOFm.js";
import { C as g, S as _, T as v, _ as y, a as b, b as x, c as S, f as C, g as w, h as T, i as E, m as D, o as O, p as k, r as A, s as j, t as M, u as N, v as ee, w as te, x as P, y as ne } from "./MobileAppViewer-DnXObOPN.js";
import { d as re, i as ie, l as ae, n as oe, r as se, t as F, u as ce } from "./store-DYo5O0gz.js";
import { t as I } from "./utils-B6YmNDS2.js";
import { t as L } from "./createLucideIcon--WjuKCts.js";
import { a as le, c as ue, d as de, f as fe, g as pe, h as me, l as he, m as ge, n as _e, o as ve, p as R, r as ye, s as be, t as xe, u as Se } from "./update-actions-Bic0sQ0N.js";
import { t as Ce } from "./check-DoT5IS9-.js";
import { t as we } from "./chevron-right-BcSxNxws.js";
import { t as Te } from "./grid-3x3-CZiMuCC6.js";
import { t as Ee } from "./monitor-CDDW7biH.js";
import { _ as De, a as Oe, c as ke, d as Ae, f as je, g as Me, h as Ne, i as Pe, l as Fe, m as Ie, n as Le, o as Re, p as ze, r as Be, s as Ve, t as He, u as Ue, v as We } from "./dist-Bo4kSy1Q.js";
import { t as Ge } from "./search-BKG97C0x.js";
import { t as Ke } from "./sun-DdSv2tyc.js";
import { t as qe } from "./volume-2-DAfADR-a.js";
import { t as z } from "./x-BYw6fhgP.js";
import { t as B } from "./useTranslation-BFiuUWuF.js";
import * as V from "react";
import Je, { Suspense as Ye, lazy as H, startTransition as Xe, useCallback as U, useContext as Ze, useEffect as W, useInsertionEffect as Qe, useRef as G, useState as K } from "react";
import { Fragment as q, jsx as J, jsxs as Y } from "react/jsx-runtime";
import { createPortal as $e } from "react-dom";
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/follow-value.mjs
function et(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, l = () => {
		let t = nt(e.get()), r = nt(a);
		if (t === r) {
			c();
			return;
		}
		let s = i ? i.getGeneratorVelocity() : e.getVelocity();
		c(), i = new te({
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
		a = e, o = (e) => t(tt(e, s)), v.postRender(u);
	}, c), g(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(tt(t, s), !1)) : e.set(tt(t, s));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return c;
}
function tt(e, t) {
	return t ? e + t : e;
}
function nt(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function rt(e, t = {}) {
	let { isStatic: n } = Ze(_), r = () => g(e) ? e.get() : e;
	if (n) return ee(r);
	let i = ne(r());
	return Qe(() => et(i, e, t), [i, JSON.stringify(t)]), i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-spring.mjs
function it(e, t = {}) {
	return rt(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region src/components/liquid-glass/GlassFilter.tsx
function at() {
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
function ot() {
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
var st = L("bell-off", [
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
]), ct = L("bluetooth", [["path", {
	d: "m7 7 10 10-5 5V2l5 5L7 17",
	key: "1q5490"
}]]), lt = L("cast", [
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
]), ut = L("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), dt = L("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), ft = L("flashlight", [
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
]), pt = L("grid-2x2", [
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
]), mt = L("maximize-2", [
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
]), ht = L("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), gt = L("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), _t = L("plane", [["path", {
	d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
	key: "1v9wt8"
}]]), vt = L("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), yt = L("signal", [
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
]), bt = L("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), xt = L("timer", [
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
]), St = L("user", [["path", {
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
function Ct({ windowId: e, onPointerDown: t }) {
	let n = F((t) => t.windows[e]), r = F((e) => e.apps[n?.appId ?? ""]), i = F((e) => e.closeWindow), a = F((e) => e.minimizeWindow), o = F((e) => e.toggleMaximize), s = F((e) => e.toggleFullScreen), { config: c } = T(), l = ot(), [u, d] = K(!1), { getAppName: f } = B(), [p, m] = K("basic"), [h, g] = K(!1), [_, v] = K(!1), y = G(null), b = n?.appId === "calculator";
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
	};
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: I("flex items-center gap-0 h-(--window-chrome-height) px-4 shrink-0", "select-none cursor-move z-30", x ? "bg-transparent border-b-0" : I("border-b border-black/8 dark:border-white/8", n.isFocused ? "bg-neutral-100/95 dark:bg-[#151821]/97" : "bg-neutral-50/95 dark:bg-[#0F1115]/97")),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, w),
		onMouseEnter: () => d(!0),
		onMouseLeave: () => d(!1),
		children: [/* @__PURE__ */ Y("div", {
			className: "flex items-center gap-2 mr-3",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ J("button", {
					onClick: () => i(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#ff5f57" : "#d1d1d1" },
					title: "Close",
					children: u && n.isFocused && /* @__PURE__ */ J(z, {
						className: "w-2 h-2 text-red-900/80",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => a(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#febc2e" : "#d1d1d1" },
					title: "Minimize",
					children: u && n.isFocused && /* @__PURE__ */ J(ht, {
						className: "w-2 h-2 text-yellow-900/80",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => s(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#28c840" : "#d1d1d1" },
					title: n.isFullScreen ? "Exit Full Screen" : "Enter Full Screen",
					children: u && n.isFocused && /* @__PURE__ */ J(mt, {
						className: "w-1.5 h-1.5 text-green-900/80",
						strokeWidth: 3
					})
				})
			]
		}), x && n.appId === "calculator" ? /* @__PURE__ */ Y("div", {
			className: "flex-1 flex items-center justify-between pl-6 h-full select-none",
			children: [/* @__PURE__ */ J("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ J("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: I("p-1.5 rounded-md transition-colors", h ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					title: "Toggle History Sidebar",
					children: /* @__PURE__ */ J(gt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ Y("div", {
				className: "relative",
				ref: y,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ Y("button", {
					onClick: () => v(!_),
					className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md active:bg-black/15 transition-all",
					children: [
						/* @__PURE__ */ J(me, { className: "w-3.5 h-3.5 text-neutral-500" }),
						/* @__PURE__ */ J("span", {
							className: "capitalize text-[11px]",
							children: p
						}),
						/* @__PURE__ */ J(k, { className: "w-3 h-3 text-neutral-400" })
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
						className: I("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", p === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ J("span", {
							className: "capitalize",
							children: t
						}), p === t && /* @__PURE__ */ J(Ce, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", {
			className: "flex-1 flex items-center justify-center pointer-events-none",
			children: !x && /* @__PURE__ */ J("span", {
				className: I("text-[13px] font-medium truncate max-w-[220px]", n.isFocused ? "text-black/75 dark:text-white/80" : "text-black/35 dark:text-white/35"),
				children: f(n.appId, n.title)
			})
		}), /* @__PURE__ */ J("div", { className: I(x ? "w-0" : "w-[72px]") })] })]
	});
}
function wt({ windowId: e, onPointerDown: t }) {
	let { osTheme: n } = T();
	return J(n === "windows" ? Tt : Ct, {
		windowId: e,
		onPointerDown: t
	});
}
function Tt({ windowId: e, onPointerDown: t }) {
	let n = F((t) => t.windows[e]), r = F((e) => e.apps[n?.appId ?? ""]), i = F((e) => e.closeWindow), a = F((e) => e.minimizeWindow), o = F((e) => e.toggleMaximize), { config: s } = T(), c = ot(), { getAppName: l } = B(), [u, d] = K("basic"), [f, p] = K(!1), [m, h] = K(!1), g = G(null), _ = n?.appId === "calculator";
	if (W(() => {
		if (!_) return;
		let t = (t) => {
			let n = t;
			n.detail.windowId === e && (n.detail.mode && d(n.detail.mode), n.detail.showHistory !== void 0 && p(n.detail.showHistory));
		};
		return window.addEventListener("app:calculator:state-changed", t), () => window.removeEventListener("app:calculator:state-changed", t);
	}, [_, e]), W(() => {
		if (!m) return;
		let e = (e) => {
			g.current && !g.current.contains(e.target) && h(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [m]), !n) return null;
	let v = r?.titleBarMode === "transparent", { top: y, bottom: b } = s.layout.window.maximizeInsets, x = {
		x: 0,
		y,
		width: c.width,
		height: c.height - y - b
	};
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: I("flex items-center h-(--window-chrome-height) shrink-0 z-30", v ? "bg-transparent border-b-0" : "bg-neutral-100/98 dark:bg-[#151821]/98 border-b border-black/8 dark:border-white/8", "select-none cursor-move"),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, x),
		children: [v && n.appId === "calculator" ? /* @__PURE__ */ Y("div", {
			className: "flex-1 flex items-center gap-4 pl-3 h-full select-none",
			children: [/* @__PURE__ */ J("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ J("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: I("p-1 rounded-md transition-colors", f ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					children: /* @__PURE__ */ J(gt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ Y("div", {
				className: "relative",
				ref: g,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ Y("button", {
					onClick: () => h(!m),
					className: "flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md",
					children: [
						/* @__PURE__ */ J(me, { className: "w-3 h-3" }),
						/* @__PURE__ */ J("span", {
							className: "capitalize text-[11px]",
							children: u
						}),
						/* @__PURE__ */ J(k, { className: "w-3 h-3" })
					]
				}), m && /* @__PURE__ */ J("div", {
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
							} })), h(!1);
						},
						className: I("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", u === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ J("span", {
							className: "capitalize",
							children: t
						}), u === t && /* @__PURE__ */ J(Ce, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : v ? /* @__PURE__ */ J("div", { className: "flex-1 pointer-events-none" }) : /* @__PURE__ */ J("span", {
			className: "flex-1 text-[12px] font-medium truncate text-black/75 dark:text-white/75 pl-3",
			children: l(n.appId, n.title)
		}), /* @__PURE__ */ Y("div", {
			className: "flex items-center h-full pr-1",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ J("button", {
					onClick: () => a(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ J(ht, {
						className: "w-3.5 h-3.5",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70 cursor-default",
					title: "Double-click title bar to maximize/restore",
					children: /* @__PURE__ */ J(bt, {
						className: "w-3 h-3",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => i(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ J(z, {
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
function Et({ windowId: e }) {
	let t = F((t) => t.windows[e]), n = F((e) => e.apps), { t: r } = B(), [i, a] = K(null);
	if (!t) return null;
	let o = n[t.appId]?.menuBarMenus ?? se;
	return /* @__PURE__ */ J("div", {
		id: `window-menubar-${e}`,
		className: "flex items-center h-7 px-2 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-0.5",
		children: o.map((e) => /* @__PURE__ */ J(b, {
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
function Dt({ windowId: e }) {
	return F((t) => t.windows[e]) ? /* @__PURE__ */ J("div", {
		id: `window-statusbar-${e}`,
		className: "flex items-center h-6 px-3 border-t border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs text-black/50 dark:text-white/50"
	}) : null;
}
//#endregion
//#region src/components/window/ResizeHandle.tsx
var Ot = {
	n: "top-0 left-2 right-2 h-1",
	s: "bottom-0 left-2 right-2 h-1",
	e: "right-0 top-2 bottom-2 w-1",
	w: "left-0 top-2 bottom-2 w-1",
	ne: "top-0 right-0 w-3 h-3",
	nw: "top-0 left-0 w-3 h-3",
	se: "bottom-0 right-0 w-3 h-3",
	sw: "bottom-0 left-0 w-3 h-3"
}, kt = [
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w",
	"nw"
];
function At({ getResizeHandler: e }) {
	return /* @__PURE__ */ J(q, { children: kt.map((t) => /* @__PURE__ */ J(jt, {
		edge: t,
		onPointerDown: e(t)
	}, t)) });
}
function jt({ edge: e, onPointerDown: t }) {
	return /* @__PURE__ */ J("div", {
		className: I("absolute z-50", Ot[e], ae[e]),
		onPointerDown: t,
		"aria-hidden": !0
	});
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/vanilla/shallow.mjs
var Mt = (e) => Symbol.iterator in e, Nt = (e) => "entries" in e, Pt = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, Ft = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function It(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Mt(e) && Mt(t) ? Nt(e) && Nt(t) ? Pt(e, t) : Ft(e, t) : Pt({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/react/shallow.mjs
function Lt(e) {
	let t = Je.useRef(void 0);
	return (n) => {
		let r = e(n);
		return It(t.current, r) ? t.current : t.current = r;
	};
}
//#endregion
//#region src/lib/snap-events.ts
var Rt = /* @__PURE__ */ new Set();
function zt(e) {
	return Rt.add(e), () => Rt.delete(e);
}
function Bt(e, t, n = 0, r = 0) {
	Rt.forEach((i) => i(e, t, n, r));
}
function Vt(e, t, n = 0) {
	let r = window.innerWidth, i = window.innerHeight, a = e <= 10, o = e >= r - 10, s = t <= n + 10, c = t >= i - 10;
	return s && a ? "top-left" : s && o ? "top-right" : s ? "top" : a && c ? "bottom-left" : o && c ? "bottom-right" : a ? "left" : o ? "right" : null;
}
function Ht(e, t = 0, n = 0) {
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
var Ut = 50;
function Wt(e, t, n, r, i, a, o) {
	let s = Math.max(r, Math.min(i, e));
	return a && t > r && s < t ? t - s < Ut ? t : s + Ut : o && n < i && s > n ? s - n < Ut ? n : s - Ut : s;
}
function Gt({ windowId: e, x: t, y: n }) {
	let { moveWindow: r, resizeWindow: i, maximizeWindow: a, toggleMaximize: o, focusWindow: s } = F(Lt((e) => ({
		moveWindow: e.moveWindow,
		resizeWindow: e.resizeWindow,
		maximizeWindow: e.maximizeWindow,
		toggleMaximize: e.toggleMaximize,
		focusWindow: e.focusWindow
	}))), c = F((e) => e.allowDragOutOfBounds), { config: l } = T(), u = G(null);
	return { onPointerDown: U((o) => {
		if (o.button !== 0) return;
		o.preventDefault(), o.stopPropagation(), s(e), o.currentTarget.setPointerCapture(o.pointerId);
		let d = F.getState().windows[e];
		d?.prevRect ? u.current = {
			mouseX: o.clientX,
			mouseY: o.clientY,
			winX: t.get(),
			winY: n.get(),
			escaped: !1,
			pendingRestore: {
				prevRect: { ...d.prevRect },
				maximizedRect: { ...d.rect }
			}
		} : u.current = {
			mouseX: o.clientX,
			mouseY: o.clientY,
			winX: t.get(),
			winY: n.get(),
			escaped: !1
		};
		let f = l.layout.window.dragTopInset, p = l.layout.chrome.taskbarHeight, m = window.innerWidth, h = window.innerHeight, g = document.getElementById(`window-${e}`), _ = g?.offsetWidth ?? 600, v = g?.offsetHeight ?? 400, y = F.getState().allowDragOutOfBounds ? -(_ - 200) : 0, b = F.getState().allowDragOutOfBounds ? m - Math.min(200, _) : m - _, x = f, S = F.getState().allowDragOutOfBounds ? h - Math.min(200, v) : h - p - v, C = u.current?.winX ?? t.get(), w = u.current?.winY ?? n.get(), T = C < y || C > b || w < x || w > S;
		u.current && (u.current.escaped = T);
		let E = (r) => {
			if (!u.current) return;
			if (u.current.pendingRestore) {
				let t = r.clientX - u.current.mouseX, n = r.clientY - u.current.mouseY;
				if (Math.hypot(t, n) < 5) return;
				let { prevRect: i, maximizedRect: a } = u.current.pendingRestore, o = (u.current.mouseX - a.x) / a.width, s = Math.round(u.current.mouseX - i.width * Math.min(Math.max(o, .1), .9)), c = u.current.mouseY - 15;
				F.setState((t) => {
					let n = t.windows[e];
					n && (n.rect = {
						x: s,
						y: c,
						width: i.width,
						height: i.height
					}, n.prevRect = null, n.isMaximized = !1, n.isFullScreen = !1);
				}), u.current.winX = s, u.current.winY = c, delete u.current.pendingRestore;
			}
			let i = window.innerWidth, a = window.innerHeight, o = u.current.winX + (r.clientX - u.current.mouseX), s = u.current.winY + (r.clientY - u.current.mouseY), d = document.getElementById(`window-${e}`), m = d?.offsetWidth ?? 600, h = d?.offsetHeight ?? 400;
			l.layout.window.minTitleVisibleHeight;
			let g = c ? -(m - Math.min(200, m)) : 0, _ = c ? i - Math.min(200, m) : i - m, v = f, y = c ? a - Math.min(200, h) : a - p - h, b = i - m, x = a - p - h;
			if (!u.current) return;
			let S = u.current.escaped, C = !S && !1, w = !S && !0, T = S ? -Infinity : g, E = S ? Infinity : _, D = S ? -Infinity : v, O = S ? Infinity : y, k = Wt(o, 0, b, T, E, !S, !S), A = Wt(s, v, x, D, O, C, w);
			t.set(k), n.set(A), Bt(r.clientY <= 10 ? "top" : Vt(r.clientX, r.clientY, f), !0, f, p);
		}, D = (o) => {
			if (!u.current) return;
			if (u.current.pendingRestore) {
				u.current = null, window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", D);
				return;
			}
			let s = t.get(), c = n.get(), l = o.clientY <= 10 ? "top" : Vt(o.clientX, o.clientY, f), d = Ht(l, f, p);
			d ? l === "top" ? a(e, d) : i(e, d) : r(e, s, c), Bt(null, !1, f, p), u.current = null, window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", D);
		};
		window.addEventListener("pointermove", E), window.addEventListener("pointerup", D);
	}, [
		l.layout.window.dragTopInset,
		l.layout.chrome.taskbarHeight,
		l.layout.window.minTitleVisibleHeight,
		t,
		n,
		e,
		r,
		i,
		a,
		o,
		s
	]) };
}
//#endregion
//#region src/components/window/useWindowResize.ts
function Kt({ windowId: e, x: t, y: n, width: r, height: i, minWidth: a = 320, minHeight: o = 240 }) {
	let s = F((e) => e.resizeWindow), c = G(null);
	return { getResizeHandler: U((l) => (u) => {
		u.preventDefault(), u.stopPropagation(), u.currentTarget.setPointerCapture(u.pointerId), c.current = {
			mouseX: u.clientX,
			mouseY: u.clientY,
			rect: {
				x: t.get(),
				y: n.get(),
				width: r.get(),
				height: i.get()
			}
		};
		let d = (e) => {
			if (!c.current) return;
			let s = ce(l, e.clientX - c.current.mouseX, e.clientY - c.current.mouseY, c.current.rect, a, o);
			t.set(s.x), n.set(s.y), r.set(s.width), i.set(s.height);
		}, f = () => {
			c.current && (s(e, {
				x: t.get(),
				y: n.get(),
				width: r.get(),
				height: i.get()
			}), c.current = null, window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", f));
		};
		window.addEventListener("pointermove", d), window.addEventListener("pointerup", f);
	}, [
		t,
		n,
		r,
		i,
		e,
		a,
		o,
		s
	]) };
}
//#endregion
//#region src/components/window/Window.tsx
function qt({ windowId: e }) {
	let t = F((t) => t.windows[e]), n = F((e) => e.focusWindow), r = F((e) => e.setActiveApp), i = F((e) => e.exitFullScreen), a = F((e) => e.fullscreenChromeRevealed), o = F((e) => e.apps), { isFloating: s, isMobile: c, config: l } = T();
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
	let u = ne(t?.rect.x ?? 100), d = ne(t?.rect.y ?? 100), f = ne(t?.rect.width ?? 800), p = ne(t?.rect.height ?? 600);
	W(() => {
		t && (y(u, t.rect.x, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), y(d, t.rect.y, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), y(f, t.rect.width, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), y(p, t.rect.height, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}));
	}, [
		t?.rect.x,
		t?.rect.y,
		t?.rect.width,
		t?.rect.height
	]);
	let { onPointerDown: m } = Gt({
		windowId: e,
		x: u,
		y: d
	}), h = t ? o[t.appId] : void 0, { getResizeHandler: g } = Kt({
		windowId: e,
		x: u,
		y: d,
		width: f,
		height: p,
		minWidth: h?.minSize?.width ?? 320,
		minHeight: h?.minSize?.height ?? 240
	});
	if (!t) return null;
	let _ = c || t.isMaximized || t.isFullScreen, v = s && !c;
	return /* @__PURE__ */ Y(x.div, {
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
		style: _ && !t.isMaximized ? {
			position: "absolute",
			inset: 0,
			x: 0,
			y: 0,
			width: "100%",
			height: "100%",
			zIndex: t.zIndex,
			transformOrigin: "bottom center",
			borderRadius: t.isFullScreen ? 0 : "var(--radius-window)"
		} : {
			position: "absolute",
			x: u,
			y: d,
			width: f,
			height: p,
			zIndex: t.zIndex,
			transformOrigin: "bottom center",
			borderRadius: t.isFullScreen ? 0 : "var(--radius-window)"
		},
		className: I("flex flex-col overflow-hidden", t.isMinimized ? "pointer-events-none" : "pointer-events-auto", t.isFocused ? "shadow-[0_22px_70px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.25)]", !t.isFocused && "brightness-95", "bg-(--window-body-bg)", t.isFocused ? "ring-1 ring-white/20" : ""),
		onPointerDown: (i) => {
			n(e), t?.appId && r(t.appId), i.stopPropagation();
		},
		children: [
			(v || t.isMaximized) && !t.isFullScreen && /* @__PURE__ */ J("div", {
				className: I(h?.titleBarMode === "transparent" ? "absolute top-0 inset-x-0 z-20" : "relative"),
				children: /* @__PURE__ */ J(wt, {
					windowId: e,
					onPointerDown: m
				})
			}),
			t.isFullScreen && /* @__PURE__ */ J(x.div, {
				className: "absolute top-0 inset-x-0 z-20",
				animate: { y: a ? 28 : "-100%" },
				transition: {
					type: "spring",
					stiffness: 380,
					damping: 30,
					mass: .8
				},
				children: /* @__PURE__ */ J(wt, {
					windowId: e,
					onPointerDown: m
				})
			}),
			t.hasMenuBar && !l.hasMenuBar && /* @__PURE__ */ J(Et, { windowId: e }),
			/* @__PURE__ */ J("div", {
				className: "flex-1 overflow-auto min-h-0 window-body",
				children: /* @__PURE__ */ J(A, {
					appId: t.appId,
					windowId: e
				})
			}),
			t.hasStatusBar && /* @__PURE__ */ J(Dt, { windowId: e }),
			v && !t.isMaximized && !t.isFullScreen && /* @__PURE__ */ J(At, { getResizeHandler: g })
		]
	});
}
//#endregion
//#region src/components/window/SnapAssist.tsx
var Jt = {
	left: "Snap Left",
	right: "Snap Right",
	top: "Maximize",
	"top-left": "Top Left",
	"top-right": "Top Right",
	"bottom-left": "Bottom Left",
	"bottom-right": "Bottom Right"
};
function Yt(e) {
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
function Xt({ zone: e, style: t, topInset: n, bottomInset: r }) {
	let i = Ht(e, n, r);
	return i ? /* @__PURE__ */ Y(x.div, {
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
			children: Jt[e]
		})]
	}, e) : null;
}
function Zt() {
	let [e, t] = K(null), [n, r] = K(!1), [i, a] = K(0), [o, s] = K(0), { osTheme: c } = T(), l = Yt(c), u = F((e) => e.focusedWindowId), d = F((e) => e.windows), f = (u ? d[u] : null)?.zIndex ?? 10;
	return W(() => zt((e, n, i, o) => {
		t(e), r(n), a(i), s(o);
	}), []), n ? /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: f },
		children: /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ J(Xt, {
			zone: e,
			style: l,
			topInset: i,
			bottomInset: o
		}, e) })
	}) : null;
}
//#endregion
//#region src/lib/url-codec.ts
function Qt(e) {
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
function $t(e) {
	let t = e.split(":");
	if (t.length < 2) return null;
	let n = t[0], r = t[1], i = t[2], a = t[3], o = r.split(",").map(Number);
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
function en() {
	let e = F((e) => e.windows), t = F((e) => e.apps), n = F((e) => e.openWindow), r = F((e) => e.focusWindow), i = F((e) => e.urlHydrated), a = F((e) => e.setUrlHydrated), { config: o } = T();
	W(() => {
		if (i || Object.keys(t).length === 0) return;
		let e = new URLSearchParams(window.location.search).getAll("w"), s = null;
		for (let r of e) {
			let e = $t(r);
			if (!e) continue;
			let i = t[e.appId];
			if (!i) continue;
			let a = e.rect;
			if (e.isMaximized) {
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
		let t = new URLSearchParams();
		for (let n of Object.values(e)) t.append("w", Qt(n));
		let n = `${window.location.pathname}${t.toString() ? `?${t.toString()}` : ""}`;
		n !== window.location.href.replace(window.location.origin, "") && window.history.replaceState(null, "", n);
	}, [e, i]);
}
//#endregion
//#region src/components/window/WindowManager.tsx
function tn() {
	en();
	let e = F((e) => e.windows), t = F((e) => e.apps), n = F((e) => e.resizeWindow), r = F((e) => e.allowDragOutOfBounds), i = ot(), { config: a } = T();
	W(() => {
		let o = {
			x: 0,
			y: a.layout.window.maximizeInsets.top,
			width: i.width,
			height: Math.max(1, i.height - a.layout.window.maximizeInsets.top - a.layout.window.maximizeInsets.bottom)
		};
		for (let a of Object.values(e)) {
			let e = t[a.appId];
			if (!e) continue;
			let s;
			if (a.isMaximized) s = o;
			else {
				let t = e.minSize?.width ?? 320, n = e.minSize?.height ?? 240, c = Math.min(Math.max(a.rect.width, t), i.width), l = Math.min(Math.max(a.rect.height, n), i.height);
				if (r) {
					let e = Math.min(200, c), t = Math.min(200, l), n = o.x - (c - e), r = o.x + o.width - e, i = o.y, u = o.y + o.height - t;
					s = {
						x: Math.min(Math.max(a.rect.x, n), r),
						y: Math.min(Math.max(a.rect.y, i), u),
						width: c,
						height: l
					};
				} else s = re(a.rect, o, {
					minWidth: t,
					minHeight: n
				});
			}
			(s.x !== a.rect.x || s.y !== a.rect.y || s.width !== a.rect.width || s.height !== a.rect.height) && n(a.id, s);
		}
	}, [
		t,
		e,
		n,
		r,
		i.width,
		i.height,
		a.layout.window.maximizeInsets.top,
		a.layout.window.maximizeInsets.bottom
	]);
	let o = Object.keys(e);
	return /* @__PURE__ */ Y("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden z-20",
		children: [/* @__PURE__ */ J(Zt, {}), /* @__PURE__ */ J(P, { children: o.map((e) => /* @__PURE__ */ J(qt, { windowId: e }, e)) })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var nn = Object.freeze({
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
}), rn = "VisuallyHidden", an = V.forwardRef((e, t) => /* @__PURE__ */ J(o.span, {
	...e,
	ref: t,
	style: {
		...nn,
		...e.style
	}
}));
an.displayName = rn;
var on = an, [sn, cn] = r("Tooltip", [m]), ln = m(), un = "TooltipProvider", dn = 700, fn = "tooltip.open", [pn, mn] = sn(un), hn = (e) => {
	let { __scopeTooltip: t, delayDuration: n = dn, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = V.useRef(!0), s = V.useRef(!1), c = V.useRef(0);
	return V.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ J(pn, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: V.useCallback(() => {
			window.clearTimeout(c.current), o.current = !1;
		}, []),
		onClose: V.useCallback(() => {
			window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r);
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: V.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
hn.displayName = un;
var gn = "Tooltip", [_n, vn] = sn(gn), yn = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = e, u = mn(gn, e.__scopeTooltip), d = ln(t), [p, m] = V.useState(null), h = a(), g = V.useRef(0), _ = s ?? u.disableHoverableContent, v = c ?? u.delayDuration, y = V.useRef(!1), [b, x] = f({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(fn))) : u.onClose(), o?.(e);
		},
		caller: gn
	}), S = V.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), C = V.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, y.current = !1, x(!0);
	}, [x]), w = V.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, x(!1);
	}, [x]), T = V.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			y.current = !0, x(!0), g.current = 0;
		}, v);
	}, [v, x]);
	return V.useEffect(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []), /* @__PURE__ */ J(l, {
		...d,
		children: /* @__PURE__ */ J(_n, {
			scope: t,
			contentId: h,
			open: b,
			stateAttribute: S,
			trigger: p,
			onTriggerChange: m,
			onTriggerEnter: V.useCallback(() => {
				u.isOpenDelayedRef.current ? T() : C();
			}, [
				u.isOpenDelayedRef,
				T,
				C
			]),
			onTriggerLeave: V.useCallback(() => {
				_ ? w() : (window.clearTimeout(g.current), g.current = 0);
			}, [w, _]),
			onOpen: C,
			onClose: w,
			disableHoverableContent: _,
			children: n
		})
	});
};
yn.displayName = gn;
var bn = "TooltipTrigger", xn = V.forwardRef((n, r) => {
	let { __scopeTooltip: i, ...a } = n, s = vn(bn, i), c = mn(bn, i), l = ln(i), u = t(r, V.useRef(null), s.onTriggerChange), f = V.useRef(!1), p = V.useRef(!1), m = V.useCallback(() => f.current = !1, []);
	return V.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ J(d, {
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
xn.displayName = bn;
var Sn = "TooltipPortal", [Cn, wn] = sn(Sn, { forceMount: void 0 }), Tn = (e) => {
	let { __scopeTooltip: t, forceMount: r, children: i, container: a } = e, o = vn(Sn, t);
	return /* @__PURE__ */ J(Cn, {
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
Tn.displayName = Sn;
var En = "TooltipContent", Dn = V.forwardRef((e, t) => {
	let n = wn(En, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = vn(En, e.__scopeTooltip);
	return /* @__PURE__ */ J(c, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ J(Mn, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ J(On, {
			side: i,
			...a,
			ref: t
		})
	});
}), On = V.forwardRef((e, n) => {
	let r = vn(En, e.__scopeTooltip), i = mn(En, e.__scopeTooltip), a = V.useRef(null), o = t(n, a), [s, c] = V.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = V.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = V.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = In(r, Fn(r, n.getBoundingClientRect())), a = Ln(t.getBoundingClientRect()), o = zn([...i, ...a]);
		c(o), f(!0);
	}, [f]);
	return V.useEffect(() => () => p(), [p]), V.useEffect(() => {
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
	]), V.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !Rn(n, s);
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
	]), /* @__PURE__ */ J(Mn, {
		...e,
		ref: o
	});
}), [kn, An] = sn(gn, { isInside: !1 }), jn = h("TooltipContent"), Mn = V.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = e, l = vn(En, n), d = ln(n), { onClose: f } = l;
	return V.useEffect(() => (document.addEventListener(fn, f), () => document.removeEventListener(fn, f)), [f]), V.useEffect(() => {
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
			children: [/* @__PURE__ */ J(jn, { children: r }), /* @__PURE__ */ J(kn, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ J(on, {
					id: l.contentId,
					role: "tooltip",
					children: a || r
				})
			})]
		})
	});
});
Dn.displayName = En;
var Nn = "TooltipArrow", Pn = V.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = ln(n);
	return An(Nn, n).isInside ? null : /* @__PURE__ */ J(p, {
		...i,
		...r,
		ref: t
	});
});
Pn.displayName = Nn;
function Fn(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function In(e, t, n = 5) {
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
function Ln(e) {
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
function Rn(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function zn(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Bn(t);
}
function Bn(e) {
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
var Vn = hn, Hn = yn, Un = xn, Wn = Tn, Gn = Dn, Kn = 120;
function qn({ appConfig: e, isRunning: t, hasMinimized: n, mouseX: r, onOpen: i, baseSize: a, maxSize: o }) {
	let s = G(null), [c, l] = K(!1), { getAppName: u } = B(), d = u(e.id, e.name), f = F((e) => e.showOpenAppIndicators), p = fe((e) => e.status), m = e.id === "settings" && de(p), h = a + 10, g = ee(r, (e) => {
		if (!s.current) return 121;
		let t = s.current.getBoundingClientRect();
		return Math.abs(e - (t.left + t.width / 2));
	}), _ = it(ee(g, [0, Kn], [o, a], { clamp: !0 }), {
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
	]), /* @__PURE__ */ J(Vn, {
		delayDuration: 500,
		children: /* @__PURE__ */ Y(Hn, { children: [/* @__PURE__ */ Y(x.div, {
			ref: s,
			className: "relative flex flex-col justify-end items-center overflow-visible",
			style: {
				width: _,
				height: h
			},
			children: [/* @__PURE__ */ J(Un, {
				asChild: !0,
				children: /* @__PURE__ */ Y(x.button, {
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
					children: [/* @__PURE__ */ J(R, {
						appConfig: e,
						size: o,
						fill: !0,
						className: "w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
					}), m && /* @__PURE__ */ J("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
				})
			}), /* @__PURE__ */ Y("div", {
				className: "shrink-0 h-2.5 flex items-center justify-center gap-1",
				children: [f && t && !n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" }), f && n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" })]
			})]
		}), /* @__PURE__ */ J(Wn, { children: /* @__PURE__ */ Y(Gn, {
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
function Jn({ onOpenApp: e }) {
	let t = F((e) => e.dockAppIds), n = F((e) => e.apps), r = F((e) => e.runningAppIds), i = F((e) => e.windows), a = F((e) => e.launchApp), o = F((e) => e.dockSize), s = F((e) => e.dockMagnification), c = Math.max(o * (1 + s), o + s * 54), l = c - o, u = ne(Infinity), d = t.map((e) => n[e]).filter(Boolean), f = r.filter((e) => !t.includes(e)).map((e) => n[e]).filter(Boolean), p = (e) => {
		a(e);
	}, m = Math.round(o * .28), h = Math.round(o * .47), g = Math.round(o * .28), _ = Math.round(o * .19);
	return /* @__PURE__ */ Y("div", {
		"data-dock": "true",
		className: "relative overflow-visible",
		style: { paddingTop: l },
		onMouseMove: (e) => u.set(e.clientX),
		onMouseLeave: () => u.set(Infinity),
		children: [/* @__PURE__ */ J("div", {
			className: "absolute inset-x-0 bottom-0",
			style: { top: l },
			children: /* @__PURE__ */ J(O, {
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
				d.map((e) => /* @__PURE__ */ J(qn, {
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
				f.map((e) => /* @__PURE__ */ J(qn, {
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
function Yn({ appConfig: e, onClose: t }) {
	let { getAppName: n } = B(), [r, i] = K({
		x: 0,
		y: 0
	}), [a, o] = K(!1), s = G(null), c = U((e) => {
		e.target.closest("button") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), s.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: r.x,
			oy: r.y
		});
	}, [r]), l = U((e) => {
		s.current && i({
			x: s.current.ox + (e.clientX - s.current.mx),
			y: s.current.oy + (e.clientY - s.current.my)
		});
	}, []), u = U(() => {
		s.current = null;
	}, []);
	return typeof document > "u" ? null : $e(/* @__PURE__ */ Y("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99999 },
		children: [/* @__PURE__ */ J("div", { className: "absolute inset-0 pointer-events-auto" }), /* @__PURE__ */ Y("div", {
			className: "relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-72 overflow-hidden pointer-events-auto",
			style: { transform: `translate(${r.x}px, ${r.y}px)` },
			onPointerMove: l,
			onPointerUp: u,
			onPointerCancel: u,
			children: [/* @__PURE__ */ J("div", {
				className: "w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: c,
				onMouseEnter: () => o(!0),
				onMouseLeave: () => o(!1),
				children: /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2",
					onPointerDown: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ J("button", {
							onClick: t,
							className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100",
							style: { backgroundColor: "#ff5f57" },
							title: "Close",
							children: a && /* @__PURE__ */ J(z, {
								className: "w-2 h-2 text-red-900/80",
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ J("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						}),
						/* @__PURE__ */ J("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						})
					]
				})
			}), /* @__PURE__ */ Y("div", {
				className: "flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none",
				children: [
					/* @__PURE__ */ J("div", {
						className: "w-20 h-20 mb-1",
						children: /* @__PURE__ */ J(R, {
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
			})]
		})]
	}), document.body);
}
function Xn() {
	let [e, t] = K(null);
	return W(() => {
		let e = (e) => {
			let { appId: n, action: r } = e.detail;
			if (r !== "about") return;
			let i = F.getState().apps[n];
			i && t(i);
		};
		return window.addEventListener("app:menu:action", e), () => window.removeEventListener("app:menu:action", e);
	}, []), e ? /* @__PURE__ */ J(Yn, {
		appConfig: e,
		onClose: () => t(null)
	}) : null;
}
//#endregion
//#region src/hooks/useWallpaperLuminance.ts
var Zn = 28, Qn = 120, $n = "wallpaper_luma_";
function er(e) {
	let t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function tr(e) {
	try {
		let t = localStorage.getItem($n + e);
		if (t === "light" || t === "dark") return t;
	} catch {}
	return null;
}
function nr(e, t) {
	try {
		localStorage.setItem($n + e, t);
	} catch {}
}
var rr = /* @__PURE__ */ new Map();
function ir(e) {
	return new Promise((t) => {
		let n = new Image();
		n.crossOrigin = "anonymous", n.onload = () => {
			try {
				let e = document.createElement("canvas");
				e.width = Qn, e.height = Zn;
				let r = e.getContext("2d");
				if (!r) {
					t("dark");
					return;
				}
				r.drawImage(n, 0, 0, n.naturalWidth, Math.min(n.naturalHeight, Zn * 2), 0, 0, Qn, Zn);
				let i = r.getImageData(0, 0, Qn, Zn).data, a = 0;
				for (let e = 0; e < i.length; e += 4) a += .299 * i[e] + .587 * i[e + 1] + .114 * i[e + 2];
				t(a / (i.length / 4) > 128 ? "light" : "dark");
			} catch {
				t("dark");
			}
		}, n.onerror = () => t("dark"), n.src = e;
	});
}
function ar() {
	let e = F((e) => e.osTheme), t = F((e) => e.wallpaperId);
	W(() => {
		if (e !== "macos") return;
		let n = ie.find((e) => e.id === t);
		if (!n) return;
		let r = (e) => F.getState().setWallpaperTextTheme(e);
		if (rr.has(t)) {
			r(rr.get(t));
			return;
		}
		let i = tr(t);
		if (i) {
			rr.set(t, i), r(i);
			return;
		}
		if (n.kind === "color" && n.colorHex) {
			let e = er(n.colorHex) > 128 ? "light" : "dark";
			rr.set(t, e), nr(t, e), r(e);
			return;
		}
		n.url && ir(n.url).then((e) => {
			rr.set(t, e), nr(t, e), r(e);
		});
	}, [e, t]);
}
//#endregion
//#region src/components/themes/MacOSTheme.tsx
var or = 20, sr = 120, cr = 1500, lr = 650;
function ur({ onOpenApp: e, onSpotlight: t, isSimpleMode: n = !1 }) {
	ar();
	let r = F((e) => Object.values(e.windows).some((e) => e.isMaximized && !e.isMinimized)), i = F((e) => Object.values(e.windows).some((e) => e.isFullScreen && !e.isMinimized)), [a] = K(() => typeof window > "u" ? !1 : new URLSearchParams(window.location.search).getAll("w").some((e) => !!(parseInt(e.split(":")[2] ?? "0", 10) & 6))), o = F((e) => e.urlHydrated), s = F((e) => e.dockAutoHide), c = r || i || s || a && !o, [l, u] = K(!1), [d, f] = K(!1), p = !c || l || d, m = G(null);
	W(() => {
		o && c && u(!1);
	}, [o, c]), W(() => {
		if (!c || n) {
			u(!1);
			return;
		}
		let e = null, t = (t) => {
			let n = t.clientY >= window.innerHeight - or, r = !0;
			if (n && m.current) {
				let { left: e, right: n } = m.current.getBoundingClientRect();
				r = t.clientX >= e - 24 && t.clientX <= n + 24;
			}
			n && r || d ? (u(!0), e &&= (clearTimeout(e), null)) : e ||= setTimeout(() => u(!1), cr);
		};
		return document.addEventListener("mousemove", t), () => {
			document.removeEventListener("mousemove", t), e && clearTimeout(e);
		};
	}, [
		c,
		d,
		n
	]);
	let h = F((e) => e.fullscreenChromeRevealed), g = F((e) => e.setFullscreenChromeRevealed), _ = !i || h;
	return W(() => {
		if (!i) {
			g(!1);
			return;
		}
		let e = null, t = null, n = (n) => {
			let r = n.target, i = r?.closest("[data-menubar=\"true\"]"), a = r?.closest("[data-windowchrome=\"true\"]"), o = r?.closest("[data-menu-portal=\"true\"]") || r?.closest("[data-radix-popper-content-wrapper]");
			n.clientY <= or ? (t ||= setTimeout(() => {
				g(!0), t = null;
			}, 500), e &&= (clearTimeout(e), null)) : i || a || o ? e &&= (clearTimeout(e), null) : (t &&= (clearTimeout(t), null), e ||= setTimeout(() => g(!1), lr));
		};
		return document.addEventListener("mousemove", n), () => {
			document.removeEventListener("mousemove", n), e && clearTimeout(e), t && clearTimeout(t);
		};
	}, [i, g]), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(Xn, {}),
		/* @__PURE__ */ J(x.div, {
			className: "absolute top-0 inset-x-0 z-40 pointer-events-none",
			animate: { y: _ ? 0 : -28 },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			children: /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(E, {
					onSpotlight: t,
					isSimpleMode: n,
					forceDark: i
				})
			})
		}),
		!n && /* @__PURE__ */ J(x.div, {
			className: "absolute inset-x-0 z-40 flex justify-center pointer-events-none",
			style: { bottom: "var(--dock-offset-bottom)" },
			animate: { y: p ? 0 : sr },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			onMouseEnter: () => f(!0),
			onMouseLeave: () => f(!1),
			children: /* @__PURE__ */ J("div", {
				ref: m,
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(Jn, { onOpenApp: e })
			})
		})
	] });
}
//#endregion
//#region src/hooks/useImageReady.ts
function dr(e, t = !0) {
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
function fr() {
	let [e, t] = K(() => F.persist.hasHydrated());
	return W(() => {
		let e = F.persist.onHydrate(() => {
			t(!1);
		}), n = F.persist.onFinishHydration(() => {
			t(!0);
		});
		return () => {
			e(), n();
		};
	}, []), e;
}
//#endregion
//#region src/hooks/useResolvedWallpaper.ts
function pr() {
	let e = F((e) => e.wallpaperId), t = F((e) => e.customWallpapers), n = Se();
	return [...n.all, ...t].find((t) => t.id === e) || (n.all.find((e) => e.id === n.defaultId) ?? n.pictures[0]);
}
//#endregion
//#region src/components/iphone/LockScreen.tsx
function mr() {
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
function hr({ onUnlock: e }) {
	let t = fr(), n = be(), r = pr(), i = ve(n, r.url ?? ""), a = dr(i, t && r.kind !== "color"), o = t && a && r.kind !== "color" ? `url(${i})` : "none", s = r.kind === "color" ? r.colorHex : "#1e1e2e", c = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ Y(x.div, {
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
						children: /* @__PURE__ */ J(mr, {})
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
				children: [/* @__PURE__ */ J(x.div, {
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
var gr = 6, _r = 4, X = gr * _r, vr = 6, yr = 600, br = (e, t, n) => {
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
function xr({ onOpenApp: e }) {
	let t = F((e) => e.apps), { getAppName: n } = B(), [r, i] = K(0), [a, o] = K(!1), [s, c] = K(() => {
		let e = F.getState().apps, t = Object.values(e).filter((e) => !e.disabled).slice(vr).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / X)), r = [...t];
		for (; r.length < n * X;) r.push(null);
		return r;
	}), [l, u] = K(s), [d, f] = K(null), [p, m] = K(!1), [h, g] = K({
		x: 0,
		y: 0
	}), _ = G(null), [v, y] = K(768), b = G(0), S = G(r), C = G(s), w = G(l), T = G(d);
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
			for (let t of e) y(t.contentRect.width || 768);
		});
		return e.observe(_.current), () => e.disconnect();
	}, []);
	let E = Object.values(t).filter((e) => !e.disabled).slice(0, vr), D = d ? l : s, O = Math.max(1, Math.ceil(D.length / X));
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
		j.current = setTimeout(() => o(!0), yr);
	}, N = () => {
		j.current && clearTimeout(j.current);
	}, ee = () => {
		a && o(!1);
	}, te = (e, t) => {
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
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / gr)), l = Math.floor(o / (i.height / _r));
				if (s >= 0 && s < gr && l >= 0 && l < _r) {
					let e = l * gr + s, r = t * X + e, i = [...C.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * X;
							for (; i.length < e;) i.push(null);
						}
						let e = br(i, a, r);
						C.current = e, w.current = e, u(e), c(e);
					}
				}
			}
			let i = _.current?.getBoundingClientRect();
			if (i) {
				let t = e.clientX, n = Date.now();
				if (n - b.current > 1200) {
					let e = S.current;
					t < i.left + 50 && e > 0 ? (A(e - 1), b.current = n) : t > i.right - 50 && (A(e + 1), b.current = n);
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
				children: /* @__PURE__ */ J(x.div, {
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
							gridTemplateColumns: `repeat(${gr}, 1fr)`,
							gridTemplateRows: `repeat(${_r}, 1fr)`,
							width: v
						},
						children: n.map((n, r) => {
							if (n) {
								let i = t[n];
								if (i) return /* @__PURE__ */ J(Sr, {
									app: i,
									index: r,
									jiggling: a,
									activeDragId: d,
									onPointerDownStart: () => m(!0),
									onPointerDownEnd: () => m(!1),
									onOpen: e,
									onDragStart: te
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
					className: I("rounded-full transition-all duration-200", t === r ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50")
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
					children: E.map((t) => /* @__PURE__ */ Y("button", {
						onClick: () => e(t),
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ J(R, {
							appConfig: t,
							size: 64
						}), /* @__PURE__ */ J("span", {
							className: "text-white/80 text-[10px] font-medium",
							children: n(t.id, t.name)
						})]
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
				children: [/* @__PURE__ */ J(R, {
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
function Sr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = B(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
		x: 0,
		y: 0
	}), p = G(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, yr);
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
	}, y = r === e.id;
	return /* @__PURE__ */ Y(x.div, {
		layout: !y,
		"data-app-id": e.id,
		className: "flex flex-col items-center gap-2 min-w-0 select-none relative cursor-grab active:cursor-grabbing",
		onPointerDown: m,
		onPointerMove: h,
		onPointerUp: g,
		onPointerCancel: _,
		onClick: v,
		style: {
			touchAction: "none",
			zIndex: y ? 100 : 10,
			visibility: y ? "hidden" : "visible"
		},
		children: [/* @__PURE__ */ J(x.div, {
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
			children: /* @__PURE__ */ J(R, {
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
function Cr({ open: e, onClose: t }) {
	let n = F((e) => e.colorScheme), r = F((e) => e.setColorScheme);
	F((e) => e.glassEnabled), F((e) => e.setGlassEnabled);
	let [i, a] = K(80), [o, s] = K(65), [c, l] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(S, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ct, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(_t, { className: "w-5 h-5" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(C, { className: "w-5 h-5" }),
			active: !1
		}
	]), u = (e) => l((t) => t.map((t) => t.id === e ? {
		...t,
		active: !t.active
	} : t));
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9985",
		onClick: t
	}), /* @__PURE__ */ J(x.div, {
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
		children: /* @__PURE__ */ J(O, {
			variant: "panel",
			className: "p-4",
			children: /* @__PURE__ */ Y("div", {
				className: "space-y-3.5",
				children: [
					/* @__PURE__ */ J("div", {
						className: "grid grid-cols-2 gap-2",
						children: c.map((e) => /* @__PURE__ */ Y("button", {
							onClick: () => u(e.id),
							className: I("flex items-center gap-3 p-3 rounded-2xl transition-colors", e.active ? "bg-white/90 dark:bg-white/20" : "bg-white/20 dark:bg-white/10"),
							children: [/* @__PURE__ */ J("span", {
								className: e.active ? "text-blue-500" : "text-white/70",
								children: e.icon
							}), /* @__PURE__ */ J("span", {
								className: I("text-[12px] font-semibold", e.active ? "text-black dark:text-white" : "text-white/70"),
								children: e.label
							})]
						}, e.id))
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ J(Ke, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
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
						children: [/* @__PURE__ */ J(qe, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
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
								icon: /* @__PURE__ */ J(ge, { className: "w-5 h-5" }),
								label: "Camera"
							},
							{
								icon: /* @__PURE__ */ J(ft, { className: "w-5 h-5" }),
								label: "Flash"
							},
							{
								icon: /* @__PURE__ */ J(xt, { className: "w-5 h-5" }),
								label: "Timer"
							},
							{
								icon: /* @__PURE__ */ J(N, { className: "w-5 h-5" }),
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
							className: I("w-9 h-5 rounded-full transition-colors", n === "dark" ? "bg-blue-500" : "bg-white/30"),
							children: /* @__PURE__ */ J("div", { className: I("w-4 h-4 rounded-full bg-white m-0.5 transition-transform shadow", n === "dark" ? "translate-x-4" : "translate-x-0") })
						})]
					})
				]
			})
		})
	})] }) });
}
//#endregion
//#region src/hooks/useSwipeGesture.ts
function wr(e, t) {
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
function Tr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1);
	return wr({
		onSwipeUp: () => n(!1),
		onSwipeDown: () => i(!0)
	}), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(P, { children: t && /* @__PURE__ */ J(hr, { onUnlock: () => n(!1) }) }),
		/* @__PURE__ */ Y("div", {
			className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none",
			style: { height: "var(--statusbar-height)" },
			children: [/* @__PURE__ */ J("span", {
				className: "min-w-0",
				children: /* @__PURE__ */ J(j, {})
			}), /* @__PURE__ */ Y("div", {
				className: "flex items-center gap-1.5 text-white",
				children: [/* @__PURE__ */ J(S, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ J(D, { className: "w-4 h-4" })]
			})]
		}),
		/* @__PURE__ */ J(xr, { onOpenApp: e }),
		/* @__PURE__ */ J(Cr, {
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
function Er({ onOpenApp: e, navBarHeight: t = 72 }) {
	let n = F((e) => e.dockAppIds).slice(0, 4), r = F((e) => e.apps), i = F((e) => e.runningAppIds), { getAppName: a } = B(), o = n.map((e) => r[e]).filter(Boolean);
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
			className: I("flex items-center justify-center transition-opacity active:scale-95", i.includes(t.id) ? "opacity-100" : "opacity-90"),
			"aria-label": a(t.id, t.name),
			children: /* @__PURE__ */ J(R, {
				appConfig: t,
				size: 52
			})
		}, t.id))
	});
}
//#endregion
//#region src/components/iphone/DynamicIsland.tsx
function Dr({ onClick: e }) {
	let [t, n] = K("compact"), r = F((e) => e.notifications).find((e) => !e.read);
	return /* @__PURE__ */ J("div", {
		className: "cursor-pointer",
		onClick: () => {
			n((e) => e === "compact" ? "expanded" : "compact"), e?.();
		},
		children: /* @__PURE__ */ J(x.div, {
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
			children: /* @__PURE__ */ J(P, {
				mode: "wait",
				children: t === "compact" ? /* @__PURE__ */ J(x.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "flex items-center gap-2 px-3",
					children: /* @__PURE__ */ J("div", { className: "w-2 h-2 rounded-full bg-neutral-700" })
				}, "compact") : /* @__PURE__ */ Y(x.div, {
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
var Or = 4, kr = 6, Z = Or * kr, Ar = 600, jr = (e, t, n) => {
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
function Mr({ onOpenApp: e, statusBarHeight: t, navBarHeight: n, homeIndicatorHeight: r }) {
	let i = F((e) => e.apps), { getAppName: a } = B(), [o, s] = K(0), [c, l] = K(!1), [u, d] = K(() => {
		let e = F.getState().apps, t = Object.values(e).filter((e) => !e.disabled).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / Z)), r = [...t];
		for (; r.length < n * Z;) r.push(null);
		return r;
	}), [f, p] = K(u), [m, h] = K(null), [g, _] = K(!1), [v, y] = K({
		x: 0,
		y: 0
	}), b = G(null), [S, C] = K(393), w = G(0), T = G(o), E = G(u), D = G(f), O = G(m);
	W(() => {
		T.current = o;
	}, [o]), W(() => {
		E.current = u;
	}, [u]), W(() => {
		D.current = f;
	}, [f]), W(() => {
		O.current = m;
	}, [m]), W(() => {
		if (!b.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) C(t.contentRect.width || 393);
		});
		return e.observe(b.current), () => e.disconnect();
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
		N.current = setTimeout(() => l(!0), Ar);
	}, te = () => {
		N.current && clearTimeout(N.current);
	}, P = () => {
		c && l(!1);
	}, ne = (e, t) => {
		h(e), _(!0);
		let n = "touches" in t ? t.touches[0].clientX : t.clientX, r = "touches" in t ? t.touches[0].clientY : t.clientY;
		y({
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
			y({
				x: e.clientX,
				y: e.clientY
			});
			let t = T.current, n = O.current;
			if (!n) return;
			let r = b.current?.querySelectorAll(".grid")?.[t];
			if (r) {
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / Or)), c = Math.floor(o / (i.height / kr));
				if (s >= 0 && s < Or && c >= 0 && c < kr) {
					let e = c * Or + s, r = t * Z + e, i = [...E.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * Z;
							for (; i.length < e;) i.push(null);
						}
						let e = jr(i, a, r);
						E.current = e, D.current = e, p(e), d(e);
					}
				}
			}
			let i = b.current?.getBoundingClientRect();
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
		ref: b,
		className: "absolute inset-0 overflow-hidden",
		style: {
			paddingTop: t + 12,
			paddingBottom: ie
		},
		onPointerDown: ee,
		onPointerUp: te,
		onPointerCancel: te,
		onClick: P,
		children: [
			/* @__PURE__ */ J("div", {
				className: "h-full w-full overflow-hidden",
				children: /* @__PURE__ */ J(x.div, {
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
							gridTemplateColumns: `repeat(${Or}, 1fr)`,
							gridTemplateRows: `repeat(${kr}, 1fr)`,
							gap: "16px 8px",
							width: S
						},
						children: t.map((t, n) => {
							if (t) {
								let r = i[t];
								if (r) return /* @__PURE__ */ J(Nr, {
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
					className: I("rounded-full transition-all duration-200", t === o ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50")
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
				children: [/* @__PURE__ */ J(R, {
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
function Nr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = B(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
		x: 0,
		y: 0
	}), p = G(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, Ar);
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
	}, y = r === e.id;
	return /* @__PURE__ */ Y(x.div, {
		layout: !y,
		"data-app-id": e.id,
		className: "flex flex-col items-center gap-1.5 select-none relative cursor-grab active:cursor-grabbing",
		onPointerDown: m,
		onPointerMove: h,
		onPointerUp: g,
		onPointerCancel: _,
		onClick: v,
		style: {
			touchAction: "none",
			zIndex: y ? 100 : 10,
			visibility: y ? "hidden" : "visible"
		},
		children: [/* @__PURE__ */ J(x.div, {
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
			children: /* @__PURE__ */ J(R, {
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
function Pr() {
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
var Fr = 50, Ir = 72, Lr = 20;
function Rr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), a = G(null), o = F((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return wr({
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
			/* @__PURE__ */ J(P, { children: t && /* @__PURE__ */ J(hr, { onUnlock: () => n(!1) }) }),
			/* @__PURE__ */ J(Mr, {
				onOpenApp: e,
				statusBarHeight: Fr,
				navBarHeight: Ir,
				homeIndicatorHeight: Lr
			}),
			/* @__PURE__ */ J(M, {
				statusBarHeight: Fr,
				navBarHeight: Ir,
				homeIndicatorHeight: Lr
			}),
			/* @__PURE__ */ Y("div", {
				className: "absolute top-0 inset-x-0 z-40 grid pointer-events-none",
				style: {
					height: Fr,
					gridTemplateColumns: "1fr auto 1fr"
				},
				children: [
					/* @__PURE__ */ J("div", {
						className: "flex items-start pt-3.5 pl-5 text-white text-[15px] font-semibold tabular-nums",
						children: /* @__PURE__ */ J(Pr, {})
					}),
					/* @__PURE__ */ J("div", {
						className: "flex items-start justify-center pt-1.5",
						children: /* @__PURE__ */ J(Dr, {})
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-start justify-end pt-3.5 pr-5 gap-2 text-white",
						children: [
							/* @__PURE__ */ J(yt, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(S, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(D, { className: "w-[22px] h-[22px]" })
						]
					})
				]
			}),
			/* @__PURE__ */ J(Cr, {
				open: r,
				onClose: () => i(!1)
			}),
			!s && /* @__PURE__ */ Y("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				style: { height: 92 },
				children: [/* @__PURE__ */ J(Er, {
					onOpenApp: e,
					navBarHeight: Ir
				}), /* @__PURE__ */ J("div", {
					className: "flex items-center justify-center",
					style: { height: Lr },
					children: /* @__PURE__ */ J("div", { className: "w-32 h-1 bg-white/40 rounded-full" })
				})]
			})
		]
	});
}
//#endregion
//#region src/components/windows/StartMenu.tsx
var zr = [
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
function Br({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = F((e) => e.apps), o = F((e) => e.dockAppIds), { t: s, getAppName: c } = B(), l = o.map((e) => a[e]).filter(Boolean), u = Object.values(a).filter((e) => !e.disabled), d = r ? u.filter((e) => c(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : [], f = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9980]",
		onClick: t
	}), /* @__PURE__ */ Y(x.div, {
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
					children: [/* @__PURE__ */ J(Ge, { className: "w-4 h-4 text-black/40 dark:text-white/50 shrink-0" }), /* @__PURE__ */ J("input", {
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
					children: [/* @__PURE__ */ J(R, {
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
						children: [/* @__PURE__ */ J(R, {
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
					children: zr.map((e) => /* @__PURE__ */ Y("button", {
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
						children: /* @__PURE__ */ J(St, { className: "w-4 h-4 text-white" })
					}), /* @__PURE__ */ J("span", {
						className: "text-[12px] text-black/80 dark:text-white/80 font-semibold",
						children: "User"
					})]
				}), /* @__PURE__ */ J("button", {
					className: "p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					title: "Power",
					children: /* @__PURE__ */ J(vt, { className: "w-4.5 h-4.5 text-black/60 dark:text-white/60" })
				})]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/windows/SystemTray.tsx
function Vr({ open: e, onClose: t }) {
	let n = F((e) => e.notifications), r = F((e) => e.dismissNotification), i = n.filter((e) => !e.read), [a, o] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(S, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ct, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(_t, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(C, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery",
			icon: /* @__PURE__ */ J(D, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "display",
			label: "Display",
			icon: /* @__PURE__ */ J(Ee, { className: "w-4 h-4" }),
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
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9970]",
		onClick: t
	}), /* @__PURE__ */ Y(x.div, {
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
					children: /* @__PURE__ */ J(j, {})
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
						className: I("flex flex-col items-start gap-1.5 p-3 rounded-xl transition-colors text-left border", e.active ? "bg-blue-500 dark:bg-blue-600 border-blue-500 dark:border-blue-600" : "bg-black/5 dark:bg-white/8 border-black/5 dark:border-white/5 hover:bg-black/8 dark:hover:bg-white/12"),
						children: [/* @__PURE__ */ J("div", {
							className: I("w-6 h-6 flex items-center justify-center", e.active ? "text-white" : "text-black/60 dark:text-white/60"),
							children: e.icon
						}), /* @__PURE__ */ J("span", {
							className: I("text-[10px] font-medium", e.active ? "text-white" : "text-black/60 dark:text-white/50"),
							children: e.label
						})]
					}, e.id))
				})
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8 space-y-2.5",
				children: [/* @__PURE__ */ J(Hr, {
					icon: /* @__PURE__ */ J(qe, { className: "w-3.5 h-3.5" }),
					defaultValue: 75
				}), /* @__PURE__ */ J(Hr, {
					icon: /* @__PURE__ */ J(Ke, { className: "w-3.5 h-3.5" }),
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
						className: I("text-[11px] w-7 h-7 flex items-center justify-center rounded-full mx-auto", e === c.getDate() ? "bg-blue-500 text-white font-semibold" : e ? "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 cursor-default" : ""),
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
							children: /* @__PURE__ */ J(pe, { className: "w-3 h-3 text-white" })
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
							children: /* @__PURE__ */ J(we, { className: "w-3 h-3" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
function Hr({ icon: e, defaultValue: t }) {
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
function Ur({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), a = F((e) => e.dockAppIds), o = F((e) => e.apps), s = F((e) => e.runningAppIds), c = F((e) => e.launchApp), l = F((e) => e.restoreWindow), u = F((e) => e.focusWindow), d = F((e) => e.windows), { t: f, getAppName: p } = B(), m = a.map((e) => o[e]).filter(Boolean), h = (e) => {
		c(e);
	};
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(Br, {
			open: t,
			onClose: () => n(!1),
			onOpenApp: (t) => {
				e(t), n(!1);
			}
		}),
		/* @__PURE__ */ J(Vr, {
			open: r,
			onClose: () => i(!1)
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
							n((e) => !e), i(!1);
						},
						className: I("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", t && "bg-black/10 dark:bg-white/15"),
						title: "Start",
						children: /* @__PURE__ */ Y("svg", {
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
							n((e) => !e), i(!1);
						},
						className: I("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", t && "bg-black/10 dark:bg-white/15"),
						title: "Search",
						children: /* @__PURE__ */ J(Ge, { className: "w-4 h-4 text-black/70 dark:text-white/80" })
					}),
					m.map((e) => {
						let t = s.includes(e.id), n = p(e.id, e.name), r = Object.values(d).filter((t) => t.appId === e.id);
						return /* @__PURE__ */ Y("div", {
							className: "relative group/taskitem flex items-center justify-center",
							children: [/* @__PURE__ */ Y("button", {
								onClick: () => h(e),
								className: I("w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative", "hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20", t && "bg-black/5 dark:bg-white/10"),
								"aria-label": n,
								title: n,
								children: [/* @__PURE__ */ J(R, {
									appConfig: e,
									size: 28
								}), t && /* @__PURE__ */ J("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--win-accent)" })]
							}), r.length > 0 && /* @__PURE__ */ J("div", {
								className: "hidden group-hover/taskitem:flex absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 bg-[#f3f3f3]/95 dark:bg-[#1f242b]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 p-2 rounded-xl shadow-2xl z-50 flex flex-col gap-1.5 w-40 pointer-events-auto select-none",
								children: r.map((t) => /* @__PURE__ */ Y("div", {
									onClick: () => {
										l(t.id), u(t.id);
									},
									className: "flex flex-col gap-1.5 w-full text-left",
									children: [/* @__PURE__ */ Y("div", {
										className: "flex items-center gap-1.5 px-1 pb-1 border-b border-black/5 dark:border-white/5 text-[10px] text-black/80 dark:text-white/80 font-semibold truncate",
										children: [/* @__PURE__ */ J(R, {
											appConfig: e,
											size: 14
										}), /* @__PURE__ */ J("span", {
											className: "truncate",
											children: t.title
										})]
									}), /* @__PURE__ */ J("div", {
										className: I("h-20 rounded-md overflow-hidden flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 shadow-inner border border-black/5 dark:border-white/5", e.id === "terminal" ? "bg-black text-[6px] text-green-400 font-mono p-1.5 justify-start items-start" : e.id === "settings" ? "bg-slate-200 dark:bg-neutral-800 p-1 flex gap-1" : "bg-gradient-to-br from-blue-500 to-indigo-600"),
										children: e.id === "terminal" ? /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", { children: "Microsoft Windows [Version 10.0.22631]" }), /* @__PURE__ */ J("p", {
											className: "mt-1",
											children: "C:\\Users\\User>_"
										})] }) : e.id === "settings" ? /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", { className: "w-1/3 h-full bg-black/5 dark:bg-white/5 rounded-sm" }), /* @__PURE__ */ J("div", { className: "flex-1 h-full bg-black/10 dark:bg-white/10 rounded-sm" })] }) : /* @__PURE__ */ J(R, {
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
						i((e) => !e), n(!1);
					},
					className: I("px-2 h-8 flex items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors", r && "bg-black/10 dark:bg-white/15"),
					title: "System tray",
					children: /* @__PURE__ */ J("span", {
						className: "text-xs text-black/80 dark:text-white/80 tabular-nums",
						children: /* @__PURE__ */ J(j, {})
					})
				})
			})]
		})
	] });
}
//#endregion
//#region src/components/themes/WindowsTheme.tsx
function Wr({ onOpenApp: e }) {
	return /* @__PURE__ */ J(q, { children: /* @__PURE__ */ J("div", {
		className: "absolute bottom-0 inset-x-0 z-40 pointer-events-none",
		children: /* @__PURE__ */ J("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ J(Ur, { onOpenApp: e })
		})
	}) });
}
//#endregion
//#region src/components/android/AppDrawer.tsx
function Gr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = F((e) => e.apps), { t: o, getAppName: s } = B(), c = Object.values(a).filter((e) => !e.disabled), l = r ? c.filter((e) => s(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : c, u = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: .5 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980 bg-black",
		onClick: t
	}), /* @__PURE__ */ Y(x.div, {
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
						/* @__PURE__ */ J(Ge, { className: "w-4 h-4 text-white/50 shrink-0" }),
						/* @__PURE__ */ J("input", {
							value: r,
							onChange: (e) => i(e.target.value),
							placeholder: o.search,
							className: "flex-1 bg-transparent text-[13px] text-white placeholder:text-white/40 outline-none"
						}),
						r && /* @__PURE__ */ J("button", {
							onClick: () => i(""),
							children: /* @__PURE__ */ J(z, { className: "w-3.5 h-3.5 text-white/40" })
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
							children: /* @__PURE__ */ J(R, {
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
function Kr({ open: e, onClose: t }) {
	let n = F((e) => e.notifications), r = F((e) => e.dismissNotification), i = F((e) => e.colorScheme), a = F((e) => e.setColorScheme), [o, s] = K(!1), [c, l] = K(70), [u, d] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(S, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(ct, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dnd",
			label: "Do Not Dist",
			icon: /* @__PURE__ */ J(st, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(_t, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "rotate",
			label: "Auto Rotate",
			icon: /* @__PURE__ */ J(We, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "flashlight",
			label: "Flashlight",
			icon: /* @__PURE__ */ J(ft, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery Sav",
			icon: /* @__PURE__ */ J(D, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "cast",
			label: "Cast",
			icon: /* @__PURE__ */ J(lt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dark",
			label: "Dark Mode",
			icon: /* @__PURE__ */ J(C, { className: "w-4 h-4" }),
			active: i === "dark"
		},
		{
			id: "eye",
			label: "Eye Comfort",
			icon: /* @__PURE__ */ J(ut, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "bell",
			label: "Notifications",
			icon: /* @__PURE__ */ J(pe, { className: "w-4 h-4" }),
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
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980",
		onClick: t
	}), /* @__PURE__ */ Y(x.div, {
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
					children: /* @__PURE__ */ J(z, { className: "w-4 h-4 text-white/70" })
				}), /* @__PURE__ */ J("button", {
					onClick: () => s((e) => !e),
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ J(k, { className: I("w-4 h-4 text-white/70 transition-transform", o ? "rotate-180" : "") })
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex items-center gap-3 px-4 py-2",
				children: [/* @__PURE__ */ J(Ke, { className: "w-4 h-4 text-white/60 shrink-0" }), /* @__PURE__ */ J("input", {
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
					className: I("flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-colors text-left", e.active ? "bg-teal-500/30 border border-teal-400/40" : "bg-white/8"),
					children: [/* @__PURE__ */ J("span", {
						className: e.active ? "text-teal-300" : "text-white/50",
						children: e.icon
					}), /* @__PURE__ */ J("span", {
						className: I("text-[10px] font-medium leading-tight", e.active ? "text-white" : "text-white/50"),
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
							children: /* @__PURE__ */ J(z, { className: "w-3.5 h-3.5" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/themes/AndroidTheme.tsx
function qr() {
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
var Jr = 32, Yr = 76, Xr = 0;
function Zr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), a = G(null), o = F((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return wr({
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
				style: { height: Jr },
				children: [/* @__PURE__ */ J(qr, {}), /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ J(yt, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(S, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(D, { className: "w-[20px] h-[20px]" })
					]
				})]
			}),
			/* @__PURE__ */ J(M, {
				statusBarHeight: Jr,
				navBarHeight: Yr,
				homeIndicatorHeight: Xr
			}),
			!s && /* @__PURE__ */ J("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				children: /* @__PURE__ */ J(Er, {
					onOpenApp: e,
					navBarHeight: Yr
				})
			}),
			/* @__PURE__ */ J(Gr, {
				open: t,
				onClose: () => n(!1),
				onOpenApp: (t) => {
					e(t), n(!1);
				}
			}),
			/* @__PURE__ */ J(Kr, {
				open: r,
				onClose: () => i(!1)
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context-menu@2.2.16_@types+react-dom@19.2.3_@types+react@19.2.14__@type_7ddebea395c65d3c4d3683b445765102/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var Qr = "ContextMenu", [$r, ei] = r(Qr, [De]), Q = De(), [ti, ni] = $r(Qr), ri = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e, [o, c] = V.useState(!1), l = Q(t), u = s(r), d = V.useCallback((e) => {
		c(e), u(e);
	}, [u]);
	return /* @__PURE__ */ J(ti, {
		scope: t,
		open: o,
		onOpenChange: d,
		modal: a,
		children: /* @__PURE__ */ J(je, {
			...l,
			dir: i,
			open: o,
			onOpenChange: d,
			modal: a,
			children: n
		})
	});
};
ri.displayName = Qr;
var ii = "ContextMenuTrigger", ai = V.forwardRef((t, n) => {
	let { __scopeContextMenu: r, disabled: i = !1, ...a } = t, s = ni(ii, r), c = Q(r), l = V.useRef({
		x: 0,
		y: 0
	}), u = V.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...l.current
	}) }), d = V.useRef(0), f = V.useCallback(() => window.clearTimeout(d.current), []), p = (e) => {
		l.current = {
			x: e.clientX,
			y: e.clientY
		}, s.onOpenChange(!0);
	};
	return V.useEffect(() => f, [f]), V.useEffect(() => void (i && f()), [i, f]), /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(He, {
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
		onPointerDown: i ? t.onPointerDown : e(t.onPointerDown, Pi((e) => {
			f(), d.current = window.setTimeout(() => p(e), 700);
		})),
		onPointerMove: i ? t.onPointerMove : e(t.onPointerMove, Pi(f)),
		onPointerCancel: i ? t.onPointerCancel : e(t.onPointerCancel, Pi(f)),
		onPointerUp: i ? t.onPointerUp : e(t.onPointerUp, Pi(f))
	})] });
});
ai.displayName = ii;
var oi = "ContextMenuPortal", si = (e) => {
	let { __scopeContextMenu: t, ...n } = e;
	return /* @__PURE__ */ J(Fe, {
		...Q(t),
		...n
	});
};
si.displayName = oi;
var ci = "ContextMenuContent", li = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = ni(ci, n), a = Q(n), o = V.useRef(!1);
	return /* @__PURE__ */ J(Pe, {
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
li.displayName = ci;
var ui = "ContextMenuGroup", di = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Oe, {
		...Q(n),
		...r,
		ref: t
	});
});
di.displayName = ui;
var fi = "ContextMenuLabel", pi = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(ke, {
		...Q(n),
		...r,
		ref: t
	});
});
pi.displayName = fi;
var mi = "ContextMenuItem", hi = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Re, {
		...Q(n),
		...r,
		ref: t
	});
});
hi.displayName = mi;
var gi = "ContextMenuCheckboxItem", _i = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Be, {
		...Q(n),
		...r,
		ref: t
	});
});
_i.displayName = gi;
var vi = "ContextMenuRadioGroup", yi = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ue, {
		...Q(n),
		...r,
		ref: t
	});
});
yi.displayName = vi;
var bi = "ContextMenuRadioItem", xi = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ae, {
		...Q(n),
		...r,
		ref: t
	});
});
xi.displayName = bi;
var Si = "ContextMenuItemIndicator", Ci = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ve, {
		...Q(n),
		...r,
		ref: t
	});
});
Ci.displayName = Si;
var wi = "ContextMenuSeparator", Ti = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(ze, {
		...Q(n),
		...r,
		ref: t
	});
});
Ti.displayName = wi;
var Ei = "ContextMenuArrow", Di = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Le, {
		...Q(n),
		...r,
		ref: t
	});
});
Di.displayName = Ei;
var Oi = "ContextMenuSub", ki = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = Q(t), [s, c] = f({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Oi
	});
	return /* @__PURE__ */ J(Ie, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
ki.displayName = Oi;
var Ai = "ContextMenuSubTrigger", ji = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Me, {
		...Q(n),
		...r,
		ref: t
	});
});
ji.displayName = Ai;
var Mi = "ContextMenuSubContent", Ni = V.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ne, {
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
Ni.displayName = Mi;
function Pi(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var Fi = ri, Ii = ai, Li = si, Ri = li, zi = hi, Bi = Ti, Vi = ki, Hi = ji, Ui = Ni;
//#endregion
//#region src/lib/wallpaper-fit.ts
function Wi(e) {
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
function Gi() {
	let { t: e } = B(), t = F((e) => e.desktopViewOptionsOpen), n = F((e) => e.setDesktopViewOptionsOpen), r = F((e) => e.useStacks), i = F((e) => e.stackGroupBy), a = F((e) => e.toggleStacks), o = F((e) => e.setStackGroupBy), s = F((e) => e.desktopSortBy), c = F((e) => e.setDesktopSortBy), l = F((e) => e.desktopIconSize), u = F((e) => e.setDesktopIconSize), d = F((e) => e.desktopGridSpacing), f = F((e) => e.setDesktopGridSpacing), p = F((e) => e.desktopTextSize), m = F((e) => e.setDesktopTextSize), h = F((e) => e.desktopLabelPosition), g = F((e) => e.setDesktopLabelPosition), [_, v] = K({
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
	return !t || typeof document > "u" ? null : $e(/* @__PURE__ */ J("div", {
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
								className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100",
								style: { backgroundColor: "#ff5f57" },
								title: "Close",
								children: y && /* @__PURE__ */ J(z, {
									className: "w-2 h-2 text-red-900/80",
									strokeWidth: 3
								})
							}),
							/* @__PURE__ */ J("div", {
								className: "w-3.5 h-3.5 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							}),
							/* @__PURE__ */ J("div", {
								className: "w-3.5 h-3.5 rounded-full",
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
									/* @__PURE__ */ J(dt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "16",
										max: "128",
										value: l,
										onChange: (e) => u(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(dt, { className: "w-7 h-7 text-black/75 dark:text-white/75" })
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
									/* @__PURE__ */ J(pt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "0",
										max: "100",
										value: d,
										onChange: (e) => f(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(Te, { className: "w-6 h-6 text-black/75 dark:text-white/75" })
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
var Ki = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", qi = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", Ji = "min-w-[220px] outline-none z-[99999]";
function Yi({ children: e, isSimpleMode: t = !1 }) {
	let { t: n } = B(), r = F((e) => e.useStacks), i = F((e) => e.stackGroupBy), a = F((e) => e.toggleStacks), o = F((e) => e.setStackGroupBy), s = F((e) => e.openWidgetGallery), c = F((e) => e.wallpaperFitMode);
	F((e) => e.desktopViewOptionsOpen);
	let l = F((e) => e.setDesktopViewOptionsOpen), u = F((e) => e.apps), d = F((e) => e.launchApp), f = F((e) => e.setSettingsActiveTab), p = fr(), m = be(), h = pr(), g = ve(m, h.url ?? ""), _ = dr(g, p && h.kind !== "color"), v = h.kind === "color" ? p : _, y = p && v && h.kind !== "color" ? `url(${g})` : "none", b = [
		{
			id: "kind",
			label: n.kind
		},
		{
			id: "shared-by",
			label: n.sharedBy
		},
		{
			id: "date-last-opened",
			label: n.dateLastOpened
		},
		{
			id: "date-added",
			label: n.dateAdded
		},
		{
			id: "date-modified",
			label: n.dateModified
		},
		{
			id: "date-created",
			label: n.dateCreated
		},
		{
			id: "tags",
			label: n.tags
		}
	];
	return t ? /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", { className: "absolute inset-0 overflow-hidden bg-[#f4f4f5] dark:bg-[#18181b]" }), /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden",
		children: e
	})] }) : /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ Y(Fi, { children: [/* @__PURE__ */ J(Ii, {
			asChild: !0,
			children: /* @__PURE__ */ J("div", {
				className: "absolute inset-0 overflow-hidden bg-[#1e1e2e]",
				children: h.kind === "color" ? /* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					style: {
						backgroundColor: h.colorHex,
						transition: "background-color 120ms ease-out"
					}
				}) : p && h.kind === "live" && h.videoUrl ? /* @__PURE__ */ J("video", {
					src: ve(m, h.videoUrl),
					autoPlay: !0,
					loop: !0,
					muted: !0,
					playsInline: !0,
					className: "absolute inset-0 w-full h-full object-cover"
				}, h.videoUrl) : /* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					style: {
						backgroundImage: y,
						...Wi(c),
						transition: "background-image 120ms ease-out"
					}
				})
			})
		}), /* @__PURE__ */ J(Li, { children: /* @__PURE__ */ J(Ri, {
			asChild: !0,
			className: Ji,
			children: /* @__PURE__ */ J(O, {
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ Y("div", { children: [
					/* @__PURE__ */ J(zi, {
						className: Ki,
						onSelect: () => {
							let e = Object.values(u).find((e) => e.id === "settings");
							e && (f("wallpaper"), d(e));
						},
						children: n.changeWallpaper
					}),
					/* @__PURE__ */ J(zi, {
						className: Ki,
						onSelect: () => s(),
						children: n.editWidgets
					}),
					/* @__PURE__ */ J(Bi, { className: qi }),
					/* @__PURE__ */ Y(zi, {
						className: Ki,
						onSelect: () => a(),
						children: [/* @__PURE__ */ J("span", {
							className: "w-3.5 shrink-0 flex items-center justify-center",
							children: r && /* @__PURE__ */ J(Ce, { className: "w-3 h-3 stroke-[2.5]" })
						}), n.useStacks]
					}),
					/* @__PURE__ */ Y(Vi, { children: [/* @__PURE__ */ Y(Hi, {
						className: `${Ki} data-[state=open]:bg-blue-500 data-[state=open]:text-white`,
						children: [
							/* @__PURE__ */ J("span", { className: "w-3.5 shrink-0" }),
							/* @__PURE__ */ J("span", {
								className: "flex-1",
								children: n.groupStacksBy
							}),
							/* @__PURE__ */ J(we, { className: "w-3.5 h-3.5 ml-auto opacity-60" })
						]
					}), /* @__PURE__ */ J(Li, { children: /* @__PURE__ */ J(Ui, {
						asChild: !0,
						className: Ji,
						sideOffset: 2,
						alignOffset: -4,
						children: /* @__PURE__ */ J(O, {
							variant: "panel",
							className: "p-1",
							children: /* @__PURE__ */ J("div", { children: b.map(({ id: e, label: t }) => /* @__PURE__ */ Y(zi, {
								className: Ki,
								onSelect: () => o(e),
								children: [/* @__PURE__ */ J("span", {
									className: "w-3.5 shrink-0 flex items-center justify-center",
									children: i === e && /* @__PURE__ */ J(Ce, { className: "w-3 h-3 stroke-[2.5]" })
								}), t]
							}, e)) })
						})
					}) })] }),
					/* @__PURE__ */ J(Bi, { className: qi }),
					/* @__PURE__ */ Y(zi, {
						className: Ki,
						onSelect: () => l(!0),
						children: [/* @__PURE__ */ J("span", { className: "w-3.5 shrink-0" }), n.showViewOptions]
					})
				] })
			})
		}) })] }),
		/* @__PURE__ */ J("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			children: e
		}),
		/* @__PURE__ */ J(Gi, {})
	] });
}
//#endregion
//#region src/components/desktop/AppIcon.tsx
var Xi = 6, Zi = 700;
function Qi({ items: e, appId: t, onClose: n }) {
	let r = (e) => {
		n(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return /* @__PURE__ */ J(q, { children: e.map((e) => e.separator ? /* @__PURE__ */ J(Bi, { className: "my-1 h-px bg-black/10 dark:bg-white/10" }, e.key) : /* @__PURE__ */ Y(zi, {
		disabled: e.disabled,
		onSelect: () => r(e.action),
		className: "flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors",
		children: [e.label, e.shortcut && /* @__PURE__ */ J("span", {
			className: "text-[10px] opacity-50 ml-4",
			children: e.shortcut
		})]
	}, e.key)) });
}
function $i({ items: e, appId: t, anchorX: n, anchorY: r, onClose: i }) {
	let a = Math.min(n, window.innerWidth - 192 - 8), o = (e) => {
		i(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return $e(/* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", {
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
			className: I("w-full flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none text-left", e.disabled ? "opacity-40" : "hover:bg-blue-500 hover:text-white transition-colors"),
			children: [/* @__PURE__ */ J("span", { children: e.label }), e.shortcut && /* @__PURE__ */ J("span", {
				className: "text-[10px] opacity-50 ml-4",
				children: e.shortcut
			})]
		}, e.key))
	})] }), document.body);
}
function ea({ appConfig: e, x: t, y: n, onOpen: r, onDrop: i, onDragStart: a, onDrag: o, isSelected: s = !1, onSelect: c, onUpAfterClick: l }) {
	let u = F((e) => e.desktopIconSize), d = F((e) => e.desktopLabelPosition), f = F((e) => e.desktopTextSize), [p, m] = K(!1), { getAppName: h } = B(), g = h(e.id, e.name), [_, v] = K({
		x: t,
		y: n
	}), [y, b] = K(!1), [x, S] = K(null), C = G(null), w = G(0), T = G(null), E = G(null), D = G(!1), k = p ? _ : {
		x: t,
		y: n
	}, A = () => {
		E.current &&= (clearTimeout(E.current), null);
	};
	return /* @__PURE__ */ Y(q, { children: [x && e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J($i, {
		items: e.contextMenu,
		appId: e.id,
		anchorX: x.x,
		anchorY: x.y,
		onClose: () => S(null)
	}), /* @__PURE__ */ Y(Fi, { children: [/* @__PURE__ */ J(Ii, {
		asChild: !0,
		children: /* @__PURE__ */ J("div", {
			"data-app-icon": "true",
			"data-app-id": e.id,
			className: I("absolute pointer-events-auto", e.disabled && "opacity-40 pointer-events-none"),
			style: {
				left: k.x,
				top: k.y,
				width: d === "bottom" ? u + 56 : u + 104,
				zIndex: p ? 1e3 : 1,
				transition: p ? "none" : "left 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)"
			},
			children: /* @__PURE__ */ Y("button", {
				className: I("flex w-full items-center select-none rounded-lg", d === "bottom" ? "flex-col text-center gap-2 p-2" : "flex-row text-left gap-3 p-2", "focus:outline-none transition-transform duration-75", s ? "bg-white/8 dark:bg-white/5" : "hover:bg-white/15", y && !p && "scale-90 opacity-80", p && "scale-105 opacity-90 drop-shadow-2xl"),
				onPointerDown: (s) => {
					if (s.button !== 0) return;
					s.stopPropagation(), b(!0), D.current = s.pointerType === "touch", c && c(e.id, s), C.current = {
						startMouseX: s.clientX,
						startMouseY: s.clientY,
						startX: t,
						startY: n,
						moved: !1
					}, s.currentTarget.setPointerCapture(s.pointerId), D.current && e.contextMenu && e.contextMenu.length > 0 && (E.current = setTimeout(() => {
						if (E.current = null, C.current && !C.current.moved) {
							try {
								s.target.releasePointerCapture(s.pointerId);
							} catch {}
							b(!1), S({
								x: C.current.startMouseX,
								y: C.current.startMouseY
							}), C.current = null, window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", d);
						}
					}, Zi));
					let u = (e) => {
						if (!C.current) return;
						let t = e.clientX - C.current.startMouseX, n = e.clientY - C.current.startMouseY;
						if (!C.current.moved && Math.hypot(t, n) < Xi) return;
						A();
						let r = !C.current.moved;
						C.current.moved = !0, m(!0);
						let i = C.current.startX + t, s = C.current.startY + n;
						v({
							x: i,
							y: s
						}), r && a && a(), o && o(i, s);
					}, d = (a) => {
						if (A(), b(!1), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", d), !C.current) return;
						let o = a.clientX - C.current.startMouseX, s = a.clientY - C.current.startMouseY, c = C.current.moved;
						C.current = null, m(!1), c ? i(t + o, n + s) : (l && l(e.id), w.current += 1, w.current === 2 ? (w.current = 0, T.current && clearTimeout(T.current), r(e)) : T.current = setTimeout(() => {
							w.current = 0;
						}, 350));
					};
					window.addEventListener("pointermove", u), window.addEventListener("pointerup", d);
				},
				"aria-label": `Open ${g}`,
				children: [/* @__PURE__ */ Y("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ J(R, {
						appConfig: e,
						size: u,
						className: "drop-shadow-xl"
					}), e.badge !== void 0 && /* @__PURE__ */ J("span", {
						className: "absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow",
						children: e.badge
					})]
				}), /* @__PURE__ */ J("span", {
					className: I("block w-full text-white font-medium leading-tight px-0 py-0.5 rounded-[4px] border border-transparent", d === "bottom" ? "text-center mx-auto" : "text-left"),
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
						textShadow: s ? "none" : "0 1px 0px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)"
					},
					children: g
				})]
			})
		})
	}), e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J(Li, { children: /* @__PURE__ */ J(Ri, {
		asChild: !0,
		className: "min-w-48 outline-none z-[99999]",
		children: /* @__PURE__ */ J(O, {
			variant: "panel",
			className: "p-1 text-xs",
			children: /* @__PURE__ */ J("div", { children: /* @__PURE__ */ J(Qi, {
				items: e.contextMenu,
				appId: e.id,
				onClose: () => {}
			}) })
		})
	}) })] })] });
}
function ta({ appList: e, posMap: t, activeDrag: n, maxRows: r, maxCols: i, cellW: a, cellH: o, desktopSortBy: s = "none" }) {
	let c = e.map((e, n) => {
		let i = t[e.id], a = n, o = !1;
		if (i && s === "none") {
			let e = Math.max(0, Math.round((i.x - 20) / 108)), t = Math.max(0, Math.min(r - 1, Math.round((i.y - 20) / 124)));
			a = e * r + t, o = !0;
		}
		return {
			appId: e.id,
			hasStored: o,
			preferredIndex: a,
			originalIndex: n
		};
	}), l = -1;
	if (n) {
		let e = Math.max(0, Math.min(i - 1, Math.round((n.x - 20) / a))), t = Math.max(0, Math.min(r - 1, Math.round((n.y - 20) / o)));
		l = e * r + t;
	}
	let u = c.filter((e) => !n || e.appId !== n.appId);
	u.sort((e, t) => e.preferredIndex === t.preferredIndex ? e.hasStored === t.hasStored ? e.originalIndex - t.originalIndex : e.hasStored ? -1 : 1 : e.preferredIndex - t.preferredIndex);
	let d = /* @__PURE__ */ new Set();
	l !== -1 && d.add(l);
	let f = {};
	for (let e of u) {
		let t = e.preferredIndex;
		for (; d.has(t);) t++;
		d.add(t), f[e.appId] = t;
	}
	n && l !== -1 && (f[n.appId] = l);
	let p = {};
	for (let e in f) {
		let t = f[e], n = Math.floor(t / r), i = t % r;
		p[e] = {
			x: n * a + 20,
			y: i * o + 20
		};
	}
	return {
		coords: p,
		hoveredIndex: l
	};
}
function na({ onOpenApp: e }) {
	let { config: t } = T(), n = ot(), r = F((e) => e.apps), i = F((e) => e.iconLayout), a = F((e) => e.setIconLayout), o = F((e) => e.desktopIconSize), s = F((e) => e.desktopGridSpacing), c = F((e) => e.desktopLabelPosition), l = F((e) => e.desktopSortBy), u = G(null), { getAppName: d } = B(), [f, p] = K(null), [m, h] = K(/* @__PURE__ */ new Set()), [g, _] = K(null), [v, y] = K({}), b = G(!1), x = 108, S = 124;
	if (c === "bottom") {
		let e = 44 + (s - 50) * .8, t = 32 + (s - 50) * .8;
		x = o + e, S = o + 28 + t;
	} else {
		let e = 32 + (s - 50) * .8, t = 20 + (s - 50) * .8;
		x = o + 80 + e, S = o + t;
	}
	let C = Math.max(0, n.height - t.layout.desktopInsets.top - t.layout.desktopInsets.bottom), w = Math.max(0, n.width - t.layout.desktopInsets.left - t.layout.desktopInsets.right), E = Math.max(1, Math.floor((C - 40) / S)), D = Math.max(1, Math.floor((w - 40) / x)), O = [...Object.values(r).filter((e) => !e.disabled)];
	l === "name" ? O.sort((e, t) => {
		let n = d(e.id, e.name), r = d(t.id, t.name);
		return n.localeCompare(r);
	}) : l === "kind" && O.sort((e, t) => {
		let n = e.category ?? "Other", r = t.category ?? "Other", i = n.localeCompare(r);
		return i === 0 ? d(e.id, e.name).localeCompare(d(t.id, t.name)) : i;
	});
	let k = {};
	for (let e of i) k[e.appId] = {
		x: e.x,
		y: e.y
	};
	let A = G(m);
	A.current = m;
	let j = G(O);
	j.current = O;
	let M = {}, N = -1;
	if (f && m.has(f.appId)) {
		let e = v[f.appId] || {
			x: f.x,
			y: f.y
		}, t = f.x - e.x, n = f.y - e.y, { coords: r } = ta({
			appList: O.filter((e) => !m.has(e.id)),
			posMap: k,
			activeDrag: null,
			maxRows: E,
			maxCols: D,
			cellW: x,
			cellH: S,
			desktopSortBy: l
		});
		for (let e of O) if (m.has(e.id)) {
			let r = v[e.id] || {
				x: 0,
				y: 0
			};
			M[e.id] = {
				x: r.x + t,
				y: r.y + n
			};
		} else M[e.id] = r[e.id] || {
			x: 20,
			y: 20
		};
		let i = Math.max(0, Math.min(D - 1, Math.round((f.x - 20) / x))), a = Math.max(0, Math.min(E - 1, Math.round((f.y - 20) / S)));
		N = i * E + a;
	} else {
		let e = ta({
			appList: O,
			posMap: k,
			activeDrag: f,
			maxRows: E,
			maxCols: D,
			cellW: x,
			cellH: S,
			desktopSortBy: l
		});
		M = e.coords, N = e.hoveredIndex;
	}
	W(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = e.target;
			if (t.closest("[id^=\"window-\"]") || t.closest("[data-windowchrome=\"true\"]") || t.closest("[data-menubar=\"true\"]") || t.closest("[data-dock=\"true\"]") || t.closest("[data-widget=\"true\"]") || t.closest("[data-app-icon=\"true\"]") || t.closest("[data-menu-portal=\"true\"]") || t.closest("[data-radix-popper-content-wrapper]") || !u.current) return;
			let n = u.current.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top, a = e.shiftKey || e.metaKey || e.ctrlKey;
			a || h(/* @__PURE__ */ new Set()), _({
				startX: r,
				startY: i,
				currentX: r,
				currentY: i
			}), b.current = !0;
			let s = (e) => {
				if (!b.current || !u.current) return;
				let t = u.current.getBoundingClientRect(), n = e.clientX - t.left, s = e.clientY - t.top;
				_((e) => e ? {
					...e,
					currentX: n,
					currentY: s
				} : null);
				let l = Math.min(r, n), d = Math.min(i, s), f = Math.max(r, n), p = Math.max(i, s), m = c === "bottom" ? o + 24 : o + 104, g = c === "bottom" ? o + 40 : o + 24, v = new Set(a ? A.current : []);
				for (let e of j.current) {
					let t = M[e.id];
					if (!t) continue;
					let n = t.x, r = t.y, i = t.x + m, o = t.y + g;
					l < i && f > n && d < o && p > r ? v.add(e.id) : a || v.delete(e.id);
				}
				h(v);
			}, l = () => {
				b.current = !1, _(null), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", l);
			};
			window.addEventListener("pointermove", s), window.addEventListener("pointerup", l);
		};
		return window.addEventListener("pointerdown", e), () => {
			window.removeEventListener("pointerdown", e);
		};
	}, [
		c,
		o,
		M
	]);
	let ee = (e, t) => {
		t.shiftKey || t.metaKey || t.ctrlKey ? h((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		}) : m.has(e) || h(/* @__PURE__ */ new Set([e]));
	}, te = (e) => {
		h(/* @__PURE__ */ new Set([e]));
	}, P = (e) => {
		let t = m;
		m.has(e) || (t = /* @__PURE__ */ new Set([e]), h(t));
		let n = {};
		for (let e of t) n[e] = M[e] || {
			x: 0,
			y: 0
		};
		y(n), p({
			appId: e,
			x: M[e]?.x || 0,
			y: M[e]?.y || 0
		});
	}, ne = (e, t, n) => {
		let r = v[e];
		if (!r) {
			p(null);
			return;
		}
		let i = m.has(e) ? m : /* @__PURE__ */ new Set([e]), o = {};
		for (let e of O) {
			let a = k[e.id] || {
				x: 20,
				y: 20
			};
			if (i.has(e.id)) {
				let i = Math.round((a.x - 20) / 108), s = Math.round((a.y - 20) / 124), c = Math.round((r.x - 20) / x), l = Math.round((r.y - 20) / S), u = Math.round((t - 20) / x), d = Math.round((n - 20) / S), f = u - c, p = d - l, m = Math.max(0, i + f), h = Math.max(0, s + p);
				o[e.id] = {
					x: m * x + 20,
					y: h * S + 20
				};
			} else o[e.id] = { ...a };
		}
		let { coords: s } = ta({
			appList: O,
			posMap: o,
			activeDrag: null,
			maxRows: E,
			maxCols: D,
			cellW: x,
			cellH: S,
			desktopSortBy: l
		}), c = O.map((e) => {
			let t = Math.round((s[e.id].x - 20) / x), n = Math.round((s[e.id].y - 20) / S);
			return {
				appId: e.id,
				x: t * 108 + 20,
				y: n * 124 + 20
			};
		});
		a(c), p(null), y({});
	};
	return /* @__PURE__ */ Y("div", {
		ref: u,
		className: "absolute inset-0 pointer-events-none select-none z-10",
		style: {
			top: "var(--desktop-inset-top)",
			right: "var(--desktop-inset-right)",
			bottom: "var(--desktop-inset-bottom)",
			left: "var(--desktop-inset-left)"
		},
		children: [
			g && /* @__PURE__ */ J("div", {
				className: "absolute rounded-sm pointer-events-none",
				style: {
					left: Math.min(g.startX, g.currentX),
					top: Math.min(g.startY, g.currentY),
					width: Math.abs(g.startX - g.currentX),
					height: Math.abs(g.startY - g.currentY),
					border: "0.75px solid rgba(255, 255, 255, 0.28)",
					backgroundColor: "rgba(255, 255, 255, 0.08)",
					boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)"
				}
			}),
			f && (() => {
				let e = m.has(f.appId), t = e ? Array.from(m) : [f.appId], n = v[f.appId] || {
					x: f.x,
					y: f.y
				}, i = Math.round((n.x - 20) / x), a = Math.round((n.y - 20) / S), s = Math.floor(N / E), l = N % E, u = c === "bottom" ? o + 24 : o + 104, p = c === "bottom" ? o + 40 : o + 24;
				return /* @__PURE__ */ J(q, { children: t.map((t) => {
					let n = r[t];
					if (!n) return null;
					let c = v[t] || {
						x: 0,
						y: 0
					}, f = Math.round((c.x - 20) / x), m = Math.round((c.y - 20) / S), h = e ? f - i : 0, g = e ? m - a : 0, _ = s + h, y = l + g;
					if (_ < 0 || _ >= D || y < 0 || y >= E) return null;
					let b = _ * x + 20, C = y * S + 20, w = d(n.id, n.name);
					return /* @__PURE__ */ Y("div", {
						className: "absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5 z-30",
						style: {
							left: b + (x - u) / 2,
							top: C + (S - p) / 2,
							width: u,
							height: p,
							transition: "left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)"
						},
						children: [/* @__PURE__ */ J("div", {
							className: "opacity-20 scale-75 select-none pointer-events-none",
							children: /* @__PURE__ */ J(R, {
								appConfig: n,
								size: o
							})
						}), /* @__PURE__ */ J("span", {
							className: "block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate opacity-20 mt-2 select-none pointer-events-none",
							style: { textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)" },
							children: w
						})]
					}, `ghost-${t}`);
				}) });
			})(),
			O.map((t) => {
				let { x: n, y: r } = M[t.id] || {
					x: 0,
					y: 0
				};
				return /* @__PURE__ */ J(ea, {
					appConfig: t,
					x: n,
					y: r,
					isSelected: m.has(t.id),
					onOpen: e,
					onSelect: ee,
					onUpAfterClick: te,
					onDragStart: () => P(t.id),
					onDrag: (e, n) => p({
						appId: t.id,
						x: e,
						y: n
					}),
					onDrop: (e, n) => ne(t.id, e, n)
				}, t.id);
			})
		]
	});
}
//#endregion
//#region src/types/widget.ts
var ra = {
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
}, ia = [{
	id: "weather",
	appId: "__built-in__",
	name: "Weather",
	description: "Current weather conditions",
	sizes: ["small", "medium"],
	componentKey: "WeatherWidget"
}], aa = [...oe.flatMap((e) => (e.widgets ?? []).map((t) => ({
	...t,
	appId: e.id
}))), ...ia];
[...new Set(aa.map((e) => e.appId))];
function oa(e) {
	return aa.find((t) => t.id === e);
}
//#endregion
//#region src/components/widgets/WidgetRenderer.tsx
var sa = {
	ClockWidget: H(() => import("./ClockWidget-Dqodytrk.js").then((e) => ({ default: e.ClockWidget }))),
	ClockDarkWidget: H(() => import("./ClockWidget-Dqodytrk.js").then((e) => ({ default: e.ClockDarkWidget }))),
	ClockWorldWidget: H(() => import("./ClockWidget-Dqodytrk.js").then((e) => ({ default: e.ClockWorldWidget }))),
	ClockDigitalWidget: H(() => import("./ClockWidget-Dqodytrk.js").then((e) => ({ default: e.ClockDigitalWidget }))),
	ClockFlipWidget: H(() => import("./ClockWidget-Dqodytrk.js").then((e) => ({ default: e.ClockFlipWidget }))),
	CalendarWidget: H(() => import("./CalendarWidget-BNqpwJ6L.js").then((e) => ({ default: e.CalendarWidget }))),
	CalendarTodayWidget: H(() => import("./CalendarWidget-BNqpwJ6L.js").then((e) => ({ default: e.CalendarTodayWidget }))),
	WeatherWidget: H(() => import("./WeatherWidget-D4EQ_pKf.js").then((e) => ({ default: e.WeatherWidget }))),
	NotesWidget: H(() => import("./NotesWidget-CWxNXfe-.js").then((e) => ({ default: e.NotesWidget })))
};
function ca({ componentKey: e, size: t }) {
	let n = sa[e];
	return n ? /* @__PURE__ */ J(Ye, {
		fallback: /* @__PURE__ */ J("div", { className: "w-full h-full rounded-[20px] bg-white/5 animate-pulse" }),
		children: /* @__PURE__ */ J(n, { size: t })
	}) : /* @__PURE__ */ J("div", {
		className: "w-full h-full flex items-center justify-center text-white/30 text-xs rounded-[20px] bg-white/5",
		children: "Unknown widget"
	});
}
//#endregion
//#region src/components/widgets/WidgetCard.tsx
var la = 4;
function ua({ instance: e }) {
	let t = F((e) => e.moveWidget), n = F((e) => e.removeWidget), r = F((e) => e.isEditingWidgets), i = oa(e.definitionId), { w: a, h: o } = ra[e.size], [s, c] = K({
		x: e.x,
		y: e.y
	}), l = G(null);
	return i ? /* @__PURE__ */ Y(x.div, {
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
				!l.current.moved && Math.hypot(t, n) < la || (l.current.moved = !0, c({
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
			children: /* @__PURE__ */ J(z, { className: "w-3 h-3 text-white" })
		}), /* @__PURE__ */ J("div", {
			className: "w-full h-full cursor-grab active:cursor-grabbing",
			children: /* @__PURE__ */ J(O, {
				variant: "widget",
				className: "w-full h-full",
				children: /* @__PURE__ */ J(ca, {
					componentKey: i.componentKey,
					size: e.size
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/widgets/WidgetLayer.tsx
function da() {
	let e = F((e) => e.widgetInstances);
	return /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: F((e) => e.isEditingWidgets) ? 1001 : 2 },
		children: /* @__PURE__ */ J(P, { children: e.map((e) => /* @__PURE__ */ J(x.div, {
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
			children: /* @__PURE__ */ J(ua, { instance: e })
		}, e.instanceId)) })
	});
}
//#endregion
//#region src/components/widgets/WidgetGalleryPanel.tsx
function fa({ ghost: e }) {
	let { w: t, h: n } = ra[e.size];
	return $e(/* @__PURE__ */ J("div", {
		className: "fixed pointer-events-none z-[99999] rounded-[20px] overflow-hidden opacity-80",
		style: {
			left: e.x - t / 2,
			top: e.y - n / 2,
			width: t,
			height: n
		},
		children: /* @__PURE__ */ J(O, {
			variant: "widget",
			className: "w-full h-full",
			children: /* @__PURE__ */ J(ca, {
				componentKey: e.def.componentKey,
				size: e.size
			})
		})
	}), document.body);
}
function pa({ def: e, size: t, onDragStart: n, cardIndex: r }) {
	let { w: i, h: a } = ra[t], o = Math.min(140 / i, 110 / a), s = Math.round(i * o), c = Math.round(a * o), [l, u] = K(!1);
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
				children: /* @__PURE__ */ J(O, {
					variant: "widget",
					className: "w-full h-full",
					children: l ? /* @__PURE__ */ J(ca, {
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
function ma({ appId: e, selected: t, onClick: n }) {
	let r = F((e) => e.apps), { t: i, getAppName: a } = B(), o = e === "__built-in__" ? null : r[e], s = o ? a(o.id, o.name) : i.builtIn;
	return /* @__PURE__ */ Y("button", {
		onClick: n,
		className: I("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", t ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
		children: [o ? /* @__PURE__ */ J(R, {
			appConfig: o,
			size: 20,
			className: "rounded-md shrink-0"
		}) : /* @__PURE__ */ J("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" }), /* @__PURE__ */ J("span", {
			className: "text-[13px] truncate",
			children: s
		})]
	});
}
function ha() {
	let e = F((e) => e.closeWidgetGallery), t = F((e) => e.addWidget), n = F((e) => e.apps), { t: r, getAppName: i, getWidgetName: a, getWidgetDescription: o } = B(), [s, c] = K(""), [l, u] = K("__all__"), [d, f] = K(null), [p, m] = K(!1), h = G(null), g = G(null);
	W(() => {
		let e = setTimeout(() => {
			m(!0);
		}, 200);
		return () => clearTimeout(e);
	}, []);
	let _ = [...new Set(aa.map((e) => e.appId))], v = aa.filter((e) => {
		let t = l === "__all__" || e.appId === l, r = s.toLowerCase(), c = !r || a(e.id, e.name).toLowerCase().includes(r) || o(e.id, e.description ?? "").toLowerCase().includes(r) || i(e.appId, n[e.appId]?.name ?? "").toLowerCase().includes(r);
		return t && c;
	}), y = {};
	for (let e of v) y[e.appId] || (y[e.appId] = []), y[e.appId].push(e);
	let b = U((e, n, r, i) => {
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
				let { def: n, size: r } = g.current, { w: i, h: a } = ra[r];
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
	let S = d !== null;
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(x.div, {
			className: "fixed inset-0 z-[1000] bg-black/20 dark:bg-black/50",
			initial: { opacity: 0 },
			animate: { opacity: +!S },
			exit: { opacity: 0 },
			onClick: e
		}),
		/* @__PURE__ */ J(x.div, {
			ref: h,
			className: "fixed bottom-0 left-1/2 z-[1002] flex flex-col w-full max-w-[960px]",
			style: { height: "58vh" },
			initial: {
				y: "100%",
				x: "-50%"
			},
			animate: {
				y: S ? "110%" : 0,
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
			children: /* @__PURE__ */ J(O, {
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
										/* @__PURE__ */ J(Ge, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30" }),
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
											children: /* @__PURE__ */ J(z, { className: "w-3 h-3" })
										})
									]
								}),
								/* @__PURE__ */ Y("button", {
									onClick: () => u("__all__"),
									className: I("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", l === "__all__" ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
									children: [/* @__PURE__ */ J("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" }), /* @__PURE__ */ J("span", {
										className: "text-[13px]",
										children: r.allWidgets
									})]
								}),
								_.map((e) => /* @__PURE__ */ J(ma, {
									appId: e,
									selected: l === e,
									onClick: () => u(e)
								}, e))
							]
						}), /* @__PURE__ */ J("div", {
							className: "flex-1 overflow-y-auto p-4",
							children: p ? Object.keys(y).length === 0 ? /* @__PURE__ */ J("div", {
								className: "flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm",
								children: r.noWidgetsFound
							}) : (() => {
								let e = 0;
								return Object.entries(y).map(([t, o]) => {
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
													return /* @__PURE__ */ J(pa, {
														def: t,
														size: n,
														onDragStart: b,
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
		/* @__PURE__ */ J(P, { children: d && /* @__PURE__ */ J(fa, { ghost: d }) })
	] });
}
//#endregion
//#region src/components/macOS/Spotlight.tsx
function ga({ open: e, onClose: t }) {
	let [n, r] = K(""), [i, a] = K(0), o = G(null), s = F((e) => e.apps), c = F((e) => e.launchApp), { t: l, getAppName: u } = B();
	W(() => {
		e && (Xe(() => {
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
	return /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(x.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9990] bg-black/30 backdrop-blur-sm",
		onClick: t
	}), /* @__PURE__ */ J(x.div, {
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
		children: /* @__PURE__ */ Y(O, {
			variant: "window",
			className: "overflow-hidden shadow-2xl",
			children: [
				/* @__PURE__ */ Y("div", {
					className: "flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ J(Ge, { className: "w-5 h-5 text-black/40 dark:text-white/40 shrink-0" }),
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
							children: /* @__PURE__ */ J(z, { className: "w-3.5 h-3.5" })
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
						className: I("flex items-center gap-3 w-full px-4 py-2 text-left transition-colors", t === i ? "bg-blue-500 text-white" : "hover:bg-black/5 dark:hover:bg-white/5"),
						children: [e.app && /* @__PURE__ */ J(R, {
							appConfig: e.app,
							size: 32
						}), /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", {
							className: I("text-[13px] font-medium", t === i ? "text-white" : ""),
							children: e.label
						}), e.subtitle && /* @__PURE__ */ J("p", {
							className: I("text-[11px]", t === i ? "text-white/70" : "text-black/40 dark:text-white/40"),
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
function _a({ open: e, onClose: t }) {
	let n = F((e) => e.apps), r = F((e) => e.runningAppIds), i = F((e) => e.launchApp), a = F((e) => e.dockAppIds), { getAppName: o } = B(), s = Array.from(/* @__PURE__ */ new Set([...r, ...a])).map((e) => n[e]).filter(Boolean), [c, l] = K(0);
	return W(() => {
		if (!e) return;
		Xe(() => {
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
	]), /* @__PURE__ */ J(P, { children: e && /* @__PURE__ */ J(x.div, {
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
		children: /* @__PURE__ */ Y(O, {
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
					children: [/* @__PURE__ */ J(x.div, {
						animate: { scale: n === c ? 1.15 : 1 },
						transition: {
							type: "spring",
							stiffness: 600,
							damping: 30
						},
						children: /* @__PURE__ */ J(R, {
							appConfig: e,
							size: 52
						})
					}), /* @__PURE__ */ J("span", {
						className: I("text-[11px] font-medium truncate max-w-[60px] text-center", n === c ? "text-white" : "text-white/70"),
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
function va({ notification: e, onDismiss: t }) {
	let n = F((e) => e.launchApp), r = F((e) => e.apps), { osTheme: i } = T(), a = i === "windows";
	return W(() => {
		let e = setTimeout(t, 5e3);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ Y(x.div, {
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
		className: I("flex items-start gap-3 w-80 p-3 cursor-pointer select-none", "bg-white/88 dark:bg-[#151821]/90 backdrop-blur-2xl", "border border-black/10 dark:border-white/8", "shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]", a ? "rounded-lg" : "rounded-2xl"),
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
				children: /* @__PURE__ */ J(z, { className: "w-3 h-3" })
			})
		]
	});
}
function ya() {
	let e = F((e) => e.notifications), t = F((e) => e.dismissNotification), { osTheme: n } = T(), r = e.filter((e) => !e.read).slice(0, 3), i = U((e) => {
		t(e);
	}, [t]);
	return /* @__PURE__ */ J("div", {
		className: I("fixed z-[9999] flex flex-col gap-2 pointer-events-none", n === "windows" ? "bottom-14 right-4" : n === "iphone" || n === "android" ? "top-12 inset-x-4" : "top-8 right-4"),
		children: /* @__PURE__ */ J(P, {
			mode: "popLayout",
			children: r.map((e) => /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(va, {
					notification: e,
					onDismiss: () => i(e.id)
				})
			}, e.id))
		})
	});
}
//#endregion
//#region src/hooks/useKeyboardShortcuts.ts
function ba({ onSpotlight: e, onAppSwitcher: t } = {}) {
	let n = F((e) => e.closeWindow), r = F((e) => e.minimizeWindow), i = F((e) => e.focusedWindowId), a = F((e) => e.osTheme);
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
var xa = {
	"5m": 5 * 6e4,
	"10m": 10 * 6e4,
	"30m": 30 * 6e4,
	"1h": 60 * 6e4,
	"2h": 120 * 6e4,
	"5h": 300 * 6e4,
	"1d": 1440 * 6e4
};
function Sa() {
	let e = F((e) => e.wallpaperCycle), t = F((e) => e.customWallpapers), n = F((e) => e.wallpaperId), r = F((e) => e.setWallpaper), i = Se(), a = G(0);
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
		}, xa[e.interval]);
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
function Ca(e) {
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
//#region src/components/themes/ThemeProvider.tsx
function wa({ apps: e, isSimpleMode: t = !1 } = {}) {
	let n = F((e) => e.osTheme), r = F((e) => e.colorScheme), i = F((e) => e.resolvedColorScheme), a = F((e) => e.resolveColorScheme), o = F((e) => e.registerApps), s = F((e) => e.launchApp), c = F((e) => e.glassEnabled), l = F((e) => e.isEditingWidgets), u = F((e) => e.accentColor), d = F((e) => e.highlightColor), [f, p] = K(!1), [m, h] = K(!1), [g, _] = K(!1);
	W(() => {
		let e = () => {
			let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = window.innerWidth <= 768;
			_(e || t);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), ba({
		onSpotlight: () => p((e) => !e),
		onAppSwitcher: () => h((e) => !e)
	}), Sa();
	let v = e ?? (t ? [] : oe);
	W(() => {
		o(v);
	}, [o, v]), W(() => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			a(e.matches);
		};
		return a(e.matches), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [r, a]);
	let y = t ? "macos" : n;
	W(() => {
		let e = document.documentElement;
		e.setAttribute("data-os-theme", y), e.setAttribute("data-glass", c ? "true" : "false"), e.classList.toggle("dark", i === "dark");
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
		}[u] || "#007afe";
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
		r = d === "automatic" ? n[u === "multicolor" ? "blue" : u] || "rgba(0, 122, 254, 0.25)" : n[d] || "rgba(0, 122, 254, 0.25)", e.style.setProperty("--highlight-color", r);
	}, [
		y,
		i,
		c,
		u,
		d
	]);
	let b = U((e) => {
		s(e);
	}, [s]), S = y === "macos" || y === "ipad", C = y !== "ipad" && y !== "iphone" && y !== "android", T = y === "iphone" || y === "android", E = w[y];
	return t && y === "macos" && (E = {
		...E,
		hasDock: !1,
		layout: {
			...E.layout,
			desktopInsets: {
				top: 28,
				right: 0,
				bottom: 0,
				left: 0
			},
			chrome: {
				...E.layout.chrome,
				dockHeight: 0,
				dockOffsetBottom: 0
			},
			window: {
				...E.layout.window,
				maximizeInsets: {
					top: 28,
					bottom: 0
				}
			}
		}
	}), /* @__PURE__ */ Y("div", {
		className: I("w-full h-full overflow-hidden relative select-none", i === "dark" && "dark"),
		"data-os-theme": y,
		"data-glass": c ? "true" : "false",
		style: Ca(E),
		onContextMenu: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ J(at, {}),
			/* @__PURE__ */ J(ya, {}),
			S && !t && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(ga, {
				open: f,
				onClose: () => p(!1)
			}), /* @__PURE__ */ J(_a, {
				open: m,
				onClose: () => h(!1)
			})] }),
			T ? /* @__PURE__ */ J("div", {
				className: I("absolute inset-0 flex items-center justify-center", g ? "bg-transparent" : "bg-black/60"),
				children: /* @__PURE__ */ Y("div", {
					className: I("relative overflow-hidden", !g && "shadow-2xl ring-1 ring-white/10"),
					style: {
						height: g ? "100%" : "min(calc(100dvh - 32px), 926px)",
						width: g ? "100%" : "min(calc((min(calc(100dvh - 32px), 926px)) * 0.4612676056338028), 100vw)",
						borderRadius: g ? "0px" : "min(44px, calc(min(calc(100dvh - 32px), 926px) * 0.047))"
					},
					children: [/* @__PURE__ */ J(Yi, { children: null }), /* @__PURE__ */ J(P, {
						mode: "wait",
						children: /* @__PURE__ */ Y(x.div, {
							className: "absolute inset-0",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: { duration: .2 },
							children: [y === "iphone" && /* @__PURE__ */ J(Rr, { onOpenApp: b }), y === "android" && /* @__PURE__ */ J(Zr, { onOpenApp: b })]
						}, y)
					})]
				})
			}) : /* @__PURE__ */ Y(q, { children: [
				/* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					children: /* @__PURE__ */ Y(Yi, {
						isSimpleMode: t,
						children: [
							!t && /* @__PURE__ */ J(da, {}),
							C && /* @__PURE__ */ J(na, { onOpenApp: b }, "icon-grid"),
							/* @__PURE__ */ J(tn, {}, "window-manager")
						]
					})
				}),
				/* @__PURE__ */ J(P, { children: !t && l && /* @__PURE__ */ J(ha, {}) }),
				/* @__PURE__ */ J(P, {
					mode: "wait",
					children: /* @__PURE__ */ Y(x.div, {
						className: "absolute inset-0 pointer-events-none",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .2 },
						children: [
							y === "macos" && /* @__PURE__ */ J(ur, {
								isSimpleMode: t,
								onOpenApp: b,
								onSpotlight: t ? void 0 : () => p(!0),
								onAppSwitcher: t ? void 0 : () => h(!0)
							}),
							y === "ipad" && /* @__PURE__ */ J(Tr, { onOpenApp: b }),
							y === "windows" && /* @__PURE__ */ J(Wr, { onOpenApp: b })
						]
					}, y)
				})
			] })
		]
	});
}
//#endregion
//#region src/hooks/useMenuAction.ts
function Ta(e, t, n) {
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
function Ea(e, t) {
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
function Da() {
	let e = _e();
	return W(() => {
		e && e.checkUpdate().then(fe.getState().setStatus).catch(() => {});
	}, [e]), null;
}
function Oa({ assetBaseUrl: e = "", apps: t, onImportWallpaper: n, wallpapers: r, updateActions: i, isSimpleMode: a }) {
	return /* @__PURE__ */ J(le, {
		value: e,
		children: /* @__PURE__ */ J(ue, {
			value: he(r),
			children: /* @__PURE__ */ J(ye, {
				value: n ?? null,
				children: /* @__PURE__ */ Y(xe, {
					value: i ?? null,
					children: [/* @__PURE__ */ J(Da, {}), /* @__PURE__ */ J(wa, {
						apps: t,
						isSimpleMode: a
					})]
				})
			})
		})
	});
}
//#endregion
export { oe as APPS_CONFIG, Oa as DeviceLayout, de as hasAvailableUpdate, ve as resolveAssetUrl, be as useAssetBase, Ea as useContextAction, Ta as useMenuAction, F as useStore, fe as useUpdateStatusStore };
