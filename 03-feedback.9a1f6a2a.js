function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return s.Date.now()};function g(t,e,n){var o,r,i,f,a,u,c=0,s=!1,l=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function h(t){return c=t,a=setTimeout(w,e),s?b(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||l&&t-c>=i}function w(){var t=m();if(j(t))return O(t);a=setTimeout(w,function(t){var n=e-(t-u);return l?v(n,i-(t-c)):n}(t))}function O(t){return a=void 0,g&&o?b(t):(o=r=void 0,f)}function T(){var t=m(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return h(u);if(l)return a=setTimeout(w,e),b(u)}return void 0===a&&(a=setTimeout(w,e)),f}return e=y(e)||0,p(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:O(m())},T}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t(e)((function(t){const e=t.target;h[e.name]=e.value,function(t,e){try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error(t.message)}}("feedback-form-state",h)}),500)),b.addEventListener("submit",(function(t){t.preventDefault(),t.target.reset(),localStorage.removeItem("feedback-form-state"),console.log(h)})),window.addEventListener("DOMContentLoaded",(function(){const t=function(t){try{const e=localStorage.getItem(t),n=JSON.parse(e);return null===n?void 0:n}catch(t){return void console.error(t.message)}}("feedback-form-state");if(void 0===t)return;const e=Object.keys(t);for(const n of e){const e=t[n];h[n]=e,b.elements[n].value=e}}));const h={email:"",message:""};
//# sourceMappingURL=03-feedback.9a1f6a2a.js.map