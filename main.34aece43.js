parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach(function(r){t(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function t(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function n(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=o(r))){var e=0,t=function(){};return{s:t,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,c=!0,i=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return c=r.done,r},e:function(r){i=!0,a=r},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function o(r,e){if(r){if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(r,e):void 0}}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var c=document.querySelector("ul").children,i=[];function u(r,e){return f(r,e).sort(function(r,e){return l(e.salary,"$",",")-l(r.salary,"$",",")})}function l(r,e,t){return+r.replace(e,"").replaceAll(t,"")}function f(r,t){var o,a=n(t);try{for(a.s();!(o=a.n()).done;){var c=o.value,i=e({name:c.innerHTML.trim()},c.dataset);r.push(i)}}catch(u){a.e(u)}finally{a.f()}return r}u(i,c),document.querySelector("ul").innerHTML="",i.forEach(function(r){document.querySelector("ul").insertAdjacentHTML("beforeend","<li \n        data-position=".concat(r.position," \n        data-salary=").concat(r.salary," \n        data-age=").concat(r.age,"\n      >\n      ").concat(r.name,"\n      </li>"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.34aece43.js.map