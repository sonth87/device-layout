import { r as e, t } from "./store-429-ivOo.js";
import { t as n } from "./utils-B6YmNDS2.js";
import { t as r } from "./createLucideIcon--WjuKCts.js";
import { t as i } from "./chevron-right-BcSxNxws.js";
import { t as a } from "./monitor-CDDW7biH.js";
import { t as o } from "./search-BKG97C0x.js";
import { t as s } from "./sun-DdSv2tyc.js";
import { t as c } from "./volume-2-DAfADR-a.js";
import { t as l } from "./x-BYw6fhgP.js";
import { t as u } from "./useTranslation-BYwV1Fyx.js";
import { t as d } from "./AppViewport-BDJLAndL.js";
import * as f from "react";
import { Children as p, Component as m, Fragment as h, Suspense as g, createContext as _, createElement as v, forwardRef as y, isValidElement as b, lazy as x, useCallback as S, useContext as C, useEffect as w, useId as T, useInsertionEffect as E, useLayoutEffect as ee, useMemo as D, useRef as O, useState as k } from "react";
import { Fragment as A, jsx as j, jsxs as M } from "react/jsx-runtime";
import * as te from "react-dom";
import ne, { createPortal as re } from "react-dom";
//#region \0rolldown/runtime.js
var ie = Object.defineProperty, ae = Object.getOwnPropertyDescriptor, oe = Object.getOwnPropertyNames, se = Object.prototype.hasOwnProperty, ce = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, le = (e, t) => {
	let n = {};
	for (var r in e) ie(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ie(n, Symbol.toStringTag, { value: "Module" }), n;
}, ue = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = oe(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !se.call(e, s) && s !== n && ie(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ae(t, s)) || r.enumerable
	});
	return e;
}, de = (e) => se.call(e, "module.exports") ? e["module.exports"] : ue(ie({}, "__esModule", { value: !0 }), e), fe = _({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function pe(e) {
	let t = O(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var me = typeof window < "u" ? ee : w, he = /* @__PURE__ */ _(null);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/array.mjs
function ge(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function _e(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/clamp.mjs
var ve = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function ye(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/errors.mjs
var be = () => {}, N = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (be = (e, t, n) => {
	!e && typeof console < "u" && console.warn(ye(t, n));
}, N = (e, t, n) => {
	if (!e) throw Error(ye(t, n));
});
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/global-config.mjs
var xe = {}, Se = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-object.mjs
function Ce(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var we = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function Te(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/noop.mjs
var P = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Ee = (e, t) => (n) => t(e(n)), De = (...e) => e.reduce(Ee), Oe = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, ke = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return ge(this.subscriptions, e), () => _e(this.subscriptions, e);
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
}, F = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, I = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function Ae(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/warn-once.mjs
var je = /* @__PURE__ */ new Set();
function Me(e, t, n) {
	e || je.has(t) || (console.warn(ye(t, n)), je.add(t));
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/wrap.mjs
var Ne = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, Pe = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Fe = 1e-7, Ie = 12;
function Le(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Pe(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Fe && ++s < Ie);
	return o;
}
function Re(e, t, n, r) {
	if (e === t && n === r) return P;
	let i = (t) => Le(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Pe(i(e), t, r);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var ze = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Be = (e) => (t) => 1 - e(1 - t), Ve = /*@__PURE__*/ Re(.33, 1.53, .69, .99), He = /*@__PURE__*/ Be(Ve), Ue = /*@__PURE__*/ ze(He), We = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * He(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Ge = (e) => 1 - Math.sin(Math.acos(e)), Ke = Be(Ge), qe = ze(Ge), Je = /*@__PURE__*/ Re(.42, 0, 1, 1), Ye = /*@__PURE__*/ Re(0, 0, .58, 1), Xe = /*@__PURE__*/ Re(.42, 0, .58, 1), Ze = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function Qe(e, t) {
	return Ze(e) ? e[Ne(0, e.length, t)] : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var $e = (e) => Array.isArray(e) && typeof e[0] == "number", et = {
	linear: P,
	easeIn: Je,
	easeInOut: Xe,
	easeOut: Ye,
	circIn: Ge,
	circInOut: qe,
	circOut: Ke,
	backIn: He,
	backInOut: Ue,
	backOut: Ve,
	anticipate: We
}, tt = (e) => typeof e == "string", nt = (e) => {
	if ($e(e)) {
		N(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return Re(t, n, r, i);
	} else if (tt(e)) return N(et[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), et[e];
	return e;
}, rt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], it = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function at(e, t) {
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
			n = r, r = o, n.forEach(l), t && it.value && it.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var ot = 40;
function st(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = rt.reduce((e, n) => (e[n] = at(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = xe.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, ot), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: rt.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < rt.length; t++) o[rt[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: L, cancel: ct, state: R, steps: lt } = /* @__PURE__ */ st(typeof requestAnimationFrame < "u" ? requestAnimationFrame : P, !0), ut;
function dt() {
	ut = void 0;
}
var z = {
	now: () => (ut === void 0 && z.set(R.isProcessing || xe.useManualTiming ? R.timestamp : performance.now()), ut),
	set: (e) => {
		ut = e, queueMicrotask(dt);
	}
}, ft = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, pt = (e) => (t) => typeof t == "string" && t.startsWith(e), mt = /*@__PURE__*/ pt("--"), ht = /*@__PURE__*/ pt("var(--"), gt = (e) => ht(e) ? _t.test(e.split("/*")[0].trim()) : !1, _t = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function vt(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var yt = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, bt = {
	...yt,
	transform: (e) => ve(0, 1, e)
}, xt = {
	...yt,
	default: 1
}, St = (e) => Math.round(e * 1e5) / 1e5, Ct = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function wt(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Tt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Et = (e, t) => (n) => !!(typeof n == "string" && Tt.test(n) && n.startsWith(e) || t && !wt(n) && Object.prototype.hasOwnProperty.call(n, t)), Dt = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Ct);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ot = (e) => ve(0, 255, e), kt = {
	...yt,
	transform: (e) => Math.round(Ot(e))
}, At = {
	test: /*@__PURE__*/ Et("rgb", "red"),
	parse: /*@__PURE__*/ Dt("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + kt.transform(e) + ", " + kt.transform(t) + ", " + kt.transform(n) + ", " + St(bt.transform(r)) + ")"
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function jt(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Mt = {
	test: /*@__PURE__*/ Et("#"),
	parse: jt,
	transform: At.transform
}, Nt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Pt = /*@__PURE__*/ Nt("deg"), Ft = /*@__PURE__*/ Nt("%"), B = /*@__PURE__*/ Nt("px"), It = /*@__PURE__*/ Nt("vh"), Lt = /*@__PURE__*/ Nt("vw"), Rt = {
	...Ft,
	parse: (e) => Ft.parse(e) / 100,
	transform: (e) => Ft.transform(e * 100)
}, zt = {
	test: /*@__PURE__*/ Et("hsl", "hue"),
	parse: /*@__PURE__*/ Dt("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ft.transform(St(t)) + ", " + Ft.transform(St(n)) + ", " + St(bt.transform(r)) + ")"
}, V = {
	test: (e) => At.test(e) || Mt.test(e) || zt.test(e),
	parse: (e) => At.test(e) ? At.parse(e) : zt.test(e) ? zt.parse(e) : Mt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? At.transform(e) : zt.transform(e),
	getAnimatableNone: (e) => {
		let t = V.parse(e);
		return t.alpha = 0, V.transform(t);
	}
}, Bt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Vt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Ct)?.length || 0) + (e.match(Bt)?.length || 0) > 0;
}
var Ht = "number", Ut = "color", Wt = "var", Gt = "var(", Kt = "${}", qt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jt(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(qt, (e) => (V.test(e) ? (r.color.push(a), i.push(Ut), n.push(V.parse(e))) : e.startsWith(Gt) ? (r.var.push(a), i.push(Wt), n.push(e)) : (r.number.push(a), i.push(Ht), n.push(parseFloat(e))), ++a, Kt)).split(Kt),
		indexes: r,
		types: i
	};
}
function Yt(e) {
	return Jt(e).values;
}
function Xt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Ht ? i += St(r[a]) : e === Ut ? i += V.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function Zt(e) {
	return Xt(Jt(e));
}
var Qt = (e) => typeof e == "number" ? 0 : V.test(e) ? V.getAnimatableNone(e) : e, $t = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : Qt(e);
function en(e) {
	let t = Jt(e);
	return Xt(t)(t.values.map((e, n) => $t(e, t.split[n])));
}
var H = {
	test: Vt,
	parse: Yt,
	createTransformer: Zt,
	getAnimatableNone: en
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function tn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function nn({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = tn(s, r, e + 1 / 3), a = tn(s, r, e), o = tn(s, r, e - 1 / 3);
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
function rn(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var U = (e, t, n) => e + (t - e) * n, an = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, on = [
	Mt,
	At,
	zt
], sn = (e) => on.find((t) => t.test(e));
function cn(e) {
	let t = sn(e);
	if (be(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === zt && (n = nn(n)), n;
}
var ln = (e, t) => {
	let n = cn(e), r = cn(t);
	if (!n || !r) return rn(e, t);
	let i = { ...n };
	return (e) => (i.red = an(n.red, r.red, e), i.green = an(n.green, r.green, e), i.blue = an(n.blue, r.blue, e), i.alpha = U(n.alpha, r.alpha, e), At.transform(i));
}, un = /* @__PURE__ */ new Set(["none", "hidden"]);
function dn(e, t) {
	return un.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function fn(e, t) {
	return (n) => U(e, t, n);
}
function pn(e) {
	return typeof e == "number" ? fn : typeof e == "string" ? gt(e) ? rn : V.test(e) ? ln : _n : Array.isArray(e) ? mn : typeof e == "object" ? V.test(e) ? ln : hn : rn;
}
function mn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => pn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function hn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = pn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function gn(e, t) {
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
var _n = (e, t) => {
	let n = H.createTransformer(t), r = Jt(e), i = Jt(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? un.has(e) && !i.values.length || un.has(t) && !r.values.length ? dn(e, t) : De(mn(gn(r, i), i.values), n) : (be(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), rn(e, t));
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function vn(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? U(e, t, n) : pn(e)(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var yn = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => L.update(t, e),
		stop: () => ct(t),
		now: () => R.isProcessing ? R.timestamp : z.now()
	};
}, bn = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, xn = 2e4;
function Sn(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Cn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Sn(r), xn);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ I(i)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var W = {
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
function wn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Tn = 12;
function En(e, t, n) {
	let r = n;
	for (let n = 1; n < Tn; n++) r -= e(r) / t(r);
	return r;
}
var Dn = .001;
function On({ duration: e = W.duration, bounce: t = W.bounce, velocity: n = W.velocity, mass: r = W.mass }) {
	let i, a;
	be(e <= /* @__PURE__ */ F(W.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = ve(W.minDamping, W.maxDamping, o), e = ve(W.minDuration, W.maxDuration, /* @__PURE__ */ I(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = wn(t, o), c = Math.exp(-i);
		return Dn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = wn(t ** 2, o);
		return (-i(t) + Dn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = En(i, a, s);
	if (e = /* @__PURE__ */ F(e), isNaN(c)) return {
		stiffness: W.stiffness,
		damping: W.damping,
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
var kn = ["duration", "bounce"], An = [
	"stiffness",
	"damping",
	"mass"
];
function jn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Mn(e) {
	let t = {
		velocity: W.velocity,
		stiffness: W.stiffness,
		damping: W.damping,
		mass: W.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!jn(e, An) && jn(e, kn)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * ve(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: W.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = On({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: W.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Nn(e = W.visualDuration, t = W.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Mn({
		...n,
		velocity: -/* @__PURE__ */ I(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ I(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? W.restSpeed.granular : W.restSpeed.default, i ||= v ? W.restDelta.granular : W.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = wn(_, h), S = (m + h * _ * g) / x, y = (e) => {
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
		velocity: (e) => /* @__PURE__ */ F(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ F(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ F(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Sn(T), xn), t = bn((t) => T.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return T;
}
Nn.applyToOptions = (e) => {
	let t = Cn(e, 100, Nn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ F(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Pn = 5;
function Fn(e, t, n) {
	let r = Math.max(t - Pn, 0);
	return Ae(n - e(r), t - r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function In({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Nn({
			keyframes: [f.value, m(f.value)],
			velocity: Fn(y, e, f.value),
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
function Ln(e, t, n) {
	let r = [], i = n || xe.mix || vn, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = De(Array.isArray(t) ? t[n] || P : t, a)), r.push(a);
	}
	return r;
}
function Rn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (N(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Ln(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Oe(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(ve(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function zn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Oe(0, t, r);
		e.push(U(n, 1, i));
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Bn(e) {
	let t = [0];
	return zn(t, e.length - 1), t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Vn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Hn(e, t) {
	return e.map(() => t || Xe).splice(0, e.length - 1);
}
function Un({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = Ze(r) ? r.map(nt) : nt(r), a = {
		done: !1,
		value: t[0]
	}, o = Rn(Vn(n && n.length === t.length ? n : Bn(t), e), t, { ease: Array.isArray(i) ? i : Hn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Wn = (e) => e !== null;
function Gn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Wn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Kn = {
	decay: In,
	inertia: In,
	tween: Un,
	keyframes: Un,
	spring: Nn
};
function qn(e) {
	typeof e.type == "string" && (e.type = Kn[e.type]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Jn = class {
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
}, Yn = (e) => e / 100, Xn = class extends Jn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== z.now() && this.tick(z.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, ft.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		qn(e);
		let { type: t = Un, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Un;
		process.env.NODE_ENV !== "production" && s !== Un && N(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Un && typeof o[0] != "number" && (this.mixKeyframes = De(Yn, vn(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Sn(c));
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
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = ve(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== In && (b.value = Gn(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ I(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ I(e);
	}
	get time() {
		return /* @__PURE__ */ I(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ F(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Fn((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(z.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ I(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = yn, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(z.now()), this.holdTime = this.currentTime;
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
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, ft.mainThread--;
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
function Zn(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var Qn = (e) => e * 180 / Math.PI, $n = (e) => tr(Qn(Math.atan2(e[1], e[0]))), er = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: $n,
	rotateZ: $n,
	skewX: (e) => Qn(Math.atan(e[1])),
	skewY: (e) => Qn(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, tr = (e) => (e %= 360, e < 0 && (e += 360), e), nr = $n, rr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ir = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), ar = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: rr,
	scaleY: ir,
	scale: (e) => (rr(e) + ir(e)) / 2,
	rotateX: (e) => tr(Qn(Math.atan2(e[6], e[5]))),
	rotateY: (e) => tr(Qn(Math.atan2(-e[2], e[0]))),
	rotateZ: nr,
	rotate: nr,
	skewX: (e) => Qn(Math.atan(e[4])),
	skewY: (e) => Qn(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function or(e) {
	return +!!e.includes("scale");
}
function sr(e, t) {
	if (!e || e === "none") return or(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = ar, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = er, i = t;
	}
	if (!i) return or(t);
	let a = r[t], o = i[1].split(",").map(lr);
	return typeof a == "function" ? a(o) : o[a];
}
var cr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return sr(n, t);
};
function lr(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var ur = [
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
], dr = /* @__PURE__ */ new Set(ur), fr = (e) => e === yt || e === B, pr = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), mr = ur.filter((e) => !pr.has(e));
function hr(e) {
	let t = [];
	return mr.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var gr = {
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
	x: (e, { transform: t }) => sr(t, "x"),
	y: (e, { transform: t }) => sr(t, "y")
};
gr.translateX = gr.x, gr.translateY = gr.y;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var _r = /* @__PURE__ */ new Set(), vr = !1, yr = !1, br = !1;
function xr() {
	if (yr) {
		let e = Array.from(_r).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = hr(e);
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
	yr = !1, vr = !1, _r.forEach((e) => e.complete(br)), _r.clear();
}
function Sr() {
	_r.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (yr = !0);
	});
}
function Cr() {
	br = !0, Sr(), xr(), br = !1;
}
var wr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (_r.add(this), vr || (vr = !0, L.read(Sr), L.resolveKeyframes(xr))) : (this.readKeyframes(), this.complete());
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
		Zn(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), _r.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (_r.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Tr = (e) => e.startsWith("--");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Er(e, t, n) {
	Tr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Dr = {};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Or(e, t) {
	let n = /* @__PURE__ */ Te(e);
	return () => Dr[t] ?? n();
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var kr = /* @__PURE__ */ Or(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Ar = /*@__PURE__*/ Or(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), jr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Mr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ jr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ jr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ jr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ jr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Nr(e, t) {
	if (e) return typeof e == "function" ? Ar() ? bn(e, t) : "ease-out" : $e(e) ? jr(e) : Array.isArray(e) ? e.map((e) => Nr(e, t) || Mr.easeOut) : Mr[e];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Pr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Nr(s, i);
	Array.isArray(d) && (u.easing = d), it.value && ft.waapi++;
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
	return it.value && p.finished.finally(() => {
		ft.waapi--;
	}), p;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Fr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Ir({ type: e, ...t }) {
	return Fr(e) && Ar() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Lr = class extends Jn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, N(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Ir(e);
		this.animation = Pr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Gn(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Er(t, n, e), this.animation.cancel();
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
		return /* @__PURE__ */ I(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ I(e);
	}
	get time() {
		return /* @__PURE__ */ I(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ F(e), t && this.animation.pause();
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && kr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), P) : r(this);
	}
}, Rr = {
	anticipate: We,
	backInOut: Ue,
	circInOut: qe
};
function zr(e) {
	return e in Rr;
}
function Br(e) {
	typeof e.ease == "string" && zr(e.ease) && (e.ease = Rr[e.ease]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Vr = 10, Hr = class extends Lr {
	constructor(e) {
		Br(e), qn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Xn({
			...a,
			autoplay: !1
		}), s = Math.max(Vr, z.now() - this.startTime), c = ve(0, Vr, s - Vr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Er(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Ur = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (H.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Wr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Gr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Ur(i, t), s = Ur(a, t);
	return be(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Wr(e) || (n === "spring" || Fr(n)) && r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Kr(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var qr = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Jr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Yr(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Jr.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Xr = /* @__PURE__ */ new Set([
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
]), Zr = /*@__PURE__*/ Te(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Qr(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Zr() && n && (qr.has(n) || Xr.has(n) && Yr(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var $r = 40, ei = class extends Jn {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = z.now();
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
		}, f = l?.KeyframeResolver || wr;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = z.now();
		let u = !0;
		Gr(e, i, a, o) || (u = !1, (xe.instantAnimations || !s) && l?.(Gn(e, n, t)), e[0] = e[e.length - 1], Kr(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > $r ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Qr(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Hr({
				...d,
				element: p
			});
		} catch {
			m = new Xn(d);
		}
		else m = new Xn(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(P), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Cr()), this._animation;
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
}, ti = class {
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
		return ni(this.animations, "duration");
	}
	get iterationDuration() {
		return ni(this.animations, "iterationDuration");
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
function ni(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var ri = class extends ti {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function ii(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var ai = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oi(e) {
	let t = ai.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var si = 4;
function ci(e, t, n = 1) {
	N(n <= si, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = oi(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Se(e) ? parseFloat(e) : e;
	}
	return gt(i) ? ci(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var li = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, ui = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), di = {
	type: "keyframes",
	duration: .8
}, fi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, pi = (e, { keyframes: t }) => t.length > 2 ? di : dr.has(e) ? e.startsWith("scale") ? ui(t[1]) : li : fi;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function mi(e, t) {
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
function hi(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : mi(n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var gi = /* @__PURE__ */ new Set([
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
function _i(e) {
	for (let t in e) if (!gi.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var vi = (e, t, n, r = {}, i, a) => (o) => {
	let s = hi(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ F(c);
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
	_i(s) || Object.assign(u, pi(e, u)), u.duration &&= /* @__PURE__ */ F(u.duration), u.repeatDelay &&= /* @__PURE__ */ F(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Kr(u), u.delay === 0 && (d = !0)), (xe.instantAnimations || xe.skipAnimations || i?.shouldSkipAnimations) && (d = !0, Kr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Gn(u.keyframes, s);
		if (e !== void 0) {
			L.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Xn(u) : new ei(u);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function yi(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function bi(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = yi(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = yi(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function xi(e, t, n) {
	let r = e.getProps();
	return bi(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Si = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...ur
]), Ci = 30, wi = (e) => !isNaN(parseFloat(e)), Ti = { current: void 0 }, Ei = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = z.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = z.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = wi(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && Me(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new ke());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), L.read(() => {
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
		return Ti.current && Ti.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = z.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ci) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Ci);
		return Ae(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function Di(e, t) {
	return new Ei(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Oi = (e) => Array.isArray(e);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function ki(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Di(n));
}
function Ai(e) {
	return Oi(e) ? e[e.length - 1] || 0 : e;
}
function ji(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = xi(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) ki(e, t, Ai(i[t]));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var G = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Mi(e) {
	return !!(G(e) && e.add);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Ni(e, t) {
	let n = e.getValue("willChange");
	if (Mi(n)) return n.add(t);
	if (!n && xe.WillChange) {
		let n = new xe.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Pi(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Fi = "data-" + Pi("framerAppearId");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Ii(e) {
	return e.props[Fi];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Li({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Ri(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? mi(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Li(d, t)) continue;
		let o = {
			delay: n,
			...hi(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			L.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Ii(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, L);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Ni(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(vi(t, r, i, p && Si.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => L.update(() => {
			o && ji(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function zi(e, t, n = {}) {
	let r = xi(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Ri(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Bi(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Bi(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(zi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + ii(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Vi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => zi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = zi(e, t, n);
	else {
		let i = typeof t == "function" ? xi(e, t, n.custom) : t;
		r = Promise.all(Ri(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Hi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Ui = (e) => (t) => t.test(e), Wi = [
	yt,
	B,
	Ft,
	Pt,
	Lt,
	It,
	Hi
], Gi = (e) => Wi.find(Ui(e));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Ki(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || we(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var qi = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Ji(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Ct) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!qi.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Yi = /\b([a-z-]*)\(.*?\)/gu, Xi = {
	...H,
	getAnimatableNone: (e) => {
		let t = e.match(Yi);
		return t ? t.map(Ji).join(" ") : e;
	}
}, Zi = {
	...H,
	getAnimatableNone: (e) => {
		let t = H.parse(e);
		return H.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, Qi = {
	...yt,
	transform: Math.round
}, $i = {
	borderWidth: B,
	borderTopWidth: B,
	borderRightWidth: B,
	borderBottomWidth: B,
	borderLeftWidth: B,
	borderRadius: B,
	borderTopLeftRadius: B,
	borderTopRightRadius: B,
	borderBottomRightRadius: B,
	borderBottomLeftRadius: B,
	width: B,
	maxWidth: B,
	height: B,
	maxHeight: B,
	top: B,
	right: B,
	bottom: B,
	left: B,
	inset: B,
	insetBlock: B,
	insetBlockStart: B,
	insetBlockEnd: B,
	insetInline: B,
	insetInlineStart: B,
	insetInlineEnd: B,
	padding: B,
	paddingTop: B,
	paddingRight: B,
	paddingBottom: B,
	paddingLeft: B,
	paddingBlock: B,
	paddingBlockStart: B,
	paddingBlockEnd: B,
	paddingInline: B,
	paddingInlineStart: B,
	paddingInlineEnd: B,
	margin: B,
	marginTop: B,
	marginRight: B,
	marginBottom: B,
	marginLeft: B,
	marginBlock: B,
	marginBlockStart: B,
	marginBlockEnd: B,
	marginInline: B,
	marginInlineStart: B,
	marginInlineEnd: B,
	fontSize: B,
	backgroundPositionX: B,
	backgroundPositionY: B,
	rotate: Pt,
	rotateX: Pt,
	rotateY: Pt,
	rotateZ: Pt,
	scale: xt,
	scaleX: xt,
	scaleY: xt,
	scaleZ: xt,
	skew: Pt,
	skewX: Pt,
	skewY: Pt,
	distance: B,
	translateX: B,
	translateY: B,
	translateZ: B,
	x: B,
	y: B,
	z: B,
	perspective: B,
	transformPerspective: B,
	opacity: bt,
	originX: Rt,
	originY: Rt,
	originZ: B,
	zIndex: Qi,
	fillOpacity: bt,
	strokeOpacity: bt,
	numOctaves: Qi
}, ea = {
	...$i,
	color: V,
	backgroundColor: V,
	outlineColor: V,
	fill: V,
	stroke: V,
	borderColor: V,
	borderTopColor: V,
	borderRightColor: V,
	borderBottomColor: V,
	borderLeftColor: V,
	filter: Xi,
	WebkitFilter: Xi,
	mask: Zi,
	WebkitMask: Zi
}, ta = (e) => ea[e], na = /*@__PURE__*/ new Set([Xi, Zi]);
function ra(e, t) {
	let n = ta(e);
	return na.has(n) || (n = H), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var ia = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function aa(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !ia.has(t) && Jt(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = ra(n, i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var oa = class extends wr {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), gt(r))) {
				let i = ci(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Si.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Gi(r), o = Gi(i);
		if (vt(r) !== vt(i) && gr[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (fr(a) && fr(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else gr[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Ki(e[t])) && n.push(t);
		n.length && aa(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gr[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = gr[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function sa(e, t, n) {
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
var ca = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function la(e) {
	return Ce(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ua, cancel: da } = /* @__PURE__ */ st(queueMicrotask, !1), K = {
	x: !1,
	y: !1
};
function fa() {
	return K.x || K.y;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function pa(e) {
	return e === "x" || e === "y" ? K[e] ? null : (K[e] = !0, () => {
		K[e] = !1;
	}) : K.x || K.y ? null : (K.x = K.y = !0, () => {
		K.x = K.y = !1;
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function ma(e, t) {
	let n = sa(e), r = new AbortController();
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
function ha(e) {
	return !(e.pointerType === "touch" || fa());
}
function ga(e, t, n = {}) {
	let [r, i, a] = ma(e, n);
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
			if (!ha(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var _a = (e, t) => t ? e === t || _a(e, t.parentElement) : !1, va = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, ya = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function ba(e) {
	return ya.has(e.tagName) || e.isContentEditable === !0;
}
var xa = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Sa(e) {
	return xa.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var Ca = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function wa(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Ta(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Ea = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = wa(() => {
		if (Ca.has(n)) return;
		Ta(n, "down");
		let e = wa(() => {
			Ta(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Ta(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Da(e) {
	return va(e) && !fa();
}
var Oa = /* @__PURE__ */ new WeakSet();
function ka(e, t, n = {}) {
	let [r, i, a] = ma(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Da(e) || Oa.has(e)) return;
		Ca.add(r), n.stopPropagation && Oa.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), Ca.has(r) && Ca.delete(r), Da(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || _a(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), la(e) && (e.addEventListener("focus", (e) => Ea(e, i)), !ba(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Aa(e) {
	return Ce(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var ja = /* @__PURE__ */ new WeakMap(), Ma, Na = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Aa(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Pa = /*@__PURE__*/ Na("inline", "width", "offsetWidth"), Fa = /*@__PURE__*/ Na("block", "height", "offsetHeight");
function Ia({ target: e, borderBoxSize: t }) {
	ja.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Pa(e, t);
			},
			get height() {
				return Fa(e, t);
			}
		});
	});
}
function La(e) {
	e.forEach(Ia);
}
function Ra() {
	typeof ResizeObserver > "u" || (Ma = new ResizeObserver(La));
}
function za(e, t) {
	Ma || Ra();
	let n = sa(e);
	return n.forEach((e) => {
		let n = ja.get(e);
		n || (n = /* @__PURE__ */ new Set(), ja.set(e, n)), n.add(t), Ma?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = ja.get(e);
			n?.delete(t), n?.size || Ma?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Ba = /* @__PURE__ */ new Set(), Va;
function Ha() {
	Va = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Ba.forEach((t) => t(e));
	}, window.addEventListener("resize", Va);
}
function Ua(e) {
	return Ba.add(e), Va || Ha(), () => {
		Ba.delete(e), !Ba.size && typeof Va == "function" && (window.removeEventListener("resize", Va), Va = void 0);
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/index.mjs
function Wa(e, t) {
	return typeof e == "function" ? Ua(e) : za(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Ga(e) {
	return Aa(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/transform.mjs
function Ka(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = Rn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var qa = [
	...Wi,
	V,
	H
], Ja = (e) => qa.find(Ui(e)), Ya = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Xa = () => ({
	x: Ya(),
	y: Ya()
}), Za = () => ({
	min: 0,
	max: 0
}), q = () => ({
	x: Za(),
	y: Za()
}), Qa = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function $a(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function eo(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var to = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], no = ["initial", ...to];
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function ro(e) {
	return $a(e.animate) || no.some((t) => eo(e[t]));
}
function io(e) {
	return !!(ro(e) || e.variants);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function ao(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (G(i)) e.addValue(r, i);
		else if (G(a)) e.addValue(r, Di(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Di(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var oo = { current: null }, so = { current: !1 }, co = typeof window < "u";
function lo() {
	if (so.current = !0, co) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => oo.current = e.matches;
		e.addEventListener("change", t), t();
	} else oo.current = !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var uo = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], fo = {};
function po(e) {
	fo = e;
}
function mo() {
	return fo;
}
var ho = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = z.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, L.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = ro(t), this.isVariantNode = io(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && G(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, Qa.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (so.current || lo(), this.shouldReduceMotion = oo.current), process.env.NODE_ENV !== "production" && Me(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), ct(this.notifyUpdate), ct(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && qr.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Lr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ F(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = dr.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && L.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
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
		for (e in fo) {
			let t = fo[e];
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
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < uo.length; t++) {
			let n = uo[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = ao(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
		return n === void 0 && t !== void 0 && (n = Di(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Se(n) || we(n)) ? n = parseFloat(n) : !Ja(n) && H.test(t) && (n = ra(e, t)), this.setBaseTarget(e, G(n) ? n.get() : n)), G(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = bi(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !G(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new ke()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ua.render(this.render);
	}
}, go = class extends ho {
	constructor() {
		super(...arguments), this.KeyframeResolver = oa;
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
		G(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, _o = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function vo({ top: e, left: t, right: n, bottom: r }) {
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
function yo({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function bo(e, t) {
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
function xo(e) {
	return e === void 0 || e === 1;
}
function So({ scale: e, scaleX: t, scaleY: n }) {
	return !xo(e) || !xo(t) || !xo(n);
}
function Co(e) {
	return So(e) || wo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function wo(e) {
	return To(e.x) || To(e.y);
}
function To(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Eo(e, t, n) {
	return n + t * (e - n);
}
function Do(e, t, n, r, i) {
	return i !== void 0 && (e = Eo(e, i, r)), Eo(e, n, r) + t;
}
function Oo(e, t = 0, n = 1, r, i) {
	e.min = Do(e.min, t, n, r, i), e.max = Do(e.max, t, n, r, i);
}
function ko(e, { x: t, y: n }) {
	Oo(e.x, t.translate, t.scale, t.originPoint), Oo(e.y, n.translate, n.scale, n.originPoint);
}
var Ao = .999999999999, jo = 1.0000000000001;
function Mo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (No(e.x, -a.scroll.offset.x), No(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, ko(e, o)), r && Co(a.latestValues) && Io(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < jo && t.x > Ao && (t.x = 1), t.y < jo && t.y > Ao && (t.y = 1);
}
function No(e, t) {
	e.min += t, e.max += t;
}
function Po(e, t, n, r, i = .5) {
	Oo(e, t, n, U(e.min, e.max, i), r);
}
function Fo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function Io(e, t, n) {
	let r = n ?? e;
	Po(e.x, Fo(t.x, r.x), t.scaleX, t.scale, t.originX), Po(e.y, Fo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Lo(e, t) {
	return vo(bo(e.getBoundingClientRect(), t));
}
function Ro(e, t, n) {
	let r = Lo(e, n), { scroll: i } = t;
	return i && (No(r.x, i.offset.x), No(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var zo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Bo = ur.length;
function Vo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Bo; a++) {
		let o = ur[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ca(s, $i[o]);
			if (!c) {
				i = !1;
				let t = zo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Ho(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (dr.has(e)) {
			o = !0;
			continue;
		} else if (mt(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ca(n, $i[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Vo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Uo(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Wo(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Go = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (B.test(e)) e = parseFloat(e);
	else return e;
	return `${Wo(e, t.target.x)}% ${Wo(e, t.target.y)}%`;
} }, Ko = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = H.parse(e);
	if (i.length > 5) return r;
	let a = H.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = U(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, qo = {
	borderRadius: {
		...Go,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Go,
	borderTopRightRadius: Go,
	borderBottomLeftRadius: Go,
	borderBottomRightRadius: Go,
	boxShadow: Ko
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Jo(e, { layout: t, layoutId: n }) {
	return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!qo[e] || e === "opacity");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Yo(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (G(r[t]) || i && G(i[t]) || Jo(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Xo(e) {
	return window.getComputedStyle(e);
}
var Zo = class extends go {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Uo;
	}
	readValueFromInstance(e, t) {
		if (dr.has(t)) return this.projection?.isProjecting ? or(t) : cr(e, t);
		{
			let n = Xo(e), r = (mt(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Lo(e, t);
	}
	build(e, t, n) {
		Ho(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Yo(e, t, n);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function Qo(e, t) {
	return e in t;
}
var $o = class extends ho {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (Qo(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return q();
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
}, es = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, ts = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ns(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? es : ts;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var rs = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function is(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Ho(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of rs) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ns(d, i, a, o, !1);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var as = /* @__PURE__ */ new Set([
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
]), os = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function ss(e, t, n, r) {
	Uo(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(as.has(n) ? n : Pi(n), t.attrs[n]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function cs(e, t, n) {
	let r = Yo(e, t, n);
	for (let n in e) if (G(e[n]) || G(t[n])) {
		let t = ur.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var ls = class extends go {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = q;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (dr.has(t)) {
			let e = ta(t);
			return e && e.default || 0;
		}
		return t = as.has(t) ? t : Pi(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return cs(e, t, n);
	}
	build(e, t, n) {
		is(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		ss(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = os(e.tagName), super.mount(e);
	}
}, us = no.length;
function ds(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && ds(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < us; n++) {
		let r = no[n], i = e.props[r];
		(eo(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function fs(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var ps = [...to].reverse(), ms = to.length;
function hs(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Vi(e, t, n)));
}
function gs(e) {
	let t = hs(e), n = ys(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = xi(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
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
		let { props: s } = e, c = ds(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < ms; t++) {
			let p = ps[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = eo(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || $a(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = _s(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Oi(t) && Oi(n) ? !fs(t, n) : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let ee = v && y;
			b && (!ee || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !ee && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = xi(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = ii(r.enteringChildren, e, t);
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
				let n = xi(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
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
			n = ys(), i = !0;
		}
	};
}
function _s(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !fs(t, e) : !1;
}
function vs(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function ys() {
	return {
		animate: vs(!0),
		whileInView: vs(),
		whileHover: vs(),
		whileTap: vs(),
		whileDrag: vs(),
		whileFocus: vs(),
		exit: vs()
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function bs(e, t) {
	e.min = t.min, e.max = t.max;
}
function J(e, t) {
	bs(e.x, t.x), bs(e.y, t.y);
}
function xs(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var Ss = .9999, Cs = 1.0001, ws = -.01, Ts = .01;
function Y(e) {
	return e.max - e.min;
}
function Es(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Ds(e, t, n, r = .5) {
	e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = Y(n) / Y(t), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Ss && e.scale <= Cs || isNaN(e.scale)) && (e.scale = 1), (e.translate >= ws && e.translate <= Ts || isNaN(e.translate)) && (e.translate = 0);
}
function Os(e, t, n, r) {
	Ds(e.x, t.x, n.x, r ? r.originX : void 0), Ds(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ks(e, t, n, r = 0) {
	e.min = (r ? U(n.min, n.max, r) : n.min) + t.min, e.max = e.min + Y(t);
}
function As(e, t, n, r) {
	ks(e.x, t.x, n.x, r?.x), ks(e.y, t.y, n.y, r?.y);
}
function js(e, t, n, r = 0) {
	let i = r ? U(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + Y(t);
}
function Ms(e, t, n, r) {
	js(e.x, t.x, n.x, r?.x), js(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Ns(e, t, n, r, i) {
	return e -= t, e = Eo(e, 1 / n, r), i !== void 0 && (e = Eo(e, 1 / i, r)), e;
}
function Ps(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (Ft.test(t) && (t = parseFloat(t), t = U(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = U(a.min, a.max, r);
	e === a && (s -= t), e.min = Ns(e.min, t, n, s, i), e.max = Ns(e.max, t, n, s, i);
}
function Fs(e, t, [n, r, i], a, o) {
	Ps(e, t[n], t[r], t[i], t.scale, a, o);
}
var Is = [
	"x",
	"scaleX",
	"originX"
], Ls = [
	"y",
	"scaleY",
	"originY"
];
function Rs(e, t, n, r) {
	Fs(e.x, t, Is, n ? n.x : void 0, r ? r.x : void 0), Fs(e.y, t, Ls, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function zs(e) {
	return e.translate === 0 && e.scale === 1;
}
function Bs(e) {
	return zs(e.x) && zs(e.y);
}
function Vs(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Hs(e, t) {
	return Vs(e.x, t.x) && Vs(e.y, t.y);
}
function Us(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ws(e, t) {
	return Us(e.x, t.x) && Us(e.y, t.y);
}
function Gs(e) {
	return Y(e.x) / Y(e.y);
}
function Ks(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function qs(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function Js(e, t, n) {
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
var Ys = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], Xs = Ys.length, Zs = (e) => typeof e == "string" ? parseFloat(e) : e, Qs = (e) => typeof e == "number" || B.test(e);
function $s(e, t, n, r, i, a) {
	i ? (e.opacity = U(0, n.opacity ?? 1, tc(r)), e.opacityExit = U(t.opacity ?? 1, 0, nc(r))) : a && (e.opacity = U(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Xs; i++) {
		let a = Ys[i], o = ec(t, a), s = ec(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || Qs(o) === Qs(s) ? (e[a] = Math.max(U(Zs(o), Zs(s), r), 0), (Ft.test(s) || Ft.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r));
}
function ec(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var tc = /*@__PURE__*/ rc(0, .5, Ke), nc = /*@__PURE__*/ rc(.5, .95, P);
function rc(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Oe(e, t, r));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function ic(e, t, n) {
	let r = G(e) ? e : Di(e);
	return r.start(vi("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function ac(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var oc = (e, t) => e.depth - t.depth, sc = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		ge(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		_e(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(oc), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/delay.mjs
function cc(e, t) {
	let n = z.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (ct(r), e(a - t));
	};
	return L.setup(r, !0), () => ct(r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function lc(e) {
	return G(e) ? e.get() : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var uc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		ge(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (_e(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (_e(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
}, dc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, fc = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, pc = [
	"",
	"X",
	"Y",
	"Z"
], mc = 1e3, hc = 0;
function gc(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _c(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Ii(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", L, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && _c(r);
}
function vc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = hc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, it.value && (fc.nodes = fc.calculatedTargetDeltas = fc.calculatedProjections = 0), this.nodes.forEach(xc), this.nodes.forEach(Ac), this.nodes.forEach(jc), this.nodes.forEach(Sc), it.addProjectionMetrics && it.addProjectionMetrics(fc);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new sc());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ke()), this.eventHandlers.get(e).add(t);
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
			this.isSVG = Aa(t) && !Ga(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				L.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = cc(i, 250), dc.hasAnimatedSinceResize && (dc.hasAnimatedSinceResize = !1, this.nodes.forEach(kc)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Rc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !Ws(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...hi(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || kc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ct(this.updateProjection);
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
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Mc), this.animationId++);
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
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _c(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Tc), this.nodes.forEach(wc);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Ec);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Dc), this.nodes.forEach(Oc), this.nodes.forEach(yc), this.nodes.forEach(bc)) : this.nodes.forEach(Ec), this.clearAllSnapshots();
			let e = z.now();
			R.delta = ve(0, 1e3 / 60, e - R.timestamp), R.timestamp = e, R.isProcessing = !0, lt.update.process(R), lt.preRender.process(R), lt.render.process(R), R.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, ua.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Cc), this.sharedNodes.forEach(Nc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, L.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			L.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Y(this.snapshot.measuredBox.x) && !Y(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= q(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Bs(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Co(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Hc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return q();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Wc))) {
				let { scroll: e } = this.root;
				e && (No(t.x, e.offset.x), No(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = q();
			if (J(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && J(t, e), No(t.x, i.offset.x), No(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || q();
			J(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (No(r.x, -n.scroll.offset.x), No(r.y, -n.scroll.offset.y)), Co(n.latestValues) && Io(r, n.latestValues, n.layout?.layoutBox);
			}
			return Co(this.latestValues) && Io(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = q();
			J(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Co(n.latestValues)) continue;
				let r;
				n.instance && (So(n.latestValues) && n.updateSnapshot(), r = q(), J(r, n.measurePageBox())), Rs(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Co(this.latestValues) && Rs(t, this.latestValues), t;
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
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== R.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = R.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = q(), this.targetWithTransforms = q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), As(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : J(this.target, this.layout.layoutBox), ko(this.target, this.targetDelta)) : J(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), it.value && fc.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || So(this.parent.latestValues) || wo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = q(), this.relativeTargetOrigin = q(), Ms(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), J(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === R.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			J(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Mo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = q());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xs(this.prevProjectionDelta.x, this.projectionDelta.x), xs(this.prevProjectionDelta.y, this.projectionDelta.y)), Os(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !Ks(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ks(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), it.value && fc.calculatedProjections++;
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
			this.prevProjectionDelta = Xa(), this.projectionDelta = Xa(), this.projectionDeltaWithTransform = Xa();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Xa();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = q(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Lc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Pc(a.x, e.x, n), Pc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ms(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Ic(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Hs(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= q(), J(d, this.relativeTarget)), s && (this.animationValues = i, $s(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (ct(this.pendingAnimation), void 0), this.pendingAnimation = L.update(() => {
				dc.hasAnimatedSinceResize = !0, ft.layout++, this.motionValue ||= Di(0), this.motionValue.jump(0, !1), this.currentAnimation = ic(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						ft.layout--;
					},
					onComplete: () => {
						ft.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
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
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(mc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Uc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || q();
					let t = Y(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Y(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				J(t, n), Io(t, i), Os(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new uc()), this.sharedNodes.get(e).add(t);
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
			n.z && gc("z", e, r, this.animationValues);
			for (let t = 0; t < pc.length; t++) gc(`rotate${pc[t]}`, e, r, this.animationValues), gc(`skew${pc[t]}`, e, r, this.animationValues);
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
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = lc(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = lc(t?.pointerEvents) || ""), this.hasProjected && !Co(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = Js(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in qo) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = qo[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? lc(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(wc), this.root.sharedNodes.clear();
		}
	};
}
function yc(e) {
	e.updateLayout();
}
function bc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") qs((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Y(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			bs(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else Uc(i, t.layoutBox, n) && qs((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Y(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Xa();
		Os(o, n, t.layoutBox);
		let s = Xa();
		a ? Os(s, e.applyTransform(r, !0), t.measuredBox) : Os(s, n, t.layoutBox);
		let c = !Bs(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = q();
					Ms(s, t.layoutBox, i.layoutBox, o);
					let c = q();
					Ms(c, n, a.layoutBox, o), Ws(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
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
function xc(e) {
	it.value && fc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Sc(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Cc(e) {
	e.clearSnapshot();
}
function wc(e) {
	e.clearMeasurements();
}
function Tc(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Ec(e) {
	e.isLayoutDirty = !1;
}
function Dc(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Oc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function kc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Ac(e) {
	e.resolveTargetDelta();
}
function jc(e) {
	e.calcProjection();
}
function Mc(e) {
	e.resetSkewAndRotation();
}
function Nc(e) {
	e.removeLeadSnapshot();
}
function Pc(e, t, n) {
	e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Fc(e, t, n, r) {
	e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r);
}
function Ic(e, t, n, r) {
	Fc(e.x, t.x, n.x, r), Fc(e.y, t.y, n.y, r);
}
function Lc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Rc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, zc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Bc = zc("applewebkit/") && !zc("chrome/") ? Math.round : P;
function Vc(e) {
	e.min = Bc(e.min), e.max = Bc(e.max);
}
function Hc(e) {
	Vc(e.x), Vc(e.y);
}
function Uc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Es(Gs(t), Gs(n), .2);
}
function Wc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var Gc = vc({
	attachResizeListener: (e, t) => ac(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), Kc = { current: void 0 }, qc = vc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Kc.current) {
			let e = new Gc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Kc.current = e;
		}
		return Kc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Jc = _({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function Yc(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Xc(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Yc(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Yc(e[t], null);
			}
		};
	};
}
function Zc(...e) {
	return f.useCallback(Xc(...e), e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var Qc = class extends f.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (la(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = la(e) && e.offsetWidth || 0, r = la(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function $c({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = T(), s = O(null), c = O({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: l } = C(Jc), u = Zc(s, e.props?.ref ?? e?.ref);
	return E(() => {
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
	}, [t]), j(Qc, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : f.cloneElement(e, { ref: u })
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var el = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = pe(tl), d = T(), p = !0, m = D(() => (p = !1, {
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
	return a && p && (m = { ...m }), D(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), f.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = j($c, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), j(he.Provider, {
		value: m,
		children: e
	});
};
function tl() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function nl(e = !0) {
	let t = C(he);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = T();
	w(() => {
		if (e) return i(a);
	}, [e]);
	let o = S(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var rl = (e) => e.key || "";
function il(e) {
	let t = [];
	return p.forEach(e, (e) => {
		b(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var al = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, d] = nl(o), f = D(() => il(e), [e]), p = o && !u ? [] : f.map(rl), m = O(!0), h = O(f), g = pe(() => /* @__PURE__ */ new Map()), _ = O(/* @__PURE__ */ new Set()), [v, y] = k(f), [b, x] = k(f);
	me(() => {
		m.current = !1, h.current = f;
		for (let e = 0; e < b.length; e++) {
			let t = rl(b[e]);
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
			let n = b[t], r = rl(n);
			p.includes(r) || (e.splice(t, 0, n), S.push(n));
		}
		return a === "wait" && S.length && (e = S), x(il(e)), y(f), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && b.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: w } = C(fe);
	return j(A, { children: b.map((e) => {
		let v = rl(e), y = o && !u ? !1 : f === b || p.includes(v);
		return j(el, {
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
				}), e && (w?.(), x(h.current), o && d?.(), r && r());
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, v);
	}) });
}, ol = _({ strict: !1 }), sl = {
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
}, cl = !1;
function ll() {
	if (cl) return;
	let e = {};
	for (let t in sl) e[t] = { isEnabled: (e) => sl[t].some((t) => !!e[t]) };
	po(e), cl = !0;
}
function ul() {
	return ll(), mo();
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function dl(e) {
	let t = ul();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	po(t);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var fl = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function pl(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || fl.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var ml = /* @__PURE__ */ le({ default: () => hl }), hl, gl = ce((() => {
	throw hl = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), _l = (e) => !pl(e);
function vl(e) {
	typeof e == "function" && (_l = (t) => t.startsWith("on") ? !pl(t) : e(t));
}
try {
	vl((gl(), de(ml)).default);
} catch {}
function yl(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || G(e[i]) || (_l(i) || n === !0 && pl(i) || !t && !pl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var bl = /* @__PURE__ */ _({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function xl(e, t) {
	if (ro(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || eo(t) ? t : void 0,
			animate: eo(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Sl(e) {
	let { initial: t, animate: n } = xl(e, C(bl));
	return D(() => ({
		initial: t,
		animate: n
	}), [Cl(t), Cl(n)]);
}
function Cl(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var wl = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function Tl(e, t, n) {
	for (let r in t) !G(t[r]) && !Jo(r, n) && (e[r] = t[r]);
}
function El({ transformTemplate: e }, t) {
	return D(() => {
		let n = wl();
		return Ho(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Dl(e, t) {
	let n = e.style || {}, r = {};
	return Tl(r, n, e), Object.assign(r, El(e, t)), r;
}
function Ol(e, t) {
	let n = {}, r = Dl(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var kl = () => ({
	...wl(),
	attrs: {}
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Al(e, t, n, r) {
	let i = D(() => {
		let n = kl();
		return is(n, t, os(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Tl(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var jl = [
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
function Ml(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(jl.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Nl(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? Ml(e) ? Al : Ol)(t, r, i, e), c = yl(t, typeof e == "string", a), l = e === h ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = D(() => G(u) ? u.get() : u, [u]);
	return v(e, {
		...l,
		children: d
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Pl({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Fl(n, r, i, e),
		renderState: t()
	};
}
function Fl(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = lc(a[e]);
	let { initial: o, animate: s } = e, c = ro(e), l = io(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !$a(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = bi(e, t[n]);
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
var Il = (e) => (t, n) => {
	let r = C(bl), i = C(he), a = () => Pl(e, t, r, i);
	return n ? a() : pe(a);
}, Ll = /*@__PURE__*/ Il({
	scrapeMotionValuesFromProps: Yo,
	createRenderState: wl
}), Rl = /*@__PURE__*/ Il({
	scrapeMotionValuesFromProps: cs,
	createRenderState: kl
}), zl = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Bl(e, t, n) {
	let r = O(n);
	E(() => {
		r.current = n;
	});
	let i = O(null);
	return S((n) => {
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
var Vl = _({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function Hl(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Ul(e, t, n, r, i, a) {
	let { visualElement: o } = C(bl), s = C(ol), c = C(he), l = C(Jc), u = l.reducedMotion, d = l.skipAnimations, f = O(null), p = O(!1);
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
	let m = f.current, h = C(Vl);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && Wl(f.current, n, i, h);
	let g = O(!1);
	E(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[Fi], v = O(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return me(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), w(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function Wl(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Gl(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && Hl(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function Gl(e) {
	if (e) return e.options.allowProjection === !1 ? Gl(e.parent) : e.projection;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/index.mjs
function Kl(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && dl(r);
	let a = n ? n === "svg" : Ml(e), o = a ? Rl : Ll;
	function s(n, s) {
		let c, l = {
			...C(Jc),
			...n,
			layoutId: ql(n)
		}, { isStatic: u } = l, d = Sl(n), f = o(n, u);
		if (!u && typeof window < "u") {
			Jl(l, r);
			let t = Yl(l);
			c = t.MeasureLayout, d.visualElement = Ul(e, f, l, i, t.ProjectionNode, a);
		}
		return M(bl.Provider, {
			value: d,
			children: [c && d.visualElement ? j(c, {
				visualElement: d.visualElement,
				...l
			}) : null, Nl(e, n, Bl(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = y(s);
	return c[zl] = e, c;
}
function ql({ layoutId: e }) {
	let t = C(fe).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Jl(e, t) {
	let n = C(ol).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? be(!1, t, "lazy-strict-mode") : N(!1, t, "lazy-strict-mode");
	}
}
function Yl(e) {
	let { drag: t, layout: n } = ul();
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
function Xl(e, t) {
	if (typeof Proxy > "u") return Kl;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Kl(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && Me(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Kl(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var Zl = (e, t) => t.isSVG ?? Ml(e) ? new ls(t) : new Zo(t, { allowProjection: e !== h }), Ql = class extends _o {
	constructor(e) {
		super(e), e.animationState ||= gs(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		$a(e) && (this.unmountControls = e.subscribe(this.node));
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
}, $l = 0, eu = {
	animation: { Feature: Ql },
	exit: { Feature: class extends _o {
		constructor() {
			super(...arguments), this.id = $l++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string") {
						let n = xi(this.node, e, t);
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
function tu(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var nu = (e) => (t) => va(t) && e(t, tu(t));
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function ru(e, t, n, r) {
	return ac(e, t, nu(n), r);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var iu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, au = (e, t) => Math.abs(e - t);
function ou(e, t) {
	let n = au(e.x, t.x), r = au(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var su = /*#__PURE__*/ new Set(["auto", "scroll"]), cu = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = lu(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = du(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = ou(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = R;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = lu(t, this.transformPagePoint), L.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = du(e.type === "pointercancel" ? this.lastMoveEventInfo : lu(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !va(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = lu(tu(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = R;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, du(s, this.history)), this.removeListeners = De(ru(this.contextWindow, "pointermove", this.handlePointerMove), ru(this.contextWindow, "pointerup", this.handlePointerUp), ru(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(su.has(e.overflowX) || su.has(e.overflowY)) && this.scrollPositions.set(t, {
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
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), L.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ct(this.updatePoint);
	}
};
function lu(e, t) {
	return t ? { point: t(e.point) } : e;
}
function uu(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function du({ point: e }, t) {
	return {
		point: e,
		delta: uu(e, pu(t)),
		offset: uu(e, fu(t)),
		velocity: mu(t, .1)
	};
}
function fu(e) {
	return e[0];
}
function pu(e) {
	return e[e.length - 1];
}
function mu(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = pu(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ F(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ F(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ I(i.timestamp - r.timestamp);
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
function hu(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e;
}
function gu(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function _u(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: gu(e.x, n, i),
		y: gu(e.y, t, r)
	};
}
function vu(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function yu(e, t) {
	return {
		x: vu(e.x, t.x),
		y: vu(e.y, t.y)
	};
}
function bu(e, t) {
	let n = .5, r = Y(e), i = Y(t);
	return i > r ? n = /* @__PURE__ */ Oe(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Oe(e.min, e.max - i, t.min)), ve(0, 1, n);
}
function xu(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Su = .35;
function Cu(e = Su) {
	return e === !1 ? e = 0 : e === !0 && (e = Su), {
		x: wu(e, "left", "right"),
		y: wu(e, "top", "bottom")
	};
}
function wu(e, t, n) {
	return {
		min: Tu(e, t),
		max: Tu(e, n)
	};
}
function Tu(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Eu = /* @__PURE__ */ new WeakMap(), Du = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = q(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(tu(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = pa(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), qs((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (Ft.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Y(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && L.update(() => i(e, t), !1, !0), Ni(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = ju(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && L.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new cu(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: iu(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && L.postRender(() => o(n, r));
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
		if (!n || !Au(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = hu(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && Hl(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = _u(n.layoutBox, e) : this.constraints = !1, this.elastic = Cu(t), r !== this.constraints && !Hl(e) && n && this.constraints && !this.hasMutatedConstraints && qs((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = xu(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !Hl(e)) return !1;
		let n = e.current;
		N(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Ro(n, r.root, this.visualElement.getTransformPagePoint()), a = yu(r.layout.layoutBox, i);
		if (t) {
			let e = t(yo(a));
			this.hasMutatedConstraints = !!e, e && (a = vo(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = qs((o) => {
			if (!Au(o, t, this.currentDirection)) return;
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
		return Ni(this.visualElement, e), n.start(vi(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		qs((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		qs((t) => {
			let { drag: n } = this.getProps();
			if (!Au(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - U(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!Hl(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		qs((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = bu({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), qs((t) => {
			if (!Au(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(U(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Eu.set(this.visualElement, this);
		let e = this.visualElement.current, t = ru(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Sa(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			Hl(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= ku(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), L.read(r);
		let o = ac(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (qs((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Su, dragMomentum: o = !0 } = e;
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
function Ou(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function ku(e, t, n) {
	let r = Wa(e, Ou(n)), i = Wa(t, Ou(n));
	return () => {
		r(), i();
	};
}
function Au(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function ju(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Mu = class extends _o {
	constructor(e) {
		super(e), this.removeGroupControls = P, this.removeListeners = P, this.controls = new Du(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || P;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Nu = (e) => (t, n) => {
	e && L.update(() => e(t, n), !1, !0);
}, Pu = class extends _o {
	constructor() {
		super(...arguments), this.removePointerDownListener = P;
	}
	onPointerDown(e) {
		this.session = new cu(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: iu(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Nu(e),
			onStart: Nu(t),
			onMove: Nu(n),
			onEnd: (e, t) => {
				delete this.session, r && L.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = ru(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Fu = !1, Iu = class extends m {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), Fu && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), dc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), Fu = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || L.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), ua.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		Fu = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Lu(e) {
	let [t, n] = nl(), r = C(fe);
	return j(Iu, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: C(Vl),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var Ru = {
	pan: { Feature: Pu },
	drag: {
		Feature: Mu,
		ProjectionNode: qc,
		MeasureLayout: Lu
	}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/hover.mjs
function zu(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && L.postRender(() => i(t, tu(t)));
}
var Bu = class extends _o {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = ga(e, (e, t) => (zu(this.node, t, "Start"), (e) => zu(this.node, e, "End"))));
	}
	unmount() {}
}, Vu = class extends _o {
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
		this.unmount = De(ac(this.node.current, "focus", () => this.onFocus()), ac(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/gestures/press.mjs
function Hu(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && L.postRender(() => i(t, tu(t)));
}
var Uu = class extends _o {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = ka(e, (e, t) => (Hu(this.node, t, "Start"), (e, { success: t }) => Hu(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, Wu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), Ku = (e) => {
	let t = Wu.get(e.target);
	t && t(e);
}, qu = (e) => {
	e.forEach(Ku);
};
function Ju({ root: e, ...t }) {
	let n = e || document;
	Gu.has(n) || Gu.set(n, {});
	let r = Gu.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(qu, {
		root: e,
		...t
	})), r[i];
}
function Yu(e, t, n) {
	let r = Ju(t);
	return Wu.set(e, n), r.observe(e), () => {
		Wu.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var Xu = {
	some: 0,
	all: 1
}, Zu = class extends _o {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : Xu[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = Yu(this.node.current, a, o);
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
		].some(Qu(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function Qu({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var $u = {
	inView: { Feature: Zu },
	tap: { Feature: Uu },
	focus: { Feature: Vu },
	hover: { Feature: Bu }
}, ed = { layout: {
	ProjectionNode: qc,
	MeasureLayout: Lu
} }, td = /*@__PURE__*/ Xl({
	...eu,
	...$u,
	...Ru,
	...ed
}, Zl);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function nd(e) {
	let t = pe(() => Di(e)), { isStatic: n } = C(Jc);
	if (n) {
		let [, n] = k(e);
		w(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function rd(e, t) {
	let n = nd(t()), r = () => n.set(t());
	return r(), me(() => {
		let t = () => L.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), ct(r);
		};
	}), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-computed.mjs
function id(e) {
	Ti.current = [], e();
	let t = rd(Ti.current, e);
	return Ti.current = void 0, t;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/value/use-transform.mjs
function ad(e, t, n, r) {
	if (typeof e == "function") return id(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return sd(e, t, n, r);
	let i = typeof t == "function" ? t : Ka(t, n, r), a = Array.isArray(e) ? od(e, i) : od([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function od(e, t) {
	let n = pe(() => []);
	return rd(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function sd(e, t, n, r) {
	let i = pe(() => Object.keys(n)), a = pe(() => ({}));
	for (let o of i) a[o] = ad(e, t, n[o], r);
	return a;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function cd(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function ld(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && cd(t) ? sa(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function ud(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function dd(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function fd(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (_e(e, i), r--);
	}
}
function pd(e, t, n, r, i, a) {
	fd(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: U(i, a, r[o]),
		easing: Qe(n, o)
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function md(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function hd(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var gd = "easeInOut", _d = 20;
function vd(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, dd(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = dd(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = xd(e), { delay: l = 0, times: u = Bn(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Fr(p) ? p : i?.[p || "keyframes"];
			if (S <= 2 && C) {
				let e = 100;
				if (S === 2 && wd(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				b !== void 0 && (n.duration = /* @__PURE__ */ F(b));
				let r = Cn(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let w = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let T = u.length - c.length;
			if (T > 0 && zn(u, T), c.length === 1 && c.unshift(null), m) {
				N(m < _d, "Repeat count too high, must be less than 20", "repeat-count-high"), b = ud(b, m);
				let e = [...c], t = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let n = [...y];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), y.push(i === 0 ? "linear" : Qe(n, i - 1));
				}
				md(u, m);
			}
			let E = w + b;
			pd(r, c, y, u, w, E), g = Math.max(x + b, g), f = Math.max(E, f);
		};
		if (G(p)) {
			let e = yd(p, s);
			_(m, h, bd("default", e));
		} else {
			let e = ld(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = yd(r, s);
				for (let e in m) _(m[e], Sd(h, e), bd(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(hd);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ Oe(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(gd)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
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
function yd(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function bd(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function xd(e) {
	return Array.isArray(e) ? e : [e];
}
function Sd(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var Cd = (e) => typeof e == "number", wd = (e) => e.every(Cd);
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Td(e) {
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
	}, n = Aa(e) && !Ga(e) ? new ls(t) : new Zo(t);
	n.mount(e), Qa.set(e, n);
}
function Ed(e) {
	let t = new $o({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), Qa.set(e, t);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Dd(e, t) {
	return G(e) || typeof e == "number" || typeof e == "string" && !cd(t);
}
function Od(e, t, n, r) {
	let i = [];
	if (Dd(e, t)) i.push(ic(e, cd(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = ld(e, t, r), o = a.length;
		N(!!o, "No valid elements provided.", "no-valid-elements");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Td : Ed;
			Qa.has(r) || s(r);
			let c = Qa.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Ri(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function kd(e, t, n) {
	let r = [];
	return vd(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = Di(0);
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
	}), t, n, { spring: Nn }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...Od(n, e, t));
	}), r;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/animation/animate/index.mjs
function Ad(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function jd(e = {}) {
	let { scope: t, reduceMotion: n } = e;
	function r(e, r, i) {
		let a = [], o;
		if (Ad(e)) {
			let { onComplete: i, ...s } = r || {};
			typeof i == "function" && (o = i), a = kd(e, n === void 0 ? s : {
				reduceMotion: n,
				...s
			}, t);
		} else {
			let { onComplete: s, ...c } = i || {};
			typeof s == "function" && (o = s), a = Od(e, r, n === void 0 ? c : {
				reduceMotion: n,
				...c
			}, t);
		}
		let s = new ri(a);
		return o && s.finished.then(o), t && (t.animations.push(s), s.finished.then(() => {
			_e(t.animations, s);
		})), s;
	}
	return r;
}
var Md = jd(), Nd = class {
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
}, Pd = () => new Nd();
function Fd() {
	return pe(Pd);
}
//#endregion
//#region src/config/themes.config.ts
var Id = {
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
function Ld() {
	let e = t((e) => e.osTheme), n = t((e) => e.resolvedColorScheme), r = t((e) => e.glassEnabled), i = Id[e];
	return {
		osTheme: e,
		colorScheme: n,
		glassEnabled: r,
		config: i,
		isGlass: i.hasLiquidGlass && r,
		isFloating: i.hasFloatingWindows,
		isMobile: e === "iphone" || e === "android"
	};
}
var Rd = r("battery", [["path", {
	d: "M 22 14 L 22 10",
	key: "nqc4tb"
}], ["rect", {
	x: "2",
	y: "6",
	width: "16",
	height: "12",
	rx: "2",
	key: "13zb55"
}]]), zd = r("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Bd = r("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), Vd = r("menu", [
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
]), Hd = r("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), Ud = r("sliders-vertical", [
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
]), Wd = r("wifi", [
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
function Gd() {
	let [e, n] = k(""), [r, i] = k(""), a = t((e) => e.wallpaperTextTheme) === "light" ? "text-black/80" : "text-white/85";
	return w(() => {
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
		className: `flex items-center gap-1.5 text-[12px] font-medium ${a} select-none tabular-nums`,
		children: [/* @__PURE__ */ j("span", { children: r }), /* @__PURE__ */ j("span", { children: e })]
	});
}
typeof window < "u" && window.document && window.document.createElement;
function Kd(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function qd(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Jd(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = qd(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : qd(e[t], null);
			}
		};
	};
}
function Yd(...e) {
	return f.useCallback(Jd(...e), e);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-context/dist/index.mjs
function Xd(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = f.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = f.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ j(s.Provider, {
				value: c,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, c = f.useContext(s);
			if (c) return c;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => f.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return f.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, Zd(i, ...t)];
}
function Zd(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return f.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function Qd(e) {
	let t = /* @__PURE__ */ $d(e), n = f.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = f.Children.toArray(r), o = a.find(nf);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? f.Children.count(e) > 1 ? f.Children.only(null) : f.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ j(t, {
				...i,
				ref: n,
				children: f.isValidElement(e) ? f.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ j(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function $d(e) {
	let t = f.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (f.isValidElement(n)) {
			let e = af(n), i = rf(r, n.props);
			return n.type !== f.Fragment && (i.ref = t ? Jd(t, e) : e), f.cloneElement(n, i);
		}
		return f.Children.count(n) > 1 ? f.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var ef = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function tf(e) {
	let t = ({ children: e }) => /* @__PURE__ */ j(A, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = ef, t;
}
function nf(e) {
	return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ef;
}
function rf(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function af(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs
var of = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ Qd(`Primitive.${t}`), r = f.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ j(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function sf(e, t) {
	e && te.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function cf(e) {
	let t = f.useRef(e);
	return f.useEffect(() => {
		t.current = e;
	}), f.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function lf(e, t = globalThis?.document) {
	let n = cf(e);
	f.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14___3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var uf = "DismissableLayer", df = "dismissableLayer.update", ff = "dismissableLayer.pointerDownOutside", pf = "dismissableLayer.focusOutside", mf, hf = f.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), gf = f.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, onDismiss: s, ...c } = e, l = f.useContext(hf), [u, d] = f.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, m] = f.useState({}), h = Yd(t, (e) => d(e)), g = Array.from(l.layers), [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = u ? g.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = yf((e) => {
		let t = e.target, n = [...l.branches].some((e) => e.contains(t));
		!x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
	}, p), C = bf((e) => {
		let t = e.target;
		[...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
	}, p);
	return lf((e) => {
		y === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
	}, p), f.useEffect(() => {
		if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (mf = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), xf(), () => {
			n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = mf);
		};
	}, [
		u,
		p,
		n,
		l
	]), f.useEffect(() => () => {
		u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), xf());
	}, [u, l]), f.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(df, e), () => document.removeEventListener(df, e);
	}, []), /* @__PURE__ */ j(of.div, {
		...c,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: Kd(e.onFocusCapture, C.onFocusCapture),
		onBlurCapture: Kd(e.onBlurCapture, C.onBlurCapture),
		onPointerDownCapture: Kd(e.onPointerDownCapture, S.onPointerDownCapture)
	});
});
gf.displayName = uf;
var _f = "DismissableLayerBranch", vf = f.forwardRef((e, t) => {
	let n = f.useContext(hf), r = f.useRef(null), i = Yd(t, r);
	return f.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ j(of.div, {
		...e,
		ref: i
	});
});
vf.displayName = _f;
function yf(e, t = globalThis?.document) {
	let n = cf(e), r = f.useRef(!1), i = f.useRef(() => {});
	return f.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					Sf(ff, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function bf(e, t = globalThis?.document) {
	let n = cf(e), r = f.useRef(!1);
	return f.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && Sf(pf, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function xf() {
	let e = new CustomEvent(df);
	document.dispatchEvent(e);
}
function Sf(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? sf(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Cf = 0;
function wf() {
	f.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Tf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Tf()), Cf++, () => {
			Cf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Cf--;
		};
	}, []);
}
function Tf() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Ef = "focusScope.autoFocusOnMount", Df = "focusScope.autoFocusOnUnmount", Of = {
	bubbles: !1,
	cancelable: !0
}, kf = "FocusScope", Af = f.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = f.useState(null), l = cf(i), u = cf(a), d = f.useRef(null), p = Yd(t, (e) => c(e)), m = f.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	f.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (m.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : Lf(d.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || Lf(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Lf(s);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		m.paused
	]), f.useEffect(() => {
		if (s) {
			Rf.add(m);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(Ef, Of);
				s.addEventListener(Ef, l), s.dispatchEvent(t), t.defaultPrevented || (jf(Vf(Nf(s)), { select: !0 }), document.activeElement === e && Lf(s));
			}
			return () => {
				s.removeEventListener(Ef, l), setTimeout(() => {
					let t = new CustomEvent(Df, Of);
					s.addEventListener(Df, u), s.dispatchEvent(t), t.defaultPrevented || Lf(e ?? document.body, { select: !0 }), s.removeEventListener(Df, u), Rf.remove(m);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		m
	]);
	let h = f.useCallback((e) => {
		if (!n && !r || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Mf(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Lf(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Lf(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		m.paused
	]);
	return /* @__PURE__ */ j(of.div, {
		tabIndex: -1,
		...o,
		ref: p,
		onKeyDown: h
	});
});
Af.displayName = kf;
function jf(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Lf(r, { select: t }), document.activeElement !== n) return;
}
function Mf(e) {
	let t = Nf(e);
	return [Pf(t, e), Pf(t.reverse(), e)];
}
function Nf(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Pf(e, t) {
	for (let n of e) if (!Ff(n, { upTo: t })) return n;
}
function Ff(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function If(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Lf(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && If(e) && t && e.select();
	}
}
var Rf = zf();
function zf() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Bf(e, t), e.unshift(t);
		},
		remove(t) {
			e = Bf(e, t), e[0]?.resume();
		}
	};
}
function Bf(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Vf(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Hf = globalThis?.document ? f.useLayoutEffect : () => {}, Uf = f.useId || (() => void 0), Wf = 0;
function Gf(e) {
	let [t, n] = f.useState(Uf());
	return Hf(() => {
		e || n((e) => e ?? String(Wf++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Kf = [
	"top",
	"right",
	"bottom",
	"left"
], qf = Math.min, X = Math.max, Jf = Math.round, Yf = Math.floor, Xf = (e) => ({
	x: e,
	y: e
}), Zf = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Qf(e, t, n) {
	return X(e, qf(t, n));
}
function $f(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ep(e) {
	return e.split("-")[0];
}
function tp(e) {
	return e.split("-")[1];
}
function np(e) {
	return e === "x" ? "y" : "x";
}
function rp(e) {
	return e === "y" ? "height" : "width";
}
function ip(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function ap(e) {
	return np(ip(e));
}
function op(e, t, n) {
	n === void 0 && (n = !1);
	let r = tp(e), i = ap(e), a = rp(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = hp(o)), [o, hp(o)];
}
function sp(e) {
	let t = hp(e);
	return [
		cp(e),
		t,
		cp(t)
	];
}
function cp(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var lp = ["left", "right"], up = ["right", "left"], dp = ["top", "bottom"], fp = ["bottom", "top"];
function pp(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? up : lp : t ? lp : up;
		case "left":
		case "right": return t ? dp : fp;
		default: return [];
	}
}
function mp(e, t, n, r) {
	let i = tp(e), a = pp(ep(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(cp)))), a;
}
function hp(e) {
	let t = ep(e);
	return Zf[t] + e.slice(t.length);
}
function gp(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function _p(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : gp(e);
}
function vp(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function yp(e, t, n) {
	let { reference: r, floating: i } = e, a = ip(t), o = ap(t), s = rp(o), c = ep(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (tp(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function bp(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = $f(t, e), p = _p(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = vp(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = vp(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var xp = 50, Sp = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: bp
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = yp(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < xp && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = yp(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Cp = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = $f(e, t) || {};
		if (l == null) return {};
		let d = _p(u), f = {
			x: n,
			y: r
		}, p = ap(i), m = rp(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = qf(d[_], T), ee = qf(d[v], T), D = E, O = C - h[m] - ee, k = C / 2 - h[m] / 2 + w, A = Qf(D, k, O), j = !c.arrow && tp(i) != null && k !== A && a.reference[m] / 2 - (k < D ? E : ee) - h[m] / 2 < 0, M = j ? k < D ? k - D : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), wp = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = $f(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ep(r), _ = ip(o), v = ep(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [hp(o)] : sp(o)), x = p !== "none";
			!d && x && b.push(...mp(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = op(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== ip(t)) || T.every((e) => ip(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = ip(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Tp(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ep(e) {
	return Kf.some((t) => e[t] >= 0);
}
var Dp = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = $f(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Tp(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ep(e)
					} };
				}
				case "escaped": {
					let e = Tp(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ep(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Op = /*#__PURE__*/ new Set(["left", "top"]);
async function kp(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ep(n), s = tp(n), c = ip(n) === "y", l = Op.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = $f(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Ap = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await kp(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, jp = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = $f(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = ip(ep(i)), p = np(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Qf(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Qf(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Mp = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = $f(e, t), u = {
				x: n,
				y: r
			}, d = ip(i), f = np(d), p = u[f], m = u[d], h = $f(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Op.has(ep(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Np = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = $f(e, t), u = await o.detectOverflow(t, l), d = ep(i), f = tp(i), p = ip(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = qf(h - u[g], v), x = qf(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = X(u.left, 0), t = X(u.right, 0), n = X(u.top, 0), r = X(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : X(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : X(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Pp() {
	return typeof window < "u";
}
function Fp(e) {
	return Lp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ip(e) {
	return ((Lp(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Lp(e) {
	return Pp() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function Q(e) {
	return Pp() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function Rp(e) {
	return Pp() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function zp(e) {
	return !Pp() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function Bp(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Vp(e) {
	return /^(table|td|th)$/.test(Fp(e));
}
function Hp(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Up = /transform|translate|scale|rotate|perspective|filter/, Wp = /paint|layout|strict|content/, Gp = (e) => !!e && e !== "none", Kp;
function qp(e) {
	let t = Q(e) ? $(e) : e;
	return Gp(t.transform) || Gp(t.translate) || Gp(t.scale) || Gp(t.rotate) || Gp(t.perspective) || !Yp() && (Gp(t.backdropFilter) || Gp(t.filter)) || Up.test(t.willChange || "") || Wp.test(t.contain || "");
}
function Jp(e) {
	let t = Qp(e);
	for (; Rp(t) && !Xp(t);) {
		if (qp(t)) return t;
		if (Hp(t)) return null;
		t = Qp(t);
	}
	return null;
}
function Yp() {
	return Kp ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Kp;
}
function Xp(e) {
	return /^(html|body|#document)$/.test(Fp(e));
}
function $(e) {
	return Z(e).getComputedStyle(e);
}
function Zp(e) {
	return Q(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Qp(e) {
	if (Fp(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || zp(e) && e.host || Ip(e);
	return zp(t) ? t.host : t;
}
function $p(e) {
	let t = Qp(e);
	return Xp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Rp(t) && Bp(t) ? t : $p(t);
}
function em(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = $p(e), i = r === e.ownerDocument?.body, a = Z(r);
	if (i) {
		let e = tm(a);
		return t.concat(a, a.visualViewport || [], Bp(r) ? r : [], e && n ? em(e) : []);
	} else return t.concat(r, em(r, [], n));
}
function tm(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function nm(e) {
	let t = $(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Rp(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Jf(n) !== a || Jf(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function rm(e) {
	return Q(e) ? e : e.contextElement;
}
function im(e) {
	let t = rm(e);
	if (!Rp(t)) return Xf(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = nm(t), o = (a ? Jf(n.width) : n.width) / r, s = (a ? Jf(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var am = /*#__PURE__*/ Xf(0);
function om(e) {
	let t = Z(e);
	return !Yp() || !t.visualViewport ? am : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function sm(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Z(e) ? !1 : t;
}
function cm(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = rm(e), o = Xf(1);
	t && (r ? Q(r) && (o = im(r)) : o = im(e));
	let s = sm(a, n, r) ? om(a) : Xf(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Z(a), t = r && Q(r) ? Z(r) : r, n = e, i = tm(n);
		for (; i && r && t !== n;) {
			let e = im(i), t = i.getBoundingClientRect(), r = $(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Z(i), i = tm(n);
		}
	}
	return vp({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function lm(e, t) {
	let n = Zp(e).scrollLeft;
	return t ? t.left + n : cm(Ip(e)).left + n;
}
function um(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - lm(e, n),
		y: n.top + t.scrollTop
	};
}
function dm(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ip(r), s = t ? Hp(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Xf(1), u = Xf(0), d = Rp(r);
	if ((d || !d && !a) && ((Fp(r) !== "body" || Bp(o)) && (c = Zp(r)), d)) {
		let e = cm(r);
		l = im(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? um(o, c) : Xf(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function fm(e) {
	return Array.from(e.getClientRects());
}
function pm(e) {
	let t = Ip(e), n = Zp(e), r = e.ownerDocument.body, i = X(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = X(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + lm(e), s = -n.scrollTop;
	return $(r).direction === "rtl" && (o += X(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var mm = 25;
function hm(e, t) {
	let n = Z(e), r = Ip(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Yp();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = lm(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= mm && (a -= o);
	} else l <= mm && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function gm(e, t) {
	let n = cm(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Rp(e) ? im(e) : Xf(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function _m(e, t, n) {
	let r;
	if (t === "viewport") r = hm(e, n);
	else if (t === "document") r = pm(Ip(e));
	else if (Q(t)) r = gm(t, n);
	else {
		let n = om(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return vp(r);
}
function vm(e, t) {
	let n = Qp(e);
	return n === t || !Q(n) || Xp(n) ? !1 : $(n).position === "fixed" || vm(n, t);
}
function ym(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = em(e, [], !1).filter((e) => Q(e) && Fp(e) !== "body"), i = null, a = $(e).position === "fixed", o = a ? Qp(e) : e;
	for (; Q(o) && !Xp(o);) {
		let t = $(o), n = qp(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Bp(o) && !n && vm(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Qp(o);
	}
	return t.set(e, r), r;
}
function bm(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Hp(t) ? [] : ym(t, this._c) : [].concat(n), r], o = _m(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = _m(t, a[e], i);
		s = X(n.top, s), c = qf(n.right, c), l = qf(n.bottom, l), u = X(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function xm(e) {
	let { width: t, height: n } = nm(e);
	return {
		width: t,
		height: n
	};
}
function Sm(e, t, n) {
	let r = Rp(t), i = Ip(t), a = n === "fixed", o = cm(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Xf(0);
	function l() {
		c.x = lm(i);
	}
	if (r || !r && !a) if ((Fp(t) !== "body" || Bp(i)) && (s = Zp(t)), r) {
		let e = cm(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? um(i, s) : Xf(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Cm(e) {
	return $(e).position === "static";
}
function wm(e, t) {
	if (!Rp(e) || $(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ip(e) === n && (n = n.ownerDocument.body), n;
}
function Tm(e, t) {
	let n = Z(e);
	if (Hp(e)) return n;
	if (!Rp(e)) {
		let t = Qp(e);
		for (; t && !Xp(t);) {
			if (Q(t) && !Cm(t)) return t;
			t = Qp(t);
		}
		return n;
	}
	let r = wm(e, t);
	for (; r && Vp(r) && Cm(r);) r = wm(r, t);
	return r && Xp(r) && Cm(r) && !qp(r) ? n : r || Jp(e) || n;
}
var Em = async function(e) {
	let t = this.getOffsetParent || Tm, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Sm(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Dm(e) {
	return $(e).direction === "rtl";
}
var Om = {
	convertOffsetParentRelativeRectToViewportRelativeRect: dm,
	getDocumentElement: Ip,
	getClippingRect: bm,
	getOffsetParent: Tm,
	getElementRects: Em,
	getClientRects: fm,
	getDimensions: xm,
	getScale: im,
	isElement: Q,
	isRTL: Dm
};
function km(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Am(e, t) {
	let n = null, r, i = Ip(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Yf(d), h = Yf(i.clientWidth - (u + f)), g = Yf(i.clientHeight - (d + p)), _ = Yf(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: X(0, qf(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !km(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function jm(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = rm(e), u = i || a ? [...l ? em(l) : [], ...t ? em(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Am(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? cm(e) : null;
	c && g();
	function g() {
		let t = cm(e);
		h && !km(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Mm = Ap, Nm = jp, Pm = wp, Fm = Np, Im = Dp, Lm = Cp, Rm = Mp, zm = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Om,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Sp(e, t, {
		...i,
		platform: a
	});
}, Bm = typeof document < "u" ? ee : function() {};
function Vm(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Vm(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Vm(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Hm(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Um(e, t) {
	let n = Hm(e);
	return Math.round(t * n) / n;
}
function Wm(e) {
	let t = f.useRef(e);
	return Bm(() => {
		t.current = e;
	}), t;
}
function Gm(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = f.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [p, m] = f.useState(r);
	Vm(p, r) || m(r);
	let [h, g] = f.useState(null), [_, v] = f.useState(null), y = f.useCallback((e) => {
		e !== C.current && (C.current = e, g(e));
	}, []), b = f.useCallback((e) => {
		e !== w.current && (w.current = e, v(e));
	}, []), x = a || h, S = o || _, C = f.useRef(null), w = f.useRef(null), T = f.useRef(u), E = c != null, ee = Wm(c), D = Wm(i), O = Wm(l), k = f.useCallback(() => {
		if (!C.current || !w.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: p
		};
		D.current && (e.platform = D.current), zm(C.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Vm(T.current, t) && (T.current = t, te.flushSync(() => {
				d(t);
			}));
		});
	}, [
		p,
		t,
		n,
		D,
		O
	]);
	Bm(() => {
		l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = f.useRef(!1);
	Bm(() => (A.current = !0, () => {
		A.current = !1;
	}), []), Bm(() => {
		if (x && (C.current = x), S && (w.current = S), x && S) {
			if (ee.current) return ee.current(x, S, k);
			k();
		}
	}, [
		x,
		S,
		k,
		ee,
		E
	]);
	let j = f.useMemo(() => ({
		reference: C,
		floating: w,
		setReference: y,
		setFloating: b
	}), [y, b]), M = f.useMemo(() => ({
		reference: x,
		floating: S
	}), [x, S]), ne = f.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = Um(M.floating, u.x), r = Um(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Hm(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return f.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: ne
	}), [
		u,
		k,
		j,
		M,
		ne
	]);
}
var Km = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Lm({
				element: r.current,
				padding: i
			}).fn(n) : r ? Lm({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, qm = (e, t) => {
	let n = Mm(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Jm = (e, t) => {
	let n = Nm(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ym = (e, t) => ({
	fn: Rm(e).fn,
	options: [e, t]
}), Xm = (e, t) => {
	let n = Pm(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Zm = (e, t) => {
	let n = Fm(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Qm = (e, t) => {
	let n = Im(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, $m = (e, t) => {
	let n = Km(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, eh = "Arrow", th = f.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ j(of.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ j("polygon", { points: "0,0 30,0 15,10" })
	});
});
th.displayName = eh;
var nh = th;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-size/dist/index.mjs
function rh(e) {
	let [t, n] = f.useState(void 0);
	return Hf(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_13e0521d8aea7ebfbfb8bee1fb615c05/node_modules/@radix-ui/react-popper/dist/index.mjs
var ih = "Popper", [ah, oh] = Xd(ih), [sh, ch] = ah(ih), lh = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = f.useState(null);
	return /* @__PURE__ */ j(sh, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
lh.displayName = ih;
var uh = "PopperAnchor", dh = f.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = ch(uh, n), o = f.useRef(null), s = Yd(t, o), c = f.useRef(null);
	return f.useEffect(() => {
		let e = c.current;
		c.current = r?.current || o.current, e !== c.current && a.onAnchorChange(c.current);
	}), r ? null : /* @__PURE__ */ j(of.div, {
		...i,
		ref: s
	});
});
dh.displayName = uh;
var fh = "PopperContent", [ph, mh] = ah(fh), hh = f.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = e, _ = ch(fh, n), [v, y] = f.useState(null), b = Yd(t, (e) => y(e)), [x, S] = f.useState(null), C = rh(x), w = C?.width ?? 0, T = C?.height ?? 0, E = r + (a === "center" ? "" : "-" + a), ee = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, D = Array.isArray(l) ? l : [l], O = D.length > 0, k = {
		padding: ee,
		boundary: D.filter(yh),
		altBoundary: O
	}, { refs: A, floatingStyles: M, placement: te, isPositioned: ne, middlewareData: re } = Gm({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: (...e) => jm(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			qm({
				mainAxis: i + T,
				alignmentAxis: o
			}),
			c && Jm({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? Ym() : void 0,
				...k
			}),
			c && Xm({ ...k }),
			Zm({
				...k,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && $m({
				element: x,
				padding: s
			}),
			bh({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && Qm({
				strategy: "referenceHidden",
				...k
			})
		]
	}), [ie, ae] = xh(te), oe = cf(h);
	Hf(() => {
		ne && oe?.();
	}, [ne, oe]);
	let se = re.arrow?.x, ce = re.arrow?.y, le = re.arrow?.centerOffset !== 0, [ue, de] = f.useState();
	return Hf(() => {
		v && de(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ j("div", {
		ref: A.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: ne ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ue,
			"--radix-popper-transform-origin": [re.transformOrigin?.x, re.transformOrigin?.y].join(" "),
			...re.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ j(ph, {
			scope: n,
			placedSide: ie,
			onArrowChange: S,
			arrowX: se,
			arrowY: ce,
			shouldHideArrow: le,
			children: /* @__PURE__ */ j(of.div, {
				"data-side": ie,
				"data-align": ae,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: ne ? void 0 : "none"
				}
			})
		})
	});
});
hh.displayName = fh;
var gh = "PopperArrow", _h = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, vh = f.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = mh(gh, n), a = _h[i.placedSide];
	return /* @__PURE__ */ j("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ j(nh, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
vh.displayName = gh;
function yh(e) {
	return e !== null;
}
var bh = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = xh(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function xh(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Sh = lh, Ch = dh, wh = hh, Th = vh, Eh = "Portal", Dh = f.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, a] = f.useState(!1);
	Hf(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? ne.createPortal(/* @__PURE__ */ j(of.div, {
		...r,
		ref: t
	}), o) : null;
});
Dh.displayName = Eh;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs
function Oh(e, t) {
	return f.useReducer((e, n) => t[e][n] ?? e, e);
}
var kh = (e) => {
	let { present: t, children: n } = e, r = Ah(t), i = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n), a = Yd(r.ref, Mh(i));
	return typeof n == "function" || r.isPresent ? f.cloneElement(i, { ref: a }) : null;
};
kh.displayName = "Presence";
function Ah(e) {
	let [t, n] = f.useState(), r = f.useRef(null), i = f.useRef(e), a = f.useRef("none"), [o, s] = Oh(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return f.useEffect(() => {
		let e = jh(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), Hf(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = jh(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), Hf(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = jh(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = jh(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: f.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function jh(e) {
	return e?.animationName || "none";
}
function Mh(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Nh = f.useInsertionEffect || Hf;
function Ph({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = Fh({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, c = s ? e : i;
	{
		let t = f.useRef(e !== void 0);
		f.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [c, f.useCallback((t) => {
		if (s) {
			let n = Ih(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function Fh({ defaultProp: e, onChange: t }) {
	let [n, r] = f.useState(e), i = f.useRef(n), a = f.useRef(t);
	return Nh(() => {
		a.current = t;
	}, [t]), f.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function Ih(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Lh = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Rh = /* @__PURE__ */ new WeakMap(), zh = /* @__PURE__ */ new WeakMap(), Bh = {}, Vh = 0, Hh = function(e) {
	return e && (e.host || Hh(e.parentNode));
}, Uh = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Hh(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Wh = function(e, t, n, r) {
	var i = Uh(t, Array.isArray(e) ? e : [e]);
	Bh[n] || (Bh[n] = /* @__PURE__ */ new WeakMap());
	var a = Bh[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Rh.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Rh.set(e, c), a.set(e, l), o.push(e), c === 1 && i && zh.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Vh++, function() {
		o.forEach(function(e) {
			var t = Rh.get(e) - 1, i = a.get(e) - 1;
			Rh.set(e, t), a.set(e, i), t || (zh.has(e) || e.removeAttribute(r), zh.delete(e)), i || e.removeAttribute(n);
		}), Vh--, Vh || (Rh = /* @__PURE__ */ new WeakMap(), Rh = /* @__PURE__ */ new WeakMap(), zh = /* @__PURE__ */ new WeakMap(), Bh = {});
	};
}, Gh = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Lh(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Wh(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Kh = function() {
	return Kh = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Kh.apply(this, arguments);
};
function qh(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Jh(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Yh = "right-scroll-bar-position", Xh = "width-before-scroll-bar", Zh = "with-scroll-bars-hidden", Qh = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function $h(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
function eg(e, t) {
	var n = k(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var tg = typeof window < "u" ? f.useLayoutEffect : f.useEffect, ng = /* @__PURE__ */ new WeakMap();
function rg(e, t) {
	var n = eg(t || null, function(t) {
		return e.forEach(function(e) {
			return $h(e, t);
		});
	});
	return tg(function() {
		var t = ng.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || $h(e, null);
			}), i.forEach(function(e) {
				r.has(e) || $h(e, a);
			});
		}
		ng.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function ig(e) {
	return e;
}
function ag(e, t) {
	t === void 0 && (t = ig);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function og(e) {
	e === void 0 && (e = {});
	var t = ag(null);
	return t.options = Kh({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
var sg = function(e) {
	var t = e.sideCar, n = qh(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return f.createElement(r, Kh({}, n));
};
sg.isSideCarExport = !0;
function cg(e, t) {
	return e.useMedium(t), sg;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var lg = og(), ug = function() {}, dg = f.forwardRef(function(e, t) {
	var n = f.useRef(null), r = f.useState({
		onScrollCapture: ug,
		onWheelCapture: ug,
		onTouchMoveCapture: ug
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = qh(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = rg([n, t]), w = Kh(Kh({}, x), i);
	return f.createElement(f.Fragment, null, u && f.createElement(S, {
		sideCar: lg,
		removeScrollBar: l,
		shards: d,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), o ? f.cloneElement(f.Children.only(s), Kh(Kh({}, w), { ref: C })) : f.createElement(y, Kh({}, w, {
		className: c,
		ref: C
	}), s));
});
dg.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, dg.classNames = {
	fullWidth: Xh,
	zeroRight: Yh
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var fg, pg = function() {
	if (fg) return fg;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/singleton.js
function mg() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = pg();
	return t && e.setAttribute("nonce", t), e;
}
function hg(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gg(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var _g = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = mg()) && (hg(t, n), gg(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, vg = function() {
	var e = _g();
	return function(t, n) {
		f.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, yg = function() {
	var e = vg();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, bg = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, xg = function(e) {
	return parseInt(e || "", 10) || 0;
}, Sg = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		xg(n),
		xg(r),
		xg(i)
	];
}, Cg = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return bg;
	var t = Sg(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, wg = yg(), Tg = "data-scroll-locked", Eg = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Zh} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Tg}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Yh} {
    right: ${s}px ${r};
  }
  
  .${Xh} {
    margin-right: ${s}px ${r};
  }
  
  .${Yh} .${Yh} {
    right: 0 ${r};
  }
  
  .${Xh} .${Xh} {
    margin-right: 0 ${r};
  }
  
  body[${Tg}] {
    ${Qh}: ${s}px;
  }
`;
}, Dg = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Og = function() {
	f.useEffect(function() {
		return document.body.setAttribute(Tg, (Dg() + 1).toString()), function() {
			var e = Dg() - 1;
			e <= 0 ? document.body.removeAttribute(Tg) : document.body.setAttribute(Tg, e.toString());
		};
	}, []);
}, kg = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Og();
	var a = f.useMemo(function() {
		return Cg(i);
	}, [i]);
	return f.createElement(wg, { styles: Eg(a, !t, i, n ? "" : "!important") });
}, Ag = !1;
if (typeof window < "u") try {
	var jg = Object.defineProperty({}, "passive", { get: function() {
		return Ag = !0, !0;
	} });
	window.addEventListener("test", jg, jg), window.removeEventListener("test", jg, jg);
} catch {
	Ag = !1;
}
var Mg = Ag ? { passive: !1 } : !1, Ng = function(e) {
	return e.tagName === "TEXTAREA";
}, Pg = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ng(e) && n[t] === "visible");
}, Fg = function(e) {
	return Pg(e, "overflowY");
}, Ig = function(e) {
	return Pg(e, "overflowX");
}, Lg = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Bg(e, r)) {
			var i = Vg(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Rg = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, zg = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Bg = function(e, t) {
	return e === "v" ? Fg(t) : Ig(t);
}, Vg = function(e, t) {
	return e === "v" ? Rg(t) : zg(t);
}, Hg = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ug = function(e, t, n, r, i) {
	var a = Hg(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Vg(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Bg(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Wg = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gg = function(e) {
	return [e.deltaX, e.deltaY];
}, Kg = function(e) {
	return e && "current" in e ? e.current : e;
}, qg = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Jg = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Yg = 0, Xg = [];
function Zg(e) {
	var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), i = f.useState(Yg++)[0], a = f.useState(yg)[0], o = f.useRef(e);
	f.useEffect(function() {
		o.current = e;
	}, [e]), f.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = Jh([e.lockRef.current], (e.shards || []).map(Kg), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = f.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Wg(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Lg(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Lg(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Ug(h, t, e, h === "h" ? s : c, !0);
	}, []), c = f.useCallback(function(e) {
		var n = e;
		if (!(!Xg.length || Xg[Xg.length - 1] !== a)) {
			var r = "deltaY" in n ? Gg(n) : Wg(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && qg(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Kg).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = f.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Qg(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = f.useCallback(function(e) {
		n.current = Wg(e), r.current = void 0;
	}, []), d = f.useCallback(function(t) {
		l(t.type, Gg(t), t.target, s(t, e.lockRef.current));
	}, []), p = f.useCallback(function(t) {
		l(t.type, Wg(t), t.target, s(t, e.lockRef.current));
	}, []);
	f.useEffect(function() {
		return Xg.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, Mg), document.addEventListener("touchmove", c, Mg), document.addEventListener("touchstart", u, Mg), function() {
			Xg = Xg.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Mg), document.removeEventListener("touchmove", c, Mg), document.removeEventListener("touchstart", u, Mg);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return f.createElement(f.Fragment, null, h ? f.createElement(a, { styles: Jg(i) }) : null, m ? f.createElement(kg, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Qg(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var $g = cg(lg, Zg), e_ = f.forwardRef(function(e, t) {
	return f.createElement(dg, Kh({}, e, {
		ref: t,
		sideCar: $g
	}));
});
e_.classNames = dg.classNames;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popover@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_8b5332f8e883134e9d9ab2856fc4395d/node_modules/@radix-ui/react-popover/dist/index.mjs
var t_ = "Popover", [n_, r_] = Xd(t_, [oh]), i_ = oh(), [a_, o_] = n_(t_), s_ = (e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = i_(t), c = f.useRef(null), [l, u] = f.useState(!1), [d, p] = Ph({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: t_
	});
	return /* @__PURE__ */ j(Sh, {
		...s,
		children: /* @__PURE__ */ j(a_, {
			scope: t,
			contentId: Gf(),
			triggerRef: c,
			open: d,
			onOpenChange: p,
			onOpenToggle: f.useCallback(() => p((e) => !e), [p]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: f.useCallback(() => u(!0), []),
			onCustomAnchorRemove: f.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
};
s_.displayName = t_;
var c_ = "PopoverAnchor", l_ = f.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = o_(c_, n), a = i_(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return f.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ j(Ch, {
		...a,
		...r,
		ref: t
	});
});
l_.displayName = c_;
var u_ = "PopoverTrigger", d_ = f.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = o_(u_, n), a = i_(n), o = Yd(t, i.triggerRef), s = /* @__PURE__ */ j(of.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": E_(i.open),
		...r,
		ref: o,
		onClick: Kd(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ j(Ch, {
		asChild: !0,
		...a,
		children: s
	});
});
d_.displayName = u_;
var f_ = "PopoverPortal", [p_, m_] = n_(f_, { forceMount: void 0 }), h_ = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = o_(f_, t);
	return /* @__PURE__ */ j(p_, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ j(kh, {
			present: n || a.open,
			children: /* @__PURE__ */ j(Dh, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
h_.displayName = f_;
var g_ = "PopoverContent", __ = f.forwardRef((e, t) => {
	let n = m_(g_, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = o_(g_, e.__scopePopover);
	return /* @__PURE__ */ j(kh, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ j(y_, {
			...i,
			ref: t
		}) : /* @__PURE__ */ j(b_, {
			...i,
			ref: t
		})
	});
});
__.displayName = g_;
var v_ = /* @__PURE__ */ Qd("PopoverContent.RemoveScroll"), y_ = f.forwardRef((e, t) => {
	let n = o_(g_, e.__scopePopover), r = f.useRef(null), i = Yd(t, r), a = f.useRef(!1);
	return f.useEffect(() => {
		let e = r.current;
		if (e) return Gh(e);
	}, []), /* @__PURE__ */ j(e_, {
		as: v_,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ j(x_, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: Kd(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: Kd(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: Kd(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), b_ = f.forwardRef((e, t) => {
	let n = o_(g_, e.__scopePopover), r = f.useRef(!1), i = f.useRef(!1);
	return /* @__PURE__ */ j(x_, {
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
}), x_ = f.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = o_(g_, n), p = i_(n);
	return wf(), /* @__PURE__ */ j(Af, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ j(gf, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ j(wh, {
				"data-state": E_(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), S_ = "PopoverClose", C_ = f.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = o_(S_, n);
	return /* @__PURE__ */ j(of.button, {
		type: "button",
		...r,
		ref: t,
		onClick: Kd(e.onClick, () => i.onOpenChange(!1))
	});
});
C_.displayName = S_;
var w_ = "PopoverArrow", T_ = f.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e;
	return /* @__PURE__ */ j(Th, {
		...i_(n),
		...r,
		ref: t
	});
});
T_.displayName = w_;
function E_(e) {
	return e ? "open" : "closed";
}
var D_ = s_, O_ = d_, k_ = h_, A_ = __, j_ = "\n  attribute vec2 a_position;\n  varying vec2 v_uv;\n  void main() {\n    v_uv = a_position * 0.5 + 0.5;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n", M_ = "\n  precision mediump float;\n\n  uniform float u_time;\n  uniform vec2  u_resolution;\n\n  void main() {\n    vec2 uv = gl_FragCoord.xy / u_resolution;\n\n    // Two overlapping sine waves for organic caustic feel\n    float wave1 = sin(uv.x * 6.283 + u_time * 0.8) * 0.5 + 0.5;\n    float wave2 = sin(uv.y * 4.712 - u_time * 0.5) * 0.5 + 0.5;\n    float wave3 = sin((uv.x + uv.y) * 5.0 + u_time * 0.3) * 0.5 + 0.5;\n\n    float caustic = wave1 * wave2 * wave3;\n\n    // Edge vignette: fade out near the border so the shimmer doesn't bleed\n    vec2 dist = abs(uv - 0.5) * 2.0;\n    float vignette = 1.0 - smoothstep(0.7, 1.0, max(dist.x, dist.y));\n\n    float alpha = caustic * vignette * 0.1;\n    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);\n  }\n";
//#endregion
//#region src/components/liquid-glass/useGlassShimmer.ts
function N_(e, t, n) {
	let r = e.createShader(t);
	return r ? (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (console.warn("[GlassShimmer] Shader compile error:", e.getShaderInfoLog(r)), e.deleteShader(r), null)) : null;
}
function P_(e, t, n) {
	let r = N_(e, e.VERTEX_SHADER, t), i = N_(e, e.FRAGMENT_SHADER, n);
	if (!r || !i) return null;
	let a = e.createProgram();
	return a ? (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.getProgramParameter(a, e.LINK_STATUS) ? a : (console.warn("[GlassShimmer] Program link error:", e.getProgramInfoLog(a)), null)) : null;
}
function F_(e) {
	w(() => {
		let t = e.current;
		if (!t) return;
		let n = t.getContext("webgl") ?? t.getContext("experimental-webgl");
		if (!n) return;
		let r = P_(n, j_, M_);
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
function I_({ className: e }) {
	let t = O(null);
	return F_(t), /* @__PURE__ */ j("canvas", {
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
function L_() {
	let e = O(null), [t, n] = k(null);
	return w(() => {
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
var R_ = {
	dock: "var(--radius-dock)",
	menubar: null,
	taskbar: null,
	window: "var(--radius-window)",
	panel: "var(--radius-card)",
	widget: "var(--radius-card)"
}, z_ = {
	dock: "shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
	menubar: "shadow-sm",
	taskbar: "shadow-none",
	window: "shadow-[0_16px_48px_rgba(0,0,0,0.3)]",
	panel: "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
	widget: "shadow-none"
};
function B_({ children: e, className: r, variant: i = "panel", forceGlass: a, borderRadius: o }) {
	let { isGlass: s, colorScheme: c } = Ld(), l = a === void 0 ? s : a, u = t((e) => e.glassMode), d = o ?? R_[i], f = d ? { borderRadius: d } : {}, p = z_[i], { elementRef: m, maps: h } = L_(), g = l && h ? `url(#${h.filterId}) blur(24px)` : l ? "url(#lg-distort) blur(24px)" : "blur(20px)";
	return l ? u === "clear" ? /* @__PURE__ */ M("div", {
		ref: m,
		className: n("relative overflow-hidden border border-white/25 dark:border-white/10", p, r),
		style: f,
		children: [
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				style: {
					...f,
					backdropFilter: "blur(3px)",
					filter: "url(#glass-distortion)",
					isolation: "isolate"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-10 pointer-events-none",
				style: {
					...f,
					background: i === "panel" ? c === "dark" ? "rgba(26, 28, 40, 0.66)" : "rgba(246, 246, 246, 0.62)" : "rgba(255, 255, 255, 0.08)"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "absolute inset-0 z-20 pointer-events-none",
				style: {
					...f,
					boxShadow: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25), inset -0.5px -0.5px 1px 1px rgba(255, 255, 255, 0.15)"
				}
			}),
			/* @__PURE__ */ j("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			})
		]
	}) : /* @__PURE__ */ M("div", {
		ref: m,
		className: n("relative overflow-hidden", l ? i === "panel" ? n("bg-white/60 dark:bg-[#1a1c26]/64 border-white/40 dark:border-white/15", p) : n("bg-white/12 dark:bg-white/5 border-white/30 dark:border-white/15", p, "inset_0_1px_0_rgba(255,255,255,0.4)") : n(i === "panel" ? "bg-white/95 dark:bg-[#1a1c26]/95 border-white/20 dark:border-white/10" : "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", p), "border", r),
		style: {
			...f,
			backdropFilter: g,
			WebkitBackdropFilter: g
		},
		children: [
			l && i !== "menubar" && i !== "taskbar" && /* @__PURE__ */ j("div", {
				"aria-hidden": !0,
				className: "absolute inset-x-0 top-0 h-px pointer-events-none z-10",
				style: { background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.85) 70%, transparent 95%)" }
			}),
			l && i !== "menubar" && i !== "taskbar" && /* @__PURE__ */ j("div", {
				"aria-hidden": !0,
				className: "absolute inset-y-0 left-0 w-px pointer-events-none z-10",
				style: { background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)" }
			}),
			/* @__PURE__ */ j("div", {
				className: "relative z-20 min-w-0 w-full h-full",
				children: e
			}),
			l && /* @__PURE__ */ j(I_, { className: "absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" }),
			l && h && /* @__PURE__ */ j("svg", {
				"aria-hidden": !0,
				style: {
					position: "absolute",
					width: 0,
					height: 0,
					overflow: "hidden",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ M("filter", {
					id: h.filterId,
					colorInterpolationFilters: "sRGB",
					children: [
						/* @__PURE__ */ j("feGaussianBlur", {
							in: "SourceGraphic",
							stdDeviation: "0.2",
							result: "blurred_source"
						}),
						/* @__PURE__ */ j("feImage", {
							href: h.displacementUrl,
							x: "0",
							y: "0",
							width: h.width,
							height: h.height,
							result: "displacement_map"
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
							href: h.specularUrl,
							x: "0",
							y: "0",
							width: h.width,
							height: h.height,
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
		ref: m,
		className: n("relative overflow-hidden", "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10", p, "border", r),
		style: f,
		children: /* @__PURE__ */ j("div", {
			className: "relative z-20 min-w-0 w-full h-full",
			children: e
		})
	});
}
//#endregion
//#region src/components/menubar/ControlCenter.tsx
function V_() {
	let [e, r] = k(!1), i = t((e) => e.colorScheme), o = t((e) => e.setColorScheme), l = t((e) => e.glassEnabled), u = t((e) => e.setGlassEnabled), d = t((e) => e.wallpaperTextTheme), [f, p] = k(75), [m, h] = k(80), g = d === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10", _ = d === "light" ? "text-black/90" : "text-white/90", v = d === "light" ? "text-black/55" : "text-white/55", y = d === "light" ? "text-black/45" : "text-white/45", b = d === "light" ? "bg-black/5" : "bg-white/5", x = d === "light" ? "hover:bg-black/10 text-black/70" : "hover:bg-white/10 text-white/80";
	return /* @__PURE__ */ M(D_, {
		open: e,
		onOpenChange: r,
		modal: !1,
		children: [/* @__PURE__ */ j(O_, {
			asChild: !0,
			children: /* @__PURE__ */ j("button", {
				className: `p-1.5 rounded-md transition-colors flex items-center gap-1 ${g}`,
				"aria-label": "Control Center",
				children: /* @__PURE__ */ j(Ud, { className: "w-3.5 h-3.5" })
			})
		}), /* @__PURE__ */ j(k_, { children: /* @__PURE__ */ j(A_, {
			align: "end",
			sideOffset: 6,
			className: "w-72 z-[9999] outline-none",
			onInteractOutside: (e) => {
				e.target.closest("[data-radix-popper-content-wrapper]") && e.preventDefault();
			},
			onFocusOutside: (e) => e.preventDefault(),
			children: /* @__PURE__ */ j(B_, {
				variant: "panel",
				className: "p-4 w-full",
				children: /* @__PURE__ */ M("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ M("div", {
							className: n("rounded-[var(--radius-input)] p-3 flex items-center gap-2", b),
							children: [/* @__PURE__ */ j("div", {
								className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ j(Wd, { className: "w-4 h-4 text-white" })
							}), /* @__PURE__ */ M("div", { children: [/* @__PURE__ */ j("p", {
								className: n("text-xs font-semibold", _),
								children: "Wi-Fi"
							}), /* @__PURE__ */ j("p", {
								className: n("text-[10px]", v),
								children: "Connected"
							})] })]
						}),
						/* @__PURE__ */ M("div", {
							className: n("rounded-[var(--radius-input)] p-3", b),
							children: [/* @__PURE__ */ j("p", {
								className: n("text-xs font-semibold mb-2", _),
								children: "Appearance"
							}), /* @__PURE__ */ j("div", {
								className: "flex gap-1",
								children: [
									{
										id: "light",
										icon: /* @__PURE__ */ j(s, { className: "w-3 h-3" })
									},
									{
										id: "auto",
										icon: /* @__PURE__ */ j(a, { className: "w-3 h-3" })
									},
									{
										id: "dark",
										icon: /* @__PURE__ */ j(Hd, { className: "w-3 h-3" })
									}
								].map(({ id: e, icon: t }) => /* @__PURE__ */ j("button", {
									onClick: () => o(e),
									className: n("flex-1 flex items-center justify-center py-1 rounded-md text-[10px] transition-colors", i === e ? "bg-blue-500 text-white" : x),
									children: t
								}, e))
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: n("col-span-2 rounded-[var(--radius-input)] p-3", b),
							children: [/* @__PURE__ */ M("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ j(s, { className: n("w-3 h-3", _) }),
									/* @__PURE__ */ j("p", {
										className: n("text-xs font-semibold", _),
										children: "Brightness"
									}),
									/* @__PURE__ */ M("span", {
										className: n("text-[10px] ml-auto", y),
										children: [m, "%"]
									})
								]
							}), /* @__PURE__ */ j("input", {
								type: "range",
								min: 0,
								max: 100,
								value: m,
								onChange: (e) => h(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: n("col-span-2 rounded-[var(--radius-input)] p-3", b),
							children: [/* @__PURE__ */ M("div", {
								className: "flex items-center gap-2 mb-2",
								children: [
									/* @__PURE__ */ j(c, { className: n("w-3 h-3", _) }),
									/* @__PURE__ */ j("p", {
										className: n("text-xs font-semibold", _),
										children: "Sound"
									}),
									/* @__PURE__ */ M("span", {
										className: n("text-[10px] ml-auto", y),
										children: [f, "%"]
									})
								]
							}), /* @__PURE__ */ j("input", {
								type: "range",
								min: 0,
								max: 100,
								value: f,
								onChange: (e) => p(+e.target.value),
								className: "w-full h-1.5 accent-blue-500"
							})]
						}),
						/* @__PURE__ */ M("div", {
							className: n("col-span-2 rounded-[var(--radius-input)] p-3 flex items-center justify-between", b),
							children: [/* @__PURE__ */ j("p", {
								className: n("text-xs font-semibold", _),
								children: "Liquid Glass"
							}), /* @__PURE__ */ j("button", {
								onClick: () => u(!l),
								className: n("w-10 h-5 rounded-full transition-colors relative", l ? "bg-blue-500" : "bg-neutral-300 dark:bg-white/15"),
								children: /* @__PURE__ */ j("span", { className: n("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all", l ? "left-5" : "left-0.5") })
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
var H_ = _("dark");
function U_() {
	return C(H_) === "light" ? "text-black/80 hover:bg-black/10" : "text-white/85 hover:bg-white/10";
}
var W_ = "flex h-6 items-center rounded-md px-2.5 text-[13px] leading-none transition-colors";
function G_({ label: e, shortcut: t, disabled: r, onClick: i }) {
	return /* @__PURE__ */ M("button", {
		disabled: r,
		className: n("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", r ? "text-black/30 dark:text-white/30" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
		onClick: i,
		children: [/* @__PURE__ */ j("span", { children: e }), t && /* @__PURE__ */ j("span", {
			className: "text-[11px] opacity-50 ml-6",
			children: t
		})]
	});
}
function K_() {
	return /* @__PURE__ */ j("div", { className: "my-1 mx-2 h-px bg-black/10 dark:bg-white/10" });
}
function q_(e, t) {
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
function J_(e, t) {
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
function Y_({ item: e, t, onSelect: r }) {
	let [a, o] = k(!1), [s, c] = k(null), l = O(null), u = O(null), d = !!e.children && e.children.length > 0, f = S(() => {
		if (u.current &&= (clearTimeout(u.current), null), !l.current) return;
		let e = l.current.getBoundingClientRect();
		c({
			top: e.top - 4,
			left: e.right + 2
		}), o(!0);
	}, []), p = S(() => {
		u.current = setTimeout(() => o(!1), 150);
	}, []);
	return w(() => () => {
		u.current && clearTimeout(u.current);
	}, []), d ? /* @__PURE__ */ M("div", {
		onMouseEnter: f,
		onMouseLeave: p,
		children: [/* @__PURE__ */ M("button", {
			ref: l,
			disabled: e.disabled,
			className: n("w-full flex items-center justify-between px-3 py-1.5 text-[13px] transition-colors cursor-default rounded-lg text-left", e.disabled ? "text-black/30 dark:text-white/30" : a ? "bg-accent-active text-white" : "hover:bg-accent-active hover:text-white text-black dark:text-white"),
			children: [/* @__PURE__ */ j("span", { children: J_(e.label, t) }), /* @__PURE__ */ j(i, { className: "w-3.5 h-3.5 ml-6 opacity-60" })]
		}), a && s && typeof document < "u" && re(/* @__PURE__ */ j("div", {
			"data-menu-portal": "true",
			className: "fixed z-[99999] outline-none",
			style: {
				top: s.top,
				left: s.left,
				minWidth: 192
			},
			onMouseEnter: f,
			onMouseLeave: p,
			children: /* @__PURE__ */ j(B_, {
				variant: "panel",
				className: "py-1 px-1 w-full",
				children: e.children.map((e, n) => e.separator ? /* @__PURE__ */ j(K_, {}, `sep-${n}`) : /* @__PURE__ */ j(Y_, {
					item: e,
					t,
					onSelect: r
				}, e.key))
			})
		}), document.body)]
	}) : /* @__PURE__ */ j(G_, {
		label: J_(e.label, t),
		shortcut: e.shortcut,
		disabled: e.disabled,
		onClick: () => r(e)
	});
}
//#endregion
//#region src/components/menubar/DropdownPanel.tsx
function X_({ anchorRef: e, open: t, onClose: n, minWidth: r = 192, children: i }) {
	let [a, o] = k(null), s = O(null);
	return w(() => {
		if (!t || !e.current) return;
		let n = e.current.getBoundingClientRect();
		o({
			top: n.bottom + 6,
			left: n.left
		});
	}, [t, e]), w(() => {
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
	]), !t || !a || typeof document > "u" ? null : re(/* @__PURE__ */ j("div", {
		ref: s,
		"data-menu-portal": "true",
		className: "fixed z-[99999] outline-none",
		style: {
			top: a.top,
			left: a.left,
			minWidth: r
		},
		children: /* @__PURE__ */ j(B_, {
			variant: "panel",
			className: "py-1 px-1 w-full",
			children: i
		})
	}), document.body);
}
//#endregion
//#region src/components/menubar/PersonalAboutDialog.tsx
function Z_({ onClose: e }) {
	let [t, n] = k({
		x: 0,
		y: 0
	}), [r, i] = k(!1), a = O(null), o = S((e) => {
		e.target.closest("button") || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), a.current = {
			mx: e.clientX,
			my: e.clientY,
			ox: t.x,
			oy: t.y
		});
	}, [t]), s = S((e) => {
		a.current && n({
			x: a.current.ox + (e.clientX - a.current.mx),
			y: a.current.oy + (e.clientY - a.current.my)
		});
	}, []), c = S(() => {
		a.current = null;
	}, []);
	return typeof document > "u" ? null : re(/* @__PURE__ */ M("div", {
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
							children: r && /* @__PURE__ */ j(l, {
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
						children: "© 2024 Skyline. All rights reserved."
					})
				]
			})]
		})]
	}), document.body);
}
//#endregion
//#region src/components/menubar/AppleMenuDropdown.tsx
function Q_({ activeId: e, setActiveId: r }) {
	let i = e === "apple", a = S((e) => {
		r((typeof e == "function" ? e(i) : e) ? "apple" : null);
	}, [i, r]), o = U_(), [s, c] = k(!1), l = O(null), d = t((e) => e.apps), f = t((e) => e.launchApp), { t: p } = u(), m = S(() => a(!1), [a]);
	return /* @__PURE__ */ M(A, { children: [
		/* @__PURE__ */ j("button", {
			ref: l,
			onMouseDown: (e) => {
				e.button === 0 && a((e) => !e);
			},
			onMouseEnter: () => {
				e !== null && r("apple");
			},
			className: n(W_, i ? "bg-accent-active text-white" : o),
			children: /* @__PURE__ */ j("span", {
				className: "text-2xl leading-none font-sans",
				children: ""
			})
		}),
		/* @__PURE__ */ M(X_, {
			anchorRef: l,
			open: i,
			onClose: m,
			minWidth: 220,
			children: [
				/* @__PURE__ */ j(G_, {
					label: p.aboutThisMac,
					onClick: () => {
						a(!1), c(!0);
					}
				}),
				/* @__PURE__ */ j(K_, {}),
				/* @__PURE__ */ j(G_, {
					label: p.systemSettings,
					onClick: () => {
						a(!1);
						let e = d.settings;
						e && f(e);
					}
				})
			]
		}),
		s && /* @__PURE__ */ j(Z_, { onClose: () => c(!1) })
	] });
}
//#endregion
//#region src/components/menubar/AppNameDropdown.tsx
function $_({ appConfig: e, appId: r, activeId: i, setActiveId: a }) {
	let o = i === "app-name", s = S((e) => {
		a((typeof e == "function" ? e(o) : e) ? "app-name" : null);
	}, [o, a]), c = U_(), l = O(null), d = t((e) => e.closeWindow), { t: f, getAppName: p } = u(), m = e ? p(e.id, e.name) : f.appNameFinder, h = S(() => s(!1), [s]), g = (e) => {
		r && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: r,
			action: e
		} }));
	};
	return /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j("button", {
		ref: l,
		onMouseDown: (e) => {
			e.button === 0 && s((e) => !e);
		},
		onMouseEnter: () => {
			i !== null && a("app-name");
		},
		className: n(W_, "font-semibold", o ? "bg-accent-active text-white" : c),
		children: /* @__PURE__ */ j("span", {
			className: "text-[13px] font-semibold",
			children: m
		})
	}), /* @__PURE__ */ M(X_, {
		anchorRef: l,
		open: o,
		onClose: h,
		minWidth: 208,
		children: [
			/* @__PURE__ */ j(G_, {
				label: `${f.aboutApp} ${m}`,
				onClick: () => {
					s(!1), g("about");
				},
				disabled: !r
			}),
			/* @__PURE__ */ j(K_, {}),
			/* @__PURE__ */ j(G_, {
				label: f.services,
				disabled: !0
			}),
			/* @__PURE__ */ j(K_, {}),
			/* @__PURE__ */ j(G_, {
				label: `${f.hide} ${m}`,
				shortcut: "⌘H",
				disabled: !0
			}),
			/* @__PURE__ */ j(G_, {
				label: f.hideOthers,
				shortcut: "⌥⌘H",
				disabled: !0
			}),
			/* @__PURE__ */ j(G_, {
				label: f.showAll,
				disabled: !0
			}),
			/* @__PURE__ */ j(K_, {}),
			/* @__PURE__ */ j(G_, {
				label: `${f.quit} ${m}`,
				shortcut: "⌘Q",
				onClick: () => {
					if (s(!1), !r) return;
					let { windows: e } = t.getState();
					Object.values(e).filter((e) => e.appId === r).forEach((e) => d(e.id));
				}
			})
		]
	})] });
}
//#endregion
//#region src/components/menubar/MenuDropdown.tsx
function ev({ label: e, items: t, appId: r, windowId: i, activeId: a, setActiveId: o }) {
	let s = a === e, c = S((t) => {
		o((typeof t == "function" ? t(s) : t) ? e : null);
	}, [
		s,
		e,
		o
	]), l = U_(), d = O(null), { t: f } = u(), p = S(() => c(!1), [c]), m = (e) => {
		c(!1), e.action && r && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: r,
			action: e.action,
			windowId: i
		} }));
	};
	return /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j("button", {
		ref: d,
		onMouseDown: (e) => {
			e.button === 0 && c((e) => !e);
		},
		onMouseEnter: () => {
			a !== null && o(e);
		},
		className: n(W_, s ? "bg-accent-active text-white" : l),
		children: q_(e, f)
	}), /* @__PURE__ */ j(X_, {
		anchorRef: d,
		open: s,
		onClose: p,
		minWidth: 192,
		children: t.map((e, t) => e.separator ? /* @__PURE__ */ j(K_, {}, `sep-${t}`) : /* @__PURE__ */ j(Y_, {
			item: e,
			t: f,
			onSelect: m
		}, e.key))
	})] });
}
//#endregion
//#region src/components/menubar/MenuBar.tsx
function tv({ onSpotlight: r } = {}) {
	let i = t((e) => e.activeAppId), a = t((e) => e.apps), s = i ? a[i] : null, c = s?.menuBarMenus ?? e, l = t((e) => e.wallpaperTextTheme), u = n(W_, "px-2", l === "light" ? "text-black/70 hover:bg-black/10" : "text-white/80 hover:bg-white/10"), [d, f] = k(null);
	return /* @__PURE__ */ j(H_.Provider, {
		value: l,
		children: /* @__PURE__ */ j(B_, {
			variant: "menubar",
			children: /* @__PURE__ */ M("div", {
				"data-menubar": "true",
				className: "flex h-(--menubar-height) w-full items-center px-2",
				children: [
					/* @__PURE__ */ M("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							/* @__PURE__ */ j(Q_, {
								activeId: d,
								setActiveId: f
							}),
							/* @__PURE__ */ j($_, {
								appConfig: s,
								appId: i,
								activeId: d,
								setActiveId: f
							}),
							c.map((e) => /* @__PURE__ */ j(ev, {
								label: e.label,
								items: e.items,
								appId: i,
								activeId: d,
								setActiveId: f
							}, e.label))
						]
					}),
					/* @__PURE__ */ j("div", { className: "flex-1" }),
					/* @__PURE__ */ M("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [
							/* @__PURE__ */ j("button", {
								onClick: r,
								className: u,
								title: "Spotlight Search (⌘Space)",
								children: /* @__PURE__ */ j(o, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ j("button", {
								className: u,
								children: /* @__PURE__ */ j(Wd, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ j("button", {
								className: u,
								children: /* @__PURE__ */ j(Rd, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ j(V_, {}),
							/* @__PURE__ */ j("div", {
								className: "flex h-6 items-center rounded-md px-2",
								children: /* @__PURE__ */ j(Gd, {})
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/apps/AppRegistry.tsx
var nv = {
	Finder: x(() => import("./Finder-Cr3XrCsM.js").then((e) => ({ default: e.Finder }))),
	Terminal: x(() => import("./Terminal-s563vmhU.js").then((e) => ({ default: e.Terminal }))),
	Settings: x(() => import("./Settings-BaywCphx.js").then((e) => ({ default: e.Settings }))),
	Browser: x(() => import("./Browser-CzIEKD2s.js").then((e) => ({ default: e.Browser }))),
	TextEditor: x(() => import("./TextEditor-Br2dYWkq.js").then((e) => ({ default: e.TextEditor }))),
	Clock: x(() => import("./Clock-Dw7sNgbw.js").then((e) => ({ default: e.Clock }))),
	Notes: x(() => import("./Notes-B2rRlRIz.js").then((e) => ({ default: e.Notes }))),
	Photos: x(() => import("./Photos-CvFz5zSt.js").then((e) => ({ default: e.Photos }))),
	Music: x(() => import("./Music-CSjVO8g4.js").then((e) => ({ default: e.Music }))),
	Calendar: x(() => import("./Calendar-Ckf2E-jZ.js").then((e) => ({ default: e.Calendar }))),
	Messages: x(() => import("./Messages-D_GwpAAW.js").then((e) => ({ default: e.Messages }))),
	IframeApp: x(() => import("./IframeApp-CffwEqsW.js").then((e) => ({ default: e.IframeApp }))),
	MdxApp: x(() => import("./MdxApp-wE0YQry4.js").then((e) => ({ default: e.MdxApp })))
};
function rv() {
	return /* @__PURE__ */ j("div", {
		className: "flex items-center justify-center h-full w-full",
		children: /* @__PURE__ */ j(Bd, { className: "w-6 h-6 animate-spin text-black/30 dark:text-white/30" })
	});
}
function iv({ appId: e, windowId: n }) {
	let r = t((t) => t.apps[e]);
	if (!r) return /* @__PURE__ */ M("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["App not found: ", e]
	});
	if (r.render) {
		let t = r.render;
		return /* @__PURE__ */ j(g, {
			fallback: /* @__PURE__ */ j(rv, {}),
			children: /* @__PURE__ */ j(d, { children: /* @__PURE__ */ j(t, {
				appId: e,
				windowId: n
			}) })
		});
	}
	let i = r.component ? nv[r.component] : void 0;
	return i ? /* @__PURE__ */ j(g, {
		fallback: /* @__PURE__ */ j(rv, {}),
		children: /* @__PURE__ */ j(d, { children: /* @__PURE__ */ j(i, {
			appId: e,
			windowId: n
		}) })
	}) : /* @__PURE__ */ M("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: ["Component not registered: ", r.component ?? "(none)"]
	});
}
//#endregion
//#region src/components/mobile/MobileMenuSheet.tsx
function av({ menus: e, appId: t, open: n, onClose: r }) {
	let { t: i } = u(), [a, o] = k(null), s = S((e) => {
		e.action && window.dispatchEvent(new CustomEvent("app:menu:action", { detail: {
			appId: t,
			action: e.action
		} })), r();
	}, [t, r]);
	return typeof document > "u" ? null : re(/* @__PURE__ */ j(al, { children: n && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(td.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 bg-black/30 z-[2000]",
		onClick: r
	}, "backdrop"), /* @__PURE__ */ M(td.div, {
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
					children: q_(e.label, i)
				}), /* @__PURE__ */ j("div", {
					className: "rounded-xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.06]",
					children: e.items.map((e, t) => e.separator ? /* @__PURE__ */ j("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${t}`) : /* @__PURE__ */ j(ov, {
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
function ov({ item: e, t, onSelect: r, expandedKey: i, setExpandedKey: a, depth: o = 0 }) {
	let s = !!e.children && e.children.length > 0, c = i === e.key;
	return s ? /* @__PURE__ */ M("div", { children: [/* @__PURE__ */ M("button", {
		onClick: () => a(c ? null : e.key),
		style: { paddingLeft: 12 + o * 16 },
		className: "w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 transition-colors",
		children: [/* @__PURE__ */ j("span", { children: J_(e.label, t) }), /* @__PURE__ */ j(zd, { className: n("w-4 h-4 opacity-50 transition-transform", c && "rotate-180") })]
	}), /* @__PURE__ */ j(al, {
		initial: !1,
		children: c && /* @__PURE__ */ j(td.div, {
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
			children: e.children.map((e, n) => e.separator ? /* @__PURE__ */ j("div", { className: "h-px mx-3 bg-black/8 dark:bg-white/10" }, `sep-${n}`) : /* @__PURE__ */ j(ov, {
				item: e,
				t,
				onSelect: r,
				expandedKey: i,
				setExpandedKey: a,
				depth: o + 1
			}, e.key))
		})
	})] }) : /* @__PURE__ */ M("button", {
		disabled: e.disabled,
		onClick: () => r(e),
		style: { paddingLeft: 12 + o * 16 },
		className: n("w-full flex items-center justify-between py-2.5 pr-3 text-[15px] text-left active:bg-black/5 dark:active:bg-white/10 transition-colors", e.disabled ? "text-black/30 dark:text-white/30" : "text-black dark:text-white"),
		children: [/* @__PURE__ */ j("span", { children: J_(e.label, t) }), e.shortcut && /* @__PURE__ */ j("span", {
			className: "text-[12px] opacity-40 ml-4",
			children: e.shortcut
		})]
	});
}
//#endregion
//#region src/components/mobile/MobileAppViewer.tsx
var sv = _(null);
function cv() {
	return C(sv);
}
function lv({ statusBarHeight: e, navBarHeight: n, homeIndicatorHeight: r = 20 }) {
	let i = t((e) => e.windows), a = t((e) => e.apps), o = t((e) => e.closeWindow), [s, c] = k(!1), [l, u] = k(!1), d = Object.values(i).filter((e) => !e.isMinimized).sort((e, t) => t.zIndex - e.zIndex), f = d[0] ?? null, p = S(() => {
		f && o(f.id);
	}, [f, o]), m = f ? a[f.appId] : null, h = Fd(), g = nd(0), _ = ad(g, [0, -220], [1, .75]), v = ad(g, [0, -220], [0, 48]);
	return /* @__PURE__ */ j(al, { children: f && m && /* @__PURE__ */ M(td.div, {
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
			scale: _,
			y: g,
			borderRadius: v,
			transformOrigin: "center bottom"
		},
		drag: "y",
		dragControls: h,
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
			t.offset.y < -85 && d.forEach((e) => o(e.id)), Md(g, 0, {
				type: "spring",
				stiffness: 300,
				damping: 30
			});
		},
		children: [
			/* @__PURE__ */ j(al, {
				initial: !1,
				children: !s && /* @__PURE__ */ M(td.div, {
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
							onClick: p,
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
							children: m.name
						}),
						m.menuBarMenus && m.menuBarMenus.length > 0 ? /* @__PURE__ */ j("button", {
							onClick: () => u(!0),
							className: "w-5 h-5 flex items-center justify-center text-blue-500 active:opacity-60 transition-opacity",
							children: /* @__PURE__ */ j(Vd, { className: "w-5 h-5" })
						}) : /* @__PURE__ */ j("div", { className: "w-5" })
					]
				}, "app-header")
			}),
			/* @__PURE__ */ j("div", {
				className: "flex-1 overflow-hidden",
				children: /* @__PURE__ */ j(sv.Provider, {
					value: c,
					children: /* @__PURE__ */ j(iv, {
						appId: f.appId,
						windowId: f.id
					})
				})
			}),
			m.menuBarMenus && m.menuBarMenus.length > 0 && /* @__PURE__ */ j(av, {
				menus: m.menuBarMenus,
				appId: f.appId,
				open: l,
				onClose: () => u(!1)
			}),
			/* @__PURE__ */ j("div", { style: { height: n + r } }),
			/* @__PURE__ */ j("div", {
				onPointerDown: (e) => h.start(e),
				className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 flex items-center justify-center z-[1000] pointer-events-auto cursor-grab active:cursor-grabbing",
				children: /* @__PURE__ */ j("div", { className: "w-32 h-1.5 bg-black/30 dark:bg-white/35 hover:bg-black/50 dark:hover:bg-white/50 rounded-full" })
			})
		]
	}, f.id) });
}
//#endregion
export { Gd as A, nd as B, sf as C, Jd as D, Xd as E, Rd as F, Xn as G, al as H, Ld as I, L as K, Id as L, Ud as M, Hd as N, Yd as O, zd as P, Md as R, of as S, tf as T, Jc as U, td as V, G as W, Gf as _, ev as a, gf as b, Gh as c, Dh as d, Ch as f, oh as g, Sh as h, tv as i, Wd as j, Kd as k, Ph as l, wh as m, cv as n, B_ as o, Th as p, iv as r, e_ as s, lv as t, kh as u, Af as v, Qd as w, cf as x, wf as y, ad as z };
