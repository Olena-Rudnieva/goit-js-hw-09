!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");i("h6c0i"),i("fivgP"),i("3xhau"),i("7rQOT"),i("gqlUR");var u=document.querySelector(".form button"),a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function l(){return a.value}function f(){return c.value}function s(){return d.value}function p(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.addEventListener("input",l),d.addEventListener("input",s),c.addEventListener("input",f),u.addEventListener("click",(function(){var n=s(),t=l(),o=f();setTimeout((function(){for(var t=1;t<=n;t+=1)p(t,o*t).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),t)}))}();
//# sourceMappingURL=03-promises.df02afa2.js.map
