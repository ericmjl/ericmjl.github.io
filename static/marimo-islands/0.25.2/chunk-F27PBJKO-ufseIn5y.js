import { t as e } from "./src-CA_m4ONl.js";
import { n as t } from "./chunk-Y2CYZVJY-DKKS1VyV.js";
import { j as n } from "./chunk-DU6HZSFF-BwiyaNpg.js";
import { t as r } from "./dist-DUAh96QY.js";
//#region ../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/chunk-F27PBJKO.mjs
var i = r(), a = /* @__PURE__ */ t((e, t) => {
	let n = e.append("rect");
	if (n.attr("x", t.x), n.attr("y", t.y), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("width", t.width), n.attr("height", t.height), t.name && n.attr("name", t.name), t.rx && n.attr("rx", t.rx), t.ry && n.attr("ry", t.ry), t.attrs !== void 0) for (let e in t.attrs) n.attr(e, t.attrs[e]);
	return t.class && n.attr("class", t.class), n;
}, "drawRect"), o = /* @__PURE__ */ t((e, t) => {
	a(e, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		stroke: t.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), s = /* @__PURE__ */ t((e, t) => {
	let r = t.text.replace(n, " "), i = e.append("text");
	i.attr("x", t.x), i.attr("y", t.y), i.attr("class", "legend"), i.style("text-anchor", t.anchor), t.class && i.attr("class", t.class);
	let a = i.append("tspan");
	return a.attr("x", t.x + t.textMargin * 2), a.text(r), i;
}, "drawText"), c = /* @__PURE__ */ t((e, t, n, r) => {
	let a = e.append("image");
	a.attr("x", t), a.attr("y", n);
	let o = (0, i.sanitizeUrl)(r);
	a.attr("xlink:href", o);
}, "drawImage"), l = /* @__PURE__ */ t((e, t, n, r) => {
	let a = e.append("use");
	a.attr("x", t), a.attr("y", n);
	let o = (0, i.sanitizeUrl)(r);
	a.attr("xlink:href", `#${o}`);
}, "drawEmbeddedImage"), u = /* @__PURE__ */ t(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), d = /* @__PURE__ */ t(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj"), f = /* @__PURE__ */ t(() => {
	let t = e(".mermaidTooltip");
	return t.empty() && (t = e("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100")), t;
}, "createTooltip");
//#endregion
export { a, d as c, c as i, o as n, s as o, l as r, u as s, f as t };
