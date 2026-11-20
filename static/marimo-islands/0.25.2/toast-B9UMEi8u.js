import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { h as t, p as n, r } from "./button-CvjkwdSk.js";
import { t as i } from "./react-sHtZdjeP.js";
import { t as a } from "./compiler-runtime-CldRdSsv.js";
import { m as o } from "./tooltip-BO1REbqs.js";
import { A as s, k as c } from "./select-BButFi-d.js";
import { t as l } from "./react-dom-DUmH0GXv.js";
import { t as u } from "./jsx-runtime-3BD1kT0s.js";
import { Ct as d, St as f, Tt as p, _t as m, bt as h, ft as g, gt as ee, mt as te, wt as _, xt as v, yt as ne } from "./use-restore-focus-BEM7sFWl.js";
//#region ../node_modules/.pnpm/@radix-ui+react-toast@1.2.23_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@_69693a0157877c6dbc61617dd22ea8ee/node_modules/@radix-ui/react-toast/dist/index.mjs
var y = /* @__PURE__ */ e(i(), 1), re = /* @__PURE__ */ e(l(), 1), b = u(), x = Object.defineProperty, S = (e, t) => x(e, "name", {
	value: t,
	configurable: !0
}), ie = "ToastProvider", [ae, oe, se] = c("Toast"), [C, w] = d("Toast", [se]), [T, E] = C(ie), D = /* @__PURE__ */ S((e) => {
	let { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: i = "right", swipeThreshold: a = 50, announcerContainer: o, children: s } = e, [c, l] = y.useState(null), [u, d] = y.useState(0), f = y.useRef(!1);
	return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ie}\`. Expected non-empty \`string\`.`), /* @__PURE__ */ (0, b.jsx)(ae.Provider, {
		scope: t,
		children: /* @__PURE__ */ (0, b.jsx)(T, {
			scope: t,
			label: n,
			duration: r,
			swipeDirection: i,
			swipeThreshold: a,
			toastCount: u,
			viewport: c,
			onViewportChange: l,
			onToastAdd: y.useCallback(() => d((e) => e + 1), []),
			onToastRemove: y.useCallback(() => d((e) => e - 1), []),
			isClosePausedRef: f,
			announcerContainer: o,
			children: s
		})
	});
}, "ToastProvider"), ce = "ToastViewport", O = ["F8"], le = "toast.viewportPause", ue = "toast.viewportResume", de = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: r, hotkey: i = O, label: a = "Notifications ({hotkey})", ...o } = e, s = E(ce, r), c = oe(r), l = y.useRef(null), u = y.useRef(null), d = y.useRef(null), f = y.useRef(null), p = n(t, f, s.onViewportChange), m = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
	y.useEffect(() => {
		let e = /* @__PURE__ */ S((e) => {
			i.length !== 0 && i.every((t) => e[t] || e.code === t) && f.current?.focus();
		}, "handleKeyDown");
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [i]), y.useEffect(() => {
		let e = l.current, t = f.current;
		if (h && e && t) {
			let n = /* @__PURE__ */ S(() => {
				if (!s.isClosePausedRef.current) {
					let e = new CustomEvent(le);
					t.dispatchEvent(e), s.isClosePausedRef.current = !0;
				}
			}, "handlePause"), r = /* @__PURE__ */ S(() => {
				if (s.isClosePausedRef.current) {
					let e = new CustomEvent(ue);
					t.dispatchEvent(e), s.isClosePausedRef.current = !1;
				}
			}, "handleResume"), i = /* @__PURE__ */ S((t) => {
				e.contains(t.relatedTarget) || r();
			}, "handleFocusOutResume"), a = /* @__PURE__ */ S(() => {
				e.contains(document.activeElement) || r();
			}, "handlePointerLeaveResume");
			return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", a), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
				e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", n), window.removeEventListener("focus", r);
			};
		}
	}, [h, s.isClosePausedRef]);
	let g = y.useCallback(({ tabbingDirection: e }) => {
		let t = c().map((t) => {
			let n = t.ref.current, r = [n, ...Me(n)];
			return e === "forwards" ? r : r.reverse();
		});
		return (e === "forwards" ? t.reverse() : t).flat();
	}, [c]);
	return y.useEffect(() => {
		let e = f.current;
		if (e) {
			let t = /* @__PURE__ */ S((t) => {
				let n = t.altKey || t.ctrlKey || t.metaKey;
				if (t.key === "Tab" && !n) {
					let n = document.activeElement, r = t.shiftKey;
					if (t.target === e && r) {
						u.current?.focus();
						return;
					}
					let i = g({ tabbingDirection: r ? "backwards" : "forwards" }), a = i.findIndex((e) => e === n);
					N(i.slice(a + 1)) ? t.preventDefault() : r ? u.current?.focus() : d.current?.focus();
				}
			}, "handleKeyDown");
			return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t);
		}
	}, [c, g]), /* @__PURE__ */ (0, b.jsxs)(te, {
		ref: l,
		role: "region",
		"aria-label": a.replace("{hotkey}", m),
		tabIndex: -1,
		style: { pointerEvents: h ? void 0 : "none" },
		children: [
			h && /* @__PURE__ */ (0, b.jsx)(k, {
				ref: u,
				onFocusFromOutsideViewport: () => {
					N(g({ tabbingDirection: "forwards" }));
				}
			}),
			/* @__PURE__ */ (0, b.jsx)(ae.Slot, {
				scope: r,
				children: /* @__PURE__ */ (0, b.jsx)(_.ol, {
					tabIndex: -1,
					...o,
					ref: p
				})
			}),
			h && /* @__PURE__ */ (0, b.jsx)(k, {
				ref: d,
				onFocusFromOutsideViewport: () => {
					N(g({ tabbingDirection: "backwards" }));
				}
			})
		]
	});
}, "ToastViewport")), fe = "ToastFocusProxy", k = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e, a = E(fe, n);
	return /* @__PURE__ */ (0, b.jsx)(o, {
		tabIndex: 0,
		...i,
		ref: t,
		style: { position: "fixed" },
		onFocus: (e) => {
			let t = e.relatedTarget;
			a.viewport?.contains(t) || r();
		}
	});
}, "ToastFocusProxy")), A = "Toast", pe = "toast.swipeStart", me = "toast.swipeMove", he = "toast.swipeCancel", ge = "toast.swipeEnd", j = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e, [s, c] = h({
		prop: r,
		defaultProp: i ?? !0,
		onChange: a,
		caller: A
	});
	return /* @__PURE__ */ (0, b.jsx)(ne, {
		present: n || s,
		children: /* @__PURE__ */ (0, b.jsx)(ye, {
			open: s,
			...o,
			ref: t,
			onClose: () => c(!1),
			onPause: m(e.onPause),
			onResume: m(e.onResume),
			onSwipeStart: f(e.onSwipeStart, (e) => {
				e.currentTarget.setAttribute("data-swipe", "start");
			}),
			onSwipeMove: f(e.onSwipeMove, (e) => {
				let { x: t, y: n } = e.detail.delta;
				e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`);
			}),
			onSwipeCancel: f(e.onSwipeCancel, (e) => {
				e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
			}),
			onSwipeEnd: f(e.onSwipeEnd, (e) => {
				let { x: t, y: n } = e.detail.delta;
				e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), c(!1);
			})
		})
	});
}, "Toast")), [_e, ve] = C(A, { onClose() {} }), ye = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: r, type: i = "foreground", duration: a, open: o, onClose: s, onEscapeKeyDown: c, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: p, onSwipeCancel: h, onSwipeEnd: g, ...te } = e, v = E(A, r), ne = oe(r), [x, ie] = y.useState(null), se = n(t, ie), C = y.useRef(null), w = y.useRef(null), T = a || v.duration, D = y.useRef(0), ce = y.useRef(T), O = y.useRef(0), { onToastAdd: de, onToastRemove: fe } = v, k = m(() => {
		x?.contains(document.activeElement) && v.viewport?.focus(), s();
	}), j = y.useCallback((e) => {
		!e || e === Infinity || (window.clearTimeout(O.current), D.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(k, e));
	}, [k]);
	y.useEffect(() => {
		let e = v.viewport;
		if (e) {
			let t = /* @__PURE__ */ S(() => {
				j(ce.current), u?.();
			}, "handleResume"), n = /* @__PURE__ */ S(() => {
				let e = (/* @__PURE__ */ new Date()).getTime() - D.current;
				ce.current -= e, window.clearTimeout(O.current), l?.();
			}, "handlePause");
			return e.addEventListener(le, n), e.addEventListener(ue, t), () => {
				e.removeEventListener(le, n), e.removeEventListener(ue, t);
			};
		}
	}, [
		v.viewport,
		T,
		l,
		u,
		j
	]), y.useEffect(() => {
		o && !v.isClosePausedRef.current && j(T);
	}, [
		o,
		T,
		v.isClosePausedRef,
		j
	]), y.useEffect(() => () => {
		window.clearTimeout(O.current);
	}, []), y.useEffect(() => (de(), () => fe()), [de, fe]);
	let ve = y.useMemo(() => x ? Oe(x) : null, [x]);
	return v.viewport ? /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [ve && /* @__PURE__ */ (0, b.jsx)(be, {
		__scopeToast: r,
		role: "status",
		"aria-live": i === "foreground" ? "assertive" : "polite",
		children: ve
	}), /* @__PURE__ */ (0, b.jsx)(_e, {
		scope: r,
		onClose: k,
		children: re.createPortal(/* @__PURE__ */ (0, b.jsx)(ae.ItemSlot, {
			scope: r,
			children: /* @__PURE__ */ (0, b.jsx)(ee, {
				asChild: !0,
				onEscapeKeyDown: f(c, (e) => {
					ne().some((t) => t.ref.current?.contains(e.target)) || k();
				}),
				children: /* @__PURE__ */ (0, b.jsx)(_.li, {
					tabIndex: 0,
					"data-state": o ? "open" : "closed",
					"data-swipe-direction": v.swipeDirection,
					...te,
					ref: se,
					style: {
						userSelect: "none",
						touchAction: "none",
						...e.style
					},
					onKeyDown: f(e.onKeyDown, (e) => {
						e.key === "Escape" && (c?.(e.nativeEvent), e.nativeEvent.defaultPrevented || k());
					}),
					onPointerDown: f(e.onPointerDown, (e) => {
						e.button === 0 && (C.current = {
							x: e.clientX,
							y: e.clientY
						});
					}),
					onPointerMove: f(e.onPointerMove, (e) => {
						if (!C.current) return;
						let t = e.clientX - C.current.x, n = e.clientY - C.current.y, r = !!w.current, i = ["left", "right"].includes(v.swipeDirection), a = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, o = i ? a(0, t) : 0, s = i ? 0 : a(0, n), c = e.pointerType === "touch" ? 10 : 2, l = {
							x: o,
							y: s
						}, u = {
							originalEvent: e,
							delta: l
						};
						r ? (w.current = l, M(me, p, u, { discrete: !1 })) : ke(l, v.swipeDirection, c) ? (w.current = l, M(pe, d, u, { discrete: !1 }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (C.current = null);
					}),
					onPointerUp: f(e.onPointerUp, (e) => {
						let t = w.current, n = e.target;
						if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), w.current = null, C.current = null, t) {
							let n = e.currentTarget, r = {
								originalEvent: e,
								delta: t
							};
							ke(t, v.swipeDirection, v.swipeThreshold) ? M(ge, g, r, { discrete: !0 }) : M(he, h, r, { discrete: !0 }), n.addEventListener("click", (e) => e.preventDefault(), { once: !0 });
						}
					})
				})
			})
		}), v.viewport)
	})] }) : null;
}, "ToastImpl")), be = /* @__PURE__ */ S((e) => {
	let { __scopeToast: t, children: n, ...r } = e, i = E(A, t), [a, s] = y.useState(!1), [c, l] = y.useState(!1);
	return Ae(() => s(!0)), y.useEffect(() => {
		let e = window.setTimeout(() => l(!0), 1e3);
		return () => window.clearTimeout(e);
	}, []), c ? null : /* @__PURE__ */ (0, b.jsx)(g, {
		asChild: !0,
		container: i.announcerContainer || void 0,
		children: /* @__PURE__ */ (0, b.jsx)(o, {
			...r,
			children: a && /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
				i.label,
				" ",
				n
			] })
		})
	});
}, "ToastAnnounce"), xe = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: n, ...r } = e;
	return /* @__PURE__ */ (0, b.jsx)(_.div, {
		...r,
		ref: t
	});
}, "ToastTitle")), Se = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: n, ...r } = e;
	return /* @__PURE__ */ (0, b.jsx)(_.div, {
		...r,
		ref: t
	});
}, "ToastDescription")), Ce = "ToastAction", we = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { altText: n, ...r } = e;
	return n.trim() ? /* @__PURE__ */ (0, b.jsx)(De, {
		altText: n,
		asChild: !0,
		children: /* @__PURE__ */ (0, b.jsx)(Ee, {
			...r,
			ref: t
		})
	}) : (console.error(`Invalid prop \`altText\` supplied to \`${Ce}\`. Expected non-empty \`string\`.`), null);
}, "ToastAction")), Te = "ToastClose", Ee = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: n, ...r } = e, i = ve(Te, n);
	return /* @__PURE__ */ (0, b.jsx)(De, {
		asChild: !0,
		children: /* @__PURE__ */ (0, b.jsx)(_.button, {
			type: "button",
			...r,
			ref: t,
			onClick: f(e.onClick, i.onClose)
		})
	});
}, "ToastClose")), De = /* @__PURE__ */ y.forwardRef(/* @__PURE__ */ S(function(e, t) {
	let { __scopeToast: n, altText: r, ...i } = e;
	return /* @__PURE__ */ (0, b.jsx)(_.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": r || void 0,
		...i,
		ref: t
	});
}, "ToastAnnounceExclude"));
function Oe(e) {
	let t = [];
	return Array.from(e.childNodes).forEach((e) => {
		if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), je(e)) {
			let n = e.ariaHidden || e.hidden || e.style.display === "none", r = e.dataset.radixToastAnnounceExclude === "";
			if (!n) {
				if (r) {
					let n = e.dataset.radixToastAnnounceAlt;
					n && t.push(n);
				} else t.push(...Oe(e));
			}
		}
	}), t;
}
S(Oe, "getAnnounceTextContent");
function M(e, t, n, { discrete: r }) {
	let i = n.originalEvent.currentTarget, a = new CustomEvent(e, {
		bubbles: !0,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? p(i, a) : i.dispatchEvent(a);
}
S(M, "handleAndDispatchCustomEvent");
var ke = /* @__PURE__ */ S((e, t, n = 0) => {
	let r = Math.abs(e.x), i = Math.abs(e.y), a = r > i;
	return t === "left" || t === "right" ? a && r > n : !a && i > n;
}, "isDeltaInDirection");
function Ae(e = () => {}) {
	let t = m(e);
	v(() => {
		let e = 0, n = 0;
		return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
			window.cancelAnimationFrame(e), window.cancelAnimationFrame(n);
		};
	}, [t]);
}
S(Ae, "useNextFrame");
function je(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
S(je, "isHTMLElement");
function Me(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ S((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
S(Me, "getTabbableCandidates");
function N(e) {
	let t = document.activeElement;
	return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
S(N, "focusFirst");
var Ne = D, Pe = de, Fe = j, Ie = xe, Le = Se, Re = we, ze = Ee;
//#endregion
//#region ../node_modules/.pnpm/marked@15.0.12/node_modules/marked/lib/marked.esm.js
function Be() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var P = Be();
function Ve(e) {
	P = e;
}
var F = { exec: () => null };
function I(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(L.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var L = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] /,
	listReplaceTask: /^\[[ xX]\] +/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, He = /^(?:[ \t]*(?:\n|$))+/, Ue = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, We = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, R = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ge = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ke = /(?:[*+-]|\d{1,9}[.)])/, qe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Je = I(qe).replace(/bull/g, Ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ye = I(qe).replace(/bull/g, Ke).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Xe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ze = /^[^\n]+/, Qe = /(?!\s*\])(?:\\.|[^\[\]\\])+/, $e = I(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Qe).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), et = I(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ke).getRegex(), z = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", tt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, nt = I("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", tt).replace("tag", z).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), rt = I(Xe).replace("hr", R).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", z).getRegex(), it = {
	blockquote: I(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", rt).getRegex(),
	code: Ue,
	def: $e,
	fences: We,
	heading: Ge,
	hr: R,
	html: nt,
	lheading: Je,
	list: et,
	newline: He,
	paragraph: rt,
	table: F,
	text: Ze
}, at = I("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", R).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", z).getRegex(), ot = {
	...it,
	lheading: Ye,
	table: at,
	paragraph: I(Xe).replace("hr", R).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", at).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", z).getRegex()
}, st = {
	...it,
	html: I("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", tt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: F,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: I(Xe).replace("hr", R).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Je).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ct = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, lt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ut = /^( {2,}|\\)\n(?!\s*$)/, dt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, B = /[\p{P}\p{S}]/u, ft = /[\s\p{P}\p{S}]/u, pt = /[^\s\p{P}\p{S}]/u, mt = I(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ft).getRegex(), ht = /(?!~)[\p{P}\p{S}]/u, gt = /(?!~)[\s\p{P}\p{S}]/u, _t = /(?:[^\s\p{P}\p{S}]|~)/u, vt = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, yt = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, bt = I(yt, "u").replace(/punct/g, B).getRegex(), xt = I(yt, "u").replace(/punct/g, ht).getRegex(), St = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ct = I(St, "gu").replace(/notPunctSpace/g, pt).replace(/punctSpace/g, ft).replace(/punct/g, B).getRegex(), wt = I(St, "gu").replace(/notPunctSpace/g, _t).replace(/punctSpace/g, gt).replace(/punct/g, ht).getRegex(), Tt = I("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, pt).replace(/punctSpace/g, ft).replace(/punct/g, B).getRegex(), Et = I(/\\(punct)/, "gu").replace(/punct/g, B).getRegex(), Dt = I(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ot = I(tt).replace("(?:-->|$)", "-->").getRegex(), kt = I("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), V = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, At = I(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", V).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), jt = I(/^!?\[(label)\]\[(ref)\]/).replace("label", V).replace("ref", Qe).getRegex(), Mt = I(/^!?\[(ref)\](?:\[\])?/).replace("ref", Qe).getRegex(), Nt = {
	_backpedal: F,
	anyPunctuation: Et,
	autolink: Dt,
	blockSkip: vt,
	br: ut,
	code: lt,
	del: F,
	emStrongLDelim: bt,
	emStrongRDelimAst: Ct,
	emStrongRDelimUnd: Tt,
	escape: ct,
	link: At,
	nolink: Mt,
	punctuation: mt,
	reflink: jt,
	reflinkSearch: I("reflink|nolink(?!\\()", "g").replace("reflink", jt).replace("nolink", Mt).getRegex(),
	tag: kt,
	text: dt,
	url: F
}, Pt = {
	...Nt,
	link: I(/^!?\[(label)\]\((.*?)\)/).replace("label", V).getRegex(),
	reflink: I(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", V).getRegex()
}, Ft = {
	...Nt,
	emStrongRDelimAst: wt,
	emStrongLDelim: xt,
	url: I(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
	text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, It = {
	...Ft,
	br: I(ut).replace("{2,}", "*").getRegex(),
	text: I(Ft.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, H = {
	normal: it,
	gfm: ot,
	pedantic: st
}, U = {
	normal: Nt,
	gfm: Ft,
	breaks: It,
	pedantic: Pt
}, Lt = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, Rt = (e) => Lt[e];
function W(e, t) {
	if (t) {
		if (L.escapeTest.test(e)) return e.replace(L.escapeReplace, Rt);
	} else if (L.escapeTestNoEncode.test(e)) return e.replace(L.escapeReplaceNoEncode, Rt);
	return e;
}
function zt(e) {
	try {
		e = encodeURI(e).replace(L.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function Bt(e, t) {
	let n = e.replace(L.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(L.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(L.slashPipe, "|");
	return n;
}
function G(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function Vt(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function Ht(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function Ut(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var K = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || P;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : G(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Ut(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = G(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: G(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = G(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d);
					for (; e;) {
						let f = e.split("\n", 1)[0], p;
						if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || t.test(l) || n.test(l)) break;
						if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						!u && !l.trim() && (u = !0), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0));
				let f = null, p;
				this.options.gfm && (f = this.rules.other.listIsTask.exec(s), f && (p = f[0] !== "[ ] ", s = s.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
					type: "list_item",
					raw: r,
					task: !!f,
					checked: p,
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e = 0; e < i.items.length; e++) if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
				let t = i.items[e].tokens.filter((e) => e.type === "space");
				i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			if (i.loose) for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) return {
			type: "html",
			block: !0,
			raw: t[0],
			pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
			text: t[0]
		};
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = Bt(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: t[0],
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(Bt(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) return {
			type: "heading",
			raw: t[0],
			depth: t[2].charAt(0) === "=" ? 1 : 2,
			text: t[1],
			tokens: this.lexer.inline(t[1])
		};
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = G(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = Vt(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), Ht(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return Ht(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (r && !(r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				}
				if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e) {
		let t = this.rules.inline.del.exec(e);
		if (t) return {
			type: "del",
			raw: t[0],
			text: t[2],
			tokens: this.lexer.inlineTokens(t[2])
		};
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, q = class e {
	tokens;
	options;
	state;
	tokenizer;
	inlineQueue;
	constructor(e) {
		this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || P, this.options.tokenizer = this.options.tokenizer || new K(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: L,
			block: H.normal,
			inline: U.normal
		};
		this.options.pedantic ? (t.block = H.pedantic, t.inline = U.pedantic) : this.options.gfm && (t.block = H.gfm, t.inline = this.options.breaks ? U.breaks : U.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: H,
			inline: U
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(L.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.options.pedantic && (e = e.replace(L.tabCharGlobal, "    ").replace(L.spaceLine, "")); e;) {
			let r;
			if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.fences(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.heading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.hr(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.blockquote(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.list(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.html(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.def(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				});
				continue;
			}
			if (r = this.tokenizer.table(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.lheading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startBlock) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += "\n" + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		let i = !1, a = "";
		for (; e;) {
			i || (a = ""), i = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, a)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let o = e;
			if (this.options.extensions?.startInline) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (o = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(o)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (a = r.raw.slice(-1)), i = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return t;
	}
}, J = class {
	options;
	parser;
	constructor(e) {
		this.options = e || P;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(L.notSpaceStart)?.[0], i = e.replace(L.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + W(r) + "\">" + (n ? i : W(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : W(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		let t = "";
		if (e.task) {
			let n = this.checkbox({ checked: !!e.checked });
			e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + W(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
				type: "text",
				raw: n + " ",
				text: n + " ",
				escaped: !0
			}) : t += n + " ";
		}
		return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${W(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = zt(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + W(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = zt(e);
		if (i === null) return W(n);
		e = i;
		let a = `<img src="${e}" alt="${n}"`;
		return t && (a += ` title="${W(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : W(e.text);
	}
}, Wt = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
}, Y = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || P, this.options.renderer = this.options.renderer || new J(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Wt();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e, t = !0) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = i, t = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (t !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"paragraph",
					"text"
				].includes(e.type)) {
					n += t || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "space":
					n += this.renderer.space(a);
					continue;
				case "hr":
					n += this.renderer.hr(a);
					continue;
				case "heading":
					n += this.renderer.heading(a);
					continue;
				case "code":
					n += this.renderer.code(a);
					continue;
				case "table":
					n += this.renderer.table(a);
					continue;
				case "blockquote":
					n += this.renderer.blockquote(a);
					continue;
				case "list":
					n += this.renderer.list(a);
					continue;
				case "html":
					n += this.renderer.html(a);
					continue;
				case "paragraph":
					n += this.renderer.paragraph(a);
					continue;
				case "text": {
					let i = a, o = this.renderer.text(i);
					for (; r + 1 < e.length && e[r + 1].type === "text";) i = e[++r], o += "\n" + this.renderer.text(i);
					n += t ? this.renderer.paragraph({
						type: "paragraph",
						raw: o,
						text: o,
						tokens: [{
							type: "text",
							raw: o,
							text: o,
							escaped: !0
						}]
					}) : o;
					continue;
				}
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
	parseInline(e, t = this.renderer) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, X = class {
	options;
	block;
	constructor(e) {
		this.options = e || P;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	provideLexer() {
		return this.block ? q.lex : q.lexInline;
	}
	provideParser() {
		return this.block ? Y.parse : Y.parseInline;
	}
}, Z = new class {
	defaults = Be();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Y;
	Renderer = J;
	TextRenderer = Wt;
	Lexer = q;
	Tokenizer = K;
	Hooks = X;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(Infinity);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new J(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new K(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new X();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = X.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async) return Promise.resolve(i.call(t, e)).then((e) => a.call(t, e));
						let n = i.call(t, e);
						return a.call(t, n);
					} : (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return q.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Y.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (t == null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			i.hooks && (i.hooks.options = i, i.hooks.block = e);
			let o = i.hooks ? i.hooks.provideLexer() : e ? q.lex : q.lexInline, s = i.hooks ? i.hooks.provideParser() : e ? Y.parse : Y.parseInline;
			if (i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then((e) => o(e, i)).then((e) => i.hooks ? i.hooks.processAllTokens(e) : e).then((e) => i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then(() => e) : e).then((e) => s(e, i)).then((e) => i.hooks ? i.hooks.postprocess(e) : e).catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let e = o(t, i);
				i.hooks && (e = i.hooks.processAllTokens(e)), i.walkTokens && this.walkTokens(e, i.walkTokens);
				let n = s(e, i);
				return i.hooks && (n = i.hooks.postprocess(n)), n;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + W(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function Q(e, t) {
	return Z.parse(e, t);
}
Q.options = Q.setOptions = function(e) {
	return Z.setOptions(e), Q.defaults = Z.defaults, Ve(Q.defaults), Q;
}, Q.getDefaults = Be, Q.defaults = P, Q.use = function(...e) {
	return Z.use(...e), Q.defaults = Z.defaults, Ve(Q.defaults), Q;
}, Q.walkTokens = function(e, t) {
	return Z.walkTokens(e, t);
}, Q.parseInline = Z.parseInline, Q.Parser = Y, Q.parser = Y.parse, Q.Renderer = J, Q.TextRenderer = Wt, Q.Lexer = q, Q.lexer = q.lex, Q.Tokenizer = K, Q.Hooks = X, Q.parse = Q, Q.options, Q.setOptions, Q.use, Q.walkTokens, Q.parseInline, Y.parse, q.lex;
//#endregion
//#region src/components/ui/toast.tsx
var $ = a(), Gt = Ne, Kt = y.forwardRef((e, n) => {
	let r = (0, $.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:w-fit md:max-w-[420px]", "print:hidden", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, b.jsx)(Pe, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
Kt.displayName = Pe.displayName;
var qt = {
	default: "bg-background border forced-colors:border-[CanvasText] forced-colors:bg-[Canvas] forced-colors:text-[CanvasText]",
	danger: "group destructive text-error border-destructive bg-(--red-1) shadow-md-solid shadow-error forced-colors:border-[CanvasText] forced-colors:bg-[Canvas] forced-colors:text-[CanvasText]"
}, Jt = r("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-start justify-between gap-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full forced-color-adjust-none", {
	variants: { variant: qt },
	defaultVariants: { variant: "default" }
});
function Yt(e) {
	return typeof e == "string" && e in qt;
}
var Xt = y.forwardRef((e, n) => {
	let r = (0, $.c)(11), i, a, o;
	r[0] === e ? (i = r[1], a = r[2], o = r[3]) : ({className: i, variant: o, ...a} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o);
	let s = Yt(o) ? o : "default", c;
	r[4] !== i || r[5] !== s ? (c = t(Jt({ variant: s }), "print:hidden", i), r[4] = i, r[5] = s, r[6] = c) : c = r[6];
	let l;
	return r[7] !== a || r[8] !== n || r[9] !== c ? (l = /* @__PURE__ */ (0, b.jsx)(Fe, {
		ref: n,
		className: c,
		...a
	}), r[7] = a, r[8] = n, r[9] = c, r[10] = l) : l = r[10], l;
});
Xt.displayName = Fe.displayName;
var Zt = y.forwardRef((e, n) => {
	let r = (0, $.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus-visible:group-[.destructive]:ring-destructive", "forced-color-adjust-none forced-colors:border-[ButtonText] forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:hover:bg-[Highlight] forced-colors:hover:text-[HighlightText] forced-colors:disabled:border-[GrayText] forced-colors:disabled:text-[GrayText]", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, b.jsx)(Re, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
Zt.displayName = Re.displayName;
var Qt = y.forwardRef((e, n) => {
	let r = (0, $.c)(10), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-500 focus-visible:group-[.destructive]:ring-red-400 focus-visible:group-[.destructive]:ring-offset-red-600", "forced-colors:text-[CanvasText] forced-colors:hover:text-[CanvasText] forced-colors:group-[.destructive]:text-[CanvasText] forced-colors:hover:group-[.destructive]:text-[CanvasText]", i), r[3] = i, r[4] = o);
	let c;
	r[5] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ (0, b.jsx)(s, { className: "h-4 w-4" }), r[5] = c) : c = r[5];
	let l;
	return r[6] !== a || r[7] !== n || r[8] !== o ? (l = /* @__PURE__ */ (0, b.jsx)(ze, {
		ref: n,
		className: o,
		"toast-close": "",
		...a,
		children: c
	}), r[6] = a, r[7] = n, r[8] = o, r[9] = l) : l = r[9], l;
});
Qt.displayName = ze.displayName;
var $t = y.forwardRef((e, n) => {
	let r = (0, $.c)(9), i, a;
	r[0] === e ? (i = r[1], a = r[2]) : ({className: i, ...a} = e, r[0] = e, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t("text-sm font-semibold", i), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== n || r[7] !== o ? (s = /* @__PURE__ */ (0, b.jsx)(Ie, {
		ref: n,
		className: o,
		...a
	}), r[5] = a, r[6] = n, r[7] = o, r[8] = s) : s = r[8], s;
});
$t.displayName = Ie.displayName;
var en = y.forwardRef((e, n) => {
	let r = (0, $.c)(13), i, a, o;
	r[0] === e ? (i = r[1], a = r[2], o = r[3]) : ({className: i, onPointerDown: a, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o);
	let s;
	r[4] === i ? s = r[5] : (s = t("max-h-48 overflow-auto text-sm opacity-90 whitespace-pre-wrap wrap-break-word select-text cursor-text", i), r[4] = i, r[5] = s);
	let c;
	r[6] === a ? c = r[7] : (c = (e) => {
		e.stopPropagation(), a?.(e);
	}, r[6] = a, r[7] = c);
	let l;
	return r[8] !== o || r[9] !== n || r[10] !== s || r[11] !== c ? (l = /* @__PURE__ */ (0, b.jsx)(Le, {
		ref: n,
		className: s,
		onPointerDown: c,
		...o
	}), r[8] = o, r[9] = n, r[10] = s, r[11] = c, r[12] = l) : l = r[12], l;
});
en.displayName = Le.displayName;
//#endregion
export { Gt as a, Q as c, en as i, Zt as n, $t as o, Qt as r, Kt as s, Xt as t };
