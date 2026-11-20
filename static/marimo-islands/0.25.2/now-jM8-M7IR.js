import { N as e, O as t } from "./isArrayLikeObject-BZl-15ir.js";
import { t as n } from "./isSymbol-kQcfYbNX.js";
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
var r = /\s/;
function i(e) {
	for (var t = e.length; t-- && r.test(e.charAt(t)););
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
var a = /^\s+/;
function o(e) {
	return e && e.slice(0, i(e) + 1).replace(a, "");
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
var s = NaN, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, u = /^0o[0-7]+$/i, d = parseInt;
function f(e) {
	if (typeof e == "number") return e;
	if (n(e)) return s;
	if (t(e)) {
		var r = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = t(r) ? r + "" : r;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = o(e);
	var i = l.test(e);
	return i || u.test(e) ? d(e.slice(2), i ? 2 : 8) : c.test(e) ? s : +e;
}
//#endregion
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
var p = function() {
	return e.Date.now();
};
//#endregion
export { f as n, p as t };
