import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { d as t, h as n, p as r } from "./button-CvjkwdSk.js";
import { t as i } from "./react-sHtZdjeP.js";
import { t as a } from "./compiler-runtime-CldRdSsv.js";
import { t as o } from "./react-dom-DUmH0GXv.js";
import { t as s } from "./jsx-runtime-3BD1kT0s.js";
import { Ct as c, Q as l, St as u, X as d, Y as f, _t as p, bt as m, ft as h, ht as g, vt as _, wt as v, xt as y, yt as b } from "./use-restore-focus-BEM7sFWl.js";
//#region ../node_modules/.pnpm/lucide-react@0.577.0_react@19.3.0/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var x = /* @__PURE__ */ e(i()), S = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), C = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), w = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), T = (e) => {
	let t = w(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, E = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, D = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, O = (0, x.forwardRef)(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => (0, x.createElement)("svg", {
	ref: c,
	...E,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: r ? Number(n) * 24 / Number(t) : n,
	className: S("lucide", i),
	...!a && !D(s) && { "aria-hidden": "true" },
	...s
}, [...o.map(([e, t]) => (0, x.createElement)(e, t)), ...Array.isArray(a) ? a : [a]])), k = (e, t) => {
	let n = (0, x.forwardRef)(({ className: n, ...r }, i) => (0, x.createElement)(O, {
		ref: i,
		iconNode: t,
		className: S(`lucide-${C(T(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = T(e), n;
}, A = /* @__PURE__ */ e(o(), 1), j = s(), M = Object.defineProperty, N = (e, t) => M(e, "name", {
	value: t,
	configurable: !0
}), P = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), F = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ N(function(e, t) {
	return /* @__PURE__ */ (0, j.jsx)(v.span, {
		...e,
		ref: t,
		style: {
			...P,
			...e.style
		}
	});
}, "VisuallyHidden")), ee = F, te = Object.defineProperty, ne = (e, t) => te(e, "name", {
	value: t,
	configurable: !0
});
function re(e) {
	let [t, n] = x.useState(void 0);
	return y(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		}
		n(void 0);
	}, [e]), t;
}
ne(re, "useSize");
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ie = [
	"top",
	"right",
	"bottom",
	"left"
], I = Math.min, L = Math.max, R = Math.round, z = Math.floor, B = (e) => ({
	x: e,
	y: e
}), ae = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oe = {
	start: "end",
	end: "start"
};
function se(e, t, n) {
	return L(e, I(t, n));
}
function V(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function H(e) {
	return e.split("-")[0];
}
function ce(e) {
	return e.split("-")[1];
}
function le(e) {
	return e === "x" ? "y" : "x";
}
function ue(e) {
	return e === "y" ? "height" : "width";
}
var de = /*#__PURE__*/ new Set(["top", "bottom"]);
function U(e) {
	return de.has(H(e)) ? "y" : "x";
}
function fe(e) {
	return le(U(e));
}
function pe(e, t, n) {
	n === void 0 && (n = !1);
	let r = ce(e), i = fe(e), a = ue(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Se(o)), [o, Se(o)];
}
function me(e) {
	let t = Se(e);
	return [
		he(e),
		t,
		he(t)
	];
}
function he(e) {
	return e.replace(/start|end/g, (e) => oe[e]);
}
var ge = ["left", "right"], _e = ["right", "left"], ve = ["top", "bottom"], ye = ["bottom", "top"];
function be(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? _e : ge : t ? ge : _e;
		case "left":
		case "right": return t ? ve : ye;
		default: return [];
	}
}
function xe(e, t, n, r) {
	let i = ce(e), a = be(H(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(he)))), a;
}
function Se(e) {
	return e.replace(/left|right|bottom|top/g, (e) => ae[e]);
}
function Ce(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function we(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ce(e);
}
function Te(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+core@1.7.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Ee(e, t, n) {
	let { reference: r, floating: i } = e, a = U(t), o = fe(t), s = ue(o), c = H(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (ce(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end": p[o] += f * (n && l ? -1 : 1);
	}
	return p;
}
var De = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ee(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = Ee(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function Oe(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = V(t, e), p = we(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Te(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Te(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var ke = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = V(e, t) || {};
		if (l == null) return {};
		let d = we(u), f = {
			x: n,
			y: r
		}, p = fe(i), m = ue(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = I(d[_], T), D = I(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = se(O, A, k), M = !c.arrow && ce(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), Ae = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = V(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = H(r), _ = U(o), v = H(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Se(o)] : me(o)), x = p !== "none";
			!d && x && b.push(...xe(o, m, p, y));
			let S = [o, ...b], C = await Oe(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = pe(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === U(t) || T.every((e) => e.overflows[0] > 0 && U(e.placement) === _))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = U(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function je(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Me(e) {
	return ie.some((t) => e[t] >= 0);
}
var Ne = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n } = t, { strategy: r = "referenceHidden", ...i } = V(e, t);
			switch (r) {
				case "referenceHidden": {
					let e = je(await Oe(t, {
						...i,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Me(e)
					} };
				}
				case "escaped": {
					let e = je(await Oe(t, {
						...i,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Me(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Pe = /*#__PURE__*/ new Set(["left", "top"]);
async function Fe(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = H(n), s = ce(n), c = U(n) === "y", l = Pe.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = V(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Ie = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Fe(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Le = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = V(e, t), l = {
				x: n,
				y: r
			}, u = await Oe(t, c), d = U(H(i)), f = le(d), p = l[f], m = l[d];
			if (a) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = p + u[e], r = p - u[t];
				p = se(n, p, r);
			}
			if (o) {
				let e = d === "y" ? "top" : "left", t = d === "y" ? "bottom" : "right", n = m + u[e], r = m - u[t];
				m = se(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
}, Re = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = V(e, t), u = {
				x: n,
				y: r
			}, d = U(i), f = le(d), p = u[f], m = u[d], h = V(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Pe.has(H(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ze = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = V(e, t), u = await Oe(t, l), d = H(i), f = ce(i), p = U(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = I(h - u[g], v), x = I(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = L(u.left, 0), t = L(u.right, 0), n = L(u.top, 0), r = L(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : L(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : L(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Be() {
	return typeof window < "u";
}
function W(e) {
	return Ve(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function G(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
	return ((Ve(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Ve(e) {
	return Be() ? e instanceof Node || e instanceof G(e).Node : !1;
}
function q(e) {
	return Be() ? e instanceof Element || e instanceof G(e).Element : !1;
}
function J(e) {
	return Be() ? e instanceof HTMLElement || e instanceof G(e).HTMLElement : !1;
}
function He(e) {
	return !Be() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof G(e).ShadowRoot;
}
var Ue = /*#__PURE__*/ new Set(["inline", "contents"]);
function We(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Y(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ue.has(i);
}
var Ge = /*#__PURE__*/ new Set([
	"table",
	"td",
	"th"
]);
function Ke(e) {
	return Ge.has(W(e));
}
var qe = [":popover-open", ":modal"];
function Je(e) {
	return qe.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var Ye = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], Xe = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], Ze = [
	"paint",
	"layout",
	"strict",
	"content"
];
function Qe(e) {
	let t = et(), n = q(e) ? Y(e) : e;
	return Ye.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Xe.some((e) => (n.willChange || "").includes(e)) || Ze.some((e) => (n.contain || "").includes(e));
}
function $e(e) {
	let t = X(e);
	for (; J(t) && !nt(t);) {
		if (Qe(t)) return t;
		if (Je(t)) return null;
		t = X(t);
	}
	return null;
}
function et() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var tt = /*#__PURE__*/ new Set([
	"html",
	"body",
	"#document"
]);
function nt(e) {
	return tt.has(W(e));
}
function Y(e) {
	return G(e).getComputedStyle(e);
}
function rt(e) {
	return q(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function X(e) {
	if (W(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || He(e) && e.host || K(e);
	return He(t) ? t.host : t;
}
function it(e) {
	let t = X(e);
	return nt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : J(t) && We(t) ? t : it(t);
}
function at(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = it(e), i = r === e.ownerDocument?.body, a = G(r);
	if (i) {
		let e = ot(a);
		return t.concat(a, a.visualViewport || [], We(r) ? r : [], e && n ? at(e) : []);
	}
	return t.concat(r, at(r, [], n));
}
function ot(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../node_modules/.pnpm/@floating-ui+dom@1.7.2/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function st(e) {
	let t = Y(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = J(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = R(n) !== a || R(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ct(e) {
	return q(e) ? e : e.contextElement;
}
function lt(e) {
	let t = ct(e);
	if (!J(t)) return B(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = st(t), o = (a ? R(n.width) : n.width) / r, s = (a ? R(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ut = /*#__PURE__*/ B(0);
function dt(e) {
	let t = G(e);
	return !et() || !t.visualViewport ? ut : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function ft(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== G(e) ? !1 : t;
}
function Z(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ct(e), o = B(1);
	t && (r ? q(r) && (o = lt(r)) : o = lt(e));
	let s = ft(a, n, r) ? dt(a) : B(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = G(a), t = r && q(r) ? G(r) : r, n = e, i = ot(n);
		for (; i && r && t !== n;) {
			let e = lt(i), t = i.getBoundingClientRect(), r = Y(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = G(i), i = ot(n);
		}
	}
	return Te({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function pt(e, t) {
	let n = rt(e).scrollLeft;
	return t ? t.left + n : Z(K(e)).left + n;
}
function mt(e, t, n) {
	n === void 0 && (n = !1);
	let r = e.getBoundingClientRect();
	return {
		x: r.left + t.scrollLeft - (n ? 0 : pt(e, r)),
		y: r.top + t.scrollTop
	};
}
function ht(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = K(r), s = t ? Je(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = B(1), u = B(0), d = J(r);
	if ((d || !d && !a) && ((W(r) !== "body" || We(o)) && (c = rt(r)), J(r))) {
		let e = Z(r);
		l = lt(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? mt(o, c, !0) : B(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function gt(e) {
	return Array.from(e.getClientRects());
}
function _t(e) {
	let t = K(e), n = rt(e), r = e.ownerDocument.body, i = L(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = L(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + pt(e), s = -n.scrollTop;
	return Y(r).direction === "rtl" && (o += L(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
function vt(e, t) {
	let n = G(e), r = K(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = et();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var yt = /*#__PURE__*/ new Set(["absolute", "fixed"]);
function bt(e, t) {
	let n = Z(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = J(e) ? lt(e) : B(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function xt(e, t, n) {
	let r;
	if (t === "viewport") r = vt(e, n);
	else if (t === "document") r = _t(K(e));
	else if (q(t)) r = bt(t, n);
	else {
		let n = dt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Te(r);
}
function St(e, t) {
	let n = X(e);
	return n === t || !q(n) || nt(n) ? !1 : Y(n).position === "fixed" || St(n, t);
}
function Ct(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = at(e, [], !1).filter((e) => q(e) && W(e) !== "body"), i = null, a = Y(e).position === "fixed", o = a ? X(e) : e;
	for (; q(o) && !nt(o);) {
		let t = Y(o), n = Qe(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && yt.has(i.position) || We(o) && !n && St(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = X(o);
	}
	return t.set(e, r), r;
}
function wt(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Je(t) ? [] : Ct(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = xt(t, n, i);
		return e.top = L(r.top, e.top), e.right = I(r.right, e.right), e.bottom = I(r.bottom, e.bottom), e.left = L(r.left, e.left), e;
	}, xt(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Tt(e) {
	let { width: t, height: n } = st(e);
	return {
		width: t,
		height: n
	};
}
function Et(e, t, n) {
	let r = J(t), i = K(t), a = n === "fixed", o = Z(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = B(0);
	function l() {
		c.x = pt(i);
	}
	if (r || !r && !a) {
		if ((W(t) !== "body" || We(i)) && (s = rt(t)), r) {
			let e = Z(t, !0, a, t);
			c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
		} else i && l();
	}
	a && !r && i && l();
	let u = i && !r && !a ? mt(i, s) : B(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Dt(e) {
	return Y(e).position === "static";
}
function Ot(e, t) {
	if (!J(e) || Y(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return K(e) === n && (n = n.ownerDocument.body), n;
}
function kt(e, t) {
	let n = G(e);
	if (Je(e)) return n;
	if (!J(e)) {
		let t = X(e);
		for (; t && !nt(t);) {
			if (q(t) && !Dt(t)) return t;
			t = X(t);
		}
		return n;
	}
	let r = Ot(e, t);
	for (; r && Ke(r) && Dt(r);) r = Ot(r, t);
	return r && nt(r) && Dt(r) && !Qe(r) ? n : r || $e(e) || n;
}
var At = async function(e) {
	let t = this.getOffsetParent || kt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Et(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function jt(e) {
	return Y(e).direction === "rtl";
}
var Mt = {
	convertOffsetParentRelativeRectToViewportRelativeRect: ht,
	getDocumentElement: K,
	getClippingRect: wt,
	getOffsetParent: kt,
	getElementRects: At,
	getClientRects: gt,
	getDimensions: Tt,
	getScale: lt,
	isElement: q,
	isRTL: jt
};
function Nt(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pt(e, t) {
	let n = null, r, i = K(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = z(d), h = z(i.clientWidth - (u + f)), g = z(i.clientHeight - (d + p)), _ = z(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: L(0, I(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Nt(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Ft(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ct(e), u = i || a ? [...l ? at(l) : [], ...at(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Pt(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? Z(e) : null;
	c && g();
	function g() {
		let t = Z(e);
		h && !Nt(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var It = Ie, Lt = Le, Rt = Ae, zt = ze, Bt = Ne, Vt = ke, Ht = Re, Ut = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Mt,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return De(e, t, {
		...i,
		platform: a
	});
}, Wt = typeof document < "u" ? x.useLayoutEffect : function() {};
function Gt(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Gt(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Gt(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Kt(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qt(e, t) {
	let n = Kt(e);
	return Math.round(t * n) / n;
}
function Jt(e) {
	let t = x.useRef(e);
	return Wt(() => {
		t.current = e;
	}), t;
}
function Yt(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = x.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = x.useState(r);
	Gt(f, r) || p(r);
	let [m, h] = x.useState(null), [g, _] = x.useState(null), v = x.useCallback((e) => {
		e !== C.current && (C.current = e, h(e));
	}, []), y = x.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), b = a || m, S = o || g, C = x.useRef(null), w = x.useRef(null), T = x.useRef(u), E = c != null, D = Jt(c), O = Jt(i), k = Jt(l), j = x.useCallback(() => {
		if (!C.current || !w.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		O.current && (e.platform = O.current), Ut(C.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: k.current !== !1
			};
			M.current && !Gt(T.current, t) && (T.current = t, A.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		O,
		k
	]);
	Wt(() => {
		l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let M = x.useRef(!1);
	Wt(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Wt(() => {
		if (b && (C.current = b), S && (w.current = S), b && S) {
			if (D.current) return D.current(b, S, j);
			j();
		}
	}, [
		b,
		S,
		j,
		D,
		E
	]);
	let N = x.useMemo(() => ({
		reference: C,
		floating: w,
		setReference: v,
		setFloating: y
	}), [v, y]), P = x.useMemo(() => ({
		reference: b,
		floating: S
	}), [b, S]), F = x.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = qt(P.floating, u.x), r = qt(P.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Kt(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		P.floating,
		u.x,
		u.y
	]);
	return x.useMemo(() => ({
		...u,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		u,
		j,
		N,
		P,
		F
	]);
}
var Xt = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Vt({
				element: r.current,
				padding: i
			}).fn(n) : r ? Vt({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Zt = (e, t) => ({
	...It(e),
	options: [e, t]
}), Qt = (e, t) => ({
	...Lt(e),
	options: [e, t]
}), $t = (e, t) => ({
	...Ht(e),
	options: [e, t]
}), en = (e, t) => ({
	...Rt(e),
	options: [e, t]
}), tn = (e, t) => ({
	...zt(e),
	options: [e, t]
}), nn = (e, t) => ({
	...Bt(e),
	options: [e, t]
}), rn = (e, t) => ({
	...Xt(e),
	options: [e, t]
}), an = Object.defineProperty, Q = (e, t) => an(e, "name", {
	value: t,
	configurable: !0
}), on = "Popper", [sn, cn] = c(on), [ln, un] = sn(on), dn = /* @__PURE__ */ Q((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = x.useState(null), [a, o] = x.useState(void 0);
	return /* @__PURE__ */ (0, j.jsx)(ln, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), fn = "PopperAnchor", pn = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Q(function(e, t) {
	let { __scopePopper: n, virtualRef: i, ...a } = e, o = un(fn, n), s = x.useRef(null), c = o.onAnchorChange, l = x.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c]), u = r(t, l), d = x.useRef(null);
	x.useEffect(() => {
		if (!i) return;
		let e = d.current;
		d.current = i.current, e !== d.current && c(d.current);
	});
	let f = o.placementState && bn(o.placementState), p = f?.[0], m = f?.[1];
	return i ? null : /* @__PURE__ */ (0, j.jsx)(v.div, {
		"data-radix-popper-side": p,
		"data-radix-popper-align": m,
		...a,
		ref: u
	});
}, "PopperAnchor")), mn = "PopperContent", [hn, gn] = sn(mn), _n = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ Q(function(e, t) {
	let { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: g, ..._ } = e, b = un(mn, n), [S, C] = x.useState(null), w = r(t, C), [T, E] = x.useState(null), D = re(T), O = D?.width ?? 0, k = D?.height ?? 0, A = i + (o === "center" ? "" : "-" + o), M = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, N = Array.isArray(u) ? u : [u], P = N.length > 0, F = {
		padding: M,
		boundary: N.filter(vn),
		altBoundary: P
	}, { refs: ee, floatingStyles: te, placement: ne, isPositioned: ie, middlewareData: I } = Yt({
		strategy: "fixed",
		placement: A,
		whileElementsMounted: /* @__PURE__ */ Q((...e) => Ft(...e, { animationFrame: h === "always" }), "whileElementsMounted"),
		elements: { reference: b.anchor },
		middleware: [
			Zt({
				mainAxis: a + k,
				alignmentAxis: s
			}),
			l && Qt({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? $t() : void 0,
				...F
			}),
			l && en({ ...F }),
			tn({
				...F,
				apply: /* @__PURE__ */ Q(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			T && rn({
				element: T,
				padding: c
			}),
			yn({
				arrowWidth: O,
				arrowHeight: k
			}),
			m && nn({
				strategy: "referenceHidden",
				...F,
				boundary: P ? F.boundary : void 0
			})
		]
	}), L = b.setPlacementState;
	y(() => (L(ne), () => {
		L(void 0);
	}), [ne, L]);
	let [R, z] = bn(ne), B = p(g);
	y(() => {
		ie && B?.();
	}, [ie, B]);
	let ae = I.arrow?.x, oe = I.arrow?.y, se = I.arrow?.centerOffset !== 0, [V, H] = x.useState();
	return y(() => {
		S && H(window.getComputedStyle(S).zIndex);
	}, [S]), /* @__PURE__ */ (0, j.jsx)("div", {
		ref: ee.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...te,
			transform: ie ? te.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: V,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, j.jsx)(hn, {
			scope: n,
			placedSide: R,
			placedAlign: z,
			onArrowChange: E,
			arrowX: ae,
			arrowY: oe,
			shouldHideArrow: se,
			children: /* @__PURE__ */ (0, j.jsx)(v.div, {
				"data-side": R,
				"data-align": z,
				..._,
				ref: w,
				style: {
					..._.style,
					animation: ie ? _.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function vn(e) {
	return e !== null;
}
Q(vn, "isNotNull");
var yn = /* @__PURE__ */ Q((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = bn(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function bn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Q(bn, "getSideAndAlignFromPlacement");
var xn = dn, Sn = pn, Cn = _n, wn = Object.defineProperty, $ = (e, t) => wn(e, "name", {
	value: t,
	configurable: !0
}), [Tn, En] = c("Tooltip", [cn]), Dn = cn(), On = "TooltipProvider", kn = 700, An = "tooltip.open", [jn, Mn] = Tn(On), Nn = /* @__PURE__ */ $((e) => {
	let { __scopeTooltip: t, delayDuration: n = kn, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = x.useRef(!0), s = x.useRef(!1), c = x.useRef(0);
	return x.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, j.jsx)(jn, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: x.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), o.current = !1);
		}, [r]),
		onClose: x.useCallback(() => {
			r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r));
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: x.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
}, "TooltipProvider"), Pn = "Tooltip", [Fn, In] = Tn(Pn), Ln = /* @__PURE__ */ $((e) => {
	let { __scopeTooltip: t, children: n, open: r, defaultOpen: i, onOpenChange: a, disableHoverableContent: o, delayDuration: s } = e, c = Mn(Pn, e.__scopeTooltip), l = Dn(t), [u, d] = x.useState(null), [f, p] = x.useState(void 0), h = _(), g = x.useRef(0), v = o ?? c.disableHoverableContent, y = s ?? c.delayDuration, b = x.useRef(!1), [S, C] = m({
		prop: r,
		defaultProp: i ?? !1,
		onChange: /* @__PURE__ */ $((e) => {
			e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(An))) : c.onClose(), a?.(e);
		}, "onChange"),
		caller: Pn
	}), w = x.useMemo(() => S ? b.current ? "delayed-open" : "instant-open" : "closed", [S]), T = x.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, b.current = !1, C(!0);
	}, [C]), E = x.useCallback(() => {
		window.clearTimeout(g.current), g.current = 0, C(!1);
	}, [C]), D = x.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			b.current = !0, C(!0), g.current = 0;
		}, y);
	}, [y, C]);
	x.useEffect(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []);
	let O = f ?? h;
	return /* @__PURE__ */ (0, j.jsx)(xn, {
		...l,
		children: /* @__PURE__ */ (0, j.jsx)(Fn, {
			scope: t,
			contentId: O,
			setContentId: p,
			open: S,
			stateAttribute: w,
			trigger: u,
			onTriggerChange: d,
			onTriggerEnter: x.useCallback(() => {
				c.isOpenDelayedRef.current ? D() : T();
			}, [
				c.isOpenDelayedRef,
				D,
				T
			]),
			onTriggerLeave: x.useCallback(() => {
				v ? E() : (window.clearTimeout(g.current), g.current = 0);
			}, [E, v]),
			onOpen: T,
			onClose: E,
			disableHoverableContent: v,
			children: n
		})
	});
}, "Tooltip"), Rn = "TooltipTrigger", zn = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeTooltip: n, ...i } = e, a = In(Rn, n), o = Mn(Rn, n), s = Dn(n), c = x.useRef(null), l = r(t, c, a.onTriggerChange), d = x.useRef(!1), f = x.useRef(!1), p = x.useCallback(() => d.current = !1, []);
	return x.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ (0, j.jsx)(Sn, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ (0, j.jsx)(v.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: l,
			onPointerMove: u(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !f.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), f.current = !0);
			}),
			onPointerLeave: u(e.onPointerLeave, () => {
				a.onTriggerLeave(), f.current = !1;
			}),
			onPointerDown: u(e.onPointerDown, () => {
				a.open && a.onClose(), d.current = !0, document.addEventListener("pointerup", p, { once: !0 });
			}),
			onFocus: u(e.onFocus, () => {
				d.current || a.onOpen();
			}),
			onBlur: u(e.onBlur, a.onClose),
			onClick: u(e.onClick, a.onClose)
		})
	});
}, "TooltipTrigger")), Bn = "TooltipPortal", [Vn, Hn] = Tn(Bn, { forceMount: void 0 }), Un = /* @__PURE__ */ $((e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = In(Bn, t);
	return /* @__PURE__ */ (0, j.jsx)(Vn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, j.jsx)(b, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, j.jsx)(h, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "TooltipPortal"), Wn = "TooltipContent", Gn = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Hn(Wn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = In(Wn, e.__scopeTooltip);
	return /* @__PURE__ */ (0, j.jsx)(b, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, j.jsx)(Jn, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, j.jsx)(Kn, {
			side: i,
			...a,
			ref: t
		})
	});
}, "TooltipContent")), Kn = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = In(Wn, e.__scopeTooltip), i = Mn(Wn, e.__scopeTooltip), a = x.useRef(null), o = r(t, a), [s, c] = x.useState(null), { trigger: l, onClose: u } = n, d = a.current, { onPointerInTransitChange: f } = i, p = x.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = x.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = Xn(r, Yn(r, n.getBoundingClientRect())), a = Zn(t.getBoundingClientRect()), o = $n([...i, ...a]);
		c(o), f(!0);
	}, [f]);
	return x.useEffect(() => () => p(), [p]), x.useEffect(() => {
		if (l && d) {
			let e = /* @__PURE__ */ $((e) => m(e, d), "handleTriggerLeave"), t = /* @__PURE__ */ $((e) => m(e, l), "handleContentLeave");
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), x.useEffect(() => {
		if (s) {
			let e = /* @__PURE__ */ $((e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !Qn(n, s);
				r ? p() : i && (p(), u());
			}, "handleTrackPointerGrace");
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ (0, j.jsx)(Jn, {
		...e,
		ref: o
	});
}, "TooltipContentHoverable")), qn = t("TooltipContent"), Jn = /* @__PURE__ */ x.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeTooltip: n, children: r, "aria-label": i, id: a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = e, l = In(Wn, n), u = Dn(n), { onClose: d } = l;
	x.useEffect(() => (document.addEventListener(An, d), () => document.removeEventListener(An, d)), [d]), x.useEffect(() => {
		if (l.trigger) {
			let e = /* @__PURE__ */ $((e) => {
				e.target instanceof Node && e.target.contains(l.trigger) && d();
			}, "handleScroll");
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, d]);
	let { setContentId: f } = l;
	return y(() => (f(a), () => {
		f(void 0);
	}), [a, f]), /* @__PURE__ */ (0, j.jsx)(g, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: d,
		children: /* @__PURE__ */ (0, j.jsxs)(Cn, {
			"data-state": l.stateAttribute,
			role: i ? void 0 : "tooltip",
			id: i ? void 0 : l.contentId,
			...u,
			...c,
			ref: t,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, j.jsx)(qn, { children: r }), i ? /* @__PURE__ */ (0, j.jsx)(ee, {
				id: l.contentId,
				role: "tooltip",
				children: i
			}) : null]
		})
	});
}, "TooltipContentImpl"));
function Yn(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
$(Yn, "getExitSideFromRect");
function Xn(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right": r.push({
			x: e.x - n,
			y: e.y - n
		}, {
			x: e.x - n,
			y: e.y + n
		});
	}
	return r;
}
$(Xn, "getPaddedExitPoints");
function Zn(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
$(Zn, "getPointsFromRect");
function Qn(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
$(Qn, "isPointInPolygon");
function $n(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), er(t);
}
$($n, "getHull");
function er(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
$(er, "getHullPresorted");
var tr = Nn, nr = Ln, rr = zn, ir = Un, ar = Gn, or = a(), sr = (e) => {
	let t = (0, or.c)(6), n, r;
	t[0] === e ? (n = t[1], r = t[2]) : ({delayDuration: r, ...n} = e, t[0] = e, t[1] = n, t[2] = r);
	let i = r === void 0 ? 400 : r, a;
	return t[3] !== i || t[4] !== n ? (a = /* @__PURE__ */ (0, j.jsx)(tr, {
		delayDuration: i,
		...n
	}), t[3] = i, t[4] = n, t[5] = a) : a = t[5], a;
}, cr = f(ir), lr = nr, ur = d(ar), dr = rr, fr = x.forwardRef((e, t) => {
	let r = (0, or.c)(11), i, a, o;
	r[0] === e ? (i = r[1], a = r[2], o = r[3]) : ({className: i, sideOffset: o, ...a} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o);
	let s = o === void 0 ? 4 : o, c;
	r[4] === i ? c = r[5] : (c = n("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-xs data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", i), r[4] = i, r[5] = c);
	let u;
	return r[6] !== a || r[7] !== t || r[8] !== s || r[9] !== c ? (u = /* @__PURE__ */ (0, j.jsx)(l, { children: /* @__PURE__ */ (0, j.jsx)(ur, {
		ref: t,
		sideOffset: s,
		className: c,
		...a
	}) }), r[6] = a, r[7] = t, r[8] = s, r[9] = c, r[10] = u) : u = r[10], u;
});
fr.displayName = ar.displayName;
var pr = (e) => {
	let t = (0, or.c)(22), n, r, i, a, o, s, c, l;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8]) : ({content: i, children: r, usePortal: s, asChild: c, tabIndex: l, side: o, align: n, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l);
	let u = s === void 0 || s, d = c === void 0 || c;
	if (i == null || i === "") return r;
	let f;
	t[9] !== d || t[10] !== r || t[11] !== l ? (f = /* @__PURE__ */ (0, j.jsx)(dr, {
		asChild: d,
		tabIndex: l,
		children: r
	}), t[9] = d, t[10] = r, t[11] = l, t[12] = f) : f = t[12];
	let p;
	t[13] !== n || t[14] !== i || t[15] !== o || t[16] !== u ? (p = u ? /* @__PURE__ */ (0, j.jsx)(cr, { children: /* @__PURE__ */ (0, j.jsx)(fr, {
		side: o,
		align: n,
		children: i
	}) }) : /* @__PURE__ */ (0, j.jsx)(fr, {
		side: o,
		align: n,
		children: i
	}), t[13] = n, t[14] = i, t[15] = o, t[16] = u, t[17] = p) : p = t[17];
	let m;
	return t[18] !== a || t[19] !== f || t[20] !== p ? (m = /* @__PURE__ */ (0, j.jsxs)(lr, {
		disableHoverableContent: !0,
		...a,
		children: [f, p]
	}), t[18] = a, t[19] = f, t[20] = p, t[21] = m) : m = t[21], m;
};
//#endregion
export { lr as a, Cn as c, re as d, ee as f, k as h, sr as i, xn as l, F as m, fr as n, dr as o, P as p, cr as r, Sn as s, pr as t, cn as u };
