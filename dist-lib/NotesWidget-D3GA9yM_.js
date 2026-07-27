import { t as e } from "./sticky-note-B3aggOnm.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/widgets/built-in/NotesWidget.tsx
function r({ size: r }) {
	return /* @__PURE__ */ n("div", {
		className: "w-full h-full flex flex-col bg-[#ffd60a]/20 p-4",
		children: [/* @__PURE__ */ n("div", {
			className: "flex items-center gap-2 mb-3",
			children: [/* @__PURE__ */ t(e, { className: "w-3.5 h-3.5 text-black/50" }), /* @__PURE__ */ t("p", {
				className: "text-black/50 text-[11px] font-semibold",
				children: "NOTES"
			})]
		}), /* @__PURE__ */ t("p", {
			className: "text-black/80 text-[13px] font-medium leading-snug line-clamp-3",
			children: "No recent notes. Open Notes to start writing."
		})]
	});
}
//#endregion
export { r as NotesWidget };
