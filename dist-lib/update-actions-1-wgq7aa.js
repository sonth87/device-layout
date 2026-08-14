import { _ as e, h as t } from "./MobileAppViewer-Ctl_i24n.js";
import { a as n, f as r, i, n as a, o, r as s, t as c } from "./store-DNT7LGUT.js";
import { t as l } from "./utils-B6YmNDS2.js";
import { t as u } from "./createLucideIcon--WjuKCts.js";
import { n as d, t as f } from "./settings-B5duO7Zc.js";
import { n as p, t as ee } from "./folder-C9z1AA3T.js";
import { n as m, t as te } from "./music-D8WdwHqS.js";
import { t as h } from "./plus-Dx6tdmvY.js";
import { t as g } from "./refresh-cw-BNk9TuR7.js";
import { t as ne } from "./sticky-note-Dvmn4o-U.js";
import { createContext as _, useContext as v, useRef as y, useState as b } from "react";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
var re = u("app-window", [
	["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}],
	["path", {
		d: "M10 4v4",
		key: "pp8u80"
	}],
	["path", {
		d: "M2 8h20",
		key: "d11cs7"
	}],
	["path", {
		d: "M6 4v4",
		key: "1svtjw"
	}]
]), ie = u("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]), w = u("calculator", [
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6",
		key: "x4nwl0"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18",
		key: "wjye3r"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M12 10h.01",
		key: "1nrarc"
	}],
	["path", {
		d: "M8 10h.01",
		key: "19clt8"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}]
]), T = u("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]), ae = u("circle-question-mark", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), oe = u("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]), E = u("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]), D = u("cpu", [
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M17 20v2",
		key: "1rnc9c"
	}],
	["path", {
		d: "M17 2v2",
		key: "11trls"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M2 17h2",
		key: "7oei6x"
	}],
	["path", {
		d: "M2 7h2",
		key: "asdhe0"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 17h2",
		key: "1fpfkl"
	}],
	["path", {
		d: "M20 7h2",
		key: "1o8tra"
	}],
	["path", {
		d: "M7 20v2",
		key: "4gnj0m"
	}],
	["path", {
		d: "M7 2v2",
		key: "1i4yhu"
	}],
	["rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2",
		key: "1vbyd7"
	}],
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "1",
		key: "z9xiuo"
	}]
]), O = u("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]), k = u("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), A = u("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]), j = u("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), M = u("map", [
	["path", {
		d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
		key: "169xi5"
	}],
	["path", {
		d: "M15 5.764v15",
		key: "1pn4in"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]), N = u("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), P = {
	Folder: ee,
	SquareTerminal: u("square-terminal", [
		["path", {
			d: "m7 11 2-2-2-2",
			key: "1lz0vl"
		}],
		["path", {
			d: "M11 13h4",
			key: "1p7l4v"
		}],
		["rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "3",
			rx: "2",
			ry: "2",
			key: "1m3agn"
		}]
	]),
	Settings: f,
	Globe: k,
	FileText: p,
	AppWindow: re,
	HelpCircle: ae,
	Music: te,
	Image: m,
	Mail: j,
	Calendar: d,
	Calculator: w,
	Map: M,
	Camera: T,
	Phone: e,
	Video: t,
	MessageSquare: N,
	Code2: E,
	Database: O,
	Terminal: u("terminal", [["path", {
		d: "M12 19h8",
		key: "baeox8"
	}], ["path", {
		d: "m4 17 6-6-6-6",
		key: "1yngyt"
	}]]),
	Cpu: D,
	Layers: A,
	Clock: oe,
	StickyNote: ne
};
function F({ appConfig: e, size: t = 56, className: n = "", fill: r = !1 }) {
	let [i, a] = b(!1), o = e.iconColor?.[0] ?? "#0a84ff", s = e.iconColor?.[1] ?? "#0055d4", c = e.iconTextColor ?? "#ffffff", l = Math.round(t * .5);
	if (typeof e.icon != "string") {
		let i = e.icon;
		return /* @__PURE__ */ S("div", {
			className: `flex items-center justify-center shrink-0 ${n}`,
			style: {
				width: r ? "100%" : t,
				height: r ? "100%" : t,
				background: `linear-gradient(145deg, ${o}, ${s})`,
				borderRadius: "var(--radius-icon)",
				boxShadow: `0 ${Math.round(t * .02)}px ${Math.round(t * .08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
				overflow: "hidden"
			},
			children: /* @__PURE__ */ S(i, {
				style: {
					width: r ? "50%" : l,
					height: r ? "50%" : l,
					color: c
				},
				strokeWidth: 1.7
			})
		});
	}
	if (e.icon.startsWith("lucide:")) {
		let i = P[e.icon.replace("lucide:", "")];
		return /* @__PURE__ */ S("div", {
			className: `flex items-center justify-center shrink-0 ${n}`,
			style: {
				width: r ? "100%" : t,
				height: r ? "100%" : t,
				background: `linear-gradient(145deg, ${o}, ${s})`,
				borderRadius: "var(--radius-icon)",
				boxShadow: `0 ${Math.round(t * .02)}px ${Math.round(t * .08)}px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)`,
				overflow: "hidden"
			},
			children: i ? /* @__PURE__ */ S(i, {
				style: {
					width: r ? "50%" : l,
					height: r ? "50%" : l,
					color: c
				},
				strokeWidth: 1.7
			}) : /* @__PURE__ */ S("span", {
				style: {
					color: c,
					fontSize: r ? "35%" : l * .65,
					fontWeight: 700
				},
				children: e.name.charAt(0)
			})
		});
	}
	return i ? /* @__PURE__ */ S("div", {
		className: `flex items-center justify-center shrink-0 ${n}`,
		style: {
			width: r ? "100%" : t,
			height: r ? "100%" : t,
			background: `linear-gradient(145deg, ${o}, ${s})`,
			borderRadius: "var(--radius-icon)",
			boxShadow: `0 ${Math.round(t * .02)}px ${Math.round(t * .08)}px rgba(0,0,0,0.35)`,
			overflow: "hidden"
		},
		children: /* @__PURE__ */ S("span", {
			style: {
				color: c,
				fontSize: t * .38,
				fontWeight: 700
			},
			children: e.name.charAt(0)
		})
	}) : /* @__PURE__ */ S("img", {
		src: e.icon,
		alt: e.name,
		width: t,
		height: t,
		className: `object-contain ${n}`,
		style: {
			width: r ? "100%" : t,
			height: r ? "100%" : t,
			borderRadius: "var(--radius-icon)",
			overflow: "hidden"
		},
		onError: () => a(!0)
	});
}
//#endregion
//#region src/lib/update-status-store.ts
var I = r((e) => ({
	status: null,
	setStatus: (t) => e({ status: t })
}));
function L(e) {
	return e ? e.pendingRendererVersion !== null || e.nativeUpdateDownloaded : !1;
}
//#endregion
//#region src/lib/wallpaper-catalog.ts
var R = _({
	pictures: n,
	live: i,
	colors: o,
	all: a,
	defaultId: s
}), z = R.Provider;
function B() {
	return v(R);
}
function V(e, t, r = !0) {
	let a = e ? e.filter((e) => e.kind === "live") : [], s = t && t.length > 0 ? t : a, c = r ? s.length > 0 ? s : i : [], l = e ? e.filter((e) => e.kind !== "live" && e.kind !== "color") : n, u = o, d = [
		...l,
		...c,
		...u
	];
	return {
		pictures: l,
		live: c,
		colors: u,
		all: d,
		defaultId: d[0]?.id ?? "bg-1"
	};
}
//#endregion
//#region src/lib/asset-base.ts
var H = _(""), U = H.Provider;
function W() {
	return v(H);
}
function G(e, t) {
	return !e || !t ? t ?? "" : t.startsWith("http://") || t.startsWith("https://") || t.startsWith("data:") || t.startsWith("blob:") ? t : `${e.replace(/\/$/, "")}${t.startsWith("/") ? "" : "/"}${t}`;
}
//#endregion
//#region src/lib/wallpaper-import.ts
var K = _(null), q = K.Provider;
function se() {
	return v(K);
}
//#endregion
//#region src/components/wallpaper/WallpaperThumb.tsx
function ce({ src: e, alt: t }) {
	let [n, r] = b(!1), [i, a] = b(!1);
	return /* @__PURE__ */ C("div", {
		className: "relative w-full h-full bg-zinc-200 dark:bg-zinc-800",
		children: [
			!n && !i && /* @__PURE__ */ S("div", { className: "absolute inset-0 bg-zinc-300 dark:bg-zinc-850 animate-pulse" }),
			!i && /* @__PURE__ */ S("img", {
				src: e,
				alt: t,
				className: l("w-full h-full object-cover transition-opacity duration-300", n ? "opacity-100" : "opacity-0"),
				onLoad: () => r(!0),
				onError: () => {
					r(!0), a(!0);
				}
			}),
			i && /* @__PURE__ */ S("div", {
				className: "absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-950 flex items-center justify-center p-2 text-center text-xs text-white/70 font-medium",
				children: t
			})
		]
	});
}
function le({ posterSrc: e, videoSrc: t, alt: n }) {
	let [r, i] = b(!1), [a, o] = b(!1), s = y(null);
	return /* @__PURE__ */ C("div", {
		className: "relative w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-zinc-950 flex items-center justify-center",
		onMouseEnter: () => {
			i(!0), s.current?.play().catch(() => {});
		},
		onMouseLeave: () => {
			i(!1), s.current && (s.current.pause(), s.current.currentTime = 0);
		},
		children: [
			!a && /* @__PURE__ */ S("img", {
				src: e,
				alt: n,
				onError: () => o(!0),
				className: l("absolute inset-0 w-full h-full object-cover transition-opacity duration-300", r ? "opacity-0" : "opacity-100")
			}),
			a && /* @__PURE__ */ S("span", {
				className: "text-xs text-white/60 font-medium px-2 text-center select-none",
				children: n
			}),
			t && /* @__PURE__ */ S("video", {
				ref: s,
				src: t,
				muted: !0,
				loop: !0,
				playsInline: !0,
				preload: "none",
				className: l("absolute inset-0 w-full h-full object-cover transition-opacity duration-300", r ? "opacity-100" : "opacity-0")
			})
		]
	});
}
function ue({ wallpaper: e, selected: t, cycling: n, onClick: r, shape: i = "card", size: a = "md" }) {
	let o = W();
	if (e.kind === "color") {
		let n = a === "sm" ? "w-9 h-9" : "w-11 h-11";
		return /* @__PURE__ */ S("button", {
			onClick: r,
			title: e.name,
			className: l("relative rounded-full shrink-0 transition-all border-2", n, t ? "ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-[#151821] border-white/60" : "border-black/10 dark:border-white/10 hover:scale-105"),
			style: { backgroundColor: e.colorHex }
		});
	}
	let s = G(o, e.thumbnail ?? e.url ?? ""), c = i === "circle", u = e.videoUrl ? G(o, e.videoUrl) : null;
	return /* @__PURE__ */ C("button", {
		onClick: r,
		title: e.name,
		className: l("relative overflow-hidden border-2 transition-all shrink-0", c ? "w-20 h-28 rounded-[28px]" : "aspect-video rounded-(--radius-input) w-full", t ? "border-blue-500 scale-105 shadow-lg z-10" : "border-transparent hover:border-white/40 hover:scale-102"),
		children: [
			e.kind === "live" && /* @__PURE__ */ S("span", {
				className: "absolute top-1.5 right-1.5 px-1 py-0.5 bg-black/60 text-white text-[8px] font-bold tracking-wider rounded uppercase z-10 select-none pointer-events-none",
				children: "LIVE"
			}),
			n && /* @__PURE__ */ S("span", {
				className: "absolute top-1.5 left-1.5 z-10 w-4 h-4 rounded-full bg-black/60 flex items-center justify-center",
				children: /* @__PURE__ */ S(g, { className: "w-2.5 h-2.5 text-white" })
			}),
			e.kind === "live" && u ? /* @__PURE__ */ S(le, {
				posterSrc: s,
				videoSrc: u,
				alt: e.name
			}) : /* @__PURE__ */ S(ce, {
				src: s,
				alt: e.name
			})
		]
	});
}
//#endregion
//#region src/components/wallpaper/WallpaperSection.tsx
function J({ title: e, items: t, selectedId: n, cyclingGroup: r, onSelect: i, leadingActions: a, shape: o = "card" }) {
	let [s, c] = b(!1);
	return t.length === 0 && !a ? null : /* @__PURE__ */ C("div", { children: [/* @__PURE__ */ C("div", {
		className: "flex items-center justify-between mb-2 px-0.5",
		children: [/* @__PURE__ */ S("p", {
			className: "text-[11px] font-semibold text-black/60 dark:text-white/60 select-none",
			children: e
		}), t.length > 0 && /* @__PURE__ */ S("button", {
			onClick: () => c((e) => !e),
			className: "text-[11px] text-blue-600 dark:text-blue-400 hover:underline select-none",
			children: s ? "Show Less" : `Show All (${t.length})`
		})]
	}), /* @__PURE__ */ C("div", {
		className: l(o === "circle" ? "items-start" : "items-center", s ? "flex flex-wrap gap-2 p-1.5" : "flex gap-3 overflow-x-auto p-1.5"),
		children: [a, t.map((e) => /* @__PURE__ */ C("div", {
			className: s ? o === "circle" ? "w-12" : "w-24" : o === "circle" ? "shrink-0 w-12" : "shrink-0 w-24",
			children: [/* @__PURE__ */ S(ue, {
				wallpaper: e,
				selected: e.id === n,
				cycling: r && e.id === n,
				onClick: () => i(e.id),
				shape: o,
				size: s && o === "circle" ? "sm" : "md"
			}), o === "circle" && /* @__PURE__ */ S("p", {
				className: "text-[10px] text-center mt-1 text-black/60 dark:text-white/60 truncate select-none",
				children: e.name
			})]
		}, e.id))]
	})] });
}
//#endregion
//#region src/components/wallpaper/WallpaperDetailPanel.tsx
var Y = {
	fill: "Fill Screen",
	fit: "Fit to Screen",
	stretch: "Stretch to Fill Screen",
	center: "Center",
	tile: "Tile"
}, X = {
	"5m": "Every 5 Minutes",
	"10m": "Every 10 Minutes",
	"30m": "Every 30 Minutes",
	"1h": "Every Hour",
	"2h": "Every 2 Hours",
	"5h": "Every 5 Hours",
	"1d": "Every Day"
}, Z = "bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none appearance-none cursor-pointer";
function Q({ wallpaper: e, cycleGroup: t, variant: n = "vertical" }) {
	let r = W(), i = c((e) => e.wallpaperFitMode), a = c((e) => e.setWallpaperFitMode), o = c((e) => e.wallpaperCycle), s = c((e) => e.setWallpaperCycle), l = e.kind === "color" ? null : G(r, e.thumbnail ?? e.url ?? ""), u = o.group === t;
	return n === "vertical" ? /* @__PURE__ */ C("div", {
		className: "w-full space-y-4",
		children: [/* @__PURE__ */ S("div", {
			className: "relative w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10",
			children: e.kind === "color" ? /* @__PURE__ */ S("div", {
				className: "absolute inset-0",
				style: { backgroundColor: e.colorHex }
			}) : /* @__PURE__ */ S("img", {
				src: l ?? void 0,
				alt: e.name,
				className: "w-full h-full object-cover"
			})
		}), /* @__PURE__ */ C("div", {
			className: "space-y-3",
			children: [e.kind !== "color" && /* @__PURE__ */ C("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ S("span", {
					className: "text-xs text-black/60 dark:text-white/60",
					children: e.name
				}), /* @__PURE__ */ S("div", {
					className: "relative",
					children: /* @__PURE__ */ S("select", {
						value: i,
						onChange: (e) => a(e.target.value),
						className: Z,
						children: Object.keys(Y).map((e) => /* @__PURE__ */ S("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: Y[e]
						}, e))
					})
				})]
			}), e.kind !== "color" && /* @__PURE__ */ C("div", {
				className: "space-y-2 pt-2 border-t border-black/10 dark:border-white/10",
				children: [/* @__PURE__ */ C("label", {
					className: "flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer",
					children: [/* @__PURE__ */ S("span", { children: "Shuffle" }), /* @__PURE__ */ S("input", {
						type: "checkbox",
						checked: u && o.enabled,
						onChange: (e) => s({
							enabled: e.target.checked,
							group: t
						}),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				}), u && o.enabled && /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ C("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ S("span", {
						className: "text-[11px] text-black/50 dark:text-white/50",
						children: "Interval"
					}), /* @__PURE__ */ S("select", {
						value: o.interval,
						onChange: (e) => s({ interval: e.target.value }),
						className: Z,
						children: Object.keys(X).map((e) => /* @__PURE__ */ S("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: X[e]
						}, e))
					})]
				}), /* @__PURE__ */ C("label", {
					className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer",
					children: [/* @__PURE__ */ S("span", { children: "Randomly" }), /* @__PURE__ */ S("input", {
						type: "checkbox",
						checked: o.randomOrder,
						onChange: (e) => s({ randomOrder: e.target.checked }),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				})] })]
			})]
		})]
	}) : /* @__PURE__ */ C("div", {
		className: "w-full flex gap-5 items-start bg-neutral-50/50 dark:bg-white/2 p-3 rounded-2xl border border-black/5 dark:border-white/5",
		children: [/* @__PURE__ */ S("div", {
			className: "relative w-1/2 max-w-[240px] aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shrink-0",
			children: e.kind === "color" ? /* @__PURE__ */ S("div", {
				className: "absolute inset-0",
				style: { backgroundColor: e.colorHex }
			}) : /* @__PURE__ */ S("img", {
				src: l ?? void 0,
				alt: e.name,
				className: "w-full h-full object-cover"
			})
		}), /* @__PURE__ */ C("div", {
			className: "flex-1 space-y-3 min-w-0 pt-1",
			children: [/* @__PURE__ */ C("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ S("span", {
					className: "text-xs font-semibold text-black/85 dark:text-white/90 truncate",
					children: e.name
				}), e.kind !== "color" && /* @__PURE__ */ S("div", {
					className: "relative shrink-0",
					children: /* @__PURE__ */ S("select", {
						value: i,
						onChange: (e) => a(e.target.value),
						className: Z,
						children: Object.keys(Y).map((e) => /* @__PURE__ */ S("option", {
							value: e,
							className: "bg-white dark:bg-[#151821] text-black dark:text-white",
							children: Y[e]
						}, e))
					})
				})]
			}), e.kind !== "color" && /* @__PURE__ */ C("div", {
				className: "space-y-2.5 pt-2.5 border-t border-black/5 dark:border-white/5",
				children: [/* @__PURE__ */ C("label", {
					className: "flex items-center justify-between text-xs text-black/70 dark:text-white/70 select-none cursor-pointer",
					children: [/* @__PURE__ */ S("span", { children: "Shuffle" }), /* @__PURE__ */ S("input", {
						type: "checkbox",
						checked: u && o.enabled,
						onChange: (e) => s({
							enabled: e.target.checked,
							group: t
						}),
						className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
					})]
				}), u && o.enabled && /* @__PURE__ */ C("div", {
					className: "space-y-2.5",
					children: [/* @__PURE__ */ C("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ S("span", {
							className: "text-[11px] text-black/50 dark:text-white/50",
							children: "Interval"
						}), /* @__PURE__ */ S("select", {
							value: o.interval,
							onChange: (e) => s({ interval: e.target.value }),
							className: Z,
							children: Object.keys(X).map((e) => /* @__PURE__ */ S("option", {
								value: e,
								className: "bg-white dark:bg-[#151821] text-black dark:text-white",
								children: X[e]
							}, e))
						})]
					}), /* @__PURE__ */ C("label", {
						className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/50 select-none cursor-pointer",
						children: [/* @__PURE__ */ S("span", { children: "Randomly" }), /* @__PURE__ */ S("input", {
							type: "checkbox",
							checked: o.randomOrder,
							onChange: (e) => s({ randomOrder: e.target.checked }),
							className: "accent-blue-500 w-3.5 h-3.5 cursor-pointer"
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/wallpaper/WallpaperPickerContent.tsx
function de({ variant: e = "vertical" } = {}) {
	let t = c((e) => e.wallpaperId), n = c((e) => e.setWallpaper), r = c((e) => e.customWallpapers), i = c((e) => e.addCustomWallpaper), a = c((e) => e.wallpaperCycle), o = se(), s = B(), [l, u] = b(!1), d = s.all.find((e) => e.id === t) ?? r.find((e) => e.id === t) ?? s.pictures[0], f = r.some((e) => e.id === t);
	async function p() {
		if (!(!o || l)) {
			u(!0);
			try {
				let e = await o();
				e && (i(e), n(e.id));
			} finally {
				u(!1);
			}
		}
	}
	return /* @__PURE__ */ C("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ S(Q, {
				wallpaper: d,
				cycleGroup: f ? "custom" : "builtin",
				variant: e
			}),
			/* @__PURE__ */ S(J, {
				title: "Pictures",
				items: s.pictures,
				selectedId: t,
				cyclingGroup: a.enabled && a.group === "builtin",
				onSelect: n
			}),
			s.live.length > 0 && /* @__PURE__ */ S(J, {
				title: "Live Wallpapers",
				items: s.live,
				selectedId: t,
				onSelect: n
			}),
			/* @__PURE__ */ S(J, {
				title: "Colors",
				items: s.colors,
				selectedId: t,
				onSelect: n,
				shape: "circle"
			}),
			/* @__PURE__ */ S(J, {
				title: "Your Photos",
				items: r,
				selectedId: t,
				cyclingGroup: a.enabled && a.group === "custom",
				onSelect: n,
				leadingActions: o && /* @__PURE__ */ S("button", {
					onClick: p,
					disabled: l,
					title: "Add a Photo",
					className: "shrink-0 w-24 aspect-video rounded-(--radius-input) border-2 border-dashed border-black/15 dark:border-white/15 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors text-black/40 dark:text-white/40 disabled:opacity-50",
					children: /* @__PURE__ */ S(h, { className: "w-5 h-5" })
				})
			})
		]
	});
}
//#endregion
//#region src/lib/update-actions.ts
var $ = _(null), fe = $.Provider;
function pe() {
	return v($);
}
//#endregion
export { U as a, z as c, L as d, I as f, ie as g, w as h, q as i, V as l, T as m, pe as n, G as o, F as p, de as r, W as s, fe as t, B as u };
