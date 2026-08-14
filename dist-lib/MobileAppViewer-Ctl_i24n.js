import { C as e, E as t, O as n, S as r, T as i, a, b as o, c as s, d as c, f as l, g as u, i as d, l as f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, v as x } from "./Combination-dkRdWOFm.js";
import { t as S } from "./store-DNT7LGUT.js";
import { t as C } from "./utils-B6YmNDS2.js";
import { t as w } from "./createLucideIcon--WjuKCts.js";
import { t as T } from "./chevron-right-BcSxNxws.js";
import { t as ee } from "./monitor-CDDW7biH.js";
import { t as te } from "./refresh-cw-BNk9TuR7.js";
import { t as ne } from "./search-BKG97C0x.js";
import { t as re } from "./sun-DdSv2tyc.js";
import { t as ie } from "./volume-2-DAfADR-a.js";
import { t as ae } from "./x-BYw6fhgP.js";
import { t as oe } from "./useTranslation-CPcDMIDQ.js";
import { t as se } from "./AppViewport-BDJLAndL.js";
import * as E from "react";
import { Children as ce, Component as le, Fragment as ue, Suspense as de, createContext as D, createElement as fe, forwardRef as pe, isValidElement as me, lazy as O, useCallback as k, useContext as A, useEffect as j, useId as he, useInsertionEffect as ge, useLayoutEffect as _e, useMemo as ve, useRef as M, useState as N } from "react";
import { Fragment as ye, jsx as P, jsxs as F } from "react/jsx-runtime";
import { createPortal as be } from "react-dom";
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var xe = D({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function Se(e) {
	let t = M(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var Ce = typeof window < "u" ? _e : j, we = /* @__PURE__ */ D(null);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/array.mjs
function Te(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Ee(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/clamp.mjs
var De = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function Oe(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/errors.mjs
var ke = () => {}, I = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (ke = (e, t, n) => {
	!e && typeof console < "u" && console.warn(Oe(t, n));
}, I = (e, t, n) => {
	if (!e) throw Error(Oe(t, n));
});
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/global-config.mjs
var Ae = {}, je = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-object.mjs
function Me(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var Ne = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Pe(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/noop.mjs
var L = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Fe = (e, t) => (n) => t(e(n)), Ie = (...e) => e.reduce(Fe), Le = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Re = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Te(this.subscriptions, e), () => Ee(this.subscriptions, e);
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
}, R = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, z = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function ze(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/warn-once.mjs
var Be = /* @__PURE__ */ new Set();
function Ve(e, t, n) {
	e || Be.has(t) || (console.warn(Oe(t, n)), Be.add(t));
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/wrap.mjs
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
function qe(e, t, n, r) {
	if (e === t && n === r) return L;
	let i = (t) => Ke(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Ue(i(e), t, r);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Je = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ye = (e) => (t) => 1 - e(1 - t), Xe = /*@__PURE__*/ qe(.33, 1.53, .69, .99), Ze = /*@__PURE__*/ Ye(Xe), Qe = /*@__PURE__*/ Je(Ze), $e = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Ze(e) : .5 * (2 - 2 ** (-10 * (e - 1))), et = (e) => 1 - Math.sin(Math.acos(e)), tt = Ye(et), nt = Je(et), rt = /*@__PURE__*/ qe(.42, 0, 1, 1), it = /*@__PURE__*/ qe(0, 0, .58, 1), at = /*@__PURE__*/ qe(.42, 0, .58, 1), ot = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function st(e, t) {
	return ot(e) ? e[He(0, e.length, t)] : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var ct = (e) => Array.isArray(e) && typeof e[0] == "number", lt = {
	linear: L,
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
	if (ct(e)) {
		I(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return qe(t, n, r, i);
	} else if (ut(e)) return I(lt[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), lt[e];
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
], pt = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function mt(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && pt.value && pt.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var ht = 40;
function gt(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = ft.reduce((e, n) => (e[n] = mt(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = Ae.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, ht), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: B, cancel: _t, state: V, steps: vt } = /* @__PURE__ */ gt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : L, !0), yt;
function bt() {
	yt = void 0;
}
var H = {
	now: () => (yt === void 0 && H.set(V.isProcessing || Ae.useManualTiming ? V.timestamp : performance.now()), yt),
	set: (e) => {
		yt = e, queueMicrotask(bt);
	}
}, xt = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, St = (e) => (t) => typeof t == "string" && t.startsWith(e), Ct = /*@__PURE__*/ St("--"), wt = /*@__PURE__*/ St("var(--"), Tt = (e) => wt(e) ? Et.test(e.split("/*")[0].trim()) : !1, Et = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Dt(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var Ot = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, kt = {
	...Ot,
	transform: (e) => De(0, 1, e)
}, At = {
	...Ot,
	default: 1
}, jt = (e) => Math.round(e * 1e5) / 1e5, Mt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Nt(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Pt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ft = (e, t) => (n) => !!(typeof n == "string" && Pt.test(n) && n.startsWith(e) || t && !Nt(n) && Object.prototype.hasOwnProperty.call(n, t)), It = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Mt);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Lt = (e) => De(0, 255, e), Rt = {
	...Ot,
	transform: (e) => Math.round(Lt(e))
}, zt = {
	test: /*@__PURE__*/ Ft("rgb", "red"),
	parse: /*@__PURE__*/ It("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Rt.transform(e) + ", " + Rt.transform(t) + ", " + Rt.transform(n) + ", " + jt(kt.transform(r)) + ")"
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Bt(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Vt = {
	test: /*@__PURE__*/ Ft("#"),
	parse: Bt,
	transform: zt.transform
}, Ht = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Ut = /*@__PURE__*/ Ht("deg"), Wt = /*@__PURE__*/ Ht("%"), U = /*@__PURE__*/ Ht("px"), Gt = /*@__PURE__*/ Ht("vh"), Kt = /*@__PURE__*/ Ht("vw"), qt = {
	...Wt,
	parse: (e) => Wt.parse(e) / 100,
	transform: (e) => Wt.transform(e * 100)
}, Jt = {
	test: /*@__PURE__*/ Ft("hsl", "hue"),
	parse: /*@__PURE__*/ It("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Wt.transform(jt(t)) + ", " + Wt.transform(jt(n)) + ", " + jt(kt.transform(r)) + ")"
}, W = {
	test: (e) => zt.test(e) || Vt.test(e) || Jt.test(e),
	parse: (e) => zt.test(e) ? zt.parse(e) : Jt.test(e) ? Jt.parse(e) : Vt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? zt.transform(e) : Jt.transform(e),
	getAnimatableNone: (e) => {
		let t = W.parse(e);
		return t.alpha = 0, W.transform(t);
	}
}, Yt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Xt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Mt)?.length || 0) + (e.match(Yt)?.length || 0) > 0;
}
var Zt = "number", Qt = "color", $t = "var", en = "var(", tn = "${}", nn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rn(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(nn, (e) => (W.test(e) ? (r.color.push(a), i.push(Qt), n.push(W.parse(e))) : e.startsWith(en) ? (r.var.push(a), i.push($t), n.push(e)) : (r.number.push(a), i.push(Zt), n.push(parseFloat(e))), ++a, tn)).split(tn),
		indexes: r,
		types: i
	};
}
function an(e) {
	return rn(e).values;
}
function on({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Zt ? i += jt(r[a]) : e === Qt ? i += W.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function sn(e) {
	return on(rn(e));
}
var cn = (e) => typeof e == "number" ? 0 : W.test(e) ? W.getAnimatableNone(e) : e, ln = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : cn(e);
function un(e) {
	let t = rn(e);
	return on(t)(t.values.map((e, n) => ln(e, t.split[n])));
}
var G = {
	test: Xt,
	parse: an,
	createTransformer: sn,
	getAnimatableNone: un
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function dn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function fn({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = dn(s, r, e + 1 / 3), a = dn(s, r, e), o = dn(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function pn(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var K = (e, t, n) => e + (t - e) * n, mn = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, hn = [
	Vt,
	zt,
	Jt
], gn = (e) => hn.find((t) => t.test(e));
function _n(e) {
	let t = gn(e);
	if (ke(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === Jt && (n = fn(n)), n;
}
var vn = (e, t) => {
	let n = _n(e), r = _n(t);
	if (!n || !r) return pn(e, t);
	let i = { ...n };
	return (e) => (i.red = mn(n.red, r.red, e), i.green = mn(n.green, r.green, e), i.blue = mn(n.blue, r.blue, e), i.alpha = K(n.alpha, r.alpha, e), zt.transform(i));
}, yn = /* @__PURE__ */ new Set(["none", "hidden"]);
function bn(e, t) {
	return yn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function xn(e, t) {
	return (n) => K(e, t, n);
}
function Sn(e) {
	return typeof e == "number" ? xn : typeof e == "string" ? Tt(e) ? pn : W.test(e) ? vn : En : Array.isArray(e) ? Cn : typeof e == "object" ? W.test(e) ? vn : wn : pn;
}
function Cn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Sn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function wn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Sn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Tn(e, t) {
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
var En = (e, t) => {
	let n = G.createTransformer(t), r = rn(e), i = rn(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? yn.has(e) && !i.values.length || yn.has(t) && !r.values.length ? bn(e, t) : Ie(Cn(Tn(r, i), i.values), n) : (ke(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), pn(e, t));
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function Dn(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : Sn(e)(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var On = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => B.update(t, e),
		stop: () => _t(t),
		now: () => V.isProcessing ? V.timestamp : H.now()
	};
}, kn = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, An = 2e4;
function jn(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Mn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(jn(r), An);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ z(i)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var q = {
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
function Nn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Pn = 12;
function Fn(e, t, n) {
	let r = n;
	for (let n = 1; n < Pn; n++) r -= e(r) / t(r);
	return r;
}
var In = .001;
function Ln({ duration: e = q.duration, bounce: t = q.bounce, velocity: n = q.velocity, mass: r = q.mass }) {
	let i, a;
	ke(e <= /* @__PURE__ */ R(q.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = De(q.minDamping, q.maxDamping, o), e = De(q.minDuration, q.maxDuration, /* @__PURE__ */ z(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Nn(t, o), c = Math.exp(-i);
		return In - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Nn(t ** 2, o);
		return (-i(t) + In > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Fn(i, a, s);
	if (e = /* @__PURE__ */ R(e), isNaN(c)) return {
		stiffness: q.stiffness,
		damping: q.damping,
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
var Rn = ["duration", "bounce"], zn = [
	"stiffness",
	"damping",
	"mass"
];
function Bn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Vn(e) {
	let t = {
		velocity: q.velocity,
		stiffness: q.stiffness,
		damping: q.damping,
		mass: q.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Bn(e, zn) && Bn(e, Rn)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * De(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: q.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Ln({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: q.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Hn(e = q.visualDuration, t = q.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Vn({
		...n,
		velocity: -/* @__PURE__ */ z(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ z(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? q.restSpeed.granular : q.restSpeed.default, i ||= v ? q.restDelta.granular : q.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = Nn(_, h), S = (m + h * _ * g) / x, y = (e) => {
		let t = Math.exp(-h * _ * e);
		return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
	}, C = h * _ * S + g * x, w = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
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
	let T = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ R(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ R(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ R(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(jn(T), An), t = kn((t) => T.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return T;
}
Hn.applyToOptions = (e) => {
	let t = Mn(e, 100, Hn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ R(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Un = 5;
function Wn(e, t, n) {
	let r = Math.max(t - Un, 0);
	return ze(n - e(r), t - r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Gn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Hn({
			keyframes: [f.value, m(f.value)],
			velocity: Wn(y, e, f.value),
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Kn(e, t, n) {
	let r = [], i = n || Ae.mix || Dn, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Ie(Array.isArray(t) ? t[n] || L : t, a)), r.push(a);
	}
	return r;
}
function qn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (I(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Kn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Le(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(De(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Jn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Le(0, t, r);
		e.push(K(n, 1, i));
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Yn(e) {
	let t = [0];
	return Jn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Xn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Zn(e, t) {
	return e.map(() => t || at).splice(0, e.length - 1);
}
function Qn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = ot(r) ? r.map(dt) : dt(r), a = {
		done: !1,
		value: t[0]
	}, o = qn(Xn(n && n.length === t.length ? n : Yn(t), e), t, { ease: Array.isArray(i) ? i : Zn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var $n = (e) => e !== null;
function er(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter($n), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var tr = {
	decay: Gn,
	inertia: Gn,
	tween: Qn,
	keyframes: Qn,
	spring: Hn
};
function nr(e) {
	typeof e.type == "string" && (e.type = tr[e.type]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var rr = class {
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
}, ir = (e) => e / 100, ar = class extends rr {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== H.now() && this.tick(H.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, xt.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		nr(e);
		let { type: t = Qn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Qn;
		process.env.NODE_ENV !== "production" && s !== Qn && I(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Qn && typeof o[0] != "number" && (this.mixKeyframes = Ie(ir, Dn(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = jn(c));
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
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = De(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Gn && (b.value = er(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ z(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ z(e);
	}
	get time() {
		return /* @__PURE__ */ z(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ R(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Wn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(H.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ z(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = On, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(H.now()), this.holdTime = this.currentTime;
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
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, xt.mainThread--;
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function or(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var sr = (e) => e * 180 / Math.PI, cr = (e) => ur(sr(Math.atan2(e[1], e[0]))), lr = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: cr,
	rotateZ: cr,
	skewX: (e) => sr(Math.atan(e[1])),
	skewY: (e) => sr(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ur = (e) => (e %= 360, e < 0 && (e += 360), e), dr = cr, fr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), pr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), mr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: fr,
	scaleY: pr,
	scale: (e) => (fr(e) + pr(e)) / 2,
	rotateX: (e) => ur(sr(Math.atan2(e[6], e[5]))),
	rotateY: (e) => ur(sr(Math.atan2(-e[2], e[0]))),
	rotateZ: dr,
	rotate: dr,
	skewX: (e) => sr(Math.atan(e[4])),
	skewY: (e) => sr(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function hr(e) {
	return +!!e.includes("scale");
}
function gr(e, t) {
	if (!e || e === "none") return hr(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = mr, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = lr, i = t;
	}
	if (!i) return hr(t);
	let a = r[t], o = i[1].split(",").map(vr);
	return typeof a == "function" ? a(o) : o[a];
}
var _r = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return gr(n, t);
};
function vr(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var yr = [
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
], br = /* @__PURE__ */ new Set(yr), xr = (e) => e === Ot || e === U, Sr = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), Cr = yr.filter((e) => !Sr.has(e));
function wr(e) {
	let t = [];
	return Cr.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Tr = {
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
	x: (e, { transform: t }) => gr(t, "x"),
	y: (e, { transform: t }) => gr(t, "y")
};
Tr.translateX = Tr.x, Tr.translateY = Tr.y;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Er = /* @__PURE__ */ new Set(), Dr = !1, Or = !1, kr = !1;
function Ar() {
	if (Or) {
		let e = Array.from(Er).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = wr(e);
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
	Or = !1, Dr = !1, Er.forEach((e) => e.complete(kr)), Er.clear();
}
function jr() {
	Er.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Or = !0);
	});
}
function Mr() {
	kr = !0, jr(), Ar(), kr = !1;
}
var Nr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Er.add(this), Dr || (Dr = !0, B.read(jr), B.resolveKeyframes(Ar))) : (this.readKeyframes(), this.complete());
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
		or(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Er.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Er.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Pr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Fr(e, t, n) {
	Pr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Ir = {};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Lr(e, t) {
	let n = /* @__PURE__ */ Pe(e);
	return () => Ir[t] ?? n();
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Rr = /* @__PURE__ */ Lr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), zr = /*@__PURE__*/ Lr(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Br = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Vr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Br([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Br([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Br([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Br([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Hr(e, t) {
	if (e) return typeof e == "function" ? zr() ? kn(e, t) : "ease-out" : ct(e) ? Br(e) : Array.isArray(e) ? e.map((e) => Hr(e, t) || Vr.easeOut) : Vr[e];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Ur(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Hr(s, i);
	Array.isArray(d) && (u.easing = d), pt.value && xt.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return pt.value && p.finished.finally(() => {
		xt.waapi--;
	}), p;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Wr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Gr({ type: e, ...t }) {
	return Wr(e) && zr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Kr = class extends rr {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, I(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Gr(e);
		this.animation = Ur(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = er(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Fr(t, n, e), this.animation.cancel();
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
		return /* @__PURE__ */ z(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ z(e);
	}
	get time() {
		return /* @__PURE__ */ z(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ R(e), t && this.animation.pause();
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Rr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), L) : r(this);
	}
}, qr = {
	anticipate: $e,
	backInOut: Qe,
	circInOut: nt
};
function Jr(e) {
	return e in qr;
}
function Yr(e) {
	typeof e.ease == "string" && Jr(e.ease) && (e.ease = qr[e.ease]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Xr = 10, Zr = class extends Kr {
	constructor(e) {
		Yr(e), nr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new ar({
			...a,
			autoplay: !1
		}), s = Math.max(Xr, H.now() - this.startTime), c = De(0, Xr, s - Xr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Fr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Qr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (G.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function $r(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ei(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Qr(i, t), s = Qr(a, t);
	return ke(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : $r(e) || (n === "spring" || Wr(n)) && r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function ti(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var ni = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ri = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ii(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ri.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var ai = /* @__PURE__ */ new Set([
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
]), oi = /*@__PURE__*/ Pe(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function si(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return oi() && n && (ni.has(n) || ai.has(n) && ii(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var ci = 40, li = class extends rr {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = H.now();
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
		}, f = l?.KeyframeResolver || Nr;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = H.now();
		let u = !0;
		ei(e, i, a, o) || (u = !1, (Ae.instantAnimations || !s) && l?.(er(e, n, t)), e[0] = e[e.length - 1], ti(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > ci ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && si(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Zr({
				...d,
				element: p
			});
		} catch {
			m = new ar(d);
		}
		else m = new ar(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(L), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Mr()), this._animation;
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
}, ui = class {
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
		return di(this.animations, "duration");
	}
	get iterationDuration() {
		return di(this.animations, "iterationDuration");
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
function di(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var fi = class extends ui {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function pi(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var mi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function hi(e) {
	let t = mi.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var gi = 4;
function _i(e, t, n = 1) {
	I(n <= gi, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = hi(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return je(e) ? parseFloat(e) : e;
	}
	return Tt(i) ? _i(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
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
}, Si = (e, { keyframes: t }) => t.length > 2 ? bi : br.has(e) ? e.startsWith("scale") ? yi(t[1]) : vi : xi;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Ci(e, t) {
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function wi(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Ci(n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var Ti = /* @__PURE__ */ new Set([
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
function Ei(e) {
	for (let t in e) if (!Ti.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Di = (e, t, n, r = {}, i, a) => (o) => {
	let s = wi(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ R(c);
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
	Ei(s) || Object.assign(u, Si(e, u)), u.duration &&= /* @__PURE__ */ R(u.duration), u.repeatDelay &&= /* @__PURE__ */ R(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ti(u), u.delay === 0 && (d = !0)), (Ae.instantAnimations || Ae.skipAnimations || i?.shouldSkipAnimations) && (d = !0, ti(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = er(u.keyframes, s);
		if (e !== void 0) {
			B.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new ar(u) : new li(u);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Oi(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function ki(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Oi(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Oi(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function Ai(e, t, n) {
	let r = e.getProps();
	return ki(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var ji = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...yr
]), Mi = 30, Ni = (e) => !isNaN(parseFloat(e)), Pi = { current: void 0 }, Fi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = H.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = H.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ni(this.current));
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
			n(), B.read(() => {
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
		return Pi.current && Pi.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = H.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Mi) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Mi);
		return ze(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function Ii(e, t) {
	return new Fi(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Li = (e) => Array.isArray(e);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Ri(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ii(n));
}
function zi(e) {
	return Li(e) ? e[e.length - 1] || 0 : e;
}
function Bi(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = Ai(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Ri(e, t, zi(i[t]));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var J = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Vi(e) {
	return !!(J(e) && e.add);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Hi(e, t) {
	let n = e.getValue("willChange");
	if (Vi(n)) return n.add(t);
	if (!n && Ae.WillChange) {
		let n = new Ae.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Ui(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Wi = "data-" + Ui("framerAppearId");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Gi(e) {
	return e.props[Wi];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Ki({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function qi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Ci(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Ki(d, t)) continue;
		let o = {
			delay: n,
			...wi(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			B.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Gi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, B);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Hi(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(Di(t, r, i, p && ji.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => B.update(() => {
			o && Bi(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function Ji(e, t, n = {}) {
	let r = Ai(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(qi(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Yi(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Yi(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(Ji(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + pi(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Xi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Ji(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Ji(e, t, n);
	else {
		let i = typeof t == "function" ? Ai(e, t, n.custom) : t;
		r = Promise.all(qi(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Zi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Qi = (e) => (t) => t.test(e), $i = [
	Ot,
	U,
	Wt,
	Ut,
	Kt,
	Gt,
	Zi
], ea = (e) => $i.find(Qi(e));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function ta(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || Ne(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var na = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function ra(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Mt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!na.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ia = /\b([a-z-]*)\(.*?\)/gu, aa = {
	...G,
	getAnimatableNone: (e) => {
		let t = e.match(ia);
		return t ? t.map(ra).join(" ") : e;
	}
}, oa = {
	...G,
	getAnimatableNone: (e) => {
		let t = G.parse(e);
		return G.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, sa = {
	...Ot,
	transform: Math.round
}, ca = {
	borderWidth: U,
	borderTopWidth: U,
	borderRightWidth: U,
	borderBottomWidth: U,
	borderLeftWidth: U,
	borderRadius: U,
	borderTopLeftRadius: U,
	borderTopRightRadius: U,
	borderBottomRightRadius: U,
	borderBottomLeftRadius: U,
	width: U,
	maxWidth: U,
	height: U,
	maxHeight: U,
	top: U,
	right: U,
	bottom: U,
	left: U,
	inset: U,
	insetBlock: U,
	insetBlockStart: U,
	insetBlockEnd: U,
	insetInline: U,
	insetInlineStart: U,
	insetInlineEnd: U,
	padding: U,
	paddingTop: U,
	paddingRight: U,
	paddingBottom: U,
	paddingLeft: U,
	paddingBlock: U,
	paddingBlockStart: U,
	paddingBlockEnd: U,
	paddingInline: U,
	paddingInlineStart: U,
	paddingInlineEnd: U,
	margin: U,
	marginTop: U,
	marginRight: U,
	marginBottom: U,
	marginLeft: U,
	marginBlock: U,
	marginBlockStart: U,
	marginBlockEnd: U,
	marginInline: U,
	marginInlineStart: U,
	marginInlineEnd: U,
	fontSize: U,
	backgroundPositionX: U,
	backgroundPositionY: U,
	rotate: Ut,
	rotateX: Ut,
	rotateY: Ut,
	rotateZ: Ut,
	scale: At,
	scaleX: At,
	scaleY: At,
	scaleZ: At,
	skew: Ut,
	skewX: Ut,
	skewY: Ut,
	distance: U,
	translateX: U,
	translateY: U,
	translateZ: U,
	x: U,
	y: U,
	z: U,
	perspective: U,
	transformPerspective: U,
	opacity: kt,
	originX: qt,
	originY: qt,
	originZ: U,
	zIndex: sa,
	fillOpacity: kt,
	strokeOpacity: kt,
	numOctaves: sa
}, la = {
	...ca,
	color: W,
	backgroundColor: W,
	outlineColor: W,
	fill: W,
	stroke: W,
	borderColor: W,
	borderTopColor: W,
	borderRightColor: W,
	borderBottomColor: W,
	borderLeftColor: W,
	filter: aa,
	WebkitFilter: aa,
	mask: oa,
	WebkitMask: oa
}, ua = (e) => la[e], da = /*@__PURE__*/ new Set([aa, oa]);
function fa(e, t) {
	let n = ua(e);
	return da.has(n) || (n = G), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var pa = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function ma(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !pa.has(t) && rn(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = fa(n, i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ha = class extends Nr {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Tt(r))) {
				let i = _i(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !ji.has(n) || e.length !== 2) return;
		let [r, i] = e, a = ea(r), o = ea(i);
		if (Dt(r) !== Dt(i) && Tr[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (xr(a) && xr(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else Tr[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || ta(e[t])) && n.push(t);
		n.length && ma(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tr[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Tr[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ga(e, t, n) {
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var _a = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function va(e) {
	return Me(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ya, cancel: ba } = /* @__PURE__ */ gt(queueMicrotask, !1), Y = {
	x: !1,
	y: !1
};
function xa() {
	return Y.x || Y.y;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function Sa(e) {
	return e === "x" || e === "y" ? Y[e] ? null : (Y[e] = !0, () => {
		Y[e] = !1;
	}) : Y.x || Y.y ? null : (Y.x = Y.y = !0, () => {
		Y.x = Y.y = !1;
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Ca(e, t) {
	let n = ga(e), r = new AbortController();
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/hover.mjs
function wa(e) {
	return !(e.pointerType === "touch" || xa());
}
function Ta(e, t, n = {}) {
	let [r, i, a] = Ca(e, n);
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
			if (!wa(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Ea = (e, t) => t ? e === t || Ea(e, t.parentElement) : !1, Da = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Oa = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function ka(e) {
	return Oa.has(e.tagName) || e.isContentEditable === !0;
}
var Aa = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function ja(e) {
	return Aa.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Ma = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Na(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Pa(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Fa = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Na(() => {
		if (Ma.has(n)) return;
		Pa(n, "down");
		let e = Na(() => {
			Pa(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Pa(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Ia(e) {
	return Da(e) && !xa();
}
var La = /* @__PURE__ */ new WeakSet();
function Ra(e, t, n = {}) {
	let [r, i, a] = Ca(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Ia(e) || La.has(e)) return;
		Ma.add(r), n.stopPropagation && La.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), Ma.has(r) && Ma.delete(r), Ia(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Ea(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), va(e) && (e.addEventListener("focus", (e) => Fa(e, i)), !ka(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function za(e) {
	return Me(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var Ba = /* @__PURE__ */ new WeakMap(), Va, Ha = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : za(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Ua = /*@__PURE__*/ Ha("inline", "width", "offsetWidth"), Wa = /*@__PURE__*/ Ha("block", "height", "offsetHeight");
function Ga({ target: e, borderBoxSize: t }) {
	Ba.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Ua(e, t);
			},
			get height() {
				return Wa(e, t);
			}
		});
	});
}
function Ka(e) {
	e.forEach(Ga);
}
function qa() {
	typeof ResizeObserver > "u" || (Va = new ResizeObserver(Ka));
}
function Ja(e, t) {
	Va || qa();
	let n = ga(e);
	return n.forEach((e) => {
		let n = Ba.get(e);
		n || (n = /* @__PURE__ */ new Set(), Ba.set(e, n)), n.add(t), Va?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Ba.get(e);
			n?.delete(t), n?.size || Va?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Ya = /* @__PURE__ */ new Set(), Xa;
function Za() {
	Xa = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Ya.forEach((t) => t(e));
	}, window.addEventListener("resize", Xa);
}
function Qa(e) {
	return Ya.add(e), Xa || Za(), () => {
		Ya.delete(e), !Ya.size && typeof Xa == "function" && (window.removeEventListener("resize", Xa), Xa = void 0);
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/index.mjs
function $a(e, t) {
	return typeof e == "function" ? Qa(e) : Ja(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function eo(e) {
	return za(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/transform.mjs
function to(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = qn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var no = [
	...$i,
	W,
	G
], ro = (e) => no.find(Qi(e)), io = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), ao = () => ({
	x: io(),
	y: io()
}), oo = () => ({
	min: 0,
	max: 0
}), X = () => ({
	x: oo(),
	y: oo()
}), so = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function co(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function lo(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var uo = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], fo = ["initial", ...uo];
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function po(e) {
	return co(e.animate) || fo.some((t) => lo(e[t]));
}
function mo(e) {
	return !!(po(e) || e.variants);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function ho(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (J(i)) e.addValue(r, i);
		else if (J(a)) e.addValue(r, Ii(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Ii(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var go = { current: null }, _o = { current: !1 }, vo = typeof window < "u";
function yo() {
	if (_o.current = !0, vo) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => go.current = e.matches;
		e.addEventListener("change", t), t();
	} else go.current = !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var bo = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], xo = {};
function So(e) {
	xo = e;
}
function Co() {
	return xo;
}
var wo = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Nr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = H.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, B.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = po(t), this.isVariantNode = mo(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && J(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, so.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (_o.current || yo(), this.shouldReduceMotion = go.current), process.env.NODE_ENV !== "production" && Ve(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), _t(this.notifyUpdate), _t(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && ni.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Kr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ R(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = br.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && B.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in xo) {
			let t = xo[e];
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
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < bo.length; t++) {
			let n = bo[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = ho(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
		return n === void 0 && t !== void 0 && (n = Ii(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (je(n) || Ne(n)) ? n = parseFloat(n) : !ro(n) && G.test(t) && (n = fa(e, t)), this.setBaseTarget(e, J(n) ? n.get() : n)), J(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = ki(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !J(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Re()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ya.render(this.render);
	}
}, To = class extends wo {
	constructor() {
		super(...arguments), this.KeyframeResolver = ha;
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
		J(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Eo = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Do({ top: e, left: t, right: n, bottom: r }) {
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
function Oo({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function ko(e, t) {
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Ao(e) {
	return e === void 0 || e === 1;
}
function jo({ scale: e, scaleX: t, scaleY: n }) {
	return !Ao(e) || !Ao(t) || !Ao(n);
}
function Mo(e) {
	return jo(e) || No(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function No(e) {
	return Po(e.x) || Po(e.y);
}
function Po(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Fo(e, t, n) {
	return n + t * (e - n);
}
function Io(e, t, n, r, i) {
	return i !== void 0 && (e = Fo(e, i, r)), Fo(e, n, r) + t;
}
function Lo(e, t = 0, n = 1, r, i) {
	e.min = Io(e.min, t, n, r, i), e.max = Io(e.max, t, n, r, i);
}
function Ro(e, { x: t, y: n }) {
	Lo(e.x, t.translate, t.scale, t.originPoint), Lo(e.y, n.translate, n.scale, n.originPoint);
}
var zo = .999999999999, Bo = 1.0000000000001;
function Vo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Ho(e.x, -a.scroll.offset.x), Ho(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Ro(e, o)), r && Mo(a.latestValues) && Go(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < Bo && t.x > zo && (t.x = 1), t.y < Bo && t.y > zo && (t.y = 1);
}
function Ho(e, t) {
	e.min += t, e.max += t;
}
function Uo(e, t, n, r, i = .5) {
	Lo(e, t, n, K(e.min, e.max, i), r);
}
function Wo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Go(e, t, n) {
	let r = n ?? e;
	Uo(e.x, Wo(t.x, r.x), t.scaleX, t.scale, t.originX), Uo(e.y, Wo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Ko(e, t) {
	return Do(ko(e.getBoundingClientRect(), t));
}
function qo(e, t, n) {
	let r = Ko(e, n), { scroll: i } = t;
	return i && (Ho(r.x, i.offset.x), Ho(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Jo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Yo = yr.length;
function Xo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Yo; a++) {
		let o = yr[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = _a(s, ca[o]);
			if (!c) {
				i = !1;
				let t = Jo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Zo(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (br.has(e)) {
			o = !0;
			continue;
		} else if (Ct(e)) {
			i[e] = n;
			continue;
		} else {
			let t = _a(n, ca[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Xo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Qo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function $o(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var es = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (U.test(e)) e = parseFloat(e);
	else return e;
	return `${$o(e, t.target.x)}% ${$o(e, t.target.y)}%`;
} }, ts = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = G.parse(e);
	if (i.length > 5) return r;
	let a = G.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = K(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, ns = {
	borderRadius: {
		...es,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: es,
	borderTopRightRadius: es,
	borderBottomLeftRadius: es,
	borderBottomRightRadius: es,
	boxShadow: ts
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function rs(e, { layout: t, layoutId: n }) {
	return br.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ns[e] || e === "opacity");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function is(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (J(r[t]) || i && J(i[t]) || rs(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function as(e) {
	return window.getComputedStyle(e);
}
var os = class extends To {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Qo;
	}
	readValueFromInstance(e, t) {
		if (br.has(t)) return this.projection?.isProjecting ? hr(t) : _r(e, t);
		{
			let n = as(e), r = (Ct(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Ko(e, t);
	}
	build(e, t, n) {
		Zo(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return is(e, t, n);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function ss(e, t) {
	return e in t;
}
var cs = class extends wo {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (ss(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return X();
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
}, ls = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, us = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ds(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? ls : us;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var fs = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function ps(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Zo(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of fs) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ds(d, i, a, o, !1);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var ms = /* @__PURE__ */ new Set([
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
]), hs = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function gs(e, t, n, r) {
	Qo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(ms.has(n) ? n : Ui(n), t.attrs[n]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function _s(e, t, n) {
	let r = is(e, t, n);
	for (let n in e) if (J(e[n]) || J(t[n])) {
		let t = yr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var vs = class extends To {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = X;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (br.has(t)) {
			let e = ua(t);
			return e && e.default || 0;
		}
		return t = ms.has(t) ? t : Ui(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return _s(e, t, n);
	}
	build(e, t, n) {
		ps(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		gs(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = hs(e.tagName), super.mount(e);
	}
}, ys = fo.length;
function bs(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && bs(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < ys; n++) {
		let r = fo[n], i = e.props[r];
		(lo(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function xs(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var Ss = [...uo].reverse(), Cs = uo.length;
function ws(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Xi(e, t, n)));
}
function Ts(e) {
	let t = ws(e), n = Os(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = Ai(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
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
		let { props: s } = e, c = bs(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Cs; t++) {
			let p = Ss[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = lo(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || co(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Es(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, ee = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Li(t) && Li(n) ? !xs(t, n) : t !== n, r ? t == null ? u.add(e) : ee(e) : t !== void 0 && u.has(e) ? ee(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let te = v && y;
			b && (!te || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !te && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = Ai(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = pi(r.enteringChildren, e, t);
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
				let n = Ai(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
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
			n = Os(), i = !0;
		}
	};
}
function Es(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !xs(t, e) : !1;
}
function Ds(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Os() {
	return {
		animate: Ds(!0),
		whileInView: Ds(),
		whileHover: Ds(),
		whileTap: Ds(),
		whileDrag: Ds(),
		whileFocus: Ds(),
		exit: Ds()
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function ks(e, t) {
	e.min = t.min, e.max = t.max;
}
function Z(e, t) {
	ks(e.x, t.x), ks(e.y, t.y);
}
function As(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var js = .9999, Ms = 1.0001, Ns = -.01, Ps = .01;
function Q(e) {
	return e.max - e.min;
}
function Fs(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Is(e, t, n, r = .5) {
	e.origin = r, e.originPoint = K(t.min, t.max, e.origin), e.scale = Q(n) / Q(t), e.translate = K(n.min, n.max, e.origin) - e.originPoint, (e.scale >= js && e.scale <= Ms || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ns && e.translate <= Ps || isNaN(e.translate)) && (e.translate = 0);
}
function Ls(e, t, n, r) {
	Is(e.x, t.x, n.x, r ? r.originX : void 0), Is(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Rs(e, t, n, r = 0) {
	e.min = (r ? K(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Q(t);
}
function zs(e, t, n, r) {
	Rs(e.x, t.x, n.x, r?.x), Rs(e.y, t.y, n.y, r?.y);
}
function Bs(e, t, n, r = 0) {
	let i = r ? K(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Q(t);
}
function Vs(e, t, n, r) {
	Bs(e.x, t.x, n.x, r?.x), Bs(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Hs(e, t, n, r, i) {
	return e -= t, e = Fo(e, 1 / n, r), i !== void 0 && (e = Fo(e, 1 / i, r)), e;
}
function Us(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (Wt.test(t) && (t = parseFloat(t), t = K(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = K(a.min, a.max, r);
	e === a && (s -= t), e.min = Hs(e.min, t, n, s, i), e.max = Hs(e.max, t, n, s, i);
}
function Ws(e, t, [n, r, i], a, o) {
	Us(e, t[n], t[r], t[i], t.scale, a, o);
}
var Gs = [
	"x",
	"scaleX",
	"originX"
], Ks = [
	"y",
	"scaleY",
	"originY"
];
function qs(e, t, n, r) {
	Ws(e.x, t, Gs, n ? n.x : void 0, r ? r.x : void 0), Ws(e.y, t, Ks, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function Js(e) {
	return e.translate === 0 && e.scale === 1;
}
function Ys(e) {
	return Js(e.x) && Js(e.y);
}
function Xs(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Zs(e, t) {
	return Xs(e.x, t.x) && Xs(e.y, t.y);
}
function Qs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function $s(e, t) {
	return Qs(e.x, t.x) && Qs(e.y, t.y);
}
function ec(e) {
	return Q(e.x) / Q(e.y);
}
function tc(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function $(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function nc(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var rc = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], ic = rc.length, ac = (e) => typeof e == "string" ? parseFloat(e) : e, oc = (e) => typeof e == "number" || U.test(e);
function sc(e, t, n, r, i, a) {
	i ? (e.opacity = K(0, n.opacity ?? 1, lc(r)), e.opacityExit = K(t.opacity ?? 1, 0, uc(r))) : a && (e.opacity = K(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < ic; i++) {
		let a = rc[i], o = cc(t, a), s = cc(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || oc(o) === oc(s) ? (e[a] = Math.max(K(ac(o), ac(s), r), 0), (Wt.test(s) || Wt.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function cc(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var lc = /*@__PURE__*/ dc(0, .5, tt), uc = /*@__PURE__*/ dc(.5, .95, L);
function dc(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Le(e, t, r));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function fc(e, t, n) {
	let r = J(e) ? e : Ii(e);
	return r.start(Di("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function pc(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var mc = (e, t) => e.depth - t.depth, hc = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Te(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Ee(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(mc), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/delay.mjs
function gc(e, t) {
	let n = H.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (_t(r), e(a - t));
	};
	return B.setup(r, !0), () => _t(r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function _c(e) {
	return J(e) ? e.get() : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var vc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Te(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (Ee(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (Ee(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
}, yc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, bc = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, xc = [
	"",
	"X",
	"Y",
	"Z"
], Sc = 1e3, Cc = 0;
function wc(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Tc(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Gi(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", B, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Tc(r);
}
function Ec({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = Cc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, pt.value && (bc.nodes = bc.calculatedTargetDeltas = bc.calculatedProjections = 0), this.nodes.forEach(kc), this.nodes.forEach(Rc), this.nodes.forEach(zc), this.nodes.forEach(Ac), pt.addProjectionMetrics && pt.addProjectionMetrics(bc);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new hc());
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
			this.isSVG = za(t) && !eo(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				B.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = gc(i, 250), yc.hasAnimatedSinceResize && (yc.hasAnimatedSinceResize = !1, this.nodes.forEach(Lc)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Kc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !$s(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...wi(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || Lc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), _t(this.updateProjection);
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
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Bc), this.animationId++);
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
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Nc), this.nodes.forEach(Mc);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Pc);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Fc), this.nodes.forEach(Ic), this.nodes.forEach(Dc), this.nodes.forEach(Oc)) : this.nodes.forEach(Pc), this.clearAllSnapshots();
			let e = H.now();
			V.delta = De(0, 1e3 / 60, e - V.timestamp), V.timestamp = e, V.isProcessing = !0, vt.update.process(V), vt.preRender.process(V), vt.render.process(V), V.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, ya.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(jc), this.sharedNodes.forEach(Vc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, B.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			B.postRender(() => {
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
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= X(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Ys(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Mo(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Xc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return X();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Qc))) {
				let { scroll: e } = this.root;
				e && (Ho(t.x, e.offset.x), Ho(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = X();
			if (Z(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Z(t, e), Ho(t.x, i.offset.x), Ho(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || X();
			Z(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (Ho(r.x, -n.scroll.offset.x), Ho(r.y, -n.scroll.offset.y)), Mo(n.latestValues) && Go(r, n.latestValues, n.layout?.layoutBox);
			}
			return Mo(this.latestValues) && Go(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = X();
			Z(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Mo(n.latestValues)) continue;
				let r;
				n.instance && (jo(n.latestValues) && n.updateSnapshot(), r = X(), Z(r, n.measurePageBox())), qs(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Mo(this.latestValues) && qs(t, this.latestValues), t;
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
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== V.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = V.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = X(), this.targetWithTransforms = X()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zs(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Z(this.target, this.layout.layoutBox), Ro(this.target, this.targetDelta)) : Z(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), pt.value && bc.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || jo(this.parent.latestValues) || No(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), Vs(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Z(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === V.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Z(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Vo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = X());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (As(this.prevProjectionDelta.x, this.projectionDelta.x), As(this.prevProjectionDelta.y, this.projectionDelta.y)), Ls(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !tc(this.projectionDelta.x, this.prevProjectionDelta.x) || !tc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), pt.value && bc.calculatedProjections++;
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
			this.prevProjectionDelta = ao(), this.projectionDelta = ao(), this.projectionDeltaWithTransform = ao();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = ao();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = X(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Gc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Hc(a.x, e.x, n), Hc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vs(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Wc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Zs(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= X(), Z(d, this.relativeTarget)), s && (this.animationValues = i, sc(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (_t(this.pendingAnimation), void 0), this.pendingAnimation = B.update(() => {
				yc.hasAnimatedSinceResize = !0, xt.layout++, this.motionValue ||= Ii(0), this.motionValue.jump(0, !1), this.currentAnimation = fc(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						xt.layout--;
					},
					onComplete: () => {
						xt.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
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
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Sc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Zc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || X();
					let t = Q(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Q(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Z(t, n), Go(t, i), Ls(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new vc()), this.sharedNodes.get(e).add(t);
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
			n.z && wc("z", e, r, this.animationValues);
			for (let t = 0; t < xc.length; t++) wc(`rotate${xc[t]}`, e, r, this.animationValues), wc(`skew${xc[t]}`, e, r, this.animationValues);
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
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = _c(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = _c(t?.pointerEvents) || ""), this.hasProjected && !Mo(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = nc(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in ns) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = ns[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? _c(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Mc), this.root.sharedNodes.clear();
		}
	};
}
function Dc(e) {
	e.updateLayout();
}
function Oc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") $((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Q(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			ks(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else Zc(i, t.layoutBox, n) && $((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Q(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = ao();
		Ls(o, n, t.layoutBox);
		let s = ao();
		a ? Ls(s, e.applyTransform(r, !0), t.measuredBox) : Ls(s, n, t.layoutBox);
		let c = !Ys(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = X();
					Vs(s, t.layoutBox, i.layoutBox, o);
					let c = X();
					Vs(c, n, a.layoutBox, o), $s(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
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
function kc(e) {
	pt.value && bc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Ac(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function jc(e) {
	e.clearSnapshot();
}
function Mc(e) {
	e.clearMeasurements();
}
function Nc(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Pc(e) {
	e.isLayoutDirty = !1;
}
function Fc(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Ic(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Lc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Rc(e) {
	e.resolveTargetDelta();
}
function zc(e) {
	e.calcProjection();
}
function Bc(e) {
	e.resetSkewAndRotation();
}
function Vc(e) {
	e.removeLeadSnapshot();
}
function Hc(e, t, n) {
	e.translate = K(t.translate, 0, n), e.scale = K(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Uc(e, t, n, r) {
	e.min = K(t.min, n.min, r), e.max = K(t.max, n.max, r);
}
function Wc(e, t, n, r) {
	Uc(e.x, t.x, n.x, r), Uc(e.y, t.y, n.y, r);
}
function Gc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Kc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, qc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Jc = qc("applewebkit/") && !qc("chrome/") ? Math.round : L;
function Yc(e) {
	e.min = Jc(e.min), e.max = Jc(e.max);
}
function Xc(e) {
	Yc(e.x), Yc(e.y);
}
function Zc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Fs(ec(t), ec(n), .2);
}
function Qc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var $c = Ec({
	attachResizeListener: (e, t) => pc(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), el = { current: void 0 }, tl = Ec({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!el.current) {
			let e = new $c({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), el.current = e;
		}
		return el.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), nl = D({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function rl(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function il(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = rl(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : rl(e[t], null);
			}
		};
	};
}
function al(...e) {
	return E.useCallback(il(...e), e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var ol = class extends E.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (va(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = va(e) && e.offsetWidth || 0, r = va(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function sl({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = he(), s = M(null), c = M({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: l } = A(nl), u = al(s, e.props?.ref ?? e?.ref);
	return ge(() => {
		let { width: e, height: u, top: d, left: f, right: p, bottom: m } = c.current;
		if (t || a === !1 || !s.current || !e || !u) return;
		let h = n === "left" ? `left: ${f}` : `right: ${p}`, g = r === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		s.current.dataset.motionPopId = o;
		let _ = document.createElement("style");
		l && (_.nonce = l);
		let v = i ?? document.head;
		return v.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `), () => {
			s.current?.removeAttribute("data-motion-pop-id"), v.contains(_) && v.removeChild(_);
		};
	}, [t]), P(ol, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : E.cloneElement(e, { ref: u })
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var cl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = Se(ll), d = he(), f = !0, p = ve(() => (f = !1, {
		id: d,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			u.set(e, !0);
			for (let e of u.values()) if (!e) return;
			r && r();
		},
		register: (e) => (u.set(e, !1), () => u.delete(e))
	}), [
		n,
		u,
		r
	]);
	return a && f && (p = { ...p }), ve(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), E.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = P(sl, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), P(we.Provider, {
		value: p,
		children: e
	});
};
function ll() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function ul(e = !0) {
	let t = A(we);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = he();
	j(() => {
		if (e) return i(a);
	}, [e]);
	let o = k(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var dl = (e) => e.key || "";
function fl(e) {
	let t = [];
	return ce.forEach(e, (e) => {
		me(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var pl = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, d] = ul(o), f = ve(() => fl(e), [e]), p = o && !u ? [] : f.map(dl), m = M(!0), h = M(f), g = Se(() => /* @__PURE__ */ new Map()), _ = M(/* @__PURE__ */ new Set()), [v, y] = N(f), [b, x] = N(f);
	Ce(() => {
		m.current = !1, h.current = f;
		for (let e = 0; e < b.length; e++) {
			let t = dl(b[e]);
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
			let n = b[t], r = dl(n);
			p.includes(r) || (e.splice(t, 0, n), S.push(n));
		}
		return a === "wait" && S.length && (e = S), x(fl(e)), y(f), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && b.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: C } = A(xe);
	return P(ye, { children: b.map((e) => {
		let v = dl(e), y = o && !u ? !1 : f === b || p.includes(v);
		return P(cl, {
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
}, ml = D({ strict: !1 }), hl = {
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
}, gl = !1;
function _l() {
	if (gl) return;
	let e = {};
	for (let t in hl) e[t] = { isEnabled: (e) => hl[t].some((t) => !!e[t]) };
	So(e), gl = !0;
}
function vl() {
	return _l(), Co();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function yl(e) {
	let t = vl();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	So(t);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var bl = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function xl(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || bl.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var Sl = /* @__PURE__ */ t({ default: () => Cl }), Cl, wl = i((() => {
	throw Cl = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), Tl = (e) => !xl(e);
function El(e) {
	typeof e == "function" && (Tl = (t) => t.startsWith("on") ? !xl(t) : e(t));
}
try {
	El((wl(), n(Sl)).default);
} catch {}
function Dl(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || J(e[i]) || (Tl(i) || n === !0 && xl(i) || !t && !xl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Ol = /* @__PURE__ */ D({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function kl(e, t) {
	if (po(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || lo(t) ? t : void 0,
			animate: lo(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Al(e) {
	let { initial: t, animate: n } = kl(e, A(Ol));
	return ve(() => ({
		initial: t,
		animate: n
	}), [jl(t), jl(n)]);
}
function jl(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Ml = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Nl(e, t, n) {
	for (let r in t) !J(t[r]) && !rs(r, n) && (e[r] = t[r]);
}
function Pl({ transformTemplate: e }, t) {
	return ve(() => {
		let n = Ml();
		return Zo(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Fl(e, t) {
	let n = e.style || {}, r = {};
	return Nl(r, n, e), Object.assign(r, Pl(e, t)), r;
}
function Il(e, t) {
	let n = {}, r = Fl(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Ll = () => ({
	...Ml(),
	attrs: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Rl(e, t, n, r) {
	let i = ve(() => {
		let n = Ll();
		return ps(n, t, hs(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Nl(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var zl = [
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Bl(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(zl.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Vl(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Bl(e) ? Rl : Il)(t, r, i, e), c = Dl(t, typeof e == "string", a), l = e === ue ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = ve(() => J(u) ? u.get() : u, [u]);
	return fe(e, {
		...l,
		children: d
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Hl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Ul(n, r, i, e),
		renderState: t()
	};
}
function Ul(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = _c(a[e]);
	let { initial: o, animate: s } = e, c = po(e), l = mo(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !co(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = ki(e, t[n]);
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
var Wl = (e) => (t, n) => {
	let r = A(Ol), i = A(we), a = () => Hl(e, t, r, i);
	return n ? a() : Se(a);
}, Gl = /*@__PURE__*/ Wl({
	scrapeMotionValuesFromProps: is,
	createRenderState: Ml
}), Kl = /*@__PURE__*/ Wl({
	scrapeMotionValuesFromProps: _s,
	createRenderState: Ll
}), ql = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Jl(e, t, n) {
	let r = M(n);
	ge(() => {
		r.current = n;
	});
	let i = M(null);
	return k((n) => {
		n && e.onMount?.(n);
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
		t && (n ? t.mount(n) : t.unmount());
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var Yl = D({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function Xl(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Zl(e, t, n, r, i, a) {
	let { visualElement: o } = A(Ol), s = A(ml), c = A(we), l = A(nl), u = l.reducedMotion, d = l.skipAnimations, f = M(null), p = M(!1);
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
	let m = f.current, h = A(Yl);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Ql(f.current, n, i, h);
	let g = M(!1);
	ge(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[Wi], v = M(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return Ce(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), j(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function Ql(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $l(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && Xl(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function $l(e) {
	if (e) return e.options.allowProjection === !1 ? $l(e.parent) : e.projection;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/index.mjs
function eu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && yl(r);
	let a = n ? n === "svg" : Bl(e), o = a ? Kl : Gl;
	function s(n, s) {
		let c, l = {
			...A(nl),
			...n,
			layoutId: tu(n)
		}, { isStatic: u } = l, d = Al(n), f = o(n, u);
		if (!u && typeof window < "u") {
			nu(l, r);
			let t = ru(l);
			c = t.MeasureLayout, d.visualElement = Zl(e, f, l, i, t.ProjectionNode, a);
		}
		return F(Ol.Provider, {
			value: d,
			children: [c && d.visualElement ? P(c, {
				visualElement: d.visualElement,
				...l
			}) : null, Vl(e, n, Jl(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = pe(s);
	return c[ql] = e, c;
}
function tu({ layoutId: e }) {
	let t = A(xe).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function nu(e, t) {
	let n = A(ml).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? ke(!1, t, "lazy-strict-mode") : I(!1, t, "lazy-strict-mode");
	}
}
function ru(e) {
	let { drag: t, layout: n } = vl();
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function iu(e, t) {
	if (typeof Proxy > "u") return eu;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => eu(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && Ve(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, eu(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var au = (e, t) => t.isSVG ?? Bl(e) ? new vs(t) : new os(t, { allowProjection: e !== ue }), ou = class extends Eo {
	constructor(e) {
		super(e), e.animationState ||= Ts(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		co(e) && (this.unmountControls = e.subscribe(this.node));
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
}, su = 0, cu = {
	animation: { Feature: ou },
	exit: { Feature: class extends Eo {
		constructor() {
			super(...arguments), this.id = su++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string") {
						let n = Ai(this.node, e, t);
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/events/event-info.mjs
function lu(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var uu = (e) => (t) => Da(t) && e(t, lu(t));
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function du(e, t, n, r) {
	return pc(e, t, uu(n), r);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var fu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, pu = (e, t) => Math.abs(e - t);
function mu(e, t) {
	let n = pu(e.x, t.x), r = pu(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var hu = /*#__PURE__*/ new Set(["auto", "scroll"]), gu = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = _u(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = yu(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = mu(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = V;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = _u(t, this.transformPagePoint), B.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = yu(e.type === "pointercancel" ? this.lastMoveEventInfo : _u(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Da(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = _u(lu(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = V;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, yu(s, this.history)), this.removeListeners = Ie(du(this.contextWindow, "pointermove", this.handlePointerMove), du(this.contextWindow, "pointerup", this.handlePointerUp), du(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(hu.has(e.overflowX) || hu.has(e.overflowY)) && this.scrollPositions.set(t, {
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
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), B.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), _t(this.updatePoint);
	}
};
function _u(e, t) {
	return t ? { point: t(e.point) } : e;
}
function vu(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function yu({ point: e }, t) {
	return {
		point: e,
		delta: vu(e, xu(t)),
		offset: vu(e, bu(t)),
		velocity: Su(t, .1)
	};
}
function bu(e) {
	return e[0];
}
function xu(e) {
	return e[e.length - 1];
}
function Su(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = xu(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ R(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ R(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ z(i.timestamp - r.timestamp);
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function Cu(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)), e;
}
function wu(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Tu(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: wu(e.x, n, i),
		y: wu(e.y, t, r)
	};
}
function Eu(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Du(e, t) {
	return {
		x: Eu(e.x, t.x),
		y: Eu(e.y, t.y)
	};
}
function Ou(e, t) {
	let n = .5, r = Q(e), i = Q(t);
	return i > r ? n = /* @__PURE__ */ Le(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Le(e.min, e.max - i, t.min)), De(0, 1, n);
}
function ku(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Au = .35;
function ju(e = Au) {
	return e === !1 ? e = 0 : e === !0 && (e = Au), {
		x: Mu(e, "left", "right"),
		y: Mu(e, "top", "bottom")
	};
}
function Mu(e, t, n) {
	return {
		min: Nu(e, t),
		max: Nu(e, n)
	};
}
function Nu(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Pu = /* @__PURE__ */ new WeakMap(), Fu = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = X(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(lu(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = Sa(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (Wt.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Q(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && B.update(() => i(e, t), !1, !0), Hi(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = zu(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && B.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new gu(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: fu(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && B.postRender(() => o(n, r));
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
		if (!n || !Ru(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Cu(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && Xl(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Tu(n.layoutBox, e) : this.constraints = !1, this.elastic = ju(t), r !== this.constraints && !Xl(e) && n && this.constraints && !this.hasMutatedConstraints && $((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = ku(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Xl(e)) return !1;
		let n = e.current;
		I(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = qo(n, r.root, this.visualElement.getTransformPagePoint()), a = Du(r.layout.layoutBox, i);
		if (t) {
			let e = t(Oo(a));
			this.hasMutatedConstraints = !!e, e && (a = Do(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = $((o) => {
			if (!Ru(o, t, this.currentDirection)) return;
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
		return Hi(this.visualElement, e), n.start(Di(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		$((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		$((t) => {
			let { drag: n } = this.getProps();
			if (!Ru(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - K(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!Xl(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		$((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Ou({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), $((t) => {
			if (!Ru(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(K(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Pu.set(this.visualElement, this);
		let e = this.visualElement.current, t = du(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && ja(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			Xl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Lu(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), B.read(r);
		let o = pc(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
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
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Au, dragMomentum: o = !0 } = e;
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
function Iu(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Lu(e, t, n) {
	let r = $a(e, Iu(n)), i = $a(t, Iu(n));
	return () => {
		r(), i();
	};
}
function Ru(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function zu(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Bu = class extends Eo {
	constructor(e) {
		super(e), this.removeGroupControls = L, this.removeListeners = L, this.controls = new Fu(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Vu = (e) => (t, n) => {
	e && B.update(() => e(t, n), !1, !0);
}, Hu = class extends Eo {
	constructor() {
		super(...arguments), this.removePointerDownListener = L;
	}
	onPointerDown(e) {
		this.session = new gu(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: fu(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Vu(e),
			onStart: Vu(t),
			onMove: Vu(n),
			onEnd: (e, t) => {
				delete this.session, r && B.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = du(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Uu = !1, Wu = class extends le {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Uu && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), yc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Uu = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || B.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), ya.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Uu = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Gu(e) {
	let [t, n] = ul(), r = A(xe);
	return P(Wu, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: A(Yl),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Ku = {
	pan: { Feature: Hu },
	drag: {
		Feature: Bu,
		ProjectionNode: tl,
		MeasureLayout: Gu
	}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/hover.mjs
function qu(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && B.postRender(() => i(t, lu(t)));
}
var Ju = class extends Eo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Ta(e, (e, t) => (qu(this.node, t, "Start"), (e) => qu(this.node, e, "End"))));
	}
	unmount() {}
}, Yu = class extends Eo {
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
		this.unmount = Ie(pc(this.node.current, "focus", () => this.onFocus()), pc(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/press.mjs
function Xu(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && B.postRender(() => i(t, lu(t)));
}
var Zu = class extends Eo {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Ra(e, (e, t) => (Xu(this.node, t, "Start"), (e, { success: t }) => Xu(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, Qu = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), ed = (e) => {
	let t = Qu.get(e.target);
	t && t(e);
}, td = (e) => {
	e.forEach(ed);
};
function nd({ root: e, ...t }) {
	let n = e || document;
	$u.has(n) || $u.set(n, {});
	let r = $u.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(td, {
		root: e,
		...t
	})), r[i];
}
function rd(e, t, n) {
	let r = nd(t);
	return Qu.set(e, n), r.observe(e), () => {
		Qu.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var id = {
	some: 0,
	all: 1
}, ad = class extends Eo {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : id[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = rd(this.node.current, a, o);
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
		].some(od(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function od({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var sd = {
	inView: { Feature: ad },
	tap: { Feature: Zu },
	focus: { Feature: Yu },
	hover: { Feature: Ju }
}, cd = { layout: {
	ProjectionNode: tl,
	MeasureLayout: Gu
} }, ld = /*@__PURE__*/ iu({
	...cu,
	...sd,
	...Ku,
	...cd
}, au);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function ud(e) {
	let t = Se(() => Ii(e)), { isStatic: n } = A(nl);
	if (n) {
		let [, n] = N(e);
		j(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function dd(e, t) {
	let n = ud(t()), r = () => n.set(t());
	return r(), Ce(() => {
		let t = () => B.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), _t(r);
		};
	}), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-computed.mjs
function fd(e) {
	Pi.current = [], e();
	let t = dd(Pi.current, e);
	return Pi.current = void 0, t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-transform.mjs
function pd(e, t, n, r) {
	if (typeof e == "function") return fd(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return hd(e, t, n, r);
	let i = typeof t == "function" ? t : to(t, n, r), a = Array.isArray(e) ? md(e, i) : md([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function md(e, t) {
	let n = Se(() => []);
	return dd(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function hd(e, t, n, r) {
	let i = Se(() => Object.keys(n)), a = Se(() => ({}));
	for (let o of i) a[o] = pd(e, t, n[o], r);
	return a;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function gd(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function _d(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && gd(t) ? ga(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function vd(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function yd(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function bd(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (Ee(e, i), r--);
	}
}
function xd(e, t, n, r, i, a) {
	bd(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: K(i, a, r[o]),
		easing: st(n, o)
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function Sd(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function Cd(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var wd = "easeInOut", Td = 20;
function Ed(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, yd(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = yd(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = kd(e), { delay: l = 0, times: u = Yn(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Wr(p) ? p : i?.[p || "keyframes"];
			if (S <= 2 && C) {
				let e = 100;
				if (S === 2 && Md(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				b !== void 0 && (n.duration = /* @__PURE__ */ R(b));
				let r = Mn(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let w = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let T = u.length - c.length;
			if (T > 0 && Jn(u, T), c.length === 1 && c.unshift(null), m) {
				I(m < Td, "Repeat count too high, must be less than 20", "repeat-count-high"), b = vd(b, m);
				let e = [...c], t = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let n = [...y];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), y.push(i === 0 ? "linear" : st(n, i - 1));
				}
				Sd(u, m);
			}
			let ee = w + b;
			xd(r, c, y, u, w, ee), g = Math.max(x + b, g), f = Math.max(ee, f);
		};
		if (J(p)) {
			let e = Dd(p, s);
			_(m, h, Od("default", e));
		} else {
			let e = _d(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = Dd(r, s);
				for (let e in m) _(m[e], Ad(h, e), Od(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(Cd);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ Le(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(wd)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
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
function Dd(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Od(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function kd(e) {
	return Array.isArray(e) ? e : [e];
}
function Ad(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var jd = (e) => typeof e == "number", Md = (e) => e.every(jd);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Nd(e) {
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
	}, n = za(e) && !eo(e) ? new vs(t) : new os(t);
	n.mount(e), so.set(e, n);
}
function Pd(e) {
	let t = new cs({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), so.set(e, t);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Fd(e, t) {
	return J(e) || typeof e == "number" || typeof e == "string" && !gd(t);
}
function Id(e, t, n, r) {
	let i = [];
	if (Fd(e, t)) i.push(fc(e, gd(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = _d(e, t, r), o = a.length;
		I(!!o, "No valid elements provided.", "no-valid-elements");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Nd : Pd;
			so.has(r) || s(r);
			let c = so.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...qi(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function Ld(e, t, n) {
	let r = [];
	return Ed(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = Ii(0);
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
	}), t, n, { spring: Hn }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...Id(n, e, t));
	}), r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/index.mjs
function Rd(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function zd(e = {}) {
	let { scope: t, reduceMotion: n } = e;
	function r(e, r, i) {
		let a = [], o;
		if (Rd(e)) {
			let { onComplete: i, ...s } = r || {};
			typeof i == "function" && (o = i), a = Ld(e, n === void 0 ? s : {
				reduceMotion: n,
				...s
			}, t);
		} else {
			let { onComplete: s, ...c } = i || {};
			typeof s == "function" && (o = s), a = Id(e, r, n === void 0 ? c : {
				reduceMotion: n,
				...c
			}, t);
		}
		let s = new fi(a);
		return o && s.finished.then(o), t && (t.animations.push(s), s.finished.then(() => {
			Ee(t.animations, s);
		})), s;
	}
	return r;
}
var Bd = zd(), Vd = class {
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
}, Hd = () => new Vd();
function Ud() {
	return Se(Hd);
}
//#endregion
//#region src/config/themes.config.ts
var Wd = {
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
					top: 30,
					bottom: 0
				},
				dragTopInset: 30,
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
function Gd() {
	let e = S((e) => e.osTheme), t = S((e) => e.resolvedColorScheme), n = S((e) => e.glassEnabled), r = Wd[e];
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
var Kd = w("battery", [["path", {
	d: "M 22 14 L 22 10",
	key: "nqc4tb"
}], ["rect", {
	x: "2",
	y: "6",
	width: "16",
	height: "12",
	rx: "2",
	key: "13zb55"
}]]), qd = w("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Jd = w("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Yd = w("menu", [
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
]), Xd = w("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), Zd = w("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]), Qd = w("sliders-vertical", [
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
]), $d = w("triangle-alert", [
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
]), ef = w("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]), tf = w("wifi", [
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
function nf({ forceDark: e = !1 } = {}) {
	let [t, n] = N(""), [r, i] = N(""), a = S((e) => e.wallpaperTextTheme), o = e || a === "dark" ? "text-white/85" : "text-black/80";
	return j(() => {
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
	}, []), /* @__PURE__ */ F("div", {
		className: `flex items-center gap-1.5 text-[14px] font-medium ${o} select-none tabular-nums`,
		children: [/* @__PURE__ */ P("span", { children: r }), /* @__PURE__ */ P("span", { children: t })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_8b5332f8e883134e9d9ab2856fc4395d/node_modules/@radix-ui/react-popover/dist/index.mjs
var rf = "Popover", [af, of] = o(rf, [b]), sf = b(), [cf, lf] = af(rf), uf = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = sf(t), l = E.useRef(null), [u, d] = E.useState(!1), [p, m] = _({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: rf
	});
	return /* @__PURE__ */ P(f, {
		...s,
		children: /* @__PURE__ */ P(cf, {
			scope: t,
			contentId: c(),
			triggerRef: l,
			open: p,
			onOpenChange: m,
			onOpenToggle: E.useCallback(() => m((e) => !e), [m]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: E.useCallback(() => d(!0), []),
			onCustomAnchorRemove: E.useCallback(() => d(!1), []),
			modal: o,
			children: n
		})
	});
};
uf.displayName = rf;
var df = "PopoverAnchor", ff = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = lf(df, n), a = sf(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return E.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ P(h, {
		...a,
		...r,
		ref: t
	});
});
ff.displayName = df;
var pf = "PopoverTrigger", mf = E.forwardRef((t, n) => {
	let { __scopePopover: i, ...a } = t, o = lf(pf, i), s = sf(i), c = r(n, o.triggerRef), l = /* @__PURE__ */ P(u.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": o.open,
		"aria-controls": o.contentId,
		"data-state": kf(o.open),
		...a,
		ref: c,
		onClick: e(t.onClick, o.onOpenToggle)
	});
	return o.hasCustomAnchor ? l : /* @__PURE__ */ P(h, {
		asChild: !0,
		...s,
		children: l
	});
});
mf.displayName = pf;
var hf = "PopoverPortal", [gf, _f] = af(hf, { forceMount: void 0 }), vf = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, o = lf(hf, t);
	return /* @__PURE__ */ P(gf, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ P(d, {
			present: n || o.open,
			children: /* @__PURE__ */ P(a, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
vf.displayName = hf;
var yf = "PopoverContent", bf = E.forwardRef((e, t) => {
	let n = _f(yf, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = lf(yf, e.__scopePopover);
	return /* @__PURE__ */ P(d, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ P(Sf, {
			...i,
			ref: t
		}) : /* @__PURE__ */ P(Cf, {
			...i,
			ref: t
		})
	});
});
bf.displayName = yf;
var xf = x("PopoverContent.RemoveScroll"), Sf = E.forwardRef((t, n) => {
	let i = lf(yf, t.__scopePopover), a = E.useRef(null), o = r(n, a), s = E.useRef(!1);
	return E.useEffect(() => {
		let e = a.current;
		if (e) return m(e);
	}, []), /* @__PURE__ */ P(y, {
		as: xf,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ P(wf, {
			...t,
			ref: o,
			trapFocus: i.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: e(t.onCloseAutoFocus, (e) => {
				e.preventDefault(), s.current || i.triggerRef.current?.focus();
			}),
			onPointerDownOutside: e(t.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				s.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: e(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), Cf = E.forwardRef((e, t) => {
	let n = lf(yf, e.__scopePopover), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ P(wf, {
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
}), wf = E.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, ...m } = e, h = lf(yf, n), _ = sf(n);
	return g(), /* @__PURE__ */ P(l, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ P(p, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: f,
			onEscapeKeyDown: c,
			onPointerDownOutside: u,
			onFocusOutside: d,
			onDismiss: () => h.onOpenChange(!1),
			children: /* @__PURE__ */ P(s, {
				"data-state": kf(h.open),
				role: "dialog",
				id: h.contentId,
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
}), Tf = "PopoverClose", Ef = E.forwardRef((t, n) => {
	let { __scopePopover: r, ...i } = t, a = lf(Tf, r);
	return /* @__PURE__ */ P(u.button, {
		type: "button",
		...i,
		ref: n,
		onClick: e(t.onClick, () => a.onOpenChange(!1))
	});
});
Ef.displayName = Tf;
var Df = "PopoverArrow", Of = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ P(v, {
		...sf(n),
		...r,
		ref: t
	});
});
Of.displayName = Df;
function kf(e) {
	return e ? "open" : "closed";
}
var Af = uf, jf = mf, Mf = vf, Nf = bf, Pf = "\n  attribute vec2 a_position;\n  varying vec2 v_uv;\n  void main() {\n    v_uv = a_position * 0.5 + 0.5;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n", Ff = "\n  precision mediump float;\n\n  uniform float u_time;\n  uniform vec2  u_resolution;\n\n  void main() {\n    vec2 uv = gl_FragCoord.xy / u_resolution;\n\n    // Two overlapping sine waves for organic caustic feel\n    float wave1 = sin(uv.x * 6.283 + u_time * 0.8) * 0.5 + 0.5;\n    float wave2 = sin(uv.y * 4.712 - u_time * 0.5) * 0.5 + 0.5;\n    float wave3 = sin((uv.x + uv.y) * 5.0 + u_time * 0.3) * 0.5 + 0.5;\n\n    float caustic = wave1 * wave2 * wave3;\n\n    // Edge vignette: fade out near the border so the shimmer doesn't bleed\n    vec2 dist = abs(uv - 0.5) * 2.0;\n    float vignette = 1.0 - smoothstep(0.7, 1.0, max(dist.x, dist.y));\n\n    float alpha = caustic * vignette * 0.1;\n    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);\n  }\n";
//#endregion
//#region src/components/liquid-glass/useGlassShimmer.ts
function If(e, t, n) {
	let r = e.createShader(t);
	return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.warn("[GlassShimmer] Shader compile error:", e.getShaderInfoLog(r)), e.deleteShader(r), null)) : null;
}
function Lf(e, t, n) {
	let r = If(e, e.VERTEX_SHADER, t), i = If(e, e.FRAGMENT_SHADER, n);
	if (!r || !i) return null;
	let a = e.createProgram();
	return a ? (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) ? a : (console.warn("[GlassShimmer] Program link error:", e.getProgramInfoLog(a)), null)) : null;
}
function Rf(e) {
	j(() => {
		let t = e.current;
		if (!t) return;
		let n = t.getContext("webgl") ?? t.getContext("experimental-webgl");
		if (!n) return;
		let r = Lf(n, Pf, Ff);
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
function zf({ className: e }) {
	let t = M(null);
	return Rf(t), /* @__PURE__ */ P("canvas", {
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
function Bf() {
	let e = M(null), [t, n] = N(null);
	return j(() => {
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
var Vf = {
	dock: "var(--radius-dock)",
	menubar: null,
	taskbar: null,
	window: "var(--radius-window)",
	panel: "var(--radius-card)",
	widget: "var(--radius-card)"
}, Hf = {
	dock: "shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
	menubar: "shadow-sm",
	taskbar: "shadow-none",
	window: "shadow-[0_16px_48px_rgba(0,0,0,0.3)]",
	panel: "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
	widget: "shadow-none"
};
function Uf({ children: e, className: t, variant: n = "panel", forceGlass: r, borderRadius: i, style: a, ref: o, ...s }) {
	let { isGlass: c, colorScheme: l } = Gd(), u = r === void 0 ? c : r, d = S((e) => e.glassMode), f = i ?? Vf[n], p = f ? { borderRadius: f } : {}, m = Hf[n], { elementRef: h, maps: g } = Bf(), _ = E.useCallback((e) => {
		h.current = e, o && (typeof o == "function" ? o(e) : o.current = e);
	}, [o, h]), v = u && g ? `url(#${g.filterId}) blur(24px)` : u ? "url(#lg-distort) blur(24px)" : "blur(20px)";
	return u ? d === "clear" ? /* @__PURE__ */ F("div", {
		ref: _,
		className: C("relative overflow-hidden border border-white/25 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: [
			/* @__PURE__ */ P("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				style: {
					...p,
					backdropFilter: "blur(3px)",
					filter: "url(#glass-distortion)",
					isolation: "isolate"
				}
			}),
			/* @__PURE__ */ P("div", {
				className: "absolute inset-0 z-10 pointer-events-none",
				style: {
					...p,
					background: n === "panel" ? l === "dark" ? "rgba(26, 28, 40, 0.66)" : "rgba(246, 246, 246, 0.62)" : "rgba(255, 255, 255, 0.08)"
				}
			}),
			/* @__PURE__ */ P("div", {
				className: "absolute inset-0 z-20 pointer-events-none",
				style: {
					...p,
					boxShadow: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25), inset -0.5px -0.5px 1px 1px rgba(255, 255, 255, 0.15)"
				}
			}),
			/* @__PURE__ */ P("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			})
		]
	}) : /* @__PURE__ */ F("div", {
		ref: _,
		className: C("relative overflow-hidden", u ? n === "panel" ? C("bg-white/60 dark:bg-[#1a1c26]/64 border-white/40 dark:border-white/15", m) : C("bg-white/12 dark:bg-white/5 border-white/30 dark:border-white/15", m, "inset_0_1px_0_rgba(255,255,255,0.4)") : C(n === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", m), n === "menubar" || n === "taskbar" ? "border-b" : "border", t),
		style: {
			...p,
			backdropFilter: v,
			WebkitBackdropFilter: v,
			...a
		},
		...s,
		children: [
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ P("div", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none z-10",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.5) 70%, transparent 95%)" }
			}),
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ P("div", {
				"aria-hidden": !0,
				className: "absolute inset-y-0 left-0 w-px pointer-events-none z-10",
				style: { background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)" }
			}),
			/* @__PURE__ */ P("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			}),
			u && /* @__PURE__ */ P(zf, { className: "absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" }),
			u && g && /* @__PURE__ */ P("svg", {
				"aria-hidden": !0,
				style: {
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ F("filter", {
					id: g.filterId,
					colorInterpolationFilters: "sRGB",
					children: [
						/* @__PURE__ */ P("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "0.2",
							result: "blurred_source"
						}),
						/* @__PURE__ */ P("feImage", {
							href: g.displacementUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "displacement_map",
							"result-type": "feImage"
						}),
						/* @__PURE__ */ P("feDisplacementMap", {
							in: "blurred_source",
							in2: "displacement_map",
							scale: 80,
							xChannelSelector: "R",
							yChannelSelector: "G",
							result: "displaced"
						}),
						/* @__PURE__ */ P("feColorMatrix", {
							in: "displaced",
							type: "saturate",
							result: "displaced_saturated",
							values: "6"
						}),
						/* @__PURE__ */ P("feImage", {
							href: g.specularUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "specular_layer"
						}),
						/* @__PURE__ */ P("feComposite", {
							in: "displaced_saturated",
							in2: "specular_layer",
							operator: "in",
							result: "specular_saturated"
						}),
						/* @__PURE__ */ P("feComponentTransfer", {
							in: "specular_layer",
							result: "specular_faded",
							children: /* @__PURE__ */ P("feFuncA", {
								type: "linear",
								slope: "0.3"
							})
						}),
						/* @__PURE__ */ P("feBlend", {
							in: "specular_saturated",
							in2: "displaced",
							mode: "normal",
							result: "withSaturation"
						}),
						/* @__PURE__ */ P("feBlend", {
							in: "specular_faded",
							in2: "withSaturation",
							mode: "normal"
						})
					]
				})
			})
		]
	}) : /* @__PURE__ */ P("div", {
		ref: _,
		className: C("relative overflow-hidden border", n === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: /* @__PURE__ */ P("div", {
			className: "relative z-20 min-w-0 w-full h-full",
			children: e
		})
	});
}
//#endregion
//#region src/components/menubar/ControlCenter.tsx
function Wf({ forceDark: e = !1 } = {}) {
	let [t, n] = N(!1), r = S((e) => e.colorScheme), i = S((e) => e.setColorScheme), a = S((e) => e.glassEnabled), o = S((e) => e.setGlassEnabled), s = S((e) => e.wallpaperTextTheme), [c, l] = N(75), [u, d] = N(80), f = e ? "dark" : s, p = f === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", m = f === "light" ? "text-black/90" : "text-white/90", h = f === "light" ? "text-black/55" : "text-white/55", g = f === "light" ? "text-black/45" : "text-white/45", _ = f === "light" ? "bg-black/5" : "bg-white/5", v = f === "light" ? "hover:bg-black/10 text-black/70" : "hover:bg-white/10 text-white/80";
	return /* @__PURE__ */ F(Af, {
		open: t,
		onOpenChange: n,
		modal: !1,
		children: [/* @__PURE__ */ P(jf, {
			asChild: !0,
			children: /* @__PURE__ */ P("button", {
				className: `p-1.5 rounded-md transition-colors flex items-center gap-1 ${p}`,
				"aria-label": "Control Center",
				children: /* @__PURE__ */ P(Qd, { className: "w-4 h-4" })
			})
		}), /* @__PURE__ */ P(Mf, { children: /* @__PURE__ */ P(Nf, {
			align: "end",
			sideOffset: 6,
			className: "w-72 z-[9999] outline-none",
			onInteractOutside: (e) => {
				e.target.closest("[data-radix-popper-content-wrapper]") && e.preventDefault();
			},
			onFocusOutside: (e) => e.preventDefault(),
			children: /* @__PURE__ */ P(Uf, {
				variant: "panel",
				className: "p-4 w-full",
				children: /* @__PURE__ */ F("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ F("div", {
							className: C("rounded-[var(--radius-input)] p-3 flex items-center gap-2", _),
							children: [/* @__PURE__ */ P("div", {
								className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ P(tf, { className: "w-4 h-4 text-white" })
							}), /* @__PURE__ */ F("div", { children: [/* @__PURE__ */ P("p", {
								className: C("text-xs font-semibold", m),
								children: "Wi-Fi"
							}), /* @__PURE__ */ P("p", {
								className: C("text-[10px]", h),
								children: "Connected"
							})] })]
						}),
						/* @__PURE__ */ F("div", {
							className: C("rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ P("p", {
								className: C("text-xs font-semibold mb-2", m),
								children: "Appearance"
							}), /* @__PURE__ */ P("div", {
								className: "flex gap-1",
								children: [
									{
										id: "light",
										icon: /* @__PURE__ */ P(re, { className: "w-3 h-3" })
									},
									{
										id: "auto",
										icon: /* @__PURE__ */ P(ee, { className: "w-3 h-3" })
									},
									{
										id: "dark",
										icon: /* @__PURE__ */ P(Xd, { className: "w-3 h-3" })
									}
								].map(({ id: e, icon: t }) => /* @__PURE__ */ P("button", {
									onClick: () => i(e),
									className: C("flex-1 flex items-center justify-center py-1 rounded-md text-[10px] transition-colors", r === e ? "bg-blue-500 text-white" : v),
									children: t
								}, e))
							})]
						}),
						/* @__PURE__ */ F("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ F("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ P(re, { className: C("w-3 h-3", m) }),
									/* @__PURE__ */ P("p", {
										className: C("text-xs font-semibold", m),
										children: "Brightness"
									}),
									/* @__PURE__ */ F("span", {
										className: C("text-[10px] ml-auto", g),
										children: [u, "%"]
									})
								]
							}), /* @__PURE__ */ P("input", {
								type: "range",
								min: 0,
								max: 100,
								value: u,
								onChange: (e) => d(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ F("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ F("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ P(ie, { className: C("w-3 h-3", m) }),
									/* @__PURE__ */ P("p", {
										className: C("text-xs font-semibold", m),
										children: "Sound"
									}),
									/* @__PURE__ */ F("span", {
										className: C("text-[10px] ml-auto", g),
										children: [c, "%"]
									})
								]
							}), /* @__PURE__ */ P("input", {
								type: "range",
								min: 0,
								max: 100,
								value: c,
								onChange: (e) => l(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ F("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3 flex items-center justify-between", _),
							children: [/* @__PURE__ */ P("p", {
								className: C("text-xs font-semibold", m),
								children: "Liquid Glass"
							}), /* @__PURE__ */ P("button", {
								onClick: () => o(!a),
								className: C("w-10 h-5 rounded-full transition-colors relative", a ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
								children: /* @__PURE__ */ P("span", { className: C("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all", a ? "left-5" : "left-0.5") })
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
var Gf = D("dark");
function Kf() {
	return A(Gf) === "light" ? "text-black/80 hover:bg-black/10" : "text-white/85 hover:bg-white/10";
}
var qf = "flex h-6 items-center rounded-md px-2.5 text-[14px] leading-none transition-colors";
function Jf({ label: e, shortcut: t, disabled: n, checked: r, onClick: i }) {
	return /* @__PURE__ */ F("button", {
		disabled: n,
		className: C("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", n ? "text-black/30 dark:text-white/30" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
		onClick: i,
		children: [/* @__PURE__ */ F("span", {
			className: "flex items-center",
			children: [/* @__PURE__ */ P("span", {
				className: "mr-1.5 w-3 shrink-0 text-center",
				children: r ? "✓" : ""
			}), e]
		}), t && /* @__PURE__ */ P("span", {
			className: "text-[11px] opacity-50 ml-6",
			children: t
		})]
	});
}
function Yf() {
	return /* @__PURE__ */ P("div", { className: "my-1 mx-2 h-px bg-black/10 dark:bg-white/10" });
}
function Xf(e, t) {
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
function Zf(e, t) {
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
function Qf({ item: e, t, onSelect: n }) {
	let [r, i] = N(!1), [a, o] = N(null), s = M(null), c = M(null), l = !!e.children && e.children.length > 0, u = k(() => {
		if (c.current &&= (clearTimeout(c.current), null), !s.current) return;
		let e = s.current.getBoundingClientRect();
		o({
			top: e.top - 4,
			left: e.right + 2
		}), i(!0);
	}, []), d = k(() => {
		c.current = setTimeout(() => i(!1), 150);
	}, []);
	return j(() => () => {
		c.current && clearTimeout(c.current);
	}, []), l ? /* @__PURE__ */ F("div", {
		onMouseEnter: u,
		onMouseLeave: d,
		children: [/* @__PURE__ */ F("button", {
			ref: s,
			disabled: e.disabled,
			className: C("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", e.disabled ? "text-black/30 dark:text-white/30" : r ? "bg-accent-active text-white" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
			children: [/* @__PURE__ */ P("span", { children: Zf(e.label, t) }), /* @__PURE__ */ P(T, { className: "w-3.5 h-3.5 ml-6 opacity-60" })]
		}), r && a && typeof document < "u" && be(/* @__PURE__ */ P("div", {
			"data-menu-portal": "true",
			className: "fixed z-[99999] outline-none",
			style: {
				top: a.top,
				left: a.left,
				minWidth: 192
			},
			onMouseEnter: u,
			onMouseLeave: d,
			children: /* @__PURE__ */ P(Uf, {
				variant: "panel",
				className: "py-1 px-1 w-full",
				children: e.children.map((e, r) => e.separator ? /* @__PURE__ */ P(Yf, {}, `sep-${r}`) : /* @__PURE__ */ P(Qf, {
					item: e,
					t,
					onSelect: n
				}, e.key))
			})
		}), document.body)]
	}) : /* @__PURE__ */ P(Jf, {
		label: Zf(e.label, t),
		shortcut: e.shortcut,
		disabled: e.disabled,
		checked: e.checked,
		onClick: () => n(e)
	});
}
//#endregion
//#region src/components/menubar/MenuBarExtraButton.tsx
var $f = {
	ok: "bg-green-500",
	busy: "bg-yellow-400 animate-pulse",
	error: "bg-red-500",
	neutral: "bg-neutral-400"
};
function ep({ item: e, forceDark: t = !1 }) {
	let n = A(Gf), r = (t ? "dark" : n) === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", [i, a] = N(!1);
	return /* @__PURE__ */ F(Af, {
		modal: !1,
		open: i,
		onOpenChange: a,
		children: [/* @__PURE__ */ P(jf, {
			asChild: !0,
			children: /* @__PURE__ */ F("button", {
				className: C(qf, "relative px-2", r, "data-[state=open]:bg-accent-active data-[state=open]:text-white"),
				title: e.label,
				"aria-label": e.label,
				children: [e.icon, e.status && /* @__PURE__ */ P("span", { className: C("absolute bottom-0.5 right-0.5 h-1.5 w-1.5 rounded-full ring-1 ring-black/20", $f[e.status]) })]
			})
		}), /* @__PURE__ */ P(Mf, { children: /* @__PURE__ */ P(Nf, {
			align: "end",
			sideOffset: 6,
			className: "z-[100000] outline-none",
			onInteractOutside: (e) => {
				e.target.closest("[data-radix-popper-content-wrapper]") && e.preventDefault();
			},
			onFocusOutside: (e) => e.preventDefault(),
			onClick: (e) => {
				e.target.closest("button") && a(!1);
			},
			children: /* @__PURE__ */ P(Uf, {
				variant: "panel",
				className: "min-w-56 max-w-sm p-3",
				children: e.content
			})
		}) })]
	});
}
//#endregion
//#region src/lib/menu-bar-extras.ts
var tp = D([]), np = tp.Provider;
function rp() {
	return A(tp);
}
//#endregion
//#region src/components/menubar/DropdownPanel.tsx
function ip({ anchorRef: e, open: t, onClose: n, minWidth: r = 192, children: i }) {
	let [a, o] = N(null), s = M(null);
	return j(() => {
		if (!t || !e.current) return;
		let n = e.current.getBoundingClientRect();
		o({
			top: n.bottom + 6,
			left: n.left
		});
	}, [t, e]), j(() => {
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
	]), !t || !a || typeof document > "u" ? null : be(/* @__PURE__ */ P("div", {
		ref: s,
		"data-menu-portal": "true",
		className: "fixed z-[99999] outline-none",
		style: {
			top: a.top,
			left: a.left,
			minWidth: r
		},
		children: /* @__PURE__ */ P(Uf, {
			variant: "panel",
			className: "py-1 px-1 w-full",
			children: i
		})
	}), document.body);
}
//#endregion
//#region src/components/shared/FloatingWindow.tsx
var ap = 50;
function op(e, t, n, r, i) {
	let a = Math.max(r, Math.min(i, e));
	return t > r && a < t ? t - a < ap ? t : a + ap : n < i && a > n ? a - n < ap ? n : a - ap : a;
}
function sp({ onClose: e, children: t, title: n, width: r = 288, height: i, blocking: a = !1, resizable: o = !1, minWidth: s = 260, minHeight: c = 160, contentClassName: l, container: u }) {
	let d = M(null), f = S((e) => e.allowDragOutOfBounds), { config: p } = Gd(), m = p.hasMenuBar ? p.layout.window.dragTopInset : 0, h = p.layout.chrome.taskbarHeight, g = k(() => {
		S.setState((e) => {
			for (let t of Object.values(e.windows)) t.isFocused &&= !1;
			e.focusedWindowId !== null && (e.focusedWindowId = null);
		});
	}, []);
	j(() => (g(), () => {
		let e = Object.values(S.getState().windows).filter((e) => !e.isMinimized);
		if (e.length > 0) {
			let t = [...e].sort((e, t) => t.zIndex - e.zIndex)[0];
			t && S.getState().focusWindow(t.id);
		}
	}), [g]);
	let [_, v] = N(null), [y, b] = N({
		width: r,
		height: i
	}), [x, C] = N(!1), w = M(null), T = M(null), ee = k(() => {
		if (_) return _;
		if (!d.current) return {
			left: 0,
			top: m
		};
		let e = d.current.getBoundingClientRect(), t = {
			left: e.left,
			top: Math.max(m, e.top)
		};
		return v(t), t;
	}, [_, m]), te = k((e) => {
		if (e.target.closest("button")) return;
		g(), e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId);
		let { left: t, top: n } = ee();
		w.current = {
			mx: e.clientX,
			my: e.clientY,
			left: t,
			top: n
		};
	}, [ee, g]), ne = k((e) => {
		if (!w.current) return;
		e.preventDefault(), e.stopPropagation();
		let t = d.current, n = t?.offsetWidth ?? y.width, r = t?.offsetHeight ?? y.height ?? 300, i = window.innerWidth, a = window.innerHeight, o = w.current.left + (e.clientX - w.current.mx), s = w.current.top + (e.clientY - w.current.my), c = f ? -(n - Math.min(200, n)) : 0, l = f ? i - Math.min(200, n) : i - n, u = m, p = f ? a - Math.min(200, r) : a - h - r, g = Math.max(c, l), _ = Math.max(u, p), b = op(o, 0, i - n, c, g), x = op(s, m, a - h - r, u, _);
		v({
			left: b,
			top: x
		});
	}, [
		f,
		m,
		h,
		y
	]), re = k((e) => {
		w.current &&= (e.preventDefault(), e.stopPropagation(), null);
	}, []), ie = k((e) => {
		e.preventDefault(), e.stopPropagation(), e.currentTarget.setPointerCapture(e.pointerId), ee(), T.current = {
			mx: e.clientX,
			my: e.clientY,
			w: y.width,
			h: y.height ?? c
		};
	}, [
		ee,
		y,
		c
	]), oe = k((e) => {
		if (!T.current) return;
		e.preventDefault(), e.stopPropagation();
		let t = window.innerWidth, n = window.innerHeight, r = _?.left ?? 0, i = _?.top ?? 0, a = Math.max(s, t - r), o = Math.max(c, n - i - h);
		b({
			width: Math.min(a, Math.max(s, T.current.w + (e.clientX - T.current.mx))),
			height: Math.min(o, Math.max(c, T.current.h + (e.clientY - T.current.my)))
		});
	}, [
		_,
		s,
		c,
		h
	]), se = k((e) => {
		T.current &&= (e.preventDefault(), e.stopPropagation(), null);
	}, []);
	return typeof document > "u" ? null : be(/* @__PURE__ */ F("div", {
		className: _ ? "fixed inset-0 pointer-events-none" : "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99999 },
		children: [a && /* @__PURE__ */ P("div", {
			className: "absolute inset-0 pointer-events-auto",
			onPointerDown: g
		}), /* @__PURE__ */ F("div", {
			ref: d,
			"data-windowchrome": "true",
			className: "relative flex flex-col bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 overflow-hidden pointer-events-auto select-none",
			style: _ ? {
				position: "absolute",
				left: _.left,
				top: _.top,
				width: y.width,
				height: y.height
			} : {
				width: y.width,
				height: y.height
			},
			onPointerDownCapture: g,
			onPointerMove: ne,
			onPointerUp: re,
			onPointerCancel: re,
			children: [
				/* @__PURE__ */ F("div", {
					className: "w-full flex shrink-0 items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
					onPointerDown: te,
					onMouseEnter: () => C(!0),
					onMouseLeave: () => C(!1),
					children: [/* @__PURE__ */ F("div", {
						className: "flex items-center gap-2",
						onPointerDown: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ P("button", {
								onClick: e,
								className: "w-4 h-4 rounded-full flex items-center justify-center transition-all duration-100",
								style: { backgroundColor: "#ff5f57" },
								title: "Close",
								children: x && /* @__PURE__ */ P(ae, {
									className: "w-2.5 h-2.5 text-red-950 dark:text-red-950/90",
									strokeWidth: 3.5
								})
							}),
							/* @__PURE__ */ P("div", {
								className: "w-4 h-4 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							}),
							/* @__PURE__ */ P("div", {
								className: "w-4 h-4 rounded-full",
								style: { backgroundColor: "#d1d1d1" }
							})
						]
					}), n && /* @__PURE__ */ P("span", {
						className: "flex-1 text-center text-[12px] font-medium text-black/60 dark:text-white/60 select-none",
						children: n
					})]
				}),
				/* @__PURE__ */ P("div", {
					className: l ?? "flex flex-col items-center px-8 pt-6 pb-7 gap-3 select-none",
					children: t
				}),
				o && /* @__PURE__ */ P("div", {
					onPointerDown: ie,
					onPointerMove: oe,
					onPointerUp: se,
					onPointerCancel: se,
					className: "absolute bottom-0 right-0 h-4 w-4 cursor-nwse-resize",
					style: { touchAction: "none" },
					title: "Kéo để đổi kích thước"
				})
			]
		})]
	}), u ?? document.body);
}
//#endregion
//#region src/components/menubar/PersonalAboutDialog.tsx
function cp({ onClose: e }) {
	return /* @__PURE__ */ P(sp, {
		onClose: e,
		width: 320,
		children: /* @__PURE__ */ F("div", {
			className: "flex flex-col items-center px-8 pt-6 pb-7 gap-2",
			children: [
				/* @__PURE__ */ P("div", {
					className: "w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg select-none",
					children: "S"
				}),
				/* @__PURE__ */ P("div", {
					className: "text-[17px] font-bold text-black/90 dark:text-white/90 select-none",
					children: "Skyline"
				}),
				/* @__PURE__ */ P("div", {
					className: "text-[13px] text-black/55 dark:text-white/55 select-none",
					children: "sonth87@gmail.com"
				}),
				/* @__PURE__ */ P("div", { className: "w-full h-px bg-black/10 dark:bg-white/10 my-2" }),
				/* @__PURE__ */ F("div", {
					className: "text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed select-none",
					children: [
						"macOS Desktop Layout",
						/* @__PURE__ */ P("br", {}),
						"Version 1.0 · Built with Next.js & React"
					]
				}),
				/* @__PURE__ */ F("a", {
					href: "https://github.com/sonth87/device-layout",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1 pointer-events-auto select-none",
					children: [/* @__PURE__ */ P("svg", {
						viewBox: "0 0 24 24",
						className: "w-3.5 h-3.5 fill-current",
						"aria-hidden": "true",
						children: /* @__PURE__ */ P("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" })
					}), "sonth87/device-layout"]
				}),
				/* @__PURE__ */ P("div", {
					className: "text-[11px] text-black/35 dark:text-white/35 text-center mt-1 select-none",
					children: "© 2026 Skyline. All rights reserved."
				})
			]
		})
	});
}
//#endregion
//#region src/contexts/CustomOSIconContext.tsx
var lp = D({});
function up({ config: e, children: t }) {
	return /* @__PURE__ */ P(lp.Provider, {
		value: e,
		children: t
	});
}
function dp() {
	return A(lp);
}
//#endregion
//#region src/components/menubar/AppleMenuDropdown.tsx
function fp({ activeId: e, setActiveId: t }) {
	let { macOSAppleIcon: n } = dp(), r = e === "apple", i = k((e) => {
		t((typeof e == "function" ? e(r) : e) ? "apple" : null);
	}, [r, t]), a = Kf(), [o, s] = N(!1), c = M(null), l = S((e) => e.apps), u = S((e) => e.launchApp), { t: d } = oe(), f = k(() => i(!1), [i]);
	return /* @__PURE__ */ F(ye, { children: [
		/* @__PURE__ */ P("button", {
			ref: c,
			onMouseDown: (e) => {
				e.button === 0 && i((e) => !e);
			},
			onMouseEnter: () => {
				e !== null && t("apple");
			},
			className: C(qf, r ? "bg-accent-active text-white" : a),
			children: n ? /* @__PURE__ */ P("span", {
				className: "flex items-center justify-center h-4 w-auto max-h-4 shrink-0 select-none [&>svg]:h-full [&>svg]:w-auto [&>img]:h-full [&>img]:w-auto",
				children: n
			}) : /* @__PURE__ */ P("span", {
				className: "text-2xl leading-none font-sans",
				children: ""
			})
		}),
		/* @__PURE__ */ F(ip, {
			anchorRef: c,
			open: r,
			onClose: f,
			minWidth: 220,
			children: [
				/* @__PURE__ */ P(Jf, {
					label: d.aboutThisMac,
					onClick: () => {
						i(!1), s(!0);
					}
				}),
				/* @__PURE__ */ P(Yf, {}),
				/* @__PURE__ */ P(Jf, {
					label: d.systemSettings,
					onClick: () => {
						i(!1);
						let e = l.settings;
						e && u(e);
					}
				})
			]
		}),
		o && /* @__PURE__ */ P(cp, { onClose: () => s(!1) })
	] });
}
//#endregion
//#region src/components/menubar/AppNameDropdown.tsx
function pp({ appConfig: e, appId: t, activeId: n, setActiveId: r }) {
	let i = n === "app-name", a = k((e) => {
		r((typeof e == "function" ? e(i) : e) ? "app-name" : null);
	}, [i, r]), o = Kf(), s = M(null), c = S((e) => e.closeWindow), { t: l, getAppName: u } = oe();
	if (!e) return null;
	let d = u(e.id, e.name), f = k(() => a(!1), [a]), p = (e) => {
		t && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e
		} }));
	}, m = () => {
		if (a(!1), !t) return;
		let { windows: e } = S.getState();
		Object.values(e).filter((e) => e.appId === t).forEach((e) => c(e.id));
	}, h = e?.appNameMenuExtraItems, g = (e) => {
		a(!1), e.action && t && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} }));
	};
	return /* @__PURE__ */ F(ye, { children: [/* @__PURE__ */ P("button", {
		ref: s,
		onMouseDown: (e) => {
			e.button === 0 && a((e) => !e);
		},
		onMouseEnter: () => {
			n !== null && r("app-name");
		},
		className: C(qf, "font-bold", i ? "bg-accent-active text-white" : o),
		children: /* @__PURE__ */ P("span", {
			className: "text-[14px] font-bold",
			children: d
		})
	}), /* @__PURE__ */ F(ip, {
		anchorRef: s,
		open: i,
		onClose: f,
		minWidth: 208,
		children: [
			/* @__PURE__ */ P(Jf, {
				label: `${l.aboutApp} ${d}`,
				onClick: () => {
					a(!1), p("about");
				},
				disabled: !t
			}),
			/* @__PURE__ */ P(Yf, {}),
			h && h.length > 0 ? h.map((e, t) => e.separator ? /* @__PURE__ */ P(Yf, {}, `sep-${t}`) : /* @__PURE__ */ P(Qf, {
				item: e,
				t: l,
				onSelect: g
			}, e.key)) : /* @__PURE__ */ F(ye, { children: [
				/* @__PURE__ */ P(Jf, {
					label: l.services,
					disabled: !0
				}),
				/* @__PURE__ */ P(Yf, {}),
				/* @__PURE__ */ P(Jf, {
					label: `${l.hide} ${d}`,
					shortcut: "⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ P(Jf, {
					label: l.hideOthers,
					shortcut: "⌥⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ P(Jf, {
					label: l.showAll,
					disabled: !0
				})
			] }),
			/* @__PURE__ */ P(Yf, {}),
			/* @__PURE__ */ P(Jf, {
				label: `${l.quit} ${d}`,
				shortcut: "⌘Q",
				onClick: m
			})
		]
	})] });
}
//#endregion
//#region src/components/menubar/MenuDropdown.tsx
function mp({ label: e, items: t, appId: n, windowId: r, activeId: i, setActiveId: a }) {
	let o = i === e, s = k((t) => {
		a((typeof t == "function" ? t(o) : t) ? e : null);
	}, [
		o,
		e,
		a
	]), c = Kf(), l = M(null), { t: u } = oe(), d = k(() => s(!1), [s]), f = (e) => {
		s(!1), e.action && n && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: n,
			action: e.action,
			windowId: r
		} }));
	};
	return /* @__PURE__ */ F(ye, { children: [/* @__PURE__ */ P("button", {
		ref: l,
		onMouseDown: (e) => {
			e.button === 0 && s((e) => !e);
		},
		onMouseEnter: () => {
			i !== null && a(e);
		},
		className: C(qf, o ? "bg-accent-active text-white" : c),
		children: Xf(e, u)
	}), /* @__PURE__ */ P(ip, {
		anchorRef: l,
		open: o,
		onClose: d,
		minWidth: 192,
		children: t.map((e, t) => e.separator ? /* @__PURE__ */ P(Yf, {}, `sep-${t}`) : /* @__PURE__ */ P(Qf, {
			item: e,
			t: u,
			onSelect: f
		}, e.key))
	})] });
}
//#endregion
//#region src/contexts/SimpleModeContext.tsx
var hp = D({
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
	allowedOSThemes: [
		"macos",
		"windows",
		"ipad",
		"iphone",
		"android"
	],
	allowDarkModeToggle: !0
});
function gp({ features: e, children: t }) {
	return /* @__PURE__ */ P(hp.Provider, {
		value: e,
		children: t
	});
}
function _p() {
	return A(hp);
}
//#endregion
//#region src/components/menubar/MenuBar.tsx
function vp({ onSpotlight: e, isSimpleMode: t = !1, forceDark: n = !1, fallbackMenuBarAppId: r = null } = {}) {
	let i = _p(), a = S((e) => e.activeAppId), o = S((e) => e.apps), s = a ?? r, c = s ? o[s] : null, l = i.menuBar.appleMenu, u = i.menuBar.appNameMenu && !!c, d = c?.menuBarMenus ?? [], f = S((e) => e.wallpaperTextTheme), p = n ? "dark" : f, m = C(qf, "px-2", p === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10"), [h, g] = N(null), _ = rp(), v = i.menuBar.extras && _.length > 0;
	if (!i.menuBar.enabled) return null;
	let y = i.menuBar.spotlight || i.menuBar.controlCenter || i.menuBar.clock || v;
	return /* @__PURE__ */ P(Gf.Provider, {
		value: p,
		children: /* @__PURE__ */ P(Uf, {
			variant: "menubar",
			forceGlass: !n && void 0,
			className: C("h-(--menubar-height) w-full", n ? "border-b-black/70 bg-[#111318] shadow-none" : void 0),
			children: /* @__PURE__ */ F("div", {
				"data-menubar": "true",
				"data-fullscreen-menubar": n ? "true" : void 0,
				className: "flex h-full w-full items-center px-2",
				children: [
					/* @__PURE__ */ F("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							l && /* @__PURE__ */ P(fp, {
								activeId: h,
								setActiveId: g
							}),
							u && /* @__PURE__ */ P(pp, {
								appConfig: c,
								appId: a,
								activeId: h,
								setActiveId: g
							}),
							d.map((e) => /* @__PURE__ */ P(mp, {
								label: e.label,
								items: e.items,
								appId: a,
								activeId: h,
								setActiveId: g
							}, e.label))
						]
					}),
					/* @__PURE__ */ P("div", { className: "flex-1" }),
					y && /* @__PURE__ */ F("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							i.menuBar.spotlight && /* @__PURE__ */ P("button", {
								onClick: e,
								className: m,
								title: "Spotlight Search (⌘Space)",
								children: /* @__PURE__ */ P(ne, { className: "w-4 h-4" })
							}),
							v && _.map((e) => /* @__PURE__ */ P(ep, {
								item: e,
								forceDark: n
							}, e.id)),
							i.menuBar.controlCenter && /* @__PURE__ */ F(ye, { children: [
								/* @__PURE__ */ P("button", {
									className: m,
									children: /* @__PURE__ */ P(tf, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ P("button", {
									className: m,
									children: /* @__PURE__ */ P(Kd, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ P(Wf, { forceDark: n })
							] }),
							i.menuBar.clock && /* @__PURE__ */ P("div", {
								className: "flex h-6 items-center rounded-md px-2",
								children: /* @__PURE__ */ P(nf, { forceDark: n })
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
function yp({ appName: e, error: t, onRetry: n }) {
	let { t: r } = oe();
	return /* @__PURE__ */ F("div", {
		className: "flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ P($d, { className: "h-6 w-6 text-black/30 dark:text-white/30" }),
			/* @__PURE__ */ F("div", {
				className: "text-sm font-medium text-black/70 dark:text-white/70",
				children: [
					e,
					" ",
					r.appCrashedTitle
				]
			}),
			/* @__PURE__ */ P("div", {
				className: "max-w-xs break-words text-xs text-black/40 dark:text-white/40",
				children: t.message
			}),
			/* @__PURE__ */ F("button", {
				type: "button",
				onClick: n,
				className: "mt-1 flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-medium text-black/70 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15",
				children: [/* @__PURE__ */ P(te, { className: "h-3 w-3" }), r.appCrashedRetry]
			})
		]
	});
}
var bp = class extends le {
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
		return this.state.error ? /* @__PURE__ */ P(yp, {
			appName: this.props.appName,
			error: this.state.error,
			onRetry: this.handleRetry
		}) : /* @__PURE__ */ P("div", {
			className: "h-full w-full",
			children: this.props.children
		}, this.state.retryCount);
	}
}, xp = {
	Finder: O(() => import("./Finder-CO1FM3SV.js").then((e) => ({ default: e.Finder }))),
	Terminal: O(() => import("./Terminal-CA5QC5sM.js").then((e) => ({ default: e.Terminal }))),
	Settings: O(() => import("./Settings-YQhIciL6.js").then((e) => ({ default: e.Settings }))),
	Browser: O(() => import("./Browser-Cqx-QULu.js").then((e) => ({ default: e.Browser }))),
	TextEditor: O(() => import("./TextEditor-DJzPRB4L.js").then((e) => ({ default: e.TextEditor }))),
	Clock: O(() => import("./Clock-BrbKfQs4.js").then((e) => ({ default: e.Clock }))),
	Calculator: O(() => import("./Calculator-_iWAyMhI.js").then((e) => ({ default: e.Calculator }))),
	Notes: O(() => import("./Notes-CQ_zys-9.js").then((e) => ({ default: e.Notes }))),
	Photos: O(() => import("./Photos-DRqXRCfu.js").then((e) => ({ default: e.Photos }))),
	Music: O(() => import("./Music-D3LXNgae.js").then((e) => ({ default: e.Music }))),
	Calendar: O(() => import("./Calendar-BbtTFHjA.js").then((e) => ({ default: e.Calendar }))),
	Messages: O(() => import("./Messages-DLvXC0Mk.js").then((e) => ({ default: e.Messages }))),
	IframeApp: O(() => import("./IframeApp-BiNTRAoe.js").then((e) => ({ default: e.IframeApp }))),
	MdxApp: O(() => import("./MdxApp-DGr6t_nf.js").then((e) => ({ default: e.MdxApp })))
};
function Sp() {
	return /* @__PURE__ */ P("div", {
		className: "flex items-center justify-center h-full w-full",
		children: /* @__PURE__ */ P(Jd, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
	});
}
function Cp({ appId: e, windowId: t }) {
	let n = S((t) => t.apps[e]);
	if (!n) return /* @__PURE__ */ F("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["App not found: ", e]
	});
	if (n.render) {
		let r = n.render;
		return /* @__PURE__ */ P(de, {
			fallback: /* @__PURE__ */ P(Sp, {}),
			children: /* @__PURE__ */ P(se, { children: /* @__PURE__ */ P(bp, {
				appId: e,
				appName: n.name,
				children: /* @__PURE__ */ P(r, {
					appId: e,
					windowId: t
				})
			}) })
		});
	}
	let r = n.component ? xp[n.component] : void 0;
	return r ? /* @__PURE__ */ P(de, {
		fallback: /* @__PURE__ */ P(Sp, {}),
		children: /* @__PURE__ */ P(se, { children: /* @__PURE__ */ P(bp, {
			appId: e,
			appName: n.name,
			children: /* @__PURE__ */ P(r, {
				appId: e,
				windowId: t
			})
		}) })
	}) : /* @__PURE__ */ F("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["Component not registered: ", n.component ?? "(none)"]
	});
}
//#endregion
//#region src/components/mobile/MobileMenuSheet.tsx
function wp({ menus: e, appId: t, open: n, onClose: r }) {
	let { t: i } = oe(), [a, o] = N(null), s = k((e) => {
		e.action && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} })), r();
	}, [t, r]);
	return typeof document > "u" ? null : be(/* @__PURE__ */ P(pl, { children: n && /* @__PURE__ */ F(ye, { children: [/* @__PURE__ */ P(ld.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 bg-black/30 z-[2000]",
		onClick: r
	}, "backdrop"), /* @__PURE__ */ F(ld.div, {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 38
		},
		className: "fixed bottom-0 left-0 right-0 z-[2001] max-h-[75vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-neutral-900 shadow-2xl",
		children: [/* @__PURE__ */ P("div", {
			className: "sticky top-0 flex justify-center py-2 bg-white dark:bg-neutral-900",
			children: /* @__PURE__ */ P("div", { className: "w-10 h-1 rounded-full bg-black/20 dark:bg-white/25" })
		}), /* @__PURE__ */ P("div", {
			className: "px-4 pb-8",
			children: e.map((e) => /* @__PURE__ */ F("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ P("div", {
					className: "px-1 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40",
					children: Xf(e.label, i)
				}), /* @__PURE__ */ P("div", {
					className: "rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.06]",
					children: e.items.map((e, t) => e.separator ? /* @__PURE__ */ P("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${t}`) : /* @__PURE__ */ P(Tp, {
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
function Tp({ item: e, t, onSelect: n, expandedKey: r, setExpandedKey: i, depth: a = 0 }) {
	let o = !!e.children && e.children.length > 0, s = r === e.key;
	return o ? /* @__PURE__ */ F("div", { children: [/* @__PURE__ */ F("button", {
		onClick: () => i(s ? null : e.key),
		style: { paddingLeft: 12 + a * 16 },
		className: "w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 transition-colors",
		children: [/* @__PURE__ */ P("span", { children: Zf(e.label, t) }), /* @__PURE__ */ P(qd, { className: C("w-4 h-4 opacity-50 transition-transform", s && "rotate-180") })]
	}), /* @__PURE__ */ P(pl, {
		initial: !1,
		children: s && /* @__PURE__ */ P(ld.div, {
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
			children: e.children.map((e, o) => e.separator ? /* @__PURE__ */ P("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${o}`) : /* @__PURE__ */ P(Tp, {
				item: e,
				t,
				onSelect: n,
				expandedKey: r,
				setExpandedKey: i,
				depth: a + 1
			}, e.key))
		})
	})] }) : /* @__PURE__ */ F("button", {
		disabled: e.disabled,
		onClick: () => n(e),
		style: { paddingLeft: 12 + a * 16 },
		className: C("w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left active:bg-black/5 dark:active:bg-white/10 transition-colors", e.disabled ? "text-black/30 dark:text-white/30" : "text-black dark:text-white"),
		children: [/* @__PURE__ */ P("span", { children: Zf(e.label, t) }), e.shortcut && /* @__PURE__ */ P("span", {
			className: "text-[12px] opacity-40 ml-4",
			children: e.shortcut
		})]
	});
}
//#endregion
//#region src/components/mobile/MobileAppViewer.tsx
var Ep = D(null);
function Dp() {
	return A(Ep);
}
function Op({ statusBarHeight: e, navBarHeight: t, homeIndicatorHeight: n = 20 }) {
	let r = S((e) => e.windows), i = S((e) => e.apps), a = S((e) => e.closeWindow), [o, s] = N(!1), [c, l] = N(!1), u = Object.values(r).filter((e) => !e.isMinimized).sort((e, t) => t.zIndex - e.zIndex), d = u[0] ?? null, f = k(() => {
		d && a(d.id);
	}, [d, a]), p = d ? i[d.appId] : null, m = Ud(), h = ud(0), g = pd(h, [0, -220], [1, .75]), _ = pd(h, [0, -220], [0, 48]);
	return /* @__PURE__ */ P(pl, { children: d && p && /* @__PURE__ */ F(ld.div, {
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
			t.offset.y < -85 && u.forEach((e) => a(e.id)), Bd(h, 0, {
				type: "spring",
				stiffness: 300,
				damping: 30
			});
		},
		children: [
			/* @__PURE__ */ P(pl, {
				initial: !1,
				children: !o && /* @__PURE__ */ F(ld.div, {
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
						/* @__PURE__ */ P("button", {
							onClick: f,
							className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ P("svg", {
								className: "w-5 h-5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2.5,
								children: /* @__PURE__ */ P("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M15 19l-7-7 7-7"
								})
							})
						}),
						/* @__PURE__ */ P("span", {
							className: "flex-1 text-center text-[15px] font-semibold text-black dark:text-white truncate",
							children: p.name
						}),
						p.menuBarMenus && p.menuBarMenus.length > 0 ? /* @__PURE__ */ P("button", {
							onClick: () => l(!0),
							className: "w-5 h-5 flex items-center justify-center text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ P(Yd, { className: "w-5 h-5" })
						}) : /* @__PURE__ */ P("div", { className: "w-5" })
					]
				}, "app-header")
			}),
			/* @__PURE__ */ P("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ P(Ep.Provider, {
					value: s,
					children: /* @__PURE__ */ P(Cp, {
						appId: d.appId,
						windowId: d.id
					})
				})
			}),
			p.menuBarMenus && p.menuBarMenus.length > 0 && /* @__PURE__ */ P(wp, {
				menus: p.menuBarMenus,
				appId: d.appId,
				open: c,
				onClose: () => l(!1)
			}),
			/* @__PURE__ */ P("div", { style: { height: t + n } }),
			/* @__PURE__ */ P("div", {
				onPointerDown: (e) => m.start(e),
				className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 flex items-center justify-center z-[1000] pointer-events-auto cursor-grab active:cursor-grabbing",
				children: /* @__PURE__ */ P("div", { className: "w-32 h-1.5 bg-black/30 dark:bg-white/35 hover:bg-black/50 dark:hover:bg-white/50 rounded-full" })
			})
		]
	}, d.id) });
}
//#endregion
export { ar as A, Bd as C, pl as D, ld as E, nl as O, Wd as S, ud as T, Zd as _, gp as a, Kd as b, up as c, np as d, Uf as f, Qd as g, ef as h, vp as i, B as j, J as k, dp as l, tf as m, Dp as n, _p as o, nf as p, Cp as r, mp as s, Op as t, sp as u, Xd as v, pd as w, Gd as x, qd as y };
