var kn = Object.defineProperty;
var On = (t, s, e) => s in t ? kn(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var p = (t, s, e) => On(t, typeof s != "symbol" ? s + "" : s, e);
import * as D from "react";
import X, { useRef as lt, useEffect as br, cloneElement as _n, Component as F, lazy as Tn, Suspense as An, useState as Ln } from "react";
import Jr from "react-dom";
var wt = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function Pn() {
  if (Er) return ye;
  Er = 1;
  var t = X, s = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, u, h) {
    var d, f = {}, y = null, x = null;
    h !== void 0 && (y = "" + h), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (d in u) r.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (l && l.defaultProps) for (d in u = l.defaultProps, u) f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: s, type: l, key: y, ref: x, props: f, _owner: n.current };
  }
  return ye.Fragment = e, ye.jsx = o, ye.jsxs = o, ye;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Dn() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = X, s = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = Symbol.iterator, b = "@@iterator";
    function O(c) {
      if (c === null || typeof c != "object")
        return null;
      var v = g && c[g] || c[b];
      return typeof v == "function" ? v : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(c) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), N = 1; N < v; N++)
          E[N - 1] = arguments[N];
        _("error", c, E);
      }
    }
    function _(c, v, E) {
      {
        var N = T.ReactDebugCurrentFrame, A = N.getStackAddendum();
        A !== "" && (v += "%s", E = E.concat([A]));
        var L = E.map(function(k) {
          return String(k);
        });
        L.unshift("Warning: " + v), Function.prototype.apply.call(console[c], console, L);
      }
    }
    var Z = !1, le = !1, J = !1, ee = !1, Te = !1, Xt;
    Xt = Symbol.for("react.module.reference");
    function Zs(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === i || Te || c === n || c === h || c === d || ee || c === x || Z || le || J || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === f || c.$$typeof === o || c.$$typeof === l || c.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Xt || c.getModuleId !== void 0));
    }
    function Qs(c, v, E) {
      var N = c.displayName;
      if (N)
        return N;
      var A = v.displayName || v.name || "";
      return A !== "" ? E + "(" + A + ")" : E;
    }
    function Zt(c) {
      return c.displayName || "Context";
    }
    function K(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var v = c;
            return Zt(v) + ".Consumer";
          case o:
            var E = c;
            return Zt(E._context) + ".Provider";
          case u:
            return Qs(c, c.render, "ForwardRef");
          case f:
            var N = c.displayName || null;
            return N !== null ? N : K(c.type) || "Memo";
          case y: {
            var A = c, L = A._payload, k = A._init;
            try {
              return K(k(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, xe = 0, Qt, er, tr, rr, sr, nr, ir;
    function ar() {
    }
    ar.__reactDisabledLog = !0;
    function en() {
      {
        if (xe === 0) {
          Qt = console.log, er = console.info, tr = console.warn, rr = console.error, sr = console.group, nr = console.groupCollapsed, ir = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: ar,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        xe++;
      }
    }
    function tn() {
      {
        if (xe--, xe === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, c, {
              value: Qt
            }),
            info: se({}, c, {
              value: er
            }),
            warn: se({}, c, {
              value: tr
            }),
            error: se({}, c, {
              value: rr
            }),
            group: se({}, c, {
              value: sr
            }),
            groupCollapsed: se({}, c, {
              value: nr
            }),
            groupEnd: se({}, c, {
              value: ir
            })
          });
        }
        xe < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qe = T.ReactCurrentDispatcher, et;
    function Ae(c, v, E) {
      {
        if (et === void 0)
          try {
            throw Error();
          } catch (A) {
            var N = A.stack.trim().match(/\n( *(at )?)/);
            et = N && N[1] || "";
          }
        return `
` + et + c;
      }
    }
    var tt = !1, Le;
    {
      var rn = typeof WeakMap == "function" ? WeakMap : Map;
      Le = new rn();
    }
    function or(c, v) {
      if (!c || tt)
        return "";
      {
        var E = Le.get(c);
        if (E !== void 0)
          return E;
      }
      var N;
      tt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = Qe.current, Qe.current = null, en();
      try {
        if (v) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (U) {
              N = U;
            }
            Reflect.construct(c, [], k);
          } else {
            try {
              k.call();
            } catch (U) {
              N = U;
            }
            c.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            N = U;
          }
          c();
        }
      } catch (U) {
        if (U && N && typeof U.stack == "string") {
          for (var R = U.stack.split(`
`), B = N.stack.split(`
`), M = R.length - 1, I = B.length - 1; M >= 1 && I >= 0 && R[M] !== B[I]; )
            I--;
          for (; M >= 1 && I >= 0; M--, I--)
            if (R[M] !== B[I]) {
              if (M !== 1 || I !== 1)
                do
                  if (M--, I--, I < 0 || R[M] !== B[I]) {
                    var V = `
` + R[M].replace(" at new ", " at ");
                    return c.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", c.displayName)), typeof c == "function" && Le.set(c, V), V;
                  }
                while (M >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        tt = !1, Qe.current = L, tn(), Error.prepareStackTrace = A;
      }
      var de = c ? c.displayName || c.name : "", ne = de ? Ae(de) : "";
      return typeof c == "function" && Le.set(c, ne), ne;
    }
    function sn(c, v, E) {
      return or(c, !1);
    }
    function nn(c) {
      var v = c.prototype;
      return !!(v && v.isReactComponent);
    }
    function Pe(c, v, E) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return or(c, nn(c));
      if (typeof c == "string")
        return Ae(c);
      switch (c) {
        case h:
          return Ae("Suspense");
        case d:
          return Ae("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            return sn(c.render);
          case f:
            return Pe(c.type, v, E);
          case y: {
            var N = c, A = N._payload, L = N._init;
            try {
              return Pe(L(A), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, lr = {}, cr = T.ReactDebugCurrentFrame;
    function De(c) {
      if (c) {
        var v = c._owner, E = Pe(c.type, c._source, v ? v.type : null);
        cr.setExtraStackFrame(E);
      } else
        cr.setExtraStackFrame(null);
    }
    function an(c, v, E, N, A) {
      {
        var L = Function.call.bind(ve);
        for (var k in c)
          if (L(c, k)) {
            var R = void 0;
            try {
              if (typeof c[k] != "function") {
                var B = Error((N || "React class") + ": " + E + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              R = c[k](v, k, N, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              R = M;
            }
            R && !(R instanceof Error) && (De(A), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", E, k, typeof R), De(null)), R instanceof Error && !(R.message in lr) && (lr[R.message] = !0, De(A), j("Failed %s type: %s", E, R.message), De(null));
          }
      }
    }
    var on = Array.isArray;
    function rt(c) {
      return on(c);
    }
    function ln(c) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E;
      }
    }
    function cn(c) {
      try {
        return dr(c), !1;
      } catch {
        return !0;
      }
    }
    function dr(c) {
      return "" + c;
    }
    function ur(c) {
      if (cn(c))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ln(c)), dr(c);
    }
    var we = T.ReactCurrentOwner, dn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, fr, st;
    st = {};
    function un(c) {
      if (ve.call(c, "ref")) {
        var v = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function hn(c) {
      if (ve.call(c, "key")) {
        var v = Object.getOwnPropertyDescriptor(c, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function fn(c, v) {
      if (typeof c.ref == "string" && we.current && v && we.current.stateNode !== v) {
        var E = K(we.current.type);
        st[E] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(we.current.type), c.ref), st[E] = !0);
      }
    }
    function pn(c, v) {
      {
        var E = function() {
          hr || (hr = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function mn(c, v) {
      {
        var E = function() {
          fr || (fr = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var gn = function(c, v, E, N, A, L, k) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: c,
        key: v,
        ref: E,
        props: k,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function xn(c, v, E, N, A) {
      {
        var L, k = {}, R = null, B = null;
        E !== void 0 && (ur(E), R = "" + E), hn(v) && (ur(v.key), R = "" + v.key), un(v) && (B = v.ref, fn(v, A));
        for (L in v)
          ve.call(v, L) && !dn.hasOwnProperty(L) && (k[L] = v[L]);
        if (c && c.defaultProps) {
          var M = c.defaultProps;
          for (L in M)
            k[L] === void 0 && (k[L] = M[L]);
        }
        if (R || B) {
          var I = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          R && pn(k, I), B && mn(k, I);
        }
        return gn(c, R, B, A, N, we.current, k);
      }
    }
    var nt = T.ReactCurrentOwner, pr = T.ReactDebugCurrentFrame;
    function ce(c) {
      if (c) {
        var v = c._owner, E = Pe(c.type, c._source, v ? v.type : null);
        pr.setExtraStackFrame(E);
      } else
        pr.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function at(c) {
      return typeof c == "object" && c !== null && c.$$typeof === s;
    }
    function mr() {
      {
        if (nt.current) {
          var c = K(nt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function vn(c) {
      return "";
    }
    var gr = {};
    function wn(c) {
      {
        var v = mr();
        if (!v) {
          var E = typeof c == "string" ? c : c.displayName || c.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function xr(c, v) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var E = wn(v);
        if (gr[E])
          return;
        gr[E] = !0;
        var N = "";
        c && c._owner && c._owner !== nt.current && (N = " It was passed a child from " + K(c._owner.type) + "."), ce(c), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, N), ce(null);
      }
    }
    function vr(c, v) {
      {
        if (typeof c != "object")
          return;
        if (rt(c))
          for (var E = 0; E < c.length; E++) {
            var N = c[E];
            at(N) && xr(N, v);
          }
        else if (at(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var A = O(c);
          if (typeof A == "function" && A !== c.entries)
            for (var L = A.call(c), k; !(k = L.next()).done; )
              at(k.value) && xr(k.value, v);
        }
      }
    }
    function yn(c) {
      {
        var v = c.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === f))
          E = v.propTypes;
        else
          return;
        if (E) {
          var N = K(v);
          an(E, c.props, "prop", N, c);
        } else if (v.PropTypes !== void 0 && !it) {
          it = !0;
          var A = K(v);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bn(c) {
      {
        for (var v = Object.keys(c.props), E = 0; E < v.length; E++) {
          var N = v[E];
          if (N !== "children" && N !== "key") {
            ce(c), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), ce(null);
            break;
          }
        }
        c.ref !== null && (ce(c), j("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var wr = {};
    function yr(c, v, E, N, A, L) {
      {
        var k = Zs(c);
        if (!k) {
          var R = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = vn();
          B ? R += B : R += mr();
          var M;
          c === null ? M = "null" : rt(c) ? M = "array" : c !== void 0 && c.$$typeof === s ? (M = "<" + (K(c.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : M = typeof c, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, R);
        }
        var I = xn(c, v, E, A, L);
        if (I == null)
          return I;
        if (k) {
          var V = v.children;
          if (V !== void 0)
            if (N)
              if (rt(V)) {
                for (var de = 0; de < V.length; de++)
                  vr(V[de], c);
                Object.freeze && Object.freeze(V);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vr(V, c);
        }
        if (ve.call(v, "key")) {
          var ne = K(c), U = Object.keys(v).filter(function(Rn) {
            return Rn !== "key";
          }), ot = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!wr[ne + ot]) {
            var jn = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ot, ne, jn, ne), wr[ne + ot] = !0;
          }
        }
        return c === r ? bn(I) : yn(I), I;
      }
    }
    function En(c, v, E) {
      return yr(c, v, E, !0);
    }
    function Cn(c, v, E) {
      return yr(c, v, E, !1);
    }
    var Nn = Cn, Sn = En;
    be.Fragment = r, be.jsx = Nn, be.jsxs = Sn;
  }()), be;
}
process.env.NODE_ENV === "production" ? wt.exports = Pn() : wt.exports = Dn();
var a = wt.exports, C = /* @__PURE__ */ ((t) => (t.LOADING = "LOADING", t.ERROR = "ERROR", t.SUCCESS = "SUCCESS", t.APPROVED = "APPROVED", t.SUBMITTED = "SUBMITTED", t.STARTED = "STARTED", t.ACTIVE = "ACTIVE", t.LOADED = "LOADED", t.RUNNING = "RUNNING", t.ADMITTED = "ADMITTED", t.ADMIT = "ADMIT", t.NO = "NO", t.YES = "YES", t.HEALTHY = "HEALTHY", t.UNHEALTHY = "UNHEALTHY", t.TEACHING = "TEACHING", t.NONTEACHING = "NONTEACHING", t.STUDENTS = "STUDENTS", t.APPLICANTS = "APPLICANTS", t.PROGRAMMES = "PROGRAMMES", t.ORGANIZATIONAL_UNITS = "ORGANIZATIONAL_UNITS", t.PROGRESS = "PROGRESS", t.COMPLETED = "COMPLETED", t.QUALIFIED = "QUALIFIED", t.WAITING = "WAITING", t.PENDING = "PENDING", t.IN_PROGRESS = "IN_PROGRESS", t.CIRRICULUM = "CIRRICULUM", t.NOTICE = "NOTICE", t.OPEN = "OPEN", t.ACCESS_TOKEN = "access_token", t.APPLICATION_ACCESS_TOKEN = "a_token", t.APPLICATION = "APPLICATION", t.APPLY_AS_AWAITING = "APPLY_AS_AWAITING", t.UPLOAD_RESULTS = "UPLOAD_RESULTS", t.TEXT = "TEXT", t.TEXTAREA = "TEXTAREA", t.EMAIL = "EMAIL", t.PHONE = "PHONE", t.NUMBER = "NUMBER", t.PASSWORD = "PASSWORD", t.DOCUMENT = "DOCUMENT", t.EDIT = "EDIT", t.DELETE = "DELETE", t.ACADEMIC = "ACADEMIC", t.NONACADEMIC = "NONACADEMIC", t.INTERNATIONAL = "INTERNATIONAL", t.VOUCHER_PARAM = "VOUCHER_PARAM", t.VOUCHER = "VOUCHER", t.EMAIL_ADDRESS = "EMAIL_ADDRESS", t.MOBILE_MONEY = "MOBILE_MONEY", t.LOCAL = "LOCAL", t.FRONT = "FRONT", t.ADMISSION = "ADMISSION", t.MEDIA_CAPTURED = "MEDIA_CAPTURED", t.FEMALE = "FEMALE", t.MALE = "MALE", t.DATASETTABLE_REQUEST = "DATASETTABLE_REQUEST", t.SMALL = "SMALL", t.NORMAL = "NORMAL", t.LARGE = "LARGE", t.AGGREGATE = "AGGREGATE", t.AUTOMATIC = "AUTOMATIC", t.MANUAL = "MANUAL", t.INTERVIEW = "INTERVIEW", t.ENTRANCE_EXAMS = "ENTRANCE_EXAMS", t.REJECT = "REJECT", t.REJECTED = "REJECTED", t.GRADE_CUT_OF_POINT_STATE = "GRADE_CUT_OF_POINT_STATE", t.AGGREGATE_CUT_OF_POINT_STATE = "AGGREGATE_CUT_OF_POINT_STATE", t.GENDER_CUT_OF_POINT_STATE = "GENDER_CUT_OF_POINT_STATE", t.MATURE_INVITATION = "MATURE_INVITATION", t.RESULTS = "RESULTS", t.COURSE_REMOVED = "COURSE_REMOVED", t.COURSE_ADDED = "COURSE_ADDED", t.RECOMMENDATION_LETTER = "RECOMMENDATION_LETTER", t.ERROR_MESSAGE = "Sorry for the inconvenience caused by the error. Please contact us if the issue persists. ", t.POSITIONS = "POSITIONS", t.WASSCE_RESULTS = "WASSCE_RESULTS", t.NEW_SITTING = "NEW_SITTING", t.REFEREE = "REFEREE", t.CERTIFICATE = "CERTIFICATE", t.TRANSCRIPT = "TRANSCRIPT", t.UPDATE_INFORMATION = "UPDATE_INFORMATION", t.SUB_CAMPUSES = "SUB_CAMPUSES", t.VOUCHER_FEES = "VOUCHER_FEES", t.REPORT = "REPORT", t))(C || {});
class Mn {
  constructor() {
    p(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(s) {
    let e = s.size;
    const r = ["Bytes", "KB", "MB", "GB"];
    let n = 0;
    for (; e > 900; )
      e /= 1024, n++;
    return `${Math.round(e * 100) / 100} ${r[n]}`;
  }
  getExtension(s) {
    return s.split(".").pop();
  }
  getFileName(s) {
    return s.split("/").pop();
  }
  isValidHttpUrl(s) {
    let e;
    try {
      e = new URL(s);
    } catch {
      return !1;
    }
    return /https?/.test(e.protocol);
  }
  makeUniqueid(s = 10) {
    let e = "";
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = r.length;
    for (let i = 0; i < s; i++)
      e += r.charAt(Math.floor(Math.random() * n));
    return e;
  }
  nameToText(s) {
    return s.split("_").join(" ");
  }
  getRandomColor() {
    const s = "0123456789ABCDEF";
    let e = "#";
    for (let r = 0; r < 6; r++)
      e += s[Math.floor(Math.random() * 16)];
    return e;
  }
  concat(s, e) {
    return `${s} ${e}`;
  }
  isEmptyOrNull(s) {
    return Array.isArray(s) ? s.length == 0 : s === "" || s == null || s == null;
  }
  toStringDefault(s, e = "") {
    return this.isEmptyOrNull(s) ? e.toString() : s;
  }
  toString(s) {
    return s + "";
  }
  isEmpty(s) {
    return s === "" || s === void 0 || s === null;
  }
  validatePasswords(s, e) {
    return s !== "" && s === e;
  }
  validatePassword(s) {
    const e = /[A-Z]/.test(s), r = /[a-z]/.test(s), n = /\d/.test(s), i = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(s), o = s.length >= 8;
    return { hasUppercase: e, hasLowercase: r, hasNumber: n, hasSpecialCharacter: i, has8Characters: o, allValidationsPassed: e && r && n && i && o };
  }
  isNotEmpty(s) {
    return s !== "";
  }
  columnHead(s) {
    let e = s.split("_");
    return e.length > 1 && e.slice(-1)[0].toLowerCase() ? e.slice(0, -1).join(" ").toUpperCase() : e.join(" ").toUpperCase();
  }
  convertUnderscoreToSpaceString(s) {
    return s.replace(/_/g, " ");
  }
  isDarkTheme() {
    return localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  async sync_theme(s) {
    let e;
    const r = localStorage.getItem("color-theme");
    r ? r === "light" ? (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark"), e = !0) : (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light"), e = !1) : document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light"), e = !1) : (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark"), e = !0), s && s(e);
  }
  async imageSize(s) {
    return new Promise((e, r) => {
      try {
        const n = new FileReader();
        n.onload = () => {
          const i = new Image();
          i.onload = () => {
            e({ width: i.width, height: i.height });
          }, i.src = n.result;
        }, n.onerror = (i) => {
          r(i);
        }, n.readAsDataURL(s);
      } catch (n) {
        r(n);
      }
    });
  }
  capitalizeEachWord(s) {
    return s.toLowerCase().split(" ").map((r) => r.charAt(0).toUpperCase() + r.slice(1)).join(" ");
  }
  formatDateString(s) {
    const e = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!e)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, r, n, i] = e;
    return `${i}-${n}-${r}`;
  }
  validateEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }
  convertNumber(s) {
    return Math.abs(s) >= 1e6 ? (s / 1e6).toString().substring(0, 4) + "M" : Math.abs(s) >= 1e3 ? (s / 1e3).toString().substring(0, 4) + "k" : s.toString();
  }
  daysLeft(s) {
    const e = new Date(s), r = /* @__PURE__ */ new Date(), n = e.getTime() - r.getTime();
    return Math.ceil(n / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(s) {
    const r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][s.getDay()], n = s.getDate(), o = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ][s.getMonth()], l = s.getFullYear();
    function u(d) {
      if (d >= 11 && d <= 13)
        return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
    const h = u(n);
    return `${r}, ${n}${h} ${o}, ${l}`;
  }
  getTimeAgoAndCustomDate(s) {
    const e = /* @__PURE__ */ new Date(), r = new Date(s), n = e.getTime() - r.getTime();
    if (e < r)
      return "Future date";
    const i = Math.floor(n / 1e3);
    return i < 60 ? `${i} seconds ago` : i < 3600 ? `${Math.floor(i / 60)} minutes ago` : i < 86400 ? `${Math.floor(i / 3600)} hours ago` : i < 2592e3 ? `${Math.floor(i / 86400)} days ago` : r.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    });
  }
  roundTo2dp(s) {
    const e = parseFloat(s);
    return isNaN(e) ? s : (Math.round(e * 100) / 100).toFixed(2);
  }
}
const w = new Mn();
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var Se = typeof window < "u" && typeof document < "u" && typeof navigator < "u", In = function() {
  for (var t = ["Edge", "Trident", "Firefox"], s = 0; s < t.length; s += 1)
    if (Se && navigator.userAgent.indexOf(t[s]) >= 0)
      return 1;
  return 0;
}();
function Fn(t) {
  var s = !1;
  return function() {
    s || (s = !0, window.Promise.resolve().then(function() {
      s = !1, t();
    }));
  };
}
function Bn(t) {
  var s = !1;
  return function() {
    s || (s = !0, setTimeout(function() {
      s = !1, t();
    }, In));
  };
}
var Un = Se && window.Promise, $n = Un ? Fn : Bn;
function Kr(t) {
  var s = {};
  return t && s.toString.call(t) === "[object Function]";
}
function oe(t, s) {
  if (t.nodeType !== 1)
    return [];
  var e = t.ownerDocument.defaultView, r = e.getComputedStyle(t, null);
  return s ? r[s] : r;
}
function Ft(t) {
  return t.nodeName === "HTML" ? t : t.parentNode || t.host;
}
function je(t) {
  if (!t)
    return document.body;
  switch (t.nodeName) {
    case "HTML":
    case "BODY":
      return t.ownerDocument.body;
    case "#document":
      return t.body;
  }
  var s = oe(t), e = s.overflow, r = s.overflowX, n = s.overflowY;
  return /(auto|scroll|overlay)/.test(e + n + r) ? t : je(Ft(t));
}
function Xr(t) {
  return t && t.referenceNode ? t.referenceNode : t;
}
var Nr = Se && !!(window.MSInputMethodContext && document.documentMode), Sr = Se && /MSIE 10/.test(navigator.userAgent);
function pe(t) {
  return t === 11 ? Nr : t === 10 ? Sr : Nr || Sr;
}
function ue(t) {
  if (!t)
    return document.documentElement;
  for (var s = pe(10) ? document.body : null, e = t.offsetParent || null; e === s && t.nextElementSibling; )
    e = (t = t.nextElementSibling).offsetParent;
  var r = e && e.nodeName;
  return !r || r === "BODY" || r === "HTML" ? t ? t.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(e.nodeName) !== -1 && oe(e, "position") === "static" ? ue(e) : e;
}
function zn(t) {
  var s = t.nodeName;
  return s === "BODY" ? !1 : s === "HTML" || ue(t.firstElementChild) === t;
}
function yt(t) {
  return t.parentNode !== null ? yt(t.parentNode) : t;
}
function Ue(t, s) {
  if (!t || !t.nodeType || !s || !s.nodeType)
    return document.documentElement;
  var e = t.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING, r = e ? t : s, n = e ? s : t, i = document.createRange();
  i.setStart(r, 0), i.setEnd(n, 0);
  var o = i.commonAncestorContainer;
  if (t !== o && s !== o || r.contains(n))
    return zn(o) ? o : ue(o);
  var l = yt(t);
  return l.host ? Ue(l.host, s) : Ue(t, yt(s).host);
}
function he(t) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", e = s === "top" ? "scrollTop" : "scrollLeft", r = t.nodeName;
  if (r === "BODY" || r === "HTML") {
    var n = t.ownerDocument.documentElement, i = t.ownerDocument.scrollingElement || n;
    return i[e];
  }
  return t[e];
}
function Wn(t, s) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = he(s, "top"), n = he(s, "left"), i = e ? -1 : 1;
  return t.top += r * i, t.bottom += r * i, t.left += n * i, t.right += n * i, t;
}
function jr(t, s) {
  var e = s === "x" ? "Left" : "Top", r = e === "Left" ? "Right" : "Bottom";
  return parseFloat(t["border" + e + "Width"]) + parseFloat(t["border" + r + "Width"]);
}
function Rr(t, s, e, r) {
  return Math.max(s["offset" + t], s["scroll" + t], e["client" + t], e["offset" + t], e["scroll" + t], pe(10) ? parseInt(e["offset" + t]) + parseInt(r["margin" + (t === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (t === "Height" ? "Bottom" : "Right")]) : 0);
}
function Zr(t) {
  var s = t.body, e = t.documentElement, r = pe(10) && getComputedStyle(e);
  return {
    height: Rr("Height", s, e, r),
    width: Rr("Width", s, e, r)
  };
}
var Vn = function(t, s) {
  if (!(t instanceof s))
    throw new TypeError("Cannot call a class as a function");
}, Hn = /* @__PURE__ */ function() {
  function t(s, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(s, n.key, n);
    }
  }
  return function(s, e, r) {
    return e && t(s.prototype, e), r && t(s, r), s;
  };
}(), fe = function(t, s, e) {
  return s in t ? Object.defineProperty(t, s, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[s] = e, t;
}, H = Object.assign || function(t) {
  for (var s = 1; s < arguments.length; s++) {
    var e = arguments[s];
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }
  return t;
};
function re(t) {
  return H({}, t, {
    right: t.left + t.width,
    bottom: t.top + t.height
  });
}
function bt(t) {
  var s = {};
  try {
    if (pe(10)) {
      s = t.getBoundingClientRect();
      var e = he(t, "top"), r = he(t, "left");
      s.top += e, s.left += r, s.bottom += e, s.right += r;
    } else
      s = t.getBoundingClientRect();
  } catch {
  }
  var n = {
    left: s.left,
    top: s.top,
    width: s.right - s.left,
    height: s.bottom - s.top
  }, i = t.nodeName === "HTML" ? Zr(t.ownerDocument) : {}, o = i.width || t.clientWidth || n.width, l = i.height || t.clientHeight || n.height, u = t.offsetWidth - o, h = t.offsetHeight - l;
  if (u || h) {
    var d = oe(t);
    u -= jr(d, "x"), h -= jr(d, "y"), n.width -= u, n.height -= h;
  }
  return re(n);
}
function Bt(t, s) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = pe(10), n = s.nodeName === "HTML", i = bt(t), o = bt(s), l = je(t), u = oe(s), h = parseFloat(u.borderTopWidth), d = parseFloat(u.borderLeftWidth);
  e && n && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
  var f = re({
    top: i.top - o.top - h,
    left: i.left - o.left - d,
    width: i.width,
    height: i.height
  });
  if (f.marginTop = 0, f.marginLeft = 0, !r && n) {
    var y = parseFloat(u.marginTop), x = parseFloat(u.marginLeft);
    f.top -= h - y, f.bottom -= h - y, f.left -= d - x, f.right -= d - x, f.marginTop = y, f.marginLeft = x;
  }
  return (r && !e ? s.contains(l) : s === l && l.nodeName !== "BODY") && (f = Wn(f, s)), f;
}
function qn(t) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = t.ownerDocument.documentElement, r = Bt(t, e), n = Math.max(e.clientWidth, window.innerWidth || 0), i = Math.max(e.clientHeight, window.innerHeight || 0), o = s ? 0 : he(e), l = s ? 0 : he(e, "left"), u = {
    top: o - r.top + r.marginTop,
    left: l - r.left + r.marginLeft,
    width: n,
    height: i
  };
  return re(u);
}
function Qr(t) {
  var s = t.nodeName;
  if (s === "BODY" || s === "HTML")
    return !1;
  if (oe(t, "position") === "fixed")
    return !0;
  var e = Ft(t);
  return e ? Qr(e) : !1;
}
function es(t) {
  if (!t || !t.parentElement || pe())
    return document.documentElement;
  for (var s = t.parentElement; s && oe(s, "transform") === "none"; )
    s = s.parentElement;
  return s || document.documentElement;
}
function Ut(t, s, e, r) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = { top: 0, left: 0 }, o = n ? es(t) : Ue(t, Xr(s));
  if (r === "viewport")
    i = qn(o, n);
  else {
    var l = void 0;
    r === "scrollParent" ? (l = je(Ft(s)), l.nodeName === "BODY" && (l = t.ownerDocument.documentElement)) : r === "window" ? l = t.ownerDocument.documentElement : l = r;
    var u = Bt(l, o, n);
    if (l.nodeName === "HTML" && !Qr(o)) {
      var h = Zr(t.ownerDocument), d = h.height, f = h.width;
      i.top += u.top - u.marginTop, i.bottom = d + u.top, i.left += u.left - u.marginLeft, i.right = f + u.left;
    } else
      i = u;
  }
  e = e || 0;
  var y = typeof e == "number";
  return i.left += y ? e : e.left || 0, i.top += y ? e : e.top || 0, i.right -= y ? e : e.right || 0, i.bottom -= y ? e : e.bottom || 0, i;
}
function Gn(t) {
  var s = t.width, e = t.height;
  return s * e;
}
function ts(t, s, e, r, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (t.indexOf("auto") === -1)
    return t;
  var o = Ut(e, r, i, n), l = {
    top: {
      width: o.width,
      height: s.top - o.top
    },
    right: {
      width: o.right - s.right,
      height: o.height
    },
    bottom: {
      width: o.width,
      height: o.bottom - s.bottom
    },
    left: {
      width: s.left - o.left,
      height: o.height
    }
  }, u = Object.keys(l).map(function(y) {
    return H({
      key: y
    }, l[y], {
      area: Gn(l[y])
    });
  }).sort(function(y, x) {
    return x.area - y.area;
  }), h = u.filter(function(y) {
    var x = y.width, g = y.height;
    return x >= e.clientWidth && g >= e.clientHeight;
  }), d = h.length > 0 ? h[0].key : u[0].key, f = t.split("-")[1];
  return d + (f ? "-" + f : "");
}
function rs(t, s, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, n = r ? es(s) : Ue(s, Xr(e));
  return Bt(e, n, r);
}
function ss(t) {
  var s = t.ownerDocument.defaultView, e = s.getComputedStyle(t), r = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0), i = {
    width: t.offsetWidth + n,
    height: t.offsetHeight + r
  };
  return i;
}
function $e(t) {
  var s = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return t.replace(/left|right|bottom|top/g, function(e) {
    return s[e];
  });
}
function ns(t, s, e) {
  e = e.split("-")[0];
  var r = ss(t), n = {
    width: r.width,
    height: r.height
  }, i = ["right", "left"].indexOf(e) !== -1, o = i ? "top" : "left", l = i ? "left" : "top", u = i ? "height" : "width", h = i ? "width" : "height";
  return n[o] = s[o] + s[u] / 2 - r[u] / 2, e === l ? n[l] = s[l] - r[h] : n[l] = s[$e(l)], n;
}
function Re(t, s) {
  return Array.prototype.find ? t.find(s) : t.filter(s)[0];
}
function Yn(t, s, e) {
  if (Array.prototype.findIndex)
    return t.findIndex(function(n) {
      return n[s] === e;
    });
  var r = Re(t, function(n) {
    return n[s] === e;
  });
  return t.indexOf(r);
}
function is(t, s, e) {
  var r = e === void 0 ? t : t.slice(0, Yn(t, "name", e));
  return r.forEach(function(n) {
    n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var i = n.function || n.fn;
    n.enabled && Kr(i) && (s.offsets.popper = re(s.offsets.popper), s.offsets.reference = re(s.offsets.reference), s = i(s, n));
  }), s;
}
function Jn() {
  if (!this.state.isDestroyed) {
    var t = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    t.offsets.reference = rs(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = ts(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ns(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = is(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
  }
}
function as(t, s) {
  return t.some(function(e) {
    var r = e.name, n = e.enabled;
    return n && r === s;
  });
}
function $t(t) {
  for (var s = [!1, "ms", "Webkit", "Moz", "O"], e = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < s.length; r++) {
    var n = s[r], i = n ? "" + n + e : t;
    if (typeof document.body.style[i] < "u")
      return i;
  }
  return null;
}
function Kn() {
  return this.state.isDestroyed = !0, as(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[$t("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function os(t) {
  var s = t.ownerDocument;
  return s ? s.defaultView : window;
}
function ls(t, s, e, r) {
  var n = t.nodeName === "BODY", i = n ? t.ownerDocument.defaultView : t;
  i.addEventListener(s, e, { passive: !0 }), n || ls(je(i.parentNode), s, e, r), r.push(i);
}
function Xn(t, s, e, r) {
  e.updateBound = r, os(t).addEventListener("resize", e.updateBound, { passive: !0 });
  var n = je(t);
  return ls(n, "scroll", e.updateBound, e.scrollParents), e.scrollElement = n, e.eventsEnabled = !0, e;
}
function Zn() {
  this.state.eventsEnabled || (this.state = Xn(this.reference, this.options, this.state, this.scheduleUpdate));
}
function Qn(t, s) {
  return os(t).removeEventListener("resize", s.updateBound), s.scrollParents.forEach(function(e) {
    e.removeEventListener("scroll", s.updateBound);
  }), s.updateBound = null, s.scrollParents = [], s.scrollElement = null, s.eventsEnabled = !1, s;
}
function ei() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Qn(this.reference, this.state));
}
function zt(t) {
  return t !== "" && !isNaN(parseFloat(t)) && isFinite(t);
}
function Et(t, s) {
  Object.keys(s).forEach(function(e) {
    var r = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(e) !== -1 && zt(s[e]) && (r = "px"), t.style[e] = s[e] + r;
  });
}
function ti(t, s) {
  Object.keys(s).forEach(function(e) {
    var r = s[e];
    r !== !1 ? t.setAttribute(e, s[e]) : t.removeAttribute(e);
  });
}
function ri(t) {
  return Et(t.instance.popper, t.styles), ti(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && Et(t.arrowElement, t.arrowStyles), t;
}
function si(t, s, e, r, n) {
  var i = rs(n, s, t, e.positionFixed), o = ts(e.placement, i, s, t, e.modifiers.flip.boundariesElement, e.modifiers.flip.padding);
  return s.setAttribute("x-placement", o), Et(s, { position: e.positionFixed ? "fixed" : "absolute" }), e;
}
function ni(t, s) {
  var e = t.offsets, r = e.popper, n = e.reference, i = Math.round, o = Math.floor, l = function(T) {
    return T;
  }, u = i(n.width), h = i(r.width), d = ["left", "right"].indexOf(t.placement) !== -1, f = t.placement.indexOf("-") !== -1, y = u % 2 === h % 2, x = u % 2 === 1 && h % 2 === 1, g = s ? d || f || y ? i : o : l, b = s ? i : l;
  return {
    left: g(x && !f && s ? r.left - 1 : r.left),
    top: b(r.top),
    bottom: b(r.bottom),
    right: g(r.right)
  };
}
var ii = Se && /Firefox/i.test(navigator.userAgent);
function ai(t, s) {
  var e = s.x, r = s.y, n = t.offsets.popper, i = Re(t.instance.modifiers, function(_) {
    return _.name === "applyStyle";
  }).gpuAcceleration;
  i !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var o = i !== void 0 ? i : s.gpuAcceleration, l = ue(t.instance.popper), u = bt(l), h = {
    position: n.position
  }, d = ni(t, window.devicePixelRatio < 2 || !ii), f = e === "bottom" ? "top" : "bottom", y = r === "right" ? "left" : "right", x = $t("transform"), g = void 0, b = void 0;
  if (f === "bottom" ? l.nodeName === "HTML" ? b = -l.clientHeight + d.bottom : b = -u.height + d.bottom : b = d.top, y === "right" ? l.nodeName === "HTML" ? g = -l.clientWidth + d.right : g = -u.width + d.right : g = d.left, o && x)
    h[x] = "translate3d(" + g + "px, " + b + "px, 0)", h[f] = 0, h[y] = 0, h.willChange = "transform";
  else {
    var O = f === "bottom" ? -1 : 1, T = y === "right" ? -1 : 1;
    h[f] = b * O, h[y] = g * T, h.willChange = f + ", " + y;
  }
  var j = {
    "x-placement": t.placement
  };
  return t.attributes = H({}, j, t.attributes), t.styles = H({}, h, t.styles), t.arrowStyles = H({}, t.offsets.arrow, t.arrowStyles), t;
}
function cs(t, s, e) {
  var r = Re(t, function(l) {
    var u = l.name;
    return u === s;
  }), n = !!r && t.some(function(l) {
    return l.name === e && l.enabled && l.order < r.order;
  });
  if (!n) {
    var i = "`" + s + "`", o = "`" + e + "`";
    console.warn(o + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
  }
  return n;
}
function oi(t, s) {
  var e;
  if (!cs(t.instance.modifiers, "arrow", "keepTogether"))
    return t;
  var r = s.element;
  if (typeof r == "string") {
    if (r = t.instance.popper.querySelector(r), !r)
      return t;
  } else if (!t.instance.popper.contains(r))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
  var n = t.placement.split("-")[0], i = t.offsets, o = i.popper, l = i.reference, u = ["left", "right"].indexOf(n) !== -1, h = u ? "height" : "width", d = u ? "Top" : "Left", f = d.toLowerCase(), y = u ? "left" : "top", x = u ? "bottom" : "right", g = ss(r)[h];
  l[x] - g < o[f] && (t.offsets.popper[f] -= o[f] - (l[x] - g)), l[f] + g > o[x] && (t.offsets.popper[f] += l[f] + g - o[x]), t.offsets.popper = re(t.offsets.popper);
  var b = l[f] + l[h] / 2 - g / 2, O = oe(t.instance.popper), T = parseFloat(O["margin" + d]), j = parseFloat(O["border" + d + "Width"]), _ = b - t.offsets.popper[f] - T - j;
  return _ = Math.max(Math.min(o[h] - g, _), 0), t.arrowElement = r, t.offsets.arrow = (e = {}, fe(e, f, Math.round(_)), fe(e, y, ""), e), t;
}
function li(t) {
  return t === "end" ? "start" : t === "start" ? "end" : t;
}
var ds = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ct = ds.slice(3);
function kr(t) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = ct.indexOf(t), r = ct.slice(e + 1).concat(ct.slice(0, e));
  return s ? r.reverse() : r;
}
var dt = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function ci(t, s) {
  if (as(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)
    return t;
  var e = Ut(t.instance.popper, t.instance.reference, s.padding, s.boundariesElement, t.positionFixed), r = t.placement.split("-")[0], n = $e(r), i = t.placement.split("-")[1] || "", o = [];
  switch (s.behavior) {
    case dt.FLIP:
      o = [r, n];
      break;
    case dt.CLOCKWISE:
      o = kr(r);
      break;
    case dt.COUNTERCLOCKWISE:
      o = kr(r, !0);
      break;
    default:
      o = s.behavior;
  }
  return o.forEach(function(l, u) {
    if (r !== l || o.length === u + 1)
      return t;
    r = t.placement.split("-")[0], n = $e(r);
    var h = t.offsets.popper, d = t.offsets.reference, f = Math.floor, y = r === "left" && f(h.right) > f(d.left) || r === "right" && f(h.left) < f(d.right) || r === "top" && f(h.bottom) > f(d.top) || r === "bottom" && f(h.top) < f(d.bottom), x = f(h.left) < f(e.left), g = f(h.right) > f(e.right), b = f(h.top) < f(e.top), O = f(h.bottom) > f(e.bottom), T = r === "left" && x || r === "right" && g || r === "top" && b || r === "bottom" && O, j = ["top", "bottom"].indexOf(r) !== -1, _ = !!s.flipVariations && (j && i === "start" && x || j && i === "end" && g || !j && i === "start" && b || !j && i === "end" && O), Z = !!s.flipVariationsByContent && (j && i === "start" && g || j && i === "end" && x || !j && i === "start" && O || !j && i === "end" && b), le = _ || Z;
    (y || T || le) && (t.flipped = !0, (y || T) && (r = o[u + 1]), le && (i = li(i)), t.placement = r + (i ? "-" + i : ""), t.offsets.popper = H({}, t.offsets.popper, ns(t.instance.popper, t.offsets.reference, t.placement)), t = is(t.instance.modifiers, t, "flip"));
  }), t;
}
function di(t) {
  var s = t.offsets, e = s.popper, r = s.reference, n = t.placement.split("-")[0], i = Math.floor, o = ["top", "bottom"].indexOf(n) !== -1, l = o ? "right" : "bottom", u = o ? "left" : "top", h = o ? "width" : "height";
  return e[l] < i(r[u]) && (t.offsets.popper[u] = i(r[u]) - e[h]), e[u] > i(r[l]) && (t.offsets.popper[u] = i(r[l])), t;
}
function ui(t, s, e, r) {
  var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +n[1], o = n[2];
  if (!i)
    return t;
  if (o.indexOf("%") === 0) {
    var l = void 0;
    switch (o) {
      case "%p":
        l = e;
        break;
      case "%":
      case "%r":
      default:
        l = r;
    }
    var u = re(l);
    return u[s] / 100 * i;
  } else if (o === "vh" || o === "vw") {
    var h = void 0;
    return o === "vh" ? h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), h / 100 * i;
  } else
    return i;
}
function hi(t, s, e, r) {
  var n = [0, 0], i = ["right", "left"].indexOf(r) !== -1, o = t.split(/(\+|\-)/).map(function(d) {
    return d.trim();
  }), l = o.indexOf(Re(o, function(d) {
    return d.search(/,|\s/) !== -1;
  }));
  o[l] && o[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var u = /\s*,\s*|\s+/, h = l !== -1 ? [o.slice(0, l).concat([o[l].split(u)[0]]), [o[l].split(u)[1]].concat(o.slice(l + 1))] : [o];
  return h = h.map(function(d, f) {
    var y = (f === 1 ? !i : i) ? "height" : "width", x = !1;
    return d.reduce(function(g, b) {
      return g[g.length - 1] === "" && ["+", "-"].indexOf(b) !== -1 ? (g[g.length - 1] = b, x = !0, g) : x ? (g[g.length - 1] += b, x = !1, g) : g.concat(b);
    }, []).map(function(g) {
      return ui(g, y, s, e);
    });
  }), h.forEach(function(d, f) {
    d.forEach(function(y, x) {
      zt(y) && (n[f] += y * (d[x - 1] === "-" ? -1 : 1));
    });
  }), n;
}
function fi(t, s) {
  var e = s.offset, r = t.placement, n = t.offsets, i = n.popper, o = n.reference, l = r.split("-")[0], u = void 0;
  return zt(+e) ? u = [+e, 0] : u = hi(e, i, o, l), l === "left" ? (i.top += u[0], i.left -= u[1]) : l === "right" ? (i.top += u[0], i.left += u[1]) : l === "top" ? (i.left += u[0], i.top -= u[1]) : l === "bottom" && (i.left += u[0], i.top += u[1]), t.popper = i, t;
}
function pi(t, s) {
  var e = s.boundariesElement || ue(t.instance.popper);
  t.instance.reference === e && (e = ue(e));
  var r = $t("transform"), n = t.instance.popper.style, i = n.top, o = n.left, l = n[r];
  n.top = "", n.left = "", n[r] = "";
  var u = Ut(t.instance.popper, t.instance.reference, s.padding, e, t.positionFixed);
  n.top = i, n.left = o, n[r] = l, s.boundaries = u;
  var h = s.priority, d = t.offsets.popper, f = {
    primary: function(x) {
      var g = d[x];
      return d[x] < u[x] && !s.escapeWithReference && (g = Math.max(d[x], u[x])), fe({}, x, g);
    },
    secondary: function(x) {
      var g = x === "right" ? "left" : "top", b = d[g];
      return d[x] > u[x] && !s.escapeWithReference && (b = Math.min(d[g], u[x] - (x === "right" ? d.width : d.height))), fe({}, g, b);
    }
  };
  return h.forEach(function(y) {
    var x = ["left", "top"].indexOf(y) !== -1 ? "primary" : "secondary";
    d = H({}, d, f[x](y));
  }), t.offsets.popper = d, t;
}
function mi(t) {
  var s = t.placement, e = s.split("-")[0], r = s.split("-")[1];
  if (r) {
    var n = t.offsets, i = n.reference, o = n.popper, l = ["bottom", "top"].indexOf(e) !== -1, u = l ? "left" : "top", h = l ? "width" : "height", d = {
      start: fe({}, u, i[u]),
      end: fe({}, u, i[u] + i[h] - o[h])
    };
    t.offsets.popper = H({}, o, d[r]);
  }
  return t;
}
function gi(t) {
  if (!cs(t.instance.modifiers, "hide", "preventOverflow"))
    return t;
  var s = t.offsets.reference, e = Re(t.instance.modifiers, function(r) {
    return r.name === "preventOverflow";
  }).boundaries;
  if (s.bottom < e.top || s.left > e.right || s.top > e.bottom || s.right < e.left) {
    if (t.hide === !0)
      return t;
    t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
  } else {
    if (t.hide === !1)
      return t;
    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
  }
  return t;
}
function xi(t) {
  var s = t.placement, e = s.split("-")[0], r = t.offsets, n = r.popper, i = r.reference, o = ["left", "right"].indexOf(e) !== -1, l = ["top", "left"].indexOf(e) === -1;
  return n[o ? "left" : "top"] = i[e] - (l ? n[o ? "width" : "height"] : 0), t.placement = $e(s), t.offsets.popper = re(n), t;
}
var vi = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: mi
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: fi,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: pi,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: di
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: oi,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: ci,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: !1,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: !1
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: !1,
    /** @prop {ModifierFn} */
    fn: xi
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: gi
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: ai,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: !0,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: ri,
    /** @prop {Function} */
    onLoad: si,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, wi = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: !1,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: !0,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: !1,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: vi
}, Ve = function() {
  function t(s, e) {
    var r = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Vn(this, t), this.scheduleUpdate = function() {
      return requestAnimationFrame(r.update);
    }, this.update = $n(this.update.bind(this)), this.options = H({}, t.Defaults, n), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = s && s.jquery ? s[0] : s, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(H({}, t.Defaults.modifiers, n.modifiers)).forEach(function(o) {
      r.options.modifiers[o] = H({}, t.Defaults.modifiers[o] || {}, n.modifiers ? n.modifiers[o] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(o) {
      return H({
        name: o
      }, r.options.modifiers[o]);
    }).sort(function(o, l) {
      return o.order - l.order;
    }), this.modifiers.forEach(function(o) {
      o.enabled && Kr(o.onLoad) && o.onLoad(r.reference, r.popper, r.options, o, r.state);
    }), this.update();
    var i = this.options.eventsEnabled;
    i && this.enableEventListeners(), this.state.eventsEnabled = i;
  }
  return Hn(t, [{
    key: "update",
    value: function() {
      return Jn.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return Kn.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return Zn.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return ei.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]), t;
}();
Ve.Utils = (typeof window < "u" ? window : global).PopperUtils;
Ve.placements = ds;
Ve.Defaults = wi;
function us(t, s) {
  return function() {
    return t.apply(s, arguments);
  };
}
const { toString: yi } = Object.prototype, { getPrototypeOf: Wt } = Object, He = /* @__PURE__ */ ((t) => (s) => {
  const e = yi.call(s);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (t) => (t = t.toLowerCase(), (s) => He(s) === t), qe = (t) => (s) => typeof s === t, { isArray: me } = Array, Ne = qe("undefined");
function bi(t) {
  return t !== null && !Ne(t) && t.constructor !== null && !Ne(t.constructor) && q(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const hs = Y("ArrayBuffer");
function Ei(t) {
  let s;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? s = ArrayBuffer.isView(t) : s = t && t.buffer && hs(t.buffer), s;
}
const Ci = qe("string"), q = qe("function"), fs = qe("number"), Ge = (t) => t !== null && typeof t == "object", Ni = (t) => t === !0 || t === !1, Ie = (t) => {
  if (He(t) !== "object")
    return !1;
  const s = Wt(t);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Si = Y("Date"), ji = Y("File"), Ri = Y("Blob"), ki = Y("FileList"), Oi = (t) => Ge(t) && q(t.pipe), _i = (t) => {
  let s;
  return t && (typeof FormData == "function" && t instanceof FormData || q(t.append) && ((s = He(t)) === "formdata" || // detect form-data instance
  s === "object" && q(t.toString) && t.toString() === "[object FormData]"));
}, Ti = Y("URLSearchParams"), [Ai, Li, Pi, Di] = ["ReadableStream", "Request", "Response", "Headers"].map(Y), Mi = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ke(t, s, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, n;
  if (typeof t != "object" && (t = [t]), me(t))
    for (r = 0, n = t.length; r < n; r++)
      s.call(null, t[r], r, t);
  else {
    const i = e ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], s.call(null, t[l], l, t);
  }
}
function ps(t, s) {
  s = s.toLowerCase();
  const e = Object.keys(t);
  let r = e.length, n;
  for (; r-- > 0; )
    if (n = e[r], s === n.toLowerCase())
      return n;
  return null;
}
const ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, gs = (t) => !Ne(t) && t !== ms;
function Ct() {
  const { caseless: t } = gs(this) && this || {}, s = {}, e = (r, n) => {
    const i = t && ps(s, n) || n;
    Ie(s[i]) && Ie(r) ? s[i] = Ct(s[i], r) : Ie(r) ? s[i] = Ct({}, r) : me(r) ? s[i] = r.slice() : s[i] = r;
  };
  for (let r = 0, n = arguments.length; r < n; r++)
    arguments[r] && ke(arguments[r], e);
  return s;
}
const Ii = (t, s, e, { allOwnKeys: r } = {}) => (ke(s, (n, i) => {
  e && q(n) ? t[i] = us(n, e) : t[i] = n;
}, { allOwnKeys: r }), t), Fi = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Bi = (t, s, e, r) => {
  t.prototype = Object.create(s.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: s.prototype
  }), e && Object.assign(t.prototype, e);
}, Ui = (t, s, e, r) => {
  let n, i, o;
  const l = {};
  if (s = s || {}, t == null) return s;
  do {
    for (n = Object.getOwnPropertyNames(t), i = n.length; i-- > 0; )
      o = n[i], (!r || r(o, t, s)) && !l[o] && (s[o] = t[o], l[o] = !0);
    t = e !== !1 && Wt(t);
  } while (t && (!e || e(t, s)) && t !== Object.prototype);
  return s;
}, $i = (t, s, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= s.length;
  const r = t.indexOf(s, e);
  return r !== -1 && r === e;
}, zi = (t) => {
  if (!t) return null;
  if (me(t)) return t;
  let s = t.length;
  if (!fs(s)) return null;
  const e = new Array(s);
  for (; s-- > 0; )
    e[s] = t[s];
  return e;
}, Wi = /* @__PURE__ */ ((t) => (s) => t && s instanceof t)(typeof Uint8Array < "u" && Wt(Uint8Array)), Vi = (t, s) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const i = n.value;
    s.call(t, i[0], i[1]);
  }
}, Hi = (t, s) => {
  let e;
  const r = [];
  for (; (e = t.exec(s)) !== null; )
    r.push(e);
  return r;
}, qi = Y("HTMLFormElement"), Gi = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, n) {
    return r.toUpperCase() + n;
  }
), Or = (({ hasOwnProperty: t }) => (s, e) => t.call(s, e))(Object.prototype), Yi = Y("RegExp"), xs = (t, s) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  ke(e, (n, i) => {
    let o;
    (o = s(n, i, t)) !== !1 && (r[i] = o || n);
  }), Object.defineProperties(t, r);
}, Ji = (t) => {
  xs(t, (s, e) => {
    if (q(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (q(r)) {
      if (s.enumerable = !1, "writable" in s) {
        s.writable = !1;
        return;
      }
      s.set || (s.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, Ki = (t, s) => {
  const e = {}, r = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return me(t) ? r(t) : r(String(t).split(s)), e;
}, Xi = () => {
}, Zi = (t, s) => t != null && Number.isFinite(t = +t) ? t : s, ut = "abcdefghijklmnopqrstuvwxyz", _r = "0123456789", vs = {
  DIGIT: _r,
  ALPHA: ut,
  ALPHA_DIGIT: ut + ut.toUpperCase() + _r
}, Qi = (t = 16, s = vs.ALPHA_DIGIT) => {
  let e = "";
  const { length: r } = s;
  for (; t--; )
    e += s[Math.random() * r | 0];
  return e;
};
function ea(t) {
  return !!(t && q(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const ta = (t) => {
  const s = new Array(10), e = (r, n) => {
    if (Ge(r)) {
      if (s.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        s[n] = r;
        const i = me(r) ? [] : {};
        return ke(r, (o, l) => {
          const u = e(o, n + 1);
          !Ne(u) && (i[l] = u);
        }), s[n] = void 0, i;
      }
    }
    return r;
  };
  return e(t, 0);
}, ra = Y("AsyncFunction"), sa = (t) => t && (Ge(t) || q(t)) && q(t.then) && q(t.catch), m = {
  isArray: me,
  isArrayBuffer: hs,
  isBuffer: bi,
  isFormData: _i,
  isArrayBufferView: Ei,
  isString: Ci,
  isNumber: fs,
  isBoolean: Ni,
  isObject: Ge,
  isPlainObject: Ie,
  isReadableStream: Ai,
  isRequest: Li,
  isResponse: Pi,
  isHeaders: Di,
  isUndefined: Ne,
  isDate: Si,
  isFile: ji,
  isBlob: Ri,
  isRegExp: Yi,
  isFunction: q,
  isStream: Oi,
  isURLSearchParams: Ti,
  isTypedArray: Wi,
  isFileList: ki,
  forEach: ke,
  merge: Ct,
  extend: Ii,
  trim: Mi,
  stripBOM: Fi,
  inherits: Bi,
  toFlatObject: Ui,
  kindOf: He,
  kindOfTest: Y,
  endsWith: $i,
  toArray: zi,
  forEachEntry: Vi,
  matchAll: Hi,
  isHTMLForm: qi,
  hasOwnProperty: Or,
  hasOwnProp: Or,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xs,
  freezeMethods: Ji,
  toObjectSet: Ki,
  toCamelCase: Gi,
  noop: Xi,
  toFiniteNumber: Zi,
  findKey: ps,
  global: ms,
  isContextDefined: gs,
  ALPHABET: vs,
  generateString: Qi,
  isSpecCompliantForm: ea,
  toJSONObject: ta,
  isAsyncFn: ra,
  isThenable: sa
};
function S(t, s, e, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", s && (this.code = s), e && (this.config = e), r && (this.request = r), n && (this.response = n);
}
m.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: m.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ws = S.prototype, ys = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  ys[t] = { value: t };
});
Object.defineProperties(S, ys);
Object.defineProperty(ws, "isAxiosError", { value: !0 });
S.from = (t, s, e, r, n, i) => {
  const o = Object.create(ws);
  return m.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), S.call(o, t.message, s, e, r, n), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const na = null;
function Nt(t) {
  return m.isPlainObject(t) || m.isArray(t);
}
function bs(t) {
  return m.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Tr(t, s, e) {
  return t ? t.concat(s).map(function(n, i) {
    return n = bs(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : s;
}
function ia(t) {
  return m.isArray(t) && !t.some(Nt);
}
const aa = m.toFlatObject(m, {}, null, function(s) {
  return /^is[A-Z]/.test(s);
});
function Ye(t, s, e) {
  if (!m.isObject(t))
    throw new TypeError("target must be an object");
  s = s || new FormData(), e = m.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, O) {
    return !m.isUndefined(O[b]);
  });
  const r = e.metaTokens, n = e.visitor || d, i = e.dots, o = e.indexes, u = (e.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(s);
  if (!m.isFunction(n))
    throw new TypeError("visitor must be a function");
  function h(g) {
    if (g === null) return "";
    if (m.isDate(g))
      return g.toISOString();
    if (!u && m.isBlob(g))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(g) || m.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, b, O) {
    let T = g;
    if (g && !O && typeof g == "object") {
      if (m.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), g = JSON.stringify(g);
      else if (m.isArray(g) && ia(g) || (m.isFileList(g) || m.endsWith(b, "[]")) && (T = m.toArray(g)))
        return b = bs(b), T.forEach(function(_, Z) {
          !(m.isUndefined(_) || _ === null) && s.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Tr([b], Z, i) : o === null ? b : b + "[]",
            h(_)
          );
        }), !1;
    }
    return Nt(g) ? !0 : (s.append(Tr(O, b, i), h(g)), !1);
  }
  const f = [], y = Object.assign(aa, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: Nt
  });
  function x(g, b) {
    if (!m.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      f.push(g), m.forEach(g, function(T, j) {
        (!(m.isUndefined(T) || T === null) && n.call(
          s,
          T,
          m.isString(j) ? j.trim() : j,
          b,
          y
        )) === !0 && x(T, b ? b.concat(j) : [j]);
      }), f.pop();
    }
  }
  if (!m.isObject(t))
    throw new TypeError("data must be an object");
  return x(t), s;
}
function Ar(t) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return s[r];
  });
}
function Vt(t, s) {
  this._pairs = [], t && Ye(t, this, s);
}
const Es = Vt.prototype;
Es.append = function(s, e) {
  this._pairs.push([s, e]);
};
Es.toString = function(s) {
  const e = s ? function(r) {
    return s.call(this, r, Ar);
  } : Ar;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function oa(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cs(t, s, e) {
  if (!s)
    return t;
  const r = e && e.encode || oa, n = e && e.serialize;
  let i;
  if (n ? i = n(s, e) : i = m.isURLSearchParams(s) ? s.toString() : new Vt(s, e).toString(r), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Lr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(s, e, r) {
    return this.handlers.push({
      fulfilled: s,
      rejected: e,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(s) {
    m.forEach(this.handlers, function(r) {
      r !== null && s(r);
    });
  }
}
const Ns = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, la = typeof URLSearchParams < "u" ? URLSearchParams : Vt, ca = typeof FormData < "u" ? FormData : null, da = typeof Blob < "u" ? Blob : null, ua = {
  isBrowser: !0,
  classes: {
    URLSearchParams: la,
    FormData: ca,
    Blob: da
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ht = typeof window < "u" && typeof document < "u", ha = ((t) => Ht && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), fa = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pa = Ht && window.location.href || "http://localhost", ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ht,
  hasStandardBrowserEnv: ha,
  hasStandardBrowserWebWorkerEnv: fa,
  origin: pa
}, Symbol.toStringTag, { value: "Module" })), G = {
  ...ma,
  ...ua
};
function ga(t, s) {
  return Ye(t, new G.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, n, i) {
      return G.isNode && m.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, s));
}
function xa(t) {
  return m.matchAll(/\w+|\[(\w*)]/g, t).map((s) => s[0] === "[]" ? "" : s[1] || s[0]);
}
function va(t) {
  const s = {}, e = Object.keys(t);
  let r;
  const n = e.length;
  let i;
  for (r = 0; r < n; r++)
    i = e[r], s[i] = t[i];
  return s;
}
function Ss(t) {
  function s(e, r, n, i) {
    let o = e[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), u = i >= e.length;
    return o = !o && m.isArray(n) ? n.length : o, u ? (m.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !l) : ((!n[o] || !m.isObject(n[o])) && (n[o] = []), s(e, r, n[o], i) && m.isArray(n[o]) && (n[o] = va(n[o])), !l);
  }
  if (m.isFormData(t) && m.isFunction(t.entries)) {
    const e = {};
    return m.forEachEntry(t, (r, n) => {
      s(xa(r), n, e, 0);
    }), e;
  }
  return null;
}
function wa(t, s, e) {
  if (m.isString(t))
    try {
      return (s || JSON.parse)(t), m.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(t);
}
const Oe = {
  transitional: Ns,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(s, e) {
    const r = e.getContentType() || "", n = r.indexOf("application/json") > -1, i = m.isObject(s);
    if (i && m.isHTMLForm(s) && (s = new FormData(s)), m.isFormData(s))
      return n ? JSON.stringify(Ss(s)) : s;
    if (m.isArrayBuffer(s) || m.isBuffer(s) || m.isStream(s) || m.isFile(s) || m.isBlob(s) || m.isReadableStream(s))
      return s;
    if (m.isArrayBufferView(s))
      return s.buffer;
    if (m.isURLSearchParams(s))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), s.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ga(s, this.formSerializer).toString();
      if ((l = m.isFileList(s)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ye(
          l ? { "files[]": s } : s,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || n ? (e.setContentType("application/json", !1), wa(s)) : s;
  }],
  transformResponse: [function(s) {
    const e = this.transitional || Oe.transitional, r = e && e.forcedJSONParsing, n = this.responseType === "json";
    if (m.isResponse(s) || m.isReadableStream(s))
      return s;
    if (s && m.isString(s) && (r && !this.responseType || n)) {
      const o = !(e && e.silentJSONParsing) && n;
      try {
        return JSON.parse(s);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? S.from(l, S.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return s;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: G.classes.FormData,
    Blob: G.classes.Blob
  },
  validateStatus: function(s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Oe.headers[t] = {};
});
const ya = m.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ba = (t) => {
  const s = {};
  let e, r, n;
  return t && t.split(`
`).forEach(function(o) {
    n = o.indexOf(":"), e = o.substring(0, n).trim().toLowerCase(), r = o.substring(n + 1).trim(), !(!e || s[e] && ya[e]) && (e === "set-cookie" ? s[e] ? s[e].push(r) : s[e] = [r] : s[e] = s[e] ? s[e] + ", " + r : r);
  }), s;
}, Pr = Symbol("internals");
function Ee(t) {
  return t && String(t).trim().toLowerCase();
}
function Fe(t) {
  return t === !1 || t == null ? t : m.isArray(t) ? t.map(Fe) : String(t);
}
function Ea(t) {
  const s = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(t); )
    s[r[1]] = r[2];
  return s;
}
const Ca = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ht(t, s, e, r, n) {
  if (m.isFunction(r))
    return r.call(this, s, e);
  if (n && (s = e), !!m.isString(s)) {
    if (m.isString(r))
      return s.indexOf(r) !== -1;
    if (m.isRegExp(r))
      return r.test(s);
  }
}
function Na(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (s, e, r) => e.toUpperCase() + r);
}
function Sa(t, s) {
  const e = m.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + e, {
      value: function(n, i, o) {
        return this[r].call(this, s, n, i, o);
      },
      configurable: !0
    });
  });
}
class $ {
  constructor(s) {
    s && this.set(s);
  }
  set(s, e, r) {
    const n = this;
    function i(l, u, h) {
      const d = Ee(u);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = m.findKey(n, d);
      (!f || n[f] === void 0 || h === !0 || h === void 0 && n[f] !== !1) && (n[f || u] = Fe(l));
    }
    const o = (l, u) => m.forEach(l, (h, d) => i(h, d, u));
    if (m.isPlainObject(s) || s instanceof this.constructor)
      o(s, e);
    else if (m.isString(s) && (s = s.trim()) && !Ca(s))
      o(ba(s), e);
    else if (m.isHeaders(s))
      for (const [l, u] of s.entries())
        i(u, l, r);
    else
      s != null && i(e, s, r);
    return this;
  }
  get(s, e) {
    if (s = Ee(s), s) {
      const r = m.findKey(this, s);
      if (r) {
        const n = this[r];
        if (!e)
          return n;
        if (e === !0)
          return Ea(n);
        if (m.isFunction(e))
          return e.call(this, n, r);
        if (m.isRegExp(e))
          return e.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, e) {
    if (s = Ee(s), s) {
      const r = m.findKey(this, s);
      return !!(r && this[r] !== void 0 && (!e || ht(this, this[r], r, e)));
    }
    return !1;
  }
  delete(s, e) {
    const r = this;
    let n = !1;
    function i(o) {
      if (o = Ee(o), o) {
        const l = m.findKey(r, o);
        l && (!e || ht(r, r[l], l, e)) && (delete r[l], n = !0);
      }
    }
    return m.isArray(s) ? s.forEach(i) : i(s), n;
  }
  clear(s) {
    const e = Object.keys(this);
    let r = e.length, n = !1;
    for (; r--; ) {
      const i = e[r];
      (!s || ht(this, this[i], i, s, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(s) {
    const e = this, r = {};
    return m.forEach(this, (n, i) => {
      const o = m.findKey(r, i);
      if (o) {
        e[o] = Fe(n), delete e[i];
        return;
      }
      const l = s ? Na(i) : String(i).trim();
      l !== i && delete e[i], e[l] = Fe(n), r[l] = !0;
    }), this;
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const e = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (r, n) => {
      r != null && r !== !1 && (e[n] = s && m.isArray(r) ? r.join(", ") : r);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, e]) => s + ": " + e).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...e) {
    const r = new this(s);
    return e.forEach((n) => r.set(n)), r;
  }
  static accessor(s) {
    const r = (this[Pr] = this[Pr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(o) {
      const l = Ee(o);
      r[l] || (Sa(n, o), r[l] = !0);
    }
    return m.isArray(s) ? s.forEach(i) : i(s), this;
  }
}
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.reduceDescriptors($.prototype, ({ value: t }, s) => {
  let e = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
m.freezeMethods($);
function ft(t, s) {
  const e = this || Oe, r = s || e, n = $.from(r.headers);
  let i = r.data;
  return m.forEach(t, function(l) {
    i = l.call(e, i, n.normalize(), s ? s.status : void 0);
  }), n.normalize(), i;
}
function js(t) {
  return !!(t && t.__CANCEL__);
}
function ge(t, s, e) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, s, e), this.name = "CanceledError";
}
m.inherits(ge, S, {
  __CANCEL__: !0
});
function Rs(t, s, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? t(e) : s(new S(
    "Request failed with status code " + e.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function ja(t) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return s && s[1] || "";
}
function Ra(t, s) {
  t = t || 10;
  const e = new Array(t), r = new Array(t);
  let n = 0, i = 0, o;
  return s = s !== void 0 ? s : 1e3, function(u) {
    const h = Date.now(), d = r[i];
    o || (o = h), e[n] = u, r[n] = h;
    let f = i, y = 0;
    for (; f !== n; )
      y += e[f++], f = f % t;
    if (n = (n + 1) % t, n === i && (i = (i + 1) % t), h - o < s)
      return;
    const x = d && h - d;
    return x ? Math.round(y * 1e3 / x) : void 0;
  };
}
function ka(t, s) {
  let e = 0;
  const r = 1e3 / s;
  let n = null;
  return function() {
    const o = this === !0, l = Date.now();
    if (o || l - e > r)
      return n && (clearTimeout(n), n = null), e = l, t.apply(null, arguments);
    n || (n = setTimeout(() => (n = null, e = Date.now(), t.apply(null, arguments)), r - (l - e)));
  };
}
const ze = (t, s, e = 3) => {
  let r = 0;
  const n = Ra(50, 250);
  return ka((i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, u = o - r, h = n(u), d = o <= l;
    r = o;
    const f = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: u,
      rate: h || void 0,
      estimated: h && l && d ? (l - o) / h : void 0,
      event: i,
      lengthComputable: l != null
    };
    f[s ? "download" : "upload"] = !0, t(f);
  }, e);
}, Oa = G.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const s = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");
    let r;
    function n(i) {
      let o = i;
      return s && (e.setAttribute("href", o), o = e.href), e.setAttribute("href", o), {
        href: e.href,
        protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
        host: e.host,
        search: e.search ? e.search.replace(/^\?/, "") : "",
        hash: e.hash ? e.hash.replace(/^#/, "") : "",
        hostname: e.hostname,
        port: e.port,
        pathname: e.pathname.charAt(0) === "/" ? e.pathname : "/" + e.pathname
      };
    }
    return r = n(window.location.href), function(o) {
      const l = m.isString(o) ? n(o) : o;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), _a = G.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, s, e, r, n, i) {
      const o = [t + "=" + encodeURIComponent(s)];
      m.isNumber(e) && o.push("expires=" + new Date(e).toGMTString()), m.isString(r) && o.push("path=" + r), m.isString(n) && o.push("domain=" + n), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ta(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Aa(t, s) {
  return s ? t.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : t;
}
function ks(t, s) {
  return t && !Ta(s) ? Aa(t, s) : s;
}
const Dr = (t) => t instanceof $ ? { ...t } : t;
function ae(t, s) {
  s = s || {};
  const e = {};
  function r(h, d, f) {
    return m.isPlainObject(h) && m.isPlainObject(d) ? m.merge.call({ caseless: f }, h, d) : m.isPlainObject(d) ? m.merge({}, d) : m.isArray(d) ? d.slice() : d;
  }
  function n(h, d, f) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(h))
        return r(void 0, h, f);
    } else return r(h, d, f);
  }
  function i(h, d) {
    if (!m.isUndefined(d))
      return r(void 0, d);
  }
  function o(h, d) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(h))
        return r(void 0, h);
    } else return r(void 0, d);
  }
  function l(h, d, f) {
    if (f in s)
      return r(h, d);
    if (f in t)
      return r(void 0, h);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (h, d) => n(Dr(h), Dr(d), !0)
  };
  return m.forEach(Object.keys(Object.assign({}, t, s)), function(d) {
    const f = u[d] || n, y = f(t[d], s[d], d);
    m.isUndefined(y) && f !== l || (e[d] = y);
  }), e;
}
const Os = (t) => {
  const s = ae({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: n, xsrfCookieName: i, headers: o, auth: l } = s;
  s.headers = o = $.from(o), s.url = Cs(ks(s.baseURL, s.url), t.params, t.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let u;
  if (m.isFormData(e)) {
    if (G.hasStandardBrowserEnv || G.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [h, ...d] = u ? u.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([h || "multipart/form-data", ...d].join("; "));
    }
  }
  if (G.hasStandardBrowserEnv && (r && m.isFunction(r) && (r = r(s)), r || r !== !1 && Oa(s.url))) {
    const h = n && i && _a.read(i);
    h && o.set(n, h);
  }
  return s;
}, La = typeof XMLHttpRequest < "u", Pa = La && function(t) {
  return new Promise(function(e, r) {
    const n = Os(t);
    let i = n.data;
    const o = $.from(n.headers).normalize();
    let { responseType: l } = n, u;
    function h() {
      n.cancelToken && n.cancelToken.unsubscribe(u), n.signal && n.signal.removeEventListener("abort", u);
    }
    let d = new XMLHttpRequest();
    d.open(n.method.toUpperCase(), n.url, !0), d.timeout = n.timeout;
    function f() {
      if (!d)
        return;
      const x = $.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), b = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: x,
        config: t,
        request: d
      };
      Rs(function(T) {
        e(T), h();
      }, function(T) {
        r(T), h();
      }, b), d = null;
    }
    "onloadend" in d ? d.onloadend = f : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, d.onabort = function() {
      d && (r(new S("Request aborted", S.ECONNABORTED, n, d)), d = null);
    }, d.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, n, d)), d = null;
    }, d.ontimeout = function() {
      let g = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const b = n.transitional || Ns;
      n.timeoutErrorMessage && (g = n.timeoutErrorMessage), r(new S(
        g,
        b.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        n,
        d
      )), d = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in d && m.forEach(o.toJSON(), function(g, b) {
      d.setRequestHeader(b, g);
    }), m.isUndefined(n.withCredentials) || (d.withCredentials = !!n.withCredentials), l && l !== "json" && (d.responseType = n.responseType), typeof n.onDownloadProgress == "function" && d.addEventListener("progress", ze(n.onDownloadProgress, !0)), typeof n.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", ze(n.onUploadProgress)), (n.cancelToken || n.signal) && (u = (x) => {
      d && (r(!x || x.type ? new ge(null, t, d) : x), d.abort(), d = null);
    }, n.cancelToken && n.cancelToken.subscribe(u), n.signal && (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
    const y = ja(n.url);
    if (y && G.protocols.indexOf(y) === -1) {
      r(new S("Unsupported protocol " + y + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(i || null);
  });
}, Da = (t, s) => {
  let e = new AbortController(), r;
  const n = function(u) {
    if (!r) {
      r = !0, o();
      const h = u instanceof Error ? u : this.reason;
      e.abort(h instanceof S ? h : new ge(h instanceof Error ? h.message : h));
    }
  };
  let i = s && setTimeout(() => {
    n(new S(`timeout ${s} of ms exceeded`, S.ETIMEDOUT));
  }, s);
  const o = () => {
    t && (i && clearTimeout(i), i = null, t.forEach((u) => {
      u && (u.removeEventListener ? u.removeEventListener("abort", n) : u.unsubscribe(n));
    }), t = null);
  };
  t.forEach((u) => u && u.addEventListener && u.addEventListener("abort", n));
  const { signal: l } = e;
  return l.unsubscribe = o, [l, () => {
    i && clearTimeout(i), i = null;
  }];
}, Ma = function* (t, s) {
  let e = t.byteLength;
  if (!s || e < s) {
    yield t;
    return;
  }
  let r = 0, n;
  for (; r < e; )
    n = r + s, yield t.slice(r, n), r = n;
}, Ia = async function* (t, s, e) {
  for await (const r of t)
    yield* Ma(ArrayBuffer.isView(r) ? r : await e(String(r)), s);
}, Mr = (t, s, e, r, n) => {
  const i = Ia(t, s, n);
  let o = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(l) {
      const { done: u, value: h } = await i.next();
      if (u) {
        l.close(), r();
        return;
      }
      let d = h.byteLength;
      e && e(o += d), l.enqueue(new Uint8Array(h));
    },
    cancel(l) {
      return r(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ir = (t, s) => {
  const e = t != null;
  return (r) => setTimeout(() => s({
    lengthComputable: e,
    total: t,
    loaded: r
  }));
}, Je = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _s = Je && typeof ReadableStream == "function", St = Je && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (s) => t.encode(s))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Fa = _s && (() => {
  let t = !1;
  const s = new Request(G.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !s;
})(), Fr = 64 * 1024, jt = _s && !!(() => {
  try {
    return m.isReadableStream(new Response("").body);
  } catch {
  }
})(), We = {
  stream: jt && ((t) => t.body)
};
Je && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((s) => {
    !We[s] && (We[s] = m.isFunction(t[s]) ? (e) => e[s]() : (e, r) => {
      throw new S(`Response type '${s}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ba = async (t) => {
  if (t == null)
    return 0;
  if (m.isBlob(t))
    return t.size;
  if (m.isSpecCompliantForm(t))
    return (await new Request(t).arrayBuffer()).byteLength;
  if (m.isArrayBufferView(t))
    return t.byteLength;
  if (m.isURLSearchParams(t) && (t = t + ""), m.isString(t))
    return (await St(t)).byteLength;
}, Ua = async (t, s) => {
  const e = m.toFiniteNumber(t.getContentLength());
  return e ?? Ba(s);
}, $a = Je && (async (t) => {
  let {
    url: s,
    method: e,
    data: r,
    signal: n,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: l,
    onUploadProgress: u,
    responseType: h,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: y
  } = Os(t);
  h = h ? (h + "").toLowerCase() : "text";
  let [x, g] = n || i || o ? Da([n, i], o) : [], b, O;
  const T = () => {
    !b && setTimeout(() => {
      x && x.unsubscribe();
    }), b = !0;
  };
  let j;
  try {
    if (u && Fa && e !== "get" && e !== "head" && (j = await Ua(d, r)) !== 0) {
      let J = new Request(s, {
        method: "POST",
        body: r,
        duplex: "half"
      }), ee;
      m.isFormData(r) && (ee = J.headers.get("content-type")) && d.setContentType(ee), J.body && (r = Mr(J.body, Fr, Ir(
        j,
        ze(u)
      ), null, St));
    }
    m.isString(f) || (f = f ? "cors" : "omit"), O = new Request(s, {
      ...y,
      signal: x,
      method: e.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: f
    });
    let _ = await fetch(O);
    const Z = jt && (h === "stream" || h === "response");
    if (jt && (l || Z)) {
      const J = {};
      ["status", "statusText", "headers"].forEach((Te) => {
        J[Te] = _[Te];
      });
      const ee = m.toFiniteNumber(_.headers.get("content-length"));
      _ = new Response(
        Mr(_.body, Fr, l && Ir(
          ee,
          ze(l, !0)
        ), Z && T, St),
        J
      );
    }
    h = h || "text";
    let le = await We[m.findKey(We, h) || "text"](_, t);
    return !Z && T(), g && g(), await new Promise((J, ee) => {
      Rs(J, ee, {
        data: le,
        headers: $.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: t,
        request: O
      });
    });
  } catch (_) {
    throw T(), _ && _.name === "TypeError" && /fetch/i.test(_.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, O),
      {
        cause: _.cause || _
      }
    ) : S.from(_, _ && _.code, t, O);
  }
}), Rt = {
  http: na,
  xhr: Pa,
  fetch: $a
};
m.forEach(Rt, (t, s) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: s });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: s });
  }
});
const Br = (t) => `- ${t}`, za = (t) => m.isFunction(t) || t === null || t === !1, Ts = {
  getAdapter: (t) => {
    t = m.isArray(t) ? t : [t];
    const { length: s } = t;
    let e, r;
    const n = {};
    for (let i = 0; i < s; i++) {
      e = t[i];
      let o;
      if (r = e, !za(e) && (r = Rt[(o = String(e)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${o}'`);
      if (r)
        break;
      n[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(n).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = s ? i.length > 1 ? `since :
` + i.map(Br).join(`
`) : " " + Br(i[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Rt
};
function pt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ge(null, t);
}
function Ur(t) {
  return pt(t), t.headers = $.from(t.headers), t.data = ft.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ts.getAdapter(t.adapter || Oe.adapter)(t).then(function(r) {
    return pt(t), r.data = ft.call(
      t,
      t.transformResponse,
      r
    ), r.headers = $.from(r.headers), r;
  }, function(r) {
    return js(r) || (pt(t), r && r.response && (r.response.data = ft.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = $.from(r.response.headers))), Promise.reject(r);
  });
}
const As = "1.7.2", qt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, s) => {
  qt[t] = function(r) {
    return typeof r === t || "a" + (s < 1 ? "n " : " ") + t;
  };
});
const $r = {};
qt.transitional = function(s, e, r) {
  function n(i, o) {
    return "[Axios v" + As + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (s === !1)
      throw new S(
        n(o, " has been removed" + (e ? " in " + e : "")),
        S.ERR_DEPRECATED
      );
    return e && !$r[o] && ($r[o] = !0, console.warn(
      n(
        o,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), s ? s(i, o, l) : !0;
  };
};
function Wa(t, s, e) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let n = r.length;
  for (; n-- > 0; ) {
    const i = r[n], o = s[i];
    if (o) {
      const l = t[i], u = l === void 0 || o(l, i, t);
      if (u !== !0)
        throw new S("option " + i + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const kt = {
  assertOptions: Wa,
  validators: qt
}, te = kt.validators;
class ie {
  constructor(s) {
    this.defaults = s, this.interceptors = {
      request: new Lr(),
      response: new Lr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(s, e) {
    try {
      return await this._request(s, e);
    } catch (r) {
      if (r instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(s, e) {
    typeof s == "string" ? (e = e || {}, e.url = s) : e = s || {}, e = ae(this.defaults, e);
    const { transitional: r, paramsSerializer: n, headers: i } = e;
    r !== void 0 && kt.assertOptions(r, {
      silentJSONParsing: te.transitional(te.boolean),
      forcedJSONParsing: te.transitional(te.boolean),
      clarifyTimeoutError: te.transitional(te.boolean)
    }, !1), n != null && (m.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : kt.assertOptions(n, {
      encode: te.function,
      serialize: te.function
    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let o = i && m.merge(
      i.common,
      i[e.method]
    );
    i && m.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), e.headers = $.concat(o, i);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(e) === !1 || (u = u && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(b) {
      h.push(b.fulfilled, b.rejected);
    });
    let d, f = 0, y;
    if (!u) {
      const g = [Ur.bind(this), void 0];
      for (g.unshift.apply(g, l), g.push.apply(g, h), y = g.length, d = Promise.resolve(e); f < y; )
        d = d.then(g[f++], g[f++]);
      return d;
    }
    y = l.length;
    let x = e;
    for (f = 0; f < y; ) {
      const g = l[f++], b = l[f++];
      try {
        x = g(x);
      } catch (O) {
        b.call(this, O);
        break;
      }
    }
    try {
      d = Ur.call(this, x);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, y = h.length; f < y; )
      d = d.then(h[f++], h[f++]);
    return d;
  }
  getUri(s) {
    s = ae(this.defaults, s);
    const e = ks(s.baseURL, s.url);
    return Cs(e, s.params, s.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function(s) {
  ie.prototype[s] = function(e, r) {
    return this.request(ae(r || {}, {
      method: s,
      url: e,
      data: (r || {}).data
    }));
  };
});
m.forEach(["post", "put", "patch"], function(s) {
  function e(r) {
    return function(i, o, l) {
      return this.request(ae(l || {}, {
        method: s,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  ie.prototype[s] = e(), ie.prototype[s + "Form"] = e(!0);
});
class Gt {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(i) {
      e = i;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(n);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, s(function(i, o, l) {
      r.reason || (r.reason = new ge(i, o, l), e(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(s) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(s);
    e !== -1 && this._listeners.splice(e, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let s;
    return {
      token: new Gt(function(n) {
        s = n;
      }),
      cancel: s
    };
  }
}
function Va(t) {
  return function(e) {
    return t.apply(null, e);
  };
}
function Ha(t) {
  return m.isObject(t) && t.isAxiosError === !0;
}
const Ot = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ot).forEach(([t, s]) => {
  Ot[s] = t;
});
function Ls(t) {
  const s = new ie(t), e = us(ie.prototype.request, s);
  return m.extend(e, ie.prototype, s, { allOwnKeys: !0 }), m.extend(e, s, null, { allOwnKeys: !0 }), e.create = function(n) {
    return Ls(ae(t, n));
  }, e;
}
const P = Ls(Oe);
P.Axios = ie;
P.CanceledError = ge;
P.CancelToken = Gt;
P.isCancel = js;
P.VERSION = As;
P.toFormData = Ye;
P.AxiosError = S;
P.Cancel = P.CanceledError;
P.all = function(s) {
  return Promise.all(s);
};
P.spread = Va;
P.isAxiosError = Ha;
P.mergeConfig = ae;
P.AxiosHeaders = $;
P.formToJSON = (t) => Ss(m.isHTMLForm(t) ? new FormData(t) : t);
P.getAdapter = Ts.getAdapter;
P.HttpStatusCode = Ot;
P.default = P;
class qa {
  constructor() {
  }
  logout() {
    this.clear();
  }
  logoutApplication() {
    localStorage.removeItem("a_token"), localStorage.removeItem("app_req");
  }
  clearList(s, e) {
    try {
      s && s.length > 0 && s.forEach((r) => {
        localStorage.removeItem(r.key);
      }), e(!0);
    } catch {
      e(!1);
    }
  }
  get(s) {
    return localStorage.getItem(s);
  }
  saveList(s, e) {
    try {
      s && s.length > 0 && s.forEach((r) => {
        localStorage.setItem(r.key, r.value.toString());
      }), e(!0);
    } catch {
      e(!1);
    }
  }
  clear() {
    localStorage.clear();
  }
  remove(s) {
    localStorage.removeItem(s);
  }
  save(s, e) {
    localStorage.setItem(s, e);
  }
  getCookie(s) {
    let e = null;
    if (document.cookie && document.cookie !== "") {
      const r = document.cookie.split(";");
      for (let n = 0; n < r.length; n++) {
        const i = r[n].trim();
        if (i.substring(0, s.length + 1) === s + "=") {
          e = decodeURIComponent(i.substring(s.length + 1));
          break;
        }
      }
    }
    return e;
  }
}
const W = new qa(), mt = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd"
}, Ke = ({
  children: t,
  onClickOutside: s,
  focusEvent: e = "focusin",
  mouseEvent: r = "click",
  touchEvent: n = "touchend"
}) => {
  const i = lt(null), o = lt(null), l = lt(!1);
  br(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = (x) => (g) => {
    o.current = g.target;
    const b = t == null ? void 0 : t.props[x];
    b && b(g);
  }, h = (x) => {
    i.current = x;
    let { ref: g } = t;
    typeof g == "function" ? g(x) : g && (g.current = x);
  };
  br(() => {
    var b;
    const x = ((b = i.current) == null ? void 0 : b.ownerDocument) ?? document, g = (O) => {
      l.current && (i.current && i.current.contains(O.target) || o.current === O.target || !x.contains(O.target) || s(O));
    };
    return x.addEventListener(r, g), x.addEventListener(n, g), x.addEventListener(e, g), () => {
      x.removeEventListener(r, g), x.removeEventListener(n, g), x.removeEventListener(e, g);
    };
  }, [e, r, s, n]);
  const d = mt[r], f = mt[n], y = mt[e];
  return X.Children.only(
    _n(t, {
      ref: h,
      [y]: u(y),
      [d]: u(d),
      [f]: u(f)
    })
  );
};
Ke.displayName = "DesmyClickOutsideListener";
class Ps extends F {
  constructor(e) {
    super(e);
    p(this, "popoverDropdownRef");
    p(this, "btnDropdownRef");
    p(this, "searchRef");
    p(this, "handleChange", (e) => {
      const r = { ...this.state.input };
      r[e.target.name] = e.target.value, this.setState({
        input: r
      });
    });
    p(this, "handleRequestData", () => {
      const e = this.props.request;
      if (e !== void 0 && !w.isEmptyOrNull(e.url) && this.state.requestUrl !== e.url) {
        this.setState({ requestUrl: e.url, isLoading: !0 }, this.fetch);
        return;
      }
    });
    p(this, "handleSelectedMultiple", async (e) => {
      try {
        const { data: r } = this.props;
        return !r || !Array.isArray(e) ? [] : e.map((i) => i.id !== void 0 ? i : i.id === void 0 ? void 0 : i.find((l) => l.id === this.handleEncrypt(i))).filter((i) => i !== void 0);
      } catch {
        return [];
      }
    });
    p(this, "handleDefault", async () => {
      try {
        const e = this.props.data !== void 0 && this.props.data !== null ? this.props.data : this.state.datalist;
        if (e.length > 0 && this.props.defaultValue !== void 0 && this.props.defaultValue !== null)
          if (!(this.props.is_multiple === void 0 || this.props.is_multiple === !1)) {
            const n = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue], i = e.filter(
              (o) => n.some((l) => (l == null ? void 0 : l.id) === o.id || w.toString(l) === w.toString(o.id))
            );
            i !== void 0 && this.props.handleChange !== void 0 && this.setState({ selectedMultiple: i, hasLoaded: !0 }, () => {
              this.props.handleChange !== void 0 && this.props.handleChange(i);
            });
          } else {
            const n = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue, i = e.find((o) => {
              if (typeof n == "object" && n !== null) {
                if (w.toString(o.id).toLowerCase() === w.toString(n == null ? void 0 : n.id).toLowerCase())
                  return o;
              } else if (w.toString(o.id).toLowerCase() === w.toString(n).toLowerCase() || w.toString(o.name).toLowerCase() === w.toString(n).toLowerCase())
                return o;
            });
            if (i !== void 0 && this.props.handleChange !== void 0) {
              const o = this.handleEncrypt(i == null ? void 0 : i.id), l = {
                selectedList: {
                  id: w.isEmptyOrNull(o) ? i == null ? void 0 : i.id : o,
                  name: i == null ? void 0 : i.name,
                  icon: i == null ? void 0 : i.icon,
                  data: i == null ? void 0 : i.data
                },
                hasLoaded: !0
              };
              this.setState(l, () => {
                this.props.handleChange !== void 0 && this.props.handleChange(l.selectedList);
              });
            }
          }
      } catch {
      }
    });
    p(this, "handleEncrypt", (e) => {
      if (this.props.enableDecrypt) {
        const r = w.toString(e);
        return w.isEmptyOrNull(r) ? e : r;
      } else
        return e;
    });
    p(this, "handleDelayedProcess", () => {
      setTimeout(() => {
        this.handleProcess();
      }, 1e3);
    });
    p(this, "handleProcess", () => {
      this.handleDefault();
    });
    p(this, "fetch", async () => {
      const { request: e } = this.props, { error: r } = this.state, n = e == null ? void 0 : e.token;
      r.state = !1, this.setState({ isLoading: !0, error: r });
      try {
        const o = (await P.get((e == null ? void 0 : e.url) ?? "", {
          headers: {
            "X-CSRFToken": `${W.getCookie("csrftoken")}`,
            Authorization: `Token ${n}`
          }
        })).data;
        if (o.success) {
          const l = o.data;
          this.setState({ datalist: l, isLoading: !1 }, this.handleDelayedProcess);
        } else
          this.handleError(o.message);
      } catch {
        this.handleError();
      }
    });
    p(this, "handleError", (e = "") => {
      try {
        const { error: r } = this.state, n = {
          ...r,
          state: !0,
          message: e
        };
        this.setState({ isLoading: !1, error: n });
      } catch (r) {
        console.error("Error occurred while handling error:", r);
      }
    });
    p(this, "onClear", () => {
      try {
        this.setState({
          selectedMultiple: [],
          selectedList: {
            id: "",
            name: null,
            icon: null,
            data: null
          }
        });
      } catch {
      }
    });
    p(this, "openDropdownPopover", () => {
      this.props.disabled !== void 0 && this.props.disabled || (new Ve(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
        placement: "bottom-start"
      }), this.setState({ dropdownPopoverShow: !0 }, () => {
        this.searchRef.current && this.searchRef.current.focus();
      }));
    });
    p(this, "removeItem", (e, r, n) => {
      if (n === void 0)
        return e;
      for (let i = 0; i < e.length; i++)
        if (e[i][r] === n) {
          e.splice(i, 1);
          break;
        }
      return e;
    });
    p(this, "handleSearch", (e, r) => {
      try {
        return e.find((n) => n.id === r);
      } catch {
        return !1;
      }
    });
    p(this, "handleSelectMessage", (e) => {
      try {
        return e == null ? "" : e.map((r) => this.handleEncrypt(r.name)).join(", ");
      } catch {
        return "";
      }
    });
    p(this, "deleteItems", (e) => this.state.selectedMultiple.filter((n) => n.id !== e));
    p(this, "handleSelectedItem", (e, r) => {
      e.preventDefault();
      const n = !(this.props.is_multiple === void 0 || this.props.is_multiple === !1);
      let { selectedMultiple: i } = this.state;
      n ? this.state.selectedMultiple.find((l) => l.id === r.id) ? (i = this.deleteItems(r.id), this.setState({ selectedMultiple: i, clear: !1, selectedAll: !1 }), this.props.handleChange && this.props.handleChange(i)) : (i.push(r), this.setState({ selectedMultiple: i, clear: !1, selectedAll: !1 }), this.props.handleChange && this.props.handleChange(i)) : this.setState({ selectedList: r, clear: !1, selectedAll: !1 }), this.props.handleDropdownChange !== void 0 ? this.props.handleDropdownChange(n ? i : r, this.props.type) : this.props.handleChange !== void 0 && this.props.handleChange(n ? i : r), n || this.closeDropdownPopover(), this.handleClearSearch();
    });
    p(this, "handleClearSearch", () => {
      const { input: e } = this.state;
      e.search = "", this.setState({ input: e, selectedAll: !1 });
    });
    p(this, "handleClickAway", () => {
      this.closeDropdownPopover();
    });
    p(this, "handleClear", () => {
      this.setState({ selectedMultiple: [], selectedList: { id: "", name: null, icon: null, data: null }, clear: !0 }, this.handleClickAway);
    });
    p(this, "handleSelectAll", () => {
      this.props.handleChange && this.props.handleChange(this.state.datalist), this.setState({ selectedAll: !0 }, this.handleClear);
    });
    p(this, "handleClearSelected", () => {
      const e = this.props.is_multiple !== void 0 && this.props.is_multiple ? [] : {};
      this.props.handleChange && this.props.handleChange(e), this.setState({ selectedAll: !1 }, this.handleClear);
    });
    p(this, "closeDropdownPopover", () => {
      this.setState({ dropdownPopoverShow: !1 });
    });
    this.popoverDropdownRef = X.createRef(), this.btnDropdownRef = X.createRef(), this.searchRef = X.createRef(), this.state = {
      dropdownPopoverShow: !1,
      selectedList: { id: "", name: null, icon: null, data: null },
      selectedMultiple: [],
      datalist: [],
      intervalId: 0,
      hasLoaded: !1,
      isLoading: !1,
      clear: !1,
      selectedAll: !1,
      requestUrl: "",
      bgColor: "dark:bg-darkDialogBackground",
      input: {
        search: ""
      },
      error: {
        state: !1,
        message: ""
      }
    };
  }
  componentDidUpdate(e, r) {
    if (r.isLoading, !w.isEmptyOrNull(this.props.defaultValue) && !this.state.hasLoaded && this.props.data !== void 0 && this.props.data !== null && this.handleDefault(), this.props.request !== void 0 && this.handleRequestData(), Array.isArray(e.selectedData))
      e.selectedData.length > 0 && this.state.selectedMultiple.length === 0 && !this.state.clear && this.handleSelectedMultiple(e.selectedData).then((n) => {
        this.setState({ selectedMultiple: n }), this.handleSelectedMultiple(n), this.props.handleChange && this.props.handleChange(n);
      }).catch((n) => {
      });
    else if (e.selectedData) {
      const n = [e.selectedData];
      this.setState({ selectedMultiple: n }), this.handleSelectedMultiple(n), this.props.handleChange && this.props.handleChange(n);
    }
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    const e = this.props.request;
    if (e !== void 0) {
      if (!w.isEmptyOrNull(e.url)) {
        this.setState({ isLoading: !0, requestUrl: e.url }, () => {
          this.fetch().then(() => {
          });
        });
        return;
      }
    } else
      this.handleDefault();
    const r = this.props.data || [];
    this.setState({ datalist: r }, () => {
      this.handleDelayedProcess();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(Ke, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ a.jsxs("div", { className: `flex flex-col w-full relative ${this.props.containerClassName != null ? this.props.containerClassName : "bg-white dark:bg-darkBackground"}`, children: [
      /* @__PURE__ */ a.jsx("div", { className: "relative w-full h-12 border font-poppinsRegular bg-inherit border-black  dark:border-white  ", children: /* @__PURE__ */ a.jsxs("div", { className: "relative h-full w-full text-sm bg-inherit", ref: this.btnDropdownRef, onClick: () => {
        this.state.dropdownPopoverShow ? this.closeDropdownPopover() : this.openDropdownPopover();
      }, children: [
        /* @__PURE__ */ a.jsx("div", { className: `absolute left-1.5  ${this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0 && this.state.selectedAll ? "-top-2.5  text-xs" : " text-sm top-2.5"} px-2 bg-inherit transition-all`, children: this.props.placeholder }),
        /* @__PURE__ */ a.jsx("div", { className: "flex relative h-12 cursor-pointer px-2 items-center w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ a.jsx("div", { className: `mr-2 bg-inherit text-black text-sm dark:text-white w-full justify-start text-start line-clamp-1  ${this.props.selectedRef}`, children: this.props.is_multiple != null && this.props.is_multiple && this.state.selectedMultiple.length > 0 ? this.handleSelectMessage(this.state.selectedMultiple) : w.isEmptyOrNull(this.state.selectedList.name) ? /* @__PURE__ */ a.jsx("div", { className: "w-full line-clamp-1", children: this.props.all !== void 0 && this.state.selectedAll ? `${this.props.all}` : "" }) : /* @__PURE__ */ a.jsxs("span", { className: `${w.isEmptyOrNull(this.state.selectedList.icon) ? "" : "flex"} w-full line-clamp-1 text-start justify-start`, title: `${this.handleEncrypt(this.state.selectedList.name)}`, children: [
            w.isEmptyOrNull(this.state.selectedList.icon) ? "" : /* @__PURE__ */ a.jsx("img", { className: "object-fill w-4 h-4 mr-2 items-center text-start justify-start", alt: "image", src: `${this.handleEncrypt(this.state.selectedList.icon)}` }),
            /* @__PURE__ */ a.jsx("div", { className: "w-full line-clamp-1 justify-start text-start text-s,", children: this.handleEncrypt(this.state.selectedList.name) })
          ] }) }),
          this.props.disabled !== void 0 && this.props.disabled ? null : /* @__PURE__ */ a.jsx("div", { children: this.state.dropdownPopoverShow ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", clipRule: "evenodd" }) }) : /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
        ] }) })
      ] }) }),
      this.props.data != null || this.props.request != null ? /* @__PURE__ */ a.jsx("div", { className: "bg-inherit", children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: this.popoverDropdownRef,
          className: (this.state.dropdownPopoverShow ? "inline-block " : "hidden ") + "absolute border-[1px] z-[800] border-gray-200 dark:border-gray-700 text-base w-96 float-left py-2 bg-inherit  text-white list-none text-left rounded shadow-lg mt-1 " + this.props.dropdownClass,
          style: { minWidth: "12rem" },
          children: [
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-between items-center text-black", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full relative z-0 mx-3 my-2 group border-b border-black dark:border-white", children: [
              /* @__PURE__ */ a.jsx("input", { type: "text", name: "search", autoFocus: !0, autoComplete: "off", ref: this.searchRef, value: this.state.input.search, onChange: this.handleChange, className: "block py-2.5 text-xs 2xl:text-sm px-0 bg-inherit w-full text-black bg- border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer", placeholder: " " }),
              /* @__PURE__ */ a.jsx("label", { htmlFor: "floating_search", className: "absolute text-sm text-black dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6", children: "Search here...." })
            ] }) }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full flex-col min-h-24 max-h-96 overflow-auto bg-inherit text-black dark:text-white", children: this.state.error.state && this.props.request !== void 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full text-red-500 justify-center items-center h-24", children: [
              /* @__PURE__ */ a.jsx("div", { className: "text-xs", children: this.state.error.message }),
              /* @__PURE__ */ a.jsx("div", { onClick: () => this.fetch(), className: "text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer", children: "Retry" })
            ] }) : this.state.isLoading && this.props.request !== void 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full justify-center items-center mt-5", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full justify-center items-center space-y-3", children: [
              /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline w-6 h-6  animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }),
              /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: "Loading..." })
            ] }) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full", children: [
              this.props.all !== void 0 && this.props.is_multiple && this.state.datalist.length != 0 ? /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} ${this.state.selectedAll ? " font-poppinsBold" : "font-normal"}  transition duration-500 ease-in-out`,
                  onClick: this.handleSelectAll,
                  children: [
                    /* @__PURE__ */ a.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                      "  ",
                      this.props.all
                    ] })
                  ]
                }
              ) : null,
              this.props.onClear !== void 0 ? /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} transition duration-500 ease-in-out`,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ a.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                      "  ",
                      this.props.onClear
                    ] })
                  ]
                }
              ) : null,
              this.state.datalist.length != 0 ? this.state.datalist.filter((e) => w.toString(this.handleEncrypt(e.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((e, r) => {
                var n = this.handleSearch(this.state.selectedMultiple, e.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200  dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white ${this.props.dropdownListClass} ${this.props.is_multiple != null && this.props.is_multiple ? n ? " font-poppinsBold" : "font-normal" : w.toString(this.state.selectedList.id) == w.toString(e.id) ? " font-poppinsBold" : "font-normal"} `,
                    onClick: (i) => this.handleSelectedItem(i, e),
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "mr-2", children: w.isEmptyOrNull(e.icon) ? "" : /* @__PURE__ */ a.jsx("img", { className: "object-fill w-4 h-4", alt: "image", src: `${this.handleEncrypt(e.icon)}` }) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                        "  ",
                        this.handleEncrypt(e.name)
                      ] }),
                      n ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", clipRule: "evenodd" }) }) : this.props.is_multiple ? /* @__PURE__ */ a.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { d: "M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" }) }) : null
                    ]
                  },
                  `${r}`
                );
              }) : /* @__PURE__ */ a.jsx("div", { className: "flex w-full h-24 text-sm dark:text-white text-center justify-center items-center", children: w.isEmptyOrNull(this.props.emptymessage) ? "No data found" : this.props.emptymessage })
            ] }) }) }),
            this.props.is_multiple !== void 0 && this.props.is_multiple && this.state.datalist.length != 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full mt-4", children: /* @__PURE__ */ a.jsx("div", { onClick: () => this.handleClickAway(), className: "flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold", children: "Done" }) }) : null
          ]
        }
      ) }) : null
    ] }) }) });
  }
}
class Ga extends X.Component {
  constructor(e) {
    super(e);
    p(this, "handleDataChange", (e) => {
      const r = this.state.datalist.is_multiple !== void 0 ? Array.isArray(e) && e.length > 0 ? e.map((n) => n.id) : [] : e;
      this.setState({ data_value: r });
    });
    p(this, "handleValueChange", (e) => {
      try {
        const { data: r } = this.state;
        r.start_date = e.startDate, r.end_date = e.endDate, this.setState({ data: r, value: e });
      } catch {
      }
    });
    p(this, "handleClose", (e) => {
      try {
        this.props.settings.loading && e && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const r = { ...this.state.data, status: e };
        this.props.settings.datalist !== void 0 && (r.option_data = this.state.data_value), w.isEmptyOrNull(this.state.input.user_input) || (r.user_input = this.state.input.user_input), this.props.onClose(r);
      } catch {
      }
    });
    this.state = {
      isLoading: !1,
      loadinghint: "",
      data: {},
      value: {
        startDate: null,
        endDate: null
      },
      date: {
        show: !1,
        minDate: null,
        title: "",
        value: {
          startDate: null
        }
      },
      time: {
        show: !1,
        value: "",
        title: ""
      },
      input: {
        user_input: ""
      },
      data_value: "",
      datalist: {
        title: "",
        default_value: "",
        onchange: "",
        data: []
      }
    };
  }
  async componentDidMount() {
    try {
      if (this.props.settings !== void 0) {
        if (this.props.data !== void 0 && this.props.settings.showDateRange) {
          let e = { ...this.state.value }, r = { ...this.state.data };
          e.startDate = this.props.data.start_date, e.endDate = this.props.data.end_date, this.setState({ value: e, data: r });
        }
        this.props.settings.forceLoading && this.setState({
          isLoading: !0,
          loadinghint: this.props.settings.loadinghint
          // Assuming loadingHint is correct
        }), this.props.settings.datalist !== void 0 && this.setState({
          data_value: this.props.settings.datalist.default_value,
          // Assuming defaultValue exists in dataList
          datalist: this.props.settings.datalist
        });
      }
    } catch {
    }
  }
  render() {
    const { settings: e } = this.props;
    return /* @__PURE__ */ a.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-darkPrimary dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ a.jsx(
        "svg",
        {
          version: "1.1",
          id: "L9",
          className: "w-24 h-24 ",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100",
          enableBackground: "new 0 0 0 0",
          xmlSpace: "preserve",
          children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ a.jsx(
            "animateTransform",
            {
              attributeName: "transform",
              attributeType: "XML",
              type: "rotate",
              dur: "1s",
              from: "0 50 50",
              to: "360 50 50",
              repeatCount: "indefinite"
            }
          ) })
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: [
          e.title != null && e.title != null && !w.isEmptyOrNull(e.title) ? /* @__PURE__ */ a.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${e.type == C.ERROR ? "text-red-600" : "text-gray-900 dark:text-white"} font-poppinsBold`, children: e.title }) : null,
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full my-5", children: [
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full", children: this.props.children }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full relative", children: e.datalist != null && (!w.isEmptyOrNull(e.datalist.url) || e.datalist.data != null) ? /* @__PURE__ */ a.jsx(
              Ps,
              {
                data: e.datalist.data != null ? e.datalist.data : [],
                request: {
                  url: `${w.isEmptyOrNull(e.datalist.url) ? "" : e.datalist.url}`
                },
                selectedData: this.state.data_value,
                defaultValue: e.datalist.default_value,
                handleChange: this.handleDataChange,
                is_multiple: e.datalist.is_multiple !== void 0 ? e.datalist.is_multiple : !1,
                containerClassName: w.isEmptyOrNull(this.props.containerDropDownClassName) ? "bg-white dark:bg-darkPrimary" : this.props.containerDropDownClassName,
                enableDecrypt: e.datalist.encrypted !== void 0 ? e.datalist.encrypted : !1,
                placeholder: `${e.datalist.title}`
              }
            ) : null })
          ] })
        ] }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ a.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        e.btnPosition != null && e.btnPosition !== void 0 && !w.isEmptyOrNull(e.btnPosition) ? /* @__PURE__ */ a.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: e.btnPosition
          }
        ) }) : null,
        e.btnNegative != null && e.btnNegative !== void 0 && !w.isEmptyOrNull(e.btnNegative) ? /* @__PURE__ */ a.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!1),
            className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: e.btnNegative
          }
        ) }) : null
      ] }) })
    ] }) });
  }
}
class Ya extends X.Component {
  constructor(e) {
    super(e);
    p(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: C.ERROR,
        loading: !1,
        forceLoading: !1,
        loadinghint: "",
        inputFieldLabel: "",
        showDateRange: !1,
        date: {
          show: !1,
          minDate: null,
          title: "",
          value: {
            startDate: /* @__PURE__ */ new Date()
          }
        },
        time: {
          show: !1,
          value: "",
          title: ""
        },
        showDateRangeTitle: "",
        datalist: {
          title: "",
          url: "",
          default_value: "",
          onchange: "",
          data: []
        }
      }
    }, this.modalContainer = document.createElement("div"), this.modalContainer.className = "modal-container";
  }
  componentDidMount() {
    try {
      const e = { ...this.state.settings }, r = this.props.settings;
      r.title !== void 0 && (e.title = r.title), r.forceLoading !== void 0 && (e.forceLoading = r.forceLoading), r.hint !== void 0 && (e.hint = r.hint), r.handleOnClose !== void 0 && (e.handleOnClose = r.handleOnClose), r.btnPosition !== void 0 && (e.btnPosition = r.btnPosition), r.btnNegative !== void 0 && (e.btnNegative = r.btnNegative), r.type !== void 0 && (e.type = r.type), r.loading !== void 0 && (e.loading = r.loading), r.loadinghint !== void 0 && (e.loadinghint = r.loadinghint), r.showDateRange !== void 0 && (e.showDateRange = r.showDateRange), r.date !== void 0 && (e.date = r.date), r.time !== void 0 && (e.time = r.time), r.showDateRangeTitle !== void 0 && (e.showDateRangeTitle = r.showDateRangeTitle), r.inputFieldLabel !== void 0 && (e.inputFieldLabel = r.inputFieldLabel), r.zIndex !== void 0 && (e.zIndex = r.zIndex), r.datalist !== void 0 && (e.datalist = r.datalist), this.setState({ settings: e, loaded: !0 });
    } catch {
    }
    document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const e = /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "fixed z-[10000] inset-0 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ a.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ a.jsx(Ga, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children })
    ] }) }) }) });
    return Jr.createPortal(e, this.modalContainer);
  }
}
/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(t) {
    for (var s = 1; s < arguments.length; s++) {
      var e = arguments[s];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, _t.apply(this, arguments);
}
var zr;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(zr || (zr = {}));
function z(t, s) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(s);
}
function Ds(t, s) {
  if (!t) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {
    }
  }
}
function Ms(t) {
  let s = {};
  if (t) {
    let e = t.indexOf("#");
    e >= 0 && (s.hash = t.substr(e), t = t.substr(0, e));
    let r = t.indexOf("?");
    r >= 0 && (s.search = t.substr(r), t = t.substr(0, r)), t && (s.pathname = t);
  }
  return s;
}
var Wr;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(Wr || (Wr = {}));
function Ja(t, s) {
  s === void 0 && (s = "/");
  let {
    pathname: e,
    search: r = "",
    hash: n = ""
  } = typeof t == "string" ? Ms(t) : t;
  return {
    pathname: e ? e.startsWith("/") ? e : Ka(e, s) : s,
    search: to(r),
    hash: ro(n)
  };
}
function Ka(t, s) {
  let e = s.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((n) => {
    n === ".." ? e.length > 1 && e.pop() : n !== "." && e.push(n);
  }), e.length > 1 ? e.join("/") : "/";
}
function gt(t, s, e, r) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + s + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + e + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xa(t) {
  return t.filter((s, e) => e === 0 || s.route.path && s.route.path.length > 0);
}
function Za(t, s) {
  let e = Xa(t);
  return s ? e.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase) : e.map((r) => r.pathnameBase);
}
function Qa(t, s, e, r) {
  r === void 0 && (r = !1);
  let n;
  typeof t == "string" ? n = Ms(t) : (n = _t({}, t), z(!n.pathname || !n.pathname.includes("?"), gt("?", "pathname", "search", n)), z(!n.pathname || !n.pathname.includes("#"), gt("#", "pathname", "hash", n)), z(!n.search || !n.search.includes("#"), gt("#", "search", "hash", n)));
  let i = t === "" || n.pathname === "", o = i ? "/" : n.pathname, l;
  if (o == null)
    l = e;
  else {
    let f = s.length - 1;
    if (!r && o.startsWith("..")) {
      let y = o.split("/");
      for (; y[0] === ".."; )
        y.shift(), f -= 1;
      n.pathname = y.join("/");
    }
    l = f >= 0 ? s[f] : "/";
  }
  let u = Ja(n, l), h = o && o !== "/" && o.endsWith("/"), d = (i || o === ".") && e.endsWith("/");
  return !u.pathname.endsWith("/") && (h || d) && (u.pathname += "/"), u;
}
const eo = (t) => t.join("/").replace(/\/\/+/g, "/"), to = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, ro = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Is = ["post", "put", "patch", "delete"];
new Set(Is);
const so = ["get", ...Is];
new Set(so);
/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(t) {
    for (var s = 1; s < arguments.length; s++) {
      var e = arguments[s];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Tt.apply(this, arguments);
}
const Yt = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Yt.displayName = "DataRouter");
const no = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (no.displayName = "DataRouterState");
const io = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (io.displayName = "Await");
const Jt = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Jt.displayName = "Navigation");
const Kt = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (Kt.displayName = "Location");
const _e = /* @__PURE__ */ D.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (_e.displayName = "Route");
const ao = /* @__PURE__ */ D.createContext(null);
process.env.NODE_ENV !== "production" && (ao.displayName = "RouteError");
function Fs() {
  return D.useContext(Kt) != null;
}
function Bs() {
  return Fs() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : z(!1)), D.useContext(Kt).location;
}
const Us = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function $s(t) {
  D.useContext(Jt).static || D.useLayoutEffect(t);
}
function oo() {
  let {
    isDataRoute: t
  } = D.useContext(_e);
  return t ? go() : lo();
}
function lo() {
  Fs() || (process.env.NODE_ENV !== "production" ? z(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : z(!1));
  let t = D.useContext(Yt), {
    basename: s,
    future: e,
    navigator: r
  } = D.useContext(Jt), {
    matches: n
  } = D.useContext(_e), {
    pathname: i
  } = Bs(), o = JSON.stringify(Za(n, e.v7_relativeSplatPath)), l = D.useRef(!1);
  return $s(() => {
    l.current = !0;
  }), D.useCallback(function(h, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && Ds(l.current, Us), !l.current) return;
    if (typeof h == "number") {
      r.go(h);
      return;
    }
    let f = Qa(h, JSON.parse(o), i, d.relative === "path");
    t == null && s !== "/" && (f.pathname = f.pathname === "/" ? s : eo([s, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d);
  }, [s, r, o, i, t]);
}
const co = /* @__PURE__ */ D.createContext(null);
function uo() {
  return D.useContext(co);
}
function ho() {
  let {
    matches: t
  } = D.useContext(_e), s = t[t.length - 1];
  return s ? s.params : {};
}
var zs = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
}(zs || {}), Ws = /* @__PURE__ */ function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(Ws || {});
function Vs(t) {
  return t + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fo(t) {
  let s = D.useContext(Yt);
  return s || (process.env.NODE_ENV !== "production" ? z(!1, Vs(t)) : z(!1)), s;
}
function po(t) {
  let s = D.useContext(_e);
  return s || (process.env.NODE_ENV !== "production" ? z(!1, Vs(t)) : z(!1)), s;
}
function mo(t) {
  let s = po(t), e = s.matches[s.matches.length - 1];
  return e.route.id || (process.env.NODE_ENV !== "production" ? z(!1, t + ' can only be used on routes that contain a unique "id"') : z(!1)), e.route.id;
}
function go() {
  let {
    router: t
  } = fo(zs.UseNavigateStable), s = mo(Ws.UseNavigateStable), e = D.useRef(!1);
  return $s(() => {
    e.current = !0;
  }), D.useCallback(function(n, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Ds(e.current, Us), e.current && (typeof n == "number" ? t.navigate(n) : t.navigate(n, Tt({
      fromRouteId: s
    }, i)));
  }, [t, s]);
}
new Promise(() => {
});
const Io = (t) => (e) => {
  const r = Bs(), n = oo(), i = ho(), o = uo();
  return /* @__PURE__ */ a.jsx(
    t,
    {
      ...e,
      location: r,
      navigate: n,
      params: i,
      outletContext: o
    }
  );
}, Fo = (t, { fallback: s = null } = {}) => {
  const e = Tn(t);
  return (n) => /* @__PURE__ */ a.jsx(An, { fallback: s, children: /* @__PURE__ */ a.jsx(e, { ...n }) });
};
class Bo extends F {
  constructor(e) {
    super(e);
    p(this, "handleClose", () => {
      this.props.onClose();
    });
    this.state = {
      modal: null
    };
  }
  render() {
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.modal,
      /* @__PURE__ */ a.jsx("div", { className: "fixed z-[3000] inset-0 overflow-y-hidden  dark:bg-[#1a1a1a]/75 bg-white/75 md:bg-transparent", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-lg top-0 overflow-hidden right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center h-[calc(100vh-160px)] overflow-auto justify-center min-h-screen px-4 pt-20 md:pt-4 pb-20 text-center sm:block sm:p-0", children: [
        /* @__PURE__ */ a.jsx("div", { className: "fixed w-full h-full inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute px-4 xl:px-0 inset-0 bg-transparent  md:dark:bg-darkBackground/75 md:bg-white/75 dark:text-white w-full h-full", children: /* @__PURE__ */ a.jsxs("div", { className: "hidden md:flex md:container mx-auto my-10 px-10 text-start uppercase justify-between font-poppinsBlack text-2xl 2xl:text-4xl", children: [
          /* @__PURE__ */ a.jsx("div", { children: this.props.data.title }),
          /* @__PURE__ */ a.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ a.jsx(
            "svg",
            {
              viewBox: "0 0 1024 1024",
              fill: "currentColor",
              className: "w-6 h-6 2xl:w-8 2xl:h-8 mr-2 cursor-pointer",
              onClick: this.handleClose,
              children: /* @__PURE__ */ a.jsx("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" })
            }
          ) })
        ] }) }) }),
        /* @__PURE__ */ a.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
        /* @__PURE__ */ a.jsxs("div", { className: "inline-block align-bottom min-h-96 font-poppinsRegular dark:text-white px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl w-full sm:p-2", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "md:hidden flex md:container mx-auto my-10 text-start uppercase justify-between font-poppinsBlack text-2xl 2xl:text-4xl", children: [
            /* @__PURE__ */ a.jsx("div", { children: this.props.data.title }),
            /* @__PURE__ */ a.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ a.jsx(
              "svg",
              {
                viewBox: "0 0 1024 1024",
                fill: "currentColor",
                className: "w-8 h-8 mr-2 cursor-pointer",
                onClick: this.handleClose,
                children: /* @__PURE__ */ a.jsx("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" })
              }
            ) })
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "w-full h-full", children: this.props.children })
        ] })
      ] }) }) })
    ] });
  }
}
class Uo extends F {
  constructor(e) {
    super(e);
    p(this, "enteredInput", "");
    p(this, "handleDefaultRequest", () => {
      try {
        if (this.props.defaultValue != null) {
          const e = w.toStringDefault(this.props.defaultValue, ""), { input: r } = this.state;
          !w.isEmptyOrNull(e) && w.isEmptyOrNull(this.state.input.data) && (r.data = e, this.setState({ input: r }));
        }
      } catch {
      }
    });
    p(this, "componentDidUpdate", async (e, r) => {
      try {
        this.state.hasPressed || this.handleDefaultRequest();
      } catch {
      }
    });
    p(this, "handleTextAreaChange", (e) => {
      try {
        const r = this.state.input, n = e.target.value;
        r[e.target.name] = n, this.props.onChange(n);
      } catch {
      }
    });
    p(this, "handleChange", (e) => {
      try {
        const r = this.state.input, n = w.toStringDefault(this.props.type, C.TEXT), i = e.target.value;
        w.isEmptyOrNull(i) && (r[e.target.name] = i, this.setState({ input: r, hasPressed: !0 }, () => this.props.onChange(i))), n === C.PHONE ? /^[0-9+]*$/.test(i) && (r[e.target.name] = i, this.setState({ input: r, hasPressed: !0 }, () => {
          this.props.onChange(i);
        })) : n === C.NUMBER ? /^[0-9]*$/.test(i) && (r[e.target.name] = i, this.setState({ input: r, hasPressed: !0 }, () => {
          this.props.onChange(i);
        })) : (r[e.target.name] = i, this.setState({ input: r, hasPressed: !0 }, () => {
          if (n === C.EMAIL) {
            const o = w.toStringDefault(this.props.emailExtension, ""), l = i;
            if (w.validateEmail(l)) {
              if (w.isEmptyOrNull(o)) {
                this.props.onChange(i);
                return;
              } else if (l.endsWith(o)) {
                this.props.onChange(i);
                return;
              }
            }
          } else
            this.props.onChange(i);
        }));
      } catch {
      }
    });
    this.state = {
      hasPressed: !1,
      input: {
        data: w.toStringDefault(this.props.defaultValue, "")
      }
    };
  }
  componentDidMount() {
    try {
      this.props.onRef && this.props.onRef(this), this.handleDefaultRequest();
    } catch {
    }
  }
  render() {
    return /* @__PURE__ */ a.jsx("div", { className: `${this.props.className !== void 0 ? this.props.className : "bg-white dark:bg-darkBackground"}`, children: /* @__PURE__ */ a.jsxs("div", { className: "relative bg-inherit", children: [
      this.props.type == C.TEXTAREA ? /* @__PURE__ */ a.jsx(
        "textarea",
        {
          rows: this.props.rows,
          disabled: this.props.disabled ? this.props.disabled : !1,
          autoFocus: this.props.autoFocus ? this.props.autoFocus : !1,
          placeholder: `${this.props.label}`,
          defaultValue: this.state.input.data,
          onChange: this.handleTextAreaChange,
          className: `peer bg-transparent border border-black text-xs/7 dark:border-white  dark:text-white placeholder-transparent 2xl:text-sm/7 ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`
        }
      ) : /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          id: "data",
          name: "data",
          disabled: this.props.disabled ? this.props.disabled : !1,
          autoFocus: this.props.autoFocus ? this.props.autoFocus : !1,
          value: this.state.input.data,
          onChange: this.handleChange,
          className: `peer bg-transparent h-12 border border-black ${this.props.disabled ? "cursor-not-allowed" : ""} dark:border-white  dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`,
          placeholder: `${this.props.label}`
        }
      ),
      /* @__PURE__ */ a.jsx("label", { htmlFor: "data", className: "before:content[' '] after:content[' ']  pointer-events-none absolute cursor-text left-0 -top-3.5  text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm  dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all", children: this.props.label })
    ] }) });
  }
}
const xo = ({ charLimit: t, children: s }) => {
  const e = s, [r, n] = Ln(!0), i = () => {
    n(!r);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "text", children: [
    e.length <= t ? e : r ? e.slice(0, t) : e,
    e.length > t && /* @__PURE__ */ a.jsx("span", { onClick: i, className: "read-or-hide font-bold", children: r ? "...read more" : " show less" })
  ] });
};
class vo extends F {
  constructor(e) {
    super(e);
    p(this, "header");
    p(this, "status");
    p(this, "handleDelete", () => {
      const e = {
        title: "Confirmation!",
        btnPosition: "delete",
        btnNegative: "cancel",
        type: C.NOTICE
        // Providing default value
      }, r = (i) => {
        let o = { ...this.state.request };
        o.delete || (o.delete = i.status, i.status && (this.handleDeleteRequest(), this.props.error({})), this.setState({ request: o, modal: void 0 }));
      }, n = /* @__PURE__ */ a.jsx(Ya, { settings: e, onClose: r, children: /* @__PURE__ */ a.jsxs("div", { className: "w-full py-2 text-sm", children: [
        "Are you sure you want to delete",
        /* @__PURE__ */ a.jsxs("span", { className: "text-primary dark:text-white ml-1 font-poppinsBold", children: [
          this.props.user[this.props.settings.deleteinfo.name],
          "?"
        ] })
      ] }) });
      this.setState({ modal: n });
    });
    p(this, "handleError", (e = "") => {
      try {
        let r = { ...this.state.request }, n = { ...this.state.error }, i = w.isEmptyOrNull(e) ? "Error Message" : e;
        r.delete = !1, n.state = !0, n.message = i, n.type = "Error", n.color = "red", this.setState({ request: r }), this.props.error(n);
      } catch {
      }
    });
    p(this, "handleDeleteRequest", () => {
      try {
        let e = { ...this.state.error };
        e.state = !1, P.get(`${this.props.settings.request_url}/${this.props.user[this.props.settings.deleteinfo.id]}/delete/`, {
          headers: {
            "X-CSRFToken": `${W.getCookie("csrftoken")}`,
            Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
          }
        }).then(
          (r) => {
            r.data.success ? (e.state = !1, this.props.handleOnSuccess(this.props.index)) : this.handleError(r.data.message);
          },
          (r) => {
            this.handleError();
          }
        ).catch((r) => {
          this.handleError();
        });
      } catch {
        this.handleError();
      }
    });
    p(this, "handleEdit", () => {
      this.state.request.delete || this.props.handleEdit(this.props.user);
    });
    p(this, "onImageClick", (e) => {
    });
    p(this, "extra_handle", () => this.props.settings.extra_handle ? this.props.settings.extra_handle.find((e) => e.name === this.header) : !1);
    this.state = {
      stateList: [C.APPROVED, C.ACTIVE, C.RUNNING, C.ADMITTED, C.QUALIFIED, C.IN_PROGRESS],
      imageExtensions: ["jpg", "jpeg", "png", "svg"],
      imgColumnTypes: ["picture", "photo"],
      title: "",
      contentlist: [],
      header: "",
      request: { delete: !1 },
      error: { state: !1, message: "", type: C.ERROR, color: "" },
      isLoading: !1
    }, this.header = "", this.status = "";
  }
  async componentDidMount() {
    let e = this.props.user, r = this.props.acces_key, n = this.props.headers, i = e[n[r]];
    this.header = w.toString(n[r]).toLowerCase(), this.status = e.status, this.setState({ title: Array.isArray(i) ? "" : w.toString(i), contentlist: Array.isArray(i) ? i : [] });
  }
  render() {
    var o, l, u, h;
    const e = /* @__PURE__ */ a.jsx("span", { className: "text-blue-800 dark:text-blue-300 cursor-pointer flex-col", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) }) }), r = /* @__PURE__ */ a.jsx("span", { className: "text-red-800 dark:text-red-300 cursor-pointer", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) }), n = /* @__PURE__ */ a.jsx("span", { className: "text-black dark:text-white cursor-pointer ", children: /* @__PURE__ */ a.jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
    ] }) }), i = w.isEmptyOrNull(this.state.title) && this.props.settings.image !== void 0 ? this.props.settings.image.placeholder : this.state.title;
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.modal,
      this.props.exceptional_columns.includes(this.header) || this.extra_handle() ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-center items-center", children: this.header === "edit" ? /* @__PURE__ */ a.jsx("span", { onClick: () => this.handleEdit(), children: e }) : this.header === "view" ? /* @__PURE__ */ a.jsx("span", { onClick: () => this.props.settings.handleOnViewClick(this.props.user), children: n }) : this.extra_handle() ? /* @__PURE__ */ a.jsx("span", { onClick: () => {
        var d, f;
        return this.props.settings.handleOnClickExtra(
          this.props.user,
          ((f = (d = this.props.settings.extra_handle) == null ? void 0 : d.find((y) => y.name === this.header)) == null ? void 0 : f.name) || ""
        );
      }, children: (l = (o = this.props.settings.extra_handle) == null ? void 0 : o.find((d) => d.name === this.header)) == null ? void 0 : l.icon }) : this.header === "delete" && this.state.request.delete ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "flex w-4 h-4 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
        /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
      ] }) : /* @__PURE__ */ a.jsx("span", { onClick: () => this.handleDelete(), children: r }) }) : this.header.toLowerCase() === "status" ? /* @__PURE__ */ a.jsx("div", { className: `w-full text-xs rounded-full border ${this.state.stateList.includes(this.status) ? "bg-green-400 text-green-700 border-green-500" : "bg-red-400 text-red-700 border-red-500"} text-xs py-0.5 justify-center text-center items-center`, children: this.status }) : this.state.imgColumnTypes.includes(((u = this.header) == null ? void 0 : u.toLowerCase()) || "") || this.state.imageExtensions.includes(((h = this.state.title) == null ? void 0 : h.toLowerCase().split(".").pop()) || "") ? /* @__PURE__ */ a.jsx("div", { className: "w-8 ml-3", children: /* @__PURE__ */ a.jsx("img", { onClick: () => this.onImageClick(this.state.title), title: "View photo", className: `object-center object-cover w-6 h-6 2xl:w-8 2xl:h-8 ${this.props.settings.image == null || this.props.settings.image.rounded == !1 ? "" : "rounded-full"} cursor-pointer mx-auto`, alt: "photo", src: i }) }) : /* @__PURE__ */ a.jsx("span", { className: "text-xs 2xl:text-sm px-4 py-2 flex items-center", children: this.state.contentlist.length > 0 ? /* @__PURE__ */ a.jsx("ul", { className: "space-y-1", children: this.state.contentlist.map((d, f) => /* @__PURE__ */ a.jsxs("li", { children: [
        f + 1,
        ". ",
        d.name
      ] }, f)) }) : /* @__PURE__ */ a.jsx(xo, { charLimit: this.props.settings.read_more_limit !== void 0 ? this.props.settings.read_more_limit : 50, children: this.state.title }) })
    ] });
  }
}
class wo extends X.Component {
  constructor(e) {
    super(e);
    p(this, "modalContainer");
    p(this, "handleClose", (e) => {
      try {
        this.props.settings.loading && e && this.setState({ isLoading: !0 });
        const r = { ...this.state.data, status: e, filters: this.state.filter };
        this.props.onClose(r);
      } catch {
      }
    });
    p(this, "handleDataChange", (e, r) => {
      try {
        const n = this.state.filter.is_multiple ? r.length > 0 ? r.map((i) => i.id) : [] : r;
        this.setState((i) => ({
          filter: {
            ...i.filter,
            [e]: n
          }
        }));
      } catch {
      }
    });
    this.state = {
      data: {},
      filter: {},
      settings: {
        title: "",
        hint: "",
        btnPosition: "",
        btnNegative: "",
        type: "ERROR",
        loading: !1,
        filter: {
          title: "",
          is_multiple: !1,
          encrypted: !1,
          data: []
        },
        dtablemodal: null
      },
      isLoading: !1
      // Initialized isLoading in the state
    }, this.modalContainer = document.createElement("div"), this.modalContainer.className = "modal-container";
  }
  componentDidMount() {
    const e = { ...this.state.settings, ...this.props.settings };
    this.setState({ settings: e }), document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const { settings: e } = this.state, r = /* @__PURE__ */ a.jsx("div", { className: "fixed z-[3000] inset-0 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ a.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ a.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-darkBackground dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col lg:-ml-2 w-full", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left items-center", children: [
            e.title && !w.isEmptyOrNull(e.title) && /* @__PURE__ */ a.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${e.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"} font-poppinsBold`, children: e.title }),
            e.hint && !w.isEmptyOrNull(e.hint) && /* @__PURE__ */ a.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-sm mt-1.5 ${e.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"}`, children: e.hint }),
            /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full my-5", children: e.filter && e.filter.data.map((n, i) => /* @__PURE__ */ a.jsx("div", { className: "flex w-full relative", children: /* @__PURE__ */ a.jsx(
              Ps,
              {
                data: n.data,
                selectedData: this.state.settings.data_value,
                defaultValue: n.defaults,
                onClear: "None",
                handleChange: (o) => this.handleDataChange(n.name, o),
                is_multiple: e.filter.is_multiple,
                dropdownClass: "bg-white text-black",
                enableDecrypt: e.filter.encrypted,
                placeholder: `By ${w.convertUnderscoreToSpaceString(n.name)}`,
                dropdownListClass: "flex w-full text-black hover:bg-gray-200",
                className: "flex w-full dark:text-white text-sm text-gray-900 border-b-0 border-gray-300 py-2.5 bg-transparent outline-none focus:outline-none"
              }
            ) }, `drpdke=${i}`)) })
          ] }),
          this.props.settings.handleOnClose && /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: this.props.settings.handleOnClose, children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "mt-4 sm:flex sm:flex-row-reverse", children: [
          e.btnPosition && /* @__PURE__ */ a.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => this.handleClose(!0),
              className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
              children: e.btnPosition
            }
          ) }),
          e.btnNegative && /* @__PURE__ */ a.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => this.handleClose(!1),
              className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-black dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
              children: e.btnNegative
            }
          ) })
        ] })
      ] }) })
    ] }) }) });
    return Jr.createPortal(r, this.modalContainer);
  }
}
class $o extends F {
  constructor(e) {
    super(e);
    p(this, "renderedSettings", []);
    p(this, "dataCollection", []);
    p(this, "chunkSize");
    p(this, "currentIndex");
    p(this, "hasClear");
    p(this, "isLoading");
    p(this, "hasLoadLastData");
    p(this, "current_page");
    p(this, "search");
    p(this, "filterloaded");
    p(this, "componentDidUpdate", async (e, r) => {
      try {
        const { settings: n } = this.props;
        if (n.filter && !this.filterloaded && Array.isArray(n.filter.data) && n.filter.data.length > 0) {
          const i = { ...n.filter };
          this.setState({ filters: i }), this.filterloaded = !0;
        }
      } catch (n) {
        console.error(n);
      }
    });
    p(this, "errors", (e) => {
      this.setState({ alerterror: e });
    });
    p(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: C.ERROR, color: "" } });
    });
    p(this, "handleError", (e = "") => {
      try {
        var r = this.state.error, n = this.state.input;
        n.is_searching = !1, r.state = !0, r.message = w.isEmptyOrNull(e) ? C.ERROR_MESSAGE : e, r.type = C.ERROR, r.color = "red", this.setState({ isLoading: !1, error: r, input: n });
      } catch (i) {
        console.error(i);
      }
    });
    p(this, "tableHeads", () => {
      let e;
      return this.state.custom_settings.order === "asc" ? e = /* @__PURE__ */ a.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15l7-7 7 7" }) }) : e = /* @__PURE__ */ a.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }), this.props.settings.headers.map((r, n) => {
        var l;
        const i = this.state.exceptionalColumns.includes(r.toLowerCase()), o = (l = this.state.settings.table_data) == null ? void 0 : l.find((u) => u.name === r.toLowerCase());
        return /* @__PURE__ */ a.jsx("th", { onClick: () => this.sortByColumn(this.props.settings.columns[n]), className: `py-2 sticky ${i ? "w-4" : o ? o.class : ""}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`, children: /* @__PURE__ */ a.jsxs("div", { className: "flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs", children: [
          /* @__PURE__ */ a.jsx("span", { children: this.columnHead(r) }),
          /* @__PURE__ */ a.jsx("span", { children: this.state.custom_settings.sorted_column === this.props.settings.columns[n] && e })
        ] }) }, n);
      });
    });
    p(this, "handleClear", () => {
      let e = this.state.input, r = this.state.entities;
      var n = this.state.error;
      n.state = !1, e.is_searching = !1, r.meta.total = 0, this.setState({ input: e }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: r, error: n });
    });
    p(this, "clearFetchEntities", () => {
      let e = this.state.custom_settings;
      e.current_page = 1, this.handleClear(), this.setState({ custom_settings: e }, this.fetchEntities);
    });
    p(this, "handleSearch", (e) => {
      let r = this.state.input;
      (e.key === "Enter" || e.keyCode === 13) && !w.isEmptyOrNull(r.search) && r.search.length > 2 && (r.is_searching = !0, this.search = r.search, this.setState({ input: r }, this.clearFetchEntities));
    });
    p(this, "searchFilter", async (e) => {
      let r = this.state.input;
      Object.entries(e.search).length > 0 && (r.is_searching = !0, this.setState({ filters: e, input: r }, this.clearFetchEntities));
    });
    p(this, "handleInput", (e) => {
      const { value: r } = e.target;
      this.setState((n) => ({
        input: {
          ...n.input,
          search: r
        }
      }));
    });
    p(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          let e = this.state.custom_settings, r = this.state.entities.meta.next_page;
          !w.isEmptyOrNull(r) && this.current_page !== r && (e.current_page = r ?? 1, this.current_page = r ?? 1, this.setState({ isLoading: !0, custom_settings: e }, () => {
            this.fetchEntities();
          }));
        }
      } catch {
      }
    });
    p(this, "onChangeValue", (e) => {
      try {
        this.search = e.target.value, w.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearhing();
      } catch (r) {
        console.error(r);
      }
    });
    p(this, "handleKeyDown", (e) => {
      try {
        e.key === "Enter" && !w.isEmptyOrNull(this.search) && this.handleSearhing();
      } catch (r) {
        console.error(r);
      }
    });
    p(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    p(this, "removeFilterByName", (e) => {
      try {
        const r = { ...this.state.filters }, n = { ...this.state.filters.search };
        delete n[e], r.search = n;
        const i = this.state.filterhead.filter((l) => l.name !== e), o = this.state.filters.data.map((l) => {
          if (l.name === e) {
            const { defaults: u, ...h } = l;
            return h;
          }
          return l;
        });
        r.data = o, this.handleClear(), this.setState({ filterhead: i, filters: r }, this.fetchEntities);
      } catch (r) {
        console.error(r);
      }
    });
    p(this, "handleFiltered", () => {
      var u;
      const { settings: e } = this.props, { filters: r } = this.state, n = (h) => {
        if (h.status) {
          const d = { ...r }, f = [];
          d.search = h.filters, Object.entries(h.filters).map(([y, x]) => {
            f.push({ name: y, data: x.name });
          }), d.data = r.data.map((y) => {
            const x = h.filters[y.name];
            return {
              name: y.name,
              data: y.data,
              defaults: x !== void 0 ? x : {}
            };
          }), this.handleClear(), this.setState({ filterhead: f, filters: d }, this.fetchEntities);
        }
        this.setState({ dtablemodal: null, hasRequest: !1 });
      }, o = {
        title: (u = {
          ...e,
          filter: {
            ...e.filter,
            data: this.state.filters.data
          }
        }.filter) == null ? void 0 : u.title,
        type: C.NOTICE,
        datalist: this.state.filters,
        btnPosition: "Continue",
        btnNegative: "Cancel"
      }, l = /* @__PURE__ */ a.jsx(wo, { settings: o, onClose: n });
      this.setState({ dtablemodal: l });
    });
    p(this, "handleRetry", () => {
      try {
        this.handleClear();
        let e = this.state.custom_settings;
        e.current_page = 1, this.setState({ isLoading: !0, error: {}, custom_settings: e }, this.fetchEntities);
      } catch {
      }
    });
    p(this, "handleHint", () => {
      try {
        return this.state.settings.header.hint ? this.state.settings.header.hint : this.state.error.state ? "" : "Loaded " + this.state.entities.meta.total + " data";
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
    });
    p(this, "handleOnSuccess", (e) => {
      this.renderedSettings.splice(e, 1), this.dataCollection.splice(e, 1);
      let r = this.state.entities;
      r.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    p(this, "handleEdit", (e) => {
      this.props.settings.handleEdit(e);
    });
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: !0,
      dtablemodal: null,
      hasRequest: !1,
      filterhead: [],
      filters: {
        search: {},
        data: []
      },
      input: {
        search: "",
        is_searching: !1
      },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          from: 1,
          last_page: 1,
          per_page: 500,
          to: 1,
          total: 0
        }
      },
      custom_settings: {
        sorted_column: "",
        order: "asc",
        first_page: 1,
        current_page: 1,
        offset: 4
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: ""
        },
        headers: [],
        columns: [],
        table_data: []
      },
      error: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      }
    }, this.renderedSettings = [], this.dataCollection = [], this.chunkSize = 50, this.currentIndex = 0, this.hasClear = !1, this.isLoading = !1, this.hasLoadLastData = !1, this.current_page = 0, this.search = "", this.filterloaded = !1, this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    let e = this.state.custom_settings;
    e.sorted_column = this.props.settings.default_sorted_column, this.setState({ custom_settings: e, settings: this.props.settings }, this.fetchEntities);
  }
  handleScroll(e) {
    const r = e.target;
    r.scrollTop + r.clientHeight >= r.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      let e = [], r = "";
      this.state.filters.search !== void 0 && this.state.filters.search !== null && Object.entries(this.state.filters.search).length > 0 && (Object.entries(this.state.filters.search).map(([o, l]) => w.isEmptyOrNull(l.id) ? null : e.push(`${o}=${l.id}`)), r = `&${e.join("&")}`);
      let n = this.state.entities, i = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}${r}`;
      P.get(i, {
        headers: {
          "X-CSRFToken": `${W.getCookie("csrftoken")}`,
          Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
        }
      }).then((o) => {
        o.data.success ? (n.data.length = 0, this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(o.data.data.data), this.hasClear = !1, n.meta = o.data.data.meta, this.setState({ isLoading: !1, entities: n }, this.initialChunck)) : (this.hasLoadLastData = !0, this.handleError());
      }).catch((o) => {
        console.log(o), this.handleError();
      });
    } catch (e) {
      console.log(e), this.handleError();
    }
  }
  columnHead(e) {
    let r = e.split("_");
    return r.length > 1 && this.state.exceptionalColumns.includes(w.toString(r.slice(-1)).toString().toLowerCase()) ? r.slice(0, -1).join(" ").toUpperCase() : r.join(" ").toUpperCase();
  }
  sortByColumn(e) {
    try {
      var r = this.state.custom_settings, n = e === this.state.custom_settings.sorted_column && this.state.custom_settings.order === "asc" ? "desc" : "asc";
      this.handleClear(), r.current_page = 1, r.sorted_column = e, r.order = n, this.setState({ isLoading: !0, error: {}, custom_settings: r }, this.fetchEntities);
    } catch (i) {
      console.error(i);
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const e = this.state.settings.headers, r = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let n = this.currentIndex; n < r; n++) {
        const i = this.dataCollection[n];
        let o = this.state.selected === n ? " bg-gray-300 dark:bg-darkPrimary" : n % 2 === 0 ? " dark:bg-[#1c1c1c] bg-[#f3f4f6] " : " bg-inherit";
        if (i !== void 0) {
          const l = /* @__PURE__ */ a.jsx("tr", { className: `${o} cursor-pointer text-gray-700  dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white  transition duration-500 ease-in-out`, children: Object.keys(e).map((u, h) => /* @__PURE__ */ a.jsx("td", { className: "px-3 justify-content-center flex-wrap", children: /* @__PURE__ */ a.jsx(
            vo,
            {
              index: n,
              handleOnSuccess: this.handleOnSuccess,
              acces_key: parseInt(u, 10),
              error: this.errors,
              handleEdit: () => this.props.settings.handleEdit(i),
              settings: this.props.settings,
              exceptional_columns: this.state.exceptionalColumns,
              user: i,
              headers: e
            },
            `dtaw${u}${this.search}`
          ) }, `trex${h}`)) }, n);
          this.renderedSettings.push(l);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  handleSearhing() {
    let e = this.state.custom_settings, r = this.state.input;
    e.current_page = 1, r.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: e, input: r }, () => {
      this.fetchEntities();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.dtablemodal,
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full mb-5", children: /* @__PURE__ */ a.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full lg:w-auto", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
            /* @__PURE__ */ a.jsx("h3", { className: `${this.state.settings.header !== void 0 ? w.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
            /* @__PURE__ */ a.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
          ] }) : null }),
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
            /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full relative", children: [
              /* @__PURE__ */ a.jsx("input", { className: "rounded lg:rounded-full w-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-0  bg-inherit dark:text-white", name: "search", onChange: this.onChangeValue, onKeyDown: this.handleKeyDown, id: "search", type: "text", placeholder: "Search" }),
              this.state.input.is_searching && !w.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }) : null
            ] }) }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ a.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
              /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
              /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
            ] }) }),
            this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
          ] }) }) }) })
        ] }) }),
        /* @__PURE__ */ a.jsx("div", {}),
        /* @__PURE__ */ a.jsx("div", { className: `scrollable_table flex flex-col min-h-[200px] ${this.renderedSettings.length > 10 ? "h-[80vh]" : "h-auto"} overflow-auto  scrollbar-width`, onScroll: this.handleScroll, children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ a.jsx("div", { children: this.state.filterhead.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full overflow-x-auto mb-2 space-x-4", children: this.state.filterhead.map((e, r) => w.isEmptyOrNull(e.data) ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-shrink-0 text-sm relative pl-4 pr-6 py-2 rounded-none border-[1px] border-gray-200 bg-gray-50", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex mr-2", children: [
              w.capitalizeEachWord(w.convertUnderscoreToSpaceString(e.name)),
              ":"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "flex font-poppinsSemiBold", children: e.data }),
            /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "absolute right-1 top-2 bottom-1 cursor-pointer w-4 h-4 2xl:w-5 2xl:h-5", onClick: () => this.removeFilterByName(e.name), children: /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M368 368L144 144M368 144L144 368" }) })
          ] }, `flter=${r}`)) }) : null }),
          /* @__PURE__ */ a.jsxs("table", { children: [
            /* @__PURE__ */ a.jsx("thead", { className: "w-full", children: /* @__PURE__ */ a.jsx("tr", { className: "text-sm", children: this.tableHeads() }) }),
            /* @__PURE__ */ a.jsx("tbody", { children: this.state.error.state ? null : this.renderedSettings })
          ] }),
          !this.state.isLoading && (!this.dataCollection.length || this.state.error.state) ? /* @__PURE__ */ a.jsxs("div", { className: `flex flex-col w-full h-96 justify-center ${this.state.error.state ? "text-red-500" : "dark:text-white"} space-y-5 items-center text-base`, children: [
            this.state.error.state ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }) }) : w.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }) }) : /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full text-sm justify-center text-center", children: this.state.error.state ? this.state.error.message : w.isEmptyOrNull(this.search) ? "No data available to show" : /* @__PURE__ */ a.jsx("span", { className: " font-poppinsSemiBold", children: " Sorry we couldn't find anything!" }) }),
            w.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsx("div", { onClick: () => this.handleRetry(), className: `uppercase flex font-poppinsSemiBold ${this.state.error.state ? "bg-red-400 text-red-700" : ""} px-6 py-2 cursor-pointer rounded-full my-4`, children: this.state.error.state ? "RETRY" : "REFRESH" }) : null
          ] }) : this.state.isLoading ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full mt-10 justify-center dark:text-white items-center space-y-4", children: [
            /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "flex w-4 h-4 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
              /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "text-xs 2xl:text-sm", children: "Loading......." })
          ] }) : null
        ] }) })
      ] })
    ] });
  }
}
class zo extends F {
  constructor(e) {
    super(e);
    p(this, "renderedSettings");
    p(this, "dataCollection");
    p(this, "chunkSize");
    p(this, "currentIndex");
    p(this, "hasClear");
    p(this, "isLoading");
    p(this, "hasLoadLastData");
    p(this, "current_page");
    p(this, "search");
    p(this, "errors", (e) => {
      this.setState({ alerterror: e });
    });
    p(this, "handleReset", () => {
      this.setState({ alerterror: {} });
    });
    p(this, "handleError", (e = "") => {
      try {
        var r = this.state.error;
        r.state = !0, r.message = w.isEmptyOrNull(e) ? C.ERROR_MESSAGE : e, r.type = C.ERROR, r.color = "red", this.setState({ isLoading: !1, error: r });
      } catch {
      }
    });
    p(this, "tableHeads", () => {
      let e;
      return this.state.custom_settings.order === "asc" ? e = /* @__PURE__ */ a.jsxs("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
        /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }),
        " "
      ] }) : e = /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }), this.props.settings.headers.map((r, n) => {
        let i = this.state.exceptionalColumns.includes(r.toLowerCase()), o = this.state.settings.table_data !== void 0 ? this.state.settings.table_data.find((l) => l.name === r.toLowerCase()) : null;
        return /* @__PURE__ */ a.jsx("th", { className: ` sticky z-10 ${i ? "w-4" : o ? o.class : ""}  top-0 border-b border-gray-200 bg-transparent  text-xs 2xl:text-sm`, onClick: () => this.sortByColumn(r), children: /* @__PURE__ */ a.jsxs("span", { className: "flex sticky top-0 px-6 py-2 2xl:py-4 bg-inherit  font-poppinsSemiBold tracking-wider uppercase text-xs", children: [
          this.columnHead(r),
          r.toLowerCase() === this.state.custom_settings.sorted_column ? e : ""
        ] }) }, `th${n}`);
      });
    });
    p(this, "handleFetchEntities", () => {
      this.props.handleOnLoaded(this.renderedSettings, C.LOADING), this.fetchEntities();
    });
    p(this, "handleRetry", () => {
      try {
        this.handleClear();
        let e = this.state.custom_settings;
        e.current_page = 1, this.setState({ isLoading: !0, error: {}, custom_settings: e }, this.handleFetchEntities);
      } catch {
      }
    });
    p(this, "handleClear", () => {
      let e = this.state.input, r = this.state.entities;
      e.is_searching = !1, r.meta.total = 0, this.setState({ input: e }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: r });
    });
    p(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    p(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          let e = this.state.custom_settings, r = this.state.entities.meta.next_page;
          r !== null && r !== this.current_page && (e.current_page = r, this.current_page = r, this.setState({ isLoading: !0, custom_settings: e }, () => {
            this.props.handleOnLoaded(this.renderedSettings, C.LOADING), this.handleFetchEntities();
          }));
        }
      } catch {
      }
    });
    p(this, "handleRenderStatus", (e) => {
      this.props.handleOnLoaded(this.renderedSettings, e);
    });
    p(this, "handleOnLoaded", () => {
      this.handleRenderStatus(C.LOADED);
    });
    p(this, "handleOnLoading", () => {
      this.handleRenderStatus(C.LOADING);
    });
    p(this, "handleHint", () => {
      try {
        return this.state.settings.header.hint ? this.state.settings.header.hint : this.state.error.state ? "" : "Loaded " + this.state.entities.meta.total + " data";
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
    });
    p(this, "onChangeValue", (e) => {
      try {
        this.search = e.target.value, w.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearching();
      } catch {
      }
    });
    p(this, "handleKeyDown", (e) => {
      try {
        e.key === "Enter" && !w.isEmptyOrNull(this.search) && this.handleSearching();
      } catch {
      }
    });
    p(this, "handleFiltered", () => {
    });
    this.state = {
      exceptionalColumns: ["view", "edit", "delete"],
      selected: -1,
      isLoading: !0,
      input: {
        search: "",
        is_searching: !1
      },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          from: 1,
          last_page: 1,
          per_page: 500,
          to: 1,
          total: 0
        }
      },
      custom_settings: {
        sorted_column: "",
        order: "asc",
        first_page: 1,
        current_page: 1,
        offset: 4
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: ""
        },
        headers: [],
        columns: [],
        table_data: []
      },
      error: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      }
    }, this.renderedSettings = [], this.dataCollection = [], this.chunkSize = 6, this.currentIndex = 0, this.hasClear = !1, this.isLoading = !1, this.hasLoadLastData = !1, this.current_page = 0, this.search = "", this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    let e = this.state.custom_settings;
    e.sorted_column = this.props.settings.default_sorted_column, this.chunkSize = this.props.settings.pagination.per_page, this.setState({ custom_settings: e, settings: this.props.settings }, () => {
      this.handleFetchEntities();
    });
  }
  handleScroll(e) {
    const r = e.currentTarget;
    r.scrollTop + r.clientHeight >= r.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      let r = this.state.entities;
      if (!this.props.settings.server_request.enable) {
        var e = this.props.data;
        r.data.length = 0, this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(e.data), this.hasClear = !1, r.meta = e.meta, this.setState({ isLoading: !1, entities: r }, this.initialChunck);
        return;
      }
      let n = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`;
      P.get(n, {
        headers: {
          "X-CSRFToken": `${W.getCookie("csrftoken")}`,
          Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
        }
      }).then((i) => {
        i.data.status === "ok" ? (r.data.length = 0, this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(i.data.data), this.hasClear = !1, r.meta = i.data.data.meta, this.setState({ isLoading: !1, entities: r }, this.initialChunck)) : (this.hasLoadLastData = !0, this.handleError());
      }).catch((i) => {
      });
    } catch {
      this.handleError();
    }
  }
  columnHead(e) {
    let r = e.split("_");
    return r.length > 1 && this.state.exceptionalColumns.includes(w.toString(r.slice(-1)).toString().toLowerCase()) ? r.slice(0, -1).join(" ").toUpperCase() : r.join(" ").toUpperCase();
  }
  sortByColumn(e) {
    try {
      var r = this.state.custom_settings, n = "asc";
      e === this.state.custom_settings.sorted_column && (n = this.state.custom_settings.order === "asc" ? "desc" : "asc"), this.handleClear(), r.current_page = 1, r.sorted_column = e, r.order = n, this.setState({ isLoading: !0, error: {}, custom_settings: r }, this.fetchEntities);
    } catch {
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      let e = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let r = this.currentIndex; r < e; r++) {
        const n = this.dataCollection[r];
        this.renderedSettings.some((i) => i[`${this.props.settings.deleteinfo.id}`] === n[`${this.props.settings.deleteinfo.id}`]) || this.renderedSettings.push(n);
      }
      this.props.handleOnLoaded(this.renderedSettings, C.LOADED);
    } catch {
    }
  }
  handleFilterInput(e) {
    try {
      let r = this.state.input;
      r.search = e.target.value, r.is_searching = !0, this.setState({ input: r, isLoading: !1 }, this.onSearch);
    } catch {
      this.handleError();
    }
  }
  onSearch() {
    try {
      if (this.state.input.is_searching) {
        let e = this.state.input;
        this.search = e.search, this.handleClear();
        let r = this.state.custom_settings;
        r.current_page = 1, this.setState({ input: e, custom_settings: r }, this.fetchEntities);
      }
    } catch {
      this.handleError();
    }
  }
  handleSearching() {
    let e = this.state.custom_settings, r = this.state.input;
    e.current_page = 1, r.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: e, input: r }, () => {
      this.handleFetchEntities();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col font-poppinsRegular w-full", children: [
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full mb-5", children: /* @__PURE__ */ a.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center", children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex w-full flex-col 2xl:w-auto", children: this.state.settings.header !== void 0 ? w.isEmptyOrNull(this.state.settings.header.title) ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
          /* @__PURE__ */ a.jsx("h3", { className: `${this.state.settings.header !== void 0 ? w.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
          /* @__PURE__ */ a.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm ", children: this.handleHint() })
        ] }) : null }),
        /* @__PURE__ */ a.jsx("div", { className: "flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
          /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full relative", children: [
            /* @__PURE__ */ a.jsx("input", { className: "rounded lg:rounded-full w-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-0  bg-inherit dark:text-white", name: "search", onChange: this.onChangeValue, onKeyDown: this.handleKeyDown, id: "search", type: "text", placeholder: "Search" }),
            this.state.input.is_searching && !w.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
              /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
            ] }) : null
          ] }) }),
          /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ a.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
            /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
            /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
          ] }) }),
          this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", {}),
      /* @__PURE__ */ a.jsx("div", { className: `scrollable_table flex w-full flex-col h-[calc(100vh-160px)] overflow-auto ${this.props.className}`, onScroll: this.handleScroll, children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ a.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ a.jsx("thead", { className: " w-full ", children: /* @__PURE__ */ a.jsx("tr", { className: "text-left text-sm w-full bg-white dark:bg-darkPrimary", children: this.tableHeads() }) }),
        /* @__PURE__ */ a.jsx("tbody", { className: "w-full", children: this.props.children })
      ] }) }) }) })
    ] }) });
  }
}
class yo extends F {
  constructor(e) {
    super(e);
    p(this, "handleToggle", () => {
      this.setState({ showForms: !this.state.showForms });
    });
    p(this, "handleRetry", () => {
      this.props.onRetry && this.props.onRetry();
    });
    this.state = {
      showForms: !1
    };
  }
  render() {
    const { error: e, handleCloseAlert: r, onRetry: n } = this.props, i = e.type.toLowerCase() === "error";
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `flex w-full flex-col text-sm flex-wrap ${i ? "bg-red-200 text-red-600" : "bg-green-200 text-green-600"} border-[1px] ${i ? "border-red-400" : "border-green-400"} px-4 py-3 rounded relative mb-4`,
        role: "alert",
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "font-poppinsBold mr-4", children: [
            e.type,
            "!"
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "sm:inline flex w-full flex-wrap ", children: e.message }),
          /* @__PURE__ */ a.jsx("span", { className: "absolute top-0 bottom-0 right-0 px-2 py-3", children: /* @__PURE__ */ a.jsx(
            "svg",
            {
              onClick: r,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `fill-current h-5 w-5 cursor-pointer ${i ? "text-red-500" : "text-green-500"}`,
              children: /* @__PURE__ */ a.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                  clipRule: "evenodd"
                }
              )
            }
          ) }),
          n && // Changed to onRetry
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-end items-center", children: /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "bg-red-400 text-red-700 border-[1px] cursor-pointer hover:bg-red-500 hover:text-white transition-all border-red-500 px-2 py-2 rounded font-poppinsBold",
              onClick: this.handleRetry,
              children: "Retry"
            }
          ) })
        ]
      }
    ) });
  }
}
class Wo extends F {
  constructor(e) {
    super(e);
    p(this, "renderedSettings", []);
    p(this, "dataCollection", []);
    p(this, "chunkSize", 6);
    p(this, "currentIndex", 0);
    p(this, "hasClear", !1);
    p(this, "isLoading", !1);
    p(this, "current_page", 0);
    p(this, "search", "");
    p(this, "errors", (e) => {
      this.setState({ alerterror: e });
    });
    p(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: C.ERROR, color: "" } });
    });
    p(this, "handleError", (e = "") => {
      try {
        const r = { ...this.state.error, state: !0, message: w.isEmptyOrNull(e) ? C.ERROR_MESSAGE : e, type: C.ERROR, color: "red" };
        this.setState({ isLoading: !1, error: r }, () => {
          this.props.handleOnLoaded(this.renderedSettings, C.ERROR);
        });
      } catch {
      }
    });
    p(this, "handleFetchEntities", () => {
      this.props.handleOnLoaded(this.renderedSettings, C.LOADING), this.fetchEntities();
    });
    p(this, "handleFiltered", () => {
    });
    p(this, "handleRetry", () => {
      try {
        this.handleClear();
        const e = { ...this.state.custom_settings, current_page: 1 };
        this.setState({ isLoading: !0, error: { state: !1, message: "", type: C.ERROR, color: "" }, custom_settings: e }, this.handleFetchEntities);
      } catch {
      }
    });
    p(this, "handleClear", () => {
      const e = { ...this.state.input, is_searching: !1 }, r = { ...this.state.entities, meta: { ...this.state.entities.meta, total: 0 } };
      this.setState({ input: e }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: r });
    });
    p(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          const e = { ...this.state.custom_settings }, r = this.state.entities.meta.next_page;
          r !== null && !w.isEmptyOrNull(r) && this.current_page !== r && (e.current_page = r, this.current_page = r, this.setState({ isLoading: !0, custom_settings: e }, () => {
            this.props.handleOnLoaded(this.renderedSettings, C.LOADING), this.handleFetchEntities();
          }));
        }
      } catch {
      }
    });
    p(this, "handleOnSuccess", (e) => {
      this.renderedSettings.splice(e, 1), this.dataCollection.splice(e, 1);
      let r = this.state.entities;
      r.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    p(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    p(this, "onChangeValue", (e) => {
      try {
        this.search = e.target.value, w.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearching();
      } catch {
      }
    });
    p(this, "handleKeyDown", (e) => {
      try {
        e.key === "Enter" && !w.isEmptyOrNull(this.search) && this.handleSearching();
      } catch (r) {
        console.error("Error in handleKeyDown:", r);
      }
    });
    p(this, "handleSearching", () => {
      try {
        const { custom_settings: e, input: r } = this.state;
        e.current_page = 1, r.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: e, input: r }, () => {
          this.handleFetchEntities();
        });
      } catch (e) {
        console.error("Error in handleSearching:", e);
      }
    });
    p(this, "handleHint", () => {
      try {
        return this.state.settings.header.hint ? this.state.settings.header.hint : this.state.error.state ? "" : `Loaded ${this.state.entities.meta.total} data`;
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
    });
    this.state = {
      selected: -1,
      isLoading: !0,
      input: {
        search: "",
        is_searching: !1
      },
      entities: {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          from: 1,
          last_page: 1,
          per_page: 500,
          to: 1,
          total: 0
        }
      },
      custom_settings: {
        sorted_column: "",
        order: "asc",
        first_page: 1,
        current_page: 1,
        offset: 4
      },
      settings: {
        default_sorted_column: "",
        header: {
          title: "",
          class: "",
          hint: ""
        },
        headers: [],
        columns: [],
        table_data: []
      },
      error: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: C.ERROR,
        color: ""
      }
    }, this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    const { default_sorted_column: e } = this.props.settings, r = { ...this.state.custom_settings, sorted_column: e };
    this.chunkSize = this.props.settings.pagination.per_page, this.setState({ custom_settings: r, settings: this.props.settings }, () => {
      this.handleFetchEntities();
    });
  }
  handleScroll(e) {
    const r = e.currentTarget;
    r.scrollTop + r.clientHeight >= r.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      const e = { ...this.state.entities }, r = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`, i = (await P.get(r, {
        headers: {
          "X-CSRFToken": `${W.getCookie("csrftoken")}`,
          Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
        }
      })).data;
      i.success ? (e.data = [], this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(i.data.data), this.hasClear = !1, e.meta = i.data.meta, this.setState({ isLoading: !1, entities: e }, this.initialChunck)) : this.handleError();
    } catch {
      this.handleError();
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const e = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let r = this.currentIndex; r < e; r++) {
        const n = this.dataCollection[r];
        this.renderedSettings.some((i) => i[this.props.settings.deleteinfo.id] === n[this.props.settings.deleteinfo.id]) || this.renderedSettings.push(n);
      }
      this.props.handleOnLoaded(this.renderedSettings, C.LOADED);
    } catch {
    }
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full mb-5", children: [
        /* @__PURE__ */ a.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full flex-col 2xl:w-auto", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
            /* @__PURE__ */ a.jsx("h3", { className: `${this.state.settings.header !== void 0 ? w.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
            /* @__PURE__ */ a.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
          ] }) : null }),
          this.state.settings.search == null || this.state.settings.search ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
            /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full relative", children: [
              /* @__PURE__ */ a.jsx("input", { className: "rounded lg:rounded-full w-full py-3 px-4 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-1 dark:focus:ring-gray-800 dark:bg-gray-700 dark:text-white", name: "search", onChange: this.onChangeValue, onKeyDown: this.handleKeyDown, id: "search", type: "text", placeholder: "Search" }),
              this.state.input.is_searching && !w.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }) : null
            ] }) }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ a.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
              /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
              /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
            ] }) }),
            this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ a.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
          ] }) }) }) }) : null
        ] }),
        this.state.alerterror.state ? /* @__PURE__ */ a.jsx(yo, { error: this.state.alerterror, handleCloseAlert: this.handleReset }) : null
      ] }),
      /* @__PURE__ */ a.jsx("div", {}),
      /* @__PURE__ */ a.jsx("div", { className: `scrollable_table flex flex-col h-[calc(100vh-290px)] overflow-auto  scrollbar-width ${this.props.className}`, onScroll: this.handleScroll, children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col ", children: /* @__PURE__ */ a.jsx("div", { className: "flex w-full", children: this.props.children }) }) })
    ] }) });
  }
}
class Vo extends X.Component {
  constructor(s) {
    super(s);
  }
  render() {
    return /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: this.props.onClick,
        disabled: this.props.hasRequest,
        className: `${this.props.type === C.SMALL ? " px-4 py-3 " : " px-6 py-4 "} text-xs justifiy-center items-center w-full lg:w-auto ${w.isEmptyOrNull(this.props.className) ? "bg-[#212174] hover:bg-[#212174]/75  text-white dark:bg-[#282828] dark:hover:bg-white dark:hover:text-black" : this.props.className}  font-poppinsRegular items-center   rounded-full cursor-pointer  transition duration-500 ease-in-out`,
        children: this.props.hasRequest ? /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ a.jsxs(
            "svg",
            {
              role: "status",
              className: "inline mr-3 w-4 h-4 text-white animate-spin",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ a.jsx(
                  "path",
                  {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "#E5E7EB"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "path",
                  {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentColor"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsxs("span", { children: [
            this.props.label_request,
            "..."
          ] })
        ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex justify-center items-center", children: [
          this.props.icon,
          /* @__PURE__ */ a.jsx("span", { children: this.props.label })
        ] })
      }
    );
  }
}
class bo extends F {
  constructor(e) {
    super(e);
    p(this, "toggleDropdown", () => {
      try {
        (this.props.request.isEnable === void 0 || this.props.request.isEnable) && this.setState((e) => ({
          isOpen: !e.isOpen
        }));
      } catch (e) {
        console.error(e);
      }
    });
    p(this, "componentDidMount", async () => {
      this.setState({ isLoading: !0 }, this.fetch);
    });
    p(this, "fetch", async () => {
      const { serverRequest: e, url: r, list: n } = this.props.request;
      if (e && r != null)
        try {
          const o = (await P.get(r, {
            headers: {
              "X-CSRFToken": `${W.getCookie("csrftoken")}`,
              Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
            }
          })).data;
          o.success ? this.setState({ datalist: o.data, isLoading: !1 }) : this.handleAlert();
        } catch {
          this.handleAlert();
        }
      else n && this.setState({ datalist: n, isLoading: !1 });
    });
    p(this, "handleOnSelect", (e) => {
      this.setState({ isOpen: !1 }, () => {
        this.props.request.onSelect(e);
      });
    });
    p(this, "handleClickAway", () => {
      this.setState({ isOpen: !1 });
    });
    p(this, "handleAlert", (e) => {
      this.setState({ isLoading: !1 });
    });
    this.state = {
      isOpen: !1,
      datalist: [],
      isLoading: !1
    };
  }
  render() {
    return /* @__PURE__ */ a.jsx(Ke, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ a.jsxs("div", { className: "inline-block text-left dropdown font-poppinsRegular dark:text-white", children: [
      /* @__PURE__ */ a.jsx("span", { className: "rounded-md shadow-sm", children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `flex relative ${this.props.className}`,
          onClick: this.toggleDropdown,
          "aria-expanded": this.state.isOpen ? "true" : "false",
          children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ a.jsx("div", { className: "w-full", children: this.props.children }),
            this.props.request.showarrow ? /* @__PURE__ */ a.jsx("div", { className: " justify-center items-center mt-1 ml-1", children: this.state.isOpen ? /* @__PURE__ */ a.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-4 h-4", children: /* @__PURE__ */ a.jsx("path", { d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z" }) }) : /* @__PURE__ */ a.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-4 h-4", children: /* @__PURE__ */ a.jsx("path", { d: "M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z" }) }) }) : null
          ] })
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `${this.state.isOpen ? "opacity-100 visible" : "opacity-0 invisible"} dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-20 mt-3`,
          children: /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute flex flex-col w-72 min-h-24 -top-5 lg:min-w-96 z-20 lg:max-w-96 mt-2 py-3 max-h-96 overflow-auto origin-top-right bg-white dark:bg-darkPrimary  border border-[#e5e7eb] dark:border-[#1a1a1a] divide-y dark:divide-[#1a1a1a] divide-[#f3f4f6]  rounded-md shadow-sm outline-none ${this.props.dropdownClassName}`,
              children: this.state.isLoading ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : this.state.datalist.map((e, r) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "px-4 py-3 text-sm cursor-pointer hover:bg-gray-100  dark:hover:bg-white dark:hover:text-black transition ease-in-out duration-150",
                  onClick: () => this.handleOnSelect(e),
                  children: e.name
                },
                `piexmxx${r}`
              ))
            }
          )
        }
      )
    ] }) });
  }
}
class Ho extends F {
  constructor(e) {
    super(e);
    p(this, "handleFileUpload", (e) => {
      var n;
      const r = (n = e.target.files) == null ? void 0 : n[0];
      if (r)
        if (this.state.image.type === C.DOCUMENT) {
          const { filedata: i } = this.state;
          if (r.type === "application/pdf")
            i.name = r.name, this.setState({ filedata: i }, () => this.props.image.onSelected(r));
          else
            return this.handleAlert("Error: You can only upload pdf file format."), !1;
        } else {
          if (!r.name.toLowerCase().match(/\.(png|jpeg|jpg)$/))
            return this.handleAlert("Error: You can only upload images in PNG, JPEG or JPG format."), !1;
          const i = new FileReader();
          i.readAsDataURL(r), i.onloadend = () => {
            this.setState({ hasError: !1, selectedFile: r, selectedImage: i.result }, () => {
              this.props.image.onSelected(r);
            });
          };
        }
    });
    p(this, "handleCancelUpload", () => {
      const { image: e } = this.state;
      e.url = "", this.setState({ selectedFile: null, selectedImage: null, image: e });
    });
    p(this, "handleAlert", (e) => {
      alert(e);
    });
    this.state = {
      selectedImage: null,
      selectedFile: null,
      hasLoaded: !1,
      hasError: !1,
      filedata: {
        name: ""
      },
      image: {
        url: "",
        title: ""
      }
    };
  }
  componentDidUpdate(e) {
    !w.isEmptyOrNull(this.props.image.url) && w.isEmptyOrNull(this.state.image.url) && this.setState({ image: this.props.image });
  }
  async componentDidMount() {
    this.props.image !== void 0 && this.setState({ image: this.props.image });
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "relative z-0 mb-7 w-full group", children: /* @__PURE__ */ a.jsx("div", { className: `bg-gray-200 dark:bg-darkPrimary dark:text-white rounded-lg w-full shadow-sm h-40 justify-center items-center cursor-pointer relative overflow-hidden group ${this.state.selectedImage !== null && this.state.selectedImage !== void 0 ? "p-0" : w.isEmptyOrNull(this.state.image.url) ? "p-6" : ""} ${this.props.className}`, id: "dropzone", children: this.state.selectedImage !== null && this.state.selectedImage !== void 0 || !w.isEmptyOrNull(this.state.image.url) ? /* @__PURE__ */ a.jsxs("div", { className: "flex w-full h-full relative", children: [
      /* @__PURE__ */ a.jsx(
        "img",
        {
          className: "object-center object-cover w-full h-full cursor-pointer m-auto",
          alt: "photo",
          src: `${this.state.selectedImage !== null && this.state.selectedImage !== void 0 ? this.state.selectedImage : this.state.image.url}`
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "absolute left-0 bottom-0 bg-black bg-opacity-5 right-2 h-full w-full top-0 ", children: /* @__PURE__ */ a.jsx("div", { className: "cursor-pointer absolute top-2 right-2 w-6 h-6 text-white rounded-full justify-center items-center", onClick: this.handleCancelUpload, children: /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5 rounded-full border-[1px] border-white m-auto", children: /* @__PURE__ */ a.jsx("path", { d: "M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" }) }) }) })
    ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("input", { type: "file", className: "absolute inset-0 text-gray-500 w-full h-full opacity-0 z-50", accept: `${w.isEmptyOrNull(this.state.image.accept) ? "image/*" : this.state.image.accept}`, onChange: this.handleFileUpload }),
      /* @__PURE__ */ a.jsx("div", { className: "flex w-full h-full justify-center items-center", children: /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
        w.isEmptyOrNull(this.state.image.placeholder) ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", className: "mx-auto h-12 w-12 text-gray-500 dark:text-white", viewBox: "0 0 24 24", strokeWidth: 0.7, stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }) }) : /* @__PURE__ */ a.jsx("div", { className: "mx-auto h-12 w-12 text-gray-500", children: /* @__PURE__ */ a.jsx(
          "img",
          {
            className: "object-center object-cover w-full h-full cursor-pointer m-auto",
            alt: "photo",
            src: `${this.state.image.placeholder}`
          }
        ) }),
        /* @__PURE__ */ a.jsx("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: /* @__PURE__ */ a.jsx("label", { className: "relative cursor-pointer font-poppinsBold", children: this.state.image.type === C.DOCUMENT && !w.isEmptyOrNull(this.state.filedata.name) ? this.state.filedata.name : this.state.image.title }) }),
        /* @__PURE__ */ a.jsx("p", { className: "mt-1 text-xs text-gray-500", children: w.isEmptyOrNull(this.state.image.hint) ? "PNG, JPG up to 1MB" : this.state.image.hint })
      ] }) })
    ] }) }) }) });
  }
}
class qo extends F {
  constructor(s) {
    super(s), this.state = {
      content: null
    };
  }
  render() {
    const s = [
      { id: C.EDIT, name: "Edit" },
      { id: C.DELETE, name: "Delete" }
    ], e = this.props.optionList && this.props.optionList.length > 0 ? this.props.optionList : s;
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: this.props.isLoading ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full h-24 animate-pulse", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full h-full bg-gray-300 dark:bg-darkPrimary" }) }) : /* @__PURE__ */ a.jsx(
      bo,
      {
        className: "cursor-pointer",
        request: {
          list: e,
          serverRequest: !1,
          isEnable: !0,
          onSelect: (r) => {
            this.props.onAction(r);
          }
        },
        children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full border border-l-4 rounded-lg group hover:bg-primary dark:hover:bg-white  dark:text-black hover:text-white dark:hover:text-black cursor-pointer uppercase hover:border-l-white dark:hover:border-l-white  border-l-primary dark:border-l-darkDialogBackground bg-white dark:bg-darkPrimary justify-center items-center min-h-24 dark:border-darkDialogBackground border-gray-200 group", children: /* @__PURE__ */ a.jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full", children: this.props.name !== null && this.props.name !== void 0 ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          w.isEmptyOrNull(this.props.image) ? null : /* @__PURE__ */ a.jsx("div", { className: "flex h-24 mb-2", children: /* @__PURE__ */ a.jsx(
            "img",
            {
              className: "object-center object-cover rounded-lg  transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto",
              alt: "photo",
              src: `${this.props.image}`
            }
          ) }),
          /* @__PURE__ */ a.jsx("div", { className: "text-sm line-clamp-2 text-center dark:text-white dark:group-hover:text-black", children: this.props.name }),
          w.isEmptyOrNull(this.props.caption) ? null : /* @__PURE__ */ a.jsxs("div", { className: "w-full text-xs line-clamp-1 lowercase justify-center lg:text-center text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black lg:line-clamp-2", children: [
            "(",
            this.props.caption,
            ")"
          ] })
        ] }) : this.props.children }) }) })
      }
    ) });
  }
}
class Go extends F {
  constructor(s) {
    super(s), this.state = {};
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "flex w-full flex-col h-96 justify-center items-center", children: /* @__PURE__ */ a.jsx("div", { className: "text-sm text-red-600 dark:text-white font-poppinsRegular", children: w.isEmptyOrNull(this.props.errormessage) ? C.ERROR_MESSAGE : this.props.errormessage }) }) });
  }
}
class Yo extends F {
  constructor(s) {
    super(s), this.state = {};
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full items-center justify-center dark:text-white space-y-5", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col h-96 justify-center items-center", children: [
      w.isEmptyOrNull(this.props.image) ? null : /* @__PURE__ */ a.jsx("div", { className: "w-24", children: /* @__PURE__ */ a.jsx("img", { className: "object-center object-cover w-full h-full cursor-pointer m-auto", alt: "photo", src: `${this.props.image}` }) }),
      /* @__PURE__ */ a.jsx("div", { className: "text-sm dark:text-white font-poppinsRegular", children: this.props.message })
    ] }) }) });
  }
}
class Jo extends F {
  constructor(e) {
    super(e);
    p(this, "handleClose", () => {
      this.props.onClose();
    });
    this.state = {
      modal: null
    };
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "fixed z-[4000] inset-0 overflow-y-auto font-poppinsRegular", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ a.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ a.jsx(Ke, { onClickOutside: this.handleClose, children: /* @__PURE__ */ a.jsx("div", { className: `inline-block align-bottom font-poppinsRegular px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle ${w.isEmptyOrNull(this.props.className) ? " sm:max-w-lg w-full sm:p-6" : this.props.className}`, children: this.props.hasRequest ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full h-48 justify-center items-center", children: [
        /* @__PURE__ */ a.jsx(
          "svg",
          {
            version: "1.1",
            id: "L9",
            className: "w-24 h-24  text-white",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 0 0",
            xmlSpace: "preserve",
            children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ a.jsx(
              "animateTransform",
              {
                attributeName: "transform",
                attributeType: "XML",
                type: "rotate",
                dur: "1s",
                from: "0 50 50",
                to: "360 50 50",
                repeatCount: "indefinite"
              }
            ) })
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { children: [
          this.props.action_label !== null && this.props.action_label !== void 0 ? this.props.action_label : "creating",
          " ...."
        ] })
      ] }) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ a.jsx("div", { className: "relative sm:flex sm:items-start items-center", children: this.props.children }) }) }) }) })
    ] }) }) }) });
  }
}
var At = function(t, s) {
  return At = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }, At(t, s);
};
function Xe(t, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
  At(t, s);
  function e() {
    this.constructor = t;
  }
  t.prototype = s === null ? Object.create(s) : (e.prototype = s.prototype, new e());
}
function Lt(t) {
  var s = typeof Symbol == "function" && Symbol.iterator, e = s && t[s], r = 0;
  if (e) return e.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Pt(t, s) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e) return t;
  var r = e.call(t), n, i = [], o;
  try {
    for (; (s === void 0 || s-- > 0) && !(n = r.next()).done; ) i.push(n.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      n && !n.done && (e = r.return) && e.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function Dt(t, s, e) {
  if (e || arguments.length === 2) for (var r = 0, n = s.length, i; r < n; r++)
    (i || !(r in s)) && (i || (i = Array.prototype.slice.call(s, 0, r)), i[r] = s[r]);
  return t.concat(i || Array.prototype.slice.call(s));
}
function Q(t) {
  return typeof t == "function";
}
function Hs(t) {
  var s = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, e = t(s);
  return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
}
var xt = Hs(function(t) {
  return function(e) {
    t(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
  };
});
function Mt(t, s) {
  if (t) {
    var e = t.indexOf(s);
    0 <= e && t.splice(e, 1);
  }
}
var Ze = function() {
  function t(s) {
    this.initialTeardown = s, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var s, e, r, n, i;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var l = Lt(o), u = l.next(); !u.done; u = l.next()) {
              var h = u.value;
              h.remove(this);
            }
          } catch (b) {
            s = { error: b };
          } finally {
            try {
              u && !u.done && (e = l.return) && e.call(l);
            } finally {
              if (s) throw s.error;
            }
          }
        else
          o.remove(this);
      var d = this.initialTeardown;
      if (Q(d))
        try {
          d();
        } catch (b) {
          i = b instanceof xt ? b.errors : [b];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var y = Lt(f), x = y.next(); !x.done; x = y.next()) {
            var g = x.value;
            try {
              Vr(g);
            } catch (b) {
              i = i ?? [], b instanceof xt ? i = Dt(Dt([], Pt(i)), Pt(b.errors)) : i.push(b);
            }
          }
        } catch (b) {
          r = { error: b };
        } finally {
          try {
            x && !x.done && (n = y.return) && n.call(y);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (i)
        throw new xt(i);
    }
  }, t.prototype.add = function(s) {
    var e;
    if (s && s !== this)
      if (this.closed)
        Vr(s);
      else {
        if (s instanceof t) {
          if (s.closed || s._hasParent(this))
            return;
          s._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(s);
      }
  }, t.prototype._hasParent = function(s) {
    var e = this._parentage;
    return e === s || Array.isArray(e) && e.includes(s);
  }, t.prototype._addParent = function(s) {
    var e = this._parentage;
    this._parentage = Array.isArray(e) ? (e.push(s), e) : e ? [e, s] : s;
  }, t.prototype._removeParent = function(s) {
    var e = this._parentage;
    e === s ? this._parentage = null : Array.isArray(e) && Mt(e, s);
  }, t.prototype.remove = function(s) {
    var e = this._finalizers;
    e && Mt(e, s), s instanceof t && s._removeParent(this);
  }, t.EMPTY = function() {
    var s = new t();
    return s.closed = !0, s;
  }(), t;
}(), qs = Ze.EMPTY;
function Gs(t) {
  return t instanceof Ze || t && "closed" in t && Q(t.remove) && Q(t.add) && Q(t.unsubscribe);
}
function Vr(t) {
  Q(t) ? t() : t.unsubscribe();
}
var Ys = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Js = {
  setTimeout: function(t, s) {
    for (var e = [], r = 2; r < arguments.length; r++)
      e[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Dt([t, s], Pt(e)));
  },
  clearTimeout: function(t) {
    var s = Js.delegate;
    return ((s == null ? void 0 : s.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function Eo(t) {
  Js.setTimeout(function() {
    throw t;
  });
}
function Hr() {
}
function Be(t) {
  t();
}
var Ks = function(t) {
  Xe(s, t);
  function s(e) {
    var r = t.call(this) || this;
    return r.isStopped = !1, e ? (r.destination = e, Gs(e) && e.add(r)) : r.destination = jo, r;
  }
  return s.create = function(e, r, n) {
    return new It(e, r, n);
  }, s.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, s.prototype.error = function(e) {
    this.isStopped || (this.isStopped = !0, this._error(e));
  }, s.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, s.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, s.prototype._next = function(e) {
    this.destination.next(e);
  }, s.prototype._error = function(e) {
    try {
      this.destination.error(e);
    } finally {
      this.unsubscribe();
    }
  }, s.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, s;
}(Ze), Co = Function.prototype.bind;
function vt(t, s) {
  return Co.call(t, s);
}
var No = function() {
  function t(s) {
    this.partialObserver = s;
  }
  return t.prototype.next = function(s) {
    var e = this.partialObserver;
    if (e.next)
      try {
        e.next(s);
      } catch (r) {
        Me(r);
      }
  }, t.prototype.error = function(s) {
    var e = this.partialObserver;
    if (e.error)
      try {
        e.error(s);
      } catch (r) {
        Me(r);
      }
    else
      Me(s);
  }, t.prototype.complete = function() {
    var s = this.partialObserver;
    if (s.complete)
      try {
        s.complete();
      } catch (e) {
        Me(e);
      }
  }, t;
}(), It = function(t) {
  Xe(s, t);
  function s(e, r, n) {
    var i = t.call(this) || this, o;
    if (Q(e) || !e)
      o = {
        next: e ?? void 0,
        error: r ?? void 0,
        complete: n ?? void 0
      };
    else {
      var l;
      i && Ys.useDeprecatedNextContext ? (l = Object.create(e), l.unsubscribe = function() {
        return i.unsubscribe();
      }, o = {
        next: e.next && vt(e.next, l),
        error: e.error && vt(e.error, l),
        complete: e.complete && vt(e.complete, l)
      }) : o = e;
    }
    return i.destination = new No(o), i;
  }
  return s;
}(Ks);
function Me(t) {
  Eo(t);
}
function So(t) {
  throw t;
}
var jo = {
  closed: !0,
  next: Hr,
  error: So,
  complete: Hr
}, Ro = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ko(t) {
  return t;
}
function Oo(t) {
  return t.length === 0 ? ko : t.length === 1 ? t[0] : function(e) {
    return t.reduce(function(r, n) {
      return n(r);
    }, e);
  };
}
var qr = function() {
  function t(s) {
    s && (this._subscribe = s);
  }
  return t.prototype.lift = function(s) {
    var e = new t();
    return e.source = this, e.operator = s, e;
  }, t.prototype.subscribe = function(s, e, r) {
    var n = this, i = To(s) ? s : new It(s, e, r);
    return Be(function() {
      var o = n, l = o.operator, u = o.source;
      i.add(l ? l.call(i, u) : u ? n._subscribe(i) : n._trySubscribe(i));
    }), i;
  }, t.prototype._trySubscribe = function(s) {
    try {
      return this._subscribe(s);
    } catch (e) {
      s.error(e);
    }
  }, t.prototype.forEach = function(s, e) {
    var r = this;
    return e = Gr(e), new e(function(n, i) {
      var o = new It({
        next: function(l) {
          try {
            s(l);
          } catch (u) {
            i(u), o.unsubscribe();
          }
        },
        error: i,
        complete: n
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(s) {
    var e;
    return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(s);
  }, t.prototype[Ro] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var s = [], e = 0; e < arguments.length; e++)
      s[e] = arguments[e];
    return Oo(s)(this);
  }, t.prototype.toPromise = function(s) {
    var e = this;
    return s = Gr(s), new s(function(r, n) {
      var i;
      e.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return n(o);
      }, function() {
        return r(i);
      });
    });
  }, t.create = function(s) {
    return new t(s);
  }, t;
}();
function Gr(t) {
  var s;
  return (s = t ?? Ys.Promise) !== null && s !== void 0 ? s : Promise;
}
function _o(t) {
  return t && Q(t.next) && Q(t.error) && Q(t.complete);
}
function To(t) {
  return t && t instanceof Ks || _o(t) && Gs(t);
}
var Ao = Hs(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Xs = function(t) {
  Xe(s, t);
  function s() {
    var e = t.call(this) || this;
    return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
  }
  return s.prototype.lift = function(e) {
    var r = new Yr(this, this);
    return r.operator = e, r;
  }, s.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ao();
  }, s.prototype.next = function(e) {
    var r = this;
    Be(function() {
      var n, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Lt(r.currentObservers), l = o.next(); !l.done; l = o.next()) {
            var u = l.value;
            u.next(e);
          }
        } catch (h) {
          n = { error: h };
        } finally {
          try {
            l && !l.done && (i = o.return) && i.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    });
  }, s.prototype.error = function(e) {
    var r = this;
    Be(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = e;
        for (var n = r.observers; n.length; )
          n.shift().error(e);
      }
    });
  }, s.prototype.complete = function() {
    var e = this;
    Be(function() {
      if (e._throwIfClosed(), !e.isStopped) {
        e.isStopped = !0;
        for (var r = e.observers; r.length; )
          r.shift().complete();
      }
    });
  }, s.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(s.prototype, "observed", {
    get: function() {
      var e;
      return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), s.prototype._trySubscribe = function(e) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e);
  }, s.prototype._subscribe = function(e) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
  }, s.prototype._innerSubscribe = function(e) {
    var r = this, n = this, i = n.hasError, o = n.isStopped, l = n.observers;
    return i || o ? qs : (this.currentObservers = null, l.push(e), new Ze(function() {
      r.currentObservers = null, Mt(l, e);
    }));
  }, s.prototype._checkFinalizedStatuses = function(e) {
    var r = this, n = r.hasError, i = r.thrownError, o = r.isStopped;
    n ? e.error(i) : o && e.complete();
  }, s.prototype.asObservable = function() {
    var e = new qr();
    return e.source = this, e;
  }, s.create = function(e, r) {
    return new Yr(e, r);
  }, s;
}(qr), Yr = function(t) {
  Xe(s, t);
  function s(e, r) {
    var n = t.call(this) || this;
    return n.destination = e, n.source = r, n;
  }
  return s.prototype.next = function(e) {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || n === void 0 || n.call(r, e);
  }, s.prototype.error = function(e) {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || n === void 0 || n.call(r, e);
  }, s.prototype.complete = function() {
    var e, r;
    (r = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || r === void 0 || r.call(e);
  }, s.prototype._subscribe = function(e) {
    var r, n;
    return (n = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e)) !== null && n !== void 0 ? n : qs;
  }, s;
}(Xs);
const Ce = new Xs(), Lo = {
  fileViewer: (t, s) => Ce.next({ data: t, type: s }),
  sendData: (t, s) => Ce.next({ data: t, type: s }),
  send: (t) => Ce.next({ type: t }),
  clearMessages: () => Ce.next({}),
  getSubscription: () => Ce.asObservable()
};
class Ko extends F {
  constructor(e) {
    super(e);
    p(this, "subscription");
    p(this, "handleRequest", async () => {
      try {
        const e = new FormData(), { data: r } = this.state;
        Object.keys(r).forEach((n) => {
          e.append(n, r[n]);
        }), this.setState({ hasRequest: !0, response: "" }), P.post(this.props.url, e, {
          headers: {
            "X-CSRFToken": `${W.getCookie("csrftoken")}`,
            Authorization: `Token ${W.get(C.ACCESS_TOKEN)}`
          }
        }).then(
          (n) => {
            n.data.success ? this.handleAlert(C.SUCCESS) : this.handleAlert(C.ERROR);
          }
        ).catch((n) => {
          this.handleAlert();
        });
      } catch {
        this.handleAlert();
      }
    });
    p(this, "handleAlert", (e = C.ERROR) => {
      this.setState({ hasRequest: !1, response: e });
    });
    p(this, "renderTableData", () => {
      const { data: e } = this.state;
      return this.props.headers.map((r, n) => {
        const i = w.toStringDefault(e[r], "");
        return w.toString(r).toLowerCase() !== "action" ? /* @__PURE__ */ a.jsx("td", { className: "px-6 py-3", children: i }, n) : /* @__PURE__ */ a.jsx("td", { children: /* @__PURE__ */ a.jsx("span", { className: "flex w-full justify-center text-xs", children: this.state.hasRequest ? /* @__PURE__ */ a.jsx("span", { className: "", children: /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline z-0 mr-3 w-5 h-5 dark:text-white dark:group-hover:text-black animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
          /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
        ] }) }) : w.isEmptyOrNull(this.state.response) ? null : this.state.response === C.ERROR ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 30 30", fill: "currentColor", className: "w-8 h-8 text-red-600 cursor-pointer", onClick: this.handleRequest, children: /* @__PURE__ */ a.jsx("path", { d: "M9.77 15.53c0 .94.24 1.82.71 2.62s1.11 1.44 1.91 1.9c.8.47 1.67.7 2.61.7.96 0 1.83-.23 2.63-.69.8-.46 1.43-1.09 1.89-1.89.46-.8.69-1.68.69-2.63 0-.24-.08-.44-.24-.61a.764.764 0 00-.59-.25c-.23 0-.43.08-.6.25-.17.17-.25.37-.25.61 0 .98-.35 1.82-1.04 2.51-.69.69-1.53 1.04-2.51 1.04-.97 0-1.79-.35-2.47-1.04-.68-.69-1.02-1.53-1.02-2.51 0-.85.26-1.62.79-2.31s1.14-1.06 1.84-1.1l-.38.37c-.16.18-.24.37-.24.58 0 .22.08.42.24.6.36.35.77.35 1.21 0l1.84-1.82c.16-.12.24-.33.24-.62 0-.26-.08-.45-.24-.57L14.97 8.8c-.18-.16-.37-.24-.57-.24-.25 0-.46.08-.63.25-.17.17-.25.37-.25.6 0 .24.08.45.24.61l.38.36c-1.25.22-2.29.82-3.12 1.8s-1.25 2.09-1.25 3.35z" }) }) }) : /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5 text-green-600", children: /* @__PURE__ */ a.jsx("path", { d: "M2.394 13.742l4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084l-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z" }) }) }) }) }, n);
      });
    });
    this.state = {
      hasRequest: !1,
      response: "",
      data: {}
    };
  }
  componentWillUnmount() {
    this.subscription && this.subscription.unsubscribe();
  }
  async componentDidMount() {
    this.setState({ data: this.props.data }), this.subscription = Lo.getSubscription().subscribe((e) => {
      e.type === C.DATASETTABLE_REQUEST && this.handleRequest();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: this.props.isLoading ? /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("td", {}) }) : /* @__PURE__ */ a.jsx("tr", { className: "text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black group", children: this.renderTableData() }) });
  }
}
class Xo extends F {
  constructor(e) {
    super(e);
    p(this, "toggleAccordion", () => {
      this.setState((e) => ({
        isOpen: !e.isOpen
      }));
    });
    this.state = {
      isOpen: !1
    };
  }
  render() {
    const { isOpen: e } = this.state, { children: r, accordionHeader: n, className: i } = this.props;
    return /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full font-poppinsRegular", children: /* @__PURE__ */ a.jsxs("div", { className: `rounded transition-all duration-300 ${e ? "mb-4" : ""}`, children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: `relative ${i}`,
          onClick: this.toggleAccordion,
          children: [
            /* @__PURE__ */ a.jsx("div", { className: "w-full", children: n(e) }),
            /* @__PURE__ */ a.jsx("div", { className: "absolute top-0 justify-center right-0 h-full items-center", children: /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full mr-3 items-center justify-center", children: /* @__PURE__ */ a.jsx(
              "svg",
              {
                className: `h-6 w-6 m-auto transition-transform transform ${e ? "rotate-180" : ""}`,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              }
            ) }) })
          ]
        }
      ),
      e && /* @__PURE__ */ a.jsx("div", { className: "submenu-enter submenu-enter-active", children: r })
    ] }) });
  }
}
export {
  Xo as DesmyAccordion,
  W as DesmyAuth,
  Vo as DesmyButton,
  Ke as DesmyClickOutsideListener,
  w as DesmyCommons,
  Wo as DesmyCustomDataTable,
  zo as DesmyDataSetTable,
  $o as DesmyDataTable,
  Ps as DesmyDropdown,
  Yo as DesmyEmpty,
  Ho as DesmyFilePicker,
  Fo as DesmyLazyloading,
  qo as DesmyListCard,
  Bo as DesmyModalContainer,
  Ya as DesmyModalHandler,
  Jo as DesmyModalWrapper,
  Go as DesmyNetworkError,
  bo as DesmyPopupMenu,
  xo as DesmyReadMoreOrLess,
  Io as DesmyRouter,
  Lo as DesmyRxServices,
  C as DesmyState,
  Ko as DesmyTableCard,
  Uo as DesmyTextInput
};
//# sourceMappingURL=index.es.js.map
