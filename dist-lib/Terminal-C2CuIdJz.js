import { t as e } from "./store-D89CiGUZ.js";
import { t } from "./useTranslation-ByRogKHu.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/apps/Terminal.tsx
var s = {
	en: { welcome: "Desktop Layout OS — Terminal v1.0\nType \"help\" for available commands.\n" },
	vi: { welcome: "Hệ điều hành Desktop Layout — Terminal v1.0\nNhập \"help\" để hiển thị các lệnh có sẵn.\n" },
	ja: { welcome: "Desktop Layout OS — ターミナル v1.0\n利用可能なコマンドについては \"help\" を入力してください。\n" },
	ko: { welcome: "Desktop Layout OS — 터미널 v1.0\n사용 가능한 명령어를 보려면 \"help\"를 입력하세요.\n" },
	zh: { welcome: "Desktop Layout OS — 终端 v1.0\n输入 \"help\" 查看可用命令。\n" },
	th: { welcome: "ระบบปฏิบัติการ Desktop Layout — เทอร์มินัล v1.0\nพิมพ์ \"help\" เพื่อดูคำสั่งที่ใช้งานได้\n" }
};
function c(e) {
	return {
		help: () => ({ output: "Available: help, echo, clear, ls, pwd, cat, mkdir, rm, mv, touch, date, uname, whoami, tree" }),
		echo: (e) => ({ output: e.join(" ") }),
		pwd: (e, t) => ({ output: t }),
		whoami: () => ({ output: "user" }),
		date: () => ({ output: (/* @__PURE__ */ new Date()).toString() }),
		uname: () => ({ output: "DesktopLayout OS 1.0.0 (Next.js) arm64" }),
		ls: (t, n) => {
			let r = t[0] ? t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/") : n, i = e.vfsLs(r);
			return e.vfsExists(r) ? i.length === 0 ? { output: "" } : { output: i.map((e) => e.type === "dir" ? `\x1b[34m${e.name}/\x1b[0m` : e.name).join("  ") } : { output: `ls: ${r}: No such file or directory` };
		},
		cat: (t, n) => {
			if (!t[0]) return { output: "cat: missing operand" };
			let r = t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/"), i = e.vfsReadFile(r);
			return i === null ? { output: `cat: ${t[0]}: No such file or directory` } : { output: i };
		},
		mkdir: (t, n) => {
			if (!t[0]) return { output: "mkdir: missing operand" };
			let r = t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/");
			return e.vfsMkdir(r), { output: "" };
		},
		touch: (t, n) => {
			if (!t[0]) return { output: "touch: missing operand" };
			let r = t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/");
			return e.vfsExists(r) || e.vfsWriteFile(r, ""), { output: "" };
		},
		rm: (t, n) => {
			if (!t[0]) return { output: "rm: missing operand" };
			t.filter((e) => e.startsWith("-"));
			let r = t.find((e) => !e.startsWith("-")) ?? "", i = r.startsWith("/") ? r : `${n}/${r}`.replace("//", "/");
			return e.vfsExists(i) ? (e.vfsRm(i), { output: "" }) : { output: `rm: ${r}: No such file or directory` };
		},
		mv: (t, n) => {
			if (t.length < 2) return { output: "mv: missing operand" };
			let r = t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/"), i = t[1].startsWith("/") ? t[1] : `${n}/${t[1]}`.replace("//", "/");
			return e.vfsExists(r) ? (e.vfsMv(r, i), { output: "" }) : { output: `mv: ${t[0]}: No such file or directory` };
		},
		cd: (t, n) => {
			let r = t[0] ? t[0] === ".." ? n.split("/").slice(0, -1).join("/") || "/" : t[0].startsWith("/") ? t[0] : `${n}/${t[0]}`.replace("//", "/") : "/Users/user";
			return e.vfsExists(r) ? e.vfs[r]?.type === "file" ? { output: `cd: ${t[0]}: Not a directory` } : {
				output: "",
				newCwd: r
			} : { output: `cd: ${t[0]}: No such file or directory` };
		},
		tree: (t, n) => {
			let r = [n], i = (t, n, a) => {
				if (a > 3) return;
				let o = e.vfsLs(t).sort((e, t) => e.name.localeCompare(t.name));
				o.forEach((e, t) => {
					let s = t === o.length - 1;
					r.push(`${n}${s ? "└── " : "├── "}${e.name}${e.type === "dir" ? "/" : ""}`), e.type === "dir" && i(e.path, n + (s ? "    " : "│   "), a + 1);
				});
			};
			return i(n, "", 0), { output: r.join("\n") };
		}
	};
}
function l({ windowId: l, appId: u }) {
	e.getState;
	let { language: d } = t(), f = s[d] || s.en, [p, m] = i([]);
	n(() => {
		m([{
			type: "output",
			text: f.welcome
		}]);
	}, [f.welcome]);
	let [h, g] = i(""), [_, v] = i("/Users/user"), [y, b] = i([]), [x, S] = i(-1), C = r(null), w = r(null), T = e();
	n(() => {
		C.current?.scrollIntoView({ behavior: "smooth" });
	}, [p]);
	let E = (e) => {
		let t = e.trim();
		if (!t) {
			m((e) => [...e, {
				type: "input",
				text: ""
			}]);
			return;
		}
		if (t === "clear") {
			m([]), g("");
			return;
		}
		let n = [{
			type: "input",
			text: t
		}], [r, ...i] = t.split(/\s+/), a = c(T)[r];
		if (a) {
			let e = a(i, _);
			e.output && n.push({
				type: "output",
				text: e.output
			}), e.newCwd && v(e.newCwd);
		} else n.push({
			type: "error",
			text: `${r}: command not found`
		});
		b((e) => [t, ...e]), m((e) => [...e, ...n]), g(""), S(-1);
	}, D = (e) => {
		if (e.key === "Enter") E(h);
		else if (e.key === "ArrowUp") {
			e.preventDefault();
			let t = Math.min(x + 1, y.length - 1);
			S(t), g(y[t] ?? "");
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			let t = Math.max(x - 1, -1);
			S(t), g(t === -1 ? "" : y[t] ?? "");
		} else e.key === "c" && e.ctrlKey && (g(""), m((e) => [...e, {
			type: "input",
			text: `${h}^C`
		}]));
	};
	`${_.replace("/Users/user", "~")}`;
	let O = (e) => e.replace(/\x1b\[[0-9;]*m/g, "");
	return /* @__PURE__ */ o("div", {
		className: "flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[12px] leading-5 p-3 cursor-text",
		onClick: () => w.current?.focus(),
		children: [/* @__PURE__ */ o("div", {
			className: "flex-1 overflow-auto",
			children: [p.map((e, t) => /* @__PURE__ */ a("div", { children: e.type === "input" ? /* @__PURE__ */ o("div", {
				className: "flex flex-wrap",
				children: [
					/* @__PURE__ */ a("span", {
						className: "text-blue-400",
						children: "user"
					}),
					/* @__PURE__ */ a("span", { children: "@" }),
					/* @__PURE__ */ a("span", {
						className: "text-green-400",
						children: "desktop"
					}),
					/* @__PURE__ */ a("span", { children: ":" }),
					/* @__PURE__ */ a("span", {
						className: "text-yellow-400",
						children: _.replace("/Users/user", "~")
					}),
					/* @__PURE__ */ o("span", { children: ["$ ", e.text] })
				]
			}) : /* @__PURE__ */ a("div", {
				className: e.type === "error" ? "text-red-400" : "text-neutral-300",
				children: /* @__PURE__ */ a("pre", {
					className: "whitespace-pre-wrap font-mono",
					children: O(e.text)
				})
			}) }, t)), /* @__PURE__ */ a("div", { ref: C })]
		}), /* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-center mt-1 gap-0",
			children: [
				/* @__PURE__ */ a("span", {
					className: "text-blue-400",
					children: "user"
				}),
				/* @__PURE__ */ a("span", { children: "@" }),
				/* @__PURE__ */ a("span", {
					className: "text-green-400",
					children: "desktop"
				}),
				/* @__PURE__ */ a("span", { children: ":" }),
				/* @__PURE__ */ a("span", {
					className: "text-yellow-400",
					children: _.replace("/Users/user", "~")
				}),
				/* @__PURE__ */ a("span", { children: "$\xA0" }),
				/* @__PURE__ */ a("input", {
					ref: w,
					autoFocus: !0,
					value: h,
					onChange: (e) => g(e.target.value),
					onKeyDown: D,
					className: "flex-1 bg-transparent outline-none text-[#d4d4d4] caret-white min-w-0",
					spellCheck: !1,
					autoCapitalize: "none",
					autoCorrect: "off"
				})
			]
		})]
	});
}
//#endregion
export { l as Terminal };
