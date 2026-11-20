import { r as e } from "./rolldown-runtime-Cb76FRpK.js";
//#region ../node_modules/.pnpm/@codemirror+legacy-modes@6.5.4/node_modules/@codemirror/legacy-modes/mode/diff.js
var t = /* @__PURE__ */ e({ diff: () => r }), n = {
	"+": "inserted",
	"-": "deleted",
	"@": "meta"
}, r = {
	name: "diff",
	token: function(e) {
		var t = e.string.search(/[\t ]+?$/);
		if (!e.sol() || t === 0) return e.skipToEnd(), ("error " + (n[e.string.charAt(0)] || "")).replace(/ $/, "");
		var r = n[e.peek()] || e.skipToEnd();
		return t === -1 ? e.skipToEnd() : e.pos = t, r;
	}
};
//#endregion
export { t as n, r as t };
