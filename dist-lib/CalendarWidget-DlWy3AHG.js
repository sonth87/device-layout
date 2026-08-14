import { t as e } from "./store-DNT7LGUT.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./chevron-left-DtSiqYaQ.js";
import { t as r } from "./chevron-right-BcSxNxws.js";
import { useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/widgets/built-in/CalendarWidget.tsx
var s = {
	en: {
		upcoming: "UPCOMING",
		schedule: "Today's Schedule"
	},
	vi: {
		upcoming: "SẮP TỚI",
		schedule: "Lịch trình hôm nay"
	},
	ja: {
		upcoming: "今後の予定",
		schedule: "今日のスケジュール"
	},
	ko: {
		upcoming: "예정된 일정",
		schedule: "오늘의 일정"
	},
	zh: {
		upcoming: "即将到来",
		schedule: "今日日程"
	},
	th: {
		upcoming: "เร็วๆ นี้",
		schedule: "กำหนดการวันนี้"
	}
};
function c(e, t) {
	let n = new Date(e, t, 1).getDay(), r = n === 0 ? 6 : n - 1, i = new Date(e, t + 1, 0).getDate(), a = new Date(e, t, 0).getDate(), o = [];
	for (let e = r - 1; e >= 0; e--) o.push({
		day: a - e,
		isCurrent: !1,
		monthOffset: -1
	});
	for (let e = 1; e <= i; e++) o.push({
		day: e,
		isCurrent: !0,
		monthOffset: 0
	});
	let s = 42 - o.length;
	for (let e = 1; e <= s; e++) o.push({
		day: e,
		isCurrent: !1,
		monthOffset: 1
	});
	return o;
}
function l() {
	let t = /* @__PURE__ */ new Date(), n = e((e) => e.language) || "en", r = t.toLocaleDateString(n, { month: "short" }), i = t.toLocaleDateString(n, { weekday: "long" });
	return /* @__PURE__ */ o("div", {
		className: "w-full h-full flex flex-col items-center justify-center select-none p-4",
		children: [
			/* @__PURE__ */ a("p", {
				className: "text-red-500 dark:text-red-400 text-[11px] font-bold uppercase tracking-widest leading-none",
				children: r
			}),
			/* @__PURE__ */ a("p", {
				className: "text-zinc-800 dark:text-white text-5xl font-light leading-none mt-1.5",
				children: t.getDate()
			}),
			/* @__PURE__ */ a("p", {
				className: "text-zinc-500 dark:text-zinc-400 text-[11px] font-medium mt-2.5",
				children: i
			})
		]
	});
}
function u({ size: l }) {
	let u = /* @__PURE__ */ new Date(), d = e((e) => e.language) || "en", [f, p] = i(u.getFullYear()), [m, h] = i(u.getMonth()), g = () => {
		m === 0 ? (h(11), p((e) => e - 1)) : h((e) => e - 1);
	}, _ = () => {
		m === 11 ? (h(0), p((e) => e + 1)) : h((e) => e + 1);
	}, v = c(f, m), y = Array.from({ length: 7 }, (e, t) => new Date(2026, 5, 15 + t).toLocaleDateString(d, { weekday: "narrow" })), b = s[d] || s.en, x = new Date(f, m, 1).toLocaleDateString(d, { month: "short" }), S = new Date(f, m, 1).toLocaleDateString(d, { month: "long" }), C = (e, n) => /* @__PURE__ */ a("div", {
		className: "grid grid-cols-7 grid-rows-6 flex-1 w-full mt-1",
		children: v.map((r, i) => /* @__PURE__ */ a("div", {
			className: "h-full w-full flex items-center justify-center",
			children: /* @__PURE__ */ a("span", {
				className: t("flex items-center justify-center rounded-full font-medium tabular-nums transition-colors", e, n, r.isCurrent && u.getFullYear() === f && u.getMonth() === m && u.getDate() === r.day ? "bg-red-500 text-white font-bold shadow-[0_2px_6px_rgba(239,68,68,0.3)]" : r.isCurrent ? "text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer" : "text-zinc-400/30 dark:text-zinc-600/30 font-normal"),
				children: r.day
			})
		}, i))
	});
	return l === "small" ? /* @__PURE__ */ o("div", {
		className: "w-full h-full flex flex-col p-2.5 select-none justify-between",
		children: [
			/* @__PURE__ */ a("div", {
				className: "flex items-center justify-center mb-1 shrink-0",
				children: /* @__PURE__ */ o("p", {
					className: "text-zinc-800 dark:text-zinc-200 text-[10px] font-bold tracking-wider uppercase",
					children: [
						x,
						" ",
						f
					]
				})
			}),
			/* @__PURE__ */ a("div", {
				className: "grid grid-cols-7 w-full text-center shrink-0",
				children: y.map((e, t) => /* @__PURE__ */ a("div", {
					className: "text-[8px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5",
					children: e
				}, t))
			}),
			C("text-[9px]", "w-[18px] h-[18px]")
		]
	}) : l === "medium" ? /* @__PURE__ */ o("div", {
		className: "w-full h-full flex p-3 select-none justify-between",
		children: [/* @__PURE__ */ o("div", {
			className: "w-[40%] pr-3 border-r border-zinc-200 dark:border-zinc-850 flex flex-col justify-between shrink-0",
			children: [/* @__PURE__ */ o("div", { children: [/* @__PURE__ */ a("p", {
				className: "text-red-500 dark:text-red-400 text-[9px] font-bold uppercase tracking-widest leading-none",
				children: u.toLocaleDateString(d, { weekday: "long" })
			}), /* @__PURE__ */ a("p", {
				className: "text-zinc-800 dark:text-white text-[40px] font-light leading-none mt-1.5",
				children: u.getDate()
			})] }), /* @__PURE__ */ o("div", {
				className: "mt-2 text-[10px]",
				children: [
					/* @__PURE__ */ a("div", { className: "h-px bg-zinc-200 dark:bg-zinc-800 my-1.5" }),
					/* @__PURE__ */ a("p", {
						className: "text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider text-[8px]",
						children: b.upcoming
					}),
					/* @__PURE__ */ o("div", {
						className: "flex items-center gap-1.5 mt-1 text-zinc-700 dark:text-zinc-300",
						children: [
							/* @__PURE__ */ a("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" }),
							/* @__PURE__ */ a("span", {
								className: "truncate font-semibold text-zinc-800 dark:text-zinc-250",
								children: "Weekly Sync"
							}),
							/* @__PURE__ */ a("span", {
								className: "text-[8px] text-zinc-450 dark:text-zinc-500 ml-auto shrink-0",
								children: "10:00"
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ o("div", {
			className: "flex-1 pl-3 flex flex-col justify-between min-w-0",
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex items-center justify-between mb-1 shrink-0",
					children: [/* @__PURE__ */ o("p", {
						className: "text-zinc-800 dark:text-white text-[11px] font-bold",
						children: [
							S,
							" ",
							f
						]
					}), /* @__PURE__ */ o("div", {
						className: "flex gap-0.5",
						children: [/* @__PURE__ */ a("button", {
							onClick: g,
							className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors",
							children: /* @__PURE__ */ a(n, { className: "w-3 h-3" })
						}), /* @__PURE__ */ a("button", {
							onClick: _,
							className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors",
							children: /* @__PURE__ */ a(r, { className: "w-3 h-3" })
						})]
					})]
				}),
				/* @__PURE__ */ a("div", {
					className: "grid grid-cols-7 w-full text-center shrink-0",
					children: y.map((e, t) => /* @__PURE__ */ a("div", {
						className: "text-[8px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5",
						children: e
					}, t))
				}),
				C("text-[10px]", "w-[18px] h-[18px]")
			]
		})]
	}) : /* @__PURE__ */ o("div", {
		className: "w-full h-full flex flex-col p-3 select-none justify-between",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-col h-[180px] shrink-0 justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800",
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex items-center justify-between mb-1.5 shrink-0",
					children: [/* @__PURE__ */ o("p", {
						className: "text-zinc-800 dark:text-white text-[12px] font-bold",
						children: [
							S,
							" ",
							f
						]
					}), /* @__PURE__ */ o("div", {
						className: "flex gap-0.5",
						children: [/* @__PURE__ */ a("button", {
							onClick: g,
							className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors",
							children: /* @__PURE__ */ a(n, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ a("button", {
							onClick: _,
							className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors",
							children: /* @__PURE__ */ a(r, { className: "w-3.5 h-3.5" })
						})]
					})]
				}),
				/* @__PURE__ */ a("div", {
					className: "grid grid-cols-7 w-full text-center shrink-0",
					children: y.map((e, t) => /* @__PURE__ */ a("div", {
						className: "text-[9px] font-bold text-zinc-400 dark:text-zinc-500 py-0.5",
						children: e
					}, t))
				}),
				C("text-[11px]", "w-6 h-6")
			]
		}), /* @__PURE__ */ o("div", {
			className: "flex-1 pt-3 flex flex-col justify-between min-h-0",
			children: [/* @__PURE__ */ a("p", {
				className: "text-zinc-400 dark:text-zinc-500 text-[9px] font-bold uppercase tracking-widest leading-none shrink-0 mb-1",
				children: b.schedule
			}), /* @__PURE__ */ o("div", {
				className: "flex flex-col gap-1.5 flex-1 min-h-0 overflow-y-auto mt-1",
				children: [
					/* @__PURE__ */ o("div", {
						className: "flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
						children: [/* @__PURE__ */ a("div", { className: "w-2 h-2 rounded-full bg-blue-500 shrink-0" }), /* @__PURE__ */ o("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ a("p", {
								className: "text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate",
								children: "Weekly Sync Meeting"
							}), /* @__PURE__ */ a("p", {
								className: "text-[9px] text-zinc-450 dark:text-zinc-500",
								children: "10:00 AM - 10:45 AM"
							})]
						})]
					}),
					/* @__PURE__ */ o("div", {
						className: "flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
						children: [/* @__PURE__ */ a("div", { className: "w-2 h-2 rounded-full bg-green-500 shrink-0" }), /* @__PURE__ */ o("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ a("p", {
								className: "text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate",
								children: "Lunch with Product Team"
							}), /* @__PURE__ */ a("p", {
								className: "text-[9px] text-zinc-450 dark:text-zinc-500",
								children: "12:30 PM - 1:30 PM"
							})]
						})]
					}),
					/* @__PURE__ */ o("div", {
						className: "flex items-center gap-2.5 p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
						children: [/* @__PURE__ */ a("div", { className: "w-2 h-2 rounded-full bg-purple-500 shrink-0" }), /* @__PURE__ */ o("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ a("p", {
								className: "text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate",
								children: "Sprint Planning & Review"
							}), /* @__PURE__ */ a("p", {
								className: "text-[9px] text-zinc-450 dark:text-zinc-500",
								children: "3:00 PM - 4:00 PM"
							})]
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { l as CalendarTodayWidget, u as CalendarWidget };
