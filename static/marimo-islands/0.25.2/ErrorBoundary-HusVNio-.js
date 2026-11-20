import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t, t as n } from "./button-CvjkwdSk.js";
import { t as r } from "./react-sHtZdjeP.js";
import { t as i } from "./compiler-runtime-CldRdSsv.js";
import { a, t as o } from "./copy-icon-Ft7t9bqz.js";
import { h as s, i as c } from "./tooltip-BO1REbqs.js";
import { t as l } from "./react-dom-DUmH0GXv.js";
import { t as u } from "./jsx-runtime-3BD1kT0s.js";
import { Q as d, Y as f } from "./use-restore-focus-BEM7sFWl.js";
import { a as p, i as m, o as h, r as g, s as _, t as v } from "./toast-B9UMEi8u.js";
import { _ as y, x as b } from "./useTheme-CRnjkku0.js";
import { o as x, t as S } from "./dialog-CEBFZNyc.js";
var C = s("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), w = i(), T = /* @__PURE__ */ e(r()), E = (0, T.createContext)(null), D = {
	didCatch: !1,
	error: null
}, O = class extends T.Component {
	constructor(e) {
		super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = D;
	}
	static getDerivedStateFromError(e) {
		return {
			didCatch: !0,
			error: e
		};
	}
	resetErrorBoundary() {
		let { error: e } = this.state;
		if (e !== null) {
			var t, n, r = [...arguments];
			(t = (n = this.props).onReset) == null || t.call(n, {
				args: r,
				reason: "imperative-api"
			}), this.setState(D);
		}
	}
	componentDidCatch(e, t) {
		var n, r;
		(n = (r = this.props).onError) == null || n.call(r, e, t);
	}
	componentDidUpdate(e, t) {
		let { didCatch: n } = this.state, { resetKeys: r } = this.props;
		if (n && t.error !== null && k(e.resetKeys, r)) {
			var i, a;
			(i = (a = this.props).onReset) == null || i.call(a, {
				next: r,
				prev: e.resetKeys,
				reason: "keys"
			}), this.setState(D);
		}
	}
	render() {
		let { children: e, fallbackRender: t, FallbackComponent: n, fallback: r } = this.props, { didCatch: i, error: a } = this.state, o = e;
		if (i) {
			let e = {
				error: a,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (typeof t == "function") o = t(e);
			else if (n) o = (0, T.createElement)(n, e);
			else if (r !== void 0) o = r;
			else throw a;
		}
		return (0, T.createElement)(E.Provider, { value: {
			didCatch: i,
			error: a,
			resetErrorBoundary: this.resetErrorBoundary
		} }, o);
	}
};
function k() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
}
//#endregion
//#region src/components/ui/toaster.tsx
var A = /* @__PURE__ */ e(l(), 1), j = u(), M = () => {
	let e = (0, w.c)(5), { toasts: t } = a(), n;
	e[0] === t ? n = e[1] : (n = t.map(F), e[0] = t, e[1] = n);
	let r;
	e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = /* @__PURE__ */ (0, j.jsx)(N, {}), e[2] = r) : r = e[2];
	let i;
	return e[3] === n ? i = e[4] : (i = /* @__PURE__ */ (0, j.jsxs)(p, { children: [n, r] }), e[3] = n, e[4] = i), i;
}, N = f(({ container: e }) => (0, A.createPortal)(/* @__PURE__ */ (0, j.jsx)(d, { children: /* @__PURE__ */ (0, j.jsx)(_, {}) }), e ?? document.body)), P = (e) => {
	let n = (0, w.c)(23), r, i, a, s, c;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], s = n[4], c = n[5]) : ({toastTitle: s, toastDescription: a, action: r, variant: c, ...i} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = s, n[5] = c);
	let l = (0, T.useRef)(null), u = !!a && !r && c === "danger", d;
	n[6] === s ? d = n[7] : (d = s && /* @__PURE__ */ (0, j.jsx)(h, { children: s }), n[6] = s, n[7] = d);
	let f;
	n[8] === a ? f = n[9] : (f = a && /* @__PURE__ */ (0, j.jsx)(m, {
		ref: l,
		children: a
	}), n[8] = a, n[9] = f);
	let p;
	n[10] !== d || n[11] !== f ? (p = /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "grid min-w-0 flex-1 gap-1",
		children: [d, f]
	}), n[10] = d, n[11] = f, n[12] = p) : p = n[12];
	let _;
	n[13] !== u || n[14] !== a ? (_ = u && /* @__PURE__ */ (0, j.jsx)(o, {
		tooltip: "Copy error",
		ariaLabel: "Copy error",
		className: "h-4 w-4",
		buttonClassName: t("absolute right-8 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity", "hover:text-foreground focus:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover:opacity-100", "group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-500 focus-visible:group-[.destructive]:ring-red-400 focus-visible:group-[.destructive]:ring-offset-red-600"),
		value: () => l.current?.innerText ?? (typeof a == "string" ? a : "")
	}), n[13] = u, n[14] = a, n[15] = _) : _ = n[15];
	let y;
	n[16] === Symbol.for("react.memo_cache_sentinel") ? (y = /* @__PURE__ */ (0, j.jsx)(g, {}), n[16] = y) : y = n[16];
	let b;
	return n[17] !== r || n[18] !== i || n[19] !== p || n[20] !== _ || n[21] !== c ? (b = /* @__PURE__ */ (0, j.jsxs)(v, {
		variant: c,
		...i,
		children: [
			p,
			r,
			_,
			y
		]
	}), n[17] = r, n[18] = i, n[19] = p, n[20] = _, n[21] = c, n[22] = b) : b = n[22], b;
};
function F(e) {
	let { id: t, title: n, description: r, action: i, variant: a, ...o } = e;
	return /* @__PURE__ */ (0, j.jsx)(P, {
		toastTitle: n,
		toastDescription: r,
		action: i,
		variant: a,
		...o
	}, t);
}
//#endregion
//#region src/components/editor/boundary/ErrorBoundary.tsx
var I = (0, T.lazy)(() => import("./feedback-button-ZuLnINhC.js").then((e) => ({ default: e.FeedbackModal }))), L = (e) => {
	let t = (0, w.c)(2), n;
	return t[0] === e.children ? n = t[1] : (n = /* @__PURE__ */ (0, j.jsx)(O, {
		FallbackComponent: R,
		children: e.children
	}), t[0] = e.children, t[1] = n), n;
}, R = (e) => {
	let t = (0, w.c)(17), [r, i] = (0, T.useState)(!1), a;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = /* @__PURE__ */ (0, j.jsx)("h1", {
		className: "text-2xl font-bold",
		children: "Something went wrong"
	}), t[0] = a) : a = t[0];
	let o = e.error?.message, s;
	t[1] === o ? s = t[2] : (s = /* @__PURE__ */ (0, j.jsx)("pre", {
		className: "text-xs bg-muted/40 border rounded-md p-4 max-w-[80%] whitespace-normal",
		children: o
	}), t[1] = o, t[2] = s);
	let l;
	t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ (0, j.jsx)(x, {
		asChild: !0,
		children: /* @__PURE__ */ (0, j.jsx)(n, {
			variant: "outline",
			children: "Report an issue"
		})
	}), t[3] = l) : l = t[3];
	let u;
	t[4] === r ? u = t[5] : (u = r && /* @__PURE__ */ (0, j.jsx)(b, {
		store: y,
		children: /* @__PURE__ */ (0, j.jsxs)(c, { children: [/* @__PURE__ */ (0, j.jsx)(T.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, j.jsx)(I, {})
		}), /* @__PURE__ */ (0, j.jsx)(M, {})] })
	}), t[4] = r, t[5] = u);
	let d;
	t[6] !== r || t[7] !== u ? (d = /* @__PURE__ */ (0, j.jsxs)(S, {
		open: r,
		onOpenChange: i,
		children: [l, u]
	}), t[6] = r, t[7] = u, t[8] = d) : d = t[8];
	let f;
	t[9] === e.resetErrorBoundary ? f = t[10] : (f = /* @__PURE__ */ (0, j.jsx)(n, {
		"data-testid": "reset-error-boundary-button",
		onClick: e.resetErrorBoundary,
		variant: "outline",
		children: "Try again"
	}), t[9] = e.resetErrorBoundary, t[10] = f);
	let p;
	t[11] !== d || t[12] !== f ? (p = /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "flex flex-wrap items-center justify-center gap-2",
		children: [d, f]
	}), t[11] = d, t[12] = f, t[13] = p) : p = t[13];
	let m;
	return t[14] !== s || t[15] !== p ? (m = /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "flex-1 flex items-center justify-center flex-col space-y-4 max-w-2xl mx-auto px-6 pb-6",
		children: [
			a,
			s,
			p
		]
	}), t[14] = s, t[15] = p, t[16] = m) : m = t[16], m;
};
//#endregion
export { C as n, L as t };
