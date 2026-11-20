import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t, h as n, n as r, p as i, r as a } from "./button-CvjkwdSk.js";
import { t as o } from "./react-sHtZdjeP.js";
import { t as s } from "./compiler-runtime-CldRdSsv.js";
import { t as c } from "./jsx-runtime-3BD1kT0s.js";
import { $ as l, Ct as u, F as d, M as f, Q as p, St as m, Y as h, at as g, et as _, it as v, nt as y, ot as ee, rt as te, st as b, t as ne, tt as x } from "./use-restore-focus-BEM7sFWl.js";
//#region ../node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.23_@types+react-dom@19.3.0_@types+react@19.3.0__@types_490aa920fbab0adbc2c4344386ab6831/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var S = /* @__PURE__ */ e(o(), 1), C = c(), re = Object.defineProperty, w = (e, t) => re(e, "name", {
	value: t,
	configurable: !0
}), [ie, ae] = u("AlertDialog", [b]), T = b(), E = /* @__PURE__ */ w((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = T(t);
	return /* @__PURE__ */ (0, C.jsx)(l, {
		...r,
		...n,
		modal: !0
	});
}, "AlertDialog");
S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = T(n);
	return /* @__PURE__ */ (0, C.jsx)(ee, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTrigger"));
var D = /* @__PURE__ */ w((e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = T(t);
	return /* @__PURE__ */ (0, C.jsx)(v, {
		...r,
		...n
	});
}, "AlertDialogPortal"), O = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = T(n);
	return /* @__PURE__ */ (0, C.jsx)(te, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogOverlay")), [k, oe] = ie("AlertDialogContent"), se = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, children: r, ...a } = e, o = T(n), s = S.useRef(null), c = i(t, s), l = S.useRef(null);
	return /* @__PURE__ */ (0, C.jsx)(k, {
		scope: n,
		cancelRef: l,
		children: /* @__PURE__ */ (0, C.jsx)(x, {
			role: "alertdialog",
			...o,
			...a,
			ref: c,
			onOpenAutoFocus: m(a.onOpenAutoFocus, (e) => {
				e.preventDefault(), l.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: r
		})
	});
}, "AlertDialogContent")), ce = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = T(n);
	return /* @__PURE__ */ (0, C.jsx)(g, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogTitle")), le = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = T(n);
	return /* @__PURE__ */ (0, C.jsx)(y, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogDescription")), ue = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, i = T(n);
	return /* @__PURE__ */ (0, C.jsx)(_, {
		...i,
		...r,
		ref: t
	});
}, "AlertDialogAction")), de = "AlertDialogCancel", fe = S.forwardRef(/* @__PURE__ */ w(function(e, t) {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: a } = oe(de, n), o = T(n), s = i(t, a);
	return /* @__PURE__ */ (0, C.jsx)(_, {
		...o,
		...r,
		ref: s
	});
}, "AlertDialogCancel")), pe = E, A = D, j = O, M = se, N = ue, P = fe, F = ce, I = le, L = s(), R = pe, z = h(({ children: e, ...t }) => /* @__PURE__ */ (0, C.jsx)(A, {
	...t,
	children: /* @__PURE__ */ (0, C.jsx)(p, { children: /* @__PURE__ */ (0, C.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-start sm:top-[15%]",
		children: e
	}) })
}));
z.displayName = A.displayName;
var B = S.forwardRef((e, t) => {
	let r = (0, L.c)(9), i, a;
	if (r[0] !== e) {
		let { className: t, children: n, ...o } = e;
		i = t, a = o, r[0] = e, r[1] = i, r[2] = a;
	} else i = r[1], a = r[2];
	let o;
	r[3] === i ? o = r[4] : (o = n("fixed inset-0 z-50 bg-background/80 backdrop-blur-xs transition-opacity animate-in fade-in", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== t || r[7] !== o ? (s = /* @__PURE__ */ (0, C.jsx)(j, {
		className: o,
		...a,
		ref: t
	}), r[5] = a, r[6] = t, r[7] = o, r[8] = s) : s = r[8], s;
});
B.displayName = j.displayName;
var V = S.forwardRef((e, t) => {
	let r = (0, L.c)(11), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o = ne(), s;
	r[3] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ (0, C.jsx)(B, {}), r[3] = s) : s = r[3];
	let c;
	r[4] === i ? c = r[5] : (c = n("fixed z-50 grid w-full max-w-2xl scale-100 gap-4 border bg-background p-6 opacity-100 shadow-sm animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full", i), r[4] = i, r[5] = c);
	let l;
	return r[6] !== a || r[7] !== t || r[8] !== o || r[9] !== c ? (l = /* @__PURE__ */ (0, C.jsxs)(z, { children: [s, /* @__PURE__ */ (0, C.jsx)(M, {
		ref: t,
		className: c,
		...o,
		...a
	})] }), r[6] = a, r[7] = t, r[8] = o, r[9] = c, r[10] = l) : l = r[10], l;
});
V.displayName = M.displayName;
var H = (e) => {
	let t = (0, L.c)(8), r, i;
	t[0] === e ? (r = t[1], i = t[2]) : ({className: r, ...i} = e, t[0] = e, t[1] = r, t[2] = i);
	let a;
	t[3] === r ? a = t[4] : (a = n("flex flex-col space-y-2 text-center sm:text-left", r), t[3] = r, t[4] = a);
	let o;
	return t[5] !== i || t[6] !== a ? (o = /* @__PURE__ */ (0, C.jsx)("div", {
		className: a,
		...i
	}), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o;
};
H.displayName = "AlertDialogHeader";
var U = (e) => {
	let t = (0, L.c)(8), r, i;
	t[0] === e ? (r = t[1], i = t[2]) : ({className: r, ...i} = e, t[0] = e, t[1] = r, t[2] = i);
	let a;
	t[3] === r ? a = t[4] : (a = n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", r), t[3] = r, t[4] = a);
	let o;
	return t[5] !== i || t[6] !== a ? (o = /* @__PURE__ */ (0, C.jsx)("div", {
		className: a,
		...i
	}), t[5] = i, t[6] = a, t[7] = o) : o = t[7], o;
};
U.displayName = "AlertDialogFooter";
var W = S.forwardRef((e, t) => {
	let r = (0, L.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = n("text-lg font-semibold", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== t || r[7] !== o ? (s = /* @__PURE__ */ (0, C.jsx)(F, {
		ref: t,
		className: o,
		...a
	}), r[5] = a, r[6] = t, r[7] = o, r[8] = s) : s = r[8], s;
});
W.displayName = F.displayName;
var G = S.forwardRef((e, t) => {
	let r = (0, L.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = n("text-muted-foreground", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== t || r[7] !== o ? (s = /* @__PURE__ */ (0, C.jsx)(I, {
		ref: t,
		className: o,
		...a
	}), r[5] = a, r[6] = t, r[7] = o, r[8] = s) : s = r[8], s;
});
G.displayName = I.displayName;
var K = S.forwardRef((e, t) => {
	let i = (0, L.c)(9), a, o;
	i[0] === e ? (a = i[1], o = i[2]) : ({className: a, ...o} = e, i[0] = e, i[1] = a, i[2] = o);
	let s;
	i[3] === a ? s = i[4] : (s = n(r(), a), i[3] = a, i[4] = s);
	let c;
	return i[5] !== o || i[6] !== t || i[7] !== s ? (c = /* @__PURE__ */ (0, C.jsx)(N, {
		ref: t,
		className: s,
		...o
	}), i[5] = o, i[6] = t, i[7] = s, i[8] = c) : c = i[8], c;
});
K.displayName = N.displayName;
var q = S.forwardRef((e, t) => {
	let i = (0, L.c)(9), a, o;
	i[0] === e ? (a = i[1], o = i[2]) : ({className: a, ...o} = e, i[0] = e, i[1] = a, i[2] = o);
	let s;
	i[3] === a ? s = i[4] : (s = n(r({ variant: "destructive" }), a), i[3] = a, i[4] = s);
	let c;
	return i[5] !== o || i[6] !== t || i[7] !== s ? (c = /* @__PURE__ */ (0, C.jsx)(N, {
		ref: t,
		className: s,
		...o
	}), i[5] = o, i[6] = t, i[7] = s, i[8] = c) : c = i[8], c;
});
q.displayName = "AlertDialogDestructiveAction";
var J = S.forwardRef((e, t) => {
	let i = (0, L.c)(9), a, o;
	i[0] === e ? (a = i[1], o = i[2]) : ({className: a, ...o} = e, i[0] = e, i[1] = a, i[2] = o);
	let s;
	i[3] === a ? s = i[4] : (s = n(r({ variant: "secondary" }), "mt-2 sm:mt-0", a), i[3] = a, i[4] = s);
	let c;
	return i[5] !== o || i[6] !== t || i[7] !== s ? (c = /* @__PURE__ */ (0, C.jsx)(P, {
		ref: t,
		className: s,
		...o
	}), i[5] = o, i[6] = t, i[7] = s, i[8] = c) : c = i[8], c;
});
J.displayName = P.displayName;
//#endregion
//#region src/utils/errors.ts
var Y = f({ detail: d() }), X = f({ error: d() });
function Z(e) {
	if (!e) return "Unknown error";
	if (e instanceof Error) {
		let t = Y.safeParse(e.cause);
		return t.success ? t.data.detail : me(e.message);
	}
	if (typeof e == "object") {
		let t = Y.safeParse(e);
		if (t.success) return t.data.detail;
		let n = X.safeParse(e);
		if (n.success) return n.data.error;
	}
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
function me(e) {
	let t = he(e);
	if (!t) return e;
	let n = Y.safeParse(t);
	if (n.success) return n.data.detail;
	let r = X.safeParse(t);
	return r.success ? r.data.error : e;
}
function he(e) {
	try {
		return JSON.parse(e);
	} catch {
		return e;
	}
}
var ge = class extends Error {
	constructor(e = "The cell containing this UI element has not been run yet. Please run the cell first.") {
		super(e), this.name = "CellNotInitializedError";
	}
}, _e = class extends Error {
	constructor(e = "This UI element could not reach its function on the kernel. Try re-running the cell.") {
		super(e), this.name = "FunctionNotFoundError";
	}
}, Q = (e) => {
	let n = (0, L.c)(23), { error: r, className: i, action: a } = e, [o, s] = (0, S.useState)(!1);
	if (!r) return null;
	t.error(r);
	let c;
	n[0] === r ? c = n[1] : (c = Z(r), n[0] = r, n[1] = c);
	let l = c, u;
	n[2] === Symbol.for("react.memo_cache_sentinel") ? (u = () => s(!0), n[2] = u) : u = n[2];
	let d;
	n[3] === l ? d = n[4] : (d = /* @__PURE__ */ (0, C.jsx)("span", {
		className: "line-clamp-4",
		children: l
	}), n[3] = l, n[4] = d);
	let f;
	n[5] === a ? f = n[6] : (f = a && /* @__PURE__ */ (0, C.jsx)("div", {
		className: "flex justify-end",
		children: a
	}), n[5] = a, n[6] = f);
	let p;
	n[7] !== i || n[8] !== d || n[9] !== f ? (p = /* @__PURE__ */ (0, C.jsxs)($, {
		kind: "danger",
		className: i,
		clickable: !0,
		onClick: u,
		children: [d, f]
	}), n[7] = i, n[8] = d, n[9] = f, n[10] = p) : p = n[10];
	let m;
	n[11] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ (0, C.jsx)(H, { children: /* @__PURE__ */ (0, C.jsx)(W, {
		className: "text-error",
		children: "Error"
	}) }), n[11] = m) : m = n[11];
	let h;
	n[12] === l ? h = n[13] : (h = /* @__PURE__ */ (0, C.jsx)(G, {
		asChild: !0,
		className: "text-error text-sm p-2 font-mono overflow-auto whitespace-pre-wrap",
		children: /* @__PURE__ */ (0, C.jsx)("pre", { children: l })
	}), n[12] = l, n[13] = h);
	let g;
	n[14] === Symbol.for("react.memo_cache_sentinel") ? (g = /* @__PURE__ */ (0, C.jsx)(U, { children: /* @__PURE__ */ (0, C.jsx)(K, {
		autoFocus: !0,
		onClick: () => s(!1),
		children: "Ok"
	}) }), n[14] = g) : g = n[14];
	let _;
	n[15] === h ? _ = n[16] : (_ = /* @__PURE__ */ (0, C.jsxs)(V, {
		className: "max-w-[80%] max-h-[80%] overflow-hidden flex flex-col",
		children: [
			m,
			h,
			g
		]
	}), n[15] = h, n[16] = _);
	let v;
	n[17] !== o || n[18] !== _ ? (v = /* @__PURE__ */ (0, C.jsx)(R, {
		open: o,
		onOpenChange: s,
		children: _
	}), n[17] = o, n[18] = _, n[19] = v) : v = n[19];
	let y;
	return n[20] !== v || n[21] !== p ? (y = /* @__PURE__ */ (0, C.jsxs)(C.Fragment, { children: [p, v] }), n[20] = v, n[21] = p, n[22] = y) : y = n[22], y;
}, ve = a("text-sm p-2 border whitespace-pre-wrap overflow-hidden", {
	variants: {
		kind: {
			danger: "text-error border-(--red-6) shadow-md-solid shadow-error bg-(--red-1)",
			info: "text-primary border-(--blue-6) shadow-md-solid shadow-accent bg-(--blue-1)",
			warn: "border-(--yellow-6) bg-(--yellow-2) dark:bg-(--yellow-4) text-(--yellow-11) dark:text-(--yellow-12)"
		},
		clickable: { true: "cursor-pointer" }
	},
	compoundVariants: [
		{
			clickable: !0,
			kind: "danger",
			className: "hover:bg-(--red-3)"
		},
		{
			clickable: !0,
			kind: "info",
			className: "hover:bg-(--blue-3)"
		},
		{
			clickable: !0,
			kind: "warn",
			className: "hover:bg-(--yellow-3)"
		}
	],
	defaultVariants: { kind: "info" }
}), $ = (e) => {
	let t = (0, L.c)(14), r, i, a, o, s;
	t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4], s = t[5]) : ({kind: o, clickable: a, className: i, children: r, ...s} = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o, t[5] = s);
	let c;
	t[6] !== i || t[7] !== a || t[8] !== o ? (c = n(ve({
		kind: o,
		clickable: a
	}), i), t[6] = i, t[7] = a, t[8] = o, t[9] = c) : c = t[9];
	let l;
	return t[10] !== r || t[11] !== s || t[12] !== c ? (l = /* @__PURE__ */ (0, C.jsx)("div", {
		className: c,
		...s,
		children: r
	}), t[10] = r, t[11] = s, t[12] = c, t[13] = l) : l = t[13], l;
};
//#endregion
export { Z as a, J as c, q as d, U as f, _e as i, V as l, W as m, Q as n, R as o, H as p, ge as r, K as s, $ as t, G as u };
