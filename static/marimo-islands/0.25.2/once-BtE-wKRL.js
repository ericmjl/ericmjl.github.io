import { o as e } from "./arrays-CN1djC4k.js";
//#region src/utils/once.ts
function t(e) {
	let t, n = !1;
	return function(...r) {
		return n || (n = !0, t = e.apply(this, r)), t;
	};
}
function n(t) {
	let n, r, i, a = !1;
	return function(...o) {
		if (r === void 0 || !e(o, r)) {
			try {
				n = t.apply(this, o), a = !1, i = void 0;
			} catch (e) {
				a = !0, i = e;
			}
			r = o;
		}
		if (a) throw i;
		return n;
	};
}
//#endregion
export { t as n, n as t };
