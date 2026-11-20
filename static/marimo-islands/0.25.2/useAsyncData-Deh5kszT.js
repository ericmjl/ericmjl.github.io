import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { t as n } from "./compiler-runtime-CldRdSsv.js";
import { A as r } from "./useTheme-CRnjkku0.js";
import { t as i } from "./invariant-DLmrl-hA.js";
//#region src/hooks/useAsyncData.ts
var a = n(), o = /* @__PURE__ */ e(t(), 1), s = {
	error(e, t) {
		return {
			status: "error",
			data: t,
			error: e,
			isPending: !1,
			isFetching: !1
		};
	},
	success(e) {
		return {
			status: "success",
			data: e,
			error: void 0,
			isPending: !1,
			isFetching: !1
		};
	},
	loading(e) {
		return {
			status: "loading",
			data: e,
			error: void 0,
			isPending: !1,
			isFetching: !0
		};
	},
	pending() {
		return {
			status: "pending",
			data: void 0,
			error: void 0,
			isPending: !0,
			isFetching: !0
		};
	}
};
function c(e, t) {
	let n = (0, a.c)(17), [c, u] = (0, o.useState)(0), d;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (d = s.pending(), n[0] = d) : d = n[0];
	let [f, p] = (0, o.useState)(d), m;
	n[1] === e ? m = n[2] : (m = typeof e == "function" ? { fetch: e } : e, n[1] = e, n[2] = m);
	let h = r(m.fetch), g;
	n[3] === h ? g = n[4] : (g = () => {
		let e = new AbortController(), t = !1;
		return p(l), h({ previous: () => {
			t = !0;
		} }).then((n) => {
			e.signal.aborted || t || p(s.success(n));
		}).catch((t) => {
			e.signal.aborted || p((e) => s.error(t, e.data));
		}), () => {
			e.abort();
		};
	}, n[3] = h, n[4] = g);
	let _;
	n[5] !== t || n[6] !== h || n[7] !== c ? (_ = [
		...t,
		c,
		h
	], n[5] = t, n[6] = h, n[7] = c, n[8] = _) : _ = n[8], (0, o.useEffect)(g, _);
	let v;
	n[9] === f ? v = n[10] : (v = (e) => {
		let t;
		typeof e == "function" ? (i(f.status === "success" || f.status === "loading", "No previous state value."), t = e(f.data)) : t = e, p(s.success(t));
	}, n[9] = f, n[10] = v);
	let y;
	n[11] === c ? y = n[12] : (y = () => u(c + 1), n[11] = c, n[12] = y);
	let b;
	return n[13] !== f || n[14] !== v || n[15] !== y ? (b = {
		...f,
		setData: v,
		refetch: y
	}, n[13] = f, n[14] = v, n[15] = y, n[16] = b) : b = n[16], b;
}
function l(e) {
	return e.status === "success" || e.status === "loading" ? s.loading(e.data) : s.pending();
}
//#endregion
export { c as t };
