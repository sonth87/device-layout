var e = {
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
			name: "Ngày Valentine"
		},
		{
			month: 2,
			day: 27,
			name: "Ngày Thầy thuốc Việt Nam"
		},
		{
			month: 3,
			day: 8,
			name: "Ngày quốc tế Phụ nữ"
		},
		{
			month: 3,
			day: 26,
			name: "Ngày thành lập Đoàn TNCS Hồ Chí Minh"
		},
		{
			month: 4,
			day: 30,
			name: "Ngày Thống nhất đất nước",
			isRed: !0
		},
		{
			month: 5,
			day: 1,
			name: "Ngày quốc tế Lao động",
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
			name: "Ngày Quốc tế Thiếu nhi"
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
			name: "Ngày Quốc khánh",
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
			name: "Ngày phụ nữ Việt Nam"
		},
		{
			month: 11,
			day: 20,
			name: "Ngày Nhà giáo Việt Nam"
		},
		{
			month: 12,
			day: 22,
			name: "Ngày thành lập Quân đội Nhân dân Việt Nam"
		},
		{
			month: 12,
			day: 24,
			name: "Lễ Giáng Sinh (Christmas Eve)"
		},
		{
			month: 12,
			day: 25,
			name: "Lễ Giáng Sinh"
		}
	],
	lunar: [
		{
			month: 12,
			day: 30,
			name: "Ngày Tất niên",
			isRed: !0
		},
		{
			month: 1,
			day: 1,
			name: "Tết Nguyên đán",
			isRed: !0
		},
		{
			month: 1,
			day: 2,
			name: "Mùng hai Tết",
			isRed: !0
		},
		{
			month: 1,
			day: 3,
			name: "Mùng ba Tết",
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
			name: "Giỗ tổ Hùng Vương",
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
			name: "Tết Trung thu",
			isRed: !1
		},
		{
			month: 12,
			day: 23,
			name: "Tiễn Táo Quân chầu trời (23/12)"
		}
	]
}, t = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, n = [
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
], r = [
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
], i = [
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
], a = [
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
], o = class {
	constructor(e, t, n, r, i) {
		this.day = e, this.month = t, this.year = n, this.leap = r, this.jd = i;
	}
};
function s(e) {
	return Math.floor(e);
}
function c(e, t, n) {
	let r = s((14 - t) / 12), i = n + 4800 - r;
	return e + s((153 * (t + 12 * r - 3) + 2) / 5) + 365 * i + s(i / 4) - s(i / 100) + s(i / 400) - 32045;
}
function l(e, t) {
	let n = [], r = [29, 30], i = Array(12), a = t >> 17, s = t & 15, l = r[t >> 16 & 1], u = c(1, 1, e) + a, d = t >> 4;
	for (let e = 0; e < 12; e++) i[12 - e - 1] = r[d & 1], d >>= 1;
	if (s === 0) for (let t = 1; t <= 12; t++) n.push(new o(1, t, e, 0, u)), u += i[t - 1];
	else {
		for (let t = 1; t <= s; t++) n.push(new o(1, t, e, 0, u)), u += i[t - 1];
		n.push(new o(1, s, e, 1, u)), u += l;
		for (let t = s + 1; t <= 12; t++) n.push(new o(1, t, e, 0, u)), u += i[t - 1];
	}
	return n;
}
function u(e) {
	let t = 0;
	if (e < 1900) return [];
	if (e < 2e3) t = n[e - 1900];
	else if (e < 2100) t = r[e - 2e3];
	else return [];
	return l(e, t);
}
function d(e, t) {
	if (t.length === 0 || t[0].jd > e) return new o(0, 0, 0, 0, e);
	let n = t.length - 1;
	for (; e < t[n].jd;) n--;
	let r = e - t[n].jd;
	return new o(t[n].day + r, t[n].month, t[n].year, t[n].leap, e);
}
function f(e, t, n) {
	if (n < 1900 || n >= 2100) return new o(0, 0, 0, 0, 0);
	let r = u(n), i = c(e, t, n);
	return r.length > 0 && i < r[0].jd && (r = u(n - 1)), d(i, r);
}
function p(e) {
	let t = (e + 6) % 10, n = (e + 8) % 12;
	return `${i[t]} ${a[n]}`;
}
var m = (e) => {
	let t = f(e.getDate(), e.getMonth() + 1, e.getFullYear());
	if (t.day === 0) return "";
	if (t.day === 1) {
		let e = p(t.year);
		return `1/${t.month} năm ${e}`;
	}
	return `${t.day}/${t.month}`;
}, h = (e) => f(e.getDate(), e.getMonth() + 1, e.getFullYear()).day === 1, g = (e) => {
	let t = f(e.getDate(), e.getMonth() + 1, e.getFullYear());
	if (t.day === 0) return "";
	let n = p(t.year);
	return `${t.day}/${t.month} năm ${n}`;
}, _ = e, v = (e) => {
	let t = e.getMonth() + 1, n = e.getDate(), r = _.solar.find((e) => e.month === t && e.day === n);
	if (r && r.isRed) return !0;
	let i = f(n, t, e.getFullYear());
	if (i.day !== 0) {
		let e = _.lunar.find((e) => e.month === i.month && e.day === i.day);
		if (e && e.isRed) return !0;
	}
	return !1;
}, y = {
	vn: "https://calendars.icloud.com/holidays/vn_vi.ics/",
	us: "https://calendars.icloud.com/holidays/us_en.ics/",
	gb: "https://calendars.icloud.com/holidays/gb_en.ics/",
	jp: "https://calendars.icloud.com/holidays/jp_ja.ics/",
	kr: "https://calendars.icloud.com/holidays/kr_ko.ics/",
	cn: "https://calendars.icloud.com/holidays/cn_zh.ics/",
	th: "https://calendars.icloud.com/holidays/th_th.ics/",
	fr: "https://calendars.icloud.com/holidays/fr_fr.ics/",
	de: "https://calendars.icloud.com/holidays/de_de.ics/",
	sg: "https://calendars.icloud.com/holidays/sg_en.ics/"
}, b = {
	vn: {
		flag: "🇻🇳",
		name: "Vietnam"
	},
	us: {
		flag: "🇺🇸",
		name: "United States"
	},
	gb: {
		flag: "🇬🇧",
		name: "United Kingdom"
	},
	jp: {
		flag: "🇯🇵",
		name: "Japan"
	},
	kr: {
		flag: "🇰🇷",
		name: "South Korea"
	},
	cn: {
		flag: "🇨🇳",
		name: "China"
	},
	th: {
		flag: "🇹🇭",
		name: "Thailand"
	},
	fr: {
		flag: "🇫🇷",
		name: "France"
	},
	de: {
		flag: "🇩🇪",
		name: "Germany"
	},
	sg: {
		flag: "🇸🇬",
		name: "Singapore"
	}
}, x = { vn: e };
function S(e) {
	let t = [], n = e.split("BEGIN:VEVENT");
	for (let e = 1; e < n.length; e++) {
		let r = n[e], i = r.match(/DTSTART(?:;[^:]+)?:(\d{8})/), a = r.match(/SUMMARY(?:;[^:]+)?:(.+)/);
		if (!i || !a) continue;
		let o = i[1], s = `${o.slice(0, 4)}-${o.slice(4, 6)}-${o.slice(6, 8)}`, c = a[1].replace(/\r/g, "").trim();
		t.push({
			date: s,
			name: c
		});
	}
	return t;
}
var C = {}, w = 720 * 60 * 1e3;
async function T(e) {
	let t = y[e];
	if (!t) return [];
	let n = C[e];
	if (n && Date.now() - n.fetchedAt < w) return n.events;
	try {
		let n = await fetch(t, { cache: "no-store" });
		if (!n.ok) return [];
		let r = S(await n.text());
		return C[e] = {
			events: r,
			fetchedAt: Date.now()
		}, r;
	} catch {
		return [];
	}
}
function E(e, t) {
	let n = [];
	for (let r of e.solar) {
		let e = String(r.month).padStart(2, "0"), i = String(r.day).padStart(2, "0");
		n.push({
			date: `${t}-${e}-${i}`,
			name: r.name,
			isRed: r.isRed ?? !1,
			source: "json"
		});
	}
	let r = new Date(t, 0, 1), i = new Date(t, 11, 31);
	for (let a = new Date(r); a <= i; a.setDate(a.getDate() + 1)) {
		let r = a.getDate(), i = a.getMonth() + 1, o = f(r, i, t);
		if (o.day !== 0) {
			for (let a of e.lunar) if (a.month === o.month && a.day === o.day && o.leap === 0) {
				let e = String(i).padStart(2, "0"), o = String(r).padStart(2, "0");
				n.push({
					date: `${t}-${e}-${o}`,
					name: a.name,
					isRed: a.isRed ?? !1,
					source: "json"
				});
				break;
			}
		}
	}
	return n;
}
function D(e, t, n) {
	let r = t.filter((e) => e.date.startsWith(`${n}-`)), i = /* @__PURE__ */ new Map();
	for (let e of r) {
		let t = i.get(e.date) ?? [];
		t.push(e), i.set(e.date, t);
	}
	let a = [], o = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = i.get(t.date);
		if (e && e.length > 0) {
			let n = e[0];
			a.push({
				date: t.date,
				name: n.name,
				isRed: t.isRed,
				source: "merged"
			}), o.add(t.date);
		} else a.push(t);
	}
	for (let [e, t] of i) if (!o.has(e)) for (let n of t) a.push({
		date: e,
		name: n.name,
		isRed: !0,
		source: "ics"
	});
	return a.sort((e, t) => e.date.localeCompare(t.date)), a;
}
var O = {};
async function k(e, t) {
	let n = `${e}-${t}`;
	if (O[n]) return O[n];
	let r = x[e] ?? null, i = D(r ? E(r, t) : [], await T(e), t);
	return O[n] = i, i;
}
function A(e) {
	if (e) {
		for (let t of Object.keys(O)) t.startsWith(`${e}-`) && delete O[t];
		delete C[e];
	} else {
		for (let e of Object.keys(O)) delete O[e];
		for (let e of Object.keys(C)) delete C[e];
	}
}
//#endregion
export { t as a, h as c, A as i, v as l, b as n, g as o, k as r, m as s, y as t };
