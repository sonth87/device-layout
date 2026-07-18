import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./chevron-left-DtSiqYaQ.js";
import { t as n } from "./grid-3x3-CZiMuCC6.js";
import { t as r } from "./heart-4TAFDJLs.js";
import { t as i } from "./list-Dn-fquzI.js";
import { t as a } from "./search-BKG97C0x.js";
import { t as o } from "./useTranslation-BFiuUWuF.js";
import { t as s } from "./useAppLayout-DfaXs-1a.js";
import { t as c } from "./ui-D0242z7L.js";
import { useMemo as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/apps/Photos.tsx
var m = [
	["#667eea", "#764ba2"],
	["#f093fb", "#f5576c"],
	["#4facfe", "#00f2fe"],
	["#43e97b", "#38f9d7"],
	["#fa709a", "#fee140"],
	["#a18cd1", "#fbc2eb"],
	["#fccb90", "#d57eeb"],
	["#a1c4fd", "#c2e9fb"],
	["#fd7043", "#ff8f00"],
	["#26c6da", "#00acc1"],
	["#ab47bc", "#7b1fa2"],
	["#66bb6a", "#388e3c"],
	["#ef5350", "#c62828"],
	["#42a5f5", "#1565c0"],
	["#ec407a", "#880e4f"],
	["#26a69a", "#004d40"],
	["#ff7043", "#bf360c"],
	["#7e57c2", "#4527a0"],
	["#29b6f6", "#0277bd"],
	["#9ccc65", "#558b2f"],
	["#ffa726", "#e65100"],
	["#26c6da", "#006064"],
	["#d4e157", "#827717"],
	["#78909c", "#37474f"]
], h = [
	"🌅",
	"🌊",
	"🏔",
	"🌸",
	"🌙",
	"🦋",
	"🌺",
	"🦚",
	"🌴",
	"🎆",
	"🏙",
	"🌮",
	"🌻",
	"🦁",
	"🏝",
	"🌈",
	"❄️",
	"🌿",
	"🎭",
	"🦋",
	"🎨",
	"🏛",
	"🌉",
	"🍂"
], g = [
	"Favorites",
	"Recents",
	"Screenshots",
	"Wallpapers",
	"Nature",
	"City"
];
function _() {
	return m.map((e, t) => ({
		id: String(t + 1),
		emoji: h[t % h.length],
		colors: e,
		liked: t % 5 == 0,
		date: /* @__PURE__ */ new Date(Date.now() - t * 864e5 * 3),
		album: g[t % g.length]
	}));
}
var v = _(), y = {
	en: {
		allPhotos: "All Photos",
		favorites: "Favorites",
		recents: "Recents",
		screenshots: "Screenshots",
		wallpapers: "Wallpapers",
		nature: "Nature",
		city: "City",
		search: "Search photos",
		showAll: "Show all",
		resetZoom: "Reset zoom",
		photosCount: "photos"
	},
	vi: {
		allPhotos: "Tất cả ảnh",
		favorites: "Yêu thích",
		recents: "Gần đây",
		screenshots: "Ảnh chụp màn hình",
		wallpapers: "Hình nền",
		nature: "Thiên nhiên",
		city: "Thành phố",
		search: "Tìm kiếm ảnh",
		showAll: "Hiển thị tất cả",
		resetZoom: "Đặt lại thu phóng",
		photosCount: "ảnh"
	},
	ja: {
		allPhotos: "すべての写真",
		favorites: "お気に入り",
		recents: "最近の項目",
		screenshots: "スクリーンショット",
		wallpapers: "壁紙",
		nature: "自然",
		city: "都市",
		search: "写真を検索",
		showAll: "すべて表示",
		resetZoom: "ズームをリセット",
		photosCount: "枚の写真"
	},
	ko: {
		allPhotos: "모든 사진",
		favorites: "선호하는 사진",
		recents: "최근 항목",
		screenshots: "스크린샷",
		wallpapers: "배경화면",
		nature: "자연",
		city: "도시",
		search: "사진 검색",
		showAll: "모두 보기",
		resetZoom: "확대/축소 재설정",
		photosCount: "장"
	},
	zh: {
		allPhotos: "所有照片",
		favorites: "个人收藏",
		recents: "最近项目",
		screenshots: "屏幕快照",
		wallpapers: "壁纸",
		nature: "自然",
		city: "城市",
		search: "搜索照片",
		showAll: "显示全部",
		resetZoom: "重置缩放",
		photosCount: "张照片"
	},
	th: {
		allPhotos: "รูปภาพทั้งหมด",
		favorites: "รายการโปรด",
		recents: "ล่าสุด",
		screenshots: "ภาพถ่ายหน้าจอ",
		wallpapers: "ภาพพื้นหลัง",
		nature: "ธรรมชาติ",
		city: "เมือง",
		search: "ค้นหารูปภาพ",
		showAll: "แสดงทั้งหมด",
		resetZoom: "รีเซ็ตการซูม",
		photosCount: "รูปภาพ"
	}
}, b = {
	en: "en-US",
	vi: "vi-VN",
	ja: "ja-JP",
	ko: "ko-KR",
	zh: "zh-CN",
	th: "th-TH"
};
function x() {
	let { language: m } = o(), h = b[m] || "en-US", _ = y[m] || y.en, [x, S] = d("grid"), [C, w] = d(null), [T, E] = d(null), [D, O] = d(new Set(v.filter((e) => e.liked).map((e) => e.id))), [k, A] = d(""), [j, M] = d(1), [N, P] = d({
		x: 0,
		y: 0
	}), F = u(null), { isNarrow: I, cols: L } = s(), R = (e) => ({
		Favorites: _.favorites,
		Recents: _.recents,
		Screenshots: _.screenshots,
		Wallpapers: _.wallpapers,
		Nature: _.nature,
		City: _.city
	})[e] || e, z = (e) => {
		E(e), S("photo"), M(1), P({
			x: 0,
			y: 0
		});
	}, B = (e) => O((t) => {
		let n = new Set(t);
		return n.has(e) ? n.delete(e) : n.add(e), n;
	}), V = l(() => {
		let e = C ? v.filter((e) => e.album === C) : v;
		return k && (e = e.filter((e) => e.emoji.includes(k) || e.album?.includes(k))), e;
	}, [C, k]), H = g.reduce((e, t) => (e[t] = v.filter((e) => e.album === t).length, e), {});
	if (x === "photo" && T) {
		let n = I ? 240 : 288;
		return /* @__PURE__ */ p("div", {
			className: "h-full flex flex-col bg-black",
			children: [
				/* @__PURE__ */ p("div", {
					className: "flex items-center justify-between px-4 py-3 shrink-0",
					children: [/* @__PURE__ */ p("button", {
						onClick: () => S("grid"),
						className: "flex items-center gap-1 text-blue-400 text-sm",
						children: [
							/* @__PURE__ */ f(t, { className: "w-4 h-4" }),
							" ",
							_.allPhotos
						]
					}), /* @__PURE__ */ f("button", {
						onClick: () => B(T.id),
						children: /* @__PURE__ */ f(r, { className: e("w-5 h-5", D.has(T.id) ? "fill-red-500 text-red-500" : "text-white/60") })
					})]
				}),
				/* @__PURE__ */ f("div", {
					className: "flex-1 flex items-center justify-center overflow-hidden",
					onWheel: (e) => {
						e.ctrlKey && M((t) => Math.min(6, Math.max(.5, t * (1 - e.deltaY * .008))));
					},
					onPointerDown: (e) => {
						j <= 1 || (F.current = {
							startX: e.clientX,
							startY: e.clientY,
							panX: N.x,
							panY: N.y
						}, e.currentTarget.setPointerCapture(e.pointerId));
					},
					onPointerMove: (e) => {
						F.current && P({
							x: F.current.panX + e.clientX - F.current.startX,
							y: F.current.panY + e.clientY - F.current.startY
						});
					},
					onPointerUp: () => {
						F.current = null;
					},
					style: { cursor: j > 1 ? "grab" : "default" },
					children: /* @__PURE__ */ f("div", {
						className: "rounded-2xl flex items-center justify-center shadow-2xl select-none",
						style: {
							width: n,
							height: n,
							fontSize: I ? 80 : 120,
							background: `linear-gradient(135deg, ${T.colors[0]}, ${T.colors[1]})`,
							transform: `scale(${j}) translate(${N.x / j}px, ${N.y / j}px)`,
							transformOrigin: "center",
							transition: F.current ? "none" : "transform 0.05s ease-out"
						},
						children: T.emoji
					})
				}),
				/* @__PURE__ */ p("div", {
					className: "p-4 text-white/60 text-sm text-center shrink-0",
					children: [
						j !== 1 && /* @__PURE__ */ f("button", {
							className: "text-blue-400 text-xs mr-3",
							onClick: () => {
								M(1), P({
									x: 0,
									y: 0
								});
							},
							children: _.resetZoom
						}),
						T.date.toLocaleDateString(h, {
							month: "long",
							day: "numeric",
							year: "numeric"
						}),
						T.album && ` • ${R(T.album)}`
					]
				})
			]
		});
	}
	return /* @__PURE__ */ p("div", {
		className: "h-full flex flex-col bg-white dark:bg-[#0F1115] text-black dark:text-white",
		children: [
			/* @__PURE__ */ p("div", {
				className: "flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0",
				children: [/* @__PURE__ */ p("div", {
					className: "flex-1 flex items-center gap-1.5 px-2 py-1 bg-black/5 dark:bg-white/10 rounded-lg",
					children: [/* @__PURE__ */ f(a, { className: "w-3.5 h-3.5 text-black/40 dark:text-white/40" }), /* @__PURE__ */ f("input", {
						value: k,
						onChange: (e) => A(e.target.value),
						placeholder: _.search,
						className: "flex-1 bg-transparent text-sm outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
					})]
				}), /* @__PURE__ */ f("div", {
					className: "flex border border-black/15 dark:border-white/15 rounded-md overflow-hidden",
					children: ["grid", "albums"].map((t) => /* @__PURE__ */ f("button", {
						onClick: () => S(t),
						className: e("px-2.5 py-1 text-xs transition-colors", x === t ? "bg-blue-500 text-white" : "text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/10"),
						children: f(t === "grid" ? n : i, { className: "w-3.5 h-3.5" })
					}, t))
				})]
			}),
			x === "grid" && /* @__PURE__ */ p("div", {
				className: "px-3 py-2 shrink-0 flex items-center justify-between",
				children: [/* @__PURE__ */ p("h3", {
					className: "text-xs font-semibold text-black/50 dark:text-white/50 uppercase tracking-wide",
					children: [
						C ? R(C) : _.allPhotos,
						" — ",
						V.length,
						" ",
						_.photosCount
					]
				}), C && /* @__PURE__ */ f("button", {
					onClick: () => w(null),
					className: "text-xs text-blue-500",
					children: _.showAll
				})]
			}),
			/* @__PURE__ */ f("div", {
				className: "flex-1 overflow-y-auto",
				children: x === "albums" ? /* @__PURE__ */ f("div", {
					className: "p-3",
					children: /* @__PURE__ */ f(c, {
						narrow: 2,
						medium: 3,
						wide: 4,
						gap: "12px",
						children: g.map((e) => {
							let t = v.find((t) => t.album === e);
							return /* @__PURE__ */ p("button", {
								onClick: () => {
									w(e), S("grid");
								},
								className: "text-left rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:scale-[1.02] transition-transform",
								children: [/* @__PURE__ */ f("div", {
									className: "h-20 flex items-center justify-center text-3xl",
									style: { background: t ? `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})` : "#ccc" },
									children: t?.emoji
								}), /* @__PURE__ */ p("div", {
									className: "px-2.5 py-2",
									children: [/* @__PURE__ */ f("p", {
										className: "text-sm font-medium text-black/90 dark:text-white/90 truncate",
										children: R(e)
									}), /* @__PURE__ */ p("p", {
										className: "text-xs text-black/40 dark:text-white/40",
										children: [
											H[e],
											" ",
											_.photosCount
										]
									})]
								})]
							}, e);
						})
					})
				}) : /* @__PURE__ */ f("div", {
					className: "p-1",
					style: {
						display: "grid",
						gap: "2px",
						gridTemplateColumns: `repeat(${L(3, 4, 5)}, minmax(0, 1fr))`
					},
					children: V.map((e) => /* @__PURE__ */ p("button", {
						onClick: () => z(e),
						className: "relative aspect-square group",
						children: [/* @__PURE__ */ f("div", {
							className: "w-full h-full flex items-center justify-center text-2xl",
							style: { background: `linear-gradient(135deg, ${e.colors[0]}, ${e.colors[1]})` },
							children: e.emoji
						}), D.has(e.id) && /* @__PURE__ */ f(r, { className: "absolute bottom-1 right-1 w-3 h-3 fill-white text-white opacity-90" })]
					}, e.id))
				})
			})
		]
	});
}
//#endregion
export { x as Photos };
