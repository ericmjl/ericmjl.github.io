import { t as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t } from "./button-CvjkwdSk.js";
import { h as n } from "./tooltip-BO1REbqs.js";
import { C as r } from "./select-BButFi-d.js";
import { i, r as a } from "./data-grid-types-BH_r7g7l.js";
var o = n("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), s = n("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), c = {
	Insert: "insert",
	Remove: "remove",
	Rename: "rename"
}, l = /* @__PURE__ */ e(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), u = /* @__PURE__ */ e(((e, t) => {
	var n = l();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), d = /* @__PURE__ */ e(((e, t) => {
	t.exports = u()();
}));
//#endregion
//#region src/plugins/impl/data-editor/glide-utils.ts
function f(e) {
	switch (e) {
		case "string": return a.Text;
		case "number": return a.Number;
		case "boolean": return a.Boolean;
		case "integer":
		case "date":
		case "datetime":
		case "time":
		case "geometry":
		case "unknown": return a.Text;
		default: return r(e), a.Text;
	}
}
function p(e) {
	switch (e) {
		case "string": return i.HeaderString;
		case "number":
		case "integer": return i.HeaderNumber;
		case "boolean": return i.HeaderBoolean;
		case "date":
		case "datetime": return i.HeaderDate;
		case "time": return i.HeaderTime;
		case "geometry":
		case "unknown": return i.HeaderString;
		default: return r(e), i.HeaderString;
	}
}
function m(e, t) {
	switch (e) {
		case "number": return Number.isFinite(Number(t));
		case "integer":
			if (typeof t == "bigint") return !0;
			if (typeof t == "number") return Number.isFinite(t) && Number.isInteger(t);
			if (typeof t == "string") {
				let e = t.trim();
				return /^[+-]?[0-9]+(?:\.0+)?$/u.test(e);
			}
			return !1;
		case "boolean": return typeof t == "boolean";
		case void 0:
		case "string":
		case "date":
		case "datetime":
		case "time":
		case "geometry":
		case "unknown": return !0;
		default: return r(e), !1;
	}
}
function h(e) {
	return "rowIdx" in e && "columnId" in e && "value" in e;
}
function g(e) {
	return "rowIdx" in e && "type" in e;
}
function _(e) {
	return "columnIdx" in e && "type" in e;
}
function v(e) {
	let { selection: n, data: i, onAddEdits: a, columns: o, editableColumns: s } = e;
	if (!n.current) return;
	let { range: c } = n.current, { x: l, y: u } = c;
	navigator.clipboard.readText().then((e) => {
		if (!e.trim()) return;
		let t = e.split("\n").filter((e) => e.trim()), n = [];
		for (let e of t) {
			let t = e.split("	");
			n.push(t);
		}
		if (n.length === 0) return;
		let c = [];
		for (let [e, t] of n.entries()) {
			if (!t) continue;
			let n = u + e;
			if (n >= i.length) break;
			for (let [e, i] of t.entries()) {
				if (i === void 0) continue;
				let t = l + e;
				if (t >= o.length) break;
				let a = o[t], u = a.dataType;
				if (!(s === "all" || s.includes(a.title))) continue;
				let d = i;
				switch (u) {
					case "integer": {
						let e = Number(i);
						if (!m(u, i)) continue;
						d = Number.isSafeInteger(e) ? e : i.trim();
						break;
					}
					case "number": {
						let e = Number(i);
						if (!m(u, e)) continue;
						d = e;
						break;
					}
					case "boolean": {
						let e = i.toLowerCase();
						d = e === "true" || e === "1";
						break;
					}
					case "string":
					case "date":
					case "datetime":
					case "time":
					case "geometry":
					case "unknown": break;
					default:
						r(u);
						continue;
				}
				let f = o[t].title;
				c.push({
					rowIdx: n,
					columnId: f,
					value: d
				});
			}
		}
		c.length > 0 && a(c);
	}).catch((e) => {
		t.error("Failed to read clipboard data", e);
	});
}
//#endregion
export { g as a, d as c, o as d, h as i, c as l, f as n, m as o, _ as r, v as s, p as t, s as u };
