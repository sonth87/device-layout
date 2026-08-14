import { t as e } from "./store-DNT7LGUT.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/apps/MdxApp.tsx
function r({ appId: r }) {
	let i = e((e) => e.apps[r]);
	return /* @__PURE__ */ n("div", {
		className: "p-6 max-w-prose mx-auto prose dark:prose-invert text-sm",
		children: [/* @__PURE__ */ t("h1", { children: i?.name ?? "Content" }), /* @__PURE__ */ n("p", {
			className: "text-black/50 dark:text-white/50",
			children: [
				"MDX content for slug ",
				/* @__PURE__ */ t("code", { children: i?.mdxSlug }),
				" would load here. Add ",
				/* @__PURE__ */ t("code", { children: "@next/mdx" }),
				" and create ",
				/* @__PURE__ */ n("code", { children: [
					"content/",
					i?.mdxSlug,
					".mdx"
				] }),
				" to populate this window."
			]
		})]
	});
}
//#endregion
export { r as MdxApp };
