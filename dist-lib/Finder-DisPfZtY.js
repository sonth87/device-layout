import { t as e } from "./store-C0-yHQqC.js";
import { t } from "./utils-B6YmNDS2.js";
import { t as n } from "./createLucideIcon--WjuKCts.js";
import { t as r } from "./chevron-left-DtSiqYaQ.js";
import { t as i } from "./chevron-right-BcSxNxws.js";
import { n as a, t as o } from "./folder-C9z1AA3T.js";
import { t as s } from "./grid-3x3-CZiMuCC6.js";
import { n as c, t as l } from "./music-D8WdwHqS.js";
import { t as u } from "./list-Dn-fquzI.js";
import { t as d } from "./monitor-CDDW7biH.js";
import { t as f } from "./useTranslation-Cx98_kLA.js";
import { t as p } from "./useAppLayout-DfaXs-1a.js";
import { useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
var _ = n("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), v = n("film", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M7 3v18",
		key: "bbkbws"
	}],
	["path", {
		d: "M3 7.5h4",
		key: "zfgn84"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 16.5h4",
		key: "1230mu"
	}],
	["path", {
		d: "M17 3v18",
		key: "in4fa5"
	}],
	["path", {
		d: "M17 7.5h4",
		key: "myr1c1"
	}],
	["path", {
		d: "M17 16.5h4",
		key: "go4c1d"
	}]
]), y = n("hard-drive", [
	["path", {
		d: "M10 16h.01",
		key: "1bzywj"
	}],
	["path", {
		d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
		key: "18tbho"
	}],
	["path", {
		d: "M21.946 12.013H2.054",
		key: "zqlbp7"
	}],
	["path", {
		d: "M6 16h.01",
		key: "1pmjb7"
	}]
]), b = n("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]), x = {
	en: {
		favourites: "Favourites",
		emptyFolder: "Empty folder",
		name: "Name",
		kind: "Kind",
		size: "Size",
		folder: "Folder",
		file: "File",
		home: "Home",
		desktop: "Desktop",
		downloads: "Downloads",
		documents: "Documents",
		music: "Music",
		pictures: "Pictures",
		root: "Root"
	},
	vi: {
		favourites: "Mục ưa thích",
		emptyFolder: "Thư mục trống",
		name: "Tên",
		kind: "Loại",
		size: "Kích thước",
		folder: "Thư mục",
		file: "Tệp tin",
		home: "Trang chủ",
		desktop: "Màn hình chính",
		downloads: "Tải về",
		documents: "Tài liệu",
		music: "Nhạc",
		pictures: "Hình ảnh",
		root: "Thư mục gốc"
	},
	ja: {
		favourites: "よく使う項目",
		emptyFolder: "空のフォルダ",
		name: "名前",
		kind: "種類",
		size: "サイズ",
		folder: "フォルダ",
		file: "ファイル",
		home: "ホーム",
		desktop: "デスクトップ",
		downloads: "ダウンロード",
		documents: "書類",
		music: "ミュージック",
		pictures: "ピクチャ",
		root: "ルート"
	},
	ko: {
		favourites: "즐겨찾기",
		emptyFolder: "빈 폴더",
		name: "이름",
		kind: "종류",
		size: "크기",
		folder: "폴더",
		file: "파일",
		home: "홈",
		desktop: "데스크탑",
		downloads: "다운로드",
		documents: "문서",
		music: "음악",
		pictures: "사진",
		root: "루트"
	},
	zh: {
		favourites: "个人收藏",
		emptyFolder: "空文件夹",
		name: "名称",
		kind: "种类",
		size: "大小",
		folder: "文件夹",
		file: "文件",
		home: "主屋",
		desktop: "桌面",
		downloads: "下载",
		documents: "文稿",
		music: "音乐",
		pictures: "图片",
		root: "根目录"
	},
	th: {
		favourites: "รายการโปรด",
		emptyFolder: "โฟลเดอร์ว่างเปล่า",
		name: "ชื่อ",
		kind: "ประเภท",
		size: "ขนาด",
		folder: "โฟลเดอร์",
		file: "ไฟล์",
		home: "หน้าแรก",
		desktop: "เดสก์ท็อป",
		downloads: "ดาวน์โหลด",
		documents: "เอกสาร",
		music: "เพลง",
		pictures: "รูปภาพ",
		root: "รูท"
	}
};
function S(e, t = 10) {
	if (e.type === "dir") return /* @__PURE__ */ h(o, { className: `w-${t} h-${t} text-blue-400` });
	let n = e.name.split(".").pop()?.toLowerCase() ?? "";
	return [
		"jpg",
		"jpeg",
		"png",
		"gif",
		"webp",
		"svg"
	].includes(n) ? /* @__PURE__ */ h(c, { className: `w-${t} h-${t} text-green-400` }) : [
		"mp3",
		"flac",
		"aac",
		"wav",
		"m4a"
	].includes(n) ? /* @__PURE__ */ h(l, { className: `w-${t} h-${t} text-orange-400` }) : [
		"mp4",
		"mov",
		"avi",
		"mkv"
	].includes(n) ? /* @__PURE__ */ h(v, { className: `w-${t} h-${t} text-purple-400` }) : /* @__PURE__ */ h(a, { className: `w-${t} h-${t} text-gray-400` });
}
function C(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`;
}
function w({ windowId: n, appId: v }) {
	let { language: w } = f(), T = x[w] || x.en, E = e((e) => e.vfsLs), [D, O] = m("/Users/user"), [k, A] = m([]), [j, M] = m(null), [N, P] = m("icon"), { isNarrow: F } = p(), I = E(D).sort((e, t) => e.type === t.type ? e.name.localeCompare(t.name) : e.type === "dir" ? -1 : 1), L = (e) => {
		A((e) => [...e, D]), O(e), M(null);
	}, R = () => {
		let e = k[k.length - 1];
		e && (A((e) => e.slice(0, -1)), O(e), M(null));
	}, z = D.split("/").filter(Boolean), B = [
		{
			name: T.home,
			path: "/Users/user",
			icon: /* @__PURE__ */ h(b, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.desktop,
			path: "/Users/user/Desktop",
			icon: /* @__PURE__ */ h(d, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.downloads,
			path: "/Users/user/Downloads",
			icon: /* @__PURE__ */ h(_, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.documents,
			path: "/Users/user/Documents",
			icon: /* @__PURE__ */ h(a, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.music,
			path: "/Users/user/Music",
			icon: /* @__PURE__ */ h(l, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.pictures,
			path: "/Users/user/Pictures",
			icon: /* @__PURE__ */ h(c, { className: "w-3.5 h-3.5" })
		},
		{
			name: T.root,
			path: "/",
			icon: /* @__PURE__ */ h(y, { className: "w-3.5 h-3.5" })
		}
	], V = /* @__PURE__ */ g("div", {
		className: "flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
		children: [/* @__PURE__ */ g("div", {
			className: "flex shrink-0 items-center gap-2 border-b border-black/10 dark:border-white/10 px-3 py-2",
			children: [
				/* @__PURE__ */ h("button", {
					onClick: R,
					disabled: k.length === 0,
					className: "rounded p-1 transition-colors hover:bg-black/10 disabled:opacity-30 dark:hover:bg-white/10 shrink-0",
					children: /* @__PURE__ */ h(r, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ g("div", {
					className: "flex flex-1 items-center gap-0.5 overflow-hidden text-xs min-w-0",
					children: [/* @__PURE__ */ h("button", {
						onClick: () => L("/"),
						className: "shrink-0 hover:underline",
						children: "/"
					}), z.map((e, n) => {
						let r = "/" + z.slice(0, n + 1).join("/");
						return /* @__PURE__ */ g("span", {
							className: "flex min-w-0 items-center gap-0.5",
							children: [/* @__PURE__ */ h(i, { className: "h-3 w-3 shrink-0 text-black/30 dark:text-white/30" }), /* @__PURE__ */ h("button", {
								onClick: () => L(r),
								className: t("hover:underline", n === z.length - 1 ? "font-medium truncate" : "shrink-0"),
								children: e
							})]
						}, r);
					})]
				}),
				/* @__PURE__ */ g("div", {
					className: "flex shrink-0",
					children: [/* @__PURE__ */ h("button", {
						onClick: () => P("icon"),
						className: t("rounded-l border border-black/15 dark:border-white/15 px-2 py-0.5 text-xs transition-colors", N === "icon" ? "text-white border-transparent" : "hover:bg-black/5 dark:hover:bg-white/10"),
						style: N === "icon" ? {
							backgroundColor: "var(--accent-color)",
							borderColor: "var(--accent-color)"
						} : void 0,
						children: /* @__PURE__ */ h(s, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ h("button", {
						onClick: () => P("list"),
						className: t("rounded-r border border-l-0 border-black/15 dark:border-white/15 px-2 py-0.5 text-xs transition-colors", N === "list" ? "text-white border-transparent" : "hover:bg-black/5 dark:hover:bg-white/10"),
						style: N === "list" ? {
							backgroundColor: "var(--accent-color)",
							borderColor: "var(--accent-color)"
						} : void 0,
						children: /* @__PURE__ */ h(u, { className: "h-3.5 w-3.5" })
					})]
				})
			]
		}), /* @__PURE__ */ h("div", {
			className: "flex-1 overflow-auto p-3",
			children: I.length === 0 ? /* @__PURE__ */ g("div", {
				className: "flex h-full flex-col items-center justify-center gap-2 text-sm text-black/30 dark:text-white/30",
				children: [/* @__PURE__ */ h(o, { className: "h-12 w-12 opacity-20" }), /* @__PURE__ */ h("p", { children: T.emptyFolder })]
			}) : N === "icon" ? /* @__PURE__ */ h("div", {
				className: "grid gap-3",
				style: { gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))" },
				children: I.map((e) => /* @__PURE__ */ g("button", {
					onClick: () => {
						e.type === "dir" ? L(e.path) : M(e.path);
					},
					className: t("flex flex-col items-center gap-1.5 rounded-lg p-2 text-center transition-colors", j !== e.path && "hover:bg-black/5 dark:hover:bg-white/5"),
					style: j === e.path ? { backgroundColor: "var(--highlight-color)" } : void 0,
					children: [S(e), /* @__PURE__ */ h("span", {
						className: "w-full truncate text-xs",
						children: e.name
					})]
				}, e.path))
			}) : /* @__PURE__ */ g("table", {
				className: "w-full text-xs",
				children: [/* @__PURE__ */ h("thead", { children: /* @__PURE__ */ g("tr", {
					className: "border-b border-black/10 dark:border-white/10",
					children: [
						/* @__PURE__ */ h("th", {
							className: "py-1 text-left font-medium text-black/60 dark:text-white/60",
							children: T.name
						}),
						!F && /* @__PURE__ */ h("th", {
							className: "py-1 text-left font-medium text-black/60 dark:text-white/60",
							children: T.kind
						}),
						/* @__PURE__ */ h("th", {
							className: "py-1 text-right font-medium text-black/60 dark:text-white/60",
							children: T.size
						})
					]
				}) }), /* @__PURE__ */ h("tbody", { children: I.map((e) => /* @__PURE__ */ g("tr", {
					onClick: () => {
						e.type === "dir" ? L(e.path) : M(e.path);
					},
					className: t("cursor-pointer hover:bg-black/5 dark:hover:bg-white/5"),
					style: j === e.path ? { backgroundColor: "var(--highlight-color)" } : void 0,
					children: [
						/* @__PURE__ */ g("td", {
							className: "flex items-center gap-2 py-1.5",
							children: [/* @__PURE__ */ h("span", { children: S(e, 4) }), /* @__PURE__ */ h("span", {
								className: "truncate",
								children: e.name
							})]
						}),
						!F && /* @__PURE__ */ h("td", {
							className: "py-1.5 text-black/50 dark:text-white/50",
							children: e.type === "dir" ? T.folder : T.file
						}),
						/* @__PURE__ */ h("td", {
							className: "py-1.5 text-right text-black/50 dark:text-white/50",
							children: e.type === "file" ? C(new TextEncoder().encode(e.content).byteLength) : "—"
						})
					]
				}, e.path)) })]
			})
		})]
	});
	return F ? V : /* @__PURE__ */ g("div", {
		className: "flex h-full bg-white dark:bg-[#0F1115] text-black dark:text-white",
		children: [/* @__PURE__ */ g("aside", {
			className: "w-40 shrink-0 border-r border-black/10 dark:border-white/10 overflow-y-auto bg-neutral-100/80 dark:bg-[#11141B] p-2",
			children: [/* @__PURE__ */ h("p", {
				className: "mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40",
				children: T.favourites
			}), B.map((e) => /* @__PURE__ */ g("button", {
				onClick: () => L(e.path),
				className: t("flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-xs transition-colors", D !== e.path && "hover:bg-black/10 dark:hover:bg-white/10"),
				style: D === e.path ? { backgroundColor: "var(--highlight-color)" } : void 0,
				children: [/* @__PURE__ */ h("span", {
					className: "text-accent-active",
					children: e.icon
				}), /* @__PURE__ */ h("span", {
					style: D === e.path ? {
						color: "var(--accent-color)",
						fontWeight: 500
					} : void 0,
					children: e.name
				})]
			}, e.path))]
		}), /* @__PURE__ */ h("div", {
			className: "flex-1 min-w-0",
			children: V
		})]
	});
}
//#endregion
export { w as Finder };
