import { a as e, t } from "./rolldown-runtime-Cb76FRpK.js";
//#region ../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHas.js
var n = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e, t) {
		return e != null && n.call(e, t);
	}
	t.exports = r;
})), r = /* @__PURE__ */ t(((e, t) => {
	t.exports = Array.isArray;
})), i = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), a = /* @__PURE__ */ t(((e, t) => {
	var n = i(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), o = /* @__PURE__ */ t(((e, t) => {
	t.exports = a().Symbol;
})), s = /* @__PURE__ */ t(((e, t) => {
	var n = o(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, s = n ? n.toStringTag : void 0;
	function c(e) {
		var t = i.call(e, s), n = e[s];
		try {
			e[s] = void 0;
			var r = !0;
		} catch {}
		var o = a.call(e);
		return r && (t ? e[s] = n : delete e[s]), o;
	}
	t.exports = c;
})), c = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), l = /* @__PURE__ */ t(((e, t) => {
	var n = o(), r = s(), i = c(), a = "[object Null]", l = "[object Undefined]", u = n ? n.toStringTag : void 0;
	function d(e) {
		return e == null ? e === void 0 ? l : a : u && u in Object(e) ? r(e) : i(e);
	}
	t.exports = d;
})), u = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), d = /* @__PURE__ */ t(((e, t) => {
	var n = l(), r = u(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), f = /* @__PURE__ */ t(((e, t) => {
	var n = r(), i = d(), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
	function s(e, t) {
		if (n(e)) return !1;
		var r = typeof e;
		return r == "number" || r == "symbol" || r == "boolean" || e == null || i(e) ? !0 : o.test(e) || !a.test(e) || t != null && e in Object(t);
	}
	t.exports = s;
})), p = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), m = /* @__PURE__ */ t(((e, t) => {
	var n = l(), r = p(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), h = /* @__PURE__ */ t(((e, t) => {
	t.exports = a()["__core-js_shared__"];
})), g = /* @__PURE__ */ t(((e, t) => {
	var n = h(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), _ = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), ee = /* @__PURE__ */ t(((e, t) => {
	var n = m(), r = g(), i = p(), a = _(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function h(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = h;
})), te = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), v = /* @__PURE__ */ t(((e, t) => {
	var n = ee(), r = te();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), y = /* @__PURE__ */ t(((e, t) => {
	t.exports = v()(Object, "create");
})), ne = /* @__PURE__ */ t(((e, t) => {
	var n = y();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), re = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), ie = /* @__PURE__ */ t(((e, t) => {
	var n = y(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), b = /* @__PURE__ */ t(((e, t) => {
	var n = y(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), ae = /* @__PURE__ */ t(((e, t) => {
	var n = y(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), oe = /* @__PURE__ */ t(((e, t) => {
	var n = ne(), r = re(), i = ie(), a = b(), o = ae();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), se = /* @__PURE__ */ t(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), x = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), S = /* @__PURE__ */ t(((e, t) => {
	var n = x();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), C = /* @__PURE__ */ t(((e, t) => {
	var n = S(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), w = /* @__PURE__ */ t(((e, t) => {
	var n = S();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), ce = /* @__PURE__ */ t(((e, t) => {
	var n = S();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), le = /* @__PURE__ */ t(((e, t) => {
	var n = S();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), T = /* @__PURE__ */ t(((e, t) => {
	var n = se(), r = C(), i = w(), a = ce(), o = le();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), E = /* @__PURE__ */ t(((e, t) => {
	t.exports = v()(a(), "Map");
})), ue = /* @__PURE__ */ t(((e, t) => {
	var n = oe(), r = T(), i = E();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), de = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), D = /* @__PURE__ */ t(((e, t) => {
	var n = de();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), fe = /* @__PURE__ */ t(((e, t) => {
	var n = D();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), pe = /* @__PURE__ */ t(((e, t) => {
	var n = D();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), me = /* @__PURE__ */ t(((e, t) => {
	var n = D();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), O = /* @__PURE__ */ t(((e, t) => {
	var n = D();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), k = /* @__PURE__ */ t(((e, t) => {
	var n = ue(), r = fe(), i = pe(), a = me(), o = O();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), A = /* @__PURE__ */ t(((e, t) => {
	var n = k(), r = "Expected a function";
	function i(e, t) {
		if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(r);
		var a = function() {
			var n = arguments, r = t ? t.apply(this, n) : n[0], i = a.cache;
			if (i.has(r)) return i.get(r);
			var o = e.apply(this, n);
			return a.cache = i.set(r, o) || i, o;
		};
		return a.cache = new (i.Cache || n)(), a;
	}
	i.Cache = n, t.exports = i;
})), j = /* @__PURE__ */ t(((e, t) => {
	var n = A(), r = 500;
	function i(e) {
		var t = n(e, function(e) {
			return i.size === r && i.clear(), e;
		}), i = t.cache;
		return t;
	}
	t.exports = i;
})), M = /* @__PURE__ */ t(((e, t) => {
	var n = j(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g;
	t.exports = n(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(r, function(e, n, r, a) {
			t.push(r ? a.replace(i, "$1") : n || e);
		}), t;
	});
})), N = /* @__PURE__ */ t(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	t.exports = n;
})), P = /* @__PURE__ */ t(((e, t) => {
	var n = o(), i = N(), a = r(), s = d(), c = 1 / 0, l = n ? n.prototype : void 0, u = l ? l.toString : void 0;
	function f(e) {
		if (typeof e == "string") return e;
		if (a(e)) return i(e, f) + "";
		if (s(e)) return u ? u.call(e) : "";
		var t = e + "";
		return t == "0" && 1 / e == -c ? "-0" : t;
	}
	t.exports = f;
})), F = /* @__PURE__ */ t(((e, t) => {
	var n = P();
	function r(e) {
		return e == null ? "" : n(e);
	}
	t.exports = r;
})), I = /* @__PURE__ */ t(((e, t) => {
	var n = r(), i = f(), a = M(), o = F();
	function s(e, t) {
		return n(e) ? e : i(e, t) ? [e] : a(o(e));
	}
	t.exports = s;
})), L = /* @__PURE__ */ t(((e, t) => {
	var n = l(), r = u(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), R = /* @__PURE__ */ t(((e, t) => {
	var n = L(), r = u(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), z = /* @__PURE__ */ t(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), B = /* @__PURE__ */ t(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), V = /* @__PURE__ */ t(((e, t) => {
	var n = d(), r = 1 / 0;
	function i(e) {
		if (typeof e == "string" || n(e)) return e;
		var t = e + "";
		return t == "0" && 1 / e == -r ? "-0" : t;
	}
	t.exports = i;
})), H = /* @__PURE__ */ t(((e, t) => {
	var n = I(), i = R(), a = r(), o = z(), s = B(), c = V();
	function l(e, t, r) {
		t = n(t, e);
		for (var l = -1, u = t.length, d = !1; ++l < u;) {
			var f = c(t[l]);
			if (!(d = e != null && r(e, f))) break;
			e = e[f];
		}
		return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && s(u) && o(f, u) && (a(e) || i(e)));
	}
	t.exports = l;
})), he = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var r = n(), i = H();
	function a(e, t) {
		return e != null && i(e, t, r);
	}
	t.exports = a;
})))(), 1);
function U(e = "This should not happen") {
	throw Error(e);
}
function ge(e, t = "Assertion failed") {
	if (!e) return U(t);
}
function W(e, t) {
	return U(t ?? "Hell froze over");
}
function _e(e, t) {
	try {
		return e();
	} catch {
		return t;
	}
}
var G = Object.prototype.hasOwnProperty;
function K(e, t) {
	let n, r;
	if (e === t) return !0;
	if (e && t && (n = e.constructor) === t.constructor) {
		if (n === Date) return e.getTime() === t.getTime();
		if (n === RegExp) return e.toString() === t.toString();
		if (n === Array) {
			if ((r = e.length) === t.length) for (; r-- && K(e[r], t[r]););
			return r === -1;
		}
		if (!n || typeof e == "object") {
			for (n in r = 0, e) if (G.call(e, n) && ++r && !G.call(t, n) || !(n in t) || !K(e[n], t[n])) return !1;
			return Object.keys(t).length === r;
		}
	}
	return e !== e && t !== t;
}
//#endregion
//#region ../node_modules/.pnpm/@glideapps+glide-data-grid@6.0.4-alpha24_lodash@4.17.21_marked@15.0.12_react-dom@19.3.0_aca11a353ce3b112922852200b9c160f/node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js
var q;
(function(e) {
	e.Uri = "uri", e.Text = "text", e.Image = "image", e.RowID = "row-id", e.Number = "number", e.Bubble = "bubble", e.Boolean = "boolean", e.Loading = "loading", e.Markdown = "markdown", e.Drilldown = "drilldown", e.Protected = "protected", e.Custom = "custom";
})(q ||= {});
var J;
(function(e) {
	e.HeaderRowID = "headerRowID", e.HeaderCode = "headerCode", e.HeaderNumber = "headerNumber", e.HeaderString = "headerString", e.HeaderBoolean = "headerBoolean", e.HeaderAudioUri = "headerAudioUri", e.HeaderVideoUri = "headerVideoUri", e.HeaderEmoji = "headerEmoji", e.HeaderImage = "headerImage", e.HeaderUri = "headerUri", e.HeaderPhone = "headerPhone", e.HeaderMarkdown = "headerMarkdown", e.HeaderDate = "headerDate", e.HeaderTime = "headerTime", e.HeaderEmail = "headerEmail", e.HeaderReference = "headerReference", e.HeaderIfThenElse = "headerIfThenElse", e.HeaderSingleValue = "headerSingleValue", e.HeaderLookup = "headerLookup", e.HeaderTextTemplate = "headerTextTemplate", e.HeaderMath = "headerMath", e.HeaderRollup = "headerRollup", e.HeaderJoinStrings = "headerJoinStrings", e.HeaderSplitString = "headerSplitString", e.HeaderGeoDistance = "headerGeoDistance", e.HeaderArray = "headerArray", e.RowOwnerOverlay = "rowOwnerOverlay", e.ProtectedColumnOverlay = "protectedColumnOverlay";
})(J ||= {});
var Y;
(function(e) {
	e.Triangle = "triangle", e.Dots = "dots";
})(Y ||= {});
function ve(e) {
	return "width" in e && typeof e.width == "number";
}
async function ye(e) {
	return typeof e == "object" ? e : await e();
}
function X(e) {
	return e.kind !== q.Loading && e.kind !== q.Bubble && e.kind !== q.RowID && e.kind !== q.Protected && e.kind !== q.Drilldown;
}
function be(e) {
	return e.kind === Q.Marker || e.kind === Q.NewRow;
}
function Z(e) {
	if (!X(e) || e.kind === q.Image) return !1;
	switch (e.kind) {
		case q.Text:
		case q.Number:
		case q.Markdown:
		case q.Uri:
		case q.Custom:
		case q.Boolean: return e.readonly !== !0;
		default: W(e, "A cell was passed with an invalid kind");
	}
}
function xe(e) {
	return (0, he.default)(e, "editor");
}
function Se(e) {
	return !(e.readonly ?? !1);
}
var Q;
(function(e) {
	e.NewRow = "new-row", e.Marker = "marker";
})(Q ||= {});
var Ce = {
	shape: "square",
	size: 4,
	offsetX: -2,
	offsetY: -2,
	outline: 0
};
function $(e) {
	if (e.length === 0) return [];
	let t = [...e], n = [];
	t.sort(function(e, t) {
		return e[0] - t[0];
	}), n.push([...t[0]]);
	for (let e of t.slice(1)) {
		let t = n[n.length - 1];
		t[1] < e[0] ? n.push([...e]) : t[1] < e[1] && (t[1] = e[1]);
	}
	return n;
}
var we, Te = class e {
	items;
	constructor(e) {
		this.items = e;
	}
	static create = (t) => new e($(t));
	static empty = () => we ??= new e([]);
	static fromSingleSelection = (t) => e.empty().add(t);
	static fromArray = (t) => {
		if (t.length === 0) return e.empty();
		let n = $(t.map((e) => [e, e + 1]));
		return new e(n);
	};
	offset(t) {
		if (t === 0) return this;
		let n = this.items.map((e) => [e[0] + t, e[1] + t]);
		return new e(n);
	}
	add(t) {
		let n = typeof t == "number" ? [t, t + 1] : t, r = $([...this.items, n]);
		return new e(r);
	}
	remove(t) {
		let n = [...this.items], r = typeof t == "number" ? t : t[0], i = typeof t == "number" ? t + 1 : t[1];
		for (let [e, t] of n.entries()) {
			let [a, o] = t;
			if (a <= i && r <= o) {
				let t = [];
				a < r && t.push([a, r]), i < o && t.push([i, o]), n.splice(e, 1, ...t);
			}
		}
		return new e(n);
	}
	first() {
		if (this.items.length !== 0) return this.items[0][0];
	}
	last() {
		if (this.items.length !== 0) return this.items.slice(-1)[0][1] - 1;
	}
	hasIndex(e) {
		for (let t = 0; t < this.items.length; t++) {
			let [n, r] = this.items[t];
			if (e >= n && e < r) return !0;
		}
		return !1;
	}
	hasAll(e) {
		for (let t = e[0]; t < e[1]; t++) if (!this.hasIndex(t)) return !1;
		return !0;
	}
	some(e) {
		for (let t of this) if (e(t)) return !0;
		return !1;
	}
	equals(e) {
		if (e === this) return !0;
		if (e.items.length !== this.items.length) return !1;
		for (let t = 0; t < this.items.length; t++) {
			let n = e.items[t], r = this.items[t];
			if (n[0] !== r[0] || n[1] !== r[1]) return !1;
		}
		return !0;
	}
	toArray() {
		let e = [];
		for (let [t, n] of this.items) for (let r = t; r < n; r++) e.push(r);
		return e;
	}
	get length() {
		let e = 0;
		for (let [t, n] of this.items) e += n - t;
		return e;
	}
	*[Symbol.iterator]() {
		for (let [e, t] of this.items) for (let n = e; n < t; n++) yield n;
	}
};
//#endregion
export { m as A, I as C, x as D, T as E, l as F, o as I, a as L, f as M, d as N, v as O, u as P, i as R, R as S, E as T, _e as _, Y as a, B as b, X as c, Z as d, ve as f, K as g, W as h, J as i, p as j, _ as k, be as l, ge as m, Ce as n, Q as o, ye as p, q as r, Se as s, Te as t, xe as u, H as v, k as w, z as x, V as y, r as z };
