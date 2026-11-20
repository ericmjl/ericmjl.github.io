import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { c as t, p as n, u as r } from "./button-CvjkwdSk.js";
import { t as i } from "./react-sHtZdjeP.js";
import { t as a } from "./compiler-runtime-CldRdSsv.js";
import { t as o } from "./react-dom-DUmH0GXv.js";
import { t as s } from "./jsx-runtime-3BD1kT0s.js";
//#region ../node_modules/.pnpm/@radix-ui+react-primitive@2.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+re_f83f88542c24ef44463bf36336741c4c/node_modules/@radix-ui/react-primitive/dist/index.mjs
var c = /* @__PURE__ */ e(i(), 1), l = /* @__PURE__ */ e(o(), 1), u = s(), d = Object.defineProperty, f = (e, t) => d(e, "name", {
	value: t,
	configurable: !0
}), p = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = r(`Primitive.${t}`), i = c.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, u.jsx)(o, {
			...a,
			ref: r
		});
	});
	return i.displayName = `Primitive.${t}`, {
		...e,
		[t]: i
	};
}, {});
function m(e, t) {
	e && l.flushSync(() => e.dispatchEvent(t));
}
f(m, "dispatchDiscreteCustomEvent");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-context@1.2.2_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-context/dist/index.mjs
var h = Object.defineProperty, g = (e, t) => h(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function _(e, t) {
	let n = c.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ g((e) => {
		let { children: t, ...r } = e, i = c.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, u.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = c.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return g(i, "useContext"), [r, i];
}
g(_, "createContext");
// @__NO_SIDE_EFFECTS__
function v(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = c.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ g((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, l = c.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, u.jsx)(s.Provider, {
				value: l,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: l = !1 } = s, u = o?.[e]?.[a] || i, d = c.useContext(u);
			if (d) return d;
			if (r !== void 0) return r;
			if (!l) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return g(s, "useContext"), [o, s];
	}
	g(r, "createContext");
	let i = /* @__PURE__ */ g(() => {
		let t = n.map((e) => c.createContext(e));
		return /* @__PURE__ */ g(function(n) {
			let r = n?.[e] || t;
			return c.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, ee(i, ...t)];
}
g(v, "createContextScope");
function ee(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ g(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ g(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return c.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
g(ee, "composeContextScopes");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+primitive@1.1.7/node_modules/@radix-ui/primitive/dist/index.mjs
var te = Object.defineProperty, y = (e, t) => te(e, "name", {
	value: t,
	configurable: !0
}), ne = !!(typeof window < "u" && window.document && window.document.createElement);
function b(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ y(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
y(b, "composeEventHandlers");
function re(e) {
	if (!ne) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
y(re, "getOwnerWindow");
function ie(e) {
	if (!ne) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
y(ie, "getOwnerDocument");
function ae(e, t = !1) {
	let { activeElement: n } = ie(e);
	if (!n?.nodeName) return null;
	if (oe(n) && n.contentDocument) return ae(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = ie(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
y(ae, "getActiveElement");
function oe(e) {
	return e.tagName === "IFRAME";
}
y(oe, "isFrame");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var x = globalThis?.document ? c.useLayoutEffect : () => {}, se = Object.defineProperty, ce = (e, t) => se(e, "name", {
	value: t,
	configurable: !0
}), le = c.useEffectEvent, ue = c.useInsertionEffect;
function de(e) {
	if (typeof le == "function") return le(e);
	let t = c.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof ue == "function" ? ue(() => {
		t.current = e;
	}) : x(() => {
		t.current = e;
	}), c.useMemo(() => ((...e) => t.current?.(...e)), []);
}
ce(de, "useEffectEvent");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.6_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var fe = Object.defineProperty, pe = (e, t) => fe(e, "name", {
	value: t,
	configurable: !0
}), me = c.useInsertionEffect || x;
function he({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ pe(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = ge({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, c.useCallback((t) => {
		if (s) {
			let n = _e(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
pe(he, "useControllableState");
function ge({ defaultProp: e, onChange: t }) {
	let [n, r] = c.useState(e), i = c.useRef(n), a = c.useRef(t);
	return me(() => {
		a.current = t;
	}, [t]), c.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
pe(ge, "useUncontrolledState");
function _e(e) {
	return typeof e == "function";
}
pe(_e, "isFunction");
var ve = Symbol("RADIX:SYNC_STATE");
function ye(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, l = i !== void 0, u = de(o), d = [{
		...n,
		state: a
	}];
	r && d.push(r);
	let [f, p] = c.useReducer((t, n) => {
		if (n.type === ve) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return l && !Object.is(r.state, t.state) && u(r.state), r;
	}, ...d), m = f.state, h = c.useRef(m);
	c.useEffect(() => {
		h.current !== m && (h.current = m, l || u(m));
	}, [
		m,
		h,
		l
	]);
	let g = c.useMemo(() => i === void 0 ? f : {
		...f,
		state: i
	}, [f, i]);
	return c.useEffect(() => {
		l && !Object.is(i, f.state) && p({
			type: ve,
			state: i
		});
	}, [
		i,
		f.state,
		l
	]), [g, p];
}
pe(ye, "useControllableStateReducer");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-presence@1.1.10_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_2fe228634386b203c3622b9fd60e1034/node_modules/@radix-ui/react-presence/dist/index.mjs
var be = Object.defineProperty, S = (e, t) => be(e, "name", {
	value: t,
	configurable: !0
});
function xe(e, t) {
	return c.useReducer((e, n) => t[e][n] ?? e, e);
}
S(xe, "useStateMachine");
var Se = /* @__PURE__ */ S((e) => {
	let { present: t, children: n } = e, r = Ce(t), i = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = Te(r.ref, De(i));
	return typeof n == "function" || r.isPresent ? c.cloneElement(i, { ref: a }) : null;
}, "Presence");
function Ce(e) {
	let [t, n] = c.useState(), r = c.useRef(null), i = c.useRef(e), a = c.useRef("none"), o = c.useRef(void 0), [s, l] = xe(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return c.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? Ee(r.current), o.current = void 0) : a.current = "none";
	}, [s]), x(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = Ee(t);
			e ? (o.current = s, l("MOUNT")) : s === "none" || t?.display === "none" ? l("UNMOUNT") : l(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, l]), x(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ S((a) => {
				let o = Ee(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (l("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ S((e) => {
				e.target === t && (a.current = Ee(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		}
		l("ANIMATION_END");
	}, [t, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: c.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = Ee(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
S(Ce, "usePresence");
function we(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
S(we, "setRef");
function Te(...e) {
	let t = c.useRef(e);
	return t.current = e, c.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = we(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : we(n[e], null);
			}
		};
	}, []);
}
S(Te, "useStableComposedRefs");
function Ee(e) {
	return e?.animationName || "none";
}
S(Ee, "getAnimationName");
function De(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
S(De, "getElementRef");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-id@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Oe = Object.defineProperty, ke = (e, t) => Oe(e, "name", {
	value: t,
	configurable: !0
}), Ae = c.useId || (() => void 0), je = 0;
function Me(e) {
	let [t, n] = c.useState(Ae());
	return x(() => {
		e || n((e) => e ?? String(je++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
ke(Me, "useId");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.4_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Ne = Object.defineProperty, Pe = (e, t) => Ne(e, "name", {
	value: t,
	configurable: !0
});
function Fe(e) {
	let t = c.useRef(e);
	return c.useEffect(() => {
		t.current = e;
	}), c.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Pe(Fe, "useCallbackRef");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.19_@types+react-dom@19.3.0_@types+react@19.3.0__@_c9641557e0183ada0688bd7873e8a9d9/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Ie = Object.defineProperty, C = (e, t) => Ie(e, "name", {
	value: t,
	configurable: !0
}), Le = "dismissableLayer.update", Re = "dismissableLayer.pointerDownOutside", ze = "dismissableLayer.focusOutside", Be, Ve = c.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), He = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ C(function(e, t) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: l, onDismiss: d, ...f } = e, m = c.useContext(Ve), [h, g] = c.useState(null), _ = h?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), ee = n(t, g), te = Array.from(m.layers), [y] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), ne = y ? te.indexOf(y) : -1, re = h ? te.indexOf(h) : -1, ie = m.layersWithOutsidePointerEventsDisabled.size > 0, ae = re >= ne, oe = c.useRef(!1), x = Ke((e) => {
		o?.(e), l?.(e), e.defaultPrevented || d?.();
	}, {
		ownerDocument: _,
		deferPointerDownOutside: i,
		isDeferredPointerDownOutsideRef: oe,
		dismissableSurfaces: m.dismissableSurfaces,
		shouldHandlePointerDownOutside: c.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...m.branches].some((t) => t.contains(e));
			return ae && !t;
		}, [m.branches, ae])
	}), se = qe((e) => {
		if (i && oe.current) return;
		let t = e.target;
		[...m.branches].some((e) => e.contains(t)) || (s?.(e), l?.(e), e.defaultPrevented || d?.());
	}, _), ce = h ? re === te.length - 1 : !1, le = Fe((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()));
	});
	return c.useEffect(() => {
		if (ce) return _.addEventListener("keydown", le, { capture: !0 }), () => _.removeEventListener("keydown", le, { capture: !0 });
	}, [
		_,
		ce,
		le
	]), c.useEffect(() => {
		if (h) return r && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Be = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(h)), m.layers.add(h), Je(), () => {
			r && (m.layersWithOutsidePointerEventsDisabled.delete(h), m.layersWithOutsidePointerEventsDisabled.size === 0 && (_.body.style.pointerEvents = Be));
		};
	}, [
		h,
		_,
		r,
		m
	]), c.useEffect(() => () => {
		h && (m.layers.delete(h), m.layersWithOutsidePointerEventsDisabled.delete(h), Je());
	}, [h, m]), c.useEffect(() => {
		let e = /* @__PURE__ */ C(() => v({}), "handleUpdate");
		return document.addEventListener(Le, e), () => document.removeEventListener(Le, e);
	}, []), /* @__PURE__ */ (0, u.jsx)(p.div, {
		...f,
		ref: ee,
		style: {
			pointerEvents: ie ? ae ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: b(e.onFocusCapture, se.onFocusCapture),
		onBlurCapture: b(e.onBlurCapture, se.onBlurCapture),
		onPointerDownCapture: b(e.onPointerDownCapture, x.onPointerDownCapture)
	});
}, "DismissableLayer")), Ue = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ C(function(e, t) {
	let r = c.useContext(Ve), i = c.useRef(null), a = n(t, i);
	return c.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ (0, u.jsx)(p.div, {
		...e,
		ref: a
	});
}, "DismissableLayerBranch"));
function We() {
	let e = c.useContext(Ve), [t, n] = c.useState(null);
	return c.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
C(We, "useDismissableLayerSurface");
var Ge = /* @__PURE__ */ C(() => !0, "IS_TRUE");
function Ke(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = Ge } = t, s = Fe(e), l = c.useRef(!1), u = c.useRef(!1), d = c.useRef(/* @__PURE__ */ new Map()), f = c.useRef(() => {});
	return c.useEffect(() => {
		function e() {
			u.current = !1, i.current = !1, d.current.clear();
		}
		C(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		C(t, "isOutsideInteractionIntercepted");
		function c(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		C(c, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		C(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ C((a) => {
			if (a.target && !l.current) {
				let c = function() {
					n.removeEventListener("click", f.current);
					let r = t();
					e(), r || Ye(Re, s, p, { discrete: !0 });
				};
				if (C(c, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", f.current), e(), l.current = !1;
					return;
				}
				let p = { originalEvent: a };
				u.current = !0, i.current = r && a.button === 0, d.current.clear(), !r || a.button !== 0 ? c() : (n.removeEventListener("click", f.current), f.current = c, n.addEventListener("click", f.current, { once: !0 }));
			} else n.removeEventListener("click", f.current), e();
			l.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, c, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", f.current);
			for (let e of h) n.removeEventListener(e, c, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ C(() => l.current = !0, "onPointerDownCapture") };
}
C(Ke, "usePointerDownOutside");
function qe(e, t = globalThis?.document) {
	let n = Fe(e), r = c.useRef(!1);
	return c.useEffect(() => {
		let e = /* @__PURE__ */ C((e) => {
			e.target && !r.current && Ye(ze, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ C(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ C(() => r.current = !1, "onBlurCapture")
	};
}
C(qe, "useFocusOutside");
function Je() {
	let e = new CustomEvent(Le);
	document.dispatchEvent(e);
}
C(Je, "dispatchUpdate");
function Ye(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? m(i, a) : i.dispatchEvent(a);
}
C(Ye, "handleAndDispatchCustomEvent");
var Xe = He, Ze = Ue, Qe = Object.defineProperty, w = (e, t) => Qe(e, "name", {
	value: t,
	configurable: !0
}), $e = "focusScope.autoFocusOnMount", et = "focusScope.autoFocusOnUnmount", tt = {
	bubbles: !1,
	cancelable: !0
}, nt = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [l, d] = c.useState(null), f = Fe(a), m = Fe(o), h = c.useRef(null), g = n(t, d), _ = c.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	c.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (_.paused || !l) return;
				let t = e.target;
				l.contains(t) ? h.current = t : T(h.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || T(h.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && T(l);
			};
			w(e, "handleFocusIn"), w(t, "handleFocusOut"), w(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		l,
		_.paused
	]), c.useEffect(() => {
		if (l) {
			lt.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent($e, tt);
				l.addEventListener($e, f), l.dispatchEvent(t), t.defaultPrevented || (rt(ft(at(l)), { select: !0 }), document.activeElement === e && T(l));
			}
			return () => {
				l.removeEventListener($e, f), setTimeout(() => {
					let t = new CustomEvent(et, tt);
					l.addEventListener(et, m), l.dispatchEvent(t), t.defaultPrevented || T(e ?? document.body, { select: !0 }), l.removeEventListener(et, m), lt.remove(_);
				}, 0);
			};
		}
	}, [
		l,
		f,
		m,
		_
	]);
	let v = c.useCallback((e) => {
		if (!r && !i || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = it(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && T(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && T(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ (0, u.jsx)(p.div, {
		tabIndex: -1,
		...s,
		ref: g,
		onKeyDown: v
	});
}, "FocusScope"));
function rt(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (T(r, { select: t }), document.activeElement !== n) return;
}
w(rt, "focusFirst");
function it(e) {
	let t = at(e);
	return [ot(t, e), ot(t.reverse(), e)];
}
w(it, "getTabbableEdges");
function at(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ w((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
w(at, "getTabbableCandidates");
function ot(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : st(r, { upTo: t }))) return r;
}
w(ot, "findVisible");
function st(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
w(st, "isHidden");
function ct(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
w(ct, "isSelectableInput");
function T(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && ct(e) && t && e.select();
	}
}
w(T, "focus");
var lt = ut();
function ut() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = dt(e, t), e.unshift(t);
		},
		remove(t) {
			e = dt(e, t), e[0]?.resume();
		}
	};
}
w(ut, "createFocusScopesStack");
function dt(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
w(dt, "arrayRemove");
function ft(e) {
	return e.filter((e) => e.tagName !== "A");
}
w(ft, "removeLinks");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-portal@1.1.17_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react_484564a2ec4329649f69b712999578b8/node_modules/@radix-ui/react-portal/dist/index.mjs
var pt = Object.defineProperty, mt = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ ((e, t) => pt(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = c.useState(!1);
	x(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? l.createPortal(/* @__PURE__ */ (0, u.jsx)(p.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), ht = Object.defineProperty, gt = (e, t) => ht(e, "name", {
	value: t,
	configurable: !0
}), _t = 0, vt = null;
function yt(e) {
	return bt(), e.children;
}
gt(yt, "FocusGuards");
function bt() {
	c.useEffect(() => {
		vt ||= {
			start: xt(),
			end: xt()
		};
		let { start: e, end: t } = vt;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), _t++, () => {
			_t === 1 && (vt?.start.remove(), vt?.end.remove(), vt = null), _t = Math.max(0, _t - 1);
		};
	}, []);
}
gt(bt, "useFocusGuards");
function xt() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
gt(xt, "createFocusGuard");
//#endregion
//#region ../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var E = function() {
	return E = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, E.apply(this, arguments);
};
function St(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Ct(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function wt(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Tt = "right-scroll-bar-position", Et = "width-before-scroll-bar", Dt = "with-scroll-bars-hidden", Ot = "--removed-body-scroll-bar-size";
//#endregion
//#region ../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function kt(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function At(e, t) {
	var n = (0, c.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var jt = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Mt = /* @__PURE__ */ new WeakMap();
function Nt(e, t) {
	var n = At(t || null, function(t) {
		return e.forEach(function(e) {
			return kt(e, t);
		});
	});
	return jt(function() {
		var t = Mt.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || kt(e, null);
			}), i.forEach(function(e) {
				r.has(e) || kt(e, a);
			});
		}
		Mt.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/medium.js
function Pt(e) {
	return e;
}
function Ft(e, t) {
	t === void 0 && (t = Pt);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function It(e) {
	e === void 0 && (e = {});
	var t = Ft(null);
	return t.options = E({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.3.0_react@19.3.0/node_modules/use-sidecar/dist/es2015/exports.js
var Lt = function(e) {
	var t = e.sideCar, n = St(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return c.createElement(r, E({}, n));
};
Lt.isSideCarExport = !0;
function Rt(e, t) {
	return e.useMedium(t), Lt;
}
//#endregion
//#region ../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var zt = It(), Bt = function() {}, Vt = c.forwardRef(function(e, t) {
	var n = c.useRef(null), r = c.useState({
		onScrollCapture: Bt,
		onWheelCapture: Bt,
		onTouchMoveCapture: Bt
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, ee = v === void 0 ? "div" : v, te = e.gapMode, y = St(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), ne = p, b = Nt([n, t]), re = E(E({}, y), i);
	return c.createElement(c.Fragment, null, d && c.createElement(ne, {
		sideCar: zt,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: a,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: te
	}), o ? c.cloneElement(c.Children.only(s), E(E({}, re), { ref: b })) : c.createElement(ee, E({}, re, {
		className: l,
		ref: b
	}), s));
});
Vt.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Vt.classNames = {
	fullWidth: Et,
	zeroRight: Tt
};
//#endregion
//#region ../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ht = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.3.0_react@19.3.0/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ut() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ht();
	return t && e.setAttribute("nonce", t), e;
}
function Wt(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gt(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Kt = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ut()) && (Wt(t, n), Gt(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, qt = function() {
	var e = Kt();
	return function(t, n) {
		c.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Jt = function() {
	var e = qt();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Yt = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Xt = function(e) {
	return parseInt(e || "", 10) || 0;
}, Zt = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Xt(n),
		Xt(r),
		Xt(i)
	];
}, Qt = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Yt;
	var t = Zt(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, $t = Jt(), en = "data-scroll-locked", tn = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Dt} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${en}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Tt} {
    right: ${s}px ${r};
  }
  
  .${Et} {
    margin-right: ${s}px ${r};
  }
  
  .${Tt} .${Tt} {
    right: 0 ${r};
  }
  
  .${Et} .${Et} {
    margin-right: 0 ${r};
  }
  
  body[${en}] {
    ${Ot}: ${s}px;
  }
`;
}, nn = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, rn = function() {
	c.useEffect(function() {
		return document.body.setAttribute(en, (nn() + 1).toString()), function() {
			var e = nn() - 1;
			e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString());
		};
	}, []);
}, an = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	rn();
	var a = c.useMemo(function() {
		return Qt(i);
	}, [i]);
	return c.createElement($t, { styles: tn(a, !t, i, n ? "" : "!important") });
}, on = !1;
if (typeof window < "u") try {
	var sn = Object.defineProperty({}, "passive", { get: function() {
		return on = !0, !0;
	} });
	window.addEventListener("test", sn, sn), window.removeEventListener("test", sn, sn);
} catch {
	on = !1;
}
var cn = on ? { passive: !1 } : !1, ln = function(e) {
	return e.tagName === "TEXTAREA";
}, un = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ln(e) && n[t] === "visible");
}, dn = function(e) {
	return un(e, "overflowY");
}, fn = function(e) {
	return un(e, "overflowX");
}, pn = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), gn(e, r)) {
			var i = _n(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, mn = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, hn = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, gn = function(e, t) {
	return e === "v" ? dn(t) : fn(t);
}, _n = function(e, t) {
	return e === "v" ? mn(t) : hn(t);
}, vn = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, yn = function(e, t, n, r, i) {
	var a = vn(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = _n(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && gn(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, bn = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xn = function(e) {
	return [e.deltaX, e.deltaY];
}, Sn = function(e) {
	return e && "current" in e ? e.current : e;
}, Cn = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, wn = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Tn = 0, En = [];
function Dn(e) {
	var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), i = c.useState(Tn++)[0], a = c.useState(Jt)[0], o = c.useRef(e);
	c.useEffect(function() {
		o.current = e;
	}, [e]), c.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = wt([e.lockRef.current], (e.shards || []).map(Sn), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = c.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = bn(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = pn(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = pn(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return yn(h, t, e, h === "h" ? s : c, !0);
	}, []), l = c.useCallback(function(e) {
		var n = e;
		if (!(!En.length || En[En.length - 1] !== a)) {
			var r = "deltaY" in n ? xn(n) : bn(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Cn(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Sn).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), u = c.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: On(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = c.useCallback(function(e) {
		n.current = bn(e), r.current = void 0;
	}, []), f = c.useCallback(function(t) {
		u(t.type, xn(t), t.target, s(t, e.lockRef.current));
	}, []), p = c.useCallback(function(t) {
		u(t.type, bn(t), t.target, s(t, e.lockRef.current));
	}, []);
	c.useEffect(function() {
		return En.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, cn), document.addEventListener("touchmove", l, cn), document.addEventListener("touchstart", d, cn), function() {
			En = En.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", l, cn), document.removeEventListener("touchmove", l, cn), document.removeEventListener("touchstart", d, cn);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return c.createElement(c.Fragment, null, h ? c.createElement(a, { styles: wn(i) }) : null, m ? c.createElement(an, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function On(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.3.0_react@19.3.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var kn = Rt(zt, Dn), An = c.forwardRef(function(e, t) {
	return c.createElement(Vt, E({}, e, {
		ref: t,
		sideCar: kn
	}));
});
An.classNames = Vt.classNames;
//#endregion
//#region ../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var jn = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Mn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Pn = {}, Fn = 0, In = function(e) {
	return e && (e.host || In(e.parentNode));
}, Ln = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = In(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Rn = function(e, t, n, r) {
	var i = Ln(t, Array.isArray(e) ? e : [e]);
	Pn[n] || (Pn[n] = /* @__PURE__ */ new WeakMap());
	var a = Pn[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Mn.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Mn.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Nn.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Fn++, function() {
		o.forEach(function(e) {
			var t = Mn.get(e) - 1, i = a.get(e) - 1;
			Mn.set(e, t), a.set(e, i), t || (Nn.has(e) || e.removeAttribute(r), Nn.delete(e)), i || e.removeAttribute(n);
		}), Fn--, Fn || (Mn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Pn = {});
	};
}, zn = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || jn(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Rn(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Bn = Object.defineProperty, D = (e, t) => Bn(e, "name", {
	value: t,
	configurable: !0
}), Vn = "Dialog", [Hn, Un] = /* @__PURE__ */ v(Vn), [Wn, O] = Hn(Vn), Gn = /* @__PURE__ */ D((e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = c.useRef(null), l = c.useRef(null), [d, f] = he({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Vn
	}), [p, m] = c.useState(0), [h, g] = c.useState(0);
	return /* @__PURE__ */ (0, u.jsx)(Wn, {
		scope: t,
		triggerRef: s,
		contentRef: l,
		contentId: Me(),
		titleId: Me(),
		descriptionId: Me(),
		titlePresent: p > 0,
		descriptionPresent: h > 0,
		setTitleCount: m,
		setDescriptionCount: g,
		open: d,
		onOpenChange: f,
		onOpenToggle: c.useCallback(() => f((e) => !e), [f]),
		modal: o,
		children: n
	});
}, "Dialog"), Kn = "DialogTrigger", qn = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: r, ...i } = e, a = O(Kn, r), o = n(t, a.triggerRef);
	return /* @__PURE__ */ (0, u.jsx)(p.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.open ? a.contentId : void 0,
		"data-state": pr(a.open),
		...i,
		ref: o,
		onClick: b(e.onClick, a.onOpenToggle)
	});
}, "DialogTrigger")), Jn = "DialogPortal", [Yn, Xn] = Hn(Jn, { forceMount: void 0 }), Zn = /* @__PURE__ */ D((e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = O(Jn, t);
	return /* @__PURE__ */ (0, u.jsx)(Yn, {
		scope: t,
		forceMount: n,
		children: c.Children.map(r, (e) => /* @__PURE__ */ (0, u.jsx)(Se, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, u.jsx)(mt, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
}, "DialogPortal"), Qn = "DialogOverlay", $n = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let n = Xn(Qn, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = O(Qn, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, u.jsx)(Se, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, u.jsx)(tr, {
			...i,
			ref: t
		})
	}) : null;
}, "DialogOverlay")), er = r("DialogOverlay.RemoveScroll"), tr = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: r, ...i } = e, a = O(Qn, r), o = We(), s = n(t, o);
	return /* @__PURE__ */ (0, u.jsx)(An, {
		as: er,
		allowPinchZoom: !0,
		shards: [a.contentRef],
		children: /* @__PURE__ */ (0, u.jsx)(p.div, {
			"data-state": pr(a.open),
			...i,
			ref: s,
			style: {
				pointerEvents: "auto",
				...i.style
			}
		})
	});
}, "DialogOverlayImpl")), nr = "DialogContent", rr = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let n = Xn(nr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = O(nr, e.__scopeDialog);
	return /* @__PURE__ */ (0, u.jsx)(Se, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, u.jsx)(ir, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, u.jsx)(ar, {
			...i,
			ref: t
		})
	});
}, "DialogContent")), ir = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let r = O(nr, e.__scopeDialog), i = c.useRef(null), a = n(t, r.contentRef, i);
	return c.useEffect(() => {
		let e = i.current;
		if (e) return zn(e);
	}, []), /* @__PURE__ */ (0, u.jsx)(or, {
		...e,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		onCloseAutoFocus: b(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: b(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: b(e.onFocusOutside, (e) => e.preventDefault())
	});
}, "DialogContentModal")), ar = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let n = O(nr, e.__scopeDialog), r = c.useRef(!1), i = c.useRef(!1);
	return /* @__PURE__ */ (0, u.jsx)(or, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "DialogContentNonModal")), or = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = O(nr, n);
	return bt(), /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: /* @__PURE__ */ (0, u.jsx)(nt, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, u.jsx)(He, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
			"aria-labelledby": s.titlePresent ? s.titleId : void 0,
			"data-state": pr(s.open),
			...o,
			ref: t,
			deferPointerDownOutside: !0,
			onDismiss: () => s.onOpenChange(!1)
		})
	}) });
}, "DialogContentImpl")), sr = "DialogTitle", cr = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = O(sr, n), { setTitleCount: a } = i;
	return x(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, u.jsx)(p.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
}, "DialogTitle")), lr = "DialogDescription", ur = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = O(lr, n), { setDescriptionCount: a } = i;
	return x(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]), /* @__PURE__ */ (0, u.jsx)(p.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
}, "DialogDescription")), dr = "DialogClose", fr = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ D(function(e, t) {
	let { __scopeDialog: n, ...r } = e, i = O(dr, n);
	return /* @__PURE__ */ (0, u.jsx)(p.button, {
		type: "button",
		...r,
		ref: t,
		onClick: b(e.onClick, () => i.onOpenChange(!1))
	});
}, "DialogClose"));
function pr(e) {
	return e ? "open" : "closed";
}
D(pr, "getState");
//#endregion
//#region src/theme/namespace.tsx
var k = a(), mr = { display: "contents" }, hr = c.forwardRef((e, t) => {
	let n = (0, k.c)(3), { children: r } = e, i;
	return n[0] !== r || n[1] !== t ? (i = /* @__PURE__ */ (0, u.jsx)("div", {
		ref: t,
		className: "marimo",
		style: mr,
		children: r
	}), n[0] = r, n[1] = t, n[2] = i) : i = n[2], i;
});
hr.displayName = "StyleNamespace";
//#endregion
//#region src/core/vscode/is-in-vscode.ts
function gr() {
	return document.querySelector("[data-vscode-theme-kind]") !== null;
}
//#endregion
//#region src/components/ui/fullscreen.tsx
var _r = "[data-vscode-output-container]", vr = gr() ? 0 : 30;
function yr() {
	let e = (0, k.c)(1), [n, r] = (0, c.useState)(document.fullscreenElement), i;
	return e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
		r(document.fullscreenElement);
	}, e[0] = i) : i = e[0], t(document, "fullscreenchange", i), n;
}
var br = /* @__PURE__ */ new Set();
function xr() {
	for (let e of br) e();
}
function Sr(e) {
	return br.size === 0 && document.addEventListener("fullscreenchange", xr), br.add(e), () => {
		br.delete(e), br.size === 0 && document.removeEventListener("fullscreenchange", xr);
	};
}
function Cr(e) {
	let t = (0, k.c)(2), n;
	return t[0] === e ? n = t[1] : (n = () => {
		let t = document.fullscreenElement;
		return t !== null && t === e.current;
	}, t[0] = e, t[1] = n), (0, c.useSyncExternalStore)(Sr, n);
}
function wr(e) {
	let t = (t) => {
		let n = (0, k.c)(6), [r, i] = c.useState(null), a = c.useRef(null), o, s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
			if (!a.current) return;
			let e = Er(a.current, _r);
			i(e);
		}, s = [], n[0] = o, n[1] = s) : (o = n[0], s = n[1]), c.useLayoutEffect(o, s);
		let l;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ (0, u.jsx)("div", {
			ref: a,
			className: "contents invisible"
		}), n[2] = l) : l = n[2];
		let d;
		return n[3] !== r || n[4] !== t ? (d = /* @__PURE__ */ (0, u.jsxs)(u.Fragment, { children: [l, /* @__PURE__ */ (0, u.jsx)(e, {
			...t,
			container: r
		})] }), n[3] = r, n[4] = t, n[5] = d) : d = n[5], d;
	}, n = (n) => {
		let r = (0, k.c)(7), i = yr();
		if (gr()) {
			let e;
			return r[0] === n ? e = r[1] : (e = /* @__PURE__ */ (0, u.jsx)(t, { ...n }), r[0] = n, r[1] = e), e;
		}
		if (!i) {
			let t;
			return r[2] === n ? t = r[3] : (t = /* @__PURE__ */ (0, u.jsx)(e, { ...n }), r[2] = n, r[3] = t), t;
		}
		let a;
		return r[4] !== i || r[5] !== n ? (a = /* @__PURE__ */ (0, u.jsx)(e, {
			...n,
			container: i
		}), r[4] = i, r[5] = n, r[6] = a) : a = r[6], a;
	};
	return n.displayName = e.displayName, n;
}
function Tr(e) {
	let t = (t) => {
		let n = (0, k.c)(6), [r, i] = c.useState(null), a = c.useRef(null), o, s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (o = () => {
			if (!a.current) return;
			let e = Er(a.current, _r);
			i(e);
		}, s = [], n[0] = o, n[1] = s) : (o = n[0], s = n[1]), c.useLayoutEffect(o, s);
		let l;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ (0, u.jsx)("div", {
			ref: a,
			className: "contents invisible"
		}), n[2] = l) : l = n[2];
		let d;
		return n[3] !== r || n[4] !== t ? (d = /* @__PURE__ */ (0, u.jsxs)(u.Fragment, { children: [l, /* @__PURE__ */ (0, u.jsx)(e, {
			...t,
			collisionBoundary: r
		})] }), n[3] = r, n[4] = t, n[5] = d) : d = n[5], d;
	}, n = (n) => {
		let r = (0, k.c)(4);
		if (gr()) {
			let e;
			return r[0] === n ? e = r[1] : (e = /* @__PURE__ */ (0, u.jsx)(t, { ...n }), r[0] = n, r[1] = e), e;
		}
		let i;
		return r[2] === n ? i = r[3] : (i = /* @__PURE__ */ (0, u.jsx)(e, { ...n }), r[2] = n, r[3] = i), i;
	};
	return n.displayName = e.displayName, n;
}
function Er(e, t) {
	let n = e;
	for (; n;) {
		let e = n.closest(t);
		if (e) return e;
		let r = n.getRootNode();
		if (n = r instanceof ShadowRoot ? r.host : n.parentElement, n === r) break;
	}
	return null;
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function Dr(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Or(e, t = "|") {
	return e.map((e) => Xr(e)).join(t);
}
function kr(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var Ar = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function jr(e) {
	return new Ar(e);
}
function Mr(e) {
	return e == null;
}
function Nr(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Pr(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
var Fr = /* @__PURE__*/ Symbol("evaluating");
function Ir(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== Fr) return r === void 0 && (r = Fr, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function A(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Lr(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function j(e) {
	return Lr(e._zod.def) ?? e._zod.def.shape;
}
function Rr(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return A(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function zr(e, t, n) {
	t in e ? A(e, t, n) : e[t] = n;
}
function M(e, t, n, r) {
	let i = j(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? Rr(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : zr(e, a, r ? r(n.value, a) : n.value));
	}
}
function Br(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? Rr(e, n, () => t[n]) : zr(e, n, r.value));
	}
}
function N(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Vr(e) {
	return JSON.stringify(e);
}
function Hr(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Ur = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Wr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Gr = /* @__PURE__*/ jr(() => {
	if (H.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function Kr(e) {
	if (Wr(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Wr(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function qr(e) {
	return Kr(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var Jr = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function Yr(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function P(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function F(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Xr(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Zr(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var Qr = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, $r = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function ei(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return M(i, e, ti(e, t)), P(e, N(n, {
		shape: i,
		checks: []
	}));
}
function ti(e, t) {
	let n = j(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function ni(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(ti(e, t)), a = {};
	return M(a, e, Reflect.ownKeys(j(e)).filter((e) => !i.has(e))), P(e, N(n, {
		shape: a,
		checks: []
	}));
}
function ri(e, t) {
	if (!Kr(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = j(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return P(e, N(e._zod.def, { shape: ii(e, t) }));
}
function ii(e, t) {
	let n = {};
	return M(n, e, Reflect.ownKeys(j(e))), Br(n, t), n;
}
function ai(e, t) {
	if (!Kr(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return P(e, N(e._zod.def, { shape: ii(e, t) }));
}
function oi(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return M(n, e, Reflect.ownKeys(j(e))), M(n, t, Reflect.ownKeys(j(t))), P(e, N(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function si(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(ti(t, n)) : void 0, o = {};
	return M(o, t, Reflect.ownKeys(j(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), P(t, N(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function ci(e, t, n) {
	let r = n ? new Set(ti(t, n)) : void 0, i = {};
	return M(i, t, Reflect.ownKeys(j(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), P(t, N(t._zod.def, { shape: i }));
}
function I(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function li(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function L(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function ui(e) {
	return typeof e == "string" ? e : e?.message;
}
function di(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function R(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : ui(e.inst?._zod.def?.error?.(e)) ?? ui(a?.(e)) ?? ui(t?.error?.(e)) ?? ui(n.customError?.(e)) ?? ui(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t !== "inst" && t !== "schema" && t !== "continue" && t !== "input" && t !== "__proto__" && (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var fi = /[\uD800-\uDBFF]/;
function pi(e) {
	let t = e.length;
	if (!fi.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function mi(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function hi(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function gi(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function _i(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : bi(e, n, r.value);
	}
}
function z(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function vi(e, t, n) {
	return z(e, t, n, !1);
}
function yi(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return z(this, n, r(this));
			},
			set(e) {
				z(this, n, e);
			}
		});
	}
	return t;
}
function bi(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : z(this, t, n.bind(this));
		},
		set(e) {
			z(this, t, e);
		}
	});
}
function xi(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Si, Ci = !1, wi = {
	configurable: !0,
	get() {
		Ci = !0;
	}
};
function B(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Si !== e._zod) {
		Si = void 0;
		return;
	}
	Si = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, wi);
			let e = Ci;
			Ci = !1;
			try {
				let r = n(this);
				return Ci ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Ci ||= e, r;
			} catch (n) {
				throw delete this[t], Ci ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function Ti(e, t, n, r) {
	let i = xi(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var Ei = "~constantCatch";
function Di(e) {
	let t = () => e;
	return t[Ei] = !0, t;
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
var Oi, ki = {
	value: void 0,
	enumerable: !1
}, Ai = "captureStackTrace" in Error ? Error : null;
function ji(e) {
	let t = Ai;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Ai = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function V(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			ki.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", ki);
			} finally {
				ki.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), _i(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? ji(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Mi = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Ni = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Oi = globalThis).__zod_globalConfig ?? (Oi.__zod_globalConfig = {});
var H = globalThis.__zod_globalConfig;
function U(e) {
	return e && Object.assign(H, e), H;
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function Pi() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, kr, 2), e.message;
}
function Fi(e) {
	this._zod.message = e;
}
var Ii = {
	get: Pi,
	set: Fi,
	enumerable: !0,
	configurable: !0
}, Li = {
	value: void 0,
	enumerable: !1
}, Ri = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), zi = (e, t) => {
	e.name = "$ZodError", Li.value = t, Object.defineProperty(e, "issues", Li), Li.value = void 0, Object.defineProperty(e, "message", Ii);
	let n = Object.getPrototypeOf(e);
	Ri.has(n) || (Ri.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, Bi = V("$ZodError", zi);
V("$ZodError", zi, void 0, { Parent: Error });
function Vi(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Hi(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Vi(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Ui(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
function Wi(e) {
	let t = [], n = e.map((e) => typeof e == "object" ? e.key : e);
	for (let e of n) typeof e == "number" ? t.push(`[${e}]`) : typeof e == "symbol" ? t.push(`[${JSON.stringify(String(e))}]`) : /[^\w$]/.test(e) ? t.push(`[${JSON.stringify(e)}]`) : (t.length && t.push("."), t.push(e));
	return t.join("");
}
function Gi(e) {
	let t = [], n = [...e.issues].sort((e, t) => (e.path ?? []).length - (t.path ?? []).length);
	for (let e of n) t.push(`✖ ${e.message}`), e.path?.length && t.push(`  → at ${Wi(e.path)}`);
	return t.join("\n");
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function Ki(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var qi = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new Mi();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => R(e, o, U())));
			throw Ur(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Ji = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => R(e, o, U())));
			throw Ur(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, Yi = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Mi();
	return a.issues.length ? Xi(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function Xi(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => R(e, n, U()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var Zi = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? Xi(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, Qi = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), $i = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), ea = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== Qi) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return ta(e, t, n);
});
function ta(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[$i] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new Mi();
	return a.issues.length === 0;
}
var na = async (e, t, n) => {
	let r = n ? {
		...n,
		async: !0,
		abortEarly: !0
	} : {
		async: !0,
		abortEarly: !0
	}, i = e._zod.run({
		value: t,
		issues: []
	}, r);
	return i instanceof Promise && (i = await i), i.issues.length === 0;
}, ra = (e) => {
	let t = qi(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, Ki(n, a));
	};
	return n;
}, ia = (e) => {
	let t = qi(e), n = (e, r, i, a) => t(e, r, i, Ki(n, a));
	return n;
}, aa = (e) => {
	let t = Ji(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, Ki(n, a));
	};
	return n;
}, oa = (e) => {
	let t = Ji(e), n = async (e, r, i, a) => await t(e, r, i, Ki(n, a));
	return n;
}, sa = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Yi(e)(t, n, i);
}, ca = (e) => (t, n, r) => Yi(e)(t, n, r), la = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Zi(e)(t, n, i);
}, ua = (e) => async (t, n, r) => Zi(e)(t, n, r), da = /^[cC][0-9a-z]{6,}$/, fa = /^[0-9a-z]+$/, pa = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, ma = /^[0-9a-vA-V]{20}$/, ha = /^[A-Za-z0-9]{27}$/, ga = /^[a-zA-Z0-9_-]{21}$/;
function _a(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var va = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ya = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ba = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, xa = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Sa = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Ca() {
	return new RegExp(Sa, "u");
}
var wa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ta = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ea = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Da = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Oa = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ka = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Aa = /^https?$/, ja = /^\+[1-9]\d{6,14}$/, Ma = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Na(e) {
	return RegExp(`^${e}$`);
}
var Pa = /*@__PURE__*/ Na(Ma);
function Fa(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ia(e) {
	return RegExp(`^${Fa(e)}$`);
}
function La(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Fa({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Fa({ precision: e.precision })}` : n;
	return RegExp(`^${Ma}T(?:${r})$`);
}
var Ra = /^[\s\S]{0,}$/, za = /^-?\d+$/, Ba = /^-?\d+(?:\.\d+)?$/, Va = /^(?:true|false)$/i, Ha = /^null$/i, Ua = /^[^A-Z]*$/, Wa = /^[^a-z]*$/, W = /*@__PURE__*/ V("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ga = (e) => {
	let t = e.value;
	return !Mr(t) && t.length !== void 0;
}, Ka = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, qa = /*@__PURE__*/ V("$ZodCheckLessThan", (e, t) => {
	W.init(e, t);
	let n = Ka[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
			origin: Ka[typeof r.value] ?? n,
			code: "too_big",
			maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ja = /*@__PURE__*/ V("$ZodCheckGreaterThan", (e, t) => {
	W.init(e, t);
	let n = Ka[typeof t.value];
	e._zod.check = (r) => {
		(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
			origin: Ka[typeof r.value] ?? n,
			code: "too_small",
			minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
			input: r.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ya = /*@__PURE__*/ V("$ZodCheckMultipleOf", (e, t) => {
	W.init(e, t), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Pr(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Xa = /*@__PURE__*/ V("$ZodCheckNumberFormat", (e, t) => {
	W.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Qr[t.format];
	e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Za = /*@__PURE__*/ V("$ZodCheckMaxLength", (e, t) => {
	var n;
	W.init(e, t), (n = e._zod.def).when ?? (n.when = Ga), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? pi(r) : i) <= t.maximum) return;
		let a = mi(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), Qa = /*@__PURE__*/ V("$ZodCheckMinLength", (e, t) => {
	var n;
	W.init(e, t), (n = e._zod.def).when ?? (n.when = Ga), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? pi(r) : i) >= t.minimum) return;
		let a = mi(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), $a = /*@__PURE__*/ V("$ZodCheckLengthEquals", (e, t) => {
	var n;
	W.init(e, t), (n = e._zod.def).when ?? (n.when = Ga), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? pi(r) : i;
		if (a === t.length) return;
		let o = mi(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), eo = /*@__PURE__*/ V("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	W.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), to = /*@__PURE__*/ V("$ZodCheckRegex", (e, t) => {
	eo.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), no = /*@__PURE__*/ V("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= Ua, eo.init(e, t);
}), ro = /*@__PURE__*/ V("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Wa, eo.init(e, t);
}), io = /*@__PURE__*/ V("$ZodCheckIncludes", (e, t) => {
	W.init(e, t);
	let n = Yr(t.includes);
	t.pattern = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ao = /*@__PURE__*/ V("$ZodCheckStartsWith", (e, t) => {
	W.init(e, t);
	let n = RegExp(`^${Yr(t.prefix)}.*`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), oo = /*@__PURE__*/ V("$ZodCheckEndsWith", (e, t) => {
	W.init(e, t);
	let n = RegExp(`.*${Yr(t.suffix)}$`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function so(e, t, n) {
	e.issues.length && t.issues.push(...L(n, e.issues));
}
var co = /*@__PURE__*/ V("$ZodCheckProperties", (e, t) => {
	W.init(e, t), vi(e, Symbol.iterator, function* () {
		yield e;
	});
	let n;
	e._zod.check = (r) => {
		if (r.value == null) {
			r.issues.push({
				expected: "object",
				code: "invalid_type",
				input: r.value,
				inst: e
			});
			return;
		}
		n ??= Reflect.ownKeys(t.shape).map((e) => [e, t.shape[e]]);
		let i = r.value, a;
		for (let [e, t] of n) {
			let n = t._zod.run({
				value: i[e],
				issues: []
			}, {});
			n instanceof Promise ? (a ??= [], a.push(n.then((t) => so(t, r, e)))) : so(n, r, e);
		}
		if (a) return Promise.all(a).then(() => void 0);
	};
}), lo = /*@__PURE__*/ V("$ZodCheckOverwrite", (e, t) => {
	W.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), uo = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			--this.indent;
		}
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, fo = {
	major: 4,
	minor: 6,
	patch: 5
}, G = /*@__PURE__*/ V("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = fo;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = I(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (li(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new Mi();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (di(t.issues, n, e), i ||= I(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					di(t.issues, n, e), i ||= I(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (I(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Mi();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Mi();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return vi(this, "~standard", ho(this));
	},
	set "~standard"(e) {
		z(this, "~standard", e);
	}
}), po = (e, t) => e.issues.length ? { issues: e.issues.map((e) => R(e, t, U())) } : { value: e.value };
async function mo(e, t) {
	let n = { async: !0 };
	return po(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function ho(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return po(r, n);
			} catch {}
			return mo(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var go = /*@__PURE__*/ V("$ZodString", (e, t) => {
	G.init(e, t), e._zod.pattern = t.pattern ?? Ra, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), K = /*@__PURE__*/ V("$ZodStringFormat", (e, t) => {
	eo.init(e, t), go.init(e, t);
}), _o = /*@__PURE__*/ V("$ZodGUID", (e, t) => {
	t.pattern ??= ya, K.init(e, t);
}), vo = /*@__PURE__*/ V("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= ba(e);
	} else t.pattern ??= ba();
	K.init(e, t);
}), yo = /*@__PURE__*/ V("$ZodEmail", (e, t) => {
	t.pattern ??= xa, K.init(e, t);
});
function bo(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function xo(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? bo(e) || 2 : So(e, t);
}
function So(e, t) {
	if (!t.normalize && t.protocol?.source === Aa.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		if (typeof URL < "u") {
			let t = URL;
			if (typeof t.parse == "function") return t.parse(e) ?? 2;
		}
		return new URL(e);
	} catch {
		return 2;
	}
}
var Co = /[\t\n\r]/g;
function wo(e) {
	return e.replace(Co, "");
}
function To(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Eo(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var Do = /*@__PURE__*/ V("$ZodURL", (e, t) => {
	K.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = xo(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === !0) {
				n.value = wo(r);
				return;
			}
			t.hostname && !To(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Eo(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : wo(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Oo = /*@__PURE__*/ V("$ZodEmoji", (e, t) => {
	t.pattern ??= Ca(), K.init(e, t);
}), ko = /*@__PURE__*/ V("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? ga : _a(t.length), K.init(e, t);
}), Ao = /*@__PURE__*/ V("$ZodCUID", (e, t) => {
	t.pattern ??= da, K.init(e, t);
}), jo = /*@__PURE__*/ V("$ZodCUID2", (e, t) => {
	t.pattern ??= fa, K.init(e, t);
}), Mo = /*@__PURE__*/ V("$ZodULID", (e, t) => {
	t.pattern ??= pa, K.init(e, t);
}), No = /*@__PURE__*/ V("$ZodXID", (e, t) => {
	t.pattern ??= ma, K.init(e, t);
}), Po = /*@__PURE__*/ V("$ZodKSUID", (e, t) => {
	t.pattern ??= ha, K.init(e, t);
}), Fo = /*@__PURE__*/ V("$ZodISODateTime", (e, t) => {
	t.pattern ??= La(t), K.init(e, t);
}), Io = /*@__PURE__*/ V("$ZodISODate", (e, t) => {
	t.pattern ??= Pa, K.init(e, t);
}), Lo = /*@__PURE__*/ V("$ZodISOTime", (e, t) => {
	t.pattern ??= Ia(t), K.init(e, t);
}), Ro = /*@__PURE__*/ V("$ZodISODuration", (e, t) => {
	t.pattern ??= va, K.init(e, t);
}), zo = /*@__PURE__*/ V("$ZodIPv4", (e, t) => {
	t.pattern ??= wa, K.init(e, t);
}), Bo = /^[0-9a-fA-F:.]+$/;
function Vo(e) {
	return Bo.test(e) ? bo(`http://[${e}]`) : !1;
}
var Ho = /*@__PURE__*/ V("$ZodIPv6", (e, t) => {
	t.pattern ??= Ta, K.init(e, t), e._zod.check = (n) => {
		Vo(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Uo = /*@__PURE__*/ V("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Ea, K.init(e, t);
});
function Wo(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Vo(n);
}
var Go = /*@__PURE__*/ V("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Da, K.init(e, t), e._zod.check = (n) => {
		Wo(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Ko(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var qo = /^[0-9a-zA-Z+/]*={0,2}$/, Jo = /*@__PURE__*/ V("$ZodBase64", (e, t) => {
	t.pattern ??= qo, K.init(e, t), e._zod.check = (n) => {
		Ko(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yo = /^[A-Za-z0-9_-]*$/;
function Xo(e) {
	if (!Yo.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Ko(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Zo = /*@__PURE__*/ V("$ZodBase64URL", (e, t) => {
	t.pattern ??= Yo, K.init(e, t), e._zod.check = (n) => {
		Xo(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Qo = /*@__PURE__*/ V("$ZodE164", (e, t) => {
	t.pattern ??= ja, K.init(e, t);
});
function $o(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var es = /*@__PURE__*/ V("$ZodJWT", (e, t) => {
	K.init(e, t), e._zod.check = (n) => {
		$o(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), ts = /*@__PURE__*/ V("$ZodNumber", (e, t) => {
	G.init(e, t), e._zod.pattern = Ba, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), ns = /*@__PURE__*/ V("$ZodNumberFormat", (e, t) => {
	Xa.init(e, t), ts.init(e, t);
}), rs = /*@__PURE__*/ V("$ZodBoolean", (e, t) => {
	G.init(e, t), e._zod.pattern = Va, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), is = /*@__PURE__*/ V("$ZodNull", (e, t) => {
	G.init(e, t), e._zod.pattern = Ha, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (t, n) => {
		let r = t.value;
		return r === null || t.issues.push({
			expected: "null",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
	};
}), as = /*@__PURE__*/ V("$ZodAny", (e, t) => {
	G.init(e, t), e._zod.parse = (e) => e;
}), os = /*@__PURE__*/ V("$ZodUnknown", (e, t) => {
	G.init(e, t), e._zod.parse = (e) => e;
}), ss = /*@__PURE__*/ V("$ZodNever", (e, t) => {
	G.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
}), cs = /*@__PURE__*/ V("$ZodDate", (e, t) => {
	G.init(e, t), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = new Date(n.value);
		} catch {}
		let i = n.value, a = i instanceof Date;
		return a && !Number.isNaN(i.getTime()) || n.issues.push({
			expected: "date",
			code: "invalid_type",
			input: i,
			...a ? { received: "Invalid Date" } : {},
			inst: e
		}), n;
	};
});
function ls(e, t, n) {
	e.issues.length && t.issues.push(...L(n, e.issues)), t.value[n] = e.value;
}
var us = /*@__PURE__*/ V("$ZodArray", (e, t) => {
	G.init(e, t);
	let n = H.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [], s = i?.abortEarly;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) o.push(c.then((t) => ls(t, r, e)));
			else if (ls(c, r, e), s && c.issues.length !== 0 && I(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function ds(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (!(!o && s && i === "optional")) {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...L(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var fs = [];
function ps(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : fs, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Zr(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function ms(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (I(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => ds(e, n, i, t, d, f))) : ds(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var hs = /*@__PURE__*/ V("$ZodObject", (e, t) => {
	G.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = jr(() => ps(t));
	B(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || A(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = Wr, o = t.catchall, s, c = H.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		s ??= i.value;
		let r = t.value;
		if (!a(r)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
		for (let e of s.allKeys) {
			if (d && t.issues.length !== f) {
				if (I(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => ds(n, t, e, r, a, o))) : ds(s, t, e, r, a, o);
		}
		return o ? ms(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), gs = /*@__PURE__*/ V("$ZodObjectJIT", (e, t) => {
	hs.init(e, t);
	let n = e._zod.parse, r = jr(() => ps(t)), i = H.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new uo(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Vr(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = Wr, c = !H.jitless, l = c && Gr.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? ms([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function _s(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !I(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => R(e, r, U())))
	}), t);
}
var vs = /*@__PURE__*/ V("$ZodUnion", (e, t) => {
	G.init(e, t), B(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), B(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), B(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), B(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => Nr(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => _s(t, r, e, i)) : _s(o, r, e, i);
	};
});
function ys(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.options) {
		let r = n._zod.propValues?.[e.discriminator];
		if (!r || r.size === 0) throw Error(`Invalid discriminated union option at index "${e.options.indexOf(n)}"`);
		for (let e of r) if (t.has(e)) {
			if (e !== void 0) throw Error(`Duplicate discriminator value "${String(e)}"`);
			t.set(e, null);
		} else t.set(e, n);
	}
	return t;
}
var bs = /*@__PURE__*/ V("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, vs.init(e, t);
	let n = e._zod.parse;
	B(e, "propValues", (e) => {
		let t = {}, n = 0;
		for (let r of e.def.options) {
			let i = r._zod.propValues;
			if (!i || Object.keys(i).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(r)}"`);
			i[e.def.discriminator]?.has(void 0) && n++;
			for (let [e, n] of Object.entries(i)) {
				Object.prototype.hasOwnProperty.call(t, e) || A(t, e, /* @__PURE__ */ new Set());
				for (let r of n) t[e].add(r);
			}
		}
		return !e.def.unionFallback && n > 1 && t[e.def.discriminator]?.delete(void 0), t;
	}), t.options.forEach((e, n) => {
		let r = Lr(e._zod.def);
		if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
	});
	let r = jr(() => ys(t));
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!Wr(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = o?.[t.discriminator], c = r.value.get(s);
		return c && (s !== void 0 || a.direction !== "backward") ? c._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			options: Array.from(r.value.keys()).filter((e) => r.value.get(e) !== null),
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), xs = /*@__PURE__*/ V("$ZodIntersection", (e, t) => {
	G.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Cs(e, t, n)) : Cs(e, i, a);
	};
});
function Ss(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Kr(e) && Kr(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Ss(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Ss(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Cs(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Ss(t.value, n.value);
	if (!c.valid) {
		if (I(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var ws = /*@__PURE__*/ V("$ZodTuple", (e, t) => {
	G.init(e, t);
	let n = t.items, r = H.memoizer;
	r?.attach(e), e._zod.parse = (i, a) => {
		let o = i.value;
		if (!Array.isArray(o)) return i.issues.push({
			input: o,
			inst: e,
			expected: "tuple",
			code: "invalid_type"
		}), i;
		i.value = r ? r.alloc(e, i, [], a) : [];
		let s = [], c = Ts(n, "optin"), l = Ts(n, "optout");
		if (!t.rest) {
			if (o.length < c) return i.issues.push({
				code: "too_small",
				minimum: c,
				inclusive: !0,
				input: o,
				inst: e,
				origin: "array"
			}), i;
			o.length > n.length && i.issues.push({
				code: "too_big",
				maximum: n.length,
				inclusive: !0,
				input: o,
				inst: e,
				origin: "array"
			});
		}
		let u = Array(n.length), d = t.rest ? a?.abortEarly : void 0, f = !1;
		for (let e = 0; e < n.length; e++) {
			let t = n[e]._zod.run({
				value: o[e],
				issues: []
			}, a);
			t instanceof Promise ? s.push(t.then((t) => {
				u[e] = t;
			})) : (u[e] = t, d && !f && t.issues.length && (f = I(t)));
		}
		if (t.rest && !f) {
			let e = n.length - 1, r = o.slice(n.length), c = i.issues.length;
			for (let n of r) {
				if (d && i.issues.length !== c) {
					if (I(i, c)) break;
					c = i.issues.length;
				}
				e++;
				let r = t.rest._zod.run({
					value: n,
					issues: []
				}, a);
				r instanceof Promise ? s.push(r.then((t) => Es(t, i, e))) : Es(r, i, e);
			}
		}
		return s.length ? Promise.all(s).then(() => Ds(u, i, n, o, l)) : Ds(u, i, n, o, l);
	};
});
function Ts(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function Es(e, t, n) {
	e.issues.length && t.issues.push(...L(n, e.issues)), t.value[n] = e.value;
}
function Ds(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let o = e[a], s = a < r.length;
		if (!s && a >= i && n[a]._zod.optin === "optional") {
			t.value.length = a;
			break;
		}
		if (o.issues.length) {
			if (!s && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...L(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
var Os = /*@__PURE__*/ V("$ZodRecord", (e, t) => {
	G.init(e, t);
	let n = H.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Kr(a)) return r.issues.push({
			expected: "record",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		let o = [], s = t.keyType._zod.values;
		if (s && !t.partial) {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c = /* @__PURE__ */ new Set();
			for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
				if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
				let s = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (s.issues.length) {
					r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => R(e, i, U())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let l = s.value;
				if (l === "__proto__") continue;
				let u = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				u instanceof Promise ? o.push(u.then((e) => {
					e.issues.length && r.issues.push(...L(n, e.issues)), r.value[l] = e.value;
				})) : (u.issues.length && r.issues.push(...L(n, u.issues)), r.value[l] = u.value);
			}
			let l;
			for (let e in a) if (!c.has(e)) {
				if (t.mode === "loose") {
					if (e === "__proto__") continue;
					r.value[e] = a[e];
				} else l ??= [], l.push(e);
			}
			l && l.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: l,
				continue: !0
			});
		} else {
			r.value = n ? n.alloc(e, r, {}, i) : {};
			let c;
			for (let n of Reflect.ownKeys(a)) {
				if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
				let l = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof n == "string" && Ba.test(n) && l.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (l = e);
				}
				if (l.issues.length) {
					t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: l.issues.map((e) => R(e, i, U())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				let u = l.value;
				if (u === "__proto__") continue;
				let d = t.valueType._zod.run({
					value: a[n],
					issues: []
				}, i);
				d instanceof Promise ? o.push(d.then((e) => {
					e.issues.length && r.issues.push(...L(n, e.issues)), r.value[u] = e.value;
				})) : (d.issues.length && r.issues.push(...L(n, d.issues)), r.value[u] = d.value);
			}
			c && c.length > 0 && r.issues.push({
				code: "unrecognized_keys",
				input: a,
				inst: e,
				keys: c,
				continue: !0
			});
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
}), ks = /*@__PURE__*/ V("$ZodEnum", (e, t) => {
	G.init(e, t);
	let n = Dr(t.entries), r = new Set(n);
	e._zod.values = r, B(e, "pattern", (e) => {
		let t = Dr(e.def.entries).filter((e) => Jr.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => Yr(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), As = /*@__PURE__*/ V("$ZodLiteral", (e, t) => {
	G.init(e, t);
	let n = new Set(t.values);
	e._zod.values = n, B(e, "pattern", (e) => {
		let t = e.def.values;
		return RegExp(t.length ? `^(${t.map((e) => typeof e == "string" ? Yr(e) : e ? Yr(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), js = /*@__PURE__*/ V("$ZodTransform", (e, t) => {
	G.init(e, t), e._zod.optin = "optional", H.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ni(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Mi();
		return n.value = i, n;
	};
});
function Ms(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Ns = /*@__PURE__*/ V("$ZodOptional", (e, t) => {
	G.init(e, t), B(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", B(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), B(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Nr(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => Ms(e, t)) : Ms(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), Ps = /*@__PURE__*/ V("$ZodExactOptional", (e, t) => {
	Ns.init(e, t), B(e, "values", (e) => e.def.innerType._zod.values), B(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Fs = /*@__PURE__*/ V("$ZodNullable", (e, t) => {
	G.init(e, t), B(e, "optin", (e) => e.def.innerType._zod.optin), B(e, "optout", (e) => e.def.innerType._zod.optout), B(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Nr(t.source)}|null)$`) : void 0;
	}), B(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Is = /*@__PURE__*/ V("$ZodDefault", (e, t) => {
	G.init(e, t), e._zod.optin = "defaulted", B(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Ls(e, t)) : Ls(r, t);
	};
});
function Ls(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Rs = /*@__PURE__*/ V("$ZodPrefault", (e, t) => {
	G.init(e, t), e._zod.optin = "defaulted", B(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), zs = /*@__PURE__*/ V("$ZodNonOptional", (e, t) => {
	G.init(e, t), B(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Bs(t, e)) : Bs(i, e);
	};
});
function Bs(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Vs(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => R(e, r, U())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var Hs = /*@__PURE__*/ V("$ZodCatch", (e, t) => {
	G.init(e, t), B(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), B(e, "optout", (e) => e.def.innerType._zod.optout), B(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => Vs(e, r, t, n)) : Vs(e, r, t, n);
	};
}), Us = /*@__PURE__*/ V("$ZodNaN", (e, t) => {
	G.init(e, t), e._zod.parse = (t, n) => ((typeof t.value != "number" || !Number.isNaN(t.value)) && t.issues.push({
		input: t.value,
		inst: e,
		expected: "nan",
		code: "invalid_type"
	}), t);
}), Ws = /*@__PURE__*/ V("$ZodPipe", (e, t) => {
	G.init(e, t), B(e, "values", (e) => e.def.in._zod.values), B(e, "optin", (e) => e.def.in._zod.optin), B(e, "optout", (e) => e.def.out._zod.optout), B(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Gs(e, t.in, n)) : Gs(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Gs(e, t.out, n)) : Gs(r, t.out, n);
	};
});
function Gs(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Ks = /*@__PURE__*/ V("$ZodReadonly", (e, t) => {
	G.init(e, t), B(e, "propValues", (e) => e.def.innerType._zod.propValues), B(e, "values", (e) => e.def.innerType._zod.values), B(e, "optin", (e) => e.def.innerType?._zod?.optin), B(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(qs) : qs(r);
	};
});
function qs(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var Js = /*@__PURE__*/ V("$ZodLazy", (e, t) => {
	G.init(e, t), Ir(e._zod, "innerType", () => {
		let e = t;
		return e._cachedInner ||= t.getter(), e._cachedInner;
	}), B(e, "pattern", (e) => e.innerType?._zod?.pattern), B(e, "propValues", (e) => e.innerType?._zod?.propValues), B(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0), B(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
}), Ys = /*@__PURE__*/ V("$ZodCustom", (e, t) => {
	W.init(e, t), G.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Xs(t, n, r, e));
		Xs(i, n, r, e);
	};
});
function Xs(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(gi(e));
	}
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
var Zs = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Qs = "~memo", $s = [];
function ec(e) {
	return typeof e == "object" && !!e;
}
function tc(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var nc = /*@__PURE__*/ new WeakMap(), rc = 0, ic = 1, ac = 2;
function oc(e, t, n) {
	let r = nc.get(e);
	if (r !== void 0) return r ? ac : rc;
	if (t.has(e)) return ac;
	t.add(e);
	let i = rc, a = (e) => {
		if (i !== ac && e?._zod) {
			let r = oc(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = rc;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? ic : o.value?._zod ? oc(o.value, t, n) : rc;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = Lr(c);
			s(e ? o(e, !0) : ic), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? oc(r, t, !1) : ic);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (!(!n || typeof n != "object")) {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), sc(e, i);
}
function sc(e, t) {
	return t !== ic && nc.set(e, t === ac), t;
}
function cc(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var lc, uc = [], dc = {
	alloc(e, t, n) {
		let r = lc;
		if (!r) return n;
		lc = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), uc.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && pc(n, e.value)) throw new Zs();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r = !1, i, a;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, o = (s, c) => {
				if (n === void 0) {
					let i = oc(e, /* @__PURE__ */ new Set(), !1);
					if (i === rc) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === ac || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!ec(l)) return t(s, c);
				let u = c[Qs];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[Qs] = u);
				let d;
				i === c ? d = a : (d = cc(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...tc(f.issues)) : (s.memo = !0, u.backEdges ?? (u.backEdges = /* @__PURE__ */ new WeakSet()), u.backEdges.add(f.value)), s;
				lc = d;
				let p = uc.length, m = t(s, c);
				lc = void 0;
				let h = uc.length > p ? uc.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? tc(e.issues) : $s), e)) : (h && (h.issues = m.issues.length ? tc(m.issues) : $s), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function fc() {
	return dc;
}
function pc(e, t) {
	let n = e[Qs]?.backEdges;
	return n !== void 0 && ec(t) && n.has(t);
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
var mc = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(hi(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${Xr(e.values[0])}` : `Invalid option: expected one of ${Or(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Or(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function hc() {
	return { localeError: mc() };
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/registries.js
var gc, _c = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function vc() {
	return new _c();
}
(gc = globalThis).__zod_globalRegistry ?? (gc.__zod_globalRegistry = vc());
var yc = globalThis.__zod_globalRegistry;
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function bc(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function xc(e, t) {
	return new e(bc({
		type: "string",
		...F(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Sc(e, t) {
	return new e(bc({
		type: "string",
		coerce: !0,
		...F(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Cc(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wc(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Tc(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ec(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Dc(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oc(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function kc(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ac(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function jc(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mc(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Nc(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pc(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fc(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ic(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Lc(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Rc(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zc(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bc(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vc(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hc(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Uc(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wc(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gc(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Kc(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qc(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Jc(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Yc(e, t) {
	return new e(bc({
		type: "number",
		checks: [],
		...F(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Xc(e, t) {
	return new e(bc({
		type: "number",
		coerce: !0,
		checks: [],
		...F(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function Zc(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qc(e, t) {
	return new e({
		type: "boolean",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $c(e, t) {
	return new e({
		type: "null",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function el(e) {
	return new e({ type: "any" });
}
// @__NO_SIDE_EFFECTS__
function tl(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function nl(e, t) {
	return new e({
		type: "never",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function rl(e, t) {
	return new e({
		type: "date",
		coerce: !0,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function il(e, t) {
	return new e({
		type: "nan",
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function al(e, t) {
	return new qa({
		check: "less_than",
		...F(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function ol(e, t) {
	return new qa({
		check: "less_than",
		...F(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function sl(e, t) {
	return new Ja({
		check: "greater_than",
		...F(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function cl(e, t) {
	return new Ja({
		check: "greater_than",
		...F(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
	return new Ya({
		check: "multiple_of",
		...F(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function ul(e, t) {
	return new Za({
		check: "max_length",
		...F(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function dl(e, t) {
	return new Qa({
		check: "min_length",
		...F(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function fl(e, t) {
	return new $a({
		check: "length_equals",
		...F(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function pl(e, t) {
	return new to({
		check: "string_format",
		format: "regex",
		...F(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
	return new no({
		check: "string_format",
		format: "lowercase",
		...F(e)
	});
}
// @__NO_SIDE_EFFECTS__
function hl(e) {
	return new ro({
		check: "string_format",
		format: "uppercase",
		...F(e)
	});
}
// @__NO_SIDE_EFFECTS__
function gl(e, t) {
	return new io({
		check: "string_format",
		format: "includes",
		...F(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function _l(e, t) {
	return new ao({
		check: "string_format",
		format: "starts_with",
		...F(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function vl(e, t) {
	return new oo({
		check: "string_format",
		format: "ends_with",
		...F(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function yl(e, t) {
	return new co({
		check: "properties",
		shape: e,
		...F(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
	return new lo({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function xl(e) {
	return /* @__PURE__ */ bl((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Sl() {
	return /* @__PURE__ */ bl((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Cl() {
	return /* @__PURE__ */ bl((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function wl() {
	return /* @__PURE__ */ bl((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Tl() {
	return /* @__PURE__ */ bl((e) => Hr(e));
}
// @__NO_SIDE_EFFECTS__
function El(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...F(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Dl(e, t, n) {
	let r = F(n);
	return r.abort ??= !0, new e({
		type: "custom",
		check: "custom",
		fn: t,
		...r
	});
}
// @__NO_SIDE_EFFECTS__
function Ol(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...F(n)
	});
}
// @__NO_SIDE_EFFECTS__
function kl(e, t) {
	let n = /* @__PURE__ */ Al((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(gi(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(gi(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Al(e, t) {
	let n = new W({
		check: "custom",
		...F(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function jl(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && A(e, t, n[t]);
	return e;
}
function Ml(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? yc,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function q(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function J(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, J(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && jl(o.schema, c), t.io === "input" && Y(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Nl(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Pl(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Nl(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Nl(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		r.count > 1 && e.reused === "ref" && a(n);
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Fl(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Fl(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var Il = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), Ll = ["oneOf", "anyOf"];
function Rl(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function zl(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Il.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Rl(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			A(n, r, e.length === 1 ? e[0] : zl(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = Rl(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Bl(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Il) if (t in e) return;
	let n = t.filter((e) => Ll.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = zl(t);
	else {
		let e = n[0], i = Ll.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => zl([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, jl(e, r));
}
function Vl(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : jl(i, s), jl(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Fl(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Bl(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	jl(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, A(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Ul(t, "input", e.processors),
					output: Ul(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function Y(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return Y(r.element, n);
	if (r.type === "set") return Y(r.valueType, n);
	if (r.type === "lazy") return Y(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return Y(r.innerType, n);
	if (r.type === "intersection") return Y(r.left, n) || Y(r.right, n);
	if (r.type === "record" || r.type === "map") return Y(r.keyType, n) || Y(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : Y(r.in, n) || Y(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (Y(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (Y(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (Y(e, n)) return !0;
		return !!(r.rest && Y(r.rest, n));
	}
	return !1;
}
var Hl = (e, t = {}) => (n) => {
	let r = Ml({
		...n,
		processors: t
	});
	return J(e, r), Pl(r, e), Vl(r, e);
}, Ul = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Ml({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return J(e, o), Pl(o, e), Vl(o, e);
}, Wl = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, Gl = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, Kl = (e, t) => {
	Wl(e, "minimum", t), Gl(e, "maximum", t);
}, ql = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Jl = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, Yl = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, Xl = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, Zl = (e, t) => Wl(e, "minimum", t.minimum), Ql = (e, t) => Gl(e, "maximum", t.maximum), $l = (e) => (t, n) => {
	Xl(t, n.format);
	let [r, i] = e[n.format];
	Wl(t, "minimum", r), Gl(t, "maximum", i);
}, eu = {
	greater_than: (e, t) => Wl(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => Gl(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => ql(e, t.value),
	number_format: $l(Qr),
	bigint_format: $l($r),
	min_length: Zl,
	max_length: Ql,
	length_equals: (e, t) => Kl(e, t.length),
	min_size: Zl,
	max_size: Ql,
	size_equals: (e, t) => Kl(e, t.size),
	string_format: (e, t) => {
		Xl(e, t.format), t.pattern && Jl(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Yl(e, t.mime)
};
function X(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) eu[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && Wl(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && Wl(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && Gl(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && Gl(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && ql(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && Yl(t, i.mime);
	for (let e of i.patterns ?? []) Jl(t, e);
	return t;
}
var tu = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, nu = /* @__PURE__ */ new Map([[qo, Oa], [Yo, ka]]), ru = (e) => nu.get(e) ?? e, iu = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = X(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = tu[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(ru);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, au = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, multipleOf: s, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = X(e);
	i.type = u ? "integer" : "number";
	let d = typeof l == "number" && l >= (a ?? -Infinity), f = typeof c == "number" && c <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	if (d ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : typeof o == "number" && (i.maximum = o), s) {
		let n = /* @__PURE__ */ new Set();
		for (let a of s) Number.isFinite(a) && a !== 0 ? n.add(Math.abs(a)) : q(e, t, i, r, `A multipleOf divisor of ${a} cannot be represented in JSON Schema`);
		let [a, ...o] = n;
		a !== void 0 && (i.multipleOf = a), o.length && (i.allOf = [...i.allOf ?? [], ...o.map((e) => ({ multipleOf: e }))]);
	}
}, ou = (e, t, n, r) => {
	n.type = "boolean";
}, su = (e, t, n, r) => {
	q(e, t, n, r, "BigInt cannot be represented in JSON Schema");
}, cu = (e, t, n, r) => {
	q(e, t, n, r, "Symbols cannot be represented in JSON Schema");
}, lu = (e, t, n, r) => {
	t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
}, uu = (e, t, n, r) => {
	q(e, t, n, r, "Undefined cannot be represented in JSON Schema");
}, du = (e, t, n, r) => {
	q(e, t, n, r, "Void cannot be represented in JSON Schema");
}, fu = (e, t, n, r) => {
	n.not = {};
}, pu = (e, t, n, r) => {}, mu = (e, t, n, r) => {}, hu = (e, t, n, r) => {
	q(e, t, n, r, "Date cannot be represented in JSON Schema");
}, gu = (e, t, n, r) => {
	let i = e._zod.def, a = Dr(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, _u = (e, t, n, r) => {
	let i = e._zod.def;
	if (i.values.length === 0) {
		n.not = {};
		return;
	}
	let a = [];
	for (let o of i.values) if (o === void 0) {
		if (q(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
	} else if (typeof o == "bigint") {
		if (q(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
		a.push(Number(o));
	} else a.push(o);
	if (a.length !== 0) {
		if (a.length === 1) {
			let e = a[0];
			n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
		} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
	}
}, vu = (e, t, n, r) => {
	q(e, t, n, r, "NaN cannot be represented in JSON Schema");
}, yu = (e, t, n, r) => {
	let i = n, a = e._zod.pattern;
	if (!a) throw Error("Pattern not found in template literal");
	i.type = "string", i.pattern = a.source;
}, bu = (e, t, n, r) => {
	let i = n;
	i.type = "string", i.format = "binary", i.contentEncoding = "binary";
	let { minimum: a, maximum: o, mime: s } = X(e);
	a !== void 0 && (i.minLength = a), o !== void 0 && (i.maxLength = o), s && (s.length === 0 ? i.not = {} : s.length === 1 ? i.contentMediaType = s[0] : i.anyOf = s.map((e) => ({ contentMediaType: e })));
}, xu = (e, t, n, r) => {
	n.type = "boolean";
}, Su = (e, t, n, r) => {
	q(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, Cu = (e, t, n, r) => {
	q(e, t, n, r, "Function types cannot be represented in JSON Schema");
}, wu = (e, t, n, r) => {
	q(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Tu = (e, t, n, r) => {
	q(e, t, n, r, "Map cannot be represented in JSON Schema");
}, Eu = (e, t, n, r) => {
	q(e, t, n, r, "Set cannot be represented in JSON Schema");
}, Du = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = X(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = J(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function Ou(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Ou(t.out) : t.type === "catch" ? Ou(t.innerType) : e._zod.optin;
}
var ku = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && q(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) A(i.properties, e, J(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = [];
	for (let e of Object.keys(o)) {
		let n = a.shape[e];
		(t.io === "input" ? Ou(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = J(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Au = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => J(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, ju = (e, t, n, r) => {
	let i = e._zod.def, a = J(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = J(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Mu = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "array";
	let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => J(e, t, {
		...r,
		path: [
			...r.path,
			o,
			n
		]
	})), l = a.rest ? J(a.rest, t, {
		...r,
		path: [
			...r.path,
			s,
			...t.target === "openapi-3.0" ? [a.items.length] : []
		]
	}) : null, u = a.items.length;
	for (; u > 0;) {
		let e = a.items[u - 1];
		if (!(t.io === "input" ? Ou(e) !== void 0 : e._zod.optout === "optional")) break;
		u--;
	}
	let d = a.items.length, f = !a.rest;
	t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
	let { minimum: p, maximum: m } = X(e);
	typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
};
function Nu(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Nu(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Nu(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? Ba : za).source), p) : p;
}
var Pu = /* @__PURE__ */ new WeakMap();
function Fu(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of Pu.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Nu(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
var Iu = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = X(o).patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = J(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) A(i.patternProperties, ru(t).source, e);
	} else {
		if (t.target === "draft-07" || t.target === "draft-2020-12") {
			i.propertyNames = J(a.keyType, t, {
				...r,
				path: [...r.path, "propertyNames"]
			});
			let n = Pu.get(t);
			n || (n = [], Pu.set(t, n), t.deferred.push(() => Fu(t))), n.push(e);
		}
		i.additionalProperties = J(a.valueType, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		});
	}
	let c = o._zod.values, l = t.io === "input" && Ou(a.valueType) !== void 0;
	if (c && !a.partial && !l) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e.map(String));
	}
}, Lu = (e, t, n, r) => {
	let i = e._zod.def, a = J(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Ru = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, zu = Symbol();
function Bu(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (q(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), zu) : JSON.parse(o);
}
var Vu = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Bu(i.defaultValue, e, t, n, r);
	o !== zu && (n.default = o);
}, Hu = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Bu(i.defaultValue, e, t, n, r);
	o !== zu && (n._prefault = o);
}, Uu = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		q(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, Wu = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	J(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Gu = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Ku = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, qu = (e, t, n, r) => {
	let i = e._zod.def;
	J(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ju = (e, t, n, r) => {
	let i = e._zod.innerType;
	J(i, t, r);
	let a = t.seen.get(e);
	a.ref = i;
}, Yu = {
	string: iu,
	number: au,
	boolean: ou,
	bigint: su,
	symbol: cu,
	null: lu,
	undefined: uu,
	void: du,
	never: fu,
	any: pu,
	unknown: mu,
	date: hu,
	enum: gu,
	literal: _u,
	nan: vu,
	template_literal: yu,
	file: bu,
	success: xu,
	custom: Su,
	function: Cu,
	transform: wu,
	map: Tu,
	set: Eu,
	array: Du,
	object: ku,
	union: Au,
	intersection: ju,
	tuple: Mu,
	record: Iu,
	nullable: Lu,
	nonoptional: Ru,
	default: Vu,
	prefault: Hu,
	catch: Uu,
	pipe: Wu,
	readonly: Gu,
	promise: Ku,
	optional: qu,
	lazy: Ju
};
function Xu(e, t) {
	if ("_idmap" in e) {
		let n = e, r = Ml({
			...t,
			processors: Yu
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			J(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			Pl(r, n), A(a, t, Vl(r, n));
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = Ml({
		...t,
		processors: Yu
	});
	return J(e, n), Pl(n, e), Vl(n, e);
}
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/errors.js
var Zu = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Qu(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var $u = (e, t) => {
	Bi.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	Zu.has(n) || (Zu.add(n), Qu(n, "format", (e) => (t) => Ui(e, t)), Qu(n, "flatten", (e) => (t) => Hi(e, t)), Qu(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, kr, 2);
	}), Qu(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, kr, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, ed = /*@__PURE__*/ V("ZodError", $u), Z = /*@__PURE__*/ V("ZodError", $u, void 0, { Parent: Error }), td = /* @__PURE__ */ qi(Z), nd = /* @__PURE__ */ Ji(Z), rd = /* @__PURE__ */ Yi(Z), id = /* @__PURE__ */ Zi(Z), ad = /* @__PURE__ */ ra(Z), od = /* @__PURE__ */ ia(Z), sd = /* @__PURE__ */ aa(Z), cd = /* @__PURE__ */ oa(Z), ld = /* @__PURE__ */ sa(Z), ud = /* @__PURE__ */ ca(Z), dd = /* @__PURE__ */ la(Z), fd = /* @__PURE__ */ ua(Z);
//#endregion
//#region ../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function pd() {
	H.localeError || U(hc());
}
function md() {
	H.memoizer || U({ memoizer: fc() });
}
var Q = /*@__PURE__*/ V("ZodType", (e, t) => (pd(), G.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(N(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return P(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(Jf(e, t));
	},
	superRefine(e, t) {
		return this.check(Yf(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ bl(e));
	},
	optional() {
		return Tf(this);
	},
	exactOptional() {
		return Df(this);
	},
	nullable() {
		return kf(this);
	},
	nullish() {
		return Tf(kf(this));
	},
	nonoptional(e) {
		return Ff(this, e);
	},
	array() {
		return rf(this);
	},
	or(e) {
		return lf([this, e]);
	},
	and(e) {
		return pf(this, e);
	},
	transform(e) {
		return Vf(this, Cf(e));
	},
	default(e) {
		return jf(this, e);
	},
	prefault(e) {
		return Nf(this, e);
	},
	catch(e) {
		return Lf(this, e);
	},
	pipe(e) {
		return Vf(this, e);
	},
	readonly() {
		return Uf(this);
	},
	describe(e) {
		let t = this.clone();
		return yc.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return yc.get(this);
		let t = this.clone();
		return yc.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return vi(this, "~standard", {
			...ho(this),
			jsonSchema: {
				input: Ul(this, "input"),
				output: Ul(this, "output")
			}
		});
	},
	set "~standard"(e) {
		z(this, "~standard", e);
	},
	parse: function e(t, n) {
		return td(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await nd(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return rd(this, e, t);
	},
	async safeParseAsync(e, t) {
		return id(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		z(this, "spa", e);
	},
	validate(e, t) {
		return ea(this, e, t);
	},
	validateAsync(e, t) {
		return na(this, e, t);
	},
	encode: function e(t, n) {
		return ad(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return od(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await sd(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await cd(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return ld(this, e, t);
	},
	safeDecode(e, t) {
		return ud(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return dd(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return fd(this, e, t);
	},
	toJSONSchema(e) {
		return Hl(this, {})(e);
	},
	get description() {
		return yc.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), hd = /*@__PURE__*/ V("_ZodString", (e, t) => {
	go.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => iu(e, t, n, r);
}, /*@__PURE__*/ yi({
	format: (e) => X(e).format ?? null,
	minLength: (e) => X(e).minimum ?? null,
	maxLength: (e) => X(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ pl(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ gl(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ _l(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ vl(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ dl(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ ul(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ fl(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ dl(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ ml(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ hl(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ Sl());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ xl(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Cl());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ wl());
	},
	slugify() {
		return this.check(/* @__PURE__ */ Tl());
	}
})), gd = /*@__PURE__*/ V("ZodString", (e, t) => {
	go.init(e, t), hd.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ Cc(Sd, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ kc(Td, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ Wc(Bd, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ Ac(Ed, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ wc(Cd, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ Tc(wd, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ Ec(wd, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ Dc(wd, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ Oc(wd, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ jc(Dd, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ Mc(Od, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ Nc(kd, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ Pc(Ad, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ Vc(Ld, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Hc(Rd, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ Fc(jd, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ Ic(Md, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ Lc(Nd, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ Rc(Pd, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ zc(Fd, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ Bc(Id, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ Uc(zd, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ Gc(vd, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Kc(yd, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ qc(bd, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ Jc(xd, e));
	}
});
function _d(e) {
	return /* @__PURE__ */ xc(gd, e);
}
var $ = /*@__PURE__*/ V("ZodStringFormat", (e, t) => {
	K.init(e, t), hd.init(e, t);
}), vd = /*@__PURE__*/ V("ZodISODateTime", (e, t) => {
	Fo.init(e, t), $.init(e, t);
}), yd = /*@__PURE__*/ V("ZodISODate", (e, t) => {
	Io.init(e, t), $.init(e, t);
}), bd = /*@__PURE__*/ V("ZodISOTime", (e, t) => {
	Lo.init(e, t), $.init(e, t);
}), xd = /*@__PURE__*/ V("ZodISODuration", (e, t) => {
	Ro.init(e, t), $.init(e, t);
}), Sd = /*@__PURE__*/ V("ZodEmail", (e, t) => {
	yo.init(e, t), $.init(e, t);
}), Cd = /*@__PURE__*/ V("ZodGUID", (e, t) => {
	_o.init(e, t), $.init(e, t);
}), wd = /*@__PURE__*/ V("ZodUUID", (e, t) => {
	vo.init(e, t), $.init(e, t);
}), Td = /*@__PURE__*/ V("ZodURL", (e, t) => {
	Do.init(e, t), $.init(e, t);
}), Ed = /*@__PURE__*/ V("ZodEmoji", (e, t) => {
	Oo.init(e, t), $.init(e, t);
}), Dd = /*@__PURE__*/ V("ZodNanoID", (e, t) => {
	ko.init(e, t), $.init(e, t);
}), Od = /*@__PURE__*/ V("ZodCUID", (e, t) => {
	Ao.init(e, t), $.init(e, t);
}), kd = /*@__PURE__*/ V("ZodCUID2", (e, t) => {
	jo.init(e, t), $.init(e, t);
}), Ad = /*@__PURE__*/ V("ZodULID", (e, t) => {
	Mo.init(e, t), $.init(e, t);
}), jd = /*@__PURE__*/ V("ZodXID", (e, t) => {
	No.init(e, t), $.init(e, t);
}), Md = /*@__PURE__*/ V("ZodKSUID", (e, t) => {
	Po.init(e, t), $.init(e, t);
}), Nd = /*@__PURE__*/ V("ZodIPv4", (e, t) => {
	zo.init(e, t), $.init(e, t);
}), Pd = /*@__PURE__*/ V("ZodIPv6", (e, t) => {
	Ho.init(e, t), $.init(e, t);
}), Fd = /*@__PURE__*/ V("ZodCIDRv4", (e, t) => {
	Uo.init(e, t), $.init(e, t);
}), Id = /*@__PURE__*/ V("ZodCIDRv6", (e, t) => {
	Go.init(e, t), $.init(e, t);
}), Ld = /*@__PURE__*/ V("ZodBase64", (e, t) => {
	Jo.init(e, t), $.init(e, t);
}), Rd = /*@__PURE__*/ V("ZodBase64URL", (e, t) => {
	Zo.init(e, t), $.init(e, t);
}), zd = /*@__PURE__*/ V("ZodE164", (e, t) => {
	Qo.init(e, t), $.init(e, t);
}), Bd = /*@__PURE__*/ V("ZodJWT", (e, t) => {
	es.init(e, t), $.init(e, t);
}), Vd = /*@__PURE__*/ V("ZodNumber", (e, t) => {
	ts.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => au(e, t, n, r), e.isFinite = !0;
}, /*@__PURE__*/ yi({
	minValue: (e) => {
		let { minimum: t, exclusiveMinimum: n } = X(e);
		return Math.max(t ?? -Infinity, n ?? -Infinity);
	},
	maxValue: (e) => {
		let { maximum: t, exclusiveMaximum: n } = X(e);
		return Math.min(t ?? Infinity, n ?? Infinity);
	},
	isInt: (e) => {
		let { isInt: t, multipleOf: n } = X(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => X(e).format ?? null
}, {
	gt(e, t) {
		return this.check(/* @__PURE__ */ sl(e, t));
	},
	gte(e, t) {
		return this.check(/* @__PURE__ */ cl(e, t));
	},
	min(e, t) {
		return this.check(/* @__PURE__ */ cl(e, t));
	},
	lt(e, t) {
		return this.check(/* @__PURE__ */ al(e, t));
	},
	lte(e, t) {
		return this.check(/* @__PURE__ */ ol(e, t));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ ol(e, t));
	},
	int(e) {
		return this.check(Wd(e));
	},
	safe(e) {
		return this.check(Wd(e));
	},
	positive(e) {
		return this.check(/* @__PURE__ */ sl(0, e));
	},
	nonnegative(e) {
		return this.check(/* @__PURE__ */ cl(0, e));
	},
	negative(e) {
		return this.check(/* @__PURE__ */ al(0, e));
	},
	nonpositive(e) {
		return this.check(/* @__PURE__ */ ol(0, e));
	},
	multipleOf(e, t) {
		return this.check(/* @__PURE__ */ ll(e, t));
	},
	step(e, t) {
		return this.check(/* @__PURE__ */ ll(e, t));
	},
	finite() {
		return this;
	}
}));
function Hd(e) {
	return /* @__PURE__ */ Yc(Vd, e);
}
var Ud = /*@__PURE__*/ V("ZodNumberFormat", (e, t) => {
	ns.init(e, t), Vd.init(e, t);
});
function Wd(e) {
	return /* @__PURE__ */ Zc(Ud, e);
}
var Gd = /*@__PURE__*/ V("ZodBoolean", (e, t) => {
	rs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ou(e, t, n, r);
});
function Kd(e) {
	return /* @__PURE__ */ Qc(Gd, e);
}
var qd = /*@__PURE__*/ V("ZodNull", (e, t) => {
	is.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => lu(e, t, n, r);
});
function Jd(e) {
	return /* @__PURE__ */ $c(qd, e);
}
var Yd = /*@__PURE__*/ V("ZodAny", (e, t) => {
	as.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Xd() {
	return /* @__PURE__ */ el(Yd);
}
var Zd = /*@__PURE__*/ V("ZodUnknown", (e, t) => {
	os.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Qd() {
	return /* @__PURE__ */ tl(Zd);
}
var $d = /*@__PURE__*/ V("ZodNever", (e, t) => {
	ss.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => fu(e, t, n, r);
});
function ef(e) {
	return /* @__PURE__ */ nl($d, e);
}
var tf = /*@__PURE__*/ V("ZodDate", (e, t) => {
	cs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => hu(e, t, n, r), e.min = (t, n) => e.check(/* @__PURE__ */ cl(t, n)), e.max = (t, n) => e.check(/* @__PURE__ */ ol(t, n));
}, /*@__PURE__*/ yi({
	minDate: (e) => {
		let { minimum: t } = X(e);
		return t ? new Date(t) : null;
	},
	maxDate: (e) => {
		let { maximum: t } = X(e);
		return t ? new Date(t) : null;
	}
}, {})), nf = /*@__PURE__*/ V("ZodArray", (e, t) => {
	md(), us.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Du(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ dl(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ dl(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ ul(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ fl(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function rf(e, t) {
	return /* @__PURE__ */ El(nf, e, t);
}
var af = /*@__PURE__*/ V("ZodObject", (e, t) => {
	md(), gs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ku(e, t, n, r), Ti(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return yf(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(N(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(N(this._zod.def, { catchall: Qd() }));
	},
	loose() {
		return this.clone(N(this._zod.def, { catchall: Qd() }));
	},
	strict() {
		return this.clone(N(this._zod.def, { catchall: ef() }));
	},
	strip() {
		return this.clone(N(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return ri(this, e);
	},
	safeExtend(e) {
		return ai(this, e);
	},
	merge(e) {
		return oi(this, e);
	},
	pick(e) {
		return ei(this, e);
	},
	omit(e) {
		return ni(this, e);
	},
	partial(...e) {
		return si(wf, this, e[0]);
	},
	exactPartial(...e) {
		return si(Ef, this, e[0], "exactPartial");
	},
	required(...e) {
		return ci(Pf, this, e[0]);
	}
});
function of(e, t) {
	return new af({
		type: "object",
		shape: e ?? {},
		...F(t)
	});
}
function sf(e, t) {
	return new af({
		type: "object",
		shape: e,
		catchall: Qd(),
		...F(t)
	});
}
var cf = /*@__PURE__*/ V("ZodUnion", (e, t) => {
	vs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Au(e, t, n, r), e.options = t.options;
});
function lf(e, t) {
	return new cf({
		type: "union",
		options: e,
		...F(t)
	});
}
var uf = /*@__PURE__*/ V("ZodDiscriminatedUnion", (e, t) => {
	cf.init(e, t), bs.init(e, t);
});
function df(e, t, n) {
	return new uf({
		type: "union",
		options: t,
		discriminator: e,
		...F(n)
	});
}
var ff = /*@__PURE__*/ V("ZodIntersection", (e, t) => {
	xs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ju(e, t, n, r);
});
function pf(e, t) {
	return new ff({
		type: "intersection",
		left: e,
		right: t
	});
}
var mf = /*@__PURE__*/ V("ZodTuple", (e, t) => {
	md(), ws.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mu(e, t, n, r);
}, {
	rest(e) {
		return this.clone({
			...this._zod.def,
			rest: e
		});
	},
	partial() {
		let e = this._zod.def;
		if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
		return this.clone({
			...e,
			items: e.items.map((e) => new wf({
				type: "optional",
				innerType: e
			}))
		});
	}
});
function hf(e, t, n) {
	let r = t instanceof G;
	return new mf({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...F(r ? n : t)
	});
}
var gf = /*@__PURE__*/ V("ZodRecord", (e, t) => {
	md(), Os.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Iu(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function _f(e, t, n) {
	return !t || !t._zod ? new gf({
		type: "record",
		keyType: _d(),
		valueType: e,
		...F(t)
	}) : new gf({
		type: "record",
		keyType: e,
		valueType: t,
		...F(n)
	});
}
var vf = /*@__PURE__*/ V("ZodEnum", (e, t) => {
	ks.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => gu(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new vf({
			...t,
			checks: [],
			...F(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new vf({
			...t,
			checks: [],
			...F(r),
			entries: i
		});
	};
});
function yf(e, t) {
	return new vf({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...F(t)
	});
}
var bf = /*@__PURE__*/ V("ZodLiteral", (e, t) => {
	As.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => _u(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function xf(e, t) {
	return new bf({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...F(t)
	});
}
var Sf = /*@__PURE__*/ V("ZodTransform", (e, t) => {
	md(), js.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => wu(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Ni(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(gi(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(gi(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function Cf(e) {
	return new Sf({
		type: "transform",
		transform: e
	});
}
var wf = /*@__PURE__*/ V("ZodOptional", (e, t) => {
	Ns.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => qu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Tf(e) {
	return new wf({
		type: "optional",
		innerType: e
	});
}
var Ef = /*@__PURE__*/ V("ZodExactOptional", (e, t) => {
	Ps.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => qu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Df(e) {
	return new Ef({
		type: "optional",
		innerType: e
	});
}
var Of = /*@__PURE__*/ V("ZodNullable", (e, t) => {
	Fs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function kf(e) {
	return new Of({
		type: "nullable",
		innerType: e
	});
}
var Af = /*@__PURE__*/ V("ZodDefault", (e, t) => {
	Is.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vu(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function jf(e, t) {
	return new Af({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : qr(t);
		}
	});
}
var Mf = /*@__PURE__*/ V("ZodPrefault", (e, t) => {
	Rs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Nf(e, t) {
	return new Mf({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : qr(t);
		}
	});
}
var Pf = /*@__PURE__*/ V("ZodNonOptional", (e, t) => {
	zs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ru(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ff(e, t) {
	return new Pf({
		type: "nonoptional",
		innerType: e,
		...F(t)
	});
}
var If = /*@__PURE__*/ V("ZodCatch", (e, t) => {
	Hs.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Uu(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Lf(e, t) {
	return new If({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Di(t)
	});
}
var Rf = /*@__PURE__*/ V("ZodNaN", (e, t) => {
	Us.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => vu(e, t, n, r);
});
function zf(e) {
	return /* @__PURE__ */ il(Rf, e);
}
var Bf = /*@__PURE__*/ V("ZodPipe", (e, t) => {
	Ws.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wu(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Vf(e, t) {
	return new Bf({
		type: "pipe",
		in: e,
		out: t
	});
}
var Hf = /*@__PURE__*/ V("ZodReadonly", (e, t) => {
	Ks.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Gu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Uf(e) {
	return new Hf({
		type: "readonly",
		innerType: e
	});
}
var Wf = /*@__PURE__*/ V("ZodLazy", (e, t) => {
	Js.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ju(e, t, n, r), e.unwrap = () => e._zod.def.getter();
});
function Gf(e) {
	return new Wf({
		type: "lazy",
		getter: e
	});
}
var Kf = /*@__PURE__*/ V("ZodCustom", (e, t) => {
	Ys.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Su(e, t, n, r);
});
function qf(e, t) {
	return /* @__PURE__ */ Dl(Kf, e ?? (() => !0), t);
}
function Jf(e, t = {}) {
	return /* @__PURE__ */ Ol(Kf, e, t);
}
function Yf(e, t) {
	return /* @__PURE__ */ kl(e, t);
}
var Xf = /*@__PURE__*/ V("ZodInstanceOf", (e, t) => {
	Kf.init(e, t);
}, { properties(e, t) {
	return this.check(/* @__PURE__ */ yl(e, t));
} });
function Zf(e, t = {}) {
	let n = new Xf({
		type: "custom",
		check: "custom",
		fn: (t) => t instanceof e,
		abort: !0,
		...F(t)
	});
	return n._zod.bag.Class = e, n._zod.check = (t) => {
		t.value instanceof e || t.issues.push({
			code: "invalid_type",
			expected: e.name,
			input: t.value,
			inst: n,
			path: [...n._zod.def.path ?? []]
		});
	}, n;
}
//#endregion
//#region src/components/ui/use-restore-focus.ts
function Qf() {
	let e = (0, k.c)(3), [t, n] = (0, c.useState)(null), r;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
		n(document.activeElement);
	}, e[0] = r) : r = e[0];
	let i = r, a;
	return e[1] === t ? a = e[2] : (a = {
		onOpenAutoFocus: i,
		onCloseAutoFocus: (e) => {
			document.activeElement === document.body && (t instanceof HTMLElement && t.focus(), e.preventDefault());
		}
	}, e[1] = t, e[2] = a), a;
}
//#endregion
export { Gn as $, ef as A, ed as B, Kd as C, v as Ct, xf as D, Gf as E, _d as F, Gi as G, rl as H, hf as I, Cr as J, vr as K, lf as L, of as M, Tf as N, sf as O, _f as P, hr as Q, Qd as R, rf as S, b as St, df as T, m as Tt, Xc as U, Xu as V, Sc as W, Tr as X, wr as Y, gr as Z, cf as _, Fe as _t, tf as a, cr as at, Jd as b, he as bt, vf as c, zn as ct, af as d, bt as dt, fr as et, wf as f, mt as ft, Q as g, Xe as gt, mf as h, He as ht, Gd as i, Zn as it, Hd as j, zf as k, bf as l, An as lt, gd as m, Ze as mt, Yd as n, ur as nt, Af as o, qn as ot, Bf as p, nt as pt, yr as q, nf as r, $n as rt, uf as s, Un as st, Qf as t, rr as tt, Vd as u, Ct as ut, yf as v, Me as vt, qf as w, p as wt, Xd as x, x as xt, Zf as y, Se as yt, id as z };
