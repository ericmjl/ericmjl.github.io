import { $ as e, At as t, Bt as n, Ct as r, Ft as i, Ht as a, I as o, Lt as s, Mt as c, Nt as l, Ot as u, Pt as d, Q as f, Rt as p, Tt as m, Ut as h, Vt as g, Wt as _, Z as v, _t as y, ht as b, j as x, lt as S, nt as ee, qt as te, tt as ne, zt as C } from "./dist-DoE4XJBC.js";
//#region ../node_modules/.pnpm/@codemirror+autocomplete@6.20.3/node_modules/@codemirror/autocomplete/dist/index.js
var w = class {
	constructor(e, t, n, r) {
		this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
	}
	tokenBefore(e) {
		let t = o(this.state).resolveInner(this.pos, -1);
		for (; t && e.indexOf(t.name) < 0;) t = t.parent;
		return t ? {
			from: t.from,
			to: this.pos,
			text: this.state.sliceDoc(t.from, this.pos),
			type: t.type
		} : null;
	}
	matchBefore(e) {
		let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), i = r.search(ae(e, !1));
		return i < 0 ? null : {
			from: n + i,
			to: this.pos,
			text: r.slice(i)
		};
	}
	get aborted() {
		return this.abortListeners == null;
	}
	addEventListener(e, t, n) {
		e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
	}
};
function T(e) {
	let t = Object.keys(e).join(""), n = /\w/.test(t);
	return n && (t = t.replace(/\w/g, "")), `[${n ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function re(e) {
	let t = Object.create(null), n = Object.create(null);
	for (let { label: r } of e) {
		t[r[0]] = !0;
		for (let e = 1; e < r.length; e++) n[r[e]] = !0;
	}
	let r = T(t) + T(n) + "*$";
	return [RegExp("^" + r), new RegExp(r)];
}
function E(e) {
	let t = e.map((e) => typeof e == "string" ? { label: e } : e), [n, r] = t.every((e) => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : re(t);
	return (e) => {
		let i = e.matchBefore(r);
		return i || e.explicit ? {
			from: i ? i.from : e.pos,
			options: t,
			validFor: n
		} : null;
	};
}
function ie(e, t) {
	return (n) => {
		for (let t = o(n.state).resolveInner(n.pos, -1); t; t = t.parent) {
			if (e.indexOf(t.name) > -1) return null;
			if (t.type.isTop) break;
		}
		return t(n);
	};
}
var D = class {
	constructor(e, t, n, r) {
		this.completion = e, this.source = t, this.match = n, this.score = r;
	}
};
function O(e) {
	return e.selection.main.from;
}
function ae(e, t) {
	let { source: n } = e, r = t && n[0] != "^", i = n[n.length - 1] != "$";
	return !r && !i ? e : RegExp(`${r ? "^" : ""}(?:${n})${i ? "$" : ""}`, e.flags ?? (e.ignoreCase ? "i" : ""));
}
var k = /*@__PURE__*/ m.define();
function oe(e, n, r, i) {
	let { main: a } = e.selection, o = r - a.from, s = i - a.from;
	return {
		...e.changeByRange((c) => {
			if (c != a && r != i && e.sliceDoc(c.from + o, c.from + s) != e.sliceDoc(r, i)) return { range: c };
			let l = e.toText(n);
			return {
				changes: {
					from: c.from + o,
					to: i == a.from ? c.to : c.from + s,
					insert: l
				},
				range: t.cursor(c.from + o + l.length)
			};
		}),
		scrollIntoView: !0,
		userEvent: "input.complete"
	};
}
var se = /*@__PURE__*/ new WeakMap();
function ce(e) {
	if (!Array.isArray(e)) return e;
	let t = se.get(e);
	return t || se.set(e, t = E(e)), t;
}
var A = /*@__PURE__*/ p.define(), j = /*@__PURE__*/ p.define(), le = class {
	constructor(e) {
		this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
		for (let t = 0; t < e.length;) {
			let n = a(e, t), r = h(n);
			this.chars.push(n);
			let i = e.slice(t, t + r), o = i.toUpperCase();
			this.folded.push(a(o == i ? i.toLowerCase() : o, 0)), t += r;
		}
		this.astral = e.length != this.chars.length;
	}
	ret(e, t) {
		return this.score = e, this.matched = t, this;
	}
	match(e) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (e.length < this.pattern.length) return null;
		let { chars: t, folded: n, any: r, precise: i, byWord: o } = this;
		if (t.length == 1) {
			let r = a(e, 0), i = h(r), o = i == e.length ? 0 : -100;
			if (r != t[0]) {
				if (r == n[0]) o += -200;
				else return null;
			}
			return this.ret(o, [0, i]);
		}
		let s = e.indexOf(this.pattern);
		if (s == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let c = t.length, l = 0;
		if (s < 0) {
			for (let i = 0, o = Math.min(e.length, 200); i < o && l < c;) {
				let o = a(e, i);
				(o == t[l] || o == n[l]) && (r[l++] = i), i += h(o);
			}
			if (l < c) return null;
		}
		let u = 0, d = 0, f = !1, p = 0, m = -1, g = -1, _ = /[a-z]/.test(e), v = !0;
		for (let r = 0, l = Math.min(e.length, 200), y = 0; r < l && d < c;) {
			let l = a(e, r);
			s < 0 && (u < c && l == t[u] && (i[u++] = r), p < c && (l == t[p] || l == n[p] ? (p == 0 && (m = r), g = r + 1, p++) : p = 0));
			let b, x = l < 255 ? l >= 48 && l <= 57 || l >= 97 && l <= 122 ? 2 : +(l >= 65 && l <= 90) : (b = te(l)) == b.toLowerCase() ? b == b.toUpperCase() ? 0 : 2 : 1;
			(!r || x == 1 && _ || y == 0 && x != 0) && (t[d] == l || n[d] == l && (f = !0) ? o[d++] = r : o.length && (v = !1)), y = x, r += h(l);
		}
		return d == c && o[0] == 0 && v ? this.result(-100 + (f ? -200 : 0), o, e) : p == c && m == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : s > -1 ? this.ret(-700 - e.length, [s, s + this.pattern.length]) : p == c ? this.ret(-900 - e.length, [m, g]) : d == c ? this.result(-100 + (f ? -200 : 0) + -700 + (v ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
	}
	result(e, t, n) {
		let r = [], i = 0;
		for (let e of t) {
			let t = e + (this.astral ? h(a(n, e)) : 1);
			i && r[i - 1] == e ? r[i - 1] = t : (r[i++] = e, r[i++] = t);
		}
		return this.ret(e - n.length, r);
	}
}, ue = class {
	constructor(e) {
		this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
	}
	match(e) {
		if (e.length < this.pattern.length) return null;
		let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
		return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
	}
}, M = /*@__PURE__*/ c.define({ combine(e) {
	return _(e, {
		activateOnTyping: !0,
		activateOnCompletion: () => !1,
		activateOnTypingDelay: 100,
		selectOnOpen: !0,
		override: null,
		closeOnBlur: !0,
		maxRenderedOptions: 100,
		defaultKeymap: !0,
		tooltipClass: () => "",
		optionClass: () => "",
		aboveCursor: !1,
		icons: !0,
		addToOptions: [],
		positionInfo: de,
		filterStrict: !1,
		compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (e, t) => e && t,
		closeOnBlur: (e, t) => e && t,
		icons: (e, t) => e && t,
		tooltipClass: (e, t) => (n) => N(e(n), t(n)),
		optionClass: (e, t) => (n) => N(e(n), t(n)),
		addToOptions: (e, t) => e.concat(t),
		filterStrict: (e, t) => e || t
	});
} });
function N(e, t) {
	return e ? t ? e + " " + t : e : t;
}
function de(e, t, n, r, i, a) {
	let o = e.textDirection == f.RTL, s = o, c = !1, l = "top", u, d, p = t.left - i.left, m = i.right - t.right, h = r.right - r.left, g = r.bottom - r.top;
	if (s && p < Math.min(h, m) ? s = !1 : !s && m < Math.min(h, p) && (s = !0), h <= (s ? p : m)) u = Math.max(i.top, Math.min(n.top, i.bottom - g)) - t.top, d = Math.min(400, s ? p : m);
	else {
		c = !0, d = Math.min(400, (o ? t.right : i.right - t.left) - 30);
		let e = i.bottom - t.bottom;
		e >= g || e > t.top ? u = n.bottom - t.top : (l = "bottom", u = t.bottom - n.top);
	}
	let _ = (t.bottom - t.top) / a.offsetHeight, v = (t.right - t.left) / a.offsetWidth;
	return {
		style: `${l}: ${u / _}px; max-width: ${d / v}px`,
		class: "cm-completionInfo-" + (c ? o ? "left-narrow" : "right-narrow" : s ? "left" : "right")
	};
}
var P = /*@__PURE__*/ p.define();
function fe(e) {
	let t = e.addToOptions.slice();
	return e.icons && t.push({
		render(e) {
			let t = document.createElement("div");
			return t.classList.add("cm-completionIcon"), e.type && t.classList.add(...e.type.split(/\s+/g).map((e) => "cm-completionIcon-" + e)), t.setAttribute("aria-hidden", "true"), t;
		},
		position: 20
	}), t.push({
		render(e, t, n, r) {
			let i = document.createElement("span");
			i.className = "cm-completionLabel";
			let a = e.displayLabel || e.label, o = 0;
			for (let e = 0; e < r.length;) {
				let t = r[e++], n = r[e++];
				t > o && i.appendChild(document.createTextNode(a.slice(o, t)));
				let s = i.appendChild(document.createElement("span"));
				s.appendChild(document.createTextNode(a.slice(t, n))), s.className = "cm-completionMatchedText", o = n;
			}
			return o < a.length && i.appendChild(document.createTextNode(a.slice(o))), i;
		},
		position: 50
	}, {
		render(e) {
			if (!e.detail) return null;
			let t = document.createElement("span");
			return t.className = "cm-completionDetail", t.textContent = e.detail, t;
		},
		position: 80
	}), t.sort((e, t) => e.position - t.position).map((e) => e.render);
}
function F(e, t, n) {
	if (e <= n) return {
		from: 0,
		to: e
	};
	if (t < 0 && (t = 0), t <= e >> 1) {
		let e = Math.floor(t / n);
		return {
			from: e * n,
			to: (e + 1) * n
		};
	}
	let r = Math.ceil((e - t) / n);
	return {
		from: e - r * n,
		to: e - (r - 1) * n
	};
}
var pe = class {
	constructor(e, t, n) {
		this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (e) => this.placeInfo(e),
			key: this
		}, this.space = null, this.currentClass = "";
		let r = e.state.field(t), { options: i, selected: a } = r.open, o = e.state.facet(M);
		this.optionContent = fe(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = F(i.length, a, o.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (n) => {
			let { options: r } = e.state.field(t).open;
			for (let t = n.target, i; t && t != this.dom; t = t.parentNode) if (t.nodeName == "LI" && (i = /-(\d+)$/.exec(t.id)) && +i[1] < r.length) {
				this.applyCompletion(e, r[+i[1]]), n.preventDefault();
				return;
			}
			if (n.target == this.list) {
				let t = this.list.classList.contains("cm-completionListIncompleteTop") && n.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && n.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
				t != null && (e.dispatch({ effects: P.of(t) }), n.preventDefault());
			}
		}), this.dom.addEventListener("focusout", (t) => {
			let n = e.state.field(this.stateField, !1);
			n && n.tooltip && e.state.facet(M).closeOnBlur && t.relatedTarget != e.contentDOM && e.dispatch({ effects: j.of(null) });
		}), this.showOptions(i, r.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(e, t) {
		this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
			this.info && this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(e) {
		let t = e.state.field(this.stateField), n = e.startState.field(this.stateField);
		if (this.updateTooltipClass(e.state), t != n) {
			let { options: r, selected: i, disabled: a } = t.open;
			(!n.open || n.open.options != r) && (this.range = F(r.length, i, e.state.facet(M).maxRenderedOptions), this.showOptions(r, t.id)), this.updateSel(), a != n.open?.disabled && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!a);
		}
	}
	updateTooltipClass(e) {
		let t = this.tooltipClass(e);
		if (t != this.currentClass) {
			for (let e of this.currentClass.split(" ")) e && this.dom.classList.remove(e);
			for (let e of t.split(" ")) e && this.dom.classList.add(e);
			this.currentClass = t;
		}
	}
	positioned(e) {
		this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let e = this.view.state.field(this.stateField), t = e.open;
		(t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = F(t.options.length, t.selected, this.view.state.facet(M).maxRenderedOptions), this.showOptions(t.options, e.id));
		let n = this.updateSelectedOption(t.selected);
		if (n) {
			this.destroyInfo();
			let { completion: r } = t.options[t.selected], { info: i } = r;
			if (!i) return;
			let a = typeof i == "string" ? document.createTextNode(i) : i(r);
			if (!a) return;
			"then" in a ? a.then((t) => {
				t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t, r);
			}).catch((e) => y(this.view.state, e, "completion info")) : (this.addInfoPane(a, r), n.setAttribute("aria-describedby", this.info.id));
		}
	}
	addInfoPane(e, t) {
		this.destroyInfo();
		let n = this.info = document.createElement("div");
		if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) n.appendChild(e), this.infoDestroy = null;
		else {
			let { dom: t, destroy: r } = e;
			n.appendChild(t), this.infoDestroy = r || null;
		}
		this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(e) {
		let t = null;
		for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != "LI" || !n.id ? r-- : r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
		return t && he(this.list, t), t;
	}
	measureInfo() {
		let e = this.dom.querySelector("[aria-selected]");
		if (!e || !this.info) return null;
		let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), i = this.space;
		if (!i) {
			let e = this.dom.ownerDocument.documentElement;
			i = {
				left: 0,
				top: 0,
				right: e.clientWidth,
				bottom: e.clientHeight
			};
		}
		return r.top > Math.min(i.bottom, t.bottom) - 10 || r.bottom < Math.max(i.top, t.top) + 10 ? null : this.view.state.facet(M).positionInfo(this.view, t, r, n, i, this.dom);
	}
	placeInfo(e) {
		this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
	}
	createListBox(e, t, n) {
		let r = document.createElement("ul");
		r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (e) => {
			e.target == r && e.preventDefault();
		});
		let i = null;
		for (let a = n.from; a < n.to; a++) {
			let { completion: o, match: s } = e[a], { section: c } = o;
			if (c) {
				let e = typeof c == "string" ? c : c.name;
				if (e != i && (a > n.from || n.from == 0)) {
					if (i = e, typeof c != "string" && c.header) r.appendChild(c.header(c));
					else {
						let t = r.appendChild(document.createElement("completion-section"));
						t.textContent = e;
					}
				}
			}
			let l = r.appendChild(document.createElement("li"));
			l.id = t + "-" + a, l.setAttribute("role", "option");
			let u = this.optionClass(o);
			u && (l.className = u);
			for (let e of this.optionContent) {
				let t = e(o, this.view.state, this.view, s);
				t && l.appendChild(t);
			}
		}
		return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
	}
	destroyInfo() {
		this.info &&= (this.infoDestroy && this.infoDestroy(), this.info.remove(), null);
	}
	destroy() {
		this.destroyInfo();
	}
};
function me(e, t) {
	return (n) => new pe(n, e, t);
}
function he(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = n.height / e.offsetHeight;
	r.top < n.top ? e.scrollTop -= (n.top - r.top) / i : r.bottom > n.bottom && (e.scrollTop += (r.bottom - n.bottom) / i);
}
function ge(e) {
	return (e.boost || 0) * 100 + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + +!!e.type;
}
function _e(e, t) {
	let n = [], r = null, i = null, a = (e) => {
		n.push(e);
		let { section: t } = e.completion;
		if (t) {
			r ||= [];
			let e = typeof t == "string" ? t : t.name;
			r.some((t) => t.name == e) || r.push(typeof t == "string" ? { name: e } : t);
		}
	}, o = t.facet(M);
	for (let r of e) if (r.hasResult()) {
		let e = r.result.getMatch;
		if (r.result.filter === !1) for (let t of r.result.options) a(new D(t, r.source, e ? e(t) : [], 1e9 - n.length));
		else {
			let n = t.sliceDoc(r.from, r.to), s, c = o.filterStrict ? new ue(n) : new le(n);
			for (let t of r.result.options) if (s = c.match(t.label)) {
				let n = t.displayLabel ? e ? e(t, s.matched) : [] : s.matched, o = s.score + (t.boost || 0);
				if (a(new D(t, r.source, n, o)), typeof t.section == "object" && t.section.rank === "dynamic") {
					let { name: e } = t.section;
					i ||= Object.create(null), i[e] = Math.max(o, i[e] || -1e9);
				}
			}
		}
	}
	if (r) {
		let e = Object.create(null), t = 0, a = (e, t) => (e.rank === "dynamic" && t.rank === "dynamic" ? i[t.name] - i[e.name] : 0) || (typeof e.rank == "number" ? e.rank : 1e9) - (typeof t.rank == "number" ? t.rank : 1e9) || (e.name < t.name ? -1 : 1);
		for (let n of r.sort(a)) t -= 1e5, e[n.name] = t;
		for (let t of n) {
			let { section: n } = t.completion;
			n && (t.score += e[typeof n == "string" ? n : n.name]);
		}
	}
	let s = [], c = null, l = o.compareCompletions;
	for (let e of n.sort((e, t) => t.score - e.score || l(e.completion, t.completion))) {
		let t = e.completion;
		!c || c.label != t.label || c.detail != t.detail || c.type != null && t.type != null && c.type != t.type || c.apply != t.apply || c.boost != t.boost ? s.push(e) : ge(e.completion) > ge(c) && (s[s.length - 1] = e), c = e.completion;
	}
	return s;
}
var ve = class e {
	constructor(e, t, n, r, i, a) {
		this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = i, this.disabled = a;
	}
	setSelected(t, n) {
		return t == this.selected || t >= this.options.length ? this : new e(this.options, Ce(n, t), this.tooltip, this.timestamp, t, this.disabled);
	}
	static build(t, n, r, i, a, o) {
		if (i && !o && t.some((e) => e.isPending)) return i.setDisabled();
		let s = _e(t, n);
		if (!s.length) return i && t.some((e) => e.isPending) ? i.setDisabled() : null;
		let c = n.facet(M).selectOnOpen ? 0 : -1;
		if (i && i.selected != c && i.selected != -1) {
			let e = i.options[i.selected].completion;
			for (let t = 0; t < s.length; t++) if (s[t].completion == e) {
				c = t;
				break;
			}
		}
		return new e(s, Ce(r, c), {
			pos: t.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
			create: Oe,
			above: a.aboveCursor
		}, i ? i.timestamp : Date.now(), c, !1);
	}
	map(t) {
		return new e(this.options, this.attrs, {
			...this.tooltip,
			pos: t.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new e(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
	}
}, ye = class e {
	constructor(e, t, n) {
		this.active = e, this.id = t, this.open = n;
	}
	static start() {
		return new e(we, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(t) {
		let { state: n } = t, r = n.facet(M), i = (r.override || n.languageDataAt("autocomplete", O(n)).map(ce)).map((e) => (this.active.find((t) => t.source == e) || new I(e, +!!this.active.some((e) => e.state != 0))).update(t, r));
		i.length == this.active.length && i.every((e, t) => e == this.active[t]) && (i = this.active);
		let a = this.open, o = t.effects.some((e) => e.is(L));
		a && t.docChanged && (a = a.map(t.changes)), t.selection || i.some((e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !be(i, this.active) || o ? a = ve.build(i, n, this.id, a, r, o) : a && a.disabled && !i.some((e) => e.isPending) && (a = null), !a && i.every((e) => !e.isPending) && i.some((e) => e.hasResult()) && (i = i.map((e) => e.hasResult() ? new I(e.source, 0) : e));
		for (let e of t.effects) e.is(P) && (a &&= a.setSelected(e.value, this.id));
		return i == this.active && a == this.open ? this : new e(i, this.id, a);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? xe : Se;
	}
};
function be(e, t) {
	if (e == t) return !0;
	for (let n = 0, r = 0;;) {
		for (; n < e.length && !e[n].hasResult();) n++;
		for (; r < t.length && !t[r].hasResult();) r++;
		let i = n == e.length, a = r == t.length;
		if (i || a) return i == a;
		if (e[n++].result != t[r++].result) return !1;
	}
}
var xe = { "aria-autocomplete": "list" }, Se = {};
function Ce(e, t) {
	let n = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": e
	};
	return t > -1 && (n["aria-activedescendant"] = e + "-" + t), n;
}
var we = [];
function Te(e, t) {
	if (e.isUserEvent("input.complete")) {
		let n = e.annotation(k);
		if (n && t.activateOnCompletion(n)) return 12;
	}
	let n = e.isUserEvent("input.type");
	return n && t.activateOnTyping ? 5 : n ? 1 : e.isUserEvent("delete.backward") ? 2 : e.selection ? 8 : e.docChanged ? 16 : 0;
}
var I = class e {
	constructor(e, t, n = !1) {
		this.source = e, this.state = t, this.explicit = n;
	}
	hasResult() {
		return !1;
	}
	get isPending() {
		return this.state == 1;
	}
	update(t, n) {
		let r = Te(t, n), i = this;
		(r & 8 || r & 16 && this.touches(t)) && (i = new e(i.source, 0)), r & 4 && i.state == 0 && (i = new e(this.source, 1)), i = i.updateFor(t, r);
		for (let n of t.effects) if (n.is(A)) i = new e(i.source, 1, n.value);
		else if (n.is(j)) i = new e(i.source, 0);
		else if (n.is(L)) for (let e of n.value) e.source == i.source && (i = e);
		return i;
	}
	updateFor(e, t) {
		return this.map(e.changes);
	}
	map(e) {
		return this;
	}
	touches(e) {
		return e.changes.touchesRange(O(e.state));
	}
}, Ee = class e extends I {
	constructor(e, t, n, r, i, a) {
		super(e, 3, t), this.limit = n, this.result = r, this.from = i, this.to = a;
	}
	hasResult() {
		return !0;
	}
	updateFor(t, n) {
		if (!(n & 3)) return this.map(t.changes);
		let r = this.result;
		r.map && !t.changes.empty && (r = r.map(r, t.changes));
		let i = t.changes.mapPos(this.from), a = t.changes.mapPos(this.to, 1), o = O(t.state);
		if (o > a || !r || n & 2 && (O(t.startState) == this.from || o < this.limit)) return new I(this.source, n & 4 ? 1 : 0);
		let s = t.changes.mapPos(this.limit);
		return De(r.validFor, t.state, i, a) ? new e(this.source, this.explicit, s, r, i, a) : r.update && (r = r.update(r, i, a, new w(t.state, o, !1))) ? new e(this.source, this.explicit, s, r, r.from, r.to ?? O(t.state)) : new I(this.source, 1, this.explicit);
	}
	map(t) {
		if (t.empty) return this;
		let n = this.result.map ? this.result.map(this.result, t) : this.result;
		return n ? new e(this.source, this.explicit, t.mapPos(this.limit), n, t.mapPos(this.from), t.mapPos(this.to, 1)) : new I(this.source, 0);
	}
	touches(e) {
		return e.changes.touchesRange(this.from, this.to);
	}
};
function De(e, t, n, r) {
	if (!e) return !1;
	let i = t.sliceDoc(n, r);
	return typeof e == "function" ? e(i, n, r, t) : ae(e, !0).test(i);
}
var L = /*@__PURE__*/ p.define({ map(e, t) {
	return e.map((e) => e.map(t));
} }), R = /*@__PURE__*/ C.define({
	create() {
		return ye.start();
	},
	update(e, t) {
		return e.update(t);
	},
	provide: (t) => [r.from(t, (e) => e.tooltip), e.contentAttributes.from(t, (e) => e.attrs)]
});
function z(e, t) {
	let n = t.completion.apply || t.completion.label, r = e.state.field(R).active.find((e) => e.source == t.source);
	return r instanceof Ee && (typeof n == "string" ? e.dispatch({
		...oe(e.state, n, r.from, r.to),
		annotations: k.of(t.completion)
	}) : n(e, t.completion, r.from, r.to), !0);
}
var Oe = /*@__PURE__*/ me(R, z);
function B(e, t = "option") {
	return (n) => {
		let r = n.state.field(R, !1);
		if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(M).interactionDelay) return !1;
		let i = 1, a;
		t == "page" && (a = S(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
		let { length: o } = r.open.options, s = r.open.selected > -1 ? r.open.selected + i * (e ? 1 : -1) : e ? 0 : o - 1;
		return s < 0 ? s = t == "page" ? 0 : o - 1 : s >= o && (s = t == "page" ? o - 1 : 0), n.dispatch({ effects: P.of(s) }), !0;
	};
}
var V = (e) => {
	let t = e.state.field(R, !1);
	return e.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < e.state.facet(M).interactionDelay ? !1 : z(e, t.open.options[t.open.selected]);
}, H = (e) => e.state.field(R, !1) ? (e.dispatch({ effects: A.of(!0) }), !0) : !1, U = (e) => {
	let t = e.state.field(R, !1);
	return !t || !t.active.some((e) => e.state != 0) ? !1 : (e.dispatch({ effects: j.of(null) }), !0);
}, ke = class {
	constructor(e, t) {
		this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
	}
}, Ae = 50, je = 1e3, Me = /*@__PURE__*/ ne.fromClass(class {
	constructor(e) {
		this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
		for (let t of e.state.field(R).active) t.isPending && this.startQuery(t);
	}
	update(e) {
		let t = e.state.field(R), n = e.state.facet(M);
		if (!e.selectionSet && !e.docChanged && e.startState.field(R) == t) return;
		let r = e.transactions.some((e) => {
			let t = Te(e, n);
			return t & 8 || (e.selection || e.docChanged) && !(t & 3);
		});
		for (let t = 0; t < this.running.length; t++) {
			let n = this.running[t];
			if (r || n.context.abortOnDocChange && e.docChanged || n.updates.length + e.transactions.length > Ae && Date.now() - n.time > je) {
				for (let e of n.context.abortListeners) try {
					e();
				} catch (e) {
					y(this.view.state, e);
				}
				n.context.abortListeners = null, this.running.splice(t--, 1);
			} else n.updates.push(...e.transactions);
		}
		this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), e.transactions.some((e) => e.effects.some((e) => e.is(A))) && (this.pendingStart = !0);
		let i = this.pendingStart ? 50 : n.activateOnTypingDelay;
		if (this.debounceUpdate = t.active.some((e) => e.isPending && !this.running.some((t) => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), i) : -1, this.composing != 0) for (let t of e.transactions) t.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && t.selection && (this.composing = 3);
	}
	startUpdate() {
		this.debounceUpdate = -1, this.pendingStart = !1;
		let { state: e } = this.view, t = e.field(R);
		for (let e of t.active) e.isPending && !this.running.some((t) => t.active.source == e.source) && this.startQuery(e);
		this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(M).updateSyncTime));
	}
	startQuery(e) {
		let { state: t } = this.view, n = new w(t, O(t), e.explicit, this.view), r = new ke(e, n);
		this.running.push(r), Promise.resolve(e.source(n)).then((e) => {
			r.context.aborted || (r.done = e || null, this.scheduleAccept());
		}, (e) => {
			this.view.dispatch({ effects: j.of(null) }), y(this.view.state, e);
		});
	}
	scheduleAccept() {
		this.running.every((e) => e.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(M).updateSyncTime));
	}
	accept() {
		this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
		let e = [], t = this.view.state.facet(M), n = this.view.state.field(R);
		for (let r = 0; r < this.running.length; r++) {
			let i = this.running[r];
			if (i.done === void 0) continue;
			if (this.running.splice(r--, 1), i.done) {
				let n = O(i.updates.length ? i.updates[0].startState : this.view.state), r = Math.min(n, i.done.from + +!i.active.explicit), a = new Ee(i.active.source, i.active.explicit, r, i.done, i.done.from, i.done.to ?? n);
				for (let e of i.updates) a = a.update(e, t);
				if (a.hasResult()) {
					e.push(a);
					continue;
				}
			}
			let a = n.active.find((e) => e.source == i.active.source);
			if (a && a.isPending) {
				if (i.done == null) {
					let n = new I(i.active.source, 0);
					for (let e of i.updates) n = n.update(e, t);
					n.isPending || e.push(n);
				} else this.startQuery(a);
			}
		}
		(e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: L.of(e) });
	}
}, { eventHandlers: {
	blur(e) {
		let t = this.view.state.field(R, !1);
		if (t && t.tooltip && this.view.state.facet(M).closeOnBlur) {
			let n = t.open && S(this.view, t.open.tooltip);
			(!n || !n.dom.contains(e.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: j.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: A.of(!1) }), 20), this.composing = 0;
	}
} }), Ne = typeof navigator == "object" && /*@__PURE__*/ /Win/.test(navigator.platform), Pe = /*@__PURE__*/ d.highest(/*@__PURE__*/ e.domEventHandlers({ keydown(e, t) {
	let n = t.state.field(R, !1);
	if (!n || !n.open || n.open.disabled || n.open.selected < 0 || e.key.length > 1 || e.ctrlKey && !(Ne && e.altKey) || e.metaKey) return !1;
	let r = n.open.options[n.open.selected], i = n.active.find((e) => e.source == r.source), a = r.completion.commitCharacters || i.result.commitCharacters;
	return a && a.indexOf(e.key) > -1 && z(t, r), !1;
} })), W = /*@__PURE__*/ e.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: "monospace",
		whiteSpace: "nowrap",
		overflow: "hidden auto",
		maxWidth_fallback: "700px",
		maxWidth: "min(700px, 95vw)",
		minWidth: "250px",
		maxHeight: "10em",
		height: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: "1px 3px",
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: "hidden",
			textOverflow: "ellipsis",
			cursor: "pointer"
		},
		"& > completion-section": {
			display: "list-item",
			borderBottom: "1px solid silver",
			paddingLeft: "0.5em",
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#17c",
		color: "white"
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#347",
		color: "white"
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: "\"···\"",
		opacity: .5,
		display: "block",
		textAlign: "center",
		cursor: "pointer"
	},
	".cm-tooltip.cm-completionInfo": {
		position: "absolute",
		padding: "3px 9px",
		width: "max-content",
		maxWidth: "400px",
		boxSizing: "border-box",
		whiteSpace: "pre-line"
	},
	".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
	".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
	"&light .cm-snippetField": { backgroundColor: "#00000022" },
	"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
	".cm-snippetFieldPosition": {
		verticalAlign: "text-top",
		width: 0,
		height: "1.15em",
		display: "inline-block",
		margin: "0 -0.7px -.7em",
		borderLeft: "1.4px dotted #888"
	},
	".cm-completionMatchedText": { textDecoration: "underline" },
	".cm-completionDetail": {
		marginLeft: "0.5em",
		fontStyle: "italic"
	},
	".cm-completionIcon": {
		fontSize: "90%",
		width: ".8em",
		display: "inline-block",
		textAlign: "center",
		paddingRight: ".6em",
		opacity: "0.6",
		boxSizing: "content-box"
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
	".cm-completionIcon-class": { "&:after": { content: "'○'" } },
	".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
	".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
	".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
	".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
	".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
	".cm-completionIcon-property": { "&:after": { content: "'□'" } },
	".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
	".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
	".cm-completionIcon-text": { "&:after": {
		content: "'abc'",
		fontSize: "50%",
		verticalAlign: "middle"
	} }
}), Fe = class {
	constructor(e, t, n, r) {
		this.field = e, this.line = t, this.from = n, this.to = r;
	}
}, Ie = class e {
	constructor(e, t, n) {
		this.field = e, this.from = t, this.to = n;
	}
	map(t) {
		let n = t.mapPos(this.from, -1, l.TrackDel), r = t.mapPos(this.to, 1, l.TrackDel);
		return n == null || r == null ? null : new e(this.field, n, r);
	}
}, Le = class e {
	constructor(e, t) {
		this.lines = e, this.fieldPositions = t;
	}
	instantiate(e, t) {
		let n = [], r = [t], i = e.doc.lineAt(t), a = /^\s*/.exec(i.text)[0];
		for (let i of this.lines) {
			if (n.length) {
				let n = a, o = /^\t*/.exec(i)[0].length;
				for (let t = 0; t < o; t++) n += e.facet(x);
				r.push(t + n.length - o), i = n + i.slice(o);
			}
			n.push(i), t += i.length + 1;
		}
		return {
			text: n,
			ranges: this.fieldPositions.map((e) => new Ie(e.field, r[e.line] + e.from, r[e.line] + e.to))
		};
	}
	static parse(t) {
		let n = [], r = [], i = [], a;
		for (let e of t.split(/\r\n?|\n/)) {
			for (; a = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(e);) {
				let t = a[1] ? +a[1] : null, o = a[2] || a[3] || "", s = -1;
				t === 0 && (t = 1e9);
				let c = o.replace(/\\[{}]/g, (e) => e[1]);
				for (let e = 0; e < n.length; e++) (t == null ? c && n[e].name == c : n[e].seq == t) && (s = e);
				if (s < 0) {
					let e = 0;
					for (; e < n.length && (t == null || n[e].seq != null && n[e].seq < t);) e++;
					n.splice(e, 0, {
						seq: t,
						name: c
					}), s = e;
					for (let e of i) e.field >= s && e.field++;
				}
				for (let e of i) if (e.line == r.length && e.from > a.index) {
					let t = a[2] ? 3 + (a[1] || "").length : 2;
					e.from -= t, e.to -= t;
				}
				i.push(new Fe(s, r.length, a.index, a.index + c.length)), e = e.slice(0, a.index) + o + e.slice(a.index + a[0].length);
			}
			e = e.replace(/\\([{}])/g, (e, t, n) => {
				for (let e of i) e.line == r.length && e.from > n && (e.from--, e.to--);
				return t;
			}), r.push(e);
		}
		return new e(r, i);
	}
}, Re = /*@__PURE__*/ v.widget({ widget: /*@__PURE__*/ new class extends ee {
	toDOM() {
		let e = document.createElement("span");
		return e.className = "cm-snippetFieldPosition", e;
	}
	ignoreEvent() {
		return !1;
	}
}() }), ze = /*@__PURE__*/ v.mark({ class: "cm-snippetField" }), G = class e {
	constructor(e, t) {
		this.ranges = e, this.active = t, this.deco = v.set(e.map((e) => (e.from == e.to ? Re : ze).range(e.from, e.to)), !0);
	}
	map(t) {
		let n = [];
		for (let e of this.ranges) {
			let r = e.map(t);
			if (!r) return null;
			n.push(r);
		}
		return new e(n, this.active);
	}
	selectionInsideField(e) {
		return e.ranges.every((e) => this.ranges.some((t) => t.field == this.active && t.from <= e.from && t.to >= e.to));
	}
}, K = /*@__PURE__*/ p.define({ map(e, t) {
	return e && e.map(t);
} }), Be = /*@__PURE__*/ p.define(), q = /*@__PURE__*/ C.define({
	create() {
		return null;
	},
	update(e, t) {
		for (let n of t.effects) {
			if (n.is(K)) return n.value;
			if (n.is(Be) && e) return new G(e.ranges, n.value);
		}
		return e && t.docChanged && (e = e.map(t.changes)), e && t.selection && !e.selectionInsideField(t.selection) && (e = null), e;
	},
	provide: (t) => e.decorations.from(t, (e) => e ? e.deco : v.none)
});
function J(e, n) {
	return t.create(e.filter((e) => e.field == n).map((e) => t.range(e.from, e.to)));
}
function Ve(e) {
	let t = Le.parse(e);
	return (e, r, i, a) => {
		let { text: o, ranges: s } = t.instantiate(e.state, i), { main: c } = e.state.selection, l = {
			changes: {
				from: i,
				to: a == c.from ? c.to : a,
				insert: n.of(o)
			},
			scrollIntoView: !0,
			annotations: r ? [k.of(r), g.userEvent.of("input.complete")] : void 0
		};
		if (s.length && (l.selection = J(s, 0)), s.some((e) => e.field > 0)) {
			let t = new G(s, 0), n = l.effects = [K.of(t)];
			e.state.field(q, !1) === void 0 && n.push(p.appendConfig.of([
				q,
				Ge,
				qe,
				W
			]));
		}
		e.dispatch(e.state.update(l));
	};
}
function He(e) {
	return ({ state: t, dispatch: n }) => {
		let r = t.field(q, !1);
		if (!r || e < 0 && r.active == 0) return !1;
		let i = r.active + e, a = e > 0 && !r.ranges.some((t) => t.field == i + e);
		return n(t.update({
			selection: J(r.ranges, i),
			effects: K.of(a ? null : new G(r.ranges, i)),
			scrollIntoView: !0
		})), !0;
	};
}
var Ue = [{
	key: "Tab",
	run: /* @__PURE__ */ He(1),
	shift: /* @__PURE__ */ He(-1)
}, {
	key: "Escape",
	run: ({ state: e, dispatch: t }) => e.field(q, !1) ? (t(e.update({ effects: K.of(null) })), !0) : !1
}], We = /*@__PURE__*/ c.define({ combine(e) {
	return e.length ? e[0] : Ue;
} }), Ge = /*@__PURE__*/ d.highest(/*@__PURE__*/ b.compute([We], (e) => e.facet(We)));
function Ke(e, t) {
	return {
		...t,
		apply: Ve(e)
	};
}
var qe = /*@__PURE__*/ e.domEventHandlers({ mousedown(e, t) {
	let n = t.state.field(q, !1), r;
	if (!n || (r = t.posAtCoords({
		x: e.clientX,
		y: e.clientY
	})) == null) return !1;
	let i = n.ranges.find((e) => e.from <= r && e.to >= r);
	return !i || i.field == n.active ? !1 : (t.dispatch({
		selection: J(n.ranges, i.field),
		effects: K.of(n.ranges.some((e) => e.field > i.field) ? new G(n.ranges, i.field) : null),
		scrollIntoView: !0
	}), !0);
} }), Y = {
	brackets: [
		"(",
		"[",
		"{",
		"'",
		"\""
	],
	before: ")]}:;>",
	stringPrefixes: []
}, X = /*@__PURE__*/ p.define({ map(e, t) {
	return t.mapPos(e, -1, l.TrackAfter) ?? void 0;
} }), Z = /*@__PURE__*/ new class extends s {}();
Z.startSide = 1, Z.endSide = -1;
var Je = /*@__PURE__*/ C.define({
	create() {
		return i.empty;
	},
	update(e, t) {
		if (e = e.map(t.changes), t.selection) {
			let n = t.state.doc.lineAt(t.selection.main.head);
			e = e.update({ filter: (e) => e >= n.from && e <= n.to });
		}
		for (let n of t.effects) n.is(X) && (e = e.update({ add: [Z.range(n.value, n.value + 1)] }));
		return e;
	}
});
function Ye() {
	return [et, Je];
}
var Xe = "()[]{}<>«»»«［］｛｝";
function Ze(e) {
	for (let t = 0; t < 16; t += 2) if (Xe.charCodeAt(t) == e) return Xe.charAt(t + 1);
	return te(e < 128 ? e : e + 1);
}
function Qe(e, t) {
	return e.languageDataAt("closeBrackets", t)[0] || Y;
}
var $e = typeof navigator == "object" && /*@__PURE__*/ /Android\b/.test(navigator.userAgent), et = /*@__PURE__*/ e.inputHandler.of((e, t, n, r) => {
	if (($e ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
	let i = e.state.selection.main;
	if (r.length > 2 || r.length == 2 && h(a(r, 0)) == 1 || t != i.from || n != i.to) return !1;
	let o = nt(e.state, r);
	return o ? (e.dispatch(o), !0) : !1;
}), tt = [{
	key: "Backspace",
	run: ({ state: e, dispatch: n }) => {
		if (e.readOnly) return !1;
		let r = Qe(e, e.selection.main.head).brackets || Y.brackets, i = null, o = e.changeByRange((n) => {
			if (n.empty) {
				let i = it(e.doc, n.head);
				for (let o of r) if (o == i && Q(e.doc, n.head) == Ze(a(o, 0))) return {
					changes: {
						from: n.head - o.length,
						to: n.head + o.length
					},
					range: t.cursor(n.head - o.length)
				};
			}
			return { range: i = n };
		});
		return i || n(e.update(o, {
			scrollIntoView: !0,
			userEvent: "delete.backward"
		})), !i;
	}
}];
function nt(e, t) {
	let n = Qe(e, e.selection.main.head), r = n.brackets || Y.brackets;
	for (let i of r) {
		let o = Ze(a(i, 0));
		if (t == i) return o == i ? st(e, i, r.indexOf(i + i + i) > -1, n) : at(e, i, o, n.before || Y.before);
		if (t == o && rt(e, e.selection.main.from)) return ot(e, i, o);
	}
	return null;
}
function rt(e, t) {
	let n = !1;
	return e.field(Je).between(0, e.doc.length, (e) => {
		e == t && (n = !0);
	}), n;
}
function Q(e, t) {
	let n = e.sliceString(t, t + 2);
	return n.slice(0, h(a(n, 0)));
}
function it(e, t) {
	let n = e.sliceString(t - 2, t);
	return h(a(n, 0)) == n.length ? n : n.slice(1);
}
function at(e, n, r, i) {
	let a = null, o = e.changeByRange((o) => {
		if (!o.empty) return {
			changes: [{
				insert: n,
				from: o.from
			}, {
				insert: r,
				from: o.to
			}],
			effects: X.of(o.to + n.length),
			range: t.range(o.anchor + n.length, o.head + n.length)
		};
		let s = Q(e.doc, o.head);
		return !s || /\s/.test(s) || i.indexOf(s) > -1 ? {
			changes: {
				insert: n + r,
				from: o.head
			},
			effects: X.of(o.head + n.length),
			range: t.cursor(o.head + n.length)
		} : { range: a = o };
	});
	return a ? null : e.update(o, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function ot(e, n, r) {
	let i = null, a = e.changeByRange((n) => n.empty && Q(e.doc, n.head) == r ? {
		changes: {
			from: n.head,
			to: n.head + r.length,
			insert: r
		},
		range: t.cursor(n.head + r.length)
	} : i = { range: n });
	return i ? null : e.update(a, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function st(e, n, r, i) {
	let a = i.stringPrefixes || Y.stringPrefixes, o = null, s = e.changeByRange((i) => {
		if (!i.empty) return {
			changes: [{
				insert: n,
				from: i.from
			}, {
				insert: n,
				from: i.to
			}],
			effects: X.of(i.to + n.length),
			range: t.range(i.anchor + n.length, i.head + n.length)
		};
		let s = i.head, c = Q(e.doc, s), l;
		if (c == n) {
			if (ct(e, s)) return {
				changes: {
					insert: n + n,
					from: s
				},
				effects: X.of(s + n.length),
				range: t.cursor(s + n.length)
			};
			if (rt(e, s)) {
				let i = r && e.sliceDoc(s, s + n.length * 3) == n + n + n ? n + n + n : n;
				return {
					changes: {
						from: s,
						to: s + i.length,
						insert: i
					},
					range: t.cursor(s + i.length)
				};
			}
		} else if (r && e.sliceDoc(s - 2 * n.length, s) == n + n && (l = $(e, s - 2 * n.length, a)) > -1 && ct(e, l)) return {
			changes: {
				insert: n + n + n + n,
				from: s
			},
			effects: X.of(s + n.length),
			range: t.cursor(s + n.length)
		};
		else if (e.charCategorizer(s)(c) != u.Word && $(e, s, a) > -1 && !lt(e, s, n, a)) return {
			changes: {
				insert: n + n,
				from: s
			},
			effects: X.of(s + n.length),
			range: t.cursor(s + n.length)
		};
		return { range: o = i };
	});
	return o ? null : e.update(s, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function ct(e, t) {
	let n = o(e).resolveInner(t + 1);
	return n.parent && n.from == t;
}
function lt(e, t, n, r) {
	let i = o(e).resolveInner(t, -1), a = r.reduce((e, t) => Math.max(e, t.length), 0);
	for (let o = 0; o < 5; o++) {
		let o = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + a)), s = o.indexOf(n);
		if (!s || s > -1 && r.indexOf(o.slice(0, s)) > -1) {
			let t = i.firstChild;
			for (; t && t.from == i.from && t.to - t.from > n.length + s;) {
				if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
				t = t.firstChild;
			}
			return !0;
		}
		let c = i.to == t && i.parent;
		if (!c) break;
		i = c;
	}
	return !1;
}
function $(e, t, n) {
	let r = e.charCategorizer(t);
	if (r(e.sliceDoc(t - 1, t)) != u.Word) return t;
	for (let i of n) {
		let n = t - i.length;
		if (e.sliceDoc(n, t) == i && r(e.sliceDoc(n - 1, n)) != u.Word) return n;
	}
	return -1;
}
function ut(e = {}) {
	return [
		Pe,
		R,
		M.of(e),
		Me,
		ft,
		W
	];
}
var dt = [
	{
		key: "Ctrl-Space",
		run: H
	},
	{
		mac: "Alt-`",
		run: H
	},
	{
		mac: "Alt-i",
		run: H
	},
	{
		key: "Escape",
		run: U
	},
	{
		key: "ArrowDown",
		run: /*@__PURE__*/ B(!0)
	},
	{
		key: "ArrowUp",
		run: /*@__PURE__*/ B(!1)
	},
	{
		key: "PageDown",
		run: /*@__PURE__*/ B(!0, "page")
	},
	{
		key: "PageUp",
		run: /*@__PURE__*/ B(!1, "page")
	},
	{
		key: "Enter",
		run: V
	}
], ft = /*@__PURE__*/ d.highest(/*@__PURE__*/ b.computeN([M], (e) => e.facet(M).defaultKeymap ? [dt] : []));
//#endregion
export { tt as a, dt as c, Ve as d, Ke as f, Ye as i, ie as l, V as n, U as o, ut as r, E as s, w as t, oe as u };
