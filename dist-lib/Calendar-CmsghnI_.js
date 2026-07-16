import { t as e } from "./store-CdxLZEmC.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./createLucideIcon--WjuKCts.js";
import { t as r } from "./check-DoT5IS9-.js";
import { t as i } from "./chevron-left-DtSiqYaQ.js";
import { t as a } from "./chevron-right-BcSxNxws.js";
import { t as o } from "./list-todo-DCSt_9UO.js";
import { t as s } from "./plus-Dx6tdmvY.js";
import { t as c } from "./search-BKG97C0x.js";
import { t as l } from "./useTranslation-CKCi_Vov.js";
import { a as u, c as d, i as f, l as p, o as m, r as h, s as g } from "./holidays-service-CqYEsHC1.js";
import { useCallback as _, useEffect as v, useMemo as y, useRef as b, useState as x } from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
var ee = n("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]);
//#endregion
//#region src/components/apps/calendar/MiniCalendar.tsx
function T({ targetDate: e, selectedDate: n, onDaySelect: r, isRedHoliday: i = p }) {
	let a = e.getFullYear(), o = e.getMonth(), s = new Date(a, o, 1).getDay(), c = s === 0 ? 6 : s - 1, l = new Date(a, o + 1, 0).getDate(), u = new Date(a, o, 0).getDate(), f = [];
	for (let e = c - 1; e >= 0; e--) f.push(new Date(a, o - 1, u - e));
	for (let e = 1; e <= l; e++) f.push(new Date(a, o, e));
	let m = 42 - f.length;
	for (let e = 1; e <= m; e++) f.push(new Date(a, o + 1, e));
	return /* @__PURE__ */ w("div", {
		className: "text-[10px] sm:text-xs",
		children: [/* @__PURE__ */ C("div", {
			className: "grid grid-cols-7 text-center font-medium text-black/30 dark:text-white/30 mb-1",
			children: [
				"M",
				"T",
				"W",
				"T",
				"F",
				"S",
				"S"
			].map((e, t) => /* @__PURE__ */ C("div", {
				className: "h-5 flex items-center justify-center",
				children: e
			}, t))
		}), /* @__PURE__ */ C("div", {
			className: "grid grid-cols-7 text-center",
			children: f.map((e, a) => {
				let s = e.getMonth() !== o, c = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, l = e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear(), u = d(e), f = i(e);
				return /* @__PURE__ */ w("button", {
					onClick: (t) => {
						t.stopPropagation(), r?.(e);
					},
					className: t("h-5 w-5 mx-auto rounded-full flex items-center justify-center transition-all focus:outline-none relative text-[9px] sm:text-[10px] cursor-pointer", s && (f ? "text-red-500/40 dark:text-red-400/40 font-semibold" : "text-black/25 dark:text-white/25 font-normal"), !s && !c && !l && (f ? "text-red-500 dark:text-red-400 font-semibold" : "text-black/75 dark:text-white/75 font-normal"), c && !l && "bg-red-500 text-white font-bold", l && "bg-accent-active text-white shadow-sm font-semibold"),
					children: [/* @__PURE__ */ C("span", {
						className: c || l ? "relative z-10" : "",
						children: e.getDate()
					}), u && /* @__PURE__ */ C("span", { className: t("absolute bottom-0.5 left-1 right-1 h-0.5 rounded-full z-20", c || l ? "bg-white" : "bg-red-500") })]
				}, a);
			})
		})]
	});
}
var E = {
	calendars: [
		{
			id: "personal",
			name: "Personal",
			group: "iCloud",
			color: "#007afe"
		},
		{
			id: "work",
			name: "Calendar",
			group: "iCloud",
			color: "#007afe"
		},
		{
			id: "reminders",
			name: "Scheduled Reminders",
			group: "Other",
			color: "#f353a7"
		},
		{
			id: "birthdays",
			name: "Birthdays",
			group: "Other",
			color: "#8e8e93"
		},
		{
			id: "holidays",
			name: "Ngày lễ Việt Nam",
			group: "Other",
			color: "#9d3fc6",
			hasFeed: !0
		},
		{
			id: "siri",
			name: "Siri Suggestions",
			group: "Other",
			color: "#f5c400"
		}
	],
	events: [{
		id: "3",
		title: "Scheduled Reminders",
		date: "2026-07-14",
		timeStart: "10:00",
		timeEnd: "11:00",
		calendarId: "reminders"
	}]
}, D = E.calendars;
function te({ selectedDate: e, setSelectedDate: t, filteredEvents: n, onEventClick: r }) {
	let i = u(e), a = n.filter((e) => e.date === i), o = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ w("div", {
		className: "grid grid-cols-[1fr_240px] gap-6 h-full min-h-[500px]",
		children: [/* @__PURE__ */ w("div", {
			className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 relative overflow-y-auto p-4 select-none",
			children: [/* @__PURE__ */ C("div", {
				className: "text-xs font-semibold text-black/40 dark:text-white/40 pb-2 border-b border-black/5 dark:border-white/5 mb-4 uppercase tracking-wider",
				children: "All-day"
			}), /* @__PURE__ */ w("div", {
				className: "relative pt-4",
				style: { height: "1000px" },
				children: [
					e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026 && /* @__PURE__ */ w("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "426px" },
						children: [
							/* @__PURE__ */ C("span", {
								className: "text-[10px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0",
								children: "10:24"
							}),
							/* @__PURE__ */ C("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ C("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					o.map((e, t) => /* @__PURE__ */ w("div", {
						className: "absolute left-0 right-0 flex gap-4 items-center",
						style: {
							top: `${t * 40}px`,
							height: "20px"
						},
						children: [/* @__PURE__ */ w("span", {
							className: "text-[11px] font-semibold text-black/35 dark:text-white/35 w-10 text-right",
							children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
						}), /* @__PURE__ */ C("div", { className: "flex-1 h-px bg-black/5 dark:bg-white/5" })]
					}, e)),
					a.map((e) => {
						let t = D.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, i = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, a = n * 40 + 10, o = Math.max(24, (i - n) * 40);
						return /* @__PURE__ */ w("button", {
							onClick: (t) => {
								t.stopPropagation(), r(e, t.currentTarget);
							},
							className: "absolute left-16 right-4 rounded-lg p-2 text-xs font-semibold text-white shadow-sm border border-white/10 shrink-0 text-left hover:scale-[1.01] active:scale-95 transition-all cursor-pointer focus:outline-none",
							style: {
								top: `${a}px`,
								backgroundColor: t?.color || "#007afe",
								height: `${o}px`
							},
							children: [/* @__PURE__ */ C("p", {
								className: "font-semibold truncate",
								children: e.title
							}), /* @__PURE__ */ w("p", {
								className: "text-[10px] opacity-75",
								children: [
									e.timeStart,
									" - ",
									e.timeEnd
								]
							})]
						}, e.id);
					})
				]
			})]
		}), /* @__PURE__ */ w("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ C("div", {
				className: "border border-black/10 dark:border-white/10 rounded-xl p-4 bg-neutral-50 dark:bg-[#1c1d20]/50 shrink-0",
				children: /* @__PURE__ */ C(T, {
					targetDate: e,
					selectedDate: e,
					onDaySelect: t
				})
			}), /* @__PURE__ */ C("div", {
				className: "flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col items-center justify-center text-center",
				children: /* @__PURE__ */ C("p", {
					className: "text-sm font-semibold text-black/35 dark:text-white/35 font-sans",
					children: a.length === 0 ? "No Event Selected" : `${a.length} Events Scheduled`
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/WeekView.tsx
var O = E.calendars;
function ne({ currentDate: e, setSelectedDate: n, setCurrentView: r, filteredEvents: i, onEventClick: a, isRedHoliday: o = p }) {
	let s = new Date(e), c = s.getDay(), l = s.getDate() - c + (c === 0 ? -6 : 1);
	s.setDate(l);
	let d = Array.from({ length: 7 }, (e, t) => {
		let n = new Date(s);
		return n.setDate(s.getDate() + t), n;
	}), f = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ w("div", {
		className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col overflow-hidden h-full min-h-[500px]",
		children: [/* @__PURE__ */ w("div", {
			className: "grid grid-cols-[60px_1fr] border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1b1e] shrink-0",
			children: [/* @__PURE__ */ C("div", { className: "border-r border-black/10 dark:border-white/10" }), /* @__PURE__ */ C("div", {
				className: "grid grid-cols-7 text-center py-2.5",
				children: d.map((e, i) => {
					let a = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, s = o(e);
					return /* @__PURE__ */ w("div", {
						className: "flex flex-col items-center gap-0.5 select-none",
						children: [
							/* @__PURE__ */ C("span", {
								className: "text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase",
								children: e.toLocaleDateString("en-US", { weekday: "short" })
							}),
							/* @__PURE__ */ C("button", {
								onClick: () => {
									n(e), r("day");
								},
								className: t("text-sm font-semibold h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer", a && "bg-red-500 text-white font-bold", !a && s && "text-red-500 dark:text-red-400 font-bold"),
								children: e.getDate()
							}),
							(() => {
								let n = g(e);
								if (!n) return null;
								let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
								return /* @__PURE__ */ C("span", {
									className: t("text-[9px] font-semibold select-none", a ? "text-red-500 font-bold underline decoration-red-500/40" : "text-black/35 dark:text-white/35 font-normal"),
									children: o
								});
							})()
						]
					}, i);
				})
			})]
		}), /* @__PURE__ */ w("div", {
			className: "flex-1 overflow-y-auto relative grid grid-cols-[60px_1fr] pt-4",
			style: { minHeight: "500px" },
			children: [/* @__PURE__ */ C("div", {
				className: "border-r border-black/10 dark:border-white/10 text-right pr-3 relative",
				style: { height: "1200px" },
				children: f.map((e, t) => /* @__PURE__ */ w("div", {
					className: "absolute right-3 text-[10px] font-semibold text-black/35 dark:text-white/35",
					style: { top: `${t * 48}px` },
					children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
				}, e))
			}), /* @__PURE__ */ w("div", {
				className: "grid grid-cols-7 relative",
				style: { height: "1200px" },
				children: [
					Array.from({ length: 6 }).map((e, t) => /* @__PURE__ */ C("div", {
						className: "absolute h-full w-px bg-black/5 dark:bg-white/5",
						style: { left: `${(t + 1) * (100 / 7)}%` }
					}, t)),
					f.map((e, t) => /* @__PURE__ */ C("div", {
						className: "absolute w-full h-px bg-black/5 dark:bg-white/5",
						style: { top: `${t * 48 + 6}px` }
					}, t)),
					d.some((e) => e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026) && /* @__PURE__ */ w("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "506px" },
						children: [
							/* @__PURE__ */ C("span", {
								className: "text-[9px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0 -ml-12 z-20",
								children: "10:25"
							}),
							/* @__PURE__ */ C("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ C("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					d.map((e, t) => {
						let n = u(e);
						return /* @__PURE__ */ C("div", {
							className: "relative h-full",
							children: i.filter((e) => e.date === n).map((e) => {
								let t = O.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, r = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, i = n * 48 + 6, o = Math.max(20, (r - n) * 48);
								return /* @__PURE__ */ w("button", {
									onClick: (t) => {
										t.stopPropagation(), a(e, t.currentTarget);
									},
									className: "absolute left-1 right-1 rounded p-1 text-[9px] font-semibold text-white shadow-sm border border-white/10 truncate hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer text-left block focus:outline-none",
									style: {
										top: `${i}px`,
										backgroundColor: t?.color || "#007afe",
										height: `${o}px`
									},
									children: [/* @__PURE__ */ C("p", {
										className: "truncate",
										children: e.title
									}), /* @__PURE__ */ C("p", {
										className: "opacity-75",
										children: e.timeStart
									})]
								}, e.id);
							})
						}, t);
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/MonthView.tsx
var k = E.calendars;
function re({ currentDate: e, selectedDate: n, setSelectedDate: r, setCurrentView: i, filteredEvents: a, onEventClick: o, isRedHoliday: s = p }) {
	let c = e.getFullYear(), l = e.getMonth(), d = new Date(c, l, 1).getDay(), f = d === 0 ? 6 : d - 1, m = new Date(c, l + 1, 0).getDate(), h = new Date(c, l, 0).getDate(), _ = [];
	for (let e = f - 1; e >= 0; e--) _.push(new Date(c, l - 1, h - e));
	for (let e = 1; e <= m; e++) _.push(new Date(c, l, e));
	let v = 42 - _.length;
	for (let e = 1; e <= v; e++) _.push(new Date(c, l + 1, e));
	return /* @__PURE__ */ w("div", {
		className: "flex flex-col h-full min-h-0 bg-transparent",
		children: [/* @__PURE__ */ C("div", {
			className: "grid grid-cols-7 text-center border-b border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1c1d20]/50 py-2 select-none shrink-0",
			children: [
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun"
			].map((e) => /* @__PURE__ */ C("span", {
				className: "text-xs font-semibold text-black/55 dark:text-white/55",
				children: e
			}, e))
		}), /* @__PURE__ */ C("div", {
			className: "flex-1 grid grid-cols-7 grid-rows-6 divide-x divide-y divide-black/10 dark:divide-white/10 select-none min-h-0 border-t border-black/10 dark:border-white/10",
			children: _.map((e, c) => {
				let d = u(e), f = e.getMonth() !== l, p = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, m = e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear(), h = a.filter((e) => e.date === d), _ = s(e);
				return /* @__PURE__ */ w("div", {
					role: "button",
					tabIndex: 0,
					onClick: () => {
						r(e);
					},
					onDoubleClick: () => {
						r(e), i("day");
					},
					onKeyDown: (t) => {
						(t.key === "Enter" || t.key === " ") && r(e);
					},
					className: t("p-2 text-left flex flex-col justify-between hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus:outline-none h-full min-h-0 cursor-pointer", m && "bg-black/[0.01] dark:bg-white/[0.01]"),
					children: [/* @__PURE__ */ w("div", {
						className: "flex items-start justify-between w-full",
						children: [(() => {
							let n = g(e);
							if (!n) return null;
							let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
							return /* @__PURE__ */ C("span", {
								className: t("text-[10px] font-semibold pl-1 select-none", a ? "text-red-500 font-bold" : "text-black/35 dark:text-white/35 font-normal"),
								children: o
							});
						})(), /* @__PURE__ */ C("span", {
							className: t("text-sm h-6 w-6 rounded-full flex items-center justify-center transition-all", f && (_ ? "text-red-500/40 dark:text-red-400/40 font-bold" : "text-black/25 dark:text-white/25 font-normal"), !f && !p && !m && (_ ? "text-red-500 dark:text-red-400 font-bold" : "text-black/75 dark:text-white/75 font-semibold"), p && "bg-red-500 text-white font-bold shadow-sm", m && "bg-accent-active text-white font-bold shadow-sm"),
							children: e.getDate()
						})]
					}), /* @__PURE__ */ C("div", {
						className: "mt-1 space-y-1 w-full overflow-hidden flex-1 flex flex-col justify-end",
						children: h.map((e) => /* @__PURE__ */ C("button", {
							onClick: (t) => {
								t.stopPropagation(), o(e, t.currentTarget);
							},
							className: "px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate w-full text-left hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer block border-none focus:outline-none",
							style: { backgroundColor: k.find((t) => t.id === e.calendarId)?.color || "#007afe" },
							children: e.title
						}, e.id))
					})]
				}, c);
			})
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/YearView.tsx
function ie({ currentDate: e, selectedDate: t, setCurrentDate: n, setCurrentView: r }) {
	let i = e.getFullYear();
	return /* @__PURE__ */ C("div", {
		className: "grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 h-full min-h-0 flex-1 select-none pb-0",
		children: Array.from({ length: 12 }, (e, t) => new Date(i, t, 1)).map((e, i) => /* @__PURE__ */ w("div", {
			className: "flex flex-col cursor-pointer",
			onClick: () => {
				n(e), r("month");
			},
			children: [/* @__PURE__ */ C("h3", {
				className: "text-xs font-semibold text-red-500 mb-1.5 capitalize px-1",
				children: e.toLocaleDateString("en-US", { month: "long" })
			}), /* @__PURE__ */ C("div", {
				className: "flex-1 min-h-0",
				children: /* @__PURE__ */ C(T, {
					targetDate: e,
					selectedDate: t
				})
			})]
		}, i))
	});
}
//#endregion
//#region src/hooks/useHolidays.ts
function A(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function ae(t) {
	let n = e((e) => e.country) ?? "vn", r = b(n), i = [(/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getFullYear() + 1], a = t ?? i, [o, s] = x(!0), [c, l] = x([]), u = b(/* @__PURE__ */ new Map()), d = _(async (e, t) => {
		s(!0);
		try {
			let n = (await Promise.all(t.map((t) => h(e, t)))).flat();
			l(n);
			let r = /* @__PURE__ */ new Map();
			for (let e of n) {
				let t = r.get(e.date) ?? [];
				t.push(e), r.set(e.date, t);
			}
			u.current = r;
		} finally {
			s(!1);
		}
	}, []);
	v(() => {
		d(n, a);
	}, [n, a.join(",")]), v(() => {
		r.current !== n && (f(r.current), r.current = n);
	}, [n]);
	let p = _((e) => u.current.get(A(e)) ?? [], []);
	return {
		loading: o,
		holidays: c,
		getHolidayName: _((e) => {
			let t = p(e);
			return t.length === 0 ? null : (t.find((e) => e.isRed) ?? t[0]).name;
		}, [p]),
		isRedHoliday: _((e) => p(e).some((e) => e.isRed), [p]),
		getHolidaysForDate: p
	};
}
//#endregion
//#region src/components/apps/Calendar.tsx
var j = E.calendars, oe = E.events;
function M({ appId: e }) {
	let { t: n, language: d } = l(), [f, p] = x(() => new Date(2026, 6, 14)), [h, g] = x(() => new Date(2026, 6, 14)), [_, E] = x("month"), [D, O] = x(() => j.map((e) => e.id)), [k, A] = x(oe), M = b(null), [N, se] = x(800), [P, ce] = x(600), [F, I] = x(!0), L = b(800), R = b(null), [z, B] = x(0), [V, H] = x(!1), [U, W] = x(""), [G, K] = x(null), [q, le] = x(null), J = (e, t) => {
		if (!M.current) return;
		let n = M.current.getBoundingClientRect(), r = t.getBoundingClientRect(), i = r.right - n.left + 12, a = "left";
		i + 280 > n.width - 12 && (i = r.left - n.left - 280 - 12, a = "right");
		let o = (r.top + r.bottom) / 2 - n.top - 160 / 2;
		o < 12 && (o = 12), o + 160 > n.height - 12 && (o = n.height - 160 - 12), le({
			top: o,
			left: i,
			arrowSide: a
		}), K(e);
	}, ue = () => {
		G && (G.calendarId === "holidays" ? fe("holidays") : A((e) => e.filter((e) => e.id !== G.id)), K(null));
	}, de = y(() => G ? new Date(G.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "", [G]), Y = y(() => G ? j.find((e) => e.id === G.calendarId) : null, [G]);
	v(() => {
		if (!M.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) se(t.contentRect.width), ce(t.contentRect.height);
		});
		return e.observe(M.current), () => e.disconnect();
	}, []), v(() => {
		N < 680 && L.current >= 680 ? I(!1) : N >= 680 && L.current < 680 && I(!0), L.current = N;
	}, [N]);
	let fe = (e) => {
		O((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, X = f.getFullYear(), { holidays: pe, isRedHoliday: Z } = ae(y(() => [
		X - 1,
		X,
		X + 1
	], [X])), me = y(() => pe.map((e) => ({
		id: `holiday-${e.date}`,
		title: e.name,
		date: e.date,
		timeStart: "00:00",
		timeEnd: "23:59",
		calendarId: "holidays"
	})), [pe]), he = y(() => [...k, ...me], [k, me]), Q = y(() => he.filter((e) => D.includes(e.calendarId)), [he, D]), $ = (e) => {
		let t = e === "next" ? 1 : -1, n = new Date(f);
		_ === "day" ? n.setDate(n.getDate() + t) : _ === "week" ? n.setDate(n.getDate() + t * 7) : _ === "month" ? n.setMonth(n.getMonth() + t) : _ === "year" && n.setFullYear(n.getFullYear() + t), p(n);
	};
	return /* @__PURE__ */ w("div", {
		ref: M,
		className: "flex h-full bg-white dark:bg-[#1a1b1e] text-black dark:text-white font-sans overflow-hidden relative",
		children: [
			F && /* @__PURE__ */ w("aside", {
				className: "w-56 shrink-0 border-r border-black/10 dark:border-white/10 bg-[#f3f3f3]/95 dark:bg-[#1f2023]/95 p-3 flex flex-col justify-between select-none",
				children: [/* @__PURE__ */ w("div", { children: [/* @__PURE__ */ C("div", {
					className: "h-6 flex items-center justify-end mb-4",
					children: /* @__PURE__ */ w("div", {
						className: "flex items-center gap-2 pr-1",
						children: [/* @__PURE__ */ C("button", {
							onClick: () => I(!1),
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ C("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ C("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M4 6h16M4 12h16m-7 6h7"
								})
							})
						}), /* @__PURE__ */ C("button", {
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ C("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ C("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								})
							})
						})]
					})
				}), /* @__PURE__ */ C("div", {
					className: "space-y-4",
					children: ["iCloud", "Other"].map((e) => /* @__PURE__ */ w("div", { children: [/* @__PURE__ */ C("p", {
						className: "px-2 text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mb-1",
						children: e
					}), /* @__PURE__ */ C("div", {
						className: "space-y-0.5",
						children: j.filter((t) => t.group === e).map((e) => {
							let n = D.includes(e.id), i = e.id === "reminders";
							return /* @__PURE__ */ w("button", {
								onClick: () => fe(e.id),
								className: t("w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-all focus:outline-none text-left cursor-pointer", i ? "bg-black/[0.04] dark:bg-white/[0.04]" : "hover:bg-black/5 dark:hover:bg-white/5"),
								children: [/* @__PURE__ */ w("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ C("div", {
										className: t("w-3.5 h-3.5 rounded flex items-center justify-center text-white shrink-0 border transition-all", n ? "border-transparent" : "border-black/25 dark:border-white/25 bg-transparent"),
										style: { backgroundColor: n ? e.color : "transparent" },
										children: n && /* @__PURE__ */ C(r, { className: "w-2.5 h-2.5 stroke-[3]" })
									}), /* @__PURE__ */ C("span", {
										className: "truncate",
										style: {
											color: i ? e.color : "inherit",
											fontWeight: i ? 500 : 400
										},
										children: e.name
									})]
								}), e.hasFeed && /* @__PURE__ */ C("svg", {
									className: "w-3.5 h-3.5 opacity-40 shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ C("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M13 10V3L4 14h7v7l9-11h-7z"
									})
								})]
							}, e.id);
						})
					})] }, e))
				})] }), /* @__PURE__ */ w("div", {
					className: "mt-4 pt-4 border-t border-black/5 dark:border-white/5",
					children: [/* @__PURE__ */ w("div", {
						className: "flex items-center justify-between px-2 mb-2",
						children: [/* @__PURE__ */ C("span", {
							className: "text-[11px] font-semibold text-black/60 dark:text-white/60",
							children: f.toLocaleDateString(d === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ w("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ C("button", {
								onClick: () => {
									let e = new Date(f);
									e.setMonth(e.getMonth() - 1), p(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ C(i, { className: "w-3 h-3" })
							}), /* @__PURE__ */ C("button", {
								onClick: () => {
									let e = new Date(f);
									e.setMonth(e.getMonth() + 1), p(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ C(a, { className: "w-3 h-3" })
							})]
						})]
					}), /* @__PURE__ */ C(T, {
						targetDate: f,
						selectedDate: h,
						isRedHoliday: Z,
						onDaySelect: (e) => {
							g(e), p(e);
						}
					})]
				})]
			}),
			/* @__PURE__ */ w("div", {
				className: "flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1b1e]",
				children: [/* @__PURE__ */ w("header", {
					className: "flex shrink-0 items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 select-none",
					children: [
						/* @__PURE__ */ w("div", {
							className: "flex items-center gap-3",
							children: [!F && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ w("div", {
								className: "flex gap-1.5 pl-1 mr-1",
								children: [
									/* @__PURE__ */ C("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ff5f56]" }),
									/* @__PURE__ */ C("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ C("div", { className: "w-3.5 h-3.5 rounded-full bg-[#27c93f]" })
								]
							}), /* @__PURE__ */ w("div", {
								className: "flex items-center gap-1.5 mr-1",
								children: [/* @__PURE__ */ C("button", {
									onClick: () => I(!0),
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ C("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ C("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M4 6h16M4 12h16m-7 6h7"
										})
									})
								}), /* @__PURE__ */ C("button", {
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ C("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ C("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										})
									})
								})]
							})] }), /* @__PURE__ */ w("div", {
								className: "relative",
								children: [/* @__PURE__ */ C("button", {
									onClick: () => H(!V),
									className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
									children: /* @__PURE__ */ C(s, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
								}), V && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("div", {
									className: "fixed inset-0 z-40 bg-transparent",
									onClick: () => H(!1)
								}), /* @__PURE__ */ w("div", {
									className: "absolute top-9 left-0 z-50 w-72 bg-white/95 dark:bg-[#2c2d30]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-black dark:text-white",
									children: [
										/* @__PURE__ */ C("div", { className: "absolute -top-1.5 left-2.5 w-3 h-3 bg-white dark:bg-[#2c2d30] rotate-45 border-t border-l border-black/10 dark:border-white/10" }),
										/* @__PURE__ */ w("div", {
											className: "grid grid-cols-2 gap-4 mb-4 relative z-10",
											children: [/* @__PURE__ */ w("button", {
												onClick: () => {
													let e = U.trim() || "New Event", t = {
														id: crypto.randomUUID(),
														title: e,
														date: u(h),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "personal"
													};
													A((e) => [...e, t]), W(""), H(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ C("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ C(ee, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ C("span", {
													className: "text-xs font-semibold",
													children: n.calNewEvent
												})]
											}), /* @__PURE__ */ w("button", {
												onClick: () => {
													let e = U.trim() || "New Reminder", t = {
														id: crypto.randomUUID(),
														title: e,
														date: u(h),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "reminders"
													};
													A((e) => [...e, t]), W(""), H(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ C("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ C(o, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ C("span", {
													className: "text-xs font-semibold",
													children: n.calNewReminder
												})]
											})]
										}),
										/* @__PURE__ */ C("div", { className: "border-t border-black/10 dark:border-white/10 my-3" }),
										/* @__PURE__ */ w("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ C("label", {
												className: "text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider pl-1",
												children: n.calCreateQuickEvent
											}), /* @__PURE__ */ C("input", {
												type: "text",
												value: U,
												onChange: (e) => W(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter" && U.trim()) {
														let e = {
															id: crypto.randomUUID(),
															title: U.trim(),
															date: u(h),
															timeStart: "12:00",
															timeEnd: "13:00",
															calendarId: "personal"
														};
														A((t) => [...t, e]), W(""), H(!1);
													}
												},
												placeholder: n.calQuickEventPlaceholder,
												className: "w-full px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs focus:outline-none caret-[#ff3b30] text-black dark:text-white",
												autoFocus: !0
											})]
										})
									]
								})] })]
							})]
						}),
						/* @__PURE__ */ C("div", {
							className: "bg-black/5 dark:bg-white/10 p-0.5 rounded-full flex items-center shrink-0",
							children: [
								"day",
								"week",
								"month",
								"year"
							].map((e) => /* @__PURE__ */ C("button", {
								onClick: () => {
									E(e), e === "day" && p(new Date(h));
								},
								className: t("px-4 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none cursor-pointer", _ === e ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"),
								children: e === "day" ? n.calDay : e === "week" ? n.calWeek : e === "month" ? n.calMonth : n.calYear
							}, e))
						}),
						/* @__PURE__ */ C("button", {
							className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
							children: /* @__PURE__ */ C(c, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
						})
					]
				}), /* @__PURE__ */ w("div", {
					onWheel: (e) => {
						_ !== "year" && _ !== "month" || (B((t) => {
							let n = t + e.deltaY, r = P / 2 || 250;
							return n > r ? (setTimeout(() => $("next"), 0), 0) : n < -r ? (setTimeout(() => $("prev"), 0), 0) : n;
						}), R.current && clearTimeout(R.current), R.current = setTimeout(() => {
							B(0);
						}, 250));
					},
					className: "flex-1 flex flex-col min-h-0",
					children: [/* @__PURE__ */ w("div", {
						className: "flex shrink-0 items-center justify-between px-6 py-4 select-none",
						children: [/* @__PURE__ */ C("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: _ === "year" ? /* @__PURE__ */ w("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ C("span", { children: f.getFullYear() }), f.getFullYear() === 2026 && /* @__PURE__ */ w("div", {
									className: "hidden sm:flex items-center gap-4 text-xs font-normal",
									children: [/* @__PURE__ */ w("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ C("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ C("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: "Bính Ngọ 2026"
										})]
									}), /* @__PURE__ */ w("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ C("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ C("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: n.calLunarFirstDay
										})]
									})]
								})]
							}) : _ === "day" ? /* @__PURE__ */ w("div", {
								className: "flex items-baseline gap-2",
								children: [
									/* @__PURE__ */ w("span", { children: [
										h.getDate(),
										" ",
										h.toLocaleDateString(d === "vi" ? "vi-VN" : "en-US", {
											month: "long",
											year: "numeric"
										})
									] }),
									/* @__PURE__ */ C("span", {
										className: "text-sm font-normal text-black/40 dark:text-white/40",
										children: h.toLocaleDateString("en-US", { weekday: "long" })
									}),
									m(h) && /* @__PURE__ */ C("span", {
										className: "text-xs text-red-500 font-semibold border border-red-500/20 px-1.5 py-0.5 rounded bg-red-500/5",
										children: m(h)
									})
								]
							}) : f.toLocaleDateString(d === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ C("div", {
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ w("div", {
								className: "flex items-center gap-0.5 bg-black/5 dark:bg-white/10 p-0.5 rounded-lg border border-black/5 dark:border-white/5",
								children: [
									/* @__PURE__ */ C("button", {
										onClick: () => $("prev"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ C(i, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ C("button", {
										onClick: () => {
											let e = new Date(2026, 6, 14);
											p(e), g(e);
										},
										className: "px-3 py-0.5 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/85 dark:text-white/85 cursor-pointer",
										children: n.calToday
									}),
									/* @__PURE__ */ C("button", {
										onClick: () => $("next"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ C(a, { className: "w-3.5 h-3.5" })
									})
								]
							})
						})]
					}), /* @__PURE__ */ C("div", {
						className: t("flex-1 min-h-0", _ === "year" ? "px-6 pb-2" : "px-0", _ === "year" || _ === "month" ? "overflow-hidden h-full flex flex-col pb-0" : "overflow-y-auto pb-4"),
						children: /* @__PURE__ */ w("div", {
							style: {
								transform: `translateY(${-z * .8}px)`,
								opacity: 1 - Math.abs(z) / (P || 500),
								transition: z === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease" : "none"
							},
							className: "h-full flex flex-col",
							children: [
								_ === "day" && /* @__PURE__ */ C(te, {
									selectedDate: h,
									setSelectedDate: g,
									filteredEvents: Q,
									onEventClick: J
								}),
								_ === "week" && /* @__PURE__ */ C(ne, {
									currentDate: f,
									setSelectedDate: g,
									setCurrentView: E,
									filteredEvents: Q,
									isRedHoliday: Z,
									onEventClick: J
								}),
								_ === "month" && /* @__PURE__ */ C(re, {
									currentDate: f,
									selectedDate: h,
									setSelectedDate: g,
									setCurrentView: E,
									filteredEvents: Q,
									isRedHoliday: Z,
									onEventClick: J
								}),
								_ === "year" && /* @__PURE__ */ C(ie, {
									currentDate: f,
									selectedDate: h,
									setCurrentDate: p,
									setCurrentView: E
								})
							]
						})
					})]
				})]
			}),
			G && q && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("div", {
				className: "absolute inset-0 z-40 bg-transparent",
				onClick: () => K(null)
			}), /* @__PURE__ */ w("div", {
				className: "absolute z-50 w-[280px] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md text-black dark:text-white border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transition-all duration-150 ease-out",
				style: {
					top: `${q.top}px`,
					left: `${q.left}px`
				},
				children: [
					/* @__PURE__ */ C("div", { className: t("absolute w-0 h-0 border-8 border-transparent", q.arrowSide === "left" && "top-1/2 -translate-y-1/2 -left-[16px] border-r-8 border-r-white/95 dark:border-r-[#1c1c1e]/95", q.arrowSide === "right" && "top-1/2 -translate-y-1/2 -right-[16px] border-l-8 border-l-white/95 dark:border-l-[#1c1c1e]/95") }),
					/* @__PURE__ */ w("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ C("h3", {
							className: "font-bold text-base text-black/90 dark:text-white/95 truncate flex-1",
							children: G.title
						}), Y && /* @__PURE__ */ w("div", {
							className: "flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-semibold text-black/70 dark:text-white/90 shrink-0 border border-black/5 dark:border-white/5",
							children: [/* @__PURE__ */ C("span", {
								className: "h-2 w-2 rounded-full shrink-0",
								style: { backgroundColor: Y.color }
							}), /* @__PURE__ */ C("span", {
								className: "text-[9px] text-black/40 dark:text-white/50 select-none",
								children: "↕"
							})]
						})]
					}),
					/* @__PURE__ */ w("div", {
						className: "bg-black/[0.03] dark:bg-white/5 rounded-xl p-3 space-y-1 text-xs text-black/80 dark:text-white/90 border border-black/5 dark:border-white/5",
						children: [/* @__PURE__ */ C("p", {
							className: "font-semibold text-black/90 dark:text-white/95",
							children: de
						}), /* @__PURE__ */ w("div", {
							className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/60",
							children: [/* @__PURE__ */ C("span", { children: G.calendarId === "holidays" ? n.calRepeatsYearly : n.calDoesNotRepeat }), G.calendarId === "holidays" && /* @__PURE__ */ C("span", {
								className: "text-[10px]",
								children: "🔄"
							})]
						})]
					}),
					/* @__PURE__ */ C("div", {
						className: "flex justify-end pt-1",
						children: /* @__PURE__ */ C("button", {
							onClick: ue,
							className: "bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/10 dark:hover:bg-white/20 active:scale-95 px-4 py-1.5 rounded-lg text-xs font-semibold text-black/80 dark:text-white/90 transition-all cursor-pointer border border-black/10 dark:border-white/10",
							children: G.calendarId === "holidays" ? n.calUnsubscribe : n.calDelete
						})
					})
				]
			})] })
		]
	});
}
//#endregion
export { M as Calendar };
