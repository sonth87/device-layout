import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./useTranslation-CPcDMIDQ.js";
import { t as n } from "./useAppLayout-DfaXs-1a.js";
import { useEffect as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/apps/Clock.tsx
var s = [
	{
		city: "New York",
		tz: "America/New_York",
		flag: "🇺🇸"
	},
	{
		city: "London",
		tz: "Europe/London",
		flag: "🇬🇧"
	},
	{
		city: "Paris",
		tz: "Europe/Paris",
		flag: "🇫🇷"
	},
	{
		city: "Tokyo",
		tz: "Asia/Tokyo",
		flag: "🇯🇵"
	},
	{
		city: "Sydney",
		tz: "Australia/Sydney",
		flag: "🇦🇺"
	},
	{
		city: "Dubai",
		tz: "Asia/Dubai",
		flag: "🇦🇪"
	},
	{
		city: "Singapore",
		tz: "Asia/Singapore",
		flag: "🇸🇬"
	},
	{
		city: "Los Angeles",
		tz: "America/Los_Angeles",
		flag: "🇺🇸"
	}
], c = {
	en: {
		worldClock: "World Clock",
		alarm: "Alarm",
		stopwatch: "Stopwatch",
		timer: "Timer",
		noAlarms: "No alarms set",
		lap: "Lap",
		start: "Start",
		stop: "Stop",
		reset: "Reset",
		pause: "Pause",
		lapPrefix: "Lap"
	},
	vi: {
		worldClock: "Đồng hồ thế giới",
		alarm: "Báo thức",
		stopwatch: "Bấm giờ",
		timer: "Hẹn giờ",
		noAlarms: "Không có báo thức",
		lap: "Vòng",
		start: "Bắt đầu",
		stop: "Dừng",
		reset: "Đặt lại",
		pause: "Tạm dừng",
		lapPrefix: "Vòng"
	},
	ja: {
		worldClock: "世界時計",
		alarm: "アラーム",
		stopwatch: "ストップウォッチ",
		timer: "タイマー",
		noAlarms: "アラームなし",
		lap: "ラップ",
		start: "開始",
		stop: "停止",
		reset: "リセット",
		pause: "一時停止",
		lapPrefix: "ラップ"
	},
	ko: {
		worldClock: "세계 시계",
		alarm: "알람",
		stopwatch: "스톱워치",
		timer: "타이머",
		noAlarms: "설정된 알람 없음",
		lap: "랩",
		start: "시작",
		stop: "중단",
		reset: "재설정",
		pause: "일시정지",
		lapPrefix: "랩"
	},
	zh: {
		worldClock: "世界时钟",
		alarm: "闹钟",
		stopwatch: "秒表",
		timer: "计时器",
		noAlarms: "未设置闹钟",
		lap: "计次",
		start: "启动",
		stop: "停止",
		reset: "复位",
		pause: "暂停",
		lapPrefix: "计次"
	},
	th: {
		worldClock: "นาฬิกาโลก",
		alarm: "เตือนความจำ",
		stopwatch: "จับเวลา",
		timer: "จับเวลาถอยหลัง",
		noAlarms: "ไม่มีการตั้งปลุก",
		lap: "รอบ",
		start: "เริ่ม",
		stop: "หยุด",
		reset: "รีเซ็ต",
		pause: "หยุดชั่วคราว",
		lapPrefix: "รอบ"
	}
}, l = {
	en: "en-US",
	vi: "vi-VN",
	ja: "ja-JP",
	ko: "ko-KR",
	zh: "zh-CN",
	th: "th-TH"
};
function u({ date: e, size: t = 192 }) {
	let n = e.getSeconds(), r = e.getMinutes(), i = e.getHours() % 12, s = n * 6, c = r * 6 + n * .1, l = i * 30 + r * .5;
	return /* @__PURE__ */ a("div", {
		className: "relative mx-auto",
		style: {
			width: t,
			height: t
		},
		children: /* @__PURE__ */ o("svg", {
			viewBox: "0 0 200 200",
			className: "w-full h-full",
			children: [
				/* @__PURE__ */ a("circle", {
					cx: "100",
					cy: "100",
					r: "95",
					className: "fill-neutral-100 dark:fill-[#1c1c1e] stroke-black/10 dark:stroke-white/10",
					strokeWidth: "2"
				}),
				Array.from({ length: 12 }, (e, t) => {
					let n = t * 30 * Math.PI / 180;
					return /* @__PURE__ */ a("line", {
						x1: 100 + 80 * Math.sin(n),
						y1: 100 - 80 * Math.cos(n),
						x2: 100 + 90 * Math.sin(n),
						y2: 100 - 90 * Math.cos(n),
						className: "stroke-black/50 dark:stroke-white/50",
						strokeWidth: "2",
						strokeLinecap: "round"
					}, t);
				}),
				/* @__PURE__ */ a("line", {
					x1: "100",
					y1: "100",
					x2: 100 + 50 * Math.sin(l * Math.PI / 180),
					y2: 100 - 50 * Math.cos(l * Math.PI / 180),
					className: "stroke-black dark:stroke-white",
					strokeWidth: "5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ a("line", {
					x1: "100",
					y1: "100",
					x2: 100 + 68 * Math.sin(c * Math.PI / 180),
					y2: 100 - 68 * Math.cos(c * Math.PI / 180),
					className: "stroke-black dark:stroke-white",
					strokeWidth: "3",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ a("line", {
					x1: "100",
					y1: "100",
					x2: 100 + 72 * Math.sin(s * Math.PI / 180),
					y2: 100 - 72 * Math.cos(s * Math.PI / 180),
					stroke: "#ff3b30",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ a("circle", {
					cx: "100",
					cy: "100",
					r: "4",
					className: "fill-black dark:fill-white"
				}),
				/* @__PURE__ */ a("circle", {
					cx: "100",
					cy: "100",
					r: "2",
					fill: "#ff3b30"
				})
			]
		})
	});
}
function d({ currentLocale: e }) {
	let [t, c] = i(/* @__PURE__ */ new Date()), { isNarrow: l } = n();
	return r(() => {
		let e = setInterval(() => c(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(e);
	}, []), /* @__PURE__ */ o("div", {
		className: "p-4",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-col items-center mb-6",
			children: [
				/* @__PURE__ */ a(u, {
					date: t,
					size: l ? 148 : 192
				}),
				/* @__PURE__ */ a("p", {
					className: "mt-3 text-4xl font-thin tabular-nums text-black/90 dark:text-white/90",
					children: t.toLocaleTimeString(e, {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit"
					})
				}),
				/* @__PURE__ */ a("p", {
					className: "text-sm text-black/50 dark:text-white/50",
					children: t.toLocaleDateString(e, {
						weekday: "long",
						month: "long",
						day: "numeric",
						year: "numeric"
					})
				})
			]
		}), /* @__PURE__ */ a("div", {
			className: "space-y-1",
			children: s.map(({ city: n, tz: r, flag: i }) => {
				let s = new Intl.DateTimeFormat(e, {
					hour: "2-digit",
					minute: "2-digit",
					timeZone: r
				}).format(t), c = new Intl.DateTimeFormat(e, {
					timeZoneName: "short",
					timeZone: r
				}).format(t).split(" ").pop();
				return /* @__PURE__ */ o("div", {
					className: "flex items-center justify-between px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/5 dark:border-white/5",
					children: [/* @__PURE__ */ o("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ a("span", {
							className: "text-xl",
							children: i
						}), /* @__PURE__ */ o("div", { children: [/* @__PURE__ */ a("p", {
							className: "text-sm font-medium text-black/90 dark:text-white/90",
							children: n
						}), /* @__PURE__ */ a("p", {
							className: "text-[11px] text-black/40 dark:text-white/40",
							children: c
						})] })]
					}), /* @__PURE__ */ a("p", {
						className: "text-lg font-light tabular-nums text-black/80 dark:text-white/80",
						children: s
					})]
				}, n);
			})
		})]
	});
}
function f({ tCal: t }) {
	let [n, s] = i(!1), [c, l] = i(0), [u, d] = i([]), [f, p] = i(0), [m, h] = i(0);
	r(() => {
		if (!n) return;
		let e = setInterval(() => l(m + Date.now() - f), 50);
		return () => clearInterval(e);
	}, [
		n,
		f,
		m
	]);
	let g = () => {
		n ? h(c) : p(Date.now()), s(!n);
	}, _ = () => {
		n && d((e) => [c, ...e]);
	}, v = () => {
		s(!1), l(0), h(0), d([]);
	}, y = (e) => {
		let t = Math.floor(e / 6e4), n = Math.floor(e % 6e4 / 1e3), r = Math.floor(e % 1e3 / 10);
		return `${String(t).padStart(2, "0")}:${String(n).padStart(2, "0")}.${String(r).padStart(2, "0")}`;
	};
	return /* @__PURE__ */ o("div", {
		className: "p-6 flex flex-col items-center gap-6",
		children: [
			/* @__PURE__ */ a("p", {
				className: "text-6xl font-thin tabular-nums text-black/90 dark:text-white/90 tracking-tight",
				children: y(c)
			}),
			/* @__PURE__ */ o("div", {
				className: "flex gap-4",
				children: [
					/* @__PURE__ */ a("button", {
						onClick: _,
						disabled: !n,
						className: "w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
						children: t.lap
					}),
					/* @__PURE__ */ a("button", {
						onClick: g,
						className: e("w-16 h-16 rounded-full text-sm font-semibold transition-colors", n ? "bg-red-500/20 border border-red-500/50 text-red-400" : "bg-green-500/20 border border-green-500/50 text-green-400"),
						children: n ? t.stop : t.start
					}),
					/* @__PURE__ */ a("button", {
						onClick: v,
						disabled: c === 0 && !n,
						className: "w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm font-medium disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
						children: t.reset
					})
				]
			}),
			u.length > 0 && /* @__PURE__ */ a("div", {
				className: "w-full space-y-1 max-h-48 overflow-y-auto",
				children: u.map((e, n) => /* @__PURE__ */ o("div", {
					className: "flex justify-between px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 text-sm text-black/70 dark:text-white/70 tabular-nums border border-black/5 dark:border-white/5",
					children: [/* @__PURE__ */ o("span", { children: [
						t.lapPrefix,
						" ",
						u.length - n
					] }), /* @__PURE__ */ a("span", { children: y(e) })]
				}, n))
			})
		]
	});
}
function p({ tCal: t }) {
	let [n, s] = i(0), [c, l] = i(0), [u, d] = i(!1);
	return r(() => {
		if (!u) return;
		if (c <= 0) {
			d(!1);
			return;
		}
		let e = setInterval(() => l((e) => e <= 1 ? (d(!1), 0) : e - 1), 1e3);
		return () => clearInterval(e);
	}, [u, c]), /* @__PURE__ */ o("div", {
		className: "p-6 flex flex-col items-center gap-6",
		children: [
			/* @__PURE__ */ a("p", {
				className: "text-6xl font-thin tabular-nums text-black/90 dark:text-white/90 tracking-tight",
				children: ((e) => `${String(Math.floor(e / 3600)).padStart(2, "0")}:${String(Math.floor(e % 3600 / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`)(u ? c : n)
			}),
			/* @__PURE__ */ a("div", {
				className: "flex flex-wrap justify-center gap-2",
				children: [
					30,
					60,
					120,
					300,
					600,
					900,
					1800,
					3600
				].map((e) => /* @__PURE__ */ a("button", {
					onClick: () => {
						s(e), l(e), d(!1);
					},
					className: "px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 text-sm text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/20 transition-colors border border-black/5 dark:border-white/5",
					children: e < 60 ? `${e}s` : e < 3600 ? `${e / 60}m` : `${e / 3600}h`
				}, e))
			}),
			/* @__PURE__ */ o("div", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ a("button", {
					onClick: () => {
						d(!1), l(n);
					},
					className: "w-16 h-16 rounded-full border border-black/20 dark:border-white/20 text-sm font-medium text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
					children: t.reset
				}), /* @__PURE__ */ a("button", {
					onClick: u ? () => d(!1) : () => {
						c === 0 && n > 0 && l(n), d(!0);
					},
					className: e("w-16 h-16 rounded-full text-sm font-semibold transition-colors", u ? "bg-red-500/20 border border-red-500/50 text-red-400" : "bg-green-500/20 border border-green-500/50 text-green-400"),
					children: u ? t.pause : t.start
				})]
			})
		]
	});
}
function m() {
	let { language: r } = t(), s = l[r] || "en-US", u = c[r] || c.en, [m, h] = i("worldclock"), { isNarrow: g } = n();
	return /* @__PURE__ */ o("div", {
		className: "h-full flex flex-col bg-white dark:bg-[#0F1115] text-black dark:text-white transition-colors",
		children: [/* @__PURE__ */ a("div", {
			className: "flex border-b border-black/10 dark:border-white/10 px-2 pt-2 gap-0.5 shrink-0 bg-neutral-50 dark:bg-black/20",
			children: [
				{
					id: "worldclock",
					label: u.worldClock,
					short: u.worldClock.split(" ")[0]
				},
				{
					id: "alarm",
					label: u.alarm,
					short: u.alarm
				},
				{
					id: "stopwatch",
					label: u.stopwatch,
					short: u.stopwatch
				},
				{
					id: "timer",
					label: u.timer,
					short: u.timer
				}
			].map(({ id: t, label: n, short: r }) => /* @__PURE__ */ a("button", {
				onClick: () => h(t),
				className: e("flex-1 py-1.5 text-sm rounded-t-lg transition-colors truncate", g ? "text-xs px-1" : "px-3", m === t ? "bg-black/5 dark:bg-white/10 text-black dark:text-white font-medium border-b-2 border-orange-500" : "text-black/50 dark:text-white/50 hover:text-black/80 hover:dark:text-white/80"),
				children: g ? r : n
			}, t))
		}), /* @__PURE__ */ o("div", {
			className: "flex-1 overflow-y-auto",
			children: [
				m === "worldclock" && /* @__PURE__ */ a(d, { currentLocale: s }),
				m === "alarm" && /* @__PURE__ */ a("div", {
					className: "flex items-center justify-center h-full text-black/30 dark:text-white/30 text-sm",
					children: u.noAlarms
				}),
				m === "stopwatch" && /* @__PURE__ */ a(f, { tCal: u }),
				m === "timer" && /* @__PURE__ */ a(p, { tCal: u })
			]
		})]
	});
}
//#endregion
export { m as Clock };
