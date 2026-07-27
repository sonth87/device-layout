import { D as e, S as t, T as n, a as r, b as i, c as a, f as o, g as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, w as y, x as b } from "./Combination-Cn4u3sR4.js";
import { t as x } from "./store-BtS6MnQC.js";
import { t as S } from "./utils-Cj4W_oyi.js";
import { t as C } from "./createLucideIcon-CUtIr1pR.js";
import { t as ee } from "./chevron-right-BMiw_Ycq.js";
import { t as te } from "./monitor-Dpx-O8r1.js";
import { t as ne } from "./refresh-cw-C1z2U_RW.js";
import { t as re } from "./search-CmPVuD-5.js";
import { t as ie } from "./sun-CZd8f6Lr.js";
import { t as ae } from "./volume-2-Dm4jIpxc.js";
import { t as oe } from "./x-CZTQnpen.js";
import { t as se } from "./useTranslation-CVx_nMue.js";
import { t as ce } from "./AppViewport-BDJLAndL.js";
import * as w from "react";
import { Children as le, Component as ue, Fragment as de, Suspense as fe, createContext as pe, createElement as me, forwardRef as he, isValidElement as ge, lazy as T, useCallback as E, useContext as D, useEffect as O, useId as _e, useInsertionEffect as ve, useLayoutEffect as ye, useMemo as be, useRef as k, useState as A } from "react";
import { Fragment as xe, jsx as j, jsxs as M } from "react/jsx-runtime";
import { createPortal as Se } from "react-dom";
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var Ce = pe({});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function we(e) {
	let t = k(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var Te = typeof window < "u" ? ye : O, Ee = /* @__PURE__ */ pe(null);
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/array.mjs
function De(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Oe(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/clamp.mjs
var N = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function ke(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/errors.mjs
var Ae = () => {}, P = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (Ae = (e, t, n) => {
	!e && typeof console < "u" && console.warn(ke(t, n));
}, P = (e, t, n) => {
	if (!e) throw Error(ke(t, n));
});
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/global-config.mjs
var je = {}, Me = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Ne = (e) => typeof e == "object" && !!e, Pe = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Fe(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/noop.mjs
var F = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Ie = (...e) => e.reduce((e, t) => (n) => t(e(n))), Le = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, Re = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return De(this.subscriptions, e), () => Oe(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, I = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, L = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, ze = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, Be = /* @__PURE__ */ new Set();
function Ve(e, t, n) {
	e || Be.has(t) || (console.warn(ke(t, n)), Be.add(t));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/wrap.mjs
var He = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, Ue = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, We = 1e-7, Ge = 12;
function Ke(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Ue(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > We && ++s < Ge);
	return o;
}
/*#__NO_SIDE_EFFECTS__*/
function qe(e, t, n, r) {
	if (e === t && n === r) return F;
	let i = (t) => Ke(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Ue(i(e), t, r);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Je = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ye = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), Xe = /*@__PURE__*/ qe(.33, 1.53, .69, .99), Ze = /*@__PURE__*/ Ye(Xe), Qe = /*@__PURE__*/ Je(Ze), $e = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Ze(e) : .5 * (2 - 2 ** (-10 * (e - 1))), et = (e) => 1 - Math.sin(Math.acos(e)), tt = /* @__PURE__ */ Ye(et), nt = /* @__PURE__ */ Je(et), rt = /*@__PURE__*/ qe(.42, 0, 1, 1), it = /*@__PURE__*/ qe(0, 0, .58, 1), at = /*@__PURE__*/ qe(.42, 0, .58, 1), ot = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
/*#__NO_SIDE_EFFECTS__*/
function st(e, t) {
	return /* @__PURE__ */ ot(e) ? e[He(0, e.length, t)] : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var ct = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", lt = {
	linear: F,
	easeIn: rt,
	easeInOut: at,
	easeOut: it,
	circIn: et,
	circInOut: nt,
	circOut: tt,
	backIn: Ze,
	backInOut: Qe,
	backOut: Xe,
	anticipate: $e
}, ut = (e) => typeof e == "string", dt = (e) => {
	if (/* @__PURE__ */ ct(e)) {
		P(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return /* @__PURE__ */ qe(t, n, r, i);
	} else if (ut(e)) return P(lt[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), lt[e];
	return e;
}, ft = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function pt(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a = /* @__PURE__ */ new WeakSet(), o = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function s(t) {
		a.has(t) && (c.schedule(t), e()), t(o);
	}
	let c = {
		schedule: (e, i = !1, o = !1) => {
			let s = o && r ? t : n;
			return i && a.add(e), s.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), a.delete(e);
		},
		process: (e) => {
			if (o = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let a = t;
			t = n, n = a, t.forEach(s), t.clear(), r = !1, i && (i = !1, c.process(e));
		}
	};
	return c;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var mt = 40;
function ht(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = ft.reduce((e, t) => (e[t] = pt(a), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = je.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, mt), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: ft.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < ft.length; t++) o[ft[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: R, cancel: gt, state: z, steps: _t } = /* @__PURE__ */ ht(typeof requestAnimationFrame < "u" ? requestAnimationFrame : F, !0), vt;
function yt() {
	vt = void 0;
}
var B = {
	now: () => (vt === void 0 && B.set(z.isProcessing || je.useManualTiming ? z.timestamp : performance.now()), vt),
	set: (e) => {
		vt = e, queueMicrotask(yt);
	}
}, bt = (e) => (t) => typeof t == "string" && t.startsWith(e), xt = /*@__PURE__*/ bt("--"), St = /*@__PURE__*/ bt("var(--"), Ct = (e) => St(e) ? wt.test(e.split("/*")[0].trim()) : !1, wt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Tt(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var Et = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Dt = {
	...Et,
	transform: (e) => N(0, 1, e)
}, Ot = {
	...Et,
	default: 1
}, kt = (e) => Math.round(e * 1e5) / 1e5, At = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function jt(e) {
	return e == null;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Mt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Nt = (e, t) => (n) => !!(typeof n == "string" && Mt.test(n) && n.startsWith(e) || t && !jt(n) && Object.prototype.hasOwnProperty.call(n, t)), Pt = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(At);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ft = (e) => N(0, 255, e), It = {
	...Et,
	transform: (e) => Math.round(Ft(e))
}, Lt = {
	test: /*@__PURE__*/ Nt("rgb", "red"),
	parse: /*@__PURE__*/ Pt("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + It.transform(e) + ", " + It.transform(t) + ", " + It.transform(n) + ", " + kt(Dt.transform(r)) + ")"
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Rt(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var zt = {
	test: /*@__PURE__*/ Nt("#"),
	parse: Rt,
	transform: Lt.transform
}, Bt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Vt = /*@__PURE__*/ Bt("deg"), V = /*@__PURE__*/ Bt("%"), H = /*@__PURE__*/ Bt("px"), Ht = /*@__PURE__*/ Bt("vh"), Ut = /*@__PURE__*/ Bt("vw"), Wt = {
	...V,
	parse: (e) => V.parse(e) / 100,
	transform: (e) => V.transform(e * 100)
}, Gt = {
	test: /*@__PURE__*/ Nt("hsl", "hue"),
	parse: /*@__PURE__*/ Pt("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + V.transform(kt(t)) + ", " + V.transform(kt(n)) + ", " + kt(Dt.transform(r)) + ")"
}, U = {
	test: (e) => Lt.test(e) || zt.test(e) || Gt.test(e),
	parse: (e) => Lt.test(e) ? Lt.parse(e) : Gt.test(e) ? Gt.parse(e) : zt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Lt.transform(e) : Gt.transform(e),
	getAnimatableNone: (e) => {
		let t = U.parse(e);
		return t.alpha = 0, U.transform(t);
	}
}, Kt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function qt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(At)?.length || 0) + (e.match(Kt)?.length || 0) > 0;
}
var Jt = "number", Yt = "color", Xt = "var", Zt = "var(", Qt = "${}", $t = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function en(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace($t, (e) => (U.test(e) ? (r.color.push(a), i.push(Yt), n.push(U.parse(e))) : e.startsWith(Zt) ? (r.var.push(a), i.push(Xt), n.push(e)) : (r.number.push(a), i.push(Jt), n.push(parseFloat(e))), ++a, Qt)).split(Qt),
		indexes: r,
		types: i
	};
}
function tn(e) {
	return en(e).values;
}
function nn({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Jt ? i += kt(r[a]) : e === Yt ? i += U.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function rn(e) {
	return nn(en(e));
}
var an = (e) => typeof e == "number" ? 0 : U.test(e) ? U.getAnimatableNone(e) : e, on = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : an(e);
function sn(e) {
	let t = en(e);
	return nn(t)(t.values.map((e, n) => on(e, t.split[n])));
}
var W = {
	test: qt,
	parse: tn,
	createTransformer: rn,
	getAnimatableNone: sn
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function cn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ln({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = cn(s, r, e + 1 / 3), a = cn(s, r, e), o = cn(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function un(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var G = (e, t, n) => e + (t - e) * n, dn = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, fn = [
	zt,
	Lt,
	Gt
], pn = (e) => fn.find((t) => t.test(e));
function mn(e) {
	let t = pn(e);
	if (Ae(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === Gt && (n = ln(n)), n;
}
var hn = (e, t) => {
	let n = mn(e), r = mn(t);
	if (!n || !r) return un(e, t);
	let i = { ...n };
	return (e) => (i.red = dn(n.red, r.red, e), i.green = dn(n.green, r.green, e), i.blue = dn(n.blue, r.blue, e), i.alpha = G(n.alpha, r.alpha, e), Lt.transform(i));
}, gn = /* @__PURE__ */ new Set(["none", "hidden"]);
function _n(e, t) {
	return gn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function vn(e, t) {
	return (n) => G(e, t, n);
}
function yn(e) {
	return typeof e == "number" ? vn : typeof e == "string" ? Ct(e) ? un : U.test(e) ? hn : Cn : Array.isArray(e) ? bn : typeof e == "object" ? U.test(e) ? hn : xn : un;
}
function bn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => yn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function xn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = yn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Sn(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var Cn = (e, t) => {
	let n = W.createTransformer(t), r = en(e), i = en(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? gn.has(e) && !i.values.length || gn.has(t) && !r.values.length ? _n(e, t) : Ie(bn(Sn(r, i), i.values), n) : (Ae(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), un(e, t));
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function wn(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? G(e, t, n) : yn(e)(e, t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Tn = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => R.update(t, e),
		stop: () => gt(t),
		now: () => z.isProcessing ? z.timestamp : B.now()
	};
}, En = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Dn = 2e4;
function On(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function kn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(On(r), Dn);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ L(i)
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var K = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function An(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var jn = 12;
function Mn(e, t, n) {
	let r = n;
	for (let n = 1; n < jn; n++) r -= e(r) / t(r);
	return r;
}
var Nn = .001;
function Pn({ duration: e = K.duration, bounce: t = K.bounce, velocity: n = K.velocity, mass: r = K.mass }) {
	let i, a;
	Ae(e <= /* @__PURE__ */ I(K.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = N(K.minDamping, K.maxDamping, o), e = N(K.minDuration, K.maxDuration, /* @__PURE__ */ L(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = An(t, o), c = Math.exp(-i);
		return Nn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = An(t ** 2, o);
		return (-i(t) + Nn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Mn(i, a, s);
	if (e = /* @__PURE__ */ I(e), isNaN(c)) return {
		stiffness: K.stiffness,
		damping: K.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Fn = ["duration", "bounce"], In = [
	"stiffness",
	"damping",
	"mass"
];
function Ln(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Rn(e) {
	let t = {
		velocity: K.velocity,
		stiffness: K.stiffness,
		damping: K.damping,
		mass: K.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Ln(e, In) && Ln(e, Fn)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * N(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: K.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Pn({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: K.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function zn(e = K.visualDuration, t = K.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Rn({
		...n,
		velocity: -/* @__PURE__ */ L(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ L(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? K.restSpeed.granular : K.restSpeed.default, i ||= v ? K.restDelta.granular : K.restDelta.default;
	let y, b, x, S, C, ee;
	if (h < 1) x = An(_, h), S = (m + h * _ * g) / x, y = (e) => {
		let t = Math.exp(-h * _ * e);
		return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
	}, C = h * _ * S + g * x, ee = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + ee * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let te = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ I(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ I(t * (C * n + ee * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ I(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(On(te), Dn), t = En((t) => te.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return te;
}
zn.applyToOptions = (e) => {
	let t = kn(e, 100, zn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ I(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Bn = 5;
function Vn(e, t, n) {
	let r = Math.max(t - Bn, 0);
	return /* @__PURE__ */ ze(n - e(r), t - r);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Hn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = zn({
			keyframes: [f.value, m(f.value)],
			velocity: Vn(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Un(e, t, n) {
	let r = [], i = n || je.mix || wn, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Ie(Array.isArray(t) ? t[n] || F : t, a)), r.push(a);
	}
	return r;
}
function Wn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (P(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Un(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Le(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(N(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Gn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Le(0, t, r);
		e.push(G(n, 1, i));
	}
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Kn(e) {
	let t = [0];
	return Gn(t, e.length - 1), t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function qn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Jn(e, t) {
	return e.map(() => t || at).splice(0, e.length - 1);
}
function Yn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ ot(r) ? r.map(dt) : dt(r), a = {
		done: !1,
		value: t[0]
	}, o = Wn(qn(n && n.length === t.length ? n : Kn(t), e), t, { ease: Array.isArray(i) ? i : Jn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Xn = (e) => e !== null;
function Zn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Xn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Qn = {
	decay: Hn,
	inertia: Hn,
	tween: Yn,
	keyframes: Yn,
	spring: zn
};
function $n(e) {
	typeof e.type == "string" && (e.type = Qn[e.type]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var er = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, tr = (e) => e / 100, nr = class extends er {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== B.now() && this.tick(B.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		$n(e);
		let { type: t = Yn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Yn;
		process.env.NODE_ENV !== "production" && s !== Yn && P(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Yn && typeof o[0] != "number" && (this.mixKeyframes = Ie(tr, wn(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = On(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = N(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Hn && (b.value = Zn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ L(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ L(e);
	}
	get time() {
		return /* @__PURE__ */ L(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ I(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Vn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(B.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ L(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Tn, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(B.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function rr(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var ir = (e) => e * 180 / Math.PI, ar = (e) => sr(ir(Math.atan2(e[1], e[0]))), or = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: ar,
	rotateZ: ar,
	skewX: (e) => ir(Math.atan(e[1])),
	skewY: (e) => ir(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, sr = (e) => (e %= 360, e < 0 && (e += 360), e), cr = ar, lr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ur = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), dr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: lr,
	scaleY: ur,
	scale: (e) => (lr(e) + ur(e)) / 2,
	rotateX: (e) => sr(ir(Math.atan2(e[6], e[5]))),
	rotateY: (e) => sr(ir(Math.atan2(-e[2], e[0]))),
	rotateZ: cr,
	rotate: cr,
	skewX: (e) => ir(Math.atan(e[4])),
	skewY: (e) => ir(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function fr(e) {
	return +!!e.includes("scale");
}
function pr(e, t) {
	if (!e || e === "none") return fr(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = dr, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = or, i = t;
	}
	if (!i) return fr(t);
	let a = r[t], o = i[1].split(",").map(hr);
	return typeof a == "function" ? a(o) : o[a];
}
var mr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return pr(n, t);
};
function hr(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var gr = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], _r = /* @__PURE__ */ new Set([...gr, "pathRotation"]), vr = (e) => e === Et || e === H, yr = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), br = gr.filter((e) => !yr.has(e));
function xr(e) {
	let t = [];
	return br.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Sr = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => pr(t, "x"),
	y: (e, { transform: t }) => pr(t, "y")
};
Sr.translateX = Sr.x, Sr.translateY = Sr.y;
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Cr = /* @__PURE__ */ new Set(), wr = !1, Tr = !1, Er = !1;
function Dr() {
	if (Tr) {
		let e = Array.from(Cr).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = xr(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Tr = !1, wr = !1, Cr.forEach((e) => e.complete(Er)), Cr.clear();
}
function Or() {
	Cr.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Tr = !0);
	});
}
function kr() {
	Er = !0, Or(), Dr(), Er = !1;
}
var Ar = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Cr.add(this), wr || (wr = !0, R.read(Or), R.resolveKeyframes(Dr))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		rr(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Cr.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Cr.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, jr = (e) => e.startsWith("--");
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Mr(e, t, n) {
	jr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Nr = {};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Pr(e, t) {
	let n = /* @__PURE__ */ Fe(e);
	return () => Nr[t] ?? n();
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Fr = /* @__PURE__ */ Pr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Ir = /*@__PURE__*/ Pr(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Rr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Lr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Lr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Lr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Lr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function zr(e, t) {
	if (e) return typeof e == "function" ? Ir() ? En(e, t) : "ease-out" : /* @__PURE__ */ ct(e) ? Lr(e) : Array.isArray(e) ? e.map((e) => zr(e, t) || Rr.easeOut) : Rr[e];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Br(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = zr(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Vr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Hr({ type: e, ...t }) {
	return Vr(e) && Ir() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Ur = class extends er {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, P(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Hr(e);
		this.animation = Br(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Zn(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Mr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ L(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ L(e);
	}
	get time() {
		return /* @__PURE__ */ L(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ I(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Fr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), F) : r(this);
	}
}, Wr = {
	anticipate: $e,
	backInOut: Qe,
	circInOut: nt
};
function Gr(e) {
	return e in Wr;
}
function Kr(e) {
	typeof e.ease == "string" && Gr(e.ease) && (e.ease = Wr[e.ease]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var qr = 10, Jr = class extends Ur {
	constructor(e) {
		Kr(e), $n(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new nr({
			...a,
			autoplay: !1
		}), s = Math.max(qr, B.now() - this.startTime), c = N(0, qr, s - qr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Mr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Yr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (W.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Xr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Zr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Yr(i, t), s = Yr(a, t);
	return Ae(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Xr(e) || (n === "spring" || Vr(n)) && r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Qr(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var $r = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ei = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ti(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ei.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var ni = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), ri = /*@__PURE__*/ Fe(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ii(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return ri() && n && ($r.has(n) || ni.has(n) && ti(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var ai = 40, oi = class extends er {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = B.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || Ar;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = B.now();
		let u = !0;
		Zr(e, i, a, o) || (u = !1, (je.instantAnimations || !s) && l?.(Zn(e, n, t)), e[0] = e[e.length - 1], Qr(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > ai ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && ii(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Jr({
				...d,
				element: p
			});
		} catch {
			m = new nr(d);
		}
		else m = new nr(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(F), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), kr()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, si = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return ci(this.animations, "duration");
	}
	get iterationDuration() {
		return ci(this.animations, "iterationDuration");
	}
	runAll(e) {
		this.animations.forEach((t) => t[e]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
function ci(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var li = class extends si {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function ui(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/index.mjs
var di = 30, fi = (e) => !isNaN(parseFloat(e)), pi = { current: void 0 }, mi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = B.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = B.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = fi(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && Ve(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new Re());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), R.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return pi.current && pi.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = B.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > di) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, di);
		return /* @__PURE__ */ ze(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function hi(e, t) {
	return new mi(e, t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function gi(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function _i(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : gi(n, e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var vi = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, yi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), bi = {
	type: "keyframes",
	duration: .8
}, xi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Si = (e, { keyframes: t }) => t.length > 2 ? bi : _r.has(e) ? e.startsWith("scale") ? yi(t[1]) : vi : xi, Ci = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function wi(e) {
	for (let t in e) if (!Ci.has(t)) return !0;
	return !1;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Ti = (e, t, n, r = {}, i, a) => (o) => {
	let s = _i(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ I(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	wi(s) || Object.assign(u, Si(e, u)), u.duration &&= /* @__PURE__ */ I(u.duration), u.repeatDelay &&= /* @__PURE__ */ I(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Qr(u), u.delay === 0 && (d = !0)), (je.instantAnimations || je.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Qr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Zn(u.keyframes, s);
		if (e !== void 0) {
			R.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new nr(u) : new oi(u);
}, Ei = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Di(e) {
	let t = Ei.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var Oi = 4;
function ki(e, t, n = 1) {
	P(n <= Oi, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = Di(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Me(e) ? parseFloat(e) : e;
	}
	return Ct(i) ? ki(i, t, n + 1) : i;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Ai(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function ji(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Ai(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Ai(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function Mi(e, t, n) {
	let r = e.getProps();
	return ji(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Ni = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...gr
]), Pi = (e) => Array.isArray(e);
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Fi(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hi(n));
}
function Ii(e) {
	return Pi(e) ? e[e.length - 1] || 0 : e;
}
function Li(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = Mi(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Fi(e, t, Ii(i[t]));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var q = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Ri(e) {
	return !!(q(e) && e.add);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function zi(e, t) {
	let n = e.getValue("willChange");
	if (Ri(n)) return n.add(t);
	if (!n && je.WillChange) {
		let n = new je.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Bi(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Vi = "data-" + Bi("framerAppearId");
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Hi(e) {
	return e.props[Vi];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Ui({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Wi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? gi(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && Ui(f, t)) continue;
		let o = {
			delay: n,
			..._i(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			R.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = Hi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, R);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		zi(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(Ti(t, r, i, m && Ni.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => R.update(() => {
			o && Li(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function Gi(e, t, n = {}) {
	let r = Mi(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Wi(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ki(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Ki(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(Gi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + ui(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function qi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Gi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Gi(e, t, n);
	else {
		let i = typeof t == "function" ? Mi(e, t, n.custom) : t;
		r = Promise.all(Wi(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Ji = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Yi = (e) => (t) => t.test(e), Xi = [
	Et,
	H,
	V,
	Vt,
	Ut,
	Ht,
	Ji
], Zi = (e) => Xi.find(Yi(e));
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Qi(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || Pe(e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var $i = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function ea(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(At) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!$i.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ta = /\b([a-z-]*)\(.*?\)/gu, na = {
	...W,
	getAnimatableNone: (e) => {
		let t = e.match(ta);
		return t ? t.map(ea).join(" ") : e;
	}
}, ra = {
	...W,
	getAnimatableNone: (e) => {
		let t = W.parse(e);
		return W.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, ia = {
	...Et,
	transform: Math.round
}, aa = {
	borderWidth: H,
	borderTopWidth: H,
	borderRightWidth: H,
	borderBottomWidth: H,
	borderLeftWidth: H,
	borderRadius: H,
	borderTopLeftRadius: H,
	borderTopRightRadius: H,
	borderBottomRightRadius: H,
	borderBottomLeftRadius: H,
	width: H,
	maxWidth: H,
	height: H,
	maxHeight: H,
	top: H,
	right: H,
	bottom: H,
	left: H,
	inset: H,
	insetBlock: H,
	insetBlockStart: H,
	insetBlockEnd: H,
	insetInline: H,
	insetInlineStart: H,
	insetInlineEnd: H,
	padding: H,
	paddingTop: H,
	paddingRight: H,
	paddingBottom: H,
	paddingLeft: H,
	paddingBlock: H,
	paddingBlockStart: H,
	paddingBlockEnd: H,
	paddingInline: H,
	paddingInlineStart: H,
	paddingInlineEnd: H,
	margin: H,
	marginTop: H,
	marginRight: H,
	marginBottom: H,
	marginLeft: H,
	marginBlock: H,
	marginBlockStart: H,
	marginBlockEnd: H,
	marginInline: H,
	marginInlineStart: H,
	marginInlineEnd: H,
	fontSize: H,
	backgroundPositionX: H,
	backgroundPositionY: H,
	rotate: Vt,
	pathRotation: Vt,
	rotateX: Vt,
	rotateY: Vt,
	rotateZ: Vt,
	scale: Ot,
	scaleX: Ot,
	scaleY: Ot,
	scaleZ: Ot,
	skew: Vt,
	skewX: Vt,
	skewY: Vt,
	distance: H,
	translateX: H,
	translateY: H,
	translateZ: H,
	x: H,
	y: H,
	z: H,
	perspective: H,
	transformPerspective: H,
	opacity: Dt,
	originX: Wt,
	originY: Wt,
	originZ: H,
	zIndex: ia,
	fillOpacity: Dt,
	strokeOpacity: Dt,
	numOctaves: ia
}, oa = {
	...aa,
	color: U,
	backgroundColor: U,
	outlineColor: U,
	fill: U,
	stroke: U,
	borderColor: U,
	borderTopColor: U,
	borderRightColor: U,
	borderBottomColor: U,
	borderLeftColor: U,
	filter: na,
	WebkitFilter: na,
	mask: ra,
	WebkitMask: ra
}, sa = (e) => oa[e], ca = /*@__PURE__*/ new Set([na, ra]);
function la(e, t) {
	let n = sa(e);
	return ca.has(n) || (n = W), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var ua = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function da(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !ua.has(t) && en(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = la(n, i);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var fa = class extends Ar {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Ct(r))) {
				let i = ki(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ni.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Zi(r), o = Zi(i);
		if (Tt(r) !== Tt(i) && Sr[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (vr(a) && vr(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else Sr[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Qi(e[t])) && n.push(t);
		n.length && da(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Sr[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Sr[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, pa = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ma(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var ha = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function ga(e) {
	return Ne(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: _a, cancel: va } = /* @__PURE__ */ ht(queueMicrotask, !1), J = {
	x: !1,
	y: !1
};
function ya() {
	return J.x || J.y;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function ba(e) {
	return e === "x" || e === "y" ? J[e] ? null : (J[e] = !0, () => {
		J[e] = !1;
	}) : J.x || J.y ? null : (J.x = J.y = !0, () => {
		J.x = J.y = !1;
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function xa(e, t) {
	let n = ma(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/hover.mjs
function Sa(e) {
	return !(e.pointerType === "touch" || ya());
}
function Ca(e, t, n = {}) {
	let [r, i, a] = xa(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Sa(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var wa = (e, t) => t ? e === t || wa(e, t.parentElement) : !1, Ta = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Ea = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Da(e) {
	return Ea.has(e.tagName) || e.isContentEditable === !0;
}
var Oa = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function ka(e) {
	return Oa.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Aa = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function ja(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Ma(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Na = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = ja(() => {
		if (Aa.has(n)) return;
		Ma(n, "down");
		let e = ja(() => {
			Ma(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Ma(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Pa(e) {
	return Ta(e) && !ya();
}
var Fa = /* @__PURE__ */ new WeakSet();
function Ia(e, t, n = {}) {
	let [r, i, a] = xa(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Pa(e) || Fa.has(e)) return;
		Aa.add(r), n.stopPropagation && Fa.add(e);
		let a = t(r, e), o = {
			...i,
			capture: !0
		}, s = (e, t) => {
			window.removeEventListener("pointerup", c, o), window.removeEventListener("pointercancel", l, o), Aa.has(r) && Aa.delete(r), Pa(e) && typeof a == "function" && a(e, { success: t });
		}, c = (e) => {
			s(e, r === window || r === document || n.useGlobalTarget || wa(r, e.target));
		}, l = (e) => {
			s(e, !1);
		};
		window.addEventListener("pointerup", c, o), window.addEventListener("pointercancel", l, o);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ga(e) && (e.addEventListener("focus", (e) => Na(e, i)), !Da(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function La(e) {
	return Ne(e) && "ownerSVGElement" in e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var Ra = /* @__PURE__ */ new WeakMap(), za, Ba = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : La(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Va = /*@__PURE__*/ Ba("inline", "width", "offsetWidth"), Ha = /*@__PURE__*/ Ba("block", "height", "offsetHeight");
function Ua({ target: e, borderBoxSize: t }) {
	Ra.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Va(e, t);
			},
			get height() {
				return Ha(e, t);
			}
		});
	});
}
function Wa(e) {
	e.forEach(Ua);
}
function Ga() {
	typeof ResizeObserver > "u" || (za = new ResizeObserver(Wa));
}
function Ka(e, t) {
	za || Ga();
	let n = ma(e);
	return n.forEach((e) => {
		let n = Ra.get(e);
		n || (n = /* @__PURE__ */ new Set(), Ra.set(e, n)), n.add(t), za?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Ra.get(e);
			n?.delete(t), n?.size || za?.unobserve(e);
		});
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var qa = /* @__PURE__ */ new Set(), Ja;
function Ya() {
	Ja = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		qa.forEach((t) => t(e));
	}, window.addEventListener("resize", Ja);
}
function Xa(e) {
	return qa.add(e), Ja || Ya(), () => {
		qa.delete(e), !qa.size && typeof Ja == "function" && (window.removeEventListener("resize", Ja), Ja = void 0);
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/resize/index.mjs
function Za(e, t) {
	return typeof e == "function" ? Xa(e) : Ka(e, t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/stats/buffer.mjs
var Qa = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function $a(e) {
	return La(e) && e.tagName === "svg";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/transform.mjs
function eo(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = Wn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var to = [
	...Xi,
	U,
	W
], no = (e) => to.find(Yi(e)), ro = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), io = () => ({
	x: ro(),
	y: ro()
}), ao = () => ({
	min: 0,
	max: 0
}), Y = () => ({
	x: ao(),
	y: ao()
}), oo = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function so(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function co(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var lo = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], uo = ["initial", ...lo];
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function fo(e) {
	return so(e.animate) || uo.some((t) => co(e[t]));
}
function po(e) {
	return !!(fo(e) || e.variants);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function mo(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (q(i)) e.addValue(r, i);
		else if (q(a)) e.addValue(r, hi(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, hi(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var ho = { current: null }, go = { current: !1 }, _o = typeof window < "u";
function vo() {
	if (go.current = !0, _o) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => ho.current = e.matches;
		e.addEventListener("change", t), t();
	} else ho.current = !1;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var yo = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], bo = {};
function xo(e) {
	bo = e;
}
function So() {
	return bo;
}
var Co = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ar, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = B.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, R.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = fo(t), this.isVariantNode = po(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && q(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, oo.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (go.current || vo(), this.shouldReduceMotion = ho.current), process.env.NODE_ENV !== "production" && Ve(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), gt(this.notifyUpdate), gt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && $r.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Ur({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ I(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = _r.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && R.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in bo) {
			let t = bo[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < yo.length; t++) {
			let n = yo[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = mo(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = hi(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Me(n) || Pe(n)) ? n = parseFloat(n) : !no(n) && W.test(t) && (n = la(e, t)), this.setBaseTarget(e, q(n) ? n.get() : n)), q(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = ji(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !q(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Re()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		_a.render(this.render);
	}
}, wo = class extends Co {
	constructor() {
		super(...arguments), this.KeyframeResolver = fa;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		q(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, To = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Eo({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Do({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Oo(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function ko(e) {
	return e === void 0 || e === 1;
}
function Ao({ scale: e, scaleX: t, scaleY: n }) {
	return !ko(e) || !ko(t) || !ko(n);
}
function jo(e) {
	return Ao(e) || Mo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Mo(e) {
	return No(e.x) || No(e.y);
}
function No(e) {
	return e && e !== "0%";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Po(e, t, n) {
	return n + t * (e - n);
}
function Fo(e, t, n, r, i) {
	return i !== void 0 && (e = Po(e, i, r)), Po(e, n, r) + t;
}
function Io(e, t = 0, n = 1, r, i) {
	e.min = Fo(e.min, t, n, r, i), e.max = Fo(e.max, t, n, r, i);
}
function Lo(e, { x: t, y: n }) {
	Io(e.x, t.translate, t.scale, t.originPoint), Io(e.y, n.translate, n.scale, n.originPoint);
}
var Ro = .999999999999, zo = 1.0000000000001;
function Bo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (X(e.x, -a.scroll.offset.x), X(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Lo(e, o)), r && jo(a.latestValues) && Uo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < zo && t.x > Ro && (t.x = 1), t.y < zo && t.y > Ro && (t.y = 1);
}
function X(e, t) {
	e.min += t, e.max += t;
}
function Vo(e, t, n, r, i = .5) {
	Io(e, t, n, G(e.min, e.max, i), r);
}
function Ho(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Uo(e, t, n) {
	let r = n ?? e;
	Vo(e.x, Ho(t.x, r.x), t.scaleX, t.scale, t.originX), Vo(e.y, Ho(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Wo(e, t) {
	return Eo(Oo(e.getBoundingClientRect(), t));
}
function Go(e, t, n) {
	let r = Wo(e, n), { scroll: i } = t;
	return i && (X(r.x, i.offset.x), X(r.y, i.offset.y)), r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Ko = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, qo = gr.length;
function Jo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < qo; a++) {
		let o = gr[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ha(s, aa[o]);
			if (!c) {
				i = !1;
				let t = Ko[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${ha(a, aa.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Yo(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (_r.has(e)) {
			o = !0;
			continue;
		} else if (xt(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ha(n, aa[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Jo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Xo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Zo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Qo = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (H.test(e)) e = parseFloat(e);
	else return e;
	return `${Zo(e, t.target.x)}% ${Zo(e, t.target.y)}%`;
} }, $o = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = W.parse(e);
	if (i.length > 5) return r;
	let a = W.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = G(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, es = {
	borderRadius: {
		...Qo,
		applyTo: [...pa]
	},
	borderTopLeftRadius: Qo,
	borderTopRightRadius: Qo,
	borderBottomLeftRadius: Qo,
	borderBottomRightRadius: Qo,
	boxShadow: $o
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function ts(e, { layout: t, layoutId: n }) {
	return _r.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!es[e] || e === "opacity");
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function ns(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (q(r[t]) || i && q(i[t]) || ts(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function rs(e) {
	return window.getComputedStyle(e);
}
var is = class extends wo {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Xo;
	}
	readValueFromInstance(e, t) {
		if (_r.has(t)) return this.projection?.isProjecting ? fr(t) : mr(e, t);
		{
			let n = rs(e), r = (xt(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Wo(e, t);
	}
	build(e, t, n) {
		Yo(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return ns(e, t, n);
	}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function as(e, t) {
	return e in t;
}
var os = class extends Co {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (as(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return Y();
	}
	build(e, t) {
		Object.assign(e.output, t);
	}
	renderInstance(e, { output: t }) {
		Object.assign(e, t);
	}
	sortInstanceNodePosition() {
		return 0;
	}
}, ss = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, cs = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ls(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? ss : cs;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var us = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function ds(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Yo(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of us) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ls(d, i, a, o, !1);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var fs = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), ps = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function ms(e, t, n, r) {
	Xo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(fs.has(n) ? n : Bi(n), t.attrs[n]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function hs(e, t, n) {
	let r = ns(e, t, n);
	for (let n in e) if (q(e[n]) || q(t[n])) {
		let t = gr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var gs = class extends wo {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (_r.has(t)) {
			let e = sa(t);
			return e && e.default || 0;
		}
		return t = fs.has(t) ? t : Bi(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return hs(e, t, n);
	}
	build(e, t, n) {
		ds(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		ms(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = ps(e.tagName), super.mount(e);
	}
}, _s = uo.length;
function vs(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && vs(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < _s; n++) {
		let r = uo[n], i = e.props[r];
		(co(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function ys(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var bs = [...lo].reverse(), xs = lo.length;
function Ss(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => qi(e, t, n)));
}
function Cs(e) {
	let t = Ss(e), n = Es(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = Mi(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = vs(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < xs; t++) {
			let p = bs[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = co(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || so(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = ws(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: ee = {} } = m, te = {
				...ee,
				...C
			}, ne = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in te) {
				let t = C[e], n = ee[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Pi(t) && Pi(n) ? !ys(t, n) || y : t !== n, r ? t == null ? u.add(e) : ne(e) : t !== void 0 && u.has(e) ? ne(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let re = v && y;
			b && (!re || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !re && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = Mi(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = ui(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = Mi(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = Es(), i = !0;
		}
	};
}
function ws(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !ys(t, e) : !1;
}
function Ts(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Es() {
	return {
		animate: Ts(!0),
		whileInView: Ts(),
		whileHover: Ts(),
		whileTap: Ts(),
		whileDrag: Ts(),
		whileFocus: Ts(),
		exit: Ts()
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function Ds(e, t) {
	e.min = t.min, e.max = t.max;
}
function Z(e, t) {
	Ds(e.x, t.x), Ds(e.y, t.y);
}
function Os(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var ks = .9999, As = 1.0001, js = -.01, Ms = .01;
function Q(e) {
	return e.max - e.min;
}
function Ns(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Ps(e, t, n, r = .5) {
	e.origin = r, e.originPoint = G(t.min, t.max, e.origin), e.scale = Q(n) / Q(t), e.translate = G(n.min, n.max, e.origin) - e.originPoint, (e.scale >= ks && e.scale <= As || isNaN(e.scale)) && (e.scale = 1), (e.translate >= js && e.translate <= Ms || isNaN(e.translate)) && (e.translate = 0);
}
function Fs(e, t, n, r) {
	Ps(e.x, t.x, n.x, r ? r.originX : void 0), Ps(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Is(e, t, n, r = 0) {
	e.min = (r ? G(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Q(t);
}
function Ls(e, t, n, r) {
	Is(e.x, t.x, n.x, r?.x), Is(e.y, t.y, n.y, r?.y);
}
function Rs(e, t, n, r = 0) {
	let i = r ? G(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Q(t);
}
function zs(e, t, n, r) {
	Rs(e.x, t.x, n.x, r?.x), Rs(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Bs(e, t, n, r, i) {
	return e -= t, e = Po(e, 1 / n, r), i !== void 0 && (e = Po(e, 1 / i, r)), e;
}
function Vs(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (V.test(t) && (t = parseFloat(t), t = G(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = G(a.min, a.max, r);
	e === a && (s -= t), e.min = Bs(e.min, t, n, s, i), e.max = Bs(e.max, t, n, s, i);
}
function Hs(e, t, [n, r, i], a, o) {
	Vs(e, t[n], t[r], t[i], t.scale, a, o);
}
var Us = [
	"x",
	"scaleX",
	"originX"
], Ws = [
	"y",
	"scaleY",
	"originY"
];
function Gs(e, t, n, r) {
	Hs(e.x, t, Us, n ? n.x : void 0, r ? r.x : void 0), Hs(e.y, t, Ws, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function Ks(e) {
	return e.translate === 0 && e.scale === 1;
}
function qs(e) {
	return Ks(e.x) && Ks(e.y);
}
function Js(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Ys(e, t) {
	return Js(e.x, t.x) && Js(e.y, t.y);
}
function Xs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Zs(e, t) {
	return Xs(e.x, t.x) && Xs(e.y, t.y);
}
function Qs(e) {
	return Q(e.x) / Q(e.y);
}
function $s(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function $(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function ec(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, pathRotation: i, rotateX: a, rotateY: o, skewX: s, skewY: c } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotate(${i}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), s && (r += `skewX(${s}deg) `), c && (r += `skewY(${c}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var tc = pa.length, nc = (e) => typeof e == "string" ? parseFloat(e) : e, rc = (e) => typeof e == "number" || H.test(e);
function ic(e, t, n, r, i, a) {
	i ? (e.opacity = G(0, n.opacity ?? 1, oc(r)), e.opacityExit = G(t.opacity ?? 1, 0, sc(r))) : a && (e.opacity = G(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < tc; i++) {
		let a = pa[i], o = ac(t, a), s = ac(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || rc(o) === rc(s) ? (e[a] = Math.max(G(nc(o), nc(s), r), 0), (V.test(s) || V.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function ac(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var oc = /*@__PURE__*/ cc(0, .5, tt), sc = /*@__PURE__*/ cc(.5, .95, F);
function cc(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Le(e, t, r));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function lc(e, t, n) {
	let r = q(e) ? e : hi(e);
	return r.start(Ti("", r, t, n)), r.animation;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function uc(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var dc = (e, t) => e.depth - t.depth, fc = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		De(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Oe(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(dc), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/utils/delay.mjs
function pc(e, t) {
	let n = B.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (gt(r), e(a - t));
	};
	return R.setup(r, !0), () => gt(r);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function mc(e) {
	return q(e) ? e.get() : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var hc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		De(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (Oe(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (Oe(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, gc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, _c = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, vc = [
	"",
	"X",
	"Y",
	"Z"
], yc = 1e3, bc = 0;
function xc(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Sc(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Hi(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", R, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Sc(r);
}
function Cc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = bc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, Qa.value && (_c.nodes = _c.calculatedTargetDeltas = _c.calculatedProjections = 0), this.nodes.forEach(Ec), this.nodes.forEach(Fc), this.nodes.forEach(Ic), this.nodes.forEach(Dc), Qa.addProjectionMetrics && Qa.addProjectionMetrics(_c);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new fc());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Re()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = La(t) && !$a(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				R.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = pc(i, 250), gc.hasAnimatedSinceResize && (gc.hasAnimatedSinceResize = !1, this.nodes.forEach(Pc)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Uc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Zs(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						..._i(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || Pc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), gt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Lc), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Sc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Ac), this.nodes.forEach(kc);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(jc);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Mc), this.nodes.forEach(Nc), this.nodes.forEach(wc), this.nodes.forEach(Tc)) : this.nodes.forEach(jc), this.clearAllSnapshots();
			let e = B.now();
			z.delta = N(0, 1e3 / 60, e - z.timestamp), z.timestamp = e, z.isProcessing = !0, _t.update.process(z), _t.preRender.process(z), _t.render.process(z), z.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, _a.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Oc), this.sharedNodes.forEach(Rc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			R.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !qs(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || jo(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), qc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return Y();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Yc))) {
				let { scroll: e } = this.root;
				e && (X(t.x, e.offset.x), X(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Y();
			if (Z(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Z(t, e), X(t.x, i.offset.x), X(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || Y();
			Z(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (X(r.x, -n.scroll.offset.x), X(r.y, -n.scroll.offset.y)), jo(n.latestValues) && Uo(r, n.latestValues, n.layout?.layoutBox);
			}
			return jo(this.latestValues) && Uo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = Y();
			Z(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!jo(n.latestValues)) continue;
				let r;
				n.instance && (Ao(n.latestValues) && n.updateSnapshot(), r = Y(), Z(r, n.measurePageBox())), Gs(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return jo(this.latestValues) && Gs(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== z.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = z.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ls(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Z(this.target, this.layout.layoutBox), Lo(this.target, this.targetDelta)) : Z(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), Qa.value && _c.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ao(this.parent.latestValues) || Mo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), zs(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Z(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === z.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Z(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Bo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Y());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Os(this.prevProjectionDelta.x, this.projectionDelta.x), Os(this.prevProjectionDelta.y, this.projectionDelta.y)), Fs(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !$s(this.projectionDelta.x, this.prevProjectionDelta.x) || !$s(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), Qa.value && _c.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = io(), this.projectionDelta = io(), this.projectionDeltaWithTransform = io();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = io();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = Y(), c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0), l = this.getStack(), u = !l || l.members.length <= 1, d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Hc));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				r ? (o.x.translate = r.x, o.x.scale = G(e.x.scale, 1, n), o.x.origin = e.x.origin, o.x.originPoint = e.x.originPoint, o.y.translate = r.y, o.y.scale = G(e.y.scale, 1, n), o.y.origin = e.y.origin, o.y.originPoint = e.y.originPoint) : (zc(o.x, e.x, n), zc(o.y, e.y, n)), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zs(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Vc(this.relativeTarget, this.relativeTargetOrigin, s, n), f && Ys(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= Y(), Z(f, this.relativeTarget)), c && (this.animationValues = a, ic(a, i, this.latestValues, n, d, u)), r && r.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (gt(this.pendingAnimation), void 0), this.pendingAnimation = R.update(() => {
				gc.hasAnimatedSinceResize = !0, this.motionValue ||= hi(0), this.motionValue.jump(0, !1), this.currentAnimation = lc(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(yc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Jc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || Y();
					let t = Q(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Q(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Z(t, n), Uo(t, i), Fs(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new hc()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && xc("z", e, r, this.animationValues);
			for (let t = 0; t < vc.length; t++) xc(`rotate${vc[t]}`, e, r, this.animationValues), xc(`skew${vc[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = mc(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = mc(t?.pointerEvents) || ""), this.hasProjected && !jo(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = ec(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in es) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = es[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? mc(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(kc), this.root.sharedNodes.clear();
		}
	};
}
function wc(e) {
	e.updateLayout();
}
function Tc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") $((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Q(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			Ds(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else Jc(i, t.layoutBox, n) && $((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Q(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = io();
		Fs(o, n, t.layoutBox);
		let s = io();
		a ? Fs(s, e.applyTransform(r, !0), t.measuredBox) : Fs(s, n, t.layoutBox);
		let c = !qs(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = Y();
					zs(s, t.layoutBox, i.layoutBox, o);
					let c = Y();
					zs(c, n, a.layoutBox, o), Zs(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Ec(e) {
	Qa.value && _c.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Dc(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Oc(e) {
	e.clearSnapshot();
}
function kc(e) {
	e.clearMeasurements();
}
function Ac(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function jc(e) {
	e.isLayoutDirty = !1;
}
function Mc(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Nc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Pc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Fc(e) {
	e.resolveTargetDelta();
}
function Ic(e) {
	e.calcProjection();
}
function Lc(e) {
	e.resetSkewAndRotation();
}
function Rc(e) {
	e.removeLeadSnapshot();
}
function zc(e, t, n) {
	e.translate = G(t.translate, 0, n), e.scale = G(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Bc(e, t, n, r) {
	e.min = G(t.min, n.min, r), e.max = G(t.max, n.max, r);
}
function Vc(e, t, n, r) {
	Bc(e.x, t.x, n.x, r), Bc(e.y, t.y, n.y, r);
}
function Hc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Uc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, Wc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Gc = Wc("applewebkit/") && !Wc("chrome/") ? Math.round : F;
function Kc(e) {
	e.min = Gc(e.min), e.max = Gc(e.max);
}
function qc(e) {
	Kc(e.x), Kc(e.y);
}
function Jc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Ns(Qs(t), Qs(n), .2);
}
function Yc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion-dom@12.42.2/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var Xc = Cc({
	attachResizeListener: (e, t) => uc(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), Zc = { current: void 0 }, Qc = Cc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Zc.current) {
			let e = new Xc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Zc.current = e;
		}
		return Zc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), $c = pe({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function el(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function tl(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = el(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : el(e[t], null);
			}
		};
	};
}
function nl(...e) {
	return w.useCallback(tl(...e), e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var rl = class extends w.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (ga(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = ga(e) && e.offsetWidth || 0, r = ga(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function il({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = _e(), s = k(null), c = k({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	}), { nonce: l } = D($c), u = nl(s, e.props?.ref ?? e?.ref);
	return ve(() => {
		let { width: e, height: u, top: d, left: f, right: p, bottom: m, direction: h } = c.current;
		if (t || a === !1 || !s.current || !e || !u) return;
		let g = h === "rtl", _ = n === "left" ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`, v = r === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		s.current.dataset.motionPopId = o;
		let y = document.createElement("style");
		l && (y.nonce = l);
		let b = i ?? document.head;
		return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
			s.current?.removeAttribute("data-motion-pop-id"), b.contains(y) && b.removeChild(y);
		};
	}, [t]), j(rl, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : w.cloneElement(e, { ref: u })
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var al = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = we(ol), d = _e(), f = k(n), p = k(r);
	Te(() => {
		f.current = n, p.current = r;
	});
	let m = !0, h = be(() => (m = !1, {
		id: d,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			u.set(e, !0);
			for (let e of u.values()) if (!e) return;
			r && r();
		},
		register: (e) => (u.set(e, !1), () => {
			u.delete(e), !f.current && !u.size && p.current?.();
		})
	}), [
		n,
		u,
		r
	]);
	return a && m && (h = { ...h }), be(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), w.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = j(il, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), j(Ee.Provider, {
		value: h,
		children: e
	});
};
function ol() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function sl(e = !0) {
	let t = D(Ee);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = _e();
	O(() => {
		if (e) return i(a);
	}, [e]);
	let o = E(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var cl = (e) => e.key || "";
function ll(e) {
	let t = [];
	return le.forEach(e, (e) => {
		ge(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var ul = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, d] = sl(o), f = be(() => ll(e), [e]), p = o && !u ? [] : f.map(cl), m = k(!0), h = k(f), g = we(() => /* @__PURE__ */ new Map()), _ = k(/* @__PURE__ */ new Set()), [v, y] = A(f), [b, x] = A(f);
	Te(() => {
		m.current = !1, h.current = f;
		for (let e = 0; e < b.length; e++) {
			let t = cl(b[e]);
			p.includes(t) ? (g.delete(t), _.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1);
		}
	}, [
		b,
		p.length,
		p.join("-")
	]);
	let S = [];
	if (f !== v) {
		let e = [...f];
		for (let t = 0; t < b.length; t++) {
			let n = b[t], r = cl(n);
			p.includes(r) || (e.splice(t, 0, n), S.push(n));
		}
		return a === "wait" && S.length && (e = S), x(ll(e)), y(f), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && b.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: C } = D(Ce);
	return j(xe, { children: b.map((e) => {
		let v = cl(e), y = o && !u ? !1 : f === b || p.includes(v);
		return j(al, {
			isPresent: y,
			initial: !m.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: l,
			onExitComplete: y ? void 0 : () => {
				if (_.current.has(v)) return;
				if (g.has(v)) _.current.add(v), g.set(v, !0);
				else return;
				let e = !0;
				g.forEach((t) => {
					t || (e = !1);
				}), e && (C?.(), x(h.current), o && d?.(), r && r());
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, v);
	}) });
}, dl = pe({ strict: !1 }), fl = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, pl = !1;
function ml() {
	if (pl) return;
	let e = {};
	for (let t in fl) e[t] = { isEnabled: (e) => fl[t].some((t) => !!e[t]) };
	xo(e), pl = !0;
}
function hl() {
	return ml(), So();
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function gl(e) {
	let t = hl();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	xo(t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var _l = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function vl(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _l.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var yl = /* @__PURE__ */ n({ default: () => bl }), bl, xl = y((() => {
	throw bl = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), Sl = (e) => !vl(e);
function Cl(e) {
	typeof e == "function" && (Sl = (t) => t.startsWith("on") ? !vl(t) : e(t));
}
try {
	Cl((xl(), e(yl)).default);
} catch {}
function wl(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || q(e[i]) || (Sl(i) || n === !0 && vl(i) || !t && !vl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Tl = /* @__PURE__ */ pe({});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function El(e, t) {
	if (fo(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || co(t) ? t : void 0,
			animate: co(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Dl(e) {
	let { initial: t, animate: n } = El(e, D(Tl));
	return be(() => ({
		initial: t,
		animate: n
	}), [Ol(t), Ol(n)]);
}
function Ol(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var kl = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Al(e, t, n) {
	for (let r in t) !q(t[r]) && !ts(r, n) && (e[r] = t[r]);
}
function jl({ transformTemplate: e }, t) {
	return be(() => {
		let n = kl();
		return Yo(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Ml(e, t) {
	let n = e.style || {}, r = {};
	return Al(r, n, e), Object.assign(r, jl(e, t)), r;
}
function Nl(e, t) {
	let n = {}, r = Ml(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Pl = () => ({
	...kl(),
	attrs: {}
});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Fl(e, t, n, r) {
	let i = be(() => {
		let n = Pl();
		return ds(n, t, ps(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Al(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Il = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Ll(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Il.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Rl(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Ll(e) ? Fl : Nl)(t, r, i, e), c = wl(t, typeof e == "string", a), l = e === de ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = be(() => q(u) ? u.get() : u, [u]);
	return me(e, {
		...l,
		children: d
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function zl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Bl(n, r, i, e),
		renderState: t()
	};
}
function Bl(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = mc(a[e]);
	let { initial: o, animate: s } = e, c = fo(e), l = po(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !so(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = ji(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var Vl = (e) => (t, n) => {
	let r = D(Tl), i = D(Ee), a = () => zl(e, t, r, i);
	return n ? a() : we(a);
}, Hl = /*@__PURE__*/ Vl({
	scrapeMotionValuesFromProps: ns,
	createRenderState: kl
}), Ul = /*@__PURE__*/ Vl({
	scrapeMotionValuesFromProps: hs,
	createRenderState: Pl
}), Wl = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Gl(e, t, n) {
	let r = k(n);
	ve(() => {
		r.current = n;
	});
	let i = k(null);
	return E((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var Kl = pe({});
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function ql(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Jl(e, t, n, r, i, a) {
	let { visualElement: o } = D(Tl), s = D(dl), c = D(Ee), l = D($c), u = l.reducedMotion, d = l.skipAnimations, f = k(null), p = k(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, h = D(Kl);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Yl(f.current, n, i, h);
	let g = k(!1);
	ve(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[Vi], v = k(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return Te(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), O(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function Yl(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Xl(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && ql(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function Xl(e) {
	if (e) return e.options.allowProjection === !1 ? Xl(e.parent) : e.projection;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/index.mjs
function Zl(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && gl(r);
	let a = n ? n === "svg" : Ll(e), o = a ? Ul : Hl;
	function s(n, s) {
		let c, l = {
			...D($c),
			...n,
			layoutId: Ql(n)
		}, { isStatic: u } = l, d = Dl(n), f = o(n, u);
		if (!u && typeof window < "u") {
			$l(l, r);
			let t = eu(l);
			c = t.MeasureLayout, d.visualElement = Jl(e, f, l, i, t.ProjectionNode, a);
		}
		return M(Tl.Provider, {
			value: d,
			children: [c && d.visualElement ? j(c, {
				visualElement: d.visualElement,
				...l
			}) : null, Rl(e, n, Gl(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = he(s);
	return c[Wl] = e, c;
}
function Ql({ layoutId: e }) {
	let t = D(Ce).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function $l(e, t) {
	let n = D(dl).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? Ae(!1, t, "lazy-strict-mode") : P(!1, t, "lazy-strict-mode");
	}
}
function eu(e) {
	let { drag: t, layout: n } = hl();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function tu(e, t) {
	if (typeof Proxy > "u") return Zl;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Zl(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && Ve(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Zl(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var nu = (e, t) => t.isSVG ?? Ll(e) ? new gs(t) : new is(t, { allowProjection: e !== de }), ru = class extends To {
	constructor(e) {
		super(e), e.animationState ||= Cs(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		so(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, iu = 0, au = {
	animation: { Feature: ru },
	exit: { Feature: class extends To {
		constructor() {
			super(...arguments), this.id = iu++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = Mi(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/events/event-info.mjs
function ou(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var su = (e) => (t) => Ta(t) && e(t, ou(t));
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function cu(e, t, n, r) {
	return uc(e, t, su(n), r);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var lu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, uu = (e, t) => Math.abs(e - t);
function du(e, t) {
	let n = uu(e.x, t.x), r = uu(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var fu = /*#__PURE__*/ new Set(["auto", "scroll"]), pu = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = mu(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = gu(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = du(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = z;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = mu(t, this.transformPagePoint), R.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = gu(e.type === "pointercancel" ? this.lastMoveEventInfo : mu(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Ta(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = mu(ou(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = z;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, gu(s, this.history));
		let d = {
			passive: !0,
			capture: !0
		};
		this.removeListeners = Ie(cu(this.contextWindow, "pointermove", this.handlePointerMove, d), cu(this.contextWindow, "pointerup", this.handlePointerUp, d), cu(this.contextWindow, "pointercancel", this.handlePointerUp, d)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(fu.has(e.overflowX) || fu.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), R.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), gt(this.updatePoint);
	}
};
function mu(e, t) {
	return t ? { point: t(e.point) } : e;
}
function hu(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function gu({ point: e }, t) {
	return {
		point: e,
		delta: hu(e, vu(t)),
		offset: hu(e, _u(t)),
		velocity: yu(t, .1)
	};
}
function _u(e) {
	return e[0];
}
function vu(e) {
	return e[e.length - 1];
}
function yu(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = vu(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ I(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ I(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ L(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function bu(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? G(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)), e;
}
function xu(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Su(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: xu(e.x, n, i),
		y: xu(e.y, t, r)
	};
}
function Cu(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function wu(e, t) {
	return {
		x: Cu(e.x, t.x),
		y: Cu(e.y, t.y)
	};
}
function Tu(e, t) {
	let n = .5, r = Q(e), i = Q(t);
	return i > r ? n = /* @__PURE__ */ Le(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Le(e.min, e.max - i, t.min)), N(0, 1, n);
}
function Eu(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Du = .35;
function Ou(e = Du) {
	return e === !1 ? e = 0 : e === !0 && (e = Du), {
		x: ku(e, "left", "right"),
		y: ku(e, "top", "bottom")
	};
}
function ku(e, t, n) {
	return {
		min: Au(e, t),
		max: Au(e, n)
	};
}
function Au(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var ju = /* @__PURE__ */ new WeakMap(), Mu = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(ou(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = ba(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (V.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Q(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && R.update(() => i(e, t), !1, !0), zi(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Iu(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && R.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new pu(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: lu(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && R.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Fu(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = bu(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && ql(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Su(n.layoutBox, e) : this.constraints = !1, this.elastic = Ou(t), r !== this.constraints && !ql(e) && n && this.constraints && !this.hasMutatedConstraints && $((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Eu(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !ql(e)) return !1;
		let n = e.current;
		P(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		r.root && (r.root.scroll = void 0, r.root.updateScroll());
		let i = Go(n, r.root, this.visualElement.getTransformPagePoint()), a = wu(r.layout.layoutBox, i);
		if (t) {
			let e = t(Do(a));
			this.hasMutatedConstraints = !!e, e && (a = Eo(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = $((o) => {
			if (!Fu(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return zi(this.visualElement, e), n.start(Ti(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		$((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.visualElement.getProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor(e) {
		$((t) => {
			let { drag: n } = this.getProps();
			if (!Fu(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - G(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!ql(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		$((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Tu({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), $((t) => {
			if (!Fu(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(G(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		ju.set(this.visualElement, this);
		let e = this.visualElement.current, t = cu(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && ka(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			ql(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Pu(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(r);
		let o = uc(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && ($((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Du, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Nu(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Pu(e, t, n) {
	let r = Za(e, Nu(n)), i = Za(t, Nu(n));
	return () => {
		r(), i();
	};
}
function Fu(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Iu(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Lu = class extends To {
	constructor(e) {
		super(e), this.removeGroupControls = F, this.removeListeners = F, this.controls = new Mu(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || F;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Ru = (e) => (t, n) => {
	e && R.update(() => e(t, n), !1, !0);
}, zu = class extends To {
	constructor() {
		super(...arguments), this.removePointerDownListener = F;
	}
	onPointerDown(e) {
		this.session = new pu(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: lu(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Ru(e),
			onStart: Ru(t),
			onMove: Ru(n),
			onEnd: (e, t) => {
				delete this.session, r && R.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = cu(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Bu = !1, Vu = class extends ue {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Bu && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), gc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Bu = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || R.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), _a.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Bu = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Hu(e) {
	let [t, n] = sl(), r = D(Ce);
	return j(Vu, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: D(Kl),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Uu = {
	pan: { Feature: zu },
	drag: {
		Feature: Lu,
		ProjectionNode: Qc,
		MeasureLayout: Hu
	}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/hover.mjs
function Wu(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && R.postRender(() => i(t, ou(t)));
}
var Gu = class extends To {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Ca(e, (e, t) => (Wu(this.node, t, "Start"), (e) => Wu(this.node, e, "End"))));
	}
	unmount() {}
}, Ku = class extends To {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = Ie(uc(this.node.current, "focus", () => this.onFocus()), uc(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/gestures/press.mjs
function qu(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && R.postRender(() => i(t, ou(t)));
}
var Ju = class extends To {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Ia(e, (e, t) => (qu(this.node, t, "Start"), (e, { success: t }) => qu(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, Yu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Zu = (e) => {
	let t = Yu.get(e.target);
	t && t(e);
}, Qu = (e) => {
	e.forEach(Zu);
};
function $u({ root: e, ...t }) {
	let n = e || document;
	Xu.has(n) || Xu.set(n, {});
	let r = Xu.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Qu, {
		root: e,
		...t
	})), r[i];
}
function ed(e, t, n) {
	let r = $u(t);
	return Yu.set(e, n), r.observe(e), () => {
		Yu.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var td = {
	some: 0,
	all: 1
}, nd = class extends To {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : td[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = ed(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(rd(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function rd({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var id = {
	inView: { Feature: nd },
	tap: { Feature: Ju },
	focus: { Feature: Ku },
	hover: { Feature: Gu }
}, ad = { layout: {
	ProjectionNode: Qc,
	MeasureLayout: Hu
} }, od = /*@__PURE__*/ tu({
	...au,
	...id,
	...Uu,
	...ad
}, nu);
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function sd(e) {
	let t = we(() => hi(e)), { isStatic: n } = D($c);
	if (n) {
		let [, n] = A(e);
		O(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function cd(e, t) {
	let n = sd(t()), r = () => n.set(t());
	return r(), Te(() => {
		let t = () => R.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), gt(r);
		};
	}), n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/value/use-computed.mjs
function ld(e) {
	pi.current = [], e();
	let t = cd(pi.current, e);
	return pi.current = void 0, t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/value/use-transform.mjs
function ud(e, t, n, r) {
	if (typeof e == "function") return ld(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return fd(e, t, n, r);
	let i = typeof t == "function" ? t : eo(t, n, r), a = Array.isArray(e) ? dd(e, i) : dd([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function dd(e, t) {
	let n = we(() => []);
	return cd(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function fd(e, t, n, r) {
	let i = we(() => Object.keys(n)), a = we(() => ({}));
	for (let o of i) a[o] = ud(e, t, n[o], r);
	return a;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function pd(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function md(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && pd(t) ? ma(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function hd(e, t, n) {
	return e * (t + 1) + n * t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function gd(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function _d(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (Oe(e, i), r--);
	}
}
function vd(e, t, n, r, i, a) {
	_d(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: G(i, a, r[o]),
		easing: /* @__PURE__ */ st(n, o)
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function yd(e, t, n = 0) {
	let r = t + 1 + t * n;
	for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function bd(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var xd = "easeInOut", Sd = 20;
function Cd(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, gd(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = gd(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = Ed(e), { delay: l = 0, times: u = Kn(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Vr(p) ? p : i?.[p || "keyframes"];
			if (S <= 2 && C) {
				let e = 100;
				if (S === 2 && kd(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				b !== void 0 && (n.duration = /* @__PURE__ */ I(b));
				let r = kn(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let ee = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let te = u.length - c.length;
			if (te > 0 && Gn(u, te), c.length === 1 && c.unshift(null), m && Ae(m < Sd, `Sequence segments can't repeat ${m} times — ignoring repeat option. Use a value below ${Sd} or apply repeat at the sequence level instead.`), m && m < Sd) {
				let e = b > 0 ? _ / b : 0;
				b = hd(b, m, _);
				let t = [...c], n = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let r = [...y], i = h === "reverse" || h === "mirror", a = t, o = r;
				i && (a = [...t].reverse(), h === "reverse" && (o = [...r].reverse().map((e) => typeof e == "function" ? /* @__PURE__ */ Ye(e) : e)));
				for (let s = 0; s < m; s++) {
					let l = i && s % 2 == 0, d = l ? a : t, f = l ? o : r, p = (s + 1) * (1 + e);
					e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push("linear")), c.push(...d);
					for (let e = 0; e < d.length; e++) u.push(n[e] + p), y.push(e === 0 ? "linear" : /* @__PURE__ */ st(f, e - 1));
				}
				yd(u, m, e);
			}
			let ne = ee + b;
			vd(r, c, y, u, ee, ne), g = Math.max(x + b, g), f = Math.max(ne, f);
		};
		if (q(p)) {
			let e = wd(p, s);
			_(m, h, Td("default", e));
		} else {
			let e = md(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = wd(r, s);
				for (let e in m) _(m[e], Dd(h, e), Td(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(bd);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ Le(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(xd)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
				keyframes: {},
				transition: {}
			});
			let u = o.get(r);
			u.keyframes[i] = s;
			let { type: d, ...p } = t;
			u.transition[i] = {
				...p,
				duration: f,
				ease: l,
				times: c,
				...n
			};
		}
	}), o;
}
function wd(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Td(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Ed(e) {
	return Array.isArray(e) ? e : [e];
}
function Dd(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var Od = (e) => typeof e == "number", kd = (e) => e.every(Od);
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Ad(e) {
	let t = {
		presenceContext: null,
		props: {},
		visualState: {
			renderState: {
				transform: {},
				transformOrigin: {},
				style: {},
				vars: {},
				attrs: {}
			},
			latestValues: {}
		}
	}, n = La(e) && !$a(e) ? new gs(t) : new is(t);
	n.mount(e), oo.set(e, n);
}
function jd(e) {
	let t = new os({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), oo.set(e, t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Md(e, t) {
	return q(e) || typeof e == "number" || typeof e == "string" && !pd(t);
}
function Nd(e, t, n, r) {
	let i = [];
	if (Md(e, t)) i.push(lc(e, pd(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = md(e, t, r), o = a.length;
		P(!!o, "No valid elements provided.", "no-valid-elements");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Ad : jd;
			oo.has(r) || s(r);
			let c = oo.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Wi(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function Pd(e, t, n) {
	let r = [];
	return Cd(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = hi(0);
			return n.on("change", t), e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [
				n,
				[0, 1],
				e[1]
			] : [
				n,
				e[1],
				e[2]
			];
		}
		return e;
	}), t, n, { spring: zn }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...Nd(n, e, t));
	}), r;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/framer-motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/framer-motion/dist/es/animation/animate/index.mjs
function Fd(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function Id(e = {}) {
	let { scope: t, reduceMotion: n, skipAnimations: r } = e;
	function i(e, i, a) {
		let o = [], s, c = {};
		if (n !== void 0 && (c.reduceMotion = n), r !== void 0 && (c.skipAnimations = r), Fd(e)) {
			let { onComplete: n, ...r } = i || {};
			typeof n == "function" && (s = n), o = Pd(e, {
				...c,
				...r
			}, t);
		} else {
			let { onComplete: n, ...r } = a || {};
			typeof n == "function" && (s = n), o = Nd(e, i, {
				...c,
				...r
			}, t);
		}
		let l = new li(o);
		return s && l.finished.then(s), t && (t.animations.push(l), l.finished.then(() => {
			Oe(t.animations, l);
		})), l;
	}
	return i;
}
var Ld = Id(), Rd = class {
	constructor() {
		this.componentControls = /* @__PURE__ */ new Set();
	}
	subscribe(e) {
		return this.componentControls.add(e), () => this.componentControls.delete(e);
	}
	start(e, t) {
		this.componentControls.forEach((n) => {
			n.start(e.nativeEvent || e, t);
		});
	}
	cancel() {
		this.componentControls.forEach((e) => {
			e.cancel();
		});
	}
	stop() {
		this.componentControls.forEach((e) => {
			e.stop();
		});
	}
}, zd = () => new Rd();
function Bd() {
	return we(zd);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/motion@12.42.2_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/motion/dist/es/react.mjs
var Vd = od, Hd = {
	macos: {
		id: "macos",
		name: "macOS 26",
		description: "macOS with Liquid Glass — dock at bottom, menubar at top",
		hasLiquidGlass: !0,
		hasFloatingWindows: !0,
		hasDock: !0,
		hasMenuBar: !0,
		hasTaskbar: !1,
		hasNavBar: !1,
		defaultWallpaper: "macos-default",
		layout: {
			desktopInsets: {
				top: 36,
				right: 0,
				bottom: 60,
				left: 0
			},
			chrome: {
				menuBarHeight: 28,
				dockHeight: 72,
				dockOffsetBottom: 8,
				taskbarHeight: 0,
				navBarHeight: 0,
				statusBarHeight: 0,
				windowChromeHeight: 44
			},
			window: {
				maximizeInsets: {
					top: 28,
					bottom: 0
				},
				dragTopInset: 28,
				minTitleVisibleHeight: 40
			}
		}
	},
	ipad: {
		id: "ipad",
		name: "iPad OS 26",
		description: "iPad OS with Liquid Glass — home screen grid with dock",
		hasLiquidGlass: !0,
		hasFloatingWindows: !0,
		hasDock: !0,
		hasMenuBar: !1,
		hasTaskbar: !1,
		hasNavBar: !1,
		defaultWallpaper: "macos-default",
		layout: {
			desktopInsets: {
				top: 36,
				right: 0,
				bottom: 64,
				left: 0
			},
			chrome: {
				menuBarHeight: 28,
				dockHeight: 80,
				dockOffsetBottom: 8,
				taskbarHeight: 0,
				navBarHeight: 0,
				statusBarHeight: 28,
				windowChromeHeight: 44
			},
			window: {
				maximizeInsets: {
					top: 28,
					bottom: 96
				},
				dragTopInset: 28,
				minTitleVisibleHeight: 40
			}
		}
	},
	iphone: {
		id: "iphone",
		name: "iPhone OS 26",
		description: "iPhone OS with Liquid Glass — fullscreen apps, bottom nav",
		hasLiquidGlass: !0,
		hasFloatingWindows: !1,
		hasDock: !1,
		hasMenuBar: !1,
		hasTaskbar: !1,
		hasNavBar: !0,
		defaultWallpaper: "macos-default",
		layout: {
			desktopInsets: {
				top: 40,
				right: 0,
				bottom: 80,
				left: 0
			},
			chrome: {
				menuBarHeight: 0,
				dockHeight: 0,
				dockOffsetBottom: 0,
				taskbarHeight: 0,
				navBarHeight: 56,
				statusBarHeight: 40,
				windowChromeHeight: 0
			},
			window: {
				maximizeInsets: {
					top: 0,
					bottom: 0
				},
				dragTopInset: 0,
				minTitleVisibleHeight: 40
			}
		}
	},
	windows: {
		id: "windows",
		name: "Windows 11",
		description: "Windows 11 — centered taskbar at bottom, floating windows",
		hasLiquidGlass: !1,
		hasFloatingWindows: !0,
		hasDock: !1,
		hasMenuBar: !1,
		hasTaskbar: !0,
		hasNavBar: !1,
		defaultWallpaper: "windows-default",
		layout: {
			desktopInsets: {
				top: 0,
				right: 0,
				bottom: 48,
				left: 0
			},
			chrome: {
				menuBarHeight: 0,
				dockHeight: 0,
				dockOffsetBottom: 0,
				taskbarHeight: 48,
				navBarHeight: 0,
				statusBarHeight: 0,
				windowChromeHeight: 36
			},
			window: {
				maximizeInsets: {
					top: 0,
					bottom: 48
				},
				dragTopInset: 0,
				minTitleVisibleHeight: 40
			}
		}
	},
	android: {
		id: "android",
		name: "Android",
		description: "Android — material design, bottom nav bar",
		hasLiquidGlass: !1,
		hasFloatingWindows: !1,
		hasDock: !1,
		hasMenuBar: !1,
		hasTaskbar: !1,
		hasNavBar: !0,
		defaultWallpaper: "android-default",
		layout: {
			desktopInsets: {
				top: 32,
				right: 0,
				bottom: 56,
				left: 0
			},
			chrome: {
				menuBarHeight: 0,
				dockHeight: 0,
				dockOffsetBottom: 0,
				taskbarHeight: 0,
				navBarHeight: 56,
				statusBarHeight: 32,
				windowChromeHeight: 0
			},
			window: {
				maximizeInsets: {
					top: 0,
					bottom: 0
				},
				dragTopInset: 0,
				minTitleVisibleHeight: 40
			}
		}
	}
};
//#endregion
//#region src/hooks/useTheme.ts
function Ud() {
	let e = x((e) => e.osTheme), t = x((e) => e.resolvedColorScheme), n = x((e) => e.glassEnabled), r = Hd[e];
	return {
		osTheme: e,
		colorScheme: t,
		glassEnabled: n,
		config: r,
		isGlass: r.hasLiquidGlass && n,
		isFloating: r.hasFloatingWindows,
		isMobile: e === "iphone" || e === "android"
	};
}
var Wd = C("battery", [["path", {
	d: "M 22 14 L 22 10",
	key: "nqc4tb"
}], ["rect", {
	x: "2",
	y: "6",
	width: "16",
	height: "12",
	rx: "2",
	key: "13zb55"
}]]), Gd = C("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Kd = C("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), qd = C("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), Jd = C("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), Yd = C("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), Xd = C("sliders-vertical", [
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M12 21v-9",
		key: "17s77i"
	}],
	["path", {
		d: "M12 8V3",
		key: "13r4qs"
	}],
	["path", {
		d: "M17 16h4",
		key: "h1uq16"
	}],
	["path", {
		d: "M19 12V3",
		key: "o1uvq1"
	}],
	["path", {
		d: "M19 21v-5",
		key: "qua636"
	}],
	["path", {
		d: "M3 14h4",
		key: "bcjad9"
	}],
	["path", {
		d: "M5 10V3",
		key: "cb8scm"
	}],
	["path", {
		d: "M5 21v-7",
		key: "1w1uti"
	}]
]), Zd = C("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Qd = C("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), $d = C("wifi", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 14 0",
		key: "1x1e6c"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}]
]);
//#endregion
//#region src/components/menubar/MenuBarClock.tsx
function ef({ forceDark: e = !1 } = {}) {
	let [t, n] = A(""), [r, i] = A(""), a = x((e) => e.wallpaperTextTheme), o = e || a === "dark" ? "text-white/85" : "text-black/80";
	return O(() => {
		let e = () => {
			let e = /* @__PURE__ */ new Date();
			n(e.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})), i(e.toLocaleDateString([], {
				weekday: "short",
				month: "short",
				day: "numeric"
			}));
		};
		e();
		let t = setInterval(e, 1e3);
		return () => clearInterval(t);
	}, []), /* @__PURE__ */ M("div", {
		className: `flex items-center gap-1.5 text-[12px] font-medium ${o} select-none tabular-nums`,
		children: [/* @__PURE__ */ j("span", { children: r }), /* @__PURE__ */ j("span", { children: t })]
	});
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-popover@1.1.20_@types+react-dom@19.2.3_@types+react@19.2.17__@types+rea_d200a077d37637a07724571b522ef0b2/node_modules/@radix-ui/react-popover/dist/index.mjs
var tf = Object.defineProperty, nf = (e, t) => tf(e, "name", {
	value: t,
	configurable: !0
}), rf = "Popover", [af, of] = i(rf, [l]), sf = l(), [cf, lf] = af(rf), uf = /* @__PURE__ */ nf((e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: o, modal: s = !1 } = e, c = sf(t), l = w.useRef(null), [u, d] = w.useState(!1), [f, p] = m({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: rf
	});
	return /* @__PURE__ */ j(a, {
		...c,
		children: /* @__PURE__ */ j(cf, {
			scope: t,
			contentId: _(),
			triggerRef: l,
			open: f,
			onOpenChange: p,
			onOpenToggle: w.useCallback(() => p((e) => !e), [p]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: w.useCallback(() => d(!0), []),
			onCustomAnchorRemove: w.useCallback(() => d(!1), []),
			modal: s,
			children: n
		})
	});
}, "Popover"), df = "PopoverTrigger", ff = /* @__PURE__ */ w.forwardRef(/* @__PURE__ */ nf(function(e, n) {
	let { __scopePopover: r, ...i } = e, a = lf(df, r), o = sf(r), c = b(n, a.triggerRef), l = /* @__PURE__ */ j(s.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.open ? a.contentId : void 0,
		"data-state": Cf(a.open),
		...i,
		ref: c,
		onClick: t(e.onClick, a.onOpenToggle)
	});
	return a.hasCustomAnchor ? l : /* @__PURE__ */ j(f, {
		asChild: !0,
		...o,
		children: l
	});
}, "PopoverTrigger")), pf = "PopoverPortal", [mf, hf] = af(pf, { forceMount: void 0 }), gf = /* @__PURE__ */ nf((e) => {
	let { __scopePopover: t, forceMount: n, children: i, container: a } = e, o = lf(pf, t);
	return /* @__PURE__ */ j(mf, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ j(c, {
			present: n || o.open,
			children: /* @__PURE__ */ j(r, {
				asChild: !0,
				container: a,
				children: i
			})
		})
	});
}, "PopoverPortal"), _f = "PopoverContent", vf = /* @__PURE__ */ w.forwardRef(/* @__PURE__ */ nf(function(e, t) {
	let n = hf(_f, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = lf(_f, e.__scopePopover);
	return /* @__PURE__ */ j(c, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ j(bf, {
			...i,
			ref: t
		}) : /* @__PURE__ */ j(xf, {
			...i,
			ref: t
		})
	});
}, "PopoverContent")), yf = v("PopoverContent.RemoveScroll"), bf = /* @__PURE__ */ w.forwardRef(/* @__PURE__ */ nf(function(e, n) {
	let r = lf(_f, e.__scopePopover), i = w.useRef(null), a = b(n, i), o = w.useRef(!1);
	return w.useEffect(() => {
		let e = i.current;
		if (e) return d(e);
	}, []), /* @__PURE__ */ j(g, {
		as: yf,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ j(Sf, {
			...e,
			ref: a,
			trapFocus: r.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: t(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || r.triggerRef.current?.focus();
			}),
			onPointerDownOutside: t(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				o.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: t(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}, "PopoverContentModal")), xf = /* @__PURE__ */ w.forwardRef(/* @__PURE__ */ nf(function(e, t) {
	let n = lf(_f, e.__scopePopover), r = w.useRef(!1), i = w.useRef(!1);
	return /* @__PURE__ */ j(Sf, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "PopoverContentNonModal")), Sf = /* @__PURE__ */ w.forwardRef(/* @__PURE__ */ nf(function(e, t) {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: d, onInteractOutside: f, ...m } = e, g = lf(_f, n), _ = sf(n);
	return p(), /* @__PURE__ */ j(o, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ j(u, {
			asChild: !0,
			disableOutsidePointerEvents: s,
			onInteractOutside: f,
			onEscapeKeyDown: c,
			onPointerDownOutside: l,
			onFocusOutside: d,
			onDismiss: () => g.onOpenChange(!1),
			deferPointerDownOutside: !0,
			children: /* @__PURE__ */ j(h, {
				"data-state": Cf(g.open),
				role: "dialog",
				id: g.contentId,
				..._,
				...m,
				ref: t,
				style: {
					...m.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}, "PopoverContentImpl"));
function Cf(e) {
	return e ? "open" : "closed";
}
nf(Cf, "getState");
var wf = uf, Tf = ff, Ef = gf, Df = vf, Of = "\n  attribute vec2 a_position;\n  varying vec2 v_uv;\n  void main() {\n    v_uv = a_position * 0.5 + 0.5;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n", kf = "\n  precision mediump float;\n\n  uniform float u_time;\n  uniform vec2  u_resolution;\n\n  void main() {\n    vec2 uv = gl_FragCoord.xy / u_resolution;\n\n    // Two overlapping sine waves for organic caustic feel\n    float wave1 = sin(uv.x * 6.283 + u_time * 0.8) * 0.5 + 0.5;\n    float wave2 = sin(uv.y * 4.712 - u_time * 0.5) * 0.5 + 0.5;\n    float wave3 = sin((uv.x + uv.y) * 5.0 + u_time * 0.3) * 0.5 + 0.5;\n\n    float caustic = wave1 * wave2 * wave3;\n\n    // Edge vignette: fade out near the border so the shimmer doesn't bleed\n    vec2 dist = abs(uv - 0.5) * 2.0;\n    float vignette = 1.0 - smoothstep(0.7, 1.0, max(dist.x, dist.y));\n\n    float alpha = caustic * vignette * 0.1;\n    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);\n  }\n";
//#endregion
//#region src/components/liquid-glass/useGlassShimmer.ts
function Af(e, t, n) {
	let r = e.createShader(t);
	return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.warn("[GlassShimmer] Shader compile error:", e.getShaderInfoLog(r)), e.deleteShader(r), null)) : null;
}
function jf(e, t, n) {
	let r = Af(e, e.VERTEX_SHADER, t), i = Af(e, e.FRAGMENT_SHADER, n);
	if (!r || !i) return null;
	let a = e.createProgram();
	return a ? (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) ? a : (console.warn("[GlassShimmer] Program link error:", e.getProgramInfoLog(a)), null)) : null;
}
function Mf(e) {
	O(() => {
		let t = e.current;
		if (!t) return;
		let n = t.getContext("webgl") ?? t.getContext("experimental-webgl");
		if (!n) return;
		let r = jf(n, Of, kf);
		if (!r) return;
		n.useProgram(r);
		let i = new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1
		]), a = n.createBuffer();
		n.bindBuffer(n.ARRAY_BUFFER, a), n.bufferData(n.ARRAY_BUFFER, i, n.STATIC_DRAW);
		let o = n.getAttribLocation(r, "a_position");
		n.enableVertexAttribArray(o), n.vertexAttribPointer(o, 2, n.FLOAT, !1, 0, 0);
		let s = n.getUniformLocation(r, "u_time"), c = n.getUniformLocation(r, "u_resolution");
		n.enable(n.BLEND), n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA);
		let l, u = (e) => {
			let r = window.devicePixelRatio || 1, i = t.clientWidth * r, a = t.clientHeight * r;
			(t.width !== i || t.height !== a) && (t.width = i, t.height = a), n.viewport(0, 0, t.width, t.height), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), n.uniform1f(s, e * .001), n.uniform2f(c, t.width, t.height), n.drawArrays(n.TRIANGLE_STRIP, 0, 4), l = requestAnimationFrame(u);
		};
		return l = requestAnimationFrame(u), () => cancelAnimationFrame(l);
	}, [e]);
}
//#endregion
//#region src/components/liquid-glass/GlassShimmer.tsx
function Nf({ className: e }) {
	let t = k(null);
	return Mf(t), /* @__PURE__ */ j("canvas", {
		ref: t,
		"aria-hidden": !0,
		className: e,
		style: {
			mixBlendMode: "overlay",
			pointerEvents: "none"
		}
	});
}
//#endregion
//#region src/components/liquid-glass/useLiquidGlass.ts
function Pf() {
	let e = k(null), [t, n] = A(null);
	return O(() => {
		let t = e.current;
		if (!t) return;
		let r = "lg-distort-" + Math.random().toString(36).substring(2, 9), i = () => {
			let e = t.clientWidth, i = t.clientHeight;
			if (e === 0 || i === 0) return;
			let a = window.getComputedStyle(t), o = parseFloat(a.borderRadius) || 14, s = Math.min(24, Math.min(e, i) / 4), c = document.createElement("canvas");
			c.width = e, c.height = i;
			let l = c.getContext("2d"), u = document.createElement("canvas");
			u.width = e, u.height = i;
			let d = u.getContext("2d"), f = l.createImageData(e, i), p = d.createImageData(e, i), m = f.data, h = p.data, g = o, _ = s;
			for (let t = 0; t < i; t++) for (let n = 0; n < e; n++) {
				let r = (t * e + n) * 4, a = n - e / 2, o = t - i / 2, s = Math.abs(a) - (e / 2 - g), c = Math.abs(o) - (i / 2 - g), l = Math.max(s, 0), u = Math.max(c, 0), d = Math.sqrt(l * l + u * u) + Math.min(Math.max(s, c), 0) - g;
				if (d > 0) m[r] = 128, m[r + 1] = 128, m[r + 2] = 0, m[r + 3] = 0, h[r] = 0, h[r + 1] = 0, h[r + 2] = 0, h[r + 3] = 0;
				else {
					let e = -d, t = Math.min(e / _, 1), n = 0, i = 0;
					if (s > 0 && c > 0) {
						let e = Math.sqrt(s * s + c * c);
						e > 0 && (n = s / e * (a >= 0 ? 1 : -1), i = c / e * (o >= 0 ? 1 : -1));
					} else s > c ? (n = a >= 0 ? 1 : -1, i = 0) : (n = 0, i = o >= 0 ? 1 : -1);
					let l = Math.sin(t * Math.PI), u = -n * l, f = -i * l;
					m[r] = Math.round(128 + 127 * u), m[r + 1] = Math.round(128 + 127 * f), m[r + 2] = 0, m[r + 3] = 255;
					let p = -(n * -.707 + i * -.707), g = (.2 + .8 * Math.max(0, p)) * (1 - t);
					h[r] = 255, h[r + 1] = 255, h[r + 2] = 255, h[r + 3] = Math.round(255 * g);
				}
			}
			l.putImageData(f, 0, 0), d.putImageData(p, 0, 0), n({
				filterId: r,
				displacementUrl: c.toDataURL(),
				specularUrl: u.toDataURL(),
				width: e,
				height: i
			});
		};
		i();
		let a = new ResizeObserver(() => {
			i();
		});
		return a.observe(t), () => a.disconnect();
	}, []), {
		elementRef: e,
		maps: t
	};
}
//#endregion
//#region src/components/liquid-glass/LiquidGlass.tsx
var Ff = {
	dock: "var(--radius-dock)",
	menubar: null,
	taskbar: null,
	window: "var(--radius-window)",
	panel: "var(--radius-card)",
	widget: "var(--radius-card)"
}, If = {
	dock: "shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
	menubar: "shadow-sm",
	taskbar: "shadow-none",
	window: "shadow-[0_16px_48px_rgba(0,0,0,0.3)]",
	panel: "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
	widget: "shadow-none"
};
function Lf({ children: e, className: t, variant: n = "panel", forceGlass: r, borderRadius: i, style: a, ref: o, ...s }) {
	let { isGlass: c, colorScheme: l } = Ud(), u = r === void 0 ? c : r, d = x((e) => e.glassMode), f = i ?? Ff[n], p = f ? { borderRadius: f } : {}, m = If[n], { elementRef: h, maps: g } = Pf(), _ = w.useCallback((e) => {
		h.current = e, o && (typeof o == "function" ? o(e) : o.current = e);
	}, [o, h]), v = u && g ? `url(#${g.filterId}) blur(24px)` : u ? "url(#lg-distort) blur(24px)" : "blur(20px)";
	return u ? d === "clear" ? /* @__PURE__ */ M("div", {
		ref: _,
		className: S("relative overflow-hidden border border-white/25 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: [
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				style: {
					...p,
					backdropFilter: "blur(3px)",
					filter: "url(#glass-distortion)",
					isolation: "isolate"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-10 pointer-events-none",
				style: {
					...p,
					background: n === "panel" ? l === "dark" ? "rgba(26, 28, 40, 0.66)" : "rgba(246, 246, 246, 0.62)" : "rgba(255, 255, 255, 0.08)"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-20 pointer-events-none",
				style: {
					...p,
					boxShadow: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25), inset -0.5px -0.5px 1px 1px rgba(255, 255, 255, 0.15)"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			})
		]
	}) : /* @__PURE__ */ M("div", {
		ref: _,
		className: S("relative overflow-hidden", u ? n === "panel" ? S("bg-white/60 dark:bg-[#1a1c26]/64 border-white/40 dark:border-white/15", m) : S("bg-white/12 dark:bg-white/5 border-white/30 dark:border-white/15", m, "inset_0_1px_0_rgba(255,255,255,0.4)") : S(n === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", m), "border", t),
		style: {
			...p,
			backdropFilter: v,
			WebkitBackdropFilter: v,
			...a
		},
		...s,
		children: [
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ j("div", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none z-10",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.5) 70%, transparent 95%)" }
			}),
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ j("div", {
				"aria-hidden": !0,
				className: "absolute inset-y-0 left-0 w-px pointer-events-none z-10",
				style: { background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)" }
			}),
			/* @__PURE__ */ j("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			}),
			u && /* @__PURE__ */ j(Nf, { className: "absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" }),
			u && g && /* @__PURE__ */ j("svg", {
				"aria-hidden": !0,
				style: {
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ M("filter", {
					id: g.filterId,
					colorInterpolationFilters: "sRGB",
					children: [
						/* @__PURE__ */ j("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "0.2",
							result: "blurred_source"
						}),
						/* @__PURE__ */ j("feImage", {
							href: g.displacementUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "displacement_map",
							"result-type": "feImage"
						}),
						/* @__PURE__ */ j("feDisplacementMap", {
							in: "blurred_source",
							in2: "displacement_map",
							scale: 80,
							xChannelSelector: "R",
							yChannelSelector: "G",
							result: "displaced"
						}),
						/* @__PURE__ */ j("feColorMatrix", {
							in: "displaced",
							type: "saturate",
							result: "displaced_saturated",
							values: "6"
						}),
						/* @__PURE__ */ j("feImage", {
							href: g.specularUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "specular_layer"
						}),
						/* @__PURE__ */ j("feComposite", {
							in: "displaced_saturated",
							in2: "specular_layer",
							operator: "in",
							result: "specular_saturated"
						}),
						/* @__PURE__ */ j("feComponentTransfer", {
							in: "specular_layer",
							result: "specular_faded",
							children: /* @__PURE__ */ j("feFuncA", {
								type: "linear",
								slope: "0.3"
							})
						}),
						/* @__PURE__ */ j("feBlend", {
							in: "specular_saturated",
							in2: "displaced",
							mode: "normal",
							result: "withSaturation"
						}),
						/* @__PURE__ */ j("feBlend", {
							in: "specular_faded",
							in2: "withSaturation",
							mode: "normal"
						})
					]
				})
			})
		]
	}) : /* @__PURE__ */ j("div", {
		ref: _,
		className: S("relative overflow-hidden border", n === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: /* @__PURE__ */ j("div", {
			className: "relative z-20 min-w-0 w-full h-full",
			children: e
		})
	});
}
//#endregion
//#region src/components/menubar/ControlCenter.tsx
function Rf({ forceDark: e = !1 } = {}) {
	let [t, n] = A(!1), r = x((e) => e.colorScheme), i = x((e) => e.setColorScheme), a = x((e) => e.glassEnabled), o = x((e) => e.setGlassEnabled), s = x((e) => e.wallpaperTextTheme), [c, l] = A(75), [u, d] = A(80), f = e ? "dark" : s, p = f === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", m = f === "light" ? "text-black/90" : "text-white/90", h = f === "light" ? "text-black/55" : "text-white/55", g = f === "light" ? "text-black/45" : "text-white/45", _ = f === "light" ? "bg-black/5" : "bg-white/5", v = f === "light" ? "hover:bg-black/10 text-black/70" : "hover:bg-white/10 text-white/80";
	return /* @__PURE__ */ M(wf, {
		open: t,
		onOpenChange: n,
		modal: !1,
		children: [/* @__PURE__ */ j(Tf, {
			asChild: !0,
			children: /* @__PURE__ */ j("button", {
				className: `p-1.5 rounded-md transition-colors flex items-center gap-1 ${p}`,
				"aria-label": "Control Center",
				children: /* @__PURE__ */ j(Xd, { className: "w-3.5 h-3.5" })
			})
		}), /* @__PURE__ */ j(Ef, { children: /* @__PURE__ */ j(Df, {
			align: "end",
			sideOffset: 6,
			className: "w-72 z-[9999] outline-none",
			onInteractOutside: (e) => {
				e.target.closest("[data-radix-popper-content-wrapper]") && e.preventDefault();
			},
			onFocusOutside: (e) => e.preventDefault(),
			children: /* @__PURE__ */ j(Lf, {
				variant: "panel",
				className: "p-4 w-full",
				children: /* @__PURE__ */ M("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ M("div", {
							className: S("rounded-[var(--radius-input)] p-3 flex items-center gap-2", _),
							children: [/* @__PURE__ */ j("div", {
								className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ j($d, { className: "w-4 h-4 text-white" })
							}), /* @__PURE__ */ M("div", { children: [/* @__PURE__ */ j("p", {
								className: S("text-xs font-semibold", m),
								children: "Wi-Fi"
							}), /* @__PURE__ */ j("p", {
								className: S("text-[10px]", h),
								children: "Connected"
							})] })]
						}),
						/* @__PURE__ */ M("div", {
							className: S("rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ j("p", {
								className: S("text-xs font-semibold mb-2", m),
								children: "Appearance"
							}), /* @__PURE__ */ j("div", {
								className: "flex gap-1",
								children: [
									{
										id: "light",
										icon: /* @__PURE__ */ j(ie, { className: "w-3 h-3" })
									},
									{
										id: "auto",
										icon: /* @__PURE__ */ j(te, { className: "w-3 h-3" })
									},
									{
										id: "dark",
										icon: /* @__PURE__ */ j(Jd, { className: "w-3 h-3" })
									}
								].map(({ id: e, icon: t }) => /* @__PURE__ */ j("button", {
									onClick: () => i(e),
									className: S("flex-1 flex items-center justify-center py-1 rounded-md text-[10px] transition-colors", r === e ? "bg-blue-500 text-white" : v),
									children: t
								}, e))
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: S("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ M("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ j(ie, { className: S("w-3 h-3", m) }),
									/* @__PURE__ */ j("p", {
										className: S("text-xs font-semibold", m),
										children: "Brightness"
									}),
									/* @__PURE__ */ M("span", {
										className: S("text-[10px] ml-auto", g),
										children: [u, "%"]
									})
								]
							}), /* @__PURE__ */ j("input", {
								type: "range",
								min: 0,
								max: 100,
								value: u,
								onChange: (e) => d(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: S("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ M("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ j(ae, { className: S("w-3 h-3", m) }),
									/* @__PURE__ */ j("p", {
										className: S("text-xs font-semibold", m),
										children: "Sound"
									}),
									/* @__PURE__ */ M("span", {
										className: S("text-[10px] ml-auto", g),
										children: [c, "%"]
									})
								]
							}), /* @__PURE__ */ j("input", {
								type: "range",
								min: 0,
								max: 100,
								value: c,
								onChange: (e) => l(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: S("col-span-2 rounded-[var(--radius-input)] p-3 flex items-center justify-between", _),
							children: [/* @__PURE__ */ j("p", {
								className: S("text-xs font-semibold", m),
								children: "Liquid Glass"
							}), /* @__PURE__ */ j("button", {
								onClick: () => o(!a),
								className: S("w-10 h-5 rounded-full transition-colors relative", a ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
								children: /* @__PURE__ */ j("span", { className: S("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all", a ? "left-5" : "left-0.5") })
							})]
						})
					]
				})
			})
		}) })]
	});
}
//#endregion
//#region src/components/menubar/MenuItems.tsx
var zf = pe("dark");
function Bf() {
	return D(zf) === "light" ? "text-black/80 hover:bg-black/10" : "text-white/85 hover:bg-white/10";
}
var Vf = "flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors";
function Hf({ label: e, shortcut: t, disabled: n, onClick: r }) {
	return /* @__PURE__ */ M("button", {
		disabled: n,
		className: S("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", n ? "text-black/30 dark:text-white/30" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
		onClick: r,
		children: [/* @__PURE__ */ j("span", { children: e }), t && /* @__PURE__ */ j("span", {
			className: "text-[11px] opacity-50 ml-6",
			children: t
		})]
	});
}
function Uf() {
	return /* @__PURE__ */ j("div", { className: "my-1 mx-2 h-px bg-black/10 dark:bg-white/10" });
}
function Wf(e, t) {
	let n = {
		File: "menuFile",
		Edit: "menuEdit",
		View: "menuView",
		Window: "menuWindow",
		Help: "menuHelp",
		History: "menuHistory",
		Format: "menuFormat",
		Shell: "menuShell",
		Go: "menuGo"
	}[e];
	return n ? t[n] : e;
}
function Gf(e, t) {
	let n = {
		"New Window": "menuNewWindow",
		"New Tab": "menuNewTab",
		Close: "menuClose",
		"Close All Windows": "menuCloseAll",
		"Close Window": "menuClose",
		Undo: "menuUndo",
		Redo: "menuRedo",
		Cut: "menuCut",
		Copy: "menuCopy",
		Paste: "menuPaste",
		"Select All": "menuSelectAll",
		Find: "menuFind",
		Minimize: "menuMinimize",
		Zoom: "menuZoom",
		"Bring All to Front": "menuBringAllToFront",
		"Zoom In": "menuZoomIn",
		"Zoom Out": "menuZoomOut",
		"Enter Full Screen": "menuFullscreen",
		"Desktop Layout Help": "menuHelp2",
		"New Finder Window": "menuNewWindow",
		"New Folder": "menuNewWindow"
	}[e];
	return n ? t[n] : e;
}
function Kf({ item: e, t, onSelect: n }) {
	let [r, i] = A(!1), [a, o] = A(null), s = k(null), c = k(null), l = !!e.children && e.children.length > 0, u = E(() => {
		if (c.current &&= (clearTimeout(c.current), null), !s.current) return;
		let e = s.current.getBoundingClientRect();
		o({
			top: e.top - 4,
			left: e.right + 2
		}), i(!0);
	}, []), d = E(() => {
		c.current = setTimeout(() => i(!1), 150);
	}, []);
	return O(() => () => {
		c.current && clearTimeout(c.current);
	}, []), l ? /* @__PURE__ */ M("div", {
		onMouseEnter: u,
		onMouseLeave: d,
		children: [/* @__PURE__ */ M("button", {
			ref: s,
			disabled: e.disabled,
			className: S("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", e.disabled ? "text-black/30 dark:text-white/30" : r ? "bg-accent-active text-white" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
			children: [/* @__PURE__ */ j("span", { children: Gf(e.label, t) }), /* @__PURE__ */ j(ee, { className: "w-3.5 h-3.5 ml-6 opacity-60" })]
		}), r && a && typeof document < "u" && Se(/* @__PURE__ */ j("div", {
			"data-menu-portal": "true",
			className: "fixed z-[99999] outline-none",
			style: {
				top: a.top,
				left: a.left,
				minWidth: 192
			},
			onMouseEnter: u,
			onMouseLeave: d,
			children: /* @__PURE__ */ j(Lf, {
				variant: "panel",
				className: "py-1 px-1 w-full",
				children: e.children.map((e, r) => e.separator ? /* @__PURE__ */ j(Uf, {}, `sep-${r}`) : /* @__PURE__ */ j(Kf, {
					item: e,
					t,
					onSelect: n
				}, e.key))
			})
		}), document.body)]
	}) : /* @__PURE__ */ j(Hf, {
		label: Gf(e.label, t),
		shortcut: e.shortcut,
		disabled: e.disabled,
		onClick: () => n(e)
	});
}
//#endregion
//#region src/components/menubar/DropdownPanel.tsx
function qf({ anchorRef: e, open: t, onClose: n, minWidth: r = 192, children: i }) {
	let [a, o] = A(null), s = k(null);
	return O(() => {
		if (!t || !e.current) return;
		let n = e.current.getBoundingClientRect();
		o({
			top: n.bottom + 6,
			left: n.left
		});
	}, [t, e]), O(() => {
		if (!t) return;
		let r = (t) => {
			let r = t.target;
			e.current?.contains(r) || s.current?.contains(r) || n();
		};
		return document.addEventListener("mousedown", r, !0), () => document.removeEventListener("mousedown", r, !0);
	}, [
		t,
		n,
		e
	]), !t || !a || typeof document > "u" ? null : Se(/* @__PURE__ */ j("div", {
		ref: s,
		"data-menu-portal": "true",
		className: "fixed z-[99999] outline-none",
		style: {
			top: a.top,
			left: a.left,
			minWidth: r
		},
		children: /* @__PURE__ */ j(Lf, {
			variant: "panel",
			className: "py-1 px-1 w-full",
			children: i
		})
	}), document.body);
}
//#endregion
//#region src/components/menubar/PersonalAboutDialog.tsx
function Jf({ onClose: e }) {
	let [t, n] = A({
		x: 0,
		y: 0
	}), [r, i] = A(!1), a = k(null), o = E((e) => {
		e.target.closest("button") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), a.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: t.x,
			oy: t.y
		});
	}, [t]), s = E((e) => {
		a.current && n({
			x: a.current.ox + (e.clientX - a.current.mx),
			y: a.current.oy + (e.clientY - a.current.my)
		});
	}, []), c = E(() => {
		a.current = null;
	}, []);
	return typeof document > "u" ? null : Se(/* @__PURE__ */ M("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99999 },
		children: [/* @__PURE__ */ j("div", {
			className: "absolute inset-0 pointer-events-auto",
			onClick: e
		}), /* @__PURE__ */ M("div", {
			className: "relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-80 overflow-hidden pointer-events-auto",
			style: { transform: `translate(${t.x}px, ${t.y}px)` },
			onPointerMove: s,
			onPointerUp: c,
			onPointerCancel: c,
			children: [/* @__PURE__ */ j("div", {
				className: "w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: o,
				onMouseEnter: () => i(!0),
				onMouseLeave: () => i(!1),
				children: /* @__PURE__ */ M("div", {
					className: "flex items-center gap-2",
					onPointerDown: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ j("button", {
							onClick: e,
							className: "w-3.5 h-3.5 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer",
							style: { backgroundColor: "#ff5f57" },
							children: r && /* @__PURE__ */ j(oe, {
								className: "w-2 h-2 text-red-900/80",
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ j("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						}),
						/* @__PURE__ */ j("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						})
					]
				})
			}), /* @__PURE__ */ M("div", {
				className: "flex flex-col items-center px-8 pt-6 pb-7 gap-2 select-none",
				children: [
					/* @__PURE__ */ j("div", {
						className: "w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg",
						children: "S"
					}),
					/* @__PURE__ */ j("div", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90",
						children: "Skyline"
					}),
					/* @__PURE__ */ j("div", {
						className: "text-[13px] text-black/55 dark:text-white/55",
						children: "sonth87@gmail.com"
					}),
					/* @__PURE__ */ j("div", { className: "w-full h-px bg-black/10 dark:bg-white/10 my-2" }),
					/* @__PURE__ */ M("div", {
						className: "text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed",
						children: [
							"macOS Desktop Layout",
							/* @__PURE__ */ j("br", {}),
							"Version 1.0 · Built with Next.js & React"
						]
					}),
					/* @__PURE__ */ M("a", {
						href: "https://github.com/sonth87/device-layout",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1 pointer-events-auto",
						children: [/* @__PURE__ */ j("svg", {
							viewBox: "0 0 24 24",
							className: "w-3.5 h-3.5 fill-current",
							"aria-hidden": "true",
							children: /* @__PURE__ */ j("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" })
						}), "sonth87/device-layout"]
					}),
					/* @__PURE__ */ j("div", {
						className: "text-[11px] text-black/35 dark:text-white/35 text-center mt-1",
						children: "© 2026 Skyline. All rights reserved."
					})
				]
			})]
		})]
	}), document.body);
}
//#endregion
//#region src/components/menubar/AppleMenuDropdown.tsx
function Yf({ activeId: e, setActiveId: t }) {
	let n = e === "apple", r = E((e) => {
		t((typeof e == "function" ? e(n) : e) ? "apple" : null);
	}, [n, t]), i = Bf(), [a, o] = A(!1), s = k(null), c = x((e) => e.apps), l = x((e) => e.launchApp), { t: u } = se(), d = E(() => r(!1), [r]);
	return /* @__PURE__ */ M(xe, { children: [
		/* @__PURE__ */ j("button", {
			ref: s,
			onMouseDown: (e) => {
				e.button === 0 && r((e) => !e);
			},
			onMouseEnter: () => {
				e !== null && t("apple");
			},
			className: S(Vf, n ? "bg-accent-active text-white" : i),
			children: /* @__PURE__ */ j("span", {
				className: "text-2xl leading-none font-sans",
				children: ""
			})
		}),
		/* @__PURE__ */ M(qf, {
			anchorRef: s,
			open: n,
			onClose: d,
			minWidth: 220,
			children: [
				/* @__PURE__ */ j(Hf, {
					label: u.aboutThisMac,
					onClick: () => {
						r(!1), o(!0);
					}
				}),
				/* @__PURE__ */ j(Uf, {}),
				/* @__PURE__ */ j(Hf, {
					label: u.systemSettings,
					onClick: () => {
						r(!1);
						let e = c.settings;
						e && l(e);
					}
				})
			]
		}),
		a && /* @__PURE__ */ j(Jf, { onClose: () => o(!1) })
	] });
}
//#endregion
//#region src/components/menubar/AppNameDropdown.tsx
function Xf({ appConfig: e, appId: t, activeId: n, setActiveId: r }) {
	let i = n === "app-name", a = E((e) => {
		r((typeof e == "function" ? e(i) : e) ? "app-name" : null);
	}, [i, r]), o = Bf(), s = k(null), c = x((e) => e.closeWindow), { t: l, getAppName: u } = se();
	if (!e) return null;
	let d = u(e.id, e.name), f = E(() => a(!1), [a]), p = (e) => {
		t && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e
		} }));
	}, m = () => {
		if (a(!1), !t) return;
		let { windows: e } = x.getState();
		Object.values(e).filter((e) => e.appId === t).forEach((e) => c(e.id));
	}, h = e?.appNameMenuExtraItems, g = (e) => {
		a(!1), e.action && t && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} }));
	};
	return /* @__PURE__ */ M(xe, { children: [/* @__PURE__ */ j("button", {
		ref: s,
		onMouseDown: (e) => {
			e.button === 0 && a((e) => !e);
		},
		onMouseEnter: () => {
			n !== null && r("app-name");
		},
		className: S(Vf, "font-semibold", i ? "bg-accent-active text-white" : o),
		children: /* @__PURE__ */ j("span", {
			className: "text-[13px] font-semibold",
			children: d
		})
	}), /* @__PURE__ */ M(qf, {
		anchorRef: s,
		open: i,
		onClose: f,
		minWidth: 208,
		children: [
			/* @__PURE__ */ j(Hf, {
				label: `${l.aboutApp} ${d}`,
				onClick: () => {
					a(!1), p("about");
				},
				disabled: !t
			}),
			/* @__PURE__ */ j(Uf, {}),
			h && h.length > 0 ? h.map((e, t) => e.separator ? /* @__PURE__ */ j(Uf, {}, `sep-${t}`) : /* @__PURE__ */ j(Kf, {
				item: e,
				t: l,
				onSelect: g
			}, e.key)) : /* @__PURE__ */ M(xe, { children: [
				/* @__PURE__ */ j(Hf, {
					label: l.services,
					disabled: !0
				}),
				/* @__PURE__ */ j(Uf, {}),
				/* @__PURE__ */ j(Hf, {
					label: `${l.hide} ${d}`,
					shortcut: "⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ j(Hf, {
					label: l.hideOthers,
					shortcut: "⌥⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ j(Hf, {
					label: l.showAll,
					disabled: !0
				})
			] }),
			/* @__PURE__ */ j(Uf, {}),
			/* @__PURE__ */ j(Hf, {
				label: `${l.quit} ${d}`,
				shortcut: "⌘Q",
				onClick: m
			})
		]
	})] });
}
//#endregion
//#region src/components/menubar/MenuDropdown.tsx
function Zf({ label: e, items: t, appId: n, windowId: r, activeId: i, setActiveId: a }) {
	let o = i === e, s = E((t) => {
		a((typeof t == "function" ? t(o) : t) ? e : null);
	}, [
		o,
		e,
		a
	]), c = Bf(), l = k(null), { t: u } = se(), d = E(() => s(!1), [s]), f = (e) => {
		s(!1), e.action && n && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: n,
			action: e.action,
			windowId: r
		} }));
	};
	return /* @__PURE__ */ M(xe, { children: [/* @__PURE__ */ j("button", {
		ref: l,
		onMouseDown: (e) => {
			e.button === 0 && s((e) => !e);
		},
		onMouseEnter: () => {
			i !== null && a(e);
		},
		className: S(Vf, o ? "bg-accent-active text-white" : c),
		children: Wf(e, u)
	}), /* @__PURE__ */ j(qf, {
		anchorRef: l,
		open: o,
		onClose: d,
		minWidth: 192,
		children: t.map((e, t) => e.separator ? /* @__PURE__ */ j(Uf, {}, `sep-${t}`) : /* @__PURE__ */ j(Kf, {
			item: e,
			t: u,
			onSelect: f
		}, e.key))
	})] });
}
//#endregion
//#region src/contexts/SimpleModeContext.tsx
var Qf = pe({
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
	allowedOSThemes: [
		"macos",
		"windows",
		"ipad",
		"iphone",
		"android"
	],
	allowDarkModeToggle: !0
});
function $f({ features: e, children: t }) {
	return /* @__PURE__ */ j(Qf.Provider, {
		value: e,
		children: t
	});
}
function ep() {
	return D(Qf);
}
//#endregion
//#region src/components/menubar/MenuBar.tsx
function tp({ onSpotlight: e, isSimpleMode: t = !1, forceDark: n = !1, fallbackMenuBarAppId: r = null } = {}) {
	let i = ep(), a = x((e) => e.activeAppId), o = x((e) => e.apps), s = a ?? r, c = s ? o[s] : null, l = i.menuBar.appleMenu, u = i.menuBar.appNameMenu && !!c, d = c?.menuBarMenus ?? [], f = x((e) => e.wallpaperTextTheme), p = n ? "dark" : f, m = S(Vf, "px-2", p === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10"), [h, g] = A(null);
	if (!i.menuBar.enabled) return null;
	let _ = i.menuBar.spotlight || i.menuBar.controlCenter || i.menuBar.clock;
	return /* @__PURE__ */ j(zf.Provider, {
		value: p,
		children: /* @__PURE__ */ j(Lf, {
			variant: "menubar",
			forceGlass: !n && void 0,
			className: n ? "border-black/70 bg-[#111318] shadow-none" : void 0,
			children: /* @__PURE__ */ M("div", {
				"data-menubar": "true",
				"data-fullscreen-menubar": n ? "true" : void 0,
				className: "flex h-(--menubar-height) w-full items-center px-2",
				children: [
					/* @__PURE__ */ M("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							l && /* @__PURE__ */ j(Yf, {
								activeId: h,
								setActiveId: g
							}),
							u && /* @__PURE__ */ j(Xf, {
								appConfig: c,
								appId: a,
								activeId: h,
								setActiveId: g
							}),
							d.map((e) => /* @__PURE__ */ j(Zf, {
								label: e.label,
								items: e.items,
								appId: a,
								activeId: h,
								setActiveId: g
							}, e.label))
						]
					}),
					/* @__PURE__ */ j("div", { className: "flex-1" }),
					_ && /* @__PURE__ */ M("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							i.menuBar.spotlight && /* @__PURE__ */ j("button", {
								onClick: e,
								className: m,
								title: "Spotlight Search (⌘Space)",
								children: /* @__PURE__ */ j(re, { className: "w-3.5 h-3.5" })
							}),
							i.menuBar.controlCenter && /* @__PURE__ */ M(xe, { children: [
								/* @__PURE__ */ j("button", {
									className: m,
									children: /* @__PURE__ */ j($d, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ j("button", {
									className: m,
									children: /* @__PURE__ */ j(Wd, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ j(Rf, { forceDark: n })
							] }),
							i.menuBar.clock && /* @__PURE__ */ j("div", {
								className: "flex h-6 items-center rounded-md px-2",
								children: /* @__PURE__ */ j(ef, { forceDark: n })
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/apps/AppErrorBoundary.tsx
function np({ appName: e, error: t, onRetry: n }) {
	let { t: r } = se();
	return /* @__PURE__ */ M("div", {
		className: "flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ j(Zd, { className: "h-6 w-6 text-black/30 dark:text-white/30" }),
			/* @__PURE__ */ M("div", {
				className: "text-sm font-medium text-black/70 dark:text-white/70",
				children: [
					e,
					" ",
					r.appCrashedTitle
				]
			}),
			/* @__PURE__ */ j("div", {
				className: "max-w-xs break-words text-xs text-black/40 dark:text-white/40",
				children: t.message
			}),
			/* @__PURE__ */ M("button", {
				type: "button",
				onClick: n,
				className: "mt-1 flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-medium text-black/70 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15",
				children: [/* @__PURE__ */ j(ne, { className: "h-3 w-3" }), r.appCrashedRetry]
			})
		]
	});
}
var rp = class extends ue {
	constructor(...e) {
		super(...e), this.state = {
			error: null,
			retryCount: 0
		}, this.handleRetry = () => {
			this.setState((e) => ({
				error: null,
				retryCount: e.retryCount + 1
			}));
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {
		console.error(`[AppErrorBoundary] App "${this.props.appId}" crashed:`, e, t.componentStack);
	}
	render() {
		return this.state.error ? /* @__PURE__ */ j(np, {
			appName: this.props.appName,
			error: this.state.error,
			onRetry: this.handleRetry
		}) : /* @__PURE__ */ j("div", {
			className: "h-full w-full",
			children: this.props.children
		}, this.state.retryCount);
	}
}, ip = {
	Finder: T(() => import("./Finder-Br1jRded.js").then((e) => ({ default: e.Finder }))),
	Terminal: T(() => import("./Terminal-CVvz202P.js").then((e) => ({ default: e.Terminal }))),
	Settings: T(() => import("./Settings-BbxmVUmK.js").then((e) => ({ default: e.Settings }))),
	Browser: T(() => import("./Browser-D0hK3jv7.js").then((e) => ({ default: e.Browser }))),
	TextEditor: T(() => import("./TextEditor-D88hduQk.js").then((e) => ({ default: e.TextEditor }))),
	Clock: T(() => import("./Clock-DGCswWvh.js").then((e) => ({ default: e.Clock }))),
	Calculator: T(() => import("./Calculator-DRpjFGp6.js").then((e) => ({ default: e.Calculator }))),
	Notes: T(() => import("./Notes-BgOWa-RW.js").then((e) => ({ default: e.Notes }))),
	Photos: T(() => import("./Photos-ljwm0AL5.js").then((e) => ({ default: e.Photos }))),
	Music: T(() => import("./Music-D0Xnwc2s.js").then((e) => ({ default: e.Music }))),
	Calendar: T(() => import("./Calendar-Cgj6vqTi.js").then((e) => ({ default: e.Calendar }))),
	Messages: T(() => import("./Messages-CIMtiVJb.js").then((e) => ({ default: e.Messages }))),
	IframeApp: T(() => import("./IframeApp-4ruu0eHm.js").then((e) => ({ default: e.IframeApp }))),
	MdxApp: T(() => import("./MdxApp-CsGE6DjV.js").then((e) => ({ default: e.MdxApp })))
};
function ap() {
	return /* @__PURE__ */ j("div", {
		className: "flex items-center justify-center h-full w-full",
		children: /* @__PURE__ */ j(Kd, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
	});
}
function op({ appId: e, windowId: t }) {
	let n = x((t) => t.apps[e]);
	if (!n) return /* @__PURE__ */ M("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["App not found: ", e]
	});
	if (n.render) {
		let r = n.render;
		return /* @__PURE__ */ j(fe, {
			fallback: /* @__PURE__ */ j(ap, {}),
			children: /* @__PURE__ */ j(ce, { children: /* @__PURE__ */ j(rp, {
				appId: e,
				appName: n.name,
				children: /* @__PURE__ */ j(r, {
					appId: e,
					windowId: t
				})
			}) })
		});
	}
	let r = n.component ? ip[n.component] : void 0;
	return r ? /* @__PURE__ */ j(fe, {
		fallback: /* @__PURE__ */ j(ap, {}),
		children: /* @__PURE__ */ j(ce, { children: /* @__PURE__ */ j(rp, {
			appId: e,
			appName: n.name,
			children: /* @__PURE__ */ j(r, {
				appId: e,
				windowId: t
			})
		}) })
	}) : /* @__PURE__ */ M("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["Component not registered: ", n.component ?? "(none)"]
	});
}
//#endregion
//#region src/components/mobile/MobileMenuSheet.tsx
function sp({ menus: e, appId: t, open: n, onClose: r }) {
	let { t: i } = se(), [a, o] = A(null), s = E((e) => {
		e.action && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} })), r();
	}, [t, r]);
	return typeof document > "u" ? null : Se(/* @__PURE__ */ j(ul, { children: n && /* @__PURE__ */ M(xe, { children: [/* @__PURE__ */ j(Vd.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 bg-black/30 z-[2000]",
		onClick: r
	}, "backdrop"), /* @__PURE__ */ M(Vd.div, {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 38
		},
		className: "fixed bottom-0 left-0 right-0 z-[2001] max-h-[75vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-neutral-900 shadow-2xl",
		children: [/* @__PURE__ */ j("div", {
			className: "sticky top-0 flex justify-center py-2 bg-white dark:bg-neutral-900",
			children: /* @__PURE__ */ j("div", { className: "w-10 h-1 rounded-full bg-black/20 dark:bg-white/25" })
		}), /* @__PURE__ */ j("div", {
			className: "px-4 pb-8",
			children: e.map((e) => /* @__PURE__ */ M("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ j("div", {
					className: "px-1 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40",
					children: Wf(e.label, i)
				}), /* @__PURE__ */ j("div", {
					className: "rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.06]",
					children: e.items.map((e, t) => e.separator ? /* @__PURE__ */ j("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${t}`) : /* @__PURE__ */ j(cp, {
						item: e,
						t: i,
						onSelect: s,
						expandedKey: a,
						setExpandedKey: o
					}, e.key))
				})]
			}, e.label))
		})]
	}, "sheet")] }) }), document.body);
}
function cp({ item: e, t, onSelect: n, expandedKey: r, setExpandedKey: i, depth: a = 0 }) {
	let o = !!e.children && e.children.length > 0, s = r === e.key;
	return o ? /* @__PURE__ */ M("div", { children: [/* @__PURE__ */ M("button", {
		onClick: () => i(s ? null : e.key),
		style: { paddingLeft: 12 + a * 16 },
		className: "w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 transition-colors",
		children: [/* @__PURE__ */ j("span", { children: Gf(e.label, t) }), /* @__PURE__ */ j(Gd, { className: S("w-4 h-4 opacity-50 transition-transform", s && "rotate-180") })]
	}), /* @__PURE__ */ j(ul, {
		initial: !1,
		children: s && /* @__PURE__ */ j(Vd.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .16 },
			className: "overflow-hidden",
			children: e.children.map((e, o) => e.separator ? /* @__PURE__ */ j("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${o}`) : /* @__PURE__ */ j(cp, {
				item: e,
				t,
				onSelect: n,
				expandedKey: r,
				setExpandedKey: i,
				depth: a + 1
			}, e.key))
		})
	})] }) : /* @__PURE__ */ M("button", {
		disabled: e.disabled,
		onClick: () => n(e),
		style: { paddingLeft: 12 + a * 16 },
		className: S("w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left active:bg-black/5 dark:active:bg-white/10 transition-colors", e.disabled ? "text-black/30 dark:text-white/30" : "text-black dark:text-white"),
		children: [/* @__PURE__ */ j("span", { children: Gf(e.label, t) }), e.shortcut && /* @__PURE__ */ j("span", {
			className: "text-[12px] opacity-40 ml-4",
			children: e.shortcut
		})]
	});
}
//#endregion
//#region src/components/mobile/MobileAppViewer.tsx
var lp = pe(null);
function up() {
	return D(lp);
}
function dp({ statusBarHeight: e, navBarHeight: t, homeIndicatorHeight: n = 20 }) {
	let r = x((e) => e.windows), i = x((e) => e.apps), a = x((e) => e.closeWindow), [o, s] = A(!1), [c, l] = A(!1), u = Object.values(r).filter((e) => !e.isMinimized).sort((e, t) => t.zIndex - e.zIndex), d = u[0] ?? null, f = E(() => {
		d && a(d.id);
	}, [d, a]), p = d ? i[d.appId] : null, m = Bd(), h = sd(0), g = ud(h, [0, -220], [1, .75]), _ = ud(h, [0, -220], [0, 48]);
	return /* @__PURE__ */ j(ul, { children: d && p && /* @__PURE__ */ M(Vd.div, {
		initial: {
			scale: .88,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		exit: {
			scale: .88,
			opacity: 0
		},
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 36
		},
		className: "absolute inset-0 z-[500] bg-white dark:bg-neutral-900 flex flex-col overflow-hidden",
		style: {
			paddingTop: e,
			scale: g,
			y: h,
			borderRadius: _,
			transformOrigin: "center bottom"
		},
		drag: "y",
		dragControls: m,
		dragListener: !1,
		dragConstraints: {
			top: -220,
			bottom: 0
		},
		dragElastic: {
			top: .15,
			bottom: 0
		},
		onDragEnd: (e, t) => {
			t.offset.y < -85 && u.forEach((e) => a(e.id)), Ld(h, 0, {
				type: "spring",
				stiffness: 300,
				damping: 30
			});
		},
		children: [
			/* @__PURE__ */ j(ul, {
				initial: !1,
				children: !o && /* @__PURE__ */ M(Vd.div, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: 44,
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					transition: { duration: .18 },
					className: "flex items-center gap-2 px-3 border-b border-black/8 dark:border-white/8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shrink-0 overflow-hidden",
					children: [
						/* @__PURE__ */ j("button", {
							onClick: f,
							className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ j("svg", {
								className: "w-5 h-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ j("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M15 19l-7-7 7-7"
								})
							})
						}),
						/* @__PURE__ */ j("span", {
							className: "flex-1 text-center text-[15px] font-semibold text-black dark:text-white truncate",
							children: p.name
						}),
						p.menuBarMenus && p.menuBarMenus.length > 0 ? /* @__PURE__ */ j("button", {
							onClick: () => l(!0),
							className: "w-5 h-5 flex items-center justify-center text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ j(qd, { className: "w-5 h-5" })
						}) : /* @__PURE__ */ j("div", { className: "w-5" })
					]
				}, "app-header")
			}),
			/* @__PURE__ */ j("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ j(lp.Provider, {
					value: s,
					children: /* @__PURE__ */ j(op, {
						appId: d.appId,
						windowId: d.id
					})
				})
			}),
			p.menuBarMenus && p.menuBarMenus.length > 0 && /* @__PURE__ */ j(sp, {
				menus: p.menuBarMenus,
				appId: d.appId,
				open: c,
				onClose: () => l(!1)
			}),
			/* @__PURE__ */ j("div", { style: { height: t + n } }),
			/* @__PURE__ */ j("div", {
				onPointerDown: (e) => m.start(e),
				className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 flex items-center justify-center z-[1000] pointer-events-auto cursor-grab active:cursor-grabbing",
				children: /* @__PURE__ */ j("div", { className: "w-32 h-1.5 bg-black/30 dark:bg-white/35 hover:bg-black/50 dark:hover:bg-white/50 rounded-full" })
			})
		]
	}, d.id) });
}
//#endregion
export { ul as C, R as D, nr as E, sd as S, q as T, Ud as _, $f as a, Ld as b, Lf as c, Qd as d, Xd as f, Wd as g, Gd as h, tp as i, ef as l, Jd as m, up as n, ep as o, Yd as p, op as r, Zf as s, dp as t, $d as u, Hd as v, $c as w, ud as x, Vd as y };
