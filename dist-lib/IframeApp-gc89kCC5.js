import { t as e } from "./store-XIGE1L5-.js";
import { t } from "./useBrowser-DEKA4mMw.js";
import { useEffect as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/apps/IframeApp.tsx
function i({ appId: i }) {
	let a = e((e) => e.apps[i]), o = t();
	return n(() => {
		console.log(`[IframeApp:${i}] Initialized with ${o.isElectron() ? "Electron" : "Web"} provider`);
	}, [i, o]), a?.iframeUrl ? /* @__PURE__ */ r("iframe", {
		src: a.iframeUrl,
		className: "w-full h-full border-0",
		sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
		title: a.name
	}) : /* @__PURE__ */ r("div", {
		className: "flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40",
		children: "No URL configured for this app."
	});
}
//#endregion
export { i as IframeApp };
