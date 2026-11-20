import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { h as n } from "./tooltip-BO1REbqs.js";
import { i as r } from "./label-BDKF3Afc.js";
var i = n("chart-pie", [["path", {
	d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
	key: "pzmjnu"
}], ["path", {
	d: "M21.21 15.89A10 10 0 1 1 8 2.83",
	key: "k2fpak"
}]]), a = n("list-filter", [
	["path", {
		d: "M2 5h20",
		key: "1fs1ex"
	}],
	["path", {
		d: "M6 12h12",
		key: "8npq4p"
	}],
	["path", {
		d: "M9 19h6",
		key: "456am0"
	}]
]), o = n("table", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}]
]), s = /* @__PURE__ */ e(t(), 1);
function c(e, t) {
	let n = (0, s.useRef)(null);
	return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
//#endregion
//#region ../node_modules/.pnpm/@internationalized+date@3.12.4/node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var l = /* @__PURE__ */ new Map(), u = class {
	constructor(e, t = {}) {
		this.formatter = f(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
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
		let e = this.formatter.resolvedOptions();
		return g() && (this.resolvedHourCycle ||= _(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, d = {
	true: { ja: "h11" },
	false: {}
};
function f(e, t = {}) {
	if (typeof t.hour12 == "boolean" && m()) {
		t = { ...t };
		let n = d[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (l.has(n)) return l.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return l.set(n, r), r;
}
var p = null;
function m() {
	return p ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", p;
}
var h = null;
function g() {
	return h ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", h;
}
function _(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = f(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === "hour").value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === "hour").value, 10);
	if (r === 0 && i === 23) return "h23";
	if (r === 24 && i === 23) return "h24";
	if (r === 0 && i === 11) return "h11";
	if (r === 12 && i === 11) return "h12";
	throw Error("Unexpected hour cycle result");
}
//#endregion
//#region ../node_modules/.pnpm/react-aria@3.52.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-aria/dist/private/i18n/useDateFormatter.mjs
function v(e) {
	e = c(e ?? {}, y);
	let { locale: t } = r();
	return (0, s.useMemo)(() => new u(t, e), [t, e]);
}
function y(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
export { a, o as i, u as n, i as o, c as r, v as t };
