import { a as e, r as t, t as n } from "./rolldown-runtime-Cb76FRpK.js";
import { t as r } from "./react-sHtZdjeP.js";
import { t as i } from "./clsx-CoeGtWvn.js";
import { t as a } from "./react-dom-DUmH0GXv.js";
import { t as o } from "./jsx-runtime-3BD1kT0s.js";
import { E as s, S as c, T as l, _ as u, a as d, b as f, c as p, d as m, f as h, g, h as _, i as v, l as y, m as b, n as x, o as S, p as C, r as w, s as T, t as E, u as D, v as ee, w as te, x as ne, y as re } from "./micromark-factory-space-DGxAzmw8.js";
//#region ../node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/cjs/index.js
var O = /* @__PURE__ */ n(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g;
	function u(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function f(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function p() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new m(e), _(), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		m.prototype.content = e;
		function h(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function g(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return f(r), e = e.slice(r.length), n;
			}
		}
		function _() {
			g(i);
		}
		function v(e) {
			var t;
			for (e ||= []; t = y();) t !== !1 && e.push(t);
			return e;
		}
		function y() {
			var t = p();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return h("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, f(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function b() {
			var e = p(), t = g(a);
			if (t) {
				if (y(), !g(o)) return h("property missing ':'");
				var r = g(s), i = e({
					type: "declaration",
					property: d(t[0].replace(n, "")),
					value: r ? d(r[0].replace(n, "")) : ""
				});
				return g(c), i;
			}
		}
		function x() {
			var e = [];
			v(e);
			for (var t; t = b();) t !== !1 && (e.push(t), v(e));
			return e;
		}
		return _(), x();
	}
	function d(e) {
		return e ? e.replace(l, "") : "";
	}
	t.exports = u;
})), k = /* @__PURE__ */ n(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(O());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), ie = /* @__PURE__ */ n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), ae = /* @__PURE__ */ n(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(k()), r = ie();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), A = typeof self == "object" ? self : globalThis, oe = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new A[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new A[a](o), i);
	};
	return r;
}, se = (e) => oe(/* @__PURE__ */ new Map(), e)(0), ce = "", { toString: le } = {}, { keys: j } = Object, M = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = le.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ce];
		case "Object": return [2, ce];
		case "Date": return [3, ce];
		case "RegExp": return [4, ce];
		case "Map": return [5, ce];
		case "Set": return [6, ce];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, ue = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), de = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = M(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of j(r)) (e || !ue(M(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(ue(M(n)) || ue(M(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !ue(M(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, fe = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return de(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, pe = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? se(fe(e, t)) : structuredClone(e) : (e, t) => se(fe(e, t)), me = ge("end"), he = ge("start");
function ge(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function _e(e) {
	let t = he(e), n = me(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-sanitize@5.0.2/node_modules/hast-util-sanitize/lib/schema.js
var ve = [
	"ariaDescribedBy",
	"ariaLabel",
	"ariaLabelledBy"
], ye = {
	ancestors: {
		tbody: ["table"],
		td: ["table"],
		th: ["table"],
		thead: ["table"],
		tfoot: ["table"],
		tr: ["table"]
	},
	attributes: {
		a: [
			...ve,
			"dataFootnoteBackref",
			"dataFootnoteRef",
			["className", "data-footnote-backref"],
			"href"
		],
		blockquote: ["cite"],
		code: [["className", /^language-./]],
		del: ["cite"],
		div: ["itemScope", "itemType"],
		dl: [...ve],
		h2: [["className", "sr-only"]],
		img: [
			...ve,
			"longDesc",
			"src"
		],
		input: [["disabled", !0], ["type", "checkbox"]],
		ins: ["cite"],
		li: [["className", "task-list-item"]],
		ol: [...ve, ["className", "contains-task-list"]],
		q: ["cite"],
		section: ["dataFootnotes", ["className", "footnotes"]],
		source: ["srcSet"],
		summary: [...ve],
		table: [...ve],
		ul: [...ve, ["className", "contains-task-list"]],
		"*": /* @__PURE__ */ "abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")
	},
	clobber: [
		"ariaDescribedBy",
		"ariaLabelledBy",
		"id",
		"name"
	],
	clobberPrefix: "user-content-",
	protocols: {
		cite: ["http", "https"],
		href: [
			"http",
			"https",
			"irc",
			"ircs",
			"mailto",
			"xmpp"
		],
		longDesc: ["http", "https"],
		src: ["http", "https"]
	},
	required: { input: {
		disabled: !0,
		type: "checkbox"
	} },
	strip: ["script"],
	tagNames: /* @__PURE__ */ "a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")
}, be = {}.hasOwnProperty;
function xe(e, t) {
	let n = {
		type: "root",
		children: []
	}, r = Se({
		schema: t ? {
			...ye,
			...t
		} : ye,
		stack: []
	}, e);
	return r && (Array.isArray(r) ? r.length === 1 ? n = r[0] : n.children = r : n = r), n;
}
function Se(e, t) {
	if (t && typeof t == "object") {
		let n = t;
		switch (typeof n.type == "string" ? n.type : "") {
			case "comment": return Ce(e, n);
			case "doctype": return we(e, n);
			case "element": return Te(e, n);
			case "root": return Ee(e, n);
			case "text": return De(e, n);
		}
	}
}
function Ce(e, t) {
	if (e.schema.allowComments) {
		let e = typeof t.value == "string" ? t.value : "", n = e.indexOf("-->"), r = {
			type: "comment",
			value: n < 0 ? e : e.slice(0, n)
		};
		return Pe(r, t), r;
	}
}
function we(e, t) {
	if (e.schema.allowDoctypes) {
		let e = { type: "doctype" };
		return Pe(e, t), e;
	}
}
function Te(e, t) {
	let n = typeof t.tagName == "string" ? t.tagName : "";
	e.stack.push(n);
	let r = Oe(e, t.children), i = ke(e, t.properties);
	e.stack.pop();
	let a = !1;
	if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (a = !0, e.schema.ancestors && be.call(e.schema.ancestors, n))) {
		let t = e.schema.ancestors[n], r = -1;
		for (a = !1; ++r < t.length;) e.stack.includes(t[r]) && (a = !0);
	}
	if (!a) return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
	let o = {
		type: "element",
		tagName: n,
		properties: i,
		children: r
	};
	return Pe(o, t), o;
}
function Ee(e, t) {
	let n = {
		type: "root",
		children: Oe(e, t.children)
	};
	return Pe(n, t), n;
}
function De(e, t) {
	let n = {
		type: "text",
		value: typeof t.value == "string" ? t.value : ""
	};
	return Pe(n, t), n;
}
function Oe(e, t) {
	let n = [];
	if (Array.isArray(t)) {
		let r = t, i = -1;
		for (; ++i < r.length;) {
			let t = Se(e, r[i]);
			t && (Array.isArray(t) ? n.push(...t) : n.push(t));
		}
	}
	return n;
}
function ke(e, t) {
	let n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, a = r && be.call(r, n) ? r[n] : void 0, o = r && be.call(r, "*") ? r["*"] : void 0, s = t && typeof t == "object" ? t : {}, c = {}, l;
	for (l in s) if (be.call(s, l)) {
		let t = s[l], n = Ae(e, Fe(a, l), l, t);
		n ??= Ae(e, Fe(o, l), l, t), n != null && (c[l] = n);
	}
	if (i && be.call(i, n)) {
		let e = i[n];
		for (l in e) be.call(e, l) && !be.call(c, l) && (c[l] = e[l]);
	}
	return c;
}
function Ae(e, t, n, r) {
	return t ? Array.isArray(r) ? je(e, t, n, r) : Me(e, t, n, r) : void 0;
}
function je(e, t, n, r) {
	let i = -1, a = [];
	for (; ++i < r.length;) {
		let o = Me(e, t, n, r[i]);
		(typeof o == "number" || typeof o == "string") && a.push(o);
	}
	return a;
}
function Me(e, t, n, r) {
	if ((typeof r == "boolean" || typeof r == "number" || typeof r == "string") && Ne(e, n, r)) {
		if (typeof t == "object" && t.length > 1) {
			let e = !1, n = 0;
			for (; ++n < t.length;) {
				let i = t[n];
				if (i && typeof i == "object" && "flags" in i) {
					if (i.test(String(r))) {
						e = !0;
						break;
					}
				} else if (i === r) {
					e = !0;
					break;
				}
			}
			if (!e) return;
		}
		return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r;
	}
}
function Ne(e, t, n) {
	let r = e.schema.protocols && be.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
	if (!r || r.length === 0) return !0;
	let i = String(n), a = i.indexOf(":"), o = i.indexOf("?"), s = i.indexOf("#"), c = i.indexOf("/");
	if (a < 0 || c > -1 && a > c || o > -1 && a > o || s > -1 && a > s) return !0;
	let l = -1;
	for (; ++l < r.length;) {
		let e = r[l];
		if (a === e.length && i.slice(0, e.length) === e) return !0;
	}
	return !1;
}
function Pe(e, t) {
	let n = _e(t);
	t.data && (e.data = pe(t.data)), n && (e.position = n);
}
function Fe(e, t) {
	let n, r = -1;
	if (e) for (; ++r < e.length;) {
		let i = e[r], a = typeof i == "string" ? i : i[0];
		if (a === t) return i;
		a === "data*" && (n = i);
	}
	if (t.length > 4 && t.slice(0, 4).toLowerCase() === "data") return n;
}
//#endregion
//#region ../node_modules/.pnpm/rehype-sanitize@6.0.0/node_modules/rehype-sanitize/lib/index.js
function Ie(e) {
	return function(t) {
		return xe(t, e);
	};
}
//#endregion
//#region ../node_modules/.pnpm/unist-util-visit@5.1.0/node_modules/unist-util-visit/lib/index.js
function Le(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), l(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region ../node_modules/.pnpm/rehype-harden@1.1.8/node_modules/rehype-harden/dist/index.js
var N = /* @__PURE__ */ e(r(), 1), Re = /* @__PURE__ */ e(ae(), 1), ze = {
	indicator: "indicator",
	textOnly: "text-only",
	remove: "remove"
};
function Be({ defaultOrigin: e = "", allowedLinkPrefixes: t = [], allowedImagePrefixes: n = [], allowDataImages: r = !1, allowedProtocols: i = [], blockedImageClass: a = "inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded text-sm", blockedLinkClass: o = "text-gray-500", linkBlockPolicy: s = ze.indicator, imageBlockPolicy: c = ze.indicator }) {
	let l = t.length && !t.every((e) => e === "*"), u = n.length && !n.every((e) => e === "*");
	if (!e && (l || u)) throw Error("defaultOrigin is required when allowedLinkPrefixes or allowedImagePrefixes are provided");
	return (l) => {
		let u = Xe(e, t, n, r, i, a, o, s, c);
		Ke(l), Le(l, u);
	};
}
function Ve(e, t) {
	if (typeof e != "string") return null;
	try {
		return new URL(e);
	} catch {
		if (t) try {
			return new URL(e, t);
		} catch {
			return null;
		}
		if (e.startsWith("/") || e.startsWith("./") || e.startsWith("../")) try {
			return new URL(e, "http://example.com");
		} catch {
			return null;
		}
		return null;
	}
}
function He(e) {
	return typeof e == "string" ? e.startsWith("/") || e.startsWith("./") || e.startsWith("../") : !1;
}
var Ue = /* @__PURE__ */ new Set([
	"https:",
	"http:",
	"irc:",
	"ircs:",
	"mailto:",
	"xmpp:",
	"blob:"
]), We = /* @__PURE__ */ new Set([
	"javascript:",
	"data:",
	"file:",
	"vbscript:"
]);
function Ge(e, t, n, r = !1, i = !1, a = []) {
	if (!e) return null;
	if (typeof e == "string" && e.startsWith("#") && !i) try {
		if (new URL(e, "http://example.com").hash === e) return e;
	} catch {}
	if (typeof e == "string" && e.startsWith("data:")) return i && r && e.startsWith("data:image/") ? e : null;
	if (typeof e == "string" && e.startsWith("blob:")) {
		try {
			if (new URL(e).protocol === "blob:" && e.length > 5) {
				let t = e.substring(5);
				if (t && t.length > 0 && t !== "invalid") return e;
			}
		} catch {
			return null;
		}
		return null;
	}
	let o = Ve(e, n);
	if (!o || We.has(o.protocol) || !(Ue.has(o.protocol) || a.includes(o.protocol) || a.includes("*"))) return null;
	if (o.protocol === "mailto:" || !o.protocol.match(/^https?:$/)) return o.href;
	let s = He(e);
	return o && t.some((e) => {
		let t = Ve(e, n);
		return !t || t.origin !== o.origin ? !1 : o.href.startsWith(t.href);
	}) ? s ? o.pathname + o.search + o.hash : o.href : t.includes("*") ? o.protocol !== "https:" && o.protocol !== "http:" ? null : s ? o.pathname + o.search + o.hash : o.href : null;
}
function Ke(e) {
	if ("children" in e && Array.isArray(e.children)) {
		e.children = e.children.filter((e) => e != null);
		for (let t of e.children) Ke(t);
	}
}
var qe = Symbol("node-seen");
function Je(e, t, n) {
	return t === ze.remove ? { type: "remove" } : t === ze.textOnly ? {
		type: "replace",
		element: {
			type: "element",
			tagName: "span",
			properties: {},
			children: [...e.children]
		}
	} : {
		type: "replace",
		element: {
			type: "element",
			tagName: "span",
			properties: {
				title: "Blocked URL: " + String(e.properties.href),
				class: n
			},
			children: [...e.children, {
				type: "text",
				value: " [blocked]"
			}]
		}
	};
}
function Ye(e, t, n) {
	if (t === ze.remove) return { type: "remove" };
	if (t === ze.textOnly) {
		let t = String(e.properties.alt || "");
		return t ? {
			type: "replace",
			element: {
				type: "element",
				tagName: "span",
				properties: {},
				children: [{
					type: "text",
					value: t
				}]
			}
		} : { type: "remove" };
	}
	return {
		type: "replace",
		element: {
			type: "element",
			tagName: "span",
			properties: { class: n },
			children: [{
				type: "text",
				value: "[Image blocked: " + String(e.properties.alt || "No description") + "]"
			}]
		}
	};
}
var Xe = (e, t, n, r, i, a, o, s, c) => {
	let l = (u, d, f) => {
		if (u.type !== "element" || u[qe]) return !0;
		if (u.tagName === "a") {
			let n = Ge(u.properties.href, t, e, !1, !1, i);
			if (n === null) {
				if (u[qe] = !0, Le(u, l), f && typeof d == "number") {
					let e = Je(u, s, o);
					if (e.type === "remove") return f.children.splice(d, 1), [te, d];
					f.children[d] = e.element;
				}
				return te;
			}
			return u.properties.href = n, u.properties.target = "_blank", u.properties.rel = "noopener noreferrer", !0;
		}
		if (u.tagName === "img") {
			let t = Ge(u.properties.src, n, e, r, !0, i);
			if (t === null) {
				if (u[qe] = !0, Le(u, l), f && typeof d == "number") {
					let e = Ye(u, c, a);
					if (e.type === "remove") return f.children.splice(d, 1), [te, d];
					f.children[d] = e.element;
				}
				return te;
			}
			return u.properties.src = t, !0;
		}
		return !0;
	};
	return l;
}, Ze = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
//#endregion
//#region ../node_modules/.pnpm/vfile-location@5.0.3/node_modules/vfile-location/lib/index.js
function Qe(e) {
	let t = String(e), n = [];
	return {
		toOffset: i,
		toPoint: r
	};
	function r(e) {
		if (typeof e == "number" && e > -1 && e <= t.length) {
			let r = 0;
			for (;;) {
				let i = n[r];
				if (i === void 0) {
					let e = $e(t, n[r - 1]);
					i = e === -1 ? t.length + 1 : e + 1, n[r] = i;
				}
				if (i > e) return {
					line: r + 1,
					column: e - (r > 0 ? n[r - 1] : 0) + 1,
					offset: e
				};
				r++;
			}
		}
	}
	function i(e) {
		if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
			for (; n.length < e.line;) {
				let e = n[n.length - 1], r = $e(t, e), i = r === -1 ? t.length + 1 : r + 1;
				if (e === i) break;
				n.push(i);
			}
			let r = (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
			if (r < n[e.line - 1]) return r;
		}
	}
}
function $e(e, t) {
	let n = e.indexOf("\r", t), r = e.indexOf("\n", t);
	return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-from-parse5@8.0.3/node_modules/hast-util-from-parse5/lib/index.js
var et = {}.hasOwnProperty, tt = Object.prototype;
function nt(e, t) {
	let n = t || {};
	return rt({
		file: n.file || void 0,
		location: !1,
		schema: n.space === "svg" ? ne : f,
		verbose: n.verbose || !1
	}, e);
}
function rt(e, t) {
	let n;
	switch (t.nodeName) {
		case "#comment": {
			let r = t;
			return n = {
				type: "comment",
				value: r.data
			}, ot(e, r, n), n;
		}
		case "#document":
		case "#document-fragment": {
			let r = t, i = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
			if (n = {
				type: "root",
				children: it(e, t.childNodes),
				data: { quirksMode: i }
			}, e.file && e.location) {
				let t = String(e.file), r = Qe(t), i = r.toPoint(0), a = r.toPoint(t.length);
				n.position = {
					start: i,
					end: a
				};
			}
			return n;
		}
		case "#documentType": {
			let r = t;
			return n = { type: "doctype" }, ot(e, r, n), n;
		}
		case "#text": {
			let r = t;
			return n = {
				type: "text",
				value: r.value
			}, ot(e, r, n), n;
		}
		default: return n = at(e, t), n;
	}
}
function it(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) {
		let i = rt(e, t[n]);
		r.push(i);
	}
	return r;
}
function at(e, t) {
	let n = e.schema;
	e.schema = t.namespaceURI === _.svg ? ne : f;
	let r = -1, i = {};
	for (; ++r < t.attrs.length;) {
		let e = t.attrs[r], n = (e.prefix ? e.prefix + ":" : "") + e.name;
		et.call(tt, n) || (i[n] = e.value);
	}
	let a = (e.schema.space === "svg" ? u : g)(t.tagName, i, it(e, t.childNodes));
	if (ot(e, t, a), a.tagName === "template") {
		let n = t, r = n.sourceCodeLocation, i = r && r.startTag && ct(r.startTag), o = r && r.endTag && ct(r.endTag), s = rt(e, n.content);
		i && o && e.file && (s.position = {
			start: i.end,
			end: o.start
		}), a.content = s;
	}
	return e.schema = n, a;
}
function ot(e, t, n) {
	if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
		let r = st(e, n, t.sourceCodeLocation);
		r && (e.location = !0, n.position = r);
	}
}
function st(e, t, n) {
	let r = ct(n);
	if (t.type === "element") {
		let i = t.children[t.children.length - 1];
		if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
			let r = {}, i;
			if (n.attrs) for (i in n.attrs) et.call(n.attrs, i) && (r[c(e.schema, i).property] = ct(n.attrs[i]));
			n.startTag;
			let a = ct(n.startTag), o = n.endTag ? ct(n.endTag) : void 0, s = { opening: a };
			o && (s.closing = o), s.properties = r, t.data = { position: s };
		}
	}
	return r;
}
function ct(e) {
	let t = lt({
		line: e.startLine,
		column: e.startCol,
		offset: e.startOffset
	}), n = lt({
		line: e.endLine,
		column: e.endCol,
		offset: e.endOffset
	});
	return t || n ? {
		start: t,
		end: n
	} : void 0;
}
function lt(e) {
	return e.line && e.column ? e : void 0;
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/schema.js
var ut = class {
	constructor(e, t, n) {
		this.property = e, this.normal = t, n && (this.space = n);
	}
};
ut.prototype.property = {}, ut.prototype.normal = {}, ut.prototype.space = null;
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/merge.js
function dt(e, t) {
	let n = {}, r = {}, i = -1;
	for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
	return new ut(n, r, t);
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/normalize.js
function ft(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/info.js
var pt = class {
	constructor(e, t) {
		this.property = e, this.attribute = t;
	}
};
pt.prototype.space = null, pt.prototype.boolean = !1, pt.prototype.booleanish = !1, pt.prototype.overloadedBoolean = !1, pt.prototype.number = !1, pt.prototype.commaSeparated = !1, pt.prototype.spaceSeparated = !1, pt.prototype.commaOrSpaceSeparated = !1, pt.prototype.mustUseProperty = !1, pt.prototype.defined = !1;
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/types.js
var mt = /* @__PURE__ */ t({
	boolean: () => P,
	booleanish: () => gt,
	commaOrSpaceSeparated: () => yt,
	commaSeparated: () => vt,
	number: () => F,
	overloadedBoolean: () => _t,
	spaceSeparated: () => I
}), ht = 0, P = bt(), gt = bt(), _t = bt(), F = bt(), I = bt(), vt = bt(), yt = bt();
function bt() {
	return 2 ** ++ht;
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/defined-info.js
var xt = Object.keys(mt), St = class extends pt {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Ct(this, "space", r), typeof n == "number") for (; ++i < xt.length;) {
			let e = xt[i];
			Ct(this, xt[i], (n & mt[e]) === mt[e]);
		}
	}
};
St.prototype.defined = !0;
function Ct(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/create.js
var wt = {}.hasOwnProperty;
function Tt(e) {
	let t = {}, n = {}, r;
	for (r in e.properties) if (wt.call(e.properties, r)) {
		let i = e.properties[r], a = new St(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[ft(r)] = r, n[ft(a.attribute)] = r;
	}
	return new ut(t, n, e.space);
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/xlink.js
var Et = Tt({
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	},
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	}
}), Dt = Tt({
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	},
	properties: {
		xmlLang: null,
		xmlBase: null,
		xmlSpace: null
	}
});
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/case-sensitive-transform.js
function Ot(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/case-insensitive-transform.js
function kt(e, t) {
	return Ot(e, t.toLowerCase());
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/xmlns.js
var At = Tt({
	space: "xmlns",
	attributes: { xmlnsxlink: "xmlns:xlink" },
	transform: kt,
	properties: {
		xmlns: null,
		xmlnsXLink: null
	}
}), jt = Tt({
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	},
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: gt,
		ariaAutoComplete: null,
		ariaBusy: gt,
		ariaChecked: gt,
		ariaColCount: F,
		ariaColIndex: F,
		ariaColSpan: F,
		ariaControls: I,
		ariaCurrent: null,
		ariaDescribedBy: I,
		ariaDetails: null,
		ariaDisabled: gt,
		ariaDropEffect: I,
		ariaErrorMessage: null,
		ariaExpanded: gt,
		ariaFlowTo: I,
		ariaGrabbed: gt,
		ariaHasPopup: null,
		ariaHidden: gt,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: I,
		ariaLevel: F,
		ariaLive: null,
		ariaModal: gt,
		ariaMultiLine: gt,
		ariaMultiSelectable: gt,
		ariaOrientation: null,
		ariaOwns: I,
		ariaPlaceholder: null,
		ariaPosInSet: F,
		ariaPressed: gt,
		ariaReadOnly: gt,
		ariaRelevant: null,
		ariaRequired: gt,
		ariaRoleDescription: I,
		ariaRowCount: F,
		ariaRowIndex: F,
		ariaRowSpan: F,
		ariaSelected: gt,
		ariaSetSize: F,
		ariaSort: null,
		ariaValueMax: F,
		ariaValueMin: F,
		ariaValueNow: F,
		ariaValueText: null,
		role: null
	}
}), Mt = Tt({
	space: "html",
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	transform: kt,
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: vt,
		acceptCharset: I,
		accessKey: I,
		action: null,
		allow: null,
		allowFullScreen: P,
		allowPaymentRequest: P,
		allowUserMedia: P,
		alt: null,
		as: null,
		async: P,
		autoCapitalize: null,
		autoComplete: I,
		autoFocus: P,
		autoPlay: P,
		blocking: I,
		capture: null,
		charSet: null,
		checked: P,
		cite: null,
		className: I,
		cols: F,
		colSpan: null,
		content: null,
		contentEditable: gt,
		controls: P,
		controlsList: I,
		coords: F | vt,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: P,
		defer: P,
		dir: null,
		dirName: null,
		disabled: P,
		download: _t,
		draggable: gt,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: P,
		formTarget: null,
		headers: I,
		height: F,
		hidden: P,
		high: F,
		href: null,
		hrefLang: null,
		htmlFor: I,
		httpEquiv: I,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: P,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: P,
		itemId: null,
		itemProp: I,
		itemRef: I,
		itemScope: P,
		itemType: I,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: P,
		low: F,
		manifest: null,
		max: null,
		maxLength: F,
		media: null,
		method: null,
		min: null,
		minLength: F,
		multiple: P,
		muted: P,
		name: null,
		nonce: null,
		noModule: P,
		noValidate: P,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: P,
		optimum: F,
		pattern: null,
		ping: I,
		placeholder: null,
		playsInline: P,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: P,
		referrerPolicy: null,
		rel: I,
		required: P,
		reversed: P,
		rows: F,
		rowSpan: F,
		sandbox: I,
		scope: null,
		scoped: P,
		seamless: P,
		selected: P,
		shadowRootClonable: P,
		shadowRootDelegatesFocus: P,
		shadowRootMode: null,
		shape: null,
		size: F,
		sizes: null,
		slot: null,
		span: F,
		spellCheck: gt,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: F,
		step: null,
		style: null,
		tabIndex: F,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: P,
		useMap: null,
		value: gt,
		width: F,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: I,
		axis: null,
		background: null,
		bgColor: null,
		border: F,
		borderColor: null,
		bottomMargin: F,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: P,
		declare: P,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: F,
		leftMargin: F,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: F,
		marginWidth: F,
		noResize: P,
		noHref: P,
		noShade: P,
		noWrap: P,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: F,
		rules: null,
		scheme: null,
		scrolling: gt,
		standby: null,
		summary: null,
		text: null,
		topMargin: F,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: F,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: P,
		disableRemotePlayback: P,
		prefix: null,
		property: null,
		results: F,
		security: null,
		unselectable: null
	}
}), Nt = Tt({
	space: "svg",
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	transform: Ot,
	properties: {
		about: yt,
		accentHeight: F,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: F,
		amplitude: F,
		arabicForm: null,
		ascent: F,
		attributeName: null,
		attributeType: null,
		azimuth: F,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: F,
		by: null,
		calcMode: null,
		capHeight: F,
		className: I,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: F,
		diffuseConstant: F,
		direction: null,
		display: null,
		dur: null,
		divisor: F,
		dominantBaseline: null,
		download: P,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: F,
		enableBackground: null,
		end: null,
		event: null,
		exponent: F,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: F,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: vt,
		g2: vt,
		glyphName: vt,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: F,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: F,
		horizOriginX: F,
		horizOriginY: F,
		id: null,
		ideographic: F,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: F,
		k: F,
		k1: F,
		k2: F,
		k3: F,
		k4: F,
		kernelMatrix: yt,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: F,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: F,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: F,
		overlineThickness: F,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: F,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: I,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: F,
		pointsAtY: F,
		pointsAtZ: F,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: yt,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: yt,
		rev: yt,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: yt,
		requiredFeatures: yt,
		requiredFonts: yt,
		requiredFormats: yt,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: F,
		specularExponent: F,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: F,
		strikethroughThickness: F,
		string: null,
		stroke: null,
		strokeDashArray: yt,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: F,
		strokeOpacity: F,
		strokeWidth: null,
		style: null,
		surfaceScale: F,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: yt,
		tabIndex: F,
		tableValues: null,
		target: null,
		targetX: F,
		targetY: F,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: yt,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: F,
		underlineThickness: F,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: F,
		values: null,
		vAlphabetic: F,
		vMathematical: F,
		vectorEffect: null,
		vHanging: F,
		vIdeographic: F,
		version: null,
		vertAdvY: F,
		vertOriginX: F,
		vertOriginY: F,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: F,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	}
}), Pt = /^data[-\w.:]+$/i, Ft = /-[a-z]/g, It = /[A-Z]/g;
function Lt(e, t) {
	let n = ft(t), r = t, i = pt;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Pt.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Ft, zt);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Ft.test(e)) {
				let n = e.replace(It, Rt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = St;
	}
	return new i(r, t);
}
function Rt(e) {
	return "-" + e.toLowerCase();
}
function zt(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/index.js
var Bt = dt([
	Dt,
	Et,
	At,
	jt,
	Mt
], "html"), Vt = dt([
	Dt,
	Et,
	At,
	jt,
	Nt
], "svg"), Ht = {}.hasOwnProperty;
function Ut(e, t) {
	let n = t || {};
	function r(t, ...n) {
		let i = r.invalid, a = r.handlers;
		if (t && Ht.call(t, e)) {
			let n = String(t[e]);
			i = Ht.call(a, n) ? a[n] : r.unknown;
		}
		if (i) return i.call(this, t, ...n);
	}
	return r.handlers = n.handlers || {}, r.invalid = n.invalid, r.unknown = n.unknown, r;
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-to-parse5@8.0.0/node_modules/hast-util-to-parse5/lib/index.js
var Wt = {}, Gt = {}.hasOwnProperty, Kt = Ut("type", { handlers: {
	root: Jt,
	element: $t,
	text: Zt,
	comment: Qt,
	doctype: Xt
} });
function qt(e, t) {
	let n = (t || Wt).space;
	return Kt(e, n === "svg" ? Vt : Bt);
}
function Jt(e, t) {
	let n = {
		nodeName: "#document",
		mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	return n.childNodes = tn(e.children, n, t), nn(e, n), n;
}
function Yt(e, t) {
	let n = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	return n.childNodes = tn(e.children, n, t), nn(e, n), n;
}
function Xt(e) {
	let t = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	return nn(e, t), t;
}
function Zt(e) {
	let t = {
		nodeName: "#text",
		value: e.value,
		parentNode: null
	};
	return nn(e, t), t;
}
function Qt(e) {
	let t = {
		nodeName: "#comment",
		data: e.value,
		parentNode: null
	};
	return nn(e, t), t;
}
function $t(e, t) {
	let n = t, r = n;
	e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = Vt);
	let i = [], a;
	if (e.properties) {
		for (a in e.properties) if (a !== "children" && Gt.call(e.properties, a)) {
			let t = en(r, a, e.properties[a]);
			t && i.push(t);
		}
	}
	let o = r.space, s = {
		nodeName: e.tagName,
		tagName: e.tagName,
		attrs: i,
		namespaceURI: _[o],
		childNodes: [],
		parentNode: null
	};
	return s.childNodes = tn(e.children, s, r), nn(e, s), e.tagName === "template" && e.content && (s.content = Yt(e.content, r)), s;
}
function en(e, t, n) {
	let r = Lt(e, t);
	if (n === !1 || n == null || typeof n == "number" && Number.isNaN(n) || !n && r.boolean) return;
	Array.isArray(n) && (n = r.commaSeparated ? re(n) : ee(n));
	let i = {
		name: r.attribute,
		value: n === !0 ? "" : String(n)
	};
	if (r.space && r.space !== "html" && r.space !== "svg") {
		let e = i.name.indexOf(":");
		e < 0 ? i.prefix = "" : (i.name = i.name.slice(e + 1), i.prefix = r.attribute.slice(0, e)), i.namespace = _[r.space];
	}
	return i;
}
function tn(e, t, n) {
	let r = -1, i = [];
	if (e) for (; ++r < e.length;) {
		let a = Kt(e[r], n);
		a.parentNode = t, i.push(a);
	}
	return i;
}
function nn(e, t) {
	let n = e.position;
	n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
		startLine: n.start.line,
		startCol: n.start.column,
		startOffset: n.start.offset,
		endLine: n.end.line,
		endCol: n.end.column,
		endOffset: n.end.offset
	});
}
//#endregion
//#region ../node_modules/.pnpm/html-void-elements@3.0.0/node_modules/html-void-elements/index.js
var rn = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
], an = /* @__PURE__ */ new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), L;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(L ||= {});
var on = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function sn(e) {
	return e >= 55296 && e <= 57343;
}
function cn(e) {
	return e >= 56320 && e <= 57343;
}
function ln(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function un(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function dn(e) {
	return e >= 64976 && e <= 65007 || an.has(e);
}
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/common/error-codes.js
var R;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(R ||= {});
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/tokenizer/preprocessor.js
var fn = 65536, pn = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = fn, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (cn(t)) return this.pos++, this._addGap(), ln(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, L.EOF;
		return this._err(R.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, L.EOF;
		let n = this.html.charCodeAt(t);
		return n === L.CARRIAGE_RETURN ? L.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, L.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === L.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, L.LINE_FEED) : e === L.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, sn(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === L.LINE_FEED || e === L.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		un(e) ? this._err(R.controlCharacterInInputStream) : dn(e) && this._err(R.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, z;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(z ||= {});
function mn(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
//#endregion
//#region ../node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/generated/decode-data-html.js
var hn = /* #__PURE__ */ new Uint16Array(/* #__PURE__ */ "ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e) => e.charCodeAt(0))), gn = /* @__PURE__ */ new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
String.fromCodePoint;
function _n(e) {
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : gn.get(e) ?? e;
}
//#endregion
//#region ../node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode.js
var vn;
(function(e) {
	e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(vn ||= {});
var yn = 32, bn;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(bn ||= {});
function xn(e) {
	return e >= vn.ZERO && e <= vn.NINE;
}
function Sn(e) {
	return e >= vn.UPPER_A && e <= vn.UPPER_F || e >= vn.LOWER_A && e <= vn.LOWER_F;
}
function Cn(e) {
	return e >= vn.UPPER_A && e <= vn.UPPER_Z || e >= vn.LOWER_A && e <= vn.LOWER_Z || xn(e);
}
function wn(e) {
	return e === vn.EQUALS || Cn(e);
}
var Tn;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(Tn ||= {});
var En;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(En ||= {});
var Dn = class {
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = Tn.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = En.Strict;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = Tn.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
	}
	write(e, t) {
		switch (this.state) {
			case Tn.EntityStart: return e.charCodeAt(t) === vn.NUM ? (this.state = Tn.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = Tn.NamedEntity, this.stateNamedEntity(e, t));
			case Tn.NumericStart: return this.stateNumericStart(e, t);
			case Tn.NumericDecimal: return this.stateNumericDecimal(e, t);
			case Tn.NumericHex: return this.stateNumericHex(e, t);
			case Tn.NamedEntity: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | yn) === vn.LOWER_X ? (this.state = Tn.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = Tn.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	addToNumericResult(e, t, n, r) {
		if (t !== n) {
			let i = n - t;
			this.result = this.result * r ** +i + Number.parseInt(e.substr(t, i), r), this.consumed += i;
		}
	}
	stateNumericHex(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (xn(r) || Sn(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(r, 3);
		}
		return this.addToNumericResult(e, n, t, 16), -1;
	}
	stateNumericDecimal(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (xn(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
		}
		return this.addToNumericResult(e, n, t, 10), -1;
	}
	emitNumericEntity(e, t) {
		var n;
		if (this.consumed <= t) return (n = this.errors) == null || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === vn.SEMI) this.consumed += 1;
		else if (this.decodeMode === En.Strict) return 0;
		return this.emitCodePoint(_n(this.result), this.consumed), this.errors && (e !== vn.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = n[this.treeIndex], i = (r & bn.VALUE_LENGTH) >> 14;
		for (; t < e.length; t++, this.excess++) {
			let a = e.charCodeAt(t);
			if (this.treeIndex = On(n, r, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0) return this.result === 0 || this.decodeMode === En.Attribute && (i === 0 || wn(a)) ? 0 : this.emitNotTerminatedNamedEntity();
			if (r = n[this.treeIndex], i = (r & bn.VALUE_LENGTH) >> 14, i !== 0) {
				if (a === vn.SEMI) return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
				this.decodeMode !== En.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		let { result: t, decodeTree: n } = this, r = (n[t] & bn.VALUE_LENGTH) >> 14;
		return this.emitNamedEntityData(t, r, this.consumed), (e = this.errors) == null || e.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & ~bn.VALUE_LENGTH : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		var e;
		switch (this.state) {
			case Tn.NamedEntity: return this.result !== 0 && (this.decodeMode !== En.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case Tn.NumericDecimal: return this.emitNumericEntity(0, 2);
			case Tn.NumericHex: return this.emitNumericEntity(0, 3);
			case Tn.NumericStart: return (e = this.errors) == null || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			case Tn.EntityStart: return 0;
		}
	}
};
function On(e, t, n, r) {
	let i = (t & bn.BRANCH_LENGTH) >> 7, a = t & bn.JUMP_TABLE;
	if (i === 0) return a !== 0 && r === a ? n : -1;
	if (a) {
		let t = r - a;
		return t < 0 || t >= i ? -1 : e[n + t] - 1;
	}
	let o = n, s = o + i - 1;
	for (; o <= s;) {
		let t = o + s >>> 1, n = e[t];
		if (n < r) o = t + 1;
		else if (n > r) s = t - 1;
		else return e[t + i];
	}
	return -1;
}
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/common/html.js
var B;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(B ||= {});
var kn;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(kn ||= {});
var An;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(An ||= {});
var V;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(V ||= {});
var H;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(H ||= {});
var jn = /* @__PURE__ */ new Map([
	[V.A, H.A],
	[V.ADDRESS, H.ADDRESS],
	[V.ANNOTATION_XML, H.ANNOTATION_XML],
	[V.APPLET, H.APPLET],
	[V.AREA, H.AREA],
	[V.ARTICLE, H.ARTICLE],
	[V.ASIDE, H.ASIDE],
	[V.B, H.B],
	[V.BASE, H.BASE],
	[V.BASEFONT, H.BASEFONT],
	[V.BGSOUND, H.BGSOUND],
	[V.BIG, H.BIG],
	[V.BLOCKQUOTE, H.BLOCKQUOTE],
	[V.BODY, H.BODY],
	[V.BR, H.BR],
	[V.BUTTON, H.BUTTON],
	[V.CAPTION, H.CAPTION],
	[V.CENTER, H.CENTER],
	[V.CODE, H.CODE],
	[V.COL, H.COL],
	[V.COLGROUP, H.COLGROUP],
	[V.DD, H.DD],
	[V.DESC, H.DESC],
	[V.DETAILS, H.DETAILS],
	[V.DIALOG, H.DIALOG],
	[V.DIR, H.DIR],
	[V.DIV, H.DIV],
	[V.DL, H.DL],
	[V.DT, H.DT],
	[V.EM, H.EM],
	[V.EMBED, H.EMBED],
	[V.FIELDSET, H.FIELDSET],
	[V.FIGCAPTION, H.FIGCAPTION],
	[V.FIGURE, H.FIGURE],
	[V.FONT, H.FONT],
	[V.FOOTER, H.FOOTER],
	[V.FOREIGN_OBJECT, H.FOREIGN_OBJECT],
	[V.FORM, H.FORM],
	[V.FRAME, H.FRAME],
	[V.FRAMESET, H.FRAMESET],
	[V.H1, H.H1],
	[V.H2, H.H2],
	[V.H3, H.H3],
	[V.H4, H.H4],
	[V.H5, H.H5],
	[V.H6, H.H6],
	[V.HEAD, H.HEAD],
	[V.HEADER, H.HEADER],
	[V.HGROUP, H.HGROUP],
	[V.HR, H.HR],
	[V.HTML, H.HTML],
	[V.I, H.I],
	[V.IMG, H.IMG],
	[V.IMAGE, H.IMAGE],
	[V.INPUT, H.INPUT],
	[V.IFRAME, H.IFRAME],
	[V.KEYGEN, H.KEYGEN],
	[V.LABEL, H.LABEL],
	[V.LI, H.LI],
	[V.LINK, H.LINK],
	[V.LISTING, H.LISTING],
	[V.MAIN, H.MAIN],
	[V.MALIGNMARK, H.MALIGNMARK],
	[V.MARQUEE, H.MARQUEE],
	[V.MATH, H.MATH],
	[V.MENU, H.MENU],
	[V.META, H.META],
	[V.MGLYPH, H.MGLYPH],
	[V.MI, H.MI],
	[V.MO, H.MO],
	[V.MN, H.MN],
	[V.MS, H.MS],
	[V.MTEXT, H.MTEXT],
	[V.NAV, H.NAV],
	[V.NOBR, H.NOBR],
	[V.NOFRAMES, H.NOFRAMES],
	[V.NOEMBED, H.NOEMBED],
	[V.NOSCRIPT, H.NOSCRIPT],
	[V.OBJECT, H.OBJECT],
	[V.OL, H.OL],
	[V.OPTGROUP, H.OPTGROUP],
	[V.OPTION, H.OPTION],
	[V.P, H.P],
	[V.PARAM, H.PARAM],
	[V.PLAINTEXT, H.PLAINTEXT],
	[V.PRE, H.PRE],
	[V.RB, H.RB],
	[V.RP, H.RP],
	[V.RT, H.RT],
	[V.RTC, H.RTC],
	[V.RUBY, H.RUBY],
	[V.S, H.S],
	[V.SCRIPT, H.SCRIPT],
	[V.SEARCH, H.SEARCH],
	[V.SECTION, H.SECTION],
	[V.SELECT, H.SELECT],
	[V.SOURCE, H.SOURCE],
	[V.SMALL, H.SMALL],
	[V.SPAN, H.SPAN],
	[V.STRIKE, H.STRIKE],
	[V.STRONG, H.STRONG],
	[V.STYLE, H.STYLE],
	[V.SUB, H.SUB],
	[V.SUMMARY, H.SUMMARY],
	[V.SUP, H.SUP],
	[V.TABLE, H.TABLE],
	[V.TBODY, H.TBODY],
	[V.TEMPLATE, H.TEMPLATE],
	[V.TEXTAREA, H.TEXTAREA],
	[V.TFOOT, H.TFOOT],
	[V.TD, H.TD],
	[V.TH, H.TH],
	[V.THEAD, H.THEAD],
	[V.TITLE, H.TITLE],
	[V.TR, H.TR],
	[V.TRACK, H.TRACK],
	[V.TT, H.TT],
	[V.U, H.U],
	[V.UL, H.UL],
	[V.SVG, H.SVG],
	[V.VAR, H.VAR],
	[V.WBR, H.WBR],
	[V.XMP, H.XMP]
]);
function Mn(e) {
	return jn.get(e) ?? H.UNKNOWN;
}
var U = H, Nn = {
	[B.HTML]: /* @__PURE__ */ new Set([
		U.ADDRESS,
		U.APPLET,
		U.AREA,
		U.ARTICLE,
		U.ASIDE,
		U.BASE,
		U.BASEFONT,
		U.BGSOUND,
		U.BLOCKQUOTE,
		U.BODY,
		U.BR,
		U.BUTTON,
		U.CAPTION,
		U.CENTER,
		U.COL,
		U.COLGROUP,
		U.DD,
		U.DETAILS,
		U.DIR,
		U.DIV,
		U.DL,
		U.DT,
		U.EMBED,
		U.FIELDSET,
		U.FIGCAPTION,
		U.FIGURE,
		U.FOOTER,
		U.FORM,
		U.FRAME,
		U.FRAMESET,
		U.H1,
		U.H2,
		U.H3,
		U.H4,
		U.H5,
		U.H6,
		U.HEAD,
		U.HEADER,
		U.HGROUP,
		U.HR,
		U.HTML,
		U.IFRAME,
		U.IMG,
		U.INPUT,
		U.LI,
		U.LINK,
		U.LISTING,
		U.MAIN,
		U.MARQUEE,
		U.MENU,
		U.META,
		U.NAV,
		U.NOEMBED,
		U.NOFRAMES,
		U.NOSCRIPT,
		U.OBJECT,
		U.OL,
		U.P,
		U.PARAM,
		U.PLAINTEXT,
		U.PRE,
		U.SCRIPT,
		U.SECTION,
		U.SELECT,
		U.SOURCE,
		U.STYLE,
		U.SUMMARY,
		U.TABLE,
		U.TBODY,
		U.TD,
		U.TEMPLATE,
		U.TEXTAREA,
		U.TFOOT,
		U.TH,
		U.THEAD,
		U.TITLE,
		U.TR,
		U.TRACK,
		U.UL,
		U.WBR,
		U.XMP
	]),
	[B.MATHML]: /* @__PURE__ */ new Set([
		U.MI,
		U.MO,
		U.MN,
		U.MS,
		U.MTEXT,
		U.ANNOTATION_XML
	]),
	[B.SVG]: /* @__PURE__ */ new Set([
		U.TITLE,
		U.FOREIGN_OBJECT,
		U.DESC
	]),
	[B.XLINK]: /* @__PURE__ */ new Set(),
	[B.XML]: /* @__PURE__ */ new Set(),
	[B.XMLNS]: /* @__PURE__ */ new Set()
}, Pn = /* @__PURE__ */ new Set([
	U.H1,
	U.H2,
	U.H3,
	U.H4,
	U.H5,
	U.H6
]);
V.STYLE, V.SCRIPT, V.XMP, V.IFRAME, V.NOEMBED, V.NOFRAMES, V.PLAINTEXT;
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/tokenizer/index.js
var W;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(W ||= {});
var Fn = {
	DATA: W.DATA,
	RCDATA: W.RCDATA,
	RAWTEXT: W.RAWTEXT,
	SCRIPT_DATA: W.SCRIPT_DATA,
	PLAINTEXT: W.PLAINTEXT,
	CDATA_SECTION: W.CDATA_SECTION
};
function In(e) {
	return e >= L.DIGIT_0 && e <= L.DIGIT_9;
}
function Ln(e) {
	return e >= L.LATIN_CAPITAL_A && e <= L.LATIN_CAPITAL_Z;
}
function Rn(e) {
	return e >= L.LATIN_SMALL_A && e <= L.LATIN_SMALL_Z;
}
function zn(e) {
	return Rn(e) || Ln(e);
}
function Bn(e) {
	return zn(e) || In(e);
}
function Vn(e) {
	return e + 32;
}
function Hn(e) {
	return e === L.SPACE || e === L.LINE_FEED || e === L.TABULATION || e === L.FORM_FEED;
}
function Un(e) {
	return Hn(e) || e === L.SOLIDUS || e === L.GREATER_THAN_SIGN;
}
function Wn(e) {
	return e === L.NULL ? R.nullCharacterReference : e > 1114111 ? R.characterReferenceOutsideUnicodeRange : sn(e) ? R.surrogateCharacterReference : dn(e) ? R.noncharacterCharacterReference : un(e) || e === L.CARRIAGE_RETURN ? R.controlCharacterReference : null;
}
var Gn = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = W.DATA, this.returnState = W.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new pn(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Dn(hn, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(R.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(R.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = Wn(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: z.START_TAG,
			tagName: "",
			tagID: H.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: z.END_TAG,
			tagName: "",
			tagID: H.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: z.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: z.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (mn(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(R.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = Mn(e.tagName), e.type === z.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(R.endTagWithAttributes), e.selfClosing && this._err(R.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case z.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case z.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case z.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: z.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) {
			if (this.currentCharacterToken.type === e) {
				this.currentCharacterToken.chars += t;
				return;
			}
			this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		}
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = Hn(e) ? z.WHITESPACE_CHARACTER : e === L.NULL ? z.NULL_CHARACTER : z.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(z.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = W.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? En.Attribute : En.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === W.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === W.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === W.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case W.DATA:
				this._stateData(e);
				break;
			case W.RCDATA:
				this._stateRcdata(e);
				break;
			case W.RAWTEXT:
				this._stateRawtext(e);
				break;
			case W.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case W.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case W.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case W.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case W.TAG_NAME:
				this._stateTagName(e);
				break;
			case W.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case W.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case W.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case W.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case W.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case W.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case W.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case W.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case W.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case W.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case W.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case W.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case W.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case W.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case W.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case W.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case W.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case W.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case W.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case W.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case W.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case W.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case W.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case W.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case W.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case W.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case W.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case W.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case W.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case W.COMMENT:
				this._stateComment(e);
				break;
			case W.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case W.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case W.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case W.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case W.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case W.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case W.DOCTYPE:
				this._stateDoctype(e);
				break;
			case W.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case W.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case W.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case W.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case W.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case W.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case W.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case W.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case W.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case W.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case W.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case L.LESS_THAN_SIGN:
				this.state = W.TAG_OPEN;
				break;
			case L.AMPERSAND:
				this._startCharacterReference();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case L.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case L.AMPERSAND:
				this._startCharacterReference();
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.RCDATA_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case L.LESS_THAN_SIGN:
				this.state = W.RAWTEXT_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (zn(e)) this._createStartTagToken(), this.state = W.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case L.EXCLAMATION_MARK:
				this.state = W.MARKUP_DECLARATION_OPEN;
				break;
			case L.SOLIDUS:
				this.state = W.END_TAG_OPEN;
				break;
			case L.QUESTION_MARK:
				this._err(R.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = W.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case L.EOF:
				this._err(R.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(R.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = W.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (zn(e)) this._createEndTagToken(), this.state = W.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case L.GREATER_THAN_SIGN:
				this._err(R.missingEndTagName), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(R.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = W.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.BEFORE_ATTRIBUTE_NAME;
				break;
			case L.SOLIDUS:
				this.state = W.SELF_CLOSING_START_TAG;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentTagToken();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.tagName += "�";
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(Ln(e) ? Vn(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === L.SOLIDUS ? this.state = W.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = W.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		zn(e) ? (this.state = W.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = W.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = W.BEFORE_ATTRIBUTE_NAME, !1;
			case L.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = W.SELF_CLOSING_START_TAG, !1;
			case L.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = W.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = W.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === L.SOLIDUS ? this.state = W.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = W.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		zn(e) ? (this.state = W.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = W.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = W.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case L.SOLIDUS:
				this.state = W.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case L.EXCLAMATION_MARK:
				this.state = W.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = W.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		zn(e) ? (this.state = W.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = W.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = W.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === L.HYPHEN_MINUS ? (this.state = W.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = W.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === L.HYPHEN_MINUS ? (this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = W.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = W.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.SCRIPT_DATA, this._emitChars(">");
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = W.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === L.SOLIDUS ? this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : zn(e) ? (this._emitChars("<"), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		zn(e) ? (this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(on.SCRIPT, !1) && Un(this.preprocessor.peek(on.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < on.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case L.LESS_THAN_SIGN:
				this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.SCRIPT_DATA, this._emitChars(">");
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case L.EOF:
				this._err(R.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === L.SOLIDUS ? (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(on.SCRIPT, !1) && Un(this.preprocessor.peek(on.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < on.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = W.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.SOLIDUS:
			case L.GREATER_THAN_SIGN:
			case L.EOF:
				this.state = W.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case L.EQUALS_SIGN:
				this._err(R.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = W.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = W.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
			case L.SOLIDUS:
			case L.GREATER_THAN_SIGN:
			case L.EOF:
				this._leaveAttrName(), this.state = W.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case L.EQUALS_SIGN:
				this._leaveAttrName(), this.state = W.BEFORE_ATTRIBUTE_VALUE;
				break;
			case L.QUOTATION_MARK:
			case L.APOSTROPHE:
			case L.LESS_THAN_SIGN:
				this._err(R.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(Ln(e) ? Vn(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.SOLIDUS:
				this.state = W.SELF_CLOSING_START_TAG;
				break;
			case L.EQUALS_SIGN:
				this.state = W.BEFORE_ATTRIBUTE_VALUE;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentTagToken();
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = W.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.QUOTATION_MARK:
				this.state = W.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				this.state = W.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.missingAttributeValue), this.state = W.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = W.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case L.QUOTATION_MARK:
				this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case L.AMPERSAND:
				this._startCharacterReference();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case L.APOSTROPHE:
				this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case L.AMPERSAND:
				this._startCharacterReference();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this._leaveAttrValue(), this.state = W.BEFORE_ATTRIBUTE_NAME;
				break;
			case L.AMPERSAND:
				this._startCharacterReference();
				break;
			case L.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = W.DATA, this.emitCurrentTagToken();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case L.QUOTATION_MARK:
			case L.APOSTROPHE:
			case L.LESS_THAN_SIGN:
			case L.EQUALS_SIGN:
			case L.GRAVE_ACCENT:
				this._err(R.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this._leaveAttrValue(), this.state = W.BEFORE_ATTRIBUTE_NAME;
				break;
			case L.SOLIDUS:
				this._leaveAttrValue(), this.state = W.SELF_CLOSING_START_TAG;
				break;
			case L.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = W.DATA, this.emitCurrentTagToken();
				break;
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this._err(R.missingWhitespaceBetweenAttributes), this.state = W.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case L.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = W.DATA, this.emitCurrentTagToken();
				break;
			}
			case L.EOF:
				this._err(R.eofInTag), this._emitEOFToken();
				break;
			default: this._err(R.unexpectedSolidusInTag), this.state = W.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentComment(t);
				break;
			case L.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(on.DASH_DASH, !0) ? (this._createCommentToken(on.DASH_DASH.length + 1), this.state = W.COMMENT_START) : this._consumeSequenceIfMatch(on.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(on.DOCTYPE.length + 1), this.state = W.DOCTYPE) : this._consumeSequenceIfMatch(on.CDATA_START, !0) ? this.inForeignNode ? this.state = W.CDATA_SECTION : (this._err(R.cdataInHtmlContent), this._createCommentToken(on.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = W.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(R.incorrectlyOpenedComment), this._createCommentToken(2), this.state = W.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.COMMENT_START_DASH;
				break;
			case L.GREATER_THAN_SIGN: {
				this._err(R.abruptClosingOfEmptyComment), this.state = W.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.COMMENT_END;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.abruptClosingOfEmptyComment), this.state = W.DATA, this.emitCurrentComment(t);
				break;
			case L.EOF:
				this._err(R.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.COMMENT_END_DASH;
				break;
			case L.LESS_THAN_SIGN:
				t.data += "<", this.state = W.COMMENT_LESS_THAN_SIGN;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.data += "�";
				break;
			case L.EOF:
				this._err(R.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case L.EXCLAMATION_MARK:
				t.data += "!", this.state = W.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case L.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === L.HYPHEN_MINUS ? this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = W.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === L.HYPHEN_MINUS ? this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = W.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== L.GREATER_THAN_SIGN && e !== L.EOF && this._err(R.nestedComment), this.state = W.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case L.HYPHEN_MINUS:
				this.state = W.COMMENT_END;
				break;
			case L.EOF:
				this._err(R.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentComment(t);
				break;
			case L.EXCLAMATION_MARK:
				this.state = W.COMMENT_END_BANG;
				break;
			case L.HYPHEN_MINUS:
				t.data += "-";
				break;
			case L.EOF:
				this._err(R.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case L.HYPHEN_MINUS:
				t.data += "--!", this.state = W.COMMENT_END_DASH;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.incorrectlyClosedComment), this.state = W.DATA, this.emitCurrentComment(t);
				break;
			case L.EOF:
				this._err(R.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = W.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.BEFORE_DOCTYPE_NAME;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case L.EOF: {
				this._err(R.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(R.missingWhitespaceBeforeDoctypeName), this.state = W.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (Ln(e)) this._createDoctypeToken(String.fromCharCode(Vn(e))), this.state = W.DOCTYPE_NAME;
		else switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = W.DOCTYPE_NAME;
				break;
			case L.GREATER_THAN_SIGN: {
				this._err(R.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = W.DATA;
				break;
			}
			case L.EOF: {
				this._err(R.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = W.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.AFTER_DOCTYPE_NAME;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.name += "�";
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(Ln(e) ? Vn(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(on.PUBLIC, !1) ? this.state = W.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(on.SYSTEM, !1) ? this.state = W.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(R.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case L.QUOTATION_MARK:
				this._err(R.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				this._err(R.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.QUOTATION_MARK:
				t.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				t.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case L.QUOTATION_MARK:
				this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.publicId += "�";
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case L.APOSTROPHE:
				this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.publicId += "�";
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.QUOTATION_MARK:
				this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.QUOTATION_MARK:
				t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED:
				this.state = W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case L.QUOTATION_MARK:
				this._err(R.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				this._err(R.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.QUOTATION_MARK:
				t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case L.APOSTROPHE:
				t.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(t);
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case L.QUOTATION_MARK:
				this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.systemId += "�";
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case L.APOSTROPHE:
				this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter), t.systemId += "�";
				break;
			case L.GREATER_THAN_SIGN:
				this._err(R.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case L.SPACE:
			case L.LINE_FEED:
			case L.TABULATION:
			case L.FORM_FEED: break;
			case L.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.EOF:
				this._err(R.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(R.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case L.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = W.DATA;
				break;
			case L.NULL:
				this._err(R.unexpectedNullCharacter);
				break;
			case L.EOF: this.emitCurrentDoctype(t), this._emitEOFToken();
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case L.RIGHT_SQUARE_BRACKET:
				this.state = W.CDATA_SECTION_BRACKET;
				break;
			case L.EOF:
				this._err(R.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === L.RIGHT_SQUARE_BRACKET ? this.state = W.CDATA_SECTION_END : (this._emitChars("]"), this.state = W.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case L.GREATER_THAN_SIGN:
				this.state = W.DATA;
				break;
			case L.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = W.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) {
			if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
			else {
				this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
				return;
			}
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(L.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Bn(this.preprocessor.peek(1)) ? W.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		Bn(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === L.SEMICOLON && this._err(R.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, Kn = /* @__PURE__ */ new Set([
	H.DD,
	H.DT,
	H.LI,
	H.OPTGROUP,
	H.OPTION,
	H.P,
	H.RB,
	H.RP,
	H.RT,
	H.RTC
]), qn = /* @__PURE__ */ new Set([
	...Kn,
	H.CAPTION,
	H.COLGROUP,
	H.TBODY,
	H.TD,
	H.TFOOT,
	H.TH,
	H.THEAD,
	H.TR
]), Jn = /* @__PURE__ */ new Set([
	H.APPLET,
	H.CAPTION,
	H.HTML,
	H.MARQUEE,
	H.OBJECT,
	H.TABLE,
	H.TD,
	H.TEMPLATE,
	H.TH
]), Yn = /* @__PURE__ */ new Set([
	...Jn,
	H.OL,
	H.UL
]), Xn = /* @__PURE__ */ new Set([...Jn, H.BUTTON]), Zn = /* @__PURE__ */ new Set([
	H.ANNOTATION_XML,
	H.MI,
	H.MN,
	H.MO,
	H.MS,
	H.MTEXT
]), Qn = /* @__PURE__ */ new Set([
	H.DESC,
	H.FOREIGN_OBJECT,
	H.TITLE
]), $n = /* @__PURE__ */ new Set([
	H.TR,
	H.TEMPLATE,
	H.HTML
]), er = /* @__PURE__ */ new Set([
	H.TBODY,
	H.TFOOT,
	H.THEAD,
	H.TEMPLATE,
	H.HTML
]), tr = /* @__PURE__ */ new Set([
	H.TABLE,
	H.TEMPLATE,
	H.HTML
]), nr = /* @__PURE__ */ new Set([H.TD, H.TH]), rr = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = H.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === H.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === B.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== B.HTML);
		this.shortenToLength(Math.max(t, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(Math.max(t, 0));
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(Math.max(n, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(Pn, B.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(nr, B.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(tr, B.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(er, B.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo($n, B.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === H.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === H.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case B.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case B.SVG:
					if (Qn.has(r)) return !1;
					break;
				case B.MATHML: if (Zn.has(r)) return !1;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, Jn);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, Yn);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, Xn);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case B.HTML:
					if (Pn.has(t)) return !0;
					if (Jn.has(t)) return !1;
					break;
				case B.SVG:
					if (Qn.has(t)) return !1;
					break;
				case B.MATHML: if (Zn.has(t)) return !1;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === B.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case H.TABLE:
			case H.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === B.HTML) switch (this.tagIDs[e]) {
			case H.TBODY:
			case H.THEAD:
			case H.TFOOT: return !0;
			case H.TABLE:
			case H.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === B.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case H.OPTION:
			case H.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && Kn.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && qn.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && qn.has(this.currentTagId);) this.pop();
	}
}, ir = 3, ar;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(ar ||= {});
var or = { type: ar.Marker }, sr = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === ar.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < ir) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < ir) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= ir && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(or);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: ar.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: ar.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t !== -1 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(or);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === ar.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === ar.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === ar.Element && t.element === e);
	}
}, cr = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: An.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			cr.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (cr.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		cr.appendChild(e, cr.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && cr.isTextNode(r) ? r.value += t : cr.insertBefore(e, cr.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
}, lr = "html", ur = "about:legacy-compat", dr = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", fr = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), pr = [
	...fr,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], mr = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), hr = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], gr = [
	...hr,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function _r(e, t) {
	return t.some((t) => e.startsWith(t));
}
function vr(e) {
	return e.name === lr && e.publicId === null && (e.systemId === null || e.systemId === ur);
}
function yr(e) {
	if (e.name !== lr) return An.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === dr) return An.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), mr.has(n)) return An.QUIRKS;
		let e = t === null ? pr : fr;
		if (_r(n, e)) return An.QUIRKS;
		if (e = t === null ? hr : gr, _r(n, e)) return An.LIMITED_QUIRKS;
	}
	return An.NO_QUIRKS;
}
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/common/foreign-content.js
var br = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, xr = "definitionurl", Sr = "definitionURL", Cr = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), wr = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: B.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: B.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: B.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: B.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: B.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: B.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: B.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: B.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: B.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: B.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: B.XMLNS
	}]
]), Tr = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), Er = /* @__PURE__ */ new Set([
	H.B,
	H.BIG,
	H.BLOCKQUOTE,
	H.BODY,
	H.BR,
	H.CENTER,
	H.CODE,
	H.DD,
	H.DIV,
	H.DL,
	H.DT,
	H.EM,
	H.EMBED,
	H.H1,
	H.H2,
	H.H3,
	H.H4,
	H.H5,
	H.H6,
	H.HEAD,
	H.HR,
	H.I,
	H.IMG,
	H.LI,
	H.LISTING,
	H.MENU,
	H.META,
	H.NOBR,
	H.OL,
	H.P,
	H.PRE,
	H.RUBY,
	H.S,
	H.SMALL,
	H.SPAN,
	H.STRONG,
	H.STRIKE,
	H.SUB,
	H.SUP,
	H.TABLE,
	H.TT,
	H.U,
	H.UL,
	H.VAR
]);
function Dr(e) {
	let t = e.tagID;
	return t === H.FONT && e.attrs.some(({ name: e }) => e === kn.COLOR || e === kn.SIZE || e === kn.FACE) || Er.has(t);
}
function Or(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === xr) {
		e.attrs[t].name = Sr;
		break;
	}
}
function kr(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Cr.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Ar(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = wr.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function jr(e) {
	let t = Tr.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = Mn(e.tagName));
}
function Mr(e, t) {
	return t === B.MATHML && (e === H.MI || e === H.MO || e === H.MN || e === H.MS || e === H.MTEXT);
}
function Nr(e, t, n) {
	if (t === B.MATHML && e === H.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === kn.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === br.TEXT_HTML || t === br.APPLICATION_XML;
		}
	}
	return t === B.SVG && (e === H.FOREIGN_OBJECT || e === H.DESC || e === H.TITLE);
}
function Pr(e, t, n, r) {
	return (!r || r === B.HTML) && Nr(e, t, n) || (!r || r === B.MATHML) && Mr(e, t);
}
//#endregion
//#region ../node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/parser/index.js
var Fr = "hidden", Ir = 8, Lr = 3, G;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(G ||= {});
var Rr = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, zr = /* @__PURE__ */ new Set([
	H.TABLE,
	H.TBODY,
	H.TFOOT,
	H.THEAD,
	H.TR
]), Br = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: cr,
	onParseError: null
}, Vr = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = G.INITIAL, this.originalInsertionMode = G.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...Br,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Gn(this.options, this), this.activeFormattingElements = new sr(this.treeAdapter), this.fragmentContextID = n ? Mn(this.treeAdapter.getTagName(n)) : H.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new rr(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...Br,
			...t
		};
		e ??= n.treeAdapter.createElement(V.TEMPLATE, B.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", B.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === H.TEMPLATE && i.tmplInsertionModeStack.unshift(G.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? Rr, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === B.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, B.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = G.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = G.TEXT, this.originalInsertionMode = G.IN_BODY, this.tokenizer.state = Fn.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === V.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== B.HTML)) switch (this.fragmentContextID) {
			case H.TITLE:
			case H.TEXTAREA:
				this.tokenizer.state = Fn.RCDATA;
				break;
			case H.STYLE:
			case H.XMP:
			case H.IFRAME:
			case H.NOEMBED:
			case H.NOFRAMES:
			case H.NOSCRIPT:
				this.tokenizer.state = Fn.RAWTEXT;
				break;
			case H.SCRIPT:
				this.tokenizer.state = Fn.SCRIPT_DATA;
				break;
			case H.PLAINTEXT: this.tokenizer.state = Fn.PLAINTEXT;
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t ?? this.document, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, B.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, B.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(V.HTML, B.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, H.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === z.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === H.SVG && this.treeAdapter.getTagName(t) === V.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === B.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === H.MGLYPH || e.tagID === H.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, B.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case z.CHARACTER:
				this.onCharacter(e);
				break;
			case z.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case z.COMMENT:
				this.onComment(e);
				break;
			case z.DOCTYPE:
				this.onDoctype(e);
				break;
			case z.START_TAG:
				this._processStartTag(e);
				break;
			case z.END_TAG:
				this.onEndTag(e);
				break;
			case z.EOF:
				this.onEof(e);
				break;
			case z.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(e);
		}
	}
	_isIntegrationPoint(e, t, n) {
		return Pr(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === ar.Marker || this.openElements.contains(e.element)), n = t === -1 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = G.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(H.P), this.openElements.popUntilTagNamePopped(H.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case H.TR:
				this.insertionMode = G.IN_ROW;
				return;
			case H.TBODY:
			case H.THEAD:
			case H.TFOOT:
				this.insertionMode = G.IN_TABLE_BODY;
				return;
			case H.CAPTION:
				this.insertionMode = G.IN_CAPTION;
				return;
			case H.COLGROUP:
				this.insertionMode = G.IN_COLUMN_GROUP;
				return;
			case H.TABLE:
				this.insertionMode = G.IN_TABLE;
				return;
			case H.BODY:
				this.insertionMode = G.IN_BODY;
				return;
			case H.FRAMESET:
				this.insertionMode = G.IN_FRAMESET;
				return;
			case H.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case H.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case H.HTML:
				this.insertionMode = this.headElement ? G.AFTER_HEAD : G.BEFORE_HEAD;
				return;
			case H.TD:
			case H.TH:
				if (e > 0) {
					this.insertionMode = G.IN_CELL;
					return;
				}
				break;
			case H.HEAD: if (e > 0) {
				this.insertionMode = G.IN_HEAD;
				return;
			}
		}
		this.insertionMode = G.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === H.TEMPLATE) break;
			if (e === H.TABLE) {
				this.insertionMode = G.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = G.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return zr.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case H.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === B.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case H.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return Nn[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			ao(this, e);
			return;
		}
		switch (this.insertionMode) {
			case G.INITIAL:
				ei(this, e);
				break;
			case G.BEFORE_HTML:
				ri(this, e);
				break;
			case G.BEFORE_HEAD:
				oi(this, e);
				break;
			case G.IN_HEAD:
				ui(this, e);
				break;
			case G.IN_HEAD_NO_SCRIPT:
				pi(this, e);
				break;
			case G.AFTER_HEAD:
				gi(this, e);
				break;
			case G.IN_BODY:
			case G.IN_CAPTION:
			case G.IN_CELL:
			case G.IN_TEMPLATE:
				yi(this, e);
				break;
			case G.TEXT:
			case G.IN_SELECT:
			case G.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case G.IN_TABLE:
			case G.IN_TABLE_BODY:
			case G.IN_ROW:
				ma(this, e);
				break;
			case G.IN_TABLE_TEXT:
				Da(this, e);
				break;
			case G.IN_COLUMN_GROUP:
				Pa(this, e);
				break;
			case G.AFTER_BODY:
				Xa(this, e);
				break;
			case G.AFTER_AFTER_BODY: no(this, e);
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			io(this, e);
			return;
		}
		switch (this.insertionMode) {
			case G.INITIAL:
				ei(this, e);
				break;
			case G.BEFORE_HTML:
				ri(this, e);
				break;
			case G.BEFORE_HEAD:
				oi(this, e);
				break;
			case G.IN_HEAD:
				ui(this, e);
				break;
			case G.IN_HEAD_NO_SCRIPT:
				pi(this, e);
				break;
			case G.AFTER_HEAD:
				gi(this, e);
				break;
			case G.TEXT:
				this._insertCharacters(e);
				break;
			case G.IN_TABLE:
			case G.IN_TABLE_BODY:
			case G.IN_ROW:
				ma(this, e);
				break;
			case G.IN_COLUMN_GROUP:
				Pa(this, e);
				break;
			case G.AFTER_BODY:
				Xa(this, e);
				break;
			case G.AFTER_AFTER_BODY: no(this, e);
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			Yr(this, e);
			return;
		}
		switch (this.insertionMode) {
			case G.INITIAL:
			case G.BEFORE_HTML:
			case G.BEFORE_HEAD:
			case G.IN_HEAD:
			case G.IN_HEAD_NO_SCRIPT:
			case G.AFTER_HEAD:
			case G.IN_BODY:
			case G.IN_TABLE:
			case G.IN_CAPTION:
			case G.IN_COLUMN_GROUP:
			case G.IN_TABLE_BODY:
			case G.IN_ROW:
			case G.IN_CELL:
			case G.IN_SELECT:
			case G.IN_SELECT_IN_TABLE:
			case G.IN_TEMPLATE:
			case G.IN_FRAMESET:
			case G.AFTER_FRAMESET:
				Yr(this, e);
				break;
			case G.IN_TABLE_TEXT:
				Oa(this, e);
				break;
			case G.AFTER_BODY:
				Xr(this, e);
				break;
			case G.AFTER_AFTER_BODY:
			case G.AFTER_AFTER_FRAMESET: Zr(this, e);
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case G.INITIAL:
				$r(this, e);
				break;
			case G.BEFORE_HEAD:
			case G.IN_HEAD:
			case G.IN_HEAD_NO_SCRIPT:
			case G.AFTER_HEAD:
				this._err(e, R.misplacedDoctype);
				break;
			case G.IN_TABLE_TEXT: Oa(this, e);
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, R.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? so(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case G.INITIAL:
				ei(this, e);
				break;
			case G.BEFORE_HTML:
				ti(this, e);
				break;
			case G.BEFORE_HEAD:
				ii(this, e);
				break;
			case G.IN_HEAD:
				si(this, e);
				break;
			case G.IN_HEAD_NO_SCRIPT:
				di(this, e);
				break;
			case G.AFTER_HEAD:
				mi(this, e);
				break;
			case G.IN_BODY:
				Qi(this, e);
				break;
			case G.IN_TABLE:
				Ca(this, e);
				break;
			case G.IN_TABLE_TEXT:
				Oa(this, e);
				break;
			case G.IN_CAPTION:
				Aa(this, e);
				break;
			case G.IN_COLUMN_GROUP:
				Ma(this, e);
				break;
			case G.IN_TABLE_BODY:
				Fa(this, e);
				break;
			case G.IN_ROW:
				La(this, e);
				break;
			case G.IN_CELL:
				za(this, e);
				break;
			case G.IN_SELECT:
				Va(this, e);
				break;
			case G.IN_SELECT_IN_TABLE:
				Ua(this, e);
				break;
			case G.IN_TEMPLATE:
				Ga(this, e);
				break;
			case G.AFTER_BODY:
				Ja(this, e);
				break;
			case G.IN_FRAMESET:
				Za(this, e);
				break;
			case G.AFTER_FRAMESET:
				$a(this, e);
				break;
			case G.AFTER_AFTER_BODY:
				to(this, e);
				break;
			case G.AFTER_AFTER_FRAMESET: ro(this, e);
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? co(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case G.INITIAL:
				ei(this, e);
				break;
			case G.BEFORE_HTML:
				ni(this, e);
				break;
			case G.BEFORE_HEAD:
				ai(this, e);
				break;
			case G.IN_HEAD:
				ci(this, e);
				break;
			case G.IN_HEAD_NO_SCRIPT:
				fi(this, e);
				break;
			case G.AFTER_HEAD:
				hi(this, e);
				break;
			case G.IN_BODY:
				ua(this, e);
				break;
			case G.TEXT:
				fa(this, e);
				break;
			case G.IN_TABLE:
				wa(this, e);
				break;
			case G.IN_TABLE_TEXT:
				Oa(this, e);
				break;
			case G.IN_CAPTION:
				ja(this, e);
				break;
			case G.IN_COLUMN_GROUP:
				Na(this, e);
				break;
			case G.IN_TABLE_BODY:
				Ia(this, e);
				break;
			case G.IN_ROW:
				Ra(this, e);
				break;
			case G.IN_CELL:
				Ba(this, e);
				break;
			case G.IN_SELECT:
				Ha(this, e);
				break;
			case G.IN_SELECT_IN_TABLE:
				Wa(this, e);
				break;
			case G.IN_TEMPLATE:
				Ka(this, e);
				break;
			case G.AFTER_BODY:
				Ya(this, e);
				break;
			case G.IN_FRAMESET:
				Qa(this, e);
				break;
			case G.AFTER_FRAMESET:
				eo(this, e);
				break;
			case G.AFTER_AFTER_BODY: no(this, e);
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case G.INITIAL:
				ei(this, e);
				break;
			case G.BEFORE_HTML:
				ri(this, e);
				break;
			case G.BEFORE_HEAD:
				oi(this, e);
				break;
			case G.IN_HEAD:
				ui(this, e);
				break;
			case G.IN_HEAD_NO_SCRIPT:
				pi(this, e);
				break;
			case G.AFTER_HEAD:
				gi(this, e);
				break;
			case G.IN_BODY:
			case G.IN_TABLE:
			case G.IN_CAPTION:
			case G.IN_COLUMN_GROUP:
			case G.IN_TABLE_BODY:
			case G.IN_ROW:
			case G.IN_CELL:
			case G.IN_SELECT:
			case G.IN_SELECT_IN_TABLE:
				da(this, e);
				break;
			case G.TEXT:
				pa(this, e);
				break;
			case G.IN_TABLE_TEXT:
				Oa(this, e);
				break;
			case G.IN_TEMPLATE:
				qa(this, e);
				break;
			case G.AFTER_BODY:
			case G.IN_FRAMESET:
			case G.AFTER_FRAMESET:
			case G.AFTER_AFTER_BODY:
			case G.AFTER_AFTER_FRAMESET: Qr(this, e);
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === L.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case G.IN_HEAD:
			case G.IN_HEAD_NO_SCRIPT:
			case G.AFTER_HEAD:
			case G.TEXT:
			case G.IN_COLUMN_GROUP:
			case G.IN_SELECT:
			case G.IN_SELECT_IN_TABLE:
			case G.IN_FRAMESET:
			case G.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case G.IN_BODY:
			case G.IN_CAPTION:
			case G.IN_CELL:
			case G.IN_TEMPLATE:
			case G.AFTER_BODY:
			case G.AFTER_AFTER_BODY:
			case G.AFTER_AFTER_FRAMESET:
				vi(this, e);
				break;
			case G.IN_TABLE:
			case G.IN_TABLE_BODY:
			case G.IN_ROW:
				ma(this, e);
				break;
			case G.IN_TABLE_TEXT: Ea(this, e);
		}
	}
};
function Hr(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : la(e, t), n;
}
function Ur(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
}
function Wr(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= Lr;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = Gr(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function Gr(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function Kr(e, t, n) {
	let r = Mn(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === H.TEMPLATE && i === B.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function qr(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function Jr(e, t) {
	for (let n = 0; n < Ir; n++) {
		let n = Hr(e, t);
		if (!n) break;
		let r = Ur(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = Wr(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && Kr(e, a, i), qr(e, r, n);
	}
}
function Yr(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function Xr(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function Zr(e, t) {
	e._appendCommentNode(t, e.document);
}
function Qr(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function $r(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? An.QUIRKS : yr(t);
	vr(t) || e._err(t, R.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = G.BEFORE_HTML;
}
function ei(e, t) {
	e._err(t, R.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, An.QUIRKS), e.insertionMode = G.BEFORE_HTML, e._processToken(t);
}
function ti(e, t) {
	t.tagID === H.HTML ? (e._insertElement(t, B.HTML), e.insertionMode = G.BEFORE_HEAD) : ri(e, t);
}
function ni(e, t) {
	let n = t.tagID;
	(n === H.HTML || n === H.HEAD || n === H.BODY || n === H.BR) && ri(e, t);
}
function ri(e, t) {
	e._insertFakeRootElement(), e.insertionMode = G.BEFORE_HEAD, e._processToken(t);
}
function ii(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.HEAD:
			e._insertElement(t, B.HTML), e.headElement = e.openElements.current, e.insertionMode = G.IN_HEAD;
			break;
		default: oi(e, t);
	}
}
function ai(e, t) {
	let n = t.tagID;
	n === H.HEAD || n === H.BODY || n === H.HTML || n === H.BR ? oi(e, t) : e._err(t, R.endTagWithoutMatchingOpenElement);
}
function oi(e, t) {
	e._insertFakeElement(V.HEAD, H.HEAD), e.headElement = e.openElements.current, e.insertionMode = G.IN_HEAD, e._processToken(t);
}
function si(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.BASE:
		case H.BASEFONT:
		case H.BGSOUND:
		case H.LINK:
		case H.META:
			e._appendElement(t, B.HTML), t.ackSelfClosing = !0;
			break;
		case H.TITLE:
			e._switchToTextParsing(t, Fn.RCDATA);
			break;
		case H.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Fn.RAWTEXT) : (e._insertElement(t, B.HTML), e.insertionMode = G.IN_HEAD_NO_SCRIPT);
			break;
		case H.NOFRAMES:
		case H.STYLE:
			e._switchToTextParsing(t, Fn.RAWTEXT);
			break;
		case H.SCRIPT:
			e._switchToTextParsing(t, Fn.SCRIPT_DATA);
			break;
		case H.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = G.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(G.IN_TEMPLATE);
			break;
		case H.HEAD:
			e._err(t, R.misplacedStartTagForHeadElement);
			break;
		default: ui(e, t);
	}
}
function ci(e, t) {
	switch (t.tagID) {
		case H.HEAD:
			e.openElements.pop(), e.insertionMode = G.AFTER_HEAD;
			break;
		case H.BODY:
		case H.BR:
		case H.HTML:
			ui(e, t);
			break;
		case H.TEMPLATE:
			li(e, t);
			break;
		default: e._err(t, R.endTagWithoutMatchingOpenElement);
	}
}
function li(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== H.TEMPLATE && e._err(t, R.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(H.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, R.endTagWithoutMatchingOpenElement);
}
function ui(e, t) {
	e.openElements.pop(), e.insertionMode = G.AFTER_HEAD, e._processToken(t);
}
function di(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.BASEFONT:
		case H.BGSOUND:
		case H.HEAD:
		case H.LINK:
		case H.META:
		case H.NOFRAMES:
		case H.STYLE:
			si(e, t);
			break;
		case H.NOSCRIPT:
			e._err(t, R.nestedNoscriptInHead);
			break;
		default: pi(e, t);
	}
}
function fi(e, t) {
	switch (t.tagID) {
		case H.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = G.IN_HEAD;
			break;
		case H.BR:
			pi(e, t);
			break;
		default: e._err(t, R.endTagWithoutMatchingOpenElement);
	}
}
function pi(e, t) {
	let n = t.type === z.EOF ? R.openElementsLeftAfterEof : R.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = G.IN_HEAD, e._processToken(t);
}
function mi(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.BODY:
			e._insertElement(t, B.HTML), e.framesetOk = !1, e.insertionMode = G.IN_BODY;
			break;
		case H.FRAMESET:
			e._insertElement(t, B.HTML), e.insertionMode = G.IN_FRAMESET;
			break;
		case H.BASE:
		case H.BASEFONT:
		case H.BGSOUND:
		case H.LINK:
		case H.META:
		case H.NOFRAMES:
		case H.SCRIPT:
		case H.STYLE:
		case H.TEMPLATE:
		case H.TITLE:
			e._err(t, R.abandonedHeadElementChild), e.openElements.push(e.headElement, H.HEAD), si(e, t), e.openElements.remove(e.headElement);
			break;
		case H.HEAD:
			e._err(t, R.misplacedStartTagForHeadElement);
			break;
		default: gi(e, t);
	}
}
function hi(e, t) {
	switch (t.tagID) {
		case H.BODY:
		case H.HTML:
		case H.BR:
			gi(e, t);
			break;
		case H.TEMPLATE:
			li(e, t);
			break;
		default: e._err(t, R.endTagWithoutMatchingOpenElement);
	}
}
function gi(e, t) {
	e._insertFakeElement(V.BODY, H.BODY), e.insertionMode = G.IN_BODY, _i(e, t);
}
function _i(e, t) {
	switch (t.type) {
		case z.CHARACTER:
			yi(e, t);
			break;
		case z.WHITESPACE_CHARACTER:
			vi(e, t);
			break;
		case z.COMMENT:
			Yr(e, t);
			break;
		case z.START_TAG:
			Qi(e, t);
			break;
		case z.END_TAG:
			ua(e, t);
			break;
		case z.EOF: da(e, t);
	}
}
function vi(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function yi(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function bi(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function xi(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Si(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_FRAMESET);
}
function Ci(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML);
}
function wi(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Pn.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, B.HTML);
}
function Ti(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Ei(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML), n || (e.formElement = e.openElements.current));
}
function Di(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === H.LI && r === H.LI || (n === H.DD || n === H.DT) && (r === H.DD || r === H.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== H.ADDRESS && r !== H.DIV && r !== H.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML);
}
function Oi(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML), e.tokenizer.state = Fn.PLAINTEXT;
}
function ki(e, t) {
	e.openElements.hasInScope(H.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(H.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML), e.framesetOk = !1;
}
function Ai(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(V.A);
	n && (Jr(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function ji(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Mi(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(H.NOBR) && (Jr(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, B.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Ni(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Pi(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== An.QUIRKS && e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._insertElement(t, B.HTML), e.framesetOk = !1, e.insertionMode = G.IN_TABLE;
}
function Fi(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, B.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Ii(e) {
	let t = mn(e, kn.TYPE);
	return t != null && t.toLowerCase() === Fr;
}
function Li(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, B.HTML), Ii(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Ri(e, t) {
	e._appendElement(t, B.HTML), t.ackSelfClosing = !0;
}
function zi(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._appendElement(t, B.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Bi(e, t) {
	t.tagName = V.IMG, t.tagID = H.IMG, Fi(e, t);
}
function Vi(e, t) {
	e._insertElement(t, B.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Fn.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = G.TEXT;
}
function Hi(e, t) {
	e.openElements.hasInButtonScope(H.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Fn.RAWTEXT);
}
function Ui(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Fn.RAWTEXT);
}
function Wi(e, t) {
	e._switchToTextParsing(t, Fn.RAWTEXT);
}
function Gi(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === G.IN_TABLE || e.insertionMode === G.IN_CAPTION || e.insertionMode === G.IN_TABLE_BODY || e.insertionMode === G.IN_ROW || e.insertionMode === G.IN_CELL ? G.IN_SELECT_IN_TABLE : G.IN_SELECT;
}
function Ki(e, t) {
	e.openElements.currentTagId === H.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML);
}
function qi(e, t) {
	e.openElements.hasInScope(H.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, B.HTML);
}
function Ji(e, t) {
	e.openElements.hasInScope(H.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(H.RTC), e._insertElement(t, B.HTML);
}
function Yi(e, t) {
	e._reconstructActiveFormattingElements(), Or(t), Ar(t), t.selfClosing ? e._appendElement(t, B.MATHML) : e._insertElement(t, B.MATHML), t.ackSelfClosing = !0;
}
function Xi(e, t) {
	e._reconstructActiveFormattingElements(), kr(t), Ar(t), t.selfClosing ? e._appendElement(t, B.SVG) : e._insertElement(t, B.SVG), t.ackSelfClosing = !0;
}
function Zi(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML);
}
function Qi(e, t) {
	switch (t.tagID) {
		case H.I:
		case H.S:
		case H.B:
		case H.U:
		case H.EM:
		case H.TT:
		case H.BIG:
		case H.CODE:
		case H.FONT:
		case H.SMALL:
		case H.STRIKE:
		case H.STRONG:
			ji(e, t);
			break;
		case H.A:
			Ai(e, t);
			break;
		case H.H1:
		case H.H2:
		case H.H3:
		case H.H4:
		case H.H5:
		case H.H6:
			wi(e, t);
			break;
		case H.P:
		case H.DL:
		case H.OL:
		case H.UL:
		case H.DIV:
		case H.DIR:
		case H.NAV:
		case H.MAIN:
		case H.MENU:
		case H.ASIDE:
		case H.CENTER:
		case H.FIGURE:
		case H.FOOTER:
		case H.HEADER:
		case H.HGROUP:
		case H.DIALOG:
		case H.DETAILS:
		case H.ADDRESS:
		case H.ARTICLE:
		case H.SEARCH:
		case H.SECTION:
		case H.SUMMARY:
		case H.FIELDSET:
		case H.BLOCKQUOTE:
		case H.FIGCAPTION:
			Ci(e, t);
			break;
		case H.LI:
		case H.DD:
		case H.DT:
			Di(e, t);
			break;
		case H.BR:
		case H.IMG:
		case H.WBR:
		case H.AREA:
		case H.EMBED:
		case H.KEYGEN:
			Fi(e, t);
			break;
		case H.HR:
			zi(e, t);
			break;
		case H.RB:
		case H.RTC:
			qi(e, t);
			break;
		case H.RT:
		case H.RP:
			Ji(e, t);
			break;
		case H.PRE:
		case H.LISTING:
			Ti(e, t);
			break;
		case H.XMP:
			Hi(e, t);
			break;
		case H.SVG:
			Xi(e, t);
			break;
		case H.HTML:
			bi(e, t);
			break;
		case H.BASE:
		case H.LINK:
		case H.META:
		case H.STYLE:
		case H.TITLE:
		case H.SCRIPT:
		case H.BGSOUND:
		case H.BASEFONT:
		case H.TEMPLATE:
			si(e, t);
			break;
		case H.BODY:
			xi(e, t);
			break;
		case H.FORM:
			Ei(e, t);
			break;
		case H.NOBR:
			Mi(e, t);
			break;
		case H.MATH:
			Yi(e, t);
			break;
		case H.TABLE:
			Pi(e, t);
			break;
		case H.INPUT:
			Li(e, t);
			break;
		case H.PARAM:
		case H.TRACK:
		case H.SOURCE:
			Ri(e, t);
			break;
		case H.IMAGE:
			Bi(e, t);
			break;
		case H.BUTTON:
			ki(e, t);
			break;
		case H.APPLET:
		case H.OBJECT:
		case H.MARQUEE:
			Ni(e, t);
			break;
		case H.IFRAME:
			Ui(e, t);
			break;
		case H.SELECT:
			Gi(e, t);
			break;
		case H.OPTION:
		case H.OPTGROUP:
			Ki(e, t);
			break;
		case H.NOEMBED:
		case H.NOFRAMES:
			Wi(e, t);
			break;
		case H.FRAMESET:
			Si(e, t);
			break;
		case H.TEXTAREA:
			Vi(e, t);
			break;
		case H.NOSCRIPT:
			e.options.scriptingEnabled ? Wi(e, t) : Zi(e, t);
			break;
		case H.PLAINTEXT:
			Oi(e, t);
			break;
		case H.COL:
		case H.TH:
		case H.TD:
		case H.TR:
		case H.HEAD:
		case H.FRAME:
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
		case H.CAPTION:
		case H.COLGROUP: break;
		default: Zi(e, t);
	}
}
function $i(e, t) {
	if (e.openElements.hasInScope(H.BODY) && (e.insertionMode = G.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function ea(e, t) {
	e.openElements.hasInScope(H.BODY) && (e.insertionMode = G.AFTER_BODY, Ya(e, t));
}
function ta(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function na(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(H.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(H.FORM) : n && e.openElements.remove(n));
}
function ra(e) {
	e.openElements.hasInButtonScope(H.P) || e._insertFakeElement(V.P, H.P), e._closePElement();
}
function ia(e) {
	e.openElements.hasInListItemScope(H.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(H.LI), e.openElements.popUntilTagNamePopped(H.LI));
}
function aa(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function oa(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function sa(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function ca(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(V.BR, H.BR), e.openElements.pop(), e.framesetOk = !1;
}
function la(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== H.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function ua(e, t) {
	switch (t.tagID) {
		case H.A:
		case H.B:
		case H.I:
		case H.S:
		case H.U:
		case H.EM:
		case H.TT:
		case H.BIG:
		case H.CODE:
		case H.FONT:
		case H.NOBR:
		case H.SMALL:
		case H.STRIKE:
		case H.STRONG:
			Jr(e, t);
			break;
		case H.P:
			ra(e);
			break;
		case H.DL:
		case H.UL:
		case H.OL:
		case H.DIR:
		case H.DIV:
		case H.NAV:
		case H.PRE:
		case H.MAIN:
		case H.MENU:
		case H.ASIDE:
		case H.BUTTON:
		case H.CENTER:
		case H.FIGURE:
		case H.FOOTER:
		case H.HEADER:
		case H.HGROUP:
		case H.DIALOG:
		case H.ADDRESS:
		case H.ARTICLE:
		case H.DETAILS:
		case H.SEARCH:
		case H.SECTION:
		case H.SUMMARY:
		case H.LISTING:
		case H.FIELDSET:
		case H.BLOCKQUOTE:
		case H.FIGCAPTION:
			ta(e, t);
			break;
		case H.LI:
			ia(e);
			break;
		case H.DD:
		case H.DT:
			aa(e, t);
			break;
		case H.H1:
		case H.H2:
		case H.H3:
		case H.H4:
		case H.H5:
		case H.H6:
			oa(e);
			break;
		case H.BR:
			ca(e);
			break;
		case H.BODY:
			$i(e, t);
			break;
		case H.HTML:
			ea(e, t);
			break;
		case H.FORM:
			na(e);
			break;
		case H.APPLET:
		case H.OBJECT:
		case H.MARQUEE:
			sa(e, t);
			break;
		case H.TEMPLATE:
			li(e, t);
			break;
		default: la(e, t);
	}
}
function da(e, t) {
	e.tmplInsertionModeStack.length > 0 ? qa(e, t) : Qr(e, t);
}
function fa(e, t) {
	var n;
	t.tagID === H.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function pa(e, t) {
	e._err(t, R.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function ma(e, t) {
	if (e.openElements.currentTagId !== void 0 && zr.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = G.IN_TABLE_TEXT, t.type) {
		case z.CHARACTER:
			Da(e, t);
			break;
		case z.WHITESPACE_CHARACTER: Ea(e, t);
	}
	else Ta(e, t);
}
function ha(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_CAPTION;
}
function ga(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_COLUMN_GROUP;
}
function _a(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(V.COLGROUP, H.COLGROUP), e.insertionMode = G.IN_COLUMN_GROUP, Ma(e, t);
}
function va(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_TABLE_BODY;
}
function ya(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(V.TBODY, H.TBODY), e.insertionMode = G.IN_TABLE_BODY, Fa(e, t);
}
function ba(e, t) {
	e.openElements.hasInTableScope(H.TABLE) && (e.openElements.popUntilTagNamePopped(H.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function xa(e, t) {
	Ii(t) ? e._appendElement(t, B.HTML) : Ta(e, t), t.ackSelfClosing = !0;
}
function Sa(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, B.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function Ca(e, t) {
	switch (t.tagID) {
		case H.TD:
		case H.TH:
		case H.TR:
			ya(e, t);
			break;
		case H.STYLE:
		case H.SCRIPT:
		case H.TEMPLATE:
			si(e, t);
			break;
		case H.COL:
			_a(e, t);
			break;
		case H.FORM:
			Sa(e, t);
			break;
		case H.TABLE:
			ba(e, t);
			break;
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
			va(e, t);
			break;
		case H.INPUT:
			xa(e, t);
			break;
		case H.CAPTION:
			ha(e, t);
			break;
		case H.COLGROUP:
			ga(e, t);
			break;
		default: Ta(e, t);
	}
}
function wa(e, t) {
	switch (t.tagID) {
		case H.TABLE:
			e.openElements.hasInTableScope(H.TABLE) && (e.openElements.popUntilTagNamePopped(H.TABLE), e._resetInsertionMode());
			break;
		case H.TEMPLATE:
			li(e, t);
			break;
		case H.BODY:
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.HTML:
		case H.TBODY:
		case H.TD:
		case H.TFOOT:
		case H.TH:
		case H.THEAD:
		case H.TR: break;
		default: Ta(e, t);
	}
}
function Ta(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, _i(e, t), e.fosterParentingEnabled = n;
}
function Ea(e, t) {
	e.pendingCharacterTokens.push(t);
}
function Da(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Oa(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) Ta(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var ka = /* @__PURE__ */ new Set([
	H.CAPTION,
	H.COL,
	H.COLGROUP,
	H.TBODY,
	H.TD,
	H.TFOOT,
	H.TH,
	H.THEAD,
	H.TR
]);
function Aa(e, t) {
	let n = t.tagID;
	ka.has(n) ? e.openElements.hasInTableScope(H.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(H.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = G.IN_TABLE, Ca(e, t)) : Qi(e, t);
}
function ja(e, t) {
	let n = t.tagID;
	switch (n) {
		case H.CAPTION:
		case H.TABLE:
			e.openElements.hasInTableScope(H.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(H.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = G.IN_TABLE, n === H.TABLE && wa(e, t));
			break;
		case H.BODY:
		case H.COL:
		case H.COLGROUP:
		case H.HTML:
		case H.TBODY:
		case H.TD:
		case H.TFOOT:
		case H.TH:
		case H.THEAD:
		case H.TR: break;
		default: ua(e, t);
	}
}
function Ma(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.COL:
			e._appendElement(t, B.HTML), t.ackSelfClosing = !0;
			break;
		case H.TEMPLATE:
			si(e, t);
			break;
		default: Pa(e, t);
	}
}
function Na(e, t) {
	switch (t.tagID) {
		case H.COLGROUP:
			e.openElements.currentTagId === H.COLGROUP && (e.openElements.pop(), e.insertionMode = G.IN_TABLE);
			break;
		case H.TEMPLATE:
			li(e, t);
			break;
		case H.COL: break;
		default: Pa(e, t);
	}
}
function Pa(e, t) {
	e.openElements.currentTagId === H.COLGROUP && (e.openElements.pop(), e.insertionMode = G.IN_TABLE, e._processToken(t));
}
function Fa(e, t) {
	switch (t.tagID) {
		case H.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_ROW;
			break;
		case H.TH:
		case H.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(V.TR, H.TR), e.insertionMode = G.IN_ROW, La(e, t);
			break;
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE, Ca(e, t));
			break;
		default: Ca(e, t);
	}
}
function Ia(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE);
			break;
		case H.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE, wa(e, t));
			break;
		case H.BODY:
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.HTML:
		case H.TD:
		case H.TH:
		case H.TR: break;
		default: wa(e, t);
	}
}
function La(e, t) {
	switch (t.tagID) {
		case H.TH:
		case H.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, B.HTML), e.insertionMode = G.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
		case H.TR:
			e.openElements.hasInTableScope(H.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE_BODY, Fa(e, t));
			break;
		default: Ca(e, t);
	}
}
function Ra(e, t) {
	switch (t.tagID) {
		case H.TR:
			e.openElements.hasInTableScope(H.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE_BODY);
			break;
		case H.TABLE:
			e.openElements.hasInTableScope(H.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE_BODY, Ia(e, t));
			break;
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(H.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = G.IN_TABLE_BODY, Ia(e, t));
			break;
		case H.BODY:
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.HTML:
		case H.TD:
		case H.TH: break;
		default: wa(e, t);
	}
}
function za(e, t) {
	let n = t.tagID;
	ka.has(n) ? (e.openElements.hasInTableScope(H.TD) || e.openElements.hasInTableScope(H.TH)) && (e._closeTableCell(), La(e, t)) : Qi(e, t);
}
function Ba(e, t) {
	let n = t.tagID;
	switch (n) {
		case H.TD:
		case H.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = G.IN_ROW);
			break;
		case H.TABLE:
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
		case H.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), Ra(e, t));
			break;
		case H.BODY:
		case H.CAPTION:
		case H.COL:
		case H.COLGROUP:
		case H.HTML: break;
		default: ua(e, t);
	}
}
function Va(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.OPTION:
			e.openElements.currentTagId === H.OPTION && e.openElements.pop(), e._insertElement(t, B.HTML);
			break;
		case H.OPTGROUP:
			e.openElements.currentTagId === H.OPTION && e.openElements.pop(), e.openElements.currentTagId === H.OPTGROUP && e.openElements.pop(), e._insertElement(t, B.HTML);
			break;
		case H.HR:
			e.openElements.currentTagId === H.OPTION && e.openElements.pop(), e.openElements.currentTagId === H.OPTGROUP && e.openElements.pop(), e._appendElement(t, B.HTML), t.ackSelfClosing = !0;
			break;
		case H.INPUT:
		case H.KEYGEN:
		case H.TEXTAREA:
		case H.SELECT:
			e.openElements.hasInSelectScope(H.SELECT) && (e.openElements.popUntilTagNamePopped(H.SELECT), e._resetInsertionMode(), t.tagID !== H.SELECT && e._processStartTag(t));
			break;
		case H.SCRIPT:
		case H.TEMPLATE: si(e, t);
	}
}
function Ha(e, t) {
	switch (t.tagID) {
		case H.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === H.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === H.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === H.OPTGROUP && e.openElements.pop();
			break;
		case H.OPTION:
			e.openElements.currentTagId === H.OPTION && e.openElements.pop();
			break;
		case H.SELECT:
			e.openElements.hasInSelectScope(H.SELECT) && (e.openElements.popUntilTagNamePopped(H.SELECT), e._resetInsertionMode());
			break;
		case H.TEMPLATE: li(e, t);
	}
}
function Ua(e, t) {
	let n = t.tagID;
	n === H.CAPTION || n === H.TABLE || n === H.TBODY || n === H.TFOOT || n === H.THEAD || n === H.TR || n === H.TD || n === H.TH ? (e.openElements.popUntilTagNamePopped(H.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Va(e, t);
}
function Wa(e, t) {
	let n = t.tagID;
	n === H.CAPTION || n === H.TABLE || n === H.TBODY || n === H.TFOOT || n === H.THEAD || n === H.TR || n === H.TD || n === H.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(H.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Ha(e, t);
}
function Ga(e, t) {
	switch (t.tagID) {
		case H.BASE:
		case H.BASEFONT:
		case H.BGSOUND:
		case H.LINK:
		case H.META:
		case H.NOFRAMES:
		case H.SCRIPT:
		case H.STYLE:
		case H.TEMPLATE:
		case H.TITLE:
			si(e, t);
			break;
		case H.CAPTION:
		case H.COLGROUP:
		case H.TBODY:
		case H.TFOOT:
		case H.THEAD:
			e.tmplInsertionModeStack[0] = G.IN_TABLE, e.insertionMode = G.IN_TABLE, Ca(e, t);
			break;
		case H.COL:
			e.tmplInsertionModeStack[0] = G.IN_COLUMN_GROUP, e.insertionMode = G.IN_COLUMN_GROUP, Ma(e, t);
			break;
		case H.TR:
			e.tmplInsertionModeStack[0] = G.IN_TABLE_BODY, e.insertionMode = G.IN_TABLE_BODY, Fa(e, t);
			break;
		case H.TD:
		case H.TH:
			e.tmplInsertionModeStack[0] = G.IN_ROW, e.insertionMode = G.IN_ROW, La(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = G.IN_BODY, e.insertionMode = G.IN_BODY, Qi(e, t);
	}
}
function Ka(e, t) {
	t.tagID === H.TEMPLATE && li(e, t);
}
function qa(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(H.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : Qr(e, t);
}
function Ja(e, t) {
	t.tagID === H.HTML ? Qi(e, t) : Xa(e, t);
}
function Ya(e, t) {
	if (t.tagID === H.HTML) {
		if (e.fragmentContext || (e.insertionMode = G.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === H.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else Xa(e, t);
}
function Xa(e, t) {
	e.insertionMode = G.IN_BODY, _i(e, t);
}
function Za(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.FRAMESET:
			e._insertElement(t, B.HTML);
			break;
		case H.FRAME:
			e._appendElement(t, B.HTML), t.ackSelfClosing = !0;
			break;
		case H.NOFRAMES: si(e, t);
	}
}
function Qa(e, t) {
	t.tagID === H.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== H.FRAMESET && (e.insertionMode = G.AFTER_FRAMESET));
}
function $a(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.NOFRAMES: si(e, t);
	}
}
function eo(e, t) {
	t.tagID === H.HTML && (e.insertionMode = G.AFTER_AFTER_FRAMESET);
}
function to(e, t) {
	t.tagID === H.HTML ? Qi(e, t) : no(e, t);
}
function no(e, t) {
	e.insertionMode = G.IN_BODY, _i(e, t);
}
function ro(e, t) {
	switch (t.tagID) {
		case H.HTML:
			Qi(e, t);
			break;
		case H.NOFRAMES: si(e, t);
	}
}
function io(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function ao(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function oo(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== B.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function so(e, t) {
	if (Dr(t)) oo(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === B.MATHML ? Or(t) : r === B.SVG && (jr(t), kr(t)), Ar(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function co(e, t) {
	if (t.tagID === H.P || t.tagID === H.BR) {
		oo(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === B.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
V.AREA, V.BASE, V.BASEFONT, V.BGSOUND, V.BR, V.COL, V.EMBED, V.FRAME, V.HR, V.IMG, V.INPUT, V.KEYGEN, V.LINK, V.META, V.PARAM, V.SOURCE, V.TRACK, V.WBR;
//#endregion
//#region ../node_modules/.pnpm/hast-util-raw@9.1.0/node_modules/hast-util-raw/lib/index.js
var lo = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, uo = /* @__PURE__ */ new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]), fo = {
	sourceCodeLocationInfo: !0,
	scriptingEnabled: !1
};
function po(e, t) {
	let n = Do(e), r = Ut("type", {
		handlers: {
			root: ho,
			element: go,
			text: _o,
			comment: bo,
			doctype: vo,
			raw: xo
		},
		unknown: So
	}), i = {
		parser: n ? new Vr(fo) : Vr.getFragmentParser(void 0, fo),
		handle(e) {
			r(e, i);
		},
		stitches: !1,
		options: t || {}
	};
	r(e, i), Co(i, he());
	let a = nt(n ? i.parser.document : i.parser.getFragment(), { file: i.options.file });
	return i.stitches && Le(a, "comment", function(e, t, n) {
		let r = e;
		if (r.value.stitch && n && t !== void 0) {
			let e = n.children;
			return e[t] = r.value.stitch, t;
		}
	}), a.type === "root" && a.children.length === 1 && a.children[0].type === e.type ? a.children[0] : a;
}
function mo(e, t) {
	let n = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (e) for (; ++n < e.length;) t.handle(e[n]);
}
function ho(e, t) {
	mo(e.children, t);
}
function go(e, t) {
	To(e, t), mo(e.children, t), Eo(e, t);
}
function _o(e, t) {
	t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
	let n = {
		type: z.CHARACTER,
		chars: e.value,
		location: Oo(e)
	};
	Co(t, he(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function vo(e, t) {
	let n = {
		type: z.DOCTYPE,
		name: "html",
		forceQuirks: !1,
		publicId: "",
		systemId: "",
		location: Oo(e)
	};
	Co(t, he(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function yo(e, t) {
	t.stitches = !0;
	let n = ko(e);
	"children" in e && "children" in n && (n.children = po({
		type: "root",
		children: e.children
	}, t.options).children), bo({
		type: "comment",
		value: { stitch: n }
	}, t);
}
function bo(e, t) {
	let n = e.value, r = {
		type: z.COMMENT,
		data: n,
		location: Oo(e)
	};
	Co(t, he(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
}
function xo(e, t) {
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, wo(t, he(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(lo, "&lt;$1$2") : e.value, !1), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78) {
		t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
		let e = t.parser.tokenizer._consume();
		t.parser.tokenizer._callState(e);
	}
}
function So(e, t) {
	let n = e;
	if (t.options.passThrough && t.options.passThrough.includes(n.type)) yo(n, t);
	else {
		let e = "";
		throw uo.has(n.type) && (e = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + n.type + "` node" + e);
	}
}
function Co(e, t) {
	wo(e, t);
	let n = e.parser.tokenizer.currentCharacterToken;
	n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = Fn.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
function wo(e, t) {
	if (t && t.offset !== void 0) {
		let n = {
			startLine: t.line,
			startCol: t.column,
			startOffset: t.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
	}
}
function To(e, t) {
	let n = e.tagName.toLowerCase();
	if (t.parser.tokenizer.state === Fn.PLAINTEXT) return;
	Co(t, he(e));
	let r = t.parser.openElements.current, i = "namespaceURI" in r ? r.namespaceURI : _.html;
	i === _.html && n === "svg" && (i = _.svg);
	let a = qt({
		...e,
		children: []
	}, { space: i === _.svg ? "svg" : "html" }), o = {
		type: z.START_TAG,
		tagName: n,
		tagID: Mn(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		/* c8 ignore next */
		attrs: "attrs" in a ? a.attrs : [],
		location: Oo(e)
	};
	t.parser.currentToken = o, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
}
function Eo(e, t) {
	let n = e.tagName.toLowerCase();
	if (!t.parser.tokenizer.inForeignNode && rn.includes(n) || t.parser.tokenizer.state === Fn.PLAINTEXT) return;
	Co(t, me(e));
	let r = {
		type: z.END_TAG,
		tagName: n,
		tagID: Mn(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: [],
		location: Oo(e)
	};
	t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === Fn.RCDATA || t.parser.tokenizer.state === Fn.RAWTEXT || t.parser.tokenizer.state === Fn.SCRIPT_DATA) && (t.parser.tokenizer.state = Fn.DATA);
}
function Do(e) {
	let t = e.type === "root" ? e.children[0] : e;
	return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
}
function Oo(e) {
	let t = he(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	}, n = me(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: t.line,
		startCol: t.column,
		startOffset: t.offset,
		endLine: n.line,
		endCol: n.column,
		endOffset: n.offset
	};
}
function ko(e) {
	return "children" in e ? pe({
		...e,
		children: []
	}) : pe(e);
}
//#endregion
//#region ../node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/lib/index.js
function Ao(e) {
	return function(t, n) {
		return po(t, {
			...e,
			file: n
		});
	};
}
//#endregion
//#region ../node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
function jo(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region ../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
function Mo(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-find-and-replace@3.0.2/node_modules/mdast-util-find-and-replace/lib/index.js
function No(e, t, n) {
	let r = s((n || {}).ignore || []), i = Po(t), a = -1;
	for (; ++a < i.length;) l(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return c(e, t);
	}
	function c(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function Po(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([Fo(e[0]), Io(e[1])]);
	}
	return t;
}
function Fo(e) {
	return typeof e == "string" ? new RegExp(Mo(e), "g") : e;
}
function Io(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm-autolink-literal@2.0.1/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var Lo = "phrasing", Ro = [
	"autolink",
	"link",
	"image",
	"label"
];
function zo() {
	return {
		transforms: [qo],
		enter: {
			literalAutolink: Vo,
			literalAutolinkEmail: Ho,
			literalAutolinkHttp: Ho,
			literalAutolinkWww: Ho
		},
		exit: {
			literalAutolink: Ko,
			literalAutolinkEmail: Go,
			literalAutolinkHttp: Uo,
			literalAutolinkWww: Wo
		}
	};
}
function Bo() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Lo,
			notInConstruct: Ro
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Lo,
			notInConstruct: Ro
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Lo,
			notInConstruct: Ro
		}
	] };
}
function Vo(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function Ho(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function Uo(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function Wo(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Go(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function Ko(e) {
	this.exit(e);
}
function qo(e) {
	No(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Jo], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, Yo]], { ignore: ["link", "linkReference"] });
}
function Jo(e, t, n, r, i) {
	let a = "";
	if (!Qo(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Xo(n))) return !1;
	let o = Zo(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function Yo(e, t, n, r) {
	return !Qo(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function Xo(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Zo(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = jo(e, "("), a = jo(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function Qo(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || b(n) || C(n)) && (!t || n !== 47);
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/index.js
function $o(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm-footnote@2.1.0/node_modules/mdast-util-gfm-footnote/lib/index.js
ls.peek = cs;
function es() {
	this.buffer();
}
function ts(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function ns() {
	this.buffer();
}
function rs(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function is(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = $o(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function as(e) {
	this.exit(e);
}
function os(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = $o(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function ss(e) {
	this.exit(e);
}
function cs() {
	return "[";
}
function ls(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function us() {
	return {
		enter: {
			gfmFootnoteCallString: es,
			gfmFootnoteCall: ts,
			gfmFootnoteDefinitionLabelString: ns,
			gfmFootnoteDefinition: rs
		},
		exit: {
			gfmFootnoteCallString: is,
			gfmFootnoteCall: as,
			gfmFootnoteDefinitionLabelString: os,
			gfmFootnoteDefinition: ss
		}
	};
}
function ds(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: ls
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? ps : fs))), s(), o;
	}
}
function fs(e, t, n) {
	return t === 0 ? e : ps(e, t, n);
}
function ps(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm-strikethrough@2.0.0/node_modules/mdast-util-gfm-strikethrough/lib/index.js
var ms = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
ys.peek = bs;
function hs() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: _s },
		exit: { strikethrough: vs }
	};
}
function gs() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: ms
		}],
		handlers: { delete: ys }
	};
}
function _s(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function vs(e) {
	this.exit(e);
}
function ys(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function bs() {
	return "~";
}
//#endregion
//#region ../node_modules/.pnpm/markdown-table@3.0.4/node_modules/markdown-table/index.js
function xs(e) {
	return e.length;
}
function Ss(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || xs, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Cs(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = ws(r[d]);
	else {
		let e = ws(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && (n.alignDelimiters !== !1 || i !== "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Cs(e) {
	return e == null ? "" : String(e);
}
function ws(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function Ts(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), Es);
	return i(), o;
}
function Es(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function Ds(e, t) {
	return Os(e, t.inConstruct, !0) && !Os(e, t.notInConstruct, !1);
}
function Os(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/break.js
function ks(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && Ds(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function As(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function js(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/code.js
function Ms(e, t, n, r) {
	let i = js(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (As(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, Ns);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(x(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function Ns(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function Ps(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/definition.js
function Fs(e, t, n, r) {
	let i = Ps(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function Is(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Ls(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/index.js
function Rs(e) {
	if (e === null || m(e) || b(e)) return 1;
	if (C(e)) return 2;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function zs(e, t, n) {
	let r = Rs(e), i = Rs(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
Bs.peek = Vs;
function Bs(e, t, n, r) {
	let i = Is(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = zs(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Ls(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = zs(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Ls(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Vs(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js
var Hs = {};
function Us(e, t) {
	let n = t || Hs;
	return Ws(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function Ws(e, t, n) {
	if (Ks(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Gs(e.children, t, n);
	}
	return Array.isArray(e) ? Gs(e, t, n) : "";
}
function Gs(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Ws(e[i], t, n);
	return r.join("");
}
function Ks(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function qs(e, t) {
	let n = !1;
	return Le(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Us(e) && (t.options.setext || n));
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/heading.js
function Js(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (qs(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = Ls(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/html.js
Ys.peek = Xs;
function Ys(e) {
	return e.value || "";
}
function Xs() {
	return "<";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image.js
Zs.peek = Qs;
function Zs(e, t, n, r) {
	let i = Ps(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function Qs() {
	return "!";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
$s.peek = ec;
function $s(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function ec() {
	return "!";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
tc.peek = nc;
function tc(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function nc() {
	return "`";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function rc(e, t) {
	let n = Us(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link.js
ic.peek = ac;
function ic(e, t, n, r) {
	let i = Ps(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (rc(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function ac(e, t, n) {
	return rc(e, n) ? "<" : "[";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
oc.peek = sc;
function oc(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function sc() {
	return "[";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function cc(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function lc(e) {
	let t = cc(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function uc(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function dc(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list.js
function fc(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? uc(n) : cc(n), s = e.ordered ? o === "." ? ")" : "." : lc(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), dc(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function pc(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function mc(e, t, n, r) {
	let i = pc(n), a = n.bulletCurrent || cc(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function hc(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-phrasing@4.1.0/node_modules/mdast-util-phrasing/lib/index.js
var gc = s([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/root.js
function _c(e, t, n, r) {
	return (e.children.some(function(e) {
		return gc(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function vc(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/strong.js
yc.peek = bc;
function yc(e, t, n, r) {
	let i = vc(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = zs(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Ls(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = zs(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Ls(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function bc(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/text.js
function xc(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function Sc(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function Cc(e, t, n) {
	let r = (dc(n) + (n.options.ruleSpaces ? " " : "")).repeat(Sc(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/index.js
var wc = {
	blockquote: Ts,
	break: ks,
	code: Ms,
	definition: Fs,
	emphasis: Bs,
	hardBreak: ks,
	heading: Js,
	html: Ys,
	image: Zs,
	imageReference: $s,
	inlineCode: tc,
	link: ic,
	linkReference: oc,
	list: fc,
	listItem: mc,
	paragraph: hc,
	root: _c,
	strong: yc,
	text: xc,
	thematicBreak: Cc
}, Tc = document.createElement("i");
function Ec(e) {
	let t = "&" + e + ";";
	Tc.innerHTML = t;
	let n = Tc.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/index.js
function Dc(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/index.js
var Oc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function kc(e) {
	return e.replace(Oc, Ac);
}
function Ac(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return Dc(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Ec(n) || e;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js
function jc() {
	return {
		enter: {
			table: Mc,
			tableData: Ic,
			tableHeader: Ic,
			tableRow: Pc
		},
		exit: {
			codeText: Lc,
			table: Nc,
			tableData: Fc,
			tableHeader: Fc,
			tableRow: Fc
		}
	};
}
function Mc(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Nc(e) {
	this.exit(e), this.data.inTable = void 0;
}
function Pc(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function Fc(e) {
	this.exit(e);
}
function Ic(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Lc(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, Rc));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function Rc(e, t) {
	return t === "|" ? t : e;
}
function zc(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return Ss(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = wc.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm-task-list-item@2.0.0/node_modules/mdast-util-gfm-task-list-item/lib/index.js
function Bc() {
	return { exit: {
		taskListCheckValueChecked: Hc,
		taskListCheckValueUnchecked: Hc,
		paragraph: Uc
	} };
}
function Vc() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: Wc }
	};
}
function Hc(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Uc(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function Wc(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = wc.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-gfm@3.1.0/node_modules/mdast-util-gfm/lib/index.js
function Gc() {
	return [
		zo(),
		us(),
		hs(),
		jc(),
		Bc()
	];
}
function Kc(e) {
	return { extensions: [
		Bo(),
		ds(e),
		gs(),
		zc(e),
		Vc()
	] };
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/index.js
function qc(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Jc(e, t) {
	return e.length > 0 ? (qc(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js
var Yc = {}.hasOwnProperty;
function Xc(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) Zc(t, e[n]);
	return t;
}
function Zc(e, t) {
	let n;
	for (n in t) {
		let r = (Yc.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Yc.call(r, a) || (r[a] = []);
			let e = i[a];
			Qc(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Qc(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	qc(e, 0, 0, r);
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var $c = {
	tokenize: pl,
	partial: !0
}, el = {
	tokenize: ml,
	partial: !0
}, tl = {
	tokenize: hl,
	partial: !0
}, nl = {
	tokenize: gl,
	partial: !0
}, rl = {
	tokenize: _l,
	partial: !0
}, il = {
	name: "wwwAutolink",
	tokenize: dl,
	previous: vl
}, al = {
	name: "protocolAutolink",
	tokenize: fl,
	previous: yl
}, ol = {
	name: "emailAutolink",
	tokenize: ul,
	previous: bl
}, sl = {};
function cl() {
	return { text: sl };
}
for (var ll = 48; ll < 123;) sl[ll] = ol, ll++, ll === 58 ? ll = 65 : ll === 91 && (ll = 97);
sl[43] = ol, sl[45] = ol, sl[46] = ol, sl[95] = ol, sl[72] = [ol, al], sl[104] = [ol, al], sl[87] = [ol, il], sl[119] = [ol, il];
function ul(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !xl(t) || !bl.call(r, r.previous) || Sl(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return xl(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(rl, u, l)(t) : t === 45 || t === 95 || v(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && w(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function dl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !vl.call(r, r.previous) || Sl(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check($c, e.attempt(el, e.attempt(tl, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function fl(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && yl.call(r, r.previous) && !Sl(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (w(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || S(t) || m(t) || b(t) || C(t) ? n(t) : e.attempt(el, e.attempt(tl, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function pl(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function ml(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(nl, c, s)(t) : t === null || m(t) || b(t) || t !== 45 && C(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function hl(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(nl, t, a)(o) : o === null || m(o) || b(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function gl(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || m(o) || b(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || m(e) || b(e) ? t(e) : r(e);
	}
	function a(e) {
		return w(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : w(t) ? (e.consume(t), o) : n(t);
	}
}
function _l(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return v(e) ? n(e) : t(e);
	}
}
function vl(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || m(e);
}
function yl(e) {
	return !w(e);
}
function bl(e) {
	return !(e === 47 || xl(e));
}
function xl(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || v(e);
}
function Sl(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/index.js
function Cl(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && v(e.charCodeAt(n + 1)) && v(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js
function wl(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/attention.js
var Tl = {
	name: "attention",
	resolveAll: El,
	tokenize: Dl
};
function El(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Ol(d, -c), Ol(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = Jc(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = Jc(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = Jc(l, wl(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = Jc(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = Jc(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, qc(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Dl(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Rs(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Rs(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Ol(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/autolink.js
var kl = {
	name: "autolink",
	tokenize: Al
};
function Al(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return w(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || v(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || v(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || S(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : d(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return v(e) ? f(e) : n(e);
	}
	function f(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(n);
	}
	function p(t) {
		if ((t === 45 || v(t)) && r++ < 63) {
			let n = t === 45 ? p : f;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/blank-line.js
var jl = {
	partial: !0,
	tokenize: Ml
};
function Ml(e, t, n) {
	return r;
	function r(t) {
		return h(t) ? E(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || D(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/block-quote.js
var Nl = {
	continuation: { tokenize: Fl },
	exit: Il,
	name: "blockQuote",
	tokenize: Pl
};
function Pl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return h(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Fl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return h(t) ? E(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Nl, t, n)(r);
	}
}
function Il(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-escape.js
var Ll = {
	name: "characterEscape",
	tokenize: Rl
};
function Rl(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return y(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-reference.js
var zl = {
	name: "characterReference",
	tokenize: Bl
};
function Bl(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = v, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = p, u) : (e.enter("characterReferenceValue"), a = 7, o = T, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === v && !Ec(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-fenced.js
var Vl = {
	partial: !0,
	tokenize: Wl
}, Hl = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Ul
};
function Ul(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: S
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), h(t) ? E(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || D(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Vl, g, x)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || D(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : h(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), E(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || D(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || D(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function g(t) {
		return e.attempt(i, x, _)(t);
	}
	function _(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), v;
	}
	function v(t) {
		return a > 0 && h(t) ? E(e, y, "linePrefix", a + 1)(t) : y(t);
	}
	function y(t) {
		return t === null || D(t) ? e.check(Vl, g, x)(t) : (e.enter("codeFlowValue"), b(t));
	}
	function b(t) {
		return t === null || D(t) ? (e.exit("codeFlowValue"), y(t)) : (e.consume(t), b);
	}
	function x(n) {
		return e.exit("codeFenced"), t(n);
	}
	function S(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), h(t) ? E(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), h(t) ? E(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || D(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Wl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-indented.js
var Gl = {
	name: "codeIndented",
	tokenize: ql
}, Kl = {
	partial: !0,
	tokenize: Jl
};
function ql(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), E(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : D(t) ? e.attempt(Kl, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || D(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Jl(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : D(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : E(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : D(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-text.js
var Yl = {
	name: "codeText",
	previous: Zl,
	resolve: Xl,
	tokenize: Ql
};
function Xl(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Zl(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Ql(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : D(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || D(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var $l = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && eu(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), eu(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), eu(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				eu(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				eu(this.left, t.reverse());
			}
		}
	}
};
function eu(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/index.js
function tu(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new $l(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, nu(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return qc(e, 0, Infinity, u.slice(0)), !l;
}
function nu(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/content.js
var ru = {
	resolve: au,
	tokenize: ou
}, iu = {
	partial: !0,
	tokenize: su
};
function au(e) {
	return tu(e), e;
}
function ou(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : D(t) ? e.check(iu, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function su(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || D(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/index.js
function cu(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || S(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), g(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || D(t) ? n(t) : (e.consume(t), t === 92 ? h : p);
	}
	function h(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function g(i) {
		return !u && (i === null || i === 41 || m(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, g) : i === 41 ? (e.consume(i), u--, g) : i === null || i === 32 || i === 40 || S(i) ? n(i) : (e.consume(i), i === 92 ? _ : g);
	}
	function _(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), g) : g(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/index.js
function lu(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : D(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || D(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !h(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/index.js
function uu(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : D(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), E(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || D(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/index.js
function du(e, t) {
	let n;
	return r;
	function r(i) {
		return D(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : h(i) ? E(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/definition.js
var fu = {
	name: "definition",
	tokenize: mu
}, pu = {
	partial: !0,
	tokenize: hu
};
function mu(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return lu.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = $o(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return m(t) ? du(e, l)(t) : l(t);
	}
	function l(t) {
		return cu(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(pu, d, d)(t);
	}
	function d(t) {
		return h(t) ? E(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || D(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function hu(e, t, n) {
	return r;
	function r(t) {
		return m(t) ? du(e, i)(t) : n(t);
	}
	function i(t) {
		return uu(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return h(t) ? E(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || D(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var gu = {
	name: "hardBreakEscape",
	tokenize: _u
};
function _u(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return D(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/heading-atx.js
var vu = {
	name: "headingAtx",
	resolve: yu,
	tokenize: bu
};
function yu(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, qc(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function bu(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || m(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || D(n) ? (e.exit("atxHeading"), t(n)) : h(n) ? E(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || m(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js
var xu = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Su = [
	"pre",
	"script",
	"style",
	"textarea"
], Cu = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Eu,
	tokenize: Du
}, wu = {
	partial: !0,
	tokenize: ku
}, Tu = {
	partial: !0,
	tokenize: Ou
};
function Eu(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Du(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, _) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : j) : w(s) ? (e.consume(s), o = String.fromCharCode(s), y) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, g) : w(a) ? (e.consume(a), i = 4, r.interrupt ? t : j) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : j) : n(i);
	}
	function g(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : k : g) : n(i);
	}
	function _(t) {
		return w(t) ? (e.consume(t), o = String.fromCharCode(t), y) : n(t);
	}
	function y(s) {
		if (s === null || s === 47 || s === 62 || m(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Su.includes(l) ? (i = 1, r.interrupt ? t(s) : k(s)) : xu.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), b) : r.interrupt ? t(s) : k(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? x(s) : S(s));
		}
		return s === 45 || v(s) ? (e.consume(s), o += String.fromCharCode(s), y) : n(s);
	}
	function b(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : k) : n(i);
	}
	function x(t) {
		return h(t) ? (e.consume(t), x) : re(t);
	}
	function S(t) {
		return t === 47 ? (e.consume(t), re) : t === 58 || t === 95 || w(t) ? (e.consume(t), C) : h(t) ? (e.consume(t), S) : re(t);
	}
	function C(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || v(t) ? (e.consume(t), C) : T(t);
	}
	function T(t) {
		return t === 61 ? (e.consume(t), E) : h(t) ? (e.consume(t), T) : S(t);
	}
	function E(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, ee) : h(t) ? (e.consume(t), E) : te(t);
	}
	function ee(t) {
		return t === c ? (e.consume(t), c = null, ne) : t === null || D(t) ? n(t) : (e.consume(t), ee);
	}
	function te(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || m(t) ? T(t) : (e.consume(t), te);
	}
	function ne(e) {
		return e === 47 || e === 62 || h(e) ? S(e) : n(e);
	}
	function re(t) {
		return t === 62 ? (e.consume(t), O) : n(t);
	}
	function O(t) {
		return t === null || D(t) ? k(t) : h(t) ? (e.consume(t), O) : n(t);
	}
	function k(t) {
		return t === 45 && i === 2 ? (e.consume(t), oe) : t === 60 && i === 1 ? (e.consume(t), se) : t === 62 && i === 4 ? (e.consume(t), M) : t === 63 && i === 3 ? (e.consume(t), j) : t === 93 && i === 5 ? (e.consume(t), le) : D(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(wu, ue, ie)(t)) : t === null || D(t) ? (e.exit("htmlFlowData"), ie(t)) : (e.consume(t), k);
	}
	function ie(t) {
		return e.check(Tu, ae, ue)(t);
	}
	function ae(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), A;
	}
	function A(t) {
		return t === null || D(t) ? ie(t) : (e.enter("htmlFlowData"), k(t));
	}
	function oe(t) {
		return t === 45 ? (e.consume(t), j) : k(t);
	}
	function se(t) {
		return t === 47 ? (e.consume(t), o = "", ce) : k(t);
	}
	function ce(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Su.includes(n) ? (e.consume(t), M) : k(t);
		}
		return w(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), ce) : k(t);
	}
	function le(t) {
		return t === 93 ? (e.consume(t), j) : k(t);
	}
	function j(t) {
		return t === 62 ? (e.consume(t), M) : t === 45 && i === 2 ? (e.consume(t), j) : k(t);
	}
	function M(t) {
		return t === null || D(t) ? (e.exit("htmlFlowData"), ue(t)) : (e.consume(t), M);
	}
	function ue(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Ou(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return D(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function ku(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(jl, t, n);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/html-text.js
var Au = {
	name: "htmlText",
	tokenize: ju
};
function ju(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), T) : t === 63 ? (e.consume(t), S) : w(t) ? (e.consume(t), ne) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, g) : w(t) ? (e.consume(t), x) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : D(t) ? (o = d, ce(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? se(e) : e === 45 ? f(e) : d(e);
	}
	function g(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? _ : g) : n(t);
	}
	function _(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), y) : D(t) ? (o = _, ce(t)) : (e.consume(t), _);
	}
	function y(t) {
		return t === 93 ? (e.consume(t), b) : _(t);
	}
	function b(t) {
		return t === 62 ? se(t) : t === 93 ? (e.consume(t), b) : _(t);
	}
	function x(t) {
		return t === null || t === 62 ? se(t) : D(t) ? (o = x, ce(t)) : (e.consume(t), x);
	}
	function S(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), C) : D(t) ? (o = S, ce(t)) : (e.consume(t), S);
	}
	function C(e) {
		return e === 62 ? se(e) : S(e);
	}
	function T(t) {
		return w(t) ? (e.consume(t), ee) : n(t);
	}
	function ee(t) {
		return t === 45 || v(t) ? (e.consume(t), ee) : te(t);
	}
	function te(t) {
		return D(t) ? (o = te, ce(t)) : h(t) ? (e.consume(t), te) : se(t);
	}
	function ne(t) {
		return t === 45 || v(t) ? (e.consume(t), ne) : t === 47 || t === 62 || m(t) ? re(t) : n(t);
	}
	function re(t) {
		return t === 47 ? (e.consume(t), se) : t === 58 || t === 95 || w(t) ? (e.consume(t), O) : D(t) ? (o = re, ce(t)) : h(t) ? (e.consume(t), re) : se(t);
	}
	function O(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || v(t) ? (e.consume(t), O) : k(t);
	}
	function k(t) {
		return t === 61 ? (e.consume(t), ie) : D(t) ? (o = k, ce(t)) : h(t) ? (e.consume(t), k) : re(t);
	}
	function ie(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, ae) : D(t) ? (o = ie, ce(t)) : h(t) ? (e.consume(t), ie) : (e.consume(t), A);
	}
	function ae(t) {
		return t === i ? (e.consume(t), i = void 0, oe) : t === null ? n(t) : D(t) ? (o = ae, ce(t)) : (e.consume(t), ae);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || m(t) ? re(t) : (e.consume(t), A);
	}
	function oe(e) {
		return e === 47 || e === 62 || m(e) ? re(e) : n(e);
	}
	function se(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function ce(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), le;
	}
	function le(t) {
		return h(t) ? E(e, j, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : j(t);
	}
	function j(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-end.js
var Mu = {
	name: "labelEnd",
	resolveAll: Iu,
	resolveTo: Lu,
	tokenize: Ru
}, Nu = { tokenize: zu }, Pu = { tokenize: Bu }, Fu = { tokenize: Vu };
function Iu(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && qc(e, 0, e.length, n), e;
}
function Lu(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = Jc(s, e.slice(a + 1, a + r + 3)), s = Jc(s, [[
		"enter",
		u,
		t
	]]), s = Jc(s, wl(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = Jc(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = Jc(s, e.slice(o + 1)), s = Jc(s, [[
		"exit",
		c,
		t
	]]), qc(e, a, e.length, s), e;
}
function Ru(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes($o(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Nu, u, o ? u : d)(t) : t === 91 ? e.attempt(Pu, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Fu, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function zu(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return m(t) ? du(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : cu(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return m(t) ? du(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? uu(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return m(t) ? du(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Bu(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return lu.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes($o(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Vu(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-image.js
var Hu = {
	name: "labelStartImage",
	resolveAll: Mu.resolveAll,
	tokenize: Uu
};
function Uu(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-link.js
var Wu = {
	name: "labelStartLink",
	resolveAll: Mu.resolveAll,
	tokenize: Gu
};
function Gu(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/line-ending.js
var Ku = {
	name: "lineEnding",
	tokenize: qu
};
function qu(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), E(e, t, "linePrefix");
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/thematic-break.js
var Ju = {
	name: "thematicBreak",
	tokenize: Yu
};
function Yu(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || D(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), h(t) ? E(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/list.js
var Xu = {
	continuation: { tokenize: ed },
	exit: nd,
	name: "list",
	tokenize: $u
}, Zu = {
	partial: !0,
	tokenize: rd
}, Qu = {
	partial: !0,
	tokenize: td
};
function $u(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : T(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Ju, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return T(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(jl, r.interrupt ? n : u, e.attempt(Zu, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return h(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function ed(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(jl, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, E(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !h(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Qu, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, E(e, e.attempt(Xu, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function td(e, t, n) {
	let r = this;
	return E(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function nd(e) {
	e.exit(this.containerState.type);
}
function rd(e, t, n) {
	let r = this;
	return E(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !h(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/setext-underline.js
var id = {
	name: "setextUnderline",
	resolveTo: ad,
	tokenize: od
};
function ad(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function od(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), h(t) ? E(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || D(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var sd = {
	tokenize: hd,
	partial: !0
};
function cd() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: fd,
			continuation: { tokenize: pd },
			exit: md
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: dd
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: ld,
				resolveTo: ud
			}
		}
	};
}
function ld(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = $o(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function ud(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function dd(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || m(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes($o(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return m(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function fd(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || m(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = $o(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return m(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), E(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function pd(e, t, n) {
	return e.check(jl, t, e.attempt(sd, t, n));
}
function md(e) {
	e.exit("gfmFootnoteDefinition");
}
function hd(e, t, n) {
	let r = this;
	return E(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gd(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && qc(o, o.length, 0, wl(s, e.slice(r + 1, n), t)), qc(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), qc(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = Rs(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Rs(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/edit-map.js
var _d = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		vd(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function vd(e, t, n, r) {
	let i = 0;
	if (n !== 0 || r.length !== 0) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/infer.js
function yd(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/syntax.js
function bd() {
	return { flow: { null: {
		name: "table",
		tokenize: xd,
		resolveAll: Sd
	} } };
}
function xd(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? w : c;
		return a === w && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : D(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : h(t) ? E(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || m(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, h(t) ? E(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : g(t));
	}
	function g(t) {
		return t === 45 || t === 58 ? v(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), _) : C(t);
	}
	function _(t) {
		return h(t) ? E(e, v, "whitespace")(t) : v(t);
	}
	function v(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : t === 45 ? (a += 1, y(t)) : t === null || D(t) ? S(t) : C(t);
	}
	function y(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), b(t)) : C(t);
	}
	function b(t) {
		return t === 45 ? (e.consume(t), b) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(t));
	}
	function x(t) {
		return h(t) ? E(e, S, "whitespace")(t) : S(t);
	}
	function S(n) {
		return n === 124 ? g(n) : n === null || D(n) ? !o || i !== a ? C(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : C(n);
	}
	function C(e) {
		return n(e);
	}
	function w(t) {
		return e.enter("tableRow"), T(t);
	}
	function T(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), T) : n === null || D(n) ? (e.exit("tableRow"), t(n)) : h(n) ? E(e, T, "whitespace")(n) : (e.enter("data"), ee(n));
	}
	function ee(t) {
		return t === null || t === 124 || m(t) ? (e.exit("data"), T(t)) : (e.consume(t), t === 92 ? te : ee);
	}
	function te(t) {
		return t === 92 || t === 124 ? (e.consume(t), ee) : ee(t);
	}
}
function Sd(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new _d();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (wd(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = Cd(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = Cd(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = Cd(f, t, o, i, n, d)) : (o[0] = o[1], d = Cd(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && wd(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = yd(t.events, n));
	}
	return e;
}
function Cd(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, Td(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = Td(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = Td(t.events, n[2]), a = Td(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, Td(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function wd(e, t, n, r, i) {
	let a = [], o = Td(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function Td(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var Ed = {
	name: "tasklistCheck",
	tokenize: Od
};
function Dd() {
	return { text: { 91: Ed } };
}
function Od(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return m(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return D(r) ? t(r) : h(r) ? e.check({ tokenize: kd }, t, n)(r) : n(r);
	}
}
function kd(e, t, n) {
	return E(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
function Ad(e) {
	return Xc([
		cl(),
		cd(),
		gd(e),
		bd(),
		Dd()
	]);
}
//#endregion
//#region ../node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js
var jd = {};
function Md(e) {
	let t = this, n = e || jd, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(Ad(n)), a.push(Gc()), o.push(Kc(n));
}
//#endregion
//#region ../node_modules/.pnpm/remend@1.3.1/node_modules/remend/dist/index.js
var Nd = Object.defineProperty, Pd = Object.defineProperties, Fd = Object.getOwnPropertyDescriptors, Id = Object.getOwnPropertySymbols, Ld = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, zd = (e, t, n) => t in e ? Nd(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Bd = (e, t) => {
	for (var n in t ||= {}) Ld.call(t, n) && zd(e, n, t[n]);
	if (Id) for (var n of Id(t)) Rd.call(t, n) && zd(e, n, t[n]);
	return e;
}, Vd = (e, t) => Pd(e, Fd(t)), Hd = (e) => {
	let t = new Uint8Array(e.length + 1), n = !1, r = !1, i = 0;
	for (; i < e.length;) {
		if (e[i] === "\\" && i + 1 < e.length && e[i + 1] === "`") {
			let e = n || r ? 1 : 0;
			t[i + 1] = e, t[i + 2] = e, i += 2;
			continue;
		}
		if (e.substring(i, i + 3) === "```") {
			r = !r;
			let a = n || r ? 1 : 0, o = Math.min(i + 3, e.length);
			for (let e = i + 1; e <= o; e += 1) t[e] = a;
			i = o;
			continue;
		}
		!r && e[i] === "`" && (n = !n), t[i + 1] = n || r ? 1 : 0, i += 1;
	}
	return t;
}, Ud = null, Wd = (e, t) => {
	let n = Ud;
	return (n === null || n.text !== e) && (n = {
		text: e,
		lookup: Hd(e)
	}, Ud = n), n.lookup[Math.min(t, e.length)] === 1;
}, Gd = (e, t) => {
	let n = e.substring(t, t + 3) === "```", r = t > 0 && e.substring(t - 1, t + 2) === "```", i = t > 1 && e.substring(t - 2, t + 1) === "```";
	return n || r || i;
}, Kd = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n += 1) {
		if (e[n] === "\\" && n + 1 < e.length && e[n + 1] === "`") {
			n += 1;
			continue;
		}
		e[n] === "`" && !Gd(e, n) && (t += 1);
	}
	return t;
}, qd = (e, t) => {
	let n = !1, r = !1, i = -1;
	for (let a = 0; a < e.length; a += 1) {
		if (e[a] === "\\" && a + 1 < e.length && e[a + 1] === "`") {
			a += 1;
			continue;
		}
		if (e.substring(a, a + 3) === "```") {
			r = !r, a += 2;
			continue;
		}
		if (!r && e[a] === "`") {
			if (n) {
				if (i < t && t < a) return !0;
				n = !1, i = -1;
			} else n = !0, i = a;
		}
	}
	return !1;
}, Jd = /^(\s*(?:[-*+]|\d+[.)]) +)>(=?\s*[$]?\d)/gm, Yd = (e) => !e || typeof e != "string" || !e.includes(">") ? e : e.replace(Jd, (t, n, r, i) => Wd(e, i) ? t : `${n}\\>${r}`), Xd = /(\*\*)([^*]*\*?)$/, Zd = /(__)([^_]*?)$/, Qd = /(\*\*\*)([^*]*?)$/, $d = /(\*)([^*]*?)$/, ef = /(_)([^_]*?)$/, tf = /(`)([^`]*?)$/, nf = /(~~)([^~]*?)$/, rf = /^[\s_~*`]*$/, af = /^[\s]*[-*+][\s]+$/, of = /[\p{L}\p{N}_]/u, sf = /^```[^`\n]*```?$/, cf = /^\*{4,}$/, lf = /(__)([^_]+)_$/, uf = /(~~)([^~]+)~$/, df = /~~/g, ff = (e) => {
	if (!e) return !1;
	let t = e.charCodeAt(0);
	return t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t === 95 || of.test(e);
}, pf = (e, t) => {
	let n = 1;
	for (let r = t - 1; r >= 0; --r) if (e[r] === "]") n += 1;
	else if (e[r] === "[" && (--n, n === 0)) return r;
	return -1;
}, mf = (e, t) => {
	let n = 1;
	for (let r = t + 1; r < e.length; r += 1) if (e[r] === "[") n += 1;
	else if (e[r] === "]" && (--n, n === 0)) return r;
	return -1;
}, hf = (e) => e === "inlineLatex" || e === "blockLatex", gf = (e, t) => t === "[" && e === "none" ? "blockLatex" : t === "]" && e === "blockLatex" ? "none" : t === "(" && e === "none" ? "inlineLatex" : t === ")" && e === "inlineLatex" ? "none" : null, _f = (e, t) => t ? e === "blockDollar" ? "none" : "blockDollar" : e === "blockDollar" ? e : e === "inlineDollar" ? "none" : "inlineDollar", vf = (e, t) => {
	let n = "none";
	for (let r = 0; r < e.length && r < t; r += 1) {
		if (e[r] === "\\" && e[r + 1] === "$") {
			r += 1;
			continue;
		}
		if (e[r] === "\\") {
			let t = gf(n, e[r + 1]);
			if (t !== null) {
				n = t, r += 1;
				continue;
			}
		}
		if (e[r] === "$" && !hf(n)) {
			let t = e[r + 1] === "$";
			n = _f(n, t), t && (r += 1);
		}
	}
	return n !== "none";
}, yf = (e, t) => {
	for (let n = t; n < e.length; n += 1) {
		if (e[n] === ")") return !0;
		if (e[n] === "\n") return !1;
	}
	return !1;
}, bf = (e, t) => {
	for (let n = t - 1; n >= 0; --n) {
		if (e[n] === ")") return !1;
		if (e[n] === "(") return n > 0 && e[n - 1] === "]" && yf(e, t);
		if (e[n] === "\n") return !1;
	}
	return !1;
}, xf = (e, t) => {
	for (let n = t - 1; n >= 0; --n) {
		if (e[n] === ">") return !1;
		if (e[n] === "<") {
			let t = n + 1 < e.length ? e[n + 1] : "";
			return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t === "/";
		}
		if (e[n] === "\n") return !1;
	}
	return !1;
}, Sf = (e, t, n) => {
	let r = 0;
	for (let n = t - 1; n >= 0; --n) if (e[n] === "\n") {
		r = n + 1;
		break;
	}
	let i = e.length;
	for (let n = t; n < e.length; n += 1) if (e[n] === "\n") {
		i = n;
		break;
	}
	let a = e.substring(r, i), o = 0, s = !1;
	for (let e of a) if (e === n) o += 1;
	else if (e !== " " && e !== "	") {
		s = !0;
		break;
	}
	return o >= 3 && !s;
}, Cf = (e) => e.includes("$") || e.includes("\\(") || e.includes("\\["), wf = (e, t, n, r) => n === "\\" || Cf(e) && vf(e, t) ? !0 : n !== "*" && r === "*" ? (t < e.length - 2 ? e[t + 2] : "") !== "*" : n === "*" || (!n || n === " " || n === "	" || n === "\n") && (!r || r === " " || r === "	" || r === "\n"), Tf = (e) => e === " " || e === "	" || e === "\n", Ef = (e, t) => !!(e && t && ff(e) && ff(t)), Df = (e, t, n, r) => {
	let i = Ef(e, t), a = !!t && !Tf(t), o = !!e && !Tf(e);
	return i && n % 2 == 0 && !r ? { count: !1 } : o && n % 2 == 1 || a ? {
		count: !0,
		inWordAsteriskChain: i
	} : { count: !1 };
}, Of = (e) => {
	let t = 0, n = !1, r = !1, i = e.length;
	for (let a = 0; a < i; a += 1) {
		if (e[a] === "`" && a + 2 < i && e[a + 1] === "`" && e[a + 2] === "`") {
			n = !n, a += 2;
			continue;
		}
		if (n) continue;
		if (e[a] !== "*") {
			ff(e[a]) || (r = !1);
			continue;
		}
		let o = a > 0 ? e[a - 1] : "", s = a < i - 1 ? e[a + 1] : "";
		if (wf(e, a, o, s)) continue;
		let c = Df(o, s, t, r);
		c.count && (t += 1, r = c.inWordAsteriskChain);
	}
	return t;
}, kf = (e, t, n, r) => !!(n === "\\" || Cf(e) && vf(e, t) || bf(e, t) || xf(e, t) || n === "_" || r === "_" || n && r && ff(n) && ff(r)), Af = (e) => {
	let t = 0, n = !1, r = e.length;
	for (let i = 0; i < r; i += 1) {
		if (e[i] === "`" && i + 2 < r && e[i + 1] === "`" && e[i + 2] === "`") {
			n = !n, i += 2;
			continue;
		}
		if (n || e[i] !== "_") continue;
		let a = i > 0 ? e[i - 1] : "", o = i < r - 1 ? e[i + 1] : "";
		kf(e, i, a, o) || (t += 1);
	}
	return t;
}, jf = (e) => {
	let t = 0, n = 0, r = !1;
	for (let i = 0; i < e.length; i += 1) {
		if (e[i] === "`" && i + 2 < e.length && e[i + 1] === "`" && e[i + 2] === "`") {
			n >= 3 && (t += Math.floor(n / 3)), n = 0, r = !r, i += 2;
			continue;
		}
		r || (e[i] === "*" ? n += 1 : (n >= 3 && (t += Math.floor(n / 3)), n = 0));
	}
	return n >= 3 && (t += Math.floor(n / 3)), t;
}, Mf = (e) => {
	let t = 0, n = !1;
	for (let r = 0; r < e.length; r += 1) {
		if (e[r] === "`" && r + 2 < e.length && e[r + 1] === "`" && e[r + 2] === "`") {
			n = !n, r += 2;
			continue;
		}
		n || e[r] === "*" && r + 1 < e.length && e[r + 1] === "*" && (t += 1, r += 1);
	}
	return t;
}, Nf = (e) => {
	let t = 0, n = !1;
	for (let r = 0; r < e.length; r += 1) {
		if (e[r] === "`" && r + 2 < e.length && e[r + 1] === "`" && e[r + 2] === "`") {
			n = !n, r += 2;
			continue;
		}
		n || e[r] === "_" && r + 1 < e.length && e[r + 1] === "_" && (t += 1, r += 1);
	}
	return t;
}, Pf = (e, t, n) => {
	if (!t || rf.test(t)) return !0;
	let r = e.substring(0, n).lastIndexOf("\n"), i = r === -1 ? 0 : r + 1, a = e.substring(i, n);
	return af.test(a) && t.includes("\n") ? !0 : Sf(e, n, "*");
}, Ff = (e) => {
	let t = e.match(Xd);
	if (!t) return e;
	let n = t[2], r = e.lastIndexOf(t[1]);
	return Wd(e, r) || qd(e, r) || Pf(e, n, r) ? e : Mf(e) % 2 == 1 ? n.endsWith("*") ? `${e}*` : `${e}**` : e;
}, If = (e, t, n) => {
	if (!t || rf.test(t)) return !0;
	let r = e.substring(0, n).lastIndexOf("\n"), i = r === -1 ? 0 : r + 1, a = e.substring(i, n);
	return af.test(a) && t.includes("\n") ? !0 : Sf(e, n, "_");
}, Lf = (e) => {
	let t = e.match(Zd);
	if (!t) {
		let t = e.match(lf);
		if (t) {
			let n = e.lastIndexOf(t[1]);
			if (!(Wd(e, n) || qd(e, n)) && Nf(e) % 2 == 1) return `${e}_`;
		}
		return e;
	}
	let n = t[2], r = e.lastIndexOf(t[1]);
	return Wd(e, r) || qd(e, r) || If(e, n, r) ? e : Nf(e) % 2 == 1 ? `${e}__` : e;
}, Rf = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n += 1) {
		if (e[n] === "`" && n + 2 < e.length && e[n + 1] === "`" && e[n + 2] === "`") {
			t = !t, n += 2;
			continue;
		}
		if (!t && e[n] === "*" && e[n - 1] !== "*" && e[n + 1] !== "*" && e[n - 1] !== "\\" && !vf(e, n)) {
			let t = n > 0 ? e[n - 1] : "", r = n < e.length - 1 ? e[n + 1] : "", i = !t || Tf(t), a = !r || Tf(r);
			if (i && a || t && r && ff(t) && ff(r) || a) continue;
			return n;
		}
	}
	return -1;
}, zf = (e) => {
	if (!e.match($d)) return e;
	let t = Rf(e);
	if (t === -1 || Wd(e, t) || qd(e, t)) return e;
	let n = e.substring(t + 1);
	return !n || rf.test(n) ? e : Of(e) % 2 == 1 ? `${e}*` : e;
}, Bf = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n += 1) {
		if (e[n] === "`" && n + 2 < e.length && e[n + 1] === "`" && e[n + 2] === "`") {
			t = !t, n += 2;
			continue;
		}
		if (!t && e[n] === "_" && e[n - 1] !== "_" && e[n + 1] !== "_" && e[n - 1] !== "\\" && !vf(e, n) && !bf(e, n)) {
			let t = n > 0 ? e[n - 1] : "", r = n < e.length - 1 ? e[n + 1] : "";
			if (t && r && ff(t) && ff(r)) continue;
			return n;
		}
	}
	return -1;
}, Vf = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] === "\n";) --t;
	return t < e.length ? `${e.slice(0, t)}_${e.slice(t)}` : `${e}_`;
}, Hf = (e) => {
	if (!e.endsWith("**")) return null;
	let t = e.slice(0, -2);
	if (Mf(t) % 2 != 1) return null;
	let n = t.indexOf("**"), r = Bf(t);
	return n !== -1 && r !== -1 && n < r ? `${t}_**` : null;
}, Uf = (e) => {
	if (!e.match(ef)) return e;
	let t = Bf(e);
	if (t === -1) return e;
	let n = e.substring(t + 1);
	if (!n || rf.test(n) || Wd(e, t) || qd(e, t)) return e;
	if (Af(e) % 2 == 1) {
		let t = Hf(e);
		return t === null ? Vf(e) : t;
	}
	return e;
}, Wf = (e) => {
	let t = Mf(e), n = Of(e);
	return t % 2 == 0 && n % 2 == 0;
}, Gf = (e, t, n) => !t || rf.test(t) || Wd(e, n) || qd(e, n) ? !0 : Sf(e, n, "*"), Kf = (e) => {
	if (cf.test(e)) return e;
	let t = e.match(Qd);
	if (!t) return e;
	let n = t[2];
	return Gf(e, n, e.lastIndexOf(t[1])) ? e : jf(e) % 2 == 1 ? Wf(e) ? e : `${e}***` : e;
}, qf = /<[a-zA-Z/][^>]*$/, Jf = (e) => {
	let t = e.match(qf);
	return !t || t.index === void 0 || Wd(e, t.index) ? e : e.substring(0, t.index).trimEnd();
}, Yf = (e) => !e.match(sf) || e.includes("\n") ? null : e.endsWith("``") && !e.endsWith("```") ? `${e}\`` : e, Xf = (e) => (e.match(/```/g) || []).length % 2 == 1, Zf = (e) => {
	let t = Yf(e);
	if (t !== null) return t;
	let n = e.match(tf);
	if (n && !Xf(e)) {
		let t = n[2];
		if (!t || rf.test(t)) return e;
		if (Kd(e) % 2 == 1) return `${e}\``;
	}
	return e;
}, Qf = (e, t) => t >= 2 && e.substring(t - 2, t + 1) === "```" || t >= 1 && e.substring(t - 1, t + 2) === "```" || t <= e.length - 3 && e.substring(t, t + 3) === "```", $f = (e) => {
	let t = 0, n = !1;
	for (let r = 0; r < e.length - 1; r += 1) e[r] === "`" && !Qf(e, r) && (n = !n), !n && e[r] === "$" && e[r + 1] === "$" && (t += 1, r += 1);
	return t;
}, ep = (e) => {
	let t = 0, n = !1;
	for (let r = 0; r < e.length; r += 1) {
		if (e[r] === "\\") {
			r += 1;
			continue;
		}
		if (e[r] === "`" && !Qf(e, r)) {
			n = !n;
			continue;
		}
		!n && e[r] === "$" && (r + 1 < e.length && e[r + 1] === "$" ? r += 1 : t += 1);
	}
	return t;
}, tp = (e) => {
	if (e.endsWith("$") && !e.endsWith("$$")) return `${e}$`;
	let t = e.indexOf("$$");
	return t !== -1 && e.indexOf("\n", t) !== -1 && !e.endsWith("\n") ? `${e}
$$` : `${e}$$`;
}, np = (e) => $f(e) % 2 == 0 ? e : tp(e), rp = (e) => ep(e) % 2 == 1 ? `${e}$` : e, ip = (e, t, n) => {
	if (e.substring(t + 2).includes(")")) return null;
	let r = pf(e, t);
	if (r === -1 || Wd(e, r)) return null;
	let i = r > 0 && e[r - 1] === "!", a = i ? r - 1 : r, o = e.substring(0, a);
	if (i) return o;
	let s = e.substring(r + 1, t);
	return n === "text-only" ? `${o}${s}` : `${o}[${s}](streamdown:incomplete-link)`;
}, ap = (e, t) => {
	for (let n = 0; n < t; n++) if (e[n] === "[" && !Wd(e, n)) {
		if (n > 0 && e[n - 1] === "!") continue;
		let t = mf(e, n);
		if (t === -1) return n;
		if (t + 1 < e.length && e[t + 1] === "(") {
			let r = e.indexOf(")", t + 2);
			r !== -1 && (n = r);
		}
	}
	return t;
}, op = (e, t, n) => {
	let r = t > 0 && e[t - 1] === "!", i = r ? t - 1 : t;
	if (!e.substring(t + 1).includes("]")) {
		let a = e.substring(0, i);
		if (r) return a;
		if (n === "text-only") {
			let n = ap(e, t);
			return e.substring(0, n) + e.substring(n + 1);
		}
		return `${e}](streamdown:incomplete-link)`;
	}
	if (mf(e, t) === -1) {
		let a = e.substring(0, i);
		if (r) return a;
		if (n === "text-only") {
			let n = ap(e, t);
			return e.substring(0, n) + e.substring(n + 1);
		}
		return `${e}](streamdown:incomplete-link)`;
	}
	return null;
}, sp = (e, t = "protocol") => {
	let n = e.lastIndexOf("](");
	if (n !== -1 && !Wd(e, n)) {
		let r = ip(e, n, t);
		if (r !== null) return r;
	}
	for (let n = e.length - 1; n >= 0; --n) if (e[n] === "[" && !Wd(e, n)) {
		let r = op(e, n, t);
		if (r !== null) return r;
	}
	return e;
}, cp = /^-{1,2}$/, lp = /^[\s]*-{1,2}[\s]+$/, up = /^={1,2}$/, dp = /^[\s]*={1,2}[\s]+$/, fp = (e) => {
	if (!e || typeof e != "string") return e;
	let t = e.lastIndexOf("\n");
	if (t === -1) return e;
	let n = e.substring(t + 1), r = e.substring(0, t), i = n.trim();
	if (cp.test(i) && !n.match(lp)) {
		let t = r.split("\n").at(-1);
		if (t && t.trim().length > 0) return `${e}\u200B`;
	}
	if (up.test(i) && !n.match(dp)) {
		let t = r.split("\n").at(-1);
		if (t && t.trim().length > 0) return `${e}\u200B`;
	}
	return e;
}, pp = /([\p{L}\p{N}_])~(?!~)(?=[\p{L}\p{N}_])/gu, mp = (e) => !e || typeof e != "string" || !e.includes("~") ? e : e.replace(pp, (t, n, r) => Wd(e, r + n.length) ? t : `${n}\\~`), hp = (e) => {
	let t = e.match(nf);
	if (t) {
		let n = t[2];
		if (!n || rf.test(n)) return e;
		let r = e.lastIndexOf(t[1]);
		if (Wd(e, r) || qd(e, r)) return e;
		if (e.match(df)?.length % 2 == 1) return `${e}~~`;
	} else {
		let t = e.match(uf);
		if (t) {
			let n = e.lastIndexOf(t[0].slice(0, 2));
			if (Wd(e, n) || qd(e, n)) return e;
			if (e.match(df)?.length % 2 == 1) return `${e}~`;
		}
	}
	return e;
}, gp = (e) => e !== !1, _p = (e) => e === !0, vp = {
	SINGLE_TILDE: 0,
	COMPARISON_OPERATORS: 5,
	HTML_TAGS: 10,
	SETEXT_HEADINGS: 15,
	LINKS: 20,
	BOLD_ITALIC: 30,
	BOLD: 35,
	ITALIC_DOUBLE_UNDERSCORE: 40,
	ITALIC_SINGLE_ASTERISK: 41,
	ITALIC_SINGLE_UNDERSCORE: 42,
	INLINE_CODE: 50,
	STRIKETHROUGH: 60,
	KATEX: 70,
	INLINE_KATEX: 75,
	DEFAULT: 100
}, yp = [
	{
		handler: {
			name: "singleTilde",
			handle: mp,
			priority: vp.SINGLE_TILDE
		},
		optionKey: "singleTilde"
	},
	{
		handler: {
			name: "comparisonOperators",
			handle: Yd,
			priority: vp.COMPARISON_OPERATORS
		},
		optionKey: "comparisonOperators"
	},
	{
		handler: {
			name: "htmlTags",
			handle: Jf,
			priority: vp.HTML_TAGS
		},
		optionKey: "htmlTags"
	},
	{
		handler: {
			name: "setextHeadings",
			handle: fp,
			priority: vp.SETEXT_HEADINGS
		},
		optionKey: "setextHeadings"
	},
	{
		handler: {
			name: "links",
			handle: sp,
			priority: vp.LINKS
		},
		optionKey: "links",
		earlyReturn: (e) => e.endsWith("](streamdown:incomplete-link)")
	},
	{
		handler: {
			name: "boldItalic",
			handle: Kf,
			priority: vp.BOLD_ITALIC
		},
		optionKey: "boldItalic"
	},
	{
		handler: {
			name: "bold",
			handle: Ff,
			priority: vp.BOLD
		},
		optionKey: "bold"
	},
	{
		handler: {
			name: "italicDoubleUnderscore",
			handle: Lf,
			priority: vp.ITALIC_DOUBLE_UNDERSCORE
		},
		optionKey: "italic"
	},
	{
		handler: {
			name: "italicSingleAsterisk",
			handle: zf,
			priority: vp.ITALIC_SINGLE_ASTERISK
		},
		optionKey: "italic"
	},
	{
		handler: {
			name: "italicSingleUnderscore",
			handle: Uf,
			priority: vp.ITALIC_SINGLE_UNDERSCORE
		},
		optionKey: "italic"
	},
	{
		handler: {
			name: "inlineCode",
			handle: Zf,
			priority: vp.INLINE_CODE
		},
		optionKey: "inlineCode"
	},
	{
		handler: {
			name: "strikethrough",
			handle: hp,
			priority: vp.STRIKETHROUGH
		},
		optionKey: "strikethrough"
	},
	{
		handler: {
			name: "katex",
			handle: np,
			priority: vp.KATEX
		},
		optionKey: "katex"
	},
	{
		handler: {
			name: "inlineKatex",
			handle: rp,
			priority: vp.INLINE_KATEX
		},
		optionKey: "inlineKatex"
	}
], bp = (e) => {
	let t = e?.linkMode ?? "protocol";
	return yp.filter(({ handler: t, optionKey: n }) => t.name === "links" ? gp(e?.links) || gp(e?.images) : t.name === "inlineKatex" ? _p(e?.inlineKatex) : gp(e?.[n])).map(({ handler: e, earlyReturn: n }) => e.name === "links" ? {
		handler: Vd(Bd({}, e), { handle: (e) => sp(e, t) }),
		earlyReturn: t === "protocol" ? n : void 0
	} : {
		handler: e,
		earlyReturn: n
	});
}, xp = (e, t) => {
	if (!e || typeof e != "string") return e;
	let n = e.endsWith(" ") && !e.endsWith("  ") ? e.slice(0, -1) : e, r = bp(t), i = (t?.handlers ?? []).map((e) => ({
		handler: Vd(Bd({}, e), { priority: e.priority ?? vp.DEFAULT }),
		earlyReturn: void 0
	})), a = [...r, ...i].sort((e, t) => (e.handler.priority ?? 0) - (t.handler.priority ?? 0));
	for (let { handler: e, earlyReturn: t } of a) if (n = e.handle(n), t != null && t(n)) return n;
	return n;
}, Sp = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Cp = (e, t) => ({
	classGroupId: e,
	validator: t
}), wp = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Tp = "-", Ep = [], Dp = "arbitrary..", Op = (e) => {
	let t = jp(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Ap(e);
			let n = e.split(Tp);
			return kp(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Sp(i, t) : t : i || Ep;
			}
			return n[e] || Ep;
		}
	};
}, kp = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = kp(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Tp) : e.slice(t).join(Tp), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Ap = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Dp + r : void 0;
})(), jp = (e) => {
	let { theme: t, classGroups: n } = e;
	return Mp(n, t);
}, Mp = (e, t) => {
	let n = wp();
	for (let r in e) {
		let i = e[r];
		Np(i, n, r, t);
	}
	return n;
}, Np = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Pp(i, t, n, r);
	}
}, Pp = (e, t, n, r) => {
	if (typeof e == "string") {
		Fp(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Ip(e, t, n, r);
		return;
	}
	Lp(e, t, n, r);
}, Fp = (e, t, n) => {
	let r = e === "" ? t : Rp(t, e);
	r.classGroupId = n;
}, Ip = (e, t, n, r) => {
	if (zp(e)) {
		Np(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Cp(n, e));
}, Lp = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Np(o, Rp(t, a), n, r);
	}
}, Rp = (e, t) => {
	let n = e, r = t.split(Tp), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = wp(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, zp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Bp = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, Vp = "!", Hp = ":", Up = [], Wp = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Gp = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Hp) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(Vp) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Vp) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Wp(t, l, c, u);
	};
	if (t) {
		let e = t + Hp, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Wp(Up, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Kp = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, qp = (e) => ({
	cache: Bp(e.cacheSize),
	parseClassName: Gp(e),
	sortModifiers: Kp(e),
	postfixLookupClassGroupIds: Jp(e),
	...Op(e)
}), Jp = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Yp = /\s+/, Xp = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Yp), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + Vp : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, Zp = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Qp(n)) && (i && (i += " "), i += r);
	return i;
}, Qp = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Qp(e[r])) && (n && (n += " "), n += t);
	return n;
}, $p = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = qp(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Xp(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Zp(...e));
}, em = [], tm = (e) => {
	let t = (t) => t[e] || em;
	return t.isThemeGetter = !0, t;
}, nm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, im = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, am = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, om = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, cm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lm = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, um = (e) => im.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), dm = (e) => !!e && Number.isInteger(Number(e)), fm = (e) => e.endsWith("%") && K(e.slice(0, -1)), pm = (e) => am.test(e), mm = () => !0, hm = (e) => om.test(e) && !sm.test(e), gm = () => !1, _m = (e) => cm.test(e), vm = (e) => lm.test(e), ym = (e) => !q(e) && !J(e), bm = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), xm = (e) => Im(e, Bm, gm), q = (e) => nm.test(e), Sm = (e) => Im(e, Vm, hm), Cm = (e) => Im(e, Hm, K), wm = (e) => Im(e, Wm, mm), Tm = (e) => Im(e, Um, gm), Em = (e) => Im(e, Rm, gm), Dm = (e) => Im(e, zm, vm), Om = (e) => Im(e, Gm, _m), J = (e) => rm.test(e), km = (e) => Lm(e, Vm), Am = (e) => Lm(e, Um), jm = (e) => Lm(e, Rm), Mm = (e) => Lm(e, Bm), Nm = (e) => Lm(e, zm), Pm = (e) => Lm(e, Gm, !0), Fm = (e) => Lm(e, Wm, !0), Im = (e, t, n) => {
	let r = nm.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Lm = (e, t, n = !1) => {
	let r = rm.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Rm = (e) => e === "position" || e === "percentage", zm = (e) => e === "image" || e === "url", Bm = (e) => e === "length" || e === "size" || e === "bg-size", Vm = (e) => e === "length", Hm = (e) => e === "number", Um = (e) => e === "family-name", Wm = (e) => e === "number" || e === "weight", Gm = (e) => e === "shadow", Km = /*#__PURE__*/ $p(() => {
	let e = tm("color"), t = tm("font"), n = tm("text"), r = tm("font-weight"), i = tm("tracking"), a = tm("leading"), o = tm("breakpoint"), s = tm("container"), c = tm("spacing"), l = tm("radius"), u = tm("shadow"), d = tm("inset-shadow"), f = tm("text-shadow"), p = tm("drop-shadow"), m = tm("blur"), h = tm("perspective"), g = tm("aspect"), _ = tm("ease"), v = tm("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		J,
		q
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		J,
		q,
		c
	], T = () => [
		um,
		"full",
		"auto",
		...w()
	], E = () => [
		dm,
		"none",
		"subgrid",
		J,
		q
	], D = () => [
		"auto",
		{ span: [
			"full",
			dm,
			J,
			q
		] },
		dm,
		J,
		q
	], ee = () => [
		dm,
		"auto",
		J,
		q
	], te = () => [
		"auto",
		"min",
		"max",
		"fr",
		J,
		q
	], ne = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], re = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...w()], k = () => [
		um,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], ie = () => [
		um,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], ae = () => [
		um,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], A = () => [
		e,
		J,
		q
	], oe = () => [
		...b(),
		jm,
		Em,
		{ position: [J, q] }
	], se = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ce = () => [
		"auto",
		"cover",
		"contain",
		Mm,
		xm,
		{ size: [J, q] }
	], le = () => [
		fm,
		km,
		Sm
	], j = () => [
		"",
		"none",
		"full",
		l,
		J,
		q
	], M = () => [
		"",
		K,
		km,
		Sm
	], ue = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], de = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], fe = () => [
		K,
		fm,
		jm,
		Em
	], pe = () => [
		"",
		"none",
		m,
		J,
		q
	], me = () => [
		"none",
		K,
		J,
		q
	], he = () => [
		"none",
		K,
		J,
		q
	], ge = () => [
		K,
		J,
		q
	], _e = () => [
		um,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [pm],
			breakpoint: [pm],
			color: [mm],
			container: [pm],
			"drop-shadow": [pm],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ym],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [pm],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [pm],
			shadow: [pm],
			spacing: ["px", K],
			text: [pm],
			"text-shadow": [pm],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				um,
				q,
				J,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				J,
				q
			] }],
			"container-named": [bm],
			columns: [{ columns: [
				K,
				q,
				J,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				dm,
				"auto",
				J,
				q
			] }],
			basis: [{ basis: [
				um,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				K,
				um,
				"auto",
				"initial",
				"none",
				q
			] }],
			grow: [{ grow: [
				"",
				K,
				J,
				q
			] }],
			shrink: [{ shrink: [
				"",
				K,
				J,
				q
			] }],
			order: [{ order: [
				dm,
				"first",
				"last",
				"none",
				J,
				q
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": ee() }],
			"col-end": [{ "col-end": ee() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": ee() }],
			"row-end": [{ "row-end": ee() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": te() }],
			"auto-rows": [{ "auto-rows": te() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...ne(), "normal"] }],
			"justify-items": [{ "justify-items": [...re(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...re()] }],
			"align-content": [{ content: ["normal", ...ne()] }],
			"align-items": [{ items: [...re(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...re(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ne() }],
			"place-items": [{ "place-items": [...re(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...re()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mbs: [{ mbs: O() }],
			mbe: [{ mbe: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: k() }],
			"inline-size": [{ inline: ["auto", ...ie()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...ie()] }],
			"max-inline-size": [{ "max-inline": ["none", ...ie()] }],
			"block-size": [{ block: ["auto", ...ae()] }],
			"min-block-size": [{ "min-block": ["auto", ...ae()] }],
			"max-block-size": [{ "max-block": ["none", ...ae()] }],
			w: [{ w: [
				s,
				"screen",
				...k()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...k()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...k()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...k()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...k()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...k()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				km,
				Sm
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Fm,
				wm
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				fm,
				q
			] }],
			"font-family": [{ font: [
				Am,
				Tm,
				t
			] }],
			"font-features": [{ "font-features": [q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				J,
				q
			] }],
			"line-clamp": [{ "line-clamp": [
				K,
				"none",
				J,
				Cm
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				J,
				q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				J,
				q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: A() }],
			"text-color": [{ text: A() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				K,
				"from-font",
				"auto",
				J,
				Sm
			] }],
			"text-decoration-color": [{ decoration: A() }],
			"underline-offset": [{ "underline-offset": [
				K,
				"auto",
				J,
				q
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				dm,
				J,
				q
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				J,
				q
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				J,
				q
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: oe() }],
			"bg-repeat": [{ bg: se() }],
			"bg-size": [{ bg: ce() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						dm,
						J,
						q
					],
					radial: [
						"",
						J,
						q
					],
					conic: [
						dm,
						J,
						q
					]
				},
				Nm,
				Dm
			] }],
			"bg-color": [{ bg: A() }],
			"gradient-from-pos": [{ from: le() }],
			"gradient-via-pos": [{ via: le() }],
			"gradient-to-pos": [{ to: le() }],
			"gradient-from": [{ from: A() }],
			"gradient-via": [{ via: A() }],
			"gradient-to": [{ to: A() }],
			rounded: [{ rounded: j() }],
			"rounded-s": [{ "rounded-s": j() }],
			"rounded-e": [{ "rounded-e": j() }],
			"rounded-t": [{ "rounded-t": j() }],
			"rounded-r": [{ "rounded-r": j() }],
			"rounded-b": [{ "rounded-b": j() }],
			"rounded-l": [{ "rounded-l": j() }],
			"rounded-ss": [{ "rounded-ss": j() }],
			"rounded-se": [{ "rounded-se": j() }],
			"rounded-ee": [{ "rounded-ee": j() }],
			"rounded-es": [{ "rounded-es": j() }],
			"rounded-tl": [{ "rounded-tl": j() }],
			"rounded-tr": [{ "rounded-tr": j() }],
			"rounded-br": [{ "rounded-br": j() }],
			"rounded-bl": [{ "rounded-bl": j() }],
			"border-w": [{ border: M() }],
			"border-w-x": [{ "border-x": M() }],
			"border-w-y": [{ "border-y": M() }],
			"border-w-s": [{ "border-s": M() }],
			"border-w-e": [{ "border-e": M() }],
			"border-w-bs": [{ "border-bs": M() }],
			"border-w-be": [{ "border-be": M() }],
			"border-w-t": [{ "border-t": M() }],
			"border-w-r": [{ "border-r": M() }],
			"border-w-b": [{ "border-b": M() }],
			"border-w-l": [{ "border-l": M() }],
			"divide-x": [{ "divide-x": M() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": M() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ue(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ue(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: A() }],
			"border-color-x": [{ "border-x": A() }],
			"border-color-y": [{ "border-y": A() }],
			"border-color-s": [{ "border-s": A() }],
			"border-color-e": [{ "border-e": A() }],
			"border-color-bs": [{ "border-bs": A() }],
			"border-color-be": [{ "border-be": A() }],
			"border-color-t": [{ "border-t": A() }],
			"border-color-r": [{ "border-r": A() }],
			"border-color-b": [{ "border-b": A() }],
			"border-color-l": [{ "border-l": A() }],
			"divide-color": [{ divide: A() }],
			"outline-style": [{ outline: [
				...ue(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				K,
				J,
				q
			] }],
			"outline-w": [{ outline: [
				"",
				K,
				km,
				Sm
			] }],
			"outline-color": [{ outline: A() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Pm,
				Om
			] }],
			"shadow-color": [{ shadow: A() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Pm,
				Om
			] }],
			"inset-shadow-color": [{ "inset-shadow": A() }],
			"ring-w": [{ ring: M() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: A() }],
			"ring-offset-w": [{ "ring-offset": [K, Sm] }],
			"ring-offset-color": [{ "ring-offset": A() }],
			"inset-ring-w": [{ "inset-ring": M() }],
			"inset-ring-color": [{ "inset-ring": A() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Pm,
				Om
			] }],
			"text-shadow-color": [{ "text-shadow": A() }],
			opacity: [{ opacity: [
				K,
				J,
				q
			] }],
			"mix-blend": [{ "mix-blend": [
				...de(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": de() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [K] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": fe() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": fe() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": A() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": A() }],
			"mask-image-t-from-pos": [{ "mask-t-from": fe() }],
			"mask-image-t-to-pos": [{ "mask-t-to": fe() }],
			"mask-image-t-from-color": [{ "mask-t-from": A() }],
			"mask-image-t-to-color": [{ "mask-t-to": A() }],
			"mask-image-r-from-pos": [{ "mask-r-from": fe() }],
			"mask-image-r-to-pos": [{ "mask-r-to": fe() }],
			"mask-image-r-from-color": [{ "mask-r-from": A() }],
			"mask-image-r-to-color": [{ "mask-r-to": A() }],
			"mask-image-b-from-pos": [{ "mask-b-from": fe() }],
			"mask-image-b-to-pos": [{ "mask-b-to": fe() }],
			"mask-image-b-from-color": [{ "mask-b-from": A() }],
			"mask-image-b-to-color": [{ "mask-b-to": A() }],
			"mask-image-l-from-pos": [{ "mask-l-from": fe() }],
			"mask-image-l-to-pos": [{ "mask-l-to": fe() }],
			"mask-image-l-from-color": [{ "mask-l-from": A() }],
			"mask-image-l-to-color": [{ "mask-l-to": A() }],
			"mask-image-x-from-pos": [{ "mask-x-from": fe() }],
			"mask-image-x-to-pos": [{ "mask-x-to": fe() }],
			"mask-image-x-from-color": [{ "mask-x-from": A() }],
			"mask-image-x-to-color": [{ "mask-x-to": A() }],
			"mask-image-y-from-pos": [{ "mask-y-from": fe() }],
			"mask-image-y-to-pos": [{ "mask-y-to": fe() }],
			"mask-image-y-from-color": [{ "mask-y-from": A() }],
			"mask-image-y-to-color": [{ "mask-y-to": A() }],
			"mask-image-radial": [{ "mask-radial": [J, q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": fe() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": fe() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": A() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": A() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [K] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": fe() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": fe() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": A() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": A() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: oe() }],
			"mask-repeat": [{ mask: se() }],
			"mask-size": [{ mask: ce() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				J,
				q
			] }],
			filter: [{ filter: [
				"",
				"none",
				J,
				q
			] }],
			blur: [{ blur: pe() }],
			brightness: [{ brightness: [
				K,
				J,
				q
			] }],
			contrast: [{ contrast: [
				K,
				J,
				q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Pm,
				Om
			] }],
			"drop-shadow-color": [{ "drop-shadow": A() }],
			grayscale: [{ grayscale: [
				"",
				K,
				J,
				q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				K,
				J,
				q
			] }],
			invert: [{ invert: [
				"",
				K,
				J,
				q
			] }],
			saturate: [{ saturate: [
				K,
				J,
				q
			] }],
			sepia: [{ sepia: [
				"",
				K,
				J,
				q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				J,
				q
			] }],
			"backdrop-blur": [{ "backdrop-blur": pe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				K,
				J,
				q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				K,
				J,
				q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				K,
				J,
				q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				K,
				J,
				q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				K,
				J,
				q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				K,
				J,
				q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				K,
				J,
				q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				K,
				J,
				q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				J,
				q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				K,
				"initial",
				J,
				q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				J,
				q
			] }],
			delay: [{ delay: [
				K,
				J,
				q
			] }],
			animate: [{ animate: [
				"none",
				v,
				J,
				q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				J,
				q
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: me() }],
			"rotate-x": [{ "rotate-x": me() }],
			"rotate-y": [{ "rotate-y": me() }],
			"rotate-z": [{ "rotate-z": me() }],
			scale: [{ scale: he() }],
			"scale-x": [{ "scale-x": he() }],
			"scale-y": [{ "scale-y": he() }],
			"scale-z": [{ "scale-z": he() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ge() }],
			"skew-x": [{ "skew-x": ge() }],
			"skew-y": [{ "skew-y": ge() }],
			transform: [{ transform: [
				J,
				q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: _e() }],
			"translate-x": [{ "translate-x": _e() }],
			"translate-y": [{ "translate-y": _e() }],
			"translate-z": [{ "translate-z": _e() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				dm,
				J,
				q
			] }],
			accent: [{ accent: A() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: A() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				J,
				q
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": A() }],
			"scrollbar-track-color": [{ "scrollbar-track": A() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				J,
				q
			] }],
			fill: [{ fill: ["none", ...A()] }],
			"stroke-w": [{ stroke: [
				K,
				km,
				Sm,
				Cm
			] }],
			stroke: [{ stroke: ["none", ...A()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}), qm = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Jm = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ym = {};
function Xm(e, t) {
	return ((t || Ym).jsx ? Jm : qm).test(e);
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-whitespace@3.0.0/node_modules/hast-util-whitespace/lib/index.js
var Zm = /[ \t\n\f\r]/g;
function Qm(e) {
	return typeof e == "object" ? e.type === "text" && $m(e.value) : $m(e);
}
function $m(e) {
	return e.replace(Zm, "") === "";
}
//#endregion
//#region ../node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
function eh(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? nh(e.position) : "start" in e || "end" in e ? nh(e) : "line" in e || "column" in e ? th(e) : "";
}
function th(e) {
	return rh(e && e.line) + ":" + rh(e && e.column);
}
function nh(e) {
	return th(e && e.start) + "-" + th(e && e.end);
}
function rh(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region ../node_modules/.pnpm/vfile-message@4.0.2/node_modules/vfile-message/lib/index.js
var ih = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = o ? o.line : void 0, this.name = eh(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual, this.expected, this.note, this.url;
	}
};
ih.prototype.file = "", ih.prototype.name = "", ih.prototype.reason = "", ih.prototype.message = "", ih.prototype.stack = "", ih.prototype.column = void 0, ih.prototype.line = void 0, ih.prototype.ancestors = void 0, ih.prototype.cause = void 0, ih.prototype.fatal = void 0, ih.prototype.place = void 0, ih.prototype.ruleId = void 0, ih.prototype.source = void 0;
//#endregion
//#region ../node_modules/.pnpm/hast-util-to-jsx-runtime@2.3.6/node_modules/hast-util-to-jsx-runtime/lib/index.js
var ah = {}.hasOwnProperty, oh = /* @__PURE__ */ new Map(), sh = /[A-Z]/g, ch = /* @__PURE__ */ new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), lh = /* @__PURE__ */ new Set(["td", "th"]), uh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function dh(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Sh(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = xh(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? ne : f,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = fh(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function fh(e, t, n) {
	if (t.type === "element") return ph(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return mh(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return gh(e, t, n);
	if (t.type === "mdxjsEsm") return hh(e, t);
	if (t.type === "root") return _h(e, t, n);
	if (t.type === "text") return vh(e, t);
}
function ph(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ne, e.schema = i), e.ancestors.push(t);
	let a = Oh(e, t.tagName, !1), o = Ch(e, t), s = Th(e, t);
	return ch.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e != "string" || !Qm(e);
	})), yh(e, o, a, t), bh(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function mh(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	kh(e, t.position);
}
function hh(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	kh(e, t.position);
}
function gh(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = ne, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Oh(e, t.name, !0), o = wh(e, t), s = Th(e, t);
	return yh(e, o, a, t), bh(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function _h(e, t, n) {
	let r = {};
	return bh(r, Th(e, t)), e.create(t, e.Fragment, r, n);
}
function vh(e, t) {
	return t.value;
}
function yh(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function bh(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function xh(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Sh(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = he(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Ch(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && ah.call(t.properties, i)) {
		let a = Eh(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && lh.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function wh(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") {
		if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let a = i.properties[0];
			a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
		} else kh(e, t.position);
	} else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") {
			if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, a = e.evaluater.evaluateExpression(t.expression);
			} else kh(e, t.position);
		} else a = r.value === null || r.value;
		n[i] = a;
	}
	return n;
}
function Th(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : oh;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = fh(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Eh(e, t, n) {
	let r = c(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? re(n) : ee(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Dh(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Ah(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Ze[r.property] || r.property : r.attribute, n];
	}
}
function Dh(e, t) {
	try {
		return (0, Re.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new ih("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = uh + "#cannot-parse-style-attribute", r;
	}
}
function Oh(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = Xm(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = Xm(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return ah.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	kh(e);
}
function kh(e, t) {
	let n = new ih("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = uh + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ah(e) {
	let t = {}, n;
	for (n in e) ah.call(e, n) && (t[jh(n)] = e[n]);
	return t;
}
function jh(e) {
	let t = e.replace(sh, Mh);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Mh(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region ../node_modules/.pnpm/html-url-attributes@3.0.1/node_modules/html-url-attributes/lib/index.js
var Nh = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, Ph = { tokenize: Fh };
function Fh(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), E(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return D(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/document.js
var Ih = { tokenize: Rh }, Lh = { tokenize: zh };
function Rh(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return qc(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Lh, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Lh, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return D(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			qc(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function zh(e, t, n) {
	return E(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/flow.js
var Bh = { tokenize: Vh };
function Vh(e) {
	let t = this, n = e.attempt(jl, r, e.attempt(this.parser.constructs.flowInitial, i, E(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ru, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/text.js
var Hh = { resolveAll: Kh() }, Uh = Gh("string"), Wh = Gh("text");
function Gh(e) {
	return {
		resolveAll: Kh(e === "text" ? qh : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Kh(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function qh(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/constructs.js
var Jh = /* @__PURE__ */ t({
	attentionMarkers: () => ng,
	contentInitial: () => Xh,
	disable: () => rg,
	document: () => Yh,
	flow: () => Qh,
	flowInitial: () => Zh,
	insideSpan: () => tg,
	string: () => $h,
	text: () => eg
}), Yh = {
	42: Xu,
	43: Xu,
	45: Xu,
	48: Xu,
	49: Xu,
	50: Xu,
	51: Xu,
	52: Xu,
	53: Xu,
	54: Xu,
	55: Xu,
	56: Xu,
	57: Xu,
	62: Nl
}, Xh = { 91: fu }, Zh = {
	[-2]: Gl,
	[-1]: Gl,
	32: Gl
}, Qh = {
	35: vu,
	42: Ju,
	45: [id, Ju],
	60: Cu,
	61: id,
	95: Ju,
	96: Hl,
	126: Hl
}, $h = {
	38: zl,
	92: Ll
}, eg = {
	[-5]: Ku,
	[-4]: Ku,
	[-3]: Ku,
	33: Hu,
	38: zl,
	42: Tl,
	60: [kl, Au],
	91: Wu,
	92: [gu, Ll],
	93: Mu,
	95: Tl,
	96: Yl
}, tg = { null: [Tl, Hh] }, ng = { null: [42, 95] }, rg = { null: [] };
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/create-tokenizer.js
function ig(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = Jc(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = wl(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return og(p(e), t);
	}
	function p(e) {
		return ag(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		D(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && qc(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function ag(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function og(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/parse.js
function sg(e) {
	let t = {
		constructs: Xc([Jh, ...(e || {}).extensions || []]),
		content: n(Ph),
		defined: [],
		document: n(Ih),
		flow: n(Bh),
		lazy: {},
		string: n(Uh),
		text: n(Wh)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return ig(t, e, n);
		}
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/postprocess.js
function cg(e) {
	for (; !tu(e););
	return e;
}
//#endregion
//#region ../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/preprocess.js
var lg = /[\0\t\n\r]/g;
function ug() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (lg.lastIndex = u, c = lg.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/lib/index.js
var dg = {}.hasOwnProperty;
function fg(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), pg(n)(cg(sg(n).document().write(ug()(e, t, !0))));
}
function pg(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(Se),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ve),
			blockQuote: a(pe),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(me),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(me, o),
			codeText: a(he, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(ge),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(_e),
			hardBreakEscape: a(ye),
			hardBreakTrailing: a(ye),
			htmlFlow: a(be, o),
			htmlFlowData: T,
			htmlText: a(be, o),
			htmlTextData: T,
			image: a(xe),
			label: o,
			link: a(Se),
			listItem: a(we),
			listItemValue: f,
			listOrdered: a(Ce, d),
			listUnordered: a(Ce),
			paragraph: a(Te),
			reference: ce,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ve),
			strong: a(Ee),
			thematicBreak: a(Oe)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: fe,
			autolinkProtocol: de,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: j,
			characterReferenceMarkerNumeric: j,
			characterReferenceValue: M,
			characterReference: ue,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(re),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(ee),
			hardBreakTrailing: c(ee),
			htmlFlow: c(te),
			htmlFlowData: E,
			htmlText: c(ne),
			htmlTextData: E,
			image: c(k),
			label: ae,
			labelText: ie,
			lineEnding: D,
			link: c(O),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: le,
			resourceDestinationString: A,
			resourceTitleString: oe,
			resource: se,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	hg(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			dg.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || _g).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: mg(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: mg(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: mg(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || _g).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + eh({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = mg(e.end);
	}
	function u() {
		return Us(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = $o(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = De(), n.position = {
			start: mg(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = mg(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = mg(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function ee() {
		this.data.atHardBreak = !0;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function O() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function k() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function ie(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = kc(t), n.identifier = $o(t).toLowerCase();
	}
	function ae() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function se() {
		this.data.inReference = void 0;
	}
	function ce() {
		this.data.referenceType = "collapsed";
	}
	function le(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = $o(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function j(e) {
		this.data.characterReferenceType = e.type;
	}
	function M(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = Dc(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Ec(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function ue(e) {
		let t = this.stack.pop();
		t.position.end = mg(e.end);
	}
	function de(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function fe(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function pe() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function me() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function he() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function ge() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function _e() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ve() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function ye() {
		return { type: "break" };
	}
	function be() {
		return {
			type: "html",
			value: ""
		};
	}
	function xe() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function Se() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function Ce(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function we(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function Te() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function Ee() {
		return {
			type: "strong",
			children: []
		};
	}
	function De() {
		return {
			type: "text",
			value: ""
		};
	}
	function Oe() {
		return { type: "thematicBreak" };
	}
}
function mg(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function hg(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? hg(e, r) : gg(e, r);
	}
}
function gg(e, t) {
	let n;
	for (n in t) if (dg.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function _g(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + eh({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + eh({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + eh({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js
function vg(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return fg(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function yg(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/break.js
function bg(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/code.js
function xg(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {};
	t.lang && (r.className = ["language-" + t.lang]);
	let i = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [i]
	}, e.patch(t, i), i;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Sg(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function Cg(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function wg(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Cl(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function Tg(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/html.js
function Eg(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/revert.js
function Dg(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function Og(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Dg(e, t);
	let i = {
		src: Cl(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/image.js
function kg(e, t) {
	let n = { src: Cl(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function Ag(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function jg(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Dg(e, t);
	let i = { href: Cl(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/link.js
function Mg(e, t) {
	let n = { href: Cl(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function Ng(e, t, n) {
	let r = e.all(t), i = n ? Pg(n) : Fg(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Pg(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Fg(n[r]);
	}
	return t;
}
function Fg(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/list.js
function Ig(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function Lg(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/root.js
function Rg(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function zg(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table.js
function Bg(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = he(t.children[1]), o = me(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Vg(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Hg(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
var Ug = 9, Wg = 32;
function Gg(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Kg(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Kg(t.slice(i), i > 0, !1)), a.join("");
}
function Kg(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Ug || t === Wg;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Ug || t === Wg;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/text.js
function qg(e, t) {
	let n = {
		type: "text",
		value: Gg(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Jg(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/handlers/index.js
var Yg = {
	blockquote: yg,
	break: bg,
	code: xg,
	delete: Sg,
	emphasis: Cg,
	footnoteReference: wg,
	heading: Tg,
	html: Eg,
	imageReference: Og,
	image: kg,
	inlineCode: Ag,
	linkReference: jg,
	link: Mg,
	listItem: Ng,
	list: Ig,
	paragraph: Lg,
	root: Rg,
	strong: zg,
	table: Bg,
	tableCell: Hg,
	tableRow: Vg,
	text: qg,
	thematicBreak: Jg,
	toml: Xg,
	yaml: Xg,
	definition: Xg,
	footnoteDefinition: Xg
};
function Xg() {}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/footer.js
function Zg(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function Qg(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function $g(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Zg, r = e.options.footnoteBackLabel || Qg, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Cl(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...pe(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/state.js
var e_ = {}.hasOwnProperty, t_ = {};
function n_(e, t) {
	let n = t || t_, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: i_,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Yg,
			...n.handlers
		},
		one: o,
		options: n,
		patch: r_,
		wrap: o_
	};
	return Le(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (e_.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = pe(n);
				return r.children = a.all(e), r;
			}
			return pe(e);
		}
		return (a.options.unknownHandler || a_)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = s_(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = s_(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function r_(e, t) {
	e.position && (t.position = _e(e));
}
function i_(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, pe(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function a_(e, t) {
	let n = t.data || {}, r = "value" in t && !(e_.call(n, "hProperties") || e_.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function o_(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function s_(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-to-hast@13.2.0/node_modules/mdast-util-to-hast/lib/index.js
function c_(e, t) {
	let n = n_(e, t), r = n.one(e, void 0), i = $g(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region ../node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js
function l_(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = c_(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return c_(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function u_(e) {
	if (e) throw e;
}
//#endregion
//#region ../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
var d_ = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function f_(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js
function p_() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? m_(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function m_(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minpath.browser.js
var h_ = {
	basename: g_,
	dirname: __,
	extname: v_,
	join: y_,
	sep: "/"
};
function g_(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	S_(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function __(e) {
	if (S_(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function v_(e) {
	S_(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function y_(...e) {
	let t = -1, n;
	for (; ++t < e.length;) S_(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : b_(n);
}
function b_(e) {
	S_(e);
	let t = e.codePointAt(0) === 47, n = x_(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function x_(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function S_(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minproc.browser.js
var C_ = { cwd: w_ };
function w_() {
	return "/";
}
//#endregion
//#region ../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js
function T_(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.browser.js
function E_(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!T_(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return D_(e);
}
function D_(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region ../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js
var O_ = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], k_ = class {
	constructor(e) {
		let t;
		t = e ? T_(e) ? { path: e } : typeof e == "string" || N_(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : C_.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < O_.length;) {
			let e = O_[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) O_.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? h_.basename(this.path) : void 0;
	}
	set basename(e) {
		j_(e, "basename"), A_(e, "basename"), this.path = h_.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? h_.dirname(this.path) : void 0;
	}
	set dirname(e) {
		M_(this.basename, "dirname"), this.path = h_.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? h_.extname(this.path) : void 0;
	}
	set extname(e) {
		if (A_(e, "extname"), M_(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = h_.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		T_(e) && (e = E_(e)), j_(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? h_.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		j_(e, "stem"), A_(e, "stem"), this.path = h_.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new ih(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function A_(e, t) {
	if (e && e.includes(h_.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + h_.sep + "`");
}
function j_(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function M_(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function N_(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/callable-instance.js
var P_ = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), F_ = {}.hasOwnProperty, I_ = new class e extends P_ {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = p_();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, d_.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (z_("data", this.frozen), this.namespace[e] = t, this) : F_.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (z_("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = H_(e), n = this.parser || this.Parser;
		return L_("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), L_("process", this.parser || this.Parser), R_("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = H_(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				W_(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), L_("processSync", this.parser || this.Parser), R_("processSync", this.compiler || this.Compiler), this.process(e, r), V_("processSync", "process", t), n;
		function r(e, r) {
			t = !0, u_(e), n = r;
		}
	}
	run(e, t, n) {
		B_(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = H_(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), V_("runSync", "run", n), r;
		function i(e, t) {
			u_(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = H_(t), r = this.compiler || this.Compiler;
		return R_("stringify", r), B_(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (z_("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, d_.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				f_(o) && f_(r) && (r = (0, d_.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function L_(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function R_(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function z_(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function B_(e) {
	if (!f_(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function V_(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function H_(e) {
	return U_(e) ? e : new k_(e);
}
function U_(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function W_(e) {
	return typeof e == "string" || G_(e);
}
function G_(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../node_modules/.pnpm/marked@17.0.1/node_modules/marked/lib/marked.esm.js
var K_ = /* @__PURE__ */ e(a(), 1), Y = o();
function q_() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var J_ = q_();
function Y_(e) {
	J_ = e;
}
var X_ = { exec: () => null };
function X(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(Q_.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var Z_ = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), Q_ = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, $_ = /^(?:[ \t]*(?:\n|$))+/, ev = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, tv = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, nv = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, rv = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, iv = /(?:[*+-]|\d{1,9}[.)])/, av = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ov = X(av).replace(/bull/g, iv).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), sv = X(av).replace(/bull/g, iv).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), cv = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, lv = /^[^\n]+/, uv = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, dv = X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", uv).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), fv = X(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, iv).getRegex(), pv = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", mv = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, hv = X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", mv).replace("tag", pv).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gv = X(cv).replace("hr", nv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pv).getRegex(), _v = {
	blockquote: X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gv).getRegex(),
	code: ev,
	def: dv,
	fences: tv,
	heading: rv,
	hr: nv,
	html: hv,
	lheading: ov,
	list: fv,
	newline: $_,
	paragraph: gv,
	table: X_,
	text: lv
}, vv = X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", nv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pv).getRegex(), yv = {
	..._v,
	lheading: sv,
	table: vv,
	paragraph: X(cv).replace("hr", nv).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", vv).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pv).getRegex()
}, bv = {
	..._v,
	html: X("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", mv).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: X_,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: X(cv).replace("hr", nv).replace("heading", " *#{1,6} *[^\n]").replace("lheading", ov).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, xv = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Sv = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Cv = /^( {2,}|\\)\n(?!\s*$)/, wv = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Tv = /[\p{P}\p{S}]/u, Ev = /[\s\p{P}\p{S}]/u, Dv = /[^\s\p{P}\p{S}]/u, Ov = X(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ev).getRegex(), kv = /(?!~)[\p{P}\p{S}]/u, Av = /(?!~)[\s\p{P}\p{S}]/u, jv = /(?:[^\s\p{P}\p{S}]|~)/u, Mv = X(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Z_ ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Nv = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Pv = X(Nv, "u").replace(/punct/g, Tv).getRegex(), Fv = X(Nv, "u").replace(/punct/g, kv).getRegex(), Iv = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Lv = X(Iv, "gu").replace(/notPunctSpace/g, Dv).replace(/punctSpace/g, Ev).replace(/punct/g, Tv).getRegex(), Rv = X(Iv, "gu").replace(/notPunctSpace/g, jv).replace(/punctSpace/g, Av).replace(/punct/g, kv).getRegex(), zv = X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Dv).replace(/punctSpace/g, Ev).replace(/punct/g, Tv).getRegex(), Bv = X(/\\(punct)/, "gu").replace(/punct/g, Tv).getRegex(), Vv = X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Hv = X(mv).replace("(?:-->|$)", "-->").getRegex(), Uv = X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Hv).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Wv = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Gv = X(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Wv).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Kv = X(/^!?\[(label)\]\[(ref)\]/).replace("label", Wv).replace("ref", uv).getRegex(), qv = X(/^!?\[(ref)\](?:\[\])?/).replace("ref", uv).getRegex(), Jv = X("reflink|nolink(?!\\()", "g").replace("reflink", Kv).replace("nolink", qv).getRegex(), Yv = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Xv = {
	_backpedal: X_,
	anyPunctuation: Bv,
	autolink: Vv,
	blockSkip: Mv,
	br: Cv,
	code: Sv,
	del: X_,
	emStrongLDelim: Pv,
	emStrongRDelimAst: Lv,
	emStrongRDelimUnd: zv,
	escape: xv,
	link: Gv,
	nolink: qv,
	punctuation: Ov,
	reflink: Kv,
	reflinkSearch: Jv,
	tag: Uv,
	text: wv,
	url: X_
}, Zv = {
	...Xv,
	link: X(/^!?\[(label)\]\((.*?)\)/).replace("label", Wv).getRegex(),
	reflink: X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Wv).getRegex()
}, Qv = {
	...Xv,
	emStrongRDelimAst: Rv,
	emStrongLDelim: Fv,
	url: X(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Yv).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: X(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Yv).getRegex()
}, $v = {
	...Qv,
	br: X(Cv).replace("{2,}", "*").getRegex(),
	text: X(Qv.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ey = {
	normal: _v,
	gfm: yv,
	pedantic: bv
}, ty = {
	normal: Xv,
	gfm: Qv,
	breaks: $v,
	pedantic: Zv
}, ny = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ry = (e) => ny[e];
function iy(e, t) {
	if (t) {
		if (Q_.escapeTest.test(e)) return e.replace(Q_.escapeReplace, ry);
	} else if (Q_.escapeTestNoEncode.test(e)) return e.replace(Q_.escapeReplaceNoEncode, ry);
	return e;
}
function ay(e) {
	try {
		e = encodeURI(e).replace(Q_.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function oy(e, t) {
	let n = e.replace(Q_.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(Q_.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(Q_.slashPipe, "|");
	return n;
}
function sy(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function cy(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function ly(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function uy(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var dy = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || J_;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : sy(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = uy(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = sy(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: sy(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = sy(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d);
					for (; e;) {
						let f = e.split("\n", 1)[0], p;
						if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || t.test(l) || n.test(l)) break;
						if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						!u && !l.trim() && (u = !0), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
					if (e.text = e.text.replace(this.rules.other.listReplaceTask, ""), e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph") {
						e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
						for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
							this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
							break;
						}
					}
					let t = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (t) {
						let n = {
							type: "checkbox",
							raw: t[0] + " ",
							checked: t[0] !== "[ ]"
						};
						e.checked = n.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
							type: "paragraph",
							raw: n.raw,
							text: n.raw,
							tokens: [n]
						}) : e.tokens.unshift(n);
					}
				}
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) return {
			type: "html",
			block: !0,
			raw: t[0],
			pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
			text: t[0]
		};
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = oy(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: t[0],
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(oy(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) return {
			type: "heading",
			raw: t[0],
			depth: t[2].charAt(0) === "=" ? 1 : 2,
			text: t[1],
			tokens: this.lexer.inline(t[1])
		};
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = sy(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = cy(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), ly(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return ly(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				}
				if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e) {
		let t = this.rules.inline.del.exec(e);
		if (t) return {
			type: "del",
			raw: t[0],
			text: t[2],
			tokens: this.lexer.inlineTokens(t[2])
		};
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, fy = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || J_, this.options.tokenizer = this.options.tokenizer || new dy(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: Q_,
			block: ey.normal,
			inline: ty.normal
		};
		this.options.pedantic ? (t.block = ey.pedantic, t.inline = ty.pedantic) : this.options.gfm && (t.block = ey.gfm, t.inline = this.options.breaks ? ty.breaks : ty.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: ey,
			inline: ty
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(Q_.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.options.pedantic && (e = e.replace(Q_.tabCharGlobal, "    ").replace(Q_.spaceLine, "")); e;) {
			let r;
			if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.fences(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.heading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.hr(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.blockquote(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.list(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.html(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.def(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
				continue;
			}
			if (r = this.tokenizer.table(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.lheading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startBlock) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return t;
	}
}, py = class {
	options;
	parser;
	constructor(e) {
		this.options = e || J_;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(Q_.notSpaceStart)?.[0], i = e.replace(Q_.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + iy(r) + "\">" + (n ? i : iy(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : iy(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${iy(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = ay(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + iy(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = ay(e);
		if (i === null) return iy(n);
		e = i;
		let a = `<img src="${e}" alt="${n}"`;
		return t && (a += ` title="${iy(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : iy(e.text);
	}
}, my = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
	checkbox({ raw: e }) {
		return e;
	}
}, hy = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || J_, this.options.renderer = this.options.renderer || new py(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new my();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, gy = class {
	options;
	block;
	constructor(e) {
		this.options = e || J_;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? fy.lex : fy.lexInline;
	}
	provideParser() {
		return this.block ? hy.parse : hy.parseInline;
	}
}, _y = new class {
	defaults = q_();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = hy;
	Renderer = py;
	TextRenderer = my;
	Lexer = fy;
	Tokenizer = dy;
	Hooks = gy;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(1 / 0);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new py(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new dy(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new gy();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = gy.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && gy.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return fy.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return hy.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? fy.lex : fy.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser() : e ? hy.parse : hy.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer() : e ? fy.lex : fy.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser() : e ? hy.parse : hy.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + iy(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function Z(e, t) {
	return _y.parse(e, t);
}
Z.options = Z.setOptions = function(e) {
	return _y.setOptions(e), Z.defaults = _y.defaults, Y_(Z.defaults), Z;
}, Z.getDefaults = q_, Z.defaults = J_, Z.use = function(...e) {
	return _y.use(...e), Z.defaults = _y.defaults, Y_(Z.defaults), Z;
}, Z.walkTokens = function(e, t) {
	return _y.walkTokens(e, t);
}, Z.parseInline = _y.parseInline, Z.Parser = hy, Z.parser = hy.parse, Z.Renderer = py, Z.TextRenderer = my, Z.Lexer = fy, Z.lexer = fy.lex, Z.Tokenizer = dy, Z.Hooks = gy, Z.parse = Z, Z.options, Z.setOptions, Z.use, Z.walkTokens, Z.parseInline, hy.parse, fy.lex;
//#endregion
//#region ../node_modules/.pnpm/streamdown@2.6.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/streamdown/dist/chunk-YOKDWASO.js
var vy = 300, yy = "300px", by = 500;
function xy(e = {}) {
	let { immediate: t = !1, debounceDelay: n = vy, rootMargin: r = yy, idleTimeout: i = by } = e, [a, o] = (0, N.useState)(!1), s = (0, N.useRef)(null), c = (0, N.useRef)(null), l = (0, N.useRef)(null), u = (0, N.useMemo)(() => (e) => {
		let t = Date.now();
		return window.setTimeout(() => {
			e({
				didTimeout: !1,
				timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
			});
		}, 1);
	}, []), d = (0, N.useMemo)(() => typeof window < "u" && window.requestIdleCallback ? (e, t) => window.requestIdleCallback(e, t) : u, [u]), f = (0, N.useMemo)(() => typeof window < "u" && window.cancelIdleCallback ? (e) => window.cancelIdleCallback(e) : (e) => {
		clearTimeout(e);
	}, []);
	return (0, N.useEffect)(() => {
		if (t) {
			o(!0);
			return;
		}
		let e = s.current;
		if (!e) return;
		c.current &&= (clearTimeout(c.current), null), l.current &&= (f(l.current), null);
		let a = () => {
			c.current &&= (clearTimeout(c.current), null), l.current &&= (f(l.current), null);
		}, u = (e) => {
			l.current = d((t) => {
				t.timeRemaining() > 0 || t.didTimeout ? (o(!0), e.disconnect()) : l.current = d(() => {
					o(!0), e.disconnect();
				}, { timeout: i / 2 });
			}, { timeout: i });
		}, p = (e) => {
			a(), c.current = window.setTimeout(() => {
				var t;
				let n = e.takeRecords();
				(n.length === 0 || (t = n.at(-1)?.isIntersecting) != null && t) && u(e);
			}, n);
		}, m = (e, t) => {
			e.isIntersecting ? p(t) : a();
		}, h = new IntersectionObserver((e) => {
			for (let t of e) m(t, h);
		}, {
			rootMargin: r,
			threshold: 0
		});
		return h.observe(e), () => {
			c.current && clearTimeout(c.current), l.current && f(l.current), h.disconnect();
		};
	}, [
		t,
		n,
		r,
		i,
		f,
		d
	]), {
		shouldRender: a,
		containerRef: s
	};
}
var Sy = 320, Cy = 4, wy = () => typeof performance > "u" ? Date.now() : performance.now();
function Ty(e) {
	let t = e?.now ?? wy, n = e?.maxBacklogMs ?? Sy, r = 0, i = 0;
	return {
		now: t,
		beginPass(e) {
			i = Math.min(Math.max(r, e), e + n);
		},
		mark() {
			return i;
		},
		rewind(e) {
			i = e;
		},
		take(e, t, r) {
			if (e <= 0) return {
				baseDelay: 0,
				step: Math.max(0, t)
			};
			let a = Math.max(0, t), o = a === 0 ? 0 : Math.min(a, Cy), s = Math.max(i, r), c = r + n, l = s + Math.max(0, e - 1) * a, u = a;
			if (l > c && e > 1) {
				if (s < c) {
					let t = c - s;
					u = Math.max(o, t / (e - 1));
				} else u = o;
			}
			let d = Math.max(0, Math.round(s - r));
			return i = s + e * u, {
				baseDelay: d,
				step: u
			};
		},
		commitPass() {
			r = i;
		}
	};
}
var Ey = /\s/, Dy = /^\s+$/, Oy = /* @__PURE__ */ new Set([
	"pre",
	"svg",
	"math",
	"annotation"
]), ky = /* @__PURE__ */ new Set(["img", "hr"]), Ay = (e) => typeof e == "object" && !!e && "type" in e && e.type === "element", jy = (e) => e.some((e) => Ay(e) && Oy.has(e.tagName)), My = (e) => {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Ay(n) && n.tagName === "li") return n;
	}
}, Ny = (e, t, n, r) => {
	e.properties ??= {}, e.properties["data-sd-animate-marker"] = !0;
	let i = typeof e.properties.style == "string" ? `${e.properties.style};` : "";
	e.properties.style = `${i}--sd-marker-duration:${t}ms;--sd-marker-delay:${Math.round(n)}ms;--sd-marker-easing:${r}`;
}, Py = /* @__PURE__ */ new Set([
	"ul",
	"ol",
	"li"
]), Fy = (e) => {
	for (let t of e.children) if (Ay(t)) {
		if (t.tagName === "input") return t;
		if (Py.has(t.tagName)) continue;
		let e = Fy(t);
		if (e) return e;
	}
}, Iy = (e, t, n, r) => {
	e.properties ??= {}, e.properties["data-sd-animate"] = !0;
	let i = typeof e.properties.style == "string" ? `${e.properties.style};` : "";
	e.properties.style = `${i}--sd-animation:sd-${t.animation};--sd-duration:${n}ms;--sd-easing:${t.easing};--sd-delay:${Math.round(r)}ms`;
}, Ly = (e, t, n, r) => {
	let i = Fy(e);
	i && Iy(i, t, n, r);
}, Ry = (e, t, n, r, i, a) => {
	if (jy(t)) return;
	let o = r.prevContentLength, s = i.count;
	i.count += 1;
	let c = o > 0 && s < o, l = c ? 0 : a.baseDelay + i.newIndex++ * a.step;
	Iy(e, n, c ? 0 : n.duration, l);
}, zy = (e) => {
	var t;
	for (let n = e.length - 1; n >= 0; --n) {
		let r = e[n];
		if (Ay(r)) {
			if ((t = r.properties) != null && t["data-sd-animated"]) break;
			r.properties = {
				...r.properties,
				"data-sd-animated": !0
			};
		}
	}
}, By = (e) => {
	let t = [], n = "", r = !1;
	for (let i of e) {
		let e = Ey.test(i);
		if (e !== r && n) {
			if (e) {
				n += i, r = !0;
				continue;
			}
			t.push(n), n = "";
		}
		n += i, r = e;
	}
	return n && t.push(n), t;
}, Vy = (e) => {
	let t = [], n = "";
	for (let r of e) Ey.test(r) ? t.length > 0 && !Dy.test(t.at(-1)) ? t[t.length - 1] += r : n += r : (n &&= (t.push(n), ""), t.push(r));
	return n && (t.length > 0 ? t[t.length - 1] += n : t.push(n)), t;
}, Hy = (e, t, n, r, i, a) => {
	let o = `--sd-animation:sd-${t};--sd-duration:${i ? 0 : n}ms;--sd-easing:${r}`;
	return a && (o += `;--sd-delay:${Math.round(a)}ms`), {
		type: "element",
		tagName: "span",
		properties: {
			"data-sd-animate": !0,
			style: o
		},
		children: [{
			type: "text",
			value: e
		}]
	};
}, Uy = (e, t) => !(e > 0 && t < e), Wy = (e) => Ay(e) && ky.has(e.tagName), Gy = (e, t, n) => {
	let r = 0, i = 0;
	return l(e, (e) => e.type === "text" || Wy(e), (e, a) => {
		if (jy(a)) return te;
		if (Wy(e)) {
			Uy(n, i) && (r += 1), i += 1;
			return;
		}
		let o = e.value;
		if (!o.trim()) {
			i += o.length;
			return;
		}
		let s = t.sep === "char" ? Vy(o) : By(o);
		for (let e of s) {
			let t = i;
			i += e.length, !Dy.test(e) && Uy(n, t) && (r += 1);
		}
	}), r;
}, Ky = (e, t, n, r, i, a) => {
	var o;
	let s = t.at(-1);
	if (!(s && "children" in s)) return;
	if (jy(t)) return te;
	let c = s, l = c.children.indexOf(e);
	if (l === -1) return;
	let u = e.value;
	if (!u.trim()) {
		i.count += u.length;
		return;
	}
	let d = n.sep === "char" ? Vy(u) : By(u), f = r.prevContentLength, p = !1, m = My(t), h = !!(m && !((o = m.properties) != null && o["data-sd-animate-marker"])), g = !1, _ = d.map((e) => {
		let t = i.count;
		if (i.count += e.length, Dy.test(e)) return {
			type: "text",
			value: e
		};
		let r = f > 0 && t < f, o = r ? 0 : a.baseDelay + i.newIndex++ * a.step;
		if (p = !0, m && h && !g) {
			let e = r ? 0 : n.duration;
			Ny(m, e, o, n.easing), Ly(m, n, e, o), g = !0;
		}
		return Hy(e, n.animation, n.duration, n.easing, r, o);
	});
	return p && zy(t), c.children.splice(l, 1, ..._), l + _.length;
}, qy = 0;
function Jy(e) {
	let t = {
		animation: e?.animation ?? "fadeIn",
		duration: e?.duration ?? 150,
		easing: e?.easing ?? "ease",
		sep: e?.sep ?? "word",
		stagger: e?.stagger ?? 40,
		timeline: e?.timeline
	}, n = {
		committedCharCount: 0,
		prevContentLength: 0,
		lastRenderCharCount: 0,
		pendingMark: null
	}, r = qy++, i = () => (e) => {
		let r = {
			count: 0,
			newIndex: 0
		};
		n.prevContentLength = n.committedCharCount;
		let i = t.timeline, a = i?.now() ?? wy();
		i && (n.pendingMark === null ? n.pendingMark = i.mark() : i.rewind(n.pendingMark));
		let o = i ? i.take(Gy(e, t, n.prevContentLength), t.stagger, a) : {
			baseDelay: 0,
			step: t.stagger
		};
		l(e, (e) => e.type === "text" || Wy(e), (e, i) => {
			if (e.type === "text") return Ky(e, i, t, n, r, o);
			Ry(e, i, t, n, r, o);
		}), n.lastRenderCharCount = r.count, n.prevContentLength = 0;
	};
	return Object.defineProperty(i, "name", { value: `rehypeAnimate$${r}` }), {
		name: "animate",
		type: "animate",
		rehypePlugin: i,
		setPrevContentLength(e) {
			n.committedCharCount = e, n.prevContentLength = e;
		},
		getLastRenderCharCount() {
			return n.lastRenderCharCount;
		},
		commit() {
			n.committedCharCount = n.lastRenderCharCount, n.pendingMark = null;
		}
	};
}
Jy();
var Yy = (0, N.createContext)(!1), Xy = () => (0, N.useContext)(Yy), Zy = (...e) => Km(i(e)), Qy = (e, t) => {
	if (!e || !t) return t;
	let n = `${e}:`;
	return t.split(/\s+/).filter(Boolean).map((t) => t.startsWith(n) ? t : `${e}:${t}`).join(" ");
}, $y = (e) => e ? (...t) => Qy(e, Km(i(t))) : Zy, eb = (e, t, n) => {
	let r = typeof t == "string" && n.startsWith("text/csv") ? "﻿" : "", i = typeof t == "string" ? new Blob([r + t], { type: n }) : t, a = URL.createObjectURL(i), o = document.createElement("a");
	o.href = a, o.download = e, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(a);
}, tb = (0, N.createContext)(Zy), Q = () => (0, N.useContext)(tb), nb = 8, rb = (e) => {
	if (e !== void 0 && e !== 0 && e !== Infinity) {
		if (typeof e == "number") return Number.isFinite(e) && e > 0 ? `${e}px` : void 0;
		if (e !== "0" && e !== "none" && e !== "Infinity") return e;
	}
}, ib = (e, t, n) => {
	let r = (0, N.useRef)(null), i = (0, N.useRef)(!0), a = (0, N.useRef)(!1);
	return (0, N.useEffect)(() => {
		let e = r.current;
		if (!(e && t)) return;
		let n = () => {
			let t = e.scrollHeight - e.scrollTop - e.clientHeight < nb;
			i.current = t;
		};
		return e.addEventListener("scroll", n, { passive: !0 }), () => e.removeEventListener("scroll", n);
	}, [t]), (0, N.useEffect)(() => {
		e && !a.current && (i.current = !0), e || (i.current = !0), a.current = e;
	}, [e]), (0, N.useEffect)(() => {
		let n = r.current;
		n && t && e && i.current && n.scrollTo({
			top: n.scrollHeight,
			behavior: "instant"
		});
	}, [
		e,
		t,
		n
	]), r;
}, ab = Zy("block"), ob = Zy("block", "before:content-[counter(line)]", "before:inline-block", "before:[counter-increment:line]", "before:w-6", "before:mr-4", "before:text-[13px]", "before:text-right", "before:text-muted-foreground/50", "before:font-mono", "before:select-none"), sb = (e) => {
	let t = {};
	for (let n of e.split(";")) {
		let e = n.indexOf(":");
		if (e > 0) {
			let r = n.slice(0, e).trim(), i = n.slice(e + 1).trim();
			r && i && (t[r] = i);
		}
	}
	return t;
}, cb = (0, N.memo)(({ children: e, result: t, language: n, className: r, maxHeight: i, startLine: a, lineNumbers: o = !0, ...s }) => {
	let c = Q(), { isAnimating: l } = (0, N.useContext)(WS), u = rb(i), d = ib(l, !!u, t), f = (0, N.useMemo)(() => c(ob), [c]), p = (0, N.useMemo)(() => c(ab), [c]), m = (0, N.useMemo)(() => {
		let e = {};
		return t.bg && (e["--sdm-bg"] = t.bg), t.fg && (e["--sdm-fg"] = t.fg), t.rootStyle && Object.assign(e, sb(t.rootStyle)), e;
	}, [
		t.bg,
		t.fg,
		t.rootStyle
	]);
	return (0, Y.jsx)("div", {
		className: c(r, u ? "overflow-y-auto" : null, "overflow-x-auto rounded-md border border-border bg-background p-4 text-sm"),
		"data-language": n,
		"data-streamdown": "code-block-body",
		ref: d,
		style: u ? { maxHeight: u } : void 0,
		...s,
		children: (0, Y.jsx)("pre", {
			className: c(r, "bg-[var(--sdm-bg,inherit)]", "dark:bg-[var(--shiki-dark-bg,var(--sdm-bg,inherit))]"),
			style: m,
			children: (0, Y.jsx)("code", {
				className: o ? c("[counter-increment:line_0] [counter-reset:line]") : void 0,
				style: o && a && a > 1 ? { counterReset: `line ${a - 1}` } : void 0,
				children: t.tokens.map((e, t) => (0, Y.jsx)("span", {
					className: o ? f : p,
					children: e.length === 0 || e.length === 1 && e[0].content === "" ? "\n" : e.map((e, t) => {
						let n = {}, r = !!e.bgColor;
						if (e.color && (n["--sdm-c"] = e.color), e.bgColor && (n["--sdm-tbg"] = e.bgColor), e.htmlStyle) for (let [t, i] of Object.entries(e.htmlStyle)) t === "color" ? n["--sdm-c"] = i : t === "background-color" ? (n["--sdm-tbg"] = i, r = !0) : n[t] = i;
						return (0, Y.jsx)("span", {
							className: c("text-[var(--sdm-c,inherit)]", "dark:text-[var(--shiki-dark,var(--sdm-c,inherit))]", r && "bg-[var(--sdm-tbg)]", r && "dark:bg-[var(--shiki-dark-bg,var(--sdm-tbg))]"),
							style: n,
							...e.htmlAttrs,
							children: e.content
						}, t);
					})
				}, t))
			})
		})
	});
}), lb = ({ className: e, language: t, style: n, isIncomplete: r, ...i }) => {
	let a = Q();
	return (0, Y.jsx)("div", {
		className: a("my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", e),
		"data-incomplete": r || void 0,
		"data-language": t,
		"data-streamdown": "code-block",
		style: {
			contentVisibility: "auto",
			containIntrinsicSize: "auto 200px",
			...n
		},
		...i
	});
}, ub = (0, N.createContext)({ code: "" }), db = () => (0, N.useContext)(ub), fb = ({ language: e }) => {
	let t = Q();
	return (0, Y.jsx)("div", {
		className: t("flex h-8 items-center text-muted-foreground text-xs"),
		"data-language": e,
		"data-streamdown": "code-block-header",
		children: (0, Y.jsx)("span", {
			className: t("ml-1 font-mono lowercase"),
			children: e
		})
	});
}, pb = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] === "\n";) t--;
	return e.slice(0, t);
}, mb = (0, N.lazy)(() => import("./highlighted-body-KPVGNVTW-zwjq21tf.js").then((e) => ({ default: e.HighlightedCodeBlockBody }))), hb = ({ code: e, language: t, className: n, children: r, isIncomplete: i = !1, startLine: a, lineNumbers: o, ...s }) => {
	let c = Q(), { codeBlockMaxHeight: l } = (0, N.useContext)(WS), u = (0, N.useMemo)(() => pb(e), [e]), d = (0, N.useMemo)(() => ({
		bg: "transparent",
		fg: "inherit",
		tokens: u.split("\n").map((e) => [{
			content: e,
			color: "inherit",
			bgColor: "transparent",
			htmlStyle: {},
			offset: 0
		}])
	}), [u]);
	return (0, Y.jsx)(ub.Provider, {
		value: { code: e },
		children: (0, Y.jsxs)(lb, {
			dir: "ltr",
			isIncomplete: i,
			language: t,
			children: [
				(0, Y.jsx)(fb, { language: t }),
				r ? (0, Y.jsx)("div", {
					className: c("pointer-events-none sticky top-2 z-10 -mt-10 flex h-8 items-center justify-end"),
					children: (0, Y.jsx)("div", {
						className: c("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
						"data-streamdown": "code-block-actions",
						children: r
					})
				}) : null,
				(0, Y.jsx)(N.Suspense, {
					fallback: (0, Y.jsx)(cb, {
						className: n,
						language: t,
						lineNumbers: o,
						maxHeight: l,
						result: d,
						startLine: a,
						...s
					}),
					children: (0, Y.jsx)(mb, {
						className: n,
						code: u,
						language: t,
						lineNumbers: o,
						maxHeight: l,
						raw: d,
						startLine: a,
						...s
					})
				})
			]
		})
	});
}, gb = {
	CheckIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	CopyIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	DownloadIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	ExternalLinkIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	Loader2Icon: (e) => (0, Y.jsxs)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: [
			(0, Y.jsx)("path", {
				d: "M8 0V4",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M8 16V12",
				opacity: "0.5",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M3.29773 1.52783L5.64887 4.7639",
				opacity: "0.9",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M12.7023 1.52783L10.3511 4.7639",
				opacity: "0.1",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M12.7023 14.472L10.3511 11.236",
				opacity: "0.4",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M3.29773 14.472L5.64887 11.236",
				opacity: "0.6",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M15.6085 5.52783L11.8043 6.7639",
				opacity: "0.2",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M0.391602 10.472L4.19583 9.23598",
				opacity: "0.7",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M15.6085 10.4722L11.8043 9.2361",
				opacity: "0.3",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			(0, Y.jsx)("path", {
				d: "M0.391602 5.52783L4.19583 6.7639",
				opacity: "0.8",
				stroke: "currentColor",
				strokeWidth: "1.5"
			})
		]
	}),
	Maximize2Icon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	RotateCcwIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	XIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	ZoomInIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H5.875V4.75V4.125H7.125V4.75V5.875H8.25H8.875V7.125H8.25H7.125V8.25V8.875H5.875V8.25V7.125H4.75H4.125V5.875Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	}),
	ZoomOutIcon: (e) => (0, Y.jsx)("svg", {
		"aria-hidden": "true",
		color: "currentColor",
		height: 16,
		strokeLinejoin: "round",
		viewBox: "0 0 16 16",
		width: 16,
		...e,
		children: (0, Y.jsx)("path", {
			clipRule: "evenodd",
			d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H8.25H8.875V7.125H8.25H4.75H4.125V5.875Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})
	})
}, _b = (0, N.createContext)(gb), vb = (e, t) => {
	if (e === t) return !0;
	if (!(e && t)) return e === t;
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length && n.every((n) => e[n] === t[n]);
}, yb = ({ icons: e, children: t }) => {
	let n = (0, N.useRef)(e), r = (0, N.useRef)(e ? {
		...gb,
		...e
	} : gb);
	vb(n.current, e) || (n.current = e, r.current = e ? {
		...gb,
		...e
	} : gb);
	let i = r.current;
	return (0, Y.jsx)(_b.Provider, {
		value: i,
		children: t
	});
}, bb = () => (0, N.useContext)(_b), xb = {
	copyCode: "Copy Code",
	downloadFile: "Download file",
	downloadDiagram: "Download diagram",
	downloadDiagramAsSvg: "Download diagram as SVG",
	downloadDiagramAsPng: "Download diagram as PNG",
	downloadDiagramAsMmd: "Download diagram as MMD",
	viewFullscreen: "View fullscreen",
	exitFullscreen: "Exit fullscreen",
	mermaidFormatSvg: "SVG",
	mermaidFormatPng: "PNG",
	mermaidFormatMmd: "MMD",
	zoomIn: "Zoom in",
	zoomOut: "Zoom out",
	resetView: "Reset zoom and pan",
	copyTable: "Copy table",
	copyTableAsMarkdown: "Copy table as Markdown",
	copyTableAsCsv: "Copy table as CSV",
	copyTableAsTsv: "Copy table as TSV",
	downloadTable: "Download table",
	downloadTableAsCsv: "Download table as CSV",
	downloadTableAsMarkdown: "Download table as Markdown",
	tableFormatMarkdown: "Markdown",
	tableFormatCsv: "CSV",
	tableFormatTsv: "TSV",
	imageNotAvailable: "Image not available",
	downloadImage: "Download image",
	openExternalLink: "Open external link?",
	externalLinkWarning: "You're about to visit an external website.",
	close: "Close",
	copyLink: "Copy link",
	copied: "Copied",
	openLink: "Open link"
}, Sb = (0, N.createContext)(xb), Cb = () => (0, N.useContext)(Sb), wb = ({ onCopy: e, onError: t, timeout: n = 2e3, children: r, className: i, code: a, ...o }) => {
	let s = Q(), [c, l] = (0, N.useState)(!1), u = (0, N.useRef)(0), { code: d } = db(), { isAnimating: f } = (0, N.useContext)(WS), p = Cb(), m = a ?? d, h = async () => {
		var r;
		if (typeof window > "u" || !((r = navigator == null ? void 0 : navigator.clipboard) != null && r.writeText)) {
			t?.(/* @__PURE__ */ Error("Clipboard API not available"));
			return;
		}
		try {
			c || (await navigator.clipboard.writeText(m), l(!0), e?.(), u.current = window.setTimeout(() => l(!1), n));
		} catch (e) {
			t?.(e);
		}
	};
	(0, N.useEffect)(() => () => {
		window.clearTimeout(u.current);
	}, []);
	let g = bb(), _ = c ? g.CheckIcon : g.CopyIcon;
	return (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)("button", {
		"aria-label": p.copyCode,
		className: s("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", i),
		"data-streamdown": "code-block-copy-button",
		disabled: f,
		onClick: h,
		title: p.copyCode,
		type: "button",
		...o,
		children: r ?? (0, Y.jsx)(_, {
			"aria-hidden": "true",
			size: 14
		})
	}), c && (0, Y.jsx)("output", {
		"aria-live": "polite",
		className: "sr-only",
		children: p.copied
	})] });
}, Tb = (e, t, n) => {
	if (typeof e == "boolean") return n;
	let r = e[t];
	if (typeof r != "object") return n;
	let i = r.download;
	return typeof i == "object" && i.filename || n;
}, Eb = {
	"1c": "1c",
	"1c-query": "1cq",
	abap: "abap",
	"actionscript-3": "as",
	ada: "ada",
	adoc: "adoc",
	"angular-html": "html",
	"angular-ts": "ts",
	apache: "conf",
	apex: "cls",
	apl: "apl",
	applescript: "applescript",
	ara: "ara",
	asciidoc: "adoc",
	asm: "asm",
	astro: "astro",
	awk: "awk",
	ballerina: "bal",
	bash: "sh",
	bat: "bat",
	batch: "bat",
	be: "be",
	beancount: "beancount",
	berry: "berry",
	bibtex: "bib",
	bicep: "bicep",
	blade: "blade.php",
	bsl: "bsl",
	c: "c",
	"c#": "cs",
	"c++": "cpp",
	cadence: "cdc",
	cairo: "cairo",
	cdc: "cdc",
	clarity: "clar",
	clj: "clj",
	clojure: "clj",
	"closure-templates": "soy",
	cmake: "cmake",
	cmd: "cmd",
	cobol: "cob",
	codeowners: "CODEOWNERS",
	codeql: "ql",
	coffee: "coffee",
	coffeescript: "coffee",
	"common-lisp": "lisp",
	console: "sh",
	coq: "v",
	cpp: "cpp",
	cql: "cql",
	crystal: "cr",
	cs: "cs",
	csharp: "cs",
	css: "css",
	csv: "csv",
	cue: "cue",
	cypher: "cql",
	d: "d",
	dart: "dart",
	dax: "dax",
	desktop: "desktop",
	diff: "diff",
	docker: "dockerfile",
	dockerfile: "dockerfile",
	dotenv: "env",
	"dream-maker": "dm",
	edge: "edge",
	elisp: "el",
	elixir: "ex",
	elm: "elm",
	"emacs-lisp": "el",
	erb: "erb",
	erl: "erl",
	erlang: "erl",
	f: "f",
	"f#": "fs",
	f03: "f03",
	f08: "f08",
	f18: "f18",
	f77: "f77",
	f90: "f90",
	f95: "f95",
	fennel: "fnl",
	fish: "fish",
	fluent: "ftl",
	for: "for",
	"fortran-fixed-form": "f",
	"fortran-free-form": "f90",
	fs: "fs",
	fsharp: "fs",
	fsl: "fsl",
	ftl: "ftl",
	gdresource: "tres",
	gdscript: "gd",
	gdshader: "gdshader",
	genie: "gs",
	gherkin: "feature",
	"git-commit": "gitcommit",
	"git-rebase": "gitrebase",
	gjs: "js",
	gleam: "gleam",
	"glimmer-js": "js",
	"glimmer-ts": "ts",
	glsl: "glsl",
	gnuplot: "plt",
	go: "go",
	gql: "gql",
	graphql: "graphql",
	groovy: "groovy",
	gts: "gts",
	hack: "hack",
	haml: "haml",
	handlebars: "hbs",
	haskell: "hs",
	haxe: "hx",
	hbs: "hbs",
	hcl: "hcl",
	hjson: "hjson",
	hlsl: "hlsl",
	hs: "hs",
	html: "html",
	"html-derivative": "html",
	http: "http",
	hxml: "hxml",
	hy: "hy",
	imba: "imba",
	ini: "ini",
	jade: "jade",
	java: "java",
	javascript: "js",
	jinja: "jinja",
	jison: "jison",
	jl: "jl",
	js: "js",
	json: "json",
	json5: "json5",
	jsonc: "jsonc",
	jsonl: "jsonl",
	jsonnet: "jsonnet",
	jssm: "jssm",
	jsx: "jsx",
	julia: "jl",
	kotlin: "kt",
	kql: "kql",
	kt: "kt",
	kts: "kts",
	kusto: "kql",
	latex: "tex",
	lean: "lean",
	lean4: "lean",
	less: "less",
	liquid: "liquid",
	lisp: "lisp",
	lit: "lit",
	llvm: "ll",
	log: "log",
	logo: "logo",
	lua: "lua",
	luau: "luau",
	make: "mak",
	makefile: "mak",
	markdown: "md",
	marko: "marko",
	matlab: "m",
	md: "md",
	mdc: "mdc",
	mdx: "mdx",
	mediawiki: "wiki",
	mermaid: "mmd",
	mips: "s",
	mipsasm: "s",
	mmd: "mmd",
	mojo: "mojo",
	move: "move",
	nar: "nar",
	narrat: "narrat",
	nextflow: "nf",
	nf: "nf",
	nginx: "conf",
	nim: "nim",
	nix: "nix",
	nu: "nu",
	nushell: "nu",
	objc: "m",
	"objective-c": "m",
	"objective-cpp": "mm",
	ocaml: "ml",
	pascal: "pas",
	perl: "pl",
	perl6: "p6",
	php: "php",
	plsql: "pls",
	po: "po",
	polar: "polar",
	postcss: "pcss",
	pot: "pot",
	potx: "potx",
	powerquery: "pq",
	powershell: "ps1",
	prisma: "prisma",
	prolog: "pl",
	properties: "properties",
	proto: "proto",
	protobuf: "proto",
	ps: "ps",
	ps1: "ps1",
	pug: "pug",
	puppet: "pp",
	purescript: "purs",
	py: "py",
	python: "py",
	ql: "ql",
	qml: "qml",
	qmldir: "qmldir",
	qss: "qss",
	r: "r",
	racket: "rkt",
	raku: "raku",
	razor: "cshtml",
	rb: "rb",
	reg: "reg",
	regex: "regex",
	regexp: "regexp",
	rel: "rel",
	riscv: "s",
	rs: "rs",
	rst: "rst",
	ruby: "rb",
	rust: "rs",
	sas: "sas",
	sass: "sass",
	scala: "scala",
	scheme: "scm",
	scss: "scss",
	sdbl: "sdbl",
	sh: "sh",
	shader: "shader",
	shaderlab: "shader",
	shell: "sh",
	shellscript: "sh",
	shellsession: "sh",
	smalltalk: "st",
	solidity: "sol",
	soy: "soy",
	sparql: "rq",
	spl: "spl",
	splunk: "spl",
	sql: "sql",
	"ssh-config": "config",
	stata: "do",
	styl: "styl",
	stylus: "styl",
	svelte: "svelte",
	swift: "swift",
	"system-verilog": "sv",
	systemd: "service",
	talon: "talon",
	talonscript: "talon",
	tasl: "tasl",
	tcl: "tcl",
	templ: "templ",
	terraform: "tf",
	tex: "tex",
	tf: "tf",
	tfvars: "tfvars",
	toml: "toml",
	ts: "ts",
	"ts-tags": "ts",
	tsp: "tsp",
	tsv: "tsv",
	tsx: "tsx",
	turtle: "ttl",
	twig: "twig",
	typ: "typ",
	typescript: "ts",
	typespec: "tsp",
	typst: "typ",
	v: "v",
	vala: "vala",
	vb: "vb",
	verilog: "v",
	vhdl: "vhdl",
	vim: "vim",
	viml: "vim",
	vimscript: "vim",
	vue: "vue",
	"vue-html": "html",
	"vue-vine": "vine",
	vy: "vy",
	vyper: "vy",
	wasm: "wasm",
	wenyan: "wy",
	wgsl: "wgsl",
	wiki: "wiki",
	wikitext: "wiki",
	wit: "wit",
	wl: "wl",
	wolfram: "wl",
	xml: "xml",
	xsl: "xsl",
	yaml: "yaml",
	yml: "yml",
	zenscript: "zs",
	zig: "zig",
	zsh: "zsh",
	文言: "wy"
}, Db = ({ onDownload: e, onError: t, language: n, children: r, className: i, code: a, ...o }) => {
	let s = Q(), { code: c } = db(), { isAnimating: l, controls: u } = (0, N.useContext)(WS), d = Cb(), f = bb(), p = a ?? c, m = n && n in Eb ? Eb[n] : "txt", h = `${Tb(u, "code", "file")}.${m}`;
	return (0, Y.jsx)("button", {
		"aria-label": d.downloadFile,
		className: s("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", i),
		"data-streamdown": "code-block-download-button",
		disabled: l,
		onClick: () => {
			try {
				eb(h, p, "text/plain"), e?.();
			} catch (e) {
				t?.(e);
			}
		},
		title: d.downloadFile,
		type: "button",
		...o,
		children: r ?? (0, Y.jsx)(f.DownloadIcon, { size: 14 })
	});
}, Ob = () => {
	let { Loader2Icon: e } = bb(), t = Q();
	return (0, Y.jsxs)("div", {
		className: t("w-full divide-y divide-border overflow-hidden rounded-xl border border-border"),
		children: [(0, Y.jsx)("div", { className: t("h-[46px] w-full bg-muted/80") }), (0, Y.jsx)("div", {
			className: t("flex w-full items-center justify-center p-4"),
			children: (0, Y.jsx)(e, { className: t("size-4 animate-spin") })
		})]
	});
}, kb = /\.[^/.]+$/, Ab = ({ node: e, className: t, src: n, alt: r, onLoad: i, onError: a, showControls: o = !0, showDownloadControl: s = !0, ...c }) => {
	let { DownloadIcon: l } = bb(), u = Q(), d = (0, N.useRef)(null), [f, p] = (0, N.useState)(!1), [m, h] = (0, N.useState)(!1), g = Cb(), _ = c.width != null || c.height != null, v = (f || _) && !m && o && s, y = m && !_;
	(0, N.useEffect)(() => {
		let e = d.current;
		if (e != null && e.complete) {
			let t = e.naturalWidth > 0;
			p(t), h(!t);
		}
	}, []);
	let b = (0, N.useCallback)((e) => {
		p(!0), h(!1), i?.(e);
	}, [i]), x = (0, N.useCallback)((e) => {
		p(!1), h(!0), a?.(e);
	}, [a]), S = async () => {
		if (n) try {
			let e = await (await fetch(n)).blob(), t = new URL(n, window.location.origin).pathname.split("/").pop() || "", i = t.split(".").pop(), a = t.includes(".") && i !== void 0 && i.length <= 4, o = "";
			if (a) o = t;
			else {
				let n = e.type, i = "png";
				n.includes("jpeg") || n.includes("jpg") ? i = "jpg" : n.includes("png") ? i = "png" : n.includes("svg") ? i = "svg" : n.includes("gif") ? i = "gif" : n.includes("webp") && (i = "webp"), o = `${(r || t || "image").replace(kb, "")}.${i}`;
			}
			eb(o, e, e.type);
		} catch {
			window.open(n, "_blank");
		}
	};
	return n ? (0, Y.jsxs)("div", {
		className: u("group relative my-4 inline-block"),
		"data-streamdown": "image-wrapper",
		children: [
			(0, Y.jsx)("img", {
				alt: r,
				className: u("max-w-full rounded-lg", y && "hidden", t),
				"data-streamdown": "image",
				onError: x,
				onLoad: b,
				ref: d,
				src: n,
				...c
			}),
			y && (0, Y.jsx)("span", {
				className: u("text-muted-foreground text-xs italic"),
				"data-streamdown": "image-fallback",
				children: g.imageNotAvailable
			}),
			o && (0, Y.jsx)("div", {
				className: u("pointer-events-none absolute inset-0 hidden rounded-lg bg-black/10 group-hover:block"),
				"data-streamdown": "image-overlay"
			}),
			v && (0, Y.jsx)("button", {
				className: u("absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-background/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background", "opacity-0 group-hover:opacity-100"),
				onClick: S,
				title: g.downloadImage,
				type: "button",
				children: (0, Y.jsx)(l, { size: 14 })
			})
		]
	}) : null;
}, jb = 0, Mb = () => {
	jb += 1, jb === 1 && (document.body.style.overflow = "hidden");
}, Nb = () => {
	jb = Math.max(0, jb - 1), jb === 0 && (document.body.style.overflow = "");
}, Pb = ({ url: e, isOpen: t, onClose: n, onConfirm: r }) => {
	let { CheckIcon: i, CopyIcon: a, ExternalLinkIcon: o, XIcon: s } = bb(), c = Q(), [l, u] = (0, N.useState)(!1), d = Cb(), f = (0, N.useCallback)(async () => {
		try {
			await navigator.clipboard.writeText(e), u(!0), setTimeout(() => u(!1), 2e3);
		} catch {}
	}, [e]), p = (0, N.useCallback)(() => {
		r(), n();
	}, [r, n]);
	if ((0, N.useEffect)(() => {
		if (t) {
			Mb();
			let e = (e) => {
				e.key === "Escape" && n();
			};
			return document.addEventListener("keydown", e), () => {
				document.removeEventListener("keydown", e), Nb();
			};
		}
	}, [t, n]), !t || typeof document > "u") return null;
	let m = (0, Y.jsx)("div", {
		className: c("fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm"),
		"data-streamdown": "link-safety-modal",
		onClick: n,
		onKeyDown: (e) => {
			e.key === "Escape" && n();
		},
		role: "button",
		tabIndex: 0,
		children: (0, Y.jsxs)("div", {
			className: c("relative mx-4 flex w-full max-w-md flex-col gap-4 rounded-xl border bg-background p-6 shadow-lg"),
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			role: "presentation",
			children: [
				(0, Y.jsx)("button", {
					className: c("absolute top-4 right-4 rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
					onClick: n,
					title: d.close,
					type: "button",
					children: (0, Y.jsx)(s, { size: 16 })
				}),
				(0, Y.jsxs)("div", {
					className: c("flex flex-col gap-2"),
					children: [(0, Y.jsxs)("div", {
						className: c("flex items-center gap-2 font-semibold text-lg"),
						children: [(0, Y.jsx)(o, { size: 20 }), (0, Y.jsx)("span", { children: d.openExternalLink })]
					}), (0, Y.jsx)("p", {
						className: c("text-muted-foreground text-sm"),
						children: d.externalLinkWarning
					})]
				}),
				(0, Y.jsx)("div", {
					className: c("break-all rounded-md bg-muted p-3 font-mono text-sm", e.length > 100 && "max-h-32 overflow-y-auto"),
					children: e
				}),
				(0, Y.jsxs)("div", {
					className: c("flex gap-2"),
					children: [(0, Y.jsx)("button", {
						className: c("flex flex-1 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 font-medium text-sm transition-all hover:bg-muted"),
						onClick: f,
						type: "button",
						children: l ? (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(i, { size: 14 }), (0, Y.jsx)("span", { children: d.copied })] }) : (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)(a, { size: 14 }), (0, Y.jsx)("span", { children: d.copyLink })] })
					}), (0, Y.jsxs)("button", {
						className: c("flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-all hover:bg-primary/90"),
						onClick: p,
						type: "button",
						children: [(0, Y.jsx)(o, { size: 14 }), (0, Y.jsx)("span", { children: d.openLink })]
					})]
				})
			]
		})
	});
	return (0, K_.createPortal)(m, document.body);
}, Fb = (0, N.createContext)(null), Ib = () => (0, N.useContext)(Fb), Lb = () => Ib()?.code ?? null, Rb = () => Ib()?.mermaid ?? null, zb = (e) => {
	var t;
	let n = Ib();
	return n != null && n.renderers && e && (t = n.renderers.find((t) => Array.isArray(t.language) ? t.language.includes(e) : t.language === e)) != null ? t : null;
}, Bb = (e) => {
	if (typeof DOMParser > "u" || typeof XMLSerializer > "u") return e;
	let t = new DOMParser().parseFromString(e, "text/html").querySelector("svg");
	return t ? new XMLSerializer().serializeToString(t) : e;
}, Vb = (e, t) => new Promise((t, n) => {
	let r = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e))), i = new Image();
	i.crossOrigin = "anonymous", i.onload = () => {
		let e = document.createElement("canvas"), r = i.width * 5, a = i.height * 5;
		e.width = r, e.height = a;
		let o = e.getContext("2d");
		if (!o) {
			n(/* @__PURE__ */ Error("Failed to create 2D canvas context for PNG export"));
			return;
		}
		o.drawImage(i, 0, 0, r, a), e.toBlob((e) => {
			if (!e) {
				n(/* @__PURE__ */ Error("Failed to create PNG blob"));
				return;
			}
			t(e);
		}, "image/png");
	}, i.onerror = () => n(/* @__PURE__ */ Error("Failed to load SVG image")), i.src = r;
}), Hb = ({ chart: e, children: t, className: n, onDownload: r, config: i, onError: a }) => {
	let o = Q(), [s, c] = (0, N.useState)(!1), l = (0, N.useRef)(null), { isAnimating: u, controls: d } = (0, N.useContext)(WS), f = bb(), p = Rb(), m = Cb(), h = Tb(d, "mermaid", "diagram"), g = async (t) => {
		try {
			if (t === "mmd") {
				eb(`${h}.mmd`, e, "text/plain"), c(!1), r?.(t);
				return;
			}
			if (!p) {
				a?.(/* @__PURE__ */ Error("Mermaid plugin not available"));
				return;
			}
			let n = p.getMermaid(i), o = e.split("").reduce((e, t) => (e << 5) - e + t.charCodeAt(0) | 0, 0), s = `mermaid-${Math.abs(o)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: l } = await n.render(s, e);
			if (!l) {
				a?.(/* @__PURE__ */ Error("SVG not found. Please wait for the diagram to render."));
				return;
			}
			let u = Bb(l);
			if (t === "svg") {
				eb(`${h}.svg`, u, "image/svg+xml"), c(!1), r?.(t);
				return;
			}
			if (t === "png") {
				let e = await Vb(u);
				eb(`${h}.png`, e, "image/png"), r?.(t), c(!1);
				return;
			}
		} catch (e) {
			a?.(e);
		}
	};
	return (0, N.useEffect)(() => {
		let e = (e) => {
			let t = e.composedPath();
			l.current && !t.includes(l.current) && c(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []), (0, Y.jsxs)("div", {
		className: o("relative"),
		ref: l,
		children: [(0, Y.jsx)("button", {
			"aria-label": m.downloadDiagram,
			className: o("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", n),
			disabled: u,
			onClick: () => c(!s),
			title: m.downloadDiagram,
			type: "button",
			children: t ?? (0, Y.jsx)(f.DownloadIcon, {
				"aria-hidden": "true",
				size: 14
			})
		}), s ? (0, Y.jsxs)("div", {
			className: o("absolute top-full right-0 z-10 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [
				(0, Y.jsx)("button", {
					"aria-label": m.downloadDiagramAsSvg,
					className: o("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("svg"),
					title: m.downloadDiagramAsSvg,
					type: "button",
					children: m.mermaidFormatSvg
				}),
				(0, Y.jsx)("button", {
					"aria-label": m.downloadDiagramAsPng,
					className: o("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("png"),
					title: m.downloadDiagramAsPng,
					type: "button",
					children: m.mermaidFormatPng
				}),
				(0, Y.jsx)("button", {
					"aria-label": m.downloadDiagramAsMmd,
					className: o("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("mmd"),
					title: m.downloadDiagramAsMmd,
					type: "button",
					children: m.mermaidFormatMmd
				})
			]
		}) : null]
	});
}, Ub = ({ chart: e, config: t, onFullscreen: n, onExit: r, className: i, ...a }) => {
	let { Maximize2Icon: o, XIcon: s } = bb(), c = Q(), [l, u] = (0, N.useState)(!1), { isAnimating: d, controls: f } = (0, N.useContext)(WS), p = Cb(), m = (() => {
		if (typeof f == "boolean") return f;
		let e = f.mermaid;
		return e === !1 ? !1 : e === !0 || e === void 0 || e.panZoom !== !1;
	})(), h = (() => {
		if (typeof f == "boolean") return f;
		let e = f.mermaid;
		return e === !1 ? !1 : e === !0 || e === void 0 || e.download !== !1;
	})(), g = (() => {
		if (typeof f == "boolean") return f;
		let e = f.mermaid;
		return e === !1 ? !1 : e === !0 || e === void 0 || e.copy !== !1;
	})(), _ = () => {
		u(!l);
	};
	return (0, N.useEffect)(() => {
		if (l) {
			Mb();
			let e = (e) => {
				e.key === "Escape" && u(!1);
			};
			return document.addEventListener("keydown", e), () => {
				document.removeEventListener("keydown", e), Nb();
			};
		}
	}, [l]), (0, N.useEffect)(() => {
		l ? n?.() : r && r();
	}, [
		l,
		n,
		r
	]), (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)("button", {
		className: c("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", i),
		disabled: d,
		onClick: _,
		title: p.viewFullscreen,
		type: "button",
		...a,
		"aria-label": p.viewFullscreen,
		children: (0, Y.jsx)(o, {
			"aria-hidden": "true",
			size: 14
		})
	}), l ? (0, K_.createPortal)((0, Y.jsxs)("div", {
		"aria-label": p.viewFullscreen,
		"aria-modal": "true",
		className: c("fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"),
		"data-streamdown": "mermaid-fullscreen",
		onClick: _,
		onKeyDown: (e) => {
			e.key === "Escape" && _();
		},
		role: "dialog",
		children: [(0, Y.jsxs)("div", {
			className: c("absolute top-4 right-4 z-10 flex items-center gap-1"),
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			role: "presentation",
			children: [
				h ? (0, Y.jsx)(Hb, {
					chart: e,
					config: t
				}) : null,
				g ? (0, Y.jsx)(wb, { code: e }) : null,
				(0, Y.jsx)("button", {
					"aria-label": p.exitFullscreen,
					className: c("rounded-md p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
					onClick: _,
					title: p.exitFullscreen,
					type: "button",
					children: (0, Y.jsx)(s, {
						"aria-hidden": "true",
						size: 20
					})
				})
			]
		}), (0, Y.jsx)("div", {
			className: c("flex size-full items-center justify-center p-4"),
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			role: "presentation",
			children: (0, Y.jsx)(JS, {
				chart: e,
				className: c("size-full [&_svg]:h-auto [&_svg]:w-auto"),
				config: t,
				fullscreen: !0,
				showControls: m
			})
		})]
	}), document.body) : null] });
};
function Wb(e) {
	if (e.nodeType === Node.TEXT_NODE) return e.textContent ?? "";
	if (e.nodeType !== Node.ELEMENT_NODE) return "";
	let t = e;
	return t.tagName === "BR" ? "\n" : Array.from(t.childNodes).map(Wb).join("");
}
var Gb = (e) => {
	let t = [], n = [], r = e.querySelectorAll("thead th");
	for (let e of r) t.push(Wb(e).trim());
	let i = e.querySelectorAll("tbody tr");
	for (let e of i) {
		let t = [], r = e.querySelectorAll("td");
		for (let e of r) t.push(Wb(e).trim());
		n.push(t);
	}
	return {
		headers: t,
		rows: n
	};
}, Kb = (e) => {
	if (typeof e != "object") return ",";
	let t = e.table;
	return typeof t == "object" ? t.csvSeparator ?? "," : ",";
}, qb = (e, t = ",") => {
	let n;
	n = t === "auto" ? Intl.NumberFormat().format(1.1).includes(",") ? ";" : "," : t;
	let { headers: r, rows: i } = e, a = (e) => {
		let t = !1;
		for (let r of e) if (r === n || r === "\"" || r === "\n" || r === "\r") {
			t = !0;
			break;
		}
		return t ? `"${e.replace(/"/g, "\"\"")}"` : e;
	}, o = r.length > 0 ? i.length + 1 : i.length, s = Array(o), c = 0;
	r.length > 0 && (s[c] = r.map(a).join(n), c += 1);
	for (let e of i) s[c] = e.map(a).join(n), c += 1;
	return s.join("\n");
}, Jb = (e) => {
	let { headers: t, rows: n } = e, r = (e) => {
		let t = !1;
		for (let n of e) if (n === "	" || n === "\n" || n === "\r") {
			t = !0;
			break;
		}
		if (!t) return e;
		let n = [];
		for (let t of e) t === "	" ? n.push("\\t") : t === "\n" ? n.push("\\n") : t === "\r" ? n.push("\\r") : n.push(t);
		return n.join("");
	}, i = t.length > 0 ? n.length + 1 : n.length, a = Array(i), o = 0;
	t.length > 0 && (a[o] = t.map(r).join("	"), o += 1);
	for (let e of n) a[o] = e.map(r).join("	"), o += 1;
	return a.join("\n");
}, Yb = (e) => {
	let t = !1;
	for (let n of e) if (n === "\\" || n === "|" || n === "\n") {
		t = !0;
		break;
	}
	if (!t) return e;
	let n = [];
	for (let t of e) t === "\\" ? n.push("\\\\") : t === "|" ? n.push("\\|") : t === "\n" ? n.push("<br>") : n.push(t);
	return n.join("");
}, Xb = (e) => {
	let { headers: t, rows: n } = e;
	if (t.length === 0) return "";
	let r = Array(n.length + 2), i = 0, a = t.map((e) => Yb(e));
	r[i] = `| ${a.join(" | ")} |`, i += 1;
	let o = Array(t.length);
	for (let e = 0; e < t.length; e += 1) o[e] = "---";
	r[i] = `| ${o.join(" | ")} |`, i += 1;
	for (let e of n) if (e.length < t.length) {
		let n = Array(t.length);
		for (let r = 0; r < t.length; r += 1) n[r] = r < e.length ? Yb(e[r]) : "";
		r[i] = `| ${n.join(" | ")} |`, i += 1;
	} else {
		let t = e.map((e) => Yb(e));
		r[i] = `| ${t.join(" | ")} |`, i += 1;
	}
	return r.join("\n");
}, Zb = ({ children: e, className: t, onCopy: n, onError: r, timeout: i = 2e3 }) => {
	let a = Q(), [o, s] = (0, N.useState)(!1), [c, l] = (0, N.useState)(!1), u = (0, N.useRef)(null), d = (0, N.useRef)(0), { isAnimating: f, controls: p } = (0, N.useContext)(WS), m = Cb(), h = Kb(p), g = async (e) => {
		var t;
		if (typeof window > "u" || !((t = navigator == null ? void 0 : navigator.clipboard) != null && t.write)) {
			r?.(/* @__PURE__ */ Error("Clipboard API not available"));
			return;
		}
		try {
			let t = (u.current?.closest("[data-streamdown=\"table-wrapper\"]"))?.querySelector("table");
			if (!t) {
				r?.(/* @__PURE__ */ Error("Table not found"));
				return;
			}
			let a = Gb(t), o = "";
			o = e === "csv" ? qb(a, h) : e === "tsv" ? Jb(a) : Xb(a);
			let c = new ClipboardItem({
				"text/plain": new Blob([o], { type: "text/plain" }),
				"text/html": new Blob([t.outerHTML], { type: "text/html" })
			});
			await navigator.clipboard.write([c]), l(!0), s(!1), n?.(e), d.current = window.setTimeout(() => l(!1), i);
		} catch (e) {
			r?.(e);
		}
	};
	(0, N.useEffect)(() => {
		let e = (e) => {
			let t = e.composedPath();
			u.current && !t.includes(u.current) && s(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e), window.clearTimeout(d.current);
		};
	}, []);
	let _ = bb(), v = c ? _.CheckIcon : _.CopyIcon;
	return (0, Y.jsxs)("div", {
		className: a("relative"),
		ref: u,
		children: [(0, Y.jsx)("button", {
			className: a("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
			disabled: f,
			onClick: () => s(!o),
			title: m.copyTable,
			type: "button",
			children: e ?? (0, Y.jsx)(v, {
				height: 14,
				width: 14
			})
		}), o ? (0, Y.jsxs)("div", {
			className: a("absolute top-full right-0 z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [
				(0, Y.jsx)("button", {
					className: a("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("md"),
					title: m.copyTableAsMarkdown,
					type: "button",
					children: m.tableFormatMarkdown
				}),
				(0, Y.jsx)("button", {
					className: a("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("csv"),
					title: m.copyTableAsCsv,
					type: "button",
					children: m.tableFormatCsv
				}),
				(0, Y.jsx)("button", {
					className: a("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
					onClick: () => g("tsv"),
					title: m.copyTableAsTsv,
					type: "button",
					children: m.tableFormatTsv
				})
			]
		}) : null]
	});
}, Qb = ({ children: e, className: t, onDownload: n, onError: r }) => {
	let i = Q(), [a, o] = (0, N.useState)(!1), s = (0, N.useRef)(null), { isAnimating: c, controls: l } = (0, N.useContext)(WS), u = Cb(), d = bb(), f = Kb(l), p = (e) => {
		try {
			let t = (s.current?.closest("[data-streamdown=\"table-wrapper\"]"))?.querySelector("table");
			if (!t) {
				r?.(/* @__PURE__ */ Error("Table not found"));
				return;
			}
			let i = Gb(t), a = e === "csv" ? qb(i, f) : Xb(i), c = e === "csv" ? "csv" : "md";
			eb(`${Tb(l, "table", "table")}.${c}`, a, e === "csv" ? "text/csv" : "text/markdown"), o(!1), n?.(e);
		} catch (e) {
			r?.(e);
		}
	};
	return (0, N.useEffect)(() => {
		let e = (e) => {
			let t = e.composedPath();
			s.current && !t.includes(s.current) && o(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []), (0, Y.jsxs)("div", {
		className: i("relative"),
		ref: s,
		children: [(0, Y.jsx)("button", {
			className: i("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
			disabled: c,
			onClick: () => o(!a),
			title: u.downloadTable,
			type: "button",
			children: e ?? (0, Y.jsx)(d.DownloadIcon, { size: 14 })
		}), a ? (0, Y.jsxs)("div", {
			className: i("absolute top-full right-0 z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
			children: [(0, Y.jsx)("button", {
				className: i("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
				onClick: () => p("csv"),
				title: u.downloadTableAsCsv,
				type: "button",
				children: u.tableFormatCsv
			}), (0, Y.jsx)("button", {
				className: i("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
				onClick: () => p("markdown"),
				title: u.downloadTableAsMarkdown,
				type: "button",
				children: u.tableFormatMarkdown
			})]
		}) : null]
	});
}, $b = ({ children: e, className: t, showCopy: n = !0, showDownload: r = !0 }) => {
	let { Maximize2Icon: i, XIcon: a } = bb(), o = Q(), [s, c] = (0, N.useState)(!1), { isAnimating: l } = (0, N.useContext)(WS), u = Cb(), d = () => {
		c(!0);
	}, f = () => {
		c(!1);
	};
	return (0, N.useEffect)(() => {
		if (s) {
			Mb();
			let e = (e) => {
				e.key === "Escape" && c(!1);
			};
			return document.addEventListener("keydown", e), () => {
				document.removeEventListener("keydown", e), Nb();
			};
		}
	}, [s]), (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)("button", {
		className: o("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
		disabled: l,
		onClick: d,
		title: u.viewFullscreen,
		type: "button",
		children: (0, Y.jsx)(i, { size: 14 })
	}), s ? (0, K_.createPortal)((0, Y.jsx)("div", {
		"aria-label": u.viewFullscreen,
		"aria-modal": "true",
		className: o("fixed inset-0 z-50 flex flex-col bg-background"),
		"data-streamdown": "table-fullscreen",
		onClick: f,
		onKeyDown: (e) => {
			e.key === "Escape" && f();
		},
		role: "dialog",
		children: (0, Y.jsxs)("div", {
			className: o("flex h-full flex-col"),
			"data-streamdown": "table-wrapper",
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => e.stopPropagation(),
			role: "presentation",
			children: [(0, Y.jsxs)("div", {
				className: o("flex items-center justify-end gap-1 p-4"),
				children: [
					n ? (0, Y.jsx)(Zb, {}) : null,
					r ? (0, Y.jsx)(Qb, {}) : null,
					(0, Y.jsx)("button", {
						className: o("rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
						onClick: f,
						title: u.exitFullscreen,
						type: "button",
						children: (0, Y.jsx)(a, { size: 20 })
					})
				]
			}), (0, Y.jsx)("div", {
				className: o("flex-1 overflow-auto p-4 pt-0 [&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10"),
				children: (0, Y.jsx)("table", {
					className: o("w-full border-collapse border border-border"),
					"data-streamdown": "table",
					children: e
				})
			})]
		})
	}), document.body) : null] });
}, ex = ({ children: e, className: t, maxHeight: n, showControls: r, showCopy: i = !0, showDownload: a = !0, showFullscreen: o = !0, ...s }) => {
	let c = Q(), { isAnimating: l } = (0, N.useContext)(WS), u = rb(n), d = ib(l, !!u, e), f = r && i, p = r && a, m = r && o, h = f || p || m;
	return (0, Y.jsxs)("div", {
		className: c("my-4 flex flex-col gap-2 rounded-lg border border-border bg-sidebar p-2"),
		"data-streamdown": "table-wrapper",
		children: [h ? (0, Y.jsxs)("div", {
			className: c("flex items-center justify-end gap-1"),
			children: [
				f ? (0, Y.jsx)(Zb, {}) : null,
				p ? (0, Y.jsx)(Qb, {}) : null,
				m ? (0, Y.jsx)($b, {
					showCopy: f,
					showDownload: p,
					children: e
				}) : null
			]
		}) : null, (0, Y.jsx)("div", {
			className: c("border-collapse overflow-x-auto overflow-y-auto rounded-md border border-border bg-background"),
			ref: d,
			style: u ? { maxHeight: u } : void 0,
			children: (0, Y.jsx)("table", {
				className: c("w-full divide-y divide-border", t),
				"data-streamdown": "table",
				...s,
				children: e
			})
		})]
	});
}, tx = /startLine=(\d+)/, nx = /\bnoLineNumbers\b/, rx = (0, N.lazy)(() => import("./mermaid-HWGCJPDP-ByCsZnYF.js").then((e) => ({ default: e.Mermaid }))), ix = /language-([^\s]+)/, ax = "node";
function $(e, t) {
	let n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !1;
	let r = e, i = t;
	for (let e of n) if (e !== ax && !Object.is(r[e], i[e])) return !1;
	return !0;
}
function ox(e, t) {
	return e?.properties?.metastring === t?.properties?.metastring;
}
var sx = (e, t) => typeof e == "boolean" ? e : e[t] !== !1, cx = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.table;
	return n === !1 ? !1 : n === !0 || n === void 0 || n[t] !== !1;
}, lx = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.code;
	return n === !1 ? !1 : n === !0 || n === void 0 || n[t] !== !1;
}, ux = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.mermaid;
	return n === !1 ? !1 : n === !0 || n === void 0 || n[t] !== !1;
}, dx = (e, t) => {
	if (typeof e == "boolean") return e;
	let n = e.image;
	return n === !1 ? !1 : n === !0 || n === void 0 || n[t] !== !1;
}, fx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("ol", {
		className: i("list-inside list-decimal whitespace-normal [li_&]:pl-6", t),
		"data-streamdown": "ordered-list",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
fx.displayName = "MarkdownOl";
var px = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("li", {
		className: i("py-1 [&>p]:inline", t),
		"data-streamdown": "list-item",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
px.displayName = "MarkdownLi";
var mx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("ul", {
		className: i("list-inside list-disc whitespace-normal [li_&]:pl-6", t),
		"data-streamdown": "unordered-list",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
mx.displayName = "MarkdownUl";
var hx = (0, N.memo)(({ className: e, node: t, ...n }) => {
	let r = Q();
	return (0, Y.jsx)("hr", {
		className: r("my-6 border-border", e),
		"data-streamdown": "horizontal-rule",
		...n
	});
}, (e, t) => $(e, t));
hx.displayName = "MarkdownHr";
var gx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("span", {
		className: i("font-semibold", t),
		"data-streamdown": "strong",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
gx.displayName = "MarkdownStrong";
var _x = (0, N.memo)(({ children: e, className: t, href: n, node: r, ...i }) => {
	let a = Q(), { linkSafety: o } = (0, N.useContext)(WS), [s, c] = (0, N.useState)(!1), l = n === "streamdown:incomplete-link", u = (0, N.useCallback)(async (e) => {
		if (!(!(o != null && o.enabled && n) || l)) {
			if (e.preventDefault(), o.onLinkCheck && await o.onLinkCheck(n)) {
				window.open(n, "_blank", "noreferrer");
				return;
			}
			c(!0);
		}
	}, [
		o,
		n,
		l
	]), d = (0, N.useCallback)(() => {
		n && window.open(n, "_blank", "noreferrer");
	}, [n]), f = (0, N.useCallback)(() => {
		c(!1);
	}, []), p = {
		url: n ?? "",
		isOpen: s,
		onClose: f,
		onConfirm: d
	};
	return o != null && o.enabled && n ? (0, Y.jsxs)(Y.Fragment, { children: [(0, Y.jsx)("button", {
		className: a("wrap-anywhere appearance-none text-left font-medium text-primary underline", t),
		"data-incomplete": l,
		"data-streamdown": "link",
		onClick: u,
		type: "button",
		children: e
	}), o.renderModal ? o.renderModal(p) : (0, Y.jsx)(Pb, { ...p })] }) : (0, Y.jsx)("a", {
		className: a("wrap-anywhere font-medium text-primary underline", t),
		"data-incomplete": l,
		"data-streamdown": "link",
		href: n,
		rel: "noreferrer",
		target: "_blank",
		...i,
		children: e
	});
}, (e, t) => $(e, t));
_x.displayName = "MarkdownA";
var vx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h1", {
		className: i("mt-6 mb-2 font-semibold text-3xl", t),
		"data-streamdown": "heading-1",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
vx.displayName = "MarkdownH1";
var yx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h2", {
		className: i("mt-6 mb-2 font-semibold text-2xl", t),
		"data-streamdown": "heading-2",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
yx.displayName = "MarkdownH2";
var bx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h3", {
		className: i("mt-6 mb-2 font-semibold text-xl", t),
		"data-streamdown": "heading-3",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
bx.displayName = "MarkdownH3";
var xx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h4", {
		className: i("mt-6 mb-2 font-semibold text-lg", t),
		"data-streamdown": "heading-4",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
xx.displayName = "MarkdownH4";
var Sx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h5", {
		className: i("mt-6 mb-2 font-semibold text-base", t),
		"data-streamdown": "heading-5",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Sx.displayName = "MarkdownH5";
var Cx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("h6", {
		className: i("mt-6 mb-2 font-semibold text-sm", t),
		"data-streamdown": "heading-6",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Cx.displayName = "MarkdownH6";
var wx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let { controls: i, tableMaxHeight: a } = (0, N.useContext)(WS), o = sx(i, "table"), s = cx(i, "copy"), c = cx(i, "download"), l = cx(i, "fullscreen");
	return (0, Y.jsx)(ex, {
		className: t,
		maxHeight: a,
		showControls: o,
		showCopy: s,
		showDownload: c,
		showFullscreen: l,
		...r,
		children: e
	});
}, (e, t) => $(e, t));
wx.displayName = "MarkdownTable";
var Tx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("thead", {
		className: i("bg-muted/80", t),
		"data-streamdown": "table-header",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Tx.displayName = "MarkdownThead";
var Ex = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("tbody", {
		className: i("divide-y divide-border", t),
		"data-streamdown": "table-body",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Ex.displayName = "MarkdownTbody";
var Dx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("tr", {
		className: i("border-border", t),
		"data-streamdown": "table-row",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Dx.displayName = "MarkdownTr";
var Ox = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("th", {
		className: i("whitespace-nowrap px-4 py-2 text-left font-semibold text-sm", t),
		"data-streamdown": "table-header-cell",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Ox.displayName = "MarkdownTh";
var kx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("td", {
		className: i("px-4 py-2 text-sm", t),
		"data-streamdown": "table-cell",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
kx.displayName = "MarkdownTd";
var Ax = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("blockquote", {
		className: i("my-4 border-muted-foreground/30 border-l-4 pl-4 text-muted-foreground italic", t),
		"data-streamdown": "blockquote",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Ax.displayName = "MarkdownBlockquote";
var jx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("sup", {
		className: i("text-sm", t),
		"data-streamdown": "superscript",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
jx.displayName = "MarkdownSup";
var Mx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	let i = Q();
	return (0, Y.jsx)("sub", {
		className: i("text-sm", t),
		"data-streamdown": "subscript",
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Mx.displayName = "MarkdownSub";
var Nx = (0, N.memo)(({ children: e, className: t, node: n, ...r }) => {
	if ("data-footnotes" in r) {
		let n = (e) => {
			if (!(0, N.isValidElement)(e)) return !1;
			let t = Array.isArray(e.props.children) ? e.props.children : [e.props.children], n = !1, r = !1;
			for (let e of t) if (e) {
				if (typeof e == "string") e.trim() !== "" && (n = !0);
				else if ((0, N.isValidElement)(e)) {
					if (e.props?.["data-footnote-backref"] !== void 0) r = !0;
					else {
						let t = Array.isArray(e.props.children) ? e.props.children : [e.props.children];
						for (let e of t) {
							if (typeof e == "string" && e.trim() !== "") {
								n = !0;
								break;
							}
							if ((0, N.isValidElement)(e) && e.props?.["data-footnote-backref"] === void 0) {
								n = !0;
								break;
							}
						}
					}
				}
			}
			return r && !n;
		}, i = Array.isArray(e) ? e.map((e) => {
			if (!(0, N.isValidElement)(e)) return e;
			if (e.type === fx) {
				let t = (Array.isArray(e.props.children) ? e.props.children : [e.props.children]).filter((e) => !n(e));
				return t.length === 0 ? null : {
					...e,
					props: {
						...e.props,
						children: t
					}
				};
			}
			return e;
		}) : e;
		return (Array.isArray(i) ? i.some((e) => e !== null) : i !== null) ? (0, Y.jsx)("section", {
			className: t,
			...r,
			children: i
		}) : null;
	}
	return (0, Y.jsx)("section", {
		className: t,
		...r,
		children: e
	});
}, (e, t) => $(e, t));
Nx.displayName = "MarkdownSection";
var Px = (0, N.memo)(({ node: e, className: t, children: n, ...r }) => {
	let i = Q(), a = !("data-block" in r), { mermaid: o, controls: s, lineNumbers: c } = (0, N.useContext)(WS), l = Rb(), u = Xy(), d = (t?.match(ix))?.at(1) ?? "", f = zb(d);
	if (a) return (0, Y.jsx)("code", {
		className: i("rounded bg-muted px-1.5 py-0.5 font-mono text-sm", t),
		"data-streamdown": "inline-code",
		...r,
		children: n
	});
	let p = e?.properties?.metastring, m = p?.match(tx), h = m ? Number.parseInt(m[1], 10) : void 0, g = h !== void 0 && h >= 1 ? h : void 0, _ = !(p && nx.test(p)) && c !== !1, v = "";
	if ((0, N.isValidElement)(n) && n.props && typeof n.props == "object" && "children" in n.props && typeof n.props.children == "string" ? v = n.props.children : typeof n == "string" && (v = n), f) {
		let e = f.component;
		return (0, Y.jsx)(N.Suspense, {
			fallback: (0, Y.jsx)(Ob, {}),
			children: (0, Y.jsx)(e, {
				code: v,
				isIncomplete: u,
				language: d,
				meta: p
			})
		});
	}
	if (d === "mermaid" && l) {
		let e = sx(s, "mermaid"), n = ux(s, "download"), r = ux(s, "copy"), a = ux(s, "fullscreen"), c = ux(s, "panZoom"), l = e && (n || r || a);
		return (0, Y.jsx)(N.Suspense, {
			fallback: (0, Y.jsx)(Ob, {}),
			children: (0, Y.jsxs)("div", {
				className: i("group relative my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", t),
				"data-streamdown": "mermaid-block",
				children: [
					(0, Y.jsx)("div", {
						className: i("flex h-8 items-center text-muted-foreground text-xs"),
						children: (0, Y.jsx)("span", {
							className: i("ml-1 font-mono lowercase"),
							children: "mermaid"
						})
					}),
					l ? (0, Y.jsx)("div", {
						className: i("pointer-events-none sticky top-2 z-10 -mt-10 flex h-8 items-center justify-end"),
						children: (0, Y.jsxs)("div", {
							className: i("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
							"data-streamdown": "mermaid-block-actions",
							children: [
								n ? (0, Y.jsx)(Hb, {
									chart: v,
									config: o?.config
								}) : null,
								r ? (0, Y.jsx)(wb, { code: v }) : null,
								a ? (0, Y.jsx)(Ub, {
									chart: v,
									config: o?.config
								}) : null
							]
						})
					}) : null,
					(0, Y.jsx)("div", {
						className: i("rounded-md border border-border bg-background"),
						children: (0, Y.jsx)(rx, {
							chart: v,
							config: o?.config,
							showControls: c
						})
					})
				]
			})
		});
	}
	let y = sx(s, "code"), b = lx(s, "download"), x = lx(s, "copy"), { "data-block": S, ...C } = r;
	return (0, Y.jsx)(hb, {
		className: t,
		code: v,
		isIncomplete: u,
		language: d,
		lineNumbers: _,
		startLine: g,
		...C,
		children: y ? (0, Y.jsxs)(Y.Fragment, { children: [b ? (0, Y.jsx)(Db, {
			code: v,
			language: d
		}) : null, x ? (0, Y.jsx)(wb, {}) : null] }) : null
	});
}, (e, t) => $(e, t) && ox(e.node, t.node));
Px.displayName = "MarkdownCode";
var Fx = (0, N.memo)(({ node: e, className: t, ...n }) => {
	let { controls: r } = (0, N.useContext)(WS), i = sx(r, "image"), a = i && dx(r, "download");
	return (0, Y.jsx)(Ab, {
		className: t,
		node: e,
		showControls: i,
		showDownloadControl: a,
		...n
	});
}, (e, t) => $(e, t));
Fx.displayName = "MarkdownImg";
var Ix = (0, N.memo)(({ children: e, node: t, ...n }) => {
	let r = (Array.isArray(e) ? e : [e]).filter((e) => e != null && e !== "");
	if (r.length === 1 && (0, N.isValidElement)(r[0])) {
		let t = r[0].props.node?.tagName;
		if (t === "img" || t === "code" && "data-block" in r[0].props) return (0, Y.jsx)(Y.Fragment, { children: e });
	}
	return (0, Y.jsx)("p", {
		...n,
		children: e
	});
}, (e, t) => $(e, t));
Ix.displayName = "MarkdownParagraph";
var Lx = {
	ol: fx,
	li: px,
	ul: mx,
	hr: hx,
	strong: gx,
	a: _x,
	h1: vx,
	h2: yx,
	h3: bx,
	h4: xx,
	h5: Sx,
	h6: Cx,
	table: wx,
	thead: Tx,
	tbody: Ex,
	tr: Dx,
	th: Ox,
	td: kx,
	blockquote: Ax,
	code: Px,
	img: Fx,
	pre: ({ children: e }) => (0, N.isValidElement)(e) ? (0, N.cloneElement)(e, { "data-block": "true" }) : e,
	sup: jx,
	sub: Mx,
	p: Ix,
	section: Nx
}, Rx = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/, zx = /\p{L}/u;
function Bx(e) {
	let t = e.replace(/(```|~~~)[\s\S]*?\1/g, "").replace(/^#{1,6}\s+/gm, "").replace(/(\*{1,3}|_{1,3})/g, "").replace(/`[^`]*`/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^[\s>*\-+\d.]+/gm, ""), n, r = 0, i = 0;
	for (let e of t) {
		if (Rx.test(e)) {
			n ??= "rtl", i += 1;
			continue;
		}
		zx.test(e) && (n ??= "ltr", r += 1);
	}
	return i > r ? "rtl" : r > i ? "ltr" : n ?? "ltr";
}
var Vx = /^[ \t]{0,3}(`{3,}|~{3,})/, Hx = /^\|?[ \t]*:?-{1,}:?[ \t]*(\|[ \t]*:?-{1,}:?[ \t]*)*\|?$/, Ux = (e) => {
	let t = e.split("\n"), n = null, r = 0;
	for (let e of t) {
		let t = Vx.exec(e);
		if (n === null) {
			if (t) {
				let e = t[1];
				n = e[0], r = e.length;
			}
		} else if (t) {
			let e = t[1], i = e[0], a = e.length;
			i === n && a >= r && (n = null, r = 0);
		}
	}
	return n !== null;
}, Wx = (e) => {
	let t = e.split("\n");
	for (let e of t) {
		let t = e.trim();
		if (t.length > 0 && t.includes("|") && Hx.test(t)) return !0;
	}
	return !1;
}, Gx = () => (e) => {
	Le(e, "html", (e, t, n) => {
		!n || typeof t != "number" || (n.children[t] = {
			type: "text",
			value: e.value
		});
	});
}, Kx = [], qx = { allowDangerousHtml: !0 }, Jx = /* @__PURE__ */ new WeakMap(), Yx = new class {
	constructor() {
		this.cache = /* @__PURE__ */ new Map(), this.keyCache = /* @__PURE__ */ new WeakMap(), this.maxSize = 100;
	}
	generateCacheKey(e) {
		let t = this.keyCache.get(e);
		if (t) return t;
		let n = e.rehypePlugins, r = e.remarkPlugins, i = e.remarkRehypeOptions;
		if (!(n || r || i)) {
			let t = "default";
			return this.keyCache.set(e, t), t;
		}
		let a = (e) => {
			if (!e || e.length === 0) return "";
			let t = "";
			for (let n = 0; n < e.length; n += 1) {
				let r = e[n];
				if (n > 0 && (t += ","), Array.isArray(r)) {
					let [e, n] = r;
					if (typeof e == "function") {
						let n = Jx.get(e);
						n || (n = e.name, Jx.set(e, n)), t += n;
					} else t += String(e);
					t += ":", t += JSON.stringify(n);
				} else if (typeof r == "function") {
					let e = Jx.get(r);
					e || (e = r.name, Jx.set(r, e)), t += e;
				} else t += String(r);
			}
			return t;
		}, o = a(n), s = `${a(r)}::${o}::${i ? JSON.stringify(i) : ""}`;
		return this.keyCache.set(e, s), s;
	}
	get(e) {
		let t = this.generateCacheKey(e), n = this.cache.get(t);
		return n && (this.cache.delete(t), this.cache.set(t, n)), n;
	}
	set(e, t) {
		let n = this.generateCacheKey(e);
		if (this.cache.size >= this.maxSize) {
			let e = this.cache.keys().next().value;
			e && this.cache.delete(e);
		}
		this.cache.set(n, t);
	}
	clear() {
		this.cache.clear();
	}
}(), Xx = (e) => {
	let t = Zx(e), n = e.children || "";
	return iS(t.runSync(t.parse(n), n), e);
}, Zx = (e) => {
	let t = Yx.get(e);
	if (t) return t;
	let n = $x(e);
	return Yx.set(e, n), n;
}, Qx = (e) => e.some((e) => Array.isArray(e) ? e[0] === Ao : e === Ao), $x = (e) => {
	let t = e.rehypePlugins || Kx, n = e.remarkPlugins || Kx, r = Qx(t) ? n : [...n, Gx], i = e.remarkRehypeOptions ? {
		...qx,
		...e.remarkRehypeOptions
	} : qx;
	return I_().use(vg).use(r).use(l_, i).use(t);
}, eS = (e) => e, tS = (e, t, n, r) => {
	n ? e.children.splice(t, 1) : e.children[t] = {
		type: "text",
		value: r
	};
}, nS = (e, t) => {
	for (let n in Nh) if (Object.hasOwn(Nh, n) && Object.hasOwn(e.properties, n)) {
		let r = e.properties[n], i = Nh[n];
		(i === null || i.includes(e.tagName)) && (e.properties[n] = t(String(r || ""), n, e) ?? void 0);
	}
}, rS = (e, t, n, r, i, a) => {
	let o = !1;
	return r ? o = !r.includes(e.tagName) : i && (o = i.includes(e.tagName)), !o && a && typeof t == "number" && (o = !a(e, t, n)), o;
}, iS = (e, t) => {
	let { allowElement: n, allowedElements: r, disallowedElements: i, skipHtml: a, unwrapDisallowed: o, urlTransform: s } = t;
	if (n || r || i || a || s) {
		let t = s || eS;
		Le(e, (e, s, c) => {
			if (e.type === "raw" && c && typeof s == "number") return tS(c, s, a, e.value), s;
			if (e.type === "element" && (nS(e, t), rS(e, s, c, r, i, n) && c && typeof s == "number")) return o && e.children ? c.children.splice(s, 1, ...e.children) : c.children.splice(s, 1), s;
		});
	}
	return dh(e, {
		Fragment: Y.Fragment,
		components: t.components,
		ignoreInvalidStyle: !0,
		jsx: Y.jsx,
		jsxs: Y.jsxs,
		passKeys: !0,
		passNode: !0
	});
}, aS = /\[\^[\w-]{1,200}\](?!:)/, oS = /\[\^[\w-]{1,200}\]:/, sS = /<([A-Za-z][\w:-]*)[\s>/]/, cS = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]), lS = /* @__PURE__ */ new Map(), uS = /* @__PURE__ */ new Map(), dS = (e) => {
	let t = e.toLowerCase(), n = lS.get(t);
	if (n) return n;
	let r = RegExp(`<${t}(?=[\\s>/])[^>]*>`, "gi");
	return lS.set(t, r), r;
}, fS = (e) => {
	let t = e.toLowerCase(), n = uS.get(t);
	if (n) return n;
	let r = RegExp(`</${t}(?=[\\s>])[^>]*>`, "gi");
	return uS.set(t, r), r;
}, pS = (e, t) => {
	if (cS.has(t.toLowerCase())) return 0;
	let n = e.match(dS(t));
	if (!n) return 0;
	let r = 0;
	for (let e of n) e.trimEnd().endsWith("/>") || (r += 1);
	return r;
}, mS = (e, t) => {
	let n = e.match(fS(t));
	return n ? n.length : 0;
}, hS = (e) => {
	let t = 0;
	for (let n = 0; n < e.length - 1; n += 1) e[n] === "$" && e[n + 1] === "$" && (t += 1, n += 1);
	return t;
}, gS = (e) => {
	let t = aS.test(e), n = oS.test(e);
	if (t || n) return [e];
	let r = fy.lex(e, { gfm: !0 }), i = [], a = [], o = !1;
	for (let e of r) {
		let t = e.raw, n = i.length;
		if (a.length > 0) {
			i[n - 1] += t;
			let e = a.at(-1), r = pS(t, e), o = mS(t, e);
			for (let t = 0; t < r; t += 1) a.push(e);
			for (let t = 0; t < o; t += 1) a.length > 0 && a.at(-1) === e && a.pop();
			continue;
		}
		if (e.type === "html" && e.block) {
			let e = t.match(sS);
			if (e) {
				let n = e[1];
				pS(t, n) > mS(t, n) && a.push(n);
			}
		}
		if (n > 0 && !o) {
			let e = i[n - 1];
			if (hS(e) % 2 == 1) {
				i[n - 1] = e + t;
				continue;
			}
		}
		i.push(t), e.type !== "space" && (o = e.type === "code");
	}
	return i;
}, _S = /^\n*/, vS = /\n*$/, yS = /\n\n/g, bS = (e, t, n) => t.includes("\n") ? `${e}${t.replace(yS, "\n<!---->\n").replace(_S, "\n\n").replace(vS, "\n\n")}${n}

` : e + t + n, xS = (e, t) => {
	let n = RegExp(`<(${t})(?=[\\s>/])([^>]*)>`, "gi"), r = "", i = 0, a = n.exec(e);
	for (; a;) {
		let t = a[0], o = a[1], s = a.index + t.length, c = e.slice(s);
		if (RegExp(`</${o}\\s*>`, "i").test(c)) {
			a = n.exec(e);
			continue;
		}
		if (r += e.slice(i, a.index), c.length === 0) {
			r += t, i = s, a = n.exec(e);
			continue;
		}
		if (c.startsWith("\n\n")) {
			let n = c.slice(2).replace(yS, "\n<!---->\n");
			r += `${t}

${n}`, i = e.length;
			break;
		}
		if (!c.startsWith("\n")) {
			r += t, i = s, a = n.exec(e);
			continue;
		}
		let l = c.slice(1);
		if (l.trim().length === 0) {
			r += t, i = s, a = n.exec(e);
			continue;
		}
		let u = l.replace(yS, "\n<!---->\n");
		r += `${t}

${u}`, i = e.length;
		break;
	}
	return i === 0 ? e : r + e.slice(i);
}, SS = (e, t) => {
	if (!t.length) return e;
	let n = e;
	for (let e of t) {
		let t = RegExp(`(<${e}(?=[\\s>/])[^>]*>)([\\s\\S]*?)(</${e}\\s*>)`, "gi");
		n = n.replace(t, (e, t, n, r) => bS(t, n, r)), n = xS(n, e);
	}
	return n;
}, CS = /([\\`*_~[\]|])/g, wS = (e) => e.replace(CS, "\\$1"), TS = (e, t) => {
	if (!t.length) return e;
	let n = e;
	for (let e of t) {
		let t = RegExp(`(<${e}(?=[\\s>/])[^>]*>)([\\s\\S]*?)(</${e}\\s*>)`, "gi");
		n = n.replace(t, (e, t, n, r) => t + wS(n).replace(/\n\n/g, "&#10;&#10;") + r);
	}
	return n;
}, ES = /* @__PURE__ */ new Set([
	"blockquote",
	"dd",
	"dt",
	"figcaption",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"li",
	"p",
	"td",
	"th"
]), DS = /* @__PURE__ */ new Set([
	"code",
	"kbd",
	"pre",
	"samp",
	"var"
]);
function OS(e) {
	return e.children.map((e) => e.type === "text" ? e.value : e.type === "element" && !DS.has(e.tagName) ? OS(e) : "").join("");
}
function kS() {
	return (e) => {
		Le(e, "element", (e) => {
			if (DS.has(e.tagName)) {
				e.properties ??= {}, e.properties.dir = "ltr";
				return;
			}
			ES.has(e.tagName) && (e.properties ??= {}, typeof e.properties.dir != "string" && (e.properties.dir = Bx(OS(e))));
		});
	};
}
var AS = (e) => e.type === "text" ? e.value : "children" in e && Array.isArray(e.children) ? e.children.map(AS).join("") : "", jS = (e) => (t) => {
	if (!e || e.length === 0) return;
	let n = new Set(e.map((e) => e.toLowerCase()));
	Le(t, "element", (e) => {
		if (n.has(e.tagName.toLowerCase())) {
			let t = AS(e);
			e.children = t ? [{
				type: "text",
				value: t
			}] : [];
		}
	});
}, MS = () => (e) => {
	Le(e, "code", (e) => {
		e.meta && (e.data = e.data ?? {}, e.data.hProperties = {
			...e.data.hProperties ?? {},
			metastring: e.meta
		});
	});
}, NS = /^[ \t]*<[\w!/?-]/, PS = /(^|\n)[ \t]{4,}(?=<[\w!/?-])/g, FS = (e) => typeof e != "string" || e.length === 0 || !NS.test(e) ? e : e.replace(PS, "$1"), IS = {
	...ye,
	clobberPrefix: "",
	protocols: {
		...ye.protocols,
		href: [
			...ye.protocols?.href ?? [],
			"tel",
			"streamdown"
		]
	},
	attributes: {
		...ye.attributes,
		code: [...ye.attributes?.code ?? [], "metastring"]
	}
}, LS = {
	raw: Ao,
	sanitize: [Ie, IS],
	harden: [Be, {
		allowedImagePrefixes: ["*"],
		allowedLinkPrefixes: ["*"],
		allowedProtocols: ["*"],
		defaultOrigin: void 0,
		allowDataImages: !0
	}]
}, RS = {
	gfm: [Md, {}],
	codeMeta: MS
}, zS = Object.values(LS), BS = Object.values(RS), VS = {
	block: " ▋",
	circle: " ●"
}, HS = ["github-light", "github-dark"], US = { enabled: !0 }, WS = (0, N.createContext)({
	codeBlockMaxHeight: 400,
	shikiTheme: HS,
	controls: !0,
	isAnimating: !1,
	lineNumbers: !0,
	mode: "streaming",
	mermaid: void 0,
	linkSafety: US,
	tableMaxHeight: 300
}), GS = (0, N.memo)(({ content: e, shouldParseIncompleteMarkdown: t, shouldNormalizeHtmlIndentation: n, index: r, isIncomplete: i, dir: a, animatePlugin: o, ...s }) => {
	(0, N.useLayoutEffect)(() => {
		o?.commit();
	});
	let c = typeof e == "string" && n ? FS(e) : e, l = (0, Y.jsx)(Xx, {
		...s,
		children: c
	});
	return (0, Y.jsx)(Yy.Provider, {
		value: i,
		children: a ? (0, Y.jsx)("div", {
			dir: a,
			style: { display: "contents" },
			children: l
		}) : l
	});
}, (e, t) => {
	if (e.content !== t.content || e.shouldNormalizeHtmlIndentation !== t.shouldNormalizeHtmlIndentation || e.index !== t.index || e.isIncomplete !== t.isIncomplete || e.dir !== t.dir) return !1;
	if (e.components !== t.components) {
		let n = Object.keys(e.components || {}), r = Object.keys(t.components || {});
		if (n.length !== r.length || n.some((n) => e.components?.[n] !== t.components?.[n])) return !1;
	}
	return e.rehypePlugins === t.rehypePlugins && e.remarkPlugins === t.remarkPlugins && !!e.animatePlugin == !!t.animatePlugin;
});
GS.displayName = "Block";
var KS = (0, N.memo)(({ children: e, mode: t = "streaming", dir: n, parseIncompleteMarkdown: r = !0, normalizeHtmlIndentation: i = !1, components: a, rehypePlugins: o = zS, remarkPlugins: s = BS, className: c, shikiTheme: l, mermaid: u, codeBlockMaxHeight: d = 400, controls: f = !0, isAnimating: p = !1, tableMaxHeight: m = 300, animated: h, BlockComponent: g = GS, parseMarkdownIntoBlocksFn: _ = gS, caret: v, plugins: y, remend: b, linkSafety: x = US, lineNumbers: S = !0, allowedTags: C, literalTagContent: w, translations: T, icons: E, prefix: D, onAnimationStart: ee, onAnimationEnd: te, ...ne }) => {
	let re = (0, N.useId)(), O = (0, N.useMemo)(() => $y(D), [D]), k = (0, N.useRef)(null), ie = (0, N.useRef)(ee), ae = (0, N.useRef)(te);
	ie.current = ee, ae.current = te, (0, N.useEffect)(() => {
		var e, n, r;
		if (t === "static") return;
		let i = k.current;
		if (k.current = p, i === null) {
			p && ((e = ie.current) == null || e.call(ie));
			return;
		}
		p && !i ? (n = ie.current) == null || n.call(ie) : !p && i && ((r = ae.current) == null || r.call(ae));
	}, [p, t]);
	let A = (0, N.useMemo)(() => C ? Object.keys(C) : [], [C]), oe = (0, N.useMemo)(() => {
		if (typeof e != "string") return "";
		let n = t === "streaming" && r ? xp(e, b) : e;
		return w && w.length > 0 && (n = TS(n, w)), A.length > 0 && (n = SS(n, A)), n;
	}, [
		e,
		t,
		r,
		b,
		A,
		w
	]), se = (0, N.useMemo)(() => _(oe), [oe, _]), ce = (0, N.useMemo)(() => n === "auto" ? se.map(Bx) : void 0, [se, n]), le = (0, N.useMemo)(() => se.map((e, t) => `${re}-${t}`), [se.length, re]), j = (0, N.useMemo)(() => h === !0 ? "true" : h ? JSON.stringify(h) : "", [h]), M = (0, N.useRef)(null), ue = (0, N.useRef)([]), de = (0, N.useRef)([]), fe = (0, N.useRef)(null), pe = (0, N.useRef)("");
	j ? (pe.current === j ? M.current ||= Ty() : (pe.current = j, M.current = Ty({ maxBacklogMs: j === "true" ? void 0 : h.maxBacklogMs }), ue.current = [], de.current = []), p && M.current && M.current.beginPass(M.current.now())) : (M.current = null, ue.current = [], de.current = [], pe.current = ""), (0, N.useLayoutEffect)(() => {
		var e;
		p && ((e = M.current) == null || e.commitPass());
	});
	let me = (0, N.useMemo)(() => ({
		codeBlockMaxHeight: d,
		shikiTheme: l ?? (y?.code)?.getThemes() ?? HS,
		controls: f,
		isAnimating: p,
		lineNumbers: S,
		mode: t,
		mermaid: u,
		linkSafety: x,
		tableMaxHeight: m
	}), [
		d,
		l,
		f,
		p,
		S,
		t,
		u,
		x,
		y?.code,
		m
	]), he = (0, N.useMemo)(() => T ? JSON.stringify(T) : "", [T]), ge = (0, N.useMemo)(() => ({
		...xb,
		...T
	}), [he]), _e = (0, N.useMemo)(() => {
		let { inlineCode: e, ...t } = a ?? {}, n = {
			...Lx,
			...t
		};
		if (e) {
			let t = n.code;
			n.code = (n) => "data-block" in n ? t ? (0, N.createElement)(t, n) : null : (0, N.createElement)(e, n);
		}
		return n;
	}, [a]), ve = (0, N.useMemo)(() => {
		let e = [];
		return y != null && y.cjk && (e = [...e, ...y.cjk.remarkPluginsBefore]), e = [...e, ...s], y != null && y.cjk && (e = [...e, ...y.cjk.remarkPluginsAfter]), y != null && y.math && (e = [...e, y.math.remarkPlugin]), e;
	}, [
		s,
		y?.math,
		y?.cjk
	]), ye = (0, N.useMemo)(() => {
		let e = o;
		if (C && Object.keys(C).length > 0 && o === zS) {
			let t = {
				...IS,
				tagNames: [...IS.tagNames ?? [], ...Object.keys(C)],
				attributes: {
					...IS.attributes,
					...C
				}
			};
			e = [
				LS.raw,
				[Ie, t],
				LS.harden
			];
		}
		return w && w.length > 0 && (e = [...e, [jS, w]]), y != null && y.math && (e = [...e, y.math.rehypePlugin]), n === "auto" && t === "static" && (e = [...e, kS]), e;
	}, [
		o,
		y?.math,
		C,
		w,
		n,
		t
	]), be = (0, N.useMemo)(() => {
		if (!p || se.length === 0) return !1;
		let e = se.at(-1);
		return Ux(e) || Wx(e);
	}, [p, se]), xe = (0, N.useMemo)(() => v && p && !be ? { "--streamdown-caret": `"${VS[v]}"` } : void 0, [
		v,
		p,
		be
	]), Se = (e) => {
		let t = null;
		if (M.current && p) {
			if (!ue.current[e]) {
				let { maxBacklogMs: t, ...n } = j && j !== "true" ? h : {};
				ue.current[e] = Jy({
					...n,
					timeline: M.current
				});
			}
			t = ue.current[e];
		}
		fe.current !== ye && (de.current = [], fe.current = ye), t && !de.current[e] && (de.current[e] = [...ye, t.rehypePlugin]);
		let n = t && de.current[e] ? de.current[e] : ye;
		return {
			blockAnimatePlugin: t,
			blockRehypePlugins: n
		};
	};
	return t === "static" ? (0, Y.jsx)(Sb.Provider, {
		value: ge,
		children: (0, Y.jsx)(Fb.Provider, {
			value: y ?? null,
			children: (0, Y.jsx)(WS.Provider, {
				value: me,
				children: (0, Y.jsx)(yb, {
					icons: E,
					children: (0, Y.jsx)(tb.Provider, {
						value: O,
						children: (0, Y.jsx)("div", {
							className: O("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", c),
							dir: n === "auto" ? void 0 : n,
							children: (0, Y.jsx)(Xx, {
								components: _e,
								rehypePlugins: ye,
								remarkPlugins: ve,
								...ne,
								children: oe
							})
						})
					})
				})
			})
		})
	}) : (0, Y.jsx)(Sb.Provider, {
		value: ge,
		children: (0, Y.jsx)(Fb.Provider, {
			value: y ?? null,
			children: (0, Y.jsx)(WS.Provider, {
				value: me,
				children: (0, Y.jsx)(yb, {
					icons: E,
					children: (0, Y.jsx)(tb.Provider, {
						value: O,
						children: (0, Y.jsxs)("div", {
							className: O("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", v && !be ? "[&>*:last-child]:after:inline [&>*:last-child]:after:align-baseline [&>*:last-child]:after:content-[var(--streamdown-caret)]" : null, c),
							style: xe,
							children: [se.length === 0 && v && p && (0, Y.jsx)("span", {}), se.map((e, t) => {
								let a = t === se.length - 1, o = p && a && Ux(e), { blockAnimatePlugin: s, blockRehypePlugins: c } = Se(t);
								return (0, Y.jsx)(g, {
									animatePlugin: s,
									components: _e,
									content: e,
									dir: ce?.[t] ?? (n === "auto" ? void 0 : n),
									index: t,
									isIncomplete: o,
									rehypePlugins: c,
									remarkPlugins: ve,
									shouldNormalizeHtmlIndentation: i,
									shouldParseIncompleteMarkdown: r,
									...ne
								}, le[t]);
							})]
						})
					})
				})
			})
		})
	});
}, (e, t) => e.children === t.children && e.shikiTheme === t.shikiTheme && e.isAnimating === t.isAnimating && e.animated === t.animated && e.mode === t.mode && e.plugins === t.plugins && e.className === t.className && e.linkSafety === t.linkSafety && e.lineNumbers === t.lineNumbers && e.codeBlockMaxHeight === t.codeBlockMaxHeight && e.tableMaxHeight === t.tableMaxHeight && e.normalizeHtmlIndentation === t.normalizeHtmlIndentation && e.literalTagContent === t.literalTagContent && JSON.stringify(e.translations) === JSON.stringify(t.translations) && e.prefix === t.prefix && e.dir === t.dir);
KS.displayName = "Streamdown";
var qS = ({ children: e, className: t, minZoom: n = .5, maxZoom: r = 3, zoomStep: i = .1, showControls: a = !0, initialZoom: o = 1, fullscreen: s = !1 }) => {
	let { RotateCcwIcon: c, ZoomInIcon: l, ZoomOutIcon: u } = bb(), d = Q(), f = Cb(), p = (0, N.useRef)(null), m = (0, N.useRef)(null), [h, g] = (0, N.useState)(o), [_, v] = (0, N.useState)({
		x: 0,
		y: 0
	}), [y, b] = (0, N.useState)(!1), [x, S] = (0, N.useState)({
		x: 0,
		y: 0
	}), [C, w] = (0, N.useState)({
		x: 0,
		y: 0
	}), T = (0, N.useCallback)((e) => {
		g((t) => Math.max(n, Math.min(r, t + e)));
	}, [n, r]), E = (0, N.useCallback)(() => {
		T(i);
	}, [T, i]), D = (0, N.useCallback)(() => {
		T(-i);
	}, [T, i]), ee = (0, N.useCallback)(() => {
		g(o), v({
			x: 0,
			y: 0
		});
	}, [o]), te = (0, N.useCallback)((e) => {
		e.preventDefault();
		let t = e.deltaY > 0 ? -i : i;
		T(t);
	}, [T, i]), ne = (0, N.useCallback)((e) => {
		if (e.button !== 0 || e.isPrimary === !1) return;
		b(!0), S({
			x: e.clientX,
			y: e.clientY
		}), w(_);
		let t = e.currentTarget;
		t instanceof HTMLElement && t.setPointerCapture(e.pointerId);
	}, [_]), re = (0, N.useCallback)((e) => {
		if (!y) return;
		e.preventDefault();
		let t = e.clientX - x.x, n = e.clientY - x.y;
		v({
			x: C.x + t,
			y: C.y + n
		});
	}, [
		y,
		x,
		C
	]), O = (0, N.useCallback)((e) => {
		b(!1);
		let t = e.currentTarget;
		t instanceof HTMLElement && t.releasePointerCapture(e.pointerId);
	}, []);
	return (0, N.useEffect)(() => {
		let e = p.current;
		if (e) return e.addEventListener("wheel", te, { passive: !1 }), () => {
			e.removeEventListener("wheel", te);
		};
	}, [te]), (0, N.useEffect)(() => {
		let e = m.current;
		if (e && y) return document.body.style.userSelect = "none", e.addEventListener("pointermove", re, { passive: !1 }), e.addEventListener("pointerup", O), e.addEventListener("pointercancel", O), () => {
			document.body.style.userSelect = "", e.removeEventListener("pointermove", re), e.removeEventListener("pointerup", O), e.removeEventListener("pointercancel", O);
		};
	}, [
		y,
		re,
		O
	]), (0, Y.jsxs)("div", {
		className: d("relative flex flex-col", s ? "h-full w-full" : "min-h-28 w-full", t),
		ref: p,
		style: { cursor: y ? "grabbing" : "grab" },
		children: [a ? (0, Y.jsxs)("div", {
			className: d("absolute z-10 flex flex-col gap-1 rounded-md border border-border bg-background/80 p-1 supports-[backdrop-filter]:bg-background/70 supports-[backdrop-filter]:backdrop-blur-sm", s ? "bottom-4 left-4" : "bottom-2 left-2"),
			children: [
				(0, Y.jsx)("button", {
					"aria-label": f.zoomIn,
					className: d("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
					disabled: h >= r,
					onClick: E,
					title: f.zoomIn,
					type: "button",
					children: (0, Y.jsx)(l, {
						"aria-hidden": "true",
						size: 16
					})
				}),
				(0, Y.jsx)("button", {
					"aria-label": f.zoomOut,
					className: d("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
					disabled: h <= n,
					onClick: D,
					title: f.zoomOut,
					type: "button",
					children: (0, Y.jsx)(u, {
						"aria-hidden": "true",
						size: 16
					})
				}),
				(0, Y.jsx)("button", {
					"aria-label": f.resetView,
					className: d("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"),
					onClick: ee,
					title: f.resetView,
					type: "button",
					children: (0, Y.jsx)(c, {
						"aria-hidden": "true",
						size: 16
					})
				})
			]
		}) : null, (0, Y.jsx)("div", {
			className: d("flex-1 origin-center transition-transform duration-150 ease-out", s ? "flex h-full w-full items-center justify-center" : "flex w-full items-center justify-center"),
			onPointerDown: ne,
			ref: m,
			role: "application",
			style: {
				transform: `translate(${_.x}px, ${_.y}px) scale(${h})`,
				transformOrigin: "center center",
				touchAction: "none",
				willChange: "transform"
			},
			children: e
		})]
	});
}, JS = ({ chart: e, className: t, config: n, fullscreen: r = !1, showControls: i = !0 }) => {
	let a = Q(), [o, s] = (0, N.useState)(null), [c, l] = (0, N.useState)(!1), [u, d] = (0, N.useState)(""), [f, p] = (0, N.useState)(""), [m, h] = (0, N.useState)(0), { mermaid: g } = (0, N.useContext)(WS), _ = Rb(), v = g?.errorComponent, { shouldRender: y, containerRef: b } = xy({ immediate: r });
	if ((0, N.useEffect)(() => {
		if (y) {
			if (!_) {
				s("Mermaid plugin not available. Please add the mermaid plugin to enable diagram rendering.");
				return;
			}
			(async () => {
				try {
					s(null), l(!0);
					let t = _.getMermaid(n), r = e.split("").reduce((e, t) => (e << 5) - e + t.charCodeAt(0) | 0, 0), i = `mermaid-${Math.abs(r)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: a } = await t.render(i, e);
					d(a), p(a);
				} catch (e) {
					if (!(f || u)) {
						let t = e instanceof Error ? e.message : "Failed to render Mermaid chart";
						s(t);
					}
				} finally {
					l(!1);
				}
			})();
		}
	}, [
		e,
		n,
		m,
		y,
		_
	]), !(y || u || f)) return (0, Y.jsx)("div", {
		className: a("my-4 min-h-[200px]", t),
		ref: b
	});
	if (c && !u && !f) return (0, Y.jsx)("div", {
		className: a("my-4 flex justify-center p-4", t),
		ref: b,
		children: (0, Y.jsxs)("div", {
			className: a("flex items-center space-x-2 text-muted-foreground"),
			children: [(0, Y.jsx)("div", { className: a("h-4 w-4 animate-spin rounded-full border-current border-b-2") }), (0, Y.jsx)("span", {
				className: a("text-sm"),
				children: "Loading diagram..."
			})]
		})
	});
	if (o && !u && !f) return v ? (0, Y.jsx)("div", {
		ref: b,
		children: (0, Y.jsx)(v, {
			chart: e,
			error: o,
			retry: () => h((e) => e + 1)
		})
	}) : (0, Y.jsxs)("div", {
		className: a("rounded-md bg-red-50 p-4", t),
		ref: b,
		children: [(0, Y.jsxs)("p", {
			className: a("font-mono text-red-700 text-sm"),
			children: ["Mermaid Error: ", o]
		}), (0, Y.jsxs)("details", {
			className: a("mt-2"),
			children: [(0, Y.jsx)("summary", {
				className: a("cursor-pointer text-red-600 text-xs"),
				children: "Show Code"
			}), (0, Y.jsx)("pre", {
				className: a("mt-2 overflow-x-auto rounded bg-red-100 p-2 text-red-800 text-xs"),
				children: e
			})]
		})]
	});
	let x = u || f;
	return (0, Y.jsx)("div", {
		className: a("size-full", t),
		"data-streamdown": "mermaid",
		ref: b,
		children: (0, Y.jsx)(qS, {
			className: a(r ? "size-full overflow-hidden" : "overflow-hidden", t),
			fullscreen: r,
			maxZoom: 3,
			minZoom: .5,
			showControls: i,
			zoomStep: .1,
			children: (0, Y.jsx)("div", {
				"aria-label": "Mermaid chart",
				className: a("flex justify-center", r ? "size-full items-center" : null),
				dangerouslySetInnerHTML: { __html: x },
				role: "img"
			})
		})
	});
};
//#endregion
export { KS as a, ye as c, JS as i, ae as l, Lb as n, cb as o, WS as r, Ie as s, LS as t };
