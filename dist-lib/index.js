"use client";
import { C as e, S as t, a as n, b as r, c as i, d as a, g as o, h as s, i as c, l, m as u, o as d, r as f, s as p, u as m, y as h } from "./Combination-dkRdWOFm.js";
import { C as g, D as _, E as v, S as y, T as b, _ as x, a as S, b as C, c as w, f as T, g as E, h as D, i as O, l as k, m as A, o as j, r as M, s as N, t as ee, u as P, v as F, w as I, x as te, y as ne } from "./MobileAppViewer-D2OFDRdP.js";
import { c as re, d as ie, l as ae, s as oe, t as L, u as se } from "./store-XIGE1L5-.js";
import { t as R } from "./utils-B6YmNDS2.js";
import { t as z } from "./createLucideIcon--WjuKCts.js";
import { a as ce, c as le, d as ue, f as de, g as fe, h as pe, i as me, l as he, m as ge, n as _e, o as ve, p as B, r as ye, s as be, t as xe, u as Se } from "./update-actions-D2oAbW0z.js";
import { t as Ce } from "./check-DoT5IS9-.js";
import { t as we } from "./chevron-right-BcSxNxws.js";
import { t as Te } from "./grid-3x3-CZiMuCC6.js";
import { t as Ee } from "./monitor-CDDW7biH.js";
import { _ as De, a as Oe, c as ke, d as Ae, f as je, g as Me, h as Ne, i as Pe, l as Fe, m as Ie, n as Le, o as Re, p as ze, r as Be, s as Ve, t as He, u as Ue, v as We } from "./dist-Bo4kSy1Q.js";
import { t as Ge } from "./search-BKG97C0x.js";
import { t as Ke } from "./sun-DdSv2tyc.js";
import { t as qe } from "./volume-2-DAfADR-a.js";
import { t as V } from "./x-BYw6fhgP.js";
import { t as H } from "./useTranslation-BJqtZQcf.js";
import * as U from "react";
import Je, { Suspense as Ye, lazy as Xe, startTransition as Ze, useCallback as W, useContext as Qe, useEffect as G, useInsertionEffect as $e, useMemo as et, useRef as K, useState as q } from "react";
import { Fragment as J, jsx as Y, jsxs as X } from "react/jsx-runtime";
import { createPortal as tt } from "react-dom";
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/follow-value.mjs
function nt(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, l = () => {
		let t = it(e.get()), r = it(a);
		if (t === r) {
			c();
			return;
		}
		let s = i ? i.getGeneratorVelocity() : e.getVelocity();
		c(), i = new v({
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
		a = e, o = (e) => t(rt(e, s)), _.postRender(u);
	}, c), b(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(rt(t, s), !1)) : e.set(rt(t, s));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return c;
}
function rt(e, t) {
	return t ? e + t : e;
}
function it(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function at(e, t = {}) {
	let { isStatic: n } = Qe(I), r = () => b(e) ? e.get() : e;
	if (n) return C(r);
	let i = te(r());
	return $e(() => nt(i, e, t), [i, JSON.stringify(t)]), i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-spring.mjs
function ot(e, t = {}) {
	return at(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region src/components/liquid-glass/GlassFilter.tsx
function st() {
	return /* @__PURE__ */ Y("svg", {
		"aria-hidden": !0,
		style: {
			position: "absolute",
			width: 0,
			height: 0,
			overflow: "hidden"
		},
		children: /* @__PURE__ */ X("defs", { children: [/* @__PURE__ */ X("filter", {
			id: "lg-distort",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ Y("feGaussianBlur", {
					in: "SourceAlpha",
					stdDeviation: "5",
					result: "edge_blur"
				}),
				/* @__PURE__ */ Y("feSpecularLighting", {
					in: "edge_blur",
					surfaceScale: "5",
					specularConstant: "1.8",
					specularExponent: "45",
					lightingColor: "#ffffff",
					result: "specular",
					children: /* @__PURE__ */ Y("feDistantLight", {
						azimuth: 225,
						elevation: 60
					})
				}),
				/* @__PURE__ */ Y("feComposite", {
					in: "specular",
					in2: "SourceAlpha",
					operator: "in",
					result: "specular_masked"
				}),
				/* @__PURE__ */ Y("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.015",
					numOctaves: 2,
					seed: 5,
					result: "noise"
				}),
				/* @__PURE__ */ Y("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "noise",
					scale: 28,
					xChannelSelector: "R",
					yChannelSelector: "G",
					result: "refracted"
				}),
				/* @__PURE__ */ Y("feColorMatrix", {
					in: "refracted",
					type: "saturate",
					values: "2.2",
					result: "refracted_saturated"
				}),
				/* @__PURE__ */ Y("feBlend", {
					in: "specular_masked",
					in2: "refracted_saturated",
					mode: "screen"
				})
			]
		}), /* @__PURE__ */ X("filter", {
			id: "glass-distortion",
			x: "-20%",
			y: "-20%",
			width: "140%",
			height: "140%",
			colorInterpolationFilters: "sRGB",
			children: [
				/* @__PURE__ */ Y("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.001 0.005",
					numOctaves: 1,
					seed: 17,
					result: "turbulence"
				}),
				/* @__PURE__ */ X("feComponentTransfer", {
					in: "turbulence",
					result: "mapped",
					children: [
						/* @__PURE__ */ Y("feFuncR", {
							type: "gamma",
							amplitude: "1",
							exponent: 10,
							offset: .5
						}),
						/* @__PURE__ */ Y("feFuncG", {
							type: "gamma",
							amplitude: 0,
							exponent: 1,
							offset: 0
						}),
						/* @__PURE__ */ Y("feFuncB", {
							type: "gamma",
							amplitude: 0,
							exponent: 1,
							offset: .5
						})
					]
				}),
				/* @__PURE__ */ Y("feGaussianBlur", {
					in: "turbulence",
					stdDeviation: "3",
					result: "softMap"
				}),
				/* @__PURE__ */ Y("feSpecularLighting", {
					in: "softMap",
					surfaceScale: "5",
					specularConstant: 1,
					specularExponent: 100,
					lightingColor: "white",
					result: "specLight",
					children: /* @__PURE__ */ Y("fePointLight", {
						x: -200,
						y: -200,
						z: 300
					})
				}),
				/* @__PURE__ */ Y("feComposite", {
					in: "specLight",
					operator: "arithmetic",
					k1: 0,
					k2: 1,
					k3: 1,
					k4: 0,
					result: "litImage"
				}),
				/* @__PURE__ */ Y("feDisplacementMap", {
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
function ct() {
	let [e, t] = q({
		width: typeof window < "u" ? window.innerWidth : 1280,
		height: typeof window < "u" ? window.innerHeight : 800
	});
	return G(() => {
		let e = () => t({
			width: window.innerWidth,
			height: window.innerHeight
		});
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), e;
}
var lt = z("bell-off", [
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
]), ut = z("bluetooth", [["path", {
	d: "m7 7 10 10-5 5V2l5 5L7 17",
	key: "1q5490"
}]]), dt = z("cast", [
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
]), ft = z("copy", [["rect", {
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
}]]), pt = z("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), mt = z("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), ht = z("flashlight", [
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
]), gt = z("grid-2x2", [
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
]), _t = z("maximize-2", [
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
]), vt = z("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), yt = z("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), bt = z("plane", [["path", {
	d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
	key: "1v9wt8"
}]]), xt = z("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), St = z("signal", [
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
]), Ct = z("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), wt = z("timer", [
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
]), Tt = z("user", [["path", {
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
function Et({ windowId: e, onPointerDown: t }) {
	let n = L((t) => t.windows[e]), r = L((e) => e.apps[n?.appId ?? ""]), i = L((e) => e.closeWindow), a = L((e) => e.minimizeWindow), o = L((e) => e.toggleMaximize), s = L((e) => e.toggleFullScreen), { config: c } = x(), l = ct(), [u, d] = q(!1), { getAppName: f } = H(), [p, m] = q("basic"), [h, g] = q(!1), [_, v] = q(!1), y = K(null), b = n?.appId === "calculator";
	if (G(() => {
		if (!b) return;
		let t = (t) => {
			let n = t;
			n.detail.windowId === e && (n.detail.mode && m(n.detail.mode), n.detail.showHistory !== void 0 && g(n.detail.showHistory));
		};
		return window.addEventListener("app:calculator:state-changed", t), () => window.removeEventListener("app:calculator:state-changed", t);
	}, [b, e]), G(() => {
		if (!_) return;
		let e = (e) => {
			y.current && !y.current.contains(e.target) && v(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [_]), !n) return null;
	let S = r?.titleBarMode === "transparent", { top: C, bottom: w } = c.layout.window.maximizeInsets, T = {
		x: 0,
		y: C,
		width: l.width,
		height: l.height - C - w
	};
	return /* @__PURE__ */ X("div", {
		"data-windowchrome": "true",
		className: R("flex items-center gap-0 h-(--window-chrome-height) px-4 shrink-0", "select-none cursor-move z-30", S ? "bg-transparent border-b-0" : R("border-b border-black/8 dark:border-white/8", n.isFocused ? "bg-neutral-100/95 dark:bg-[#151821]/97" : "bg-neutral-50/95 dark:bg-[#0F1115]/97")),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, T),
		onMouseEnter: () => d(!0),
		onMouseLeave: () => d(!1),
		children: [/* @__PURE__ */ X("div", {
			className: "flex items-center gap-2 mr-3",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ Y("button", {
					onClick: () => i(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#ff5f57" : "#d1d1d1" },
					title: "Close",
					children: u && n.isFocused && /* @__PURE__ */ Y(V, {
						className: "w-2 h-2 text-red-900/80",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ Y("button", {
					onClick: () => a(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#febc2e" : "#d1d1d1" },
					title: "Minimize",
					children: u && n.isFocused && /* @__PURE__ */ Y(vt, {
						className: "w-2 h-2 text-yellow-900/80",
						strokeWidth: 3
					})
				}),
				/* @__PURE__ */ Y("button", {
					onClick: () => s(e),
					className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
					style: { backgroundColor: n.isFocused ? "#28c840" : "#d1d1d1" },
					title: n.isFullScreen ? "Exit Full Screen" : "Enter Full Screen",
					children: u && n.isFocused && /* @__PURE__ */ Y(_t, {
						className: "w-1.5 h-1.5 text-green-900/80",
						strokeWidth: 3
					})
				})
			]
		}), S && n.appId === "calculator" ? /* @__PURE__ */ X("div", {
			className: "flex-1 flex items-center justify-between pl-6 h-full select-none",
			children: [/* @__PURE__ */ Y("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ Y("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: R("p-1.5 rounded-md transition-colors", h ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					title: "Toggle History Sidebar",
					children: /* @__PURE__ */ Y(yt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ X("div", {
				className: "relative",
				ref: y,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ X("button", {
					onClick: () => v(!_),
					className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md active:bg-black/15 transition-all",
					children: [
						/* @__PURE__ */ Y(pe, { className: "w-3.5 h-3.5 text-neutral-500" }),
						/* @__PURE__ */ Y("span", {
							className: "capitalize text-[11px]",
							children: p
						}),
						/* @__PURE__ */ Y(D, { className: "w-3 h-3 text-neutral-400" })
					]
				}), _ && /* @__PURE__ */ Y("div", {
					className: "absolute right-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl",
					children: [
						"basic",
						"scientific",
						"programmer"
					].map((t) => /* @__PURE__ */ X("button", {
						onClick: () => {
							window.dispatchEvent(new CustomEvent("app:calculator:set-mode", { detail: {
								windowId: e,
								mode: t
							} })), v(!1);
						},
						className: R("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", p === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ Y("span", {
							className: "capitalize",
							children: t
						}), p === t && /* @__PURE__ */ Y(Ce, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y("div", {
			className: "flex-1 flex items-center justify-center pointer-events-none",
			children: !S && /* @__PURE__ */ Y("span", {
				className: R("text-[13px] font-medium truncate max-w-[220px]", n.isFocused ? "text-black/75 dark:text-white/80" : "text-black/35 dark:text-white/35"),
				children: f(n.appId, n.title)
			})
		}), /* @__PURE__ */ Y("div", { className: R(S ? "w-0" : "w-[72px]") })] })]
	});
}
function Dt({ windowId: e, onPointerDown: t }) {
	let { osTheme: n } = x();
	return Y(n === "windows" ? Ot : Et, {
		windowId: e,
		onPointerDown: t
	});
}
function Ot({ windowId: e, onPointerDown: t }) {
	let n = L((t) => t.windows[e]), r = L((e) => e.apps[n?.appId ?? ""]), i = L((e) => e.closeWindow), a = L((e) => e.minimizeWindow), o = L((e) => e.toggleMaximize), s = L((e) => e.enterFullScreen), c = L((e) => e.exitFullScreen), { config: l } = x(), u = ct(), { getAppName: d } = H(), [f, p] = q("basic"), [m, h] = q(!1), [g, _] = q(!1), v = K(null), y = n?.appId === "calculator";
	if (G(() => {
		if (!y) return;
		let t = (t) => {
			let n = t;
			n.detail.windowId === e && (n.detail.mode && p(n.detail.mode), n.detail.showHistory !== void 0 && h(n.detail.showHistory));
		};
		return window.addEventListener("app:calculator:state-changed", t), () => window.removeEventListener("app:calculator:state-changed", t);
	}, [y, e]), G(() => {
		if (!g) return;
		let e = (e) => {
			v.current && !v.current.contains(e.target) && _(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [g]), !n) return null;
	let b = r?.titleBarMode === "transparent", { top: S, bottom: C } = l.layout.window.maximizeInsets, w = {
		x: 0,
		y: S,
		width: u.width,
		height: u.height - S - C
	};
	return /* @__PURE__ */ X("div", {
		"data-windowchrome": "true",
		className: R("flex items-center h-(--window-chrome-height) shrink-0 z-30", b ? "bg-transparent border-b-0" : "bg-neutral-100/98 dark:bg-[#151821]/98 border-b border-black/8 dark:border-white/8", "select-none cursor-move"),
		onPointerDown: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		onDoubleClick: () => o(e, w),
		children: [b && n.appId === "calculator" ? /* @__PURE__ */ X("div", {
			className: "flex-1 flex items-center gap-4 pl-3 h-full select-none",
			children: [/* @__PURE__ */ Y("div", {
				onPointerDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ Y("button", {
					onClick: () => {
						window.dispatchEvent(new CustomEvent("app:calculator:toggle-history", { detail: { windowId: e } }));
					},
					className: R("p-1 rounded-md transition-colors", m ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-neutral-400 hover:text-neutral-200 dark:text-neutral-500 dark:hover:text-neutral-300"),
					children: /* @__PURE__ */ Y(yt, { className: "w-4 h-4" })
				})
			}), /* @__PURE__ */ X("div", {
				className: "relative",
				ref: v,
				onPointerDown: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ X("button", {
					onClick: () => _(!g),
					className: "flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-md",
					children: [
						/* @__PURE__ */ Y(pe, { className: "w-3 h-3" }),
						/* @__PURE__ */ Y("span", {
							className: "capitalize text-[11px]",
							children: f
						}),
						/* @__PURE__ */ Y(D, { className: "w-3 h-3" })
					]
				}), g && /* @__PURE__ */ Y("div", {
					className: "absolute left-0 mt-1 w-32 rounded-md bg-white dark:bg-[#2d2a27]/98 border border-black/10 dark:border-white/10 shadow-2xl p-1.5 space-y-0.5 z-50 backdrop-blur-xl",
					children: [
						"basic",
						"scientific",
						"programmer"
					].map((t) => /* @__PURE__ */ X("button", {
						onClick: () => {
							window.dispatchEvent(new CustomEvent("app:calculator:set-mode", { detail: {
								windowId: e,
								mode: t
							} })), _(!1);
						},
						className: R("w-full text-left px-2 py-1 text-xs rounded flex items-center justify-between transition-colors", f === t ? "bg-amber-500 text-white font-semibold" : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10"),
						children: [/* @__PURE__ */ Y("span", {
							className: "capitalize",
							children: t
						}), f === t && /* @__PURE__ */ Y(Ce, { className: "w-3 h-3 text-white" })]
					}, t))
				})]
			})]
		}) : b ? /* @__PURE__ */ Y("div", { className: "flex-1 pointer-events-none" }) : /* @__PURE__ */ Y("span", {
			className: "flex-1 text-[12px] font-medium truncate text-black/75 dark:text-white/75 pl-3",
			children: d(n.appId, n.title)
		}), /* @__PURE__ */ X("div", {
			className: "flex items-center h-full pr-1",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ Y("button", {
					onClick: () => a(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ Y(vt, {
						className: "w-3.5 h-3.5",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ Y("button", {
					onClick: () => {
						n.isFullScreen || n.isMaximized ? c(e) : s(e);
					},
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70",
					title: n.isMaximized || n.isFullScreen ? "Restore" : "Fullscreen",
					children: n.isMaximized || n.isFullScreen ? /* @__PURE__ */ Y(ft, {
						className: "w-3 h-3 rotate-180",
						strokeWidth: 2
					}) : /* @__PURE__ */ Y(Ct, {
						className: "w-3 h-3",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ Y("button", {
					onClick: () => i(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ Y(V, {
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
function kt({ windowId: e }) {
	let t = L((t) => t.windows[e]), n = L((e) => e.apps), { t: r } = H(), [i, a] = q(null);
	if (!t) return null;
	let o = n[t.appId]?.menuBarMenus ?? re;
	return /* @__PURE__ */ Y("div", {
		id: `window-menubar-${e}`,
		className: "flex items-center h-7 px-2 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-0.5",
		children: o.map((e) => /* @__PURE__ */ Y(N, {
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
function At({ windowId: e }) {
	return L((t) => t.windows[e]) ? /* @__PURE__ */ Y("div", {
		id: `window-statusbar-${e}`,
		className: "flex items-center h-6 px-3 border-t border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs text-black/50 dark:text-white/50"
	}) : null;
}
//#endregion
//#region src/components/window/ResizeHandle.tsx
var jt = {
	n: "top-0 left-2 right-2 h-1",
	s: "bottom-0 left-2 right-2 h-1",
	e: "right-0 top-2 bottom-2 w-1",
	w: "left-0 top-2 bottom-2 w-1",
	ne: "top-0 right-0 w-3 h-3",
	nw: "top-0 left-0 w-3 h-3",
	se: "bottom-0 right-0 w-3 h-3",
	sw: "bottom-0 left-0 w-3 h-3"
}, Mt = [
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w",
	"nw"
];
function Nt({ getResizeHandler: e }) {
	return /* @__PURE__ */ Y(J, { children: Mt.map((t) => /* @__PURE__ */ Y(Pt, {
		edge: t,
		onPointerDown: e(t)
	}, t)) });
}
function Pt({ edge: e, onPointerDown: t }) {
	return /* @__PURE__ */ Y("div", {
		className: R("absolute z-50", jt[e], ae[e]),
		onPointerDown: t,
		"aria-hidden": !0
	});
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/vanilla/shallow.mjs
var Ft = (e) => Symbol.iterator in e, It = (e) => "entries" in e, Lt = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, Rt = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function zt(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : Ft(e) && Ft(t) ? It(e) && It(t) ? Lt(e, t) : Rt(e, t) : Lt({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4_use-sync-external-store@1.6.0_react@19.2.4_/node_modules/zustand/esm/react/shallow.mjs
function Bt(e) {
	let t = Je.useRef(void 0);
	return (n) => {
		let r = e(n);
		return zt(t.current, r) ? t.current : t.current = r;
	};
}
//#endregion
//#region src/lib/snap-events.ts
var Vt = /* @__PURE__ */ new Set();
function Ht(e) {
	return Vt.add(e), () => Vt.delete(e);
}
function Ut(e, t, n = 0, r = 0) {
	Vt.forEach((i) => i(e, t, n, r));
}
function Wt(e, t, n = 0) {
	let r = window.innerWidth, i = window.innerHeight, a = e <= 10, o = e >= r - 10, s = t <= n + 10, c = t >= i - 10;
	return s && a ? "top-left" : s && o ? "top-right" : s ? "top" : a && c ? "bottom-left" : o && c ? "bottom-right" : a ? "left" : o ? "right" : null;
}
function Gt(e, t = 0, n = 0) {
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
var Kt = 50;
function qt(e, t, n, r, i, a, o) {
	let s = Math.max(r, Math.min(i, e));
	return a && t > r && s < t ? t - s < Kt ? t : s + Kt : o && n < i && s > n ? s - n < Kt ? n : s - Kt : s;
}
function Jt({ windowId: e, x: t, y: n, width: r, height: i }) {
	let { moveWindow: a, resizeWindow: o, maximizeWindow: s, toggleMaximize: c, focusWindow: l } = L(Bt((e) => ({
		moveWindow: e.moveWindow,
		resizeWindow: e.resizeWindow,
		maximizeWindow: e.maximizeWindow,
		toggleMaximize: e.toggleMaximize,
		focusWindow: e.focusWindow
	}))), u = L((e) => e.allowDragOutOfBounds), { config: d } = x(), f = K(null);
	return { onPointerDown: W((c) => {
		if (c.button !== 0) return;
		c.preventDefault(), c.stopPropagation(), l(e), c.currentTarget.setPointerCapture(c.pointerId);
		let p = L.getState().windows[e];
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
		let m = d.layout.window.dragTopInset, h = d.layout.chrome.taskbarHeight, g = window.innerWidth, _ = window.innerHeight, v = document.getElementById(`window-${e}`), y = v?.offsetWidth ?? 600, b = v?.offsetHeight ?? 400, x = L.getState().allowDragOutOfBounds ? -(y - 200) : 0, S = L.getState().allowDragOutOfBounds ? g - Math.min(200, y) : g - y, C = m, w = L.getState().allowDragOutOfBounds ? _ - Math.min(200, b) : _ - h - b, T = f.current?.winX ?? t.get(), E = f.current?.winY ?? n.get(), D = T < x || T > S || E < C || E > w;
		f.current && (f.current.escaped = D);
		let O = (a) => {
			if (!f.current) return;
			if (f.current.pendingRestore) {
				let t = a.clientX - f.current.mouseX, n = a.clientY - f.current.mouseY;
				if (Math.hypot(t, n) < 5) return;
				let { prevRect: s, maximizedRect: c } = f.current.pendingRestore, l = (f.current.mouseX - c.x) / c.width, u = Math.round(f.current.mouseX - s.width * Math.min(Math.max(l, .1), .9)), d = f.current.mouseY - 15;
				L.setState((t) => {
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
			let T = f.current.escaped, E = !T && !1, D = !T && !0, O = T ? -Infinity : y, k = T ? Infinity : b, A = T ? -Infinity : x, j = T ? Infinity : S, M = qt(l, 0, C, O, k, !T, !T), N = qt(p, x, w, A, j, E, D);
			t.set(M), n.set(N), Ut(a.clientY <= 10 ? "top" : Wt(a.clientX, a.clientY, m), !0, m, h);
		}, k = (r) => {
			if (!f.current) return;
			if (f.current.pendingRestore) {
				f.current = null, window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", k);
				return;
			}
			let i = t.get(), c = n.get(), l = r.clientY <= 10 ? "top" : Wt(r.clientX, r.clientY, m), u = Gt(l, m, h);
			u ? l === "top" ? s(e, u) : o(e, u) : a(e, i, c), Ut(null, !1, m, h), f.current = null, window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", k);
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
function Yt({ windowId: e, x: t, y: n, width: r, height: i, minWidth: a = 320, minHeight: o = 240 }) {
	let s = L((e) => e.resizeWindow), c = K(null);
	return { getResizeHandler: W((l) => (u) => {
		u.preventDefault(), u.stopPropagation(), u.currentTarget.setPointerCapture(u.pointerId);
		let d = L.getState().windows[e], f = {
			x: t.get(),
			y: n.get(),
			width: r.get(),
			height: i.get()
		};
		if (d?.isFullScreen || d?.isMaximized) {
			let a = d.prevRect ?? {
				x: Math.round((window.innerWidth - 800) / 2),
				y: Math.round((window.innerHeight - 600) / 2),
				width: 800,
				height: 600
			};
			L.setState((t) => {
				let n = t.windows[e];
				n && (n.isFullScreen = !1, n.isMaximized = !1, n.rect = { ...a }, n.prevRect = null);
			}), t.set(a.x), n.set(a.y), r.set(a.width), i.set(a.height), f = { ...a };
		}
		c.current = {
			mouseX: u.clientX,
			mouseY: u.clientY,
			rect: f
		};
		let p = (e) => {
			if (!c.current) return;
			let s = se(l, e.clientX - c.current.mouseX, e.clientY - c.current.mouseY, c.current.rect, a, o);
			t.set(s.x), n.set(s.y), r.set(s.width), i.set(s.height);
		}, m = () => {
			c.current && (s(e, {
				x: t.get(),
				y: n.get(),
				width: r.get(),
				height: i.get()
			}), c.current = null, window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", m));
		};
		window.addEventListener("pointermove", p), window.addEventListener("pointerup", m);
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
function Xt({ windowId: e }) {
	let t = L((t) => t.windows[e]), n = L((e) => e.focusWindow), r = L((e) => e.setActiveApp), i = L((e) => e.exitFullScreen), a = L((e) => e.fullscreenChromeRevealed), o = L((e) => e.apps), { isFloating: s, isMobile: c, config: l } = x();
	G(() => {
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
	let u = te(t?.isFullScreen ? 0 : t?.rect.x ?? 100), d = te(t?.isFullScreen ? 0 : t?.rect.y ?? 100), f = te(t?.isFullScreen ? typeof window < "u" ? window.innerWidth : 800 : t?.rect.width ?? 800), p = te(t?.isFullScreen ? typeof window < "u" ? window.innerHeight : 600 : t?.rect.height ?? 600);
	G(() => {
		if (!t) return;
		let e = t.isFullScreen ? 0 : t.rect.x, n = t.isFullScreen ? 0 : t.rect.y, r = t.isFullScreen ? typeof window < "u" ? window.innerWidth : 800 : t.rect.width, i = t.isFullScreen ? typeof window < "u" ? window.innerHeight : 600 : t.rect.height;
		ne(u, e, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), ne(d, n, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), ne(f, r, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), ne(p, i, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		});
	}, [
		t?.rect.x,
		t?.rect.y,
		t?.rect.width,
		t?.rect.height,
		t?.isFullScreen
	]);
	let { onPointerDown: m } = Jt({
		windowId: e,
		x: u,
		y: d,
		width: f,
		height: p
	}), h = t ? o[t.appId] : void 0, { getResizeHandler: g } = Yt({
		windowId: e,
		x: u,
		y: d,
		width: f,
		height: p,
		minWidth: h?.minSize?.width ?? 320,
		minHeight: h?.minSize?.height ?? 240
	});
	if (!t) return null;
	let _ = s && !c;
	return /* @__PURE__ */ X(y.div, {
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
		style: t.isFullScreen && l.hasMenuBar || c ? {
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
			borderRadius: t.isFullScreen || t.isMaximized ? 0 : "var(--radius-window)"
		},
		className: R("flex flex-col overflow-hidden", t.isMinimized ? "pointer-events-none" : "pointer-events-auto", t.isFocused ? "shadow-[0_22px_70px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.25)]", !t.isFocused && "brightness-95", "bg-(--window-body-bg)", t.isFocused ? "ring-1 ring-white/20" : ""),
		onPointerDown: (i) => {
			n(e), t?.appId && r(t.appId), i.stopPropagation();
		},
		children: [
			(!t.isFullScreen || !l.hasMenuBar) && /* @__PURE__ */ Y("div", {
				className: R(h?.titleBarMode === "transparent" ? "absolute top-0 inset-x-0 z-20" : "relative"),
				children: /* @__PURE__ */ Y(Dt, {
					windowId: e,
					onPointerDown: m
				})
			}),
			t.isFullScreen && l.hasMenuBar && /* @__PURE__ */ Y(y.div, {
				className: "absolute top-0 inset-x-0 z-20",
				animate: { y: a ? 28 : "-100%" },
				transition: {
					type: "spring",
					stiffness: 380,
					damping: 30,
					mass: .8
				},
				children: /* @__PURE__ */ Y(Dt, {
					windowId: e,
					onPointerDown: m
				})
			}),
			t.hasMenuBar && !l.hasMenuBar && /* @__PURE__ */ Y(kt, { windowId: e }),
			/* @__PURE__ */ Y("div", {
				className: "flex-1 overflow-auto min-h-0 window-body",
				children: /* @__PURE__ */ Y(M, {
					appId: t.appId,
					windowId: e
				})
			}),
			t.hasStatusBar && /* @__PURE__ */ Y(At, { windowId: e }),
			_ && !t.isMaximized && !t.isFullScreen && /* @__PURE__ */ Y(Nt, { getResizeHandler: g })
		]
	});
}
//#endregion
//#region src/components/window/SnapAssist.tsx
var Zt = {
	left: "Snap Left",
	right: "Snap Right",
	top: "Maximize",
	"top-left": "Top Left",
	"top-right": "Top Right",
	"bottom-left": "Bottom Left",
	"bottom-right": "Bottom Right"
};
function Qt(e) {
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
function $t({ zone: e, style: t, topInset: n, bottomInset: r }) {
	let i = Gt(e, n, r);
	return i ? /* @__PURE__ */ X(y.div, {
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
		children: [t.highlight && /* @__PURE__ */ Y("span", {
			"aria-hidden": !0,
			className: "absolute inset-x-0 top-0 h-px pointer-events-none",
			style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.7) 50%, transparent 95%)" }
		}), /* @__PURE__ */ Y("span", {
			className: "text-[13px] font-semibold px-3 py-1 rounded-full",
			style: {
				background: t.labelBg,
				color: t.labelText,
				backdropFilter: "blur(4px)"
			},
			children: Zt[e]
		})]
	}, e) : null;
}
function en() {
	let [e, t] = q(null), [n, r] = q(!1), [i, a] = q(0), [o, s] = q(0), { osTheme: c } = x(), l = Qt(c), u = L((e) => e.focusedWindowId), d = L((e) => e.windows), f = (u ? d[u] : null)?.zIndex ?? 10;
	return G(() => Ht((e, n, i, o) => {
		t(e), r(n), a(i), s(o);
	}), []), n ? /* @__PURE__ */ Y("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: f },
		children: /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ Y($t, {
			zone: e,
			style: l,
			topInset: i,
			bottomInset: o
		}, e) })
	}) : null;
}
//#endregion
//#region src/lib/url-codec.ts
function tn(e) {
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
function nn(e) {
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
function rn() {
	let e = L((e) => e.windows), t = L((e) => e.apps), n = L((e) => e.openWindow), r = L((e) => e.focusWindow), i = L((e) => e.urlHydrated), a = L((e) => e.setUrlHydrated), { config: o } = x();
	G(() => {
		if (i || Object.keys(t).length === 0) return;
		let e = new URLSearchParams(window.location.search).getAll("w"), s = null;
		for (let r of e) {
			let e = nn(r);
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
	]), G(() => {
		if (!i) return;
		let t = new URLSearchParams();
		for (let n of Object.values(e)) t.append("w", tn(n));
		let n = `${window.location.pathname}${t.toString() ? `?${t.toString()}` : ""}`;
		n !== window.location.href.replace(window.location.origin, "") && window.history.replaceState(null, "", n);
	}, [e, i]);
}
//#endregion
//#region src/components/window/WindowManager.tsx
function an() {
	rn();
	let e = L((e) => e.windows), t = L((e) => e.apps), n = L((e) => e.resizeWindow);
	L((e) => e.exitFullScreen);
	let r = L((e) => e.allowDragOutOfBounds), i = ct(), { config: a } = x();
	G(() => {
		let o = {
			x: 0,
			y: a.layout.window.maximizeInsets.top,
			width: i.width,
			height: Math.max(1, i.height - a.layout.window.maximizeInsets.top - a.layout.window.maximizeInsets.bottom)
		};
		for (let s of Object.values(e)) {
			let e = t[s.appId];
			if (!e) continue;
			let c;
			if (s.isFullScreen && a.hasMenuBar) c = {
				x: 0,
				y: 0,
				width: i.width,
				height: i.height
			};
			else if (s.isMaximized || s.isFullScreen) c = o;
			else {
				let t = e.minSize?.width ?? 320, n = e.minSize?.height ?? 240, a = Math.min(Math.max(s.rect.width, t), i.width), l = Math.min(Math.max(s.rect.height, n), i.height);
				if (r) {
					let e = Math.min(200, a), t = Math.min(200, l), n = o.x - (a - e), r = o.x + o.width - e, i = o.y, u = o.y + o.height - t;
					c = {
						x: Math.min(Math.max(s.rect.x, n), r),
						y: Math.min(Math.max(s.rect.y, i), u),
						width: a,
						height: l
					};
				} else c = ie(s.rect, o, {
					minWidth: t,
					minHeight: n
				});
			}
			(c.x !== s.rect.x || c.y !== s.rect.y || c.width !== s.rect.width || c.height !== s.rect.height) && n(s.id, c);
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
	return /* @__PURE__ */ X("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden z-20",
		children: [/* @__PURE__ */ Y(en, {}), /* @__PURE__ */ Y(g, { children: o.map((e) => /* @__PURE__ */ Y(Xt, { windowId: e }, e)) })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var on = Object.freeze({
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
}), sn = "VisuallyHidden", cn = U.forwardRef((e, t) => /* @__PURE__ */ Y(o.span, {
	...e,
	ref: t,
	style: {
		...on,
		...e.style
	}
}));
cn.displayName = sn;
var ln = cn, [un, dn] = r("Tooltip", [m]), fn = m(), pn = "TooltipProvider", mn = 700, hn = "tooltip.open", [gn, _n] = un(pn), vn = (e) => {
	let { __scopeTooltip: t, delayDuration: n = mn, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = U.useRef(!0), s = U.useRef(!1), c = U.useRef(0);
	return U.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ Y(gn, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: U.useCallback(() => {
			window.clearTimeout(c.current), o.current = !1;
		}, []),
		onClose: U.useCallback(() => {
			window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r);
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: U.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
vn.displayName = pn;
var yn = "Tooltip", [bn, xn] = un(yn), Sn = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = e, u = _n(yn, e.__scopeTooltip), d = fn(t), [p, m] = U.useState(null), h = a(), g = U.useRef(0), _ = s ?? u.disableHoverableContent, v = c ?? u.delayDuration, y = U.useRef(!1), [b, x] = f({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(hn))) : u.onClose(), o?.(e);
		},
		caller: yn
	}), S = U.useMemo(() => b ? y.current ? "delayed-open" : "instant-open" : "closed", [b]), C = U.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, y.current = !1, x(!0);
	}, [x]), w = U.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, x(!1);
	}, [x]), T = U.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			y.current = !0, x(!0), g.current = 0;
		}, v);
	}, [v, x]);
	return U.useEffect(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []), /* @__PURE__ */ Y(l, {
		...d,
		children: /* @__PURE__ */ Y(bn, {
			scope: t,
			contentId: h,
			open: b,
			stateAttribute: S,
			trigger: p,
			onTriggerChange: m,
			onTriggerEnter: U.useCallback(() => {
				u.isOpenDelayedRef.current ? T() : C();
			}, [
				u.isOpenDelayedRef,
				T,
				C
			]),
			onTriggerLeave: U.useCallback(() => {
				_ ? w() : (window.clearTimeout(g.current), g.current = 0);
			}, [w, _]),
			onOpen: C,
			onClose: w,
			disableHoverableContent: _,
			children: n
		})
	});
};
Sn.displayName = yn;
var Cn = "TooltipTrigger", wn = U.forwardRef((n, r) => {
	let { __scopeTooltip: i, ...a } = n, s = xn(Cn, i), c = _n(Cn, i), l = fn(i), u = t(r, U.useRef(null), s.onTriggerChange), f = U.useRef(!1), p = U.useRef(!1), m = U.useCallback(() => f.current = !1, []);
	return U.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ Y(d, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ Y(o.button, {
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
wn.displayName = Cn;
var Tn = "TooltipPortal", [En, Dn] = un(Tn, { forceMount: void 0 }), On = (e) => {
	let { __scopeTooltip: t, forceMount: r, children: i, container: a } = e, o = xn(Tn, t);
	return /* @__PURE__ */ Y(En, {
		scope: t,
		forceMount: r,
		children: /* @__PURE__ */ Y(c, {
			present: r || o.open,
			children: /* @__PURE__ */ Y(n, {
				asChild: !0,
				container: a,
				children: i
			})
		})
	});
};
On.displayName = Tn;
var kn = "TooltipContent", An = U.forwardRef((e, t) => {
	let n = Dn(kn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = xn(kn, e.__scopeTooltip);
	return /* @__PURE__ */ Y(c, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ Y(Fn, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ Y(jn, {
			side: i,
			...a,
			ref: t
		})
	});
}), jn = U.forwardRef((e, n) => {
	let r = xn(kn, e.__scopeTooltip), i = _n(kn, e.__scopeTooltip), a = U.useRef(null), o = t(n, a), [s, c] = U.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = U.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = U.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = zn(r, Rn(r, n.getBoundingClientRect())), a = Bn(t.getBoundingClientRect()), o = Hn([...i, ...a]);
		c(o), f(!0);
	}, [f]);
	return U.useEffect(() => () => p(), [p]), U.useEffect(() => {
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
	]), U.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !Vn(n, s);
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
	]), /* @__PURE__ */ Y(Fn, {
		...e,
		ref: o
	});
}), [Mn, Nn] = un(yn, { isInside: !1 }), Pn = h("TooltipContent"), Fn = U.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = e, l = xn(kn, n), d = fn(n), { onClose: f } = l;
	return U.useEffect(() => (document.addEventListener(hn, f), () => document.removeEventListener(hn, f)), [f]), U.useEffect(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target?.contains(l.trigger) && f();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, f]), /* @__PURE__ */ Y(u, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: f,
		children: /* @__PURE__ */ X(i, {
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
			children: [/* @__PURE__ */ Y(Pn, { children: r }), /* @__PURE__ */ Y(Mn, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ Y(ln, {
					id: l.contentId,
					role: "tooltip",
					children: a || r
				})
			})]
		})
	});
});
An.displayName = kn;
var In = "TooltipArrow", Ln = U.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = fn(n);
	return Nn(In, n).isInside ? null : /* @__PURE__ */ Y(p, {
		...i,
		...r,
		ref: t
	});
});
Ln.displayName = In;
function Rn(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function zn(e, t, n = 5) {
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
function Bn(e) {
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
function Vn(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Hn(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Un(t);
}
function Un(e) {
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
var Wn = vn, Gn = Sn, Kn = wn, qn = On, Jn = An, Yn = 120;
function Xn({ appConfig: e, isRunning: t, hasMinimized: n, mouseX: r, onOpen: i, baseSize: a, maxSize: o }) {
	let s = K(null), [c, l] = q(!1), { getAppName: u } = H(), d = u(e.id, e.name), f = L((e) => e.showOpenAppIndicators), p = de((e) => e.status), m = e.id === "settings" && ue(p), h = a + 10, g = C(r, (e) => {
		if (!s.current) return 121;
		let t = s.current.getBoundingClientRect();
		return Math.abs(e - (t.left + t.width / 2));
	}), _ = ot(C(g, [0, Yn], [o, a], { clamp: !0 }), {
		stiffness: 350,
		damping: 22,
		mass: .5
	});
	return G(() => {
		g.dirty();
	}, [
		a,
		o,
		g
	]), /* @__PURE__ */ Y(Wn, {
		delayDuration: 500,
		children: /* @__PURE__ */ X(Gn, { children: [/* @__PURE__ */ X(y.div, {
			ref: s,
			className: "relative flex flex-col justify-end items-center overflow-visible",
			style: {
				width: _,
				height: h
			},
			children: [/* @__PURE__ */ Y(Kn, {
				asChild: !0,
				children: /* @__PURE__ */ X(y.button, {
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
					children: [/* @__PURE__ */ Y(B, {
						appConfig: e,
						size: o,
						fill: !0,
						className: "w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
					}), m && /* @__PURE__ */ Y("span", { className: "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#11141B]" })]
				})
			}), /* @__PURE__ */ X("div", {
				className: "shrink-0 h-2.5 flex items-center justify-center gap-1",
				children: [f && t && !n && /* @__PURE__ */ Y("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" }), f && n && /* @__PURE__ */ Y("span", { className: "w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" })]
			})]
		}), /* @__PURE__ */ Y(qn, { children: /* @__PURE__ */ X(Jn, {
			side: "top",
			sideOffset: 8,
			className: "\n              relative overflow-hidden\n              rounded-[var(--radius-card)]\n              backdrop-blur-2xl\n              bg-white/20 dark:bg-white/10\n              border border-white/40 dark:border-white/20\n              shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]\n              text-white dark:text-white text-[12px] font-medium px-3 py-1.5\n              pointer-events-none\n              z-50\n            ",
			children: [/* @__PURE__ */ Y("span", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 50%, transparent 95%)" }
			}), /* @__PURE__ */ Y("span", {
				className: "relative z-10",
				children: d
			})]
		}) })] })
	});
}
//#endregion
//#region src/components/dock/Dock.tsx
function Zn({ onOpenApp: e }) {
	let t = L((e) => e.dockAppIds), n = L((e) => e.apps), r = L((e) => e.runningAppIds), i = L((e) => e.windows), a = L((e) => e.launchApp), o = L((e) => e.dockSize), s = L((e) => e.dockMagnification), c = Math.max(o * (1 + s), o + s * 54), l = c - o, u = te(Infinity), d = t.map((e) => n[e]).filter(Boolean), f = r.filter((e) => !t.includes(e)).map((e) => n[e]).filter(Boolean), p = (e) => {
		a(e);
	}, m = Math.round(o * .28), h = Math.round(o * .47), g = Math.round(o * .28), _ = Math.round(o * .19);
	return /* @__PURE__ */ X("div", {
		"data-dock": "true",
		className: "relative overflow-visible",
		style: { paddingTop: l },
		onMouseMove: (e) => u.set(e.clientX),
		onMouseLeave: () => u.set(Infinity),
		children: [/* @__PURE__ */ Y("div", {
			className: "absolute inset-x-0 bottom-0",
			style: { top: l },
			children: /* @__PURE__ */ Y(w, {
				variant: "dock",
				className: "absolute inset-0",
				borderRadius: Math.round(o * .5)
			})
		}), /* @__PURE__ */ X("div", {
			className: "relative z-10 flex items-end overflow-visible",
			style: {
				gap: m,
				paddingLeft: h,
				paddingRight: h,
				paddingTop: g,
				paddingBottom: _
			},
			children: [
				d.map((e) => /* @__PURE__ */ Y(Xn, {
					appConfig: e,
					isRunning: r.includes(e.id),
					hasMinimized: Object.values(i).some((t) => t.appId === e.id && t.isMinimized),
					mouseX: u,
					onOpen: p,
					baseSize: o,
					maxSize: c
				}, e.id)),
				f.length > 0 && /* @__PURE__ */ Y("div", {
					className: "shrink-0 self-stretch my-1 rounded-full bg-white/30 dark:bg-white/20",
					style: {
						width: 1,
						marginLeft: Math.round(m * .5),
						marginRight: Math.round(m * .5)
					}
				}),
				f.map((e) => /* @__PURE__ */ Y(Xn, {
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
function Qn({ appConfig: e, onClose: t }) {
	let { getAppName: n } = H(), [r, i] = q({
		x: 0,
		y: 0
	}), [a, o] = q(!1), s = K(null), c = W((e) => {
		e.target.closest("button") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), s.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: r.x,
			oy: r.y
		});
	}, [r]), l = W((e) => {
		s.current && i({
			x: s.current.ox + (e.clientX - s.current.mx),
			y: s.current.oy + (e.clientY - s.current.my)
		});
	}, []), u = W(() => {
		s.current = null;
	}, []);
	return typeof document > "u" ? null : tt(/* @__PURE__ */ X("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99999 },
		children: [/* @__PURE__ */ Y("div", { className: "absolute inset-0 pointer-events-auto" }), /* @__PURE__ */ X("div", {
			className: "relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-72 overflow-hidden pointer-events-auto",
			style: { transform: `translate(${r.x}px, ${r.y}px)` },
			onPointerMove: l,
			onPointerUp: u,
			onPointerCancel: u,
			children: [/* @__PURE__ */ Y("div", {
				className: "w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: c,
				onMouseEnter: () => o(!0),
				onMouseLeave: () => o(!1),
				children: /* @__PURE__ */ X("div", {
					className: "flex items-center gap-2",
					onPointerDown: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ Y("button", {
							onClick: t,
							className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100",
							style: { backgroundColor: "#ff5f57" },
							title: "Close",
							children: a && /* @__PURE__ */ Y(V, {
								className: "w-2 h-2 text-red-900/80",
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ Y("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						}),
						/* @__PURE__ */ Y("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						})
					]
				})
			}), /* @__PURE__ */ X("div", {
				className: "flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none",
				children: [
					/* @__PURE__ */ Y("div", {
						className: "w-20 h-20 mb-1",
						children: /* @__PURE__ */ Y(B, {
							appConfig: e,
							size: 80
						})
					}),
					/* @__PURE__ */ Y("div", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90 text-center",
						children: n(e.id, e.name)
					}),
					/* @__PURE__ */ Y("div", {
						className: "text-[12px] text-black/50 dark:text-white/50 text-center",
						children: "Version 1.0 (1.0)"
					}),
					/* @__PURE__ */ Y("div", { className: "w-full h-px bg-black/10 dark:bg-white/10 my-1" }),
					/* @__PURE__ */ X("div", {
						className: "text-[11px] text-black/40 dark:text-white/40 text-center leading-relaxed",
						children: [
							"Copyright © 2026 Skyline",
							/* @__PURE__ */ Y("br", {}),
							"All rights reserved."
						]
					})
				]
			})]
		})]
	}), document.body);
}
function $n() {
	let [e, t] = q(null);
	return G(() => {
		let e = (e) => {
			let { appId: n, action: r } = e.detail;
			if (r !== "about") return;
			let i = L.getState().apps[n];
			i && t(i);
		};
		return window.addEventListener("app:menu:action", e), () => window.removeEventListener("app:menu:action", e);
	}, []), e ? /* @__PURE__ */ Y(Qn, {
		appConfig: e,
		onClose: () => t(null)
	}) : null;
}
//#endregion
//#region src/hooks/useWallpaperLuminance.ts
var er = 28, tr = 120, nr = "wallpaper_luma_";
function rr(e) {
	let t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function ir(e) {
	try {
		let t = localStorage.getItem(nr + e);
		if (t === "light" || t === "dark") return t;
	} catch {}
	return null;
}
function ar(e, t) {
	try {
		localStorage.setItem(nr + e, t);
	} catch {}
}
var or = /* @__PURE__ */ new Map();
function sr(e) {
	return new Promise((t) => {
		let n = new Image();
		n.crossOrigin = "anonymous", n.onload = () => {
			try {
				let e = document.createElement("canvas");
				e.width = tr, e.height = er;
				let r = e.getContext("2d");
				if (!r) {
					t("dark");
					return;
				}
				r.drawImage(n, 0, 0, n.naturalWidth, Math.min(n.naturalHeight, er * 2), 0, 0, tr, er);
				let i = r.getImageData(0, 0, tr, er).data, a = 0;
				for (let e = 0; e < i.length; e += 4) a += .299 * i[e] + .587 * i[e + 1] + .114 * i[e + 2];
				t(a / (i.length / 4) > 128 ? "light" : "dark");
			} catch {
				t("dark");
			}
		}, n.onerror = () => t("dark"), n.src = e;
	});
}
function cr() {
	let e = L((e) => e.osTheme), t = L((e) => e.wallpaperId), n = Se();
	G(() => {
		if (e !== "macos") return;
		let r = n.all.find((e) => e.id === t);
		if (!r) return;
		let i = (e) => L.getState().setWallpaperTextTheme(e);
		if (or.has(t)) {
			i(or.get(t));
			return;
		}
		let a = ir(t);
		if (a) {
			or.set(t, a), i(a);
			return;
		}
		if (r.kind === "color" && r.colorHex) {
			let e = rr(r.colorHex) > 128 ? "light" : "dark";
			or.set(t, e), ar(t, e), i(e);
			return;
		}
		r.url && sr(r.url).then((e) => {
			or.set(t, e), ar(t, e), i(e);
		});
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/components/themes/MacOSTheme.tsx
var lr = 20, ur = 120, dr = 1500, fr = 650;
function pr({ onOpenApp: e, onSpotlight: t, isSimpleMode: n = !1, fallbackMenuBarAppId: r }) {
	let i = j(), a = i.dock && (!i.isSimpleModeActive || i.dock);
	cr();
	let o = L((e) => Object.values(e.windows).some((e) => e.isMaximized && !e.isMinimized)), s = L((e) => Object.values(e.windows).some((e) => e.isFullScreen && !e.isMinimized)), [c, l] = q({
		hasMaximized: !1,
		hasFullScreen: !1
	});
	G(() => {
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
	let u = L((e) => e.urlHydrated), d = s || !u && c.hasFullScreen, f = L((e) => e.dockAutoHide), p = o || d || f || c.hasMaximized && !u, [m, h] = q(!1), [g, _] = q(!1), v = !p || m || g, b = K(null);
	G(() => {
		u && p && h(!1);
	}, [u, p]), G(() => {
		if (!p || n) {
			h(!1);
			return;
		}
		let e = null, t = (t) => {
			let n = t.clientY >= window.innerHeight - lr, r = !0;
			if (n && b.current) {
				let { left: e, right: n } = b.current.getBoundingClientRect();
				r = t.clientX >= e - 24 && t.clientX <= n + 24;
			}
			n && r || g ? (h(!0), e &&= (clearTimeout(e), null)) : e ||= setTimeout(() => h(!1), dr);
		};
		return document.addEventListener("mousemove", t), () => {
			document.removeEventListener("mousemove", t), e && clearTimeout(e);
		};
	}, [
		p,
		g,
		n
	]);
	let x = L((e) => e.fullscreenChromeRevealed), S = L((e) => e.setFullscreenChromeRevealed), C = !d || x;
	return G(() => {
		if (!s) {
			S(!1);
			return;
		}
		let e = null, t = null, n = (n) => {
			let r = n.target, i = r?.closest("[data-menubar=\"true\"]"), a = r?.closest("[data-windowchrome=\"true\"]"), o = r?.closest("[data-menu-portal=\"true\"]") || r?.closest("[data-radix-popper-content-wrapper]");
			n.clientY <= lr ? (t ||= setTimeout(() => {
				S(!0), t = null;
			}, 500), e &&= (clearTimeout(e), null)) : i || a || o ? e &&= (clearTimeout(e), null) : (t &&= (clearTimeout(t), null), e ||= setTimeout(() => S(!1), fr));
		};
		return document.addEventListener("mousemove", n), () => {
			document.removeEventListener("mousemove", n), e && clearTimeout(e), t && clearTimeout(t);
		};
	}, [s, S]), /* @__PURE__ */ X(J, { children: [
		/* @__PURE__ */ Y($n, {}),
		/* @__PURE__ */ Y(y.div, {
			className: "absolute top-0 inset-x-0 z-40 pointer-events-none",
			animate: { y: C ? 0 : -28 },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			children: /* @__PURE__ */ Y("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ Y(O, {
					onSpotlight: t,
					isSimpleMode: n,
					fallbackMenuBarAppId: r,
					forceDark: s
				})
			})
		}),
		a && /* @__PURE__ */ Y(y.div, {
			className: "absolute inset-x-0 z-40 flex justify-center pointer-events-none",
			style: { bottom: "var(--dock-offset-bottom)" },
			animate: { y: v ? 0 : ur },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			onMouseEnter: () => _(!0),
			onMouseLeave: () => _(!1),
			children: /* @__PURE__ */ Y("div", {
				ref: b,
				className: "pointer-events-auto",
				children: /* @__PURE__ */ Y(Zn, { onOpenApp: e })
			})
		})
	] });
}
//#endregion
//#region src/hooks/useImageReady.ts
function mr(e, t = !0) {
	let [n, r] = q(null), [i, a] = q(null);
	return G(() => {
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
function hr() {
	let [e, t] = q(() => L.persist.hasHydrated());
	return G(() => {
		let e = L.persist.onHydrate(() => {
			t(!1);
		}), n = L.persist.onFinishHydration(() => {
			t(!0);
		});
		return () => {
			e(), n();
		};
	}, []), e;
}
//#endregion
//#region src/hooks/useResolvedWallpaper.ts
function gr() {
	let e = L((e) => e.wallpaperId), t = L((e) => e.customWallpapers), n = Se();
	return [...n.all, ...t].find((t) => t.id === e) || (n.all.find((e) => e.id === n.defaultId) ?? n.pictures[0]);
}
//#endregion
//#region src/components/iphone/LockScreen.tsx
function _r() {
	let [e, t] = q("");
	return G(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ Y(J, { children: e });
}
function vr({ onUnlock: e }) {
	let t = hr(), n = be(), r = gr(), i = ve(n, r.url ?? ""), a = mr(i, t && r.kind !== "color"), o = t && a && r.kind !== "color" ? `url(${i})` : "none", s = r.kind === "color" ? r.colorHex : "#1e1e2e", c = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ X(y.div, {
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
			/* @__PURE__ */ Y("div", { className: "absolute inset-0 bg-black/20 backdrop-blur-sm" }),
			/* @__PURE__ */ X("div", {
				className: "relative z-10 flex flex-col items-center pt-16 flex-1",
				children: [
					/* @__PURE__ */ Y("div", {
						className: "text-white text-7xl font-thin tracking-tighter leading-none",
						children: /* @__PURE__ */ Y(_r, {})
					}),
					/* @__PURE__ */ Y("p", {
						className: "text-white/80 text-lg font-medium mt-2",
						children: c
					}),
					/* @__PURE__ */ Y("div", {
						className: "mt-8 w-72 space-y-2 max-h-52 overflow-hidden",
						children: [{
							app: "Messages",
							message: "You have a new message"
						}, {
							app: "Calendar",
							message: "Meeting in 15 minutes"
						}].map((e, t) => /* @__PURE__ */ X("div", {
							className: "bg-white/15 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20",
							children: [/* @__PURE__ */ Y("p", {
								className: "text-[10px] font-semibold text-white/60 uppercase",
								children: e.app
							}), /* @__PURE__ */ Y("p", {
								className: "text-[13px] text-white/90 mt-0.5",
								children: e.message
							})]
						}, t))
					})
				]
			}),
			/* @__PURE__ */ X("div", {
				className: "relative z-10 pb-12 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ Y(y.div, {
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
					children: /* @__PURE__ */ Y("div", {
						className: "w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center",
						children: /* @__PURE__ */ Y("svg", {
							className: "w-5 h-5 text-white",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							strokeWidth: 2,
							children: /* @__PURE__ */ Y("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M5 15l7-7 7 7"
							})
						})
					})
				}), /* @__PURE__ */ Y("p", {
					className: "text-white/60 text-[12px] font-medium tracking-wide",
					children: "Swipe up to unlock"
				})]
			})
		]
	}, "lockscreen");
}
//#endregion
//#region src/components/ipad/HomeScreen.tsx
var yr = 6, br = 4, xr = yr * br, Sr = 6, Cr = 600, wr = (e, t, n) => {
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
function Tr({ onOpenApp: e }) {
	let t = L((e) => e.apps), { getAppName: n } = H(), [r, i] = q(0), [a, o] = q(!1), [s, c] = q(() => {
		let e = L.getState().apps, t = Object.values(e).filter((e) => !e.disabled).slice(Sr).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / xr)), r = [...t];
		for (; r.length < n * xr;) r.push(null);
		return r;
	}), [l, u] = q(s), [d, f] = q(null), [p, m] = q(!1), [h, g] = q({
		x: 0,
		y: 0
	}), _ = K(null), [v, b] = q(768), x = K(0), S = K(r), C = K(s), w = K(l), T = K(d);
	G(() => {
		S.current = r;
	}, [r]), G(() => {
		C.current = s;
	}, [s]), G(() => {
		w.current = l;
	}, [l]), G(() => {
		T.current = d;
	}, [d]), G(() => {
		if (!_.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) b(t.contentRect.width || 768);
		});
		return e.observe(_.current), () => e.disconnect();
	}, []);
	let E = Object.values(t).filter((e) => !e.disabled).slice(0, Sr), D = d ? l : s, O = Math.max(1, Math.ceil(D.length / xr));
	d && (O += 1);
	let k = [];
	for (let e = 0; e < O * xr; e += xr) {
		let t = D.slice(e, e + xr);
		for (; t.length < xr;) t.push(null);
		k.push(t);
	}
	let A = W((e) => {
		e !== S.current && i(e);
	}, []), j = K(null), M = () => {
		j.current = setTimeout(() => o(!0), Cr);
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
	return W(() => {}, []), G(() => {
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
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / yr)), l = Math.floor(o / (i.height / br));
				if (s >= 0 && s < yr && l >= 0 && l < br) {
					let e = l * yr + s, r = t * xr + e, i = [...C.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * xr;
							for (; i.length < e;) i.push(null);
						}
						let e = wr(i, a, r);
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
			let r = Math.max(1, Math.ceil((n + 1) / xr)), a = e.slice(0, r * xr);
			c(a), u(a), t >= r && i(r - 1), f(null), m(!1);
		};
		return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
			window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t);
		};
	}, [d, A]), /* @__PURE__ */ X("div", {
		ref: _,
		className: "absolute inset-0 flex flex-col overflow-hidden px-6 pt-12 pb-36 pointer-events-auto",
		onPointerDown: M,
		onPointerUp: N,
		onPointerCancel: N,
		onClick: ee,
		children: [
			/* @__PURE__ */ Y("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ Y(y.div, {
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
					children: k.map((n, r) => /* @__PURE__ */ Y("div", {
						className: "h-full shrink-0 grid gap-x-4 gap-y-6",
						style: {
							gridTemplateColumns: `repeat(${yr}, 1fr)`,
							gridTemplateRows: `repeat(${br}, 1fr)`,
							width: v
						},
						children: n.map((n, r) => {
							if (n) {
								let i = t[n];
								if (i) return /* @__PURE__ */ Y(Er, {
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
							return /* @__PURE__ */ X("div", {
								className: "flex flex-col items-center gap-2 min-w-0 opacity-0 pointer-events-none select-none",
								children: [/* @__PURE__ */ Y("div", { style: {
									width: 72,
									height: 72
								} }), /* @__PURE__ */ Y("span", {
									className: "text-xs leading-tight max-w-[72px] truncate",
									children: "Empty"
								})]
							}, `empty-${r}`);
						})
					}, r))
				})
			}),
			O > 1 && /* @__PURE__ */ Y("div", {
				className: "flex justify-center gap-2 py-2",
				children: Array.from({ length: O }).map((e, t) => /* @__PURE__ */ Y("button", {
					onClick: (e) => {
						e.stopPropagation(), A(t);
					},
					className: R("rounded-full transition-all duration-200", t === r ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50")
				}, t))
			}),
			/* @__PURE__ */ Y("div", {
				className: "absolute bottom-3 inset-x-6 z-10 pointer-events-auto",
				children: /* @__PURE__ */ Y("div", {
					className: "rounded-3xl px-6 py-3 flex items-center justify-around",
					style: {
						background: "rgba(255,255,255,0.18)",
						backdropFilter: "blur(24px) saturate(180%)",
						WebkitBackdropFilter: "blur(24px) saturate(180%)",
						boxShadow: "0 2px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)"
					},
					children: E.map((t) => /* @__PURE__ */ X("button", {
						onClick: () => e(t),
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ Y(B, {
							appConfig: t,
							size: 64
						}), /* @__PURE__ */ Y("span", {
							className: "text-white/80 text-[10px] font-medium",
							children: n(t.id, t.name)
						})]
					}, t.id))
				})
			}),
			d && t[d] && /* @__PURE__ */ X("div", {
				className: "fixed pointer-events-none z-[99999] flex flex-col items-center gap-2 select-none",
				style: {
					left: h.x - 36,
					top: h.y - 36,
					width: 72,
					transform: "scale(1.15)",
					filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.35))"
				},
				children: [/* @__PURE__ */ Y(B, {
					appConfig: t[d],
					size: 72
				}), /* @__PURE__ */ Y("span", {
					className: "text-white text-xs font-semibold text-center leading-tight drop-shadow-md max-w-[72px] truncate",
					children: n(d, t[d].name)
				})]
			})
		]
	});
}
function Er({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = H(), l = c(e.id, e.name), u = K(null), d = K(!1), f = K({
		x: 0,
		y: 0
	}), p = K(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, Cr);
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
	return /* @__PURE__ */ X(y.div, {
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
		children: [/* @__PURE__ */ Y(y.div, {
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
			children: /* @__PURE__ */ Y(B, {
				appConfig: e,
				size: 72
			})
		}), /* @__PURE__ */ Y("span", {
			className: "text-white text-xs font-medium text-center leading-tight drop-shadow-md max-w-[72px] truncate pointer-events-none",
			children: l
		})]
	});
}
//#endregion
//#region src/components/iphone/ControlCenter.tsx
function Dr({ open: e, onClose: t }) {
	let n = L((e) => e.colorScheme), r = L((e) => e.setColorScheme);
	L((e) => e.glassEnabled), L((e) => e.setGlassEnabled);
	let [i, a] = q(80), [o, s] = q(65), [c, l] = q([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ Y(P, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ Y(ut, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ Y(bt, { className: "w-5 h-5" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ Y(A, { className: "w-5 h-5" }),
			active: !1
		}
	]), u = (e) => l((t) => t.map((t) => t.id === e ? {
		...t,
		active: !t.active
	} : t));
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9985",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
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
		children: /* @__PURE__ */ Y(w, {
			variant: "panel",
			className: "p-4",
			children: /* @__PURE__ */ X("div", {
				className: "space-y-3.5",
				children: [
					/* @__PURE__ */ Y("div", {
						className: "grid grid-cols-2 gap-2",
						children: c.map((e) => /* @__PURE__ */ X("button", {
							onClick: () => u(e.id),
							className: R("flex items-center gap-3 p-3 rounded-2xl transition-colors", e.active ? "bg-white/90 dark:bg-white/20" : "bg-white/20 dark:bg-white/10"),
							children: [/* @__PURE__ */ Y("span", {
								className: e.active ? "text-blue-500" : "text-white/70",
								children: e.icon
							}), /* @__PURE__ */ Y("span", {
								className: R("text-[12px] font-semibold", e.active ? "text-black dark:text-white" : "text-white/70"),
								children: e.label
							})]
						}, e.id))
					}),
					/* @__PURE__ */ X("div", {
						className: "flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ Y(Ke, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ Y("input", {
							type: "range",
							min: 0,
							max: 100,
							value: i,
							onChange: (e) => a(Number(e.target.value)),
							className: "flex-1 accent-white"
						})]
					}),
					/* @__PURE__ */ X("div", {
						className: "flex items-center gap-3 bg-white/15 dark:bg-white/10 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ Y(qe, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ Y("input", {
							type: "range",
							min: 0,
							max: 100,
							value: o,
							onChange: (e) => s(Number(e.target.value)),
							className: "flex-1 accent-white"
						})]
					}),
					/* @__PURE__ */ Y("div", {
						className: "grid grid-cols-4 gap-2",
						children: [
							{
								icon: /* @__PURE__ */ Y(ge, { className: "w-5 h-5" }),
								label: "Camera"
							},
							{
								icon: /* @__PURE__ */ Y(ht, { className: "w-5 h-5" }),
								label: "Flash"
							},
							{
								icon: /* @__PURE__ */ Y(wt, { className: "w-5 h-5" }),
								label: "Timer"
							},
							{
								icon: /* @__PURE__ */ Y(T, { className: "w-5 h-5" }),
								label: "Adjust"
							}
						].map((e) => /* @__PURE__ */ X("button", {
							className: "flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/15 hover:bg-white/25 transition-colors",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-white",
								children: e.icon
							}), /* @__PURE__ */ Y("span", {
								className: "text-[9px] text-white/60",
								children: e.label
							})]
						}, e.label))
					}),
					/* @__PURE__ */ X("button", {
						onClick: () => r(n === "dark" ? "light" : "dark"),
						className: "w-full flex items-center justify-between bg-white/15 rounded-2xl px-3 py-2.5",
						children: [/* @__PURE__ */ Y("span", {
							className: "text-[12px] text-white font-medium",
							children: "Dark Mode"
						}), /* @__PURE__ */ Y("div", {
							className: R("w-9 h-5 rounded-full transition-colors", n === "dark" ? "bg-blue-500" : "bg-white/30"),
							children: /* @__PURE__ */ Y("div", { className: R("w-4 h-4 rounded-full bg-white m-0.5 transition-transform shadow", n === "dark" ? "translate-x-4" : "translate-x-0") })
						})]
					})
				]
			})
		})
	})] }) });
}
//#endregion
//#region src/hooks/useSwipeGesture.ts
function Or(e, t) {
	let { onSwipeUp: n, onSwipeDown: r, onSwipeLeft: i, onSwipeRight: a, threshold: o = 50, velocityThreshold: s = .2 } = e, c = K(null);
	G(() => {
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
function kr({ onOpenApp: e }) {
	let [t, n] = q(!1), [r, i] = q(!1);
	return Or({
		onSwipeUp: () => n(!1),
		onSwipeDown: () => i(!0)
	}), /* @__PURE__ */ X(J, { children: [
		/* @__PURE__ */ Y(g, { children: t && /* @__PURE__ */ Y(vr, { onUnlock: () => n(!1) }) }),
		/* @__PURE__ */ X("div", {
			className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none",
			style: { height: "var(--statusbar-height)" },
			children: [/* @__PURE__ */ Y("span", {
				className: "min-w-0",
				children: /* @__PURE__ */ Y(k, {})
			}), /* @__PURE__ */ X("div", {
				className: "flex items-center gap-1.5 text-white",
				children: [/* @__PURE__ */ Y(P, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ Y(E, { className: "w-4 h-4" })]
			})]
		}),
		/* @__PURE__ */ Y(Tr, { onOpenApp: e }),
		/* @__PURE__ */ Y(Dr, {
			open: r,
			onClose: () => i(!1)
		}),
		/* @__PURE__ */ Y("div", {
			className: "absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-40",
			children: /* @__PURE__ */ Y("div", { className: "w-32 h-1 bg-white/30 rounded-full" })
		})
	] });
}
//#endregion
//#region src/components/dock/NavBar.tsx
function Ar({ onOpenApp: e, navBarHeight: t = 72 }) {
	let n = L((e) => e.dockAppIds).slice(0, 4), r = L((e) => e.apps), i = L((e) => e.runningAppIds), { getAppName: a } = H(), o = n.map((e) => r[e]).filter(Boolean);
	return /* @__PURE__ */ Y("div", {
		className: "flex items-center justify-around px-6",
		style: {
			height: t,
			background: "rgba(255,255,255,0.18)",
			backdropFilter: "blur(24px) saturate(180%)",
			WebkitBackdropFilter: "blur(24px) saturate(180%)"
		},
		children: o.map((t) => /* @__PURE__ */ Y("button", {
			onClick: () => e(t),
			className: R("flex items-center justify-center transition-opacity active:scale-95", i.includes(t.id) ? "opacity-100" : "opacity-90"),
			"aria-label": a(t.id, t.name),
			children: /* @__PURE__ */ Y(B, {
				appConfig: t,
				size: 52
			})
		}, t.id))
	});
}
//#endregion
//#region src/components/iphone/DynamicIsland.tsx
function jr({ onClick: e }) {
	let [t, n] = q("compact"), r = L((e) => e.notifications).find((e) => !e.read);
	return /* @__PURE__ */ Y("div", {
		className: "cursor-pointer",
		onClick: () => {
			n((e) => e === "compact" ? "expanded" : "compact"), e?.();
		},
		children: /* @__PURE__ */ Y(y.div, {
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
			children: /* @__PURE__ */ Y(g, {
				mode: "wait",
				children: t === "compact" ? /* @__PURE__ */ Y(y.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "flex items-center gap-2 px-3",
					children: /* @__PURE__ */ Y("div", { className: "w-2 h-2 rounded-full bg-neutral-700" })
				}, "compact") : /* @__PURE__ */ X(y.div, {
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
					children: [/* @__PURE__ */ Y("div", {
						className: "w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0",
						children: /* @__PURE__ */ Y("span", {
							className: "text-white text-xs font-bold",
							children: r?.appName.charAt(0) ?? "!"
						})
					}), /* @__PURE__ */ X("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ Y("p", {
							className: "text-white text-[10px] font-semibold",
							children: r?.appName ?? "Notification"
						}), /* @__PURE__ */ Y("p", {
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
var Mr = 4, Nr = 6, Z = Mr * Nr, Pr = 600, Fr = (e, t, n) => {
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
function Ir({ onOpenApp: e, statusBarHeight: t, navBarHeight: n, homeIndicatorHeight: r }) {
	let i = L((e) => e.apps), { getAppName: a } = H(), [o, s] = q(0), [c, l] = q(!1), [u, d] = q(() => {
		let e = L.getState().apps, t = Object.values(e).filter((e) => !e.disabled).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / Z)), r = [...t];
		for (; r.length < n * Z;) r.push(null);
		return r;
	}), [f, p] = q(u), [m, h] = q(null), [g, _] = q(!1), [v, b] = q({
		x: 0,
		y: 0
	}), x = K(null), [S, C] = q(393), w = K(0), T = K(o), E = K(u), D = K(f), O = K(m);
	G(() => {
		T.current = o;
	}, [o]), G(() => {
		E.current = u;
	}, [u]), G(() => {
		D.current = f;
	}, [f]), G(() => {
		O.current = m;
	}, [m]), G(() => {
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
	let M = W((e) => {
		e !== T.current && s(e);
	}, []), N = K(null), ee = () => {
		N.current = setTimeout(() => l(!0), Pr);
	}, P = () => {
		N.current && clearTimeout(N.current);
	}, F = () => {
		c && l(!1);
	}, I = (e, t) => {
		h(e), _(!0);
		let n = "touches" in t ? t.touches[0].clientX : t.clientX, r = "touches" in t ? t.touches[0].clientY : t.clientY;
		b({
			x: n,
			y: r
		});
	};
	W(() => {
		if (!m) return;
		let e = [...f], t = -1;
		for (let n = e.length - 1; n >= 0; n--) if (e[n] !== null) {
			t = n;
			break;
		}
		let n = Math.max(1, Math.ceil((t + 1) / Z)), r = e.slice(0, n * Z);
		d(r), p(r), o >= n && s(n - 1), h(null), _(!1);
	}, [m, o]), G(() => {
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
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / Mr)), c = Math.floor(o / (i.height / Nr));
				if (s >= 0 && s < Mr && c >= 0 && c < Nr) {
					let e = c * Mr + s, r = t * Z + e, i = [...E.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * Z;
							for (; i.length < e;) i.push(null);
						}
						let e = Fr(i, a, r);
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
	let te = (e, t) => {
		let n = t.offset.x, r = t.velocity.x, i = o, a = S / 4;
		n < -a || r < -300 ? i = Math.min(A - 1, o + 1) : (n > a || r > 300) && (i = Math.max(0, o - 1)), M(i);
	}, ne = n + r + 32;
	return /* @__PURE__ */ X("div", {
		ref: x,
		className: "absolute inset-0 overflow-hidden",
		style: {
			paddingTop: t + 12,
			paddingBottom: ne
		},
		onPointerDown: ee,
		onPointerUp: P,
		onPointerCancel: P,
		onClick: F,
		children: [
			/* @__PURE__ */ Y("div", {
				className: "h-full w-full overflow-hidden",
				children: /* @__PURE__ */ Y(y.div, {
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
					onDragEnd: te,
					className: "flex h-full w-full cursor-grab active:cursor-grabbing",
					children: j.map((t, n) => /* @__PURE__ */ Y("div", {
						className: "h-full shrink-0 grid px-4",
						style: {
							gridTemplateColumns: `repeat(${Mr}, 1fr)`,
							gridTemplateRows: `repeat(${Nr}, 1fr)`,
							gap: "16px 8px",
							width: S
						},
						children: t.map((t, n) => {
							if (t) {
								let r = i[t];
								if (r) return /* @__PURE__ */ Y(Lr, {
									app: r,
									index: n,
									jiggling: c,
									activeDragId: m,
									onPointerDownStart: () => _(!0),
									onPointerDownEnd: () => _(!1),
									onOpen: e,
									onDragStart: I
								}, r.id);
							}
							return /* @__PURE__ */ X("div", {
								className: "flex flex-col items-center gap-1.5 opacity-0 pointer-events-none select-none",
								children: [/* @__PURE__ */ Y("div", { style: {
									width: 60,
									height: 60
								} }), /* @__PURE__ */ Y("span", {
									className: "text-[11px] leading-tight max-w-[64px] truncate",
									children: "Empty"
								})]
							}, `empty-${n}`);
						})
					}, n))
				})
			}),
			/* @__PURE__ */ Y("div", {
				className: "absolute inset-x-0 flex justify-center items-center gap-1.5",
				style: {
					bottom: n + r + 6,
					height: 16
				},
				children: Array.from({ length: A }).map((e, t) => /* @__PURE__ */ Y("button", {
					onClick: (e) => {
						e.stopPropagation(), M(t);
					},
					className: R("rounded-full transition-all duration-200", t === o ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50")
				}, t))
			}),
			m && i[m] && /* @__PURE__ */ X("div", {
				className: "fixed pointer-events-none z-[99999] flex flex-col items-center gap-1.5 select-none",
				style: {
					left: v.x - 30,
					top: v.y - 30,
					width: 60,
					transform: "scale(1.15)",
					filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
				},
				children: [/* @__PURE__ */ Y(B, {
					appConfig: i[m],
					size: 60
				}), /* @__PURE__ */ Y("span", {
					className: "text-white text-[11px] font-semibold text-center leading-tight drop-shadow-md max-w-[64px] truncate",
					children: a(m, i[m].name)
				})]
			})
		]
	});
}
function Lr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = H(), l = c(e.id, e.name), u = K(null), d = K(!1), f = K({
		x: 0,
		y: 0
	}), p = K(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, Pr);
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
	return /* @__PURE__ */ X(y.div, {
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
		children: [/* @__PURE__ */ Y(y.div, {
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
			children: /* @__PURE__ */ Y(B, {
				appConfig: e,
				size: 60
			})
		}), /* @__PURE__ */ Y("span", {
			className: "text-white text-[11px] font-medium text-center leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] max-w-[64px] truncate pointer-events-none",
			children: l
		})]
	});
}
//#endregion
//#region src/components/themes/IPhoneTheme.tsx
function Rr() {
	let [e, t] = q("");
	return G(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ Y(J, { children: e });
}
var zr = 50, Br = 72, Vr = 20;
function Hr({ onOpenApp: e }) {
	let [t, n] = q(!1), [r, i] = q(!1), a = K(null), o = L((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return Or({
		onSwipeUp: () => {
			s || n(!1);
		},
		onSwipeDown: () => {
			s || i(!0);
		}
	}, a), /* @__PURE__ */ X("div", {
		ref: a,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ Y(g, { children: t && /* @__PURE__ */ Y(vr, { onUnlock: () => n(!1) }) }),
			/* @__PURE__ */ Y(Ir, {
				onOpenApp: e,
				statusBarHeight: zr,
				navBarHeight: Br,
				homeIndicatorHeight: Vr
			}),
			/* @__PURE__ */ Y(ee, {
				statusBarHeight: zr,
				navBarHeight: Br,
				homeIndicatorHeight: Vr
			}),
			/* @__PURE__ */ X("div", {
				className: "absolute top-0 inset-x-0 z-40 grid pointer-events-none",
				style: {
					height: zr,
					gridTemplateColumns: "1fr auto 1fr"
				},
				children: [
					/* @__PURE__ */ Y("div", {
						className: "flex items-start pt-3.5 pl-5 text-white text-[15px] font-semibold tabular-nums",
						children: /* @__PURE__ */ Y(Rr, {})
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-start justify-center pt-1.5",
						children: /* @__PURE__ */ Y(jr, {})
					}),
					/* @__PURE__ */ X("div", {
						className: "flex items-start justify-end pt-3.5 pr-5 gap-2 text-white",
						children: [
							/* @__PURE__ */ Y(St, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ Y(P, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ Y(E, { className: "w-[22px] h-[22px]" })
						]
					})
				]
			}),
			/* @__PURE__ */ Y(Dr, {
				open: r,
				onClose: () => i(!1)
			}),
			!s && /* @__PURE__ */ X("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				style: { height: 92 },
				children: [/* @__PURE__ */ Y(Ar, {
					onOpenApp: e,
					navBarHeight: Br
				}), /* @__PURE__ */ Y("div", {
					className: "flex items-center justify-center",
					style: { height: Vr },
					children: /* @__PURE__ */ Y("div", { className: "w-32 h-1 bg-white/40 rounded-full" })
				})]
			})
		]
	});
}
//#endregion
//#region src/components/windows/StartMenu.tsx
var Ur = [
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
function Wr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = q(""), a = L((e) => e.apps), o = L((e) => e.dockAppIds), { t: s, getAppName: c } = H(), l = o.map((e) => a[e]).filter(Boolean), u = Object.values(a).filter((e) => !e.disabled), d = r ? u.filter((e) => c(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : [], f = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9980]",
		onClick: t
	}), /* @__PURE__ */ X(y.div, {
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
			/* @__PURE__ */ Y("div", {
				className: "px-6 pt-5 pb-3",
				children: /* @__PURE__ */ X("div", {
					className: "flex items-center gap-2.5 bg-black/5 dark:bg-white/10 rounded-xl px-3.5 py-2.5 border border-black/10 dark:border-white/15",
					children: [/* @__PURE__ */ Y(Ge, { className: "w-4 h-4 text-black/40 dark:text-white/50 shrink-0" }), /* @__PURE__ */ Y("input", {
						autoFocus: !0,
						value: r,
						onChange: (e) => i(e.target.value),
						placeholder: "Search for apps, files, settings",
						className: "flex-1 bg-transparent text-[13px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 outline-none"
					})]
				})
			}),
			r ? /* @__PURE__ */ Y("div", {
				className: "px-4 pb-4 overflow-y-auto max-h-72",
				children: d.length === 0 ? /* @__PURE__ */ X("p", {
					className: "text-center text-black/40 dark:text-white/40 text-sm py-6",
					children: [
						"No results for “",
						r,
						"”"
					]
				}) : d.map((e) => /* @__PURE__ */ X("button", {
					onClick: () => f(e),
					className: "flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-left",
					children: [/* @__PURE__ */ Y(B, {
						appConfig: e,
						size: 32
					}), /* @__PURE__ */ X("div", { children: [/* @__PURE__ */ Y("p", {
						className: "text-[13px] text-black dark:text-white font-medium",
						children: c(e.id, e.name)
					}), /* @__PURE__ */ Y("p", {
						className: "text-[11px] text-black/40 dark:text-white/40",
						children: e.category ?? "Application"
					})] })]
				}, e.id))
			}) : /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ X("div", {
				className: "px-6 pb-4",
				children: [/* @__PURE__ */ X("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ Y("h3", {
						className: "text-[12px] font-semibold text-black/60 dark:text-white/60 uppercase tracking-widest",
						children: "Pinned"
					}), /* @__PURE__ */ Y("button", {
						className: "text-[11px] text-black/40 hover:text-black/70 dark:text-white/40 dark:hover:text-white/70 transition-colors",
						children: "All apps →"
					})]
				}), /* @__PURE__ */ Y("div", {
					className: "grid grid-cols-6 gap-1",
					children: l.map((e) => /* @__PURE__ */ X("button", {
						onClick: () => f(e),
						className: "flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
						children: [/* @__PURE__ */ Y(B, {
							appConfig: e,
							size: 36
						}), /* @__PURE__ */ Y("span", {
							className: "text-[10px] text-black/80 dark:text-white/80 truncate w-full text-center leading-tight",
							children: c(e.id, e.name)
						})]
					}, e.id))
				})]
			}), /* @__PURE__ */ X("div", {
				className: "px-6 pb-3 border-t border-black/5 dark:border-white/8",
				children: [/* @__PURE__ */ Y("h3", {
					className: "text-[12px] font-semibold text-black/60 dark:text-white/60 uppercase tracking-widest mt-3 mb-2",
					children: "Recommended"
				}), /* @__PURE__ */ Y("div", {
					className: "grid grid-cols-3 gap-1",
					children: Ur.map((e) => /* @__PURE__ */ X("button", {
						className: "flex items-center gap-2.5 p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-left",
						children: [/* @__PURE__ */ Y("span", {
							className: "text-2xl w-8 text-center shrink-0",
							children: e.icon
						}), /* @__PURE__ */ X("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ Y("p", {
								className: "text-[12px] text-black/90 dark:text-white/90 font-medium truncate",
								children: e.label
							}), /* @__PURE__ */ Y("p", {
								className: "text-[10px] text-black/40 dark:text-white/40 truncate",
								children: e.subtitle
							})]
						})]
					}, e.label))
				})]
			})] }),
			/* @__PURE__ */ X("div", {
				className: "flex items-center justify-between px-6 py-3 border-t border-black/5 dark:border-white/8 mt-auto bg-black/5 dark:bg-black/20",
				children: [/* @__PURE__ */ X("button", {
					className: "flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					children: [/* @__PURE__ */ Y("div", {
						className: "w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center",
						children: /* @__PURE__ */ Y(Tt, { className: "w-4 h-4 text-white" })
					}), /* @__PURE__ */ Y("span", {
						className: "text-[12px] text-black/80 dark:text-white/80 font-semibold",
						children: "User"
					})]
				}), /* @__PURE__ */ Y("button", {
					className: "p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					title: "Power",
					children: /* @__PURE__ */ Y(xt, { className: "w-4.5 h-4.5 text-black/60 dark:text-white/60" })
				})]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/windows/SystemTray.tsx
function Gr({ open: e, onClose: t }) {
	let n = L((e) => e.notifications), r = L((e) => e.dismissNotification), i = n.filter((e) => !e.read), [a, o] = q([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ Y(P, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ Y(ut, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ Y(bt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ Y(A, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery",
			icon: /* @__PURE__ */ Y(E, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "display",
			label: "Display",
			icon: /* @__PURE__ */ Y(Ee, { className: "w-4 h-4" }),
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
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9970]",
		onClick: t
	}), /* @__PURE__ */ X(y.div, {
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
			/* @__PURE__ */ X("div", {
				className: "px-5 pt-4 pb-3 border-b border-black/8 dark:border-white/8",
				children: [/* @__PURE__ */ Y("div", {
					className: "text-3xl font-light text-black dark:text-white",
					children: /* @__PURE__ */ Y(k, {})
				}), /* @__PURE__ */ Y("p", {
					className: "text-[12px] text-black/50 dark:text-white/50 mt-0.5",
					children: c.toLocaleDateString("en-US", {
						weekday: "long",
						month: "long",
						day: "numeric"
					})
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8",
				children: /* @__PURE__ */ Y("div", {
					className: "grid grid-cols-3 gap-2",
					children: a.map((e) => /* @__PURE__ */ X("button", {
						onClick: () => s(e.id),
						className: R("flex flex-col items-start gap-1.5 p-3 rounded-xl transition-colors text-left border", e.active ? "bg-blue-500 dark:bg-blue-600 border-blue-500 dark:border-blue-600" : "bg-black/5 dark:bg-white/8 border-black/5 dark:border-white/5 hover:bg-black/8 dark:hover:bg-white/12"),
						children: [/* @__PURE__ */ Y("div", {
							className: R("w-6 h-6 flex items-center justify-center", e.active ? "text-white" : "text-black/60 dark:text-white/60"),
							children: e.icon
						}), /* @__PURE__ */ Y("span", {
							className: R("text-[10px] font-medium", e.active ? "text-white" : "text-black/60 dark:text-white/50"),
							children: e.label
						})]
					}, e.id))
				})
			}),
			/* @__PURE__ */ X("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8 space-y-2.5",
				children: [/* @__PURE__ */ Y(Kr, {
					icon: /* @__PURE__ */ Y(qe, { className: "w-3.5 h-3.5" }),
					defaultValue: 75
				}), /* @__PURE__ */ Y(Kr, {
					icon: /* @__PURE__ */ Y(Ke, { className: "w-3.5 h-3.5" }),
					defaultValue: 80
				})]
			}),
			/* @__PURE__ */ X("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8",
				children: [/* @__PURE__ */ Y("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: d
				}), /* @__PURE__ */ X("div", {
					className: "grid grid-cols-7 gap-0.5 text-center",
					children: [[
						"S",
						"M",
						"T",
						"W",
						"T",
						"F",
						"S"
					].map((e, t) => /* @__PURE__ */ Y("div", {
						className: "text-[9px] text-black/40 dark:text-white/30 pb-1",
						children: e
					}, t)), f.map((e, t) => /* @__PURE__ */ Y("div", {
						className: R("text-[11px] w-7 h-7 flex items-center justify-center rounded-full mx-auto", e === c.getDate() ? "bg-blue-500 text-white font-semibold" : e ? "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 cursor-default" : ""),
						children: e
					}, t))]
				})]
			}),
			i.length > 0 && /* @__PURE__ */ X("div", {
				className: "px-5 py-3 max-h-36 overflow-y-auto",
				children: [/* @__PURE__ */ Y("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: "Notifications"
				}), i.slice(0, 4).map((e) => /* @__PURE__ */ X("div", {
					className: "flex items-start gap-2.5 py-1.5 group",
					children: [
						/* @__PURE__ */ Y("div", {
							className: "w-6 h-6 rounded bg-blue-600 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ Y(fe, { className: "w-3 h-3 text-white" })
						}),
						/* @__PURE__ */ X("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ Y("p", {
								className: "text-[11px] text-black/80 dark:text-white/90 font-medium truncate",
								children: e.title
							}), /* @__PURE__ */ Y("p", {
								className: "text-[10px] text-black/40 dark:text-white/40 truncate",
								children: e.body
							})]
						}),
						/* @__PURE__ */ Y("button", {
							onClick: () => r(e.id),
							className: "text-black/20 dark:text-white/20 hover:text-black/60 dark:hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ Y(we, { className: "w-3 h-3" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
function Kr({ icon: e, defaultValue: t }) {
	let [n, r] = q(t);
	return /* @__PURE__ */ X("div", {
		className: "flex items-center gap-2.5",
		children: [
			/* @__PURE__ */ Y("span", {
				className: "text-black/50 dark:text-white/50 w-4 shrink-0",
				children: e
			}),
			/* @__PURE__ */ Y("input", {
				type: "range",
				min: 0,
				max: 100,
				value: n,
				onChange: (e) => r(Number(e.target.value)),
				className: "flex-1 h-1 rounded-full accent-blue-500"
			}),
			/* @__PURE__ */ X("span", {
				className: "text-[10px] text-black/40 dark:text-white/40 w-7 text-right",
				children: [n, "%"]
			})
		]
	});
}
//#endregion
//#region src/components/dock/Taskbar.tsx
function qr({ onOpenApp: e }) {
	let [t, n] = q(!1), [r, i] = q(!1), a = L((e) => e.dockAppIds), o = L((e) => e.apps), s = L((e) => e.runningAppIds), c = L((e) => e.launchApp), l = L((e) => e.restoreWindow), u = L((e) => e.focusWindow), d = L((e) => e.windows), { t: f, getAppName: p } = H(), m = a.map((e) => o[e]).filter(Boolean), h = (e) => {
		c(e);
	};
	return /* @__PURE__ */ X(J, { children: [
		/* @__PURE__ */ Y(Wr, {
			open: t,
			onClose: () => n(!1),
			onOpenApp: (t) => {
				e(t), n(!1);
			}
		}),
		/* @__PURE__ */ Y(Gr, {
			open: r,
			onClose: () => i(!1)
		}),
		/* @__PURE__ */ X("div", {
			className: "absolute bottom-0 inset-x-0 z-50 flex items-center justify-center h-(--taskbar-height)",
			style: {
				background: "var(--taskbar-bg)",
				backdropFilter: "blur(20px)",
				borderTop: "1px solid var(--taskbar-border)"
			},
			children: [/* @__PURE__ */ X("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ Y("button", {
						onClick: () => {
							n((e) => !e), i(!1);
						},
						className: R("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", t && "bg-black/10 dark:bg-white/15"),
						title: "Start",
						children: /* @__PURE__ */ X("svg", {
							viewBox: "0 0 24 24",
							className: "w-5 h-5",
							fill: "currentColor",
							children: [
								/* @__PURE__ */ Y("rect", {
									x: "3",
									y: "3",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-400"
								}),
								/* @__PURE__ */ Y("rect", {
									x: "13",
									y: "3",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-500"
								}),
								/* @__PURE__ */ Y("rect", {
									x: "3",
									y: "13",
									width: "8",
									height: "8",
									rx: "1",
									className: "fill-blue-500"
								}),
								/* @__PURE__ */ Y("rect", {
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
					/* @__PURE__ */ Y("button", {
						onClick: () => {
							n((e) => !e), i(!1);
						},
						className: R("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", t && "bg-black/10 dark:bg-white/15"),
						title: "Search",
						children: /* @__PURE__ */ Y(Ge, { className: "w-4 h-4 text-black/70 dark:text-white/80" })
					}),
					m.map((e) => {
						let t = s.includes(e.id), n = p(e.id, e.name), r = Object.values(d).filter((t) => t.appId === e.id);
						return /* @__PURE__ */ X("div", {
							className: "relative group/taskitem flex items-center justify-center",
							children: [/* @__PURE__ */ X("button", {
								onClick: () => h(e),
								className: R("w-10 h-10 flex items-center justify-center rounded-lg transition-colors relative", "hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20", t && "bg-black/5 dark:bg-white/10"),
								"aria-label": n,
								title: n,
								children: [/* @__PURE__ */ Y(B, {
									appConfig: e,
									size: 28
								}), t && /* @__PURE__ */ Y("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--win-accent)" })]
							}), r.length > 0 && /* @__PURE__ */ Y("div", {
								className: "hidden group-hover/taskitem:flex absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 bg-[#f3f3f3]/95 dark:bg-[#1f242b]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 p-2 rounded-xl shadow-2xl z-50 flex flex-col gap-1.5 w-40 pointer-events-auto select-none",
								children: r.map((t) => /* @__PURE__ */ X("div", {
									onClick: () => {
										l(t.id), u(t.id);
									},
									className: "flex flex-col gap-1.5 w-full text-left",
									children: [/* @__PURE__ */ X("div", {
										className: "flex items-center gap-1.5 px-1 pb-1 border-b border-black/5 dark:border-white/5 text-[10px] text-black/80 dark:text-white/80 font-semibold truncate",
										children: [/* @__PURE__ */ Y(B, {
											appConfig: e,
											size: 14
										}), /* @__PURE__ */ Y("span", {
											className: "truncate",
											children: t.title
										})]
									}), /* @__PURE__ */ Y("div", {
										className: R("h-20 rounded-md overflow-hidden flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 shadow-inner border border-black/5 dark:border-white/5", e.id === "terminal" ? "bg-black text-[6px] text-green-400 font-mono p-1.5 justify-start items-start" : e.id === "settings" ? "bg-slate-200 dark:bg-neutral-800 p-1 flex gap-1" : "bg-gradient-to-br from-blue-500 to-indigo-600"),
										children: e.id === "terminal" ? /* @__PURE__ */ X("div", { children: [/* @__PURE__ */ Y("p", { children: "Microsoft Windows [Version 10.0.22631]" }), /* @__PURE__ */ Y("p", {
											className: "mt-1",
											children: "C:\\Users\\User>_"
										})] }) : e.id === "settings" ? /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y("div", { className: "w-1/3 h-full bg-black/5 dark:bg-white/5 rounded-sm" }), /* @__PURE__ */ Y("div", { className: "flex-1 h-full bg-black/10 dark:bg-white/10 rounded-sm" })] }) : /* @__PURE__ */ Y(B, {
											appConfig: e,
											size: 28
										})
									})]
								}, t.id))
							})]
						}, e.id);
					})
				]
			}), /* @__PURE__ */ Y("div", {
				className: "absolute right-2 flex items-center",
				children: /* @__PURE__ */ Y("button", {
					onClick: () => {
						i((e) => !e), n(!1);
					},
					className: R("px-2 h-8 flex items-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors", r && "bg-black/10 dark:bg-white/15"),
					title: "System tray",
					children: /* @__PURE__ */ Y("span", {
						className: "text-xs text-black/80 dark:text-white/80 tabular-nums",
						children: /* @__PURE__ */ Y(k, {})
					})
				})
			})]
		})
	] });
}
//#endregion
//#region src/components/themes/WindowsTheme.tsx
function Jr({ onOpenApp: e }) {
	return /* @__PURE__ */ Y(J, { children: /* @__PURE__ */ Y("div", {
		className: "absolute bottom-0 inset-x-0 z-40 pointer-events-none",
		children: /* @__PURE__ */ Y("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ Y(qr, { onOpenApp: e })
		})
	}) });
}
//#endregion
//#region src/components/android/AppDrawer.tsx
function Yr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = q(""), a = L((e) => e.apps), { t: o, getAppName: s } = H(), c = Object.values(a).filter((e) => !e.disabled), l = r ? c.filter((e) => s(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : c, u = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: .5 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980 bg-black",
		onClick: t
	}), /* @__PURE__ */ X(y.div, {
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
			/* @__PURE__ */ Y("div", {
				className: "flex justify-center pt-3 pb-1",
				children: /* @__PURE__ */ Y("div", { className: "w-10 h-1 bg-white/30 rounded-full" })
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-4 py-2",
				children: /* @__PURE__ */ X("div", {
					className: "flex items-center gap-2.5 bg-white/10 rounded-2xl px-3 py-2.5",
					children: [
						/* @__PURE__ */ Y(Ge, { className: "w-4 h-4 text-white/50 shrink-0" }),
						/* @__PURE__ */ Y("input", {
							value: r,
							onChange: (e) => i(e.target.value),
							placeholder: o.search,
							className: "flex-1 bg-transparent text-[13px] text-white placeholder:text-white/40 outline-none"
						}),
						r && /* @__PURE__ */ Y("button", {
							onClick: () => i(""),
							children: /* @__PURE__ */ Y(V, { className: "w-3.5 h-3.5 text-white/40" })
						})
					]
				})
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex-1 overflow-y-auto px-4 pb-8",
				children: /* @__PURE__ */ Y("div", {
					className: "grid grid-cols-4 gap-y-5 gap-x-2 py-4",
					children: l.map((e) => /* @__PURE__ */ X("button", {
						onClick: () => u(e),
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ Y("div", {
							className: "w-14 h-14 rounded-2xl overflow-hidden",
							children: /* @__PURE__ */ Y(B, {
								appConfig: e,
								size: 56
							})
						}), /* @__PURE__ */ Y("span", {
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
function Xr({ open: e, onClose: t }) {
	let n = L((e) => e.notifications), r = L((e) => e.dismissNotification), i = L((e) => e.colorScheme), a = L((e) => e.setColorScheme), [o, s] = q(!1), [c, l] = q(70), [u, d] = q([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ Y(P, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ Y(ut, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dnd",
			label: "Do Not Dist",
			icon: /* @__PURE__ */ Y(lt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ Y(bt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "rotate",
			label: "Auto Rotate",
			icon: /* @__PURE__ */ Y(We, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "flashlight",
			label: "Flashlight",
			icon: /* @__PURE__ */ Y(ht, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery Sav",
			icon: /* @__PURE__ */ Y(E, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "cast",
			label: "Cast",
			icon: /* @__PURE__ */ Y(dt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dark",
			label: "Dark Mode",
			icon: /* @__PURE__ */ Y(A, { className: "w-4 h-4" }),
			active: i === "dark"
		},
		{
			id: "eye",
			label: "Eye Comfort",
			icon: /* @__PURE__ */ Y(pt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "bell",
			label: "Notifications",
			icon: /* @__PURE__ */ Y(fe, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "data",
			label: "Mobile Data",
			icon: /* @__PURE__ */ Y("svg", {
				className: "w-4 h-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ Y("path", { d: "M1 1h4v22H1zm9 8h4v14h-4zm9-8h4v22h-4z" })
			}),
			active: !0
		}
	]), f = (e) => {
		e === "dark" && a(i === "dark" ? "light" : "dark"), d((t) => t.map((t) => t.id === e ? {
			...t,
			active: !t.active
		} : t));
	}, p = n.filter((e) => !e.read), m = o ? u : u.slice(0, 6);
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-9980",
		onClick: t
	}), /* @__PURE__ */ X(y.div, {
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
			/* @__PURE__ */ X("div", {
				className: "flex items-center justify-between px-4 pb-2",
				children: [/* @__PURE__ */ Y("button", {
					onClick: t,
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ Y(V, { className: "w-4 h-4 text-white/70" })
				}), /* @__PURE__ */ Y("button", {
					onClick: () => s((e) => !e),
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ Y(D, { className: R("w-4 h-4 text-white/70 transition-transform", o ? "rotate-180" : "") })
				})]
			}),
			/* @__PURE__ */ X("div", {
				className: "flex items-center gap-3 px-4 py-2",
				children: [/* @__PURE__ */ Y(Ke, { className: "w-4 h-4 text-white/60 shrink-0" }), /* @__PURE__ */ Y("input", {
					type: "range",
					min: 0,
					max: 100,
					value: c,
					onChange: (e) => l(Number(e.target.value)),
					className: "flex-1 h-1 rounded-full accent-teal-400"
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "grid grid-cols-3 gap-2 px-4 pt-2",
				children: m.map((e) => /* @__PURE__ */ X("button", {
					onClick: () => f(e.id),
					className: R("flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-colors text-left", e.active ? "bg-teal-500/30 border border-teal-400/40" : "bg-white/8"),
					children: [/* @__PURE__ */ Y("span", {
						className: e.active ? "text-teal-300" : "text-white/50",
						children: e.icon
					}), /* @__PURE__ */ Y("span", {
						className: R("text-[10px] font-medium leading-tight", e.active ? "text-white" : "text-white/50"),
						children: e.label
					})]
				}, e.id))
			}),
			p.length > 0 && /* @__PURE__ */ X("div", {
				className: "mt-3 px-4 space-y-2",
				children: [/* @__PURE__ */ Y("div", { className: "h-px bg-white/10" }), p.slice(0, 3).map((e) => /* @__PURE__ */ X("div", {
					className: "flex items-center gap-3 py-2 group",
					children: [
						/* @__PURE__ */ Y("div", {
							className: "w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ Y("span", {
								className: "text-white text-xs font-bold",
								children: e.appName.charAt(0)
							})
						}),
						/* @__PURE__ */ X("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ Y("p", {
								className: "text-[11px] text-white/90 font-medium",
								children: e.title
							}), /* @__PURE__ */ Y("p", {
								className: "text-[10px] text-white/50 truncate",
								children: e.body
							})]
						}),
						/* @__PURE__ */ Y("button", {
							onClick: () => r(e.id),
							className: "text-white/20 hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ Y(V, { className: "w-3.5 h-3.5" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/themes/AndroidTheme.tsx
function Zr() {
	let [e, t] = q("");
	return G(() => {
		let e = () => t((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}));
		e();
		let n = setInterval(e, 1e3);
		return () => clearInterval(n);
	}, []), /* @__PURE__ */ Y(J, { children: e });
}
var Qr = 32, $r = 76, ei = 0;
function ti({ onOpenApp: e }) {
	let [t, n] = q(!1), [r, i] = q(!1), a = K(null), o = L((e) => e.windows), s = Object.values(o).some((e) => !e.isMinimized);
	return Or({
		onSwipeUp: () => {
			s || n(!0);
		},
		onSwipeDown: () => {
			s || i(!0);
		}
	}, a), /* @__PURE__ */ X("div", {
		ref: a,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ X("div", {
				className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 text-white text-[13px] font-semibold tabular-nums pointer-events-none",
				style: { height: Qr },
				children: [/* @__PURE__ */ Y(Zr, {}), /* @__PURE__ */ X("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ Y(St, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ Y(P, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ Y(E, { className: "w-[20px] h-[20px]" })
					]
				})]
			}),
			/* @__PURE__ */ Y(ee, {
				statusBarHeight: Qr,
				navBarHeight: $r,
				homeIndicatorHeight: ei
			}),
			!s && /* @__PURE__ */ Y("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				children: /* @__PURE__ */ Y(Ar, {
					onOpenApp: e,
					navBarHeight: $r
				})
			}),
			/* @__PURE__ */ Y(Yr, {
				open: t,
				onClose: () => n(!1),
				onOpenApp: (t) => {
					e(t), n(!1);
				}
			}),
			/* @__PURE__ */ Y(Xr, {
				open: r,
				onClose: () => i(!1)
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context-menu@2.2.16_@types+react-dom@19.2.3_@types+react@19.2.14__@type_7ddebea395c65d3c4d3683b445765102/node_modules/@radix-ui/react-context-menu/dist/index.mjs
var ni = "ContextMenu", [ri, ii] = r(ni, [De]), Q = De(), [ai, oi] = ri(ni), si = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e, [o, c] = U.useState(!1), l = Q(t), u = s(r), d = U.useCallback((e) => {
		c(e), u(e);
	}, [u]);
	return /* @__PURE__ */ Y(ai, {
		scope: t,
		open: o,
		onOpenChange: d,
		modal: a,
		children: /* @__PURE__ */ Y(je, {
			...l,
			dir: i,
			open: o,
			onOpenChange: d,
			modal: a,
			children: n
		})
	});
};
si.displayName = ni;
var ci = "ContextMenuTrigger", li = U.forwardRef((t, n) => {
	let { __scopeContextMenu: r, disabled: i = !1, ...a } = t, s = oi(ci, r), c = Q(r), l = U.useRef({
		x: 0,
		y: 0
	}), u = U.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...l.current
	}) }), d = U.useRef(0), f = U.useCallback(() => window.clearTimeout(d.current), []), p = (e) => {
		l.current = {
			x: e.clientX,
			y: e.clientY
		}, s.onOpenChange(!0);
	};
	return U.useEffect(() => f, [f]), U.useEffect(() => void (i && f()), [i, f]), /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(He, {
		...c,
		virtualRef: u
	}), /* @__PURE__ */ Y(o.span, {
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
		onPointerDown: i ? t.onPointerDown : e(t.onPointerDown, Ri((e) => {
			f(), d.current = window.setTimeout(() => p(e), 700);
		})),
		onPointerMove: i ? t.onPointerMove : e(t.onPointerMove, Ri(f)),
		onPointerCancel: i ? t.onPointerCancel : e(t.onPointerCancel, Ri(f)),
		onPointerUp: i ? t.onPointerUp : e(t.onPointerUp, Ri(f))
	})] });
});
li.displayName = ci;
var ui = "ContextMenuPortal", di = (e) => {
	let { __scopeContextMenu: t, ...n } = e;
	return /* @__PURE__ */ Y(Fe, {
		...Q(t),
		...n
	});
};
di.displayName = ui;
var fi = "ContextMenuContent", pi = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = oi(fi, n), a = Q(n), o = U.useRef(!1);
	return /* @__PURE__ */ Y(Pe, {
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
pi.displayName = fi;
var mi = "ContextMenuGroup", hi = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Oe, {
		...Q(n),
		...r,
		ref: t
	});
});
hi.displayName = mi;
var gi = "ContextMenuLabel", _i = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(ke, {
		...Q(n),
		...r,
		ref: t
	});
});
_i.displayName = gi;
var vi = "ContextMenuItem", yi = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Re, {
		...Q(n),
		...r,
		ref: t
	});
});
yi.displayName = vi;
var bi = "ContextMenuCheckboxItem", xi = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Be, {
		...Q(n),
		...r,
		ref: t
	});
});
xi.displayName = bi;
var Si = "ContextMenuRadioGroup", Ci = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Ue, {
		...Q(n),
		...r,
		ref: t
	});
});
Ci.displayName = Si;
var wi = "ContextMenuRadioItem", Ti = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Ae, {
		...Q(n),
		...r,
		ref: t
	});
});
Ti.displayName = wi;
var Ei = "ContextMenuItemIndicator", Di = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Ve, {
		...Q(n),
		...r,
		ref: t
	});
});
Di.displayName = Ei;
var Oi = "ContextMenuSeparator", ki = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(ze, {
		...Q(n),
		...r,
		ref: t
	});
});
ki.displayName = Oi;
var Ai = "ContextMenuArrow", ji = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Le, {
		...Q(n),
		...r,
		ref: t
	});
});
ji.displayName = Ai;
var Mi = "ContextMenuSub", Ni = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = Q(t), [s, c] = f({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Mi
	});
	return /* @__PURE__ */ Y(Ie, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
Ni.displayName = Mi;
var Pi = "ContextMenuSubTrigger", Fi = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Me, {
		...Q(n),
		...r,
		ref: t
	});
});
Fi.displayName = Pi;
var Ii = "ContextMenuSubContent", Li = U.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ Y(Ne, {
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
Li.displayName = Ii;
function Ri(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var zi = si, Bi = li, Vi = di, Hi = pi, Ui = yi, Wi = ki;
//#endregion
//#region src/lib/wallpaper-fit.ts
function Gi(e) {
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
function Ki() {
	let { t: e } = H(), t = L((e) => e.desktopViewOptionsOpen), n = L((e) => e.setDesktopViewOptionsOpen), r = L((e) => e.useStacks), i = L((e) => e.stackGroupBy), a = L((e) => e.toggleStacks), o = L((e) => e.setStackGroupBy), s = L((e) => e.desktopSortBy), c = L((e) => e.setDesktopSortBy), l = L((e) => e.desktopIconSize), u = L((e) => e.setDesktopIconSize), d = L((e) => e.desktopGridSpacing), f = L((e) => e.setDesktopGridSpacing), p = L((e) => e.desktopTextSize), m = L((e) => e.setDesktopTextSize), h = L((e) => e.desktopLabelPosition), g = L((e) => e.setDesktopLabelPosition), [_, v] = q({
		x: 0,
		y: 0
	}), [y, b] = q(!1), x = K(null), S = W((e) => {
		e.target.closest("button") || e.target.closest("select") || e.target.closest("input") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), x.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: _.x,
			oy: _.y
		});
	}, [_]), C = W((e) => {
		x.current && v({
			x: x.current.ox + (e.clientX - x.current.mx),
			y: x.current.oy + (e.clientY - x.current.my)
		});
	}, []), w = W(() => {
		x.current = null;
	}, []), T = (e) => {
		e === "none" ? r && a() : (r || a(), o(e));
	};
	return !t || typeof document > "u" ? null : tt(/* @__PURE__ */ Y("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99998 },
		children: /* @__PURE__ */ X("div", {
			className: "relative flex flex-col bg-neutral-100/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-[280px] overflow-hidden pointer-events-auto text-black dark:text-white",
			style: { transform: `translate(${_.x}px, ${_.y}px)` },
			onPointerMove: C,
			onPointerUp: w,
			onPointerCancel: w,
			children: [/* @__PURE__ */ X("div", {
				className: "w-full flex items-center justify-between px-4 pt-3 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: S,
				onMouseEnter: () => b(!0),
				onMouseLeave: () => b(!1),
				children: [
					/* @__PURE__ */ X("div", {
						className: "flex items-center gap-2",
						onPointerDown: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ Y("button", {
								onClick: () => n(!1),
								className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100",
								style: { backgroundColor: "#ff5f57" },
								title: "Close",
								children: y && /* @__PURE__ */ Y(V, {
									className: "w-2 h-2 text-red-900/80",
									strokeWidth: 3
								})
							}),
							/* @__PURE__ */ Y("div", {
								className: "w-3.5 h-3.5 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							}),
							/* @__PURE__ */ Y("div", {
								className: "w-3.5 h-3.5 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							})
						]
					}),
					/* @__PURE__ */ Y("span", {
						className: "text-[13px] font-semibold text-black/80 dark:text-white/80 absolute left-1/2 -translate-x-1/2",
						children: "Desktop"
					}),
					/* @__PURE__ */ Y("div", { className: "w-14" })
				]
			}), /* @__PURE__ */ X("div", {
				className: "flex flex-col p-4 gap-4 text-[13px] select-none",
				children: [
					/* @__PURE__ */ X("div", {
						className: "flex flex-col gap-2.5",
						children: [/* @__PURE__ */ X("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Stack By:"
							}), /* @__PURE__ */ X("select", {
								value: r ? i : "none",
								onChange: (e) => T(e.target.value),
								className: "bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none",
								children: [
									/* @__PURE__ */ Y("option", {
										value: "none",
										children: "None"
									}),
									/* @__PURE__ */ Y("option", {
										value: "kind",
										children: "Kind"
									}),
									/* @__PURE__ */ Y("option", {
										value: "shared-by",
										children: "Shared By"
									}),
									/* @__PURE__ */ Y("option", {
										value: "date-last-opened",
										children: "Date Last Opened"
									}),
									/* @__PURE__ */ Y("option", {
										value: "date-added",
										children: "Date Added"
									}),
									/* @__PURE__ */ Y("option", {
										value: "date-modified",
										children: "Date Modified"
									}),
									/* @__PURE__ */ Y("option", {
										value: "date-created",
										children: "Date Created"
									}),
									/* @__PURE__ */ Y("option", {
										value: "tags",
										children: "Tags"
									})
								]
							})]
						}), /* @__PURE__ */ X("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Sort By:"
							}), /* @__PURE__ */ X("select", {
								value: s,
								onChange: (e) => c(e.target.value),
								className: "bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10 rounded-md px-2 py-0.5 text-xs w-36 focus:outline-none",
								children: [
									/* @__PURE__ */ Y("option", {
										value: "none",
										children: "None"
									}),
									/* @__PURE__ */ Y("option", {
										value: "name",
										children: "Name"
									}),
									/* @__PURE__ */ Y("option", {
										value: "kind",
										children: "Kind"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ Y("div", { className: "h-px bg-black/10 dark:bg-white/10 -mx-4" }),
					/* @__PURE__ */ X("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ X("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ X("div", {
								className: "flex justify-between items-center",
								children: [/* @__PURE__ */ Y("span", {
									className: "text-black/70 dark:text-white/70",
									children: "Icon size:"
								}), /* @__PURE__ */ X("span", {
									className: "text-xs text-black/50 dark:text-white/50",
									children: [
										l,
										"×",
										l
									]
								})]
							}), /* @__PURE__ */ X("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ Y(mt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ Y("input", {
										type: "range",
										min: "16",
										max: "128",
										value: l,
										onChange: (e) => u(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ Y(mt, { className: "w-7 h-7 text-black/75 dark:text-white/75" })
								]
							})]
						}), /* @__PURE__ */ X("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Grid spacing:"
							}), /* @__PURE__ */ X("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ Y(gt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ Y("input", {
										type: "range",
										min: "0",
										max: "100",
										value: d,
										onChange: (e) => f(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ Y(Te, { className: "w-6 h-6 text-black/75 dark:text-white/75" })
								]
							})]
						})]
					}),
					/* @__PURE__ */ Y("div", { className: "h-px bg-black/10 dark:bg-white/10 -mx-4" }),
					/* @__PURE__ */ X("div", {
						className: "flex flex-col gap-3.5",
						children: [/* @__PURE__ */ X("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Text size:"
							}), /* @__PURE__ */ Y("select", {
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
								].map((e) => /* @__PURE__ */ Y("option", {
									value: e,
									children: e
								}, e))
							})]
						}), /* @__PURE__ */ X("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ Y("span", {
								className: "text-black/70 dark:text-white/70",
								children: "Label position:"
							}), /* @__PURE__ */ X("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ X("label", {
									className: "flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ Y("input", {
										type: "radio",
										name: "labelPosition",
										value: "bottom",
										checked: h === "bottom",
										onChange: () => g("bottom"),
										className: "w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
									}), /* @__PURE__ */ Y("span", { children: "Bottom" })]
								}), /* @__PURE__ */ X("label", {
									className: "flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ Y("input", {
										type: "radio",
										name: "labelPosition",
										value: "right",
										checked: h === "right",
										onChange: () => g("right"),
										className: "w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500 accent-blue-500"
									}), /* @__PURE__ */ Y("span", { children: "Right" })]
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
var qi = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", Ji = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", Yi = "min-w-[220px] outline-none z-[99999]";
function Xi({ children: e }) {
	let { t } = H(), n = j(), r = L((e) => e.useStacks), i = L((e) => e.toggleStacks), a = L((e) => e.openWidgetGallery), o = L((e) => e.wallpaperFitMode), s = L((e) => e.setDesktopViewOptionsOpen), c = L((e) => e.apps), l = L((e) => e.launchApp), u = L((e) => e.setSettingsActiveTab), d = hr(), [f, p] = q(!1), m = be(), h = gr(), g = ve(m, h.url ?? ""), _ = mr(g, d && h.kind !== "color"), v = h.kind === "color" ? d : _, y = d && v && h.kind !== "color" ? `url(${g})` : "none", b = () => {
		let e = Object.values(c).find((e) => e.id === "settings");
		e ? (u("wallpaper"), l(e)) : p(!0);
	}, x = () => n.wallpaper ? /* @__PURE__ */ Y("div", {
		className: "absolute inset-0 overflow-hidden bg-[#1e1e2e]",
		children: h.kind === "color" ? /* @__PURE__ */ Y("div", {
			className: "absolute inset-0",
			style: {
				backgroundColor: h.colorHex,
				transition: "background-color 120ms ease-out"
			}
		}) : d && h.kind === "live" && h.videoUrl ? /* @__PURE__ */ Y("video", {
			src: ve(m, h.videoUrl),
			autoPlay: !0,
			loop: !0,
			muted: !0,
			playsInline: !0,
			className: "absolute inset-0 w-full h-full object-cover"
		}, h.videoUrl) : /* @__PURE__ */ Y("div", {
			className: "absolute inset-0",
			style: {
				backgroundImage: y,
				...Gi(o),
				transition: "background-image 120ms ease-out"
			}
		})
	}) : /* @__PURE__ */ Y("div", { className: "absolute inset-0 overflow-hidden bg-[#f4f4f5] dark:bg-[#18181b]" }), S = n.contextMenu && (n.wallpaperPicker || n.widgets.allowGalleryEdit || n.iconGrid);
	return /* @__PURE__ */ X(J, { children: [
		n.contextMenu && S ? /* @__PURE__ */ X(zi, { children: [/* @__PURE__ */ Y(Bi, {
			asChild: !0,
			children: x()
		}), /* @__PURE__ */ Y(Vi, { children: /* @__PURE__ */ Y(Hi, {
			asChild: !0,
			className: Yi,
			children: /* @__PURE__ */ Y(w, {
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ X("div", { children: [
					n.wallpaperPicker && /* @__PURE__ */ Y(Ui, {
						className: qi,
						onSelect: b,
						children: t.changeWallpaper
					}),
					n.widgets.allowGalleryEdit && /* @__PURE__ */ Y(Ui, {
						className: qi,
						onSelect: () => a(),
						children: t.editWidgets
					}),
					(n.wallpaperPicker || n.widgets.allowGalleryEdit) && n.iconGrid && /* @__PURE__ */ Y(Wi, { className: Ji }),
					n.iconGrid && /* @__PURE__ */ X(J, { children: [
						/* @__PURE__ */ X(Ui, {
							className: qi,
							onSelect: () => i(),
							children: [/* @__PURE__ */ Y("span", {
								className: "w-3.5 shrink-0 flex items-center justify-center",
								children: r && /* @__PURE__ */ Y(Ce, { className: "w-3 h-3 stroke-[2.5]" })
							}), t.useStacks]
						}),
						/* @__PURE__ */ Y(Wi, { className: Ji }),
						/* @__PURE__ */ X(Ui, {
							className: qi,
							onSelect: () => s(!0),
							children: [/* @__PURE__ */ Y("span", { className: "w-3.5 shrink-0" }), t.showViewOptions]
						})
					] })
				] })
			})
		}) })] }) : x(),
		/* @__PURE__ */ Y("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			children: e
		}),
		/* @__PURE__ */ Y(Ki, {}),
		f && /* @__PURE__ */ Y("div", {
			className: "fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto",
			children: /* @__PURE__ */ X("div", {
				className: "w-full max-w-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-zinc-900 dark:text-white transition-colors",
				children: [/* @__PURE__ */ X("div", {
					className: "px-4 py-3 border-b border-black/10 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80",
					children: [/* @__PURE__ */ Y("h3", {
						className: "font-semibold text-sm text-zinc-900 dark:text-white",
						children: t.changeWallpaper
					}), /* @__PURE__ */ Y("button", {
						onClick: () => p(!1),
						className: "p-1 rounded-lg hover:bg-black/5 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors",
						children: /* @__PURE__ */ Y(V, { className: "w-4 h-4" })
					})]
				}), /* @__PURE__ */ Y("div", {
					className: "p-4 overflow-y-auto flex-1 bg-white dark:bg-zinc-900",
					children: /* @__PURE__ */ Y(ye, { variant: "horizontal" })
				})]
			})
		})
	] });
}
//#endregion
//#region src/components/desktop/EditContextMenu.tsx
var Zi = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", Qi = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", $i = "min-w-[180px] outline-none z-[99999]";
function ea(e) {
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
async function ta(e) {
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
function na(e, t) {
	if (e === "selectAll" && t instanceof HTMLElement && !(t instanceof HTMLInputElement) && !(t instanceof HTMLTextAreaElement)) {
		let e = window.getSelection(), n = document.createRange();
		n.selectNodeContents(t), e?.removeAllRanges(), e?.addRange(n);
		return;
	}
	document.execCommand(e);
}
async function ra(e) {
	let t = document.createElement("a");
	t.href = e, t.download = e.split("/").pop()?.split("?")[0] || "image", document.body.appendChild(t), t.click(), t.remove();
}
function ia(e, t, n) {
	let r = [];
	if (e.isImage && e.imageSrc) {
		let t = e.imageSrc;
		r.push({
			key: "saveImage",
			label: n.saveImage,
			onSelect: () => void ra(t)
		}), r.push({
			key: "sep-save-image",
			separator: !0
		});
	}
	return e.isEditable && (r.push({
		key: "undo",
		label: n.menuUndo,
		disabled: !e.canUndo,
		onSelect: () => na("undo", t)
	}), r.push({
		key: "redo",
		label: n.menuRedo,
		disabled: !e.canRedo,
		onSelect: () => na("redo", t)
	}), r.push({
		key: "sep-undo-redo",
		separator: !0
	}), r.push({
		key: "cut",
		label: n.menuCut,
		disabled: !e.canCut,
		onSelect: () => na("cut", t)
	})), r.push({
		key: "copy",
		label: n.menuCopy,
		disabled: !e.canCopy,
		onSelect: () => na("copy", t)
	}), e.isEditable && r.push({
		key: "paste",
		label: n.menuPaste,
		disabled: !e.canPaste,
		onSelect: () => void ta(t)
	}), r.push({
		key: "sep-select-all",
		separator: !0
	}), r.push({
		key: "selectAll",
		label: n.menuSelectAll,
		disabled: !e.canSelectAll,
		onSelect: () => na("selectAll", t)
	}), r;
}
function aa({ children: e, resolveItems: t }) {
	let { t: n } = H(), [r, i] = q(null), a = K(null);
	return /* @__PURE__ */ X(zi, {
		onOpenChange: (e) => {
			e || i(null);
		},
		children: [/* @__PURE__ */ Y(Bi, {
			asChild: !0,
			onContextMenu: W((e) => {
				let r = ea(e.target);
				if (!r) {
					e.preventDefault(), i(null);
					return;
				}
				a.current = e.target;
				let o = ia(r.flags, e.target, n), s = t?.(o, {
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
			children: /* @__PURE__ */ Y("div", {
				className: "contents",
				children: e
			})
		}), /* @__PURE__ */ Y(Vi, { children: /* @__PURE__ */ Y(Hi, {
			asChild: !0,
			className: $i,
			children: r ? /* @__PURE__ */ Y(w, {
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ Y("div", { children: r.map((e) => e.separator ? /* @__PURE__ */ Y(Wi, { className: Qi }, e.key) : /* @__PURE__ */ Y(Ui, {
					className: Zi,
					disabled: e.disabled,
					onSelect: e.onSelect,
					children: e.label
				}, e.key)) })
			}) : /* @__PURE__ */ Y("div", {})
		}) })]
	});
}
//#endregion
//#region src/components/desktop/AppIcon.tsx
var oa = 6, sa = 700;
function ca({ items: e, appId: t, onClose: n }) {
	let r = (e) => {
		n(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return /* @__PURE__ */ Y(J, { children: e.map((e) => e.separator ? /* @__PURE__ */ Y(Wi, { className: "my-1 h-px bg-black/10 dark:bg-white/10" }, e.key) : /* @__PURE__ */ X(Ui, {
		disabled: e.disabled,
		onSelect: () => r(e.action),
		className: "flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors",
		children: [e.label, e.shortcut && /* @__PURE__ */ Y("span", {
			className: "text-[10px] opacity-50 ml-4",
			children: e.shortcut
		})]
	}, e.key)) });
}
function la({ items: e, appId: t, anchorX: n, anchorY: r, onClose: i }) {
	let a = Math.min(n, window.innerWidth - 192 - 8), o = (e) => {
		i(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return tt(/* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y("div", {
		className: "fixed inset-0 z-9998",
		onPointerDown: i
	}), /* @__PURE__ */ Y("div", {
		className: "fixed z-9999 min-w-48 bg-white/90 dark:bg-[#151821]/95 backdrop-blur-2xl rounded-menu shadow-2xl border border-black/10 dark:border-white/8 p-1 text-xs overflow-hidden",
		style: {
			left: a,
			top: r - 8,
			transform: "translateY(-100%)"
		},
		children: e.map((e) => e.separator ? /* @__PURE__ */ Y("div", { className: "my-1 h-px bg-black/10 dark:bg-white/10 mx-2" }, e.key) : /* @__PURE__ */ X("button", {
			disabled: e.disabled,
			onPointerDown: (t) => {
				t.stopPropagation(), o(e.action);
			},
			className: R("w-full flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none text-left", e.disabled ? "opacity-40" : "hover:bg-blue-500 hover:text-white transition-colors"),
			children: [/* @__PURE__ */ Y("span", { children: e.label }), e.shortcut && /* @__PURE__ */ Y("span", {
				className: "text-[10px] opacity-50 ml-4",
				children: e.shortcut
			})]
		}, e.key))
	})] }), document.body);
}
function ua({ appConfig: e, x: t, y: n, onOpen: r, onDrop: i, onDragStart: a, onDrag: o, isSelected: s = !1, onSelect: c, onUpAfterClick: l }) {
	let u = L((e) => e.desktopIconSize), d = L((e) => e.desktopLabelPosition), f = L((e) => e.desktopTextSize), [p, m] = q(!1), { getAppName: h } = H(), g = h(e.id, e.name), [_, v] = q({
		x: t,
		y: n
	}), [y, b] = q(!1), [x, S] = q(null), C = K(null), T = K(0), E = K(null), D = K(null), O = K(!1), k = K({
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
		D.current &&= (clearTimeout(D.current), null);
	};
	return /* @__PURE__ */ X(J, { children: [x && e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ Y(la, {
		items: e.contextMenu,
		appId: e.id,
		anchorX: x.x,
		anchorY: x.y,
		onClose: () => S(null)
	}), /* @__PURE__ */ X(zi, { children: [/* @__PURE__ */ Y(Bi, {
		asChild: !0,
		children: /* @__PURE__ */ Y("div", {
			"data-app-icon": "true",
			"data-app-id": e.id,
			className: R("absolute pointer-events-auto", e.disabled && "opacity-40 pointer-events-none"),
			style: {
				left: A.x,
				top: A.y,
				width: d === "bottom" ? u + 56 : u + 104,
				zIndex: p ? 1e3 : 1,
				transition: p ? "none" : "left 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)"
			},
			children: /* @__PURE__ */ X("button", {
				className: R("flex w-full items-center select-none rounded-lg", d === "bottom" ? "flex-col text-center gap-2 p-2" : "flex-row text-left gap-3 p-2", "focus:outline-none transition-transform duration-75", s ? "bg-white/8 dark:bg-white/5" : "hover:bg-white/15", y && !p && "scale-90 opacity-80", p && "scale-105 opacity-90 drop-shadow-2xl"),
				onPointerDown: (r) => {
					if (r.button !== 0) return;
					r.stopPropagation(), b(!0), O.current = r.pointerType === "touch", c && c(e.id, r), C.current = {
						startMouseX: r.clientX,
						startMouseY: r.clientY,
						startX: t,
						startY: n,
						moved: !1
					}, r.currentTarget.setPointerCapture(r.pointerId), O.current && e.contextMenu && e.contextMenu.length > 0 && (D.current = setTimeout(() => {
						if (D.current = null, C.current && !C.current.moved) {
							try {
								r.target.releasePointerCapture(r.pointerId);
							} catch {}
							b(!1), S({
								x: C.current.startMouseX,
								y: C.current.startMouseY
							}), C.current = null, window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", a);
						}
					}, sa));
					let i = (e) => {
						if (!C.current) return;
						let t = e.clientX - C.current.startMouseX, n = e.clientY - C.current.startMouseY;
						if (!C.current.moved && Math.hypot(t, n) < oa) return;
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
						C.current = null, m(!1), o ? k.current.onDrop(s + n, c + r) : (k.current.onUpAfterClick && k.current.onUpAfterClick(e.id), T.current += 1, T.current === 2 ? (T.current = 0, E.current && clearTimeout(E.current), k.current.onOpen(e)) : E.current = setTimeout(() => {
							T.current = 0;
						}, 350));
					};
					window.addEventListener("pointermove", i), window.addEventListener("pointerup", a);
				},
				"aria-label": `Open ${g}`,
				children: [/* @__PURE__ */ X("div", {
					className: "relative shrink-0",
					children: [/* @__PURE__ */ Y(B, {
						appConfig: e,
						size: u,
						className: "drop-shadow-xl"
					}), e.badge !== void 0 && /* @__PURE__ */ Y("span", {
						className: "absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow",
						children: e.badge
					})]
				}), /* @__PURE__ */ Y("span", {
					className: R("block w-full text-white font-medium leading-tight px-0 py-0.5 rounded-[4px] border border-transparent", d === "bottom" ? "text-center mx-auto" : "text-left"),
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
	}), e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ Y(Vi, { children: /* @__PURE__ */ Y(Hi, {
		asChild: !0,
		className: "min-w-48 outline-none z-[99999]",
		children: /* @__PURE__ */ Y(w, {
			variant: "panel",
			className: "p-1 text-xs",
			children: /* @__PURE__ */ Y("div", { children: /* @__PURE__ */ Y(ca, {
				items: e.contextMenu,
				appId: e.id,
				onClose: () => {}
			}) })
		})
	}) })] })] });
}
function da({ appList: e, posMap: t, activeDrag: n, maxRows: r, maxCols: i, cellW: a, cellH: o, desktopSortBy: s = "none", useStacks: c = !1 }) {
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
function fa({ onOpenApp: e }) {
	let { config: t } = x(), n = ct(), r = L((e) => e.apps), i = L((e) => e.iconLayout), a = L((e) => e.setIconLayout), o = L((e) => e.desktopIconSize), s = L((e) => e.desktopGridSpacing), c = L((e) => e.desktopLabelPosition), l = L((e) => e.desktopSortBy), u = L((e) => e.useStacks), d = L((e) => e.stackGroupBy), f = K(null), { getAppName: p } = H(), [m, h] = q(null), [g, _] = q(/* @__PURE__ */ new Set()), [v, y] = q(null), [b, S] = q({}), C = K(!1), w = 108, T = 124;
	if (c === "bottom") {
		let e = 44 + (s - 50) * .8, t = 32 + (s - 50) * .8;
		w = o + e, T = o + 28 + t;
	} else {
		let e = 32 + (s - 50) * .8, t = 20 + (s - 50) * .8;
		w = o + 80 + e, T = o + t;
	}
	let E = Math.max(0, n.height - t.layout.desktopInsets.top - t.layout.desktopInsets.bottom), D = Math.max(0, n.width - t.layout.desktopInsets.left - t.layout.desktopInsets.right), O = Math.max(1, Math.floor((E - 40) / T)), k = Math.max(1, Math.floor((D - 40) / w)), A = Object.values(r).filter((e) => !e.disabled), j = u ? d : l, M = [...A];
	j === "name" || j === "shared-by" || j === "date-last-opened" || j === "date-added" || j === "date-modified" || j === "date-created" || j === "tags" ? M.sort((e, t) => {
		let n = p(e.id, e.name), r = p(t.id, t.name);
		return n.localeCompare(r);
	}) : j === "kind" && M.sort((e, t) => {
		let n = e.category ?? "Other", r = t.category ?? "Other", i = n.localeCompare(r);
		return i === 0 ? p(e.id, e.name).localeCompare(p(t.id, t.name)) : i;
	});
	let N = {};
	for (let e of i) N[e.appId] = {
		x: e.x,
		y: e.y
	};
	let ee = K(g);
	ee.current = g;
	let P = K(M);
	P.current = M;
	let F = {}, I = -1;
	if (m && g.has(m.appId)) {
		let e = b[m.appId] || {
			x: m.x,
			y: m.y
		}, t = m.x - e.x, n = m.y - e.y, { coords: r } = da({
			appList: M.filter((e) => !g.has(e.id)),
			posMap: N,
			activeDrag: null,
			maxRows: O,
			maxCols: k,
			cellW: w,
			cellH: T,
			desktopSortBy: l,
			useStacks: u
		});
		for (let e of M) if (g.has(e.id)) {
			let r = b[e.id] || {
				x: 0,
				y: 0
			};
			F[e.id] = {
				x: r.x + t,
				y: r.y + n
			};
		} else F[e.id] = r[e.id] || {
			x: 20,
			y: 20
		};
		let i = Math.max(0, Math.min(k - 1, Math.round((m.x - 20) / w))), a = Math.max(0, Math.min(O - 1, Math.round((m.y - 20) / T)));
		I = i * O + a;
	} else {
		let e = da({
			appList: M,
			posMap: N,
			activeDrag: m,
			maxRows: O,
			maxCols: k,
			cellW: w,
			cellH: T,
			desktopSortBy: l,
			useStacks: u
		});
		F = e.coords, I = e.hoveredIndex;
	}
	G(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = e.target;
			if (t.closest("[id^=\"window-\"]") || t.closest("[data-windowchrome=\"true\"]") || t.closest("[data-menubar=\"true\"]") || t.closest("[data-dock=\"true\"]") || t.closest("[data-widget=\"true\"]") || t.closest("[data-app-icon=\"true\"]") || t.closest("[data-menu-portal=\"true\"]") || t.closest("[data-radix-popper-content-wrapper]") || !f.current) return;
			let n = f.current.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top, a = e.shiftKey || e.metaKey || e.ctrlKey;
			a || _(/* @__PURE__ */ new Set()), y({
				startX: r,
				startY: i,
				currentX: r,
				currentY: i
			}), C.current = !0;
			let s = (e) => {
				if (!C.current || !f.current) return;
				let t = f.current.getBoundingClientRect(), n = e.clientX - t.left, s = e.clientY - t.top;
				y((e) => e ? {
					...e,
					currentX: n,
					currentY: s
				} : null);
				let l = Math.min(r, n), u = Math.min(i, s), d = Math.max(r, n), p = Math.max(i, s), m = c === "bottom" ? o + 24 : o + 104, h = c === "bottom" ? o + 40 : o + 24, g = new Set(a ? ee.current : []);
				for (let e of P.current) {
					let t = F[e.id];
					if (!t) continue;
					let n = t.x, r = t.y, i = t.x + m, o = t.y + h;
					l < i && d > n && u < o && p > r ? g.add(e.id) : a || g.delete(e.id);
				}
				_(g);
			}, l = () => {
				C.current = !1, y(null), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", l);
			};
			window.addEventListener("pointermove", s), window.addEventListener("pointerup", l);
		};
		return window.addEventListener("pointerdown", e), () => {
			window.removeEventListener("pointerdown", e);
		};
	}, [
		c,
		o,
		F
	]);
	let te = (e, t) => {
		t.shiftKey || t.metaKey || t.ctrlKey ? _((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		}) : g.has(e) || _(/* @__PURE__ */ new Set([e]));
	}, ne = (e) => {
		_(/* @__PURE__ */ new Set([e]));
	}, re = (e) => {
		let t = g;
		g.has(e) || (t = /* @__PURE__ */ new Set([e]), _(t));
		let n = {};
		for (let e of t) n[e] = F[e] || {
			x: 0,
			y: 0
		};
		S(n), h({
			appId: e,
			x: F[e]?.x || 0,
			y: F[e]?.y || 0
		});
	}, ie = (e, t, n) => {
		let r = b[e];
		if (!r) {
			h(null);
			return;
		}
		let i = g.has(e) ? g : /* @__PURE__ */ new Set([e]), o = {};
		for (let e of M) {
			let a = N[e.id] || {
				x: 20,
				y: 20
			};
			if (i.has(e.id)) {
				let i = b[e.id] || {
					x: 20,
					y: 20
				}, a = Math.round((i.x - 20) / w), s = Math.round((i.y - 20) / T), c = Math.round((r.x - 20) / w), l = Math.round((r.y - 20) / T), u = Math.round((t - 20) / w), d = Math.round((n - 20) / T), f = u - c, p = d - l, m = Math.max(0, a + f), h = Math.max(0, s + p);
				o[e.id] = {
					x: m * w + 20,
					y: h * T + 20
				};
			} else o[e.id] = { ...a };
		}
		let { coords: s } = da({
			appList: M,
			posMap: o,
			activeDrag: null,
			maxRows: O,
			maxCols: k,
			cellW: w,
			cellH: T,
			desktopSortBy: l,
			useStacks: u
		}), c = M.map((e) => {
			let t = Math.round((s[e.id].x - 20) / w), n = Math.round((s[e.id].y - 20) / T);
			return {
				appId: e.id,
				x: t * w + 20,
				y: n * T + 20
			};
		});
		a(c), h(null), S({});
	};
	return /* @__PURE__ */ X("div", {
		ref: f,
		className: "absolute inset-0 pointer-events-none select-none z-10",
		style: {
			top: "var(--desktop-inset-top)",
			right: "var(--desktop-inset-right)",
			bottom: "var(--desktop-inset-bottom)",
			left: "var(--desktop-inset-left)"
		},
		children: [
			v && /* @__PURE__ */ Y("div", {
				className: "absolute rounded-sm pointer-events-none",
				style: {
					left: Math.min(v.startX, v.currentX),
					top: Math.min(v.startY, v.currentY),
					width: Math.abs(v.startX - v.currentX),
					height: Math.abs(v.startY - v.currentY),
					border: "0.75px solid rgba(255, 255, 255, 0.28)",
					backgroundColor: "rgba(255, 255, 255, 0.08)",
					boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)"
				}
			}),
			m && (() => {
				let e = g.has(m.appId), t = e ? Array.from(g) : [m.appId], n = b[m.appId] || {
					x: m.x,
					y: m.y
				}, i = Math.round((n.x - 20) / w), a = Math.round((n.y - 20) / T), s = Math.floor(I / O), l = I % O, u = c === "bottom" ? o + 24 : o + 104, d = c === "bottom" ? o + 40 : o + 24;
				return /* @__PURE__ */ Y(J, { children: t.map((t) => {
					let n = r[t];
					if (!n) return null;
					let c = b[t] || {
						x: 0,
						y: 0
					}, f = Math.round((c.x - 20) / w), m = Math.round((c.y - 20) / T), h = e ? f - i : 0, g = e ? m - a : 0, _ = s + h, v = l + g;
					if (_ < 0 || _ >= k || v < 0 || v >= O) return null;
					let y = _ * w + 20, x = v * T + 20, S = p(n.id, n.name);
					return /* @__PURE__ */ X("div", {
						className: "absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5 z-30",
						style: {
							left: y + (w - u) / 2,
							top: x + (T - d) / 2,
							width: u,
							height: d,
							transition: "left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)"
						},
						children: [/* @__PURE__ */ Y("div", {
							className: "opacity-20 scale-75 select-none pointer-events-none",
							children: /* @__PURE__ */ Y(B, {
								appConfig: n,
								size: o
							})
						}), /* @__PURE__ */ Y("span", {
							className: "block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate opacity-20 mt-2 select-none pointer-events-none",
							style: { textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)" },
							children: S
						})]
					}, `ghost-${t}`);
				}) });
			})(),
			M.map((t) => {
				let { x: n, y: r } = F[t.id] || {
					x: 0,
					y: 0
				};
				return /* @__PURE__ */ Y(ua, {
					appConfig: t,
					x: n,
					y: r,
					isSelected: g.has(t.id),
					onOpen: e,
					onSelect: te,
					onUpAfterClick: ne,
					onDragStart: () => re(t.id),
					onDrag: (e, n) => h({
						appId: t.id,
						x: e,
						y: n
					}),
					onDrop: (e, n) => ie(t.id, e, n)
				}, t.id);
			})
		]
	});
}
//#endregion
//#region src/types/widget.ts
var pa = {
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
}, ma = [{
	id: "weather",
	appId: "__built-in__",
	name: "Weather",
	description: "Current weather conditions",
	sizes: ["small", "medium"],
	componentKey: "WeatherWidget"
}], ha = [...oe.flatMap((e) => (e.widgets ?? []).map((t) => ({
	...t,
	appId: e.id
}))), ...ma];
[...new Set(ha.map((e) => e.appId))];
function ga(e) {
	return ha.find((t) => t.id === e);
}
//#endregion
//#region src/components/widgets/WidgetRenderer.tsx
var _a = {
	ClockWidget: Xe(() => import("./ClockWidget-3iolx_ZE.js").then((e) => ({ default: e.ClockWidget }))),
	ClockDarkWidget: Xe(() => import("./ClockWidget-3iolx_ZE.js").then((e) => ({ default: e.ClockDarkWidget }))),
	ClockWorldWidget: Xe(() => import("./ClockWidget-3iolx_ZE.js").then((e) => ({ default: e.ClockWorldWidget }))),
	ClockDigitalWidget: Xe(() => import("./ClockWidget-3iolx_ZE.js").then((e) => ({ default: e.ClockDigitalWidget }))),
	ClockFlipWidget: Xe(() => import("./ClockWidget-3iolx_ZE.js").then((e) => ({ default: e.ClockFlipWidget }))),
	CalendarWidget: Xe(() => import("./CalendarWidget-CoMRkAMq.js").then((e) => ({ default: e.CalendarWidget }))),
	CalendarTodayWidget: Xe(() => import("./CalendarWidget-CoMRkAMq.js").then((e) => ({ default: e.CalendarTodayWidget }))),
	WeatherWidget: Xe(() => import("./WeatherWidget-D4EQ_pKf.js").then((e) => ({ default: e.WeatherWidget }))),
	NotesWidget: Xe(() => import("./NotesWidget-CWxNXfe-.js").then((e) => ({ default: e.NotesWidget })))
};
function va({ componentKey: e, size: t }) {
	let n = _a[e];
	return n ? /* @__PURE__ */ Y(Ye, {
		fallback: /* @__PURE__ */ Y("div", { className: "w-full h-full rounded-[20px] bg-white/5 animate-pulse" }),
		children: /* @__PURE__ */ Y(n, { size: t })
	}) : /* @__PURE__ */ Y("div", {
		className: "w-full h-full flex items-center justify-center text-white/30 text-xs rounded-[20px] bg-white/5",
		children: "Unknown widget"
	});
}
//#endregion
//#region src/components/widgets/WidgetCard.tsx
var ya = 4;
function ba({ instance: e }) {
	let t = L((e) => e.moveWidget), n = L((e) => e.removeWidget), r = L((e) => e.isEditingWidgets), i = ga(e.definitionId), { w: a, h: o } = pa[e.size], [s, c] = q({
		x: e.x,
		y: e.y
	}), l = K(null);
	return i ? /* @__PURE__ */ X(y.div, {
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
				!l.current.moved && Math.hypot(t, n) < ya || (l.current.moved = !0, c({
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
		children: [r && /* @__PURE__ */ Y("button", {
			"data-widget-remove": !0,
			onClick: () => n(e.instanceId),
			className: "absolute -top-2 -left-2 z-10 w-5 h-5 bg-black/80 border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors",
			"aria-label": "Remove widget",
			children: /* @__PURE__ */ Y(V, { className: "w-3 h-3 text-white" })
		}), /* @__PURE__ */ Y("div", {
			className: "w-full h-full cursor-grab active:cursor-grabbing",
			children: /* @__PURE__ */ Y(w, {
				variant: "widget",
				className: "w-full h-full",
				children: /* @__PURE__ */ Y(va, {
					componentKey: i.componentKey,
					size: e.size
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/widgets/WidgetLayer.tsx
function xa() {
	let e = L((e) => e.widgetInstances);
	return /* @__PURE__ */ Y("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: L((e) => e.isEditingWidgets) ? 1001 : 2 },
		children: /* @__PURE__ */ Y(g, { children: e.map((e) => /* @__PURE__ */ Y(y.div, {
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
			children: /* @__PURE__ */ Y(ba, { instance: e })
		}, e.instanceId)) })
	});
}
//#endregion
//#region src/components/widgets/WidgetGalleryPanel.tsx
function Sa({ ghost: e }) {
	let { w: t, h: n } = pa[e.size];
	return tt(/* @__PURE__ */ Y("div", {
		className: "fixed pointer-events-none z-[99999] rounded-[20px] overflow-hidden opacity-80",
		style: {
			left: e.x - t / 2,
			top: e.y - n / 2,
			width: t,
			height: n
		},
		children: /* @__PURE__ */ Y(w, {
			variant: "widget",
			className: "w-full h-full",
			children: /* @__PURE__ */ Y(va, {
				componentKey: e.def.componentKey,
				size: e.size
			})
		})
	}), document.body);
}
function Ca({ def: e, size: t, onDragStart: n, cardIndex: r }) {
	let { w: i, h: a } = pa[t], o = Math.min(140 / i, 110 / a), s = Math.round(i * o), c = Math.round(a * o), [l, u] = q(!1);
	return G(() => {
		let e = setTimeout(() => {
			u(!0);
		}, 150 + r * 50);
		return () => clearTimeout(e);
	}, [r]), /* @__PURE__ */ X("div", {
		className: "flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing select-none",
		onPointerDown: (r) => {
			l && (r.preventDefault(), n(e, t, r.clientX, r.clientY));
		},
		children: [/* @__PURE__ */ Y("div", {
			className: "rounded-[14px] overflow-hidden bg-white/5 border border-white/10",
			style: {
				width: s,
				height: c
			},
			children: /* @__PURE__ */ Y("div", {
				style: {
					width: i,
					height: a,
					transform: `scale(${o})`,
					transformOrigin: "top left",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ Y(w, {
					variant: "widget",
					className: "w-full h-full",
					children: l ? /* @__PURE__ */ Y(va, {
						componentKey: e.componentKey,
						size: t
					}) : /* @__PURE__ */ Y("div", { className: "w-full h-full bg-black/5 dark:bg-white/5 animate-pulse" })
				})
			})
		}), /* @__PURE__ */ Y("p", {
			className: "text-black/60 dark:text-white/70 text-[10px] text-center leading-tight max-w-[120px] truncate",
			children: t
		})]
	});
}
function wa({ appId: e, selected: t, onClick: n }) {
	let r = L((e) => e.apps), { t: i, getAppName: a } = H(), o = e === "__built-in__" ? null : r[e], s = o ? a(o.id, o.name) : i.builtIn;
	return /* @__PURE__ */ X("button", {
		onClick: n,
		className: R("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", t ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
		children: [o ? /* @__PURE__ */ Y(B, {
			appConfig: o,
			size: 20,
			className: "rounded-md shrink-0"
		}) : /* @__PURE__ */ Y("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" }), /* @__PURE__ */ Y("span", {
			className: "text-[13px] truncate",
			children: s
		})]
	});
}
function Ta() {
	let e = L((e) => e.closeWidgetGallery), t = L((e) => e.addWidget), n = L((e) => e.apps), { t: r, getAppName: i, getWidgetName: a, getWidgetDescription: o } = H(), [s, c] = q(""), [l, u] = q("__all__"), [d, f] = q(null), [p, m] = q(!1), h = K(null), _ = K(null);
	G(() => {
		let e = setTimeout(() => {
			m(!0);
		}, 200);
		return () => clearTimeout(e);
	}, []);
	let v = [...new Set(ha.map((e) => e.appId))], b = ha.filter((e) => {
		let t = l === "__all__" || e.appId === l, r = s.toLowerCase(), c = !r || a(e.id, e.name).toLowerCase().includes(r) || o(e.id, e.description ?? "").toLowerCase().includes(r) || i(e.appId, n[e.appId]?.name ?? "").toLowerCase().includes(r);
		return t && c;
	}), x = {};
	for (let e of b) x[e.appId] || (x[e.appId] = []), x[e.appId].push(e);
	let S = W((e, n, r, i) => {
		_.current = {
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
			if ((!n || !n.contains(e.target)) && _.current) {
				let { def: n, size: r } = _.current, { w: i, h: a } = pa[r];
				t(n, r, e.clientX - i / 2, e.clientY - a / 2);
			}
			_.current = null, f(null);
		};
		window.addEventListener("pointermove", a), window.addEventListener("pointerup", o);
	}, [t]);
	G(() => {
		let t = (t) => {
			t.key === "Escape" && e();
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [e]);
	let C = d !== null;
	return /* @__PURE__ */ X(J, { children: [
		/* @__PURE__ */ Y(y.div, {
			className: "fixed inset-0 z-[1000] bg-black/20 dark:bg-black/50",
			initial: { opacity: 0 },
			animate: { opacity: +!C },
			exit: { opacity: 0 },
			onClick: e
		}),
		/* @__PURE__ */ Y(y.div, {
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
			children: /* @__PURE__ */ Y(w, {
				variant: "panel",
				borderRadius: "20px 20px 0 0",
				className: "flex-1 mx-3 mb-0 flex flex-col shadow-2xl",
				children: /* @__PURE__ */ X("div", {
					className: "flex flex-col w-full h-full",
					children: [/* @__PURE__ */ X("div", {
						className: "flex flex-1 overflow-hidden",
						children: [/* @__PURE__ */ X("div", {
							className: "w-52 shrink-0 border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col p-3 gap-1 overflow-y-auto",
							children: [
								/* @__PURE__ */ X("div", {
									className: "relative mb-2",
									children: [
										/* @__PURE__ */ Y(Ge, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30" }),
										/* @__PURE__ */ Y("input", {
											type: "text",
											placeholder: r.searchWidgets,
											value: s,
											onChange: (e) => c(e.target.value),
											className: "w-full bg-black/5 dark:bg-white/8 text-black dark:text-white text-[13px] placeholder-black/30 dark:placeholder-white/30 rounded-[8px] pl-8 pr-3 py-1.5 outline-none border border-black/10 dark:border-white/10 focus:border-black/20 dark:focus:border-white/20 transition-colors"
										}),
										s && /* @__PURE__ */ Y("button", {
											onClick: () => c(""),
											className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60",
											children: /* @__PURE__ */ Y(V, { className: "w-3 h-3" })
										})
									]
								}),
								/* @__PURE__ */ X("button", {
									onClick: () => u("__all__"),
									className: R("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", l === "__all__" ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
									children: [/* @__PURE__ */ Y("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" }), /* @__PURE__ */ Y("span", {
										className: "text-[13px]",
										children: r.allWidgets
									})]
								}),
								v.map((e) => /* @__PURE__ */ Y(wa, {
									appId: e,
									selected: l === e,
									onClick: () => u(e)
								}, e))
							]
						}), /* @__PURE__ */ Y("div", {
							className: "flex-1 overflow-y-auto p-4",
							children: p ? Object.keys(x).length === 0 ? /* @__PURE__ */ Y("div", {
								className: "flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm",
								children: r.noWidgetsFound
							}) : (() => {
								let e = 0;
								return Object.entries(x).map(([t, o]) => {
									let s = t === "__built-in__" ? r.builtIn : i(t, n[t]?.name ?? t);
									return /* @__PURE__ */ X("div", {
										className: "mb-8",
										children: [/* @__PURE__ */ X("div", {
											className: "flex items-center justify-between mb-3",
											children: [/* @__PURE__ */ Y("p", {
												className: "text-black dark:text-white text-[13px] font-semibold",
												children: s
											}), t !== "__built-in__" && /* @__PURE__ */ X("p", {
												className: "text-black/30 dark:text-white/30 text-[11px]",
												children: [
													r.fromApp,
													" ",
													s
												]
											})]
										}), o.map((t) => /* @__PURE__ */ X("div", {
											className: "mb-4",
											children: [/* @__PURE__ */ Y("p", {
												className: "text-black/50 dark:text-white/50 text-[11px] mb-2 font-medium",
												children: a(t.id, t.name)
											}), /* @__PURE__ */ Y("div", {
												className: "flex flex-wrap gap-4",
												children: t.sizes.map((n) => {
													let r = e++;
													return /* @__PURE__ */ Y(Ca, {
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
							})() : /* @__PURE__ */ Y("div", {
								className: "flex flex-col gap-6",
								children: [1, 2].map((e) => /* @__PURE__ */ X("div", {
									className: "mb-4 animate-pulse",
									children: [/* @__PURE__ */ Y("div", { className: "h-4 w-24 bg-black/10 dark:bg-white/10 rounded mb-4" }), /* @__PURE__ */ X("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ Y("div", { className: "h-[110px] w-[110px] bg-black/10 dark:bg-white/10 rounded-[14px]" }), /* @__PURE__ */ Y("div", { className: "h-[110px] w-[140px] bg-black/10 dark:bg-white/10 rounded-[14px]" })]
									})]
								}, e))
							})
						})]
					}), /* @__PURE__ */ X("div", {
						className: "flex items-center justify-between px-5 py-3 border-t border-black/[0.06] dark:border-white/[0.06] shrink-0",
						children: [/* @__PURE__ */ Y("p", {
							className: "text-black/40 dark:text-white/40 text-[12px]",
							children: r.dragWidgetHint
						}), /* @__PURE__ */ Y("button", {
							onClick: e,
							className: "px-5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold rounded-[8px] transition-colors",
							children: r.done
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ Y(g, { children: d && /* @__PURE__ */ Y(Sa, { ghost: d }) })
	] });
}
//#endregion
//#region src/components/macOS/Spotlight.tsx
function Ea({ open: e, onClose: t }) {
	let [n, r] = q(""), [i, a] = q(0), o = K(null), s = L((e) => e.apps), c = L((e) => e.launchApp), { t: l, getAppName: u } = H();
	G(() => {
		e && (Ze(() => {
			r(""), a(0);
		}), setTimeout(() => o.current?.focus(), 50));
	}, [e]);
	let d = W((e) => {
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
	return /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9990] bg-black/30 backdrop-blur-sm",
		onClick: t
	}), /* @__PURE__ */ Y(y.div, {
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
		children: /* @__PURE__ */ X(w, {
			variant: "window",
			className: "overflow-hidden shadow-2xl",
			children: [
				/* @__PURE__ */ X("div", {
					className: "flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ Y(Ge, { className: "w-5 h-5 text-black/40 dark:text-white/40 shrink-0" }),
						/* @__PURE__ */ Y("input", {
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
						n && /* @__PURE__ */ Y("button", {
							onClick: () => r(""),
							className: "p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10",
							children: /* @__PURE__ */ Y(V, { className: "w-3.5 h-3.5" })
						})
					]
				}),
				p.length > 0 && /* @__PURE__ */ X("div", {
					className: "max-h-80 overflow-y-auto py-1",
					children: [p.length > 0 && /* @__PURE__ */ Y("p", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/30 px-4 pt-2 pb-1",
						children: n ? l.search : l.applications
					}), p.map((e, t) => /* @__PURE__ */ X("button", {
						onClick: () => e.app && d(e.app),
						onMouseEnter: () => a(t),
						className: R("flex items-center gap-3 w-full px-4 py-2 text-left transition-colors", t === i ? "bg-blue-500 text-white" : "hover:bg-black/5 dark:hover:bg-white/5"),
						children: [e.app && /* @__PURE__ */ Y(B, {
							appConfig: e.app,
							size: 32
						}), /* @__PURE__ */ X("div", { children: [/* @__PURE__ */ Y("p", {
							className: R("text-[13px] font-medium", t === i ? "text-white" : ""),
							children: e.label
						}), e.subtitle && /* @__PURE__ */ Y("p", {
							className: R("text-[11px]", t === i ? "text-white/70" : "text-black/40 dark:text-white/40"),
							children: e.subtitle
						})] })]
					}, e.label + t))]
				}),
				n && p.length === 0 && /* @__PURE__ */ X("div", {
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
function Da({ open: e, onClose: t }) {
	let n = L((e) => e.apps), r = L((e) => e.runningAppIds), i = L((e) => e.launchApp), a = L((e) => e.dockAppIds), { getAppName: o } = H(), s = Array.from(/* @__PURE__ */ new Set([...r, ...a])).map((e) => n[e]).filter(Boolean), [c, l] = q(0);
	return G(() => {
		if (!e) return;
		Ze(() => {
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
	]), /* @__PURE__ */ Y(g, { children: e && /* @__PURE__ */ Y(y.div, {
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
		children: /* @__PURE__ */ X(w, {
			variant: "panel",
			className: "px-4 py-3",
			children: [/* @__PURE__ */ Y("div", {
				className: "flex items-end gap-3",
				children: s.map((e, n) => /* @__PURE__ */ X("button", {
					onClick: () => {
						i(e), t();
					},
					onMouseEnter: () => l(n),
					className: "flex flex-col items-center gap-2 p-2 rounded-xl transition-colors",
					children: [/* @__PURE__ */ Y(y.div, {
						animate: { scale: n === c ? 1.15 : 1 },
						transition: {
							type: "spring",
							stiffness: 600,
							damping: 30
						},
						children: /* @__PURE__ */ Y(B, {
							appConfig: e,
							size: 52
						})
					}), /* @__PURE__ */ Y("span", {
						className: R("text-[11px] font-medium truncate max-w-[60px] text-center", n === c ? "text-white" : "text-white/70"),
						children: o(e.id, e.name)
					})]
				}, e.id))
			}), s[c] && /* @__PURE__ */ Y("p", {
				className: "text-center text-white/80 text-xs mt-1",
				children: o(s[c].id, s[c].name)
			})]
		})
	}) });
}
//#endregion
//#region src/components/notifications/NotificationBanner.tsx
function Oa({ notification: e, onDismiss: t }) {
	let n = L((e) => e.launchApp), r = L((e) => e.apps), { osTheme: i } = x(), a = i === "windows";
	return G(() => {
		let e = setTimeout(t, 5e3);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ X(y.div, {
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
		className: R("flex items-start gap-3 w-80 p-3 cursor-pointer select-none", "bg-white/88 dark:bg-[#151821]/90 backdrop-blur-2xl", "border border-black/10 dark:border-white/8", "shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]", a ? "rounded-lg" : "rounded-2xl"),
		onClick: () => {
			let i = r[e.appId];
			i && n(i), t();
		},
		children: [
			/* @__PURE__ */ Y("div", {
				className: "w-9 h-9 rounded-[20%] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0 shadow-sm",
				children: /* @__PURE__ */ Y("span", {
					className: "text-white text-xs font-bold",
					children: e.appName.charAt(0)
				})
			}),
			/* @__PURE__ */ X("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ Y("p", {
						className: "text-[11px] font-semibold text-black/50 dark:text-white/40 uppercase tracking-wide leading-none mb-0.5",
						children: e.appName
					}),
					/* @__PURE__ */ Y("p", {
						className: "text-[13px] font-semibold text-black dark:text-white leading-snug truncate",
						children: e.title
					}),
					e.body && /* @__PURE__ */ Y("p", {
						className: "text-[12px] text-black/60 dark:text-white/50 leading-snug line-clamp-2 mt-0.5",
						children: e.body
					})
				]
			}),
			/* @__PURE__ */ Y("button", {
				onClick: (e) => {
					e.stopPropagation(), t();
				},
				className: "shrink-0 w-5 h-5 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 transition-colors",
				children: /* @__PURE__ */ Y(V, { className: "w-3 h-3" })
			})
		]
	});
}
function ka() {
	let e = L((e) => e.notifications), t = L((e) => e.dismissNotification), { osTheme: n } = x(), r = e.filter((e) => !e.read).slice(0, 3), i = W((e) => {
		t(e);
	}, [t]);
	return /* @__PURE__ */ Y("div", {
		className: R("fixed z-[9999] flex flex-col gap-2 pointer-events-none", n === "windows" ? "bottom-14 right-4" : n === "iphone" || n === "android" ? "top-12 inset-x-4" : "top-8 right-4"),
		children: /* @__PURE__ */ Y(g, {
			mode: "popLayout",
			children: r.map((e) => /* @__PURE__ */ Y("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ Y(Oa, {
					notification: e,
					onDismiss: () => i(e.id)
				})
			}, e.id))
		})
	});
}
//#endregion
//#region src/hooks/useKeyboardShortcuts.ts
function Aa({ onSpotlight: e, onAppSwitcher: t } = {}) {
	let n = L((e) => e.closeWindow), r = L((e) => e.minimizeWindow), i = L((e) => e.focusedWindowId), a = L((e) => e.osTheme);
	G(() => {
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
var ja = {
	"5m": 5 * 6e4,
	"10m": 10 * 6e4,
	"30m": 30 * 6e4,
	"1h": 60 * 6e4,
	"2h": 120 * 6e4,
	"5h": 300 * 6e4,
	"1d": 1440 * 6e4
};
function Ma() {
	let e = L((e) => e.wallpaperCycle), t = L((e) => e.customWallpapers), n = L((e) => e.wallpaperId), r = L((e) => e.setWallpaper), i = Se(), a = K(0);
	G(() => {
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
		}, ja[e.interval]);
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
function Na(e) {
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
var Pa = [
	"macos",
	"windows",
	"ipad",
	"iphone",
	"android"
];
function Fa(e, t = "macos") {
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
			appSwitcher: !0
		},
		widgets: {
			showWidgets: !0,
			allowGalleryEdit: !0
		},
		dock: !0,
		defaultApps: !0,
		allowedOSThemes: Pa,
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
			appSwitcher: !1
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
		appSwitcher: !1
	};
	typeof n.menuBar == "boolean" ? r = {
		enabled: n.menuBar,
		clock: n.menuBar,
		controlCenter: n.menuBar,
		spotlight: n.menuBar,
		appleMenu: n.menuBar,
		appNameMenu: n.menuBar,
		appSwitcher: n.menuBar
	} : typeof n.menuBar == "object" && n.menuBar !== null && (r = {
		enabled: !0,
		clock: !!n.menuBar.clock,
		controlCenter: !!n.menuBar.controlCenter,
		spotlight: !!n.menuBar.spotlight,
		appleMenu: !!n.menuBar.appleMenu,
		appNameMenu: n.menuBar.appNameMenu ?? !0,
		appSwitcher: !!n.menuBar.appSwitcher
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
function Ia({ apps: e, defaultApps: t, builtInApps: n, isSimpleMode: r = !1, colorScheme: i, osTheme: a, fallbackMenuBarAppId: o = null, resolveEditContextMenuItems: s } = {}) {
	let c = L((e) => e.osTheme), l = L((e) => e.setOSTheme), u = L((e) => e.colorScheme), d = L((e) => e.setColorScheme), f = L((e) => e.resolvedColorScheme), p = L((e) => e.resolveColorScheme);
	G(() => {
		a && a !== c && l(a);
	}, [
		a,
		c,
		l
	]), G(() => {
		i && i !== u && d(i);
	}, [
		i,
		u,
		d
	]);
	let m = L((e) => e.registerApps), h = L((e) => e.launchApp), _ = L((e) => e.glassEnabled), v = L((e) => e.isEditingWidgets), b = L((e) => e.accentColor), x = L((e) => e.highlightColor), [C, w] = q(!1), [T, E] = q(!1), [D, O] = q(!1), k = et(() => Fa(r, c), [r, c]);
	G(() => {
		let e = () => {
			let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = window.innerWidth <= 768;
			O(e || t);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), Aa({
		onSpotlight: () => w((e) => !e),
		onAppSwitcher: () => E((e) => !e)
	}), Ma();
	let A = et(() => {
		let r = n === void 0 ? t : n, i = r === void 0 ? k.isSimpleModeActive ? k.defaultApps : !(e && e.length > 0) : r, a = [];
		if (i === !0) a = oe;
		else if (Array.isArray(i)) {
			let e = new Set(i);
			a = oe.filter((t) => e.has(t.id));
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
		k.isSimpleModeActive,
		k.defaultApps
	]);
	G(() => {
		m(A);
	}, [m, A]), G(() => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			p(e.matches);
		};
		return p(e.matches), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [u, p]);
	let j = c;
	G(() => {
		let e = document.documentElement;
		e.setAttribute("data-os-theme", j), e.setAttribute("data-glass", _ ? "true" : "false"), e.classList.toggle("dark", f === "dark");
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
		r = x === "automatic" ? n[b === "multicolor" ? "blue" : b] || "rgba(0, 122, 254, 0.25)" : n[x] || "rgba(0, 122, 254, 0.25)", e.style.setProperty("--highlight-color", r);
	}, [
		j,
		f,
		_,
		b,
		x
	]);
	let M = W((e) => {
		h(e);
	}, [h]), N = j === "macos" || j === "ipad", ee = j !== "ipad" && j !== "iphone" && j !== "android", P = j === "iphone" || j === "android", I = F[j];
	return k.isSimpleModeActive && j === "macos" && !k.dock && (I = {
		...I,
		hasDock: !1,
		layout: {
			...I.layout,
			desktopInsets: {
				top: 28,
				right: 0,
				bottom: 0,
				left: 0
			},
			chrome: {
				...I.layout.chrome,
				dockHeight: 0,
				dockOffsetBottom: 0
			},
			window: {
				...I.layout.window,
				maximizeInsets: {
					top: 28,
					bottom: 0
				}
			}
		}
	}), /* @__PURE__ */ Y(S, {
		features: k,
		children: /* @__PURE__ */ Y("div", {
			className: R("w-full h-full overflow-hidden relative select-none", f === "dark" && "dark"),
			"data-os-theme": j,
			"data-glass": _ ? "true" : "false",
			style: Na(I),
			children: /* @__PURE__ */ X(aa, {
				resolveItems: s,
				children: [
					/* @__PURE__ */ Y(st, {}),
					/* @__PURE__ */ Y(ka, {}),
					N && !k.isSimpleModeActive && /* @__PURE__ */ X(J, { children: [/* @__PURE__ */ Y(Ea, {
						open: C,
						onClose: () => w(!1)
					}), /* @__PURE__ */ Y(Da, {
						open: T,
						onClose: () => E(!1)
					})] }),
					P ? /* @__PURE__ */ Y("div", {
						className: R("absolute inset-0 flex items-center justify-center", D ? "bg-transparent" : "bg-black/60"),
						children: /* @__PURE__ */ X("div", {
							className: R("relative overflow-hidden", !D && "shadow-2xl ring-1 ring-white/10"),
							style: {
								height: D ? "100%" : "min(calc(100dvh - 32px), 926px)",
								width: D ? "100%" : "min(calc((min(calc(100dvh - 32px), 926px)) * 0.4612676056338028), 100vw)",
								borderRadius: D ? "0px" : "min(44px, calc(min(calc(100dvh - 32px), 926px) * 0.047))"
							},
							children: [/* @__PURE__ */ Y(Xi, { children: null }), /* @__PURE__ */ Y(g, {
								mode: "wait",
								children: /* @__PURE__ */ X(y.div, {
									className: "absolute inset-0",
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									children: [j === "iphone" && /* @__PURE__ */ Y(Hr, { onOpenApp: M }), j === "android" && /* @__PURE__ */ Y(ti, { onOpenApp: M })]
								}, j)
							})]
						})
					}) : /* @__PURE__ */ X(J, { children: [
						/* @__PURE__ */ Y("div", {
							className: "absolute inset-0",
							children: /* @__PURE__ */ X(Xi, { children: [
								k.widgets.showWidgets && /* @__PURE__ */ Y(xa, {}),
								ee && (!k.isSimpleModeActive || k.iconGrid) && /* @__PURE__ */ Y(fa, { onOpenApp: M }, "icon-grid"),
								/* @__PURE__ */ Y(an, {}, "window-manager")
							] })
						}),
						/* @__PURE__ */ Y(g, { children: k.widgets.allowGalleryEdit && v && /* @__PURE__ */ Y(Ta, {}) }),
						/* @__PURE__ */ Y(g, {
							mode: "wait",
							children: /* @__PURE__ */ X(y.div, {
								className: "absolute inset-0 pointer-events-none",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: .2 },
								children: [
									j === "macos" && /* @__PURE__ */ Y(pr, {
										isSimpleMode: k.isSimpleModeActive,
										fallbackMenuBarAppId: o,
										onOpenApp: M,
										onSpotlight: k.menuBar.spotlight ? () => w(!0) : void 0,
										onAppSwitcher: k.menuBar.appSwitcher ? () => E(!0) : void 0
									}),
									j === "ipad" && /* @__PURE__ */ Y(kr, { onOpenApp: M }),
									j === "windows" && /* @__PURE__ */ Y(Jr, { onOpenApp: M })
								]
							}, j)
						})
					] })
				]
			})
		})
	});
}
//#endregion
//#region src/hooks/useMenuAction.ts
function La(e, t, n) {
	G(() => {
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
function Ra(e, t) {
	G(() => {
		let n = (n) => {
			let r = n.detail;
			r.appId === e && t(r.action);
		};
		return window.addEventListener("app:context:action", n), () => window.removeEventListener("app:context:action", n);
	}, [e, t]);
}
//#endregion
//#region src/lib.tsx
function za() {
	let e = _e();
	return G(() => {
		e && e.checkUpdate().then(de.getState().setStatus).catch(() => {});
	}, [e]), null;
}
function Ba({ assetBaseUrl: e = "", apps: t, defaultApps: n, builtInApps: r, onImportWallpaper: i, wallpapers: a, liveWallpapers: o, allowLiveWallpapers: s = !0, updateActions: c, isSimpleMode: l, colorScheme: u, osTheme: d, fallbackMenuBarAppId: f, resolveEditContextMenuItems: p }) {
	return /* @__PURE__ */ Y(ce, {
		value: e,
		children: /* @__PURE__ */ Y(le, {
			value: he(a, o, s),
			children: /* @__PURE__ */ Y(me, {
				value: i ?? null,
				children: /* @__PURE__ */ X(xe, {
					value: c ?? null,
					children: [/* @__PURE__ */ Y(za, {}), /* @__PURE__ */ Y(Ia, {
						apps: t,
						defaultApps: n,
						builtInApps: r,
						isSimpleMode: l,
						colorScheme: u,
						osTheme: d,
						fallbackMenuBarAppId: f,
						wallpapers: a,
						liveWallpapers: o,
						allowLiveWallpapers: s,
						resolveEditContextMenuItems: p
					})]
				})
			})
		})
	});
}
//#endregion
export { oe as APPS_CONFIG, Ba as DeviceLayout, ue as hasAvailableUpdate, ve as resolveAssetUrl, be as useAssetBase, Ra as useContextAction, La as useMenuAction, L as useStore, de as useUpdateStatusStore };
