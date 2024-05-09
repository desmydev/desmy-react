(function(w,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],m):(w=typeof globalThis<"u"?globalThis:w||self,m(w["react-jp-ui"]={},w.React))})(this,function(w,m){"use strict";var bt=Object.defineProperty;var xt=(w,m,j)=>m in w?bt(w,m,{enumerable:!0,configurable:!0,writable:!0,value:j}):w[m]=j;var Y=(w,m,j)=>(xt(w,typeof m!="symbol"?m+"":m,j),j);var j={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function ke(){if(ae)return $;ae=1;var _=m,r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,f=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function x(C,g,O){var y,D={},P=null,B=null;O!==void 0&&(P=""+O),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(B=g.ref);for(y in g)i.call(g,y)&&!u.hasOwnProperty(y)&&(D[y]=g[y]);if(C&&C.defaultProps)for(y in g=C.defaultProps,g)D[y]===void 0&&(D[y]=g[y]);return{$$typeof:r,type:C,key:P,ref:B,props:D,_owner:f.current}}return $.Fragment=a,$.jsx=x,$.jsxs=x,$}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Ne(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var _=m,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),C=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),se=Symbol.iterator,Fe="@@iterator";function $e(e){if(e===null||typeof e!="object")return null;var t=se&&e[se]||e[Fe];return typeof t=="function"?t:null}var A=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];Ie("error",e,n)}}function Ie(e,t,n){{var o=A.ReactDebugCurrentFrame,c=o.getStackAddendum();c!==""&&(t+="%s",n=n.concat([c]));var d=n.map(function(l){return String(l)});d.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,d)}}var Le=!1,We=!1,Ue=!1,Ye=!1,Be=!1,le;le=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===i||e===u||Be||e===f||e===O||e===y||Ye||e===B||Le||We||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===D||e.$$typeof===x||e.$$typeof===C||e.$$typeof===g||e.$$typeof===le||e.getModuleId!==void 0))}function ze(e,t,n){var o=e.displayName;if(o)return o;var c=t.displayName||t.name||"";return c!==""?n+"("+c+")":n}function ue(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case i:return"Fragment";case a:return"Portal";case u:return"Profiler";case f:return"StrictMode";case O:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:var t=e;return ue(t)+".Consumer";case x:var n=e;return ue(n._context)+".Provider";case g:return ze(e,e.render,"ForwardRef");case D:var o=e.displayName||null;return o!==null?o:S(e.type)||"Memo";case P:{var c=e,d=c._payload,l=c._init;try{return S(l(d))}catch{return null}}}return null}var k=Object.assign,L=0,ce,fe,de,pe,he,ve,me;function ge(){}ge.__reactDisabledLog=!0;function Je(){{if(L===0){ce=console.log,fe=console.info,de=console.warn,pe=console.error,he=console.group,ve=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function Ge(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:ce}),info:k({},e,{value:fe}),warn:k({},e,{value:de}),error:k({},e,{value:pe}),group:k({},e,{value:he}),groupCollapsed:k({},e,{value:ve}),groupEnd:k({},e,{value:me})})}L<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=A.ReactCurrentDispatcher,X;function V(e,t,n){{if(X===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);X=o&&o[1]||""}return`
`+X+e}}var H=!1,z;{var Ke=typeof WeakMap=="function"?WeakMap:Map;z=new Ke}function ye(e,t){if(!e||H)return"";{var n=z.get(e);if(n!==void 0)return n}var o;H=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=q.current,q.current=null,Je();try{if(t){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(R){o=R}Reflect.construct(e,[],l)}else{try{l.call()}catch(R){o=R}e.call(l.prototype)}}else{try{throw Error()}catch(R){o=R}e()}}catch(R){if(R&&o&&typeof R.stack=="string"){for(var s=R.stack.split(`
`),E=o.stack.split(`
`),h=s.length-1,v=E.length-1;h>=1&&v>=0&&s[h]!==E[v];)v--;for(;h>=1&&v>=0;h--,v--)if(s[h]!==E[v]){if(h!==1||v!==1)do if(h--,v--,v<0||s[h]!==E[v]){var T=`
`+s[h].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&z.set(e,T),T}while(h>=1&&v>=0);break}}}finally{H=!1,q.current=d,Ge(),Error.prepareStackTrace=c}var F=e?e.displayName||e.name:"",N=F?V(F):"";return typeof e=="function"&&z.set(e,N),N}function qe(e,t,n){return ye(e,!1)}function Xe(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function J(e,t,n){if(e==null)return"";if(typeof e=="function")return ye(e,Xe(e));if(typeof e=="string")return V(e);switch(e){case O:return V("Suspense");case y:return V("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case g:return qe(e.render);case D:return J(e.type,t,n);case P:{var o=e,c=o._payload,d=o._init;try{return J(d(c),t,n)}catch{}}}return""}var W=Object.prototype.hasOwnProperty,be={},xe=A.ReactDebugCurrentFrame;function G(e){if(e){var t=e._owner,n=J(e.type,e._source,t?t.type:null);xe.setExtraStackFrame(n)}else xe.setExtraStackFrame(null)}function He(e,t,n,o,c){{var d=Function.call.bind(W);for(var l in e)if(d(e,l)){var s=void 0;try{if(typeof e[l]!="function"){var E=Error((o||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}s=e[l](t,l,o,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){s=h}s&&!(s instanceof Error)&&(G(c),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",n,l,typeof s),G(null)),s instanceof Error&&!(s.message in be)&&(be[s.message]=!0,G(c),b("Failed %s type: %s",n,s.message),G(null))}}}var Ze=Array.isArray;function Z(e){return Ze(e)}function Qe(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function et(e){try{return Ee(e),!1}catch{return!0}}function Ee(e){return""+e}function Re(e){if(et(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Qe(e)),Ee(e)}var U=A.ReactCurrentOwner,tt={key:!0,ref:!0,__self:!0,__source:!0},we,_e,Q;Q={};function rt(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function nt(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function at(e,t){if(typeof e.ref=="string"&&U.current&&t&&U.current.stateNode!==t){var n=S(U.current.type);Q[n]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S(U.current.type),e.ref),Q[n]=!0)}}function ot(e,t){{var n=function(){we||(we=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function it(e,t){{var n=function(){_e||(_e=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var st=function(e,t,n,o,c,d,l){var s={$$typeof:r,type:e,key:t,ref:n,props:l,_owner:d};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function lt(e,t,n,o,c){{var d,l={},s=null,E=null;n!==void 0&&(Re(n),s=""+n),nt(t)&&(Re(t.key),s=""+t.key),rt(t)&&(E=t.ref,at(t,c));for(d in t)W.call(t,d)&&!tt.hasOwnProperty(d)&&(l[d]=t[d]);if(e&&e.defaultProps){var h=e.defaultProps;for(d in h)l[d]===void 0&&(l[d]=h[d])}if(s||E){var v=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&ot(l,v),E&&it(l,v)}return st(e,s,E,c,o,U.current,l)}}var ee=A.ReactCurrentOwner,Te=A.ReactDebugCurrentFrame;function M(e){if(e){var t=e._owner,n=J(e.type,e._source,t?t.type:null);Te.setExtraStackFrame(n)}else Te.setExtraStackFrame(null)}var te;te=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===r}function Ce(){{if(ee.current){var e=S(ee.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ut(e){return""}var Se={};function ct(e){{var t=Ce();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function je(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=ct(t);if(Se[n])return;Se[n]=!0;var o="";e&&e._owner&&e._owner!==ee.current&&(o=" It was passed a child from "+S(e._owner.type)+"."),M(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,o),M(null)}}function De(e,t){{if(typeof e!="object")return;if(Z(e))for(var n=0;n<e.length;n++){var o=e[n];re(o)&&je(o,t)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var c=$e(e);if(typeof c=="function"&&c!==e.entries)for(var d=c.call(e),l;!(l=d.next()).done;)re(l.value)&&je(l.value,t)}}}function ft(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===g||t.$$typeof===D))n=t.propTypes;else return;if(n){var o=S(t);He(n,e.props,"prop",o,e)}else if(t.PropTypes!==void 0&&!te){te=!0;var c=S(t);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dt(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var o=t[n];if(o!=="children"&&o!=="key"){M(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),M(null);break}}e.ref!==null&&(M(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}var Oe={};function Pe(e,t,n,o,c,d){{var l=Ve(e);if(!l){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=ut();E?s+=E:s+=Ce();var h;e===null?h="null":Z(e)?h="array":e!==void 0&&e.$$typeof===r?(h="<"+(S(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,s)}var v=lt(e,t,n,c,d);if(v==null)return v;if(l){var T=t.children;if(T!==void 0)if(o)if(Z(T)){for(var F=0;F<T.length;F++)De(T[F],e);Object.freeze&&Object.freeze(T)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else De(T,e)}if(W.call(t,"key")){var N=S(e),R=Object.keys(t).filter(function(yt){return yt!=="key"}),ne=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!Oe[N+ne]){var gt=R.length>0?"{"+R.join(": ..., ")+": ...}":"{}";b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ne,N,gt,N),Oe[N+ne]=!0}}return e===i?dt(v):ft(v),v}}function pt(e,t,n){return Pe(e,t,n,!0)}function ht(e,t,n){return Pe(e,t,n,!1)}var vt=ht,mt=pt;I.Fragment=i,I.jsx=vt,I.jsxs=mt}()),I}process.env.NODE_ENV==="production"?j.exports=ke():j.exports=Ne();var p=j.exports,ie=(_=>(_.LOADING="LOADING",_.ERROR="ERROR",_.LOADED="LOADED",_.WAITING="WAITING",_.NOTICE="NOTICE",_))(ie||{});class Ae{constructor(){Y(this,"generateKey",()=>Math.floor(Math.random()*100)+1)}getFileSize(r){let a=r.size;const i=["Bytes","KB","MB","GB"];let f=0;for(;a>900;)a/=1024,f++;return`${Math.round(a*100)/100} ${i[f]}`}getExtension(r){return r.split(".").pop()}getFileName(r){return r.split("/").pop()}isValidHttpUrl(r){let a;try{a=new URL(r)}catch{return!1}return/https?/.test(a.protocol)}makeUniqueid(r=10){let a="";const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=i.length;for(let u=0;u<r;u++)a+=i.charAt(Math.floor(Math.random()*f));return a}nameToText(r){return r.split("_").join(" ")}getRandomColor(){const r="0123456789ABCDEF";let a="#";for(let i=0;i<6;i++)a+=r[Math.floor(Math.random()*16)];return a}concat(r,a){return`${r} ${a}`}isEmptyOrNull(r){return r===""||r==null||r==null}toStringDefault(r,a=""){return this.isEmptyOrNull(r)?a.toString():r}toString(r){return r+""}isEmpty(r){return r===""||r===void 0||r===null}validatePasswords(r,a){return r!==""&&r===a}validatePassword(r){const a=/[A-Z]/.test(r),i=/[a-z]/.test(r),f=/\d/.test(r),u=/[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(r),x=r.length>=8;return{hasUppercase:a,hasLowercase:i,hasNumber:f,hasSpecialCharacter:u,has8Characters:x,allValidationsPassed:a&&i&&f&&u&&x}}isNotEmpty(r){return r!==""}convertUnderscoreToSpaceString(r){return r.replace(/_/g," ")}async imageSize(r){return new Promise((a,i)=>{try{const f=new FileReader;f.onload=()=>{const u=new Image;u.onload=()=>{a({width:u.width,height:u.height})},u.src=f.result},f.onerror=u=>{i(u)},f.readAsDataURL(r)}catch(f){i(f)}})}capitalizeEachWord(r){return r.toLowerCase().split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}formatDateString(r){const a=r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);if(!a)throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");const[,i,f,u]=a;return`${u}-${f}-${i}`}validateEmail(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}convertNumber(r){return Math.abs(r)>=1e6?(r/1e6).toString().substring(0,4)+"M":Math.abs(r)>=1e3?(r/1e3).toString().substring(0,4)+"k":r.toString()}daysLeft(r){const a=new Date(r),i=new Date,f=a.getTime()-i.getTime();return Math.ceil(f/(1e3*3600*24))}formatDateToCustomFormat(r){const i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r.getDay()],f=r.getDate(),x=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],C=r.getFullYear();function g(y){if(y>=11&&y<=13)return"th";switch(y%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}const O=g(f);return`${i}, ${f}${O} ${x}, ${C}`}getTimeAgoAndCustomDate(r){const a=new Date,i=new Date(r),f=a.getTime()-i.getTime();if(a<i)return"Future date";const u=Math.floor(f/1e3);return u<60?`${u} seconds ago`:u<3600?`${Math.floor(u/60)} minutes ago`:u<86400?`${Math.floor(u/3600)} hours ago`:u<2592e3?`${Math.floor(u/86400)} days ago`:i.toLocaleString("en-US",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"})}roundTo2dp(r){const a=parseFloat(r);return isNaN(a)?r:(Math.round(a*100)/100).toFixed(2)}}const K=new Ae;class Et extends m.Component{constructor(a){super(a);Y(this,"handleValueChange",a=>{try{const{data:i}=this.state;i.start_date=a.startDate,i.end_date=a.endDate,this.setState({data:i,value:a})}catch{}});Y(this,"handleClose",a=>{try{this.props.settings.loading&&a&&this.setState({isLoading:!0,loadinghint:this.props.settings.loadinghint});const i={...this.state.data,status:a};this.props.settings.datalist!==void 0&&(i.option_data=this.state.data_value),K.isEmptyOrNull(this.state.input.user_input)||(i.user_input=this.state.input.user_input),this.props.onClose(i)}catch{}});this.state={isLoading:!1,loadinghint:"",data:{},value:{startDate:null,endDate:null},date:{show:!1,minDate:null,title:"",value:{startDate:null}},time:{show:!1,value:"",title:""},input:{user_input:""},data_value:"",datalist:{title:"",defaultvalue:"",onchange:"",data:[]}}}render(){const{settings:a}=this.props;return p.jsx("div",{className:"inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6",children:this.state.isLoading?p.jsxs("div",{className:"flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center",children:[p.jsx("svg",{version:"1.1",id:"L9",className:"w-24 h-24 ",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",children:p.jsx("path",{fill:"currentColor",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:p.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})}),p.jsx("div",{className:"text-sm w-full text-black dark:text-white text-center justify-center",children:this.state.loadinghint})]}):p.jsxs("div",{className:"flex flex-col w-full",children:[p.jsxs("div",{className:"relative sm:flex sm:items-start items-center",children:[p.jsx("div",{className:"flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center",children:p.jsx("div",{className:"flex flex-col w-full my-5",children:p.jsx("div",{className:"flex w-full",children:this.props.children})})}),this.props.settings.handleOnClose!==void 0?p.jsx("div",{className:"absolute right-0 -top-2 cursor-pointer",onClick:()=>this.handleClose(!1),children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:p.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",clipRule:"evenodd"})})}):null]}),p.jsxs("div",{className:"mt-4  sm:flex sm:flex-row-reverse",children:[a.btnPosition!=null&&a.btnPosition!==void 0&&!K.isEmptyOrNull(a.btnPosition)?p.jsx("span",{className:"flex w-full rounded-md sm:ml-3 sm:w-auto",children:p.jsx("button",{type:"button",onClick:()=>this.handleClose(!0),className:" uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",children:a.btnPosition})}):null,a.btnNegative!=null&&a.btnNegative!==void 0&&!K.isEmptyOrNull(a.btnNegative)?p.jsx("span",{className:"mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto",children:p.jsx("button",{type:"button",onClick:()=>this.handleClose(!1),className:"uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",children:a.btnNegative})}):null]})]})})}}class Me extends m.Component{constructor(a){super(a);Y(this,"modalContainer");this.state={loaded:!1,settings:{title:"",hint:"",btnPosition:"",btnNegative:"",type:ie.ERROR,loading:!1,forceLoading:!1,loadinghint:"",inputFieldLabel:"",showDateRange:!1,date:{show:!1,minDate:null,title:"",value:{startDate:new Date}},time:{show:!1,value:"",title:""},showDateRangeTitle:"",datalist:{title:"",data:[]}}},this.modalContainer=m.createRef()}componentDidMount(){}componentWillUnmount(){document.body.removeChild(this.modalContainer.current)}render(){const{children:a}=this.props;return p.jsx("div",{className:"modal-wrapper",children:p.jsx("div",{className:"modal-body",children:a})})}}w.DesmyModalHandler=Me,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
