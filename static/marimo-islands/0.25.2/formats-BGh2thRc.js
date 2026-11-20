import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t, r as n } from "./button-CvjkwdSk.js";
import { t as r } from "./react-sHtZdjeP.js";
import { t as i } from "./compiler-runtime-CldRdSsv.js";
import { t as a } from "./toDate-BNJf01u1.js";
import { t as o } from "./jsx-runtime-3BD1kT0s.js";
import { i as s } from "./loader-BQOfjTIJ.js";
//#region ../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isDate.js
function c(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/isValid.js
function l(e) {
	return !(!c(e) && typeof e != "number" || isNaN(+a(e)));
}
//#endregion
//#region src/components/ui/alert.tsx
var u = i(), d = /* @__PURE__ */ e(r(), 1), f = o(), p = n("relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] has-[svg]:pl-11", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
		info: "bg-(--sky-2) border-(--sky-7) text-(--sky-11)",
		warning: "bg-(--yellow-2) border-(--yellow-7) text-(--yellow-11) [&>svg]:text-(--yellow-11)"
	} },
	defaultVariants: { variant: "default" }
}), m = d.forwardRef((e, n) => {
	let r = (0, u.c)(11), i, a, o;
	r[0] === e ? (i = r[1], a = r[2], o = r[3]) : ({className: i, variant: o, ...a} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o);
	let s;
	r[4] !== i || r[5] !== o ? (s = t(p({ variant: o }), i), r[4] = i, r[5] = o, r[6] = s) : s = r[6];
	let c;
	return r[7] !== a || r[8] !== n || r[9] !== s ? (c = /* @__PURE__ */ (0, f.jsx)("div", {
		ref: n,
		role: "alert",
		className: s,
		...a
	}), r[7] = a, r[8] = n, r[9] = s, r[10] = c) : c = r[10], c;
});
m.displayName = "Alert";
var h = d.forwardRef((e, n) => {
	let r = (0, u.c)(11), i, a, o;
	r[0] === e ? (i = r[1], a = r[2], o = r[3]) : ({className: a, children: i, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o);
	let s;
	r[4] === a ? s = r[5] : (s = t("mb-1 font-medium leading-none tracking-tight", a), r[4] = a, r[5] = s);
	let c;
	return r[6] !== i || r[7] !== o || r[8] !== n || r[9] !== s ? (c = /* @__PURE__ */ (0, f.jsx)("h5", {
		ref: n,
		className: s,
		...o,
		children: i
	}), r[6] = i, r[7] = o, r[8] = n, r[9] = s, r[10] = c) : c = r[10], c;
});
h.displayName = "AlertTitle";
var g = d.forwardRef((e, n) => {
	let r = (0, u.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("text-sm [&_p]:leading-relaxed", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, f.jsx)("div", {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
g.displayName = "AlertDescription";
//#endregion
//#region src/plugins/impl/vega/formats.ts
function _(e) {
	function t(e) {
		return !!e?.schema && Array.isArray(e.schema.fields) && typeof e.toArray == "function";
	}
	return (t(e) ? e : v(e)).toArray();
}
_.responseType = "arrayBuffer";
function v(e, t) {
	return s(e, t ?? { useProxy: !0 });
}
//#endregion
export { l as a, h as i, m as n, g as r, _ as t };
