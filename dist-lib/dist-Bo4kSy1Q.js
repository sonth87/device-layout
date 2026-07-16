import { C as e, S as t, _ as n, a as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, x } from "./Combination-dkRdWOFm.js";
import { t as S } from "./createLucideIcon--WjuKCts.js";
import * as C from "react";
import w from "react";
import { jsx as T } from "react/jsx-runtime";
var E = S("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.14__@types+r_161926fa2509d0b7370b60b8bb4eb8b0/node_modules/@radix-ui/react-collection/dist/index.mjs
function D(e) {
	let n = e + "CollectionProvider", [r, a] = i(n), [o, s] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), c = (e) => {
		let { scope: t, children: n } = e, r = w.useRef(null), i = w.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ T(o, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	c.displayName = n;
	let l = e + "CollectionSlot", u = b(l), d = w.forwardRef((e, n) => {
		let { scope: r, children: i } = e, a = t(n, s(l, r).collectionRef);
		return /* @__PURE__ */ T(u, {
			ref: a,
			children: i
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = b(f), h = w.forwardRef((e, n) => {
		let { scope: r, children: i, ...a } = e, o = w.useRef(null), c = t(n, o), l = s(f, r);
		return w.useEffect(() => (l.itemMap.set(o, {
			ref: o,
			...a
		}), () => void l.itemMap.delete(o))), /* @__PURE__ */ T(m, {
			[p]: "",
			ref: c,
			children: i
		});
	});
	h.displayName = f;
	function g(t) {
		let n = s(e + "CollectionConsumer", t);
		return w.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${p}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: c,
			Slot: d,
			ItemSlot: h
		},
		g,
		a
	];
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-direction/dist/index.mjs
var O = C.createContext(void 0);
function k(e) {
	let t = C.useContext(O);
	return e || t || "ltr";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@type_4eeb29c998b846c35358e2f929e7490e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var A = "rovingFocusGroup.onEntryFocus", ee = {
	bubbles: !1,
	cancelable: !0
}, j = "RovingFocusGroup", [M, N, P] = D(j), [te, F] = i(j, [P]), [I, L] = te(j), R = C.forwardRef((e, t) => /* @__PURE__ */ T(M.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ T(M.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ T(ne, {
			...e,
			ref: t
		})
	})
}));
R.displayName = j;
var ne = C.forwardRef((n, r) => {
	let { __scopeRovingFocusGroup: i, orientation: a, loop: o = !1, dir: s, currentTabStopId: u, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...h } = n, _ = C.useRef(null), v = t(r, _), y = k(s), [b, x] = g({
		prop: u,
		defaultProp: d ?? null,
		onChange: f,
		caller: j
	}), [S, w] = C.useState(!1), E = l(p), D = N(i), O = C.useRef(!1), [M, P] = C.useState(0);
	return C.useEffect(() => {
		let e = _.current;
		if (e) return e.addEventListener(A, E), () => e.removeEventListener(A, E);
	}, [E]), /* @__PURE__ */ T(I, {
		scope: i,
		orientation: a,
		dir: y,
		loop: o,
		currentTabStopId: b,
		onItemFocus: C.useCallback((e) => x(e), [x]),
		onItemShiftTab: C.useCallback(() => w(!0), []),
		onFocusableItemAdd: C.useCallback(() => P((e) => e + 1), []),
		onFocusableItemRemove: C.useCallback(() => P((e) => e - 1), []),
		children: /* @__PURE__ */ T(c.div, {
			tabIndex: S || M === 0 ? -1 : 0,
			"data-orientation": a,
			...h,
			ref: v,
			style: {
				outline: "none",
				...n.style
			},
			onMouseDown: e(n.onMouseDown, () => {
				O.current = !0;
			}),
			onFocus: e(n.onFocus, (e) => {
				let t = !O.current;
				if (e.target === e.currentTarget && t && !S) {
					let t = new CustomEvent(A, ee);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = D().filter((e) => e.focusable);
						oe([
							e.find((e) => e.active),
							e.find((e) => e.id === b),
							...e
						].filter(Boolean).map((e) => e.ref.current), m);
					}
				}
				O.current = !1;
			}),
			onBlur: e(n.onBlur, () => w(!1))
		})
	});
}), z = "RovingFocusGroupItem", B = C.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: s, children: l, ...u } = t, d = o(), f = s || d, p = L(z, r), m = p.currentTabStopId === f, h = N(r), { onFocusableItemAdd: g, onFocusableItemRemove: _, currentTabStopId: v } = p;
	return C.useEffect(() => {
		if (i) return g(), () => _();
	}, [
		i,
		g,
		_
	]), /* @__PURE__ */ T(M.ItemSlot, {
		scope: r,
		id: f,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ T(c.span, {
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
				let t = ae(e, p.orientation, p.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = h().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = p.loop ? se(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => oe(n));
				}
			}),
			children: typeof l == "function" ? l({
				isCurrentTabStop: m,
				hasTabStop: v != null
			}) : l
		})
	});
});
B.displayName = z;
var re = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function ie(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function ae(e, t, n) {
	let r = ie(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return re[r];
}
function oe(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function se(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var ce = R, le = B, V = ["Enter", " "], ue = [
	"ArrowDown",
	"PageUp",
	"Home"
], de = [
	"ArrowUp",
	"PageDown",
	"End"
], fe = [...ue, ...de], pe = {
	ltr: [...V, "ArrowRight"],
	rtl: [...V, "ArrowLeft"]
}, me = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, H = "Menu", [U, he, ge] = D(H), [W, _e] = i(H, [
	ge,
	y,
	F
]), G = y(), ve = F(), [ye, K] = W(H), [be, q] = W(H), xe = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = G(t), [c, u] = C.useState(null), f = C.useRef(!1), p = l(a), m = k(i);
	return C.useEffect(() => {
		let e = () => {
			f.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => f.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ T(d, {
		...s,
		children: /* @__PURE__ */ T(ye, {
			scope: t,
			open: n,
			onOpenChange: p,
			content: c,
			onContentChange: u,
			children: /* @__PURE__ */ T(be, {
				scope: t,
				onClose: C.useCallback(() => p(!1), [p]),
				isUsingKeyboardRef: f,
				dir: m,
				modal: o,
				children: r
			})
		})
	});
};
xe.displayName = H;
var Se = "MenuAnchor", Ce = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ T(m, {
		...G(n),
		...r,
		ref: t
	});
});
Ce.displayName = Se;
var we = "MenuPortal", [Te, Ee] = W(we, { forceMount: void 0 }), De = (e) => {
	let { __scopeMenu: t, forceMount: n, children: i, container: a } = e, o = K(we, t);
	return /* @__PURE__ */ T(Te, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ T(u, {
			present: n || o.open,
			children: /* @__PURE__ */ T(r, {
				asChild: !0,
				container: a,
				children: i
			})
		})
	});
};
De.displayName = we;
var J = "MenuContent", [Oe, ke] = W(J), Ae = C.forwardRef((e, t) => {
	let n = Ee(J, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = K(J, e.__scopeMenu), o = q(J, e.__scopeMenu);
	return /* @__PURE__ */ T(U.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ T(u, {
			present: r || a.open,
			children: /* @__PURE__ */ T(U.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ T(je, {
					...i,
					ref: t
				}) : /* @__PURE__ */ T(Me, {
					...i,
					ref: t
				})
			})
		})
	});
}), je = C.forwardRef((n, r) => {
	let i = K(J, n.__scopeMenu), a = C.useRef(null), o = t(r, a);
	return C.useEffect(() => {
		let e = a.current;
		if (e) return p(e);
	}, []), /* @__PURE__ */ T(Pe, {
		...n,
		ref: o,
		trapFocus: i.open,
		disableOutsidePointerEvents: i.open,
		disableOutsideScroll: !0,
		onFocusOutside: e(n.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => i.onOpenChange(!1)
	});
}), Me = C.forwardRef((e, t) => {
	let n = K(J, e.__scopeMenu);
	return /* @__PURE__ */ T(Pe, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Ne = b("MenuContent.ScrollLock"), Pe = C.forwardRef((n, r) => {
	let { __scopeMenu: i, loop: o = !1, trapFocus: c, onOpenAutoFocus: l, onCloseAutoFocus: u, disableOutsidePointerEvents: d, onEntryFocus: p, onEscapeKeyDown: m, onPointerDownOutside: g, onFocusOutside: _, onInteractOutside: y, onDismiss: b, disableOutsideScroll: x, ...S } = n, w = K(J, i), E = q(J, i), D = G(i), O = ve(i), k = he(i), [A, ee] = C.useState(null), j = C.useRef(null), M = t(r, j, w.onContentChange), N = C.useRef(0), P = C.useRef(""), te = C.useRef(0), F = C.useRef(null), I = C.useRef("right"), L = C.useRef(0), R = x ? v : C.Fragment, ne = x ? {
		as: Ne,
		allowPinchZoom: !0
	} : void 0, z = (e) => {
		let t = P.current + e, n = k().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = mt(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			P.current = t, window.clearTimeout(N.current), t !== "" && (N.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	C.useEffect(() => () => window.clearTimeout(N.current), []), h();
	let B = C.useCallback((e) => I.current === F.current?.side && gt(e, F.current?.area), []);
	return /* @__PURE__ */ T(Oe, {
		scope: i,
		searchRef: P,
		onItemEnter: C.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		onItemLeave: C.useCallback((e) => {
			B(e) || (j.current?.focus(), ee(null));
		}, [B]),
		onTriggerLeave: C.useCallback((e) => {
			B(e) && e.preventDefault();
		}, [B]),
		pointerGraceTimerRef: te,
		onPointerGraceIntentChange: C.useCallback((e) => {
			F.current = e;
		}, []),
		children: /* @__PURE__ */ T(R, {
			...ne,
			children: /* @__PURE__ */ T(s, {
				asChild: !0,
				trapped: c,
				onMountAutoFocus: e(l, (e) => {
					e.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: u,
				children: /* @__PURE__ */ T(f, {
					asChild: !0,
					disableOutsidePointerEvents: d,
					onEscapeKeyDown: m,
					onPointerDownOutside: g,
					onFocusOutside: _,
					onInteractOutside: y,
					onDismiss: b,
					children: /* @__PURE__ */ T(ce, {
						asChild: !0,
						...O,
						dir: E.dir,
						orientation: "vertical",
						loop: o,
						currentTabStopId: A,
						onCurrentTabStopIdChange: ee,
						onEntryFocus: e(p, (e) => {
							E.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ T(a, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": ut(w.open),
							"data-radix-menu-content": "",
							dir: E.dir,
							...D,
							...S,
							ref: M,
							style: {
								outline: "none",
								...S.style
							},
							onKeyDown: e(S.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && z(e.key));
								let i = j.current;
								if (e.target !== i || !fe.includes(e.key)) return;
								e.preventDefault();
								let a = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								de.includes(e.key) && a.reverse(), ft(a);
							}),
							onBlur: e(n.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: e(n.onPointerMove, $((e) => {
								let t = e.target, n = L.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > L.current ? "right" : "left";
									I.current = t, L.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
Ae.displayName = J;
var Fe = "MenuGroup", Ie = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ T(c.div, {
		role: "group",
		...r,
		ref: t
	});
});
Ie.displayName = Fe;
var Le = "MenuLabel", Re = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ T(c.div, {
		...r,
		ref: t
	});
});
Re.displayName = Le;
var Y = "MenuItem", ze = "menu.itemSelect", X = C.forwardRef((r, i) => {
	let { disabled: a = !1, onSelect: o, ...s } = r, c = C.useRef(null), l = q(Y, r.__scopeMenu), u = ke(Y, r.__scopeMenu), d = t(i, c), f = C.useRef(!1), p = () => {
		let e = c.current;
		if (!a && e) {
			let t = new CustomEvent(ze, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(ze, (e) => o?.(e), { once: !0 }), n(e, t), t.defaultPrevented ? f.current = !1 : l.onClose();
		}
	};
	return /* @__PURE__ */ T(Be, {
		...s,
		ref: d,
		disabled: a,
		onClick: e(r.onClick, p),
		onPointerDown: (e) => {
			r.onPointerDown?.(e), f.current = !0;
		},
		onPointerUp: e(r.onPointerUp, (e) => {
			f.current || e.currentTarget?.click();
		}),
		onKeyDown: e(r.onKeyDown, (e) => {
			let t = u.searchRef.current !== "";
			a || t && e.key === " " || V.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
X.displayName = Y;
var Be = C.forwardRef((n, r) => {
	let { __scopeMenu: i, disabled: a = !1, textValue: o, ...s } = n, l = ke(Y, i), u = ve(i), d = C.useRef(null), f = t(r, d), [p, m] = C.useState(!1), [h, g] = C.useState("");
	return C.useEffect(() => {
		let e = d.current;
		e && g((e.textContent ?? "").trim());
	}, [s.children]), /* @__PURE__ */ T(U.ItemSlot, {
		scope: i,
		disabled: a,
		textValue: o ?? h,
		children: /* @__PURE__ */ T(le, {
			asChild: !0,
			...u,
			focusable: !a,
			children: /* @__PURE__ */ T(c.div, {
				role: "menuitem",
				"data-highlighted": p ? "" : void 0,
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				...s,
				ref: f,
				onPointerMove: e(n.onPointerMove, $((e) => {
					a ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: e(n.onPointerLeave, $((e) => l.onItemLeave(e))),
				onFocus: e(n.onFocus, () => m(!0)),
				onBlur: e(n.onBlur, () => m(!1))
			})
		})
	});
}), Ve = "MenuCheckboxItem", He = C.forwardRef((t, n) => {
	let { checked: r = !1, onCheckedChange: i, ...a } = t;
	return /* @__PURE__ */ T(Xe, {
		scope: t.__scopeMenu,
		checked: r,
		children: /* @__PURE__ */ T(X, {
			role: "menuitemcheckbox",
			"aria-checked": Q(r) ? "mixed" : r,
			...a,
			ref: n,
			"data-state": dt(r),
			onSelect: e(a.onSelect, () => i?.(Q(r) ? !0 : !r), { checkForDefaultPrevented: !1 })
		})
	});
});
He.displayName = Ve;
var Ue = "MenuRadioGroup", [We, Ge] = W(Ue, {
	value: void 0,
	onValueChange: () => {}
}), Ke = C.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = l(r);
	return /* @__PURE__ */ T(We, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ T(Ie, {
			...i,
			ref: t
		})
	});
});
Ke.displayName = Ue;
var qe = "MenuRadioItem", Je = C.forwardRef((t, n) => {
	let { value: r, ...i } = t, a = Ge(qe, t.__scopeMenu), o = r === a.value;
	return /* @__PURE__ */ T(Xe, {
		scope: t.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ T(X, {
			role: "menuitemradio",
			"aria-checked": o,
			...i,
			ref: n,
			"data-state": dt(o),
			onSelect: e(i.onSelect, () => a.onValueChange?.(r), { checkForDefaultPrevented: !1 })
		})
	});
});
Je.displayName = qe;
var Ye = "MenuItemIndicator", [Xe, Ze] = W(Ye, { checked: !1 }), Qe = C.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Ze(Ye, n);
	return /* @__PURE__ */ T(u, {
		present: r || Q(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ T(c.span, {
			...i,
			ref: t,
			"data-state": dt(a.checked)
		})
	});
});
Qe.displayName = Ye;
var $e = "MenuSeparator", et = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ T(c.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
et.displayName = $e;
var tt = "MenuArrow", nt = C.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ T(_, {
		...G(n),
		...r,
		ref: t
	});
});
nt.displayName = tt;
var rt = "MenuSub", [it, at] = W(rt), ot = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = K(rt, t), s = G(t), [c, u] = C.useState(null), [f, p] = C.useState(null), m = l(i);
	return C.useEffect(() => (a.open === !1 && m(!1), () => m(!1)), [a.open, m]), /* @__PURE__ */ T(d, {
		...s,
		children: /* @__PURE__ */ T(ye, {
			scope: t,
			open: r,
			onOpenChange: m,
			content: f,
			onContentChange: p,
			children: /* @__PURE__ */ T(it, {
				scope: t,
				contentId: o(),
				triggerId: o(),
				trigger: c,
				onTriggerChange: u,
				children: n
			})
		})
	});
};
ot.displayName = rt;
var Z = "MenuSubTrigger", st = C.forwardRef((t, n) => {
	let r = K(Z, t.__scopeMenu), i = q(Z, t.__scopeMenu), a = at(Z, t.__scopeMenu), o = ke(Z, t.__scopeMenu), s = C.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = C.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return C.useEffect(() => d, [d]), C.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ T(Ce, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ T(Be, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": ut(r.open),
			...t,
			ref: x(n, a.onTriggerChange),
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: e(t.onPointerMove, $((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: e(t.onPointerLeave, $((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
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
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: e(t.onKeyDown, (e) => {
				let n = o.searchRef.current !== "";
				t.disabled || n && e.key === " " || pe[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
});
st.displayName = Z;
var ct = "MenuSubContent", lt = C.forwardRef((n, r) => {
	let i = Ee(J, n.__scopeMenu), { forceMount: a = i.forceMount, ...o } = n, s = K(J, n.__scopeMenu), c = q(J, n.__scopeMenu), l = at(ct, n.__scopeMenu), d = C.useRef(null), f = t(r, d);
	return /* @__PURE__ */ T(U.Provider, {
		scope: n.__scopeMenu,
		children: /* @__PURE__ */ T(u, {
			present: a || s.open,
			children: /* @__PURE__ */ T(U.Slot, {
				scope: n.__scopeMenu,
				children: /* @__PURE__ */ T(Pe, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...o,
					ref: f,
					align: "start",
					side: c.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						c.isUsingKeyboardRef.current && d.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: e(n.onFocusOutside, (e) => {
						e.target !== l.trigger && s.onOpenChange(!1);
					}),
					onEscapeKeyDown: e(n.onEscapeKeyDown, (e) => {
						c.onClose(), e.preventDefault();
					}),
					onKeyDown: e(n.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = me[c.dir].includes(e.key);
						t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
lt.displayName = ct;
function ut(e) {
	return e ? "open" : "closed";
}
function Q(e) {
	return e === "indeterminate";
}
function dt(e) {
	return Q(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ft(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function pt(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function mt(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = pt(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function ht(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function gt(e, t) {
	return t ? ht({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function $(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var _t = xe, vt = Ce, yt = De, bt = Ae, xt = Ie, St = Re, Ct = X, wt = He, Tt = Ke, Et = Je, Dt = Qe, Ot = et, kt = nt, At = ot, jt = st, Mt = lt;
//#endregion
export { _e as _, xt as a, St as c, Et as d, _t as f, jt as g, Mt as h, bt as i, yt as l, At as m, kt as n, Ct as o, Ot as p, wt as r, Dt as s, vt as t, Tt as u, E as v };
