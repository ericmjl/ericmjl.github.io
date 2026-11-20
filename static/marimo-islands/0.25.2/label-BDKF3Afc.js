import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t, r as n } from "./button-CvjkwdSk.js";
import { t as r } from "./react-sHtZdjeP.js";
import { t as i } from "./compiler-runtime-CldRdSsv.js";
import { t as a } from "./jsx-runtime-3BD1kT0s.js";
import { wt as o } from "./use-restore-focus-BEM7sFWl.js";
//#region ../node_modules/.pnpm/@radix-ui+react-label@2.1.15_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_da9b5a99f6ce769d732e2d76a1b400e7/node_modules/@radix-ui/react-label/dist/index.mjs
var s = /* @__PURE__ */ e(r(), 1), c = a(), l = Object.defineProperty, u = /* @__PURE__ */ s.forwardRef(/* @__PURE__ */ ((e, t) => l(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	return /* @__PURE__ */ (0, c.jsx)(o.label, {
		...e,
		ref: t,
		onMouseDown: (t) => {
			t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
		}
	});
}, "Label")), d = {
	prefix: String(Math.round(Math.random() * 1e10)),
	current: 0
}, f = /*#__PURE__*/ s.createContext(d), p = /*#__PURE__*/ s.createContext(!1);
typeof window < "u" && window.document && window.document.createElement;
var m = /* @__PURE__ */ new WeakMap();
function h(e = !1) {
	let t = (0, s.useContext)(f), n = (0, s.useRef)(null);
	if (n.current === null && !e) {
		let e = s.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (e) {
			let n = m.get(e);
			n == null ? m.set(e, {
				id: t.current,
				state: e.memoizedState
			}) : e.memoizedState !== n.state && (t.current = n.id, m.delete(e));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function g(e) {
	let t = (0, s.useContext)(f), n = h(!!e), r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function _(e) {
	let t = s.useId(), [n] = (0, s.useState)(S()), r = n ? "react-aria" : `react-aria${d.prefix}`;
	return e || `${r}-${t}`;
}
var v = typeof s.useId == "function" ? _ : g;
function y() {
	return !1;
}
function b() {
	return !0;
}
function x(e) {
	return () => {};
}
function S() {
	return typeof s.useSyncExternalStore == "function" ? s.useSyncExternalStore(x, y, b) : (0, s.useContext)(p);
}
//#endregion
//#region ../node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/i18n/utils.mjs
var C = /* @__PURE__ */ new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]), w = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function T(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return C.has(t.script);
	}
	let t = e.split("-")[0];
	return w.has(t);
}
//#endregion
//#region ../node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var E = Symbol.for("react-aria.i18n.locale");
function D() {
	let e = typeof window < "u" && window[E] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return {
		locale: e,
		direction: T(e) ? "rtl" : "ltr"
	};
}
var O = D(), k = /* @__PURE__ */ new Set();
function A() {
	O = D();
	for (let e of k) e(O);
}
function j() {
	let e = S(), [t, n] = (0, s.useState)(O);
	return (0, s.useEffect)(() => (k.size === 0 && window.addEventListener("languagechange", A), k.add(n), () => {
		k.delete(n), k.size === 0 && window.removeEventListener("languagechange", A);
	}), []), e ? {
		locale: typeof window < "u" && window[E] || "en-US",
		direction: "ltr"
	} : t;
}
//#endregion
//#region ../node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var M = /*#__PURE__*/ s.createContext(null);
function N(e) {
	let { locale: t, children: n } = e, r = s.useMemo(() => ({
		locale: t,
		direction: T(t) ? "rtl" : "ltr"
	}), [t]);
	return /*#__PURE__*/ s.createElement(M.Provider, { value: r }, n);
}
function P(e) {
	let { children: t } = e, n = j();
	return /*#__PURE__*/ s.createElement(M.Provider, { value: n }, t);
}
function F(e) {
	let { locale: t, children: n } = e;
	return t ? /*#__PURE__*/ s.createElement(N, {
		locale: t,
		children: n
	}) : /*#__PURE__*/ s.createElement(P, { children: n });
}
function I() {
	let e = j();
	return (0, s.useContext)(M) || e;
}
//#endregion
//#region ../node_modules/.pnpm/@internationalized+number@3.6.8/node_modules/@internationalized/number/dist/private/NumberFormatter.mjs
var L = /* @__PURE__ */ new Map(), R = !1;
try {
	R = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var z = !1;
try {
	z = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var B = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } }, V = class {
	constructor(e, t = {}) {
		this.numberFormatter = H(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		if (t = !R && this.options.signDisplay != null ? U(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), this.options.style === "unit" && !z) {
			let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
			if (!e) return t;
			let i = B[e]?.[n];
			t += i[r] || i.default;
		}
		return t;
	}
	formatToParts(e) {
		return this.numberFormatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.format(e)} \u{2013} ${this.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.numberFormatter.resolvedOptions();
		return !R && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), !z && this.options.style === "unit" && (e = {
			...e,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		}), e;
	}
};
function H(e, t = {}) {
	let { numberingSystem: n } = t;
	if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !z) {
		let { unit: e, unitDisplay: n = "short" } = t;
		if (!e) throw Error("unit option must be provided with style: \"unit\"");
		if (!B[e]?.[n]) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
		t = {
			...t,
			style: "decimal"
		};
	}
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (L.has(r)) return L.get(r);
	let i = new Intl.NumberFormat(e, t);
	return L.set(r, i), i;
}
function U(e, t, n) {
	if (t === "auto") return e.format(n);
	if (t === "never") return e.format(Math.abs(n));
	{
		let r = !1;
		if (t === "always" ? r = n > 0 || Object.is(n, 0) : t === "exceptZero" && (Object.is(n, -0) || Object.is(n, 0) ? n = Math.abs(n) : r = n > 0), r) {
			let t = e.format(-n), r = e.format(n), i = t.replace(r, "").replace(/\u200e|\u061C/, "");
			return [...i].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), t.replace(r, "!!!").replace(i, "+").replace("!!!", r);
		}
		return e.format(n);
	}
}
//#endregion
//#region ../node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/i18n/useNumberFormatter.mjs
function W(e = {}) {
	let { locale: t } = I();
	return (0, s.useMemo)(() => new V(t, e), [t, e]);
}
//#endregion
//#region src/components/ui/label.tsx
var G = i(), K = n("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), q = s.forwardRef((e, n) => {
	let r = (0, G.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t(K(), i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, c.jsx)(u, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
q.displayName = u.displayName;
//#endregion
export { F as a, I as i, W as n, S as o, V as r, v as s, q as t };
