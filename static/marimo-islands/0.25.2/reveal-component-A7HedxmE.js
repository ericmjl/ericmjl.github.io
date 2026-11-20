import { a as e } from "./rolldown-runtime-Cb76FRpK.js";
import { c as t, g as n, h as r, m as i, t as a } from "./button-CvjkwdSk.js";
import { t as o } from "./react-sHtZdjeP.js";
import { t as s } from "./compiler-runtime-CldRdSsv.js";
import { h as c, t as l } from "./tooltip-BO1REbqs.js";
import { w as u } from "./cells-C8iCYvLU.js";
import { $ as d, Q as f, Z as p, an as m, i as h, l as g, ln as _, n as v, on as y, r as b, t as x, u as S } from "./common-Cjo7bjRK.js";
import { M as C } from "./select-BButFi-d.js";
import { q as ee } from "./dropdown-menu-CP_qCYHC.js";
import { g as w } from "./toDate-BNJf01u1.js";
import { t as T } from "./jsx-runtime-3BD1kT0s.js";
import { q as E } from "./use-restore-focus-BEM7sFWl.js";
import { A as D, C as O, b as k } from "./useTheme-CRnjkku0.js";
import { a as A, n as te, t as ne } from "./code-visibility-4aW5326K.js";
/* empty css                */
var j = c("sticky-note", [["path", {
	d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
	key: "1dfntj"
}], ["path", {
	d: "M15 3v5a1 1 0 0 0 1 1h5",
	key: "6s6qgf"
}]]), M = /* @__PURE__ */ e(o(), 1), N = s(), re = (e, t) => {
	for (let n in t) e[n] = t[n];
	return e;
}, P = (e, t) => Array.from(e.querySelectorAll(t)), ie = (e, t, n) => {
	n ? e.classList.add(t) : e.classList.remove(t);
}, ae = (e) => {
	if (typeof e == "string") {
		if (e === "null") return null;
		if (e === "true") return !0;
		if (e === "false") return !1;
		if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
	}
	return e;
}, oe = (e, t) => {
	e.style.transform = t;
}, F = (e, t) => {
	let n = e.matches || e.matchesSelector || e.msMatchesSelector;
	return !!(n && n.call(e, t));
}, I = (e, t) => {
	if (e && typeof e.closest == "function") return e.closest(t);
	for (; e;) {
		if (F(e, t)) return e;
		e = e.parentElement;
	}
	return null;
}, se = (e) => {
	e ||= document.documentElement;
	let t = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
	t && t.apply(e);
}, ce = (e, t, n, r = "") => {
	let i = e.querySelectorAll("." + n);
	for (let t = 0; t < i.length; t++) {
		let n = i[t];
		if (n.parentNode === e) return n;
	}
	let a = document.createElement(t);
	return a.className = n, a.innerHTML = r, e.appendChild(a), a;
}, L = (e) => {
	let t = document.createElement("style");
	return e && e.length > 0 && t.appendChild(document.createTextNode(e)), document.head.appendChild(t), t;
}, le = () => {
	let e = {};
	location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t) => {
		let n = t.split("=").shift(), r = t.split("=").pop();
		return n && r !== void 0 && (e[n] = r), t;
	});
	for (let t in e) {
		let n = e[t];
		e[t] = ae(unescape(n));
	}
	return e.dependencies !== void 0 && delete e.dependencies, e;
}, ue = (e, t = 0) => {
	if (e) {
		let n, r = e.style.height;
		return e.style.height = "0px", e.parentElement && (e.parentElement.style.height = "auto"), n = t - (e.parentElement?.offsetHeight || 0), e.style.height = r + "px", e.parentElement && e.parentElement.style.removeProperty("height"), n;
	}
	return t;
}, de = {
	mp4: "video/mp4",
	m4a: "video/mp4",
	ogv: "video/ogg",
	mpeg: "video/mpeg",
	webm: "video/webm"
}, fe = (e = "") => {
	let t = e.split(".").pop();
	return t ? de[t] : void 0;
}, pe = (e = "") => encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), me = navigator.userAgent, he = /(iphone|ipod|ipad|android)/gi.test(me) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
/chrome/i.test(me) && /edge/i.test(me);
var R = /android/gi.test(me), ge = function(e) {
	if (e) {
		var t = function(e) {
			return [].slice.call(e);
		}, n = 0, r = 1, i = 2, a = 3, o = [], s = null, c = "requestAnimationFrame" in e ? function() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { sync: !1 };
			e.cancelAnimationFrame(s);
			var n = function() {
				return u(o.filter((function(e) {
					return e.dirty && e.active;
				})));
			};
			if (t.sync) return n();
			s = e.requestAnimationFrame(n);
		} : function() {}, l = function(e) {
			return function(t) {
				o.forEach((function(t) {
					return t.dirty = e;
				})), c(t);
			};
		}, u = function(e) {
			e.filter((function(e) {
				return !e.styleComputed;
			})).forEach((function(e) {
				e.styleComputed = m(e);
			})), e.filter(h).forEach(g);
			var t = e.filter(p);
			t.forEach(f), t.forEach((function(e) {
				g(e), d(e);
			})), t.forEach(_);
		}, d = function(e) {
			return e.dirty = n;
		}, f = function(e) {
			e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
		}, p = function(e) {
			return e.dirty !== i || e.dirty === i && e.element.parentNode.clientWidth !== e.availableWidth;
		}, m = function(t) {
			var n = e.getComputedStyle(t.element, null);
			return t.currentFontSize = parseFloat(n.getPropertyValue("font-size")), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space"), !0;
		}, h = function(e) {
			var t = !1;
			return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), e.whiteSpace !== "nowrap" && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
		}, g = function(e) {
			e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px";
		}, _ = function(e) {
			e.element.dispatchEvent(new CustomEvent("fit", { detail: {
				oldValue: e.previousFontSize,
				newValue: e.currentFontSize,
				scaleFactor: e.currentFontSize / e.previousFontSize
			} }));
		}, v = function(e, t) {
			return function(n) {
				e.dirty = t, e.active && c(n);
			};
		}, y = function(e) {
			return function() {
				o = o.filter((function(t) {
					return t.element !== e.element;
				})), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize;
			};
		}, b = function(e) {
			return function() {
				e.active || (e.active = !0, c());
			};
		}, x = function(e) {
			return function() {
				return e.active = !1;
			};
		}, S = function(e) {
			e.observeMutations && (e.observer = new MutationObserver(v(e, r)), e.observer.observe(e.element, e.observeMutations));
		}, C = {
			minSize: 16,
			maxSize: 512,
			multiLine: !0,
			observeMutations: "MutationObserver" in e && {
				subtree: !0,
				childList: !0,
				characterData: !0
			}
		}, ee = null, w = function() {
			e.clearTimeout(ee), ee = e.setTimeout(l(i), D.observeWindowDelay);
		}, T = ["resize", "orientationchange"];
		return Object.defineProperty(D, "observeWindow", { set: function(t) {
			var n = `${t ? "add" : "remove"}EventListener`;
			T.forEach((function(t) {
				e[n](t, w);
			}));
		} }), D.observeWindow = !0, D.observeWindowDelay = 100, D.fitAll = l(a), D;
	}
	function E(e, t) {
		var n = Object.assign({}, C, t), r = e.map((function(e) {
			var t = Object.assign({}, n, {
				element: e,
				active: !0
			});
			return function(e) {
				e.originalStyle = {
					whiteSpace: e.element.style.whiteSpace,
					display: e.element.style.display,
					fontSize: e.element.style.fontSize
				}, S(e), e.newbie = !0, e.dirty = !0, o.push(e);
			}(t), {
				element: e,
				fit: v(t, a),
				unfreeze: b(t),
				freeze: x(t),
				unsubscribe: y(t)
			};
		}));
		return c(), r;
	}
	function D(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return typeof e == "string" ? E(t(document.querySelectorAll(e)), n) : E([e], n)[0];
	}
}(typeof window > "u" ? null : window);
function _e(e) {
	"@babel/helpers - typeof";
	return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _e(e);
}
function ve(e, t) {
	if (_e(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_e(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function ye(e) {
	var t = ve(e, "string");
	return _e(t) == "symbol" ? t : t + "";
}
function z(e, t, n) {
	return (t = ye(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var be = class {
	constructor(e) {
		z(this, "allowedToPlayAudio", null), this.Reveal = e, this.startEmbeddedMedia = this.startEmbeddedMedia.bind(this), this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this), this.preventIframeAutoFocus = this.preventIframeAutoFocus.bind(this), this.ensureMobileMediaPlaying = this.ensureMobileMediaPlaying.bind(this), this.failedAudioPlaybackTargets = /* @__PURE__ */ new Set(), this.failedVideoPlaybackTargets = /* @__PURE__ */ new Set(), this.failedMutedVideoPlaybackTargets = /* @__PURE__ */ new Set(), this.renderMediaPlayButton();
	}
	renderMediaPlayButton() {
		this.mediaPlayButton = document.createElement("button"), this.mediaPlayButton.className = "r-overlay-button r-media-play-button", this.mediaPlayButton.addEventListener("click", () => {
			this.resetTemporarilyMutedMedia(), (/* @__PURE__ */ new Set([
				...this.failedAudioPlaybackTargets,
				...this.failedVideoPlaybackTargets,
				...this.failedMutedVideoPlaybackTargets
			])).forEach((e) => {
				this.startEmbeddedMedia({ target: e });
			}), this.clearMediaPlaybackErrors();
		});
	}
	shouldPreload(e) {
		if (this.Reveal.isScrollView()) return !0;
		let t = this.Reveal.getConfig().preloadIframes;
		return typeof t != "boolean" && (t = e.hasAttribute("data-preload")), t;
	}
	load(e, t = {}) {
		let n = this.Reveal.getConfig().display;
		if (n.includes("!important")) {
			let t = n.replace(/\s*!important\s*$/, "").trim();
			e.style.setProperty("display", t, "important");
		} else e.style.display = n;
		P(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e) => {
			let t = e.tagName === "IFRAME";
			(!t || this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"), t && e.addEventListener("load", this.preventIframeAutoFocus));
		}), P(e, "video, audio").forEach((e) => {
			let t = 0;
			P(e, "source[data-src]").forEach((e) => {
				e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1;
			}), he && e.tagName === "VIDEO" && e.setAttribute("playsinline", ""), t > 0 && e.load();
		});
		let r = e.slideBackgroundElement;
		if (r) {
			r.style.display = "block";
			let n = e.slideBackgroundContentElement, i = e.getAttribute("data-background-iframe");
			if (r.hasAttribute("data-loaded") === !1) {
				r.setAttribute("data-loaded", "true");
				let a = e.getAttribute("data-background-image"), o = e.getAttribute("data-background-video"), s = e.hasAttribute("data-background-video-loop"), c = e.hasAttribute("data-background-video-muted");
				if (a) /^data:/.test(a.trim()) ? n.style.backgroundImage = `url(${a.trim()})` : n.style.backgroundImage = a.split(",").map((e) => `url(${pe(decodeURI(e.trim()))})`).join(",");
				else if (o) {
					let e = document.createElement("video");
					s && e.setAttribute("loop", ""), (c || this.Reveal.isSpeakerNotes()) && (e.muted = !0), he && e.setAttribute("playsinline", ""), o.split(",").forEach((t) => {
						let n = document.createElement("source");
						n.setAttribute("src", t);
						let r = fe(t);
						r && n.setAttribute("type", r), e.appendChild(n);
					}), n.appendChild(e);
				} else if (i && t.excludeIframes !== !0) {
					let e = document.createElement("iframe");
					e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", i), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", n.appendChild(e);
				}
			}
			let a = n.querySelector("iframe[data-src]");
			a && this.shouldPreload(r) && !/autoplay=(1|true|yes)/gi.test(i) && a.getAttribute("src") !== i && a.setAttribute("src", i);
		}
		this.layout(e);
	}
	layout(e) {
		Array.from(e.querySelectorAll(".r-fit-text")).forEach((e) => {
			ge(e, {
				minSize: 24,
				maxSize: this.Reveal.getConfig().height * .8,
				observeMutations: !1,
				observeWindow: !1
			});
		});
	}
	unload(e) {
		e.style.display = "none";
		let t = this.Reveal.getSlideBackground(e);
		t && (t.style.display = "none", P(t, "iframe[src]").forEach((e) => {
			e.removeAttribute("src");
		})), P(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e) => {
			e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
		}), P(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e) => {
			e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
		});
	}
	formatEmbeddedContent() {
		let e = (e, t, n) => {
			P(this.Reveal.getSlidesElement(), "iframe[" + e + "*=\"" + t + "\"]").forEach((t) => {
				let r = t.getAttribute(e);
				r && r.indexOf(n) === -1 && t.setAttribute(e, r + (/\?/.test(r) ? "&" : "?") + n);
			});
		};
		e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1");
	}
	startEmbeddedContent(e) {
		if (e) {
			let t = this.Reveal.isSpeakerNotes();
			P(e, "img[src$=\".gif\"]").forEach((e) => {
				e.setAttribute("src", e.getAttribute("src"));
			}), P(e, "video, audio").forEach((e) => {
				if (I(e, ".fragment") && !I(e, ".fragment.visible")) return;
				let n = this.Reveal.getConfig().autoPlayMedia;
				if (typeof n != "boolean" && (n = e.hasAttribute("data-autoplay") || !!I(e, ".slide-background")), n && typeof e.play == "function") {
					if (t && !e.muted) return;
					e.readyState > 1 ? this.startEmbeddedMedia({ target: e }) : he ? (e.addEventListener("canplay", this.ensureMobileMediaPlaying), this.playMediaElement(e)) : (e.removeEventListener("loadeddata", this.startEmbeddedMedia), e.addEventListener("loadeddata", this.startEmbeddedMedia));
				}
			}), t || (P(e, "iframe[src]").forEach((e) => {
				I(e, ".fragment") && !I(e, ".fragment.visible") || this.startEmbeddedIframe({ target: e });
			}), P(e, "iframe[data-src]").forEach((e) => {
				I(e, ".fragment") && !I(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
			}));
		}
	}
	ensureMobileMediaPlaying(e) {
		let t = e.target;
		typeof t.getVideoPlaybackQuality == "function" && setTimeout(() => {
			let e = t.paused === !1, n = t.getVideoPlaybackQuality().totalVideoFrames;
			e && n === 0 && (t.load(), t.play());
		}, 1e3);
	}
	startEmbeddedMedia(e) {
		let t = !!I(e.target, "html"), n = !!I(e.target, ".present");
		t && n && (e.target.paused || e.target.ended) && (e.target.currentTime = 0, this.playMediaElement(e.target)), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
	}
	playMediaElement(e) {
		let t = e.play();
		t && typeof t.catch == "function" && t.then(() => {
			e.muted || (this.allowedToPlayAudio = !0);
		}).catch((t) => {
			if (t.name === "NotAllowedError") {
				if (this.allowedToPlayAudio = !1, e.tagName === "VIDEO") {
					this.onVideoPlaybackNotAllowed(e);
					let t = !!I(e, "html"), n = !!I(e, ".present"), r = e.muted;
					t && n && !r && (e.setAttribute("data-muted-by-reveal", "true"), e.muted = !0, e.play().catch(() => {
						this.onMutedVideoPlaybackNotAllowed(e);
					}));
				} else e.tagName === "AUDIO" && this.onAudioPlaybackNotAllowed(e);
			}
		});
	}
	startEmbeddedIframe(e) {
		let t = e.target;
		if (this.preventIframeAutoFocus(e), t && t.contentWindow) {
			let n = !!I(e.target, "html"), r = !!I(e.target, ".present");
			if (n && r) {
				let e = this.Reveal.getConfig().autoPlayMedia;
				typeof e != "boolean" && (e = t.hasAttribute("data-autoplay") || !!I(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage("{\"event\":\"command\",\"func\":\"playVideo\",\"args\":\"\"}", "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage("{\"method\":\"play\"}", "*") : t.contentWindow.postMessage("slide:start", "*");
			}
		}
	}
	stopEmbeddedContent(e, t = {}) {
		t = re({ unloadIframes: !0 }, t), e && e.parentNode && (P(e, "video, audio").forEach((e) => {
			!e.hasAttribute("data-ignore") && typeof e.pause == "function" && (e.setAttribute("data-paused-by-reveal", ""), e.pause(), he && e.removeEventListener("canplay", this.ensureMobileMediaPlaying));
		}), P(e, "iframe").forEach((e) => {
			e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.preventIframeAutoFocus), e.removeEventListener("load", this.startEmbeddedIframe);
		}), P(e, "iframe[src*=\"youtube.com/embed/\"]").forEach((e) => {
			!e.hasAttribute("data-ignore") && e.contentWindow && typeof e.contentWindow.postMessage == "function" && e.contentWindow.postMessage("{\"event\":\"command\",\"func\":\"pauseVideo\",\"args\":\"\"}", "*");
		}), P(e, "iframe[src*=\"player.vimeo.com/\"]").forEach((e) => {
			!e.hasAttribute("data-ignore") && e.contentWindow && typeof e.contentWindow.postMessage == "function" && e.contentWindow.postMessage("{\"method\":\"pause\"}", "*");
		}), t.unloadIframes === !0 && P(e, "iframe[data-src]").forEach((e) => {
			e.setAttribute("src", "about:blank"), e.removeAttribute("src");
		}));
	}
	isAllowedToPlayAudio() {
		return this.allowedToPlayAudio;
	}
	showPlayOrUnmuteButton() {
		let e = this.failedAudioPlaybackTargets.size, t = this.failedVideoPlaybackTargets.size, n = this.failedMutedVideoPlaybackTargets.size, r = "Play media";
		n > 0 ? r = "Play video" : t > 0 ? r = "Unmute video" : e > 0 && (r = "Play audio"), this.mediaPlayButton.textContent = r, this.Reveal.getRevealElement().appendChild(this.mediaPlayButton);
	}
	onAudioPlaybackNotAllowed(e) {
		this.failedAudioPlaybackTargets.add(e), this.showPlayOrUnmuteButton(e);
	}
	onVideoPlaybackNotAllowed(e) {
		this.failedVideoPlaybackTargets.add(e), this.showPlayOrUnmuteButton();
	}
	onMutedVideoPlaybackNotAllowed(e) {
		this.failedMutedVideoPlaybackTargets.add(e), this.showPlayOrUnmuteButton();
	}
	resetTemporarilyMutedMedia() {
		(/* @__PURE__ */ new Set([
			...this.failedAudioPlaybackTargets,
			...this.failedVideoPlaybackTargets,
			...this.failedMutedVideoPlaybackTargets
		])).forEach((e) => {
			e.hasAttribute("data-muted-by-reveal") && (e.muted = !1, e.removeAttribute("data-muted-by-reveal"));
		});
	}
	clearMediaPlaybackErrors() {
		this.resetTemporarilyMutedMedia(), this.failedAudioPlaybackTargets.clear(), this.failedVideoPlaybackTargets.clear(), this.failedMutedVideoPlaybackTargets.clear(), this.mediaPlayButton && this.mediaPlayButton.parentNode && this.mediaPlayButton.remove();
	}
	preventIframeAutoFocus(e) {
		let t = e.target;
		if (t && this.Reveal.getConfig().preventIframeAutoFocus) {
			let e = 0, n = () => {
				document.activeElement === t ? document.activeElement.blur() : e < 1e3 && (e += 100, setTimeout(n, 100));
			};
			setTimeout(n, 100);
		}
	}
	afterSlideChanged() {
		this.clearMediaPlaybackErrors();
	}
}, B = ".slides section", xe = ".slides>section", Se = ".slides>section.present>section", Ce = ".backgrounds>.slide-background", we = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview|previewIframe/, Te = class {
	constructor(e) {
		this.Reveal = e;
	}
	render() {
		this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
	}
	configure(e, t) {
		let n = "none";
		e.slideNumber && !this.Reveal.isPrintView() && (e.showSlideNumber === "all" || e.showSlideNumber === "speaker" && this.Reveal.isSpeakerNotes()) && (n = "block"), this.element.style.display = n;
	}
	update() {
		this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
	}
	getSlideNumber(e = this.Reveal.getCurrentSlide()) {
		let t = this.Reveal.getConfig(), n, r = "h.v";
		if (typeof t.slideNumber == "function") n = t.slideNumber(e);
		else {
			typeof t.slideNumber == "string" && (r = t.slideNumber), !/c/.test(r) && this.Reveal.getHorizontalSlides().length === 1 && (r = "c");
			let i = e && e.dataset.visibility === "uncounted" ? 0 : 1;
			switch (n = [], r) {
				case "c":
					n.push(this.Reveal.getSlidePastCount(e) + i);
					break;
				case "c/t":
					n.push(this.Reveal.getSlidePastCount(e) + i, "/", this.Reveal.getTotalSlides());
					break;
				default:
					let t = this.Reveal.getIndices(e);
					n.push(t.h + i);
					let a = r === "h/v" ? "/" : ".";
					this.Reveal.isVerticalSlide(e) && n.push(a, t.v + 1);
			}
		}
		let i = "#" + this.Reveal.location.getHash(e);
		return this.formatNumber(n[0], n[1], n[2], i);
	}
	formatNumber(e, t, n, r = "#" + this.Reveal.location.getHash()) {
		return typeof n == "number" && !isNaN(n) ? `<a href="${r}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${n}</span>
					</a>` : `<a href="${r}">
					<span class="slide-number-a">${e}</span>
					</a>`;
	}
	destroy() {
		this.element.remove();
	}
}, V = class {
	constructor(e) {
		this.Reveal = e, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
	}
	render() {
		this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
	}
	show() {
		this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
	}
	hide() {
		this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
	}
	isVisible() {
		return !!this.element.parentNode;
	}
	jump() {
		clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
		let e = this.jumpInput.value.trim(""), t;
		if (/^\d+$/.test(e)) {
			let n = this.Reveal.getConfig().slideNumber;
			if (n === "c" || n === "c/t") {
				let n = this.Reveal.getSlides()[parseInt(e, 10) - 1];
				n && (t = this.Reveal.getIndices(n));
			}
		}
		return t ||= (/^\d+\.\d+$/.test(e) && (e = e.replace(".", "/")), this.Reveal.location.getIndicesFromHash(e, { oneBasedIndex: !0 })), !t && /\S+/i.test(e) && e.length > 1 && (t = this.search(e)), t && e !== "" ? (this.Reveal.slide(t.h, t.v, t.f), !0) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1);
	}
	jumpAfter(e) {
		clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(() => this.jump(), e);
	}
	search(e) {
		let t = RegExp("\\b" + e.trim() + "\\b", "i"), n = this.Reveal.getSlides().find((e) => t.test(e.innerText));
		return n ? this.Reveal.getIndices(n) : null;
	}
	cancel() {
		this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
	}
	confirm() {
		this.jump(), this.hide();
	}
	destroy() {
		this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
	}
	onKeyDown(e) {
		e.keyCode === 13 ? this.confirm() : e.keyCode === 27 && (this.cancel(), e.stopImmediatePropagation());
	}
	onInput(e) {
		this.jumpAfter(200);
	}
	onBlur() {
		setTimeout(() => this.hide(), 1);
	}
}, Ee = (e) => {
	let t = e.match(/^#([0-9a-f]{3})$/i);
	if (t && t[1]) {
		let e = t[1];
		return {
			r: parseInt(e.charAt(0), 16) * 17,
			g: parseInt(e.charAt(1), 16) * 17,
			b: parseInt(e.charAt(2), 16) * 17
		};
	}
	let n = e.match(/^#([0-9a-f]{6})$/i);
	if (n && n[1]) {
		let e = n[1];
		return {
			r: parseInt(e.slice(0, 2), 16),
			g: parseInt(e.slice(2, 4), 16),
			b: parseInt(e.slice(4, 6), 16)
		};
	}
	let r = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
	if (r) return {
		r: parseInt(r[1], 10),
		g: parseInt(r[2], 10),
		b: parseInt(r[3], 10)
	};
	let i = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
	return i ? {
		r: parseInt(i[1], 10),
		g: parseInt(i[2], 10),
		b: parseInt(i[3], 10),
		a: parseFloat(i[4])
	} : null;
}, De = (e) => (typeof e == "string" && (e = Ee(e)), e ? (e.r * 299 + e.g * 587 + e.b * 114) / 1e3 : null), Oe = class {
	constructor(e) {
		this.Reveal = e;
	}
	render() {
		this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
	}
	create() {
		this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e) => {
			let t = this.createBackground(e, this.element);
			P(e, "section").forEach((e) => {
				this.createBackground(e, t), t.classList.add("stack");
			});
		}), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = "url(\"" + this.Reveal.getConfig().parallaxBackgroundImage + "\")", this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
			this.Reveal.getRevealElement().classList.add("has-parallax-background");
		}, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
	}
	createBackground(e, t) {
		let n = document.createElement("div");
		n.className = "slide-background " + e.className.replace(/present|past|future/, "");
		let r = document.createElement("div");
		return r.className = "slide-background-content", n.appendChild(r), t.appendChild(n), e.slideBackgroundElement = n, e.slideBackgroundContentElement = r, this.sync(e), n;
	}
	sync(e) {
		let t = e.slideBackgroundElement, n = e.slideBackgroundContentElement, r = {
			background: e.getAttribute("data-background"),
			backgroundSize: e.getAttribute("data-background-size"),
			backgroundImage: e.getAttribute("data-background-image"),
			backgroundVideo: e.getAttribute("data-background-video"),
			backgroundIframe: e.getAttribute("data-background-iframe"),
			backgroundColor: e.getAttribute("data-background-color"),
			backgroundGradient: e.getAttribute("data-background-gradient"),
			backgroundRepeat: e.getAttribute("data-background-repeat"),
			backgroundPosition: e.getAttribute("data-background-position"),
			backgroundTransition: e.getAttribute("data-background-transition"),
			backgroundOpacity: e.getAttribute("data-background-opacity")
		}, i = e.hasAttribute("data-preload");
		e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", n.style.backgroundSize = "", n.style.backgroundRepeat = "", n.style.backgroundPosition = "", n.style.backgroundImage = "", n.style.opacity = "", n.innerHTML = "", r.background && (/^(http|file|\/\/)/gi.test(r.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(r.background) ? e.setAttribute("data-background-image", r.background) : t.style.background = r.background), (r.background || r.backgroundColor || r.backgroundGradient || r.backgroundImage || r.backgroundVideo || r.backgroundIframe) && t.setAttribute("data-background-hash", r.background + r.backgroundSize + r.backgroundImage + r.backgroundVideo + r.backgroundIframe + r.backgroundColor + r.backgroundGradient + r.backgroundRepeat + r.backgroundPosition + r.backgroundTransition + r.backgroundOpacity), r.backgroundSize && t.setAttribute("data-background-size", r.backgroundSize), r.backgroundColor && (t.style.backgroundColor = r.backgroundColor), r.backgroundGradient && (t.style.backgroundImage = r.backgroundGradient), r.backgroundTransition && t.setAttribute("data-background-transition", r.backgroundTransition), i && t.setAttribute("data-preload", ""), r.backgroundSize && (n.style.backgroundSize = r.backgroundSize), r.backgroundRepeat && (n.style.backgroundRepeat = r.backgroundRepeat), r.backgroundPosition && (n.style.backgroundPosition = r.backgroundPosition), r.backgroundOpacity && (n.style.opacity = r.backgroundOpacity);
		let a = this.getContrastClass(e);
		typeof a == "string" && e.classList.add(a);
	}
	getContrastClass(e) {
		let t = e.slideBackgroundElement, n = e.getAttribute("data-background-color");
		if (!n || !Ee(n)) {
			let e = window.getComputedStyle(t);
			e && e.backgroundColor && (n = e.backgroundColor);
		}
		if (n) {
			let e = Ee(n);
			if (e && e.a !== 0) return De(n) < 128 ? "has-dark-background" : "has-light-background";
		}
		return null;
	}
	bubbleSlideContrastClassToElement(e, t) {
		["has-light-background", "has-dark-background"].forEach((n) => {
			e.classList.contains(n) ? t.classList.add(n) : t.classList.remove(n);
		}, this);
	}
	update(e = !1) {
		let t = this.Reveal.getConfig(), n = this.Reveal.getCurrentSlide(), r = this.Reveal.getIndices(), i = null, a = t.rtl ? "future" : "past", o = t.rtl ? "past" : "future";
		if (Array.from(this.element.childNodes).forEach((t, n) => {
			t.classList.remove("past", "present", "future"), n < r.h ? t.classList.add(a) : n > r.h ? t.classList.add(o) : (t.classList.add("present"), i = t), (e || n === r.h) && P(t, ".slide-background").forEach((e, t) => {
				e.classList.remove("past", "present", "future");
				let a = typeof r.v == "number" ? r.v : 0;
				t < a ? e.classList.add("past") : t > a ? e.classList.add("future") : (e.classList.add("present"), n === r.h && (i = e));
			});
		}), this.previousBackground && !this.previousBackground.closest("body") && (this.previousBackground = null), i && this.previousBackground) {
			let e = this.previousBackground.getAttribute("data-background-hash"), t = i.getAttribute("data-background-hash");
			if (t && t === e && i !== this.previousBackground) {
				this.element.classList.add("no-transition");
				let e = i.querySelector("video"), t = this.previousBackground.querySelector("video");
				if (e && t) {
					let n = e.parentNode;
					t.parentNode.appendChild(e), n.appendChild(t);
				}
			}
		}
		let s = i !== this.previousBackground;
		if (s && this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), s && i) {
			this.Reveal.slideContent.startEmbeddedContent(i);
			let e = i.querySelector(".slide-background-content");
			if (e) {
				let t = e.style.backgroundImage || "";
				/\.gif/i.test(t) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = t);
			}
			this.previousBackground = i;
		}
		n && this.bubbleSlideContrastClassToElement(n, this.Reveal.getRevealElement()), setTimeout(() => {
			this.element.classList.remove("no-transition");
		}, 10);
	}
	updateParallax() {
		let e = this.Reveal.getIndices();
		if (this.Reveal.getConfig().parallaxBackgroundImage) {
			let t = this.Reveal.getHorizontalSlides(), n = this.Reveal.getVerticalSlides(), r = this.element.style.backgroundSize.split(" "), i, a;
			r.length === 1 ? i = a = parseInt(r[0], 10) : (i = parseInt(r[0], 10), a = parseInt(r[1], 10));
			let o = this.element.offsetWidth, s = t.length, c, l;
			c = typeof this.Reveal.getConfig().parallaxBackgroundHorizontal == "number" ? this.Reveal.getConfig().parallaxBackgroundHorizontal : s > 1 ? (i - o) / (s - 1) : 0, l = c * e.h * -1;
			let u = this.element.offsetHeight, d = n.length, f, p;
			f = typeof this.Reveal.getConfig().parallaxBackgroundVertical == "number" ? this.Reveal.getConfig().parallaxBackgroundVertical : (a - u) / (d - 1), p = d > 0 ? f * e.v : 0, this.element.style.backgroundPosition = l + "px " + -p + "px";
		}
	}
	destroy() {
		this.element.remove();
	}
}, ke = 0, Ae = class {
	constructor(e) {
		this.Reveal = e;
	}
	run(e, t) {
		this.reset();
		let n = this.Reveal.getSlides(), r = n.indexOf(t), i = n.indexOf(e);
		if (e && t && e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(r > i ? t : e).hasAttribute("data-auto-animate-restart")) {
			this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || L();
			let n = this.getAutoAnimateOptions(t);
			e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", n.slideDirection = r > i ? "forward" : "backward";
			let a = e.style.display === "none";
			a && (e.style.display = this.Reveal.getConfig().display);
			let o = this.getAutoAnimatableElements(e, t).map((e) => this.autoAnimateElements(e.from, e.to, e.options || {}, n, ke++));
			if (a && (e.style.display = "none"), t.dataset.autoAnimateUnmatched !== "false" && this.Reveal.getConfig().autoAnimateUnmatched === !0) {
				let e = n.duration * .8, r = n.duration * .2;
				this.getUnmatchedAutoAnimateElements(t).forEach((e) => {
					let t = this.getAutoAnimateOptions(e, n), r = "unmatched";
					(t.duration !== n.duration || t.delay !== n.delay) && (r = "unmatched-" + ke++, o.push(`[data-auto-animate="running"] [data-auto-animate-target="${r}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)), e.dataset.autoAnimateTarget = r;
				}, this), o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${r}s; }`);
			}
			this.autoAnimateStyleSheet.innerHTML = o.join(""), requestAnimationFrame(() => {
				this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
			}), this.Reveal.dispatchEvent({
				type: "autoanimate",
				data: {
					fromSlide: e,
					toSlide: t,
					sheet: this.autoAnimateStyleSheet
				}
			});
		}
	}
	reset() {
		P(this.Reveal.getRevealElement(), "[data-auto-animate]:not([data-auto-animate=\"\"])").forEach((e) => {
			e.dataset.autoAnimate = "";
		}), P(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e) => {
			delete e.dataset.autoAnimateTarget;
		}), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
	}
	autoAnimateElements(e, t, n, r, i) {
		e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = i;
		let a = this.getAutoAnimateOptions(t, r);
		n.delay !== void 0 && (a.delay = n.delay), n.duration !== void 0 && (a.duration = n.duration), n.easing !== void 0 && (a.easing = n.easing);
		let o = this.getAutoAnimatableProperties("from", e, n), s = this.getAutoAnimatableProperties("to", t, n);
		if (t.classList.contains("fragment") && delete s.styles.opacity, n.translate !== !1 || n.scale !== !1) {
			let e = this.Reveal.getScale(), t = {
				x: (o.x - s.x) / e,
				y: (o.y - s.y) / e,
				scaleX: o.width / s.width,
				scaleY: o.height / s.height
			};
			t.x = Math.round(t.x * 1e3) / 1e3, t.y = Math.round(t.y * 1e3) / 1e3, t.scaleX = Math.round(t.scaleX * 1e3) / 1e3, t.scaleX = Math.round(t.scaleX * 1e3) / 1e3;
			let r = n.translate !== !1 && (t.x !== 0 || t.y !== 0), i = n.scale !== !1 && (t.scaleX !== 0 || t.scaleY !== 0);
			if (r || i) {
				let e = [];
				r && e.push(`translate(${t.x}px, ${t.y}px)`), i && e.push(`scale(${t.scaleX}, ${t.scaleY})`), o.styles.transform = e.join(" "), o.styles["transform-origin"] = "top left", s.styles.transform = "none";
			}
		}
		for (let e in s.styles) {
			let t = s.styles[e], n = o.styles[e];
			t === n ? delete s.styles[e] : (t.explicitValue === !0 && (s.styles[e] = t.value), n.explicitValue === !0 && (o.styles[e] = n.value));
		}
		let c = "", l = Object.keys(s.styles);
		if (l.length > 0) {
			o.styles.transition = "none", s.styles.transition = `all ${a.duration}s ${a.easing} ${a.delay}s`, s.styles["transition-property"] = l.join(", "), s.styles["will-change"] = l.join(", ");
			let e = Object.keys(o.styles).map((e) => e + ": " + o.styles[e] + " !important;").join(""), t = Object.keys(s.styles).map((e) => e + ": " + s.styles[e] + " !important;").join("");
			c = "[data-auto-animate-target=\"" + i + "\"] {" + e + "}[data-auto-animate=\"running\"] [data-auto-animate-target=\"" + i + "\"] {" + t + "}";
		}
		return c;
	}
	getAutoAnimateOptions(e, t) {
		let n = {
			easing: this.Reveal.getConfig().autoAnimateEasing,
			duration: this.Reveal.getConfig().autoAnimateDuration,
			delay: 0
		};
		if (n = re(n, t), e.parentNode) {
			let t = I(e.parentNode, "[data-auto-animate-target]");
			t && (n = this.getAutoAnimateOptions(t, n));
		}
		return e.dataset.autoAnimateEasing && (n.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (n.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (n.delay = parseFloat(e.dataset.autoAnimateDelay)), n;
	}
	getAutoAnimatableProperties(e, t, n) {
		let r = this.Reveal.getConfig(), i = { styles: [] };
		if (n.translate !== !1 || n.scale !== !1) {
			let e;
			if (typeof n.measure == "function") e = n.measure(t);
			else if (r.center) e = t.getBoundingClientRect();
			else {
				let n = this.Reveal.getScale();
				e = {
					x: t.offsetLeft * n,
					y: t.offsetTop * n,
					width: t.offsetWidth * n,
					height: t.offsetHeight * n
				};
			}
			i.x = e.x, i.y = e.y, i.width = e.width, i.height = e.height;
		}
		let a = getComputedStyle(t);
		return (n.styles || r.autoAnimateStyles).forEach((t) => {
			let n;
			typeof t == "string" && (t = { property: t }), t.from !== void 0 && e === "from" ? n = {
				value: t.from,
				explicitValue: !0
			} : t.to !== void 0 && e === "to" ? n = {
				value: t.to,
				explicitValue: !0
			} : (t.property === "line-height" && (n = parseFloat(a["line-height"]) / parseFloat(a["font-size"])), isNaN(n) && (n = a[t.property])), n !== "" && (i.styles[t.property] = n);
		}), i;
	}
	getAutoAnimatableElements(e, t) {
		let n = (typeof this.Reveal.getConfig().autoAnimateMatcher == "function" ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t), r = [];
		return n.filter((e, t) => {
			if (r.indexOf(e.to) === -1) return r.push(e.to), !0;
		});
	}
	getAutoAnimatePairs(e, t) {
		let n = [], r = "h1, h2, h3, h4, h5, h6, p, li";
		return this.findAutoAnimateMatches(n, e, t, "[data-id]", (e) => e.nodeName + ":::" + e.getAttribute("data-id")), this.findAutoAnimateMatches(n, e, t, r, (e) => e.nodeName + ":::" + e.textContent.trim()), this.findAutoAnimateMatches(n, e, t, "img, video, iframe", (e) => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))), this.findAutoAnimateMatches(n, e, t, "pre", (e) => e.nodeName + ":::" + e.textContent.trim()), n.forEach((e) => {
			F(e.from, r) ? e.options = { scale: !1 } : F(e.from, "pre") && (e.options = {
				scale: !1,
				styles: ["width", "height"]
			}, this.findAutoAnimateMatches(n, e.from, e.to, ".hljs .hljs-ln-code", (e) => e.textContent, {
				scale: !1,
				styles: [],
				measure: this.getLocalBoundingBox.bind(this)
			}), this.findAutoAnimateMatches(n, e.from, e.to, ".hljs .hljs-ln-numbers[data-line-number]", (e) => e.getAttribute("data-line-number"), {
				scale: !1,
				styles: ["width"],
				measure: this.getLocalBoundingBox.bind(this)
			}));
		}, this), n;
	}
	getLocalBoundingBox(e) {
		let t = this.Reveal.getScale();
		return {
			x: Math.round(e.offsetLeft * t * 100) / 100,
			y: Math.round(e.offsetTop * t * 100) / 100,
			width: Math.round(e.offsetWidth * t * 100) / 100,
			height: Math.round(e.offsetHeight * t * 100) / 100
		};
	}
	findAutoAnimateMatches(e, t, n, r, i, a) {
		let o = {}, s = {};
		[].slice.call(t.querySelectorAll(r)).forEach((e, t) => {
			let n = i(e);
			typeof n == "string" && n.length && (o[n] = o[n] || [], o[n].push(e));
		}), [].slice.call(n.querySelectorAll(r)).forEach((t, n) => {
			let r = i(t);
			s[r] = s[r] || [], s[r].push(t);
			let c;
			if (o[r]) {
				let e = s[r].length - 1, t = o[r].length - 1;
				o[r][e] ? (c = o[r][e], o[r][e] = null) : o[r][t] && (c = o[r][t], o[r][t] = null);
			}
			c && e.push({
				from: c,
				to: t,
				options: a
			});
		});
	}
	getUnmatchedAutoAnimateElements(e) {
		return [].slice.call(e.children).reduce((e, t) => {
			let n = t.querySelector("[data-auto-animate-target]");
			return !t.hasAttribute("data-auto-animate-target") && !n && e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(this.getUnmatchedAutoAnimateElements(t))), e;
		}, []);
	}
}, je = 500, Me = 4, Ne = 6, Pe = 8, Fe = class {
	constructor(e) {
		this.Reveal = e, this.active = !1, this.activeProgressBarPage = null, this.activeProgressBarTrigger = null, this.activatedCallbacks = [], this.onScroll = this.onScroll.bind(this);
	}
	activate() {
		if (this.active) return;
		let e = this.Reveal.getState();
		this.active = !0, this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML;
		let t = P(this.Reveal.getRevealElement(), xe), n = P(this.Reveal.getRevealElement(), Ce);
		this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
		let r, i = window.getComputedStyle(this.viewportElement);
		i && i.background && (r = i.background);
		let a = [], o = t[0].parentNode, s, c = (e, t, i, o) => {
			let c;
			if (s && this.Reveal.shouldAutoAnimateBetween(s, e)) c = document.createElement("div"), c.className = "scroll-page-content scroll-auto-animate-page", c.style.display = "none", s.closest(".scroll-page-content").parentNode.appendChild(c);
			else {
				let e = document.createElement("div");
				if (e.className = "scroll-page", a.push(e), o && n.length > t) {
					let i = n[t], a = window.getComputedStyle(i);
					a && a.background ? e.style.background = a.background : r && (e.style.background = r);
				} else r && (e.style.background = r);
				let i = document.createElement("div");
				i.className = "scroll-page-sticky", e.appendChild(i), c = document.createElement("div"), c.className = "scroll-page-content", i.appendChild(c);
			}
			c.appendChild(e), e.classList.remove("past", "future"), e.removeAttribute("inert"), e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", i), e.slideBackgroundElement && (e.slideBackgroundElement.remove("past", "future"), c.insertBefore(e.slideBackgroundElement, e)), s = e;
		};
		t.forEach((e, t) => {
			this.Reveal.isVerticalStack(e) ? e.querySelectorAll("section").forEach((e, n) => {
				c(e, t, n, !0);
			}) : c(e, t, 0);
		}, this), this.createProgressBar(), P(this.Reveal.getRevealElement(), ".stack").forEach((e) => e.remove()), a.forEach((e) => o.appendChild(e)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.layout(), this.Reveal.setState(e), this.activatedCallbacks.forEach((e) => e()), this.activatedCallbacks = [], this.restoreScrollPosition(), this.viewportElement.classList.remove("loading-scroll-mode"), this.viewportElement.addEventListener("scroll", this.onScroll, { passive: !0 });
	}
	deactivate() {
		if (!this.active) return;
		let e = this.Reveal.getState();
		this.active = !1, this.viewportElement.removeEventListener("scroll", this.onScroll), this.viewportElement.classList.remove("reveal-scroll"), this.pendingScrollRaf &&= (cancelAnimationFrame(this.pendingScrollRaf), 0), this.removeProgressBar(), this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation, this.Reveal.sync(), this.Reveal.setState(e), this.slideHTMLBeforeActivation = null;
	}
	toggle(e) {
		typeof e == "boolean" ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
	}
	isActive() {
		return this.active;
	}
	createProgressBar() {
		this.progressBar = document.createElement("div"), this.progressBar.className = "scrollbar", this.progressBarInner = document.createElement("div"), this.progressBarInner.className = "scrollbar-inner", this.progressBar.appendChild(this.progressBarInner), this.progressBarPlayhead = document.createElement("div"), this.progressBarPlayhead.className = "scrollbar-playhead", this.progressBarInner.appendChild(this.progressBarPlayhead), this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
		let e = (e) => {
			let t = (e.clientY - this.progressBarInner.getBoundingClientRect().top) / this.progressBarHeight;
			t = Math.max(Math.min(t, 1), 0), this.viewportElement.scrollTop = t * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight);
		}, t = (n) => {
			this.draggingProgressBar = !1, this.showProgressBar(), document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t);
		};
		this.progressBarInner.addEventListener("mousedown", (n) => {
			n.preventDefault(), this.draggingProgressBar = !0, document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), e(n);
		});
	}
	removeProgressBar() {
		this.progressBar &&= (this.progressBar.remove(), null), this.activeProgressBarPage = null, this.activeProgressBarTrigger = null;
	}
	layout() {
		this.isActive() && (this.syncPages(), this.syncScrollPosition());
	}
	syncPages() {
		let e = this.Reveal.getConfig(), t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n = this.Reveal.getScale(), r = e.scrollLayout === "compact", i = this.viewportElement.offsetHeight, a = t.height * n, o = r ? a : i;
		this.scrollTriggerHeight = r ? a : i, this.viewportElement.style.setProperty("--page-height", o + "px"), this.viewportElement.style.scrollSnapType = typeof e.scrollSnap == "string" ? `y ${e.scrollSnap}` : "", this.slideTriggers = [];
		let s = Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));
		this.pages = s.map((n) => {
			let a = this.createPage({
				pageElement: n,
				slideElement: n.querySelector("section"),
				stickyElement: n.querySelector(".scroll-page-sticky"),
				contentElement: n.querySelector(".scroll-page-content"),
				backgroundElement: n.querySelector(".slide-background"),
				autoAnimateElements: n.querySelectorAll(".scroll-auto-animate-page"),
				autoAnimatePages: []
			});
			a.pageElement.style.setProperty("--slide-height", e.center === !0 ? "auto" : t.height + "px"), this.slideTriggers.push({
				page: a,
				activate: () => this.activatePage(a),
				deactivate: () => this.deactivatePage(a)
			}), this.createFragmentTriggersForPage(a), a.autoAnimateElements.length > 0 && this.createAutoAnimateTriggersForPage(a);
			let s = Math.max(a.scrollTriggers.length - 1, 0);
			s += a.autoAnimatePages.reduce((e, t) => e + Math.max(t.scrollTriggers.length - 1, 0), a.autoAnimatePages.length), a.pageElement.querySelectorAll(".scroll-snap-point").forEach((e) => e.remove());
			for (let e = 0; e < s + 1; e++) {
				let t = document.createElement("div");
				t.className = "scroll-snap-point", t.style.height = this.scrollTriggerHeight + "px", t.style.scrollSnapAlign = r ? "center" : "start", a.pageElement.appendChild(t), e === 0 && (t.style.marginTop = -this.scrollTriggerHeight + "px");
			}
			return r && a.scrollTriggers.length > 0 ? (a.pageHeight = i, a.pageElement.style.setProperty("--page-height", i + "px")) : (a.pageHeight = o, a.pageElement.style.removeProperty("--page-height")), a.scrollPadding = this.scrollTriggerHeight * s, a.totalHeight = a.pageHeight + a.scrollPadding, a.pageElement.style.setProperty("--page-scroll-padding", a.scrollPadding + "px"), s > 0 ? (a.stickyElement.style.position = "sticky", a.stickyElement.style.top = Math.max((i - a.pageHeight) / 2, 0) + "px") : (a.stickyElement.style.position = "relative", a.pageElement.style.scrollSnapAlign = a.pageHeight < i ? "center" : "start"), a;
		}), this.setTriggerRanges(), this.viewportElement.setAttribute("data-scrollbar", e.scrollProgress), e.scrollProgress && this.totalScrollTriggerCount > 1 ? (this.progressBar || this.createProgressBar(), this.syncProgressBar()) : this.removeProgressBar();
	}
	setTriggerRanges() {
		this.totalScrollTriggerCount = this.slideTriggers.reduce((e, t) => e + Math.max(t.page.scrollTriggers.length, 1), 0);
		let e = 0;
		this.slideTriggers.forEach((t, n) => {
			t.range = [e, e + Math.max(t.page.scrollTriggers.length, 1) / this.totalScrollTriggerCount];
			let r = (t.range[1] - t.range[0]) / t.page.scrollTriggers.length;
			t.page.scrollTriggers.forEach((t, n) => {
				t.range = [e + n * r, e + (n + 1) * r];
			}), e = t.range[1];
		}), this.slideTriggers[this.slideTriggers.length - 1].range[1] = 1;
	}
	createFragmentTriggersForPage(e, t) {
		t ||= e.slideElement;
		let n = this.Reveal.fragments.sort(t.querySelectorAll(".fragment"), !0);
		return n.length && (e.fragments = this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)")), e.scrollTriggers.push({ activate: () => {
			this.Reveal.fragments.update(-1, e.fragments, t);
		} }), n.forEach((n, r) => {
			e.scrollTriggers.push({ activate: () => {
				this.Reveal.fragments.update(r, e.fragments, t);
			} });
		})), e.scrollTriggers.length;
	}
	createAutoAnimateTriggersForPage(e) {
		e.autoAnimateElements.length > 0 && this.slideTriggers.push(...Array.from(e.autoAnimateElements).map((t, n) => {
			let r = this.createPage({
				slideElement: t.querySelector("section"),
				contentElement: t,
				backgroundElement: t.querySelector(".slide-background")
			});
			return this.createFragmentTriggersForPage(r, r.slideElement), e.autoAnimatePages.push(r), {
				page: r,
				activate: () => this.activatePage(r),
				deactivate: () => this.deactivatePage(r)
			};
		}));
	}
	createPage(e) {
		return e.scrollTriggers = [], e.indexh = parseInt(e.slideElement.getAttribute("data-index-h"), 10), e.indexv = parseInt(e.slideElement.getAttribute("data-index-v"), 10), e;
	}
	syncProgressBar() {
		this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((e) => e.remove()), this.activeProgressBarPage = null, this.activeProgressBarTrigger = null, this.getAllPages().forEach((e) => {
			e.progressBarSlide = null, e.scrollTriggers.forEach((e) => e.progressBarElement = null);
		});
		let e = this.viewportElement.scrollHeight, t = this.viewportElement.offsetHeight, n = t / e;
		this.progressBarHeight = this.progressBarInner.offsetHeight, this.playheadHeight = Math.max(n * this.progressBarHeight, Pe), this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight;
		let r = t / e * this.progressBarHeight, i = Math.min(r / 8, Me);
		this.progressBarPlayhead.style.height = this.playheadHeight - i + "px", r > Ne && this.slideTriggers.forEach((e) => {
			let { page: t } = e;
			t.progressBarSlide = document.createElement("div"), t.progressBarSlide.className = "scrollbar-slide", t.progressBarSlide.style.top = e.range[0] * this.progressBarHeight + "px", t.progressBarSlide.style.height = (e.range[1] - e.range[0]) * this.progressBarHeight - i + "px", t.progressBarSlide.classList.toggle("has-triggers", t.scrollTriggers.length > 0), this.progressBarInner.appendChild(t.progressBarSlide), t.scrollTriggers.forEach((n, r) => {
				let a = document.createElement("div");
				a.className = "scrollbar-trigger", a.style.top = (n.range[0] - e.range[0]) * this.progressBarHeight + "px", a.style.height = (n.range[1] - n.range[0]) * this.progressBarHeight - i + "px", t.progressBarSlide.appendChild(a), r === 0 && (a.style.display = "none"), n.progressBarElement = a;
			});
		});
	}
	syncScrollPosition() {
		let e = this.viewportElement.offsetHeight, t = e / this.viewportElement.scrollHeight, n = this.viewportElement.scrollTop, r = this.viewportElement.scrollHeight - e, i = Math.max(Math.min(n / r, 1), 0), a = Math.max(Math.min((n + e / 2) / this.viewportElement.scrollHeight, 1), 0), o, s = null;
		this.slideTriggers.forEach((e) => {
			let { page: n } = e, r = i >= e.range[0] - t * 2 && i <= e.range[1] + t * 2;
			r && !n.loaded ? (n.loaded = !0, this.Reveal.slideContent.load(n.slideElement)) : !r && n.loaded && (n.loaded = !1, this.Reveal.slideContent.unload(n.slideElement)), i >= e.range[0] && i <= e.range[1] ? (this.activateTrigger(e), o = e.page) : e.active && this.deactivateTrigger(e);
		}), o && o.scrollTriggers.forEach((e) => {
			a >= e.range[0] && a <= e.range[1] ? (this.activateTrigger(e), s = e) : e.active && this.deactivateTrigger(e);
		}), this.setProgressBarValue(n / (this.viewportElement.scrollHeight - e), o, s);
	}
	setProgressBarValue(e, t = null, n = null) {
		if (this.progressBar) {
			if (this.progressBarPlayhead.style.transform = `translateY(${e * this.progressBarScrollableHeight}px)`, this.activeProgressBarPage !== t) {
				var r, i;
				(r = this.activeProgressBarPage) == null || (r = r.progressBarSlide) == null || r.classList.remove("active"), t == null || (i = t.progressBarSlide) == null || i.classList.add("active"), this.activeProgressBarPage = t;
			}
			if (this.activeProgressBarTrigger !== n) {
				var a, o;
				(a = this.activeProgressBarTrigger) == null || (a = a.progressBarElement) == null || a.classList.remove("active"), n == null || (o = n.progressBarElement) == null || o.classList.add("active"), this.activeProgressBarTrigger = n;
			}
			this.showProgressBar();
		}
	}
	showProgressBar() {
		this.progressBar.classList.add("visible"), clearTimeout(this.hideProgressBarTimeout), this.Reveal.getConfig().scrollProgress === "auto" && !this.draggingProgressBar && (this.hideProgressBarTimeout = setTimeout(() => {
			this.progressBar && this.progressBar.classList.remove("visible");
		}, je));
	}
	prev() {
		this.viewportElement.scrollTop -= this.scrollTriggerHeight;
	}
	next() {
		this.viewportElement.scrollTop += this.scrollTriggerHeight;
	}
	scrollToSlide(e) {
		if (!this.active) this.activatedCallbacks.push(() => this.scrollToSlide(e));
		else {
			let t = this.getScrollTriggerBySlide(e);
			t && (this.viewportElement.scrollTop = t.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
		}
	}
	storeScrollPosition() {
		clearTimeout(this.storeScrollPositionTimeout), this.storeScrollPositionTimeout = setTimeout(() => {
			sessionStorage.setItem("reveal-scroll-top", this.viewportElement.scrollTop), sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname), this.storeScrollPositionTimeout = null;
		}, 50);
	}
	restoreScrollPosition() {
		let e = sessionStorage.getItem("reveal-scroll-top"), t = sessionStorage.getItem("reveal-scroll-origin");
		e && t === location.origin + location.pathname && (this.viewportElement.scrollTop = parseInt(e, 10));
	}
	activatePage(e) {
		if (!e.active) {
			e.active = !0;
			let { slideElement: t, backgroundElement: n, contentElement: r, indexh: i, indexv: a } = e;
			r.style.display = "block", t.classList.add("present"), n && n.classList.add("present"), this.Reveal.setCurrentScrollPage(t, i, a), this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t, this.viewportElement), Array.from(r.parentNode.querySelectorAll(".scroll-page-content")).forEach((e) => {
				e !== r && (e.style.display = "none");
			});
		}
	}
	deactivatePage(e) {
		e.active && (e.active = !1, e.slideElement && e.slideElement.classList.remove("present"), e.backgroundElement && e.backgroundElement.classList.remove("present"));
	}
	activateTrigger(e) {
		e.active || (e.active = !0, e.activate());
	}
	deactivateTrigger(e) {
		e.active && (e.active = !1, e.deactivate && e.deactivate());
	}
	getSlideByIndices(e, t) {
		let n = this.getAllPages().find((n) => n.indexh === e && n.indexv === t);
		return n ? n.slideElement : null;
	}
	getScrollTriggerBySlide(e) {
		return this.slideTriggers.find((t) => t.page.slideElement === e);
	}
	getAllPages() {
		return this.pages.flatMap((e) => [e, ...e.autoAnimatePages || []]);
	}
	onScroll() {
		this.pendingScrollRaf ||= requestAnimationFrame(() => {
			this.pendingScrollRaf = 0, this.syncScrollPosition(), this.storeScrollPosition();
		});
	}
	get viewportElement() {
		return this.Reveal.getViewportElement();
	}
};
function Ie(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function Le(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				Ie(a, r, i, o, s, "next", e);
			}
			function s(e) {
				Ie(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
var Re = class {
	constructor(e) {
		this.Reveal = e;
	}
	activate() {
		var e = this;
		return Le(function* () {
			let t = e.Reveal.getConfig(), n = P(e.Reveal.getRevealElement(), B), r = t.slideNumber && /all|print/i.test(t.showSlideNumber), i = e.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), a = Math.floor(i.width * (1 + t.margin)), o = Math.floor(i.height * (1 + t.margin)), s = i.width, c = i.height;
			yield new Promise(requestAnimationFrame), L("@page{size:" + a + "px " + o + "px; margin: 0px;}"), L(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + s + "px; max-height:" + c + "px}"), document.documentElement.classList.add("reveal-print", "print-pdf"), document.body.style.width = a + "px", document.body.style.height = o + "px";
			let l = e.Reveal.getViewportElement(), u;
			if (l) {
				let e = window.getComputedStyle(l);
				e && e.background && (u = e.background);
			}
			yield new Promise(requestAnimationFrame), e.Reveal.layoutSlideContents(s, c), yield new Promise(requestAnimationFrame);
			let d = n.map((e) => e.scrollHeight), f = [], p = n[0].parentNode, m = 1;
			n.forEach(function(e, n) {
				if (e.classList.contains("stack") === !1) {
					let i = (a - s) / 2, l = (o - c) / 2, p = d[n], h = Math.max(Math.ceil(p / o), 1);
					h = Math.min(h, t.pdfMaxPagesPerSlide), (h === 1 && t.center || e.classList.contains("center")) && (l = Math.max((o - p) / 2, 0));
					let g = document.createElement("div");
					if (f.push(g), g.className = "pdf-page", g.style.height = (o + t.pdfPageHeightOffset) * h + "px", u && (g.style.background = u), g.appendChild(e), e.style.left = i + "px", e.style.top = l + "px", e.style.width = s + "px", this.Reveal.slideContent.layout(e), e.slideBackgroundElement && g.insertBefore(e.slideBackgroundElement, e), t.showNotes) {
						let n = this.Reveal.getSlideNotes(e);
						if (n) {
							let e = typeof t.showNotes == "string" ? t.showNotes : "inline", r = document.createElement("div");
							r.classList.add("speaker-notes"), r.classList.add("speaker-notes-pdf"), r.setAttribute("data-layout", e), r.innerHTML = n, e === "separate-page" ? f.push(r) : (r.style.left = "8px", r.style.bottom = "8px", r.style.width = a - 16 + "px", g.appendChild(r));
						}
					}
					if (r) {
						let e = document.createElement("div");
						e.classList.add("slide-number"), e.classList.add("slide-number-pdf"), e.innerHTML = m++, g.appendChild(e);
					}
					if (t.pdfSeparateFragments) {
						let e = this.Reveal.fragments.sort(g.querySelectorAll(".fragment"), !0), t;
						e.forEach(function(e, n) {
							t && t.forEach(function(e) {
								e.classList.remove("current-fragment");
							}), e.forEach(function(e) {
								e.classList.add("visible", "current-fragment");
							}, this);
							let i = g.cloneNode(!0);
							if (r) {
								let e = i.querySelector(".slide-number-pdf"), t = n + 1;
								e.innerHTML += "." + t;
							}
							f.push(i), t = e;
						}, this), e.forEach(function(e) {
							e.forEach(function(e) {
								e.classList.remove("visible", "current-fragment");
							});
						});
					} else P(g, ".fragment:not(.fade-out)").forEach(function(e) {
						e.classList.add("visible");
					});
				}
			}, e), yield new Promise(requestAnimationFrame), f.forEach((e) => p.appendChild(e)), e.Reveal.slideContent.layout(e.Reveal.getSlidesElement()), e.Reveal.dispatchEvent({ type: "pdf-ready" }), l.classList.remove("loading-scroll-mode");
		})();
	}
	isActive() {
		return this.Reveal.getConfig().view === "print";
	}
}, ze = class {
	constructor(e) {
		this.Reveal = e;
	}
	configure(e, t) {
		e.fragments === !1 ? this.disable() : t.fragments === !1 && this.enable();
	}
	disable() {
		P(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
			e.classList.add("visible"), e.classList.remove("current-fragment");
		});
	}
	enable() {
		P(this.Reveal.getSlidesElement(), ".fragment").forEach((e) => {
			e.classList.remove("visible"), e.classList.remove("current-fragment");
		});
	}
	availableRoutes() {
		let e = this.Reveal.getCurrentSlide();
		if (e && this.Reveal.getConfig().fragments) {
			let t = e.querySelectorAll(".fragment:not(.disabled)"), n = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
			return {
				prev: t.length - n.length > 0,
				next: !!n.length
			};
		}
		return {
			prev: !1,
			next: !1
		};
	}
	sort(e, t = !1) {
		e = Array.from(e);
		let n = [], r = [], i = [];
		e.forEach((e) => {
			if (e.hasAttribute("data-fragment-index")) {
				let t = parseInt(e.getAttribute("data-fragment-index"), 10);
				n[t] || (n[t] = []), n[t].push(e);
			} else r.push([e]);
		}), n = n.concat(r);
		let a = 0;
		return n.forEach((e) => {
			e.forEach((e) => {
				i.push(e), e.setAttribute("data-fragment-index", a);
			}), a++;
		}), t === !0 ? n : i;
	}
	sortAll() {
		this.Reveal.getHorizontalSlides().forEach((e) => {
			let t = P(e, "section");
			t.forEach((e, t) => {
				this.sort(e.querySelectorAll(".fragment"));
			}, this), t.length === 0 && this.sort(e.querySelectorAll(".fragment"));
		});
	}
	update(e, t, n = this.Reveal.getCurrentSlide()) {
		let r = {
			shown: [],
			hidden: []
		};
		if (n && this.Reveal.getConfig().fragments && (t ||= this.sort(n.querySelectorAll(".fragment")), t.length)) {
			let i = 0;
			if (typeof e != "number") {
				let t = this.sort(n.querySelectorAll(".fragment.visible")).pop();
				t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
			}
			Array.from(t).forEach((t, n) => {
				if (t.hasAttribute("data-fragment-index") && (n = parseInt(t.getAttribute("data-fragment-index"), 10)), i = Math.max(i, n), n <= e) {
					let i = t.classList.contains("visible");
					t.classList.add("visible"), t.classList.remove("current-fragment"), n === e && (this.Reveal.announceStatus(this.Reveal.getStatusText(t)), t.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t)), i || (r.shown.push(t), this.Reveal.dispatchEvent({
						target: t,
						type: "visible",
						bubbles: !1
					}));
				} else {
					let e = t.classList.contains("visible");
					t.classList.remove("visible"), t.classList.remove("current-fragment"), e && (this.Reveal.slideContent.stopEmbeddedContent(t), r.hidden.push(t), this.Reveal.dispatchEvent({
						target: t,
						type: "hidden",
						bubbles: !1
					}));
				}
			}), e = typeof e == "number" ? e : -1, e = Math.max(Math.min(e, i), -1), n.setAttribute("data-fragment", e);
		}
		return r.hidden.length && this.Reveal.dispatchEvent({
			type: "fragmenthidden",
			data: {
				fragment: r.hidden[0],
				fragments: r.hidden
			}
		}), r.shown.length && this.Reveal.dispatchEvent({
			type: "fragmentshown",
			data: {
				fragment: r.shown[0],
				fragments: r.shown
			}
		}), r;
	}
	sync(e = this.Reveal.getCurrentSlide()) {
		return this.sort(e.querySelectorAll(".fragment"));
	}
	goto(e, t = 0) {
		let n = this.Reveal.getCurrentSlide();
		if (n && this.Reveal.getConfig().fragments) {
			let r = this.sort(n.querySelectorAll(".fragment:not(.disabled)"));
			if (r.length) {
				if (typeof e != "number") {
					let t = this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();
					e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
				}
				e += t;
				let i = this.update(e, r);
				return this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !!(i.shown.length || i.hidden.length);
			}
		}
		return !1;
	}
	next() {
		return this.goto(null, 1);
	}
	prev() {
		return this.goto(null, -1);
	}
}, Be = class {
	constructor(e) {
		this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
	}
	activate() {
		if (this.Reveal.getConfig().overview && !this.Reveal.isScrollView() && !this.isActive()) {
			this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), P(this.Reveal.getRevealElement(), B).forEach((e) => {
				e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0);
			});
			let e = this.Reveal.getComputedSlideSize();
			this.overviewSlideWidth = e.width + 70, this.overviewSlideHeight = e.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
			let t = this.Reveal.getIndices();
			this.Reveal.dispatchEvent({
				type: "overviewshown",
				data: {
					indexh: t.h,
					indexv: t.v,
					currentSlide: this.Reveal.getCurrentSlide()
				}
			});
		}
	}
	layout() {
		this.Reveal.getHorizontalSlides().forEach((e, t) => {
			e.setAttribute("data-index-h", t), oe(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && P(e, "section").forEach((e, n) => {
				e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", n), oe(e, "translate3d(0, " + n * this.overviewSlideHeight + "px, 0)");
			});
		}), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, t) => {
			oe(e, "translate3d(" + t * this.overviewSlideWidth + "px, 0, 0)"), P(e, ".slide-background").forEach((e, t) => {
				oe(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
			});
		});
	}
	update() {
		let e = Math.min(window.innerWidth, window.innerHeight), t = Math.max(e / 5, 150) / e, n = this.Reveal.getIndices();
		this.Reveal.transformSlides({ overview: [
			"scale(" + t + ")",
			"translateX(" + -n.h * this.overviewSlideWidth + "px)",
			"translateY(" + -n.v * this.overviewSlideHeight + "px)"
		].join(" ") });
	}
	deactivate() {
		if (this.Reveal.getConfig().overview) {
			this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
				this.Reveal.getRevealElement().classList.remove("overview-deactivating");
			}, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), P(this.Reveal.getRevealElement(), B).forEach((e) => {
				oe(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
			}), P(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e) => {
				oe(e, "");
			}), this.Reveal.transformSlides({ overview: "" });
			let e = this.Reveal.getIndices();
			this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
				type: "overviewhidden",
				data: {
					indexh: e.h,
					indexv: e.v,
					currentSlide: this.Reveal.getCurrentSlide()
				}
			});
		}
	}
	toggle(e) {
		typeof e == "boolean" ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
	}
	isActive() {
		return this.active;
	}
	onSlideClicked(e) {
		if (this.isActive()) {
			e.preventDefault();
			let t = e.target;
			for (; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
			if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
				let e = parseInt(t.getAttribute("data-index-h"), 10), n = parseInt(t.getAttribute("data-index-v"), 10);
				this.Reveal.slide(e, n);
			}
		}
	}
}, Ve = class {
	constructor(e) {
		this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
	}
	configure(e, t) {
		e.navigationMode === "linear" ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
	}
	bind() {
		document.addEventListener("keydown", this.onDocumentKeyDown, !1);
	}
	unbind() {
		document.removeEventListener("keydown", this.onDocumentKeyDown, !1);
	}
	addKeyBinding(e, t) {
		typeof e == "object" && e.keyCode ? this.bindings[e.keyCode] = {
			callback: t,
			key: e.key,
			description: e.description
		} : this.bindings[e] = {
			callback: t,
			key: null,
			description: null
		};
	}
	removeKeyBinding(e) {
		delete this.bindings[e];
	}
	triggerKey(e) {
		this.onDocumentKeyDown({ keyCode: e });
	}
	registerKeyboardShortcut(e, t) {
		this.shortcuts[e] = t;
	}
	getShortcuts() {
		return this.shortcuts;
	}
	getBindings() {
		return this.bindings;
	}
	onDocumentKeyDown(e) {
		let t = this.Reveal.getConfig();
		if (typeof t.keyboardCondition == "function" && t.keyboardCondition(e) === !1 || t.keyboardCondition === "focused" && !this.Reveal.isFocused()) return !0;
		let n = e.keyCode, r = !this.Reveal.isAutoSliding();
		this.Reveal.onUserInput(e);
		let i = document.activeElement && document.activeElement.isContentEditable === !0, a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), o = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), s = !([
			32,
			37,
			38,
			39,
			40,
			63,
			78,
			80,
			191
		].indexOf(e.keyCode) !== -1 && e.shiftKey || e.altKey) && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
		if (i || a || o || s) return;
		let c = [
			66,
			86,
			190,
			191,
			112
		], l;
		if (typeof t.keyboard == "object") for (l in t.keyboard) t.keyboard[l] === "togglePause" && c.push(parseInt(l, 10));
		if (this.Reveal.isOverlayOpen() && ![
			"Escape",
			"f",
			"c",
			"b",
			"."
		].includes(e.key) || this.Reveal.isPaused() && c.indexOf(n) === -1) return !1;
		let u = t.navigationMode === "linear" || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), d = !1;
		if (typeof t.keyboard == "object") {
			for (l in t.keyboard) if (parseInt(l, 10) === n) {
				let n = t.keyboard[l];
				typeof n == "function" ? n.apply(null, [e]) : typeof n == "string" && typeof this.Reveal[n] == "function" && this.Reveal[n].call(), d = !0;
			}
		}
		if (d === !1) {
			for (l in this.bindings) if (parseInt(l, 10) === n) {
				let t = this.bindings[l].callback;
				typeof t == "function" ? t.apply(null, [e]) : typeof t == "string" && typeof this.Reveal[t] == "function" && this.Reveal[t].call(), d = !0;
			}
		}
		d === !1 && (d = !0, n === 80 || n === 33 ? this.Reveal.prev({ skipFragments: e.altKey }) : n === 78 || n === 34 ? this.Reveal.next({ skipFragments: e.altKey }) : n === 72 || n === 37 ? e.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && u ? t.rtl ? this.Reveal.next({ skipFragments: e.altKey }) : this.Reveal.prev({ skipFragments: e.altKey }) : this.Reveal.left({ skipFragments: e.altKey }) : n === 76 || n === 39 ? e.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && u ? t.rtl ? this.Reveal.prev({ skipFragments: e.altKey }) : this.Reveal.next({ skipFragments: e.altKey }) : this.Reveal.right({ skipFragments: e.altKey }) : n === 75 || n === 38 ? e.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && u ? this.Reveal.prev({ skipFragments: e.altKey }) : this.Reveal.up({ skipFragments: e.altKey }) : n === 74 || n === 40 ? e.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && u ? this.Reveal.next({ skipFragments: e.altKey }) : this.Reveal.down({ skipFragments: e.altKey }) : n === 36 ? this.Reveal.slide(0) : n === 35 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : n === 32 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev({ skipFragments: e.altKey }) : this.Reveal.next({ skipFragments: e.altKey })) : [
			58,
			59,
			66,
			86,
			190
		].includes(n) || n === 191 && !e.shiftKey ? this.Reveal.togglePause() : n === 70 ? se(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : n === 65 ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(r) : n === 71 ? t.jumpToSlide && this.Reveal.toggleJumpToSlide() : n === 67 && this.Reveal.isOverlayOpen() ? this.Reveal.closeOverlay() : (n === 63 || n === 191) && e.shiftKey || n === 112 ? this.Reveal.toggleHelp() : d = !1), d ? e.preventDefault && e.preventDefault() : n === 27 || n === 79 ? (this.Reveal.closeOverlay() === !1 && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()) : n === 13 && this.Reveal.overview.isActive() && (this.Reveal.overview.deactivate(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
	}
};
function H(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? H(Object(n), !0).forEach(function(t) {
			z(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var He = class {
	constructor(e) {
		z(this, "MAX_REPLACE_STATE_FREQUENCY", 1e3), this.Reveal = e, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
	}
	bind() {
		window.addEventListener("hashchange", this.onWindowHashChange, !1);
	}
	unbind() {
		window.removeEventListener("hashchange", this.onWindowHashChange, !1);
	}
	getIndicesFromHash(e = window.location.hash, t = {}) {
		let n = e.replace(/^#\/?/, ""), r = n.split("/");
		if (!/^[0-9]*$/.test(r[0]) && n.length) {
			let e, t;
			/\/[-\d]+$/g.test(n) && (t = parseInt(n.split("/").pop(), 10), t = isNaN(t) ? void 0 : t, n = n.split("/").shift());
			try {
				let t = decodeURIComponent(n);
				e = (document.getElementById(t) || document.querySelector(`[data-id="${t}"]`)).closest(".slides section");
			} catch {}
			if (e) return U(U({}, this.Reveal.getIndices(e)), {}, { f: t });
		} else {
			let e = this.Reveal.getConfig(), n = e.hashOneBasedIndex || t.oneBasedIndex ? 1 : 0, i = parseInt(r[0], 10) - n || 0, a = parseInt(r[1], 10) - n || 0, o;
			return e.fragmentInURL && (o = parseInt(r[2], 10), isNaN(o) && (o = void 0)), {
				h: i,
				v: a,
				f: o
			};
		}
		return null;
	}
	readURL() {
		let e = this.Reveal.getIndices(), t = this.getIndicesFromHash();
		t ? (t.h !== e.h || t.v !== e.v || t.f !== void 0) && this.Reveal.slide(t.h, t.v, t.f) : this.Reveal.slide(e.h || 0, e.v || 0);
	}
	writeURL(e) {
		let t = this.Reveal.getConfig(), n = this.Reveal.getCurrentSlide();
		if (clearTimeout(this.writeURLTimeout), typeof e == "number") this.writeURLTimeout = setTimeout(this.writeURL, e);
		else if (n) {
			let e = this.getHash();
			t.history ? window.location.hash = e : t.hash && (e === "/" ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e));
		}
	}
	replaceState(e) {
		window.history.replaceState(null, null, e), this.replaceStateTimestamp = Date.now();
	}
	debouncedReplaceState(e) {
		clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e), this.MAX_REPLACE_STATE_FREQUENCY);
	}
	getHash(e) {
		let t = "/", n = e || this.Reveal.getCurrentSlide(), r = n ? n.getAttribute("id") : null;
		r &&= encodeURIComponent(r);
		let i = this.Reveal.getIndices(e);
		if (this.Reveal.getConfig().fragmentInURL || (i.f = void 0), typeof r == "string" && r.length) t = "/" + r, i.f >= 0 && (t += "/" + i.f);
		else {
			let e = +!!this.Reveal.getConfig().hashOneBasedIndex;
			(i.h > 0 || i.v > 0 || i.f >= 0) && (t += i.h + e), (i.v > 0 || i.f >= 0) && (t += "/" + (i.v + e)), i.f >= 0 && (t += "/" + i.f);
		}
		return t;
	}
	onWindowHashChange(e) {
		this.readURL();
	}
}, Ue = class {
	constructor(e) {
		this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this), this.onEnterFullscreen = this.onEnterFullscreen.bind(this);
	}
	render() {
		let e = this.Reveal.getConfig().rtl, t = this.Reveal.getRevealElement();
		this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = P(t, ".navigate-left"), this.controlsRight = P(t, ".navigate-right"), this.controlsUp = P(t, ".navigate-up"), this.controlsDown = P(t, ".navigate-down"), this.controlsPrev = P(t, ".navigate-prev"), this.controlsNext = P(t, ".navigate-next"), this.controlsFullscreen = P(t, ".enter-fullscreen"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
	}
	configure(e, t) {
		let n = e.controls === "speaker" || e.controls === "speaker-only";
		this.element.style.display = e.controls && (!n || this.Reveal.isSpeakerNotes()) ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
	}
	bind() {
		let e = ["touchstart", "click"];
		R && (e = ["touchend"]), e.forEach((e) => {
			this.controlsLeft.forEach((t) => t.addEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach((t) => t.addEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach((t) => t.addEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach((t) => t.addEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach((t) => t.addEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach((t) => t.addEventListener(e, this.onNavigateNextClicked, !1)), this.controlsFullscreen.forEach((t) => t.addEventListener(e, this.onEnterFullscreen, !1));
		});
	}
	unbind() {
		[
			"touchstart",
			"touchend",
			"click"
		].forEach((e) => {
			this.controlsLeft.forEach((t) => t.removeEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach((t) => t.removeEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach((t) => t.removeEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach((t) => t.removeEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach((t) => t.removeEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach((t) => t.removeEventListener(e, this.onNavigateNextClicked, !1)), this.controlsFullscreen.forEach((t) => t.removeEventListener(e, this.onEnterFullscreen, !1));
		});
	}
	update() {
		let e = this.Reveal.availableRoutes();
		[
			...this.controlsLeft,
			...this.controlsRight,
			...this.controlsUp,
			...this.controlsDown,
			...this.controlsPrev,
			...this.controlsNext
		].forEach((e) => {
			e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
		}), e.left && this.controlsLeft.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		}), e.right && this.controlsRight.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		}), e.up && this.controlsUp.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		}), e.down && this.controlsDown.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		}), (e.left || e.up) && this.controlsPrev.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		}), (e.right || e.down) && this.controlsNext.forEach((e) => {
			e.classList.add("enabled"), e.removeAttribute("disabled");
		});
		let t = this.Reveal.getCurrentSlide();
		if (t) {
			let e = this.Reveal.fragments.availableRoutes();
			e.prev && this.controlsPrev.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			}), e.next && this.controlsNext.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			});
			let n = this.Reveal.isVerticalSlide(t), r = n && t.parentElement && t.parentElement.querySelectorAll(":scope > section").length > 1;
			n && r ? (e.prev && this.controlsUp.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			}), e.next && this.controlsDown.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			})) : (e.prev && this.controlsLeft.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			}), e.next && this.controlsRight.forEach((e) => {
				e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
			}));
		}
		if (this.Reveal.getConfig().controlsTutorial) {
			let t = this.Reveal.getIndices();
			!this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && t.v === 0 ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && t.v === 0 ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
		}
	}
	destroy() {
		this.unbind(), this.element.remove();
	}
	onNavigateLeftClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.left();
	}
	onNavigateRightClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.next() : this.Reveal.right();
	}
	onNavigateUpClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
	}
	onNavigateDownClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
	}
	onNavigatePrevClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
	}
	onNavigateNextClicked(e) {
		e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
	}
	onEnterFullscreen(e) {
		let t = this.Reveal.getConfig(), n = this.Reveal.getViewportElement();
		se(t.embedded ? n : n.parentElement);
	}
}, We = class {
	constructor(e) {
		this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this);
	}
	render() {
		this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
	}
	configure(e, t) {
		this.element.style.display = e.progress ? "block" : "none";
	}
	bind() {
		this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
	}
	unbind() {
		this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
	}
	update() {
		if (this.Reveal.getConfig().progress && this.bar) {
			let e = this.Reveal.getProgress();
			this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")";
		}
	}
	getMaxWidth() {
		return this.Reveal.getRevealElement().offsetWidth;
	}
	onProgressClicked(e) {
		this.Reveal.onUserInput(e), e.preventDefault();
		let t = this.Reveal.getSlides(), n = t.length, r = Math.floor(e.clientX / this.getMaxWidth() * n);
		this.Reveal.getConfig().rtl && (r = n - r);
		let i = this.Reveal.getIndices(t[r]);
		this.Reveal.slide(i.h, i.v);
	}
	destroy() {
		this.element.remove();
	}
}, Ge = class {
	constructor(e) {
		this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
	}
	configure(e, t) {
		e.mouseWheel ? document.addEventListener("wheel", this.onDocumentMouseScroll, !1) : document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
	}
	showCursor() {
		this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
	}
	hideCursor() {
		this.cursorHidden === !1 && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
	}
	destroy() {
		this.showCursor(), document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1);
	}
	onDocumentCursorActive(e) {
		this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
	}
	onDocumentMouseScroll(e) {
		if (Date.now() - this.lastMouseWheelStep > 1e3) {
			this.lastMouseWheelStep = Date.now();
			let t = e.detail || -e.wheelDelta;
			t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
		}
	}
}, Ke = (e, t) => {
	let n = document.createElement("script");
	n.type = "text/javascript", n.async = !1, n.defer = !1, n.src = e, typeof t == "function" && (n.onload = (e) => {
		e.type === "load" && (n.onload = n.onerror = null, t());
	}, n.onerror = (e) => {
		n.onload = n.onerror = null, t(/* @__PURE__ */ Error("Failed loading script: " + n.src + "\n" + e));
	});
	let r = document.querySelector("head");
	r && r.insertBefore(n, r.lastChild);
}, qe = class {
	constructor(e) {
		this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
	}
	load(e, t) {
		return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise((e) => {
			let n = [], r = 0;
			if (t.forEach((e) => {
				(!e.condition || e.condition()) && (e.async ? this.asyncDependencies.push(e) : n.push(e));
			}), n.length) {
				r = n.length;
				let t = (t) => {
					t && typeof t.callback == "function" && t.callback(), --r === 0 && this.initPlugins().then(e);
				};
				n.forEach((e) => {
					typeof e.id == "string" ? (this.registerPlugin(e), t(e)) : typeof e.src == "string" ? Ke(e.src, () => t(e)) : (console.warn("Unrecognized plugin format", e), t());
				});
			} else this.initPlugins().then(e);
		});
	}
	initPlugins() {
		return new Promise((e) => {
			let t = Object.values(this.registeredPlugins), n = t.length;
			if (n === 0) this.loadAsync().then(e);
			else {
				let r, i = () => {
					--n === 0 ? this.loadAsync().then(e) : r();
				}, a = 0;
				r = () => {
					let e = t[a++];
					if (typeof e.init == "function") {
						let t = e.init(this.Reveal);
						t && typeof t.then == "function" ? t.then(i) : i();
					} else i();
				}, r();
			}
		});
	}
	loadAsync() {
		return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e) => {
			Ke(e.src, e.callback);
		}), Promise.resolve();
	}
	registerPlugin(e) {
		arguments.length === 2 && typeof arguments[0] == "string" ? (e = arguments[1], e.id = arguments[0]) : typeof e == "function" && (e = e());
		let t = e.id;
		typeof t == "string" ? this.registeredPlugins[t] === void 0 ? (this.registeredPlugins[t] = e, this.state === "loaded" && typeof e.init == "function" && e.init(this.Reveal)) : console.warn("reveal.js: \"" + t + "\" plugin has already been registered") : console.warn("Unrecognized plugin format; can't find plugin.id", e);
	}
	hasPlugin(e) {
		return !!this.registeredPlugins[e];
	}
	getPlugin(e) {
		return this.registeredPlugins[e];
	}
	getRegisteredPlugins() {
		return this.registeredPlugins;
	}
	destroy() {
		Object.values(this.registeredPlugins).forEach((e) => {
			typeof e.destroy == "function" && e.destroy();
		}), this.registeredPlugins = {}, this.asyncDependencies = [];
	}
}, Je = class {
	constructor(e) {
		this.Reveal = e, this.onSlidesClicked = this.onSlidesClicked.bind(this), this.iframeTriggerSelector = null, this.mediaTriggerSelector = "[data-preview-image], [data-preview-video]", this.stateProps = [
			"previewIframe",
			"previewImage",
			"previewVideo",
			"previewFit"
		], this.state = {};
	}
	update() {
		this.iframeTriggerSelector = this.Reveal.getConfig().previewLinks ? "a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])" : "[data-preview-link]:not([data-preview-link=false])";
		let e = this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length > 0, t = this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length > 0;
		e || t ? this.Reveal.getSlidesElement().addEventListener("click", this.onSlidesClicked, !1) : this.Reveal.getSlidesElement().removeEventListener("click", this.onSlidesClicked, !1);
	}
	createOverlay(e) {
		this.dom = document.createElement("div"), this.dom.classList.add("r-overlay"), this.dom.classList.add(e), this.viewport = document.createElement("div"), this.viewport.classList.add("r-overlay-viewport"), this.dom.appendChild(this.viewport), this.Reveal.getRevealElement().appendChild(this.dom);
	}
	previewIframe(e) {
		if (typeof e != "string") return;
		let t;
		try {
			t = new URL(e, document.baseURI);
		} catch {
			return;
		}
		if (t.protocol === "file:" && window.location.protocol !== "file:" || ![
			"http:",
			"https:",
			"file:"
		].includes(t.protocol) && t.href !== "about:blank") return;
		this.close(), this.state = { previewIframe: e }, this.createOverlay("r-overlay-preview"), this.dom.dataset.state = "loading", this.viewport.innerHTML = "<header class=\"r-overlay-header\">\n				<a class=\"r-overlay-header-button r-overlay-external\" target=\"_blank\" rel=\"noopener\"><span class=\"icon\"></span></a>\n				<button class=\"r-overlay-header-button r-overlay-close\"><span class=\"icon\"></span></button>\n			</header>\n			<div class=\"r-overlay-spinner\"></div>\n			<div class=\"r-overlay-content\">\n				<iframe></iframe>\n				<small class=\"r-overlay-content-inner\">\n					<span class=\"r-overlay-error x-frame-error\">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n				</small>\n			</div>";
		let n = this.dom.querySelector("iframe");
		n.addEventListener("load", (e) => {
			this.dom.dataset.state = "loaded";
		}, !1), n.src = t.href, this.dom.querySelector(".r-overlay-external").href = t.href, this.dom.querySelector(".r-overlay-close").addEventListener("click", (e) => {
			this.close(), e.preventDefault();
		}, !1), this.dom.querySelector(".r-overlay-external").addEventListener("click", (e) => {
			this.close();
		}, !1), this.Reveal.dispatchEvent({
			type: "previewiframe",
			data: { url: e }
		});
	}
	previewMedia(e, t, n) {
		if (t !== "image" && t !== "video") {
			console.warn("Please specify a valid media type to preview (image|video)");
			return;
		}
		this.close(), n ||= "scale-down", this.createOverlay("r-overlay-preview"), this.dom.dataset.state = "loading", this.dom.dataset.previewFit = n, this.viewport.innerHTML = "<header class=\"r-overlay-header\">\n				<button class=\"r-overlay-header-button r-overlay-close\">Esc <span class=\"icon\"></span></button>\n			</header>\n			<div class=\"r-overlay-spinner\"></div>\n			<div class=\"r-overlay-content\"></div>";
		let r = this.dom.querySelector(".r-overlay-content");
		if (t === "image") {
			this.state = {
				previewImage: e,
				previewFit: n
			};
			let t = document.createElement("img", {});
			t.src = e, r.appendChild(t), t.addEventListener("load", () => {
				this.dom.dataset.state = "loaded";
			}, !1), t.addEventListener("error", () => {
				this.dom.dataset.state = "error", r.innerHTML = "<span class=\"r-overlay-error\">Unable to load image.</span>";
			}, !1), this.dom.style.cursor = "zoom-out", this.dom.addEventListener("click", (e) => {
				this.close();
			}, !1), this.Reveal.dispatchEvent({
				type: "previewimage",
				data: { url: e }
			});
		} else if (t === "video") {
			this.state = {
				previewVideo: e,
				previewFit: n
			};
			let t = document.createElement("video");
			t.autoplay = this.dom.dataset.previewAutoplay !== "false", t.controls = this.dom.dataset.previewControls !== "false", t.loop = this.dom.dataset.previewLoop === "true", t.muted = this.dom.dataset.previewMuted === "true", t.playsInline = !0, t.src = e, r.appendChild(t), t.addEventListener("loadeddata", () => {
				this.dom.dataset.state = "loaded";
			}, !1), t.addEventListener("error", () => {
				this.dom.dataset.state = "error", r.innerHTML = "<span class=\"r-overlay-error\">Unable to load video.</span>";
			}, !1), this.Reveal.dispatchEvent({
				type: "previewvideo",
				data: { url: e }
			});
		} else throw Error("Please specify a valid media type to preview");
		this.dom.querySelector(".r-overlay-close").addEventListener("click", (e) => {
			this.close(), e.preventDefault();
		}, !1);
	}
	previewImage(e, t) {
		this.previewMedia(e, "image", t);
	}
	previewVideo(e, t) {
		this.previewMedia(e, "video", t);
	}
	toggleHelp(e) {
		typeof e == "boolean" ? e ? this.showHelp() : this.close() : this.dom ? this.close() : this.showHelp();
	}
	showHelp() {
		if (this.Reveal.getConfig().help) {
			this.close(), this.createOverlay("r-overlay-help");
			let e = "<p class=\"title\">Keyboard Shortcuts</p>", t = this.Reveal.keyboard.getShortcuts(), n = this.Reveal.keyboard.getBindings();
			e += "<table><th>KEY</th><th>ACTION</th>";
			for (let n in t) e += `<tr><td>${n}</td><td>${t[n]}</td></tr>`;
			for (let t in n) n[t].key && n[t].description && (e += `<tr><td>${n[t].key}</td><td>${n[t].description}</td></tr>`);
			e += "</table>", this.viewport.innerHTML = `
				<header class="r-overlay-header">
					<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e}</div>
				</div>
			`, this.dom.querySelector(".r-overlay-close").addEventListener("click", (e) => {
				this.close(), e.preventDefault();
			}, !1), this.Reveal.dispatchEvent({ type: "showhelp" });
		}
	}
	isOpen() {
		return !!this.dom;
	}
	close() {
		return this.dom ? (this.dom.remove(), this.dom = null, this.state = {}, this.Reveal.dispatchEvent({ type: "closeoverlay" }), !0) : !1;
	}
	getState() {
		return this.state;
	}
	setState(e) {
		this.stateProps.every((t) => this.state[t] === e[t]) || (e.previewIframe ? this.previewIframe(e.previewIframe) : e.previewImage ? this.previewImage(e.previewImage, e.previewFit) : e.previewVideo ? this.previewVideo(e.previewVideo, e.previewFit) : this.close());
	}
	onSlidesClicked(e) {
		let t = e.target, n = t.closest(this.iframeTriggerSelector), r = t.closest(this.mediaTriggerSelector);
		if (n) {
			if (e.metaKey || e.shiftKey || e.altKey) return;
			let t = n.getAttribute("data-preview-link"), r = typeof t == "string" && t.startsWith("http") ? t : n.getAttribute("href");
			r && (this.previewIframe(r), e.preventDefault());
		} else if (r) {
			if (r.hasAttribute("data-preview-image")) {
				let t = r.dataset.previewImage || r.getAttribute("src");
				t && (this.previewImage(t, r.dataset.previewFit), e.preventDefault());
			} else if (r.hasAttribute("data-preview-video")) {
				let t = r.dataset.previewVideo || r.getAttribute("src");
				if (!t) {
					let e = r.querySelector("source");
					e && (t = e.getAttribute("src"));
				}
				t && (this.previewVideo(t, r.dataset.previewFit), e.preventDefault());
			}
		}
	}
	destroy() {
		this.close();
	}
}, Ye = 40, Xe = 1.03, Ze = class {
	constructor(e) {
		this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.activePointers = /* @__PURE__ */ new Map(), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
	}
	bind() {
		let e = this.Reveal.getRevealElement();
		"onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1), e.addEventListener("pointercancel", this.onPointerCancel, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
	}
	unbind() {
		let e = this.Reveal.getRevealElement();
		e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("pointercancel", this.onPointerCancel, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
	}
	isSwipePrevented(e) {
		if (F(e, "video[controls], audio[controls]")) return !0;
		for (; e && typeof e.hasAttribute == "function";) {
			if (e.hasAttribute("data-prevent-swipe")) return !0;
			e = e.parentNode;
		}
		return !1;
	}
	isViewportZoomed() {
		if (!window.visualViewport || typeof window.visualViewport.scale != "number") return !1;
		let e = window.visualViewport.scale;
		return this.visualViewportBaseScale = this.visualViewportBaseScale === void 0 ? e : Math.min(this.visualViewportBaseScale, e), e / this.visualViewportBaseScale > Xe;
	}
	onTouchStart(e) {
		if (this.touchCaptured = !1, this.isSwipePrevented(e.target)) return !0;
		this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
	}
	onTouchMove(e) {
		if (this.isSwipePrevented(e.target)) return !0;
		let t = this.Reveal.getConfig();
		if (this.touchCaptured) R && e.preventDefault();
		else {
			this.Reveal.onUserInput(e);
			let n = e.touches[0].clientX, r = e.touches[0].clientY;
			if (e.touches.length === 1 && this.touchStartCount !== 2) {
				let i = this.Reveal.availableRoutes({ includeFragments: !0 }), a = n - this.touchStartX, o = r - this.touchStartY;
				a > Ye && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, t.navigationMode === "linear" ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, t.navigationMode === "linear" ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > Ye && i.up ? (this.touchCaptured = !0, t.navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && i.down && (this.touchCaptured = !0, t.navigationMode === "linear" ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
			}
		}
	}
	onTouchEnd(e) {
		this.touchCaptured && !this.Reveal.slideContent.isAllowedToPlayAudio() && this.Reveal.startEmbeddedContent(this.Reveal.getCurrentSlide()), this.touchCaptured = !1;
	}
	getActiveTouches() {
		return Array.from(this.activePointers.values(), (e) => ({
			clientX: e.clientX,
			clientY: e.clientY
		}));
	}
	onPointerDown(e) {
		e.pointerType === "touch" && (this.activePointers.set(e.pointerId, e), e.touches = this.getActiveTouches(), this.onTouchStart(e));
	}
	onPointerMove(e) {
		e.pointerType === "touch" && (this.activePointers.set(e.pointerId, e), e.touches = this.getActiveTouches(), this.onTouchMove(e));
	}
	onPointerUp(e) {
		e.pointerType === "touch" && (this.activePointers.delete(e.pointerId), e.touches = this.getActiveTouches(), this.onTouchEnd(e));
	}
	onPointerCancel(e) {
		e.pointerType === "touch" && (this.activePointers.delete(e.pointerId), e.touches = this.getActiveTouches(), this.onTouchEnd(e));
	}
}, Qe = "focus", $e = "blur", et = class {
	constructor(e) {
		this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
	}
	configure(e, t) {
		e.embedded ? this.blur() : (this.focus(), this.unbind());
	}
	bind() {
		this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
	}
	unbind() {
		this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
	}
	focus() {
		this.state !== Qe && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = Qe;
	}
	blur() {
		this.state !== $e && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = $e;
	}
	isFocused() {
		return this.state === Qe;
	}
	destroy() {
		this.Reveal.getRevealElement().classList.remove("focused");
	}
	onRevealPointerDown(e) {
		this.focus();
	}
	onDocumentPointerDown(e) {
		let t = I(e.target, ".reveal");
		(!t || t !== this.Reveal.getRevealElement()) && this.blur();
	}
}, tt = class {
	constructor(e) {
		this.Reveal = e;
	}
	render() {
		this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
	}
	configure(e, t) {
		e.showNotes && this.element.setAttribute("data-layout", typeof e.showNotes == "string" ? e.showNotes : "inline");
	}
	update() {
		this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() && (this.element.innerHTML = this.getSlideNotes() || "<span class=\"notes-placeholder\">No notes on this slide.</span>");
	}
	updateVisibility() {
		this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
	}
	hasNotes() {
		return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
	}
	isSpeakerNotesWindow() {
		return !!window.location.search.match(/receiver/gi);
	}
	getSlideNotes(e = this.Reveal.getCurrentSlide()) {
		if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
		let t = e.querySelectorAll("aside.notes");
		return t ? Array.from(t).map((e) => e.innerHTML).join("\n") : null;
	}
	destroy() {
		this.element.remove();
	}
}, nt = class {
	constructor(e, t) {
		this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
	}
	setPlaying(e) {
		let t = this.playing;
		this.playing = e, !t && this.playing ? this.animate() : this.render();
	}
	animate() {
		let e = this.progress;
		this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
	}
	render() {
		let e = this.playing ? this.progress : 0, t = this.diameter2 - this.thickness, n = this.diameter2, r = this.diameter2;
		this.progressOffset += (1 - this.progressOffset) * .1;
		let i = -Math.PI / 2 + Math.PI * 2 * e, a = -Math.PI / 2 + this.progressOffset * (Math.PI * 2);
		this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n, r, t + 4, 0, Math.PI * 2, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n, r, t, 0, Math.PI * 2, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n, r, t, a, i, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n - 14, r - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
	}
	on(e, t) {
		this.canvas.addEventListener(e, t, !1);
	}
	off(e, t) {
		this.canvas.removeEventListener(e, t, !1);
	}
	destroy() {
		this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
	}
}, rt = {
	width: 960,
	height: 700,
	margin: .04,
	minScale: .2,
	maxScale: 2,
	controls: !0,
	controlsTutorial: !0,
	controlsLayout: "bottom-right",
	controlsBackArrows: "faded",
	progress: !0,
	slideNumber: !1,
	showSlideNumber: "all",
	hashOneBasedIndex: !1,
	hash: !1,
	respondToHashChanges: !0,
	jumpToSlide: !0,
	history: !1,
	keyboard: !0,
	keyboardCondition: null,
	disableLayout: !1,
	overview: !0,
	center: !0,
	touch: !0,
	loop: !1,
	rtl: !1,
	navigationMode: "default",
	shuffle: !1,
	fragments: !0,
	fragmentInURL: !0,
	embedded: !1,
	help: !0,
	pause: !0,
	showNotes: !1,
	showHiddenSlides: !1,
	autoPlayMedia: null,
	preloadIframes: null,
	mouseWheel: !1,
	previewLinks: !1,
	viewDistance: 3,
	mobileViewDistance: 2,
	display: "block",
	hideInactiveCursor: !0,
	hideCursorTime: 5e3,
	sortFragmentsOnSync: !0,
	autoAnimate: !0,
	autoAnimateMatcher: null,
	autoAnimateEasing: "ease",
	autoAnimateDuration: 1,
	autoAnimateUnmatched: !0,
	autoAnimateStyles: [
		"opacity",
		"color",
		"background-color",
		"padding",
		"font-size",
		"line-height",
		"letter-spacing",
		"border-width",
		"border-color",
		"border-radius",
		"outline",
		"outline-offset"
	],
	autoSlide: 0,
	autoSlideStoppable: !0,
	autoSlideMethod: null,
	defaultTiming: null,
	postMessage: !0,
	postMessageEvents: !1,
	focusBodyOnPageVisibilityChange: !0,
	transition: "slide",
	transitionSpeed: "default",
	backgroundTransition: "fade",
	parallaxBackgroundImage: "",
	parallaxBackgroundSize: "",
	parallaxBackgroundRepeat: "",
	parallaxBackgroundPosition: "",
	parallaxBackgroundHorizontal: null,
	parallaxBackgroundVertical: null,
	view: null,
	scrollLayout: "full",
	scrollSnap: "mandatory",
	scrollProgress: "auto",
	scrollActivationWidth: 435,
	pdfMaxPagesPerSlide: Infinity,
	pdfSeparateFragments: !0,
	pdfPageHeightOffset: -1,
	dependencies: [],
	plugins: []
}, it = "6.0.2";
function at(e, t) {
	arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
	let n = {}, r = {}, i = !1, a = !1, o, s, c, l, u = {
		hasNavigatedHorizontally: !1,
		hasNavigatedVertically: !1
	}, d = [], f = 1, p = {
		layout: "",
		overview: ""
	}, m = {}, h = "idle", g = 0, _, v = 0, y = -1, b = !1, x = new be(n), S = new Te(n), C = new V(n), ee = new Ae(n), w = new Oe(n), T = new Fe(n), E = new Re(n), D = new ze(n), O = new Be(n), k = new Ve(n), A = new He(n), te = new Ue(n), ne = new We(n), j = new Ge(n), M = new qe(n), N = new Je(n), F = new et(n), se = new Ze(n), L = new tt(n);
	function de(a) {
		if (!e) throw "Unable to find presentation root (<div class=\"reveal\">).";
		if (i) throw "Reveal.js has already been initialized.";
		if (i = !0, m.wrapper = e, m.slides = e.querySelector(".slides"), !m.slides) throw "Unable to find slides container (<div class=\"slides\">).";
		return r = U(U(U(U(U({}, rt), r), t), a), le()), /print-pdf/gi.test(window.location.search) && (r.view = "print"), fe(), window.addEventListener("load", Xe, !1), M.load(r.plugins, r.dependencies).then(pe), new Promise((e) => n.on("ready", e));
	}
	function fe() {
		r.embedded === !0 ? m.viewport = I(e, ".reveal-viewport") || e : (m.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), m.viewport.classList.add("reveal-viewport");
	}
	function pe() {
		i !== !1 && (a = !0, R(), ge(), De(), Ce(), Ee(), xt(), ke(), w.update(!0), me(), A.readURL(), setTimeout(() => {
			m.slides.classList.remove("no-transition"), m.wrapper.classList.add("ready"), H({
				type: "ready",
				data: {
					indexh: o,
					indexv: s,
					currentSlide: l
				}
			});
		}, 1));
	}
	function me() {
		let e = r.view === "print", t = r.view === "scroll" || r.view === "reader";
		(e || t) && (e ? Me() : se.unbind(), m.viewport.classList.add("loading-scroll-mode"), e ? document.readyState === "complete" ? E.activate() : window.addEventListener("load", () => E.activate()) : T.activate());
	}
	function R() {
		r.showHiddenSlides || P(m.wrapper, "section[data-visibility=\"hidden\"]").forEach((e) => {
			let t = e.parentNode;
			t.childElementCount === 1 && /section/i.test(t.nodeName) ? t.remove() : e.remove();
		});
	}
	function ge() {
		m.slides.classList.add("no-transition"), he ? m.wrapper.classList.add("no-hover") : m.wrapper.classList.remove("no-hover"), w.render(), S.render(), C.render(), te.render(), ne.render(), L.render(), m.pauseOverlay = ce(m.wrapper, "div", "pause-overlay", r.controls ? "<button class=\"resume-button\">Resume presentation</button>" : null), m.statusElement = _e(), m.wrapper.setAttribute("role", "application");
	}
	function _e() {
		let e = m.wrapper.querySelector(".aria-status");
		return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), m.wrapper.appendChild(e)), e;
	}
	function ve(e) {
		m.statusElement.textContent = e;
	}
	function ye(e) {
		let t = "";
		if (e.nodeType === 3) t += e.textContent.trim();
		else if (e.nodeType === 1) {
			let n = e.getAttribute("aria-hidden"), r = window.getComputedStyle(e).display === "none";
			if (n !== "true" && !r) {
				if (e.tagName === "IMG" || e.tagName === "VIDEO") {
					let n = e.getAttribute("alt");
					n && (t += z(n));
				}
				Array.from(e.childNodes).forEach((e) => {
					t += ye(e);
				}), [
					"P",
					"DIV",
					"UL",
					"OL",
					"LI",
					"H1",
					"H2",
					"H3",
					"H4",
					"H5",
					"H6",
					"BLOCKQUOTE"
				].includes(e.tagName) && t.trim() !== "" && (t = z(t));
			}
		}
		return t = t.trim(), t === "" ? "" : t + " ";
	}
	function z(e) {
		let t = e.trim();
		return t === "" ? e : /[.!?]$/.test(t) ? t : t + ".";
	}
	function Ce() {
		setInterval(() => {
			(!T.isActive() && m.wrapper.scrollTop !== 0 || m.wrapper.scrollLeft !== 0) && (m.wrapper.scrollTop = 0, m.wrapper.scrollLeft = 0);
		}, 1e3);
	}
	function Ee() {
		document.addEventListener("fullscreenchange", rn), document.addEventListener("webkitfullscreenchange", rn);
	}
	function De() {
		r.postMessage && window.addEventListener("message", Qt, !1);
	}
	function ke(e) {
		let t = U({}, r);
		if (typeof e == "object" && re(r, e), n.isReady() === !1) return;
		let i = m.wrapper.querySelectorAll(B).length;
		m.wrapper.classList.remove(t.transition), m.wrapper.classList.add(r.transition), m.wrapper.setAttribute("data-transition-speed", r.transitionSpeed), m.wrapper.setAttribute("data-background-transition", r.backgroundTransition), m.viewport.style.setProperty("--slide-width", typeof r.width == "string" ? r.width : r.width + "px"), m.viewport.style.setProperty("--slide-height", typeof r.height == "string" ? r.height : r.height + "px"), r.shuffle && J(), ie(m.wrapper, "embedded", r.embedded), ie(m.wrapper, "rtl", r.rtl), ie(m.wrapper, "center", r.center), r.pause === !1 && ft(), ee.reset(), _ &&= (_.destroy(), null), i > 1 && r.autoSlide && r.autoSlideStoppable && (_ = new nt(m.wrapper, () => Math.min(Math.max((Date.now() - y) / g, 0), 1)), _.on("click", an), b = !1), r.navigationMode === "default" ? m.wrapper.removeAttribute("data-navigation-mode") : m.wrapper.setAttribute("data-navigation-mode", r.navigationMode), L.configure(r, t), F.configure(r, t), j.configure(r, t), te.configure(r, t), ne.configure(r, t), k.configure(r, t), D.configure(r, t), S.configure(r, t), q();
	}
	function je() {
		window.addEventListener("resize", tn, !1), r.touch && se.bind(), r.keyboard && k.bind(), r.progress && ne.bind(), r.respondToHashChanges && A.bind(), te.bind(), F.bind(), m.slides.addEventListener("click", en, !1), m.slides.addEventListener("transitionend", $t, !1), m.pauseOverlay.addEventListener("click", ft, !1), r.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", nn, !1);
	}
	function Me() {
		se.unbind(), F.unbind(), k.unbind(), te.unbind(), ne.unbind(), A.unbind(), window.removeEventListener("resize", tn, !1), m.slides.removeEventListener("click", en, !1), m.slides.removeEventListener("transitionend", $t, !1), m.pauseOverlay.removeEventListener("click", ft, !1);
	}
	function Ne() {
		i = !1, a !== !1 && (Me(), Ht(), L.destroy(), F.destroy(), N.destroy(), M.destroy(), j.destroy(), te.destroy(), ne.destroy(), w.destroy(), S.destroy(), C.destroy(), document.removeEventListener("fullscreenchange", rn), document.removeEventListener("webkitfullscreenchange", rn), document.removeEventListener("visibilitychange", nn, !1), window.removeEventListener("message", Qt, !1), window.removeEventListener("load", Xe, !1), m.pauseOverlay && m.pauseOverlay.remove(), m.statusElement && m.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), m.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), m.wrapper.removeAttribute("data-transition-speed"), m.wrapper.removeAttribute("data-background-transition"), m.viewport.classList.remove("reveal-viewport"), m.viewport.style.removeProperty("--slide-width"), m.viewport.style.removeProperty("--slide-height"), m.slides.style.removeProperty("width"), m.slides.style.removeProperty("height"), m.slides.style.removeProperty("zoom"), m.slides.style.removeProperty("left"), m.slides.style.removeProperty("top"), m.slides.style.removeProperty("bottom"), m.slides.style.removeProperty("right"), m.slides.style.removeProperty("transform"), Array.from(m.wrapper.querySelectorAll(B)).forEach((e) => {
			e.style.removeProperty("display"), e.style.removeProperty("top"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), e.removeAttribute("inert");
		}));
	}
	function Pe(t, n, r) {
		e.addEventListener(t, n, r);
	}
	function Ie(t, n, r) {
		e.removeEventListener(t, n, r);
	}
	function Le(e) {
		typeof e.layout == "string" && (p.layout = e.layout), typeof e.overview == "string" && (p.overview = e.overview), p.layout ? oe(m.slides, p.layout + " " + p.overview) : oe(m.slides, p.overview);
	}
	function H({ target: e = m.wrapper, type: t, data: n, bubbles: r = !0 }) {
		let i = document.createEvent("HTMLEvents", 1, 2);
		return i.initEvent(t, r, !0), re(i, n), e.dispatchEvent(i), e === m.wrapper && Ye(t), i;
	}
	function Ke(e) {
		H({
			type: "slidechanged",
			data: {
				indexh: o,
				indexv: s,
				previousSlide: c,
				currentSlide: l,
				origin: e
			}
		});
	}
	function Ye(e, t) {
		if (r.postMessageEvents && window.parent !== window.self) {
			let n = {
				namespace: "reveal",
				eventName: e,
				state: zt()
			};
			re(n, t), window.parent.postMessage(JSON.stringify(n), "*");
		}
	}
	function Xe() {
		if (m.wrapper && !E.isActive()) {
			let e = m.viewport.offsetWidth, t = m.viewport.offsetHeight;
			if (!r.disableLayout) {
				he && !r.embedded && document.documentElement.style.setProperty("--vh", window.innerHeight * .01 + "px");
				let n = T.isActive() ? at(e, t) : at(), i = f;
				Qe(r.width, r.height), m.slides.style.width = n.width + "px", m.slides.style.height = n.height + "px", f = Math.min(n.presentationWidth / n.width, n.presentationHeight / n.height), f = Math.max(f, r.minScale), f = Math.min(f, r.maxScale), f = Math.round(f * 100) / 100, f === 1 || T.isActive() ? (m.slides.style.zoom = "", m.slides.style.left = "", m.slides.style.top = "", m.slides.style.bottom = "", m.slides.style.right = "", Le({ layout: "" })) : (m.slides.style.zoom = "", m.slides.style.left = "50%", m.slides.style.top = "50%", m.slides.style.bottom = "auto", m.slides.style.right = "auto", Le({ layout: "translate(-50%, -50%) scale(" + f + ")" }));
				let a = Array.from(m.wrapper.querySelectorAll(B)).filter((e) => e.style.display !== "none"), o = Array(a.length);
				for (let e = 0, t = a.length; e < t; e++) {
					let t = a[e];
					r.center || t.classList.contains("center") ? t.classList.contains("stack") ? o[e] = 0 : o[e] = Math.max((n.height - t.scrollHeight) / 2, 0) + "px" : o[e] = "";
				}
				for (let e = 0, t = a.length; e < t; e++) a[e].style.top = o[e];
				i !== f && H({
					type: "resize",
					data: {
						oldScale: i,
						scale: f,
						size: n
					}
				});
			}
			$e(), m.viewport.style.setProperty("--slide-scale", f), m.viewport.style.setProperty("--viewport-width", e + "px"), m.viewport.style.setProperty("--viewport-height", t + "px"), T.layout(), ne.update(), w.updateParallax(), O.isActive() && O.update();
		}
	}
	function Qe(e, t) {
		P(m.slides, "section > .stretch, section > .r-stretch").forEach((n) => {
			let r = ue(n, t);
			if (/(img|video)/gi.test(n.nodeName)) {
				let t = n.naturalWidth || n.videoWidth, i = n.naturalHeight || n.videoHeight, a = Math.min(e / t, r / i);
				n.style.width = t * a + "px", n.style.height = i * a + "px";
			} else n.style.width = e + "px", n.style.height = r + "px";
		});
	}
	function $e() {
		if (m.wrapper && !r.disableLayout && !E.isActive() && typeof r.scrollActivationWidth == "number" && r.view !== "scroll") {
			let e = at();
			e.presentationWidth > 0 && e.presentationWidth <= r.scrollActivationWidth ? T.isActive() || (w.create(), T.activate()) : T.isActive() && T.deactivate();
		}
	}
	function at(e, t) {
		let n = r.width, i = r.height;
		r.disableLayout && (n = m.slides.offsetWidth, i = m.slides.offsetHeight);
		let a = {
			width: n,
			height: i,
			presentationWidth: e || m.wrapper.offsetWidth,
			presentationHeight: t || m.wrapper.offsetHeight
		};
		return a.presentationWidth -= a.presentationWidth * r.margin, a.presentationHeight -= a.presentationHeight * r.margin, typeof a.width == "string" && /%$/.test(a.width) && (a.width = parseInt(a.width, 10) / 100 * a.presentationWidth), typeof a.height == "string" && /%$/.test(a.height) && (a.height = parseInt(a.height, 10) / 100 * a.presentationHeight), a;
	}
	function W(e, t) {
		typeof e == "object" && typeof e.setAttribute == "function" && e.setAttribute("data-previous-indexv", t || 0);
	}
	function ot(e) {
		if (typeof e == "object" && typeof e.setAttribute == "function" && e.classList.contains("stack")) {
			let t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
			return parseInt(e.getAttribute(t) || 0, 10);
		}
		return 0;
	}
	function G(e = l) {
		return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
	}
	function st(e = l) {
		return e.classList.contains(".stack") || e.querySelector("section") !== null;
	}
	function ct() {
		return l && G(l) ? !l.nextElementSibling : !1;
	}
	function lt() {
		return o === 0 && s === 0;
	}
	function ut() {
		return l ? !(l.nextElementSibling || G(l) && l.parentNode.nextElementSibling) : !1;
	}
	function dt() {
		if (r.pause) {
			let e = m.wrapper.classList.contains("paused");
			Ht(), m.wrapper.classList.add("paused"), e === !1 && H({ type: "paused" });
		}
	}
	function ft() {
		let e = m.wrapper.classList.contains("paused");
		m.wrapper.classList.remove("paused"), Vt(), e && H({ type: "resumed" });
	}
	function pt(e) {
		typeof e == "boolean" ? e ? dt() : ft() : mt() ? ft() : dt();
	}
	function mt() {
		return m.wrapper.classList.contains("paused");
	}
	function ht(e) {
		typeof e == "boolean" ? e ? C.show() : C.hide() : C.isVisible() ? C.hide() : C.show();
	}
	function gt(e) {
		typeof e == "boolean" ? e ? Wt() : Ut() : b ? Wt() : Ut();
	}
	function _t() {
		return !!(g && !b);
	}
	function K(t, n, i, a) {
		if (H({
			type: "beforeslidechange",
			data: {
				indexh: t === void 0 ? o : t,
				indexv: n === void 0 ? s : n,
				origin: a
			}
		}).defaultPrevented) return;
		c = l;
		let u = m.wrapper.querySelectorAll(xe);
		if (T.isActive()) {
			let e = T.getSlideByIndices(t, n);
			e && T.scrollToSlide(e);
			return;
		}
		if (u.length === 0) return;
		n === void 0 && !O.isActive() && (n = ot(u[t])), c && c.parentNode && c.parentNode.classList.contains("stack") && W(c.parentNode, s);
		let f = d.concat();
		d.length = 0;
		let p = o || 0, g = s || 0;
		o = St(xe, t === void 0 ? o : t), s = St(Se, n === void 0 ? s : n);
		let _ = o !== p || s !== g;
		_ || (c = null);
		let v = u[o], y = v.querySelectorAll("section");
		e.classList.toggle("is-vertical-slide", y.length > 1), l = y[s] || v;
		let b = !1;
		_ && c && l && !O.isActive() && (h = "running", b = vt(c, l, p, g), b && m.slides.classList.add("disable-slide-transitions")), wt(), Xe(), O.isActive() && O.update(), i !== void 0 && D.goto(i), c && c !== l && (c.classList.remove("present"), c.setAttribute("aria-hidden", "true"), lt() && setTimeout(() => {
			Mt().forEach((e) => {
				W(e, 0);
			});
		}, 0));
		stateLoop: for (let e = 0, t = d.length; e < t; e++) {
			for (let t = 0; t < f.length; t++) if (f[t] === d[e]) {
				f.splice(t, 1);
				continue stateLoop;
			}
			m.viewport.classList.add(d[e]), H({ type: d[e] });
		}
		for (; f.length;) m.viewport.classList.remove(f.pop());
		_ && (x.afterSlideChanged(), Ke(a)), (_ || !c) && (x.stopEmbeddedContent(c), x.startEmbeddedContent(l)), requestAnimationFrame(() => {
			ve(ye(l));
		}), ne.update(), te.update(), L.update(), w.update(), w.updateParallax(), S.update(), D.update(), A.writeURL(), Vt(), b && (setTimeout(() => {
			m.slides.classList.remove("disable-slide-transitions");
		}, 0), r.autoAnimate && ee.run(c, l));
	}
	function vt(e, t, n, r) {
		return e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(o > n || s > r ? t : e).hasAttribute("data-auto-animate-restart");
	}
	function yt(e, t, n) {
		let i = o || 0;
		o = t, s = n;
		let a = l !== e;
		c = l, l = e, l && c && r.autoAnimate && vt(c, l, i, s) && ee.run(c, l), a && (x.afterSlideChanged(), c && (x.stopEmbeddedContent(c), x.stopEmbeddedContent(c.slideBackgroundElement)), x.startEmbeddedContent(l), x.startEmbeddedContent(l.slideBackgroundElement)), requestAnimationFrame(() => {
			ve(ye(l));
		}), Ke();
	}
	function q() {
		Me(), je(), Xe(), g = r.autoSlide, Vt(), w.create(), A.writeURL(), r.sortFragmentsOnSync === !0 && D.sortAll(), o !== void 0 && (o = St(xe, o), s = St(Se, s)), te.update(), ne.update(), wt(), L.update(), L.updateVisibility(), N.update(), w.update(!0), S.update(), x.formatEmbeddedContent(), r.autoPlayMedia === !1 ? x.stopEmbeddedContent(l, { unloadIframes: !1 }) : x.startEmbeddedContent(l), O.isActive() && O.layout(), H({ type: "sync" });
	}
	function bt(e = l) {
		w.sync(e), D.sync(e), x.load(e), w.update(), L.update(), H({
			type: "slidesync",
			data: { slide: e }
		});
	}
	function xt() {
		At().forEach((e) => {
			P(e, "section").forEach((e, t) => {
				t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
			});
		});
	}
	function J(e = At()) {
		e.forEach((t, n) => {
			let r = e[Math.floor(Math.random() * e.length)];
			r.parentNode === t.parentNode && t.parentNode.insertBefore(t, r);
			let i = t.querySelectorAll("section");
			i.length && J(i);
		});
	}
	function St(e, t) {
		let n = P(m.wrapper, e), i = n.length, a = T.isActive() || E.isActive(), o = !1, s = !1;
		if (i) {
			r.loop && (t >= i && (o = !0), t %= i, t < 0 && (t = i + t, s = !0)), t = Math.max(Math.min(t, i - 1), 0);
			for (let e = 0; e < i; e++) {
				let i = n[e], c = r.rtl && !G(i);
				if (i.classList.remove("past"), i.classList.remove("present"), i.classList.remove("future"), i.setAttribute("hidden", ""), i.setAttribute("aria-hidden", "true"), i.querySelector("section") && i.classList.add("stack"), a) {
					i.classList.add("present");
					continue;
				}
				e < t ? (i.classList.add(c ? "future" : "past"), r.fragments && Y(i)) : e > t ? (i.classList.add(c ? "past" : "future"), r.fragments && Ct(i)) : e === t && r.fragments && (o ? Ct(i) : s && Y(i));
			}
			let e = n[t], c = e.classList.contains("present");
			e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), c || H({
				target: e,
				type: "visible",
				bubbles: !1
			});
			let l = e.getAttribute("data-state");
			l && (d = d.concat(l.split(" ")));
		} else t = 0;
		return t;
	}
	function Y(e) {
		P(e, ".fragment").forEach((e) => {
			e.classList.add("visible"), e.classList.remove("current-fragment");
		});
	}
	function Ct(e) {
		P(e, ".fragment.visible").forEach((e) => {
			e.classList.remove("visible", "current-fragment");
		});
	}
	function wt() {
		let e = At(), t = e.length, n, i;
		if (t && o !== void 0) {
			let a = O.isActive(), c = a ? 10 : r.viewDistance;
			he && (c = a ? 6 : r.mobileViewDistance), E.isActive() && (c = Number.MAX_VALUE);
			for (let l = 0; l < t; l++) {
				let u = e[l], d = P(u, "section"), f = d.length;
				if (n = Math.abs((o || 0) - l) || 0, r.loop && (n = Math.abs(((o || 0) - l) % (t - c)) || 0), n < c ? x.load(u) : x.unload(u), f) {
					let e = a ? 0 : ot(u);
					for (let t = 0; t < f; t++) {
						let r = d[t];
						i = Math.abs(l === (o || 0) ? (s || 0) - t : t - e), n + i < c ? x.load(r) : x.unload(r);
					}
				}
			}
			Pt() ? m.wrapper.classList.add("has-vertical-slides") : m.wrapper.classList.remove("has-vertical-slides"), Nt() ? m.wrapper.classList.add("has-horizontal-slides") : m.wrapper.classList.remove("has-horizontal-slides");
		}
		let a = O.isActive() || T.isActive() || E.isActive();
		P(m.wrapper, B).forEach((e) => {
			e.toggleAttribute("inert", !a && e !== l && !e.contains(l));
		});
	}
	function Tt({ includeFragments: e = !1 } = {}) {
		let t = m.wrapper.querySelectorAll(xe), n = m.wrapper.querySelectorAll(Se), i = {
			left: o > 0,
			right: o < t.length - 1,
			up: s > 0,
			down: s < n.length - 1
		};
		if (r.loop && (t.length > 1 && (i.left = !0, i.right = !0), n.length > 1 && (i.up = !0, i.down = !0)), t.length > 1 && r.navigationMode === "linear" && (i.right = i.right || i.down, i.left = i.left || i.up), e === !0) {
			let e = D.availableRoutes();
			i.left = i.left || e.prev, i.up = i.up || e.prev, i.down = i.down || e.next, i.right = i.right || e.next;
		}
		if (r.rtl) {
			let e = i.left;
			i.left = i.right, i.right = e;
		}
		return i;
	}
	function Et(e = l) {
		let t = At(), n = 0;
		mainLoop: for (let r = 0; r < t.length; r++) {
			let i = t[r], a = i.querySelectorAll("section");
			for (let t = 0; t < a.length; t++) {
				if (a[t] === e) break mainLoop;
				a[t].dataset.visibility !== "uncounted" && n++;
			}
			if (i === e) break;
			i.classList.contains("stack") === !1 && i.dataset.visibility !== "uncounted" && n++;
		}
		return n;
	}
	function Dt() {
		let e = It(), t = Et();
		if (l) {
			let e = l.querySelectorAll(".fragment");
			if (e.length > 0) {
				let n = l.querySelectorAll(".fragment.visible");
				t += n.length / e.length * .9;
			}
		}
		return Math.min(t / (e - 1), 1);
	}
	function Ot(e) {
		let t = o, n = s, r;
		if (e) {
			if (T.isActive()) t = parseInt(e.getAttribute("data-index-h"), 10), e.getAttribute("data-index-v") && (n = parseInt(e.getAttribute("data-index-v"), 10));
			else {
				let r = G(e), i = r ? e.parentNode : e, a = At();
				t = Math.max(a.indexOf(i), 0), n = void 0, r && (n = Math.max(P(e.parentNode, "section").indexOf(e), 0));
			}
		}
		if (!e && l && l.querySelectorAll(".fragment").length > 0) {
			let e = l.querySelector(".current-fragment");
			r = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : l.querySelectorAll(".fragment.visible").length - 1;
		}
		return {
			h: t,
			v: n,
			f: r
		};
	}
	function kt() {
		return P(m.wrapper, B + ":not(.stack):not([data-visibility=\"uncounted\"])");
	}
	function At() {
		return P(m.wrapper, xe);
	}
	function jt() {
		return P(m.wrapper, ".slides>section>section");
	}
	function Mt() {
		return P(m.wrapper, xe + ".stack");
	}
	function Nt() {
		return At().length > 1;
	}
	function Pt() {
		return jt().length > 1;
	}
	function Ft() {
		return kt().map((e) => {
			let t = {};
			for (let n = 0; n < e.attributes.length; n++) {
				let r = e.attributes[n];
				t[r.name] = r.value;
			}
			return t;
		});
	}
	function It() {
		return kt().length;
	}
	function Lt(e, t) {
		let n = At()[e], r = n && n.querySelectorAll("section");
		return r && r.length && typeof t == "number" ? r ? r[t] : void 0 : n;
	}
	function Rt(e, t) {
		let n = typeof e == "number" ? Lt(e, t) : e;
		if (n) return n.slideBackgroundElement;
	}
	function zt() {
		let e = Ot();
		return U({
			indexh: e.h,
			indexv: e.v,
			indexf: e.f,
			paused: mt(),
			overview: O.isActive()
		}, N.getState());
	}
	function Bt(e) {
		if (typeof e == "object") {
			K(ae(e.indexh), ae(e.indexv), ae(e.indexf));
			let t = ae(e.paused), n = ae(e.overview);
			typeof t == "boolean" && t !== mt() && pt(t), typeof n == "boolean" && n !== O.isActive() && O.toggle(n), N.setState(e);
		}
	}
	function Vt() {
		if (Ht(), l && r.autoSlide !== !1) {
			let e = l.querySelector(".current-fragment[data-autoslide]"), t = e ? e.getAttribute("data-autoslide") : null, n = l.parentNode ? l.parentNode.getAttribute("data-autoslide") : null, i = l.getAttribute("data-autoslide");
			t ? g = parseInt(t, 10) : i ? g = parseInt(i, 10) : n ? g = parseInt(n, 10) : (g = r.autoSlide, l.querySelectorAll(".fragment").length === 0 && P(l, "video, audio").forEach((e) => {
				e.hasAttribute("data-autoplay") && g && e.duration * 1e3 / e.playbackRate > g && (g = e.duration * 1e3 / e.playbackRate + 1e3);
			})), g && !b && !mt() && !O.isActive() && (!ut() || D.availableRoutes().next || r.loop === !0) && (v = setTimeout(() => {
				typeof r.autoSlideMethod == "function" ? r.autoSlideMethod() : Xt(), Vt();
			}, g), y = Date.now()), _ && _.setPlaying(v !== -1);
		}
	}
	function Ht() {
		clearTimeout(v), v = -1;
	}
	function Ut() {
		g && !b && (b = !0, H({ type: "autoslidepaused" }), clearTimeout(v), _ && _.setPlaying(!1));
	}
	function Wt() {
		g && b && (b = !1, H({ type: "autoslideresumed" }), Vt());
	}
	function Gt({ skipFragments: e = !1 } = {}) {
		if (u.hasNavigatedHorizontally = !0, T.isActive()) return T.prev();
		r.rtl ? (O.isActive() || e || D.next() === !1) && Tt().left && K(o + 1, r.navigationMode === "grid" ? s : void 0) : (O.isActive() || e || D.prev() === !1) && Tt().left && K(o - 1, r.navigationMode === "grid" ? s : void 0);
	}
	function Kt({ skipFragments: e = !1 } = {}) {
		if (u.hasNavigatedHorizontally = !0, T.isActive()) return T.next();
		r.rtl ? (O.isActive() || e || D.prev() === !1) && Tt().right && K(o - 1, r.navigationMode === "grid" ? s : void 0) : (O.isActive() || e || D.next() === !1) && Tt().right && K(o + 1, r.navigationMode === "grid" ? s : void 0);
	}
	function qt({ skipFragments: e = !1 } = {}) {
		if (T.isActive()) return T.prev();
		(O.isActive() || e || D.prev() === !1) && Tt().up && K(o, s - 1);
	}
	function Jt({ skipFragments: e = !1 } = {}) {
		if (u.hasNavigatedVertically = !0, T.isActive()) return T.next();
		(O.isActive() || e || D.next() === !1) && Tt().down && K(o, s + 1);
	}
	function Yt({ skipFragments: e = !1 } = {}) {
		if (T.isActive()) return T.prev();
		if (e || D.prev() === !1) {
			if (Tt().up) qt({ skipFragments: e });
			else {
				let t;
				if (t = r.rtl ? P(m.wrapper, xe + ".future").pop() : P(m.wrapper, xe + ".past").pop(), t && t.classList.contains("stack")) {
					let e = t.querySelectorAll("section").length - 1 || void 0;
					K(o - 1, e);
				} else r.rtl ? Kt({ skipFragments: e }) : Gt({ skipFragments: e });
			}
		}
	}
	function Xt({ skipFragments: e = !1 } = {}) {
		if (u.hasNavigatedHorizontally = !0, u.hasNavigatedVertically = !0, T.isActive()) return T.next();
		if (e || D.next() === !1) {
			let t = Tt();
			t.down && t.right && r.loop && ct() && (t.down = !1), t.down ? Jt({ skipFragments: e }) : r.rtl ? Gt({ skipFragments: e }) : Kt({ skipFragments: e });
		}
	}
	function Zt(e) {
		r.autoSlideStoppable && Ut();
	}
	function Qt(e) {
		let t = e.data;
		if (typeof t == "string" && t.charAt(0) === "{" && t.charAt(t.length - 1) === "}" && (t = JSON.parse(t), t.method && typeof n[t.method] == "function")) {
			if (we.test(t.method) === !1) {
				let e = n[t.method].apply(n, t.args);
				Ye("callback", {
					method: t.method,
					result: e
				});
			} else console.warn("reveal.js: \"" + t.method + "\" is is blacklisted from the postMessage API");
		}
	}
	function $t(e) {
		h === "running" && /section/gi.test(e.target.nodeName) && (h = "idle", H({
			type: "slidetransitionend",
			data: {
				indexh: o,
				indexv: s,
				previousSlide: c,
				currentSlide: l
			}
		}));
	}
	function en(e) {
		let t = I(e.target, "a[href^=\"#\"]");
		if (t) {
			let r = t.getAttribute("href"), i = A.getIndicesFromHash(r);
			i && (n.slide(i.h, i.v, i.f), e.preventDefault());
		}
	}
	function tn(e) {
		Xe();
	}
	function nn(e) {
		document.hidden === !1 && document.activeElement !== document.body && (typeof document.activeElement.blur == "function" && document.activeElement.blur(), document.body.focus());
	}
	function rn(e) {
		(document.fullscreenElement || document.webkitFullscreenElement) === m.wrapper && (e.stopImmediatePropagation(), setTimeout(() => {
			n.layout(), n.focus.focus();
		}, 1));
	}
	function an(e) {
		ut() && r.loop === !1 ? (K(0, 0), Wt()) : b ? Wt() : Ut();
	}
	let on = {
		VERSION: it,
		initialize: de,
		configure: ke,
		destroy: Ne,
		sync: q,
		syncSlide: bt,
		syncFragments: D.sync.bind(D),
		slide: K,
		left: Gt,
		right: Kt,
		up: qt,
		down: Jt,
		prev: Yt,
		next: Xt,
		navigateLeft: Gt,
		navigateRight: Kt,
		navigateUp: qt,
		navigateDown: Jt,
		navigatePrev: Yt,
		navigateNext: Xt,
		navigateFragment: D.goto.bind(D),
		prevFragment: D.prev.bind(D),
		nextFragment: D.next.bind(D),
		on: Pe,
		off: Ie,
		addEventListener: Pe,
		removeEventListener: Ie,
		layout: Xe,
		shuffle: J,
		availableRoutes: Tt,
		availableFragments: D.availableRoutes.bind(D),
		toggleHelp: N.toggleHelp.bind(N),
		toggleOverview: O.toggle.bind(O),
		toggleScrollView: T.toggle.bind(T),
		togglePause: pt,
		toggleAutoSlide: gt,
		toggleJumpToSlide: ht,
		isFirstSlide: lt,
		isLastSlide: ut,
		isLastVerticalSlide: ct,
		isVerticalSlide: G,
		isVerticalStack: st,
		isPaused: mt,
		isAutoSliding: _t,
		isSpeakerNotes: L.isSpeakerNotesWindow.bind(L),
		isOverview: O.isActive.bind(O),
		isFocused: F.isFocused.bind(F),
		isOverlayOpen: N.isOpen.bind(N),
		isScrollView: T.isActive.bind(T),
		isPrintView: E.isActive.bind(E),
		isReady: () => a,
		loadSlide: x.load.bind(x),
		unloadSlide: x.unload.bind(x),
		startEmbeddedContent: () => x.startEmbeddedContent(l),
		stopEmbeddedContent: () => x.stopEmbeddedContent(l, { unloadIframes: !1 }),
		previewIframe: N.previewIframe.bind(N),
		previewImage: N.previewImage.bind(N),
		previewVideo: N.previewVideo.bind(N),
		showPreview: N.previewIframe.bind(N),
		hidePreview: N.close.bind(N),
		addEventListeners: je,
		removeEventListeners: Me,
		dispatchEvent: H,
		getState: zt,
		setState: Bt,
		getProgress: Dt,
		getIndices: Ot,
		getSlidesAttributes: Ft,
		getSlidePastCount: Et,
		getTotalSlides: It,
		getSlide: Lt,
		getPreviousSlide: () => c,
		getCurrentSlide: () => l,
		getSlideBackground: Rt,
		getSlideNotes: L.getSlideNotes.bind(L),
		getSlides: kt,
		getHorizontalSlides: At,
		getVerticalSlides: jt,
		hasHorizontalSlides: Nt,
		hasVerticalSlides: Pt,
		hasNavigatedHorizontally: () => u.hasNavigatedHorizontally,
		hasNavigatedVertically: () => u.hasNavigatedVertically,
		shouldAutoAnimateBetween: vt,
		addKeyBinding: k.addKeyBinding.bind(k),
		removeKeyBinding: k.removeKeyBinding.bind(k),
		triggerKey: k.triggerKey.bind(k),
		registerKeyboardShortcut: k.registerKeyboardShortcut.bind(k),
		getComputedSlideSize: at,
		setCurrentScrollPage: yt,
		removeHiddenSlides: R,
		getScale: () => f,
		getConfig: () => r,
		getQueryHash: le,
		getSlidePath: A.getHash.bind(A),
		getRevealElement: () => e,
		getSlidesElement: () => m.slides,
		getViewportElement: () => m.viewport,
		getBackgroundsElement: () => w.element,
		registerPlugin: M.registerPlugin.bind(M),
		hasPlugin: M.hasPlugin.bind(M),
		getPlugin: M.getPlugin.bind(M),
		getPlugins: M.getRegisteredPlugins.bind(M)
	};
	return re(n, U(U({}, on), {}, {
		announceStatus: ve,
		getStatusText: ye,
		focus: F,
		scroll: T,
		progress: ne,
		controls: te,
		location: A,
		overview: O,
		keyboard: k,
		fragments: D,
		backgrounds: w,
		slideContent: x,
		slideNumber: S,
		onUserInput: Zt,
		closeOverlay: N.close.bind(N),
		updateSlidesVisibility: wt,
		layoutSlideContents: Qe,
		transformSlides: Le,
		cueAutoSlide: Vt,
		cancelAutoSlide: Ht
	})), on;
}
var W = at, ot = [];
W.initialize = (e) => {
	let t = document.querySelector(".reveal");
	if (!(t instanceof HTMLElement)) throw Error("Unable to find presentation root (<div class=\"reveal\">).");
	return Object.assign(W, new at(t, e)), ot.map((e) => e(W)), W.initialize();
}, [
	"configure",
	"on",
	"off",
	"addEventListener",
	"removeEventListener",
	"registerPlugin"
].forEach((e) => {
	W[e] = (...t) => {
		ot.push((n) => n[e].call(null, ...t));
	};
}), W.isReady = () => !1, W.VERSION = it;
//#endregion
//#region ../node_modules/.pnpm/@revealjs+react@0.2.2_react-dom@19.3.0_react@19.3.0__react@19.3.0_reveal.js@6.0.2/node_modules/@revealjs/react/dist/index.mjs
var G = T(), st = (0, M.createContext)(null), ct = [];
function lt(e, t) {
	if (e === t) return !1;
	if (!e || !t) return e !== t;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !0;
	for (let r of n) if (!(r in t) || e[r] !== t[r]) return !0;
	return !1;
}
function ut(e, t) {
	e && (typeof e == "function" ? e(t) : e.current = t);
}
function dt(e) {
	return e.tagName === "SECTION";
}
function ft(e, t, n) {
	return Array.from(e.children).filter(dt).map((e) => {
		let r = t.get(e);
		r === void 0 && (r = n.current++, t.set(e, r));
		let i = ft(e, t, n);
		return i.length > 0 ? [r, i] : r;
	});
}
function pt(e, t, n) {
	return e ? JSON.stringify(ft(e, t, n)) : "[]";
}
function mt({ config: e, plugins: t = ct, onReady: n, onSync: r, onSlideSync: i, onSlideChange: a, onSlideTransitionEnd: o, onFragmentShown: s, onFragmentHidden: c, onOverviewShown: l, onOverviewHidden: u, onPaused: d, onResumed: f, deckRef: p, className: m, style: h, children: g }) {
	let _ = (0, M.useRef)(null), v = (0, M.useRef)(null), y = (0, M.useRef)(null), [b, x] = (0, M.useState)(null), S = (0, M.useRef)(t), C = (0, M.useRef)(!1), ee = (0, M.useRef)(e), w = (0, M.useRef)(null), T = (0, M.useRef)(/* @__PURE__ */ new WeakMap()), E = (0, M.useRef)(1), D = (0, M.useRef)(!1), O = (0, M.useRef)(0);
	return (0, M.useEffect)(() => {
		if (D.current = !0, O.current += 1, y.current) y.current.isReady() && x(y.current);
		else {
			let t = new W(_.current, {
				...e,
				plugins: S.current
			});
			ee.current = e, y.current = t, t.initialize().then(() => {
				D.current && y.current === t && (x(t), n?.(t));
			});
		}
		return () => {
			D.current = !1;
			let e = y.current;
			if (!e) return;
			let t = ++O.current;
			Promise.resolve().then(() => {
				if (!(D.current || O.current !== t) && y.current === e) {
					try {
						e.destroy();
					} catch {}
					y.current === e && (y.current = null);
				}
			});
		};
	}, []), (0, M.useEffect)(() => (ut(p, b), () => ut(p, null)), [p, b]), (0, M.useEffect)(() => {
		if (!b) return;
		let e = [
			["sync", r],
			["slidesync", i],
			["slidechanged", a],
			["slidetransitionend", o],
			["fragmentshown", s],
			["fragmenthidden", c],
			["overviewshown", l],
			["overviewhidden", u],
			["paused", d],
			["resumed", f]
		].filter((e) => e[1] != null);
		for (let [t, n] of e) b.on(t, n);
		return () => {
			for (let [t, n] of e) b.off(t, n);
		};
	}, [
		b,
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f
	]), (0, M.useLayoutEffect)(() => {
		b && y.current?.isReady() && lt(ee.current, e) && (C.current = !0, y.current.configure(e ?? {}), ee.current = e);
	}, [b, e]), (0, M.useLayoutEffect)(() => {
		let e = C.current;
		C.current = !1;
		let t = pt(v.current, T.current, E);
		if (e) {
			w.current = t;
			return;
		}
		y.current?.isReady() && w.current !== t && (y.current.sync(), w.current = t);
	}), /* @__PURE__ */ (0, G.jsx)(st.Provider, {
		value: b,
		children: /* @__PURE__ */ (0, G.jsx)("div", {
			className: m ? `reveal ${m}` : "reveal",
			style: h,
			ref: _,
			children: /* @__PURE__ */ (0, G.jsx)("div", {
				className: "slides",
				ref: v,
				children: g
			})
		})
	});
}
var ht = {
	background: "data-background",
	backgroundImage: "data-background-image",
	backgroundVideo: "data-background-video",
	backgroundVideoLoop: "data-background-video-loop",
	backgroundVideoMuted: "data-background-video-muted",
	backgroundIframe: "data-background-iframe",
	backgroundColor: "data-background-color",
	backgroundGradient: "data-background-gradient",
	backgroundSize: "data-background-size",
	backgroundPosition: "data-background-position",
	backgroundRepeat: "data-background-repeat",
	backgroundOpacity: "data-background-opacity",
	backgroundTransition: "data-background-transition",
	visibility: "data-visibility",
	autoAnimate: "data-auto-animate",
	autoAnimateId: "data-auto-animate-id",
	autoAnimateRestart: "data-auto-animate-restart",
	autoAnimateUnmatched: "data-auto-animate-unmatched",
	autoAnimateEasing: "data-auto-animate-easing",
	autoAnimateDuration: "data-auto-animate-duration",
	autoAnimateDelay: "data-auto-animate-delay",
	transition: "data-transition",
	transitionSpeed: "data-transition-speed",
	autoSlide: "data-autoslide",
	notes: "data-notes",
	backgroundInteractive: "data-background-interactive",
	preload: "data-preload"
};
function gt(e) {
	return JSON.stringify(Object.entries(e).filter(([e]) => e.startsWith("data-")).sort(([e], [t]) => e.localeCompare(t)));
}
function _t(e, t) {
	let n = { ...e }, r = n;
	for (let [e, n] of Object.entries(ht)) {
		if (r[n] !== void 0) continue;
		let i = t[e];
		if (i !== void 0) {
			if (i === !1) {
				e === "autoAnimateUnmatched" && (r[n] = "false");
				continue;
			}
			r[n] = typeof i == "boolean" ? "" : i;
		}
	}
	return n;
}
function K({ children: e, background: t, backgroundImage: n, backgroundVideo: r, backgroundVideoLoop: i, backgroundVideoMuted: a, backgroundIframe: o, backgroundColor: s, backgroundGradient: c, backgroundSize: l, backgroundPosition: u, backgroundRepeat: d, backgroundOpacity: f, backgroundTransition: p, visibility: m, autoAnimate: h, autoAnimateId: g, autoAnimateRestart: _, autoAnimateUnmatched: v, autoAnimateEasing: y, autoAnimateDuration: b, autoAnimateDelay: x, transition: S, transitionSpeed: C, autoSlide: ee, notes: w, backgroundInteractive: T, preload: E, ...D }) {
	let O = (0, M.useContext)(st), k = (0, M.useRef)(null), A = (0, M.useRef)(null), te = (0, M.useRef)(null), ne = _t(D, {
		background: t,
		backgroundImage: n,
		backgroundVideo: r,
		backgroundVideoLoop: i,
		backgroundVideoMuted: a,
		backgroundIframe: o,
		backgroundColor: s,
		backgroundGradient: c,
		backgroundSize: l,
		backgroundPosition: u,
		backgroundRepeat: d,
		backgroundOpacity: f,
		backgroundTransition: p,
		visibility: m,
		autoAnimate: h,
		autoAnimateId: g,
		autoAnimateRestart: _,
		autoAnimateUnmatched: v,
		autoAnimateEasing: y,
		autoAnimateDuration: b,
		autoAnimateDelay: x,
		transition: S,
		transitionSpeed: C,
		autoSlide: ee,
		notes: w,
		backgroundInteractive: T,
		preload: E
	}), j = gt(ne);
	return (0, M.useLayoutEffect)(() => {
		let e = k.current;
		if (!O || !e || typeof O.syncSlide != "function") return;
		if (A.current !== O) {
			A.current = O, te.current = j;
			return;
		}
		if (j === "[]") return;
		let t = A.current === O, n = te.current === j;
		t && n || (O.syncSlide(e), A.current = O, te.current = j);
	}, [O, j]), /* @__PURE__ */ (0, G.jsx)("section", {
		ref: k,
		...ne,
		children: e
	});
}
function vt({ className: e, style: t, children: n }) {
	return /* @__PURE__ */ (0, G.jsx)("section", {
		className: e,
		style: t,
		children: n
	});
}
function yt() {
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
var q = yt();
function bt(e) {
	q = e;
}
var xt = { exec: () => null };
function J(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(Y.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var St = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), Y = {
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
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
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
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
	blockquoteBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}>`)
}, Ct = /^(?:[ \t]*(?:\n|$))+/, wt = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Tt = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Et = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Dt = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ot = / {0,3}(?:[*+-]|\d{1,9}[.)])/, kt = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, At = J(kt).replace(/bull/g, Ot).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), jt = J(kt).replace(/bull/g, Ot).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Mt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Nt = /^[^\n]+/, Pt = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ft = J(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Pt).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), It = J(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ot).getRegex(), Lt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Rt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, zt = J("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Rt).replace("tag", Lt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Bt = J(Mt).replace("hr", Et).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex(), Vt = {
	blockquote: J(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Bt).getRegex(),
	code: wt,
	def: Ft,
	fences: Tt,
	heading: Dt,
	hr: Et,
	html: zt,
	lheading: At,
	list: It,
	newline: Ct,
	paragraph: Bt,
	table: xt,
	text: Nt
}, Ht = J("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Et).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex(), Ut = {
	...Vt,
	lheading: jt,
	table: Ht,
	paragraph: J(Mt).replace("hr", Et).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ht).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lt).getRegex()
}, Wt = {
	...Vt,
	html: J("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Rt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: xt,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: J(Mt).replace("hr", Et).replace("heading", " *#{1,6} *[^\n]").replace("lheading", At).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Gt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Kt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, qt = /^( {2,}|\\)\n(?!\s*$)/, Jt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Yt = /[\p{P}\p{S}]/u, Xt = /[\s\p{P}\p{S}]/u, Zt = /[^\s\p{P}\p{S}]/u, Qt = J(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Xt).getRegex(), $t = /(?!~)[\p{P}\p{S}]/u, en = /(?!~)[\s\p{P}\p{S}]/u, tn = /(?:[^\s\p{P}\p{S}]|~)/u, nn = J(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", St ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), rn = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, an = J(rn, "u").replace(/punct/g, Yt).getRegex(), on = J(rn, "u").replace(/punct/g, $t).getRegex(), sn = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", cn = J(sn, "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Xt).replace(/punct/g, Yt).getRegex(), ln = J(sn, "gu").replace(/notPunctSpace/g, tn).replace(/punctSpace/g, en).replace(/punct/g, $t).getRegex(), un = J("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Xt).replace(/punct/g, Yt).getRegex(), dn = J(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Yt).getRegex(), fn = J("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Zt).replace(/punctSpace/g, Xt).replace(/punct/g, Yt).getRegex(), pn = J(/\\(punct)/, "gu").replace(/punct/g, Yt).getRegex(), mn = J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), hn = J(Rt).replace("(?:-->|$)", "-->").getRegex(), gn = J("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", hn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _n = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, vn = J(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", _n).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), yn = J(/^!?\[(label)\]\[(ref)\]/).replace("label", _n).replace("ref", Pt).getRegex(), bn = J(/^!?\[(ref)\](?:\[\])?/).replace("ref", Pt).getRegex(), xn = J("reflink|nolink(?!\\()", "g").replace("reflink", yn).replace("nolink", bn).getRegex(), Sn = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Cn = {
	_backpedal: xt,
	anyPunctuation: pn,
	autolink: mn,
	blockSkip: nn,
	br: qt,
	code: Kt,
	del: xt,
	delLDelim: xt,
	delRDelim: xt,
	emStrongLDelim: an,
	emStrongRDelimAst: cn,
	emStrongRDelimUnd: un,
	escape: Gt,
	link: vn,
	nolink: bn,
	punctuation: Qt,
	reflink: yn,
	reflinkSearch: xn,
	tag: gn,
	text: Jt,
	url: xt
}, wn = {
	...Cn,
	link: J(/^!?\[(label)\]\((.*?)\)/).replace("label", _n).getRegex(),
	reflink: J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _n).getRegex()
}, Tn = {
	...Cn,
	emStrongRDelimAst: ln,
	emStrongLDelim: on,
	delLDelim: dn,
	delRDelim: fn,
	url: J(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Sn).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: J(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Sn).getRegex()
}, En = {
	...Tn,
	br: J(qt).replace("{2,}", "*").getRegex(),
	text: J(Tn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Dn = {
	normal: Vt,
	gfm: Ut,
	pedantic: Wt
}, On = {
	normal: Cn,
	gfm: Tn,
	breaks: En,
	pedantic: wn
}, kn = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, An = (e) => kn[e];
function jn(e, t) {
	if (t) {
		if (Y.escapeTest.test(e)) return e.replace(Y.escapeReplace, An);
	} else if (Y.escapeTestNoEncode.test(e)) return e.replace(Y.escapeReplaceNoEncode, An);
	return e;
}
function Mn(e) {
	try {
		e = encodeURI(e).replace(Y.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function Nn(e, t) {
	let n = e.replace(Y.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(Y.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(Y.slashPipe, "|");
	return n;
}
function Pn(e, t, n) {
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
function Fn(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function In(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function Ln(e, t, n, r, i) {
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
function Rn(e, t, n) {
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
var zn = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || q;
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
				text: this.options.pedantic ? e : Pn(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Rn(e, t[3] || "", this.rules);
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
				let t = Pn(e, "#");
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
			raw: Pn(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = Pn(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o = 0;
				for (; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
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
				let c = In(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), f = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let p = e.split("\n", 1)[0], m;
						if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), m = l) : m = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
						if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + m.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += p + "\n", e = e.substring(p.length + 1), c = m.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
					if (e.text = e.text.replace(this.rules.other.listReplaceTask, ""), e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph") {
						e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
						for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
							this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
							break;
						}
					}
					let t = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (t) {
						let n = {
							type: "checkbox",
							raw: t[0] + " ",
							checked: t[0] !== "[ ]"
						};
						e.checked = n.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
							type: "paragraph",
							raw: n.raw,
							text: n.raw,
							tokens: [n]
						}) : e.tokens.unshift(n);
					}
				}
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
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
		let n = Nn(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
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
			for (let e of i) a.rows.push(Nn(e, a.header.length).map((e, t) => ({
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
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
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
				let t = Pn(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = Fn(t[2], "()");
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
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), Ln(t, {
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
			return Ln(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
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
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
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
}, Bn = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || q, this.options.tokenizer = this.options.tokenizer || new zn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: Y,
			block: Dn.normal,
			inline: On.normal
		};
		this.options.pedantic ? (t.block = Dn.pedantic, t.inline = On.pedantic) : this.options.gfm && (t.block = Dn.gfm, t.inline = this.options.breaks ? On.breaks : On.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: Dn,
			inline: On
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(Y.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Y.tabCharGlobal, "    ").replace(Y.spaceLine, "")); e;) {
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
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
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
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
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
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
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
		this.tokenizer.lexer = this;
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
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
			if (r = this.tokenizer.emStrong(e, n, o)) {
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
			if (r = this.tokenizer.del(e, n, o)) {
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
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
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
}, Vn = class {
	options;
	parser;
	constructor(e) {
		this.options = e || q;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(Y.notSpaceStart)?.[0], i = e.replace(Y.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + jn(r) + "\">" + (n ? i : jn(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : jn(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
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
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
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
		return `<code>${jn(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = Mn(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + jn(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = Mn(e);
		if (i === null) return jn(n);
		e = i;
		let a = `<img src="${e}" alt="${jn(n)}"`;
		return t && (a += ` title="${jn(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : jn(e.text);
	}
}, Hn = class {
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
	checkbox({ raw: e }) {
		return e;
	}
}, Un = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || q, this.options.renderer = this.options.renderer || new Vn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Hn();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
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
				case "checkbox":
					n += t.checkbox(a);
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
}, Wn = class {
	options;
	block;
	constructor(e) {
		this.options = e || q;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
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
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? Bn.lex : Bn.lexInline;
	}
	provideParser() {
		return this.block ? Un.parse : Un.parseInline;
	}
}, Gn = new class {
	defaults = yt();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Un;
	Renderer = Vn;
	TextRenderer = Hn;
	Lexer = Bn;
	Tokenizer = zn;
	Hooks = Wn;
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
					let i = e[r].flat(1 / 0);
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
				let t = this.defaults.renderer || new Vn(this.defaults);
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
				let t = this.defaults.tokenizer || new zn(this.defaults);
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
				let t = this.defaults.hooks || new Wn();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Wn.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && Wn.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
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
		return Bn.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Un.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? Bn.lex : Bn.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser() : e ? Un.parse : Un.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer() : e ? Bn.lex : Bn.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser() : e ? Un.parse : Un.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + jn(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function X(e, t) {
	return Gn.parse(e, t);
}
X.options = X.setOptions = function(e) {
	return Gn.setOptions(e), X.defaults = Gn.defaults, bt(X.defaults), X;
}, X.getDefaults = yt, X.defaults = q, X.use = function(...e) {
	return Gn.use(...e), X.defaults = Gn.defaults, bt(X.defaults), X;
}, X.walkTokens = function(e, t) {
	return Gn.walkTokens(e, t);
}, X.parseInline = Gn.parseInline, X.Parser = Un, X.parser = Un.parse, X.Renderer = Vn, X.TextRenderer = Hn, X.Lexer = Bn, X.lexer = Bn.lex, X.Tokenizer = zn, X.Hooks = Wn, X.parse = X, X.options, X.setOptions, X.use, X.walkTokens, X.parseInline, Un.parse, Bn.lex;
function Kn(...e) {
	return e.filter(Boolean).join(" ");
}
function qn(e, t) {
	return e ? t ? {
		...e,
		...t
	} : e : t;
}
function Jn({ animation: e, index: t, as: n, asChild: r, className: i, style: a, children: o }) {
	let s = Kn("fragment", e, i);
	if (r) {
		let e;
		try {
			e = M.Children.only(o);
		} catch {
			throw Error("Fragment with asChild expects exactly one React element child.");
		}
		if (!(0, M.isValidElement)(e) || e.type === M.Fragment) throw Error("Fragment with asChild expects exactly one non-Fragment React element child.");
		let n = {
			className: Kn(e.props.className, s),
			style: qn(e.props.style, a)
		};
		return t !== void 0 && (n["data-fragment-index"] = t), (0, M.cloneElement)(e, n);
	}
	return /* @__PURE__ */ (0, G.jsx)(n ?? "span", {
		className: s,
		style: a,
		"data-fragment-index": t,
		children: o
	});
}
//#endregion
//#region src/components/slides/slide-scroll-hint.tsx
var Yn = 8, Xn = 1;
function Zn(e) {
	let { scrollHeight: t, clientHeight: n, scrollTop: r } = e;
	return t > n + Xn && r <= Yn;
}
function Qn(e) {
	let t = e.querySelector(".fragment:not(.visible)");
	return t ? t.getBoundingClientRect().top - e.getBoundingClientRect().top + e.scrollTop : e.scrollHeight;
}
function $n(e, t) {
	let n = (0, N.c)(4), [r, i] = (0, M.useState)(!1), a, o;
	return n[0] !== t || n[1] !== e ? (a = () => {
		let n = e.current, r = t.current;
		if (!n || !r) return;
		let a = 0, o = () => {
			cancelAnimationFrame(a), a = requestAnimationFrame(() => {
				i(Zn({
					scrollHeight: Qn(n),
					clientHeight: n.clientHeight,
					scrollTop: n.scrollTop
				}));
			});
		};
		o();
		let s = new ResizeObserver(o);
		s.observe(n), s.observe(r);
		let c = r.querySelector(".fragment") ? new MutationObserver(o) : null;
		return c?.observe(r, {
			subtree: !0,
			attributes: !0,
			attributeFilter: ["class"]
		}), n.addEventListener("scroll", o, { passive: !0 }), () => {
			cancelAnimationFrame(a), s.disconnect(), c?.disconnect(), n.removeEventListener("scroll", o);
		};
	}, o = [e, t], n[0] = t, n[1] = e, n[2] = a, n[3] = o) : (a = n[2], o = n[3]), (0, M.useEffect)(a, o), r;
}
var er = (e) => {
	let t = (0, N.c)(6), { className: n } = e, i;
	t[0] === n ? i = t[1] : (i = r("pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center", "animate-in fade-in-0 duration-200", n), t[0] = n, t[1] = i);
	let a;
	t[2] === Symbol.for("react.memo_cache_sentinel") ? (a = /* @__PURE__ */ (0, G.jsx)("div", { className: "h-16 w-full bg-linear-to-t from-background via-background/80 to-transparent" }), t[2] = a) : a = t[2];
	let o;
	t[3] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "absolute bottom-3 flex items-center gap-1 rounded-full border border-border/60 bg-background/90 px-2.5 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, G.jsx)(C, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, G.jsx)("span", { children: "Scroll for more" })]
	}), t[3] = o) : o = t[3];
	let s;
	return t[4] === i ? s = t[5] : (s = /* @__PURE__ */ (0, G.jsxs)("div", {
		className: i,
		"data-testid": "slide-scroll-hint",
		"aria-hidden": !0,
		children: [a, o]
	}), t[4] = i, t[5] = s), s;
}, tr = (e) => {
	let t = (0, N.c)(10), { children: n, className: i } = e, a = (0, M.useRef)(null), o = (0, M.useRef)(null), s = $n(a, o), c;
	t[0] === i ? c = t[1] : (c = r("relative h-full w-full", i), t[0] = i, t[1] = c);
	let l;
	t[2] === n ? l = t[3] : (l = /* @__PURE__ */ (0, G.jsx)("div", {
		ref: a,
		className: "h-full w-full overflow-auto",
		"data-testid": "slide-scroll-container",
		children: /* @__PURE__ */ (0, G.jsx)("div", {
			ref: o,
			className: "flex w-full min-h-full",
			children: n
		})
	}), t[2] = n, t[3] = l);
	let u;
	t[4] === s ? u = t[5] : (u = s && /* @__PURE__ */ (0, G.jsx)(er, {}), t[4] = s, t[5] = u);
	let d;
	return t[6] !== c || t[7] !== l || t[8] !== u ? (d = /* @__PURE__ */ (0, G.jsxs)("div", {
		className: c,
		children: [l, u]
	}), t[6] = c, t[7] = l, t[8] = u, t[9] = d) : d = t[9], d;
};
//#endregion
//#region src/components/slides/compose-slides.ts
function nr({ cells: e, getType: t }) {
	let n = [], r = null, i = null, a = () => {
		let e = { subslides: [] };
		return n.push(e), r = e, i = null, e;
	}, o = () => {
		let e = r ?? a(), t = { blocks: [] };
		return e.subslides.push(t), i = t, t;
	}, s = (e) => {
		let t = i ?? o(), n = {
			isFragment: e,
			cells: []
		};
		return t.blocks.push(n), n;
	};
	for (let n of e) switch (t(n)) {
		case "skip": break;
		case "slide":
			a(), o(), s(!1).cells.push(n);
			break;
		case "sub-slide":
			o(), s(!1).cells.push(n);
			break;
		case "fragment": s(!0).cells.push(n);
	}
	return { stacks: n };
}
function rr({ composition: e, cells: t, getId: n }) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
	for (let [e, r] of t.entries()) a.set(n(r), e);
	return e.stacks.forEach((e, t) => {
		e.subslides.forEach((e, o) => {
			let s;
			for (let t of e.blocks) {
				if (t.isFragment) break;
				let e = t.cells.at(-1);
				e && (s = n(e));
			}
			if (s === void 0) {
				let t = e.blocks[0]?.cells[0];
				t && (s = n(t));
			}
			if (s !== void 0) {
				let e = a.get(s);
				e != null && i.set(`${t},${o},-1`, e);
			}
			let c = -1;
			for (let s of e.blocks) if (s.isFragment) {
				c++;
				for (let e of s.cells) r.set(n(e), {
					h: t,
					v: o,
					f: c
				});
				let e = s.cells.at(-1);
				if (e) {
					let r = a.get(n(e));
					r != null && i.set(`${t},${o},${c}`, r);
				}
			} else for (let e of s.cells) r.set(n(e), {
				h: t,
				v: o,
				f: -1
			});
		});
	}), {
		cellToTarget: r,
		targetToCellIndex: i
	};
}
function ir(e, t) {
	let { h: n, v: r, f: i } = t;
	return e.get(`${n},${r},${i}`) ?? e.get(`${n},${r},-1`);
}
function ar({ start: e, stop: t, step: n, cells: r, cellToTarget: i, getId: a }) {
	for (let o = e; o !== t; o += n) {
		let e = i.get(a(r[o]));
		if (e) return e;
	}
}
function or({ activeIndex: e, cells: t, cellToTarget: n, getId: r }) {
	if (e == null) return;
	let i = t[e];
	return i ? n.get(r(i)) || (ar({
		start: e - 1,
		stop: -1,
		step: -1,
		cells: t,
		cellToTarget: n,
		getId: r
	}) ?? ar({
		start: e + 1,
		stop: t.length,
		step: 1,
		cells: t,
		cellToTarget: n,
		getId: r
	})) : void 0;
}
function sr(e, t) {
	let n = {
		h: t.h,
		v: t.v,
		f: t.f >= 0 ? t.f : -1
	};
	return e.h === n.h && e.v === n.v && e.f === n.f ? null : n;
}
//#endregion
//#region src/core/islands/stubs/slide-cell-view.tsx
var cr = (e) => (n.warn("SlideCellView islands stub rendered; this should never happen in a read-only embed."), null), lr = (e) => (n.warn("SlideCellReadOnlyView islands stub rendered; this should never happen in a read-only embed."), null), ur = 300, dr = (e) => {
	let t = (0, N.c)(25), { layout: n, setLayout: a, cellId: o, className: s } = e, c = o ? n.cells.get(o)?.speakerNotes ?? "" : "", [l, u] = (0, M.useState)(c), d = (0, M.useRef)(!1), f;
	t[0] !== n || t[1] !== a ? (f = (e, t) => {
		d.current = !1;
		let r = n.cells.get(e);
		if ((r?.speakerNotes ?? "") === t) return;
		let i = new Map(n.cells);
		i.set(e, {
			...r,
			speakerNotes: t
		}), a({
			...n,
			cells: i
		});
	}, t[0] = n, t[1] = a, t[2] = f) : f = t[2];
	let p = D(f), m = ee(p, ur), h = (0, M.useRef)(o), g, _;
	t[3] !== o || t[4] !== l || t[5] !== c || t[6] !== m ? (g = () => {
		if (h.current !== o) {
			m.flush(), d.current = !1, u(c), h.current = o;
			return;
		}
		!d.current && c !== l && u(c);
	}, _ = [
		o,
		c,
		l,
		m
	], t[3] = o, t[4] = l, t[5] = c, t[6] = m, t[7] = g, t[8] = _) : (g = t[7], _ = t[8]), (0, M.useEffect)(g, _);
	let v, y;
	t[9] === m ? (v = t[10], y = t[11]) : (v = () => () => {
		m.flush();
	}, y = [m], t[9] = m, t[10] = v, t[11] = y), (0, M.useEffect)(v, y);
	let b;
	t[12] !== o || t[13] !== m ? (b = (e) => {
		u(e), o && (d.current = !0, m(o, e));
	}, t[12] = o, t[13] = m, t[14] = b) : b = t[14];
	let x = b, S;
	t[15] === s ? S = t[16] : (S = r("h-full min-h-0 flex flex-col bg-muted/40 dark:bg-muted/20 border-t", s), t[15] = s, t[16] = S);
	let C;
	t[17] === Symbol.for("react.memo_cache_sentinel") ? (C = /* @__PURE__ */ (0, G.jsxs)("header", {
		className: "flex items-center gap-1.5 px-3 h-8 shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground",
		children: [/* @__PURE__ */ (0, G.jsx)(j, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, G.jsx)("span", { children: "Speaker notes" })]
	}), t[17] = C) : C = t[17];
	let w;
	t[18] !== o || t[19] !== l || t[20] !== x ? (w = /* @__PURE__ */ (0, G.jsx)("div", {
		className: "flex-1 min-h-0 p-2",
		children: o ? /* @__PURE__ */ (0, G.jsx)("textarea", {
			value: l,
			onChange: (e) => x(e.target.value),
			onClick: i.stopPropagation(),
			placeholder: "Add notes for this slide. Visible to you in speaker view (press S during presentation).",
			className: r("h-full w-full resize-none rounded-sm border border-input/25 bg-background", "px-3 py-2 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground", "ring-offset-background focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-accent"),
			"aria-label": "Speaker notes for the current slide"
		}) : /* @__PURE__ */ (0, G.jsx)("div", {
			className: "h-full flex items-center justify-center text-xs text-muted-foreground",
			children: "Select a slide to add notes."
		})
	}), t[18] = o, t[19] = l, t[20] = x, t[21] = w) : w = t[21];
	let T;
	return t[22] !== S || t[23] !== w ? (T = /* @__PURE__ */ (0, G.jsxs)("section", {
		className: S,
		"aria-label": "Speaker notes",
		onKeyDown: fr,
		children: [C, w]
	}), t[22] = S, t[23] = w, t[24] = T) : T = t[24], T;
};
function fr(e) {
	return e.stopPropagation();
}
var pr = "\n\n---\n\n", mr = (e, t) => e.map((e) => t.get(e.id)?.speakerNotes ?? "").filter((e) => e.trim().length > 0).join("\n\n"), hr = (e, t) => {
	let n = e.blocks.map((e) => mr(e.cells, t)), r = e.blocks.map((e, t) => e.isFragment ? "" : n[t]).filter((e) => e.length > 0).join("\n\n"), i = /* @__PURE__ */ new Map(), a = [];
	return e.blocks.forEach((e, t) => {
		if (!e.isFragment) return;
		let o = n[t];
		o.length > 0 && a.push(o);
		let s = [r, ...a].filter((e) => e.length > 0).join(pr);
		s.length > 0 && i.set(t, s);
	}), {
		slideLevel: r,
		cumulativeByBlock: i
	};
};
//#endregion
//#region ../node_modules/.pnpm/reveal.js@6.0.2/node_modules/reveal.js/dist/plugin/notes.mjs
function gr() {
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
var _r = gr();
function vr(e) {
	_r = e;
}
var yr = { exec: () => null };
function Z(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(Q.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var br = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), Q = {
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
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
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
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
	blockquoteBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}>`)
}, xr = /^(?:[ \t]*(?:\n|$))+/, Sr = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Cr = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, wr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Tr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Er = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Dr = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Or = Z(Dr).replace(/bull/g, Er).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), kr = Z(Dr).replace(/bull/g, Er).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ar = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, jr = /^[^\n]+/, Mr = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Nr = Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Mr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Pr = Z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Er).getRegex(), Fr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ir = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Lr = Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ir).replace("tag", Fr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Rr = Z(Ar).replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fr).getRegex(), zr = {
	blockquote: Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Rr).getRegex(),
	code: Sr,
	def: Nr,
	fences: Cr,
	heading: Tr,
	hr: wr,
	html: Lr,
	lheading: Or,
	list: Pr,
	newline: xr,
	paragraph: Rr,
	table: yr,
	text: jr
}, Br = Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fr).getRegex(), Vr = {
	...zr,
	lheading: kr,
	table: Br,
	paragraph: Z(Ar).replace("hr", wr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Br).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Fr).getRegex()
}, Hr = {
	...zr,
	html: Z("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Ir).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: yr,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: Z(Ar).replace("hr", wr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Or).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ur = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Wr = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Gr = /^( {2,}|\\)\n(?!\s*$)/, Kr = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, qr = /[\p{P}\p{S}]/u, Jr = /[\s\p{P}\p{S}]/u, Yr = /[^\s\p{P}\p{S}]/u, Xr = Z(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Jr).getRegex(), Zr = /(?!~)[\p{P}\p{S}]/u, Qr = /(?!~)[\s\p{P}\p{S}]/u, $r = /(?:[^\s\p{P}\p{S}]|~)/u, ei = Z(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", br ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ti = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, ni = Z(ti, "u").replace(/punct/g, qr).getRegex(), ri = Z(ti, "u").replace(/punct/g, Zr).getRegex(), ii = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ai = Z(ii, "gu").replace(/notPunctSpace/g, Yr).replace(/punctSpace/g, Jr).replace(/punct/g, qr).getRegex(), oi = Z(ii, "gu").replace(/notPunctSpace/g, $r).replace(/punctSpace/g, Qr).replace(/punct/g, Zr).getRegex(), si = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Yr).replace(/punctSpace/g, Jr).replace(/punct/g, qr).getRegex(), ci = Z(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, qr).getRegex(), li = Z("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Yr).replace(/punctSpace/g, Jr).replace(/punct/g, qr).getRegex(), ui = Z(/\\(punct)/, "gu").replace(/punct/g, qr).getRegex(), di = Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), fi = Z(Ir).replace("(?:-->|$)", "-->").getRegex(), pi = Z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", fi).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), mi = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, hi = Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", mi).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), gi = Z(/^!?\[(label)\]\[(ref)\]/).replace("label", mi).replace("ref", Mr).getRegex(), _i = Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", Mr).getRegex(), vi = Z("reflink|nolink(?!\\()", "g").replace("reflink", gi).replace("nolink", _i).getRegex(), yi = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, bi = {
	_backpedal: yr,
	anyPunctuation: ui,
	autolink: di,
	blockSkip: ei,
	br: Gr,
	code: Wr,
	del: yr,
	delLDelim: yr,
	delRDelim: yr,
	emStrongLDelim: ni,
	emStrongRDelimAst: ai,
	emStrongRDelimUnd: si,
	escape: Ur,
	link: hi,
	nolink: _i,
	punctuation: Xr,
	reflink: gi,
	reflinkSearch: vi,
	tag: pi,
	text: Kr,
	url: yr
}, xi = {
	...bi,
	link: Z(/^!?\[(label)\]\((.*?)\)/).replace("label", mi).getRegex(),
	reflink: Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", mi).getRegex()
}, Si = {
	...bi,
	emStrongRDelimAst: oi,
	emStrongLDelim: ri,
	delLDelim: ci,
	delRDelim: li,
	url: Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", yi).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: Z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", yi).getRegex()
}, Ci = {
	...Si,
	br: Z(Gr).replace("{2,}", "*").getRegex(),
	text: Z(Si.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, wi = {
	normal: zr,
	gfm: Vr,
	pedantic: Hr
}, Ti = {
	normal: bi,
	gfm: Si,
	breaks: Ci,
	pedantic: xi
}, Ei = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, Di = (e) => Ei[e];
function Oi(e, t) {
	if (t) {
		if (Q.escapeTest.test(e)) return e.replace(Q.escapeReplace, Di);
	} else if (Q.escapeTestNoEncode.test(e)) return e.replace(Q.escapeReplaceNoEncode, Di);
	return e;
}
function ki(e) {
	try {
		e = encodeURI(e).replace(Q.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function Ai(e, t) {
	let n = e.replace(Q.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(Q.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(Q.slashPipe, "|");
	return n;
}
function ji(e, t, n) {
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
function Mi(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function Ni(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function Pi(e, t, n, r, i) {
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
function Fi(e, t, n) {
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
var Ii = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || _r;
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
				text: this.options.pedantic ? e : ji(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = Fi(e, t[3] || "", this.rules);
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
				let t = ji(e, "#");
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
			raw: ji(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = ji(t[0], "\n").split("\n"), n = "", r = "", i = [];
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
				let c = Ni(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), f = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let p = e.split("\n", 1)[0], m;
						if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), m = l) : m = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
						if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + m.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += p + "\n", e = e.substring(p.length + 1), c = m.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
					if (e.text = e.text.replace(this.rules.other.listReplaceTask, ""), e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph") {
						e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
						for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
							this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
							break;
						}
					}
					let t = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (t) {
						let n = {
							type: "checkbox",
							raw: t[0] + " ",
							checked: t[0] !== "[ ]"
						};
						e.checked = n.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
							type: "paragraph",
							raw: n.raw,
							text: n.raw,
							tokens: [n]
						}) : e.tokens.unshift(n);
					}
				}
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
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
		let n = Ai(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
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
			for (let e of i) a.rows.push(Ai(e, a.header.length).map((e, t) => ({
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
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
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
				let t = ji(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = Mi(t[2], "()");
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
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), Pi(t, {
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
			return Pi(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
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
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
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
}, Li = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || _r, this.options.tokenizer = this.options.tokenizer || new Ii(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: Q,
			block: wi.normal,
			inline: Ti.normal
		};
		this.options.pedantic ? (t.block = wi.pedantic, t.inline = Ti.pedantic) : this.options.gfm && (t.block = wi.gfm, t.inline = this.options.breaks ? Ti.breaks : Ti.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: wi,
			inline: Ti
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(Q.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Q.tabCharGlobal, "    ").replace(Q.spaceLine, "")); e;) {
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
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
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
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
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
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
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
		this.tokenizer.lexer = this;
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
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
			if (r = this.tokenizer.emStrong(e, n, o)) {
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
			if (r = this.tokenizer.del(e, n, o)) {
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
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
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
}, Ri = class {
	options;
	parser;
	constructor(e) {
		this.options = e || _r;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(Q.notSpaceStart)?.[0], i = e.replace(Q.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + Oi(r) + "\">" + (n ? i : Oi(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : Oi(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
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
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
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
		return `<code>${Oi(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = ki(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + Oi(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = ki(e);
		if (i === null) return Oi(n);
		e = i;
		let a = `<img src="${e}" alt="${Oi(n)}"`;
		return t && (a += ` title="${Oi(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Oi(e.text);
	}
}, zi = class {
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
	checkbox({ raw: e }) {
		return e;
	}
}, Bi = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || _r, this.options.renderer = this.options.renderer || new Ri(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new zi();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
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
				case "checkbox":
					n += t.checkbox(a);
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
}, Vi = class {
	options;
	block;
	constructor(e) {
		this.options = e || _r;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
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
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? Li.lex : Li.lexInline;
	}
	provideParser() {
		return this.block ? Bi.parse : Bi.parseInline;
	}
}, Hi = new class {
	defaults = gr();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = Bi;
	Renderer = Ri;
	TextRenderer = zi;
	Lexer = Li;
	Tokenizer = Ii;
	Hooks = Vi;
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
					let i = e[r].flat(1 / 0);
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
				let t = this.defaults.renderer || new Ri(this.defaults);
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
				let t = this.defaults.tokenizer || new Ii(this.defaults);
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
				let t = this.defaults.hooks || new Vi();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Vi.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && Vi.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
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
		return Li.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return Bi.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? Li.lex : Li.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser() : e ? Bi.parse : Bi.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer() : e ? Li.lex : Li.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser() : e ? Bi.parse : Bi.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + Oi(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function $(e, t) {
	return Hi.parse(e, t);
}
$.options = $.setOptions = function(e) {
	return Hi.setOptions(e), $.defaults = Hi.defaults, vr($.defaults), $;
}, $.getDefaults = gr, $.defaults = _r, $.use = function(...e) {
	return Hi.use(...e), $.defaults = Hi.defaults, vr($.defaults), $;
}, $.walkTokens = function(e, t) {
	return Hi.walkTokens(e, t);
}, $.parseInline = Hi.parseInline, $.Parser = Bi, $.parser = Bi.parse, $.Renderer = Ri, $.TextRenderer = zi, $.Lexer = Li, $.lexer = Li.lex, $.Tokenizer = Ii, $.Hooks = Vi, $.parse = $, $.options, $.setOptions, $.use, $.walkTokens, $.parseInline, Bi.parse, Li.lex;
var Ui = () => {
	let e, t = null, n;
	function r() {
		if (t && !t.closed) t.focus();
		else {
			if (t = window.open("about:blank", "reveal.js - Notes", "width=1100,height=700"), t.marked = $, t.document.write("<!--\n	NOTE: You need to build the notes plugin after making changes to this file.\n-->\n<html lang=\"en\">\n	<head>\n		<meta charset=\"utf-8\">\n\n		<title>reveal.js - Speaker View</title>\n\n		<style>\n			body {\n				font-family: Helvetica;\n				font-size: 18px;\n			}\n\n			#current-slide,\n			#upcoming-slide,\n			#speaker-controls {\n				padding: 6px;\n				box-sizing: border-box;\n				-moz-box-sizing: border-box;\n			}\n\n			#current-slide iframe,\n			#upcoming-slide iframe {\n				width: 100%;\n				height: 100%;\n				border: 1px solid #ddd;\n			}\n\n			#current-slide .label,\n			#upcoming-slide .label {\n				position: absolute;\n				top: 10px;\n				left: 10px;\n				z-index: 2;\n			}\n\n			#connection-status {\n				position: absolute;\n				top: 0;\n				left: 0;\n				width: 100%;\n				height: 100%;\n				z-index: 20;\n				padding: 30% 20% 20% 20%;\n				font-size: 18px;\n				color: #222;\n				background: #fff;\n				text-align: center;\n				box-sizing: border-box;\n				line-height: 1.4;\n			}\n\n			.overlay-element {\n				height: 34px;\n				line-height: 34px;\n				padding: 0 10px;\n				text-shadow: none;\n				background: rgba( 220, 220, 220, 0.8 );\n				color: #222;\n				font-size: 14px;\n			}\n\n			.overlay-element.interactive:hover {\n				background: rgba( 220, 220, 220, 1 );\n			}\n\n			#current-slide {\n				position: absolute;\n				width: 60%;\n				height: 100%;\n				top: 0;\n				left: 0;\n				padding-right: 0;\n			}\n\n			#upcoming-slide {\n				position: absolute;\n				width: 40%;\n				height: 40%;\n				right: 0;\n				top: 0;\n			}\n\n			/* Speaker controls */\n			#speaker-controls {\n				position: absolute;\n				top: 40%;\n				right: 0;\n				width: 40%;\n				height: 60%;\n				overflow: auto;\n				font-size: 18px;\n			}\n\n				.speaker-controls-time.hidden,\n				.speaker-controls-notes.hidden {\n					display: none;\n				}\n\n				.speaker-controls-time .label,\n				.speaker-controls-pace .label,\n				.speaker-controls-notes .label {\n					text-transform: uppercase;\n					font-weight: normal;\n					font-size: 0.66em;\n					color: #666;\n					margin: 0;\n				}\n\n				.speaker-controls-time, .speaker-controls-pace {\n					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n					margin-bottom: 10px;\n					padding: 10px 16px;\n					padding-bottom: 20px;\n					cursor: pointer;\n				}\n\n				.speaker-controls-time .reset-button {\n					opacity: 0;\n					float: right;\n					color: #666;\n					text-decoration: none;\n				}\n				.speaker-controls-time:hover .reset-button {\n					opacity: 1;\n				}\n\n				.speaker-controls-time .timer,\n				.speaker-controls-time .clock {\n					width: 50%;\n				}\n\n				.speaker-controls-time .timer,\n				.speaker-controls-time .clock,\n				.speaker-controls-time .pacing .hours-value,\n				.speaker-controls-time .pacing .minutes-value,\n				.speaker-controls-time .pacing .seconds-value {\n					font-size: 1.9em;\n				}\n\n				.speaker-controls-time .timer {\n					float: left;\n				}\n\n				.speaker-controls-time .clock {\n					float: right;\n					text-align: right;\n				}\n\n				.speaker-controls-time span.mute {\n					opacity: 0.3;\n				}\n\n				.speaker-controls-time .pacing-title {\n					margin-top: 5px;\n				}\n\n				.speaker-controls-time .pacing.ahead {\n					color: blue;\n				}\n\n				.speaker-controls-time .pacing.on-track {\n					color: green;\n				}\n\n				.speaker-controls-time .pacing.behind {\n					color: red;\n				}\n\n				.speaker-controls-notes {\n					padding: 10px 16px;\n				}\n\n				.speaker-controls-notes .value {\n					margin-top: 5px;\n					line-height: 1.4;\n					font-size: 1.2em;\n				}\n\n			/* Layout selector\xA0*/\n			#speaker-layout {\n				position: absolute;\n				top: 10px;\n				right: 10px;\n				color: #222;\n				z-index: 10;\n			}\n				#speaker-layout select {\n					position: absolute;\n					width: 100%;\n					height: 100%;\n					top: 0;\n					left: 0;\n					border: 0;\n					box-shadow: 0;\n					cursor: pointer;\n					opacity: 0;\n\n					font-size: 1em;\n					background-color: transparent;\n\n					-moz-appearance: none;\n					-webkit-appearance: none;\n					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n				}\n\n				#speaker-layout select:focus {\n					outline: none;\n					box-shadow: none;\n				}\n\n			.clear {\n				clear: both;\n			}\n\n			/* Speaker layout: Wide */\n			body[data-speaker-layout=\"wide\"] #current-slide,\n			body[data-speaker-layout=\"wide\"] #upcoming-slide {\n				width: 50%;\n				height: 45%;\n				padding: 6px;\n			}\n\n			body[data-speaker-layout=\"wide\"] #current-slide {\n				top: 0;\n				left: 0;\n			}\n\n			body[data-speaker-layout=\"wide\"] #upcoming-slide {\n				top: 0;\n				left: 50%;\n			}\n\n			body[data-speaker-layout=\"wide\"] #speaker-controls {\n				top: 45%;\n				left: 0;\n				width: 100%;\n				height: 50%;\n				font-size: 1.25em;\n			}\n\n			/* Speaker layout: Tall */\n			body[data-speaker-layout=\"tall\"] #current-slide,\n			body[data-speaker-layout=\"tall\"] #upcoming-slide {\n				width: 45%;\n				height: 50%;\n				padding: 6px;\n			}\n\n			body[data-speaker-layout=\"tall\"] #current-slide {\n				top: 0;\n				left: 0;\n			}\n\n			body[data-speaker-layout=\"tall\"] #upcoming-slide {\n				top: 50%;\n				left: 0;\n			}\n\n			body[data-speaker-layout=\"tall\"] #speaker-controls {\n				padding-top: 40px;\n				top: 0;\n				left: 45%;\n				width: 55%;\n				height: 100%;\n				font-size: 1.25em;\n			}\n\n			/* Speaker layout: Notes only */\n			body[data-speaker-layout=\"notes-only\"] #current-slide,\n			body[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n				display: none;\n			}\n\n			body[data-speaker-layout=\"notes-only\"] #speaker-controls {\n				padding-top: 40px;\n				top: 0;\n				left: 0;\n				width: 100%;\n				height: 100%;\n				font-size: 1.25em;\n			}\n\n			@media screen and (max-width: 1080px) {\n				body[data-speaker-layout=\"default\"] #speaker-controls {\n					font-size: 16px;\n				}\n			}\n\n			@media screen and (max-width: 900px) {\n				body[data-speaker-layout=\"default\"] #speaker-controls {\n					font-size: 14px;\n				}\n			}\n\n			@media screen and (max-width: 800px) {\n				body[data-speaker-layout=\"default\"] #speaker-controls {\n					font-size: 12px;\n				}\n			}\n\n		</style>\n	</head>\n\n	<body>\n\n		<div id=\"connection-status\">Loading speaker view...</div>\n\n		<div id=\"current-slide\"></div>\n		<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n		<div id=\"speaker-controls\">\n			<div class=\"speaker-controls-time\">\n				<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n				<div class=\"clock\">\n					<span class=\"clock-value\">0:00 AM</span>\n				</div>\n				<div class=\"timer\">\n					<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n				</div>\n				<div class=\"clear\"></div>\n\n				<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n				<div class=\"pacing\" style=\"display: none\">\n					<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n				</div>\n			</div>\n\n			<div class=\"speaker-controls-notes hidden\">\n				<h4 class=\"label\">Notes</h4>\n				<div class=\"value\"></div>\n			</div>\n		</div>\n		<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n			<span class=\"speaker-layout-label\"></span>\n			<select class=\"speaker-layout-dropdown\"></select>\n		</div>\n\n		<script>\n\n			(function() {\n\n				var notes,\n					notesValue,\n					currentState,\n					currentSlide,\n					upcomingSlide,\n					layoutLabel,\n					layoutDropdown,\n					pendingCalls = {},\n					lastRevealApiCallId = 0,\n					connected = false\n\n				var connectionStatus = document.querySelector( '#connection-status' );\n\n				var SPEAKER_LAYOUTS = {\n					'default': 'Default',\n					'wide': 'Wide',\n					'tall': 'Tall',\n					'notes-only': 'Notes only'\n				};\n\n				setupLayout();\n\n				let openerOrigin;\n\n				try {\n					openerOrigin = window.opener.location.origin;\n				}\n				catch ( error ) { console.warn( error ) }\n\n				// In order to prevent XSS, the speaker view will only run if its\n				// opener has the same origin as itself\n				if( window.location.origin !== openerOrigin ) {\n					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';\n					return;\n				}\n\n				var connectionTimeout = setTimeout( function() {\n					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n				}, 5000 );\n\n				window.addEventListener( 'message', function( event ) {\n\n					// Validate the origin of all messages to avoid parsing messages\n					// that aren't meant for us. Ignore when running off file:// so\n					// that the speaker view continues to work without a web server.\n					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {\n						return\n					}\n\n					clearTimeout( connectionTimeout );\n					connectionStatus.style.display = 'none';\n\n					var data = JSON.parse( event.data );\n\n					// The overview mode is only useful to the reveal.js instance\n					// where navigation occurs so we don't sync it\n					if( data.state ) delete data.state.overview;\n\n					// Messages sent by the notes plugin inside of the main window\n					if( data && data.namespace === 'reveal-notes' ) {\n						if( data.type === 'connect' ) {\n							handleConnectMessage( data );\n						}\n						else if( data.type === 'state' ) {\n							handleStateMessage( data );\n						}\n						else if( data.type === 'return' ) {\n							pendingCalls[data.callId](data.result);\n							delete pendingCalls[data.callId];\n						}\n					}\n					// Messages sent by the reveal.js inside of the current slide preview\n					else if( data && data.namespace === 'reveal' ) {\n						const supportedEvents = [\n							'slidechanged',\n							'fragmentshown',\n							'fragmenthidden',\n							'paused',\n							'resumed',\n							'previewiframe',\n							'previewimage',\n							'previewvideo',\n							'closeoverlay'\n						];\n\n						if( /ready/.test( data.eventName ) ) {\n							// Send a message back to notify that the handshake is complete\n							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n						}\n						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n							dispatchStateToMainWindow( data.state );\n						}\n					}\n\n				} );\n\n				/**\n				 * Updates the presentation in the main window to match the state\n				 * of the presentation in the notes window.\n				 */\n				const dispatchStateToMainWindow = debounce(( state ) => {\n					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );\n				}, 500);\n\n				/**\n				 * Asynchronously calls the Reveal.js API of the main frame.\n				 */\n				function callRevealApi( methodName, methodArguments, callback ) {\n\n					var callId = ++lastRevealApiCallId;\n					pendingCalls[callId] = callback;\n					window.opener.postMessage( JSON.stringify( {\n						namespace: 'reveal-notes',\n						type: 'call',\n						callId: callId,\n						methodName: methodName,\n						arguments: methodArguments\n					} ), '*' );\n\n				}\n\n				/**\n				 * Called when the main window is trying to establish a\n				 * connection.\n				 */\n				function handleConnectMessage( data ) {\n\n					if( connected === false ) {\n						connected = true;\n\n						setupIframes( data );\n						setupKeyboard();\n						setupNotes();\n						setupTimer();\n						setupHeartbeat();\n					}\n\n				}\n\n				/**\n				 * Called when the main window sends an updated state.\n				 */\n				function handleStateMessage( data ) {\n\n					// Store the most recently set state to avoid circular loops\n					// applying the same state\n					currentState = JSON.stringify( data.state );\n\n					// No need for updating the notes in case of fragment changes\n					if ( data.notes ) {\n						notes.classList.remove( 'hidden' );\n						notesValue.style.whiteSpace = data.whitespace;\n						if( data.markdown ) {\n							notesValue.innerHTML = marked.parse( data.notes );\n						}\n						else {\n							notesValue.innerHTML = data.notes;\n						}\n					}\n					else {\n						notes.classList.add( 'hidden' );\n					}\n\n					// Don't show lightboxes in the upcoming slide\n					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;\n\n					// Update the note slides\n					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );\n					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n				}\n\n				// Limit to max one state update per X ms\n				handleStateMessage = debounce( handleStateMessage, 200 );\n\n				/**\n				 * Forward keyboard events to the current slide window.\n				 * This enables keyboard events to work even if focus\n				 * isn't set on the current slide iframe.\n				 *\n				 * Block F5 default handling, it reloads and disconnects\n				 * the speaker notes window.\n				 */\n				function setupKeyboard() {\n\n					document.addEventListener( 'keydown', function( event ) {\n						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n							event.preventDefault();\n							return false;\n						}\n						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n					} );\n\n				}\n\n				/**\n				 * Creates the preview iframes.\n				 */\n				function setupIframes( data ) {\n\n					var params = [\n						'receiver',\n						'progress=false',\n						'history=false',\n						'transition=none',\n						'autoSlide=0',\n						'backgroundTransition=none'\n					].join( '&' );\n\n					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;\n					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;\n\n					currentSlide = document.createElement( 'iframe' );\n					currentSlide.setAttribute( 'width', 1280 );\n					currentSlide.setAttribute( 'height', 1024 );\n					currentSlide.setAttribute( 'src', currentURL );\n					document.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n					upcomingSlide = document.createElement( 'iframe' );\n					upcomingSlide.setAttribute( 'width', 640 );\n					upcomingSlide.setAttribute( 'height', 512 );\n					upcomingSlide.setAttribute( 'src', upcomingURL );\n					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n				}\n\n				/**\n				 * Setup the notes UI.\n				 */\n				function setupNotes() {\n\n					notes = document.querySelector( '.speaker-controls-notes' );\n					notesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n				}\n\n				/**\n				 * We send out a heartbeat at all times to ensure we can\n				 * reconnect with the main presentation window after reloads.\n				 */\n				function setupHeartbeat() {\n\n					setInterval( () => {\n						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );\n					}, 1000 );\n\n				}\n\n				function getTimings( callback ) {\n\n					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n						callRevealApi( 'getConfig', [], function ( config ) {\n							var totalTime = config.totalTime;\n							var minTimePerSlide = config.minimumTimePerSlide || 0;\n							var defaultTiming = config.defaultTiming;\n							if ((defaultTiming == null) && (totalTime == null)) {\n								callback(null);\n								return;\n							}\n							// Setting totalTime overrides defaultTiming\n							if (totalTime) {\n								defaultTiming = 0;\n							}\n							var timings = [];\n							for ( var i in slideAttributes ) {\n								var slide = slideAttributes[ i ];\n								var timing = defaultTiming;\n								if( slide.hasOwnProperty( 'data-timing' )) {\n									var t = slide[ 'data-timing' ];\n									timing = parseInt(t);\n									if( isNaN(timing) ) {\n										console.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n										timing = defaultTiming;\n									}\n								}\n								timings.push(timing);\n							}\n							if ( totalTime ) {\n								// After we've allocated time to individual slides, we summarize it and\n								// subtract it from the total time\n								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n								// The remaining time is divided by the number of slides that have 0 seconds\n								// allocated at the moment, giving the average time-per-slide on the remaining slides\n								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n								// And now we replace every zero-value timing with that average\n								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n							}\n							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n							if ( slidesUnderMinimum ) {\n								message = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n								alert(message);\n							}\n							callback( timings );\n						} );\n					} );\n\n				}\n\n				/**\n				 * Return the number of seconds allocated for presenting\n				 * all slides up to and including this one.\n				 */\n				function getTimeAllocated( timings, callback ) {\n\n					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n						var allocated = 0;\n						for (var i in timings.slice(0, currentSlide + 1)) {\n							allocated += timings[i];\n						}\n						callback( allocated );\n					} );\n\n				}\n\n				/**\n				 * Create the timer and clock and start updating them\n				 * at an interval.\n				 */\n				function setupTimer() {\n\n					var start = new Date(),\n					timeEl = document.querySelector( '.speaker-controls-time' ),\n					clockEl = timeEl.querySelector( '.clock-value' ),\n					hoursEl = timeEl.querySelector( '.hours-value' ),\n					minutesEl = timeEl.querySelector( '.minutes-value' ),\n					secondsEl = timeEl.querySelector( '.seconds-value' ),\n					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n					pacingEl = timeEl.querySelector( '.pacing' ),\n					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n					var timings = null;\n					getTimings( function ( _timings ) {\n\n						timings = _timings;\n						if (_timings !== null) {\n							pacingTitleEl.style.removeProperty('display');\n							pacingEl.style.removeProperty('display');\n						}\n\n						// Update once directly\n						_updateTimer();\n\n						// Then update every second\n						setInterval( _updateTimer, 1000 );\n\n					} );\n\n\n					function _resetTimer() {\n\n						if (timings == null) {\n							start = new Date();\n							_updateTimer();\n						}\n						else {\n							// Reset timer to beginning of current slide\n							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n								var slideEndTiming = slideEndTimingSeconds * 1000;\n								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n									var currentSlideTiming = timings[currentSlide] * 1000;\n									var previousSlidesTiming = slideEndTiming - currentSlideTiming;\n									var now = new Date();\n									start = new Date(now.getTime() - previousSlidesTiming);\n									_updateTimer();\n								} );\n							} );\n						}\n\n					}\n\n					timeEl.addEventListener( 'click', function() {\n						_resetTimer();\n						return false;\n					} );\n\n					function _displayTime( hrEl, minEl, secEl, time) {\n\n						var sign = Math.sign(time) == -1 ? \"-\" : \"\";\n						time = Math.abs(Math.round(time / 1000));\n						var seconds = time % 60;\n						var minutes = Math.floor( time / 60 ) % 60 ;\n						var hours = Math.floor( time / ( 60 * 60 )) ;\n						hrEl.innerHTML = sign + zeroPadInteger( hours );\n						if (hours == 0) {\n							hrEl.classList.add( 'mute' );\n						}\n						else {\n							hrEl.classList.remove( 'mute' );\n						}\n						minEl.innerHTML = ':' + zeroPadInteger( minutes );\n						if (hours == 0 && minutes == 0) {\n							minEl.classList.add( 'mute' );\n						}\n						else {\n							minEl.classList.remove( 'mute' );\n						}\n						secEl.innerHTML = ':' + zeroPadInteger( seconds );\n					}\n\n					function _updateTimer() {\n\n						var diff, hours, minutes, seconds,\n						now = new Date();\n\n						diff = now.getTime() - start.getTime();\n\n						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n						_displayTime( hoursEl, minutesEl, secondsEl, diff );\n						if (timings !== null) {\n							_updatePacing(diff);\n						}\n\n					}\n\n					function _updatePacing(diff) {\n\n						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n							var slideEndTiming = slideEndTimingSeconds * 1000;\n\n							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n								var currentSlideTiming = timings[currentSlide] * 1000;\n								var timeLeftCurrentSlide = slideEndTiming - diff;\n								if (timeLeftCurrentSlide < 0) {\n									pacingEl.className = 'pacing behind';\n								}\n								else if (timeLeftCurrentSlide < currentSlideTiming) {\n									pacingEl.className = 'pacing on-track';\n								}\n								else {\n									pacingEl.className = 'pacing ahead';\n								}\n								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n							} );\n						} );\n					}\n\n				}\n\n				/**\n				 * Sets up the speaker view layout and layout selector.\n				 */\n				function setupLayout() {\n\n					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n					layoutLabel = document.querySelector( '.speaker-layout-label' );\n\n					// Render the list of available layouts\n					for( var id in SPEAKER_LAYOUTS ) {\n						var option = document.createElement( 'option' );\n						option.setAttribute( 'value', id );\n						option.textContent = SPEAKER_LAYOUTS[ id ];\n						layoutDropdown.appendChild( option );\n					}\n\n					// Monitor the dropdown for changes\n					layoutDropdown.addEventListener( 'change', function( event ) {\n\n						setLayout( layoutDropdown.value );\n\n					}, false );\n\n					// Restore any currently persisted layout\n					setLayout( getLayout() );\n\n				}\n\n				/**\n				 * Sets a new speaker view layout. The layout is persisted\n				 * in local storage.\n				 */\n				function setLayout( value ) {\n\n					var title = SPEAKER_LAYOUTS[ value ];\n\n					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n					layoutDropdown.value = value;\n\n					document.body.setAttribute( 'data-speaker-layout', value );\n\n					// Persist locally\n					if( supportsLocalStorage() ) {\n						window.localStorage.setItem( 'reveal-speaker-layout', value );\n					}\n\n				}\n\n				/**\n				 * Returns the ID of the most recently set speaker layout\n				 * or our default layout if none has been set.\n				 */\n				function getLayout() {\n\n					if( supportsLocalStorage() ) {\n						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n						if( layout ) {\n							return layout;\n						}\n					}\n\n					// Default to the first record in the layouts hash\n					for( var id in SPEAKER_LAYOUTS ) {\n						return id;\n					}\n\n				}\n\n				function supportsLocalStorage() {\n\n					try {\n						localStorage.setItem('test', 'test');\n						localStorage.removeItem('test');\n						return true;\n					}\n					catch( e ) {\n						return false;\n					}\n\n				}\n\n				function zeroPadInteger( num ) {\n\n					var str = '00' + parseInt( num );\n					return str.substring( str.length - 2 );\n\n				}\n\n				/**\n				 * Limits the frequency at which a function can be called.\n				 */\n				function debounce( fn, ms ) {\n\n					var lastTime = 0,\n						timeout;\n\n					return function() {\n\n						var args = arguments;\n						var context = this;\n\n						clearTimeout( timeout );\n\n						var timeSinceLastCall = Date.now() - lastTime;\n						if( timeSinceLastCall > ms ) {\n							fn.apply( context, args );\n							lastTime = Date.now();\n						}\n						else {\n							timeout = setTimeout( function() {\n								fn.apply( context, args );\n								lastTime = Date.now();\n							}, ms - timeSinceLastCall );\n						}\n\n					}\n\n				}\n\n			})();\n\n		<\/script>\n	</body>\n</html>"), !t) {
				alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");
				return;
			}
			a();
		}
	}
	function i(e) {
		t && !t.closed ? t.focus() : (t = e, window.addEventListener("message", l), u());
	}
	function a() {
		let r = n.getConfig().url, i = typeof r == "string" ? r : window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
		e = setInterval(function() {
			t.postMessage(JSON.stringify({
				namespace: "reveal-notes",
				type: "connect",
				state: n.getState(),
				url: i
			}), "*");
		}, 500), window.addEventListener("message", l);
	}
	function o(e, r, i) {
		let a = n[e].apply(n, r);
		t.postMessage(JSON.stringify({
			namespace: "reveal-notes",
			type: "return",
			result: a,
			callId: i
		}), "*");
	}
	function s(e) {
		let r = n.getCurrentSlide(), i = r.querySelectorAll("aside.notes"), a = r.querySelector(".current-fragment"), o = {
			namespace: "reveal-notes",
			type: "state",
			notes: "",
			markdown: !1,
			whitespace: "normal",
			state: n.getState()
		};
		if (r.hasAttribute("data-notes") && (o.notes = r.getAttribute("data-notes"), o.whitespace = "pre-wrap"), a) {
			let e = a.querySelector("aside.notes");
			e ? (o.notes = e.innerHTML, o.markdown = typeof e.getAttribute("data-markdown") == "string", i = null) : a.hasAttribute("data-notes") && (o.notes = a.getAttribute("data-notes"), o.whitespace = "pre-wrap", i = null);
		}
		i && i.length && (i = Array.from(i).filter((e) => e.closest(".fragment") === null), o.notes = i.map((e) => e.innerHTML).join("\n"), o.markdown = i[0] && typeof i[0].getAttribute("data-markdown") == "string"), t.postMessage(JSON.stringify(o), "*");
	}
	function c(e) {
		try {
			return window.location.origin === e.source.location.origin;
		} catch {
			return !1;
		}
	}
	function l(t) {
		if (c(t)) try {
			let n = JSON.parse(t.data);
			n && n.namespace === "reveal-notes" && n.type === "connected" ? (clearInterval(e), u()) : n && n.namespace === "reveal-notes" && n.type === "call" && o(n.methodName, n.arguments, n.callId);
		} catch {}
	}
	function u() {
		n.on("slidechanged", s), n.on("fragmentshown", s), n.on("fragmenthidden", s), n.on("overviewhidden", s), n.on("overviewshown", s), n.on("paused", s), n.on("resumed", s), n.on("previewiframe", s), n.on("previewimage", s), n.on("previewvideo", s), n.on("closeoverlay", s), s();
	}
	return {
		id: "notes",
		init: function(e) {
			n = e, /receiver/i.test(window.location.search) || (window.location.search.match(/(\?|\&)notes/gi) === null ? window.addEventListener("message", (e) => {
				if (!t && typeof e.data == "string") {
					let t;
					try {
						t = JSON.parse(e.data);
					} catch {}
					t && t.namespace === "reveal-notes" && t.type === "heartbeat" && i(e.source);
				}
			}) : r(), n.addKeyBinding({
				keyCode: 83,
				key: "S",
				description: "Speaker notes view"
			}, function() {
				r();
			}));
		},
		open: r
	};
}, Wi = 16 / 9, Gi = 67;
function Ki({ deck: e, enabled: t, onToggle: n }) {
	e.removeKeyBinding(Gi), t && e.addKeyBinding({
		keyCode: Gi,
		key: "C",
		description: "Toggle code editor"
	}, n);
}
function qi(e) {
	let t = e.getSlidesElement();
	if (t) for (let e of t.querySelectorAll("section.stack[data-previous-indexv]")) e.removeAttribute("data-previous-indexv");
}
var Ji = /* @__PURE__ */ new Set([
	" ",
	"Spacebar",
	"ArrowRight",
	"ArrowDown",
	"PageDown"
]), Yi = /* @__PURE__ */ new Set([
	"ArrowLeft",
	"ArrowUp",
	"PageUp"
]);
function Xi(e) {
	return Ji.has(e.key) ? 1 : Yi.has(e.key) ? -1 : 0;
}
function Zi(e) {
	let t = (0, N.c)(4), n;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
		width: 960,
		height: 540
	}, t[0] = n) : n = t[0];
	let [r, i] = (0, M.useState)(n), a, o;
	return t[1] === e ? (a = t[2], o = t[3]) : (a = () => {
		let t = e.current;
		if (!t) return;
		let n = new ResizeObserver((e) => {
			let { width: t, height: n } = e[0].contentRect;
			if (t <= 0 || n <= 0) return;
			let r = Math.min(t, n * Wi), a = r / Wi;
			i({
				width: Math.round(r),
				height: Math.round(a)
			});
		});
		return n.observe(t), () => n.disconnect();
	}, o = [e], t[1] = e, t[2] = a, t[3] = o), (0, M.useEffect)(a, o), r;
}
var Qi = (e) => {
	let t = (0, N.c)(6), { text: n } = e, r, i;
	if (t[0] !== n) {
		let e = n.split("\n");
		r = "notes", i = e.map((t, n) => {
			let r = n === e.length - 1;
			return t === "---" ? /* @__PURE__ */ (0, G.jsx)("hr", {}, n) : /* @__PURE__ */ (0, G.jsxs)(M.Fragment, { children: [t, !r && /* @__PURE__ */ (0, G.jsx)("br", {})] }, n);
		}), t[0] = n, t[1] = r, t[2] = i;
	} else r = t[1], i = t[2];
	let a;
	return t[3] !== r || t[4] !== i ? (a = /* @__PURE__ */ (0, G.jsx)("aside", {
		className: r,
		children: i
	}), t[3] = r, t[4] = i, t[5] = a) : a = t[5], a;
};
function $i(e) {
	let { cells: t, cellId: n, showCodeOverrides: r, codeAvailable: i } = e;
	return n == null || !i ? !1 : (t.get(n)?.showCode ?? !1) || r.has(n);
}
function ea(e) {
	let { cell: t, noOutputIds: n, heldEditCellId: r, slideConfigs: i } = e;
	return n.has(t.id) || t.id === r ? "skip" : i.get(t.id)?.type ?? "slide";
}
function ta(e) {
	let t = (0, N.c)(15), { activeCell: n, slideConfigs: r, noOutputIds: i } = e, a = n?.id ?? null, o;
	t[0] !== n || t[1] !== i ? (o = n != null && i.has(n.id), t[0] = n, t[1] = i, t[2] = o) : o = t[2];
	let s = o, c = n != null && r.get(n.id)?.type === "skip" || s, l;
	t[3] === a ? l = t[4] : (l = {
		activeCellId: a,
		cellId: null
	}, t[3] = a, t[4] = l);
	let [u, d] = (0, M.useState)(l), f = u.cellId;
	u.activeCellId === a ? s && f !== a && (f = a, d({
		activeCellId: a,
		cellId: f
	})) : (f = s ? a : null, d({
		activeCellId: a,
		cellId: f
	}));
	let p = !c && a != null && f === a, m = p ? f : null, h;
	t[5] === m ? h = t[6] : (h = {
		cellId: m,
		show: !0
	}, t[5] = m, t[6] = h);
	let [g, _] = (0, M.useState)(h), v = g.show;
	g.cellId !== m && (v = !0, _({
		cellId: m,
		show: !0
	}));
	let y;
	t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = () => _(na), t[7] = y) : y = t[7];
	let b = D(y), x = c || p ? n ?? null : null, S;
	return t[8] !== m || t[9] !== v || t[10] !== p || t[11] !== s || t[12] !== x || t[13] !== b ? (S = {
		parkedPreviewCell: x,
		isHeldEdit: p,
		isNoOutputPreview: s,
		heldEditCellId: m,
		heldShowsCode: v,
		toggleHeldShowsCode: b
	}, t[8] = m, t[9] = v, t[10] = p, t[11] = s, t[12] = x, t[13] = b, t[14] = S) : S = t[14], S;
}
function na(e) {
	return {
		...e,
		show: !e.show
	};
}
function ra(e) {
	switch (e ?? "center") {
		case "top": return { margin: "0 20px auto" };
		case "bottom": return { margin: "auto 20px 0" };
		default: return { margin: "auto 20px" };
	}
}
var ia = (e) => {
	let t = (0, N.c)(13), { cell: n } = e, r;
	t[0] !== n.id || t[1] !== n.name ? (r = x(n.id, n.name), t[0] = n.id, t[1] = n.name, t[2] = r) : r = t[2];
	let i = n.id, a = n.status, o = n.output, s;
	t[3] === n ? s = t[4] : (s = u(n, !1), t[3] = n, t[4] = s);
	let c;
	t[5] !== n.id || t[6] !== n.output || t[7] !== n.status || t[8] !== s ? (c = /* @__PURE__ */ (0, G.jsx)(S, {
		cellId: i,
		status: a,
		output: o,
		stale: s
	}), t[5] = n.id, t[6] = n.output, t[7] = n.status, t[8] = s, t[9] = c) : c = t[9];
	let l;
	return t[10] !== r || t[11] !== c ? (l = /* @__PURE__ */ (0, G.jsx)("div", {
		className: "flex flex-col",
		...r,
		children: c
	}), t[10] = r, t[11] = c, t[12] = l) : l = t[12], l;
}, aa = (e) => {
	let t = (0, N.c)(24), { subslide: n, resolveShowCode: r, isEditable: i, slideConfigs: a, contentStyle: o } = e, s, c, l, u, d, f;
	if (t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== a || t[4] !== n) {
		let { slideLevel: e, cumulativeByBlock: p } = hr(n, a);
		l = e;
		let m = n.blocks.some((e) => e.cells.some((e) => r(e.id)));
		c = K, s = tr, u = m ? "mo-slide-content flex flex-col gap-3" : "mo-slide-content", d = o, f = n.blocks.map((e, t) => {
			let n = e.cells.map((e) => r(e.id) ? i ? /* @__PURE__ */ (0, G.jsx)(cr, { cell: e }, e.id) : /* @__PURE__ */ (0, G.jsx)(lr, { cell: e }, e.id) : /* @__PURE__ */ (0, G.jsx)(ia, { cell: e }, e.id));
			if (e.isFragment) {
				let e = p.get(t);
				return /* @__PURE__ */ (0, G.jsxs)(Jn, {
					as: "div",
					children: [n, e && /* @__PURE__ */ (0, G.jsx)(Qi, { text: e })]
				}, t);
			}
			return /* @__PURE__ */ (0, G.jsx)(M.Fragment, { children: n }, t);
		}), t[0] = o, t[1] = i, t[2] = r, t[3] = a, t[4] = n, t[5] = s, t[6] = c, t[7] = l, t[8] = u, t[9] = d, t[10] = f;
	} else s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10];
	let p;
	t[11] !== u || t[12] !== d || t[13] !== f ? (p = /* @__PURE__ */ (0, G.jsx)("div", {
		className: u,
		style: d,
		children: f
	}), t[11] = u, t[12] = d, t[13] = f, t[14] = p) : p = t[14];
	let m;
	t[15] !== s || t[16] !== p ? (m = /* @__PURE__ */ (0, G.jsx)(s, { children: p }), t[15] = s, t[16] = p, t[17] = m) : m = t[17];
	let h;
	t[18] === l ? h = t[19] : (h = l && /* @__PURE__ */ (0, G.jsx)(Qi, { text: l }), t[18] = l, t[19] = h);
	let g;
	return t[20] !== c || t[21] !== m || t[22] !== h ? (g = /* @__PURE__ */ (0, G.jsxs)(c, { children: [m, h] }), t[20] = c, t[21] = m, t[22] = h, t[23] = g) : g = t[23], g;
};
function oa(e) {
	let { isNoOutputPreview: t, isEditable: n, showCode: r } = e;
	return t && n || r;
}
var sa = (e) => {
	let t = (0, N.c)(5), { cell: n, isNoOutputPreview: r, isEditable: i, showCode: a } = e;
	if (oa({
		isNoOutputPreview: r,
		isEditable: i,
		showCode: a
	})) {
		let e;
		return t[0] !== n || t[1] !== i ? (e = i ? /* @__PURE__ */ (0, G.jsx)(cr, { cell: n }) : /* @__PURE__ */ (0, G.jsx)(lr, { cell: n }), t[0] = n, t[1] = i, t[2] = e) : e = t[2], e;
	}
	let o;
	return t[3] === n ? o = t[4] : (o = /* @__PURE__ */ (0, G.jsx)(ia, { cell: n }), t[3] = n, t[4] = o), o;
}, ca = (e) => {
	let n = (0, N.c)(160), { slideCells: o, layout: s, setLayout: c, noOutputIds: u, activeIndex: x, onSlideChange: S, mode: C, configWidth: ee, isEditable: T } = e, j = T !== void 0 && T, re = (0, M.useRef)(null), P = (0, M.useRef)(null), { width: ie, height: ae } = Zi(re), oe = E() != null, F = O(w), I = O(te).kind, se = O(A), ce = I !== "wasm" || se, L;
	n[0] !== F || n[1] !== I ? (L = F || !h(I) ? [] : [Ui], n[0] = F, n[1] = I, n[2] = L) : L = n[2];
	let le = L, [ue, de] = (0, M.useState)(la), fe = ne(o), pe;
	n[3] === fe ? pe = n[4] : (pe = !k() && fe, n[3] = fe, n[4] = pe);
	let me = pe, he;
	n[5] === F ? he = n[6] : (he = b(F, window.location.search), n[5] = F, n[6] = he);
	let R = !he && me, ge = x == null ? void 0 : o[x], _e;
	n[7] !== ge || n[8] !== o ? (_e = ge ?? o.at(0), n[7] = ge, n[8] = o, n[9] = _e) : _e = n[9];
	let ve = _e, ye;
	n[10] !== ge || n[11] !== s.cells || n[12] !== u ? (ye = {
		activeCell: ge,
		slideConfigs: s.cells,
		noOutputIds: u
	}, n[10] = ge, n[11] = s.cells, n[12] = u, n[13] = ye) : ye = n[13];
	let { parkedPreviewCell: z, isHeldEdit: be, isNoOutputPreview: B, heldEditCellId: xe, heldShowsCode: Se, toggleHeldShowsCode: Ce } = ta(ye), we;
	n[14] !== me || n[15] !== s.cells || n[16] !== ue ? (we = (e) => $i({
		cells: s.cells,
		cellId: e,
		showCodeOverrides: ue,
		codeAvailable: me
	}), n[14] = me, n[15] = s.cells, n[16] = ue, n[17] = we) : we = n[17];
	let Te = we, V = ge?.id ?? ve?.id, Ee;
	n[18] !== V || n[19] !== Se || n[20] !== be || n[21] !== Te ? (Ee = be ? Se : Te(V), n[18] = V, n[19] = Se, n[20] = be, n[21] = Te, n[22] = Ee) : Ee = n[22];
	let De = Ee, Oe;
	n[23] !== V || n[24] !== me || n[25] !== s.cells ? (Oe = me && V != null && (s.cells.get(V)?.showCode ?? !1), n[23] = V, n[24] = me, n[25] = s.cells, n[26] = Oe) : Oe = n[26];
	let ke = Oe, Ae;
	n[27] !== xe || n[28] !== s.cells || n[29] !== u ? (Ae = (e) => ea({
		cell: e,
		noOutputIds: u,
		heldEditCellId: xe,
		slideConfigs: s.cells
	}), n[27] = xe, n[28] = s.cells, n[29] = u, n[30] = Ae) : Ae = n[30];
	let je;
	n[31] !== o || n[32] !== Ae ? (je = nr({
		cells: o,
		getType: Ae
	}), n[31] = o, n[32] = Ae, n[33] = je) : je = n[33];
	let Me = je, Ne;
	n[34] !== Me || n[35] !== o ? (Ne = rr({
		composition: Me,
		cells: o,
		getId: ua
	}), n[34] = Me, n[35] = o, n[36] = Ne) : Ne = n[36];
	let { cellToTarget: Pe, targetToCellIndex: Fe } = Ne, Ie = s.deck?.transition ?? "slide", Le = s.deck?.verticalAlign, Re;
	n[37] === Le ? Re = n[38] : (Re = ra(Le), n[37] = Le, n[38] = Re);
	let ze = Re, Be;
	n[39] === Symbol.for("react.memo_cache_sentinel") ? (Be = v(window.location.href), n[39] = Be) : Be = n[39];
	let Ve = Be, H;
	n[40] !== Ie || n[41] !== ae || n[42] !== ie ? (H = {
		embedded: !0,
		width: ie,
		height: ae,
		center: !1,
		minScale: .2,
		maxScale: 2,
		transition: Ie,
		keyboardCondition: da,
		url: Ve,
		scrollActivationWidth: 0
	}, n[40] = Ie, n[41] = ae, n[42] = ie, n[43] = H) : H = n[43];
	let U = H, He;
	n[44] !== x || n[45] !== ce || n[46] !== Pe || n[47] !== o ? (He = (e) => {
		if (x == null && window.location.hash.startsWith("#/")) {
			if (!ce) return;
			window.dispatchEvent(new HashChangeEvent("hashchange")), qi(e);
			return;
		}
		let t = or({
			activeIndex: x,
			cells: o,
			cellToTarget: Pe,
			getId: fa
		}), n = t && sr(e.getIndices(), t);
		n && (e.slide(n.h, n.v, n.f), qi(e));
	}, n[44] = x, n[45] = ce, n[46] = Pe, n[47] = o, n[48] = He) : He = n[48];
	let Ue = D(He), We;
	n[49] === Ue ? We = n[50] : (We = () => {
		let e = P.current;
		e != null && Ue(e);
	}, n[49] = Ue, n[50] = We);
	let Ge;
	n[51] !== x || n[52] !== ce || n[53] !== Pe || n[54] !== Ue || n[55] !== o ? (Ge = [
		x,
		ce,
		Pe,
		o,
		Ue
	], n[51] = x, n[52] = ce, n[53] = Pe, n[54] = Ue, n[55] = o, n[56] = Ge) : Ge = n[56], (0, M.useEffect)(We, Ge);
	let Ke;
	n[57] !== V || n[58] !== ke || n[59] !== be || n[60] !== Ce ? (Ke = () => {
		if (!(V == null || ke)) {
			if (be) {
				Ce();
				return;
			}
			(0, M.startTransition)(() => de((e) => {
				let t = new Set(e);
				return t.has(V) ? t.delete(V) : t.add(V), t;
			}));
		}
	}, n[57] = V, n[58] = ke, n[59] = be, n[60] = Ce, n[61] = Ke) : Ke = n[61];
	let qe = D(Ke), Je, Ye;
	n[62] !== R || n[63] !== qe ? (Je = () => {
		let e = P.current;
		return e && Ki({
			deck: e,
			enabled: R,
			onToggle: qe
		}), () => {
			P.current?.removeKeyBinding(Gi);
		};
	}, Ye = [R, qe], n[62] = R, n[63] = qe, n[64] = Je, n[65] = Ye) : (Je = n[64], Ye = n[65]), (0, M.useEffect)(Je, Ye);
	let Xe;
	n[66] !== S || n[67] !== z || n[68] !== Fe ? (Xe = (e) => {
		if (z != null) return;
		let t = ir(Fe, e.getIndices());
		t != null && S?.(t);
	}, n[66] = S, n[67] = z, n[68] = Fe, n[69] = Xe) : Xe = n[69];
	let Ze = D(Xe), Qe;
	n[70] === Ze ? Qe = n[71] : (Qe = () => {
		let e = P.current;
		e && Ze(e);
	}, n[70] = Ze, n[71] = Qe);
	let $e = D(Qe), et;
	n[72] !== ce || n[73] !== R || n[74] !== Ue || n[75] !== Ze || n[76] !== qe ? (et = (e) => {
		Ue(e), ce && Ze(e), Ki({
			deck: e,
			enabled: R,
			onToggle: qe
		});
		let t = e.getSlidesElement()?.closest(".reveal");
		t instanceof HTMLElement && (t.tabIndex = -1, t.focus({ preventScroll: !0 }));
	}, n[72] = ce, n[73] = R, n[74] = Ue, n[75] = Ze, n[76] = qe, n[77] = et) : et = n[77];
	let tt = D(et), nt;
	n[78] !== x || n[79] !== S || n[80] !== z || n[81] !== o ? (nt = (e) => {
		if (!z || x == null || i.fromInput(e)) return;
		let t = Xi(e);
		if (t === 0) return;
		e.preventDefault(), e.stopPropagation();
		let n = x + t;
		n < 0 || n >= o.length || S?.(n);
	}, n[78] = x, n[79] = S, n[80] = z, n[81] = o, n[82] = nt) : nt = n[82];
	let rt = D(nt), it;
	n[83] === $e ? it = n[84] : (it = () => {
		$e();
	}, n[83] = $e, n[84] = it);
	let at = D(it), W;
	n[85] === Symbol.for("react.memo_cache_sentinel") ? (W = { capture: !0 }, n[85] = W) : W = n[85], t(document, "keydown", rt, W);
	let ot = be ? null : B ? "Hidden as there is no output" : "Skipped in presentation", st;
	n[86] !== Se || n[87] !== be || n[88] !== z?.id || n[89] !== Te ? (st = be ? Se : Te(z?.id), n[86] = Se, n[87] = be, n[88] = z?.id, n[89] = Te, n[90] = st) : st = n[90];
	let ct = st, lt;
	n[91] !== j || n[92] !== B || n[93] !== ct ? (lt = oa({
		isNoOutputPreview: B,
		isEditable: j,
		showCode: ct
	}), n[91] = j, n[92] = B, n[93] = ct, n[94] = lt) : lt = n[94];
	let ut = lt, dt;
	n[95] !== ae || n[96] !== ie ? (dt = {
		width: ie,
		height: ae
	}, n[95] = ae, n[96] = ie, n[97] = dt) : dt = n[97];
	let ft;
	if (n[98] !== Me.stacks || n[99] !== j || n[100] !== s.cells || n[101] !== Te || n[102] !== ze) {
		let e;
		n[104] !== j || n[105] !== s.cells || n[106] !== Te || n[107] !== ze ? (e = (e, t) => e.subslides.length === 1 ? /* @__PURE__ */ (0, G.jsx)(aa, {
			subslide: e.subslides[0],
			resolveShowCode: Te,
			isEditable: j,
			slideConfigs: s.cells,
			contentStyle: ze
		}, t) : /* @__PURE__ */ (0, G.jsx)(vt, { children: e.subslides.map((e, t) => /* @__PURE__ */ (0, G.jsx)(aa, {
			subslide: e,
			resolveShowCode: Te,
			isEditable: j,
			slideConfigs: s.cells,
			contentStyle: ze
		}, t)) }, t), n[104] = j, n[105] = s.cells, n[106] = Te, n[107] = ze, n[108] = e) : e = n[108], ft = Me.stacks.map(e), n[98] = Me.stacks, n[99] = j, n[100] = s.cells, n[101] = Te, n[102] = ze, n[103] = ft;
	} else ft = n[103];
	let pt;
	n[109] !== le || n[110] !== tt || n[111] !== at || n[112] !== $e || n[113] !== U || n[114] !== ft ? (pt = /* @__PURE__ */ (0, G.jsx)(mt, {
		deckRef: P,
		className: "aspect-video w-full overflow-hidden border rounded bg-background mo-slides-theme prose-slides focus:outline-hidden focus-visible:outline-hidden",
		config: U,
		onReady: tt,
		onSlideChange: at,
		onFragmentShown: $e,
		onFragmentHidden: $e,
		plugins: le,
		children: ft
	}), n[109] = le, n[110] = tt, n[111] = at, n[112] = $e, n[113] = U, n[114] = ft, n[115] = pt) : pt = n[115];
	let ht;
	n[116] !== j || n[117] !== B || n[118] !== z || n[119] !== ot || n[120] !== ct || n[121] !== ut || n[122] !== ze ? (ht = z && /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "absolute inset-0 z-10 border rounded bg-background flex flex-col overflow-hidden",
		"aria-label": ot ?? void 0,
		children: [ot && /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground border-b bg-muted/40",
			children: [/* @__PURE__ */ (0, G.jsx)(m, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, G.jsx)("span", { children: ot })]
		}), /* @__PURE__ */ (0, G.jsx)("div", {
			className: "flex-1 overflow-auto flex",
			children: /* @__PURE__ */ (0, G.jsx)("div", {
				className: ut ? "mo-slide-content flex flex-col gap-3" : "mo-slide-content",
				style: ze,
				children: /* @__PURE__ */ (0, G.jsx)(sa, {
					cell: z,
					isNoOutputPreview: B,
					isEditable: j,
					showCode: ct
				})
			})
		})]
	}, z.id), n[116] = j, n[117] = B, n[118] = z, n[119] = ot, n[120] = ct, n[121] = ut, n[122] = ze, n[123] = ht) : ht = n[123];
	let gt;
	n[124] !== De || n[125] !== ke || n[126] !== R || n[127] !== qe ? (gt = R && /* @__PURE__ */ (0, G.jsx)(l, {
		content: ke ? "Code is always shown for this slide" : De ? "Hide code (C)" : "Show code (C)",
		children: /* @__PURE__ */ (0, G.jsx)(a, {
			"data-testid": "marimo-plugin-slides-toggle-code",
			variant: "ghost",
			size: "icon",
			className: r("text-muted-foreground h-7 w-7", De && "text-foreground bg-muted", ke && "opacity-50 cursor-not-allowed"),
			"aria-pressed": De,
			"aria-disabled": ke,
			"aria-label": ke ? "Code always shown" : De ? "Hide code" : "Show code",
			onClick: qe,
			children: /* @__PURE__ */ (0, G.jsx)(_, { className: "h-4 w-4" })
		})
	}), n[124] = De, n[125] = ke, n[126] = R, n[127] = qe, n[128] = gt) : gt = n[128];
	let _t;
	n[129] === Symbol.for("react.memo_cache_sentinel") ? (_t = /* @__PURE__ */ (0, G.jsx)(l, {
		content: "Fullscreen (F)",
		children: /* @__PURE__ */ (0, G.jsx)(a, {
			"data-testid": "marimo-plugin-slides-fullscreen",
			variant: "ghost",
			size: "icon",
			className: "text-muted-foreground h-7 w-7",
			"aria-label": "Enter fullscreen",
			onClick: () => {
				P.current?.getViewportElement()?.requestFullscreen().catch(pa);
			},
			children: /* @__PURE__ */ (0, G.jsx)(y, { className: "h-4 w-4" })
		})
	}), n[129] = _t) : _t = n[129];
	let K;
	n[130] === gt ? K = n[131] : (K = /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-70 text-muted-foreground transition-opacity",
		children: [gt, _t]
	}), n[130] = gt, n[131] = K);
	let yt;
	n[132] !== dt || n[133] !== pt || n[134] !== ht || n[135] !== K ? (yt = /* @__PURE__ */ (0, G.jsx)("div", {
		ref: re,
		className: "h-full w-full min-w-0 flex items-center justify-center overflow-hidden",
		children: /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "group relative",
			style: dt,
			children: [
				pt,
				ht,
				K
			]
		})
	}), n[132] = dt, n[133] = pt, n[134] = ht, n[135] = K, n[136] = yt) : yt = n[136];
	let q = yt;
	if (C === "read") {
		let e;
		return n[137] === q ? e = n[138] : (e = /* @__PURE__ */ (0, G.jsx)("div", {
			className: "flex-1 min-w-0 flex flex-row gap-3",
			children: q
		}), n[137] = q, n[138] = e), e;
	}
	let bt;
	n[139] === q ? bt = n[140] : (bt = /* @__PURE__ */ (0, G.jsx)(p, {
		defaultSize: 92,
		minSize: 60,
		children: q
	}), n[139] = q, n[140] = bt);
	let xt;
	n[141] === Symbol.for("react.memo_cache_sentinel") ? (xt = {
		coarse: 12,
		fine: 4
	}, n[141] = xt) : xt = n[141];
	let J;
	n[142] === oe ? J = n[143] : (J = /* @__PURE__ */ (0, G.jsx)(d, {
		className: "mo-slides-notes-resize",
		hitAreaMargins: xt,
		disabled: oe
	}), n[142] = oe, n[143] = J);
	let St = ve?.id, Y;
	n[144] !== s || n[145] !== c || n[146] !== St ? (Y = /* @__PURE__ */ (0, G.jsx)(p, {
		defaultSize: 10,
		minSize: 4,
		collapsible: !0,
		collapsedSize: 4,
		children: /* @__PURE__ */ (0, G.jsx)(dr, {
			layout: s,
			setLayout: c,
			cellId: St
		})
	}), n[144] = s, n[145] = c, n[146] = St, n[147] = Y) : Y = n[147];
	let Ct;
	n[148] !== bt || n[149] !== J || n[150] !== Y ? (Ct = /* @__PURE__ */ (0, G.jsxs)(f, {
		direction: "vertical",
		autoSaveId: "marimo:slides:notes-panel",
		className: "flex-1 min-w-0",
		children: [
			bt,
			J,
			Y
		]
	}), n[148] = bt, n[149] = J, n[150] = Y, n[151] = Ct) : Ct = n[151];
	let wt;
	n[152] !== ve || n[153] !== ee || n[154] !== s || n[155] !== c ? (wt = /* @__PURE__ */ (0, G.jsx)(g, {
		configWidth: ee,
		layout: s,
		setLayout: c,
		activeConfigCell: ve
	}), n[152] = ve, n[153] = ee, n[154] = s, n[155] = c, n[156] = wt) : wt = n[156];
	let Tt;
	return n[157] !== Ct || n[158] !== wt ? (Tt = /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex-1 min-w-0 flex flex-row gap-3",
		children: [Ct, wt]
	}), n[157] = Ct, n[158] = wt, n[159] = Tt) : Tt = n[159], Tt;
};
function la() {
	return /* @__PURE__ */ new Set();
}
function ua(e) {
	return e.id;
}
function da(e) {
	return !i.fromInput(e);
}
function fa(e) {
	return e.id;
}
function pa(e) {
	n.error("Failed to request fullscreen", e);
}
//#endregion
export { ia as CellOutputBlock, ea as deckSlideType, ca as default, oa as parkedRendersSource, $i as shouldShowCode, Ki as syncCodeToggleKeyBinding, ta as useParkedPreview };
