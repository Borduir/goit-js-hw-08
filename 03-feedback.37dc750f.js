!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),d?p(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=g();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=i=void 0,a)}function F(){var e=g(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),F.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},F.flush=function(){return void 0===f?a:w(g())},F}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector("form"),h=document.querySelector("[name=email]"),O=document.querySelector("[name=message]");currentForm={mail:"",mes:""};try{savedForm=JSON.parse(localStorage.getItem("feedback-form-state")),h.value=savedForm.mail,O.value=savedForm.mes}catch(e){}j.addEventListener("input",e(t)((function(){currentForm.mail=h.value,currentForm.mes=O.value,localStorage.setItem("feedback-form-state",JSON.stringify(currentForm)),console.log(localStorage)}),500)),j.addEventListener("submit",(function(){console.log("curretForm"),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.37dc750f.js.map
