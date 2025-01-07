var Ed = Object.defineProperty;
var Cd = (e, r, t) => r in e ? Ed(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var y = (e, r, t) => Cd(e, typeof r != "symbol" ? r + "" : r, t);
import * as Oe from "react";
import T, { useRef as ue, useEffect as Ye, cloneElement as oi, Component as me, createRef as Yt, lazy as Sd, Suspense as Nd, useState as ke, useSyncExternalStore as Od, useLayoutEffect as Ur, isValidElement as jr, useMemo as sr, useCallback as Td, createContext as Ad, useContext as Rd, forwardRef as jt, useImperativeHandle as mr } from "react";
import Rr from "react-dom";
function An(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, qr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function jd() {
  if (Hs) return qr;
  Hs = 1;
  var e = T, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, c) {
    var d, h = {}, f = null, m = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l) n.call(l, d) && !a.hasOwnProperty(d) && (h[d] = l[d]);
    if (o && o.defaultProps) for (d in l = o.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: r, type: o, key: f, ref: m, props: h, _owner: i.current };
  }
  return qr.Fragment = t, qr.jsx = s, qr.jsxs = s, qr;
}
var Gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function _d() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = T, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), p = Symbol.iterator, v = "@@iterator";
    function g(b) {
      if (b === null || typeof b != "object")
        return null;
      var P = p && b[p] || b[v];
      return typeof P == "function" ? P : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(b) {
      {
        for (var P = arguments.length, q = new Array(P > 1 ? P - 1 : 0), ae = 1; ae < P; ae++)
          q[ae - 1] = arguments[ae];
        E("error", b, q);
      }
    }
    function E(b, P, q) {
      {
        var ae = x.ReactDebugCurrentFrame, ve = ae.getStackAddendum();
        ve !== "" && (P += "%s", q = q.concat([ve]));
        var be = q.map(function(de) {
          return String(de);
        });
        be.unshift("Warning: " + P), Function.prototype.apply.call(console[b], console, be);
      }
    }
    var S = !1, C = !1, D = !1, R = !1, N = !1, M;
    M = Symbol.for("react.module.reference");
    function Z(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === a || N || b === i || b === c || b === d || R || b === m || S || C || D || typeof b == "object" && b !== null && (b.$$typeof === f || b.$$typeof === h || b.$$typeof === s || b.$$typeof === o || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === M || b.getModuleId !== void 0));
    }
    function Q(b, P, q) {
      var ae = b.displayName;
      if (ae)
        return ae;
      var ve = P.displayName || P.name || "";
      return ve !== "" ? q + "(" + ve + ")" : q;
    }
    function te(b) {
      return b.displayName || "Context";
    }
    function z(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case o:
            var P = b;
            return te(P) + ".Consumer";
          case s:
            var q = b;
            return te(q._context) + ".Provider";
          case l:
            return Q(b, b.render, "ForwardRef");
          case h:
            var ae = b.displayName || null;
            return ae !== null ? ae : z(b.type) || "Memo";
          case f: {
            var ve = b, be = ve._payload, de = ve._init;
            try {
              return z(de(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, V = 0, W, K, $, X, O, k, L;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function B() {
      {
        if (V === 0) {
          W = console.log, K = console.info, $ = console.warn, X = console.error, O = console.group, k = console.groupCollapsed, L = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        V++;
      }
    }
    function H() {
      {
        if (V--, V === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, b, {
              value: W
            }),
            info: Y({}, b, {
              value: K
            }),
            warn: Y({}, b, {
              value: $
            }),
            error: Y({}, b, {
              value: X
            }),
            group: Y({}, b, {
              value: O
            }),
            groupCollapsed: Y({}, b, {
              value: k
            }),
            groupEnd: Y({}, b, {
              value: L
            })
          });
        }
        V < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = x.ReactCurrentDispatcher, J;
    function ee(b, P, q) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (ve) {
            var ae = ve.stack.trim().match(/\n( *(at )?)/);
            J = ae && ae[1] || "";
          }
        return `
` + J + b;
      }
    }
    var ne = !1, re;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new fe();
    }
    function F(b, P) {
      if (!b || ne)
        return "";
      {
        var q = re.get(b);
        if (q !== void 0)
          return q;
      }
      var ae;
      ne = !0;
      var ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = G.current, G.current = null, B();
      try {
        if (P) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (Ue) {
              ae = Ue;
            }
            Reflect.construct(b, [], de);
          } else {
            try {
              de.call();
            } catch (Ue) {
              ae = Ue;
            }
            b.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ue) {
            ae = Ue;
          }
          b();
        }
      } catch (Ue) {
        if (Ue && ae && typeof Ue.stack == "string") {
          for (var ce = Ue.stack.split(`
`), Le = ae.stack.split(`
`), Ae = ce.length - 1, je = Le.length - 1; Ae >= 1 && je >= 0 && ce[Ae] !== Le[je]; )
            je--;
          for (; Ae >= 1 && je >= 0; Ae--, je--)
            if (ce[Ae] !== Le[je]) {
              if (Ae !== 1 || je !== 1)
                do
                  if (Ae--, je--, je < 0 || ce[Ae] !== Le[je]) {
                    var it = `
` + ce[Ae].replace(" at new ", " at ");
                    return b.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", b.displayName)), typeof b == "function" && re.set(b, it), it;
                  }
                while (Ae >= 1 && je >= 0);
              break;
            }
        }
      } finally {
        ne = !1, G.current = be, H(), Error.prepareStackTrace = ve;
      }
      var Cr = b ? b.displayName || b.name : "", Qt = Cr ? ee(Cr) : "";
      return typeof b == "function" && re.set(b, Qt), Qt;
    }
    function Me(b, P, q) {
      return F(b, !1);
    }
    function nt(b) {
      var P = b.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ge(b, P, q) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return F(b, nt(b));
      if (typeof b == "string")
        return ee(b);
      switch (b) {
        case c:
          return ee("Suspense");
        case d:
          return ee("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return Me(b.render);
          case h:
            return Ge(b.type, P, q);
          case f: {
            var ae = b, ve = ae._payload, be = ae._init;
            try {
              return Ge(be(ve), P, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Et = Object.prototype.hasOwnProperty, Zt = {}, Ln = x.ReactDebugCurrentFrame;
    function xr(b) {
      if (b) {
        var P = b._owner, q = Ge(b.type, b._source, P ? P.type : null);
        Ln.setExtraStackFrame(q);
      } else
        Ln.setExtraStackFrame(null);
    }
    function kt(b, P, q, ae, ve) {
      {
        var be = Function.call.bind(Et);
        for (var de in b)
          if (be(b, de)) {
            var ce = void 0;
            try {
              if (typeof b[de] != "function") {
                var Le = Error((ae || "React class") + ": " + q + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              ce = b[de](P, de, ae, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              ce = Ae;
            }
            ce && !(ce instanceof Error) && (xr(ve), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", q, de, typeof ce), xr(null)), ce instanceof Error && !(ce.message in Zt) && (Zt[ce.message] = !0, xr(ve), w("Failed %s type: %s", q, ce.message), xr(null));
          }
      }
    }
    var br = Array.isArray;
    function wr(b) {
      return br(b);
    }
    function Fn(b) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, q = P && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return q;
      }
    }
    function zr(b) {
      try {
        return Vr(b), !1;
      } catch {
        return !0;
      }
    }
    function Vr(b) {
      return "" + b;
    }
    function Yr(b) {
      if (zr(b))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(b)), Vr(b);
    }
    var Ut = x.ReactCurrentOwner, $n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ps, Ds, Mi;
    Mi = {};
    function ad(b) {
      if (Et.call(b, "ref")) {
        var P = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function sd(b) {
      if (Et.call(b, "key")) {
        var P = Object.getOwnPropertyDescriptor(b, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function od(b, P) {
      if (typeof b.ref == "string" && Ut.current && P && Ut.current.stateNode !== P) {
        var q = z(Ut.current.type);
        Mi[q] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Ut.current.type), b.ref), Mi[q] = !0);
      }
    }
    function ld(b, P) {
      {
        var q = function() {
          Ps || (Ps = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        q.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function cd(b, P) {
      {
        var q = function() {
          Ds || (Ds = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        q.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var ud = function(b, P, q, ae, ve, be, de) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: b,
        key: P,
        ref: q,
        props: de,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function dd(b, P, q, ae, ve) {
      {
        var be, de = {}, ce = null, Le = null;
        q !== void 0 && (Yr(q), ce = "" + q), sd(P) && (Yr(P.key), ce = "" + P.key), ad(P) && (Le = P.ref, od(P, ve));
        for (be in P)
          Et.call(P, be) && !$n.hasOwnProperty(be) && (de[be] = P[be]);
        if (b && b.defaultProps) {
          var Ae = b.defaultProps;
          for (be in Ae)
            de[be] === void 0 && (de[be] = Ae[be]);
        }
        if (ce || Le) {
          var je = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ce && ld(de, je), Le && cd(de, je);
        }
        return ud(b, ce, Le, ve, ae, Ut.current, de);
      }
    }
    var Pi = x.ReactCurrentOwner, Is = x.ReactDebugCurrentFrame;
    function Er(b) {
      if (b) {
        var P = b._owner, q = Ge(b.type, b._source, P ? P.type : null);
        Is.setExtraStackFrame(q);
      } else
        Is.setExtraStackFrame(null);
    }
    var Di;
    Di = !1;
    function Ii(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    function Ls() {
      {
        if (Pi.current) {
          var b = z(Pi.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function hd(b) {
      return "";
    }
    var Fs = {};
    function fd(b) {
      {
        var P = Ls();
        if (!P) {
          var q = typeof b == "string" ? b : b.displayName || b.name;
          q && (P = `

Check the top-level render call using <` + q + ">.");
        }
        return P;
      }
    }
    function $s(b, P) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var q = fd(P);
        if (Fs[q])
          return;
        Fs[q] = !0;
        var ae = "";
        b && b._owner && b._owner !== Pi.current && (ae = " It was passed a child from " + z(b._owner.type) + "."), Er(b), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ae), Er(null);
      }
    }
    function Us(b, P) {
      {
        if (typeof b != "object")
          return;
        if (wr(b))
          for (var q = 0; q < b.length; q++) {
            var ae = b[q];
            Ii(ae) && $s(ae, P);
          }
        else if (Ii(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ve = g(b);
          if (typeof ve == "function" && ve !== b.entries)
            for (var be = ve.call(b), de; !(de = be.next()).done; )
              Ii(de.value) && $s(de.value, P);
        }
      }
    }
    function pd(b) {
      {
        var P = b.type;
        if (P == null || typeof P == "string")
          return;
        var q;
        if (typeof P == "function")
          q = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === h))
          q = P.propTypes;
        else
          return;
        if (q) {
          var ae = z(P);
          kt(q, b.props, "prop", ae, b);
        } else if (P.PropTypes !== void 0 && !Di) {
          Di = !0;
          var ve = z(P);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function md(b) {
      {
        for (var P = Object.keys(b.props), q = 0; q < P.length; q++) {
          var ae = P[q];
          if (ae !== "children" && ae !== "key") {
            Er(b), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Er(null);
            break;
          }
        }
        b.ref !== null && (Er(b), w("Invalid attribute `ref` supplied to `React.Fragment`."), Er(null));
      }
    }
    var Bs = {};
    function Ws(b, P, q, ae, ve, be) {
      {
        var de = Z(b);
        if (!de) {
          var ce = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = hd();
          Le ? ce += Le : ce += Ls();
          var Ae;
          b === null ? Ae = "null" : wr(b) ? Ae = "array" : b !== void 0 && b.$$typeof === r ? (Ae = "<" + (z(b.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof b, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, ce);
        }
        var je = dd(b, P, q, ve, be);
        if (je == null)
          return je;
        if (de) {
          var it = P.children;
          if (it !== void 0)
            if (ae)
              if (wr(it)) {
                for (var Cr = 0; Cr < it.length; Cr++)
                  Us(it[Cr], b);
                Object.freeze && Object.freeze(it);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Us(it, b);
        }
        if (Et.call(P, "key")) {
          var Qt = z(b), Ue = Object.keys(P).filter(function(wd) {
            return wd !== "key";
          }), Li = Ue.length > 0 ? "{key: someKey, " + Ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bs[Qt + Li]) {
            var bd = Ue.length > 0 ? "{" + Ue.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Li, Qt, bd, Qt), Bs[Qt + Li] = !0;
          }
        }
        return b === n ? md(je) : pd(je), je;
      }
    }
    function vd(b, P, q) {
      return Ws(b, P, q, !0);
    }
    function gd(b, P, q) {
      return Ws(b, P, q, !1);
    }
    var yd = gd, xd = vd;
    Gr.Fragment = n, Gr.jsx = yd, Gr.jsxs = xd;
  }()), Gr;
}
process.env.NODE_ENV === "production" ? ya.exports = jd() : ya.exports = _d();
var u = ya.exports, I = /* @__PURE__ */ ((e) => (e.LOADING = "LOADING", e.ERROR = "ERROR", e.SUCCESS = "SUCCESS", e.APPROVED = "APPROVED", e.SUBMITTED = "SUBMITTED", e.CONFIRMED = "CONFIRMED", e.STARTED = "STARTED", e.NOT_STARTED = "NOT_STARTED", e.ACTIVE = "ACTIVE", e.ACCREDITED = "ACCREDITED", e.CREATED = "CREATED", e.LOADED = "LOADED", e.LOCKED = "LOCKED", e.RUNNING = "RUNNING", e.ADMITTED = "ADMITTED", e.ADMIT = "ADMIT", e.COMMITTEE = "COMMITTEE", e.BOARD = "BOARD", e.UPDATED = "UPDATED", e.NO = "NO", e.YES = "YES", e.COURSE_ALLOCATION = "COURSE_ALLOCATION", e.ELECTIVE = "ELECTIVE", e.CORE = "CORE", e.NOTIFICATION = "NOTIFICATION", e.NOTIFICATION_ALERT = "NOTIFICATION_ALERT", e.NOTIFICATION_ALERT_CLOSE = "NOTIFICATION_ALERT_CLOSE", e.HEALTHY = "HEALTHY", e.UNHEALTHY = "UNHEALTHY", e.TEACHING = "TEACHING", e.NONTEACHING = "NONTEACHING", e.STUDENTS = "STUDENTS", e.APPLICANTS = "APPLICANTS", e.PROGRAMMES = "PROGRAMMES", e.APPOINTMENT = "APPOINTMENT", e.UNITS = "UNITS", e.SUBGROUPS = "SUBGROUPS", e.CURRICULUM = "CURRICULUM", e.EXAMINATIONS = "EXAMINATIONS", e.LEAVE = "LEAVE", e.ORGANIZATIONAL_UNITS = "ORGANIZATIONAL_UNITS", e.PROGRESS = "PROGRESS", e.COMPLETED = "COMPLETED", e.QUALIFIED = "QUALIFIED", e.WAITING = "WAITING", e.PENDING = "PENDING", e.IN_PROGRESS = "IN_PROGRESS", e.CIRRICULUM = "CIRRICULUM", e.NOTICE = "NOTICE", e.OPEN = "OPEN", e.ACCESS_TOKEN = "access_token", e.APPLICATION_ACCESS_TOKEN = "a_token", e.APPLICATION = "APPLICATION", e.APPLY_AS_AWAITING = "APPLY_AS_AWAITING", e.UPLOAD_RESULTS = "UPLOAD_RESULTS", e.TEXT = "TEXT", e.TEXTAREA = "TEXTAREA", e.EMAIL = "EMAIL", e.PHONE = "PHONE", e.NUMBER = "NUMBER", e.PASSWORD = "PASSWORD", e.DOCUMENT = "DOCUMENT", e.EDIT = "EDIT", e.DELETE = "DELETE", e.ACADEMIC = "ACADEMIC", e.NONACADEMIC = "NONACADEMIC", e.INTERNATIONAL = "INTERNATIONAL", e.VOUCHER_PARAM = "VOUCHER_PARAM", e.VOUCHER = "VOUCHER", e.EMAIL_ADDRESS = "EMAIL_ADDRESS", e.MOBILE_MONEY = "MOBILE_MONEY", e.LOCAL = "LOCAL", e.FRONT = "FRONT", e.ADMISSION = "ADMISSION", e.MEDIA_CAPTURED = "MEDIA_CAPTURED", e.FEMALE = "FEMALE", e.MALE = "MALE", e.DATASETTABLE_REQUEST = "DATASETTABLE_REQUEST", e.SMALL = "SMALL", e.NORMAL = "NORMAL", e.LARGE = "LARGE", e.AGGREGATE = "AGGREGATE", e.AUTOMATIC = "AUTOMATIC", e.MANUAL = "MANUAL", e.INTERVIEW = "INTERVIEW", e.ENTRANCE_EXAMS = "ENTRANCE_EXAMS", e.REJECT = "REJECT", e.SYSTEM_GET_STARTED = "SYSTEM_GET_STARTED", e.COURSE_POLICY = "COURSE_POLICY", e.REJECTED = "REJECTED", e.COURSES = "COURSES", e.GRADE_CUT_OF_POINT_STATE = "GRADE_CUT_OF_POINT_STATE", e.AGGREGATE_CUT_OF_POINT_STATE = "AGGREGATE_CUT_OF_POINT_STATE", e.GENDER_CUT_OF_POINT_STATE = "GENDER_CUT_OF_POINT_STATE", e.MATURE_INVITATION = "MATURE_INVITATION", e.RESULTS = "RESULTS", e.FILE_UPLOAD = "FILE_UPLOAD", e.COURSE_REMOVED = "COURSE_REMOVED", e.COURSE_ADDED = "COURSE_ADDED", e.RECOMMENDATION_LETTER = "RECOMMENDATION_LETTER", e.ERROR_MESSAGE = "Sorry for the inconvenience caused by the error. Please contact us if the issue persists. ", e.POSITIONS = "POSITIONS", e.WASSCE_RESULTS = "WASSCE_RESULTS", e.NEW_SITTING = "NEW_SITTING", e.REFEREE = "REFEREE", e.CERTIFICATE = "CERTIFICATE", e.TRANSCRIPT = "TRANSCRIPT", e.CERTIFICATES_AND_TRANSCRIPTS = "CERTIFICATES_AND_TRANSCRIPTS", e.RECOMMENDATION_LETTERS = "RECOMMENDATION_LETTERS", e.SECONDARY_SCHOOL_DOCUMENTS = "SECONDARY_SCHOOL_DOCUMENTS", e.UPDATE_INFORMATION = "UPDATE_INFORMATION", e.SUB_CAMPUSES = "SUB_CAMPUSES", e.VOUCHER_FEES = "VOUCHER_FEES", e.REPORT = "REPORT", e.NEW_DOCUMENT = "NEW_DOCUMENT", e.OTHERS = "OTHERS", e.COURSE_QUOTA = "COURSE_QUOTA", e.RE_ACCREDITATION = "RE_ACCREDITATION", e.ACCREDITATION = "ACCREDITATION", e.REGULAR = "REGULAR", e.INTERNAL = "INTERNAL", e.EXTERNAL = "EXTERNAL", e.COLOR = "COLOR", e.SEARCH = "SEARCH", e.IMMEDIATELY = "IMMEDIATELY", e.CUSTOM = "CUSTOM", e.ACTING = "ACTING", e.SUBSTANTIAL = "SUBSTANTIAL", e.CURRENT_ACADEMIC_YEAR = "CURRENT_ACADEMIC_YEAR", e.DURATION_OF_ENTIRE_PROGRAMME = "DURATION_OF_ENTIRE_PROGRAMME", e.REMAINDER_OF_PROGRAMME = "REMAINDER_OF_PROGRAMME", e.SPECIFIC = "SPECIFIC", e.UPLOAD_MANAGER_REQUEST = "UPLOAD_MANAGER_REQUEST", e.ALL = "ALL", e.ALL_TEACHING_WITH_SPECIFIC_NON_TEACHING = "ALL_TEACHING_WITH_SPECIFIC_NON_TEACHING", e.ALL_NON_TEACHING_WITH_SPECIFIC_TEACHING = "ALL_NON_TEACHING_WITH_SPECIFIC_TEACHING", e.SPECIFIC_TEACHING_AND_NON_TEACHING = "SPECIFIC_TEACHING_AND_NON_TEACHING", e.ABSOLUTE_AMOUNT = "ABSOLUTE_AMOUNT", e.AMOUNT = "AMOUNT", e.PERCENTAGE_OF_TOTAL_FEES_DUE = "PERCENTAGE_OF_TOTAL_FEES_DUE", e.REFUND = "REFUND", e.OWING = "OWING", e.NONE = "NONE", e.FEE_PARAM = "", e.NON_SCORING = "NON_SCORING", e.SCORING = "SCORING", e))(I || {});
class kd {
  constructor() {
    y(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(r) {
    let t = r.size;
    const n = ["Bytes", "KB", "MB", "GB"];
    let i = 0;
    for (; t > 900; )
      t /= 1024, i++;
    return `${Math.round(t * 100) / 100} ${n[i]}`;
  }
  getExtension(r) {
    return r.split(".").pop();
  }
  getFileName(r) {
    return r.split("/").pop();
  }
  isValidHttpUrl(r) {
    let t;
    try {
      t = new URL(r);
    } catch {
      return !1;
    }
    return /https?/.test(t.protocol);
  }
  makeUniqueid(r = 10) {
    let t = "";
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = n.length;
    for (let a = 0; a < r; a++)
      t += n.charAt(Math.floor(Math.random() * i));
    return t;
  }
  nameToText(r) {
    return r.split("_").join(" ");
  }
  getRandomColor() {
    const r = "0123456789ABCDEF";
    let t = "#";
    for (let n = 0; n < 6; n++)
      t += r[Math.floor(Math.random() * 16)];
    return t;
  }
  concat(r, t) {
    return `${r} ${t}`;
  }
  isObject(r) {
    return typeof r == "object" && r !== null && !Array.isArray(r) && !(r instanceof File);
  }
  isEmptyOrNull(r, t = !1) {
    if (r == null)
      return !0;
    if (Array.isArray(r))
      return r.length === 0;
    if (typeof r == "object" && !Array.isArray(r) && !(r instanceof File)) {
      const n = Object.keys(r);
      return n.length === 0 ? !0 : t ? n.every((i) => {
        const a = r[i];
        return typeof a == "string" ? a.trim() === "" : typeof a == "boolean" ? a === !1 : typeof a == "number" ? a === 0 : Array.isArray(a) ? a.length === 0 : a instanceof File ? a.size === 0 : typeof a == "object" && a !== null ? Object.keys(a).length === 0 : a == null;
      }) : !n.some((i) => {
        const a = r[i];
        return typeof a == "string" ? a.trim() !== "" : typeof a == "boolean" ? a === !0 : typeof a == "number" ? a !== 0 : Array.isArray(a) ? a.length !== 0 : a instanceof File ? a.size !== 0 : typeof a == "object" && a !== null ? Object.keys(a).length !== 0 : a != null;
      });
    }
    return r instanceof File ? r.size === 0 : r === "";
  }
  toBoolean(r) {
    return String(r).toLowerCase() === "true";
  }
  toStringDefault(r, t = "") {
    return this.isEmptyOrNull(r) ? `${t}` : `${r}`;
  }
  toString(r) {
    return `${r}`;
  }
  isEmpty(r) {
    return r === "" || r === void 0 || r === null;
  }
  validatePasswords(r, t) {
    return r !== "" && r === t;
  }
  validatePassword(r) {
    const t = /[A-Z]/.test(r), n = /[a-z]/.test(r), i = /\d/.test(r), a = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(r), s = r.length >= 8;
    return { hasUppercase: t, hasLowercase: n, hasNumber: i, hasSpecialCharacter: a, has8Characters: s, allValidationsPassed: t && n && i && a && s };
  }
  isNotEmpty(r) {
    return r !== "";
  }
  columnHead(r) {
    let t = r.split("_");
    return t.length > 1 && t.slice(-1)[0].toLowerCase() ? t.slice(0, -1).join(" ").toUpperCase() : t.join(" ").toUpperCase();
  }
  convertUnderscoreToSpaceString(r) {
    return r.replace(/_/g, " ");
  }
  isDarkTheme() {
    return localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  async sync_theme(r) {
    let t;
    const n = localStorage.getItem("color-theme");
    n ? n === "light" ? (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark"), t = !0) : (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light"), t = !1) : document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"), localStorage.setItem("color-theme", "light"), t = !1) : (document.documentElement.classList.add("dark"), localStorage.setItem("color-theme", "dark"), t = !0), r && r(t);
  }
  async imageSize(r) {
    return new Promise((t, n) => {
      try {
        const i = new FileReader();
        i.onload = () => {
          const a = new Image();
          a.onload = () => {
            t({ width: a.width, height: a.height });
          }, a.src = i.result;
        }, i.onerror = (a) => {
          n(a);
        }, i.readAsDataURL(r);
      } catch (i) {
        n(i);
      }
    });
  }
  capitalizeEachWord(r) {
    return r.toLowerCase().split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
  }
  formatDateString(r) {
    const t = r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!t)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, n, i, a] = t;
    return `${a}-${i}-${n}`;
  }
  formatDate(r) {
    const t = new Date(r), n = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
    return `${n}-${i}-${a}`;
  }
  validateEmail(r) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r);
  }
  convertNumber(r) {
    return Math.abs(r) >= 1e6 ? (r / 1e6).toString().substring(0, 4) + "M" : Math.abs(r) >= 1e3 ? (r / 1e3).toString().substring(0, 4) + "k" : r.toString();
  }
  daysLeft(r) {
    const t = new Date(r), n = /* @__PURE__ */ new Date(), i = t.getTime() - n.getTime();
    return Math.ceil(i / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(r) {
    const n = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][r.getDay()], i = r.getDate(), s = [
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
    ][r.getMonth()], o = r.getFullYear();
    function l(d) {
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
    const c = l(i);
    return `${n}, ${i}${c} ${s}, ${o}`;
  }
  getTimeAgoAndCustomDate(r) {
    const t = /* @__PURE__ */ new Date(), n = new Date(r), i = t.getTime() - n.getTime();
    if (t < n)
      return "Future date";
    const a = Math.floor(i / 1e3);
    return a < 60 ? `${a} seconds ago` : a < 3600 ? `${Math.floor(a / 60)} minutes ago` : a < 86400 ? `${Math.floor(a / 3600)} hours ago` : a < 2592e3 ? `${Math.floor(a / 86400)} days ago` : n.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    });
  }
  roundTo2dp(r) {
    const t = parseFloat(r);
    return isNaN(t) ? r : (Math.round(t * 100) / 100).toFixed(2);
  }
}
const j = new kd();
var We = "top", ot = "bottom", lt = "right", He = "left", as = "auto", Rn = [We, ot, lt, He], Pr = "start", hn = "end", Md = "clippingParents", Pl = "viewport", Xr = "popper", Pd = "reference", Vs = /* @__PURE__ */ Rn.reduce(function(e, r) {
  return e.concat([r + "-" + Pr, r + "-" + hn]);
}, []), Dl = /* @__PURE__ */ [].concat(Rn, [as]).reduce(function(e, r) {
  return e.concat([r, r + "-" + Pr, r + "-" + hn]);
}, []), Dd = "beforeRead", Id = "read", Ld = "afterRead", Fd = "beforeMain", $d = "main", Ud = "afterMain", Bd = "beforeWrite", Wd = "write", Hd = "afterWrite", zd = [Dd, Id, Ld, Fd, $d, Ud, Bd, Wd, Hd];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
function dr(e) {
  var r = et(e).Element;
  return e instanceof r || e instanceof Element;
}
function st(e) {
  var r = et(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function ss(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = et(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function Vd(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(t) {
    var n = r.styles[t] || {}, i = r.attributes[t] || {}, a = r.elements[t];
    !st(a) || !At(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function Yd(e) {
  var r = e.state, t = {
    popper: {
      position: r.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(r.elements.popper.style, t.popper), r.styles = t, r.elements.arrow && Object.assign(r.elements.arrow.style, t.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var i = r.elements[n], a = r.attributes[n] || {}, s = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : t[n]), o = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !st(i) || !At(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const qd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vd,
  effect: Yd,
  requires: ["computeStyles"]
};
function Ot(e) {
  return e.split("-")[0];
}
var or = Math.max, li = Math.min, Dr = Math.round;
function xa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function Il() {
  return !/^((?!chrome|android).)*safari/i.test(xa());
}
function Ir(e, r, t) {
  r === void 0 && (r = !1), t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  r && st(e) && (i = e.offsetWidth > 0 && Dr(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Dr(n.height) / e.offsetHeight || 1);
  var s = dr(e) ? et(e) : window, o = s.visualViewport, l = !Il() && t, c = (n.left + (l && o ? o.offsetLeft : 0)) / i, d = (n.top + (l && o ? o.offsetTop : 0)) / a, h = n.width / i, f = n.height / a;
  return {
    width: h,
    height: f,
    top: d,
    right: c + h,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function os(e) {
  var r = Ir(e), t = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(r.width - t) <= 1 && (t = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: n
  };
}
function Ll(e, r) {
  var t = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (t && ss(t)) {
    var n = r;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ft(e) {
  return et(e).getComputedStyle(e);
}
function Gd(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function Xt(e) {
  return ((dr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function gi(e) {
  return At(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ss(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xt(e)
  );
}
function Ys(e) {
  return !st(e) || // https://github.com/popperjs/popper-core/issues/837
  Ft(e).position === "fixed" ? null : e.offsetParent;
}
function Xd(e) {
  var r = /firefox/i.test(xa()), t = /Trident/i.test(xa());
  if (t && st(e)) {
    var n = Ft(e);
    if (n.position === "fixed")
      return null;
  }
  var i = gi(e);
  for (ss(i) && (i = i.host); st(i) && ["html", "body"].indexOf(At(i)) < 0; ) {
    var a = Ft(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || r && a.willChange === "filter" || r && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function jn(e) {
  for (var r = et(e), t = Ys(e); t && Gd(t) && Ft(t).position === "static"; )
    t = Ys(t);
  return t && (At(t) === "html" || At(t) === "body" && Ft(t).position === "static") ? r : t || Xd(e) || r;
}
function ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sn(e, r, t) {
  return or(e, li(r, t));
}
function Kd(e, r, t) {
  var n = sn(e, r, t);
  return n > t ? t : n;
}
function Fl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $l(e) {
  return Object.assign({}, Fl(), e);
}
function Ul(e, r) {
  return r.reduce(function(t, n) {
    return t[n] = e, t;
  }, {});
}
var Jd = function(r, t) {
  return r = typeof r == "function" ? r(Object.assign({}, t.rects, {
    placement: t.placement
  })) : r, $l(typeof r != "number" ? r : Ul(r, Rn));
};
function Zd(e) {
  var r, t = e.state, n = e.name, i = e.options, a = t.elements.arrow, s = t.modifiersData.popperOffsets, o = Ot(t.placement), l = ls(o), c = [He, lt].indexOf(o) >= 0, d = c ? "height" : "width";
  if (!(!a || !s)) {
    var h = Jd(i.padding, t), f = os(a), m = l === "y" ? We : He, p = l === "y" ? ot : lt, v = t.rects.reference[d] + t.rects.reference[l] - s[l] - t.rects.popper[d], g = s[l] - t.rects.reference[l], x = jn(a), w = x ? l === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, E = v / 2 - g / 2, S = h[m], C = w - f[d] - h[p], D = w / 2 - f[d] / 2 + E, R = sn(S, D, C), N = l;
    t.modifiersData[n] = (r = {}, r[N] = R, r.centerOffset = R - D, r);
  }
}
function Qd(e) {
  var r = e.state, t = e.options, n = t.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = r.elements.popper.querySelector(i), !i) || Ll(r.elements.popper, i) && (r.elements.arrow = i));
}
const eh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Zd,
  effect: Qd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Lr(e) {
  return e.split("-")[1];
}
var th = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rh(e, r) {
  var t = e.x, n = e.y, i = r.devicePixelRatio || 1;
  return {
    x: Dr(t * i) / i || 0,
    y: Dr(n * i) / i || 0
  };
}
function qs(e) {
  var r, t = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, h = e.isFixed, f = s.x, m = f === void 0 ? 0 : f, p = s.y, v = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y: v
  }) : {
    x: m,
    y: v
  };
  m = g.x, v = g.y;
  var x = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), E = He, S = We, C = window;
  if (c) {
    var D = jn(t), R = "clientHeight", N = "clientWidth";
    if (D === et(t) && (D = Xt(t), Ft(D).position !== "static" && o === "absolute" && (R = "scrollHeight", N = "scrollWidth")), D = D, i === We || (i === He || i === lt) && a === hn) {
      S = ot;
      var M = h && D === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[R]
      );
      v -= M - n.height, v *= l ? 1 : -1;
    }
    if (i === He || (i === We || i === ot) && a === hn) {
      E = lt;
      var Z = h && D === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[N]
      );
      m -= Z - n.width, m *= l ? 1 : -1;
    }
  }
  var Q = Object.assign({
    position: o
  }, c && th), te = d === !0 ? rh({
    x: m,
    y: v
  }, et(t)) : {
    x: m,
    y: v
  };
  if (m = te.x, v = te.y, l) {
    var z;
    return Object.assign({}, Q, (z = {}, z[S] = w ? "0" : "", z[E] = x ? "0" : "", z.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", z));
  }
  return Object.assign({}, Q, (r = {}, r[S] = w ? v + "px" : "", r[E] = x ? m + "px" : "", r.transform = "", r));
}
function nh(e) {
  var r = e.state, t = e.options, n = t.gpuAcceleration, i = n === void 0 ? !0 : n, a = t.adaptive, s = a === void 0 ? !0 : a, o = t.roundOffsets, l = o === void 0 ? !0 : o, c = {
    placement: Ot(r.placement),
    variation: Lr(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: i,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, qs(Object.assign({}, c, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, qs(Object.assign({}, c, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const ih = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nh,
  data: {}
};
var Un = {
  passive: !0
};
function ah(e) {
  var r = e.state, t = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = et(r.elements.popper), c = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", t.update, Un);
  }), o && l.addEventListener("resize", t.update, Un), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", t.update, Un);
    }), o && l.removeEventListener("resize", t.update, Un);
  };
}
const sh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ah,
  data: {}
};
var oh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zn(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return oh[r];
  });
}
var lh = {
  start: "end",
  end: "start"
};
function Gs(e) {
  return e.replace(/start|end/g, function(r) {
    return lh[r];
  });
}
function cs(e) {
  var r = et(e), t = r.pageXOffset, n = r.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: n
  };
}
function us(e) {
  return Ir(Xt(e)).left + cs(e).scrollLeft;
}
function ch(e, r) {
  var t = et(e), n = Xt(e), i = t.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var c = Il();
    (c || !c && r === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + us(e),
    y: l
  };
}
function uh(e) {
  var r, t = Xt(e), n = cs(e), i = (r = e.ownerDocument) == null ? void 0 : r.body, a = or(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = or(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + us(e), l = -n.scrollTop;
  return Ft(i || t).direction === "rtl" && (o += or(t.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function ds(e) {
  var r = Ft(e), t = r.overflow, n = r.overflowX, i = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + n);
}
function Bl(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0 ? e.ownerDocument.body : st(e) && ds(e) ? e : Bl(gi(e));
}
function on(e, r) {
  var t;
  r === void 0 && (r = []);
  var n = Bl(e), i = n === ((t = e.ownerDocument) == null ? void 0 : t.body), a = et(n), s = i ? [a].concat(a.visualViewport || [], ds(n) ? n : []) : n, o = r.concat(s);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(on(gi(s)))
  );
}
function ba(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dh(e, r) {
  var t = Ir(e, !1, r === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Xs(e, r, t) {
  return r === Pl ? ba(ch(e, t)) : dr(r) ? dh(r, t) : ba(uh(Xt(e)));
}
function hh(e) {
  var r = on(gi(e)), t = ["absolute", "fixed"].indexOf(Ft(e).position) >= 0, n = t && st(e) ? jn(e) : e;
  return dr(n) ? r.filter(function(i) {
    return dr(i) && Ll(i, n) && At(i) !== "body";
  }) : [];
}
function fh(e, r, t, n) {
  var i = r === "clippingParents" ? hh(e) : [].concat(r), a = [].concat(i, [t]), s = a[0], o = a.reduce(function(l, c) {
    var d = Xs(e, c, n);
    return l.top = or(d.top, l.top), l.right = li(d.right, l.right), l.bottom = li(d.bottom, l.bottom), l.left = or(d.left, l.left), l;
  }, Xs(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Wl(e) {
  var r = e.reference, t = e.element, n = e.placement, i = n ? Ot(n) : null, a = n ? Lr(n) : null, s = r.x + r.width / 2 - t.width / 2, o = r.y + r.height / 2 - t.height / 2, l;
  switch (i) {
    case We:
      l = {
        x: s,
        y: r.y - t.height
      };
      break;
    case ot:
      l = {
        x: s,
        y: r.y + r.height
      };
      break;
    case lt:
      l = {
        x: r.x + r.width,
        y: o
      };
      break;
    case He:
      l = {
        x: r.x - t.width,
        y: o
      };
      break;
    default:
      l = {
        x: r.x,
        y: r.y
      };
  }
  var c = i ? ls(i) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case Pr:
        l[c] = l[c] - (r[d] / 2 - t[d] / 2);
        break;
      case hn:
        l[c] = l[c] + (r[d] / 2 - t[d] / 2);
        break;
    }
  }
  return l;
}
function fn(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, i = n === void 0 ? e.placement : n, a = t.strategy, s = a === void 0 ? e.strategy : a, o = t.boundary, l = o === void 0 ? Md : o, c = t.rootBoundary, d = c === void 0 ? Pl : c, h = t.elementContext, f = h === void 0 ? Xr : h, m = t.altBoundary, p = m === void 0 ? !1 : m, v = t.padding, g = v === void 0 ? 0 : v, x = $l(typeof g != "number" ? g : Ul(g, Rn)), w = f === Xr ? Pd : Xr, E = e.rects.popper, S = e.elements[p ? w : f], C = fh(dr(S) ? S : S.contextElement || Xt(e.elements.popper), l, d, s), D = Ir(e.elements.reference), R = Wl({
    reference: D,
    element: E,
    strategy: "absolute",
    placement: i
  }), N = ba(Object.assign({}, E, R)), M = f === Xr ? N : D, Z = {
    top: C.top - M.top + x.top,
    bottom: M.bottom - C.bottom + x.bottom,
    left: C.left - M.left + x.left,
    right: M.right - C.right + x.right
  }, Q = e.modifiersData.offset;
  if (f === Xr && Q) {
    var te = Q[i];
    Object.keys(Z).forEach(function(z) {
      var Y = [lt, ot].indexOf(z) >= 0 ? 1 : -1, V = [We, ot].indexOf(z) >= 0 ? "y" : "x";
      Z[z] += te[V] * Y;
    });
  }
  return Z;
}
function ph(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, i = t.boundary, a = t.rootBoundary, s = t.padding, o = t.flipVariations, l = t.allowedAutoPlacements, c = l === void 0 ? Dl : l, d = Lr(n), h = d ? o ? Vs : Vs.filter(function(p) {
    return Lr(p) === d;
  }) : Rn, f = h.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = h);
  var m = f.reduce(function(p, v) {
    return p[v] = fn(e, {
      placement: v,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[Ot(v)], p;
  }, {});
  return Object.keys(m).sort(function(p, v) {
    return m[p] - m[v];
  });
}
function mh(e) {
  if (Ot(e) === as)
    return [];
  var r = Zn(e);
  return [Gs(e), r, Gs(r)];
}
function vh(e) {
  var r = e.state, t = e.options, n = e.name;
  if (!r.modifiersData[n]._skip) {
    for (var i = t.mainAxis, a = i === void 0 ? !0 : i, s = t.altAxis, o = s === void 0 ? !0 : s, l = t.fallbackPlacements, c = t.padding, d = t.boundary, h = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, p = m === void 0 ? !0 : m, v = t.allowedAutoPlacements, g = r.options.placement, x = Ot(g), w = x === g, E = l || (w || !p ? [Zn(g)] : mh(g)), S = [g].concat(E).reduce(function(B, H) {
      return B.concat(Ot(H) === as ? ph(r, {
        placement: H,
        boundary: d,
        rootBoundary: h,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : H);
    }, []), C = r.rects.reference, D = r.rects.popper, R = /* @__PURE__ */ new Map(), N = !0, M = S[0], Z = 0; Z < S.length; Z++) {
      var Q = S[Z], te = Ot(Q), z = Lr(Q) === Pr, Y = [We, ot].indexOf(te) >= 0, V = Y ? "width" : "height", W = fn(r, {
        placement: Q,
        boundary: d,
        rootBoundary: h,
        altBoundary: f,
        padding: c
      }), K = Y ? z ? lt : He : z ? ot : We;
      C[V] > D[V] && (K = Zn(K));
      var $ = Zn(K), X = [];
      if (a && X.push(W[te] <= 0), o && X.push(W[K] <= 0, W[$] <= 0), X.every(function(B) {
        return B;
      })) {
        M = Q, N = !1;
        break;
      }
      R.set(Q, X);
    }
    if (N)
      for (var O = p ? 3 : 1, k = function(H) {
        var G = S.find(function(J) {
          var ee = R.get(J);
          if (ee)
            return ee.slice(0, H).every(function(ne) {
              return ne;
            });
        });
        if (G)
          return M = G, "break";
      }, L = O; L > 0; L--) {
        var U = k(L);
        if (U === "break") break;
      }
    r.placement !== M && (r.modifiersData[n]._skip = !0, r.placement = M, r.reset = !0);
  }
}
const gh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ks(e, r, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: e.top - r.height - t.y,
    right: e.right - r.width + t.x,
    bottom: e.bottom - r.height + t.y,
    left: e.left - r.width - t.x
  };
}
function Js(e) {
  return [We, lt, ot, He].some(function(r) {
    return e[r] >= 0;
  });
}
function yh(e) {
  var r = e.state, t = e.name, n = r.rects.reference, i = r.rects.popper, a = r.modifiersData.preventOverflow, s = fn(r, {
    elementContext: "reference"
  }), o = fn(r, {
    altBoundary: !0
  }), l = Ks(s, n), c = Ks(o, i, a), d = Js(l), h = Js(c);
  r.modifiersData[t] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const xh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yh
};
function bh(e, r, t) {
  var n = Ot(e), i = [He, We].indexOf(n) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, r, {
    placement: e
  })) : t, s = a[0], o = a[1];
  return s = s || 0, o = (o || 0) * i, [He, lt].indexOf(n) >= 0 ? {
    x: o,
    y: s
  } : {
    x: s,
    y: o
  };
}
function wh(e) {
  var r = e.state, t = e.options, n = e.name, i = t.offset, a = i === void 0 ? [0, 0] : i, s = Dl.reduce(function(d, h) {
    return d[h] = bh(h, r.rects, a), d;
  }, {}), o = s[r.placement], l = o.x, c = o.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += l, r.modifiersData.popperOffsets.y += c), r.modifiersData[n] = s;
}
const Eh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wh
};
function Ch(e) {
  var r = e.state, t = e.name;
  r.modifiersData[t] = Wl({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const Sh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ch,
  data: {}
};
function Nh(e) {
  return e === "x" ? "y" : "x";
}
function Oh(e) {
  var r = e.state, t = e.options, n = e.name, i = t.mainAxis, a = i === void 0 ? !0 : i, s = t.altAxis, o = s === void 0 ? !1 : s, l = t.boundary, c = t.rootBoundary, d = t.altBoundary, h = t.padding, f = t.tether, m = f === void 0 ? !0 : f, p = t.tetherOffset, v = p === void 0 ? 0 : p, g = fn(r, {
    boundary: l,
    rootBoundary: c,
    padding: h,
    altBoundary: d
  }), x = Ot(r.placement), w = Lr(r.placement), E = !w, S = ls(x), C = Nh(S), D = r.modifiersData.popperOffsets, R = r.rects.reference, N = r.rects.popper, M = typeof v == "function" ? v(Object.assign({}, r.rects, {
    placement: r.placement
  })) : v, Z = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), Q = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, te = {
    x: 0,
    y: 0
  };
  if (D) {
    if (a) {
      var z, Y = S === "y" ? We : He, V = S === "y" ? ot : lt, W = S === "y" ? "height" : "width", K = D[S], $ = K + g[Y], X = K - g[V], O = m ? -N[W] / 2 : 0, k = w === Pr ? R[W] : N[W], L = w === Pr ? -N[W] : -R[W], U = r.elements.arrow, B = m && U ? os(U) : {
        width: 0,
        height: 0
      }, H = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Fl(), G = H[Y], J = H[V], ee = sn(0, R[W], B[W]), ne = E ? R[W] / 2 - O - ee - G - Z.mainAxis : k - ee - G - Z.mainAxis, re = E ? -R[W] / 2 + O + ee + J + Z.mainAxis : L + ee + J + Z.mainAxis, fe = r.elements.arrow && jn(r.elements.arrow), F = fe ? S === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, Me = (z = Q == null ? void 0 : Q[S]) != null ? z : 0, nt = K + ne - Me - F, Ge = K + re - Me, Et = sn(m ? li($, nt) : $, K, m ? or(X, Ge) : X);
      D[S] = Et, te[S] = Et - K;
    }
    if (o) {
      var Zt, Ln = S === "x" ? We : He, xr = S === "x" ? ot : lt, kt = D[C], br = C === "y" ? "height" : "width", wr = kt + g[Ln], Fn = kt - g[xr], zr = [We, He].indexOf(x) !== -1, Vr = (Zt = Q == null ? void 0 : Q[C]) != null ? Zt : 0, Yr = zr ? wr : kt - R[br] - N[br] - Vr + Z.altAxis, Ut = zr ? kt + R[br] + N[br] - Vr - Z.altAxis : Fn, $n = m && zr ? Kd(Yr, kt, Ut) : sn(m ? Yr : wr, kt, m ? Ut : Fn);
      D[C] = $n, te[C] = $n - kt;
    }
    r.modifiersData[n] = te;
  }
}
const Th = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Oh,
  requiresIfExists: ["offset"]
};
function Ah(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Rh(e) {
  return e === et(e) || !st(e) ? cs(e) : Ah(e);
}
function jh(e) {
  var r = e.getBoundingClientRect(), t = Dr(r.width) / e.offsetWidth || 1, n = Dr(r.height) / e.offsetHeight || 1;
  return t !== 1 || n !== 1;
}
function _h(e, r, t) {
  t === void 0 && (t = !1);
  var n = st(r), i = st(r) && jh(r), a = Xt(r), s = Ir(e, i, t), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !t) && ((At(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ds(a)) && (o = Rh(r)), st(r) ? (l = Ir(r, !0), l.x += r.clientLeft, l.y += r.clientTop) : a && (l.x = us(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function kh(e) {
  var r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    r.set(a.name, a);
  });
  function i(a) {
    t.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(o) {
      if (!t.has(o)) {
        var l = r.get(o);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || i(a);
  }), n;
}
function Mh(e) {
  var r = kh(e);
  return zd.reduce(function(t, n) {
    return t.concat(r.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ph(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(t) {
      Promise.resolve().then(function() {
        r = void 0, t(e());
      });
    })), r;
  };
}
function Dh(e) {
  var r = e.reduce(function(t, n) {
    var i = t[n.name];
    return t[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, t;
  }, {});
  return Object.keys(r).map(function(t) {
    return r[t];
  });
}
var Zs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Qs() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ih(e) {
  e === void 0 && (e = {});
  var r = e, t = r.defaultModifiers, n = t === void 0 ? [] : t, i = r.defaultOptions, a = i === void 0 ? Zs : i;
  return function(o, l, c) {
    c === void 0 && (c = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Zs, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, m = {
      state: d,
      setOptions: function(x) {
        var w = typeof x == "function" ? x(d.options) : x;
        v(), d.options = Object.assign({}, a, d.options, w), d.scrollParents = {
          reference: dr(o) ? on(o) : o.contextElement ? on(o.contextElement) : [],
          popper: on(l)
        };
        var E = Mh(Dh([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = E.filter(function(S) {
          return S.enabled;
        }), p(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var x = d.elements, w = x.reference, E = x.popper;
          if (Qs(w, E)) {
            d.rects = {
              reference: _h(w, jn(E), d.options.strategy === "fixed"),
              popper: os(E)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(Z) {
              return d.modifiersData[Z.name] = Object.assign({}, Z.data);
            });
            for (var S = 0; S < d.orderedModifiers.length; S++) {
              if (d.reset === !0) {
                d.reset = !1, S = -1;
                continue;
              }
              var C = d.orderedModifiers[S], D = C.fn, R = C.options, N = R === void 0 ? {} : R, M = C.name;
              typeof D == "function" && (d = D({
                state: d,
                options: N,
                name: M,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ph(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        v(), f = !0;
      }
    };
    if (!Qs(o, l))
      return m;
    m.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var x = g.name, w = g.options, E = w === void 0 ? {} : w, S = g.effect;
        if (typeof S == "function") {
          var C = S({
            state: d,
            name: x,
            instance: m,
            options: E
          }), D = function() {
          };
          h.push(C || D);
        }
      });
    }
    function v() {
      h.forEach(function(g) {
        return g();
      }), h = [];
    }
    return m;
  };
}
var Lh = [sh, Sh, ih, qd, Eh, gh, Th, eh, xh], Fh = /* @__PURE__ */ Ih({
  defaultModifiers: Lh
});
function Hl(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: $h } = Object.prototype, { getPrototypeOf: hs } = Object, yi = /* @__PURE__ */ ((e) => (r) => {
  const t = $h.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xt = (e) => (e = e.toLowerCase(), (r) => yi(r) === e), xi = (e) => (r) => typeof r === e, { isArray: Br } = Array, pn = xi("undefined");
function Uh(e) {
  return e !== null && !pn(e) && e.constructor !== null && !pn(e.constructor) && Ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const zl = xt("ArrayBuffer");
function Bh(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && zl(e.buffer), r;
}
const Wh = xi("string"), Ze = xi("function"), Vl = xi("number"), bi = (e) => e !== null && typeof e == "object", Hh = (e) => e === !0 || e === !1, Qn = (e) => {
  if (yi(e) !== "object")
    return !1;
  const r = hs(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zh = xt("Date"), Vh = xt("File"), Yh = xt("Blob"), qh = xt("FileList"), Gh = (e) => bi(e) && Ze(e.pipe), Xh = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || Ze(e.append) && ((r = yi(e)) === "formdata" || // detect form-data instance
  r === "object" && Ze(e.toString) && e.toString() === "[object FormData]"));
}, Kh = xt("URLSearchParams"), [Jh, Zh, Qh, ef] = ["ReadableStream", "Request", "Response", "Headers"].map(xt), tf = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _n(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Br(e))
    for (n = 0, i = e.length; n < i; n++)
      r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let o;
    for (n = 0; n < s; n++)
      o = a[n], r.call(null, e[o], o, e);
  }
}
function Yl(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, i;
  for (; n-- > 0; )
    if (i = t[n], r === i.toLowerCase())
      return i;
  return null;
}
const nr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ql = (e) => !pn(e) && e !== nr;
function wa() {
  const { caseless: e } = ql(this) && this || {}, r = {}, t = (n, i) => {
    const a = e && Yl(r, i) || i;
    Qn(r[a]) && Qn(n) ? r[a] = wa(r[a], n) : Qn(n) ? r[a] = wa({}, n) : Br(n) ? r[a] = n.slice() : r[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && _n(arguments[n], t);
  return r;
}
const rf = (e, r, t, { allOwnKeys: n } = {}) => (_n(r, (i, a) => {
  t && Ze(i) ? e[a] = Hl(i, t) : e[a] = i;
}, { allOwnKeys: n }), e), nf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), af = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, sf = (e, r, t, n) => {
  let i, a, s;
  const o = {};
  if (r = r || {}, e == null) return r;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, r)) && !o[s] && (r[s] = e[s], o[s] = !0);
    e = t !== !1 && hs(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, of = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, lf = (e) => {
  if (!e) return null;
  if (Br(e)) return e;
  let r = e.length;
  if (!Vl(r)) return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, cf = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && hs(Uint8Array)), uf = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    r.call(e, a[0], a[1]);
  }
}, df = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, hf = xt("HTMLFormElement"), ff = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, i) {
    return n.toUpperCase() + i;
  }
), eo = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), pf = xt("RegExp"), Gl = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  _n(t, (i, a) => {
    let s;
    (s = r(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, mf = (e) => {
  Gl(e, (r, t) => {
    if (Ze(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (Ze(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, vf = (e, r) => {
  const t = {}, n = (i) => {
    i.forEach((a) => {
      t[a] = !0;
    });
  };
  return Br(e) ? n(e) : n(String(e).split(r)), t;
}, gf = () => {
}, yf = (e, r) => e != null && Number.isFinite(e = +e) ? e : r, Fi = "abcdefghijklmnopqrstuvwxyz", to = "0123456789", Xl = {
  DIGIT: to,
  ALPHA: Fi,
  ALPHA_DIGIT: Fi + Fi.toUpperCase() + to
}, xf = (e = 16, r = Xl.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function bf(e) {
  return !!(e && Ze(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const wf = (e) => {
  const r = new Array(10), t = (n, i) => {
    if (bi(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[i] = n;
        const a = Br(n) ? [] : {};
        return _n(n, (s, o) => {
          const l = t(s, i + 1);
          !pn(l) && (a[o] = l);
        }), r[i] = void 0, a;
      }
    }
    return n;
  };
  return t(e, 0);
}, Ef = xt("AsyncFunction"), Cf = (e) => e && (bi(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Kl = ((e, r) => e ? setImmediate : r ? ((t, n) => (nr.addEventListener("message", ({ source: i, data: a }) => {
  i === nr && a === t && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), nr.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  Ze(nr.postMessage)
), Sf = typeof queueMicrotask < "u" ? queueMicrotask.bind(nr) : typeof process < "u" && process.nextTick || Kl, A = {
  isArray: Br,
  isArrayBuffer: zl,
  isBuffer: Uh,
  isFormData: Xh,
  isArrayBufferView: Bh,
  isString: Wh,
  isNumber: Vl,
  isBoolean: Hh,
  isObject: bi,
  isPlainObject: Qn,
  isReadableStream: Jh,
  isRequest: Zh,
  isResponse: Qh,
  isHeaders: ef,
  isUndefined: pn,
  isDate: zh,
  isFile: Vh,
  isBlob: Yh,
  isRegExp: pf,
  isFunction: Ze,
  isStream: Gh,
  isURLSearchParams: Kh,
  isTypedArray: cf,
  isFileList: qh,
  forEach: _n,
  merge: wa,
  extend: rf,
  trim: tf,
  stripBOM: nf,
  inherits: af,
  toFlatObject: sf,
  kindOf: yi,
  kindOfTest: xt,
  endsWith: of,
  toArray: lf,
  forEachEntry: uf,
  matchAll: df,
  isHTMLForm: hf,
  hasOwnProperty: eo,
  hasOwnProp: eo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gl,
  freezeMethods: mf,
  toObjectSet: vf,
  toCamelCase: ff,
  noop: gf,
  toFiniteNumber: yf,
  findKey: Yl,
  global: nr,
  isContextDefined: ql,
  ALPHABET: Xl,
  generateString: xf,
  isSpecCompliantForm: bf,
  toJSONObject: wf,
  isAsyncFn: Ef,
  isThenable: Cf,
  setImmediate: Kl,
  asap: Sf
};
function le(e, r, t, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
A.inherits(le, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Jl = le.prototype, Zl = {};
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
].forEach((e) => {
  Zl[e] = { value: e };
});
Object.defineProperties(le, Zl);
Object.defineProperty(Jl, "isAxiosError", { value: !0 });
le.from = (e, r, t, n, i, a) => {
  const s = Object.create(Jl);
  return A.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), le.call(s, e.message, r, t, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const Nf = null;
function Ea(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Ql(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ro(e, r, t) {
  return e ? e.concat(r).map(function(i, a) {
    return i = Ql(i), !t && a ? "[" + i + "]" : i;
  }).join(t ? "." : "") : r;
}
function Of(e) {
  return A.isArray(e) && !e.some(Ea);
}
const Tf = A.toFlatObject(A, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function wi(e, r, t) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = A.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, g) {
    return !A.isUndefined(g[v]);
  });
  const n = t.metaTokens, i = t.visitor || d, a = t.dots, s = t.indexes, l = (t.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(r);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (A.isDate(p))
      return p.toISOString();
    if (!l && A.isBlob(p))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(p) || A.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, v, g) {
    let x = p;
    if (p && !g && typeof p == "object") {
      if (A.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (A.isArray(p) && Of(p) || (A.isFileList(p) || A.endsWith(v, "[]")) && (x = A.toArray(p)))
        return v = Ql(v), x.forEach(function(E, S) {
          !(A.isUndefined(E) || E === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ro([v], S, a) : s === null ? v : v + "[]",
            c(E)
          );
        }), !1;
    }
    return Ea(p) ? !0 : (r.append(ro(g, v, a), c(p)), !1);
  }
  const h = [], f = Object.assign(Tf, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Ea
  });
  function m(p, v) {
    if (!A.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      h.push(p), A.forEach(p, function(x, w) {
        (!(A.isUndefined(x) || x === null) && i.call(
          r,
          x,
          A.isString(w) ? w.trim() : w,
          v,
          f
        )) === !0 && m(x, v ? v.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), r;
}
function no(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function fs(e, r) {
  this._pairs = [], e && wi(e, this, r);
}
const ec = fs.prototype;
ec.append = function(r, t) {
  this._pairs.push([r, t]);
};
ec.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, no);
  } : no;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function Af(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tc(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || Af, i = t && t.serialize;
  let a;
  if (i ? a = i(r, t) : a = A.isURLSearchParams(r) ? r.toString() : new fs(r, t).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class io {
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
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    A.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const rc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rf = typeof URLSearchParams < "u" ? URLSearchParams : fs, jf = typeof FormData < "u" ? FormData : null, _f = typeof Blob < "u" ? Blob : null, kf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rf,
    FormData: jf,
    Blob: _f
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ps = typeof window < "u" && typeof document < "u", Ca = typeof navigator == "object" && navigator || void 0, Mf = ps && (!Ca || ["ReactNative", "NativeScript", "NS"].indexOf(Ca.product) < 0), Pf = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Df = ps && window.location.href || "http://localhost", If = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ps,
  hasStandardBrowserEnv: Mf,
  hasStandardBrowserWebWorkerEnv: Pf,
  navigator: Ca,
  origin: Df
}, Symbol.toStringTag, { value: "Module" })), ze = {
  ...If,
  ...kf
};
function Lf(e, r) {
  return wi(e, new ze.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, i, a) {
      return ze.isNode && A.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Ff(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function $f(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const i = t.length;
  let a;
  for (n = 0; n < i; n++)
    a = t[n], r[a] = e[a];
  return r;
}
function nc(e) {
  function r(t, n, i, a) {
    let s = t[a++];
    if (s === "__proto__") return !0;
    const o = Number.isFinite(+s), l = a >= t.length;
    return s = !s && A.isArray(i) ? i.length : s, l ? (A.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !o) : ((!i[s] || !A.isObject(i[s])) && (i[s] = []), r(t, n, i[s], a) && A.isArray(i[s]) && (i[s] = $f(i[s])), !o);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const t = {};
    return A.forEachEntry(e, (n, i) => {
      r(Ff(n), i, t, 0);
    }), t;
  }
  return null;
}
function Uf(e, r, t) {
  if (A.isString(e))
    try {
      return (r || JSON.parse)(e), A.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const kn = {
  transitional: rc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", i = n.indexOf("application/json") > -1, a = A.isObject(r);
    if (a && A.isHTMLForm(r) && (r = new FormData(r)), A.isFormData(r))
      return i ? JSON.stringify(nc(r)) : r;
    if (A.isArrayBuffer(r) || A.isBuffer(r) || A.isStream(r) || A.isFile(r) || A.isBlob(r) || A.isReadableStream(r))
      return r;
    if (A.isArrayBufferView(r))
      return r.buffer;
    if (A.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let o;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Lf(r, this.formSerializer).toString();
      if ((o = A.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return wi(
          o ? { "files[]": r } : r,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (t.setContentType("application/json", !1), Uf(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || kn.transitional, n = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (A.isResponse(r) || A.isReadableStream(r))
      return r;
    if (r && A.isString(r) && (n && !this.responseType || i)) {
      const s = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(r);
      } catch (o) {
        if (s)
          throw o.name === "SyntaxError" ? le.from(o, le.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return r;
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
    FormData: ze.classes.FormData,
    Blob: ze.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  kn.headers[e] = {};
});
const Bf = A.toObjectSet([
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
]), Wf = (e) => {
  const r = {};
  let t, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), t = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!t || r[t] && Bf[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, ao = Symbol("internals");
function Kr(e) {
  return e && String(e).trim().toLowerCase();
}
function ei(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(ei) : String(e);
}
function Hf(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const zf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $i(e, r, t, n, i) {
  if (A.isFunction(n))
    return n.call(this, r, t);
  if (i && (r = t), !!A.isString(r)) {
    if (A.isString(n))
      return r.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(r);
  }
}
function Vf(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Yf(e, r) {
  const t = A.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(i, a, s) {
        return this[n].call(this, r, i, a, s);
      },
      configurable: !0
    });
  });
}
class Ve {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const i = this;
    function a(o, l, c) {
      const d = Kr(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const h = A.findKey(i, d);
      (!h || i[h] === void 0 || c === !0 || c === void 0 && i[h] !== !1) && (i[h || l] = ei(o));
    }
    const s = (o, l) => A.forEach(o, (c, d) => a(c, d, l));
    if (A.isPlainObject(r) || r instanceof this.constructor)
      s(r, t);
    else if (A.isString(r) && (r = r.trim()) && !zf(r))
      s(Wf(r), t);
    else if (A.isHeaders(r))
      for (const [o, l] of r.entries())
        a(l, o, n);
    else
      r != null && a(t, r, n);
    return this;
  }
  get(r, t) {
    if (r = Kr(r), r) {
      const n = A.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t)
          return i;
        if (t === !0)
          return Hf(i);
        if (A.isFunction(t))
          return t.call(this, i, n);
        if (A.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = Kr(r), r) {
      const n = A.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || $i(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = Kr(s), s) {
        const o = A.findKey(n, s);
        o && (!t || $i(n, n[o], o, t)) && (delete n[o], i = !0);
      }
    }
    return A.isArray(r) ? r.forEach(a) : a(r), i;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, i = !1;
    for (; n--; ) {
      const a = t[n];
      (!r || $i(this, this[a], a, r, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(r) {
    const t = this, n = {};
    return A.forEach(this, (i, a) => {
      const s = A.findKey(n, a);
      if (s) {
        t[s] = ei(i), delete t[a];
        return;
      }
      const o = r ? Vf(a) : String(a).trim();
      o !== a && delete t[a], t[o] = ei(i), n[o] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (n, i) => {
      n != null && n !== !1 && (t[i] = r && A.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((i) => n.set(i)), n;
  }
  static accessor(r) {
    const n = (this[ao] = this[ao] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const o = Kr(s);
      n[o] || (Yf(i, s), n[o] = !0);
    }
    return A.isArray(r) ? r.forEach(a) : a(r), this;
  }
}
Ve.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(Ve.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
A.freezeMethods(Ve);
function Ui(e, r) {
  const t = this || kn, n = r || t, i = Ve.from(n.headers);
  let a = n.data;
  return A.forEach(e, function(o) {
    a = o.call(t, a, i.normalize(), r ? r.status : void 0);
  }), i.normalize(), a;
}
function ic(e) {
  return !!(e && e.__CANCEL__);
}
function Wr(e, r, t) {
  le.call(this, e ?? "canceled", le.ERR_CANCELED, r, t), this.name = "CanceledError";
}
A.inherits(Wr, le, {
  __CANCEL__: !0
});
function ac(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new le(
    "Request failed with status code " + t.status,
    [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function qf(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Gf(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let i = 0, a = 0, s;
  return r = r !== void 0 ? r : 1e3, function(l) {
    const c = Date.now(), d = n[a];
    s || (s = c), t[i] = l, n[i] = c;
    let h = a, f = 0;
    for (; h !== i; )
      f += t[h++], h = h % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - s < r)
      return;
    const m = d && c - d;
    return m ? Math.round(f * 1e3 / m) : void 0;
  };
}
function Xf(e, r) {
  let t = 0, n = 1e3 / r, i, a;
  const s = (c, d = Date.now()) => {
    t = d, i = null, a && (clearTimeout(a), a = null), e.apply(null, c);
  };
  return [(...c) => {
    const d = Date.now(), h = d - t;
    h >= n ? s(c, d) : (i = c, a || (a = setTimeout(() => {
      a = null, s(i);
    }, n - h)));
  }, () => i && s(i)];
}
const ci = (e, r, t = 3) => {
  let n = 0;
  const i = Gf(50, 250);
  return Xf((a) => {
    const s = a.loaded, o = a.lengthComputable ? a.total : void 0, l = s - n, c = i(l), d = s <= o;
    n = s;
    const h = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && o && d ? (o - s) / c : void 0,
      event: a,
      lengthComputable: o != null,
      [r ? "download" : "upload"]: !0
    };
    e(h);
  }, t);
}, so = (e, r) => {
  const t = e != null;
  return [(n) => r[0]({
    lengthComputable: t,
    total: e,
    loaded: n
  }), r[1]];
}, oo = (e) => (...r) => A.asap(() => e(...r)), Kf = ze.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = ze.navigator && /(msie|trident)/i.test(ze.navigator.userAgent), t = document.createElement("a");
    let n;
    function i(a) {
      let s = a;
      return r && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return n = i(window.location.href), function(s) {
      const o = A.isString(s) ? i(s) : s;
      return o.protocol === n.protocol && o.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Jf = ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, t, n, i, a) {
      const s = [e + "=" + encodeURIComponent(r)];
      A.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), A.isString(n) && s.push("path=" + n), A.isString(i) && s.push("domain=" + i), a === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function Zf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qf(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function sc(e, r) {
  return e && !Zf(r) ? Qf(e, r) : r;
}
const lo = (e) => e instanceof Ve ? { ...e } : e;
function hr(e, r) {
  r = r || {};
  const t = {};
  function n(c, d, h) {
    return A.isPlainObject(c) && A.isPlainObject(d) ? A.merge.call({ caseless: h }, c, d) : A.isPlainObject(d) ? A.merge({}, d) : A.isArray(d) ? d.slice() : d;
  }
  function i(c, d, h) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(c))
        return n(void 0, c, h);
    } else return n(c, d, h);
  }
  function a(c, d) {
    if (!A.isUndefined(d))
      return n(void 0, d);
  }
  function s(c, d) {
    if (A.isUndefined(d)) {
      if (!A.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, d);
  }
  function o(c, d, h) {
    if (h in r)
      return n(c, d);
    if (h in e)
      return n(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: o,
    headers: (c, d) => i(lo(c), lo(d), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, r)), function(d) {
    const h = l[d] || i, f = h(e[d], r[d], d);
    A.isUndefined(f) && h !== o || (t[d] = f);
  }), t;
}
const oc = (e) => {
  const r = hr({}, e);
  let { data: t, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: s, auth: o } = r;
  r.headers = s = Ve.from(s), r.url = tc(sc(r.baseURL, r.url), e.params, e.paramsSerializer), o && s.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let l;
  if (A.isFormData(t)) {
    if (ze.hasStandardBrowserEnv || ze.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [c, ...d] = l ? l.split(";").map((h) => h.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...d].join("; "));
    }
  }
  if (ze.hasStandardBrowserEnv && (n && A.isFunction(n) && (n = n(r)), n || n !== !1 && Kf(r.url))) {
    const c = i && a && Jf.read(a);
    c && s.set(i, c);
  }
  return r;
}, ep = typeof XMLHttpRequest < "u", tp = ep && function(e) {
  return new Promise(function(t, n) {
    const i = oc(e);
    let a = i.data;
    const s = Ve.from(i.headers).normalize();
    let { responseType: o, onUploadProgress: l, onDownloadProgress: c } = i, d, h, f, m, p;
    function v() {
      m && m(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(d), i.signal && i.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function x() {
      if (!g)
        return;
      const E = Ve.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), C = {
        data: !o || o === "text" || o === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: E,
        config: e,
        request: g
      };
      ac(function(R) {
        t(R), v();
      }, function(R) {
        n(R), v();
      }, C), g = null;
    }
    "onloadend" in g ? g.onloadend = x : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, g.onabort = function() {
      g && (n(new le("Request aborted", le.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new le("Network Error", le.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let S = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const C = i.transitional || rc;
      i.timeoutErrorMessage && (S = i.timeoutErrorMessage), n(new le(
        S,
        C.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in g && A.forEach(s.toJSON(), function(S, C) {
      g.setRequestHeader(C, S);
    }), A.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), o && o !== "json" && (g.responseType = i.responseType), c && ([f, p] = ci(c, !0), g.addEventListener("progress", f)), l && g.upload && ([h, m] = ci(l), g.upload.addEventListener("progress", h), g.upload.addEventListener("loadend", m)), (i.cancelToken || i.signal) && (d = (E) => {
      g && (n(!E || E.type ? new Wr(null, e, g) : E), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(d), i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
    const w = qf(i.url);
    if (w && ze.protocols.indexOf(w) === -1) {
      n(new le("Unsupported protocol " + w + ":", le.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, rp = (e, r) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (r || t) {
    let n = new AbortController(), i;
    const a = function(c) {
      if (!i) {
        i = !0, o();
        const d = c instanceof Error ? c : this.reason;
        n.abort(d instanceof le ? d : new Wr(d instanceof Error ? d.message : d));
      }
    };
    let s = r && setTimeout(() => {
      s = null, a(new le(`timeout ${r} of ms exceeded`, le.ETIMEDOUT));
    }, r);
    const o = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", a));
    const { signal: l } = n;
    return l.unsubscribe = () => A.asap(o), l;
  }
}, np = function* (e, r) {
  let t = e.byteLength;
  if (t < r) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < t; )
    i = n + r, yield e.slice(n, i), n = i;
}, ip = async function* (e, r) {
  for await (const t of ap(e))
    yield* np(t, r);
}, ap = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: t, value: n } = await r.read();
      if (t)
        break;
      yield n;
    }
  } finally {
    await r.cancel();
  }
}, co = (e, r, t, n) => {
  const i = ip(e, r);
  let a = 0, s, o = (l) => {
    s || (s = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: d } = await i.next();
        if (c) {
          o(), l.close();
          return;
        }
        let h = d.byteLength;
        if (t) {
          let f = a += h;
          t(f);
        }
        l.enqueue(new Uint8Array(d));
      } catch (c) {
        throw o(c), c;
      }
    },
    cancel(l) {
      return o(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ei = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lc = Ei && typeof ReadableStream == "function", sp = Ei && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (r) => e.encode(r))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), cc = (e, ...r) => {
  try {
    return !!e(...r);
  } catch {
    return !1;
  }
}, op = lc && cc(() => {
  let e = !1;
  const r = new Request(ze.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !r;
}), uo = 64 * 1024, Sa = lc && cc(() => A.isReadableStream(new Response("").body)), ui = {
  stream: Sa && ((e) => e.body)
};
Ei && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !ui[r] && (ui[r] = A.isFunction(e[r]) ? (t) => t[r]() : (t, n) => {
      throw new le(`Response type '${r}' is not supported`, le.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const lp = async (e) => {
  if (e == null)
    return 0;
  if (A.isBlob(e))
    return e.size;
  if (A.isSpecCompliantForm(e))
    return (await new Request(ze.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(e) || A.isArrayBuffer(e))
    return e.byteLength;
  if (A.isURLSearchParams(e) && (e = e + ""), A.isString(e))
    return (await sp(e)).byteLength;
}, cp = async (e, r) => {
  const t = A.toFiniteNumber(e.getContentLength());
  return t ?? lp(r);
}, up = Ei && (async (e) => {
  let {
    url: r,
    method: t,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: o,
    onUploadProgress: l,
    responseType: c,
    headers: d,
    withCredentials: h = "same-origin",
    fetchOptions: f
  } = oc(e);
  c = c ? (c + "").toLowerCase() : "text";
  let m = rp([i, a && a.toAbortSignal()], s), p;
  const v = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let g;
  try {
    if (l && op && t !== "get" && t !== "head" && (g = await cp(d, n)) !== 0) {
      let C = new Request(r, {
        method: "POST",
        body: n,
        duplex: "half"
      }), D;
      if (A.isFormData(n) && (D = C.headers.get("content-type")) && d.setContentType(D), C.body) {
        const [R, N] = so(
          g,
          ci(oo(l))
        );
        n = co(C.body, uo, R, N);
      }
    }
    A.isString(h) || (h = h ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    p = new Request(r, {
      ...f,
      signal: m,
      method: t.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: x ? h : void 0
    });
    let w = await fetch(p);
    const E = Sa && (c === "stream" || c === "response");
    if (Sa && (o || E && v)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((M) => {
        C[M] = w[M];
      });
      const D = A.toFiniteNumber(w.headers.get("content-length")), [R, N] = o && so(
        D,
        ci(oo(o), !0)
      ) || [];
      w = new Response(
        co(w.body, uo, R, () => {
          N && N(), v && v();
        }),
        C
      );
    }
    c = c || "text";
    let S = await ui[A.findKey(ui, c) || "text"](w, e);
    return !E && v && v(), await new Promise((C, D) => {
      ac(C, D, {
        data: S,
        headers: Ve.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: p
      });
    });
  } catch (x) {
    throw v && v(), x && x.name === "TypeError" && /fetch/i.test(x.message) ? Object.assign(
      new le("Network Error", le.ERR_NETWORK, e, p),
      {
        cause: x.cause || x
      }
    ) : le.from(x, x && x.code, e, p);
  }
}), Na = {
  http: Nf,
  xhr: tp,
  fetch: up
};
A.forEach(Na, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const ho = (e) => `- ${e}`, dp = (e) => A.isFunction(e) || e === null || e === !1, uc = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    const i = {};
    for (let a = 0; a < r; a++) {
      t = e[a];
      let s;
      if (n = t, !dp(t) && (n = Na[(s = String(t)).toLowerCase()], n === void 0))
        throw new le(`Unknown adapter '${s}'`);
      if (n)
        break;
      i[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = r ? a.length > 1 ? `since :
` + a.map(ho).join(`
`) : " " + ho(a[0]) : "as no adapter specified";
      throw new le(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Na
};
function Bi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Wr(null, e);
}
function fo(e) {
  return Bi(e), e.headers = Ve.from(e.headers), e.data = Ui.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), uc.getAdapter(e.adapter || kn.adapter)(e).then(function(n) {
    return Bi(e), n.data = Ui.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ve.from(n.headers), n;
  }, function(n) {
    return ic(n) || (Bi(e), n && n.response && (n.response.data = Ui.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ve.from(n.response.headers))), Promise.reject(n);
  });
}
const dc = "1.7.7", ms = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ms[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const po = {};
ms.transitional = function(r, t, n) {
  function i(a, s) {
    return "[Axios v" + dc + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, o) => {
    if (r === !1)
      throw new le(
        i(s, " has been removed" + (t ? " in " + t : "")),
        le.ERR_DEPRECATED
      );
    return t && !po[s] && (po[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(a, s, o) : !0;
  };
};
function hp(e, r, t) {
  if (typeof e != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], s = r[a];
    if (s) {
      const o = e[a], l = o === void 0 || s(o, a, e);
      if (l !== !0)
        throw new le("option " + a + " must be " + l, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new le("Unknown option " + a, le.ERR_BAD_OPTION);
  }
}
const Oa = {
  assertOptions: hp,
  validators: ms
}, Bt = Oa.validators;
class lr {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new io(),
      response: new io()
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
  async request(r, t) {
    try {
      return await this._request(r, t);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = hr(this.defaults, t);
    const { transitional: n, paramsSerializer: i, headers: a } = t;
    n !== void 0 && Oa.assertOptions(n, {
      silentJSONParsing: Bt.transitional(Bt.boolean),
      forcedJSONParsing: Bt.transitional(Bt.boolean),
      clarifyTimeoutError: Bt.transitional(Bt.boolean)
    }, !1), i != null && (A.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : Oa.assertOptions(i, {
      encode: Bt.function,
      serialize: Bt.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = a && A.merge(
      a.common,
      a[t.method]
    );
    a && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), t.headers = Ve.concat(s, a);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(t) === !1 || (l = l && v.synchronous, o.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let d, h = 0, f;
    if (!l) {
      const p = [fo.bind(this), void 0];
      for (p.unshift.apply(p, o), p.push.apply(p, c), f = p.length, d = Promise.resolve(t); h < f; )
        d = d.then(p[h++], p[h++]);
      return d;
    }
    f = o.length;
    let m = t;
    for (h = 0; h < f; ) {
      const p = o[h++], v = o[h++];
      try {
        m = p(m);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      d = fo.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, f = c.length; h < f; )
      d = d.then(c[h++], c[h++]);
    return d;
  }
  getUri(r) {
    r = hr(this.defaults, r);
    const t = sc(r.baseURL, r.url);
    return tc(t, r.params, r.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(r) {
  lr.prototype[r] = function(t, n) {
    return this.request(hr(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(a, s, o) {
      return this.request(hr(o || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  lr.prototype[r] = t(), lr.prototype[r + "Form"] = t(!0);
});
class vs {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const s = new Promise((o) => {
        n.subscribe(o), a = o;
      }).then(i);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, r(function(a, s, o) {
      n.reason || (n.reason = new Wr(a, s, o), t(n.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), t = (n) => {
      r.abort(n);
    };
    return this.subscribe(t), r.signal.unsubscribe = () => this.unsubscribe(t), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new vs(function(i) {
        r = i;
      }),
      cancel: r
    };
  }
}
function fp(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function pp(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Ta = {
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
Object.entries(Ta).forEach(([e, r]) => {
  Ta[r] = e;
});
function hc(e) {
  const r = new lr(e), t = Hl(lr.prototype.request, r);
  return A.extend(t, lr.prototype, r, { allOwnKeys: !0 }), A.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(i) {
    return hc(hr(e, i));
  }, t;
}
const he = hc(kn);
he.Axios = lr;
he.CanceledError = Wr;
he.CancelToken = vs;
he.isCancel = ic;
he.VERSION = dc;
he.toFormData = wi;
he.AxiosError = le;
he.Cancel = he.CanceledError;
he.all = function(r) {
  return Promise.all(r);
};
he.spread = fp;
he.isAxiosError = pp;
he.mergeConfig = hr;
he.AxiosHeaders = Ve;
he.formToJSON = (e) => nc(A.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = uc.getAdapter;
he.HttpStatusCode = Ta;
he.default = he;
class mp {
  constructor() {
  }
  logout() {
    this.clear();
  }
  logoutApplication() {
    localStorage.removeItem("a_token"), localStorage.removeItem("app_req");
  }
  clearList(r, t) {
    try {
      r && r.length > 0 && r.forEach((n) => {
        localStorage.removeItem(n.key);
      }), t(!0);
    } catch {
      t(!1);
    }
  }
  get(r) {
    return localStorage.getItem(r);
  }
  saveList(r, t) {
    try {
      r && r.length > 0 && r.forEach((n) => {
        localStorage.setItem(n.key, n.value.toString());
      }), t(!0);
    } catch {
      t(!1);
    }
  }
  clear() {
    localStorage.clear();
  }
  remove(r) {
    localStorage.removeItem(r);
  }
  save(r, t) {
    localStorage.setItem(r, t);
  }
  getCookie(r) {
    let t = null;
    if (document.cookie && document.cookie !== "") {
      const n = document.cookie.split(";");
      for (let i = 0; i < n.length; i++) {
        const a = n[i].trim();
        if (a.substring(0, r.length + 1) === r + "=") {
          t = decodeURIComponent(a.substring(r.length + 1));
          break;
        }
      }
    }
    return t;
  }
}
const Pe = new mp(), Wi = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd"
}, Ci = ({
  children: e,
  onClickOutside: r,
  focusEvent: t = "focusin",
  mouseEvent: n = "click",
  touchEvent: i = "touchend"
}) => {
  const a = ue(null), s = ue(null), o = ue(!1);
  Ye(() => (setTimeout(() => {
    o.current = !0;
  }, 0), () => {
    o.current = !1;
  }), []);
  const l = (m) => (p) => {
    s.current = p.target;
    const v = e == null ? void 0 : e.props[m];
    v && v(p);
  }, c = (m) => {
    a.current = m;
    let { ref: p } = e;
    typeof p == "function" ? p(m) : p && (p.current = m);
  };
  Ye(() => {
    var v;
    const m = ((v = a.current) == null ? void 0 : v.ownerDocument) ?? document, p = (g) => {
      var x;
      o.current && ((x = a.current) != null && x.contains(g.target) || s.current === g.target || m.contains(g.target) && r(g));
    };
    return m.addEventListener(n, p), m.addEventListener(i, p), m.addEventListener(t, p), () => {
      m.removeEventListener(n, p), m.removeEventListener(i, p), m.removeEventListener(t, p);
    };
  }, [t, n, r, i]);
  const d = Wi[n], h = Wi[i], f = Wi[t];
  return T.Children.only(
    oi(e, {
      ref: c,
      [f]: l(f),
      [d]: l(d),
      [h]: l(h)
    })
  );
};
Ci.displayName = "DesmyClickOutsideListener";
class fc extends me {
  constructor(t) {
    super(t);
    y(this, "popoverDropdownRef");
    y(this, "btnDropdownRef");
    y(this, "searchRef");
    y(this, "divRef");
    y(this, "handleChange", (t) => {
      const n = { ...this.state.input };
      n[t.target.name] = t.target.value, this.setState({
        input: n
      });
    });
    y(this, "handleRequestData", () => {
      const t = this.props.request;
      if (t !== void 0 && !j.isEmptyOrNull(t.url) && this.state.requestUrl !== t.url) {
        this.setState({ requestUrl: t.url, isLoading: !0 }, this.fetch);
        return;
      }
    });
    y(this, "handleSelectedMultiple", async (t) => {
      try {
        const { data: n } = this.props;
        return !n || !Array.isArray(t) ? [] : t.map((a) => a.id !== void 0 ? a : a.id === void 0 ? void 0 : a.find((o) => o.id === this.handleEncrypt(a))).filter((a) => a !== void 0);
      } catch {
        return [];
      }
    });
    y(this, "handleDefault", async () => {
      try {
        const t = this.props.data !== void 0 && this.props.data !== null ? this.props.data : this.state.datalist;
        if (!j.isEmptyOrNull(t) || !j.isEmptyOrNull(this.props.defaultValue))
          if (!(this.props.is_multiple === void 0 || this.props.is_multiple === !1)) {
            const i = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue], a = t.filter(
              (s) => i.some((o) => (o == null ? void 0 : o.id) === s.id || j.toString(o) === j.toString(s.id))
            );
            this.setState({ datalist: t, defaultValue: this.props.defaultValue, hasLoaded: !0 }, () => {
              a !== void 0 && this.props.handleChange !== void 0 && this.setState({ selectedMultiple: a }, () => {
                this.props.handleChange !== void 0 && this.props.handleChange(a);
              });
            });
          } else {
            const i = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue, a = t.find((s) => typeof i == "object" && !j.isEmptyOrNull(i) ? j.toString(s.id).toLowerCase() === j.toString(i == null ? void 0 : i.id).toLowerCase() : j.toString(s.id).toLowerCase() === j.toString(i).toLowerCase() || j.toString(s.name).toLowerCase() === j.toString(i).toLowerCase());
            this.setState({ datalist: t, hasLoaded: !0 }, () => {
              if (!j.isEmptyOrNull(a) && a != null) {
                const s = this.handleEncrypt(a == null ? void 0 : a.id), { id: o, ...l } = a, c = {
                  selectedList: {
                    id: s || o,
                    ...l
                  }
                };
                this.setState(c, () => {
                  this.props.handleChange !== void 0 && this.props.handleChange(c.selectedList);
                });
              }
            });
          }
      } catch {
      }
    });
    y(this, "handleEncrypt", (t) => {
      if (this.props.enableDecrypt) {
        const n = j.toString(t);
        return j.isEmptyOrNull(n) ? t : n;
      } else
        return t;
    });
    y(this, "handleDelayedProcess", () => {
      setTimeout(() => {
        this.handleProcess();
      }, 1e3);
    });
    y(this, "handleProcess", () => {
      this.handleDefault();
    });
    y(this, "fetch", async () => {
      const { request: t } = this.props, { error: n } = this.state, i = t == null ? void 0 : t.token;
      n.state = !1, this.setState({ isLoading: !0, error: n });
      try {
        const s = (await he.get((t == null ? void 0 : t.url) ?? "", {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${i}`
          }
        })).data;
        if (s.success) {
          const o = s.data;
          this.onClear(), this.props.handleChange && this.props.handleChange(this.props.is_multiple ? [] : {}), this.setState({ datalist: o, isLoading: !1 }, this.handleDelayedProcess);
        } else
          this.handleError(s.message);
      } catch {
        this.handleError();
      }
    });
    y(this, "handleError", (t = "") => {
      try {
        const { error: n } = this.state, i = {
          ...n,
          state: !0,
          message: t
        };
        this.setState({ isLoading: !1, error: i });
      } catch (n) {
        console.error("Error occurred while handling error:", n);
      }
    });
    y(this, "onClear", () => {
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
    y(this, "openDropdownPopover", () => {
      this.props.disabled || (this.handleDropdownPopover(), this.handleDropdownPopover());
    });
    y(this, "handleDropdownPopover", () => {
      this.props.disabled || (Fh(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
        placement: "bottom-start",
        strategy: "fixed",
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: ["top", "bottom-start"]
              // Allow switching between top and bottom
            }
          }
        ]
      }), this.setState({ dropdownPopoverShow: !0 }, () => {
        var t;
        (t = this.searchRef.current) == null || t.focus();
      }));
    });
    y(this, "removeItem", (t, n, i) => {
      if (i === void 0)
        return t;
      for (let a = 0; a < t.length; a++)
        if (t[a][n] === i) {
          t.splice(a, 1);
          break;
        }
      return t;
    });
    y(this, "handleSearch", (t, n) => {
      try {
        return t.find((i) => i.id === n);
      } catch {
        return !1;
      }
    });
    y(this, "handleSelectMessage", (t) => {
      try {
        return t == null ? "" : t.map((n) => this.handleEncrypt(n.name)).join(", ");
      } catch {
        return "";
      }
    });
    y(this, "deleteItems", (t) => this.state.selectedMultiple.filter((i) => i.id !== t));
    y(this, "handleSelectedItem", (t, n) => {
      t.preventDefault();
      const i = !(this.props.is_multiple === void 0 || this.props.is_multiple === !1);
      let { selectedMultiple: a } = this.state;
      i ? this.state.selectedMultiple.find((o) => o.id === n.id) ? (a = this.deleteItems(n.id), this.setState({ selectedMultiple: a, clear: !1, selectedAll: !1 }), this.props.handleChange && this.props.handleChange(a)) : (a.push(n), this.setState({ selectedMultiple: a, clear: !1, selectedAll: !1 }), this.props.handleChange && this.props.handleChange(a)) : this.setState({ selectedList: n, clear: !1, selectedAll: !1 }), this.props.handleDropdownChange !== void 0 ? this.props.handleDropdownChange(i ? a : n, this.props.type) : this.props.handleChange !== void 0 && this.props.handleChange(i ? a : n), i || this.closeDropdownPopover(), this.handleClearSearch();
    });
    y(this, "handleClearSearch", () => {
      const { input: t } = this.state;
      t.search = "", this.setState({ input: t, selectedAll: !1 });
    });
    y(this, "handleClickAway", () => {
    });
    y(this, "handleClear", () => {
      this.setState({ selectedMultiple: [], selectedList: { id: "", name: null, icon: null, data: null }, clear: !0 }, this.handleClickAway);
    });
    y(this, "handleSelectAll", () => {
      this.props.handleChange && this.props.handleChange(this.state.datalist), this.setState({ selectedAll: !0 }, this.handleClear), this.closeDropdownPopover();
    });
    y(this, "handleClearSelected", () => {
      const t = this.props.is_multiple !== void 0 && this.props.is_multiple ? [] : {};
      this.props.handleChange && this.props.handleChange(t), this.setState({ selectedAll: !1 }, this.handleClear);
    });
    y(this, "closeDropdownPopover", () => {
      this.setState({ dropdownPopoverShow: !1 });
    });
    y(this, "handleClickOutside", (t) => {
      this.divRef.current && !this.divRef.current.contains(t.target) && this.closeDropdownPopover();
    });
    this.popoverDropdownRef = T.createRef(), this.btnDropdownRef = T.createRef(), this.searchRef = T.createRef(), this.divRef = Yt(), this.state = {
      dropdownPopoverShow: !1,
      selectedList: { id: "", name: null, icon: null, data: null },
      selectedMultiple: [],
      defaultValue: "",
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
  componentDidUpdate(t, n) {
    !j.isEmptyOrNull(this.props.defaultValue) && !j.isEmptyOrNull(this.props.data) ? this.state.hasLoaded ? j.isEmptyOrNull(this.state.datalist) && this.setState({ datalist: this.props.data ?? this.state.datalist, hasLoaded: !0 }, this.handleDefault) : this.handleDefault() : j.isEmptyOrNull(this.props.data) || this.state.hasLoaded || this.setState({ datalist: this.props.data ?? this.state.datalist, hasLoaded: !0 }), this.props.request !== void 0 && this.handleRequestData();
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this), document.addEventListener("mousedown", this.handleClickOutside);
    const t = this.props.request;
    if (t !== void 0) {
      if (!j.isEmptyOrNull(t.url)) {
        this.setState({ isLoading: !0, requestUrl: t.url }, () => {
          this.fetch().then(() => {
          });
        });
        return;
      }
    } else
      this.handleDefault();
    const n = this.props.data || [];
    this.setState({ datalist: n }, () => {
      this.handleDelayedProcess();
    });
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx(Ci, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ u.jsxs("div", { className: `flex flex-col w-full relative ${this.props.containerClassName != null ? this.props.containerClassName : "bg-white dark:bg-darkBackground dark:text-white"}`, ref: this.divRef, children: [
      /* @__PURE__ */ u.jsx("div", { className: "relative w-full h-12 border font-poppinsRegular bg-inherit border-black  dark:border-white  ", children: /* @__PURE__ */ u.jsxs("div", { className: "relative h-full w-full text-sm bg-inherit", ref: this.btnDropdownRef, onClick: () => {
        this.openDropdownPopover();
      }, children: [
        /* @__PURE__ */ u.jsx("div", { className: `absolute left-1.5  ${this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0 && this.state.selectedAll ? "-top-2.5  text-xs" : " text-sm top-2.5"} px-2 bg-inherit transition-all`, children: this.props.placeholder }),
        /* @__PURE__ */ u.jsx("div", { className: `flex relative h-12 ${this.props.disabled !== void 0 && this.props.disabled ? " cursor-not-allowed" : "cursor-pointer"}  px-2 items-center w-full`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ u.jsx("div", { className: `mr-2 bg-inherit text-black text-sm dark:text-white w-full justify-start text-start line-clamp-1  ${this.props.selectedRef}`, children: this.props.is_multiple != null && this.props.is_multiple && this.state.selectedMultiple.length > 0 ? this.handleSelectMessage(this.state.selectedMultiple) : j.isEmptyOrNull(this.state.selectedList.name) ? /* @__PURE__ */ u.jsx("div", { className: "w-full line-clamp-1", children: this.props.all !== void 0 && this.state.selectedAll ? `${this.props.all}` : "" }) : /* @__PURE__ */ u.jsxs("span", { className: `${j.isEmptyOrNull(this.state.selectedList.icon) ? "" : "flex"} w-full line-clamp-1 text-start justify-start`, title: `${this.handleEncrypt(this.state.selectedList.name)}`, children: [
            j.isEmptyOrNull(this.state.selectedList.icon) ? "" : /* @__PURE__ */ u.jsx("img", { className: "object-fill w-4 h-4 mr-2 items-center text-start justify-start", alt: "image", src: `${this.handleEncrypt(this.state.selectedList.icon)}` }),
            /* @__PURE__ */ u.jsx("div", { className: "w-full line-clamp-1 justify-start text-start text-s,", children: this.handleEncrypt(this.state.selectedList.name) })
          ] }) }),
          this.props.disabled !== void 0 && this.props.disabled ? null : /* @__PURE__ */ u.jsx("div", { children: this.state.dropdownPopoverShow ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", clipRule: "evenodd" }) }) : /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
        ] }) })
      ] }) }),
      this.props.data != null || this.props.request != null ? /* @__PURE__ */ u.jsx("div", { className: "bg-inherit", children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          ref: this.popoverDropdownRef,
          className: (this.state.dropdownPopoverShow ? "inline-block " : "hidden ") + "absolute border-[1px] z-[800] border-gray-200 dark:border-gray-700 text-base w-96 float-left py-2 bg-inherit  text-white list-none text-left rounded shadow-lg mt-1 " + this.props.dropdownClass,
          style: { minWidth: "12rem" },
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-between items-center text-black", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full relative z-0 mx-3 my-2 group border-b border-black dark:border-white", children: [
              /* @__PURE__ */ u.jsx("input", { type: "text", name: "search", autoFocus: !0, autoComplete: "off", ref: this.searchRef, value: this.state.input.search, onChange: this.handleChange, className: "block py-2.5 text-xs 2xl:text-sm px-0 bg-inherit w-full text-black bg- border-0 border-b-2 border-black appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer", placeholder: " " }),
              /* @__PURE__ */ u.jsx("label", { htmlFor: "floating_search", className: "absolute text-sm text-black dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6", children: "Search here...." })
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full flex-col min-h-24 max-h-96 overflow-auto bg-inherit text-black dark:text-white", children: this.state.error.state && this.props.request !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full text-red-500 justify-center items-center h-24", children: [
              /* @__PURE__ */ u.jsx("div", { className: "text-xs", children: this.state.error.message }),
              /* @__PURE__ */ u.jsx("div", { onClick: () => this.fetch(), className: "text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer", children: "Retry" })
            ] }) : this.state.isLoading && this.props.request !== void 0 ? /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full justify-center items-center mt-5", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full justify-center items-center space-y-3", children: [
              /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "inline w-6 h-6  animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }),
              /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "Loading..." })
            ] }) }) : /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
              this.props.all !== void 0 && this.props.is_multiple && this.state.datalist.length != 0 ? /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} ${this.state.selectedAll ? " font-poppinsBold" : "font-normal"}  transition duration-500 ease-in-out`,
                  onClick: this.handleSelectAll,
                  children: [
                    /* @__PURE__ */ u.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                      "  ",
                      this.props.all
                    ] })
                  ]
                }
              ) : null,
              this.props.onClear !== void 0 ? /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} transition duration-500 ease-in-out`,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ u.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                      "  ",
                      this.props.onClear
                    ] })
                  ]
                }
              ) : null,
              this.state.datalist.length != 0 ? this.state.datalist.filter((t) => j.toString(this.handleEncrypt(t.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((t, n) => {
                var i = this.handleSearch(this.state.selectedMultiple, t.id);
                return /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200  dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white ${this.props.dropdownListClass} ${this.props.is_multiple != null && this.props.is_multiple ? i ? " font-poppinsBold" : "font-normal" : j.toString(this.state.selectedList.id) == j.toString(t.id) ? " font-poppinsBold" : "font-normal"} `,
                    onClick: (a) => this.handleSelectedItem(a, t),
                    title: this.handleEncrypt(t.name),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "mr-2", children: j.isEmptyOrNull(t.icon) ? "" : /* @__PURE__ */ u.jsx("img", { className: "object-fill w-4 h-4", alt: "image", src: `${this.handleEncrypt(t.icon)}` }) }),
                      /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                        "  ",
                        this.handleEncrypt(t.name)
                      ] }),
                      i ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", clipRule: "evenodd" }) }) : this.props.is_multiple ? /* @__PURE__ */ u.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { d: "M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" }) }) : null
                    ]
                  },
                  `${n}`
                );
              }) : /* @__PURE__ */ u.jsx("div", { className: "flex w-full h-24 text-sm dark:text-white text-center justify-center items-center", children: j.isEmptyOrNull(this.props.emptymessage) ? "No data found" : this.props.emptymessage })
            ] }) }) }),
            this.props.is_multiple !== void 0 && this.props.is_multiple && this.state.datalist.length != 0 ? /* @__PURE__ */ u.jsx("div", { className: "flex w-full mt-4", children: /* @__PURE__ */ u.jsx("div", { onClick: () => this.closeDropdownPopover(), className: "flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold", children: "Done" }) }) : null
          ]
        }
      ) }) : null
    ] }) }) });
  }
}
class vp extends T.Component {
  constructor(t) {
    super(t);
    y(this, "handleDataChange", (t) => {
      const n = this.state.datalist.is_multiple !== void 0 ? Array.isArray(t) && t.length > 0 ? t.map((i) => i.id) : [] : t;
      this.setState({ data_value: n });
    });
    y(this, "handleValueChange", (t) => {
      try {
        const { data: n } = this.state;
        n.start_date = t.startDate, n.end_date = t.endDate, this.setState({ data: n, value: t });
      } catch {
      }
    });
    y(this, "handleClose", (t) => {
      try {
        this.props.settings.loading && t && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const n = { ...this.state.data, status: t };
        this.props.settings.datalist !== void 0 && (n.option_data = this.state.data_value), j.isEmptyOrNull(this.state.input.user_input) || (n.user_input = this.state.input.user_input), this.props.onClose(n);
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
          let t = { ...this.state.value }, n = { ...this.state.data };
          t.startDate = this.props.data.start_date, t.endDate = this.props.data.end_date, this.setState({ value: t, data: n });
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
    const { settings: t } = this.props;
    return /* @__PURE__ */ u.jsx("div", { className: " w-full h-full font-poppinsRegular bg-white dark:bg-darkPrimary dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ u.jsx(
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
          children: /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ u.jsx(
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
      /* @__PURE__ */ u.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: [
          t.title != null && t.title != null && !j.isEmptyOrNull(t.title) ? /* @__PURE__ */ u.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${t.type == I.ERROR ? "text-red-600" : "text-gray-900 dark:text-white"} font-poppinsBold`, children: t.title }) : null,
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full my-5", children: [
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-start text-start items-start", children: this.props.children }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full relative", children: t.datalist != null && (!j.isEmptyOrNull(t.datalist.url) || t.datalist.data != null) ? /* @__PURE__ */ u.jsx(
              fc,
              {
                data: t.datalist.data != null ? t.datalist.data : [],
                request: {
                  url: `${j.isEmptyOrNull(t.datalist.url) ? "" : t.datalist.url}`
                },
                selectedData: this.state.data_value,
                defaultValue: t.datalist.default_value,
                handleChange: this.handleDataChange,
                is_multiple: t.datalist.is_multiple !== void 0 ? t.datalist.is_multiple : !1,
                containerClassName: j.isEmptyOrNull(this.props.containerDropDownClassName) ? "bg-white dark:bg-darkPrimary" : this.props.containerDropDownClassName,
                enableDecrypt: t.datalist.encrypted !== void 0 ? t.datalist.encrypted : !1,
                placeholder: `${t.datalist.title}`
              }
            ) : null })
          ] })
        ] }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ u.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ u.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        t.btnPosition != null && t.btnPosition !== void 0 && !j.isEmptyOrNull(t.btnPosition) ? /* @__PURE__ */ u.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: t.btnPosition
          }
        ) }) : null,
        t.btnNegative != null && t.btnNegative !== void 0 && !j.isEmptyOrNull(t.btnNegative) ? /* @__PURE__ */ u.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!1),
            className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: t.btnNegative
          }
        ) }) : null
      ] }) })
    ] }) });
  }
}
class pc extends T.Component {
  constructor(t) {
    super(t);
    y(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: I.ERROR,
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
      const t = { ...this.state.settings }, n = this.props.settings;
      n.title !== void 0 && (t.title = n.title), n.forceLoading !== void 0 && (t.forceLoading = n.forceLoading), n.hint !== void 0 && (t.hint = n.hint), n.handleOnClose !== void 0 && (t.handleOnClose = n.handleOnClose), n.btnPosition !== void 0 && (t.btnPosition = n.btnPosition), n.btnNegative !== void 0 && (t.btnNegative = n.btnNegative), n.type !== void 0 && (t.type = n.type), n.loading !== void 0 && (t.loading = n.loading), n.loadinghint !== void 0 && (t.loadinghint = n.loadinghint), n.showDateRange !== void 0 && (t.showDateRange = n.showDateRange), n.date !== void 0 && (t.date = n.date), n.time !== void 0 && (t.time = n.time), n.showDateRangeTitle !== void 0 && (t.showDateRangeTitle = n.showDateRangeTitle), n.inputFieldLabel !== void 0 && (t.inputFieldLabel = n.inputFieldLabel), n.zIndex !== void 0 && (t.zIndex = n.zIndex), n.datalist !== void 0 && (t.datalist = n.datalist), this.setState({ settings: t, loaded: !0 });
    } catch {
    }
    document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const t = /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "fixed z-[10000] inset-0 overflow-hidden w-dvw h-dvh flex justify-center items-center", children: /* @__PURE__ */ u.jsx("div", { className: "w-full h-screen flex justify-center items-center backdrop-blur-sm inset-0", children: /* @__PURE__ */ u.jsx("div", { className: "max-w-lg w-full", children: /* @__PURE__ */ u.jsx("div", { className: "w-full inline-block align-middle", children: /* @__PURE__ */ u.jsx(vp, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children }) }) }) }) }) });
    return Rr.createPortal(t, this.modalContainer);
  }
}
var gp = typeof Element < "u", yp = typeof Map == "function", xp = typeof Set == "function", bp = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ti(e, r) {
  if (e === r) return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor) return !1;
    var t, n, i;
    if (Array.isArray(e)) {
      if (t = e.length, t != r.length) return !1;
      for (n = t; n-- !== 0; )
        if (!ti(e[n], r[n])) return !1;
      return !0;
    }
    var a;
    if (yp && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!r.has(n.value[0])) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!ti(n.value[1], r.get(n.value[0]))) return !1;
      return !0;
    }
    if (xp && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!r.has(n.value[0])) return !1;
      return !0;
    }
    if (bp && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (t = e.length, t != r.length) return !1;
      for (n = t; n-- !== 0; )
        if (e[n] !== r[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function") return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function") return e.toString() === r.toString();
    if (i = Object.keys(e), t = i.length, t !== Object.keys(r).length) return !1;
    for (n = t; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[n])) return !1;
    if (gp && e instanceof Element) return !1;
    for (n = t; n-- !== 0; )
      if (!((i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") && e.$$typeof) && !ti(e[i[n]], r[i[n]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var wp = function(r, t) {
  try {
    return ti(r, t);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Ep = /* @__PURE__ */ An(wp);
var Cp = function(e, r, t, n, i, a, s, o) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var l;
    if (r === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [t, n, i, a, s, o], d = 0;
      l = new Error(
        r.replace(/%s/g, function() {
          return c[d++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Sp = Cp;
const mo = /* @__PURE__ */ An(Sp);
var Np = function(r, t, n, i) {
  var a = n ? n.call(i, r, t) : void 0;
  if (a !== void 0)
    return !!a;
  if (r === t)
    return !0;
  if (typeof r != "object" || !r || typeof t != "object" || !t)
    return !1;
  var s = Object.keys(r), o = Object.keys(t);
  if (s.length !== o.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(t), c = 0; c < s.length; c++) {
    var d = s[c];
    if (!l(d))
      return !1;
    var h = r[d], f = t[d];
    if (a = n ? n.call(i, h, f, d) : void 0, a === !1 || a === void 0 && h !== f)
      return !1;
  }
  return !0;
};
const Op = /* @__PURE__ */ An(Np);
var mc = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(mc || {}), Hi = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
}, vo = Object.values(mc), gs = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Tp = Object.entries(gs).reduce(
  (e, [r, t]) => (e[t] = r, e),
  {}
), pt = "data-rh", _r = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, kr = (e, r) => {
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const n = e[t];
    if (Object.prototype.hasOwnProperty.call(n, r))
      return n[r];
  }
  return null;
}, Ap = (e) => {
  let r = kr(
    e,
    "title"
    /* TITLE */
  );
  const t = kr(e, _r.TITLE_TEMPLATE);
  if (Array.isArray(r) && (r = r.join("")), t && r)
    return t.replace(/%s/g, () => r);
  const n = kr(e, _r.DEFAULT_TITLE);
  return r || n || void 0;
}, Rp = (e) => kr(e, _r.ON_CHANGE_CLIENT_STATE) || (() => {
}), zi = (e, r) => r.filter((t) => typeof t[e] < "u").map((t) => t[e]).reduce((t, n) => ({ ...t, ...n }), {}), jp = (e, r) => r.filter((t) => typeof t.base < "u").map((t) => t.base).reverse().reduce((t, n) => {
  if (!t.length) {
    const i = Object.keys(n);
    for (let a = 0; a < i.length; a += 1) {
      const o = i[a].toLowerCase();
      if (e.indexOf(o) !== -1 && n[o])
        return t.concat(n);
    }
  }
  return t;
}, []), _p = (e) => console && typeof console.warn == "function" && console.warn(e), Jr = (e, r, t) => {
  const n = {};
  return t.filter((i) => Array.isArray(i[e]) ? !0 : (typeof i[e] < "u" && _p(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`
  ), !1)).map((i) => i[e]).reverse().reduce((i, a) => {
    const s = {};
    a.filter((l) => {
      let c;
      const d = Object.keys(l);
      for (let f = 0; f < d.length; f += 1) {
        const m = d[f], p = m.toLowerCase();
        r.indexOf(p) !== -1 && !(c === "rel" && l[c].toLowerCase() === "canonical") && !(p === "rel" && l[p].toLowerCase() === "stylesheet") && (c = p), r.indexOf(m) !== -1 && (m === "innerHTML" || m === "cssText" || m === "itemprop") && (c = m);
      }
      if (!c || !l[c])
        return !1;
      const h = l[c].toLowerCase();
      return n[c] || (n[c] = {}), s[c] || (s[c] = {}), n[c][h] ? !1 : (s[c][h] = !0, !0);
    }).reverse().forEach((l) => i.push(l));
    const o = Object.keys(s);
    for (let l = 0; l < o.length; l += 1) {
      const c = o[l], d = {
        ...n[c],
        ...s[c]
      };
      n[c] = d;
    }
    return i;
  }, []).reverse();
}, kp = (e, r) => {
  if (Array.isArray(e) && e.length) {
    for (let t = 0; t < e.length; t += 1)
      if (e[t][r])
        return !0;
  }
  return !1;
}, Mp = (e) => ({
  baseTag: jp([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: zi("bodyAttributes", e),
  defer: kr(e, _r.DEFER),
  encode: kr(e, _r.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: zi("htmlAttributes", e),
  linkTags: Jr(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: Jr(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    e
  ),
  noscriptTags: Jr("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: Rp(e),
  scriptTags: Jr(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: Jr("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Ap(e),
  titleAttributes: zi("titleAttributes", e),
  prioritizeSeoTags: kp(e, _r.PRIORITIZE_SEO_TAGS)
}), vc = (e) => Array.isArray(e) ? e.join("") : e, Pp = (e, r) => {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1)
    if (r[t[n]] && r[t[n]].includes(e[t[n]]))
      return !0;
  return !1;
}, Vi = (e, r) => Array.isArray(e) ? e.reduce(
  (t, n) => (Pp(n, r) ? t.priority.push(n) : t.default.push(n), t),
  { priority: [], default: [] }
) : { default: e, priority: [] }, go = (e, r) => ({
  ...e,
  [r]: void 0
}), Dp = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], Aa = (e, r = !0) => r === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), gc = (e) => Object.keys(e).reduce((r, t) => {
  const n = typeof e[t] < "u" ? `${t}="${e[t]}"` : `${t}`;
  return r ? `${r} ${n}` : n;
}, ""), Ip = (e, r, t, n) => {
  const i = gc(t), a = vc(r);
  return i ? `<${e} ${pt}="true" ${i}>${Aa(
    a,
    n
  )}</${e}>` : `<${e} ${pt}="true">${Aa(
    a,
    n
  )}</${e}>`;
}, Lp = (e, r, t = !0) => r.reduce((n, i) => {
  const a = i, s = Object.keys(a).filter(
    (c) => !(c === "innerHTML" || c === "cssText")
  ).reduce((c, d) => {
    const h = typeof a[d] > "u" ? d : `${d}="${Aa(a[d], t)}"`;
    return c ? `${c} ${h}` : h;
  }, ""), o = a.innerHTML || a.cssText || "", l = Dp.indexOf(e) === -1;
  return `${n}<${e} ${pt}="true" ${s}${l ? "/>" : `>${o}</${e}>`}`;
}, ""), yc = (e, r = {}) => Object.keys(e).reduce((t, n) => {
  const i = gs[n];
  return t[i || n] = e[n], t;
}, r), Fp = (e, r, t) => {
  const n = {
    key: r,
    [pt]: !0
  }, i = yc(t, n);
  return [T.createElement("title", i, r)];
}, ri = (e, r) => r.map((t, n) => {
  const i = {
    key: n,
    [pt]: !0
  };
  return Object.keys(t).forEach((a) => {
    const o = gs[a] || a;
    if (o === "innerHTML" || o === "cssText") {
      const l = t.innerHTML || t.cssText;
      i.dangerouslySetInnerHTML = { __html: l };
    } else
      i[o] = t[a];
  }), T.createElement(e, i);
}), at = (e, r, t = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Fp(e, r.title, r.titleAttributes),
        toString: () => Ip(e, r.title, r.titleAttributes, t)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => yc(r),
        toString: () => gc(r)
      };
    default:
      return {
        toComponent: () => ri(e, r),
        toString: () => Lp(e, r, t)
      };
  }
}, $p = ({ metaTags: e, linkTags: r, scriptTags: t, encode: n }) => {
  const i = Vi(e, Hi.meta), a = Vi(r, Hi.link), s = Vi(t, Hi.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...ri("meta", i.priority),
        ...ri("link", a.priority),
        ...ri("script", s.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${at("meta", i.priority, n)} ${at(
          "link",
          a.priority,
          n
        )} ${at("script", s.priority, n)}`
      )
    },
    metaTags: i.default,
    linkTags: a.default,
    scriptTags: s.default
  };
}, Up = (e) => {
  const {
    baseTag: r,
    bodyAttributes: t,
    encode: n = !0,
    htmlAttributes: i,
    noscriptTags: a,
    styleTags: s,
    title: o = "",
    titleAttributes: l,
    prioritizeSeoTags: c
  } = e;
  let { linkTags: d, metaTags: h, scriptTags: f } = e, m = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return c && ({ priorityMethods: m, linkTags: d, metaTags: h, scriptTags: f } = $p(e)), {
    priority: m,
    base: at("base", r, n),
    bodyAttributes: at("bodyAttributes", t, n),
    htmlAttributes: at("htmlAttributes", i, n),
    link: at("link", d, n),
    meta: at("meta", h, n),
    noscript: at("noscript", a, n),
    script: at("script", f, n),
    style: at("style", s, n),
    title: at("title", { title: o, titleAttributes: l }, n)
  };
}, Ra = Up, Bn = [], xc = !!(typeof window < "u" && window.document && window.document.createElement), ja = class {
  constructor(e, r) {
    y(this, "instances", []);
    y(this, "canUseDOM", xc);
    y(this, "context");
    y(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? Bn : this.instances,
        add: (e) => {
          (this.canUseDOM ? Bn : this.instances).push(e);
        },
        remove: (e) => {
          const r = (this.canUseDOM ? Bn : this.instances).indexOf(e);
          (this.canUseDOM ? Bn : this.instances).splice(r, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = r || !1, r || (e.helmet = Ra({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: !0,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }));
  }
}, Bp = {}, bc = T.createContext(Bp), ar, Wp = (ar = class extends me {
  constructor(t) {
    super(t);
    y(this, "helmetData");
    this.helmetData = new ja(this.props.context || {}, ar.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ T.createElement(bc.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, y(ar, "canUseDOM", xc), ar), Sr = (e, r) => {
  const t = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = t.querySelectorAll(`${e}[${pt}]`), i = [].slice.call(n), a = [];
  let s;
  return r && r.length && r.forEach((o) => {
    const l = document.createElement(e);
    for (const c in o)
      if (Object.prototype.hasOwnProperty.call(o, c))
        if (c === "innerHTML")
          l.innerHTML = o.innerHTML;
        else if (c === "cssText")
          l.styleSheet ? l.styleSheet.cssText = o.cssText : l.appendChild(document.createTextNode(o.cssText));
        else {
          const d = c, h = typeof o[d] > "u" ? "" : o[d];
          l.setAttribute(c, h);
        }
    l.setAttribute(pt, "true"), i.some((c, d) => (s = d, l.isEqualNode(c))) ? i.splice(s, 1) : a.push(l);
  }), i.forEach((o) => {
    var l;
    return (l = o.parentNode) == null ? void 0 : l.removeChild(o);
  }), a.forEach((o) => t.appendChild(o)), {
    oldTags: i,
    newTags: a
  };
}, _a = (e, r) => {
  const t = document.getElementsByTagName(e)[0];
  if (!t)
    return;
  const n = t.getAttribute(pt), i = n ? n.split(",") : [], a = [...i], s = Object.keys(r);
  for (const o of s) {
    const l = r[o] || "";
    t.getAttribute(o) !== l && t.setAttribute(o, l), i.indexOf(o) === -1 && i.push(o);
    const c = a.indexOf(o);
    c !== -1 && a.splice(c, 1);
  }
  for (let o = a.length - 1; o >= 0; o -= 1)
    t.removeAttribute(a[o]);
  i.length === a.length ? t.removeAttribute(pt) : t.getAttribute(pt) !== s.join(",") && t.setAttribute(pt, s.join(","));
}, Hp = (e, r) => {
  typeof e < "u" && document.title !== e && (document.title = vc(e)), _a("title", r);
}, yo = (e, r) => {
  const {
    baseTag: t,
    bodyAttributes: n,
    htmlAttributes: i,
    linkTags: a,
    metaTags: s,
    noscriptTags: o,
    onChangeClientState: l,
    scriptTags: c,
    styleTags: d,
    title: h,
    titleAttributes: f
  } = e;
  _a("body", n), _a("html", i), Hp(h, f);
  const m = {
    baseTag: Sr("base", t),
    linkTags: Sr("link", a),
    metaTags: Sr("meta", s),
    noscriptTags: Sr("noscript", o),
    scriptTags: Sr("script", c),
    styleTags: Sr("style", d)
  }, p = {}, v = {};
  Object.keys(m).forEach((g) => {
    const { newTags: x, oldTags: w } = m[g];
    x.length && (p[g] = x), w.length && (v[g] = m[g].oldTags);
  }), r && r(), l(e, p, v);
}, Zr = null, zp = (e) => {
  Zr && cancelAnimationFrame(Zr), e.defer ? Zr = requestAnimationFrame(() => {
    yo(e, () => {
      Zr = null;
    });
  }) : (yo(e), Zr = null);
}, Vp = zp, xo = class extends me {
  constructor() {
    super(...arguments);
    y(this, "rendered", !1);
  }
  shouldComponentUpdate(r) {
    return !Op(r, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: r } = this.props.context;
    r.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: r, setHelmet: t } = this.props.context;
    let n = null;
    const i = Mp(
      r.get().map((a) => {
        const s = { ...a.props };
        return delete s.context, s;
      })
    );
    Wp.canUseDOM ? Vp(i) : Ra && (n = Ra(i)), t(n);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered)
      return;
    this.rendered = !0;
    const { helmetInstances: r } = this.props.context;
    r.add(this), this.emitChange();
  }
  render() {
    return this.init(), null;
  }
}, ga, Yp = (ga = class extends me {
  shouldComponentUpdate(e) {
    return !Ep(go(this.props, "helmetData"), go(e, "helmetData"));
  }
  mapNestedChildrenToProps(e, r) {
    if (!r)
      return null;
    switch (e.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: r
        };
      case "style":
        return {
          cssText: r
        };
      default:
        throw new Error(
          `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(e, r, t, n) {
    return {
      ...r,
      [e.type]: [
        ...r[e.type] || [],
        {
          ...t,
          ...this.mapNestedChildrenToProps(e, n)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, r, t, n) {
    switch (e.type) {
      case "title":
        return {
          ...r,
          [e.type]: n,
          titleAttributes: { ...t }
        };
      case "body":
        return {
          ...r,
          bodyAttributes: { ...t }
        };
      case "html":
        return {
          ...r,
          htmlAttributes: { ...t }
        };
      default:
        return {
          ...r,
          [e.type]: { ...t }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, r) {
    let t = { ...r };
    return Object.keys(e).forEach((n) => {
      t = {
        ...t,
        [n]: e[n]
      };
    }), t;
  }
  warnOnInvalidChildren(e, r) {
    return mo(
      vo.some((t) => e.type === t),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${vo.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), mo(
      !r || typeof r == "string" || Array.isArray(r) && !r.some((t) => typeof t != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, r) {
    let t = {};
    return T.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: i, ...a } = n.props, s = Object.keys(a).reduce((l, c) => (l[Tp[c] || c] = a[c], l), {});
      let { type: o } = n;
      switch (typeof o == "symbol" ? o = o.toString() : this.warnOnInvalidChildren(n, i), o) {
        case "Symbol(react.fragment)":
          r = this.mapChildrenToProps(i, r);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          t = this.flattenArrayTypeChildren(
            n,
            t,
            s,
            i
          );
          break;
        default:
          r = this.mapObjectTypeChildren(n, r, s, i);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(t, r);
  }
  render() {
    const { children: e, ...r } = this.props;
    let t = { ...r }, { helmetData: n } = r;
    if (e && (t = this.mapChildrenToProps(e, t)), n && !(n instanceof ja)) {
      const i = n;
      n = new ja(i.context, !0), delete t.helmetData;
    }
    return n ? /* @__PURE__ */ T.createElement(xo, { ...t, context: n.value }) : /* @__PURE__ */ T.createElement(bc.Consumer, null, (i) => /* @__PURE__ */ T.createElement(xo, { ...t, context: i }));
  }
}, y(ga, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), ga);
const vb = ({ title: e, description: r, name: t, type: n }) => /* @__PURE__ */ u.jsxs(Yp, { children: [
  /* @__PURE__ */ u.jsx("title", { children: e }),
  /* @__PURE__ */ u.jsx("meta", { name: "referrer", content: "no-referrer-when-downgrade" }),
  /* @__PURE__ */ u.jsx("meta", { name: "description", content: r }),
  /* @__PURE__ */ u.jsx("meta", { property: "og:type", content: n }),
  /* @__PURE__ */ u.jsx("meta", { property: "og:title", content: e }),
  /* @__PURE__ */ u.jsx("meta", { property: "og:description", content: r }),
  /* @__PURE__ */ u.jsx("meta", { name: "twitter:creator", content: t }),
  /* @__PURE__ */ u.jsx("meta", { name: "twitter:card", content: n }),
  /* @__PURE__ */ u.jsx("meta", { name: "twitter:title", content: e }),
  /* @__PURE__ */ u.jsx("meta", { name: "twitter:description", content: r })
] });
class qp {
  constructor() {
    y(this, "hasGrantedPermissions", (r, t, n) => !r || !t.length ? !1 : r.some(
      (i) => i.permissions.some(
        ({ name: a }) => t.some(
          (s) => a.toLowerCase() === s.toLowerCase()
        )
      )
    ));
    y(this, "hasUserGrantedPermissions", (r, t, n = !0) => {
      if (!n) return !1;
      if (r != null && r.has_access && n) return !0;
      const i = r.groups;
      return j.isEmptyOrNull(i) || j.isEmptyOrNull(t) ? !1 : i.some(
        (a) => a.permissions.some(
          ({ name: s }) => t.some(
            (o) => s.toLowerCase() === o.toLowerCase()
          )
        )
      );
    });
    y(this, "hasGrantedPermissionGroup", (r, t) => !r || !t.length ? !1 : r.some(
      (n) => t.some(
        (i) => j.toString(n.type).toLowerCase() === j.toString(i).toLowerCase()
      )
    ));
    y(this, "hasUserGrantedPermissionGroup", (r, t, n = !0) => {
      if (r != null && r.has_access && n) return !0;
      const i = r.groups;
      return j.isEmptyOrNull(i) || j.isEmptyOrNull(t) ? !1 : i.some(
        (a) => t.some(
          (s) => j.toString(a.type).toLowerCase() === j.toString(s).toLowerCase()
        )
      );
    });
  }
}
const gb = new qp();
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ka.apply(this, arguments);
}
var bo;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(bo || (bo = {}));
function Qe(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function wc(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Ec(e) {
  let r = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && (r.hash = e.substr(t), e = e.substr(0, t));
    let n = e.indexOf("?");
    n >= 0 && (r.search = e.substr(n), e = e.substr(0, n)), e && (r.pathname = e);
  }
  return r;
}
var wo;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(wo || (wo = {}));
function Gp(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: t,
    search: n = "",
    hash: i = ""
  } = typeof e == "string" ? Ec(e) : e;
  return {
    pathname: t ? t.startsWith("/") ? t : Xp(t, r) : r,
    search: em(n),
    hash: tm(i)
  };
}
function Xp(e, r) {
  let t = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? t.length > 1 && t.pop() : i !== "." && t.push(i);
  }), t.length > 1 ? t.join("/") : "/";
}
function Yi(e, r, t, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Kp(e) {
  return e.filter((r, t) => t === 0 || r.route.path && r.route.path.length > 0);
}
function Jp(e, r) {
  let t = Kp(e);
  return r ? t.map((n, i) => i === t.length - 1 ? n.pathname : n.pathnameBase) : t.map((n) => n.pathnameBase);
}
function Zp(e, r, t, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string" ? i = Ec(e) : (i = ka({}, e), Qe(!i.pathname || !i.pathname.includes("?"), Yi("?", "pathname", "search", i)), Qe(!i.pathname || !i.pathname.includes("#"), Yi("#", "pathname", "hash", i)), Qe(!i.search || !i.search.includes("#"), Yi("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "", s = a ? "/" : i.pathname, o;
  if (s == null)
    o = t;
  else {
    let h = r.length - 1;
    if (!n && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), h -= 1;
      i.pathname = f.join("/");
    }
    o = h >= 0 ? r[h] : "/";
  }
  let l = Gp(i, o), c = s && s !== "/" && s.endsWith("/"), d = (a || s === ".") && t.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
const Qp = (e) => e.join("/").replace(/\/\/+/g, "/"), em = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, tm = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Cc = ["post", "put", "patch", "delete"];
new Set(Cc);
const rm = ["get", ...Cc];
new Set(rm);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
const ys = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (ys.displayName = "DataRouter");
const nm = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (nm.displayName = "DataRouterState");
const im = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (im.displayName = "Await");
const xs = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (xs.displayName = "Navigation");
const bs = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (bs.displayName = "Location");
const Mn = /* @__PURE__ */ Oe.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Mn.displayName = "Route");
const am = /* @__PURE__ */ Oe.createContext(null);
process.env.NODE_ENV !== "production" && (am.displayName = "RouteError");
function Sc() {
  return Oe.useContext(bs) != null;
}
function Nc() {
  return Sc() || (process.env.NODE_ENV !== "production" ? Qe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Qe(!1)), Oe.useContext(bs).location;
}
const Oc = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Tc(e) {
  Oe.useContext(xs).static || Oe.useLayoutEffect(e);
}
function sm() {
  let {
    isDataRoute: e
  } = Oe.useContext(Mn);
  return e ? pm() : om();
}
function om() {
  Sc() || (process.env.NODE_ENV !== "production" ? Qe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Qe(!1));
  let e = Oe.useContext(ys), {
    basename: r,
    future: t,
    navigator: n
  } = Oe.useContext(xs), {
    matches: i
  } = Oe.useContext(Mn), {
    pathname: a
  } = Nc(), s = JSON.stringify(Jp(i, t.v7_relativeSplatPath)), o = Oe.useRef(!1);
  return Tc(() => {
    o.current = !0;
  }), Oe.useCallback(function(c, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && wc(o.current, Oc), !o.current) return;
    if (typeof c == "number") {
      n.go(c);
      return;
    }
    let h = Zp(c, JSON.parse(s), a, d.relative === "path");
    e == null && r !== "/" && (h.pathname = h.pathname === "/" ? r : Qp([r, h.pathname])), (d.replace ? n.replace : n.push)(h, d.state, d);
  }, [r, n, s, a, e]);
}
const lm = /* @__PURE__ */ Oe.createContext(null);
function cm() {
  return Oe.useContext(lm);
}
function um() {
  let {
    matches: e
  } = Oe.useContext(Mn), r = e[e.length - 1];
  return r ? r.params : {};
}
var Ac = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Ac || {}), Rc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Rc || {});
function jc(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function dm(e) {
  let r = Oe.useContext(ys);
  return r || (process.env.NODE_ENV !== "production" ? Qe(!1, jc(e)) : Qe(!1)), r;
}
function hm(e) {
  let r = Oe.useContext(Mn);
  return r || (process.env.NODE_ENV !== "production" ? Qe(!1, jc(e)) : Qe(!1)), r;
}
function fm(e) {
  let r = hm(e), t = r.matches[r.matches.length - 1];
  return t.route.id || (process.env.NODE_ENV !== "production" ? Qe(!1, e + ' can only be used on routes that contain a unique "id"') : Qe(!1)), t.route.id;
}
function pm() {
  let {
    router: e
  } = dm(Ac.UseNavigateStable), r = fm(Rc.UseNavigateStable), t = Oe.useRef(!1);
  return Tc(() => {
    t.current = !0;
  }), Oe.useCallback(function(i, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && wc(t.current, Oc), t.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Ma({
      fromRouteId: r
    }, a)));
  }, [e, r]);
}
new Promise(() => {
});
const yb = (e) => (t) => {
  const n = Nc(), i = sm(), a = um(), s = cm();
  return /* @__PURE__ */ u.jsx(
    e,
    {
      ...t,
      location: n,
      navigate: i,
      params: a,
      outletContext: s
    }
  );
}, xb = (e, { fallback: r = null } = {}) => {
  const t = Sd(e);
  return (i) => /* @__PURE__ */ u.jsx(Nd, { fallback: r, children: /* @__PURE__ */ u.jsx(t, { ...i }) });
}, mm = (e) => {
  const { className: r = "", isOpen: t, backdropClass: n = "", children: i } = e;
  return /* @__PURE__ */ u.jsxs("div", { className: "flex w-full", children: [
    /* @__PURE__ */ u.jsx("div", { className: `${t ? `backdrop h-full w-full ${n}` : "close-backdrop"}` }),
    /* @__PURE__ */ u.jsx("div", { className: `multi-step-modal-cover rounded-lg  p-2 max-w-7xl ${r} ${t ? "open_modal" : "close_modal"}`, children: /* @__PURE__ */ u.jsx("div", { children: i }) })
  ] });
};
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, di.apply(null, arguments);
}
function _c(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Pa(e, r) {
  return Pa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Pa(e, r);
}
function kc(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Pa(e, r);
}
var Da = { exports: {} }, Wn = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function vm() {
  if (Eo) return ge;
  Eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(C) {
    if (typeof C == "object" && C !== null) {
      var D = C.$$typeof;
      switch (D) {
        case r:
          switch (C = C.type, C) {
            case l:
            case c:
            case n:
            case a:
            case i:
            case h:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case o:
                case d:
                case p:
                case m:
                case s:
                  return C;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  function S(C) {
    return E(C) === c;
  }
  return ge.AsyncMode = l, ge.ConcurrentMode = c, ge.ContextConsumer = o, ge.ContextProvider = s, ge.Element = r, ge.ForwardRef = d, ge.Fragment = n, ge.Lazy = p, ge.Memo = m, ge.Portal = t, ge.Profiler = a, ge.StrictMode = i, ge.Suspense = h, ge.isAsyncMode = function(C) {
    return S(C) || E(C) === l;
  }, ge.isConcurrentMode = S, ge.isContextConsumer = function(C) {
    return E(C) === o;
  }, ge.isContextProvider = function(C) {
    return E(C) === s;
  }, ge.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }, ge.isForwardRef = function(C) {
    return E(C) === d;
  }, ge.isFragment = function(C) {
    return E(C) === n;
  }, ge.isLazy = function(C) {
    return E(C) === p;
  }, ge.isMemo = function(C) {
    return E(C) === m;
  }, ge.isPortal = function(C) {
    return E(C) === t;
  }, ge.isProfiler = function(C) {
    return E(C) === a;
  }, ge.isStrictMode = function(C) {
    return E(C) === i;
  }, ge.isSuspense = function(C) {
    return E(C) === h;
  }, ge.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === c || C === a || C === i || C === h || C === f || typeof C == "object" && C !== null && (C.$$typeof === p || C.$$typeof === m || C.$$typeof === s || C.$$typeof === o || C.$$typeof === d || C.$$typeof === g || C.$$typeof === x || C.$$typeof === w || C.$$typeof === v);
  }, ge.typeOf = E, ge;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function gm() {
  return Co || (Co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === n || F === c || F === a || F === i || F === h || F === f || typeof F == "object" && F !== null && (F.$$typeof === p || F.$$typeof === m || F.$$typeof === s || F.$$typeof === o || F.$$typeof === d || F.$$typeof === g || F.$$typeof === x || F.$$typeof === w || F.$$typeof === v);
    }
    function S(F) {
      if (typeof F == "object" && F !== null) {
        var Me = F.$$typeof;
        switch (Me) {
          case r:
            var nt = F.type;
            switch (nt) {
              case l:
              case c:
              case n:
              case a:
              case i:
              case h:
                return nt;
              default:
                var Ge = nt && nt.$$typeof;
                switch (Ge) {
                  case o:
                  case d:
                  case p:
                  case m:
                  case s:
                    return Ge;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var C = l, D = c, R = o, N = s, M = r, Z = d, Q = n, te = p, z = m, Y = t, V = a, W = i, K = h, $ = !1;
    function X(F) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(F) || S(F) === l;
    }
    function O(F) {
      return S(F) === c;
    }
    function k(F) {
      return S(F) === o;
    }
    function L(F) {
      return S(F) === s;
    }
    function U(F) {
      return typeof F == "object" && F !== null && F.$$typeof === r;
    }
    function B(F) {
      return S(F) === d;
    }
    function H(F) {
      return S(F) === n;
    }
    function G(F) {
      return S(F) === p;
    }
    function J(F) {
      return S(F) === m;
    }
    function ee(F) {
      return S(F) === t;
    }
    function ne(F) {
      return S(F) === a;
    }
    function re(F) {
      return S(F) === i;
    }
    function fe(F) {
      return S(F) === h;
    }
    ye.AsyncMode = C, ye.ConcurrentMode = D, ye.ContextConsumer = R, ye.ContextProvider = N, ye.Element = M, ye.ForwardRef = Z, ye.Fragment = Q, ye.Lazy = te, ye.Memo = z, ye.Portal = Y, ye.Profiler = V, ye.StrictMode = W, ye.Suspense = K, ye.isAsyncMode = X, ye.isConcurrentMode = O, ye.isContextConsumer = k, ye.isContextProvider = L, ye.isElement = U, ye.isForwardRef = B, ye.isFragment = H, ye.isLazy = G, ye.isMemo = J, ye.isPortal = ee, ye.isProfiler = ne, ye.isStrictMode = re, ye.isSuspense = fe, ye.isValidElementType = E, ye.typeOf = S;
  }()), ye;
}
var So;
function Mc() {
  return So || (So = 1, process.env.NODE_ENV === "production" ? Wn.exports = vm() : Wn.exports = gm()), Wn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qi, No;
function ym() {
  if (No) return qi;
  No = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var l = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qi = i() ? Object.assign : function(a, s) {
    for (var o, l = n(a), c, d = 1; d < arguments.length; d++) {
      o = Object(arguments[d]);
      for (var h in o)
        r.call(o, h) && (l[h] = o[h]);
      if (e) {
        c = e(o);
        for (var f = 0; f < c.length; f++)
          t.call(o, c[f]) && (l[c[f]] = o[c[f]]);
      }
    }
    return l;
  }, qi;
}
var Gi, Oo;
function ws() {
  if (Oo) return Gi;
  Oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gi = e, Gi;
}
var Xi, To;
function Pc() {
  return To || (To = 1, Xi = Function.call.bind(Object.prototype.hasOwnProperty)), Xi;
}
var Ki, Ao;
function xm() {
  if (Ao) return Ki;
  Ao = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = ws(), t = {}, n = Pc();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, o, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var f = Error(
                (l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            h = a[d](s, d, l, o, null, r);
          } catch (p) {
            h = p;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + o + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var m = c ? c() : "";
            e(
              "Failed " + o + " type: " + h.message + (m ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Ki = i, Ki;
}
var Ji, Ro;
function bm() {
  if (Ro) return Ji;
  Ro = 1;
  var e = Mc(), r = ym(), t = ws(), n = Pc(), i = xm(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(o) {
    var l = "Warning: " + o;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ji = function(o, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(O) {
      var k = O && (c && O[c] || O[d]);
      if (typeof k == "function")
        return k;
    }
    var f = "<<anonymous>>", m = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: E,
      element: S(),
      elementType: C(),
      instanceOf: D,
      node: Z(),
      objectOf: N,
      oneOf: R,
      oneOfType: M,
      shape: te,
      exact: z
    };
    function p(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function v(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, L = 0;
      function U(H, G, J, ee, ne, re, fe) {
        if (ee = ee || f, re = re || J, fe !== t) {
          if (l) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Me = ee + ":" + J;
            !k[Me] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Me] = !0, L++);
          }
        }
        return G[J] == null ? H ? G[J] === null ? new v("The " + ne + " `" + re + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new v("The " + ne + " `" + re + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : O(G, J, ee, ne, re);
      }
      var B = U.bind(null, !1);
      return B.isRequired = U.bind(null, !0), B;
    }
    function x(O) {
      function k(L, U, B, H, G, J) {
        var ee = L[U], ne = W(ee);
        if (ne !== O) {
          var re = K(ee);
          return new v(
            "Invalid " + H + " `" + G + "` of type " + ("`" + re + "` supplied to `" + B + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(k);
    }
    function w() {
      return g(s);
    }
    function E(O) {
      function k(L, U, B, H, G) {
        if (typeof O != "function")
          return new v("Property `" + G + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var J = L[U];
        if (!Array.isArray(J)) {
          var ee = W(J);
          return new v("Invalid " + H + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + B + "`, expected an array."));
        }
        for (var ne = 0; ne < J.length; ne++) {
          var re = O(J, ne, B, H, G + "[" + ne + "]", t);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return g(k);
    }
    function S() {
      function O(k, L, U, B, H) {
        var G = k[L];
        if (!o(G)) {
          var J = W(G);
          return new v("Invalid " + B + " `" + H + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function C() {
      function O(k, L, U, B, H) {
        var G = k[L];
        if (!e.isValidElementType(G)) {
          var J = W(G);
          return new v("Invalid " + B + " `" + H + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function D(O) {
      function k(L, U, B, H, G) {
        if (!(L[U] instanceof O)) {
          var J = O.name || f, ee = X(L[U]);
          return new v("Invalid " + H + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + B + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return g(k);
    }
    function R(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(L, U, B, H, G) {
        for (var J = L[U], ee = 0; ee < O.length; ee++)
          if (p(J, O[ee]))
            return null;
        var ne = JSON.stringify(O, function(fe, F) {
          var Me = K(F);
          return Me === "symbol" ? String(F) : F;
        });
        return new v("Invalid " + H + " `" + G + "` of value `" + String(J) + "` " + ("supplied to `" + B + "`, expected one of " + ne + "."));
      }
      return g(k);
    }
    function N(O) {
      function k(L, U, B, H, G) {
        if (typeof O != "function")
          return new v("Property `" + G + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var J = L[U], ee = W(J);
        if (ee !== "object")
          return new v("Invalid " + H + " `" + G + "` of type " + ("`" + ee + "` supplied to `" + B + "`, expected an object."));
        for (var ne in J)
          if (n(J, ne)) {
            var re = O(J, ne, B, H, G + "." + ne, t);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return g(k);
    }
    function M(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < O.length; k++) {
        var L = O[k];
        if (typeof L != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $(L) + " at index " + k + "."
          ), s;
      }
      function U(B, H, G, J, ee) {
        for (var ne = [], re = 0; re < O.length; re++) {
          var fe = O[re], F = fe(B, H, G, J, ee, t);
          if (F == null)
            return null;
          F.data && n(F.data, "expectedType") && ne.push(F.data.expectedType);
        }
        var Me = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + ee + "` supplied to " + ("`" + G + "`" + Me + "."));
      }
      return g(U);
    }
    function Z() {
      function O(k, L, U, B, H) {
        return Y(k[L]) ? null : new v("Invalid " + B + " `" + H + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function Q(O, k, L, U, B) {
      return new v(
        (O || "React class") + ": " + k + " type `" + L + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function te(O) {
      function k(L, U, B, H, G) {
        var J = L[U], ee = W(J);
        if (ee !== "object")
          return new v("Invalid " + H + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var ne in O) {
          var re = O[ne];
          if (typeof re != "function")
            return Q(B, H, G, ne, K(re));
          var fe = re(J, ne, B, H, G + "." + ne, t);
          if (fe)
            return fe;
        }
        return null;
      }
      return g(k);
    }
    function z(O) {
      function k(L, U, B, H, G) {
        var J = L[U], ee = W(J);
        if (ee !== "object")
          return new v("Invalid " + H + " `" + G + "` of type `" + ee + "` " + ("supplied to `" + B + "`, expected `object`."));
        var ne = r({}, L[U], O);
        for (var re in ne) {
          var fe = O[re];
          if (n(O, re) && typeof fe != "function")
            return Q(B, H, G, re, K(fe));
          if (!fe)
            return new v(
              "Invalid " + H + " `" + G + "` key `" + re + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(L[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var F = fe(J, re, B, H, G + "." + re, t);
          if (F)
            return F;
        }
        return null;
      }
      return g(k);
    }
    function Y(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(Y);
          if (O === null || o(O))
            return !0;
          var k = h(O);
          if (k) {
            var L = k.call(O), U;
            if (k !== O.entries) {
              for (; !(U = L.next()).done; )
                if (!Y(U.value))
                  return !1;
            } else
              for (; !(U = L.next()).done; ) {
                var B = U.value;
                if (B && !Y(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(O, k) {
      return O === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function W(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : V(k, O) ? "symbol" : k;
    }
    function K(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var k = W(O);
      if (k === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function $(O) {
      var k = K(O);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function X(O) {
      return !O.constructor || !O.constructor.name ? f : O.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
  }, Ji;
}
var Zi, jo;
function wm() {
  if (jo) return Zi;
  jo = 1;
  var e = ws();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Zi = function() {
    function n(s, o, l, c, d, h) {
      if (h !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Zi;
}
if (process.env.NODE_ENV !== "production") {
  var Em = Mc(), Cm = !0;
  Da.exports = bm()(Em.isElement, Cm);
} else
  Da.exports = wm()();
var Sm = Da.exports;
const se = /* @__PURE__ */ An(Sm);
function Nm(e, r) {
  return e.classList ? !!r && e.classList.contains(r) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + r + " ") !== -1;
}
function Om(e, r) {
  e.classList ? e.classList.add(r) : Nm(e, r) || (typeof e.className == "string" ? e.className = e.className + " " + r : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + r));
}
function _o(e, r) {
  return e.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Tm(e, r) {
  e.classList ? e.classList.remove(r) : typeof e.className == "string" ? e.className = _o(e.className, r) : e.setAttribute("class", _o(e.className && e.className.baseVal || "", r));
}
const ko = {
  disabled: !1
};
var Am = process.env.NODE_ENV !== "production" ? se.oneOfType([se.number, se.shape({
  enter: se.number,
  exit: se.number,
  appear: se.number
}).isRequired]) : null, Rm = process.env.NODE_ENV !== "production" ? se.oneOfType([se.string, se.shape({
  enter: se.string,
  exit: se.string,
  active: se.string
}), se.shape({
  enter: se.string,
  enterDone: se.string,
  enterActive: se.string,
  exit: se.string,
  exitDone: se.string,
  exitActive: se.string
})]) : null;
const Dc = T.createContext(null);
var Ic = function(r) {
  return r.scrollTop;
}, nn = "unmounted", er = "exited", tr = "entering", Tr = "entered", Ia = "exiting", _t = /* @__PURE__ */ function(e) {
  kc(r, e);
  function r(n, i) {
    var a;
    a = e.call(this, n, i) || this;
    var s = i, o = s && !s.isMounting ? n.enter : n.appear, l;
    return a.appearStatus = null, n.in ? o ? (l = er, a.appearStatus = tr) : l = Tr : n.unmountOnExit || n.mountOnEnter ? l = nn : l = er, a.state = {
      status: l
    }, a.nextCallback = null, a;
  }
  r.getDerivedStateFromProps = function(i, a) {
    var s = i.in;
    return s && a.status === nn ? {
      status: er
    } : null;
  };
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, t.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== tr && s !== Tr && (a = tr) : (s === tr || s === Tr) && (a = Ia);
    }
    this.updateStatus(!1, a);
  }, t.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, t.getTimeouts = function() {
    var i = this.props.timeout, a, s, o;
    return a = s = o = i, i != null && typeof i != "number" && (a = i.exit, s = i.enter, o = i.appear !== void 0 ? i.appear : s), {
      exit: a,
      enter: s,
      appear: o
    };
  }, t.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === tr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Rr.findDOMNode(this);
          s && Ic(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === er && this.setState({
      status: nn
    });
  }, t.performEnter = function(i) {
    var a = this, s = this.props.enter, o = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [o] : [Rr.findDOMNode(this), o], c = l[0], d = l[1], h = this.getTimeouts(), f = o ? h.appear : h.enter;
    if (!i && !s || ko.disabled) {
      this.safeSetState({
        status: Tr
      }, function() {
        a.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, d), this.safeSetState({
      status: tr
    }, function() {
      a.props.onEntering(c, d), a.onTransitionEnd(f, function() {
        a.safeSetState({
          status: Tr
        }, function() {
          a.props.onEntered(c, d);
        });
      });
    });
  }, t.performExit = function() {
    var i = this, a = this.props.exit, s = this.getTimeouts(), o = this.props.nodeRef ? void 0 : Rr.findDOMNode(this);
    if (!a || ko.disabled) {
      this.safeSetState({
        status: er
      }, function() {
        i.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({
      status: Ia
    }, function() {
      i.props.onExiting(o), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: er
        }, function() {
          i.props.onExited(o);
        });
      });
    });
  }, t.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, t.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, t.setNextCallback = function(i) {
    var a = this, s = !0;
    return this.nextCallback = function(o) {
      s && (s = !1, a.nextCallback = null, i(o));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, t.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Rr.findDOMNode(this), o = i == null && !this.props.addEndListener;
    if (!s || o) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = l[0], d = l[1];
      this.props.addEndListener(c, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, t.render = function() {
    var i = this.state.status;
    if (i === nn)
      return null;
    var a = this.props, s = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var o = _c(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ T.createElement(Dc.Provider, {
        value: null
      }, typeof s == "function" ? s(i, o) : T.cloneElement(T.Children.only(s), o))
    );
  }, r;
}(T.Component);
_t.contextType = Dc;
_t.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: se.shape({
    current: typeof Element > "u" ? se.any : function(e, r, t, n, i, a) {
      var s = e[r];
      return se.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, r, t, n, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: se.oneOfType([se.func.isRequired, se.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: se.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: se.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: se.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: se.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: se.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: se.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(r) {
    var t = Am;
    r.addEndListener || (t = t.isRequired);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return t.apply(void 0, [r].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: se.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: se.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: se.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: se.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: se.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: se.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: se.func
} : {};
function Nr() {
}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nr,
  onEntering: Nr,
  onEntered: Nr,
  onExit: Nr,
  onExiting: Nr,
  onExited: Nr
};
_t.UNMOUNTED = nn;
_t.EXITED = er;
_t.ENTERING = tr;
_t.ENTERED = Tr;
_t.EXITING = Ia;
var jm = function(r, t) {
  return r && t && t.split(" ").forEach(function(n) {
    return Om(r, n);
  });
}, Qi = function(r, t) {
  return r && t && t.split(" ").forEach(function(n) {
    return Tm(r, n);
  });
}, Si = /* @__PURE__ */ function(e) {
  kc(r, e);
  function r() {
    for (var n, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return n = e.call.apply(e, [this].concat(a)) || this, n.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, n.onEnter = function(o, l) {
      var c = n.resolveArguments(o, l), d = c[0], h = c[1];
      n.removeClasses(d, "exit"), n.addClass(d, h ? "appear" : "enter", "base"), n.props.onEnter && n.props.onEnter(o, l);
    }, n.onEntering = function(o, l) {
      var c = n.resolveArguments(o, l), d = c[0], h = c[1], f = h ? "appear" : "enter";
      n.addClass(d, f, "active"), n.props.onEntering && n.props.onEntering(o, l);
    }, n.onEntered = function(o, l) {
      var c = n.resolveArguments(o, l), d = c[0], h = c[1], f = h ? "appear" : "enter";
      n.removeClasses(d, f), n.addClass(d, f, "done"), n.props.onEntered && n.props.onEntered(o, l);
    }, n.onExit = function(o) {
      var l = n.resolveArguments(o), c = l[0];
      n.removeClasses(c, "appear"), n.removeClasses(c, "enter"), n.addClass(c, "exit", "base"), n.props.onExit && n.props.onExit(o);
    }, n.onExiting = function(o) {
      var l = n.resolveArguments(o), c = l[0];
      n.addClass(c, "exit", "active"), n.props.onExiting && n.props.onExiting(o);
    }, n.onExited = function(o) {
      var l = n.resolveArguments(o), c = l[0];
      n.removeClasses(c, "exit"), n.addClass(c, "exit", "done"), n.props.onExited && n.props.onExited(o);
    }, n.resolveArguments = function(o, l) {
      return n.props.nodeRef ? [n.props.nodeRef.current, o] : [o, l];
    }, n.getClassNames = function(o) {
      var l = n.props.classNames, c = typeof l == "string", d = c && l ? l + "-" : "", h = c ? "" + d + o : l[o], f = c ? h + "-active" : l[o + "Active"], m = c ? h + "-done" : l[o + "Done"];
      return {
        baseClassName: h,
        activeClassName: f,
        doneClassName: m
      };
    }, n;
  }
  var t = r.prototype;
  return t.addClass = function(i, a, s) {
    var o = this.getClassNames(a)[s + "ClassName"], l = this.getClassNames("enter"), c = l.doneClassName;
    a === "appear" && s === "done" && c && (o += " " + c), s === "active" && i && Ic(i), o && (this.appliedClasses[a][s] = o, jm(i, o));
  }, t.removeClasses = function(i, a) {
    var s = this.appliedClasses[a], o = s.base, l = s.active, c = s.done;
    this.appliedClasses[a] = {}, o && Qi(i, o), l && Qi(i, l), c && Qi(i, c);
  }, t.render = function() {
    var i = this.props;
    i.classNames;
    var a = _c(i, ["classNames"]);
    return /* @__PURE__ */ T.createElement(_t, di({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, r;
}(T.Component);
Si.defaultProps = {
  classNames: ""
};
Si.propTypes = process.env.NODE_ENV !== "production" ? di({}, _t.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Rm,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: se.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: se.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: se.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: se.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: se.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: se.func
}) : {};
function Lc(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (t = Lc(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function zt() {
  for (var e, r, t = 0, n = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (r = Lc(e)) && (n && (n += " "), n += r);
  return n;
}
const mn = (e) => typeof e == "number" && !isNaN(e), cr = (e) => typeof e == "string", Je = (e) => typeof e == "function", ni = (e) => cr(e) || Je(e) ? e : null, La = (e) => jr(e) || cr(e) || Je(e) || mn(e);
function _m(e, r, t) {
  t === void 0 && (t = 300);
  const { scrollHeight: n, style: i } = e;
  requestAnimationFrame(() => {
    i.minHeight = "initial", i.height = n + "px", i.transition = `all ${t}ms`, requestAnimationFrame(() => {
      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(r, t);
    });
  });
}
function Ni(e) {
  let { enter: r, exit: t, appendPosition: n = !1, collapse: i = !0, collapseDuration: a = 300 } = e;
  return function(s) {
    let { children: o, position: l, preventExitTransition: c, done: d, nodeRef: h, isIn: f, playToast: m } = s;
    const p = n ? `${r}--${l}` : r, v = n ? `${t}--${l}` : t, g = ue(0);
    return Ur(() => {
      const x = h.current, w = p.split(" "), E = (S) => {
        S.target === h.current && (m(), x.removeEventListener("animationend", E), x.removeEventListener("animationcancel", E), g.current === 0 && S.type !== "animationcancel" && x.classList.remove(...w));
      };
      x.classList.add(...w), x.addEventListener("animationend", E), x.addEventListener("animationcancel", E);
    }, []), Ye(() => {
      const x = h.current, w = () => {
        x.removeEventListener("animationend", w), i ? _m(x, d, a) : d();
      };
      f || (c ? w() : (g.current = 1, x.className += ` ${v}`, x.addEventListener("animationend", w)));
    }, [f]), T.createElement(T.Fragment, null, o);
  };
}
function Mo(e, r) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: r } : {};
}
const Fe = /* @__PURE__ */ new Map();
let vn = [];
const Fa = /* @__PURE__ */ new Set(), km = (e) => Fa.forEach((r) => r(e)), Fc = () => Fe.size > 0;
function $c(e, r) {
  var t;
  if (r) return !((t = Fe.get(r)) == null || !t.isToastActive(e));
  let n = !1;
  return Fe.forEach((i) => {
    i.isToastActive(e) && (n = !0);
  }), n;
}
function Uc(e, r) {
  La(e) && (Fc() || vn.push({ content: e, options: r }), Fe.forEach((t) => {
    t.buildToast(e, r);
  }));
}
function Po(e, r) {
  Fe.forEach((t) => {
    r != null && r != null && r.containerId ? (r == null ? void 0 : r.containerId) === t.id && t.toggle(e, r == null ? void 0 : r.id) : t.toggle(e, r == null ? void 0 : r.id);
  });
}
function Mm(e) {
  const { subscribe: r, getSnapshot: t, setProps: n } = ue(function(a) {
    const s = a.containerId || 1;
    return { subscribe(o) {
      const l = /* @__PURE__ */ function(d, h, f) {
        let m = 1, p = 0, v = [], g = [], x = [], w = h;
        const E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set(), C = () => {
          x = Array.from(E.values()), S.forEach((N) => N());
        }, D = (N) => {
          g = N == null ? [] : g.filter((M) => M !== N), C();
        }, R = (N) => {
          const { toastId: M, onOpen: Z, updateId: Q, children: te } = N.props, z = Q == null;
          N.staleId && E.delete(N.staleId), E.set(M, N), g = [...g, N.props.toastId].filter((Y) => Y !== N.staleId), C(), f(Mo(N, z ? "added" : "updated")), z && Je(Z) && Z(jr(te) && te.props);
        };
        return { id: d, props: w, observe: (N) => (S.add(N), () => S.delete(N)), toggle: (N, M) => {
          E.forEach((Z) => {
            M != null && M !== Z.props.toastId || Je(Z.toggle) && Z.toggle(N);
          });
        }, removeToast: D, toasts: E, clearQueue: () => {
          p -= v.length, v = [];
        }, buildToast: (N, M) => {
          if (((L) => {
            let { containerId: U, toastId: B, updateId: H } = L;
            const G = U ? U !== d : d !== 1, J = E.has(B) && H == null;
            return G || J;
          })(M)) return;
          const { toastId: Z, updateId: Q, data: te, staleId: z, delay: Y } = M, V = () => {
            D(Z);
          }, W = Q == null;
          W && p++;
          const K = { ...w, style: w.toastStyle, key: m++, ...Object.fromEntries(Object.entries(M).filter((L) => {
            let [U, B] = L;
            return B != null;
          })), toastId: Z, updateId: Q, data: te, closeToast: V, isIn: !1, className: ni(M.className || w.toastClassName), bodyClassName: ni(M.bodyClassName || w.bodyClassName), progressClassName: ni(M.progressClassName || w.progressClassName), autoClose: !M.isLoading && ($ = M.autoClose, X = w.autoClose, $ === !1 || mn($) && $ > 0 ? $ : X), deleteToast() {
            const L = E.get(Z), { onClose: U, children: B } = L.props;
            Je(U) && U(jr(B) && B.props), f(Mo(L, "removed")), E.delete(Z), p--, p < 0 && (p = 0), v.length > 0 ? R(v.shift()) : C();
          } };
          var $, X;
          K.closeButton = w.closeButton, M.closeButton === !1 || La(M.closeButton) ? K.closeButton = M.closeButton : M.closeButton === !0 && (K.closeButton = !La(w.closeButton) || w.closeButton);
          let O = N;
          jr(N) && !cr(N.type) ? O = oi(N, { closeToast: V, toastProps: K, data: te }) : Je(N) && (O = N({ closeToast: V, toastProps: K, data: te }));
          const k = { content: O, props: K, staleId: z };
          w.limit && w.limit > 0 && p > w.limit && W ? v.push(k) : mn(Y) ? setTimeout(() => {
            R(k);
          }, Y) : R(k);
        }, setProps(N) {
          w = N;
        }, setToggle: (N, M) => {
          E.get(N).toggle = M;
        }, isToastActive: (N) => g.some((M) => M === N), getSnapshot: () => x };
      }(s, a, km);
      Fe.set(s, l);
      const c = l.observe(o);
      return vn.forEach((d) => Uc(d.content, d.options)), vn = [], () => {
        c(), Fe.delete(s);
      };
    }, setProps(o) {
      var l;
      (l = Fe.get(s)) == null || l.setProps(o);
    }, getSnapshot() {
      var o;
      return (o = Fe.get(s)) == null ? void 0 : o.getSnapshot();
    } };
  }(e)).current;
  n(e);
  const i = Od(r, t, t);
  return { getToastToRender: function(a) {
    if (!i) return [];
    const s = /* @__PURE__ */ new Map();
    return e.newestOnTop && i.reverse(), i.forEach((o) => {
      const { position: l } = o.props;
      s.has(l) || s.set(l, []), s.get(l).push(o);
    }), Array.from(s, (o) => a(o[0], o[1]));
  }, isToastActive: $c, count: i == null ? void 0 : i.length };
}
function Pm(e) {
  const [r, t] = ke(!1), [n, i] = ke(!1), a = ue(null), s = ue({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: o, pauseOnHover: l, closeToast: c, onClick: d, closeOnClick: h } = e;
  var f, m;
  function p() {
    t(!0);
  }
  function v() {
    t(!1);
  }
  function g(E) {
    const S = a.current;
    s.canDrag && S && (s.didMove = !0, r && v(), s.delta = e.draggableDirection === "x" ? E.clientX - s.start : E.clientY - s.start, s.start !== E.clientX && (s.canCloseOnClick = !1), S.style.transform = `translate3d(${e.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`},0)`, S.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)));
  }
  function x() {
    document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", x);
    const E = a.current;
    if (s.canDrag && s.didMove && E) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance) return i(!0), e.closeToast(), void e.collapseAll();
      E.style.transition = "transform 0.2s, opacity 0.2s", E.style.removeProperty("transform"), E.style.removeProperty("opacity");
    }
  }
  (m = Fe.get((f = { id: e.toastId, containerId: e.containerId, fn: t }).containerId || 1)) == null || m.setToggle(f.id, f.fn), Ye(() => {
    if (e.pauseOnFocusLoss) return document.hasFocus() || v(), window.addEventListener("focus", p), window.addEventListener("blur", v), () => {
      window.removeEventListener("focus", p), window.removeEventListener("blur", v);
    };
  }, [e.pauseOnFocusLoss]);
  const w = { onPointerDown: function(E) {
    if (e.draggable === !0 || e.draggable === E.pointerType) {
      s.didMove = !1, document.addEventListener("pointermove", g), document.addEventListener("pointerup", x);
      const S = a.current;
      s.canCloseOnClick = !0, s.canDrag = !0, S.style.transition = "none", e.draggableDirection === "x" ? (s.start = E.clientX, s.removalDistance = S.offsetWidth * (e.draggablePercent / 100)) : (s.start = E.clientY, s.removalDistance = S.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100);
    }
  }, onPointerUp: function(E) {
    const { top: S, bottom: C, left: D, right: R } = a.current.getBoundingClientRect();
    E.nativeEvent.type !== "touchend" && e.pauseOnHover && E.clientX >= D && E.clientX <= R && E.clientY >= S && E.clientY <= C ? v() : p();
  } };
  return o && l && (w.onMouseEnter = v, e.stacked || (w.onMouseLeave = p)), h && (w.onClick = (E) => {
    d && d(E), s.canCloseOnClick && c();
  }), { playToast: p, pauseToast: v, isRunning: r, preventExitTransition: n, toastRef: a, eventHandlers: w };
}
function Dm(e) {
  let { delay: r, isRunning: t, closeToast: n, type: i = "default", hide: a, className: s, style: o, controlledProgress: l, progress: c, rtl: d, isIn: h, theme: f } = e;
  const m = a || l && c === 0, p = { ...o, animationDuration: `${r}ms`, animationPlayState: t ? "running" : "paused" };
  l && (p.transform = `scaleX(${c})`);
  const v = zt("Toastify__progress-bar", l ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${i}`, { "Toastify__progress-bar--rtl": d }), g = Je(s) ? s({ rtl: d, type: i, defaultClassName: v }) : zt(v, s), x = { [l && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: l && c < 1 ? null : () => {
    h && n();
  } };
  return T.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": m }, T.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}` }), T.createElement("div", { role: "progressbar", "aria-hidden": m ? "true" : "false", "aria-label": "notification timer", className: g, style: p, ...x }));
}
let Im = 1;
const Bc = () => "" + Im++;
function Lm(e) {
  return e && (cr(e.toastId) || mn(e.toastId)) ? e.toastId : Bc();
}
function ln(e, r) {
  return Uc(e, r), r.toastId;
}
function hi(e, r) {
  return { ...r, type: r && r.type || e, toastId: Lm(r) };
}
function Hn(e) {
  return (r, t) => ln(r, hi(e, t));
}
function we(e, r) {
  return ln(e, hi("default", r));
}
we.loading = (e, r) => ln(e, hi("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...r })), we.promise = function(e, r, t) {
  let n, { pending: i, error: a, success: s } = r;
  i && (n = cr(i) ? we.loading(i, t) : we.loading(i.render, { ...t, ...i }));
  const o = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (d, h, f) => {
    if (h == null) return void we.dismiss(n);
    const m = { type: d, ...o, ...t, data: f }, p = cr(h) ? { render: h } : h;
    return n ? we.update(n, { ...m, ...p }) : we(p.render, { ...m, ...p }), f;
  }, c = Je(e) ? e() : e;
  return c.then((d) => l("success", s, d)).catch((d) => l("error", a, d)), c;
}, we.success = Hn("success"), we.info = Hn("info"), we.error = Hn("error"), we.warning = Hn("warning"), we.warn = we.warning, we.dark = (e, r) => ln(e, hi("default", { theme: "dark", ...r })), we.dismiss = function(e) {
  (function(r) {
    var t;
    if (Fc()) {
      if (r == null || cr(t = r) || mn(t)) Fe.forEach((n) => {
        n.removeToast(r);
      });
      else if (r && ("containerId" in r || "id" in r)) {
        const n = Fe.get(r.containerId);
        n ? n.removeToast(r.id) : Fe.forEach((i) => {
          i.removeToast(r.id);
        });
      }
    } else vn = vn.filter((n) => r != null && n.options.toastId !== r);
  })(e);
}, we.clearWaitingQueue = function(e) {
  e === void 0 && (e = {}), Fe.forEach((r) => {
    !r.props.limit || e.containerId && r.id !== e.containerId || r.clearQueue();
  });
}, we.isActive = $c, we.update = function(e, r) {
  r === void 0 && (r = {});
  const t = ((n, i) => {
    var a;
    let { containerId: s } = i;
    return (a = Fe.get(s || 1)) == null ? void 0 : a.toasts.get(n);
  })(e, r);
  if (t) {
    const { props: n, content: i } = t, a = { delay: 100, ...n, ...r, toastId: r.toastId || e, updateId: Bc() };
    a.toastId !== e && (a.staleId = e);
    const s = a.render || i;
    delete a.render, ln(s, a);
  }
}, we.done = (e) => {
  we.update(e, { progress: 1 });
}, we.onChange = function(e) {
  return Fa.add(e), () => {
    Fa.delete(e);
  };
}, we.play = (e) => Po(!0, e), we.pause = (e) => Po(!1, e);
const Fm = typeof window < "u" ? Ur : Ye, zn = (e) => {
  let { theme: r, type: t, isLoading: n, ...i } = e;
  return T.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: r === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`, ...i });
}, ea = { info: function(e) {
  return T.createElement(zn, { ...e }, T.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return T.createElement(zn, { ...e }, T.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return T.createElement(zn, { ...e }, T.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return T.createElement(zn, { ...e }, T.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return T.createElement("div", { className: "Toastify__spinner" });
} }, $m = (e) => {
  const { isRunning: r, preventExitTransition: t, toastRef: n, eventHandlers: i, playToast: a } = Pm(e), { closeButton: s, children: o, autoClose: l, onClick: c, type: d, hideProgressBar: h, closeToast: f, transition: m, position: p, className: v, style: g, bodyClassName: x, bodyStyle: w, progressClassName: E, progressStyle: S, updateId: C, role: D, progress: R, rtl: N, toastId: M, deleteToast: Z, isIn: Q, isLoading: te, closeOnClick: z, theme: Y } = e, V = zt("Toastify__toast", `Toastify__toast-theme--${Y}`, `Toastify__toast--${d}`, { "Toastify__toast--rtl": N }, { "Toastify__toast--close-on-click": z }), W = Je(v) ? v({ rtl: N, position: p, type: d, defaultClassName: V }) : zt(V, v), K = function(k) {
    let { theme: L, type: U, isLoading: B, icon: H } = k, G = null;
    const J = { theme: L, type: U };
    return H === !1 || (Je(H) ? G = H({ ...J, isLoading: B }) : jr(H) ? G = oi(H, J) : B ? G = ea.spinner() : ((ee) => ee in ea)(U) && (G = ea[U](J))), G;
  }(e), $ = !!R || !l, X = { closeToast: f, type: d, theme: Y };
  let O = null;
  return s === !1 || (O = Je(s) ? s(X) : jr(s) ? oi(s, X) : function(k) {
    let { closeToast: L, theme: U, ariaLabel: B = "close" } = k;
    return T.createElement("button", { className: `Toastify__close-button Toastify__close-button--${U}`, type: "button", onClick: (H) => {
      H.stopPropagation(), L(H);
    }, "aria-label": B }, T.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, T.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(X)), T.createElement(m, { isIn: Q, done: Z, position: p, preventExitTransition: t, nodeRef: n, playToast: a }, T.createElement("div", { id: M, onClick: c, "data-in": Q, className: W, ...i, style: g, ref: n }, T.createElement("div", { ...Q && { role: D }, className: Je(x) ? x({ type: d }) : zt("Toastify__toast-body", x), style: w }, K != null && T.createElement("div", { className: zt("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !te }) }, K), T.createElement("div", null, o)), O, T.createElement(Dm, { ...C && !$ ? { key: `pb-${C}` } : {}, rtl: N, theme: Y, delay: l, isRunning: r, isIn: Q, closeToast: f, hide: h, type: d, style: S, className: E, controlledProgress: $, progress: R || 0 })));
}, Oi = function(e, r) {
  return r === void 0 && (r = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: r };
}, Um = Ni(Oi("bounce", !0));
Ni(Oi("slide", !0));
Ni(Oi("zoom"));
Ni(Oi("flip"));
const Bm = { position: "top-right", transition: Um, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function Wm(e) {
  let r = { ...Bm, ...e };
  const t = e.stacked, [n, i] = ke(!0), a = ue(null), { getToastToRender: s, isToastActive: o, count: l } = Mm(r), { className: c, style: d, rtl: h, containerId: f } = r;
  function m(v) {
    const g = zt("Toastify__toast-container", `Toastify__toast-container--${v}`, { "Toastify__toast-container--rtl": h });
    return Je(c) ? c({ position: v, rtl: h, defaultClassName: g }) : zt(g, ni(c));
  }
  function p() {
    t && (i(!0), we.play());
  }
  return Fm(() => {
    if (t) {
      var v;
      const g = a.current.querySelectorAll('[data-in="true"]'), x = 12, w = (v = r.position) == null ? void 0 : v.includes("top");
      let E = 0, S = 0;
      Array.from(g).reverse().forEach((C, D) => {
        const R = C;
        R.classList.add("Toastify__toast--stacked"), D > 0 && (R.dataset.collapsed = `${n}`), R.dataset.pos || (R.dataset.pos = w ? "top" : "bot");
        const N = E * (n ? 0.2 : 1) + (n ? 0 : x * D);
        R.style.setProperty("--y", `${w ? N : -1 * N}px`), R.style.setProperty("--g", `${x}`), R.style.setProperty("--s", "" + (1 - (n ? S : 0))), E += R.offsetHeight, S += 0.025;
      });
    }
  }, [n, l, t]), T.createElement("div", { ref: a, className: "Toastify", id: f, onMouseEnter: () => {
    t && (i(!1), we.pause());
  }, onMouseLeave: p }, s((v, g) => {
    const x = g.length ? { ...d } : { ...d, pointerEvents: "none" };
    return T.createElement("div", { className: m(v), style: x, key: `container-${v}` }, g.map((w) => {
      let { content: E, props: S } = w;
      return T.createElement($m, { ...S, stacked: t, collapseAll: p, isIn: o(S.toastId, S.containerId), style: S.style, key: `toast-${S.key}` }, E);
    }));
  }));
}
class bb extends me {
  // AbortController for axios requests
  constructor(t) {
    super(t);
    y(this, "isMounted");
    // Added mounted flag
    y(this, "abortController");
    y(this, "handleClose", () => {
      this.isMounted && this.setState({ isOpen: !1 }), setTimeout(() => {
        this.isMounted && this.props.onClose();
      }, 300);
    });
    y(this, "handleDelete", () => {
      var a;
      const t = {
        title: "Confirmation!",
        btnPosition: "delete",
        btnNegative: "cancel",
        type: I.NOTICE
      }, n = (s) => {
        this.state.hasRequest || (s.status && this.handleDeleteRequest(), this.setState({ modal: null }));
      }, i = /* @__PURE__ */ u.jsx(pc, { settings: t, onClose: n, children: /* @__PURE__ */ u.jsxs("div", { className: "w-full py-2 text-sm", children: [
        "Are you sure you want to delete",
        /* @__PURE__ */ u.jsxs("span", { className: "text-red-500 ml-1 font-poppinsBold", children: [
          (a = this.props.delete) == null ? void 0 : a.name,
          "?"
        ] })
      ] }) });
      this.setState({ modal: i });
    });
    y(this, "handleDeleteRequest", () => {
      if (!this.props.delete)
        return;
      this.abortController = new AbortController();
      const t = this.abortController.signal;
      this.setState({ hasRequest: !0 });
      try {
        he.delete(this.props.delete.url, {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`,
            Accept: "application/json"
          },
          signal: t
          // Attach the signal to axios
        }).then((n) => {
          this.isMounted && this.handleAlert(n.data.message, n.data.success);
        }).catch((n) => {
          he.isCancel(n) ? console.log("Request canceled:", n.message) : this.isMounted && this.handleAlert();
        });
      } catch {
        this.isMounted && this.handleAlert();
      }
    });
    y(this, "handleAlert", (t = "", n = !1) => {
      const i = j.isEmptyOrNull(t) ? I.ERROR_MESSAGE : t;
      this.isMounted && this.setState({ hasRequest: !1 }, () => {
        n ? (we.success(i), this.props.onSuccess(t)) : this.props.onError(t);
      });
    });
    this.isMounted = !1, this.state = {
      isOpen: !1,
      hasRequest: !1
    }, setTimeout(() => {
      this.isMounted && this.setState({ isOpen: !0 });
    }, 300);
  }
  componentDidMount() {
    this.isMounted = !0;
  }
  componentWillUnmount() {
    var t;
    this.isMounted = !1, (t = this.abortController) == null || t.abort();
  }
  render() {
    var t;
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      this.state.modal,
      /* @__PURE__ */ u.jsx(
        mm,
        {
          isOpen: this.state.isOpen,
          onClose: this.handleClose,
          backdropClass: this.props.backdropClass,
          className: this.props.className,
          children: /* @__PURE__ */ u.jsx(Si, { unmountOnExit: !0, in: !0, timeout: 400, classNames: "modal-content", children: /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("div", { className: "flex justify-center dark:text-white items-center h-screen mx-4", children: /* @__PURE__ */ u.jsx("div", { className: `bg-gray-200 p-4 rounded-lg shadow-md w-full ${this.props.containerClassName}`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col max-h-[83vh]", children: [
            /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsxs("div", { className: "flex bg-transparent text-start uppercase justify-between mb-4 font-poppinsBlack text-lg", children: [
              /* @__PURE__ */ u.jsx("div", { className: "w-full line-clamp-2", children: this.props.data.title }),
              /* @__PURE__ */ u.jsxs("div", { className: "flex justify-end space-x-3", children: [
                (t = this.props.delete) != null && t.show ? this.state.hasRequest ? /* @__PURE__ */ u.jsxs(
                  "svg",
                  {
                    role: "status",
                    className: "flex w-4 h-4 text-black dark:text-white animate-spin",
                    viewBox: "0 0 100 101",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ u.jsx(
                        "path",
                        {
                          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                          fill: "#E5E7EB"
                        }
                      ),
                      /* @__PURE__ */ u.jsx(
                        "path",
                        {
                          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                          fill: "currentColor"
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    onClick: () => this.handleDelete(),
                    title: "Delete",
                    className: "text-red-800 dark:text-red-300 cursor-pointer",
                    children: /* @__PURE__ */ u.jsx(
                      "svg",
                      {
                        className: "w-4 h-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ u.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          }
                        )
                      }
                    )
                  }
                ) : null,
                /* @__PURE__ */ u.jsx(
                  "svg",
                  {
                    viewBox: "0 0 1024 1024",
                    fill: "currentColor",
                    className: "w-5 h-5 mr-2 cursor-pointer",
                    onClick: this.handleClose,
                    children: /* @__PURE__ */ u.jsx("path", { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" })
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex-1 max-h-[calc(100%-2rem)] overflow-auto  p-2 rounded-md", children: /* @__PURE__ */ u.jsx("div", { className: "z-10", children: this.props.children }) })
          ] }) }) }) }) })
        }
      )
    ] });
  }
}
function Ti() {
  return (Ti = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Wc(e, r) {
  if (e == null) return {};
  var t, n, i = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++) r.indexOf(t = a[n]) >= 0 || (i[t] = e[t]);
  return i;
}
function $a(e) {
  var r = ue(e), t = ue(function(n) {
    r.current && r.current(n);
  });
  return r.current = e, t.current;
}
var gn = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = 1), e > t ? t : e < r ? r : e;
}, cn = function(e) {
  return "touches" in e;
}, Ua = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Do = function(e, r, t) {
  var n = e.getBoundingClientRect(), i = cn(r) ? function(a, s) {
    for (var o = 0; o < a.length; o++) if (a[o].identifier === s) return a[o];
    return a[0];
  }(r.touches, t) : r;
  return { left: gn((i.pageX - (n.left + Ua(e).pageXOffset)) / n.width), top: gn((i.pageY - (n.top + Ua(e).pageYOffset)) / n.height) };
}, Io = function(e) {
  !cn(e) && e.preventDefault();
}, Hc = T.memo(function(e) {
  var r = e.onMove, t = e.onKey, n = Wc(e, ["onMove", "onKey"]), i = ue(null), a = $a(r), s = $a(t), o = ue(null), l = ue(!1), c = sr(function() {
    var m = function(g) {
      Io(g), (cn(g) ? g.touches.length > 0 : g.buttons > 0) && i.current ? a(Do(i.current, g, o.current)) : v(!1);
    }, p = function() {
      return v(!1);
    };
    function v(g) {
      var x = l.current, w = Ua(i.current), E = g ? w.addEventListener : w.removeEventListener;
      E(x ? "touchmove" : "mousemove", m), E(x ? "touchend" : "mouseup", p);
    }
    return [function(g) {
      var x = g.nativeEvent, w = i.current;
      if (w && (Io(x), !function(S, C) {
        return C && !cn(S);
      }(x, l.current) && w)) {
        if (cn(x)) {
          l.current = !0;
          var E = x.changedTouches || [];
          E.length && (o.current = E[0].identifier);
        }
        w.focus(), a(Do(w, x, o.current)), v(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), d = c[0], h = c[1], f = c[2];
  return Ye(function() {
    return f;
  }, [f]), T.createElement("div", Ti({}, n, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: i, onKeyDown: h, tabIndex: 0, role: "slider" }));
}), Es = function(e) {
  return e.filter(Boolean).join(" ");
}, zc = function(e) {
  var r = e.color, t = e.left, n = e.top, i = n === void 0 ? 0.5 : n, a = Es(["react-colorful__pointer", e.className]);
  return T.createElement("div", { className: a, style: { top: 100 * i + "%", left: 100 * t + "%" } }, T.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: r } }));
}, De = function(e, r, t) {
  return r === void 0 && (r = 0), t === void 0 && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, Hm = function(e) {
  return Gm(Ba(e));
}, Ba = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? De(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? De(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, zm = function(e) {
  return qm(Ym(e));
}, Vm = function(e) {
  var r = e.s, t = e.v, n = e.a, i = (200 - r) * t / 100;
  return { h: De(e.h), s: De(i > 0 && i < 200 ? r * t / 100 / (i <= 100 ? i : 200 - i) * 100 : 0), l: De(i / 2), a: De(n, 2) };
}, Wa = function(e) {
  var r = Vm(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, Ym = function(e) {
  var r = e.h, t = e.s, n = e.v, i = e.a;
  r = r / 360 * 6, t /= 100, n /= 100;
  var a = Math.floor(r), s = n * (1 - t), o = n * (1 - (r - a) * t), l = n * (1 - (1 - r + a) * t), c = a % 6;
  return { r: De(255 * [n, o, s, s, l, n][c]), g: De(255 * [l, n, n, o, s, s][c]), b: De(255 * [s, s, l, n, n, o][c]), a: De(i, 2) };
}, Vn = function(e) {
  var r = e.toString(16);
  return r.length < 2 ? "0" + r : r;
}, qm = function(e) {
  var r = e.r, t = e.g, n = e.b, i = e.a, a = i < 1 ? Vn(De(255 * i)) : "";
  return "#" + Vn(r) + Vn(t) + Vn(n) + a;
}, Gm = function(e) {
  var r = e.r, t = e.g, n = e.b, i = e.a, a = Math.max(r, t, n), s = a - Math.min(r, t, n), o = s ? a === r ? (t - n) / s : a === t ? 2 + (n - r) / s : 4 + (r - t) / s : 0;
  return { h: De(60 * (o < 0 ? o + 6 : o)), s: De(a ? s / a * 100 : 0), v: De(a / 255 * 100), a: i };
}, Xm = T.memo(function(e) {
  var r = e.hue, t = e.onChange, n = Es(["react-colorful__hue", e.className]);
  return T.createElement("div", { className: n }, T.createElement(Hc, { onMove: function(i) {
    t({ h: 360 * i.left });
  }, onKey: function(i) {
    t({ h: gn(r + 360 * i.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": De(r), "aria-valuemax": "360", "aria-valuemin": "0" }, T.createElement(zc, { className: "react-colorful__hue-pointer", left: r / 360, color: Wa({ h: r, s: 100, v: 100, a: 1 }) })));
}), Km = T.memo(function(e) {
  var r = e.hsva, t = e.onChange, n = { backgroundColor: Wa({ h: r.h, s: 100, v: 100, a: 1 }) };
  return T.createElement("div", { className: "react-colorful__saturation", style: n }, T.createElement(Hc, { onMove: function(i) {
    t({ s: 100 * i.left, v: 100 - 100 * i.top });
  }, onKey: function(i) {
    t({ s: gn(r.s + 100 * i.left, 0, 100), v: gn(r.v - 100 * i.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + De(r.s) + "%, Brightness " + De(r.v) + "%" }, T.createElement(zc, { className: "react-colorful__saturation-pointer", top: 1 - r.v / 100, left: r.s / 100, color: Wa(r) })));
}), Vc = function(e, r) {
  if (e === r) return !0;
  for (var t in e) if (e[t] !== r[t]) return !1;
  return !0;
}, Jm = function(e, r) {
  return e.toLowerCase() === r.toLowerCase() || Vc(Ba(e), Ba(r));
};
function Zm(e, r, t) {
  var n = $a(t), i = ke(function() {
    return e.toHsva(r);
  }), a = i[0], s = i[1], o = ue({ color: r, hsva: a });
  Ye(function() {
    if (!e.equal(r, o.current.color)) {
      var c = e.toHsva(r);
      o.current = { hsva: c, color: r }, s(c);
    }
  }, [r, e]), Ye(function() {
    var c;
    Vc(a, o.current.hsva) || e.equal(c = e.fromHsva(a), o.current.color) || (o.current = { hsva: a, color: c }, n(c));
  }, [a, e, n]);
  var l = Td(function(c) {
    s(function(d) {
      return Object.assign({}, d, c);
    });
  }, []);
  return [a, l];
}
var Qm = typeof window < "u" ? Ur : Ye, ev = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Lo = /* @__PURE__ */ new Map(), tv = function(e) {
  Qm(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (r !== void 0 && !Lo.has(r)) {
      var t = r.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Lo.set(r, t);
      var n = ev();
      n && t.setAttribute("nonce", n), r.head.appendChild(t);
    }
  }, []);
}, rv = function(e) {
  var r = e.className, t = e.colorModel, n = e.color, i = n === void 0 ? t.defaultColor : n, a = e.onChange, s = Wc(e, ["className", "colorModel", "color", "onChange"]), o = ue(null);
  tv(o);
  var l = Zm(t, i, a), c = l[0], d = l[1], h = Es(["react-colorful", r]);
  return T.createElement("div", Ti({}, s, { ref: o, className: h }), T.createElement(Km, { hsva: c, onChange: d }), T.createElement(Xm, { hue: c.h, onChange: d, className: "react-colorful__last-control" }));
}, nv = { defaultColor: "000", toHsva: Hm, fromHsva: function(e) {
  return zm({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Jm }, iv = function(e) {
  return T.createElement(rv, Ti({}, e, { colorModel: nv }));
};
class av extends me {
  constructor(t) {
    super(t);
    y(this, "enteredInput", "");
    y(this, "popoverDropdownRef");
    y(this, "handleDefaultRequest", () => {
      const t = j.toStringDefault(this.props.defaultValue, "");
      !j.isEmptyOrNull(t) && j.isEmptyOrNull(this.state.input.data) && this.setState((n) => ({
        input: {
          ...n.input,
          data: t
        }
      }));
    });
    y(this, "handleTextAreaChange", (t) => {
      const n = t.target.value;
      this.setState((i) => ({
        input: {
          ...i.input,
          [t.target.name]: n
        }
      }), () => this.props.onChange(n));
    });
    y(this, "handleChange", (t) => {
      const n = t.target.value, i = j.toStringDefault(this.props.type, I.TEXT);
      if (this.validateInput(n, i) || n === "") {
        const s = t.target.selectionStart;
        this.setState((o) => ({
          input: {
            ...o.input,
            [t.target.name]: n
          },
          hasPressed: !0
        }), () => {
          this.props.onChange(n), setTimeout(() => t.target.setSelectionRange(s, s), 0);
        });
      }
    });
    y(this, "validateInput", (t, n) => {
      switch (n) {
        case I.PHONE:
          return /^[0-9+]*$/.test(t);
        case I.NUMBER:
          return /^[0-9]*$/.test(t);
        case I.AMOUNT:
          return /^\d*(\.\d{0,2})?$/.test(t);
        case I.EMAIL:
          return j.validateEmail(t) && (!this.props.emailExtension || t.endsWith(this.props.emailExtension));
        default:
          return !0;
      }
    });
    y(this, "handleClick", (t) => {
      if (this.props.readOnly && this.props.onFocus) {
        const n = {
          ...t,
          type: "focus",
          target: t.target
        };
        this.props.onFocus(n);
      }
    });
    y(this, "handleFocus", (t) => {
      this.props.type === I.COLOR ? this.setState({ dropdownPopoverShow: !0 }) : this.props.onFocus && this.props.onFocus(t);
    });
    y(this, "handleColorPicker", () => {
      this.setState({ dropdownPopoverShow: !0 });
    });
    y(this, "closeDropdownPopover", () => {
      this.setState({ dropdownPopoverShow: !1 });
    });
    this.popoverDropdownRef = T.createRef(), this.state = {
      dropdownPopoverShow: !1,
      hasPressed: !1,
      input: {
        data: j.toStringDefault(this.props.defaultValue, "")
      }
    };
  }
  componentDidMount() {
    this.props.onRef && this.props.onRef(this), this.handleDefaultRequest();
  }
  render() {
    return /* @__PURE__ */ u.jsx(Ci, { onClickOutside: this.closeDropdownPopover, children: /* @__PURE__ */ u.jsxs("div", { className: `${this.props.className || "bg-white dark:bg-darkBackground"}`, children: [
      /* @__PURE__ */ u.jsxs("div", { className: `relative bg-inherit ${this.props.type === I.SEARCH ? "flex w-full space-x-3" : ""}`, children: [
        this.props.type === I.TEXTAREA ? /* @__PURE__ */ u.jsx(
          "textarea",
          {
            rows: this.props.rows,
            disabled: !!this.props.disabled,
            autoFocus: !!this.props.autoFocus,
            onFocus: this.handleFocus,
            onClick: this.props.readOnly ? this.handleClick : void 0,
            placeholder: this.props.label,
            readOnly: this.props.readOnly,
            maxLength: this.props.maxLength,
            defaultValue: this.props.defaultValue !== this.state.input.data ? this.props.defaultValue : this.state.input.data,
            onChange: this.handleTextAreaChange,
            className: `peer bg-transparent border border-black text-xs/7 dark:border-white dark:text-white placeholder-transparent 2xl:text-sm/7 ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`
          }
        ) : /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "text",
            id: "data",
            name: "data",
            readOnly: this.props.readOnly,
            maxLength: this.props.maxLength,
            onFocus: this.handleFocus,
            onClick: this.props.readOnly ? this.handleClick : void 0,
            disabled: !!this.props.disabled,
            autoFocus: !!this.props.autoFocus,
            value: this.props.defaultValue !== this.state.input.data && this.props.type !== I.EMAIL ? this.props.defaultValue : j.isEmptyOrNull(this.state.input.data) ? this.props.defaultValue : this.state.input.data,
            onChange: this.handleChange,
            className: `peer bg-transparent h-12 border border-black ${this.props.disabled ? "cursor-not-allowed" : ""} dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`,
            placeholder: this.props.label
          }
        ),
        /* @__PURE__ */ u.jsx(
          "label",
          {
            htmlFor: "data",
            className: " before:content[' '] after:content[' '] pointer-events-none absolute cursor-text left-0 -top-3.5 text-[11px] dark:text-white bg-inherit backdrop-blur-xl mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all",
            children: /* @__PURE__ */ u.jsx("div", { className: "w-full line-clamp-1 ", children: this.props.label })
          }
        ),
        this.props.type === I.COLOR && /* @__PURE__ */ u.jsx(
          "div",
          {
            onClick: this.handleColorPicker,
            className: "absolute top-0 bottom-0 right-2 rounded-2xl cursor-pointer w-12 my-auto h-8",
            style: { background: `${this.state.input.data}` }
          }
        ),
        this.props.type === I.SEARCH && /* @__PURE__ */ u.jsx("div", { className: "bg-primary text-white p-3 rounded-xl cursor-pointer", children: this.props.hasRequest ? /* @__PURE__ */ u.jsxs(
          "svg",
          {
            role: "status",
            className: "inline w-5 h-5 text-white animate-spin",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "#E5E7EB"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentColor"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ u.jsxs(
          "svg",
          {
            fill: "none",
            stroke: "currentColor",
            onClick: () => this.props.onSearch(this.state.input.data),
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            viewBox: "0 0 24 24",
            className: "w-5",
            children: [
              /* @__PURE__ */ u.jsx("path", { d: "M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" }),
              /* @__PURE__ */ u.jsx("path", { d: "M21 21l-4.35-4.35" })
            ]
          }
        ) })
      ] }),
      this.props.type === I.COLOR && this.state.dropdownPopoverShow && /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: this.popoverDropdownRef,
          className: "absolute border-none z-[800] w-auto float-left py-2 bg-inherit list-none text-left rounded shadow-lg mt-1",
          children: /* @__PURE__ */ u.jsx(
            iv,
            {
              color: this.state.input.data,
              onChange: (t) => {
                this.setState((n) => ({
                  input: {
                    ...n.input,
                    data: t
                  }
                }), () => this.props.onChange(t));
              }
            }
          )
        }
      )
    ] }) });
  }
}
class wb extends me {
  constructor(t) {
    super(t);
    y(this, "handleDefault", () => {
      const { defaultValue: t } = this.props, { filteredOptions: n } = this.state;
      let i = [], a = "";
      !j.isEmptyOrNull(t) && !j.isEmptyOrNull(n) && (Array.isArray(t) ? i = t.map((s) => typeof s == "string" ? n.find((l) => l.name === s) || {
        id: null,
        name: s,
        icon: null,
        hint: null,
        data: s
      } : s).filter((s) => !!s) : typeof t == "string" ? (i = [n.find((o) => o.name === t) || { id: null, name: t, icon: null, hint: null, data: t }], a = t) : t && (i = [t], a = t.name || ""), j.isEmptyOrNull(a) || this.setState(
        {
          selectedOptions: i,
          searchText: a
        },
        () => {
          this.props.onSelect && this.props.onSelect(i);
        }
      ));
    });
    y(this, "fetchData", async (t, n) => {
      const { request: i } = this.props, a = i == null ? void 0 : i.url, s = i == null ? void 0 : i.token;
      try {
        const o = s ? { Authorization: `${s}` } : {}, c = await (await fetch(`${a}?query=${t}&page=${n}`, { headers: o })).json();
        if (c.success) {
          const d = c.data.map((h) => ({
            id: h.id,
            name: h.name,
            icon: h.icon || null,
            hint: h.hint || null,
            data: h
          }));
          this.setState(
            (h) => ({
              filteredOptions: n === 1 ? d : [...h.filteredOptions, ...d],
              hasMore: d.length > 0,
              error: { state: !1, message: "" }
            }),
            this.handleDefault
          );
        } else
          this.handleError(c.message || "Failed to fetch data.");
      } catch {
        this.handleError("An error occurred while fetching data. Please check your connection.");
      }
    });
    y(this, "handleError", (t) => {
      this.setState({ error: { state: !0, message: t }, filteredOptions: [] });
    });
    y(this, "handleInputChange", (t) => {
      const n = t.target.value;
      this.setState({ searchText: n, showDropdown: !!n, page: 1, hasMore: !0 }, () => {
        j.isEmptyOrNull(n) ? this.setState({ filteredOptions: [] }) : this.fetchData(n, 1);
      });
    });
    y(this, "handleOptionClick", (t) => {
      const { is_multiple: n, onSelect: i } = this.props;
      n ? this.setState((a) => {
        const s = [...a.selectedOptions, t], o = a.filteredOptions.filter((l) => l.id !== t.id);
        return i(s), { selectedOptions: s, filteredOptions: o };
      }) : (this.setState({
        searchText: t.name || "",
        showDropdown: !1,
        selectedOptions: [t]
      }), i(t));
    });
    y(this, "handleChipRemove", (t) => {
      this.setState((n) => {
        const i = n.selectedOptions.filter((s) => s.id !== t.id), a = [...n.filteredOptions, t];
        return this.props.onSelect(i), { selectedOptions: i, filteredOptions: a };
      });
    });
    y(this, "handleBlur", () => {
      setTimeout(() => {
        this.setState({ showDropdown: !1 });
      }, 200);
    });
    y(this, "handleScroll", (t) => {
      const { target: n } = t, { searchText: i, page: a, hasMore: s } = this.state;
      n.scrollHeight - n.scrollTop === n.clientHeight && s && this.setState({ page: a + 1 }, () => {
        this.fetchData(i, this.state.page);
      });
    });
    this.state = {
      searchText: "",
      filteredOptions: [],
      selectedOptions: [],
      showDropdown: !1,
      page: 1,
      hasMore: !0,
      error: { state: !1, message: "" }
    };
  }
  componentDidMount() {
    this.props.onRef && this.props.onRef(this), this.fetchData("", 1);
  }
  componentDidUpdate(t) {
    t.defaultValue !== this.props.defaultValue && this.handleDefault();
  }
  render() {
    const { placeholder: t, is_multiple: n, label: i, disabled: a, autoFocus: s, maxLength: o, inputClassName: l, className: c } = this.props, { searchText: d, filteredOptions: h, selectedOptions: f, showDropdown: m, error: p } = this.state;
    return /* @__PURE__ */ u.jsx("div", { className: `${c || "bg-white dark:bg-darkBackground"}`, children: /* @__PURE__ */ u.jsxs("div", { className: "relative w-full bg-inherit", children: [
      /* @__PURE__ */ u.jsx(
        "input",
        {
          type: "text",
          maxLength: o,
          disabled: a,
          autoFocus: s,
          placeholder: t || "Search...",
          value: d,
          onChange: this.handleInputChange,
          onBlur: this.handleBlur,
          onFocus: () => this.setState({ showDropdown: !0 }),
          className: `peer bg-transparent h-12 border border-black ${a ? "cursor-not-allowed" : ""} dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${l}`
        }
      ),
      /* @__PURE__ */ u.jsx(
        "label",
        {
          htmlFor: "data",
          className: "pointer-events-none absolute cursor-text left-0 -top-3.5 text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all",
          children: i
        }
      ),
      m && /* @__PURE__ */ u.jsx(
        "ul",
        {
          onScroll: this.handleScroll,
          className: "absolute top-full text-sm mt-2 left-0 right-0 bg-white dark:bg-darkDialogBackground border border-gray-300 dark:border-darkPrimaryBorder rounded shadow-md max-h-96 overflow-y-auto z-10",
          children: p.state ? /* @__PURE__ */ u.jsx("li", { className: "p-2 text-red-500", children: p.message }) : h.length > 0 ? h.map((v) => /* @__PURE__ */ u.jsxs(
            "li",
            {
              onClick: () => this.handleOptionClick(v),
              className: "flex items-center text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap hover:bg-gray-200 dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white group",
              children: [
                v.icon && /* @__PURE__ */ u.jsx("img", { src: v.icon, alt: "icon", className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("div", { children: v.name }),
                  /* @__PURE__ */ u.jsx("div", { className: "text-xs text-gray-600 dark:text-white dark:group-hover:text-black", children: v == null ? void 0 : v.hint })
                ] })
              ]
            },
            v.id || Math.random()
          )) : /* @__PURE__ */ u.jsx("li", { className: "p-2 text-gray-500", children: "No results found" })
        }
      ),
      n && !j.isEmptyOrNull(f) && /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap mt-4 items-center gap-2", children: f.map((v) => /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "flex items-center bg-gray-200 dark:bg-darkPrimaryBorder dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full px-3 py-2 text-xs transition duration-500 ease-in-out",
          children: [
            v.icon && /* @__PURE__ */ u.jsx("img", { src: v.icon, alt: "icon", className: "w-4 h-4 mr-2" }),
            v.name,
            /* @__PURE__ */ u.jsx("button", { onClick: () => this.handleChipRemove(v), className: "ml-2", children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 text-red-500", children: /* @__PURE__ */ u.jsx("path", { d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" }) }) })
          ]
        },
        v.id || Math.random()
      )) })
    ] }) });
  }
}
class Eb extends me {
  constructor(t) {
    super(t);
    y(this, "toggleMenuRequest", () => {
      const { location: t, exact: n, pattern: i } = this.props, a = (t == null ? void 0 : t.pathname) || "", s = Array.isArray(i) ? i : i ? [i] : [], o = n ? s.some((d) => d && (a === d || d.endsWith("/") && a === d.slice(0, -1))) : !1, l = s.map((d) => d ? a.match(d) : null).filter(Boolean), c = n ? o : l.length > 0;
      this.setState({ is_active: c });
    });
    y(this, "handleOnClick", (t) => {
      t.preventDefault(), j.isEmptyOrNull(this.props.items) ? this.props.onClick(t) : this.toggleMenu(this.props.name);
    });
    y(this, "handleOnChildClick", (t, n) => {
      t.preventDefault(), this.props.navigate(n.url);
    });
    y(this, "toggleMenu", (t) => {
      this.setState((n) => ({
        openMenu: n.openMenu === t ? null : t
      }));
    });
    y(this, "toggleChildMenu", (t) => {
      this.setState((n) => ({
        openChildMenu: n.openChildMenu === t ? null : t
      }));
    });
    y(this, "renderChildItems", (t, n) => {
      const { openChildMenu: i } = this.state;
      return t.map((a, s) => {
        const o = i === `${a.label}`;
        return a.has_permission && /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
          /* @__PURE__ */ u.jsx(
            "a",
            {
              onClick: (l) => {
                a.items ? (l.preventDefault(), this.toggleChildMenu(`${a.label}`)) : this.handleOnChildClick(l, a);
              },
              href: a.url,
              className: "flex w-full py-2 px-2.5 mb-2 text-xs cursor-pointer",
              children: /* @__PURE__ */ u.jsxs("div", { className: "w-full line-clamp-1 flex justify-between", children: [
                a.label,
                a.items && /* @__PURE__ */ u.jsx(
                  "svg",
                  {
                    className: `ml-2 h-4 w-4 flex-shrink-0 transition-transform ${o ? "rotate-180" : "rotate-0"}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 9l6 6 6-6" })
                  }
                )
              ] })
            }
          ),
          a.items && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: `overflow-hidden transition-all duration-300 ${o ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} w-full flex flex-col ml-5`,
              children: this.renderChildItems(a.items, `${a.label}`)
            }
          )
        ] }, `child-${s}`);
      });
    });
    this.state = {
      openMenu: null,
      openChildMenu: null,
      is_active: null
    };
  }
  componentDidMount() {
    this.toggleMenuRequest();
  }
  componentDidUpdate(t) {
    var n, i;
    ((n = this.props.location) == null ? void 0 : n.pathname) !== ((i = t.location) == null ? void 0 : i.pathname) && this.toggleMenuRequest();
  }
  render() {
    const t = this.state.openMenu === this.props.name;
    return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ u.jsxs(
        "a",
        {
          onClick: this.handleOnClick,
          title: this.props.name,
          className: `flex space-x-3 text-xs font-poppinsRegular ${this.props.className ?? "text-black dark:text-white hover:bg-primary/75 dark:hover:bg-white dark:hover:text-black hover:text-white"}  py-2 px-4 items-center rounded transition duration-200 hover:bg-gradient-to-r  ${this.state.is_active ? "dark:text-white bg-gray-200 dark:bg-darkBackground font-poppinsSemiBold" : "dark:text-white"}`,
          href: this.props.url,
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "w-6 h-6 flex-shrink-0", children: this.props.icon }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex w-full justify-between", children: [
              /* @__PURE__ */ u.jsx("div", { className: "text-* w-full line-clamp-1", children: this.props.name }),
              this.props.items && /* @__PURE__ */ u.jsx(
                "svg",
                {
                  className: `ml-2 h-4 w-4 flex-shrink-0 transition-transform ${t ? "rotate-180" : "rotate-0"}`,
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 9l6 6 6-6" })
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ u.jsx("div", { className: `overflow-hidden transition-all duration-300 ${t ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} w-full flex flex-col pl-10 font-poppinsRegular`, children: this.props.items && this.renderChildItems(this.props.items, this.props.name) })
    ] });
  }
}
const sv = ({ charLimit: e, children: r }) => {
  const t = r, [n, i] = ke(!0), a = () => {
    i(!n);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "text", children: [
    t.length <= e ? t : n ? t.slice(0, e) : t,
    t.length > e && /* @__PURE__ */ u.jsx("span", { onClick: a, className: "read-or-hide font-bold", children: n ? "...read more" : " show less" })
  ] });
};
class ov extends me {
  constructor(t) {
    super(t);
    y(this, "header");
    y(this, "status");
    y(this, "handleDelete", () => {
      var s;
      const t = {
        title: "Confirmation!",
        btnPosition: "delete",
        btnNegative: "cancel",
        type: I.NOTICE
      }, n = (o) => {
        this.state.request.delete || (o.status && (this.handleDeleteRequest(), this.props.error({})), this.setState((l) => ({
          request: { ...l.request, delete: o.status },
          modal: void 0
        })));
      }, i = typeof this.props.user[this.props.settings.deleteinfo.name] == "object" ? (s = this.props.user[this.props.settings.deleteinfo.name]) == null ? void 0 : s.name : this.props.user[this.props.settings.deleteinfo.name], a = /* @__PURE__ */ u.jsx(pc, { settings: t, onClose: n, children: /* @__PURE__ */ u.jsxs("div", { className: "w-full py-2 text-sm", children: [
        "Are you sure you want to delete",
        /* @__PURE__ */ u.jsxs("span", { className: "text-red-500 ml-1 font-poppinsBold", children: [
          i,
          "?"
        ] })
      ] }) });
      this.setState({ modal: a });
    });
    y(this, "handleError", (t = "") => {
      try {
        let n = { ...this.state.request }, i = { ...this.state.error }, a = j.isEmptyOrNull(t) ? "Error Message" : t;
        n.delete = !1, i.state = !0, i.message = a, i.type = "Error", i.color = "red", this.setState({ request: n }), this.props.error(i);
      } catch {
      }
    });
    y(this, "handleDeleteRequest", () => {
      try {
        let t = { ...this.state.error };
        t.state = !1, he.delete(`${this.props.settings.request_url}/${this.props.user[this.props.settings.deleteinfo.id]}/delete/`, {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
          }
        }).then(
          (n) => {
            n.data.success ? (t.state = !1, this.props.handleOnSuccess(this.props.index)) : this.handleError(n.data.message);
          },
          (n) => {
            this.handleError();
          }
        ).catch((n) => {
          this.handleError();
        });
      } catch {
        this.handleError();
      }
    });
    y(this, "handleEdit", () => {
      this.state.request.delete || this.props.handleEdit(this.props.user);
    });
    y(this, "onImageClick", (t) => {
    });
    y(this, "toggleView", () => {
      this.setState((t) => ({
        viewAll: !t.viewAll
      }));
    });
    y(this, "extra_handle", () => this.props.settings.extra_handle ? this.props.settings.extra_handle.find((t) => t.name === this.header) : !1);
    this.state = {
      stateList: [I.APPROVED, I.ACTIVE, I.CREATED, I.ACCREDITED, I.RUNNING, I.ADMITTED, I.QUALIFIED, I.IN_PROGRESS],
      imageExtensions: ["jpg", "jpeg", "png", "svg"],
      imgColumnTypes: ["picture", "photo"],
      title: "",
      contentlist: [],
      header: "",
      request: { delete: !1 },
      error: { state: !1, message: "", type: I.ERROR, color: "" },
      isLoading: !1,
      viewAll: !1
    }, this.header = "", this.status = "";
  }
  async componentDidMount() {
    let t = this.props.user, n = this.props.acces_key, i = this.props.headers, a = t[i[n]];
    this.header = j.toString(i[n]).toLowerCase(), this.status = t.status ?? t.process_state, this.setState({ title: Array.isArray(a) ? "" : (a == null ? void 0 : a.name) ?? j.toString(a), contentlist: Array.isArray(a) ? a : [] });
  }
  render() {
    var d, h, f, m;
    const t = /* @__PURE__ */ u.jsx("span", { className: "text-blue-800 dark:text-blue-300 cursor-pointer flex-col", children: /* @__PURE__ */ u.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) }) }), n = /* @__PURE__ */ u.jsx("span", { className: "text-red-800 dark:text-red-300 cursor-pointer", children: /* @__PURE__ */ u.jsx("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) }), i = /* @__PURE__ */ u.jsx("span", { className: "text-black dark:text-white cursor-pointer ", children: /* @__PURE__ */ u.jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
      /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
    ] }) }), a = j.isEmptyOrNull(this.state.title) && this.props.settings.image !== void 0 ? this.props.settings.image.placeholder : this.state.title, { viewAll: s, contentlist: o } = this.state, l = s ? o : o.slice(0, 1), c = s ? "collapsible-content expanded" : "collapsible-content";
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      this.state.modal,
      this.props.exceptional_columns.includes(this.header) || this.extra_handle() ? /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center items-center", children: this.header === "edit" ? /* @__PURE__ */ u.jsx("span", { onClick: () => this.handleEdit(), children: t }) : this.header === "view" ? /* @__PURE__ */ u.jsx("span", { onClick: () => this.props.settings.handleOnViewClick(this.props.user), children: i }) : this.extra_handle() ? /* @__PURE__ */ u.jsx("span", { onClick: () => {
        var p, v;
        return this.props.settings.handleOnClickExtra(
          this.props.user,
          ((v = (p = this.props.settings.extra_handle) == null ? void 0 : p.find((g) => g.name === this.header)) == null ? void 0 : v.name) || ""
        );
      }, children: (h = (d = this.props.settings.extra_handle) == null ? void 0 : d.find((p) => p.name === this.header)) == null ? void 0 : h.icon }) : this.header === "delete" && this.state.request.delete ? /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "flex w-4 h-4 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
        /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
      ] }) : /* @__PURE__ */ u.jsx("span", { onClick: () => this.handleDelete(), children: n }) }) : ["status", "process_state"].includes(this.header.toLowerCase()) ? /* @__PURE__ */ u.jsx("div", { className: `w-auto text-[9px] rounded-full border ${this.state.stateList.includes(this.status) ? "bg-green-400 text-green-700 border-green-500" : "bg-red-400 text-red-700 border-red-500"} py-1 justify-center text-center items-center`, children: this.status }) : this.state.imgColumnTypes.includes(((f = this.header) == null ? void 0 : f.toLowerCase()) || "") || this.state.imageExtensions.includes(((m = this.state.title) == null ? void 0 : m.toLowerCase().split(".").pop()) || "") ? /* @__PURE__ */ u.jsx("div", { className: "w-8 ml-3", children: /* @__PURE__ */ u.jsx("img", { onClick: () => this.onImageClick(this.state.title), title: "View photo", className: `object-center object-cover w-6 h-6 2xl:w-8 2xl:h-8 ${this.props.settings.image == null || this.props.settings.image.rounded == !1 ? "" : "rounded-full"} cursor-pointer mx-auto`, alt: "photo", src: a }) }) : /* @__PURE__ */ u.jsx("span", { className: "text-xs 2xl:text-sm px-4 py-2 flex items-center", children: this.state.contentlist.length > 0 ? /* @__PURE__ */ u.jsx("ul", { className: `flex flex-col w-full ${c}`, children: l.map((p, v) => /* @__PURE__ */ u.jsx("li", { onClick: this.toggleView, className: `w-full ${l.length > 1 ? "line-clamp-1" : ""}`, title: `${p.name}`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ u.jsx("div", { className: "mr-3", children: p.name }),
        v == 0 && o.length > 1 && /* @__PURE__ */ u.jsx("div", { onClick: this.toggleView, children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5 cursor-pointer", children: /* @__PURE__ */ u.jsx("path", { d: "M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z" }) }) })
      ] }) }, v)) }) : /* @__PURE__ */ u.jsx(sv, { charLimit: this.props.settings.read_more_limit !== void 0 ? this.props.settings.read_more_limit : 50, children: this.state.title }) })
    ] });
  }
}
class lv extends T.Component {
  constructor(t) {
    super(t);
    y(this, "modalContainer");
    y(this, "handleClose", (t) => {
      try {
        this.props.settings.loading && t && this.setState({ isLoading: !0 });
        const n = { ...this.state.data, status: t, filters: this.state.filter };
        this.props.onClose(n);
      } catch {
      }
    });
    y(this, "handleDataChange", (t, n) => {
      try {
        const i = this.state.filter.is_multiple ? n.length > 0 ? n.map((a) => a.id) : [] : n;
        this.setState((a) => ({
          filter: {
            ...a.filter,
            [t]: i
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
    const t = { ...this.state.settings, ...this.props.settings };
    this.setState({ settings: t }), document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const { settings: t } = this.state, n = /* @__PURE__ */ u.jsx("div", { className: "fixed z-[3000] inset-0 overflow-y-auto", children: /* @__PURE__ */ u.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ u.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ u.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ u.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-darkBackground dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col lg:-ml-2 w-full", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left items-center", children: [
            t.title && !j.isEmptyOrNull(t.title) && /* @__PURE__ */ u.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${t.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"} font-poppinsBold`, children: t.title }),
            t.hint && !j.isEmptyOrNull(t.hint) && /* @__PURE__ */ u.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-sm mt-1.5 ${t.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"}`, children: t.hint }),
            /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full my-5", children: t.filter && t.filter.data.map((i, a) => /* @__PURE__ */ u.jsx("div", { className: "flex w-full relative", children: /* @__PURE__ */ u.jsx(
              fc,
              {
                data: i.data,
                selectedData: this.state.settings.data_value,
                defaultValue: i.defaults,
                onClear: "None",
                handleChange: (s) => this.handleDataChange(i.name, s),
                is_multiple: t.filter.is_multiple,
                dropdownClass: "bg-white text-black",
                enableDecrypt: t.filter.encrypted,
                placeholder: `By ${j.convertUnderscoreToSpaceString(i.name)}`,
                dropdownListClass: "flex w-full text-black hover:bg-gray-200",
                className: "flex w-full dark:text-white text-sm text-gray-900 border-b-0 border-gray-300 py-2.5 bg-transparent outline-none focus:outline-none"
              }
            ) }, `drpdke=${a}`)) })
          ] }),
          this.props.settings.handleOnClose && /* @__PURE__ */ u.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: this.props.settings.handleOnClose, children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mt-4 sm:flex sm:flex-row-reverse", children: [
          t.btnPosition && /* @__PURE__ */ u.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onClick: () => this.handleClose(!0),
              className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
              children: t.btnPosition
            }
          ) }),
          t.btnNegative && /* @__PURE__ */ u.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onClick: () => this.handleClose(!1),
              className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-black dark:text-white focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
              children: t.btnNegative
            }
          ) })
        ] })
      ] }) })
    ] }) }) });
    return Rr.createPortal(n, this.modalContainer);
  }
}
class Cb extends me {
  constructor(t) {
    super(t);
    y(this, "renderedSettings", []);
    y(this, "dataCollection", []);
    y(this, "chunkSize");
    y(this, "currentIndex");
    y(this, "hasClear");
    y(this, "isLoading");
    y(this, "hasLoadLastData");
    y(this, "current_page");
    y(this, "search");
    y(this, "filterloaded");
    y(this, "componentDidUpdate", async (t, n) => {
      try {
        const { settings: i } = this.props;
        if (i.filter && !this.filterloaded && Array.isArray(i.filter.data) && i.filter.data.length > 0) {
          const a = { ...i.filter };
          this.setState({ filters: a }), this.filterloaded = !0;
        }
      } catch {
      }
    });
    y(this, "errors", (t) => {
      this.setState({ alerterror: t });
    });
    y(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: I.ERROR, color: "" } });
    });
    y(this, "handleError", (t = "", n = !0) => {
      try {
        var i = this.state.error, a = this.state.input;
        a.is_searching = !1, i.state = !0, i.message = j.isEmptyOrNull(t) ? I.ERROR_MESSAGE : t, i.type = I.ERROR, i.color = "red", i.retry = n, this.setState({ isLoading: !1, error: i, input: a });
      } catch {
      }
    });
    y(this, "tableHeads", () => {
      let t;
      return this.state.custom_settings.order === "asc" ? t = /* @__PURE__ */ u.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15l7-7 7 7" }) }) : t = /* @__PURE__ */ u.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }), this.state.settings.headers.map((n, i) => {
        var o;
        const a = this.state.exceptionalColumns.includes(n.toLowerCase()), s = (o = this.state.settings.table_data) == null ? void 0 : o.find((l) => l.name === n.toLowerCase());
        return /* @__PURE__ */ u.jsx("th", { onClick: () => this.sortByColumn(this.props.settings.columns[i]), className: `py-2 sticky ${a ? "w-4" : s ? s.class : ""}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs", children: [
          /* @__PURE__ */ u.jsx("span", { children: this.columnHead(n) }),
          /* @__PURE__ */ u.jsx("span", { children: this.state.custom_settings.sorted_column === this.props.settings.columns[i] && t })
        ] }) }, i);
      });
    });
    y(this, "handleClear", () => {
      let t = this.state.input, n = this.state.entities;
      var i = this.state.error;
      i.state = !1, t.is_searching = !1, n.meta.total = 0, this.setState({ input: t }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: n, error: i });
    });
    y(this, "addHeaderAndColumn", (t, n) => {
      this.setState((i) => {
        const a = [...i.settings.headers, t], s = [...i.settings.columns, n];
        return {
          settings: {
            ...i.settings,
            headers: a,
            columns: s
          }
        };
      });
    });
    y(this, "removeHeaderAndColumn", (t) => {
      this.setState((n) => {
        const i = n.settings.headers.indexOf(t);
        if (i === -1)
          return null;
        const a = n.settings.headers.filter((o, l) => l !== i), s = n.settings.columns.filter((o, l) => l !== i);
        return {
          ...n,
          settings: {
            ...n.settings,
            headers: a,
            columns: s
          }
        };
      });
    });
    y(this, "clearFetchEntities", () => {
      let t = this.state.custom_settings;
      t.current_page = 1, this.handleClear(), this.setState({ custom_settings: t }, this.fetchEntities);
    });
    y(this, "handleSearch", (t) => {
      let n = this.state.input;
      (t.key === "Enter" || t.keyCode === 13) && !j.isEmptyOrNull(n.search) && n.search.length > 2 && (n.is_searching = !0, this.search = n.search, this.setState({ input: n }, this.clearFetchEntities));
    });
    y(this, "searchFilter", async (t) => {
      let n = this.state.input;
      Object.entries(t.search).length > 0 && (n.is_searching = !0, this.setState({ filters: t, input: n }, this.clearFetchEntities));
    });
    y(this, "handleInput", (t) => {
      const { value: n } = t.target;
      this.setState((i) => ({
        input: {
          ...i.input,
          search: n
        }
      }));
    });
    y(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          let t = this.state.custom_settings, n = this.state.entities.meta.next_page;
          !j.isEmptyOrNull(n) && this.current_page !== n && (t.current_page = n ?? 1, this.current_page = n ?? 1, this.setState({ isLoading: !0, custom_settings: t }, () => {
            this.fetchEntities();
          }));
        }
      } catch {
      }
    });
    y(this, "handleFocus", () => {
      this.setState({ isFocused: !0 });
    });
    y(this, "handleBlur", () => {
      this.setState({ isFocused: !1 });
    });
    y(this, "onChangeValue", (t) => {
      try {
        this.search = t.target.value, this.setState({ searchText: t.target.value }, () => {
          j.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearching();
        });
      } catch {
      }
    });
    y(this, "handleKeyDown", (t) => {
      try {
        t.key === "Enter" && !j.isEmptyOrNull(this.search) && this.handleSearching();
      } catch {
      }
    });
    y(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    y(this, "removeFilterByName", (t) => {
      try {
        const n = { ...this.state.filters }, i = { ...this.state.filters.search };
        delete i[t], n.search = i;
        const a = this.state.filterhead.filter((o) => o.name !== t), s = this.state.filters.data.map((o) => {
          if (o.name === t) {
            const { defaults: l, ...c } = o;
            return c;
          }
          return o;
        });
        n.data = s, this.handleClear(), this.setState({ filterhead: a, filters: n }, this.fetchEntities);
      } catch {
      }
    });
    y(this, "handleFiltered", () => {
      var l;
      const { settings: t } = this.props, { filters: n } = this.state, i = (c) => {
        if (c.status) {
          const d = { ...n }, h = [];
          d.search = c.filters, Object.entries(c.filters).map(([f, m]) => {
            h.push({ name: f, data: m.name });
          }), d.data = n.data.map((f) => {
            const m = c.filters[f.name];
            return {
              name: f.name,
              data: f.data,
              defaults: m !== void 0 ? m : {}
            };
          }), this.handleClear(), this.setState({ filterhead: h, filters: d }, this.fetchEntities);
        }
        this.setState({ dtablemodal: null, hasRequest: !1 });
      }, s = {
        title: (l = {
          ...t,
          filter: {
            ...t.filter,
            data: this.state.filters.data
          }
        }.filter) == null ? void 0 : l.title,
        type: I.NOTICE,
        datalist: this.state.filters,
        btnPosition: "Continue",
        btnNegative: "Cancel"
      }, o = /* @__PURE__ */ u.jsx(lv, { settings: s, onClose: i });
      this.setState({ dtablemodal: o });
    });
    y(this, "handleRetry", () => {
      try {
        this.handleClear();
        let t = this.state.custom_settings;
        t.current_page = 1, this.setState({ isLoading: !0, error: {}, custom_settings: t }, this.fetchEntities);
      } catch {
      }
    });
    y(this, "handleHint", () => {
      try {
        return this.state.settings.header.hint ? this.state.settings.header.hint + " | Loaded " + this.state.entities.meta.total : this.state.error.state ? "" : "Loaded " + this.state.entities.meta.total + " data";
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
    });
    y(this, "handleOnSuccess", (t) => {
      this.renderedSettings.splice(t, 1), this.dataCollection.splice(t, 1);
      let n = this.state.entities;
      n.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    y(this, "handleEdit", (t) => {
      this.props.settings.handleEdit(t);
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
        type: I.ERROR,
        color: "",
        retry: !0
      },
      alerterror: {
        state: !1,
        message: "",
        type: I.ERROR,
        color: ""
      }
    }, this.renderedSettings = [], this.dataCollection = [], this.chunkSize = 50, this.currentIndex = 0, this.hasClear = !1, this.isLoading = !1, this.hasLoadLastData = !1, this.current_page = 0, this.search = "", this.filterloaded = !1, this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    let t = this.state.custom_settings;
    t.sorted_column = this.props.settings.default_sorted_column, this.setState({ custom_settings: t, settings: this.props.settings }, this.fetchEntities);
  }
  handleScroll(t) {
    const n = t.target;
    n.scrollTop + n.clientHeight >= n.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      let t = [], n = "";
      this.state.filters.search !== void 0 && this.state.filters.search !== null && Object.entries(this.state.filters.search).length > 0 && (Object.entries(this.state.filters.search).map(([s, o]) => j.isEmptyOrNull(o.id) ? null : t.push(`${s}=${o.id}`)), n = `&${t.join("&")}`);
      let i = this.state.entities, a = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}${n}`;
      he.get(a, {
        headers: {
          "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
          Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
        }
      }).then((s) => {
        let o = s.data;
        o.success ? (i.data.length = 0, this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(s.data.data.data), this.hasClear = !1, i.meta = s.data.data.meta, this.setState({ isLoading: !1, entities: i }, this.initialChunck)) : (this.hasLoadLastData = !0, this.handleError(o.message, !1));
      }).catch((s) => {
        this.handleError();
      });
    } catch {
      this.handleError();
    }
  }
  columnHead(t) {
    let n = t.split("_");
    return n.length > 1 && this.state.exceptionalColumns.includes(j.toString(n.slice(-1)).toString().toLowerCase()) ? n.slice(0, -1).join(" ").toUpperCase() : n.join(" ").toUpperCase();
  }
  sortByColumn(t) {
    try {
      var n = this.state.custom_settings, i = t === this.state.custom_settings.sorted_column && this.state.custom_settings.order === "asc" ? "desc" : "asc";
      this.handleClear(), n.current_page = 1, n.sorted_column = t, n.order = i, this.setState({ isLoading: !0, error: {}, custom_settings: n }, this.fetchEntities);
    } catch {
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const t = this.state.settings.headers, n = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let i = this.currentIndex; i < n; i++) {
        const a = this.dataCollection[i];
        let s = this.state.selected === i ? " bg-gray-300 dark:bg-darkPrimary" : i % 2 === 0 ? " dark:bg-[#1c1c1c] bg-[#f3f4f6] " : " bg-inherit";
        if (a !== void 0) {
          const o = /* @__PURE__ */ u.jsx("tr", { className: `${s} cursor-pointer text-gray-700  dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white  transition duration-500 ease-in-out`, children: Object.keys(t).map((l, c) => /* @__PURE__ */ u.jsx("td", { className: "px-3 justify-content-center flex-wrap", children: /* @__PURE__ */ u.jsx(
            ov,
            {
              index: i,
              handleOnSuccess: this.handleOnSuccess,
              acces_key: parseInt(l, 10),
              error: this.errors,
              handleEdit: () => this.props.settings.handleEdit(a),
              settings: this.props.settings,
              exceptional_columns: this.state.exceptionalColumns,
              user: a,
              headers: t
            },
            `dtaw${l}${this.search}`
          ) }, `trex${c}`)) }, i);
          this.renderedSettings.push(o);
        }
      }
    } catch {
    }
  }
  handleSearching() {
    let t = this.state.custom_settings, n = this.state.input;
    t.current_page = 1, n.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: t, input: n }, () => {
      this.fetchEntities();
    });
  }
  handleBreadCrumbNavigations(t, n) {
    t.preventDefault(), this.props.settings.onURLClick(n);
  }
  renderBreadcrumb() {
    const { breadcrumb: t } = this.state.settings;
    return !t || t.length === 0 ? null : /* @__PURE__ */ u.jsx("nav", { className: "flex text-sm mb-4", "aria-label": "Breadcrumb", children: /* @__PURE__ */ u.jsx("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: t.map((n, i) => /* @__PURE__ */ u.jsxs("li", { className: "inline-flex items-center", children: [
      i !== t.length - 1 ? /* @__PURE__ */ u.jsx("a", { href: n.url, onClick: (a) => this.handleBreadCrumbNavigations(a, n.url), className: "text-gray-700 dark:text-white/75 dark:hover:text-blue-500 hover:text-blue-600", children: n.name }) : /* @__PURE__ */ u.jsx("span", { className: "text-gray-500 dark:text-white/75", "aria-current": "page", children: n.name }),
      i !== t.length - 1 && /* @__PURE__ */ u.jsx("svg", { className: "w-4 h-4 mx-2 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ u.jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) })
    ] }, i)) }) });
  }
  render() {
    var a;
    const { isFocused: t, searchText: n } = this.state, i = t && n !== "";
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      this.state.dtablemodal,
      /* @__PURE__ */ u.jsxs("div", { className: `flex flex-col w-full ${this.props.className}`, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full mb-5", children: [
          /* @__PURE__ */ u.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center space-x-6", children: [
            /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full ", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col", children: [
              /* @__PURE__ */ u.jsx("h3", { className: `${this.state.settings.header !== void 0 ? j.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
              /* @__PURE__ */ u.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
            ] }) : null }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-max  flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
              /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full relative", children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    className: `rounded-full lg:rounded-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-primary focus:ring-0 bg-inherit dark:text-white transition-all duration-300 ease-in-out
                                        ${i ? "w-[300px]" : "w-[200px]"}`,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    name: "search",
                    onChange: this.onChangeValue,
                    onKeyDown: this.handleKeyDown,
                    id: "search",
                    type: "text",
                    placeholder: "Search"
                  }
                ),
                this.state.input.is_searching && !j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                  /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                  /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
                ] }) : null
              ] }) }),
              /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
                /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
                /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
              ] }) }),
              this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
            ] }) }) }) })
          ] }),
          this.props.content != null ? /* @__PURE__ */ u.jsx("div", { children: this.props.content }) : null
        ] }),
        /* @__PURE__ */ u.jsx("div", {}),
        /* @__PURE__ */ u.jsx("div", { className: `scrollable_table flex flex-col min-h-[200px] ${this.renderedSettings.length > 10 ? "h-[80vh]" : "h-auto"} overflow-auto  scrollbar-width`, onScroll: this.handleScroll, children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ u.jsx("div", { children: this.state.filterhead.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "flex w-full overflow-x-auto mb-2 space-x-4", children: this.state.filterhead.map((s, o) => j.isEmptyOrNull(s.data) ? null : /* @__PURE__ */ u.jsxs("div", { className: "flex flex-shrink-0 text-sm relative pl-4 pr-6 py-2 rounded-none border-[1px] border-gray-200 bg-gray-50", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "flex mr-2", children: [
              j.capitalizeEachWord(j.convertUnderscoreToSpaceString(s.name)),
              ":"
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "flex font-poppinsSemiBold", children: s.data }),
            /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "absolute right-1 top-2 bottom-1 cursor-pointer w-4 h-4 2xl:w-5 2xl:h-5", onClick: () => this.removeFilterByName(s.name), children: /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M368 368L144 144M368 144L144 368" }) })
          ] }, `flter=${o}`)) }) : null }),
          this.renderBreadcrumb(),
          /* @__PURE__ */ u.jsxs("table", { children: [
            /* @__PURE__ */ u.jsx("thead", { className: "w-full", children: /* @__PURE__ */ u.jsx("tr", { className: "text-sm", children: this.tableHeads() }) }),
            /* @__PURE__ */ u.jsx("tbody", { children: this.state.error.state ? null : this.renderedSettings })
          ] }),
          !this.state.isLoading && (!this.dataCollection.length || this.state.error.state) ? /* @__PURE__ */ u.jsxs("div", { className: `flex flex-col w-full h-96 justify-center ${this.state.error.state ? "text-red-500" : "dark:text-white"} space-y-5 items-center text-base`, children: [
            this.state.error.state ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }) }) : j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }) }) : /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full text-sm justify-center text-center", children: this.state.error.state ? this.state.error.message : j.isEmptyOrNull(this.search) ? "No data available to show" : /* @__PURE__ */ u.jsx("span", { className: " font-poppinsSemiBold", children: " Sorry we couldn't find anything!" }) }),
            (a = this.state.error) != null && a.retry && j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsx("div", { onClick: () => this.handleRetry(), className: `uppercase flex font-poppinsSemiBold ${this.state.error.state ? "bg-red-400 text-red-700" : ""} px-6 py-2 cursor-pointer rounded-full my-4`, children: this.state.error.state ? "RETRY" : "REFRESH" }) : null
          ] }) : this.state.isLoading ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full mt-10 justify-center dark:text-white items-center space-y-4", children: [
            /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "flex w-4 h-4 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
              /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "text-xs 2xl:text-sm", children: "Loading......." })
          ] }) : null
        ] }) })
      ] })
    ] });
  }
}
class Yc extends me {
  constructor(t) {
    super(t);
    y(this, "handleToggle", () => {
      this.setState({ showForms: !this.state.showForms });
    });
    y(this, "handleRetry", () => {
      this.props.onRetry && this.props.onRetry();
    });
    this.state = {
      showForms: !1
    };
  }
  render() {
    const { error: t, handleCloseAlert: n, onRetry: i } = this.props, a = t.type.toLowerCase() === "error";
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `flex w-full flex-col text-sm flex-wrap ${a ? "bg-red-200 text-red-600" : "bg-green-200 text-green-600"} border-[1px] ${a ? "border-red-400" : "border-green-400"} px-4 py-3 rounded relative mb-4`,
        role: "alert",
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "font-poppinsBold mr-4", children: [
            t.type,
            "!"
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "sm:inline flex w-full flex-wrap ", children: t.message }),
          /* @__PURE__ */ u.jsx("span", { className: "absolute top-0 bottom-0 right-0 px-2 py-3", children: /* @__PURE__ */ u.jsx(
            "svg",
            {
              onClick: n,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `fill-current h-5 w-5 cursor-pointer ${a ? "text-red-500" : "text-green-500"}`,
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                  clipRule: "evenodd"
                }
              )
            }
          ) }),
          i && // Changed to onRetry
          /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-end items-center", children: /* @__PURE__ */ u.jsx(
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
class cv extends me {
  constructor(t) {
    super(t);
    y(this, "renderedSettings", []);
    y(this, "dataCollection", []);
    y(this, "chunkSize", 6);
    y(this, "currentIndex", 0);
    y(this, "hasClear", !1);
    y(this, "isLoading", !1);
    y(this, "current_page", 0);
    y(this, "search", "");
    y(this, "errors", (t) => {
      this.setState({ alerterror: t });
    });
    y(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: I.ERROR, color: "" } });
    });
    y(this, "handleError", (t = "") => {
      try {
        const n = { ...this.state.error, state: !0, message: j.isEmptyOrNull(t) ? I.ERROR_MESSAGE : t, type: I.ERROR, color: "red" };
        this.setState({ isLoading: !1, error: n }, () => {
          this.props.handleOnLoaded(this.renderedSettings, I.ERROR);
        });
      } catch {
      }
    });
    y(this, "handleFetchEntities", () => {
      this.props.handleOnLoaded(this.renderedSettings, I.LOADING), this.fetchEntities();
    });
    y(this, "handleFiltered", () => {
    });
    y(this, "handleRetry", () => {
      try {
        this.handleClear();
        const t = { ...this.state.custom_settings, current_page: 1 };
        this.setState({ isLoading: !0, error: { state: !1, message: "", type: I.ERROR, color: "" }, custom_settings: t }, this.handleFetchEntities);
      } catch {
      }
    });
    y(this, "handleClear", () => {
      const t = { ...this.state.input, is_searching: !1 }, n = { ...this.state.entities, meta: { ...this.state.entities.meta, total: 0 } };
      this.setState({ input: t }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: n });
    });
    y(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          const t = { ...this.state.custom_settings }, n = this.state.entities.meta.next_page;
          n !== null && !j.isEmptyOrNull(n) && this.current_page !== n && (t.current_page = n, this.current_page = n, this.setState({ isLoading: !0, custom_settings: t }, () => {
            this.props.handleOnLoaded(this.renderedSettings, I.LOADING), this.handleFetchEntities();
          }));
        }
      } catch {
      }
    });
    y(this, "handleOnSuccess", (t) => {
      this.renderedSettings.splice(t, 1), this.dataCollection.splice(t, 1);
      let n = this.state.entities;
      n.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    y(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    y(this, "handleFocus", () => {
      this.setState({ isFocused: !0 });
    });
    y(this, "handleBlur", () => {
      this.setState({ isFocused: !1 });
    });
    y(this, "onChangeValue", (t) => {
      try {
        this.search = t.target.value, this.setState({ searchText: t.target.value }, () => {
          j.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearching();
        });
      } catch {
      }
    });
    y(this, "handleKeyDown", (t) => {
      try {
        t.key === "Enter" && !j.isEmptyOrNull(this.search) && this.handleSearching();
      } catch (n) {
        console.error("Error in handleKeyDown:", n);
      }
    });
    y(this, "tableHeads", () => {
      let t;
      return this.state.custom_settings.order === "asc" ? t = /* @__PURE__ */ u.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15l7-7 7 7" }) }) : t = /* @__PURE__ */ u.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }), this.props.settings.headers.map((n, i) => {
        var o;
        const a = this.state.exceptionalColumns.includes(n.toLowerCase()), s = (o = this.state.settings.table_data) == null ? void 0 : o.find((l) => l.name === n.toLowerCase());
        return /* @__PURE__ */ u.jsx("th", { onClick: () => this.sortByColumn(this.props.settings.columns[i]), className: `py-2 sticky ${a ? "w-4" : s ? s.class : ""}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs", children: [
          /* @__PURE__ */ u.jsx("span", { children: this.columnHead(n) }),
          /* @__PURE__ */ u.jsx("span", { children: this.state.custom_settings.sorted_column === this.props.settings.columns[i] && t })
        ] }) }, i);
      });
    });
    y(this, "handleHint", () => {
      var t, n;
      try {
        return (n = (t = this.state.settings) == null ? void 0 : t.header) != null && n.hint ? this.state.settings.header.hint : this.state.error.state ? "" : `Loaded ${this.state.entities.meta.total} data`;
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
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
          hint: "",
          search: !0
        },
        headers: [],
        columns: [],
        table_data: []
      },
      error: {
        state: !1,
        message: "",
        type: I.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: I.ERROR,
        color: ""
      }
    }, this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    const { default_sorted_column: t } = this.props.settings, n = { ...this.state.custom_settings, sorted_column: t };
    this.chunkSize = this.props.settings.pagination.per_page, this.setState({ custom_settings: n, settings: this.props.settings }, () => {
      this.handleFetchEntities();
    });
  }
  handleScroll(t) {
    const n = t.currentTarget;
    n.scrollTop + n.clientHeight >= n.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    var n;
    try {
      const i = { ...this.state.entities };
      if (!((n = this.props.settings.server_request) != null && n.enable)) {
        var t = this.props.data;
        i.data.length = 0, this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(t.data), this.hasClear = !1, i.meta = t.meta, this.setState({ isLoading: !1, entities: i }, this.initialChunck);
        return;
      }
      const a = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`, o = (await he.get(a, {
        headers: {
          "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
          Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
        }
      })).data;
      o.success ? (i.data = [], this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(o.data.data), this.hasClear = !1, i.meta = o.data.meta, this.setState({ isLoading: !1, entities: i }, this.initialChunck)) : this.handleError();
    } catch (i) {
      console.log(i), this.handleError();
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const t = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let n = this.currentIndex; n < t; n++) {
        const i = this.dataCollection[n];
        this.renderedSettings.some((a) => a[this.props.settings.deleteinfo.id] === i[this.props.settings.deleteinfo.id]) || this.renderedSettings.push(i);
      }
      this.props.handleOnLoaded(this.renderedSettings, I.LOADED);
    } catch {
    }
  }
  handleSearching() {
    let t = this.state.custom_settings, n = this.state.input;
    t.current_page = 1, n.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: t, input: n }, () => {
      this.fetchEntities();
    });
  }
  columnHead(t) {
    let n = t.split("_");
    return n.length > 1 && this.state.exceptionalColumns.includes(j.toString(n.slice(-1)).toString().toLowerCase()) ? n.slice(0, -1).join(" ").toUpperCase() : n.join(" ").toUpperCase();
  }
  sortByColumn(t) {
    try {
      var n = this.state.custom_settings, i = t === this.state.custom_settings.sorted_column && this.state.custom_settings.order === "asc" ? "desc" : "asc";
      this.handleClear(), n.current_page = 1, n.sorted_column = t, n.order = i, this.setState({ isLoading: !0, error: {}, custom_settings: n }, this.fetchEntities);
    } catch (a) {
      console.error(a);
    }
  }
  render() {
    var a;
    const { isFocused: t, searchText: n } = this.state, i = t && n !== "";
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full mb-5", children: [
        this.state.settings.header !== void 0 ? /* @__PURE__ */ u.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center space-x-6", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full ", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col", children: [
            /* @__PURE__ */ u.jsx("h3", { className: `${this.state.settings.header !== void 0 ? j.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
            this.props.content != null ? /* @__PURE__ */ u.jsx("div", { children: this.props.content }) : null,
            /* @__PURE__ */ u.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
          ] }) : null }),
          /* @__PURE__ */ u.jsx("div", { className: "flex w-max  flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
            /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full relative", children: [
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  className: `rounded-full lg:rounded-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-primary focus:ring-0 bg-inherit dark:text-white transition-all duration-300 ease-in-out
                                  ${i ? "w-[300px]" : "w-[200px]"}`,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  name: "search",
                  onChange: this.onChangeValue,
                  onKeyDown: this.handleKeyDown,
                  id: "search",
                  type: "text",
                  placeholder: "Search"
                }
              ),
              this.state.input.is_searching && !j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }) : null
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
              /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
              /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
            ] }) }),
            this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
          ] }) }) }) })
        ] }) : null,
        this.state.alerterror.state ? /* @__PURE__ */ u.jsx(Yc, { error: this.state.alerterror, handleCloseAlert: this.handleReset }) : null
      ] }),
      /* @__PURE__ */ u.jsx("div", {}),
      /* @__PURE__ */ u.jsx("div", { className: `scrollable_table flex flex-col h-[calc(100vh-290px)] overflow-auto  scrollbar-width ${this.props.className}`, onScroll: this.handleScroll, children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "w-full overflow-x-auto", children: [
        /* @__PURE__ */ u.jsxs("table", { className: "w-full whitespace-nowrap", children: [
          /* @__PURE__ */ u.jsx("thead", { className: " w-full ", children: /* @__PURE__ */ u.jsx("tr", { className: "text-left text-sm w-full bg-white dark:bg-darkPrimary", children: this.tableHeads() }) }),
          /* @__PURE__ */ u.jsx("tbody", { className: "w-full", children: this.props.children })
        ] }),
        !this.state.isLoading && (!this.dataCollection.length || this.state.error.state) ? /* @__PURE__ */ u.jsxs("div", { className: `flex flex-col w-full h-96 justify-center ${this.state.error.state ? "text-red-500" : "dark:text-white"} space-y-5 items-center text-base`, children: [
          this.state.error.state ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }) }) : j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }) }) : /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }),
          /* @__PURE__ */ u.jsx("div", { className: "flex w-full text-sm justify-center text-center", children: this.state.error.state ? this.state.error.message : j.isEmptyOrNull(this.search) ? "No data available to show" : /* @__PURE__ */ u.jsx("span", { className: " font-poppinsSemiBold", children: " Sorry we couldn't find anything!" }) }),
          (a = this.state.error) != null && a.retry && j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsx("div", { onClick: () => this.handleRetry(), className: `uppercase flex font-poppinsSemiBold ${this.state.error.state ? "bg-red-400 text-red-700" : ""} px-6 py-2 cursor-pointer rounded-full my-4`, children: this.state.error.state ? "RETRY" : "REFRESH" }) : null
        ] }) : this.state.isLoading ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full mt-10 justify-center dark:text-white items-center space-y-4", children: [
          /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "flex w-4 h-4 2xl:w-6 2xl:h-6 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
            /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "text-xs 2xl:text-sm", children: "Loading......." })
        ] }) : null
      ] }) }) })
    ] }) });
  }
}
class Sb extends me {
  constructor(t) {
    super(t);
    y(this, "renderedSettings", []);
    y(this, "dataCollection", []);
    y(this, "chunkSize", 6);
    y(this, "currentIndex", 0);
    y(this, "hasClear", !1);
    y(this, "isLoading", !1);
    y(this, "current_page", 0);
    y(this, "search", "");
    y(this, "errors", (t) => {
      this.setState({ alerterror: t });
    });
    y(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: I.ERROR, color: "" } });
    });
    y(this, "handleError", (t = "") => {
      try {
        const n = { ...this.state.error, state: !0, message: j.isEmptyOrNull(t) ? I.ERROR_MESSAGE : t, type: I.ERROR, color: "red" };
        this.setState({ isLoading: !1, error: n }, () => {
          this.props.handleOnLoaded(this.renderedSettings, I.ERROR, t);
        });
      } catch {
      }
    });
    y(this, "handleFetchEntities", () => {
      this.props.handleOnLoaded(this.renderedSettings, I.LOADING), this.fetchEntities();
    });
    y(this, "handleFiltered", () => {
    });
    y(this, "handleRetry", () => {
      try {
        this.handleClear();
        const t = { ...this.state.custom_settings, current_page: 1 };
        this.setState({ isLoading: !0, error: { state: !1, message: "", type: I.ERROR, color: "" }, custom_settings: t }, this.handleFetchEntities);
      } catch {
      }
    });
    y(this, "handleClear", () => {
      const t = { ...this.state.input, is_searching: !1 }, n = { ...this.state.entities, meta: { ...this.state.entities.meta, total: 0 } };
      this.setState({ input: t }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: n });
    });
    y(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          const t = { ...this.state.custom_settings }, n = this.state.entities.meta.next_page;
          n !== null && !j.isEmptyOrNull(n) && this.current_page !== n && (t.current_page = n, this.current_page = n, this.setState({ isLoading: !0, custom_settings: t }, () => {
            this.props.handleOnLoaded(this.renderedSettings, I.LOADING), this.handleFetchEntities();
          }));
        }
      } catch {
      }
    });
    y(this, "handleOnSuccess", (t) => {
      this.renderedSettings.splice(t, 1), this.dataCollection.splice(t, 1);
      let n = this.state.entities;
      n.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    y(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    y(this, "handleFocus", () => {
      this.setState({ isFocused: !0 });
    });
    y(this, "handleBlur", () => {
      this.setState({ isFocused: !1 });
    });
    y(this, "onChangeValue", (t) => {
      try {
        this.search = t.target.value, j.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearching();
      } catch {
      }
    });
    y(this, "handleKeyDown", (t) => {
      try {
        t.key === "Enter" && !j.isEmptyOrNull(this.search) && this.handleSearching();
      } catch (n) {
        console.error("Error in handleKeyDown:", n);
      }
    });
    y(this, "handleHint", () => {
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
        type: I.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: I.ERROR,
        color: ""
      }
    }, this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    const { default_sorted_column: t } = this.props.settings, n = { ...this.state.custom_settings, sorted_column: t };
    this.chunkSize = this.props.settings.pagination.per_page, this.setState({ custom_settings: n, settings: this.props.settings }, () => {
      this.handleFetchEntities();
    });
  }
  handleScroll(t) {
    const n = t.currentTarget;
    n.scrollTop + n.clientHeight >= n.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      const t = { ...this.state.entities }, n = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}`, a = (await he.get(n, {
        headers: {
          "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
          Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
        }
      })).data;
      a.success ? (t.data = [], this.hasClear && this.handleClear(), this.dataCollection = this.dataCollection.concat(a.data.data), this.hasClear = !1, t.meta = a.data.meta, this.setState({ isLoading: !1, entities: t }, this.initialChunck)) : this.handleError(a.message);
    } catch {
      this.handleError();
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const t = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let n = this.currentIndex; n < t; n++) {
        const i = this.dataCollection[n];
        this.renderedSettings.some((a) => a[this.props.settings.deleteinfo.id] === i[this.props.settings.deleteinfo.id]) || this.renderedSettings.push(i);
      }
      this.props.handleOnLoaded(this.renderedSettings, I.LOADED);
    } catch {
    }
  }
  handleSearching() {
    let t = this.state.custom_settings, n = this.state.input;
    t.current_page = 1, n.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: t, input: n }, () => {
      this.fetchEntities();
    });
  }
  render() {
    const { isFocused: t, searchText: n } = this.state, i = t && n !== "";
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full mb-5", children: [
        /* @__PURE__ */ u.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center space-x-6", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full ", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col", children: [
            /* @__PURE__ */ u.jsx("h3", { className: `${this.state.settings.header !== void 0 ? j.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
            this.props.content != null ? /* @__PURE__ */ u.jsx("div", { children: this.props.content }) : null,
            /* @__PURE__ */ u.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
          ] }) : null }),
          /* @__PURE__ */ u.jsx("div", { className: "flex w-max  flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
            /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full relative", children: [
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  className: `rounded-full lg:rounded-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-primary focus:ring-0 bg-inherit dark:text-white transition-all duration-300 ease-in-out
                                        ${i ? "w-[300px]" : "w-[200px]"}`,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  name: "search",
                  onChange: this.onChangeValue,
                  onKeyDown: this.handleKeyDown,
                  id: "search",
                  type: "text",
                  placeholder: "Search"
                }
              ),
              this.state.input.is_searching && !j.isEmptyOrNull(this.search) ? /* @__PURE__ */ u.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ u.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ u.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }) : null
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full dark:hover:text-black bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-800 bg-inherit  cursor-pointer", onClick: () => this.handleRetry(), children: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-4 h-4 2xl:w-5 2xl:h-5", children: [
              /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeMiterlimit: 10, strokeWidth: 32, d: "M320 146s24.36-12-64-12a160 160 0 10160 160" }),
              /* @__PURE__ */ u.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M256 58l80 80-80 80" })
            ] }) }),
            this.props.settings.filter !== void 0 && this.props.settings.filter !== null ? /* @__PURE__ */ u.jsx("div", { className: "flex w-10 h-10 2xl:w-12 2xl:h-12 ml-2 flex-shrink-0 justify-center items-center rounded-full bg-gray-200 border border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer", onClick: () => this.handleFiltered(), children: /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" }) }) }) : null
          ] }) }) }) })
        ] }),
        this.state.alerterror.state ? /* @__PURE__ */ u.jsx(Yc, { error: this.state.alerterror, handleCloseAlert: this.handleReset }) : null
      ] }),
      /* @__PURE__ */ u.jsx("div", {}),
      /* @__PURE__ */ u.jsx("div", { className: `scrollable_table flex flex-col h-[calc(100vh-290px)] overflow-auto  scrollbar-width ${this.props.className}`, onScroll: this.handleScroll, children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col ", children: /* @__PURE__ */ u.jsx("div", { className: "flex w-full", children: this.props.children }) }) })
    ] }) });
  }
}
class uv extends T.Component {
  constructor(r) {
    super(r);
  }
  render() {
    return /* @__PURE__ */ u.jsx(
      "button",
      {
        type: "button",
        onClick: this.props.onClick,
        disabled: this.props.hasRequest,
        className: `${this.props.type === I.SMALL ? " px-4 py-3 " : " px-5 py-3 "} justifiy-center items-center w-full md:w-auto bg-[#212174] hover:bg-[#212174]/75  text-white dark:bg-[#282828]  text-xs  dark:hover:bg-white dark:hover:text-black ${this.props.className}  font-poppinsRegular items-center   rounded-full cursor-pointer  transition duration-500 ease-in-out`,
        children: this.props.hasRequest ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ u.jsxs(
            "svg",
            {
              role: "status",
              className: "inline mr-3 w-4 h-4 text-white animate-spin",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ u.jsx(
                  "path",
                  {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "#E5E7EB"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "path",
                  {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentColor"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ u.jsxs("span", { className: "hidden lg:flex", children: [
            this.props.label_request,
            "..."
          ] })
        ] }) : /* @__PURE__ */ u.jsxs("div", { className: "flex justify-center items-center", children: [
          this.props.icon,
          /* @__PURE__ */ u.jsx("span", { className: this.props.labelClassName, children: this.props.label })
        ] })
      }
    );
  }
}
class dv extends me {
  constructor(t) {
    super(t);
    y(this, "dropdownRef", Yt());
    y(this, "buttonRef", Yt());
    y(this, "fetch", async () => {
      const { url: t, options: n } = this.props.request;
      if (j.isEmptyOrNull(t))
        n && this.setState({ datalist: n, isLoading: !1 });
      else try {
        const a = (await he.get(j.toString(t), {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
          }
        })).data;
        a.success ? this.setState({ datalist: a.data, isLoading: !1 }) : this.handleAlert();
      } catch {
        this.handleAlert();
      }
    });
    y(this, "handleAlert", (t) => {
      this.setState({ isLoading: !1 });
    });
    y(this, "toggleDropdown", () => {
      this.setState((t) => ({ isOpen: !t.isOpen }));
    });
    y(this, "handleClickOutside", (t) => {
      const n = this.dropdownRef.current, i = this.buttonRef.current;
      n && !n.contains(t.target) && i && !i.contains(t.target) && this.setState({ isOpen: !1 });
    });
    y(this, "handleOnSelect", (t) => {
      this.setState({ isOpen: !1 }, () => {
        this.props.request.onSelect(t);
      });
    });
    this.state = {
      isOpen: !1,
      isLoading: !0,
      datalist: []
    };
  }
  componentDidMount() {
    this.fetch(), document.addEventListener("click", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
  render() {
    const { children: t } = this.props, { isOpen: n } = this.state;
    return /* @__PURE__ */ u.jsxs("div", { className: "relative inline-block text-left", children: [
      /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("div", { onClick: this.toggleDropdown, ref: this.buttonRef, id: "dropdownButton", className: "cursor-pointer", children: t }) }),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          id: "dropdownMenu",
          ref: this.dropdownRef,
          style: this.props.style,
          className: `absolute top-1/2 z-50 right-0 transform translate-x-1/2 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${n ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} ${this.props.className}`,
          children: /* @__PURE__ */ u.jsx("div", { role: "menu", children: this.state.isLoading ? /* @__PURE__ */ u.jsx(u.Fragment, {}) : this.state.datalist.length > 0 ? this.state.datalist.map((i, a) => /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                onClick: () => this.handleOnSelect(i),
                className: `flex w-full space-x-3 items-center px-6 py-4 cursor-pointer text-sm hover:bg-gray-100 ${i.id == I.DELETE ? "text-red-500" : "text-gray-700"}`,
                children: [
                  i.icon ? i.icon : null,
                  /* @__PURE__ */ u.jsx("span", { children: i.name })
                ]
              }
            ),
            a !== this.state.datalist.length - 1 && /* @__PURE__ */ u.jsx("hr", { className: "border-t border-gray-200" })
          ] }, `option-${a}`)) : null })
        }
      )
    ] });
  }
}
class Nb extends me {
  constructor(t) {
    super(t);
    y(this, "handleFileUpload", (t) => {
      var i;
      const n = (i = t.target.files) == null ? void 0 : i[0];
      if (n)
        if (this.state.image.type === I.DOCUMENT) {
          const { filedata: a } = this.state;
          if (n.type === "application/pdf")
            a.name = n.name, this.setState({ filedata: a }, () => this.props.image.onSelected(n));
          else
            return this.handleAlert("Error: You can only upload pdf file format."), !1;
        } else {
          if (!n.name.toLowerCase().match(/\.(png|jpeg|jpg)$/))
            return this.handleAlert("Error: You can only upload images in PNG, JPEG or JPG format."), !1;
          const a = new FileReader();
          a.readAsDataURL(n), a.onloadend = () => {
            this.setState({ hasError: !1, selectedFile: n, selectedImage: a.result }, () => {
              this.props.image.onSelected(n);
            });
          };
        }
    });
    y(this, "handleCancelUpload", () => {
      const { image: t } = this.state;
      t.url = "", this.setState({ selectedFile: null, selectedImage: null, image: t });
    });
    y(this, "handleAlert", (t) => {
      alert(t);
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
  componentDidUpdate(t) {
    !j.isEmptyOrNull(this.props.image.url) && j.isEmptyOrNull(this.state.image.url) && this.setState({ image: this.props.image });
  }
  async componentDidMount() {
    this.props.image !== void 0 && this.setState({ image: this.props.image });
  }
  render() {
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "relative z-0 mb-7 w-full group", children: /* @__PURE__ */ u.jsx("div", { className: `bg-gray-200 dark:bg-darkPrimary dark:text-white rounded-lg w-full shadow-sm h-40 justify-center items-center cursor-pointer relative overflow-hidden group ${this.state.selectedImage !== null && this.state.selectedImage !== void 0 ? "p-0" : j.isEmptyOrNull(this.state.image.url) ? "p-6" : ""} ${this.props.className}`, id: "dropzone", children: this.state.selectedImage !== null && this.state.selectedImage !== void 0 || !j.isEmptyOrNull(this.state.image.url) ? /* @__PURE__ */ u.jsxs("div", { className: "flex w-full h-full relative", children: [
      /* @__PURE__ */ u.jsx(
        "img",
        {
          className: "object-center object-cover w-full h-full cursor-pointer m-auto",
          alt: "photo",
          src: `${this.state.selectedImage !== null && this.state.selectedImage !== void 0 ? this.state.selectedImage : this.state.image.url}`
        }
      ),
      /* @__PURE__ */ u.jsx("div", { className: "absolute left-0 bottom-0 bg-black bg-opacity-5 right-2 h-full w-full top-0 ", children: /* @__PURE__ */ u.jsx("div", { className: "cursor-pointer absolute top-2 right-2 w-6 h-6 text-white rounded-full justify-center items-center", onClick: this.handleCancelUpload, children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5 rounded-full border-[1px] border-white m-auto", children: /* @__PURE__ */ u.jsx("path", { d: "M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" }) }) }) })
    ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx("input", { type: "file", className: "absolute inset-0 text-gray-500 w-full h-full opacity-0 z-50", accept: `${j.isEmptyOrNull(this.state.image.accept) ? "image/*" : this.state.image.accept}`, onChange: this.handleFileUpload }),
      /* @__PURE__ */ u.jsx("div", { className: "flex w-full h-full justify-center items-center", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
        j.isEmptyOrNull(this.state.image.placeholder) ? /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", className: "mx-auto h-12 w-12 text-gray-500 dark:text-white", viewBox: "0 0 24 24", strokeWidth: 0.7, stroke: "currentColor", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }) }) : /* @__PURE__ */ u.jsx("div", { className: "mx-auto h-12 w-12 text-gray-500", children: /* @__PURE__ */ u.jsx(
          "img",
          {
            className: "object-center object-cover w-full h-full cursor-pointer m-auto",
            alt: "photo",
            src: `${this.state.image.placeholder}`
          }
        ) }),
        /* @__PURE__ */ u.jsx("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: /* @__PURE__ */ u.jsx("label", { className: "relative cursor-pointer font-poppinsBold", children: this.state.image.type === I.DOCUMENT && !j.isEmptyOrNull(this.state.filedata.name) ? this.state.filedata.name : this.state.image.title }) }),
        /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-gray-500", children: j.isEmptyOrNull(this.state.image.hint) ? "PNG, JPG up to 1MB" : this.state.image.hint })
      ] }) })
    ] }) }) }) });
  }
}
class Ob extends me {
  constructor(r) {
    super(r), this.state = {
      content: null
    };
  }
  render() {
    const t = [
      {
        id: I.OPEN,
        name: "Open",
        icon: /* @__PURE__ */ u.jsx("svg", { fill: "none", viewBox: "0 0 15 15", className: "w-4 h-4", children: /* @__PURE__ */ u.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8.5a.5.5 0 00-1 0V12H3V3h3.5a.5.5 0 000-1H3zm9.854.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146z", clipRule: "evenodd" }) })
      },
      {
        id: I.EDIT,
        name: "Edit",
        icon: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 1024 1024", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ u.jsx("path", { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" }) })
      },
      {
        id: I.DELETE,
        name: "Delete",
        icon: /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 1024 1024", fill: "currentColor", className: "w-4 h-4", children: [
          /* @__PURE__ */ u.jsx("path", { d: "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" }),
          /* @__PURE__ */ u.jsx("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" })
        ] })
      }
    ].filter((i) => !(i.id === I.EDIT && !this.props.edit_permission || i.id === I.DELETE && !this.props.delete_permission || i.id === I.OPEN && !this.props.is_open)), n = this.props.optionList && this.props.optionList.length > 0 ? this.props.optionList : t;
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: this.props.isLoading ? /* @__PURE__ */ u.jsx("div", { className: "flex w-full h-24 animate-pulse", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full h-full bg-gray-300 dark:bg-darkPrimary" }) }) : /* @__PURE__ */ u.jsx(
      dv,
      {
        className: "cursor-pointer w-56 -mt-6",
        dropdownId: this.props.key,
        request: {
          options: n,
          serverRequest: !1,
          isEnable: !0,
          onSelect: (i) => {
            this.props.onAction(i);
          }
        },
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            className: `flex flex-col w-full rounded-lg cursor-pointer uppercase group min-h-24 ${this.props.className ?? "border border-l-4 hover:bg-primary dark:hover:bg-white dark:text-black hover:text-white dark:hover:text-black uppercase hover:border-l-white dark:hover:border-l-white border-l-primary dark:border-l-darkDialogBackground bg-white dark:bg-darkPrimary dark:border-darkDialogBackground border-gray-200 "}`,
            style: this.props.style,
            children: /* @__PURE__ */ u.jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full", children: this.props.name ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              j.isEmptyOrNull(this.props.image) ? null : /* @__PURE__ */ u.jsx("div", { className: "flex h-24 mb-2", children: /* @__PURE__ */ u.jsx(
                "img",
                {
                  className: "object-center object-cover rounded-lg transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto",
                  alt: "photo",
                  src: this.props.image
                }
              ) }),
              /* @__PURE__ */ u.jsx("div", { className: "text-sm line-clamp-1 text-center dark:text-white dark:group-hover:text-black", children: this.props.name }),
              j.isEmptyOrNull(this.props.caption) ? null : /* @__PURE__ */ u.jsxs("div", { className: "w-full text-xs line-clamp-1 lowercase justify-center lg:text-center text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black lg:line-clamp-2", children: [
                "(",
                this.props.caption,
                ")"
              ] })
            ] }) : this.props.children }) })
          }
        )
      }
    ) });
  }
}
class hv extends me {
  constructor(r) {
    super(r), this.state = {};
  }
  render() {
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col h-96 justify-center space-y-5 items-center", children: [
      this.props.icon ? /* @__PURE__ */ u.jsx("div", { className: "flex h-24 mb-5", children: /* @__PURE__ */ u.jsx(
        "img",
        {
          className: "object-center object-contain rounded-lg  transition-transform duration-300 ease-in-out w-full h-full cursor-pointer m-auto",
          alt: "photo",
          src: `${this.props.icon}`
        }
      ) }) : null,
      /* @__PURE__ */ u.jsx("div", { className: "text-sm text-red-600 dark:text-white font-poppinsRegular", children: j.isEmptyOrNull(this.props.errormessage) ? I.ERROR_MESSAGE : this.props.errormessage }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex w-full justify-center items-center space-x-4", children: [
        this.props.onRetry != null ? /* @__PURE__ */ u.jsx("div", { className: "bg-primary text-white px-6 py-3 rounded-full text-xs uppercase cursor-pointer border hover:border-black dark:bg-darkDialogBackground hover:bg-white hover:text-black transition-all", onClick: this.props.onRetry, children: "Retry" }) : null,
        this.props.onCancel != null ? /* @__PURE__ */ u.jsx("div", { className: "bg-red-500 text-white px-6 py-3 border border-red-500 rounded-full text-xs uppercase cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all", onClick: this.props.onCancel, children: "Cancel" }) : null
      ] })
    ] }) });
  }
}
class Tb extends me {
  constructor(r) {
    super(r), this.state = {};
  }
  render() {
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full items-center justify-center dark:text-white space-y-5", children: /* @__PURE__ */ u.jsxs("div", { className: "flex w-full flex-col h-96 justify-center items-center", children: [
      j.isEmptyOrNull(this.props.image) ? null : /* @__PURE__ */ u.jsx("div", { className: "w-24", children: /* @__PURE__ */ u.jsx("img", { className: "object-center object-cover w-full h-full cursor-pointer m-auto", alt: "photo", src: `${this.props.image}` }) }),
      /* @__PURE__ */ u.jsx("div", { className: "text-sm dark:text-white font-poppinsRegular", children: this.props.message })
    ] }) }) });
  }
}
class Ab extends me {
  constructor(t) {
    super(t);
    y(this, "handleClose", () => {
      this.props.onClose();
    });
    this.state = {
      modal: null
    };
  }
  render() {
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "fixed z-[4000] inset-0 overflow-y-auto font-poppinsRegular", children: /* @__PURE__ */ u.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ u.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ u.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ u.jsx(Ci, { onClickOutside: this.handleClose, children: /* @__PURE__ */ u.jsx("div", { className: `inline-block align-bottom font-poppinsRegular px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle ${j.isEmptyOrNull(this.props.className) ? " sm:max-w-lg w-full sm:p-6" : this.props.className}`, children: this.props.hasRequest ? /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full h-48 justify-center items-center", children: [
        /* @__PURE__ */ u.jsx(
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
            children: /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ u.jsx(
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
        /* @__PURE__ */ u.jsxs("div", { children: [
          this.props.action_label !== null && this.props.action_label !== void 0 ? this.props.action_label : "creating",
          " ...."
        ] })
      ] }) }) : /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ u.jsx("div", { className: "relative sm:flex sm:items-start items-center", children: this.props.children }) }) }) }) })
    ] }) }) }) });
  }
}
var Ha = function(e, r) {
  return Ha = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, Ha(e, r);
};
function vr(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ha(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var _ = function() {
  return _ = Object.assign || function(r) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a]);
    }
    return r;
  }, _.apply(this, arguments);
};
function Hr(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]]);
  return t;
}
function Fo(e, r, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function o(d) {
      try {
        c(n.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        c(n.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(o, l);
    }
    c((n = n.apply(e, r || [])).next());
  });
}
function $o(e, r) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = o(0), s.throw = o(1), s.return = o(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (t = 0)), t; ) try {
      if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = c;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(c);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = r.call(e, t);
    } catch (d) {
      c = [6, d], i = 0;
    } finally {
      n = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function za(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ne(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, a = [], s;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function fv() {
  for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
  for (var n = Array(e), i = 0, r = 0; r < t; r++)
    for (var a = arguments[r], s = 0, o = a.length; s < o; s++, i++)
      n[i] = a[s];
  return n;
}
function qt(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, i = r.length, a; n < i; n++)
    (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return e.concat(a || Array.prototype.slice.call(r));
}
function It(e) {
  return typeof e == "function";
}
function qc(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var ta = qc(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Va(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var Ai = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, i, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var o = za(s), l = o.next(); !l.done; l = o.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (v) {
            r = { error: v };
          } finally {
            try {
              l && !l.done && (t = o.return) && t.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (It(d))
        try {
          d();
        } catch (v) {
          a = v instanceof ta ? v.errors : [v];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = za(h), m = f.next(); !m.done; m = f.next()) {
            var p = m.value;
            try {
              Uo(p);
            } catch (v) {
              a = a ?? [], v instanceof ta ? a = qt(qt([], Ne(a)), Ne(v.errors)) : a.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new ta(a);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        Uo(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && Va(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && Va(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), Gc = Ai.EMPTY;
function Xc(e) {
  return e instanceof Ai || e && "closed" in e && It(e.remove) && It(e.add) && It(e.unsubscribe);
}
function Uo(e) {
  It(e) ? e() : e.unsubscribe();
}
var Kc = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, pv = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, qt([e, r], Ne(t)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function mv(e) {
  pv.setTimeout(function() {
    throw e;
  });
}
function Bo() {
}
function ii(e) {
  e();
}
var Jc = function(e) {
  vr(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, Xc(t) && t.add(n)) : n.destination = xv, n;
  }
  return r.create = function(t, n, i) {
    return new Ya(t, n, i);
  }, r.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
}(Ai), vv = Function.prototype.bind;
function ra(e, r) {
  return vv.call(e, r);
}
var gv = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        Yn(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        Yn(n);
      }
    else
      Yn(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        Yn(t);
      }
  }, e;
}(), Ya = function(e) {
  vr(r, e);
  function r(t, n, i) {
    var a = e.call(this) || this, s;
    if (It(t) || !t)
      s = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      };
    else {
      var o;
      a && Kc.useDeprecatedNextContext ? (o = Object.create(t), o.unsubscribe = function() {
        return a.unsubscribe();
      }, s = {
        next: t.next && ra(t.next, o),
        error: t.error && ra(t.error, o),
        complete: t.complete && ra(t.complete, o)
      }) : s = t;
    }
    return a.destination = new gv(s), a;
  }
  return r;
}(Jc);
function Yn(e) {
  mv(e);
}
function yv(e) {
  throw e;
}
var xv = {
  closed: !0,
  next: Bo,
  error: yv,
  complete: Bo
}, bv = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wv(e) {
  return e;
}
function Ev(e) {
  return e.length === 0 ? wv : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var Wo = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, a = Sv(r) ? r : new Ya(r, t, n);
    return ii(function() {
      var s = i, o = s.operator, l = s.source;
      a.add(o ? o.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = Ho(t), new t(function(i, a) {
      var s = new Ya({
        next: function(o) {
          try {
            r(o);
          } catch (l) {
            a(l), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      n.subscribe(s);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[bv] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return Ev(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = Ho(r), new r(function(n, i) {
      var a;
      t.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return n(a);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function Ho(e) {
  var r;
  return (r = e ?? Kc.Promise) !== null && r !== void 0 ? r : Promise;
}
function Cv(e) {
  return e && It(e.next) && It(e.error) && It(e.complete);
}
function Sv(e) {
  return e && e instanceof Jc || Cv(e) && Xc(e);
}
var Nv = qc(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Zc = function(e) {
  vr(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new zo(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Nv();
  }, r.prototype.next = function(t) {
    var n = this;
    ii(function() {
      var i, a;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = za(n.currentObservers), o = s.next(); !o.done; o = s.next()) {
            var l = o.value;
            l.next(t);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            o && !o.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var n = this;
    ii(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    ii(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, i = this, a = i.hasError, s = i.isStopped, o = i.observers;
    return a || s ? Gc : (this.currentObservers = null, o.push(t), new Ai(function() {
      n.currentObservers = null, Va(o, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, a = n.thrownError, s = n.isStopped;
    i ? t.error(a) : s && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new Wo();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new zo(t, n);
  }, r;
}(Wo), zo = function(e) {
  vr(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return r.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, r.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : Gc;
  }, r;
}(Zc);
const Qr = new Zc(), Cs = {
  fileViewer: (e, r) => Qr.next({ data: e, type: r }),
  sendData: (e, r) => Qr.next({ data: e, type: r }),
  send: (e) => Qr.next({ type: e }),
  clearMessages: () => Qr.next({}),
  getSubscription: () => Qr.asObservable()
};
class Vo extends me {
  constructor(t) {
    super(t);
    y(this, "subscription");
    y(this, "handleRequest", async () => {
      const { data: t } = this.state, { url: n } = this.props;
      if (!n) {
        this.handleAlert(I.ERROR);
        return;
      }
      try {
        const i = new FormData();
        Object.keys(t).forEach((s) => {
          i.append(s, t[s]);
        }), this.setState({ hasRequest: !0, response: "" });
        const a = await he.post(n, i, {
          headers: {
            "X-CSRFToken": Pe.getCookie("csrftoken"),
            Authorization: `Token ${Pe.get(I.ACCESS_TOKEN)}`
          }
        });
        this.handleAlert(a.data.success ? I.SUCCESS : I.ERROR);
      } catch {
        this.handleAlert(I.ERROR);
      }
    });
    y(this, "handleAlert", (t = I.ERROR) => {
      this.setState({ hasRequest: !1, response: t });
    });
    y(this, "renderTableData", () => {
      const { data: t } = this.state, { headers: n = [] } = this.props;
      return n.map((i, a) => {
        const s = j.toStringDefault(t[i], "");
        return /* @__PURE__ */ u.jsx("td", { className: "px-6 py-3 ", children: j.toString(i).toLowerCase() !== "action" ? /* @__PURE__ */ u.jsx("div", { className: "w-full line-clamp-1", title: s, children: s }) : /* @__PURE__ */ u.jsx("span", { className: "flex w-full justify-center text-xs", children: this.state.hasRequest ? /* @__PURE__ */ u.jsxs(
          "svg",
          {
            role: "status",
            className: "inline z-0 mr-3 w-5 h-5 dark:text-white animate-spin",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "#E5E7EB"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentColor"
                }
              )
            ]
          }
        ) : j.isEmptyOrNull(this.state.response) ? null : this.state.response === I.ERROR ? /* @__PURE__ */ u.jsx(
          "svg",
          {
            viewBox: "0 0 30 30",
            fill: "currentColor",
            className: "w-8 h-8 text-red-600 cursor-pointer",
            onClick: this.handleRequest,
            children: /* @__PURE__ */ u.jsx("path", { d: "..." })
          }
        ) : /* @__PURE__ */ u.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-5 h-5 text-green-600",
            children: /* @__PURE__ */ u.jsx("path", { d: "..." })
          }
        ) }) }, a);
      });
    });
    this.state = {
      hasRequest: !1,
      response: "",
      data: t.data || {}
      // Initialize state with props or an empty object
    };
  }
  componentDidMount() {
    this.subscription = Cs.getSubscription().subscribe((t) => {
      (t == null ? void 0 : t.type) === I.DATASETTABLE_REQUEST && this.handleRequest();
    });
  }
  componentWillUnmount() {
    this.subscription && this.subscription.unsubscribe();
  }
  render() {
    const { isLoading: t } = this.props;
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: t ? /* @__PURE__ */ u.jsx("tr", { children: /* @__PURE__ */ u.jsx("td", { children: "Loading..." }) }) : /* @__PURE__ */ u.jsx("tr", { className: `text-sm cursor-pointer hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:text-black ${this.props.background} transition-all ease-in-out duration-150`, children: this.renderTableData() }) });
  }
}
class Rb extends me {
  constructor(t) {
    super(t);
    y(this, "toggleAccordion", () => {
      this.setState((t) => ({
        isOpen: !t.isOpen
      }));
    });
    this.state = {
      isOpen: !1
    };
  }
  render() {
    const { isOpen: t } = this.state, { children: n, accordionHeader: i, className: a } = this.props;
    return /* @__PURE__ */ u.jsx("div", { className: "flex flex-col w-full font-poppinsRegular", children: /* @__PURE__ */ u.jsxs("div", { className: `rounded transition-all duration-300 ${t ? "mb-4" : ""}`, children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: `relative ${a}`,
          onClick: this.toggleAccordion,
          children: [
            /* @__PURE__ */ u.jsx("div", { className: "w-full", children: i(t) }),
            /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 justify-center right-0 h-full items-center", children: /* @__PURE__ */ u.jsx("div", { className: "flex h-full w-full mr-3 items-center justify-center", children: /* @__PURE__ */ u.jsx(
              "svg",
              {
                className: `h-6 w-6 m-auto transition-transform transform ${t ? "rotate-180" : ""}`,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ u.jsx("path", { fill: "currentColor", d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              }
            ) }) })
          ]
        }
      ),
      t && /* @__PURE__ */ u.jsx("div", { className: "submenu-enter submenu-enter-active", children: n })
    ] }) });
  }
}
const Qc = Ad(null), jb = () => {
  const e = Rd(Qc);
  if (!e)
    throw new Error("DesmyToast must be used within a ToastProvider");
  return e;
}, _b = ({ children: e }) => {
  const [r, t] = ke([]), n = (a, s = 5e3) => {
    const o = Date.now();
    t((l) => [...l, { id: o, component: a }]), setTimeout(() => i(o), s);
  }, i = (a) => {
    t((s) => s.filter((o) => o.id !== a));
  };
  return /* @__PURE__ */ u.jsxs(Qc.Provider, { value: { open: n, close: i }, children: [
    e,
    /* @__PURE__ */ u.jsx("div", { className: "space-y-2 absolute bottom-4 right-4", children: r.map(({ id: a, component: s }) => /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ u.jsx("button", { onClick: () => i(a), className: "absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60", children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ u.jsx("path", { d: "M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" }) }) }),
      s
    ] }, a)) })
  ] });
};
var eu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var a = "", s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        o && (a = i(a, n(o)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return t.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var s = "";
      for (var o in a)
        r.call(a, o) && a[o] && (s = i(s, o));
      return s;
    }
    function i(a, s) {
      return s ? a ? a + " " + s : a + s : a;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(eu);
var Ov = eu.exports;
const ie = /* @__PURE__ */ An(Ov);
class kb extends me {
  constructor(t) {
    super(t);
    y(this, "setActiveTab", (t) => {
      this.setState({ activeTabIndex: t });
    });
    this.state = {
      activeTabIndex: 0
    };
  }
  render() {
    const { tabs: t, children: n } = this.props, { activeTabIndex: i } = this.state;
    return /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ u.jsx("div", { className: "flex border-b border-gray-300", children: t.map((a, s) => /* @__PURE__ */ u.jsxs(
        "div",
        {
          onClick: () => this.setActiveTab(s),
          className: ie(
            "py-2 px-4 cursor-pointer text-sm font-medium focus:outline-none transition-all flex items-center",
            {
              "border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white": i === s,
              "text-gray-600 hover:text-blue-500 dark:hover:text-white": i !== s
            }
          ),
          children: [
            a.icon && /* @__PURE__ */ u.jsx("span", { className: "mr-2", children: a.icon }),
            a.label
          ]
        },
        s
      )) }),
      /* @__PURE__ */ u.jsx("div", { className: "mt-4", children: n[i] })
    ] }) });
  }
}
class Tv extends me {
  constructor(t) {
    super(t);
    y(this, "startUpload", () => {
      this.setState({ uploading: !0, error: !1, errorMessage: "" }, () => {
        this.uploadNext();
      });
    });
    y(this, "completeUpload", async () => {
      var n;
      const { data: t } = this.props;
      try {
        const i = await he.post(`${t == null ? void 0 : t.complete_url}`, null, {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${(n = this.props.data) == null ? void 0 : n.token}`
          }
        });
        i.data.success ? (console.log("Upload process completed successfully."), this.props.onClose()) : this.setState({ error: !0, errorMessage: i.data.message });
      } catch {
        this.setState({ error: !0, errorMessage: "Completion request failed" });
      }
    });
    y(this, "uploadNext", async () => {
      var a, s;
      const { data: t } = this.props, n = t == null ? void 0 : t.datalist, { currentIndex: i } = this.state;
      if (i >= n.length) {
        this.setState({ uploading: !1 }, () => {
          var o;
          ((o = this.props.data) == null ? void 0 : o.complete_url) != null ? this.completeUpload() : this.props.onClose();
        });
        return;
      }
      try {
        const o = new FormData();
        Object.entries(n[i]).forEach(([c, d]) => {
          o.append(c, d);
        });
        const l = he.CancelToken.source();
        this.setState({ cancelTokenSource: l }), he.post((a = this.props.data) == null ? void 0 : a.url, o, {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`,
            Authorization: `Token ${(s = this.props.data) == null ? void 0 : s.token}`
          },
          cancelToken: l.token
        }).then((c) => {
          if (c.data.success) {
            const d = i + 1, h = d / n.length * 100;
            this.setState(
              {
                currentIndex: d,
                progress: h
              },
              () => {
                this.uploadNext();
              }
            );
          } else
            this.setState({ uploading: !1, error: !0, errorMessage: c.data.message });
        }).catch((c) => {
          var d, h;
          he.isCancel(c) ? console.log("Upload canceled") : this.setState({ uploading: !1, error: !0, errorMessage: ((h = (d = c.response) == null ? void 0 : d.data) == null ? void 0 : h.message) || "Upload failed" });
        });
      } catch (o) {
        console.log(o), this.setState({ uploading: !1, error: !0, errorMessage: o.message });
      }
    });
    y(this, "resumeUpload", () => {
      this.setState({ error: !1, uploading: !0, errorMessage: "" }, () => {
        this.uploadNext();
      });
    });
    y(this, "cancelUpload", () => {
      const { cancelTokenSource: t } = this.state;
      t && t.cancel("Upload canceled by user"), this.setState({ uploading: !1 }, () => {
        this.props.onClose();
      });
    });
    y(this, "skipUpload", () => {
      var a;
      const { currentIndex: t } = this.state, n = t + 1, i = n / ((a = this.props.data) == null ? void 0 : a.datalist.length) * 100;
      this.setState(
        {
          currentIndex: n,
          progress: i,
          error: !1,
          errorMessage: ""
        },
        () => {
          this.uploadNext();
        }
      );
    });
    this.state = {
      currentIndex: 0,
      progress: 0,
      uploading: !1,
      error: !1,
      errorMessage: "",
      cancelTokenSource: null
    };
  }
  componentDidMount() {
    this.startUpload();
  }
  render() {
    const { uploading: t, progress: n, error: i, errorMessage: a, currentIndex: s } = this.state, { data: o } = this.props, l = o == null ? void 0 : o.datalist, c = l && l[s] ? l[s][o.key_name ?? "name"] : "Unknown", d = l ? l.length : 0;
    return /* @__PURE__ */ u.jsx(Si, { in: !0, appear: !0, timeout: 500, classNames: "fade", children: /* @__PURE__ */ u.jsx("div", { className: "my-5", children: /* @__PURE__ */ u.jsxs("div", { className: "bg-white dark:bg-darkDialogBackground dark:text-white relative border dark:border-darkPrimaryBorder shadow-md inset-1 rounded-lg p-6 w-full max-w-md", children: [
      /* @__PURE__ */ u.jsx(
        "svg",
        {
          onClick: this.cancelUpload,
          viewBox: "0 0 512 512",
          fill: "currentColor",
          className: "absolute top-2 right-5 text-red-500 cursor-pointer w-5 h-5 flex-shrink-0",
          children: /* @__PURE__ */ u.jsx("path", { d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" })
        }
      ),
      /* @__PURE__ */ u.jsx("h2", { className: "w-full line-clamp-1 text-lg font-semibold mb-4", children: s < d ? (o == null ? void 0 : o.title) ?? "Upload Progress" : "Finalizing Uploads" }),
      /* @__PURE__ */ u.jsx("div", { className: `w-full ${i ? "bg-red-100 dark:bg-red-300" : "bg-gray-200 dark:bg-darkBackground"} rounded-full h-2 mb-4`, children: /* @__PURE__ */ u.jsx(
        "div",
        {
          className: `h-2 rounded-full transition-all ease-in-out duration-150 ${i ? "bg-red-500 dark:bg-red-600" : s < d ? "bg-blue-500 dark:bg-white" : "bg-blue-300 dark:bg-white animate-pulse"}`,
          style: { width: s < d ? `${n}%` : "100%", transition: s < d ? "width 0.2s ease" : "none" }
        }
      ) }),
      /* @__PURE__ */ u.jsxs("div", { className: `${i ? "text-red-500" : "text-gray-700 dark:text-white"} space-y-1`, children: [
        s < d && /* @__PURE__ */ u.jsxs("div", { className: "flex w-full justify-between items-center text-xs", children: [
          /* @__PURE__ */ u.jsx("div", { children: c }),
          /* @__PURE__ */ u.jsxs("div", { className: "font-bold", children: [
            "(",
            s + 1,
            "/",
            d,
            ")"
          ] })
        ] }),
        i && /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-between items-center text-xs mb-4", children: /* @__PURE__ */ u.jsx("div", { children: a }) })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "flex justify-end mt-2", children: [
        s < d && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "text-xs bg-red-300 text-red-600 px-5 py-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white mr-2",
            onClick: this.skipUpload,
            children: "Skip"
          }
        ),
        i ? /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "text-xs bg-red-300 text-red-600 px-5 py-3 rounded-full cursor-pointer hover:bg-red-600 hover:text-white mr-2",
            onClick: this.resumeUpload,
            children: "Retry"
          }
        ) : !t && s < d && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "text-xs bg-blue-300 text-blue-600 dark:bg-white dark:text-black dark:hover:bg-white px-5 py-3 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white mr-2",
            onClick: this.startUpload,
            children: "Start Upload"
          }
        )
      ] })
    ] }) }) });
  }
}
class Mb extends me {
  constructor(t) {
    super(t);
    y(this, "modalContainerRef");
    y(this, "subscription");
    y(this, "addNewModal", (t) => {
      const n = this.state.modalId;
      this.setState(
        (i) => ({
          modals: [{ id: n, data: t || [...i.dataList] }, ...i.modals],
          modalId: i.modalId + 1
        }),
        () => {
          this.modalContainerRef.current && this.modalContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      );
    });
    y(this, "closeModal", (t) => {
      this.setState((n) => ({
        modals: n.modals.filter((i) => i.id !== t)
      }));
    });
    this.state = {
      dataList: [],
      modals: [],
      modalId: 1
    }, this.modalContainerRef = T.createRef();
  }
  async componentDidMount() {
    this.subscription = Cs.getSubscription().subscribe((t) => {
      t.type !== void 0 && t.type === I.UPLOAD_MANAGER_REQUEST && this.addNewModal(t.data);
    });
  }
  componentWillUnmount() {
    this.subscription && this.subscription.unsubscribe();
  }
  render() {
    const { modals: t } = this.state, { className: n } = this.props;
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: this.modalContainerRef,
        className: `fixed right-2 bottom-6 z-[10000] w-full md:w-[500px] lg:w-[500px] max-h-[90vh]  overflow-y-auto ${n}`,
        style: { scrollbarWidth: "thin", scrollbarColor: "#888 #f5f5f5" },
        children: t.map((i) => /* @__PURE__ */ u.jsx("div", { className: "w-full mb-4", children: /* @__PURE__ */ u.jsx(Tv, { data: i.data, onClose: () => this.closeModal(i.id) }) }, i.id))
      }
    );
  }
}
const Av = {
  createDocument: function(r) {
    return new DOMParser().parseFromString(r.trim(), "text/xml");
  }
};
var Xe = Uint8Array, ir = Uint16Array, tu = Uint32Array, ru = new Xe([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), nu = new Xe([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Rv = new Xe([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), iu = function(e, r) {
  for (var t = new ir(31), n = 0; n < 31; ++n)
    t[n] = r += 1 << e[n - 1];
  for (var i = new tu(t[30]), n = 1; n < 30; ++n)
    for (var a = t[n]; a < t[n + 1]; ++a)
      i[a] = a - t[n] << 5 | n;
  return [t, i];
}, au = iu(ru, 2), su = au[0], jv = au[1];
su[28] = 258, jv[258] = 28;
var _v = iu(nu, 0), kv = _v[0], qa = new ir(32768);
for (var Se = 0; Se < 32768; ++Se) {
  var Wt = (Se & 43690) >>> 1 | (Se & 21845) << 1;
  Wt = (Wt & 52428) >>> 2 | (Wt & 13107) << 2, Wt = (Wt & 61680) >>> 4 | (Wt & 3855) << 4, qa[Se] = ((Wt & 65280) >>> 8 | (Wt & 255) << 8) >>> 1;
}
var un = function(e, r, t) {
  for (var n = e.length, i = 0, a = new ir(r); i < n; ++i)
    e[i] && ++a[e[i] - 1];
  var s = new ir(r);
  for (i = 0; i < r; ++i)
    s[i] = s[i - 1] + a[i - 1] << 1;
  var o;
  if (t) {
    o = new ir(1 << r);
    var l = 15 - r;
    for (i = 0; i < n; ++i)
      if (e[i])
        for (var c = i << 4 | e[i], d = r - e[i], h = s[e[i] - 1]++ << d, f = h | (1 << d) - 1; h <= f; ++h)
          o[qa[h] >>> l] = c;
  } else
    for (o = new ir(n), i = 0; i < n; ++i)
      e[i] && (o[i] = qa[s[e[i] - 1]++] >>> 15 - e[i]);
  return o;
}, Pn = new Xe(288);
for (var Se = 0; Se < 144; ++Se)
  Pn[Se] = 8;
for (var Se = 144; Se < 256; ++Se)
  Pn[Se] = 9;
for (var Se = 256; Se < 280; ++Se)
  Pn[Se] = 7;
for (var Se = 280; Se < 288; ++Se)
  Pn[Se] = 8;
var ou = new Xe(32);
for (var Se = 0; Se < 32; ++Se)
  ou[Se] = 5;
var Mv = /* @__PURE__ */ un(Pn, 9, 1), Pv = /* @__PURE__ */ un(ou, 5, 1), na = function(e) {
  for (var r = e[0], t = 1; t < e.length; ++t)
    e[t] > r && (r = e[t]);
  return r;
}, ut = function(e, r, t) {
  var n = r / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (r & 7) & t;
}, ia = function(e, r) {
  var t = r / 8 | 0;
  return (e[t] | e[t + 1] << 8 | e[t + 2] << 16) >> (r & 7);
}, Dv = function(e) {
  return (e + 7) / 8 | 0;
}, Ss = function(e, r, t) {
  (r == null || r < 0) && (r = 0), (t == null || t > e.length) && (t = e.length);
  var n = new (e.BYTES_PER_ELEMENT == 2 ? ir : e.BYTES_PER_ELEMENT == 4 ? tu : Xe)(t - r);
  return n.set(e.subarray(r, t)), n;
}, Iv = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], dt = function(e, r, t) {
  var n = new Error(r || Iv[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, dt), !t)
    throw n;
  return n;
}, Lv = function(e, r, t) {
  var n = e.length;
  if (!n || t && t.f && !t.l)
    return r || new Xe(0);
  var i = !r || t, a = !t || t.i;
  t || (t = {}), r || (r = new Xe(n * 3));
  var s = function(G) {
    var J = r.length;
    if (G > J) {
      var ee = new Xe(Math.max(J * 2, G));
      ee.set(r), r = ee;
    }
  }, o = t.f || 0, l = t.p || 0, c = t.b || 0, d = t.l, h = t.d, f = t.m, m = t.n, p = n * 8;
  do {
    if (!d) {
      o = ut(e, l, 1);
      var v = ut(e, l + 1, 3);
      if (l += 3, v)
        if (v == 1)
          d = Mv, h = Pv, f = 9, m = 5;
        else if (v == 2) {
          var E = ut(e, l, 31) + 257, S = ut(e, l + 10, 15) + 4, C = E + ut(e, l + 5, 31) + 1;
          l += 14;
          for (var D = new Xe(C), R = new Xe(19), N = 0; N < S; ++N)
            R[Rv[N]] = ut(e, l + N * 3, 7);
          l += S * 3;
          for (var M = na(R), Z = (1 << M) - 1, Q = un(R, M, 1), N = 0; N < C; ) {
            var te = Q[ut(e, l, Z)];
            l += te & 15;
            var g = te >>> 4;
            if (g < 16)
              D[N++] = g;
            else {
              var z = 0, Y = 0;
              for (g == 16 ? (Y = 3 + ut(e, l, 3), l += 2, z = D[N - 1]) : g == 17 ? (Y = 3 + ut(e, l, 7), l += 3) : g == 18 && (Y = 11 + ut(e, l, 127), l += 7); Y--; )
                D[N++] = z;
            }
          }
          var V = D.subarray(0, E), W = D.subarray(E);
          f = na(V), m = na(W), d = un(V, f, 1), h = un(W, m, 1);
        } else
          dt(1);
      else {
        var g = Dv(l) + 4, x = e[g - 4] | e[g - 3] << 8, w = g + x;
        if (w > n) {
          a && dt(0);
          break;
        }
        i && s(c + x), r.set(e.subarray(g, w), c), t.b = c += x, t.p = l = w * 8, t.f = o;
        continue;
      }
      if (l > p) {
        a && dt(0);
        break;
      }
    }
    i && s(c + 131072);
    for (var K = (1 << f) - 1, $ = (1 << m) - 1, X = l; ; X = l) {
      var z = d[ia(e, l) & K], O = z >>> 4;
      if (l += z & 15, l > p) {
        a && dt(0);
        break;
      }
      if (z || dt(2), O < 256)
        r[c++] = O;
      else if (O == 256) {
        X = l, d = null;
        break;
      } else {
        var k = O - 254;
        if (O > 264) {
          var N = O - 257, L = ru[N];
          k = ut(e, l, (1 << L) - 1) + su[N], l += L;
        }
        var U = h[ia(e, l) & $], B = U >>> 4;
        U || dt(3), l += U & 15;
        var W = kv[B];
        if (B > 3) {
          var L = nu[B];
          W += ia(e, l) & (1 << L) - 1, l += L;
        }
        if (l > p) {
          a && dt(0);
          break;
        }
        i && s(c + 131072);
        for (var H = c + k; c < H; c += 4)
          r[c] = r[c - W], r[c + 1] = r[c + 1 - W], r[c + 2] = r[c + 2 - W], r[c + 3] = r[c + 3 - W];
        c = H;
      }
    }
    t.l = d, t.p = X, t.b = c, t.f = o, d && (o = 1, t.m = f, t.d = h, t.n = m);
  } while (!o);
  return c == r.length ? r : Ss(r, 0, c);
}, Fv = /* @__PURE__ */ new Xe(0), St = function(e, r) {
  return e[r] | e[r + 1] << 8;
}, ht = function(e, r) {
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
}, aa = function(e, r) {
  return ht(e, r) + ht(e, r + 4) * 4294967296;
};
function $v(e, r) {
  return Lv(e, r);
}
var Ga = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Uv = 0;
try {
  Ga.decode(Fv, { stream: !0 }), Uv = 1;
} catch {
}
var Bv = function(e) {
  for (var r = "", t = 0; ; ) {
    var n = e[t++], i = (n > 127) + (n > 223) + (n > 239);
    if (t + i > e.length)
      return [r, Ss(e, t - 1)];
    i ? i == 3 ? (n = ((n & 15) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536, r += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : i & 1 ? r += String.fromCharCode((n & 31) << 6 | e[t++] & 63) : r += String.fromCharCode((n & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) : r += String.fromCharCode(n);
  }
};
function lu(e, r) {
  if (r) {
    for (var t = "", n = 0; n < e.length; n += 16384)
      t += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
    return t;
  } else {
    if (Ga)
      return Ga.decode(e);
    var i = Bv(e), a = i[0], s = i[1];
    return s.length && dt(8), a;
  }
}
var Wv = function(e, r) {
  return r + 30 + St(e, r + 26) + St(e, r + 28);
}, Hv = function(e, r, t) {
  var n = St(e, r + 28), i = lu(e.subarray(r + 46, r + 46 + n), !(St(e, r + 8) & 2048)), a = r + 46 + n, s = ht(e, r + 20), o = t && s == 4294967295 ? zv(e, a) : [s, ht(e, r + 24), ht(e, r + 42)], l = o[0], c = o[1], d = o[2];
  return [St(e, r + 10), l, c, i, a + St(e, r + 30) + St(e, r + 32), d];
}, zv = function(e, r) {
  for (; St(e, r) != 1; r += 4 + St(e, r + 2))
    ;
  return [aa(e, r + 12), aa(e, r + 4), aa(e, r + 20)];
};
function Vv(e, r) {
  for (var t = {}, n = e.length - 22; ht(e, n) != 101010256; --n)
    (!n || e.length - n > 65558) && dt(13);
  var i = St(e, n + 8);
  if (!i)
    return {};
  var a = ht(e, n + 16), s = a == 4294967295 || i == 65535;
  if (s) {
    var o = ht(e, n - 12);
    s = ht(e, o) == 101075792, s && (i = ht(e, o + 32), a = ht(e, o + 48));
  }
  for (var l = 0; l < i; ++l) {
    var c = Hv(e, a, s), d = c[0], h = c[1], f = c[2], m = c[3], p = c[4], v = c[5], g = Wv(e, v);
    a = p, d ? d == 8 ? t[m] = $v(e.subarray(g, g + h), new Xe(f)) : dt(14, "unknown compression type " + d) : t[m] = Ss(e, g, g + h);
  }
  return t;
}
function Yv(e) {
  return e instanceof File || e instanceof Blob ? e.arrayBuffer().then(sa) : sa(e);
}
function sa(e) {
  var r = new Uint8Array(e), t = Vv(r);
  return Promise.resolve(qv(t));
}
function qv(e) {
  for (var r = [], t = 0, n = Object.keys(e); t < n.length; t++) {
    var i = n[t];
    r[i] = lu(e[i]);
  }
  return r;
}
function Rt(e, r) {
  for (var t = 0; t < e.childNodes.length; ) {
    var n = e.childNodes[t];
    if (n.nodeType === 1 && fr(n) === r)
      return n;
    t++;
  }
}
function Dn(e, r) {
  for (var t = [], n = 0; n < e.childNodes.length; ) {
    var i = e.childNodes[n];
    i.nodeType === 1 && fr(i) === r && t.push(i), n++;
  }
  return t;
}
function fi(e, r, t) {
  for (var n = 0; n < e.childNodes.length; ) {
    var i = e.childNodes[n];
    r ? i.nodeType === 1 && fr(i) === r && t(i, n) : t(i, n), n++;
  }
}
function Gv(e, r, t) {
  var n = [];
  return fi(e, r, function(i, a) {
    n.push(t(i, a));
  }), n;
}
var Xv = /.+\:/;
function fr(e) {
  return e.tagName.replace(Xv, "");
}
function cu(e) {
  if (e.nodeType !== 1)
    return e.textContent;
  for (var r = "<" + fr(e), t = 0; t < e.attributes.length; )
    r += " " + e.attributes[t].name + '="' + e.attributes[t].value + '"', t++;
  r += ">";
  for (var n = 0; n < e.childNodes.length; )
    r += cu(e.childNodes[n]), n++;
  return r += "</" + fr(e) + ">", r;
}
function Kv(e) {
  var r = e.documentElement, t = Rt(r, "sheetData"), n = [];
  return fi(t, "row", function(i) {
    fi(i, "c", function(a) {
      n.push(a);
    });
  }), n;
}
function Jv(e, r) {
  return Rt(r, "v");
}
function Zv(e, r) {
  if (r.firstChild && fr(r.firstChild) === "is" && r.firstChild.firstChild && fr(r.firstChild.firstChild) === "t")
    return r.firstChild.firstChild.textContent;
}
function Qv(e) {
  var r = e.documentElement, t = Rt(r, "dimension");
  if (t)
    return t.getAttribute("ref");
}
function e0(e) {
  var r = e.documentElement, t = Rt(r, "cellStyleXfs");
  return t ? Dn(t, "xf") : [];
}
function t0(e) {
  var r = e.documentElement, t = Rt(r, "cellXfs");
  return t ? Dn(t, "xf") : [];
}
function r0(e) {
  var r = e.documentElement, t = Rt(r, "numFmts");
  return t ? Dn(t, "numFmt") : [];
}
function n0(e) {
  var r = e.documentElement;
  return Gv(r, "si", function(t) {
    var n = Rt(t, "t");
    if (n)
      return n.textContent;
    var i = "";
    return fi(t, "r", function(a) {
      i += Rt(a, "t").textContent;
    }), i;
  });
}
function i0(e) {
  var r = e.documentElement;
  return Rt(r, "workbookPr");
}
function a0(e) {
  var r = e.documentElement;
  return Dn(r, "Relationship");
}
function s0(e) {
  var r = e.documentElement, t = Rt(r, "sheets");
  return Dn(t, "sheet");
}
function o0(e, r) {
  var t = r.createDocument(e), n = {}, i = i0(t);
  i && i.getAttribute("date1904") === "1" && (n.epoch1904 = !0), n.sheets = [];
  var a = function(o) {
    o.getAttribute("name") && n.sheets.push({
      id: o.getAttribute("sheetId"),
      name: o.getAttribute("name"),
      relationId: o.getAttribute("r:id")
    });
  };
  return s0(t).forEach(a), n;
}
function l0(e, r) {
  var t = r.createDocument(e), n = {
    sheets: {},
    sharedStrings: void 0,
    styles: void 0
  }, i = function(s) {
    var o = s.getAttribute("Target"), l = s.getAttribute("Type");
    switch (l) {
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":
        n.styles = oa(o);
        break;
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":
        n.sharedStrings = oa(o);
        break;
      case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":
        n.sheets[s.getAttribute("Id")] = oa(o);
        break;
    }
  };
  return a0(t).forEach(i), n;
}
function oa(e) {
  return e[0] === "/" ? e.slice(1) : "xl/" + e;
}
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yn(e);
}
function Yo(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function qo(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yo(Object(t), !0).forEach(function(n) {
      c0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yo(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function c0(e, r, t) {
  return r = u0(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function u0(e) {
  var r = d0(e, "string");
  return yn(r) === "symbol" ? r : String(r);
}
function d0(e, r) {
  if (yn(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (yn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function h0(e, r) {
  if (!e)
    return {};
  var t = r.createDocument(e), n = e0(t).map(la), i = r0(t).map(f0).reduce(function(s, o) {
    return s[o.id] = o, s;
  }, []), a = function(o) {
    return o.hasAttribute("xfId") ? qo(qo({}, n[o.xfId]), la(o, i)) : la(o, i);
  };
  return t0(t).map(a);
}
function f0(e) {
  return {
    id: e.getAttribute("numFmtId"),
    template: e.getAttribute("formatCode")
  };
}
function la(e, r) {
  var t = {};
  if (e.hasAttribute("numFmtId")) {
    var n = e.getAttribute("numFmtId");
    r[n] ? t.numberFormat = r[n] : t.numberFormat = {
      id: n
    };
  }
  return t;
}
function p0(e, r) {
  return e ? n0(r.createDocument(e)) : [];
}
function uu(e, r) {
  r && r.epoch1904 && (e += 1462);
  var t = 70 * 365 + 19, n = 60 * 60 * 1e3;
  return new Date(Math.round((e - t) * 24 * n));
}
function m0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = v0(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v0(e, r) {
  if (e) {
    if (typeof e == "string") return Go(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Go(e, r);
  }
}
function Go(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function g0(e, r, t) {
  if (e) {
    var n = r[e];
    if (!n)
      throw new Error("Cell style not found: ".concat(e));
    if (!n.numberFormat)
      return !1;
    if (
      // Whether it's a "number format" that's conventionally used for storing date timestamps.
      y0.indexOf(Number(n.numberFormat.id)) >= 0 || // Whether it's a "number format" that uses a "formatting template"
      // that the developer is certain is a date formatting template.
      t.dateFormat && n.numberFormat.template === t.dateFormat || // Whether the "smart formatting template" feature is not disabled
      // and it has detected that it's a date formatting template by looking at it.
      t.smartDateParser !== !1 && n.numberFormat.template && w0(n.numberFormat.template)
    )
      return !0;
  }
}
var y0 = [14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 30, 36, 45, 46, 47, 50, 57], x0 = /^\[\$-414\]/, b0 = /;@$/;
function w0(e) {
  e = e.toLowerCase(), e = e.replace(x0, ""), e = e.replace(b0, "");
  for (var r = e.split(/\W+/), t = m0(r), n; !(n = t()).done; ) {
    var i = n.value;
    if (E0.indexOf(i) < 0)
      return !1;
  }
  return !0;
}
var E0 = [
  // Seconds (min two digits). Example: "05".
  "ss",
  // Minutes (min two digits). Example: "05". Could also be "Months". Weird.
  "mm",
  // Hours. Example: "1".
  "h",
  // Hours (min two digits). Example: "01".
  "hh",
  // "AM" part of "AM/PM". Lowercased just in case.
  "am",
  // "PM" part of "AM/PM". Lowercased just in case.
  "pm",
  // Day. Example: "1"
  "d",
  // Day (min two digits). Example: "01"
  "dd",
  // Month (numeric). Example: "1".
  "m",
  // Month (numeric, min two digits). Example: "01". Could also be "Minutes". Weird.
  "mm",
  // Month (shortened month name). Example: "Jan".
  "mmm",
  // Month (full month name). Example: "January".
  "mmmm",
  // Two-digit year. Example: "20".
  "yy",
  // Full year. Example: "2020".
  "yyyy",
  // I don't have any idea what "e" means.
  // It's used in "built-in" XLSX formats:
  // * 27 '[$-404]e/m/d';
  // * 36 '[$-404]e/m/d';
  // * 50 '[$-404]e/m/d';
  // * 57 '[$-404]e/m/d';
  "e"
];
function C0(e, r, t) {
  var n = t.getInlineStringValue, i = t.getInlineStringXml, a = t.getStyleId, s = t.styles, o = t.values, l = t.properties, c = t.options;
  switch (r || (r = "n"), r) {
    case "str":
      e = ca(e, c);
      break;
    case "inlineStr":
      if (e = n(), e === void 0)
        throw new Error('Unsupported "inline string" cell value structure: '.concat(i()));
      e = ca(e, c);
      break;
    case "s":
      var d = Number(e);
      if (isNaN(d))
        throw new Error('Invalid "shared" string index: '.concat(e));
      if (d >= o.length)
        throw new Error('An out-of-bounds "shared" string index: '.concat(e));
      e = o[d], e = ca(e, c);
      break;
    case "b":
      if (e === "1")
        e = !0;
      else if (e === "0")
        e = !1;
      else
        throw new Error('Unsupported "boolean" cell value: '.concat(e));
      break;
    case "z":
      e = void 0;
      break;
    case "e":
      e = S0(e);
      break;
    case "d":
      if (e === void 0)
        break;
      var h = new Date(e);
      if (isNaN(h.valueOf()))
        throw new Error('Unsupported "date" cell value: '.concat(e));
      e = h;
      break;
    case "n":
      if (e === void 0)
        break;
      var f = g0(a(), s, c);
      f ? (e = Xo(e), e = uu(e, l)) : e = (c.parseNumber || Xo)(e);
      break;
    default:
      throw new TypeError("Cell type not supported: ".concat(r));
  }
  return e === void 0 && (e = null), e;
}
function S0(e) {
  switch (e) {
    case 0:
      return "#NULL!";
    case 7:
      return "#DIV/0!";
    case 15:
      return "#VALUE!";
    case 23:
      return "#REF!";
    case 29:
      return "#NAME?";
    case 36:
      return "#NUM!";
    case 42:
      return "#N/A";
    case 43:
      return "#GETTING_DATA";
    default:
      return "#ERROR_".concat(e);
  }
}
function ca(e, r) {
  return r.trim !== !1 && (e = e.trim()), e === "" && (e = void 0), e;
}
function Xo(e) {
  var r = Number(e);
  if (isNaN(r))
    throw new Error('Invalid "numeric" cell value: '.concat(e));
  return r;
}
var N0 = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function O0(e) {
  var r = function(c, d) {
    return c - d;
  }, t = e.map(function(l) {
    return l.row;
  }).sort(r), n = e.map(function(l) {
    return l.column;
  }).sort(r), i = t[0], a = t[t.length - 1], s = n[0], o = n[n.length - 1];
  return [{
    row: i,
    column: s
  }, {
    row: a,
    column: o
  }];
}
function T0(e) {
  for (var r = 0, t = 0; t < e.length; )
    r *= 26, r += N0.indexOf(e[t]), t++;
  return r;
}
function du(e) {
  return e = e.split(/(\d+)/), [
    // Row.
    parseInt(e[1]),
    // Column.
    T0(e[0].trim())
  ];
}
function A0(e, r, t, n, i, a, s) {
  var o = du(e.getAttribute("r")), l = Jv(r, e), c = l && l.textContent, d;
  return e.hasAttribute("t") && (d = e.getAttribute("t")), {
    row: o[0],
    column: o[1],
    value: C0(c, d, {
      getInlineStringValue: function() {
        return Zv(r, e);
      },
      getInlineStringXml: function() {
        return cu(e);
      },
      getStyleId: function() {
        return e.getAttribute("s");
      },
      styles: i,
      values: n,
      properties: a,
      options: s
    })
  };
}
function R0(e, r, t, n, i, a) {
  var s = Kv(e);
  return s.length === 0 ? [] : s.map(function(o) {
    return A0(o, e, r, t, n, i, a);
  });
}
function j0(e, r) {
  return P0(e) || M0(e, r) || k0(e, r) || _0();
}
function _0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k0(e, r) {
  if (e) {
    if (typeof e == "string") return Ko(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ko(e, r);
  }
}
function Ko(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function M0(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, i, a, s, o = [], l = !0, c = !1;
    try {
      if (a = (t = t.call(e)).next, r !== 0) for (; !(l = (n = a.call(t)).done) && (o.push(n.value), o.length !== r); l = !0) ;
    } catch (d) {
      c = !0, i = d;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw i;
      }
    }
    return o;
  }
}
function P0(e) {
  if (Array.isArray(e)) return e;
}
function D0(e) {
  var r = Qv(e);
  if (r)
    return r = r.split(":").map(du).map(function(t) {
      var n = j0(t, 2), i = n[0], a = n[1];
      return {
        row: i,
        column: a
      };
    }), r.length === 1 && (r = [r[0], r[0]]), r;
}
function I0(e, r, t, n, i, a) {
  var s = r.createDocument(e), o = R0(s, r, t, n, i, a), l = D0(s) || O0(o);
  return {
    cells: o,
    dimensions: l
  };
}
function L0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = F0(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F0(e, r) {
  if (e) {
    if (typeof e == "string") return Jo(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Jo(e, r);
  }
}
function Jo(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function $0(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = r.rowIndexMap, n = r.accessor, i = n === void 0 ? function(h) {
    return h;
  } : n, a = r.onlyTrimAtTheEnd, s = e.length - 1; s >= 0; ) {
    for (var o = !0, l = L0(e[s]), c; !(c = l()).done; ) {
      var d = c.value;
      if (i(d) !== null) {
        o = !1;
        break;
      }
    }
    if (o)
      e.splice(s, 1), t && t.splice(s, 1);
    else if (a)
      break;
    s--;
  }
  return e;
}
function U0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = B0(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B0(e, r) {
  if (e) {
    if (typeof e == "string") return Zo(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Zo(e, r);
  }
}
function Zo(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function W0(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = r.accessor, n = t === void 0 ? function(h) {
    return h;
  } : t, i = r.onlyTrimAtTheEnd, a = e[0].length - 1; a >= 0; ) {
    for (var s = !0, o = U0(e), l; !(l = o()).done; ) {
      var c = l.value;
      if (n(c[a]) !== null) {
        s = !1;
        break;
      }
    }
    if (s)
      for (var d = 0; d < e.length; )
        e[d].splice(a, 1), d++;
    else if (i)
      break;
    a--;
  }
  return e;
}
function H0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = hu(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z0(e, r) {
  return q0(e) || Y0(e, r) || hu(e, r) || V0();
}
function V0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(e, r) {
  if (e) {
    if (typeof e == "string") return Qo(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Qo(e, r);
  }
}
function Qo(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Y0(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, i, a, s, o = [], l = !0, c = !1;
    try {
      if (a = (t = t.call(e)).next, r !== 0) for (; !(l = (n = a.call(t)).done) && (o.push(n.value), o.length !== r); l = !0) ;
    } catch (d) {
      c = !0, i = d;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw i;
      }
    }
    return o;
  }
}
function q0(e) {
  if (Array.isArray(e)) return e;
}
function G0(e, r) {
  var t = e.dimensions, n = e.cells;
  if (n.length === 0)
    return [];
  var i = z0(t, 2);
  i[0];
  for (var a = i[1], s = a.column, o = a.row, l = new Array(o), c = 0; c < o; ) {
    l[c] = new Array(s);
    for (var d = 0; d < s; )
      l[c][d] = null, d++;
    c++;
  }
  for (var h = H0(n), f; !(f = h()).done; ) {
    var m = f.value, p = m.row - 1, v = m.column - 1;
    v < s && p < o && (l[p][v] = m.value);
  }
  var g = r.rowMap;
  if (g)
    for (var x = 0; x < l.length; )
      g[x] = x, x++;
  return l = $0(W0(l, {
    onlyTrimAtTheEnd: !0
  }), {
    onlyTrimAtTheEnd: !0,
    rowIndexMap: g
  }), r.transformData && (l = r.transformData(l)), l;
}
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xn(e);
}
function X0(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = K0(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K0(e, r) {
  if (e) {
    if (typeof e == "string") return el(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return el(e, r);
  }
}
function el(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function tl(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function rl(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? tl(Object(t), !0).forEach(function(n) {
      J0(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tl(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function J0(e, r, t) {
  return r = Z0(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Z0(e) {
  var r = Q0(e, "string");
  return xn(r) === "symbol" ? r : String(r);
}
function Q0(e, r) {
  if (xn(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (xn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function eg(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  t.sheet || (t = rl({
    sheet: 1
  }, t));
  var n = function(f) {
    if (!e[f])
      throw new Error('"'.concat(f, '" file not found inside the *.xlsx file zip archive'));
    return e[f];
  }, i = l0(n("xl/_rels/workbook.xml.rels"), r), a = i.sharedStrings ? p0(n(i.sharedStrings), r) : [], s = i.styles ? h0(n(i.styles), r) : {}, o = o0(n("xl/workbook.xml"), r);
  if (t.getSheets)
    return o.sheets.map(function(h) {
      var f = h.name;
      return {
        name: f
      };
    });
  var l = tg(t.sheet, o.sheets);
  if (!l || !i.sheets[l])
    throw rg(t.sheet, o.sheets);
  var c = I0(n(i.sheets[l]), r, a, s, o, t);
  t = rl({
    // Create a `rowIndexMap` for the original dataset, if not passed,
    // because "empty" rows will be dropped from the input data.
    rowMap: []
  }, t);
  var d = G0(c, t);
  return t.properties ? {
    data: d,
    properties: o
  } : d;
}
function tg(e, r) {
  if (typeof e == "number") {
    var t = r[e - 1];
    return t && t.relationId;
  }
  for (var n = X0(r), i; !(i = n()).done; ) {
    var a = i.value;
    if (a.name === e)
      return a.relationId;
  }
}
function rg(e, r) {
  var t = r && r.map(function(n, i) {
    return '"'.concat(n.name, '" (#').concat(i + 1, ")");
  }).join(", ");
  return new Error("Sheet ".concat(typeof e == "number" ? "#" + e : '"' + e + '"', " not found in the *.xlsx file.").concat(r ? " Available sheets: " + t + "." : ""));
}
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Xa(e);
}
function ng(e, r, t) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ig(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ag(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), r && bn(e, r);
}
function sg(e) {
  var r = fu();
  return function() {
    var n = wn(e), i;
    if (r) {
      var a = wn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return og(this, i);
  };
}
function og(e, r) {
  if (r && (Xa(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lg(e);
}
function lg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ka(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ka = function(n) {
    if (n === null || !cg(n)) return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(n)) return r.get(n);
      r.set(n, i);
    }
    function i() {
      return ai(n, arguments, wn(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), bn(i, n);
  }, Ka(e);
}
function ai(e, r, t) {
  return fu() ? ai = Reflect.construct.bind() : ai = function(i, a, s) {
    var o = [null];
    o.push.apply(o, a);
    var l = Function.bind.apply(i, o), c = new l();
    return s && bn(c, s.prototype), c;
  }, ai.apply(null, arguments);
}
function fu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cg(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function bn(e, r) {
  return bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, bn(e, r);
}
function wn(e) {
  return wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, wn(e);
}
var Ke = /* @__PURE__ */ function(e) {
  ag(t, e);
  var r = sg(t);
  function t(n) {
    var i;
    return ig(this, t), i = r.call(this, "invalid"), i.reason = n, i;
  }
  return ng(t);
}(/* @__PURE__ */ Ka(Error));
function ug(e) {
  if (typeof e == "string") {
    var r = e;
    if (e = Number(e), String(e) !== r)
      throw new Ke("not_a_number");
  }
  if (typeof e != "number")
    throw new Ke("not_a_number");
  if (isNaN(e))
    throw new Ke("invalid_number");
  if (!isFinite(e))
    throw new Ke("out_of_bounds");
  return e;
}
function dg(e) {
  if (typeof e == "string")
    return e;
  if (typeof e == "number") {
    if (isNaN(e))
      throw new Ke("invalid_number");
    if (!isFinite(e))
      throw new Ke("out_of_bounds");
    return String(e);
  }
  throw new Ke("not_a_string");
}
function hg(e) {
  if (typeof e == "boolean")
    return e;
  throw new Ke("not_a_boolean");
}
function fg(e, r) {
  var t = r.properties;
  if (e instanceof Date) {
    if (isNaN(e.valueOf()))
      throw new Ke("out_of_bounds");
    return e;
  }
  if (typeof e == "number") {
    if (isNaN(e))
      throw new Ke("invalid_number");
    if (!isFinite(e))
      throw new Ke("out_of_bounds");
    var n = uu(e, t);
    if (isNaN(n.valueOf()))
      throw new Ke("out_of_bounds");
    return n;
  }
  throw new Ke("not_a_date");
}
function pg(e, r) {
  return gg(e) || vg(e, r) || pu(e, r) || mg();
}
function mg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vg(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, i, a, s, o = [], l = !0, c = !1;
    try {
      if (a = (t = t.call(e)).next, r !== 0) for (; !(l = (n = a.call(t)).done) && (o.push(n.value), o.length !== r); l = !0) ;
    } catch (d) {
      c = !0, i = d;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw i;
      }
    }
    return o;
  }
}
function gg(e) {
  if (Array.isArray(e)) return e;
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Fr(e);
}
function yg(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = pu(e)) || r) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pu(e, r) {
  if (e) {
    if (typeof e == "string") return nl(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nl(e, r);
  }
}
function nl(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function il(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function al(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? il(Object(t), !0).forEach(function(n) {
      xg(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : il(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function xg(e, r, t) {
  return r = bg(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function bg(e) {
  var r = wg(e, "string");
  return Fr(r) === "symbol" ? r : String(r);
}
function wg(e, r) {
  if (Fr(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Fr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var sl = {
  schemaPropertyValueForMissingColumn: void 0,
  schemaPropertyValueForUndefinedCellValue: void 0,
  schemaPropertyValueForNullCellValue: null,
  schemaPropertyShouldSkipRequiredValidationForMissingColumn: function() {
    return !1;
  },
  // `getEmptyObjectValue(object, { path })` applies to both the top-level object
  // and any of its sub-objects.
  getEmptyObjectValue: function() {
    return null;
  },
  getEmptyArrayValue: function() {
    return null;
  },
  isColumnOriented: !1,
  arrayValueSeparator: ","
};
function Eg(e, r, t) {
  t ? t = al(al({}, sl), t) : t = sl;
  var n = t, i = n.isColumnOriented, a = n.rowIndexMap;
  Og(r), i && (e = Ng(e));
  for (var s = e[0], o = [], l = [], c = 1; c < e.length; c++) {
    var d = mu(r, e[c], c, void 0, s, l, t);
    o.push(d);
  }
  if (a)
    for (var h = yg(l), f; !(f = h()).done; ) {
      var m = f.value;
      m.row = a[m.row - 1] + 1;
    }
  return {
    rows: o,
    errors: l
  };
}
function mu(e, r, t, n, i, a, s) {
  for (var o = {}, l = !0, c = function(N) {
    var M = N.column, Z = N.value, Q = N.error, te = N.reason, z = {
      error: Q,
      row: t + 1,
      column: M,
      value: Z
    };
    return te && (z.reason = te), e[M].type && (z.type = e[M].type), z;
  }, d = [], h = function() {
    var N = m[f], M = e[N], Z = Fr(M.type) === "object" && !Array.isArray(M.type), Q = "".concat(n || "", ".").concat(M.prop), te, z = i.indexOf(N), Y = z < 0;
    Y || (te = r[z]);
    var V, W, K;
    if (Z)
      V = mu(M.type, r, t, Q, i, a, s);
    else if (Y)
      V = s.schemaPropertyValueForMissingColumn;
    else if (te === void 0)
      V = s.schemaPropertyValueForUndefinedCellValue;
    else if (te === null)
      V = s.schemaPropertyValueForNullCellValue;
    else if (Array.isArray(M.type)) {
      var $ = Sg(te, s.arrayValueSeparator).map(function(k) {
        if (!W) {
          var L = ol(k, M, s);
          return L.error && (V = k, W = L.error, K = L.reason), L.value;
        }
      });
      if (!W) {
        var X = $.every(ua);
        V = X ? s.getEmptyArrayValue($, {
          path: Q
        }) : $;
      }
    } else {
      var O = ol(te, M, s);
      W = O.error, K = O.reason, V = W ? te : O.value;
    }
    !W && ua(V) && M.required && d.push({
      column: N,
      value: V,
      isMissingColumn: Y
    }), W ? a.push(c({
      column: N,
      value: V,
      error: W,
      reason: K
    })) : (l && !ua(V) && (l = !1), V !== void 0 && (o[M.prop] = V));
  }, f = 0, m = Object.keys(e); f < m.length; f++)
    h();
  if (l)
    return s.getEmptyObjectValue(o, {
      path: n
    });
  for (var p = 0, v = d; p < v.length; p++) {
    var g = v[p], x = g.column, w = g.value, E = g.isMissingColumn, S = E && s.schemaPropertyShouldSkipRequiredValidationForMissingColumn(x, {
      object: o
    });
    if (!S) {
      var C = e[x].required, D = typeof C == "boolean" ? C : C(o);
      D && a.push(c({
        column: x,
        value: w,
        error: "required"
      }));
    }
  }
  return o;
}
function ol(e, r, t) {
  if (e === null)
    return {
      value: null
    };
  var n;
  if (r.parse ? n = Ar(e, r.parse) : r.type ? n = Cg(
    e,
    // Supports parsing array types.
    // See `parseArray()` function for more details.
    // Example `type`: String[]
    // Input: 'Barack Obama, "String, with, colons", Donald Trump'
    // Output: ['Barack Obama', 'String, with, colons', 'Donald Trump']
    Array.isArray(r.type) ? r.type[0] : r.type,
    t
  ) : n = {
    value: e
  }, n.error)
    return n;
  if (n.value !== null) {
    if (r.oneOf && r.oneOf.indexOf(n.value) < 0)
      return {
        error: "invalid",
        reason: "unknown"
      };
    if (r.validate)
      try {
        r.validate(n.value);
      } catch (i) {
        return {
          error: i.message
        };
      }
  }
  return n;
}
function Ar(e, r) {
  try {
    var t = r(e);
    return t === void 0 ? {
      value: null
    } : {
      value: t
    };
  } catch (i) {
    var n = {
      error: i.message
    };
    return i.reason && (n.reason = i.reason), n;
  }
}
function Cg(e, r, t) {
  switch (r) {
    case String:
      return Ar(e, dg);
    case Number:
      return Ar(e, ug);
    case Date:
      return Ar(e, function(n) {
        return fg(n, {
          properties: t.properties
        });
      });
    case Boolean:
      return Ar(e, hg);
    default:
      if (typeof r == "function")
        return Ar(e, r);
      throw new Error("Unsupported schema type: ".concat(r && r.name || r));
  }
}
function vu(e, r, t) {
  for (var n = 0, i = ""; t + n < e.length; ) {
    var a = e[t + n];
    if (a === r)
      return [i, n];
    if (a === '"') {
      var s = vu(e, '"', t + n + 1);
      i += s[0], n += 1 + s[1] + 1;
    } else
      i += a, n++;
  }
  return [i, n];
}
function Sg(e, r) {
  for (var t = [], n = 0; n < e.length; ) {
    var i = vu(e, r, n), a = pg(i, 2), s = a[0], o = a[1];
    n += o + r.length, t.push(s.trim());
  }
  return t;
}
var Ng = function(r) {
  return r[0].map(function(t, n) {
    return r.map(function(i) {
      return i[n];
    });
  });
};
function Og(e) {
  for (var r = 0, t = Object.keys(e); r < t.length; r++) {
    var n = t[r], i = e[n];
    if (!i.prop)
      throw new Error('"prop" not defined for schema entry "'.concat(n, '".'));
  }
}
function ua(e) {
  return e == null;
}
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, En(e);
}
function ll(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function cl(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ll(Object(t), !0).forEach(function(n) {
      Tg(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ll(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Tg(e, r, t) {
  return r = Ag(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ag(e) {
  var r = Rg(e, "string");
  return En(r) === "symbol" ? r : String(r);
}
function Rg(e, r) {
  if (En(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (En(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function jg(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.includeNullValues, i = t.ignoreEmptyRows, a = t.isColumnOriented, s = t.rowMap, o = {
    schemaPropertyValueForMissingColumn: void 0,
    schemaPropertyValueForUndefinedCellValue: void 0,
    schemaPropertyValueForNullCellValue: void 0,
    schemaPropertyShouldSkipRequiredValidationForMissingColumn: function(d, h) {
      return h.path, !1;
    },
    getEmptyObjectValue: function(d, h) {
      var f = h.path;
      return f ? void 0 : null;
    },
    getEmptyArrayValue: function() {
      return null;
    },
    arrayValueSeparator: ","
  };
  n && (o.schemaPropertyValueForMissingColumn = null, o.schemaPropertyValueForUndefinedCellValue = null, o.schemaPropertyValueForNullCellValue = null, o.getEmptyObjectValue = function(c, d) {
    return d.path, null;
  });
  var l = Eg(e, r, cl(cl({}, o), {}, {
    rowIndexMap: s,
    isColumnOriented: a
  }));
  return i !== !1 && (l.rows = l.rows.filter(function(c) {
    return c !== o.getEmptyObjectValue(c, {
      path: void 0
    });
  })), l;
}
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Cn(e);
}
var _g = ["schemaPropertyValueForEmptyCell"];
function ul(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function dl(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ul(Object(t), !0).forEach(function(n) {
      kg(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ul(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function kg(e, r, t) {
  return r = Mg(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Mg(e) {
  var r = Pg(e, "string");
  return Cn(r) === "symbol" ? r : String(r);
}
function Pg(e, r) {
  if (Cn(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Cn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Dg(e, r) {
  if (e == null) return {};
  var t = Ig(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Ig(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Lg(e, r, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = n.schemaPropertyValueForEmptyCell, a = Dg(n, _g);
  return e(r, t, dl(dl({}, a), {}, {
    schemaPropertyValueForNullCellValue: i
  }));
}
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ja(e);
}
function gu(e) {
  for (var r = {}, t = 0, n = Object.keys(e); t < n.length; t++) {
    var i = n[t], a = e[i], s = void 0;
    Ja(a) === "object" && (a = Object.keys(e[i])[0], s = gu(e[i][a])), r[i] = {
      prop: a
    }, s && (r[i].type = s);
  }
  return r;
}
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Sn(e);
}
var Fg = ["schema", "map"];
function hl(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function qn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? hl(Object(t), !0).forEach(function(n) {
      $g(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hl(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function $g(e, r, t) {
  return r = Ug(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ug(e) {
  var r = Bg(e, "string");
  return Sn(r) === "symbol" ? r : String(r);
}
function Bg(e, r) {
  if (Sn(e) !== "object" || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Sn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Wg(e, r) {
  if (e == null) return {};
  var t = Hg(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Hg(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function zg(e, r, t) {
  var n = t.schema, i = t.map, a = Wg(t, Fg);
  !n && i && (n = gu(i));
  var s = eg(e, r, qn(qn({}, a), {}, {
    properties: n || a.properties
  }));
  return n ? Lg(jg, s.data, n, qn(qn({}, a), {}, {
    properties: s.properties
  })) : s;
}
function Vg(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Yv(e).then(function(t) {
    return zg(t, Av, r);
  });
}
class Yg extends me {
  constructor(t) {
    super(t);
    y(this, "customDatatableRef", Yt());
    y(this, "clearList", () => {
      this.setState({
        datalist: []
      });
    });
    y(this, "handleOnLoaded", (t, n) => {
      try {
        t !== void 0 && (this.clearList(), this.setState({ datalist: t, state: n }));
      } catch (i) {
        console.error(i);
      }
    });
    y(this, "handleOnSubmit", () => {
      var t, n, i, a, s;
      Cs.sendData(
        {
          datalist: this.state.datalist,
          url: (t = this.props.reader) == null ? void 0 : t.url,
          complete_url: (n = this.props.reader) == null ? void 0 : n.complete_url,
          title: (i = this.props.reader) == null ? void 0 : i.title,
          token: (a = this.props.reader) == null ? void 0 : a.token,
          key_name: (s = this.props.reader) == null ? void 0 : s.key_name
        },
        I.UPLOAD_MANAGER_REQUEST
      ), this.props.onClose && this.props.onClose();
    });
    y(this, "handleOnClose", () => {
      this.setState({ show: !1 });
    });
    this.state = {
      datalist: [],
      hasRequest: !1,
      show: !0
    };
  }
  render() {
    const { headers: t, datalist: n, settings: i } = this.props, { datalist: a, state: s, hasRequest: o } = this.state;
    return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ u.jsx("div", { className: "w-full max-h-[55dvh] overflow-y-auto overflow-x-hidden", children: /* @__PURE__ */ u.jsxs(
        cv,
        {
          className: "h-full font-poppinsRegular",
          settings: i,
          data: n,
          handleOnLoaded: this.handleOnLoaded,
          children: [
            a.length > 0 ? a.map((l, c) => {
              const d = c % 2 === 0 ? "dark:bg-[#1c1c1c] bg-[#f3f4f6] dark:hover:bg-white" : "bg-inherit";
              return /* @__PURE__ */ u.jsx(
                Vo,
                {
                  data: l,
                  background: d,
                  headers: t
                },
                `camp${l.id}${c}`
              );
            }) : s !== I.LOADING ? /* @__PURE__ */ u.jsx("tr", { children: /* @__PURE__ */ u.jsx("td", { colSpan: 20, children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col space-y-2 w-full h-96 justify-center items-center", children: /* @__PURE__ */ u.jsx("div", { className: "font-poppinsMedium", children: "No data found" }) }) }) }) : null,
            s === I.LOADING ? Array.from({ length: 6 }).map((l, c) => /* @__PURE__ */ u.jsx(Vo, { isLoading: !0 }, `dtal${c}`)) : s === I.ERROR && /* @__PURE__ */ u.jsx(hv, {})
          ]
        }
      ) }),
      !o && /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-end relative my-8 ", children: /* @__PURE__ */ u.jsx(
        uv,
        {
          onClick: this.handleOnSubmit,
          icon: /* @__PURE__ */ u.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6 inline-block lg:mr-1",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          label: "Continue"
        }
      ) })
    ] });
  }
}
class Pb extends me {
  constructor(t) {
    super(t);
    y(this, "wizardActionRef");
    y(this, "handleFileUpload", (t) => {
      var n;
      try {
        const { database: i } = this.props, a = (n = t.target.files) == null ? void 0 : n[0];
        if (!a) return;
        Vg(a, { sheet: this.props.reader.sheet_name }).then((s) => {
          if (s.length === 0) return;
          const o = s[0].map(
            (p) => `${p}`.toLowerCase().replace(/\s+/g, "_")
          );
          s = s.slice(1);
          const l = o.indexOf(this.props.filter_column.parent), c = this.props.filter_column.unique_fields ? this.props.filter_column.unique_fields.map(
            (p) => o.indexOf(p)
          ) : [], d = {};
          l !== -1 && c.some((p) => p !== -1) && s.forEach((p) => {
            c.forEach((v) => {
              const g = j.toString(
                p[v]
              ).toLowerCase();
              g && (d[g] = p);
            });
          });
          let h = 100, f = 0;
          const m = async () => {
            const p = Math.min(f + h, s.length), v = s.slice(f, p), g = v.map((E) => {
              const S = {};
              if (o.forEach((C, D) => {
                i.find((N) => N.id === C) && (S[C] = j.toStringDefault(E[D], ""));
              }), !j.isEmptyOrNull(S == null ? void 0 : S.parent_unit)) {
                const C = j.toStringDefault(
                  E[l],
                  ""
                ).toLowerCase(), D = d[C];
                if (D) {
                  const R = {};
                  o.forEach((N, M) => {
                    N !== this.props.filter_column.parent && (R[N] = D[M]);
                  }), S[this.props.filter_column.custom] = JSON.stringify(
                    R
                  );
                }
              }
              return c.length > 0 && c.forEach((C) => {
                S[o[C]] && (S.extra = `${S[o[C]]}`);
              }), S;
            }), x = {
              ...this.state.data.meta,
              count: this.state.data.data.length + g.length,
              total: this.state.data.data.length + g.length,
              to: this.state.data.data.length + g.length
            }, w = {
              ...this.state.data,
              data: [...this.state.data.data, ...g],
              meta: x
            };
            this.setState(
              {
                filedata: [...this.state.filedata, ...v],
                data: w
              },
              () => {
                p < s.length && (f = p, setTimeout(m, 0));
              }
            );
          };
          m();
        });
      } catch (i) {
        console.error(i);
      }
    });
    this.wizardActionRef = Yt(), this.state = {
      hasRequest: !1,
      filedata: [],
      data: {
        meta: {
          count: 0,
          current_page: 1,
          next_page: null,
          total: 0,
          from: 1,
          to: 0,
          last_page: 1,
          per_page: 100
        },
        links: {
          first: null,
          last: null
        },
        next: null,
        previous: null,
        count: 0,
        data: []
      },
      input: {}
    };
  }
  render() {
    var n, i, a, s;
    const t = this.props.database.map((o) => o.id);
    return this.props.settings.headers = t, this.props.settings.columns = t, /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("form", { className: "flex flex-col w-full overflow-auto", children: /* @__PURE__ */ u.jsx("div", { className: "w-full font-poppinsRegular ", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col h-full w-full", children: this.state.data.data.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "w-full  my-16 space-y-4", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "bg-gray-200 dark:bg-darkPrimary rounded-lg w-full max-w-lg  mx-auto shadow-sm h-60 cursor-pointer relative overflow-hidden group", children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            type: "file",
            disabled: this.state.hasRequest,
            className: "absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer",
            accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
            onChange: this.handleFileUpload
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-col text-gray-500 dark:text-gray-400 flex h-full justify-center items-center", children: [
          /* @__PURE__ */ u.jsx("div", { className: "w-16 h-16 mb-2", children: /* @__PURE__ */ u.jsx(
            "img",
            {
              className: "object-center object-cover w-full h-full cursor-pointer m-auto",
              alt: "photo",
              src: ((i = (n = this.props.reader) == null ? void 0 : n.ui) == null ? void 0 : i.icon) ?? "./excel.png"
            }
          ) }),
          /* @__PURE__ */ u.jsx("div", { className: "text-xs md:text-sm", children: ((s = (a = this.props.reader) == null ? void 0 : a.ui) == null ? void 0 : s.label) ?? "[Drag and Drop or Click to Upload Excel]" })
        ] })
      ] }),
      j.isEmptyOrNull(this.props.reader.template_url) ? null : /* @__PURE__ */ u.jsx("div", { className: " w-full max-w-lg mx-auto", children: /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ u.jsx("a", { href: `${this.props.reader.template_url}`, target: "_blank", className: "uppercase text-xs bg-green-700 text-white px-4 py-2.5 rounded-full cursor-pointer", children: "Download Template" }) }) })
    ] }) : /* @__PURE__ */ u.jsx("div", { className: "z-5", children: /* @__PURE__ */ u.jsx(Yg, { headers: t, datalist: this.state.data, ...this.props }) }) }) }) }) });
  }
}
function Za(e, r) {
  var t, n;
  return e && r ? (t = "" + e + r[0].toUpperCase() + r.slice(1), n = e + "-" + r) : (t = e || r, n = e || r), { camelCase: t, snakeCase: n };
}
function yu(e) {
  return /^blob:/.test(e);
}
function qg(e) {
  return /^data:/.test(e);
}
function xu(e) {
  return yu(e) || qg(e);
}
function Gg(e) {
  if (xu(e))
    return !1;
  var r = window.location, t = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/, n = t.exec(e) || [], i = {
    protocol: n[1] || "",
    host: n[2] || "",
    port: n[3] || ""
  }, a = function(o) {
    return o === "http" ? 80 : 433;
  }, s = function(o) {
    return o.port || a(o.protocol || r.protocol);
  };
  return !(!i.protocol && !i.host && !i.port || i.protocol && i.protocol == r.protocol && i.host && i.host == r.host && i.host && s(i) == s(r));
}
function Xg(e) {
  return Array.isArray(e);
}
function pe(e) {
  return typeof e == "function";
}
function _e(e) {
  return e === void 0;
}
var ur = function(e) {
  return e !== null && typeof e == "object";
};
function In(e, r, t) {
  t === void 0 && (t = {});
  var n = {};
  return ur(e) ? (Object.keys(r).forEach(function(i) {
    _e(e[i]) ? n[i] = r[i] : ur(r[i]) ? ur(e[i]) ? n[i] = In(e[i], r[i], t[i]) : n[i] = e[i] ? r[i] : t[i] : r[i] === !0 || r[i] === !1 ? n[i] = !!e[i] : n[i] = e[i];
  }), n) : e ? r : t;
}
function Vt(e) {
  var r = Number(e);
  return Number.isNaN(r) ? e : r;
}
function fl(e) {
  return e === !0 || e === !1;
}
function Ee(e) {
  return typeof e == "number";
}
function Kg(e) {
  return typeof e == "string";
}
function bu(e) {
  return e !== e;
}
function mt(e) {
  return Ee(e) && !bu(e) || Kg(e) && !Number.isNaN(parseFloat(e)) && isFinite(parseFloat(e));
}
function wu(e, r) {
  return Math.sqrt(Math.pow(e.left - r.left, 2) + Math.pow(e.top - r.top, 2));
}
function Lt(e, r, t) {
  return t === void 0 && (t = 1e-3), Math.abs(r - e) < t;
}
function Gt(e, r, t) {
  return Lt(e, r, t) ? !1 : e > r;
}
function $r(e, r, t) {
  return Lt(e, r, t) ? !1 : e < r;
}
function Jg(e) {
  var r = +e;
  return r === 0 || bu(r) ? r : r > 0 ? 1 : -1;
}
function pl(e) {
  return new Promise(function(r) {
    setTimeout(function() {
      r();
    }, e);
  });
}
function Nn(e) {
  if (!ur(e))
    return e;
  var r = {};
  return Array.isArray(e) ? r = e.map(function(t) {
    return Nn(t);
  }) : Object.keys(e).forEach(function(t) {
    return r[t] = Nn(e[t]);
  }), r;
}
function Mr(e, r, t) {
  if (t === void 0 && (t = 1e-3), Ee(e) && Ee(r) && Lt(e, r, t) || e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, i = void 0;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (i = n; i-- !== 0; )
        if (!Mr(e[i], r[i], t))
          return !1;
      return !0;
    }
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    var a = Object.keys(e);
    if (n = a.length, n !== Object.keys(r).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, a[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      var s = a[i];
      if (!Mr(e[s], r[s], t))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function Eu() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };
}
function Zg(e) {
  return e === "west" || e === "south" || e === "north" || e === "east";
}
function Cu(e, r) {
  var t, n;
  function i() {
    for (var s = [], o = 0; o < arguments.length; o++)
      s[o] = arguments[o];
    var l = Date.now() - t, c = pe(r) ? r() : r || 0;
    l < c && l >= 0 ? n = setTimeout(function() {
      return i.apply(void 0, s);
    }, c - l) : e.apply(void 0, s);
  }
  function a() {
    for (var s = [], o = 0; o < arguments.length; o++)
      s[o] = arguments[o];
    t = Date.now(), n = setTimeout(function() {
      return i.apply(void 0, s);
    }, pe(r) ? r() : r || 0);
  }
  return a.clear = function() {
    clearTimeout(n);
  }, a;
}
var ft = ["left", "right", "top", "bottom"], Qg = ["left", "right"], ey = ["top", "bottom"];
function vt(e, r) {
  return {
    left: e.left - r.left,
    top: e.top - r.top
  };
}
function Ce(e) {
  return {
    left: e.left + e.width / 2,
    top: e.top + e.height / 2
  };
}
function ty(e) {
  return {
    left: "right",
    top: "bottom",
    right: "left",
    bottom: "top"
  }[e];
}
function ml(e, r) {
  return Math.pow(e.width - r.width, 2) + Math.pow(e.height - r.height, 2);
}
function Ct(e, r) {
  return {
    left: e.left - r.left,
    top: e.top - r.top,
    width: e.width + r.left + r.right,
    height: e.height + r.top + r.bottom
  };
}
function Ns(e) {
  return {
    left: -e.left,
    top: -e.top
  };
}
function Ie(e, r) {
  return _(_({}, e), { left: e.left + r.left, top: e.top + r.top });
}
function tt(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.left + e.width,
    bottom: e.top + e.height
  };
}
function Tt(e, r, t, n) {
  if (r !== 1)
    if ("left" in e || "top" in e)
      if (t) {
        var i = Ce(e);
        return {
          width: e.width * r,
          height: e.height * r,
          left: e.left + e.width * (1 - r) / 2 + (t.left - i.left) * (1 - r),
          top: e.top + e.height * (1 - r) / 2 + (t.top - i.top) * (1 - r)
        };
      } else
        return {
          width: e.width * r,
          height: e.height * r,
          left: e.left + e.width * (1 - r) / 2,
          top: e.top + e.height * (1 - r) / 2
        };
    else
      return {
        width: e.width * r,
        height: e.height * r
      };
  else
    return e;
}
function oe(e) {
  return e.width / e.height;
}
function Qa(e, r) {
  return Math.min(r.maxWidth ? r.maxWidth / e.width : 1 / 0, r.maxHeight ? r.maxHeight / e.height : 1 / 0);
}
function ry(e, r) {
  return Math.max(r.minWidth ? r.minWidth / e.width : 0, r.minHeight ? r.minHeight / e.height : 0);
}
function On(e, r) {
  var t;
  return r.minimum && $r(e, r.minimum) ? t = r.minimum : r.maximum && Gt(e, r.maximum) && (t = r.maximum), t;
}
function Os(e, r) {
  var t = oe(e), n = 1;
  return r.minWidth > 0 && r.minHeight > 0 ? t > r.minWidth / r.minHeight ? e.height < r.minHeight && (n = r.minHeight / e.height) : e.width < r.minWidth && (n = r.minWidth / e.width) : r.minWidth > 0 ? e.width < r.minWidth && (n = r.minWidth / e.width) : r.minHeight > 0 && e.height < r.minHeight && (n = r.minHeight / e.height), r.maxWidth < 1 / 0 && r.maxHeight < 1 / 0 ? t > r.maxWidth / r.maxHeight ? e.width > r.maxWidth && (n = r.maxWidth / e.width) : e.height > r.maxHeight && (n = r.maxHeight / e.height) : r.maxWidth < 1 / 0 ? e.width > r.maxWidth && (n = r.maxWidth / e.width) : r.maxHeight < 1 / 0 && e.height > r.maxHeight && (n = r.maxHeight / e.height), n;
}
function pi(e, r) {
  var t = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
  return ft.forEach(function(n) {
    var i = r[n], a = tt(e)[n];
    i !== void 0 && a !== void 0 ? n === "left" || n === "top" ? t[n] = Math.max(0, i - a) : t[n] = Math.max(0, a - i) : t[n] = 0;
  }), t;
}
function Ri(e, r) {
  return Tt(e, Os(e, r));
}
function Su(e, r) {
  var t = r * Math.PI / 180;
  return {
    width: Math.abs(e.width * Math.cos(t)) + Math.abs(e.height * Math.sin(t)),
    height: Math.abs(e.width * Math.sin(t)) + Math.abs(e.height * Math.cos(t))
  };
}
function Pt(e, r, t) {
  var n = r * Math.PI / 180;
  return t ? {
    left: (e.left - t.left) * Math.cos(n) - (e.top - t.top) * Math.sin(n) + t.left,
    top: (e.left - t.left) * Math.sin(n) + (e.top - t.top) * Math.cos(n) + t.top
  } : {
    left: e.left * Math.cos(n) - e.top * Math.sin(n),
    top: e.left * Math.sin(n) + e.top * Math.cos(n)
  };
}
function Nu(e) {
  return {
    minWidth: 0,
    minHeight: 0,
    maxWidth: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0,
    maxHeight: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0
  };
}
function Kt(e, r) {
  var t = {};
  return ft.forEach(function(n) {
    var i = e[n], a = r[n];
    i !== void 0 && a !== void 0 ? n === "left" || n === "top" ? t[n] = Math.max(i, a) : t[n] = Math.min(i, a) : a !== void 0 ? t[n] = a : i !== void 0 && (t[n] = i);
  }), t;
}
function ji(e, r) {
  var t = {
    left: 0,
    top: 0
  }, n = pi(e, r);
  return n.left && n.left > 0 ? t.left = n.left : n.right && n.right > 0 && (t.left = -n.right), n.top && n.top > 0 ? t.top = n.top : n.bottom && n.bottom > 0 && (t.top = -n.bottom), t;
}
function Re(e, r) {
  return Ie(e, ji(e, r));
}
function ny(e, r) {
  return r ? e ? {
    minimum: Math.min(e.maximum, Math.max(e.minimum, r.minimum)),
    maximum: Math.max(e.minimum, Math.min(e.maximum, r.maximum))
  } : r : e;
}
function gr(e) {
  return e === void 0 && (e = {}), Ee(e) ? {
    minimum: e,
    maximum: e
  } : {
    minimum: mt(e.minimum) ? e.minimum : 0,
    maximum: mt(e.maximum) ? e.maximum : 1 / 0
  };
}
function es(e, r) {
  return (_e(r.maxWidth) || !Gt(e.width, r.maxWidth)) && (_e(r.maxHeight) || !Gt(e.height, r.maxHeight)) && (_e(r.minHeight) || !$r(e.height, r.minHeight)) && (_e(r.minWidth) || !$r(e.width, r.minWidth));
}
function vl(e, r) {
  return (_e(r.left) || !$r(e.left, r.left)) && (_e(r.top) || !$r(e.top, r.top)) && (_e(r.right) || !Gt(e.left + e.width, r.right)) && (_e(r.bottom) || !Gt(e.top + e.height, r.bottom));
}
function iy(e, r, t, n) {
  var i = function(a) {
    return e.reduce(function(s, o) {
      var l = pe(t) ? t(o) : t, c = l.maxHeight, d = l.maxWidth, h = l.minWidth, f = l.minHeight, m = gr(pe(n) ? n(o) : n), p = a ? { maxWidth: d, maxHeight: c } : { maxWidth: d, maxHeight: c, minWidth: h, minHeight: f };
      return es(o, p) && !On(oe(o), m) && o.width && o.height && (!s || $r(ml(o, r), ml(s, r))) ? o : s;
    }, null);
  };
  return i() || i(!0);
}
function ct(e) {
  return !!(e && e.visibleArea && e.coordinates);
}
function bt(e, r) {
  return cy(e, r);
}
function gt(e, r) {
  return pe(r.areaPositionRestrictions) ? r.areaPositionRestrictions(e, r) : r.areaPositionRestrictions;
}
function wt(e, r) {
  return ly(e, r);
}
function rt(e, r) {
  return pe(r.positionRestrictions) ? r.positionRestrictions(e, r) : r.positionRestrictions;
}
function yr(e) {
  return e.visibleArea ? e.visibleArea.width / e.boundary.width : 0;
}
function Ts(e) {
  if (ct(e)) {
    var r = e.coordinates, t = r.width, n = r.height, i = r.left, a = r.top, s = yr(e);
    return {
      width: t / s,
      height: n / s,
      left: (i - e.visibleArea.left) / s,
      top: (a - e.visibleArea.top) / s
    };
  } else
    return Eu();
}
function Jt(e, r) {
  return gr(pe(r.aspectRatio) ? r.aspectRatio(e, r) : r.aspectRatio);
}
function gl(e, r) {
  return pe(r.defaultCoordinates) ? r.defaultCoordinates(e, r) : r.defaultCoordinates;
}
function yl(e, r) {
  return pe(r.defaultVisibleArea) ? r.defaultVisibleArea(e, r) : r.defaultVisibleArea;
}
function ay(e, r) {
  var t = _(_({}, e.transforms), { flip: _({}, e.transforms.flip) });
  if (r.defaultTransforms) {
    var n = pe(r.defaultTransforms) ? r.defaultTransforms(e, r) : r.defaultTransforms;
    Ee(n.rotate) && (t.rotate = n.rotate), n.flip && (fl(n.flip.horizontal) && (t.flip.horizontal = n.flip.horizontal), fl(n.flip.vertical) && (t.flip.vertical = n.flip.vertical));
  }
  return t;
}
function $t(e) {
  return e.imageSize && e.imageSize.width && e.imageSize.height ? Su(e.imageSize, e.transforms.rotate) : {
    width: 0,
    height: 0
  };
}
function sy(e) {
  return e.coordinates ? Math.min(e.coordinates.width, e.coordinates.height, 20 * yr(e)) : 1;
}
function oy(e, r) {
  if (ct(e)) {
    var t = wt(e, r), n = rt(e, r), i = {
      width: Math.round(e.coordinates.width),
      height: Math.round(e.coordinates.height),
      left: Math.round(e.coordinates.left),
      top: Math.round(e.coordinates.top)
    };
    return i.width > t.maxWidth ? i.width = Math.floor(e.coordinates.width) : i.width < t.minWidth && (i.width = Math.ceil(e.coordinates.width)), i.height > t.maxHeight ? i.height = Math.floor(e.coordinates.height) : i.height < t.minHeight && (i.height = Math.ceil(e.coordinates.height)), Re(i, n);
  } else
    return null;
}
function xl(e, r) {
  return ct(e) ? !On(oe(e.coordinates), Jt(e, r)) && es(e.visibleArea, bt(e, r)) && es(e.coordinates, wt(e, r)) && vl(e.visibleArea, gt(e, r)) && vl(e.coordinates, rt(e, r)) : !0;
}
function As(e) {
  var r = _({}, e);
  return r.minWidth > r.maxWidth && (r.minWidth = r.maxWidth), r.minHeight > r.maxHeight && (r.minHeight = r.maxHeight), r;
}
function Rs(e, r) {
  var t = e, n = _({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0 }, r);
  return As({
    maxHeight: Math.min(t.maxHeight, n.maxHeight),
    minHeight: Math.max(t.minHeight, n.minHeight),
    maxWidth: Math.min(t.maxWidth, n.maxWidth),
    minWidth: Math.max(t.minWidth, n.minWidth)
  });
}
function ly(e, r) {
  var t = pe(r.sizeRestrictions) ? r.sizeRestrictions(e, r) : r.sizeRestrictions, n = rt(e, r), i = {
    minWidth: mt(t.minWidth) ? Vt(t.minWidth) : 0,
    minHeight: mt(t.minHeight) ? Vt(t.minHeight) : 0,
    maxWidth: mt(t.maxWidth) ? Vt(t.maxWidth) : 1 / 0,
    maxHeight: mt(t.maxHeight) ? Vt(t.maxHeight) : 1 / 0
  };
  return n.left !== void 0 && n.right !== void 0 && (i.maxWidth = Math.min(i.maxWidth, n.right - n.left)), n.bottom !== void 0 && n.top !== void 0 && (i.maxHeight = Math.min(i.maxHeight, n.bottom - n.top)), As(i);
}
function cy(e, r) {
  var t = pe(r.areaSizeRestrictions) ? r.areaSizeRestrictions(e, r) : r.areaSizeRestrictions;
  return t.maxWidth < 1 / 0 && t.maxHeight < 1 / 0 && (oe(e.boundary) > t.maxWidth / t.maxHeight ? t.maxHeight = t.maxWidth / oe(e.boundary) : t.maxWidth = t.maxHeight * oe(e.boundary)), As(t);
}
function $e(e) {
  return Nn(e);
}
var pr;
(function(e) {
  e.fillArea = "fillArea", e.fitArea = "fitArea", e.stencil = "stencil", e.none = "none";
})(pr || (pr = {}));
var ts;
(function(e) {
  e.coordinates = "coordinates", e.visibleArea = "visibleArea";
})(ts || (ts = {}));
function yt(e) {
  var r = e.width, t = e.height, n = e.sizeRestrictions || {
    minWidth: 0,
    minHeight: 0,
    maxWidth: 1 / 0,
    maxHeight: 1 / 0
  }, i = gr(e.aspectRatio), a = {
    width: Math.max(n.minWidth, Math.min(n.maxWidth, r)),
    height: Math.max(n.minHeight, Math.min(n.maxHeight, t))
  }, s = [a];
  return i && [i.minimum, i.maximum].forEach(function(o) {
    o && s.push({ width: a.width, height: a.width / o }, { width: a.height * o, height: a.height });
  }), s = s.map(function(o) {
    return Ri(o, n);
  }), iy(s, { width: r, height: t }, n, i);
}
function Ou(e, r) {
  var t = $e(e);
  if (e.visibleArea) {
    var n = bt(e, r);
    t.visibleArea = _(_({}, e.visibleArea), yt({
      width: e.visibleArea.width,
      height: e.visibleArea.height,
      aspectRatio: {
        minimum: oe(t.boundary),
        maximum: oe(t.boundary)
      },
      sizeRestrictions: n
    })), t.visibleArea = Ie(t.visibleArea, vt(Ce(e.visibleArea), Ce(t.visibleArea))), t.visibleArea = Re(t.visibleArea, gt(t, r));
  }
  return t;
}
function Tu(e, r, t) {
  var n = Ie(e, r);
  return t ? Re(n, t) : n;
}
var Nt;
(function(e) {
  e.limit = "limit", e.zoom = "zoom", e.unsafe = "unsafe";
})(Nt || (Nt = {}));
function rs(e, r, t, n) {
  n === void 0 && (n = !0);
  var i = n === !1 ? Nt.unsafe : n === !0 ? Nt.zoom : n, a = Jt(e, r), s = wt(e, r);
  e.visibleArea && i === Nt.limit && (s = _(_({}, s), { minWidth: Math.min(e.visibleArea.width, s.minWidth), minHeight: Math.min(e.visibleArea.height, s.minHeight), maxWidth: Math.min(e.visibleArea.width, s.maxWidth), maxHeight: Math.min(e.visibleArea.height, s.maxHeight) }));
  var o = rt(e, r);
  e.visibleArea && i === Nt.limit && (o = Kt(o, tt(e.visibleArea)));
  var l = function(x, w) {
    return Tu(x, {
      left: w.left - (x.left || 0),
      top: w.top - (x.top || 0)
    }, o);
  }, c = function(x, w) {
    var E = _(_(_({}, x), yt({
      width: w.width,
      height: w.height,
      sizeRestrictions: s,
      aspectRatio: a
    })), { left: 0, top: 0 });
    return l(E, {
      left: x.left || 0,
      top: x.top || 0
    });
  }, d = e.coordinates ? _({}, e.coordinates) : Eu(), h = Array.isArray(t) ? t : [t];
  h.forEach(function(x) {
    var w;
    typeof x == "function" ? w = x(_(_({}, e), { coordinates: d }), r) : w = x, w && ((!_e(w.width) || !_e(w.height)) && (d = c(d, _(_({}, d), w))), (!_e(w.left) || !_e(w.top)) && (d = l(d, _(_({}, d), w))));
  });
  var f = _(_({}, $e(e)), { coordinates: d });
  if (f.visibleArea && i === Nt.zoom) {
    var m = Math.max(0, f.coordinates.width - f.visibleArea.width), p = Math.max(0, f.coordinates.height - f.visibleArea.height), v = bt(e, r), g = m > p ? f.coordinates.width / f.visibleArea.width : f.coordinates.height / f.visibleArea.height;
    return g > 1 && (f.visibleArea = Tt(f.visibleArea, Math.min(g, Qa(f.visibleArea, v)))), f.visibleArea = Ie(f.visibleArea, Ns(ji(f.coordinates, tt(f.visibleArea)))), Ou(f, r);
  } else
    return f;
}
function Au(e, r) {
  if (e.coordinates) {
    var t = $e(e), n = Jt(e, r), i = wt(e, r);
    return t.coordinates = _(_({}, e.coordinates), yt({
      width: e.coordinates.width,
      height: e.coordinates.height,
      aspectRatio: n,
      sizeRestrictions: e.visibleArea ? {
        maxWidth: Math.min(e.visibleArea.width, i.maxWidth),
        maxHeight: Math.min(e.visibleArea.height, i.maxHeight),
        minHeight: Math.min(e.visibleArea.height, i.minHeight),
        minWidth: Math.min(e.visibleArea.width, i.minWidth)
      } : i
    })), t.coordinates = Ie(t.coordinates, vt(Ce(e.coordinates), Ce(t.coordinates))), t.coordinates = Re(t.coordinates, e.visibleArea ? Kt(tt(e.visibleArea), rt(t, r)) : rt(t, r)), t;
  }
  return e;
}
function ns(e, r, t, n) {
  n === void 0 && (n = !0);
  var i = _(_({}, $e(e)), { visibleArea: t });
  return i = Ou(i, r), n && (i = Au(i, r)), i;
}
function uy(e, r) {
  var t, n, i, a, s, o = e.boundary, l = e.image, c = {
    boundary: {
      width: o.width,
      height: o.height
    },
    imageSize: {
      width: l.width,
      height: l.height
    },
    transforms: {
      rotate: ((t = l.transforms) === null || t === void 0 ? void 0 : t.rotate) || 0,
      flip: {
        horizontal: ((i = (n = l.transforms) === null || n === void 0 ? void 0 : n.flip) === null || i === void 0 ? void 0 : i.horizontal) || !1,
        vertical: ((s = (a = l.transforms) === null || a === void 0 ? void 0 : a.flip) === null || s === void 0 ? void 0 : s.vertical) || !1
      }
    },
    visibleArea: null,
    coordinates: null
  };
  return r.defaultTransforms && (c.transforms = ay(c, r)), r.priority === ts.visibleArea ? (c = ns(c, r, yl(c, r), !1), c = rs(c, r, gl(c, r), Nt.limit)) : (c = rs(c, r, gl(c, r), Nt.unsafe), c = ns(c, r, yl(c, r), !0)), c;
}
function dy(e, r, t) {
  if (ct(e)) {
    var n = $e(e);
    return n.coordinates = Ie(n.coordinates, t), n.coordinates = Re(n.coordinates, Kt(tt(n.visibleArea), rt(n, r))), n;
  }
  return e;
}
function bl(e) {
  var r = e.coordinates, t = e.directions, n = e.positionRestrictions, i = e.sizeRestrictions, a = e.preserveRatio, s = e.allowedDirections, o = e.compensate, l = o === void 0 ? !0 : o, c = _({}, t), d = Ct(r, c).width, h = Ct(r, c).height;
  d < 0 && (c.left < 0 && c.right < 0 ? (c.left = -(r.width - i.minWidth) / (c.left / c.right), c.right = -(r.width - i.minWidth) / (c.right / c.left)) : c.left < 0 ? c.left = -(r.width - i.minWidth) : c.right < 0 && (c.right = -(r.width - i.minWidth))), h < 0 && (c.top < 0 && c.bottom < 0 ? (c.top = -(r.height - i.minHeight) / (c.top / c.bottom), c.bottom = -(r.height - i.minHeight) / (c.bottom / c.top)) : c.top < 0 ? c.top = -(r.height - i.minHeight) : c.bottom < 0 && (c.bottom = -(r.height - i.minHeight)));
  var f = pi(Ct(r, c), n), m = ft.every(function(x) {
    return !Gt(f[ty(x)], 0) || s[x];
  });
  l && m && (f.left && f.left > 0 && f.right === 0 ? (c.right += f.left, c.left -= f.left) : f.right && f.right > 0 && f.left === 0 && (c.left += f.right, c.right -= f.right), f.top && f.top > 0 && f.bottom === 0 ? (c.bottom += f.top, c.top -= f.top) : f.bottom && f.bottom > 0 && f.top === 0 && (c.top += f.bottom, c.bottom -= f.bottom), f = pi(Ct(r, c), n));
  var p = {
    width: 1 / 0,
    height: 1 / 0,
    left: 1 / 0,
    right: 1 / 0,
    top: 1 / 0,
    bottom: 1 / 0
  };
  if (ft.forEach(function(x) {
    var w = f[x];
    w && c[x] && (p[x] = Math.max(0, 1 - w / c[x]));
  }), a) {
    var v = Math.min.apply(Math, ft.map(function(x) {
      return p[x];
    }));
    v !== 1 / 0 && ft.forEach(function(x) {
      c[x] *= v;
    });
  } else
    ft.forEach(function(x) {
      p[x] !== 1 / 0 && (c[x] *= p[x]);
    });
  if (d = Ct(r, c).width, h = Ct(r, c).height, c.right + c.left && (d > i.maxWidth ? p.width = (i.maxWidth - r.width) / (c.right + c.left) : d < i.minWidth && (p.width = (i.minWidth - r.width) / (c.right + c.left))), c.bottom + c.top && (h > i.maxHeight ? p.height = (i.maxHeight - r.height) / (c.bottom + c.top) : h < i.minHeight && (p.height = (i.minHeight - r.height) / (c.bottom + c.top))), a) {
    var g = Math.min(p.width, p.height);
    g !== 1 / 0 && ft.forEach(function(x) {
      c[x] *= g;
    });
  } else
    p.width !== 1 / 0 && Qg.forEach(function(x) {
      c[x] *= p.width;
    }), p.height !== 1 / 0 && ey.forEach(function(x) {
      c[x] *= p.height;
    });
  return c;
}
function Gn(e, r, t) {
  return Lt(r + t, 0) ? e / 2 : Lt(r, 0) ? 0 : Lt(t, 0) ? e : e * Math.abs(r / (r + t));
}
function hy(e, r, t, n) {
  var i = n.aspectRatio, a = n.positionRestrictions, s = n.sizeRestrictions, o = _({}, e);
  r = _({}, r);
  var l = t.allowedDirections || {
    left: !0,
    right: !0,
    bottom: !0,
    top: !0
  };
  e.width < s.minWidth && (r.left = 0, r.right = 0), e.height < s.minHeight && (r.top = 0, r.bottom = 0), ft.forEach(function(E) {
    l[E] || (r[E] = 0);
  }), r = bl({
    coordinates: o,
    directions: r,
    sizeRestrictions: s,
    positionRestrictions: a,
    allowedDirections: l
  });
  var c = Ct(o, r).width, d = Ct(o, r).height, h = t.preserveAspectRatio ? oe(o) : On(c / d, i);
  if (h) {
    var f = t.respectDirection;
    if (f !== "width" && f !== "height" && (o.width >= o.height || h === 1 ? f = "width" : f = "height"), f === "width") {
      var m = c / h - o.height;
      if (l.top && l.bottom) {
        var p = r.top, v = r.bottom;
        r.bottom = Gn(m, v, p), r.top = Gn(m, p, v);
      } else l.bottom ? r.bottom = m : l.top ? r.top = m : l.right ? r.right = 0 : l.left && (r.left = 0);
    } else if (f === "height") {
      var g = o.width - d * h;
      if (l.left && l.right) {
        var x = r.left, w = r.right;
        r.left = -Gn(g, x, w), r.right = -Gn(g, w, x);
      } else l.left ? r.left = -g : l.right ? r.right = -g : l.top ? r.top = 0 : l.bottom && (r.bottom = 0);
    }
    r = bl({
      directions: r,
      coordinates: o,
      sizeRestrictions: s,
      positionRestrictions: a,
      preserveRatio: !0,
      compensate: t.compensate,
      allowedDirections: l
    });
  }
  return c = Ct(o, r).width, d = Ct(o, r).height, h = t.preserveAspectRatio ? oe(o) : On(c / d, i), h && Gt(Math.abs(h - c / d), 0) && ft.forEach(function(E) {
    r[E] = 0;
  }), Tu({
    width: e.width + r.right + r.left,
    height: e.height + r.top + r.bottom,
    left: e.left,
    top: e.top
  }, {
    left: -r.left,
    top: -r.top
  }, a);
}
function wl(e, r) {
  var t = r.toLowerCase();
  return {
    left: e.left + e.width * (t.indexOf("west") !== -1 ? 1 : t.indexOf("east") !== -1 ? 0 : 0.5),
    top: e.top + e.height * (t.indexOf("north") !== -1 ? 1 : t.indexOf("south") !== -1 ? 0 : 0.5)
  };
}
function Ru(e) {
  var r = e.toLowerCase();
  return {
    left: r.indexOf("east") === -1,
    top: r.indexOf("south") === -1,
    right: r.indexOf("west") === -1,
    bottom: r.indexOf("north") === -1
  };
}
function fy(e, r) {
  var t = e.toLowerCase(), n = {
    left: t.indexOf("west") === -1 ? r.left : -r.left,
    top: -r.top,
    right: r.left,
    bottom: r.top
  };
  ["north", "south", "center"].every(function(a) {
    return t.indexOf(a) === -1;
  }) && (n.top = 0, n.bottom = 0), ["west", "east", "center"].every(function(a) {
    return t.indexOf(a) === -1;
  }) && (n.left = 0, n.right = 0);
  var i = Ru(e);
  return ft.forEach(function(a) {
    i[a] || (n[a] = 0);
  }), n;
}
function py(e, r, t, n, i) {
  var a = n.reference, s = fy(r, t), o = Ru(r), l = hy(e, s, _(_({}, n), { allowedDirections: o }), i);
  return a && (l = Ie(l, vt(wl(a, r), wl(l, r)))), Re(l, i.positionRestrictions);
}
function my(e, r, t, n, i) {
  var a = sy(e), s = wt(e, r);
  return ct(e) ? _(_({}, $e(e)), { coordinates: py(e.coordinates, t, n, i, {
    positionRestrictions: Kt(rt(e, r), tt(e.visibleArea)),
    sizeRestrictions: {
      maxWidth: Math.min(s.maxWidth, e.visibleArea.width),
      maxHeight: Math.min(s.maxHeight, e.visibleArea.height),
      minWidth: Math.max(Math.min(s.minWidth, e.visibleArea.width), a),
      minHeight: Math.max(Math.min(s.minHeight, e.visibleArea.height), a)
    },
    aspectRatio: Jt(e, r)
  }) }) : e;
}
function vy(e, r, t) {
  var n = _(_({}, $e(e)), { boundary: t });
  if (n.visibleArea && n.coordinates && e.visibleArea) {
    n.visibleArea.height = n.visibleArea.width / oe(t), n.visibleArea.top += (e.visibleArea.height - n.visibleArea.height) / 2;
    var i = wt(n, r);
    (Math.max(i.minHeight, n.coordinates.height) - n.visibleArea.height > 0 || Math.max(i.minWidth, n.coordinates.width) - n.visibleArea.width > 0) && (n.visibleArea = Tt(n.visibleArea, Math.max(Math.max(i.minHeight, n.coordinates.height) / n.visibleArea.height, Math.max(i.minWidth, n.coordinates.width) / n.visibleArea.width))), n.visibleArea = Ri(n.visibleArea, bt(n, r));
    var a = Ns(ji(n.coordinates, tt(n.visibleArea)));
    n.visibleArea.width < n.coordinates.width && (a.left = 0), n.visibleArea.height < n.coordinates.height && (a.top = 0), n.visibleArea = Ie(n.visibleArea, a), n.visibleArea = Re(n.visibleArea, gt(n, r)), n = Au(n, r);
  }
  return n;
}
function gy(e, r, t) {
  if (ct(e)) {
    var n = $e(e), i = Ee(t) ? t : t.angle, a = Pt(Ce(_({ left: 0, top: 0 }, $t(e))), i);
    n.transforms.rotate += i, n.coordinates = _(_({}, yt({
      sizeRestrictions: wt(n, r),
      aspectRatio: Jt(n, r),
      width: n.coordinates.width,
      height: n.coordinates.height
    })), Pt(Ce(n.coordinates), i));
    var s = !Ee(t) && t.center ? t.center : Ce(e.coordinates), o = vt(Ce(e.coordinates), Pt(Ce(e.coordinates), i, s)), l = $t(n);
    return n.coordinates.left -= a.left - l.width / 2 + n.coordinates.width / 2 - o.left, n.coordinates.top -= a.top - l.height / 2 + n.coordinates.height / 2 - o.top, n.visibleArea = Ri(n.visibleArea, Rs(bt(n, r), {
      minWidth: n.coordinates.width,
      minHeight: n.coordinates.height
    })), n.coordinates = Re(n.coordinates, rt(n, r)), n.visibleArea = Ie(n.visibleArea, vt(Ce(n.coordinates), Ce(e.coordinates))), n.visibleArea = Re(n.visibleArea, gt(n, r)), n;
  }
  return e;
}
function yy(e, r, t, n) {
  if (ct(e)) {
    var i = $e(e), a = e.transforms.rotate, s = $t(e), o = {
      horizontal: t,
      vertical: n
    };
    if (o.horizontal || o.vertical) {
      var l = Pt({
        left: s.width / 2,
        top: s.height / 2
      }, -a), c = Pt(Ce(i.coordinates), -a), d = Pt({
        left: o.horizontal ? l.left - (c.left - l.left) : c.left,
        top: o.vertical ? l.top - (c.top - l.top) : c.top
      }, a);
      i.coordinates = Ie(i.coordinates, vt(d, Ce(i.coordinates))), c = Pt(Ce(i.visibleArea), -a), d = Pt({
        left: o.horizontal ? l.left - (c.left - l.left) : c.left,
        top: o.vertical ? l.top - (c.top - l.top) : c.top
      }, a), i.visibleArea = Ie(i.visibleArea, vt(d, Ce(i.visibleArea))), i.visibleArea = Re(i.visibleArea, gt(i, r));
    }
    return o.horizontal && (i.transforms.flip.horizontal = !e.transforms.flip.horizontal), o.vertical && (i.transforms.flip.vertical = !e.transforms.flip.vertical), i;
  }
  return e;
}
function xy(e, r, t) {
  var n, i = t.scale, a = i === void 0 ? 1 : i, s = t.move, o = s === void 0 ? {} : s;
  if (ct(e)) {
    var l = $e(e), c = 1 / (Ee(a) ? a : a.factor), d = Ee(a) ? void 0 : a.center, h = !Lt(c, 1), f = 1, m = 1;
    l.visibleArea = Ie(l.visibleArea, {
      left: o.left || 0,
      top: o.top || 0
    });
    var p = wt(l, r), v = rt(l, r), g = bt(l, r), x = {
      stencil: {
        minimum: Math.max(p.minWidth ? p.minWidth / l.coordinates.width : 0, p.minHeight ? p.minHeight / l.coordinates.height : 0),
        maximum: Math.min(p.maxWidth ? p.maxWidth / l.coordinates.width : 1 / 0, p.maxHeight ? p.maxHeight / l.coordinates.height : 1 / 0, Qa(l.coordinates, Nu(v)))
      },
      area: {
        maximum: Qa(l.visibleArea, g),
        minimum: ry(l.visibleArea, g)
      }
    };
    c && h && (c < 1 ? (m = Math.max(c, Math.max(x.area.minimum, x.stencil.minimum)), m > 1 && (m = 1)) : c > 1 && (m = Math.min(c, Math.min(x.area.maximum, x.stencil.maximum)), m < 1 && (m = 1))), m && (l.visibleArea = Tt(l.visibleArea, m, d));
    var w = {
      left: e.coordinates.left - e.visibleArea.left,
      right: e.visibleArea.width + e.visibleArea.left - (e.coordinates.width + e.coordinates.left),
      top: e.coordinates.top - e.visibleArea.top,
      bottom: e.visibleArea.height + e.visibleArea.top - (e.coordinates.height + e.coordinates.top)
    };
    return l.visibleArea = Re(l.visibleArea, {
      left: v.left !== void 0 ? v.left - w.left * m : void 0,
      top: v.top !== void 0 ? v.top - w.top * m : void 0,
      bottom: v.bottom !== void 0 ? v.bottom + w.bottom * m : void 0,
      right: v.right !== void 0 ? v.right + w.right * m : void 0
    }), l.visibleArea = Re(l.visibleArea, gt(l, r)), l.coordinates.width = l.coordinates.width * m, l.coordinates.height = l.coordinates.height * m, l.coordinates.left = l.visibleArea.left + w.left * m, l.coordinates.top = l.visibleArea.top + w.top * m, l.coordinates = Re(l.coordinates, Kt(tt(l.visibleArea), v)), h && c && (!((n = r.transformImage) === null || n === void 0) && n.adjustStencil) && (c > 1 ? f = Math.min(x.area.maximum, c) / m : c < 1 && (f = Math.max(l.coordinates.height / l.visibleArea.height, l.coordinates.width / l.visibleArea.width, c / m)), f !== 1 && (l.visibleArea = Tt(l.visibleArea, f, c > 1 ? d : Ce(l.coordinates)), l.visibleArea = Re(l.visibleArea, gt(l, r)), l.visibleArea = Ie(l.visibleArea, Ns(ji(l.coordinates, tt(l.visibleArea)))))), l;
  }
  return e;
}
function by(e, r, t) {
  return t.rotate && (e = gy(e, r, t.rotate)), t.flip && (e = yy(e, r, t.flip.horizontal, t.flip.vertical)), (t.move || t.scale) && (e = xy(e, r, t)), e;
}
function wy(e, r) {
  if (ct(e)) {
    var t = $e(e), n = Jt(e, r), i = wt(e, r), a = bt(e, r), s = On(oe(e.coordinates), n), o = s ? {
      height: e.coordinates.height,
      width: e.coordinates.height * s
    } : e.coordinates;
    t.coordinates = _(_({}, t.coordinates), yt({
      width: o.width,
      height: o.height,
      aspectRatio: n,
      sizeRestrictions: Rs(a, i)
    })), t.coordinates = Ie(t.coordinates, vt(Ce(e.coordinates), Ce(t.coordinates)));
    var l = Math.max(t.coordinates.width / t.visibleArea.width, t.coordinates.height / t.visibleArea.height, 1);
    return t.visibleArea = _(_({}, e.visibleArea), yt({
      width: e.visibleArea.width * l,
      height: e.visibleArea.height * l,
      aspectRatio: {
        minimum: oe(t.boundary),
        maximum: oe(t.boundary)
      },
      sizeRestrictions: a
    })), t.visibleArea = Ie(t.visibleArea, vt(Ce(e.visibleArea), Ce(t.visibleArea))), t.visibleArea = Re(t.visibleArea, gt(t, r)), t.coordinates = Re(t.coordinates, Kt(tt(t.visibleArea), rt(t, r))), t;
  }
  return e;
}
function Ey(e, r) {
  var t = yr(e);
  return {
    left: Ee(r.left) ? r.left * t : 0,
    top: Ee(r.top) ? r.top * t : 0,
    right: Ee(r.right) ? r.right * t : 0,
    bottom: Ee(r.bottom) ? r.bottom * t : 0
  };
}
function El(e, r) {
  var t = yr(e);
  return e.visibleArea ? {
    left: r.left * t + e.visibleArea.left,
    top: r.top * t + e.visibleArea.top
  } : r;
}
function Cy(e, r) {
  if (e) {
    var t = Math.abs(e.transforms.rotate % 180);
    return t <= 45 || t >= 135 ? r : {
      horizontal: r.vertical,
      vertical: r.horizontal
    };
  }
  return r;
}
function Sy(e) {
  return {
    left: Ee(e.left) ? e.left : 0,
    top: Ee(e.top) ? e.top : 0
  };
}
function Ny(e) {
  return {
    left: Ee(e.left) ? e.left : 0,
    top: Ee(e.top) ? e.top : 0,
    right: Ee(e.right) ? e.right : 0,
    bottom: Ee(e.bottom) ? e.bottom : 0
  };
}
function ju(e, r) {
  var t = yr(e);
  return {
    left: Ee(r.left) ? r.left * t : 0,
    top: Ee(r.top) ? r.top * t : 0
  };
}
function Oy(e, r) {
  return r.scale && (r.scale = {
    factor: Ee(r.scale) ? r.scale : r.scale.factor,
    center: !Ee(r.scale) && r.scale.center ? El(e, r.scale.center) : void 0
  }), r.rotate && (r.rotate = {
    angle: Ee(r.rotate) ? r.rotate : r.rotate.angle,
    center: !Ee(r.rotate) && r.rotate.center ? El(e, r.rotate.center) : void 0
  }), r.move && (r.move = ju(e, r.move)), r;
}
function Cl(e, r) {
  var t = r.getBoundingClientRect(), n = t.left, i = t.top, a = { left: 0, top: 0 }, s = 0;
  return e.forEach(function(o) {
    a.left += (o.clientX - n) / e.length, a.top += (o.clientY - i) / e.length;
  }), e.forEach(function(o) {
    s += wu({ left: a.left, top: a.top }, { left: o.clientX - n, top: o.clientY - i });
  }), { centerMass: a, spread: s, count: e.length };
}
function Ty(e, r, t, n) {
  n === void 0 && (n = {});
  var i, a, s;
  if (r.length === 1 && e.length === 1)
    n.move && (i = {
      left: r[0].clientX - e[0].clientX,
      top: r[0].clientY - e[0].clientY
    });
  else if (e.length > 1) {
    var o = Cl(r, t), l = Cl(e, t);
    if (n.rotate && r.length === 2 && e.length === 2) {
      var c = {
        left: [
          e[0].clientX - e[1].clientX,
          r[0].clientX - r[1].clientX
        ],
        top: [e[0].clientY - e[1].clientY, r[0].clientY - r[1].clientY]
      }, d = c.left[0] * c.top[1] - c.left[1] * c.top[0], h = c.left[0] * c.left[1] + c.top[0] * c.top[1];
      if (!Lt(h, 0) && !Lt(d, 0)) {
        var f = Math.atan2(d, h), m = -(f * 180) / Math.PI;
        s = {
          center: l.centerMass,
          angle: m
        };
      }
    }
    n.move && (i = {
      left: o.centerMass.left - l.centerMass.left,
      top: o.centerMass.top - l.centerMass.top
    }), n.scale && (a = {
      factor: l.spread / o.spread,
      center: l.centerMass
    });
  }
  return {
    move: i,
    scale: a,
    rotate: s
  };
}
function Ay(e, r, t) {
  t === void 0 && (t = 0.1);
  var n = r.getBoundingClientRect(), i = n.left, a = n.top, s = 1 - t * Jg(e.deltaY || e.detail || e.wheelDelta), o = {
    left: e.clientX - i,
    top: e.clientY - a
  };
  return { scale: { factor: s, center: o } };
}
function Xn(e) {
  return e.moveCoordinates || e.resizeCoordinates || e.transformImage.move || e.transformImage.rotate || e.transformImage.flip || e.transformImage.scale;
}
function Ry() {
  return {
    moveCoordinates: !1,
    resizeCoordinates: !1,
    transformImage: {
      rotate: !1,
      move: !1,
      scale: !1,
      flip: !1
    }
  };
}
function jy(e, r) {
  var t = $t(e), n = {};
  return r.imageRestriction && r.imageRestriction !== "none" && (n = {
    left: 0,
    top: 0,
    right: t.width,
    bottom: t.height
  }), n;
}
function _y(e, r) {
  var t = e.coordinates, n = e.boundary, i = $t(e), a = oe(n);
  if (t) {
    var s = {
      height: Math.max(t.height, i.height),
      width: Math.max(t.width, i.width)
    }, o = {
      left: 0,
      top: 0,
      width: oe(s) > a ? s.width : s.height * a,
      height: oe(s) > a ? s.width / a : s.height
    };
    o = Ri(o, bt(e, r)), o.left = t.left + t.width / 2 - o.width / 2, o.top = t.top + t.height / 2 - o.height / 2;
    var l = pi(t, tt(_({ left: 0, top: 0 }, i))), c = {};
    return !l.left && !l.right && o.width <= i.width && (c.left = 0, c.right = i.width), !l.top && !l.bottom && o.height <= i.height && (c.top = 0, c.bottom = i.height), Re(o, c);
  } else {
    var d = oe(i), h = {
      height: d < a ? i.height : i.width / a,
      width: d < a ? i.height * a : i.width
    };
    return {
      left: i.width / 2 - h.width / 2,
      top: i.height / 2 - h.height / 2,
      width: h.width,
      height: h.height
    };
  }
}
function ky(e, r) {
  var t = e.imageSize, n = e.visibleArea, i = wt(e, r), a = Jt(e, r), s;
  if (n)
    s = n;
  else {
    var o = Nu(rt(e, r));
    s = {
      width: Math.max(o.minWidth, Math.min(o.maxWidth, t.width)),
      height: Math.max(o.minHeight, Math.min(o.maxHeight, t.height))
    };
  }
  var l = Math.min(a.maximum || 1 / 0, Math.max(a.minimum || 0, oe(s))), c = s.width < s.height ? {
    width: s.width * 0.8,
    height: s.width * 0.8 / l
  } : {
    height: s.height * 0.8,
    width: s.height * 0.8 * l
  };
  return yt(_(_({}, c), { aspectRatio: a, sizeRestrictions: i }));
}
function My(e) {
  return {
    minWidth: mt(e.minWidth) ? Vt(e.minWidth) : 0,
    minHeight: mt(e.minHeight) ? Vt(e.minHeight) : 0,
    maxWidth: mt(e.maxWidth) ? Vt(e.maxWidth) : 1 / 0,
    maxHeight: mt(e.maxHeight) ? Vt(e.maxHeight) : 1 / 0
  };
}
function _u(e, r) {
  return My(r);
}
function Py(e) {
  var r = e.visibleArea, t = e.coordinates, n = r || $t(e);
  return {
    left: (r ? r.left : 0) + n.width / 2 - (t ? t.width / 2 : 0),
    top: (r ? r.top : 0) + n.height / 2 - (t ? t.height / 2 : 0)
  };
}
function Dy(e, r) {
  var t = e.visibleArea, n = e.boundary, i = r.imageRestriction, a = $t(e), s = {};
  return i === pr.fillArea ? s = {
    left: 0,
    top: 0,
    right: a.width,
    bottom: a.height
  } : i === pr.fitArea && (oe(n) > oe(a) ? (s = {
    top: 0,
    bottom: a.height
  }, t && (t.width > a.width ? (s.left = -(t.width - a.width) / 2, s.right = a.width - s.left) : (s.left = 0, s.right = a.width))) : (s = {
    left: 0,
    right: a.width
  }, t && (t.height > a.height ? (s.top = -(t.height - a.height) / 2, s.bottom = a.height - s.top) : (s.top = 0, s.bottom = a.height)))), s;
}
function Iy(e, r) {
  var t = e.boundary, n = r.imageRestriction, i = $t(e), a = {
    minWidth: 0,
    minHeight: 0,
    maxWidth: 1 / 0,
    maxHeight: 1 / 0
  };
  return n === pr.fillArea ? (a.maxWidth = i.width, a.maxHeight = i.height) : n === pr.fitArea && (oe(t) > oe(i) ? (a.maxHeight = i.height, a.maxWidth = i.height * oe(t)) : (a.maxWidth = i.width, a.maxHeight = i.width / oe(t))), a;
}
function Ly(e) {
  var r = e.getBoundingClientRect(), t = r.width, n = r.height;
  return {
    width: t,
    height: n
  };
}
function ku(e, r) {
  return e.aspectRatio ? {} : {
    aspectRatio: gr(pe(r.aspectRatio) ? r.aspectRatio() : r.aspectRatio)
  };
}
function Fy(e) {
  return function(r, t) {
    var n = pe(e) ? e(r, t) : e;
    return Rs(_u(r, t), n);
  };
}
function $y(e) {
  return _(_({}, e), { sizeRestrictions: function(r, t) {
    var n;
    return e.sizeRestrictions ? n = pe(e.sizeRestrictions) ? e.sizeRestrictions(r, t) : e.sizeRestrictions : n = _u(r, t), n;
  }, areaPositionRestrictions: function(r, t) {
    return e.areaPositionRestrictions ? pe(e.areaPositionRestrictions) ? e.areaPositionRestrictions(r, t) : e.areaPositionRestrictions : Dy(r, t);
  }, areaSizeRestrictions: function(r, t) {
    return e.areaSizeRestrictions ? pe(e.areaSizeRestrictions) ? e.areaSizeRestrictions(r, t) : e.areaSizeRestrictions : Iy(r, t);
  }, positionRestrictions: function(r, t) {
    return e.positionRestrictions ? pe(e.positionRestrictions) ? e.positionRestrictions(r, t) : e.positionRestrictions : jy(r, t);
  }, defaultCoordinates: function(r, t) {
    if (e.defaultCoordinates)
      return pe(e.defaultCoordinates) ? e.defaultCoordinates(r, t) : e.defaultCoordinates;
    var n = e.defaultSize;
    n || (n = ky);
    var i = pe(n) ? n(r, t) : n, a = e.defaultPosition || Py;
    return [
      i,
      function(s) {
        return _({}, pe(a) ? a(s, t) : a);
      }
    ];
  }, defaultVisibleArea: function(r, t) {
    return e.defaultVisibleArea ? pe(e.defaultVisibleArea) ? e.defaultVisibleArea(r, t) : e.defaultVisibleArea : _y(r, t);
  }, aspectRatio: function(r, t) {
    return gr(pe(e.aspectRatio) ? e.aspectRatio(r, t) : e.aspectRatio);
  } });
}
function si(e, r) {
  if (e && r) {
    var t = r();
    t && e(t);
  }
}
function da(e, r) {
  e.forEach(function(t) {
    si(t, r);
  });
}
var Uy = (
  /** @class */
  /* @__PURE__ */ function() {
    function e() {
      var r = this;
      this.getTransitions = function() {
        var t = r.getData(), n = r.getProps().transitions;
        return _(_({}, In(n, {
          timingFunction: "ease-in-out",
          duration: 350
        })), { active: t.transitions });
      }, this.getInteractions = function() {
        var t = r.getData().interactions;
        return Nn(t);
      }, this.hasInteractions = function() {
        var t = r.getData().interactions;
        return Xn(t);
      }, this.startTransitions = function() {
        var t = r.getProps(), n = t.onTransitionsStart, i = t.onUpdate, a = t.getInstance, s = r.getData(), o = s.transitions, l = Hr(s, ["transitions"]);
        r.setData(_(_({}, l), { transitions: !0 })), o || da([n, i], a), r.endTransitions();
      }, this.endTransitions = Cu(function() {
        var t = r.getProps(), n = t.onTransitionsEnd, i = t.onUpdate, a = t.getInstance;
        r.setData(_(_({}, r.getData()), { transitions: !1 })), da([n, i], a);
      }, function() {
        return r.getTransitions().duration;
      }), this.applyPostProcess = function(t, n) {
        var i = r.getProps(), a = i.settings, s = i.postProcess, o = t.name, l = t.interaction, c = l === void 0 ? !1 : l, d = t.transitions, h = d === void 0 ? !1 : d, f = t.immediately, m = f === void 0 ? !1 : f, p = {
          name: o,
          interaction: c,
          transitions: h,
          immediately: m
        };
        return Xg(s) ? s.reduce(function(v, g) {
          return g(v, a, p);
        }, n) : pe(s) ? s(n, a, p) : n;
      }, this.updateState = function(t, n, i) {
        n === void 0 && (n = {}), i === void 0 && (i = []);
        var a = n.transitions, s = a === void 0 ? !1 : a, o = r.getProps(), l = o.onTransitionsStart, c = o.getInstance, d = o.onChange, h = o.onUpdate, f = o.settings, m = r.getData(), p = pe(t) ? t(m.state, f) : t, v = p ? 1e-3 * yr(p) : 1e-3, g = !Mr(m.state, p, v), x = [
          "coordinates",
          "boundary",
          "visibleArea",
          "imageSize",
          "transforms"
        ].some(function(E) {
          var S;
          return !Mr((S = m.state) === null || S === void 0 ? void 0 : S[E], p == null ? void 0 : p[E], v);
        }), w = m;
        g && (s && x && r.endTransitions(), w = _(_({}, w), { state: $e(p), transitions: s && x }), r.setData(w), si(d, c)), w.transitions && !m.transitions && si(l, c), da(fv(i, [h]), c);
      }, this.setInteractions = function(t) {
        var n = r.getProps(), i = n.onInteractionStart, a = n.onInteractionEnd, s = n.getInstance, o = r.getInteractions(), l = _(_({}, o), t);
        if (Mr(o, l) || r.setData(_(_({}, r.getData()), { interactions: l })), Xn(o) !== Xn(l))
          if (!Xn(o))
            si(i, s);
          else {
            var c = r.getData().state;
            r.updateState(function() {
              return c && r.applyPostProcess({
                name: "interactionEnd",
                immediately: !0,
                transitions: !0
              }, c);
            }, {
              transitions: !0
            }, [a]);
          }
      }, this.resetState = function(t, n) {
        r.updateState(r.createDefaultState(t, n));
      }, this.clear = function() {
        r.updateState(null);
      }, this.reconcileState = function(t) {
        t === void 0 && (t = {});
        var n = r.getProps(), i = n.reconcileStateAlgorithm, a = n.settings, s = r.getData().state, o = t.transitions, l = o === void 0 ? !1 : o;
        if (s && !xl(s, a)) {
          var c = (i || wy)(s, a);
          c = r.applyPostProcess({
            name: "reconcileState",
            immediately: !0,
            transitions: l
          }, c), r.updateState(c, {
            transitions: l
          });
        }
      }, this.transformImage = function(t, n) {
        n === void 0 && (n = {});
        var i = n.transitions, a = i === void 0 ? !0 : i, s = n.interaction, o = s === void 0 ? !0 : s, l = n.immediately, c = l === void 0 ? !1 : l, d = n.normalize, h = d === void 0 ? !0 : d, f = r.getProps(), m = f.transformImageAlgorithm, p = f.onTransformImage, v = f.onTransformImageEnd, g = f.settings, x = r.getData().state, w = [];
        if (x) {
          h && (t = Oy(x, t));
          var E = r.applyPostProcess({
            name: "transformImage",
            transitions: a,
            immediately: c
          }, (m || by)(x, g, t));
          w.push(p), o ? r.setInteractions({
            transformImage: {
              rotate: !_e(t.rotate),
              flip: !_e(t.flip),
              scale: !_e(t.scale),
              move: !_e(t.move)
            }
          }) : (E = r.applyPostProcess({
            name: "transformImageEnd",
            transitions: a,
            immediately: !0
          }, E), w.push(v)), r.updateState(E, {
            transitions: c && a
          }, w);
        }
      }, this.transformImageEnd = function(t) {
        t === void 0 && (t = {});
        var n = t.immediately, i = n === void 0 ? !0 : n, a = t.transitions, s = a === void 0 ? !0 : a, o = r.getData().state, l = r.getProps().onTransformImageEnd;
        r.updateState(function() {
          return o && r.applyPostProcess({ name: "transformImageEnd", immediately: i, transitions: s }, o);
        }, {
          transitions: s
        }, [l]), r.setInteractions({
          transformImage: {
            rotate: !1,
            flip: !1,
            scale: !1,
            move: !1
          }
        });
      }, this.zoomImage = function(t, n) {
        n === void 0 && (n = {});
        var i = n.interaction, a = i === void 0 ? !1 : i, s = n.immediately, o = s === void 0 ? !0 : s, l = n.transitions, c = l === void 0 ? !0 : l, d = n.normalize, h = d === void 0 ? !1 : d;
        r.transformImage({
          scale: t
        }, { interaction: a, immediately: o, transitions: c, normalize: h });
      }, this.moveImage = function(t, n, i) {
        i === void 0 && (i = {});
        var a = i.interaction, s = a === void 0 ? !1 : a, o = i.immediately, l = o === void 0 ? !0 : o, c = i.transitions, d = c === void 0 ? !0 : c, h = i.normalize, f = h === void 0 ? !1 : h;
        r.transformImage({
          move: {
            left: t,
            top: n
          }
        }, { interaction: s, immediately: l, transitions: d, normalize: f });
      }, this.flipImage = function(t, n, i) {
        i === void 0 && (i = {});
        var a = i.interaction, s = a === void 0 ? !1 : a, o = i.immediately, l = o === void 0 ? !0 : o, c = i.transitions, d = c === void 0 ? !0 : c, h = i.normalize, f = h === void 0 ? !0 : h, m = r.getState(), p = {
          horizontal: t,
          vertical: n
        };
        r.transformImage({
          flip: m && f ? Cy(m, p) : p
        }, { interaction: s, immediately: l, transitions: d });
      }, this.rotateImage = function(t, n) {
        n === void 0 && (n = {});
        var i = n.interaction, a = i === void 0 ? !1 : i, s = n.immediately, o = s === void 0 ? !0 : s, l = n.transitions, c = l === void 0 ? !0 : l, d = n.normalize, h = d === void 0 ? !1 : d;
        r.transformImage({
          rotate: t
        }, { interaction: a, immediately: o, transitions: c, normalize: h });
      }, this.reset = function(t, n) {
        r.resetState(t, n);
      }, this.setState = function(t, n) {
        n === void 0 && (n = {});
        var i = r.getSettings(), a = r.getData().state, s = n.transitions, o = s === void 0 ? !0 : s, l = n.immediately, c = l === void 0 ? !1 : l, d = n.interaction, h = d === void 0 ? !1 : d, f = n.postprocess, m = f === void 0 ? !1 : f, p = t && (pe(t) ? t(a, i) : _(_({}, a), t));
        r.updateState(function() {
          return m ? p && r.applyPostProcess({
            name: "setState",
            immediately: c,
            transitions: o,
            interaction: h
          }, p) : p;
        }, {
          transitions: o
        });
      }, this.setCoordinates = function(t, n) {
        n === void 0 && (n = {});
        var i = r.getData().state, a = r.getProps(), s = a.setCoordinatesAlgorithm, o = a.settings, l = n.transitions, c = l === void 0 ? !0 : l, d = n.immediately, h = d === void 0 ? !0 : d;
        r.updateState(function() {
          return i && r.applyPostProcess({
            name: "setCoordinates",
            immediately: h,
            transitions: c
          }, (s || rs)(i, o, t, Nt.zoom));
        }, {
          transitions: c
        });
      }, this.setVisibleArea = function(t, n) {
        n === void 0 && (n = {});
        var i = n.transitions, a = i === void 0 ? !0 : i, s = n.immediately, o = s === void 0 ? !0 : s, l = r.getData().state, c = r.getProps(), d = c.setVisibleAreaAlgorithm, h = c.settings;
        r.updateState(function() {
          return l && r.applyPostProcess({ name: "setVisibleArea", immediately: o, transitions: a }, (d || ns)(l, h, t));
        }, {
          transitions: a
        });
      }, this.setBoundary = function(t, n) {
        n === void 0 && (n = {});
        var i = r.getData().state, a = r.getProps(), s = a.setBoundaryAlgorithm, o = a.settings, l = n.transitions, c = l === void 0 ? !1 : l, d = n.immediately, h = d === void 0 ? !0 : d;
        t ? r.updateState(function() {
          return i && r.applyPostProcess({ name: "setBoundary", immediately: h, transitions: c }, (s || vy)(i, o, t));
        }) : r.updateState(null);
      }, this.moveCoordinates = function(t, n) {
        n === void 0 && (n = {});
        var i = r.getData(), a = r.getProps(), s = a.moveCoordinatesAlgorithm, o = a.onMove, l = a.onMoveEnd, c = a.settings, d = n.interaction, h = d === void 0 ? !0 : d, f = n.transitions, m = f === void 0 ? !1 : f, p = n.immediately, v = p === void 0 ? !1 : p, g = n.normalize, x = g === void 0 ? !0 : g, w = [];
        if (!i.transitions && i.state) {
          var E = x ? ju(i.state, t) : Sy(t), S = r.applyPostProcess({ name: "moveCoordinates", interaction: h, immediately: v, transitions: m }, (s || dy)(i.state, c, E));
          w.push(o), h ? r.setInteractions({
            moveCoordinates: !0
          }) : (S = r.applyPostProcess({ name: "moveCoordinatesEnd", interaction: h, immediately: v, transitions: m }, S), w.push(l)), r.updateState(S, {
            transitions: v && m
          }, w);
        }
      }, this.moveCoordinatesEnd = function(t) {
        t === void 0 && (t = {});
        var n = r.getData().state, i = r.getProps().onMoveEnd, a = t.transitions, s = a === void 0 ? !0 : a, o = t.immediately, l = o === void 0 ? !1 : o;
        r.updateState(function() {
          return n && r.applyPostProcess({ name: "moveCoordinatesEnd", transitions: s, immediately: l }, n);
        }, {
          transitions: s
        }, [i]), r.setInteractions({
          moveCoordinates: !1
        });
      }, this.resizeCoordinates = function(t, n, i, a) {
        a === void 0 && (a = {});
        var s = r.getData().state, o = r.getProps(), l = o.resizeCoordinatesAlgorithm, c = o.onResize, d = o.onResizeEnd, h = o.settings, f = a.interaction, m = f === void 0 ? !0 : f, p = a.transitions, v = p === void 0 ? !1 : p, g = a.immediately, x = g === void 0 ? !1 : g, w = a.normalize, E = w === void 0 ? !0 : w, S = r.getTransitions();
        if (!S.active && s) {
          var C = [], D = E ? Ey(s, n) : Ny(n), R = r.applyPostProcess({ name: "resizeCoordinates", interaction: m, immediately: x, transitions: v }, (l || my)(s, h, t, D, ur(i) ? i : {}));
          C.push(c), m ? r.setInteractions({
            resizeCoordinates: !0
          }) : (R = r.applyPostProcess({ name: "resizeCoordinatesEnd", interaction: m, immediately: x, transitions: v }, R), C.push(d)), r.updateState(R, {
            transitions: x && v
          }, C);
        }
      }, this.resizeCoordinatesEnd = function(t) {
        t === void 0 && (t = {});
        var n = r.getProps().onResizeEnd, i = r.getData().state, a = t.transitions, s = a === void 0 ? !0 : a, o = t.immediately, l = o === void 0 ? !1 : o;
        r.updateState(function() {
          return i && r.applyPostProcess({ name: "resizeCoordinatesEnd", transitions: s, immediately: l }, i);
        }, {
          transitions: s
        }, [n]), r.setInteractions({
          resizeCoordinates: !1
        });
      }, this.getStencilCoordinates = function() {
        var t = r.getData().state;
        return Ts(t);
      }, this.getCoordinates = function(t) {
        t === void 0 && (t = {});
        var n = r.getData().state, i = r.getProps().settings;
        if (n && n.coordinates) {
          var a = t.round, s = a === void 0 ? !0 : a;
          return s ? oy(n, i) : _({}, n.coordinates);
        } else
          return null;
      }, this.getVisibleArea = function() {
        var t = r.getData().state;
        return t != null && t.visibleArea ? _({}, t.visibleArea) : null;
      }, this.getSettings = function() {
        var t = r.getProps().settings;
        return _({}, t);
      }, this.getState = function() {
        var t = r.getData().state;
        return $e(t);
      }, this.getTransforms = function() {
        var t = r.getData().state;
        return t ? Nn(t.transforms) : {
          rotate: 0,
          flip: {
            horizontal: !1,
            vertical: !1
          }
        };
      }, this.createDefaultState = function(t, n) {
        var i = r.getProps(), a = i.createStateAlgorithm, s = i.settings;
        return r.applyPostProcess({
          name: "createState",
          immediately: !0,
          transitions: !1
        }, (a || uy)({
          image: n,
          boundary: t
        }, s));
      }, this.isConsistent = function() {
        var t = r.getData().state, n = r.getProps().settings;
        return t ? xl(t, n) : !0;
      };
    }
    return e;
  }()
), Sl = {
  linear: function(e) {
    return e;
  },
  "ease-in": function(e) {
    return Math.pow(e, 1.675);
  },
  "ease-out": function(e) {
    return 1 - Math.pow(1 - e, 1.675);
  },
  "ease-in-out": function(e) {
    return 0.5 * (Math.sin((e - 0.5) * Math.PI) + 1);
  }
}, By = (
  /** @class */
  function() {
    function e() {
      this.active = !1;
    }
    return e.prototype.start = function(r) {
      var t;
      this.onStart = r.onStart, this.onProgress = r.onProgress, this.onStop = r.onStop, this.active || (t = this.onStart) === null || t === void 0 || t.call(this), this.id && window.cancelAnimationFrame(this.id), this.startTime = performance.now(), this.timingFunction = r.timingFunction, this.endTime = this.startTime + r.duration, this.active = !0, this.animate();
    }, e.prototype.animate = function() {
      var r = this;
      if (this.startTime && this.endTime) {
        var t = Sl[this.timingFunction];
        t || (process.env.NODE_ENV !== "production" && console.warn("[Animation] The timing function '" + t + "' is not supported. Available timing function: 'linear', 'ease-in', 'ease-in-out', 'ease-out'. Reset to 'ease-out'."), t = Sl["ease-out"]);
        var n = 1 - (this.endTime - performance.now()) / (this.endTime - this.startTime), i = Math.min(1, t(n));
        this.onProgress && this.onProgress(i), n < 1 ? this.id = window.requestAnimationFrame(function() {
          return r.animate();
        }) : this.stop();
      } else
        this.stop();
    }, e.prototype.stop = function() {
      this.active = !1, this.id && window.cancelAnimationFrame(this.id), this.onStop && this.onStop();
    }, e;
  }()
);
function Wy(e, r, t) {
  var n = t.rotate, i = t.flip, a = {
    width: "naturalWidth" in r ? r.naturalWidth : r.width,
    height: "naturalHeight" in r ? r.naturalHeight : r.height
  }, s = Su(a, n), o = e.getContext("2d");
  if (e.height = s.height, e.width = s.width, o) {
    o.save();
    var l = Pt(Ce(_({ left: 0, top: 0 }, a)), n);
    o.translate(-(l.left - s.width / 2), -(l.top - s.height / 2)), o.rotate(n * Math.PI / 180), o.translate(i.horizontal ? a.width : 0, i.vertical ? a.height : 0), o.scale(i.horizontal ? -1 : 1, i.vertical ? -1 : 1), o.drawImage(r, 0, 0, a.width, a.height), o.restore();
  }
  return e;
}
function Hy(e, r, t, n, i) {
  e.width = n ? n.width : t.width, e.height = n ? n.height : t.height;
  var a = e.getContext("2d");
  if (a) {
    a.clearRect(0, 0, e.width, e.height), i && (i.imageSmoothingEnabled && (a.imageSmoothingEnabled = i.imageSmoothingEnabled), i.imageSmoothingQuality && (a.imageSmoothingQuality = i.imageSmoothingQuality), i.fillColor && (a.fillStyle = i.fillColor, a.fillRect(0, 0, e.width, e.height), a.save()));
    var s = t.left < 0 ? -t.left : 0, o = t.top < 0 ? -t.top : 0;
    a.drawImage(r, t.left + s, t.top + o, t.width, t.height, s * (e.width / t.width), o * (e.height / t.height), e.width, e.height);
  }
  return e;
}
function zy(e, r, t, n, i) {
  if (ct(e)) {
    var a = e.transforms, s = e.coordinates, o = a.rotate !== 0 || a.flip.horizontal || a.flip.vertical, l = o ? Wy(n, r, a) : r, c = _({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: 1 / 0, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, i), d = function(m) {
      return m.find(function(p) {
        return mt(p);
      });
    }, h = yt({
      sizeRestrictions: {
        minWidth: d([c.width, c.minWidth]) || 0,
        minHeight: d([c.height, c.minHeight]) || 0,
        maxWidth: d([c.width, c.maxWidth]) || 1 / 0,
        maxHeight: d([c.height, c.maxHeight]) || 1 / 0
      },
      width: s.width,
      height: s.height,
      aspectRatio: {
        minimum: s.width / s.height,
        maximum: s.width / s.height
      }
    });
    if (c.maxArea && h.width * h.height > c.maxArea) {
      var f = Math.sqrt(c.maxArea / (h.width * h.height));
      h = {
        width: Math.round(f * h.width),
        height: Math.round(f * h.height)
      };
    }
    return Hy(t, l, s, h, c);
  } else
    return null;
}
function Vy(e, r, t) {
  r.style.width = "0px", r.style.height = "0px", r.style.width = Math.max(e.clientWidth, t.width) + "px";
  var n = t.width / t.height;
  r.style.height = Math.max(e.clientHeight, r.clientWidth / n) + "px", r.style.width = r.clientHeight * n + "px";
}
function Yy(e, r, t) {
  r.style.width = "0px", r.style.height = "0px", r.style.width = Math.max(e.getBoundingClientRect().width, t.width) + "px";
  var n = t.width / t.height;
  r.style.height = Math.max(e.getBoundingClientRect().height, r.getBoundingClientRect().width / n) + "px", r.style.width = r.getBoundingClientRect().height * n + "px", r.clientWidth / r.clientHeight > e.clientWidth / e.clientHeight ? r.clientWidth > e.clientWidth && (r.style.width = e.clientWidth + "px", r.style.height = e.clientWidth / n + "px") : r.clientHeight > e.clientHeight && (r.style.height = e.clientHeight + "px", r.style.width = e.clientHeight * n + "px");
}
var qy = 4;
function Gy(e) {
  e = e.replace(/^data:([^;]+);base64,/gim, "");
  for (var r = atob(e), t = r.length, n = new ArrayBuffer(t), i = new Uint8Array(n), a = 0; a < t; a++)
    i[a] = r.charCodeAt(a);
  return n;
}
function Xy(e, r) {
  var t = new XMLHttpRequest();
  t.open("GET", e, !0), t.responseType = "blob", t.onload = function() {
    (this.status == 200 || this.status === 0) && r(this.response);
  }, t.send();
}
function Ky(e) {
  var r = {
    flip: {
      horizontal: !1,
      vertical: !1
    },
    rotate: 0
  };
  if (e)
    switch (e) {
      case 2:
        r.flip.horizontal = !0;
        break;
      case 3:
        r.rotate = -180;
        break;
      case 4:
        r.flip.vertical = !0;
        break;
      case 5:
        r.rotate = 90, r.flip.vertical = !0;
        break;
      case 6:
        r.rotate = 90;
        break;
      case 7:
        r.rotate = 90, r.flip.horizontal = !0;
        break;
      case 8:
        r.rotate = -90;
        break;
    }
  return r;
}
function Jy(e) {
  return new Promise(function(r, t) {
    try {
      if (e)
        if (/^data:/i.test(e))
          r(Gy(e));
        else if (/^blob:/i.test(e)) {
          var n = new FileReader();
          n.onload = function(a) {
            var s;
            r((s = a.target) === null || s === void 0 ? void 0 : s.result);
          }, Xy(e, function(a) {
            n.readAsArrayBuffer(a);
          });
        } else {
          var i = new XMLHttpRequest();
          i.onreadystatechange = function() {
            i.readyState === qy && (i.status === 200 || i.status === 0 ? r(i.response) : t("Warning: could not load an image to parse its orientation"));
          }, i.onprogress = function() {
            i.getResponseHeader("content-type") !== "image/jpeg" && i.abort();
          }, i.withCredentials = !1, i.open("GET", e, !0), i.responseType = "arraybuffer", i.send(null);
        }
      else
        t("Error: the image is empty");
    } catch (a) {
      t(a);
    }
  });
}
function Zy(e) {
  var r = e.rotate, t = r === void 0 ? 0 : r, n = e.flip, i = n === void 0 ? { horizontal: !1, vertical: !1 } : n, a = e.scale, s = a === void 0 ? 1 : a;
  return " rotate(" + t + "deg) scaleX(" + s * (i.horizontal ? -1 : 1) + ") scaleY(" + s * (i.vertical ? -1 : 1) + ")";
}
function Qy(e, r, t) {
  var n = "", i;
  for (i = r, t += r; i < t; i++)
    n += String.fromCharCode(e.getUint8(i));
  return n;
}
function e1(e) {
  try {
    var r = new DataView(e), t, n = void 0, i = void 0, a = void 0, s = void 0, o = void 0;
    if (r.getUint8(0) === 255 && r.getUint8(1) === 216)
      for (var l = r.byteLength, c = 2; c + 1 < l; ) {
        if (r.getUint8(c) === 255 && r.getUint8(c + 1) === 225) {
          s = c;
          break;
        }
        c++;
      }
    if (s && (n = s + 4, i = s + 10, Qy(r, n, 4) === "Exif")) {
      var d = r.getUint16(i);
      if (a = d === 18761, (a || d === 19789) && r.getUint16(i + 2, a) === 42) {
        var h = r.getUint32(i + 4, a);
        h >= 8 && (o = i + h);
      }
    }
    if (o)
      for (var f = r.getUint16(o, a), m = 0; m < f; m++) {
        var c = o + m * 12 + 2;
        if (r.getUint16(c, a) === 274) {
          c += 8, t = r.getUint16(c, a), r.setUint16(c, 1, a);
          break;
        }
      }
    return t;
  } catch {
    return null;
  }
}
function t1(e) {
  for (var r = [], t = 8192, n = new Uint8Array(e); n.length > 0; ) {
    var i = n.subarray(0, t);
    r.push(String.fromCharCode.apply(null, Array.from ? Array.from(i) : i.slice())), n = n.subarray(t);
  }
  return "data:image/jpeg;base64," + btoa(r.join(""));
}
function ha(e) {
  var r = e.src, t = e.arrayBuffer, n = t === void 0 ? null : t, i = e.orientation, a = i === void 0 ? null : i, s = {
    src: r,
    arrayBuffer: n,
    revoke: !1,
    transforms: {
      flip: {
        horizontal: !1,
        vertical: !1
      },
      rotate: 0
    }
  };
  return n && a && a > 1 ? yu(r) || !xu(r) ? (s.src = URL.createObjectURL(new Blob([n])), s.revoke = !0) : s.src = t1(n) : s.src = r, a && (s.transforms = Ky(a)), s;
}
function r1(e, r) {
  r === void 0 && (r = {});
  var t = r.checkOrientation, n = r.parse;
  return new Promise(function(i) {
    t || n ? Jy(e).then(function(a) {
      var s = e1(a);
      i(ha(a ? { src: e, arrayBuffer: a, orientation: s } : { src: e, arrayBuffer: null, orientation: null }));
    }).catch(function(a) {
      console.warn(a), i(ha({ src: e }));
    }) : i(ha({ src: e }));
  });
}
function n1(e, r) {
  return r === void 0 && (r = {}), new Promise(function(t, n) {
    var i = document.createElement("img");
    r.crossOrigin && (i.crossOrigin = r.crossOrigin !== !0 ? r.crossOrigin : "anonymous"), i.src = e, i.style.visibility = "hidden", i.style.position = "fixed", document.body.appendChild(i), i.complete ? (t(i), document.body.removeChild(i)) : (i.addEventListener("load", function() {
      t(i), document.body.removeChild(i);
    }), i.addEventListener("error", function() {
      n(null), document.body.removeChild(i);
    }));
  });
}
function i1(e, r) {
  return r === void 0 && (r = {}), r1(e, _(_({}, r), { crossOrigin: Gg(e) && r.crossOrigin })).then(function(t) {
    return new Promise(function(n, i) {
      n1(t.src, r).then(function(a) {
        n(_(_({}, t), { width: a.naturalWidth, height: a.naturalHeight }));
      }).catch(function() {
        i(null);
      });
    });
  });
}
function Mu(e, r, t, n, i) {
  i === void 0 && (i = null);
  var a = e.width > e.height ? {
    width: Math.min(512, e.width),
    height: Math.min(512, e.width) / (e.width / e.height)
  } : {
    height: Math.min(512, e.height),
    width: Math.min(512, e.height) * (e.width / e.height)
  }, s = $t(r), o = {
    rotate: r.transforms.rotate,
    flip: {
      horizontal: r.transforms.flip.horizontal,
      vertical: r.transforms.flip.vertical
    },
    translateX: t.left / n,
    translateY: t.top / n,
    scale: 1 / n
  }, l = {
    rotate: {
      left: (a.width - s.width) / (2 * n),
      top: (a.height - s.height) / (2 * n)
    },
    scale: {
      left: (1 - 1 / n) * a.width / 2,
      top: (1 - 1 / n) * a.height / 2
    }
  }, c = _(_({}, o), { scale: o.scale * (e.width / a.width) }), d = {
    width: a.width + "px",
    height: a.height + "px",
    left: "0px",
    top: "0px",
    transition: "none",
    transform: "translate3d(" + (-l.rotate.left - l.scale.left - o.translateX) + "px, " + (-l.rotate.top - l.scale.top - o.translateY) + "px, 0px)" + Zy(c),
    willChange: "none"
  };
  return i && i.active && (d.willChange = "transform", d.transition = i.duration + "ms " + i.timingFunction), d;
}
function a1(e, r, t) {
  return t === void 0 && (t = null), e && r && r.visibleArea ? Mu(e, r, r.visibleArea, yr(r), t) : {};
}
function s1(e, r, t, n) {
  return n === void 0 && (n = null), e && r && r.visibleArea && r.coordinates ? Mu(e, r, r.coordinates, oe(r.coordinates) > oe(t) ? r.coordinates.width / t.width : r.coordinates.height / t.height, n) : {};
}
function o1(e, r) {
  if (ct(e)) {
    var t = $e(e), n = {
      width: 0,
      height: 0
    };
    oe(t.boundary) > oe(t.coordinates) ? (n.height = t.boundary.height * 0.8, n.width = n.height * oe(t.coordinates)) : (n.width = t.boundary.width * 0.8, n.height = n.width * oe(t.coordinates)), t.visibleArea = Tt(t.visibleArea, t.coordinates.width * t.boundary.width / (t.visibleArea.width * n.width));
    var i = Os(t.visibleArea, bt(t, r));
    return t.visibleArea = Tt(t.visibleArea, i), i !== 1 && (n.height /= i, n.width /= i), t.visibleArea = Ie(t.visibleArea, vt(Ce(t.coordinates), Ce(t.visibleArea))), t.visibleArea = Re(t.visibleArea, gt(t, r)), t.coordinates = Re(t.coordinates, Kt(tt(t.visibleArea), rt(t, r))), t;
  }
  return e;
}
function l1(e, r, t) {
  return t.immediately ? o1(e, r) : e;
}
function c1(e) {
  process.env.NODE_ENV === "development" && console.warn("Deprecation warning: ".concat(e));
}
function u1() {
  var e = ue([]);
  return function(r) {
    e.current.indexOf(r) === -1 && (c1(r), e.current.push(r));
  };
}
function d1(e) {
  return jt(e);
}
function h1() {
  var e = ue(!0);
  return e.current ? (e.current = !1, !0) : e.current;
}
var dn = function(e, r) {
  var t = h1();
  Ye(function() {
    if (!t)
      return e();
  }, r);
};
function Pu(e) {
  var r = Ne(ke(e), 2), t = r[0], n = r[1], i = Ne(ke(null), 2), a = i[0], s = i[1], o = ue(e);
  return dn(function() {
    a && a(t, o.current);
  }, [a]), [
    t,
    function(l, c) {
      o.current = t, n(l), s(function() {
        return c;
      });
    }
  ];
}
var f1 = (
  /** @class */
  function(e) {
    vr(r, e);
    function r(t, n) {
      var i = e.call(this) || this;
      return i.props = t, i.notify = n, i.data = {
        state: null,
        transitions: !1,
        interactions: Ry()
      }, i;
    }
    return r.prototype.getProps = function() {
      return this.props();
    }, r.prototype.setData = function(t) {
      this.data = t, this.notify();
    }, r.prototype.getData = function() {
      return this.data;
    }, r;
  }(Uy)
);
function Du() {
  var e = Ne(ke({}), 2);
  e[0];
  var r = e[1];
  return function() {
    r({});
  };
}
function p1(e) {
  var r = ue(e);
  return r.current = e, function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return r.current.apply(r, qt([], Ne(t), !1));
  };
}
function m1(e) {
  var r = Du(), t = p1(function() {
    var i = e(), a = i.settings, s = Hr(i, ["settings"]), o = _({ imageRestriction: pr.fitArea, transformImage: {
      adjustStencil: !0
    } }, a), l = _({ transitions: !0 }, s);
    return _({ settings: _(_({}, o), $y(o)) }, l);
  }), n = ue(new f1(t, r));
  return n.current;
}
function v1(e) {
  var r = e.src, t = e.onLoadingStart, n = e.onLoadingEnd, i = e.onError, a = e.onLoad, s = e.crossOrigin, o = e.checkOrientation, l = e.canvas, c = e.unloadTime, d = Ne(ke(null), 2), h = d[0], f = d[1], m = Ne(ke(!1), 2), p = m[0], v = m[1], g = Ne(Pu(!1), 2), x = g[0], w = g[1], E = ue(null);
  return Ye(function() {
    if (E.current !== r)
      if (E.current = r || null, w(!1), r) {
        v(!0), t == null || t();
        var S = [
          i1(r, {
            crossOrigin: _e(s) ? l : s,
            checkOrientation: o
          })
        ];
        x && c && S.push(pl(c)), Promise.all(S).then(function(C) {
          var D = Ne(C, 1), R = D[0];
          E.current === r && f(R);
        }).catch(function() {
          E.current === r && (i == null || i());
        }).finally(function() {
          E.current === r && (n == null || n(), v(!1));
        });
      } else
        c ? pl(c).then(function() {
          E.current === r && f(null);
        }) : f(null);
  }, [r, h]), Ye(function() {
    h && w(!0, function() {
      a == null || a(h);
    });
  }, [h]), {
    isLoading: function() {
      return p;
    },
    isLoaded: function() {
      return x;
    },
    getImage: function() {
      return h;
    },
    setImage: f
  };
}
var Iu = function(e) {
  var r = ue(e), t = function() {
    r.current && r.current();
  };
  Ye(function() {
    r.current = e;
  }, [e]), Ye(function() {
    return window.addEventListener("resize", t), window.addEventListener("orientationchange", t), function() {
      window.removeEventListener("resize", t), window.removeEventListener("orientationchange", t);
    };
  }, []);
};
function g1(e, r) {
  r === void 0 && (r = !0);
  var t = Ne(ke(r), 2), n = t[0], i = t[1];
  return Ur(function() {
    n && !e.hasInteractions() && e.reconcileState();
  }), {
    pause: function() {
      i(!1);
    },
    resume: function() {
      i(!0);
    }
  };
}
function y1(e) {
  var r = this, t = e(), n = t.src, i = t.onReady, a = t.onError, s = t.onUpdate, o = t.canvas, l = o === void 0 ? !0 : o, c = t.unloadTime, d = c === void 0 ? 500 : c, h = t.crossOrigin, f = h === void 0 ? !0 : h, m = t.checkOrientation, p = m === void 0 ? !0 : m, v = t.autoReconcileState, g = v === void 0 ? !0 : v, x = ue(null), w = ue(null), E = ue(null), S = ue(null), C = Ne(Pu(null), 2), D = C[0], R = C[1], N = m1(function() {
    return _(_({}, e()), { getInstance: function() {
      return S.current;
    } });
  }), M = v1({
    src: n,
    crossOrigin: f,
    checkOrientation: p,
    unloadTime: d,
    canvas: l,
    onError: function() {
      S.current && (a == null || a(S.current));
    }
  }), Z = g1(N, g), Q = function() {
    return Fo(r, void 0, void 0, function() {
      var Y, V, W;
      return $o(this, function(K) {
        switch (K.label) {
          case 0:
            return w.current ? (Z.pause(), Y = M.getImage(), [4, (W = w.current) === null || W === void 0 ? void 0 : W.stretchTo(Y)]) : [3, 2];
          case 1:
            V = K.sent(), R(Y, function() {
              V && Y ? N.reset(V, Y) : N.clear();
            }), Z.resume(), K.label = 2;
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, te = function() {
    return Fo(r, void 0, void 0, function() {
      var Y, V, W, K;
      return $o(this, function($) {
        switch ($.label) {
          case 0:
            return w.current ? (Z.pause(), Y = M.getImage(), [4, (K = w.current) === null || K === void 0 ? void 0 : K.stretchTo(Y)]) : [3, 2];
          case 1:
            V = $.sent(), V && Y ? (W = N.getState(), W ? (V.width !== W.boundary.width || V.height !== W.boundary.height) && (N.setBoundary(V), N.reconcileState()) : N.reset(V, Y)) : N.clear(), Z.resume(), $.label = 2;
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, z = {
    reset: function() {
      return Q();
    },
    refresh: function() {
      return te();
    },
    setImage: function(Y) {
      return R(Y);
    },
    reconcileState: N.reconcileState,
    moveCoordinates: N.moveCoordinates,
    moveCoordinatesEnd: N.moveCoordinatesEnd,
    resizeCoordinates: N.resizeCoordinates,
    clear: N.clear,
    resizeCoordinatesEnd: N.resizeCoordinatesEnd,
    moveImage: N.moveImage,
    flipImage: N.flipImage,
    zoomImage: N.zoomImage,
    rotateImage: N.rotateImage,
    transformImage: N.transformImage,
    transformImageEnd: N.transformImageEnd,
    setCoordinates: N.setCoordinates,
    setVisibleArea: N.setVisibleArea,
    startTransitions: N.startTransitions,
    setState: N.setState,
    hasInteractions: N.hasInteractions,
    getStencilCoordinates: N.getStencilCoordinates,
    getCoordinates: N.getCoordinates,
    getVisibleArea: N.getVisibleArea,
    getTransforms: N.getTransforms,
    getTransitions: N.getTransitions,
    getInteractions: N.getInteractions,
    getSettings: N.getSettings,
    getState: N.getState,
    getDefaultState: function() {
      var Y = N.getState(), V = M.getImage();
      return Y && V ? N.createDefaultState(Y.boundary, V) : null;
    },
    getCanvas: function(Y) {
      var V = N.getState();
      return x.current && E.current && V ? E.current.draw(V, x.current, Y) : null;
    },
    getImage: function() {
      return D ? _({}, D) : null;
    },
    isLoading: M.isLoading,
    isLoaded: M.isLoaded
  };
  return Iu(function() {
    te();
  }), dn(function() {
    Q();
  }, [M.getImage()]), dn(function() {
    S.current && D && (i == null || i(S.current));
  }, [D]), dn(function() {
    S.current && (s == null || s(S.current));
  }, [M.isLoaded(), M.isLoading()]), mr(S, function() {
    return z;
  }), {
    cropper: z,
    refs: {
      image: x,
      boundary: w,
      canvas: E
    },
    image: D
  };
}
var js = jt(function(e, r) {
  var t = e.className, n = e.style, i = e.stretcherClassName, a = e.contentClassName, s = e.stretchAlgorithm, o = s === void 0 ? Vy : s, l = e.sizeAlgorithm, c = l === void 0 ? Ly : l, d = e.children, h = ue(null), f = ue(null);
  return mr(r, function() {
    return {
      reset: function() {
        var m = h.current;
        m && (m.style.height = "", m.style.width = "");
      },
      stretchTo: function(m) {
        var p = h.current, v = f.current;
        if (m != null && m.width && (m != null && m.height) && p && v) {
          o(v, p, m);
          var g = c(v, m);
          return Promise.resolve(g.width && g.height ? g : null);
        } else
          return p && (p.style.height = "", p.style.width = ""), Promise.resolve(null);
      }
    };
  }), T.createElement(
    "div",
    { ref: f, style: n, className: ie("advanced-cropper-boundary", t) },
    T.createElement("div", { ref: h, className: ie(["advanced-cropper-boundary__stretcher", i]) }),
    T.createElement("div", { className: ie(["advanced-cropper-boundary__content", a]) }, d)
  );
});
js.displayName = "StretchableBoundary";
var Lu = function(e) {
  var r = e.visible, t = e.className, n = e.style, i = e.children;
  return T.createElement("div", { style: n, className: ie(t, "advanced-cropper-fade", !!r && "advanced-cropper-fade--visible") }, i);
}, x1 = function(e) {
  var r = e.cropper, t = e.children, n = e.className, i = e.style, a = r ? r.getState() : null, s = r ? r.isLoaded() : !1;
  return T.createElement(
    "div",
    { className: ie(n, "advanced-cropper-wrapper"), style: i },
    T.createElement(Lu, { visible: a && s, className: "advanced-cropper-wrapper__fade" }, t)
  );
};
function Fu(e) {
  e.preventDefault();
}
var $u = jt(function(e, r) {
  var t = e.className, n = e.style, i = e.cropper, a = e.crossOrigin, s = a === void 0 ? !0 : a, o = i.getState(), l = i.getTransitions(), c = i.getImage(), d = c && o ? a1(c, o, l) : {}, h = c ? c.src : void 0;
  return h ? T.createElement("img", { key: h, ref: r, className: ie("advanced-cropper-background-image", t), src: h, crossOrigin: s === !0 ? "anonymous" : s || void 0, style: _(_({}, d), n), onMouseDown: Fu }) : null;
});
$u.displayName = "CropperBackgroundImage";
var Uu = jt(function(e, r) {
  var t = ue(null), n = ue(null);
  return mr(r, function() {
    return {
      draw: function(i, a, s) {
        return s === void 0 && (s = {}), a && t.current && n.current ? zy(i, a, t.current, n.current, s) : null;
      }
    };
  }), T.createElement(
    T.Fragment,
    null,
    T.createElement("canvas", { className: "advanced-cropper-canvas", ref: t }),
    T.createElement("canvas", { className: "advanced-cropper-canvas", ref: n })
  );
});
Uu.displayName = "CropperCanvas";
var _i = (
  /** @class */
  function(e) {
    vr(r, e);
    function r(t) {
      var n = e.call(this, t) || this;
      return n.processMove = function(i, a) {
        var s, o = n.container.current;
        if (o && n.touches.length) {
          var l = o.getBoundingClientRect(), c = l.left, d = l.top;
          if (n.touches.length === 1 && a.length === 1 && n.props.onMove) {
            var h = {
              left: Math.abs(a[0].clientX - n.anchor.left - c) < Math.abs(n.touches[0].clientX - n.anchor.left - c),
              top: Math.abs(a[0].clientY - n.anchor.top - d) < Math.abs(n.touches[0].clientY - n.anchor.top - d)
            }, f = {
              left: 0,
              top: 0
            };
            (!n.props.useAnchor || !h.left) && (f.left = a[0].clientX - n.touches[0].clientX), (!n.props.useAnchor || !h.top) && (f.top = a[0].clientY - n.touches[0].clientY), (s = n.props) === null || s === void 0 || s.onMove(f, i), n.touches = qt([], Ne(a), !1);
          }
        }
      }, n.processEnd = function() {
        var i = n.props, a = i.onMoveEnd, s = i.onLeave;
        !n.props.disabled && n.touches.length && (a == null || a()), n.hovered && (s == null || s(), n.hovered = !1), n.touches = [];
      }, n.initAnchor = function(i) {
        var a = n.container.current;
        if (a) {
          var s = a.getBoundingClientRect(), o = s.left, l = s.top;
          n.anchor = {
            left: i.clientX - o,
            top: i.clientY - l
          };
        }
      }, n.onMouseOver = function() {
        var i = n.props, a = i.onEnter, s = i.disabled;
        !n.hovered && !s && (n.hovered = !0, a == null || a());
      }, n.onMouseLeave = function() {
        var i = n.props.onLeave;
        n.hovered && !n.touches.length && (n.hovered = !1, i == null || i());
      }, n.onTouchStart = function(i) {
        var a = n.props, s = a.onEnter, o = a.onMoveStart, l = a.disabled;
        if (i.cancelable) {
          n.touches = Array.from(i.touches);
          var c = !l && i.touches.length === 1;
          c && (n.touches = Array.from(i.touches), o == null || o()), !n.hovered && !l && (n.hovered = !0, s == null || s()), (n.started || c) && (i.preventDefault(), i.stopPropagation());
        }
      }, n.onTouchEnd = function() {
        n.started = !1, n.processEnd();
      }, n.onTouchMove = function(i) {
        n.touches.length >= 1 && (n.started ? (n.processMove(i, Array.from(i.touches)), i.preventDefault(), i.stopPropagation()) : wu({ left: n.touches[0].clientX, top: n.touches[0].clientY }, { left: i.touches[0].clientX, top: i.touches[0].clientY }) > (n.props.activationDistance || 0) && (n.initAnchor({
          clientX: i.touches[0].clientX,
          clientY: i.touches[0].clientY
        }), n.started = !0));
      }, n.onMouseDown = function(i) {
        var a = n.props, s = a.onMoveStart, o = a.disabled;
        if (!o && i.button === 0) {
          var l = {
            clientX: i.clientX,
            clientY: i.clientY
          };
          n.touches = [l], n.initAnchor(l), i.stopPropagation(), s == null || s();
        }
      }, n.onMouseMove = function(i) {
        !n.props.disabled && n.touches.length && (n.processMove(i, [
          {
            clientX: i.clientX,
            clientY: i.clientY
          }
        ]), i.preventDefault && i.cancelable && i.preventDefault(), i.stopPropagation());
      }, n.onMouseUp = function() {
        n.processEnd();
      }, n.touches = [], n.hovered = !1, n.started = !1, n.anchor = {
        left: 0,
        top: 0
      }, n.container = Yt(), n;
    }
    return r.prototype.componentWillUnmount = function() {
      window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
      var t = this.container.current;
      t && (t.removeEventListener("touchstart", this.onTouchStart), t.removeEventListener("mousedown", this.onMouseDown));
    }, r.prototype.componentDidMount = function() {
      window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
      var t = this.container.current;
      t && (t.addEventListener("touchstart", this.onTouchStart, {
        passive: !1
      }), t.addEventListener("mousedown", this.onMouseDown, {
        passive: !1
      }));
    }, r.prototype.componentDidUpdate = function(t) {
      this.props.disabled && !t.disabled && (this.touches = []);
    }, r.prototype.render = function() {
      var t = this.props, n = t.children, i = t.className;
      return T.createElement("div", { className: ie("advanced-cropper-draggable-element", i), ref: this.container, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave }, n);
    }, r.defaultProps = {
      disabled: !1,
      activationDistance: 30,
      useAnchor: !0,
      rerender: !0
    }, r;
  }(me)
), b1 = function(e) {
  var r = e.position, t = e.className, n = e.disabled, i = e.onDrag, a = e.onDragEnd, s = e.onLeave, o = e.onEnter, l = e.children;
  return T.createElement(
    _i,
    { className: ie([
      "advanced-cropper-line-wrapper",
      r && "advanced-cropper-line-wrapper--".concat(r),
      n && "advanced-cropper-line-wrapper--disabled",
      t
    ]), disabled: n, onMove: i, onMoveEnd: a, onLeave: s, onEnter: o, activationDistance: 0 },
    T.createElement("div", { className: ie([
      "advanced-cropper-line-wrapper__content",
      r && "advanced-cropper-line-wrapper__content--".concat(r)
    ]) }, l)
  );
}, _s = function(e) {
  var r, t, n = e.position, i = e.hoverClassName, a = e.wrapperClassName, s = e.defaultClassName, o = e.disabled, l = e.onMove, c = e.onMoveEnd, d = Ne(ke(!1), 2), h = d[0], f = d[1], m = function() {
    f(!0);
  }, p = function() {
    f(!1);
  };
  return T.createElement(
    b1,
    { className: ie("advanced-cropper-simple-line-wrapper", a, (r = {}, r["advanced-cropper-simple-line-wrapper--".concat(n)] = !!n, r)), position: n, disabled: o, onDrag: l, onDragEnd: c, onLeave: p, onEnter: m },
    T.createElement("div", { className: ie("advanced-cropper-simple-line", h && "advanced-cropper-simple-line--hover", s, h && i, (t = {}, t["advanced-cropper-simple-line--".concat(n)] = !!n, t)) })
  );
}, w1 = function(e) {
  var r = e.horizontalPosition, t = e.verticalPosition, n = e.className, i = e.disabled, a = e.onDrag, s = e.onDragEnd, o = e.onLeave, l = e.onEnter, c = e.children, d = e.style, h = r || t ? Za(r, t).snakeCase : null;
  return T.createElement(
    "div",
    { style: d, className: ie(n, "advanced-cropper-handler-wrapper", h && "advanced-cropper-handler-wrapper--".concat(h), i && "advanced-cropper-handler-wrapper--disabled") },
    T.createElement(_i, { className: "advanced-cropper-handler-wrapper__draggable", disabled: i, onMove: a, onMoveEnd: s, onLeave: o, onEnter: l, activationDistance: 0 }, c)
  );
}, ks = function(e) {
  var r, t = e.verticalPosition, n = e.horizontalPosition, i = e.hoverClassName, a = e.wrapperClassName, s = e.defaultClassName, o = e.wrapperStyle, l = e.disabled, c = e.onMove, d = e.onMoveEnd, h = Ne(ke(!1), 2), f = h[0], m = h[1], p = function() {
    m(!0);
  }, v = function() {
    m(!1);
  };
  return T.createElement(
    w1,
    { style: o, className: ie("advanced-cropper-simple-handler-wrapper", a, t && "advanced-cropper-simple-handler-wrapper--".concat(t), n && "advanced-cropper-simple-handler-wrapper--".concat(n), n && t && "advanced-cropper-simple-handler-wrapper--".concat(n, "-").concat(t), f && "advanced-cropper-simple-handler-wrapper--hover"), verticalPosition: t, horizontalPosition: n, disabled: l, onDrag: c, onDragEnd: d, onLeave: v, onEnter: p },
    T.createElement("div", { className: ie("advanced-cropper-simple-handler", f && "advanced-cropper-simple-handler--hover", s, f && i, (r = {}, r["advanced-cropper-simple-handler--".concat(t)] = !!t, r["advanced-cropper-simple-handler--".concat(n)] = !!n, r["advanced-cropper-simple-handler--".concat(n, "-").concat(t)] = n && t, r)) })
  );
}, E1 = ["east", "west", null], C1 = ["south", "north", null], Bu = function(e) {
  var r = e.style, t = e.className, n = e.children, i = e.onResize, a = e.onResizeEnd, s = e.handlerComponent, o = s === void 0 ? ks : s, l = e.handlers, c = l === void 0 ? {
    eastNorth: !0,
    north: !0,
    westNorth: !0,
    west: !0,
    westSouth: !0,
    south: !0,
    eastSouth: !0,
    east: !0
  } : l, d = e.handlerClassNames, h = d === void 0 ? {} : d, f = e.handlerWrapperClassNames, m = f === void 0 ? {} : f, p = e.lines, v = p === void 0 ? {
    west: !0,
    north: !0,
    east: !0,
    south: !0
  } : p, g = e.lineComponent, x = g === void 0 ? _s : g, w = e.lineClassNames, E = w === void 0 ? {} : w, S = e.lineWrapperClassNames, C = S === void 0 ? {} : S, D = e.disabled, R = D === void 0 ? !1 : D, N = e.reference, M = N === void 0 ? null : N, Z = Ne(ke(null), 2), Q = Z[0], te = Z[1], z = sr(function() {
    var $ = [];
    return E1.forEach(function(X) {
      C1.forEach(function(O) {
        if (X !== O) {
          var k = Za(X, O), L = k.snakeCase, U = k.camelCase;
          L && U && $.push({
            name: U,
            className: L,
            verticalPosition: O,
            horizontalPosition: X
          });
        }
      });
    }), $;
  }, []), Y = sr(function() {
    var $ = [];
    return z.forEach(function(X) {
      Zg(X.name) && (ur(v) ? v[X.name] : v) && $.push({
        name: X.name,
        component: x,
        className: ie(E.default, E[X.name], R && E.disabled),
        wrapperClassName: ie("advanced-cropper-bounding-box__line", "advanced-cropper-bounding-box__line--".concat(X.name), C.default, C[X.name], R && C.disabled),
        hoverClassName: E.hover,
        verticalPosition: X.verticalPosition,
        horizontalPosition: X.horizontalPosition,
        disabled: R
      });
    }), $;
  }, [z, v, x, E, C, R]), V = sr(function() {
    var $ = [];
    return z.forEach(function(X) {
      (ur(c) ? c[X.name] : c) && $.push({
        name: X.name,
        component: o,
        className: ie(h.default, h[X.name]),
        containerClassName: ie("advanced-cropper-bounding-box__handler-wrapper", "advanced-cropper-bounding-box__handler-wrapper--".concat(X.className)),
        wrapperClassName: ie("advanced-cropper-bounding-box__handler", "advanced-cropper-bounding-box__handler--".concat(X.className), m.default, m[X.name]),
        hoverClassName: h.hover,
        verticalPosition: X.verticalPosition,
        horizontalPosition: X.horizontalPosition,
        disabled: R
      });
    }), $;
  }, [z, c, o, h, m, R]), W = function($, X) {
    return function(O, k) {
      var L = O.left, U = O.top, B = {
        left: L,
        top: U
      }, H;
      if (!X && $ ? H = "width" : X && !$ && (H = "height"), !R) {
        if (i) {
          var G = Za($, X).camelCase;
          G && i(G, B, {
            reference: Q || M,
            preserveAspectRatio: k && k.shiftKey,
            respectDirection: H,
            compensate: !0
          });
        }
        Q || te(M);
      }
    };
  }, K = function() {
    a == null || a(), te(null);
  };
  return T.createElement(
    "div",
    { className: ie("advanced-cropper-bounding-box", t), style: r },
    n,
    T.createElement("div", null, Y.map(function($) {
      return T.createElement($.component, { key: $.name, defaultClassName: $.className, hoverClassName: $.hoverClassName, wrapperClassName: $.wrapperClassName, position: $.name, disabled: $.disabled, onMove: W($.horizontalPosition, $.verticalPosition), onMoveEnd: K });
    })),
    T.createElement("div", null, V.map(function($) {
      var X = T.createElement($.component, { defaultClassName: $.className, hoverClassName: $.hoverClassName, wrapperClassName: $.wrapperClassName, horizontalPosition: $.horizontalPosition, verticalPosition: $.verticalPosition, disabled: $.disabled, onMove: W($.horizontalPosition, $.verticalPosition), onMoveEnd: K });
      return T.createElement("div", { key: $.name, className: $.containerClassName }, X);
    }))
  );
}, Wu = function(e) {
  var r = e.className, t = e.children;
  return T.createElement("div", { className: ie("advanced-cropper-stencil-overlay", r) }, t);
};
function S1(e) {
  e === void 0 && (e = null);
  var r = ue(new By()), t = Ne(ke(!1), 2), n = t[0], i = t[1];
  return [
    function(a) {
      e && e.active ? r.current.start(_(_({}, e), { onStart: function() {
        i(!0);
      }, onProgress: function(s) {
        a(s);
      }, onStop: function() {
        i(!1);
      } })) : r.current.active || a(1);
    },
    n
  ];
}
var N1 = function(e) {
  var r = e.className, t = e.transitions, n = e.children, i = Hr(e, ["className", "transitions", "children"]), a = ue(null), s = ue(i), o = Ne(ke(i), 2), l = o[0], c = o[1], d = Ne(S1(t), 2), h = d[0], f = d[1];
  Ur(function() {
    if (!Mr(l, i)) {
      c(i);
      var v = f ? _({}, s.current) : l;
      h(function(g) {
        var x = ["left", "top", "height", "width"];
        x.forEach(function(w) {
          var E = i[w], S = v[w];
          s.current[w] = Ee(S) && Ee(E) ? S + (E - S) * g : E;
        }), a.current && (a.current.style.width = "".concat(s.current.width, "px"), a.current.style.height = "".concat(s.current.height, "px"), a.current.style.transform = "translate3d(".concat(s.current.left, "px, ").concat(s.current.top, "px, 0px)"));
      });
    }
  }, [l, f, i.width, i.height, i.top, i.left]);
  var m = f ? s.current : i, p = {
    left: 0,
    top: 0,
    width: "".concat(m.width, "px"),
    height: "".concat(m.height, "px"),
    transform: "translate3d(".concat(m.left, "px, ").concat(m.top, "px, 0px)")
  };
  return T.createElement("div", { ref: a, className: ie("advanced-cropper-artificial-transition", r), style: p }, n);
}, Hu = function(e) {
  var r = e.className, t = e.transitions, n = e.width, i = e.height, a = e.left, s = e.top, o = e.children;
  return T.createElement(N1, { className: ie("advanced-cropper-stencil-wrapper", r), transitions: t, width: n, height: i, top: s, left: a }, o);
}, zu = function(e) {
  var r = e.columns, t = r === void 0 ? 3 : r, n = e.rows, i = n === void 0 ? 3 : n, a = e.visible, s = a === void 0 ? !1 : a, o = e.className, l = [], c = Ne(ke(t), 2), d = c[0], h = c[1], f = Ne(ke(i), 2), m = f[0], p = f[1];
  dn(function() {
    s && (p(i), h(t));
  }, [s, t, i]);
  for (var v = 0; v < m; v++) {
    for (var g = [], x = 0; x < d; x++)
      g.push(T.createElement("div", { key: x, className: ie("advanced-cropper-stencil-grid__cell", v === 0 && "advanced-cropper-stencil-grid__cell--top", v === m - 1 && "advanced-cropper-stencil-grid__cell--bottom", x === 0 && "advanced-cropper-stencil-grid__cell--left", x === d - 1 && "advanced-cropper-stencil-grid__cell--right") }));
    l.push(T.createElement("div", { key: v, className: "advanced-cropper-stencil-grid__row" }, g));
  }
  return T.createElement("div", { className: ie("advanced-cropper-stencil-grid", s && "advanced-cropper-stencil-grid--visible", o) }, l);
}, Vu = jt(function(e, r) {
  var t = e.cropper, n = e.coordinates, i = e.aspectRatio, a = e.minAspectRatio, s = e.maxAspectRatio, o = e.handlerComponent, l = o === void 0 ? ks : o, c = e.handlers, d = c === void 0 ? {
    eastNorth: !0,
    north: !0,
    westNorth: !0,
    west: !0,
    westSouth: !0,
    south: !0,
    eastSouth: !0,
    east: !0
  } : c, h = e.handlerClassNames, f = h === void 0 ? {} : h, m = e.handlerWrapperClassNames, p = m === void 0 ? {} : m, v = e.lines, g = v === void 0 ? {
    west: !0,
    north: !0,
    east: !0,
    south: !0
  } : v, x = e.lineComponent, w = x === void 0 ? _s : x, E = e.lineClassNames, S = E === void 0 ? {} : E, C = e.lineWrapperClassNames, D = C === void 0 ? {} : C, R = e.resizable, N = R === void 0 ? !0 : R, M = e.movable, Z = M === void 0 ? !0 : M, Q = e.grid, te = e.gridClassName, z = e.className, Y = e.movingClassName, V = e.resizingClassName, W = e.previewClassName, K = e.boundingBoxClassName, $ = e.overlayClassName, X = e.draggableAreaClassName, O = e.disabled, k = t.getState(), L = t.getTransitions(), U = t.getInteractions(), B = N && !O, H = Z && !O;
  mr(r, function() {
    return {
      aspectRatio: gr(i || {
        minimum: a,
        maximum: s
      })
    };
  });
  var G = function(Ge) {
    t && H && t.moveCoordinates(Ge);
  }, J = function() {
    t && t.moveCoordinatesEnd();
  }, ee = function(Ge, Et, Zt) {
    t && B && t.resizeCoordinates(Ge, Et, Zt);
  }, ne = function() {
    t && t.resizeCoordinatesEnd();
  }, re = n ? pe(n) ? n(k) : n : Ts(k), fe = re.width, F = re.height, Me = re.left, nt = re.top;
  return k && T.createElement(
    Hu,
    { className: ie("advanced-cropper-rectangle-stencil", z, U.moveCoordinates && Y, U.resizeCoordinates && V, {
      "advanced-cropper-rectangle-stencil--movable": H,
      "advanced-cropper-rectangle-stencil--moving": U.moveCoordinates,
      "advanced-cropper-rectangle-stencil--resizable": B,
      "advanced-cropper-rectangle-stencil--resizing": U.resizeCoordinates,
      "advanced-cropper-rectangle-stencil--disabled": O
    }), width: fe, height: F, left: Me, top: nt, transitions: L },
    T.createElement(
      Bu,
      { reference: k.coordinates, className: ie(K, "advanced-cropper-rectangle-stencil__bounding-box"), handlers: d, handlerComponent: l, handlerClassNames: f, handlerWrapperClassNames: p, lines: g, lineComponent: w, lineClassNames: S, lineWrapperClassNames: D, onResize: ee, onResizeEnd: ne, disabled: !B },
      T.createElement(
        _i,
        { disabled: !H, onMove: G, onMoveEnd: J, className: ie("advanced-cropper-rectangle-stencil__draggable-area", X) },
        T.createElement(
          Wu,
          { className: ie("advanced-cropper-rectangle-stencil__overlay", $) },
          Q && T.createElement(zu, { visible: t.hasInteractions(), columns: U.transformImage.rotate ? 9 : 3, rows: U.transformImage.rotate ? 9 : 3, className: ie("advanced-cropper-rectangle-stencil__grid", te) }),
          T.createElement("div", { className: ie("advanced-cropper-rectangle-stencil__preview", W) })
        )
      )
    )
  );
});
Vu.displayName = "RectangleStencil";
function O1(e) {
  return sr(function() {
    return In(e, {
      touch: !0
    }, {
      touch: !1
    });
  }, [e]);
}
function T1(e) {
  return sr(function() {
    return In(e, {
      touch: !0,
      wheel: {
        ratio: 0.1
      }
    }, {
      touch: !1,
      wheel: !1
    });
  }, [e]);
}
function A1(e) {
  return sr(function() {
    return In(e, {
      touch: !0,
      mouse: !0
    }, {
      touch: !1,
      mouse: !1
    });
  }, [e]);
}
var R1 = (
  /** @class */
  function() {
    function e(r) {
      var t = r.active;
      this.active = t, this.defaultPrevented = !1;
    }
    return e.prototype.preventDefault = function() {
      this.defaultPrevented = !0;
    }, e;
  }()
), j1 = (
  /** @class */
  function(e) {
    vr(r, e);
    function r(t) {
      var n = e.call(this, t) || this;
      return n.processMove = function(i) {
        var a = n.props, s = a.onTransform, o = a.touchScale, l = a.touchMove, c = a.touchRotate, d = n.container.current;
        d && s && (s(Ty(i, n.touches, d, {
          scale: o,
          rotate: c,
          move: l
        })), n.touches = i);
      }, n.processEnd = function() {
        var i = n.props.onTransformEnd;
        n.transforming && (n.transforming = !1, i && i());
      }, n.processStart = function() {
        n.transforming = !0, n.debouncedProcessEnd.clear();
      }, n.processEvent = function(i) {
        var a = n.props, s = a.onEvent, o = a.disabled, l = a.preventDefault, c = l === void 0 ? !0 : l, d = new R1({ active: n.transforming });
        return s ? s(d, i) : c && (i.preventDefault(), i.stopPropagation()), !o && !d.defaultPrevented;
      }, n.onWheel = function(i) {
        var a = n.props, s = a.onTransform, o = a.wheelScale, l = n.container.current;
        o && n.processEvent(i) && (n.processStart(), s && l && s(Ay(i, l, o === !0 ? 0.1 : o.ratio)), n.touches.length || n.debouncedProcessEnd());
      }, n.onTouchStart = function(i) {
        var a = n.props, s = a.touchMove, o = a.touchScale, l = a.touchRotate;
        if (i.cancelable && (s || (o || l) && i.touches.length > 1) && n.processEvent(i)) {
          var c = n.container.current;
          if (c) {
            var d = c.getBoundingClientRect(), h = d.left, f = d.top, m = d.bottom, p = d.right;
            n.touches = Array.from(i.touches).filter(function(v) {
              return v.clientX > h && v.clientX < p && v.clientY > f && v.clientY < m;
            });
          }
        }
      }, n.onTouchEnd = function(i) {
        i.touches.length === 0 && (n.touches = [], n.processEnd());
      }, n.onTouchMove = function(i) {
        if (n.touches.length) {
          var a = qt([], Ne(i.touches), !1).filter(function(s) {
            return !s.identifier || n.touches.find(function(o) {
              return o.identifier === s.identifier;
            });
          });
          n.processEvent(i) && (n.processMove(a), n.processStart());
        }
      }, n.onMouseDown = function(i) {
        var a = n.props.mouseMove;
        if (a && "buttons" in i && i.buttons === 1 && n.processEvent(i)) {
          var s = {
            clientX: i.clientX,
            clientY: i.clientY
          };
          n.touches = [s], n.processStart();
        }
      }, n.onMouseMove = function(i) {
        n.touches.length && n.processEvent(i) && n.processMove([
          {
            clientX: i.clientX,
            clientY: i.clientY
          }
        ]);
      }, n.onMouseUp = function() {
        n.touches = [], n.processEnd();
      }, n.transforming = !1, n.touches = [], n.anchor = {
        left: 0,
        top: 0
      }, n.container = Yt(), n.debouncedProcessEnd = Cu(n.processEnd, t.timeout), n;
    }
    return r.prototype.shouldComponentUpdate = function() {
      return !0;
    }, r.prototype.componentWillUnmount = function() {
      window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
      var t = this.container.current;
      t && (t.removeEventListener("touchstart", this.onTouchStart), t.removeEventListener("mousedown", this.onMouseDown), t.removeEventListener("wheel", this.onWheel));
    }, r.prototype.componentDidMount = function() {
      window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
      var t = this.container.current;
      t && (t.addEventListener("touchstart", this.onTouchStart, {
        passive: !1
      }), t.addEventListener("mousedown", this.onMouseDown, {
        passive: !1
      }), t.addEventListener("wheel", this.onWheel, {
        passive: !1
      }));
    }, r.prototype.render = function() {
      var t = this.props, n = t.className, i = t.children, a = t.style;
      return T.createElement("div", { className: n, style: a, ref: this.container }, i);
    }, r.defaultProps = {
      touchMove: !0,
      mouseMove: !0,
      touchScale: !0,
      touchRotate: !1,
      wheelScale: !0,
      timeout: 500
    }, r;
  }(me)
), _1 = function(e) {
  var r = e.scaleImage, t = r === void 0 ? !0 : r, n = e.moveImage, i = n === void 0 ? !0 : n, a = e.rotateImage, s = a === void 0 ? !1 : a, o = e.children, l = e.className, c = e.style, d = e.cropper, h = e.timeout, f = e.disabled, m = d.getTransitions(), p = O1(s), v = T1(t), g = A1(i);
  return T.createElement(j1, { className: l, style: c, onTransform: d.transformImage, onTransformEnd: d.transformImageEnd, touchMove: g.touch, mouseMove: g.mouse, touchScale: v.touch, wheelScale: v.wheel, touchRotate: p.touch, disabled: m.active || f, preventDefault: !f, timeout: h }, o);
}, k1 = function(e, r) {
  var t = e.style, n = e.className, i = e.stencilComponent, a = i === void 0 ? Vu : i, s = e.stencilConstraints, o = s === void 0 ? ku : s, l = e.stencilProps, c = l === void 0 ? {} : l, d = e.wrapperComponent, h = d === void 0 ? x1 : d, f = e.wrapperProps, m = f === void 0 ? {} : f, p = e.backgroundComponent, v = p === void 0 ? $u : p, g = e.backgroundProps, x = g === void 0 ? {} : g, w = e.backgroundClassName, E = e.backgroundWrapperComponent, S = E === void 0 ? _1 : E, C = e.backgroundWrapperProps, D = C === void 0 ? {} : C, R = e.boundaryComponent, N = R === void 0 ? js : R, M = e.boundaryProps, Z = e.boundaryClassName, Q = e.canvas, te = Q === void 0 ? !0 : Q, z = e.crossOrigin, Y = z === void 0 ? !0 : z, V = e.disabled, W = e.settings, K = Hr(e, ["style", "className", "stencilComponent", "stencilConstraints", "stencilProps", "wrapperComponent", "wrapperProps", "backgroundComponent", "backgroundProps", "backgroundClassName", "backgroundWrapperComponent", "backgroundWrapperProps", "boundaryComponent", "boundaryProps", "boundaryClassName", "canvas", "crossOrigin", "disabled", "settings"]), $ = ue(null), X = y1(function() {
    return _(_({}, K), { crossOrigin: Y, stencilProps: c, canvas: te, settings: _(_({}, W), o(W, _(_({}, c), $.current))) });
  }), O = X.cropper, k = X.image, L = X.refs, U = a, B = h, H = S, G = v, J = N;
  mr(r, function() {
    return O;
  });
  var ee = {
    loading: O.isLoading(),
    loaded: O.isLoaded()
  };
  return T.createElement(
    B,
    _({}, m, { disabled: V, className: ie("advanced-cropper", n), cropper: O, style: t }, ee),
    T.createElement(
      J,
      _({}, M, { ref: L.boundary, className: ie("advanced-cropper__boundary", Z) }),
      T.createElement(
        H,
        _({}, D, { disabled: V, cropper: O, className: "advanced-cropper__background-wrapper" }),
        O.getState() && T.createElement(G, _({}, x, { ref: L.image, crossOrigin: Y, cropper: O, className: ie("advanced-cropper__background", w) })),
        T.createElement(U, _({}, c, { disabled: V, ref: $, cropper: O, image: k }))
      ),
      te && T.createElement(Uu, { ref: L.canvas })
    )
  );
}, Yu = d1(k1), qu = [
  "transformImage",
  "moveCoordinates",
  "resizeCoordinates",
  "defaultCoordinates",
  "defaultVisibleArea",
  "areaPositionRestrictions",
  "areaSizeRestrictions",
  "sizeRestrictions",
  "positionRestrictions",
  "aspectRatio",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "defaultSize",
  "defaultPosition",
  "defaultTransforms",
  "imageRestriction",
  "priority"
];
function Gu(e, r) {
  r === void 0 && (r = qu);
  var t = { settings: {}, props: {} };
  return Object.keys(e).forEach(function(n) {
    r.some(function(i) {
      return i === n;
    }) ? t.settings[n] = e[n] : t.props[n] = e[n];
  }), t;
}
function M1(e, r) {
  var t = ku({}, r);
  return {
    stencilSize: function(n, i) {
      var a = pe(e.stencilSize) ? e.stencilSize(n, i) : e.stencilSize;
      return yt(_(_({}, a), { aspectRatio: ny(t.aspectRatio, gr(oe(a))) }));
    }
  };
}
function Ms(e, r) {
  var t = e.boundary, n = pe(r.stencilSize) ? r.stencilSize(e, r) : r.stencilSize;
  return (n.width > t.width || n.height > t.height) && (n = yt({
    sizeRestrictions: {
      maxWidth: t.width,
      maxHeight: t.height,
      minWidth: 0,
      minHeight: 0
    },
    width: n.width,
    height: n.height,
    aspectRatio: {
      minimum: oe(n),
      maximum: oe(n)
    }
  })), n;
}
function P1(e, r) {
  var t = Ms(e, _(_({}, r), { stencilSize: r.stencilSize })), n = bt(e, r);
  return {
    maxWidth: n.maxWidth * t.width / e.boundary.width,
    maxHeight: n.maxHeight * t.height / e.boundary.height,
    minWidth: 0,
    minHeight: 0
  };
}
function D1(e, r) {
  var t = e.imageSize, n = e.visibleArea, i = e.boundary, a = wt(e, r), s = Jt(e, r), o = pe(r.stencilSize) ? r.stencilSize(e, r) : r.stencilSize, l = n || t, c, d;
  return oe(l) > oe(i) ? (c = o.height * l.height / i.height, d = c * oe(o)) : (d = o.width * l.width / i.width, c = d / oe(o)), yt({
    width: d,
    height: c,
    aspectRatio: s,
    sizeRestrictions: a
  });
}
function I1(e, r) {
  var t = oe(Ms(e, r));
  return {
    minimum: t,
    maximum: t
  };
}
function L1(e, r) {
  if (ct(e)) {
    var t = $e(e), n = Ms(e, r);
    t.visibleArea = Tt(t.visibleArea, t.coordinates.width * t.boundary.width / (t.visibleArea.width * n.width));
    var i = Os(t.visibleArea, bt(t, r));
    return i !== 1 && (t.visibleArea = Tt(t.visibleArea, i), t.coordinates = Tt(t.coordinates, i)), t.visibleArea = Ie(t.visibleArea, vt(Ce(t.coordinates), Ce(t.visibleArea))), t.visibleArea = Re(t.visibleArea, gt(t, r)), t.coordinates = Re(t.coordinates, Kt(tt(t.visibleArea), gt(t, r))), t;
  }
  return e;
}
function F1(e, r, t) {
  return t && t.immediately ? L1(e, r) : e;
}
var Xu = jt(function(e, r) {
  var t = Gu(e, qt(qt([], Ne(qu), !1), ["stencilSize"], !1));
  return T.createElement(Yu, _({ postProcess: F1, stencilConstraints: M1 }, t.props, { settings: _(_({ defaultSize: D1, aspectRatio: I1, sizeRestrictions: Fy(P1) }, t.settings), { transformImage: _(_({}, t.settings.transformImage), { adjustStencil: !1 }) }), ref: r }));
});
Xu.displayName = "FixedCropper";
var Ku = jt(function(e, r) {
  var t = Gu(e), n = t.props, i = t.settings, a = i.stencilSize, s = i.autoZoom, o = Hr(i, ["stencilSize", "autoZoom"]), l = u1();
  return _e(s) || (n.postProcess || a ? l("prop 'autoZoom' is deprecated now and will be removed, use 'postProcess' prop to pass your auto zoom function.") : (l("prop 'autoZoom' is deprecated now and will be removed, use 'postProcess' prop to pass your auto zoom function. The 'postProcess' automatically set to 'hybridAutoZoom'"), n.postProcess = l1)), _e(a) ? T.createElement(Yu, _({}, n, { ref: r, settings: o })) : (l("prop 'stencilSize' is deprecated for <Cropper/> component now and will be removed, use <FixedCropper/> component instead."), T.createElement(Xu, _({ ref: r, stencilSize: a }, o, n)));
});
Ku.displayName = "CropperComponent";
var $1 = jt(function(e, r) {
  var t = e.cropper, n = e.coordinates, i = e.handlerComponent, a = i === void 0 ? ks : i, s = e.handlers, o = s === void 0 ? {
    eastNorth: !0,
    westNorth: !0,
    westSouth: !0,
    eastSouth: !0
  } : s, l = e.handlerClassNames, c = l === void 0 ? {} : l, d = e.handlerWrapperClassNames, h = d === void 0 ? {} : d, f = e.lines, m = f === void 0 ? {
    west: !0,
    north: !0,
    east: !0,
    south: !0
  } : f, p = e.lineComponent, v = p === void 0 ? _s : p, g = e.lineClassNames, x = g === void 0 ? {} : g, w = e.lineWrapperClassNames, E = w === void 0 ? {} : w, S = e.resizable, C = S === void 0 ? !0 : S, D = e.movable, R = D === void 0 ? !0 : D, N = e.grid, M = e.gridClassName, Z = e.className, Q = e.movingClassName, te = e.resizingClassName, z = e.previewClassName, Y = e.boundingBoxClassName, V = e.overlayClassName, W = e.draggableAreaClassName, K = e.disabled, $ = t.getState(), X = t.getTransitions(), O = t.getInteractions(), k = C && !K, L = R && !K;
  mr(r, function() {
    return {
      aspectRatio: 1,
      boundingBox: "circle"
    };
  });
  var U = function(F) {
    t && L && t.moveCoordinates(F);
  }, B = function() {
    t && t.moveCoordinatesEnd();
  }, H = function(F, Me, nt) {
    t && k && t.resizeCoordinates(F, Me, nt);
  }, G = function() {
    t && t.resizeCoordinatesEnd();
  }, J = n ? pe(n) ? n($) : n : Ts($), ee = J.width, ne = J.height, re = J.left, fe = J.top;
  return $ && T.createElement(
    Hu,
    { className: ie("advanced-cropper-circle-stencil", Z, O.moveCoordinates && Q, O.resizeCoordinates && te, {
      "advanced-cropper-circle-stencil--movable": L,
      "advanced-cropper-circle-stencil--moving": O.moveCoordinates,
      "advanced-cropper-circle-stencil--resizable": k,
      "advanced-cropper-circle-stencil--resizing": O.resizeCoordinates,
      "advanced-cropper-circle-stencil--disabled": K
    }), width: ee, height: ne, left: re, top: fe, transitions: X },
    T.createElement(
      Bu,
      { reference: $.coordinates, className: ie(Y, "advanced-cropper-circle-stencil__bounding-box"), handlers: o, handlerComponent: a, handlerClassNames: c, handlerWrapperClassNames: h, lines: m, lineComponent: v, lineClassNames: x, lineWrapperClassNames: E, onResize: H, onResizeEnd: G, disabled: !k },
      T.createElement(
        _i,
        { disabled: !L, onMove: U, onMoveEnd: B, className: ie("advanced-cropper-circle-stencil__draggable-area", W) },
        T.createElement(
          Wu,
          { className: ie("advanced-cropper-circle-stencil__overlay", V) },
          N && T.createElement(zu, { visible: t.hasInteractions(), columns: O.transformImage.rotate ? 9 : 3, rows: O.transformImage.rotate ? 9 : 3, className: ie("advanced-cropper-circle-stencil__grid", M) }),
          T.createElement("div", { className: ie("advanced-cropper-circle-stencil__preview", z) })
        )
      )
    )
  );
});
$1.displayName = "CircleStencil";
var U1 = jt(function(e, r) {
  var t = e.src, n = e.crossOrigin, i = n === void 0 ? !0 : n, a = Hr(e, ["src", "crossOrigin"]);
  return t ? T.createElement("img", _({ key: t, ref: r, src: t, className: ie("advanced-cropper-source"), crossOrigin: i === !0 ? "anonymous" : i || void 0 }, a)) : null;
});
U1.displayName = "CropperSource";
var B1 = function(e) {
  var r = e.children, t = e.cropper, n = e.className, i = e.style;
  return T.createElement(
    "div",
    { className: ie(n, "cropper-preview-wrapper"), style: i },
    T.createElement(Lu, { visible: t == null ? void 0 : t.isLoaded(), className: "cropper-preview-wrapper__fade" }, r)
  );
}, W1 = function(e) {
  var r = e.className, t = e.cropper, n = e.crossOrigin, i = n === void 0 ? !0 : n, a = e.size, s = e.style, o = t.getState(), l = t.getTransitions(), c = t.getImage(), d = a && c && (o != null && o.coordinates) ? s1(c, o, a, l) : {}, h = c ? c.src : void 0;
  return h ? T.createElement("img", { key: h, className: ie("advanced-cropper-background-image", r), src: h, crossOrigin: i === !0 ? "anonymous" : i || void 0, style: _(_({}, d), s), onMouseDown: Fu }) : null;
};
jt(function(e, r) {
  var t, n, i, a, s = e.className, o = e.contentClassName, l = e.state, c = l === void 0 ? null : l, d = e.image, h = d === void 0 ? null : d, f = e.transitions, m = f === void 0 ? null : f, p = e.backgroundComponent, v = p === void 0 ? W1 : p, g = e.backgroundProps, x = e.backgroundClassName, w = e.boundaryComponent, E = w === void 0 ? js : w, S = e.boundaryProps, C = e.boundaryClassName, D = e.wrapperComponent, R = D === void 0 ? B1 : D, N = e.wrapperProps, M = e.loaded, Z = M === void 0 ? !0 : M, Q = e.loading, te = Q === void 0 ? !1 : Q, z = e.style, Y = e.cropper, V = Du(), W = ue(null), K = ue(null), $ = Y || (K.current ? K : {
    current: {
      getState: function() {
        return c;
      },
      getTransitions: function() {
        return m;
      },
      getImage: function() {
        return h;
      },
      isLoaded: function() {
        return Z;
      },
      isLoading: function() {
        return te;
      }
    }
  }), X = Ne(ke(null), 2), O = X[0], k = X[1], L = (n = (t = $.current) === null || t === void 0 ? void 0 : t.getState()) === null || n === void 0 ? void 0 : n.coordinates, U = (a = (i = $.current) === null || i === void 0 ? void 0 : i.getImage()) === null || a === void 0 ? void 0 : a.src, B = O ? {
    width: "".concat(O.width, "px"),
    height: "".concat(O.height, "px")
  } : {}, H = function() {
    var ne, re, fe = (re = (ne = $.current) === null || ne === void 0 ? void 0 : ne.getState()) === null || re === void 0 ? void 0 : re.coordinates;
    W.current && fe && W.current.stretchTo(fe).then(function(F) {
      F && fe ? Gt(oe(fe), oe(F)) ? k({
        width: F.width,
        height: F.width / oe(fe)
      }) : k({
        width: F.height * oe(fe),
        height: F.height
      }) : k(null);
    }), V();
  };
  Iu(H), Ur(H, [L == null ? void 0 : L.height, L == null ? void 0 : L.width]), mr(r, function() {
    return {
      refresh: H,
      update: function(ne) {
        ne ? K.current = ne : K.current = null, H();
      }
    };
  });
  var G = R, J = v, ee = E;
  return T.createElement(
    G,
    _({}, N, { className: ie(s, "advanced-cropper-preview"), cropper: $.current, style: z }),
    T.createElement(
      ee,
      _({ ref: W, stretchAlgorithm: Yy }, S, { className: ie("advanced-cropper-preview__boundary", C) }),
      T.createElement("div", { className: ie(o, "advanced-cropper-preview__content"), style: B }, $.current && T.createElement(J, _({}, g, { cropper: $.current, size: O, className: ie(x, "advanced-cropper-preview__image", U && "advanced-cropper-preview__image--visible") })))
    )
  );
});
class H1 extends me {
  constructor(t) {
    super(t);
    y(this, "cropperRef");
    y(this, "onCrop", (t) => {
      t.preventDefault();
      const n = this.cropperRef.current;
      if (n) {
        const i = n.getCanvas();
        i && i.toBlob((a) => {
          a && this.props.onSuccess(a, i.toDataURL());
        }, "image/png");
      }
    });
    this.state = {}, this.cropperRef = Yt(), this.onCrop = this.onCrop.bind(this);
  }
  componentDidMount() {
    const { media: t } = this.props;
    t.file != null && this.setState({ image: URL.createObjectURL(t.file) });
  }
  componentWillUnmount() {
    this.state.image && URL.revokeObjectURL(this.state.image);
  }
  render() {
    const { image: t } = this.state;
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: /* @__PURE__ */ u.jsx("div", { className: "fixed z-[50000] w-screen h-screen inset-0 overflow-y-auto font-poppinsRegular", children: /* @__PURE__ */ u.jsx("div", { className: "justify-items-center px-2 backdrop-blur-lg top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center pt-4 pb-20 text-center sm:block sm:p-0", children: /* @__PURE__ */ u.jsx("div", { className: "my-14 justify-center", children: /* @__PURE__ */ u.jsx("div", { className: "max-w-3xl bg-black min-h-[600px] rounded-xl mx-auto py-10 px-8 my-auto", children: /* @__PURE__ */ u.jsxs("div", { className: "example flex flex-col w-full", children: [
      /* @__PURE__ */ u.jsx("div", { className: "example__cropper-wrapper bg-red-500", children: /* @__PURE__ */ u.jsx(
        Ku,
        {
          ref: this.cropperRef,
          transitions: !0,
          stencilProps: {
            resizable: !1,
            handlers: !1,
            lines: !1,
            grid: !0,
            aspectRatio: 6 / 9
          },
          className: "example__cropper",
          src: t
        }
      ) }),
      /* @__PURE__ */ u.jsx("div", { className: "example__buttons-wrapper", children: t && /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center lg:justify-end -mb-5", children: /* @__PURE__ */ u.jsxs(
        "button",
        {
          className: "flex items-center justify-center bg-white text-black my-5 px-4 py-3 rounded-full cursor-pointer text-xs font-poppinsRegular",
          onClick: this.onCrop,
          children: [
            /* @__PURE__ */ u.jsxs(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "w-6 h-6 mr-2",
                children: [
                  /* @__PURE__ */ u.jsx("path", { d: "M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3V7z" }),
                  /* @__PURE__ */ u.jsx("path", { d: "M5 9v8c0 1.103.897 2 2 2h8v-2H7V9H5z" })
                ]
              }
            ),
            "Save And Continue"
          ]
        }
      ) }) })
    ] }) }) }) }) }) }) });
  }
}
class Db extends me {
  constructor(t) {
    super(t);
    y(this, "fileUploadFile");
    y(this, "handleFileUpload", (t) => {
      var i;
      const n = (i = t.target.files) == null ? void 0 : i[0];
      if (n) {
        if (!n.name.toLowerCase().match(/\.(png|jpeg|jpg)$/)) {
          this.handleAlert("Error: You can only upload images in PNG, SVG, or JPG format.");
          return;
        }
        if (n.size > 1024 * 1024) {
          this.handleAlert("Error: Image size should be less than 1MB.");
          return;
        }
        this.setState({
          showcropper: !0,
          media: { file: n }
        });
      }
    });
    y(this, "handleCropperClose", () => {
      this.setState({ showcropper: !1, media: { file: null } });
    });
    y(this, "handleCropper", (t, n) => {
      const { input: i } = this.state;
      i.passport_photo = t, this.setState({ input: i, showcropper: !1, passport_photo: n, passport_photo_loading: I.LOADING }, () => {
        this.readPassportPhoto(n);
      });
    });
    y(this, "readPassportPhoto", (t) => {
      try {
        this.setState({ passport_photo_loading: I.LOADING, passport_photo_is_verified: !1 });
        const n = new FormData();
        n.append("image", t), he.post(this.props.url, n, {
          headers: {
            "X-CSRFToken": `${Pe.getCookie("csrftoken")}`
          }
        }).then((i) => {
          i.data.success ? this.setState({ passport_photo_is_verified: !0, passport_photo_loading: I.SUCCESS }, () => {
            this.props.onFile(this.state.input.passport_photo);
          }) : (this.handleAlert(i.data.message), this.handleCancelPassportReader());
        }).catch(() => {
          this.handleAlert();
        });
      } catch {
      }
    });
    y(this, "handleAlert", (t = "") => {
      try {
        const n = j.isEmptyOrNull(t) ? I.ERROR_MESSAGE : t;
        this.setState({ modal: null, isLoading: !1, passport_photo_loading: "" }, () => {
          we.error(n);
        });
      } catch {
      }
    });
    y(this, "handleCancelPassportReader", () => {
      try {
        const t = this.state.input;
        t.passport_photo = null, this.setState({ passport_photo: null, passport_photo_loading: "", passport_photo_is_verified: !1, card_photo_is_verified: !1 });
      } catch {
      }
    });
    y(this, "handleSubmit", (t) => {
      t.preventDefault();
      try {
        const { input: n } = this.state;
        this.state.passport_photo_is_verified && this.state.card_photo_is_verified && n.cardfront !== null && n.passport_photo != null ? this.props.handleOnClose(n) : this.handleAlert("Please ensure that you have successfully uploaded all the necessary files.");
      } catch {
      }
    });
    this.fileUploadFile = T.createRef(), this.state = {
      state: !0,
      showcropper: !1,
      media: {
        file: null
      },
      isLoading: !0,
      passport_photo: null,
      passport_photo_loading: "",
      passport_photo_is_verified: !1,
      error: {
        state: !1,
        message: ""
      },
      input: {
        passport_photo: null
      },
      modal: null,
      card_photo_is_verified: !1
    };
  }
  render() {
    var t;
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(Wm, {}),
      this.state.modal,
      this.state.showcropper ? /* @__PURE__ */ u.jsx(H1, { onSuccess: this.handleCropper, onClose: this.handleCropperClose, media: this.state.media }) : null,
      /* @__PURE__ */ u.jsx("div", { className: `${this.props.className ?? "flex w-full justify-center "}`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex mx-auto lg:mx-0 mt-7 h-64 w-full md:w-1/2 relative shadow-sm bg-gray-200 dark:bg-darkPrimary justify-center items-center rounded-lg overflow-hidden", id: "dropzone", children: [
        this.state.passport_photo !== null && this.state.passport_photo !== void 0 ? /* @__PURE__ */ u.jsx(
          "img",
          {
            className: "object-center object-cover w-full h-full cursor-pointer m-auto",
            alt: "photo",
            src: `${this.state.passport_photo}`
          }
        ) : null,
        /* @__PURE__ */ u.jsx("div", { className: `absolute w-full h-full top-0 left-0 ${this.state.passport_photo_loading === I.LOADING ? "bg-black bg-opacity-25" : ""} right-0 bottom-0`, children: /* @__PURE__ */ u.jsxs("div", { className: "flex p-6 relative flex-col justify-center h-full w-full items-center text-center", children: [
          j.isEmptyOrNull(this.state.passport_photo) ? /* @__PURE__ */ u.jsx("input", { type: "file", className: "absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer", ref: this.fileUploadFile, accept: "image/*", onChange: this.handleFileUpload }) : null,
          /* @__PURE__ */ u.jsx("div", { className: "text-center text-gray-500", children: this.state.passport_photo_loading === I.LOADING ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full h-full text-white justify-center items-center", children: [
            /* @__PURE__ */ u.jsx("div", { className: "inline-block h-8 mb-4 mx-auto w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]", role: "status", children: /* @__PURE__ */ u.jsx("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center text-sm", children: "Analyzing Picture" })
          ] }) : this.state.passport_photo !== null && this.state.passport_photo !== void 0 ? /* @__PURE__ */ u.jsx("div", { className: "absolute right-2 cursor-pointer top-2 w-6 h-6 dark:text-black rounded-full justify-center items-center", onClick: () => this.handleCancelPassportReader(), children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5 rounded-full border-[1px] border-black m-auto", children: /* @__PURE__ */ u.jsx("path", { d: "M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" }) }) }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 0.7, stroke: "currentColor", className: "mx-auto h-12 w-12", children: /* @__PURE__ */ u.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }) }),
            /* @__PURE__ */ u.jsx("h3", { className: "mt-2 text-sm font-medium text-gray-500 dark:text-white", children: /* @__PURE__ */ u.jsx("label", { className: "relative cursor-pointer", children: /* @__PURE__ */ u.jsx("span", { children: "Click to upload photo" }) }) }),
            /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-gray-500", children: "PNG, JPG up to 200kB" })
          ] }) })
        ] }) })
      ] }) }),
      j.isEmptyOrNull(this.props.passport_photo_requirement) ? null : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx("div", { className: "uppercase flex w-full justify-start text-sm font-poppinsBold mt-10 mb-2 text-red-500", children: "Passport Picture Requirements" }),
        /* @__PURE__ */ u.jsx("div", { className: "flex text-sm flex-col w-full space-y-3", children: (t = this.props.passport_photo_requirement) == null ? void 0 : t.map((n, i) => /* @__PURE__ */ u.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ u.jsx("div", { className: "flex w-full text-start justify-start", children: n }) }, `ke${i}`)) })
      ] })
    ] });
  }
}
const Ju = 6048e5, z1 = 864e5, Zu = 6e4, Qu = 36e5, Nl = Symbol.for("constructDateFrom");
function qe(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && Nl in e ? e[Nl](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Te(e, r) {
  return qe(r || e, e);
}
function Mt(e, r, t) {
  const n = Te(e, t == null ? void 0 : t.in);
  if (isNaN(r)) return qe(e, NaN);
  if (!r)
    return n;
  const i = n.getDate(), a = qe(e, n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  const s = a.getDate();
  return i >= s ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    i
  ), n);
}
let V1 = {};
function ki() {
  return V1;
}
function Tn(e, r) {
  var o, l, c, d;
  const t = ki(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((l = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? t.weekStartsOn ?? ((d = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, i = Te(e, r == null ? void 0 : r.in), a = i.getDay(), s = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function mi(e, r) {
  return Tn(e, { ...r, weekStartsOn: 1 });
}
function ed(e, r) {
  const t = Te(e, r == null ? void 0 : r.in), n = t.getFullYear(), i = qe(t, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = mi(i), s = qe(t, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = mi(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Ol(e) {
  const r = Te(e), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +e - +t;
}
function td(e, ...r) {
  const t = qe.bind(
    null,
    r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function vi(e, r) {
  const t = Te(e, r == null ? void 0 : r.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Y1(e, r, t) {
  const [n, i] = td(
    t == null ? void 0 : t.in,
    e,
    r
  ), a = vi(n), s = vi(i), o = +a - Ol(a), l = +s - Ol(s);
  return Math.round((o - l) / z1);
}
function q1(e, r) {
  const t = ed(e, r), n = qe(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), mi(n);
}
function Kn(e, r, t) {
  const [n, i] = td(
    t == null ? void 0 : t.in,
    e,
    r
  );
  return +vi(n) == +vi(i);
}
function G1(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function is(e) {
  return !(!G1(e) && typeof e != "number" || isNaN(+Te(e)));
}
function X1(e, r) {
  const t = Te(e, r == null ? void 0 : r.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const K1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, J1 = (e, r, t) => {
  let n;
  const i = K1[e];
  return typeof i == "string" ? n = i : r === 1 ? n = i.one : n = i.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function fa(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const Z1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Q1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ex = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tx = {
  date: fa({
    formats: Z1,
    defaultWidth: "full"
  }),
  time: fa({
    formats: Q1,
    defaultWidth: "full"
  }),
  dateTime: fa({
    formats: ex,
    defaultWidth: "full"
  })
}, rx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nx = (e, r, t, n) => rx[e];
function en(e) {
  return (r, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : s;
      i = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      i = e.values[o] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return i[a];
  };
}
const ix = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ax = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, sx = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
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
  ]
}, ox = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, lx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, cx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ux = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, dx = {
  ordinalNumber: ux,
  era: en({
    values: ix,
    defaultWidth: "wide"
  }),
  quarter: en({
    values: ax,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: en({
    values: sx,
    defaultWidth: "wide"
  }),
  day: en({
    values: ox,
    defaultWidth: "wide"
  }),
  dayPeriod: en({
    values: lx,
    defaultWidth: "wide",
    formattingValues: cx,
    defaultFormattingWidth: "wide"
  })
};
function tn(e) {
  return (r, t = {}) => {
    const n = t.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(i);
    if (!a)
      return null;
    const s = a[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(o) ? fx(o, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      hx(o, (h) => h.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(c)
    ) : c;
    const d = r.slice(s.length);
    return { value: c, rest: d };
  };
}
function hx(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function fx(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function px(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const o = r.slice(i.length);
    return { value: s, rest: o };
  };
}
const mx = /^(\d+)(th|st|nd|rd)?/i, vx = /\d+/i, gx = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yx = {
  any: [/^b/i, /^(a|c)/i]
}, xx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, bx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, wx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ex = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Cx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Sx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Nx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ox = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Tx = {
  ordinalNumber: px({
    matchPattern: mx,
    parsePattern: vx,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: tn({
    matchPatterns: gx,
    defaultMatchWidth: "wide",
    parsePatterns: yx,
    defaultParseWidth: "any"
  }),
  quarter: tn({
    matchPatterns: xx,
    defaultMatchWidth: "wide",
    parsePatterns: bx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: tn({
    matchPatterns: wx,
    defaultMatchWidth: "wide",
    parsePatterns: Ex,
    defaultParseWidth: "any"
  }),
  day: tn({
    matchPatterns: Cx,
    defaultMatchWidth: "wide",
    parsePatterns: Sx,
    defaultParseWidth: "any"
  }),
  dayPeriod: tn({
    matchPatterns: Nx,
    defaultMatchWidth: "any",
    parsePatterns: Ox,
    defaultParseWidth: "any"
  })
}, Ax = {
  code: "en-US",
  formatDistance: J1,
  formatLong: tx,
  formatRelative: nx,
  localize: dx,
  match: Tx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Rx(e, r) {
  const t = Te(e, r == null ? void 0 : r.in);
  return Y1(t, X1(t)) + 1;
}
function jx(e, r) {
  const t = Te(e, r == null ? void 0 : r.in), n = +mi(t) - +q1(t);
  return Math.round(n / Ju) + 1;
}
function rd(e, r) {
  var d, h, f, m;
  const t = Te(e, r == null ? void 0 : r.in), n = t.getFullYear(), i = ki(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((h = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((m = (f = i.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = qe((r == null ? void 0 : r.in) || e, 0);
  s.setFullYear(n + 1, 0, a), s.setHours(0, 0, 0, 0);
  const o = Tn(s, r), l = qe((r == null ? void 0 : r.in) || e, 0);
  l.setFullYear(n, 0, a), l.setHours(0, 0, 0, 0);
  const c = Tn(l, r);
  return +t >= +o ? n + 1 : +t >= +c ? n : n - 1;
}
function _x(e, r) {
  var o, l, c, d;
  const t = ki(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((l = (o = r == null ? void 0 : r.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((d = (c = t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = rd(e, r), a = qe((r == null ? void 0 : r.in) || e, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), Tn(a, r);
}
function kx(e, r) {
  const t = Te(e, r == null ? void 0 : r.in), n = +Tn(t, r) - +_x(t, r);
  return Math.round(n / Ju) + 1;
}
function xe(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const Ht = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return xe(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : xe(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return xe(e.getDate(), r.length);
  },
  // AM or PM
  a(e, r) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, r) {
    return xe(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return xe(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return xe(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return xe(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return xe(i, r.length);
  }
}, Or = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Tl = {
  // Era
  G: function(e, r, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, r, t) {
    if (r === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return t.ordinalNumber(i, { unit: "year" });
    }
    return Ht.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const i = rd(e, n), a = i > 0 ? i : 1 - i;
    if (r === "YY") {
      const s = a % 100;
      return xe(s, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : xe(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = ed(e);
    return xe(t, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, r) {
    const t = e.getFullYear();
    return xe(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return xe(n, 2);
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(n);
      case "qq":
        return xe(n, 2);
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return Ht.M(e, r);
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "L":
        return String(n + 1);
      case "LL":
        return xe(n + 1, 2);
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, r, t, n) {
    const i = kx(e, n);
    return r === "wo" ? t.ordinalNumber(i, { unit: "week" }) : xe(i, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = jx(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : xe(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Ht.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = Rx(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : xe(n, r.length);
  },
  // Day of week
  E: function(e, r, t) {
    const n = e.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(a);
      case "ee":
        return xe(a, 2);
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(a);
      case "cc":
        return xe(a, r.length);
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(i);
      case "ii":
        return xe(i, r.length);
      case "io":
        return t.ordinalNumber(i, { unit: "day" });
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, r, t) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = Or.noon : n === 0 ? i = Or.midnight : i = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = Or.evening : n >= 12 ? i = Or.afternoon : n >= 4 ? i = Or.morning : i = Or.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, r, t) {
    if (r === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return Ht.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Ht.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : xe(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : xe(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ht.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ht.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return Ht.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return Rl(n);
      case "XXXX":
      case "XX":
        return rr(n);
      case "XXXXX":
      case "XXX":
      default:
        return rr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "x":
        return Rl(n);
      case "xxxx":
      case "xx":
        return rr(n);
      case "xxxxx":
      case "xxx":
      default:
        return rr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Al(n, ":");
      case "OOOO":
      default:
        return "GMT" + rr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Al(n, ":");
      case "zzzz":
      default:
        return "GMT" + rr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return xe(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return xe(+e, r.length);
  }
};
function Al(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(i) : t + String(i) + r + xe(a, 2);
}
function Rl(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : rr(e, r);
}
function rr(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = xe(Math.trunc(n / 60), 2), a = xe(n % 60, 2);
  return t + i + r + a;
}
const jl = (e, r) => {
  switch (e) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, nd = (e, r) => {
  switch (e) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, Mx = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], i = t[2];
  if (!i)
    return jl(e, r);
  let a;
  switch (n) {
    case "P":
      a = r.dateTime({ width: "short" });
      break;
    case "PP":
      a = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = r.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", jl(n, r)).replace("{{time}}", nd(i, r));
}, Px = {
  p: nd,
  P: Mx
}, Dx = /^D+$/, Ix = /^Y+$/, Lx = ["D", "DD", "YY", "YYYY"];
function Fx(e) {
  return Dx.test(e);
}
function $x(e) {
  return Ix.test(e);
}
function Ux(e, r, t) {
  const n = Bx(e, r, t);
  if (console.warn(n), Lx.includes(e)) throw new RangeError(n);
}
function Bx(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Wx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zx = /^'([^]*?)'?$/, Vx = /''/g, Yx = /[a-zA-Z]/;
function Dt(e, r, t) {
  var d, h, f, m;
  const n = ki(), i = n.locale ?? Ax, a = n.firstWeekContainsDate ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = n.weekStartsOn ?? ((m = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = Te(e, t == null ? void 0 : t.in);
  if (!is(o))
    throw new RangeError("Invalid time value");
  let l = r.match(Hx).map((p) => {
    const v = p[0];
    if (v === "p" || v === "P") {
      const g = Px[v];
      return g(p, i.formatLong);
    }
    return p;
  }).join("").match(Wx).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const v = p[0];
    if (v === "'")
      return { isToken: !1, value: qx(p) };
    if (Tl[v])
      return { isToken: !0, value: p };
    if (v.match(Yx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: p };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(o, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return l.map((p) => {
    if (!p.isToken) return p.value;
    const v = p.value;
    ($x(v) || Fx(v)) && Ux(v, r, String(e));
    const g = Tl[v[0]];
    return g(o, v, i.localize, c);
  }).join("");
}
function qx(e) {
  const r = e.match(zx);
  return r ? r[1].replace(Vx, "'") : e;
}
function Gx(e, r) {
  const t = Te(e, r == null ? void 0 : r.in), n = t.getFullYear(), i = t.getMonth(), a = qe(t, 0);
  return a.setFullYear(n, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function _l(e, r) {
  return +Te(e) > +Te(r);
}
function kl(e, r) {
  return +Te(e) < +Te(r);
}
function pa(e, r, t) {
  const n = +Te(e, t == null ? void 0 : t.in), [i, a] = [
    +Te(r.start, t == null ? void 0 : t.in),
    +Te(r.end, t == null ? void 0 : t.in)
  ].sort((s, o) => s - o);
  return n >= i && n <= a;
}
function Be(e, r) {
  const t = () => qe(r == null ? void 0 : r.in, NaN), i = Zx(e);
  let a;
  if (i.date) {
    const c = Qx(i.date, 2);
    a = eb(c.restDateString, c.year);
  }
  if (!a || isNaN(+a)) return t();
  const s = +a;
  let o = 0, l;
  if (i.time && (o = tb(i.time), isNaN(o)))
    return t();
  if (i.timezone) {
    if (l = rb(i.timezone), isNaN(l)) return t();
  } else {
    const c = new Date(s + o), d = Te(0, r == null ? void 0 : r.in);
    return d.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), d.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), d;
  }
  return Te(s + o + l, r == null ? void 0 : r.in);
}
const Jn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Xx = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Kx = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Jx = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Zx(e) {
  const r = {}, t = e.split(Jn.dateTimeDelimiter);
  let n;
  if (t.length > 2)
    return r;
  if (/:/.test(t[0]) ? n = t[0] : (r.date = t[0], n = t[1], Jn.timeZoneDelimiter.test(r.date) && (r.date = e.split(Jn.timeZoneDelimiter)[0], n = e.substr(
    r.date.length,
    e.length
  ))), n) {
    const i = Jn.timezone.exec(n);
    i ? (r.time = n.replace(i[1], ""), r.timezone = i[1]) : r.time = n;
  }
  return r;
}
function Qx(e, r) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + r) + "})|(\\d{2}|[+-]\\d{" + (2 + r) + "})$)"
  ), n = e.match(t);
  if (!n) return { year: NaN, restDateString: "" };
  const i = n[1] ? parseInt(n[1]) : null, a = n[2] ? parseInt(n[2]) : null;
  return {
    year: a === null ? i : a * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function eb(e, r) {
  if (r === null) return /* @__PURE__ */ new Date(NaN);
  const t = e.match(Xx);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const n = !!t[4], i = rn(t[1]), a = rn(t[2]) - 1, s = rn(t[3]), o = rn(t[4]), l = rn(t[5]) - 1;
  if (n)
    return ob(r, o, l) ? nb(r, o, l) : /* @__PURE__ */ new Date(NaN);
  {
    const c = /* @__PURE__ */ new Date(0);
    return !ab(r, a, s) || !sb(r, i) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(r, a, Math.max(i, s)), c);
  }
}
function rn(e) {
  return e ? parseInt(e) : 1;
}
function tb(e) {
  const r = e.match(Kx);
  if (!r) return NaN;
  const t = ma(r[1]), n = ma(r[2]), i = ma(r[3]);
  return lb(t, n, i) ? t * Qu + n * Zu + i * 1e3 : NaN;
}
function ma(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function rb(e) {
  if (e === "Z") return 0;
  const r = e.match(Jx);
  if (!r) return 0;
  const t = r[1] === "+" ? -1 : 1, n = parseInt(r[2]), i = r[3] && parseInt(r[3]) || 0;
  return cb(n, i) ? t * (n * Qu + i * Zu) : NaN;
}
function nb(e, r, t) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const i = n.getUTCDay() || 7, a = (r - 1) * 7 + t + 1 - i;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
const ib = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function id(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function ab(e, r, t) {
  return r >= 0 && r <= 11 && t >= 1 && t <= (ib[r] || (id(e) ? 29 : 28));
}
function sb(e, r) {
  return r >= 1 && r <= (id(e) ? 366 : 365);
}
function ob(e, r, t) {
  return r >= 1 && r <= 53 && t >= 0 && t <= 6;
}
function lb(e, r, t) {
  return e === 24 ? r === 0 && t === 0 : t >= 0 && t < 60 && r >= 0 && r < 60 && e >= 0 && e < 25;
}
function cb(e, r) {
  return r >= 0 && r <= 59;
}
function ub(e, r, t) {
  const n = Te(e, t == null ? void 0 : t.in), i = n.getFullYear(), a = n.getDate(), s = qe(e, 0);
  s.setFullYear(i, r, 15), s.setHours(0, 0, 0, 0);
  const o = Gx(s);
  return n.setMonth(r, Math.min(a, o)), n;
}
function va(e, r, t) {
  const n = Te(e, t == null ? void 0 : t.in);
  return isNaN(+n) ? qe(e, NaN) : (n.setFullYear(r), n);
}
function an(e, r, t) {
  return Mt(e, -r, t);
}
class db extends T.Component {
  render() {
    const { startDate: r, endDate: t, separator: n = "-", displayFormat: i, placeholder: a, onFocus: s } = this.props, o = r && is(r) ? Dt(r, i) : "", l = t && is(t) ? Dt(t, i) : "", c = o ? l ? `${o}${n}${l}` : o : "";
    return /* @__PURE__ */ u.jsx(
      av,
      {
        type: "text",
        defaultValue: c,
        readOnly: !0,
        label: a,
        onFocus: s,
        onChange: () => {
        },
        onSearch: () => {
        }
      }
    );
  }
}
class Ml extends T.Component {
  constructor() {
    super(...arguments);
    y(this, "state", {
      isMonthSelectionOpen: !1,
      isYearSelectionOpen: !1
    });
    y(this, "toggleMonthSelection", (t) => {
      t.preventDefault(), this.setState((n) => ({
        isMonthSelectionOpen: !n.isMonthSelectionOpen,
        isYearSelectionOpen: !1
      }));
    });
    y(this, "toggleYearSelection", (t) => {
      t.preventDefault(), this.setState((n) => ({
        isYearSelectionOpen: !n.isYearSelectionOpen,
        isMonthSelectionOpen: !1
      }));
    });
    y(this, "handleMonthSelect", (t, n) => {
      t.preventDefault();
      const { month: i, onNavigate: a, isRange: s } = this.props;
      if (i) {
        const o = ub(i, n);
        if (a("specific", o), s) {
          const l = Mt(o, 0);
          a("specific", l, !1);
        } else {
          const l = an(o, 0);
          a("specific", l, !0);
        }
      }
      this.setState({ isMonthSelectionOpen: !1 });
    });
    y(this, "handleYearSelect", (t, n) => {
      t.preventDefault();
      const { month: i, onNavigate: a, isRange: s } = this.props;
      if (i) {
        const o = va(i, n);
        if (a("specific", o), s) {
          const l = va(i, n);
          a("specific", l, !1);
        } else {
          const l = va(i, n);
          a("specific", l, !0);
        }
      }
      this.setState({ isYearSelectionOpen: !1 });
    });
    y(this, "renderMonthSelection", () => {
      const t = [
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
      ];
      return /* @__PURE__ */ u.jsx("div", { className: "grid grid-cols-2 max-h-80 gap-2 p-4 bg-gray-100 dark:bg-darkDialogBackground rounded", children: t.map((n, i) => /* @__PURE__ */ u.jsx(
        "button",
        {
          onClick: (a) => this.handleMonthSelect(a, i),
          className: "px-4 py-2 bg-inherit rounded-lg hover:bg-blue-100 dark:hover:bg-darkPrimaryBorder focus:outline-none uppercase",
          children: /* @__PURE__ */ u.jsx("div", { className: " w-full line-clamp-1", children: n })
        },
        i
      )) });
    });
    y(this, "renderYearSelection", (t, n) => {
      const i = (/* @__PURE__ */ new Date()).getFullYear(), a = Array.from({ length: 401 }, (c, d) => i - 200 + d), s = t ? Be(t) : null, o = n ? Be(n) : null, l = {};
      return /* @__PURE__ */ u.jsx(
        "div",
        {
          className: " max-h-80 overflow-y-auto grid grid-cols-2 gap-2 p-4 dark:bg-darkDialogBackground bg-gray-100 rounded",
          ref: (c) => {
            var d;
            if (c) {
              const h = a.findIndex((f) => f === i);
              h !== -1 && l[h] && ((d = l[h]) == null || d.scrollIntoView({ block: "start" }));
            }
          },
          children: a.map((c, d) => {
            const h = s && kl(new Date(c, 0, 1), s) || o && _l(new Date(c, 11, 31), o);
            return /* @__PURE__ */ u.jsx(
              "button",
              {
                ref: (f) => l[d] = f,
                onClick: (f) => this.handleYearSelect(f, c),
                className: `px-4 py-2 h-10 rounded  bg-inherit hover:bg-blue-100 dark:hover:bg-darkPrimaryBorder focus:outline-none transition-all duration-500 ease-in-out  ${h ? "line-through text-gray-400 cursor-not-allowed" : ""}`,
                disabled: h || void 0,
                children: c
              },
              c
            );
          })
        }
      );
    });
  }
  render() {
    const {
      month: t,
      isRange: n,
      startDate: i,
      endDate: a,
      hoveredDate: s,
      onDateSelect: o,
      onDateHover: l,
      onNavigate: c,
      minDate: d,
      maxDate: h
    } = this.props, { isMonthSelectionOpen: f, isYearSelectionOpen: m } = this.state;
    if (!t)
      return /* @__PURE__ */ u.jsx("div", { children: "Error: Month is not defined." });
    const p = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), g = new Date(t.getFullYear(), t.getMonth(), 1).getDay(), x = new Date(t.getFullYear(), t.getMonth(), 0).getDate(), w = [];
    for (let R = g - 1; R >= 0; R--)
      w.push({
        date: new Date(t.getFullYear(), t.getMonth() - 1, x - R),
        isCurrentMonth: !1
      });
    for (let R = 1; R <= p; R++)
      w.push({
        date: new Date(t.getFullYear(), t.getMonth(), R),
        isCurrentMonth: !0
      });
    const S = 42 - w.length;
    for (let R = 1; R <= S; R++)
      w.push({
        date: new Date(t.getFullYear(), t.getMonth() + 1, R),
        isCurrentMonth: !1
      });
    const C = /* @__PURE__ */ new Date(), D = new Date(C.getFullYear(), C.getMonth(), C.getDate());
    return /* @__PURE__ */ u.jsxs("div", { className: "w-full font-poppinsRegular text-sm", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center p-2 rounded-lg mb-5 border-[1px] border-gray-300 dark:border-darkPrimaryBorderLight", children: [
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: (R) => {
              R.preventDefault(), c("prev");
            },
            className: "w-8 h-8 px-2 flex-shrink-0 py-1 bg-inherit rounded-full hover:bg-gray-200",
            children: /* @__PURE__ */ u.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-4 h-4 flex-shrink-0", children: /* @__PURE__ */ u.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              }
            ) })
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 w-full", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ u.jsx(
            "div",
            {
              onClick: this.toggleMonthSelection,
              className: "flex font-semibold cursor-pointer hover:underline",
              children: Dt(t, "MMMM")
            }
          ) }),
          /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ u.jsx(
            "div",
            {
              onClick: this.toggleYearSelection,
              className: "flex font-semibold cursor-pointer hover:underline",
              children: Dt(t, "yyyy")
            }
          ) })
        ] }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: (R) => {
              R.preventDefault(), c("next");
            },
            className: "w-8 h-8 px-2 flex-shrink-0 py-1 bg-inherit rounded-full hover:bg-gray-200",
            children: /* @__PURE__ */ u.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-4 h-4 flex-shrink-0", children: /* @__PURE__ */ u.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              }
            ) })
          }
        )
      ] }),
      f && this.renderMonthSelection(),
      m && this.renderYearSelection(d, h),
      !f && !m && /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-7 gap-0 text-center border-[1px] dark:border-darkPrimaryBorderLight border-gray-300 px-2 py-4 rounded-lg text-gray-600", children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((R) => /* @__PURE__ */ u.jsx("div", { className: "font-semibold py-1 font-poppinsSemiBold uppercase text-gray-600 dark:text-white/75", children: R }, R)),
        w.map(({ date: R, isCurrentMonth: N }, M) => {
          const Z = n && i && Kn(R, i) && N, Q = n && a && Kn(R, a) && N, te = (s == null ? void 0 : s.date) && Kn(R, s == null ? void 0 : s.date) && N, z = d && kl(R, Be(d)) || h && _l(R, Be(h)), Y = n && i && s && pa(R, {
            start: i && (s != null && s.date) ? i < s.date ? i : s.date : /* @__PURE__ */ new Date(),
            end: i && (s != null && s.date) ? i < s.date ? s.date : i : /* @__PURE__ */ new Date()
          }) && N, V = n && i && s && pa(R, {
            start: i && (s != null && s.date) ? i < s.date ? i : s.date : /* @__PURE__ */ new Date(),
            end: i && (s != null && s.date) ? i < s.date ? s.date : i : /* @__PURE__ */ new Date()
          }) && N, W = n && i && a && pa(R, {
            start: i < a ? i : a,
            end: i < a ? a : i
          }) && N, K = Kn(R, D) && N;
          return /* @__PURE__ */ u.jsx(
            "button",
            {
              onClick: ($) => {
                $.preventDefault(), z || o(R);
              },
              onMouseEnter: () => l(R),
              className: `w-full square text-sm ${K ? "bg-primary text-white dark:bg-white dark:text-black rounded-full " : Z || Q ? `bg-primary dark:bg-darkPrimaryBorderLight text-white ${Z ? "rounded-l-full" : "rounded-r-full"}` : te ? "bg-primary dark:bg-darkPrimaryBorderLight text-white" : V ? "bg-primary/25 dark:bg-darkPrimaryBorderLight/25" : W || Y ? "bg-primary/25 dark:text-white dark:bg-darkPrimaryBorderLight/25" : "dark:hover:bg-white/50 dark:hover:text-white rounded-full"}  ${N ? z ? "text-gray-400 line-through cursor-not-allowed" : N && !K ? "text-black dark:text-white" : "" : z ? "line-through cursor-not-allowed" : "text-gray-400"}`,
              children: R.getDate()
            },
            M
          );
        })
      ] })
    ] });
  }
}
class hb extends T.Component {
  constructor() {
    super(...arguments);
    y(this, "state", {
      isStartMonthSelectionOpen: !1,
      isStartYearSelectionOpen: !1,
      isEndMonthSelectionOpen: !1,
      isEndYearSelectionOpen: !1
    });
    y(this, "toggleStartMonthSelection", () => {
      this.setState((t) => ({
        isStartMonthSelectionOpen: !t.isStartMonthSelectionOpen,
        isStartYearSelectionOpen: !1
      }));
    });
    y(this, "toggleStartYearSelection", () => {
      this.setState((t) => ({
        isStartYearSelectionOpen: !t.isStartYearSelectionOpen,
        isStartMonthSelectionOpen: !1
      }));
    });
    y(this, "toggleEndMonthSelection", () => {
      this.setState((t) => ({
        isEndMonthSelectionOpen: !t.isEndMonthSelectionOpen,
        isEndYearSelectionOpen: !1
      }));
    });
    y(this, "toggleEndYearSelection", () => {
      this.setState((t) => ({
        isEndYearSelectionOpen: !t.isEndYearSelectionOpen,
        isEndMonthSelectionOpen: !1
      }));
    });
  }
  render() {
    const {
      isRange: t,
      startDate: n,
      endDate: i,
      hoveredDate: a,
      currentMonth: s,
      endMonth: o,
      minDate: l,
      maxDate: c,
      showActionButtons: d,
      onDateSelect: h,
      onDateHover: f,
      resetSelection: m,
      toggleModal: p,
      onNavigate: v
    } = this.props;
    return /* @__PURE__ */ u.jsx("div", { className: "fixed top-0 left-0 z-[99999999] w-full h-full overflow-hidden bg-black bg-opacity-10 right-0 bottom-0 flex justify-center items-center", children: /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `bg-white dark:bg-darkDialogBackground dark:text-white rounded-lg p-6 w-full -mt-10 ${t ? "max-w-3xl" : "max-w-md"}`,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center border-b dark:border-darkPrimaryBorderLight pb-3", children: [
            /* @__PURE__ */ u.jsx("h2", { className: "text-base font-poppinsSemiBold font-semibold", children: t ? "Select Date Range" : "Select Date" }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                onClick: p,
                className: "text-gray-500 dark:text-white hover:text-gray-700",
                children: "×"
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `${t ? "grid grid-col-1 lg:grid-cols-2 gap-8 mt-4" : " flex flex-col w-full"}`,
              children: [
                /* @__PURE__ */ u.jsx(
                  Ml,
                  {
                    month: s,
                    isRange: t,
                    startDate: n,
                    endDate: i,
                    hoveredDate: a ? { date: a.date } : void 0,
                    minDate: l ? l.toISOString() : void 0,
                    maxDate: c ? c.toISOString() : void 0,
                    onDateSelect: (g) => h(g, !0),
                    onDateHover: (g) => f(g, "start"),
                    onNavigate: (g, x) => v(g, "start", x)
                  }
                ),
                t && /* @__PURE__ */ u.jsx(
                  Ml,
                  {
                    month: o,
                    isRange: t,
                    startDate: n,
                    endDate: i,
                    hoveredDate: a ? { date: a.date } : void 0,
                    minDate: l ? l.toISOString() : void 0,
                    maxDate: c ? c.toISOString() : void 0,
                    onDateSelect: (g) => h(g, !1),
                    onDateHover: (g) => f(g, "end"),
                    onNavigate: (g, x) => v(g, "end", x)
                  }
                )
              ]
            }
          ),
          d && /* @__PURE__ */ u.jsxs("div", { className: "mt-4 flex justify-between items-center", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                onClick: m,
                className: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",
                children: "Reset"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                onClick: p,
                className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",
                children: "Confirm"
              }
            )
          ] })
        ]
      }
    ) });
  }
}
class Ib extends me {
  constructor(t) {
    var n, i, a, s;
    super(t);
    y(this, "toggleModal", () => {
      this.setState(
        (t) => ({ isOpen: !t.isOpen }),
        () => {
          this.state.isOpen && this.populateDates();
        }
      );
    });
    y(this, "populateDates", () => {
      const { startDate: t, endDate: n } = this.state;
      this.setState({
        startDate: t,
        endDate: n,
        currentMonth: t ? new Date(t.getFullYear(), t.getMonth(), 1) : /* @__PURE__ */ new Date(),
        endMonth: n ? new Date(n.getFullYear(), n.getMonth(), 1) : Mt(/* @__PURE__ */ new Date(), 1)
      });
    });
    y(this, "handleDateSelect", (t) => {
      const { isRange: n, startDate: i, endDate: a, currentMonth: s } = this.state, { onSelected: o } = this.props, l = Dt(t, "yyyy-MM-dd");
      if (t.getMonth() > s.getMonth() || t.getFullYear() > s.getFullYear(), t.getMonth() < s.getMonth() || t.getFullYear() < s.getFullYear(), n) {
        if (i && a) {
          this.setState({ startDate: t, endDate: null, hoveredDate: null }), o == null || o({ startDate: l, endDate: void 0 });
          return;
        }
        if (!i)
          this.setState({ startDate: t, hoveredDate: null }), o == null || o({ startDate: l, endDate: void 0 });
        else {
          const c = i < t ? i : t, d = i > t ? i : t;
          this.setState(
            { startDate: c, endDate: d, hoveredDate: null },
            this.toggleModal
          ), o == null || o({
            startDate: Dt(c, "yyyy-MM-dd"),
            endDate: Dt(d, "yyyy-MM-dd")
          });
        }
      } else
        this.setState({ startDate: t, endDate: t, hoveredDate: null }, this.toggleModal), o == null || o({
          startDate: Dt(t, "yyyy-MM-dd"),
          endDate: Dt(t, "yyyy-MM-dd")
        });
    });
    y(this, "handleDateHover", (t, n) => {
      const { isRange: i, startDate: a, endDate: s, currentMonth: o } = this.state, l = t.getMonth() > o.getMonth() || t.getFullYear() > o.getFullYear(), c = t.getMonth() < o.getMonth() || t.getFullYear() < o.getFullYear();
      i && a && !s && this.setState({
        hoveredDate: {
          date: t,
          type: n,
          isOutOfCurrentMonth: l || c
        }
      });
    });
    y(this, "resetSelection", () => {
      var t, n;
      this.setState({
        startDate: null,
        endDate: null,
        hoveredDate: null,
        currentMonth: /* @__PURE__ */ new Date(),
        endMonth: Mt(/* @__PURE__ */ new Date(), 1)
      }), (n = (t = this.props).onSelected) == null || n.call(t, null);
    });
    y(this, "handleNavigate", (t, n, i) => {
      const a = n === "start" ? "currentMonth" : "endMonth";
      this.setState((s) => {
        const o = {};
        return t === "prev" ? (o[a] = an(s[a], 1), n === "end" && an(s[a], 1) <= s.currentMonth && (o.currentMonth = an(s.currentMonth, 1))) : t === "next" ? (o[a] = Mt(s[a], 1), n === "start" && Mt(s[a], 1) >= s.endMonth && (o.endMonth = Mt(s.endMonth, 1))) : t === "specific" && i && (o[a] = i, n === "start" && i >= s.endMonth ? o.endMonth = Mt(i, 1) : n === "end" && i <= s.currentMonth && (o.currentMonth = an(i, 1))), o;
      });
    });
    this.state = {
      isOpen: !1,
      isRange: t.isRange ?? !0,
      startDate: (n = t.date) != null && n.startDate ? Be(t.date.startDate) : null,
      endDate: (i = t.date) != null && i.endDate ? Be(t.date.endDate) : null,
      hoveredDate: null,
      currentMonth: (a = t.date) != null && a.startDate ? new Date(Be(t.date.startDate).getFullYear(), Be(t.date.startDate).getMonth(), 1) : /* @__PURE__ */ new Date(),
      endMonth: (s = t.date) != null && s.endDate ? new Date(Be(t.date.endDate).getFullYear(), Be(t.date.endDate).getMonth(), 1) : Mt(/* @__PURE__ */ new Date(), 1),
      parsedMinDate: t.minDate ? Be(t.minDate) : null,
      parsedMaxDate: t.maxDate ? Be(t.maxDate) : null
    };
  }
  render() {
    const { isOpen: t, isRange: n, startDate: i, endDate: a, hoveredDate: s, currentMonth: o, endMonth: l } = this.state, {
      placeholder: c = "",
      separator: d = " to ",
      displayFormat: h = "MMMM dd, yyyy",
      minDate: f,
      maxDate: m,
      showActionButtons: p
    } = this.props, v = f ? Be(f) : null, g = m ? Be(m) : null;
    return /* @__PURE__ */ u.jsxs("div", { children: [
      /* @__PURE__ */ u.jsx(
        db,
        {
          isRange: n,
          startDate: i,
          endDate: a,
          separator: d,
          displayFormat: h,
          placeholder: c,
          onFocus: this.toggleModal
        }
      ),
      t && /* @__PURE__ */ u.jsx(
        hb,
        {
          isRange: n,
          startDate: i,
          endDate: a,
          hoveredDate: s,
          currentMonth: o,
          endMonth: l,
          minDate: v,
          maxDate: g,
          onDateSelect: this.handleDateSelect,
          onDateHover: this.handleDateHover,
          resetSelection: this.resetSelection,
          toggleModal: this.toggleModal,
          onNavigate: this.handleNavigate,
          showActionButtons: p
        }
      )
    ] });
  }
}
export {
  Rb as DesmyAccordion,
  Pe as DesmyAuth,
  uv as DesmyButton,
  Ci as DesmyClickOutsideListener,
  j as DesmyCommons,
  Sb as DesmyCustomDataTable,
  cv as DesmyDataSetTable,
  Cb as DesmyDataTable,
  Ib as DesmyDatePicker,
  fc as DesmyDropdown,
  Tb as DesmyEmpty,
  Nb as DesmyFilePicker,
  vb as DesmyHelmetSEO,
  xb as DesmyLazyloading,
  Ob as DesmyListCard,
  bb as DesmyModalContainer,
  pc as DesmyModalHandler,
  Ab as DesmyModalWrapper,
  mm as DesmyMultiStepModal,
  hv as DesmyNetworkError,
  Db as DesmyPassportPicker,
  gb as DesmyPermissions,
  dv as DesmyPopupMenu,
  sv as DesmyReadMoreOrLess,
  yb as DesmyRouter,
  Cs as DesmyRxServices,
  wb as DesmySearchInput,
  Eb as DesmySideBarItem,
  Pb as DesmySmartFormUpload,
  I as DesmyState,
  kb as DesmyTabLayout,
  Vo as DesmyTableCard,
  av as DesmyTextInput,
  jb as DesmyToast,
  _b as DesmyToastProvider,
  Mb as DesmyUploadManager
};
//# sourceMappingURL=index.es.js.map
