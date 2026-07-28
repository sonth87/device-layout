import * as e from "react";
import { useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i } from "react/jsx-runtime";
import * as a from "react-dom";
import o from "react-dom";
//#region \0rolldown/runtime.js
var s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, u = Object.prototype.hasOwnProperty, d = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, f = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), p = (e, t) => {
	let n = {};
	for (var r in e) s(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || s(n, Symbol.toStringTag, { value: "Module" }), n;
}, m = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = l(t), a = 0, o = i.length, d; a < o; a++) d = i[a], !u.call(e, d) && d !== n && s(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = c(t, d)) || r.enumerable
	});
	return e;
}, h = (e) => u.call(e, "module.exports") ? e["module.exports"] : m(s({}, "__esModule", { value: !0 }), e), g = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
typeof window < "u" && window.document && window.document.createElement;
function _(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function v(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function y(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = v(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : v(e[t], null);
			}
		};
	};
}
function b(...t) {
	return e.useCallback(y(...t), t);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-context/dist/index.mjs
function x(t, n = []) {
	let r = [];
	function a(n, a) {
		let o = e.createContext(a), s = r.length;
		r = [...r, a];
		let c = (n) => {
			let { scope: r, children: a, ...c } = n, l = r?.[t]?.[s] || o, u = e.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ i(l.Provider, {
				value: u,
				children: a
			});
		};
		c.displayName = n + "Provider";
		function l(r, i) {
			let c = i?.[t]?.[s] || o, l = e.useContext(c);
			if (l) return l;
			if (a !== void 0) return a;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [c, l];
	}
	let o = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return o.scopeName = t, [a, S(o, ...n)];
}
function S(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function C(t) {
	let n = /* @__PURE__ */ w(t), r = e.forwardRef((t, r) => {
		let { children: a, ...o } = t, s = e.Children.toArray(a), c = s.find(D);
		if (c) {
			let t = c.props.children, a = s.map((n) => n === c ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ i(n, {
				...o,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, a) : null
			});
		}
		return /* @__PURE__ */ i(n, {
			...o,
			ref: r,
			children: a
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function w(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = k(r), a = O(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? y(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var T = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function E(e) {
	let t = ({ children: e }) => /* @__PURE__ */ i(r, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = T, t;
}
function D(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === T;
}
function O(e, t) {
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
function k(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+re_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs
var A = [
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
].reduce((t, n) => {
	let r = /* @__PURE__ */ C(`Primitive.${n}`), a = e.forwardRef((e, t) => {
		let { asChild: a, ...o } = e, s = a ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ i(s, {
			...o,
			ref: t
		});
	});
	return a.displayName = `Primitive.${n}`, {
		...t,
		[n]: a
	};
}, {});
function j(e, t) {
	e && a.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function M(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function N(t, n = globalThis?.document) {
	let r = M(t);
	e.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14___3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var P = "DismissableLayer", ee = "dismissableLayer.update", te = "dismissableLayer.pointerDownOutside", ne = "dismissableLayer.focusOutside", re, F = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), ie = e.forwardRef((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(F), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = b(n, (e) => p(e)), v = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), x = v.indexOf(y), S = f ? v.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, w = S >= x, T = se((e) => {
		let t = e.target, n = [...d.branches].some((e) => e.contains(t));
		!w || n || (o?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), E = ce((e) => {
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m);
	return N((e) => {
		S === d.layers.size - 1 && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	}, m), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (re = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), le(), () => {
			r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = re);
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), le());
	}, [f, d]), e.useEffect(() => {
		let e = () => h({});
		return document.addEventListener(ee, e), () => document.removeEventListener(ee, e);
	}, []), /* @__PURE__ */ i(A.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: C ? w ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: _(t.onFocusCapture, E.onFocusCapture),
		onBlurCapture: _(t.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: _(t.onPointerDownCapture, T.onPointerDownCapture)
	});
});
ie.displayName = P;
var ae = "DismissableLayerBranch", oe = e.forwardRef((t, n) => {
	let r = e.useContext(F), a = e.useRef(null), o = b(n, a);
	return e.useEffect(() => {
		let e = a.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ i(A.div, {
		...t,
		ref: o
	});
});
oe.displayName = ae;
function se(t, n = globalThis?.document) {
	let r = M(t), i = e.useRef(!1), a = e.useRef(() => {});
	return e.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					ue(te, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function ce(t, n = globalThis?.document) {
	let r = M(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && ue(ne, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function le() {
	let e = new CustomEvent(ee);
	document.dispatchEvent(e);
}
function ue(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? j(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var de = 0;
function fe() {
	e.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? pe()), document.body.insertAdjacentElement("beforeend", e[1] ?? pe()), de++, () => {
			de === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), de--;
		};
	}, []);
}
function pe() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var me = "focusScope.autoFocusOnMount", he = "focusScope.autoFocusOnUnmount", ge = {
	bubbles: !1,
	cancelable: !0
}, _e = "FocusScope", ve = e.forwardRef((t, n) => {
	let { loop: r = !1, trapped: a = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = M(o), f = M(s), p = e.useRef(null), m = b(n, (e) => u(e)), h = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (a) {
			let e = function(e) {
				if (h.paused || !l) return;
				let t = e.target;
				l.contains(t) ? p.current = t : I(p.current, { select: !0 });
			}, t = function(e) {
				if (h.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || I(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && I(l);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		a,
		l,
		h.paused
	]), e.useEffect(() => {
		if (l) {
			Te.add(h);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(me, ge);
				l.addEventListener(me, d), l.dispatchEvent(t), t.defaultPrevented || (ye(Oe(xe(l)), { select: !0 }), document.activeElement === e && I(l));
			}
			return () => {
				l.removeEventListener(me, d), setTimeout(() => {
					let t = new CustomEvent(he, ge);
					l.addEventListener(he, f), l.dispatchEvent(t), t.defaultPrevented || I(e ?? document.body, { select: !0 }), l.removeEventListener(he, f), Te.remove(h);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		h
	]);
	let g = e.useCallback((e) => {
		if (!r && !a || h.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = be(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && I(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && I(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		a,
		h.paused
	]);
	return /* @__PURE__ */ i(A.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: g
	});
});
ve.displayName = _e;
function ye(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (I(r, { select: t }), document.activeElement !== n) return;
}
function be(e) {
	let t = xe(e);
	return [Se(t, e), Se(t.reverse(), e)];
}
function xe(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Se(e, t) {
	for (let n of e) if (!Ce(n, { upTo: t })) return n;
}
function Ce(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function we(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function I(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && we(e) && t && e.select();
	}
}
var Te = Ee();
function Ee() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = De(e, t), e.unshift(t);
		},
		remove(t) {
			e = De(e, t), e[0]?.resume();
		}
	};
}
function De(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Oe(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var L = globalThis?.document ? e.useLayoutEffect : () => {}, ke = e.useId || (() => void 0), Ae = 0;
function je(t) {
	let [n, r] = e.useState(ke());
	return L(() => {
		t || r((e) => e ?? String(Ae++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Me = [
	"top",
	"right",
	"bottom",
	"left"
], R = Math.min, z = Math.max, Ne = Math.round, Pe = Math.floor, B = (e) => ({
	x: e,
	y: e
}), Fe = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Ie(e, t, n) {
	return z(e, R(t, n));
}
function V(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function H(e) {
	return e.split("-")[0];
}
function Le(e) {
	return e.split("-")[1];
}
function Re(e) {
	return e === "x" ? "y" : "x";
}
function ze(e) {
	return e === "y" ? "height" : "width";
}
function U(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Be(e) {
	return Re(U(e));
}
function Ve(e, t, n) {
	n === void 0 && (n = !1);
	let r = Le(e), i = Be(e), a = ze(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Xe(o)), [o, Xe(o)];
}
function He(e) {
	let t = Xe(e);
	return [
		Ue(e),
		t,
		Ue(t)
	];
}
function Ue(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var We = ["left", "right"], Ge = ["right", "left"], Ke = ["top", "bottom"], qe = ["bottom", "top"];
function Je(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ge : We : t ? We : Ge;
		case "left":
		case "right": return t ? Ke : qe;
		default: return [];
	}
}
function Ye(e, t, n, r) {
	let i = Le(e), a = Je(H(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Ue)))), a;
}
function Xe(e) {
	let t = H(e);
	return Fe[t] + e.slice(t.length);
}
function Ze(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Qe(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ze(e);
}
function $e(e) {
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
function et(e, t, n) {
	let { reference: r, floating: i } = e, a = U(t), o = Be(t), s = ze(o), c = H(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (Le(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function tt(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = V(t, e), p = Qe(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = $e(await i.getClippingRect({
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
	}, y = $e(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var nt = 50, rt = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: tt
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = et(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < nt && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = et(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, it = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = V(e, t) || {};
		if (l == null) return {};
		let d = Qe(u), f = {
			x: n,
			y: r
		}, p = Be(i), m = ze(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = R(d[_], T), D = R(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Ie(O, A, k), M = !c.arrow && Le(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), at = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = V(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = H(r), _ = U(o), v = H(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Xe(o)] : He(o)), x = p !== "none";
			!d && x && b.push(...Ye(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Ve(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== U(t)) || T.every((e) => U(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = U(e.placement);
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
function ot(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function st(e) {
	return Me.some((t) => e[t] >= 0);
}
var ct = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = V(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ot(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: st(e)
					} };
				}
				case "escaped": {
					let e = ot(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: st(e)
					} };
				}
				default: return {};
			}
		}
	};
}, lt = /*#__PURE__*/ new Set(["left", "top"]);
async function ut(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = H(n), s = Le(n), c = U(n) === "y", l = lt.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = V(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var dt = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ut(t, e);
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
}, ft = function(e) {
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
			} }, ...l } = V(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = U(H(i)), p = Re(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Ie(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Ie(n, h, r);
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
}, pt = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = V(e, t), u = {
				x: n,
				y: r
			}, d = U(i), f = Re(d), p = u[f], m = u[d], h = V(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = lt.has(H(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, mt = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = V(e, t), u = await o.detectOverflow(t, l), d = H(i), f = Le(i), p = U(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = R(h - u[g], v), x = R(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = z(u.left, 0), t = z(u.right, 0), n = z(u.top, 0), r = z(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : z(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : z(u.top, u.bottom));
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
function ht() {
	return typeof window < "u";
}
function gt(e) {
	return _t(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function W(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function G(e) {
	return ((_t(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function _t(e) {
	return ht() ? e instanceof Node || e instanceof W(e).Node : !1;
}
function K(e) {
	return ht() ? e instanceof Element || e instanceof W(e).Element : !1;
}
function q(e) {
	return ht() ? e instanceof HTMLElement || e instanceof W(e).HTMLElement : !1;
}
function vt(e) {
	return !ht() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function yt(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Y(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function bt(e) {
	return /^(table|td|th)$/.test(gt(e));
}
function xt(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var St = /transform|translate|scale|rotate|perspective|filter/, Ct = /paint|layout|strict|content/, J = (e) => !!e && e !== "none", wt;
function Tt(e) {
	let t = K(e) ? Y(e) : e;
	return J(t.transform) || J(t.translate) || J(t.scale) || J(t.rotate) || J(t.perspective) || !Dt() && (J(t.backdropFilter) || J(t.filter)) || St.test(t.willChange || "") || Ct.test(t.contain || "");
}
function Et(e) {
	let t = X(e);
	for (; q(t) && !Ot(t);) {
		if (Tt(t)) return t;
		if (xt(t)) return null;
		t = X(t);
	}
	return null;
}
function Dt() {
	return wt ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), wt;
}
function Ot(e) {
	return /^(html|body|#document)$/.test(gt(e));
}
function Y(e) {
	return W(e).getComputedStyle(e);
}
function kt(e) {
	return K(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function X(e) {
	if (gt(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || vt(e) && e.host || G(e);
	return vt(t) ? t.host : t;
}
function At(e) {
	let t = X(e);
	return Ot(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : q(t) && yt(t) ? t : At(t);
}
function jt(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = At(e), i = r === e.ownerDocument?.body, a = W(r);
	if (i) {
		let e = Mt(a);
		return t.concat(a, a.visualViewport || [], yt(r) ? r : [], e && n ? jt(e) : []);
	} else return t.concat(r, jt(r, [], n));
}
function Mt(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Nt(e) {
	let t = Y(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = q(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ne(n) !== a || Ne(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Pt(e) {
	return K(e) ? e : e.contextElement;
}
function Ft(e) {
	let t = Pt(e);
	if (!q(t)) return B(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Nt(t), o = (a ? Ne(n.width) : n.width) / r, s = (a ? Ne(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var It = /*#__PURE__*/ B(0);
function Lt(e) {
	let t = W(e);
	return !Dt() || !t.visualViewport ? It : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Rt(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== W(e) ? !1 : t;
}
function Z(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Pt(e), o = B(1);
	t && (r ? K(r) && (o = Ft(r)) : o = Ft(e));
	let s = Rt(a, n, r) ? Lt(a) : B(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = W(a), t = r && K(r) ? W(r) : r, n = e, i = Mt(n);
		for (; i && r && t !== n;) {
			let e = Ft(i), t = i.getBoundingClientRect(), r = Y(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = W(i), i = Mt(n);
		}
	}
	return $e({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function zt(e, t) {
	let n = kt(e).scrollLeft;
	return t ? t.left + n : Z(G(e)).left + n;
}
function Bt(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - zt(e, n),
		y: n.top + t.scrollTop
	};
}
function Vt(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = G(r), s = t ? xt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = B(1), u = B(0), d = q(r);
	if ((d || !d && !a) && ((gt(r) !== "body" || yt(o)) && (c = kt(r)), d)) {
		let e = Z(r);
		l = Ft(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Bt(o, c) : B(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ht(e) {
	return Array.from(e.getClientRects());
}
function Ut(e) {
	let t = G(e), n = kt(e), r = e.ownerDocument.body, i = z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + zt(e), s = -n.scrollTop;
	return Y(r).direction === "rtl" && (o += z(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Wt = 25;
function Gt(e, t) {
	let n = W(e), r = G(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Dt();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = zt(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Wt && (a -= o);
	} else l <= Wt && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Kt(e, t) {
	let n = Z(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = q(e) ? Ft(e) : B(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function qt(e, t, n) {
	let r;
	if (t === "viewport") r = Gt(e, n);
	else if (t === "document") r = Ut(G(e));
	else if (K(t)) r = Kt(t, n);
	else {
		let n = Lt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return $e(r);
}
function Jt(e, t) {
	let n = X(e);
	return n === t || !K(n) || Ot(n) ? !1 : Y(n).position === "fixed" || Jt(n, t);
}
function Yt(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = jt(e, [], !1).filter((e) => K(e) && gt(e) !== "body"), i = null, a = Y(e).position === "fixed", o = a ? X(e) : e;
	for (; K(o) && !Ot(o);) {
		let t = Y(o), n = Tt(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || yt(o) && !n && Jt(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = X(o);
	}
	return t.set(e, r), r;
}
function Xt(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? xt(t) ? [] : Yt(t, this._c) : [].concat(n), r], o = qt(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = qt(t, a[e], i);
		s = z(n.top, s), c = R(n.right, c), l = R(n.bottom, l), u = z(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Zt(e) {
	let { width: t, height: n } = Nt(e);
	return {
		width: t,
		height: n
	};
}
function Qt(e, t, n) {
	let r = q(t), i = G(t), a = n === "fixed", o = Z(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = B(0);
	function l() {
		c.x = zt(i);
	}
	if (r || !r && !a) if ((gt(t) !== "body" || yt(i)) && (s = kt(t)), r) {
		let e = Z(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Bt(i, s) : B(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function $t(e) {
	return Y(e).position === "static";
}
function en(e, t) {
	if (!q(e) || Y(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return G(e) === n && (n = n.ownerDocument.body), n;
}
function tn(e, t) {
	let n = W(e);
	if (xt(e)) return n;
	if (!q(e)) {
		let t = X(e);
		for (; t && !Ot(t);) {
			if (K(t) && !$t(t)) return t;
			t = X(t);
		}
		return n;
	}
	let r = en(e, t);
	for (; r && bt(r) && $t(r);) r = en(r, t);
	return r && Ot(r) && $t(r) && !Tt(r) ? n : r || Et(e) || n;
}
var nn = async function(e) {
	let t = this.getOffsetParent || tn, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Qt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function rn(e) {
	return Y(e).direction === "rtl";
}
var an = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Vt,
	getDocumentElement: G,
	getClippingRect: Xt,
	getOffsetParent: tn,
	getElementRects: nn,
	getClientRects: Ht,
	getDimensions: Zt,
	getScale: Ft,
	isElement: K,
	isRTL: rn
};
function on(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sn(e, t) {
	let n = null, r, i = G(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Pe(d), h = Pe(i.clientWidth - (u + f)), g = Pe(i.clientHeight - (d + p)), _ = Pe(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: z(0, R(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !on(l, e.getBoundingClientRect()) && o(), y = !1;
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
function cn(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Pt(e), u = i || a ? [...l ? jt(l) : [], ...t ? jt(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? sn(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Z(e) : null;
	c && g();
	function g() {
		let t = Z(e);
		h && !on(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var ln = dt, un = ft, dn = at, fn = mt, pn = ct, mn = it, hn = pt, gn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: an,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return rt(e, t, {
		...i,
		platform: a
	});
}, _n = typeof document < "u" ? t : function() {};
function vn(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!vn(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !vn(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function yn(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bn(e, t) {
	let n = yn(e);
	return Math.round(t * n) / n;
}
function xn(t) {
	let n = e.useRef(t);
	return _n(() => {
		n.current = t;
	}), n;
}
function Sn(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: o, elements: { reference: s, floating: c } = {}, transform: l = !0, whileElementsMounted: u, open: d } = t, [f, p] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = e.useState(i);
	vn(m, i) || h(i);
	let [g, _] = e.useState(null), [v, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = s || g, C = c || v, w = e.useRef(null), T = e.useRef(null), E = e.useRef(f), D = u != null, O = xn(u), k = xn(o), A = xn(d), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), gn(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !vn(E.current, t) && (E.current = t, a.flushSync(() => {
				p(t);
			}));
		});
	}, [
		m,
		n,
		r,
		k,
		A
	]);
	_n(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = e.useRef(!1);
	_n(() => (M.current = !0, () => {
		M.current = !1;
	}), []), _n(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), ee = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = bn(P.floating, f.x), n = bn(P.floating, f.y);
		return l ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...yn(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		l,
		P.floating,
		f.x,
		f.y
	]);
	return e.useMemo(() => ({
		...f,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: ee
	}), [
		f,
		j,
		N,
		P,
		ee
	]);
}
var Cn = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : mn({
				element: r.current,
				padding: i
			}).fn(n) : r ? mn({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, wn = (e, t) => {
	let n = ln(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Tn = (e, t) => {
	let n = un(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, En = (e, t) => ({
	fn: hn(e).fn,
	options: [e, t]
}), Dn = (e, t) => {
	let n = dn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, On = (e, t) => {
	let n = fn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, kn = (e, t) => {
	let n = pn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, An = (e, t) => {
	let n = Cn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, jn = "Arrow", Mn = e.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: a = 5, ...o } = e;
	return /* @__PURE__ */ i(A.svg, {
		...o,
		ref: t,
		width: r,
		height: a,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ i("polygon", { points: "0,0 30,0 15,10" })
	});
});
Mn.displayName = jn;
var Nn = Mn;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Pn(t) {
	let [n, r] = e.useState(void 0);
	return L(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_13e0521d8aea7ebfbfb8bee1fb615c05/node_modules/@radix-ui/react-popper/dist/index.mjs
var Fn = "Popper", [In, Ln] = x(Fn), [Rn, zn] = In(Fn), Bn = (t) => {
	let { __scopePopper: n, children: r } = t, [a, o] = e.useState(null);
	return /* @__PURE__ */ i(Rn, {
		scope: n,
		anchor: a,
		onAnchorChange: o,
		children: r
	});
};
Bn.displayName = Fn;
var Vn = "PopperAnchor", Hn = e.forwardRef((t, n) => {
	let { __scopePopper: r, virtualRef: a, ...o } = t, s = zn(Vn, r), c = e.useRef(null), l = b(n, c), u = e.useRef(null);
	return e.useEffect(() => {
		let e = u.current;
		u.current = a?.current || c.current, e !== u.current && s.onAnchorChange(u.current);
	}), a ? null : /* @__PURE__ */ i(A.div, {
		...o,
		ref: l
	});
});
Hn.displayName = Vn;
var Un = "PopperContent", [Wn, Gn] = In(Un), Kn = e.forwardRef((t, n) => {
	let { __scopePopper: r, side: a = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: c = 0, arrowPadding: l = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: f = 0, sticky: p = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: g, ..._ } = t, v = zn(Un, r), [y, x] = e.useState(null), S = b(n, (e) => x(e)), [C, w] = e.useState(null), T = Pn(C), E = T?.width ?? 0, D = T?.height ?? 0, O = a + (s === "center" ? "" : "-" + s), k = typeof f == "number" ? f : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...f
	}, j = Array.isArray(d) ? d : [d], N = j.length > 0, P = {
		padding: k,
		boundary: j.filter(Xn),
		altBoundary: N
	}, { refs: ee, floatingStyles: te, placement: ne, isPositioned: re, middlewareData: F } = Sn({
		strategy: "fixed",
		placement: O,
		whileElementsMounted: (...e) => cn(...e, { animationFrame: h === "always" }),
		elements: { reference: v.anchor },
		middleware: [
			wn({
				mainAxis: o + D,
				alignmentAxis: c
			}),
			u && Tn({
				mainAxis: !0,
				crossAxis: !1,
				limiter: p === "partial" ? En() : void 0,
				...P
			}),
			u && Dn({ ...P }),
			On({
				...P,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			C && An({
				element: C,
				padding: l
			}),
			Zn({
				arrowWidth: E,
				arrowHeight: D
			}),
			m && kn({
				strategy: "referenceHidden",
				...P
			})
		]
	}), [ie, ae] = Qn(ne), oe = M(g);
	L(() => {
		re && oe?.();
	}, [re, oe]);
	let se = F.arrow?.x, ce = F.arrow?.y, le = F.arrow?.centerOffset !== 0, [ue, de] = e.useState();
	return L(() => {
		y && de(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ i("div", {
		ref: ee.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...te,
			transform: re ? te.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ue,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ i(Wn, {
			scope: r,
			placedSide: ie,
			onArrowChange: w,
			arrowX: se,
			arrowY: ce,
			shouldHideArrow: le,
			children: /* @__PURE__ */ i(A.div, {
				"data-side": ie,
				"data-align": ae,
				..._,
				ref: S,
				style: {
					..._.style,
					animation: re ? void 0 : "none"
				}
			})
		})
	});
});
Kn.displayName = Un;
var qn = "PopperArrow", Jn = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Yn = e.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, a = Gn(qn, n), o = Jn[a.placedSide];
	return /* @__PURE__ */ i("span", {
		ref: a.onArrowChange,
		style: {
			position: "absolute",
			left: a.arrowX,
			top: a.arrowY,
			[o]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[a.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[a.placedSide],
			visibility: a.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ i(Nn, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Yn.displayName = qn;
function Xn(e) {
	return e !== null;
}
var Zn = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Qn(n), u = {
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
function Qn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var $n = Bn, er = Hn, tr = Kn, nr = Yn, rr = "Portal", ir = e.forwardRef((t, n) => {
	let { container: r, ...a } = t, [s, c] = e.useState(!1);
	L(() => c(!0), []);
	let l = r || s && globalThis?.document?.body;
	return l ? o.createPortal(/* @__PURE__ */ i(A.div, {
		...a,
		ref: n
	}), l) : null;
});
ir.displayName = rr;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs
function ar(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var or = (t) => {
	let { present: n, children: r } = t, i = sr(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = b(i.ref, lr(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
or.displayName = "Presence";
function sr(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), [s, c] = ar(t ? "mounted" : "unmounted", {
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
	return e.useEffect(() => {
		let e = cr(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), L(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = cr(e);
			t ? c("MOUNT") : i === "none" || e?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, c]), L(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = cr(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = cr(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function cr(e) {
	return e?.animationName || "none";
}
function lr(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var ur = e.useInsertionEffect || L;
function dr({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = fr({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0, l = c ? t : a;
	{
		let n = e.useRef(t !== void 0);
		e.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, e.useCallback((e) => {
		if (c) {
			let n = pr(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
function fr({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return ur(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function pr(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var mr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = {}, vr = 0, yr = function(e) {
	return e && (e.host || yr(e.parentNode));
}, br = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = yr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, xr = function(e, t, n, r) {
	var i = br(t, Array.isArray(e) ? e : [e]);
	_r[n] || (_r[n] = /* @__PURE__ */ new WeakMap());
	var a = _r[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (hr.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				hr.set(e, c), a.set(e, l), o.push(e), c === 1 && i && gr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), vr++, function() {
		o.forEach(function(e) {
			var t = hr.get(e) - 1, i = a.get(e) - 1;
			hr.set(e, t), a.set(e, i), t || (gr.has(e) || e.removeAttribute(r), gr.delete(e)), i || e.removeAttribute(n);
		}), vr--, vr || (hr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = {});
	};
}, Sr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || mr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), xr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Q = function() {
	return Q = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Q.apply(this, arguments);
};
function Cr(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function wr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Tr = "right-scroll-bar-position", Er = "width-before-scroll-bar", Dr = "with-scroll-bars-hidden", Or = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js
function kr(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js
function Ar(e, t) {
	var r = n(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return r.value;
				},
				set current(e) {
					var t = r.value;
					t !== e && (r.value = e, r.callback(e, t));
				}
			}
		};
	})[0];
	return r.callback = t, r.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var jr = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Mr = /* @__PURE__ */ new WeakMap();
function Nr(e, t) {
	var n = Ar(t || null, function(t) {
		return e.forEach(function(e) {
			return kr(e, t);
		});
	});
	return jr(function() {
		var t = Mr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || kr(e, null);
			}), i.forEach(function(e) {
				r.has(e) || kr(e, a);
			});
		}
		Mr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js
function Pr(e) {
	return e;
}
function Fr(e, t) {
	t === void 0 && (t = Pr);
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
function Ir(e) {
	e === void 0 && (e = {});
	var t = Fr(null);
	return t.options = Q({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js
var Lr = function(t) {
	var n = t.sideCar, r = Cr(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Q({}, r));
};
Lr.isSideCarExport = !0;
function Rr(e, t) {
	return e.useMedium(t), Lr;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js
var zr = Ir(), Br = function() {}, Vr = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Br,
		onWheelCapture: Br,
		onTouchMoveCapture: Br
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Cr(t, [
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
	]), S = p, C = Nr([r, n]), w = Q(Q({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: zr,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Q(Q({}, w), { ref: C })) : e.createElement(y, Q({}, w, {
		className: l,
		ref: C
	}), c));
});
Vr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Vr.classNames = {
	fullWidth: Er,
	zeroRight: Tr
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Hr, Ur = function() {
	if (Hr) return Hr;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.14_react@19.2.4/node_modules/react-style-singleton/dist/es2015/singleton.js
function Wr() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ur();
	return t && e.setAttribute("nonce", t), e;
}
function Gr(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Kr(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var qr = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Wr()) && (Gr(t, n), Kr(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Jr = function() {
	var t = qr();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Yr = function() {
	var e = Jr();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Xr = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Zr = function(e) {
	return parseInt(e || "", 10) || 0;
}, Qr = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Zr(n),
		Zr(r),
		Zr(i)
	];
}, $r = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Xr;
	var t = Qr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ei = Yr(), ti = "data-scroll-locked", ni = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Dr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ti}] {
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
  
  .${Tr} {
    right: ${s}px ${r};
  }
  
  .${Er} {
    margin-right: ${s}px ${r};
  }
  
  .${Tr} .${Tr} {
    right: 0 ${r};
  }
  
  .${Er} .${Er} {
    margin-right: 0 ${r};
  }
  
  body[${ti}] {
    ${Or}: ${s}px;
  }
`;
}, ri = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, ii = function() {
	e.useEffect(function() {
		return document.body.setAttribute(ti, (ri() + 1).toString()), function() {
			var e = ri() - 1;
			e <= 0 ? document.body.removeAttribute(ti) : document.body.setAttribute(ti, e.toString());
		};
	}, []);
}, ai = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	ii();
	var o = e.useMemo(function() {
		return $r(a);
	}, [a]);
	return e.createElement(ei, { styles: ni(o, !n, a, r ? "" : "!important") });
}, oi = !1;
if (typeof window < "u") try {
	var si = Object.defineProperty({}, "passive", { get: function() {
		return oi = !0, !0;
	} });
	window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
} catch {
	oi = !1;
}
var ci = oi ? { passive: !1 } : !1, li = function(e) {
	return e.tagName === "TEXTAREA";
}, ui = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !li(e) && n[t] === "visible");
}, di = function(e) {
	return ui(e, "overflowY");
}, fi = function(e) {
	return ui(e, "overflowX");
}, pi = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), gi(e, r)) {
			var i = _i(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, mi = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, hi = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, gi = function(e, t) {
	return e === "v" ? di(t) : fi(t);
}, _i = function(e, t) {
	return e === "v" ? mi(t) : hi(t);
}, vi = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, yi = function(e, t, n, r, i) {
	var a = vi(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = _i(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && gi(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, bi = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xi = function(e) {
	return [e.deltaX, e.deltaY];
}, Si = function(e) {
	return e && "current" in e ? e.current : e;
}, Ci = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, wi = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ti = 0, $ = [];
function Ei(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Ti++)[0], o = e.useState(Yr)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = wr([t.lockRef.current], (t.shards || []).map(Si), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = bi(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = pi(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = pi(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return yi(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!$.length || $[$.length - 1] !== o)) {
			var r = "deltaY" in t ? xi(t) : bi(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Ci(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Si).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Di(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = bi(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, xi(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, bi(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return $.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, ci), document.addEventListener("touchmove", l, ci), document.addEventListener("touchstart", d, ci), function() {
			$ = $.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, ci), document.removeEventListener("touchmove", l, ci), document.removeEventListener("touchstart", d, ci);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: wi(a) }) : null, m ? e.createElement(ai, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Di(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Oi = Rr(zr, Ei), ki = e.forwardRef(function(t, n) {
	return e.createElement(Vr, Q({}, t, {
		ref: n,
		sideCar: Oi
	}));
});
ki.classNames = Vr.classNames;
//#endregion
export { _ as C, g as D, p as E, h as O, b as S, d as T, j as _, ir as a, x as b, tr as c, je as d, ve as f, A as g, M as h, or as i, $n as l, ie as m, Sr as n, er as o, fe as p, dr as r, nr as s, ki as t, Ln as u, C as v, f as w, y as x, E as y };
