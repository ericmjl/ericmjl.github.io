import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t, h as n, m as r } from "./button-CvjkwdSk.js";
import { t as i } from "./react-sHtZdjeP.js";
import { t as a } from "./compiler-runtime-CldRdSsv.js";
import { h as o, t as s } from "./tooltip-BO1REbqs.js";
import { t as c } from "./check-EDwSwP89.js";
import { t as l } from "./jsx-runtime-3BD1kT0s.js";
//#region src/components/ui/use-toast.ts
var u = a(), d = /* @__PURE__ */ e(i(), 1), f = 1, p = 1e4, m = 0;
function h() {
	return m = (m + 1) % Number.MAX_VALUE, m.toString();
}
var g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Set(), v = (e) => {
	if (g.has(e)) return;
	let t = setTimeout(() => {
		g.delete(e), S({
			type: "REMOVE_TOAST",
			toastId: e
		});
	}, p);
	g.set(e, t);
}, y = (e, t) => {
	switch (t.type) {
		case "ADD_TOAST": return {
			...e,
			toasts: [t.toast, ...e.toasts].slice(0, f)
		};
		case "UPDATE_TOAST": return {
			...e,
			toasts: e.toasts.map((e) => e.id === t.toast.id ? {
				...e,
				...t.toast
			} : e)
		};
		case "DISMISS_TOAST": {
			let { toastId: n } = t;
			return n ? v(n) : e.toasts.forEach((e) => {
				v(e.id);
			}), {
				...e,
				toasts: e.toasts.map((e) => e.id === n || n === void 0 ? {
					...e,
					open: !1
				} : e)
			};
		}
		case "REMOVE_TOAST": return t.toastId === void 0 ? {
			...e,
			toasts: []
		} : {
			...e,
			toasts: e.toasts.filter((e) => e.id !== t.toastId)
		};
		case "UPSERT_TOAST": return e.toasts.findIndex((e) => e.id === t.toast.id) > -1 ? {
			...e,
			toasts: e.toasts.map((e) => e.id === t.toast.id ? {
				...e,
				...t.toast
			} : e)
		} : {
			...e,
			toasts: [t.toast, ...e.toasts].slice(0, f)
		};
	}
}, b = /* @__PURE__ */ new Set(), x = { toasts: [] };
function S(e) {
	x = y(x, e), b.forEach((e) => {
		e(x);
	});
}
function C({ id: e, once: t, ...n }) {
	let r = e || h(), i = t === !0 && e !== void 0, a = (e) => S({
		type: "UPDATE_TOAST",
		toast: {
			...e,
			id: r
		}
	}), o = () => S({
		type: "DISMISS_TOAST",
		toastId: r
	}), s = (e) => S({
		type: "UPSERT_TOAST",
		toast: {
			...e,
			id: r,
			open: !0,
			onOpenChange: (e) => {
				e || o();
			}
		}
	}), c = i && _.has(r);
	return i && _.add(r), c || S({
		type: "ADD_TOAST",
		toast: {
			...n,
			id: r,
			open: !0,
			onOpenChange: (e) => {
				e || o();
			}
		}
	}), {
		id: r,
		dismiss: o,
		update: a,
		upsert: s
	};
}
function w() {
	let e = (0, u.c)(5), [t, n] = d.useState(x), r;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => (b.add(n), () => {
		b.delete(n);
	}), e[0] = r) : r = e[0];
	let i;
	e[1] === t ? i = e[2] : (i = [t], e[1] = t, e[2] = i), d.useEffect(r, i);
	let a;
	return e[3] === t ? a = e[4] : (a = {
		...t,
		dismiss: T
	}, e[3] = t, e[4] = a), a;
}
function T(e) {
	return S({
		type: "DISMISS_TOAST",
		toastId: e
	});
}
var E = o("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
//#endregion
//#region src/utils/copy.ts
async function D(e, n) {
	if (navigator.clipboard === void 0) {
		t.warn("navigator.clipboard is not supported"), window.prompt("Copy to clipboard: Ctrl+C, Enter", e);
		return;
	}
	if (n && navigator.clipboard.write) try {
		let t = new ClipboardItem({
			"text/html": new Blob([n], { type: "text/html" }),
			"text/plain": new Blob([e], { type: "text/plain" })
		});
		await navigator.clipboard.write([t]);
		return;
	} catch {
		t.warn("Failed to write rich text, falling back to plain text");
	}
	await navigator.clipboard.writeText(e).catch(() => {
		t.warn("Failed to copy to clipboard using navigator.clipboard"), window.prompt("Copy to clipboard: Ctrl+C, Enter", e);
	});
}
//#endregion
//#region src/components/icons/copy-icon.tsx
var O = l(), k = (e) => {
	let t = (0, u.c)(14), { value: i, className: a, buttonClassName: o, tooltip: l, toastTitle: f, ariaLabel: p } = e, [m, h] = (0, d.useState)(!1), g;
	t[0] !== f || t[1] !== i ? (g = r.stopPropagation(async (e) => {
		await D(typeof i == "function" ? i(e) : i).then(() => {
			h(!0), setTimeout(() => h(!1), 2e3), f && C({ title: f });
		});
	}), t[0] = f, t[1] = i, t[2] = g) : g = t[2];
	let _ = g, v = p ?? "Copy to clipboard", y;
	t[3] !== a || t[4] !== m ? (y = m ? /* @__PURE__ */ (0, O.jsx)(c, { className: n(a, "text-(--grass-11)") }) : /* @__PURE__ */ (0, O.jsx)(E, { className: a }), t[3] = a, t[4] = m, t[5] = y) : y = t[5];
	let b;
	t[6] !== o || t[7] !== _ || t[8] !== v || t[9] !== y ? (b = /* @__PURE__ */ (0, O.jsx)("button", {
		type: "button",
		onClick: _,
		"aria-label": v,
		className: o,
		children: y
	}), t[6] = o, t[7] = _, t[8] = v, t[9] = y, t[10] = b) : b = t[10];
	let x = b;
	if (l === !1) return x;
	let S = m ? "Copied!" : l ?? "Copy to clipboard", w;
	return t[11] !== x || t[12] !== S ? (w = /* @__PURE__ */ (0, O.jsx)(s, {
		content: S,
		delayDuration: 400,
		children: x
	}), t[11] = x, t[12] = S, t[13] = w) : w = t[13], w;
};
//#endregion
export { w as a, C as i, D as n, E as r, k as t };
