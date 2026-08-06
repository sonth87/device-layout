import { C as e, E as t, O as n, S as r, T as i, a, b as o, c as s, d as c, f as l, g as u, i as d, l as f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, v as x } from "./Combination-dkRdWOFm.js";
import { t as S } from "./store-8-JrD4GH.js";
import { t as C } from "./utils-B6YmNDS2.js";
import { t as w } from "./createLucideIcon--WjuKCts.js";
import { t as ee } from "./chevron-right-BcSxNxws.js";
import { t as te } from "./monitor-CDDW7biH.js";
import { t as ne } from "./refresh-cw-BNk9TuR7.js";
import { t as re } from "./search-BKG97C0x.js";
import { t as ie } from "./sun-DdSv2tyc.js";
import { t as ae } from "./volume-2-DAfADR-a.js";
import { t as oe } from "./x-BYw6fhgP.js";
import { t as se } from "./useTranslation-C5kXMUqi.js";
import { t as ce } from "./AppViewport-BDJLAndL.js";
import * as T from "react";
import { Children as le, Component as ue, Fragment as de, Suspense as fe, createContext as E, createElement as pe, forwardRef as me, isValidElement as he, lazy as D, useCallback as O, useContext as k, useEffect as A, useId as ge, useInsertionEffect as _e, useLayoutEffect as ve, useMemo as ye, useRef as j, useState as M } from "react";
import { Fragment as be, jsx as N, jsxs as P } from "react/jsx-runtime";
import { createPortal as xe } from "react-dom";
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var Se = E({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function Ce(e) {
	let t = j(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var we = typeof window < "u" ? ve : A, Te = /* @__PURE__ */ E(null);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/array.mjs
function Ee(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function De(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/clamp.mjs
var Oe = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function ke(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/errors.mjs
var Ae = () => {}, F = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (Ae = (e, t, n) => {
	!e && typeof console < "u" && console.warn(ke(t, n));
}, F = (e, t, n) => {
	if (!e) throw Error(ke(t, n));
});
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/global-config.mjs
var je = {}, Me = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-object.mjs
function Ne(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var Pe = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Fe(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/noop.mjs
var I = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Ie = (e, t) => (n) => t(e(n)), Le = (...e) => e.reduce(Ie), Re = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, ze = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Ee(this.subscriptions, e), () => De(this.subscriptions, e);
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
}, L = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, R = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function Be(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/warn-once.mjs
var Ve = /* @__PURE__ */ new Set();
function He(e, t, n) {
	e || Ve.has(t) || (console.warn(ke(t, n)), Ve.add(t));
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/wrap.mjs
var Ue = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, We = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ge = 1e-7, Ke = 12;
function qe(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = We(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Ge && ++s < Ke);
	return o;
}
function Je(e, t, n, r) {
	if (e === t && n === r) return I;
	let i = (t) => qe(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : We(i(e), t, r);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Ye = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Xe = (e) => (t) => 1 - e(1 - t), Ze = /*@__PURE__*/ Je(.33, 1.53, .69, .99), Qe = /*@__PURE__*/ Xe(Ze), $e = /*@__PURE__*/ Ye(Qe), et = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Qe(e) : .5 * (2 - 2 ** (-10 * (e - 1))), tt = (e) => 1 - Math.sin(Math.acos(e)), nt = Xe(tt), rt = Ye(tt), it = /*@__PURE__*/ Je(.42, 0, 1, 1), at = /*@__PURE__*/ Je(0, 0, .58, 1), ot = /*@__PURE__*/ Je(.42, 0, .58, 1), st = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function ct(e, t) {
	return st(e) ? e[Ue(0, e.length, t)] : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var lt = (e) => Array.isArray(e) && typeof e[0] == "number", ut = {
	linear: I,
	easeIn: it,
	easeInOut: ot,
	easeOut: at,
	circIn: tt,
	circInOut: rt,
	circOut: nt,
	backIn: Qe,
	backInOut: $e,
	backOut: Ze,
	anticipate: et
}, dt = (e) => typeof e == "string", ft = (e) => {
	if (lt(e)) {
		F(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return Je(t, n, r, i);
	} else if (dt(e)) return F(ut[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), ut[e];
	return e;
}, pt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], z = {
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
			n = r, r = o, n.forEach(l), t && z.value && z.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
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
	}, a = () => n = !0, o = pt.reduce((e, n) => (e[n] = mt(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = je.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, ht), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: pt.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < pt.length; t++) o[pt[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: B, cancel: _t, state: V, steps: vt } = /* @__PURE__ */ gt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : I, !0), yt;
function bt() {
	yt = void 0;
}
var H = {
	now: () => (yt === void 0 && H.set(V.isProcessing || je.useManualTiming ? V.timestamp : performance.now()), yt),
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
	transform: (e) => Oe(0, 1, e)
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
}, Lt = (e) => Oe(0, 255, e), Rt = {
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
}), Ut = /*@__PURE__*/ Ht("deg"), U = /*@__PURE__*/ Ht("%"), W = /*@__PURE__*/ Ht("px"), Wt = /*@__PURE__*/ Ht("vh"), Gt = /*@__PURE__*/ Ht("vw"), Kt = {
	...U,
	parse: (e) => U.parse(e) / 100,
	transform: (e) => U.transform(e * 100)
}, qt = {
	test: /*@__PURE__*/ Ft("hsl", "hue"),
	parse: /*@__PURE__*/ It("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + U.transform(jt(t)) + ", " + U.transform(jt(n)) + ", " + jt(kt.transform(r)) + ")"
}, G = {
	test: (e) => zt.test(e) || Vt.test(e) || qt.test(e),
	parse: (e) => zt.test(e) ? zt.parse(e) : qt.test(e) ? qt.parse(e) : Vt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? zt.transform(e) : qt.transform(e),
	getAnimatableNone: (e) => {
		let t = G.parse(e);
		return t.alpha = 0, G.transform(t);
	}
}, Jt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Yt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Mt)?.length || 0) + (e.match(Jt)?.length || 0) > 0;
}
var Xt = "number", Zt = "color", Qt = "var", $t = "var(", en = "${}", tn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nn(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(tn, (e) => (G.test(e) ? (r.color.push(a), i.push(Zt), n.push(G.parse(e))) : e.startsWith($t) ? (r.var.push(a), i.push(Qt), n.push(e)) : (r.number.push(a), i.push(Xt), n.push(parseFloat(e))), ++a, en)).split(en),
		indexes: r,
		types: i
	};
}
function rn(e) {
	return nn(e).values;
}
function an({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Xt ? i += jt(r[a]) : e === Zt ? i += G.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function on(e) {
	return an(nn(e));
}
var sn = (e) => typeof e == "number" ? 0 : G.test(e) ? G.getAnimatableNone(e) : e, cn = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : sn(e);
function ln(e) {
	let t = nn(e);
	return an(t)(t.values.map((e, n) => cn(e, t.split[n])));
}
var K = {
	test: Yt,
	parse: rn,
	createTransformer: on,
	getAnimatableNone: ln
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function un(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function dn({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = un(s, r, e + 1 / 3), a = un(s, r, e), o = un(s, r, e - 1 / 3);
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
function fn(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var q = (e, t, n) => e + (t - e) * n, pn = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, mn = [
	Vt,
	zt,
	qt
], hn = (e) => mn.find((t) => t.test(e));
function gn(e) {
	let t = hn(e);
	if (Ae(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === qt && (n = dn(n)), n;
}
var _n = (e, t) => {
	let n = gn(e), r = gn(t);
	if (!n || !r) return fn(e, t);
	let i = { ...n };
	return (e) => (i.red = pn(n.red, r.red, e), i.green = pn(n.green, r.green, e), i.blue = pn(n.blue, r.blue, e), i.alpha = q(n.alpha, r.alpha, e), zt.transform(i));
}, vn = /* @__PURE__ */ new Set(["none", "hidden"]);
function yn(e, t) {
	return vn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function bn(e, t) {
	return (n) => q(e, t, n);
}
function xn(e) {
	return typeof e == "number" ? bn : typeof e == "string" ? Tt(e) ? fn : G.test(e) ? _n : Tn : Array.isArray(e) ? Sn : typeof e == "object" ? G.test(e) ? _n : Cn : fn;
}
function Sn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => xn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Cn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = xn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function wn(e, t) {
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
var Tn = (e, t) => {
	let n = K.createTransformer(t), r = nn(e), i = nn(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? vn.has(e) && !i.values.length || vn.has(t) && !r.values.length ? yn(e, t) : Le(Sn(wn(r, i), i.values), n) : (Ae(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), fn(e, t));
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function En(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? q(e, t, n) : xn(e)(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Dn = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => B.update(t, e),
		stop: () => _t(t),
		now: () => V.isProcessing ? V.timestamp : H.now()
	};
}, On = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, kn = 2e4;
function An(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function jn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(An(r), kn);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ R(i)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var J = {
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
function Mn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Nn = 12;
function Pn(e, t, n) {
	let r = n;
	for (let n = 1; n < Nn; n++) r -= e(r) / t(r);
	return r;
}
var Fn = .001;
function In({ duration: e = J.duration, bounce: t = J.bounce, velocity: n = J.velocity, mass: r = J.mass }) {
	let i, a;
	Ae(e <= /* @__PURE__ */ L(J.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = Oe(J.minDamping, J.maxDamping, o), e = Oe(J.minDuration, J.maxDuration, /* @__PURE__ */ R(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Mn(t, o), c = Math.exp(-i);
		return Fn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Mn(t ** 2, o);
		return (-i(t) + Fn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Pn(i, a, s);
	if (e = /* @__PURE__ */ L(e), isNaN(c)) return {
		stiffness: J.stiffness,
		damping: J.damping,
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
var Ln = ["duration", "bounce"], Rn = [
	"stiffness",
	"damping",
	"mass"
];
function zn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Bn(e) {
	let t = {
		velocity: J.velocity,
		stiffness: J.stiffness,
		damping: J.damping,
		mass: J.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!zn(e, Rn) && zn(e, Ln)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * Oe(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: J.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = In({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: J.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Vn(e = J.visualDuration, t = J.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Bn({
		...n,
		velocity: -/* @__PURE__ */ R(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ R(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? J.restSpeed.granular : J.restSpeed.default, i ||= v ? J.restDelta.granular : J.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = Mn(_, h), S = (m + h * _ * g) / x, y = (e) => {
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
	let ee = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ L(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ L(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ L(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(An(ee), kn), t = On((t) => ee.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return ee;
}
Vn.applyToOptions = (e) => {
	let t = jn(e, 100, Vn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ L(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Hn = 5;
function Un(e, t, n) {
	let r = Math.max(t - Hn, 0);
	return Be(n - e(r), t - r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Wn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Vn({
			keyframes: [f.value, m(f.value)],
			velocity: Un(y, e, f.value),
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
function Gn(e, t, n) {
	let r = [], i = n || je.mix || En, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Le(Array.isArray(t) ? t[n] || I : t, a)), r.push(a);
	}
	return r;
}
function Kn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (F(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Gn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Re(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(Oe(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function qn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Re(0, t, r);
		e.push(q(n, 1, i));
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Jn(e) {
	let t = [0];
	return qn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Yn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Xn(e, t) {
	return e.map(() => t || ot).splice(0, e.length - 1);
}
function Zn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = st(r) ? r.map(ft) : ft(r), a = {
		done: !1,
		value: t[0]
	}, o = Kn(Yn(n && n.length === t.length ? n : Jn(t), e), t, { ease: Array.isArray(i) ? i : Xn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Qn = (e) => e !== null;
function $n(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Qn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var er = {
	decay: Wn,
	inertia: Wn,
	tween: Zn,
	keyframes: Zn,
	spring: Vn
};
function tr(e) {
	typeof e.type == "string" && (e.type = er[e.type]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var nr = class {
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
}, rr = (e) => e / 100, ir = class extends nr {
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
		tr(e);
		let { type: t = Zn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Zn;
		process.env.NODE_ENV !== "production" && s !== Zn && F(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Zn && typeof o[0] != "number" && (this.mixKeyframes = Le(rr, En(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = An(c));
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
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = Oe(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Wn && (b.value = $n(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ R(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ R(e);
	}
	get time() {
		return /* @__PURE__ */ R(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ L(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Un((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(H.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ R(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Dn, startTime: t } = this.options;
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
function ar(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var or = (e) => e * 180 / Math.PI, sr = (e) => lr(or(Math.atan2(e[1], e[0]))), cr = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: sr,
	rotateZ: sr,
	skewX: (e) => or(Math.atan(e[1])),
	skewY: (e) => or(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, lr = (e) => (e %= 360, e < 0 && (e += 360), e), ur = sr, dr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), fr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), pr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: dr,
	scaleY: fr,
	scale: (e) => (dr(e) + fr(e)) / 2,
	rotateX: (e) => lr(or(Math.atan2(e[6], e[5]))),
	rotateY: (e) => lr(or(Math.atan2(-e[2], e[0]))),
	rotateZ: ur,
	rotate: ur,
	skewX: (e) => or(Math.atan(e[4])),
	skewY: (e) => or(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function mr(e) {
	return +!!e.includes("scale");
}
function hr(e, t) {
	if (!e || e === "none") return mr(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = pr, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = cr, i = t;
	}
	if (!i) return mr(t);
	let a = r[t], o = i[1].split(",").map(_r);
	return typeof a == "function" ? a(o) : o[a];
}
var gr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return hr(n, t);
};
function _r(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var vr = [
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
], yr = /* @__PURE__ */ new Set(vr), br = (e) => e === Ot || e === W, xr = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), Sr = vr.filter((e) => !xr.has(e));
function Cr(e) {
	let t = [];
	return Sr.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var wr = {
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
	x: (e, { transform: t }) => hr(t, "x"),
	y: (e, { transform: t }) => hr(t, "y")
};
wr.translateX = wr.x, wr.translateY = wr.y;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Tr = /* @__PURE__ */ new Set(), Er = !1, Dr = !1, Or = !1;
function kr() {
	if (Dr) {
		let e = Array.from(Tr).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Cr(e);
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
	Dr = !1, Er = !1, Tr.forEach((e) => e.complete(Or)), Tr.clear();
}
function Ar() {
	Tr.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Dr = !0);
	});
}
function jr() {
	Or = !0, Ar(), kr(), Or = !1;
}
var Mr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Tr.add(this), Er || (Er = !0, B.read(Ar), B.resolveKeyframes(kr))) : (this.readKeyframes(), this.complete());
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
		ar(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Tr.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Tr.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Nr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Pr(e, t, n) {
	Nr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Fr = {};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Ir(e, t) {
	let n = /* @__PURE__ */ Fe(e);
	return () => Fr[t] ?? n();
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Lr = /* @__PURE__ */ Ir(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Rr = /*@__PURE__*/ Ir(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), zr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Br = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ zr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ zr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ zr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ zr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Vr(e, t) {
	if (e) return typeof e == "function" ? Rr() ? On(e, t) : "ease-out" : lt(e) ? zr(e) : Array.isArray(e) ? e.map((e) => Vr(e, t) || Br.easeOut) : Br[e];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Hr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Vr(s, i);
	Array.isArray(d) && (u.easing = d), z.value && xt.waapi++;
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
	return z.value && p.finished.finally(() => {
		xt.waapi--;
	}), p;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Ur(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Wr({ type: e, ...t }) {
	return Ur(e) && Rr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Gr = class extends nr {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, F(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Wr(e);
		this.animation = Hr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = $n(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Pr(t, n, e), this.animation.cancel();
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
		return /* @__PURE__ */ R(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ R(e);
	}
	get time() {
		return /* @__PURE__ */ R(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ L(e), t && this.animation.pause();
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Lr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), I) : r(this);
	}
}, Kr = {
	anticipate: et,
	backInOut: $e,
	circInOut: rt
};
function qr(e) {
	return e in Kr;
}
function Jr(e) {
	typeof e.ease == "string" && qr(e.ease) && (e.ease = Kr[e.ease]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Yr = 10, Xr = class extends Gr {
	constructor(e) {
		Jr(e), tr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new ir({
			...a,
			autoplay: !1
		}), s = Math.max(Yr, H.now() - this.startTime), c = Oe(0, Yr, s - Yr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Pr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Zr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (K.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Qr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function $r(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Zr(i, t), s = Zr(a, t);
	return Ae(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Qr(e) || (n === "spring" || Ur(n)) && r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function ei(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var ti = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ni = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ri(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ni.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var ii = /* @__PURE__ */ new Set([
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
]), ai = /*@__PURE__*/ Fe(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function oi(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return ai() && n && (ti.has(n) || ii.has(n) && ri(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var si = 40, ci = class extends nr {
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
		}, f = l?.KeyframeResolver || Mr;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = H.now();
		let u = !0;
		$r(e, i, a, o) || (u = !1, (je.instantAnimations || !s) && l?.($n(e, n, t)), e[0] = e[e.length - 1], ei(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > si ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && oi(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Xr({
				...d,
				element: p
			});
		} catch {
			m = new ir(d);
		}
		else m = new ir(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(I), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), jr()), this._animation;
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
}, li = class {
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
		return ui(this.animations, "duration");
	}
	get iterationDuration() {
		return ui(this.animations, "iterationDuration");
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
function ui(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var di = class extends li {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function fi(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var pi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mi(e) {
	let t = pi.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var hi = 4;
function gi(e, t, n = 1) {
	F(n <= hi, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = mi(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Me(e) ? parseFloat(e) : e;
	}
	return Tt(i) ? gi(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var _i = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, vi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), yi = {
	type: "keyframes",
	duration: .8
}, bi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, xi = (e, { keyframes: t }) => t.length > 2 ? yi : yr.has(e) ? e.startsWith("scale") ? vi(t[1]) : _i : bi;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Si(e, t) {
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
function Ci(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Si(n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var wi = /* @__PURE__ */ new Set([
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
function Ti(e) {
	for (let t in e) if (!wi.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Ei = (e, t, n, r = {}, i, a) => (o) => {
	let s = Ci(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ L(c);
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
	Ti(s) || Object.assign(u, xi(e, u)), u.duration &&= /* @__PURE__ */ L(u.duration), u.repeatDelay &&= /* @__PURE__ */ L(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ei(u), u.delay === 0 && (d = !0)), (je.instantAnimations || je.skipAnimations || i?.shouldSkipAnimations) && (d = !0, ei(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = $n(u.keyframes, s);
		if (e !== void 0) {
			B.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new ir(u) : new ci(u);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Di(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Oi(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function ki(e, t, n) {
	let r = e.getProps();
	return Oi(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Ai = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...vr
]), ji = 30, Mi = (e) => !isNaN(parseFloat(e)), Ni = { current: void 0 }, Pi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = H.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = H.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Mi(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && He(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new ze());
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
		return Ni.current && Ni.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = H.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ji) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, ji);
		return Be(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function Fi(e, t) {
	return new Pi(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Ii = (e) => Array.isArray(e);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Li(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Fi(n));
}
function Ri(e) {
	return Ii(e) ? e[e.length - 1] || 0 : e;
}
function zi(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = ki(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Li(e, t, Ri(i[t]));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var Y = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Bi(e) {
	return !!(Y(e) && e.add);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Vi(e, t) {
	let n = e.getValue("willChange");
	if (Bi(n)) return n.add(t);
	if (!n && je.WillChange) {
		let n = new je.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Hi(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Ui = "data-" + Hi("framerAppearId");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Wi(e) {
	return e.props[Ui];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Gi({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Ki(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Si(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Gi(d, t)) continue;
		let o = {
			delay: n,
			...Ci(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			B.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Wi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, B);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Vi(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(Ei(t, r, i, p && Ai.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => B.update(() => {
			o && zi(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function qi(e, t, n = {}) {
	let r = ki(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Ki(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ji(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Ji(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(qi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + fi(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Yi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => qi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = qi(e, t, n);
	else {
		let i = typeof t == "function" ? ki(e, t, n.custom) : t;
		r = Promise.all(Ki(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Xi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Zi = (e) => (t) => t.test(e), Qi = [
	Ot,
	W,
	U,
	Ut,
	Gt,
	Wt,
	Xi
], $i = (e) => Qi.find(Zi(e));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function ea(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || Pe(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var ta = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function na(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Mt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!ta.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ra = /\b([a-z-]*)\(.*?\)/gu, ia = {
	...K,
	getAnimatableNone: (e) => {
		let t = e.match(ra);
		return t ? t.map(na).join(" ") : e;
	}
}, aa = {
	...K,
	getAnimatableNone: (e) => {
		let t = K.parse(e);
		return K.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, oa = {
	...Ot,
	transform: Math.round
}, sa = {
	borderWidth: W,
	borderTopWidth: W,
	borderRightWidth: W,
	borderBottomWidth: W,
	borderLeftWidth: W,
	borderRadius: W,
	borderTopLeftRadius: W,
	borderTopRightRadius: W,
	borderBottomRightRadius: W,
	borderBottomLeftRadius: W,
	width: W,
	maxWidth: W,
	height: W,
	maxHeight: W,
	top: W,
	right: W,
	bottom: W,
	left: W,
	inset: W,
	insetBlock: W,
	insetBlockStart: W,
	insetBlockEnd: W,
	insetInline: W,
	insetInlineStart: W,
	insetInlineEnd: W,
	padding: W,
	paddingTop: W,
	paddingRight: W,
	paddingBottom: W,
	paddingLeft: W,
	paddingBlock: W,
	paddingBlockStart: W,
	paddingBlockEnd: W,
	paddingInline: W,
	paddingInlineStart: W,
	paddingInlineEnd: W,
	margin: W,
	marginTop: W,
	marginRight: W,
	marginBottom: W,
	marginLeft: W,
	marginBlock: W,
	marginBlockStart: W,
	marginBlockEnd: W,
	marginInline: W,
	marginInlineStart: W,
	marginInlineEnd: W,
	fontSize: W,
	backgroundPositionX: W,
	backgroundPositionY: W,
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
	distance: W,
	translateX: W,
	translateY: W,
	translateZ: W,
	x: W,
	y: W,
	z: W,
	perspective: W,
	transformPerspective: W,
	opacity: kt,
	originX: Kt,
	originY: Kt,
	originZ: W,
	zIndex: oa,
	fillOpacity: kt,
	strokeOpacity: kt,
	numOctaves: oa
}, ca = {
	...sa,
	color: G,
	backgroundColor: G,
	outlineColor: G,
	fill: G,
	stroke: G,
	borderColor: G,
	borderTopColor: G,
	borderRightColor: G,
	borderBottomColor: G,
	borderLeftColor: G,
	filter: ia,
	WebkitFilter: ia,
	mask: aa,
	WebkitMask: aa
}, la = (e) => ca[e], ua = /*@__PURE__*/ new Set([ia, aa]);
function da(e, t) {
	let n = la(e);
	return ua.has(n) || (n = K), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var fa = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function pa(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !fa.has(t) && nn(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = da(n, i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ma = class extends Mr {
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
				let i = gi(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ai.has(n) || e.length !== 2) return;
		let [r, i] = e, a = $i(r), o = $i(i);
		if (Dt(r) !== Dt(i) && wr[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (br(a) && br(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else wr[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || ea(e[t])) && n.push(t);
		n.length && pa(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = wr[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = wr[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ha(e, t, n) {
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
var ga = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function _a(e) {
	return Ne(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: va, cancel: ya } = /* @__PURE__ */ gt(queueMicrotask, !1), X = {
	x: !1,
	y: !1
};
function ba() {
	return X.x || X.y;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function xa(e) {
	return e === "x" || e === "y" ? X[e] ? null : (X[e] = !0, () => {
		X[e] = !1;
	}) : X.x || X.y ? null : (X.x = X.y = !0, () => {
		X.x = X.y = !1;
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Sa(e, t) {
	let n = ha(e), r = new AbortController();
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
function Ca(e) {
	return !(e.pointerType === "touch" || ba());
}
function wa(e, t, n = {}) {
	let [r, i, a] = Sa(e, n);
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
			if (!Ca(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Ta = (e, t) => t ? e === t || Ta(e, t.parentElement) : !1, Ea = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Da = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Oa(e) {
	return Da.has(e.tagName) || e.isContentEditable === !0;
}
var ka = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Aa(e) {
	return ka.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var ja = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Ma(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Na(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Pa = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Ma(() => {
		if (ja.has(n)) return;
		Na(n, "down");
		let e = Ma(() => {
			Na(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Na(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Fa(e) {
	return Ea(e) && !ba();
}
var Ia = /* @__PURE__ */ new WeakSet();
function La(e, t, n = {}) {
	let [r, i, a] = Sa(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Fa(e) || Ia.has(e)) return;
		ja.add(r), n.stopPropagation && Ia.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), ja.has(r) && ja.delete(r), Fa(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Ta(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), _a(e) && (e.addEventListener("focus", (e) => Pa(e, i)), !Oa(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Ra(e) {
	return Ne(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var za = /* @__PURE__ */ new WeakMap(), Ba, Va = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Ra(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Ha = /*@__PURE__*/ Va("inline", "width", "offsetWidth"), Ua = /*@__PURE__*/ Va("block", "height", "offsetHeight");
function Wa({ target: e, borderBoxSize: t }) {
	za.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Ha(e, t);
			},
			get height() {
				return Ua(e, t);
			}
		});
	});
}
function Ga(e) {
	e.forEach(Wa);
}
function Ka() {
	typeof ResizeObserver > "u" || (Ba = new ResizeObserver(Ga));
}
function qa(e, t) {
	Ba || Ka();
	let n = ha(e);
	return n.forEach((e) => {
		let n = za.get(e);
		n || (n = /* @__PURE__ */ new Set(), za.set(e, n)), n.add(t), Ba?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = za.get(e);
			n?.delete(t), n?.size || Ba?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Ja = /* @__PURE__ */ new Set(), Ya;
function Xa() {
	Ya = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Ja.forEach((t) => t(e));
	}, window.addEventListener("resize", Ya);
}
function Za(e) {
	return Ja.add(e), Ya || Xa(), () => {
		Ja.delete(e), !Ja.size && typeof Ya == "function" && (window.removeEventListener("resize", Ya), Ya = void 0);
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/index.mjs
function Qa(e, t) {
	return typeof e == "function" ? Za(e) : qa(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function $a(e) {
	return Ra(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/transform.mjs
function eo(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = Kn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var to = [
	...Qi,
	G,
	K
], no = (e) => to.find(Zi(e)), ro = () => ({
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
}), Z = () => ({
	x: ao(),
	y: ao()
}), oo = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function so(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function co(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function fo(e) {
	return so(e.animate) || uo.some((t) => co(e[t]));
}
function po(e) {
	return !!(fo(e) || e.variants);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function mo(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Y(i)) e.addValue(r, i);
		else if (Y(a)) e.addValue(r, Fi(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Fi(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var ho = { current: null }, go = { current: !1 }, _o = typeof window < "u";
function vo() {
	if (go.current = !0, _o) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => ho.current = e.matches;
		e.addEventListener("change", t), t();
	} else ho.current = !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
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
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Mr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = H.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, B.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = fo(t), this.isVariantNode = po(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && Y(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, oo.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (go.current || vo(), this.shouldReduceMotion = ho.current), process.env.NODE_ENV !== "production" && He(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && ti.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Gr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ L(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = yr.has(e);
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
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z();
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
		return n === void 0 && t !== void 0 && (n = Fi(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Me(n) || Pe(n)) ? n = parseFloat(n) : !no(n) && K.test(t) && (n = da(e, t)), this.setBaseTarget(e, Y(n) ? n.get() : n)), Y(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Oi(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Y(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new ze()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		va.render(this.render);
	}
}, wo = class extends Co {
	constructor() {
		super(...arguments), this.KeyframeResolver = ma;
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
		Y(e) && (this.childSubscription = e.on("change", (e) => {
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
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
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
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
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Vo(e.x, -a.scroll.offset.x), Vo(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Lo(e, o)), r && jo(a.latestValues) && Wo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < zo && t.x > Ro && (t.x = 1), t.y < zo && t.y > Ro && (t.y = 1);
}
function Vo(e, t) {
	e.min += t, e.max += t;
}
function Ho(e, t, n, r, i = .5) {
	Io(e, t, n, q(e.min, e.max, i), r);
}
function Uo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Wo(e, t, n) {
	let r = n ?? e;
	Ho(e.x, Uo(t.x, r.x), t.scaleX, t.scale, t.originX), Ho(e.y, Uo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Go(e, t) {
	return Eo(Oo(e.getBoundingClientRect(), t));
}
function Ko(e, t, n) {
	let r = Go(e, n), { scroll: i } = t;
	return i && (Vo(r.x, i.offset.x), Vo(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var qo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Jo = vr.length;
function Yo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Jo; a++) {
		let o = vr[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ga(s, sa[o]);
			if (!c) {
				i = !1;
				let t = qo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Xo(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (yr.has(e)) {
			o = !0;
			continue;
		} else if (Ct(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ga(n, sa[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Yo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Zo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Qo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var $o = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (W.test(e)) e = parseFloat(e);
	else return e;
	return `${Qo(e, t.target.x)}% ${Qo(e, t.target.y)}%`;
} }, es = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = K.parse(e);
	if (i.length > 5) return r;
	let a = K.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = q(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, ts = {
	borderRadius: {
		...$o,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: $o,
	borderTopRightRadius: $o,
	borderBottomLeftRadius: $o,
	borderBottomRightRadius: $o,
	boxShadow: es
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function ns(e, { layout: t, layoutId: n }) {
	return yr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ts[e] || e === "opacity");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function rs(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Y(r[t]) || i && Y(i[t]) || ns(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function is(e) {
	return window.getComputedStyle(e);
}
var as = class extends wo {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Zo;
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) return this.projection?.isProjecting ? mr(t) : gr(e, t);
		{
			let n = is(e), r = (Ct(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Go(e, t);
	}
	build(e, t, n) {
		Xo(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return rs(e, t, n);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function os(e, t) {
	return e in t;
}
var ss = class extends Co {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (os(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return Z();
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
}, cs = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, ls = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function us(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? cs : ls;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ds = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function fs(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Xo(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of ds) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && us(d, i, a, o, !1);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var ps = /* @__PURE__ */ new Set([
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
]), ms = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function hs(e, t, n, r) {
	Zo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(ps.has(n) ? n : Hi(n), t.attrs[n]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function gs(e, t, n) {
	let r = rs(e, t, n);
	for (let n in e) if (Y(e[n]) || Y(t[n])) {
		let t = vr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var _s = class extends wo {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) {
			let e = la(t);
			return e && e.default || 0;
		}
		return t = ps.has(t) ? t : Hi(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return gs(e, t, n);
	}
	build(e, t, n) {
		fs(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		hs(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = ms(e.tagName), super.mount(e);
	}
}, vs = uo.length;
function ys(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && ys(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < vs; n++) {
		let r = uo[n], i = e.props[r];
		(co(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function bs(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var xs = [...lo].reverse(), Ss = lo.length;
function Cs(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Yi(e, t, n)));
}
function ws(e) {
	let t = Cs(e), n = Ds(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = ki(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
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
		let { props: s } = e, c = ys(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Ss; t++) {
			let p = xs[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = co(h), _ = p === o ? m.isActive : null;
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
			let y = Ts(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, ee = {
				...w,
				...C
			}, te = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in ee) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Ii(t) && Ii(n) ? !bs(t, n) : t !== n, r ? t == null ? u.add(e) : te(e) : t !== void 0 && u.has(e) ? te(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let ne = v && y;
			b && (!ne || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !ne && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = ki(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = fi(r.enteringChildren, e, t);
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
				let n = ki(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
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
			n = Ds(), i = !0;
		}
	};
}
function Ts(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !bs(t, e) : !1;
}
function Es(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Ds() {
	return {
		animate: Es(!0),
		whileInView: Es(),
		whileHover: Es(),
		whileTap: Es(),
		whileDrag: Es(),
		whileFocus: Es(),
		exit: Es()
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function Os(e, t) {
	e.min = t.min, e.max = t.max;
}
function Q(e, t) {
	Os(e.x, t.x), Os(e.y, t.y);
}
function ks(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var As = .9999, js = 1.0001, Ms = -.01, Ns = .01;
function $(e) {
	return e.max - e.min;
}
function Ps(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Fs(e, t, n, r = .5) {
	e.origin = r, e.originPoint = q(t.min, t.max, e.origin), e.scale = $(n) / $(t), e.translate = q(n.min, n.max, e.origin) - e.originPoint, (e.scale >= As && e.scale <= js || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Ms && e.translate <= Ns || isNaN(e.translate)) && (e.translate = 0);
}
function Is(e, t, n, r) {
	Fs(e.x, t.x, n.x, r ? r.originX : void 0), Fs(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ls(e, t, n, r = 0) {
	e.min = (r ? q(n.min, n.max, r) : n.min) + t.min, e.max = e.min + $(t);
}
function Rs(e, t, n, r) {
	Ls(e.x, t.x, n.x, r?.x), Ls(e.y, t.y, n.y, r?.y);
}
function zs(e, t, n, r = 0) {
	let i = r ? q(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + $(t);
}
function Bs(e, t, n, r) {
	zs(e.x, t.x, n.x, r?.x), zs(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Vs(e, t, n, r, i) {
	return e -= t, e = Po(e, 1 / n, r), i !== void 0 && (e = Po(e, 1 / i, r)), e;
}
function Hs(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (U.test(t) && (t = parseFloat(t), t = q(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = q(a.min, a.max, r);
	e === a && (s -= t), e.min = Vs(e.min, t, n, s, i), e.max = Vs(e.max, t, n, s, i);
}
function Us(e, t, [n, r, i], a, o) {
	Hs(e, t[n], t[r], t[i], t.scale, a, o);
}
var Ws = [
	"x",
	"scaleX",
	"originX"
], Gs = [
	"y",
	"scaleY",
	"originY"
];
function Ks(e, t, n, r) {
	Us(e.x, t, Ws, n ? n.x : void 0, r ? r.x : void 0), Us(e.y, t, Gs, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function qs(e) {
	return e.translate === 0 && e.scale === 1;
}
function Js(e) {
	return qs(e.x) && qs(e.y);
}
function Ys(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Xs(e, t) {
	return Ys(e.x, t.x) && Ys(e.y, t.y);
}
function Zs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Qs(e, t) {
	return Zs(e.x, t.x) && Zs(e.y, t.y);
}
function $s(e) {
	return $(e.x) / $(e.y);
}
function ec(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function tc(e) {
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
], ic = rc.length, ac = (e) => typeof e == "string" ? parseFloat(e) : e, oc = (e) => typeof e == "number" || W.test(e);
function sc(e, t, n, r, i, a) {
	i ? (e.opacity = q(0, n.opacity ?? 1, lc(r)), e.opacityExit = q(t.opacity ?? 1, 0, uc(r))) : a && (e.opacity = q(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < ic; i++) {
		let a = rc[i], o = cc(t, a), s = cc(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || oc(o) === oc(s) ? (e[a] = Math.max(q(ac(o), ac(s), r), 0), (U.test(s) || U.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r));
}
function cc(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var lc = /*@__PURE__*/ dc(0, .5, nt), uc = /*@__PURE__*/ dc(.5, .95, I);
function dc(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Re(e, t, r));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function fc(e, t, n) {
	let r = Y(e) ? e : Fi(e);
	return r.start(Ei("", r, t, n)), r.animation;
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
		Ee(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		De(this.children, e), this.isDirty = !0;
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
	return Y(e) ? e.get() : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var vc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Ee(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (De(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (De(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
	let n = Wi(t);
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
				this.projectionUpdateScheduled = !1, z.value && (bc.nodes = bc.calculatedTargetDeltas = bc.calculatedProjections = 0), this.nodes.forEach(kc), this.nodes.forEach(Rc), this.nodes.forEach(zc), this.nodes.forEach(Ac), z.addProjectionMetrics && z.addProjectionMetrics(bc);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new hc());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ze()), this.eventHandlers.get(e).add(t);
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
			this.isSVG = Ra(t) && !$a(t), this.instance = t;
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
				let a = this.options.transition || i.getDefaultTransition() || Kc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Qs(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Ci(a, "layout"),
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
			V.delta = Oe(0, 1e3 / 60, e - V.timestamp), V.timestamp = e, V.isProcessing = !0, vt.update.process(V), vt.preRender.process(V), vt.render.process(V), V.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, va.read(this.scheduleUpdate));
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
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !$(this.snapshot.measuredBox.x) && !$(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Js(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || jo(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
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
			if (!e) return Z();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Qc))) {
				let { scroll: e } = this.root;
				e && (Vo(t.x, e.offset.x), Vo(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Z();
			if (Q(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Q(t, e), Vo(t.x, i.offset.x), Vo(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || Z();
			Q(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (Vo(r.x, -n.scroll.offset.x), Vo(r.y, -n.scroll.offset.y)), jo(n.latestValues) && Wo(r, n.latestValues, n.layout?.layoutBox);
			}
			return jo(this.latestValues) && Wo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = Z();
			Q(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!jo(n.latestValues)) continue;
				let r;
				n.instance && (Ao(n.latestValues) && n.updateSnapshot(), r = Z(), Q(r, n.measurePageBox())), Ks(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return jo(this.latestValues) && Ks(t, this.latestValues), t;
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
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Rs(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Q(this.target, this.layout.layoutBox), Lo(this.target, this.targetDelta)) : Q(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), z.value && bc.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ao(this.parent.latestValues) || Mo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), Bs(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Q(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === V.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Q(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Bo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Z());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ks(this.prevProjectionDelta.x, this.projectionDelta.x), ks(this.prevProjectionDelta.y, this.projectionDelta.y)), Is(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !ec(this.projectionDelta.x, this.prevProjectionDelta.x) || !ec(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), z.value && bc.calculatedProjections++;
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
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = io();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = Z(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Gc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Hc(a.x, e.x, n), Hc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Bs(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Wc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Xs(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= Z(), Q(d, this.relativeTarget)), s && (this.animationValues = i, sc(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (_t(this.pendingAnimation), void 0), this.pendingAnimation = B.update(() => {
				yc.hasAnimatedSinceResize = !0, xt.layout++, this.motionValue ||= Fi(0), this.motionValue.jump(0, !1), this.currentAnimation = fc(this.motionValue, [0, 1e3], {
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
					n = this.target || Z();
					let t = $(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = $(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Q(t, n), Wo(t, i), Is(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
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
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = _c(t?.pointerEvents) || ""), this.hasProjected && !jo(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = nc(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in ts) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = ts[t], c = a === "none" ? i[t] : n(i[t], r);
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
		if (i === "size") tc((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = $(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			Os(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else Zc(i, t.layoutBox, n) && tc((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = $(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = io();
		Is(o, n, t.layoutBox);
		let s = io();
		a ? Is(s, e.applyTransform(r, !0), t.measuredBox) : Is(s, n, t.layoutBox);
		let c = !Js(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = Z();
					Bs(s, t.layoutBox, i.layoutBox, o);
					let c = Z();
					Bs(c, n, a.layoutBox, o), Qs(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
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
	z.value && bc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
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
	e.translate = q(t.translate, 0, n), e.scale = q(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Uc(e, t, n, r) {
	e.min = q(t.min, n.min, r), e.max = q(t.max, n.max, r);
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
}, qc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Jc = qc("applewebkit/") && !qc("chrome/") ? Math.round : I;
function Yc(e) {
	e.min = Jc(e.min), e.max = Jc(e.max);
}
function Xc(e) {
	Yc(e.x), Yc(e.y);
}
function Zc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Ps($s(t), $s(n), .2);
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
}), nl = E({
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
	return T.useCallback(il(...e), e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var ol = class extends T.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (_a(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = _a(e) && e.offsetWidth || 0, r = _a(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
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
	let o = ge(), s = j(null), c = j({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: l } = k(nl), u = al(s, e.props?.ref ?? e?.ref);
	return _e(() => {
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
	}, [t]), N(ol, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : T.cloneElement(e, { ref: u })
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var cl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = Ce(ll), d = ge(), f = !0, p = ye(() => (f = !1, {
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
	return a && f && (p = { ...p }), ye(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), T.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = N(sl, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), N(Te.Provider, {
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
	let t = k(Te);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = ge();
	A(() => {
		if (e) return i(a);
	}, [e]);
	let o = O(() => e && r && r(a), [
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
	return le.forEach(e, (e) => {
		he(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var pl = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, d] = ul(o), f = ye(() => fl(e), [e]), p = o && !u ? [] : f.map(dl), m = j(!0), h = j(f), g = Ce(() => /* @__PURE__ */ new Map()), _ = j(/* @__PURE__ */ new Set()), [v, y] = M(f), [b, x] = M(f);
	we(() => {
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
	let { forceRender: C } = k(Se);
	return N(be, { children: b.map((e) => {
		let v = dl(e), y = o && !u ? !1 : f === b || p.includes(v);
		return N(cl, {
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
}, ml = E({ strict: !1 }), hl = {
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
	xo(e), gl = !0;
}
function vl() {
	return _l(), So();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function yl(e) {
	let t = vl();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	xo(t);
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
	for (let i in e) i === "values" && typeof e.values == "object" || Y(e[i]) || (Tl(i) || n === !0 && xl(i) || !t && !xl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Ol = /* @__PURE__ */ E({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function kl(e, t) {
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Al(e) {
	let { initial: t, animate: n } = kl(e, k(Ol));
	return ye(() => ({
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
	for (let r in t) !Y(t[r]) && !ns(r, n) && (e[r] = t[r]);
}
function Pl({ transformTemplate: e }, t) {
	return ye(() => {
		let n = Ml();
		return Xo(n, t, e), Object.assign({}, n.vars, n.style);
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
	let i = ye(() => {
		let n = Ll();
		return fs(n, t, ms(r), e.transformTemplate, e.style), {
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
	let s = (o ?? Bl(e) ? Rl : Il)(t, r, i, e), c = Dl(t, typeof e == "string", a), l = e === de ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = ye(() => Y(u) ? u.get() : u, [u]);
	return pe(e, {
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
	let { initial: o, animate: s } = e, c = fo(e), l = po(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !so(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Oi(e, t[n]);
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
	let r = k(Ol), i = k(Te), a = () => Hl(e, t, r, i);
	return n ? a() : Ce(a);
}, Gl = /*@__PURE__*/ Wl({
	scrapeMotionValuesFromProps: rs,
	createRenderState: Ml
}), Kl = /*@__PURE__*/ Wl({
	scrapeMotionValuesFromProps: gs,
	createRenderState: Ll
}), ql = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Jl(e, t, n) {
	let r = j(n);
	_e(() => {
		r.current = n;
	});
	let i = j(null);
	return O((n) => {
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
var Yl = E({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function Xl(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Zl(e, t, n, r, i, a) {
	let { visualElement: o } = k(Ol), s = k(ml), c = k(Te), l = k(nl), u = l.reducedMotion, d = l.skipAnimations, f = j(null), p = j(!1);
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
	let m = f.current, h = k(Yl);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Ql(f.current, n, i, h);
	let g = j(!1);
	_e(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[Ui], v = j(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return we(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), A(() => {
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
			...k(nl),
			...n,
			layoutId: tu(n)
		}, { isStatic: u } = l, d = Al(n), f = o(n, u);
		if (!u && typeof window < "u") {
			nu(l, r);
			let t = ru(l);
			c = t.MeasureLayout, d.visualElement = Zl(e, f, l, i, t.ProjectionNode, a);
		}
		return P(Ol.Provider, {
			value: d,
			children: [c && d.visualElement ? N(c, {
				visualElement: d.visualElement,
				...l
			}) : null, Vl(e, n, Jl(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = me(s);
	return c[ql] = e, c;
}
function tu({ layoutId: e }) {
	let t = k(Se).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function nu(e, t) {
	let n = k(ml).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? Ae(!1, t, "lazy-strict-mode") : F(!1, t, "lazy-strict-mode");
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
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && He(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, eu(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var au = (e, t) => t.isSVG ?? Bl(e) ? new _s(t) : new as(t, { allowProjection: e !== de }), ou = class extends To {
	constructor(e) {
		super(e), e.animationState ||= ws(e);
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
}, su = 0, cu = {
	animation: { Feature: ou },
	exit: { Feature: class extends To {
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
						let n = ki(this.node, e, t);
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
var uu = (e) => (t) => Ea(t) && e(t, lu(t));
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
		}, !Ea(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = _u(lu(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = V;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, yu(s, this.history)), this.removeListeners = Le(du(this.contextWindow, "pointermove", this.handlePointerMove), du(this.contextWindow, "pointerup", this.handlePointerUp), du(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
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
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ L(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ L(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ R(i.timestamp - r.timestamp);
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
	return t !== void 0 && e < t ? e = r ? q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)), e;
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
	let n = .5, r = $(e), i = $(t);
	return i > r ? n = /* @__PURE__ */ Re(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Re(e.min, e.max - i, t.min)), Oe(0, 1, n);
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
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(lu(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = xa(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tc((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (U.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = $(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && B.update(() => i(e, t), !1, !0), Vi(this.visualElement, "transform");
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
		e && Xl(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Tu(n.layoutBox, e) : this.constraints = !1, this.elastic = ju(t), r !== this.constraints && !Xl(e) && n && this.constraints && !this.hasMutatedConstraints && tc((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = ku(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Xl(e)) return !1;
		let n = e.current;
		F(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Ko(n, r.root, this.visualElement.getTransformPagePoint()), a = Du(r.layout.layoutBox, i);
		if (t) {
			let e = t(Do(a));
			this.hasMutatedConstraints = !!e, e && (a = Eo(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = tc((o) => {
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
		return Vi(this.visualElement, e), n.start(Ei(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		tc((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		tc((t) => {
			let { drag: n } = this.getProps();
			if (!Ru(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - q(n, a, .5) + o);
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
		tc((e) => {
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
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), tc((t) => {
			if (!Ru(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(q(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Pu.set(this.visualElement, this);
		let e = this.visualElement.current, t = du(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Aa(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			Xl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Lu(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), B.read(r);
		let o = pc(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (tc((t) => {
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
	let r = Qa(e, Iu(n)), i = Qa(t, Iu(n));
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
var Bu = class extends To {
	constructor(e) {
		super(e), this.removeGroupControls = I, this.removeListeners = I, this.controls = new Fu(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || I;
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
}, Hu = class extends To {
	constructor() {
		super(...arguments), this.removePointerDownListener = I;
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
}, Uu = !1, Wu = class extends ue {
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
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), va.postRender(() => {
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
	let [t, n] = ul(), r = k(Se);
	return N(Wu, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: k(Yl),
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
var Ju = class extends To {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = wa(e, (e, t) => (qu(this.node, t, "Start"), (e) => qu(this.node, e, "End"))));
	}
	unmount() {}
}, Yu = class extends To {
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
		this.unmount = Le(pc(this.node.current, "focus", () => this.onFocus()), pc(this.node.current, "blur", () => this.onBlur()));
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
var Zu = class extends To {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = La(e, (e, t) => (Xu(this.node, t, "Start"), (e, { success: t }) => Xu(this.node, e, t ? "End" : "Cancel")), {
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
}, ad = class extends To {
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
	let t = Ce(() => Fi(e)), { isStatic: n } = k(nl);
	if (n) {
		let [, n] = M(e);
		A(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function dd(e, t) {
	let n = ud(t()), r = () => n.set(t());
	return r(), we(() => {
		let t = () => B.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), _t(r);
		};
	}), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-computed.mjs
function fd(e) {
	Ni.current = [], e();
	let t = dd(Ni.current, e);
	return Ni.current = void 0, t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-transform.mjs
function pd(e, t, n, r) {
	if (typeof e == "function") return fd(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return hd(e, t, n, r);
	let i = typeof t == "function" ? t : eo(t, n, r), a = Array.isArray(e) ? md(e, i) : md([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function md(e, t) {
	let n = Ce(() => []);
	return dd(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function hd(e, t, n, r) {
	let i = Ce(() => Object.keys(n)), a = Ce(() => ({}));
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
	return e == null ? [] : typeof e == "string" && gd(t) ? ha(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
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
		i.at > t && i.at < n && (De(e, i), r--);
	}
}
function xd(e, t, n, r, i, a) {
	bd(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: q(i, a, r[o]),
		easing: ct(n, o)
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
			let c = kd(e), { delay: l = 0, times: u = Jn(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Ur(p) ? p : i?.[p || "keyframes"];
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
				b !== void 0 && (n.duration = /* @__PURE__ */ L(b));
				let r = jn(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let w = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let ee = u.length - c.length;
			if (ee > 0 && qn(u, ee), c.length === 1 && c.unshift(null), m) {
				F(m < Td, "Repeat count too high, must be less than 20", "repeat-count-high"), b = vd(b, m);
				let e = [...c], t = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let n = [...y];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), y.push(i === 0 ? "linear" : ct(n, i - 1));
				}
				Sd(u, m);
			}
			let te = w + b;
			xd(r, c, y, u, w, te), g = Math.max(x + b, g), f = Math.max(te, f);
		};
		if (Y(p)) {
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
				s.push(n), c.push(/* @__PURE__ */ Re(0, f, t)), l.push(r || "easeOut");
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
	}, n = Ra(e) && !$a(e) ? new _s(t) : new as(t);
	n.mount(e), oo.set(e, n);
}
function Pd(e) {
	let t = new ss({
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
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Fd(e, t) {
	return Y(e) || typeof e == "number" || typeof e == "string" && !gd(t);
}
function Id(e, t, n, r) {
	let i = [];
	if (Fd(e, t)) i.push(fc(e, gd(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = _d(e, t, r), o = a.length;
		F(!!o, "No valid elements provided.", "no-valid-elements");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Nd : Pd;
			oo.has(r) || s(r);
			let c = oo.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Ki(c, {
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
			let t = e[0], n = Fi(0);
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
	}), t, n, { spring: Vn }).forEach(({ keyframes: e, transition: t }, n) => {
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
		let s = new di(a);
		return o && s.finished.then(o), t && (t.animations.push(s), s.finished.then(() => {
			De(t.animations, s);
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
	return Ce(Hd);
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
	let [t, n] = M(""), [r, i] = M(""), a = S((e) => e.wallpaperTextTheme), o = e || a === "dark" ? "text-white/85" : "text-black/80";
	return A(() => {
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
	}, []), /* @__PURE__ */ P("div", {
		className: `flex items-center gap-1.5 text-[14px] font-medium ${o} select-none tabular-nums`,
		children: [/* @__PURE__ */ N("span", { children: r }), /* @__PURE__ */ N("span", { children: t })]
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_8b5332f8e883134e9d9ab2856fc4395d/node_modules/@radix-ui/react-popover/dist/index.mjs
var rf = "Popover", [af, of] = o(rf, [b]), sf = b(), [cf, lf] = af(rf), uf = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = sf(t), l = T.useRef(null), [u, d] = T.useState(!1), [p, m] = _({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: rf
	});
	return /* @__PURE__ */ N(f, {
		...s,
		children: /* @__PURE__ */ N(cf, {
			scope: t,
			contentId: c(),
			triggerRef: l,
			open: p,
			onOpenChange: m,
			onOpenToggle: T.useCallback(() => m((e) => !e), [m]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: T.useCallback(() => d(!0), []),
			onCustomAnchorRemove: T.useCallback(() => d(!1), []),
			modal: o,
			children: n
		})
	});
};
uf.displayName = rf;
var df = "PopoverAnchor", ff = T.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = lf(df, n), a = sf(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return T.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ N(h, {
		...a,
		...r,
		ref: t
	});
});
ff.displayName = df;
var pf = "PopoverTrigger", mf = T.forwardRef((t, n) => {
	let { __scopePopover: i, ...a } = t, o = lf(pf, i), s = sf(i), c = r(n, o.triggerRef), l = /* @__PURE__ */ N(u.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": o.open,
		"aria-controls": o.contentId,
		"data-state": kf(o.open),
		...a,
		ref: c,
		onClick: e(t.onClick, o.onOpenToggle)
	});
	return o.hasCustomAnchor ? l : /* @__PURE__ */ N(h, {
		asChild: !0,
		...s,
		children: l
	});
});
mf.displayName = pf;
var hf = "PopoverPortal", [gf, _f] = af(hf, { forceMount: void 0 }), vf = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, o = lf(hf, t);
	return /* @__PURE__ */ N(gf, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ N(d, {
			present: n || o.open,
			children: /* @__PURE__ */ N(a, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
vf.displayName = hf;
var yf = "PopoverContent", bf = T.forwardRef((e, t) => {
	let n = _f(yf, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = lf(yf, e.__scopePopover);
	return /* @__PURE__ */ N(d, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ N(Sf, {
			...i,
			ref: t
		}) : /* @__PURE__ */ N(Cf, {
			...i,
			ref: t
		})
	});
});
bf.displayName = yf;
var xf = x("PopoverContent.RemoveScroll"), Sf = T.forwardRef((t, n) => {
	let i = lf(yf, t.__scopePopover), a = T.useRef(null), o = r(n, a), s = T.useRef(!1);
	return T.useEffect(() => {
		let e = a.current;
		if (e) return m(e);
	}, []), /* @__PURE__ */ N(y, {
		as: xf,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ N(wf, {
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
}), Cf = T.forwardRef((e, t) => {
	let n = lf(yf, e.__scopePopover), r = T.useRef(!1), i = T.useRef(!1);
	return /* @__PURE__ */ N(wf, {
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
}), wf = T.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, ...m } = e, h = lf(yf, n), _ = sf(n);
	return g(), /* @__PURE__ */ N(l, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ N(p, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: f,
			onEscapeKeyDown: c,
			onPointerDownOutside: u,
			onFocusOutside: d,
			onDismiss: () => h.onOpenChange(!1),
			children: /* @__PURE__ */ N(s, {
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
}), Tf = "PopoverClose", Ef = T.forwardRef((t, n) => {
	let { __scopePopover: r, ...i } = t, a = lf(Tf, r);
	return /* @__PURE__ */ N(u.button, {
		type: "button",
		...i,
		ref: n,
		onClick: e(t.onClick, () => a.onOpenChange(!1))
	});
});
Ef.displayName = Tf;
var Df = "PopoverArrow", Of = T.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ N(v, {
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
	A(() => {
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
	let t = j(null);
	return Rf(t), /* @__PURE__ */ N("canvas", {
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
	let e = j(null), [t, n] = M(null);
	return A(() => {
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
	let { isGlass: c, colorScheme: l } = Gd(), u = r === void 0 ? c : r, d = S((e) => e.glassMode), f = i ?? Vf[n], p = f ? { borderRadius: f } : {}, m = Hf[n], { elementRef: h, maps: g } = Bf(), _ = T.useCallback((e) => {
		h.current = e, o && (typeof o == "function" ? o(e) : o.current = e);
	}, [o, h]), v = u && g ? `url(#${g.filterId}) blur(24px)` : u ? "url(#lg-distort) blur(24px)" : "blur(20px)";
	return u ? d === "clear" ? /* @__PURE__ */ P("div", {
		ref: _,
		className: C("relative overflow-hidden border border-white/25 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: [
			/* @__PURE__ */ N("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				style: {
					...p,
					backdropFilter: "blur(3px)",
					filter: "url(#glass-distortion)",
					isolation: "isolate"
				}
			}),
			/* @__PURE__ */ N("div", {
				className: "absolute inset-0 z-10 pointer-events-none",
				style: {
					...p,
					background: n === "panel" ? l === "dark" ? "rgba(26, 28, 40, 0.66)" : "rgba(246, 246, 246, 0.62)" : "rgba(255, 255, 255, 0.08)"
				}
			}),
			/* @__PURE__ */ N("div", {
				className: "absolute inset-0 z-20 pointer-events-none",
				style: {
					...p,
					boxShadow: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25), inset -0.5px -0.5px 1px 1px rgba(255, 255, 255, 0.15)"
				}
			}),
			/* @__PURE__ */ N("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			})
		]
	}) : /* @__PURE__ */ P("div", {
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
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ N("div", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none z-10",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.5) 70%, transparent 95%)" }
			}),
			u && n !== "menubar" && n !== "taskbar" && /* @__PURE__ */ N("div", {
				"aria-hidden": !0,
				className: "absolute inset-y-0 left-0 w-px pointer-events-none z-10",
				style: { background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)" }
			}),
			/* @__PURE__ */ N("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			}),
			u && /* @__PURE__ */ N(zf, { className: "absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" }),
			u && g && /* @__PURE__ */ N("svg", {
				"aria-hidden": !0,
				style: {
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ P("filter", {
					id: g.filterId,
					colorInterpolationFilters: "sRGB",
					children: [
						/* @__PURE__ */ N("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "0.2",
							result: "blurred_source"
						}),
						/* @__PURE__ */ N("feImage", {
							href: g.displacementUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "displacement_map",
							"result-type": "feImage"
						}),
						/* @__PURE__ */ N("feDisplacementMap", {
							in: "blurred_source",
							in2: "displacement_map",
							scale: 80,
							xChannelSelector: "R",
							yChannelSelector: "G",
							result: "displaced"
						}),
						/* @__PURE__ */ N("feColorMatrix", {
							in: "displaced",
							type: "saturate",
							result: "displaced_saturated",
							values: "6"
						}),
						/* @__PURE__ */ N("feImage", {
							href: g.specularUrl,
							x: "0",
							y: "0",
							width: g.width,
							height: g.height,
							result: "specular_layer"
						}),
						/* @__PURE__ */ N("feComposite", {
							in: "displaced_saturated",
							in2: "specular_layer",
							operator: "in",
							result: "specular_saturated"
						}),
						/* @__PURE__ */ N("feComponentTransfer", {
							in: "specular_layer",
							result: "specular_faded",
							children: /* @__PURE__ */ N("feFuncA", {
								type: "linear",
								slope: "0.3"
							})
						}),
						/* @__PURE__ */ N("feBlend", {
							in: "specular_saturated",
							in2: "displaced",
							mode: "normal",
							result: "withSaturation"
						}),
						/* @__PURE__ */ N("feBlend", {
							in: "specular_faded",
							in2: "withSaturation",
							mode: "normal"
						})
					]
				})
			})
		]
	}) : /* @__PURE__ */ N("div", {
		ref: _,
		className: C("relative overflow-hidden border", n === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", m, t),
		style: {
			...p,
			...a
		},
		...s,
		children: /* @__PURE__ */ N("div", {
			className: "relative z-20 min-w-0 w-full h-full",
			children: e
		})
	});
}
//#endregion
//#region src/components/menubar/ControlCenter.tsx
function Wf({ forceDark: e = !1 } = {}) {
	let [t, n] = M(!1), r = S((e) => e.colorScheme), i = S((e) => e.setColorScheme), a = S((e) => e.glassEnabled), o = S((e) => e.setGlassEnabled), s = S((e) => e.wallpaperTextTheme), [c, l] = M(75), [u, d] = M(80), f = e ? "dark" : s, p = f === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", m = f === "light" ? "text-black/90" : "text-white/90", h = f === "light" ? "text-black/55" : "text-white/55", g = f === "light" ? "text-black/45" : "text-white/45", _ = f === "light" ? "bg-black/5" : "bg-white/5", v = f === "light" ? "hover:bg-black/10 text-black/70" : "hover:bg-white/10 text-white/80";
	return /* @__PURE__ */ P(Af, {
		open: t,
		onOpenChange: n,
		modal: !1,
		children: [/* @__PURE__ */ N(jf, {
			asChild: !0,
			children: /* @__PURE__ */ N("button", {
				className: `p-1.5 rounded-md transition-colors flex items-center gap-1 ${p}`,
				"aria-label": "Control Center",
				children: /* @__PURE__ */ N(Qd, { className: "w-4 h-4" })
			})
		}), /* @__PURE__ */ N(Mf, { children: /* @__PURE__ */ N(Nf, {
			align: "end",
			sideOffset: 6,
			className: "w-72 z-[9999] outline-none",
			onInteractOutside: (e) => {
				e.target.closest("[data-radix-popper-content-wrapper]") && e.preventDefault();
			},
			onFocusOutside: (e) => e.preventDefault(),
			children: /* @__PURE__ */ N(Uf, {
				variant: "panel",
				className: "p-4 w-full",
				children: /* @__PURE__ */ P("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ P("div", {
							className: C("rounded-[var(--radius-input)] p-3 flex items-center gap-2", _),
							children: [/* @__PURE__ */ N("div", {
								className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ N(tf, { className: "w-4 h-4 text-white" })
							}), /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ N("p", {
								className: C("text-xs font-semibold", m),
								children: "Wi-Fi"
							}), /* @__PURE__ */ N("p", {
								className: C("text-[10px]", h),
								children: "Connected"
							})] })]
						}),
						/* @__PURE__ */ P("div", {
							className: C("rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ N("p", {
								className: C("text-xs font-semibold mb-2", m),
								children: "Appearance"
							}), /* @__PURE__ */ N("div", {
								className: "flex gap-1",
								children: [
									{
										id: "light",
										icon: /* @__PURE__ */ N(ie, { className: "w-3 h-3" })
									},
									{
										id: "auto",
										icon: /* @__PURE__ */ N(te, { className: "w-3 h-3" })
									},
									{
										id: "dark",
										icon: /* @__PURE__ */ N(Xd, { className: "w-3 h-3" })
									}
								].map(({ id: e, icon: t }) => /* @__PURE__ */ N("button", {
									onClick: () => i(e),
									className: C("flex-1 flex items-center justify-center py-1 rounded-md text-[10px] transition-colors", r === e ? "bg-blue-500 text-white" : v),
									children: t
								}, e))
							})]
						}),
						/* @__PURE__ */ P("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ P("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ N(ie, { className: C("w-3 h-3", m) }),
									/* @__PURE__ */ N("p", {
										className: C("text-xs font-semibold", m),
										children: "Brightness"
									}),
									/* @__PURE__ */ P("span", {
										className: C("text-[10px] ml-auto", g),
										children: [u, "%"]
									})
								]
							}), /* @__PURE__ */ N("input", {
								type: "range",
								min: 0,
								max: 100,
								value: u,
								onChange: (e) => d(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ P("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3", _),
							children: [/* @__PURE__ */ P("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ N(ae, { className: C("w-3 h-3", m) }),
									/* @__PURE__ */ N("p", {
										className: C("text-xs font-semibold", m),
										children: "Sound"
									}),
									/* @__PURE__ */ P("span", {
										className: C("text-[10px] ml-auto", g),
										children: [c, "%"]
									})
								]
							}), /* @__PURE__ */ N("input", {
								type: "range",
								min: 0,
								max: 100,
								value: c,
								onChange: (e) => l(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ P("div", {
							className: C("col-span-2 rounded-[var(--radius-input)] p-3 flex items-center justify-between", _),
							children: [/* @__PURE__ */ N("p", {
								className: C("text-xs font-semibold", m),
								children: "Liquid Glass"
							}), /* @__PURE__ */ N("button", {
								onClick: () => o(!a),
								className: C("w-10 h-5 rounded-full transition-colors relative", a ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
								children: /* @__PURE__ */ N("span", { className: C("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all", a ? "left-5" : "left-0.5") })
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
var Gf = E("dark");
function Kf() {
	return k(Gf) === "light" ? "text-black/80 hover:bg-black/10" : "text-white/85 hover:bg-white/10";
}
var qf = "flex h-6 items-center rounded-md px-2.5 text-[14px] leading-none transition-colors";
function Jf({ label: e, shortcut: t, disabled: n, checked: r, onClick: i }) {
	return /* @__PURE__ */ P("button", {
		disabled: n,
		className: C("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", n ? "text-black/30 dark:text-white/30" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
		onClick: i,
		children: [/* @__PURE__ */ P("span", {
			className: "flex items-center",
			children: [/* @__PURE__ */ N("span", {
				className: "mr-1.5 w-3 shrink-0 text-center",
				children: r ? "✓" : ""
			}), e]
		}), t && /* @__PURE__ */ N("span", {
			className: "text-[11px] opacity-50 ml-6",
			children: t
		})]
	});
}
function Yf() {
	return /* @__PURE__ */ N("div", { className: "my-1 mx-2 h-px bg-black/10 dark:bg-white/10" });
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
	let [r, i] = M(!1), [a, o] = M(null), s = j(null), c = j(null), l = !!e.children && e.children.length > 0, u = O(() => {
		if (c.current &&= (clearTimeout(c.current), null), !s.current) return;
		let e = s.current.getBoundingClientRect();
		o({
			top: e.top - 4,
			left: e.right + 2
		}), i(!0);
	}, []), d = O(() => {
		c.current = setTimeout(() => i(!1), 150);
	}, []);
	return A(() => () => {
		c.current && clearTimeout(c.current);
	}, []), l ? /* @__PURE__ */ P("div", {
		onMouseEnter: u,
		onMouseLeave: d,
		children: [/* @__PURE__ */ P("button", {
			ref: s,
			disabled: e.disabled,
			className: C("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", e.disabled ? "text-black/30 dark:text-white/30" : r ? "bg-accent-active text-white" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
			children: [/* @__PURE__ */ N("span", { children: Zf(e.label, t) }), /* @__PURE__ */ N(ee, { className: "w-3.5 h-3.5 ml-6 opacity-60" })]
		}), r && a && typeof document < "u" && xe(/* @__PURE__ */ N("div", {
			"data-menu-portal": "true",
			className: "fixed z-[99999] outline-none",
			style: {
				top: a.top,
				left: a.left,
				minWidth: 192
			},
			onMouseEnter: u,
			onMouseLeave: d,
			children: /* @__PURE__ */ N(Uf, {
				variant: "panel",
				className: "py-1 px-1 w-full",
				children: e.children.map((e, r) => e.separator ? /* @__PURE__ */ N(Yf, {}, `sep-${r}`) : /* @__PURE__ */ N(Qf, {
					item: e,
					t,
					onSelect: n
				}, e.key))
			})
		}), document.body)]
	}) : /* @__PURE__ */ N(Jf, {
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
	let n = k(Gf), r = (t ? "dark" : n) === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", [i, a] = M(!1);
	return /* @__PURE__ */ P(Af, {
		modal: !1,
		open: i,
		onOpenChange: a,
		children: [/* @__PURE__ */ N(jf, {
			asChild: !0,
			children: /* @__PURE__ */ P("button", {
				className: C(qf, "relative px-2", r, "data-[state=open]:bg-accent-active data-[state=open]:text-white"),
				title: e.label,
				"aria-label": e.label,
				children: [e.icon, e.status && /* @__PURE__ */ N("span", { className: C("absolute bottom-0.5 right-0.5 h-1.5 w-1.5 rounded-full ring-1 ring-black/20", $f[e.status]) })]
			})
		}), /* @__PURE__ */ N(Mf, { children: /* @__PURE__ */ N(Nf, {
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
			children: /* @__PURE__ */ N(Uf, {
				variant: "panel",
				className: "min-w-56 max-w-sm p-3",
				children: e.content
			})
		}) })]
	});
}
//#endregion
//#region src/lib/menu-bar-extras.ts
var tp = E([]), np = tp.Provider;
function rp() {
	return k(tp);
}
//#endregion
//#region src/components/menubar/DropdownPanel.tsx
function ip({ anchorRef: e, open: t, onClose: n, minWidth: r = 192, children: i }) {
	let [a, o] = M(null), s = j(null);
	return A(() => {
		if (!t || !e.current) return;
		let n = e.current.getBoundingClientRect();
		o({
			top: n.bottom + 6,
			left: n.left
		});
	}, [t, e]), A(() => {
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
	]), !t || !a || typeof document > "u" ? null : xe(/* @__PURE__ */ N("div", {
		ref: s,
		"data-menu-portal": "true",
		className: "fixed z-[99999] outline-none",
		style: {
			top: a.top,
			left: a.left,
			minWidth: r
		},
		children: /* @__PURE__ */ N(Uf, {
			variant: "panel",
			className: "py-1 px-1 w-full",
			children: i
		})
	}), document.body);
}
//#endregion
//#region src/components/menubar/PersonalAboutDialog.tsx
function ap({ onClose: e }) {
	let [t, n] = M({
		x: 0,
		y: 0
	}), [r, i] = M(!1), a = j(null), o = O((e) => {
		e.target.closest("button") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), a.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: t.x,
			oy: t.y
		});
	}, [t]), s = O((e) => {
		a.current && n({
			x: a.current.ox + (e.clientX - a.current.mx),
			y: a.current.oy + (e.clientY - a.current.my)
		});
	}, []), c = O(() => {
		a.current = null;
	}, []);
	return typeof document > "u" ? null : xe(/* @__PURE__ */ P("div", {
		className: "fixed inset-0 flex items-center justify-center pointer-events-none",
		style: { zIndex: 99999 },
		children: [/* @__PURE__ */ N("div", {
			className: "absolute inset-0 pointer-events-auto",
			onClick: e
		}), /* @__PURE__ */ P("div", {
			className: "relative flex flex-col items-center bg-neutral-100/97 dark:bg-[#1c1c1e]/97 backdrop-blur-2xl rounded-(--radius-window) shadow-2xl border border-black/10 dark:border-white/8 w-80 overflow-hidden pointer-events-auto",
			style: { transform: `translate(${t.x}px, ${t.y}px)` },
			onPointerMove: s,
			onPointerUp: c,
			onPointerCancel: c,
			children: [/* @__PURE__ */ N("div", {
				className: "w-full flex items-center gap-2 px-4 pt-3.5 pb-2 border-b border-black/8 dark:border-white/8 cursor-move select-none bg-neutral-200/60 dark:bg-white/5",
				onPointerDown: o,
				onMouseEnter: () => i(!0),
				onMouseLeave: () => i(!1),
				children: /* @__PURE__ */ P("div", {
					className: "flex items-center gap-2",
					onPointerDown: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ N("button", {
							onClick: e,
							className: "w-3.5 h-3.5 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer",
							style: { backgroundColor: "#ff5f57" },
							children: r && /* @__PURE__ */ N(oe, {
								className: "w-2 h-2 text-red-900/80",
								strokeWidth: 3
							})
						}),
						/* @__PURE__ */ N("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						}),
						/* @__PURE__ */ N("div", {
							className: "w-3.5 h-3.5 rounded-full",
							style: { backgroundColor: "#d1d1d1" }
						})
					]
				})
			}), /* @__PURE__ */ P("div", {
				className: "flex flex-col items-center px-8 pt-6 pb-7 gap-2 select-none",
				children: [
					/* @__PURE__ */ N("div", {
						className: "w-20 h-20 mb-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg",
						children: "S"
					}),
					/* @__PURE__ */ N("div", {
						className: "text-[17px] font-bold text-black/90 dark:text-white/90",
						children: "Skyline"
					}),
					/* @__PURE__ */ N("div", {
						className: "text-[13px] text-black/55 dark:text-white/55",
						children: "sonth87@gmail.com"
					}),
					/* @__PURE__ */ N("div", { className: "w-full h-px bg-black/10 dark:bg-white/10 my-2" }),
					/* @__PURE__ */ P("div", {
						className: "text-[12px] text-black/45 dark:text-white/45 text-center leading-relaxed",
						children: [
							"macOS Desktop Layout",
							/* @__PURE__ */ N("br", {}),
							"Version 1.0 · Built with Next.js & React"
						]
					}),
					/* @__PURE__ */ P("a", {
						href: "https://github.com/sonth87/device-layout",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-1.5 text-[12px] text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors mt-1 pointer-events-auto",
						children: [/* @__PURE__ */ N("svg", {
							viewBox: "0 0 24 24",
							className: "w-3.5 h-3.5 fill-current",
							"aria-hidden": "true",
							children: /* @__PURE__ */ N("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" })
						}), "sonth87/device-layout"]
					}),
					/* @__PURE__ */ N("div", {
						className: "text-[11px] text-black/35 dark:text-white/35 text-center mt-1",
						children: "© 2026 Skyline. All rights reserved."
					})
				]
			})]
		})]
	}), document.body);
}
//#endregion
//#region src/contexts/CustomOSIconContext.tsx
var op = E({});
function sp({ config: e, children: t }) {
	return /* @__PURE__ */ N(op.Provider, {
		value: e,
		children: t
	});
}
function cp() {
	return k(op);
}
//#endregion
//#region src/components/menubar/AppleMenuDropdown.tsx
function lp({ activeId: e, setActiveId: t }) {
	let { macOSAppleIcon: n } = cp(), r = e === "apple", i = O((e) => {
		t((typeof e == "function" ? e(r) : e) ? "apple" : null);
	}, [r, t]), a = Kf(), [o, s] = M(!1), c = j(null), l = S((e) => e.apps), u = S((e) => e.launchApp), { t: d } = se(), f = O(() => i(!1), [i]);
	return /* @__PURE__ */ P(be, { children: [
		/* @__PURE__ */ N("button", {
			ref: c,
			onMouseDown: (e) => {
				e.button === 0 && i((e) => !e);
			},
			onMouseEnter: () => {
				e !== null && t("apple");
			},
			className: C(qf, r ? "bg-accent-active text-white" : a),
			children: n ? /* @__PURE__ */ N("span", {
				className: "flex items-center justify-center h-4 w-auto max-h-4 shrink-0 select-none [&>svg]:h-full [&>svg]:w-auto [&>img]:h-full [&>img]:w-auto",
				children: n
			}) : /* @__PURE__ */ N("span", {
				className: "text-2xl leading-none font-sans",
				children: ""
			})
		}),
		/* @__PURE__ */ P(ip, {
			anchorRef: c,
			open: r,
			onClose: f,
			minWidth: 220,
			children: [
				/* @__PURE__ */ N(Jf, {
					label: d.aboutThisMac,
					onClick: () => {
						i(!1), s(!0);
					}
				}),
				/* @__PURE__ */ N(Yf, {}),
				/* @__PURE__ */ N(Jf, {
					label: d.systemSettings,
					onClick: () => {
						i(!1);
						let e = l.settings;
						e && u(e);
					}
				})
			]
		}),
		o && /* @__PURE__ */ N(ap, { onClose: () => s(!1) })
	] });
}
//#endregion
//#region src/components/menubar/AppNameDropdown.tsx
function up({ appConfig: e, appId: t, activeId: n, setActiveId: r }) {
	let i = n === "app-name", a = O((e) => {
		r((typeof e == "function" ? e(i) : e) ? "app-name" : null);
	}, [i, r]), o = Kf(), s = j(null), c = S((e) => e.closeWindow), { t: l, getAppName: u } = se();
	if (!e) return null;
	let d = u(e.id, e.name), f = O(() => a(!1), [a]), p = (e) => {
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
	return /* @__PURE__ */ P(be, { children: [/* @__PURE__ */ N("button", {
		ref: s,
		onMouseDown: (e) => {
			e.button === 0 && a((e) => !e);
		},
		onMouseEnter: () => {
			n !== null && r("app-name");
		},
		className: C(qf, "font-bold", i ? "bg-accent-active text-white" : o),
		children: /* @__PURE__ */ N("span", {
			className: "text-[14px] font-bold",
			children: d
		})
	}), /* @__PURE__ */ P(ip, {
		anchorRef: s,
		open: i,
		onClose: f,
		minWidth: 208,
		children: [
			/* @__PURE__ */ N(Jf, {
				label: `${l.aboutApp} ${d}`,
				onClick: () => {
					a(!1), p("about");
				},
				disabled: !t
			}),
			/* @__PURE__ */ N(Yf, {}),
			h && h.length > 0 ? h.map((e, t) => e.separator ? /* @__PURE__ */ N(Yf, {}, `sep-${t}`) : /* @__PURE__ */ N(Qf, {
				item: e,
				t: l,
				onSelect: g
			}, e.key)) : /* @__PURE__ */ P(be, { children: [
				/* @__PURE__ */ N(Jf, {
					label: l.services,
					disabled: !0
				}),
				/* @__PURE__ */ N(Yf, {}),
				/* @__PURE__ */ N(Jf, {
					label: `${l.hide} ${d}`,
					shortcut: "⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ N(Jf, {
					label: l.hideOthers,
					shortcut: "⌥⌘H",
					disabled: !0
				}),
				/* @__PURE__ */ N(Jf, {
					label: l.showAll,
					disabled: !0
				})
			] }),
			/* @__PURE__ */ N(Yf, {}),
			/* @__PURE__ */ N(Jf, {
				label: `${l.quit} ${d}`,
				shortcut: "⌘Q",
				onClick: m
			})
		]
	})] });
}
//#endregion
//#region src/components/menubar/MenuDropdown.tsx
function dp({ label: e, items: t, appId: n, windowId: r, activeId: i, setActiveId: a }) {
	let o = i === e, s = O((t) => {
		a((typeof t == "function" ? t(o) : t) ? e : null);
	}, [
		o,
		e,
		a
	]), c = Kf(), l = j(null), { t: u } = se(), d = O(() => s(!1), [s]), f = (e) => {
		s(!1), e.action && n && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: n,
			action: e.action,
			windowId: r
		} }));
	};
	return /* @__PURE__ */ P(be, { children: [/* @__PURE__ */ N("button", {
		ref: l,
		onMouseDown: (e) => {
			e.button === 0 && s((e) => !e);
		},
		onMouseEnter: () => {
			i !== null && a(e);
		},
		className: C(qf, o ? "bg-accent-active text-white" : c),
		children: Xf(e, u)
	}), /* @__PURE__ */ N(ip, {
		anchorRef: l,
		open: o,
		onClose: d,
		minWidth: 192,
		children: t.map((e, t) => e.separator ? /* @__PURE__ */ N(Yf, {}, `sep-${t}`) : /* @__PURE__ */ N(Qf, {
			item: e,
			t: u,
			onSelect: f
		}, e.key))
	})] });
}
//#endregion
//#region src/contexts/SimpleModeContext.tsx
var fp = E({
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
function pp({ features: e, children: t }) {
	return /* @__PURE__ */ N(fp.Provider, {
		value: e,
		children: t
	});
}
function mp() {
	return k(fp);
}
//#endregion
//#region src/components/menubar/MenuBar.tsx
function hp({ onSpotlight: e, isSimpleMode: t = !1, forceDark: n = !1, fallbackMenuBarAppId: r = null } = {}) {
	let i = mp(), a = S((e) => e.activeAppId), o = S((e) => e.apps), s = a ?? r, c = s ? o[s] : null, l = i.menuBar.appleMenu, u = i.menuBar.appNameMenu && !!c, d = c?.menuBarMenus ?? [], f = S((e) => e.wallpaperTextTheme), p = n ? "dark" : f, m = C(qf, "px-2", p === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10"), [h, g] = M(null), _ = rp(), v = i.menuBar.extras && _.length > 0;
	if (!i.menuBar.enabled) return null;
	let y = i.menuBar.spotlight || i.menuBar.controlCenter || i.menuBar.clock || v;
	return /* @__PURE__ */ N(Gf.Provider, {
		value: p,
		children: /* @__PURE__ */ N(Uf, {
			variant: "menubar",
			forceGlass: !n && void 0,
			className: C("h-(--menubar-height) w-full", n ? "border-b-black/70 bg-[#111318] shadow-none" : void 0),
			children: /* @__PURE__ */ P("div", {
				"data-menubar": "true",
				"data-fullscreen-menubar": n ? "true" : void 0,
				className: "flex h-full w-full items-center px-2",
				children: [
					/* @__PURE__ */ P("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							l && /* @__PURE__ */ N(lp, {
								activeId: h,
								setActiveId: g
							}),
							u && /* @__PURE__ */ N(up, {
								appConfig: c,
								appId: a,
								activeId: h,
								setActiveId: g
							}),
							d.map((e) => /* @__PURE__ */ N(dp, {
								label: e.label,
								items: e.items,
								appId: a,
								activeId: h,
								setActiveId: g
							}, e.label))
						]
					}),
					/* @__PURE__ */ N("div", { className: "flex-1" }),
					y && /* @__PURE__ */ P("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							i.menuBar.spotlight && /* @__PURE__ */ N("button", {
								onClick: e,
								className: m,
								title: "Spotlight Search (⌘Space)",
								children: /* @__PURE__ */ N(re, { className: "w-4 h-4" })
							}),
							v && _.map((e) => /* @__PURE__ */ N(ep, {
								item: e,
								forceDark: n
							}, e.id)),
							i.menuBar.controlCenter && /* @__PURE__ */ P(be, { children: [
								/* @__PURE__ */ N("button", {
									className: m,
									children: /* @__PURE__ */ N(tf, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ N("button", {
									className: m,
									children: /* @__PURE__ */ N(Kd, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ N(Wf, { forceDark: n })
							] }),
							i.menuBar.clock && /* @__PURE__ */ N("div", {
								className: "flex h-6 items-center rounded-md px-2",
								children: /* @__PURE__ */ N(nf, { forceDark: n })
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
function gp({ appName: e, error: t, onRetry: n }) {
	let { t: r } = se();
	return /* @__PURE__ */ P("div", {
		className: "flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center",
		children: [
			/* @__PURE__ */ N($d, { className: "h-6 w-6 text-black/30 dark:text-white/30" }),
			/* @__PURE__ */ P("div", {
				className: "text-sm font-medium text-black/70 dark:text-white/70",
				children: [
					e,
					" ",
					r.appCrashedTitle
				]
			}),
			/* @__PURE__ */ N("div", {
				className: "max-w-xs break-words text-xs text-black/40 dark:text-white/40",
				children: t.message
			}),
			/* @__PURE__ */ P("button", {
				type: "button",
				onClick: n,
				className: "mt-1 flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-medium text-black/70 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15",
				children: [/* @__PURE__ */ N(ne, { className: "h-3 w-3" }), r.appCrashedRetry]
			})
		]
	});
}
var _p = class extends ue {
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
		return this.state.error ? /* @__PURE__ */ N(gp, {
			appName: this.props.appName,
			error: this.state.error,
			onRetry: this.handleRetry
		}) : /* @__PURE__ */ N("div", {
			className: "h-full w-full",
			children: this.props.children
		}, this.state.retryCount);
	}
}, vp = {
	Finder: D(() => import("./Finder-BB7oZuyx.js").then((e) => ({ default: e.Finder }))),
	Terminal: D(() => import("./Terminal-C55a7p1b.js").then((e) => ({ default: e.Terminal }))),
	Settings: D(() => import("./Settings-D4esjlpO.js").then((e) => ({ default: e.Settings }))),
	Browser: D(() => import("./Browser-hEqHPiIK.js").then((e) => ({ default: e.Browser }))),
	TextEditor: D(() => import("./TextEditor-iru1gdUU.js").then((e) => ({ default: e.TextEditor }))),
	Clock: D(() => import("./Clock-BEzpL5Ds.js").then((e) => ({ default: e.Clock }))),
	Calculator: D(() => import("./Calculator-ozMCBLt4.js").then((e) => ({ default: e.Calculator }))),
	Notes: D(() => import("./Notes-Ccx_EdMi.js").then((e) => ({ default: e.Notes }))),
	Photos: D(() => import("./Photos-Dnq0JOOH.js").then((e) => ({ default: e.Photos }))),
	Music: D(() => import("./Music-CozOuLAL.js").then((e) => ({ default: e.Music }))),
	Calendar: D(() => import("./Calendar-uT2XargG.js").then((e) => ({ default: e.Calendar }))),
	Messages: D(() => import("./Messages-BlOviMRw.js").then((e) => ({ default: e.Messages }))),
	IframeApp: D(() => import("./IframeApp-CoyQDe6J.js").then((e) => ({ default: e.IframeApp }))),
	MdxApp: D(() => import("./MdxApp-CAJq8zg_.js").then((e) => ({ default: e.MdxApp })))
};
function yp() {
	return /* @__PURE__ */ N("div", {
		className: "flex items-center justify-center h-full w-full",
		children: /* @__PURE__ */ N(Jd, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
	});
}
function bp({ appId: e, windowId: t }) {
	let n = S((t) => t.apps[e]);
	if (!n) return /* @__PURE__ */ P("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["App not found: ", e]
	});
	if (n.render) {
		let r = n.render;
		return /* @__PURE__ */ N(fe, {
			fallback: /* @__PURE__ */ N(yp, {}),
			children: /* @__PURE__ */ N(ce, { children: /* @__PURE__ */ N(_p, {
				appId: e,
				appName: n.name,
				children: /* @__PURE__ */ N(r, {
					appId: e,
					windowId: t
				})
			}) })
		});
	}
	let r = n.component ? vp[n.component] : void 0;
	return r ? /* @__PURE__ */ N(fe, {
		fallback: /* @__PURE__ */ N(yp, {}),
		children: /* @__PURE__ */ N(ce, { children: /* @__PURE__ */ N(_p, {
			appId: e,
			appName: n.name,
			children: /* @__PURE__ */ N(r, {
				appId: e,
				windowId: t
			})
		}) })
	}) : /* @__PURE__ */ P("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["Component not registered: ", n.component ?? "(none)"]
	});
}
//#endregion
//#region src/components/mobile/MobileMenuSheet.tsx
function xp({ menus: e, appId: t, open: n, onClose: r }) {
	let { t: i } = se(), [a, o] = M(null), s = O((e) => {
		e.action && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} })), r();
	}, [t, r]);
	return typeof document > "u" ? null : xe(/* @__PURE__ */ N(pl, { children: n && /* @__PURE__ */ P(be, { children: [/* @__PURE__ */ N(ld.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 bg-black/30 z-[2000]",
		onClick: r
	}, "backdrop"), /* @__PURE__ */ P(ld.div, {
		initial: { y: "100%" },
		animate: { y: 0 },
		exit: { y: "100%" },
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 38
		},
		className: "fixed bottom-0 left-0 right-0 z-[2001] max-h-[75vh] overflow-y-auto rounded-t-2xl bg-white dark:bg-neutral-900 shadow-2xl",
		children: [/* @__PURE__ */ N("div", {
			className: "sticky top-0 flex justify-center py-2 bg-white dark:bg-neutral-900",
			children: /* @__PURE__ */ N("div", { className: "w-10 h-1 rounded-full bg-black/20 dark:bg-white/25" })
		}), /* @__PURE__ */ N("div", {
			className: "px-4 pb-8",
			children: e.map((e) => /* @__PURE__ */ P("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ N("div", {
					className: "px-1 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40",
					children: Xf(e.label, i)
				}), /* @__PURE__ */ N("div", {
					className: "rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.06]",
					children: e.items.map((e, t) => e.separator ? /* @__PURE__ */ N("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${t}`) : /* @__PURE__ */ N(Sp, {
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
function Sp({ item: e, t, onSelect: n, expandedKey: r, setExpandedKey: i, depth: a = 0 }) {
	let o = !!e.children && e.children.length > 0, s = r === e.key;
	return o ? /* @__PURE__ */ P("div", { children: [/* @__PURE__ */ P("button", {
		onClick: () => i(s ? null : e.key),
		style: { paddingLeft: 12 + a * 16 },
		className: "w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 transition-colors",
		children: [/* @__PURE__ */ N("span", { children: Zf(e.label, t) }), /* @__PURE__ */ N(qd, { className: C("w-4 h-4 opacity-50 transition-transform", s && "rotate-180") })]
	}), /* @__PURE__ */ N(pl, {
		initial: !1,
		children: s && /* @__PURE__ */ N(ld.div, {
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
			children: e.children.map((e, o) => e.separator ? /* @__PURE__ */ N("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${o}`) : /* @__PURE__ */ N(Sp, {
				item: e,
				t,
				onSelect: n,
				expandedKey: r,
				setExpandedKey: i,
				depth: a + 1
			}, e.key))
		})
	})] }) : /* @__PURE__ */ P("button", {
		disabled: e.disabled,
		onClick: () => n(e),
		style: { paddingLeft: 12 + a * 16 },
		className: C("w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left active:bg-black/5 dark:active:bg-white/10 transition-colors", e.disabled ? "text-black/30 dark:text-white/30" : "text-black dark:text-white"),
		children: [/* @__PURE__ */ N("span", { children: Zf(e.label, t) }), e.shortcut && /* @__PURE__ */ N("span", {
			className: "text-[12px] opacity-40 ml-4",
			children: e.shortcut
		})]
	});
}
//#endregion
//#region src/components/mobile/MobileAppViewer.tsx
var Cp = E(null);
function wp() {
	return k(Cp);
}
function Tp({ statusBarHeight: e, navBarHeight: t, homeIndicatorHeight: n = 20 }) {
	let r = S((e) => e.windows), i = S((e) => e.apps), a = S((e) => e.closeWindow), [o, s] = M(!1), [c, l] = M(!1), u = Object.values(r).filter((e) => !e.isMinimized).sort((e, t) => t.zIndex - e.zIndex), d = u[0] ?? null, f = O(() => {
		d && a(d.id);
	}, [d, a]), p = d ? i[d.appId] : null, m = Ud(), h = ud(0), g = pd(h, [0, -220], [1, .75]), _ = pd(h, [0, -220], [0, 48]);
	return /* @__PURE__ */ N(pl, { children: d && p && /* @__PURE__ */ P(ld.div, {
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
			/* @__PURE__ */ N(pl, {
				initial: !1,
				children: !o && /* @__PURE__ */ P(ld.div, {
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
						/* @__PURE__ */ N("button", {
							onClick: f,
							className: "flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ N("svg", {
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
							})
						}),
						/* @__PURE__ */ N("span", {
							className: "flex-1 text-center text-[15px] font-semibold text-black dark:text-white truncate",
							children: p.name
						}),
						p.menuBarMenus && p.menuBarMenus.length > 0 ? /* @__PURE__ */ N("button", {
							onClick: () => l(!0),
							className: "w-5 h-5 flex items-center justify-center text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ N(Yd, { className: "w-5 h-5" })
						}) : /* @__PURE__ */ N("div", { className: "w-5" })
					]
				}, "app-header")
			}),
			/* @__PURE__ */ N("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ N(Cp.Provider, {
					value: s,
					children: /* @__PURE__ */ N(bp, {
						appId: d.appId,
						windowId: d.id
					})
				})
			}),
			p.menuBarMenus && p.menuBarMenus.length > 0 && /* @__PURE__ */ N(xp, {
				menus: p.menuBarMenus,
				appId: d.appId,
				open: c,
				onClose: () => l(!1)
			}),
			/* @__PURE__ */ N("div", { style: { height: t + n } }),
			/* @__PURE__ */ N("div", {
				onPointerDown: (e) => m.start(e),
				className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 flex items-center justify-center z-[1000] pointer-events-auto cursor-grab active:cursor-grabbing",
				children: /* @__PURE__ */ N("div", { className: "w-32 h-1.5 bg-black/30 dark:bg-white/35 hover:bg-black/50 dark:hover:bg-white/50 rounded-full" })
			})
		]
	}, d.id) });
}
//#endregion
export { B as A, pd as C, nl as D, pl as E, Y as O, Bd as S, ld as T, Xd as _, pp as a, Gd as b, sp as c, Uf as d, nf as f, Zd as g, Qd as h, hp as i, ir as k, cp as l, ef as m, wp as n, mp as o, tf as p, bp as r, dp as s, Tp as t, np as u, qd as v, ud as w, Wd as x, Kd as y };
