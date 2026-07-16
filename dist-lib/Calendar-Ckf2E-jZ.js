import { t as e } from "./store-429-ivOo.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./createLucideIcon--WjuKCts.js";
import { t as r } from "./check-DoT5IS9-.js";
import { t as i } from "./chevron-left-DtSiqYaQ.js";
import { t as a } from "./chevron-right-BcSxNxws.js";
import { t as o } from "./plus-Dx6tdmvY.js";
import { t as s } from "./search-BKG97C0x.js";
import { t as c } from "./useTranslation-BYwV1Fyx.js";
import { a as l, c as u, i as d, l as f, o as p, r as m, s as h } from "./holidays-service-CqYEsHC1.js";
import { useCallback as g, useEffect as _, useMemo as v, useRef as y, useState as b } from "react";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
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
]), te = n("list-todo", [
	["path", {
		d: "M13 5h8",
		key: "a7qcls"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}],
	["path", {
		d: "m3 17 2 2 4-4",
		key: "1jhpwq"
	}],
	["rect", {
		x: "3",
		y: "4",
		width: "6",
		height: "6",
		rx: "1",
		key: "cif1o7"
	}]
]);
//#endregion
//#region src/components/apps/calendar/MiniCalendar.tsx
function w({ targetDate: e, selectedDate: n, onDaySelect: r, isRedHoliday: i = f }) {
	let a = e.getFullYear(), o = e.getMonth(), s = new Date(a, o, 1).getDay(), c = s === 0 ? 6 : s - 1, l = new Date(a, o + 1, 0).getDate(), d = new Date(a, o, 0).getDate(), p = [];
	for (let e = c - 1; e >= 0; e--) p.push(new Date(a, o - 1, d - e));
	for (let e = 1; e <= l; e++) p.push(new Date(a, o, e));
	let m = 42 - p.length;
	for (let e = 1; e <= m; e++) p.push(new Date(a, o + 1, e));
	return /* @__PURE__ */ C("div", {
		className: "text-[10px] sm:text-xs",
		children: [/* @__PURE__ */ S("div", {
			className: "grid grid-cols-7 text-center font-medium text-black/30 dark:text-white/30 mb-1",
			children: [
				"M",
				"T",
				"W",
				"T",
				"F",
				"S",
				"S"
			].map((e, t) => /* @__PURE__ */ S("div", {
				className: "h-5 flex items-center justify-center",
				children: e
			}, t))
		}), /* @__PURE__ */ S("div", {
			className: "grid grid-cols-7 text-center",
			children: p.map((e, a) => {
				let s = e.getMonth() !== o, c = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, l = e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear(), d = u(e), f = i(e);
				return /* @__PURE__ */ C("button", {
					onClick: (t) => {
						t.stopPropagation(), r?.(e);
					},
					className: t("h-5 w-5 mx-auto rounded-full flex items-center justify-center transition-all focus:outline-none relative text-[9px] sm:text-[10px] cursor-pointer", s && (f ? "text-red-500/40 dark:text-red-400/40 font-semibold" : "text-black/25 dark:text-white/25 font-normal"), !s && !c && !l && (f ? "text-red-500 dark:text-red-400 font-semibold" : "text-black/75 dark:text-white/75 font-normal"), c && !l && "bg-red-500 text-white font-bold", l && "bg-accent-active text-white shadow-sm font-semibold"),
					children: [/* @__PURE__ */ S("span", {
						className: c || l ? "relative z-10" : "",
						children: e.getDate()
					}), d && /* @__PURE__ */ S("span", { className: t("absolute bottom-0.5 left-1 right-1 h-0.5 rounded-full z-20", c || l ? "bg-white" : "bg-red-500") })]
				}, a);
			})
		})]
	});
}
var T = {
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
}, E = T.calendars;
function ne({ selectedDate: e, setSelectedDate: t, filteredEvents: n, onEventClick: r }) {
	let i = l(e), a = n.filter((e) => e.date === i), o = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ C("div", {
		className: "grid grid-cols-[1fr_240px] gap-6 h-full min-h-[500px]",
		children: [/* @__PURE__ */ C("div", {
			className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 relative overflow-y-auto p-4 select-none",
			children: [/* @__PURE__ */ S("div", {
				className: "text-xs font-semibold text-black/40 dark:text-white/40 pb-2 border-b border-black/5 dark:border-white/5 mb-4 uppercase tracking-wider",
				children: "All-day"
			}), /* @__PURE__ */ C("div", {
				className: "relative pt-4",
				style: { height: "1000px" },
				children: [
					e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026 && /* @__PURE__ */ C("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "426px" },
						children: [
							/* @__PURE__ */ S("span", {
								className: "text-[10px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0",
								children: "10:24"
							}),
							/* @__PURE__ */ S("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ S("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					o.map((e, t) => /* @__PURE__ */ C("div", {
						className: "absolute left-0 right-0 flex gap-4 items-center",
						style: {
							top: `${t * 40}px`,
							height: "20px"
						},
						children: [/* @__PURE__ */ C("span", {
							className: "text-[11px] font-semibold text-black/35 dark:text-white/35 w-10 text-right",
							children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
						}), /* @__PURE__ */ S("div", { className: "flex-1 h-px bg-black/5 dark:bg-white/5" })]
					}, e)),
					a.map((e) => {
						let t = E.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, i = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, a = n * 40 + 10, o = Math.max(24, (i - n) * 40);
						return /* @__PURE__ */ C("button", {
							onClick: (t) => {
								t.stopPropagation(), r(e, t.currentTarget);
							},
							className: "absolute left-16 right-4 rounded-lg p-2 text-xs font-semibold text-white shadow-sm border border-white/10 shrink-0 text-left hover:scale-[1.01] active:scale-95 transition-all cursor-pointer focus:outline-none",
							style: {
								top: `${a}px`,
								backgroundColor: t?.color || "#007afe",
								height: `${o}px`
							},
							children: [/* @__PURE__ */ S("p", {
								className: "font-semibold truncate",
								children: e.title
							}), /* @__PURE__ */ C("p", {
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
		}), /* @__PURE__ */ C("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ S("div", {
				className: "border border-black/10 dark:border-white/10 rounded-xl p-4 bg-neutral-50 dark:bg-[#1c1d20]/50 shrink-0",
				children: /* @__PURE__ */ S(w, {
					targetDate: e,
					selectedDate: e,
					onDaySelect: t
				})
			}), /* @__PURE__ */ S("div", {
				className: "flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col items-center justify-center text-center",
				children: /* @__PURE__ */ S("p", {
					className: "text-sm font-semibold text-black/35 dark:text-white/35 font-sans",
					children: a.length === 0 ? "No Event Selected" : `${a.length} Events Scheduled`
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/WeekView.tsx
var D = T.calendars;
function re({ currentDate: e, setSelectedDate: n, setCurrentView: r, filteredEvents: i, onEventClick: a, isRedHoliday: o = f }) {
	let s = new Date(e), c = s.getDay(), u = s.getDate() - c + (c === 0 ? -6 : 1);
	s.setDate(u);
	let d = Array.from({ length: 7 }, (e, t) => {
		let n = new Date(s);
		return n.setDate(s.getDate() + t), n;
	}), p = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ C("div", {
		className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col overflow-hidden h-full min-h-[500px]",
		children: [/* @__PURE__ */ C("div", {
			className: "grid grid-cols-[60px_1fr] border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1b1e] shrink-0",
			children: [/* @__PURE__ */ S("div", { className: "border-r border-black/10 dark:border-white/10" }), /* @__PURE__ */ S("div", {
				className: "grid grid-cols-7 text-center py-2.5",
				children: d.map((e, i) => {
					let a = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, s = o(e);
					return /* @__PURE__ */ C("div", {
						className: "flex flex-col items-center gap-0.5 select-none",
						children: [
							/* @__PURE__ */ S("span", {
								className: "text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase",
								children: e.toLocaleDateString("en-US", { weekday: "short" })
							}),
							/* @__PURE__ */ S("button", {
								onClick: () => {
									n(e), r("day");
								},
								className: t("text-sm font-semibold h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer", a && "bg-red-500 text-white font-bold", !a && s && "text-red-500 dark:text-red-400 font-bold"),
								children: e.getDate()
							}),
							(() => {
								let n = h(e);
								if (!n) return null;
								let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
								return /* @__PURE__ */ S("span", {
									className: t("text-[9px] font-semibold select-none", a ? "text-red-500 font-bold underline decoration-red-500/40" : "text-black/35 dark:text-white/35 font-normal"),
									children: o
								});
							})()
						]
					}, i);
				})
			})]
		}), /* @__PURE__ */ C("div", {
			className: "flex-1 overflow-y-auto relative grid grid-cols-[60px_1fr] pt-4",
			style: { minHeight: "500px" },
			children: [/* @__PURE__ */ S("div", {
				className: "border-r border-black/10 dark:border-white/10 text-right pr-3 relative",
				style: { height: "1200px" },
				children: p.map((e, t) => /* @__PURE__ */ C("div", {
					className: "absolute right-3 text-[10px] font-semibold text-black/35 dark:text-white/35",
					style: { top: `${t * 48}px` },
					children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
				}, e))
			}), /* @__PURE__ */ C("div", {
				className: "grid grid-cols-7 relative",
				style: { height: "1200px" },
				children: [
					Array.from({ length: 6 }).map((e, t) => /* @__PURE__ */ S("div", {
						className: "absolute h-full w-px bg-black/5 dark:bg-white/5",
						style: { left: `${(t + 1) * (100 / 7)}%` }
					}, t)),
					p.map((e, t) => /* @__PURE__ */ S("div", {
						className: "absolute w-full h-px bg-black/5 dark:bg-white/5",
						style: { top: `${t * 48 + 6}px` }
					}, t)),
					d.some((e) => e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026) && /* @__PURE__ */ C("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "506px" },
						children: [
							/* @__PURE__ */ S("span", {
								className: "text-[9px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0 -ml-12 z-20",
								children: "10:25"
							}),
							/* @__PURE__ */ S("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ S("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					d.map((e, t) => {
						let n = l(e);
						return /* @__PURE__ */ S("div", {
							className: "relative h-full",
							children: i.filter((e) => e.date === n).map((e) => {
								let t = D.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, r = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, i = n * 48 + 6, o = Math.max(20, (r - n) * 48);
								return /* @__PURE__ */ C("button", {
									onClick: (t) => {
										t.stopPropagation(), a(e, t.currentTarget);
									},
									className: "absolute left-1 right-1 rounded p-1 text-[9px] font-semibold text-white shadow-sm border border-white/10 truncate hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer text-left block focus:outline-none",
									style: {
										top: `${i}px`,
										backgroundColor: t?.color || "#007afe",
										height: `${o}px`
									},
									children: [/* @__PURE__ */ S("p", {
										className: "truncate",
										children: e.title
									}), /* @__PURE__ */ S("p", {
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
var O = T.calendars;
function ie({ currentDate: e, selectedDate: n, setSelectedDate: r, setCurrentView: i, filteredEvents: a, onEventClick: o, isRedHoliday: s = f }) {
	let c = e.getFullYear(), u = e.getMonth(), d = new Date(c, u, 1).getDay(), p = d === 0 ? 6 : d - 1, m = new Date(c, u + 1, 0).getDate(), g = new Date(c, u, 0).getDate(), _ = [];
	for (let e = p - 1; e >= 0; e--) _.push(new Date(c, u - 1, g - e));
	for (let e = 1; e <= m; e++) _.push(new Date(c, u, e));
	let v = 42 - _.length;
	for (let e = 1; e <= v; e++) _.push(new Date(c, u + 1, e));
	return /* @__PURE__ */ C("div", {
		className: "flex flex-col h-full min-h-0 bg-transparent",
		children: [/* @__PURE__ */ S("div", {
			className: "grid grid-cols-7 text-center border-b border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1c1d20]/50 py-2 select-none shrink-0",
			children: [
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun"
			].map((e) => /* @__PURE__ */ S("span", {
				className: "text-xs font-semibold text-black/55 dark:text-white/55",
				children: e
			}, e))
		}), /* @__PURE__ */ S("div", {
			className: "flex-1 grid grid-cols-7 grid-rows-6 divide-x divide-y divide-black/10 dark:divide-white/10 select-none min-h-0 border-t border-black/10 dark:border-white/10",
			children: _.map((e, c) => {
				let d = l(e), f = e.getMonth() !== u, p = e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026, m = e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear(), g = a.filter((e) => e.date === d), _ = s(e);
				return /* @__PURE__ */ C("div", {
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
					children: [/* @__PURE__ */ C("div", {
						className: "flex items-start justify-between w-full",
						children: [(() => {
							let n = h(e);
							if (!n) return null;
							let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
							return /* @__PURE__ */ S("span", {
								className: t("text-[10px] font-semibold pl-1 select-none", a ? "text-red-500 font-bold" : "text-black/35 dark:text-white/35 font-normal"),
								children: o
							});
						})(), /* @__PURE__ */ S("span", {
							className: t("text-sm h-6 w-6 rounded-full flex items-center justify-center transition-all", f && (_ ? "text-red-500/40 dark:text-red-400/40 font-bold" : "text-black/25 dark:text-white/25 font-normal"), !f && !p && !m && (_ ? "text-red-500 dark:text-red-400 font-bold" : "text-black/75 dark:text-white/75 font-semibold"), p && "bg-red-500 text-white font-bold shadow-sm", m && "bg-accent-active text-white font-bold shadow-sm"),
							children: e.getDate()
						})]
					}), /* @__PURE__ */ S("div", {
						className: "mt-1 space-y-1 w-full overflow-hidden flex-1 flex flex-col justify-end",
						children: g.map((e) => /* @__PURE__ */ S("button", {
							onClick: (t) => {
								t.stopPropagation(), o(e, t.currentTarget);
							},
							className: "px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate w-full text-left hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer block border-none focus:outline-none",
							style: { backgroundColor: O.find((t) => t.id === e.calendarId)?.color || "#007afe" },
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
function ae({ currentDate: e, selectedDate: t, setCurrentDate: n, setCurrentView: r }) {
	let i = e.getFullYear();
	return /* @__PURE__ */ S("div", {
		className: "grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 h-full min-h-0 flex-1 select-none pb-0",
		children: Array.from({ length: 12 }, (e, t) => new Date(i, t, 1)).map((e, i) => /* @__PURE__ */ C("div", {
			className: "flex flex-col cursor-pointer",
			onClick: () => {
				n(e), r("month");
			},
			children: [/* @__PURE__ */ S("h3", {
				className: "text-xs font-semibold text-red-500 mb-1.5 capitalize px-1",
				children: e.toLocaleDateString("en-US", { month: "long" })
			}), /* @__PURE__ */ S("div", {
				className: "flex-1 min-h-0",
				children: /* @__PURE__ */ S(w, {
					targetDate: e,
					selectedDate: t
				})
			})]
		}, i))
	});
}
//#endregion
//#region src/hooks/useHolidays.ts
function k(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function oe(t) {
	let n = e((e) => e.country) ?? "vn", r = y(n), i = [(/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getFullYear() + 1], a = t ?? i, [o, s] = b(!0), [c, l] = b([]), u = y(/* @__PURE__ */ new Map()), f = g(async (e, t) => {
		s(!0);
		try {
			let n = (await Promise.all(t.map((t) => m(e, t)))).flat();
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
	_(() => {
		f(n, a);
	}, [n, a.join(",")]), _(() => {
		r.current !== n && (d(r.current), r.current = n);
	}, [n]);
	let p = g((e) => u.current.get(k(e)) ?? [], []);
	return {
		loading: o,
		holidays: c,
		getHolidayName: g((e) => {
			let t = p(e);
			return t.length === 0 ? null : (t.find((e) => e.isRed) ?? t[0]).name;
		}, [p]),
		isRedHoliday: g((e) => p(e).some((e) => e.isRed), [p]),
		getHolidaysForDate: p
	};
}
//#endregion
//#region src/components/apps/Calendar.tsx
var A = T.calendars, se = T.events;
function j({ appId: e }) {
	let { t: n, language: u } = c(), [d, f] = b(() => new Date(2026, 6, 14)), [m, h] = b(() => new Date(2026, 6, 14)), [g, T] = b("month"), [E, D] = b(() => A.map((e) => e.id)), [O, k] = b(se), j = y(null), [M, ce] = b(800), [N, le] = b(600), [P, F] = b(!0), I = y(800), L = y(null), [R, z] = b(0), [B, V] = b(!1), [H, U] = b(""), [W, G] = b(null), [K, ue] = b(null), q = (e, t) => {
		if (!j.current) return;
		let n = j.current.getBoundingClientRect(), r = t.getBoundingClientRect(), i = r.right - n.left + 12, a = "left";
		i + 280 > n.width - 12 && (i = r.left - n.left - 280 - 12, a = "right");
		let o = (r.top + r.bottom) / 2 - n.top - 160 / 2;
		o < 12 && (o = 12), o + 160 > n.height - 12 && (o = n.height - 160 - 12), ue({
			top: o,
			left: i,
			arrowSide: a
		}), G(e);
	}, de = () => {
		W && (W.calendarId === "holidays" ? Y("holidays") : k((e) => e.filter((e) => e.id !== W.id)), G(null));
	}, fe = v(() => W ? new Date(W.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "", [W]), J = v(() => W ? A.find((e) => e.id === W.calendarId) : null, [W]);
	_(() => {
		if (!j.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) ce(t.contentRect.width), le(t.contentRect.height);
		});
		return e.observe(j.current), () => e.disconnect();
	}, []), _(() => {
		M < 680 && I.current >= 680 ? F(!1) : M >= 680 && I.current < 680 && F(!0), I.current = M;
	}, [M]);
	let Y = (e) => {
		D((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, X = d.getFullYear(), { holidays: pe, isRedHoliday: Z } = oe(v(() => [
		X - 1,
		X,
		X + 1
	], [X])), me = v(() => pe.map((e) => ({
		id: `holiday-${e.date}`,
		title: e.name,
		date: e.date,
		timeStart: "00:00",
		timeEnd: "23:59",
		calendarId: "holidays"
	})), [pe]), he = v(() => [...O, ...me], [O, me]), Q = v(() => he.filter((e) => E.includes(e.calendarId)), [he, E]), $ = (e) => {
		let t = e === "next" ? 1 : -1, n = new Date(d);
		g === "day" ? n.setDate(n.getDate() + t) : g === "week" ? n.setDate(n.getDate() + t * 7) : g === "month" ? n.setMonth(n.getMonth() + t) : g === "year" && n.setFullYear(n.getFullYear() + t), f(n);
	};
	return /* @__PURE__ */ C("div", {
		ref: j,
		className: "flex h-full bg-white dark:bg-[#1a1b1e] text-black dark:text-white font-sans overflow-hidden relative",
		children: [
			P && /* @__PURE__ */ C("aside", {
				className: "w-56 shrink-0 border-r border-black/10 dark:border-white/10 bg-[#f3f3f3]/95 dark:bg-[#1f2023]/95 p-3 flex flex-col justify-between select-none",
				children: [/* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("div", {
					className: "h-6 flex items-center justify-end mb-4",
					children: /* @__PURE__ */ C("div", {
						className: "flex items-center gap-2 pr-1",
						children: [/* @__PURE__ */ S("button", {
							onClick: () => F(!1),
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ S("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ S("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M4 6h16M4 12h16m-7 6h7"
								})
							})
						}), /* @__PURE__ */ S("button", {
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ S("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ S("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								})
							})
						})]
					})
				}), /* @__PURE__ */ S("div", {
					className: "space-y-4",
					children: ["iCloud", "Other"].map((e) => /* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("p", {
						className: "px-2 text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mb-1",
						children: e
					}), /* @__PURE__ */ S("div", {
						className: "space-y-0.5",
						children: A.filter((t) => t.group === e).map((e) => {
							let n = E.includes(e.id), i = e.id === "reminders";
							return /* @__PURE__ */ C("button", {
								onClick: () => Y(e.id),
								className: t("w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-all focus:outline-none text-left cursor-pointer", i ? "bg-black/[0.04] dark:bg-white/[0.04]" : "hover:bg-black/5 dark:hover:bg-white/5"),
								children: [/* @__PURE__ */ C("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ S("div", {
										className: t("w-3.5 h-3.5 rounded flex items-center justify-center text-white shrink-0 border transition-all", n ? "border-transparent" : "border-black/25 dark:border-white/25 bg-transparent"),
										style: { backgroundColor: n ? e.color : "transparent" },
										children: n && /* @__PURE__ */ S(r, { className: "w-2.5 h-2.5 stroke-[3]" })
									}), /* @__PURE__ */ S("span", {
										className: "truncate",
										style: {
											color: i ? e.color : "inherit",
											fontWeight: i ? 500 : 400
										},
										children: e.name
									})]
								}), e.hasFeed && /* @__PURE__ */ S("svg", {
									className: "w-3.5 h-3.5 opacity-40 shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ S("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M13 10V3L4 14h7v7l9-11h-7z"
									})
								})]
							}, e.id);
						})
					})] }, e))
				})] }), /* @__PURE__ */ C("div", {
					className: "mt-4 pt-4 border-t border-black/5 dark:border-white/5",
					children: [/* @__PURE__ */ C("div", {
						className: "flex items-center justify-between px-2 mb-2",
						children: [/* @__PURE__ */ S("span", {
							className: "text-[11px] font-semibold text-black/60 dark:text-white/60",
							children: d.toLocaleDateString(u === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ C("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ S("button", {
								onClick: () => {
									let e = new Date(d);
									e.setMonth(e.getMonth() - 1), f(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ S(i, { className: "w-3 h-3" })
							}), /* @__PURE__ */ S("button", {
								onClick: () => {
									let e = new Date(d);
									e.setMonth(e.getMonth() + 1), f(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ S(a, { className: "w-3 h-3" })
							})]
						})]
					}), /* @__PURE__ */ S(w, {
						targetDate: d,
						selectedDate: m,
						isRedHoliday: Z,
						onDaySelect: (e) => {
							h(e), f(e);
						}
					})]
				})]
			}),
			/* @__PURE__ */ C("div", {
				className: "flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1b1e]",
				children: [/* @__PURE__ */ C("header", {
					className: "flex shrink-0 items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 select-none",
					children: [
						/* @__PURE__ */ C("div", {
							className: "flex items-center gap-3",
							children: [!P && /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ C("div", {
								className: "flex gap-1.5 pl-1 mr-1",
								children: [
									/* @__PURE__ */ S("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ff5f56]" }),
									/* @__PURE__ */ S("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ S("div", { className: "w-3.5 h-3.5 rounded-full bg-[#27c93f]" })
								]
							}), /* @__PURE__ */ C("div", {
								className: "flex items-center gap-1.5 mr-1",
								children: [/* @__PURE__ */ S("button", {
									onClick: () => F(!0),
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ S("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ S("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M4 6h16M4 12h16m-7 6h7"
										})
									})
								}), /* @__PURE__ */ S("button", {
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ S("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ S("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										})
									})
								})]
							})] }), /* @__PURE__ */ C("div", {
								className: "relative",
								children: [/* @__PURE__ */ S("button", {
									onClick: () => V(!B),
									className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
									children: /* @__PURE__ */ S(o, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
								}), B && /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("div", {
									className: "fixed inset-0 z-40 bg-transparent",
									onClick: () => V(!1)
								}), /* @__PURE__ */ C("div", {
									className: "absolute top-9 left-0 z-50 w-72 bg-white/95 dark:bg-[#2c2d30]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-black dark:text-white",
									children: [
										/* @__PURE__ */ S("div", { className: "absolute -top-1.5 left-2.5 w-3 h-3 bg-white dark:bg-[#2c2d30] rotate-45 border-t border-l border-black/10 dark:border-white/10" }),
										/* @__PURE__ */ C("div", {
											className: "grid grid-cols-2 gap-4 mb-4 relative z-10",
											children: [/* @__PURE__ */ C("button", {
												onClick: () => {
													let e = H.trim() || "New Event", t = {
														id: crypto.randomUUID(),
														title: e,
														date: l(m),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "personal"
													};
													k((e) => [...e, t]), U(""), V(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ S("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ S(ee, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ S("span", {
													className: "text-xs font-semibold",
													children: n.calNewEvent
												})]
											}), /* @__PURE__ */ C("button", {
												onClick: () => {
													let e = H.trim() || "New Reminder", t = {
														id: crypto.randomUUID(),
														title: e,
														date: l(m),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "reminders"
													};
													k((e) => [...e, t]), U(""), V(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ S("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ S(te, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ S("span", {
													className: "text-xs font-semibold",
													children: n.calNewReminder
												})]
											})]
										}),
										/* @__PURE__ */ S("div", { className: "border-t border-black/10 dark:border-white/10 my-3" }),
										/* @__PURE__ */ C("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ S("label", {
												className: "text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider pl-1",
												children: n.calCreateQuickEvent
											}), /* @__PURE__ */ S("input", {
												type: "text",
												value: H,
												onChange: (e) => U(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter" && H.trim()) {
														let e = {
															id: crypto.randomUUID(),
															title: H.trim(),
															date: l(m),
															timeStart: "12:00",
															timeEnd: "13:00",
															calendarId: "personal"
														};
														k((t) => [...t, e]), U(""), V(!1);
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
						/* @__PURE__ */ S("div", {
							className: "bg-black/5 dark:bg-white/10 p-0.5 rounded-full flex items-center shrink-0",
							children: [
								"day",
								"week",
								"month",
								"year"
							].map((e) => /* @__PURE__ */ S("button", {
								onClick: () => {
									T(e), e === "day" && f(new Date(m));
								},
								className: t("px-4 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none cursor-pointer", g === e ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"),
								children: e === "day" ? n.calDay : e === "week" ? n.calWeek : e === "month" ? n.calMonth : n.calYear
							}, e))
						}),
						/* @__PURE__ */ S("button", {
							className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
							children: /* @__PURE__ */ S(s, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
						})
					]
				}), /* @__PURE__ */ C("div", {
					onWheel: (e) => {
						g !== "year" && g !== "month" || (z((t) => {
							let n = t + e.deltaY, r = N / 2 || 250;
							return n > r ? (setTimeout(() => $("next"), 0), 0) : n < -r ? (setTimeout(() => $("prev"), 0), 0) : n;
						}), L.current && clearTimeout(L.current), L.current = setTimeout(() => {
							z(0);
						}, 250));
					},
					className: "flex-1 flex flex-col min-h-0",
					children: [/* @__PURE__ */ C("div", {
						className: "flex shrink-0 items-center justify-between px-6 py-4 select-none",
						children: [/* @__PURE__ */ S("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: g === "year" ? /* @__PURE__ */ C("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ S("span", { children: d.getFullYear() }), d.getFullYear() === 2026 && /* @__PURE__ */ C("div", {
									className: "hidden sm:flex items-center gap-4 text-xs font-normal",
									children: [/* @__PURE__ */ C("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ S("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ S("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: "Bính Ngọ 2026"
										})]
									}), /* @__PURE__ */ C("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ S("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ S("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: n.calLunarFirstDay
										})]
									})]
								})]
							}) : g === "day" ? /* @__PURE__ */ C("div", {
								className: "flex items-baseline gap-2",
								children: [
									/* @__PURE__ */ C("span", { children: [
										m.getDate(),
										" ",
										m.toLocaleDateString(u === "vi" ? "vi-VN" : "en-US", {
											month: "long",
											year: "numeric"
										})
									] }),
									/* @__PURE__ */ S("span", {
										className: "text-sm font-normal text-black/40 dark:text-white/40",
										children: m.toLocaleDateString("en-US", { weekday: "long" })
									}),
									p(m) && /* @__PURE__ */ S("span", {
										className: "text-xs text-red-500 font-semibold border border-red-500/20 px-1.5 py-0.5 rounded bg-red-500/5",
										children: p(m)
									})
								]
							}) : d.toLocaleDateString(u === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ S("div", {
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ C("div", {
								className: "flex items-center gap-0.5 bg-black/5 dark:bg-white/10 p-0.5 rounded-lg border border-black/5 dark:border-white/5",
								children: [
									/* @__PURE__ */ S("button", {
										onClick: () => $("prev"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ S(i, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ S("button", {
										onClick: () => {
											let e = new Date(2026, 6, 14);
											f(e), h(e);
										},
										className: "px-3 py-0.5 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/85 dark:text-white/85 cursor-pointer",
										children: n.calToday
									}),
									/* @__PURE__ */ S("button", {
										onClick: () => $("next"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ S(a, { className: "w-3.5 h-3.5" })
									})
								]
							})
						})]
					}), /* @__PURE__ */ S("div", {
						className: t("flex-1 min-h-0", g === "year" ? "px-6 pb-2" : "px-0", g === "year" || g === "month" ? "overflow-hidden h-full flex flex-col pb-0" : "overflow-y-auto pb-4"),
						children: /* @__PURE__ */ C("div", {
							style: {
								transform: `translateY(${-R * .8}px)`,
								opacity: 1 - Math.abs(R) / (N || 500),
								transition: R === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease" : "none"
							},
							className: "h-full flex flex-col",
							children: [
								g === "day" && /* @__PURE__ */ S(ne, {
									selectedDate: m,
									setSelectedDate: h,
									filteredEvents: Q,
									onEventClick: q
								}),
								g === "week" && /* @__PURE__ */ S(re, {
									currentDate: d,
									setSelectedDate: h,
									setCurrentView: T,
									filteredEvents: Q,
									isRedHoliday: Z,
									onEventClick: q
								}),
								g === "month" && /* @__PURE__ */ S(ie, {
									currentDate: d,
									selectedDate: m,
									setSelectedDate: h,
									setCurrentView: T,
									filteredEvents: Q,
									isRedHoliday: Z,
									onEventClick: q
								}),
								g === "year" && /* @__PURE__ */ S(ae, {
									currentDate: d,
									selectedDate: m,
									setCurrentDate: f,
									setCurrentView: T
								})
							]
						})
					})]
				})]
			}),
			W && K && /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("div", {
				className: "absolute inset-0 z-40 bg-transparent",
				onClick: () => G(null)
			}), /* @__PURE__ */ C("div", {
				className: "absolute z-50 w-[280px] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md text-black dark:text-white border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transition-all duration-150 ease-out",
				style: {
					top: `${K.top}px`,
					left: `${K.left}px`
				},
				children: [
					/* @__PURE__ */ S("div", { className: t("absolute w-0 h-0 border-8 border-transparent", K.arrowSide === "left" && "top-1/2 -translate-y-1/2 -left-[16px] border-r-8 border-r-white/95 dark:border-r-[#1c1c1e]/95", K.arrowSide === "right" && "top-1/2 -translate-y-1/2 -right-[16px] border-l-8 border-l-white/95 dark:border-l-[#1c1c1e]/95") }),
					/* @__PURE__ */ C("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ S("h3", {
							className: "font-bold text-base text-black/90 dark:text-white/95 truncate flex-1",
							children: W.title
						}), J && /* @__PURE__ */ C("div", {
							className: "flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-semibold text-black/70 dark:text-white/90 shrink-0 border border-black/5 dark:border-white/5",
							children: [/* @__PURE__ */ S("span", {
								className: "h-2 w-2 rounded-full shrink-0",
								style: { backgroundColor: J.color }
							}), /* @__PURE__ */ S("span", {
								className: "text-[9px] text-black/40 dark:text-white/50 select-none",
								children: "↕"
							})]
						})]
					}),
					/* @__PURE__ */ C("div", {
						className: "bg-black/[0.03] dark:bg-white/5 rounded-xl p-3 space-y-1 text-xs text-black/80 dark:text-white/90 border border-black/5 dark:border-white/5",
						children: [/* @__PURE__ */ S("p", {
							className: "font-semibold text-black/90 dark:text-white/95",
							children: fe
						}), /* @__PURE__ */ C("div", {
							className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/60",
							children: [/* @__PURE__ */ S("span", { children: W.calendarId === "holidays" ? n.calRepeatsYearly : n.calDoesNotRepeat }), W.calendarId === "holidays" && /* @__PURE__ */ S("span", {
								className: "text-[10px]",
								children: "🔄"
							})]
						})]
					}),
					/* @__PURE__ */ S("div", {
						className: "flex justify-end pt-1",
						children: /* @__PURE__ */ S("button", {
							onClick: de,
							className: "bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/10 dark:hover:bg-white/20 active:scale-95 px-4 py-1.5 rounded-lg text-xs font-semibold text-black/80 dark:text-white/90 transition-all cursor-pointer border border-black/10 dark:border-white/10",
							children: W.calendarId === "holidays" ? n.calUnsubscribe : n.calDelete
						})
					})
				]
			})] })
		]
	});
}
//#endregion
export { j as Calendar };
