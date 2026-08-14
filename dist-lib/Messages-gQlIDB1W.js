import { _ as e, h as t } from "./MobileAppViewer-Drq22dqr.js";
import { t as n } from "./utils-B6YmNDS2.js";
import { t as r } from "./createLucideIcon--WjuKCts.js";
import { t as i } from "./plus-Dx6tdmvY.js";
import { t as a } from "./search-BKG97C0x.js";
import { t as o } from "./useTranslation-CPcDMIDQ.js";
import { n as s, r as c, t as l } from "./MobileSplitView-Cwf_aWh_.js";
import { useEffect as u, useRef as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
var h = r("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), g = [
	{
		id: "1",
		name: "Alice Chen",
		avatar: "👩‍💻",
		preview: "Sounds great! See you then",
		unread: 0,
		messages: [
			{
				id: "1",
				text: "Hey! Are you free tomorrow for coffee?",
				from: "them",
				timeOffset: -36e5
			},
			{
				id: "2",
				text: "Yes! Around 10am works for me 😊",
				from: "me",
				timeOffset: -35e5
			},
			{
				id: "3",
				text: "Sounds great! See you then",
				from: "them",
				timeOffset: -34e5
			}
		]
	},
	{
		id: "2",
		name: "Bob Martin",
		avatar: "👨‍🎨",
		preview: "The design looks amazing!",
		unread: 2,
		messages: [{
			id: "1",
			text: "Just pushed the new designs to Figma",
			from: "them",
			timeOffset: -72e5
		}, {
			id: "2",
			text: "The design looks amazing!",
			from: "them",
			timeOffset: -71e5
		}]
	},
	{
		id: "3",
		name: "Team Dev 🚀",
		avatar: "👥",
		preview: "Deploy scheduled for Friday",
		unread: 5,
		messages: [{
			id: "1",
			text: "Sprint review went well!",
			from: "them",
			timeOffset: -864e5
		}, {
			id: "2",
			text: "Deploy scheduled for Friday",
			from: "them",
			timeOffset: -828e5
		}]
	}
], _ = {
	en: {
		search: "Search",
		imessage: "iMessage",
		messages: "Messages"
	},
	vi: {
		search: "Tìm kiếm",
		imessage: "iMessage",
		messages: "Tin nhắn"
	},
	ja: {
		search: "検索",
		imessage: "iMessage",
		messages: "メッセージ"
	},
	ko: {
		search: "검색",
		imessage: "iMessage",
		messages: "메시지"
	},
	zh: {
		search: "搜索",
		imessage: "iMessage",
		messages: "信息"
	},
	th: {
		search: "ค้นหา",
		imessage: "iMessage",
		messages: "ข้อความ"
	}
}, v = g.map((e) => ({
	...e,
	messages: e.messages.map((e) => ({
		...e,
		from: e.from,
		time: Date.now() + e.timeOffset
	}))
}));
function y() {
	let { language: e } = o(), t = _[e] || _.en, [r, s] = f(v), [g, y] = c(r[0]?.id ?? null), [x, S] = f(""), [C, w] = f(""), T = d(null), E = r.find((e) => e.id === g);
	u(() => {
		T.current?.scrollIntoView({ behavior: "smooth" });
	}, [E?.messages.length]);
	let D = () => {
		if (!x.trim() || !E) return;
		let e = {
			id: crypto.randomUUID(),
			text: x.trim(),
			from: "me",
			time: Date.now()
		};
		s((t) => t.map((t) => t.id === E.id ? {
			...t,
			messages: [...t.messages, e],
			preview: e.text
		} : t)), S(""), setTimeout(() => {
			let e = [
				"Got it! 👍",
				"Sounds good!",
				"Thanks for letting me know.",
				"Interesting... tell me more!",
				"😄",
				"Will do!"
			], t = {
				id: crypto.randomUUID(),
				text: e[Math.floor(Math.random() * e.length)],
				from: "them",
				time: Date.now()
			};
			s((e) => e.map((e) => e.id === E.id ? {
				...e,
				messages: [...e.messages, t],
				preview: t.text
			} : e));
		}, 800);
	}, O = r.filter((e) => e.name.toLowerCase().includes(C.toLowerCase())), k = (e) => {
		let t = new Date(e), n = /* @__PURE__ */ new Date();
		return t.toDateString() === n.toDateString() ? t.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}) : t.toLocaleDateString([], {
			month: "short",
			day: "numeric"
		});
	};
	return /* @__PURE__ */ p(l, {
		list: /* @__PURE__ */ m("div", {
			className: "flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
			children: [/* @__PURE__ */ p("div", {
				className: "p-3 border-b border-black/10 dark:border-white/10",
				children: /* @__PURE__ */ m("div", {
					className: "flex items-center gap-2 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-xl",
					children: [/* @__PURE__ */ p(a, { className: "w-3.5 h-3.5 text-black/40 dark:text-white/40" }), /* @__PURE__ */ p("input", {
						value: C,
						onChange: (e) => w(e.target.value),
						placeholder: t.search,
						className: "flex-1 bg-transparent text-sm outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
					})]
				})
			}), /* @__PURE__ */ p("div", {
				className: "flex-1 overflow-y-auto",
				children: O.map((e) => /* @__PURE__ */ m("button", {
					onClick: () => {
						y(e.id), s((t) => t.map((t) => t.id === e.id ? {
							...t,
							unread: 0
						} : t));
					},
					className: n("w-full text-left flex items-center gap-3 px-3 py-3 border-b border-black/5 dark:border-white/5 transition-colors", e.id !== g && "hover:bg-black/5 dark:hover:bg-white/5"),
					style: e.id === g ? { backgroundColor: "var(--highlight-color)" } : void 0,
					children: [/* @__PURE__ */ p("div", {
						className: "w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-xl shrink-0",
						children: e.avatar
					}), /* @__PURE__ */ m("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ m("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ p("p", {
								className: "text-sm font-semibold text-black/90 dark:text-white/90 truncate",
								children: e.name
							}), /* @__PURE__ */ p("p", {
								className: "text-[11px] text-black/40 dark:text-white/40 shrink-0 ml-2",
								children: k(e.messages[e.messages.length - 1]?.time ?? 0)
							})]
						}), /* @__PURE__ */ m("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ p("p", {
								className: "text-xs text-black/50 dark:text-white/50 truncate flex-1",
								children: e.preview
							}), e.unread > 0 && /* @__PURE__ */ p("span", {
								className: "shrink-0 w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-bold",
								style: { backgroundColor: "var(--accent-color)" },
								children: e.unread
							})]
						})]
					})]
				}, e.id))
			})]
		}),
		detail: E ? /* @__PURE__ */ m("div", {
			className: "flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
			children: [
				/* @__PURE__ */ p(b, { convo: E }),
				/* @__PURE__ */ m("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-2",
					children: [E.messages.map((e) => /* @__PURE__ */ p("div", {
						className: n("flex", e.from === "me" ? "justify-end" : "justify-start"),
						children: /* @__PURE__ */ p("div", {
							className: n("max-w-[70%] px-3 py-2 rounded-2xl text-sm", e.from === "me" ? "text-white rounded-br-sm" : "bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-bl-sm"),
							style: e.from === "me" ? { backgroundColor: "var(--accent-color)" } : void 0,
							children: e.text
						})
					}, e.id)), /* @__PURE__ */ p("div", { ref: T })]
				}),
				/* @__PURE__ */ m("div", {
					className: "px-3 py-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 shrink-0",
					children: [
						/* @__PURE__ */ p("button", {
							className: "p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
							children: /* @__PURE__ */ p(i, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ p("input", {
							value: x,
							onChange: (e) => S(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && D(),
							placeholder: t.imessage,
							className: "flex-1 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-transparent text-sm outline-none focus:ring-1 focus:ring-accent-active"
						}),
						/* @__PURE__ */ p("button", {
							onClick: D,
							disabled: !x.trim(),
							className: "w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-30 text-white",
							style: { backgroundColor: x.trim() ? "var(--accent-color)" : "#d1d1d6" },
							children: /* @__PURE__ */ p(h, { className: "w-3.5 h-3.5" })
						})
					]
				})
			]
		}) : null,
		onBack: () => y(null),
		detailTitle: E?.name,
		className: "bg-white dark:bg-[#0F1115]"
	});
}
function b({ convo: n }) {
	let r = s(), { language: i } = o(), a = _[i] || _.en;
	return /* @__PURE__ */ m("div", {
		className: "flex items-center gap-2 px-3 py-2.5 border-b border-black/10 dark:border-white/10 shrink-0",
		children: [
			r && /* @__PURE__ */ m("button", {
				onClick: r,
				className: "flex items-center gap-0.5 text-accent-active active:opacity-60 transition-opacity mr-1",
				children: [/* @__PURE__ */ p("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2.5,
					children: /* @__PURE__ */ p("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M15 19l-7-7 7-7"
					})
				}), /* @__PURE__ */ p("span", {
					className: "text-[14px] font-medium",
					children: a.messages
				})]
			}),
			/* @__PURE__ */ p("div", {
				className: "w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-lg shrink-0",
				children: n.avatar
			}),
			/* @__PURE__ */ p("p", {
				className: "font-semibold text-black/90 dark:text-white/90 flex-1 text-sm",
				children: n.name
			}),
			/* @__PURE__ */ p("button", {
				className: "p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
				children: /* @__PURE__ */ p(e, { className: "w-4 h-4" })
			}),
			/* @__PURE__ */ p("button", {
				className: "p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
				children: /* @__PURE__ */ p(t, { className: "w-4 h-4" })
			})
		]
	});
}
//#endregion
export { y as Messages };
