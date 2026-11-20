import { r as e } from "./rolldown-runtime-Cb76FRpK.js";
import { H as t, V as n, X as r, i, r as a, s as o, u as s } from "./dist-DoE4XJBC.js";
import { n as c } from "./dist-BMQf5zIS.js";
import { r as l } from "./dist-DiDibOYr.js";
//#region ../node_modules/.pnpm/@codemirror+lang-vue@0.1.3/node_modules/@codemirror/lang-vue/dist/index.js
var u = /* @__PURE__ */ e({
	vue: () => C,
	vueLanguage: () => x
}), d = /*@__PURE__*/ a.deserialize({
	version: 14,
	states: "%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",
	stateData: "$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",
	goto: "!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",
	nodeNames: "⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",
	maxTerm: 36,
	nodeProps: [[
		"isolate",
		-3,
		3,
		13,
		17,
		""
	]],
	skippedNodes: [0],
	repeatNodeCount: 4,
	tokenData: "'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",
	tokenizers: [
		6,
		7,
		/*@__PURE__*/ new i("b~RP#q#rU~XP#q#r[~aOT~~", 17, 4),
		/*@__PURE__*/ new i("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~", 72, 2),
		/*@__PURE__*/ new i("[~RPwxU~ZOp~~", 11, 15),
		/*@__PURE__*/ new i("[~RPrsU~ZOn~~", 11, 14),
		/*@__PURE__*/ new i("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~", 66, 35),
		/*@__PURE__*/ new i("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~", 66, 33)
	],
	topRules: {
		Content: [0, 1],
		Attribute: [1, 7]
	},
	tokenPrec: 157
}), f = /*@__PURE__*/ l.parser.configure({ top: "SingleExpression" }), p = /*@__PURE__*/ d.configure({ props: [/*@__PURE__*/ n({
	Text: t.content,
	Is: t.definitionOperator,
	AttributeName: t.attributeName,
	VueAttributeName: t.keyword,
	Identifier: t.variableName,
	"AttributeValue ScriptAttributeValue": t.attributeValue,
	Entity: t.character,
	"{{ }}": t.brace,
	"@ :": t.punctuation
})] }), m = { parser: f }, h = /*@__PURE__*/ p.configure({ wrap: /*@__PURE__*/ r((e, t) => e.name == "InterpolationContent" ? m : null) }), g = /*@__PURE__*/ p.configure({
	wrap: /*@__PURE__*/ r((e, t) => e.name == "AttributeScript" ? m : null),
	top: "Attribute"
}), _ = { parser: h }, v = { parser: g }, y = /*@__PURE__*/ c();
function b(e) {
	return e.configure({
		dialect: "selfClosing",
		wrap: r(S)
	}, "vue");
}
var x = /*@__PURE__*/ b(y.language);
function S(e, t) {
	switch (e.name) {
		case "Attribute": return /^(@|:|v-)/.test(t.read(e.from, e.from + 2)) ? v : null;
		case "Text": return _;
	}
	return null;
}
function C(e = {}) {
	let t = y;
	if (e.base) {
		if (e.base.language.name != "html" || !(e.base.language instanceof o)) throw RangeError("The base option must be the result of calling html(...)");
		t = e.base;
	}
	return new s(t.language == y.language ? x : b(t.language), [t.support, t.language.data.of({ closeBrackets: { brackets: ["{", "\""] } })]);
}
//#endregion
export { C as n, u as t };
