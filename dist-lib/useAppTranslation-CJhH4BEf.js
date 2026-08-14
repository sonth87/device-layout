import { t as e } from "./store-Bjl9rhnp.js";
//#region src/hooks/useAppTranslation.ts
function t(t, n) {
	let r = e((e) => e.language) || "en", i = e((e) => e.apps), a = n ?? i[t]?.locale;
	if (!a) return {
		t: {},
		lang: r,
		isSystemLang: !0
	};
	let o = a[r], s = o != null;
	return {
		t: s ? o : a.en,
		lang: s ? r : "en",
		isSystemLang: s
	};
}
//#endregion
export { t };
