import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./createLucideIcon--WjuKCts.js";
import { t as n } from "./check-DoT5IS9-.js";
import { t as r } from "./chevron-left-DtSiqYaQ.js";
import { t as i } from "./chevron-right-BcSxNxws.js";
import { t as a } from "./plus-Dx6tdmvY.js";
import { t as o } from "./search-BKG97C0x.js";
import { t as s } from "./useTranslation-C7Ov8uGR.js";
import { useEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
var h = t("calendar-days", [
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
]), g = t("list-todo", [
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
]), _ = {
	solar: [
		{
			month: 1,
			day: 1,
			name: "Tết Dương lịch",
			isRed: !0
		},
		{
			month: 2,
			day: 3,
			name: "Ngày thành lập Đảng Cộng sản Việt Nam"
		},
		{
			month: 2,
			day: 14,
			name: "Lễ tình nhân (Valentine's Day)"
		},
		{
			month: 2,
			day: 27,
			name: "Ngày Thầy thuốc Việt Nam"
		},
		{
			month: 3,
			day: 8,
			name: "Ngày Quốc tế Phụ nữ (8/3)"
		},
		{
			month: 3,
			day: 26,
			name: "Ngày thành lập Đoàn TNCS Hồ Chí Minh"
		},
		{
			month: 4,
			day: 30,
			name: "Ngày Chiến thắng (30/4)",
			isRed: !0
		},
		{
			month: 5,
			day: 1,
			name: "Ngày Quốc tế Lao động (1/5)",
			isRed: !0
		},
		{
			month: 5,
			day: 7,
			name: "Ngày Chiến thắng Điện Biên Phủ"
		},
		{
			month: 5,
			day: 19,
			name: "Ngày sinh Chủ tịch Hồ Chí Minh"
		},
		{
			month: 6,
			day: 1,
			name: "Ngày Quốc tế Thiếu nhi (1/6)"
		},
		{
			month: 6,
			day: 28,
			name: "Ngày Gia đình Việt Nam"
		},
		{
			month: 7,
			day: 27,
			name: "Ngày Thương binh Liệt sĩ"
		},
		{
			month: 8,
			day: 19,
			name: "Ngày Cách mạng tháng Tám thành công"
		},
		{
			month: 9,
			day: 2,
			name: "Ngày Quốc khánh (2/9)",
			isRed: !0
		},
		{
			month: 9,
			day: 3,
			name: "Ngày Quốc khánh (cộng thêm)",
			isRed: !0
		},
		{
			month: 10,
			day: 10,
			name: "Ngày Giải phóng Thủ đô"
		},
		{
			month: 10,
			day: 20,
			name: "Ngày Phụ nữ Việt Nam (20/10)"
		},
		{
			month: 11,
			day: 20,
			name: "Ngày Nhà giáo Việt Nam (20/11)"
		},
		{
			month: 12,
			day: 22,
			name: "Ngày thành lập Quân đội Nhân dân Việt Nam"
		},
		{
			month: 12,
			day: 24,
			name: "Lễ Giáng sinh (Christmas Eve)"
		},
		{
			month: 12,
			day: 25,
			name: "Lễ Giáng sinh (Christmas Day)"
		}
	],
	lunar: [
		{
			month: 1,
			day: 1,
			name: "Tết Nguyên Đán (Mùng 1)",
			isRed: !0
		},
		{
			month: 1,
			day: 2,
			name: "Tết Nguyên Đán (Mùng 2)",
			isRed: !0
		},
		{
			month: 1,
			day: 3,
			name: "Tết Nguyên Đán (Mùng 3)",
			isRed: !0
		},
		{
			month: 1,
			day: 4,
			name: "Tết Nguyên Đán (Mùng 4)",
			isRed: !0
		},
		{
			month: 1,
			day: 5,
			name: "Tết Nguyên Đán (Mùng 5)",
			isRed: !0
		},
		{
			month: 1,
			day: 15,
			name: "Tết Thượng Nguyên (Rằm tháng Giêng)"
		},
		{
			month: 3,
			day: 3,
			name: "Tết Hàn Thực (3/3)"
		},
		{
			month: 3,
			day: 10,
			name: "Giỗ tổ Hùng Vương (10/3)",
			isRed: !0
		},
		{
			month: 5,
			day: 5,
			name: "Tết Đoan Ngọ (5/5)"
		},
		{
			month: 7,
			day: 15,
			name: "Lễ Vu Lan (Rằm tháng Bảy)"
		},
		{
			month: 8,
			day: 15,
			name: "Tết Trung Thu (Rằm tháng Tám)"
		},
		{
			month: 12,
			day: 23,
			name: "Tiễn Táo Quân chầu trời (23/12)"
		}
	]
}, v = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, y = [
	4639072,
	3070292,
	5559456,
	4119120,
	2782546,
	5133984,
	3712935,
	6202832,
	4887216,
	3320501,
	5810512,
	4371616,
	2931364,
	5287248,
	3954137,
	6441888,
	5023152,
	3625334,
	6050416,
	4614448,
	3176756,
	5532320,
	4107600,
	2775890,
	5262176,
	3712742,
	6202592,
	4772448,
	3336805,
	5690656,
	4250272,
	2971299,
	5396176,
	3951355,
	6441424,
	5022928,
	3657910,
	5943888,
	4502816,
	3071269,
	5551520,
	4085200,
	2774450,
	5261744,
	3843447,
	6202544,
	4762192,
	3387989,
	5795104,
	4238688,
	2968419,
	5395312,
	4082152,
	6343024,
	5002416,
	3631270,
	5954128,
	4479648,
	3122852,
	5548752,
	4215520,
	2675427,
	5163344,
	3724631,
	6214816,
	4643152,
	3300693,
	5789344,
	4368080,
	2905556,
	5395120,
	3975608,
	6465840,
	4895888,
	3454630,
	5942608,
	4609440,
	3058532,
	5547376,
	4215472,
	2797939,
	5138736,
	3697463,
	6187680,
	4762960,
	3353301,
	5778272,
	4367728,
	3035876,
	5296480,
	3860824,
	6346016,
	4905616,
	3496614,
	5920464,
	4598496,
	3189204,
	5546704,
	4116816,
	2681170
], b = [
	3951576,
	6441696,
	5023088,
	3691733,
	6083168,
	4512080,
	3233108,
	5658272,
	4233936,
	2774482,
	5262048,
	3843510,
	6333648,
	4772432,
	3396181,
	5813568,
	4380320,
	2928034,
	5412272,
	4147575,
	6572400,
	5022896,
	3585205,
	6056528,
	4615488,
	3124052,
	5647200,
	4232560,
	2904818,
	5261680,
	3827046,
	6214816,
	4778576,
	3369621,
	5790416,
	4467552,
	3114723,
	5411552,
	4049111,
	6474064,
	5035168,
	3528870,
	5944656,
	4609696,
	3253684,
	5645776,
	4231888,
	2806450,
	5286224,
	3716439,
	6188192,
	4765008,
	3494741,
	5787040,
	4367792,
	3097971,
	5526192,
	3975592,
	6351184,
	5008032,
	3583654,
	5942096,
	4606816,
	3189476,
	5678448,
	4215392,
	2683491,
	5167424,
	3726151,
	6084256,
	4757200,
	3427797,
	5917392,
	4367568,
	2938036,
	5419600,
	3986776,
	6337856,
	4896160,
	3626406,
	6067632,
	4606384,
	3189108,
	5678256,
	4237904,
	2730578,
	5139744,
	3779911,
	6204256,
	4756336,
	3427061,
	5917040,
	4482224,
	2913443,
	5302864,
	4024920,
	6444704,
	4893392,
	3577557,
	6066912
], x = [
	"Giáp",
	"Ất",
	"Bính",
	"Đinh",
	"Mậu",
	"Kỷ",
	"Canh",
	"Tân",
	"Nhâm",
	"Quý"
], S = [
	"Tý",
	"Sửu",
	"Dần",
	"Mão",
	"Thìn",
	"Tỵ",
	"Ngọ",
	"Mùi",
	"Thân",
	"Dậu",
	"Tuất",
	"Hợi"
], C = class {
	constructor(e, t, n, r, i) {
		this.day = e, this.month = t, this.year = n, this.leap = r, this.jd = i;
	}
};
function w(e) {
	return Math.floor(e);
}
function T(e, t, n) {
	let r = w((14 - t) / 12), i = n + 4800 - r;
	return e + w((153 * (t + 12 * r - 3) + 2) / 5) + 365 * i + w(i / 4) - w(i / 100) + w(i / 400) - 32045;
}
function E(e, t) {
	let n = [], r = [29, 30], i = Array(12), a = t >> 17, o = t & 15, s = r[t >> 16 & 1], c = T(1, 1, e) + a, l = t >> 4;
	for (let e = 0; e < 12; e++) i[12 - e - 1] = r[l & 1], l >>= 1;
	if (o === 0) for (let t = 1; t <= 12; t++) n.push(new C(1, t, e, 0, c)), c += i[t - 1];
	else {
		for (let t = 1; t <= o; t++) n.push(new C(1, t, e, 0, c)), c += i[t - 1];
		n.push(new C(1, o, e, 1, c)), c += s;
		for (let t = o + 1; t <= 12; t++) n.push(new C(1, t, e, 0, c)), c += i[t - 1];
	}
	return n;
}
function D(e) {
	let t = 0;
	if (e < 1900) return [];
	if (e < 2e3) t = y[e - 1900];
	else if (e < 2100) t = b[e - 2e3];
	else return [];
	return E(e, t);
}
function O(e, t) {
	if (t.length === 0 || t[0].jd > e) return new C(0, 0, 0, 0, e);
	let n = t.length - 1;
	for (; e < t[n].jd;) n--;
	let r = e - t[n].jd;
	return new C(t[n].day + r, t[n].month, t[n].year, t[n].leap, e);
}
function k(e, t, n) {
	if (n < 1900 || n >= 2100) return new C(0, 0, 0, 0, 0);
	let r = D(n), i = T(e, t, n);
	return r.length > 0 && i < r[0].jd && (r = D(n - 1)), O(i, r);
}
function A(e) {
	let t = (e + 6) % 10, n = (e + 8) % 12;
	return `${x[t]} ${S[n]}`;
}
var j = (e) => {
	let t = k(e.getDate(), e.getMonth() + 1, e.getFullYear());
	if (t.day === 0) return "";
	if (t.day === 1) {
		let e = A(t.year);
		return `1/${t.month} năm ${e}`;
	}
	return `${t.day}/${t.month}`;
}, M = (e) => k(e.getDate(), e.getMonth() + 1, e.getFullYear()).day === 1, N = (e) => {
	let t = k(e.getDate(), e.getMonth() + 1, e.getFullYear());
	if (t.day === 0) return "";
	let n = A(t.year);
	return `${t.day}/${t.month} năm ${n}`;
}, P = _, F = (e) => {
	let t = e.getMonth() + 1, n = e.getDate(), r = P.solar.find((e) => e.month === t && e.day === n);
	if (r) return r.name;
	let i = k(n, t, e.getFullYear());
	if (i.day !== 0) {
		let e = P.lunar.find((e) => e.month === i.month && e.day === i.day);
		if (e) return e.name;
	}
	return null;
}, I = (e) => {
	let t = e.getMonth() + 1, n = e.getDate(), r = P.solar.find((e) => e.month === t && e.day === n);
	if (r && r.isRed) return !0;
	let i = k(n, t, e.getFullYear());
	if (i.day !== 0) {
		let e = P.lunar.find((e) => e.month === i.month && e.day === i.day);
		if (e && e.isRed) return !0;
	}
	return !1;
};
function L(e) {
	let t = [], n = new Date(e, 0, 1), r = new Date(e, 11, 31);
	for (let i = new Date(n); i <= r; i.setDate(i.getDate() + 1)) {
		let n = F(i);
		n && t.push({
			id: `holiday-${e}-${i.getMonth() + 1}-${i.getDate()}`,
			title: n,
			date: v(i),
			timeStart: "00:00",
			timeEnd: "23:59",
			calendarId: "holidays"
		});
	}
	return t;
}
//#endregion
//#region src/components/apps/calendar/MiniCalendar.tsx
function R({ targetDate: t, selectedDate: n, onDaySelect: r }) {
	let i = t.getFullYear(), a = t.getMonth(), o = new Date(i, a, 1).getDay(), s = o === 0 ? 6 : o - 1, c = new Date(i, a + 1, 0).getDate(), l = new Date(i, a, 0).getDate(), u = [];
	for (let e = s - 1; e >= 0; e--) u.push(new Date(i, a - 1, l - e));
	for (let e = 1; e <= c; e++) u.push(new Date(i, a, e));
	let d = 42 - u.length;
	for (let e = 1; e <= d; e++) u.push(new Date(i, a + 1, e));
	return /* @__PURE__ */ m("div", {
		className: "text-[10px] sm:text-xs",
		children: [/* @__PURE__ */ p("div", {
			className: "grid grid-cols-7 text-center font-medium text-black/30 dark:text-white/30 mb-1",
			children: [
				"M",
				"T",
				"W",
				"T",
				"F",
				"S",
				"S"
			].map((e, t) => /* @__PURE__ */ p("div", {
				className: "h-5 flex items-center justify-center",
				children: e
			}, t))
		}), /* @__PURE__ */ p("div", {
			className: "grid grid-cols-7 text-center",
			children: u.map((t, i) => {
				let o = t.getMonth() !== a, s = t.getDate() === 14 && t.getMonth() === 6 && t.getFullYear() === 2026, c = t.getDate() === n.getDate() && t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), l = M(t), u = I(t);
				return /* @__PURE__ */ m("button", {
					onClick: (e) => {
						e.stopPropagation(), r?.(t);
					},
					className: e("h-5 w-5 mx-auto rounded-full flex items-center justify-center transition-all focus:outline-none relative text-[9px] sm:text-[10px] cursor-pointer", o && (u ? "text-red-500/40 dark:text-red-400/40 font-semibold" : "text-black/25 dark:text-white/25 font-normal"), !o && !s && !c && (u ? "text-red-500 dark:text-red-400 font-semibold" : "text-black/75 dark:text-white/75 font-normal"), s && !c && "bg-red-500 text-white font-bold", c && "bg-accent-active text-white shadow-sm font-semibold"),
					children: [/* @__PURE__ */ p("span", {
						className: s || c ? "relative z-10" : "",
						children: t.getDate()
					}), l && /* @__PURE__ */ p("span", { className: e("absolute bottom-0.5 left-1 right-1 h-0.5 rounded-full z-20", s || c ? "bg-white" : "bg-red-500") })]
				}, i);
			})
		})]
	});
}
var z = {
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
}, B = z.calendars;
function ee({ selectedDate: e, setSelectedDate: t, filteredEvents: n, onEventClick: r }) {
	let i = v(e), a = n.filter((e) => e.date === i), o = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ m("div", {
		className: "grid grid-cols-[1fr_240px] gap-6 h-full min-h-[500px]",
		children: [/* @__PURE__ */ m("div", {
			className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 relative overflow-y-auto p-4 select-none",
			children: [/* @__PURE__ */ p("div", {
				className: "text-xs font-semibold text-black/40 dark:text-white/40 pb-2 border-b border-black/5 dark:border-white/5 mb-4 uppercase tracking-wider",
				children: "All-day"
			}), /* @__PURE__ */ m("div", {
				className: "relative pt-4",
				style: { height: "1000px" },
				children: [
					e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026 && /* @__PURE__ */ m("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "426px" },
						children: [
							/* @__PURE__ */ p("span", {
								className: "text-[10px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0",
								children: "10:24"
							}),
							/* @__PURE__ */ p("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ p("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					o.map((e, t) => /* @__PURE__ */ m("div", {
						className: "absolute left-0 right-0 flex gap-4 items-center",
						style: {
							top: `${t * 40}px`,
							height: "20px"
						},
						children: [/* @__PURE__ */ m("span", {
							className: "text-[11px] font-semibold text-black/35 dark:text-white/35 w-10 text-right",
							children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
						}), /* @__PURE__ */ p("div", { className: "flex-1 h-px bg-black/5 dark:bg-white/5" })]
					}, e)),
					a.map((e) => {
						let t = B.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, i = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, a = n * 40 + 10, o = Math.max(24, (i - n) * 40);
						return /* @__PURE__ */ m("button", {
							onClick: (t) => {
								t.stopPropagation(), r(e, t.currentTarget);
							},
							className: "absolute left-16 right-4 rounded-lg p-2 text-xs font-semibold text-white shadow-sm border border-white/10 shrink-0 text-left hover:scale-[1.01] active:scale-95 transition-all cursor-pointer focus:outline-none",
							style: {
								top: `${a}px`,
								backgroundColor: t?.color || "#007afe",
								height: `${o}px`
							},
							children: [/* @__PURE__ */ p("p", {
								className: "font-semibold truncate",
								children: e.title
							}), /* @__PURE__ */ m("p", {
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
		}), /* @__PURE__ */ m("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ p("div", {
				className: "border border-black/10 dark:border-white/10 rounded-xl p-4 bg-neutral-50 dark:bg-[#1c1d20]/50 shrink-0",
				children: /* @__PURE__ */ p(R, {
					targetDate: e,
					selectedDate: e,
					onDaySelect: t
				})
			}), /* @__PURE__ */ p("div", {
				className: "flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col items-center justify-center text-center",
				children: /* @__PURE__ */ p("p", {
					className: "text-sm font-semibold text-black/35 dark:text-white/35 font-sans",
					children: a.length === 0 ? "No Event Selected" : `${a.length} Events Scheduled`
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/WeekView.tsx
var V = z.calendars;
function te({ currentDate: t, setSelectedDate: n, setCurrentView: r, filteredEvents: i, onEventClick: a }) {
	let o = new Date(t), s = o.getDay(), c = o.getDate() - s + (s === 0 ? -6 : 1);
	o.setDate(c);
	let l = Array.from({ length: 7 }, (e, t) => {
		let n = new Date(o);
		return n.setDate(o.getDate() + t), n;
	}), u = Array.from({ length: 25 }, (e, t) => t);
	return /* @__PURE__ */ m("div", {
		className: "border border-black/10 dark:border-white/10 rounded-xl bg-neutral-50 dark:bg-[#1c1d20]/50 flex flex-col overflow-hidden h-full min-h-[500px]",
		children: [/* @__PURE__ */ m("div", {
			className: "grid grid-cols-[60px_1fr] border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#1a1b1e] shrink-0",
			children: [/* @__PURE__ */ p("div", { className: "border-r border-black/10 dark:border-white/10" }), /* @__PURE__ */ p("div", {
				className: "grid grid-cols-7 text-center py-2.5",
				children: l.map((t, i) => {
					let a = t.getDate() === 14 && t.getMonth() === 6 && t.getFullYear() === 2026, o = I(t);
					return /* @__PURE__ */ m("div", {
						className: "flex flex-col items-center gap-0.5 select-none",
						children: [
							/* @__PURE__ */ p("span", {
								className: "text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase",
								children: t.toLocaleDateString("en-US", { weekday: "short" })
							}),
							/* @__PURE__ */ p("button", {
								onClick: () => {
									n(t), r("day");
								},
								className: e("text-sm font-semibold h-7 w-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer", a && "bg-red-500 text-white font-bold", !a && o && "text-red-500 dark:text-red-400 font-bold"),
								children: t.getDate()
							}),
							(() => {
								let n = j(t);
								if (!n) return null;
								let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
								return /* @__PURE__ */ p("span", {
									className: e("text-[9px] font-semibold select-none", a ? "text-red-500 font-bold underline decoration-red-500/40" : "text-black/35 dark:text-white/35 font-normal"),
									children: o
								});
							})()
						]
					}, i);
				})
			})]
		}), /* @__PURE__ */ m("div", {
			className: "flex-1 overflow-y-auto relative grid grid-cols-[60px_1fr] pt-4",
			style: { minHeight: "500px" },
			children: [/* @__PURE__ */ p("div", {
				className: "border-r border-black/10 dark:border-white/10 text-right pr-3 relative",
				style: { height: "1200px" },
				children: u.map((e, t) => /* @__PURE__ */ m("div", {
					className: "absolute right-3 text-[10px] font-semibold text-black/35 dark:text-white/35",
					style: { top: `${t * 48}px` },
					children: [String(e === 24 ? 0 : e).padStart(2, "0"), ":00"]
				}, e))
			}), /* @__PURE__ */ m("div", {
				className: "grid grid-cols-7 relative",
				style: { height: "1200px" },
				children: [
					Array.from({ length: 6 }).map((e, t) => /* @__PURE__ */ p("div", {
						className: "absolute h-full w-px bg-black/5 dark:bg-white/5",
						style: { left: `${(t + 1) * (100 / 7)}%` }
					}, t)),
					u.map((e, t) => /* @__PURE__ */ p("div", {
						className: "absolute w-full h-px bg-black/5 dark:bg-white/5",
						style: { top: `${t * 48 + 6}px` }
					}, t)),
					l.some((e) => e.getDate() === 14 && e.getMonth() === 6 && e.getFullYear() === 2026) && /* @__PURE__ */ m("div", {
						className: "absolute left-0 right-0 z-10 flex items-center gap-1.5",
						style: { top: "506px" },
						children: [
							/* @__PURE__ */ p("span", {
								className: "text-[9px] font-bold text-red-500 bg-red-100 dark:bg-red-950 px-1 rounded shrink-0 -ml-12 z-20",
								children: "10:25"
							}),
							/* @__PURE__ */ p("div", { className: "flex-1 h-0.5 bg-red-500" }),
							/* @__PURE__ */ p("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shrink-0" })
						]
					}),
					l.map((e, t) => {
						let n = v(e);
						return /* @__PURE__ */ p("div", {
							className: "relative h-full",
							children: i.filter((e) => e.date === n).map((e) => {
								let t = V.find((t) => t.id === e.calendarId), n = parseInt(e.timeStart.split(":")[0]) + parseInt(e.timeStart.split(":")[1]) / 60, r = parseInt(e.timeEnd.split(":")[0]) + parseInt(e.timeEnd.split(":")[1]) / 60, i = n * 48 + 6, o = Math.max(20, (r - n) * 48);
								return /* @__PURE__ */ m("button", {
									onClick: (t) => {
										t.stopPropagation(), a(e, t.currentTarget);
									},
									className: "absolute left-1 right-1 rounded p-1 text-[9px] font-semibold text-white shadow-sm border border-white/10 truncate hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer text-left block focus:outline-none",
									style: {
										top: `${i}px`,
										backgroundColor: t?.color || "#007afe",
										height: `${o}px`
									},
									children: [/* @__PURE__ */ p("p", {
										className: "truncate",
										children: e.title
									}), /* @__PURE__ */ p("p", {
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
var H = z.calendars;
function ne({ currentDate: t, selectedDate: n, setSelectedDate: r, setCurrentView: i, filteredEvents: a, onEventClick: o }) {
	let s = t.getFullYear(), c = t.getMonth(), l = new Date(s, c, 1).getDay(), u = l === 0 ? 6 : l - 1, d = new Date(s, c + 1, 0).getDate(), f = new Date(s, c, 0).getDate(), h = [];
	for (let e = u - 1; e >= 0; e--) h.push(new Date(s, c - 1, f - e));
	for (let e = 1; e <= d; e++) h.push(new Date(s, c, e));
	let g = 42 - h.length;
	for (let e = 1; e <= g; e++) h.push(new Date(s, c + 1, e));
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col h-full min-h-0 bg-transparent",
		children: [/* @__PURE__ */ p("div", {
			className: "grid grid-cols-7 text-center border-b border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1c1d20]/50 py-2 select-none shrink-0",
			children: [
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun"
			].map((e) => /* @__PURE__ */ p("span", {
				className: "text-xs font-semibold text-black/55 dark:text-white/55",
				children: e
			}, e))
		}), /* @__PURE__ */ p("div", {
			className: "flex-1 grid grid-cols-7 grid-rows-6 divide-x divide-y divide-black/10 dark:divide-white/10 select-none min-h-0 border-t border-black/10 dark:border-white/10",
			children: h.map((t, s) => {
				let l = v(t), u = t.getMonth() !== c, d = t.getDate() === 14 && t.getMonth() === 6 && t.getFullYear() === 2026, f = t.getDate() === n.getDate() && t.getMonth() === n.getMonth() && t.getFullYear() === n.getFullYear(), h = a.filter((e) => e.date === l), g = I(t);
				return /* @__PURE__ */ m("button", {
					onClick: () => {
						r(t);
					},
					onDoubleClick: () => {
						r(t), i("day");
					},
					className: e("p-2 text-left flex flex-col justify-between hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus:outline-none h-full min-h-0 cursor-pointer", f && "bg-black/[0.01] dark:bg-white/[0.01]"),
					children: [/* @__PURE__ */ m("div", {
						className: "flex items-start justify-between w-full",
						children: [(() => {
							let n = j(t);
							if (!n) return null;
							let r = n.startsWith("1/"), i = n.startsWith("15/"), a = r || i, o = r ? n : n.split("/")[0];
							return /* @__PURE__ */ p("span", {
								className: e("text-[10px] font-semibold pl-1 select-none", a ? "text-red-500 font-bold" : "text-black/35 dark:text-white/35 font-normal"),
								children: o
							});
						})(), /* @__PURE__ */ p("span", {
							className: e("text-sm h-6 w-6 rounded-full flex items-center justify-center transition-all", u && (g ? "text-red-500/40 dark:text-red-400/40 font-bold" : "text-black/25 dark:text-white/25 font-normal"), !u && !d && !f && (g ? "text-red-500 dark:text-red-400 font-bold" : "text-black/75 dark:text-white/75 font-semibold"), d && "bg-red-500 text-white font-bold shadow-sm", f && "bg-accent-active text-white font-bold shadow-sm"),
							children: t.getDate()
						})]
					}), /* @__PURE__ */ p("div", {
						className: "mt-1 space-y-1 w-full overflow-hidden flex-1 flex flex-col justify-end",
						children: h.map((e) => /* @__PURE__ */ p("button", {
							onClick: (t) => {
								t.stopPropagation(), o(e, t.currentTarget);
							},
							className: "px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate w-full text-left hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer block border-none focus:outline-none",
							style: { backgroundColor: H.find((t) => t.id === e.calendarId)?.color || "#007afe" },
							children: e.title
						}, e.id))
					})]
				}, s);
			})
		})]
	});
}
//#endregion
//#region src/components/apps/calendar/YearView.tsx
function re({ currentDate: e, selectedDate: t, setCurrentDate: n, setCurrentView: r }) {
	let i = e.getFullYear();
	return /* @__PURE__ */ p("div", {
		className: "grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-4 h-full min-h-0 flex-1 select-none pb-0",
		children: Array.from({ length: 12 }, (e, t) => new Date(i, t, 1)).map((e, i) => /* @__PURE__ */ m("div", {
			className: "flex flex-col cursor-pointer",
			onClick: () => {
				n(e), r("month");
			},
			children: [/* @__PURE__ */ p("h3", {
				className: "text-xs font-semibold text-red-500 mb-1.5 capitalize px-1",
				children: e.toLocaleDateString("en-US", { month: "long" })
			}), /* @__PURE__ */ p("div", {
				className: "flex-1 min-h-0",
				children: /* @__PURE__ */ p(R, {
					targetDate: e,
					selectedDate: t
				})
			})]
		}, i))
	});
}
//#endregion
//#region src/components/apps/Calendar.tsx
var U = z.calendars, ie = z.events;
function W({ appId: t }) {
	let { language: _ } = s(), [y, b] = d(() => new Date(2026, 6, 14)), [x, S] = d(() => new Date(2026, 6, 14)), [C, w] = d("month"), [T, E] = d(() => U.map((e) => e.id)), [D, O] = d(ie), k = u(null), [A, j] = d(800), [M, P] = d(600), [F, I] = d(!0), z = u(800), B = u(null), [V, H] = d(0), [W, G] = d(!1), [K, q] = d(""), [J, Y] = d(null), [X, ae] = d(null), Z = (e, t) => {
		if (!k.current) return;
		let n = k.current.getBoundingClientRect(), r = t.getBoundingClientRect(), i = r.right - n.left + 12, a = "left";
		i + 280 > n.width - 12 && (i = r.left - n.left - 280 - 12, a = "right");
		let o = (r.top + r.bottom) / 2 - n.top - 160 / 2;
		o < 12 && (o = 12), o + 160 > n.height - 12 && (o = n.height - 160 - 12), ae({
			top: o,
			left: i,
			arrowSide: a
		}), Y(e);
	}, oe = () => {
		J && (J.calendarId === "holidays" ? le("holidays") : O((e) => e.filter((e) => e.id !== J.id)), Y(null));
	}, se = l(() => J ? new Date(J.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "", [J]), ce = l(() => J ? U.find((e) => e.id === J.calendarId) : null, [J]);
	c(() => {
		if (!k.current) return;
		let e = new ResizeObserver((e) => {
			for (let t of e) j(t.contentRect.width), P(t.contentRect.height);
		});
		return e.observe(k.current), () => e.disconnect();
	}, []), c(() => {
		A < 680 && z.current >= 680 ? I(!1) : A >= 680 && z.current < 680 && I(!0), z.current = A;
	}, [A]);
	let le = (e) => {
		E((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	}, ue = l(() => {
		let e = y.getFullYear();
		return [
			...L(e - 1),
			...L(e),
			...L(e + 1)
		];
	}, [y]), de = l(() => [...D, ...ue], [D, ue]), Q = l(() => de.filter((e) => T.includes(e.calendarId)), [de, T]), $ = (e) => {
		let t = e === "next" ? 1 : -1, n = new Date(y);
		C === "day" ? n.setDate(n.getDate() + t) : C === "week" ? n.setDate(n.getDate() + t * 7) : C === "month" ? n.setMonth(n.getMonth() + t) : C === "year" && n.setFullYear(n.getFullYear() + t), b(n);
	};
	return /* @__PURE__ */ m("div", {
		ref: k,
		className: "flex h-full bg-white dark:bg-[#1a1b1e] text-black dark:text-white font-sans overflow-hidden relative",
		children: [
			F && /* @__PURE__ */ m("aside", {
				className: "w-56 shrink-0 border-r border-black/10 dark:border-white/10 bg-[#f3f3f3]/95 dark:bg-[#1f2023]/95 p-3 flex flex-col justify-between select-none",
				children: [/* @__PURE__ */ m("div", { children: [/* @__PURE__ */ p("div", {
					className: "h-6 flex items-center justify-end mb-4",
					children: /* @__PURE__ */ m("div", {
						className: "flex items-center gap-2 pr-1",
						children: [/* @__PURE__ */ p("button", {
							onClick: () => I(!1),
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ p("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ p("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M4 6h16M4 12h16m-7 6h7"
								})
							})
						}), /* @__PURE__ */ p("button", {
							className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
							children: /* @__PURE__ */ p("svg", {
								className: "w-4 h-4",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ p("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								})
							})
						})]
					})
				}), /* @__PURE__ */ p("div", {
					className: "space-y-4",
					children: ["iCloud", "Other"].map((t) => /* @__PURE__ */ m("div", { children: [/* @__PURE__ */ p("p", {
						className: "px-2 text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider mb-1",
						children: t
					}), /* @__PURE__ */ p("div", {
						className: "space-y-0.5",
						children: U.filter((e) => e.group === t).map((t) => {
							let r = T.includes(t.id), i = t.id === "reminders";
							return /* @__PURE__ */ m("button", {
								onClick: () => le(t.id),
								className: e("w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-all focus:outline-none text-left cursor-pointer", i ? "bg-black/[0.04] dark:bg-white/[0.04]" : "hover:bg-black/5 dark:hover:bg-white/5"),
								children: [/* @__PURE__ */ m("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ p("div", {
										className: e("w-3.5 h-3.5 rounded flex items-center justify-center text-white shrink-0 border transition-all", r ? "border-transparent" : "border-black/25 dark:border-white/25 bg-transparent"),
										style: { backgroundColor: r ? t.color : "transparent" },
										children: r && /* @__PURE__ */ p(n, { className: "w-2.5 h-2.5 stroke-[3]" })
									}), /* @__PURE__ */ p("span", {
										className: "truncate",
										style: {
											color: i ? t.color : "inherit",
											fontWeight: i ? 500 : 400
										},
										children: t.name
									})]
								}), t.hasFeed && /* @__PURE__ */ p("svg", {
									className: "w-3.5 h-3.5 opacity-40 shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									children: /* @__PURE__ */ p("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M13 10V3L4 14h7v7l9-11h-7z"
									})
								})]
							}, t.id);
						})
					})] }, t))
				})] }), /* @__PURE__ */ m("div", {
					className: "mt-4 pt-4 border-t border-black/5 dark:border-white/5",
					children: [/* @__PURE__ */ m("div", {
						className: "flex items-center justify-between px-2 mb-2",
						children: [/* @__PURE__ */ p("span", {
							className: "text-[11px] font-semibold text-black/60 dark:text-white/60",
							children: y.toLocaleDateString(_ === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ m("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ p("button", {
								onClick: () => {
									let e = new Date(y);
									e.setMonth(e.getMonth() - 1), b(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ p(r, { className: "w-3 h-3" })
							}), /* @__PURE__ */ p("button", {
								onClick: () => {
									let e = new Date(y);
									e.setMonth(e.getMonth() + 1), b(e);
								},
								className: "p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer",
								children: /* @__PURE__ */ p(i, { className: "w-3 h-3" })
							})]
						})]
					}), /* @__PURE__ */ p(R, {
						targetDate: y,
						selectedDate: x,
						onDaySelect: (e) => {
							S(e), b(e);
						}
					})]
				})]
			}),
			/* @__PURE__ */ m("div", {
				className: "flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a1b1e]",
				children: [/* @__PURE__ */ m("header", {
					className: "flex shrink-0 items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 select-none",
					children: [
						/* @__PURE__ */ m("div", {
							className: "flex items-center gap-3",
							children: [!F && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ m("div", {
								className: "flex gap-1.5 pl-1 mr-1",
								children: [
									/* @__PURE__ */ p("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ff5f56]" }),
									/* @__PURE__ */ p("div", { className: "w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ p("div", { className: "w-3.5 h-3.5 rounded-full bg-[#27c93f]" })
								]
							}), /* @__PURE__ */ m("div", {
								className: "flex items-center gap-1.5 mr-1",
								children: [/* @__PURE__ */ p("button", {
									onClick: () => I(!0),
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ p("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ p("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M4 6h16M4 12h16m-7 6h7"
										})
									})
								}), /* @__PURE__ */ p("button", {
									className: "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-black/50 dark:text-white/50 cursor-pointer",
									children: /* @__PURE__ */ p("svg", {
										className: "w-4 h-4",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor",
										strokeWidth: 2,
										children: /* @__PURE__ */ p("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										})
									})
								})]
							})] }), /* @__PURE__ */ m("div", {
								className: "relative",
								children: [/* @__PURE__ */ p("button", {
									onClick: () => G(!W),
									className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
									children: /* @__PURE__ */ p(a, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
								}), W && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", {
									className: "fixed inset-0 z-40 bg-transparent",
									onClick: () => G(!1)
								}), /* @__PURE__ */ m("div", {
									className: "absolute top-9 left-0 z-50 w-72 bg-white/95 dark:bg-[#2c2d30]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-black dark:text-white",
									children: [
										/* @__PURE__ */ p("div", { className: "absolute -top-1.5 left-2.5 w-3 h-3 bg-white dark:bg-[#2c2d30] rotate-45 border-t border-l border-black/10 dark:border-white/10" }),
										/* @__PURE__ */ m("div", {
											className: "grid grid-cols-2 gap-4 mb-4 relative z-10",
											children: [/* @__PURE__ */ m("button", {
												onClick: () => {
													let e = K.trim() || "New Event", t = {
														id: crypto.randomUUID(),
														title: e,
														date: v(x),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "personal"
													};
													O((e) => [...e, t]), q(""), G(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ p("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ p(h, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ p("span", {
													className: "text-xs font-semibold",
													children: "New Event"
												})]
											}), /* @__PURE__ */ m("button", {
												onClick: () => {
													let e = K.trim() || "New Reminder", t = {
														id: crypto.randomUUID(),
														title: e,
														date: v(x),
														timeStart: "12:00",
														timeEnd: "13:00",
														calendarId: "reminders"
													};
													O((e) => [...e, t]), q(""), G(!1);
												},
												className: "flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer",
												children: [/* @__PURE__ */ p("div", {
													className: "w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center",
													children: /* @__PURE__ */ p(g, { className: "w-5 h-5 text-black/70 dark:text-white/70" })
												}), /* @__PURE__ */ p("span", {
													className: "text-xs font-semibold",
													children: "New Reminder"
												})]
											})]
										}),
										/* @__PURE__ */ p("div", { className: "border-t border-black/10 dark:border-white/10 my-3" }),
										/* @__PURE__ */ m("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ p("label", {
												className: "text-[11px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider pl-1",
												children: "Create Quick Event"
											}), /* @__PURE__ */ p("input", {
												type: "text",
												value: K,
												onChange: (e) => q(e.target.value),
												onKeyDown: (e) => {
													if (e.key === "Enter" && K.trim()) {
														let e = {
															id: crypto.randomUUID(),
															title: K.trim(),
															date: v(x),
															timeStart: "12:00",
															timeEnd: "13:00",
															calendarId: "personal"
														};
														O((t) => [...t, e]), q(""), G(!1);
													}
												},
												placeholder: "Movie at 7pm on Friday",
												className: "w-full px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-xs focus:outline-none caret-[#ff3b30] text-black dark:text-white",
												autoFocus: !0
											})]
										})
									]
								})] })]
							})]
						}),
						/* @__PURE__ */ p("div", {
							className: "bg-black/5 dark:bg-white/10 p-0.5 rounded-full flex items-center shrink-0",
							children: [
								"day",
								"week",
								"month",
								"year"
							].map((t) => /* @__PURE__ */ p("button", {
								onClick: () => {
									w(t), t === "day" && b(new Date(x));
								},
								className: e("px-4 py-1 text-xs font-semibold rounded-full transition-all focus:outline-none capitalize cursor-pointer", C === t ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"),
								children: t
							}, t))
						}),
						/* @__PURE__ */ p("button", {
							className: "w-7 h-7 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 flex items-center justify-center transition-colors focus:outline-none cursor-pointer",
							children: /* @__PURE__ */ p(o, { className: "w-4 h-4 text-black/75 dark:text-white/75" })
						})
					]
				}), /* @__PURE__ */ m("div", {
					onWheel: (e) => {
						C !== "year" && C !== "month" || (H((t) => {
							let n = t + e.deltaY, r = M / 2 || 250;
							return n > r ? (setTimeout(() => $("next"), 0), 0) : n < -r ? (setTimeout(() => $("prev"), 0), 0) : n;
						}), B.current && clearTimeout(B.current), B.current = setTimeout(() => {
							H(0);
						}, 250));
					},
					className: "flex-1 flex flex-col min-h-0",
					children: [/* @__PURE__ */ m("div", {
						className: "flex shrink-0 items-center justify-between px-6 py-4 select-none",
						children: [/* @__PURE__ */ p("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: C === "year" ? /* @__PURE__ */ m("div", {
								className: "flex items-center gap-6",
								children: [/* @__PURE__ */ p("span", { children: y.getFullYear() }), y.getFullYear() === 2026 && /* @__PURE__ */ m("div", {
									className: "hidden sm:flex items-center gap-4 text-xs font-normal",
									children: [/* @__PURE__ */ m("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ p("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ p("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: "Bính Ngọ 2026"
										})]
									}), /* @__PURE__ */ m("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ p("span", { className: "w-3 h-0.5 bg-red-500 rounded animate-pulse" }), /* @__PURE__ */ p("span", {
											className: "text-black/50 dark:text-white/50 font-sans",
											children: "Ngày đầu tiên của tháng âm lịch"
										})]
									})]
								})]
							}) : C === "day" ? /* @__PURE__ */ m("div", {
								className: "flex items-baseline gap-2",
								children: [
									/* @__PURE__ */ m("span", { children: [
										x.getDate(),
										" ",
										x.toLocaleDateString(_ === "vi" ? "vi-VN" : "en-US", {
											month: "long",
											year: "numeric"
										})
									] }),
									/* @__PURE__ */ p("span", {
										className: "text-sm font-normal text-black/40 dark:text-white/40",
										children: x.toLocaleDateString("en-US", { weekday: "long" })
									}),
									N(x) && /* @__PURE__ */ p("span", {
										className: "text-xs text-red-500 font-semibold border border-red-500/20 px-1.5 py-0.5 rounded bg-red-500/5",
										children: N(x)
									})
								]
							}) : y.toLocaleDateString(_ === "vi" ? "vi-VN" : "en-US", {
								month: "long",
								year: "numeric"
							})
						}), /* @__PURE__ */ p("div", {
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ m("div", {
								className: "flex items-center gap-0.5 bg-black/5 dark:bg-white/10 p-0.5 rounded-lg border border-black/5 dark:border-white/5",
								children: [
									/* @__PURE__ */ p("button", {
										onClick: () => $("prev"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ p(r, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ p("button", {
										onClick: () => {
											let e = new Date(2026, 6, 14);
											b(e), S(e);
										},
										className: "px-3 py-0.5 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/85 dark:text-white/85 cursor-pointer",
										children: "Today"
									}),
									/* @__PURE__ */ p("button", {
										onClick: () => $("next"),
										className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded text-black/65 dark:text-white/65 cursor-pointer",
										children: /* @__PURE__ */ p(i, { className: "w-3.5 h-3.5" })
									})
								]
							})
						})]
					}), /* @__PURE__ */ p("div", {
						className: e("flex-1 min-h-0", C === "year" ? "px-6 pb-2" : "px-0", C === "year" || C === "month" ? "overflow-hidden h-full flex flex-col pb-0" : "overflow-y-auto pb-4"),
						children: /* @__PURE__ */ m("div", {
							style: {
								transform: `translateY(${-V * .8}px)`,
								opacity: 1 - Math.abs(V) / (M || 500),
								transition: V === 0 ? "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease" : "none"
							},
							className: "h-full flex flex-col",
							children: [
								C === "day" && /* @__PURE__ */ p(ee, {
									selectedDate: x,
									setSelectedDate: S,
									filteredEvents: Q,
									onEventClick: Z
								}),
								C === "week" && /* @__PURE__ */ p(te, {
									currentDate: y,
									setSelectedDate: S,
									setCurrentView: w,
									filteredEvents: Q,
									onEventClick: Z
								}),
								C === "month" && /* @__PURE__ */ p(ne, {
									currentDate: y,
									selectedDate: x,
									setSelectedDate: S,
									setCurrentView: w,
									filteredEvents: Q,
									onEventClick: Z
								}),
								C === "year" && /* @__PURE__ */ p(re, {
									currentDate: y,
									selectedDate: x,
									setCurrentDate: b,
									setCurrentView: w
								})
							]
						})
					})]
				})]
			}),
			J && X && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", {
				className: "absolute inset-0 z-40 bg-transparent",
				onClick: () => Y(null)
			}), /* @__PURE__ */ m("div", {
				className: "absolute z-50 w-[280px] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md text-black dark:text-white border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transition-all duration-150 ease-out",
				style: {
					top: `${X.top}px`,
					left: `${X.left}px`
				},
				children: [
					/* @__PURE__ */ p("div", { className: e("absolute w-0 h-0 border-8 border-transparent", X.arrowSide === "left" && "top-1/2 -translate-y-1/2 -left-[16px] border-r-8 border-r-white/95 dark:border-r-[#1c1c1e]/95", X.arrowSide === "right" && "top-1/2 -translate-y-1/2 -right-[16px] border-l-8 border-l-white/95 dark:border-l-[#1c1c1e]/95") }),
					/* @__PURE__ */ m("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ p("h3", {
							className: "font-bold text-base text-black/90 dark:text-white/95 truncate flex-1",
							children: J.title
						}), ce && /* @__PURE__ */ m("div", {
							className: "flex items-center gap-1 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-semibold text-black/70 dark:text-white/90 shrink-0 border border-black/5 dark:border-white/5",
							children: [/* @__PURE__ */ p("span", {
								className: "h-2 w-2 rounded-full shrink-0",
								style: { backgroundColor: ce.color }
							}), /* @__PURE__ */ p("span", {
								className: "text-[9px] text-black/40 dark:text-white/50 select-none",
								children: "↕"
							})]
						})]
					}),
					/* @__PURE__ */ m("div", {
						className: "bg-black/[0.03] dark:bg-white/5 rounded-xl p-3 space-y-1 text-xs text-black/80 dark:text-white/90 border border-black/5 dark:border-white/5",
						children: [/* @__PURE__ */ p("p", {
							className: "font-semibold text-black/90 dark:text-white/95",
							children: se
						}), /* @__PURE__ */ m("div", {
							className: "flex items-center justify-between text-[11px] text-black/50 dark:text-white/60",
							children: [/* @__PURE__ */ p("span", { children: J.calendarId === "holidays" ? "Repeats yearly" : "Does not repeat" }), J.calendarId === "holidays" && /* @__PURE__ */ p("span", {
								className: "text-[10px]",
								children: "🔄"
							})]
						})]
					}),
					/* @__PURE__ */ p("div", {
						className: "flex justify-end pt-1",
						children: /* @__PURE__ */ p("button", {
							onClick: oe,
							className: "bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/10 dark:hover:bg-white/20 active:scale-95 px-4 py-1.5 rounded-lg text-xs font-semibold text-black/80 dark:text-white/90 transition-all cursor-pointer border border-black/10 dark:border-white/10",
							children: J.calendarId === "holidays" ? "Unsubscribe" : "Delete"
						})
					})
				]
			})] })
		]
	});
}
//#endregion
export { W as Calendar };
