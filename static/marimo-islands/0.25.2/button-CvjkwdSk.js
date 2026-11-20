import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { t as n } from "./compiler-runtime-CldRdSsv.js";
import { t as r } from "./clsx-CoeGtWvn.js";
import { t as i } from "./jsx-runtime-3BD1kT0s.js";
import { t as a } from "./objects-CzUgoMIF.js";
//#region src/utils/functions.ts
var o = {
	NOOP: () => {},
	ASYNC_NOOP: async () => {},
	THROW: () => {
		throw Error("Should not be called");
	},
	asUpdater: (e) => typeof e == "function" ? e : () => e,
	identity: (e) => e
};
function s() {
	throw Error("Not implemented");
}
//#endregion
//#region src/utils/Logger.ts
var c = (e, t) => {
	let n = `[${e}]`;
	return {
		debug: (...e) => console.debug(n, ...e),
		log: (...e) => t.log(n, ...e),
		warn: (...e) => t.warn(n, ...e),
		error: (...e) => t.error(n, ...e),
		trace: (...e) => t.trace(n, ...e),
		get: (n) => c(`${e}:${n}`, t),
		disabled: (e = !0) => e ? u : t
	};
}, l = {
	debug: (...e) => {
		console.debug(...e);
	},
	log: (...e) => {
		console.log(...e);
	},
	warn: (...e) => {
		console.warn(...e);
	},
	error: (...e) => {
		console.error(...e);
	},
	trace: (...e) => {
		console.trace(...e);
	},
	get: (e) => c(`marimo:${e}`, l),
	disabled: (e = !0) => e ? u : l
}, u = {
	debug: () => o.NOOP,
	log: () => o.NOOP,
	warn: () => o.NOOP,
	error: () => o.NOOP,
	trace: () => o.NOOP,
	get: () => u,
	disabled: () => u
};
function d() {
	return typeof window < "u" && window.Logger || l;
}
var f = d(), p = /* @__PURE__ */ e(t(), 1), m = n(), h = "-", g = (e) => {
	let t = b(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			let n = e.split(h);
			return n[0] === "" && n.length !== 1 && n.shift(), _(n, t) || y(e);
		},
		getConflictingClassGroupIds: (e, t) => {
			let i = n[e] || [];
			return t && r[e] ? [...i, ...r[e]] : i;
		}
	};
}, _ = (e, t) => {
	if (e.length === 0) return t.classGroupId;
	let n = e[0], r = t.nextPart.get(n), i = r ? _(e.slice(1), r) : void 0;
	if (i) return i;
	if (t.validators.length === 0) return;
	let a = e.join(h);
	return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
}, v = /^\[(.+)\]$/, y = (e) => {
	if (v.test(e)) {
		let t = v.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
		if (n) return "arbitrary.." + n;
	}
}, b = (e) => {
	let { theme: t, prefix: n } = e, r = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	return C(Object.entries(e.classGroups), n).forEach(([e, n]) => {
		x(n, r, e, t);
	}), r;
}, x = (e, t, n, r) => {
	e.forEach((e) => {
		if (typeof e == "string") {
			let r = e === "" ? t : S(t, e);
			r.classGroupId = n;
			return;
		}
		if (typeof e == "function") {
			if (ee(e)) {
				x(e(r), t, n, r);
				return;
			}
			t.validators.push({
				validator: e,
				classGroupId: n
			});
			return;
		}
		Object.entries(e).forEach(([e, i]) => {
			x(i, S(t, e), n, r);
		});
	});
}, S = (e, t) => {
	let n = e;
	return t.split(h).forEach((e) => {
		n.nextPart.has(e) || n.nextPart.set(e, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		}), n = n.nextPart.get(e);
	}), n;
}, ee = (e) => e.isThemeGetter, C = (e, t) => t ? e.map(([e, n]) => [e, n.map((e) => typeof e == "string" ? t + e : typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, n]) => [t + e, n])) : e)]) : e, w = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = (i, a) => {
		n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
	};
	return {
		get(e) {
			let t = n.get(e);
			if (t !== void 0) return t;
			if ((t = r.get(e)) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			n.has(e) ? n.set(e, t) : i(e, t);
		}
	};
}, T = "!", E = (e) => {
	let { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, i = t[0], a = t.length, o = (e) => {
		let n = [], o = 0, s = 0, c;
		for (let l = 0; l < e.length; l++) {
			let u = e[l];
			if (o === 0) {
				if (u === i && (r || e.slice(l, l + a) === t)) {
					n.push(e.slice(s, l)), s = l + a;
					continue;
				}
				if (u === "/") {
					c = l;
					continue;
				}
			}
			u === "[" ? o++ : u === "]" && o--;
		}
		let l = n.length === 0 ? e : e.substring(s), u = l.startsWith(T);
		return {
			modifiers: n,
			hasImportantModifier: u,
			baseClassName: u ? l.substring(1) : l,
			maybePostfixModifierPosition: c && c > s ? c - s : void 0
		};
	};
	return n ? (e) => n({
		className: e,
		parseClassName: o
	}) : o;
}, D = (e) => {
	if (e.length <= 1) return e;
	let t = [], n = [];
	return e.forEach((e) => {
		e[0] === "[" ? (t.push(...n.sort(), e), n = []) : n.push(e);
	}), t.push(...n.sort()), t;
}, te = (e) => ({
	cache: w(e.cacheSize),
	parseClassName: E(e),
	...g(e)
}), O = /\s+/, ne = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t, a = [], o = e.trim().split(O), s = "";
	for (let e = o.length - 1; e >= 0; --e) {
		let t = o[e], { modifiers: c, hasImportantModifier: l, baseClassName: u, maybePostfixModifierPosition: d } = n(t), f = !!d, p = r(f ? u.substring(0, d) : u);
		if (!p) {
			if (!f) {
				s = t + (s.length > 0 ? " " + s : s);
				continue;
			}
			if (p = r(u), !p) {
				s = t + (s.length > 0 ? " " + s : s);
				continue;
			}
			f = !1;
		}
		let m = D(c).join(":"), h = l ? m + T : m, g = h + p;
		if (a.includes(g)) continue;
		a.push(g);
		let _ = i(p, f);
		for (let e = 0; e < _.length; ++e) {
			let t = _[e];
			a.push(h + t);
		}
		s = t + (s.length > 0 ? " " + s : s);
	}
	return s;
};
function k() {
	let e = 0, t, n, r = "";
	for (; e < arguments.length;) (t = arguments[e++]) && (n = A(t)) && (r && (r += " "), r += n);
	return r;
}
var A = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = A(e[r])) && (n && (n += " "), n += t);
	return n;
};
function j(e, ...t) {
	let n, r, i, a = o;
	function o(o) {
		return n = te(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o);
	}
	function s(e) {
		let t = r(e);
		if (t) return t;
		let a = ne(e, n);
		return i(e, a), a;
	}
	return function() {
		return a(k.apply(null, arguments));
	};
}
var M = (e) => {
	let t = (t) => t[e] || [];
	return t.isThemeGetter = !0, t;
}, N = /^\[(?:([a-z-]+):)?(.+)\]$/i, P = /^\d+\/\d+$/, F = /*#__PURE__*/ new Set([
	"px",
	"full",
	"screen"
]), re = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ie = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ae = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, oe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, se = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, I = (e) => R(e) || F.has(e) || P.test(e), L = (e) => U(e, "length", ge), R = (e) => !!e && !Number.isNaN(Number(e)), ce = (e) => U(e, "number", R), z = (e) => !!e && Number.isInteger(Number(e)), le = (e) => e.endsWith("%") && R(e.slice(0, -1)), B = (e) => N.test(e), V = (e) => re.test(e), ue = /*#__PURE__*/ new Set([
	"length",
	"size",
	"percentage"
]), de = (e) => U(e, ue, _e), fe = (e) => U(e, "position", _e), pe = /*#__PURE__*/ new Set(["image", "url"]), me = (e) => U(e, pe, ye), he = (e) => U(e, "", ve), H = () => !0, U = (e, t, n) => {
	let r = N.exec(e);
	return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, ge = (e) => ie.test(e) && !ae.test(e), _e = () => !1, ve = (e) => oe.test(e), ye = (e) => se.test(e), be = /*#__PURE__*/ j(() => {
	let e = M("colors"), t = M("spacing"), n = M("blur"), r = M("brightness"), i = M("borderColor"), a = M("borderRadius"), o = M("borderSpacing"), s = M("borderWidth"), c = M("contrast"), l = M("grayscale"), u = M("hueRotate"), d = M("invert"), f = M("gap"), p = M("gradientColorStops"), m = M("gradientColorStopPositions"), h = M("inset"), g = M("margin"), _ = M("opacity"), v = M("padding"), y = M("saturate"), b = M("scale"), x = M("sepia"), S = M("skew"), ee = M("space"), C = M("translate"), w = () => [
		"auto",
		"contain",
		"none"
	], T = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], E = () => [
		"auto",
		B,
		t
	], D = () => [B, t], te = () => [
		"",
		I,
		L
	], O = () => [
		"auto",
		R,
		B
	], ne = () => [
		"bottom",
		"center",
		"left",
		"left-bottom",
		"left-top",
		"right",
		"right-bottom",
		"right-top",
		"top"
	], k = () => [
		"solid",
		"dashed",
		"dotted",
		"double",
		"none"
	], A = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], j = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch"
	], N = () => [
		"",
		"0",
		B
	], P = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], F = () => [R, B];
	return {
		cacheSize: 500,
		separator: ":",
		theme: {
			colors: [H],
			spacing: [I, L],
			blur: [
				"none",
				"",
				V,
				B
			],
			brightness: F(),
			borderColor: [e],
			borderRadius: [
				"none",
				"",
				"full",
				V,
				B
			],
			borderSpacing: D(),
			borderWidth: te(),
			contrast: F(),
			grayscale: N(),
			hueRotate: F(),
			invert: N(),
			gap: D(),
			gradientColorStops: [e],
			gradientColorStopPositions: [le, L],
			inset: E(),
			margin: E(),
			opacity: F(),
			padding: D(),
			saturate: F(),
			scale: F(),
			sepia: N(),
			skew: F(),
			space: D(),
			translate: D()
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				"video",
				B
			] }],
			container: ["container"],
			columns: [{ columns: [V] }],
			"break-after": [{ "break-after": P() }],
			"break-before": [{ "break-before": P() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: [...ne(), B] }],
			overflow: [{ overflow: T() }],
			"overflow-x": [{ "overflow-x": T() }],
			"overflow-y": [{ "overflow-y": T() }],
			overscroll: [{ overscroll: w() }],
			"overscroll-x": [{ "overscroll-x": w() }],
			"overscroll-y": [{ "overscroll-y": w() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: [h] }],
			"inset-x": [{ "inset-x": [h] }],
			"inset-y": [{ "inset-y": [h] }],
			start: [{ start: [h] }],
			end: [{ end: [h] }],
			top: [{ top: [h] }],
			right: [{ right: [h] }],
			bottom: [{ bottom: [h] }],
			left: [{ left: [h] }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				"auto",
				z,
				B
			] }],
			basis: [{ basis: E() }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"wrap",
				"wrap-reverse",
				"nowrap"
			] }],
			flex: [{ flex: [
				"1",
				"auto",
				"initial",
				"none",
				B
			] }],
			grow: [{ grow: N() }],
			shrink: [{ shrink: N() }],
			order: [{ order: [
				"first",
				"last",
				"none",
				z,
				B
			] }],
			"grid-cols": [{ "grid-cols": [H] }],
			"col-start-end": [{ col: [
				"auto",
				{ span: [
					"full",
					z,
					B
				] },
				B
			] }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": [H] }],
			"row-start-end": [{ row: [
				"auto",
				{ span: [z, B] },
				B
			] }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": [
				"auto",
				"min",
				"max",
				"fr",
				B
			] }],
			"auto-rows": [{ "auto-rows": [
				"auto",
				"min",
				"max",
				"fr",
				B
			] }],
			gap: [{ gap: [f] }],
			"gap-x": [{ "gap-x": [f] }],
			"gap-y": [{ "gap-y": [f] }],
			"justify-content": [{ justify: ["normal", ...j()] }],
			"justify-items": [{ "justify-items": [
				"start",
				"end",
				"center",
				"stretch"
			] }],
			"justify-self": [{ "justify-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			"align-content": [{ content: [
				"normal",
				...j(),
				"baseline"
			] }],
			"align-items": [{ items: [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			"align-self": [{ self: [
				"auto",
				"start",
				"end",
				"center",
				"stretch",
				"baseline"
			] }],
			"place-content": [{ "place-content": [...j(), "baseline"] }],
			"place-items": [{ "place-items": [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			"place-self": [{ "place-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			p: [{ p: [v] }],
			px: [{ px: [v] }],
			py: [{ py: [v] }],
			ps: [{ ps: [v] }],
			pe: [{ pe: [v] }],
			pt: [{ pt: [v] }],
			pr: [{ pr: [v] }],
			pb: [{ pb: [v] }],
			pl: [{ pl: [v] }],
			m: [{ m: [g] }],
			mx: [{ mx: [g] }],
			my: [{ my: [g] }],
			ms: [{ ms: [g] }],
			me: [{ me: [g] }],
			mt: [{ mt: [g] }],
			mr: [{ mr: [g] }],
			mb: [{ mb: [g] }],
			ml: [{ ml: [g] }],
			"space-x": [{ "space-x": [ee] }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": [ee] }],
			"space-y-reverse": ["space-y-reverse"],
			w: [{ w: [
				"auto",
				"min",
				"max",
				"fit",
				"svw",
				"lvw",
				"dvw",
				B,
				t
			] }],
			"min-w": [{ "min-w": [
				B,
				t,
				"min",
				"max",
				"fit"
			] }],
			"max-w": [{ "max-w": [
				B,
				t,
				"none",
				"full",
				"min",
				"max",
				"fit",
				"prose",
				{ screen: [V] },
				V
			] }],
			h: [{ h: [
				B,
				t,
				"auto",
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			"min-h": [{ "min-h": [
				B,
				t,
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			"max-h": [{ "max-h": [
				B,
				t,
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			size: [{ size: [
				B,
				t,
				"auto",
				"min",
				"max",
				"fit"
			] }],
			"font-size": [{ text: [
				"base",
				V,
				L
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black",
				ce
			] }],
			"font-family": [{ font: [H] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest",
				B
			] }],
			"line-clamp": [{ "line-clamp": [
				"none",
				R,
				ce
			] }],
			leading: [{ leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose",
				I,
				B
			] }],
			"list-image": [{ "list-image": ["none", B] }],
			"list-style-type": [{ list: [
				"none",
				"disc",
				"decimal",
				B
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"placeholder-color": [{ placeholder: [e] }],
			"placeholder-opacity": [{ "placeholder-opacity": [_] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"text-color": [{ text: [e] }],
			"text-opacity": [{ "text-opacity": [_] }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...k(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				"auto",
				"from-font",
				I,
				L
			] }],
			"underline-offset": [{ "underline-offset": [
				"auto",
				I,
				B
			] }],
			"text-decoration-color": [{ decoration: [e] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: D() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				B
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: ["none", B] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-opacity": [{ "bg-opacity": [_] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: [...ne(), fe] }],
			"bg-repeat": [{ bg: ["no-repeat", { repeat: [
				"",
				"x",
				"y",
				"round",
				"space"
			] }] }],
			"bg-size": [{ bg: [
				"auto",
				"cover",
				"contain",
				de
			] }],
			"bg-image": [{ bg: [
				"none",
				{ "gradient-to": [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				] },
				me
			] }],
			"bg-color": [{ bg: [e] }],
			"gradient-from-pos": [{ from: [m] }],
			"gradient-via-pos": [{ via: [m] }],
			"gradient-to-pos": [{ to: [m] }],
			"gradient-from": [{ from: [p] }],
			"gradient-via": [{ via: [p] }],
			"gradient-to": [{ to: [p] }],
			rounded: [{ rounded: [a] }],
			"rounded-s": [{ "rounded-s": [a] }],
			"rounded-e": [{ "rounded-e": [a] }],
			"rounded-t": [{ "rounded-t": [a] }],
			"rounded-r": [{ "rounded-r": [a] }],
			"rounded-b": [{ "rounded-b": [a] }],
			"rounded-l": [{ "rounded-l": [a] }],
			"rounded-ss": [{ "rounded-ss": [a] }],
			"rounded-se": [{ "rounded-se": [a] }],
			"rounded-ee": [{ "rounded-ee": [a] }],
			"rounded-es": [{ "rounded-es": [a] }],
			"rounded-tl": [{ "rounded-tl": [a] }],
			"rounded-tr": [{ "rounded-tr": [a] }],
			"rounded-br": [{ "rounded-br": [a] }],
			"rounded-bl": [{ "rounded-bl": [a] }],
			"border-w": [{ border: [s] }],
			"border-w-x": [{ "border-x": [s] }],
			"border-w-y": [{ "border-y": [s] }],
			"border-w-s": [{ "border-s": [s] }],
			"border-w-e": [{ "border-e": [s] }],
			"border-w-t": [{ "border-t": [s] }],
			"border-w-r": [{ "border-r": [s] }],
			"border-w-b": [{ "border-b": [s] }],
			"border-w-l": [{ "border-l": [s] }],
			"border-opacity": [{ "border-opacity": [_] }],
			"border-style": [{ border: [...k(), "hidden"] }],
			"divide-x": [{ "divide-x": [s] }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": [s] }],
			"divide-y-reverse": ["divide-y-reverse"],
			"divide-opacity": [{ "divide-opacity": [_] }],
			"divide-style": [{ divide: k() }],
			"border-color": [{ border: [i] }],
			"border-color-x": [{ "border-x": [i] }],
			"border-color-y": [{ "border-y": [i] }],
			"border-color-s": [{ "border-s": [i] }],
			"border-color-e": [{ "border-e": [i] }],
			"border-color-t": [{ "border-t": [i] }],
			"border-color-r": [{ "border-r": [i] }],
			"border-color-b": [{ "border-b": [i] }],
			"border-color-l": [{ "border-l": [i] }],
			"divide-color": [{ divide: [i] }],
			"outline-style": [{ outline: ["", ...k()] }],
			"outline-offset": [{ "outline-offset": [I, B] }],
			"outline-w": [{ outline: [I, L] }],
			"outline-color": [{ outline: [e] }],
			"ring-w": [{ ring: te() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: [e] }],
			"ring-opacity": [{ "ring-opacity": [_] }],
			"ring-offset-w": [{ "ring-offset": [I, L] }],
			"ring-offset-color": [{ "ring-offset": [e] }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				V,
				he
			] }],
			"shadow-color": [{ shadow: [H] }],
			opacity: [{ opacity: [_] }],
			"mix-blend": [{ "mix-blend": [
				...A(),
				"plus-lighter",
				"plus-darker"
			] }],
			"bg-blend": [{ "bg-blend": A() }],
			filter: [{ filter: ["", "none"] }],
			blur: [{ blur: [n] }],
			brightness: [{ brightness: [r] }],
			contrast: [{ contrast: [c] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				V,
				B
			] }],
			grayscale: [{ grayscale: [l] }],
			"hue-rotate": [{ "hue-rotate": [u] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [y] }],
			sepia: [{ sepia: [x] }],
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			"backdrop-blur": [{ "backdrop-blur": [n] }],
			"backdrop-brightness": [{ "backdrop-brightness": [r] }],
			"backdrop-contrast": [{ "backdrop-contrast": [c] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
			"backdrop-invert": [{ "backdrop-invert": [d] }],
			"backdrop-opacity": [{ "backdrop-opacity": [_] }],
			"backdrop-saturate": [{ "backdrop-saturate": [y] }],
			"backdrop-sepia": [{ "backdrop-sepia": [x] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": [o] }],
			"border-spacing-x": [{ "border-spacing-x": [o] }],
			"border-spacing-y": [{ "border-spacing-y": [o] }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"none",
				"all",
				"",
				"colors",
				"opacity",
				"shadow",
				"transform",
				B
			] }],
			duration: [{ duration: F() }],
			ease: [{ ease: [
				"linear",
				"in",
				"out",
				"in-out",
				B
			] }],
			delay: [{ delay: F() }],
			animate: [{ animate: [
				"none",
				"spin",
				"ping",
				"pulse",
				"bounce",
				B
			] }],
			transform: [{ transform: [
				"",
				"gpu",
				"none"
			] }],
			scale: [{ scale: [b] }],
			"scale-x": [{ "scale-x": [b] }],
			"scale-y": [{ "scale-y": [b] }],
			rotate: [{ rotate: [z, B] }],
			"translate-x": [{ "translate-x": [C] }],
			"translate-y": [{ "translate-y": [C] }],
			"skew-x": [{ "skew-x": [S] }],
			"skew-y": [{ "skew-y": [S] }],
			"transform-origin": [{ origin: [
				"center",
				"top",
				"top-right",
				"right",
				"bottom-right",
				"bottom",
				"bottom-left",
				"left",
				"top-left",
				B
			] }],
			accent: [{ accent: ["auto", e] }],
			appearance: [{ appearance: ["none", "auto"] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				B
			] }],
			"caret-color": [{ caret: [e] }],
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			resize: [{ resize: [
				"none",
				"y",
				"x",
				""
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": D() }],
			"scroll-mx": [{ "scroll-mx": D() }],
			"scroll-my": [{ "scroll-my": D() }],
			"scroll-ms": [{ "scroll-ms": D() }],
			"scroll-me": [{ "scroll-me": D() }],
			"scroll-mt": [{ "scroll-mt": D() }],
			"scroll-mr": [{ "scroll-mr": D() }],
			"scroll-mb": [{ "scroll-mb": D() }],
			"scroll-ml": [{ "scroll-ml": D() }],
			"scroll-p": [{ "scroll-p": D() }],
			"scroll-px": [{ "scroll-px": D() }],
			"scroll-py": [{ "scroll-py": D() }],
			"scroll-ps": [{ "scroll-ps": D() }],
			"scroll-pe": [{ "scroll-pe": D() }],
			"scroll-pt": [{ "scroll-pt": D() }],
			"scroll-pr": [{ "scroll-pr": D() }],
			"scroll-pb": [{ "scroll-pb": D() }],
			"scroll-pl": [{ "scroll-pl": D() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				B
			] }],
			fill: [{ fill: [e, "none"] }],
			"stroke-w": [{ stroke: [
				I,
				L,
				ce
			] }],
			stroke: [{ stroke: [e, "none"] }],
			sr: ["sr-only", "not-sr-only"],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-s",
				"border-color-e",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] }
	};
});
//#endregion
//#region src/utils/cn.ts
function W(...e) {
	return be(r(e));
}
//#endregion
//#region src/utils/events.ts
var G = {
	stopPropagation: (e) => (t) => {
		t.stopPropagation(), e && e(t);
	},
	onEnter: (e) => (t) => {
		t.key === "Enter" && e && e(t);
	},
	preventFocus: (e) => {
		e.preventDefault();
	},
	fromInput: (e) => {
		let t = G.composedTarget(e);
		return t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName.startsWith("MARIMO") || t.isContentEditable || G.fromCodeMirror(t);
	},
	fromCodeMirror: (e) => e.closest(".cm-editor") !== null,
	shouldIgnoreKeyboardEvent(e) {
		let t = G.composedTarget(e);
		return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement || t instanceof HTMLElement && (t.isContentEditable || t.tagName === "BUTTON" || t.closest("[role='textbox']") !== null || t.closest("[contenteditable='true']") !== null || G.fromCodeMirror(t));
	},
	composedTarget(e) {
		return "composedPath" in e && typeof e.composedPath == "function" ? e.composedPath()[0] ?? e.target : e.target;
	},
	hasModifier: (e) => e.ctrlKey || e.metaKey || e.altKey || e.shiftKey,
	isMetaOrCtrl: (e) => e.metaKey || e.ctrlKey
}, xe = Object.defineProperty, K = (e, t) => xe(e, "name", {
	value: t,
	configurable: !0
});
function q(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
K(q, "setRef");
function J(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = q(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : q(e[t], null);
			}
		};
	};
}
K(J, "composeRefs");
function Y(...e) {
	return p.useCallback(J(...e), e);
}
K(Y, "useComposedRefs");
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-slot@1.3.3_@types+react@19.3.0_react@19.3.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var Se = Object.defineProperty, X = (e, t) => Se(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ce(e) {
	let t = p.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		Me(r) && typeof Z == "function" && (r = Z(r._payload)), p.Children.forEach(r, (e) => {
			if (Ae(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Me(n) && typeof Z == "function" && (n = Z(n._payload)), a = De(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = p.cloneElement(a, void 0, s) : !o && p.Children.count(r) === 1 && p.isValidElement(r) && (a = r);
		let c = a ? ke(a) : void 0, l = Y(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? Fe(e) : Pe(e));
			return r;
		}
		let u = Oe(i, a.props ?? {});
		return a.type !== p.Fragment && (u.ref = n ? l : c), p.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
X(Ce, "createSlot");
var we = /* @__PURE__ */ Ce("Slot"), Te = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ee(e) {
	let t = /* @__PURE__ */ X((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Te, t;
}
X(Ee, "createSlottable");
var De = /* @__PURE__ */ X((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return p.isValidElement(t) ? p.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return p.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Oe(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
X(Oe, "mergeProps");
function ke(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
X(ke, "getElementRef");
function Ae(e) {
	return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Te;
}
X(Ae, "isSlottable");
var je = Symbol.for("react.lazy");
function Me(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === je && "_payload" in e && Ne(e._payload);
}
X(Me, "isLazyComponent");
function Ne(e) {
	return typeof e == "object" && !!e && "then" in e;
}
X(Ne, "isPromiseLike");
var Pe = /* @__PURE__ */ X((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Fe = /* @__PURE__ */ X((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Z = p.use;
//#endregion
//#region src/hooks/useEventListener.ts
function Ie(e) {
	return typeof e == "object" && !!e && !("addEventListener" in e) && "current" in e;
}
function Le(e, t, n, r) {
	let i = (0, m.c)(8), a = (0, p.useRef)(n), o, s;
	i[0] === n ? (o = i[1], s = i[2]) : (o = () => {
		a.current = n;
	}, s = [n], i[0] = n, i[1] = o, i[2] = s), (0, p.useEffect)(o, s);
	let c, l;
	i[3] !== r || i[4] !== e || i[5] !== t ? (c = () => {
		let n = Ie(e) ? e.current : e;
		if (!n) return;
		let i = (e) => a.current(e);
		return n.addEventListener(t, i, r), () => {
			n.removeEventListener(t, i, r);
		};
	}, l = [
		t,
		e,
		r
	], i[3] = r, i[4] = e, i[5] = t, i[6] = c, i[7] = l) : (c = i[6], l = i[7]), (0, p.useEffect)(c, l);
}
//#endregion
//#region src/core/hotkeys/shortcuts.ts
function Re() {
	if (typeof window > "u") return f.warn("isPlatformMac() called without window"), !1;
	let e = window.navigator.userAgentData ? window.navigator.userAgentData.platform : window.navigator.platform;
	return /mac/i.test(e);
}
function ze() {
	if (typeof window > "u") return f.warn("isPlatformWindows() called without window"), !1;
	let e = window.navigator.userAgentData ? window.navigator.userAgentData.platform : window.navigator.platform;
	return /win/i.test(e);
}
function Be(e, t) {
	let n = !0;
	for (let r of e) {
		switch (r) {
			case "mod":
				n &&= t.metaKey || t.ctrlKey;
				break;
			case "ctrl":
				n &&= t.ctrlKey;
				break;
			case "meta":
				n &&= t.metaKey;
				break;
			case "shift":
				n &&= t.shiftKey;
				break;
			case "alt":
				n &&= t.altKey;
				break;
			case "space":
				n &&= t.code === "Space";
				break;
			default: /^\d$/.test(r) && t.shiftKey ? n &&= t.code === `Digit${r}` : n &&= t.key.toLowerCase() === r;
		}
		if (!n) return !1;
	}
	return e.includes("shift") || (n &&= !t.shiftKey), !e.includes("ctrl") && !e.includes("mod") && (n &&= !t.ctrlKey), !e.includes("meta") && !e.includes("mod") && (n &&= !t.metaKey), e.includes("alt") || (n &&= !t.altKey), n;
}
function Ve(e) {
	return {
		control: "ctrl",
		command: "mod",
		cmd: "mod",
		option: "alt",
		return: "enter"
	}[e.toLowerCase()] || e.toLowerCase();
}
function He(e) {
	if (e === Q || e === "") return () => !1;
	let t = e.includes("+") ? "+" : "-", n = e.split(t).map(Ve);
	return (e) => Be(n, e);
}
function Ue() {
	return Re() ? "mac" : ze() ? "windows" : "linux";
}
//#endregion
//#region src/core/hotkeys/hotkeys.ts
var Q = Symbol("NOT_SET"), We = {
	"cell.focusUp": {
		name: "Go to previous cell",
		group: "Navigation",
		key: "Mod-Shift-k"
	},
	"cell.focusDown": {
		name: "Go to next cell",
		group: "Navigation",
		key: "Mod-Shift-j"
	},
	"cell.moveUp": {
		name: "Move cell up",
		group: "Creation and Ordering",
		key: "Mod-Shift-9"
	},
	"cell.moveDown": {
		name: "Move cell down",
		group: "Creation and Ordering",
		key: "Mod-Shift-0"
	},
	"cell.moveLeft": {
		name: "Move left",
		group: "Creation and Ordering",
		key: "Mod-Shift-7"
	},
	"cell.moveRight": {
		name: "Move right",
		group: "Creation and Ordering",
		key: "Mod-Shift-8"
	},
	"cell.createAbove": {
		name: "New cell above",
		group: "Creation and Ordering",
		key: "Mod-Shift-o"
	},
	"cell.createBelow": {
		name: "New cell below",
		group: "Creation and Ordering",
		key: "Mod-Shift-p"
	},
	"cell.sendToTop": {
		name: "Send to top",
		group: "Creation and Ordering",
		key: "Mod-Shift-1"
	},
	"cell.sendToBottom": {
		name: "Send to bottom",
		group: "Creation and Ordering",
		key: "Mod-Shift-2"
	},
	"cell.addColumnBreakpoint": {
		name: "Add column breakpoint",
		group: "Creation and Ordering",
		key: "Mod-Shift-3"
	},
	"cell.run": {
		name: "Run",
		group: "Running Cells",
		key: "Mod-Enter",
		additionalKeywords: ["execute", "submit"]
	},
	"cell.runAndNewBelow": {
		name: "Run and new below",
		group: "Running Cells",
		key: "Shift-Enter"
	},
	"cell.runAndNewAbove": {
		name: "Run and new above",
		group: "Running Cells",
		key: "Mod-Shift-Enter"
	},
	"global.runAll": {
		name: "Re-run all cells",
		group: "Running Cells",
		key: Q
	},
	"cell.format": {
		name: "Format cell",
		group: "Editing",
		key: "Mod-b",
		additionalKeywords: ["lint"]
	},
	"cell.viewAsMarkdown": {
		name: "View as Markdown",
		group: "Editing",
		key: "Mod-Shift-m"
	},
	"cell.viewAsSQL": {
		name: "Toggle SQL",
		group: "Editing",
		key: {
			windows: "Alt-Shift-l",
			main: "Mod-Shift-l"
		}
	},
	"cell.complete": {
		name: "Code completion",
		group: "Editing",
		key: "Ctrl-Space"
	},
	"cell.signatureHelp": {
		name: "Signature help",
		group: "Editing",
		key: "Mod-Shift-Space"
	},
	"cell.undo": {
		name: "Undo",
		group: "Editing",
		key: "Mod-z"
	},
	"cell.redo": {
		name: "Redo",
		group: "Editing",
		key: {
			main: "Mod-Shift-z",
			windows: "Mod-y"
		}
	},
	"cell.findAndReplace": {
		name: "Find and Replace",
		group: "Editing",
		key: "Mod-f"
	},
	"cell.selectNextOccurrence": {
		name: "Add selection to next Find match",
		group: "Editing",
		key: "Mod-d"
	},
	"cell.fold": {
		name: "Fold region",
		group: "Editing",
		key: {
			main: "Mod-Alt-[",
			windows: "Mod-Shift-["
		}
	},
	"cell.unfold": {
		name: "Unfold region",
		group: "Editing",
		key: {
			main: "Mod-Alt-]",
			windows: "Mod-Shift-]"
		}
	},
	"cell.foldAll": {
		name: "Fold all regions",
		group: "Editing",
		key: "Ctrl-Alt-["
	},
	"cell.unfoldAll": {
		name: "Unfold all regions",
		group: "Editing",
		key: "Ctrl-Alt-]"
	},
	"cell.delete": {
		name: "Delete cell",
		group: "Editing",
		key: "Shift-Backspace",
		additionalKeywords: ["remove"]
	},
	"cell.hideCode": {
		name: "Hide cell code",
		group: "Editing",
		key: "Mod-h"
	},
	"cell.aiCompletion": {
		name: "AI completion",
		group: "Editing",
		key: "Mod-Shift-e"
	},
	"cell.cellActions": {
		name: "Open cell actions",
		group: "Editing",
		key: "Mod-p"
	},
	"cell.splitCell": {
		name: "Split cell",
		group: "Editing",
		key: "Mod-Shift-'"
	},
	"cell.toggleComment": {
		name: "Toggle comment",
		group: "Editing",
		key: "Mod-/"
	},
	"cell.toggleBlockComment": {
		name: "Toggle block comment",
		group: "Editing",
		key: "Alt-A"
	},
	"cell.renameSymbol": {
		name: "Rename symbol",
		group: "Editing",
		key: "F2"
	},
	"cell.copyLineUp": {
		name: "Copy line(s) up",
		group: "Editing",
		key: "Alt-Shift-ArrowUp"
	},
	"cell.copyLineDown": {
		name: "Copy line(s) down",
		group: "Editing",
		key: "Alt-Shift-ArrowDown"
	},
	"markdown.bold": {
		name: "Bold",
		group: "Markdown",
		key: "Mod-b"
	},
	"markdown.italic": {
		name: "Italic",
		group: "Markdown",
		key: "Mod-i"
	},
	"markdown.link": {
		name: "Convert to Link",
		group: "Markdown",
		key: "Mod-k"
	},
	"markdown.orderedList": {
		name: "Convert to Ordered list",
		group: "Markdown",
		key: "Mod-Shift-7"
	},
	"markdown.unorderedList": {
		name: "Convert to Unordered list",
		group: "Markdown",
		key: "Mod-Shift-8"
	},
	"markdown.blockquote": {
		name: "Convert to Blockquote",
		group: "Markdown",
		key: "Mod-Shift-9"
	},
	"markdown.code": {
		name: "Convert to Code",
		group: "Markdown",
		key: "Mod-Shift-0"
	},
	"global.hideCode": {
		name: "Toggle app view",
		group: "Other",
		key: "Mod-."
	},
	"global.foldCode": {
		name: "Fold all cells",
		group: "Editing",
		key: {
			main: "Ctrl-Cmd-l",
			windows: "Mod-Shift-l"
		}
	},
	"global.unfoldCode": {
		name: "Unfold all cells",
		group: "Editing",
		key: {
			main: "Ctrl-Cmd-;",
			windows: "Mod-Shift-:"
		}
	},
	"global.showHelp": {
		name: "Show keyboard shortcuts",
		group: "Other",
		key: "Mod-Shift-h"
	},
	"global.save": {
		name: "Save file",
		group: "Other",
		key: "Mod-s",
		additionalKeywords: ["write", "persist"]
	},
	"global.commandPalette": {
		name: "Show command palette",
		group: "Other",
		key: "Mod-k"
	},
	"global.runStale": {
		name: "Run all stale cells",
		group: "Running Cells",
		key: "Mod-Shift-r"
	},
	"global.interrupt": {
		name: "Stop (interrupt) execution",
		group: "Running Cells",
		key: "Mod-i"
	},
	"global.formatAll": {
		name: "Format all",
		group: "Editing",
		key: "Mod-Shift-b"
	},
	"global.toggleLanguage": {
		name: "Toggle language to markdown (if supported)",
		group: "Editing",
		key: "F4"
	},
	"global.toggleTerminal": {
		name: "Show integrated terminal",
		group: "Other",
		key: "Ctrl-`"
	},
	"global.togglePanel": {
		name: "Toggle developer panel",
		group: "Other",
		key: "Mod-j"
	},
	"global.showAllCode": {
		name: "Show all code",
		group: "Editing",
		key: Q,
		additionalKeywords: [
			"unhide",
			"hide",
			"reveal",
			"show source"
		]
	},
	"global.hideAllCode": {
		name: "Hide all code",
		group: "Editing",
		key: Q
	},
	"global.showAllMarkdownCode": {
		name: "Show all markdown code",
		group: "Editing",
		key: Q
	},
	"global.hideAllMarkdownCode": {
		name: "Hide all markdown code",
		group: "Editing",
		key: Q
	},
	"global.expandAllOutputs": {
		name: "Expand all outputs",
		group: "Editing",
		key: Q,
		additionalKeywords: ["show full output", "unclamp"]
	},
	"global.clampAllOutputs": {
		name: "Clamp all outputs",
		group: "Editing",
		key: Q,
		additionalKeywords: ["collapse outputs", "shrink outputs"]
	},
	"global.collapseAllSections": {
		name: "Collapse all sections",
		group: "Editing",
		key: "Mod-Shift-\\",
		additionalKeywords: ["fold", "headers"]
	},
	"global.expandAllSections": {
		name: "Expand all sections",
		group: "Editing",
		key: "Mod-Shift-/",
		additionalKeywords: ["unfold", "headers"]
	},
	"global.toggleMinimap": {
		name: "Toggle Minimap",
		group: "Other",
		key: "Mod-Shift-i"
	},
	"global.focusTop": {
		name: "Focus top",
		group: "Navigation",
		key: "Mod-Shift-f"
	},
	"global.focusBottom": {
		name: "Focus bottom",
		group: "Navigation",
		key: "Mod-Shift-g"
	},
	"global.toggleSidebar": {
		name: "Toggle helper panel",
		group: "Navigation",
		key: "Mod-Shift-s"
	},
	"cell.goToDefinition": {
		name: "Go to Definition",
		group: "Navigation",
		key: "F12"
	},
	"completion.moveDown": {
		name: "Move completion selection down",
		group: "Editing",
		key: "Ctrl-j"
	},
	"completion.moveUp": {
		name: "Move completion selection up",
		group: "Editing",
		key: "Ctrl-k"
	},
	"command.vimEnterCommandMode": {
		name: "Enter command mode (vim)",
		group: "Command",
		key: {
			main: "Mod-Escape",
			windows: "Shift-Escape"
		}
	},
	"command.createCellBefore": {
		name: "Create a cell before current cell",
		group: "Command",
		key: "a"
	},
	"command.createCellAfter": {
		name: "Create a cell after current cell",
		group: "Command",
		key: "b"
	},
	"command.createSqlCellAfter": {
		name: "Create a SQL cell after current cell",
		group: "Command",
		key: "q"
	},
	"command.copyCell": {
		name: "Copy cell",
		group: "Command",
		key: "c"
	},
	"command.cutCell": {
		name: "Cut cell",
		group: "Command",
		key: "x"
	},
	"command.pasteCell": {
		name: "Paste cell",
		group: "Command",
		key: "v"
	}
}, Ge = class e {
	mod;
	platform;
	static create(t) {
		return new e(We, { platform: t });
	}
	hotkeys;
	constructor(e, t = {}) {
		this.hotkeys = e, this.platform = t.platform ?? Ue(), this.mod = this.platform === "mac" ? "Cmd" : "Ctrl";
	}
	iterate() {
		return a.keys(this.hotkeys);
	}
	getHotkey(e) {
		let { name: t, key: n, additionalKeywords: r } = this.hotkeys[e];
		return typeof n == "string" ? {
			name: t,
			key: n.replace("Mod", this.mod),
			additionalKeywords: r
		} : n === Q ? {
			name: t,
			key: "",
			additionalKeywords: r
		} : {
			name: t,
			key: (n[this.platform] || n.main).replace("Mod", this.mod),
			additionalKeywords: r
		};
	}
	getHotkeyDisplay(e) {
		return this.hotkeys[e].name;
	}
	isEditable(e) {
		return this.hotkeys[e].editable !== !1;
	}
	getHotkeyGroups() {
		return a.groupBy(a.entries(this.hotkeys), ([, e]) => e.group, ([e]) => e);
	}
}, Ke = class extends Ge {
	overrides;
	constructor(e, t = {}) {
		super(We, t), this.overrides = e;
	}
	getHotkey(e) {
		let t = super.getHotkey(e), n = this.overrides[e];
		return {
			name: t.name,
			key: n ? Je(n) : t.key,
			additionalKeywords: t.additionalKeywords
		};
	}
}, qe = /^(cmd|ctrl|alt|shift|meta|mod)$/i;
function Je(e) {
	let t = e.split("-"), n = t[t.length - 1];
	return n.length > 1 && !qe.test(n) && (t[t.length - 1] = n.charAt(0).toUpperCase() + n.slice(1)), t.join("-");
}
//#endregion
//#region ../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var Ye = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Xe = r, Ze = (e, t) => (n) => {
	if (t?.variants == null) return Xe(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Ye(t) || Ye(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Xe(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, Qe = i(), $ = "active:shadow-none", $e = Ze(W("disabled:opacity-50 disabled:pointer-events-none", "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background", "forced-color-adjust-none forced-colors:border-[ButtonText] forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText] forced-colors:disabled:border-[GrayText] forced-colors:disabled:text-[GrayText]"), {
	variants: {
		variant: {
			default: W("bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs border border-primary", $),
			destructive: W("border shadow-xs", "bg-destructive text-destructive-foreground border-destructive-border hover:bg-destructive-hover", $),
			success: W("border shadow-xs", "bg-success text-success-foreground border-success-border hover:bg-success-hover", $),
			warn: W("border shadow-xs", "bg-action text-action-foreground border-action-border hover:bg-action-hover", $),
			action: W("bg-action text-action-foreground shadow-xs", "hover:bg-action-hover border border-action-border", $),
			outline: W("border border-slate-300 shadow-xs", "hover:bg-accent hover:text-accent-foreground", "hover:border-primary", "aria-selected:text-accent-foreground aria-selected:border-primary", $),
			secondary: W("bg-secondary text-secondary-foreground hover:bg-secondary/80", "border border-input shadow-xs", $),
			text: W("opacity-80 hover:opacity-100", "active:opacity-100"),
			ghost: W("border border-transparent", "hover:bg-accent hover:text-accent-foreground hover:shadow-xs", $, "active:text-accent-foreground"),
			link: "underline-offset-4 hover:underline text-link",
			linkDestructive: "underline-offset-4 hover:underline text-destructive underline-destructive",
			outlineDestructive: "border border-destructive text-destructive hover:bg-destructive/10"
		},
		size: {
			default: "h-10 py-2 px-4",
			xs: "h-7 px-2 rounded-md text-xs",
			sm: "h-9 px-3 rounded-md",
			lg: "h-11 px-8 rounded-md",
			icon: "h-6 w-6 mb-0"
		},
		disabled: { true: "opacity-50 pointer-events-none" }
	},
	defaultVariants: {
		variant: "default",
		size: "sm"
	}
}), et = p.forwardRef((e, t) => {
	let n = (0, m.c)(19), r, i, a, o, s, c;
	n[0] === e ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6]) : ({className: r, variant: c, size: o, asChild: s, keyboardShortcut: i, ...a} = e, n[0] = e, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c);
	let l = s !== void 0 && s, u = p.useRef(null), d;
	n[7] === Symbol.for("react.memo_cache_sentinel") ? (d = () => u.current, n[7] = d) : d = n[7], p.useImperativeHandle(t, d);
	let f;
	n[8] === i ? f = n[9] : (f = (e) => {
		!i || e.defaultPrevented || G.shouldIgnoreKeyboardEvent(e) || He(i)(e) && (e.preventDefault(), e.stopPropagation(), u?.current && !u.current.disabled && u.current.click());
	}, n[8] = i, n[9] = f), Le(document, "keydown", f);
	let h = l ? we : "button", g;
	n[10] !== r || n[11] !== a.disabled || n[12] !== o || n[13] !== c ? (g = W($e({
		variant: c,
		size: o,
		className: r,
		disabled: a.disabled
	}), r), n[10] = r, n[11] = a.disabled, n[12] = o, n[13] = c, n[14] = g) : g = n[14];
	let _;
	return n[15] !== h || n[16] !== a || n[17] !== g ? (_ = /* @__PURE__ */ (0, Qe.jsx)(h, {
		className: g,
		ref: u,
		...a
	}), n[15] = h, n[16] = a, n[17] = g, n[18] = _) : _ = n[18], _;
});
et.displayName = "Button";
//#endregion
export { o as _, Ke as a, Le as c, Ee as d, J as f, f as g, W as h, Q as i, we as l, G as m, $e as n, Re as o, Y as p, Ze as r, Ue as s, et as t, Ce as u, s as v };
