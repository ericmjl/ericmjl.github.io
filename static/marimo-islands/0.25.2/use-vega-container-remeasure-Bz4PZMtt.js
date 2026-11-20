import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { t as n } from "./compiler-runtime-CldRdSsv.js";
//#region src/plugins/impl/vega/use-vega-container-remeasure.ts
var r = n(), i = /* @__PURE__ */ e(t(), 1);
function a(e, t) {
	let n = (0, r.c)(4), a, s;
	n[0] !== t || n[1] !== e ? (a = () => {
		let n = e.current;
		if (!n || !t || typeof ResizeObserver > "u") return;
		let r = n.clientWidth, i = new ResizeObserver((e) => {
			let t = e[0]?.contentRect.width ?? 0;
			if (t <= 0) {
				r = 0;
				return;
			}
			Math.round(t) !== Math.round(r) && (r = t, requestAnimationFrame(o));
		});
		return i.observe(n), () => i.disconnect();
	}, s = [e, t], n[0] = t, n[1] = e, n[2] = a, n[3] = s) : (a = n[2], s = n[3]), (0, i.useEffect)(a, s);
}
function o() {
	window.dispatchEvent(new Event("resize"));
}
//#endregion
export { a as t };
