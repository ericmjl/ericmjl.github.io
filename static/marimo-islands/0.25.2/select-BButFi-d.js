import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t, h as n, m as r, p as i, r as a, u as o } from "./button-CvjkwdSk.js";
import { t as s } from "./react-sHtZdjeP.js";
import { t as c } from "./compiler-runtime-CldRdSsv.js";
import { c as l, h as u, l as d, p as f, s as p, u as m } from "./tooltip-BO1REbqs.js";
import { t as h } from "./check-EDwSwP89.js";
import { t as g } from "./react-dom-DUmH0GXv.js";
import { t as _ } from "./jsx-runtime-3BD1kT0s.js";
import { Ct as v, Q as y, St as b, X as x, Y as S, _t as C, bt as ee, ct as te, dt as w, ft as T, ht as E, lt as D, pt as O, vt as k, wt as A, xt as j, yt as ne } from "./use-restore-focus-BEM7sFWl.js";
import { t as M } from "./invariant-DLmrl-hA.js";
var N = u("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), P = u("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), F = u("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), I = /* @__PURE__ */ e(g(), 1), L = /* @__PURE__ */ e(s(), 1), R = _(), z = Object.defineProperty, B = (e, t) => z(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function V(e) {
	let t = e + "CollectionProvider", [n, r] = v(t), [a, s] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), c = /* @__PURE__ */ B((e) => {
		let { scope: t, children: n } = e, r = L.useRef(null), i = L.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, R.jsx)(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	c.displayName = t;
	let l = e + "CollectionSlot", u = o(l), d = L.forwardRef((e, t) => {
		let { scope: n, children: r } = e, a = s(l, n), o = i(t, a.collectionRef);
		return /* @__PURE__ */ (0, R.jsx)(u, {
			ref: o,
			children: r
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = o(f), h = L.forwardRef((e, t) => {
		let { scope: n, children: r, ...a } = e, o = L.useRef(null), c = i(t, o), l = s(f, n);
		return L.useEffect(() => (l.itemMap.set(o, {
			ref: o,
			...a
		}), () => void l.itemMap.delete(o))), /* @__PURE__ */ (0, R.jsx)(m, {
			[p]: "",
			ref: c,
			children: r
		});
	});
	h.displayName = f;
	function g(t) {
		let n = s(e + "CollectionConsumer", t);
		return L.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${p}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return B(g, "useCollection"), [
		{
			Provider: c,
			Slot: d,
			ItemSlot: h
		},
		g,
		r
	];
}
B(V, "createCollection");
var re = /* @__PURE__ */ new WeakMap(), H = class e extends Map {
	static {
		B(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], re.set(this, !0);
	}
	set(e, t) {
		return re.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = W(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
		if (s === this.size || r && s === this.size - 1 || s === -1) return this.set(t, n), this;
		let c = this.size + +!r;
		a < 0 && o++;
		let l = [...this.#e], u, d = !1;
		for (let e = o; e < c; e++) if (o === e) {
			let i = l[e];
			l[e] === t && (i = l[e + 1]), r && this.delete(t), u = this.get(i), this.set(t, n);
		} else {
			!d && l[e - 1] === t && (d = !0);
			let n = l[d ? e : e - 1], r = u;
			u = this.get(n), this.delete(n), this.set(n, r);
		}
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r + 1, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = U(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = U(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return U(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = 0, i = n ?? this.at(0);
		for (let n of this) i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [
			i,
			n,
			r,
			this
		]), r++;
		return i;
	}
	reduceRight(...e) {
		let [t, n] = e, r = n ?? this.at(-1);
		for (let n = this.size - 1; n >= 0; n--) {
			let i = this.at(n);
			r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [
				r,
				i,
				n,
				this
			]);
		}
		return r;
	}
	toSorted(t) {
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e(), i = this.size - 1;
		if (t === void 0) return r;
		t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1);
		for (let e = t; e <= i; e++) {
			let t = this.keyAt(e), n = this.get(t);
			r.set(t, n);
		}
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function U(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ie(e, t);
	return n === -1 ? void 0 : e[n];
}
B(U, "at");
function ie(e, t) {
	let n = e.length, r = W(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
B(ie, "toSafeIndex");
function W(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
B(W, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function ae(e) {
	let t = e + "CollectionProvider", [n, r] = v(t), [a, s] = n(t, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new H(),
		setItemMap: /* @__PURE__ */ B(() => void 0, "setItemMap")
	}), c = /* @__PURE__ */ B(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, R.jsx)(u, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, R.jsx)(l, { ...t }), "CollectionProvider");
	c.displayName = t;
	let l = /* @__PURE__ */ B((e) => {
		let t = _();
		return /* @__PURE__ */ (0, R.jsx)(u, {
			...e,
			state: t
		});
	}, "CollectionInit");
	l.displayName = t + "Init";
	let u = /* @__PURE__ */ B((e) => {
		let { scope: t, children: n, state: r } = e, o = L.useRef(null), [s, c] = L.useState(null), l = i(o, c), [u, d] = r;
		return L.useEffect(() => {
			if (!s) return;
			let e = le(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ (0, R.jsx)(a, {
			scope: t,
			itemMap: u,
			setItemMap: d,
			collectionRef: l,
			collectionRefObject: o,
			collectionElement: s,
			children: n
		});
	}, "CollectionProviderImpl");
	u.displayName = t + "Impl";
	let d = e + "CollectionSlot", f = o(d), p = L.forwardRef((e, t) => {
		let { scope: n, children: r } = e, a = s(d, n), o = i(t, a.collectionRef);
		return /* @__PURE__ */ (0, R.jsx)(f, {
			ref: o,
			children: r
		});
	});
	p.displayName = d;
	let m = e + "CollectionItemSlot", h = o(m), g = L.forwardRef((e, t) => {
		let { scope: n, children: r, ...a } = e, o = L.useRef(null), [c, l] = L.useState(null), u = i(t, o, l), { setItemMap: d } = s(m, n), f = L.useRef(a);
		oe(f.current, a) || (f.current = a);
		let p = f.current;
		return L.useEffect(() => {
			let e = p;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(ce) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(ce)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new H(e)));
			};
		}, [
			c,
			p,
			d
		]), /* @__PURE__ */ (0, R.jsx)(h, {
			"data-radix-collection-item": "",
			ref: u,
			children: r
		});
	});
	g.displayName = m;
	function _() {
		return L.useState(new H());
	}
	B(_, "useInitCollection");
	function y(t) {
		let { itemMap: n } = s(e + "CollectionConsumer", t);
		return n;
	}
	return B(y, "useCollection"), [{
		Provider: c,
		Slot: p,
		ItemSlot: g
	}, {
		createCollectionScope: r,
		useCollection: y,
		useInitCollection: _
	}];
}
B(ae, "createCollection");
function oe(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
B(oe, "shallowEqual");
function se(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
B(se, "isElementPreceding");
function ce(e, t) {
	return !e[1].element || !t[1].element ? 0 : se(e[1].element, t[1].element) ? -1 : 1;
}
B(ce, "sortByDocumentPosition");
function le(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
B(le, "getChildListObserver");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-direction@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var ue = Object.defineProperty, de = (e, t) => ue(e, "name", {
	value: t,
	configurable: !0
}), fe = L.createContext(void 0);
function pe(e) {
	let t = L.useContext(fe);
	return e || t || "ltr";
}
de(pe, "useDirection");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var me = Object.defineProperty, he = (e, t) => me(e, "name", {
	value: t,
	configurable: !0
});
function ge(e) {
	let t = L.useRef({
		value: e,
		previous: e
	});
	return L.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
he(ge, "usePrevious");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+number@1.1.3/node_modules/@radix-ui/number/dist/index.mjs
var _e = Object.defineProperty, ve = (e, t) => _e(e, "name", {
	value: t,
	configurable: !0
});
function ye(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
ve(ye, "clamp");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-select@2.3.7_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_c077d25a874f27141804d1923df5095a/node_modules/@radix-ui/react-select/dist/index.mjs
var be = Object.defineProperty, G = (e, t) => be(e, "name", {
	value: t,
	configurable: !0
}), xe = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Se = [" ", "Enter"], K = "Select", [Ce, we, Te] = /* @__PURE__ */ V(K), [q, Ee] = v(K, [Te, m]), De = m(), [Oe, J] = q(K), [ke, Ae] = q(K);
function je(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: f, disabled: p, required: m, form: h, internal_do_not_use_render: g } = e, _ = De(t), [v, y] = L.useState(null), [b, x] = L.useState(null), [S, C] = L.useState(!1), te = pe(l), [w, T] = ee({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: K
	}), [E, D] = ee({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: K
	}), O = L.useRef(null), A = L.useRef(E);
	L.useEffect(() => {
		let e = h ? v?.ownerDocument.getElementById(h) : v?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ G(() => D(A.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		h,
		v,
		D
	]);
	let j = !v || !!h || !!v.closest("form"), [ne, M] = L.useState(/* @__PURE__ */ new Set()), N = k(), P = Array.from(ne).map((e) => e.props.value).join(";"), F = L.useCallback((e) => {
		M((t) => new Set(t).add(e));
	}, []), I = L.useCallback((e) => {
		M((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), z = {
		required: m,
		trigger: v,
		onTriggerChange: y,
		valueNode: b,
		onValueNodeChange: x,
		valueNodeHasChildren: S,
		onValueNodeHasChildrenChange: C,
		contentId: N,
		value: E,
		onValueChange: D,
		open: w,
		onOpenChange: T,
		dir: te,
		triggerPointerDownPosRef: O,
		disabled: p,
		name: u,
		autoComplete: f,
		form: h,
		nativeOptions: ne,
		nativeSelectKey: P,
		isFormControl: j
	};
	return /* @__PURE__ */ (0, R.jsx)(d, {
		..._,
		children: /* @__PURE__ */ (0, R.jsx)(Oe, {
			scope: t,
			...z,
			children: /* @__PURE__ */ (0, R.jsx)(Ce.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, R.jsx)(ke, {
					scope: t,
					onNativeOptionAdd: F,
					onNativeOptionRemove: I,
					children: yt(g) ? g(z) : n
				})
			})
		})
	});
}
G(je, "SelectProvider");
var Me = /* @__PURE__ */ G((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, R.jsx)(je, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [n, e ? /* @__PURE__ */ (0, R.jsx)(vt, { __scopeSelect: t }) : null] })
	});
}, "Select"), Ne = "SelectTrigger", Pe = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, disabled: r = !1, ...a } = e, o = De(n), s = J(Ne, n), c = s.disabled || r, l = i(t, s.onTriggerChange), u = we(n), d = L.useRef("touch"), [f, m, h] = bt((e) => {
		let t = u().filter((e) => !e.disabled), n = xt(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), g = /* @__PURE__ */ G((e) => {
		c || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, R.jsx)(p, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, R.jsx)(A.button, {
			type: "button",
			role: "combobox",
			"aria-controls": s.open ? s.contentId : void 0,
			"aria-expanded": s.open,
			"aria-required": s.required,
			"aria-autocomplete": "none",
			dir: s.dir,
			"data-state": s.open ? "open" : "closed",
			disabled: c,
			"data-disabled": c ? "" : void 0,
			"data-placeholder": Q(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: b(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && g(e);
			}),
			onPointerDown: b(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (g(e), e.preventDefault());
			}),
			onKeyDown: b(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && m(e.key), !(t && e.key === " ") && xe.includes(e.key) && (g(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), Fe = "SelectValue", Ie = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, className: r, style: a, children: o, placeholder: s = "", ...c } = e, l = J(Fe, n), { onValueNodeHasChildrenChange: u } = l, d = o !== void 0, f = i(t, l.onValueNodeChange);
	j(() => {
		u(d);
	}, [u, d]);
	let p = Q(l.value);
	return /* @__PURE__ */ (0, R.jsx)(A.span, {
		...c,
		asChild: !p && c.asChild,
		ref: f,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, R.jsx)(L.Fragment, { children: p ? s : o }, p ? "placeholder" : "value")
	});
}, "SelectValue")), Le = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, R.jsx)(A.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [Re, ze] = q("SelectPortal", { forceMount: void 0 }), Be = /* @__PURE__ */ G((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, R.jsx)(Re, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, R.jsx)(T, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), Y = "SelectContent", Ve = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let n = ze(Y, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = J(Y, e.__scopeSelect), [o, s] = L.useState();
	return j(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, R.jsx)(ne, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, R.jsx)(Ge, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, R.jsx)(He, {
			...i,
			fragment: o
		})
	});
}, "SelectContent")), He = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? I.createPortal(/* @__PURE__ */ (0, R.jsx)(Ue, {
		scope: n,
		children: /* @__PURE__ */ (0, R.jsx)(Ce.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, R.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), X = 10, [Ue, Z] = q(Y), We = o("SelectContent.RemoveScroll"), Ge = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n } = e, { position: r = "item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = e, y = J(Y, n), [x, S] = L.useState(null), [C, ee] = L.useState(null), T = i(t, S), [k, A] = L.useState(null), [j, ne] = L.useState(null), M = we(n), [N, P] = L.useState(!1), F = L.useRef(!1);
	L.useEffect(() => {
		if (x) return te(x);
	}, [x]), w();
	let I = L.useCallback((e) => {
		let [t, ...n] = M().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && C && (C.scrollTop = 0), n === r && C && (C.scrollTop = C.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [M, C]), z = L.useCallback(() => I([k, x]), [
		I,
		k,
		x
	]);
	L.useEffect(() => {
		N && z();
	}, [N, z]);
	let { onOpenChange: B, triggerPointerDownPosRef: V } = y;
	L.useEffect(() => {
		if (x) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ G((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ G((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(x) || B(!1), document.removeEventListener("pointermove", t), V.current = null;
			}, "handlePointerUp");
			return V.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		x,
		B,
		V
	]), L.useEffect(() => {
		let e = /* @__PURE__ */ G(() => B(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [B]);
	let [re, H] = bt((e) => {
		let t = M().filter((e) => !e.disabled), n = xt(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), U = L.useCallback((e, t, n) => {
		let r = !F.current && !n;
		(y.value !== void 0 && y.value === t || r) && (A(e), r && (F.current = !0));
	}, [y.value]), ie = L.useCallback(() => x?.focus(), [x]), W = L.useCallback((e, t, n) => {
		let r = !F.current && !n;
		(y.value !== void 0 && y.value === t || r) && ne(e);
	}, [y.value]), ae = r === "popper" ? qe : Ke, oe = ae === qe ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ (0, R.jsx)(Ue, {
		scope: n,
		content: x,
		viewport: C,
		onViewportChange: ee,
		itemRefCallback: U,
		selectedItem: k,
		onItemLeave: ie,
		itemTextRefCallback: W,
		focusSelectedItem: z,
		selectedItemText: j,
		position: r,
		isPositioned: N,
		searchRef: re,
		children: /* @__PURE__ */ (0, R.jsx)(D, {
			as: We,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, R.jsx)(O, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: b(a, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, R.jsx)(E, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ (0, R.jsx)(ae, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...oe,
						onPlaced: () => P(!0),
						ref: T,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: b(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && H(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = M().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => I(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), Ke = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, onPlaced: r, ...a } = e, o = J(Y, n), s = Z(Y, n), [c, l] = L.useState(null), [u, d] = L.useState(null), f = i(t, d), p = we(n), m = L.useRef(!1), h = L.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = L.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), i = v.getBoundingClientRect();
			if (o.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - X, d = ye(a, [X, Math.max(X, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - X, d = ye(a, [X, Math.max(X, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - X * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), ee = parseInt(C.paddingTop, 10), te = parseInt(C.paddingBottom, 10), w = e.top + e.height / 2 - X, T = s - w, E = _.offsetHeight / 2, D = _.offsetTop + E, O = f + h + D, k = x - O;
			if (O <= w) {
				let e = a.length > 0 && _ === a[a.length - 1].ref.current;
				c.style.bottom = "0px";
				let t = u.clientHeight - g.offsetTop - g.offsetHeight, n = O + Math.max(T, E + (e ? te : 0) + t + y);
				c.style.height = n + "px";
			} else {
				let e = a.length > 0 && _ === a[0].ref.current;
				c.style.top = "0px";
				let t = Math.max(w, f + g.offsetTop + (e ? ee : 0) + E) + k;
				c.style.height = t + "px", g.scrollTop = O - w + g.offsetTop;
			}
			c.style.margin = `${X}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", r?.(), requestAnimationFrame(() => m.current = !0);
		}
	}, [
		p,
		o.trigger,
		o.valueNode,
		c,
		u,
		g,
		_,
		v,
		o.dir,
		r
	]);
	j(() => b(), [b]);
	let [x, S] = L.useState();
	j(() => {
		u && S(window.getComputedStyle(u).zIndex);
	}, [u]);
	let C = L.useCallback((e) => {
		e && h.current === !0 && (b(), y?.(), h.current = !1);
	}, [b, y]);
	return /* @__PURE__ */ (0, R.jsx)(Je, {
		scope: n,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: C,
		children: /* @__PURE__ */ (0, R.jsx)("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ (0, R.jsx)(A.div, {
				...a,
				ref: f,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...a.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), qe = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = X, ...a } = e, o = De(n);
	return /* @__PURE__ */ (0, R.jsx)(l, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition")), [Je, Ye] = q(Y, {}), Xe = "SelectViewport", Ze = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, nonce: r, ...a } = e, o = Z(Xe, n), s = Ye(Xe, n), c = i(t, o.onViewportChange), l = L.useRef(0);
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ (0, R.jsx)(Ce.Slot, {
		scope: n,
		children: /* @__PURE__ */ (0, R.jsx)(A.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...a,
			ref: c,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...a.style
			},
			onScroll: b(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - X * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				l.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [Qe, $e] = q("SelectGroup"), et = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, ...r } = e, i = k();
	return /* @__PURE__ */ (0, R.jsx)(Qe, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ (0, R.jsx)(A.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
}, "SelectGroup")), tt = "SelectLabel", nt = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, ...r } = e, i = $e(tt, n);
	return /* @__PURE__ */ (0, R.jsx)(A.div, {
		id: i.id,
		...r,
		ref: t
	});
}, "SelectLabel")), rt = "SelectItem", [it, at] = q(rt), ot = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, value: r, disabled: a = !1, textValue: o, ...s } = e, c = J(rt, n), l = Z(rt, n), u = c.value === r, [d, f] = L.useState(o ?? ""), [p, m] = L.useState(!1), h = C((e) => l.itemRefCallback?.(e, r, a)), g = i(t, h), _ = k(), v = L.useRef("touch"), y = /* @__PURE__ */ G(() => {
		a || (c.onValueChange(r), c.onOpenChange(!1));
	}, "handleSelect");
	return /* @__PURE__ */ (0, R.jsx)(it, {
		scope: n,
		value: r,
		disabled: a,
		textId: _,
		isSelected: u,
		onItemTextChange: L.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, R.jsx)(Ce.ItemSlot, {
			scope: n,
			value: r,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ (0, R.jsx)(A.div, {
				role: "option",
				"aria-labelledby": _,
				"data-highlighted": p ? "" : void 0,
				"aria-selected": u && p,
				"data-state": u ? "checked" : "unchecked",
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				tabIndex: a ? void 0 : -1,
				...s,
				ref: g,
				onFocus: b(s.onFocus, () => m(!0)),
				onBlur: b(s.onBlur, () => m(!1)),
				onClick: b(s.onClick, () => {
					v.current !== "mouse" && y();
				}),
				onPointerUp: b(s.onPointerUp, () => {
					v.current === "mouse" && y();
				}),
				onPointerDown: b(s.onPointerDown, (e) => {
					v.current = e.pointerType;
				}),
				onPointerMove: b(s.onPointerMove, (e) => {
					v.current = e.pointerType, a ? l.onItemLeave?.() : v.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: b(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: b(s.onKeyDown, (e) => {
					a || e.target !== e.currentTarget || (l.searchRef?.current === "" || e.key !== " ") && (Se.includes(e.key) && y(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), st = "SelectItemText", ct = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, className: r, style: a, ...o } = e, s = J(st, n), c = Z(st, n), l = at(st, n), u = Ae(st, n), [d, f] = L.useState(null), p = C((e) => c.itemTextRefCallback?.(e, l.value, l.disabled)), m = i(t, f, l.onItemTextChange, p), h = d?.textContent, g = L.useMemo(() => /* @__PURE__ */ (0, R.jsx)("option", {
		value: l.value,
		disabled: l.disabled,
		children: h
	}, l.value), [
		l.disabled,
		l.value,
		h
	]), { onNativeOptionAdd: _, onNativeOptionRemove: v } = u;
	return j(() => (_(g), () => v(g)), [
		_,
		v,
		g
	]), /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsx)(A.span, {
		id: l.textId,
		...o,
		ref: m
	}), l.isSelected && s.valueNode && !s.valueNodeHasChildren && !Q(s.value) ? I.createPortal(o.children, s.valueNode) : null] });
}, "SelectItemText")), lt = "SelectItemIndicator", ut = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return at(lt, n).isSelected ? /* @__PURE__ */ (0, R.jsx)(A.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), dt = "SelectScrollUpButton", ft = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let n = Z(dt, e.__scopeSelect), r = Ye(dt, e.__scopeSelect), [a, o] = L.useState(!1), s = i(t, r.onScrollButtonChange);
	return j(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				o(e);
			};
			G(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), a ? /* @__PURE__ */ (0, R.jsx)(ht, {
		...e,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), pt = "SelectScrollDownButton", mt = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let n = Z(pt, e.__scopeSelect), r = Ye(pt, e.__scopeSelect), [a, o] = L.useState(!1), s = i(t, r.onScrollButtonChange);
	return j(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				o(n);
			};
			G(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), a ? /* @__PURE__ */ (0, R.jsx)(ht, {
		...e,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), ht = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = Z("SelectScrollButton", n), o = L.useRef(null), s = we(n), c = L.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return L.useEffect(() => () => c(), [c]), j(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ (0, R.jsx)(A.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: b(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: b(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: b(i.onPointerLeave, () => {
			c();
		})
	});
}, "SelectScrollButtonImpl")), gt = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ (0, R.jsx)(A.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
}, "SelectSeparator")), _t = "SelectBubbleInput", vt = /* @__PURE__ */ L.forwardRef(/* @__PURE__ */ G(function({ __scopeSelect: e, ...t }, n) {
	let r = J(_t, e), { value: a, onValueChange: o, required: s, disabled: c, name: l, autoComplete: u, form: d } = r, { nativeOptions: p, nativeSelectKey: m } = r, h = L.useRef(null), g = i(n, h), _ = a ?? "", v = ge(_), y = Array.from(p).some((e) => (e.props.value ?? "") === "");
	return L.useEffect(() => {
		let e = h.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (v !== _ && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, _), e.dispatchEvent(t);
		}
	}, [v, _]), /* @__PURE__ */ (0, R.jsxs)(A.select, {
		"aria-hidden": !0,
		required: s,
		tabIndex: -1,
		name: l,
		autoComplete: u,
		disabled: c,
		form: d,
		onChange: (e) => o(e.target.value),
		...t,
		style: {
			...f,
			...t.style
		},
		ref: g,
		defaultValue: _,
		children: [Q(a) && !y ? /* @__PURE__ */ (0, R.jsx)("option", { value: "" }) : null, Array.from(p)]
	}, m);
}, "SelectBubbleInput"));
function yt(e) {
	return typeof e == "function";
}
G(yt, "isFunction");
function Q(e) {
	return e === "" || e === void 0;
}
G(Q, "shouldShowPlaceholder");
function bt(e) {
	let t = C(e), n = L.useRef(""), r = L.useRef(0), i = L.useCallback((e) => {
		let i = n.current + e;
		t(i), (/* @__PURE__ */ G((function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(i);
	}, [t]), a = L.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return L.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
G(bt, "useTypeaheadSearch");
function xt(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = St(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
G(xt, "findNextItem");
function St(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
G(St, "wrapArray");
//#endregion
//#region src/utils/assertNever.ts
function Ct(e) {
	M(!1, `Unexpected object: ${e}`);
}
function wt(e) {
	return t.warn(`Unexpected object: ${JSON.stringify(e)}`), e;
}
//#endregion
//#region src/utils/strings.ts
function Tt(e) {
	return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
}
function Et(e) {
	if (!e) return "";
	if (typeof e != "string") throw t.error(e), TypeError(`Expected string, got ${typeof e}`);
	return /[A-Za-z]/.test(e) ? e.replaceAll(/([\da-z])([A-Z])/g, "$1 $2").replaceAll(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").replaceAll(/[\s_-]+/g, " ").trim().split(" ").map(Tt).join(" ") : e;
}
var Dt = {
	startCase: Et,
	htmlEscape: (e) => e && e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;").replaceAll("\n", " "),
	withTrailingSlash(e) {
		return e.endsWith("/") ? e : `${e}/`;
	},
	withoutTrailingSlash(e) {
		return e.endsWith("/") ? e.slice(0, -1) : e;
	},
	withoutLeadingSlash(e) {
		return e.startsWith("/") ? e.slice(1) : e;
	},
	asString: (e) => {
		if (typeof e == "string") return e;
		try {
			return JSON.stringify(e);
		} catch {
			return String(e);
		}
	}
}, $ = c(), Ot = a("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md forced-color-adjust-none forced-colors:border-[CanvasText] forced-colors:bg-[Canvas] forced-colors:text-[CanvasText]", { variants: { subcontent: { true: "shadow-lg" } } }), kt = a("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground forced-color-adjust-none forced-colors:data-[highlighted]:bg-[Highlight] forced-colors:data-[highlighted]:text-[HighlightText] forced-colors:data-[state=open]:bg-[Highlight] forced-colors:data-[state=open]:text-[HighlightText]", { variants: { inset: { true: "pl-8" } } }), At = "data-disabled:pointer-events-none data-disabled:opacity-50 forced-colors:data-disabled:text-[GrayText]", jt = a(n("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground forced-color-adjust-none forced-colors:data-[highlighted]:bg-[Highlight] forced-colors:data-[highlighted]:text-[HighlightText]", At), { variants: {} }), Mt = a("absolute left-2 flex h-3.5 w-3.5 items-center justify-center", { variants: {} }), Nt = a("px-2 py-1.5 text-sm font-semibold", { variants: { inset: { true: "pl-8" } } }), Pt = a(n("menu-item relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden forced-color-adjust-none forced-colors:data-[highlighted]:bg-[Highlight] forced-colors:data-[highlighted]:text-[HighlightText] forced-colors:aria-selected:bg-[Highlight] forced-colors:aria-selected:text-[HighlightText]", At), {
	variants: {
		inset: { true: "pl-8" },
		variant: {
			default: "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground",
			danger: "data-[highlighted]:bg-(--red-5) data-[highlighted]:text-(--red-12) aria-selected:bg-(--red-5) aria-selected:text-(--red-12)",
			muted: "data-[highlighted]:bg-muted/70 data-[highlighted]:text-muted-foreground aria-selected:bg-muted/70 aria-selected:text-muted-foreground",
			success: "data-[highlighted]:bg-(--grass-3) data-[highlighted]:text-(--grass-11) aria-selected:bg-(--grass-3) aria-selected:text-(--grass-11)",
			disabled: "text-muted-foreground"
		}
	},
	defaultVariants: { variant: "default" }
}), Ft = a("-mx-1 my-1 h-px bg-border last:hidden", { variants: {} }), It = (e) => {
	let t = (0, $.c)(8), r, i;
	t[0] === e ? (r = t[1], i = t[2]) : ({className: r, ...i} = e, t[0] = e, t[1] = r, t[2] = i);
	let a;
	t[3] === r ? a = t[4] : (a = n("ml-auto text-xs tracking-widest opacity-60", r), t[3] = r, t[4] = a);
	let o;
	return t[5] !== i || t[6] !== a ? (o = /* @__PURE__ */ (0, R.jsx)("span", {
		className: a,
		...i
	}), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o;
};
It.displayName = "MenuShortcut";
//#endregion
//#region src/components/ui/native-select.tsx
var Lt = a("flex h-6 w-fit mb-1 items-center justify-between rounded-sm bg-background px-2 text-sm font-prose ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer forced-color-adjust-none forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:disabled:text-[GrayText]", {
	variants: { variant: {
		default: "shadow-xs-solid border border-input hover:shadow-sm-solid focus-visible:border-primary focus-visible:shadow-md-solid disabled:hover:shadow-xs-solid forced-colors:border-[ButtonText] forced-colors:disabled:border-[GrayText]",
		ghost: "opacity-70 hover:opacity-100 focus:opacity-100"
	} },
	defaultVariants: { variant: "default" }
}), Rt = L.forwardRef((e, t) => {
	let i = (0, $.c)(12), a, o, s;
	i[0] === e ? (a = i[1], o = i[2], s = i[3]) : ({className: o, children: a, ...s} = e, i[0] = e, i[1] = a, i[2] = o, i[3] = s);
	let c;
	i[4] === Symbol.for("react.memo_cache_sentinel") ? (c = r.stopPropagation(), i[4] = c) : c = i[4];
	let l;
	i[5] === o ? l = i[6] : (l = n(Lt({}), o), i[5] = o, i[6] = l);
	let u;
	return i[7] !== a || i[8] !== s || i[9] !== t || i[10] !== l ? (u = /* @__PURE__ */ (0, R.jsx)("select", {
		ref: t,
		onClick: c,
		className: l,
		...s,
		children: a
	}), i[7] = a, i[8] = s, i[9] = t, i[10] = l, i[11] = u) : u = i[11], u;
});
Rt.displayName = "NativeSelect";
//#endregion
//#region src/components/ui/select.tsx
var zt = Me, Bt = et, Vt = S(Be), Ht = Ie, Ut = L.forwardRef((e, t) => {
	let r = (0, $.c)(21), i, a, o, s, c, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], c = r[5], l = r[6]) : ({className: a, children: i, onClear: o, variant: l, hideChevron: c, ...s} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = c, r[6] = l);
	let u = c !== void 0 && c, d;
	r[7] !== a || r[8] !== l ? (d = n(Lt({ variant: l }), "mb-0", a), r[7] = a, r[8] = l, r[9] = d) : d = r[9];
	let f;
	r[10] !== u || r[11] !== o ? (f = o ? /* @__PURE__ */ (0, R.jsx)("span", {
		onPointerDown: (e) => {
			e.preventDefault(), e.stopPropagation(), o();
		},
		children: /* @__PURE__ */ (0, R.jsx)(F, { className: "h-4 w-4 opacity-50 hover:opacity-90" })
	}) : !u && /* @__PURE__ */ (0, R.jsx)(N, { className: "h-4 w-4 opacity-50" }), r[10] = u, r[11] = o, r[12] = f) : f = r[12];
	let p;
	r[13] === f ? p = r[14] : (p = /* @__PURE__ */ (0, R.jsx)(Le, {
		asChild: !0,
		children: f
	}), r[13] = f, r[14] = p);
	let m;
	return r[15] !== i || r[16] !== s || r[17] !== t || r[18] !== d || r[19] !== p ? (m = /* @__PURE__ */ (0, R.jsxs)(Pe, {
		ref: t,
		className: d,
		...s,
		children: [i, p]
	}), r[15] = i, r[16] = s, r[17] = t, r[18] = d, r[19] = p, r[20] = m) : m = r[20], m;
});
Ut.displayName = Pe.displayName;
var Wt = x(Ve), Gt = L.forwardRef((e, t) => {
	let r = (0, $.c)(21), i, a, o, s;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4]) : ({className: a, children: i, position: s, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s);
	let c = s === void 0 ? "popper" : s, l = c === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", u;
	r[5] !== a || r[6] !== l ? (u = n("max-h-[300px] relative z-50 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", l, a), r[5] = a, r[6] = l, r[7] = u) : u = r[7];
	let d;
	r[8] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ (0, R.jsx)(ft, {
		className: "flex items-center justify-center h-[20px] bg-background text-muted-foreground cursor-default",
		children: /* @__PURE__ */ (0, R.jsx)(P, { className: "h-4 w-4" })
	}), r[8] = d) : d = r[8];
	let f = c === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)", p;
	r[9] === f ? p = r[10] : (p = n("p-1", f), r[9] = f, r[10] = p);
	let m;
	r[11] !== i || r[12] !== p ? (m = /* @__PURE__ */ (0, R.jsx)(Ze, {
		className: p,
		children: i
	}), r[11] = i, r[12] = p, r[13] = m) : m = r[13];
	let h;
	r[14] === Symbol.for("react.memo_cache_sentinel") ? (h = /* @__PURE__ */ (0, R.jsx)(mt, {
		className: "flex items-center justify-center h-[20px] bg-background text-muted-foreground cursor-default",
		children: /* @__PURE__ */ (0, R.jsx)(N, { className: "h-4 w-4 opacity-50" })
	}), r[14] = h) : h = r[14];
	let g;
	return r[15] !== c || r[16] !== o || r[17] !== t || r[18] !== u || r[19] !== m ? (g = /* @__PURE__ */ (0, R.jsx)(Vt, { children: /* @__PURE__ */ (0, R.jsx)(y, { children: /* @__PURE__ */ (0, R.jsxs)(Wt, {
		ref: t,
		className: u,
		position: c,
		...o,
		children: [
			d,
			m,
			h
		]
	}) }) }), r[15] = c, r[16] = o, r[17] = t, r[18] = u, r[19] = m, r[20] = g) : g = r[20], g;
});
Gt.displayName = Ve.displayName;
var Kt = L.forwardRef((e, t) => {
	let r = (0, $.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = n("px-2 py-1.5 text-sm font-semibold", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== t || r[7] !== o ? (s = /* @__PURE__ */ (0, R.jsx)(nt, {
		ref: t,
		className: o,
		...a
	}), r[5] = a, r[6] = t, r[7] = o, r[8] = s) : s = r[8], s;
});
Kt.displayName = nt.displayName;
var qt = L.forwardRef((e, t) => {
	let r = (0, $.c)(17), i, a, o, s;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4]) : ({className: a, children: i, subtitle: s, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s);
	let c;
	r[5] === a ? c = r[6] : (c = n("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-hidden data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground forced-colors:data-[highlighted]:bg-[Highlight] forced-colors:data-[highlighted]:text-[HighlightText]", At, a), r[5] = a, r[6] = c);
	let l;
	r[7] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ (0, R.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, R.jsx)(ut, { children: /* @__PURE__ */ (0, R.jsx)(h, { className: "h-3 w-3" }) })
	}), r[7] = l) : l = r[7];
	let u = typeof i != "string" || void 0, d;
	r[8] !== i || r[9] !== u ? (d = /* @__PURE__ */ (0, R.jsx)(ct, {
		asChild: u,
		className: "flex w-full flex-1",
		children: i
	}), r[8] = i, r[9] = u, r[10] = d) : d = r[10];
	let f;
	return r[11] !== o || r[12] !== t || r[13] !== s || r[14] !== c || r[15] !== d ? (f = /* @__PURE__ */ (0, R.jsxs)(ot, {
		ref: t,
		className: c,
		...o,
		children: [
			l,
			d,
			s
		]
	}), r[11] = o, r[12] = t, r[13] = s, r[14] = c, r[15] = d, r[16] = f) : f = r[16], f;
});
qt.displayName = ot.displayName;
var Jt = L.forwardRef((e, t) => {
	let r = (0, $.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = n("-mx-1 my-1 h-px bg-muted", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== t || r[7] !== o ? (s = /* @__PURE__ */ (0, R.jsx)(gt, {
		ref: t,
		className: o,
		...a
	}), r[5] = a, r[6] = t, r[7] = o, r[8] = s) : s = r[8], s;
});
Jt.displayName = gt.displayName;
//#endregion
export { F as A, wt as C, ge as D, ye as E, N as M, pe as O, Ct as S, Pe as T, Nt as _, Kt as a, Dt as b, Ht as c, At as d, It as f, Pt as g, jt as h, qt as i, P as j, V as k, Rt as l, Mt as m, Gt as n, Jt as o, Ot as p, Bt as r, Ut as s, zt as t, Lt as u, Ft as v, Le as w, Tt as x, kt as y };
