import { At as e, N as t, b as n, d as r, jt as i, kt as a } from "./cells-C8iCYvLU.js";
import { C as o } from "./select-BButFi-d.js";
//#region src/core/errors/error-entries.ts
function s(t) {
	if (e(t.mimetype)) {
		if (!Array.isArray(t.data)) return null;
		let e = t.data.filter((e) => !e.type.includes("ancestor"));
		return e.length === 0 ? null : { errorData: e };
	}
	return i(t.mimetype) ? typeof t.data != "string" || t.data.length === 0 ? null : {
		errorData: [],
		tracebackHtml: t.data
	} : null;
}
function c(e) {
	return e.some((e) => "traceback" in e && e.traceback);
}
function l(e) {
	let t = e?.find((e) => i(e.mimetype));
	if (!(!t || typeof t.data != "string" || t.data.length === 0)) return t.data;
}
function u(e, t) {
	if (e.tracebackHtml) return e.tracebackHtml;
	if (!c(e.errorData)) return l(t);
}
function d(e) {
	let { cellIds: n, cellRuntime: i, cellData: o } = e.get(r), c = [];
	for (let [e, r] of n.inOrderIds.entries()) {
		let n = i[r], l = n.output;
		if (!l || !a(l.mimetype)) continue;
		let d = s(l);
		if (!d) continue;
		let f = t(o[r].name, e), p = o[r].lastCodeRun ?? o[r].code;
		c.push({
			cellId: r,
			cellName: f,
			cellCode: p,
			errorData: d.errorData,
			tracebackHtml: u(d, n.consoleOutputs)
		});
	}
	return c;
}
function f(e) {
	return e.type === "setup-refs" ? "The setup cell cannot have references" : e.type === "cycle" ? "This cell is in a cycle" : e.type === "multiple-defs" ? `The variable '${e.name}' was defined by another cell` : e.type === "import-star" || e.type === "ancestor-stopped" || e.type === "ancestor-prevented" || e.type === "exception" || e.type === "strict-exception" ? e.msg : e.type === "interruption" ? "This cell was interrupted and needs to be re-run" : e.type === "syntax" || e.type === "unknown" || e.type === "sql-error" ? e.msg : e.type === "internal" ? e.msg || "An internal error occurred" : (o(e), "Unknown error");
}
function p(e) {
	let t = f(e);
	return "traceback" in e && e.traceback && (t += `\n\nTraceback:\n${n(e.traceback)}`), t;
}
function m(e) {
	let t = [e.cellName];
	return e.tracebackHtml && t.push(n(e.tracebackHtml)), e.errorData.length > 0 && t.push(e.errorData.map(p).join("\n\n")), t.join("\n\n");
}
//#endregion
export { d as i, m as n, p as r, f as t };
