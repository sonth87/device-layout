import { S as e, _ as t, a as n, b as r, c as i, d as a, f as o, g as s, h as c, i as l, l as u, m as d, n as f, o as p, p as m, r as h, s as g, t as _, u as v, v as y, x as b } from "./Combination-Cn4u3sR4.js";
import { t as x } from "./createLucideIcon-CUtIr1pR.js";
import * as S from "react";
import { jsx as C } from "react/jsx-runtime";
var w = x("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-collection@1.1.12_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_cd64a633f8e06003d23f19c2dfee53e7/node_modules/@radix-ui/react-collection/dist/index.mjs
function T(e) {
	let t = e + "CollectionProvider", [n, i] = r(t), [a, o] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: t, children: n } = e, r = S.useRef(null), i = S.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ C(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	s.displayName = t;
	let c = e + "CollectionSlot", l = y(c), u = S.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = b(t, o(c, n).collectionRef);
		return /* @__PURE__ */ C(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = y(d), m = S.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, a = S.useRef(null), s = b(t, a), c = o(d, n);
		return S.useEffect(() => (c.itemMap.set(a, {
			ref: a,
			...i
		}), () => void c.itemMap.delete(a))), /* @__PURE__ */ C(p, {
			[f]: "",
			ref: s,
			children: r
		});
	});
	m.displayName = d;
	function h(t) {
		let n = o(e + "CollectionConsumer", t);
		return S.useCallback(() => {
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
			ItemSlot: m
		},
		h,
		i
	];
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-direction@1.1.2_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-direction/dist/index.mjs
var E = S.createContext(void 0);
function D(e) {
	let t = S.useContext(E);
	return e || t || "ltr";
}
//#endregion
//#region ../sky-app/node_modules/.pnpm/@radix-ui+react-use-is-hydrated@0.1.1_@types+react@19.2.17_react@19.2.8/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var O = !1;
function k() {
	let [e, t] = S.useState(O);
	return S.useEffect(() => {
		O || (O = !0, t(!0));
	}, []), e;
}
var A = S.useSyncExternalStore;
function j() {
	return () => {};
}
function M() {
	return A(j, () => !0, () => !1);
}
var ee = typeof A == "function" ? M : k, N = Object.defineProperty, P = (e, t) => N(e, "name", {
	value: t,
	configurable: !0
}), F = "rovingFocusGroup.onEntryFocus", I = {
	bubbles: !1,
	cancelable: !0
}, L = "RovingFocusGroup", [R, z, te] = T(L), [ne, B] = r(L, [te]), [re, ie] = ne(L), ae = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ P(function(e, t) {
	return /* @__PURE__ */ C(R.Provider, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ C(R.Slot, {
			scope: e.__scopeRovingFocusGroup,
			children: /* @__PURE__ */ C(oe, {
				...e,
				ref: t
			})
		})
	});
}, "RovingFocusGroup")), oe = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ P(function(t, n) {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: l, defaultCurrentTabStopId: u, onCurrentTabStopIdChange: d, onEntryFocus: f, preventScrollOnEntryFocus: p = !1, ...m } = t, g = S.useRef(null), _ = b(n, g), v = D(o), [y, x] = h({
		prop: l,
		defaultProp: u ?? null,
		onChange: d,
		caller: L
	}), [w, T] = S.useState(!1), E = c(f), O = z(r), k = S.useRef(!1), [A, j] = S.useState(0);
	return S.useEffect(() => {
		let e = g.current;
		if (e) return e.addEventListener(F, E), () => e.removeEventListener(F, E);
	}, [E]), /* @__PURE__ */ C(re, {
		scope: r,
		orientation: i,
		dir: v,
		loop: a,
		currentTabStopId: y,
		onItemFocus: S.useCallback((e) => x(e), [x]),
		onItemShiftTab: S.useCallback(() => T(!0), []),
		onFocusableItemAdd: S.useCallback(() => j((e) => e + 1), []),
		onFocusableItemRemove: S.useCallback(() => j((e) => e - 1), []),
		children: /* @__PURE__ */ C(s.div, {
			tabIndex: w || A === 0 ? -1 : 0,
			"data-orientation": i,
			...m,
			ref: _,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: e(t.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: e(t.onFocus, (e) => {
				let t = !k.current;
				if (e.target === e.currentTarget && t && !w) {
					let t = new CustomEvent(F, I);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = O().filter((e) => e.focusable);
						V([
							e.find((e) => e.active),
							e.find((e) => e.id === y),
							...e
						].filter(Boolean).map((e) => e.ref.current), p);
					}
				}
				k.current = !1;
			}),
			onBlur: e(t.onBlur, () => T(!1))
		})
	});
}, "RovingFocusGroupImpl")), se = "RovingFocusGroupItem", ce = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ P(function(t, n) {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: o = !1, tabStopId: c, children: l, ...u } = t, d = v(), f = c || d, p = ie(se, r), m = p.currentTabStopId === f, h = z(r), { onFocusableItemAdd: g, onFocusableItemRemove: _, currentTabStopId: y } = p, b = ee();
	return a(() => {
		if (!(!b || !i)) return g(), () => _();
	}, [
		b,
		i,
		g,
		_
	]), S.useEffect(() => {
		if (!(b || !i)) return g(), () => _();
	}, [
		b,
		i,
		g,
		_
	]), /* @__PURE__ */ C(R.ItemSlot, {
		scope: r,
		id: f,
		focusable: i,
		active: o,
		children: /* @__PURE__ */ C(s.span, {
			tabIndex: m ? 0 : -1,
			"data-orientation": p.orientation,
			...u,
			ref: n,
			onMouseDown: e(t.onMouseDown, (e) => {
				i ? p.onItemFocus(f) : e.preventDefault();
			}),
			onFocus: e(t.onFocus, () => p.onItemFocus(f)),
			onKeyDown: e(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					p.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = de(e, p.orientation, p.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = h().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = p.loop ? fe(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => V(n));
				}
			}),
			children: typeof l == "function" ? l({
				isCurrentTabStop: m,
				hasTabStop: y != null
			}) : l
		})
	});
}, "RovingFocusGroupItem")), le = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ue(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
P(ue, "getDirectionAwareKey");
function de(e, t, n) {
	let r = ue(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return le[r];
}
P(de, "getFocusIntent");
function V(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
P(V, "focusFirst");
function fe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
P(fe, "wrapArray");
var pe = ae, me = ce, he = Object.defineProperty, H = (e, t) => he(e, "name", {
	value: t,
	configurable: !0
}), U = ["Enter", " "], ge = [
	"ArrowDown",
	"PageUp",
	"Home"
], _e = [
	"ArrowUp",
	"PageDown",
	"End"
], ve = [...ge, ..._e];
[...U], [...U];
var W = "Menu", [G, ye, be] = T(W), [K, xe] = r(W, [
	be,
	u,
	B
]), q = u(), Se = B(), [Ce, J] = K(W), [we, Y] = K(W), Te = /* @__PURE__ */ H((e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: o, modal: s = !0 } = e, l = q(t), [u, d] = S.useState(null), f = S.useRef(!1), p = c(o), m = D(a);
	return S.useEffect(() => {
		let e = /* @__PURE__ */ H(() => {
			f.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, "handleKeyDown"), t = /* @__PURE__ */ H(() => f.current = !1, "handlePointer");
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), S.useEffect(() => {
		if (!n) return;
		let e = /* @__PURE__ */ H(() => p(!1), "handleBlur");
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [n, p]), /* @__PURE__ */ C(i, {
		...l,
		children: /* @__PURE__ */ C(Ce, {
			scope: t,
			open: n,
			onOpenChange: p,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ C(we, {
				scope: t,
				onClose: S.useCallback(() => p(!1), [p]),
				isUsingKeyboardRef: f,
				dir: m,
				modal: s,
				children: r
			})
		})
	});
}, "Menu"), Ee = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(p, {
		...q(n),
		...r,
		ref: t
	});
}, "MenuAnchor")), De = "MenuPortal", [Oe, ke] = K(De, { forceMount: void 0 }), Ae = /* @__PURE__ */ H((e) => {
	let { __scopeMenu: t, forceMount: r, children: i, container: a } = e, o = J(De, t);
	return /* @__PURE__ */ C(Oe, {
		scope: t,
		forceMount: r,
		children: /* @__PURE__ */ C(l, {
			present: r || o.open,
			children: /* @__PURE__ */ C(n, {
				asChild: !0,
				container: a,
				children: i
			})
		})
	});
}, "MenuPortal"), X = "MenuContent", [je, Me] = K(X), Ne = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(e, t) {
	let n = ke(X, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = J(X, e.__scopeMenu), o = Y(X, e.__scopeMenu);
	return /* @__PURE__ */ C(G.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ C(l, {
			present: r || a.open,
			children: /* @__PURE__ */ C(G.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ C(Pe, {
					...i,
					ref: t
				}) : /* @__PURE__ */ C(Fe, {
					...i,
					ref: t
				})
			})
		})
	});
}, "MenuContent")), Pe = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(t, n) {
	let r = J(X, t.__scopeMenu), i = S.useRef(null), a = b(n, i);
	return S.useEffect(() => {
		let e = i.current;
		if (e) return f(e);
	}, []), /* @__PURE__ */ C(Le, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: e(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}, "MenuRootContentModal")), Fe = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(e, t) {
	let n = J(X, e.__scopeMenu);
	return /* @__PURE__ */ C(Le, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}, "MenuRootContentNonModal")), Ie = y("MenuContent.ScrollLock"), Le = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(t, n) {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: s, onCloseAutoFocus: c, disableOutsidePointerEvents: l, onEntryFocus: u, onEscapeKeyDown: f, onPointerDownOutside: p, onFocusOutside: h, onInteractOutside: v, onDismiss: y, disableOutsideScroll: x, ...w } = t, T = J(X, r), E = Y(X, r), D = q(r), O = Se(r), k = ye(r), [A, j] = S.useState(null), M = S.useRef(null), ee = b(n, M, T.onContentChange), N = S.useRef(0), P = S.useRef(""), F = S.useRef(0), I = S.useRef(null), L = S.useRef("right"), R = S.useRef(0), z = x ? _ : S.Fragment, te = x ? {
		as: Ie,
		allowPinchZoom: !0
	} : void 0, ne = /* @__PURE__ */ H((e) => {
		let t = P.current + e, n = k().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Qe(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(/* @__PURE__ */ H((function e(t) {
			P.current = t, window.clearTimeout(N.current), t !== "" && (N.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t), o && setTimeout(() => o.focus());
	}, "handleTypeaheadSearch");
	S.useEffect(() => () => window.clearTimeout(N.current), []), m();
	let B = S.useCallback((e) => L.current === I.current?.side && et(e, I.current?.area), []);
	return /* @__PURE__ */ C(je, {
		scope: r,
		searchRef: P,
		onItemEnter: S.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: S.useCallback((e) => {
			B(e) || (M.current?.focus(), j(null));
		}, [B]),
		onTriggerLeave: S.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: F,
		onPointerGraceIntentChange: S.useCallback((e) => {
			I.current = e;
		}, []),
		children: /* @__PURE__ */ C(z, {
			...te,
			children: /* @__PURE__ */ C(o, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: e(s, (e) => {
					e.preventDefault(), M.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: c,
				children: /* @__PURE__ */ C(d, {
					asChild: !0,
					disableOutsidePointerEvents: l,
					onEscapeKeyDown: f,
					onPointerDownOutside: p,
					onFocusOutside: h,
					onInteractOutside: v,
					onDismiss: y,
					children: /* @__PURE__ */ C(pe, {
						asChild: !0,
						...O,
						dir: E.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: A,
						onCurrentTabStopIdChange: j,
						onEntryFocus: e(u, (e) => {
							E.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ C(g, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Je(T.open),
							"data-radix-menu-content": "",
							dir: E.dir,
							...D,
							...w,
							ref: ee,
							style: {
								outline: "none",
								...w.style
							},
							onKeyDown: e(w.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && ne(e.key));
								let i = M.current;
								if (e.target !== i || !ve.includes(e.key)) return;
								e.preventDefault();
								let a = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								_e.includes(e.key) && a.reverse(), Ze(a);
							}),
							onBlur: e(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: e(t.onPointerMove, $((e) => {
								let t = e.target, n = R.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > R.current ? "right" : "left";
									L.current = t, R.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
}, "MenuContentImpl")), Z = "MenuItem", Re = "menu.itemSelect", ze = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(n, r) {
	let { disabled: i = !1, onSelect: a, ...o } = n, s = S.useRef(null), c = Y(Z, n.__scopeMenu), l = Me(Z, n.__scopeMenu), u = b(r, s), d = S.useRef(!1), f = /* @__PURE__ */ H(() => {
		let e = s.current;
		if (!i && e) {
			let n = new CustomEvent(Re, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Re, (e) => a?.(e), { once: !0 }), t(e, n), n.defaultPrevented ? d.current = !1 : c.onClose();
		}
	}, "handleSelect");
	return /* @__PURE__ */ C(Be, {
		...o,
		ref: u,
		disabled: i,
		onClick: e(n.onClick, f),
		onPointerDown: (e) => {
			n.onPointerDown?.(e), d.current = !0;
		},
		onPointerUp: e(n.onPointerUp, (e) => {
			d.current || e.currentTarget?.click();
		}),
		onKeyDown: e(n.onKeyDown, (e) => {
			i || e.target !== e.currentTarget || l.searchRef.current !== "" && e.key === " " || U.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
}, "MenuItem")), Be = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(t, n) {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, c = Me(Z, r), l = Se(r), u = S.useRef(null), d = b(n, u), [f, p] = S.useState(!1), [m, h] = S.useState("");
	return S.useEffect(() => {
		let e = u.current;
		e && h((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ C(G.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? m,
		children: /* @__PURE__ */ C(me, {
			asChild: !0,
			...l,
			focusable: !i,
			children: /* @__PURE__ */ C(s.div, {
				role: "menuitem",
				"data-highlighted": f ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: d,
				onPointerMove: e(t.onPointerMove, $((e) => {
					i ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: e(t.onPointerLeave, $((e) => c.onItemLeave(e))),
				onFocus: e(t.onFocus, () => p(!0)),
				onBlur: e(t.onBlur, () => p(!1))
			})
		})
	});
}, "MenuItemImpl")), [Ve, He] = K("MenuRadioGroup", {
	value: void 0,
	onValueChange: /* @__PURE__ */ H(() => {}, "onValueChange")
}), [Ue, We] = K("MenuItemIndicator", { checked: !1 }), Ge = /* @__PURE__ */ S.forwardRef(/* @__PURE__ */ H(function(e, t) {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ C(s.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
}, "MenuSeparator")), [Ke, qe] = K("MenuSub");
function Je(e) {
	return e ? "open" : "closed";
}
H(Je, "getOpenState");
function Ye(e) {
	return e === "indeterminate";
}
H(Ye, "isIndeterminate");
function Xe(e) {
	return Ye(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
H(Xe, "getCheckedState");
function Ze(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
H(Ze, "focusFirst");
function Q(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
H(Q, "wrapArray");
function Qe(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Q(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
H(Qe, "getNextMatch");
function $e(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
H($e, "isPointInPolygon");
function et(e, t) {
	return t ? $e({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
H(et, "isPointerInGraceArea");
function $(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
H($, "whenMouse");
var tt = Te, nt = Ee, rt = Ae, it = Ne, at = ze, ot = Ge;
//#endregion
export { tt as a, w as c, rt as i, it as n, ot as o, at as r, xe as s, nt as t };
