(()=>{"use strict";var n={208:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(601),o=r.n(t),a=r(314),c=r.n(a)()(o());c.push([n.id,"[data-theme='light'] {\n  --color-key: #ffffff;\n\n  --color-fg: #000000;\n}\n\n[data-theme='dark'] {\n  --color-key: #000000;\n\n  --color-fg: #ffffff;\n}\n\n.container {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.calculator {\n  flex-basis: 300px;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.display {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.display__key {\n  border: 1px solid #606060;\n  color: var(--color-key);\n  background-color: #7d7d7d;\n  padding: 10px 15px;\n  font-size: 20px;\n  cursor: pointer;\n\n  &.operator_top {\n    background-color: hsl(0, 0%, 39%);\n\n    &:hover {\n      background-color: hsl(0, 0%, 50%);\n    }\n  }\n\n  &.operator_right {\n    background-color: hsl(36, 100%, 52%);\n    font-size: 32px;\n\n    &:hover {\n      background-color: hsl(36, 100%, 62%);\n    }\n  }\n  &.display__key_zero {\n    grid-column: 1/3;\n  }\n\n  &:hover {\n    background-color: hsl(0, 0%, 60%);\n  }\n}\n\n.input {\n  width: 100%;\n  text-align: right;\n\n  padding: 10px 0 10px;\n  font-size: 32px;\n  border: none;\n\n  color: var(--color-key);\n  background-color: #4e4e4e;\n}\n\n.tabs {\n  display: flex;\n  gap: 8px;\n  padding: 10px;\n  background-color: #4e4e4e;\n}\n\n.tabs div {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.close {\n  background-color: #ff5f56;\n}\n\n.minimize {\n  background-color: #ffbd2e;\n}\n\n.maximize {\n  background-color: #27c93f;\n}\n",""]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);t&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},c=[],i=0;i<n.length;i++){var l=n[i],s=t.base?l[0]+t.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=r(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,t);t.byIndex=i,e.splice(i,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var l=t(n,o),s=0;s<a.length;s++){var u=r(a[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=l}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}function t(n){const e=String(n),r=Number(e);return r>0?String("-"+r):e.slice(1)}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var o=r(72),a=r.n(o),c=r(825),i=r.n(c),l=r(659),s=r.n(l),u=r(56),d=r.n(u),p=r(540),f=r.n(p),v=r(113),h=r.n(v),m=r(208),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),a()(m.A,y),m.A&&m.A.locals&&m.A.locals;const g=document.querySelector(".input"),b=document.querySelectorAll(".display__key"),x=document.querySelector(".cleaner"),k=document.querySelector(".reverseModule"),S=document.querySelector(".compute");let A="",_="",w="";for(let n of b)n.addEventListener("click",E);function E(){const n=this.textContent;let e=!1;e=","===n||Number.isFinite(+n),"="!==n&&"+/-"!==n&&(e&&!w?(g.value+=n,A+=n):e||w?w&&(_&&e?(_+=n,g.value+=n):(g.value="",e?_+=n:w=n,g.value=n)):(g.value=n,w=n))}function C(){g.value="",A="",_="",w=""}x.addEventListener("click",C),k.addEventListener("click",(function(){if(g.value==A){const n=t(A);A=n,g.value=n}else{const n=t(_);_=n,g.value=n}})),S.addEventListener("click",(function(){if(A&&w&&_){const n=A+w+_;try{const e=function(n,e){return n=n.replace(",","."),"−"===e?function(n){const e=n.split("--");return e.length>1?(e.splice(1,0,"+"),e.join("")):n}(n.replace("−","-")):"÷"===e?n.replace("÷","/"):"×"===e?n.replace("×","*"):n}(n,w),r=Function("return "+e);let t=String(r());t=t.replace(".",","),g.value=t,A=t,_="",w=""}catch(n){console.error(n),C()}}}))})();