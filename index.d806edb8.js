function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire5e9d;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire5e9d=o),(0,o.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.d806edb8.js","8u2Ue","icon-plus.ac7fc361.svg","2XIdW","icon-minus.a78854a9.svg"]'));var i={};i=new URL("icon-plus.ac7fc361.svg",import.meta.url).toString();var s={};s=new URL("icon-minus.a78854a9.svg",import.meta.url).toString();const l=document.querySelectorAll(".faq__item"),a=document.querySelector(".faq__list"),c=t=>{let r=t.querySelector(".faq__answer");t.querySelector(".faq__icon").src=r.classList.contains("show")?e(i):e(s),r.classList.toggle("show"),l.forEach(r=>{let n=r.querySelector(".faq__answer"),o=r.querySelector(".faq__icon");r!==t&&(n.classList.remove("show"),o.src=e(i))})};a.addEventListener("click",e=>{let t=e.target.closest(".faq__item");t&&c(t)}),a.addEventListener("keydown",e=>{let t=document.activeElement.closest(".faq__item");if(t)switch(e.key){case"Enter":case" ":e.preventDefault(),c(t);break;case"ArrowDown":e.preventDefault();let r=t.nextElementSibling;r&&r.focus();break;case"ArrowUp":e.preventDefault();let n=t.previousElementSibling;n&&n.focus()}}),l.forEach(e=>{e.setAttribute("tabindex","0"),e.setAttribute("role","button")});
//# sourceMappingURL=index.d806edb8.js.map