import { n as e } from "./init-Ix4LXMlt.js";
//#region ../node_modules/.pnpm/internmap@2.0.3/node_modules/internmap/src/index.js
var t = class extends Map {
	constructor(e, t = o) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(r(this, e));
	}
	has(e) {
		return super.has(r(this, e));
	}
	set(e, t) {
		return super.set(i(this, e), t);
	}
	delete(e) {
		return super.delete(a(this, e));
	}
}, n = class extends Set {
	constructor(e, t = o) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let t of e) this.add(t);
	}
	has(e) {
		return super.has(r(this, e));
	}
	add(e) {
		return super.add(i(this, e));
	}
	delete(e) {
		return super.delete(a(this, e));
	}
};
function r({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function i({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function a({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function o(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js
var s = Symbol("implicit");
function c() {
	var n = new t(), r = [], i = [], a = s;
	function o(e) {
		let t = n.get(e);
		if (t === void 0) {
			if (a !== s) return a;
			n.set(e, t = r.push(e) - 1);
		}
		return i[t % i.length];
	}
	return o.domain = function(e) {
		if (!arguments.length) return r.slice();
		r = [], n = new t();
		for (let t of e) n.has(t) || n.set(t, r.push(t) - 1);
		return o;
	}, o.range = function(e) {
		return arguments.length ? (i = Array.from(e), o) : i.slice();
	}, o.unknown = function(e) {
		return arguments.length ? (a = e, o) : a;
	}, o.copy = function() {
		return c(r, i).unknown(a);
	}, e.apply(o, arguments), o;
}
//#endregion
export { c as n, n as r, s as t };
