function sy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ay(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},gc={},h0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),oy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),dy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),Rp=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,g0={};function ea(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}ea.prototype.isReactComponent={};ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=ea.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||p0}var Kf=Yf.prototype=new x0;Kf.constructor=Yf;m0(Kf,ea.prototype);Kf.isPureReactComponent=!0;var Cp=Array.isArray,v0=Object.prototype.hasOwnProperty,Jf={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)v0.call(e,i)&&!_0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:fo,type:t,key:s,ref:a,props:r,_owner:Jf.current}}function vy(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function _y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function $c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_y(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case fo:case oy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+$c(a,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Zf(r)&&(r=vy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Cp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+$c(s,o);a+=hl(s,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+$c(s,o++),a+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ro(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},pl={transition:null},Sy={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Jf};function S0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ro,forEach:function(t,e,n){Ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ro(t,function(){e++}),e},toArray:function(t){return Ro(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ea;Xe.Fragment=ly;Xe.Profiler=uy;Xe.PureComponent=Yf;Xe.StrictMode=cy;Xe.Suspense=py;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;Xe.act=S0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=m0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)v0.call(e,l)&&!_0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:fo,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dy,_context:t},t.Consumer=t};Xe.createElement=y0;Xe.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:hy,render:t}};Xe.isValidElement=Zf;Xe.lazy=function(t){return{$$typeof:gy,_payload:{_status:-1,_result:t},_init:yy}};Xe.memo=function(t,e){return{$$typeof:my,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Xe.unstable_act=S0;Xe.useCallback=function(t,e){return en.current.useCallback(t,e)};Xe.useContext=function(t){return en.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return en.current.useEffect(t,e)};Xe.useId=function(){return en.current.useId()};Xe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return en.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Xe.useRef=function(t){return en.current.useRef(t)};Xe.useState=function(t){return en.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return en.current.useTransition()};Xe.version="18.3.1";h0.exports=Xe;var j=h0.exports;const E0=ay(j),Ey=sy({__proto__:null,default:E0},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=j,wy=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,Ay=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ry={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)by.call(e,i)&&!Ry.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:wy,type:t,key:s,ref:a,props:r,_owner:Ay.current}}gc.Fragment=Ty;gc.jsx=M0;gc.jsxs=M0;f0.exports=gc;var h=f0.exports,od={},w0={exports:{}},wn={},T0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Z){var J=U.length;U.push(Z);e:for(;0<J;){var Y=J-1>>>1,oe=U[Y];if(0<r(oe,Z))U[Y]=Z,U[J]=oe,J=Y;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var Z=U[0],J=U.pop();if(J!==Z){U[0]=J;e:for(var Y=0,oe=U.length,Te=oe>>>1;Y<Te;){var X=2*(Y+1)-1,ne=U[X],fe=X+1,re=U[fe];if(0>r(ne,J))fe<oe&&0>r(re,ne)?(U[Y]=re,U[fe]=J,Y=fe):(U[Y]=ne,U[X]=J,Y=X);else if(fe<oe&&0>r(re,J))U[Y]=re,U[fe]=J,Y=fe;else break e}}return Z}function r(U,Z){var J=U.sortIndex-Z.sortIndex;return J!==0?J:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,p=3,g=!1,_=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=U)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function E(U){if(S=!1,v(U),!_)if(n(l)!==null)_=!0,G(C);else{var Z=n(c);Z!==null&&ee(E,Z.startTime-U)}}function C(U,Z){_=!1,S&&(S=!1,u(N),N=-1),g=!0;var J=p;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||U&&!M());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,p=f.priorityLevel;var oe=Y(f.expirationTime<=Z);Z=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var Te=!0;else{var X=n(c);X!==null&&ee(E,X.startTime-Z),Te=!1}return Te}finally{f=null,p=J,g=!1}}var A=!1,T=null,N=-1,I=5,y=-1;function M(){return!(t.unstable_now()-y<I)}function F(){if(T!==null){var U=t.unstable_now();y=U;var Z=!0;try{Z=T(!0,U)}finally{Z?D():(A=!1,T=null)}}else A=!1}var D;if(typeof x=="function")D=function(){x(F)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=F,D=function(){$.postMessage(null)}}else D=function(){m(F,0)};function G(U){T=U,A||(A=!0,D())}function ee(U,Z){N=m(function(){U(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,G(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var J=p;p=Z;try{return U()}finally{p=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=p;p=U;try{return Z()}finally{p=J}},t.unstable_scheduleCallback=function(U,Z,J){var Y=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Y+J:Y):J=Y,U){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=J+oe,U={id:d++,callback:Z,priorityLevel:U,startTime:J,expirationTime:oe,sortIndex:-1},J>Y?(U.sortIndex=J,e(c,U),n(l)===null&&U===n(c)&&(S?(u(N),N=-1):S=!0,ee(E,J-Y))):(U.sortIndex=oe,e(l,U),_||g||(_=!0,G(C))),U},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(U){var Z=p;return function(){var J=p;p=Z;try{return U.apply(this,arguments)}finally{p=J}}}})(b0);T0.exports=b0;var Cy=T0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=j,Mn=Cy;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,Ha={};function Kr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Ha[t]=e,t=0;t<e.length;t++)A0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,Py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Lp={};function Ly(t){return ld.call(Lp,t)?!0:ld.call(Pp,t)?!1:Py.test(t)?Lp[t]=!0:(Pp[t]=!0,!1)}function Dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uy(t,e,n,i){if(e===null||typeof e>"u"||Dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,eh);zt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,eh);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,eh);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uy(e,n,r,i)&&(n=null),i||r===null?Ly(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Yc;function Ra(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var Kc=!1;function Jc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function Iy(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case cd:return"Profiler";case nh:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C0:return(t.displayName||"Context")+".Consumer";case R0:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function Oy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fy(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=Fy(t))}function L0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=P0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function pd(t,e){D0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ca=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ca(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function U0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Po,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ky=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){ky.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function F0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=F0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var By=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(By[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,Ds=null,Us=null;function kp(t){if(t=mo(t)){if(typeof Sd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Sc(e),Sd(t.stateNode,t.type,e))}}function B0(t){Ds?Us?Us.push(t):Us=[t]:Ds=t}function z0(){if(Ds){var t=Ds,e=Us;if(Us=Ds=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function j0(t,e){return t(e)}function H0(){}var Zc=!1;function V0(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return j0(t,e,n)}finally{Zc=!1,(Ds!==null||Us!==null)&&(H0(),z0())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Ed=!1;if(wi)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Ed=!1}function zy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ua=!1,Fl=null,kl=!1,Md=null,jy={onError:function(t){Ua=!0,Fl=t}};function Hy(t,e,n,i,r,s,a,o,l){Ua=!1,Fl=null,zy.apply(jy,arguments)}function Vy(t,e,n,i,r,s,a,o,l){if(Hy.apply(this,arguments),Ua){if(Ua){var c=Fl;Ua=!1,Fl=null}else throw Error(ae(198));kl||(kl=!0,Md=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function G0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Jr(t)!==t)throw Error(ae(188))}function Gy(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bp(r),t;if(s===i)return Bp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function W0(t){return t=Gy(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var q0=Mn.unstable_scheduleCallback,zp=Mn.unstable_cancelCallback,Wy=Mn.unstable_shouldYield,Xy=Mn.unstable_requestPaint,Mt=Mn.unstable_now,qy=Mn.unstable_getCurrentPriorityLevel,ah=Mn.unstable_ImmediatePriority,$0=Mn.unstable_UserBlockingPriority,Bl=Mn.unstable_NormalPriority,$y=Mn.unstable_LowPriority,Y0=Mn.unstable_IdlePriority,xc=null,ni=null;function Yy(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(xc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Zy,Ky=Math.log,Jy=Math.LN2;function Zy(t){return t>>>=0,t===0?32:31-(Ky(t)/Jy|0)|0}var Lo=64,Do=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Na(o):(s&=a,s!==0&&(i=Na(s)))}else a=n&~r,a!==0?i=Na(a):s!==0&&(i=Na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Qy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Qy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K0(){var t=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),t}function Qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function tS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,lh,Q0,ex,tx,Td=!1,Uo=[],$i=null,Yi=null,Ki=null,Wa=new Map,Xa=new Map,ji=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function da(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=mo(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iS(t,e,n,i,r){switch(e){case"focusin":return $i=da($i,t,e,n,i,r),!0;case"dragenter":return Yi=da(Yi,t,e,n,i,r),!0;case"mouseover":return Ki=da(Ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,da(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xa.set(s,da(Xa.get(s)||null,t,e,n,i,r)),!0}return!1}function nx(t){var e=Cr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=G0(n),e!==null){t.blockedOn=e,tx(t.priority,function(){Q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yd=i,n.target.dispatchEvent(i),yd=null}else return e=mo(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){ml(t)&&n.delete(e)}function rS(){Td=!1,$i!==null&&ml($i)&&($i=null),Yi!==null&&ml(Yi)&&(Yi=null),Ki!==null&&ml(Ki)&&(Ki=null),Wa.forEach(Hp),Xa.forEach(Hp)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,rS)))}function qa(t){function e(r){return fa(r,t)}if(0<Uo.length){fa(Uo[0],t);for(var n=1;n<Uo.length;n++){var i=Uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&fa($i,t),Yi!==null&&fa(Yi,t),Ki!==null&&fa(Ki,t),Wa.forEach(e),Xa.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)nx(n),n.blockedOn===null&&ji.shift()}var Is=Ci.ReactCurrentBatchConfig,jl=!0;function sS(t,e,n,i){var r=ot,s=Is.transition;Is.transition=null;try{ot=1,ch(t,e,n,i)}finally{ot=r,Is.transition=s}}function aS(t,e,n,i){var r=ot,s=Is.transition;Is.transition=null;try{ot=4,ch(t,e,n,i)}finally{ot=r,Is.transition=s}}function ch(t,e,n,i){if(jl){var r=bd(t,e,n,i);if(r===null)cu(t,e,i,Hl,n),jp(t,i);else if(iS(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<nS.indexOf(t)){for(;r!==null;){var s=mo(r);if(s!==null&&Z0(s),s=bd(t,e,n,i),s===null&&cu(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Hl=null;function bd(t,e,n,i){if(Hl=null,t=sh(i),t=Cr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=G0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function ix(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case ah:return 1;case $0:return 4;case Bl:case $y:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Gi=null,uh=null,gl=null;function rx(){if(gl)return gl;var t,e=uh,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Vp(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Vp,this.isPropagationStopped=Vp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Tn(ta),po=_t({},ta,{view:0,detail:0}),oS=Tn(po),eu,tu,ha,vc=_t({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(eu=t.screenX-ha.screenX,tu=t.screenY-ha.screenY):tu=eu=0,ha=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Gp=Tn(vc),lS=_t({},vc,{dataTransfer:0}),cS=Tn(lS),uS=_t({},po,{relatedTarget:0}),nu=Tn(uS),dS=_t({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Tn(dS),hS=_t({},ta,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=Tn(hS),mS=_t({},ta,{data:0}),Wp=Tn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vS[t])?!!e[t]:!1}function fh(){return _S}var yS=_t({},po,{key:function(t){if(t.key){var e=gS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SS=Tn(yS),ES=_t({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Tn(ES),MS=_t({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),wS=Tn(MS),TS=_t({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Tn(TS),AS=_t({},vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=Tn(AS),CS=[9,13,27,32],hh=wi&&"CompositionEvent"in window,Ia=null;wi&&"documentMode"in document&&(Ia=document.documentMode);var NS=wi&&"TextEvent"in window&&!Ia,sx=wi&&(!hh||Ia&&8<Ia&&11>=Ia),qp=" ",$p=!1;function ax(t,e){switch(t){case"keyup":return CS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function PS(t,e){switch(t){case"compositionend":return ox(e);case"keypress":return e.which!==32?null:($p=!0,qp);case"textInput":return t=e.data,t===qp&&$p?null:t;default:return null}}function LS(t,e){if(ys)return t==="compositionend"||!hh&&ax(t,e)?(t=rx(),gl=uh=Gi=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sx&&e.locale!=="ko"?null:e.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DS[t.type]:e==="textarea"}function lx(t,e,n,i){B0(i),e=Vl(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oa=null,$a=null;function US(t){_x(t,0)}function _c(t){var e=Ms(t);if(L0(e))return t}function IS(t,e){if(t==="change")return e}var cx=!1;if(wi){var iu;if(wi){var ru="oninput"in document;if(!ru){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),ru=typeof Kp.oninput=="function"}iu=ru}else iu=!1;cx=iu&&(!document.documentMode||9<document.documentMode)}function Jp(){Oa&&(Oa.detachEvent("onpropertychange",ux),$a=Oa=null)}function ux(t){if(t.propertyName==="value"&&_c($a)){var e=[];lx(e,$a,t,sh(t)),V0(US,e)}}function OS(t,e,n){t==="focusin"?(Jp(),Oa=e,$a=n,Oa.attachEvent("onpropertychange",ux)):t==="focusout"&&Jp()}function FS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c($a)}function kS(t,e){if(t==="click")return _c(e)}function BS(t,e){if(t==="input"||t==="change")return _c(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:zS;function Ya(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ld.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,e){var n=Zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fx(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jS(t){var e=fx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dx(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qp(n,s);var a=Qp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HS=wi&&"documentMode"in document&&11>=document.documentMode,Ss=null,Ad=null,Fa=null,Rd=!1;function em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||Ss==null||Ss!==Ol(i)||(i=Ss,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Ya(Fa,i)||(Fa=i,i=Vl(Ad,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},su={},hx={};wi&&(hx=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function yc(t){if(su[t])return su[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hx)return su[t]=e[n];return t}var px=yc("animationend"),mx=yc("animationiteration"),gx=yc("animationstart"),xx=yc("transitionend"),vx=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){vx.set(t,e),Kr(e,[t])}for(var au=0;au<tm.length;au++){var ou=tm[au],VS=ou.toLowerCase(),GS=ou[0].toUpperCase()+ou.slice(1);dr(VS,"on"+GS)}dr(px,"onAnimationEnd");dr(mx,"onAnimationIteration");dr(gx,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(xx,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vy(i,e,void 0,t),t.currentTarget=null}function _x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}}}if(kl)throw t=Md,kl=!1,Md=null,t}function ft(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(yx(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),yx(n,t,i,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[Fo]){t[Fo]=!0,A0.forEach(function(n){n!=="selectionchange"&&(WS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,lu("selectionchange",!1,e))}}function yx(t,e,n,i){switch(ix(e)){case 1:var r=sS;break;case 4:r=aS;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}V0(function(){var c=s,d=sh(n),f=[];e:{var p=vx.get(t);if(p!==void 0){var g=dh,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":g=SS;break;case"focusin":_="focus",g=nu;break;case"focusout":_="blur",g=nu;break;case"beforeblur":case"afterblur":g=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wS;break;case px:case mx:case gx:g=fS;break;case xx:g=bS;break;case"scroll":g=oS;break;case"wheel":g=RS;break;case"copy":case"cut":case"paste":g=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xp}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?p!==null?p+"Capture":null:p;S=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=Ga(x,u),E!=null&&S.push(Ja(x,E,v)))),m)break;x=x.return}0<S.length&&(p=new g(p,_,null,n,d),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==yd&&(_=n.relatedTarget||n.fromElement)&&(Cr(_)||_[Ti]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Cr(_):null,_!==null&&(m=Jr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(S=Gp,E="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xp,E="onPointerLeave",u="onPointerEnter",x="pointer"),m=g==null?p:Ms(g),v=_==null?p:Ms(_),p=new S(E,x+"leave",g,n,d),p.target=m,p.relatedTarget=v,E=null,Cr(d)===c&&(S=new S(u,x+"enter",_,n,d),S.target=v,S.relatedTarget=m,E=S),m=E,g&&_)t:{for(S=g,u=_,x=0,v=S;v;v=ns(v))x++;for(v=0,E=u;E;E=ns(E))v++;for(;0<x-v;)S=ns(S),x--;for(;0<v-x;)u=ns(u),v--;for(;x--;){if(S===u||u!==null&&S===u.alternate)break t;S=ns(S),u=ns(u)}S=null}else S=null;g!==null&&im(f,p,g,S,!1),_!==null&&m!==null&&im(f,m,_,S,!0)}}e:{if(p=c?Ms(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=IS;else if(Yp(p))if(cx)C=BS;else{C=FS;var A=OS}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=kS);if(C&&(C=C(t,c))){lx(f,C,n,d);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&md(p,"number",p.value)}switch(A=c?Ms(c):window,t){case"focusin":(Yp(A)||A.contentEditable==="true")&&(Ss=A,Ad=c,Fa=null);break;case"focusout":Fa=Ad=Ss=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,em(f,n,d);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":em(f,n,d)}var T;if(hh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ys?ax(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(sx&&n.locale!=="ko"&&(ys||N!=="onCompositionStart"?N==="onCompositionEnd"&&ys&&(T=rx()):(Gi=d,uh="value"in Gi?Gi.value:Gi.textContent,ys=!0)),A=Vl(c,N),0<A.length&&(N=new Wp(N,t,null,n,d),f.push({event:N,listeners:A}),T?N.data=T:(T=ox(n),T!==null&&(N.data=T)))),(T=NS?PS(t,n):LS(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(d=new Wp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}_x(f,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ja(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ja(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ga(n,s),l!=null&&a.unshift(Ja(n,l,o))):r||(l=Ga(n,s),l!=null&&a.push(Ja(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var XS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace(qS,"")}function ko(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(ae(425))}function Gl(){}var Cd=null,Nd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(KS)}:Ld;function KS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var na=Math.random().toString(36).slice(2),ti="__reactFiber$"+na,Za="__reactProps$"+na,Ti="__reactContainer$"+na,Dd="__reactEvents$"+na,JS="__reactListeners$"+na,ZS="__reactHandles$"+na;function Cr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[ti])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function mo(t){return t=t[ti]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Sc(t){return t[Za]||null}var Ud=[],ws=-1;function fr(t){return{current:t}}function pt(t){0>ws||(t.current=Ud[ws],Ud[ws]=null,ws--)}function ut(t,e){ws++,Ud[ws]=t.current,t.current=e}var or={},Kt=fr(or),cn=fr(!1),Br=or;function Hs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Wl(){pt(cn),pt(Kt)}function om(t,e,n){if(Kt.current!==or)throw Error(ae(168));ut(Kt,e),ut(cn,n)}function Sx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Oy(t)||"Unknown",r));return _t({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Br=Kt.current,ut(Kt,t),ut(cn,cn.current),!0}function lm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Sx(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,pt(cn),pt(Kt),ut(Kt,t)):pt(cn),ut(cn,n)}var xi=null,Ec=!1,du=!1;function Ex(t){xi===null?xi=[t]:xi.push(t)}function QS(t){Ec=!0,Ex(t)}function hr(){if(!du&&xi!==null){du=!0;var t=0,e=ot;try{var n=xi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Ec=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),q0(ah,hr),r}finally{ot=e,du=!1}}return null}var Ts=[],bs=0,ql=null,$l=0,Rn=[],Cn=0,zr=null,_i=1,yi="";function Mr(t,e){Ts[bs++]=$l,Ts[bs++]=ql,ql=t,$l=e}function Mx(t,e,n){Rn[Cn++]=_i,Rn[Cn++]=yi,Rn[Cn++]=zr,zr=t;var i=_i;t=yi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,_i=1<<32-qn(e)+r|n<<r|i,yi=s+t}else _i=1<<s|n<<r|i,yi=t}function mh(t){t.return!==null&&(Mr(t,1),Mx(t,1,0))}function gh(t){for(;t===ql;)ql=Ts[--bs],Ts[bs]=null,$l=Ts[--bs],Ts[bs]=null;for(;t===zr;)zr=Rn[--Cn],Rn[Cn]=null,yi=Rn[--Cn],Rn[Cn]=null,_i=Rn[--Cn],Rn[Cn]=null}var En=null,Sn=null,mt=!1,Vn=null;function wx(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:_i,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(mt){var e=Sn;if(e){var n=e;if(!cm(t,e)){if(Id(t))throw Error(ae(418));e=Ji(n.nextSibling);var i=En;e&&cm(t,e)?wx(i,n):(t.flags=t.flags&-4097|2,mt=!1,En=t)}}else{if(Id(t))throw Error(ae(418));t.flags=t.flags&-4097|2,mt=!1,En=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Bo(t){if(t!==En)return!1;if(!mt)return um(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Sn)){if(Id(t))throw Tx(),Error(ae(418));for(;e;)wx(t,e),e=Ji(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?Ji(t.stateNode.nextSibling):null;return!0}function Tx(){for(var t=Sn;t;)t=Ji(t.nextSibling)}function Vs(){Sn=En=null,mt=!1}function xh(t){Vn===null?Vn=[t]:Vn.push(t)}var eE=Ci.ReactCurrentBatchConfig;function pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dm(t){var e=t._init;return e(t._payload)}function bx(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=tr(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,v,E){return x===null||x.tag!==6?(x=vu(v,u.mode,E),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,E){var C=v.type;return C===_s?d(u,x,v.props.children,E,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&dm(C)===x.type)?(E=r(x,v.props),E.ref=pa(u,x,v),E.return=u,E):(E=wl(v.type,v.key,v.props,null,u.mode,E),E.ref=pa(u,x,v),E.return=u,E)}function c(u,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=_u(v,u.mode,E),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,E,C){return x===null||x.tag!==7?(x=Or(v,u.mode,E,C),x.return=u,x):(x=r(x,v),x.return=u,x)}function f(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=vu(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:return v=wl(x.type,x.key,x.props,null,u.mode,v),v.ref=pa(u,null,x),v.return=u,v;case vs:return x=_u(x,u.mode,v),x.return=u,x;case Bi:var E=x._init;return f(u,E(x._payload),v)}if(Ca(x)||ca(x))return x=Or(x,u.mode,v,null),x.return=u,x;zo(u,x)}return null}function p(u,x,v,E){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return v.key===C?l(u,x,v,E):null;case vs:return v.key===C?c(u,x,v,E):null;case Bi:return C=v._init,p(u,x,C(v._payload),E)}if(Ca(v)||ca(v))return C!==null?null:d(u,x,v,E,null);zo(u,v)}return null}function g(u,x,v,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,o(x,u,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Co:return u=u.get(E.key===null?v:E.key)||null,l(x,u,E,C);case vs:return u=u.get(E.key===null?v:E.key)||null,c(x,u,E,C);case Bi:var A=E._init;return g(u,x,v,A(E._payload),C)}if(Ca(E)||ca(E))return u=u.get(v)||null,d(x,u,E,C,null);zo(x,E)}return null}function _(u,x,v,E){for(var C=null,A=null,T=x,N=x=0,I=null;T!==null&&N<v.length;N++){T.index>N?(I=T,T=null):I=T.sibling;var y=p(u,T,v[N],E);if(y===null){T===null&&(T=I);break}t&&T&&y.alternate===null&&e(u,T),x=s(y,x,N),A===null?C=y:A.sibling=y,A=y,T=I}if(N===v.length)return n(u,T),mt&&Mr(u,N),C;if(T===null){for(;N<v.length;N++)T=f(u,v[N],E),T!==null&&(x=s(T,x,N),A===null?C=T:A.sibling=T,A=T);return mt&&Mr(u,N),C}for(T=i(u,T);N<v.length;N++)I=g(T,u,N,v[N],E),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?N:I.key),x=s(I,x,N),A===null?C=I:A.sibling=I,A=I);return t&&T.forEach(function(M){return e(u,M)}),mt&&Mr(u,N),C}function S(u,x,v,E){var C=ca(v);if(typeof C!="function")throw Error(ae(150));if(v=C.call(v),v==null)throw Error(ae(151));for(var A=C=null,T=x,N=x=0,I=null,y=v.next();T!==null&&!y.done;N++,y=v.next()){T.index>N?(I=T,T=null):I=T.sibling;var M=p(u,T,y.value,E);if(M===null){T===null&&(T=I);break}t&&T&&M.alternate===null&&e(u,T),x=s(M,x,N),A===null?C=M:A.sibling=M,A=M,T=I}if(y.done)return n(u,T),mt&&Mr(u,N),C;if(T===null){for(;!y.done;N++,y=v.next())y=f(u,y.value,E),y!==null&&(x=s(y,x,N),A===null?C=y:A.sibling=y,A=y);return mt&&Mr(u,N),C}for(T=i(u,T);!y.done;N++,y=v.next())y=g(T,u,N,y.value,E),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?N:y.key),x=s(y,x,N),A===null?C=y:A.sibling=y,A=y);return t&&T.forEach(function(F){return e(u,F)}),mt&&Mr(u,N),C}function m(u,x,v,E){if(typeof v=="object"&&v!==null&&v.type===_s&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===_s){if(A.tag===7){n(u,A.sibling),x=r(A,v.props.children),x.return=u,u=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&dm(C)===A.type){n(u,A.sibling),x=r(A,v.props),x.ref=pa(u,A,v),x.return=u,u=x;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===_s?(x=Or(v.props.children,u.mode,E,v.key),x.return=u,u=x):(E=wl(v.type,v.key,v.props,null,u.mode,E),E.ref=pa(u,x,v),E.return=u,u=E)}return a(u);case vs:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=_u(v,u.mode,E),x.return=u,u=x}return a(u);case Bi:return A=v._init,m(u,x,A(v._payload),E)}if(Ca(v))return _(u,x,v,E);if(ca(v))return S(u,x,v,E);zo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=vu(v,u.mode,E),x.return=u,u=x),a(u)):n(u,x)}return m}var Gs=bx(!0),Ax=bx(!1),Yl=fr(null),Kl=null,As=null,vh=null;function _h(){vh=As=Kl=null}function yh(t){var e=Yl.current;pt(Yl),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Kl=t,vh=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Kl===null)throw Error(ae(308));As=t,Kl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Nr=null;function Sh(t){Nr===null?Nr=[t]:Nr.push(t)}function Rx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(p=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(g,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,p=typeof _=="function"?_.call(g,f,p):_,p==null)break e;f=_t({},f,p);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=a,t.lanes=a,t.memoizedState=f}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var go={},ii=fr(go),Qa=fr(go),eo=fr(go);function Pr(t){if(t===go)throw Error(ae(174));return t}function Mh(t,e){switch(ut(eo,e),ut(Qa,t),ut(ii,go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}pt(ii),ut(ii,e)}function Ws(){pt(ii),pt(Qa),pt(eo)}function Nx(t){Pr(eo.current);var e=Pr(ii.current),n=xd(e,t.type);e!==n&&(ut(Qa,t),ut(ii,n))}function wh(t){Qa.current===t&&(pt(ii),pt(Qa))}var gt=fr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Th(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var _l=Ci.ReactCurrentDispatcher,hu=Ci.ReactCurrentBatchConfig,jr=0,xt=null,Ct=null,Ut=null,Ql=!1,ka=!1,to=0,tE=0;function jt(){throw Error(ae(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Ah(t,e,n,i,r,s){if(jr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?sE:aE,t=n(i,r),ka){s=0;do{if(ka=!1,to=0,25<=s)throw Error(ae(301));s+=1,Ut=Ct=null,e.updateQueue=null,_l.current=oE,t=n(i,r)}while(ka)}if(_l.current=ec,e=Ct!==null&&Ct.next!==null,jr=0,Ut=Ct=xt=null,Ql=!1,e)throw Error(ae(300));return t}function Rh(){var t=to!==0;return to=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?xt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Un(){if(Ct===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?xt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ae(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?xt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function no(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Un(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,xt.lanes|=d,Hr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Un(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Px(){}function Lx(t,e){var n=xt,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Ch(Ix.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,io(9,Ux.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ae(349));jr&30||Dx(n,e,r)}return r}function Dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ux(t,e,n,i){e.value=n,e.getSnapshot=i,Ox(e)&&Fx(t)}function Ix(t,e,n){return n(function(){Ox(e)&&Fx(t)})}function Ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Fx(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function pm(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=rE.bind(null,xt,t),[e.memoizedState,t]}function io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kx(){return Un().memoizedState}function yl(t,e,n,i){var r=Zn();xt.flags|=t,r.memoizedState=io(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&bh(i,a.deps)){r.memoizedState=io(e,n,s,i);return}}xt.flags|=t,r.memoizedState=io(1|e,n,s,i)}function mm(t,e){return yl(8390656,8,t,e)}function Ch(t,e){return Mc(2048,8,t,e)}function Bx(t,e){return Mc(4,2,t,e)}function zx(t,e){return Mc(4,4,t,e)}function jx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hx(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,jx.bind(null,e,t),n)}function Nh(){}function Vx(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gx(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wx(t,e,n){return jr&21?(Yn(n,e)||(n=K0(),xt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function nE(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{ot=n,hu.transition=i}}function Xx(){return Un().memoizedState}function iE(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qx(t))$x(e,n);else if(n=Rx(t,e,n,i),n!==null){var r=Qt();$n(n,t,i,r),Yx(n,e,i)}}function rE(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qx(t))$x(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Rx(t,e,r,i),n!==null&&(r=Qt(),$n(n,t,i,r),Yx(n,e,i))}}function qx(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function $x(t,e){ka=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var ec={readContext:Dn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},sE={readContext:Dn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,jx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=iE.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Nh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=nE.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Zn();if(mt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ot===null)throw Error(ae(349));jr&30||Dx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mm(Ix.bind(null,i,s,t),[t]),i.flags|=2048,io(9,Ux.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ot.identifierPrefix;if(mt){var n=yi,i=_i;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aE={readContext:Dn,useCallback:Vx,useContext:Dn,useEffect:Ch,useImperativeHandle:Hx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:Gx,useReducer:pu,useRef:kx,useState:function(){return pu(no)},useDebugValue:Nh,useDeferredValue:function(t){var e=Un();return Wx(e,Ct.memoizedState,t)},useTransition:function(){var t=pu(no)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1},oE={readContext:Dn,useCallback:Vx,useContext:Dn,useEffect:Ch,useImperativeHandle:Hx,useInsertionEffect:Bx,useLayoutEffect:zx,useMemo:Gx,useReducer:mu,useRef:kx,useState:function(){return mu(no)},useDebugValue:Nh,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:Wx(e,Ct.memoizedState,t)},useTransition:function(){var t=mu(no)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:Xx,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=er(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&($n(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=er(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&($n(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=er(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&($n(e,t,i,n),vl(e,t,i))}};function gm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,i)||!Ya(r,s):!0}function Kx(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=un(e)?Br:Kt.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=un(e)?Br:Kt.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),Jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=Iy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function Jx(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,Kd=i),zd(t,e)},n}function Zx(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function vm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=EE.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var cE=Ci.ReactCurrentOwner,ln=!1;function Zt(t,e,n,i){e.child=t===null?Ax(e,null,n,i):Gs(e,t.child,n,i)}function Sm(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=Ah(t,e,n,i,s,r),n=Rh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(mt&&n&&mh(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qx(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(a,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Qx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ya(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return jd(t,e,n,i,r)}function ev(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Cs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Cs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Cs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Cs,_n),_n|=i;return Zt(t,e,r,n),e.child}function tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=un(n)?Br:Kt.current;return s=Hs(e,s),Os(e,r),n=Ah(t,e,n,i,s,r),i=Rh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(mt&&i&&mh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Mm(t,e,n,i,r){if(un(n)){var s=!0;Xl(e)}else s=!1;if(Os(e,r),e.stateNode===null)Sl(t,e),Kx(e,n,i),Bd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=un(n)?Br:Kt.current,c=Hs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&xm(e,a,i,c),zi=!1;var p=e.memoizedState;a.state=p,Jl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||cn.current||zi?(typeof d=="function"&&(kd(e,n,d,i),l=e.memoizedState),(o=zi||gm(e,n,o,i,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Cx(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(n)?Br:Kt.current,l=Hs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&xm(e,a,i,l),zi=!1,p=e.memoizedState,a.state=p,Jl(e,i,a,r);var _=e.memoizedState;o!==f||p!==_||cn.current||zi?(typeof g=="function"&&(kd(e,n,g,i),_=e.memoizedState),(c=zi||gm(e,n,c,i,p,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,s,r)}function Hd(t,e,n,i,r,s){tv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lm(e,n,!1),Ai(t,e,s);i=e.stateNode,cE.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):Zt(t,e,o,s),e.memoizedState=i.state,r&&lm(e,n,!0),e.child}function nv(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Mh(t,e.containerInfo)}function wm(t,e,n,i,r){return Vs(),xh(r),e.flags|=256,Zt(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ac(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Vd,t):Ph(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return uE(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=tr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,i){return i!==null&&xh(i),Gs(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uE(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(ae(422))),jo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=Gd(a),e.memoizedState=Vd,s);if(!(e.mode&1))return jo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=gu(s,i,void 0),jo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ln||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),$n(i,t,r,-1))}return Fh(),i=gu(Error(ae(421))),jo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ME.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=Ji(r.nextSibling),En=e,mt=!0,Vn=null,t!==null&&(Rn[Cn++]=_i,Rn[Cn++]=yi,Rn[Cn++]=zr,_i=t.id,yi=t.overflow,zr=e),e=Ph(e,i.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function rv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dE(t,e,n){switch(e.tag){case 3:nv(e),Vs();break;case 5:Nx(e);break;case 1:un(e.type)&&Xl(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(ut(gt,gt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return rv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,ev(t,e,n)}return Ai(t,e,n)}var sv,Wd,av,ov;sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};av=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ii.current);var s=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=gd(t,r),i=gd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gl)}vd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ov=function(t,e,n,i){n!==i&&(e.flags|=4)};function ma(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function fE(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return un(e.type)&&Wl(),Ht(e),null;case 3:return i=e.stateNode,Ws(),pt(cn),pt(Kt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Qd(Vn),Vn=null))),Wd(t,e),Ht(e),null;case 5:wh(e);var r=Pr(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)av(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ht(e),null}if(t=Pr(ii.current),Bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Pa.length;r++)ft(Pa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Up(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Op(i,s),ft("invalid",i)}vd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",""+o]):Ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":No(i),Ip(i,s,!0);break;case"textarea":No(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[Za]=i,sv(t,e,!1,!1),e.stateNode=t;e:{switch(a=_d(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Pa.length;r++)ft(Pa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Up(t,i),r=hd(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Op(t,i),r=gd(t,i),ft("invalid",t);break;default:r=i}vd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?k0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&th(t,s,l,a))}switch(n){case"input":No(t),Ip(t,i,!1);break;case"textarea":No(t),Fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)ov(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Pr(eo.current),Pr(ii.current),Bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Ht(e),null;case 13:if(pt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Sn!==null&&e.mode&1&&!(e.flags&128))Tx(),Vs(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ti]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Vn!==null&&(Qd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Nt===0&&(Nt=3):Fh())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ws(),Wd(t,e),t===null&&Ka(e.stateNode.containerInfo),Ht(e),null;case 10:return yh(e.type._context),Ht(e),null;case 17:return un(e.type)&&Wl(),Ht(e),null;case 19:if(pt(gt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ma(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Zl(t),a!==null){for(e.flags|=128,ma(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>qs&&(e.flags|=128,i=!0,ma(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Ht(e),null}else 2*Mt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,ma(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function hE(t,e){switch(gh(e),e.tag){case 1:return un(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),pt(cn),pt(Kt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(pt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Ws(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Ho=!1,Xt=!1,pE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Xd(t,e,n){try{n()}catch(i){St(t,e,i)}}var bm=!1;function mE(t,e){if(Cd=jl,t=fx(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},jl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,m=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:jn(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){St(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=bm,bm=!1,_}function Ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xd(e,n,s)}r=r.next}while(r!==i)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lv(t){var e=t.alternate;e!==null&&(t.alternate=null,lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Za],delete e[Dd],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}var kt=null,Hn=!1;function Li(t,e,n){for(n=n.child;n!==null;)uv(t,e,n),n=n.sibling}function uv(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(xc,n)}catch{}switch(n.tag){case 5:Xt||Rs(n,e);case 6:var i=kt,r=Hn;kt=null,Li(t,e,n),kt=i,Hn=r,kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Hn?(t=kt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),qa(t)):uu(kt,n.stateNode));break;case 4:i=kt,r=Hn,kt=n.stateNode.containerInfo,Hn=!0,Li(t,e,n),kt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Xd(n,e,a),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Xt&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Li(t,e,n),Xt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pE),e.forEach(function(i){var r=wE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Hn=!1;break e;case 3:kt=o.stateNode.containerInfo,Hn=!0;break e;case 4:kt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(kt===null)throw Error(ae(160));uv(s,a,r),kt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dv(e,t),e=e.sibling}function dv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{Ba(3,t,t.return),Tc(3,t)}catch(S){St(t,t.return,S)}try{Ba(5,t,t.return)}catch(S){St(t,t.return,S)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(S){St(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&D0(r,s),_d(o,a);var c=_d(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?k0(r,f):d==="dangerouslySetInnerHTML"?O0(r,f):d==="children"?Va(r,f):th(r,d,f,c)}switch(o){case"input":pd(r,s);break;case"textarea":U0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ls(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(S){St(t,t.return,S)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){St(t,t.return,S)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(S){St(t,t.return,S)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uh=Mt())),i&4&&Rm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,Fn(e,t),Xt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(f=_e=d;_e!==null;){switch(p=_e,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ba(4,p,p.return);break;case 1:Rs(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){St(i,n,S)}}break;case 5:Rs(p,p.return);break;case 22:if(p.memoizedState!==null){Nm(f);continue}}g!==null?(g.return=p,_e=g):Nm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=F0("display",a))}catch(S){St(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){St(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Rm(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=Am(t);Yd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Am(t);$d(t,o,a);break;default:throw Error(ae(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gE(t,e,n){_e=t,fv(t)}function fv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=Ho;var c=Xt;if(Ho=a,(Xt=l)&&!c)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?Pm(r):l!==null?(l.return=a,_e=l):Pm(r);for(;s!==null;)_e=s,fv(s),s=s.sibling;_e=r,Ho=o,Xt=c}Cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Cm(t)}}function Cm(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Xt||e.flags&512&&qd(e)}catch(p){St(e,e.return,p)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Nm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Pm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{qd(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{qd(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var xE=Math.ceil,tc=Ci.ReactCurrentDispatcher,Lh=Ci.ReactCurrentOwner,Ln=Ci.ReactCurrentBatchConfig,Je=0,Ot=null,At=null,Bt=0,_n=0,Cs=fr(0),Nt=0,ro=null,Hr=0,bc=0,Dh=0,za=null,an=null,Uh=0,qs=1/0,gi=null,nc=!1,Kd=null,Qi=null,Vo=!1,Wi=null,ic=0,ja=0,Jd=null,El=-1,Ml=0;function Qt(){return Je&6?Mt():El!==-1?El:El=Mt()}function er(t){return t.mode&1?Je&2&&Bt!==0?Bt&-Bt:eE.transition!==null?(Ml===0&&(Ml=K0()),Ml):(t=ot,t!==0||(t=window.event,t=t===void 0?16:ix(t.type)),t):1}function $n(t,e,n,i){if(50<ja)throw ja=0,Jd=null,Error(ae(185));ho(t,n,i),(!(Je&2)||t!==Ot)&&(t===Ot&&(!(Je&2)&&(bc|=n),Nt===4&&Hi(t,Bt)),dn(t,i),n===1&&Je===0&&!(e.mode&1)&&(qs=Mt()+500,Ec&&hr()))}function dn(t,e){var n=t.callbackNode;eS(t,e);var i=zl(t,t===Ot?Bt:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?QS(Lm.bind(null,t)):Ex(Lm.bind(null,t)),YS(function(){!(Je&6)&&hr()}),n=null;else{switch(J0(i)){case 1:n=ah;break;case 4:n=$0;break;case 16:n=Bl;break;case 536870912:n=Y0;break;default:n=Bl}n=yv(n,hv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hv(t,e){if(El=-1,Ml=0,Je&6)throw Error(ae(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=zl(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Je;Je|=2;var s=mv();(Ot!==t||Bt!==e)&&(gi=null,qs=Mt()+500,Ir(t,e));do try{yE();break}catch(o){pv(t,o)}while(!0);_h(),tc.current=s,Je=r,At!==null?e=0:(Ot=null,Bt=0,e=Nt)}if(e!==0){if(e===2&&(r=wd(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=ro,Ir(t,0),Hi(t,i),dn(t,Mt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vE(r)&&(e=rc(t,i),e===2&&(s=wd(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=ro,Ir(t,0),Hi(t,i),dn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:wr(t,an,gi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Uh+500-Mt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ld(wr.bind(null,t,an,gi),e);break}wr(t,an,gi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xE(i/1960))-i,10<i){t.timeoutHandle=Ld(wr.bind(null,t,an,gi),i);break}wr(t,an,gi);break;case 5:wr(t,an,gi);break;default:throw Error(ae(329))}}}return dn(t,Mt()),t.callbackNode===n?hv.bind(null,t):null}function Zd(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=rc(t,e),t!==2&&(e=an,an=n,e!==null&&Qd(e)),t}function Qd(t){an===null?an=t:an.push.apply(an,t)}function vE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Dh,e&=~bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Lm(t){if(Je&6)throw Error(ae(327));Fs();var e=zl(t,0);if(!(e&1))return dn(t,Mt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=wd(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=ro,Ir(t,0),Hi(t,e),dn(t,Mt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,an,gi),dn(t,Mt()),null}function Ih(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(qs=Mt()+500,Ec&&hr())}}function Vr(t){Wi!==null&&Wi.tag===0&&!(Je&6)&&Fs();var e=Je;Je|=1;var n=Ln.transition,i=ot;try{if(Ln.transition=null,ot=1,t)return t()}finally{ot=i,Ln.transition=n,Je=e,!(Je&6)&&hr()}}function Oh(){_n=Cs.current,pt(Cs)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$S(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:Ws(),pt(cn),pt(Kt),Th();break;case 5:wh(i);break;case 4:Ws();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:yh(i.type._context);break;case 22:case 23:Oh()}n=n.return}if(Ot=t,At=t=tr(t.current,null),Bt=_n=e,Nt=0,ro=null,Dh=bc=Hr=0,an=za=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Nr=null}return t}function pv(t,e){do{var n=At;try{if(_h(),_l.current=ec,Ql){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(jr=0,Ut=Ct=xt=null,ka=!1,to=0,Lh.current=null,n===null||n.return===null){Nt=1,ro=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=_m(a);if(g!==null){g.flags&=-257,ym(g,a,o,s,e),g.mode&1&&vm(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){vm(s,c,e),Fh();break e}l=Error(ae(426))}}else if(mt&&o.mode&1){var m=_m(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ym(m,a,o,s,e),xh(Xs(l,o));break e}}s=l=Xs(l,o),Nt!==4&&(Nt=2),za===null?za=[s]:za.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Jx(s,l,e);fm(s,u);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qi===null||!Qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Zx(s,o,e);fm(s,E);break e}}s=s.return}while(s!==null)}xv(n)}catch(C){e=C,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function mv(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Fh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ot===null||!(Hr&268435455)&&!(bc&268435455)||Hi(Ot,Bt)}function rc(t,e){var n=Je;Je|=2;var i=mv();(Ot!==t||Bt!==e)&&(gi=null,Ir(t,e));do try{_E();break}catch(r){pv(t,r)}while(!0);if(_h(),Je=n,tc.current=i,At!==null)throw Error(ae(261));return Ot=null,Bt=0,Nt}function _E(){for(;At!==null;)gv(At)}function yE(){for(;At!==null&&!Wy();)gv(At)}function gv(t){var e=_v(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?xv(t):At=e,Lh.current=null}function xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hE(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,At=null;return}}else if(n=fE(n,e,_n),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Nt===0&&(Nt=5)}function wr(t,e,n){var i=ot,r=Ln.transition;try{Ln.transition=null,ot=1,SE(t,e,n,i)}finally{Ln.transition=r,ot=i}return null}function SE(t,e,n,i){do Fs();while(Wi!==null);if(Je&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tS(t,s),t===Ot&&(At=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,yv(Bl,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=ot;ot=1;var o=Je;Je|=4,Lh.current=null,mE(t,n),dv(n,t),jS(Nd),jl=!!Cd,Nd=Cd=null,t.current=n,gE(n),Xy(),Je=o,ot=a,Ln.transition=s}else t.current=n;if(Vo&&(Vo=!1,Wi=t,ic=r),s=t.pendingLanes,s===0&&(Qi=null),Yy(n.stateNode),dn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=Kd,Kd=null,t;return ic&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===Jd?ja++:(ja=0,Jd=t):ja=0,hr(),null}function Fs(){if(Wi!==null){var t=J0(ic),e=Ln.transition,n=ot;try{if(Ln.transition=null,ot=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,ic=0,Je&6)throw Error(ae(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:Ba(8,d,s)}var f=d.child;if(f!==null)f.return=d,_e=f;else for(;_e!==null;){d=_e;var p=d.sibling,g=d.return;if(lv(d),d===c){_e=null;break}if(p!==null){p.return=g,_e=p;break}_e=g}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var x=t.current;for(_e=x;_e!==null;){a=_e;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,_e=v;else e:for(a=x;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Tc(9,o)}}catch(C){St(o,o.return,C)}if(o===a){_e=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,_e=E;break e}_e=o.return}}if(Je=r,hr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(xc,t)}catch{}i=!0}return i}finally{ot=n,Ln.transition=e}}return!1}function Dm(t,e,n){e=Xs(n,e),e=Jx(t,e,1),t=Zi(t,e,1),e=Qt(),t!==null&&(ho(t,1,e),dn(t,e))}function St(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Xs(n,t),t=Zx(e,t,1),e=Zi(e,t,1),t=Qt(),e!==null&&(ho(e,1,t),dn(e,t));break}}e=e.return}}function EE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(Nt===4||Nt===3&&(Bt&130023424)===Bt&&500>Mt()-Uh?Ir(t,0):Dh|=n),dn(t,e)}function vv(t,e){e===0&&(t.mode&1?(e=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):e=1);var n=Qt();t=bi(t,e),t!==null&&(ho(t,e,n),dn(t,n))}function ME(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vv(t,n)}function wE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),vv(t,n)}var _v;_v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,dE(t,e,n);ln=!!(t.flags&131072)}else ln=!1,mt&&e.flags&1048576&&Mx(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Hs(e,Kt.current);Os(e,n),r=Ah(null,e,i,t,r,n);var s=Rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,Bd(e,i,t,n),e=Hd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&mh(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bE(i),t=jn(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=Mm(null,e,i,t,n);break e;case 11:e=Sm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,jn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Mm(t,e,i,r,n);case 3:e:{if(nv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cx(t,e),Jl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(ae(423)),e),e=wm(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(ae(424)),e),e=wm(t,e,i,n,r);break e}else for(Sn=Ji(e.stateNode.containerInfo.firstChild),En=e,mt=!0,Vn=null,n=Ax(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Ai(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return Nx(e),t===null&&Od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pd(i,r)?a=null:s!==null&&Pd(i,s)&&(e.flags|=32),tv(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&Od(e),null;case 13:return iv(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Sm(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Yl,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!cn.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Dn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Em(t,e,i,r,n);case 15:return Qx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Sl(t,e),e.tag=1,un(i)?(t=!0,Xl(e)):t=!1,Os(e,n),Kx(e,i,r),Bd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return rv(t,e,n);case 22:return ev(t,e,n)}throw Error(ae(156,e.tag))};function yv(t,e){return q0(t,e)}function TE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new TE(t,e,n,i)}function kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bE(t){if(typeof t=="function")return kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")kh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Or(n.children,r,s,e);case nh:a=8,r|=8;break;case cd:return t=Nn(12,n,e,r|2),t.elementType=cd,t.lanes=s,t;case ud:return t=Nn(13,n,e,r),t.elementType=ud,t.lanes=s,t;case dd:return t=Nn(19,n,e,r),t.elementType=dd,t.lanes=s,t;case N0:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R0:a=10;break e;case C0:a=9;break e;case ih:a=11;break e;case rh:a=14;break e;case Bi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,i,r,s,a,o,l){return t=new AE(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function RE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return or;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(un(n))return Sx(t,n,e)}return e}function Ev(t,e,n,i,r,s,a,o,l){return t=Bh(n,i,!0,t,r,s,a,o,l),t.context=Sv(null),n=t.current,i=Qt(),r=er(n),s=Mi(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,ho(t,r,i),dn(t,i),t}function Rc(t,e,n,i){var r=e.current,s=Qt(),a=er(r);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,a),t!==null&&($n(t,r,a,s),vl(t,r,a)),a}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function CE(){return null}var Mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Cc.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Rc(t,e,null,null)};Cc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Rc(null,t,null,null)}),e[Ti]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ex();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&nx(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function NE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(a);s.call(c)}}var a=Ev(e,i,t,0,null,!1,!1,"",Im);return t._reactRootContainer=a,t[Ti]=a.current,Ka(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=sc(l);o.call(c)}}var l=Bh(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=l,t[Ti]=l.current,Ka(t.nodeType===8?t.parentNode:t),Vr(function(){Rc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=sc(a);o.call(l)}}Rc(e,a,t,r)}else a=NE(n,e,t,r,i);return sc(a)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(oh(e,n|1),dn(e,Mt()),!(Je&6)&&(qs=Mt()+500,hr()))}break;case 13:Vr(function(){var i=bi(t,1);if(i!==null){var r=Qt();$n(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Qt();$n(e,t,134217728,n)}zh(t,134217728)}};Q0=function(t){if(t.tag===13){var e=er(t),n=bi(t,e);if(n!==null){var i=Qt();$n(n,t,e,i)}zh(t,e)}};ex=function(){return ot};tx=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Sd=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(ae(90));L0(i),pd(i,r)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};j0=Ih;H0=Vr;var PE={usingClientEntryPoint:!1,Events:[mo,Ms,Sc,B0,z0,Ih]},ga={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W0(t),t===null?null:t.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||CE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{xc=Go.inject(LE),ni=Go}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(ae(200));return RE(t,e,null,n)};wn.createRoot=function(t,e){if(!Hh(t))throw Error(ae(299));var n=!1,i="",r=Mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Ka(t.nodeType===8?t.parentNode:t),new jh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=W0(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Vr(t)};wn.hydrate=function(t,e,n){if(!Nc(e))throw Error(ae(200));return Pc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Mv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,r,!1,s,a),t[Ti]=e.current,Ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};wn.render=function(t,e,n){if(!Nc(e))throw Error(ae(200));return Pc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(ae(40));return t._reactRootContainer?(Vr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};wn.unstable_batchedUpdates=Ih;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Pc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(t){console.error(t)}}wv(),w0.exports=wn;var DE=w0.exports,Om=DE;od.createRoot=Om.createRoot,od.hydrateRoot=Om.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},so.apply(null,arguments)}var Xi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xi||(Xi={}));const Fm="popstate";function UE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return ef("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ac(r)}return OE(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IE(){return Math.random().toString(36).substr(2,8)}function km(t,e){return{usr:t.state,key:t.key,idx:e}}function ef(t,e,n,i){return n===void 0&&(n=null),so({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ia(e):e,{state:n,key:e&&e.key||i||IE()})}function ac(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ia(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function OE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Xi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(so({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Xi.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:S.location,delta:u})}function p(m,u){o=Xi.Push;let x=ef(S.location,m,u);c=d()+1;let v=km(x,c),E=S.createHref(x);try{a.pushState(v,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(E)}s&&l&&l({action:o,location:S.location,delta:1})}function g(m,u){o=Xi.Replace;let x=ef(S.location,m,u);c=d();let v=km(x,c),E=S.createHref(x);a.replaceState(v,"",E),s&&l&&l({action:o,location:S.location,delta:0})}function _(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:ac(m);return x=x.replace(/ $/,"%20"),wt(u,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,u)}let S={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Fm,f),l=m,()=>{r.removeEventListener(Fm,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:p,replace:g,go(m){return a.go(m)}};return S}var Bm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bm||(Bm={}));function FE(t,e,n){return n===void 0&&(n="/"),kE(t,e,n)}function kE(t,e,n,i){let r=typeof e=="string"?ia(e):e,s=Vh(r.pathname||"/",n);if(s==null)return null;let a=bv(t);BE(a);let o=null,l=JE(s);for(let c=0;o==null&&c<a.length;++c)o=$E(a[c],l);return o}function bv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(wt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=nr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(wt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XE(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Av(s.path))r(s,a,l)}),e}function Av(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Av(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function BE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const zE=/^:[\w-]+$/,jE=3,HE=2,VE=1,GE=10,WE=-2,zm=t=>t==="*";function XE(t,e){let n=t.split("/"),i=n.length;return n.some(zm)&&(i+=WE),e&&(i+=HE),n.filter(r=>!zm(r)).reduce((r,s)=>r+(zE.test(s)?jE:s===""?VE:GE),i)}function qE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function $E(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=YE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:nr([s,f.pathname]),pathnameBase:e1(nr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=nr([s,f.pathnameBase]))}return a}function YE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=KE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let S=o[f]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const _=o[f];return g&&!_?c[p]=void 0:c[p]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function KE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function JE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function ZE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ia(t):t,s;return n?(n=Rv(n),n.startsWith("/")?s=jm(n.substring(1),"/"):s=jm(n,e)):s=e,{pathname:s,search:t1(i),hash:n1(r)}}function jm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function yu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gh(t,e){let n=QE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Wh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ia(t):(r=so({},t),wt(!r.pathname||!r.pathname.includes("?"),yu("?","pathname","search",r)),wt(!r.pathname||!r.pathname.includes("#"),yu("#","pathname","hash",r)),wt(!r.search||!r.search.includes("#"),yu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=ZE(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Rv=t=>t.replace(/\/\/+/g,"/"),nr=t=>Rv(t.join("/")),e1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,n1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function i1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Cv=["post","put","patch","delete"];new Set(Cv);const r1=["get",...Cv];new Set(r1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ao.apply(null,arguments)}const Xh=j.createContext(null),s1=j.createContext(null),pr=j.createContext(null),Lc=j.createContext(null),Ni=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Nv=j.createContext(null);function a1(t,e){let{relative:n}=e===void 0?{}:e;ra()||wt(!1);let{basename:i,navigator:r}=j.useContext(pr),{hash:s,pathname:a,search:o}=Lv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:nr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function ra(){return j.useContext(Lc)!=null}function Zr(){return ra()||wt(!1),j.useContext(Lc).location}function Pv(t){j.useContext(pr).static||j.useLayoutEffect(t)}function ai(){let{isDataRoute:t}=j.useContext(Ni);return t?y1():o1()}function o1(){ra()||wt(!1);let t=j.useContext(Xh),{basename:e,future:n,navigator:i}=j.useContext(pr),{matches:r}=j.useContext(Ni),{pathname:s}=Zr(),a=JSON.stringify(Gh(r,n.v7_relativeSplatPath)),o=j.useRef(!1);return Pv(()=>{o.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Wh(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:nr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function l1(){let{matches:t}=j.useContext(Ni),e=t[t.length-1];return e?e.params:{}}function Lv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=j.useContext(pr),{matches:r}=j.useContext(Ni),{pathname:s}=Zr(),a=JSON.stringify(Gh(r,i.v7_relativeSplatPath));return j.useMemo(()=>Wh(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function c1(t,e){return u1(t,e)}function u1(t,e,n,i){ra()||wt(!1);let{navigator:r}=j.useContext(pr),{matches:s}=j.useContext(Ni),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Zr(),d;if(e){var f;let m=typeof e=="string"?ia(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||wt(!1),d=m}else d=c;let p=d.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=FE(t,{pathname:g}),S=m1(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:nr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:nr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&S?j.createElement(Lc.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xi.Pop}},S):S}function d1(){let t=_1(),e=i1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:r},n):null,null)}const f1=j.createElement(d1,null);class h1 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Ni.Provider,{value:this.props.routeContext},j.createElement(Nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p1(t){let{routeContext:e,match:n,children:i}=t,r=j.useContext(Xh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ni.Provider,{value:e},i)}function m1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||wt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:g}=n,_=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let g,_=!1,S=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,S=f.route.errorElement||f1,l&&(c<0&&p===0?(S1("route-fallback"),_=!0,m=null):c===p&&(_=!0,m=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,p+1)),x=()=>{let v;return g?v=S:_?v=m:f.route.Component?v=j.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,j.createElement(p1,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(h1,{location:n.location,revalidation:n.revalidation,component:S,error:g,children:x(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):x()},null)}var Dv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Dv||{}),Uv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uv||{});function g1(t){let e=j.useContext(Xh);return e||wt(!1),e}function x1(t){let e=j.useContext(s1);return e||wt(!1),e}function v1(t){let e=j.useContext(Ni);return e||wt(!1),e}function Iv(t){let e=v1(),n=e.matches[e.matches.length-1];return n.route.id||wt(!1),n.route.id}function _1(){var t;let e=j.useContext(Nv),n=x1(),i=Iv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function y1(){let{router:t}=g1(Dv.UseNavigateStable),e=Iv(Uv.UseNavigateStable),n=j.useRef(!1);return Pv(()=>{n.current=!0}),j.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ao({fromRouteId:e},s)))},[t,e])}const Hm={};function S1(t,e,n){Hm[t]||(Hm[t]=!0)}function E1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function qh(t){let{to:e,replace:n,state:i,relative:r}=t;ra()||wt(!1);let{future:s,static:a}=j.useContext(pr),{matches:o}=j.useContext(Ni),{pathname:l}=Zr(),c=ai(),d=Wh(e,Gh(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function Jn(t){wt(!1)}function M1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Xi.Pop,navigator:s,static:a=!1,future:o}=t;ra()&&wt(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:a,future:ao({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ia(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:_="default"}=i,S=j.useMemo(()=>{let m=Vh(d,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:_},navigationType:r}},[l,d,f,p,g,_,r]);return S==null?null:j.createElement(pr.Provider,{value:c},j.createElement(Lc.Provider,{children:n,value:S}))}function w1(t){let{children:e,location:n}=t;return c1(tf(e),n)}new Promise(()=>{});function tf(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(i,r)=>{if(!j.isValidElement(i))return;let s=[...e,r];if(i.type===j.Fragment){n.push.apply(n,tf(i.props.children,s));return}i.type!==Jn&&wt(!1),!i.props.index||!i.props.children||wt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=tf(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nf(){return nf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nf.apply(null,arguments)}function T1(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function b1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function A1(t,e){return t.button===0&&(!e||e==="_self")&&!b1(t)}function rf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function R1(t,e){let n=rf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const C1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],N1="6";try{window.__reactRouterVersion=N1}catch{}const P1="startTransition",Vm=Ey[P1];function L1(t){let{basename:e,children:n,future:i,window:r}=t,s=j.useRef();s.current==null&&(s.current=UE({window:r,v5Compat:!0}));let a=s.current,[o,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=j.useCallback(f=>{c&&Vm?Vm(()=>l(f)):l(f)},[l,c]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.useEffect(()=>E1(i),[i]),j.createElement(M1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",U1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=j.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,p=T1(e,C1),{basename:g}=j.useContext(pr),_,S=!1;if(typeof c=="string"&&U1.test(c)&&(_=c,D1))try{let v=new URL(window.location.href),E=c.startsWith("//")?new URL(v.protocol+c):new URL(c),C=Vh(E.pathname,g);E.origin===v.origin&&C!=null?c=C+E.search+E.hash:S=!0}catch{}let m=a1(c,{relative:r}),u=I1(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function x(v){i&&i(v),v.defaultPrevented||u(v)}return j.createElement("a",nf({},p,{href:_||m,onClick:S||s?i:x,ref:n,target:l}))});var Gm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gm||(Gm={}));var Wm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wm||(Wm={}));function I1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=ai(),c=Zr(),d=Lv(t,{relative:a});return j.useCallback(f=>{if(A1(f,n)){f.preventDefault();let p=i!==void 0?i:ac(c)===ac(d);l(t,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function Ov(t){let e=j.useRef(rf(t)),n=j.useRef(!1),i=Zr(),r=j.useMemo(()=>R1(i.search,n.current?null:e.current),[i.search]),s=ai(),a=j.useCallback((o,l)=>{const c=rf(typeof o=="function"?o(r):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}function Fv(t,e){return function(){return t.apply(e,arguments)}}const{toString:O1}=Object.prototype,{getPrototypeOf:lr}=Object,{iterator:xo,toStringTag:kv}=Symbol,oo=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Bv=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),zv=(t,e,n)=>t===Object.prototype||!n&&e===null,F1=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(Bv(n))return!1;const i=Object.getOwnPropertyDescriptor(t,n);return!!i&&i.configurable&&i.writable===!0})},lo=(t,e)=>{let n=t;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const r=lr(n);if(zv(n,r,n===t))return!1;if(oo(n,e))return!0;n=r}return!1},k1=(t,e)=>t!=null&&lo(t,e)?t[e]:void 0,B1=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=lr(t);if(e===null&&F1(t))return t;const n=Object.create(null),i=Object.create(null),r=[];let s=t;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===t?e:lr(s);if(zv(s,a,s===t))break;const o=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&o.push(...Object.getOwnPropertySymbols(s));for(const l of o)Bv(l)||oo(i,l)||(n[l]=t[l],i[l]=!0);s=a}return n},$h=(t=>e=>{const n=O1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),In=t=>(t=t.toLowerCase(),e=>$h(e)===t),Dc=t=>e=>typeof e===t,{isArray:Gr}=Array,Wr=Dc("undefined");function sa(t){return t!==null&&!Wr(t)&&t.constructor!==null&&!Wr(t.constructor)&&fn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const jv=In("ArrayBuffer");function z1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&jv(t.buffer),e}const j1=Dc("string"),fn=Dc("function"),Hv=Dc("number"),aa=t=>t!==null&&typeof t=="object",H1=t=>t===!0||t===!1,Tl=t=>{if(!aa(t))return!1;const e=lr(t);return(e===null||e===Object.prototype||lr(e)===null)&&!lo(t,kv)&&!lo(t,xo)},V1=t=>{if(!aa(t)||sa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},G1=In("Date"),W1=In("File"),X1=t=>!!(t&&typeof t.uri<"u"),q1=t=>t&&typeof t.getParts<"u",$1=In("Blob"),Y1=In("FileList"),K1=In("Set"),J1=t=>aa(t)&&fn(t.pipe);function Z1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Xm=Z1(),qm=typeof Xm.FormData<"u"?Xm.FormData:void 0,Q1=t=>{if(!t)return!1;if(qm&&t instanceof qm)return!0;const e=lr(t);if(!e||e===Object.prototype||!fn(t.append))return!1;const n=$h(t);return n==="formdata"||n==="object"&&fn(t.toString)&&t.toString()==="[object FormData]"},eM=In("URLSearchParams"),[tM,nM,iM,rM]=["ReadableStream","Request","Response","Headers"].map(In),sM=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Gr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(sa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function Vv(t,e){if(sa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gv=t=>!Wr(t)&&t!==Lr;function sf(...t){const{caseless:e,skipUndefined:n}=Gv(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&Vv(i,a)||a,l=oo(i,o)?i[o]:void 0;Tl(l)&&Tl(s)?i[o]=sf(l,s):Tl(s)?i[o]=sf({},s):Gr(s)?i[o]=s.slice():(!n||!Wr(s))&&(i[o]=s)};for(let s=0,a=t.length;s<a;s++){const o=t[s];if(!o||sa(o)||(vo(o,r),typeof o!="object"||Gr(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let c=0;c<l.length;c++){const d=l[c];xM.call(o,d)&&r(o[d],d)}}return i}const aM=(t,e,n,{allOwnKeys:i}={})=>(vo(e,(r,s)=>{n&&fn(r)?Object.defineProperty(t,s,{__proto__:null,value:Fv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),oM=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),lM=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},cM=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&lr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},uM=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},dM=t=>{if(!t)return null;if(Gr(t))return t;let e=t.length;if(!Hv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},fM=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lr(Uint8Array)),hM=(t,e)=>{const i=(t&&t[xo]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},pM=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},mM=In("HTMLFormElement"),gM=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:xM}=Object.prototype,vM=In("RegExp"),Wv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};vo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},_M=t=>{Wv(t,(e,n)=>{if(fn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(fn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yM=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Gr(t)?i(t):i(String(t).split(e)),n},SM=()=>{},EM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function MM(t){return!!(t&&fn(t.append)&&t[kv]==="FormData"&&t[xo])}const wM=t=>{const e=new WeakSet,n=i=>{if(aa(i)){if(e.has(i))return;if(sa(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(K1(i)){r=[];for(const s of i){const a=n(s);!Wr(a)&&r.push(a)}}else r=Gr(i)?[]:{},vo(i,(s,a)=>{const o=n(s);!Wr(o)&&(r[a]=o)});return e.delete(i),r}}return i};return n(t)},TM=In("AsyncFunction"),bM=t=>t&&(aa(t)||fn(t))&&fn(t.then)&&fn(t.catch),Xv=((t,e)=>t?setImmediate:e?((n,i)=>(Lr.addEventListener("message",({source:r,data:s})=>{r===Lr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Lr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fn(Lr.postMessage)),AM=typeof queueMicrotask<"u"?queueMicrotask.bind(Lr):typeof process<"u"&&process.nextTick||Xv,qv=t=>t!=null&&fn(t[xo]),RM=t=>t!=null&&lo(t,xo)&&qv(t),L={isArray:Gr,isArrayBuffer:jv,isBuffer:sa,isFormData:Q1,isArrayBufferView:z1,isString:j1,isNumber:Hv,isBoolean:H1,isObject:aa,isPlainObject:Tl,isEmptyObject:V1,isReadableStream:tM,isRequest:nM,isResponse:iM,isHeaders:rM,isUndefined:Wr,isDate:G1,isFile:W1,isReactNativeBlob:X1,isReactNative:q1,isBlob:$1,isRegExp:vM,isFunction:fn,isStream:J1,isURLSearchParams:eM,isTypedArray:fM,isFileList:Y1,forEach:vo,merge:sf,extend:aM,trim:sM,stripBOM:oM,inherits:lM,toFlatObject:cM,kindOf:$h,kindOfTest:In,endsWith:uM,toArray:dM,forEachEntry:hM,matchAll:pM,isHTMLForm:mM,hasOwnProperty:oo,hasOwnProp:oo,hasOwnInPrototypeChain:lo,getSafeProp:k1,toSafeFlatObject:B1,reduceDescriptors:Wv,freezeMethods:_M,toObjectSet:yM,toCamelCase:gM,noop:SM,toFiniteNumber:EM,findKey:Vv,global:Lr,isContextDefined:Gv,isSpecCompliantForm:MM,toJSONObject:wM,isAsyncFn:TM,isThenable:bM,setImmediate:Xv,asap:AM,isIterable:qv,isSafeIterable:RM},CM=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),NM=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=L.hasOwnProp(e,n);!n||o&&L.hasOwnProp(CM,n)||(n==="set-cookie"?o?e[n].push(i):e[n]=[i]:e[n]=o?e[n]+", "+i:i)}),e};function PM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const LM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),DM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Yh(t,e){return L.isArray(t)?t.map(n=>Yh(n,e)):PM(String(t).replace(e,""))}const UM=t=>Yh(t,LM),IM=t=>Yh(t,DM);function $v(t){const e=Object.create(null);return L.forEach(t.toJSON(),(n,i)=>{e[i]=IM(n)}),e}const $m=Symbol("internals");function xa(t){return t&&String(t).trim().toLowerCase()}function bl(t){return t===!1||t==null?t:L.isArray(t)?t.map(bl):UM(String(t))}function OM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const FM=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Su(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function kM(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function BM(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(o){const l=Su(n.slice(i,o)),c=l.indexOf("=");if(c<1)return;const d=Su(l.slice(0,c));if(!FM.test(d))return;const f=d.toLowerCase();if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=Su(l.slice(c+1));e[f]=kM(p)}for(let o=0;o<n.length;o++){const l=n.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(n.length),e}const zM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Eu(t,e,n,i,r){if(L.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!L.isString(e)){if(L.isString(i))return e.indexOf(i)!==-1;if(L.isRegExp(i))return i.test(e)}}function jM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function HM(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let qt=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,c){const d=xa(l);if(!d)return;const f=L.findKey(r,d);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=bl(o))}const a=(o,l)=>L.forEach(o,(c,d)=>s(c,d,l));if(L.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(L.isString(e)&&(e=e.trim())&&!zM(e))a(NM(e),n);else if(L.isObject(e)&&L.isSafeIterable(e)){let o=Object.create(null),l,c;for(const d of e){if(!L.isArray(d))throw new TypeError("Object iterator must return a key-value pair");c=d[0],L.hasOwnProp(o,c)?(l=o[c],o[c]=L.isArray(l)?[...l,d[1]]:[l,d[1]]):o[c]=d[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=xa(e),e){const i=L.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return OM(r);if(L.isFunction(n))return n.call(this,r,i);if(L.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=xa(e),e){const i=L.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Eu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=xa(a),a){const o=L.findKey(i,a);o&&(!n||Eu(i,i[o],o,n))&&(delete i[o],r=!0)}}return L.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Eu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return L.forEach(this,(r,s)=>{const a=L.findKey(i,s);if(a){n[a]=bl(r),delete n[s];return}const o=e?jM(s):String(s).trim();o!==s&&delete n[s],n[o]=bl(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&L.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return L.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return BM(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[$m]=this[$m]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=xa(a);i[o]||(HM(r,a),i[o]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}};qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(qt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});L.freezeMethods(qt);const oc="[REDACTED ****]";function VM(t){if(L.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(L.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function GM(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||L.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof qt&&(s=s.toJSON()),i.push(s);let a;if(L.isArray(s))a=[],s.forEach((o,l)=>{const c=r(o);L.isUndefined(c)||(a[l]=c)});else{if(!L.isPlainObject(s)&&VM(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const c=n.has(o.toLowerCase())?oc:r(l);L.isUndefined(c)||(a[o]=c)}}return i.pop(),a};return r(t)}function Ym(t){try{return String(t)}catch{return""}}function WM(t){return t.errors.map(n=>{try{return n&&n.message?Ym(n.message):Ym(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let ue=class Yv extends Error{static from(e,n,i,r,s,a){let o=e.message;!o&&L.isArray(e.errors)&&e.errors.length&&(o=WM(e));const l=new Yv(o,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&L.hasOwnProp(e,"redact")?e.redact:void 0,i=L.isArray(n)&&n.length>0?GM(e,n):L.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ue.ERR_BAD_OPTION="ERR_BAD_OPTION";ue.ECONNABORTED="ECONNABORTED";ue.ETIMEDOUT="ETIMEDOUT";ue.ECONNREFUSED="ECONNREFUSED";ue.ERR_NETWORK="ERR_NETWORK";ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ue.ERR_DEPRECATED="ERR_DEPRECATED";ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ue.ERR_CANCELED="ERR_CANCELED";ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ue.ERR_INVALID_URL="ERR_INVALID_URL";ue.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const XM=null,Kv=100;function af(t){return L.isPlainObject(t)||L.isArray(t)}function Jv(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Mu(t,e,n){return t?t.concat(e).map(function(r,s){return r=Jv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function qM(t){return L.isArray(t)&&!t.some(af)}const $M=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Uc(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(x,v)=>{const E=L.getSafeProp(n,x);return L.isUndefined(E)?v:E},r=i("metaTokens",!0),s=i("visitor")||S,a=i("dots",!1),o=i("indexes",!1),l=i("Blob")||typeof Blob<"u"&&Blob,c=i("maxDepth",Kv),d=l&&L.isSpecCompliantForm(e),f=[];if(!L.isFunction(s))throw new TypeError("visitor must be a function");function p(x){if(x===null)return"";if(L.isDate(x))return x.toISOString();if(L.isBoolean(x))return x.toString();if(!d&&L.isBlob(x))throw new ue("Blob is not supported. Use a Buffer instead.");if(L.isArrayBuffer(x)||L.isTypedArray(x)){if(d&&typeof l=="function")return new l([x]);throw new ue("Blob is not supported. Use a Buffer instead.",ue.ERR_NOT_SUPPORT)}return x}function g(x){if(x>c)throw new ue("Object is too deeply nested ("+x+" levels). Max depth: "+c,ue.ERR_FORM_DATA_DEPTH_EXCEEDED)}function _(x,v){if(c===1/0)return JSON.stringify(x);const E=[];return JSON.stringify(x,function(A,T){if(!L.isObject(T))return T;for(;E.length&&E[E.length-1]!==this;)E.pop();return E.push(T),g(v+E.length-1),T})}function S(x,v,E){let C=x;if(L.isReactNative(e)&&L.isReactNativeBlob(x))return e.append(Mu(E,v,a),p(x)),!1;if(x&&!E&&typeof x=="object"){if(L.endsWith(v,"{}"))v=r?v:v.slice(0,-2),x=_(x,1);else if(L.isArray(x)&&qM(x)||(L.isFileList(x)||L.endsWith(v,"[]"))&&(C=L.toArray(x)))return v=Jv(v),C.forEach(function(T,N){!(L.isUndefined(T)||T===null)&&e.append(o===!0?Mu([v],N,a):o===null?v:v+"[]",p(T))}),!1}return af(x)?!0:(e.append(Mu(E,v,a),p(x)),!1)}const m=Object.assign($M,{defaultVisitor:S,convertValue:p,isVisitable:af});function u(x,v,E=0){if(!L.isUndefined(x)){if(g(E),f.indexOf(x)!==-1)throw new Error("Circular reference detected in "+v.join("."));f.push(x),L.forEach(x,function(A,T){(!(L.isUndefined(A)||A===null)&&s.call(e,A,L.isString(T)?T.trim():T,v,m))===!0&&u(A,v?v.concat(T):[T],E+1)}),f.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return u(t),e}function Km(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Kh(t,e){this._pairs=[],t&&Uc(t,this,e)}const Zv=Kh.prototype;Zv.append=function(e,n){this._pairs.push([e,n])};Zv.toString=function(e){const n=e?i=>e.call(this,i,Km):Km;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function YM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qv(t,e,n){if(!e)return t;t=t||"";const i=L.isFunction(n)?{serialize:n}:n,r=L.getSafeProp(i,"encode")||YM,s=L.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=L.isURLSearchParams(e)?e.toString():new Kh(e,i).toString(r),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}const va=Symbol("internals");function e_(t){return t?t.length:0}function Jm(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function _a(t,e){const n=t.handlers,i=e_(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(s,a){n[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=i}class Zm{constructor(){this.handlers=[],this[va]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,i){const r={fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},s=this[va];this.handlers==null&&(this.handlers=[]),_a(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const n=this[va];_a(this,n);const i=n.handlerEntries.get(e);if(i){if(n.handlerEntries.delete(e),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,n.iterationDepth||(Jm(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],_a(this,this[va]))}forEach(e){const n=this[va];_a(this,n),n.iterationDepth++;try{L.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--n.iterationDepth||(_a(this,n),Jm(this.handlers),n.handlersLength=e_(this.handlers))}}}const Jh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},KM=typeof URLSearchParams<"u"?URLSearchParams:Kh,JM=typeof FormData<"u"?FormData:null,ZM=typeof Blob<"u"?Blob:null,QM={isBrowser:!0,classes:{URLSearchParams:KM,FormData:JM,Blob:ZM},protocols:["http","https","file","blob","url","data"]},Zh=typeof window<"u"&&typeof document<"u",of=typeof navigator=="object"&&navigator||void 0,ew=Zh&&(!of||["ReactNative","NativeScript","NS"].indexOf(of.product)<0),tw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",nw=Zh&&window.location.href||"http://localhost",iw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zh,hasStandardBrowserEnv:ew,hasStandardBrowserWebWorkerEnv:tw,navigator:of,origin:nw},Symbol.toStringTag,{value:"Module"})),It={...iw,...QM};function rw(t,e){return Uc(t,new It.classes.URLSearchParams,{visitor:function(n,i,r,s){return It.isNode&&L.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Qm=Kv;function t_(t){if(t>Qm)throw new ue("FormData field is too deeply nested ("+t+" levels). Max depth: "+Qm,ue.ERR_FORM_DATA_DEPTH_EXCEEDED)}function sw(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)t_(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function aw(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function n_(t){function e(n,i,r,s){t_(s);let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&L.isArray(r)?r.length:a,l?(L.hasOwnProp(r,a)?r[a]=L.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!L.hasOwnProp(r,a)||!L.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&L.isArray(r[a])&&(r[a]=aw(r[a])),!o)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(i,r)=>{e(sw(i),r,n,0)}),n}return null}const i_=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),is=(t,e)=>t!=null&&L.hasOwnProp(t,e)?t[e]:void 0;function ow(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const _o={transitional:Jh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify(n_(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=is(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return rw(e,l).toString();if((o=L.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=is(this,"env"),d=c&&c.FormData;return Uc(o?{"files[]":e}:e,d&&new d,l)}}return s||r?(n.setContentType("application/json",!1),ow(e)):e}],transformResponse:[function(e){const n=is(this,"transitional")||_o.transitional,i=n&&n.forcedJSONParsing,r=is(this,"responseType"),s=r==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,is(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?ue.from(l,ue.ERR_BAD_RESPONSE,this,null,is(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(i_,t=>{_o.headers[t]={}});function wu(t,e){const n=this||_o,i=e||n,r=qt.from(i.headers);let s=i.data;return L.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function r_(t){return!!(t&&t.__CANCEL__)}let yo=class extends ue{constructor(e,n,i){super(e??"canceled",ue.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function s_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ue("Request failed with status code "+n.status,n.status>=400&&n.status<500?ue.ERR_BAD_REQUEST:ue.ERR_BAD_RESPONSE,n.config,n.request,n))}const lw=/[\t\n\r]/g;function a_(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(lw,"")}function Tu(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function cw(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=i[s];a||(a=c),n[r]=l,i[r]=c;let f=s,p=0;for(;f!==r;)p+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-a<e)return;const g=d&&c-d;return g?Math.round(p*1e3/g):void 0}}function uw(t,e){let n=0,i=1e3/e,r,s;const a=(d,f=Date.now())=>{n=f,r=null,s&&(clearTimeout(s),s=null),t(...d)};return[(...d)=>{const f=Date.now(),p=f-n;p>=i?a(d,f):(r=d,s||(s=setTimeout(()=>{s=null,a(r)},i-p)))},()=>r&&a(r),(...d)=>a(d)]}const lc=(t,e,n=3)=>{let i=0;const r=cw(50,250);return uw(s=>{if(!s||!L.isNumber(s.loaded))return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),c=Math.max(0,l-i),d=r(c);i=Math.max(i,l);const f={loaded:l,total:o,progress:o?l/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o?(o-l)/d:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(f)},n)},eg=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},tg=(t,e=L.asap)=>(...n)=>e(()=>t(...n)),dw=It.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,It.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(It.origin),It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent)):()=>!0,fw=It.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];L.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),L.isString(i)&&o.push(`path=${i}`),L.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),L.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function hw(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function pw(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const mw=/^https?:(?!\/\/)/i;function gw(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${oc}`)}function xw(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${oc}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${oc}`);return n===-1?r:`${r}#${gw(e.slice(n+1))}`}function ng(t,e){if(typeof t=="string"){const n=a_(t);if(mw.test(n))throw new ue(`Invalid URL ${JSON.stringify(xw(n))}: missing "//" after protocol`,ue.ERR_INVALID_URL,e)}}function o_(t,e,n,i){ng(e,i);let r=!hw(e);return t&&(r||n===!1)?(ng(t,i),pw(t,e)):e}const ig=t=>t instanceof qt?{...t}:t,vw=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function Xr(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(d,f,p,g){return L.isPlainObject(d)&&L.isPlainObject(f)?L.merge.call({caseless:g},d,f):L.isPlainObject(f)?L.merge({},f):L.isArray(f)?f.slice():f}function r(d,f,p,g){if(L.isUndefined(f)){if(!L.isUndefined(d))return i(void 0,d,p,g)}else return i(d,f,p,g)}function s(d,f){if(!L.isUndefined(f))return i(void 0,f)}function a(d,f){if(L.isUndefined(f)){if(!L.isUndefined(d))return i(void 0,d)}else return i(void 0,f)}function o(d){const f=L.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!L.isUndefined(f))if(L.isPlainObject(f)){if(L.hasOwnProp(f,d))return f[d]}else return;const p=L.hasOwnProp(t,"transitional")?t.transitional:void 0;if(L.isPlainObject(p)&&L.hasOwnProp(p,d))return p[d]}function l(d,f,p){if(L.hasOwnProp(e,p))return i(d,f);if(L.hasOwnProp(t,p))return i(void 0,d)}const c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutErrorMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(d,f,p)=>r(ig(d),ig(f),p,!0)};return L.forEach(vw({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=L.hasOwnProp(c,f)?c[f]:r,g=L.hasOwnProp(t,f)?t[f]:void 0,_=L.hasOwnProp(e,f)?e[f]:void 0,S=p(g,_,f);L.isUndefined(S)&&p!==l||(n[f]=S)}),L.hasOwnProp(e,"validateStatus")&&L.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(L.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const _w=["content-type","content-length"];function yw(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{_w.includes(i.toLowerCase())&&t.set(i,r)})}const Sw=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function l_(t){const e=Xr({},t),n=p=>L.hasOwnProp(e,p)?e[p]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let o=n("headers");const l=n("auth"),c=n("baseURL"),d=n("allowAbsoluteUrls"),f=n("url");if(e.headers=o=qt.from(o),e.url=Qv(o_(c,f,d,e),n("params"),n("paramsSerializer")),l){const p=L.getSafeProp(l,"username")||"",g=L.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(p+":"+(g?Sw(g):"")))}catch(_){throw ue.from(_,ue.ERR_BAD_OPTION_VALUE,t)}}if(L.isFormData(i)){const p=L.getSafeProp(i,"getHeaders");It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv||L.isReactNative(i)?o.setContentType(void 0):L.isFunction(p)&&yw(o,p.call(i),n("formDataHeaderPolicy"))}if(It.hasStandardBrowserEnv&&(L.isFunction(r)&&(r=r(e)),r===!0||r==null&&dw(e.url))){const g=s&&a&&fw.read(a);g&&o.set(s,g)}return e}const Ew=typeof XMLHttpRequest<"u",Mw=Ew&&function(t){return new Promise(function(n,i){const r=l_(t);let s=r.data;const a=qt.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=r,d,f,p,g,_,S;function m(){g&&g(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let u=new XMLHttpRequest;u.open(r.method.toUpperCase(),r.url,!0),u.timeout=r.timeout;function x(E){if(!u)return;if(u.status===0&&(Tu(a_(r.url))||Tu(It.origin))!=="file"&&!(u.responseURL&&u.responseURL.startsWith("file:"))){i(new ue("Request aborted",ue.ECONNABORTED,t,u)),m(),u=null;return}try{E?S&&S(E):_&&_()}catch(N){setTimeout(()=>{throw N})}if(!u)return;const C=qt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:C,config:t,request:u};s_(function(I){n(I),m()},function(I){i(I),m()},T),u=null}"onloadend"in u?u.onloadend=x:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.startsWith("file:"))||setTimeout(x)},u.onabort=function(){u&&(i(new ue("Request aborted",ue.ECONNABORTED,t,u)),m(),u=null)},u.onerror=function(C){const A=C&&C.message?C.message:"Network Error",T=new ue(A,ue.ERR_NETWORK,t,u);T.event=C||null,i(T),m(),u=null},u.ontimeout=function(){let C=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||Jh;r.timeoutErrorMessage&&(C=r.timeoutErrorMessage),i(new ue(C,A.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,t,u)),m(),u=null},s===void 0&&a.setContentType(null),"setRequestHeader"in u&&L.forEach($v(a),function(C,A){u.setRequestHeader(A,C)}),L.isUndefined(r.withCredentials)||(u.withCredentials=!!r.withCredentials),o&&o!=="json"&&(u.responseType=r.responseType),c&&([p,_,S]=lc(c,!0),u.addEventListener("progress",p)),l&&u.upload&&([f,g]=lc(l),u.upload.addEventListener("progress",f),u.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(d=E=>{u&&(i(!E||E.type?new yo(null,t,u):E),u.abort(),m(),u=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const v=Tu(r.url);if(v&&!It.protocols.includes(v)){i(new ue("Unsupported protocol "+v+":",ue.ERR_BAD_REQUEST,t)),m();return}u.send(s||null)})},ww=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ue?c:new yo(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{s=null,r(new ue(`timeout of ${e}ms exceeded`,ue.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=n;return o.unsubscribe=()=>L.asap(a),o},Tw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},bw=async function*(t,e){for await(const n of Aw(t))yield*Tw(n,e)},Aw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},rg=(t,e,n,i)=>{const r=bw(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await r.next();if(c){o(),l.close();return}let f=d.byteLength;if(n){let p=s+=f;n(p)}l.enqueue(new Uint8Array(d))}catch(c){throw o(c),c}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},sg=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,c_=(t,e,n)=>e+2<n&&sg(t.charCodeAt(e+1))&&sg(t.charCodeAt(e+2)),ag=t=>t<=57?t-48:(t&223)-55,Rw=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,Cw=t=>t===9||t===10||t===12||t===13||t===32,Nw=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},Pw=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},Lw=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&c_(t,s,e)&&(a=ag(t.charCodeAt(s+1))*16+ag(t.charCodeAt(s+2)),s+=2),!Cw(a)){if(a===61){i++;continue}if(!Rw(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?Pw(t):Nw(n)},Dw=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const i=t.slice(5,n),r=t.slice(n+1);if(/;base64/i.test(i))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const c=r.charCodeAt(o);if(c===37&&c_(r,o,l))a+=1,o+=2;else if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&o+1<l){const d=r.charCodeAt(o+1);d>=56320&&d<=57343?(a+=4,o++):a+=3}else a+=3}return a};function Uw(t){const e=typeof t=="string"?t.indexOf("#"):-1;return Dw(e===-1?t:t.slice(0,e),Lw)}const Qh="1.20.0",og=64*1024,Iw={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Wo}=L,Ow=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),lg=t=>{if(!L.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},cg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Fw=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},kw=t=>{const e=L.global!==void 0&&L.global!==null?L.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=L.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:a}=t,o=r?Wo(r):typeof fetch=="function",l=Wo(s),c=Wo(a);if(!o)return!1;const d=o&&Wo(n),f=o&&(typeof i=="function"?(u=>x=>u.encode(x))(new i):async u=>new Uint8Array(await new s(u).arrayBuffer())),p=l&&d&&cg(()=>{let u=!1;const x=new s(It.origin,{body:new n,method:"POST",get duplex(){return u=!0,"half"}}),v=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),u&&!v}),g=c&&d&&cg(()=>L.isReadableStream(new a("").body)),_={stream:g&&(u=>u.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!_[u]&&(_[u]=(x,v)=>{let E=x&&x[u];if(E)return E.call(x);throw new ue(`Response type '${u}' is not supported`,ue.ERR_NOT_SUPPORT,v)})});const S=async u=>{if(u==null)return 0;if(L.isBlob(u))return u.size;if(L.isSpecCompliantForm(u))return(await new s(It.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(L.isArrayBufferView(u)||L.isArrayBuffer(u))return u.byteLength;if(L.isURLSearchParams(u)&&(u=u+""),L.isString(u))return(await f(u)).byteLength},m=async(u,x)=>{const v=L.toFiniteNumber(u.getContentLength());return v??S(x)};return async u=>{let{url:x,method:v,data:E,signal:C,cancelToken:A,timeout:T,onDownloadProgress:N,onUploadProgress:I,responseType:y,headers:M,withCredentials:F="same-origin",fetchOptions:D,maxContentLength:V,maxBodyLength:$,maxRedirects:G}=l_(u);const ee=L.isNumber(V)&&V>-1,U=L.isNumber($)&&$>-1,Z=re=>L.hasOwnProp(u,re)?u[re]:void 0;let J=r||fetch;y=y?(y+"").toLowerCase():"text";let Y=ww([C,A&&A.toAbortSignal()],T),oe=null;const Te=Y&&Y.unsubscribe&&(()=>{Y.unsubscribe()});let X,ne=null;const fe=()=>new ue("Request body larger than maxBodyLength limit",ue.ERR_BAD_REQUEST,u,oe);try{let re;const be=Z("auth");if(be){const pe=L.getSafeProp(be,"username")||"",Me=L.getSafeProp(be,"password")||"";re={username:pe,password:Me}}if(Fw(x)){const pe=new URL(x,It.origin);if(!re&&(pe.username||pe.password)){const Me=lg(pe.username),R=lg(pe.password);re={username:Me,password:R}}(pe.username||pe.password)&&(pe.username="",pe.password="",x=pe.href)}if(re&&(M.delete("authorization"),M.set("Authorization","Basic "+btoa(Ow((re.username||"")+":"+(re.password||""))))),ee&&typeof x=="string"&&x.startsWith("data:")&&Uw(x)>V)throw new ue("maxContentLength size of "+V+" exceeded",ue.ERR_BAD_RESPONSE,u,oe);if(U&&v!=="get"&&v!=="head"){const pe=await S(E);if(typeof pe=="number"&&isFinite(pe)&&(X=pe,pe>$))throw fe()}const Le=U&&(L.isReadableStream(E)||L.isStream(E)),Ve=(pe,Me,R)=>rg(pe,og,w=>{if(U&&w>$)throw ne=fe();Me&&Me(w)},R);if(p&&v!=="get"&&v!=="head"&&(I||Le)){if(X=X??await m(M,E),X!==0||Le){let pe=new s(x,{method:"POST",body:E,duplex:"half"}),Me;if(L.isFormData(E)&&(Me=pe.headers.get("content-type"))&&M.setContentType(Me),pe.body){const[R,w]=I&&eg(X,lc(tg(I)))||[];E=Ve(pe.body,R,w)}}}else if(Le&&!l&&d&&v!=="get"&&v!=="head")E=Ve(E);else if(Le&&l&&!p&&v!=="get"&&v!=="head")throw new ue("Stream request bodies are not supported by the current fetch implementation",ue.ERR_NOT_SUPPORT,u,oe);L.isString(F)||(F=F?"include":"omit");const Ze=l&&"credentials"in s.prototype;if(L.isFormData(E)){const pe=M.getContentType();pe&&/^multipart\/form-data/i.test(pe)&&!/boundary=/i.test(pe)&&M.delete("content-type")}M.set("User-Agent","axios/"+Qh,!1);const De=D==null?D:Object.assign(Object.create(null),D);De&&(delete De.body,delete De.headers,delete De.method,delete De.signal,delete De.duplex,delete De.credentials);const P=Object.assign(Object.create(null),De,{signal:Y,method:v.toUpperCase(),headers:$v(M.normalize()),body:E,duplex:"half",credentials:Ze?F:void 0});l&&(L.forEach(Iw,(pe,Me)=>{P[Me]===void 0&&(P[Me]=pe)}),P.signal===void 0&&(P.signal=null),P.body===void 0&&(P.body=null)),G===0&&(P.redirect="manual",De&&(De.redirect="manual")),oe=l&&new s(x,P);let Ie=await(l?J(oe,De):J(x,P));const Ue=qt.from(Ie.headers);if(ee){const pe=L.toFiniteNumber(Ue.getContentLength());if(pe!=null&&pe>V)throw new ue("maxContentLength size of "+V+" exceeded",ue.ERR_BAD_RESPONSE,u,oe)}const We=g&&(y==="stream"||y==="response");if(g&&Ie.body&&(N||ee||We&&Te)){const pe={};["status","statusText","headers"].forEach(se=>{pe[se]=Ie[se]});const Me=L.toFiniteNumber(Ue.getContentLength()),[R,w]=N&&eg(Me,lc(tg(N),!0))||[];let H=0;const Q=se=>{if(ee&&(H=se,H>V))throw new ue("maxContentLength size of "+V+" exceeded",ue.ERR_BAD_RESPONSE,u,oe);R&&R(se)};Ie=new a(rg(Ie.body,og,Q,()=>{w&&w(),Te&&Te()}),pe)}y=y||"text";let Re=await _[L.findKey(_,y)||"text"](Ie,u);if(ee&&!g&&!We){let pe;if(Re!=null&&(typeof Re.byteLength=="number"?pe=Re.byteLength:typeof Re.size=="number"?pe=Re.size:typeof Re=="string"&&(pe=typeof i=="function"?new i().encode(Re).byteLength:Re.length)),typeof pe=="number"&&pe>V)throw new ue("maxContentLength size of "+V+" exceeded",ue.ERR_BAD_RESPONSE,u,oe)}return!We&&Te&&Te(),await new Promise((pe,Me)=>{s_(pe,Me,{data:Re,headers:qt.from(Ie.headers),status:Ie.status,statusText:Ie.statusText,config:u,request:oe})})}catch(re){if(Te&&Te(),Y&&Y.aborted&&Y.reason instanceof ue){const be=Y.reason;throw be.config=u,oe&&(be.request=oe),re!==be&&Object.defineProperty(be,"cause",{__proto__:null,value:re,writable:!0,enumerable:!1,configurable:!0}),be}if(ne)throw oe&&!ne.request&&(ne.request=oe),ne;if(re instanceof ue)throw oe&&!re.request&&(re.request=oe),re;if(re&&re.name==="TypeError"&&/Load failed|fetch/i.test(re.message)){const be=new ue("Network Error",ue.ERR_NETWORK,u,oe,re&&re.response);throw Object.defineProperty(be,"cause",{__proto__:null,value:re.cause||re,writable:!0,enumerable:!1,configurable:!0}),be}throw ue.from(re,re&&re.code,u,oe,re&&re.response)}}},Bw=new Map,u_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,o=a,l,c,d=Bw;for(;o--;)l=s[o],c=d.get(l),c===void 0&&d.set(l,c=o?new Map:kw(e)),d=c;return c};u_();const ep={http:XM,xhr:Mw,fetch:{get:u_}};L.forEach(ep,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const ug=t=>`- ${t}`,zw=t=>L.isFunction(t)||t===null||t===!1;function jw(t,e){t=L.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!zw(i)&&(r=ep[(o=String(i)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${o}'`);if(r&&(L.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(ug).join(`
`):" "+ug(a[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+o,ue.ERR_NOT_SUPPORT)}return r}const d_={getAdapter:jw,adapters:ep};function bu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new yo(null,t)}function Au(t){const e=L.toSafeFlatObject(t);return bu(e),e.headers=qt.from(L.getSafeProp(e,"headers")),e.data=wu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),d_.getAdapter(e.adapter||_o.adapter,e)(e).then(function(r){bu(e),e.response=r;try{r.data=wu.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=qt.from(r.headers),r},function(r){if(!r_(r)&&(bu(e),r&&r.response)){e.response=r.response;try{r.response.data=wu.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=qt.from(r.response.headers)}return Promise.reject(r)})}const Ic={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ic[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const dg={};Ic.transitional=function(e,n,i){function r(s,a){return"[Axios v"+Qh+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new ue(r(a," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!dg[a]&&(dg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};Ic.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Hw(t,e,n){if(typeof t!="object"||t===null)throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new ue("option "+s+" must be "+l,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+s,ue.ERR_BAD_OPTION)}}const Al={assertOptions:Hw,validators:Ic},Vt=Al.validators;let Fr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Zm,response:new Zm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const o=s.indexOf(`
`);a=o===-1?"":s.slice(o+1)}if(!i.stack)i.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),c=l===-1?"":a.slice(l+1);String(i.stack).endsWith(c)||(i.stack+=`
`+a)}}catch{}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Xr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Al.assertOptions(i,{silentJSONParsing:Vt.transitional(Vt.boolean),forcedJSONParsing:Vt.transitional(Vt.boolean),clarifyTimeoutError:Vt.transitional(Vt.boolean),legacyInterceptorReqResOrdering:Vt.transitional(Vt.boolean),advertiseZstdAcceptEncoding:Vt.transitional(Vt.boolean),validateStatusUndefinedResolves:Vt.transitional(Vt.boolean)},!1),r!=null&&(L.isFunction(r)?n.paramsSerializer={serialize:r}:Al.assertOptions(r,{encode:Vt.function,serialize:Vt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Al.assertOptions(n,{baseUrl:Vt.spelling("baseURL"),withXsrfToken:Vt.spelling("withXSRFToken")},!0),n.method=(L.getSafeProp(n,"method")||L.getSafeProp(this.defaults,"method")||"get").toLowerCase();let a=s&&L.merge(s.common,s[n.method]);s&&L.forEach(i_.concat("common"),_=>{delete s[_]}),n.headers=qt.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(n)===!1)return;l=l&&S.synchronous;const m=n.transitional||Jh;m&&m.legacyInterceptorReqResOrdering?o.unshift(S.fulfilled,S.rejected):o.push(S.fulfilled,S.rejected)});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,p;if(!l){const _=[Au.bind(this),void 0];for(_.unshift(...o),_.push(...c),p=_.length,d=Promise.resolve(n);f<p;)d=d.then(_[f++],_[f++]);return d}p=o.length;let g=n;for(;f<p;){const _=o[f++],S=o[f++];try{g=_?_(g):g}catch(m){if(!S){d=Promise.reject(m);break}try{const u=S.call(this,m);L.isThenable(u)&&(d=Promise.resolve(u).then(()=>Au.call(this,g)))}catch(u){d=Promise.reject(u)}break}}if(!d)try{d=Au.call(this,g)}catch(_){d=Promise.reject(_)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=Xr(this.defaults,e);const n=o_(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Qv(n,e.params,e.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(e){Fr.prototype[e]=function(n,i){return this.request(Xr(i||{},{method:e,url:n,data:i&&L.hasOwnProp(i,"data")?i.data:void 0}))}});L.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,a,o){return this.request(Xr(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Fr.prototype[e]=n(),e!=="query"&&(Fr.prototype[e+"Form"]=n(!0))});let Vw=class f_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new yo(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new f_(function(r){e=r}),cancel:e}}};function Gw(t){return function(n){return t.apply(null,n)}}function Ww(t){return L.isObject(t)&&t.isAxiosError===!0}const Rl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Rl).forEach(([t,e])=>{Rl[e]===void 0&&(Rl[e]=t)});function h_(t){const e=new Fr(t),n=Fv(Fr.prototype.request,e);return L.extend(n,Fr.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return h_(Xr(t,r))},n}const Ge=h_(_o);Ge.Axios=Fr;Ge.CanceledError=yo;Ge.CancelToken=Vw;Ge.isCancel=r_;Ge.VERSION=Qh;Ge.toFormData=Uc;Ge.AxiosError=ue;Ge.Cancel=Ge.CanceledError;Ge.all=function(e){return Promise.all(e)};Ge.spread=Gw;Ge.isAxiosError=Ww;Ge.mergeConfig=Xr;Ge.AxiosHeaders=qt;Ge.formToJSON=t=>n_(L.isHTMLForm(t)?new FormData(t):t);Ge.getAdapter=d_.getAdapter;Ge.HttpStatusCode=Rl;Ge.default=Ge;const{Axios:VN,AxiosError:GN,CanceledError:WN,isCancel:XN,CancelToken:qN,VERSION:$N,all:YN,Cancel:KN,isAxiosError:JN,spread:ZN,toFormData:QN,AxiosHeaders:eP,HttpStatusCode:tP,formToJSON:nP,getAdapter:iP,mergeConfig:rP,create:sP}=Ge,p_=j.createContext();Ge.defaults.withCredentials=!0;const Xw=({children:t})=>{const[e,n]=j.useState(null),[i,r]=j.useState(!0),[s,a]=j.useState(null),o=(p,g="info")=>{a({message:p,type:g}),setTimeout(()=>{a(null)},4e3)},l=async()=>{try{const p=await Ge.get("/api/auth/me");p.data.success?n(p.data.data):n(null)}catch{n(null)}finally{r(!1)}};j.useEffect(()=>{l()},[]);const c=async(p,g)=>{var _,S;try{const m=await Ge.post("/api/auth/login",{email:p,password:g});if(m.data.success)return n(m.data.data),o(`Welcome back, ${m.data.data.name}!`,"success"),{success:!0,user:m.data.data}}catch(m){const u=((S=(_=m.response)==null?void 0:_.data)==null?void 0:S.error)||"Login failed. Please check credentials.";return o(u,"error"),{success:!1,error:u}}},d=async(p,g,_)=>{var S,m;try{const u=await Ge.post("/api/auth/register",{name:p,email:g,password:_});if(u.data.success)return n(u.data.data),o("Account created successfully!","success"),{success:!0,user:u.data.data}}catch(u){const x=((m=(S=u.response)==null?void 0:S.data)==null?void 0:m.error)||"Registration failed.";return o(x,"error"),{success:!1,error:x}}},f=async()=>{try{await Ge.post("/api/auth/logout"),n(null),o("Logged out successfully","info")}catch{n(null)}};return h.jsx(p_.Provider,{value:{user:e,loading:i,login:c,register:d,logout:f,checkAuth:l,toast:s,showToast:o},children:t})},oi=()=>j.useContext(p_);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m_=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>j.createElement("svg",{ref:l,...$w,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:m_("lucide",r),...o},[...a.map(([c,d])=>j.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(t,e)=>{const n=j.forwardRef(({className:i,...r},s)=>j.createElement(Yw,{ref:s,iconNode:e,className:m_(`lucide-${qw(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Ye("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=Ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=Ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Ye("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=Ye("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=Ye("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=Ye("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Ye("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=Ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=Ye("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=Ye("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=Ye("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=Ye("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=Ye("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=Ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=Ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=Ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Ye("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=Ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=Ye("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=Ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=Ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=Ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=Ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=Ye("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=Ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=Ye("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pT=()=>{const{user:t,logout:e}=oi();ai();const n=Zr(),[i,r]=j.useState(!1),s=a=>n.pathname===a;return h.jsxs("header",{className:"sticky top-0 z-40 glass-nav border-b border-slate-200",children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex items-center justify-between h-20",children:[h.jsxs(at,{to:"/",className:"flex items-center gap-3 group",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-400 p-0.5 shadow-md group-hover:scale-105 transition-transform",children:h.jsx("div",{className:"w-full h-full bg-white rounded-[10px] flex items-center justify-center",children:h.jsx(es,{className:"w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform"})})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xl font-extrabold tracking-tight text-slate-900",children:"IRIS"}),h.jsx("span",{className:"text-xs block text-slate-500 font-medium -mt-1",children:"Lost & Found Portal"})]})]}),h.jsxs("nav",{className:"hidden md:flex items-center gap-1.5",children:[h.jsx(at,{to:"/browse",className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${s("/browse")?"bg-indigo-50 text-indigo-600 font-bold":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:"Browse Reports"}),t&&h.jsxs(h.Fragment,{children:[h.jsxs(at,{to:"/report",className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${s("/report")?"bg-indigo-50 text-indigo-600 font-bold":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx(Oc,{className:"w-4 h-4 text-indigo-500"}),"Report Item"]}),h.jsxs(at,{to:"/dashboard",className:`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${s("/dashboard")?"bg-indigo-50 text-indigo-600 font-bold":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`,children:[h.jsx(aT,{className:"w-4 h-4 text-slate-500"}),"Dashboard"]}),t.role==="ADMIN"&&h.jsxs(at,{to:"/admin",className:"px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100",children:[h.jsx(sp,{className:"w-3.5 h-3.5"}),"ADMIN"]})]})]}),h.jsx("div",{className:"hidden md:flex items-center gap-3",children:t?h.jsxs("div",{className:"flex items-center gap-3 pl-3 border-l border-slate-200",children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("div",{className:"w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-100 to-rose-100 flex items-center justify-center text-indigo-700 font-bold text-sm border border-indigo-200 shadow-sm",children:t.name?t.name.charAt(0).toUpperCase():"U"}),h.jsxs("div",{className:"text-left leading-tight",children:[h.jsx("p",{className:"text-xs font-bold text-slate-900",children:t.name}),h.jsx("p",{className:"text-[10px] text-slate-500",children:t.email})]})]}),h.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition",title:"Logout",children:h.jsx(oT,{className:"w-4 h-4"})})]}):h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(at,{to:"/login",className:"px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition",children:"Log In"}),h.jsx(at,{to:"/register",className:"px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all",children:"Get Started"})]})}),h.jsx("div",{className:"md:hidden flex items-center",children:h.jsx("button",{onClick:()=>r(!i),className:"p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100",children:i?h.jsx(__,{className:"w-6 h-6"}):h.jsx(lT,{className:"w-6 h-6"})})})]})}),i&&h.jsxs("div",{className:"md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-6 space-y-3 backdrop-blur-xl",children:[h.jsx(at,{to:"/browse",onClick:()=>r(!1),className:"block px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100",children:"Browse Reports"}),t?h.jsxs(h.Fragment,{children:[h.jsx(at,{to:"/report",onClick:()=>r(!1),className:"block px-3 py-2 rounded-lg text-base font-semibold text-indigo-600 hover:bg-indigo-50",children:"+ Report Item"}),h.jsx(at,{to:"/dashboard",onClick:()=>r(!1),className:"block px-3 py-2 rounded-lg text-base font-semibold text-slate-900 hover:bg-slate-100",children:"Dashboard"}),t.role==="ADMIN"&&h.jsx(at,{to:"/admin",onClick:()=>r(!1),className:"block px-3 py-2 rounded-lg text-base font-semibold text-rose-600 hover:bg-rose-50",children:"Admin Panel"}),h.jsxs("div",{className:"pt-4 border-t border-slate-200 flex items-center justify-between",children:[h.jsxs("div",{className:"text-xs text-slate-500",children:["Logged in as ",h.jsx("span",{className:"font-bold text-slate-900",children:t.name})]}),h.jsx("button",{onClick:()=>{e(),r(!1)},className:"px-3 py-1.5 rounded-lg text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200",children:"Logout"})]})]}):h.jsxs("div",{className:"pt-2 flex flex-col gap-2",children:[h.jsx(at,{to:"/login",onClick:()=>r(!1),className:"w-full text-center py-2.5 rounded-xl font-semibold text-slate-900 bg-slate-100",children:"Log In"}),h.jsx(at,{to:"/register",onClick:()=>r(!1),className:"w-full text-center py-2.5 rounded-xl font-bold bg-indigo-600 text-white",children:"Get Started"})]})]})]})},mT=()=>h.jsx("footer",{className:"border-t border-slate-200 bg-white py-12",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[h.jsxs("div",{className:"md:col-span-2",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[h.jsx(es,{className:"w-5 h-5 text-indigo-600"}),h.jsx("span",{className:"text-xl font-bold text-slate-900",children:"IRIS"})]}),h.jsx("p",{className:"text-sm text-slate-500 max-w-sm",children:"Your smarter, secure way to report lost belongings, discover found items, and reconnect people with what matters across campus."})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-bold text-slate-900 mb-3",children:"Navigation"}),h.jsxs("ul",{className:"space-y-2 text-sm text-slate-600",children:[h.jsx("li",{children:h.jsx(at,{to:"/",className:"hover:text-indigo-600 transition",children:"Home"})}),h.jsx("li",{children:h.jsx(at,{to:"/browse",className:"hover:text-indigo-600 transition",children:"Browse Reports"})}),h.jsx("li",{children:h.jsx(at,{to:"/report",className:"hover:text-indigo-600 transition",children:"Report an Item"})}),h.jsx("li",{children:h.jsx(at,{to:"/dashboard",className:"hover:text-indigo-600 transition",children:"My Dashboard"})})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-bold text-slate-900 mb-3",children:"Security & Trust"}),h.jsxs("ul",{className:"space-y-2 text-sm text-slate-600",children:[h.jsx("li",{children:"HTTP-only JWT Auth"}),h.jsx("li",{children:"Role-Based Moderation"}),h.jsx("li",{children:"Privacy Protected Contact"}),h.jsxs("li",{children:["Team Iris © ",new Date().getFullYear()]})]})]})]}),h.jsxs("div",{className:"pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[h.jsxs("p",{children:["© ",new Date().getFullYear()," IRIS Lost & Found Portal. Designed with care for students & staff."]}),h.jsxs("p",{className:"flex items-center gap-1",children:["Built with ",h.jsx(iT,{className:"w-3.5 h-3.5 text-rose-500 fill-current"})," for Campus Safety"]})]})]})}),gT=()=>{const{toast:t}=oi();if(!t)return null;const e={success:h.jsx(Qr,{className:"w-5 h-5 text-emerald-600"}),error:h.jsx(Qw,{className:"w-5 h-5 text-rose-600"}),info:h.jsx(sT,{className:"w-5 h-5 text-indigo-600"})};return h.jsx("div",{className:"fixed bottom-6 right-6 z-50 animate-bounce-short",children:h.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-xl backdrop-blur-md",children:[e[t.type]||e.info,h.jsx("span",{className:"text-sm font-medium",children:t.message})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="169",xT=0,fg=1,vT=2,y_=1,_T=2,mi=3,cr=0,hn=1,vi=2,ir=0,ks=1,hg=2,pg=3,mg=4,yT=5,Ar=100,ST=101,ET=102,MT=103,wT=104,TT=200,bT=201,AT=202,RT=203,lf=204,cf=205,CT=206,NT=207,PT=208,LT=209,DT=210,UT=211,IT=212,OT=213,FT=214,uf=0,df=1,ff=2,$s=3,hf=4,pf=5,mf=6,gf=7,S_=0,kT=1,BT=2,rr=0,zT=1,jT=2,HT=3,VT=4,GT=5,WT=6,XT=7,E_=300,Ys=301,Ks=302,xf=303,vf=304,kc=306,_f=1e3,Dr=1001,yf=1002,Pn=1003,qT=1004,Xo=1005,Gn=1006,Ru=1007,Ur=1008,Ri=1009,M_=1010,w_=1011,uo=1012,op=1013,qr=1014,Si=1015,So=1016,lp=1017,cp=1018,Js=1020,T_=35902,b_=1021,A_=1022,Xn=1023,R_=1024,C_=1025,Bs=1026,Zs=1027,N_=1028,up=1029,P_=1030,dp=1031,fp=1033,Cl=33776,Nl=33777,Pl=33778,Ll=33779,Sf=35840,Ef=35841,Mf=35842,wf=35843,Tf=36196,bf=37492,Af=37496,Rf=37808,Cf=37809,Nf=37810,Pf=37811,Lf=37812,Df=37813,Uf=37814,If=37815,Of=37816,Ff=37817,kf=37818,Bf=37819,zf=37820,jf=37821,Dl=36492,Hf=36494,Vf=36495,L_=36283,Gf=36284,Wf=36285,Xf=36286,$T=3200,YT=3201,D_=0,KT=1,Vi="",Qn="srgb",mr="srgb-linear",hp="display-p3",Bc="display-p3-linear",uc="linear",ht="srgb",dc="rec709",fc="p3",rs=7680,gg=519,JT=512,ZT=513,QT=514,U_=515,eb=516,tb=517,nb=518,ib=519,xg=35044,vg="300 es",Ei=2e3,hc=2001;class oa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,qf=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function rb(t,e){return(t%e+e)%e}function Nu(t,e,n){return(1-n)*t+n*e}function ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],_=i[8],S=r[0],m=r[3],u=r[6],x=r[1],v=r[4],E=r[7],C=r[2],A=r[5],T=r[8];return s[0]=a*S+o*x+l*C,s[3]=a*m+o*v+l*A,s[6]=a*u+o*E+l*T,s[1]=c*S+d*x+f*C,s[4]=c*m+d*v+f*A,s[7]=c*u+d*E+f*T,s[2]=p*S+g*x+_*C,s[5]=p*m+g*v+_*A,s[8]=p*u+g*E+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*s,g=c*s-a*l,_=n*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new He;function I_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sb(){const t=pc("canvas");return t.style.display="block",t}const _g={};function Ul(t){t in _g||(_g[t]=!0,console.warn(t))}function ab(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function ob(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yg=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sg=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[mr]:{transfer:uc,primaries:dc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:ht,primaries:dc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Bc]:{transfer:uc,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(yg)},[hp]:{transfer:ht,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sg),fromReference:t=>t.applyMatrix3(yg).convertLinearToSRGB()}},cb=new Set([mr,Bc]),rt={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cb.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Sa[e].toReference,r=Sa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Sa[t].primaries},getTransfer:function(t){return t===Vi?uc:Sa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Sa[e].luminanceCoefficients)}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class ub{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=pc("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let db=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ub.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fb=0;class pn extends oa{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Dr,r=Dr,s=Gn,a=Ur,o=Xn,l=Ri,c=pn.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Eo(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=E_;pn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(g+1)/2,C=(u+1)/2,A=(d+p)/4,T=(f+S)/4,N=(_+m)/4;return v>E&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=N/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-S)/x,this.z=(p-d)/x,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hb extends oa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new O_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends hb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class F_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pb extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(f!==S||l!==p||c!==g||d!==_){let m=1-o;const u=l*p+c*g+d*_+f*S,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,u*x);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const E=o*x;if(l=l*m+p*E,c=c*m+g*E,d=d*m+_*E,f=f*m+S*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*g-c*p,e[n+1]=l*_+d*p+c*f-o*g,e[n+2]=c*_+d*g+o*p-l*f,e[n+3]=d*_-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*d*f+c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f-p*g*_;break;case"YXZ":this._x=p*d*f+c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f+p*g*_;break;case"ZXY":this._x=p*d*f-c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f-p*g*_;break;case"ZYX":this._x=p*d*f-c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f+p*g*_;break;case"YZX":this._x=p*d*f+c*g*_,this._y=c*g*f+p*d*_,this._z=c*d*_-p*g*f,this._w=c*d*f-p*g*_;break;case"XZY":this._x=p*d*f-c*g*_,this._y=c*g*f-p*d*_,this._z=c*d*_+p*g*f,this._w=c*d*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-c)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new z,Eg=new Mo;class wo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),$o.subVectors(this.max,Ea),as.subVectors(e.a,Ea),os.subVectors(e.b,Ea),ls.subVectors(e.c,Ea),Di.subVectors(os,as),Ui.subVectors(ls,os),xr.subVectors(as,ls);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-xr.z,xr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,xr.z,0,-xr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-xr.y,xr.x,0];return!Iu(n,as,os,ls,$o)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,as,os,ls,$o))?!1:(Yo.crossVectors(Di,Ui),n=[Yo.x,Yo.y,Yo.z],Iu(n,as,os,ls,$o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,qo=new wo,as=new z,os=new z,ls=new z,Di=new z,Ui=new z,xr=new z,Ea=new z,$o=new z,Yo=new z,vr=new z;function Iu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const mb=new wo,Ma=new z,Ou=new z;class pp{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Ou)),this.expandByPoint(Ma.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new z,Fu=new z,Ko=new z,Ii=new z,ku=new z,Jo=new z,Bu=new z;class gb{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fu.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Fu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ko),o=Ii.dot(this.direction),l=-Ii.dot(Ko),c=Ii.lengthSq(),d=Math.abs(1-a*a);let f,p,g,_;if(d>0)if(f=a*l-o,p=a*o-l,_=s*d,f>=0)if(p>=-_)if(p<=_){const S=1/d;f*=S,p*=S,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+c);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fu).addScaledVector(Ko,p),g}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){ku.subVectors(n,e),Jo.subVectors(i,e),Bu.crossVectors(ku,Jo);let a=this.direction.dot(Bu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(Jo.crossVectors(Ii,Jo));if(l<0)return null;const c=o*this.direction.dot(ku.cross(Ii));if(c<0||l+c>a)return null;const d=-o*Ii.dot(Bu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,l,c,d,f,p,g,_,S,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,p,g,_,S,m)}set(e,n,i,r,s,a,o,l,c,d,f,p,g,_,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=g,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*d,g=a*f,_=o*d,S=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=_+g*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,_=c*d,S=c*f;n[0]=p+S*o,n[4]=_*o-g,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=g*o-_,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,_=c*d,S=c*f;n[0]=p-S*o,n[4]=-a*f,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*d,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,g=a*f,_=o*d,S=o*f;n[0]=l*d,n[4]=_*c-g,n[8]=p*c+S,n[1]=l*f,n[5]=S*c+p,n[9]=g*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=S-p*f,n[8]=_*f+g,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=g*f+_,n[10]=p-S*f}else if(e.order==="XZY"){const p=a*l,g=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+S,n[5]=a*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=o*d,n[10]=S*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,vb)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Oi.crossVectors(i,xn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Oi.crossVectors(i,xn)),Oi.normalize(),Zo.crossVectors(xn,Oi),r[0]=Oi.x,r[4]=Zo.x,r[8]=xn.x,r[1]=Oi.y,r[5]=Zo.y,r[9]=xn.y,r[2]=Oi.z,r[6]=Zo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],_=i[2],S=i[6],m=i[10],u=i[14],x=i[3],v=i[7],E=i[11],C=i[15],A=r[0],T=r[4],N=r[8],I=r[12],y=r[1],M=r[5],F=r[9],D=r[13],V=r[2],$=r[6],G=r[10],ee=r[14],U=r[3],Z=r[7],J=r[11],Y=r[15];return s[0]=a*A+o*y+l*V+c*U,s[4]=a*T+o*M+l*$+c*Z,s[8]=a*N+o*F+l*G+c*J,s[12]=a*I+o*D+l*ee+c*Y,s[1]=d*A+f*y+p*V+g*U,s[5]=d*T+f*M+p*$+g*Z,s[9]=d*N+f*F+p*G+g*J,s[13]=d*I+f*D+p*ee+g*Y,s[2]=_*A+S*y+m*V+u*U,s[6]=_*T+S*M+m*$+u*Z,s[10]=_*N+S*F+m*G+u*J,s[14]=_*I+S*D+m*ee+u*Y,s[3]=x*A+v*y+E*V+C*U,s[7]=x*T+v*M+E*$+C*Z,s[11]=x*N+v*F+E*G+C*J,s[15]=x*I+v*D+E*ee+C*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],_=e[3],S=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*p+i*c*p+r*o*g-i*l*g)+S*(+n*l*g-n*c*p+s*a*p-r*a*g+r*c*d-s*l*d)+m*(+n*c*f-n*o*g-s*a*f+i*a*g+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*p+r*a*f-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],_=e[12],S=e[13],m=e[14],u=e[15],x=f*m*c-S*p*c+S*l*g-o*m*g-f*l*u+o*p*u,v=_*p*c-d*m*c-_*l*g+a*m*g+d*l*u-a*p*u,E=d*S*c-_*f*c+_*o*g-a*S*g-d*o*u+a*f*u,C=_*f*l-d*S*l-_*o*p+a*S*p+d*o*m-a*f*m,A=n*x+i*v+r*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(S*p*s-f*m*s-S*r*g+i*m*g+f*r*u-i*p*u)*T,e[2]=(o*m*s-S*l*s+S*r*c-i*m*c-o*r*u+i*l*u)*T,e[3]=(f*l*s-o*p*s-f*r*c+i*p*c+o*r*g-i*l*g)*T,e[4]=v*T,e[5]=(d*m*s-_*p*s+_*r*g-n*m*g-d*r*u+n*p*u)*T,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*T,e[7]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*g+n*l*g)*T,e[8]=E*T,e[9]=(_*f*s-d*S*s-_*i*g+n*S*g+d*i*u-n*f*u)*T,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*T,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*g-n*o*g)*T,e[12]=C*T,e[13]=(d*S*r-_*f*r+_*i*p-n*S*p-d*i*m+n*f*m)*T,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*m-n*o*m)*T,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,p=s*c,g=s*d,_=s*f,S=a*d,m=a*f,u=o*f,x=l*c,v=l*d,E=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(S+u))*C,r[1]=(g+E)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(p+u))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-x)*T,r[10]=(1-(p+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),o=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/a,f=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ei){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===Ei)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===hc)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ei){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),p=(n+e)*c,g=(i+r)*d;let _,S;if(o===Ei)_=(a+s)*f,S=-2*f;else if(o===hc)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new z,Bn=new vt,xb=new z(0,0,0),vb=new z(1,1,1),Oi=new z,Zo=new z,xn=new z,Mg=new vt,wg=new Mo;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wg.setFromEuler(this),this.setFromQuaternion(wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _b=0;const Tg=new z,us=new Mo,fi=new vt,Qo=new z,wa=new z,yb=new z,Sb=new Mo,bg=new z(1,0,0),Ag=new z(0,1,0),Rg=new z(0,0,1),Cg={type:"added"},Eb={type:"removed"},ds={type:"childadded",child:null},zu={type:"childremoved",child:null};class $t extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new z,n=new si,i=new Mo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new He}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,n){return Tg.copy(e).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(wa,Qo,this.up):fi.lookAt(Qo,wa,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(fi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Eb),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new z(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new z,hi=new z,ju=new z,pi=new z,fs=new z,hs=new z,Ng=new z,Hu=new z,Vu=new z,Gu=new z,Wu=new lt,Xu=new lt,qu=new lt;class Wn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),hi.subVectors(i,n),ju.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(hi),l=zn.dot(ju),c=hi.dot(hi),d=hi.dot(ju),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(c*l-o*d)*p,_=(a*d-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wu.setScalar(0),Xu.setScalar(0),qu.setScalar(0),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(qu,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),hi.subVectors(e,n),zn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;fs.subVectors(r,i),hs.subVectors(s,i),Hu.subVectors(e,i);const l=fs.dot(Hu),c=hs.dot(Hu);if(l<=0&&c<=0)return n.copy(i);Vu.subVectors(e,r);const d=fs.dot(Vu),f=hs.dot(Vu);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(fs,a);Gu.subVectors(e,s);const g=fs.dot(Gu),_=hs.dot(Gu);if(_>=0&&g<=_)return n.copy(s);const S=g*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(hs,o);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return Ng.subVectors(s,r),o=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(Ng,o);const u=1/(m+S+p);return a=S*u,o=p*u,n.copy(i).addScaledVector(fs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},el={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=rb(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$u(a,s,e+1/3),this.g=$u(a,s,e),this.b=$u(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=B_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Lu(e.r),this.g=Lu(e.g),this.b=Lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return rt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(on(Wt.r*255,0,255))*65536+Math.round(on(Wt.g*255,0,255))*256+Math.round(on(Wt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Qn){rt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(el);const i=Nu(Fi.h,el.h,n),r=Nu(Fi.s,el.s,n),s=Nu(Fi.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new tt;tt.NAMES=B_;let Mb=0;class To extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=ks,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lf&&(i.blendSrc=this.blendSrc),this.blendDst!==cf&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class z_ extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,tl=new qe;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xg,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ya(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),e}}class j_ extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class H_ extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wb=0;const An=new vt,Yu=new $t,ps=new z,vn=new wo,Ta=new wo,Dt=new z;class li extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?H_:j_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(vn.min,Ta.min),vn.expandByPoint(Dt),Dt.addVectors(vn.max,Ta.max),vn.expandByPoint(Dt)):(vn.expandByPoint(Ta.min),vn.expandByPoint(Ta.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Dt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Dt.add(ps)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new z,l[N]=new z;const c=new z,d=new z,f=new z,p=new qe,g=new qe,_=new qe,S=new z,m=new z;function u(N,I,y){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,I),f.fromBufferAttribute(i,y),p.fromBufferAttribute(s,N),g.fromBufferAttribute(s,I),_.fromBufferAttribute(s,y),d.sub(c),f.sub(c),g.sub(p),_.sub(p);const M=1/(g.x*_.y-_.x*g.y);isFinite(M)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(M),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(M),o[N].add(S),o[I].add(S),o[y].add(S),l[N].add(m),l[I].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,I=x.length;N<I;++N){const y=x[N],M=y.start,F=y.count;for(let D=M,V=M+F;D<V;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new z,E=new z,C=new z,A=new z;function T(N){C.fromBufferAttribute(r,N),A.copy(C);const I=o[N];v.copy(I),v.sub(C.multiplyScalar(C.dot(I))).normalize(),E.crossVectors(A,I);const M=E.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,M)}for(let N=0,I=x.length;N<I;++N){const y=x[N],M=y.start,F=y.count;for(let D=M,V=M+F;D<V;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),S=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d);let g=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?g=l[S]*o.data.stride+o.offset:g=l[S]*d;for(let u=0;u<d;u++)p[_++]=c[g++]}return new ri(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new vt,_r=new gb,nl=new pp,Lg=new z,il=new z,rl=new z,sl=new z,Ku=new z,al=new z,Dg=new z,ol=new z;class Rt extends $t{constructor(e=new li,n=new z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Ku.fromBufferAttribute(f,e),a?al.addScaledVector(Ku,d):al.addScaledVector(Ku.sub(n),d))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(nl.containsPoint(_r.origin)===!1&&(_r.intersectSphere(nl,Lg)===null||_r.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Pg.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){const m=p[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,C=v;E<C;E+=3){const A=o.getX(E),T=o.getX(E+1),N=o.getX(E+2);r=ll(this,u,e,i,c,d,f,A,T,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=_,u=S;m<u;m+=3){const x=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=ll(this,a,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){const m=p[_],u=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=x,C=v;E<C;E+=3){const A=E,T=E+1,N=E+2;r=ll(this,u,e,i,c,d,f,A,T,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=_,u=S;m<u;m+=3){const x=m,v=m+1,E=m+2;r=ll(this,a,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Tb(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cr,o),l===null)return null;ol.copy(o),ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ol);return c<n.near||c>n.far?null:{distance:c,point:ol.clone(),object:t}}function ll(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,il),t.getVertexPosition(l,rl),t.getVertexPosition(c,sl);const d=Tb(t,e,n,i,il,rl,sl,Dg);if(d){const f=new z;Wn.getBarycoord(Dg,il,rl,sl,f),r&&(d.uv=Wn.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(d.uv1=Wn.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(d.normal=Wn.getInterpolatedAttribute(a,o,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new z,materialIndex:0};Wn.getNormal(il,rl,sl,p.normal),d.face=p,d.barycoord=f}return d}class Yr extends li{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function _(S,m,u,x,v,E,C,A,T,N,I){const y=E/T,M=C/N,F=E/2,D=C/2,V=A/2,$=T+1,G=N+1;let ee=0,U=0;const Z=new z;for(let J=0;J<G;J++){const Y=J*M-D;for(let oe=0;oe<$;oe++){const Te=oe*y-F;Z[S]=Te*x,Z[m]=Y*v,Z[u]=V,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[u]=A>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(oe/T),f.push(1-J/N),ee+=1}}for(let J=0;J<N;J++)for(let Y=0;Y<T;Y++){const oe=p+Y+$*J,Te=p+Y+$*(J+1),X=p+(Y+1)+$*(J+1),ne=p+(Y+1)+$*J;l.push(oe,Te,ne),l.push(Te,X,ne),U+=6}o.addGroup(g,U,I),g+=U,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Qs(t[n]);for(const r in i)e[r]=i[r]}return e}function bb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Ab={clone:Qs,merge:Jt};var Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=Cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class G_ extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new z,Ug=new qe,Ig=new qe;class yn extends G_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Ug,Ig),n.subVectors(Ig,Ug)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class Nb extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new yn(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new yn(ms,gs,e,n);a.layers=this.layers,this.add(a);const o=new yn(ms,gs,e,n);o.layers=this.layers,this.add(o);const l=new yn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new yn(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class W_ extends pn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pb extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ir});s.uniforms.tEquirect.value=n;const a=new Rt(r,s),o=n.minFilter;return n.minFilter===Ur&&(n.minFilter=Gn),new Nb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ju=new z,Lb=new z,Db=new He;class Tr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ju.subVectors(i,n).cross(Lb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Db.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new pp,cl=new z;class mp{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,a=new Tr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],S=r[10],m=r[11],u=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,p-c,m-g,E-u).normalize(),i[1].setComponents(l+s,p+c,m+g,E+u).normalize(),i[2].setComponents(l+a,p+d,m+_,E+x).normalize(),i[3].setComponents(l-a,p-d,m-_,E-x).normalize(),i[4].setComponents(l-o,p-f,m-S,E-v).normalize(),n===Ei)i[5].setComponents(l+o,p+f,m+S,E+v).normalize();else if(n===hc)i[5].setComponents(o,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ub(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<f.length;g++){const _=f[p],S=f[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++p,f[p]=S)}f.length=p+1;for(let g=0,_=f.length;g<_;g++){const S=f[g];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class zc extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,p=n/l,g=[],_=[],S=[],m=[];for(let u=0;u<d;u++){const x=u*p-a;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-x,0),S.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const v=x+c*u,E=x+c*(u+1),C=x+1+c*(u+1),A=x+1+c*u;g.push(v,E,A),g.push(E,C,A)}this.setIndex(g),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$b=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_R=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ER=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ib,alphahash_pars_fragment:Ob,alphamap_fragment:Fb,alphamap_pars_fragment:kb,alphatest_fragment:Bb,alphatest_pars_fragment:zb,aomap_fragment:jb,aomap_pars_fragment:Hb,batching_pars_vertex:Vb,batching_vertex:Gb,begin_vertex:Wb,beginnormal_vertex:Xb,bsdfs:qb,iridescence_fragment:$b,bumpmap_pars_fragment:Yb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Qb,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:aA,displacementmap_pars_vertex:oA,displacementmap_vertex:lA,emissivemap_fragment:cA,emissivemap_pars_fragment:uA,colorspace_fragment:dA,colorspace_pars_fragment:fA,envmap_fragment:hA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:AA,envmap_vertex:xA,fog_vertex:vA,fog_pars_vertex:_A,fog_fragment:yA,fog_pars_fragment:SA,gradientmap_pars_fragment:EA,lightmap_pars_fragment:MA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:TA,lights_pars_begin:bA,lights_toon_fragment:RA,lights_toon_pars_fragment:CA,lights_phong_fragment:NA,lights_phong_pars_fragment:PA,lights_physical_fragment:LA,lights_physical_pars_fragment:DA,lights_fragment_begin:UA,lights_fragment_maps:IA,lights_fragment_end:OA,logdepthbuf_fragment:FA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:zA,map_fragment:jA,map_pars_fragment:HA,map_particle_fragment:VA,map_particle_pars_fragment:GA,metalnessmap_fragment:WA,metalnessmap_pars_fragment:XA,morphinstance_vertex:qA,morphcolor_vertex:$A,morphnormal_vertex:YA,morphtarget_pars_vertex:KA,morphtarget_vertex:JA,normal_fragment_begin:ZA,normal_fragment_maps:QA,normal_pars_fragment:eR,normal_pars_vertex:tR,normal_vertex:nR,normalmap_pars_fragment:iR,clearcoat_normal_fragment_begin:rR,clearcoat_normal_fragment_maps:sR,clearcoat_pars_fragment:aR,iridescence_pars_fragment:oR,opaque_fragment:lR,packing:cR,premultiplied_alpha_fragment:uR,project_vertex:dR,dithering_fragment:fR,dithering_pars_fragment:hR,roughnessmap_fragment:pR,roughnessmap_pars_fragment:mR,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:xR,shadowmap_vertex:vR,shadowmask_pars_fragment:_R,skinbase_vertex:yR,skinning_pars_vertex:SR,skinning_vertex:ER,skinnormal_vertex:MR,specularmap_fragment:wR,specularmap_pars_fragment:TR,tonemapping_fragment:bR,tonemapping_pars_fragment:AR,transmission_fragment:RR,transmission_pars_fragment:CR,uv_pars_fragment:NR,uv_pars_vertex:PR,uv_vertex:LR,worldpos_vertex:DR,background_vert:UR,background_frag:IR,backgroundCube_vert:OR,backgroundCube_frag:FR,cube_vert:kR,cube_frag:BR,depth_vert:zR,depth_frag:jR,distanceRGBA_vert:HR,distanceRGBA_frag:VR,equirect_vert:GR,equirect_frag:WR,linedashed_vert:XR,linedashed_frag:qR,meshbasic_vert:$R,meshbasic_frag:YR,meshlambert_vert:KR,meshlambert_frag:JR,meshmatcap_vert:ZR,meshmatcap_frag:QR,meshnormal_vert:eC,meshnormal_frag:tC,meshphong_vert:nC,meshphong_frag:iC,meshphysical_vert:rC,meshphysical_frag:sC,meshtoon_vert:aC,meshtoon_frag:oC,points_vert:lC,points_frag:cC,shadow_vert:uC,shadow_frag:dC,sprite_vert:fC,sprite_frag:hC},de={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ul={r:0,b:0,g:0},Sr=new si,pC=new vt;function mC(t,e,n,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,d,f=null,p=0,g=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function S(x){let v=!1;const E=_(x);E===null?u(o,l):E&&E.isColor&&(u(E,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===kc)?(d===void 0&&(d=new Rt(new Yr(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Qs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Sr.copy(v.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pC.makeRotationFromEuler(Sr)),d.material.toneMapped=rt.getTransfer(E.colorSpace)!==ht,(f!==E||p!==E.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=E,p=E.version,g=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Rt(new zc(2,2),new ur({name:"BackgroundMaterial",uniforms:Qs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(ul,V_(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:S,addToRenderList:m}}function gC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(y,M,F,D,V){let $=!1;const G=f(D,F,M);s!==G&&(s=G,c(s.object)),$=g(y,D,F,V),$&&_(y,D,F,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(y,M,F,D),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,M,F){const D=F.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let $=V[M.id];$===void 0&&($={},V[M.id]=$);let G=$[D];return G===void 0&&(G=p(l()),$[D]=G),G}function p(y){const M=[],F=[],D=[];for(let V=0;V<n;V++)M[V]=0,F[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:D,object:y,attributes:{},index:null}}function g(y,M,F,D){const V=s.attributes,$=M.attributes;let G=0;const ee=F.getAttributes();for(const U in ee)if(ee[U].location>=0){const J=V[U];let Y=$[U];if(Y===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),J===void 0||J.attribute!==Y||Y&&J.data!==Y.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function _(y,M,F,D){const V={},$=M.attributes;let G=0;const ee=F.getAttributes();for(const U in ee)if(ee[U].location>=0){let J=$[U];J===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const Y={};Y.attribute=J,J&&J.data&&(Y.data=J.data),V[U]=Y,G++}s.attributes=V,s.attributesNum=G,s.index=D}function S(){const y=s.newAttributes;for(let M=0,F=y.length;M<F;M++)y[M]=0}function m(y){u(y,0)}function u(y,M){const F=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;F[y]=1,D[y]===0&&(t.enableVertexAttribArray(y),D[y]=1),V[y]!==M&&(t.vertexAttribDivisor(y,M),V[y]=M)}function x(){const y=s.newAttributes,M=s.enabledAttributes;for(let F=0,D=M.length;F<D;F++)M[F]!==y[F]&&(t.disableVertexAttribArray(F),M[F]=0)}function v(y,M,F,D,V,$,G){G===!0?t.vertexAttribIPointer(y,M,F,V,$):t.vertexAttribPointer(y,M,F,D,V,$)}function E(y,M,F,D){S();const V=D.attributes,$=F.getAttributes(),G=M.defaultAttributeValues;for(const ee in $){const U=$[ee];if(U.location>=0){let Z=V[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const J=Z.normalized,Y=Z.itemSize,oe=e.get(Z);if(oe===void 0)continue;const Te=oe.buffer,X=oe.type,ne=oe.bytesPerElement,fe=X===t.INT||X===t.UNSIGNED_INT||Z.gpuType===op;if(Z.isInterleavedBufferAttribute){const re=Z.data,be=re.stride,Le=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Ve=0;Ve<U.locationSize;Ve++)u(U.location+Ve,re.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ve=0;Ve<U.locationSize;Ve++)m(U.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Ve=0;Ve<U.locationSize;Ve++)v(U.location+Ve,Y/U.locationSize,X,J,be*ne,(Le+Y/U.locationSize*Ve)*ne,fe)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<U.locationSize;re++)u(U.location+re,Z.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<U.locationSize;re++)m(U.location+re);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let re=0;re<U.locationSize;re++)v(U.location+re,Y/U.locationSize,X,J,Y*ne,Y/U.locationSize*re*ne,fe)}}else if(G!==void 0){const J=G[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(U.location,J);break;case 3:t.vertexAttrib3fv(U.location,J);break;case 4:t.vertexAttrib4fv(U.location,J);break;default:t.vertexAttrib1fv(U.location,J)}}}}x()}function C(){N();for(const y in i){const M=i[y];for(const F in M){const D=M[F];for(const V in D)d(D[V].object),delete D[V];delete M[F]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const F in M){const D=M[F];for(const V in D)d(D[V].object),delete D[V];delete M[F]}delete i[y.id]}function T(y){for(const M in i){const F=i[M];if(F[y.id]===void 0)continue;const D=F[y.id];for(const V in D)d(D[V].object),delete D[V];delete F[y.id]}}function N(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:x}}function xC(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,i,1)}function l(c,d,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S];for(let S=0;S<p.length;S++)n.update(_,i,p[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Xn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const N=T===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!N)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:A}}function _C(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Tr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,v=x*4;let E=u.clippingState||null;l.value=E,E=d(_,p,v,g);for(let C=0;C!==v;++C)E[C]=n[C];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const u=g+S*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,E=g;v!==S;++v,E+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function yC(t){let e=new WeakMap;function n(a,o){return o===xf?a.mapping=Ys:o===vf&&(a.mapping=Ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xf||o===vf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pb(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class q_ extends G_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Og=[.125,.215,.35,.446,.526,.582],Rr=20,Zu=new q_,Fg=new tt;let Qu=null,ed=0,td=0,nd=!1;const br=(1+Math.sqrt(5))/2,xs=1/br,kg=[new z(-br,xs,0),new z(br,xs,0),new z(-xs,0,br),new z(xs,0,br),new z(0,br,-xs),new z(0,br,xs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:So,format:Xn,colorSpace:mr,depthBuffer:!1},r=zg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SC(s)),this._blurMaterial=EC(s,e,n)}return r}_compileMaterial(e){const n=new Rt(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Fg),d.toneMapping=rr,d.autoClear=!1;const g=new z_({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new Rt(new Yr,g);let S=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Fg),S=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;dl(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),S&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ys||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kg[(r-s-1)%kg.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Rt(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Rr-1),S=s/_,m=isFinite(s)?1+Math.floor(d*S):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const u=[];let x=0;for(let T=0;T<Rr;++T){const N=T/S,I=Math.exp(-N*N/2);u.push(I),T===0?x+=I:T<m&&(x+=2*I)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const E=this._sizeLods[r],C=3*E*(r>v-Ns?r-v+Ns:0),A=4*(this._cubeSize-E);dl(n,C,A,3*E,2*E),l.setRenderTarget(n),l.render(f,Zu)}}function SC(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+Og.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ns?l=Og[a-t+Ns-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,S=3,m=2,u=1,x=new Float32Array(S*_*g),v=new Float32Array(m*_*g),E=new Float32Array(u*_*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,N=A>2?0:-1,I=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];x.set(I,S*_*A),v.set(p,m*_*A);const y=[A,A,A,A,A,A];E.set(y,u*_*A)}const C=new li;C.setAttribute("position",new ri(x,S)),C.setAttribute("uv",new ri(v,m)),C.setAttribute("faceIndex",new ri(E,u)),e.push(C),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EC(t,e,n){const i=new Float32Array(Rr),r=new z(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function jg(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Hg(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xf||l===vf,d=l===Ys||l===Ks;if(c||d){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Bg(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Bg(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function wC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ul("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TC(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const S=p.morphAttributes[_];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const S=g[_];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,_=f.attributes.position;let S=0;if(g!==null){const x=g.array;S=g.version;for(let v=0,E=x.length;v<E;v+=3){const C=x[v+0],A=x[v+1],T=x[v+2];p.push(C,A,A,T,T,C)}}else if(_!==void 0){const x=_.array;S=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const C=v+0,A=v+1,T=v+2;p.push(C,A,A,T,T,C)}}else return;const m=new(I_(p)?H_:j_)(p,1);m.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function bC(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*a),n.update(g,i,1)}function c(p,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,p*a,_),n.update(g,i,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,_);let m=0;for(let u=0;u<_;u++)m+=g[u];n.update(m,i,1)}function f(p,g,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,g[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,S,0,_);let u=0;for(let x=0;x<_;x++)u+=g[x];for(let x=0;x<S.length;x++)n.update(u,i,S[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function AC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RC(t,e,n){const i=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var g=y;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),N=new F_(T,C,A,f);N.type=Si,N.needsUpdate=!0;const I=E*4;for(let M=0;M<f;M++){const F=u[M],D=x[M],V=v[M],$=C*A*4*M;for(let G=0;G<F.count;G++){const ee=G*I;_===!0&&(r.fromBufferAttribute(F,G),T[$+ee+0]=r.x,T[$+ee+1]=r.y,T[$+ee+2]=r.z,T[$+ee+3]=0),S===!0&&(r.fromBufferAttribute(D,G),T[$+ee+4]=r.x,T[$+ee+5]=r.y,T[$+ee+6]=r.z,T[$+ee+7]=0),m===!0&&(r.fromBufferAttribute(V,G),T[$+ee+8]=r.x,T[$+ee+9]=r.y,T[$+ee+10]=r.z,T[$+ee+11]=V.itemSize===4?r.w:1)}}p={count:f,texture:N,size:new qe(C,A)},i.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function CC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class $_ extends pn{constructor(e,n,i,r,s,a,o,l,c,d=Bs){if(d!==Bs&&d!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Bs&&(i=qr),i===void 0&&d===Zs&&(i=Js),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y_=new pn,Vg=new $_(1,1),K_=new F_,J_=new pb,Z_=new W_,Gg=[],Wg=[],Xg=new Float32Array(16),qg=new Float32Array(9),$g=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gg[r];if(s===void 0&&(s=new Float32Array(r),Gg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=Wg[e];n===void 0&&(n=new Int32Array(e),Wg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function UC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;$g.set(i),t.uniformMatrix2fv(this.addr,!1,$g),Lt(n,i)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;qg.set(i),t.uniformMatrix3fv(this.addr,!1,qg),Lt(n,i)}}function OC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Xg.set(i),t.uniformMatrix4fv(this.addr,!1,Xg),Lt(n,i)}}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function jC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function VC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vg.compareFunction=U_,s=Vg):s=Y_,n.setTexture2D(e||s,r)}function XC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J_,r)}function qC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z_,r)}function $C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K_,r)}function YC(t){switch(t){case 5126:return NC;case 35664:return PC;case 35665:return LC;case 35666:return DC;case 35674:return UC;case 35675:return IC;case 35676:return OC;case 5124:case 35670:return FC;case 35667:case 35671:return kC;case 35668:case 35672:return BC;case 35669:case 35673:return zC;case 5125:return jC;case 36294:return HC;case 36295:return VC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return qC;case 36289:case 36303:case 36311:case 36292:return $C}}function KC(t,e){t.uniform1fv(this.addr,e)}function JC(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function ZC(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function QC(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function e2(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function t2(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function n2(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function i2(t,e){t.uniform1iv(this.addr,e)}function r2(t,e){t.uniform2iv(this.addr,e)}function s2(t,e){t.uniform3iv(this.addr,e)}function a2(t,e){t.uniform4iv(this.addr,e)}function o2(t,e){t.uniform1uiv(this.addr,e)}function l2(t,e){t.uniform2uiv(this.addr,e)}function c2(t,e){t.uniform3uiv(this.addr,e)}function u2(t,e){t.uniform4uiv(this.addr,e)}function d2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Y_,s[a])}function f2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||J_,s[a])}function h2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Z_,s[a])}function p2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||K_,s[a])}function m2(t){switch(t){case 5126:return KC;case 35664:return JC;case 35665:return ZC;case 35666:return QC;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return r2;case 35668:case 35672:return s2;case 35669:case 35673:return a2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return p2}}class g2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YC(n.type)}}class x2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=m2(n.type)}}class v2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Yg(t,e){t.seq.push(e),t.map[e.id]=e}function _2(t,e,n){const i=t.name,r=i.length;for(id.lastIndex=0;;){const s=id.exec(i),a=id.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yg(n,c===void 0?new g2(o,t,e):new x2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new v2(o),Yg(n,f)),n=f}}}class Il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);_2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Kg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const y2=37297;let S2=0;function E2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function M2(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===fc&&n===dc?i="LinearDisplayP3ToLinearSRGB":e===dc&&n===fc&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case Bc:return[i,"LinearTransferOETF"];case Qn:case hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Jg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+E2(t.getShaderSource(e),a)}else return r}function w2(t,e){const n=M2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function T2(t,e){let n;switch(e){case zT:n="Linear";break;case jT:n="Reinhard";break;case HT:n="Cineon";break;case VT:n="ACESFilmic";break;case WT:n="AgX";break;case XT:n="Neutral";break;case GT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new z;function b2(){rt.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function R2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function C2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function La(t){return t!==""}function Zg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(N2,L2)}const P2=new Map;function L2(t,e){let n=je[e];if(n===void 0){const i=P2.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const D2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(t){return t.replace(D2,U2)}function U2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function t0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_T?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function O2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case Ks:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function k2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case S_:e="ENVMAP_BLENDING_MULTIPLY";break;case kT:e="ENVMAP_BLENDING_MIX";break;case BT:e="ENVMAP_BLENDING_ADD";break}return e}function B2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function z2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=I2(n),c=O2(n),d=F2(n),f=k2(n),p=B2(n),g=A2(n),_=R2(s),S=r.createProgram();let m,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(La).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(La).join(`
`),u.length>0&&(u+=`
`)):(m=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),u=[t0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?je.tonemapping_pars_fragment:"",n.toneMapping!==rr?T2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,w2("linearToOutputTexel",n.outputColorSpace),b2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),a=$f(a),a=Zg(a,n),a=Qg(a,n),o=$f(o),o=Zg(o,n),o=Qg(o,n),a=e0(a),o=e0(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=x+m+a,E=x+u+o,C=Kg(r,r.VERTEX_SHADER,v),A=Kg(r,r.FRAGMENT_SHADER,E);r.attachShader(S,C),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(M){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(S).trim(),D=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(A).trim();let $=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,A);else{const ee=Jg(r,C,"vertex"),U=Jg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+ee+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||V==="")&&(G=!1);G&&(M.diagnostics={runnable:$,programLog:F,vertexShader:{log:D,prefix:m},fragmentShader:{log:V,prefix:u}})}r.deleteShader(C),r.deleteShader(A),N=new Il(r,S),I=C2(r,S)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,y2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S2++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}let j2=0;class H2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new V2(e),n.set(e,i)),i}}class V2{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function G2(t,e,n,i,r,s,a){const o=new k_,l=new H2,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,M,F,D,V){const $=D.fog,G=V.geometry,ee=y.isMeshStandardMaterial?D.environment:null,U=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),Z=U&&U.mapping===kc?U.image.height:null,J=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=Y!==void 0?Y.length:0;let Te=0;G.morphAttributes.position!==void 0&&(Te=1),G.morphAttributes.normal!==void 0&&(Te=2),G.morphAttributes.color!==void 0&&(Te=3);let X,ne,fe,re;if(J){const rn=ei[J];X=rn.vertexShader,ne=rn.fragmentShader}else X=y.vertexShader,ne=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const be=t.getRenderTarget(),Le=V.isInstancedMesh===!0,Ve=V.isBatchedMesh===!0,Ze=!!y.map,De=!!y.matcap,P=!!U,Ie=!!y.aoMap,Ue=!!y.lightMap,We=!!y.bumpMap,Re=!!y.normalMap,pe=!!y.displacementMap,Me=!!y.emissiveMap,R=!!y.metalnessMap,w=!!y.roughnessMap,H=y.anisotropy>0,Q=y.clearcoat>0,se=y.dispersion>0,te=y.iridescence>0,Ce=y.sheen>0,he=y.transmission>0,ye=H&&!!y.anisotropyMap,Qe=Q&&!!y.clearcoatMap,le=Q&&!!y.clearcoatNormalMap,Se=Q&&!!y.clearcoatRoughnessMap,ke=te&&!!y.iridescenceMap,Be=te&&!!y.iridescenceThicknessMap,Ee=Ce&&!!y.sheenColorMap,$e=Ce&&!!y.sheenRoughnessMap,ze=!!y.specularMap,ct=!!y.specularColorMap,O=!!y.specularIntensityMap,xe=he&&!!y.transmissionMap,K=he&&!!y.thicknessMap,ie=!!y.gradientMap,me=!!y.alphaMap,ve=y.alphaTest>0,Ke=!!y.alphaHash,Tt=!!y.extensions;let nn=rr;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(nn=t.toneMapping);const et={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ne,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ve,batchingColor:Ve&&V._colorsTexture!==null,instancing:Le,instancingColor:Le&&V.instanceColor!==null,instancingMorph:Le&&V.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:mr,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:De,envMap:P,envMapMode:P&&U.mapping,envMapCubeUVHeight:Z,aoMap:Ie,lightMap:Ue,bumpMap:We,normalMap:Re,displacementMap:g&&pe,emissiveMap:Me,normalMapObjectSpace:Re&&y.normalMapType===KT,normalMapTangentSpace:Re&&y.normalMapType===D_,metalnessMap:R,roughnessMap:w,anisotropy:H,anisotropyMap:ye,clearcoat:Q,clearcoatMap:Qe,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:se,iridescence:te,iridescenceMap:ke,iridescenceThicknessMap:Be,sheen:Ce,sheenColorMap:Ee,sheenRoughnessMap:$e,specularMap:ze,specularColorMap:ct,specularIntensityMap:O,transmission:he,transmissionMap:xe,thicknessMap:K,gradientMap:ie,opaque:y.transparent===!1&&y.blending===ks&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:ve,alphaHash:Ke,combine:y.combine,mapUv:Ze&&m(y.map.channel),aoMapUv:Ie&&m(y.aoMap.channel),lightMapUv:Ue&&m(y.lightMap.channel),bumpMapUv:We&&m(y.bumpMap.channel),normalMapUv:Re&&m(y.normalMap.channel),displacementMapUv:pe&&m(y.displacementMap.channel),emissiveMapUv:Me&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:w&&m(y.roughnessMap.channel),anisotropyMapUv:ye&&m(y.anisotropyMap.channel),clearcoatMapUv:Qe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(y.sheenRoughnessMap.channel),specularMapUv:ze&&m(y.specularMap.channel),specularColorMapUv:ct&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:xe&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:me&&m(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Ze||me),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:nn,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Tt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function x(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)M.push(F),M.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(M,y),E(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){const M=S[y.type];let F;if(M){const D=ei[M];F=Ab.clone(D.uniforms)}else F=y.uniforms;return F}function A(y,M){let F;for(let D=0,V=d.length;D<V;D++){const $=d[D];if($.cacheKey===M){F=$,++F.usedTimes;break}}return F===void 0&&(F=new z2(t,M,y,s),d.push(F)),F}function T(y){if(--y.usedTimes===0){const M=d.indexOf(y);d[M]=d[d.length-1],d.pop(),y.destroy()}}function N(y){l.remove(y)}function I(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:d,dispose:I}}function W2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function X2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function n0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function i0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,_,S,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=S,u.group=m),e++,u}function o(f,p,g,_,S,m){const u=a(f,p,g,_,S,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,p,g,_,S,m){const u=a(f,p,g,_,S,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||X2),i.length>1&&i.sort(p||n0),r.length>1&&r.sort(p||n0)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function q2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new i0,t.set(i,[a])):r>=s.length?(a=new i0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new tt};break;case"SpotLight":n={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Y2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let K2=0;function J2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Z2(t){const e=new $2,n=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new vt,a=new vt;function o(c){let d=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let g=0,_=0,S=0,m=0,u=0,x=0,v=0,E=0,C=0,A=0,T=0;c.sort(J2);for(let I=0,y=c.length;I<y;I++){const M=c[I],F=M.color,D=M.intensity,V=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)d+=F.r*D,f+=F.g*D,p+=F.b*D;else if(M.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(M.sh.coefficients[G],D);T++}else if(M.isDirectionalLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const ee=M.shadow,U=n.get(M);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=M.shadow.matrix,x++}i.directional[g]=G,g++}else if(M.isSpotLight){const G=e.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(F).multiplyScalar(D),G.distance=V,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,i.spot[S]=G;const ee=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,ee.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[S]=ee.matrix,M.castShadow){const U=n.get(M);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.spotShadow[S]=U,i.spotShadowMap[S]=$,E++}S++}else if(M.isRectAreaLight){const G=e.get(M);G.color.copy(F).multiplyScalar(D),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=G,m++}else if(M.isPointLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const ee=M.shadow,U=n.get(M);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=M.shadow.matrix,v++}i.point[_]=G,_++}else if(M.isHemisphereLight){const G=e.get(M);G.skyColor.copy(M.color).multiplyScalar(D),G.groundColor.copy(M.groundColor).multiplyScalar(D),i.hemi[u]=G,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==g||N.pointLength!==_||N.spotLength!==S||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==x||N.numPointShadows!==v||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,N.directionalLength=g,N.pointLength=_,N.spotLength=S,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=x,N.numPointShadows=v,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=T,i.version=K2++)}function l(c,d){let f=0,p=0,g=0,_=0,S=0;const m=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const v=c[u];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function r0(t){const e=new Z2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Q2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new r0(t),e.set(r,[o])):s>=a.length?(o=new r0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class eN extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tN extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rN(t,e,n){let i=new mp;const r=new qe,s=new qe,a=new lt,o=new eN({depthPacking:YT}),l=new tN,c={},d=n.maxTextureSize,f={[cr]:hn,[hn]:cr,[vi]:vi},p=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:nN,fragmentShader:iN}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Rt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y_;let u=this.type;this.render=function(A,T,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const I=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ir),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=u!==mi&&this.type===mi,V=u===mi&&this.type!==mi;for(let $=0,G=A.length;$<G;$++){const ee=A[$],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Z=U.getFrameExtents();if(r.multiply(Z),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||D===!0||V===!0){const Y=this.type!==mi?{minFilter:Pn,magFilter:Pn}:{};U.map!==null&&U.map.dispose(),U.map=new $r(r.x,r.y,Y),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const J=U.getViewportCount();for(let Y=0;Y<J;Y++){const oe=U.getViewport(Y);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a),U.updateMatrices(ee,Y),i=U.getFrustum(),E(T,N,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===mi&&x(U,N),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(I,y,M)};function x(A,T){const N=e.update(S);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $r(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,N,p,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,N,g,S,null)}function v(A,T,N,I){let y=null;const M=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,D=T.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let $=V[D];$===void 0&&($=y.clone(),V[D]=$,T.addEventListener("dispose",C)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,I===mi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=N}return y}function E(A,T,N,I,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const D=e.update(A),V=A.material;if(Array.isArray(V)){const $=D.groups;for(let G=0,ee=$.length;G<ee;G++){const U=$[G],Z=V[U.materialIndex];if(Z&&Z.visible){const J=v(A,Z,I,y);A.onBeforeShadow(t,A,T,N,D,J,U),t.renderBufferDirect(N,null,D,J,A,U),A.onAfterShadow(t,A,T,N,D,J,U)}}}else if(V.visible){const $=v(A,V,I,y);A.onBeforeShadow(t,A,T,N,D,$,null),t.renderBufferDirect(N,null,D,$,A,null),A.onAfterShadow(t,A,T,N,D,$,null)}}const F=A.children;for(let D=0,V=F.length;D<V;D++)E(F[D],T,N,I,y)}function C(A){A.target.removeEventListener("dispose",C);for(const N in c){const I=c[N],y=A.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}const sN={[uf]:df,[ff]:mf,[hf]:gf,[$s]:pf,[df]:uf,[mf]:ff,[gf]:hf,[pf]:$s};function aN(t){function e(){let O=!1;const xe=new lt;let K=null;const ie=new lt(0,0,0,0);return{setMask:function(me){K!==me&&!O&&(t.colorMask(me,me,me,me),K=me)},setLocked:function(me){O=me},setClear:function(me,ve,Ke,Tt,nn){nn===!0&&(me*=Tt,ve*=Tt,Ke*=Tt),xe.set(me,ve,Ke,Tt),ie.equals(xe)===!1&&(t.clearColor(me,ve,Ke,Tt),ie.copy(xe))},reset:function(){O=!1,K=null,ie.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,K=null,ie=null,me=null;return{setReversed:function(ve){xe=ve},setTest:function(ve){ve?fe(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ve){K!==ve&&!O&&(t.depthMask(ve),K=ve)},setFunc:function(ve){if(xe&&(ve=sN[ve]),ie!==ve){switch(ve){case uf:t.depthFunc(t.NEVER);break;case df:t.depthFunc(t.ALWAYS);break;case ff:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case hf:t.depthFunc(t.EQUAL);break;case pf:t.depthFunc(t.GEQUAL);break;case mf:t.depthFunc(t.GREATER);break;case gf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=ve}},setLocked:function(ve){O=ve},setClear:function(ve){me!==ve&&(t.clearDepth(ve),me=ve)},reset:function(){O=!1,K=null,ie=null,me=null}}}function i(){let O=!1,xe=null,K=null,ie=null,me=null,ve=null,Ke=null,Tt=null,nn=null;return{setTest:function(et){O||(et?fe(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(et){xe!==et&&!O&&(t.stencilMask(et),xe=et)},setFunc:function(et,rn,ci){(K!==et||ie!==rn||me!==ci)&&(t.stencilFunc(et,rn,ci),K=et,ie=rn,me=ci)},setOp:function(et,rn,ci){(ve!==et||Ke!==rn||Tt!==ci)&&(t.stencilOp(et,rn,ci),ve=et,Ke=rn,Tt=ci)},setLocked:function(et){O=et},setClear:function(et){nn!==et&&(t.clearStencil(et),nn=et)},reset:function(){O=!1,xe=null,K=null,ie=null,me=null,ve=null,Ke=null,Tt=null,nn=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],g=null,_=!1,S=null,m=null,u=null,x=null,v=null,E=null,C=null,A=new tt(0,0,0),T=0,N=!1,I=null,y=null,M=null,F=null,D=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),$=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),$=G>=2);let U=null,Z={};const J=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),oe=new lt().fromArray(J),Te=new lt().fromArray(Y);function X(O,xe,K,ie){const me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(O,ve),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<K;Ke++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(xe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ve}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc($s),Ue(!1),We(fg),fe(t.CULL_FACE),P(ir);function fe(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function re(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function be(O,xe){return d[O]!==xe?(t.bindFramebuffer(O,xe),d[O]=xe,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Le(O,xe){let K=p,ie=!1;if(O){K=f.get(xe),K===void 0&&(K=[],f.set(xe,K));const me=O.textures;if(K.length!==me.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ke=me.length;ve<Ke;ve++)K[ve]=t.COLOR_ATTACHMENT0+ve;K.length=me.length,ie=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ie=!0);ie&&t.drawBuffers(K)}function Ve(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const Ze={[Ar]:t.FUNC_ADD,[ST]:t.FUNC_SUBTRACT,[ET]:t.FUNC_REVERSE_SUBTRACT};Ze[MT]=t.MIN,Ze[wT]=t.MAX;const De={[TT]:t.ZERO,[bT]:t.ONE,[AT]:t.SRC_COLOR,[lf]:t.SRC_ALPHA,[DT]:t.SRC_ALPHA_SATURATE,[PT]:t.DST_COLOR,[CT]:t.DST_ALPHA,[RT]:t.ONE_MINUS_SRC_COLOR,[cf]:t.ONE_MINUS_SRC_ALPHA,[LT]:t.ONE_MINUS_DST_COLOR,[NT]:t.ONE_MINUS_DST_ALPHA,[UT]:t.CONSTANT_COLOR,[IT]:t.ONE_MINUS_CONSTANT_COLOR,[OT]:t.CONSTANT_ALPHA,[FT]:t.ONE_MINUS_CONSTANT_ALPHA};function P(O,xe,K,ie,me,ve,Ke,Tt,nn,et){if(O===ir){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),O!==yT){if(O!==S||et!==N){if((m!==Ar||v!==Ar)&&(t.blendEquation(t.FUNC_ADD),m=Ar,v=Ar),et)switch(O){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFunc(t.ONE,t.ONE);break;case pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}u=null,x=null,E=null,C=null,A.set(0,0,0),T=0,S=O,N=et}return}me=me||xe,ve=ve||K,Ke=Ke||ie,(xe!==m||me!==v)&&(t.blendEquationSeparate(Ze[xe],Ze[me]),m=xe,v=me),(K!==u||ie!==x||ve!==E||Ke!==C)&&(t.blendFuncSeparate(De[K],De[ie],De[ve],De[Ke]),u=K,x=ie,E=ve,C=Ke),(Tt.equals(A)===!1||nn!==T)&&(t.blendColor(Tt.r,Tt.g,Tt.b,nn),A.copy(Tt),T=nn),S=O,N=!1}function Ie(O,xe){O.side===vi?re(t.CULL_FACE):fe(t.CULL_FACE);let K=O.side===hn;xe&&(K=!K),Ue(K),O.blending===ks&&O.transparent===!1?P(ir):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ie=O.stencilWrite;a.setTest(ie),ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function We(O){O!==xT?(fe(t.CULL_FACE),O!==y&&(O===fg?t.cullFace(t.BACK):O===vT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),y=O}function Re(O){O!==M&&($&&t.lineWidth(O),M=O)}function pe(O,xe,K){O?(fe(t.POLYGON_OFFSET_FILL),(F!==xe||D!==K)&&(t.polygonOffset(xe,K),F=xe,D=K)):re(t.POLYGON_OFFSET_FILL)}function Me(O){O?fe(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function R(O){O===void 0&&(O=t.TEXTURE0+V-1),U!==O&&(t.activeTexture(O),U=O)}function w(O,xe,K){K===void 0&&(U===null?K=t.TEXTURE0+V-1:K=U);let ie=Z[K];ie===void 0&&(ie={type:void 0,texture:void 0},Z[K]=ie),(ie.type!==O||ie.texture!==xe)&&(U!==K&&(t.activeTexture(K),U=K),t.bindTexture(O,xe||ne[O]),ie.type=O,ie.texture=xe)}function H(){const O=Z[U];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){oe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),oe.copy(O))}function Ee(O){Te.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Te.copy(O))}function $e(O,xe){let K=l.get(xe);K===void 0&&(K=new WeakMap,l.set(xe,K));let ie=K.get(O);ie===void 0&&(ie=t.getUniformBlockIndex(xe,O.name),K.set(O,ie))}function ze(O,xe){const ie=l.get(xe).get(O);o.get(xe)!==ie&&(t.uniformBlockBinding(xe,ie,O.__bindingPointIndex),o.set(xe,ie))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,Z={},d={},f=new WeakMap,p=[],g=null,_=!1,S=null,m=null,u=null,x=null,v=null,E=null,C=null,A=new tt(0,0,0),T=0,N=!1,I=null,y=null,M=null,F=null,D=null,oe.set(0,0,t.canvas.width,t.canvas.height),Te.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:re,bindFramebuffer:be,drawBuffers:Le,useProgram:Ve,setBlending:P,setMaterial:Ie,setFlipSided:Ue,setCullFace:We,setLineWidth:Re,setPolygonOffset:pe,setScissorTest:Me,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:se,texImage2D:Se,texImage3D:ke,updateUBOMapping:$e,uniformBlockBinding:ze,texStorage2D:Qe,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Be,viewport:Ee,reset:ct}}function s0(t,e,n,i){const r=oN(i);switch(n){case b_:return t*e;case R_:return t*e;case C_:return t*e*2;case N_:return t*e/r.components*r.byteLength;case up:return t*e/r.components*r.byteLength;case P_:return t*e*2/r.components*r.byteLength;case dp:return t*e*2/r.components*r.byteLength;case A_:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case fp:return t*e*4/r.components*r.byteLength;case Cl:case Nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case wf:return Math.max(t,16)*Math.max(e,8)/4;case Sf:case Mf:return Math.max(t,8)*Math.max(e,8)/2;case Tf:case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Hf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case L_:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oN(t){switch(t){case Ri:case M_:return{byteLength:1,components:1};case uo:case w_:case So:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case qr:case op:case Si:return{byteLength:4,components:1};case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function lN(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return g?new OffscreenCanvas(R,w):pc("canvas")}function S(R,w,H){let Q=1;const se=Me(R);if((se.width>H||se.height>H)&&(Q=H/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(Q*se.width),Ce=Math.floor(Q*se.height);f===void 0&&(f=_(te,Ce));const he=w?_(te,Ce):f;return he.width=te,he.height=Ce,he.getContext("2d").drawImage(R,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ce+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Pn&&R.minFilter!==Gn}function u(R){t.generateMipmap(R)}function x(R,w,H,Q,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=w;if(w===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),w===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8)),w===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),w===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGB8UI),H===t.UNSIGNED_SHORT&&(te=t.RGB16UI),H===t.UNSIGNED_INT&&(te=t.RGB32UI),H===t.BYTE&&(te=t.RGB8I),H===t.SHORT&&(te=t.RGB16I),H===t.INT&&(te=t.RGB32I)),w===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),H===t.UNSIGNED_INT&&(te=t.RGBA32UI),H===t.BYTE&&(te=t.RGBA8I),H===t.SHORT&&(te=t.RGBA16I),H===t.INT&&(te=t.RGBA32I)),w===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),w===t.RGBA){const Ce=se?uc:rt.getTransfer(Q);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=Ce===ht?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(R,w){let H;return R?w===null||w===qr||w===Js?H=t.DEPTH24_STENCIL8:w===Si?H=t.DEPTH32F_STENCIL8:w===uo&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===qr||w===Js?H=t.DEPTH_COMPONENT24:w===Si?H=t.DEPTH_COMPONENT32F:w===uo&&(H=t.DEPTH_COMPONENT16),H}function E(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&d.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),I(w)}function T(R){const w=i.get(R);if(w.__webglInit===void 0)return;const H=R.source,Q=p.get(H);if(Q){const se=Q[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(R),Object.keys(Q).length===0&&p.delete(H)}i.remove(R)}function N(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const H=R.source,Q=p.get(H);delete Q[w.__cacheKey],a.memory.textures--}function I(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let se=0;se<w.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(w.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,se=H.length;Q<se;Q++){const te=i.get(H[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(R)}let y=0;function M(){y=0}function F(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function D(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function V(R,w){const H=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,R,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function $(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Te(H,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function G(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Te(H,R,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function ee(R,w){const H=i.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const U={[_f]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[yf]:t.MIRRORED_REPEAT},Z={[Pn]:t.NEAREST,[qT]:t.NEAREST_MIPMAP_NEAREST,[Xo]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[Ru]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},J={[JT]:t.NEVER,[ib]:t.ALWAYS,[ZT]:t.LESS,[U_]:t.LEQUAL,[QT]:t.EQUAL,[nb]:t.GEQUAL,[eb]:t.GREATER,[tb]:t.NOTEQUAL};function Y(R,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===Ru||w.magFilter===Xo||w.magFilter===Ur||w.minFilter===Gn||w.minFilter===Ru||w.minFilter===Xo||w.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,U[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,U[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,U[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pn||w.minFilter!==Xo&&w.minFilter!==Ur||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function oe(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const Q=w.source;let se=p.get(Q);se===void 0&&(se={},p.set(Q,se));const te=D(w);if(te!==R.__cacheKey){se[te]===void 0&&(se[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[te].usedTimes++;const Ce=se[R.__cacheKey];Ce!==void 0&&(se[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&N(w)),R.__cacheKey=te,R.__webglTexture=se[te].texture}return H}function Te(R,w,H){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const se=oe(R,w),te=w.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const Ce=i.get(te);if(te.version!==Ce.__version||se===!0){n.activeTexture(t.TEXTURE0+H);const he=rt.getPrimaries(rt.workingColorSpace),ye=w.colorSpace===Vi?null:rt.getPrimaries(w.colorSpace),Qe=w.colorSpace===Vi||he===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let le=S(w.image,!1,r.maxTextureSize);le=pe(w,le);const Se=s.convert(w.format,w.colorSpace),ke=s.convert(w.type);let Be=x(w.internalFormat,Se,ke,w.colorSpace,w.isVideoTexture);Y(Q,w);let Ee;const $e=w.mipmaps,ze=w.isVideoTexture!==!0,ct=Ce.__version===void 0||se===!0,O=te.dataReady,xe=E(w,le);if(w.isDepthTexture)Be=v(w.format===Zs,w.type),ct&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Be,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Be,le.width,le.height,0,Se,ke,null));else if(w.isDataTexture)if($e.length>0){ze&&ct&&n.texStorage2D(t.TEXTURE_2D,xe,Be,$e[0].width,$e[0].height);for(let K=0,ie=$e.length;K<ie;K++)Ee=$e[K],ze?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Se,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Se,ke,Ee.data);w.generateMipmaps=!1}else ze?(ct&&n.texStorage2D(t.TEXTURE_2D,xe,Be,le.width,le.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Se,ke,le.data)):n.texImage2D(t.TEXTURE_2D,0,Be,le.width,le.height,0,Se,ke,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Be,$e[0].width,$e[0].height,le.depth);for(let K=0,ie=$e.length;K<ie;K++)if(Ee=$e[K],w.format!==Xn)if(Se!==null)if(ze){if(O)if(w.layerUpdates.size>0){const me=s0(Ee.width,Ee.height,w.format,w.type);for(const ve of w.layerUpdates){const Ke=Ee.data.subarray(ve*me/Ee.data.BYTES_PER_ELEMENT,(ve+1)*me/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ve,Ee.width,Ee.height,1,Se,Ke,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,le.depth,Se,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Be,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,le.depth,Se,ke,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Be,Ee.width,Ee.height,le.depth,0,Se,ke,Ee.data)}else{ze&&ct&&n.texStorage2D(t.TEXTURE_2D,xe,Be,$e[0].width,$e[0].height);for(let K=0,ie=$e.length;K<ie;K++)Ee=$e[K],w.format!==Xn?Se!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Se,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Se,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Se,ke,Ee.data)}else if(w.isDataArrayTexture)if(ze){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Be,le.width,le.height,le.depth),O)if(w.layerUpdates.size>0){const K=s0(le.width,le.height,w.format,w.type);for(const ie of w.layerUpdates){const me=le.data.subarray(ie*K/le.data.BYTES_PER_ELEMENT,(ie+1)*K/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,Se,ke,me)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,Se,ke,le.data);else if(w.isData3DTexture)ze?(ct&&n.texStorage3D(t.TEXTURE_3D,xe,Be,le.width,le.height,le.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,ke,le.data)):n.texImage3D(t.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,Se,ke,le.data);else if(w.isFramebufferTexture){if(ct)if(ze)n.texStorage2D(t.TEXTURE_2D,xe,Be,le.width,le.height);else{let K=le.width,ie=le.height;for(let me=0;me<xe;me++)n.texImage2D(t.TEXTURE_2D,me,Be,K,ie,0,Se,ke,null),K>>=1,ie>>=1}}else if($e.length>0){if(ze&&ct){const K=Me($e[0]);n.texStorage2D(t.TEXTURE_2D,xe,Be,K.width,K.height)}for(let K=0,ie=$e.length;K<ie;K++)Ee=$e[K],ze?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se,ke,Ee):n.texImage2D(t.TEXTURE_2D,K,Be,Se,ke,Ee);w.generateMipmaps=!1}else if(ze){if(ct){const K=Me(le);n.texStorage2D(t.TEXTURE_2D,xe,Be,K.width,K.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,ke,le)}else n.texImage2D(t.TEXTURE_2D,0,Be,Se,ke,le);m(w)&&u(Q),Ce.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function X(R,w,H){if(w.image.length!==6)return;const Q=oe(R,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const te=i.get(se);if(se.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const Ce=rt.getPrimaries(rt.workingColorSpace),he=w.colorSpace===Vi?null:rt.getPrimaries(w.colorSpace),ye=w.colorSpace===Vi||Ce===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let ie=0;ie<6;ie++)!Qe&&!le?Se[ie]=S(w.image[ie],!0,r.maxCubemapSize):Se[ie]=le?w.image[ie].image:w.image[ie],Se[ie]=pe(w,Se[ie]);const ke=Se[0],Be=s.convert(w.format,w.colorSpace),Ee=s.convert(w.type),$e=x(w.internalFormat,Be,Ee,w.colorSpace),ze=w.isVideoTexture!==!0,ct=te.__version===void 0||Q===!0,O=se.dataReady;let xe=E(w,ke);Y(t.TEXTURE_CUBE_MAP,w);let K;if(Qe){ze&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,$e,ke.width,ke.height);for(let ie=0;ie<6;ie++){K=Se[ie].mipmaps;for(let me=0;me<K.length;me++){const ve=K[me];w.format!==Xn?Be!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,ve.width,ve.height,Be,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,$e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,ve.width,ve.height,Be,Ee,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,$e,ve.width,ve.height,0,Be,Ee,ve.data)}}}else{if(K=w.mipmaps,ze&&ct){K.length>0&&xe++;const ie=Me(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Se[ie].width,Se[ie].height,Be,Ee,Se[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,Se[ie].width,Se[ie].height,0,Be,Ee,Se[ie].data);for(let me=0;me<K.length;me++){const Ke=K[me].image[ie].image;ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,Ke.width,Ke.height,Be,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,$e,Ke.width,Ke.height,0,Be,Ee,Ke.data)}}else{ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,Ee,Se[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,Be,Ee,Se[ie]);for(let me=0;me<K.length;me++){const ve=K[me];ze?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,Be,Ee,ve.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,$e,Be,Ee,ve.image[ie])}}}m(w)&&u(t.TEXTURE_CUBE_MAP),te.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,H,Q,se,te){const Ce=s.convert(H.format,H.colorSpace),he=s.convert(H.type),ye=x(H.internalFormat,Ce,he,H.colorSpace);if(!i.get(w).__hasExternalTextures){const le=Math.max(1,w.width>>te),Se=Math.max(1,w.height>>te);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,te,ye,le,Se,w.depth,0,Ce,he,null):n.texImage2D(se,te,ye,le,Se,0,Ce,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,se,i.get(H).__webglTexture,0,Ue(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,se,i.get(H).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(R,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const Q=w.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,te=v(w.stencilBuffer,se),Ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Ue(w);We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,te,w.width,w.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,te,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,R)}else{const Q=w.textures;for(let se=0;se<Q.length;se++){const te=Q[se],Ce=s.convert(te.format,te.colorSpace),he=s.convert(te.type),ye=x(te.internalFormat,Ce,he,te.colorSpace),Qe=Ue(w);H&&We(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,ye,w.width,w.height):We(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,ye,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ye,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,se=Ue(w);if(w.depthTexture.format===Bs)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Zs)We(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(R){const w=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=Q}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");re(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[Q],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(R,w,H){const Q=i.get(R);w!==void 0&&ne(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&be(R)}function Ve(R){const w=R.texture,H=i.get(R),Q=i.get(w);R.addEventListener("dispose",A);const se=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,a.memory.textures++),te){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ye=0;ye<w.mipmaps.length;ye++)H.__webglFramebuffer[he][ye]=t.createFramebuffer()}else H.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)H.__webglFramebuffer[he]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let he=0,ye=se.length;he<ye;he++){const Qe=i.get(se[he]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&We(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const ye=se[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const Qe=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),Se=x(ye.internalFormat,Qe,le,ye.colorSpace,R.isXRRenderTarget===!0),ke=Ue(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Y(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ne(H.__webglFramebuffer[he][ye],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else ne(H.__webglFramebuffer[he],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let he=0,ye=se.length;he<ye;he++){const Qe=se[he],le=i.get(Qe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Y(t.TEXTURE_2D,Qe),ne(H.__webglFramebuffer,R,Qe,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Qe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Q.__webglTexture),Y(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ne(H.__webglFramebuffer[ye],R,w,t.COLOR_ATTACHMENT0,he,ye);else ne(H.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,he,0);m(w)&&u(he),n.unbindTexture()}R.depthBuffer&&be(R)}function Ze(R){const w=R.textures;for(let H=0,Q=w.length;H<Q;H++){const se=w[H];if(m(se)){const te=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(se).__webglTexture;n.bindTexture(te,Ce),u(te),n.unbindTexture()}}}const De=[],P=[];function Ie(R){if(R.samples>0){if(We(R)===!1){const w=R.textures,H=R.width,Q=R.height;let se=t.COLOR_BUFFER_BIT;const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(R),he=w.length>1;if(he)for(let ye=0;ye<w.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Qe=i.get(w[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,se,t.NEAREST),l===!0&&(De.length=0,P.length=0,De.push(t.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(De.push(te),P.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<w.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const Qe=i.get(w[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ue(R){return Math.min(r.maxSamples,R.samples)}function We(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(R){const w=a.render.frame;d.get(R)!==w&&(d.set(R,w),R.update())}function pe(R,w){const H=R.colorSpace,Q=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==mr&&H!==Vi&&(rt.getTransfer(H)===ht?(Q!==Xn||se!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=Le,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=We}function cN(t,e){function n(i,r=Vi){let s;const a=rt.getTransfer(r);if(i===Ri)return t.UNSIGNED_BYTE;if(i===lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===T_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===M_)return t.BYTE;if(i===w_)return t.SHORT;if(i===uo)return t.UNSIGNED_SHORT;if(i===op)return t.INT;if(i===qr)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===So)return t.HALF_FLOAT;if(i===b_)return t.ALPHA;if(i===A_)return t.RGB;if(i===Xn)return t.RGBA;if(i===R_)return t.LUMINANCE;if(i===C_)return t.LUMINANCE_ALPHA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===Zs)return t.DEPTH_STENCIL;if(i===N_)return t.RED;if(i===up)return t.RED_INTEGER;if(i===P_)return t.RG;if(i===dp)return t.RG_INTEGER;if(i===fp)return t.RGBA_INTEGER;if(i===Cl||i===Nl||i===Pl||i===Ll)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Ef||i===Mf||i===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===bf||i===Af)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tf||i===bf)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Af)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rf||i===Cf||i===Nf||i===Pf||i===Lf||i===Df||i===Uf||i===If||i===Of||i===Ff||i===kf||i===Bf||i===zf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Of)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Hf||i===Vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Dl)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===L_||i===Gf||i===Wf||i===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class uN extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qi extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dN={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dN)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new pn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:fN,fragmentShader:hN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rt(new zc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mN extends oa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,_=null;const S=new pN,m=n.getContextAttributes();let u=null,x=null;const v=[],E=[],C=new qe;let A=null;const T=new yn;T.layers.enable(1),T.viewport=new lt;const N=new yn;N.layers.enable(2),N.viewport=new lt;const I=[T,N],y=new uN;y.layers.enable(1),y.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new rd,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new rd,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new rd,v[X]=ne),ne.getHandSpace()};function D(X){const ne=E.indexOf(X.inputSource);if(ne===-1)return;const fe=v[ne];fe!==void 0&&(fe.update(X.inputSource,X.frame,c||a),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const ne=E[X];ne!==null&&(E[X]=null,v[X].disconnect(ne))}M=null,F=null,S.reset(),e.setRenderTarget(u),g=null,p=null,f=null,r=null,x=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new $r(g.framebufferWidth,g.framebufferHeight,{format:Xn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,fe=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Zs:Bs,fe=m.stencil?Js:qr);const be={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new $r(p.textureWidth,p.textureHeight,{format:Xn,type:Ri,depthTexture:new $_(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(X){for(let ne=0;ne<X.removed.length;ne++){const fe=X.removed[ne],re=E.indexOf(fe);re>=0&&(E[re]=null,v[re].disconnect(fe))}for(let ne=0;ne<X.added.length;ne++){const fe=X.added[ne];let re=E.indexOf(fe);if(re===-1){for(let Le=0;Le<v.length;Le++)if(Le>=E.length){E.push(fe),re=Le;break}else if(E[Le]===null){E[Le]=fe,re=Le;break}if(re===-1)break}const be=v[re];be&&be.connect(fe)}}const G=new z,ee=new z;function U(X,ne,fe){G.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);const re=G.distanceTo(ee),be=ne.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ve=be[14]/(be[10]-1),Ze=be[14]/(be[10]+1),De=(be[9]+1)/be[5],P=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],Ue=(Le[8]+1)/Le[0],We=Ve*Ie,Re=Ve*Ue,pe=re/(-Ie+Ue),Me=pe*-Ie;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Me),X.translateZ(pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const R=Ve+pe,w=Ze+pe,H=We-Me,Q=Re+(re-Me),se=De*Ze/w*R,te=P*Ze/w*R;X.projectionMatrix.makePerspective(H,Q,se,te,R,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,fe=X.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),y.near=N.near=T.near=ne,y.far=N.far=T.far=fe,(M!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,F=y.far);const re=X.parent,be=y.cameras;Z(y,re);for(let Le=0;Le<be.length;Le++)Z(be[Le],re);be.length===2?U(y,T,N):y.projectionMatrix.copy(T.projectionMatrix),J(X,y,re)};function J(X,ne,fe){fe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let Y=null;function oe(X,ne){if(d=ne.getViewerPose(c||a),_=ne,d!==null){const fe=d.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let re=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Le=0;Le<fe.length;Le++){const Ve=fe[Le];let Ze=null;if(g!==null)Ze=g.getViewport(Ve);else{const P=f.getViewSubImage(p,Ve);Ze=P.viewport,Le===0&&(e.setRenderTargetTextures(x,P.colorTexture,p.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let De=I[Le];De===void 0&&(De=new yn,De.layers.enable(Le),De.viewport=new lt,I[Le]=De),De.matrix.fromArray(Ve.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ve.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Le===0&&(y.matrix.copy(De.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(De)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=f.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&S.init(e,Le,r.renderState)}}for(let fe=0;fe<v.length;fe++){const re=E[fe],be=v[fe];re!==null&&be!==void 0&&be.update(re,ne,c||a)}Y&&Y(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Te=new X_;Te.setAnimationLoop(oe),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}const Er=new si,gN=new vt;function xN(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,V_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&g(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u),v=x.envMap,E=x.envMapRotation;v&&(m.envMap.value=v,Er.copy(E),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),m.envMapRotation.value.setFromMatrix4(gN.makeRotationFromEuler(Er)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vN(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(_(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(p(x),s[x.id]=A)}function d(x){const v=f();x.__bindingPointIndex=v;const E=t.createBuffer(),C=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],E=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=E.length;A<T;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let I=0,y=N.length;I<y;I++){const M=N[I];if(g(M,A,I,C)===!0){const F=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let V=0;for(let $=0;$<D.length;$++){const G=D[$],ee=S(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+V,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,E,C){const A=x.value,T=v+"_"+E;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const N=C[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(x){const v=x.uniforms;let E=0;const C=16;for(let T=0,N=v.length;T<N;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=I.length;y<M;y++){const F=I[y],D=Array.isArray(F.value)?F.value:[F.value];for(let V=0,$=D.length;V<$;V++){const G=D[V],ee=S(G),U=E%C,Z=U%ee.boundary,J=U+Z;E+=Z,J!==0&&C-J<ee.storage&&(E+=C-J),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ee.storage}}}const A=E%C;return A>0&&(E+=C-A),x.__size=E,x.__cache={},this}function S(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class _N{constructor(e={}){const{canvas:n=sb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=rr,this.toneMappingExposure=1;const v=this;let E=!1,C=0,A=0,T=null,N=-1,I=null;const y=new lt,M=new lt;let F=null;const D=new tt(0);let V=0,$=n.width,G=n.height,ee=1,U=null,Z=null;const J=new lt(0,0,$,G),Y=new lt(0,0,$,G);let oe=!1;const Te=new mp;let X=!1,ne=!1;const fe=new vt,re=new vt,be=new z,Le=new lt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function De(){return T===null?ee:1}let P=i;function Ie(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ve,!1),P===null){const k="webgl2";if(P=Ie(k,b),P===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,We,Re,pe,Me,R,w,H,Q,se,te,Ce,he,ye,Qe,le,Se,ke,Be,Ee,$e,ze,ct,O;function xe(){Ue=new wC(P),Ue.init(),ze=new cN(P,Ue),We=new vC(P,Ue,e,ze),Re=new aN(P),We.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),pe=new AC(P),Me=new W2,R=new lN(P,Ue,Re,Me,We,ze,pe),w=new yC(v),H=new MC(v),Q=new Ub(P),ct=new gC(P,Q),se=new TC(P,Q,pe,ct),te=new CC(P,se,Q,pe),Be=new RC(P,We,R),le=new _C(Me),Ce=new G2(v,w,H,Ue,We,ct,le),he=new xN(v,Me),ye=new q2,Qe=new Q2(Ue),ke=new mC(v,w,H,Re,te,p,l),Se=new rN(v,te,We),O=new vN(P,pe,We,Re),Ee=new xC(P,Ue,pe),$e=new bC(P,Ue,pe),pe.programs=Ce.programs,v.capabilities=We,v.extensions=Ue,v.properties=Me,v.renderLists=ye,v.shadowMap=Se,v.state=Re,v.info=pe}xe();const K=new mN(v,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize($,G,!1))},this.getSize=function(b){return b.set($,G)},this.setSize=function(b,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,G=k,n.width=Math.floor(b*ee),n.height=Math.floor(k*ee),W===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set($*ee,G*ee).floor()},this.setDrawingBufferSize=function(b,k,W){$=b,G=k,ee=W,n.width=Math.floor(b*W),n.height=Math.floor(k*W),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,k,W,q){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,k,W,q),Re.viewport(y.copy(J).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Y)},this.setScissor=function(b,k,W,q){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,k,W,q),Re.scissor(M.copy(Y).multiplyScalar(ee).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){Re.setScissorTest(oe=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,k=!0,W=!0){let q=0;if(b){let B=!1;if(T!==null){const ce=T.texture.format;B=ce===fp||ce===dp||ce===up}if(B){const ce=T.texture.type,ge=ce===Ri||ce===qr||ce===uo||ce===Js||ce===lp||ce===cp,we=ke.getClearColor(),Ae=ke.getClearAlpha(),Oe=we.r,Fe=we.g,Ne=we.b;ge?(g[0]=Oe,g[1]=Fe,g[2]=Ne,g[3]=Ae,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Oe,_[1]=Fe,_[2]=Ne,_[3]=Ae,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}k&&(q|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Qe.dispose(),Me.dispose(),w.dispose(),H.dispose(),te.dispose(),ct.dispose(),O.dispose(),Ce.dispose(),K.dispose(),K.removeEventListener("sessionstart",yp),K.removeEventListener("sessionend",Sp),gr.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=pe.autoReset,k=Se.enabled,W=Se.autoUpdate,q=Se.needsUpdate,B=Se.type;xe(),pe.autoReset=b,Se.enabled=k,Se.autoUpdate=W,Se.needsUpdate=q,Se.type=B}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ke(b){const k=b.target;k.removeEventListener("dispose",Ke),Tt(k)}function Tt(b){nn(b),Me.remove(b)}function nn(b){const k=Me.get(b).programs;k!==void 0&&(k.forEach(function(W){Ce.releaseProgram(W)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,W,q,B,ce){k===null&&(k=Ve);const ge=B.isMesh&&B.matrixWorld.determinant()<0,we=ty(b,k,W,q,B);Re.setMaterial(q,ge);let Ae=W.index,Oe=1;if(q.wireframe===!0){if(Ae=se.getWireframeAttribute(W),Ae===void 0)return;Oe=2}const Fe=W.drawRange,Ne=W.attributes.position;let st=Fe.start*Oe,dt=(Fe.start+Fe.count)*Oe;ce!==null&&(st=Math.max(st,ce.start*Oe),dt=Math.min(dt,(ce.start+ce.count)*Oe)),Ae!==null?(st=Math.max(st,0),dt=Math.min(dt,Ae.count)):Ne!=null&&(st=Math.max(st,0),dt=Math.min(dt,Ne.count));const yt=dt-st;if(yt<0||yt===1/0)return;ct.setup(B,q,we,W,Ae);let mn,nt=Ee;if(Ae!==null&&(mn=Q.get(Ae),nt=$e,nt.setIndex(mn)),B.isMesh)q.wireframe===!0?(Re.setLineWidth(q.wireframeLinewidth*De()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(B.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),Re.setLineWidth(Pe*De()),B.isLineSegments?nt.setMode(P.LINES):B.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else B.isPoints?nt.setMode(P.POINTS):B.isSprite&&nt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pe=B._multiDrawStarts,Ft=B._multiDrawCounts,it=B._multiDrawCount,On=Ae?Q.get(Ae).bytesPerElement:1,ts=Me.get(q).currentProgram.getUniforms();for(let gn=0;gn<it;gn++)ts.setValue(P,"_gl_DrawID",gn),nt.render(Pe[gn]/On,Ft[gn])}else if(B.isInstancedMesh)nt.renderInstances(st,yt,B.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ft=Math.min(W.instanceCount,Pe);nt.renderInstances(st,yt,Ft)}else nt.render(st,yt)};function et(b,k,W){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,Ao(b,k,W),b.side=cr,b.needsUpdate=!0,Ao(b,k,W),b.side=vi):Ao(b,k,W)}this.compile=function(b,k,W=null){W===null&&(W=b),m=Qe.get(W),m.init(k),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const we=ce[ge];et(we,W,B),q.add(we)}else et(ce,W,B),q.add(ce)}),x.pop(),m=null,q},this.compileAsync=function(b,k,W=null){const q=this.compile(b,k,W);return new Promise(B=>{function ce(){if(q.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){B(b);return}setTimeout(ce,10)}Ue.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let rn=null;function ci(b){rn&&rn(b)}function yp(){gr.stop()}function Sp(){gr.start()}const gr=new X_;gr.setAnimationLoop(ci),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(b){rn=b,K.setAnimationLoop(b),b===null?gr.stop():gr.start()},K.addEventListener("sessionstart",yp),K.addEventListener("sessionend",Sp),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,T),m=Qe.get(b,x.length),m.init(k),x.push(m),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Te.setFromProjectionMatrix(re),ne=this.localClippingEnabled,X=le.init(this.clippingPlanes,ne),S=ye.get(b,u.length),S.init(),u.push(S),K.enabled===!0&&K.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Gc(ce,k,-1/0,v.sortObjects)}Gc(b,k,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(U,Z),Ze=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ze&&ke.addToRenderList(S,b),this.info.render.frame++,X===!0&&le.beginShadows();const W=m.state.shadowsArray;Se.render(W,b,k),X===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,B=S.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(B.length>0)for(let ge=0,we=ce.length;ge<we;ge++){const Ae=ce[ge];Mp(q,B,b,Ae)}Ze&&ke.render(b);for(let ge=0,we=ce.length;ge<we;ge++){const Ae=ce[ge];Ep(S,b,Ae,Ae.viewport)}}else B.length>0&&Mp(q,B,b,k),Ze&&ke.render(b),Ep(S,b,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,k),ct.resetDefaultState(),N=-1,I=null,x.pop(),x.length>0?(m=x[x.length-1],X===!0&&le.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Gc(b,k,W,q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Te.intersectsSprite(b)){q&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const ge=te.update(b),we=b.material;we.visible&&S.push(b,ge,we,W,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Te.intersectsObject(b))){const ge=te.update(b),we=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Le.copy(ge.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Ae=ge.groups;for(let Oe=0,Fe=Ae.length;Oe<Fe;Oe++){const Ne=Ae[Oe],st=we[Ne.materialIndex];st&&st.visible&&S.push(b,ge,st,W,Le.z,Ne)}}else we.visible&&S.push(b,ge,we,W,Le.z,null)}}const ce=b.children;for(let ge=0,we=ce.length;ge<we;ge++)Gc(ce[ge],k,W,q)}function Ep(b,k,W,q){const B=b.opaque,ce=b.transmissive,ge=b.transparent;m.setupLightsView(W),X===!0&&le.setGlobalState(v.clippingPlanes,W),q&&Re.viewport(y.copy(q)),B.length>0&&bo(B,k,W),ce.length>0&&bo(ce,k,W),ge.length>0&&bo(ge,k,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Mp(b,k,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new $r(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?So:Ri,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[q.id],ge=q.viewport||y;ce.setSize(ge.z,ge.w);const we=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(D),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ze&&ke.render(W);const Ae=v.toneMapping;v.toneMapping=rr;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),X===!0&&le.setGlobalState(v.clippingPlanes,q),bo(b,W,q),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ne=0,st=k.length;Ne<st;Ne++){const dt=k[Ne],yt=dt.object,mn=dt.geometry,nt=dt.material,Pe=dt.group;if(nt.side===vi&&yt.layers.test(q.layers)){const Ft=nt.side;nt.side=hn,nt.needsUpdate=!0,wp(yt,W,q,mn,nt,Pe),nt.side=Ft,nt.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}v.setRenderTarget(we),v.setClearColor(D,V),Oe!==void 0&&(q.viewport=Oe),v.toneMapping=Ae}function bo(b,k,W){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ce=b.length;B<ce;B++){const ge=b[B],we=ge.object,Ae=ge.geometry,Oe=q===null?ge.material:q,Fe=ge.group;we.layers.test(W.layers)&&wp(we,k,W,Ae,Oe,Fe)}}function wp(b,k,W,q,B,ce){b.onBeforeRender(v,k,W,q,B,ce),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,k,W,q,b,ce),B.transparent===!0&&B.side===vi&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,v.renderBufferDirect(W,k,q,B,b,ce),B.side=cr,B.needsUpdate=!0,v.renderBufferDirect(W,k,q,B,b,ce),B.side=vi):v.renderBufferDirect(W,k,q,B,b,ce),b.onAfterRender(v,k,W,q,B,ce)}function Ao(b,k,W){k.isScene!==!0&&(k=Ve);const q=Me.get(b),B=m.state.lights,ce=m.state.shadowsArray,ge=B.state.version,we=Ce.getParameters(b,B.state,ce,k,W),Ae=Ce.getProgramCacheKey(we);let Oe=q.programs;q.environment=b.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(b.isMeshStandardMaterial?H:w).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",Ke),Oe=new Map,q.programs=Oe);let Fe=Oe.get(Ae);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===ge)return bp(b,we),Fe}else we.uniforms=Ce.getUniforms(b),b.onBeforeCompile(we,v),Fe=Ce.acquireProgram(we,Ae),Oe.set(Ae,Fe),q.uniforms=we.uniforms;const Ne=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=le.uniform),bp(b,we),q.needsLights=iy(b),q.lightsStateVersion=ge,q.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function Tp(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Il.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function bp(b,k){const W=Me.get(b);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function ty(b,k,W,q,B){k.isScene!==!0&&(k=Ve),R.resetTextureUnits();const ce=k.fog,ge=q.isMeshStandardMaterial?k.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mr,Ae=(q.isMeshStandardMaterial?H:w).get(q.envMap||ge),Oe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let yt=rr;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(yt=v.toneMapping);const mn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=mn!==void 0?mn.length:0,Pe=Me.get(q),Ft=m.state.lights;if(X===!0&&(ne===!0||b!==I)){const bn=b===I&&q.id===N;le.setState(q,b,bn)}let it=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ft.state.version||Pe.outputColorSpace!==we||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ae||q.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==le.numPlanes||Pe.numIntersection!==le.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ne||Pe.morphNormals!==st||Pe.morphColors!==dt||Pe.toneMapping!==yt||Pe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Pe.__version=q.version);let On=Pe.currentProgram;it===!0&&(On=Ao(q,k,B));let ts=!1,gn=!1,Wc=!1;const Et=On.getUniforms(),Pi=Pe.uniforms;if(Re.useProgram(On.program)&&(ts=!0,gn=!0,Wc=!0),q.id!==N&&(N=q.id,gn=!0),ts||I!==b){We.reverseDepthBuffer?(fe.copy(b.projectionMatrix),ob(fe),lb(fe),Et.setValue(P,"projectionMatrix",fe)):Et.setValue(P,"projectionMatrix",b.projectionMatrix),Et.setValue(P,"viewMatrix",b.matrixWorldInverse);const bn=Et.map.cameraPosition;bn!==void 0&&bn.setValue(P,be.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),I!==b&&(I=b,gn=!0,Wc=!0)}if(B.isSkinnedMesh){Et.setOptional(P,B,"bindMatrix"),Et.setOptional(P,B,"bindMatrixInverse");const bn=B.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Et.setValue(P,"boneTexture",bn.boneTexture,R))}B.isBatchedMesh&&(Et.setOptional(P,B,"batchingTexture"),Et.setValue(P,"batchingTexture",B._matricesTexture,R),Et.setOptional(P,B,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",B._indirectTexture,R),Et.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",B._colorsTexture,R));const Xc=W.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0)&&Be.update(B,W,On),(gn||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,Et.setValue(P,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Pi.envMap.value=Ae,Pi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Pi.envMapIntensity.value=k.environmentIntensity),gn&&(Et.setValue(P,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&ny(Pi,Wc),ce&&q.fog===!0&&he.refreshFogUniforms(Pi,ce),he.refreshMaterialUniforms(Pi,q,ee,G,m.state.transmissionRenderTarget[b.id]),Il.upload(P,Tp(Pe),Pi,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Il.upload(P,Tp(Pe),Pi,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(P,"center",B.center),Et.setValue(P,"modelViewMatrix",B.modelViewMatrix),Et.setValue(P,"normalMatrix",B.normalMatrix),Et.setValue(P,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const bn=q.uniformsGroups;for(let qc=0,ry=bn.length;qc<ry;qc++){const Ap=bn[qc];O.update(Ap,On),O.bind(Ap,On)}}return On}function ny(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function iy(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,k,W){Me.get(b.texture).__webglTexture=k,Me.get(b.depthTexture).__webglTexture=W;const q=Me.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const W=Me.get(b);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,W=0){T=b,C=k,A=W;let q=!0,B=null,ce=!1,ge=!1;if(b){const Ae=Me.get(b);if(Ae.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ae.__hasExternalTextures)R.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Ae.__boundDepthTexture!==Ne){if(Ne!==null&&Me.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Fe=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?B=Fe[k][W]:B=Fe[k],ce=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?B=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[W]:B=Fe,y.copy(b.viewport),M.copy(b.scissor),F=b.scissorTest}else y.copy(J).multiplyScalar(ee).floor(),M.copy(Y).multiplyScalar(ee).floor(),F=oe;if(Re.bindFramebuffer(P.FRAMEBUFFER,B)&&q&&Re.drawBuffers(b,B),Re.viewport(y),Re.scissor(M),Re.setScissorTest(F),ce){const Ae=Me.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,W)}else if(ge){const Ae=Me.get(b.texture),Oe=k||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Oe)}N=-1},this.readRenderTargetPixels=function(b,k,W,q,B,ce,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Re.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ae=b.texture,Oe=Ae.format,Fe=Ae.type;if(!We.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-q&&W>=0&&W<=b.height-B&&P.readPixels(k,W,q,B,ze.convert(Oe),ze.convert(Fe),ce)}finally{const Ae=T!==null?Me.get(T).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,k,W,q,B,ce,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){const Ae=b.texture,Oe=Ae.format,Fe=Ae.type;if(!We.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-q&&W>=0&&W<=b.height-B){Re.bindFramebuffer(P.FRAMEBUFFER,we);const Ne=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(k,W,q,B,ze.convert(Oe),ze.convert(Fe),0);const st=T!==null?Me.get(T).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,st);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ab(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ne),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Ne),P.deleteSync(dt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,W=0){b.isTexture!==!0&&(Ul("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-W),B=Math.floor(b.image.width*q),ce=Math.floor(b.image.height*q),ge=k!==null?k.x:0,we=k!==null?k.y:0;R.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ge,we,B,ce),Re.unbindTexture()},this.copyTextureToTexture=function(b,k,W=null,q=null,B=0){b.isTexture!==!0&&(Ul("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],k=arguments[2],B=arguments[3]||0,W=null);let ce,ge,we,Ae,Oe,Fe;W!==null?(ce=W.max.x-W.min.x,ge=W.max.y-W.min.y,we=W.min.x,Ae=W.min.y):(ce=b.image.width,ge=b.image.height,we=0,Ae=0),q!==null?(Oe=q.x,Fe=q.y):(Oe=0,Fe=0);const Ne=ze.convert(k.format),st=ze.convert(k.type);R.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),nt=P.getParameter(P.UNPACK_SKIP_ROWS),Pe=P.getParameter(P.UNPACK_SKIP_IMAGES),Ft=b.isCompressedTexture?b.mipmaps[B]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,Oe,Fe,ce,ge,Ne,st,Ft.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,Oe,Fe,Ft.width,Ft.height,Ne,Ft.data):P.texSubImage2D(P.TEXTURE_2D,B,Oe,Fe,ce,ge,Ne,st,Ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),B===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(b,k,W=null,q=null,B=0){b.isTexture!==!0&&(Ul("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,b=arguments[2],k=arguments[3],B=arguments[4]||0);let ce,ge,we,Ae,Oe,Fe,Ne,st,dt;const yt=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(ce=W.max.x-W.min.x,ge=W.max.y-W.min.y,we=W.max.z-W.min.z,Ae=W.min.x,Oe=W.min.y,Fe=W.min.z):(ce=yt.width,ge=yt.height,we=yt.depth,Ae=0,Oe=0,Fe=0),q!==null?(Ne=q.x,st=q.y,dt=q.z):(Ne=0,st=0,dt=0);const mn=ze.convert(k.format),nt=ze.convert(k.type);let Pe;if(k.isData3DTexture)R.setTexture3D(k,0),Pe=P.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Ft=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),On=P.getParameter(P.UNPACK_SKIP_PIXELS),ts=P.getParameter(P.UNPACK_SKIP_ROWS),gn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Pe,B,Ne,st,dt,ce,ge,we,mn,nt,yt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,B,Ne,st,dt,ce,ge,we,mn,yt.data):P.texSubImage3D(Pe,B,Ne,st,dt,ce,ge,we,mn,nt,yt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,On),P.pixelStorei(P.UNPACK_SKIP_ROWS,ts),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gn),B===0&&k.generateMipmaps&&P.generateMipmap(Pe),Re.unbindTexture()},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Re.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Re.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===hp?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Bc?"display-p3":"srgb"}}class yN extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ps extends li{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],g=[];let _=0;const S=[],m=i/2;let u=0;x(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(g,2));function x(){const E=new z,C=new z;let A=0;const T=(n-e)/i;for(let N=0;N<=s;N++){const I=[],y=N/s,M=y*(n-e)+e;for(let F=0;F<=r;F++){const D=F/r,V=D*l+o,$=Math.sin(V),G=Math.cos(V);C.x=M*$,C.y=-y*i+m,C.z=M*G,f.push(C.x,C.y,C.z),E.set($,T,G).normalize(),p.push(E.x,E.y,E.z),g.push(D,1-y),I.push(_++)}S.push(I)}for(let N=0;N<r;N++)for(let I=0;I<s;I++){const y=S[I][N],M=S[I+1][N],F=S[I+1][N+1],D=S[I][N+1];e>0&&(d.push(y,M,D),A+=3),n>0&&(d.push(M,F,D),A+=3)}c.addGroup(u,A,0),u+=A}function v(E){const C=_,A=new qe,T=new z;let N=0;const I=E===!0?e:n,y=E===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*y,0),p.push(0,y,0),g.push(.5,.5),_++;const M=_;for(let F=0;F<=r;F++){const V=F/r*l+o,$=Math.cos(V),G=Math.sin(V);T.x=I*G,T.y=m*y,T.z=I*$,f.push(T.x,T.y,T.z),p.push(0,y,0),A.x=$*.5+.5,A.y=G*.5*y+.5,g.push(A.x,A.y),_++}for(let F=0;F<r;F++){const D=C+F,V=M+F;E===!0?d.push(V,V+1,D):d.push(V+1,V,D),N+=3}c.addGroup(u,N,E===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xp extends li{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new z,E=new z,C=new z;for(let A=0;A<n.length;A+=3)g(n[A+0],v),g(n[A+1],E),g(n[A+2],C),l(v,E,C,x)}function l(x,v,E,C){const A=C+1,T=[];for(let N=0;N<=A;N++){T[N]=[];const I=x.clone().lerp(E,N/A),y=v.clone().lerp(E,N/A),M=A-N;for(let F=0;F<=M;F++)F===0&&N===A?T[N][F]=I:T[N][F]=I.clone().lerp(y,F/M)}for(let N=0;N<A;N++)for(let I=0;I<2*(A-N)-1;I++){const y=Math.floor(I/2);I%2===0?(p(T[N][y+1]),p(T[N+1][y]),p(T[N][y])):(p(T[N][y+1]),p(T[N+1][y+1]),p(T[N+1][y]))}}function c(x){const v=new z;for(let E=0;E<s.length;E+=3)v.x=s[E+0],v.y=s[E+1],v.z=s[E+2],v.normalize().multiplyScalar(x),s[E+0]=v.x,s[E+1]=v.y,s[E+2]=v.z}function d(){const x=new z;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const E=m(x)/2/Math.PI+.5,C=u(x)/Math.PI+.5;a.push(E,1-C)}_(),f()}function f(){for(let x=0;x<a.length;x+=6){const v=a[x+0],E=a[x+2],C=a[x+4],A=Math.max(v,E,C),T=Math.min(v,E,C);A>.9&&T<.1&&(v<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function p(x){s.push(x.x,x.y,x.z)}function g(x,v){const E=x*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function _(){const x=new z,v=new z,E=new z,C=new z,A=new qe,T=new qe,N=new qe;for(let I=0,y=0;I<s.length;I+=9,y+=6){x.set(s[I+0],s[I+1],s[I+2]),v.set(s[I+3],s[I+4],s[I+5]),E.set(s[I+6],s[I+7],s[I+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),N.set(a[y+4],a[y+5]),C.copy(x).add(v).add(E).divideScalar(3);const M=m(C);S(A,y+0,x,M),S(T,y+2,v,M),S(N,y+4,E,M)}}function S(x,v,E,C){C<0&&x.x===1&&(a[v]=x.x-1),E.x===0&&E.z===0&&(a[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.vertices,e.indices,e.radius,e.details)}}class vp extends xp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vp(e.radius,e.detail)}}class mc extends li{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new z,f=new z,p=new z;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const S=_/r*s,m=g/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(S),f.y=(e+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),o.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(_/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const S=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,u=(r+1)*(g-1)+_,x=(r+1)*g+_;a.push(S,m,x),a.push(m,u,x)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ba extends To{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D_,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sd=new vt,a0=new z,o0=new z;class Q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),n.position.copy(a0),o0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(o0),n.updateMatrixWorld(),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const l0=new vt,Aa=new z,ad=new z;class SN extends Q_{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Aa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Aa),ad.copy(i.position),ad.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ad),i.updateMatrixWorld(),r.makeTranslation(-Aa.x,-Aa.y,-Aa.z),l0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l0)}}class c0 extends _p{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new SN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class EN extends Q_{constructor(){super(new q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MN extends _p{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new EN}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wN extends _p{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class TN{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=u0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=u0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function u0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);const bN=()=>{const t=j.useRef(null),[e,n]=j.useState(!0);return j.useEffect(()=>{const i=t.current;if(!i)return;try{const Ie=document.createElement("canvas");if(!(Ie.getContext("webgl")||Ie.getContext("experimental-webgl")))throw new Error("No WebGL")}catch{n(!1);return}const r=i.clientWidth,s=i.clientHeight,a=new yN,o=new yn(45,r/s,.1,1e3);o.position.z=15;const l=new _N({alpha:!0,antialias:!0});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(l.domElement);const c=new wN(16777215,1.2);a.add(c);const d=new MN(16777215,1.5);d.position.set(5,10,7),a.add(d);const f=new c0(8490232,3,30);f.position.set(-6,6,6),a.add(f);const p=new c0(16478597,3,30);p.position.set(6,-6,6),a.add(p);const g=new qi,_=new ba({color:6514417,roughness:.2,metalness:.3}),S=new ba({color:16007006,roughness:.2,metalness:.3}),m=new ba({color:11032055,roughness:.3,metalness:.4}),u=new ba({color:16096779,roughness:.1,metalness:.8}),x=new ba({color:16317180,roughness:.1,metalness:.2}),v=new Yr(2.4,1.6,.4),E=new Rt(v,S);E.position.set(-3.5,2,0),g.add(E);const C=new mc(.5,.12,16,32),A=new Rt(C,u),T=new Ps(.08,.08,1.2,16),N=new Rt(T,u);N.position.set(.7,0,0),N.rotation.z=Math.PI/2;const I=new qi;I.add(A),I.add(N),I.position.set(3.8,2.5,1),g.add(I);const y=new mc(1.6,.12,16,32,Math.PI),M=new Rt(y,_),F=new Ps(.5,.5,.4,32),D=new Rt(F,x);D.position.set(-1.6,0,0),D.rotation.z=Math.PI/2;const V=new Rt(F,x);V.position.set(1.6,0,0),V.rotation.z=Math.PI/2;const $=new qi;$.add(M),$.add(D),$.add(V),$.position.set(0,.5,2),$.rotation.x=.3,g.add($);const G=new Ps(.7,.7,2.6,32),ee=new Rt(G,_),U=new Ps(.4,.4,.5,32),Z=new Rt(U,m);Z.position.y=1.55;const J=new qi;J.add(ee),J.add(Z),J.position.set(-4,-2.5,1),J.rotation.z=-.4,g.add(J);const Y=new Yr(1.5,2.2,.08),oe=new Rt(Y,S);oe.position.set(3.5,-2.2,0),oe.rotation.z=.3,g.add(oe);const Te=new vp(1.4,1),X=new Rt(Te,m);X.position.set(.5,-3.2,-1),g.add(X),a.add(g);let ne=0,fe=0,re=0,be=0;const Le=Ie=>{const Ue=i.getBoundingClientRect(),We=Ie.clientX-Ue.left-Ue.width/2,Re=Ie.clientY-Ue.top-Ue.height/2;ne=We/Ue.width*2,fe=Re/Ue.height*2};window.addEventListener("mousemove",Le);let Ve,Ze=new TN;const De=()=>{Ve=requestAnimationFrame(De);const Ie=Ze.getElapsedTime();re+=(ne-re)*.05,be+=(fe-be)*.05,g.rotation.y=re*.4,g.rotation.x=-be*.4,E.position.y=2+Math.sin(Ie*1.5)*.3,E.rotation.y=Ie*.6,E.rotation.x=Math.cos(Ie*.5)*.2,I.position.y=2.5+Math.cos(Ie*1.8)*.25,I.rotation.y=Ie*.8,$.position.y=.5+Math.sin(Ie*1.2)*.35,$.rotation.y=Math.sin(Ie*.4)*.3,J.position.y=-2.5+Math.sin(Ie*1.6+1)*.3,J.rotation.y=Ie*.5,oe.position.y=-2.2+Math.cos(Ie*1.4+2)*.25,oe.rotation.y=Ie*.7,X.position.y=-3.2+Math.sin(Ie*1.1+.5)*.3,X.rotation.y=Ie*.4,l.render(a,o)};De();const P=()=>{if(!i)return;const Ie=i.clientWidth,Ue=i.clientHeight;o.aspect=Ie/Ue,o.updateProjectionMatrix(),l.setSize(Ie,Ue)};return window.addEventListener("resize",P),()=>{window.removeEventListener("mousemove",Le),window.removeEventListener("resize",P),cancelAnimationFrame(Ve),i.contains(l.domElement)&&i.removeChild(l.domElement),l.dispose()}},[]),e?h.jsx("div",{ref:t,className:"w-full h-full min-h-[420px] cursor-grab active:cursor-grabbing"}):h.jsx("div",{className:"w-full h-full flex items-center justify-center p-8",children:h.jsx("div",{className:"relative w-72 h-72 rounded-3xl bg-gradient-to-tr from-indigo-100 to-rose-100 border border-slate-200 flex items-center justify-center animate-pulse",children:h.jsxs("div",{className:"text-center",children:[h.jsx("span",{className:"text-5xl",children:"🎒 🔑 🎧"}),h.jsx("p",{className:"mt-4 text-xs text-slate-500",children:"Interactive Belongings Canvas"})]})})})},Hc=({status:t})=>{const e=()=>{switch(t){case"ACTIVE":return"bg-emerald-50 text-emerald-700 border-emerald-200";case"RESOLVED":return"bg-indigo-50 text-indigo-700 border-indigo-200";case"REJECTED":return"bg-rose-50 text-rose-700 border-rose-200";default:return"bg-slate-100 text-slate-700 border-slate-200"}};return h.jsxs("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${e()}`,children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full mr-1.5 bg-current animate-pulse"}),t]})},Vc=({type:t})=>{const e=t==="LOST";return h.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${e?"bg-indigo-50 text-indigo-700 border-indigo-200":"bg-rose-50 text-rose-700 border-rose-200"}`,children:[e?h.jsx(g_,{className:"w-3.5 h-3.5"}):h.jsx(Qr,{className:"w-3.5 h-3.5"}),t]})},ey=({report:t})=>{var n;const e=i=>i?new Date(i).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown Date";return h.jsxs("div",{className:"glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between group",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[h.jsx(Vc,{type:t.type}),h.jsx(Hc,{status:t.status})]}),t.imageUrl&&h.jsx("div",{className:"mb-3 h-40 rounded-xl overflow-hidden bg-slate-100 border border-slate-200",children:h.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-full object-cover group-hover:scale-105 transition duration-300"})}),h.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition line-clamp-1",children:t.title}),h.jsx("p",{className:"text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed",children:t.description}),h.jsxs("div",{className:"space-y-2 text-xs text-slate-500 mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Fc,{className:"w-3.5 h-3.5 text-indigo-500 shrink-0"}),h.jsx("span",{className:"truncate",children:t.location})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(tp,{className:"w-3.5 h-3.5 text-rose-500 shrink-0"}),h.jsx("span",{children:e(t.date)})]}),t.category&&h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(fT,{className:"w-3.5 h-3.5 text-slate-400 shrink-0"}),h.jsx("span",{className:"px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700",children:t.category})]})]})]}),h.jsxs("div",{className:"pt-3 border-t border-slate-100 flex items-center justify-between mt-2",children:[h.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-slate-500",children:[h.jsx(v_,{className:"w-3 h-3 text-indigo-500"}),h.jsx("span",{className:"truncate max-w-[120px]",children:((n=t.reportedBy)==null?void 0:n.name)||"Anonymous User"})]}),h.jsxs(at,{to:`/reports/${t._id}`,className:"inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition group-hover:translate-x-1",children:["View Details",h.jsx(co,{className:"w-3.5 h-3.5"})]})]})]})},AN=()=>{const t=ai(),[e,n]=j.useState(""),[i,r]=j.useState([]),[s,a]=j.useState(!0);j.useEffect(()=>{(async()=>{try{const c=await Ge.get("/api/reports?limit=6&sortBy=createdAt&order=desc");c.data.success&&r(c.data.data)}catch(c){console.error("Failed to fetch recent reports",c)}finally{a(!1)}})()},[]);const o=l=>{l.preventDefault(),e.trim()?t(`/browse?search=${encodeURIComponent(e.trim())}`):t("/browse")};return h.jsxs("div",{className:"min-h-screen space-y-24 pb-20",children:[h.jsxs("section",{className:"relative pt-12 lg:pt-20 overflow-hidden",children:[h.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none"}),h.jsx("div",{className:"absolute top-1/3 right-10 w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-[140px] pointer-events-none"}),h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-7 space-y-8 text-center lg:text-left",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-600 tracking-wide uppercase shadow-sm",children:[h.jsx(es,{className:"w-4 h-4 text-indigo-500"}),"Campus Lost & Found Platform"]}),h.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]",children:["Lost something? ",h.jsx("br",{}),h.jsx("span",{className:"bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 bg-clip-text text-transparent",children:"Let’s bring it back."})]}),h.jsx("p",{className:"text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed",children:"Your smarter way to report lost belongings, discover found items, and reconnect people with what matters across campus."}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2",children:[h.jsxs(at,{to:"/report?type=LOST",className:"w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm",children:[h.jsx(Oc,{className:"w-5 h-5"}),"Report Lost Item"]}),h.jsxs(at,{to:"/report?type=FOUND",className:"w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm",children:[h.jsx(Qr,{className:"w-5 h-5"}),"Report Found Item"]})]}),h.jsx("form",{onSubmit:o,className:"pt-4 max-w-xl mx-auto lg:mx-0",children:h.jsxs("div",{className:"relative flex items-center shadow-card rounded-2xl",children:[h.jsx(rp,{className:"absolute left-4 w-5 h-5 text-slate-400"}),h.jsx("input",{type:"text",placeholder:"Search lost backpack, keys, phone, ID card...",value:e,onChange:l=>n(l.target.value),className:"w-full pl-12 pr-28 py-4 rounded-2xl glass-input text-sm font-medium"}),h.jsx("button",{type:"submit",className:"absolute right-2.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm",children:"Search"})]})})]}),h.jsx("div",{className:"lg:col-span-5 relative h-[450px] sm:h-[500px] w-full",children:h.jsxs("div",{className:"absolute inset-0 bg-white/80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl",children:[h.jsx(bN,{}),h.jsxs("div",{className:"absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-sm",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-medium",children:[h.jsx(eT,{className:"w-4 h-4 text-indigo-600 animate-spin",style:{animationDuration:"8s"}}),"Interactive 3D Belongings"]}),h.jsx("span",{className:"text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono font-semibold",children:"Move mouse to tilt"})]})]})})]})})]}),h.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16 space-y-3",children:[h.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-indigo-600",children:"Simple Workflow"}),h.jsx("h3",{className:"text-3xl font-extrabold text-slate-900",children:"How IRIS Brings Items Back"}),h.jsx("p",{className:"text-sm text-slate-600",children:"Three seamless steps designed for campus students and faculty."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[h.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-indigo-300 transition-all",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-black text-xl",children:"1"}),h.jsx("h4",{className:"text-lg font-bold text-slate-900",children:"Post a Report"}),h.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Lost an item or found someone’s belongings? Submit a report with location, date, and description in seconds."})]}),h.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-rose-300 transition-all",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700 font-black text-xl",children:"2"}),h.jsx("h4",{className:"text-lg font-bold text-slate-900",children:"Discover & Verify"}),h.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Browse campus-wide active reports using smart category filters, location tags, and real-time text search."})]}),h.jsxs("div",{className:"glass-card rounded-3xl p-8 space-y-4 border border-slate-200 hover:border-emerald-300 transition-all",children:[h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-black text-xl",children:"3"}),h.jsx("h4",{className:"text-lg font-bold text-slate-900",children:"Reconnect & Resolve"}),h.jsx("p",{className:"text-sm text-slate-600 leading-relaxed",children:"Connect with the reporter, verify ownership securely, and mark the report as RESOLVED once item is safely back."})]})]})]}),h.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-rose-600 mb-1",children:"Live Feed"}),h.jsx("h3",{className:"text-3xl font-extrabold text-slate-900",children:"Recent Campus Reports"})]}),h.jsxs(at,{to:"/browse",className:"inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition",children:["Explore All Reports",h.jsx(co,{className:"w-4 h-4"})]})]}),s?h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[1,2,3].map(l=>h.jsx("div",{className:"h-64 rounded-2xl bg-slate-200 animate-pulse"},l))}):i.length>0?h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:i.map(l=>h.jsx(ey,{report:l},l._id))}):h.jsx("div",{className:"glass-card rounded-2xl p-12 text-center text-slate-500",children:"No recent reports found. Be the first to post a report!"})]}),h.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsx("div",{className:"glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 relative overflow-hidden",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10",children:[h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0",children:h.jsx(cc,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-base font-bold text-slate-900 mb-1",children:"HTTP-Only JWT Security"}),h.jsx("p",{className:"text-xs text-slate-600",children:"Protected authentication tokens secured in HTTP-only cookies prevent XSS vulnerabilities."})]})]}),h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-rose-50 text-rose-600 shrink-0",children:h.jsx(sp,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-base font-bold text-slate-900 mb-1",children:"Admin Moderation"}),h.jsx("p",{className:"text-xs text-slate-600",children:"Strict role verification allows administrators to moderate inappropriate reports and maintain safety."})]})]}),h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0",children:h.jsx(np,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-base font-bold text-slate-900 mb-1",children:"Privacy Controls"}),h.jsx("p",{className:"text-xs text-slate-600",children:"User email identity is protected and report ownership controls prevent unauthorized edits."})]})]})]})})}),h.jsxs("section",{className:"max-w-4xl mx-auto px-4 text-center space-y-6",children:[h.jsx("h3",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900",children:"Ready to find what you lost?"}),h.jsx("p",{className:"text-sm text-slate-600 max-w-lg mx-auto",children:"Join campus students using IRIS to report lost keys, IDs, electronics, and books every day."}),h.jsx("div",{className:"pt-2",children:h.jsxs(at,{to:"/register",className:"inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.02] transition text-sm",children:["Create Your Account Now",h.jsx(co,{className:"w-5 h-5"})]})})]})]})},RN=()=>{const{login:t}=oi(),e=ai(),[n,i]=j.useState(""),[r,s]=j.useState(""),[a,o]=j.useState(!1),[l,c]=j.useState(!1),[d,f]=j.useState(""),p=async g=>{if(g.preventDefault(),f(""),!n||!r){f("Please fill in all fields.");return}c(!0);const _=await t(n,r);c(!1),_.success?_.user.role==="ADMIN"?e("/admin"):e("/dashboard"):f(_.error||"Invalid credentials")};return h.jsx("div",{className:"min-h-[80vh] flex items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"w-full max-w-md space-y-8 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden",children:[h.jsx("div",{className:"absolute -top-20 -right-20 w-40 h-40 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"text-center space-y-2",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-200",children:[h.jsx(es,{className:"w-3.5 h-3.5"}),"Welcome Back"]}),h.jsx("h2",{className:"text-2xl font-extrabold text-slate-900",children:"Log In to IRIS"}),h.jsx("p",{className:"text-xs text-slate-500",children:"Enter your credentials to access your reports & dashboard."})]}),d&&h.jsx("div",{className:"p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium text-center",children:d}),h.jsxs("form",{onSubmit:p,className:"space-y-5",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Email Address"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(ip,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"email",required:!0,placeholder:"student@campus.edu",value:n,onChange:g=>i(g.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("div",{className:"flex items-center justify-between",children:h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Password"})}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(cc,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:a?"text":"password",required:!0,placeholder:"••••••••",value:r,onChange:g=>s(g.target.value),className:"w-full pl-10 pr-10 py-3 rounded-xl glass-input text-sm"}),h.jsx("button",{type:"button",onClick:()=>o(!a),className:"absolute right-3.5 text-slate-400 hover:text-slate-900",children:a?h.jsx(tT,{className:"w-4 h-4"}):h.jsx(np,{className:"w-4 h-4"})})]})]}),h.jsx("button",{type:"submit",disabled:l,className:"w-full py-3.5 rounded-xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 text-sm disabled:opacity-50",children:l?h.jsxs(h.Fragment,{children:[h.jsx(kr,{className:"w-4 h-4 animate-spin"}),"Authenticating..."]}):h.jsxs(h.Fragment,{children:["Sign In",h.jsx(co,{className:"w-4 h-4"})]})})]}),h.jsxs("div",{className:"pt-4 border-t border-slate-100 text-center text-xs text-slate-500",children:["Don't have an account?"," ",h.jsx(at,{to:"/register",className:"font-bold text-indigo-600 hover:underline",children:"Register here"})]})]})})},CN=()=>{const{register:t}=oi(),e=ai(),[n,i]=j.useState(""),[r,s]=j.useState(""),[a,o]=j.useState(""),[l,c]=j.useState(""),[d,f]=j.useState(!1),[p,g]=j.useState(""),_=async S=>{if(S.preventDefault(),g(""),!n||!r||!a||!l){g("Please fill in all required fields.");return}if(a.length<6){g("Password must be at least 6 characters.");return}if(a!==l){g("Passwords do not match.");return}f(!0);const m=await t(n,r,a);f(!1),m.success?e("/dashboard"):g(m.error||"Registration failed.")};return h.jsx("div",{className:"min-h-[85vh] flex items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"w-full max-w-md space-y-8 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden",children:[h.jsx("div",{className:"absolute -top-20 -right-20 w-40 h-40 bg-rose-200/50 rounded-full blur-3xl pointer-events-none"}),h.jsxs("div",{className:"text-center space-y-2",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-200",children:[h.jsx(es,{className:"w-3.5 h-3.5"}),"Join Campus Network"]}),h.jsx("h2",{className:"text-2xl font-extrabold text-slate-900",children:"Create Your IRIS Account"}),h.jsx("p",{className:"text-xs text-slate-500",children:"Register to post lost or found items across campus."})]}),p&&h.jsx("div",{className:"p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium text-center",children:p}),h.jsxs("form",{onSubmit:_,className:"space-y-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Full Name"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(v_,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"text",required:!0,placeholder:"John Doe",value:n,onChange:S=>i(S.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Campus Email"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(ip,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"email",required:!0,placeholder:"student@campus.edu",value:r,onChange:S=>s(S.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Password (min 6 chars)"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(cc,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:a,onChange:S=>o(S.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Confirm Password"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(cc,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:l,onChange:S=>c(S.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsx("button",{type:"submit",disabled:d,className:"w-full py-3.5 rounded-xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 text-sm disabled:opacity-50",children:d?h.jsxs(h.Fragment,{children:[h.jsx(kr,{className:"w-4 h-4 animate-spin"}),"Creating Account..."]}):h.jsxs(h.Fragment,{children:["Register",h.jsx(co,{className:"w-4 h-4"})]})})]}),h.jsxs("div",{className:"pt-4 border-t border-slate-100 text-center text-xs text-slate-500",children:["Already have an account?"," ",h.jsx(at,{to:"/login",className:"font-bold text-indigo-600 hover:underline",children:"Log In here"})]})]})})},NN=["All","Electronics","Documents","Accessories","Clothing","Books","Keys","Bags","Other"],PN=()=>{const[t,e]=Ov(),[n,i]=j.useState(t.get("search")||""),[r,s]=j.useState(t.get("type")||"ALL"),[a,o]=j.useState(t.get("category")||"All"),[l,c]=j.useState(t.get("status")||"ALL"),[d,f]=j.useState(parseInt(t.get("page")||"1",10)),[p,g]=j.useState([]),[_,S]=j.useState(1),[m,u]=j.useState(0),[x,v]=j.useState(!0),[E,C]=j.useState(null),A=async()=>{var I,y;v(!0),C(null);try{const M=new URLSearchParams;M.append("page",d),M.append("limit",9),n.trim()&&M.append("search",n.trim()),r!=="ALL"&&M.append("type",r),a!=="All"&&M.append("category",a),l!=="ALL"&&M.append("status",l);const F=await Ge.get(`/api/reports?${M.toString()}`);F.data.success&&(g(F.data.data),S(F.data.totalPages||1),u(F.data.total||0))}catch(M){C(((y=(I=M.response)==null?void 0:I.data)==null?void 0:y.error)||"Failed to load reports")}finally{v(!1)}};j.useEffect(()=>{A()},[r,a,l,d]);const T=I=>{I.preventDefault(),f(1),A()},N=()=>{i(""),s("ALL"),o("All"),c("ALL"),f(1),e({})};return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-extrabold text-slate-900",children:"Browse Campus Reports"}),h.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"Search lost and found items posted by students and staff."})]}),h.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm",children:["ALL","LOST","FOUND"].map(I=>h.jsx("button",{onClick:()=>{s(I),f(1)},className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${r===I?"bg-indigo-600 text-white shadow-md":"text-slate-600 hover:text-slate-900"}`,children:I},I))})]}),h.jsx("div",{className:"glass-card rounded-2xl p-4 sm:p-6 space-y-4 border border-slate-200 shadow-sm",children:h.jsxs("form",{onSubmit:T,className:"grid grid-cols-1 md:grid-cols-12 gap-4",children:[h.jsxs("div",{className:"md:col-span-5 relative flex items-center",children:[h.jsx(rp,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"text",placeholder:"Search title, description, location...",value:n,onChange:I=>i(I.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm"})]}),h.jsx("div",{className:"md:col-span-3",children:h.jsx("select",{value:a,onChange:I=>{o(I.target.value),f(1)},className:"w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer",children:NN.map(I=>h.jsxs("option",{value:I,className:"bg-white text-slate-900",children:["Category: ",I]},I))})}),h.jsx("div",{className:"md:col-span-2",children:h.jsxs("select",{value:l,onChange:I=>{c(I.target.value),f(1)},className:"w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer",children:[h.jsx("option",{value:"ALL",className:"bg-white text-slate-900",children:"Status: All"}),h.jsx("option",{value:"ACTIVE",className:"bg-white text-slate-900",children:"ACTIVE"}),h.jsx("option",{value:"RESOLVED",className:"bg-white text-slate-900",children:"RESOLVED"})]})}),h.jsxs("div",{className:"md:col-span-2 flex items-center gap-2",children:[h.jsx("button",{type:"submit",className:"flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shadow-sm",children:"Apply"}),h.jsx("button",{type:"button",onClick:N,className:"p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition",title:"Reset Filters",children:h.jsx(dT,{className:"w-4 h-4"})})]})]})}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500",children:[h.jsxs("span",{children:["Showing ",h.jsx("strong",{className:"text-slate-900",children:p.length})," of ",h.jsx("strong",{className:"text-slate-900",children:m})," reports"]}),r!=="ALL"&&h.jsxs("span",{className:"font-semibold text-indigo-600",children:["Filtered by ",r]})]}),x?h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[1,2,3,4,5,6].map(I=>h.jsx("div",{className:"h-64 rounded-2xl bg-slate-200 animate-pulse border border-slate-200"},I))}):E?h.jsxs("div",{className:"glass-card rounded-2xl p-12 text-center text-rose-600 space-y-3",children:[h.jsx("p",{className:"font-bold",children:E}),h.jsx("button",{onClick:A,className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold",children:"Retry Loading"})]}):p.length>0?h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:p.map(I=>h.jsx(ey,{report:I},I._id))}):h.jsxs("div",{className:"glass-card rounded-3xl p-16 text-center space-y-4 max-w-md mx-auto",children:[h.jsx("div",{className:"w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-2xl",children:"🔍"}),h.jsx("h3",{className:"text-lg font-bold text-slate-900",children:"No matching reports found"}),h.jsx("p",{className:"text-xs text-slate-500",children:"Try adjusting your search keywords, category filters, or status selection."}),h.jsx("button",{onClick:N,className:"px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold",children:"Clear All Filters"})]}),_>1&&h.jsxs("div",{className:"flex items-center justify-center gap-4 pt-6",children:[h.jsx("button",{disabled:d<=1,onClick:()=>f(d-1),className:"p-2.5 rounded-xl glass-card border border-slate-200 text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 transition",children:h.jsx(Jw,{className:"w-5 h-5"})}),h.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:["Page ",h.jsx("strong",{className:"text-slate-900",children:d})," of ",h.jsx("strong",{className:"text-slate-900",children:_})]}),h.jsx("button",{disabled:d>=_,onClick:()=>f(d+1),className:"p-2.5 rounded-xl glass-card border border-slate-200 text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 transition",children:h.jsx(Zw,{className:"w-5 h-5"})})]})]})},sr=({isOpen:t,onClose:e,title:n,children:i})=>(j.useEffect(()=>{const r=s=>{s.key==="Escape"&&e()};return t&&(document.body.style.overflow="hidden",window.addEventListener("keydown",r)),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",r)}},[t,e]),t?h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in",children:h.jsxs("div",{className:"relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl overflow-hidden",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-slate-100",children:[h.jsx("h3",{className:"text-lg font-bold text-slate-900",children:n}),h.jsx("button",{onClick:e,className:"p-1 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition",children:h.jsx(__,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"max-h-[75vh] overflow-y-auto pr-1",children:i})]})}):null),LN=()=>{var T,N,I;const{id:t}=l1(),e=ai(),{user:n,showToast:i}=oi(),[r,s]=j.useState(null),[a,o]=j.useState(!0),[l,c]=j.useState(null),[d,f]=j.useState(!1),[p,g]=j.useState(!1),[_,S]=j.useState(!1),[m,u]=j.useState(!1),x=async()=>{var y,M;o(!0),c(null);try{const F=await Ge.get(`/api/reports/${t}`);F.data.success&&s(F.data.data)}catch(F){c(((M=(y=F.response)==null?void 0:y.data)==null?void 0:M.error)||"Report not found or unavailable")}finally{o(!1)}};j.useEffect(()=>{x()},[t]);const v=n&&r&&r.reportedBy&&(r.reportedBy._id===n.id||r.reportedBy===n.id),E=async()=>{var y,M;u(!0);try{const F=await Ge.patch(`/api/reports/${t}/resolve`);F.data.success&&(i("Report marked as RESOLVED!","success"),s(F.data.data),f(!1))}catch(F){i(((M=(y=F.response)==null?void 0:y.data)==null?void 0:M.error)||"Failed to resolve report","error")}finally{u(!1)}},C=async()=>{var y,M;u(!0);try{(await Ge.delete(`/api/reports/${t}`)).data.success&&(i("Report deleted successfully","info"),e("/dashboard"))}catch(F){i(((M=(y=F.response)==null?void 0:y.data)==null?void 0:M.error)||"Failed to delete report","error")}finally{u(!1)}},A=y=>y?new Date(y).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"N/A";return a?h.jsx("div",{className:"max-w-4xl mx-auto px-4 py-16",children:h.jsx("div",{className:"h-96 rounded-3xl bg-slate-200 animate-pulse"})}):l||!r?h.jsxs("div",{className:"max-w-lg mx-auto px-4 py-20 text-center space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto text-2xl",children:"⚠️"}),h.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Report Unavailable"}),h.jsx("p",{className:"text-xs text-slate-500",children:l||"This report may have been removed or does not exist."}),h.jsx(at,{to:"/browse",className:"inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold",children:"Back to Browse"})]}):h.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[h.jsxs(at,{to:"/browse",className:"inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition",children:[h.jsx(Kw,{className:"w-4 h-4"}),"Back to Reports"]}),h.jsxs("div",{className:"glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8 relative overflow-hidden",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(Vc,{type:r.type}),h.jsx(Hc,{status:r.status}),r.category&&h.jsx("span",{className:"px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700",children:r.category})]}),v&&r.status==="ACTIVE"&&h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:()=>f(!0),className:"px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition flex items-center gap-1.5",children:[h.jsx(Qr,{className:"w-4 h-4"}),"Mark Resolved"]}),h.jsxs("button",{onClick:()=>g(!0),className:"px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 text-xs font-bold transition flex items-center gap-1.5",children:[h.jsx(x_,{className:"w-4 h-4"}),"Delete"]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("h1",{className:"text-3xl font-extrabold text-slate-900 leading-tight",children:r.title}),h.jsxs("p",{className:"text-xs text-slate-500",children:["Report ID: ",h.jsx("span",{className:"font-mono text-slate-900",children:r._id})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx(Fc,{className:"w-3.5 h-3.5 text-indigo-600"}),"Location"]}),h.jsx("p",{className:"text-sm font-medium text-slate-900",children:r.location})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1",children:[h.jsxs("span",{className:"text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx(tp,{className:"w-3.5 h-3.5 text-rose-500"}),"Date ",r.type==="LOST"?"Lost":"Found"]}),h.jsx("p",{className:"text-sm font-medium text-slate-900",children:A(r.date)})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsx("h3",{className:"text-sm font-bold text-slate-900 uppercase tracking-wider",children:"Item Description"}),h.jsx("div",{className:"p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-600 leading-relaxed whitespace-pre-line",children:r.description})]}),r.imageUrl&&h.jsxs("div",{className:"space-y-3",children:[h.jsx("h3",{className:"text-sm font-bold text-slate-900 uppercase tracking-wider",children:"Attached Image"}),h.jsx("div",{className:"rounded-2xl overflow-hidden border border-slate-200 max-h-96",children:h.jsx("img",{src:r.imageUrl,alt:r.title,className:"w-full h-full object-cover"})})]}),h.jsxs("div",{className:"pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-base border border-indigo-200",children:(T=r.reportedBy)!=null&&T.name?r.reportedBy.name.charAt(0).toUpperCase():"U"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-bold text-slate-900",children:((N=r.reportedBy)==null?void 0:N.name)||"Campus Student"}),h.jsx("p",{className:"text-[11px] text-slate-500",children:"Reported by verified campus account"})]})]}),!v&&n&&h.jsxs("button",{onClick:()=>S(!0),className:"px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-soft hover:bg-indigo-700 transition flex items-center gap-2",children:[h.jsx(ip,{className:"w-4 h-4"}),"Contact Reporter"]})]})]}),h.jsx(sr,{isOpen:d,onClose:()=>f(!1),title:"Mark Report as Resolved",children:h.jsxs("div",{className:"space-y-4",children:[h.jsxs("p",{className:"text-sm text-slate-600",children:["Have you successfully recovered or returned this item? Once marked as ",h.jsx("strong",{className:"text-indigo-600",children:"RESOLVED"}),", it will no longer accept updates."]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{onClick:()=>f(!1),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsx("button",{onClick:E,disabled:m,className:"px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold",children:"Confirm Resolve"})]})]})}),h.jsx(sr,{isOpen:p,onClose:()=>g(!1),title:"Confirm Delete Report",children:h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs",children:[h.jsx(hT,{className:"w-5 h-5 shrink-0"}),h.jsx("span",{children:"This action is permanent and cannot be undone."})]}),h.jsx("p",{className:"text-sm text-slate-600",children:"Are you sure you want to delete this report from the portal?"}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{onClick:()=>g(!1),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsx("button",{onClick:C,disabled:m,className:"px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold",children:"Confirm Delete"})]})]})}),h.jsx(sr,{isOpen:_,onClose:()=>S(!1),title:"Contact Information",children:h.jsxs("div",{className:"space-y-4 text-sm text-slate-600",children:[h.jsx("p",{children:"You can reach the student who submitted this report at:"}),h.jsx("div",{className:"p-4 rounded-xl bg-slate-50 border border-slate-200 text-center",children:h.jsx("p",{className:"text-base font-bold text-indigo-600 select-all",children:((I=r.reportedBy)==null?void 0:I.email)||"Email Protected"})}),h.jsx("p",{className:"text-xs text-slate-500",children:"Please arrange to meet in a safe public campus location (e.g. Student Union, Library Desk)."})]})})]})},DN=["Electronics","Documents","Accessories","Clothing","Books","Keys","Bags","Other"],UN=()=>{const[t]=Ov(),e=ai(),{showToast:n}=oi(),[i,r]=j.useState(t.get("type")||"LOST"),[s,a]=j.useState(""),[o,l]=j.useState("Other"),[c,d]=j.useState(""),[f,p]=j.useState(new Date().toISOString().split("T")[0]),[g,_]=j.useState(""),[S,m]=j.useState(""),[u,x]=j.useState(!1),[v,E]=j.useState(""),C=async A=>{var T,N;if(A.preventDefault(),E(""),!s||!c||!f||!g){E("Please fill in all required fields.");return}x(!0);try{const I={title:s.trim(),type:i,category:o,location:c.trim(),date:new Date(f).toISOString(),description:g.trim()};S.trim()&&(I.imageUrl=S.trim());const y=await Ge.post("/api/reports",I);y.data.success&&(n("Report created successfully!","success"),e(`/reports/${y.data.data._id}`))}catch(I){E(((N=(T=I.response)==null?void 0:T.data)==null?void 0:N.error)||"Failed to create report.")}finally{x(!1)}};return h.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-10 space-y-8",children:[h.jsxs("div",{className:"text-center space-y-2",children:[h.jsx("h1",{className:"text-3xl font-extrabold text-slate-900",children:"Post a Campus Report"}),h.jsx("p",{className:"text-xs text-slate-500",children:"Provide detailed information to help identify and return the item."})]}),h.jsxs("div",{className:"glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-xl",children:[v&&h.jsx("div",{className:"p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium text-center",children:v}),h.jsxs("form",{onSubmit:C,className:"space-y-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Report Type"}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("button",{type:"button",onClick:()=>r("LOST"),className:`py-3.5 px-4 rounded-2xl border font-bold text-xs flex items-center justify-center gap-2 transition ${i==="LOST"?"bg-indigo-50 border-indigo-400 text-indigo-700 shadow-sm":"bg-white border-slate-200 text-slate-600 hover:text-slate-900"}`,children:[h.jsx(g_,{className:"w-4 h-4"}),"I LOST something"]}),h.jsxs("button",{type:"button",onClick:()=>r("FOUND"),className:`py-3.5 px-4 rounded-2xl border font-bold text-xs flex items-center justify-center gap-2 transition ${i==="FOUND"?"bg-rose-50 border-rose-400 text-rose-700 shadow-sm":"bg-white border-slate-200 text-slate-600 hover:text-slate-900"}`,children:[h.jsx(Qr,{className:"w-4 h-4"}),"I FOUND something"]})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Item Name / Title *"}),h.jsx("input",{type:"text",required:!0,maxLength:100,placeholder:"e.g. Blue Jansport Backpack, Airpods Pro, Student ID",value:s,onChange:A=>a(A.target.value),className:"w-full px-4 py-3 rounded-xl glass-input text-sm"})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Category"}),h.jsx("select",{value:o,onChange:A=>l(A.target.value),className:"w-full px-3 py-3 rounded-xl glass-input text-sm cursor-pointer",children:DN.map(A=>h.jsx("option",{value:A,className:"bg-white text-slate-900",children:A},A))})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:"text-xs font-semibold text-slate-600",children:["Date ",i==="LOST"?"Lost":"Found"," *"]}),h.jsx("input",{type:"date",required:!0,value:f,onChange:A=>p(A.target.value),className:"w-full px-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Specific Location *"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(Fc,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"text",required:!0,maxLength:200,placeholder:"e.g. Library 2nd Floor, Main Cafeteria Bench",value:c,onChange:A=>d(A.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Detailed Description *"}),h.jsx("textarea",{required:!0,rows:4,maxLength:1e3,placeholder:"Describe color, brand, distinct features, tears, or specific markings...",value:g,onChange:A=>_(A.target.value),className:"w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Image URL (Optional)"}),h.jsxs("div",{className:"relative flex items-center",children:[h.jsx(rT,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"url",placeholder:"https://images.unsplash.com/photo-...",value:S,onChange:A=>m(A.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"})]})]}),h.jsx("button",{type:"submit",disabled:u,className:"w-full py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 text-sm disabled:opacity-50",children:u?h.jsxs(h.Fragment,{children:[h.jsx(kr,{className:"w-4 h-4 animate-spin"}),"Submitting Report..."]}):h.jsxs(h.Fragment,{children:[h.jsx(Oc,{className:"w-5 h-5"}),"Submit ",i," Report"]})})]})]})]})},IN=()=>{const{user:t,showToast:e}=oi(),[n,i]=j.useState([]),[r,s]=j.useState(!0),[a,o]=j.useState(null),[l,c]=j.useState(""),[d,f]=j.useState(""),[p,g]=j.useState(""),[_,S]=j.useState(null),[m,u]=j.useState(null),[x,v]=j.useState(!1),E=async()=>{s(!0);try{const D=await Ge.get("/api/reports/my-reports");D.data.success&&i(D.data.data)}catch(D){console.error("Failed to load my reports",D)}finally{s(!1)}};j.useEffect(()=>{E()},[]);const C=n.filter(D=>D.status==="ACTIVE").length,A=n.filter(D=>D.status==="RESOLVED").length,T=n.filter(D=>D.status==="REJECTED").length,N=D=>{o(D),c(D.title),f(D.description),g(D.location)},I=async D=>{var V,$;if(D.preventDefault(),!!a){v(!0);try{(await Ge.put(`/api/reports/${a._id}`,{title:l.trim(),description:d.trim(),location:p.trim()})).data.success&&(e("Report updated successfully!","success"),o(null),E())}catch(G){e((($=(V=G.response)==null?void 0:V.data)==null?void 0:$.error)||"Failed to update report","error")}finally{v(!1)}}},y=async D=>{var V,$;v(!0);try{(await Ge.patch(`/api/reports/${D}/resolve`)).data.success&&(e("Report marked as RESOLVED!","success"),S(null),E())}catch(G){e((($=(V=G.response)==null?void 0:V.data)==null?void 0:$.error)||"Failed to resolve report","error")}finally{v(!1)}},M=async D=>{var V,$;v(!0);try{(await Ge.delete(`/api/reports/${D}`)).data.success&&(e("Report deleted successfully","info"),u(null),E())}catch(G){e((($=(V=G.response)==null?void 0:V.data)==null?void 0:$.error)||"Failed to delete report","error")}finally{v(!1)}},F=D=>new Date(D).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-2 border border-indigo-200",children:[h.jsx(es,{className:"w-3.5 h-3.5"}),"User Dashboard"]}),h.jsxs("h1",{className:"text-3xl font-extrabold text-slate-900",children:["Welcome back, ",t==null?void 0:t.name]}),h.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Manage your active, resolved, and submitted lost & found reports."})]}),h.jsxs(at,{to:"/report",className:"px-5 py-3 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 transition flex items-center justify-center gap-2 text-xs",children:[h.jsx(Oc,{className:"w-4 h-4"}),"Create New Report"]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"glass-card rounded-2xl p-6 border border-slate-200 flex items-center justify-between shadow-sm",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase",children:"Active Reports"}),h.jsx("p",{className:"text-3xl font-extrabold text-emerald-600 mt-1",children:C})]}),h.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold",children:"⚡"})]}),h.jsxs("div",{className:"glass-card rounded-2xl p-6 border border-slate-200 flex items-center justify-between shadow-sm",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase",children:"Resolved Items"}),h.jsx("p",{className:"text-3xl font-extrabold text-indigo-600 mt-1",children:A})]}),h.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold",children:"✓"})]}),h.jsxs("div",{className:"glass-card rounded-2xl p-6 border border-slate-200 flex items-center justify-between shadow-sm",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase",children:"Rejected / Removed"}),h.jsx("p",{className:"text-3xl font-extrabold text-rose-600 mt-1",children:T})]}),h.jsx("div",{className:"w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold",children:"✕"})]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("h2",{className:"text-xl font-bold text-slate-900",children:["My Submitted Reports (",n.length,")"]}),r?h.jsx("div",{className:"space-y-4",children:[1,2,3].map(D=>h.jsx("div",{className:"h-24 rounded-2xl bg-slate-200 animate-pulse"},D))}):n.length>0?h.jsx("div",{className:"space-y-4",children:n.map(D=>h.jsxs("div",{className:"glass-card rounded-2xl p-5 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-300 transition shadow-sm",children:[h.jsxs("div",{className:"space-y-2 max-w-xl",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Vc,{type:D.type}),h.jsx(Hc,{status:D.status}),D.category&&h.jsx("span",{className:"text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded",children:D.category})]}),h.jsx("h3",{className:"text-base font-bold text-slate-900",children:D.title}),h.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs text-slate-500",children:[h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(Fc,{className:"w-3.5 h-3.5 text-indigo-500"})," ",D.location]}),h.jsxs("span",{className:"flex items-center gap-1",children:[h.jsx(tp,{className:"w-3.5 h-3.5 text-rose-500"})," ",F(D.date)]})]})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100",children:[h.jsxs(at,{to:`/reports/${D._id}`,className:"p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-indigo-600 text-xs font-bold flex items-center gap-1",title:"View Details",children:[h.jsx(np,{className:"w-4 h-4"}),"View"]}),D.status==="ACTIVE"&&h.jsxs(h.Fragment,{children:[h.jsxs("button",{onClick:()=>N(D),className:"p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 text-xs font-bold flex items-center gap-1",children:[h.jsx(uT,{className:"w-4 h-4"}),"Edit"]}),h.jsxs("button",{onClick:()=>S(D._id),className:"p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1",children:[h.jsx(Qr,{className:"w-4 h-4"}),"Resolve"]}),h.jsxs("button",{onClick:()=>u(D._id),className:"p-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 text-xs font-bold flex items-center gap-1",children:[h.jsx(x_,{className:"w-4 h-4"}),"Delete"]})]})]})]},D._id))}):h.jsxs("div",{className:"glass-card rounded-3xl p-12 text-center text-slate-500 space-y-3",children:[h.jsx("p",{className:"font-bold text-slate-900",children:"No reports submitted yet"}),h.jsx("p",{className:"text-xs",children:"Have you lost or found something on campus?"}),h.jsx(at,{to:"/report",className:"inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold",children:"Submit Your First Report"})]})]}),h.jsx(sr,{isOpen:!!a,onClose:()=>o(null),title:"Edit Active Report",children:h.jsxs("form",{onSubmit:I,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Item Title"}),h.jsx("input",{type:"text",required:!0,value:l,onChange:D=>c(D.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Location"}),h.jsx("input",{type:"text",required:!0,value:p,onChange:D=>g(D.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Description"}),h.jsx("textarea",{required:!0,rows:3,value:d,onChange:D=>f(D.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"})]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{type:"button",onClick:()=>o(null),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsxs("button",{type:"submit",disabled:x,className:"px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1",children:[x&&h.jsx(kr,{className:"w-3.5 h-3.5 animate-spin"}),"Save Changes"]})]})]})}),h.jsx(sr,{isOpen:!!_,onClose:()=>S(null),title:"Resolve Report",children:h.jsxs("div",{className:"space-y-4 text-sm text-slate-600",children:[h.jsxs("p",{children:["Mark this report as ",h.jsx("strong",{className:"text-emerald-600",children:"RESOLVED"}),"? This confirms the item has been recovered or returned."]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{onClick:()=>S(null),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsx("button",{onClick:()=>y(_),disabled:x,className:"px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold",children:"Confirm Resolve"})]})]})}),h.jsx(sr,{isOpen:!!m,onClose:()=>u(null),title:"Delete Report",children:h.jsxs("div",{className:"space-y-4 text-sm text-slate-600",children:[h.jsx("p",{children:"Are you sure you want to delete this report? This action cannot be undone."}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{onClick:()=>u(null),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsx("button",{onClick:()=>M(m),disabled:x,className:"px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold",children:"Confirm Delete"})]})]})})]})},ON=()=>{const{user:t,showToast:e}=oi(),n=ai(),[i,r]=j.useState(null),[s,a]=j.useState([]),[o,l]=j.useState(!0),[c,d]=j.useState(""),[f,p]=j.useState(""),[g,_]=j.useState(""),[S,m]=j.useState(1),[u,x]=j.useState(1),[v,E]=j.useState(null),[C,A]=j.useState("ACTIVE"),[T,N]=j.useState(""),[I,y]=j.useState(!1),[M,F]=j.useState(null),[D,V]=j.useState("");j.useEffect(()=>{t&&t.role!=="ADMIN"&&(e("Access denied. Administrator privileges required.","error"),n("/dashboard"))},[t,n]);const $=async()=>{var Y,oe;l(!0);try{const Te=await Ge.get("/api/admin/stats");Te.data.success&&r(Te.data.data);const X=new URLSearchParams;X.append("page",S),X.append("limit",10),c.trim()&&X.append("search",c.trim()),f&&X.append("status",f),g&&X.append("type",g);const ne=await Ge.get(`/api/admin/reports?${X.toString()}`);ne.data.success&&(a(ne.data.data),x(ne.data.totalPages||1))}catch(Te){console.error("Failed to load admin dashboard data",Te),e(((oe=(Y=Te.response)==null?void 0:Y.data)==null?void 0:oe.error)||"Failed to load admin data","error")}finally{l(!1)}};j.useEffect(()=>{t&&t.role==="ADMIN"&&$()},[t,S,f,g]);const G=Y=>{Y.preventDefault(),m(1),$()},ee=Y=>{E(Y),A(Y.status),N(Y.adminNotes||"")},U=async Y=>{var oe,Te;if(Y.preventDefault(),!!v){y(!0);try{(await Ge.put(`/api/admin/reports/${v._id}/status`,{status:C,adminNotes:T.trim()})).data.success&&(e(`Report status updated to ${C}`,"success"),E(null),$())}catch(X){e(((Te=(oe=X.response)==null?void 0:oe.data)==null?void 0:Te.error)||"Failed to update report status","error")}finally{y(!1)}}},Z=async Y=>{var oe,Te;if(Y.preventDefault(),!!M){y(!0);try{(await Ge.delete(`/api/admin/reports/${M._id}`,{data:{adminNotes:D.trim()||"Rejected by admin moderation"}})).data.success&&(e("Report rejected by admin moderation","info"),F(null),$())}catch(X){e(((Te=(oe=X.response)==null?void 0:oe.data)==null?void 0:Te.error)||"Failed to reject report","error")}finally{y(!1)}}},J=Y=>new Date(Y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10",children:[h.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6",children:h.jsxs("div",{children:[h.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold mb-2 border border-rose-200",children:[h.jsx(sp,{className:"w-3.5 h-3.5"}),"Admin Moderation Panel"]}),h.jsx("h1",{className:"text-3xl font-extrabold text-slate-900",children:"Campus Overview & Moderation"}),h.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Review all campus reports, manage statuses, and maintain community safety."})]})}),i&&h.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",children:[h.jsxs("div",{className:"glass-card rounded-2xl p-5 border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between text-slate-500 text-xs font-semibold uppercase",children:[h.jsx("span",{children:"Total Reports"}),h.jsx(nT,{className:"w-4 h-4 text-indigo-600"})]}),h.jsx("p",{className:"text-3xl font-extrabold text-slate-900 mt-2",children:i.totalReports}),h.jsxs("p",{className:"text-[11px] text-slate-500 mt-1",children:[i.lostItems," Lost / ",i.foundItems," Found"]})]}),h.jsxs("div",{className:"glass-card rounded-2xl p-5 border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between text-slate-500 text-xs font-semibold uppercase",children:[h.jsx("span",{children:"Active Reports"}),h.jsx(es,{className:"w-4 h-4 text-emerald-600"})]}),h.jsx("p",{className:"text-3xl font-extrabold text-emerald-600 mt-2",children:i.activeReports}),h.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Currently visible to public"})]}),h.jsxs("div",{className:"glass-card rounded-2xl p-5 border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between text-slate-500 text-xs font-semibold uppercase",children:[h.jsx("span",{children:"Resolved Items"}),h.jsx(Qr,{className:"w-4 h-4 text-indigo-600"})]}),h.jsx("p",{className:"text-3xl font-extrabold text-indigo-600 mt-2",children:i.resolvedReports}),h.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Returned to owners"})]}),h.jsxs("div",{className:"glass-card rounded-2xl p-5 border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between text-slate-500 text-xs font-semibold uppercase",children:[h.jsx("span",{children:"Rejected / Removed"}),h.jsx(cT,{className:"w-4 h-4 text-rose-600"})]}),h.jsx("p",{className:"text-3xl font-extrabold text-rose-600 mt-2",children:i.rejectedReports}),h.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Inappropriate or duplicates"})]})]}),h.jsx("div",{className:"glass-card rounded-2xl p-4 sm:p-6 space-y-4 border border-slate-200 shadow-sm",children:h.jsxs("form",{onSubmit:G,className:"grid grid-cols-1 md:grid-cols-12 gap-4",children:[h.jsxs("div",{className:"md:col-span-6 relative flex items-center",children:[h.jsx(rp,{className:"absolute left-3.5 w-4 h-4 text-slate-400"}),h.jsx("input",{type:"text",placeholder:"Search reports by title, description, or location...",value:c,onChange:Y=>d(Y.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm"})]}),h.jsx("div",{className:"md:col-span-3",children:h.jsxs("select",{value:f,onChange:Y=>{p(Y.target.value),m(1)},className:"w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer",children:[h.jsx("option",{value:"",className:"bg-white text-slate-900",children:"Filter Status: All"}),h.jsx("option",{value:"ACTIVE",className:"bg-white text-slate-900",children:"ACTIVE"}),h.jsx("option",{value:"RESOLVED",className:"bg-white text-slate-900",children:"RESOLVED"}),h.jsx("option",{value:"REJECTED",className:"bg-white text-slate-900",children:"REJECTED"})]})}),h.jsx("div",{className:"md:col-span-3",children:h.jsxs("select",{value:g,onChange:Y=>{_(Y.target.value),m(1)},className:"w-full py-2.5 px-3 rounded-xl glass-input text-sm cursor-pointer",children:[h.jsx("option",{value:"",className:"bg-white text-slate-900",children:"Filter Type: All"}),h.jsx("option",{value:"LOST",className:"bg-white text-slate-900",children:"LOST"}),h.jsx("option",{value:"FOUND",className:"bg-white text-slate-900",children:"FOUND"})]})})]})}),h.jsxs("div",{className:"glass-card rounded-3xl overflow-hidden border border-slate-200 shadow-sm",children:[h.jsxs("div",{className:"p-6 border-b border-slate-100 flex items-center justify-between",children:[h.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"All Campus Reports (Admin View)"}),h.jsx("span",{className:"text-xs text-slate-500",children:"Including REJECTED reports"})]}),o?h.jsxs("div",{className:"p-12 text-center text-slate-500",children:[h.jsx(kr,{className:"w-8 h-8 animate-spin mx-auto mb-2 text-indigo-600"}),"Loading moderation table..."]}):s.length>0?h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-sm text-slate-600",children:[h.jsx("thead",{className:"bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-200",children:h.jsxs("tr",{children:[h.jsx("th",{className:"py-4 px-6",children:"Report Item"}),h.jsx("th",{className:"py-4 px-6",children:"Type"}),h.jsx("th",{className:"py-4 px-6",children:"Status"}),h.jsx("th",{className:"py-4 px-6",children:"Reported By"}),h.jsx("th",{className:"py-4 px-6",children:"Date"}),h.jsx("th",{className:"py-4 px-6 text-right",children:"Admin Actions"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-100",children:s.map(Y=>{var oe,Te;return h.jsxs("tr",{className:"hover:bg-slate-50 transition",children:[h.jsxs("td",{className:"py-4 px-6",children:[h.jsx("p",{className:"font-bold text-slate-900 max-w-xs truncate",children:Y.title}),h.jsx("p",{className:"text-xs text-slate-500 truncate max-w-xs",children:Y.location})]}),h.jsx("td",{className:"py-4 px-6",children:h.jsx(Vc,{type:Y.type})}),h.jsx("td",{className:"py-4 px-6",children:h.jsx(Hc,{status:Y.status})}),h.jsxs("td",{className:"py-4 px-6 text-xs",children:[h.jsx("p",{className:"font-semibold text-slate-900",children:((oe=Y.reportedBy)==null?void 0:oe.name)||"Unknown"}),h.jsx("p",{className:"text-[11px] text-slate-500",children:(Te=Y.reportedBy)==null?void 0:Te.email})]}),h.jsx("td",{className:"py-4 px-6 text-xs",children:J(Y.date)}),h.jsx("td",{className:"py-4 px-6 text-right",children:h.jsxs("div",{className:"flex items-center justify-end gap-2",children:[h.jsx("button",{onClick:()=>ee(Y),className:"px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 text-xs font-bold",children:"Change Status"}),Y.status!=="REJECTED"&&h.jsx("button",{onClick:()=>{F(Y),V("")},className:"px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 text-xs font-bold",children:"Reject"})]})})]},Y._id)})})]})}):h.jsx("div",{className:"p-12 text-center text-slate-500",children:"No reports matching filter criteria."})]}),h.jsx(sr,{isOpen:!!v,onClose:()=>E(null),title:"Admin Status Management",children:v&&h.jsxs("form",{onSubmit:U,className:"space-y-4",children:[h.jsx("div",{children:h.jsxs("p",{className:"text-xs text-slate-500",children:["Report Title: ",h.jsx("strong",{className:"text-slate-900",children:v.title})]})}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Select New Status"}),h.jsxs("select",{value:C,onChange:Y=>A(Y.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1 cursor-pointer",children:[h.jsx("option",{value:"ACTIVE",className:"bg-white text-slate-900",children:"ACTIVE"}),h.jsx("option",{value:"RESOLVED",className:"bg-white text-slate-900",children:"RESOLVED"}),h.jsx("option",{value:"REJECTED",className:"bg-white text-slate-900",children:"REJECTED"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Admin Moderation Notes (Optional)"}),h.jsx("textarea",{rows:3,placeholder:"Reason for status change or moderation notes...",value:T,onChange:Y=>N(Y.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"})]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{type:"button",onClick:()=>E(null),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsxs("button",{type:"submit",disabled:I,className:"px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-1",children:[I&&h.jsx(kr,{className:"w-3.5 h-3.5 animate-spin"}),"Update Status"]})]})]})}),h.jsx(sr,{isOpen:!!M,onClose:()=>F(null),title:"Reject Inappropriate Report",children:M&&h.jsxs("form",{onSubmit:Z,className:"space-y-4",children:[h.jsxs("div",{className:"p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs",children:["Rejecting this report will set its status to ",h.jsx("strong",{className:"underline",children:"REJECTED"})," and hide it from regular student browse lists."]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Reason for Rejection *"}),h.jsx("textarea",{required:!0,rows:3,placeholder:"e.g. Duplicate report, inappropriate content, spam...",value:D,onChange:Y=>V(Y.target.value),className:"w-full px-3 py-2.5 rounded-xl glass-input text-sm mt-1"})]}),h.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[h.jsx("button",{type:"button",onClick:()=>F(null),className:"px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold",children:"Cancel"}),h.jsxs("button",{type:"submit",disabled:I,className:"px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold flex items-center gap-1",children:[I&&h.jsx(kr,{className:"w-3.5 h-3.5 animate-spin"}),"Confirm Rejection"]})]})]})})]})},d0=({children:t})=>{const{user:e,loading:n}=oi();return n?h.jsx("div",{className:"min-h-screen bg-[#F8FAFC]"}):e?t:h.jsx(qh,{to:"/login",replace:!0})},FN=({children:t})=>{const{user:e,loading:n}=oi();return n?h.jsx("div",{className:"min-h-screen bg-[#F8FAFC]"}):!e||e.role!=="ADMIN"?h.jsx(qh,{to:"/dashboard",replace:!0}):t},kN=()=>h.jsxs("div",{className:"flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]",children:[h.jsx(pT,{}),h.jsx("main",{className:"flex-1",children:h.jsxs(w1,{children:[h.jsx(Jn,{path:"/",element:h.jsx(AN,{})}),h.jsx(Jn,{path:"/login",element:h.jsx(RN,{})}),h.jsx(Jn,{path:"/register",element:h.jsx(CN,{})}),h.jsx(Jn,{path:"/browse",element:h.jsx(PN,{})}),h.jsx(Jn,{path:"/reports/:id",element:h.jsx(LN,{})}),h.jsx(Jn,{path:"/report",element:h.jsx(d0,{children:h.jsx(UN,{})})}),h.jsx(Jn,{path:"/dashboard",element:h.jsx(d0,{children:h.jsx(IN,{})})}),h.jsx(Jn,{path:"/admin",element:h.jsx(FN,{children:h.jsx(ON,{})})}),h.jsx(Jn,{path:"*",element:h.jsx(qh,{to:"/",replace:!0})})]})}),h.jsx(mT,{}),h.jsx(gT,{})]});function BN(){return h.jsx(L1,{children:h.jsx(Xw,{children:h.jsx(kN,{})})})}od.createRoot(document.getElementById("root")).render(h.jsx(E0.StrictMode,{children:h.jsx(BN,{})}));
