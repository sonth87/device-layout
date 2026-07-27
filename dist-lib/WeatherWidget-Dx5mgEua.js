import { t as e } from "./createLucideIcon-CUtIr1pR.js";
import { t } from "./sun-CZd8f6Lr.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
var i = e("cloud-rain", [
	["path", {
		d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
		key: "1pljnt"
	}],
	["path", {
		d: "M16 14v6",
		key: "1j4efv"
	}],
	["path", {
		d: "M8 14v6",
		key: "17c4r9"
	}],
	["path", {
		d: "M12 16v6",
		key: "c8a4gj"
	}]
]), a = e("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]), o = e("wind", [
	["path", {
		d: "M12.8 19.6A2 2 0 1 0 14 16H2",
		key: "148xed"
	}],
	["path", {
		d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
		key: "1u4tom"
	}],
	["path", {
		d: "M9.8 4.4A2 2 0 1 1 11 8H2",
		key: "75valh"
	}]
]), s = {
	city: "Ho Chi Minh City",
	temp: 33,
	condition: "Partly Cloudy",
	high: 36,
	low: 28,
	humidity: 72,
	wind: 14,
	forecast: [
		{
			day: "Mon",
			icon: "sun",
			hi: 36,
			lo: 28
		},
		{
			day: "Tue",
			icon: "cloud",
			hi: 34,
			lo: 27
		},
		{
			day: "Wed",
			icon: "rain",
			hi: 31,
			lo: 26
		},
		{
			day: "Thu",
			icon: "sun",
			hi: 35,
			lo: 28
		},
		{
			day: "Fri",
			icon: "cloud",
			hi: 33,
			lo: 27
		}
	]
};
function c({ icon: e, className: r }) {
	return n(e === "sun" ? t : e === "rain" ? i : a, { className: r });
}
function l({ size: e }) {
	return e === "small" ? /* @__PURE__ */ r("div", {
		className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/15 to-cyan-400/10",
		children: [
			/* @__PURE__ */ n("p", {
				className: "text-white/70 text-[10px] font-medium",
				children: s.city.split(" ").slice(-2).join(" ")
			}),
			/* @__PURE__ */ r("p", {
				className: "text-white text-4xl font-thin leading-none",
				children: [s.temp, "°"]
			}),
			/* @__PURE__ */ n(a, { className: "w-8 h-8 text-white/60 my-1" }),
			/* @__PURE__ */ n("p", {
				className: "text-white/70 text-[10px]",
				children: s.condition
			})
		]
	}) : /* @__PURE__ */ r("div", {
		className: "w-full h-full flex flex-col bg-gradient-to-br from-blue-500/15 to-cyan-400/10 p-4",
		children: [
			/* @__PURE__ */ r("div", {
				className: "flex items-start justify-between mb-auto",
				children: [/* @__PURE__ */ r("div", { children: [
					/* @__PURE__ */ n("p", {
						className: "text-white/80 text-[11px]",
						children: s.city
					}),
					/* @__PURE__ */ r("p", {
						className: "text-white text-5xl font-thin leading-none mt-1",
						children: [s.temp, "°"]
					}),
					/* @__PURE__ */ n("p", {
						className: "text-white/70 text-[11px] mt-1",
						children: s.condition
					})
				] }), /* @__PURE__ */ n(a, { className: "w-10 h-10 text-white/70 mt-1" })]
			}),
			/* @__PURE__ */ r("div", {
				className: "flex items-center gap-1 mt-2 text-white/60 text-[10px]",
				children: [
					/* @__PURE__ */ n(o, { className: "w-3 h-3" }),
					" ",
					s.wind,
					"km/h",
					/* @__PURE__ */ n("span", {
						className: "mx-1",
						children: "·"
					}),
					"H:",
					s.high,
					"° L:",
					s.low,
					"°"
				]
			}),
			/* @__PURE__ */ n("div", {
				className: "flex justify-between mt-2 pt-2 border-t border-white/20",
				children: s.forecast.map((e) => /* @__PURE__ */ r("div", {
					className: "flex flex-col items-center gap-0.5",
					children: [
						/* @__PURE__ */ n("p", {
							className: "text-white/60 text-[9px]",
							children: e.day
						}),
						/* @__PURE__ */ n(c, {
							icon: e.icon,
							className: "w-3.5 h-3.5 text-white/70"
						}),
						/* @__PURE__ */ r("p", {
							className: "text-white text-[10px] font-medium",
							children: [e.hi, "°"]
						})
					]
				}, e.day))
			})
		]
	});
}
//#endregion
export { l as WeatherWidget };
