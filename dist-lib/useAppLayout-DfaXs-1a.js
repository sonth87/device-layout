import { n as e } from "./AppViewport-BDJLAndL.js";
//#region src/hooks/useAppLayout.ts
function t() {
	let { width: t, height: n } = e(), r = t > 0 && t < 480, i = t >= 480 && t < 720;
	return {
		width: t,
		height: n,
		isNarrow: r,
		isMedium: i,
		isWide: t >= 720,
		size: r ? "narrow" : i ? "medium" : "wide",
		cols: (e, t, n) => r ? e : i ? t : n
	};
}
//#endregion
export { t };
