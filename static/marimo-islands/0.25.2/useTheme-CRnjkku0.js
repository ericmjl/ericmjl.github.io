import { a as e, r as t } from "./rolldown-runtime-Cb76FRpK.js";
import { a as n, g as r, s as i } from "./button-CvjkwdSk.js";
import { t as a } from "./react-sHtZdjeP.js";
import { t as o } from "./compiler-runtime-CldRdSsv.js";
import { C as s, F as c, L as l, M as u, O as d, P as f, S as p, j as m, v as h } from "./use-restore-focus-BEM7sFWl.js";
import { l as g, t as _ } from "./_baseMerge-BiGRwuqv.js";
//#region ../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/mergeWith.js
var v = g(function(e, t, n, r) {
	_(e, t, n, r);
}), y = /* @__PURE__ */ e(a()), b = typeof window < "u" ? y.useInsertionEffect || y.useLayoutEffect : () => {};
function x(e) {
	let t = y.useRef(S);
	b(() => {
		t.current = e;
	}, [e]);
	let n = y.useRef(null);
	return n.current ||= function() {
		return t.current.apply(this, arguments);
	}, n.current;
}
function S() {
	throw Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.");
}
//#endregion
//#region ../node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs
var C = o(), w = Object.prototype.hasOwnProperty;
function T(e, t, n) {
	for (n of e.keys()) if (E(n, t)) return n;
}
function E(e, t) {
	var n, r, i;
	if (e === t) return !0;
	if (e && t && (n = e.constructor) === t.constructor) {
		if (n === Date) return e.getTime() === t.getTime();
		if (n === RegExp) return e.toString() === t.toString();
		if (n === Array) {
			if ((r = e.length) === t.length) for (; r-- && E(e[r], t[r]););
			return r === -1;
		}
		if (n === Set) {
			if (e.size !== t.size) return !1;
			for (r of e) if (i = r, i && typeof i == "object" && (i = T(t, i), !i) || !t.has(i)) return !1;
			return !0;
		}
		if (n === Map) {
			if (e.size !== t.size) return !1;
			for (r of e) if (i = r[0], i && typeof i == "object" && (i = T(t, i), !i) || !E(r[1], t.get(i))) return !1;
			return !0;
		}
		if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
		else if (n === DataView) {
			if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r););
			return r === -1;
		}
		if (ArrayBuffer.isView(e)) {
			if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r];);
			return r === -1;
		}
		if (!n || typeof e == "object") {
			for (n in r = 0, e) if (w.call(e, n) && ++r && !w.call(t, n) || !(n in t) || !E(e[n], t[n])) return !1;
			return Object.keys(t).length === r;
		}
	}
	return e !== e && t !== t;
}
//#endregion
//#region ../node_modules/.pnpm/jotai@2.20.3_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.3.0_react@19.3.0/node_modules/jotai/esm/vanilla/internals.mjs
var D = /* @__PURE__ */ t({
	INTERNAL_addPendingPromiseToDependency: () => N,
	INTERNAL_buildStoreRev3: () => we,
	INTERNAL_getBuildingBlocksRev3: () => L,
	INTERNAL_getMountedOrPendingDependents: () => P,
	INTERNAL_hasInitialValue: () => O,
	INTERNAL_initializeStoreHooksRev3: () => re,
	INTERNAL_isActuallyWritableAtom: () => k,
	INTERNAL_isAtomStateInitialized: () => A,
	INTERNAL_isPromiseLike: () => M,
	INTERNAL_returnAtomValue: () => j,
	INTERNAL_shouldThrowSynchronously: () => te
});
function O(e) {
	return "init" in e;
}
function k(e) {
	return typeof e.write == "function";
}
function ee(e) {
	return !!e.onMount;
}
function A(e) {
	return "v" in e || "e" in e;
}
function j(e) {
	if ("e" in e) throw e.e;
	return e.v;
}
function M(e) {
	return typeof e?.then == "function";
}
function te(e) {
	if (!(e instanceof Error)) return !1;
	let t = e.name, n = e.message.toLowerCase();
	return (t === "RangeError" || t === "InternalError") && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"));
}
function N(e, t, n) {
	if (!n.p.has(e)) {
		n.p.add(e);
		let r = () => n.p.delete(e);
		t.then(r, r);
	}
}
function P(e, t, n) {
	let r = n.get(e)?.t, i = t.p;
	if (!r?.size) return i;
	if (!i.size) return r;
	let a = new Set(r);
	for (let e of i) a.add(e);
	return a;
}
var ne = () => {
	let e = /* @__PURE__ */ new Set(), t = () => e.forEach((e) => e());
	return t.add = (t) => (e.add(t), () => e.delete(t)), t;
}, F = () => {
	let e = {}, t = /* @__PURE__ */ new WeakMap(), n = (n) => {
		var r, i;
		(r = t.get(e)) == null || r.forEach((e) => e(n)), (i = t.get(n)) == null || i.forEach((e) => e());
	};
	return n.add = (n, r) => {
		let i = n || e, a = t.get(i);
		return a || (a = /* @__PURE__ */ new Set(), t.set(i, a)), a.add(r), () => {
			a.delete(r), a.size || t.delete(i);
		};
	}, n;
};
function re(e) {
	return e.i ||= F(), e.r ||= F(), e.c ||= F(), e.m ||= F(), e.u ||= F(), e.f ||= ne(), e;
}
function ie(e) {
	return !!e.INTERNAL_onInit;
}
var ae = (e, t, n, ...r) => n.read(...r), oe = (e, t, n, ...r) => n.write(...r), se = (e, t, n) => n.INTERNAL_onInit(t), ce = (e, t, n, r) => n.onMount?.call(n, r), le = (e, t, n) => {
	var r;
	let i = e[0], a = i.get(n);
	if (!a) {
		let o = e[6], s = e[9];
		a = {
			d: /* @__PURE__ */ new Map(),
			p: /* @__PURE__ */ new Set(),
			n: 0
		}, i.set(n, a), (r = o.i) == null || r.call(o, n), ie(n) && s(e, t, n);
	}
	return a;
}, ue = (e, t) => {
	let n = e[1], r = e[3], i = e[4], a = e[5], o = e[6], s = e[13];
	if (!o.f && !r.size && !i.size && !a.size) return;
	let c = [], l = (e) => {
		try {
			e();
		} catch (e) {
			c.push(e);
		}
	};
	do {
		o.f && l(o.f);
		let c = /* @__PURE__ */ new Set();
		for (let e of r) {
			let t = n.get(e)?.l;
			if (t) for (let e of t) c.add(e);
		}
		r.clear();
		for (let e of a) c.add(e);
		a.clear();
		for (let e of i) c.add(e);
		i.clear();
		for (let e of c) l(e);
		r.size && s(e, t);
	} while (r.size || a.size || i.size);
	if (c.length) throw AggregateError(c);
}, de = (e, t) => {
	let n = e[1], r = e[2], i = e[3], a = e[11], o = e[14], s = e[17];
	if (!i.size) return;
	let c = [], l = [], u = /* @__PURE__ */ new WeakSet(), d = /* @__PURE__ */ new WeakSet(), f = [], p = [];
	for (let n of i) f.push(n), p.push(a(e, t, n));
	for (; f.length;) {
		let i = f.length - 1, o = f[i], s = p[i];
		if (d.has(o)) {
			f.pop(), p.pop();
			continue;
		}
		if (u.has(o)) {
			r.get(o) === s.n && (c.push(o), l.push(s)), d.add(o), f.pop(), p.pop();
			continue;
		}
		u.add(o);
		for (let r of P(o, s, n)) u.has(r) || (f.push(r), p.push(a(e, t, r)));
	}
	for (let n = c.length - 1; n >= 0; --n) {
		let a = c[n], u = l[n], d = !1;
		for (let e of u.d.keys()) if (e !== a && i.has(e)) {
			d = !0;
			break;
		}
		d && (r.set(a, u.n), o(e, t, a), s(e, t, a)), r.delete(a);
	}
}, fe = (e, t, n) => {
	var r, i;
	let a = e[1], o = e[2], s = e[3], c = e[6], l = e[7], u = e[11], d = e[12], f = e[13], p = e[14], m = e[16], h = e[17], g = e[20], _ = e[26], v = e[28], y = u(e, t, n), b = v[0];
	if (A(y)) {
		if (a.has(n) && o.get(n) !== y.n || y.m === b) return y.m = b, y;
		let r = !1;
		for (let [n, i] of y.d) if (p(e, t, n).n !== i) {
			r = !0;
			break;
		}
		if (!r) return y.m = b, y;
	}
	let x = !0, S = new Set(y.d.keys()), C = () => {
		for (let e of S) y.d.delete(e);
	}, w = () => {
		if (a.has(n)) {
			let r = !s.size;
			h(e, t, n), r && (f(e, t), d(e, t));
		}
	}, T = (r) => {
		var i;
		if (r === n) {
			let n = u(e, t, r);
			if (!A(n)) {
				if (O(r)) g(e, t, r, r.init);
				else throw Error("no atom init");
			}
			return j(n);
		}
		let o = p(e, t, r);
		try {
			return j(o);
		} finally {
			S.delete(r), y.d.set(r, o.n), M(y.v) && N(n, y.v, o), a.has(n) && ((i = a.get(r)) == null || i.t.add(n)), x || w();
		}
	}, E, D, ee = {
		get signal() {
			return E ||= new AbortController(), E.signal;
		},
		get setSelf() {
			return !D && k(n) && (D = (...r) => {
				if (!x) try {
					return m(e, t, n, r);
				} finally {
					f(e, t), d(e, t);
				}
			}), D;
		}
	}, P = y.n, ne = o.get(n) === P;
	try {
		let i = l(e, t, n, T, ee);
		if (g(e, t, n, i), M(i)) {
			_(e, t, i, () => E?.abort());
			let n = () => {
				C(), w();
			};
			i.then(n, n);
		} else C();
		return (r = c.r) == null || r.call(c, n), y.m = b, y;
	} catch (e) {
		if (te(e)) throw e;
		return delete y.v, y.e = e, ++y.n, y.m = b, y;
	} finally {
		x = !1, y.n !== P && ne && (o.set(n, y.n), s.add(n), (i = c.c) == null || i.call(c, n));
	}
}, pe = (e, t, n) => {
	let r = e[1], i = e[2], a = e[11], o = [n];
	for (; o.length;) {
		let n = o.pop(), s = a(e, t, n);
		for (let c of P(n, s, r)) {
			let n = a(e, t, c);
			i.get(c) !== n.n && (i.set(c, n.n), o.push(c));
		}
	}
}, me = (e, t, n, r) => {
	let i = e[3], a = e[6], o = e[8], s = e[11], c = e[12], l = e[13], u = e[14], d = e[15], f = e[16], p = e[17], m = e[20], h = e[28], g = !0, _ = (n) => j(u(e, t, n)), v = (r, ...o) => {
		var u;
		let _ = s(e, t, r);
		try {
			if (r === n) {
				if (!O(r)) throw Error("atom not writable");
				let n = _.n, s = o[0];
				m(e, t, r, s), p(e, t, r), n !== _.n && (++h[0], i.add(r), d(e, t, r), (u = a.c) == null || u.call(a, r));
				return;
			}
			return f(e, t, r, o);
		} finally {
			g || (l(e, t), c(e, t));
		}
	};
	try {
		return o(e, t, n, _, v, ...r);
	} finally {
		g = !1;
	}
}, he = (e, t, n) => {
	var r;
	let i = e[1], a = e[3], o = e[6], s = e[11], c = e[15], l = e[18], u = e[19], d = s(e, t, n), f = i.get(n);
	if (f && d.d.size > 0) {
		for (let [i, u] of d.d) if (!f.d.has(i)) {
			let d = s(e, t, i);
			l(e, t, i).t.add(n), f.d.add(i), u !== d.n && (a.add(i), c(e, t, i), (r = o.c) == null || r.call(o, i));
		}
		for (let r of f.d) d.d.has(r) || (f.d.delete(r), u(e, t, r)?.t.delete(n));
	}
}, ge = (e, t, n) => {
	var r;
	let i = e[1], a = e[4], o = e[6], s = e[10], c = e[11], l = e[12], u = e[13], d = e[14], f = e[16], p = e[18], m = c(e, t, n), h = i.get(n);
	if (!h) {
		d(e, t, n);
		for (let r of m.d.keys()) p(e, t, r).t.add(n);
		h = {
			l: /* @__PURE__ */ new Set(),
			d: new Set(m.d.keys()),
			t: /* @__PURE__ */ new Set()
		}, i.set(n, h), k(n) && ee(n) && a.add(() => {
			let r = !0, i = (...i) => {
				try {
					return f(e, t, n, i);
				} finally {
					r || (u(e, t), l(e, t));
				}
			};
			try {
				let a = s(e, t, n, i);
				a && (h.u = () => {
					r = !0;
					try {
						a();
					} finally {
						r = !1;
					}
				});
			} finally {
				r = !1;
			}
		}), (r = o.m) == null || r.call(o, n);
	}
	return h;
}, _e = (e, t, n) => {
	var r;
	let i = e[1], a = e[5], o = e[6], s = e[11], c = e[19], l = s(e, t, n), u = i.get(n);
	if (!u || u.l.size) return u;
	let d = !1;
	for (let e of u.t) if (i.get(e)?.d.has(n)) {
		d = !0;
		break;
	}
	if (!d) {
		u.u && a.add(u.u), u = void 0, i.delete(n);
		for (let r of l.d.keys()) c(e, t, r)?.t.delete(n);
		(r = o.u) == null || r.call(o, n);
		return;
	}
	return u;
}, ve = (e, t, n, r) => {
	let i = e[11], a = e[27], o = i(e, t, n), s = "v" in o, c = o.v;
	if (M(r)) for (let a of o.d.keys()) N(n, r, i(e, t, a));
	o.v = r, delete o.e, (!s || !Object.is(c, o.v)) && (++o.n, M(c) && a(e, t, c));
}, ye = (e, t, n) => {
	let r = e[14];
	return j(r(e, t, n));
}, be = (e, t, n, ...r) => {
	let i = e[3], a = e[12], o = e[13], s = e[16], c = i.size;
	try {
		return s(e, t, n, r);
	} finally {
		i.size !== c && (o(e, t), a(e, t));
	}
}, xe = (e, t, n, r) => {
	let i = e[12], a = e[13], o = e[18], s = e[19], c = o(e, t, n).l;
	return c.add(r), a(e, t), i(e, t), () => {
		c.delete(r), s(e, t, n), a(e, t), i(e, t);
	};
}, Se = (e, t, n, r) => {
	let i = e[25], a = i.get(n);
	if (!a) {
		a = /* @__PURE__ */ new Set(), i.set(n, a);
		let e = () => i.delete(n);
		n.then(e, e);
	}
	a.add(r);
}, Ce = (e, t, n) => {
	e[25].get(n)?.forEach((e) => e());
}, I = /* @__PURE__ */ new WeakMap();
function L(e) {
	let t = I.get(e), n = t[24];
	return n ? n(t, e) : t;
}
function we(...e) {
	let t = {
		get(e) {
			return r(n, t, e);
		},
		set(e, ...r) {
			return i(n, t, e, ...r);
		},
		sub(e, r) {
			return a(n, t, e, r);
		}
	}, n = [
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new WeakMap(),
		/* @__PURE__ */ new Set(),
		/* @__PURE__ */ new Set(),
		/* @__PURE__ */ new Set(),
		{},
		ae,
		oe,
		se,
		ce,
		le,
		ue,
		de,
		fe,
		pe,
		me,
		he,
		ge,
		_e,
		ve,
		ye,
		be,
		xe,
		void 0,
		/* @__PURE__ */ new WeakMap(),
		Se,
		Ce,
		[0]
	].map((t, n) => e[n] || t);
	I.set(t, Object.freeze(n));
	let r = n[21], i = n[22], a = n[23];
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/jotai@2.20.3_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.3.0_react@19.3.0/node_modules/jotai/esm/vanilla.mjs
var Te = 0;
function R(e, t) {
	let n = `atom${++Te}`, r = { toString() {
		return n;
	} };
	return typeof e == "function" ? r.read = e : (r.init = e, r.read = Ee, r.write = De), t && (r.write = t), r;
}
function Ee(e) {
	return e(this);
}
function De(e, t, n) {
	return t(this, typeof n == "function" ? n(e(this)) : n);
}
function z() {
	return we();
}
var Oe;
function ke() {
	return Oe ||= z(), Oe;
}
//#endregion
//#region ../node_modules/.pnpm/jotai@2.20.3_@babel+core@7.29.0_@babel+template@7.28.6_@types+react@19.3.0_react@19.3.0/node_modules/jotai/esm/react.mjs
var B = (0, y.createContext)(void 0);
function V(e) {
	let t = (0, y.useContext)(B);
	return e?.store || t || ke();
}
function Ae({ children: e, store: t }) {
	let n = (0, y.useRef)(null);
	return t ? (0, y.createElement)(B.Provider, { value: t }, e) : (n.current === null && (n.current = z()), (0, y.createElement)(B.Provider, { value: n.current }, e));
}
var H = (e) => typeof e?.then == "function", U = (e) => {
	e.status || (e.status = "pending", e.then((t) => {
		e.status = "fulfilled", e.value = t;
	}, (t) => {
		e.status = "rejected", e.reason = t;
	}));
}, je = y.use || ((e) => {
	if (e.status === "pending") throw e;
	if (e.status === "fulfilled") return e.value;
	throw e.status === "rejected" ? e.reason : (U(e), e);
}), W = /* @__PURE__ */ new WeakMap(), Me = (e, t, n) => {
	let r = L(e), i = r[26], a = W.get(t);
	return a || (a = new Promise((o, s) => {
		let c = t, l = (e) => (t) => {
			c === e && o(t);
		}, u = (e) => (t) => {
			c === e && s(t);
		}, d = () => {
			try {
				let t = n();
				H(t) ? (W.set(t, a), c = t, t.then(l(t), u(t)), i(r, e, t, d)) : o(t);
			} catch (e) {
				s(e);
			}
		};
		t.then(l(t), u(t)), i(r, e, t, d);
	}), W.set(t, a)), a;
};
function G(e, t) {
	let { delay: n, unstable_promiseStatus: r = !y.use } = t || {}, i = V(t), [[a, o, s], c] = (0, y.useReducer)((t) => {
		let n = i.get(e);
		return Object.is(t[0], n) && t[1] === i && t[2] === e ? t : [
			n,
			i,
			e
		];
	}, void 0, () => [
		i.get(e),
		i,
		e
	]), l = a;
	if ((o !== i || s !== e) && (c(), l = i.get(e)), (0, y.useEffect)(() => {
		let t = i.sub(e, () => {
			if (r) try {
				let t = i.get(e);
				H(t) && U(Me(i, t, () => i.get(e)));
			} catch {}
			if (typeof n == "number") {
				console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), setTimeout(c, n);
				return;
			}
			c();
		});
		return c(), t;
	}, [
		i,
		e,
		n,
		r
	]), (0, y.useDebugValue)(l), H(l)) {
		let t = Me(i, l, () => i.get(e));
		return r && U(t), je(t);
	}
	return l;
}
function K(e, t) {
	let n = V(t);
	return (0, y.useCallback)((...t) => n.set(e, ...t), [n, e]);
}
function Ne(e, t) {
	return [G(e, t), K(e, t)];
}
//#endregion
//#region src/core/islands/utils.ts
function Pe() {
	return !0;
}
//#endregion
//#region src/core/state/jotai.ts
var q = z();
async function Fe(e, t) {
	return t(q.get(e)) ? q.get(e) : new Promise((n) => {
		let r = q.sub(e, () => {
			let i = q.get(e);
			t(i) && (r(), n(i));
		});
	});
}
function Ie(e, t) {
	let n = (0, C.c)(5), r = V(), i, a;
	n[0] !== e || n[1] !== t || n[2] !== r ? (i = () => {
		let n = r.get(e);
		r.sub(e, () => {
			let i = r.get(e);
			t(i, n), n = i;
		});
	}, a = [
		e,
		t,
		r
	], n[0] = e, n[1] = t, n[2] = r, n[3] = i, n[4] = a) : (i = n[3], a = n[4]), (0, y.useEffect)(i, a);
}
var Le = Symbol("sentinel");
function Re(e, t = E) {
	let n = Le;
	return R((r) => {
		let i = r(e);
		return (n === Le || !t(n, i)) && (n = i), n;
	});
}
//#endregion
//#region src/core/config/config-schema.ts
var ze = [
	"pip",
	"uv",
	"rye",
	"poetry",
	"pixi"
], Be = [
	"normal",
	"compact",
	"medium",
	"full",
	"columns"
], Ve = [
	"auto",
	"native",
	"polars",
	"lazy-polars",
	"pandas"
], He = [
	"html",
	"markdown",
	"ipynb"
], Ue = [
	"manual",
	"ask",
	"agent",
	"code_mode"
], J = u({
	api_key: c().optional(),
	base_url: c().optional(),
	project: c().optional()
}).loose(), We = u({
	chat_model: c().nullish(),
	edit_model: c().nullish(),
	autocomplete_model: c().nullish(),
	displayed_models: p(c()).default([]),
	custom_models: p(c()).default([])
}), Ge = d({
	completion: u({
		activate_on_typing: s().prefault(!0),
		signature_hint_on_typing: s().prefault(!1),
		auto_close_pairs: s().prefault(!0),
		copilot: l([s(), h([
			"github",
			"codeium",
			"custom"
		])]).prefault(!1).transform((e) => e === !0 ? "github" : e),
		codeium_api_key: c().nullish()
	}).prefault({}),
	save: d({
		autosave: h(["off", "after_delay"]).prefault("after_delay"),
		autosave_delay: m().nonnegative().transform((e) => Math.max(e, 1e3)).prefault(1e3),
		format_on_save: s().prefault(!1)
	}).prefault({}),
	formatting: d({ line_length: m().nonnegative().prefault(79).transform((e) => Math.min(e, 1e3)) }).prefault({}),
	keymap: d({
		preset: h(["default", "vim"]).prefault("default"),
		overrides: f(c(), c()).prefault({}),
		destructive_delete: s().prefault(!0)
	}).prefault({}),
	runtime: d({
		auto_instantiate: s().prefault(!0),
		on_cell_change: h(["lazy", "autorun"]).prefault("autorun"),
		auto_reload: h([
			"off",
			"lazy",
			"autorun"
		]).prefault("off"),
		reactive_tests: s().prefault(!0),
		watcher_on_save: h(["lazy", "autorun"]).prefault("lazy"),
		default_sql_output: h(Ve).prefault("auto"),
		default_auto_download: p(h(He)).prefault([]),
		show_tracebacks: s().prefault(!1)
	}).prefault({}),
	display: d({
		theme: h([
			"light",
			"dark",
			"system"
		]).prefault("light"),
		code_editor_font_size: m().nonnegative().prefault(14),
		cell_output: h(["above", "below"]).prefault("below"),
		dataframes: h(["rich", "plain"]).prefault("rich"),
		default_table_page_size: m().prefault(10),
		default_table_max_columns: m().prefault(50),
		default_width: h(Be).prefault("medium").transform((e) => e === "normal" ? "compact" : e),
		locale: c().nullable().optional(),
		reference_highlighting: s().prefault(!0),
		code_lens: s().prefault(!0)
	}).prefault({}),
	package_management: d({ manager: h(ze).prefault("pip") }).prefault({}),
	ai: d({
		enabled: s().prefault(!0),
		rules: c().prefault(""),
		max_tokens: m().int().positive().nullable().optional(),
		mode: h(Ue).prefault("manual"),
		inline_tooltip: s().prefault(!1),
		allow_provider_config: s().prefault(!0),
		open_ai: J.optional(),
		github: J.optional(),
		anthropic: J.optional(),
		google: J.optional(),
		ollama: J.optional(),
		openrouter: J.optional(),
		wandb: J.optional(),
		opencode_go: J.optional(),
		open_ai_compatible: J.optional(),
		azure: J.optional(),
		bedrock: d({
			region_name: c().optional(),
			profile_name: c().optional(),
			aws_access_key_id: c().optional(),
			aws_secret_access_key: c().optional()
		}).optional(),
		custom_providers: f(c(), J).prefault({}),
		models: We.prefault({
			displayed_models: [],
			custom_models: []
		})
	}).prefault({}),
	experimental: d({
		markdown: s().optional(),
		rtc: s().optional()
	}).prefault(() => ({})),
	server: d({
		disable_file_downloads: s().optional(),
		transport: h(["websocket", "sse"]).optional()
	}).prefault(() => ({})),
	diagnostics: d({
		enabled: s().optional(),
		sql_linter: s().optional()
	}).prefault(() => ({})),
	file_browser: d({ folders: p(u({
		path: c(),
		name: c().optional()
	})).optional() }).optional().prefault({}),
	sharing: d({
		html: s().optional(),
		wasm: s().optional(),
		molab: s().optional()
	}).optional(),
	mcp: d({ presets: p(h(["marimo", "context7"])).optional() }).optional().prefault({})
}).partial().prefault(() => ({
	completion: {},
	save: {},
	formatting: {},
	keymap: {},
	runtime: {},
	display: {},
	diagnostics: {},
	file_browser: {},
	experimental: {},
	server: {},
	ai: {},
	package_management: {},
	mcp: {}
})), Ke = c(), qe = h(Ve).prefault("auto"), Y = u({
	width: h(Be).prefault("medium").transform((e) => e === "normal" ? "compact" : e),
	app_title: Ke.nullish(),
	css_file: c().nullish(),
	html_head_file: c().nullish(),
	auto_download: p(h(He)).prefault([]),
	sql_output: qe
}).prefault(() => ({
	width: "medium",
	auto_download: [],
	sql_output: "auto"
}));
function Je(e) {
	try {
		return Y.parse(e);
	} catch (e) {
		return r.error(`Marimo got an unexpected value in the configuration file: ${e}`), Y.parse({});
	}
}
function Ye() {
	return Ge.parse({
		completion: {},
		save: {},
		formatting: {},
		keymap: {},
		runtime: {},
		display: {},
		diagnostics: {},
		file_browser: {},
		experimental: {},
		server: {},
		ai: {},
		package_management: {},
		mcp: {}
	});
}
//#endregion
//#region src/core/config/config.ts
function Xe(...e) {
	return v({}, ...e, (e, t) => {
		if (Array.isArray(t)) return [...t];
	});
}
var X = R(Ye()), Ze = R({}), Z = R((e) => {
	let t = e(Ze);
	return Xe(e(X), t);
}), Qe = R((e) => e(Z).runtime.auto_instantiate), $e = R((e) => e(Z).keymap.overrides ?? {}), et = R(i());
R((e) => {
	let t = e($e), r = e(et);
	return new n(t, { platform: r });
}), R((e) => e(Z).save), R((e) => e(Z).server.transport === "sse" ? "sse" : "websocket"), R((e) => e(Z).ai), R((e) => e(Z).completion), R((e) => e(Z).keymap.preset);
function tt() {
	let e = (0, C.c)(3), t = G(Z), n = K(X), r;
	return e[0] !== t || e[1] !== n ? (r = [t, n], e[0] = t, e[1] = n, e[2] = r) : r = e[2], r;
}
function nt() {
	return q.get(Z);
}
R((e) => ot(e(Z)));
var rt = R((e) => st(e(Z))), it = R((e) => ct(e(Z)));
R((e) => e(Z).display.code_editor_font_size);
var at = R((e) => e(Z).display.locale);
function ot(e) {
	return e.ai?.enabled !== !1;
}
function st(e) {
	return !!e.ai?.models?.chat_model || !!e.ai?.models?.edit_model || !!e.ai?.models?.autocomplete_model;
}
function ct(e) {
	return ot(e) && st(e);
}
var lt = R(Je({}));
R((e) => e(lt).width), R((e) => {
	let t = e(Z), n = t.snippets?.custom_paths ?? [], r = t.snippets?.include_default_snippets;
	return n.length > 0 || r === !0;
}), R((e) => e(Z).server?.disable_file_downloads ?? !1);
//#endregion
//#region src/core/constants.ts
var ut = {
	githubPage: "https://github.com/marimo-team/marimo",
	releasesPage: "https://github.com/marimo-team/marimo/releases",
	issuesPage: "https://github.com/marimo-team/marimo/issues",
	bugReportUrl: "https://github.com/marimo-team/marimo/issues/new?template=bug_report.yaml",
	feedbackForm: "https://marimo.io/feedback",
	discordLink: "https://marimo.io/discord?ref=notebook",
	docsPage: "https://docs.marimo.io",
	youtube: "https://www.youtube.com/@marimo-team",
	molab: "https://molab.marimo.io"
}, dt = {
	showCode: "show-code",
	includeCode: "include-code",
	sessionId: "session_id",
	kiosk: "kiosk",
	vscode: "vscode",
	filePath: "file",
	accessToken: "access_token",
	viewAs: "view-as",
	showChrome: "show-chrome",
	theme: "theme"
}, ft = { outputArea: "output-area" }, pt = [
	"light",
	"dark",
	"system"
];
function mt() {
	if (typeof window > "u") return;
	let e = new URLSearchParams(window.location.search).get(dt.theme);
	return pt.includes(e) ? e : void 0;
}
var ht = R((e) => {
	if (Pe()) {
		if (document.body.classList.contains("dark-mode") || document.body.classList.contains("dark") || document.body.dataset.theme === "dark" || document.body.dataset.mode === "dark" || $() === "dark") return "dark";
		let e = window.getComputedStyle(document.body), t = e.getPropertyValue("color-scheme").trim();
		if (t) return t.includes("dark") ? "dark" : "light";
		let n = e.getPropertyValue("background-color").match(/\d+/g);
		if (n) {
			let [e, t, r] = n.map(Number);
			return (e * 299 + t * 587 + r * 114) / 1e3 < 128 ? "dark" : "light";
		}
		return "light";
	}
	return mt() ?? e(Z).display.theme;
}), Q = R(!1);
function gt() {
	if (typeof window > "u" || !window.matchMedia) return;
	let e = window.matchMedia("(prefers-color-scheme: dark)");
	q.set(Q, e.matches), e.addEventListener("change", (e) => {
		q.set(Q, e.matches);
	});
}
gt();
function $() {
	switch (document.body.dataset.vscodeThemeKind) {
		case "vscode-dark": return "dark";
		case "vscode-high-contrast": return "dark";
		case "vscode-light": return "light";
	}
}
var _t = R($());
function vt() {
	let e = new MutationObserver(() => {
		let e = $();
		q.set(_t, e);
	});
	return e.observe(document.body, {
		attributes: !0,
		attributeFilter: ["data-vscode-theme-kind"]
	}), () => e.disconnect();
}
vt();
var yt = R((e) => {
	let t = e(ht), n = e(_t);
	if (n !== void 0) return n;
	let r = e(Q);
	return t === "system" ? r ? "dark" : "light" : t;
});
function bt() {
	let e = (0, C.c)(3), t;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { store: q }, e[0] = t) : t = e[0];
	let n = G(yt, t), r;
	return e[1] === n ? r = e[2] : (r = { theme: n }, e[1] = n, e[2] = r), r;
}
//#endregion
export { x as A, G as C, z as D, R as E, D as O, Ne as S, V as T, q as _, dt as a, Pe as b, Qe as c, Xe as d, Z as f, Re as g, Y as h, ut as i, E as k, nt as l, X as m, bt as n, it as o, tt as p, ft as r, rt as s, yt as t, at as u, Ie as v, K as w, Ae as x, Fe as y };
