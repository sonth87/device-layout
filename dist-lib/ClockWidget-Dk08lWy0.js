import { t as e } from "./useTranslation-CKCi_Vov.js";
import { useEffect as t, useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/widgets/built-in/ClockWidget.tsx
var a = {
	en: "en-US",
	vi: "vi-VN",
	ja: "ja-JP",
	ko: "ko-KR",
	zh: "zh-CN",
	th: "th-TH"
}, o = {
	en: {
		flipTime: "FLIP TIME",
		currentTime: "CURRENT TIME",
		today: "TODAY",
		hours: "HOURS",
		minutes: "MINUTES"
	},
	vi: {
		flipTime: "ĐỒNG HỒ LẬT",
		currentTime: "GIỜ HIỆN TẠI",
		today: "HÔM NAY",
		hours: "GIỜ",
		minutes: "PHÚT"
	},
	ja: {
		flipTime: "フリップ時計",
		currentTime: "現在時刻",
		today: "今日",
		hours: "時",
		minutes: "分"
	},
	ko: {
		flipTime: "플립 시계",
		currentTime: "현재 시간",
		today: "오늘",
		hours: "시간",
		minutes: "분"
	},
	zh: {
		flipTime: "翻页时间",
		currentTime: "当前时间",
		today: "今天",
		hours: "时",
		minutes: "分"
	},
	th: {
		flipTime: "เวลาพับ",
		currentTime: "เวลาปัจจุบัน",
		today: "วันนี้",
		hours: "ชั่วโมง",
		minutes: "นาที"
	}
};
function s({ date: e, dim: t, forceDark: n = !1 }) {
	let a = e.getSeconds(), o = e.getMinutes(), s = e.getHours() % 12, c = a * 6, l = o * 6 + a * .1, u = s * 30 + o * .5, d = (e, t) => ({
		x: 100 + t * Math.sin(e * Math.PI / 180),
		y: 100 - t * Math.cos(e * Math.PI / 180)
	});
	return /* @__PURE__ */ i("svg", {
		viewBox: "0 0 200 200",
		style: {
			width: t,
			height: t
		},
		children: [
			/* @__PURE__ */ r("circle", {
				cx: 100,
				cy: 100,
				r: "95",
				className: n ? "fill-black/55 stroke-white/12" : "fill-white/90 dark:fill-black/55 stroke-black/10 dark:stroke-white/12",
				strokeWidth: "2"
			}),
			Array.from({ length: 12 }, (e, t) => {
				let i = t * 30, a = d(i, 80), o = d(i, 90);
				return /* @__PURE__ */ r("line", {
					x1: a.x,
					y1: a.y,
					x2: o.x,
					y2: o.y,
					className: n ? "stroke-white/40" : "stroke-black/40 dark:stroke-white/40",
					strokeWidth: "2",
					strokeLinecap: "round"
				}, t);
			}),
			/* @__PURE__ */ r("line", {
				x1: 100,
				y1: 100,
				x2: d(u, 50).x,
				y2: d(u, 50).y,
				className: n ? "stroke-white" : "stroke-black dark:stroke-white",
				strokeWidth: "5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ r("line", {
				x1: 100,
				y1: 100,
				x2: d(l, 68).x,
				y2: d(l, 68).y,
				className: n ? "stroke-white" : "stroke-black dark:stroke-white",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ r("line", {
				x1: 100,
				y1: 100,
				x2: d(c, 72).x,
				y2: d(c, 72).y,
				stroke: "#ff3b30",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ r("circle", {
				cx: 100,
				cy: 100,
				r: "4",
				className: n ? "fill-white" : "fill-black dark:fill-white"
			}),
			/* @__PURE__ */ r("circle", {
				cx: 100,
				cy: 100,
				r: "2",
				fill: "#ff3b30"
			})
		]
	});
}
function c({ size: o }) {
	let { language: c } = e(), l = a[c] || "en-US", [u, d] = n(/* @__PURE__ */ new Date());
	t(() => {
		let e = setInterval(() => d(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []);
	let f = u.toLocaleTimeString(l, {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ i("div", {
		className: "w-full h-full flex items-center justify-center bg-transparent",
		children: [/* @__PURE__ */ r(s, {
			date: u,
			dim: o === "small" ? 140 : 150
		}), o !== "small" && /* @__PURE__ */ i("div", {
			className: "flex flex-col ml-3",
			children: [/* @__PURE__ */ r("p", {
				className: "text-zinc-800 dark:text-white text-2xl font-light tabular-nums",
				children: f
			}), /* @__PURE__ */ r("p", {
				className: "text-zinc-500 dark:text-white/50 text-[11px] mt-0.5",
				children: u.toLocaleDateString(l, {
					weekday: "short",
					month: "short",
					day: "numeric"
				})
			})]
		})]
	});
}
function l({ size: o }) {
	let { language: c } = e(), l = a[c] || "en-US", [u, d] = n(/* @__PURE__ */ new Date());
	t(() => {
		let e = setInterval(() => d(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []);
	let f = u.toLocaleTimeString(l, {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ i("div", {
		className: "w-full h-full flex items-center justify-center bg-zinc-950/15 dark:bg-[#151518]/20",
		children: [/* @__PURE__ */ r(s, {
			date: u,
			dim: o === "small" ? 140 : 150,
			forceDark: !0
		}), o !== "small" && /* @__PURE__ */ i("div", {
			className: "flex flex-col ml-3",
			children: [/* @__PURE__ */ r("p", {
				className: "text-white text-2xl font-light tabular-nums",
				children: f
			}), /* @__PURE__ */ r("p", {
				className: "text-white/50 text-[11px] mt-0.5",
				children: u.toLocaleDateString(l, {
					weekday: "short",
					month: "short",
					day: "numeric"
				})
			})]
		})]
	});
}
var u = [
	{
		city: "New York",
		tz: "America/New_York"
	},
	{
		city: "London",
		tz: "Europe/London"
	},
	{
		city: "Tokyo",
		tz: "Asia/Tokyo"
	}
];
function d({ size: o }) {
	let { language: s } = e(), c = a[s] || "en-US", [l, d] = n(/* @__PURE__ */ new Date());
	return t(() => {
		let e = setInterval(() => d(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []), /* @__PURE__ */ r("div", {
		className: "w-full h-full flex flex-col justify-center gap-1.5 bg-transparent px-4",
		children: u.map(({ city: e, tz: t }) => {
			let n = new Intl.DateTimeFormat(c, {
				hour: "2-digit",
				minute: "2-digit",
				timeZone: t
			}).format(l);
			return /* @__PURE__ */ i("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ r("p", {
					className: "text-zinc-500 dark:text-white/60 text-[12px]",
					children: e
				}), /* @__PURE__ */ r("p", {
					className: "text-zinc-800 dark:text-white text-[14px] font-medium tabular-nums",
					children: n
				})]
			}, e);
		})
	});
}
function f({ size: o }) {
	let { language: s } = e(), c = a[s] || "en-US", [l, u] = n(/* @__PURE__ */ new Date());
	t(() => {
		let e = setInterval(() => u(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []);
	let d = String(l.getHours()).padStart(2, "0"), f = String(l.getMinutes()).padStart(2, "0"), p = String(l.getSeconds()).padStart(2, "0"), m = l.getHours() >= 12 ? "PM" : "AM", h = l.toLocaleDateString(c, { weekday: "long" }), g = l.toLocaleDateString(c, {
		month: "short",
		day: "numeric"
	}), _ = l.getSeconds() / 60, v = 2 * Math.PI * 30, y = v * (1 - _);
	return o === "small" ? /* @__PURE__ */ i("div", {
		className: "w-full h-full flex flex-col justify-center p-4 bg-transparent select-none",
		children: [
			/* @__PURE__ */ r("p", {
				className: "text-red-500 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest leading-none",
				children: h
			}),
			/* @__PURE__ */ i("div", {
				className: "flex items-baseline mt-1.5 text-zinc-800 dark:text-white",
				children: [/* @__PURE__ */ i("p", {
					className: "text-4xl font-light leading-none tracking-tight tabular-nums",
					children: [
						d,
						":",
						f
					]
				}), /* @__PURE__ */ r("span", {
					className: "text-[12px] font-semibold text-zinc-400 dark:text-zinc-500 ml-1.5 tabular-nums",
					children: p
				})]
			}),
			/* @__PURE__ */ r("p", {
				className: "text-zinc-500 dark:text-zinc-400 text-[12px] font-semibold mt-3",
				children: g
			})
		]
	}) : /* @__PURE__ */ i("div", {
		className: "w-full h-full flex items-center justify-between p-4 bg-transparent select-none",
		children: [/* @__PURE__ */ i("div", {
			className: "flex flex-col justify-center",
			children: [
				/* @__PURE__ */ r("p", {
					className: "text-red-500 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest leading-none",
					children: h
				}),
				/* @__PURE__ */ i("div", {
					className: "flex items-baseline mt-1 text-zinc-800 dark:text-white",
					children: [/* @__PURE__ */ i("p", {
						className: "text-5xl font-light leading-none tracking-tight tabular-nums",
						children: [
							d,
							":",
							f
						]
					}), /* @__PURE__ */ r("span", {
						className: "text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase ml-1.5",
						children: m
					})]
				}),
				/* @__PURE__ */ r("p", {
					className: "text-zinc-500 dark:text-zinc-400 text-xs font-semibold mt-2.5",
					children: l.toLocaleDateString(c, {
						weekday: "long",
						month: "long",
						day: "numeric"
					})
				})
			]
		}), /* @__PURE__ */ r("div", {
			className: "relative w-24 h-24 flex items-center justify-center shrink-0",
			children: /* @__PURE__ */ i("svg", {
				viewBox: "0 0 100 100",
				className: "w-full h-full",
				children: [
					/* @__PURE__ */ r("circle", {
						cx: "50",
						cy: "50",
						r: "30",
						fill: "none",
						className: "stroke-black/5 dark:stroke-white/5",
						strokeWidth: "4"
					}),
					/* @__PURE__ */ r("circle", {
						cx: "50",
						cy: "50",
						r: "30",
						fill: "none",
						stroke: "#ff3b30",
						strokeWidth: "4",
						strokeDasharray: v,
						strokeDashoffset: y,
						strokeLinecap: "round",
						transform: "rotate(-90 50 50)",
						style: { transition: "stroke-dashoffset 0.3s ease" }
					}),
					/* @__PURE__ */ i("text", {
						x: "50",
						y: "55",
						textAnchor: "middle",
						className: "fill-zinc-800 dark:fill-white text-[12px] font-bold tabular-nums",
						children: [p, "s"]
					})
				]
			})
		})]
	});
}
function p({ val: e, label: t }) {
	let n = String(e).padStart(2, "0");
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col items-center select-none",
		children: [/* @__PURE__ */ i("div", {
			className: "relative bg-zinc-900 dark:bg-black border border-white/5 rounded-lg w-13 h-15 flex flex-col items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden",
			children: [
				/* @__PURE__ */ r("div", { className: "absolute top-0 left-0 w-full h-1/2 bg-zinc-850 dark:bg-[#1E1E20] border-b border-black/40" }),
				/* @__PURE__ */ r("div", { className: "absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900 dark:bg-[#121214]" }),
				/* @__PURE__ */ r("div", { className: "absolute top-[29px] left-0 w-full h-[1px] bg-black/45 z-20" }),
				/* @__PURE__ */ r("span", {
					className: "relative z-10 text-zinc-100 text-2xl font-black tracking-tight tabular-nums leading-none",
					children: n
				})
			]
		}), t && /* @__PURE__ */ r("span", {
			className: "text-[8px] font-bold text-zinc-500 uppercase tracking-widest mt-1.5",
			children: t
		})]
	});
}
function m({ month: e, day: t }) {
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col items-center select-none",
		children: /* @__PURE__ */ i("div", {
			className: "relative bg-zinc-900 dark:bg-black border border-white/5 rounded-lg w-18 h-20 flex flex-col items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden",
			children: [
				/* @__PURE__ */ r("div", {
					className: "absolute top-0 left-0 w-full h-1/2 bg-red-600 dark:bg-red-700 flex items-center justify-center pb-1",
					children: /* @__PURE__ */ r("span", {
						className: "text-white text-[9px] font-extrabold tracking-widest uppercase mt-2",
						children: e
					})
				}),
				/* @__PURE__ */ r("div", { className: "absolute bottom-0 left-0 w-full h-1/2 bg-zinc-850 dark:bg-[#121214]" }),
				/* @__PURE__ */ r("div", { className: "absolute top-[39px] left-0 w-full h-[1px] bg-black/45 z-20" }),
				/* @__PURE__ */ r("span", {
					className: "relative z-10 text-zinc-100 text-3xl font-black tracking-tight tabular-nums leading-none mt-4",
					children: t
				})
			]
		})
	});
}
function h({ size: s }) {
	let { language: c } = e(), l = a[c] || "en-US", u = o[c] || o.en, [d, f] = n(/* @__PURE__ */ new Date());
	t(() => {
		let e = setInterval(() => f(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []);
	let h = d.getHours(), g = d.getMinutes();
	return s === "small" ? /* @__PURE__ */ i("div", {
		className: "w-full h-full flex flex-col items-center justify-center bg-transparent p-3 select-none",
		children: [
			/* @__PURE__ */ r("p", {
				className: "text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-2",
				children: u.flipTime
			}),
			/* @__PURE__ */ i("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ r(p, { val: h }),
					/* @__PURE__ */ r("span", {
						className: "text-zinc-400 dark:text-zinc-600 animate-pulse font-bold text-xl mb-1",
						children: ":"
					}),
					/* @__PURE__ */ r(p, { val: g })
				]
			}),
			/* @__PURE__ */ r("p", {
				className: "text-zinc-500 dark:text-zinc-450 text-[10px] font-bold mt-2",
				children: d.toLocaleDateString(l, {
					weekday: "short",
					day: "numeric"
				})
			})
		]
	}) : /* @__PURE__ */ i("div", {
		className: "w-full h-full flex items-center justify-between bg-transparent px-6 py-4 select-none",
		children: [
			/* @__PURE__ */ i("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ r("p", {
					className: "text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-1.5 ml-1",
					children: u.currentTime
				}), /* @__PURE__ */ i("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ r(p, {
							val: h,
							label: u.hours
						}),
						/* @__PURE__ */ r("span", {
							className: "text-zinc-450 dark:text-zinc-600 animate-pulse font-bold text-2xl mb-5",
							children: ":"
						}),
						/* @__PURE__ */ r(p, {
							val: g,
							label: u.minutes
						})
					]
				})]
			}),
			/* @__PURE__ */ r("div", { className: "h-16 w-px bg-zinc-350 dark:bg-zinc-800 shrink-0" }),
			/* @__PURE__ */ i("div", {
				className: "flex flex-col items-end",
				children: [/* @__PURE__ */ r("p", {
					className: "text-zinc-500 dark:text-zinc-400 text-[8px] font-bold uppercase tracking-widest mb-1.5 mr-1",
					children: u.today
				}), /* @__PURE__ */ r(m, {
					month: [
						"JAN",
						"FEB",
						"MAR",
						"APR",
						"MAY",
						"JUN",
						"JUL",
						"AUG",
						"SEP",
						"OCT",
						"NOV",
						"DEC"
					][d.getMonth()],
					day: d.getDate()
				})]
			})
		]
	});
}
//#endregion
export { l as ClockDarkWidget, f as ClockDigitalWidget, h as ClockFlipWidget, c as ClockWidget, d as ClockWorldWidget };
