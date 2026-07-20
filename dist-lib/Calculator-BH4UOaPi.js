import { t as e } from "./store-BQ3wWDKN.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./createLucideIcon--WjuKCts.js";
import { t as r } from "./useTranslation-WZxIuhj4.js";
import { useCallback as i, useEffect as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
var u = n("delete", [
	["path", {
		d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
		key: "1yo7s0"
	}],
	["path", {
		d: "m12 9 6 6",
		key: "anjzzh"
	}],
	["path", {
		d: "m18 9-6 6",
		key: "1fp51s"
	}]
]), ee = n("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]);
//#endregion
//#region src/components/apps/Calculator.tsx
function d({ windowId: n, appId: d }) {
	let { language: te } = r(), f = e((e) => e.windows[n]), p = e((e) => e.resizeWindow), [m, h] = o("basic"), [g, _] = o(!1), [v, y] = o("0"), [b, x] = o(null), [S, C] = o(null), [w, T] = o(!1), [E, D] = o([]), [O, k] = o(!0), [A, j] = o(!1), [M, N] = o(0), [P, F] = o("DEC"), [I, ne] = o(64), [L, re] = o("ASCII"), [R, ie] = o(!0), z = i(() => {
		if (m === "programmer") {
			if (P === "HEX") {
				let e = parseInt(v, 16);
				return isNaN(e) ? 0 : e;
			}
			if (P === "OCT") {
				let e = parseInt(v, 8);
				return isNaN(e) ? 0 : e;
			}
			if (P === "BIN") {
				let e = parseInt(v, 2);
				return isNaN(e) ? 0 : e;
			}
			let e = parseInt(v, 10);
			return isNaN(e) ? 0 : e;
		}
		let e = parseFloat(v.replace(",", "."));
		return isNaN(e) ? 0 : e;
	}, [
		v,
		m,
		P
	]), B = i((e, t = P) => {
		if (m === "programmer") {
			let n = Math.floor(e);
			if (t === "HEX") return n.toString(16).toUpperCase();
			if (t === "OCT") return n.toString(8);
			if (t === "BIN") {
				let e = (n >>> 0).toString(2);
				return e.length > I && (e = e.slice(-I)), e || "0";
			}
			return n.toString(10);
		}
		if (isNaN(e)) return "Error";
		if (!isFinite(e)) return "Infinity";
		let n = e.toString();
		if (n.includes("e")) return n;
		let r = n.split(".");
		return r[1] && r[1].length > 8 ? e.toFixed(8).replace(/\.?0+$/, "") : n;
	}, [
		m,
		P,
		I
	]), V = i((e) => {
		if (h(e), !f) return;
		let t = 320, r = 460;
		e === "scientific" ? (t = 620, r = 460) : e === "programmer" && (t = 620, r = 500), g && (t += 180), p(n, {
			x: f.rect.x,
			y: f.rect.y,
			width: t,
			height: r
		}, !1);
	}, [
		f,
		g,
		p,
		n
	]), H = i(() => {
		let e = !g;
		if (_(e), !f) return;
		let t = f.rect.width, r = e ? t + 180 : t - 180;
		p(n, {
			x: f.rect.x,
			y: f.rect.y,
			width: r,
			height: f.rect.height
		}, !1);
	}, [
		f,
		g,
		p,
		n
	]);
	a(() => {
		let e = (e) => {
			e.detail.windowId === n && H();
		}, t = (e) => {
			let t = e;
			t.detail.windowId === n && V(t.detail.mode);
		};
		return window.addEventListener("app:calculator:toggle-history", e), window.addEventListener("app:calculator:set-mode", t), () => {
			window.removeEventListener("app:calculator:toggle-history", e), window.removeEventListener("app:calculator:set-mode", t);
		};
	}, [
		n,
		H,
		V
	]), a(() => {
		window.dispatchEvent(new CustomEvent("app:calculator:state-changed", { detail: {
			windowId: n,
			mode: m,
			showHistory: g
		} }));
	}, [
		n,
		m,
		g
	]);
	let U = i((e) => {
		y((t) => t === "0" || w ? (T(!1), e) : t.length > 20 && !w ? t : t + e);
	}, [w]), W = i(() => {
		m !== "programmer" && y((e) => w ? (T(!1), "0.") : e.includes(".") ? e : e + ".");
	}, [m, w]), G = i(() => {
		y("0"), x(null), C(null), T(!1);
	}, []), K = i(() => {
		y((e) => e.length <= 1 || w ? "0" : e.slice(0, -1));
	}, [w]), q = i(() => {
		let e = z();
		y(B(-e));
	}, [z, B]), J = i(() => {
		let e = z();
		y(B(e / 100));
	}, [z, B]), Y = i((e, t, n) => {
		switch (e) {
			case "+": return t + n;
			case "-": return t - n;
			case "×":
			case "*": return t * n;
			case "÷":
			case "/": return n === 0 ? NaN : t / n;
			case "xʸ":
			case "^": return t ** +n;
			case "y√x": return t ** (1 / n);
			case "logy": return Math.log(t) / Math.log(n);
			case "AND": return t & n;
			case "OR": return t | n;
			case "XOR": return t ^ n;
			case "NOR": return ~(t | n);
			case "<<": return t << n;
			case ">>": return t >> n;
			case "X<<Y": return t << n;
			case "X>>Y": return t >> n;
			case "RoL": {
				let e = n % I;
				return t << e | t >>> I - e;
			}
			case "RoR": {
				let e = n % I;
				return t >>> e | t << I - e;
			}
			case "mod": return t % n;
			default: return n;
		}
	}, [I]), X = i((e) => {
		let t = z();
		if (b === null) x(t);
		else if (S) {
			let e = Y(S, b, t);
			x(e), y(B(e));
		}
		C(e), T(!0);
	}, [
		z,
		b,
		S,
		Y,
		B
	]), Z = i(() => {
		let e = z();
		if (b === null || !S) return;
		let t = Y(S, b, e), n = `${B(b)} ${S} ${B(e)}`, r = B(t);
		D((e) => [...e, {
			expression: n,
			result: r
		}]), y(r), x(null), C(null), T(!0);
	}, [
		z,
		b,
		S,
		Y,
		B
	]), Q = (e) => {
		let t = z(), n = 0;
		switch (e) {
			case "x²":
				n = t * t;
				break;
			case "x³":
				n = t * t * t;
				break;
			case "2ˣ":
				n = 2 ** t;
				break;
			case "1/x":
				n = 1 / t;
				break;
			case "2√x":
				n = Math.sqrt(t);
				break;
			case "3√x":
				n = Math.cbrt(t);
				break;
			case "ln":
				n = Math.log(t);
				break;
			case "log₂":
				n = Math.log2(t);
				break;
			case "log₁₀":
				n = Math.log10(t);
				break;
			case "sin":
				n = Math.sin(O ? t : t * Math.PI / 180);
				break;
			case "cos":
				n = Math.cos(O ? t : t * Math.PI / 180);
				break;
			case "tan":
				n = Math.tan(O ? t : t * Math.PI / 180);
				break;
			case "sinh":
				n = Math.sinh(t);
				break;
			case "cosh":
				n = Math.cosh(t);
				break;
			case "tanh":
				n = Math.tanh(t);
				break;
			case "sin⁻¹": {
				let e = Math.asin(t);
				n = O ? e : e * 180 / Math.PI;
				break;
			}
			case "cos⁻¹": {
				let e = Math.acos(t);
				n = O ? e : e * 180 / Math.PI;
				break;
			}
			case "tan⁻¹": {
				let e = Math.atan(t);
				n = O ? e : e * 180 / Math.PI;
				break;
			}
			case "sinh⁻¹":
				n = Math.asinh(t);
				break;
			case "cosh⁻¹":
				n = Math.acosh(t);
				break;
			case "tanh⁻¹":
				n = Math.atanh(t);
				break;
			case "x!":
				if (t < 0 || !Number.isInteger(t)) n = NaN;
				else {
					let e = 1;
					for (let n = 1; n <= t; n++) e *= n;
					n = e;
				}
				break;
			case "e":
				n = Math.E;
				break;
			case "π":
				n = Math.PI;
				break;
			case "Rand":
				n = Math.random();
				break;
			default: return;
		}
		y(B(n)), T(!0);
	}, $ = (e) => {
		let t = z();
		switch (e) {
			case "mc":
				N(0);
				break;
			case "mr":
				y(B(M)), T(!0);
				break;
			case "m+":
				N((e) => e + t);
				break;
			case "m-":
				N((e) => e - t);
				break;
			default: break;
		}
	}, ae = (e) => {
		let t = z(), n = BigInt(Math.floor(t)) ^ BigInt(1) << BigInt(e);
		y(B(Number(n)));
	}, oe = (e) => {
		let t = z();
		F(e), y(B(t, e));
	};
	return a(() => {
		if (!f?.isFocused) return;
		let e = (e) => {
			let t = e.key;
			if (/^[0-9]$/.test(t)) {
				if (m === "programmer" && P === "BIN" && t !== "0" && t !== "1" || m === "programmer" && P === "OCT" && !/^[0-7]$/.test(t)) return;
				U(t), e.preventDefault();
			}
			/^[a-fA-F]$/.test(t) && m === "programmer" && P === "HEX" && (U(t.toUpperCase()), e.preventDefault()), t === "+" && (X("+"), e.preventDefault()), t === "-" && (X("-"), e.preventDefault()), (t === "*" || t === "x" || t === "X") && (X("×"), e.preventDefault()), t === "/" && (X("÷"), e.preventDefault()), (t === "=" || t === "Enter") && (Z(), e.preventDefault()), (t === "." || t === ",") && (W(), e.preventDefault()), t === "Backspace" && (K(), e.preventDefault()), (t === "Escape" || t === "c" || t === "C") && (G(), e.preventDefault());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		f?.isFocused,
		m,
		P,
		U,
		W,
		X,
		Z,
		K,
		G
	]), /* @__PURE__ */ l("div", {
		className: "flex h-full w-full bg-[#f4f3ee] dark:bg-[#1b1916] text-[#1c1c1e] dark:text-white select-none overflow-hidden",
		children: [g && /* @__PURE__ */ l("div", {
			className: "w-[180px] shrink-0 border-r border-black/5 dark:border-white/5 bg-[#eae8e4] dark:bg-[#171513] flex flex-col h-full z-10 transition-all duration-200",
			children: [
				/* @__PURE__ */ c("div", { className: "h-11 shrink-0 flex items-center px-4" }),
				/* @__PURE__ */ c("div", {
					className: "flex-1 overflow-y-auto px-3 py-2 space-y-3",
					children: E.length === 0 ? /* @__PURE__ */ l("div", {
						className: "flex flex-col items-center justify-center h-full text-neutral-400 dark:text-neutral-500 gap-2",
						children: [/* @__PURE__ */ c(ee, { className: "w-8 h-8 opacity-40" }), /* @__PURE__ */ c("span", {
							className: "text-xs font-medium text-neutral-500 dark:text-neutral-400",
							children: "No History"
						})]
					}) : E.map((e, t) => /* @__PURE__ */ l("div", {
						className: "text-right text-xs py-1.5 border-b border-black/5 dark:border-white/5 group relative hover:bg-black/5 dark:hover:bg-white/5 rounded px-1 cursor-pointer transition-colors",
						onClick: () => y(e.result),
						children: [/* @__PURE__ */ c("div", {
							className: "text-[10px] text-neutral-400 dark:text-neutral-500 font-mono truncate",
							children: e.expression
						}), /* @__PURE__ */ c("div", {
							className: "font-semibold text-neutral-700 dark:text-neutral-200 font-mono mt-0.5",
							children: e.result
						})]
					}, t))
				}),
				E.length > 0 && /* @__PURE__ */ c("div", {
					className: "p-2 border-t border-black/5 dark:border-white/5",
					children: /* @__PURE__ */ c("button", {
						onClick: () => D([]),
						className: "w-full text-center py-1 text-[10px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white bg-black/5 dark:bg-white/5 rounded active:bg-black/10 dark:active:bg-white/10 transition-colors font-medium",
						children: "Clear History"
					})
				})
			]
		}), /* @__PURE__ */ l("div", {
			className: "flex-1 flex flex-col h-full relative",
			children: [
				/* @__PURE__ */ c("div", { className: "h-11 shrink-0 w-full" }),
				/* @__PURE__ */ l("div", {
					className: "flex-1 flex flex-col justify-end items-end px-5 py-3 relative min-h-0 select-text",
					children: [b !== null && S && /* @__PURE__ */ l("div", {
						className: "text-neutral-400 dark:text-neutral-500 text-xs font-mono mb-1 truncate max-w-full select-none",
						children: [
							B(b),
							" ",
							S
						]
					}), /* @__PURE__ */ c("div", {
						className: t("font-light tracking-tight truncate max-w-full select-all font-mono leading-none text-right", v.length > 14 ? "text-2xl" : v.length > 10 ? "text-3xl" : "text-5xl"),
						children: v
					})]
				}),
				m === "programmer" && /* @__PURE__ */ l("div", {
					className: "px-4 py-2 space-y-2 border-t border-black/5 dark:border-white/5 select-none shrink-0 bg-black/5 dark:bg-black/10",
					children: [
						/* @__PURE__ */ c("div", {
							className: "grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[10px] text-neutral-500 dark:text-neutral-400",
							children: [
								"HEX",
								"DEC",
								"OCT",
								"BIN"
							].map((e) => {
								let n = P === e, r = B(z(), e);
								return /* @__PURE__ */ l("div", {
									onClick: () => oe(e),
									className: t("flex items-center justify-between py-0.5 px-1.5 rounded cursor-pointer transition-colors", n ? "bg-amber-500/10 text-amber-500 font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"),
									children: [/* @__PURE__ */ c("span", { children: e }), /* @__PURE__ */ c("span", {
										className: "truncate max-w-[170px] font-semibold text-right text-neutral-850 dark:text-neutral-200",
										children: r
									})]
								}, e);
							})
						}),
						R && (() => {
							let e = z(), n = BigInt(Math.floor(e)), r = [];
							for (let e = 63; e >= 0; e--) r.push(Number(n >> BigInt(e) & BigInt(1)));
							let i = r.slice(0, 32), a = r.slice(32, 64), o = (e, n) => {
								let r = [];
								for (let t = 0; t < 8; t++) r.push(e.slice(t * 4, (t + 1) * 4));
								return /* @__PURE__ */ c("div", {
									className: "flex justify-between items-center gap-1.5 font-mono text-[10px] text-neutral-500 dark:text-neutral-400",
									children: r.map((e, r) => {
										let i = n - r * 4;
										return /* @__PURE__ */ l("div", {
											className: "flex flex-col items-center gap-0.5",
											children: [
												/* @__PURE__ */ c("div", {
													className: "flex gap-1",
													children: e.map((e, n) => {
														let r = i - n;
														return /* @__PURE__ */ c("button", {
															onClick: () => ae(r),
															className: t("w-2.5 h-3.5 flex items-center justify-center rounded transition-colors select-none", e === 1 ? "text-amber-500 font-semibold bg-amber-500/10 hover:bg-amber-500/20" : "text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"),
															children: e
														}, n);
													})
												}),
												r === 0 && /* @__PURE__ */ c("span", {
													className: "text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5",
													children: n
												}),
												r === 4 && /* @__PURE__ */ c("span", {
													className: "text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5",
													children: n - 16
												}),
												r === 7 && n === 31 && /* @__PURE__ */ c("span", {
													className: "text-[7px] text-neutral-400 dark:text-neutral-600 font-mono -mt-0.5",
													children: "0"
												})
											]
										}, r);
									})
								});
							};
							return /* @__PURE__ */ l("div", {
								className: "space-y-1.5 p-2 bg-black/5 dark:bg-neutral-900/60 rounded-lg border border-black/5 dark:border-white/5 select-none shrink-0",
								children: [o(i, 63), o(a, 31)]
							});
						})(),
						/* @__PURE__ */ l("div", {
							className: "flex justify-between items-center text-[9px] text-neutral-450 dark:text-neutral-500 font-mono px-1",
							children: [/* @__PURE__ */ l("span", { children: [L, ":"] }), /* @__PURE__ */ c("span", {
								className: "text-neutral-600 dark:text-neutral-300 truncate max-w-[200px]",
								children: (() => {
									let e = z();
									return e < 32 || e > 126 ? "Control / Non-Printable" : String.fromCharCode(e);
								})()
							})]
						})
					]
				}),
				/* @__PURE__ */ l("div", {
					className: "p-4 pt-1 shrink-0 border-t border-black/5 dark:border-white/5 select-none bg-[#eae8e4] dark:bg-[#171513]",
					children: [
						m === "basic" && /* @__PURE__ */ l("div", {
							className: "grid grid-cols-4 gap-2.5",
							children: [
								/* @__PURE__ */ c("button", {
									onClick: K,
									className: "h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors",
									children: /* @__PURE__ */ c(u, { className: "w-4.5 h-4.5" })
								}),
								/* @__PURE__ */ c("button", {
									onClick: G,
									className: "h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white font-medium transition-colors",
									children: "AC"
								}),
								/* @__PURE__ */ c("button", {
									onClick: J,
									className: "h-12 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] active:bg-[#c2c1be] dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:active:bg-neutral-500 text-[#1c1c1e] dark:text-white font-medium transition-colors",
									children: "%"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("÷"),
									className: t("h-12 rounded-full font-semibold text-xl transition-colors", S === "÷" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "÷"
								}),
								[
									"7",
									"8",
									"9"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("×"),
									className: t("h-12 rounded-full font-semibold text-xl transition-colors", S === "×" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "×"
								}),
								[
									"4",
									"5",
									"6"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("-"),
									className: t("h-12 rounded-full font-semibold text-2xl transition-colors", S === "-" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "-"
								}),
								[
									"1",
									"2",
									"3"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("+"),
									className: t("h-12 rounded-full font-semibold text-xl transition-colors", S === "+" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "+"
								}),
								/* @__PURE__ */ c("button", {
									onClick: q,
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-lg font-medium transition-colors",
									children: "+/-"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => U("0"),
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors",
									children: "0"
								}),
								/* @__PURE__ */ c("button", {
									onClick: W,
									className: "h-12 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] active:bg-[#cfcdca] dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-600 text-[#1c1c1e] dark:text-white text-xl font-medium transition-colors",
									children: ","
								}),
								/* @__PURE__ */ c("button", {
									onClick: Z,
									className: "h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-2xl font-bold transition-colors",
									children: "="
								})
							]
						}),
						m === "scientific" && /* @__PURE__ */ l("div", {
							className: "grid grid-cols-10 gap-1.5 text-[10px]",
							children: [
								/* @__PURE__ */ c("button", {
									onClick: () => U("("),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "("
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => U(")"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: ")"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => $("mc"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "mc"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => $("m+"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "m+"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => $("m-"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "m-"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => $("mr"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "mr"
								}),
								/* @__PURE__ */ c("button", {
									onClick: K,
									className: "h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors",
									children: /* @__PURE__ */ c(u, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ c("button", {
									onClick: G,
									className: "h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white font-semibold transition-colors",
									children: "AC"
								}),
								/* @__PURE__ */ c("button", {
									onClick: J,
									className: "h-10 rounded-full bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white font-semibold transition-colors",
									children: "%"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("÷"),
									className: t("h-10 rounded-full font-bold text-sm transition-colors", S === "÷" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "÷"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => j(!A),
									className: t("h-10 rounded-full transition-colors font-semibold", A ? "bg-amber-500 text-white" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200"),
									children: "2ⁿᵈ"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("x²"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "x²"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("x³"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "x³"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("xʸ"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "xʸ"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("2ˣ"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "2ˣ"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("e"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "e"
								}),
								[
									"7",
									"8",
									"9"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("×"),
									className: t("h-10 rounded-full font-bold text-sm transition-colors", S === "×" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "×"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("1/x"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "1/x"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("2√x"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "²√x"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("3√x"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "³√x"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("y√x"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "ʸ√x"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("logy"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "logʸ"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("log₂"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "log₂"
								}),
								[
									"4",
									"5",
									"6"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("-"),
									className: t("h-10 rounded-full font-bold text-sm transition-colors", S === "-" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "-"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("x!"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "x!"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "sin⁻¹" : "sin"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "sin⁻¹" : "sin"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "cos⁻¹" : "cos"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "cos⁻¹" : "cos"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "tan⁻¹" : "tan"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "tan⁻¹" : "tan"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("log₁₀"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "log₁₀"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => X("EE"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "EE"
								}),
								[
									"1",
									"2",
									"3"
								].map((e) => /* @__PURE__ */ c("button", {
									onClick: () => U(e),
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: e
								}, e)),
								/* @__PURE__ */ c("button", {
									onClick: () => X("+"),
									className: t("h-10 rounded-full font-bold text-sm transition-colors", S === "+" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
									children: "+"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("Rand"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "Rand"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "sinh⁻¹" : "sinh"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "sinh⁻¹" : "sinh"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "cosh⁻¹" : "cosh"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "cosh⁻¹" : "cosh"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q(A ? "tanh⁻¹" : "tanh"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: A ? "tanh⁻¹" : "tanh"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => Q("π"),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: "π"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => k(!O),
									className: "h-10 rounded-full bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
									children: O ? "Rad" : "Deg"
								}),
								/* @__PURE__ */ c("button", {
									onClick: q,
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: "+/-"
								}),
								/* @__PURE__ */ c("button", {
									onClick: () => U("0"),
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: "0"
								}),
								/* @__PURE__ */ c("button", {
									onClick: W,
									className: "h-10 rounded-full bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white text-xs font-bold transition-colors",
									children: ","
								}),
								/* @__PURE__ */ c("button", {
									onClick: Z,
									className: "h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold transition-colors",
									children: "="
								})
							]
						}),
						m === "programmer" && /* @__PURE__ */ c("div", {
							className: "grid grid-cols-7 gap-1.5 text-[9px] font-semibold",
							children: (() => {
								let e = P === "BIN", n = P === "OCT", r = P !== "HEX", i = e || n, a = e;
								return /* @__PURE__ */ l(s, { children: [
									/* @__PURE__ */ c("button", {
										onClick: K,
										className: "h-10 rounded-lg bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white flex items-center justify-center transition-colors",
										children: /* @__PURE__ */ c(u, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("("),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "("
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U(")"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: ")"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("D"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "D"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("E"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "E"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("F"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "F"
									}),
									/* @__PURE__ */ c("button", {
										onClick: G,
										className: "h-10 rounded-lg bg-[#dcdbd7] hover:bg-[#cfceca] dark:bg-neutral-700 dark:hover:bg-neutral-600 text-[#1c1c1e] dark:text-white transition-colors",
										children: "AC"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("AND"),
										className: t("h-10 rounded-lg transition-colors", S === "AND" ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200"),
										children: "AND"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("OR"),
										className: t("h-10 rounded-lg transition-colors", S === "OR" ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200"),
										children: "OR"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("XOR"),
										className: t("h-10 rounded-lg transition-colors", S === "XOR" ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200"),
										children: "XOR"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("A"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "A"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("B"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "B"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("C"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "C"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("÷"),
										className: t("h-10 rounded-lg transition-colors text-sm font-bold", S === "÷" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
										children: "÷"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("NOR"),
										className: t("h-10 rounded-lg transition-colors", S === "NOR" ? "bg-amber-500/20 text-amber-500 font-bold border border-amber-500/50" : "bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200"),
										children: "NOR"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("<<"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "<<"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X(">>"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: ">>"
									}),
									[
										"7",
										"8",
										"9"
									].map((e) => {
										let n = e === "8" || e === "9" ? i : !1;
										return /* @__PURE__ */ c("button", {
											onClick: () => U(e),
											disabled: n,
											className: t("h-10 rounded-lg text-white transition-colors", n ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white"),
											children: e
										}, e);
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("×"),
										className: t("h-10 rounded-lg transition-colors text-sm font-bold", S === "×" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
										children: "×"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => Q("~"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "NOT"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("X<<Y"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "X<<Y"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("X>>Y"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "X>>Y"
									}),
									[
										"4",
										"5",
										"6"
									].map((e) => {
										let n = i;
										return /* @__PURE__ */ c("button", {
											onClick: () => U(e),
											disabled: n,
											className: t("h-10 rounded-lg text-white transition-colors", n ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white"),
											children: e
										}, e);
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("-"),
										className: t("h-10 rounded-lg transition-colors text-sm font-bold", S === "-" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
										children: "-"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => Q("NEG"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "NEG"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("RoL"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "RoL"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("RoR"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "RoR"
									}),
									[
										"1",
										"2",
										"3"
									].map((e) => {
										let n = e === "2" || e === "3" ? a : !1;
										return /* @__PURE__ */ c("button", {
											onClick: () => U(e),
											disabled: n,
											className: t("h-10 rounded-lg text-white transition-colors", n ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white"),
											children: e
										}, e);
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("+"),
										className: t("h-10 rounded-lg transition-colors text-sm font-bold", S === "+" ? "bg-white text-amber-500 shadow-sm" : "bg-amber-500 hover:bg-amber-400 text-white"),
										children: "+"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => X("mod"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "mod"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => Q("flip8"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "flip₈"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => Q("flip16"),
										className: "h-10 rounded-lg bg-neutral-300/60 hover:bg-neutral-350 dark:bg-neutral-700/60 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-neutral-200 transition-colors",
										children: "flip₁₆"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("FF"),
										disabled: r,
										className: t("h-10 rounded-lg text-white transition-colors", r ? "bg-neutral-300/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-neutral-300/60 hover:bg-[#dddbd7] dark:bg-neutral-700 dark:hover:bg-neutral-600"),
										children: "FF"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("0"),
										className: "h-10 rounded-lg bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white transition-colors",
										children: "0"
									}),
									/* @__PURE__ */ c("button", {
										onClick: () => U("00"),
										disabled: e,
										className: t("h-10 rounded-lg text-white transition-colors", e ? "bg-[#eae8e4]/10 dark:bg-neutral-800/10 text-neutral-400 dark:text-neutral-600 cursor-not-allowed" : "bg-[#eae8e4] hover:bg-[#dddbd7] dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#1c1c1e] dark:text-white"),
										children: "00"
									}),
									/* @__PURE__ */ c("button", {
										onClick: Z,
										className: "h-10 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold transition-colors",
										children: "="
									})
								] });
							})()
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { d as Calculator };
