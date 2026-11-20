import "./rolldown-runtime-Cb76FRpK.js";
import { g as e } from "./button-CvjkwdSk.js";
import { t } from "./react-sHtZdjeP.js";
import { t as n } from "./compiler-runtime-CldRdSsv.js";
import { t as r } from "./copy-icon-Ft7t9bqz.js";
import { t as i } from "./jsx-runtime-3BD1kT0s.js";
import { n as a } from "./error-banner-Da600cwz.js";
import { t as o } from "./esm-AMFssoNp.js";
import { n as s, t as c } from "./esm-D2gTsXEV.js";
//#region src/plugins/impl/code/any-language-editor.tsx
var l = n();
t();
var u = i(), d = {
	python: "py",
	python3: "py",
	javascript: "js",
	typescript: "ts",
	shell: "sh",
	bash: "sh",
	unknown: "text",
	undefined: "text"
}, f = [];
function p(e) {
	return e ? e in c : !1;
}
var m = (t) => {
	let n = (0, l.c)(29), i, m, h, g, _, v;
	if (n[0] !== t) {
		let { language: e, hideUnsupportedLanguageErrors: r, showCopyButton: a, extensions: o, ...s } = t;
		m = r, _ = a, g = s, h = e, i = o === void 0 ? f : o, h = d[h || ""] || h, v = p(h), n[0] = t, n[1] = i, n[2] = m, n[3] = h, n[4] = g, n[5] = _, n[6] = v;
	} else i = n[1], m = n[2], h = n[3], g = n[4], _ = n[5], v = n[6];
	let y = v;
	y || e.warn(`Language ${h} not found in CodeMirror.`);
	let b;
	bb0: {
		if (!p(h)) {
			b = i;
			break bb0;
		}
		let e;
		n[7] === h ? e = n[8] : (e = s(h), n[7] = h, n[8] = e);
		let t;
		n[9] !== i || n[10] !== e ? (t = [e, ...i].filter(Boolean), n[9] = i, n[10] = e, n[11] = t) : t = n[11], b = t;
	}
	let x = b, S;
	n[12] !== m || n[13] !== y || n[14] !== h ? (S = !y && !m && /* @__PURE__ */ (0, u.jsx)(a, {
		className: "mb-1 rounded-sm",
		error: `Language ${h} not supported. Supported languages are: ${Object.keys(c).join(", ")}`
	}), n[12] = m, n[13] = y, n[14] = h, n[15] = S) : S = n[15];
	let C;
	n[16] !== y || n[17] !== g || n[18] !== _ ? (C = _ && y && /* @__PURE__ */ (0, u.jsx)(r, {
		tooltip: !1,
		buttonClassName: "absolute top-2 right-2 z-10 hover-action",
		className: "h-4 w-4 text-muted-foreground",
		value: g.value || "",
		toastTitle: "Copied to clipboard"
	}), n[16] = y, n[17] = g, n[18] = _, n[19] = C) : C = n[19];
	let w;
	n[20] === x ? w = n[21] : (w = [...x], n[20] = x, n[21] = w);
	let T;
	n[22] !== g || n[23] !== w ? (T = /* @__PURE__ */ (0, u.jsx)(o, {
		...g,
		extensions: w
	}), n[22] = g, n[23] = w, n[24] = T) : T = n[24];
	let E;
	return n[25] !== S || n[26] !== C || n[27] !== T ? (E = /* @__PURE__ */ (0, u.jsxs)("div", {
		className: "relative w-full group hover-actions-parent",
		children: [
			S,
			C,
			T
		]
	}), n[25] = S, n[26] = C, n[27] = T, n[28] = E) : E = n[28], E;
};
//#endregion
export { d as LANGUAGE_MAP, m as default };
