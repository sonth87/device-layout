import "react";
//#region src/services/browser-service.ts
var e = class {
	isElectron() {
		return !1;
	}
	async navigate(e) {
		return { id: "web-session" };
	}
	async back(e) {}
	async forward(e) {}
	async reload(e) {}
	async openExternal(e) {
		window.open(e, "_blank", "noopener,noreferrer");
	}
}, t = class {
	constructor() {
		this.electron = typeof window < "u" && window.electronAPI || null;
	}
	isElectron() {
		return this.electron !== null;
	}
	async navigate(e) {
		if (!this.electron?.browser?.navigate) return console.warn("Electron API not available"), { id: "electron-session" };
		try {
			return await this.electron.browser.navigate(e);
		} catch (e) {
			throw console.error("Failed to navigate:", e), e;
		}
	}
	async back(e) {
		if (this.electron?.browser?.back) try {
			await this.electron.browser.back(e);
		} catch (e) {
			console.error("Failed to go back:", e);
		}
	}
	async forward(e) {
		if (this.electron?.browser?.forward) try {
			await this.electron.browser.forward(e);
		} catch (e) {
			console.error("Failed to go forward:", e);
		}
	}
	async reload(e) {
		if (this.electron?.browser?.reload) try {
			await this.electron.browser.reload(e);
		} catch (e) {
			console.error("Failed to reload:", e);
		}
	}
	async openExternal(e) {
		if (this.electron?.shell?.openExternal) try {
			await this.electron.shell.openExternal(e);
		} catch (e) {
			console.error("Failed to open external:", e);
		}
	}
};
function n() {
	return typeof window > "u" ? new e() : window.electronAPI !== void 0 || window.require !== void 0 && window.require("electron") ? (console.log("[Browser Service] Running in Electron environment"), new t()) : (console.log("[Browser Service] Running in web environment"), new e());
}
var r = n();
//#endregion
//#region src/hooks/useBrowser.ts
function i() {
	return r;
}
//#endregion
export { i as t };
