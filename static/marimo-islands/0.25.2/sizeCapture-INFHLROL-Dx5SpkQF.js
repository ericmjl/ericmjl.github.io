import { n as e } from "./chunk-Y2CYZVJY-DKKS1VyV.js";
//#region ../node_modules/.pnpm/mermaid@11.17.2/node_modules/mermaid/dist/chunks/mermaid.core/sizeCapture-INFHLROL.mjs
var t = 1;
function n() {
	if (!(typeof globalThis > "u")) return globalThis;
}
e(n, "getCaptureGlobal");
function r() {
	return !!n()?.mermaidCaptureSizes;
}
e(r, "shouldCaptureSizes");
function i() {
	return typeof location > "u" ? "browser-dev" : `${location.pathname}${location.search}`;
}
e(i, "capturedFromLocation");
function a(e, t) {
	let r = n();
	if (!r) return;
	let i = t.node(), a = ((i && "ownerSVGElement" in i ? i.ownerSVGElement : null) ?? i)?.id ?? "(unknown)";
	r.mermaidCapturedSizes ??= [];
	let o = {
		svgId: a,
		sizes: e
	};
	r.mermaidCapturedSizes.push(o), r.mermaidLastCapturedSizes = o;
}
e(a, "emitCapturedSizes");
function o(e, n) {
	let r = [];
	for (let e of n.nodes) e.isGroup || r.push({
		id: e.id,
		width: e.width ?? 0,
		height: e.height ?? 0
	});
	r.length !== 0 && a({
		metadata: {
			captureVersion: t,
			capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
			capturedFrom: i()
		},
		nodes: r
	}, e);
}
e(o, "captureNodeSizes");
//#endregion
export { o as captureNodeSizes };
