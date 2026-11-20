import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { t } from "./react-sHtZdjeP.js";
import { k as n } from "./useTheme-CRnjkku0.js";
//#region src/hooks/useDeepCompareMemoize.ts
var r = /* @__PURE__ */ e(t(), 1);
function i(e) {
	let t = r.useRef(e);
	return n(e, t.current) || (t.current = e), t.current;
}
//#endregion
export { i as t };
