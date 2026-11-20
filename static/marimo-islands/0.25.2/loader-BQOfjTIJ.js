import { g as e } from "./button-CvjkwdSk.js";
import { t } from "./objects-CzUgoMIF.js";
import { V as n, a as r, c as i, nt as a, o, rt as s } from "./vega-loader.browser-DNST6uVf.js";
//#region ../node_modules/.pnpm/vega-tooltip@1.1.0/node_modules/vega-tooltip/build/index.js
var c = { version: "1.1.0" };
function l(e, t, r, i) {
	if (s(e)) return `[${e.map((e) => t(n(e) ? e : d(e, r))).join(", ")}]`;
	if (a(e)) {
		let n = "", { title: o, image: s, ...c } = e;
		o && (n += `<h2>${t(o)}</h2>`), s && (n += `<img src="${new URL(t(s), i || location.href).href}">`);
		let l = Object.keys(c);
		if (l.length > 0) {
			n += "<table>";
			for (let e of l) {
				let i = c[e];
				i !== void 0 && (a(i) && (i = d(i, r)), n += `<tr><td class="key">${t(e)}</td><td class="value">${t(i)}</td></tr>`);
			}
			n += "</table>";
		}
		return n || "{}";
	}
	return t(e);
}
function u(e) {
	let t = [];
	return function(n, r) {
		if (typeof r != "object" || !r) return r;
		let i = t.indexOf(this) + 1;
		return t.length = i, t.length > e ? "[Object]" : t.indexOf(r) >= 0 ? "[Circular]" : (t.push(r), r);
	};
}
function d(e, t) {
	return JSON.stringify(e, u(t));
}
var ee = "#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  white-space: pre-line;\n}\n#vg-tooltip-element.visible {\n  visibility: visible;\n}\n#vg-tooltip-element h2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n#vg-tooltip-element table {\n  border-spacing: 0;\n}\n#vg-tooltip-element table tr {\n  border: none;\n}\n#vg-tooltip-element table tr td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  vertical-align: text-top;\n}\n#vg-tooltip-element table tr td.key {\n  color: #808080;\n  max-width: 150px;\n  text-align: right;\n  padding-right: 4px;\n}\n#vg-tooltip-element table tr td.value {\n  display: block;\n  max-width: 300px;\n  max-height: 7em;\n  text-align: left;\n}\n#vg-tooltip-element {\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black;\n}\n#vg-tooltip-element.dark-theme {\n  background-color: rgba(32, 32, 32, 0.9);\n  border: 1px solid #f5f5f5;\n  color: white;\n}\n#vg-tooltip-element.dark-theme td.key {\n  color: #bfbfbf;\n}\n", te = "vg-tooltip-element", ne = {
	offsetX: 10,
	offsetY: 10,
	id: te,
	styleId: "vega-tooltip-style",
	theme: "light",
	disableDefaultStyle: !1,
	sanitize: re,
	maxDepth: 2,
	formatTooltip: l,
	baseURL: "",
	anchor: "cursor",
	position: [
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"top-right",
		"bottom-left",
		"bottom-right"
	]
};
function re(e) {
	return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
function ie(e) {
	if (!/^[A-Za-z]+[-:.\w]*$/.test(e)) throw Error("Invalid HTML ID");
	return ee.toString().replaceAll(te, e);
}
function ae(e, t, { offsetX: n, offsetY: r }) {
	let i = ce({
		x1: e.clientX,
		x2: e.clientX,
		y1: e.clientY,
		y2: e.clientY
	}, t, n, r);
	for (let e of [
		"bottom-right",
		"bottom-left",
		"top-right",
		"top-left"
	]) if (le(i[e], t)) return i[e];
	return i["top-left"];
}
function oe(e, t, n, r, i) {
	let { position: a, offsetX: o, offsetY: s } = i, c = e._el.getBoundingClientRect(), l = e._origin, u = ce(se(c, l, n), r, o, s), d = Array.isArray(a) ? a : [a];
	for (let e of d) if (le(u[e], r) && !ue(t, u[e], r)) return u[e];
	return ae(t, r, i);
}
function se(e, t, n) {
	let r = n.isVoronoi ? n.datum.bounds : n.bounds, i = e.left + t[0] + r.x1, a = e.top + t[1] + r.y1, o = n;
	for (; o.mark.group;) o = o.mark.group, i += o.x ?? 0, a += o.y ?? 0;
	let s = r.x2 - r.x1, c = r.y2 - r.y1;
	return {
		x1: i,
		x2: i + s,
		y1: a,
		y2: a + c
	};
}
function ce(e, t, n, r) {
	let i = (e.x1 + e.x2) / 2, a = (e.y1 + e.y2) / 2, o = e.x1 - t.width - n, s = i - t.width / 2, c = e.x2 + n, l = e.y1 - t.height - r, u = a - t.height / 2, d = e.y2 + r;
	return {
		top: {
			x: s,
			y: l
		},
		bottom: {
			x: s,
			y: d
		},
		left: {
			x: o,
			y: u
		},
		right: {
			x: c,
			y: u
		},
		"top-left": {
			x: o,
			y: l
		},
		"top-right": {
			x: c,
			y: l
		},
		"bottom-left": {
			x: o,
			y: d
		},
		"bottom-right": {
			x: c,
			y: d
		}
	};
}
function le(e, t) {
	return e.x >= 0 && e.y >= 0 && e.x + t.width <= window.innerWidth && e.y + t.height <= window.innerHeight;
}
function ue(e, t, n) {
	return e.clientX >= t.x && e.clientX <= t.x + n.width && e.clientY >= t.y && e.clientY <= t.y + n.height;
}
var de = class {
	call;
	options;
	el;
	constructor(e) {
		this.options = {
			...ne,
			...e
		};
		let t = this.options.id;
		if (this.el = null, this.call = this.tooltipHandler.bind(this), !this.options.disableDefaultStyle && !document.getElementById(this.options.styleId)) {
			let e = document.createElement("style");
			e.setAttribute("id", this.options.styleId), e.innerHTML = ie(t);
			let n = document.head;
			n.childNodes.length > 0 ? n.insertBefore(e, n.childNodes[0]) : n.appendChild(e);
		}
	}
	tooltipHandler(e, t, n, r) {
		if (this.el = document.getElementById(this.options.id), this.el || (this.el = document.createElement("div"), this.el.setAttribute("id", this.options.id), this.el.classList.add("vg-tooltip"), (document.fullscreenElement ?? document.body).appendChild(this.el)), r == null || r === "") {
			this.el.classList.remove("visible", `${this.options.theme}-theme`);
			return;
		}
		this.el.innerHTML = this.options.formatTooltip(r, this.options.sanitize, this.options.maxDepth, this.options.baseURL), this.el.classList.add("visible", `${this.options.theme}-theme`);
		let { x: i, y: a } = this.options.anchor === "mark" ? oe(e, t, n, this.el.getBoundingClientRect(), this.options) : ae(t, this.el.getBoundingClientRect(), this.options);
		this.el.style.top = `${a}px`, this.el.style.left = `${i}px`;
	}
};
c.version;
//#endregion
//#region src/components/charts/tooltip.ts
var fe = new de(), pe = Uint8Array.of(65, 82, 82, 79, 87, 49), f = {
	V1: 0,
	V2: 1,
	V3: 2,
	V4: 3,
	V5: 4
}, p = {
	NONE: 0,
	Schema: 1,
	DictionaryBatch: 2,
	RecordBatch: 3,
	Tensor: 4,
	SparseTensor: 5
}, m = {
	Dictionary: -1,
	NONE: 0,
	Null: 1,
	Int: 2,
	Float: 3,
	Binary: 4,
	Utf8: 5,
	Bool: 6,
	Decimal: 7,
	Date: 8,
	Time: 9,
	Timestamp: 10,
	Interval: 11,
	List: 12,
	Struct: 13,
	Union: 14,
	FixedSizeBinary: 15,
	FixedSizeList: 16,
	Map: 17,
	Duration: 18,
	LargeBinary: 19,
	LargeUtf8: 20,
	LargeList: 21,
	RunEndEncoded: 22,
	BinaryView: 23,
	Utf8View: 24,
	ListView: 25,
	LargeListView: 26
}, me = {
	HALF: 0,
	SINGLE: 1,
	DOUBLE: 2
}, h = {
	DAY: 0,
	MILLISECOND: 1
}, g = {
	SECOND: 0,
	MILLISECOND: 1,
	MICROSECOND: 2,
	NANOSECOND: 3
}, _ = {
	YEAR_MONTH: 0,
	DAY_TIME: 1,
	MONTH_DAY_NANO: 2
}, v = {
	Sparse: 0,
	Dense: 1
}, he = Uint8Array, ge = Uint16Array, _e = Uint32Array, ve = BigUint64Array, ye = Int8Array, be = Int16Array, y = Int32Array, b = BigInt64Array, xe = Float32Array, x = Float64Array;
function Se(e, t) {
	let n = Math.log2(e) - 3;
	return (t ? [
		ye,
		be,
		y,
		b
	] : [
		he,
		ge,
		_e,
		ve
	])[n];
}
Object.getPrototypeOf(Int8Array);
function S(e, t) {
	let n = 0, r = e.length;
	if (r <= 2147483648) do {
		let i = n + r >>> 1;
		e[i] <= t ? n = i + 1 : r = i;
	} while (n < r);
	else do {
		let i = Math.trunc((n + r) / 2);
		e[i] <= t ? n = i + 1 : r = i;
	} while (n < r);
	return n;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/util/objects.js
function C(e, t, n) {
	if (t(e)) return e;
	throw Error(n(e));
}
function w(e, t, n) {
	return t = Array.isArray(t) ? t : Object.values(t), C(e, (e) => t.includes(e), n ?? (() => `${e} must be one of ${t}`));
}
function Ce(e, t) {
	for (let [n, r] of Object.entries(e)) if (r === t) return n;
	return "<Unknown>";
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/data-types.js
var T = (e) => `Unsupported data type: "${Ce(m, e)}" (id ${e})`, we = (e, t, n = !0, r = null) => ({
	name: e,
	type: t,
	nullable: n,
	metadata: r
});
function Te(e) {
	return Object.hasOwn(e, "name") && Ee(e.type);
}
function Ee(e) {
	return typeof e?.typeId == "number";
}
function E(e, t = "", n = !0) {
	return Te(e) ? e : we(t, C(e, Ee, () => "Data type expected."), n);
}
var De = (e, t, n = !1, r = -1) => ({
	typeId: m.Dictionary,
	id: r,
	dictionary: e,
	indices: t || ke(),
	ordered: n
}), Oe = (e = 32, t = !0) => ({
	typeId: m.Int,
	bitWidth: w(e, [
		8,
		16,
		32,
		64
	]),
	signed: t,
	values: Se(e, t)
}), ke = () => Oe(32), Ae = (e = 2) => ({
	typeId: m.Float,
	precision: w(e, me),
	values: [
		ge,
		xe,
		x
	][e]
}), je = () => ({
	typeId: m.Binary,
	offsets: y
}), Me = () => ({
	typeId: m.Utf8,
	offsets: y
}), Ne = (e, t, n = 128) => ({
	typeId: m.Decimal,
	precision: e,
	scale: t,
	bitWidth: w(n, [128, 256]),
	values: ve
}), Pe = (e) => ({
	typeId: m.Date,
	unit: w(e, h),
	values: e === h.DAY ? y : b
}), Fe = (e = g.MILLISECOND, t = 32) => ({
	typeId: m.Time,
	unit: w(e, g),
	bitWidth: w(t, [32, 64]),
	values: t === 32 ? y : b
}), Ie = (e = g.MILLISECOND, t = null) => ({
	typeId: m.Timestamp,
	unit: w(e, g),
	timezone: t,
	values: b
}), Le = (e = _.MONTH_DAY_NANO) => ({
	typeId: m.Interval,
	unit: w(e, _),
	values: e === _.MONTH_DAY_NANO ? void 0 : y
}), Re = (e) => ({
	typeId: m.List,
	children: [E(e)],
	offsets: y
}), ze = (e) => ({
	typeId: m.Struct,
	children: Array.isArray(e) && Te(e[0]) ? e : Object.entries(e).map(([e, t]) => we(e, t))
}), Be = (e, t, n, r) => (n ??= t.map((e, t) => t), {
	typeId: m.Union,
	mode: w(e, v),
	typeIds: n,
	typeMap: n.reduce((e, t, n) => (e[t] = n, e), {}),
	children: t.map((e, t) => E(e, `_${t}`)),
	typeIdForValue: r,
	offsets: y
}), Ve = (e) => ({
	typeId: m.FixedSizeBinary,
	stride: e
}), He = (e, t) => ({
	typeId: m.FixedSizeList,
	stride: t,
	children: [E(e)]
}), Ue = (e, t) => ({
	typeId: m.Map,
	keysSorted: e,
	children: [t],
	offsets: y
}), We = (e = g.MILLISECOND) => ({
	typeId: m.Duration,
	unit: w(e, g),
	values: b
}), Ge = () => ({
	typeId: m.LargeBinary,
	offsets: b
}), Ke = () => ({
	typeId: m.LargeUtf8,
	offsets: b
}), qe = (e) => ({
	typeId: m.LargeList,
	children: [E(e)],
	offsets: b
}), Je = (e, t) => ({
	typeId: m.RunEndEncoded,
	children: [C(E(e, "run_ends"), (e) => e.type.typeId === m.Int, () => "Run-ends must have an integer type."), E(t, "values")]
}), Ye = (e) => ({
	typeId: m.ListView,
	children: [E(e, "value")],
	offsets: y
}), Xe = (e) => ({
	typeId: m.LargeListView,
	children: [E(e, "value")],
	offsets: b
}), D = new x(2).buffer;
new b(D), new _e(D), new y(D), new he(D);
function O(e) {
	if (e > 2 ** 53 - 1 || e < -(2 ** 53 - 1)) throw Error(`BigInt exceeds integer number representation: ${e}`);
	return Number(e);
}
function k(e, t) {
	return Number(e / t) + Number(e % t) / Number(t);
}
var A = (e) => BigInt.asUintN(64, e);
function Ze(e, t) {
	let n = t << 1, r;
	return BigInt.asIntN(64, e[n + 1]) < 0 ? (r = A(~e[n]) | A(~e[n + 1]) << 64n, r = -(r + 1n)) : r = e[n] | e[n + 1] << 64n, r;
}
function Qe(e, t) {
	let n = t << 2, r;
	return BigInt.asIntN(64, e[n + 3]) < 0 ? (r = A(~e[n]) | A(~e[n + 1]) << 64n | A(~e[n + 2]) << 128n | A(~e[n + 3]) << 192n, r = -(r + 1n)) : r = e[n] | e[n + 1] << 64n | e[n + 2] << 128n | e[n + 3] << 192n, r;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/util/strings.js
var $e = new TextDecoder("utf-8");
new TextEncoder();
function j(e) {
	return $e.decode(e);
}
function et(e, t) {
	return !!(e[t >> 3] & 1 << t % 8);
}
function M(e, t) {
	let n = t + I(e, t), r = n - I(e, n), i = F(e, r);
	return (t, a, o = null) => {
		if (t < i) {
			let i = F(e, r + t);
			if (i) return a(e, n + i);
		}
		return o;
	};
}
function N(e, t) {
	return t;
}
function P(e, t) {
	return !!tt(e, t);
}
function tt(e, t) {
	return nt(e, t) << 24 >> 24;
}
function nt(e, t) {
	return e[t];
}
function F(e, t) {
	return rt(e, t) << 16 >> 16;
}
function rt(e, t) {
	return e[t] | e[t + 1] << 8;
}
function I(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
}
function it(e, t) {
	return I(e, t) >>> 0;
}
function L(e, t) {
	return O(BigInt.asIntN(64, BigInt(it(e, t)) + (BigInt(it(e, t + 4)) << 32n)));
}
function R(e, t) {
	let n = t + I(e, t), r = I(e, n);
	return n += 4, j(e.subarray(n, n + r));
}
function z(e, t, n, r) {
	if (!t) return [];
	let i = t + I(e, t);
	return Array.from({ length: I(e, i) }, (t, a) => r(e, i + 4 + a * n));
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/util/struct.js
var B = Symbol("rowIndex");
function at(e, t) {
	class n {
		constructor(e) {
			this[B] = e;
		}
		toJSON() {
			return st(e, t, this[B]);
		}
	}
	let r = n.prototype;
	for (let n = 0; n < e.length; ++n) {
		if (Object.hasOwn(r, e[n])) continue;
		let i = t[n];
		Object.defineProperty(r, e[n], {
			get() {
				return i.at(this[B]);
			},
			enumerable: !0
		});
	}
	return (e) => new n(e);
}
function ot(e, t) {
	return (n) => st(e, t, n);
}
function st(e, t, n) {
	let r = {};
	for (let i = 0; i < e.length; ++i) r[e[i]] = t[i].at(n);
	return r;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/batch.js
function ct(e) {
	return e instanceof H;
}
var V = class {
	static ArrayType = null;
	constructor({ length: e, nullCount: t, type: n, validity: r, values: i, offsets: a, sizes: o, children: s }) {
		this.length = e, this.nullCount = t, this.type = n, this.validity = r, this.values = i, this.offsets = a, this.sizes = o, this.children = s, (!t || !this.validity) && (this.at = (e) => this.value(e));
	}
	get [Symbol.toStringTag]() {
		return "Batch";
	}
	at(e) {
		return this.isValid(e) ? this.value(e) : null;
	}
	isValid(e) {
		return et(this.validity, e);
	}
	value(e) {
		return this.values[e];
	}
	slice(e, t) {
		let n = t - e, r = Array(n);
		for (let t = 0; t < n; ++t) r[t] = this.at(e + t);
		return r;
	}
	*[Symbol.iterator]() {
		for (let e = 0; e < this.length; ++e) yield this.at(e);
	}
}, H = class extends V {
	constructor(e) {
		super(e);
		let { length: t, values: n } = this;
		this.values = n.subarray(0, t);
	}
	slice(e, t) {
		return this.nullCount ? super.slice(e, t) : this.values.subarray(e, t);
	}
	[Symbol.iterator]() {
		return this.nullCount ? super[Symbol.iterator]() : this.values[Symbol.iterator]();
	}
}, U = class extends V {
	static ArrayType = x;
}, W = class extends V {
	static ArrayType = Array;
}, lt = class extends W {
	value(e) {
		return null;
	}
}, G = class extends U {
	value(e) {
		return O(this.values[e]);
	}
}, ut = class extends U {
	value(e) {
		let t = this.values[e], n = (t & 31744) >> 10, r = (t & 1023) / 1024, i = (-1) ** ((t & 32768) >> 15);
		switch (n) {
			case 31: return i * (r ? NaN : 1 / 0);
			case 0: return i * (r ? 6103515625e-14 * r : 0);
		}
		return i * 2 ** (n - 15) * (1 + r);
	}
}, dt = class extends W {
	value(e) {
		return et(this.values, e);
	}
}, ft = class extends V {
	constructor(e) {
		super(e);
		let { bitWidth: t, scale: n } = this.type;
		this.decimal = t === 128 ? Ze : Qe, this.scale = 10n ** BigInt(n);
	}
}, pt = class extends ft {
	static ArrayType = x;
	value(e) {
		return k(this.decimal(this.values, e), this.scale);
	}
}, mt = class extends ft {
	static ArrayType = Array;
	value(e) {
		return this.decimal(this.values, e);
	}
}, ht = class extends W {
	constructor(e) {
		super(e), this.source = e;
	}
	value(e) {
		return new Date(this.source.value(e));
	}
}, gt = class extends U {
	value(e) {
		return 864e5 * this.values[e];
	}
}, _t = G, vt = class extends G {
	value(e) {
		return super.value(e) * 1e3;
	}
}, yt = G, bt = class extends G {
	value(e) {
		return k(this.values[e], 1000n);
	}
}, xt = class extends G {
	value(e) {
		return k(this.values[e], 1000000n);
	}
}, St = class extends W {
	value(e) {
		return this.values.subarray(e << 1, e + 1 << 1);
	}
}, Ct = class extends W {
	value(e) {
		let t = this.values, n = e << 4;
		return Float64Array.of(I(t, n), I(t, n + 4), L(t, n + 8));
	}
}, wt = ({ values: e, offsets: t }, n) => e.subarray(t[n], t[n + 1]), Tt = ({ values: e, offsets: t }, n) => e.subarray(O(t[n]), O(t[n + 1])), Et = class extends W {
	value(e) {
		return wt(this, e);
	}
}, Dt = class extends W {
	value(e) {
		return Tt(this, e);
	}
}, Ot = class extends W {
	value(e) {
		return j(wt(this, e));
	}
}, kt = class extends W {
	value(e) {
		return j(Tt(this, e));
	}
}, At = class extends W {
	value(e) {
		let t = this.offsets;
		return this.children[0].slice(t[e], t[e + 1]);
	}
}, jt = class extends W {
	value(e) {
		let t = this.offsets;
		return this.children[0].slice(O(t[e]), O(t[e + 1]));
	}
}, Mt = class extends W {
	value(e) {
		let t = this.offsets[e], n = t + this.sizes[e];
		return this.children[0].slice(t, n);
	}
}, Nt = class extends W {
	value(e) {
		let t = this.offsets[e], n = t + this.sizes[e];
		return this.children[0].slice(O(t), O(n));
	}
}, Pt = class extends W {
	constructor(e) {
		super(e), this.stride = this.type.stride;
	}
}, Ft = class extends Pt {
	value(e) {
		let { stride: t, values: n } = this;
		return n.subarray(e * t, (e + 1) * t);
	}
}, It = class extends Pt {
	value(e) {
		let { children: t, stride: n } = this;
		return t[0].slice(e * n, (e + 1) * n);
	}
};
function Lt({ children: e, offsets: t }, n) {
	let [r, i] = e[0].children, a = t[n], o = t[n + 1], s = [];
	for (let e = a; e < o; ++e) s.push([r.at(e), i.at(e)]);
	return s;
}
var Rt = class extends W {
	value(e) {
		return Lt(this, e);
	}
}, zt = class extends W {
	value(e) {
		return new Map(Lt(this, e));
	}
}, Bt = class extends W {
	constructor({ typeIds: e, ...t }) {
		super(t), this.typeIds = e, this.typeMap = this.type.typeMap;
	}
	value(e, t = e) {
		let { typeIds: n, children: r, typeMap: i } = this;
		return r[i[n[e]]].at(t);
	}
}, Vt = class extends Bt {
	value(e) {
		return super.value(e, this.offsets[e]);
	}
}, Ht = class extends W {
	constructor(e, t = ot) {
		super(e), this.names = this.type.children.map((e) => e.name), this.factory = t(this.names, this.children);
	}
	value(e) {
		return this.factory(e);
	}
}, Ut = class extends Ht {
	constructor(e) {
		super(e, at);
	}
}, Wt = class extends W {
	value(e) {
		let [{ values: t }, n] = this.children;
		return n.at(S(t, e));
	}
}, Gt = class extends W {
	setDictionary(e) {
		return this.dictionary = e, this.cache = e.cache(), this;
	}
	value(e) {
		return this.cache[this.key(e)];
	}
	key(e) {
		return this.values[e];
	}
}, Kt = class extends W {
	constructor({ data: e, ...t }) {
		super(t), this.data = e;
	}
	view(e) {
		let { values: t, data: n } = this, r = e << 4, i = r + 4, a = t, o = I(a, r);
		return o > 12 && (i = I(a, r + 12), a = n[I(a, r + 8)]), a.subarray(i, i + o);
	}
}, qt = class extends Kt {
	value(e) {
		return this.view(e);
	}
}, Jt = class extends Kt {
	value(e) {
		return j(this.view(e));
	}
};
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/column.js
function Yt(e) {
	let t = [];
	return {
		add(e) {
			return t.push(e), this;
		},
		clear: () => t = [],
		done: () => new Xt(t, e)
	};
}
var Xt = class {
	constructor(e, t = e[0]?.type) {
		this.type = t, this.length = e.reduce((e, t) => e + t.length, 0), this.nullCount = e.reduce((e, t) => e + t.nullCount, 0), this.data = e;
		let n = e.length, r = new Int32Array(n + 1);
		if (n === 1) {
			let [t] = e;
			r[1] = t.length, this.at = (e) => t.at(e);
		} else for (let t = 0, i = 0; t < n; ++t) r[t + 1] = i += e[t].length;
		this.offsets = r;
	}
	get [Symbol.toStringTag]() {
		return "Column";
	}
	[Symbol.iterator]() {
		let e = this.data;
		return e.length === 1 ? e[0][Symbol.iterator]() : Zt(e);
	}
	at(e) {
		let { data: t, offsets: n } = this, r = S(n, e) - 1;
		return t[r]?.at(e - n[r]);
	}
	get(e) {
		return this.at(e);
	}
	toArray() {
		let { length: e, nullCount: t, data: n } = this, r = !t && ct(n[0]), i = n.length;
		if (r && i === 1) return n[0].values;
		let a = new (!i || t > 0 ? Array : n[0].constructor.ArrayType ?? n[0].values.constructor)(e);
		return r ? Qt(a, n) : $t(a, n);
	}
	cache() {
		return this._cache ??= this.toArray();
	}
};
function* Zt(e) {
	for (let t = 0; t < e.length; ++t) {
		let n = e[t][Symbol.iterator]();
		for (let e = n.next(); !e.done; e = n.next()) yield e.value;
	}
}
function Qt(e, t) {
	for (let n = 0, r = 0; n < t.length; ++n) {
		let { values: i } = t[n];
		e.set(i, r), r += i.length;
	}
	return e;
}
function $t(e, t) {
	let n = -1;
	for (let r = 0; r < t.length; ++r) {
		let i = t[r];
		for (let t = 0; t < i.length; ++t) e[++n] = i.at(t);
	}
	return e;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/table.js
var en = class e {
	constructor(e, t, n = !1) {
		let r = e.fields.map((e) => e.name);
		this.schema = e, this.names = r, this.children = t, this.factory = n ? at : ot;
		let i = [];
		this.getFactory = (e) => i[e] ?? (i[e] = this.factory(r, t.map((t) => t.data[e])));
	}
	get [Symbol.toStringTag]() {
		return "Table";
	}
	get numCols() {
		return this.names.length;
	}
	get numRows() {
		return this.children[0]?.length ?? 0;
	}
	getChildAt(e) {
		return this.children[e];
	}
	getChild(e) {
		let t = this.names.findIndex((t) => t === e);
		return t > -1 ? this.children[t] : void 0;
	}
	selectAt(t, n = []) {
		let { children: r, factory: i, schema: a } = this, { fields: o } = a;
		return new e({
			...a,
			fields: t.map((e, t) => tn(o[e], n[t]))
		}, t.map((e) => r[e]), i === at);
	}
	select(e, t) {
		let n = this.names, r = e.map((e) => n.indexOf(e));
		return this.selectAt(r, t);
	}
	toColumns() {
		let { children: e, names: t } = this, n = {};
		return t.forEach((t, r) => n[t] = e[r]?.toArray() ?? []), n;
	}
	toArray() {
		let { children: e, getFactory: t, numRows: n } = this, r = e[0]?.data ?? [], i = Array(n);
		for (let e = 0, n = -1; e < r.length; ++e) {
			let a = t(e);
			for (let t = 0; t < r[e].length; ++t) i[++n] = a(t);
		}
		return i;
	}
	*[Symbol.iterator]() {
		let { children: e, getFactory: t } = this, n = e[0]?.data ?? [];
		for (let e = 0; e < n.length; ++e) {
			let r = t(e);
			for (let t = 0; t < n[e].length; ++t) yield r(t);
		}
	}
	at(e) {
		let { children: t, getFactory: n, numRows: r } = this;
		if (e < 0 || e >= r) return null;
		let [{ offsets: i }] = t, a = S(i, e) - 1;
		return n(a)(e - i[a]);
	}
	get(e) {
		return this.at(e);
	}
};
function tn(e, t) {
	return t != null && t !== e.name ? {
		...e,
		name: t
	} : e;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/batch-type.js
function nn(e, t = {}) {
	let { typeId: n, bitWidth: r, precision: i, unit: a } = e, { useBigInt: o, useDate: s, useDecimalBigInt: c, useMap: l, useProxy: u } = t;
	switch (n) {
		case m.Null: return lt;
		case m.Bool: return dt;
		case m.Int:
		case m.Time:
		case m.Duration: return o || r < 64 ? H : G;
		case m.Float: return i ? H : ut;
		case m.Date: return rn(a === h.DAY ? gt : _t, s && ht);
		case m.Timestamp: return rn(a === g.SECOND ? vt : a === g.MILLISECOND ? yt : a === g.MICROSECOND ? bt : xt, s && ht);
		case m.Decimal: return c ? mt : pt;
		case m.Interval: return a === _.DAY_TIME ? St : a === _.YEAR_MONTH ? H : Ct;
		case m.FixedSizeBinary: return Ft;
		case m.Utf8: return Ot;
		case m.LargeUtf8: return kt;
		case m.Binary: return Et;
		case m.LargeBinary: return Dt;
		case m.BinaryView: return qt;
		case m.Utf8View: return Jt;
		case m.List: return At;
		case m.LargeList: return jt;
		case m.Map: return l ? zt : Rt;
		case m.ListView: return Mt;
		case m.LargeListView: return Nt;
		case m.FixedSizeList: return It;
		case m.Struct: return u ? Ut : Ht;
		case m.RunEndEncoded: return Wt;
		case m.Dictionary: return Gt;
		case m.Union: return e.mode ? Vt : Bt;
	}
	throw Error(T(n));
}
function rn(e, t) {
	return t ? class extends t {
		constructor(t) {
			super(new e(t));
		}
	} : e;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/block.js
function an(e, t) {
	return {
		offset: L(e, t),
		metadataLength: I(e, t + 8),
		bodyLength: L(e, t + 16)
	};
}
function on(e, t) {
	return z(e, t, 24, an);
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/record-batch.js
function sn(e, t, n) {
	let r = M(e, t);
	if (r(10, N, 0)) throw Error("Record batch compression not implemented");
	let i = n < f.V4 ? 8 : 0;
	return {
		length: r(4, L, 0),
		nodes: z(e, r(6, N), 16, (e, t) => ({
			length: L(e, t),
			nullCount: L(e, t + 8)
		})),
		regions: z(e, r(8, N), 16 + i, (e, t) => ({
			offset: L(e, t + i),
			length: L(e, t + i + 8)
		})),
		variadic: z(e, r(12, N), 8, L)
	};
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/dictionary-batch.js
function cn(e, t, n) {
	let r = M(e, t);
	return {
		id: r(4, L, 0),
		data: r(6, (e, t) => sn(e, t, n)),
		isDelta: r(8, P, !1)
	};
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/data-type.js
function ln(e, t, n, r) {
	w(n, m, T);
	let i = M(e, t);
	switch (n) {
		case m.Binary: return je();
		case m.Utf8: return Me();
		case m.LargeBinary: return Ge();
		case m.LargeUtf8: return Ke();
		case m.List: return Re(r[0]);
		case m.ListView: return Ye(r[0]);
		case m.LargeList: return qe(r[0]);
		case m.LargeListView: return Xe(r[0]);
		case m.Struct: return ze(r);
		case m.RunEndEncoded: return Je(r[0], r[1]);
		case m.Int: return Oe(i(4, I, 0), i(6, P, !1));
		case m.Float: return Ae(i(4, F, me.HALF));
		case m.Decimal: return Ne(i(4, I, 0), i(6, I, 0), i(8, I, 128));
		case m.Date: return Pe(i(4, F, h.MILLISECOND));
		case m.Time: return Fe(i(4, F, g.MILLISECOND), i(6, I, 32));
		case m.Timestamp: return Ie(i(4, F, g.SECOND), i(6, R));
		case m.Interval: return Le(i(4, F, _.YEAR_MONTH));
		case m.Duration: return We(i(4, F, g.MILLISECOND));
		case m.FixedSizeBinary: return Ve(i(4, I, 0));
		case m.FixedSizeList: return He(r[0], i(4, I, 0));
		case m.Map: return Ue(i(4, P, !1), r[0]);
		case m.Union: return Be(i(4, F, v.Sparse), r, z(e, i(6, N), 4, I));
	}
	return { typeId: n };
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/metadata.js
function K(e, t) {
	let n = z(e, t, 4, (e, t) => {
		let n = M(e, t);
		return [n(4, R), n(6, R)];
	});
	return n.length ? new Map(n) : null;
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/schema.js
function un(e, t, n) {
	let r = M(e, t);
	return {
		version: n,
		endianness: r(4, F, 0),
		fields: r(6, dn, []),
		metadata: r(8, K)
	};
}
function dn(e, t) {
	return z(e, t, 4, fn);
}
function fn(e, t) {
	let n = M(e, t), r = n(8, nt, m.NONE), i = n(10, N, 0), a = n(12, mn), o = ln(e, i, r, n(14, (e, t) => pn(e, t)));
	return a && (a.dictionary = o, o = a), {
		name: n(4, R),
		type: o,
		nullable: n(6, P, !1),
		metadata: n(16, K)
	};
}
function pn(e, t) {
	let n = z(e, t, 4, fn);
	return n.length ? n : null;
}
function mn(e, t) {
	if (!t) return null;
	let n = M(e, t);
	return De(null, n(6, hn, ke()), n(8, P, !1), n(4, L, 0));
}
function hn(e, t) {
	return ln(e, t, m.Int);
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/message.js
var gn = (e, t) => `Expected to read ${e} metadata bytes, but only read ${t}.`, _n = (e, t) => `Expected to read ${e} bytes for message body, but only read ${t}.`, vn = (e) => `Unsupported message type: ${e} (${Ce(p, e)})`;
function q(e, t) {
	let n = I(e, t) || 0;
	if (t += 4, n === -1 && (n = I(e, t) || 0, t += 4), n === 0) return null;
	let r = e.subarray(t, t += n);
	if (r.byteLength < n) throw Error(gn(n, r.byteLength));
	let i = M(r, 0), a = i(4, F, f.V1), o = i(6, nt, p.NONE), s = i(8, N, 0), c = i(10, L, 0), l;
	if (s) {
		let n = o === p.Schema ? un : o === p.DictionaryBatch ? cn : o === p.RecordBatch ? sn : null;
		if (!n) throw Error(vn(o));
		if (l = n(r, s, a), c > 0) {
			let n = e.subarray(t, t += c);
			if (n.byteLength < c) throw Error(_n(c, n.byteLength));
			l.body = n;
		}
	}
	return {
		version: a,
		type: o,
		index: t,
		content: l
	};
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/decode-ipc.js
function yn(e) {
	let t = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
	return t instanceof Uint8Array && bn(t) ? Sn(t) : xn(t);
}
function bn(e) {
	if (!e || e.length < 4) return !1;
	for (let t = 0; t < 6; ++t) if (pe[t] !== e[t]) return !1;
	return !0;
}
function xn(e) {
	let t = [e].flat(), n, r = [], i = [];
	for (let e of t) {
		if (!(e instanceof Uint8Array)) throw Error("IPC data batch was not a Uint8Array.");
		let t = 0;
		for (;;) {
			let a = q(e, t);
			if (a === null) break;
			if (t = a.index, a.content) switch (a.type) {
				case p.Schema:
					n ||= a.content;
					break;
				case p.RecordBatch:
					r.push(a.content);
					break;
				case p.DictionaryBatch: i.push(a.content);
			}
		}
	}
	return {
		schema: n,
		dictionaries: i,
		records: r,
		metadata: null
	};
}
function Sn(e) {
	let t = e.byteLength - (pe.length + 4), n = M(e, t - I(e, t)), r = n(4, F, f.V1), i = n(8, on, []), a = n(10, on, []);
	return {
		schema: n(6, (e, t) => un(e, t, r)),
		dictionaries: i.map(({ offset: t }) => q(e, t).content),
		records: a.map(({ offset: t }) => q(e, t).content),
		metadata: n(12, K)
	};
}
//#endregion
//#region ../node_modules/.pnpm/@uwdata+flechette@1.1.2/node_modules/@uwdata/flechette/src/decode/table-from-ipc.js
function J(e, t) {
	return Cn(yn(e), t);
}
function Cn(e, t = {}) {
	let { schema: n = { fields: [] }, dictionaries: r, records: i } = e, { version: a, fields: o } = n, s = /* @__PURE__ */ new Map(), c = Tn(t, a, s), l = /* @__PURE__ */ new Map();
	wn(n, (e) => {
		let t = e.type;
		t.typeId === m.Dictionary && l.set(t.id, t.dictionary);
	});
	let u = /* @__PURE__ */ new Map();
	for (let e of r) {
		let { id: t, data: n, isDelta: r, body: i } = e, a = l.get(t), o = Y(a, c({
			...n,
			body: i
		}));
		if (u.has(t)) {
			let e = u.get(t);
			r || e.clear(), e.add(o);
		} else {
			if (r) throw Error("Delta update can not be first dictionary batch.");
			u.set(t, Yt(a).add(o));
		}
	}
	u.forEach((e, t) => s.set(t, e.done()));
	let d = o.map((e) => Yt(e.type));
	for (let e of i) {
		let t = c(e);
		o.forEach((e, n) => d[n].add(Y(e.type, t)));
	}
	return new en(n, d.map((e) => e.done()), t.useProxy);
}
function wn(e, t) {
	e.fields.forEach(function e(n) {
		t(n), n.type.dictionary?.children?.forEach(e), n.type.children?.forEach(e);
	});
}
function Tn(e, t, n) {
	let r = {
		version: t,
		options: e,
		dictionary: (e) => n.get(e)
	};
	return (e) => {
		let { length: t, nodes: n, regions: i, variadic: a, body: o } = e, s = -1, c = -1, l = -1;
		return {
			...r,
			length: t,
			node: () => n[++s],
			buffer: (e) => {
				let { length: t, offset: n } = i[++c];
				return e ? new e(o.buffer, o.byteOffset + n, t / e.BYTES_PER_ELEMENT) : o.subarray(n, n + t);
			},
			variadic: () => a[++l],
			visit(e) {
				return e.map((e) => Y(e.type, this));
			}
		};
	};
}
function Y(e, t) {
	let { typeId: n } = e, { length: r, options: i, node: a, buffer: o, variadic: s, version: c } = t, l = nn(e, i);
	if (n === m.Null) return new l({
		length: r,
		nullCount: r,
		type: e
	});
	let u = {
		...a(),
		type: e
	};
	switch (n) {
		case m.Bool:
		case m.Int:
		case m.Time:
		case m.Duration:
		case m.Float:
		case m.Decimal:
		case m.Date:
		case m.Timestamp:
		case m.Interval:
		case m.FixedSizeBinary: return new l({
			...u,
			validity: o(),
			values: o(e.values)
		});
		case m.Utf8:
		case m.LargeUtf8:
		case m.Binary:
		case m.LargeBinary: return new l({
			...u,
			validity: o(),
			offsets: o(e.offsets),
			values: o()
		});
		case m.BinaryView:
		case m.Utf8View: return new l({
			...u,
			validity: o(),
			values: o(),
			data: Array.from({ length: s() }, () => o())
		});
		case m.List:
		case m.LargeList:
		case m.Map: return new l({
			...u,
			validity: o(),
			offsets: o(e.offsets),
			children: t.visit(e.children)
		});
		case m.ListView:
		case m.LargeListView: return new l({
			...u,
			validity: o(),
			offsets: o(e.offsets),
			sizes: o(e.offsets),
			children: t.visit(e.children)
		});
		case m.FixedSizeList:
		case m.Struct: return new l({
			...u,
			validity: o(),
			children: t.visit(e.children)
		});
		case m.RunEndEncoded: return new l({
			...u,
			children: t.visit(e.children)
		});
		case m.Dictionary: {
			let { id: n, indices: r } = e;
			return new l({
				...u,
				validity: o(),
				values: o(r.values)
			}).setDictionary(t.dictionary(n));
		}
		case m.Union: return c < f.V5 && o(), new l({
			...u,
			typeIds: o(ye),
			offsets: e.mode === v.Sparse ? null : o(e.offsets),
			children: t.visit(e.children)
		});
		default: throw Error(T(n));
	}
}
new Uint16Array(new Uint8Array([1, 0]).buffer)[0];
//#endregion
//#region src/utils/batch-requests.ts
function X(e, t) {
	let n = /* @__PURE__ */ new Map();
	return (...r) => {
		let i = t(...r);
		if (n.has(i)) return n.get(i);
		let a = e(...r).finally(() => {
			n.delete(i);
		});
		return n.set(i, a), a;
	};
}
//#endregion
//#region src/plugins/impl/vega/vega-loader.ts
function Z(e, t) {
	return o(e, t);
}
function En() {
	return r();
}
var Q = i;
//#endregion
//#region src/plugins/impl/vega/batched.ts
function Dn() {
	let e = On(En()), t = (e) => JSON.stringify(e);
	return {
		load: X(e.load.bind(e), t),
		sanitize: X(e.sanitize.bind(e), t),
		http: X(e.http.bind(e), t),
		file: X(e.file.bind(e), t)
	};
}
function On(e) {
	return {
		...e,
		async load(t, n) {
			return t.endsWith(".arrow") ? J(await kn(t), { useProxy: !1 }).toArray() : e.load(t, n);
		}
	};
}
var kn = X((e) => fetch(e).then((e) => e.arrayBuffer()), (e) => e), An = Q.integer, $ = Q.number, jn = Q.date, Mn = Q.boolean, Nn = () => {
	let e = (e) => e === "inf" || e === "+inf" ? Infinity : e === "-inf" ? -Infinity : $(e);
	return Q.integer = e, Q.number = e, () => {
		Q.integer = An, Q.number = $;
	};
}, Pn = () => (Q.integer = (e) => {
	if (e === "") return "";
	if (e === "-inf" || e === "inf") return e;
	function t(e) {
		let t = An(e);
		return Number.isNaN(t) ? e : t;
	}
	let n = Number.parseInt(e, 10);
	if (Number.isNaN(n)) return e;
	if (!(Math.abs(n) > 2 ** 53 - 1)) return t(e);
	try {
		return BigInt(e);
	} catch {
		return t(e);
	}
}, Q.number = (e) => {
	if (e === "-inf" || e === "inf") return e;
	let t = $(e);
	return Number.isNaN(t) ? e : t;
}, () => {
	Q.integer = An, Q.number = $;
}), Fn = () => (Q.date = (t) => {
	if (t === "") return "";
	if (t == null) return null;
	if (!/^\d{4}-\d{2}-\d{2}(T[\d.:]+(Z|[+-]\d{2}:?\d{2})?)?$/.test(t)) return t;
	try {
		let e = new Date(t);
		return Number.isNaN(e.getTime()) ? t : e;
	} catch {
		return e.warn(`Failed to parse date: ${t}`), t;
	}
}, () => {
	Q.date = jn;
});
Q.boolean = (e) => e === "True" || e !== "False" && Mn(e);
var In = Dn();
async function Ln(e, n, r = {}) {
	let { handleBigIntAndNumberLike: i = !1, replacePeriod: a = !1 } = r;
	if (e.endsWith(".arrow") || n?.type === "arrow") return J(await kn(e), {
		useProxy: !0,
		useDate: !0,
		useBigInt: i
	}).toArray();
	let o = [Fn];
	i ? o.push(Pn) : o.push(Nn);
	let s = [];
	try {
		let r = await In.load(e);
		if (!n) {
			if (typeof r == "string") try {
				JSON.parse(r), n = { type: "json" };
			} catch {
				n = {
					type: "csv",
					parse: "auto"
				};
			}
			typeof r == "object" && (n = { type: "json" });
		}
		let i = n?.type === "csv";
		i && typeof r == "string" && (r = zn(r)), i && typeof r == "string" && a && (r = Bn(r));
		let c = n?.parse || "auto";
		return typeof c == "object" && (c = t.mapValues(c, (e) => e === "time" ? "string" : e === "datetime" ? "date" : e)), s = o.map((e) => e()), i ? Z(r, {
			...n,
			parse: c
		}) : Z(r, n);
	} finally {
		s.forEach((e) => e());
	}
}
function Rn(e, t = !0) {
	let n = [Fn];
	t && n.push(Pn);
	let r = n.map((e) => e()), i = Z(e, {
		type: "csv",
		parse: "auto"
	});
	return r.forEach((e) => e()), i;
}
function zn(e) {
	return e?.includes(",") ? Vn(e, (e) => {
		let t = /* @__PURE__ */ new Set();
		return e.map((e) => {
			let n = Un(e, t);
			return t.add(n), n;
		});
	}) : e;
}
function Bn(e) {
	return e?.includes(".") ? Vn(e, (e) => e.map((e) => e.replaceAll(".", "․"))) : e;
}
function Vn(e, t) {
	let n = e.split("\n");
	return n[0] = t(n[0].split(",")).join(","), n.join("\n");
}
var Hn = "​";
function Un(e, t) {
	let n = e, r = 1;
	for (; t.has(n);) n = `${e}${Hn.repeat(r)}`, r++;
	return n;
}
//#endregion
export { fe as a, J as i, Ln as n, Dn as r, Rn as t };
