!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=l||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),s?b(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function O(){var e=y();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return m?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,d&&r?b(e):(r=i=void 0,u)}function F(){var e=y(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(m)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,p(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),F.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},F.flush=function(){return void 0===f?u:w(y())},F}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})},form=document.querySelector(".feedback-form"),email=document.querySelector("[name=email]"),message=document.querySelector("[name=message]"),currentForm={mail:"",mes:""};try{savedForm=JSON.parse(localStorage.getItem("feedback-form-state")),email.value=savedForm.mail,message.value=savedForm.mes}catch(e){}form.addEventListener("input",e(t)((function(){currentForm.mail=email.value,currentForm.mes=message.value,localStorage.setItem("feedback-form-state",JSON.stringify(currentForm)),console.log(localStorage)}),500)),form.addEventListener("submit",(function(){console.log("curretForm"),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.69ea49d5.js.map