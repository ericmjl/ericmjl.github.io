import { u as e } from "./chunk-75Z2AOVW-D7gxIs2Q.js";
import { n as t } from "./src-CA_m4ONl.js";
import { n } from "./chunk-Y2CYZVJY-DKKS1VyV.js";
import { o as r } from "./chunk-4HAMMTFA-D4eFPyFh.js";
//#region ../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-GVQU2GXP.mjs
var i = /* @__PURE__ */ n(({ flowchart: e }) => {
	let t = e?.subGraphTitleMargin?.top ?? 0, n = e?.subGraphTitleMargin?.bottom ?? 0;
	return {
		subGraphTitleTopMargin: t,
		subGraphTitleBottomMargin: n,
		subGraphTitleTotalMargin: t + n
	};
}, "getSubGraphTitleMargins"), a = /* @__PURE__ */ new Map();
async function o(t, n, i) {
	let o, s;
	n.shape === "rect" && (n.shape = n.rx && n.ry ? "roundedRect" : "squareRect");
	let c = n.shape ? r[n.shape] : void 0;
	if (!c) throw Error(`No such shape: ${n.shape}. Please check your syntax.`);
	if (n.link) {
		let e;
		i.config.securityLevel === "sandbox" ? e = "_top" : n.linkTarget && (e = n.linkTarget || "_blank"), o = t.insert("svg:a").attr("xlink:href", n.link).attr("target", e ?? null), s = await c(o, n, i);
	} else s = await c(t, n, i), o = s;
	return o.attr("data-look", e(n.look)), n.tooltip && s.attr("title", n.tooltip), a.set(n.id, o), n.haveCallback && o.attr("class", o.attr("class") + " clickable"), o;
}
n(o, "insertNode");
var s = /* @__PURE__ */ n((e, t) => {
	a.set(t.id, e);
}, "setNodeElem"), c = /* @__PURE__ */ n(() => {
	a.clear();
}, "clear"), l = /* @__PURE__ */ n((e) => {
	let n = a.get(e.id);
	t.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let r = e.diff || 0;
	return e.clusterNode ? n.attr("transform", "translate(" + (e.x + r - e.width / 2) + ", " + (e.y - e.height / 2 - 8) + ")") : n.attr("transform", "translate(" + e.x + ", " + e.y + ")"), r;
}, "positionNode");
//#endregion
export { s as a, l as i, i as n, o as r, c as t };
