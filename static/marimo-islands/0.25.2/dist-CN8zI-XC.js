import { $ as e, A as t, At as n, Bt as r, D as i, Dt as a, E as o, Et as s, Ft as c, Gt as l, I as u, It as d, Kt as f, Mt as p, N as m, Q as ee, Rt as h, St as te, Tt as ne, Vt as g, W as _, Wt as re, Z as v, _t as ie, ct as ae, j as oe, mt as se, nt as ce, o as le, rt as ue, tt as de, wt as y, zt as fe } from "./dist-DoE4XJBC.js";
//#region ../node_modules/.pnpm/@codemirror+commands@6.11.1/node_modules/@codemirror/commands/dist/index.js
var pe = (e) => {
	let { state: t } = e, n = t.doc.lineAt(t.selection.main.from), r = x(e.state, n.from);
	return r.line ? me(e) : r.block ? ge(e) : !1;
};
function b(e, t) {
	return ({ state: n, dispatch: r }) => {
		if (n.readOnly) return !1;
		let i = e(t, n);
		return i ? (r(n.update(i)), !0) : !1;
	};
}
var me = /*@__PURE__*/ b(be, 0), he = /*@__PURE__*/ b(ye, 0), ge = /*@__PURE__*/ b((e, t) => ye(e, t, ve(t)), 0);
function x(e, t) {
	let n = e.languageDataAt("commentTokens", t, 1);
	return n.length ? n[0] : {};
}
var S = 50;
function _e(e, { open: t, close: n }, r, i) {
	let a = e.sliceDoc(r - S, r), o = e.sliceDoc(i, i + S), s = /\s*$/.exec(a)[0].length, c = /^\s*/.exec(o)[0].length, l = a.length - s;
	if (a.slice(l - t.length, l) == t && o.slice(c, c + n.length) == n) return {
		open: {
			pos: r - s,
			margin: s && 1
		},
		close: {
			pos: i + c,
			margin: c && 1
		}
	};
	let u, d;
	i - r <= 100 ? u = d = e.sliceDoc(r, i) : (u = e.sliceDoc(r, r + S), d = e.sliceDoc(i - S, i));
	let f = /^\s*/.exec(u)[0].length, p = /\s*$/.exec(d)[0].length, m = d.length - p - n.length;
	return u.slice(f, f + t.length) == t && d.slice(m, m + n.length) == n ? {
		open: {
			pos: r + f + t.length,
			margin: +!!/\s/.test(u.charAt(f + t.length))
		},
		close: {
			pos: i - p - n.length,
			margin: +!!/\s/.test(d.charAt(m - 1))
		}
	} : null;
}
function ve(e) {
	let t = [];
	for (let n of e.selection.ranges) {
		let r = e.doc.lineAt(n.from), i = n.to <= r.to ? r : e.doc.lineAt(n.to);
		i.from > r.from && i.from == n.to && (i = n.to == r.to + 1 ? r : e.doc.lineAt(n.to - 1));
		let a = t.length - 1;
		a >= 0 && t[a].to > r.from ? t[a].to = i.to : t.push({
			from: r.from + /^\s*/.exec(r.text)[0].length,
			to: i.to
		});
	}
	return t;
}
function ye(e, t, n = t.selection.ranges) {
	let r = n.map((e) => x(t, e.from).block);
	if (!r.every((e) => e)) return null;
	let i = n.map((e, n) => _e(t, r[n], e.from, e.to));
	if (e != 2 && !i.every((e) => e)) return { changes: t.changes(n.map((e, t) => i[t] ? [] : [{
		from: e.from,
		insert: r[t].open + " "
	}, {
		from: e.to,
		insert: " " + r[t].close
	}])) };
	if (e != 1 && i.some((e) => e)) {
		let e = [];
		for (let t = 0, n; t < i.length; t++) if (n = i[t]) {
			let i = r[t], { open: a, close: o } = n;
			e.push({
				from: a.pos - i.open.length,
				to: a.pos + a.margin
			}, {
				from: o.pos - o.margin,
				to: o.pos + i.close.length
			});
		}
		return { changes: e };
	}
	return null;
}
function be(e, t, n = t.selection.ranges) {
	let r = [], i = -1;
	ranges: for (let { from: e, to: a } of n) {
		let n = r.length, o = 1e9, s;
		for (let n = e; n <= a;) {
			let c = t.doc.lineAt(n);
			if (s == null && (s = x(t, c.from).line, !s)) continue ranges;
			if (c.from > i && (e == a || a > c.from)) {
				i = c.from;
				let e = /^\s*/.exec(c.text)[0].length, t = e == c.length, n = c.text.slice(e, e + s.length) == s ? e : -1;
				e < c.text.length && e < o && (o = e), r.push({
					line: c,
					comment: n,
					token: s,
					indent: e,
					empty: t,
					single: !1
				});
			}
			n = c.to + 1;
		}
		if (o < 1e9) for (let e = n; e < r.length; e++) r[e].indent < r[e].line.text.length && (r[e].indent = o);
		r.length == n + 1 && (r[n].single = !0);
	}
	if (e != 2 && r.some((e) => e.comment < 0 && (!e.empty || e.single))) {
		let e = [];
		for (let { line: t, token: n, indent: i, empty: a, single: o } of r) (o || !a) && e.push({
			from: t.from + i,
			insert: n + " "
		});
		let n = t.changes(e);
		return {
			changes: n,
			selection: t.selection.map(n, 1)
		};
	}
	if (e != 1 && r.some((e) => e.comment >= 0)) {
		let e = [];
		for (let { line: t, comment: n, token: i } of r) if (n >= 0) {
			let r = t.from + n, a = r + i.length;
			t.text[a - t.from] == " " && a++, e.push({
				from: r,
				to: a
			});
		}
		return { changes: e };
	}
	return null;
}
var C = /*@__PURE__*/ ne.define(), xe = /*@__PURE__*/ ne.define(), Se = /*@__PURE__*/ p.define(), Ce = /*@__PURE__*/ p.define({ combine(e) {
	return re(e, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (e, t) => t
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
	});
} }), w = /*@__PURE__*/ fe.define({
	create() {
		return j.empty;
	},
	update(e, t) {
		let n = t.state.facet(Ce), r = t.annotation(C);
		if (r) {
			let i = D.fromTransaction(t, r.selection), a = r.side, o = a == 0 ? e.undone : e.done;
			return o = i ? O(o, o.length, n.minDepth, i) : Ne(o, t.startState.selection), new j(a == 0 ? r.rest : o, a == 0 ? o : r.rest);
		}
		let i = t.annotation(xe);
		if ((i == "full" || i == "before") && (e = e.isolate()), t.annotation(g.addToHistory) === !1) return t.changes.empty ? e : e.addMapping(t.changes.desc);
		let a = D.fromTransaction(t), o = t.annotation(g.time), s = t.annotation(g.userEvent);
		return a ? e = e.addChanges(a, o, s, n, t) : t.selection && (e = e.addSelection(t.startState.selection, o, s, n.newGroupDelay)), (i == "full" || i == "after") && (e = e.isolate()), e;
	},
	toJSON(e) {
		return {
			done: e.done.map((e) => e.toJSON()),
			undone: e.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(e) {
		return new j(e.done.map(D.fromJSON), e.undone.map(D.fromJSON));
	}
});
function we(t = {}) {
	return [
		w,
		Ce.of(t),
		e.domEventHandlers({ beforeinput(e, t) {
			let n = e.inputType == "historyUndo" ? Ee : e.inputType == "historyRedo" ? E : null;
			return n ? (e.preventDefault(), n(t)) : !1;
		} })
	];
}
var Te = w;
function T(e, t) {
	return function({ state: n, dispatch: r }) {
		if (!t && n.readOnly) return !1;
		let i = n.field(w, !1);
		if (!i) return !1;
		let a = i.pop(e, n, t);
		return a ? (r(a), !0) : !1;
	};
}
var Ee = /*@__PURE__*/ T(0, !1), E = /*@__PURE__*/ T(1, !1), De = /*@__PURE__*/ T(0, !0), Oe = /*@__PURE__*/ T(1, !0), D = class e {
	constructor(e, t, n, r, i) {
		this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = i;
	}
	setSelAfter(t) {
		return new e(this.changes, this.effects, this.mapped, this.startSelection, t);
	}
	toJSON() {
		return {
			changes: this.changes?.toJSON(),
			mapped: this.mapped?.toJSON(),
			startSelection: this.startSelection?.toJSON(),
			selectionsAfter: this.selectionsAfter.map((e) => e.toJSON())
		};
	}
	static fromJSON(t) {
		return new e(t.changes && a.fromJSON(t.changes), [], t.mapped && s.fromJSON(t.mapped), t.startSelection && n.fromJSON(t.startSelection), t.selectionsAfter.map(n.fromJSON));
	}
	static fromTransaction(t, n) {
		let r = k;
		for (let e of t.startState.facet(Se)) {
			let n = e(t);
			n.length && (r = r.concat(n));
		}
		return !r.length && t.changes.empty ? null : new e(t.changes.invert(t.startState.doc), r, void 0, n || t.startState.selection, k);
	}
	static selection(t) {
		return new e(void 0, k, void 0, void 0, t);
	}
};
function O(e, t, n, r) {
	let i = t + 1 > n + 20 ? t - n - 1 : 0, a = e.slice(i, t);
	return a.push(r), a;
}
function ke(e, t) {
	let n = [], r = !1;
	return e.iterChangedRanges((e, t) => n.push(e, t)), t.iterChangedRanges((e, t, i, a) => {
		for (let e = 0; e < n.length;) {
			let t = n[e++], o = n[e++];
			a >= t && i <= o && (r = !0);
		}
	}), r;
}
function Ae(e, t) {
	return e.ranges.length == t.ranges.length && e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function je(e, t) {
	return e.length ? t.length ? e.concat(t) : e : t;
}
var k = [], Me = 200;
function Ne(e, t) {
	if (e.length) {
		let n = e[e.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - Me));
		return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), O(e, e.length - 1, 1e9, n.setSelAfter(r)));
	}
	return [D.selection([t])];
}
function Pe(e) {
	let t = e[e.length - 1], n = e.slice();
	return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n;
}
function A(e, t) {
	if (!e.length) return e;
	let n = e.length, r = k;
	for (; n;) {
		let i = Fe(e[n - 1], t, r);
		if (i.changes && !i.changes.empty || i.effects.length) {
			let t = e.slice(0, n);
			return t[n - 1] = i, t;
		}
		t = i.mapped, n--, r = i.selectionsAfter;
	}
	return r.length ? [D.selection(r)] : k;
}
function Fe(e, t, n) {
	let r = je(e.selectionsAfter.length ? e.selectionsAfter.map((e) => e.map(t)) : k, n);
	if (!e.changes) return D.selection(r);
	let i = e.changes.map(t), a = t.mapDesc(e.changes, !0), o = e.mapped ? e.mapped.composeDesc(a) : a;
	return new D(i, h.mapEffects(e.effects, t), o, e.startSelection.map(a), r);
}
var Ie = /^(input\.type|delete)($|\.)/, j = class e {
	constructor(e, t, n = 0, r = void 0) {
		this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
	}
	isolate() {
		return this.prevTime ? new e(this.done, this.undone) : this;
	}
	addChanges(t, n, r, i, a) {
		let o = this.done, s = o[o.length - 1];
		return o = s && s.changes && !s.changes.empty && t.changes && (!r || Ie.test(r)) && (!s.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(a, ke(s.changes, t.changes)) || r == "input.type.compose") ? O(o, o.length - 1, i.minDepth, new D(t.changes.compose(s.changes), je(h.mapEffects(t.effects, s.changes), s.effects), s.mapped, s.startSelection, k)) : O(o, o.length, i.minDepth, t), new e(o, k, n, r);
	}
	addSelection(t, n, r, i) {
		let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : k;
		return a.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && Ae(a[a.length - 1], t) ? this : new e(Ne(this.done, t), this.undone, n, r);
	}
	addMapping(t) {
		return new e(A(this.done, t), A(this.undone, t), this.prevTime, this.prevUserEvent);
	}
	pop(e, t, n) {
		let r = e == 0 ? this.done : this.undone;
		if (r.length == 0) return null;
		let i = r[r.length - 1], a = i.selectionsAfter[0] || (i.startSelection ? i.startSelection.map(i.changes.invertedDesc, 1) : t.selection);
		if (n && i.selectionsAfter.length) return t.update({
			selection: i.selectionsAfter[i.selectionsAfter.length - 1],
			annotations: C.of({
				side: e,
				rest: Pe(r),
				selection: a
			}),
			userEvent: e == 0 ? "select.undo" : "select.redo",
			scrollIntoView: !0
		});
		if (i.changes) {
			let n = r.length == 1 ? k : r.slice(0, r.length - 1);
			return i.mapped && (n = A(n, i.mapped)), t.update({
				changes: i.changes,
				selection: i.startSelection,
				effects: i.effects,
				annotations: C.of({
					side: e,
					rest: n,
					selection: a
				}),
				filter: !1,
				userEvent: e == 0 ? "undo" : "redo",
				scrollIntoView: !0
			});
		}
		return null;
	}
};
j.empty = /*@__PURE__*/ new j(k, k);
var Le = [
	{
		key: "Mod-z",
		run: Ee,
		preventDefault: !0
	},
	{
		key: "Mod-y",
		mac: "Mod-Shift-z",
		run: E,
		preventDefault: !0
	},
	{
		linux: "Ctrl-Shift-z",
		run: E,
		preventDefault: !0
	},
	{
		key: "Mod-u",
		run: De,
		preventDefault: !0
	},
	{
		key: "Alt-u",
		mac: "Mod-Shift-u",
		run: Oe,
		preventDefault: !0
	}
];
function M(e, t) {
	return n.create(e.ranges.map(t), e.mainIndex);
}
function N(e, t) {
	return e.update({
		selection: t,
		scrollIntoView: !0,
		userEvent: "select"
	});
}
function P({ state: e, dispatch: t }, n) {
	let r = M(e.selection, n);
	return !r.eq(e.selection, !0) && (t(N(e, r)), !0);
}
function F(e, t) {
	return n.cursor(t ? e.to : e.from);
}
function Re(e, t) {
	return P(e, (n) => n.empty ? e.moveByChar(n, t) : F(n, t));
}
function I(e) {
	return e.textDirectionAt(e.state.selection.main.head) == ee.LTR;
}
var ze = (e) => Re(e, !I(e)), Be = (e) => Re(e, I(e));
function Ve(e, t) {
	return P(e, (n) => n.empty ? e.moveByGroup(n, t) : F(n, t));
}
var He = (e) => Ve(e, !I(e)), Ue = (e) => Ve(e, I(e));
typeof Intl < "u" && Intl.Segmenter;
function We(e, t, n) {
	if (t.type.prop(n)) return !0;
	let r = t.to - t.from;
	return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function L(e, t, r) {
	let i = u(e).resolveInner(t.head), a = r ? _.closedBy : _.openedBy;
	for (let n = t.head;;) {
		let t = r ? i.childAfter(n) : i.childBefore(n);
		if (!t) break;
		We(e, t, a) ? i = t : n = r ? t.to : t.from;
	}
	let o = i.type.prop(a), s, c;
	return c = o && (s = r ? m(e, i.from, 1) : m(e, i.to, -1)) && s.matched ? r ? s.end.to : s.end.from : r ? i.to : i.from, n.cursor(c, r ? -1 : 1);
}
var Ge = (e) => P(e, (t) => L(e.state, t, !I(e))), Ke = (e) => P(e, (t) => L(e.state, t, I(e)));
function qe(e, t) {
	return P(e, (n) => {
		if (!n.empty) return F(n, t);
		let r = e.moveVertically(n, t);
		return r.head == n.head ? e.moveToLineBoundary(n, t) : r;
	});
}
var Je = (e) => qe(e, !1), Ye = (e) => qe(e, !0);
function Xe(t) {
	let n = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, r = 0, i = 0, a;
	if (n) {
		for (let n of t.state.facet(e.scrollMargins)) {
			let e = n(t);
			e?.top && (r = Math.max(e?.top, r)), e?.bottom && (i = Math.max(e?.bottom, i));
		}
		a = t.scrollDOM.clientHeight - r - i;
	} else a = (t.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop: r,
		marginBottom: i,
		selfScroll: n,
		height: Math.max(t.defaultLineHeight, a - 5)
	};
}
function Ze(t, n) {
	let r = Xe(t), { state: i } = t, a = M(i.selection, (e) => e.empty ? t.moveVertically(e, n, r.height) : F(e, n));
	if (a.eq(i.selection)) return !1;
	let o;
	if (r.selfScroll) {
		let n = t.coordsAtPos(i.selection.main.head), s = t.scrollDOM.getBoundingClientRect(), c = s.top + r.marginTop, l = s.bottom - r.marginBottom;
		n && n.top > c && n.bottom < l && (o = e.scrollIntoView(a.main.head, {
			y: "start",
			yMargin: n.top - c
		}));
	}
	return t.dispatch(N(i, a), { effects: o }), !0;
}
var Qe = (e) => Ze(e, !1), R = (e) => Ze(e, !0);
function z(e, t, r) {
	let i = e.lineBlockAt(t.head), a = e.moveToLineBoundary(t, r);
	if (a.head == t.head && a.head != (r ? i.to : i.from) && (a = e.moveToLineBoundary(t, r, !1)), !r && a.head == i.from && i.length) {
		let r = /^\s*/.exec(e.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
		r && t.head != i.from + r && (a = n.cursor(i.from + r));
	}
	return a;
}
var $e = (e) => P(e, (t) => z(e, t, !0)), et = (e) => P(e, (t) => z(e, t, !1)), tt = (e) => P(e, (t) => z(e, t, !I(e))), nt = (e) => P(e, (t) => z(e, t, I(e))), rt = (e) => P(e, (t) => e.moveToLineBoundary(t, !1, !1)), it = (e) => P(e, (t) => e.moveToLineBoundary(t, !0, !1));
function at(e, t, r) {
	let i = !1, a = M(e.selection, (t) => {
		let a = m(e, t.head, -1) || m(e, t.head, 1) || t.head > 0 && m(e, t.head - 1, 1) || t.head < e.doc.length && m(e, t.head + 1, -1);
		if (!a || !a.end) return t;
		i = !0;
		let o = a.start.from == t.head ? a.end.to : a.end.from;
		return r ? n.range(t.anchor, o) : n.cursor(o);
	});
	return i ? (t(N(e, a)), !0) : !1;
}
var ot = ({ state: e, dispatch: t }) => at(e, t, !1);
function B(e, t, r) {
	let i = M(e.state.selection, (e) => {
		e.undirectional && e.head >= e.anchor != t && (e = n.range(e.head, e.anchor));
		let i = r(e);
		return n.range(e.anchor, i.head, i.goalColumn, i.bidiLevel || void 0, i.assoc);
	});
	return !i.eq(e.state.selection) && (e.dispatch(N(e.state, i)), !0);
}
function st(e, t) {
	return B(e, t, (n) => e.moveByChar(n, t));
}
var ct = (e) => st(e, !I(e)), lt = (e) => st(e, I(e));
function ut(e, t) {
	return B(e, t, (n) => e.moveByGroup(n, t));
}
var dt = (e) => ut(e, !I(e)), ft = (e) => ut(e, I(e)), pt = (e) => {
	let t = !I(e);
	return B(e, t, (n) => L(e.state, n, t));
}, mt = (e) => {
	let t = I(e);
	return B(e, t, (n) => L(e.state, n, t));
};
function ht(e, t) {
	return B(e, t, (n) => e.moveVertically(n, t));
}
var gt = (e) => ht(e, !1), _t = (e) => ht(e, !0);
function vt(e, t) {
	return B(e, t, (n) => e.moveVertically(n, t, Xe(e).height));
}
var yt = (e) => vt(e, !1), bt = (e) => vt(e, !0), xt = (e) => B(e, !0, (t) => z(e, t, !0)), St = (e) => B(e, !1, (t) => z(e, t, !1)), Ct = (e) => {
	let t = !I(e);
	return B(e, t, (n) => z(e, n, t));
}, wt = (e) => {
	let t = I(e);
	return B(e, t, (n) => z(e, n, t));
}, Tt = (e) => B(e, !1, (t) => n.cursor(e.lineBlockAt(t.head).from)), Et = (e) => B(e, !0, (t) => n.cursor(e.lineBlockAt(t.head).to)), Dt = ({ state: e, dispatch: t }) => (t(N(e, { anchor: 0 })), !0), Ot = ({ state: e, dispatch: t }) => (t(N(e, { anchor: e.doc.length })), !0), kt = ({ state: e, dispatch: t }) => (t(N(e, {
	anchor: e.selection.main.anchor,
	head: 0
})), !0), At = ({ state: e, dispatch: t }) => (t(N(e, {
	anchor: e.selection.main.anchor,
	head: e.doc.length
})), !0), jt = ({ state: e, dispatch: t }) => (t(e.update({
	selection: {
		anchor: 0,
		head: e.doc.length
	},
	userEvent: "select"
})), !0), Mt = ({ state: e, dispatch: t }) => {
	let r = W(e).map(({ from: t, to: r }) => n.undirectionalRange(t, Math.min(r + 1, e.doc.length)));
	return t(e.update({
		selection: n.create(r),
		userEvent: "select"
	})), !0;
}, Nt = ({ state: e, dispatch: t }) => {
	let r = M(e.selection, (t) => {
		let r = u(e), i = r.resolveStack(t.from, 1);
		if (t.empty) {
			let e = r.resolveStack(t.from, -1);
			e.node.from >= i.node.from && e.node.to <= i.node.to && (i = e);
		}
		for (let e = i; e; e = e.next) {
			let { node: r } = e;
			if ((r.from < t.from && r.to >= t.to || r.to > t.to && r.from <= t.from) && e.next) return n.undirectionalRange(r.from, r.to);
		}
		return t;
	});
	return !r.eq(e.selection) && (t(N(e, r)), !0);
};
function Pt(e, t) {
	let { state: r } = e, i = r.selection, a = r.selection.ranges.slice();
	for (let n of r.selection.ranges) {
		let i = r.doc.lineAt(n.head);
		if (t ? i.to < e.state.doc.length : i.from > 0) for (let r = n;;) {
			let n = e.moveVertically(r, t);
			if (n.head < i.from || n.head > i.to) {
				a.some((e) => e.head == n.head) || a.push(n);
				break;
			}
			if (n.head == r.head) break;
			r = n;
		}
	}
	return a.length != i.ranges.length && (e.dispatch(N(r, n.create(a, a.length - 1))), !0);
}
var Ft = (e) => Pt(e, !1), It = (e) => Pt(e, !0), Lt = ({ state: e, dispatch: t }) => {
	let r = e.selection, i = null;
	return r.ranges.length > 1 ? i = n.create([r.main]) : r.main.empty || (i = n.create([n.cursor(r.main.head)])), i ? (t(N(e, i)), !0) : !1;
};
function V(t, r) {
	if (t.state.readOnly) return !1;
	let i = "delete.selection", { state: a } = t, o = a.changeByRange((e) => {
		let { from: a, to: o } = e;
		if (a == o) {
			let n = r(e);
			n < a ? (i = "delete.backward", n = H(t, n, !1)) : n > a && (i = "delete.forward", n = H(t, n, !0)), a = Math.min(a, n), o = Math.max(o, n);
		} else a = H(t, a, !1), o = H(t, o, !0);
		return a == o ? { range: e } : {
			changes: {
				from: a,
				to: o
			},
			range: n.cursor(a, a < e.head ? -1 : 1)
		};
	});
	return !o.changes.empty && (t.dispatch(a.update(o, {
		scrollIntoView: !0,
		userEvent: i,
		effects: i == "delete.selection" ? e.announce.of(a.phrase("Selection deleted")) : void 0
	})), !0);
}
function H(t, n, r) {
	if (t instanceof e) for (let i of t.state.facet(e.atomicRanges).map((e) => e(t))) i.between(n, n, (e, t) => {
		e < n && t > n && (n = r ? t : e);
	});
	return n;
}
var Rt = (e, t, n) => V(e, (r) => {
	let i = r.from, { state: a } = e, s = a.doc.lineAt(i), c, u;
	if (n && !t && i > s.from && i < s.from + 200 && !/[^ \t]/.test(c = s.text.slice(0, i - s.from))) {
		if (c[c.length - 1] == "	") return i - 1;
		let e = l(c, a.tabSize) % o(a) || o(a);
		for (let t = 0; t < e && c[c.length - 1 - t] == " "; t++) i--;
		u = i;
	} else u = f(s.text, i - s.from, t, t) + s.from, u == i && s.number != (t ? a.doc.lines : 1) ? u += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(s.text.slice(u - s.from, i - s.from)) && (u = f(s.text, u - s.from, !1, !1) + s.from);
	return u;
}), U = (e) => Rt(e, !1, !0), zt = (e) => Rt(e, !0, !1), Bt = (e, t) => V(e, (n) => {
	let r = n.head, { state: i } = e, a = i.doc.lineAt(r), o = i.charCategorizer(r);
	for (let e = null;;) {
		if (r == (t ? a.to : a.from)) {
			r == n.head && a.number != (t ? i.doc.lines : 1) && (r += t ? 1 : -1);
			break;
		}
		let s = f(a.text, r - a.from, t) + a.from, c = a.text.slice(Math.min(r, s) - a.from, Math.max(r, s) - a.from), l = o(c);
		if (e != null && l != e) break;
		(c != " " || r != n.head) && (e = l), r = s;
	}
	return r;
}), Vt = (e) => Bt(e, !1), Ht = (e) => Bt(e, !0), Ut = (e) => V(e, (t) => {
	let n = e.lineBlockAt(t.head).to;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), Wt = (e) => V(e, (t) => {
	let n = e.moveToLineBoundary(t, !1).head;
	return t.head > n ? n : Math.max(0, t.head - 1);
}), Gt = (e) => V(e, (t) => {
	let n = e.moveToLineBoundary(t, !0).head;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), Kt = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let i = e.changeByRange((e) => ({
		changes: {
			from: e.from,
			to: e.to,
			insert: r.of(["", ""])
		},
		range: n.cursor(e.from)
	}));
	return t(e.update(i, {
		scrollIntoView: !0,
		userEvent: "input"
	})), !0;
}, qt = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let r = e.changeByRange((t) => {
		if (!t.empty || t.from == 0 || t.from == e.doc.length) return { range: t };
		let r = t.from, i = e.doc.lineAt(r), a = r == i.from ? r - 1 : f(i.text, r - i.from, !1) + i.from, o = r == i.to ? r + 1 : f(i.text, r - i.from, !0) + i.from;
		return {
			changes: {
				from: a,
				to: o,
				insert: e.doc.slice(r, o).append(e.doc.slice(a, r))
			},
			range: n.cursor(o)
		};
	});
	return !r.changes.empty && (t(e.update(r, {
		scrollIntoView: !0,
		userEvent: "move.character"
	})), !0);
};
function W(e) {
	let t = [], n = -1;
	for (let r of e.selection.ranges) {
		let i = e.doc.lineAt(r.from), a = e.doc.lineAt(r.to);
		if (!r.empty && r.to == a.from && (a = e.doc.lineAt(r.to - 1)), n >= i.number) {
			let e = t[t.length - 1];
			e.to = a.to, e.ranges.push(r);
		} else t.push({
			from: i.from,
			to: a.to,
			ranges: [r]
		});
		n = a.number + 1;
	}
	return t;
}
function Jt(e, t, r) {
	if (e.readOnly) return !1;
	let i = [], a = [];
	for (let t of W(e)) {
		if (r ? t.to == e.doc.length : t.from == 0) continue;
		let o = e.doc.lineAt(r ? t.to + 1 : t.from - 1), s = o.length + 1;
		if (r) {
			i.push({
				from: t.to,
				to: o.to
			}, {
				from: t.from,
				insert: o.text + e.lineBreak
			});
			for (let r of t.ranges) a.push(n.range(Math.min(e.doc.length, r.anchor + s), Math.min(e.doc.length, r.head + s)));
		} else {
			i.push({
				from: o.from,
				to: t.from
			}, {
				from: t.to,
				insert: e.lineBreak + o.text
			});
			for (let e of t.ranges) a.push(n.range(e.anchor - s, e.head - s));
		}
	}
	return i.length ? (t(e.update({
		changes: i,
		scrollIntoView: !0,
		selection: n.create(a, e.selection.mainIndex),
		userEvent: "move.line"
	})), !0) : !1;
}
var Yt = ({ state: e, dispatch: t }) => Jt(e, t, !1), Xt = ({ state: e, dispatch: t }) => Jt(e, t, !0);
function Zt(e, t, n) {
	if (e.readOnly) return !1;
	let r = [];
	for (let t of W(e)) n ? r.push({
		from: t.from,
		insert: e.doc.slice(t.from, t.to) + e.lineBreak
	}) : r.push({
		from: t.to,
		insert: e.lineBreak + e.doc.slice(t.from, t.to)
	});
	let i = e.changes(r);
	return t(e.update({
		changes: i,
		selection: e.selection.map(i, n ? 1 : -1),
		scrollIntoView: !0,
		userEvent: "input.copyline"
	})), !0;
}
var Qt = ({ state: e, dispatch: t }) => Zt(e, t, !1), $t = ({ state: e, dispatch: t }) => Zt(e, t, !0), en = (e) => {
	if (e.state.readOnly) return !1;
	let { state: t } = e, n = t.changes(W(t).map(({ from: e, to: n }) => (e > 0 ? e-- : n < t.doc.length && n++, {
		from: e,
		to: n
	}))), r = M(t.selection, (t) => {
		let n;
		if (e.lineWrapping) {
			let r = e.lineBlockAt(t.head), i = e.coordsAtPos(t.head, t.assoc || 1);
			i && (n = r.bottom + e.documentTop - i.bottom + e.defaultLineHeight / 2);
		}
		return e.moveVertically(t, !0, n);
	}).map(n);
	return e.dispatch({
		changes: n,
		selection: r,
		scrollIntoView: !0,
		userEvent: "delete.line"
	}), !0;
};
function tn(e, t) {
	if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
		from: t,
		to: t
	};
	let n = u(e).resolveInner(t), r = n.childBefore(t), i = n.childAfter(t), a;
	return r && i && r.to <= t && i.from >= t && (a = r.type.prop(_.closedBy)) && a.indexOf(i.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(i.from).from && !/\S/.test(e.sliceDoc(r.to, i.from)) ? {
		from: r.to,
		to: i.from
	} : null;
}
var nn = /*@__PURE__*/ an(!1), rn = /*@__PURE__*/ an(!0);
function an(e) {
	return ({ state: a, dispatch: o }) => {
		if (a.readOnly) return !1;
		let s = a.changeByRange((o) => {
			let { from: s, to: c } = o, u = a.doc.lineAt(s), d = !e && s == c && tn(a, s);
			e && (s = c = (c <= u.to ? u : a.doc.lineAt(c)).to);
			let f = new le(a, {
				simulateBreak: s,
				simulateDoubleBreak: !!d
			}), p = i(f, s);
			for (p ??= l(/^\s*/.exec(a.doc.lineAt(s).text)[0], a.tabSize); c < u.to && /\s/.test(u.text[c - u.from]);) c++;
			d ? {from: s, to: c} = d : s > u.from && s < u.from + 100 && !/\S/.test(u.text.slice(0, s)) && (s = u.from);
			let m = ["", t(a, p)];
			return d && m.push(t(a, f.lineIndent(u.from, -1))), {
				changes: {
					from: s,
					to: c,
					insert: r.of(m)
				},
				range: n.cursor(s + 1 + m[1].length)
			};
		});
		return o(a.update(s, {
			scrollIntoView: !0,
			userEvent: "input"
		})), !0;
	};
}
function G(e, t) {
	let r = -1;
	return e.changeByRange((i) => {
		let a = [];
		for (let n = i.from; n <= i.to;) {
			let o = e.doc.lineAt(n);
			o.number > r && (i.empty || i.to > o.from) && (t(o, a, i), r = o.number), n = o.to + 1;
		}
		let o = e.changes(a);
		return {
			changes: a,
			range: n.range(o.mapPos(i.anchor, 1), o.mapPos(i.head, 1))
		};
	});
}
var on = ({ state: e, dispatch: n }) => {
	if (e.readOnly) return !1;
	let r = Object.create(null), a = new le(e, { overrideIndentation: (e) => r[e] ?? -1 }), o = G(e, (n, o, s) => {
		let c = i(a, n.from);
		if (c == null) return;
		/\S/.test(n.text) || (c = 0);
		let l = /^\s*/.exec(n.text)[0], u = t(e, c);
		(l != u || s.from < n.from + l.length) && (r[n.from] = c, o.push({
			from: n.from,
			to: n.from + l.length,
			insert: u
		}));
	});
	return o.changes.empty || n(e.update(o, { userEvent: "indent" })), !0;
}, K = ({ state: e, dispatch: t }) => !e.readOnly && (t(e.update(G(e, (t, n) => {
	n.push({
		from: t.from,
		insert: e.facet(oe)
	});
}), { userEvent: "input.indent" })), !0), sn = ({ state: e, dispatch: n }) => !e.readOnly && (n(e.update(G(e, (n, r) => {
	let i = /^\s*/.exec(n.text)[0];
	if (!i) return;
	let a = l(i, e.tabSize), s = 0, c = t(e, Math.max(0, a - o(e)));
	for (; s < i.length && s < c.length && i.charCodeAt(s) == c.charCodeAt(s);) s++;
	r.push({
		from: n.from + s,
		to: n.from + i.length,
		insert: c.slice(s)
	});
}), { userEvent: "delete.dedent" })), !0), cn = (e) => (e.setTabFocusMode(), !0), ln = ({ state: e, dispatch: t }) => e.selection.ranges.some((e) => !e.empty) ? K({
	state: e,
	dispatch: t
}) : (t(e.update(e.replaceSelection("	"), {
	scrollIntoView: !0,
	userEvent: "input"
})), !0), un = [
	{
		key: "Ctrl-b",
		run: ze,
		shift: ct,
		preventDefault: !0
	},
	{
		key: "Ctrl-f",
		run: Be,
		shift: lt
	},
	{
		key: "Ctrl-p",
		run: Je,
		shift: gt
	},
	{
		key: "Ctrl-n",
		run: Ye,
		shift: _t
	},
	{
		key: "Ctrl-a",
		run: rt,
		shift: Tt
	},
	{
		key: "Ctrl-e",
		run: it,
		shift: Et
	},
	{
		key: "Ctrl-d",
		run: zt
	},
	{
		key: "Ctrl-h",
		run: U
	},
	{
		key: "Ctrl-k",
		run: Ut
	},
	{
		key: "Ctrl-Alt-h",
		run: Vt
	},
	{
		key: "Ctrl-o",
		run: Kt
	},
	{
		key: "Ctrl-t",
		run: qt
	},
	{
		key: "Ctrl-v",
		run: R
	}
], dn = /*@__PURE__*/ [
	{
		key: "ArrowLeft",
		run: ze,
		shift: ct,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowLeft",
		mac: "Alt-ArrowLeft",
		run: He,
		shift: dt,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowLeft",
		run: tt,
		shift: Ct,
		preventDefault: !0
	},
	{
		key: "ArrowRight",
		run: Be,
		shift: lt,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowRight",
		mac: "Alt-ArrowRight",
		run: Ue,
		shift: ft,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowRight",
		run: nt,
		shift: wt,
		preventDefault: !0
	},
	{
		key: "ArrowUp",
		run: Je,
		shift: gt,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowUp",
		run: Dt,
		shift: kt
	},
	{
		mac: "Ctrl-ArrowUp",
		run: Qe,
		shift: yt
	},
	{
		key: "ArrowDown",
		run: Ye,
		shift: _t,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowDown",
		run: Ot,
		shift: At
	},
	{
		mac: "Ctrl-ArrowDown",
		run: R,
		shift: bt
	},
	{
		key: "PageUp",
		run: Qe,
		shift: yt
	},
	{
		key: "PageDown",
		run: R,
		shift: bt
	},
	{
		key: "Home",
		run: et,
		shift: St,
		preventDefault: !0
	},
	{
		key: "Mod-Home",
		run: Dt,
		shift: kt
	},
	{
		key: "End",
		run: $e,
		shift: xt,
		preventDefault: !0
	},
	{
		key: "Mod-End",
		run: Ot,
		shift: At
	},
	{
		key: "Enter",
		run: nn,
		shift: nn
	},
	{
		key: "Mod-a",
		run: jt
	},
	{
		key: "Backspace",
		run: U,
		shift: U,
		preventDefault: !0
	},
	{
		key: "Delete",
		run: zt,
		preventDefault: !0
	},
	{
		key: "Mod-Backspace",
		mac: "Alt-Backspace",
		run: Vt,
		preventDefault: !0
	},
	{
		key: "Mod-Delete",
		mac: "Alt-Delete",
		run: Ht,
		preventDefault: !0
	},
	{
		mac: "Mod-Backspace",
		run: Wt,
		preventDefault: !0
	},
	{
		mac: "Mod-Delete",
		run: Gt,
		preventDefault: !0
	}
].concat(/*@__PURE__*/ un.map((e) => ({
	mac: e.key,
	run: e.run,
	shift: e.shift
}))), fn = /*@__PURE__*/ [
	{
		key: "Alt-ArrowLeft",
		mac: "Ctrl-ArrowLeft",
		run: Ge,
		shift: pt
	},
	{
		key: "Alt-ArrowRight",
		mac: "Ctrl-ArrowRight",
		run: Ke,
		shift: mt
	},
	{
		key: "Alt-ArrowUp",
		run: Yt
	},
	{
		key: "Shift-Alt-ArrowUp",
		run: Qt
	},
	{
		key: "Alt-ArrowDown",
		run: Xt
	},
	{
		key: "Shift-Alt-ArrowDown",
		run: $t
	},
	{
		key: "Mod-Alt-ArrowUp",
		run: Ft
	},
	{
		key: "Mod-Alt-ArrowDown",
		run: It
	},
	{
		key: "Escape",
		run: Lt
	},
	{
		key: "Mod-Enter",
		run: rn
	},
	{
		key: "Alt-l",
		mac: "Ctrl-l",
		run: Mt
	},
	{
		key: "Mod-i",
		run: Nt,
		preventDefault: !0
	},
	{
		key: "Mod-[",
		run: sn
	},
	{
		key: "Mod-]",
		run: K
	},
	{
		key: "Mod-Alt-\\",
		run: on
	},
	{
		key: "Shift-Mod-k",
		run: en
	},
	{
		key: "Shift-Mod-\\",
		run: ot
	},
	{
		key: "Mod-/",
		run: pe
	},
	{
		key: "Alt-A",
		mac: "Ctrl-A",
		run: he
	},
	{
		key: "Ctrl-m",
		mac: "Shift-Alt-m",
		run: cn
	}
].concat(dn), pn = {
	key: "Tab",
	run: K,
	shift: sn
}, mn = class {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.diagnostic = n;
	}
}, q = class e {
	constructor(e, t, n) {
		this.diagnostics = e, this.panel = t, this.selected = n;
	}
	static init(t, n, r) {
		let i = r.facet(Q).markerFilter;
		i && (t = i(t, r));
		let a = t.slice().sort((e, t) => e.from - t.from || e.to - t.to), o = new d(), s = [], c = 0, l = r.doc.iter(), u = 0, f = r.doc.length;
		for (let e = 0;;) {
			let t = e == a.length ? null : a[e];
			if (!t && !s.length) break;
			let n, r;
			if (s.length) n = c, r = s.reduce((e, t) => Math.min(e, t.to), t && t.from > n ? t.from : 1e8);
			else {
				if (n = t.from, n > f) break;
				r = t.to, s.push(t), e++;
			}
			for (; e < a.length;) {
				let t = a[e];
				if (t.from == n && (t.to > t.from || t.to == n)) s.push(t), e++, r = Math.min(t.to, r);
				else {
					r = Math.min(t.from, r);
					break;
				}
			}
			r = Math.min(r, f);
			let i = !1;
			if (s.some((e) => e.from == n && (e.to == r || r == f)) && (i = n == r, !i && r - n < 10)) {
				let e = n - (u + l.value.length);
				e > 0 && (l.next(e), u = n);
				for (let e = n;;) {
					if (e >= r) {
						i = !0;
						break;
					}
					if (!l.lineBreak && u + l.value.length > e) break;
					e = u + l.value.length, u += l.value.length, l.next();
				}
			}
			let d = Ln(s);
			if (i) o.add(n, n, v.widget({
				widget: new jn(d),
				diagnostics: s.slice()
			}));
			else {
				let e = s.reduce((e, t) => t.markClass ? e + " " + t.markClass : e, "");
				o.add(n, r, v.mark({
					class: "cm-lintRange cm-lintRange-" + d + e,
					diagnostics: s.slice(),
					inclusiveEnd: s.some((e) => e.to > r)
				}));
			}
			if (c = r, c == f) break;
			for (let e = 0; e < s.length; e++) s[e].to <= c && s.splice(e--, 1);
		}
		let p = o.finish();
		return new e(p, n, J(p));
	}
};
function J(e, t = null, n = 0) {
	let r = null;
	return e.between(n, 1e9, (e, n, { spec: i }) => {
		if (!(t && i.diagnostics.indexOf(t) < 0)) {
			if (!r) r = new mn(e, n, t || i.diagnostics[0]);
			else if (i.diagnostics.indexOf(r.diagnostic) < 0) return !1;
			else r = new mn(r.from, n, r.diagnostic);
		}
	}), r;
}
function hn(e, t) {
	let n = t.pos, r = t.end || n, i = e.state.facet(Q).hideOn(e, n, r);
	if (i != null) return i;
	let a = e.startState.doc.lineAt(t.pos);
	return !!(e.effects.some((e) => e.is(Y)) || e.changes.touchesRange(a.from, Math.max(a.to, r)));
}
function gn(e, t) {
	return e.field(Z, !1) ? t : t.concat(h.appendConfig.of(zn));
}
function _n(e, t) {
	return { effects: gn(e, [Y.of(t)]) };
}
var Y = /*@__PURE__*/ h.define(), X = /*@__PURE__*/ h.define(), vn = /*@__PURE__*/ h.define(), Z = /*@__PURE__*/ fe.define({
	create() {
		return new q(v.none, null, null);
	},
	update(e, t) {
		if (t.docChanged && e.diagnostics.size) {
			let n = e.diagnostics.map(t.changes), r = null, i = e.panel;
			if (e.selected) {
				let i = t.changes.mapPos(e.selected.from, 1);
				r = J(n, e.selected.diagnostic, i) || J(n, null, i);
			}
			!n.size && i && t.state.facet(Q).autoPanel && (i = null), e = new q(n, i, r);
		}
		for (let n of t.effects) if (n.is(Y)) {
			let r = t.state.facet(Q).autoPanel ? n.value.length ? Nn.open : null : e.panel;
			e = q.init(n.value, r, t.state);
		} else n.is(X) ? e = new q(e.diagnostics, n.value ? Nn.open : null, e.selected) : n.is(vn) && (e = new q(e.diagnostics, e.panel, n.value));
		return e;
	},
	provide: (t) => [te.from(t, (e) => e.panel), e.decorations.from(t, (e) => e.diagnostics)]
}), yn = /*@__PURE__*/ v.mark({ class: "cm-lintRange cm-lintRange-active" });
function bn(e, t, n) {
	let { diagnostics: r } = e.state.field(Z), i, a = -1, o = -1;
	r.between(t - +(n < 0), t + +(n > 0), (e, r, { spec: s }) => {
		if (t >= e && t <= r && (e == r || (t > e || n > 0) && (t < r || n < 0))) return i = s.diagnostics, a = e, o = r, !1;
	});
	let s = e.state.facet(Q).tooltipFilter;
	return i && s && (i = s(i, e.state)), i ? {
		pos: a,
		end: o,
		above: !0,
		create() {
			return { dom: xn(e, i) };
		}
	} : null;
}
function xn(e, t) {
	return y("ul", { class: "cm-tooltip-lint" }, t.map((t) => An(e, t, !1)));
}
var Sn = (e) => {
	let t = e.state.field(Z, !1);
	(!t || !t.panel) && e.dispatch({ effects: gn(e.state, [X.of(!0)]) });
	let n = ae(e, Nn.open);
	return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Cn = (e) => {
	let t = e.state.field(Z, !1);
	return !t || !t.panel ? !1 : (e.dispatch({ effects: X.of(!1) }), !0);
}, wn = [{
	key: "Mod-Shift-m",
	run: Sn,
	preventDefault: !0
}, {
	key: "F8",
	run: (e) => {
		let t = e.state.field(Z, !1);
		if (!t) return !1;
		let n = e.state.selection.main, r = J(t.diagnostics, null, n.to + 1);
		return !r && (r = J(t.diagnostics, null, 0), !r || r.from == n.from && r.to == n.to) ? !1 : (e.dispatch({
			selection: {
				anchor: r.from,
				head: r.to
			},
			scrollIntoView: !0
		}), ue(e, r.from, 1, {
			tooltip: Rn,
			until: (e) => e.docChanged || e.newSelection.main.head < r.from || e.newSelection.main.head > r.to
		}), !0);
	}
}], Tn = /*@__PURE__*/ de.fromClass(class {
	constructor(e) {
		this.view = e, this.timeout = -1, this.set = !0;
		let { delay: t } = e.state.facet(Q);
		this.lintTime = Date.now() + t, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, t);
	}
	run() {
		clearTimeout(this.timeout);
		let e = Date.now();
		if (e < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - e);
		else {
			this.set = !1;
			let { state: e } = this.view, { sources: t } = e.facet(Q);
			t.length && En(t.map((e) => Promise.resolve(e(this.view))), (t) => {
				this.view.state.doc == e.doc && this.view.dispatch(_n(this.view.state, t.reduce((e, t) => e.concat(t))));
			}, (e) => {
				ie(this.view.state, e);
			});
		}
	}
	update(e) {
		let t = e.state.facet(Q);
		(e.docChanged || t != e.startState.facet(Q) || t.needsRefresh && t.needsRefresh(e)) && (this.lintTime = Date.now() + t.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, t.delay)));
	}
	force() {
		this.set && (this.lintTime = Date.now(), this.run());
	}
	destroy() {
		clearTimeout(this.timeout);
	}
});
function En(e, t, n) {
	let r = [], i = -1;
	for (let a of e) a.then((n) => {
		r.push(n), clearTimeout(i), r.length == e.length ? t(r) : i = setTimeout(() => t(r), 200);
	}, n);
}
var Q = /*@__PURE__*/ p.define({ combine(e) {
	return {
		sources: e.map((e) => e.source).filter((e) => e != null),
		...re(e.map((e) => e.config), {
			delay: 750,
			markerFilter: null,
			tooltipFilter: null,
			needsRefresh: null,
			hideOn: () => null
		}, {
			delay: Math.max,
			markerFilter: Dn,
			tooltipFilter: Dn,
			needsRefresh: (e, t) => e ? t ? (n) => e(n) || t(n) : e : t,
			hideOn: (e, t) => e ? t ? (n, r, i) => e(n, r, i) || t(n, r, i) : e : t,
			autoPanel: (e, t) => e || t
		})
	};
} });
function Dn(e, t) {
	return e ? t ? (n, r) => t(e(n, r), r) : e : t;
}
function On(e, t = {}) {
	return [
		Q.of({
			source: e,
			config: t
		}),
		Tn,
		zn
	];
}
function kn(e) {
	let t = [];
	if (e) actions: for (let { name: n } of e) {
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (/[a-zA-Z]/.test(r) && !t.some((e) => e.toLowerCase() == r.toLowerCase())) {
				t.push(r);
				continue actions;
			}
		}
		t.push("");
	}
	return t;
}
function An(e, t, n) {
	let r = n ? kn(t.actions) : [];
	return y("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, y("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(e) : t.message), t.actions?.map((n, i) => {
		let a = !1, o = (r) => {
			if (r.preventDefault(), a) return;
			a = !0;
			let i = J(e.state.field(Z).diagnostics, t);
			i && n.apply(e, i.from, i.to);
		}, { name: s } = n, c = r[i] ? s.indexOf(r[i]) : -1, l = c < 0 ? s : [
			s.slice(0, c),
			y("u", s.slice(c, c + 1)),
			s.slice(c + 1)
		], u = n.markClass ? " " + n.markClass : "";
		return y("button", {
			type: "button",
			class: "cm-diagnosticAction" + u,
			onclick: o,
			onmousedown: o,
			"aria-label": ` Action: ${s}${c < 0 ? "" : ` (access key "${r[i]})"`}.`
		}, l);
	}), t.source && y("div", { class: "cm-diagnosticSource" }, t.source));
}
var jn = class extends ce {
	constructor(e) {
		super(), this.sev = e;
	}
	eq(e) {
		return e.sev == this.sev;
	}
	toDOM() {
		return y("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
	}
}, Mn = class {
	constructor(e, t) {
		this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = An(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
	}
}, Nn = class e {
	constructor(e) {
		this.view = e, this.items = [];
		let t = (t) => {
			if (!(t.ctrlKey || t.altKey || t.metaKey)) {
				if (t.keyCode == 27) Cn(this.view), this.view.focus();
				else if (t.keyCode == 38 || t.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
				else if (t.keyCode == 40 || t.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
				else if (t.keyCode == 36) this.moveSelection(0);
				else if (t.keyCode == 35) this.moveSelection(this.items.length - 1);
				else if (t.keyCode == 13) this.view.focus();
				else if (t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0) {
					let { diagnostic: n } = this.items[this.selectedIndex], r = kn(n.actions);
					for (let i = 0; i < r.length; i++) if (r[i].toUpperCase().charCodeAt(0) == t.keyCode) {
						let t = J(this.view.state.field(Z).diagnostics, n);
						t && n.actions[i].apply(e, t.from, t.to);
					}
				} else return;
				t.preventDefault();
			}
		}, n = (e) => {
			for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t);
		};
		this.list = y("ul", {
			tabIndex: 0,
			role: "listbox",
			"aria-label": this.view.state.phrase("Diagnostics"),
			onkeydown: t,
			onclick: n
		}), this.dom = y("div", { class: "cm-panel-lint" }, this.list, y("button", {
			type: "button",
			name: "close",
			"aria-label": this.view.state.phrase("close"),
			onclick: () => Cn(this.view)
		}, "×")), this.update();
	}
	get selectedIndex() {
		let e = this.view.state.field(Z).selected;
		if (!e) return -1;
		for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
		return -1;
	}
	update() {
		let { diagnostics: e, selected: t } = this.view.state.field(Z), n = 0, r = !1, i = null, a = /* @__PURE__ */ new Set();
		for (e.between(0, this.view.state.doc.length, (e, o, { spec: s }) => {
			for (let e of s.diagnostics) {
				if (a.has(e)) continue;
				a.add(e);
				let o = -1, s;
				for (let t = n; t < this.items.length; t++) if (this.items[t].diagnostic == e) {
					o = t;
					break;
				}
				o < 0 ? (s = new Mn(this.view, e), this.items.splice(n, 0, s), r = !0) : (s = this.items[o], o > n && (this.items.splice(n, o - n), r = !0)), t && s.diagnostic == t.diagnostic ? s.dom.hasAttribute("aria-selected") || (s.dom.setAttribute("aria-selected", "true"), i = s) : s.dom.hasAttribute("aria-selected") && s.dom.removeAttribute("aria-selected"), n++;
			}
		}); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);) r = !0, this.items.pop();
		this.items.length == 0 && (this.items.push(new Mn(this.view, {
			from: -1,
			to: -1,
			severity: "info",
			message: this.view.state.phrase("No diagnostics")
		})), r = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
			key: this,
			read: () => ({
				sel: i.dom.getBoundingClientRect(),
				panel: this.list.getBoundingClientRect()
			}),
			write: ({ sel: e, panel: t }) => {
				let n = t.height / this.list.offsetHeight;
				e.top < t.top ? this.list.scrollTop -= (t.top - e.top) / n : e.bottom > t.bottom && (this.list.scrollTop += (e.bottom - t.bottom) / n);
			}
		})) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
	}
	sync() {
		let e = this.list.firstChild;
		function t() {
			let t = e;
			e = t.nextSibling, t.remove();
		}
		for (let n of this.items) if (n.dom.parentNode == this.list) {
			for (; e != n.dom;) t();
			e = n.dom.nextSibling;
		} else this.list.insertBefore(n.dom, e);
		for (; e;) t();
	}
	moveSelection(e) {
		if (this.selectedIndex < 0) return;
		let t = J(this.view.state.field(Z).diagnostics, this.items[e].diagnostic);
		t && this.view.dispatch({
			selection: {
				anchor: t.from,
				head: t.to
			},
			scrollIntoView: !0,
			effects: vn.of(t)
		});
	}
	static open(t) {
		return new e(t);
	}
};
function Pn(e, t = "viewBox=\"0 0 40 40\"") {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`;
}
function $(e) {
	return Pn(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, "width=\"6\" height=\"3\"");
}
var Fn = /*@__PURE__*/ e.baseTheme({
	".cm-diagnostic": {
		padding: "3px 6px 3px 8px",
		marginLeft: "-1px",
		display: "block",
		whiteSpace: "pre-wrap"
	},
	".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
	".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
	".cm-diagnostic-info": { borderLeft: "5px solid #999" },
	".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
	".cm-diagnosticAction": {
		font: "inherit",
		border: "none",
		padding: "2px 4px",
		backgroundColor: "#444",
		color: "white",
		borderRadius: "3px",
		marginLeft: "8px",
		cursor: "pointer"
	},
	".cm-diagnosticSource": {
		fontSize: "70%",
		opacity: .7
	},
	".cm-lintRange": {
		backgroundPosition: "left bottom",
		backgroundRepeat: "repeat-x",
		paddingBottom: "0.7px"
	},
	".cm-lintRange-error": { backgroundImage: /*@__PURE__*/ $("#f11") },
	".cm-lintRange-warning": { backgroundImage: /*@__PURE__*/ $("orange") },
	".cm-lintRange-info": { backgroundImage: /*@__PURE__*/ $("#999") },
	".cm-lintRange-hint": { backgroundImage: /*@__PURE__*/ $("#66d") },
	".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
	".cm-tooltip-lint": {
		padding: 0,
		margin: 0
	},
	".cm-lintPoint": {
		position: "relative",
		"&:after": {
			content: "\"\"",
			position: "absolute",
			bottom: 0,
			left: "-2px",
			borderLeft: "3px solid transparent",
			borderRight: "3px solid transparent",
			borderBottom: "4px solid #d11"
		}
	},
	".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
	".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
	".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } },
	".cm-panel.cm-panel-lint": {
		position: "relative",
		"& ul": {
			maxHeight: "100px",
			overflowY: "auto",
			"& [aria-selected]": {
				backgroundColor: "#ddd",
				"& u": { textDecoration: "underline" }
			},
			"&:focus [aria-selected]": {
				background_fallback: "#bdf",
				backgroundColor: "Highlight",
				color_fallback: "white",
				color: "HighlightText"
			},
			"& u": { textDecoration: "none" },
			padding: 0,
			margin: 0
		},
		"& [name=close]": {
			position: "absolute",
			top: "0",
			right: "2px",
			background: "inherit",
			border: "none",
			font: "inherit",
			padding: 0,
			margin: 0
		}
	},
	"&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
	"&dark .cm-panel.cm-panel-lint ul": { "& [aria-selected]": { backgroundColor: "#2e343e" } }
});
function In(e) {
	return e == "error" ? 4 : e == "warning" ? 3 : e == "info" ? 2 : 1;
}
function Ln(e) {
	let t = "hint", n = 1;
	for (let r of e) {
		let e = In(r.severity);
		e > n && (n = e, t = r.severity);
	}
	return t;
}
var Rn = /*@__PURE__*/ se(bn, { hideOn: hn }), zn = [
	Z,
	/*@__PURE__*/ e.decorations.compute([Z], (e) => {
		let { selected: t, panel: n } = e.field(Z);
		return !t || !n || t.from == t.to ? v.none : v.set([yn.range(t.from, t.to)]);
	}),
	Rn,
	Fn
];
function Bn(e, t) {
	let n = e.field(Z, !1);
	if (n && n.diagnostics.size) {
		let e = [], r = [], i = -1;
		for (let a = c.iter([n.diagnostics]);; a.next()) {
			for (let n = 0; n < e.length; n++) (!a.value || a.value.spec.diagnostics.indexOf(e[n]) < 0) && (t(e[n], r[n], i), e.splice(n, 1), r.splice(n--, 1));
			if (!a.value) break;
			for (let t of a.value.spec.diagnostics) e.indexOf(t) < 0 && (e.push(t), r.push(a.from));
			i = a.to;
		}
	}
}
//#endregion
export { fn as a, Le as c, _n as i, pn as l, wn as n, we as o, On as r, Te as s, Bn as t, ln as u };
