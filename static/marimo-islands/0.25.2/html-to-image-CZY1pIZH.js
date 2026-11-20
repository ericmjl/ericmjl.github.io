import { a as e, t } from "./rolldown-runtime-Cb76FRpK.js";
import { g as n, h as r, p as i, r as a, t as o, u as s } from "./button-CvjkwdSk.js";
import { t as c } from "./react-sHtZdjeP.js";
import { t as l } from "./compiler-runtime-CldRdSsv.js";
import { n as u, t as d } from "./copy-icon-Ft7t9bqz.js";
import { a as f, c as p, l as m, s as h, t as g } from "./chunk-YOKDWASO-DPZk8vhS.js";
import { c as _, h as v, l as y, s as b, t as x, u as ee } from "./tooltip-BO1REbqs.js";
import { A as te, E as ne, G as re, Nt as ie, O as ae, R as oe, St as se, Z as ce, Zt as le, _t as ue, en as de, et as fe, gt as pe, h as me, ht as he, lt as ge, s as _e, t as ve, vt as ye, xt as be, yt as xe, z as Se } from "./cells-C8iCYvLU.js";
import { M as Ce, O as we, k as Te } from "./select-BButFi-d.js";
import { dt as Ee, q as De } from "./dropdown-menu-CP_qCYHC.js";
import { p as Oe, v as ke } from "./toDate-BNJf01u1.js";
import { t as Ae } from "./jsx-runtime-3BD1kT0s.js";
import { Ct as je, K as Me, Q as Ne, St as S, X as Pe, Y as Fe, bt as C, ct as Ie, dt as Le, ft as Re, ht as ze, lt as Be, pt as Ve, vt as He, wt as w, xt as Ue, yt as We } from "./use-restore-focus-BEM7sFWl.js";
import { A as Ge, C as T, E as Ke, _ as E, c as qe, n as Je } from "./useTheme-CRnjkku0.js";
import { $ as Ye } from "./dist-DoE4XJBC.js";
import { t as Xe } from "./useAsyncData-Deh5kszT.js";
//#region ../node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/index.js
var Ze = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
	var t;
	(function(e) {
		e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
	})(t = e.ElementType ||= {});
	function n(e) {
		return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
	}
	e.isTag = n, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})), Qe = /* @__PURE__ */ t(((e) => {
	var t = e && e.__extends || (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}, e(t, n);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		};
	})(), n = e && e.__assign || function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.cloneNode = e.hasChildren = e.isDocument = e.isDirective = e.isComment = e.isText = e.isCDATA = e.isTag = e.Element = e.Document = e.CDATA = e.NodeWithChildren = e.ProcessingInstruction = e.Comment = e.Text = e.DataNode = e.Node = void 0;
	var r = Ze(), i = function() {
		function e() {
			this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
		}
		return Object.defineProperty(e.prototype, "parentNode", {
			get: function() {
				return this.parent;
			},
			set: function(e) {
				this.parent = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "previousSibling", {
			get: function() {
				return this.prev;
			},
			set: function(e) {
				this.prev = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "nextSibling", {
			get: function() {
				return this.next;
			},
			set: function(e) {
				this.next = e;
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.cloneNode = function(e) {
			return e === void 0 && (e = !1), b(this, e);
		}, e;
	}();
	e.Node = i;
	var a = function(e) {
		t(n, e);
		function n(t) {
			var n = e.call(this) || this;
			return n.data = t, n;
		}
		return Object.defineProperty(n.prototype, "nodeValue", {
			get: function() {
				return this.data;
			},
			set: function(e) {
				this.data = e;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(i);
	e.DataNode = a;
	var o = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Text, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 3;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.Text = o;
	var s = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Comment, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 8;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.Comment = s;
	var c = function(e) {
		t(n, e);
		function n(t, n) {
			var i = e.call(this, n) || this;
			return i.name = t, i.type = r.ElementType.Directive, i;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(a);
	e.ProcessingInstruction = c;
	var l = function(e) {
		t(n, e);
		function n(t) {
			var n = e.call(this) || this;
			return n.children = t, n;
		}
		return Object.defineProperty(n.prototype, "firstChild", {
			get: function() {
				return this.children[0] ?? null;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "lastChild", {
			get: function() {
				return this.children.length > 0 ? this.children[this.children.length - 1] : null;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "childNodes", {
			get: function() {
				return this.children;
			},
			set: function(e) {
				this.children = e;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(i);
	e.NodeWithChildren = l;
	var u = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.CDATA, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 4;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.CDATA = u;
	var d = function(e) {
		t(n, e);
		function n() {
			var t = e !== null && e.apply(this, arguments) || this;
			return t.type = r.ElementType.Root, t;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 9;
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.Document = d;
	var f = function(e) {
		t(n, e);
		function n(t, n, i, a) {
			i === void 0 && (i = []), a === void 0 && (a = t === "script" ? r.ElementType.Script : t === "style" ? r.ElementType.Style : r.ElementType.Tag);
			var o = e.call(this, i) || this;
			return o.name = t, o.attribs = n, o.type = a, o;
		}
		return Object.defineProperty(n.prototype, "nodeType", {
			get: function() {
				return 1;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "tagName", {
			get: function() {
				return this.name;
			},
			set: function(e) {
				this.name = e;
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(n.prototype, "attributes", {
			get: function() {
				var e = this;
				return Object.keys(this.attribs).map(function(t) {
					return {
						name: t,
						value: e.attribs[t],
						namespace: e["x-attribsNamespace"]?.[t],
						prefix: e["x-attribsPrefix"]?.[t]
					};
				});
			},
			enumerable: !1,
			configurable: !0
		}), n;
	}(l);
	e.Element = f;
	function p(e) {
		return (0, r.isTag)(e);
	}
	e.isTag = p;
	function m(e) {
		return e.type === r.ElementType.CDATA;
	}
	e.isCDATA = m;
	function h(e) {
		return e.type === r.ElementType.Text;
	}
	e.isText = h;
	function g(e) {
		return e.type === r.ElementType.Comment;
	}
	e.isComment = g;
	function _(e) {
		return e.type === r.ElementType.Directive;
	}
	e.isDirective = _;
	function v(e) {
		return e.type === r.ElementType.Root;
	}
	e.isDocument = v;
	function y(e) {
		return Object.prototype.hasOwnProperty.call(e, "children");
	}
	e.hasChildren = y;
	function b(e, t) {
		t === void 0 && (t = !1);
		var r;
		if (h(e)) r = new o(e.data);
		else if (g(e)) r = new s(e.data);
		else if (p(e)) {
			var i = t ? x(e.children) : [], a = new f(e.name, n({}, e.attribs), i);
			i.forEach(function(e) {
				return e.parent = a;
			}), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = n({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = n({}, e["x-attribsPrefix"])), r = a;
		} else if (m(e)) {
			var i = t ? x(e.children) : [], l = new u(i);
			i.forEach(function(e) {
				return e.parent = l;
			}), r = l;
		} else if (v(e)) {
			var i = t ? x(e.children) : [], y = new d(i);
			i.forEach(function(e) {
				return e.parent = y;
			}), e["x-mode"] && (y["x-mode"] = e["x-mode"]), r = y;
		} else if (_(e)) {
			var b = new c(e.name, e.data);
			e["x-name"] != null && (b["x-name"] = e["x-name"], b["x-publicId"] = e["x-publicId"], b["x-systemId"] = e["x-systemId"]), r = b;
		} else throw Error(`Not implemented yet: ${e.type}`);
		return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
	}
	e.cloneNode = b;
	function x(e) {
		for (var t = e.map(function(e) {
			return b(e, !0);
		}), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
		return t;
	}
})), $e = /* @__PURE__ */ t(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
	var r = Ze(), i = Qe();
	n(Qe(), e);
	var a = {
		withStartIndices: !1,
		withEndIndices: !1,
		xmlMode: !1
	}, o = function() {
		function e(e, t, n) {
			this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (n = t, t = a), typeof e == "object" && (t = e, e = void 0), this.callback = e ?? null, this.options = t ?? a, this.elementCB = n ?? null;
		}
		return e.prototype.onparserinit = function(e) {
			this.parser = e;
		}, e.prototype.onreset = function() {
			this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
		}, e.prototype.onend = function() {
			this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
		}, e.prototype.onerror = function(e) {
			this.handleCallback(e);
		}, e.prototype.onclosetag = function() {
			this.lastNode = null;
			var e = this.tagStack.pop();
			this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
		}, e.prototype.onopentag = function(e, t) {
			var n = this.options.xmlMode ? r.ElementType.Tag : void 0, a = new i.Element(e, t, void 0, n);
			this.addNode(a), this.tagStack.push(a);
		}, e.prototype.ontext = function(e) {
			var t = this.lastNode;
			if (t && t.type === r.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
			else {
				var n = new i.Text(e);
				this.addNode(n), this.lastNode = n;
			}
		}, e.prototype.oncomment = function(e) {
			if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
				this.lastNode.data += e;
				return;
			}
			var t = new i.Comment(e);
			this.addNode(t), this.lastNode = t;
		}, e.prototype.oncommentend = function() {
			this.lastNode = null;
		}, e.prototype.oncdatastart = function() {
			var e = new i.Text(""), t = new i.CDATA([e]);
			this.addNode(t), e.parent = t, this.lastNode = e;
		}, e.prototype.oncdataend = function() {
			this.lastNode = null;
		}, e.prototype.onprocessinginstruction = function(e, t) {
			var n = new i.ProcessingInstruction(e, t);
			this.addNode(n);
		}, e.prototype.handleCallback = function(e) {
			if (typeof this.callback == "function") this.callback(e, this.dom);
			else if (e) throw e;
		}, e.prototype.addNode = function(e) {
			var t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
			this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
		}, e;
	}();
	e.DomHandler = o, e.default = o;
})), et = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = e.CARRIAGE_RETURN_PLACEHOLDER = e.CARRIAGE_RETURN_REGEX = e.CARRIAGE_RETURN = e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = /* @__PURE__ */ "animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath".split("."), e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(e, t) {
		return e[t.toLowerCase()] = t, e;
	}, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = `__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`, e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
})), tt = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatAttributes = i, e.hasOpenTag = o, e.escapeSpecialCharacters = s, e.revertEscapedCharacters = c, e.formatDOM = l;
	var t = $e(), n = et();
	function r(e) {
		return n.CASE_SENSITIVE_TAG_NAMES_MAP[e];
	}
	function i(e) {
		for (var t = {}, n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			t[i.name] = i.value;
		}
		return t;
	}
	function a(e) {
		return e = e.toLowerCase(), r(e) || e;
	}
	function o(e, t) {
		var n = "<" + t, r = e.toLowerCase().indexOf(n);
		if (r === -1) return !1;
		var i = e[r + n.length];
		return i === ">" || i === " " || i === "	" || i === "\n" || i === "\r" || i === "/";
	}
	function s(e) {
		return e.replace(n.CARRIAGE_RETURN_REGEX, n.CARRIAGE_RETURN_PLACEHOLDER);
	}
	function c(e) {
		return e.replace(n.CARRIAGE_RETURN_PLACEHOLDER_REGEX, n.CARRIAGE_RETURN);
	}
	function l(e, n, r) {
		n === void 0 && (n = null);
		for (var o = [], s, u = 0, d = e.length; u < d; u++) {
			var f = e[u];
			switch (f.nodeType) {
				case 1:
					var p = a(f.nodeName);
					s = new t.Element(p, i(f.attributes)), s.children = l(p === "template" ? f.content.childNodes : f.childNodes, s);
					break;
				case 3:
					s = new t.Text(c(f.nodeValue ?? ""));
					break;
				case 8:
					s = new t.Comment(f.nodeValue ?? "");
					break;
				default: continue;
			}
			var m = o[u - 1] ?? null;
			m && (m.next = s), s.parent = n, s.prev = m, s.next = null, o.push(s);
		}
		return r && (s = new t.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), s.next = o[0] ?? null, s.parent = n, o.unshift(s), o[1] && (o[1].prev = o[0])), o;
	}
})), nt = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = h;
	var t = tt(), n = "html", r = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/, o = function(e, t) {
		throw Error("This browser does not support `document.implementation.createHTMLDocument`");
	}, s = function(e, t) {
		throw Error("This browser does not support `DOMParser.prototype.parseFromString`");
	}, c = typeof window == "object" && window.DOMParser;
	if (typeof c == "function") {
		var l = new c(), u = "text/html";
		s = function(e, t) {
			/* istanbul ignore stop */
			return t && (e = `<${t}>${e}</${t}>`), l.parseFromString(e, u);
		}, o = s;
	}
	if (typeof document == "object" && document.implementation) {
		var d = document.implementation.createHTMLDocument();
		o = function(e, t) {
			/* istanbul ignore start */
			if (t) {
				var n = d.documentElement.querySelector(t);
				return n && (n.innerHTML = e), d;
			}
			return d.documentElement.innerHTML = e, d;
		};
	}
	var f = typeof document == "object" && document.createElement("template"), p;
	f && f.content && (p = function(e) {
		return f.innerHTML = e, f.content.childNodes;
	});
	var m = function() {
		return document.createDocumentFragment().childNodes;
	};
	function h(e) {
		var c, l;
		e = (0, t.escapeSpecialCharacters)(e);
		var u = (a.exec(e)?.[1])?.toLowerCase();
		switch (u) {
			case n:
				var d = s(e);
				if (!(0, t.hasOpenTag)(e, r)) {
					var f = d.querySelector(r);
					/* istanbul ignore next */
					(c = f?.parentNode) == null || c.removeChild(f);
				}
				if (!(0, t.hasOpenTag)(e, i)) {
					var f = d.querySelector(i);
					/* istanbul ignore next */
					(l = f?.parentNode) == null || l.removeChild(f);
				}
				return d.querySelectorAll(n);
			case r:
			case i:
				var h = o(e).querySelectorAll(u);
				return (0, t.hasOpenTag)(e, i) && (0, t.hasOpenTag)(e, r) ? h[0].parentNode?.childNodes ?? m() : h;
			default:
				if (p) return p(e);
				/* istanbul ignore start */
				var f = o(e, i).querySelector(i);
				return f?.childNodes ?? m();
		}
	}
})), rt = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = a;
	var n = t(nt()), r = tt(), i = /<(![a-zA-Z\s]+)>/;
	function a(e) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		var t = i.exec(e), a = t ? t[1] : void 0;
		return (0, r.formatDOM)((0, n.default)(e), null, a);
	}
})), it = /* @__PURE__ */ t(((e) => {
	e.SAME = 0, e.CAMELCASE = 1, e.possibleStandardNames = {
		accept: 0,
		acceptCharset: 1,
		"accept-charset": "acceptCharset",
		accessKey: 1,
		action: 0,
		allowFullScreen: 1,
		alt: 0,
		as: 0,
		async: 0,
		autoCapitalize: 1,
		autoComplete: 1,
		autoCorrect: 1,
		autoFocus: 1,
		autoPlay: 1,
		autoSave: 1,
		capture: 0,
		cellPadding: 1,
		cellSpacing: 1,
		challenge: 0,
		charSet: 1,
		checked: 0,
		children: 0,
		cite: 0,
		class: "className",
		classID: 1,
		className: 1,
		cols: 0,
		colSpan: 1,
		content: 0,
		contentEditable: 1,
		contextMenu: 1,
		controls: 0,
		controlsList: 1,
		coords: 0,
		crossOrigin: 1,
		dangerouslySetInnerHTML: 1,
		data: 0,
		dateTime: 1,
		default: 0,
		defaultChecked: 1,
		defaultValue: 1,
		defer: 0,
		dir: 0,
		disabled: 0,
		disablePictureInPicture: 1,
		disableRemotePlayback: 1,
		download: 0,
		draggable: 0,
		encType: 1,
		enterKeyHint: 1,
		for: "htmlFor",
		form: 0,
		formMethod: 1,
		formAction: 1,
		formEncType: 1,
		formNoValidate: 1,
		formTarget: 1,
		frameBorder: 1,
		headers: 0,
		height: 0,
		hidden: 0,
		high: 0,
		href: 0,
		hrefLang: 1,
		htmlFor: 1,
		httpEquiv: 1,
		"http-equiv": "httpEquiv",
		icon: 0,
		id: 0,
		innerHTML: 1,
		inputMode: 1,
		integrity: 0,
		is: 0,
		itemID: 1,
		itemProp: 1,
		itemRef: 1,
		itemScope: 1,
		itemType: 1,
		keyParams: 1,
		keyType: 1,
		kind: 0,
		label: 0,
		lang: 0,
		list: 0,
		loop: 0,
		low: 0,
		manifest: 0,
		marginWidth: 1,
		marginHeight: 1,
		max: 0,
		maxLength: 1,
		media: 0,
		mediaGroup: 1,
		method: 0,
		min: 0,
		minLength: 1,
		multiple: 0,
		muted: 0,
		name: 0,
		noModule: 1,
		nonce: 0,
		noValidate: 1,
		open: 0,
		optimum: 0,
		pattern: 0,
		placeholder: 0,
		playsInline: 1,
		poster: 0,
		preload: 0,
		profile: 0,
		radioGroup: 1,
		readOnly: 1,
		referrerPolicy: 1,
		rel: 0,
		required: 0,
		reversed: 0,
		role: 0,
		rows: 0,
		rowSpan: 1,
		sandbox: 0,
		scope: 0,
		scoped: 0,
		scrolling: 0,
		seamless: 0,
		selected: 0,
		shape: 0,
		size: 0,
		sizes: 0,
		span: 0,
		spellCheck: 1,
		src: 0,
		srcDoc: 1,
		srcLang: 1,
		srcSet: 1,
		start: 0,
		step: 0,
		style: 0,
		summary: 0,
		tabIndex: 1,
		target: 0,
		title: 0,
		type: 0,
		useMap: 1,
		value: 0,
		width: 0,
		wmode: 0,
		wrap: 0,
		about: 0,
		accentHeight: 1,
		"accent-height": "accentHeight",
		accumulate: 0,
		additive: 0,
		alignmentBaseline: 1,
		"alignment-baseline": "alignmentBaseline",
		allowReorder: 1,
		alphabetic: 0,
		amplitude: 0,
		arabicForm: 1,
		"arabic-form": "arabicForm",
		ascent: 0,
		attributeName: 1,
		attributeType: 1,
		autoReverse: 1,
		azimuth: 0,
		baseFrequency: 1,
		baselineShift: 1,
		"baseline-shift": "baselineShift",
		baseProfile: 1,
		bbox: 0,
		begin: 0,
		bias: 0,
		by: 0,
		calcMode: 1,
		capHeight: 1,
		"cap-height": "capHeight",
		clip: 0,
		clipPath: 1,
		"clip-path": "clipPath",
		clipPathUnits: 1,
		clipRule: 1,
		"clip-rule": "clipRule",
		color: 0,
		colorInterpolation: 1,
		"color-interpolation": "colorInterpolation",
		colorInterpolationFilters: 1,
		"color-interpolation-filters": "colorInterpolationFilters",
		colorProfile: 1,
		"color-profile": "colorProfile",
		colorRendering: 1,
		"color-rendering": "colorRendering",
		contentScriptType: 1,
		contentStyleType: 1,
		cursor: 0,
		cx: 0,
		cy: 0,
		d: 0,
		datatype: 0,
		decelerate: 0,
		descent: 0,
		diffuseConstant: 1,
		direction: 0,
		display: 0,
		divisor: 0,
		dominantBaseline: 1,
		"dominant-baseline": "dominantBaseline",
		dur: 0,
		dx: 0,
		dy: 0,
		edgeMode: 1,
		elevation: 0,
		enableBackground: 1,
		"enable-background": "enableBackground",
		end: 0,
		exponent: 0,
		externalResourcesRequired: 1,
		fill: 0,
		fillOpacity: 1,
		"fill-opacity": "fillOpacity",
		fillRule: 1,
		"fill-rule": "fillRule",
		filter: 0,
		filterRes: 1,
		filterUnits: 1,
		floodOpacity: 1,
		"flood-opacity": "floodOpacity",
		floodColor: 1,
		"flood-color": "floodColor",
		focusable: 0,
		fontFamily: 1,
		"font-family": "fontFamily",
		fontSize: 1,
		"font-size": "fontSize",
		fontSizeAdjust: 1,
		"font-size-adjust": "fontSizeAdjust",
		fontStretch: 1,
		"font-stretch": "fontStretch",
		fontStyle: 1,
		"font-style": "fontStyle",
		fontVariant: 1,
		"font-variant": "fontVariant",
		fontWeight: 1,
		"font-weight": "fontWeight",
		format: 0,
		from: 0,
		fx: 0,
		fy: 0,
		g1: 0,
		g2: 0,
		glyphName: 1,
		"glyph-name": "glyphName",
		glyphOrientationHorizontal: 1,
		"glyph-orientation-horizontal": "glyphOrientationHorizontal",
		glyphOrientationVertical: 1,
		"glyph-orientation-vertical": "glyphOrientationVertical",
		glyphRef: 1,
		gradientTransform: 1,
		gradientUnits: 1,
		hanging: 0,
		horizAdvX: 1,
		"horiz-adv-x": "horizAdvX",
		horizOriginX: 1,
		"horiz-origin-x": "horizOriginX",
		ideographic: 0,
		imageRendering: 1,
		"image-rendering": "imageRendering",
		in2: 0,
		in: 0,
		inlist: 0,
		intercept: 0,
		k1: 0,
		k2: 0,
		k3: 0,
		k4: 0,
		k: 0,
		kernelMatrix: 1,
		kernelUnitLength: 1,
		kerning: 0,
		keyPoints: 1,
		keySplines: 1,
		keyTimes: 1,
		lengthAdjust: 1,
		letterSpacing: 1,
		"letter-spacing": "letterSpacing",
		lightingColor: 1,
		"lighting-color": "lightingColor",
		limitingConeAngle: 1,
		local: 0,
		markerEnd: 1,
		"marker-end": "markerEnd",
		markerHeight: 1,
		markerMid: 1,
		"marker-mid": "markerMid",
		markerStart: 1,
		"marker-start": "markerStart",
		markerUnits: 1,
		markerWidth: 1,
		mask: 0,
		maskContentUnits: 1,
		maskUnits: 1,
		mathematical: 0,
		mode: 0,
		numOctaves: 1,
		offset: 0,
		opacity: 0,
		operator: 0,
		order: 0,
		orient: 0,
		orientation: 0,
		origin: 0,
		overflow: 0,
		overlinePosition: 1,
		"overline-position": "overlinePosition",
		overlineThickness: 1,
		"overline-thickness": "overlineThickness",
		paintOrder: 1,
		"paint-order": "paintOrder",
		panose1: 0,
		"panose-1": "panose1",
		pathLength: 1,
		patternContentUnits: 1,
		patternTransform: 1,
		patternUnits: 1,
		pointerEvents: 1,
		"pointer-events": "pointerEvents",
		points: 0,
		pointsAtX: 1,
		pointsAtY: 1,
		pointsAtZ: 1,
		prefix: 0,
		preserveAlpha: 1,
		preserveAspectRatio: 1,
		primitiveUnits: 1,
		property: 0,
		r: 0,
		radius: 0,
		refX: 1,
		refY: 1,
		renderingIntent: 1,
		"rendering-intent": "renderingIntent",
		repeatCount: 1,
		repeatDur: 1,
		requiredExtensions: 1,
		requiredFeatures: 1,
		resource: 0,
		restart: 0,
		result: 0,
		results: 0,
		rotate: 0,
		rx: 0,
		ry: 0,
		scale: 0,
		security: 0,
		seed: 0,
		shapeRendering: 1,
		"shape-rendering": "shapeRendering",
		slope: 0,
		spacing: 0,
		specularConstant: 1,
		specularExponent: 1,
		speed: 0,
		spreadMethod: 1,
		startOffset: 1,
		stdDeviation: 1,
		stemh: 0,
		stemv: 0,
		stitchTiles: 1,
		stopColor: 1,
		"stop-color": "stopColor",
		stopOpacity: 1,
		"stop-opacity": "stopOpacity",
		strikethroughPosition: 1,
		"strikethrough-position": "strikethroughPosition",
		strikethroughThickness: 1,
		"strikethrough-thickness": "strikethroughThickness",
		string: 0,
		stroke: 0,
		strokeDasharray: 1,
		"stroke-dasharray": "strokeDasharray",
		strokeDashoffset: 1,
		"stroke-dashoffset": "strokeDashoffset",
		strokeLinecap: 1,
		"stroke-linecap": "strokeLinecap",
		strokeLinejoin: 1,
		"stroke-linejoin": "strokeLinejoin",
		strokeMiterlimit: 1,
		"stroke-miterlimit": "strokeMiterlimit",
		strokeWidth: 1,
		"stroke-width": "strokeWidth",
		strokeOpacity: 1,
		"stroke-opacity": "strokeOpacity",
		suppressContentEditableWarning: 1,
		suppressHydrationWarning: 1,
		surfaceScale: 1,
		systemLanguage: 1,
		tableValues: 1,
		targetX: 1,
		targetY: 1,
		textAnchor: 1,
		"text-anchor": "textAnchor",
		textDecoration: 1,
		"text-decoration": "textDecoration",
		textLength: 1,
		textRendering: 1,
		"text-rendering": "textRendering",
		to: 0,
		transform: 0,
		typeof: 0,
		u1: 0,
		u2: 0,
		underlinePosition: 1,
		"underline-position": "underlinePosition",
		underlineThickness: 1,
		"underline-thickness": "underlineThickness",
		unicode: 0,
		unicodeBidi: 1,
		"unicode-bidi": "unicodeBidi",
		unicodeRange: 1,
		"unicode-range": "unicodeRange",
		unitsPerEm: 1,
		"units-per-em": "unitsPerEm",
		unselectable: 0,
		vAlphabetic: 1,
		"v-alphabetic": "vAlphabetic",
		values: 0,
		vectorEffect: 1,
		"vector-effect": "vectorEffect",
		version: 0,
		vertAdvY: 1,
		"vert-adv-y": "vertAdvY",
		vertOriginX: 1,
		"vert-origin-x": "vertOriginX",
		vertOriginY: 1,
		"vert-origin-y": "vertOriginY",
		vHanging: 1,
		"v-hanging": "vHanging",
		vIdeographic: 1,
		"v-ideographic": "vIdeographic",
		viewBox: 1,
		viewTarget: 1,
		visibility: 0,
		vMathematical: 1,
		"v-mathematical": "vMathematical",
		vocab: 0,
		widths: 0,
		wordSpacing: 1,
		"word-spacing": "wordSpacing",
		writingMode: 1,
		"writing-mode": "writingMode",
		x1: 0,
		x2: 0,
		x: 0,
		xChannelSelector: 1,
		xHeight: 1,
		"x-height": "xHeight",
		xlinkActuate: 1,
		"xlink:actuate": "xlinkActuate",
		xlinkArcrole: 1,
		"xlink:arcrole": "xlinkArcrole",
		xlinkHref: 1,
		"xlink:href": "xlinkHref",
		xlinkRole: 1,
		"xlink:role": "xlinkRole",
		xlinkShow: 1,
		"xlink:show": "xlinkShow",
		xlinkTitle: 1,
		"xlink:title": "xlinkTitle",
		xlinkType: 1,
		"xlink:type": "xlinkType",
		xmlBase: 1,
		"xml:base": "xmlBase",
		xmlLang: 1,
		"xml:lang": "xmlLang",
		xmlns: 0,
		"xml:space": "xmlSpace",
		xmlnsXlink: 1,
		"xmlns:xlink": "xmlnsXlink",
		xmlSpace: 1,
		y1: 0,
		y2: 0,
		y: 0,
		yChannelSelector: 1,
		z: 0,
		zoomAndPan: 1
	};
})), at = /* @__PURE__ */ t(((e) => {
	var t = 0, n = 1, r = 2, i = 3, a = 4, o = 5, s = 6;
	function c(e) {
		return u.hasOwnProperty(e) ? u[e] : null;
	}
	function l(e, t, n, o, s, c, l) {
		this.acceptsBooleans = t === r || t === i || t === a, this.attributeName = o, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = l;
	}
	var u = {};
	[
		"children",
		"dangerouslySetInnerHTML",
		"defaultValue",
		"defaultChecked",
		"innerHTML",
		"suppressContentEditableWarning",
		"suppressHydrationWarning",
		"style"
	].forEach((e) => {
		u[e] = new l(e, t, !1, e, null, !1, !1);
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(([e, t]) => {
		u[e] = new l(e, n, !1, t, null, !1, !1);
	}), [
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach((e) => {
		u[e] = new l(e, r, !1, e, null, !1, !1);
	}), [
		"allowFullScreen",
		"async",
		"autoFocus",
		"autoPlay",
		"controls",
		"default",
		"defer",
		"disabled",
		"disablePictureInPicture",
		"disableRemotePlayback",
		"formNoValidate",
		"hidden",
		"loop",
		"noModule",
		"noValidate",
		"open",
		"playsInline",
		"readOnly",
		"required",
		"reversed",
		"scoped",
		"seamless",
		"itemScope"
	].forEach((e) => {
		u[e] = new l(e, i, !1, e.toLowerCase(), null, !1, !1);
	}), [
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach((e) => {
		u[e] = new l(e, i, !0, e, null, !1, !1);
	}), ["capture", "download"].forEach((e) => {
		u[e] = new l(e, a, !1, e, null, !1, !1);
	}), [
		"cols",
		"rows",
		"size",
		"span"
	].forEach((e) => {
		u[e] = new l(e, s, !1, e, null, !1, !1);
	}), ["rowSpan", "start"].forEach((e) => {
		u[e] = new l(e, o, !1, e.toLowerCase(), null, !1, !1);
	});
	var d = /[\-\:]([a-z])/g, f = (e) => e[1].toUpperCase();
	(/* @__PURE__ */ "accent-height.alignment-baseline.arabic-form.baseline-shift.cap-height.clip-path.clip-rule.color-interpolation.color-interpolation-filters.color-profile.color-rendering.dominant-baseline.enable-background.fill-opacity.fill-rule.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.glyph-name.glyph-orientation-horizontal.glyph-orientation-vertical.horiz-adv-x.horiz-origin-x.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.overline-position.overline-thickness.paint-order.panose-1.pointer-events.rendering-intent.shape-rendering.stop-color.stop-opacity.strikethrough-position.strikethrough-thickness.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-rendering.underline-position.underline-thickness.unicode-bidi.unicode-range.units-per-em.v-alphabetic.v-hanging.v-ideographic.v-mathematical.vector-effect.vert-adv-y.vert-origin-x.vert-origin-y.word-spacing.writing-mode.xmlns:xlink.x-height".split(".")).forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, null, !1, !1);
	}), [
		"xlink:actuate",
		"xlink:arcrole",
		"xlink:role",
		"xlink:show",
		"xlink:title",
		"xlink:type"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	}), [
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach((e) => {
		let t = e.replace(d, f);
		u[t] = new l(t, n, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
	}), ["tabIndex", "crossOrigin"].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !1, !1);
	});
	var p = "xlinkHref";
	u[p] = new l("xlinkHref", n, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), [
		"src",
		"href",
		"action",
		"formAction"
	].forEach((e) => {
		u[e] = new l(e, n, !1, e.toLowerCase(), null, !0, !0);
	});
	var { CAMELCASE: m, SAME: h, possibleStandardNames: g } = it(), _ = RegExp.prototype.test.bind(/* @__PURE__ */ RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), v = Object.keys(g).reduce((e, t) => {
		let n = g[t];
		return n === h ? e[t] = t : n === m ? e[t.toLowerCase()] = t : e[t] = n, e;
	}, {});
	e.BOOLEAN = i, e.BOOLEANISH_STRING = r, e.NUMERIC = o, e.OVERLOADED_BOOLEAN = a, e.POSITIVE_NUMERIC = s, e.RESERVED = t, e.STRING = n, e.getPropertyInfo = c, e.isCustomAttribute = _, e.possibleStandardNames = v;
})), ot = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = a, e.setStyleProp = s;
	var n = c(), r = t(m()), i = /* @__PURE__ */ new Set([
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-src",
		"font-face-uri",
		"font-face-format",
		"font-face-name",
		"missing-glyph"
	]);
	function a(e, t) {
		return e.includes("-") ? !i.has(e) : !!(t && typeof t.is == "string");
	}
	var o = { reactCompat: !0 };
	function s(e, t) {
		if (typeof e == "string") {
			if (!e.trim()) {
				t.style = {};
				return;
			}
			try {
				t.style = (0, r.default)(e, o);
			} catch {
				t.style = {};
			}
		}
	}
	e.PRESERVE_CUSTOM_ATTRIBUTES = Number(n.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
		"tr",
		"tbody",
		"thead",
		"tfoot",
		"colgroup",
		"table",
		"head",
		"html",
		"frameset"
	]), e.canTextBeChildOfNode = function(t) {
		return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name);
	}, e.returnFirstArg = function(e) {
		return e;
	};
})), st = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var t = at(), n = ot(), r = ["checked", "value"], i = [
		"input",
		"select",
		"textarea"
	], a = {
		reset: !0,
		submit: !0
	};
	function o(e, o) {
		e === void 0 && (e = {});
		var c = {}, l = !!(e.type && a[e.type]);
		for (var u in e) {
			var d = e[u];
			if ((0, t.isCustomAttribute)(u)) {
				c[u] = d;
				continue;
			}
			var f = u.toLowerCase(), p = s(f);
			if (p) {
				var m = (0, t.getPropertyInfo)(p);
				switch (r.includes(p) && i.includes(o) && !l && (p = s("default" + f)), c[p] = d, m?.type) {
					case t.BOOLEAN:
						c[p] = !0;
						break;
					case t.OVERLOADED_BOOLEAN: d === "" && (c[p] = !0);
				}
				continue;
			}
			n.PRESERVE_CUSTOM_ATTRIBUTES && (c[u] = d);
		}
		return (0, n.setStyleProp)(e.style, c), c;
	}
	function s(e) {
		return t.possibleStandardNames[e];
	}
})), ct = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = o;
	var n = c(), r = t(st()), i = ot(), a = {
		cloneElement: n.cloneElement,
		createElement: n.createElement,
		isValidElement: n.isValidElement
	};
	function o(e, t) {
		t === void 0 && (t = {});
		for (var n = [], c = typeof t.replace == "function", l = t.transform ?? i.returnFirstArg, u = t.library ?? a, d = u.cloneElement, f = u.createElement, p = u.isValidElement, m = e.length, h = 0; h < m; h++) {
			var g = e[h];
			if (c) {
				var _ = t.replace?.call(t, g, h);
				if (p(_)) {
					m > 1 && (_ = d(_, { key: _.key ?? h })), n.push(l(_, g, h));
					continue;
				}
			}
			if (g.type === "text") {
				var v = !g.data.trim().length;
				if (v && g.parent && !(0, i.canTextBeChildOfNode)(g.parent) || t.trim && v) continue;
				n.push(l(g.data, g, h));
				continue;
			}
			var y = g, b = {};
			s(y) ? ((0, i.setStyleProp)(y.attribs.style, y.attribs), b = y.attribs) : y.attribs && (b = (0, r.default)(y.attribs, y.name));
			var x = void 0;
			switch (g.type) {
				case "script":
				case "style":
					g.children[0] && (b.dangerouslySetInnerHTML = { __html: g.children[0].data });
					break;
				case "tag":
					g.name === "textarea" && g.children[0] ? b.defaultValue = g.children[0].data : g.children?.length && (x = o(g.children, t));
					break;
				default: continue;
			}
			m > 1 && (b.key = h), n.push(l(f(g.name, b, x), g, h));
		}
		return n.length === 1 ? n[0] : n;
	}
	function s(e) {
		return i.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && (0, i.isCustomComponent)(e.name, e.attribs);
	}
})), lt = /* @__PURE__ */ t(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = o;
	var n = t(rt());
	e.htmlToDOM = n.default, e.attributesToProps = t(st()).default;
	var r = t(ct());
	e.domToReact = r.default;
	var i = $e();
	Object.defineProperty(e, "Comment", {
		enumerable: !0,
		get: function() {
			return i.Comment;
		}
	}), Object.defineProperty(e, "Element", {
		enumerable: !0,
		get: function() {
			return i.Element;
		}
	}), Object.defineProperty(e, "ProcessingInstruction", {
		enumerable: !0,
		get: function() {
			return i.ProcessingInstruction;
		}
	}), Object.defineProperty(e, "Text", {
		enumerable: !0,
		get: function() {
			return i.Text;
		}
	});
	var a = { lowerCaseAttributeNames: !1 };
	function o(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		return e ? (0, r.default)((0, n.default)(e, t?.htmlparser2 ?? a), t) : [];
	}
})), D = /* @__PURE__ */ e(c(), 1), O = l(), k = /* @__PURE__ */ e(lt(), 1), ut = k.default.default || k.default, dt = v("between-horizontal-start", [
	["rect", {
		width: "13",
		height: "7",
		x: "8",
		y: "3",
		rx: "1",
		key: "pkso9a"
	}],
	["path", {
		d: "m2 9 3 3-3 3",
		key: "1agib5"
	}],
	["rect", {
		width: "13",
		height: "7",
		x: "8",
		y: "14",
		rx: "1",
		key: "1q5fc1"
	}]
]), ft = v("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), pt = v("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), mt = v("wrench", [["path", {
	d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
	key: "1ngwbx"
}]]), A = Ae(), ht = Object.defineProperty, j = (e, t) => ht(e, "name", {
	value: t,
	configurable: !0
}), M = "Collapsible", [gt, _t] = je(M), [vt, N] = gt(M), yt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ j(function(e, t) {
	let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e, [c, l] = C({
		prop: r,
		defaultProp: i ?? !1,
		onChange: o,
		caller: M
	});
	return /* @__PURE__ */ (0, A.jsx)(vt, {
		scope: n,
		disabled: a,
		contentId: He(),
		open: c,
		onOpenToggle: D.useCallback(() => l((e) => !e), [l]),
		children: /* @__PURE__ */ (0, A.jsx)(w.div, {
			"data-state": P(c),
			"data-disabled": a ? "" : void 0,
			...s,
			ref: t
		})
	});
}, "Collapsible")), bt = "CollapsibleTrigger", xt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ j(function(e, t) {
	let { __scopeCollapsible: n, ...r } = e, i = N(bt, n);
	return /* @__PURE__ */ (0, A.jsx)(w.button, {
		type: "button",
		"aria-controls": i.open ? i.contentId : void 0,
		"aria-expanded": i.open || !1,
		"data-state": P(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: S(e.onClick, i.onOpenToggle)
	});
}, "CollapsibleTrigger")), St = "CollapsibleContent", Ct = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ j(function(e, t) {
	let { forceMount: n, ...r } = e, i = N(St, e.__scopeCollapsible);
	return /* @__PURE__ */ (0, A.jsx)(We, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ (0, A.jsx)(wt, {
			...r,
			ref: t,
			present: e
		})
	});
}, "CollapsibleContent")), wt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ j(function(e, t) {
	let { __scopeCollapsible: n, present: r, children: a, ...o } = e, s = N(St, n), [c, l] = D.useState(r), u = D.useRef(null), d = i(t, u), f = D.useRef(0), p = f.current, m = D.useRef(0), h = m.current, g = s.open || c, _ = D.useRef(g), v = D.useRef(void 0);
	return D.useEffect(() => {
		let e = requestAnimationFrame(() => _.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), Ue(() => {
		let e = u.current;
		if (e) {
			v.current = v.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			f.current = t.height, m.current = t.width, _.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), l(r);
		}
	}, [s.open, r]), /* @__PURE__ */ (0, A.jsx)(w.div, {
		"data-state": P(s.open),
		"data-disabled": s.disabled ? "" : void 0,
		id: s.contentId,
		hidden: !g,
		...o,
		ref: d,
		style: {
			"--radix-collapsible-content-height": p ? `${p}px` : void 0,
			"--radix-collapsible-content-width": h ? `${h}px` : void 0,
			...e.style
		},
		children: g && a
	});
}, "CollapsibleContentImpl"));
function P(e) {
	return e ? "open" : "closed";
}
j(P, "getState");
var Tt = yt, Et = xt, Dt = Ct, Ot = Object.defineProperty, F = (e, t) => Ot(e, "name", {
	value: t,
	configurable: !0
}), I = "Accordion", kt = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [At, jt, Mt] = Te(I), [L, Nt] = je(I, [Mt, _t]), Pt = _t(), Ft = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ (0, A.jsx)(At.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ (0, A.jsx)(Vt, {
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, A.jsx)(Bt, {
			...i,
			ref: t
		})
	});
}, "Accordion")), [It, Lt] = L(I), [Rt, zt] = L(I, { collapsible: !1 }), Bt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { value: n, defaultValue: r, onValueChange: i = /* @__PURE__ */ F(() => {}, "onValueChange"), collapsible: a = !1, ...o } = e, [s, c] = C({
		prop: n,
		defaultProp: r ?? "",
		onChange: i,
		caller: I
	});
	return /* @__PURE__ */ (0, A.jsx)(It, {
		scope: e.__scopeAccordion,
		value: D.useMemo(() => s ? [s] : [], [s]),
		onItemOpen: c,
		onItemClose: D.useCallback(() => a && c(""), [a, c]),
		children: /* @__PURE__ */ (0, A.jsx)(Rt, {
			scope: e.__scopeAccordion,
			collapsible: a,
			children: /* @__PURE__ */ (0, A.jsx)(Ut, {
				...o,
				ref: t
			})
		})
	});
}, "AccordionImplSingle")), Vt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { value: n, defaultValue: r, onValueChange: i = /* @__PURE__ */ F(() => {}, "onValueChange"), ...a } = e, [o, s] = C({
		prop: n,
		defaultProp: r ?? [],
		onChange: i,
		caller: I
	}), c = D.useCallback((e) => s((t = []) => [...t, e]), [s]), l = D.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
	return /* @__PURE__ */ (0, A.jsx)(It, {
		scope: e.__scopeAccordion,
		value: o,
		onItemOpen: c,
		onItemClose: l,
		children: /* @__PURE__ */ (0, A.jsx)(Rt, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ (0, A.jsx)(Ut, {
				...a,
				ref: t
			})
		})
	});
}, "AccordionImplMultiple")), [Ht, R] = L(I), Ut = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { __scopeAccordion: n, disabled: r, dir: a, orientation: o = "vertical", ...s } = e, c = D.useRef(null), l = i(c, t), u = jt(n), d = we(a) === "ltr", f = S(e.onKeyDown, (e) => {
		if (!kt.includes(e.key)) return;
		let t = e.target, n = u().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let a = r, s = i - 1, c = /* @__PURE__ */ F(() => {
			a = r + 1, a > s && (a = 0);
		}, "moveNext"), l = /* @__PURE__ */ F(() => {
			a = r - 1, a < 0 && (a = s);
		}, "movePrev");
		switch (e.key) {
			case "Home":
				a = 0;
				break;
			case "End":
				a = s;
				break;
			case "ArrowRight":
				o === "horizontal" && (d ? c() : l());
				break;
			case "ArrowDown":
				o === "vertical" && c();
				break;
			case "ArrowLeft":
				o === "horizontal" && (d ? l() : c());
				break;
			case "ArrowUp": o === "vertical" && l();
		}
		n[a % i].ref.current?.focus();
	});
	return /* @__PURE__ */ (0, A.jsx)(Ht, {
		scope: n,
		disabled: r,
		direction: a,
		orientation: o,
		children: /* @__PURE__ */ (0, A.jsx)(At.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, A.jsx)(w.div, {
				...s,
				"data-orientation": o,
				ref: l,
				onKeyDown: r ? void 0 : f
			})
		})
	});
}, "AccordionImpl")), Wt = "AccordionItem", [Gt, Kt] = L(Wt), qt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { __scopeAccordion: n, value: r, ...i } = e, a = R(Wt, n), o = Lt(Wt, n), s = Pt(n), c = He(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ (0, A.jsx)(Gt, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ (0, A.jsx)(Tt, {
			"data-orientation": a.orientation,
			"data-state": en(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
}, "AccordionItem")), Jt = "AccordionHeader", Yt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = R(I, n), a = Kt(Jt, n);
	return /* @__PURE__ */ (0, A.jsx)(w.h3, {
		"data-orientation": i.orientation,
		"data-state": en(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
}, "AccordionHeader")), Xt = "AccordionTrigger", Zt = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = R(I, n), a = Kt(Xt, n), o = zt(Xt, n), s = Pt(n);
	return /* @__PURE__ */ (0, A.jsx)(At.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, A.jsx)(Et, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
}, "AccordionTrigger")), Qt = "AccordionContent", $t = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ F(function(e, t) {
	let { __scopeAccordion: n, ...r } = e, i = R(I, n), a = Kt(Qt, n), o = Pt(n);
	return /* @__PURE__ */ (0, A.jsx)(Dt, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
}, "AccordionContent"));
function en(e) {
	return e ? "open" : "closed";
}
F(en, "getState");
var tn = Ft, nn = qt, rn = Yt, an = Zt, on = $t, sn = Object.defineProperty, z = (e, t) => sn(e, "name", {
	value: t,
	configurable: !0
}), B = "Popover", [cn, ln] = je(B, [ee]), V = ee(), [un, H] = cn(B), dn = /* @__PURE__ */ z((e) => {
	let { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !1 } = e, s = V(t), c = D.useRef(null), [l, u] = D.useState(!1), [d, f] = C({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: B
	});
	return /* @__PURE__ */ (0, A.jsx)(y, {
		...s,
		children: /* @__PURE__ */ (0, A.jsx)(un, {
			scope: t,
			contentId: He(),
			triggerRef: c,
			open: d,
			onOpenChange: f,
			onOpenToggle: D.useCallback(() => f((e) => !e), [f]),
			hasCustomAnchor: l,
			onCustomAnchorAdd: D.useCallback(() => u(!0), []),
			onCustomAnchorRemove: D.useCallback(() => u(!1), []),
			modal: o,
			children: n
		})
	});
}, "Popover"), fn = "PopoverAnchor", pn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let { __scopePopover: n, ...r } = e, i = H(fn, n), a = V(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return D.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ (0, A.jsx)(b, {
		...a,
		...r,
		ref: t
	});
}, "PopoverAnchor")), mn = "PopoverTrigger", hn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let { __scopePopover: n, ...r } = e, a = H(mn, n), o = V(n), s = i(t, a.triggerRef), c = /* @__PURE__ */ (0, A.jsx)(w.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": a.open,
		"aria-controls": a.open ? a.contentId : void 0,
		"data-state": Dn(a.open),
		...r,
		ref: s,
		onClick: S(e.onClick, a.onOpenToggle)
	});
	return a.hasCustomAnchor ? c : /* @__PURE__ */ (0, A.jsx)(b, {
		asChild: !0,
		...o,
		children: c
	});
}, "PopoverTrigger")), gn = "PopoverPortal", [_n, vn] = cn(gn, { forceMount: void 0 }), yn = /* @__PURE__ */ z((e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = H(gn, t);
	return /* @__PURE__ */ (0, A.jsx)(_n, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, A.jsx)(We, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, A.jsx)(Re, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
}, "PopoverPortal"), U = "PopoverContent", bn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let n = vn(U, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = H(U, e.__scopePopover);
	return /* @__PURE__ */ (0, A.jsx)(We, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, A.jsx)(Sn, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, A.jsx)(Cn, {
			...i,
			ref: t
		})
	});
}, "PopoverContent")), xn = s("PopoverContent.RemoveScroll"), Sn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let n = H(U, e.__scopePopover), r = D.useRef(null), a = i(t, r), o = D.useRef(!1);
	return D.useEffect(() => {
		let e = r.current;
		if (e) return Ie(e);
	}, []), /* @__PURE__ */ (0, A.jsx)(Be, {
		as: xn,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, A.jsx)(wn, {
			...e,
			ref: a,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: S(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: S(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				o.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: S(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}, "PopoverContentModal")), Cn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let n = H(U, e.__scopePopover), r = D.useRef(!1), i = D.useRef(!1);
	return /* @__PURE__ */ (0, A.jsx)(wn, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}, "PopoverContentNonModal")), wn = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = H(U, n), p = V(n);
	return Le(), /* @__PURE__ */ (0, A.jsx)(Ve, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, A.jsx)(ze, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			deferPointerDownOutside: !0,
			children: /* @__PURE__ */ (0, A.jsx)(_, {
				"data-state": Dn(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}, "PopoverContentImpl")), Tn = "PopoverClose", En = /* @__PURE__ */ D.forwardRef(/* @__PURE__ */ z(function(e, t) {
	let { __scopePopover: n, ...r } = e, i = H(Tn, n);
	return /* @__PURE__ */ (0, A.jsx)(w.button, {
		type: "button",
		...r,
		ref: t,
		onClick: S(e.onClick, () => i.onOpenChange(!1))
	});
}, "PopoverClose"));
function Dn(e) {
	return e ? "open" : "closed";
}
z(Dn, "getState");
var On = dn, kn = pn, An = hn, jn = yn, Mn = bn, Nn = En, Pn = (e) => {
	let t = (0, O.c)(16), n, r, i;
	t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({href: r, children: n, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
	let a = (0, D.useRef)(null), o;
	t[4] === r ? o = t[5] : (o = () => {
		let e = new URL(globalThis.location.href);
		e.hash = r, globalThis.history.pushState({}, "", e.toString()), globalThis.dispatchEvent(new HashChangeEvent("hashchange"));
		let t = r.slice(1), n = document.getElementById(t);
		n && n.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, t[4] = r, t[5] = o);
	let s = o, c;
	t[6] === s ? c = t[7] : (c = { onPress: () => {
		s();
	} }, t[6] = s, t[7] = c);
	let { pressProps: l } = Ee(c), u;
	t[8] === s ? u = t[9] : (u = (e) => {
		e.preventDefault(), s();
	}, t[8] = s, t[9] = u);
	let d = u, f;
	return t[10] !== n || t[11] !== d || t[12] !== r || t[13] !== l || t[14] !== i ? (f = /* @__PURE__ */ (0, A.jsx)("a", {
		ref: a,
		href: r,
		...l,
		onClick: d,
		...i,
		children: n
	}), t[10] = n, t[11] = d, t[12] = r, t[13] = l, t[14] = i, t[15] = f) : f = t[15], f;
}, Fn = On, In = An, Ln = Fe(jn), Rn = Nn, zn = Pe(Mn), Bn = D.forwardRef((e, t) => {
	let n = (0, O.c)(22), i, a, o, s, c, l;
	n[0] === e ? (i = n[1], a = n[2], o = n[3], s = n[4], c = n[5], l = n[6]) : ({className: i, align: o, sideOffset: s, portal: c, scrollable: l, ...a} = e, n[0] = e, n[1] = i, n[2] = a, n[3] = o, n[4] = s, n[5] = c, n[6] = l);
	let u = o === void 0 ? "center" : o, d = s === void 0 ? 4 : s, f = c === void 0 || c, p = l !== void 0 && l, m = p && "overflow-auto", h;
	n[7] !== i || n[8] !== m ? (h = r("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", i, m), n[7] = i, n[8] = m, n[9] = h) : h = n[9];
	let g = p ? `calc(var(--radix-popover-content-available-height) - ${Me}px)` : void 0, _;
	n[10] !== a.style || n[11] !== g ? (_ = {
		...a.style,
		maxHeight: g
	}, n[10] = a.style, n[11] = g, n[12] = _) : _ = n[12];
	let v;
	n[13] !== u || n[14] !== a || n[15] !== t || n[16] !== d || n[17] !== h || n[18] !== _ ? (v = /* @__PURE__ */ (0, A.jsx)(Ne, { children: /* @__PURE__ */ (0, A.jsx)(zn, {
		ref: t,
		align: u,
		sideOffset: d,
		className: h,
		style: _,
		...a
	}) }), n[13] = u, n[14] = a, n[15] = t, n[16] = d, n[17] = h, n[18] = _, n[19] = v) : v = n[19];
	let y = v;
	if (f) {
		let e;
		return n[20] === y ? e = n[21] : (e = /* @__PURE__ */ (0, A.jsx)(Ln, { children: y }), n[20] = y, n[21] = e), e;
	}
	return y;
});
Bn.displayName = Mn.displayName;
//#endregion
//#region src/core/documentation/doc-lookup.ts
async function Vn(e) {
	let t = _e().inOrderIds.at(0);
	if (t) try {
		let n = await ce.request({
			document: e,
			cellId: t
		});
		if (!n || n.options.length === 0) return;
		let r = e.split(".").pop() ?? e, i = n.options[0], a = n.options.find((e) => e.name === r) ?? i;
		a?.completion_info && E.set(fe, { documentation: a.completion_info });
	} catch (t) {
		n.debug(`Doc lookup failed for "${e}"`, t);
	}
}
//#endregion
//#region src/core/documentation/DocHoverTarget.tsx
var Hn = (e) => {
	let t = (0, O.c)(8), { qualifiedName: n, children: r } = e, i;
	t[0] === n ? i = t[1] : (i = () => {
		Vn(n);
	}, t[0] = n, t[1] = i);
	let a = De(i, 100), o;
	t[2] === a ? o = t[3] : (o = () => a.cancel(), t[2] = a, t[3] = o);
	let s;
	return t[4] !== r || t[5] !== a || t[6] !== o ? (s = /* @__PURE__ */ (0, A.jsx)("span", {
		onMouseEnter: a,
		onMouseLeave: o,
		children: r
	}), t[4] = r, t[5] = a, t[6] = o, t[7] = s) : s = t[7], s;
}, Un = Ke(!1);
//#endregion
//#region src/core/static/export-context.ts
function Wn(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return !(t.trusted !== !0 || t.notebookCode !== void 0 && typeof t.notebookCode != "string");
}
function Gn() {
	let e = window?.__MARIMO_EXPORT_CONTEXT__;
	return Wn(e) ? e : void 0;
}
function Kn() {
	return Gn()?.trusted === !0;
}
function qn() {
	if (E.get(Un) || Kn() || E.get(qe)) return !0;
	try {
		if (Oe() === "read") return !0;
	} catch {}
	return !1;
}
//#endregion
//#region src/plugins/core/sanitize.ts
var Jn = Ke((e) => {
	let t = e(Un), n = e(qe);
	if (t || n || Kn()) return !1;
	let r = !0;
	try {
		r = Oe() === "read";
	} catch {
		return !0;
	}
	return !r;
});
function Yn() {
	return T(Jn);
}
//#endregion
//#region src/plugins/core/RenderHTML.tsx
var Xn = [], Zn = (e) => {
	if (e instanceof k.Element && !/^[A-Za-z][\w-]*$/.test(e.name)) return D.createElement(D.Fragment);
}, Qn = (e, t) => {
	if (t instanceof k.Element && t.name === "body") {
		if ((0, D.isValidElement)(e) && "props" in e) {
			let t = e.props.children;
			return /* @__PURE__ */ (0, A.jsx)(A.Fragment, { children: t });
		}
		return;
	}
}, $n = (e, t) => {
	if (t instanceof k.Element && t.name === "html") {
		if ((0, D.isValidElement)(e) && "props" in e) {
			let t = e.props.children;
			return /* @__PURE__ */ (0, A.jsx)(A.Fragment, { children: t });
		}
		return;
	}
}, er = (e) => {
	if (e instanceof k.Element && e.attribs && e.name === "iframe") {
		let t = document.createElement("iframe");
		return Object.entries(e.attribs).forEach(([e, n]) => {
			e.startsWith("\"") && e.endsWith("\"") && (e = e.slice(1, -1)), t.setAttribute(e, n);
		}), /* @__PURE__ */ (0, A.jsx)("div", { dangerouslySetInnerHTML: { __html: t.outerHTML } });
	}
}, tr = (e) => {
	if (e instanceof k.Element && e.name === "script") {
		let t = e.attribs.src;
		if (!t) return;
		if (!qn()) return n.warn(`[RenderHTML] refusing <script src> in untrusted context: ${t}`), /* @__PURE__ */ (0, A.jsx)(A.Fragment, {});
		if (![...document.querySelectorAll("script[src]")].some((e) => e.getAttribute("src") === t)) {
			let e = document.createElement("script");
			e.src = t, document.head.append(e);
		}
		return /* @__PURE__ */ (0, A.jsx)(A.Fragment, {});
	}
}, nr = (e, t) => {
	if (t instanceof k.Element && t.name === "a") {
		let n = t.attribs.href;
		if (n?.startsWith("#") && !n.startsWith("#code/")) {
			let r = null;
			return (0, D.isValidElement)(e) && "props" in e && (r = e.props.children), /* @__PURE__ */ (0, A.jsx)(Pn, {
				href: n,
				...t.attribs,
				children: r
			});
		}
	}
}, rr = (e, t, n) => {
	if (t instanceof k.Element && t.name === "div" && t.attribs?.class?.includes("codehilite")) return /* @__PURE__ */ (0, A.jsx)(cr, { children: e }, n);
}, ir = (e, t, n) => {
	if (!(t instanceof k.Element) || t.name !== "img") return;
	let r = t.attribs?.src;
	if (!(!r || !(0, D.isValidElement)(e)) && !/^data:/i.test(r)) return (0, D.cloneElement)(e, { key: `${r}-${n}` });
}, ar = (e, t, n) => {
	if (!(t instanceof k.Element) || t.name !== "input" || t.attribs?.type !== "checkbox" || !(0, D.isValidElement)(e)) return;
	let r = "checked" in t.attribs;
	return (0, D.cloneElement)(e, { key: `checkbox-${n}-${r}` });
}, or = (e, t) => {
	if (t instanceof k.Element && t.attribs?.["data-marimo-doc"]) {
		let n = t.attribs["data-marimo-doc"];
		return /* @__PURE__ */ (0, A.jsx)(Hn, {
			qualifiedName: n,
			children: e
		});
	}
}, sr = (e, t) => {
	if (t instanceof k.Element && t.attribs?.["data-tooltip"]) {
		if ((t.name?.toLowerCase() ?? "").startsWith("marimo-")) return;
		let n = t.attribs["data-tooltip"].replace(/^[\r\n]+|[\r\n]+$/g, "");
		return /* @__PURE__ */ (0, A.jsx)(x, {
			content: n.includes("\n") ? /* @__PURE__ */ (0, A.jsx)("span", {
				className: "whitespace-pre-wrap",
				children: n.split(/\r?\n/).map((e, t) => /* @__PURE__ */ (0, A.jsxs)(D.Fragment, { children: [t > 0 && /* @__PURE__ */ (0, A.jsx)("br", {}), e] }, t))
			}) : n,
			children: e
		});
	}
}, cr = (e) => {
	let t = (0, O.c)(3), { children: n } = e, r = (0, D.useRef)(null), i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ (0, A.jsx)("div", {
		className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
		children: /* @__PURE__ */ (0, A.jsx)(d, {
			tooltip: !1,
			className: "p-1",
			value: () => {
				let e = r.current?.firstChild;
				return e && e.textContent || "";
			}
		})
	}), t[0] = i) : i = t[0];
	let a;
	return t[1] === n ? a = t[2] : (a = /* @__PURE__ */ (0, A.jsxs)("div", {
		className: "relative group codehilite-wrapper",
		ref: r,
		children: [n, i]
	}), t[1] = n, t[2] = a), a;
}, lr = ({ html: e, additionalReplacements: t = Xn, alwaysSanitizeHtml: n = !0 }) => /* @__PURE__ */ (0, A.jsx)(ur, {
	html: e,
	alwaysSanitizeHtml: n,
	additionalReplacements: t
}), ur = (e) => {
	let t = (0, O.c)(5), { html: n, additionalReplacements: r, alwaysSanitizeHtml: i } = e, a = r === void 0 ? Xn : r, o = Yn(), s;
	bb0: {
		if (i || o) {
			let e;
			t[0] === n ? e = t[1] : (e = ne(n), t[0] = n, t[1] = e), s = e;
			break bb0;
		}
		s = n;
	}
	let c = s, l;
	return t[2] !== a || t[3] !== c ? (l = dr({
		html: c,
		additionalReplacements: a
	}), t[2] = a, t[3] = c, t[4] = l) : l = t[4], l;
};
function dr({ html: e, additionalReplacements: t = Xn }) {
	let n = [
		Zn,
		er,
		tr,
		...t
	], r = [
		rr,
		nr,
		or,
		sr,
		Qn,
		$n
	], i = [ir, ar];
	return ut(e, {
		replace: (e, t) => {
			for (let r of n) {
				let n = r(e, t);
				if (n) return n;
			}
			return e;
		},
		transform: (e, t, n) => {
			let a = e;
			for (let e of r) {
				let r = e(a, t, n);
				if (r) {
					a = r;
					break;
				}
			}
			for (let e of i) {
				let r = e(a, t, n);
				r && (a = r);
			}
			return a;
		}
	});
}
//#endregion
//#region src/utils/json/base64.ts
function fr(e, t) {
	return `data:${t};base64,${e}`;
}
function pr(e) {
	return e.startsWith("data:") && e.includes(";base64,");
}
function mr(e) {
	return e.split(",")[1];
}
function hr(e) {
	let t = globalThis.atob(e), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
	return r;
}
var gr = Uint8Array.fromBase64 ?? hr;
function _r(e) {
	let t = gr(e);
	return new DataView(t.buffer);
}
function vr(e) {
	let t = "", n = e.length;
	for (let r = 0; r < n; r++) t += String.fromCharCode(e[r]);
	return globalThis.btoa(t);
}
var yr = "toBase64" in Uint8Array.prototype ? (e) => e.toBase64() : vr;
function br(e) {
	return yr(new Uint8Array(e.buffer, e.byteOffset, e.byteLength));
}
function xr(e) {
	return (e.buffers ?? []).map(_r);
}
//#endregion
//#region ../node_modules/.pnpm/@radix-ui+react-icons@1.3.2_react@19.3.0/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
function W(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var Sr = ["color"], Cr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Sr);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}), (0, D.createElement)("rect", {
		x: "7",
		y: "5",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "7",
		y: "3",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "7",
		y: "7",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "5",
		y: "7",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "3",
		y: "7",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "9",
		y: "7",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "11",
		y: "7",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "7",
		y: "9",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}), (0, D.createElement)("rect", {
		x: "7",
		y: "11",
		width: "1",
		height: "1",
		rx: ".5",
		fill: r
	}));
}), wr = ["color"], Tr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, wr);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Er = ["color"], Dr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Er);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Or = ["color"], kr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Or);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Ar = ["color"], jr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Ar);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Mr = ["color"], Nr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Mr);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
		fill: r
	}));
}), Pr = ["color"], Fr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Pr);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M2.05005 13.5C2.05005 13.7485 2.25152 13.95 2.50005 13.95C2.74858 13.95 2.95005 13.7485 2.95005 13.5L2.95005 1.49995C2.95005 1.25142 2.74858 1.04995 2.50005 1.04995C2.25152 1.04995 2.05005 1.25142 2.05005 1.49995L2.05005 13.5ZM8.4317 11.0681C8.60743 11.2439 8.89236 11.2439 9.06809 11.0681C9.24383 10.8924 9.24383 10.6075 9.06809 10.4317L6.58629 7.94993L14.5 7.94993C14.7485 7.94993 14.95 7.74846 14.95 7.49993C14.95 7.2514 14.7485 7.04993 14.5 7.04993L6.58629 7.04993L9.06809 4.56813C9.24383 4.39239 9.24383 4.10746 9.06809 3.93173C8.89236 3.75599 8.60743 3.75599 8.4317 3.93173L5.1817 7.18173C5.00596 7.35746 5.00596 7.64239 5.1817 7.81812L8.4317 11.0681Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Ir = ["color"], Lr = /*#__PURE__*/ (0, D.forwardRef)(function(e, t) {
	var n = e.color, r = n === void 0 ? "currentColor" : n, i = W(e, Ir);
	return (0, D.createElement)("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, i, { ref: t }), (0, D.createElement)("path", {
		d: "M12.95 1.50005C12.95 1.25152 12.7485 1.05005 12.5 1.05005C12.2514 1.05005 12.05 1.25152 12.05 1.50005L12.05 13.5C12.05 13.7486 12.2514 13.95 12.5 13.95C12.7485 13.95 12.95 13.7486 12.95 13.5L12.95 1.50005ZM6.5683 3.93188C6.39257 3.75614 6.10764 3.75614 5.93191 3.93188C5.75617 4.10761 5.75617 4.39254 5.93191 4.56827L8.41371 7.05007L0.499984 7.05007C0.251456 7.05007 0.0499847 7.25155 0.0499847 7.50007C0.0499846 7.7486 0.251457 7.95007 0.499984 7.95007L8.41371 7.95007L5.93191 10.4319C5.75617 10.6076 5.75617 10.8925 5.93191 11.0683C6.10764 11.244 6.39257 11.244 6.56831 11.0683L9.8183 7.81827C9.99404 7.64254 9.99404 7.35761 9.8183 7.18188L6.5683 3.93188Z",
		fill: r,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), Rr = tn, zr = D.forwardRef((e, t) => {
	let n = (0, O.c)(9), i, a;
	n[0] === e ? (i = n[1], a = n[2]) : ({className: i, ...a} = e, n[0] = e, n[1] = i, n[2] = a);
	let o;
	n[3] === i ? o = n[4] : (o = r("border-b", i), n[3] = i, n[4] = o);
	let s;
	return n[5] !== a || n[6] !== t || n[7] !== o ? (s = /* @__PURE__ */ (0, A.jsx)(nn, {
		ref: t,
		className: o,
		...a
	}), n[5] = a, n[6] = t, n[7] = o, n[8] = s) : s = n[8], s;
});
zr.displayName = "AccordionItem";
var Br = D.forwardRef((e, t) => {
	let n = (0, O.c)(12), i, a, o;
	n[0] === e ? (i = n[1], a = n[2], o = n[3]) : ({className: a, children: i, ...o} = e, n[0] = e, n[1] = i, n[2] = a, n[3] = o);
	let s;
	n[4] === a ? s = n[5] : (s = r("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-start", a), n[4] = a, n[5] = s);
	let c;
	n[6] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ (0, A.jsx)(Ce, { className: "h-4 w-4 transition-transform duration-200" }), n[6] = c) : c = n[6];
	let l;
	return n[7] !== i || n[8] !== o || n[9] !== t || n[10] !== s ? (l = /* @__PURE__ */ (0, A.jsx)(rn, {
		className: "flex",
		children: /* @__PURE__ */ (0, A.jsxs)(an, {
			ref: t,
			className: s,
			...o,
			children: [i, c]
		})
	}), n[7] = i, n[8] = o, n[9] = t, n[10] = s, n[11] = l) : l = n[11], l;
});
Br.displayName = an.displayName;
var Vr = D.forwardRef((e, t) => {
	let n = (0, O.c)(17), i, a, o, s;
	n[0] === e ? (i = n[1], a = n[2], o = n[3], s = n[4]) : ({className: a, children: i, wrapperClassName: s, ...o} = e, n[0] = e, n[1] = i, n[2] = a, n[3] = o, n[4] = s);
	let c;
	n[5] === a ? c = n[6] : (c = r("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", a), n[5] = a, n[6] = c);
	let l;
	n[7] === s ? l = n[8] : (l = r("pb-4 pt-0", s), n[7] = s, n[8] = l);
	let u;
	n[9] !== i || n[10] !== l ? (u = /* @__PURE__ */ (0, A.jsx)("div", {
		className: l,
		children: i
	}), n[9] = i, n[10] = l, n[11] = u) : u = n[11];
	let d;
	return n[12] !== o || n[13] !== t || n[14] !== c || n[15] !== u ? (d = /* @__PURE__ */ (0, A.jsx)(on, {
		ref: t,
		className: c,
		...o,
		children: u
	}), n[12] = o, n[13] = t, n[14] = c, n[15] = u, n[16] = d) : d = n[16], d;
});
Vr.displayName = on.displayName;
//#endregion
//#region src/utils/multi-map.ts
var Hr = /* @__PURE__ */ e(pe(), 1), Ur = class {
	map = /* @__PURE__ */ new Map();
	get(e) {
		return this.map.get(e) ?? [];
	}
	set(e, t) {
		this.map.set(e, t);
	}
	add(e, t) {
		this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]);
	}
	has(e) {
		return this.map.has(e);
	}
	delete(e) {
		return this.map.delete(e);
	}
	clear() {
		this.map.clear();
	}
	keys() {
		return this.map.keys();
	}
	values() {
		return this.map.values();
	}
	entries() {
		return this.map.entries();
	}
	forEach(e) {
		this.map.forEach(e);
	}
	flatValues() {
		let e = [];
		for (let t of this.map.values()) e.push(...t);
		return e;
	}
	get size() {
		return this.map.size;
	}
};
//#endregion
//#region src/core/ai/context/registry.ts
function Wr(e) {
	let t = e.indexOf("://");
	if (t !== -1) return e.slice(0, t);
}
var Gr = class {
	async getAttachments(e) {
		return [];
	}
	asURI(e) {
		return `${this.contextType}://${e}`;
	}
	parseContextIds(e) {
		let t = RegExp(`${this.mentionPrefix}([\\w-]+):\\/\\/([\\w./-]+)`, "g"), n = [...e.matchAll(t)], r = (e) => e.slice(1), i = n.filter(([, e]) => e === this.contextType).map(([e]) => r(e));
		return [...new Set(i)];
	}
	createBasicCompletion(e, t) {
		return {
			label: `${this.mentionPrefix}${e.uri.split("://")[1]}`,
			displayLabel: e.name,
			detail: t?.detail || e.description,
			boost: t?.boost || 1,
			type: t?.type || this.contextType,
			apply: `${this.mentionPrefix}${e.uri}`,
			section: t?.section || this.title
		};
	}
}, Kr = class {
	providers = /* @__PURE__ */ new Set();
	register(e) {
		return this.providers.add(e), this;
	}
	getProviders() {
		return this.providers;
	}
	getProvider(e) {
		return [...this.providers].find((t) => t.contextType === e);
	}
	getAllItems() {
		return [...this.providers].flatMap((e) => e.getItems());
	}
	parseAllContextIds(e) {
		return [...this.providers].flatMap((t) => t.parseContextIds(e));
	}
	findProviderForUri(e) {
		let t = Wr(e);
		if (t) return [...this.providers].find((n) => n.contextType === t && n.getItems().some((t) => t.uri === e));
	}
	resolveItems(e) {
		if (e.length === 0) return [];
		let t = new Ur();
		for (let n of e) {
			let e = Wr(n);
			e && t.add(e, n);
		}
		let n = /* @__PURE__ */ new Map();
		for (let [e, r] of t.entries()) {
			let t = [...this.providers].filter((t) => t.contextType === e);
			for (let e of t) {
				let t = new Map(e.getItems().map((e) => [e.uri, e]));
				for (let e of r) {
					let r = t.get(e);
					r && n.set(e, r);
				}
			}
		}
		let r = [];
		for (let t of e) {
			let e = n.get(t);
			e && r.push(e);
		}
		return r;
	}
	getContextInfo(e) {
		return this.resolveItems(e);
	}
	formatContextForAI(e) {
		let t = this.resolveItems(e);
		return t.length === 0 ? "" : t.map((e) => this.findProviderForUri(e.uri)?.formatContext(e) || "").join("\n\n");
	}
	async getAttachmentsForContext(e) {
		let t = this.resolveItems(e);
		if (t.length === 0) return [];
		let r = new Ur();
		for (let e of t) {
			let t = this.findProviderForUri(e.uri);
			t && r.add(t, e);
		}
		let i = [...r.entries()].map(async ([e, t]) => {
			try {
				return await e.getAttachments(t);
			} catch (e) {
				return n.error("Error getting attachments from provider", e), [];
			}
		});
		return (await Promise.all(i)).flat();
	}
};
ie([le()], Kr.prototype, "getAllItems", null);
//#endregion
//#region src/core/ai/context/utils.ts
function qr(e) {
	return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Jr(e) {
	let { type: t, data: n, details: r } = e, i = `<${t}`;
	for (let [e, t] of Object.entries(n)) if (t !== void 0) {
		let n = qr(typeof t == "object" && t ? JSON.stringify(t) : String(t));
		i += ` ${e}="${n}"`;
	}
	return i += ">", r && (i += qr(r)), i += `</${t}>`, i;
}
//#endregion
//#region src/core/ai/context/providers/common.ts
var Yr = {
	LOCAL_TABLE: 7,
	REMOTE_TABLE: 5,
	HIGH: 4,
	MEDIUM: 3,
	CELL_OUTPUT: 2,
	LOW: 2
}, Xr = {
	ERROR: {
		name: "Error",
		rank: 1
	},
	TABLE: {
		name: "Table",
		rank: 2
	},
	DATA_SOURCES: {
		name: "Data Sources",
		rank: 3
	},
	VARIABLE: {
		name: "Variable",
		rank: 4
	},
	CELL_OUTPUT: {
		name: "Cell Output",
		rank: 5
	},
	FILE: {
		name: "File",
		rank: 6
	}
}, Zr = "datasource", Qr = class extends Gr {
	title = "Datasource";
	mentionPrefix = "@";
	contextType = Zr;
	connectionsMap;
	dataframes;
	constructor(e, t) {
		super(), this.connectionsMap = e, this.dataframes = [...t.values()].filter((e) => xe(e) === "dataframe");
	}
	getItems() {
		return [...this.connectionsMap.values()].map((e) => {
			let t = "Database schema.", n = { connection: e };
			return be.has(e.name) && (n.tables = this.dataframes, t = "Database schema and the dataframes that can be queried"), e.databases.length === 0 && (n.tables?.length ?? 0) === 0 ? null : {
				uri: this.asURI(e.name),
				name: e.name,
				description: t,
				type: this.contextType,
				data: n
			};
		}).filter(Boolean);
	}
	formatContext(e) {
		let t = e.data, { name: n, display_name: r, source: i, ...a } = t.connection, o = a;
		return be.has(n) || (o = {
			...a,
			engine_name: n
		}), Jr({
			type: this.contextType,
			data: {
				connection: o,
				tables: t.tables
			}
		});
	}
	formatCompletion(e) {
		let t = e.data, n = t.connection, r = t.tables, i = n.name;
		return be.has(n.name) && (i = "In-Memory"), {
			label: `@${i}`,
			displayLabel: i,
			detail: he(n.dialect),
			boost: Yr.MEDIUM,
			type: this.contextType,
			section: Xr.DATA_SOURCES,
			info: () => {
				let e = document.createElement("div");
				return e.classList.add("mo-cm-tooltip", "docs-documentation"), (0, Hr.createRoot)(e).render(ge(n, r)), e;
			}
		};
	}
};
function $r(e, t) {
	let n = t.get(ve(e))?.code;
	if (!n || n.trim() === "") return null;
	let [r, i, a] = oe.sql.transformIn(n), o = t.get(ye).connectionsMap.get(a.engine);
	return o ? `@${Zr}://${o.name}` : null;
}
function ei(e, t) {
	let n = $r(e, t);
	if (!n) return null;
	let r = t.get(ye).connectionsMap, i = new Qr(r, t.get(ue)), a = n.slice(1), o = i.getItems().find((e) => e.uri === a);
	return o ? i.formatContext(o) : null;
}
//#endregion
//#region src/core/cells/outputs.ts
var ti = {}, ni = {};
function ri(e) {
	let t = (0, O.c)(16), { mode: n } = T(ke), { updateCellConfig: r } = me(), i;
	t[0] === e ? i = t[1] : (i = de(ve(e), ai, Object.is), t[0] = e, t[1] = i);
	let a = T(i), o;
	t[2] !== e || t[3] !== a ? (o = () => ti[e] ?? a, t[2] = e, t[3] = a, t[4] = o) : o = t[4];
	let [s, c] = (0, D.useState)(o), l, u;
	t[5] !== e || t[6] !== s ? (l = () => {
		ti[e] = s;
	}, u = [e, s], t[5] = e, t[6] = s, t[7] = l, t[8] = u) : (l = t[7], u = t[8]), (0, D.useEffect)(l, u);
	let d = n === "edit", f = d ? a : s, p;
	t[9] !== e || t[10] !== d || t[11] !== r ? (p = (t) => {
		if (c(t), !d) return;
		let n = { expand_output: t };
		r({
			cellId: e,
			config: n
		}), se().saveCellConfig({ configs: { [e]: n } }).catch(ii);
	}, t[9] = e, t[10] = d, t[11] = r, t[12] = p) : p = t[12];
	let m = Ge(p), h;
	return t[13] !== f || t[14] !== m ? (h = [f, m], t[13] = f, t[14] = m, t[15] = h) : h = t[15], h;
}
function ii(e) {
	n.error("Failed to save expand_output config", e);
}
function ai(e) {
	return e?.config.expand_output ?? !1;
}
function oi(e) {
	let t = (0, O.c)(6), [n, r] = (0, D.useState)(ni[e] ?? !1), i, a;
	t[0] !== e || t[1] !== n ? (i = () => {
		ni[e] = n;
	}, a = [e, n], t[0] = e, t[1] = n, t[2] = i, t[3] = a) : (i = t[2], a = t[3]), (0, D.useEffect)(i, a);
	let o;
	return t[4] === n ? o = t[5] : (o = [n, r], t[4] = n, t[5] = o), o;
}
function si(e) {
	return e == null || e.data == null || e.data === "";
}
//#endregion
//#region src/plugins/impl/code/LazyAnyLanguageCodeMirror.tsx
var ci = (0, D.lazy)(() => import("./any-language-editor-B9REGlD9.js")), li = [Ye.lineWrapping];
function ui(e, t) {
	return e ? e === "python" ? {
		language: e,
		code: t
	} : e === "sql" ? {
		language: "python",
		code: Se.fromQuery(t)
	} : e === "markdown" ? {
		language: "python",
		code: re.fromMarkdown(t)
	} : e === "shell" || e === "bash" ? {
		language: "python",
		code: `import subprocess\nsubprocess.run("${t}")`
	} : {
		language: "python",
		code: `_${e} = """\n${t}\n"""`
	} : {
		language: "python",
		code: t
	};
}
var di = (e) => {
	let t = (0, O.c)(9), { code: n, language: r } = e, { createNewCell: i } = me(), a = ae(), s = T(qe), c;
	t[0] !== s || t[1] !== n || t[2] !== i || t[3] !== r || t[4] !== a ? (c = () => {
		let e = ui(r, n);
		r === "sql" && te({
			autoInstantiate: s,
			createNewCell: i,
			fromCellId: a
		}), i({
			code: e.code,
			before: !1,
			cellId: a ?? "__end__"
		});
	}, t[0] = s, t[1] = n, t[2] = i, t[3] = r, t[4] = a, t[5] = c) : c = t[5];
	let l = c, u;
	t[6] === Symbol.for("react.memo_cache_sentinel") ? (u = /* @__PURE__ */ (0, A.jsx)(dt, { className: "ml-2 h-4 w-4" }), t[6] = u) : u = t[6];
	let d;
	return t[7] === l ? d = t[8] : (d = /* @__PURE__ */ (0, A.jsxs)(o, {
		size: "xs",
		variant: "outline",
		onClick: l,
		children: ["Add to Notebook", u]
	}), t[7] = l, t[8] = d), d;
}, fi = (e) => {
	let t = (0, O.c)(17), { code: n, language: r } = e, { theme: i } = Je(), [a, o] = (0, D.useState)(n);
	a !== n && o(n);
	let s;
	t[0] === a ? s = t[1] : (s = async () => {
		await u(a);
	}, t[0] = a, t[1] = s);
	let c = s, l = i === "dark" ? "dark" : "light", d;
	t[2] !== r || t[3] !== l || t[4] !== a ? (d = /* @__PURE__ */ (0, A.jsx)(D.Suspense, { children: /* @__PURE__ */ (0, A.jsx)(ci, {
		theme: l,
		language: r,
		hideUnsupportedLanguageErrors: !0,
		className: "cm border rounded overflow-hidden",
		extensions: li,
		value: a,
		onChange: o
	}) }), t[2] = r, t[3] = l, t[4] = a, t[5] = d) : d = t[5];
	let f;
	t[6] === c ? f = t[7] : (f = /* @__PURE__ */ (0, A.jsx)(pi, {
		size: "xs",
		variant: "outline",
		onClick: c,
		children: "Copy"
	}), t[6] = c, t[7] = f);
	let p;
	t[8] !== r || t[9] !== a ? (p = /* @__PURE__ */ (0, A.jsx)(di, {
		code: a,
		language: r
	}), t[8] = r, t[9] = a, t[10] = p) : p = t[10];
	let m;
	t[11] !== f || t[12] !== p ? (m = /* @__PURE__ */ (0, A.jsxs)("div", {
		className: "flex justify-end mt-2 space-x-2",
		children: [f, p]
	}), t[11] = f, t[12] = p, t[13] = m) : m = t[13];
	let h;
	return t[14] !== d || t[15] !== m ? (h = /* @__PURE__ */ (0, A.jsxs)("div", {
		className: "relative",
		children: [d, m]
	}), t[14] = d, t[15] = m, t[16] = h) : h = t[16], h;
}, pi = (e) => {
	let t = (0, O.c)(9), n, r;
	t[0] === e ? (n = t[1], r = t[2]) : ({onClick: n, ...r} = e, t[0] = e, t[1] = n, t[2] = r);
	let [i, a] = (0, D.useState)(!1), s;
	t[3] === n ? s = t[4] : (s = (e) => {
		n?.(e), a(!0), setTimeout(() => a(!1), 1e3);
	}, t[3] = n, t[4] = s);
	let c = i ? "Copied" : "Copy", l;
	return t[5] !== r || t[6] !== s || t[7] !== c ? (l = /* @__PURE__ */ (0, A.jsx)(o, {
		...r,
		onClick: s,
		children: c
	}), t[5] = r, t[6] = s, t[7] = c, t[8] = l) : l = t[8], l;
}, mi = {
	...p,
	attributes: {
		...p.attributes,
		"*": [...p.attributes?.["*"] ?? [], "className"]
	}
}, hi = Object.values({
	...g,
	sanitize: [h, mi]
}), gi = { code: ({ children: e, className: t }) => {
	let n = t?.replace("language-", "");
	if (n && typeof e == "string") {
		let t = e.trim();
		return /* @__PURE__ */ (0, A.jsxs)("div", { children: [/* @__PURE__ */ (0, A.jsx)("div", {
			className: "text-xs text-muted-foreground pl-1",
			children: n
		}), /* @__PURE__ */ (0, A.jsx)(fi, {
			code: t,
			language: n
		})] });
	}
	return /* @__PURE__ */ (0, A.jsx)("code", {
		className: t,
		children: e
	});
} }, _i, vi = () => {
	let { data: e } = Xe(async () => _i || (_i = { math: (await import("./dist-DpBpA_n1.js")).math }, _i), []);
	return e;
}, yi = (0, D.memo)((e) => {
	let t = (0, O.c)(3), { content: n } = e, r = vi(), i;
	return t[0] !== n || t[1] !== r ? (i = /* @__PURE__ */ (0, A.jsx)(f, {
		components: gi,
		plugins: r,
		rehypePlugins: hi,
		className: "mo-markdown-renderer",
		children: n
	}), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i;
});
yi.displayName = "MarkdownRenderer";
//#endregion
//#region src/components/icons/spinner.tsx
var bi = a("animate-spin", {
	variants: {
		centered: { true: "m-auto" },
		size: {
			small: "size-4",
			medium: "size-12",
			large: "size-20",
			xlarge: "size-20"
		}
	},
	defaultVariants: { size: "medium" }
}), xi = D.forwardRef((e, t) => {
	let n = (0, O.c)(13), i, a, o, s;
	if (n[0] !== e) {
		let { className: t, children: r, centered: c, size: l, ...u } = e;
		a = t, i = c, s = l, o = u, n[0] = e, n[1] = i, n[2] = a, n[3] = o, n[4] = s;
	} else i = n[1], a = n[2], o = n[3], s = n[4];
	let c;
	n[5] !== i || n[6] !== a || n[7] !== s ? (c = r(bi({
		centered: i,
		size: s
	}), a), n[5] = i, n[6] = a, n[7] = s, n[8] = c) : c = n[8];
	let l;
	return n[9] !== o || n[10] !== t || n[11] !== c ? (l = /* @__PURE__ */ (0, A.jsx)(ft, {
		ref: t,
		className: c,
		strokeWidth: 1.5,
		...o
	}), n[9] = o, n[10] = t, n[11] = c, n[12] = l) : l = n[12], l;
});
xi.displayName = "Spinner";
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/util.js
function Si(e, t) {
	if (e.match(/^[a-z]+:\/\//i)) return e;
	if (e.match(/^\/\//)) return window.location.protocol + e;
	if (e.match(/^[a-z]+:/i)) return e;
	let n = document.implementation.createHTMLDocument(), r = n.createElement("base"), i = n.createElement("a");
	return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), i.href = e, i.href;
}
var Ci = (() => {
	let e = 0, t = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
	return () => (e += 1, `u${t()}${e}`);
})();
function G(e) {
	let t = [];
	for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
	return t;
}
var K = null;
function wi(e = {}) {
	return K || (e.includeStyleProperties ? (K = e.includeStyleProperties, K) : (K = G(window.getComputedStyle(document.documentElement)), K));
}
function q(e, t) {
	let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
	return n ? parseFloat(n.replace("px", "")) : 0;
}
function Ti(e) {
	let t = q(e, "border-left-width"), n = q(e, "border-right-width");
	return e.clientWidth + t + n;
}
function Ei(e) {
	let t = q(e, "border-top-width"), n = q(e, "border-bottom-width");
	return e.clientHeight + t + n;
}
function Di(e, t = {}) {
	return {
		width: t.width || Ti(e),
		height: t.height || Ei(e)
	};
}
function Oi() {
	let e, t;
	try {
		t = process;
	} catch {}
	let n = t && t.env ? t.env.devicePixelRatio : null;
	return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
var J = 16384;
function ki(e) {
	(e.width > J || e.height > J) && (e.width > J && e.height > J ? e.width > e.height ? (e.height *= J / e.width, e.width = J) : (e.width *= J / e.height, e.height = J) : e.width > J ? (e.height *= J / e.width, e.width = J) : (e.width *= J / e.height, e.height = J));
}
function Y(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.onload = () => {
			r.decode().then(() => {
				requestAnimationFrame(() => t(r));
			});
		}, r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
	});
}
async function Ai(e) {
	return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function ji(e, t, n) {
	let r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
	return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(e), Ai(i);
}
var X = (e, t) => {
	if (e instanceof t) return !0;
	let n = Object.getPrototypeOf(e);
	return n === null ? !1 : n.constructor.name === t.name || X(n, t);
};
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/clone-pseudos.js
function Mi(e) {
	let t = e.getPropertyValue("content");
	return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function Ni(e, t) {
	return wi(t).map((t) => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`).join(" ");
}
function Pi(e, t, n, r) {
	let i = `.${e}:${t}`, a = n.cssText ? Mi(n) : Ni(n, r);
	return document.createTextNode(`${i}{${a}}`);
}
function Fi(e, t, n, r) {
	let i = window.getComputedStyle(e, n), a = i.getPropertyValue("content");
	if (a === "" || a === "none") return;
	let o = Ci();
	try {
		t.className = `${t.className} ${o}`;
	} catch {
		return;
	}
	let s = document.createElement("style");
	s.appendChild(Pi(o, n, i, r)), t.appendChild(s);
}
function Ii(e, t, n) {
	Fi(e, t, ":before", n), Fi(e, t, ":after", n);
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/mimes.js
var Li = "application/font-woff", Ri = "image/jpeg", zi = {
	woff: Li,
	woff2: Li,
	ttf: "application/font-truetype",
	eot: "application/vnd.ms-fontobject",
	png: "image/png",
	jpg: Ri,
	jpeg: Ri,
	gif: "image/gif",
	tiff: "image/tiff",
	svg: "image/svg+xml",
	webp: "image/webp"
};
function Bi(e) {
	let t = /\.([^./]*?)$/g.exec(e);
	return t ? t[1] : "";
}
function Vi(e) {
	return zi[Bi(e).toLowerCase()] || "";
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/dataurl.js
function Hi(e) {
	return e.split(/,/)[1];
}
function Ui(e) {
	return e.search(/^(data:)/) !== -1;
}
function Wi(e, t) {
	return `data:${t};base64,${e}`;
}
async function Gi(e, t, n) {
	let r = await fetch(e, t);
	if (r.status === 404) throw Error(`Resource "${r.url}" not found`);
	let i = await r.blob();
	return new Promise((e, t) => {
		let a = new FileReader();
		a.onerror = t, a.onloadend = () => {
			try {
				e(n({
					res: r,
					result: a.result
				}));
			} catch (e) {
				t(e);
			}
		}, a.readAsDataURL(i);
	});
}
var Ki = {};
function qi(e, t, n) {
	let r = e.replace(/\?.*/, "");
	return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Z(e, t, n) {
	let r = qi(e, t, n.includeQueryParams);
	if (Ki[r] != null) return Ki[r];
	n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
	let i;
	try {
		i = Wi(await Gi(e, n.fetchRequestInit, ({ res: e, result: n }) => (t ||= e.headers.get("Content-Type") || "", Hi(n))), t);
	} catch (t) {
		i = n.imagePlaceholder || "";
		let r = `Failed to fetch resource: ${e}`;
		t && (r = typeof t == "string" ? t : t.message), r && console.warn(r);
	}
	return Ki[r] = i, i;
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/clone-node.js
async function Ji(e) {
	let t = e.toDataURL();
	return t === "data:," ? e.cloneNode(!1) : Y(t);
}
async function Yi(e, t) {
	if (e.currentSrc) {
		let t = document.createElement("canvas"), n = t.getContext("2d");
		return t.width = e.clientWidth, t.height = e.clientHeight, n?.drawImage(e, 0, 0, t.width, t.height), Y(t.toDataURL());
	}
	let n = e.poster;
	return Y(await Z(n, Vi(n), t));
}
async function Xi(e, t) {
	try {
		if (e?.contentDocument?.body) return await Q(e.contentDocument.body, t, !0);
	} catch {}
	return e.cloneNode(!1);
}
async function Zi(e, t) {
	return X(e, HTMLCanvasElement) ? Ji(e) : X(e, HTMLVideoElement) ? Yi(e, t) : X(e, HTMLIFrameElement) ? Xi(e, t) : e.cloneNode($i(e));
}
var Qi = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", $i = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function ea(e, t, n) {
	if ($i(t)) return t;
	let r = [];
	if (Qi(e) && e.assignedNodes) r = G(e.assignedNodes());
	else if (X(e, HTMLIFrameElement)) try {
		e.contentDocument?.body && (r = G(e.contentDocument.body.childNodes));
	} catch {}
	else r = G((e.shadowRoot ?? e).childNodes);
	return r.length === 0 || X(e, HTMLVideoElement) || await r.reduce((e, r) => e.then(() => Q(r, n)).then((e) => {
		e && t.appendChild(e);
	}), Promise.resolve()), t;
}
function ta(e, t, n) {
	let r = t.style;
	if (!r) return;
	let i = window.getComputedStyle(e);
	i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : wi(n).forEach((n) => {
		let a = i.getPropertyValue(n);
		n === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - .1}px`), X(e, HTMLIFrameElement) && n === "display" && a === "inline" && (a = "block"), n === "d" && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(n, a, i.getPropertyPriority(n));
	});
}
function na(e, t) {
	X(e, HTMLTextAreaElement) && (t.innerHTML = e.value), X(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function ra(e, t) {
	if (X(e, HTMLSelectElement)) {
		let n = t, r = Array.from(n.children).find((t) => e.value === t.getAttribute("value"));
		r && r.setAttribute("selected", "");
	}
}
function ia(e, t, n) {
	return X(t, Element) && (ta(e, t, n), Ii(e, t, n), na(e, t), ra(e, t)), t;
}
async function aa(e, t) {
	let n = e.querySelectorAll ? e.querySelectorAll("use") : [];
	if (n.length === 0) return e;
	let r = {};
	for (let i = 0; i < n.length; i++) {
		let a = n[i].getAttribute("xlink:href");
		if (a) {
			let n = e.querySelector(a), i = document.querySelector(a);
			!n && i && !r[a] && (r[a] = await Q(i, t, !0));
		}
	}
	let i = Object.values(r);
	if (i.length) {
		let t = "http://www.w3.org/1999/xhtml", n = document.createElementNS(t, "svg");
		n.setAttribute("xmlns", t), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden", n.style.display = "none";
		let r = document.createElementNS(t, "defs");
		n.appendChild(r);
		for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
		e.appendChild(n);
	}
	return e;
}
async function Q(e, t, n) {
	return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((e) => Zi(e, t)).then((n) => ea(e, n, t)).then((n) => ia(e, n, t)).then((e) => aa(e, t));
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/embed-resources.js
var oa = /url\((['"]?)([^'"]+?)\1\)/g, sa = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, ca = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function la(e) {
	let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
	return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function ua(e) {
	let t = [];
	return e.replace(oa, (e, n, r) => (t.push(r), e)), t.filter((e) => !Ui(e));
}
async function da(e, t, n, r, i) {
	try {
		let a = n ? Si(t, n) : t, o = Vi(t), s;
		return s = i ? Wi(await i(a), o) : await Z(a, o, r), e.replace(la(t), `$1${s}$3`);
	} catch {}
	return e;
}
function fa(e, { preferredFontFormat: t }) {
	return t ? e.replace(ca, (e) => {
		for (;;) {
			let [n, , r] = sa.exec(e) || [];
			if (!r) return "";
			if (r === t) return `src: ${n};`;
		}
	}) : e;
}
function pa(e) {
	return e.search(oa) !== -1;
}
async function ma(e, t, n) {
	if (!pa(e)) return e;
	let r = fa(e, n);
	return ua(r).reduce((e, r) => e.then((e) => da(e, r, t, n)), Promise.resolve(r));
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/embed-images.js
async function $(e, t, n) {
	let r = t.style?.getPropertyValue(e);
	if (r) {
		let i = await ma(r, null, n);
		return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0;
	}
	return !1;
}
async function ha(e, t) {
	await $("background", e, t) || await $("background-image", e, t), await $("mask", e, t) || await $("-webkit-mask", e, t) || await $("mask-image", e, t) || await $("-webkit-mask-image", e, t);
}
async function ga(e, t) {
	let n = X(e, HTMLImageElement);
	if (!(n && !Ui(e.src)) && !(X(e, SVGImageElement) && !Ui(e.href.baseVal))) return;
	let r = n ? e.src : e.href.baseVal, i = await Z(r, Vi(r), t);
	await new Promise((r, a) => {
		e.onload = r, e.onerror = t.onImageErrorHandler ? (...e) => {
			try {
				r(t.onImageErrorHandler(...e));
			} catch (e) {
				a(e);
			}
		} : a;
		let o = e;
		o.decode &&= r, o.loading === "lazy" && (o.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
	});
}
async function _a(e, t) {
	let n = G(e.childNodes).map((e) => va(e, t));
	await Promise.all(n).then(() => e);
}
async function va(e, t) {
	X(e, Element) && (await ha(e, t), await ga(e, t), await _a(e, t));
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/apply-style.js
function ya(e, t) {
	let { style: n } = e;
	t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
	let r = t.style;
	return r != null && Object.keys(r).forEach((e) => {
		n[e] = r[e];
	}), e;
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/embed-webfonts.js
var ba = {};
async function xa(e) {
	let t = ba[e];
	return t ?? (t = {
		url: e,
		cssText: await (await fetch(e)).text()
	}, ba[e] = t, t);
}
async function Sa(e, t) {
	let n = e.cssText, r = /url\(["']?([^"')]+)["']?\)/g, i = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
		let a = i.replace(r, "$1");
		return a.startsWith("https://") || (a = new URL(a, e.url).href), Gi(a, t.fetchRequestInit, ({ result: e }) => (n = n.replace(i, `url(${e})`), [i, e]));
	});
	return Promise.all(i).then(() => n);
}
function Ca(e) {
	if (e == null) return [];
	let t = [], n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), r = /* @__PURE__ */ RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
	for (;;) {
		let e = r.exec(n);
		if (e === null) break;
		t.push(e[0]);
	}
	n = n.replace(r, "");
	let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = /* @__PURE__ */ RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
	for (;;) {
		let e = i.exec(n);
		if (e === null) {
			if (e = a.exec(n), e === null) break;
			i.lastIndex = a.lastIndex;
		} else a.lastIndex = i.lastIndex;
		t.push(e[0]);
	}
	return t;
}
async function wa(e, t) {
	let n = [], r = [];
	return e.forEach((n) => {
		if ("cssRules" in n) try {
			G(n.cssRules || []).forEach((e, i) => {
				if (e.type === CSSRule.IMPORT_RULE) {
					let a = i + 1, o = e.href, s = xa(o).then((e) => Sa(e, t)).then((e) => Ca(e).forEach((e) => {
						try {
							n.insertRule(e, e.startsWith("@import") ? a += 1 : n.cssRules.length);
						} catch (t) {
							console.error("Error inserting rule from remote css", {
								rule: e,
								error: t
							});
						}
					})).catch((e) => {
						console.error("Error loading remote css", e.toString());
					});
					r.push(s);
				}
			});
		} catch (i) {
			let a = e.find((e) => e.href == null) || document.styleSheets[0];
			n.href != null && r.push(xa(n.href).then((e) => Sa(e, t)).then((e) => Ca(e).forEach((e) => {
				a.insertRule(e, a.cssRules.length);
			})).catch((e) => {
				console.error("Error loading remote stylesheet", e);
			})), console.error("Error inlining remote css file", i);
		}
	}), Promise.all(r).then(() => (e.forEach((e) => {
		if ("cssRules" in e) try {
			G(e.cssRules || []).forEach((e) => {
				n.push(e);
			});
		} catch (t) {
			console.error(`Error while reading CSS rules from ${e.href}`, t);
		}
	}), n));
}
function Ta(e) {
	return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => pa(e.style.getPropertyValue("src")));
}
async function Ea(e, t) {
	if (e.ownerDocument == null) throw Error("Provided element is not within a Document");
	return Ta(await wa(G(e.ownerDocument.styleSheets), t));
}
function Da(e) {
	return (e || "").trim().replace(/["']/g, "");
}
function Oa(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		let r = e.style.fontFamily || getComputedStyle(e).fontFamily;
		r && r.split(",").forEach((e) => {
			t.add(Da(e));
		}), Array.from(e.children).forEach((e) => {
			e instanceof HTMLElement && n(e);
		});
	}
	return n(e), t;
}
async function ka(e, t) {
	let n = await Ea(e, t), r = Oa(e);
	return (await Promise.all(n.filter((e) => r.has(Da(e.style.fontFamily))).map((e) => {
		let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
		return ma(e.cssText, n, t);
	}))).join("\n");
}
async function Aa(e, t) {
	let n = t.fontEmbedCSS == null ? t.skipFonts ? null : await ka(e, t) : t.fontEmbedCSS, r = t.extraStyleContent == null ? n : (n || "").concat(t.extraStyleContent);
	if (r) {
		let t = document.createElement("style"), n = document.createTextNode(r);
		t.appendChild(n), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
	}
}
//#endregion
//#region ../node_modules/.pnpm/html-to-image@1.11.13_patch_hash=405d43fd603ed64fdfdd4e3572f22a2b0eab5c8bd36a0dbd88f28ab1f311893f/node_modules/html-to-image/es/index.js
async function ja(e, t = {}) {
	let { width: n, height: r } = Di(e, t), i = await Q(e, t, !0);
	return await Aa(i, t), await va(i, t), ya(i, t), await ji(i, n, r);
}
async function Ma(e, t = {}) {
	let { width: n, height: r } = Di(e, t), i = await Y(await ja(e, t)), a = document.createElement("canvas"), o = a.getContext("2d"), s = t.pixelRatio || Oi(), c = t.canvasWidth || n, l = t.canvasHeight || r;
	return a.width = c * s, a.height = l * s, t.skipAutoScale || ki(a), a.style.width = `${c}`, a.style.height = `${l}`, t.backgroundColor && (o.fillStyle = t.backgroundColor, o.fillRect(0, 0, a.width, a.height)), o.drawImage(i, 0, 0, a.width, a.height), a;
}
async function Na(e, t = {}) {
	return (await Ma(e, t)).toDataURL();
}
var Pa = {
	filter: (e) => {
		try {
			if ("classList" in e) {
				let t = e.classList;
				if (t.contains("mpl-toolbar") || t.contains("print:hidden")) return !1;
			}
			return !0;
		} catch (e) {
			return n.error("Error filtering node:", e), !0;
		}
	},
	imagePlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualIQAAAABJRU5ErkJggg==",
	onImageErrorHandler: (e) => {
		n.error("Error loading image:", e);
	},
	includeStyleProperties: /* @__PURE__ */ "width.height.min-width.min-height.max-width.max-height.box-sizing.aspect-ratio.display.position.top.left.bottom.right.z-index.float.clear.flex.flex-direction.flex-wrap.flex-grow.flex-shrink.flex-basis.align-items.align-self.justify-content.gap.order.grid-template-columns.grid-template-rows.grid-column.grid-row.row-gap.column-gap.margin.margin-top.margin-right.margin-bottom.margin-left.padding.padding-top.padding-right.padding-bottom.padding-left.font.font-family.font-size.font-weight.font-style.line-height.letter-spacing.word-spacing.text-align.text-decoration.text-transform.text-indent.text-shadow.white-space.text-wrap.word-break.text-overflow.vertical-align.color.background.background-color.background-image.background-size.background-position.background-repeat.background-clip.border.border-width.border-style.border-color.border-top.border-right.border-bottom.border-left.border-radius.outline.box-shadow.text-shadow.opacity.filter.backdrop-filter.mix-blend-mode.transform.clip-path.overflow.overflow-x.overflow-y.visibility.fill.stroke.stroke-width.object-fit.object-position.list-style.list-style-type.border-collapse.border-spacing.content.cursor".split(".")
};
async function Fa(e, t) {
	return Na(e, {
		...Pa,
		...t
	});
}
//#endregion
export { k as $, gr as A, Rn as B, kr as C, Lr as D, Fr as E, lr as F, on as G, In as H, Gn as I, an as J, nn as K, Kn as L, mr as M, pr as N, fr as O, xr as P, ut as Q, Un as R, Dr as S, Nr as T, kn as U, Bn as V, Nn as W, pt as X, mt as Y, ft as Z, Vr as _, si as a, Cr as b, Qr as c, Yr as d, Xr as f, Rr as g, Kr as h, ci as i, br as j, _r as k, ei as l, Gr as m, xi as n, oi as o, Jr as p, tn as q, yi as r, ri as s, Fa as t, $r as u, zr as v, jr as w, Tr as x, Br as y, Fn as z };
