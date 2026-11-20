import { n as e } from "./src-CA_m4ONl.js";
import { n as t } from "./chunk-Y2CYZVJY-DKKS1VyV.js";
import { c as n } from "./chunk-DU6HZSFF-BwiyaNpg.js";
import { p as r } from "./mermaid-CiAXjLpA.js";
import { n as i } from "./mermaid-parser.core-DxuSfYwJ.js";
//#region ../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-27XIBGKW.mjs
var a = { parse: /* @__PURE__ */ t(async (t) => {
	let n = await i("info", t);
	e.debug(n);
}, "parse") }, o = { version: "11.17.2" }, s = {
	parser: a,
	db: { getVersion: /* @__PURE__ */ t(() => o.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ t((t, i, a) => {
		e.debug("rendering info diagram\n" + t);
		let o = r(i);
		n(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${a}`);
	}, "draw") }
};
//#endregion
export { s as diagram };
