import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t } from "./button-CvjkwdSk.js";
import { t as n } from "./react-sHtZdjeP.js";
import { t as r } from "./compiler-runtime-CldRdSsv.js";
import { A as i } from "./select-BButFi-d.js";
import { t as a } from "./jsx-runtime-3BD1kT0s.js";
import { $ as o, Q as s, Y as c, at as l, et as u, it as d, nt as f, ot as p, rt as m, t as h, tt as g } from "./use-restore-focus-BEM7sFWl.js";
//#region src/components/ui/dialog.tsx
var _ = r(), v = /* @__PURE__ */ e(n(), 1), y = a(), b = o, x = p, S = c(({ className: e, children: n, ...r }) => /* @__PURE__ */ (0, y.jsx)(d, {
	...r,
	children: /* @__PURE__ */ (0, y.jsx)(s, { children: /* @__PURE__ */ (0, y.jsx)("div", {
		className: t("fixed inset-0 z-50 flex items-start justify-center sm:items-start sm:top-[15%]", e),
		children: n
	}) })
}));
S.displayName = d.displayName;
var C = v.forwardRef((e, n) => {
	let r = (0, _.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("fixed inset-0 z-50 bg-background/80 backdrop-blur-xs transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", "forced-color-adjust-none forced-colors:bg-[CanvasText] forced-colors:opacity-50", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, y.jsx)(m, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
C.displayName = m.displayName;
var w = v.forwardRef((e, n) => {
	let r = (0, _.c)(17), a, o, s, c;
	r[0] === e ? (a = r[1], o = r[2], s = r[3], c = r[4]) : ({className: o, children: a, usePortal: c, ...s} = e, r[0] = e, r[1] = a, r[2] = o, r[3] = s, r[4] = c);
	let l = c === void 0 || c, d = h(), f;
	r[5] === o ? f = r[6] : (f = t("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-2xl sm:mx-4 sm:rounded-lg sm:zoom-in-90 sm:data-[state=open]:slide-in-from-bottom-0", "forced-color-adjust-none forced-colors:border-[CanvasText] forced-colors:bg-[Canvas] forced-colors:text-[CanvasText]", o), r[5] = o, r[6] = f);
	let p;
	r[7] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ (0, y.jsxs)(u, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, y.jsx)(i, { className: "h-4 w-4" }), /* @__PURE__ */ (0, y.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), r[7] = p) : p = r[7];
	let m;
	r[8] !== a || r[9] !== s || r[10] !== n || r[11] !== d || r[12] !== f ? (m = /* @__PURE__ */ (0, y.jsxs)(g, {
		ref: n,
		className: f,
		...d,
		...s,
		children: [a, p]
	}), r[8] = a, r[9] = s, r[10] = n, r[11] = d, r[12] = f, r[13] = m) : m = r[13];
	let v = m, b;
	return r[14] !== v || r[15] !== l ? (b = l ? /* @__PURE__ */ (0, y.jsxs)(S, { children: [/* @__PURE__ */ (0, y.jsx)(C, {}), v] }) : v, r[14] = v, r[15] = l, r[16] = b) : b = r[16], b;
});
w.displayName = g.displayName;
var T = (e) => {
	let n = (0, _.c)(8), r, i;
	n[0] === e ? (r = n[1], i = n[2]) : ({className: r, ...i} = e, n[0] = e, n[1] = r, n[2] = i);
	let a;
	n[3] === r ? a = n[4] : (a = t("flex flex-col space-y-1.5 text-center sm:text-left", r), n[3] = r, n[4] = a);
	let o;
	return n[5] !== i || n[6] !== a ? (o = /* @__PURE__ */ (0, y.jsx)("div", {
		className: a,
		...i
	}), n[5] = i, n[6] = a, n[7] = o) : o = n[7], o;
};
T.displayName = "DialogHeader";
var E = v.forwardRef((e, n) => {
	let r = (0, _.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("text-lg font-semibold leading-none tracking-tight", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, y.jsx)(l, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
E.displayName = l.displayName;
var D = v.forwardRef((e, n) => {
	let r = (0, _.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("text-sm text-muted-foreground", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, y.jsx)(f, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
D.displayName = f.displayName;
//#endregion
export { E as a, T as i, w as n, x as o, D as r, b as t };
