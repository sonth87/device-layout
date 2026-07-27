import * as e from "react";
import { useLayoutEffect as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import * as i from "react-dom";
//#region \0rolldown/runtime.js
var a = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, c = Object.prototype.hasOwnProperty, l = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, u = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), d = (e, t) => {
	let n = {};
	for (var r in e) a(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || a(n, Symbol.toStringTag, { value: "Module" }), n;
}, f = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = s(t), l = 0, u = i.length, d; l < u; l++) d = i[l], !c.call(e, d) && d !== n && a(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(r = o(t, d)) || r.enumerable
	});
	return e;
}, p = (e) => c.call(e, "module.exports") ? e["module.exports"] : f(a({}, "__esModule", { value: !0 }), e), m = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), h = Object.defineProperty, g = (e, t) => h(e, "name", {
	value: t,
	configurable: !0
}), _ = !!(typeof window < "u" && window.document && window.document.createElement);
function v(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ g(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
g(v, "composeEventHandlers");
function y(e) {
	if (!_) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
g(y, "getOwnerWindow");
function b(e) {
	if (!_) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
g(b, "getOwnerDocument");
function x(e, t = !1) {
	let { activeElement: n } = b(e);
	if (!n?.nodeName) return null;
	if (S(n) && n.contentDocument) return x(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = b(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
g(x, "getActiveElement");
function S(e) {
	return e.tagName === "IFRAME";
}
g(S, "isFrame");
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function C(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function w(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = C(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : C(e[t], null);
			}
		};
	};
}
function T(...t) {
	return e.useCallback(w(...t), t);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-context@1.2.0_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-context/dist/index.mjs
function E(t, n = []) {
	let i = [];
	function a(n, a) {
		let o = e.createContext(a);
		o.displayName = n + "Context";
		let s = i.length;
		i = [...i, a];
		let c = (n) => {
			let { scope: i, children: a, ...c } = n, l = i?.[t]?.[s] || o, u = e.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ r(l.Provider, {
				value: u,
				children: a
			});
		};
		c.displayName = n + "Provider";
		function l(r, i, c = {}) {
			let { optional: l = !1 } = c, u = i?.[t]?.[s] || o, d = e.useContext(u);
			if (d) return d;
			if (a !== void 0) return a;
			if (!l) throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [c, l];
	}
	let o = () => {
		let n = i.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return o.scopeName = t, [a, D(o, ...n)];
}
function D(...t) {
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
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-slot@1.3.0_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function O(t) {
	let n = e.forwardRef((n, r) => {
		let { children: i, ...a } = n, o = null, s = !1, c = [];
		ne(i) && typeof oe == "function" && (i = oe(i._payload)), e.Children.forEach(i, (e) => {
			if (N(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				ne(n) && typeof oe == "function" && (n = oe(n._payload)), o = j(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = e.cloneElement(o, void 0, c) : !s && e.Children.count(i) === 1 && e.isValidElement(i) && (o = i);
		let l = o ? ee(o) : void 0, u = T(r, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? ae(t) : ie(t));
			return i;
		}
		let d = M(a, o.props ?? {});
		return o.type !== e.Fragment && (d.ref = r ? u : l), e.cloneElement(o, d);
	});
	return n.displayName = `${t}.Slot`, n;
}
var k = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = (e) => "child" in e ? e.children(e.child) : e.children;
	return t.displayName = `${e}.Slottable`, t.__radixId = k, t;
}
var j = (t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
};
function M(e, t) {
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
function ee(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function N(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === k;
}
var te = Symbol.for("react.lazy");
function ne(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === te && "_payload" in e && re(e._payload);
}
function re(e) {
	return typeof e == "object" && !!e && "then" in e;
}
var ie = (e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, ae = (e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, oe = e.use, se = [
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
	let i = /* @__PURE__ */ O(`Primitive.${n}`), a = e.forwardRef((e, t) => {
		let { asChild: a, ...o } = e, s = a ? i : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ r(s, {
			...o,
			ref: t
		});
	});
	return a.displayName = `Primitive.${n}`, {
		...t,
		[n]: a
	};
}, {});
function ce(e, t) {
	e && i.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function P(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.16_@types+react-dom@19.2.3_@types+react@19.2.17___649c3170f442aa0d0152f23ab9e3ae73/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var le = Object.defineProperty, F = (e, t) => le(e, "name", {
	value: t,
	configurable: !0
}), ue = "dismissableLayer.update", de = "dismissableLayer.pointerDownOutside", fe = "dismissableLayer.focusOutside", pe, me = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), he = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ F(function(t, n) {
	let { disableOutsidePointerEvents: i = !1, deferPointerDownOutside: a = !1, onEscapeKeyDown: o, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d } = t, f = e.useContext(me), [p, m] = e.useState(null), h = p?.ownerDocument ?? globalThis?.document, [, g] = e.useState({}), _ = T(n, m), y = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), x = b ? y.indexOf(b) : -1, S = p ? y.indexOf(p) : -1, C = f.layersWithOutsidePointerEventsDisabled.size > 0, w = S >= x, E = e.useRef(!1), D = ve((e) => {
		s?.(e), l?.(e), e.defaultPrevented || u?.();
	}, {
		ownerDocument: h,
		deferPointerDownOutside: a,
		isDeferredPointerDownOutsideRef: E,
		dismissableSurfaces: f.dismissableSurfaces,
		shouldHandlePointerDownOutside: e.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...f.branches].some((t) => t.contains(e));
			return w && !t;
		}, [f.branches, w])
	}), O = ye((e) => {
		if (a && E.current) return;
		let t = e.target;
		[...f.branches].some((e) => e.contains(t)) || (c?.(e), l?.(e), e.defaultPrevented || u?.());
	}, h), k = p ? S === y.length - 1 : !1, A = P((e) => {
		e.key === "Escape" && (o?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	});
	return e.useEffect(() => {
		if (k) return h.addEventListener("keydown", A, { capture: !0 }), () => h.removeEventListener("keydown", A, { capture: !0 });
	}, [
		h,
		k,
		A
	]), e.useEffect(() => {
		if (p) return i && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (pe = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), be(), () => {
			i && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = pe));
		};
	}, [
		p,
		h,
		i,
		f
	]), e.useEffect(() => () => {
		p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), be());
	}, [p, f]), e.useEffect(() => {
		let e = /* @__PURE__ */ F(() => g({}), "handleUpdate");
		return document.addEventListener(ue, e), () => document.removeEventListener(ue, e);
	}, []), /* @__PURE__ */ r(se.div, {
		...d,
		ref: _,
		style: {
			pointerEvents: C ? w ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: v(t.onFocusCapture, O.onFocusCapture),
		onBlurCapture: v(t.onBlurCapture, O.onBlurCapture),
		onPointerDownCapture: v(t.onPointerDownCapture, D.onPointerDownCapture)
	});
}, "DismissableLayer"));
function ge() {
	let t = e.useContext(me), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
F(ge, "useDismissableLayerSurface");
var _e = /* @__PURE__ */ F(() => !0, "IS_TRUE");
function ve(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = _e } = n, c = P(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		F(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		F(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		F(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		F(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ F((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || xe(de, c, p, { discrete: !0 });
				};
				if (F(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
					r.removeEventListener("click", f.current), e(), l.current = !1;
					return;
				}
				let p = { originalEvent: n };
				u.current = !0, a.current = i && n.button === 0, d.current.clear(), !i || n.button !== 0 ? o() : (r.removeEventListener("click", f.current), f.current = o, r.addEventListener("click", f.current, { once: !0 }));
			} else r.removeEventListener("click", f.current), e();
			l.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) r.addEventListener(e, n, !0), r.addEventListener(e, p);
		let g = window.setTimeout(() => {
			r.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), r.removeEventListener("pointerdown", m), r.removeEventListener("click", f.current);
			for (let e of h) r.removeEventListener(e, n, !0), r.removeEventListener(e, p);
		};
	}, [
		r,
		c,
		i,
		a,
		o,
		s
	]), { onPointerDownCapture: /* @__PURE__ */ F(() => l.current = !0, "onPointerDownCapture") };
}
F(ve, "usePointerDownOutside");
function ye(t, n = globalThis?.document) {
	let r = P(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ F((e) => {
			e.target && !i.current && xe(fe, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ F(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ F(() => i.current = !1, "onBlurCapture")
	};
}
F(ye, "useFocusOutside");
function be() {
	let e = new CustomEvent(ue);
	document.dispatchEvent(e);
}
F(be, "dispatchUpdate");
function xe(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ce(i, a) : i.dispatchEvent(a);
}
F(xe, "handleAndDispatchCustomEvent");
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Se = 0, Ce = null;
function we() {
	e.useEffect(() => {
		Ce ||= {
			start: Te(),
			end: Te()
		};
		let { start: e, end: t } = Ce;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Se++, () => {
			Se === 1 && (Ce?.start.remove(), Ce?.end.remove(), Ce = null), Se = Math.max(0, Se - 1);
		};
	}, []);
}
function Te() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.13_@types+react-dom@19.2.3_@types+react@19.2.17__@types_768c806f186a3b023a77e6fe8439c667/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Ee = Object.defineProperty, I = (e, t) => Ee(e, "name", {
	value: t,
	configurable: !0
}), De = "focusScope.autoFocusOnMount", Oe = "focusScope.autoFocusOnUnmount", ke = {
	bubbles: !1,
	cancelable: !0
}, Ae = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ I(function(t, n) {
	let { loop: i = !1, trapped: a = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = P(o), f = P(s), p = e.useRef(null), m = T(n, u), h = e.useRef({
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
				l.contains(t) ? p.current = t : L(p.current, { select: !0 });
			}, t = function(e) {
				if (h.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || L(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && L(l);
			};
			I(e, "handleFocusIn"), I(t, "handleFocusOut"), I(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			Le.add(h);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(De, ke);
				l.addEventListener(De, d), l.dispatchEvent(t), t.defaultPrevented || (je(Be(Ne(l)), { select: !0 }), document.activeElement === e && L(l));
			}
			return () => {
				l.removeEventListener(De, d), setTimeout(() => {
					let t = new CustomEvent(Oe, ke);
					l.addEventListener(Oe, f), l.dispatchEvent(t), t.defaultPrevented || L(e ?? document.body, { select: !0 }), l.removeEventListener(Oe, f), Le.remove(h);
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
		if (!i && !a || h.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [r, a] = Me(t);
			r && a ? !e.shiftKey && n === a ? (e.preventDefault(), i && L(r, { select: !0 })) : e.shiftKey && n === r && (e.preventDefault(), i && L(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		i,
		a,
		h.paused
	]);
	return /* @__PURE__ */ r(se.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: g
	});
}, "FocusScope"));
function je(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (L(r, { select: t }), document.activeElement !== n) return;
}
I(je, "focusFirst");
function Me(e) {
	let t = Ne(e);
	return [Pe(t, e), Pe(t.reverse(), e)];
}
I(Me, "getTabbableEdges");
function Ne(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ I((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
I(Ne, "getTabbableCandidates");
function Pe(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Fe(r, { upTo: t }))) return r;
}
I(Pe, "findVisible");
function Fe(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
I(Fe, "isHidden");
function Ie(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
I(Ie, "isSelectableInput");
function L(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Ie(e) && t && e.select();
	}
}
I(L, "focus");
var Le = Re();
function Re() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = ze(e, t), e.unshift(t);
		},
		remove(t) {
			e = ze(e, t), e[0]?.resume();
		}
	};
}
I(Re, "createFocusScopesStack");
function ze(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
I(ze, "arrayRemove");
function Be(e) {
	return e.filter((e) => e.tagName !== "A");
}
I(Be, "removeLinks");
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var R = globalThis?.document ? e.useLayoutEffect : () => {}, Ve = e.useId || (() => void 0), He = 0;
function Ue(t) {
	let [n, r] = e.useState(Ve());
	return R(() => {
		t || r((e) => e ?? String(He++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var We = [
	"top",
	"right",
	"bottom",
	"left"
], z = Math.min, B = Math.max, Ge = Math.round, Ke = Math.floor, V = (e) => ({
	x: e,
	y: e
}), qe = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Je(e, t, n) {
	return B(e, z(t, n));
}
function H(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function U(e) {
	return e.split("-")[0];
}
function Ye(e) {
	return e.split("-")[1];
}
function Xe(e) {
	return e === "x" ? "y" : "x";
}
function Ze(e) {
	return e === "y" ? "height" : "width";
}
function W(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Qe(e) {
	return Xe(W(e));
}
function $e(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ye(e), i = Qe(e), a = Ze(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = ct(o)), [o, ct(o)];
}
function et(e) {
	let t = ct(e);
	return [
		tt(e),
		t,
		tt(t)
	];
}
function tt(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var nt = ["left", "right"], rt = ["right", "left"], it = ["top", "bottom"], at = ["bottom", "top"];
function ot(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? rt : nt : t ? nt : rt;
		case "left":
		case "right": return t ? it : at;
		default: return [];
	}
}
function st(e, t, n, r) {
	let i = Ye(e), a = ot(U(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(tt)))), a;
}
function ct(e) {
	let t = U(e);
	return qe[t] + e.slice(t.length);
}
function lt(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function ut(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : lt(e);
}
function dt(e) {
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
//#region ../sky-app/node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ft(e, t, n) {
	let { reference: r, floating: i } = e, a = W(t), o = Qe(t), s = Ze(o), c = U(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Ye(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function pt(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = H(t, e), p = ut(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = dt(await i.getClippingRect({
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
	}, y = dt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var mt = 50, ht = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: pt
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ft(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < mt && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ft(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, gt = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = H(e, t) || {};
		if (l == null) return {};
		let d = ut(u), f = {
			x: n,
			y: r
		}, p = Qe(i), m = Ze(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = z(d[_], T), D = z(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = Je(E, k, O), j = !c.arrow && Ye(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), _t = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = H(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = U(r), _ = W(o), v = U(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [ct(o)] : et(o)), x = p !== "none";
			!d && x && b.push(...st(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = $e(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== W(t)) || T.every((e) => W(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = W(e.placement);
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
function vt(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function yt(e) {
	return We.some((t) => e[t] >= 0);
}
var bt = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = H(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = vt(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: yt(e)
					} };
				}
				case "escaped": {
					let e = vt(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: yt(e)
					} };
				}
				default: return {};
			}
		}
	};
}, xt = /*#__PURE__*/ new Set(["left", "top"]);
async function St(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = U(n), s = Ye(n), c = W(n) === "y", l = xt.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = H(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Ct = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await St(t, e);
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
}, wt = function(e) {
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
			} }, ...l } = H(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = W(i), p = Xe(f), m = u[p], h = u[f], g = (e, t) => Je(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Tt = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = H(e, t), u = {
				x: n,
				y: r
			}, d = W(i), f = Xe(d), p = u[f], m = u[d], h = H(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = xt.has(U(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Et = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = H(e, t), c = await i.detectOverflow(t, s), l = U(n), u = Ye(n), d = W(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = z(p - c[m], g), y = z(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * B(c.left, c.right) : S = p - 2 * B(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Dt() {
	return typeof window < "u";
}
function Ot(e) {
	return kt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function G(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
	return ((kt(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function kt(e) {
	return Dt() ? e instanceof Node || e instanceof G(e).Node : !1;
}
function q(e) {
	return Dt() ? e instanceof Element || e instanceof G(e).Element : !1;
}
function J(e) {
	return Dt() ? e instanceof HTMLElement || e instanceof G(e).HTMLElement : !1;
}
function At(e) {
	return !Dt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof G(e).ShadowRoot;
}
function jt(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = X(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Mt(e) {
	return /^(table|td|th)$/.test(Ot(e));
}
function Nt(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Pt = /transform|translate|scale|rotate|perspective|filter/, Ft = /paint|layout|strict|content/, Y = (e) => !!e && e !== "none", It;
function Lt(e) {
	let t = q(e) ? X(e) : e;
	return Y(t.transform) || Y(t.translate) || Y(t.scale) || Y(t.rotate) || Y(t.perspective) || !zt() && (Y(t.backdropFilter) || Y(t.filter)) || Pt.test(t.willChange || "") || Ft.test(t.contain || "");
}
function Rt(e) {
	let t = Ht(e);
	for (; J(t) && !Bt(t);) {
		if (Lt(t)) return t;
		if (Nt(t)) return null;
		t = Ht(t);
	}
	return null;
}
function zt() {
	return It ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), It;
}
function Bt(e) {
	return /^(html|body|#document)$/.test(Ot(e));
}
function X(e) {
	return G(e).getComputedStyle(e);
}
function Vt(e) {
	return q(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ht(e) {
	if (Ot(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || At(e) && e.host || K(e);
	return At(t) ? t.host : t;
}
function Ut(e) {
	let t = Ht(e);
	return Bt(t) ? (e.ownerDocument || e).body : J(t) && jt(t) ? t : Ut(t);
}
function Wt(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Ut(e), i = r === e.ownerDocument?.body, a = G(r);
	if (i) {
		let e = Gt(a);
		return t.concat(a, a.visualViewport || [], jt(r) ? r : [], e && n ? Wt(e) : []);
	} else return t.concat(r, Wt(r, [], n));
}
function Gt(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Kt(e) {
	let t = X(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = J(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ge(n) !== a || Ge(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function qt(e) {
	return q(e) ? e : e.contextElement;
}
function Jt(e) {
	let t = qt(e);
	if (!J(t)) return V(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Kt(t), o = (a ? Ge(n.width) : n.width) / r, s = (a ? Ge(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Yt = /*#__PURE__*/ V(0);
function Xt(e) {
	let t = G(e);
	return !zt() || !t.visualViewport ? Yt : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Zt(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === G(e);
}
function Qt(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = qt(e), o = V(1);
	t && (r ? q(r) && (o = Jt(r)) : o = Jt(e));
	let s = Zt(a, n, r) ? Xt(a) : V(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = G(a), t = q(r) ? G(r) : r, n = e, i = Gt(n);
		for (; i && t !== n;) {
			let e = Jt(i), t = i.getBoundingClientRect(), r = X(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = G(i), i = Gt(n);
		}
	}
	return dt({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function $t(e, t) {
	let n = Vt(e).scrollLeft;
	return t ? t.left + n : Qt(K(e)).left + n;
}
function en(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - $t(e, n),
		y: n.top + t.scrollTop
	};
}
function tn(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = K(r), s = t ? Nt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = V(1), u = V(0), d = J(r);
	if ((d || !a) && ((Ot(r) !== "body" || jt(o)) && (c = Vt(r)), d)) {
		let e = Qt(r);
		l = Jt(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? en(o, c) : V(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function nn(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function rn(e) {
	let t = Vt(e), n = e.ownerDocument.body, r = B(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = B(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + $t(e), o = -t.scrollTop;
	return X(n).direction === "rtl" && (a += B(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var an = 25;
function on(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = G(e), a = K(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !zt() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if ($t(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= an && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function sn(e, t) {
	let n = Qt(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Jt(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function cn(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = on(e, n, t);
	else if (t === "document") r = rn(K(e));
	else if (q(t)) r = sn(t, n);
	else {
		let n = Xt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return dt(r);
}
function ln(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Wt(e, [], !1).filter((e) => q(e) && Ot(e) !== "body"), i = null, a = X(e).position === "fixed", o = a ? Ht(e) : e;
	for (; q(o) && !Bt(o);) {
		let e = X(o), t = Lt(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Ht(o);
	}
	return t.set(e, r), r;
}
function un(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Nt(t) ? [] : ln(t, this._c) : [].concat(n), r], o = cn(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = cn(t, a[e], i);
		s = B(n.top, s), c = z(n.right, c), l = z(n.bottom, l), u = B(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function dn(e) {
	let { width: t, height: n } = Kt(e);
	return {
		width: t,
		height: n
	};
}
function fn(e, t, n) {
	let r = J(t), i = K(t), a = n === "fixed", o = Qt(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = V(0);
	if ((r || !a) && ((Ot(t) !== "body" || jt(i)) && (s = Vt(t)), r)) {
		let e = Qt(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = $t(i));
	let l = i && !r && !a ? en(i, s) : V(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function pn(e) {
	return X(e).position === "static";
}
function mn(e, t) {
	if (!J(e) || X(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return K(e) === n && (n = n.ownerDocument.body), n;
}
function hn(e, t) {
	let n = G(e);
	if (Nt(e)) return n;
	if (!J(e)) {
		let t = Ht(e);
		for (; t && !Bt(t);) {
			if (q(t) && !pn(t)) return t;
			t = Ht(t);
		}
		return n;
	}
	let r = mn(e, t);
	for (; r && Mt(r) && pn(r);) r = mn(r, t);
	return r && Bt(r) && pn(r) && !Lt(r) ? n : r || Rt(e) || n;
}
var gn = async function(e) {
	let t = this.getOffsetParent || hn, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: fn(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function _n(e) {
	return X(e).direction === "rtl";
}
var vn = {
	convertOffsetParentRelativeRectToViewportRelativeRect: tn,
	getDocumentElement: K,
	getClippingRect: un,
	getOffsetParent: hn,
	getElementRects: gn,
	getClientRects: nn,
	getDimensions: dn,
	getScale: Jt,
	isElement: q,
	isRTL: _n
};
function yn(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function bn(e, t, n) {
	let r = null, i, a = K(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Ke(d), h = Ke(a.clientWidth - (u + f)), g = Ke(a.clientHeight - (d + p)), _ = Ke(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: B(0, z(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!yn(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = G(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function xn(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = qt(e), u = i || a ? [...l ? Wt(l) : [], ...t ? Wt(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? bn(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Qt(e) : null;
	c && g();
	function g() {
		let t = Qt(e);
		h && !yn(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Sn = Ct, Cn = wt, wn = _t, Tn = Et, En = bt, Dn = gt, On = Tt, kn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...vn,
		...i.platform,
		_c: r
	};
	return ht(e, t, {
		...i,
		platform: a
	});
}, An = typeof document < "u" ? t : function() {};
function jn(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!jn(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !jn(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Mn(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nn(e, t) {
	let n = Mn(e);
	return Math.round(t * n) / n;
}
function Pn(t) {
	let n = e.useRef(t);
	return An(() => {
		n.current = t;
	}), n;
}
function Fn(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: o, elements: { reference: s, floating: c } = {}, transform: l = !0, whileElementsMounted: u, open: d } = t, [f, p] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = e.useState(a);
	jn(m, a) || h(a);
	let [g, _] = e.useState(null), [v, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = s || g, C = c || v, w = e.useRef(null), T = e.useRef(null), E = e.useRef(f), D = u != null, O = Pn(u), k = Pn(o), A = Pn(d), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), kn(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !jn(E.current, t) && (E.current = t, i.flushSync(() => {
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
	An(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = e.useRef(!1);
	An(() => (M.current = !0, () => {
		M.current = !1;
	}), []), An(() => {
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
	let ee = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), N = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), te = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!N.floating) return e;
		let t = Nn(N.floating, f.x), n = Nn(N.floating, f.y);
		return l ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Mn(N.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		l,
		N.floating,
		f.x,
		f.y
	]);
	return e.useMemo(() => ({
		...f,
		update: j,
		refs: ee,
		elements: N,
		floatingStyles: te
	}), [
		f,
		j,
		ee,
		N,
		te
	]);
}
var In = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Dn({
				element: r.current,
				padding: i
			}).fn(n) : r ? Dn({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Ln = (e, t) => {
	let n = Sn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Rn = (e, t) => {
	let n = Cn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, zn = (e, t) => ({
	fn: On(e).fn,
	options: [e, t]
}), Bn = (e, t) => {
	let n = wn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Vn = (e, t) => {
	let n = Tn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Hn = (e, t) => {
	let n = En(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Un = (e, t) => {
	let n = In(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-size@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Wn(t) {
	let [n, r] = e.useState(void 0);
	return R(() => {
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
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-popper@1.3.4_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react_3d921a158020d95ee681731d004fb3ed/node_modules/@radix-ui/react-popper/dist/index.mjs
var Gn = Object.defineProperty, Z = (e, t) => Gn(e, "name", {
	value: t,
	configurable: !0
}), Kn = "Popper", [qn, Jn] = E(Kn), [Yn, Xn] = qn(Kn), Zn = /* @__PURE__ */ Z((t) => {
	let { __scopePopper: n, children: i } = t, [a, o] = e.useState(null), [s, c] = e.useState(void 0);
	return /* @__PURE__ */ r(Yn, {
		scope: n,
		anchor: a,
		onAnchorChange: o,
		placementState: s,
		setPlacementState: c,
		children: i
	});
}, "Popper"), Qn = "PopperAnchor", $n = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Z(function(t, n) {
	let { __scopePopper: i, virtualRef: a, ...o } = t, s = Xn(Qn, i), c = e.useRef(null), l = s.onAnchorChange, u = T(n, e.useCallback((e) => {
		c.current = e, e && l(e);
	}, [l])), d = e.useRef(null);
	e.useEffect(() => {
		if (!a) return;
		let e = d.current;
		d.current = a.current, e !== d.current && l(d.current);
	});
	let f = s.placementState && or(s.placementState), p = f?.[0], m = f?.[1];
	return a ? null : /* @__PURE__ */ r(se.div, {
		"data-radix-popper-side": p,
		"data-radix-popper-align": m,
		...o,
		ref: u
	});
}, "PopperAnchor")), er = "PopperContent", [tr, nr] = qn(er), rr = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Z(function(t, n) {
	let { __scopePopper: i, side: a = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: c = 0, arrowPadding: l = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: f = 0, sticky: p = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: g, ..._ } = t, v = Xn(er, i), [y, b] = e.useState(null), x = T(n, b), [S, C] = e.useState(null), w = Wn(S), E = w?.width ?? 0, D = w?.height ?? 0, O = a + (s === "center" ? "" : "-" + s), k = typeof f == "number" ? f : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...f
	}, A = Array.isArray(d) ? d : [d], j = A.length > 0, M = {
		padding: k,
		boundary: A.filter(ir),
		altBoundary: j
	}, { refs: ee, floatingStyles: N, placement: te, isPositioned: ne, middlewareData: re } = Fn({
		strategy: "fixed",
		placement: O,
		whileElementsMounted: /* @__PURE__ */ Z((...e) => xn(...e, { animationFrame: h === "always" }), "whileElementsMounted"),
		elements: { reference: v.anchor },
		middleware: [
			Ln({
				mainAxis: o + D,
				alignmentAxis: c
			}),
			u && Rn({
				mainAxis: !0,
				crossAxis: !1,
				limiter: p === "partial" ? zn() : void 0,
				...M
			}),
			u && Bn({ ...M }),
			Vn({
				...M,
				apply: /* @__PURE__ */ Z(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && Un({
				element: S,
				padding: l
			}),
			ar({
				arrowWidth: E,
				arrowHeight: D
			}),
			m && Hn({
				strategy: "referenceHidden",
				...M,
				boundary: j ? M.boundary : void 0
			})
		]
	}), ie = v.setPlacementState;
	R(() => (ie(te), () => {
		ie(void 0);
	}), [te, ie]);
	let [ae, oe] = or(te), ce = P(g);
	R(() => {
		ne && ce?.();
	}, [ne, ce]);
	let le = re.arrow?.x, F = re.arrow?.y, ue = re.arrow?.centerOffset !== 0, [de, fe] = e.useState();
	return R(() => {
		y && fe(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ r("div", {
		ref: ee.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: ne ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: de,
			"--radix-popper-transform-origin": [re.transformOrigin?.x, re.transformOrigin?.y].join(" "),
			...re.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ r(tr, {
			scope: i,
			placedSide: ae,
			placedAlign: oe,
			onArrowChange: C,
			arrowX: le,
			arrowY: F,
			shouldHideArrow: ue,
			children: /* @__PURE__ */ r(se.div, {
				"data-side": ae,
				"data-align": oe,
				..._,
				ref: x,
				style: {
					..._.style,
					animation: ne ? _.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function ir(e) {
	return e !== null;
}
Z(ir, "isNotNull");
var ar = /* @__PURE__ */ Z((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = or(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function or(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Z(or, "getSideAndAlignFromPlacement");
var sr = Zn, cr = $n, lr = rr, ur = Object.defineProperty, dr = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => ur(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: a, ...o } = t, [s, c] = e.useState(!1);
	R(() => c(!0), []);
	let l = a || s && globalThis?.document?.body;
	return l ? i.createPortal(/* @__PURE__ */ r(se.div, {
		...o,
		ref: n
	}), l) : null;
}, "Portal")), fr = Object.defineProperty, Q = (e, t) => fr(e, "name", {
	value: t,
	configurable: !0
});
function pr(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
Q(pr, "useStateMachine");
var mr = /* @__PURE__ */ Q((t) => {
	let { present: n, children: r } = t, i = hr(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = _r(i.ref, yr(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function hr(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = pr(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? vr(i.current), s.current = void 0) : o.current = "none";
	}, [c]), R(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = vr(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), R(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ Q((r) => {
				let o = vr(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Q((e) => {
				e.target === n && (o.current = vr(i.current));
			}, "handleAnimationStart");
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else l("ANIMATION_END");
	}, [n, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: e.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				i.current = t, s.current = vr(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
Q(hr, "usePresence");
function gr(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Q(gr, "setRef");
function _r(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = gr(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : gr(t[e], null);
			}
		};
	}, []);
}
Q(_r, "useStableComposedRefs");
function vr(e) {
	return e?.animationName || "none";
}
Q(vr, "getAnimationName");
function yr(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Q(yr, "getElementRef");
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-effect-event@0.0.3_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var br = e.useEffectEvent, xr = e.useInsertionEffect;
function Sr(t) {
	if (typeof br == "function") return br(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof xr == "function" ? xr(() => {
		n.current = t;
	}) : R(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.4_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Cr = Object.defineProperty, wr = (e, t) => Cr(e, "name", {
	value: t,
	configurable: !0
}), Tr = e.useInsertionEffect || R;
function Er({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ wr(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = Dr({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = Or(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
wr(Er, "useControllableState");
function Dr({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return Tr(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
wr(Dr, "useUncontrolledState");
function Or(e) {
	return typeof e == "function";
}
wr(Or, "isFunction");
var kr = Symbol("RADIX:SYNC_STATE");
function Ar(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = Sr(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === kr) return {
			...e,
			state: n.state
		};
		let r = t(e, n);
		return l && !Object.is(r.state, e.state) && u(r.state), r;
	}, ...d), m = f.state, h = e.useRef(m);
	e.useEffect(() => {
		h.current !== m && (h.current = m, l || u(m));
	}, [
		m,
		h,
		l
	]);
	let g = e.useMemo(() => a === void 0 ? f : {
		...f,
		state: a
	}, [f, a]);
	return e.useEffect(() => {
		l && !Object.is(a, f.state) && p({
			type: kr,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
wr(Ar, "useControllableStateReducer");
//#endregion
//#region ../sky-app/node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var jr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Mr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Pr = {}, Fr = 0, Ir = function(e) {
	return e && (e.host || Ir(e.parentNode));
}, Lr = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ir(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Rr = function(e, t, n, r) {
	var i = Lr(t, Array.isArray(e) ? e : [e]);
	Pr[n] || (Pr[n] = /* @__PURE__ */ new WeakMap());
	var a = Pr[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Mr.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Mr.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Nr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Fr++, function() {
		o.forEach(function(e) {
			var t = Mr.get(e) - 1, i = a.get(e) - 1;
			Mr.set(e, t), a.set(e, i), t || (Nr.has(e) || e.removeAttribute(r), Nr.delete(e)), i || e.removeAttribute(n);
		}), Fr--, Fr || (Mr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Pr = {});
	};
}, zr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || jr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Rr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, $ = function() {
	return $ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, $.apply(this, arguments);
};
function Br(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Vr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Hr = "right-scroll-bar-position", Ur = "width-before-scroll-bar", Wr = "with-scroll-bars-hidden", Gr = "--removed-body-scroll-bar-size";
//#endregion
//#region ../sky-app/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Kr(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useRef.js
function qr(e, t) {
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
//#region ../sky-app/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.8/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Jr = typeof window < "u" ? e.useLayoutEffect : e.useEffect, Yr = /* @__PURE__ */ new WeakMap();
function Xr(e, t) {
	var n = qr(t || null, function(t) {
		return e.forEach(function(e) {
			return Kr(e, t);
		});
	});
	return Jr(function() {
		var t = Yr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Kr(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Kr(e, a);
			});
		}
		Yr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/use-sidecar/dist/es2015/medium.js
function Zr(e) {
	return e;
}
function Qr(e, t) {
	t === void 0 && (t = Zr);
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
function $r(e) {
	e === void 0 && (e = {});
	var t = Qr(null);
	return t.options = $({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.8/node_modules/use-sidecar/dist/es2015/exports.js
var ei = function(t) {
	var n = t.sideCar, r = Br(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, $({}, r));
};
ei.isSideCarExport = !0;
function ti(e, t) {
	return e.useMedium(t), ei;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/medium.js
var ni = $r(), ri = function() {}, ii = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: ri,
		onWheelCapture: ri,
		onTouchMoveCapture: ri
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Br(t, [
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
	]), S = p, C = Xr([r, n]), w = $($({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: ni,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), $($({}, w), { ref: C })) : e.createElement(y, $({}, w, {
		className: l,
		ref: C
	}), c));
});
ii.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ii.classNames = {
	fullWidth: Ur,
	zeroRight: Hr
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var ai, oi = function() {
	if (ai) return ai;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../sky-app/node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.8/node_modules/react-style-singleton/dist/es2015/singleton.js
function si() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = oi();
	return t && e.setAttribute("nonce", t), e;
}
function ci(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function li(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var ui = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = si()) && (ci(t, n), li(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, di = function() {
	var t = ui();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, fi = function() {
	var e = di();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, pi = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, mi = function(e) {
	return parseInt(e || "", 10) || 0;
}, hi = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		mi(n),
		mi(r),
		mi(i)
	];
}, gi = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return pi;
	var t = hi(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, _i = fi(), vi = "data-scroll-locked", yi = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Wr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${vi}] {
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
  
  .${Hr} {
    right: ${s}px ${r};
  }
  
  .${Ur} {
    margin-right: ${s}px ${r};
  }
  
  .${Hr} .${Hr} {
    right: 0 ${r};
  }
  
  .${Ur} .${Ur} {
    margin-right: 0 ${r};
  }
  
  body[${vi}] {
    ${Gr}: ${s}px;
  }
`;
}, bi = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, xi = function() {
	e.useEffect(function() {
		return document.body.setAttribute(vi, (bi() + 1).toString()), function() {
			var e = bi() - 1;
			e <= 0 ? document.body.removeAttribute(vi) : document.body.setAttribute(vi, e.toString());
		};
	}, []);
}, Si = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	xi();
	var o = e.useMemo(function() {
		return gi(a);
	}, [a]);
	return e.createElement(_i, { styles: yi(o, !n, a, r ? "" : "!important") });
}, Ci = !1;
if (typeof window < "u") try {
	var wi = Object.defineProperty({}, "passive", { get: function() {
		return Ci = !0, !0;
	} });
	window.addEventListener("test", wi, wi), window.removeEventListener("test", wi, wi);
} catch {
	Ci = !1;
}
var Ti = Ci ? { passive: !1 } : !1, Ei = function(e) {
	return e.tagName === "TEXTAREA";
}, Di = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ei(e) && n[t] === "visible");
}, Oi = function(e) {
	return Di(e, "overflowY");
}, ki = function(e) {
	return Di(e, "overflowX");
}, Ai = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Ni(e, r)) {
			var i = Pi(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, ji = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Mi = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Ni = function(e, t) {
	return e === "v" ? Oi(t) : ki(t);
}, Pi = function(e, t) {
	return e === "v" ? ji(t) : Mi(t);
}, Fi = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Ii = function(e, t, n, r, i) {
	var a = Fi(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Pi(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Ni(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Li = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ri = function(e) {
	return [e.deltaX, e.deltaY];
}, zi = function(e) {
	return e && "current" in e ? e.current : e;
}, Bi = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Vi = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Hi = 0, Ui = [];
function Wi(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Hi++)[0], o = e.useState(fi)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Vr([t.lockRef.current], (t.shards || []).map(zi), !0).filter(Boolean);
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
		var n = Li(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Ai(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Ai(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return Ii(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!Ui.length || Ui[Ui.length - 1] !== o)) {
			var r = "deltaY" in t ? Ri(t) : Li(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Bi(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(zi).filter(Boolean).filter(function(e) {
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
			shadowParent: Gi(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Li(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Ri(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Li(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Ui.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Ti), document.addEventListener("touchmove", l, Ti), document.addEventListener("touchstart", d, Ti), function() {
			Ui = Ui.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Ti), document.removeEventListener("touchmove", l, Ti), document.removeEventListener("touchstart", d, Ti);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Vi(a) }) : null, m ? e.createElement(Si, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Gi(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.17_react@19.2.8/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Ki = ti(ni, Wi), qi = e.forwardRef(function(t, n) {
	return e.createElement(ii, $({}, t, {
		ref: n,
		sideCar: Ki
	}));
});
qi.classNames = ii.classNames;
//#endregion
export { u as C, p as D, m as E, v as S, d as T, ce as _, dr as a, E as b, sr as c, R as d, Ae as f, se as g, P as h, mr as i, Jn as l, he as m, zr as n, cr as o, we as p, Er as r, lr as s, qi as t, Ue as u, O as v, l as w, T as x, A as y };
