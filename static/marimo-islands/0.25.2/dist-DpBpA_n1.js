import { E as e, T as t, _ as n, g as r, h as i, n as a, t as o, u as s, w as c } from "./micromark-factory-space-DGxAzmw8.js";
import { t as l } from "./katex-BIdZGsyO.js";
//#region ../node_modules/.pnpm/hast-util-from-dom@5.0.1/node_modules/hast-util-from-dom/lib/index.js
function u(e, t) {
	return d(e, t || {}) || {
		type: "root",
		children: []
	};
}
function d(e, t) {
	let n = f(e, t);
	return n && t.afterTransform && t.afterTransform(e, n), n;
}
function f(e, t) {
	switch (e.nodeType) {
		case 1: return _(e, t);
		case 3: return h(e);
		case 8: return g(e);
		case 9: return p(e, t);
		case 10: return m();
		case 11: return p(e, t);
		default: return;
	}
}
function p(e, t) {
	return {
		type: "root",
		children: v(e, t)
	};
}
function m() {
	return { type: "doctype" };
}
function h(e) {
	return {
		type: "text",
		value: e.nodeValue || ""
	};
}
function g(e) {
	return {
		type: "comment",
		value: e.nodeValue || ""
	};
}
function _(e, t) {
	let a = e.namespaceURI, o = a === i.svg ? n : r, s = a === i.html ? e.tagName.toLowerCase() : e.tagName, c = a === i.html && s === "template" ? e.content : e, l = e.getAttributeNames(), u = {}, d = -1;
	for (; ++d < l.length;) u[l[d]] = e.getAttribute(l[d]) || "";
	return o(s, u, v(c, t));
}
function v(e, t) {
	let n = e.childNodes, r = [], i = -1;
	for (; ++i < n.length;) {
		let e = d(n[i], t);
		e !== void 0 && r.push(e);
	}
	return r;
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/browser.js
var y = new DOMParser();
function b(e, t) {
	return u(t?.fragment ? x(e) : y.parseFromString(e, "text/html"));
}
function x(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, t.content;
}
//#endregion
//#region ../node_modules/.pnpm/unist-util-find-after@5.0.0/node_modules/unist-util-find-after/lib/index.js
var S = (function(t, n, r) {
	let i = e(r);
	if (!t || !t.type || !t.children) throw Error("Expected parent node");
	if (typeof n == "number") {
		if (n < 0 || n === Infinity) throw Error("Expected positive finite number as index");
	} else if (n = t.children.indexOf(n), n < 0) throw Error("Expected child node or index");
	for (; ++n < t.children.length;) if (i(t.children[n], n, t)) return t.children[n];
}), C = (function(e) {
	if (e == null) return D;
	if (typeof e == "string") return T(e);
	if (typeof e == "object") return w(e);
	if (typeof e == "function") return E(e);
	throw Error("Expected function, string, or array as `test`");
});
function w(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = C(e[n]);
	return E(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function T(e) {
	return E(t);
	function t(t) {
		return t.tagName === e;
	}
}
function E(e) {
	return t;
	function t(t, n, r) {
		return !!(O(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function D(e) {
	return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function O(e) {
	return typeof e == "object" && !!e && "type" in e && "tagName" in e;
}
//#endregion
//#region ../node_modules/.pnpm/hast-util-to-text@4.0.2/node_modules/hast-util-to-text/lib/index.js
var k = /\n/g, A = /[\t ]+/g, j = C("br"), M = C(G), N = C("p"), P = C("tr"), F = C([
	"datalist",
	"head",
	"noembed",
	"noframes",
	"noscript",
	"rp",
	"script",
	"style",
	"template",
	"title",
	W,
	K
]), I = C(/* @__PURE__ */ "address.article.aside.blockquote.body.caption.center.dd.dialog.dir.dl.dt.div.figure.figcaption.footer.form,.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.legend.li.listing.main.menu.nav.ol.p.plaintext.pre.section.ul.xmp".split("."));
function L(e, t) {
	let n = t || {}, r = "children" in e ? e.children : [], i = I(e), a = U(e, {
		whitespace: n.whitespace || "normal",
		breakBefore: !1,
		breakAfter: !1
	}), o = [];
	(e.type === "text" || e.type === "comment") && o.push(...B(e, {
		whitespace: a,
		breakBefore: !0,
		breakAfter: !0
	}));
	let s = -1;
	for (; ++s < r.length;) o.push(...R(r[s], e, {
		whitespace: a,
		breakBefore: s ? void 0 : i,
		breakAfter: s < r.length - 1 ? j(r[s + 1]) : i
	}));
	let c = [], l;
	for (s = -1; ++s < o.length;) {
		let e = o[s];
		typeof e == "number" ? l !== void 0 && e > l && (l = e) : e && (l !== void 0 && l > -1 && c.push("\n".repeat(l) || " "), l = -1, c.push(e));
	}
	return c.join("");
}
function R(e, t, n) {
	return e.type === "element" ? z(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? B(e, n) : V(e) : [];
}
function z(e, t, n) {
	let r = U(e, n), i = e.children || [], a = -1, o = [];
	if (F(e)) return o;
	let s, c;
	for (j(e) || P(e) && S(t, e, P) ? c = "\n" : N(e) ? (s = 2, c = 2) : I(e) && (s = 1, c = 1); ++a < i.length;) o = o.concat(R(i[a], e, {
		whitespace: r,
		breakBefore: a ? void 0 : s,
		breakAfter: a < i.length - 1 ? j(i[a + 1]) : c
	}));
	return M(e) && S(t, e, M) && o.push("	"), s && o.unshift(s), c && o.push(c), o;
}
function B(e, t) {
	let n = String(e.value), r = [], i = [], a = 0;
	for (; a <= n.length;) {
		k.lastIndex = a;
		let e = k.exec(n), i = e && "index" in e ? e.index : n.length;
		r.push(H(n.slice(a, i).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), a !== 0 || t.breakBefore, i !== n.length || t.breakAfter)), a = i + 1;
	}
	let o = -1, s;
	for (; ++o < r.length;) r[o].charCodeAt(r[o].length - 1) === 8203 || o < r.length - 1 && r[o + 1].charCodeAt(0) === 8203 ? (i.push(r[o]), s = void 0) : r[o] ? (typeof s == "number" && i.push(s), i.push(r[o]), s = 0) : (o === 0 || o === r.length - 1) && i.push(0);
	return i;
}
function V(e) {
	return [String(e.value)];
}
function H(e, t, n) {
	let r = [], i = 0, a;
	for (; i < e.length;) {
		A.lastIndex = i;
		let n = A.exec(e);
		a = n ? n.index : e.length, !i && !a && n && !t && r.push(""), i !== a && r.push(e.slice(i, a)), i = n ? a + n[0].length : a;
	}
	return i !== a && !n && r.push(""), r.join(" ");
}
function U(e, t) {
	if (e.type === "element") {
		let n = e.properties || {};
		switch (e.tagName) {
			case "listing":
			case "plaintext":
			case "xmp": return "pre";
			case "nobr": return "nowrap";
			case "pre": return n.wrap ? "pre-wrap" : "pre";
			case "td":
			case "th": return n.noWrap ? "nowrap" : t.whitespace;
			case "textarea": return "pre-wrap";
		}
	}
	return t.whitespace;
}
function W(e) {
	return !!(e.properties || {}).hidden;
}
function G(e) {
	return e.tagName === "td" || e.tagName === "th";
}
function K(e) {
	return e.tagName === "dialog" && !(e.properties || {}).open;
}
//#endregion
//#region ../node_modules/.pnpm/rehype-katex@7.0.1/node_modules/rehype-katex/lib/index.js
var q = {}, J = [];
function Y(e) {
	let n = e || q;
	return function(e, r) {
		t(e, "element", function(e, t) {
			let i = Array.isArray(e.properties.className) ? e.properties.className : J, a = i.includes("language-math"), o = i.includes("math-display"), s = i.includes("math-inline"), u = o;
			if (!a && !o && !s) return;
			let d = t[t.length - 1], f = e;
			/* c8 ignore next -- verbose to test. */
			if (e.tagName === "code" && a && d && d.type === "element" && d.tagName === "pre" && (f = d, d = t[t.length - 2], u = !0), !d) return;
			let p = L(f, { whitespace: "pre" }), m;
			try {
				m = l.renderToString(p, {
					...n,
					displayMode: u,
					throwOnError: !0
				});
			} catch (i) {
				let a = i, o = a.name.toLowerCase();
				r.message("Could not render math with KaTeX", {
					ancestors: [...t, e],
					cause: a,
					place: e.position,
					ruleId: o,
					source: "rehype-katex"
				});
				try {
					m = l.renderToString(p, {
						...n,
						displayMode: u,
						strict: "ignore",
						throwOnError: !1
					});
				} catch {
					m = [{
						type: "element",
						tagName: "span",
						properties: {
							className: ["katex-error"],
							style: "color:" + (n.errorColor || "#cc0000"),
							title: String(i)
						},
						children: [{
							type: "text",
							value: p
						}]
					}];
				}
			}
			typeof m == "string" && (m = b(m, { fragment: !0 }).children);
			let h = d.children.indexOf(f);
			return d.children.splice(h, 1, ...m), c;
		});
	};
}
//#endregion
//#region ../node_modules/.pnpm/mdast-util-math@3.0.0/node_modules/mdast-util-math/lib/index.js
function X() {
	return {
		enter: {
			mathFlow: e,
			mathFlowFenceMeta: t,
			mathText: a
		},
		exit: {
			mathFlow: i,
			mathFlowFence: r,
			mathFlowFenceMeta: n,
			mathFlowValue: s,
			mathText: o,
			mathTextData: s
		}
	};
	function e(e) {
		this.enter({
			type: "math",
			meta: null,
			value: "",
			data: {
				hName: "pre",
				hChildren: [{
					type: "element",
					tagName: "code",
					properties: { className: ["language-math", "math-display"] },
					children: []
				}]
			}
		}, e);
	}
	function t() {
		this.buffer();
	}
	function n() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.type, t.meta = e;
	}
	function r() {
		this.data.mathFlowInside || (this.buffer(), this.data.mathFlowInside = !0);
	}
	function i(e) {
		let t = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n = this.stack[this.stack.length - 1];
		n.type, this.exit(e), n.value = t;
		let r = n.data.hChildren[0];
		r.type, r.tagName, r.children.push({
			type: "text",
			value: t
		}), this.data.mathFlowInside = void 0;
	}
	function a(e) {
		this.enter({
			type: "inlineMath",
			value: "",
			data: {
				hName: "code",
				hProperties: { className: ["language-math", "math-inline"] },
				hChildren: []
			}
		}, e), this.buffer();
	}
	function o(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.type, this.exit(e), n.value = t, n.data.hChildren.push({
			type: "text",
			value: t
		});
	}
	function s(e) {
		this.config.enter.data.call(this, e), this.config.exit.data.call(this, e);
	}
}
function Z(e) {
	let t = (e || {}).singleDollarTextMath;
	return t ??= !0, r.peek = i, {
		unsafe: [
			{
				character: "\r",
				inConstruct: "mathFlowMeta"
			},
			{
				character: "\n",
				inConstruct: "mathFlowMeta"
			},
			{
				character: "$",
				after: t ? void 0 : "\\$",
				inConstruct: "phrasing"
			},
			{
				character: "$",
				inConstruct: "mathFlowMeta"
			},
			{
				atBreak: !0,
				character: "$",
				after: "\\$"
			}
		],
		handlers: {
			math: n,
			inlineMath: r
		}
	};
	function n(e, t, n, r) {
		let i = e.value || "", o = n.createTracker(r), s = "$".repeat(Math.max(a(i, "$") + 1, 2)), c = n.enter("mathFlow"), l = o.move(s);
		if (e.meta) {
			let t = n.enter("mathFlowMeta");
			l += o.move(n.safe(e.meta, {
				after: "\n",
				before: l,
				encode: ["$"],
				...o.current()
			})), t();
		}
		return l += o.move("\n"), i && (l += o.move(i + "\n")), l += o.move(s), c(), l;
	}
	function r(e, n, r) {
		let i = e.value || "", a = 1;
		for (t || a++; RegExp("(^|[^$])" + "\\$".repeat(a) + "([^$]|$)").test(i);) a++;
		let o = "$".repeat(a);
		/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^\$|\$$/.test(i)) && (i = " " + i + " ");
		let s = -1;
		for (; ++s < r.unsafe.length;) {
			let e = r.unsafe[s];
			if (!e.atBreak) continue;
			let t = r.compilePattern(e), n;
			for (; n = t.exec(i);) {
				let e = n.index;
				i.codePointAt(e) === 10 && i.codePointAt(e - 1) === 13 && e--, i = i.slice(0, e) + " " + i.slice(n.index + 1);
			}
		}
		return o + i + o;
	}
	function i() {
		return "$";
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/math-flow.js
var Q = {
	tokenize: ee,
	concrete: !0,
	name: "mathFlow"
}, $ = {
	tokenize: te,
	partial: !0
};
function ee(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, c = 0;
	return l;
	function l(t) {
		return e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), u(t);
	}
	function u(t) {
		return t === 36 ? (e.consume(t), c++, u) : c < 2 ? n(t) : (e.exit("mathFlowFenceSequence"), o(e, d, "whitespace")(t));
	}
	function d(t) {
		return t === null || s(t) ? p(t) : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", { contentType: "string" }), f(t));
	}
	function f(t) {
		return t === null || s(t) ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), p(t)) : t === 36 ? n(t) : (e.consume(t), f);
	}
	function p(n) {
		return e.exit("mathFlowFence"), r.interrupt ? t(n) : e.attempt($, m, v)(n);
	}
	function m(t) {
		return e.attempt({
			tokenize: y,
			partial: !0
		}, v, h)(t);
	}
	function h(t) {
		return (a ? o(e, g, "linePrefix", a + 1) : g)(t);
	}
	function g(t) {
		return t === null ? v(t) : s(t) ? e.attempt($, m, v)(t) : (e.enter("mathFlowValue"), _(t));
	}
	function _(t) {
		return t === null || s(t) ? (e.exit("mathFlowValue"), g(t)) : (e.consume(t), _);
	}
	function v(n) {
		return e.exit("mathFlow"), t(n);
	}
	function y(e, t, n) {
		let i = 0;
		return o(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
		function a(t) {
			return e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), l(t);
		}
		function l(t) {
			return t === 36 ? (i++, e.consume(t), l) : i < c ? n(t) : (e.exit("mathFlowFenceSequence"), o(e, u, "whitespace")(t));
		}
		function u(r) {
			return r === null || s(r) ? (e.exit("mathFlowFence"), t(r)) : n(r);
		}
	}
}
function te(e, t, n) {
	let r = this;
	return i;
	function i(n) {
		return n === null ? t(n) : (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/math-text.js
function ne(e) {
	let t = (e || {}).singleDollarTextMath;
	return t ??= !0, {
		tokenize: n,
		resolve: re,
		previous: ie,
		name: "mathText"
	};
	function n(e, n, r) {
		let i = 0, a, o;
		return c;
		function c(t) {
			return e.enter("mathText"), e.enter("mathTextSequence"), l(t);
		}
		function l(n) {
			return n === 36 ? (e.consume(n), i++, l) : i < 2 && !t ? r(n) : (e.exit("mathTextSequence"), u(n));
		}
		function u(t) {
			return t === null ? r(t) : t === 36 ? (o = e.enter("mathTextSequence"), a = 0, f(t)) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), u) : s(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u) : (e.enter("mathTextData"), d(t));
		}
		function d(t) {
			return t === null || t === 32 || t === 36 || s(t) ? (e.exit("mathTextData"), u(t)) : (e.consume(t), d);
		}
		function f(t) {
			return t === 36 ? (e.consume(t), a++, f) : a === i ? (e.exit("mathTextSequence"), e.exit("mathText"), n(t)) : (o.type = "mathTextData", d(t));
		}
	}
}
function re(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "mathTextData") {
			e[t][1].type = "mathTextPadding", e[n][1].type = "mathTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "mathTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function ie(e) {
	return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
//#endregion
//#region ../node_modules/.pnpm/micromark-extension-math@3.1.0/node_modules/micromark-extension-math/lib/syntax.js
function ae(e) {
	return {
		flow: { 36: Q },
		text: { 36: ne(e) }
	};
}
//#endregion
//#region ../node_modules/.pnpm/remark-math@6.0.0/node_modules/remark-math/lib/index.js
var oe = {};
function se(e) {
	let t = this, n = e || oe, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(ae(n)), a.push(X()), o.push(Z(n));
}
//#endregion
//#region ../node_modules/.pnpm/@streamdown+math@1.0.2_react@19.3.0/node_modules/@streamdown/math/dist/index.js
function ce(e = {}) {
	return {
		name: "katex",
		type: "math",
		remarkPlugin: [se, { singleDollarTextMath: e.singleDollarTextMath ?? !1 }],
		rehypePlugin: [Y, { errorColor: e.errorColor ?? "var(--color-muted-foreground)" }],
		getStyles() {
			return "katex/dist/katex.min.css";
		}
	};
}
var le = ce();
//#endregion
export { le as math };
