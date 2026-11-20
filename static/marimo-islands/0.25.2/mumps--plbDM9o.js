import { r as e } from "./rolldown-runtime-Cb76FRpK.js";
//#region ../node_modules/.pnpm/@codemirror+legacy-modes@6.5.4/node_modules/@codemirror/legacy-modes/mode/mumps.js
var t = /* @__PURE__ */ e({ mumps: () => f });
function n(e) {
	return RegExp("^((" + e.join(")|(") + "))\\b", "i");
}
var r = /* @__PURE__ */ RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"), i = /* @__PURE__ */ RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"), a = /* @__PURE__ */ RegExp("^[\\.,:]"), o = /* @__PURE__ */ RegExp("[()]"), s = /* @__PURE__ */ RegExp("^[%A-Za-z][A-Za-z0-9]*"), c = /* @__PURE__ */ "break.close.do.else.for.goto.halt.hang.if.job.kill.lock.merge.new.open.quit.read.set.tcommit.trollback.tstart.use.view.write.xecute.b.c.d.e.f.g.h.i.j.k.l.m.n.o.q.r.s.tc.tro.ts.u.v.w.x".split("."), l = n(/* @__PURE__ */ "\\$ascii.\\$char.\\$data.\\$ecode.\\$estack.\\$etrap.\\$extract.\\$find.\\$fnumber.\\$get.\\$horolog.\\$io.\\$increment.\\$job.\\$justify.\\$length.\\$name.\\$next.\\$order.\\$piece.\\$qlength.\\$qsubscript.\\$query.\\$quit.\\$random.\\$reverse.\\$select.\\$stack.\\$test.\\$text.\\$translate.\\$view.\\$x.\\$y.\\$a.\\$c.\\$d.\\$e.\\$ec.\\$es.\\$et.\\$f.\\$fn.\\$g.\\$h.\\$i.\\$j.\\$l.\\$n.\\$na.\\$o.\\$p.\\$q.\\$ql.\\$qs.\\$r.\\$re.\\$s.\\$st.\\$t.\\$tr.\\$v.\\$z".split(".")), u = n(c);
function d(e, t) {
	e.sol() && (t.label = !0, t.commandMode = 0);
	var n = e.peek();
	return n == " " || n == "	" ? (t.label = !1, t.commandMode == 0 ? t.commandMode = 1 : (t.commandMode < 0 || t.commandMode == 2) && (t.commandMode = 0)) : n != "." && t.commandMode > 0 && (t.commandMode = n == ":" ? -1 : 2), (n === "(" || n === "	") && (t.label = !1), n === ";" ? (e.skipToEnd(), "comment") : e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/) ? "number" : n == "\"" ? e.skipTo("\"") ? (e.next(), "string") : (e.skipToEnd(), "error") : e.match(i) || e.match(r) ? "operator" : e.match(a) ? null : o.test(n) ? (e.next(), "bracket") : t.commandMode > 0 && e.match(u) ? "controlKeyword" : e.match(l) ? "builtin" : e.match(s) ? "variable" : n === "$" || n === "^" ? (e.next(), "builtin") : n === "@" ? (e.next(), "string.special") : /[\w%]/.test(n) ? (e.eatWhile(/[\w%]/), "variable") : (e.next(), "error");
}
var f = {
	name: "mumps",
	startState: function() {
		return {
			label: !1,
			commandMode: 0
		};
	},
	token: function(e, t) {
		var n = d(e, t);
		return t.label ? "tag" : n;
	}
};
//#endregion
export { t as n, f as t };
