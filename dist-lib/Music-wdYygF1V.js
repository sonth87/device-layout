import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./createLucideIcon--WjuKCts.js";
import { t as n } from "./heart-4TAFDJLs.js";
import { t as r } from "./volume-2-DAfADR-a.js";
import { t as i } from "./useTranslation-BpGBgycp.js";
import { t as a } from "./useAppLayout-DfaXs-1a.js";
import { useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
var d = t("pause", [["rect", {
	x: "14",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "kaeet6"
}], ["rect", {
	x: "5",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "1wsw3u"
}]]), f = t("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), p = t("repeat", [
	["path", {
		d: "m17 2 4 4-4 4",
		key: "nntrym"
	}],
	["path", {
		d: "M3 11v-1a4 4 0 0 1 4-4h14",
		key: "84bu3i"
	}],
	["path", {
		d: "m7 22-4-4 4-4",
		key: "1wqhfi"
	}],
	["path", {
		d: "M21 13v1a4 4 0 0 1-4 4H3",
		key: "1rx37r"
	}]
]), m = t("shuffle", [
	["path", {
		d: "m18 14 4 4-4 4",
		key: "10pe0f"
	}],
	["path", {
		d: "m18 2 4 4-4 4",
		key: "pucp1d"
	}],
	["path", {
		d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
		key: "1ailkh"
	}],
	["path", {
		d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
		key: "km57vx"
	}],
	["path", {
		d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
		key: "os18l9"
	}]
]), h = t("skip-back", [["path", {
	d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
	key: "15892j"
}], ["path", {
	d: "M3 20V4",
	key: "1ptbpl"
}]]), g = t("skip-forward", [["path", {
	d: "M21 4v16",
	key: "7j8fe9"
}], ["path", {
	d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
	key: "zs4d6"
}]]), _ = t("volume-x", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15",
		key: "1ewh16"
	}],
	["line", {
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15",
		key: "5ykzw1"
	}]
]), v = {
	en: {
		nowPlaying: "Now Playing",
		library: "Library"
	},
	vi: {
		nowPlaying: "Đang phát",
		library: "Thư viện"
	},
	ja: {
		nowPlaying: "再生中",
		library: "ライブラリ"
	},
	ko: {
		nowPlaying: "지금 재생 중",
		library: "보관함"
	},
	zh: {
		nowPlaying: "正在播放",
		library: "资料库"
	},
	th: {
		nowPlaying: "กำลังเล่น",
		library: "คลังเพลง"
	}
}, y = [
	{
		id: "1",
		title: "Midnight Drive",
		artist: "Synthwave Dreams",
		album: "Neon Nights",
		duration: 214,
		color: ["#667eea", "#764ba2"],
		emoji: "🌙"
	},
	{
		id: "2",
		title: "Ocean Breeze",
		artist: "Chill Collective",
		album: "Summer Vibes",
		duration: 183,
		color: ["#11998e", "#38ef7d"],
		emoji: "🌊"
	},
	{
		id: "3",
		title: "Urban Jungle",
		artist: "City Noise",
		album: "Metropolitan",
		duration: 247,
		color: ["#f7971e", "#ffd200"],
		emoji: "🌆"
	},
	{
		id: "4",
		title: "Starlight",
		artist: "Cosmic Echo",
		album: "Galaxies",
		duration: 196,
		color: ["#a18cd1", "#fbc2eb"],
		emoji: "⭐"
	},
	{
		id: "5",
		title: "Coffee & Rain",
		artist: "Lo-fi Beats",
		album: "Rainy Days",
		duration: 228,
		color: ["#4facfe", "#00f2fe"],
		emoji: "☕"
	},
	{
		id: "6",
		title: "Desert Wind",
		artist: "Ambient Traveler",
		album: "Landscapes",
		duration: 312,
		color: ["#fa709a", "#fee140"],
		emoji: "🌵"
	},
	{
		id: "7",
		title: "Pixel Dreams",
		artist: "Chiptune Warriors",
		album: "8-Bit World",
		duration: 167,
		color: ["#30cfd0", "#330867"],
		emoji: "🎮"
	},
	{
		id: "8",
		title: "Golden Hour",
		artist: "Indie Folk Co.",
		album: "Warm Light",
		duration: 241,
		color: ["#f093fb", "#f5576c"],
		emoji: "🌅"
	}
];
function b(e) {
	return `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")}`;
}
function x() {
	let { language: t } = i(), x = v[t] || v.en, [S, C] = c(0), [w, T] = c(!1), [E, D] = c(0), [O, k] = c(.8), [A, j] = c(!1), [M, N] = c(/* @__PURE__ */ new Set()), [P, F] = c(!1), [I, L] = c(!1), [R, z] = c("player"), B = s(null), V = y[S], { isNarrow: H } = a(), U = H ? 160 : 192;
	o(() => {
		if (!w) {
			B.current && clearInterval(B.current);
			return;
		}
		return B.current = setInterval(() => {
			D((e) => e >= V.duration ? (W(), 0) : e + 1);
		}, 1e3), () => {
			B.current && clearInterval(B.current);
		};
	}, [w, S]);
	let W = () => {
		D(0), C((e) => P ? Math.floor(Math.random() * y.length) : (e + 1) % y.length);
	}, G = () => {
		D(0), C((e) => (e - 1 + y.length) % y.length);
	}, K = (e) => {
		C(e), D(0), T(!0);
	}, q = V ? E / V.duration * 100 : 0;
	return /* @__PURE__ */ u("div", {
		className: "h-full flex flex-col",
		style: { background: `linear-gradient(160deg, ${V.color[0]}22, ${V.color[1]}11, #000)` },
		children: [/* @__PURE__ */ l("div", {
			className: "flex gap-3 px-4 pt-3 pb-2 border-b border-white/10 shrink-0",
			children: ["player", "library"].map((t) => /* @__PURE__ */ l("button", {
				onClick: () => z(t),
				className: e("text-sm font-medium capitalize transition-colors", R === t ? "text-white" : "text-white/40 hover:text-white/70"),
				children: t === "player" ? x.nowPlaying : x.library
			}, t))
		}), R === "player" ? /* @__PURE__ */ u("div", {
			className: "flex-1 flex flex-col items-center justify-between p-6 overflow-hidden",
			children: [
				/* @__PURE__ */ l("div", {
					className: "rounded-2xl shadow-2xl flex items-center justify-center",
					style: {
						width: U,
						height: U,
						fontSize: H ? 60 : 80,
						background: `linear-gradient(135deg, ${V.color[0]}, ${V.color[1]})`
					},
					children: V.emoji
				}),
				/* @__PURE__ */ l("div", {
					className: "w-full text-center mt-4",
					children: /* @__PURE__ */ u("div", {
						className: "flex items-center justify-between w-full px-1",
						children: [/* @__PURE__ */ u("div", {
							className: "text-left",
							children: [/* @__PURE__ */ l("p", {
								className: "text-white font-semibold text-lg leading-tight",
								children: V.title
							}), /* @__PURE__ */ l("p", {
								className: "text-white/60 text-sm",
								children: V.artist
							})]
						}), /* @__PURE__ */ l("button", {
							onClick: () => N((e) => {
								let t = new Set(e);
								return t.has(V.id) ? t.delete(V.id) : t.add(V.id), t;
							}),
							children: /* @__PURE__ */ l(n, { className: e("w-5 h-5 transition-colors", M.has(V.id) ? "fill-red-500 text-red-500" : "text-white/40") })
						})]
					})
				}),
				/* @__PURE__ */ u("div", {
					className: "w-full mt-3",
					children: [/* @__PURE__ */ l("div", {
						className: "relative h-1.5 rounded-full bg-white/20 cursor-pointer",
						onClick: (e) => {
							let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / t.width;
							D(Math.round(n * V.duration));
						},
						children: /* @__PURE__ */ l("div", {
							className: "h-full rounded-full bg-white transition-all",
							style: { width: `${q}%` }
						})
					}), /* @__PURE__ */ u("div", {
						className: "flex justify-between mt-1 text-[11px] text-white/50 tabular-nums",
						children: [/* @__PURE__ */ l("span", { children: b(E) }), /* @__PURE__ */ l("span", { children: b(V.duration) })]
					})]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex items-center gap-5 mt-2",
					children: [
						/* @__PURE__ */ l("button", {
							onClick: () => F((e) => !e),
							children: /* @__PURE__ */ l(m, { className: e("w-4 h-4 transition-colors", P ? "text-white" : "text-white/40") })
						}),
						/* @__PURE__ */ l("button", {
							onClick: G,
							className: "text-white/80 hover:text-white transition-colors",
							children: /* @__PURE__ */ l(h, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ l("button", {
							onClick: () => T((e) => !e),
							className: "w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform",
							children: w ? /* @__PURE__ */ l(d, { className: "w-5 h-5 text-black" }) : /* @__PURE__ */ l(f, { className: "w-5 h-5 text-black ml-0.5" })
						}),
						/* @__PURE__ */ l("button", {
							onClick: W,
							className: "text-white/80 hover:text-white transition-colors",
							children: /* @__PURE__ */ l(g, { className: "w-6 h-6" })
						}),
						/* @__PURE__ */ l("button", {
							onClick: () => L((e) => !e),
							children: /* @__PURE__ */ l(p, { className: e("w-4 h-4 transition-colors", I ? "text-white" : "text-white/40") })
						})
					]
				}),
				/* @__PURE__ */ u("div", {
					className: "flex items-center gap-3 w-full mt-2",
					children: [/* @__PURE__ */ l("button", {
						onClick: () => j((e) => !e),
						children: l(A ? _ : r, { className: "w-4 h-4 text-white/50" })
					}), /* @__PURE__ */ l("input", {
						type: "range",
						min: 0,
						max: 1,
						step: .01,
						value: A ? 0 : O,
						onChange: (e) => {
							k(parseFloat(e.target.value)), j(!1);
						},
						className: "flex-1 accent-white h-1"
					})]
				})
			]
		}) : /* @__PURE__ */ l("div", {
			className: "flex-1 overflow-y-auto p-2",
			children: y.map((t, r) => /* @__PURE__ */ u("button", {
				onClick: () => K(r),
				className: e("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors", r === S ? "bg-white/15" : "hover:bg-white/10"),
				children: [
					/* @__PURE__ */ l("div", {
						className: "w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0",
						style: { background: `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})` },
						children: t.emoji
					}),
					/* @__PURE__ */ u("div", {
						className: "flex-1 text-left min-w-0",
						children: [/* @__PURE__ */ l("p", {
							className: e("text-sm font-medium truncate", r === S ? "text-white" : "text-white/80"),
							children: t.title
						}), /* @__PURE__ */ l("p", {
							className: "text-xs text-white/50 truncate",
							children: t.artist
						})]
					}),
					/* @__PURE__ */ u("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [
							M.has(t.id) && /* @__PURE__ */ l(n, { className: "w-3.5 h-3.5 fill-red-500 text-red-500" }),
							/* @__PURE__ */ l("span", {
								className: "text-xs text-white/40 tabular-nums",
								children: b(t.duration)
							}),
							r === S && w && /* @__PURE__ */ l("div", {
								className: "w-3 h-3 flex items-end gap-px",
								children: [
									1,
									2,
									3
								].map((e) => /* @__PURE__ */ l("div", {
									className: "w-0.5 bg-green-400 rounded-full animate-pulse",
									style: {
										height: `${(e % 3 + 1) * 4}px`,
										animationDelay: `${e * .15}s`
									}
								}, e))
							})
						]
					})
				]
			}, t.id))
		})]
	});
}
//#endregion
export { x as Music };
