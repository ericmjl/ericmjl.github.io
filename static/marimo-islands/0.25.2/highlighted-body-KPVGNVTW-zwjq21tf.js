import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { n, o as r, r as i } from "./chunk-YOKDWASO-DPZk8vhS.js";
import { t as a } from "./jsx-runtime-3BD1kT0s.js";
//#region ../node_modules/.pnpm/streamdown@2.6.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/streamdown/dist/highlighted-body-KPVGNVTW.js
var o = /* @__PURE__ */ e(t(), 1), s = a(), c = ({ code: e, language: t, maxHeight: a, raw: c, className: l, startLine: u, lineNumbers: d, ...f }) => {
	let { shikiTheme: p } = (0, o.useContext)(i), m = n(), [h, g] = (0, o.useState)(c);
	return (0, o.useEffect)(() => {
		if (!m) {
			g(c);
			return;
		}
		let n = m.highlight({
			code: e,
			language: t,
			themes: p
		}, (e) => {
			g(e);
		});
		n && g(n);
	}, [
		e,
		t,
		p,
		m,
		c
	]), (0, s.jsx)(r, {
		className: l,
		language: t,
		lineNumbers: d,
		maxHeight: a,
		result: h,
		startLine: u,
		...f
	});
};
//#endregion
export { c as HighlightedCodeBlockBody };
