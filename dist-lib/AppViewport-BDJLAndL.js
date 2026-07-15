import { createContext as e, startTransition as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/apps/AppViewport.tsx
var s = e({
	width: 0,
	height: 0
});
function c({ children: e }) {
	let n = i(null), [c, l] = a({
		width: 0,
		height: 0
	});
	return r(() => {
		let e = n.current;
		if (!e) return;
		let r = new ResizeObserver(([e]) => {
			let { width: n, height: r } = e.contentRect;
			t(() => {
				l({
					width: n,
					height: r
				});
			});
		});
		return r.observe(e), () => r.disconnect();
	}, []), /* @__PURE__ */ o(s.Provider, {
		value: c,
		children: /* @__PURE__ */ o("div", {
			ref: n,
			className: "h-full w-full",
			children: e
		})
	});
}
function l() {
	return n(s);
}
//#endregion
export { l as n, c as t };
