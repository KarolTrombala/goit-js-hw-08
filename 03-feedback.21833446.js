var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(h,t),c?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=o}function h(){var e=m();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?d(n,o-(e-l)):n}(e))}function w(e){return u=void 0,y&&i?b(e):(i=r=void 0,a)}function O(){var e=m(),n=T(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(v)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(g(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),b=document.querySelector('input[name="email"]'),j=document.querySelector('textarea[name="message"]'),T={email:"",message:""},h=()=>{T.email=b.value,T.message=j.value,localStorage.setItem("feedbak-form-state",JSON.stringify(T))};y.addEventListener("input",t(h,500));(()=>{const e=JSON.parse(localStorage.getItem("feedbak-form-state"));e?(b.value=e.email,j.value=e.message,T.email=e.email,T.message=e):(b.value="",j.value="")})(),y.addEventListener("submit",(e=>{e.preventDefault(),e.currentTarget.reset(),h()}));
//# sourceMappingURL=03-feedback.21833446.js.map