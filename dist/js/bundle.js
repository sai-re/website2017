!function e(o,t,n){function r(l,c){if(!t[l]){if(!o[l]){var u="function"==typeof require&&require;if(!c&&u)return u(l,!0);if(a)return a(l,!0);var i=new Error("Cannot find module '"+l+"'");throw i.code="MODULE_NOT_FOUND",i}var s=t[l]={exports:{}};o[l][0].call(s.exports,(function(e){return r(o[l][1][e]||e)}),s,s.exports,e,o,t,n)}return t[l].exports}for(var a="function"==typeof require&&require,l=0;l<n.length;l++)r(n[l]);return r}({1:[function(e,o,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={variables:{icons:document.querySelectorAll(".icon"),items:document.querySelectorAll(".randCol"),projectButtons:document.querySelectorAll(".projects__button-text")},init:function(){var e=this;n=this.variables;var o=[{colour:"#EB9532"},{colour:"#1E8BC3"},{colour:"#EC644B"},{colour:"#4DAF7C"}],t=o[Math.floor(Math.random()*o.length)].colour;window.onload=function(){e.changeColours(t),e.changeSvgColour(n.icons,t),e.insertCss(".header::before","background",t),e.insertCss(".header-gallery","background",t),document.documentElement.clientWidth<900&&e.insertCss(".header","background",t)}},changeColours:function(e){n.items.forEach((function(o){return o.style.backgroundColor=e})),n.projectButtons.forEach((function(o){return o.style.color=e}))},changeSvgColour:function(e,o){e.forEach((function(e){e.contentDocument.querySelectorAll(".svgInternalID").forEach((function(e){return e.setAttribute("fill",o)}))}))},insertCss:function(e,o,t){var n="".concat(e," {").concat(o,":").concat(t,"}"),r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n)),r.appendChild(a)}};t.default=r},{}],2:[function(e,o,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={variables:{hamburger:document.querySelector(".hamburger"),nav:document.querySelector(".header__nav"),navLinks:document.querySelectorAll(".header__nav-link"),body:document.getElementsByTagName("body")},init:function(){n=this.variables,this.mobileNav()},mobileNav:function(){n.hamburger.addEventListener("click",(function(){n.nav.style.display&&"none"!=n.nav.style.display?(n.hamburger.classList.remove("is-active"),n.nav.style.display="none",n.body[0].style.overflow="visible"):(n.hamburger.classList.add("is-active"),n.nav.style.display="block",n.body[0].style.overflow="hidden")}))}};t.default=r},{}],3:[function(e,o,t){"use strict";function n(e){throw new Error('"'+e+'" is read-only')}var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={variables:{nav:document.querySelector(".header__nav"),navLinks:document.querySelectorAll(".header__nav-link"),backToTop:document.querySelector(".contact__link"),arrowDown:document.getElementById("arrow-down"),hamburger:document.querySelector(".hamburger")},init:function(){r=this.variables,this.scrollTo(r.navLinks[3],"contact"),r.arrowDown&&this.scrollTo(r.arrowDown,"bio"),this.scrollTo(r.backToTop,"header"),this.scrollTo(r.backToTop,"header-gallery")},smoothScroll:function(e){var o,t=(window.pageYOffset?o=window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?o=document.documentElement.scrollTop:document.body&&(o=document.body.scrollTop),o),r=function(e){for(var o=document.getElementById(e),t=o.offsetTop,r=o;r.offsetParent&&r.offsetParent!=document.body;)n("node"),t+=(r=r.offsetParent).offsetTop;return t}(e),a=r>t?r-t:t-r,l=Math.round(a/50);if(a<100)this.scrollTo(0,r);else{l>=20&&(l=20);var c=Math.round(a/25),u=r>t?t+c:t-c,i=0;if(r>t)for(var s=t;s<r;s+=c)setTimeout("window.scrollTo(0, "+u+")",i*l),(u+=c)>r&&(u=r),i++;for(var d=t;d>r;d-=c)setTimeout("window.scrollTo(0, "+u+")",i*l),(u-=c)<r&&(u=r),i++}},scrollTo:function(e,o){var t=this;e.addEventListener("click",(function(){t.smoothScroll(o),window.screen.width<1200&&(r.nav.style.display="none",r.hamburger.classList.remove("is-active")),event.preventDefault(),event.stopPropagation()}))}};t.default=a},{}],4:[function(e,o,t){"use strict";var n=l(e("./Nav")),r=l(e("./Colours")),a=l(e("./Scroll"));function l(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",(function(e){a.default.init(),n.default.init(),r.default.init()}))},{"./Colours":1,"./Nav":2,"./Scroll":3}]},{},[4]);
//# sourceMappingURL=bundle.js.map
