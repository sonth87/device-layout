"use client";
import { A as e, B as t, C as n, D as r, E as i, F as a, G as o, H as s, I as c, K as l, L as u, M as d, N as f, O as p, P as m, R as h, S as g, T as _, U as v, V as y, W as b, _ as x, a as S, b as C, c as w, d as T, f as E, g as D, h as O, i as k, j as A, k as j, l as M, m as N, o as P, p as ee, r as te, s as ne, t as re, u as F, v as ie, w as ae, x as oe, y as se, z as ce } from "./MobileAppViewer-C04TnaAW.js";
import { d as le, i as ue, l as de, n as fe, r as pe, t as I, u as me } from "./store-429-ivOo.js";
import { t as L } from "./utils-B6YmNDS2.js";
import { t as R } from "./createLucideIcon--WjuKCts.js";
import { _ as he, a as ge, c as _e, d as ve, f as ye, g as be, i as xe, l as Se, m as z, n as Ce, o as we, p as Te, s as Ee, t as De, u as Oe } from "./update-actions-BFpjccU3.js";
import { t as ke } from "./check-DoT5IS9-.js";
import { t as Ae } from "./chevron-right-BcSxNxws.js";
import { t as je } from "./grid-3x3-CZiMuCC6.js";
import { t as Me } from "./monitor-CDDW7biH.js";
import { t as Ne } from "./search-BKG97C0x.js";
import { t as Pe } from "./sun-DdSv2tyc.js";
import { t as Fe } from "./volume-2-DAfADR-a.js";
import { t as B } from "./x-BYw6fhgP.js";
import { t as V } from "./useTranslation-BYwV1Fyx.js";
import * as H from "react";
import Ie, { Suspense as Le, lazy as Re, startTransition as ze, useCallback as U, useContext as Be, useEffect as W, useInsertionEffect as Ve, useRef as G, useState as K } from "react";
import { Fragment as q, jsx as J, jsxs as Y } from "react/jsx-runtime";
import { createPortal as He } from "react-dom";
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/follow-value.mjs
function Ue(e, t, n = {}) {
	let r = e.get(), i = null, a = r, s, c = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, u = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, d = () => {
		let t = Ge(e.get()), r = Ge(a);
		if (t === r) {
			u();
			return;
		}
		let c = i ? i.getGeneratorVelocity() : e.getVelocity();
		u(), i = new o({
			keyframes: [t, r],
			velocity: c,
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: s
		});
	}, f = () => {
		d(), e.animation = i ?? void 0, e.events.animationStart?.notify(), i?.then(() => {
			e.animation = void 0, e.events.animationComplete?.notify();
		});
	};
	if (e.attach((e, t) => {
		a = e, s = (e) => t(We(e, c)), l.postRender(f);
	}, u), b(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(We(t, c), !1)) : e.set(We(t, c));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return u;
}
function We(e, t) {
	return t ? e + t : e;
}
function Ge(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function Ke(e, n = {}) {
	let { isStatic: r } = Be(v), i = () => b(e) ? e.get() : e;
	if (r) return ce(i);
	let a = t(i());
	return Ve(() => Ue(a, e, n), [a, JSON.stringify(n)]), a;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-spring.mjs
function qe(e, t = {}) {
	return Ke(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region src/components/liquid-glass/GlassFilter.tsx
function Je() {
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
function Ye() {
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
var Xe = R("bell-off", [
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
]), Ze = R("bluetooth", [["path", {
	d: "m7 7 10 10-5 5V2l5 5L7 17",
	key: "1q5490"
}]]), Qe = R("cast", [
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
]), $e = R("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), et = R("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), tt = R("flashlight", [
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
]), nt = R("grid-2x2", [
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
]), rt = R("maximize-2", [
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
]), it = R("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), at = R("plane", [["path", {
	d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
	key: "1v9wt8"
}]]), ot = R("power", [["path", {
	d: "M12 2v10",
	key: "mnfbl"
}], ["path", {
	d: "M18.4 6.6a9 9 0 1 1-12.77.04",
	key: "obofu9"
}]]), st = R("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]), ct = R("signal", [
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
]), lt = R("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), ut = R("timer", [
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
]), dt = R("user", [["path", {
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
function ft({ windowId: e, onPointerDown: t }) {
	let { osTheme: n } = c();
	return J(n === "windows" ? mt : pt, {
		windowId: e,
		onPointerDown: t
	});
}
function pt({ windowId: e, onPointerDown: t }) {
	let n = I((t) => t.windows[e]), r = I((e) => e.closeWindow), i = I((e) => e.minimizeWindow), a = I((e) => e.toggleMaximize), o = I((e) => e.toggleFullScreen), { config: s } = c(), l = Ye(), [u, d] = K(!1), { getAppName: f } = V();
	if (!n) return null;
	let { top: p, bottom: m } = s.layout.window.maximizeInsets, h = {
		x: 0,
		y: p,
		width: l.width,
		height: l.height - p - m
	};
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: L("flex items-center gap-0 h-(--window-chrome-height) px-4 shrink-0", "select-none cursor-move", "border-b border-black/8 dark:border-white/8", n.isFocused ? "bg-neutral-100/95 dark:bg-[#151821]/97" : "bg-neutral-50/95 dark:bg-[#0F1115]/97"),
		onPointerDown: t,
		onDoubleClick: () => a(e, h),
		onMouseEnter: () => d(!0),
		onMouseLeave: () => d(!1),
		children: [
			/* @__PURE__ */ Y("div", {
				className: "flex items-center gap-2 mr-3",
				onPointerDown: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ J("button", {
						onClick: () => r(e),
						className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
						style: { backgroundColor: n.isFocused ? "#ff5f57" : "#d1d1d1" },
						title: "Close",
						children: u && n.isFocused && /* @__PURE__ */ J(B, {
							className: "w-2 h-2 text-red-900/80",
							strokeWidth: 3
						})
					}),
					/* @__PURE__ */ J("button", {
						onClick: () => i(e),
						className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
						style: { backgroundColor: n.isFocused ? "#febc2e" : "#d1d1d1" },
						title: "Minimize",
						children: u && n.isFocused && /* @__PURE__ */ J(it, {
							className: "w-2 h-2 text-yellow-900/80",
							strokeWidth: 3
						})
					}),
					/* @__PURE__ */ J("button", {
						onClick: () => o(e),
						className: "w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-100 hover:brightness-90 active:brightness-75",
						style: { backgroundColor: n.isFocused ? "#28c840" : "#d1d1d1" },
						title: n.isFullScreen ? "Exit Full Screen" : "Enter Full Screen",
						children: u && n.isFocused && /* @__PURE__ */ J(rt, {
							className: "w-1.5 h-1.5 text-green-900/80",
							strokeWidth: 3
						})
					})
				]
			}),
			/* @__PURE__ */ J("div", {
				className: "flex-1 flex items-center justify-center pointer-events-none",
				children: /* @__PURE__ */ J("span", {
					className: L("text-[13px] font-medium truncate max-w-[220px]", n.isFocused ? "text-black/75 dark:text-white/80" : "text-black/35 dark:text-white/35"),
					children: f(n.appId, n.title)
				})
			}),
			/* @__PURE__ */ J("div", { className: "w-[72px]" })
		]
	});
}
function mt({ windowId: e, onPointerDown: t }) {
	let n = I((t) => t.windows[e]), r = I((e) => e.closeWindow), i = I((e) => e.minimizeWindow), a = I((e) => e.toggleMaximize), { config: o } = c(), s = Ye(), { getAppName: l } = V();
	if (!n) return null;
	let { top: u, bottom: d } = o.layout.window.maximizeInsets, f = {
		x: 0,
		y: u,
		width: s.width,
		height: s.height - u - d
	};
	return /* @__PURE__ */ Y("div", {
		"data-windowchrome": "true",
		className: L("flex items-center h-(--window-chrome-height) shrink-0", "bg-neutral-100/98 dark:bg-[#151821]/98", "border-b border-black/8 dark:border-white/8", "select-none cursor-move"),
		onPointerDown: t,
		onDoubleClick: () => a(e, f),
		children: [/* @__PURE__ */ J("span", {
			className: "flex-1 text-[12px] font-medium truncate text-black/75 dark:text-white/75 pl-3",
			children: l(n.appId, n.title)
		}), /* @__PURE__ */ Y("div", {
			className: "flex items-center h-full",
			onPointerDown: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ J("button", {
					onClick: () => i(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ J(it, {
						className: "w-3.5 h-3.5",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => a(e, f),
					className: "w-11 h-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black/70 dark:text-white/70",
					children: /* @__PURE__ */ J(lt, {
						className: "w-3 h-3",
						strokeWidth: 2
					})
				}),
				/* @__PURE__ */ J("button", {
					onClick: () => r(e),
					className: "w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-black/70 dark:text-white/70",
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
function ht({ windowId: e }) {
	let t = I((t) => t.windows[e]), n = I((e) => e.apps), { t: r } = V(), [i, a] = K(null);
	if (!t) return null;
	let o = n[t.appId]?.menuBarMenus ?? pe;
	return /* @__PURE__ */ J("div", {
		id: `window-menubar-${e}`,
		className: "flex items-center h-7 px-2 border-b border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs gap-0.5",
		children: o.map((e) => /* @__PURE__ */ J(S, {
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
function gt({ windowId: e }) {
	return I((t) => t.windows[e]) ? /* @__PURE__ */ J("div", {
		id: `window-statusbar-${e}`,
		className: "flex items-center h-6 px-3 border-t border-black/10 dark:border-white/10 bg-(--window-chrome-bg) shrink-0 text-xs text-black/50 dark:text-white/50"
	}) : null;
}
//#endregion
//#region src/components/window/ResizeHandle.tsx
var _t = {
	n: "top-0 left-2 right-2 h-1",
	s: "bottom-0 left-2 right-2 h-1",
	e: "right-0 top-2 bottom-2 w-1",
	w: "left-0 top-2 bottom-2 w-1",
	ne: "top-0 right-0 w-3 h-3",
	nw: "top-0 left-0 w-3 h-3",
	se: "bottom-0 right-0 w-3 h-3",
	sw: "bottom-0 left-0 w-3 h-3"
}, vt = [
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w",
	"nw"
];
function yt({ getResizeHandler: e }) {
	return /* @__PURE__ */ J(q, { children: vt.map((t) => /* @__PURE__ */ J(bt, {
		edge: t,
		onPointerDown: e(t)
	}, t)) });
}
function bt({ edge: e, onPointerDown: t }) {
	return /* @__PURE__ */ J("div", {
		className: L("absolute z-50", _t[e], de[e]),
		onPointerDown: t,
		"aria-hidden": !0
	});
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4/node_modules/zustand/esm/vanilla/shallow.mjs
var xt = (e) => Symbol.iterator in e, St = (e) => "entries" in e, Ct = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, wt = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function Tt(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : xt(e) && xt(t) ? St(e) && St(t) ? Ct(e, t) : wt(e, t) : Ct({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4/node_modules/zustand/esm/react/shallow.mjs
function Et(e) {
	let t = Ie.useRef(void 0);
	return (n) => {
		let r = e(n);
		return Tt(t.current, r) ? t.current : t.current = r;
	};
}
//#endregion
//#region src/lib/snap-events.ts
var Dt = /* @__PURE__ */ new Set();
function Ot(e) {
	return Dt.add(e), () => Dt.delete(e);
}
function kt(e, t, n = 0, r = 0) {
	Dt.forEach((i) => i(e, t, n, r));
}
function At(e, t, n = 0) {
	let r = window.innerWidth, i = window.innerHeight, a = e <= 10, o = e >= r - 10, s = t <= n + 10, c = t >= i - 10;
	return s && a ? "top-left" : s && o ? "top-right" : s ? "top" : a && c ? "bottom-left" : o && c ? "bottom-right" : a ? "left" : o ? "right" : null;
}
function jt(e, t = 0, n = 0) {
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
var Mt = 50;
function Nt(e, t, n, r, i, a, o) {
	let s = Math.max(r, Math.min(i, e));
	return a && t > r && s < t ? t - s < Mt ? t : s + Mt : o && n < i && s > n ? s - n < Mt ? n : s - Mt : s;
}
function Pt({ windowId: e, x: t, y: n }) {
	let { moveWindow: r, resizeWindow: i, maximizeWindow: a, toggleMaximize: o, focusWindow: s } = I(Et((e) => ({
		moveWindow: e.moveWindow,
		resizeWindow: e.resizeWindow,
		maximizeWindow: e.maximizeWindow,
		toggleMaximize: e.toggleMaximize,
		focusWindow: e.focusWindow
	}))), l = I((e) => e.allowDragOutOfBounds), { config: u } = c(), d = G(null);
	return { onPointerDown: U((o) => {
		if (o.button !== 0) return;
		o.preventDefault(), o.stopPropagation(), s(e), o.currentTarget.setPointerCapture(o.pointerId);
		let c = I.getState().windows[e];
		if (c?.prevRect) {
			let t = c.prevRect, n = (o.clientX - c.rect.x) / c.rect.width, r = Math.round(o.clientX - t.width * Math.min(Math.max(n, .1), .9)), i = o.clientY - 15;
			I.setState((n) => {
				let a = n.windows[e];
				a && (a.rect = {
					x: r,
					y: i,
					width: t.width,
					height: t.height
				}, a.prevRect = null, a.isMaximized = !1, a.isFullScreen = !1);
			}), d.current = {
				mouseX: o.clientX,
				mouseY: o.clientY,
				winX: r,
				winY: i,
				escaped: !1
			};
		} else d.current = {
			mouseX: o.clientX,
			mouseY: o.clientY,
			winX: t.get(),
			winY: n.get(),
			escaped: !1
		};
		let f = u.layout.window.dragTopInset, p = u.layout.chrome.taskbarHeight, m = (r) => {
			if (!d.current) return;
			let i = window.innerWidth, a = window.innerHeight, o = d.current.winX + (r.clientX - d.current.mouseX), s = d.current.winY + (r.clientY - d.current.mouseY), c = document.getElementById(`window-${e}`), m = c?.offsetWidth ?? 600, h = c?.offsetHeight ?? 400;
			u.layout.window.minTitleVisibleHeight;
			let g = l ? -(m - Math.min(200, m)) : 0, _ = l ? i - Math.min(200, m) : i - m, v = f, y = l ? a - Math.min(200, h) : a - p - h, b = i - m, x = a - p - h, S = Nt(o, 0, b, g, _, !0, !0), C = Nt(s, v, x, v, y, !1, !0);
			t.set(S), n.set(C), kt(r.clientY <= 10 ? "top" : At(r.clientX, r.clientY, f), !0, f, p);
		}, h = (o) => {
			if (!d.current) return;
			let s = t.get(), c = n.get(), l = o.clientY <= 10 ? "top" : At(o.clientX, o.clientY, f), u = jt(l, f, p);
			u ? l === "top" ? a(e, u) : i(e, u) : r(e, s, c), kt(null, !1, f, p), d.current = null, window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", h);
		};
		window.addEventListener("pointermove", m), window.addEventListener("pointerup", h);
	}, [
		u.layout.window.dragTopInset,
		u.layout.chrome.taskbarHeight,
		u.layout.window.minTitleVisibleHeight,
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
function Ft({ windowId: e, x: t, y: n, width: r, height: i, minWidth: a = 320, minHeight: o = 240 }) {
	let s = I((e) => e.resizeWindow), c = G(null);
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
			let s = me(l, e.clientX - c.current.mouseX, e.clientY - c.current.mouseY, c.current.rect, a, o);
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
function It({ windowId: e }) {
	let n = I((t) => t.windows[e]), r = I((e) => e.focusWindow), i = I((e) => e.setActiveApp), a = I((e) => e.exitFullScreen), o = I((e) => e.fullscreenChromeRevealed), s = I((e) => e.apps), { isFloating: l, isMobile: u, config: d } = c();
	W(() => {
		if (!n?.isFullScreen || !n.isFocused) return;
		let t = (t) => {
			t.key === "Escape" && a(e);
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [
		n?.isFullScreen,
		n?.isFocused,
		e,
		a
	]);
	let f = t(n?.rect.x ?? 100), p = t(n?.rect.y ?? 100), m = t(n?.rect.width ?? 800), g = t(n?.rect.height ?? 600);
	W(() => {
		n && (h(f, n.rect.x, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), h(p, n.rect.y, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), h(m, n.rect.width, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}), h(g, n.rect.height, {
			type: "spring",
			stiffness: 400,
			damping: 35,
			mass: .8
		}));
	}, [
		n?.rect.x,
		n?.rect.y,
		n?.rect.width,
		n?.rect.height
	]);
	let { onPointerDown: _ } = Pt({
		windowId: e,
		x: f,
		y: p
	}), v = n ? s[n.appId] : void 0, { getResizeHandler: b } = Ft({
		windowId: e,
		x: f,
		y: p,
		width: m,
		height: g,
		minWidth: v?.minSize?.width ?? 320,
		minHeight: v?.minSize?.height ?? 240
	});
	if (!n) return null;
	let x = u || n.isMaximized || n.isFullScreen, S = l && !u;
	return /* @__PURE__ */ Y(y.div, {
		id: `window-${e}`,
		initial: "hidden",
		animate: n.isMinimized ? "minimized" : "visible",
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
		style: x && !n.isMaximized ? {
			position: "absolute",
			inset: 0,
			x: 0,
			y: 0,
			width: "100%",
			height: "100%",
			zIndex: n.zIndex,
			transformOrigin: "bottom center",
			borderRadius: n.isFullScreen ? 0 : "var(--radius-window)"
		} : {
			position: "absolute",
			x: f,
			y: p,
			width: m,
			height: g,
			zIndex: n.zIndex,
			transformOrigin: "bottom center",
			borderRadius: n.isFullScreen ? 0 : "var(--radius-window)"
		},
		className: L("flex flex-col overflow-hidden", n.isMinimized ? "pointer-events-none" : "pointer-events-auto", n.isFocused ? "shadow-[0_22px_70px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]" : "shadow-[0_8px_32px_rgba(0,0,0,0.25)]", !n.isFocused && "brightness-95", "bg-(--window-body-bg)", n.isFocused ? "ring-1 ring-white/20" : ""),
		onPointerDown: (t) => {
			r(e), n?.appId && i(n.appId), t.stopPropagation();
		},
		children: [
			(S || n.isMaximized) && !n.isFullScreen && /* @__PURE__ */ J(ft, {
				windowId: e,
				onPointerDown: _
			}),
			n.isFullScreen && /* @__PURE__ */ J(y.div, {
				className: "absolute top-0 inset-x-0 z-20",
				animate: { y: o ? 28 : "-100%" },
				transition: {
					type: "spring",
					stiffness: 380,
					damping: 30,
					mass: .8
				},
				children: /* @__PURE__ */ J(ft, {
					windowId: e,
					onPointerDown: _
				})
			}),
			n.hasMenuBar && !d.hasMenuBar && /* @__PURE__ */ J(ht, { windowId: e }),
			/* @__PURE__ */ J("div", {
				className: "flex-1 overflow-auto min-h-0 window-body",
				children: /* @__PURE__ */ J(te, {
					appId: n.appId,
					windowId: e
				})
			}),
			n.hasStatusBar && /* @__PURE__ */ J(gt, { windowId: e }),
			S && !n.isMaximized && !n.isFullScreen && /* @__PURE__ */ J(yt, { getResizeHandler: b })
		]
	});
}
//#endregion
//#region src/components/window/SnapAssist.tsx
var Lt = {
	left: "Snap Left",
	right: "Snap Right",
	top: "Maximize",
	"top-left": "Top Left",
	"top-right": "Top Right",
	"bottom-left": "Bottom Left",
	"bottom-right": "Bottom Right"
};
function Rt(e) {
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
function zt({ zone: e, style: t, topInset: n, bottomInset: r }) {
	let i = jt(e, n, r);
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
			children: Lt[e]
		})]
	}, e) : null;
}
function Bt() {
	let [e, t] = K(null), [n, r] = K(!1), [i, a] = K(0), [o, l] = K(0), { osTheme: u } = c(), d = Rt(u), f = I((e) => e.focusedWindowId), p = I((e) => e.windows), m = (f ? p[f] : null)?.zIndex ?? 10;
	return W(() => Ot((e, n, i, o) => {
		t(e), r(n), a(i), l(o);
	}), []), n ? /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: m },
		children: /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ J(zt, {
			zone: e,
			style: d,
			topInset: i,
			bottomInset: o
		}, e) })
	}) : null;
}
//#endregion
//#region src/lib/url-codec.ts
function Vt(e) {
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
function Ht(e) {
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
function Ut() {
	let e = I((e) => e.windows), t = I((e) => e.apps), n = I((e) => e.openWindow), r = I((e) => e.focusWindow), i = I((e) => e.urlHydrated), a = I((e) => e.setUrlHydrated);
	W(() => {
		if (i || Object.keys(t).length === 0) return;
		let e = new URLSearchParams(window.location.search).getAll("w"), o = null;
		for (let r of e) {
			let e = Ht(r);
			if (!e) continue;
			let i = t[e.appId];
			if (!i) continue;
			let a = n(i, {
				...e.rect,
				isMaximized: e.isMaximized,
				isFullScreen: e.isFullScreen,
				prevRect: e.prevRect
			});
			e.isFocused && (o = a);
		}
		o && r(o), a(!0);
	}, [
		t,
		n,
		r,
		i,
		a
	]), W(() => {
		if (!i) return;
		let t = new URLSearchParams();
		for (let n of Object.values(e)) t.append("w", Vt(n));
		let n = `${window.location.pathname}${t.toString() ? `?${t.toString()}` : ""}`;
		n !== window.location.href.replace(window.location.origin, "") && window.history.replaceState(null, "", n);
	}, [e, i]);
}
//#endregion
//#region src/components/window/WindowManager.tsx
function Wt() {
	Ut();
	let e = I((e) => e.windows), t = I((e) => e.apps), n = I((e) => e.resizeWindow), r = I((e) => e.allowDragOutOfBounds), i = Ye(), { config: a } = c();
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
				} else s = le(a.rect, o, {
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
		children: [/* @__PURE__ */ J(Bt, {}), /* @__PURE__ */ J(s, { children: o.map((e) => /* @__PURE__ */ J(It, { windowId: e }, e)) })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@19.2.3_@types+react@19.2.14__@ty_fa89646d7248b32d1762bf88948f6339/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Gt = Object.freeze({
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
}), Kt = "VisuallyHidden", qt = H.forwardRef((e, t) => /* @__PURE__ */ J(g.span, {
	...e,
	ref: t,
	style: {
		...Gt,
		...e.style
	}
}));
qt.displayName = Kt;
var Jt = qt, [Yt, Xt] = i("Tooltip", [D]), Zt = D(), Qt = "TooltipProvider", $t = 700, en = "tooltip.open", [tn, nn] = Yt(Qt), rn = (e) => {
	let { __scopeTooltip: t, delayDuration: n = $t, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = H.useRef(!0), s = H.useRef(!1), c = H.useRef(0);
	return H.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ J(tn, {
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
rn.displayName = Qt;
var an = "Tooltip", [on, sn] = Yt(an), cn = (e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: a, disableHoverableContent: o, delayDuration: s } = e, c = nn(an, e.__scopeTooltip), l = Zt(t), [u, d] = H.useState(null), f = x(), p = H.useRef(0), m = o ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = H.useRef(!1), [_, v] = M({
		prop: r,
		defaultProp: i ?? !1,
		onChange: (e) => {
			e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(en))) : c.onClose(), a?.(e);
		},
		caller: an
	}), y = H.useMemo(() => _ ? g.current ? "delayed-open" : "instant-open" : "closed", [_]), b = H.useCallback(() => {
		window.clearTimeout(p.current), p.current = 0, g.current = !1, v(!0);
	}, [v]), S = H.useCallback(() => {
		window.clearTimeout(p.current), p.current = 0, v(!1);
	}, [v]), C = H.useCallback(() => {
		window.clearTimeout(p.current), p.current = window.setTimeout(() => {
			g.current = !0, v(!0), p.current = 0;
		}, h);
	}, [h, v]);
	return H.useEffect(() => () => {
		p.current &&= (window.clearTimeout(p.current), 0);
	}, []), /* @__PURE__ */ J(O, {
		...l,
		children: /* @__PURE__ */ J(on, {
			scope: t,
			contentId: f,
			open: _,
			stateAttribute: y,
			trigger: u,
			onTriggerChange: d,
			onTriggerEnter: H.useCallback(() => {
				c.isOpenDelayedRef.current ? C() : b();
			}, [
				c.isOpenDelayedRef,
				C,
				b
			]),
			onTriggerLeave: H.useCallback(() => {
				m ? S() : (window.clearTimeout(p.current), p.current = 0);
			}, [S, m]),
			onOpen: b,
			onClose: S,
			disableHoverableContent: m,
			children: n
		})
	});
};
cn.displayName = an;
var ln = "TooltipTrigger", un = H.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = sn(ln, n), a = nn(ln, n), o = Zt(n), s = p(t, H.useRef(null), i.onTriggerChange), c = H.useRef(!1), l = H.useRef(!1), u = H.useCallback(() => c.current = !1, []);
	return H.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ J(E, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ J(g.button, {
			"aria-describedby": i.open ? i.contentId : void 0,
			"data-state": i.stateAttribute,
			...r,
			ref: s,
			onPointerMove: j(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !l.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), l.current = !0);
			}),
			onPointerLeave: j(e.onPointerLeave, () => {
				i.onTriggerLeave(), l.current = !1;
			}),
			onPointerDown: j(e.onPointerDown, () => {
				i.open && i.onClose(), c.current = !0, document.addEventListener("pointerup", u, { once: !0 });
			}),
			onFocus: j(e.onFocus, () => {
				c.current || i.onOpen();
			}),
			onBlur: j(e.onBlur, i.onClose),
			onClick: j(e.onClick, i.onClose)
		})
	});
});
un.displayName = ln;
var dn = "TooltipPortal", [fn, pn] = Yt(dn, { forceMount: void 0 }), mn = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = sn(dn, t);
	return /* @__PURE__ */ J(fn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ J(F, {
			present: n || a.open,
			children: /* @__PURE__ */ J(T, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
mn.displayName = dn;
var hn = "TooltipContent", gn = H.forwardRef((e, t) => {
	let n = pn(hn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = sn(hn, e.__scopeTooltip);
	return /* @__PURE__ */ J(F, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ J(xn, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ J(_n, {
			side: i,
			...a,
			ref: t
		})
	});
}), _n = H.forwardRef((e, t) => {
	let n = sn(hn, e.__scopeTooltip), r = nn(hn, e.__scopeTooltip), i = H.useRef(null), a = p(t, i), [o, s] = H.useState(null), { trigger: c, onClose: l } = n, u = i.current, { onPointerInTransitChange: d } = r, f = H.useCallback(() => {
		s(null), d(!1);
	}, [d]), m = H.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = Tn(r, wn(r, n.getBoundingClientRect())), a = En(t.getBoundingClientRect()), o = On([...i, ...a]);
		s(o), d(!0);
	}, [d]);
	return H.useEffect(() => () => f(), [f]), H.useEffect(() => {
		if (c && u) {
			let e = (e) => m(e, u), t = (e) => m(e, c);
			return c.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
				c.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t);
			};
		}
	}, [
		c,
		u,
		m,
		f
	]), H.useEffect(() => {
		if (o) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = c?.contains(t) || u?.contains(t), i = !Dn(n, o);
				r ? f() : i && (f(), l());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		c,
		u,
		o,
		l,
		f
	]), /* @__PURE__ */ J(xn, {
		...e,
		ref: a
	});
}), [vn, yn] = Yt(an, { isInside: !1 }), bn = _("TooltipContent"), xn = H.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: o, ...s } = e, c = sn(hn, n), l = Zt(n), { onClose: u } = c;
	return H.useEffect(() => (document.addEventListener(en, u), () => document.removeEventListener(en, u)), [u]), H.useEffect(() => {
		if (c.trigger) {
			let e = (e) => {
				e.target?.contains(c.trigger) && u();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [c.trigger, u]), /* @__PURE__ */ J(C, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: u,
		children: /* @__PURE__ */ Y(N, {
			"data-state": c.stateAttribute,
			...l,
			...s,
			ref: t,
			style: {
				...s.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ J(bn, { children: r }), /* @__PURE__ */ J(vn, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ J(Jt, {
					id: c.contentId,
					role: "tooltip",
					children: i || r
				})
			})]
		})
	});
});
gn.displayName = hn;
var Sn = "TooltipArrow", Cn = H.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = Zt(n);
	return yn(Sn, n).isInside ? null : /* @__PURE__ */ J(ee, {
		...i,
		...r,
		ref: t
	});
});
Cn.displayName = Sn;
function wn(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function Tn(e, t, n = 5) {
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
function En(e) {
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
function Dn(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function On(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), kn(t);
}
function kn(e) {
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
var An = rn, jn = cn, Mn = un, Nn = mn, Pn = gn, Fn = 120;
function In({ appConfig: e, isRunning: t, hasMinimized: n, mouseX: r, onOpen: i, baseSize: a, maxSize: o }) {
	let s = G(null), [c, l] = K(!1), { getAppName: u } = V(), d = u(e.id, e.name), f = I((e) => e.showOpenAppIndicators), p = Te((e) => e.status), m = e.id === "settings" && ye(p), h = a + 10, g = ce(r, (e) => {
		if (!s.current) return 121;
		let t = s.current.getBoundingClientRect();
		return Math.abs(e - (t.left + t.width / 2));
	}), _ = qe(ce(g, [0, Fn], [o, a], { clamp: !0 }), {
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
	]), /* @__PURE__ */ J(An, {
		delayDuration: 500,
		children: /* @__PURE__ */ Y(jn, { children: [/* @__PURE__ */ Y(y.div, {
			ref: s,
			className: "relative flex flex-col justify-end items-center overflow-visible",
			style: {
				width: _,
				height: h
			},
			children: [/* @__PURE__ */ J(Mn, {
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
				className: "shrink-0 h-2.5 flex items-center justify-center gap-1",
				children: [f && t && !n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]" }), f && n && /* @__PURE__ */ J("span", { className: "w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-white/20" })]
			})]
		}), /* @__PURE__ */ J(Nn, { children: /* @__PURE__ */ Y(Pn, {
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
function Ln({ onOpenApp: e }) {
	let n = I((e) => e.dockAppIds), r = I((e) => e.apps), i = I((e) => e.runningAppIds), a = I((e) => e.windows), o = I((e) => e.launchApp), s = I((e) => e.dockSize), c = I((e) => e.dockMagnification), l = Math.max(s * (1 + c), s + c * 54), u = l - s, d = t(Infinity), f = n.map((e) => r[e]).filter(Boolean), p = i.filter((e) => !n.includes(e)).map((e) => r[e]).filter(Boolean), m = (e) => {
		o(e);
	}, h = Math.round(s * .28), g = Math.round(s * .47), _ = Math.round(s * .28), v = Math.round(s * .19);
	return /* @__PURE__ */ Y("div", {
		"data-dock": "true",
		className: "relative overflow-visible",
		style: { paddingTop: u },
		onMouseMove: (e) => d.set(e.clientX),
		onMouseLeave: () => d.set(Infinity),
		children: [/* @__PURE__ */ J("div", {
			className: "absolute inset-x-0 bottom-0",
			style: { top: u },
			children: /* @__PURE__ */ J(P, {
				variant: "dock",
				className: "absolute inset-0",
				borderRadius: Math.round(s * .5)
			})
		}), /* @__PURE__ */ Y("div", {
			className: "relative z-10 flex items-end overflow-visible",
			style: {
				gap: h,
				paddingLeft: g,
				paddingRight: g,
				paddingTop: _,
				paddingBottom: v
			},
			children: [
				f.map((e) => /* @__PURE__ */ J(In, {
					appConfig: e,
					isRunning: i.includes(e.id),
					hasMinimized: Object.values(a).some((t) => t.appId === e.id && t.isMinimized),
					mouseX: d,
					onOpen: m,
					baseSize: s,
					maxSize: l
				}, e.id)),
				p.length > 0 && /* @__PURE__ */ J("div", {
					className: "shrink-0 self-stretch my-1 rounded-full bg-white/30 dark:bg-white/20",
					style: {
						width: 1,
						marginLeft: Math.round(h * .5),
						marginRight: Math.round(h * .5)
					}
				}),
				p.map((e) => /* @__PURE__ */ J(In, {
					appConfig: e,
					isRunning: !0,
					hasMinimized: Object.values(a).some((t) => t.appId === e.id && t.isMinimized),
					mouseX: d,
					onOpen: m,
					baseSize: s,
					maxSize: l
				}, e.id))
			]
		})]
	});
}
//#endregion
//#region src/components/shared/AboutDialog.tsx
function Rn({ appConfig: e, onClose: t }) {
	let { getAppName: n } = V(), [r, i] = K({
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
	return typeof document > "u" ? null : He(/* @__PURE__ */ Y("div", {
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
							children: a && /* @__PURE__ */ J(B, {
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
							"Copyright © 2002–2024 Apple Inc.",
							/* @__PURE__ */ J("br", {}),
							"All rights reserved."
						]
					})
				]
			})]
		})]
	}), document.body);
}
function zn() {
	let [e, t] = K(null);
	return W(() => {
		let e = (e) => {
			let { appId: n, action: r } = e.detail;
			if (r !== "about") return;
			let i = I.getState().apps[n];
			i && t(i);
		};
		return window.addEventListener("app:menu:action", e), () => window.removeEventListener("app:menu:action", e);
	}, []), e ? /* @__PURE__ */ J(Rn, {
		appConfig: e,
		onClose: () => t(null)
	}) : null;
}
//#endregion
//#region src/hooks/useWallpaperLuminance.ts
var Bn = 28, Vn = 120, Hn = "wallpaper_luma_";
function Un(e) {
	let t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function Wn(e) {
	try {
		let t = localStorage.getItem(Hn + e);
		if (t === "light" || t === "dark") return t;
	} catch {}
	return null;
}
function Gn(e, t) {
	try {
		localStorage.setItem(Hn + e, t);
	} catch {}
}
var Kn = /* @__PURE__ */ new Map();
function qn(e) {
	return new Promise((t) => {
		let n = new Image();
		n.crossOrigin = "anonymous", n.onload = () => {
			try {
				let e = document.createElement("canvas");
				e.width = Vn, e.height = Bn;
				let r = e.getContext("2d");
				if (!r) {
					t("dark");
					return;
				}
				r.drawImage(n, 0, 0, n.naturalWidth, Math.min(n.naturalHeight, Bn * 2), 0, 0, Vn, Bn);
				let i = r.getImageData(0, 0, Vn, Bn).data, a = 0;
				for (let e = 0; e < i.length; e += 4) a += .299 * i[e] + .587 * i[e + 1] + .114 * i[e + 2];
				t(a / (i.length / 4) > 128 ? "light" : "dark");
			} catch {
				t("dark");
			}
		}, n.onerror = () => t("dark"), n.src = e;
	});
}
function Jn() {
	let e = I((e) => e.osTheme), t = I((e) => e.wallpaperId);
	W(() => {
		if (e !== "macos") return;
		let n = ue.find((e) => e.id === t);
		if (!n) return;
		let r = (e) => I.getState().setWallpaperTextTheme(e);
		if (Kn.has(t)) {
			r(Kn.get(t));
			return;
		}
		let i = Wn(t);
		if (i) {
			Kn.set(t, i), r(i);
			return;
		}
		if (n.kind === "color" && n.colorHex) {
			let e = Un(n.colorHex) > 128 ? "light" : "dark";
			Kn.set(t, e), Gn(t, e), r(e);
			return;
		}
		n.url && qn(n.url).then((e) => {
			Kn.set(t, e), Gn(t, e), r(e);
		});
	}, [e, t]);
}
//#endregion
//#region src/components/themes/MacOSTheme.tsx
var Yn = 20, Xn = 120, Zn = 1500;
function Qn({ onOpenApp: e, onSpotlight: t }) {
	Jn();
	let n = I((e) => Object.values(e.windows).some((e) => e.isMaximized && !e.isMinimized)), r = I((e) => Object.values(e.windows).some((e) => e.isFullScreen && !e.isMinimized)), i = I((e) => e.dockAutoHide), a = n || r || i, [o, s] = K(!1), [c, l] = K(!1), u = !a || o || c, d = G(null);
	W(() => {
		if (!a) {
			s(!1);
			return;
		}
		let e = null, t = (t) => {
			let n = t.clientY >= window.innerHeight - Yn, r = !0;
			if (n && d.current) {
				let { left: e, right: n } = d.current.getBoundingClientRect();
				r = t.clientX >= e - 24 && t.clientX <= n + 24;
			}
			n && r || c ? (s(!0), e &&= (clearTimeout(e), null)) : e ||= setTimeout(() => s(!1), Zn);
		};
		return document.addEventListener("mousemove", t), () => {
			document.removeEventListener("mousemove", t), e && clearTimeout(e);
		};
	}, [a, c]);
	let f = I((e) => e.fullscreenChromeRevealed), p = I((e) => e.setFullscreenChromeRevealed), m = !r || f;
	return W(() => {
		if (!r) {
			p(!1);
			return;
		}
		let e = null, t = (t) => {
			let n = t.target, r = n?.closest("[data-menubar=\"true\"]"), i = n?.closest("[data-windowchrome=\"true\"]"), a = n?.closest("[data-menu-portal=\"true\"]") || n?.closest("[data-radix-popper-content-wrapper]");
			t.clientY <= Yn ? (p(!0), e &&= (clearTimeout(e), null)) : r || i || a ? e &&= (clearTimeout(e), null) : e ||= setTimeout(() => p(!1), Zn);
		};
		return document.addEventListener("mousemove", t), () => {
			document.removeEventListener("mousemove", t), e && clearTimeout(e);
		};
	}, [r, p]), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(zn, {}),
		/* @__PURE__ */ J(y.div, {
			className: "absolute top-0 inset-x-0 z-40 pointer-events-none",
			animate: { y: m ? 0 : -28 },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			children: /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(k, { onSpotlight: t })
			})
		}),
		/* @__PURE__ */ J(y.div, {
			className: "absolute inset-x-0 z-40 flex justify-center pointer-events-none",
			style: { bottom: "var(--dock-offset-bottom)" },
			animate: { y: u ? 0 : Xn },
			transition: {
				type: "spring",
				stiffness: 380,
				damping: 30,
				mass: .8
			},
			onMouseEnter: () => l(!0),
			onMouseLeave: () => l(!1),
			children: /* @__PURE__ */ J("div", {
				ref: d,
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(Ln, { onOpenApp: e })
			})
		})
	] });
}
//#endregion
//#region src/hooks/useImageReady.ts
function $n(e, t = !0) {
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
function er() {
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
function tr() {
	let e = I((e) => e.wallpaperId), t = I((e) => e.customWallpapers), n = ve();
	return [...n.all, ...t].find((t) => t.id === e) || (n.all.find((e) => e.id === n.defaultId) ?? n.pictures[0]);
}
//#endregion
//#region src/components/iphone/LockScreen.tsx
function nr() {
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
function rr({ onUnlock: e }) {
	let t = er(), n = _e(), r = tr(), i = Ee(n, r.url ?? ""), a = $n(i, t && r.kind !== "color"), o = t && a && r.kind !== "color" ? `url(${i})` : "none", s = r.kind === "color" ? r.colorHex : "#1e1e2e", c = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
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
						children: /* @__PURE__ */ J(nr, {})
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
var ir = 6, ar = 4, or = ir * ar, sr = 6, cr = 600, lr = (e, t, n) => {
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
function ur({ onOpenApp: e }) {
	let t = I((e) => e.apps), { getAppName: n } = V(), [r, i] = K(0), [a, o] = K(!1), [s, c] = K(() => {
		let e = I.getState().apps, t = Object.values(e).filter((e) => !e.disabled).slice(sr).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / or)), r = [...t];
		for (; r.length < n * or;) r.push(null);
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
	let E = Object.values(t).filter((e) => !e.disabled).slice(0, sr), D = d ? l : s, O = Math.max(1, Math.ceil(D.length / or));
	d && (O += 1);
	let k = [];
	for (let e = 0; e < O * or; e += or) {
		let t = D.slice(e, e + or);
		for (; t.length < or;) t.push(null);
		k.push(t);
	}
	let A = U((e) => {
		e !== S.current && i(e);
	}, []), j = G(null), M = () => {
		j.current = setTimeout(() => o(!0), cr);
	}, N = () => {
		j.current && clearTimeout(j.current);
	}, P = () => {
		a && o(!1);
	}, ee = (e, t) => {
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
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / ir)), l = Math.floor(o / (i.height / ar));
				if (s >= 0 && s < ir && l >= 0 && l < ar) {
					let e = l * ir + s, r = t * or + e, i = [...C.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * or;
							for (; i.length < e;) i.push(null);
						}
						let e = lr(i, a, r);
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
			let r = Math.max(1, Math.ceil((n + 1) / or)), a = e.slice(0, r * or);
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
		onClick: P,
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
							gridTemplateColumns: `repeat(${ir}, 1fr)`,
							gridTemplateRows: `repeat(${ar}, 1fr)`,
							width: v
						},
						children: n.map((n, r) => {
							if (n) {
								let i = t[n];
								if (i) return /* @__PURE__ */ J(dr, {
									app: i,
									index: r,
									jiggling: a,
									activeDragId: d,
									onPointerDownStart: () => m(!0),
									onPointerDownEnd: () => m(!1),
									onOpen: e,
									onDragStart: ee
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
					children: E.map((t) => /* @__PURE__ */ Y("button", {
						onClick: () => e(t),
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ J(z, {
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
function dr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = V(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
		x: 0,
		y: 0
	}), p = G(!1), m = (t) => {
		t.stopPropagation(), f.current = {
			x: t.clientX,
			y: t.clientY
		}, p.current = !1, d.current = !1, i(), u.current = setTimeout(() => {
			d.current = !0, p.current || (p.current = !0, s(e.id, t.nativeEvent));
		}, cr);
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
function fr({ open: e, onClose: t }) {
	let n = I((e) => e.colorScheme), r = I((e) => e.setColorScheme);
	I((e) => e.glassEnabled), I((e) => e.setGlassEnabled);
	let [i, a] = K(80), [o, c] = K(65), [l, u] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(A, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(Ze, { className: "w-5 h-5" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(at, { className: "w-5 h-5" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(f, { className: "w-5 h-5" }),
			active: !1
		}
	]), p = (e) => u((t) => t.map((t) => t.id === e ? {
		...t,
		active: !t.active
	} : t));
	return /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
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
		children: /* @__PURE__ */ J(P, {
			variant: "panel",
			className: "p-4",
			children: /* @__PURE__ */ Y("div", {
				className: "space-y-3.5",
				children: [
					/* @__PURE__ */ J("div", {
						className: "grid grid-cols-2 gap-2",
						children: l.map((e) => /* @__PURE__ */ Y("button", {
							onClick: () => p(e.id),
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
						children: [/* @__PURE__ */ J(Pe, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
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
						children: [/* @__PURE__ */ J(Fe, { className: "w-4 h-4 text-white/70 shrink-0" }), /* @__PURE__ */ J("input", {
							type: "range",
							min: 0,
							max: 100,
							value: o,
							onChange: (e) => c(Number(e.target.value)),
							className: "flex-1 accent-white"
						})]
					}),
					/* @__PURE__ */ J("div", {
						className: "grid grid-cols-4 gap-2",
						children: [
							{
								icon: /* @__PURE__ */ J(be, { className: "w-5 h-5" }),
								label: "Camera"
							},
							{
								icon: /* @__PURE__ */ J(tt, { className: "w-5 h-5" }),
								label: "Flash"
							},
							{
								icon: /* @__PURE__ */ J(ut, { className: "w-5 h-5" }),
								label: "Timer"
							},
							{
								icon: /* @__PURE__ */ J(d, { className: "w-5 h-5" }),
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
function pr(e, t) {
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
function mr({ onOpenApp: t }) {
	let [n, r] = K(!1), [i, o] = K(!1);
	return pr({
		onSwipeUp: () => r(!1),
		onSwipeDown: () => o(!0)
	}), /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(s, { children: n && /* @__PURE__ */ J(rr, { onUnlock: () => r(!1) }) }),
		/* @__PURE__ */ Y("div", {
			className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none",
			style: { height: "var(--statusbar-height)" },
			children: [/* @__PURE__ */ J("span", {
				className: "min-w-0",
				children: /* @__PURE__ */ J(e, {})
			}), /* @__PURE__ */ Y("div", {
				className: "flex items-center gap-1.5 text-white",
				children: [/* @__PURE__ */ J(A, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ J(a, { className: "w-4 h-4" })]
			})]
		}),
		/* @__PURE__ */ J(ur, { onOpenApp: t }),
		/* @__PURE__ */ J(fr, {
			open: i,
			onClose: () => o(!1)
		}),
		/* @__PURE__ */ J("div", {
			className: "absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-40",
			children: /* @__PURE__ */ J("div", { className: "w-32 h-1 bg-white/30 rounded-full" })
		})
	] });
}
//#endregion
//#region src/components/dock/NavBar.tsx
function hr({ onOpenApp: e, navBarHeight: t = 72 }) {
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
function gr({ onClick: e }) {
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
			children: /* @__PURE__ */ J(s, {
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
var _r = 4, vr = 6, X = _r * vr, yr = 600, br = (e, t, n) => {
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
function xr({ onOpenApp: e, statusBarHeight: t, navBarHeight: n, homeIndicatorHeight: r }) {
	let i = I((e) => e.apps), { getAppName: a } = V(), [o, s] = K(0), [c, l] = K(!1), [u, d] = K(() => {
		let e = I.getState().apps, t = Object.values(e).filter((e) => !e.disabled).map((e) => e.id), n = Math.max(1, Math.ceil(t.length / X)), r = [...t];
		for (; r.length < n * X;) r.push(null);
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
	let k = m ? f : u, A = Math.max(1, Math.ceil(k.length / X));
	m && (A += 1);
	let j = [];
	for (let e = 0; e < A * X; e += X) {
		let t = k.slice(e, e + X);
		for (; t.length < X;) t.push(null);
		j.push(t);
	}
	let M = U((e) => {
		e !== T.current && s(e);
	}, []), N = G(null), P = () => {
		N.current = setTimeout(() => l(!0), yr);
	}, ee = () => {
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
		let n = Math.max(1, Math.ceil((t + 1) / X)), r = e.slice(0, n * X);
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
				let i = r.getBoundingClientRect(), a = e.clientX - i.left, o = e.clientY - i.top, s = Math.floor(a / (i.width / _r)), c = Math.floor(o / (i.height / vr));
				if (s >= 0 && s < _r && c >= 0 && c < vr) {
					let e = c * _r + s, r = t * X + e, i = [...E.current], a = i.indexOf(n);
					if (a !== -1 && r !== a) {
						if (r >= i.length) {
							let e = (t + 1) * X;
							for (; i.length < e;) i.push(null);
						}
						let e = br(i, a, r);
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
			let r = Math.max(1, Math.ceil((n + 1) / X)), i = e.slice(0, r * X);
			d(i), p(i), t >= r && s(r - 1), h(null), _(!1);
		};
		return window.addEventListener("pointermove", e), window.addEventListener("pointerup", t), () => {
			window.removeEventListener("pointermove", e), window.removeEventListener("pointerup", t);
		};
	}, [m, M]);
	let re = (e, t) => {
		let n = t.offset.x, r = t.velocity.x, i = o, a = S / 4;
		n < -a || r < -300 ? i = Math.min(A - 1, o + 1) : (n > a || r > 300) && (i = Math.max(0, o - 1)), M(i);
	}, F = n + r + 32;
	return /* @__PURE__ */ Y("div", {
		ref: x,
		className: "absolute inset-0 overflow-hidden",
		style: {
			paddingTop: t + 12,
			paddingBottom: F
		},
		onPointerDown: P,
		onPointerUp: ee,
		onPointerCancel: ee,
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
							gridTemplateColumns: `repeat(${_r}, 1fr)`,
							gridTemplateRows: `repeat(${vr}, 1fr)`,
							gap: "16px 8px",
							width: S
						},
						children: t.map((t, n) => {
							if (t) {
								let r = i[t];
								if (r) return /* @__PURE__ */ J(Sr, {
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
function Sr({ app: e, index: t, jiggling: n, activeDragId: r, onPointerDownStart: i, onPointerDownEnd: a, onOpen: o, onDragStart: s }) {
	let { getAppName: c } = V(), l = c(e.id, e.name), u = G(null), d = G(!1), f = G({
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
function Cr() {
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
var wr = 50, Tr = 72, Er = 20;
function Dr({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), o = G(null), c = I((e) => e.windows), l = Object.values(c).some((e) => !e.isMinimized);
	return pr({
		onSwipeUp: () => {
			l || n(!1);
		},
		onSwipeDown: () => {
			l || i(!0);
		}
	}, o), /* @__PURE__ */ Y("div", {
		ref: o,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ J(s, { children: t && /* @__PURE__ */ J(rr, { onUnlock: () => n(!1) }) }),
			/* @__PURE__ */ J(xr, {
				onOpenApp: e,
				statusBarHeight: wr,
				navBarHeight: Tr,
				homeIndicatorHeight: Er
			}),
			/* @__PURE__ */ J(re, {
				statusBarHeight: wr,
				navBarHeight: Tr,
				homeIndicatorHeight: Er
			}),
			/* @__PURE__ */ Y("div", {
				className: "absolute top-0 inset-x-0 z-40 grid pointer-events-none",
				style: {
					height: wr,
					gridTemplateColumns: "1fr auto 1fr"
				},
				children: [
					/* @__PURE__ */ J("div", {
						className: "flex items-start pt-3.5 pl-5 text-white text-[15px] font-semibold tabular-nums",
						children: /* @__PURE__ */ J(Cr, {})
					}),
					/* @__PURE__ */ J("div", {
						className: "flex items-start justify-center pt-1.5",
						children: /* @__PURE__ */ J(gr, {})
					}),
					/* @__PURE__ */ Y("div", {
						className: "flex items-start justify-end pt-3.5 pr-5 gap-2 text-white",
						children: [
							/* @__PURE__ */ J(ct, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(A, { className: "w-[18px] h-[18px]" }),
							/* @__PURE__ */ J(a, { className: "w-[22px] h-[22px]" })
						]
					})
				]
			}),
			/* @__PURE__ */ J(fr, {
				open: r,
				onClose: () => i(!1)
			}),
			!l && /* @__PURE__ */ Y("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				style: { height: 92 },
				children: [/* @__PURE__ */ J(hr, {
					onOpenApp: e,
					navBarHeight: Tr
				}), /* @__PURE__ */ J("div", {
					className: "flex items-center justify-center",
					style: { height: Er },
					children: /* @__PURE__ */ J("div", { className: "w-32 h-1 bg-white/40 rounded-full" })
				})]
			})
		]
	});
}
//#endregion
//#region src/components/windows/StartMenu.tsx
var Or = [
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
function kr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = I((e) => e.apps), o = I((e) => e.dockAppIds), { t: c, getAppName: l } = V(), u = o.map((e) => a[e]).filter(Boolean), d = Object.values(a).filter((e) => !e.disabled), f = r ? d.filter((e) => l(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : [], p = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
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
					children: [/* @__PURE__ */ J(Ne, { className: "w-4 h-4 text-black/40 dark:text-white/50 shrink-0" }), /* @__PURE__ */ J("input", {
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
				children: f.length === 0 ? /* @__PURE__ */ Y("p", {
					className: "text-center text-black/40 dark:text-white/40 text-sm py-6",
					children: [
						"No results for “",
						r,
						"”"
					]
				}) : f.map((e) => /* @__PURE__ */ Y("button", {
					onClick: () => p(e),
					className: "flex items-center gap-3 w-full px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-left",
					children: [/* @__PURE__ */ J(z, {
						appConfig: e,
						size: 32
					}), /* @__PURE__ */ Y("div", { children: [/* @__PURE__ */ J("p", {
						className: "text-[13px] text-black dark:text-white font-medium",
						children: l(e.id, e.name)
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
					children: u.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => p(e),
						className: "flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
						children: [/* @__PURE__ */ J(z, {
							appConfig: e,
							size: 36
						}), /* @__PURE__ */ J("span", {
							className: "text-[10px] text-black/80 dark:text-white/80 truncate w-full text-center leading-tight",
							children: l(e.id, e.name)
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
					children: Or.map((e) => /* @__PURE__ */ Y("button", {
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
						children: /* @__PURE__ */ J(dt, { className: "w-4 h-4 text-white" })
					}), /* @__PURE__ */ J("span", {
						className: "text-[12px] text-black/80 dark:text-white/80 font-semibold",
						children: "User"
					})]
				}), /* @__PURE__ */ J("button", {
					className: "p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					title: "Power",
					children: /* @__PURE__ */ J(ot, { className: "w-4.5 h-4.5 text-black/60 dark:text-white/60" })
				})]
			})
		]
	})] }) });
}
//#endregion
//#region src/components/windows/SystemTray.tsx
function Ar({ open: t, onClose: n }) {
	let r = I((e) => e.notifications), i = I((e) => e.dismissNotification), o = r.filter((e) => !e.read), [c, l] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(A, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(Ze, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(at, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "focus",
			label: "Focus",
			icon: /* @__PURE__ */ J(f, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery",
			icon: /* @__PURE__ */ J(a, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "display",
			label: "Display",
			icon: /* @__PURE__ */ J(Me, { className: "w-4 h-4" }),
			active: !1
		}
	]), u = (e) => {
		l((t) => t.map((t) => t.id === e ? {
			...t,
			active: !t.active
		} : t));
	}, d = /* @__PURE__ */ new Date(), p = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(), m = new Date(d.getFullYear(), d.getMonth(), 1).getDay(), h = d.toLocaleString("default", {
		month: "long",
		year: "numeric"
	}), g = [...Array.from({ length: m }, () => null), ...Array.from({ length: p }, (e, t) => t + 1)];
	return /* @__PURE__ */ J(s, { children: t && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[9970]",
		onClick: n
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
					children: /* @__PURE__ */ J(e, {})
				}), /* @__PURE__ */ J("p", {
					className: "text-[12px] text-black/50 dark:text-white/50 mt-0.5",
					children: d.toLocaleDateString("en-US", {
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
					children: c.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => u(e.id),
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
				children: [/* @__PURE__ */ J(jr, {
					icon: /* @__PURE__ */ J(Fe, { className: "w-3.5 h-3.5" }),
					defaultValue: 75
				}), /* @__PURE__ */ J(jr, {
					icon: /* @__PURE__ */ J(Pe, { className: "w-3.5 h-3.5" }),
					defaultValue: 80
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "px-5 py-3 border-b border-black/8 dark:border-white/8",
				children: [/* @__PURE__ */ J("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: h
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
					}, t)), g.map((e, t) => /* @__PURE__ */ J("div", {
						className: L("text-[11px] w-7 h-7 flex items-center justify-center rounded-full mx-auto", e === d.getDate() ? "bg-blue-500 text-white font-semibold" : e ? "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 cursor-default" : ""),
						children: e
					}, t))]
				})]
			}),
			o.length > 0 && /* @__PURE__ */ Y("div", {
				className: "px-5 py-3 max-h-36 overflow-y-auto",
				children: [/* @__PURE__ */ J("p", {
					className: "text-[11px] font-semibold text-black/60 dark:text-white/60 mb-2",
					children: "Notifications"
				}), o.slice(0, 4).map((e) => /* @__PURE__ */ Y("div", {
					className: "flex items-start gap-2.5 py-1.5 group",
					children: [
						/* @__PURE__ */ J("div", {
							className: "w-6 h-6 rounded bg-blue-600 flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ J(he, { className: "w-3 h-3 text-white" })
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
							onClick: () => i(e.id),
							className: "text-black/20 dark:text-white/20 hover:text-black/60 dark:hover:text-white/60 opacity-0 group-hover:opacity-100 transition-opacity",
							children: /* @__PURE__ */ J(Ae, { className: "w-3 h-3" })
						})
					]
				}, e.id))]
			})
		]
	})] }) });
}
function jr({ icon: e, defaultValue: t }) {
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
function Mr({ onOpenApp: t }) {
	let [n, r] = K(!1), [i, a] = K(!1), o = I((e) => e.dockAppIds), s = I((e) => e.apps), c = I((e) => e.runningAppIds), l = I((e) => e.launchApp), u = I((e) => e.restoreWindow), d = I((e) => e.focusWindow), f = I((e) => e.windows), { t: p, getAppName: m } = V(), h = o.map((e) => s[e]).filter(Boolean), g = (e) => {
		l(e);
	};
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(kr, {
			open: n,
			onClose: () => r(!1),
			onOpenApp: (e) => {
				t(e), r(!1);
			}
		}),
		/* @__PURE__ */ J(Ar, {
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
							r((e) => !e), a(!1);
						},
						className: L("w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20 transition-colors", n && "bg-black/10 dark:bg-white/15"),
						title: "Search",
						children: /* @__PURE__ */ J(Ne, { className: "w-4 h-4 text-black/70 dark:text-white/80" })
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
						children: /* @__PURE__ */ J(e, {})
					})
				})
			})]
		})
	] });
}
//#endregion
//#region src/components/themes/WindowsTheme.tsx
function Nr({ onOpenApp: e }) {
	return /* @__PURE__ */ J(q, { children: /* @__PURE__ */ J("div", {
		className: "absolute bottom-0 inset-x-0 z-40 pointer-events-none",
		children: /* @__PURE__ */ J("div", {
			className: "pointer-events-auto",
			children: /* @__PURE__ */ J(Mr, { onOpenApp: e })
		})
	}) });
}
//#endregion
//#region src/components/android/AppDrawer.tsx
function Pr({ open: e, onClose: t, onOpenApp: n }) {
	let [r, i] = K(""), a = I((e) => e.apps), { t: o, getAppName: c } = V(), l = Object.values(a).filter((e) => !e.disabled), u = r ? l.filter((e) => c(e.id, e.name).toLowerCase().includes(r.toLowerCase())) : l, d = (e) => {
		n(e), t();
	};
	return /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
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
						/* @__PURE__ */ J(Ne, { className: "w-4 h-4 text-white/50 shrink-0" }),
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
					children: u.map((e) => /* @__PURE__ */ Y("button", {
						onClick: () => d(e),
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ J("div", {
							className: "w-14 h-14 rounded-2xl overflow-hidden",
							children: /* @__PURE__ */ J(z, {
								appConfig: e,
								size: 56
							})
						}), /* @__PURE__ */ J("span", {
							className: "text-white/80 text-[10px] text-center leading-tight max-w-[60px] truncate",
							children: c(e.id, e.name)
						})]
					}, e.id))
				})
			})
		]
	})] }) });
}
//#endregion
//#region src/components/android/QuickSettings.tsx
function Fr({ open: e, onClose: t }) {
	let n = I((e) => e.notifications), r = I((e) => e.dismissNotification), i = I((e) => e.colorScheme), o = I((e) => e.setColorScheme), [c, l] = K(!1), [u, d] = K(70), [p, h] = K([
		{
			id: "wifi",
			label: "Wi-Fi",
			icon: /* @__PURE__ */ J(A, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "bluetooth",
			label: "Bluetooth",
			icon: /* @__PURE__ */ J(Ze, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dnd",
			label: "Do Not Dist",
			icon: /* @__PURE__ */ J(Xe, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "airplane",
			label: "Airplane",
			icon: /* @__PURE__ */ J(at, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "rotate",
			label: "Auto Rotate",
			icon: /* @__PURE__ */ J(st, { className: "w-4 h-4" }),
			active: !0
		},
		{
			id: "flashlight",
			label: "Flashlight",
			icon: /* @__PURE__ */ J(tt, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "battery",
			label: "Battery Sav",
			icon: /* @__PURE__ */ J(a, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "cast",
			label: "Cast",
			icon: /* @__PURE__ */ J(Qe, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "dark",
			label: "Dark Mode",
			icon: /* @__PURE__ */ J(f, { className: "w-4 h-4" }),
			active: i === "dark"
		},
		{
			id: "eye",
			label: "Eye Comfort",
			icon: /* @__PURE__ */ J($e, { className: "w-4 h-4" }),
			active: !1
		},
		{
			id: "bell",
			label: "Notifications",
			icon: /* @__PURE__ */ J(he, { className: "w-4 h-4" }),
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
	]), g = (e) => {
		e === "dark" && o(i === "dark" ? "light" : "dark"), h((t) => t.map((t) => t.id === e ? {
			...t,
			active: !t.active
		} : t));
	}, _ = n.filter((e) => !e.read), v = c ? p : p.slice(0, 6);
	return /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
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
					onClick: () => l((e) => !e),
					className: "p-1.5 rounded-full bg-white/10",
					children: /* @__PURE__ */ J(m, { className: L("w-4 h-4 text-white/70 transition-transform", c ? "rotate-180" : "") })
				})]
			}),
			/* @__PURE__ */ Y("div", {
				className: "flex items-center gap-3 px-4 py-2",
				children: [/* @__PURE__ */ J(Pe, { className: "w-4 h-4 text-white/60 shrink-0" }), /* @__PURE__ */ J("input", {
					type: "range",
					min: 0,
					max: 100,
					value: u,
					onChange: (e) => d(Number(e.target.value)),
					className: "flex-1 h-1 rounded-full accent-teal-400"
				})]
			}),
			/* @__PURE__ */ J("div", {
				className: "grid grid-cols-3 gap-2 px-4 pt-2",
				children: v.map((e) => /* @__PURE__ */ Y("button", {
					onClick: () => g(e.id),
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
			_.length > 0 && /* @__PURE__ */ Y("div", {
				className: "mt-3 px-4 space-y-2",
				children: [/* @__PURE__ */ J("div", { className: "h-px bg-white/10" }), _.slice(0, 3).map((e) => /* @__PURE__ */ Y("div", {
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
function Ir() {
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
var Lr = 32, Rr = 76, zr = 0;
function Br({ onOpenApp: e }) {
	let [t, n] = K(!1), [r, i] = K(!1), o = G(null), s = I((e) => e.windows), c = Object.values(s).some((e) => !e.isMinimized);
	return pr({
		onSwipeUp: () => {
			c || n(!0);
		},
		onSwipeDown: () => {
			c || i(!0);
		}
	}, o), /* @__PURE__ */ Y("div", {
		ref: o,
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ Y("div", {
				className: "absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 text-white text-[13px] font-semibold tabular-nums pointer-events-none",
				style: { height: Lr },
				children: [/* @__PURE__ */ J(Ir, {}), /* @__PURE__ */ Y("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ J(ct, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(A, { className: "w-[17px] h-[17px]" }),
						/* @__PURE__ */ J(a, { className: "w-[20px] h-[20px]" })
					]
				})]
			}),
			/* @__PURE__ */ J(re, {
				statusBarHeight: Lr,
				navBarHeight: Rr,
				homeIndicatorHeight: zr
			}),
			!c && /* @__PURE__ */ J("div", {
				className: "absolute bottom-0 inset-x-0 z-40",
				children: /* @__PURE__ */ J(hr, {
					onOpenApp: e,
					navBarHeight: Rr
				})
			}),
			/* @__PURE__ */ J(Pr, {
				open: t,
				onClose: () => n(!1),
				onOpenApp: (t) => {
					e(t), n(!1);
				}
			}),
			/* @__PURE__ */ J(Fr, {
				open: r,
				onClose: () => i(!1)
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_161926fa2509d0b7370b60b8bb4eb8b0/node_modules/@radix-ui/react-collection/dist/index.mjs
function Vr(e) {
	let t = e + "CollectionProvider", [n, r] = i(t), [a, o] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: t, children: n } = e, r = Ie.useRef(null), i = Ie.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ J(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	s.displayName = t;
	let c = e + "CollectionSlot", l = ae(c), u = Ie.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = p(t, o(c, n).collectionRef);
		return /* @__PURE__ */ J(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", m = ae(d), h = Ie.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, a = Ie.useRef(null), s = p(t, a), c = o(d, n);
		return Ie.useEffect(() => (c.itemMap.set(a, {
			ref: a,
			...i
		}), () => void c.itemMap.delete(a))), /* @__PURE__ */ J(m, {
			[f]: "",
			ref: s,
			children: r
		});
	});
	h.displayName = d;
	function g(t) {
		let n = o(e + "CollectionConsumer", t);
		return Ie.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: u,
			ItemSlot: h
		},
		g,
		r
	];
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs
var Hr = H.createContext(void 0);
function Ur(e) {
	let t = H.useContext(Hr);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@type_4eeb29c998b846c35358e2f929e7490e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var Wr = "rovingFocusGroup.onEntryFocus", Gr = {
	bubbles: !1,
	cancelable: !0
}, Kr = "RovingFocusGroup", [qr, Jr, Yr] = Vr(Kr), [Xr, Zr] = i(Kr, [Yr]), [Qr, $r] = Xr(Kr), ei = H.forwardRef((e, t) => /* @__PURE__ */ J(qr.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ J(qr.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ J(ti, {
			...e,
			ref: t
		})
	})
}));
ei.displayName = Kr;
var ti = H.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: i = !1, dir: a, currentTabStopId: o, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: c, onEntryFocus: l, preventScrollOnEntryFocus: u = !1, ...d } = e, f = H.useRef(null), m = p(t, f), h = Ur(a), [_, v] = M({
		prop: o,
		defaultProp: s ?? null,
		onChange: c,
		caller: Kr
	}), [y, b] = H.useState(!1), x = oe(l), S = Jr(n), C = H.useRef(!1), [w, T] = H.useState(0);
	return H.useEffect(() => {
		let e = f.current;
		if (e) return e.addEventListener(Wr, x), () => e.removeEventListener(Wr, x);
	}, [x]), /* @__PURE__ */ J(Qr, {
		scope: n,
		orientation: r,
		dir: h,
		loop: i,
		currentTabStopId: _,
		onItemFocus: H.useCallback((e) => v(e), [v]),
		onItemShiftTab: H.useCallback(() => b(!0), []),
		onFocusableItemAdd: H.useCallback(() => T((e) => e + 1), []),
		onFocusableItemRemove: H.useCallback(() => T((e) => e - 1), []),
		children: /* @__PURE__ */ J(g.div, {
			tabIndex: y || w === 0 ? -1 : 0,
			"data-orientation": r,
			...d,
			ref: m,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: j(e.onMouseDown, () => {
				C.current = !0;
			}),
			onFocus: j(e.onFocus, (e) => {
				let t = !C.current;
				if (e.target === e.currentTarget && t && !y) {
					let t = new CustomEvent(Wr, Gr);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = S().filter((e) => e.focusable);
						si([
							e.find((e) => e.active),
							e.find((e) => e.id === _),
							...e
						].filter(Boolean).map((e) => e.ref.current), u);
					}
				}
				C.current = !1;
			}),
			onBlur: j(e.onBlur, () => b(!1))
		})
	});
}), ni = "RovingFocusGroupItem", ri = H.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = x(), l = a || c, u = $r(ni, n), d = u.currentTabStopId === l, f = Jr(n), { onFocusableItemAdd: p, onFocusableItemRemove: m, currentTabStopId: h } = u;
	return H.useEffect(() => {
		if (r) return p(), () => m();
	}, [
		r,
		p,
		m
	]), /* @__PURE__ */ J(qr.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ J(g.span, {
			tabIndex: d ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: j(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: j(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: j(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = oi(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = f().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? ci(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => si(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: d,
				hasTabStop: h != null
			}) : o
		})
	});
});
ri.displayName = ni;
var ii = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ai(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function oi(e, t, n) {
	let r = ai(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ii[r];
}
function si(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ci(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var li = ei, ui = ri, di = ["Enter", " "], fi = [
	"ArrowDown",
	"PageUp",
	"Home"
], pi = [
	"ArrowUp",
	"PageDown",
	"End"
], mi = [...fi, ...pi], hi = {
	ltr: [...di, "ArrowRight"],
	rtl: [...di, "ArrowLeft"]
}, gi = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, _i = "Menu", [vi, yi, bi] = Vr(_i), [xi, Si] = i(_i, [
	bi,
	D,
	Zr
]), Ci = D(), wi = Zr(), [Ti, Ei] = xi(_i), [Di, Oi] = xi(_i), ki = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = Ci(t), [c, l] = H.useState(null), u = H.useRef(!1), d = oe(a), f = Ur(i);
	return H.useEffect(() => {
		let e = () => {
			u.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => u.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ J(O, {
		...s,
		children: /* @__PURE__ */ J(Ti, {
			scope: t,
			open: n,
			onOpenChange: d,
			content: c,
			onContentChange: l,
			children: /* @__PURE__ */ J(Di, {
				scope: t,
				onClose: H.useCallback(() => d(!1), [d]),
				isUsingKeyboardRef: u,
				dir: f,
				modal: o,
				children: r
			})
		})
	});
};
ki.displayName = _i;
var Ai = "MenuAnchor", ji = H.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ J(E, {
		...Ci(n),
		...r,
		ref: t
	});
});
ji.displayName = Ai;
var Mi = "MenuPortal", [Ni, Pi] = xi(Mi, { forceMount: void 0 }), Fi = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = Ei(Mi, t);
	return /* @__PURE__ */ J(Ni, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ J(F, {
			present: n || a.open,
			children: /* @__PURE__ */ J(T, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Fi.displayName = Mi;
var Z = "MenuContent", [Ii, Li] = xi(Z), Ri = H.forwardRef((e, t) => {
	let n = Pi(Z, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Ei(Z, e.__scopeMenu), o = Oi(Z, e.__scopeMenu);
	return /* @__PURE__ */ J(vi.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ J(F, {
			present: r || a.open,
			children: /* @__PURE__ */ J(vi.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ J(zi, {
					...i,
					ref: t
				}) : /* @__PURE__ */ J(Bi, {
					...i,
					ref: t
				})
			})
		})
	});
}), zi = H.forwardRef((e, t) => {
	let n = Ei(Z, e.__scopeMenu), r = H.useRef(null), i = p(t, r);
	return H.useEffect(() => {
		let e = r.current;
		if (e) return w(e);
	}, []), /* @__PURE__ */ J(Hi, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: j(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), Bi = H.forwardRef((e, t) => {
	let n = Ei(Z, e.__scopeMenu);
	return /* @__PURE__ */ J(Hi, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Vi = ae("MenuContent.ScrollLock"), Hi = H.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: m, disableOutsideScroll: h, ...g } = e, _ = Ei(Z, n), v = Oi(Z, n), y = Ci(n), b = wi(n), x = yi(n), [S, w] = H.useState(null), T = H.useRef(null), E = p(t, T, _.onContentChange), D = H.useRef(0), O = H.useRef(""), k = H.useRef(0), A = H.useRef(null), M = H.useRef("right"), P = H.useRef(0), ee = h ? ne : H.Fragment, te = h ? {
		as: Vi,
		allowPinchZoom: !0
	} : void 0, re = (e) => {
		let t = O.current + e, n = x().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ea(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			O.current = t, window.clearTimeout(D.current), t !== "" && (D.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	H.useEffect(() => () => window.clearTimeout(D.current), []), se();
	let F = H.useCallback((e) => M.current === A.current?.side && Oa(e, A.current?.area), []);
	return /* @__PURE__ */ J(Ii, {
		scope: n,
		searchRef: O,
		onItemEnter: H.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		onItemLeave: H.useCallback((e) => {
			F(e) || (T.current?.focus(), w(null));
		}, [F]),
		onTriggerLeave: H.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		pointerGraceTimerRef: k,
		onPointerGraceIntentChange: H.useCallback((e) => {
			A.current = e;
		}, []),
		children: /* @__PURE__ */ J(ee, {
			...te,
			children: /* @__PURE__ */ J(ie, {
				asChild: !0,
				trapped: i,
				onMountAutoFocus: j(a, (e) => {
					e.preventDefault(), T.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: o,
				children: /* @__PURE__ */ J(C, {
					asChild: !0,
					disableOutsidePointerEvents: s,
					onEscapeKeyDown: l,
					onPointerDownOutside: u,
					onFocusOutside: d,
					onInteractOutside: f,
					onDismiss: m,
					children: /* @__PURE__ */ J(li, {
						asChild: !0,
						...b,
						dir: v.dir,
						orientation: "vertical",
						loop: r,
						currentTabStopId: S,
						onCurrentTabStopIdChange: w,
						onEntryFocus: j(c, (e) => {
							v.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ J(N, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": xa(_.open),
							"data-radix-menu-content": "",
							dir: v.dir,
							...y,
							...g,
							ref: E,
							style: {
								outline: "none",
								...g.style
							},
							onKeyDown: j(g.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && re(e.key));
								let i = T.current;
								if (e.target !== i || !mi.includes(e.key)) return;
								e.preventDefault();
								let a = x().filter((e) => !e.disabled).map((e) => e.ref.current);
								pi.includes(e.key) && a.reverse(), wa(a);
							}),
							onBlur: j(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "");
							}),
							onPointerMove: j(e.onPointerMove, ka((e) => {
								let t = e.target, n = P.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > P.current ? "right" : "left";
									M.current = t, P.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
Ri.displayName = Z;
var Ui = "MenuGroup", Wi = H.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ J(g.div, {
		role: "group",
		...r,
		ref: t
	});
});
Wi.displayName = Ui;
var Gi = "MenuLabel", Ki = H.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ J(g.div, {
		...r,
		ref: t
	});
});
Ki.displayName = Gi;
var qi = "MenuItem", Ji = "menu.itemSelect", Yi = H.forwardRef((e, t) => {
	let { disabled: r = !1, onSelect: i, ...a } = e, o = H.useRef(null), s = Oi(qi, e.__scopeMenu), c = Li(qi, e.__scopeMenu), l = p(t, o), u = H.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Ji, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Ji, (e) => i?.(e), { once: !0 }), n(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ J(Xi, {
		...a,
		ref: l,
		disabled: r,
		onClick: j(e.onClick, d),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), u.current = !0;
		},
		onPointerUp: j(e.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: j(e.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || di.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
Yi.displayName = qi;
var Xi = H.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = Li(qi, n), s = wi(n), c = H.useRef(null), l = p(t, c), [u, d] = H.useState(!1), [f, m] = H.useState("");
	return H.useEffect(() => {
		let e = c.current;
		e && m((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ J(vi.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? f,
		children: /* @__PURE__ */ J(ui, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ J(g.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: j(e.onPointerMove, ka((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: j(e.onPointerLeave, ka((e) => o.onItemLeave(e))),
				onFocus: j(e.onFocus, () => d(!0)),
				onBlur: j(e.onBlur, () => d(!1))
			})
		})
	});
}), Zi = "MenuCheckboxItem", Qi = H.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ J(oa, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ J(Yi, {
			role: "menuitemcheckbox",
			"aria-checked": Sa(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Ca(n),
			onSelect: j(i.onSelect, () => r?.(Sa(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Qi.displayName = Zi;
var $i = "MenuRadioGroup", [ea, ta] = xi($i, {
	value: void 0,
	onValueChange: () => {}
}), na = H.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = oe(r);
	return /* @__PURE__ */ J(ea, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ J(Wi, {
			...i,
			ref: t
		})
	});
});
na.displayName = $i;
var ra = "MenuRadioItem", ia = H.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = ta(ra, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ J(oa, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ J(Yi, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Ca(a),
			onSelect: j(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
ia.displayName = ra;
var aa = "MenuItemIndicator", [oa, sa] = xi(aa, { checked: !1 }), ca = H.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = sa(aa, n);
	return /* @__PURE__ */ J(F, {
		present: r || Sa(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ J(g.span, {
			...i,
			ref: t,
			"data-state": Ca(a.checked)
		})
	});
});
ca.displayName = aa;
var la = "MenuSeparator", ua = H.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ J(g.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
ua.displayName = la;
var da = "MenuArrow", fa = H.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ J(ee, {
		...Ci(n),
		...r,
		ref: t
	});
});
fa.displayName = da;
var pa = "MenuSub", [ma, ha] = xi(pa), ga = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = Ei(pa, t), o = Ci(t), [s, c] = H.useState(null), [l, u] = H.useState(null), d = oe(i);
	return H.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ J(O, {
		...o,
		children: /* @__PURE__ */ J(Ti, {
			scope: t,
			open: r,
			onOpenChange: d,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ J(ma, {
				scope: t,
				contentId: x(),
				triggerId: x(),
				trigger: s,
				onTriggerChange: c,
				children: n
			})
		})
	});
};
ga.displayName = pa;
var _a = "MenuSubTrigger", va = H.forwardRef((e, t) => {
	let n = Ei(_a, e.__scopeMenu), i = Oi(_a, e.__scopeMenu), a = ha(_a, e.__scopeMenu), o = Li(_a, e.__scopeMenu), s = H.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: e.__scopeMenu }, d = H.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return H.useEffect(() => d, [d]), H.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ J(ji, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ J(Xi, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": a.contentId,
			"data-state": xa(n.open),
			...e,
			ref: r(t, a.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: j(e.onPointerMove, ka((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					n.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: j(e.onPointerLeave, ka((e) => {
				d();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: j(e.onKeyDown, (t) => {
				let r = o.searchRef.current !== "";
				e.disabled || r && t.key === " " || hi[i.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
va.displayName = _a;
var ya = "MenuSubContent", ba = H.forwardRef((e, t) => {
	let n = Pi(Z, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Ei(Z, e.__scopeMenu), o = Oi(Z, e.__scopeMenu), s = ha(ya, e.__scopeMenu), c = H.useRef(null), l = p(t, c);
	return /* @__PURE__ */ J(vi.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ J(F, {
			present: r || a.open,
			children: /* @__PURE__ */ J(vi.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ J(Hi, {
					id: s.contentId,
					"aria-labelledby": s.triggerId,
					...i,
					ref: l,
					align: "start",
					side: o.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						o.isUsingKeyboardRef.current && c.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: j(e.onFocusOutside, (e) => {
						e.target !== s.trigger && a.onOpenChange(!1);
					}),
					onEscapeKeyDown: j(e.onEscapeKeyDown, (e) => {
						o.onClose(), e.preventDefault();
					}),
					onKeyDown: j(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = gi[o.dir].includes(e.key);
						t && n && (a.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
ba.displayName = ya;
function xa(e) {
	return e ? "open" : "closed";
}
function Sa(e) {
	return e === "indeterminate";
}
function Ca(e) {
	return Sa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function wa(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ta(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Ea(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Ta(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Da(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Oa(e, t) {
	return t ? Da({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function ka(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Aa = ki, ja = ji, Ma = Fi, Na = Ri, Pa = Wi, Fa = Ki, Ia = Yi, La = Qi, Ra = na, za = ia, Ba = ca, Va = ua, Ha = fa, Ua = ga, Wa = va, Ga = ba, Ka = "ContextMenu", [qa, Ja] = i(Ka, [Si]), Q = Si(), [Ya, Xa] = qa(Ka), Za = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: a = !0 } = e, [o, s] = H.useState(!1), c = Q(t), l = oe(r), u = H.useCallback((e) => {
		s(e), l(e);
	}, [l]);
	return /* @__PURE__ */ J(Ya, {
		scope: t,
		open: o,
		onOpenChange: u,
		modal: a,
		children: /* @__PURE__ */ J(Aa, {
			...c,
			dir: i,
			open: o,
			onOpenChange: u,
			modal: a,
			children: n
		})
	});
};
Za.displayName = Ka;
var Qa = "ContextMenuTrigger", $a = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, disabled: r = !1, ...i } = e, a = Xa(Qa, n), o = Q(n), s = H.useRef({
		x: 0,
		y: 0
	}), c = H.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...s.current
	}) }), l = H.useRef(0), u = H.useCallback(() => window.clearTimeout(l.current), []), d = (e) => {
		s.current = {
			x: e.clientX,
			y: e.clientY
		}, a.onOpenChange(!0);
	};
	return H.useEffect(() => u, [u]), H.useEffect(() => void (r && u()), [r, u]), /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(ja, {
		...o,
		virtualRef: c
	}), /* @__PURE__ */ J(g.span, {
		"data-state": a.open ? "open" : "closed",
		"data-disabled": r ? "" : void 0,
		...i,
		ref: t,
		style: {
			WebkitTouchCallout: "none",
			...e.style
		},
		onContextMenu: r ? e.onContextMenu : j(e.onContextMenu, (e) => {
			u(), d(e), e.preventDefault();
		}),
		onPointerDown: r ? e.onPointerDown : j(e.onPointerDown, ko((e) => {
			u(), l.current = window.setTimeout(() => d(e), 700);
		})),
		onPointerMove: r ? e.onPointerMove : j(e.onPointerMove, ko(u)),
		onPointerCancel: r ? e.onPointerCancel : j(e.onPointerCancel, ko(u)),
		onPointerUp: r ? e.onPointerUp : j(e.onPointerUp, ko(u))
	})] });
});
$a.displayName = Qa;
var eo = "ContextMenuPortal", to = (e) => {
	let { __scopeContextMenu: t, ...n } = e;
	return /* @__PURE__ */ J(Ma, {
		...Q(t),
		...n
	});
};
to.displayName = eo;
var no = "ContextMenuContent", ro = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e, i = Xa(no, n), a = Q(n), o = H.useRef(!1);
	return /* @__PURE__ */ J(Na, {
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
ro.displayName = no;
var io = "ContextMenuGroup", ao = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Pa, {
		...Q(n),
		...r,
		ref: t
	});
});
ao.displayName = io;
var oo = "ContextMenuLabel", so = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Fa, {
		...Q(n),
		...r,
		ref: t
	});
});
so.displayName = oo;
var co = "ContextMenuItem", lo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ia, {
		...Q(n),
		...r,
		ref: t
	});
});
lo.displayName = co;
var uo = "ContextMenuCheckboxItem", fo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(La, {
		...Q(n),
		...r,
		ref: t
	});
});
fo.displayName = uo;
var po = "ContextMenuRadioGroup", mo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ra, {
		...Q(n),
		...r,
		ref: t
	});
});
mo.displayName = po;
var ho = "ContextMenuRadioItem", go = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(za, {
		...Q(n),
		...r,
		ref: t
	});
});
go.displayName = ho;
var _o = "ContextMenuItemIndicator", vo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ba, {
		...Q(n),
		...r,
		ref: t
	});
});
vo.displayName = _o;
var yo = "ContextMenuSeparator", bo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Va, {
		...Q(n),
		...r,
		ref: t
	});
});
bo.displayName = yo;
var xo = "ContextMenuArrow", So = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ha, {
		...Q(n),
		...r,
		ref: t
	});
});
So.displayName = xo;
var Co = "ContextMenuSub", wo = (e) => {
	let { __scopeContextMenu: t, children: n, onOpenChange: r, open: i, defaultOpen: a } = e, o = Q(t), [s, c] = M({
		prop: i,
		defaultProp: a ?? !1,
		onChange: r,
		caller: Co
	});
	return /* @__PURE__ */ J(Ua, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
};
wo.displayName = Co;
var To = "ContextMenuSubTrigger", Eo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Wa, {
		...Q(n),
		...r,
		ref: t
	});
});
Eo.displayName = To;
var Do = "ContextMenuSubContent", Oo = H.forwardRef((e, t) => {
	let { __scopeContextMenu: n, ...r } = e;
	return /* @__PURE__ */ J(Ga, {
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
Oo.displayName = Do;
function ko(e) {
	return (t) => t.pointerType === "mouse" ? void 0 : e(t);
}
var Ao = Za, jo = $a, Mo = to, No = ro, Po = lo, Fo = bo, Io = wo, Lo = Eo, Ro = Oo;
//#endregion
//#region src/lib/wallpaper-fit.ts
function zo(e) {
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
function Bo() {
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
	return !t || typeof document > "u" ? null : He(/* @__PURE__ */ J("div", {
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
								children: y && /* @__PURE__ */ J(B, {
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
									/* @__PURE__ */ J(et, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "16",
										max: "128",
										value: l,
										onChange: (e) => u(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(et, { className: "w-7 h-7 text-black/75 dark:text-white/75" })
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
									/* @__PURE__ */ J(nt, { className: "w-4 h-4 text-black/50 dark:text-white/50" }),
									/* @__PURE__ */ J("input", {
										type: "range",
										min: "0",
										max: "100",
										value: d,
										onChange: (e) => f(Number(e.target.value)),
										className: "flex-1 h-1 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
									}),
									/* @__PURE__ */ J(je, { className: "w-6 h-6 text-black/75 dark:text-white/75" })
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
var Vo = "flex items-center gap-2 px-2.5 py-[5px] rounded-[5px] cursor-default outline-none select-none text-[13px] text-black dark:text-white data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:opacity-40 data-[disabled]:pointer-events-none transition-colors", Ho = "my-[3px] mx-0 h-px bg-black/10 dark:bg-white/10", Uo = "min-w-[220px] outline-none z-[99999]";
function Wo({ children: e }) {
	let { t } = V(), n = I((e) => e.useStacks), r = I((e) => e.stackGroupBy), i = I((e) => e.toggleStacks), a = I((e) => e.setStackGroupBy), o = I((e) => e.openWidgetGallery), s = I((e) => e.wallpaperFitMode);
	I((e) => e.desktopViewOptionsOpen);
	let c = I((e) => e.setDesktopViewOptionsOpen), l = er(), [u, d] = K(!1), f = _e(), p = tr(), m = Ee(f, p.url ?? ""), h = $n(m, l && p.kind !== "color"), g = p.kind === "color" ? l : h, _ = l && g && p.kind !== "color" ? `url(${m})` : "none", v = [
		{
			id: "kind",
			label: t.kind
		},
		{
			id: "shared-by",
			label: t.sharedBy
		},
		{
			id: "date-last-opened",
			label: t.dateLastOpened
		},
		{
			id: "date-added",
			label: t.dateAdded
		},
		{
			id: "date-modified",
			label: t.dateModified
		},
		{
			id: "date-created",
			label: t.dateCreated
		},
		{
			id: "tags",
			label: t.tags
		}
	];
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ Y(Ao, { children: [/* @__PURE__ */ J(jo, {
			asChild: !0,
			children: /* @__PURE__ */ J("div", {
				className: "absolute inset-0 overflow-hidden bg-[#1e1e2e]",
				children: p.kind === "color" ? /* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					style: {
						backgroundColor: p.colorHex,
						transition: "background-color 120ms ease-out"
					}
				}) : l && p.kind === "live" && p.videoUrl ? /* @__PURE__ */ J("video", {
					src: Ee(f, p.videoUrl),
					autoPlay: !0,
					loop: !0,
					muted: !0,
					playsInline: !0,
					className: "absolute inset-0 w-full h-full object-cover"
				}, p.videoUrl) : /* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					style: {
						backgroundImage: _,
						...zo(s),
						transition: "background-image 120ms ease-out"
					}
				})
			})
		}), /* @__PURE__ */ J(Mo, { children: /* @__PURE__ */ J(No, {
			asChild: !0,
			className: Uo,
			children: /* @__PURE__ */ J(P, {
				variant: "panel",
				className: "p-1",
				children: /* @__PURE__ */ Y("div", { children: [
					/* @__PURE__ */ J(Po, {
						className: Vo,
						onSelect: () => d(!0),
						children: t.changeWallpaper
					}),
					/* @__PURE__ */ J(Po, {
						className: Vo,
						onSelect: () => o(),
						children: t.editWidgets
					}),
					/* @__PURE__ */ J(Fo, { className: Ho }),
					/* @__PURE__ */ Y(Po, {
						className: Vo,
						onSelect: () => i(),
						children: [/* @__PURE__ */ J("span", {
							className: "w-3.5 shrink-0 flex items-center justify-center",
							children: n && /* @__PURE__ */ J(ke, { className: "w-3 h-3 stroke-[2.5]" })
						}), t.useStacks]
					}),
					/* @__PURE__ */ Y(Io, { children: [/* @__PURE__ */ Y(Lo, {
						className: `${Vo} data-[state=open]:bg-blue-500 data-[state=open]:text-white`,
						children: [
							/* @__PURE__ */ J("span", { className: "w-3.5 shrink-0" }),
							/* @__PURE__ */ J("span", {
								className: "flex-1",
								children: t.groupStacksBy
							}),
							/* @__PURE__ */ J(Ae, { className: "w-3.5 h-3.5 ml-auto opacity-60" })
						]
					}), /* @__PURE__ */ J(Mo, { children: /* @__PURE__ */ J(Ro, {
						asChild: !0,
						className: Uo,
						sideOffset: 2,
						alignOffset: -4,
						children: /* @__PURE__ */ J(P, {
							variant: "panel",
							className: "p-1",
							children: /* @__PURE__ */ J("div", { children: v.map(({ id: e, label: t }) => /* @__PURE__ */ Y(Po, {
								className: Vo,
								onSelect: () => a(e),
								children: [/* @__PURE__ */ J("span", {
									className: "w-3.5 shrink-0 flex items-center justify-center",
									children: r === e && /* @__PURE__ */ J(ke, { className: "w-3 h-3 stroke-[2.5]" })
								}), t]
							}, e)) })
						})
					}) })] }),
					/* @__PURE__ */ J(Fo, { className: Ho }),
					/* @__PURE__ */ Y(Po, {
						className: Vo,
						onSelect: () => c(!0),
						children: [/* @__PURE__ */ J("span", { className: "w-3.5 shrink-0" }), t.showViewOptions]
					})
				] })
			})
		}) })] }),
		/* @__PURE__ */ J("div", {
			className: "absolute inset-0 pointer-events-none overflow-hidden",
			children: e
		}),
		u && /* @__PURE__ */ J(xe, { onClose: () => d(!1) }),
		/* @__PURE__ */ J(Bo, {})
	] });
}
//#endregion
//#region src/components/desktop/AppIcon.tsx
var Go = 6, Ko = 700;
function qo({ items: e, appId: t, onClose: n }) {
	let r = (e) => {
		n(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return /* @__PURE__ */ J(q, { children: e.map((e) => e.separator ? /* @__PURE__ */ J(Fo, { className: "my-1 h-px bg-black/10 dark:bg-white/10" }, e.key) : /* @__PURE__ */ Y(Po, {
		disabled: e.disabled,
		onSelect: () => r(e.action),
		className: "flex items-center justify-between px-3 py-1.5 rounded-[5px] cursor-default outline-none hover:bg-blue-500 hover:text-white data-disabled:opacity-40 transition-colors",
		children: [e.label, e.shortcut && /* @__PURE__ */ J("span", {
			className: "text-[10px] opacity-50 ml-4",
			children: e.shortcut
		})]
	}, e.key)) });
}
function Jo({ items: e, appId: t, anchorX: n, anchorY: r, onClose: i }) {
	let a = Math.min(n, window.innerWidth - 192 - 8), o = (e) => {
		i(), window.dispatchEvent(new CustomEvent("app:context:action", { detail: {
			appId: t,
			action: e
		} }));
	};
	return He(/* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J("div", {
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
function Yo({ appConfig: e, x: t, y: n, onOpen: r, onDrop: i, onDragStart: a, onDrag: o, isSelected: s = !1, onSelect: c, onUpAfterClick: l }) {
	let u = I((e) => e.desktopIconSize), d = I((e) => e.desktopLabelPosition), f = I((e) => e.desktopTextSize), [p, m] = K(!1), { getAppName: h } = V(), g = h(e.id, e.name), [_, v] = K({
		x: t,
		y: n
	}), [y, b] = K(!1), [x, S] = K(null), C = G(null), w = G(0), T = G(null), E = G(null), D = G(!1), O = p ? _ : {
		x: t,
		y: n
	}, k = () => {
		E.current &&= (clearTimeout(E.current), null);
	};
	return /* @__PURE__ */ Y(q, { children: [x && e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J(Jo, {
		items: e.contextMenu,
		appId: e.id,
		anchorX: x.x,
		anchorY: x.y,
		onClose: () => S(null)
	}), /* @__PURE__ */ Y(Ao, { children: [/* @__PURE__ */ J(jo, {
		asChild: !0,
		children: /* @__PURE__ */ J("div", {
			"data-app-icon": "true",
			"data-app-id": e.id,
			className: L("absolute pointer-events-auto", e.disabled && "opacity-40 pointer-events-none"),
			style: {
				left: O.x,
				top: O.y,
				width: d === "bottom" ? u + 56 : u + 104,
				zIndex: p ? 1e3 : 1,
				transition: p ? "none" : "left 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)"
			},
			children: /* @__PURE__ */ Y("button", {
				className: L("flex w-full items-center select-none rounded-lg", d === "bottom" ? "flex-col text-center gap-2 p-2" : "flex-row text-left gap-3 p-2", "focus:outline-none transition-transform duration-75", s ? "bg-white/8 dark:bg-white/5" : "hover:bg-white/15", y && !p && "scale-90 opacity-80", p && "scale-105 opacity-90 drop-shadow-2xl"),
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
					}, Ko));
					let u = (e) => {
						if (!C.current) return;
						let t = e.clientX - C.current.startMouseX, n = e.clientY - C.current.startMouseY;
						if (!C.current.moved && Math.hypot(t, n) < Go) return;
						k();
						let r = !C.current.moved;
						C.current.moved = !0, m(!0);
						let i = C.current.startX + t, s = C.current.startY + n;
						v({
							x: i,
							y: s
						}), r && a && a(), o && o(i, s);
					}, d = (a) => {
						if (k(), b(!1), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", d), !C.current) return;
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
					children: [/* @__PURE__ */ J(z, {
						appConfig: e,
						size: u,
						className: "drop-shadow-xl"
					}), e.badge !== void 0 && /* @__PURE__ */ J("span", {
						className: "absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow",
						children: e.badge
					})]
				}), /* @__PURE__ */ J("span", {
					className: L("block w-full text-white font-medium leading-tight px-1.5 py-0.5 rounded-[4px] border border-transparent", d === "bottom" ? "text-center mx-auto" : "text-left"),
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
	}), e.contextMenu && e.contextMenu.length > 0 && /* @__PURE__ */ J(Mo, { children: /* @__PURE__ */ J(No, {
		asChild: !0,
		className: "min-w-48 outline-none z-[99999]",
		children: /* @__PURE__ */ J(P, {
			variant: "panel",
			className: "p-1 text-xs",
			children: /* @__PURE__ */ J("div", { children: /* @__PURE__ */ J(qo, {
				items: e.contextMenu,
				appId: e.id,
				onClose: () => {}
			}) })
		})
	}) })] })] });
}
function Xo({ appList: e, posMap: t, activeDrag: n, maxRows: r, maxCols: i, cellW: a, cellH: o, desktopSortBy: s = "none" }) {
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
function Zo({ onOpenApp: e }) {
	let { config: t } = c(), n = Ye(), r = I((e) => e.apps), i = I((e) => e.iconLayout), a = I((e) => e.setIconLayout), o = I((e) => e.desktopIconSize), s = I((e) => e.desktopGridSpacing), l = I((e) => e.desktopLabelPosition), u = I((e) => e.desktopSortBy), d = G(null), { getAppName: f } = V(), [p, m] = K(null), [h, g] = K(/* @__PURE__ */ new Set()), [_, v] = K(null), [y, b] = K({}), x = G(!1), S = 108, C = 124;
	if (l === "bottom") {
		let e = 44 + (s - 50) * .8, t = 32 + (s - 50) * .8;
		S = o + e, C = o + 28 + t;
	} else {
		let e = 32 + (s - 50) * .8, t = 20 + (s - 50) * .8;
		S = o + 80 + e, C = o + t;
	}
	let w = Math.max(0, n.height - t.layout.desktopInsets.top - t.layout.desktopInsets.bottom), T = Math.max(0, n.width - t.layout.desktopInsets.left - t.layout.desktopInsets.right), E = Math.max(1, Math.floor((w - 40) / C)), D = Math.max(1, Math.floor((T - 40) / S)), O = [...Object.values(r).filter((e) => !e.disabled)];
	u === "name" ? O.sort((e, t) => {
		let n = f(e.id, e.name), r = f(t.id, t.name);
		return n.localeCompare(r);
	}) : u === "kind" && O.sort((e, t) => {
		let n = e.category ?? "Other", r = t.category ?? "Other", i = n.localeCompare(r);
		return i === 0 ? f(e.id, e.name).localeCompare(f(t.id, t.name)) : i;
	});
	let k = {};
	for (let e of i) k[e.appId] = {
		x: e.x,
		y: e.y
	};
	let A = G(h);
	A.current = h;
	let j = G(O);
	j.current = O;
	let M = {}, N = -1;
	if (p && h.has(p.appId)) {
		let e = y[p.appId] || {
			x: p.x,
			y: p.y
		}, t = p.x - e.x, n = p.y - e.y, { coords: r } = Xo({
			appList: O.filter((e) => !h.has(e.id)),
			posMap: k,
			activeDrag: null,
			maxRows: E,
			maxCols: D,
			cellW: S,
			cellH: C,
			desktopSortBy: u
		});
		for (let e of O) if (h.has(e.id)) {
			let r = y[e.id] || {
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
		let i = Math.max(0, Math.min(D - 1, Math.round((p.x - 20) / S))), a = Math.max(0, Math.min(E - 1, Math.round((p.y - 20) / C)));
		N = i * E + a;
	} else {
		let e = Xo({
			appList: O,
			posMap: k,
			activeDrag: p,
			maxRows: E,
			maxCols: D,
			cellW: S,
			cellH: C,
			desktopSortBy: u
		});
		M = e.coords, N = e.hoveredIndex;
	}
	W(() => {
		let e = (e) => {
			if (e.button !== 0) return;
			let t = e.target;
			if (t.closest("[id^=\"window-\"]") || t.closest("[data-menubar=\"true\"]") || t.closest("[data-dock=\"true\"]") || t.closest("[data-widget=\"true\"]") || t.closest("[data-app-icon=\"true\"]") || t.closest("[data-menu-portal=\"true\"]") || t.closest("[data-radix-popper-content-wrapper]") || !d.current) return;
			let n = d.current.getBoundingClientRect(), r = e.clientX - n.left, i = e.clientY - n.top, a = e.shiftKey || e.metaKey || e.ctrlKey;
			a || g(/* @__PURE__ */ new Set()), v({
				startX: r,
				startY: i,
				currentX: r,
				currentY: i
			}), x.current = !0;
			let s = (e) => {
				if (!x.current || !d.current) return;
				let t = d.current.getBoundingClientRect(), n = e.clientX - t.left, s = e.clientY - t.top;
				v((e) => e ? {
					...e,
					currentX: n,
					currentY: s
				} : null);
				let c = Math.min(r, n), u = Math.min(i, s), f = Math.max(r, n), p = Math.max(i, s), m = l === "bottom" ? o + 24 : o + 104, h = l === "bottom" ? o + 40 : o + 24, _ = new Set(a ? A.current : []);
				for (let e of j.current) {
					let t = M[e.id];
					if (!t) continue;
					let n = t.x, r = t.y, i = t.x + m, o = t.y + h;
					c < i && f > n && u < o && p > r ? _.add(e.id) : a || _.delete(e.id);
				}
				g(_);
			}, c = () => {
				x.current = !1, v(null), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", c);
			};
			window.addEventListener("pointermove", s), window.addEventListener("pointerup", c);
		};
		return window.addEventListener("pointerdown", e), () => {
			window.removeEventListener("pointerdown", e);
		};
	}, [
		l,
		o,
		M
	]);
	let P = (e, t) => {
		t.shiftKey || t.metaKey || t.ctrlKey ? g((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		}) : h.has(e) || g(/* @__PURE__ */ new Set([e]));
	}, ee = (e) => {
		g(/* @__PURE__ */ new Set([e]));
	}, te = (e) => {
		let t = h;
		h.has(e) || (t = /* @__PURE__ */ new Set([e]), g(t));
		let n = {};
		for (let e of t) n[e] = M[e] || {
			x: 0,
			y: 0
		};
		b(n), m({
			appId: e,
			x: M[e]?.x || 0,
			y: M[e]?.y || 0
		});
	}, ne = (e, t, n) => {
		let r = y[e];
		if (!r) {
			m(null);
			return;
		}
		let i = h.has(e) ? h : /* @__PURE__ */ new Set([e]), o = {};
		for (let e of O) {
			let a = k[e.id] || {
				x: 20,
				y: 20
			};
			if (i.has(e.id)) {
				let i = Math.round((a.x - 20) / 108), s = Math.round((a.y - 20) / 124), c = Math.round((r.x - 20) / S), l = Math.round((r.y - 20) / C), u = Math.round((t - 20) / S), d = Math.round((n - 20) / C), f = u - c, p = d - l, m = Math.max(0, i + f), h = Math.max(0, s + p);
				o[e.id] = {
					x: m * S + 20,
					y: h * C + 20
				};
			} else o[e.id] = { ...a };
		}
		let { coords: s } = Xo({
			appList: O,
			posMap: o,
			activeDrag: null,
			maxRows: E,
			maxCols: D,
			cellW: S,
			cellH: C,
			desktopSortBy: u
		}), c = O.map((e) => {
			let t = Math.round((s[e.id].x - 20) / S), n = Math.round((s[e.id].y - 20) / C);
			return {
				appId: e.id,
				x: t * 108 + 20,
				y: n * 124 + 20
			};
		});
		a(c), m(null), b({});
	};
	return /* @__PURE__ */ Y("div", {
		ref: d,
		className: "absolute inset-0 pointer-events-none select-none z-10",
		style: {
			top: "var(--desktop-inset-top)",
			right: "var(--desktop-inset-right)",
			bottom: "var(--desktop-inset-bottom)",
			left: "var(--desktop-inset-left)"
		},
		children: [
			_ && /* @__PURE__ */ J("div", {
				className: "absolute rounded-sm pointer-events-none",
				style: {
					left: Math.min(_.startX, _.currentX),
					top: Math.min(_.startY, _.currentY),
					width: Math.abs(_.startX - _.currentX),
					height: Math.abs(_.startY - _.currentY),
					border: "0.75px solid rgba(255, 255, 255, 0.28)",
					backgroundColor: "rgba(255, 255, 255, 0.08)",
					boxShadow: "0 0 4px rgba(0, 0, 0, 0.05)"
				}
			}),
			p && (() => {
				let e = h.has(p.appId), t = e ? Array.from(h) : [p.appId], n = y[p.appId] || {
					x: p.x,
					y: p.y
				}, i = Math.round((n.x - 20) / S), a = Math.round((n.y - 20) / C), s = Math.floor(N / E), c = N % E, u = l === "bottom" ? o + 24 : o + 104, d = l === "bottom" ? o + 40 : o + 24;
				return /* @__PURE__ */ J(q, { children: t.map((t) => {
					let n = r[t];
					if (!n) return null;
					let l = y[t] || {
						x: 0,
						y: 0
					}, p = Math.round((l.x - 20) / S), m = Math.round((l.y - 20) / C), h = e ? p - i : 0, g = e ? m - a : 0, _ = s + h, v = c + g;
					if (_ < 0 || _ >= D || v < 0 || v >= E) return null;
					let b = _ * S + 20, x = v * C + 20, w = f(n.id, n.name);
					return /* @__PURE__ */ Y("div", {
						className: "absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5 z-30",
						style: {
							left: b + (S - u) / 2,
							top: x + (C - d) / 2,
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
				return /* @__PURE__ */ J(Yo, {
					appConfig: t,
					x: n,
					y: r,
					isSelected: h.has(t.id),
					onOpen: e,
					onSelect: P,
					onUpAfterClick: ee,
					onDragStart: () => te(t.id),
					onDrag: (e, n) => m({
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
var Qo = {
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
}, $o = [{
	id: "weather",
	appId: "__built-in__",
	name: "Weather",
	description: "Current weather conditions",
	sizes: ["small", "medium"],
	componentKey: "WeatherWidget"
}], es = [...fe.flatMap((e) => (e.widgets ?? []).map((t) => ({
	...t,
	appId: e.id
}))), ...$o];
[...new Set(es.map((e) => e.appId))];
function ts(e) {
	return es.find((t) => t.id === e);
}
//#endregion
//#region src/components/widgets/WidgetRenderer.tsx
var ns = {
	ClockWidget: Re(() => import("./ClockWidget-iNAyhtDA.js").then((e) => ({ default: e.ClockWidget }))),
	ClockDarkWidget: Re(() => import("./ClockWidget-iNAyhtDA.js").then((e) => ({ default: e.ClockDarkWidget }))),
	ClockWorldWidget: Re(() => import("./ClockWidget-iNAyhtDA.js").then((e) => ({ default: e.ClockWorldWidget }))),
	ClockDigitalWidget: Re(() => import("./ClockWidget-iNAyhtDA.js").then((e) => ({ default: e.ClockDigitalWidget }))),
	ClockFlipWidget: Re(() => import("./ClockWidget-iNAyhtDA.js").then((e) => ({ default: e.ClockFlipWidget }))),
	CalendarWidget: Re(() => import("./CalendarWidget-CKqRDDEO.js").then((e) => ({ default: e.CalendarWidget }))),
	CalendarTodayWidget: Re(() => import("./CalendarWidget-CKqRDDEO.js").then((e) => ({ default: e.CalendarTodayWidget }))),
	WeatherWidget: Re(() => import("./WeatherWidget-D4EQ_pKf.js").then((e) => ({ default: e.WeatherWidget }))),
	NotesWidget: Re(() => import("./NotesWidget-CWxNXfe-.js").then((e) => ({ default: e.NotesWidget })))
};
function rs({ componentKey: e, size: t }) {
	let n = ns[e];
	return n ? /* @__PURE__ */ J(Le, {
		fallback: /* @__PURE__ */ J("div", { className: "w-full h-full rounded-[20px] bg-white/5 animate-pulse" }),
		children: /* @__PURE__ */ J(n, { size: t })
	}) : /* @__PURE__ */ J("div", {
		className: "w-full h-full flex items-center justify-center text-white/30 text-xs rounded-[20px] bg-white/5",
		children: "Unknown widget"
	});
}
//#endregion
//#region src/components/widgets/WidgetCard.tsx
var is = 4;
function as({ instance: e }) {
	let t = I((e) => e.moveWidget), n = I((e) => e.removeWidget), r = I((e) => e.isEditingWidgets), i = ts(e.definitionId), { w: a, h: o } = Qo[e.size], [s, c] = K({
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
				!l.current.moved && Math.hypot(t, n) < is || (l.current.moved = !0, c({
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
			children: /* @__PURE__ */ J(P, {
				variant: "widget",
				className: "w-full h-full",
				children: /* @__PURE__ */ J(rs, {
					componentKey: i.componentKey,
					size: e.size
				})
			})
		})]
	}) : null;
}
//#endregion
//#region src/components/widgets/WidgetLayer.tsx
function os() {
	let e = I((e) => e.widgetInstances);
	return /* @__PURE__ */ J("div", {
		className: "absolute inset-0 pointer-events-none",
		style: { zIndex: I((e) => e.isEditingWidgets) ? 1001 : 2 },
		children: /* @__PURE__ */ J(s, { children: e.map((e) => /* @__PURE__ */ J(y.div, {
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
			children: /* @__PURE__ */ J(as, { instance: e })
		}, e.instanceId)) })
	});
}
//#endregion
//#region src/components/widgets/WidgetGalleryPanel.tsx
function ss({ ghost: e }) {
	let { w: t, h: n } = Qo[e.size];
	return He(/* @__PURE__ */ J("div", {
		className: "fixed pointer-events-none z-[99999] rounded-[20px] overflow-hidden opacity-80",
		style: {
			left: e.x - t / 2,
			top: e.y - n / 2,
			width: t,
			height: n
		},
		children: /* @__PURE__ */ J(P, {
			variant: "widget",
			className: "w-full h-full",
			children: /* @__PURE__ */ J(rs, {
				componentKey: e.def.componentKey,
				size: e.size
			})
		})
	}), document.body);
}
function cs({ def: e, size: t, onDragStart: n }) {
	let { w: r, h: i } = Qo[t], a = Math.min(140 / r, 110 / i);
	return /* @__PURE__ */ Y("div", {
		className: "flex flex-col items-center gap-1.5 cursor-grab active:cursor-grabbing select-none",
		onPointerDown: (r) => {
			r.preventDefault(), n(e, t, r.clientX, r.clientY);
		},
		children: [/* @__PURE__ */ J("div", {
			className: "rounded-[14px] overflow-hidden bg-white/5 border border-white/10",
			style: {
				width: Math.round(r * a),
				height: Math.round(i * a)
			},
			children: /* @__PURE__ */ J("div", {
				style: {
					width: r,
					height: i,
					transform: `scale(${a})`,
					transformOrigin: "top left",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ J(P, {
					variant: "widget",
					className: "w-full h-full",
					children: /* @__PURE__ */ J(rs, {
						componentKey: e.componentKey,
						size: t
					})
				})
			})
		}), /* @__PURE__ */ J("p", {
			className: "text-black/60 dark:text-white/70 text-[10px] text-center leading-tight max-w-[120px] truncate",
			children: t
		})]
	});
}
function ls({ appId: e, selected: t, onClick: n }) {
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
function us() {
	let e = I((e) => e.closeWidgetGallery), t = I((e) => e.addWidget), n = I((e) => e.apps), { t: r, getAppName: i, getWidgetName: a, getWidgetDescription: o } = V(), [c, l] = K(""), [u, d] = K("__all__"), [f, p] = K(null), m = G(null), h = G(null), g = [...new Set(es.map((e) => e.appId))], _ = es.filter((e) => {
		let t = u === "__all__" || e.appId === u, r = c.toLowerCase(), s = !r || a(e.id, e.name).toLowerCase().includes(r) || o(e.id, e.description ?? "").toLowerCase().includes(r) || i(e.appId, n[e.appId]?.name ?? "").toLowerCase().includes(r);
		return t && s;
	}), v = {};
	for (let e of _) v[e.appId] || (v[e.appId] = []), v[e.appId].push(e);
	let b = U((e, n, r, i) => {
		h.current = {
			def: e,
			size: n
		}, p({
			def: e,
			size: n,
			x: r,
			y: i
		});
		let a = (e) => {
			p((t) => t ? {
				...t,
				x: e.clientX,
				y: e.clientY
			} : null);
		}, o = (e) => {
			window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", o);
			let n = m.current;
			if ((!n || !n.contains(e.target)) && h.current) {
				let { def: n, size: r } = h.current, { w: i, h: a } = Qo[r];
				t(n, r, e.clientX - i / 2, e.clientY - a / 2);
			}
			h.current = null, p(null);
		};
		window.addEventListener("pointermove", a), window.addEventListener("pointerup", o);
	}, [t]);
	W(() => {
		let t = (t) => {
			t.key === "Escape" && e();
		};
		return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
	}, [e]);
	let x = f !== null;
	return /* @__PURE__ */ Y(q, { children: [
		/* @__PURE__ */ J(y.div, {
			className: "fixed inset-0 z-[1000] bg-black/20 dark:bg-black/50",
			initial: { opacity: 0 },
			animate: { opacity: +!x },
			exit: { opacity: 0 },
			onClick: e
		}),
		/* @__PURE__ */ J(y.div, {
			ref: m,
			className: "fixed bottom-0 left-1/2 z-[1002] flex flex-col w-full max-w-[960px]",
			style: { height: "58vh" },
			initial: {
				y: "100%",
				x: "-50%"
			},
			animate: {
				y: x ? "110%" : 0,
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
			children: /* @__PURE__ */ Y("div", {
				className: "flex-1 mx-3 mb-0 rounded-t-[20px] overflow-hidden bg-white/85 dark:bg-[rgba(28,28,30,0.88)] backdrop-blur-3xl border border-black/10 dark:border-white/[0.08] flex flex-col shadow-2xl",
				children: [/* @__PURE__ */ Y("div", {
					className: "flex flex-1 overflow-hidden",
					children: [/* @__PURE__ */ Y("div", {
						className: "w-52 shrink-0 border-r border-black/[0.06] dark:border-white/[0.06] flex flex-col p-3 gap-1 overflow-y-auto",
						children: [
							/* @__PURE__ */ Y("div", {
								className: "relative mb-2",
								children: [
									/* @__PURE__ */ J(Ne, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30 dark:text-white/30" }),
									/* @__PURE__ */ J("input", {
										type: "text",
										placeholder: r.searchWidgets,
										value: c,
										onChange: (e) => l(e.target.value),
										className: "w-full bg-black/5 dark:bg-white/8 text-black dark:text-white text-[13px] placeholder-black/30 dark:placeholder-white/30 rounded-[8px] pl-8 pr-3 py-1.5 outline-none border border-black/10 dark:border-white/10 focus:border-black/20 dark:focus:border-white/20 transition-colors"
									}),
									c && /* @__PURE__ */ J("button", {
										onClick: () => l(""),
										className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60",
										children: /* @__PURE__ */ J(B, { className: "w-3 h-3" })
									})
								]
							}),
							/* @__PURE__ */ Y("button", {
								onClick: () => d("__all__"),
								className: L("w-full flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] text-left transition-colors", u === "__all__" ? "bg-black/10 dark:bg-white/15 text-black dark:text-white" : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/8 hover:text-black dark:hover:text-white"),
								children: [/* @__PURE__ */ J("div", { className: "w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 shrink-0" }), /* @__PURE__ */ J("span", {
									className: "text-[13px]",
									children: r.allWidgets
								})]
							}),
							g.map((e) => /* @__PURE__ */ J(ls, {
								appId: e,
								selected: u === e,
								onClick: () => d(e)
							}, e))
						]
					}), /* @__PURE__ */ J("div", {
						className: "flex-1 overflow-y-auto p-4",
						children: Object.keys(v).length === 0 ? /* @__PURE__ */ J("div", {
							className: "flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm",
							children: r.noWidgetsFound
						}) : Object.entries(v).map(([e, t]) => {
							let o = e === "__built-in__" ? r.builtIn : i(e, n[e]?.name ?? e);
							return /* @__PURE__ */ Y("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ Y("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ J("p", {
										className: "text-black dark:text-white text-[13px] font-semibold",
										children: o
									}), e !== "__built-in__" && /* @__PURE__ */ Y("p", {
										className: "text-black/30 dark:text-white/30 text-[11px]",
										children: [
											r.fromApp,
											" ",
											o
										]
									})]
								}), t.map((e) => /* @__PURE__ */ Y("div", {
									className: "mb-4",
									children: [/* @__PURE__ */ J("p", {
										className: "text-black/50 dark:text-white/50 text-[11px] mb-2 font-medium",
										children: a(e.id, e.name)
									}), /* @__PURE__ */ J("div", {
										className: "flex flex-wrap gap-4",
										children: e.sizes.map((t) => /* @__PURE__ */ J(cs, {
											def: e,
											size: t,
											onDragStart: b
										}, t))
									})]
								}, e.id))]
							}, e);
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
		}),
		/* @__PURE__ */ J(s, { children: f && /* @__PURE__ */ J(ss, { ghost: f }) })
	] });
}
//#endregion
//#region src/components/macOS/Spotlight.tsx
function ds({ open: e, onClose: t }) {
	let [n, r] = K(""), [i, a] = K(0), o = G(null), c = I((e) => e.apps), l = I((e) => e.launchApp), { t: u, getAppName: d } = V();
	W(() => {
		e && (ze(() => {
			r(""), a(0);
		}), setTimeout(() => o.current?.focus(), 50));
	}, [e]);
	let f = U((e) => {
		l(e), t();
	}, [l, t]), p = Object.values(c).filter((e) => !e.disabled), m = n.trim() ? p.filter((e) => d(e.id, e.name).toLowerCase().includes(n.toLowerCase())).map((e) => ({
		type: "app",
		label: d(e.id, e.name),
		subtitle: e.category ?? "Application",
		app: e
	})) : p.slice(0, 8).map((e) => ({
		type: "app",
		label: d(e.id, e.name),
		subtitle: "Application",
		app: e
	}));
	return /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(y.div, {
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
		children: /* @__PURE__ */ Y(P, {
			variant: "window",
			className: "overflow-hidden shadow-2xl",
			children: [
				/* @__PURE__ */ Y("div", {
					className: "flex items-center gap-3 px-4 py-3 border-b border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ J(Ne, { className: "w-5 h-5 text-black/40 dark:text-white/40 shrink-0" }),
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
								e.key === "ArrowDown" && (e.preventDefault(), a((e) => Math.min(e + 1, m.length - 1))), e.key === "ArrowUp" && (e.preventDefault(), a((e) => Math.max(e - 1, 0))), e.key === "Enter" && m[i]?.app && f(m[i].app);
							},
							placeholder: u.search,
							className: "flex-1 bg-transparent text-[17px] font-light outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
						}),
						n && /* @__PURE__ */ J("button", {
							onClick: () => r(""),
							className: "p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10",
							children: /* @__PURE__ */ J(B, { className: "w-3.5 h-3.5" })
						})
					]
				}),
				m.length > 0 && /* @__PURE__ */ Y("div", {
					className: "max-h-80 overflow-y-auto py-1",
					children: [m.length > 0 && /* @__PURE__ */ J("p", {
						className: "text-[10px] font-semibold uppercase tracking-widest text-black/40 dark:text-white/30 px-4 pt-2 pb-1",
						children: n ? u.search : u.applications
					}), m.map((e, t) => /* @__PURE__ */ Y("button", {
						onClick: () => e.app && f(e.app),
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
				n && m.length === 0 && /* @__PURE__ */ Y("div", {
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
function fs({ open: e, onClose: t }) {
	let n = I((e) => e.apps), r = I((e) => e.runningAppIds), i = I((e) => e.launchApp), a = I((e) => e.dockAppIds), { getAppName: o } = V(), c = Array.from(/* @__PURE__ */ new Set([...r, ...a])).map((e) => n[e]).filter(Boolean), [l, u] = K(0);
	return W(() => {
		if (!e) return;
		ze(() => {
			u(0);
		});
		let n = (e) => {
			if (!e.metaKey && !e.ctrlKey) {
				t();
				return;
			}
			e.key === "Tab" && (e.preventDefault(), u((t) => e.shiftKey ? (t - 1 + c.length) % c.length : (t + 1) % c.length)), e.key === "Escape" && t();
		}, r = (e) => {
			if (e.key === "Meta" || e.key === "Control") {
				let e = c[l];
				e && i(e), t();
			}
		};
		return window.addEventListener("keydown", n), window.addEventListener("keyup", r), () => {
			window.removeEventListener("keydown", n), window.removeEventListener("keyup", r);
		};
	}, [
		e,
		c.length,
		l
	]), /* @__PURE__ */ J(s, { children: e && /* @__PURE__ */ J(y.div, {
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
		children: /* @__PURE__ */ Y(P, {
			variant: "panel",
			className: "px-4 py-3",
			children: [/* @__PURE__ */ J("div", {
				className: "flex items-end gap-3",
				children: c.map((e, n) => /* @__PURE__ */ Y("button", {
					onClick: () => {
						i(e), t();
					},
					onMouseEnter: () => u(n),
					className: "flex flex-col items-center gap-2 p-2 rounded-xl transition-colors",
					children: [/* @__PURE__ */ J(y.div, {
						animate: { scale: n === l ? 1.15 : 1 },
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
						className: L("text-[11px] font-medium truncate max-w-[60px] text-center", n === l ? "text-white" : "text-white/70"),
						children: o(e.id, e.name)
					})]
				}, e.id))
			}), c[l] && /* @__PURE__ */ J("p", {
				className: "text-center text-white/80 text-xs mt-1",
				children: o(c[l].id, c[l].name)
			})]
		})
	}) });
}
//#endregion
//#region src/components/notifications/NotificationBanner.tsx
function ps({ notification: e, onDismiss: t }) {
	let n = I((e) => e.launchApp), r = I((e) => e.apps), { osTheme: i } = c(), a = i === "windows";
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
function ms() {
	let e = I((e) => e.notifications), t = I((e) => e.dismissNotification), { osTheme: n } = c(), r = e.filter((e) => !e.read).slice(0, 3), i = U((e) => {
		t(e);
	}, [t]);
	return /* @__PURE__ */ J("div", {
		className: L("fixed z-[9999] flex flex-col gap-2 pointer-events-none", n === "windows" ? "bottom-14 right-4" : n === "iphone" || n === "android" ? "top-12 inset-x-4" : "top-8 right-4"),
		children: /* @__PURE__ */ J(s, {
			mode: "popLayout",
			children: r.map((e) => /* @__PURE__ */ J("div", {
				className: "pointer-events-auto",
				children: /* @__PURE__ */ J(ps, {
					notification: e,
					onDismiss: () => i(e.id)
				})
			}, e.id))
		})
	});
}
//#endregion
//#region src/hooks/useKeyboardShortcuts.ts
function hs({ onSpotlight: e, onAppSwitcher: t } = {}) {
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
var gs = {
	"5m": 5 * 6e4,
	"10m": 10 * 6e4,
	"30m": 30 * 6e4,
	"1h": 60 * 6e4,
	"2h": 120 * 6e4,
	"5h": 300 * 6e4,
	"1d": 1440 * 6e4
};
function _s() {
	let e = I((e) => e.wallpaperCycle), t = I((e) => e.customWallpapers), n = I((e) => e.wallpaperId), r = I((e) => e.setWallpaper), i = ve(), a = G(0);
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
		}, gs[e.interval]);
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
function vs(e) {
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
function ys({ apps: e = fe } = {}) {
	let t = I((e) => e.osTheme), n = I((e) => e.colorScheme), r = I((e) => e.resolvedColorScheme), i = I((e) => e.resolveColorScheme), a = I((e) => e.registerApps), o = I((e) => e.launchApp), c = I((e) => e.glassEnabled), l = I((e) => e.isEditingWidgets), d = I((e) => e.accentColor), f = I((e) => e.highlightColor), [p, m] = K(!1), [h, g] = K(!1), [_, v] = K(!1);
	W(() => {
		let e = () => {
			let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = window.innerWidth <= 768;
			v(e || t);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), hs({
		onSpotlight: () => m((e) => !e),
		onAppSwitcher: () => g((e) => !e)
	}), _s(), W(() => {
		a(e);
	}, [a, e]), W(() => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => {
			i(e.matches);
		};
		return i(e.matches), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, [n, i]), W(() => {
		let e = document.documentElement;
		e.setAttribute("data-os-theme", t), e.setAttribute("data-glass", c ? "true" : "false"), e.classList.toggle("dark", r === "dark");
		let n = {
			multicolor: "#007afe",
			blue: "#007afe",
			purple: "#9d3fc6",
			pink: "#f353a7",
			red: "#e03b30",
			orange: "#f38218",
			yellow: "#f5c400",
			green: "#63be44",
			graphite: "#8e8e93"
		}[d] || "#007afe";
		e.style.setProperty("--accent-color", n), e.style.setProperty("--win-accent", n);
		let i = {
			blue: "rgba(0, 122, 254, 0.25)",
			purple: "rgba(157, 63, 198, 0.25)",
			pink: "rgba(243, 83, 167, 0.25)",
			red: "rgba(224, 59, 48, 0.25)",
			orange: "rgba(243, 130, 24, 0.25)",
			yellow: "rgba(245, 196, 0, 0.3)",
			green: "rgba(99, 190, 68, 0.25)",
			graphite: "rgba(142, 142, 147, 0.3)"
		}, a = "";
		a = f === "automatic" ? i[d === "multicolor" ? "blue" : d] || "rgba(0, 122, 254, 0.25)" : i[f] || "rgba(0, 122, 254, 0.25)", e.style.setProperty("--highlight-color", a);
	}, [
		t,
		r,
		c,
		d,
		f
	]);
	let b = U((e) => {
		o(e);
	}, [o]), x = t === "macos" || t === "ipad", S = t !== "ipad" && t !== "iphone" && t !== "android", C = t === "iphone" || t === "android", w = u[t];
	return /* @__PURE__ */ Y("div", {
		className: L("w-full h-full overflow-hidden relative select-none", r === "dark" && "dark"),
		"data-os-theme": t,
		"data-glass": c ? "true" : "false",
		style: vs(w),
		onContextMenu: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ J(Je, {}),
			/* @__PURE__ */ J(ms, {}),
			x && /* @__PURE__ */ Y(q, { children: [/* @__PURE__ */ J(ds, {
				open: p,
				onClose: () => m(!1)
			}), /* @__PURE__ */ J(fs, {
				open: h,
				onClose: () => g(!1)
			})] }),
			C ? /* @__PURE__ */ J("div", {
				className: L("absolute inset-0 flex items-center justify-center", _ ? "bg-transparent" : "bg-black/60"),
				children: /* @__PURE__ */ Y("div", {
					className: L("relative overflow-hidden", !_ && "shadow-2xl ring-1 ring-white/10"),
					style: {
						height: _ ? "100%" : "min(calc(100dvh - 32px), 926px)",
						width: _ ? "100%" : "min(calc((min(calc(100dvh - 32px), 926px)) * 0.4612676056338028), 100vw)",
						borderRadius: _ ? "0px" : "min(44px, calc(min(calc(100dvh - 32px), 926px) * 0.047))"
					},
					children: [/* @__PURE__ */ J(Wo, { children: null }), /* @__PURE__ */ J(s, {
						mode: "wait",
						children: /* @__PURE__ */ Y(y.div, {
							className: "absolute inset-0",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: { duration: .2 },
							children: [t === "iphone" && /* @__PURE__ */ J(Dr, { onOpenApp: b }), t === "android" && /* @__PURE__ */ J(Br, { onOpenApp: b })]
						}, t)
					})]
				})
			}) : /* @__PURE__ */ Y(q, { children: [
				/* @__PURE__ */ J("div", {
					className: "absolute inset-0",
					children: /* @__PURE__ */ Y(Wo, { children: [
						/* @__PURE__ */ J(os, {}),
						S && /* @__PURE__ */ J(Zo, { onOpenApp: b }, "icon-grid"),
						/* @__PURE__ */ J(Wt, {}, "window-manager")
					] })
				}),
				/* @__PURE__ */ J(s, { children: l && /* @__PURE__ */ J(us, {}) }),
				/* @__PURE__ */ J(s, {
					mode: "wait",
					children: /* @__PURE__ */ Y(y.div, {
						className: "absolute inset-0 pointer-events-none",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .2 },
						children: [
							t === "macos" && /* @__PURE__ */ J(Qn, {
								onOpenApp: b,
								onSpotlight: () => m(!0),
								onAppSwitcher: () => g(!0)
							}),
							t === "ipad" && /* @__PURE__ */ J(mr, { onOpenApp: b }),
							t === "windows" && /* @__PURE__ */ J(Nr, { onOpenApp: b })
						]
					}, t)
				})
			] })
		]
	});
}
//#endregion
//#region src/hooks/useMenuAction.ts
function bs(e, t, n) {
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
function xs(e, t) {
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
function Ss() {
	let e = Ce();
	return W(() => {
		e && e.checkUpdate().then(Te.getState().setStatus).catch(() => {});
	}, [e]), null;
}
function Cs({ assetBaseUrl: e = "", apps: t, onImportWallpaper: n, wallpapers: r, updateActions: i }) {
	return /* @__PURE__ */ J(we, {
		value: e,
		children: /* @__PURE__ */ J(Se, {
			value: Oe(r),
			children: /* @__PURE__ */ J(ge, {
				value: n ?? null,
				children: /* @__PURE__ */ Y(De, {
					value: i ?? null,
					children: [/* @__PURE__ */ J(Ss, {}), /* @__PURE__ */ J(ys, { apps: t })]
				})
			})
		})
	});
}
//#endregion
export { fe as APPS_CONFIG, Cs as DeviceLayout, ye as hasAvailableUpdate, Ee as resolveAssetUrl, _e as useAssetBase, xs as useContextAction, bs as useMenuAction, I as useStore, Te as useUpdateStatusStore };
