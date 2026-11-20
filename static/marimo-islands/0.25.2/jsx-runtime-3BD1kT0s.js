import { t as e } from "./rolldown-runtime-Cb76FRpK.js";
//#region ../node_modules/.pnpm/react@19.3.0/node_modules/react/cjs/react-jsx-runtime.production.js
var t = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), n = /* @__PURE__ */ e(((e, n) => {
	n.exports = t();
}));
//#endregion
export { n as t };
