import { O as e, b as t, v as n, x as r } from "./isArrayLikeObject-BZl-15ir.js";
import { c as i, o as a, r as o, s, t as c } from "./hasIn-o2Us0uVx.js";
import { f as l } from "./_baseMerge-BiGRwuqv.js";
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/flatten.js
function u(e) {
	return e != null && e.length ? o(e, 1) : [];
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_flatRest.js
function d(e) {
	return r(n(e, void 0, u), e + "");
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSet.js
function f(n, r, a, o) {
	if (!e(n)) return n;
	r = i(r, n);
	for (var c = -1, u = r.length, d = u - 1, f = n; f != null && ++c < u;) {
		var p = s(r[c]), m = a;
		if (p === "__proto__" || p === "constructor" || p === "prototype") return n;
		if (c != d) {
			var h = f[p];
			m = o ? o(h, p, f) : void 0, m === void 0 && (m = e(h) ? h : t(r[c + 1]) ? [] : {});
		}
		l(f, p, m), f = f[p];
	}
	return n;
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePickBy.js
function p(e, t, n) {
	for (var r = -1, o = t.length, s = {}; ++r < o;) {
		var c = t[r], l = a(e, c);
		n(l, c) && f(s, i(c, e), l);
	}
	return s;
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePick.js
function m(e, t) {
	return p(e, t, function(t, n) {
		return c(e, n);
	});
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/pick.js
var h = d(function(e, t) {
	return e == null ? {} : m(e, t);
});
//#endregion
export { f as n, u as r, h as t };
