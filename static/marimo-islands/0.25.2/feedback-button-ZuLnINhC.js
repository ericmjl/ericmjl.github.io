import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t, t as n } from "./button-CvjkwdSk.js";
import { t as r } from "./react-sHtZdjeP.js";
import { t as i } from "./compiler-runtime-CldRdSsv.js";
import { t as a } from "./copy-icon-Ft7t9bqz.js";
import { Ct as o, Ft as s, H as c, L as l, Lt as u, V as d, d as f, un as p } from "./cells-C8iCYvLU.js";
import { b as m } from "./select-BButFi-d.js";
import { n as h, t as ee } from "./globals-Ci7B9t6C.js";
import { t as g } from "./jsx-runtime-3BD1kT0s.js";
import { C as _, _ as te, i as v } from "./useTheme-CRnjkku0.js";
import { a as ne, i as re, n as ie, r as ae } from "./dialog-CEBFZNyc.js";
import { t as oe } from "./useAsyncData-Deh5kszT.js";
import { t as se } from "./code-visibility-4aW5326K.js";
import { i as ce, n as le } from "./error-entries-CzoYkIQZ.js";
//#region src/components/ui/skeleton.tsx
var y = /* @__PURE__ */ e(r(), 1), b = i(), x = g(), ue = (e) => {
	let n = (0, b.c)(8), r, i;
	n[0] === e ? (r = n[1], i = n[2]) : ({className: r, ...i} = e, n[0] = e, n[1] = r, n[2] = i);
	let a;
	n[3] === r ? a = n[4] : (a = t("animate-pulse rounded-md bg-muted", r), n[3] = r, n[4] = a);
	let o;
	return n[5] !== i || n[6] !== a ? (o = /* @__PURE__ */ (0, x.jsx)("div", {
		className: a,
		...i
	}), n[5] = i, n[6] = a, n[7] = o) : o = n[7], o;
};
//#endregion
//#region src/core/diagnostics/issue-details.ts
function de(e, t) {
	return {
		...e,
		Binaries: {
			...e.Binaries,
			Browser: t
		}
	};
}
function fe(e, t, n, r) {
	return {
		marimo: e,
		Locale: n || void 0,
		Binaries: { Browser: t },
		"Environment Collection Error": r
	};
}
function S(e, t) {
	let n = Math.max(2, ...Array.from(t.matchAll(/`+/g), (e) => e[0].length)), r = "`".repeat(n + 1);
	return `${r}${e}\n${t}\n${r}`;
}
function pe(e, t) {
	let n = e.includes("?") ? "&" : "?", r = [], i = e, a = 0;
	for (let [e, o] of Object.entries(t)) {
		if (o.length === 0) continue;
		let t = `${e}=${encodeURIComponent(o)}`, s = `${i}${a === 0 ? n : "&"}${t}`;
		if (s.length > 6e3) {
			r.push(e);
			continue;
		}
		i = s, a += 1;
	}
	return {
		url: i,
		omitted: r
	};
}
function C(e, t) {
	return [
		"<details>",
		`<summary>${m.htmlEscape(e) ?? ""}</summary>`,
		"",
		t,
		"",
		"</details>"
	].join("\n");
}
function me(e) {
	return C("Environment", S("json", JSON.stringify(e, null, 2)));
}
function he(e) {
	return C("Errors", S("text", e.map(le).join("\n\n---\n\n")));
}
function ge(e) {
	return C("Code", S("python", e));
}
//#endregion
//#region src/hooks/useLocalStorage.ts
function _e(e, t) {
	let n = (0, b.c)(11), r;
	n[0] === t ? r = n[1] : (r = new s(t), n[0] = t, n[1] = r);
	let i = r, a;
	n[2] !== e || n[3] !== i ? (a = () => i.get(e), n[2] = e, n[3] = i, n[4] = a) : a = n[4];
	let [o, c] = (0, y.useState)(a), l;
	n[5] !== e || n[6] !== i ? (l = (t) => {
		c(t), i.set(e, t);
	}, n[5] = e, n[6] = i, n[7] = l) : l = n[7];
	let u = l, d;
	return n[8] !== u || n[9] !== o ? (d = [o, u], n[8] = u, n[9] = o, n[10] = d) : d = n[10], d;
}
var ve = (e) => {
	let r = (0, b.c)(16), { content: i } = e, [a, o] = (0, y.useState)(!1), s = !a && "max-h-24 overflow-hidden", c;
	r[0] === s ? c = r[1] : (c = t("text-xs bg-muted rounded p-2 overflow-x-auto whitespace-pre-wrap", s), r[0] = s, r[1] = c);
	let l;
	r[2] !== i || r[3] !== c ? (l = /* @__PURE__ */ (0, x.jsx)("pre", {
		className: c,
		children: i
	}), r[2] = i, r[3] = c, r[4] = l) : l = r[4];
	let u;
	r[5] === a ? u = r[6] : (u = !a && /* @__PURE__ */ (0, x.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 rounded-b bg-gradient-to-b from-transparent to-muted" }), r[5] = a, r[6] = u);
	let d;
	r[7] !== l || r[8] !== u ? (d = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "relative",
		children: [l, u]
	}), r[7] = l, r[8] = u, r[9] = d) : d = r[9];
	let f;
	r[10] === Symbol.for("react.memo_cache_sentinel") ? (f = () => o(T), r[10] = f) : f = r[10];
	let p = a ? "Show less" : "Show more", m;
	r[11] === p ? m = r[12] : (m = /* @__PURE__ */ (0, x.jsx)(n, {
		type: "button",
		variant: "link",
		size: "xs",
		className: "self-start",
		onClick: f,
		children: p
	}), r[11] = p, r[12] = m);
	let h;
	return r[13] !== d || r[14] !== m ? (h = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [d, m]
	}), r[13] = d, r[14] = m, r[15] = h) : h = r[15], h;
};
function ye(e) {
	if (!e.hasRequestClient) return "Notebook source is unavailable.";
	if (e.filename === null) return "Save the notebook first.";
	if (!e.codeAvailable) return "Notebook source is hidden in this view.";
	if (e.connectionState !== c.OPEN) return "Connect the notebook to include its source.";
}
var w = () => {
	let e = (0, b.c)(61), t = _(o), r, i;
	e[0] === t ? (r = e[1], i = e[2]) : (r = async () => {
		if (t != null) return t.getEnvironmentInfo();
	}, i = [t], e[0] = t, e[1] = r, e[2] = i);
	let s = oe(r, i), c = _(f), m = ce(te), g;
	if (e[3] !== c.cellData || e[4] !== c.cellIds.inOrderIds) {
		let t;
		e[6] === c.cellData ? t = e[7] : (t = (e) => c.cellData[e], e[6] = c.cellData, e[7] = t), g = c.cellIds.inOrderIds.map(t), e[3] = c.cellData, e[4] = c.cellIds.inOrderIds, e[5] = g;
	} else g = e[5];
	let y = se(g), S = _(u), C = _(d), w = t != null, T;
	e[8] !== y || e[9] !== C.state || e[10] !== S || e[11] !== w ? (T = ye({
		hasRequestClient: w,
		filename: S,
		codeAvailable: y,
		connectionState: C.state
	}), e[8] = y, e[9] = C.state, e[10] = S, e[11] = w, e[12] = T) : T = e[12];
	let E = T, D = E === void 0, [O, k] = _e("marimo:issue-report:include-errors", !1), [A, xe] = _e("marimo:issue-report:include-code", !1), j = s.data ? de(s.data, navigator.userAgent) : s.status === "error" || t == null ? fe(ee(), navigator.userAgent, navigator.language, "Server environment information unavailable") : void 0, M, N;
	e[13] !== A || e[14] !== D || e[15] !== t ? (M = async () => {
		if (!A || !D || t == null) return;
		let { contents: e } = await t.readCode();
		return e;
	}, N = [
		A,
		D,
		t
	], e[13] = A, e[14] = D, e[15] = t, e[16] = M, e[17] = N) : (M = e[16], N = e[17]);
	let P = oe(M, N), Se = v.bugReportUrl, Ce = [];
	if (j) {
		let e = { env: me(j) };
		O && m.length > 0 && (e["bug-description"] = he(m)), A && P.data && (e["reproduction-code"] = ge(P.data)), {url: Se, omitted: Ce} = pe(v.bugReportUrl, e);
	}
	let we = Ce.map(be).join(", "), F;
	e[18] === Symbol.for("react.memo_cache_sentinel") ? (F = /* @__PURE__ */ (0, x.jsxs)(re, { children: [/* @__PURE__ */ (0, x.jsx)(ne, { children: "Report an issue" }), /* @__PURE__ */ (0, x.jsx)(ae, { children: "Open a GitHub bug report prefilled with your environment, and optionally your current errors and notebook code. Nothing is uploaded automatically; review the details before posting." })] }), e[18] = F) : F = e[18];
	let I;
	e[19] === Symbol.for("react.memo_cache_sentinel") ? (I = /* @__PURE__ */ (0, x.jsx)(p, { className: "w-4 h-4 mr-2" }), e[19] = I) : I = e[19];
	let Te = m.length === 0, L;
	e[20] === k ? L = e[21] : (L = (e) => k(e === !0), e[20] = k, e[21] = L);
	let R;
	e[22] !== O || e[23] !== L || e[24] !== Te ? (R = /* @__PURE__ */ (0, x.jsx)(l, {
		id: "issue-include-errors",
		checked: O,
		disabled: Te,
		onCheckedChange: L,
		"aria-label": "Include errors"
	}), e[22] = O, e[23] = L, e[24] = Te, e[25] = R) : R = e[25];
	let z;
	e[26] === Symbol.for("react.memo_cache_sentinel") ? (z = /* @__PURE__ */ (0, x.jsx)("label", {
		htmlFor: "issue-include-errors",
		children: "Include errors"
	}), e[26] = z) : z = e[26];
	let B;
	e[27] === R ? B = e[28] : (B = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex items-center gap-2 text-sm",
		children: [R, z]
	}), e[27] = R, e[28] = B);
	let Ee = !D, V;
	e[29] === xe ? V = e[30] : (V = (e) => xe(e === !0), e[29] = xe, e[30] = V);
	let H;
	e[31] !== A || e[32] !== Ee || e[33] !== V ? (H = /* @__PURE__ */ (0, x.jsx)(l, {
		id: "issue-include-code",
		checked: A,
		disabled: Ee,
		onCheckedChange: V,
		"aria-label": "Include notebook code"
	}), e[31] = A, e[32] = Ee, e[33] = V, e[34] = H) : H = e[34];
	let U;
	e[35] === Symbol.for("react.memo_cache_sentinel") ? (U = /* @__PURE__ */ (0, x.jsx)("label", {
		htmlFor: "issue-include-code",
		children: "Include notebook code"
	}), e[35] = U) : U = e[35];
	let W;
	e[36] === H ? W = e[37] : (W = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex items-center gap-2 text-sm",
		children: [H, U]
	}), e[36] = H, e[37] = W);
	let G;
	e[38] === E ? G = e[39] : (G = E && /* @__PURE__ */ (0, x.jsx)("span", {
		className: "text-xs text-muted-foreground ml-6",
		children: E
	}), e[38] = E, e[39] = G);
	let K;
	e[40] !== P || e[41] !== A ? (K = A && P.status === "error" && /* @__PURE__ */ (0, x.jsx)("span", {
		className: "text-xs text-(--red-11) ml-6",
		children: "Notebook source could not be loaded."
	}), e[40] = P, e[41] = A, e[42] = K) : K = e[42];
	let q;
	e[43] !== W || e[44] !== G || e[45] !== K ? (q = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [
			W,
			G,
			K
		]
	}), e[43] = W, e[44] = G, e[45] = K, e[46] = q) : q = e[46];
	let J;
	e[47] !== B || e[48] !== q ? (J = /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [B, q]
	}), e[47] = B, e[48] = q, e[49] = J) : J = e[49];
	let Y;
	e[50] !== s.status || e[51] !== t ? (Y = s.status === "pending" && t != null && /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, x.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: "Loading environment details…"
			}),
			/* @__PURE__ */ (0, x.jsx)(ue, { className: "h-4 w-full" }),
			/* @__PURE__ */ (0, x.jsx)(ue, { className: "h-4 w-3/4" }),
			/* @__PURE__ */ (0, x.jsx)(ue, { className: "h-4 w-1/2" })
		]
	}), e[50] = s.status, e[51] = t, e[52] = Y) : Y = e[52];
	let X;
	e[53] !== s || e[54] !== t ? (X = (s.status === "error" || t == null) && /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "flex items-center gap-2 text-sm",
		children: [
			/* @__PURE__ */ (0, x.jsx)(h, { className: "w-4 h-4 text-(--yellow-11) shrink-0" }),
			/* @__PURE__ */ (0, x.jsx)("span", { children: "Server environment information unavailable" }),
			t != null && /* @__PURE__ */ (0, x.jsx)(n, {
				type: "button",
				variant: "link",
				size: "xs",
				onClick: () => s.refetch(),
				children: "Retry"
			})
		]
	}), e[53] = s, e[54] = t, e[55] = X) : X = e[55];
	let Z;
	e[56] !== j || e[57] !== m ? (Z = j && m.length === 0 && /* @__PURE__ */ (0, x.jsx)("span", {
		className: "text-sm text-muted-foreground",
		children: "No errors detected."
	}), e[56] = j, e[57] = m, e[58] = Z) : Z = e[58];
	let Q;
	e[59] === Symbol.for("react.memo_cache_sentinel") ? (Q = /* @__PURE__ */ (0, x.jsx)("a", {
		href: v.feedbackForm,
		target: "_blank",
		rel: "noreferrer",
		className: "underline",
		children: "two-minute survey"
	}), e[59] = Q) : Q = e[59];
	let $;
	return e[60] === Symbol.for("react.memo_cache_sentinel") ? ($ = /* @__PURE__ */ (0, x.jsx)("div", {
		className: "border-t pt-3",
		children: /* @__PURE__ */ (0, x.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Other feedback? Take our",
				" ",
				Q,
				" ",
				"or chat with us on",
				" ",
				/* @__PURE__ */ (0, x.jsx)("a", {
					href: v.discordLink,
					target: "_blank",
					rel: "noreferrer",
					className: "underline",
					children: "Discord"
				}),
				"."
			]
		})
	}), e[60] = $) : $ = e[60], /* @__PURE__ */ (0, x.jsxs)(ie, {
		className: "w-[540px] max-w-[90vw]",
		children: [F, /* @__PURE__ */ (0, x.jsxs)("div", {
			className: "flex flex-col gap-4 max-h-[60vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, x.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, x.jsx)(n, {
							type: "button",
							variant: "default",
							size: "xs",
							asChild: !0,
							className: "self-start",
							children: /* @__PURE__ */ (0, x.jsxs)("a", {
								href: Se,
								target: "_blank",
								rel: "noreferrer",
								children: [I, "Open GitHub issue"]
							})
						}),
						J,
						we ? /* @__PURE__ */ (0, x.jsxs)("div", {
							className: "flex items-start gap-2 text-xs text-(--yellow-11)",
							children: [/* @__PURE__ */ (0, x.jsx)(h, { className: "w-3.5 h-3.5 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, x.jsxs)("span", { children: [
								"Too large to prefill and left out of the link: ",
								we,
								". Paste them into the issue manually."
							] })]
						}) : /* @__PURE__ */ (0, x.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Your environment is always included."
						})
					]
				}),
				Y,
				X,
				j && /* @__PURE__ */ (0, x.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, x.jsx)("span", {
							className: "text-sm font-medium",
							children: "Environment details"
						}), /* @__PURE__ */ (0, x.jsx)(a, {
							className: "w-3.5 h-3.5",
							value: JSON.stringify(j, null, 2),
							ariaLabel: "Copy environment JSON",
							toastTitle: "Environment details copied"
						})]
					}), /* @__PURE__ */ (0, x.jsx)(ve, { content: JSON.stringify(j, null, 2) })]
				}),
				j && m.length > 0 && /* @__PURE__ */ (0, x.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, x.jsx)("span", {
							className: "text-sm font-medium",
							children: "Errors"
						}), /* @__PURE__ */ (0, x.jsx)(a, {
							className: "w-3.5 h-3.5",
							value: he(m),
							ariaLabel: "Copy errors",
							toastTitle: "Errors copied"
						})]
					}), /* @__PURE__ */ (0, x.jsx)(ve, { content: m.map(le).join("\n\n---\n\n") })]
				}),
				Z,
				$
			]
		})]
	});
};
function T(e) {
	return !e;
}
function be(e) {
	return e === "bug-description" ? "errors" : e === "reproduction-code" ? "code" : e;
}
//#endregion
export { w as FeedbackModal };
