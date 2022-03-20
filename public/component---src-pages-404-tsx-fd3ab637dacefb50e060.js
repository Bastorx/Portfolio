"use strict";(self.webpackChunkbastien=self.webpackChunkbastien||[]).push([[218],{3906:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.setConfiguration=t.getConfiguration=void 0;var l={breakpoints:[576,768,992,1200,1600,1920],containerWidths:[540,750,960,1140,1540,1810],gutterWidth:30,gridColumns:12,defaultScreenClass:"xxl",maxScreenClass:"xxl"};t.getConfiguration=function(){return l};t.setConfiguration=function(e){l=n(n({},l),e)}},5120:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ScreenClassContext=t.NO_PROVIDER_FLAG=void 0;var o,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(7294)),u=(o=r(5697))&&o.__esModule?o:{default:o},f=r(7039),i=r(3906),a=r(1238);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],u=!0,f=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);u=!0);}catch(i){f=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(f)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p="NO_PROVIDER_FLAG";t.NO_PROVIDER_FLAG=p;var b=l.default.createContext(p);t.ScreenClassContext=b;var y=function(e){var t=e.useOwnWidth,r=e.children,n=e.fallbackScreenClass,o=(0,l.useRef)(),u=d((0,l.useState)(!1),2),c=u[0],s=u[1],p=(0,f.useScreenClass)(o,n),y=(0,i.getConfiguration)().defaultScreenClass,m=c?p:n||y;return(0,l.useEffect)((function(){return s(!0)}),[]),l.default.createElement(b.Provider,{value:m},t?l.default.createElement(a.Div,{ref:t?o:null},r):l.default.createElement(l.default.Fragment,null,r))};y.propTypes={children:u.default.node.isRequired,useOwnWidth:u.default.bool,fallbackScreenClass:u.default.oneOf([null,"xs","sm","md","lg","xl","xxl","xxxl"])},y.defaultProps={useOwnWidth:!1,fallbackScreenClass:null};var m=y;t.default=m},2018:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r(7294)),l=i(r(5697)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(5120));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.children;return o.default.createElement(u.ScreenClassContext.Consumer,null,(function(e){return e===u.NO_PROVIDER_FLAG?o.default.createElement(u.default,null,o.default.createElement(u.ScreenClassContext.Consumer,null,(function(e){return t(e)}))):t(e)}))};a.propTypes={children:l.default.func.isRequired};var c=a;t.default=c},957:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(7294)),l=s(r(5697)),u=s(r(9632)),f=r(3906),i=r(7818),a=s(r(2018)),c=r(1238),d=["children","xs","sm","md","lg","xl","xxl","xxxl","offset","pull","push","order","debug","style","component","width"];function s(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var O=function(e){var t=e.children,r=e.xs,n=e.sm,l=e.md,c=e.lg,s=e.xl,p=e.xxl,b=e.xxxl,m=e.offset,O=e.pull,g=e.push,v=e.order,h=e.debug,j=e.style,w=e.component,P=e.width,S=x(e,d);return o.default.createElement(a.default,null,(function(e){return o.default.createElement(i.GutterWidthContext.Consumer,null,(function(i){var a=(0,u.default)({forceWidth:P,width:{xs:r,sm:n,md:l,lg:c,xl:s,xxl:p,xxxl:b},offset:m,pull:O,push:g,order:v,debug:h,screenClass:e,gutterWidth:i,gridColumns:(0,f.getConfiguration)().gridColumns,moreStyle:j});return(0,o.createElement)(w,y(y({style:a},S),{},{children:t}))}))}))};O.propTypes={children:l.default.node,xs:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),sm:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),md:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),lg:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),xl:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),xxl:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),xxxl:l.default.oneOfType([l.default.number,l.default.oneOf(["content"])]),width:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number,xxl:l.default.number,xxxl:l.default.number}),push:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number,xxl:l.default.number,xxxl:l.default.number}),pull:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number,xxl:l.default.number,xxxl:l.default.number}),order:l.default.shape({xs:l.default.number,sm:l.default.number,md:l.default.number,lg:l.default.number,xl:l.default.number,xxl:l.default.number,xxxl:l.default.number}),style:l.default.objectOf(l.default.oneOfType([l.default.number,l.default.string])),debug:l.default.bool,component:l.default.elementType},O.defaultProps={children:null,xs:null,sm:null,md:null,lg:null,xl:null,xxl:null,xxxl:null,width:null,offset:{},push:{},pull:{},style:{},order:{},debug:!1,component:c.Div};var g=O;t.default=g},9632:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(7039);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e,t){if("number"==typeof e){var r=Math.max(0,Math.min(t,e));return"".concat(100/t*r,"%")}};t.default=function(e){var t,r=e.forceWidth,o=void 0===r?null:r,u=e.width,i=void 0===u?{}:u,a=e.offset,c=void 0===a?{}:a,d=e.pull,s=void 0===d?{}:d,p=e.push,b=void 0===p?{}:p,y=e.order,m=void 0===y?{}:y,x=e.debug,O=e.screenClass,g=e.gutterWidth,v=e.moreStyle,h=e.gridColumns,j={boxSizing:"border-box",minHeight:1,position:"relative",paddingLeft:g/2,paddingRight:g/2,width:"100%"};return x&&(j.outline="1px solid silver",j.background="rgba(0,0,0,.05)",j.lineHeight="32px"),j.flexBasis="100%",j.flexGrow=0,j.flexShrink=0,j.maxWidth="100%",j.marginLeft="0%",j.right="auto",j.left="auto",n.screenClasses.forEach((function(e,t){if(n.screenClasses.indexOf(O)>=t){var r=f(i[e],h),o="content"===i[e];j.flexBasis=o?"auto":r||j.flexBasis,j.width=j.flexBasis,j.maxWidth=r||j.maxWidth,j.marginLeft=f(c[e],h)||j.marginLeft,j.right=f(s[e],h)||j.right,j.left=f(b[e],h)||j.left,m[e]&&(j.order=m[e])}})),t=i,Object.keys(t).reduce((function(e,r){return e||t[r]}),!1)||(j.flexBasis=0,j.flexGrow=1),o&&(j.flexBasis="unset",j.flexGrow="unset",j.flexShrink="unset",j.width=o),l(l({},j),v)}},9765:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(7294)),l=d(r(5697)),u=d(r(1569)),f=r(3906),i=d(r(2018)),a=r(1238),c=["children","fluid","xs","sm","md","lg","xl","xxl","xxxl","style","component"];function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=function(e){var t=e.children,r=e.fluid,n=e.xs,l=e.sm,a=e.md,d=e.lg,s=e.xl,m=e.xxl,x=e.xxxl,O=e.style,g=e.component,v=y(e,c);return o.default.createElement(i.default,null,(function(e){return(0,o.createElement)(g,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({style:(0,u.default)({fluid:r,xs:n,sm:l,md:a,lg:d,xl:s,xxl:m,xxxl:x,screenClass:e,containerWidths:(0,f.getConfiguration)().containerWidths,gutterWidth:(0,f.getConfiguration)().gutterWidth,moreStyle:O})},v),t)}))};m.propTypes={children:l.default.node.isRequired,fluid:l.default.bool,xs:l.default.bool,sm:l.default.bool,md:l.default.bool,lg:l.default.bool,xl:l.default.bool,xxl:l.default.bool,xxxl:l.default.bool,style:l.default.objectOf(l.default.oneOfType([l.default.number,l.default.string])),component:l.default.elementType},m.defaultProps={fluid:!1,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1,style:{},component:a.Div};var x=m;t.default=x},1569:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=e.fluid,r=e.xs,o=e.sm,l=e.md,u=e.lg,f=e.xl,i=e.xxl,a=e.xxxl,c=e.screenClass,d=e.containerWidths,s=e.gutterWidth,p=e.moreStyle,b={boxSizing:"border-box",position:"relative",marginLeft:"auto",marginRight:"auto",paddingLeft:s/2,paddingRight:s/2};return!t||r||o||l||u||f?("xs"===c&&d[0]&&!r&&(b.maxWidth=d[0]),"sm"===c&&d[0]&&!o&&(b.maxWidth=d[0]),"md"===c&&d[1]&&!l&&(b.maxWidth=d[1]),"lg"===c&&d[2]&&!u&&(b.maxWidth=d[2]),"xl"===c&&d[3]&&!f&&(b.maxWidth=d[3]),"xxl"===c&&d[4]&&!i&&(b.maxWidth=d[4]),"xxxl"===c&&d[5]&&!a&&(b.maxWidth=d[5]),n(n({},b),p)):n(n({},b),p)}},7818:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GutterWidthContext=void 0;var n=a(r(7294)),o=a(r(5697)),l=r(3906),u=a(r(7735)),f=r(1238),i=["children","style","align","justify","wrap","debug","nogutter","gutterWidth","component","direction"];function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.default.createContext(!1);t.GutterWidthContext=p;var b=function(e){var t=e.children,r=e.style,o=e.align,f=e.justify,a=e.wrap,b=e.debug,y=e.nogutter,m=e.gutterWidth,x=e.component,O=e.direction,g=s(e,i),v=(0,l.getConfiguration)().gutterWidth;y&&(v=0),"number"==typeof m&&(v=m);var h=(0,u.default)({gutterWidth:v,align:o,justify:f,debug:b,moreStyle:r,direction:O,wrap:a});return n.default.createElement(x,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({style:h},g),n.default.createElement(p.Provider,{value:v},t))};b.propTypes={children:o.default.node.isRequired,align:o.default.oneOf(["normal","start","center","end","stretch"]),justify:o.default.oneOf(["start","center","end","between","around","initial","inherit"]),direction:o.default.oneOf(["column","row","column-reverse","row-reverse"]),wrap:o.default.oneOf(["nowrap","wrap","reverse"]),nogutter:o.default.bool,gutterWidth:o.default.number,style:o.default.objectOf(o.default.oneOfType([o.default.number,o.default.string])),debug:o.default.bool,component:o.default.elementType},b.defaultProps={align:"normal",justify:"start",direction:"row",wrap:"wrap",nogutter:!1,gutterWidth:null,style:{},debug:!1,component:f.Div};var y=b;t.default=y},7735:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=e.gutterWidth,r=e.align,o=e.justify,l=e.debug,u=e.moreStyle,f=e.direction,i=e.wrap,a=r;"start"===r&&(a="flex-start"),"end"===r&&(a="flex-end");var c=o;"start"===o&&(c="flex-start"),"end"===o&&(c="flex-end"),"between"===o&&(c="space-between"),"around"===o&&(c="space-around"),"center"===o&&(c="center"),"initial"===o&&(c="initial"),"inherit"===o&&(c="inherit");var d=i;"nowrap"===i&&(d="nowrap"),"wrap"===i&&(d="wrap"),"reverse"===i&&(d="wrap-reverse");var s={marginLeft:-t/2,marginRight:-t/2,display:"flex",flexGrow:0,flexShrink:0,alignItems:a,justifyContent:c,flexDirection:["column","row","column-reverse","row-reverse"].includes(f)?f:void 0,flexWrap:d};return l&&(s.background="rgba(128,128,128,.05)"),n(n({},s),u)}},2876:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"_G",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"zv",{enumerable:!0,get:function(){return i.default}});var o=b(r(957)),l=b(r(9765)),u=b(r(7818)),f=b(r(6112)),i=b(r(112)),a=b(r(2799)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(5120)),d=r(3906),s=r(7039);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}},751:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="div"},3114:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="span"},7033:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="undefined"!=typeof window?window:void 0;t.default=r},1238:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Div",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Span",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Window",{enumerable:!0,get:function(){return l.default}});var n=u(r(751)),o=u(r(3114)),l=u(r(7033));function u(e){return e&&e.__esModule?e:{default:e}}},6112:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(7294)),l=a(r(5697)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(7817)),f=a(r(2018));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.children,r=e.xs,n=e.sm,l=e.md,i=e.lg,a=e.xl,c=e.xxl,d=e.xxxl;return o.default.createElement(f.default,null,(function(e){return u.hidden({screenClass:e,xs:r,sm:n,md:l,lg:i,xl:a,xxl:c,xxxl:d})?null:t}))};c.propTypes={children:l.default.node.isRequired,xs:l.default.bool,sm:l.default.bool,md:l.default.bool,lg:l.default.bool,xl:l.default.bool,xxl:l.default.bool,xxxl:l.default.bool},c.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1};var d=c;t.default=d},7817:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hidden=t.default=void 0;var r=function(e){var t=e.screenClass,r=e.xs,n=e.sm,o=e.md,l=e.lg,u=e.xl,f=e.xxl,i=e.xxxl;return"xxl"===t?f:"xxxl"===t?i:"xl"===t?u:"lg"===t?l:"md"===t?o:"sm"===t?n:r};t.hidden=r;var n=r;t.default=n},2799:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(7294)),o=u(r(5697)),l=u(r(2018));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=e.render;return n.default.createElement(l.default,null,(function(e){return t(e)}))};f.propTypes={render:o.default.func.isRequired};var i=f;t.default=i},112:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(7294)),l=a(r(5697)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}o.default=e,r&&r.set(e,o);return o}(r(4728)),f=a(r(2018));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.children,r=e.xs,n=e.sm,l=e.md,i=e.lg,a=e.xl,c=e.xxl,d=e.xxxl;return o.default.createElement(f.default,null,(function(e){return u.visible({screenClass:e,xs:r,sm:n,md:l,lg:i,xl:a,xxl:c,xxxl:d})?t:null}))};c.propTypes={children:l.default.node.isRequired,xs:l.default.bool,sm:l.default.bool,md:l.default.bool,lg:l.default.bool,xl:l.default.bool,xxl:l.default.bool,xxxl:l.default.bool},c.defaultProps={xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1,xxxl:!1};var d=c;t.default=d},4728:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.visible=t.default=void 0;var r=function(e){var t=e.screenClass,r=e.xs,n=e.sm,o=e.md,l=e.lg,u=e.xl,f=e.xxl,i=e.xxxl;return"xxl"===t?f:"xxxl"===t?i:"xl"===t?u:"lg"===t?l:"md"===t?o:"sm"===t?n:r};t.visible=r;var n=r;t.default=n},7039:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.useScreenClass=t.screenClasses=void 0;var n=r(7294),o=r(3906),l=r(1238);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],u=!0,f=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);u=!0);}catch(i){f=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(f)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=["xs","sm","md","lg","xl","xxl","xxxl"];t.screenClasses=i;t.useScreenClass=function(e,t){var r=function(){var r=(0,o.getConfiguration)(),n=r.breakpoints,u=r.defaultScreenClass,f=r.maxScreenClass,a=u,c=function(e){return e&&e.current&&e.current.clientWidth?e.current.clientWidth:void 0!==l.Window&&l.Window.innerWidth?l.Window.innerWidth:null}(e);c?(a="xs",n[0]&&c>=n[0]&&(a="sm"),n[1]&&c>=n[1]&&(a="md"),n[2]&&c>=n[2]&&(a="lg"),n[3]&&c>=n[3]&&(a="xl"),n[4]&&c>=n[4]&&(a="xxl"),n[5]&&c>=n[5]&&(a="xxxl")):t&&(a=t);var d=i.indexOf(a),s=i.indexOf(f);return s>=0&&d>s&&(a=i[s]),a},f=u((0,n.useState)((function(){return r()})),2),a=f[0],c=f[1];return(0,n.useEffect)((function(){var e=function(){return c(r())};return l.Window.addEventListener("resize",e,!1),function(){l.Window.removeEventListener("resize",e,!1)}}),[]),a}},2976:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(7294),o=r(4058),l=r(2876),u=r(3538),f=r.p+"static/corgi-f7b45e3fb8a7d308ea61fc9a990d2fe2.jpg",i=function(){return n.createElement(u.Z,null,n.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.createElement("div",{style:{position:"relative",display:"inline-block",margin:"auto"}},n.createElement("img",{alt:"404 Corgi",src:f,style:{maxWidth:"100vw",maxHeight:"100vh",margin:"auto",display:"block",position:"relative"}}),n.createElement("h1",{style:{position:"absolute",top:5,color:"white",fontWeight:"bold",width:"100%",textAlign:"center"}},"ERROR 404: CORGI FOUND"),n.createElement(l._G,{xs:!0,sm:!0},n.createElement("p",{style:{position:"absolute",top:50,color:"white",fontWeight:"bold",width:"100%",textAlign:"center"}},"Congrat you've found the corgi 😊",n.createElement("br",null)," Now you can return to the home page by touching (clicking) its cute snout 🥰")),n.createElement(o.Link,{to:"/",style:{position:"absolute",width:"9%",height:"12%",top:"37%",left:"72%",opacity:0}})),n.createElement(l.zv,{xs:!0,sm:!0},n.createElement("p",{style:{textAlign:"center"}},"Congrat you've found the corgi 😊",n.createElement("br",null)," Now you can return to the home page by touching (clicking) its cute snout 🥰"))))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-fd3ab637dacefb50e060.js.map