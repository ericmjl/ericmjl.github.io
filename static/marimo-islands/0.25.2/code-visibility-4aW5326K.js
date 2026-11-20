import { g as e } from "./button-CvjkwdSk.js";
import { t } from "./compiler-runtime-CldRdSsv.js";
import { H as n, V as r } from "./cells-C8iCYvLU.js";
import { C as i } from "./select-BButFi-d.js";
import { b as a, c as o, g as s, v as c } from "./toDate-BNJf01u1.js";
import { C as l, E as u, a as d, b as f } from "./useTheme-CRnjkku0.js";
//#region src/core/islands/state.ts
var p = t(), m = u(!1), h = u(/* @__PURE__ */ new Set()), g = u((e) => e(h)?.size === 0), _ = u(!1), v = u((e) => e(_) && e(m) === !1), y = u({
	isInstantiated: !1,
	error: null
}), b = u(!1);
//#endregion
//#region src/core/meta/state.ts
function x() {
	try {
		return window.__MARIMO_MOUNT_CONFIG__.version;
	} catch {
		return e.warn("Failed to get version from mount config"), null;
	}
}
var S = x() || "0.25.2", C = u(S), w = u(!0);
u(null);
//#endregion
//#region src/core/wasm/state.ts
var T = u({
	kind: "loading",
	message: "Initializing..."
}), E = {
	canHealthCheck: !1,
	canShutdown: !1,
	canRestart: !1,
	supportsLsp: !1
}, D = {
	kind: "wasm",
	label: "Pyodide",
	capabilities: E,
	state: u((e) => {
		let t = e(T);
		switch (t.kind) {
			case "loading": return {
				kind: "connecting",
				progress: { label: t.message }
			};
			case "ready": return { kind: "ready" };
			case "error": return {
				kind: "failed",
				error: {
					message: t.message,
					errorKind: "init"
				}
			};
		}
	})
}, O = {
	kind: "remote",
	label: "Kernel",
	capabilities: {
		canHealthCheck: !0,
		canShutdown: !0,
		canRestart: !0,
		supportsLsp: !0
	},
	state: u((e) => {
		let t = e(r);
		switch (t.state) {
			case n.OPEN: return { kind: "ready" };
			case n.CONNECTING: return {
				kind: "connecting",
				progress: { label: "Connecting…" }
			};
			case n.NOT_STARTED: return {
				kind: "connecting",
				progress: { label: "Not connected" }
			};
			case n.CLOSING:
			case n.CLOSED: return {
				kind: "failed",
				error: {
					message: t.state === n.CLOSED ? t.reason : "Disconnecting",
					errorKind: "runtime"
				}
			};
		}
	})
}, k = {
	kind: "static",
	label: "Static",
	capabilities: E,
	state: u({ kind: "ready" })
}, A = {
	kind: "islands",
	label: "Islands",
	capabilities: E,
	state: u((e) => {
		let t = e(m);
		return t === !0 ? { kind: "ready" } : typeof t == "string" ? {
			kind: "failed",
			error: {
				message: t,
				errorKind: "init"
			}
		} : {
			kind: "connecting",
			progress: { label: "Initializing islands…" }
		};
	})
};
function j() {
	return o() ? k : f() ? A : a() ? D : O;
}
var M = u(j());
u((e) => {
	let t = e(M);
	return e(t.state).kind !== "ready" || t.kind === "static" ? !1 : t.kind !== "remote" || e(y).isInstantiated;
});
//#endregion
//#region src/core/meta/code-visibility.ts
function N(e) {
	let t = (0, p.c)(2), n = l(s), { mode: r } = l(c), a = l(w), o = l(M).kind;
	if (n && o === "remote") return !0;
	switch (r) {
		case "edit":
		case "present": return !0;
		case "home":
		case "gallery": return !1;
		case "read": {
			if (!a || new URLSearchParams(window.location.search).get(d.includeCode) === "false") return !1;
			let n;
			return t[0] === e ? n = t[1] : (n = e.some(P), t[0] = e, t[1] = n), n;
		}
		default: return i(r), !1;
	}
}
function P(e) {
	return !!e.code;
}
//#endregion
export { b as a, m as c, _ as d, w as i, h as l, M as n, y as o, C as r, g as s, N as t, v as u };
