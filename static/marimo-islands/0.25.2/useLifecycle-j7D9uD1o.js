import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { g as t, h as n, r } from "./button-CvjkwdSk.js";
import { t as i } from "./react-sHtZdjeP.js";
import { t as a } from "./compiler-runtime-CldRdSsv.js";
import { h as o } from "./tooltip-BO1REbqs.js";
import { t as s } from "./jsx-runtime-3BD1kT0s.js";
import { E as c, w as l } from "./useTheme-CRnjkku0.js";
var u = o("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]), d = o("hash", [
	["line", {
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9",
		key: "4lhtct"
	}],
	["line", {
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15",
		key: "vyu0kd"
	}],
	["line", {
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21",
		key: "1ggp8o"
	}],
	["line", {
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21",
		key: "weycgp"
	}]
]), f = o("toggle-left", [["circle", {
	cx: "9",
	cy: "12",
	r: "3",
	key: "u3jwor"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "5",
	rx: "7",
	key: "g7kal2"
}]]), p = o("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]), m = a();
function h(e, n) {
	return {
		reducer: (r, i) => (r ||= e(), i.type in n ? n[i.type](r, i.payload) : (t.error(`Action type ${i.type} is not defined in reducers.`), r)),
		createActions: (e) => {
			let t = {};
			for (let r in n) t[r] = (t) => {
				e({
					type: r,
					payload: t
				});
			};
			return t;
		}
	};
}
function g(e, n, r) {
	let i = [...r ?? []], a = (e) => {
		i.push(e);
	}, { reducer: o, createActions: s } = h(e, n), u = (e, n) => {
		try {
			let r = o(e, n);
			for (let a of i) try {
				a(e, r, n);
			} catch (e) {
				t.error(`Error in middleware for action ${n.type}:`, e);
			}
			return r;
		} catch (r) {
			return t.error(`Error in reducer for action ${n.type}:`, r), e;
		}
	}, d = c(e()), f = /* @__PURE__ */ new WeakMap();
	function p(e) {
		let t = (0, m.c)(4), n = e === void 0 ? {} : e, r = l(d);
		if (n.skipMiddleware === !0) {
			let e;
			return t[0] === r ? e = t[1] : (e = s((e) => {
				r((t) => o(t, e));
			}), t[0] = r, t[1] = e), e;
		}
		f.has(r) || f.set(r, s((e) => {
			r((t) => u(t, e));
		}));
		let i;
		return t[2] === r ? i = t[3] : (i = f.get(r), t[2] = r, t[3] = i), i;
	}
	return {
		reducer: u,
		addMiddleware: a,
		createActions: s,
		valueAtom: d,
		useActions: p
	};
}
//#endregion
//#region src/components/ui/badge.tsx
var _ = /* @__PURE__ */ e(i(), 1), v = s(), y = r("inline-flex items-center border rounded-full px-2 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 forced-color-adjust-none", {
	variants: { variant: {
		default: "bg-primary hover:bg-primary/60 border-transparent text-primary-foreground forced-colors:bg-[Highlight] forced-colors:border-[Highlight] forced-colors:text-[HighlightText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText]",
		defaultOutline: "bg-(--blue-2) border-(--blue-8) text-(--blue-11) forced-colors:bg-[Canvas] forced-colors:border-[Highlight] forced-colors:text-[CanvasText]",
		secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground forced-colors:bg-[ButtonFace] forced-colors:border-[ButtonText] forced-colors:text-[ButtonText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText]",
		destructive: "bg-(--red-2) border-(--red-6) text-(--red-9) hover:bg-(--red-3) forced-colors:bg-[Canvas] forced-colors:border-[ButtonText] forced-colors:text-[CanvasText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText]",
		success: "bg-(--grass-2) border-(--grass-5) text-(--grass-9) hover:bg-(--grass-3) forced-colors:bg-[Canvas] forced-colors:border-[ButtonText] forced-colors:text-[CanvasText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText]",
		outline: "text-foreground forced-colors:bg-[Canvas] forced-colors:border-[ButtonText] forced-colors:text-[CanvasText]"
	} },
	defaultVariants: { variant: "default" }
}), b = (e) => {
	let t = (0, m.c)(10), r, i, a;
	t[0] === e ? (r = t[1], i = t[2], a = t[3]) : ({className: r, variant: a, ...i} = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a);
	let o;
	t[4] !== r || t[5] !== a ? (o = n(y({ variant: a }), r), t[4] = r, t[5] = a, t[6] = o) : o = t[6];
	let s;
	return t[7] !== i || t[8] !== o ? (s = /* @__PURE__ */ (0, v.jsx)("div", {
		className: o,
		...i
	}), t[7] = i, t[8] = o, t[9] = s) : s = t[9], s;
};
//#endregion
//#region src/hooks/useLifecycle.ts
function x(e) {
	(0, _.useEffect)(e, []);
}
function S(e) {
	(0, _.useEffect)(() => e(), []);
}
//#endregion
export { p as a, u as c, g as i, S as n, f as o, b as r, d as s, x as t };
