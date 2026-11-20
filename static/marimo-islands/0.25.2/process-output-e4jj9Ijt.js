import { O as e } from "./html-to-image-CZY1pIZH.js";
import { h as t } from "./tooltip-BO1REbqs.js";
import { b as n, y as r } from "./cells-C8iCYvLU.js";
import { b as i } from "./select-BButFi-d.js";
import { n as a } from "./semaphore-89jsoHtS.js";
var o = t("file", [["path", {
	d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
	key: "1oefj6"
}], ["path", {
	d: "M14 2v5a1 1 0 0 0 1 1h5",
	key: "wfsgrz"
}]]), s = t("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]);
//#endregion
//#region src/utils/blob.ts
function c(e) {
	let [t, n] = e.split(",", 2), r = /^data:(.+);base64$/.exec(t)?.[1], i = atob(n), a = i.length, o = new Uint8Array(a);
	for (let e = 0; e < a; e++) o[e] = i.charCodeAt(e);
	return new Blob([o], { type: r });
}
function l({ contents: t, mimeType: n, isBase64: r }) {
	return r ? c(e(t, n)) : new Blob([t], { type: n });
}
//#endregion
//#region src/core/dom/events.ts
function u(e) {
	return () => ({
		TYPE: e,
		is(t) {
			return t.type === e;
		},
		create(t) {
			return new CustomEvent(e, t);
		}
	});
}
var d = u("marimo-value-input")(), f = u("marimo-value-update")(), p = u("marimo-value-ready")(), m = u("marimo-incoming-message")();
function h(e, t) {
	return d.create({
		bubbles: !0,
		composed: !0,
		detail: {
			value: e,
			element: t
		}
	});
}
//#endregion
//#region src/utils/fileToBase64.ts
var g = 5;
function _(e, t) {
	return new Promise((n) => {
		let r = new FileReader();
		r.readAsDataURL(e), r.onload = (e) => {
			if (e.target?.result) {
				let r = e.target.result;
				n(t === "base64" ? r.slice(r.indexOf(",") + 1) : r);
			}
		};
	});
}
function v(e) {
	return a(e, g, async (e) => {
		let t = await _(e, "base64");
		return [e.name, t];
	});
}
//#endregion
//#region src/components/editor/output/console/process-output.ts
function y(e) {
	return e.mimetype.startsWith("application/vnd.marimo") || e.mimetype === "text/html" ? n(i.asString(e.data)) : r(i.asString(e.data));
}
//#endregion
export { d as a, h as c, s as d, o as f, m as i, c as l, _ as n, p as o, v as r, f as s, y as t, l as u };
