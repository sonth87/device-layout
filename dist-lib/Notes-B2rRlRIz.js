import { t as e } from "./store-429-ivOo.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./createLucideIcon--WjuKCts.js";
import { t as r } from "./plus-Dx6tdmvY.js";
import { t as i } from "./search-BKG97C0x.js";
import { t as a } from "./useAppTranslation-Chj9ex4L.js";
import { n as o, r as s, t as c } from "./MobileSplitView-DTPWqV5X.js";
import { useRef as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
var p = n("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), m = "/Users/user/Documents/Notes/";
function h(e) {
	return Object.values(e).filter((e) => e.type === "file" && e.path.startsWith(m) && e.path.endsWith(".note")).map((e) => {
		if (e.type !== "file") return null;
		try {
			return JSON.parse(e.content);
		} catch {
			return null;
		}
	}).filter(Boolean);
}
var g = {
	en: {
		search: "Search",
		newNote: "New Note",
		untitled: "Untitled",
		startWriting: "Start writing...",
		noteTitlePlaceholder: "Note title",
		backLabel: "Notes",
		welcomeTitle: "Welcome to Notes",
		welcomeBody: "Start writing your thoughts here.\n\nYou can create new notes with the + button, and delete them with the trash icon."
	},
	vi: {
		search: "Tìm kiếm",
		newNote: "Ghi chú mới",
		untitled: "Chưa đặt tiêu đề",
		startWriting: "Bắt đầu viết...",
		noteTitlePlaceholder: "Tiêu đề ghi chú",
		backLabel: "Ghi chú",
		welcomeTitle: "Chào mừng đến Ghi chú",
		welcomeBody: "Bắt đầu viết suy nghĩ của bạn ở đây.\n\nBạn có thể tạo ghi chú mới bằng nút + và xóa chúng bằng biểu tượng thùng rác."
	},
	ja: {
		search: "検索",
		newNote: "新規メモ",
		untitled: "無題",
		startWriting: "書き始める...",
		noteTitlePlaceholder: "メモのタイトル",
		backLabel: "メモ",
		welcomeTitle: "メモへようこそ",
		welcomeBody: "ここに考えを書き始めましょう。\n\n+ボタンで新しいメモを作成し、ゴミ箱アイコンで削除できます。"
	},
	ko: {
		search: "검색",
		newNote: "새 메모",
		untitled: "제목 없음",
		startWriting: "글쓰기 시작...",
		noteTitlePlaceholder: "메모 제목",
		backLabel: "메모",
		welcomeTitle: "메모에 오신 것을 환영합니다",
		welcomeBody: "여기에 생각을 적어보세요.\n\n+ 버튼으로 새 메모를 만들고 휴지통 아이콘으로 삭제할 수 있습니다."
	},
	zh: {
		search: "搜索",
		newNote: "新建备忘录",
		untitled: "无标题",
		startWriting: "开始写作...",
		noteTitlePlaceholder: "备忘录标题",
		backLabel: "备忘录",
		welcomeTitle: "欢迎使用备忘录",
		welcomeBody: "在这里开始写下您的想法。\n\n您可以使用 + 按钮创建新备忘录，使用垃圾桶图标删除它们。"
	},
	th: {
		search: "ค้นหา",
		newNote: "บันทึกใหม่",
		untitled: "ไม่มีชื่อ",
		startWriting: "เริ่มเขียน...",
		noteTitlePlaceholder: "ชื่อบันทึก",
		backLabel: "บันทึก",
		welcomeTitle: "ยินดีต้อนรับสู่บันทึก",
		welcomeBody: "เริ่มเขียนความคิดของคุณที่นี่\n\nคุณสามารถสร้างบันทึกใหม่ด้วยปุ่ม + และลบด้วยไอคอนถังขยะ"
	}
};
function _() {
	let { t: n } = a("notes", g), o = e((e) => e.vfsWriteFile), p = e((e) => e.vfsMkdir), _ = e((e) => e.vfsRm), [y, b] = u(() => {
		p(m.slice(0, -1));
		let t = h(e.getState().vfs);
		if (t.length > 0) return t.sort((e, t) => t.modifiedAt - e.modifiedAt);
		let r = {
			id: "welcome",
			title: n.welcomeTitle,
			body: n.welcomeBody,
			modifiedAt: Date.now()
		};
		return o(`${m}${r.id}.note`, JSON.stringify(r), "application/json"), [r];
	}), [x, S] = s(y[0]?.id ?? null), [C, w] = u(""), T = l(null), E = (e) => {
		o(`${m}${e.id}.note`, JSON.stringify(e), "application/json");
	}, D = () => {
		let e = {
			id: crypto.randomUUID(),
			title: n.newNote,
			body: "",
			modifiedAt: Date.now()
		};
		E(e), b((t) => [e, ...t]), S(e.id), setTimeout(() => T.current?.focus(), 50);
	}, O = (e) => {
		_(`${m}${e}.note`), b((t) => {
			let n = t.filter((t) => t.id !== e);
			return x === e && S(n[0]?.id ?? null), n;
		});
	}, k = (e, t) => {
		b((n) => n.map((n) => {
			if (n.id !== e) return n;
			let r = {
				...n,
				...t,
				modifiedAt: Date.now()
			};
			return E(r), r;
		}));
	}, A = y.find((e) => e.id === x) ?? null, j = y.filter((e) => e.title.toLowerCase().includes(C.toLowerCase()) || e.body.toLowerCase().includes(C.toLowerCase()));
	return /* @__PURE__ */ d(c, {
		list: /* @__PURE__ */ f("div", {
			className: "flex flex-col h-full bg-[#fdf9ef] dark:bg-[#0F1115] text-black dark:text-white",
			children: [
				/* @__PURE__ */ d("div", {
					className: "p-2 border-b border-black/10 dark:border-white/10",
					children: /* @__PURE__ */ f("div", {
						className: "flex items-center gap-1.5 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-lg",
						children: [/* @__PURE__ */ d(i, { className: "w-3 h-3 text-black/40 dark:text-white/40 shrink-0" }), /* @__PURE__ */ d("input", {
							value: C,
							onChange: (e) => w(e.target.value),
							placeholder: n.search,
							className: "flex-1 bg-transparent text-xs outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
						})]
					})
				}),
				/* @__PURE__ */ d("div", {
					className: "flex-1 overflow-y-auto",
					children: j.map((e) => /* @__PURE__ */ f("button", {
						onClick: () => S(e.id),
						className: t("w-full text-left px-3 py-2.5 border-b border-black/5 dark:border-white/5 transition-colors", e.id !== x && "hover:bg-black/5 dark:hover:bg-white/5"),
						style: e.id === x ? { backgroundColor: "var(--highlight-color)" } : void 0,
						children: [/* @__PURE__ */ d("p", {
							className: "text-sm font-medium text-black/90 dark:text-white/90 truncate",
							children: e.title || n.untitled
						}), /* @__PURE__ */ d("p", {
							className: "text-[11px] text-black/40 dark:text-white/40 mt-0.5",
							children: new Date(e.modifiedAt).toLocaleDateString()
						})]
					}, e.id))
				}),
				/* @__PURE__ */ d("div", {
					className: "p-2 border-t border-black/10 dark:border-white/10 flex justify-end",
					children: /* @__PURE__ */ d("button", {
						onClick: D,
						className: "w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity text-white",
						style: { backgroundColor: "var(--accent-color)" },
						children: /* @__PURE__ */ d(r, { className: "w-4 h-4 text-white" })
					})
				})
			]
		}),
		detail: A ? /* @__PURE__ */ d(v, {
			note: A,
			bodyRef: T,
			onUpdate: k,
			onDelete: O,
			t: n
		}) : null,
		onBack: () => S(null),
		detailTitle: A?.title,
		className: "bg-[#fdf9ef] dark:bg-[#0F1115]",
		sidebarWidth: "w-56"
	});
}
function v({ note: e, bodyRef: t, onUpdate: n, onDelete: r, t: i }) {
	let a = o();
	return /* @__PURE__ */ f("div", {
		className: "flex flex-col h-full bg-[#fdf9ef] dark:bg-[#0F1115] text-black dark:text-white",
		children: [/* @__PURE__ */ f("div", {
			className: "flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0",
			children: [
				a && /* @__PURE__ */ f("button", {
					onClick: a,
					className: "flex items-center gap-0.5 text-accent-active active:opacity-60 transition-opacity shrink-0",
					children: [/* @__PURE__ */ d("svg", {
						className: "w-5 h-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						strokeWidth: 2.5,
						children: /* @__PURE__ */ d("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							d: "M15 19l-7-7 7-7"
						})
					}), /* @__PURE__ */ d("span", {
						className: "text-[14px] font-medium",
						children: i.backLabel
					})]
				}),
				/* @__PURE__ */ d("input", {
					value: e.title,
					onChange: (t) => n(e.id, { title: t.target.value }),
					className: "flex-1 bg-transparent font-semibold text-base outline-none min-w-0",
					placeholder: i.noteTitlePlaceholder
				}),
				/* @__PURE__ */ d("button", {
					onClick: () => r(e.id),
					className: "w-7 h-7 rounded-md flex items-center justify-center hover:bg-red-500/10 text-black/40 dark:text-white/40 hover:text-red-500 transition-colors shrink-0",
					children: /* @__PURE__ */ d(p, { className: "w-3.5 h-3.5" })
				})
			]
		}), /* @__PURE__ */ d("textarea", {
			ref: t,
			value: e.body,
			onChange: (t) => n(e.id, { body: t.target.value }),
			className: "flex-1 p-4 bg-transparent resize-none outline-none text-sm leading-relaxed font-mono placeholder:text-black/20 dark:placeholder:text-white/20",
			placeholder: i.startWriting
		})]
	});
}
//#endregion
export { _ as Notes };
