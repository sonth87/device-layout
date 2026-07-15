import e from "react";
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4/node_modules/zustand/esm/vanilla.mjs
var t = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, n = ((e) => e ? t(e) : t), r = (e) => e;
function i(t, n = r) {
	let i = e.useSyncExternalStore(t.subscribe, e.useCallback(() => n(t.getState()), [t, n]), e.useCallback(() => n(t.getInitialState()), [t, n]));
	return e.useDebugValue(i), i;
}
var a = (e) => {
	let t = n(e), r = (e) => i(t, e);
	return Object.assign(r, t), r;
}, o = ((e) => e ? a(e) : a), s = Symbol.for("immer-nothing"), c = Symbol.for("immer-draftable"), l = Symbol.for("immer-state"), u = process.env.NODE_ENV === "production" ? [] : [
	function(e) {
		return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
	},
	function(e) {
		return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
	},
	"This object has been frozen and should not be mutated",
	function(e) {
		return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
	},
	"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
	"Immer forbids circular references",
	"The first or second argument to `produce` must be a function",
	"The third argument to `produce` must be a function or undefined",
	"First argument to `createDraft` must be a plain object, an array, or an immerable object",
	"First argument to `finishDraft` must be a draft returned by `createDraft`",
	function(e) {
		return `'current' expects a draft, got: ${e}`;
	},
	"Object.defineProperty() cannot be used on an Immer draft",
	"Object.setPrototypeOf() cannot be used on an Immer draft",
	"Immer only supports deleting array indices",
	"Immer only supports setting array indices and the 'length' property",
	function(e) {
		return `'original' expects a draft, got: ${e}`;
	}
];
function d(e, ...t) {
	if (process.env.NODE_ENV !== "production") {
		let n = u[e], r = A(n) ? n.apply(null, t) : n;
		throw Error(`[Immer] ${r}`);
	}
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var f = Object, p = f.getPrototypeOf, m = "constructor", h = "prototype", g = "configurable", _ = "enumerable", v = "writable", y = "value", b = (e) => !!e && !!e[l];
function x(e) {
	return e ? ne(e) || E(e) || !!e[c] || !!e[m]?.[c] || D(e) || O(e) : !1;
}
var ee = f[h][m].toString(), te = /* @__PURE__ */ new WeakMap();
function ne(e) {
	if (!e || !k(e)) return !1;
	let t = p(e);
	if (t === null || t === f[h]) return !0;
	let n = f.hasOwnProperty.call(t, m) && t[m];
	if (n === Object) return !0;
	if (!A(n)) return !1;
	let r = te.get(n);
	return r === void 0 && (r = Function.toString.call(n), te.set(n, r)), r === ee;
}
function S(e, t, n = !0) {
	C(e) === 0 ? (n ? Reflect.ownKeys(e) : f.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function C(e) {
	let t = e[l];
	return t ? t.type_ : E(e) ? 1 : D(e) ? 2 : O(e) ? 3 : 0;
}
var re = (e, t, n = C(e)) => n === 2 ? e.has(t) : f[h].hasOwnProperty.call(e, t), w = (e, t, n = C(e)) => n === 2 ? e.get(t) : e[t], T = (e, t, n, r = C(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function ie(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var E = Array.isArray, D = (e) => e instanceof Map, O = (e) => e instanceof Set, k = (e) => typeof e == "object", A = (e) => typeof e == "function", j = (e) => typeof e == "boolean";
function ae(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var M = (e) => e.copy_ || e.base_, N = (e) => e.modified_ ? e.copy_ : e.base_;
function oe(e, t) {
	if (D(e)) return new Map(e);
	if (O(e)) return new Set(e);
	if (E(e)) return Array[h].slice.call(e);
	let n = ne(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = f.getOwnPropertyDescriptors(e);
		delete t[l];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[v] === !1 && (a[v] = !0, a[g] = !0), (a.get || a.set) && (t[i] = {
				[g]: !0,
				[v]: !0,
				[_]: a[_],
				[y]: e[i]
			});
		}
		return f.create(p(e), t);
	} else {
		let t = p(e);
		if (t !== null && n) return { ...e };
		let r = f.create(t);
		return f.assign(r, e);
	}
}
function P(e, t = !1) {
	return I(e) || b(e) || !x(e) ? e : (C(e) > 1 && f.defineProperties(e, {
		set: F,
		add: F,
		clear: F,
		delete: F
	}), f.freeze(e), t && S(e, (e, t) => {
		P(t, !0);
	}, !1), e);
}
function se() {
	d(2);
}
var F = { [y]: se };
function I(e) {
	return e === null || !k(e) || f.isFrozen(e);
}
var L = "MapSet", R = "Patches", ce = "ArrayMethods", le = {};
function z(e) {
	let t = le[e];
	return t || d(0, e), t;
}
var ue = (e) => !!le[e], B, de = () => B, fe = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: ue(L) ? z(L) : void 0,
	arrayMethodsPlugin_: ue(ce) ? z(ce) : void 0
});
function pe(e, t) {
	t && (e.patchPlugin_ = z(R), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function V(e) {
	H(e), e.drafts_.forEach(he), e.drafts_ = null;
}
function H(e) {
	e === B && (B = e.parent_);
}
var me = (e) => B = fe(B, e);
function he(e) {
	let t = e[l];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ge(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[l].modified_ && (V(t), d(4)), x(e) && (e = _e(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[l].base_, e, t);
	} else e = _e(t, n);
	return ve(t, e, !0), V(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === s ? void 0 : e;
}
function _e(e, t) {
	if (I(t)) return t;
	let n = t[l];
	if (!n) return W(t, e.handledSet_, e);
	if (!U(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		Ce(n, e);
	}
	return n.copy_;
}
function ve(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && P(t, n);
}
function ye(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var U = (e, t) => e.scope_ === t, be = [];
function xe(e, t, n, r) {
	let i = M(e), a = e.type_;
	if (r !== void 0 && w(i, r, a) === t) {
		T(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		S(i, (e, n) => {
			if (b(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? be;
	for (let e of o) T(i, e, n, a);
}
function Se(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !U(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = N(i);
		xe(e, i.draft_ ?? i, a, n), Ce(i, r);
	});
}
function Ce(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		ye(e);
	}
}
function we(e, t, n) {
	let { scope_: r } = e;
	if (b(n)) {
		let i = n[l];
		U(i, r) && i.callbacks_.push(function() {
			Y(e), xe(e, n, N(i), t);
		});
	} else x(n) && e.callbacks_.push(function() {
		let i = M(e);
		e.type_ === 3 ? i.has(n) && W(n, r.handledSet_, r) : w(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && W(w(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function W(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || b(e) || t.has(e) || !x(e) || I(e) ? e : (t.add(e), S(e, (r, i) => {
		if (b(i)) {
			let t = i[l];
			U(t, n) && (T(e, r, N(t), e.type_), ye(t));
		} else x(i) && W(i, t, n);
	}), e);
}
function Te(e, t) {
	let n = E(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : de(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = G;
	n && (i = [r], a = K);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var G = {
	get(e, t) {
		if (t === l) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = M(e);
		if (!re(i, t, e.type_)) return Ee(e, i, t);
		let a = i[t];
		if (e.finalized_ || !x(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && ae(t)) return a;
		if (a === q(e.base_, t)) {
			Y(e);
			let n = e.type_ === 1 ? +t : t, r = X(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in M(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(M(e));
	},
	set(e, t, n) {
		let r = De(M(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = q(M(e), t), i = r?.[l];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (ie(n, r) && (n !== void 0 || re(e.base_, t, e.type_))) return !0;
			Y(e), J(e);
		}
		return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) ? !0 : (e.copy_[t] = n, e.assigned_.set(t, !0), we(e, t, n), !0);
	},
	deleteProperty(e, t) {
		return Y(e), q(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), J(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = M(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[v]: !0,
			[g]: e.type_ !== 1 || t !== "length",
			[_]: r[_],
			[y]: n[t]
		};
	},
	defineProperty() {
		d(11);
	},
	getPrototypeOf(e) {
		return p(e.base_);
	},
	setPrototypeOf() {
		d(12);
	}
}, K = {};
for (let e in G) {
	let t = G[e];
	K[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
K.deleteProperty = function(e, t) {
	return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && d(13), K.set.call(this, e, t, void 0);
}, K.set = function(e, t, n) {
	return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && d(14), G.set.call(this, e[0], t, n, e[0]);
};
function q(e, t) {
	let n = e[l];
	return (n ? M(n) : e)[t];
}
function Ee(e, t, n) {
	let r = De(t, n);
	return r ? y in r ? r[y] : r.get?.call(e.draft_) : void 0;
}
function De(e, t) {
	if (!(t in e)) return;
	let n = p(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = p(n);
	}
}
function J(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && J(e.parent_));
}
function Y(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), oe(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Oe = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (A(e) && !A(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			A(t) || d(6), n !== void 0 && !A(n) && d(7);
			let r;
			if (x(e)) {
				let i = me(this), a = X(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? V(i) : H(i);
				}
				return pe(i, n), ge(r, i);
			} else if (!e || !k(e)) {
				if (r = t(e), r === void 0 && (r = e), r === s && (r = void 0), this.autoFreeze_ && P(r, !0), n) {
					let t = [], i = [];
					z(R).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			} else d(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (A(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, j(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), j(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), j(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		x(e) || d(8), b(e) && (e = ke(e));
		let t = me(this), n = X(t, e, void 0);
		return n[l].isManual_ = !0, H(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[l];
		(!n || !n.isManual_) && d(9);
		let { scope_: r } = n;
		return pe(r, t), ge(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = z(R).applyPatches_;
		return b(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function X(e, t, n, r) {
	let [i, a] = D(t) ? z(L).proxyMap_(t, n) : O(t) ? z(L).proxySet_(t, n) : Te(t, n);
	return (n?.scope_ ?? de()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? Se(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function ke(e) {
	return b(e) || d(10, e), Ae(e);
}
function Ae(e) {
	if (!x(e) || I(e)) return e;
	let t = e[l], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = oe(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = oe(e, !0);
	return S(n, (e, t) => {
		T(n, e, Ae(t));
	}, r), t && (t.finalized_ = !1), n;
}
var je = new Oe().produce, Me = (e) => (t, n, r) => (r.setState = (e, n, ...r) => t(typeof e == "function" ? je(e) : e, n, ...r), e(r.setState, n, r));
//#endregion
//#region node_modules/.pnpm/zustand@5.0.13_@types+react@19.2.14_immer@11.1.8_react@19.2.4/node_modules/zustand/esm/middleware.mjs
function Ne(e, t) {
	let n;
	try {
		n = e();
	} catch {
		return;
	}
	return {
		getItem: (e) => {
			let r = (e) => e === null ? null : JSON.parse(e, t?.reviver), i = n.getItem(e) ?? null;
			return i instanceof Promise ? i.then(r) : r(i);
		},
		setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
		removeItem: (e) => n.removeItem(e)
	};
}
var Z = (e) => (t) => {
	try {
		let n = e(t);
		return n instanceof Promise ? n : {
			then(e) {
				return Z(e)(n);
			},
			catch(e) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(e) {
				return this;
			},
			catch(t) {
				return Z(t)(e);
			}
		};
	}
}, Pe = (e, t) => (n, r, i) => {
	let a = {
		storage: Ne(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, s = 0, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = a.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e);
	}, r, i);
	let d = () => {
		let e = a.partialize({ ...r() });
		return u.setItem(a.name, {
			state: e,
			version: a.version
		});
	}, f = i.setState;
	i.setState = (e, t) => (f(e, t), d());
	let p = e((...e) => (n(...e), d()), r, i);
	i.getInitialState = () => p;
	let m, h = () => {
		if (!u) return;
		let e = ++s;
		o = !1, c.forEach((e) => e(r() ?? p));
		let t = a.onRehydrateStorage?.call(a, r() ?? p) || void 0;
		return Z(u.getItem.bind(u))(a.name).then((e) => {
			if (e) if (typeof e.version == "number" && e.version !== a.version) {
				if (a.migrate) {
					let t = a.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
				console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
			} else return [!1, e.state];
			return [!1, void 0];
		}).then((t) => {
			if (e !== s) return;
			let [i, o] = t;
			if (m = a.merge(o, r() ?? p), n(m, !0), i) return d();
		}).then(() => {
			e === s && (t?.(r(), void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((n) => {
			e === s && t?.(void 0, n);
		});
	};
	return i.persist = {
		setOptions: (e) => {
			a = {
				...a,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			u?.removeItem(a.name);
		},
		getOptions: () => a,
		rehydrate: () => h(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, a.skipHydration || h(), m || p;
}, Fe = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ie = (e = 21) => {
	let t = "", n = crypto.getRandomValues(new Uint8Array(e |= 0));
	for (; e--;) t += Fe[n[e] & 63];
	return t;
};
//#endregion
//#region src/lib/window-math.ts
function Q(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Le(e, t, { minWidth: n = 320, minHeight: r = 240 } = {}) {
	let i = Math.max(1, t.width), a = Math.max(1, t.height), o = Q(e.width, Math.min(n, i), i), s = Q(e.height, Math.min(r, a), a);
	return {
		x: Q(e.x, t.x, t.x + t.width - o),
		y: Q(e.y, t.y, t.y + t.height - s),
		width: o,
		height: s
	};
}
function Re(e, t, n, r, i = 320, a = 240) {
	let { x: o, y: s, width: c, height: l } = r;
	switch (e) {
		case "e":
			c = Math.max(i, c + t);
			break;
		case "w": {
			let e = Math.max(i, c - t);
			o = r.x + (r.width - e), c = e;
			break;
		}
		case "s":
			l = Math.max(a, l + n);
			break;
		case "n": {
			let e = Math.max(a, l - n);
			s = r.y + (r.height - e), l = e;
			break;
		}
		case "se":
			c = Math.max(i, c + t), l = Math.max(a, l + n);
			break;
		case "sw": {
			let e = Math.max(i, c - t);
			o = r.x + (r.width - e), c = e, l = Math.max(a, l + n);
			break;
		}
		case "ne": {
			c = Math.max(i, c + t);
			let e = Math.max(a, l - n);
			s = r.y + (r.height - e), l = e;
			break;
		}
		case "nw": {
			let e = Math.max(i, c - t);
			o = r.x + (r.width - e), c = e;
			let u = Math.max(a, l - n);
			s = r.y + (r.height - u), l = u;
			break;
		}
	}
	return {
		x: o,
		y: s,
		width: c,
		height: l
	};
}
var ze = {
	n: "cursor-n-resize",
	ne: "cursor-ne-resize",
	e: "cursor-e-resize",
	se: "cursor-se-resize",
	s: "cursor-s-resize",
	sw: "cursor-sw-resize",
	w: "cursor-w-resize",
	nw: "cursor-nw-resize"
};
//#endregion
//#region src/store/window-slice.ts
function Be(e, t) {
	let n = t?.width ?? e.defaultSize?.width ?? 800, r = t?.height ?? e.defaultSize?.height ?? 600, i = t?.x ?? e.defaultPosition?.x ?? Math.round((typeof window < "u" ? window.innerWidth : 1280) / 2 - n / 2), a = t?.y ?? e.defaultPosition?.y ?? Math.round((typeof window < "u" ? window.innerHeight : 800) / 2 - r / 2);
	return typeof window > "u" ? {
		x: i,
		y: a,
		width: n,
		height: r
	} : Le({
		x: i,
		y: a,
		width: n,
		height: r
	}, {
		x: 0,
		y: 0,
		width: window.innerWidth,
		height: window.innerHeight
	}, {
		minWidth: e.minSize?.width ?? 320,
		minHeight: e.minSize?.height ?? 240
	});
}
function Ve(e, t) {
	return {
		windows: {},
		zCounter: 10,
		focusedWindowId: null,
		fullscreenChromeRevealed: !1,
		setFullscreenChromeRevealed(t) {
			e((e) => {
				e.fullscreenChromeRevealed = t;
			});
		},
		urlHydrated: !1,
		setUrlHydrated(t) {
			e((e) => {
				e.urlHydrated = t;
			});
		},
		launchApp(e, n) {
			let r = n?.forceNewWindow ?? !1, i = Object.values(t().windows).filter((t) => t.appId === e.id);
			if (!r) {
				let e = i.find((e) => !e.isMinimized);
				if (e) return t().focusWindow(e.id), e.id;
				let n = i.find((e) => e.isMinimized);
				if (n) return t().restoreWindow(n.id), n.id;
			}
			return e.launchMode !== "multi" && i[0] ? (t().focusWindow(i[0].id), i[0].id) : t().openWindow(e, n);
		},
		openWindow(n, r) {
			let i = Ie(8);
			return e((e) => {
				e.zCounter += 1, e.windows[i] = {
					id: i,
					appId: n.id,
					rect: Be(n, r),
					prevRect: r?.prevRect ?? null,
					zIndex: e.zCounter,
					isMinimized: !1,
					isMaximized: r?.isMaximized ?? !1,
					isFullScreen: r?.isFullScreen ?? !1,
					isFocused: !0,
					title: n.name,
					hasMenuBar: n.hasMenuBar ?? !1,
					hasStatusBar: n.hasStatusBar ?? !1
				};
				for (let t of Object.values(e.windows)) t.id !== i && (t.isFocused = !1);
				e.focusedWindowId = i;
			}), t().setRunning(n.id, !0), t().setActiveApp(n.id), i;
		},
		closeWindow(n) {
			let r = t().windows[n]?.appId;
			e((e) => {
				delete e.windows[n], e.focusedWindowId === n && (e.focusedWindowId = Object.values(e.windows).sort((e, t) => t.zIndex - e.zIndex)[0]?.id ?? null, e.focusedWindowId && (e.windows[e.focusedWindowId].isFocused = !0));
			}), r && !Object.values(t().windows).some((e) => e.appId === r) && t().setRunning(r, !1);
			let i = t().focusedWindowId;
			if (i) {
				let e = t().windows[i]?.appId ?? null;
				t().setActiveApp(e);
			} else t().setActiveApp(null);
		},
		minimizeWindow(n) {
			e((e) => {
				e.windows[n] && (e.windows[n].isMinimized = !0, e.windows[n].isFocused = !1), e.focusedWindowId === n && (e.focusedWindowId = Object.values(e.windows).filter((e) => !e.isMinimized && e.id !== n).sort((e, t) => t.zIndex - e.zIndex)[0]?.id ?? null, e.focusedWindowId && (e.windows[e.focusedWindowId].isFocused = !0));
			});
			let r = t().focusedWindowId;
			if (r) {
				let e = t().windows[r]?.appId ?? null;
				t().setActiveApp(e);
			} else t().setActiveApp(null);
		},
		restoreWindow(n) {
			e((e) => {
				if (e.windows[n]) {
					e.windows[n].isMinimized = !1, e.zCounter += 1, e.windows[n].zIndex = e.zCounter;
					for (let t of Object.values(e.windows)) t.isFocused = t.id === n;
					e.focusedWindowId = n;
				}
			});
			let r = t().windows[n]?.appId ?? null;
			t().setActiveApp(r);
		},
		maximizeWindow(t, n) {
			e((e) => {
				if (!e.windows[t]) return;
				let r = e.windows[t];
				r.prevRect = { ...r.rect }, r.isMaximized = !0, r.rect = { ...n };
			});
		},
		toggleMaximize(t, n) {
			e((e) => {
				if (!e.windows[t]) return;
				let r = e.windows[t];
				r.isFullScreen = !1, r.isMaximized && r.prevRect ? (r.rect = { ...r.prevRect }, r.prevRect = null, r.isMaximized = !1) : (r.prevRect = { ...r.rect }, r.isMaximized = !0, r.rect = { ...n });
			});
		},
		enterFullScreen(t) {
			e((e) => {
				let n = e.windows[t];
				n && (n.isMaximized = !1, n.isFullScreen = !0);
			});
		},
		exitFullScreen(t) {
			e((e) => {
				let n = e.windows[t];
				n && (n.isFullScreen = !1);
			});
		},
		toggleFullScreen(e) {
			let n = t().windows[e];
			n && (n.isFullScreen ? t().exitFullScreen(e) : t().enterFullScreen(e));
		},
		focusWindow(n) {
			e((e) => {
				if (e.windows[n]) {
					e.zCounter += 1;
					for (let t of Object.values(e.windows)) t.isFocused = t.id === n;
					e.windows[n].zIndex = e.zCounter, e.focusedWindowId = n;
				}
			});
			let r = t().windows[n]?.appId ?? null;
			t().setActiveApp(r);
		},
		moveWindow(t, n, r) {
			e((e) => {
				e.windows[t] && (e.windows[t].rect.x = n, e.windows[t].rect.y = r);
			});
		},
		resizeWindow(t, n) {
			e((e) => {
				e.windows[t] && (e.windows[t].rect = n);
			});
		},
		setWindowTitle(t, n) {
			e((e) => {
				e.windows[t] && (e.windows[t].title = n);
			});
		},
		hydrateWindows(n) {
			e((e) => {
				e.windows = {};
				for (let t of n) e.windows[t.id] = t;
				e.zCounter = Math.max(0, ...n.map((e) => e.zIndex)), e.focusedWindowId = n.find((e) => e.isFocused)?.id ?? null;
			});
			let r = Array.from(new Set(n.map((e) => e.appId)));
			for (let e of r) t().setRunning(e, !0);
		}
	};
}
//#endregion
//#region src/store/app-slice.ts
function He(e) {
	return {
		apps: {},
		runningAppIds: [],
		activeAppId: null,
		registerApps(t) {
			e((e) => {
				e.apps = {};
				for (let n of t) e.apps[n.id] = n;
			});
		},
		setRunning(t, n) {
			e((e) => {
				n && !e.runningAppIds.includes(t) ? e.runningAppIds.push(t) : n || (e.runningAppIds = e.runningAppIds.filter((e) => e !== t));
			});
		},
		setActiveApp(t) {
			e((e) => {
				e.activeAppId = t;
			});
		}
	};
}
//#endregion
//#region src/store/theme-slice.ts
function Ue(e) {
	return {
		osTheme: "macos",
		colorScheme: "auto",
		resolvedColorScheme: "light",
		glassEnabled: !0,
		accentColor: "multicolor",
		highlightColor: "automatic",
		allowDragOutOfBounds: !0,
		setOSTheme(t) {
			e((e) => {
				e.osTheme = t;
			});
		},
		setColorScheme(t) {
			e((e) => {
				e.colorScheme = t;
			});
		},
		setGlassEnabled(t) {
			e((e) => {
				e.glassEnabled = t;
			});
		},
		resolveColorScheme(t) {
			e((e) => {
				e.colorScheme === "auto" ? e.resolvedColorScheme = t ? "dark" : "light" : e.resolvedColorScheme = e.colorScheme;
			});
		},
		setAccentColor(t) {
			e((e) => {
				e.accentColor = t;
			});
		},
		setHighlightColor(t) {
			e((e) => {
				e.highlightColor = t;
			});
		},
		setAllowDragOutOfBounds(t) {
			e((e) => {
				e.allowDragOutOfBounds = t;
			});
		}
	};
}
//#endregion
//#region src/config/wallpapers.config.ts
var We = [
	{
		id: "bg-1",
		name: "Sequoia Night",
		kind: "picture",
		url: "/wallpapers/bg-1.jpg",
		thumbnail: "/wallpapers/bg-1.jpg"
	},
	{
		id: "bg-2",
		name: "Deep Space",
		kind: "picture",
		url: "/wallpapers/bg-2.jpg",
		thumbnail: "/wallpapers/bg-2.jpg"
	},
	{
		id: "bg-3",
		name: "Aurora",
		kind: "picture",
		url: "/wallpapers/bg-3.jpg",
		thumbnail: "/wallpapers/bg-3.jpg"
	},
	{
		id: "bg-4",
		name: "Ocean",
		kind: "picture",
		url: "/wallpapers/bg-4.jpg",
		thumbnail: "/wallpapers/bg-4.jpg"
	},
	{
		id: "bg-5",
		name: "Horizon",
		kind: "picture",
		url: "/wallpapers/bg-5.jpg",
		thumbnail: "/wallpapers/bg-5.jpg"
	},
	{
		id: "bg-6",
		name: "Dusk",
		kind: "picture",
		url: "/wallpapers/bg-6.jpg",
		thumbnail: "/wallpapers/bg-6.jpg"
	},
	{
		id: "bg-7",
		name: "Midnight",
		kind: "picture",
		url: "/wallpapers/bg-7.jpg",
		thumbnail: "/wallpapers/bg-7.jpg"
	},
	{
		id: "bg-8",
		name: "Mountain",
		kind: "picture",
		url: "/wallpapers/bg-8.jpg",
		thumbnail: "/wallpapers/bg-8.jpg"
	},
	{
		id: "bg-9",
		name: "Snow",
		kind: "picture",
		url: "/wallpapers/bg-9.jpg",
		thumbnail: "/wallpapers/bg-9.jpg"
	},
	{
		id: "bg-10",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-10.jpg",
		thumbnail: "/wallpapers/bg-10.jpg"
	},
	{
		id: "bg-11",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-11.jpg",
		thumbnail: "/wallpapers/bg-11.jpg"
	},
	{
		id: "bg-12",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-12.jpg",
		thumbnail: "/wallpapers/bg-12.jpg"
	},
	{
		id: "bg-13",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-13.jpg",
		thumbnail: "/wallpapers/bg-13.jpg"
	},
	{
		id: "bg-14",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-14.jpg",
		thumbnail: "/wallpapers/bg-14.jpg"
	},
	{
		id: "bg-15",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-15.jpg",
		thumbnail: "/wallpapers/bg-15.jpg"
	},
	{
		id: "bg-16",
		name: "Stars",
		kind: "picture",
		url: "/wallpapers/bg-16.jpg",
		thumbnail: "/wallpapers/bg-16.jpg"
	}
], Ge = [
	{
		id: "live-1",
		name: "Live 1",
		kind: "live",
		url: "/wallpapers/live/live-1.jpg",
		thumbnail: "/wallpapers/live/live-1.jpg",
		videoUrl: "/wallpapers/live/live-1.mp4"
	},
	{
		id: "live-2",
		name: "Live 2",
		kind: "live",
		url: "/wallpapers/live/live-2.jpg",
		thumbnail: "/wallpapers/live/live-2.jpg",
		videoUrl: "/wallpapers/live/live-2.mp4"
	},
	{
		id: "live-3",
		name: "Live 3",
		kind: "live",
		url: "/wallpapers/live/live-3.jpg",
		thumbnail: "/wallpapers/live/live-3.jpg",
		videoUrl: "/wallpapers/live/live-3.mp4"
	},
	{
		id: "live-4",
		name: "Live 4",
		kind: "live",
		url: "/wallpapers/live/live-4.jpg",
		thumbnail: "/wallpapers/live/live-4.jpg",
		videoUrl: "/wallpapers/live/live-4.mp4"
	},
	{
		id: "live-5",
		name: "Live 5",
		kind: "live",
		url: "/wallpapers/live/live-5.jpg",
		thumbnail: "/wallpapers/live/live-5.jpg",
		videoUrl: "/wallpapers/live/live-5.mp4"
	},
	{
		id: "live-6",
		name: "Live 6",
		kind: "live",
		url: "/wallpapers/live/live-6.jpg",
		thumbnail: "/wallpapers/live/live-6.jpg",
		videoUrl: "/wallpapers/live/live-6.mp4"
	}
], Ke = [
	{
		id: "color-black",
		name: "Black",
		kind: "color",
		colorHex: "#000000"
	},
	{
		id: "color-slate-blue",
		name: "Slate Blue",
		kind: "color",
		colorHex: "#6971B5"
	},
	{
		id: "color-sky-blue",
		name: "Sky Blue",
		kind: "color",
		colorHex: "#13A3CD"
	},
	{
		id: "color-rose",
		name: "Rose",
		kind: "color",
		colorHex: "#DF6B76"
	},
	{
		id: "color-blue",
		name: "Blue",
		kind: "color",
		colorHex: "#3352CD"
	},
	{
		id: "color-peach",
		name: "Peach",
		kind: "color",
		colorHex: "#FEDCC8"
	},
	{
		id: "color-cream",
		name: "Cream",
		kind: "color",
		colorHex: "#F7E2CC"
	},
	{
		id: "color-gold",
		name: "Gold",
		kind: "color",
		colorHex: "#D2A14E"
	},
	{
		id: "color-magenta",
		name: "Magenta",
		kind: "color",
		colorHex: "#CC458E"
	},
	{
		id: "color-red",
		name: "Red",
		kind: "color",
		colorHex: "#E13B19"
	},
	{
		id: "color-pale-pink",
		name: "Pale Pink",
		kind: "color",
		colorHex: "#F7D7D3"
	},
	{
		id: "color-light-gray",
		name: "Light Gray",
		kind: "color",
		colorHex: "#E3E4E6"
	},
	{
		id: "color-soft-pink",
		name: "Soft Pink",
		kind: "color",
		colorHex: "#FEDEE6"
	},
	{
		id: "color-dark-gray",
		name: "Dark Gray",
		kind: "color",
		colorHex: "#6F737D"
	},
	{
		id: "color-silver",
		name: "Silver",
		kind: "color",
		colorHex: "#B9BDC5"
	},
	{
		id: "color-charcoal",
		name: "Charcoal",
		kind: "color",
		colorHex: "#555759"
	},
	{
		id: "color-teal",
		name: "Teal",
		kind: "color",
		colorHex: "#026A71"
	},
	{
		id: "color-mint",
		name: "Mint",
		kind: "color",
		colorHex: "#62C4A5"
	},
	{
		id: "color-yellow",
		name: "Yellow",
		kind: "color",
		colorHex: "#FDB515"
	}
], qe = [
	...We,
	...Ge,
	...Ke
], Je = "bg-1", Ye = [
	{
		label: "File",
		items: [
			{
				key: "new",
				label: "New Window",
				shortcut: "⌘N",
				action: "newWindow"
			},
			{
				key: "new-tab",
				label: "New Tab",
				shortcut: "⌘T",
				action: "newTab"
			},
			{
				key: "sep1",
				label: "",
				separator: !0
			},
			{
				key: "close",
				label: "Close",
				shortcut: "⌘W",
				action: "close"
			}
		]
	},
	{
		label: "Edit",
		items: [
			{
				key: "undo",
				label: "Undo",
				shortcut: "⌘Z",
				action: "undo"
			},
			{
				key: "redo",
				label: "Redo",
				shortcut: "⌘⇧Z",
				action: "redo"
			},
			{
				key: "sep1",
				label: "",
				separator: !0
			},
			{
				key: "cut",
				label: "Cut",
				shortcut: "⌘X",
				action: "cut"
			},
			{
				key: "copy",
				label: "Copy",
				shortcut: "⌘C",
				action: "copy"
			},
			{
				key: "paste",
				label: "Paste",
				shortcut: "⌘V",
				action: "paste"
			},
			{
				key: "select-all",
				label: "Select All",
				shortcut: "⌘A",
				action: "selectAll"
			}
		]
	},
	{
		label: "View",
		items: [
			{
				key: "zoom-in",
				label: "Zoom In",
				shortcut: "⌘+",
				action: "zoomIn"
			},
			{
				key: "zoom-out",
				label: "Zoom Out",
				shortcut: "⌘-",
				action: "zoomOut"
			},
			{
				key: "sep1",
				label: "",
				separator: !0
			},
			{
				key: "fullscreen",
				label: "Enter Full Screen",
				shortcut: "⌃⌘F",
				action: "toggleFullscreen"
			}
		]
	},
	{
		label: "Window",
		items: [
			{
				key: "minimize",
				label: "Minimize",
				shortcut: "⌘M",
				action: "minimize"
			},
			{
				key: "zoom",
				label: "Zoom",
				action: "zoom"
			},
			{
				key: "sep1",
				label: "",
				separator: !0
			},
			{
				key: "bring-all",
				label: "Bring All to Front",
				action: "bringAllToFront"
			}
		]
	},
	{
		label: "Help",
		items: [{
			key: "help",
			label: "Desktop Layout Help",
			action: "help"
		}]
	}
], Xe = [
	{
		id: "finder",
		name: "Finder",
		icon: "lucide:Folder",
		iconColor: ["#1a6cff", "#0051d5"],
		component: "Finder",
		defaultSize: {
			width: 800,
			height: 560
		},
		minSize: {
			width: 400,
			height: 300
		},
		hasMenuBar: !0,
		category: "system",
		launchMode: "multi",
		contextMenu: [
			{
				key: "new-window",
				label: "New Finder Window",
				action: "newWindow"
			},
			{
				key: "sep1",
				label: "",
				action: "",
				separator: !0
			},
			{
				key: "get-info",
				label: "Get Info",
				action: "getInfo"
			}
		],
		menuBarMenus: [
			{
				label: "File",
				items: [
					{
						key: "new-window",
						label: "New Finder Window",
						shortcut: "⌘N",
						action: "newWindow"
					},
					{
						key: "new-folder",
						label: "New Folder",
						shortcut: "⌘⇧N",
						action: "newFolder"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "get-info",
						label: "Get Info",
						shortcut: "⌘I",
						action: "getInfo"
					},
					{
						key: "trash",
						label: "Move to Trash",
						shortcut: "⌘⌫",
						action: "moveToTrash"
					},
					{
						key: "sep2",
						label: "",
						separator: !0
					},
					{
						key: "close",
						label: "Close Window",
						shortcut: "⌘W",
						action: "close"
					}
				]
			},
			{
				label: "Edit",
				items: [
					{
						key: "undo",
						label: "Undo",
						shortcut: "⌘Z",
						action: "undo"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "cut",
						label: "Cut",
						shortcut: "⌘X",
						action: "cut"
					},
					{
						key: "copy",
						label: "Copy",
						shortcut: "⌘C",
						action: "copy"
					},
					{
						key: "paste",
						label: "Paste",
						shortcut: "⌘V",
						action: "paste"
					},
					{
						key: "select-all",
						label: "Select All",
						shortcut: "⌘A",
						action: "selectAll"
					}
				]
			},
			{
				label: "View",
				items: [
					{
						key: "icons",
						label: "As Icons",
						shortcut: "⌘1",
						action: "viewIcons"
					},
					{
						key: "list",
						label: "As List",
						shortcut: "⌘2",
						action: "viewList"
					},
					{
						key: "columns",
						label: "As Columns",
						shortcut: "⌘3",
						action: "viewColumns"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "path-bar",
						label: "Show Path Bar",
						shortcut: "⌥⌘P",
						action: "togglePathBar"
					},
					{
						key: "status-bar",
						label: "Show Status Bar",
						shortcut: "⌘/",
						action: "toggleStatusBar"
					}
				]
			},
			{
				label: "Go",
				items: [
					{
						key: "back",
						label: "Back",
						shortcut: "⌘[",
						action: "goBack"
					},
					{
						key: "forward",
						label: "Forward",
						shortcut: "⌘]",
						action: "goForward"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "home",
						label: "Home",
						shortcut: "⇧⌘H",
						action: "goHome"
					},
					{
						key: "desktop",
						label: "Desktop",
						shortcut: "⇧⌘D",
						action: "goDesktop"
					},
					{
						key: "downloads",
						label: "Downloads",
						shortcut: "⌥⌘L",
						action: "goDownloads"
					},
					{
						key: "documents",
						label: "Documents",
						shortcut: "⇧⌘O",
						action: "goDocuments"
					}
				]
			},
			{
				label: "Window",
				items: [
					{
						key: "minimize",
						label: "Minimize",
						shortcut: "⌘M",
						action: "minimize"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "bring-all",
						label: "Bring All to Front",
						action: "bringAllToFront"
					}
				]
			},
			{
				label: "Help",
				items: [{
					key: "help",
					label: "Finder Help",
					shortcut: "⌘?",
					action: "help"
				}]
			}
		]
	},
	{
		id: "terminal",
		name: "Terminal",
		icon: "lucide:SquareTerminal",
		iconColor: ["#1c1c1e", "#3a3a3c"],
		component: "Terminal",
		defaultSize: {
			width: 680,
			height: 440
		},
		minSize: {
			width: 360,
			height: 240
		},
		hasStatusBar: !0,
		category: "developer",
		launchMode: "multi",
		appSettings: "TerminalSettings",
		contextMenu: [{
			key: "new-tab",
			label: "New Tab",
			action: "newTab"
		}, {
			key: "new-window",
			label: "New Window",
			action: "newWindow"
		}],
		menuBarMenus: [
			{
				label: "Shell",
				items: [
					{
						key: "new-tab",
						label: "New Tab",
						shortcut: "⌘T",
						action: "newTab"
					},
					{
						key: "new-window",
						label: "New Window",
						shortcut: "⌘N",
						action: "newWindow"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "close",
						label: "Close",
						shortcut: "⌘W",
						action: "close"
					},
					{
						key: "close-all",
						label: "Close All Windows",
						shortcut: "⌘Q",
						action: "closeAll"
					}
				]
			},
			{
				label: "Edit",
				items: [
					{
						key: "paste",
						label: "Paste",
						shortcut: "⌘V",
						action: "paste"
					},
					{
						key: "select-all",
						label: "Select All",
						shortcut: "⌘A",
						action: "selectAll"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "find",
						label: "Find",
						shortcut: "⌘F",
						action: "find"
					}
				]
			},
			{
				label: "View",
				items: [
					{
						key: "bigger",
						label: "Bigger",
						shortcut: "⌘+",
						action: "fontBigger"
					},
					{
						key: "smaller",
						label: "Smaller",
						shortcut: "⌘-",
						action: "fontSmaller"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "clear",
						label: "Clear Scrollback",
						shortcut: "⌘K",
						action: "clearScrollback"
					}
				]
			},
			{
				label: "Window",
				items: [
					{
						key: "minimize",
						label: "Minimize",
						shortcut: "⌘M",
						action: "minimize"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "bring-all",
						label: "Bring All to Front",
						action: "bringAllToFront"
					}
				]
			},
			{
				label: "Help",
				items: [{
					key: "help",
					label: "Terminal Help",
					shortcut: "⌘?",
					action: "help"
				}]
			}
		]
	},
	{
		id: "settings",
		name: "System Settings",
		icon: "lucide:Settings",
		iconColor: ["#636366", "#48484a"],
		component: "Settings",
		defaultSize: {
			width: 760,
			height: 520
		},
		minSize: {
			width: 480,
			height: 400
		},
		hasMenuBar: !1,
		category: "system",
		menuBarMenus: [
			{
				label: "Edit",
				items: [
					{
						key: "undo",
						label: "Undo",
						shortcut: "⌘Z",
						action: "undo"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "cut",
						label: "Cut",
						shortcut: "⌘X",
						action: "cut"
					},
					{
						key: "copy",
						label: "Copy",
						shortcut: "⌘C",
						action: "copy"
					},
					{
						key: "paste",
						label: "Paste",
						shortcut: "⌘V",
						action: "paste"
					},
					{
						key: "select-all",
						label: "Select All",
						shortcut: "⌘A",
						action: "selectAll"
					}
				]
			},
			{
				label: "View",
				items: [{
					key: "sidebar",
					label: "Show Sidebar",
					shortcut: "⌃⌘S",
					action: "toggleSidebar"
				}]
			},
			{
				label: "Window",
				items: [
					{
						key: "minimize",
						label: "Minimize",
						shortcut: "⌘M",
						action: "minimize"
					},
					{
						key: "zoom",
						label: "Zoom",
						action: "zoom"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "bring-all",
						label: "Bring All to Front",
						action: "bringAllToFront"
					}
				]
			},
			{
				label: "Help",
				items: [{
					key: "help",
					label: "System Settings Help",
					shortcut: "⌘?",
					action: "help"
				}]
			}
		]
	},
	{
		id: "browser",
		name: "Browser",
		icon: "lucide:Globe",
		iconColor: ["#0a84ff", "#0055d4"],
		component: "Browser",
		defaultSize: {
			width: 1024,
			height: 700
		},
		minSize: {
			width: 480,
			height: 400
		},
		hasMenuBar: !0,
		hasStatusBar: !1,
		category: "internet",
		launchMode: "multi",
		contextMenu: [{
			key: "new-tab",
			label: "New Tab",
			action: "newTab"
		}, {
			key: "new-window",
			label: "New Window",
			action: "newWindow"
		}],
		menuBarMenus: [
			{
				label: "File",
				items: [
					{
						key: "new-tab",
						label: "New Tab",
						shortcut: "⌘T",
						action: "newTab"
					},
					{
						key: "new-window",
						label: "New Window",
						shortcut: "⌘N",
						action: "newWindow"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "close",
						label: "Close Tab",
						shortcut: "⌘W",
						action: "close"
					}
				]
			},
			{
				label: "Edit",
				items: [{
					key: "find",
					label: "Find",
					shortcut: "⌘F",
					action: "find"
				}, {
					key: "select-all",
					label: "Select All",
					shortcut: "⌘A",
					action: "selectAll"
				}]
			},
			{
				label: "View",
				items: [
					{
						key: "reload",
						label: "Reload Page",
						shortcut: "⌘R",
						action: "reload"
					},
					{
						key: "force-reload",
						label: "Force Reload",
						shortcut: "⇧⌘R",
						action: "forceReload"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "zoom-in",
						label: "Zoom In",
						shortcut: "⌘+",
						action: "zoomIn"
					},
					{
						key: "zoom-out",
						label: "Zoom Out",
						shortcut: "⌘-",
						action: "zoomOut"
					},
					{
						key: "zoom-reset",
						label: "Actual Size",
						shortcut: "⌘0",
						action: "zoomReset"
					},
					{
						key: "sep2",
						label: "",
						separator: !0
					},
					{
						key: "devtools",
						label: "Developer Tools",
						shortcut: "⌥⌘I",
						action: "devtools"
					}
				]
			},
			{
				label: "History",
				items: [
					{
						key: "back",
						label: "Back",
						shortcut: "⌘[",
						action: "goBack"
					},
					{
						key: "forward",
						label: "Forward",
						shortcut: "⌘]",
						action: "goForward"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "history",
						label: "Show History",
						shortcut: "⌘Y",
						action: "showHistory"
					},
					{
						key: "clear-history",
						label: "Clear History...",
						action: "clearHistory"
					}
				]
			},
			{
				label: "Window",
				items: [{
					key: "minimize",
					label: "Minimize",
					shortcut: "⌘M",
					action: "minimize"
				}]
			},
			{
				label: "Help",
				items: [{
					key: "help",
					label: "Browser Help",
					shortcut: "⌘?",
					action: "help"
				}]
			}
		]
	},
	{
		id: "textedit",
		name: "TextEdit",
		icon: "lucide:FileText",
		iconColor: ["#ffffff", "#f5f5f5"],
		iconTextColor: "#1c1c1e",
		component: "TextEditor",
		defaultSize: {
			width: 600,
			height: 480
		},
		minSize: {
			width: 320,
			height: 240
		},
		hasMenuBar: !0,
		category: "productivity",
		launchMode: "multi",
		contextMenu: [{
			key: "new",
			label: "New Document",
			action: "newDocument"
		}],
		menuBarMenus: [
			{
				label: "File",
				items: [
					{
						key: "new",
						label: "New",
						shortcut: "⌘N",
						action: "new"
					},
					{
						key: "open",
						label: "Open...",
						shortcut: "⌘O",
						action: "open"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "save",
						label: "Save",
						shortcut: "⌘S",
						action: "save"
					},
					{
						key: "save-as",
						label: "Save As...",
						shortcut: "⇧⌘S",
						action: "saveAs"
					},
					{
						key: "sep2",
						label: "",
						separator: !0
					},
					{
						key: "close",
						label: "Close",
						shortcut: "⌘W",
						action: "close"
					}
				]
			},
			{
				label: "Edit",
				items: [
					{
						key: "undo",
						label: "Undo",
						shortcut: "⌘Z",
						action: "undo"
					},
					{
						key: "redo",
						label: "Redo",
						shortcut: "⌘⇧Z",
						action: "redo"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "cut",
						label: "Cut",
						shortcut: "⌘X",
						action: "cut"
					},
					{
						key: "copy",
						label: "Copy",
						shortcut: "⌘C",
						action: "copy"
					},
					{
						key: "paste",
						label: "Paste",
						shortcut: "⌘V",
						action: "paste"
					},
					{
						key: "select-all",
						label: "Select All",
						shortcut: "⌘A",
						action: "selectAll"
					},
					{
						key: "sep2",
						label: "",
						separator: !0
					},
					{
						key: "find",
						label: "Find",
						shortcut: "⌘F",
						action: "find"
					}
				]
			},
			{
				label: "Format",
				items: [
					{
						key: "bold",
						label: "Bold",
						shortcut: "⌘B",
						action: "bold"
					},
					{
						key: "italic",
						label: "Italic",
						shortcut: "⌘I",
						action: "italic"
					},
					{
						key: "underline",
						label: "Underline",
						shortcut: "⌘U",
						action: "underline"
					},
					{
						key: "sep1",
						label: "",
						separator: !0
					},
					{
						key: "font-bigger",
						label: "Font Size +",
						shortcut: "⌘+",
						action: "fontBigger"
					},
					{
						key: "font-smaller",
						label: "Font Size -",
						shortcut: "⌘-",
						action: "fontSmaller"
					}
				]
			},
			{
				label: "Window",
				items: [{
					key: "minimize",
					label: "Minimize",
					shortcut: "⌘M",
					action: "minimize"
				}]
			},
			{
				label: "Help",
				items: [{
					key: "help",
					label: "TextEdit Help",
					shortcut: "⌘?",
					action: "help"
				}]
			}
		]
	},
	{
		id: "clock",
		name: "Clock",
		icon: "lucide:Clock",
		iconColor: ["#1c1c1c", "#3a3a3a"],
		component: "Clock",
		defaultSize: {
			width: 380,
			height: 580
		},
		minSize: {
			width: 320,
			height: 400
		},
		category: "utilities",
		mobileFullscreen: !0,
		widgets: [
			{
				id: "clock-analog",
				name: "Analog Clock",
				description: "Classic analog clock face",
				sizes: ["small"],
				componentKey: "ClockWidget"
			},
			{
				id: "clock-analog-dark",
				name: "Analog Clock (Dark)",
				description: "Classic analog clock with dark background",
				sizes: ["small"],
				componentKey: "ClockDarkWidget"
			},
			{
				id: "clock-digital",
				name: "Digital Clock",
				description: "Modern digital time display",
				sizes: ["small", "medium"],
				componentKey: "ClockDigitalWidget"
			},
			{
				id: "clock-flip",
				name: "Retro Flip Clock",
				description: "Retro flip-card clock display",
				sizes: ["small", "medium"],
				componentKey: "ClockFlipWidget"
			},
			{
				id: "clock-world",
				name: "World Clock",
				description: "Clock with city time list",
				sizes: ["medium"],
				componentKey: "ClockWorldWidget"
			}
		]
	},
	{
		id: "notes",
		name: "Notes",
		icon: "lucide:StickyNote",
		iconColor: ["#ffd60a", "#ff9f0a"],
		iconTextColor: "#1c1c1e",
		component: "Notes",
		defaultSize: {
			width: 720,
			height: 520
		},
		minSize: {
			width: 500,
			height: 360
		},
		hasMenuBar: !1,
		category: "productivity",
		mobileFullscreen: !1,
		widgets: [{
			id: "notes-preview",
			name: "Notes",
			description: "Quick note preview",
			sizes: ["medium", "large"],
			componentKey: "NotesWidget"
		}]
	},
	{
		id: "photos",
		name: "Photos",
		icon: "lucide:Image",
		iconColor: ["#ff6b6b", "#ffa94d"],
		component: "Photos",
		defaultSize: {
			width: 900,
			height: 600
		},
		minSize: {
			width: 480,
			height: 360
		},
		category: "media",
		mobileFullscreen: !0
	},
	{
		id: "music",
		name: "Music",
		icon: "lucide:Music",
		iconColor: ["#ff2d55", "#ff6b00"],
		component: "Music",
		defaultSize: {
			width: 380,
			height: 580
		},
		minSize: {
			width: 320,
			height: 480
		},
		category: "media",
		mobileFullscreen: !0
	},
	{
		id: "calendar",
		name: "Calendar",
		icon: "lucide:Calendar",
		iconColor: ["#ff3b30", "#ff6b2b"],
		component: "Calendar",
		defaultSize: {
			width: 900,
			height: 580
		},
		minSize: {
			width: 600,
			height: 400
		},
		hasMenuBar: !1,
		category: "productivity",
		mobileFullscreen: !0,
		widgets: [{
			id: "calendar-today",
			name: "Calendar Today",
			description: "Today date card widget",
			sizes: ["small"],
			componentKey: "CalendarTodayWidget"
		}, {
			id: "calendar-mini",
			name: "Calendar Month",
			description: "Month view calendar",
			sizes: [
				"small",
				"medium",
				"large"
			],
			componentKey: "CalendarWidget"
		}]
	},
	{
		id: "messages",
		name: "Messages",
		icon: "lucide:MessageSquare",
		iconColor: ["#30d158", "#25a244"],
		component: "Messages",
		defaultSize: {
			width: 780,
			height: 540
		},
		minSize: {
			width: 480,
			height: 400
		},
		hasMenuBar: !1,
		category: "communication",
		mobileFullscreen: !0
	}
], Ze = [
	"finder",
	"browser",
	"notes",
	"music",
	"messages",
	"calendar",
	"photos",
	"terminal",
	"textedit",
	"clock",
	"settings"
];
//#endregion
//#region src/store/desktop-slice.ts
function Qe(e) {
	return {
		wallpaperId: Je,
		wallpaperFitMode: "fill",
		customWallpapers: [],
		wallpaperCycle: {
			enabled: !1,
			interval: "30m",
			randomOrder: !0,
			group: "builtin"
		},
		iconLayout: [],
		dockAppIds: Ze,
		dockSize: 43,
		dockMagnification: .48,
		dockAutoHide: !1,
		showOpenAppIndicators: !0,
		glassMode: "tinted",
		useStacks: !1,
		stackGroupBy: "kind",
		language: "en",
		desktopIconSize: 64,
		desktopGridSpacing: 50,
		desktopTextSize: 12,
		desktopLabelPosition: "bottom",
		desktopSortBy: "none",
		desktopViewOptionsOpen: !1,
		wallpaperTextTheme: "dark",
		setWallpaper(t) {
			e((e) => {
				e.wallpaperId = t;
			});
		},
		setWallpaperFitMode(t) {
			e((e) => {
				e.wallpaperFitMode = t;
			});
		},
		addCustomWallpaper(t) {
			e((e) => {
				e.customWallpapers.some((e) => e.id === t.id) || e.customWallpapers.push(t);
			});
		},
		removeCustomWallpaper(t) {
			e((e) => {
				e.customWallpapers = e.customWallpapers.filter((e) => e.id !== t), e.wallpaperId === t && (e.wallpaperId = Je);
			});
		},
		setWallpaperCycle(t) {
			e((e) => {
				e.wallpaperCycle = {
					...e.wallpaperCycle,
					...t
				};
			});
		},
		moveIcon(t, n, r) {
			e((e) => {
				let i = e.iconLayout.find((e) => e.appId === t);
				i ? (i.x = n, i.y = r) : e.iconLayout.push({
					appId: t,
					x: n,
					y: r
				});
			});
		},
		setIconLayout(t) {
			e((e) => {
				e.iconLayout = t;
			});
		},
		pinToDock(t) {
			e((e) => {
				e.dockAppIds.includes(t) || e.dockAppIds.push(t);
			});
		},
		unpinFromDock(t) {
			e((e) => {
				e.dockAppIds = e.dockAppIds.filter((e) => e !== t);
			});
		},
		reorderDock(t) {
			e((e) => {
				e.dockAppIds = t;
			});
		},
		setDockSize(t) {
			e((e) => {
				e.dockSize = t;
			});
		},
		setDockMagnification(t) {
			e((e) => {
				e.dockMagnification = t;
			});
		},
		setDockAutoHide(t) {
			e((e) => {
				e.dockAutoHide = t;
			});
		},
		setShowOpenAppIndicators(t) {
			e((e) => {
				e.showOpenAppIndicators = t;
			});
		},
		setGlassMode(t) {
			e((e) => {
				e.glassMode = t;
			});
		},
		toggleStacks() {
			e((e) => {
				e.useStacks = !e.useStacks;
			});
		},
		setStackGroupBy(t) {
			e((e) => {
				e.stackGroupBy = t;
			});
		},
		setLanguage(t) {
			e((e) => {
				e.language = t;
			});
		},
		setDesktopIconSize(t) {
			e((e) => {
				e.desktopIconSize = t;
			});
		},
		setDesktopGridSpacing(t) {
			e((e) => {
				e.desktopGridSpacing = t;
			});
		},
		setDesktopTextSize(t) {
			e((e) => {
				e.desktopTextSize = t;
			});
		},
		setDesktopLabelPosition(t) {
			e((e) => {
				e.desktopLabelPosition = t;
			});
		},
		setDesktopSortBy(t) {
			e((e) => {
				e.desktopSortBy = t;
			});
		},
		setDesktopViewOptionsOpen(t) {
			e((e) => {
				e.desktopViewOptionsOpen = t;
			});
		},
		setWallpaperTextTheme(t) {
			e((e) => {
				e.wallpaperTextTheme = t;
			});
		}
	};
}
//#endregion
//#region src/store/notification-slice.ts
var $e = 50;
function et(e) {
	return {
		notifications: [],
		pushNotification(t) {
			let n = Ie(8);
			return e((e) => {
				e.notifications.unshift({
					...t,
					id: n,
					timestamp: Date.now(),
					read: !1
				}), e.notifications.length > $e && (e.notifications = e.notifications.slice(0, $e));
			}), n;
		},
		markRead(t) {
			e((e) => {
				let n = e.notifications.find((e) => e.id === t);
				n && (n.read = !0);
			});
		},
		markAllRead(t) {
			e((e) => {
				for (let n of e.notifications) (!t || n.appId === t) && (n.read = !0);
			});
		},
		dismissNotification(t) {
			e((e) => {
				e.notifications = e.notifications.filter((e) => e.id !== t);
			});
		},
		clearAll() {
			e((e) => {
				e.notifications = [];
			});
		}
	};
}
//#endregion
//#region src/store/vfs-slice.ts
function tt(e) {
	let t = e.lastIndexOf("/");
	return t <= 0 ? "/" : e.slice(0, t);
}
function $(e) {
	return e.slice(e.lastIndexOf("/") + 1);
}
var nt = rt();
function rt() {
	let e = Date.now(), t = [
		"/",
		"/Users",
		"/Users/user",
		"/Users/user/Desktop",
		"/Users/user/Documents",
		"/Users/user/Downloads",
		"/Users/user/Pictures",
		"/Users/user/Music",
		"/Applications"
	], n = {};
	for (let r of t) n[r] = {
		type: "dir",
		name: r === "/" ? "/" : $(r),
		path: r,
		createdAt: e
	};
	for (let [t, r] of [
		["/Users/user/Documents/README.md", "# Welcome\n\nThis is your virtual filesystem.\n\nYou can create, edit, and delete files here.\n"],
		["/Users/user/Documents/Notes.txt", "My first note\n\nCreated on the Desktop Layout OS simulator.\n"],
		["/Users/user/Desktop/Getting Started.txt", "Welcome to Desktop Layout!\n\nClick apps in the dock to get started.\n"]
	]) n[t] = {
		type: "file",
		name: $(t),
		path: t,
		content: r,
		createdAt: e,
		modifiedAt: e,
		mimeType: t.endsWith(".md") ? "text/markdown" : "text/plain"
	};
	return n;
}
function it(e, t) {
	return {
		vfs: nt,
		vfsWriteFile(t, n, r) {
			e((e) => {
				let i = Date.now(), a = e.vfs[t];
				if (a && a.type === "file") a.content = n, a.modifiedAt = i;
				else {
					e.vfs[t] = {
						type: "file",
						name: $(t),
						path: t,
						content: n,
						createdAt: i,
						modifiedAt: i,
						mimeType: r
					};
					let a = tt(t);
					e.vfs[a] || (e.vfs[a] = {
						type: "dir",
						name: $(a),
						path: a,
						createdAt: i
					});
				}
			});
		},
		vfsReadFile(e) {
			let n = t().vfs[e];
			return n?.type === "file" ? n.content : null;
		},
		vfsMkdir(t) {
			e((e) => {
				e.vfs[t] || (e.vfs[t] = {
					type: "dir",
					name: $(t),
					path: t,
					createdAt: Date.now()
				});
			});
		},
		vfsRm(t) {
			e((e) => {
				let n = t.endsWith("/") ? t : t + "/";
				for (let r of Object.keys(e.vfs)) (r === t || r.startsWith(n)) && delete e.vfs[r];
			});
		},
		vfsMv(t, n) {
			e((e) => {
				let r = Date.now(), i = Object.entries(e.vfs), a = t.endsWith("/") ? t : t + "/";
				for (let [o, s] of i) if (o === t || o.startsWith(a)) {
					let i = n + o.slice(t.length), a = s.type === "file" ? {
						...s,
						path: i,
						name: $(i),
						modifiedAt: r
					} : {
						...s,
						path: i,
						name: $(i)
					};
					delete e.vfs[o], e.vfs[i] = a;
				}
			});
		},
		vfsLs(e) {
			let n = t().vfs, r = e.endsWith("/") && e !== "/" ? e.slice(0, -1) : e;
			return Object.values(n).filter((e) => e.path !== r && tt(e.path) === r);
		},
		vfsExists(e) {
			return !!t().vfs[e];
		}
	};
}
//#endregion
//#region src/store/widget-slice.ts
function at(e, t) {
	return {
		widgetInstances: [],
		isEditingWidgets: !1,
		_galleryMinimizedWindowIds: [],
		openWidgetGallery() {
			let n = Object.values(t().windows).filter((e) => !e.isMinimized).map((e) => e.id);
			for (let e of n) t().minimizeWindow(e);
			e((e) => {
				e.isEditingWidgets = !0, e._galleryMinimizedWindowIds = n;
			});
		},
		closeWidgetGallery() {
			let n = t()._galleryMinimizedWindowIds;
			e((e) => {
				e.isEditingWidgets = !1, e._galleryMinimizedWindowIds = [];
			});
			for (let e of n) t().windows[e] && t().restoreWindow(e);
		},
		addWidget(t, n, r, i) {
			let a = {
				instanceId: Ie(8),
				definitionId: t.id,
				size: n,
				x: r,
				y: i
			};
			e((e) => {
				e.widgetInstances.push(a);
			});
		},
		removeWidget(t) {
			e((e) => {
				e.widgetInstances = e.widgetInstances.filter((e) => e.instanceId !== t);
			});
		},
		moveWidget(t, n, r) {
			e((e) => {
				let i = e.widgetInstances.find((e) => e.instanceId === t);
				i && (i.x = n, i.y = r);
			});
		}
	};
}
//#endregion
//#region src/store/index.ts
var ot = o()(Me(Pe((e, t) => {
	let n = e, r = t;
	return {
		...Ve(n, r),
		...He(n),
		...Ue(n),
		...Qe(n),
		...et(n),
		...it(n, r),
		...at(n, r)
	};
}, {
	name: "desktop-layout-store",
	storage: Ne(() => typeof window > "u" ? {
		getItem: () => null,
		setItem: () => {},
		removeItem: () => {}
	} : localStorage),
	partialize: (e) => ({
		osTheme: e.osTheme,
		colorScheme: e.colorScheme,
		glassEnabled: e.glassEnabled,
		accentColor: e.accentColor,
		highlightColor: e.highlightColor,
		allowDragOutOfBounds: e.allowDragOutOfBounds,
		wallpaperId: e.wallpaperId,
		wallpaperFitMode: e.wallpaperFitMode,
		customWallpapers: e.customWallpapers,
		wallpaperCycle: e.wallpaperCycle,
		iconLayout: e.iconLayout,
		dockAppIds: e.dockAppIds,
		dockSize: e.dockSize,
		dockMagnification: e.dockMagnification,
		dockAutoHide: e.dockAutoHide,
		showOpenAppIndicators: e.showOpenAppIndicators,
		glassMode: e.glassMode,
		useStacks: e.useStacks,
		stackGroupBy: e.stackGroupBy,
		notifications: e.notifications,
		vfs: e.vfs,
		widgetInstances: e.widgetInstances,
		language: e.language,
		desktopIconSize: e.desktopIconSize,
		desktopGridSpacing: e.desktopGridSpacing,
		desktopTextSize: e.desktopTextSize,
		desktopLabelPosition: e.desktopLabelPosition,
		desktopSortBy: e.desktopSortBy
	})
})));
//#endregion
export { Je as a, Ke as c, Le as d, o as f, qe as i, ze as l, Xe as n, Ge as o, Ye as r, We as s, ot as t, Re as u };
