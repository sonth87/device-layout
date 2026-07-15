import { t as e } from "./store-DU55EtUQ.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/apps/IframeApp.tsx
function n({ appId: n }) {
	let r = e((e) => e.apps[n]);
	return r?.iframeUrl ? /* @__PURE__ */ t("iframe", {
		src: r.iframeUrl,
		className: "w-full h-full border-0",
		sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
		title: r.name
	}) : /* @__PURE__ */ t("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: "No URL configured for this app."
	});
}
//#endregion
export { n as IframeApp };
