import { C as e, S as t, _ as n, a as r, b as i, c as a, d as o, f as ee, g as te, h as ne, i as s, l as re, m as ie, n as c, o as l, p as ae, r as oe, s as se, t as u, u as d, v as ce, w as f, x as p, y as le } from "./chunk-FOHPRMQF-BpYR8RqP.js";
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6AZGARVD.mjs
var ue = class extends u {
	static {
		p(this, "ArchitectureTokenBuilder");
	}
	constructor() {
		super(["architecture"]);
	}
}, de = class extends c {
	static {
		p(this, "ArchitectureValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "ARCH_ICON") return t.replace(/[()]/g, "").trim();
		if (e.name === "ARCH_TEXT_ICON") return t.replace(/["()]/g, "");
		if (e.name === "ARCH_TITLE") {
			let e = t.replace(/^\[|]$/g, "").trim();
			return (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1), e = e.replace(/\\"/g, "\"").replace(/\\'/g, "'")), e.trim();
		}
	}
}, m = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new ue(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new de(), "ValueConverter")
} };
function h(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), oe, m);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Architecture: i
	};
}
p(h, "createArchitectureServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6TQVIW2G.mjs
var fe = class extends u {
	static {
		p(this, "CynefinTokenBuilder");
	}
	constructor() {
		super(["cynefin-beta"]);
	}
}, g = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new fe(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
} };
function _(n = l) {
	let i = f(e(n), d), a = f(t({ shared: i }), r, g);
	return i.ServiceRegistry.register(a), {
		shared: i,
		Cynefin: a
	};
}
p(_, "createCynefinServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6EIED4P4.mjs
var pe = class extends u {
	static {
		p(this, "EventModelingTokenBuilder");
	}
	constructor() {
		super(["eventmodeling"]);
	}
}, v = /* @__PURE__ */ new Set(["cmd", "command"]), y = /* @__PURE__ */ new Set(["evt", "event"]), b = /* @__PURE__ */ new Set(["rmo", "readmodel"]), x = /* @__PURE__ */ new Set(["pcr", "processor"]), S = /* @__PURE__ */ new Set(["ui"]);
function C(e) {
	let t = e.validation.EventModelingValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = {
			EmTimeFrame: t.checkSourceFrameTypes.bind(t),
			EmResetFrame: t.checkSourceFrameTypes.bind(t)
		};
		n.register(e, t);
	}
}
p(C, "registerValidationChecks");
var me = class {
	static {
		p(this, "EventModelingValidator");
	}
	checkSourceFrameTypes(e, t) {
		e.sourceFrames.length !== 0 && (v.has(e.modelEntityType) ? this.validateSources(e, /* @__PURE__ */ new Set([...S, ...x]), "command", "ui or processor", t) : y.has(e.modelEntityType) ? this.validateSources(e, v, "event", "command", t) : b.has(e.modelEntityType) ? this.validateSources(e, y, "read model", "event", t) : x.has(e.modelEntityType) ? this.validateSources(e, b, "processor", "read model", t) : S.has(e.modelEntityType) && this.validateSources(e, b, "ui", "read model", t));
	}
	validateSources(e, t, n, r, i) {
		for (let a of e.sourceFrames) {
			let o = a.ref;
			o !== void 0 && !t.has(o.modelEntityType) && i("error", `A ${n} can only receive input from a ${r}, not from '${o.modelEntityType}'.`, {
				node: e,
				property: "sourceFrames"
			});
		}
	}
}, w = {
	parser: {
		TokenBuilder: /* @__PURE__ */ p(() => new pe(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
	},
	validation: { EventModelingValidator: /* @__PURE__ */ p(() => new me(), "EventModelingValidator") }
};
function T(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), se, w);
	return r.ServiceRegistry.register(i), C(i), {
		shared: r,
		EventModel: i
	};
}
p(T, "createEventModelingServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-KI3K4JFJ.mjs
var he = class extends u {
	static {
		p(this, "GitGraphTokenBuilder");
	}
	constructor() {
		super(["gitGraph"]);
	}
}, E = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new he(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
} };
function D(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), a, E);
	return r.ServiceRegistry.register(i), {
		shared: r,
		GitGraph: i
	};
}
p(D, "createGitGraphServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-5V3GS4D5.mjs
var ge = class extends u {
	static {
		p(this, "InfoTokenBuilder");
	}
	constructor() {
		super(["info", "showInfo"]);
	}
}, O = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new ge(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
} };
function k(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), re, O);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Info: i
	};
}
p(k, "createInfoServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-UY3FDG6J.mjs
var _e = class extends u {
	static {
		p(this, "PacketTokenBuilder");
	}
	constructor() {
		super(["packet"]);
	}
}, A = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new _e(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
} };
function j(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), o, A);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Packet: i
	};
}
p(j, "createPacketServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-3Z5EZCMW.mjs
var ve = class extends u {
	static {
		p(this, "PieTokenBuilder");
	}
	constructor() {
		super(["pie", "showData"]);
	}
}, ye = class extends c {
	static {
		p(this, "PieValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "PIE_SECTION_LABEL") return t.replace(/"/g, "").trim();
	}
}, M = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new ve(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new ye(), "ValueConverter")
} };
function N(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), ee, M);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Pie: i
	};
}
p(N, "createPieServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-I5DQTOEV.mjs
var be = class extends u {
	static {
		p(this, "RadarTokenBuilder");
	}
	constructor() {
		super(["radar-beta"]);
	}
}, P = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new be(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new s(), "ValueConverter")
} };
function F(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), ae, P);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Radar: i
	};
}
p(F, "createRadarServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-OUJLGHUK.mjs
var xe = class extends u {
	static {
		p(this, "RailroadTokenBuilder");
	}
	constructor() {
		super(["railroad-beta"]);
	}
}, I = /* @__PURE__ */ p((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), Se = class extends c {
	static {
		p(this, "RailroadValueConverter");
	}
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return I(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "RR_STRING") return I(t);
	}
}, L = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new xe(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new Se(), "ValueConverter")
} };
function Ce(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), te, L);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Railroad: i
	};
}
p(Ce, "createRailroadServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-XHIXRSVI.mjs
var we = class extends u {
	static {
		p(this, "RailroadAbnfTokenBuilder");
	}
	constructor() {
		super(["railroad-abnf-beta"]);
	}
}, Te = class extends c {
	static {
		p(this, "RailroadAbnfValueConverter");
	}
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "ABNF_STRING") return t.slice(1, -1);
	}
}, R = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new we(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new Te(), "ValueConverter")
} };
function z(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), ie, R);
	return r.ServiceRegistry.register(i), {
		shared: r,
		RailroadAbnf: i
	};
}
p(z, "createRailroadAbnfServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-2ZTRR5NV.mjs
var Ee = class extends u {
	static {
		p(this, "RailroadEbnfTokenBuilder");
	}
	constructor() {
		super(["railroad-ebnf-beta"]);
	}
}, B = /* @__PURE__ */ p((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), De = class extends c {
	static {
		p(this, "RailroadEbnfValueConverter");
	}
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return B(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "EBNF_STRING") return B(t);
		if (e.name === "EBNF_SPECIAL_SEQUENCE") return t.slice(1, -1).trim();
	}
}, V = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new Ee(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new De(), "ValueConverter")
} };
function H(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), ne, V);
	return r.ServiceRegistry.register(i), {
		shared: r,
		RailroadEbnf: i
	};
}
p(H, "createRailroadEbnfServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-747NJXEK.mjs
var Oe = class extends u {
	static {
		p(this, "RailroadPegTokenBuilder");
	}
	constructor() {
		super(["railroad-peg-beta"]);
	}
}, U = /* @__PURE__ */ p((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), ke = class extends c {
	static {
		p(this, "RailroadPegValueConverter");
	}
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return U(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "PEG_STRING") return U(t);
	}
}, W = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new Oe(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new ke(), "ValueConverter")
} };
function G(r = l) {
	let i = f(e(r), d), a = f(t({ shared: i }), n, W);
	return i.ServiceRegistry.register(a), {
		shared: i,
		RailroadPeg: a
	};
}
p(G, "createRailroadPegServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-IH6LHLGP.mjs
var Ae = class extends c {
	static {
		p(this, "TreeViewValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "INDENTATION") return t?.length || 0;
		if (e.name === "QUOTED_NAME") return t.substring(1, t.length - 1);
		if (e.name === "BARE_NAME") return t.replace(/[\t ]+$/, "");
		if (e.name === "CLASS_ANNOTATION") return t.trim().substring(3).trim();
		if (e.name === "ICON_ANNOTATION") {
			let e = t.trim();
			return e.substring(5, e.length - 1);
		}
		if (e.name === "DESC_ANNOTATION") return t.trim().substring(2).trim();
	}
}, je = class extends u {
	static {
		p(this, "TreeViewTokenBuilder");
	}
	constructor() {
		super(["treeView-beta"]);
	}
}, K = { parser: {
	TokenBuilder: /* @__PURE__ */ p(() => new je(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ p(() => new Ae(), "ValueConverter")
} };
function q(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), ce, K);
	return r.ServiceRegistry.register(i), {
		shared: r,
		TreeView: i
	};
}
p(q, "createTreeViewServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-6K3QC6MW.mjs
var Me = class extends u {
	static {
		p(this, "TreemapTokenBuilder");
	}
	constructor() {
		super(["treemap"]);
	}
}, Ne = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, Pe = class extends c {
	static {
		p(this, "TreemapValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "NUMBER2") return parseFloat(t.replace(/,/g, ""));
		if (e.name === "SEPARATOR" || e.name === "STRING2") return t.substring(1, t.length - 1);
		if (e.name === "INDENTATION") return t.length;
		if (e.name === "ClassDef") {
			if (typeof t != "string") return t;
			let e = Ne.exec(t);
			if (e) return {
				$type: "ClassDefStatement",
				className: e[1],
				styleText: e[2] || void 0
			};
		}
	}
};
function J(e) {
	let t = e.validation.TreemapValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = { Treemap: t.checkSingleRoot.bind(t) };
		n.register(e, t);
	}
}
p(J, "registerValidationChecks");
var Fe = class {
	static {
		p(this, "TreemapValidator");
	}
	checkSingleRoot(e, t) {
		let n;
		for (let r of e.TreemapRows) r.item && (n === void 0 && r.indent === void 0 ? n = 0 : (r.indent === void 0 || n !== void 0 && n >= parseInt(r.indent, 10)) && t("error", "Multiple root nodes are not allowed in a treemap.", {
			node: r,
			property: "item"
		}));
	}
}, Y = {
	parser: {
		TokenBuilder: /* @__PURE__ */ p(() => new Me(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ p(() => new Pe(), "ValueConverter")
	},
	validation: { TreemapValidator: /* @__PURE__ */ p(() => new Fe(), "TreemapValidator") }
};
function X(n = l) {
	let r = f(e(n), d), i = f(t({ shared: r }), le, Y);
	return r.ServiceRegistry.register(i), J(i), {
		shared: r,
		Treemap: i
	};
}
p(X, "createTreemapServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-ICYGCRZG.mjs
var Ie = class extends c {
	static {
		p(this, "WardleyValueConverter");
	}
	runCustomConverter(e, t, n) {
		switch (e.name.toUpperCase()) {
			case "LINK_LABEL": return t.substring(1).trim();
			default: return;
		}
	}
}, Z = { parser: { ValueConverter: /* @__PURE__ */ p(() => new Ie(), "ValueConverter") } };
function Q(n = l) {
	let r = f(e(n), d), a = f(t({ shared: r }), i, Z);
	return r.ServiceRegistry.register(a), {
		shared: r,
		Wardley: a
	};
}
p(Q, "createWardleyServices");
//#endregion
//#region ../node_modules/.pnpm/@mermaid-js+parser@1.2.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
var $ = {}, Le = {
	info: /* @__PURE__ */ p(async () => {
		let { createInfoServices: e } = await import("./info-A6RAGUB7-DKoayiHY.js");
		$.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ p(async () => {
		let { createPacketServices: e } = await import("./packet-AYTQ26CC-Yw7ajchJ.js");
		$.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ p(async () => {
		let { createPieServices: e } = await import("./pie-WAS4IAKB-BKdKOAkL.js");
		$.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ p(async () => {
		let { createTreeViewServices: e } = await import("./treeView-Q6P3EWNA-DuRV97YF.js");
		$.treeView = e().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ p(async () => {
		let { createArchitectureServices: e } = await import("./architecture-7GRP2DOG-BWLylgiA.js");
		$.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ p(async () => {
		let { createGitGraphServices: e } = await import("./gitGraph-4MIJSDKK-Dy9uQXGh.js");
		$.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ p(async () => {
		let { createEventModelingServices: e } = await import("./eventmodeling-NTZA5JFV-D7nP7Uyu.js");
		$.eventmodeling = e().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ p(async () => {
		let { createRadarServices: e } = await import("./radar-RG4KPBEZ-ScR_D_Ts.js");
		$.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	railroad: /* @__PURE__ */ p(async () => {
		let { createRailroadServices: e } = await import("./railroad-74A4TZTK-DQvPSdo5.js");
		$.railroad = e().Railroad.parser.LangiumParser;
	}, "railroad"),
	railroadEbnf: /* @__PURE__ */ p(async () => {
		let { createRailroadEbnfServices: e } = await import("./railroad-ebnf-LZEXJU2U-BgEobkSn.js");
		$.railroadEbnf = e().RailroadEbnf.parser.LangiumParser;
	}, "railroadEbnf"),
	railroadAbnf: /* @__PURE__ */ p(async () => {
		let { createRailroadAbnfServices: e } = await import("./railroad-abnf-HS5TGJTU-CsJQG2O8.js");
		$.railroadAbnf = e().RailroadAbnf.parser.LangiumParser;
	}, "railroadAbnf"),
	railroadPeg: /* @__PURE__ */ p(async () => {
		let { createRailroadPegServices: e } = await import("./railroad-peg-WCYAUIDC-DjLAjofI.js");
		$.railroadPeg = e().RailroadPeg.parser.LangiumParser;
	}, "railroadPeg"),
	treemap: /* @__PURE__ */ p(async () => {
		let { createTreemapServices: e } = await import("./treemap-WGGIJYW6-AsLq-uwC.js");
		$.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ p(async () => {
		let { createWardleyServices: e } = await import("./wardley-WFR3VGLG-Na-tFhQJ.js");
		$.wardley = e().Wardley.parser.LangiumParser;
	}, "wardley"),
	cynefin: /* @__PURE__ */ p(async () => {
		let { createCynefinServices: e } = await import("./cynefin-OW5HDTMX-obq-i80l.js");
		$.cynefin = e().Cynefin.parser.LangiumParser;
	}, "cynefin")
};
async function Re(e, t) {
	let n = Le[e];
	if (!n) throw Error(`Unknown diagram type: ${e}`);
	$[e] || await n();
	let r = $[e].parse(t);
	if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new ze(r);
	return r.value;
}
p(Re, "parse");
var ze = class extends Error {
	constructor(e) {
		let t = e.lexerErrors.map((e) => `Lexer error on line ${e.line !== void 0 && !isNaN(e.line) ? e.line : "?"}, column ${e.column !== void 0 && !isNaN(e.column) ? e.column : "?"}: ${e.message}`).join("\n"), n = e.parserErrors.map((e) => `Parse error on line ${e.token.startLine !== void 0 && !isNaN(e.token.startLine) ? e.token.startLine : "?"}, column ${e.token.startColumn !== void 0 && !isNaN(e.token.startColumn) ? e.token.startColumn : "?"}: ${e.message}`).join("\n");
		super(`Parsing failed: ${t} ${n}`), this.result = e;
	}
	static {
		p(this, "MermaidParseError");
	}
};
//#endregion
export { _ as A, O as C, w as D, D as E, h as M, T as O, j as S, E as T, P as _, Y as a, N as b, q as c, V as d, H as f, Ce as g, L as h, Q as i, m as j, g as k, W as l, z as m, Re as n, X as o, R as p, Z as r, K as s, ze as t, G as u, F as v, k as w, A as x, M as y };
