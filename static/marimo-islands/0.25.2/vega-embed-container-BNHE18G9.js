import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { t as n } from "./compiler-runtime-CldRdSsv.js";
import { t as r } from "./jsx-runtime-3BD1kT0s.js";
import { M as i } from "./vega-loader.browser-DNST6uVf.js";
import { n as a } from "./react-vega-BED0DjiB.js";
import { t as o } from "./use-vega-container-remeasure-Bz4PZMtt.js";
//#region src/components/charts/vega-embed-container.tsx
var s = n(), c = /* @__PURE__ */ e(t(), 1), l = r();
function u(e) {
	let t = (0, s.c)(4), n = (0, c.useRef)(null), r;
	t[0] === e.spec ? r = t[1] : (r = i(e.spec), t[0] = e.spec, t[1] = r), o(n, r === "container");
	let u;
	return t[2] === e ? u = t[3] : (u = /* @__PURE__ */ (0, l.jsx)(a, {
		ref: n,
		...e
	}), t[2] = e, t[3] = u), u;
}
//#endregion
export { u as VegaEmbedContainer };
