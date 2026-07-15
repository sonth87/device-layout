import { t as e } from "./utils-B6YmNDS2.js";
import { t } from "./createLucideIcon--WjuKCts.js";
import { n, t as r } from "./video-vPvbuZw7.js";
import { t as i } from "./plus-Dx6tdmvY.js";
import { t as a } from "./search-BKG97C0x.js";
import { t as o } from "./useTranslation-C7Ov8uGR.js";
import { n as s, t as c } from "./MobileSplitView-U5mifaLx.js";
import { useEffect as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
var m = t("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), h = [
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
], g = {
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
}, _ = h.map((e) => ({
	...e,
	messages: e.messages.map((e) => ({
		...e,
		from: e.from,
		time: Date.now() + e.timeOffset
	}))
}));
function v() {
	let { language: t } = o(), n = g[t] || g.en, [r, s] = d(_), [h, v] = d(null), [b, x] = d(""), [S, C] = d(""), w = u(null), T = r.find((e) => e.id === h);
	l(() => {
		w.current?.scrollIntoView({ behavior: "smooth" });
	}, [T?.messages.length]);
	let E = () => {
		if (!b.trim() || !T) return;
		let e = {
			id: crypto.randomUUID(),
			text: b.trim(),
			from: "me",
			time: Date.now()
		};
		s((t) => t.map((t) => t.id === T.id ? {
			...t,
			messages: [...t.messages, e],
			preview: e.text
		} : t)), x(""), setTimeout(() => {
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
			s((e) => e.map((e) => e.id === T.id ? {
				...e,
				messages: [...e.messages, t],
				preview: t.text
			} : e));
		}, 800);
	}, D = r.filter((e) => e.name.toLowerCase().includes(S.toLowerCase())), O = (e) => {
		let t = new Date(e), n = /* @__PURE__ */ new Date();
		return t.toDateString() === n.toDateString() ? t.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}) : t.toLocaleDateString([], {
			month: "short",
			day: "numeric"
		});
	};
	return /* @__PURE__ */ f(c, {
		list: /* @__PURE__ */ p("div", {
			className: "flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
			children: [/* @__PURE__ */ f("div", {
				className: "p-3 border-b border-black/10 dark:border-white/10",
				children: /* @__PURE__ */ p("div", {
					className: "flex items-center gap-2 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-xl",
					children: [/* @__PURE__ */ f(a, { className: "w-3.5 h-3.5 text-black/40 dark:text-white/40" }), /* @__PURE__ */ f("input", {
						value: S,
						onChange: (e) => C(e.target.value),
						placeholder: n.search,
						className: "flex-1 bg-transparent text-sm outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
					})]
				})
			}), /* @__PURE__ */ f("div", {
				className: "flex-1 overflow-y-auto",
				children: D.map((t) => /* @__PURE__ */ p("button", {
					onClick: () => {
						v(t.id), s((e) => e.map((e) => e.id === t.id ? {
							...e,
							unread: 0
						} : e));
					},
					className: e("w-full text-left flex items-center gap-3 px-3 py-3 border-b border-black/5 dark:border-white/5 transition-colors", t.id !== h && "hover:bg-black/5 dark:hover:bg-white/5"),
					style: t.id === h ? { backgroundColor: "var(--highlight-color)" } : void 0,
					children: [/* @__PURE__ */ f("div", {
						className: "w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-xl shrink-0",
						children: t.avatar
					}), /* @__PURE__ */ p("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ p("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ f("p", {
								className: "text-sm font-semibold text-black/90 dark:text-white/90 truncate",
								children: t.name
							}), /* @__PURE__ */ f("p", {
								className: "text-[11px] text-black/40 dark:text-white/40 shrink-0 ml-2",
								children: O(t.messages[t.messages.length - 1]?.time ?? 0)
							})]
						}), /* @__PURE__ */ p("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ f("p", {
								className: "text-xs text-black/50 dark:text-white/50 truncate flex-1",
								children: t.preview
							}), t.unread > 0 && /* @__PURE__ */ f("span", {
								className: "shrink-0 w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center font-bold",
								style: { backgroundColor: "var(--accent-color)" },
								children: t.unread
							})]
						})]
					})]
				}, t.id))
			})]
		}),
		detail: T ? /* @__PURE__ */ p("div", {
			className: "flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
			children: [
				/* @__PURE__ */ f(y, {
					convo: T,
					onBack: () => v(null)
				}),
				/* @__PURE__ */ p("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-2",
					children: [T.messages.map((t) => /* @__PURE__ */ f("div", {
						className: e("flex", t.from === "me" ? "justify-end" : "justify-start"),
						children: /* @__PURE__ */ f("div", {
							className: e("max-w-[70%] px-3 py-2 rounded-2xl text-sm", t.from === "me" ? "text-white rounded-br-sm" : "bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-bl-sm"),
							style: t.from === "me" ? { backgroundColor: "var(--accent-color)" } : void 0,
							children: t.text
						})
					}, t.id)), /* @__PURE__ */ f("div", { ref: w })]
				}),
				/* @__PURE__ */ p("div", {
					className: "px-3 py-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 shrink-0",
					children: [
						/* @__PURE__ */ f("button", {
							className: "p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
							children: /* @__PURE__ */ f(i, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ f("input", {
							value: b,
							onChange: (e) => x(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && E(),
							placeholder: n.imessage,
							className: "flex-1 px-3 py-1.5 rounded-full border border-black/15 dark:border-white/15 bg-transparent text-sm outline-none focus:ring-1 focus:ring-accent-active"
						}),
						/* @__PURE__ */ f("button", {
							onClick: E,
							disabled: !b.trim(),
							className: "w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity disabled:opacity-30 text-white",
							style: { backgroundColor: b.trim() ? "var(--accent-color)" : "#d1d1d6" },
							children: /* @__PURE__ */ f(m, { className: "w-3.5 h-3.5" })
						})
					]
				})
			]
		}) : null,
		onBack: () => v(null),
		detailTitle: T?.name,
		className: "bg-white dark:bg-[#0F1115]"
	});
}
function y({ convo: e, onBack: t }) {
	let i = s(), { language: a } = o(), c = g[a] || g.en;
	return /* @__PURE__ */ p("div", {
		className: "flex items-center gap-2 px-3 py-2.5 border-b border-black/10 dark:border-white/10 shrink-0",
		children: [
			i && /* @__PURE__ */ p("button", {
				onClick: i,
				className: "flex items-center gap-0.5 text-accent-active active:opacity-60 transition-opacity mr-1",
				children: [/* @__PURE__ */ f("svg", {
					className: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					strokeWidth: 2.5,
					children: /* @__PURE__ */ f("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M15 19l-7-7 7-7"
					})
				}), /* @__PURE__ */ f("span", {
					className: "text-[14px] font-medium",
					children: c.messages
				})]
			}),
			/* @__PURE__ */ f("div", {
				className: "w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-lg shrink-0",
				children: e.avatar
			}),
			/* @__PURE__ */ f("p", {
				className: "font-semibold text-black/90 dark:text-white/90 flex-1 text-sm",
				children: e.name
			}),
			/* @__PURE__ */ f("button", {
				className: "p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
				children: /* @__PURE__ */ f(n, { className: "w-4 h-4" })
			}),
			/* @__PURE__ */ f("button", {
				className: "p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-accent-active",
				children: /* @__PURE__ */ f(r, { className: "w-4 h-4" })
			})
		]
	});
}
//#endregion
export { v as Messages };
