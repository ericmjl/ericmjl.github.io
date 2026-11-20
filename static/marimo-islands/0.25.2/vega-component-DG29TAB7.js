import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t, h as n, m as r, o as i } from "./button-CvjkwdSk.js";
import { t as a } from "./react-sHtZdjeP.js";
import { t as o } from "./compiler-runtime-CldRdSsv.js";
import { t as s } from "./tooltip-BO1REbqs.js";
import { S as c, a as l } from "./toDate-BNJf01u1.js";
import { t as u } from "./jsx-runtime-3BD1kT0s.js";
import { n as d } from "./error-banner-Da600cwz.js";
import { t as f } from "./debounce-C3jyATpc.js";
import { A as p, n as ee } from "./useTheme-CRnjkku0.js";
import { c as m } from "./arrays-CN1djC4k.js";
import { t as te } from "./objects-CzUgoMIF.js";
import { t as h } from "./useAsyncData-Deh5kszT.js";
import { a as ne, i as re, n as ie, t as g } from "./formats-BGh2thRc.js";
import { M as ae, n as oe } from "./vega-loader.browser-DNST6uVf.js";
import { t as se } from "./react-vega-BED0DjiB.js";
import { a as ce, n as _ } from "./loader-BQOfjTIJ.js";
import { t as le } from "./useDeepCompareMemoize-DXwzRINI.js";
import { t as ue } from "./semaphore-89jsoHtS.js";
import { t as de } from "./use-vega-container-remeasure-Bz4PZMtt.js";
//#region src/plugins/impl/vega/fix-relative-url.ts
var fe = /* @__PURE__ */ e(a(), 1), pe = o();
function me(e) {
	return e.data && "url" in e.data && (e.data.url = l(e.data.url).href), e;
}
//#endregion
//#region src/plugins/impl/vega/types.ts
var v = {
	arc: "arc",
	area: "area",
	bar: "bar",
	image: "image",
	line: "line",
	point: "point",
	rect: "rect",
	rule: "rule",
	text: "text",
	tick: "tick",
	trail: "trail",
	circle: "circle",
	square: "square",
	geoshape: "geoshape"
}, y = /* @__PURE__ */ new Set([
	"boxplot",
	"errorband",
	"errorbar"
]), b = {
	getMarkType(e) {
		let t = typeof e == "string" ? e : e.type;
		if (y.has(t)) throw Error("Not supported");
		return t;
	},
	isInteractive(e) {
		let t = typeof e == "string" ? e : e.type;
		return !y.has(t);
	},
	makeClickable(e) {
		let t = typeof e == "string" ? e : e.type;
		return t in v ? typeof e == "string" ? {
			type: e,
			cursor: "pointer",
			tooltip: !0
		} : {
			...e,
			type: t,
			cursor: "pointer",
			tooltip: !0
		} : e;
	},
	getOpacity(e) {
		return typeof e == "string" ? null : "opacity" in e && typeof e.opacity == "number" ? e.opacity : null;
	}
}, x = {
	point(e) {
		return e == null ? "select_point" : `select_point_${e}`;
	},
	interval(e) {
		return e == null ? "select_interval" : `select_interval_${e}`;
	},
	legendSelection(e) {
		return `legend_selection_${e}`;
	},
	binColoring(e) {
		return e == null ? "bin_coloring" : `bin_coloring_${e}`;
	},
	HIGHLIGHT: "highlight",
	PAN_ZOOM: "pan_zoom",
	hasPoint(e) {
		return e.some((e) => e.startsWith("select_point"));
	},
	hasInterval(e) {
		return e.some((e) => e.startsWith("select_interval"));
	},
	hasLegend(e) {
		return e.some((e) => e.startsWith("legend_selection"));
	},
	hasPanZoom(e) {
		return e.some((e) => e.startsWith("pan_zoom"));
	},
	isBinColoring(e) {
		return e.startsWith("bin_coloring");
	}
};
function S() {
	return i() ? "metaKey" : "ctrlKey";
}
var C = {
	highlight() {
		return {
			name: x.HIGHLIGHT,
			select: {
				type: "point",
				on: "mouseover"
			}
		};
	},
	interval(e, t) {
		let n = S();
		return {
			name: x.interval(t),
			select: {
				type: "interval",
				encodings: w(e),
				mark: {
					fill: "#669EFF",
					fillOpacity: .07,
					stroke: "#669EFF",
					strokeOpacity: .4
				},
				on: `[mousedown[!event.${n}], mouseup] > mousemove[!event.${n}]`,
				translate: `[mousedown[!event.${n}], mouseup] > mousemove[!event.${n}]`
			}
		};
	},
	point(e, t) {
		return {
			name: x.point(t),
			select: {
				type: "point",
				encodings: w(e),
				on: `click[!event.${S()}]`
			}
		};
	},
	binColoring(e) {
		return {
			name: x.binColoring(e),
			select: {
				type: "point",
				on: `click[!event.${S()}]`
			}
		};
	},
	legend(e) {
		return {
			name: x.legendSelection(e),
			select: {
				type: "point",
				fields: [e]
			},
			bind: "legend"
		};
	},
	panZoom() {
		let e = S();
		return {
			name: x.PAN_ZOOM,
			bind: "scales",
			select: {
				type: "interval",
				on: `[mousedown[event.${e}], window:mouseup] > window:mousemove!`,
				translate: `[mousedown[event.${e}], window:mouseup] > window:mousemove!`,
				zoom: `wheel![event.${e}]`
			}
		};
	}
};
function w(e) {
	switch (b.getMarkType(e.mark)) {
		case v.image:
		case v.trail: return;
		case v.area:
		case v.arc: return ["color"];
		case v.bar: {
			let t = E(e);
			return t === "horizontal" ? ["y"] : t === "vertical" ? ["x"] : void 0;
		}
		case v.circle:
		case v.geoshape:
		case v.line:
		case v.point:
		case v.rect:
		case v.rule:
		case v.square:
		case v.text:
		case v.tick: return ["x", "y"];
	}
}
function T(e) {
	if ("params" in e && e.params && e.params.length > 0) {
		let t = e.params.filter((e) => e != null && "select" in e && e.select !== void 0).map((e) => e.name);
		return m(t);
	}
	return "layer" in e ? m(e.layer.flatMap(T)) : "vconcat" in e ? m(e.vconcat.flatMap(T)) : "hconcat" in e ? m(e.hconcat.flatMap(T)) : [];
}
function E(e) {
	if (!e || !("mark" in e)) return;
	let t = e.encoding?.x, n = e.encoding?.y;
	if (t && "type" in t && t.type === "nominal") return "vertical";
	if (n && "type" in n && n.type === "nominal" || t && "aggregate" in t) return "horizontal";
	if (n && "aggregate" in n) return "vertical";
}
function D(e) {
	if (!e.encoding) return [];
	let t = [];
	for (let n of Object.values(e.encoding)) n && typeof n == "object" && "bin" in n && n.bin && "field" in n && typeof n.field == "string" && t.push(n.field);
	return t;
}
//#endregion
//#region src/plugins/impl/vega/encodings.ts
function O(e) {
	if (!e || !("encoding" in e)) return [];
	let { encoding: t } = e;
	return t ? Object.entries(t).flatMap((e) => {
		let [t, n] = e;
		return !n || !k.has(t) ? [] : "field" in n && typeof n.field == "string" ? [n.field] : "condition" in n && n.condition && typeof n.condition == "object" && "field" in n.condition && n.condition.field && typeof n.condition.field == "string" ? [n.condition.field] : [];
	}) : [];
}
var k = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"fillOpacity",
	"opacity",
	"shape",
	"size"
]);
function A(e, t, n, r) {
	let i = n.filter((e) => x.isBinColoring(e)), a = { and: (i.length > 0 ? i : n).map((e) => ({ param: e })) };
	switch (e) {
		case "opacity": {
			let e = b.getOpacity(r) || 1;
			return {
				...t,
				opacity: {
					condition: {
						test: a,
						value: e
					},
					value: e / 5
				}
			};
		}
		default: return t;
	}
}
//#endregion
//#region src/plugins/impl/vega/make-selectable.ts
function j(e) {
	if (!("select" in e) || !e.select) return JSON.stringify(e);
	let t = e.select;
	if (typeof t == "string") return JSON.stringify({
		type: t,
		bind: e.bind
	});
	let n = {
		type: t.type,
		encodings: "encodings" in t && t.encodings ? [...t.encodings].toSorted() : void 0,
		fields: "fields" in t && t.fields ? [...t.fields].toSorted() : void 0,
		bind: e.bind
	};
	return JSON.stringify(n);
}
function M(e) {
	let t = N(e);
	if (t.length === 0) return e;
	let n = P(t);
	return n.length === 0 ? e : {
		...I(F(e, new Set(n.map((e) => e.name))), n.map((e) => e.name)),
		params: [...e.params || [], ...n]
	};
}
function N(e) {
	let t = [];
	if ("vconcat" in e && Array.isArray(e.vconcat)) for (let n of e.vconcat) t.push(...N(n));
	else if ("hconcat" in e && Array.isArray(e.hconcat)) for (let n of e.hconcat) t.push(...N(n));
	else if ("layer" in e) return [];
	else "mark" in e && "params" in e && e.params && e.params.length > 0 && t.push({ params: e.params });
	return t;
}
function P(e) {
	if (e.length === 0) return [];
	let t = /* @__PURE__ */ new Map(), n = e.length;
	for (let { params: n } of e) {
		let e = /* @__PURE__ */ new Set();
		for (let r of n) {
			let n = j(r);
			e.has(n) || (e.add(n), t.has(n) || t.set(n, {
				count: 0,
				param: r
			}), t.get(n).count++);
		}
	}
	let r = [];
	for (let [, { count: e, param: i }] of t) e === n && r.push(i);
	return r;
}
function F(e, t) {
	if ("vconcat" in e && Array.isArray(e.vconcat)) return {
		...e,
		vconcat: e.vconcat.map((e) => F(e, t))
	};
	if ("hconcat" in e && Array.isArray(e.hconcat)) return {
		...e,
		hconcat: e.hconcat.map((e) => F(e, t))
	};
	if ("mark" in e && "params" in e && e.params) {
		let n = e.params, r = [];
		for (let e of n) {
			if (!e || typeof e != "object" || !("name" in e)) {
				r.push(e);
				continue;
			}
			t.has(e.name) || r.push(e);
		}
		if (r.length === 0) {
			let { params: t, ...n } = e;
			return n;
		}
		return {
			...e,
			params: r
		};
	}
	return e;
}
function I(e, t) {
	return "vconcat" in e && Array.isArray(e.vconcat) ? {
		...e,
		vconcat: e.vconcat.map((e) => I(e, t))
	} : "hconcat" in e && Array.isArray(e.hconcat) ? {
		...e,
		hconcat: e.hconcat.map((e) => I(e, t))
	} : "layer" in e ? e : "mark" in e && b.isInteractive(e.mark) ? {
		...e,
		mark: b.makeClickable(e.mark),
		encoding: A("opacity", e.encoding || {}, t, e.mark)
	} : e;
}
function he(e, t) {
	let { chartSelection: n = !0, fieldSelection: r = !0 } = t;
	if (!n && !r) return e;
	e.params?.some((e) => e.bind === "legend") && (r = !1);
	let i = e.params?.some((e) => !e.bind);
	i && (n = !1);
	let a = "vconcat" in e || "hconcat" in e;
	if (i && a) return e;
	if ("vconcat" in e) {
		let t = e.vconcat.map((e) => "mark" in e ? he(e, {
			chartSelection: n,
			fieldSelection: r
		}) : e);
		return M({
			...e,
			vconcat: t
		});
	}
	if ("hconcat" in e) {
		let t = e.hconcat.map((e) => "mark" in e ? he(e, {
			chartSelection: n,
			fieldSelection: r
		}) : e);
		return M({
			...e,
			hconcat: t
		});
	}
	if ("layer" in e) {
		let t = e.params && e.params.length > 0, i = r !== !1 && !t, a = [];
		if (i) {
			let t = e.layer.flatMap((e) => "mark" in e ? O(e) : []);
			a = [...new Set(t)], Array.isArray(r) && (a = a.filter((e) => r.includes(e)));
		}
		let o = e.layer.map((e, t) => {
			if (!("mark" in e)) return e;
			let r = e;
			if (t === 0 && a.length > 0) {
				let e = a.map((e) => C.legend(e));
				r = {
					...r,
					params: [...r.params || [], ...e]
				};
			}
			return r = R(r, n, t), r = B(r), t === 0 && (r = z(r)), r;
		});
		return {
			...e,
			layer: o
		};
	}
	if (!("mark" in e) || !b.isInteractive(e.mark)) return e;
	let o = e;
	return o = L(o, r), o = R(o, n, void 0), o = B(o), o = z(o), o;
}
function L(e, t) {
	if (t === !1) return e;
	let n = O(e);
	Array.isArray(t) && (n = n.filter((e) => t.includes(e)));
	let r = n.map((e) => C.legend(e)), i = [...e.params || [], ...r];
	return {
		...e,
		params: i
	};
}
function R(e, t, n) {
	if (t === !1) return e;
	let r;
	try {
		r = b.getMarkType(e.mark);
	} catch {
		return e;
	}
	if (r === "geoshape") return e;
	let i = D(e), a = t === !0 ? i.length > 0 ? ["point"] : V(r) : [t];
	if (!a || a.length === 0) return e;
	let o = a.map((t) => t === "interval" ? C.interval(e, n) : C.point(e, n)), s = [...e.params || [], ...o];
	return i.length > 0 && a.includes("point") && s.push(C.binColoring(n)), {
		...e,
		params: s
	};
}
function z(e) {
	let t;
	try {
		t = b.getMarkType(e.mark);
	} catch {}
	if (t === "geoshape") return e;
	let n = e.params || [];
	return n.some((e) => e.bind === "scales") ? e : {
		...e,
		params: [...n, C.panZoom()]
	};
}
function B(e) {
	let t = "encoding" in e ? e.encoding : void 0, n = e.params || [], r = n.map((e) => e.name);
	return n.length === 0 || !b.isInteractive(e.mark) ? e : {
		...e,
		mark: b.makeClickable(e.mark),
		encoding: A("opacity", t || {}, r, e.mark)
	};
}
function V(e) {
	switch (e) {
		case "arc":
		case "area": return ["point"];
		case "text":
		case "bar": return ["point", "interval"];
		case "line": return;
		default: return ["point", "interval"];
	}
}
//#endregion
//#region src/plugins/impl/vega/resolve-data.ts
var H = 5;
async function U(e) {
	if (!e) return e;
	let t = "datasets" in e ? { ...e.datasets } : {}, n = new ue(H), r = async (e) => {
		if (!e) return e;
		if ("layer" in e) {
			let t = await Promise.all(e.layer.map(r));
			e = {
				...e,
				layer: t
			};
		}
		if ("hconcat" in e) {
			let t = await Promise.all(e.hconcat.map(r));
			e = {
				...e,
				hconcat: t
			};
		}
		if ("vconcat" in e) {
			let t = await Promise.all(e.vconcat.map(r));
			e = {
				...e,
				vconcat: t
			};
		}
		if ("spec" in e && (e = {
			...e,
			spec: await r(e.spec)
		}), !e.data || !("url" in e.data)) return e;
		let i;
		try {
			i = l(e.data.url);
		} catch {
			return e;
		}
		let a = e.data.format, o = await n.run(() => _(i.href, a));
		return t[i.pathname] = o, {
			...e,
			data: { name: i.pathname }
		};
	}, i = await r(e);
	return Object.keys(t).length === 0 ? i : {
		...i,
		datasets: t
	};
}
//#endregion
//#region src/plugins/impl/vega/vega-component.tsx
var W = u();
oe("arrow", g);
var G = (e) => {
	let t = (0, pe.c)(12), { value: n, setValue: r, chartSelection: i, fieldSelection: a, spec: o, embedOptions: s } = e, c, l;
	t[0] === o ? (c = t[1], l = t[2]) : (c = async () => U(o), l = [o], t[0] = o, t[1] = c, t[2] = l);
	let { data: u, error: f } = h(c, l);
	if (f) {
		let e;
		return t[3] === f ? e = t[4] : (e = /* @__PURE__ */ (0, W.jsx)(d, { error: f }), t[3] = f, t[4] = e), e;
	}
	if (!u) return null;
	let p;
	return t[5] !== i || t[6] !== s || t[7] !== a || t[8] !== u || t[9] !== r || t[10] !== n ? (p = /* @__PURE__ */ (0, W.jsx)(K, {
		value: n,
		setValue: r,
		chartSelection: i,
		fieldSelection: a,
		spec: u,
		embedOptions: s
	}), t[5] = i, t[6] = s, t[7] = a, t[8] = u, t[9] = r, t[10] = n, t[11] = p) : p = t[11], p;
}, K = (e) => {
	let a = (0, pe.c)(50), { value: o, setValue: l, chartSelection: u, fieldSelection: d, spec: m, embedOptions: h } = e, { theme: ne } = ee(), g = (0, fe.useRef)(null), oe = (0, fe.useRef)(void 0), [_, ue] = (0, fe.useState)(), v;
	bb0: {
		if (h && "actions" in h) {
			v = h.actions;
			break bb0;
		}
		let e;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
			source: !1,
			compiled: !1
		}, a[0] = e) : e = a[0], v = e;
	}
	let y = v, b = le(m), S;
	a[1] !== u || a[2] !== d || a[3] !== b ? (S = he(me(b), {
		chartSelection: u,
		fieldSelection: d
	}), a[1] = u, a[2] = d, a[3] = b, a[4] = S) : S = a[4];
	let C = S, w;
	a[5] === C ? w = a[6] : (w = T(C), a[5] = C, a[6] = w);
	let E = w, D;
	a[7] !== l || a[8] !== o ? (D = (e) => {
		l({
			...o,
			...e
		});
	}, a[7] = l, a[8] = o, a[9] = D) : D = a[9];
	let O = p(D), k;
	a[10] === O ? k = a[11] : (k = f((e, n) => {
		t.debug("[Vega signal]", e, n);
		let r = te.mapValues(n, _e);
		r = te.mapValues(r, ge), O({ [e]: r });
	}, 100), a[10] = O, a[11] = k);
	let A = k, j = le(E), M;
	if (a[12] !== A || a[13] !== j) {
		let e;
		a[15] === A ? e = a[16] : (e = (e, t) => (x.PAN_ZOOM === t || x.isBinColoring(t) || e.push({
			signalName: t,
			handler: (e, t) => A(e, t)
		}), e), a[15] = A, a[16] = e), M = j.reduce(e, []), a[12] = A, a[13] = j, a[14] = M;
	} else M = a[14];
	let N = M, P;
	a[17] === C ? P = a[18] : (P = (e) => {
		t.error(e), t.debug(C), ue(e);
	}, a[17] = C, a[18] = P);
	let F = p(P), I;
	a[19] === Symbol.for("react.memo_cache_sentinel") ? (I = (e) => {
		t.debug("[Vega view] created", e), oe.current = e, ue(void 0);
	}, a[19] = I) : I = a[19];
	let L = p(I), R;
	a[20] === E ? R = a[21] : (R = () => {
		let e = [];
		if (x.hasPoint(E) && e.push(["Point selection", "click to select a point; hold shift for multi-select"]), x.hasInterval(E) && e.push(["Interval selection", "click and drag to select an interval"]), x.hasLegend(E) && e.push(["Legend selection", "click to select a legend item; hold shift for multi-select"]), x.hasPanZoom(E)) {
			let t = i() ? "⌘" : "ctrl";
			e.push(["Pan", `hold the ${t} key and drag`], ["Zoom", `hold the ${t} key and scroll`]);
		}
		return e.length === 0 ? null : /* @__PURE__ */ (0, W.jsx)(s, {
			delayDuration: 300,
			side: "left",
			content: /* @__PURE__ */ (0, W.jsx)("div", {
				className: "text-xs flex flex-col",
				children: e.map(ve)
			}),
			children: /* @__PURE__ */ (0, W.jsx)(c, { className: "absolute bottom-1 right-0 m-2 h-4 w-4 cursor-help text-muted-foreground hover:text-foreground" })
		});
	}, a[20] = E, a[21] = R);
	let z = R, B = ne === "dark" ? "dark" : void 0, V;
	a[22] !== y || a[23] !== B ? (V = {
		theme: B,
		actions: y,
		mode: "vega-lite",
		tooltip: ce.call,
		renderer: "canvas"
	}, a[22] = y, a[23] = B, a[24] = V) : V = a[24];
	let H;
	a[25] !== F || a[26] !== L || a[27] !== C || a[28] !== V ? (H = {
		ref: g,
		spec: C,
		options: V,
		onError: F,
		onEmbed: L
	}, a[25] = F, a[26] = L, a[27] = C, a[28] = V, a[29] = H) : H = a[29];
	let U = se(H), G;
	a[30] === C ? G = a[31] : (G = ae(C), a[30] = C, a[31] = G);
	let K = G;
	de(g, K === "container");
	let q, J;
	a[32] !== U || a[33] !== N ? (q = () => (N.forEach((e) => {
		let { signalName: n, handler: r } = e;
		try {
			U?.view.addSignalListener(n, r);
		} catch (e) {
			let n = e;
			t.error(n);
		}
	}), () => {
		N.forEach((e) => {
			let { signalName: n, handler: r } = e;
			try {
				U?.view.removeSignalListener(n, r);
			} catch (e) {
				let n = e;
				t.error(n);
			}
		});
	}), J = [U, N], a[32] = U, a[33] = N, a[34] = q, a[35] = J) : (q = a[34], J = a[35]), (0, fe.useEffect)(q, J);
	let Y;
	a[36] === _ ? Y = a[37] : (Y = _ && /* @__PURE__ */ (0, W.jsxs)(ie, {
		variant: "destructive",
		children: [/* @__PURE__ */ (0, W.jsx)(re, { children: _.message }), /* @__PURE__ */ (0, W.jsx)("div", {
			className: "text-md",
			children: _.stack
		})]
	}), a[36] = _, a[37] = Y);
	let X, ye;
	a[38] === Symbol.for("react.memo_cache_sentinel") ? (X = n("relative"), ye = r.stopPropagation(), a[38] = X, a[39] = ye) : (X = a[38], ye = a[39]);
	let Z;
	a[40] === K ? Z = a[41] : (Z = /* @__PURE__ */ (0, W.jsx)("div", {
		ref: g,
		"data-container-width": K
	}), a[40] = K, a[41] = Z);
	let Q;
	a[42] === z ? Q = a[43] : (Q = z(), a[42] = z, a[43] = Q);
	let $;
	a[44] !== Z || a[45] !== Q ? ($ = /* @__PURE__ */ (0, W.jsxs)("div", {
		className: X,
		onPointerDown: ye,
		children: [Z, Q]
	}), a[44] = Z, a[45] = Q, a[46] = $) : $ = a[46];
	let be;
	return a[47] !== Y || a[48] !== $ ? (be = /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [Y, $] }), a[47] = Y, a[48] = $, a[49] = be) : be = a[49], be;
};
function ge(e) {
	return e instanceof Set ? [...e] : e;
}
function _e(e) {
	return Array.isArray(e) ? e.map((e) => e instanceof Date && ne(e) ? new Date(e).getTime() : e) : e;
}
function ve(e, t) {
	return /* @__PURE__ */ (0, W.jsxs)("div", { children: [
		/* @__PURE__ */ (0, W.jsxs)("span", {
			className: "font-bold tracking-wide",
			children: [e[0], ":"]
		}),
		" ",
		e[1]
	] }, t);
}
//#endregion
export { G as default };
