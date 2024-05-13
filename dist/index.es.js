var En = Object.defineProperty;
var Sn = (e, t, r) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var P = (e, t, r) => (Sn(e, typeof t != "symbol" ? t + "" : t, r), r);
import q, { useRef as We, useEffect as It, cloneElement as Rn, Component as Cn } from "react";
import On from "react-dom";
var Xe = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Tn() {
  if (Ut)
    return ue;
  Ut = 1;
  var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, u, p) {
    var f, c = {}, b = null, w = null;
    p !== void 0 && (b = "" + p), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (c[f] = u[f]);
    if (l && l.defaultProps)
      for (f in u = l.defaultProps, u)
        c[f] === void 0 && (c[f] = u[f]);
    return { $$typeof: t, type: l, key: b, ref: w, props: c, _owner: o.current };
  }
  return ue.Fragment = r, ue.jsx = i, ue.jsxs = i, ue;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Nn() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function R(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = h && a[h] || a[g];
      return typeof m == "function" ? m : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(a) {
      {
        for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++)
          y[x - 1] = arguments[x];
        L("error", a, y);
      }
    }
    function L(a, m, y) {
      {
        var x = T.ReactDebugCurrentFrame, N = x.getStackAddendum();
        N !== "" && (m += "%s", y = y.concat([N]));
        var D = y.map(function(C) {
          return String(C);
        });
        D.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, D);
      }
    }
    var ie = !1, be = !1, Wr = !1, zr = !1, Vr = !1, mt;
    mt = Symbol.for("react.module.reference");
    function qr(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || Vr || a === o || a === p || a === f || zr || a === w || ie || be || Wr || typeof a == "object" && a !== null && (a.$$typeof === b || a.$$typeof === c || a.$$typeof === i || a.$$typeof === l || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === mt || a.getModuleId !== void 0));
    }
    function Jr(a, m, y) {
      var x = a.displayName;
      if (x)
        return x;
      var N = m.displayName || m.name || "";
      return N !== "" ? y + "(" + N + ")" : y;
    }
    function vt(a) {
      return a.displayName || "Context";
    }
    function H(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var m = a;
            return vt(m) + ".Consumer";
          case i:
            var y = a;
            return vt(y._context) + ".Provider";
          case u:
            return Jr(a, a.render, "ForwardRef");
          case c:
            var x = a.displayName || null;
            return x !== null ? x : H(a.type) || "Memo";
          case b: {
            var N = a, D = N._payload, C = N._init;
            try {
              return H(C(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ae = 0, gt, wt, yt, bt, xt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function Yr() {
      {
        if (ae === 0) {
          gt = console.log, wt = console.info, yt = console.warn, bt = console.error, xt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ae++;
      }
    }
    function Kr() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, a, {
              value: gt
            }),
            info: Y({}, a, {
              value: wt
            }),
            warn: Y({}, a, {
              value: yt
            }),
            error: Y({}, a, {
              value: bt
            }),
            group: Y({}, a, {
              value: xt
            }),
            groupCollapsed: Y({}, a, {
              value: Et
            }),
            groupEnd: Y({}, a, {
              value: St
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = T.ReactCurrentDispatcher, Le;
    function xe(a, m, y) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (N) {
            var x = N.stack.trim().match(/\n( *(at )?)/);
            Le = x && x[1] || "";
          }
        return `
` + Le + a;
      }
    }
    var Fe = !1, Ee;
    {
      var Gr = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new Gr();
    }
    function Ct(a, m) {
      if (!a || Fe)
        return "";
      {
        var y = Ee.get(a);
        if (y !== void 0)
          return y;
      }
      var x;
      Fe = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = ke.current, ke.current = null, Yr();
      try {
        if (m) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (M) {
              x = M;
            }
            Reflect.construct(a, [], C);
          } else {
            try {
              C.call();
            } catch (M) {
              x = M;
            }
            a.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            x = M;
          }
          a();
        }
      } catch (M) {
        if (M && x && typeof M.stack == "string") {
          for (var S = M.stack.split(`
`), F = x.stack.split(`
`), _ = S.length - 1, j = F.length - 1; _ >= 1 && j >= 0 && S[_] !== F[j]; )
            j--;
          for (; _ >= 1 && j >= 0; _--, j--)
            if (S[_] !== F[j]) {
              if (_ !== 1 || j !== 1)
                do
                  if (_--, j--, j < 0 || S[_] !== F[j]) {
                    var B = `
` + S[_].replace(" at new ", " at ");
                    return a.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", a.displayName)), typeof a == "function" && Ee.set(a, B), B;
                  }
                while (_ >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, ke.current = D, Kr(), Error.prepareStackTrace = N;
      }
      var Q = a ? a.displayName || a.name : "", K = Q ? xe(Q) : "";
      return typeof a == "function" && Ee.set(a, K), K;
    }
    function Xr(a, m, y) {
      return Ct(a, !1);
    }
    function Zr(a) {
      var m = a.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(a, m, y) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Ct(a, Zr(a));
      if (typeof a == "string")
        return xe(a);
      switch (a) {
        case p:
          return xe("Suspense");
        case f:
          return xe("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return Xr(a.render);
          case c:
            return Se(a.type, m, y);
          case b: {
            var x = a, N = x._payload, D = x._init;
            try {
              return Se(D(N), m, y);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Ot = {}, Tt = T.ReactDebugCurrentFrame;
    function Re(a) {
      if (a) {
        var m = a._owner, y = Se(a.type, a._source, m ? m.type : null);
        Tt.setExtraStackFrame(y);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Qr(a, m, y, x, N) {
      {
        var D = Function.call.bind(le);
        for (var C in a)
          if (D(a, C)) {
            var S = void 0;
            try {
              if (typeof a[C] != "function") {
                var F = Error((x || "React class") + ": " + y + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              S = a[C](m, C, x, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              S = _;
            }
            S && !(S instanceof Error) && (Re(N), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", y, C, typeof S), Re(null)), S instanceof Error && !(S.message in Ot) && (Ot[S.message] = !0, Re(N), E("Failed %s type: %s", y, S.message), Re(null));
          }
      }
    }
    var en = Array.isArray;
    function Me(a) {
      return en(a);
    }
    function tn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, y = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y;
      }
    }
    function rn(a) {
      try {
        return Nt(a), !1;
      } catch {
        return !0;
      }
    }
    function Nt(a) {
      return "" + a;
    }
    function Pt(a) {
      if (rn(a))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tn(a)), Nt(a);
    }
    var ce = T.ReactCurrentOwner, nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dt, At, Be;
    Be = {};
    function sn(a) {
      if (le.call(a, "ref")) {
        var m = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function on(a) {
      if (le.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function an(a, m) {
      if (typeof a.ref == "string" && ce.current && m && ce.current.stateNode !== m) {
        var y = H(ce.current.type);
        Be[y] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ce.current.type), a.ref), Be[y] = !0);
      }
    }
    function ln(a, m) {
      {
        var y = function() {
          Dt || (Dt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function cn(a, m) {
      {
        var y = function() {
          At || (At = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var un = function(a, m, y, x, N, D, C) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: m,
        ref: y,
        props: C,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function fn(a, m, y, x, N) {
      {
        var D, C = {}, S = null, F = null;
        y !== void 0 && (Pt(y), S = "" + y), on(m) && (Pt(m.key), S = "" + m.key), sn(m) && (F = m.ref, an(m, N));
        for (D in m)
          le.call(m, D) && !nn.hasOwnProperty(D) && (C[D] = m[D]);
        if (a && a.defaultProps) {
          var _ = a.defaultProps;
          for (D in _)
            C[D] === void 0 && (C[D] = _[D]);
        }
        if (S || F) {
          var j = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          S && ln(C, j), F && cn(C, j);
        }
        return un(a, S, F, N, x, ce.current, C);
      }
    }
    var Ie = T.ReactCurrentOwner, _t = T.ReactDebugCurrentFrame;
    function Z(a) {
      if (a) {
        var m = a._owner, y = Se(a.type, a._source, m ? m.type : null);
        _t.setExtraStackFrame(y);
      } else
        _t.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function $e(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function jt() {
      {
        if (Ie.current) {
          var a = H(Ie.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function dn(a) {
      return "";
    }
    var kt = {};
    function pn(a) {
      {
        var m = jt();
        if (!m) {
          var y = typeof a == "string" ? a : a.displayName || a.name;
          y && (m = `

Check the top-level render call using <` + y + ">.");
        }
        return m;
      }
    }
    function Lt(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var y = pn(m);
        if (kt[y])
          return;
        kt[y] = !0;
        var x = "";
        a && a._owner && a._owner !== Ie.current && (x = " It was passed a child from " + H(a._owner.type) + "."), Z(a), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, x), Z(null);
      }
    }
    function Ft(a, m) {
      {
        if (typeof a != "object")
          return;
        if (Me(a))
          for (var y = 0; y < a.length; y++) {
            var x = a[y];
            $e(x) && Lt(x, m);
          }
        else if ($e(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var N = R(a);
          if (typeof N == "function" && N !== a.entries)
            for (var D = N.call(a), C; !(C = D.next()).done; )
              $e(C.value) && Lt(C.value, m);
        }
      }
    }
    function hn(a) {
      {
        var m = a.type;
        if (m == null || typeof m == "string")
          return;
        var y;
        if (typeof m == "function")
          y = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === c))
          y = m.propTypes;
        else
          return;
        if (y) {
          var x = H(m);
          Qr(y, a.props, "prop", x, a);
        } else if (m.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var N = H(m);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mn(a) {
      {
        for (var m = Object.keys(a.props), y = 0; y < m.length; y++) {
          var x = m[y];
          if (x !== "children" && x !== "key") {
            Z(a), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Z(null);
            break;
          }
        }
        a.ref !== null && (Z(a), E("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    var Mt = {};
    function Bt(a, m, y, x, N, D) {
      {
        var C = qr(a);
        if (!C) {
          var S = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = dn();
          F ? S += F : S += jt();
          var _;
          a === null ? _ = "null" : Me(a) ? _ = "array" : a !== void 0 && a.$$typeof === t ? (_ = "<" + (H(a.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof a, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, S);
        }
        var j = fn(a, m, y, N, D);
        if (j == null)
          return j;
        if (C) {
          var B = m.children;
          if (B !== void 0)
            if (x)
              if (Me(B)) {
                for (var Q = 0; Q < B.length; Q++)
                  Ft(B[Q], a);
                Object.freeze && Object.freeze(B);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ft(B, a);
        }
        if (le.call(m, "key")) {
          var K = H(a), M = Object.keys(m).filter(function(xn) {
            return xn !== "key";
          }), He = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mt[K + He]) {
            var bn = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, K, bn, K), Mt[K + He] = !0;
          }
        }
        return a === n ? mn(j) : hn(j), j;
      }
    }
    function vn(a, m, y) {
      return Bt(a, m, y, !0);
    }
    function gn(a, m, y) {
      return Bt(a, m, y, !1);
    }
    var wn = gn, yn = vn;
    fe.Fragment = n, fe.jsx = wn, fe.jsxs = yn;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Xe.exports = Tn() : Xe.exports = Nn();
var v = Xe.exports, or = /* @__PURE__ */ ((e) => (e.LOADING = "LOADING", e.ERROR = "ERROR", e.LOADED = "LOADED", e.WAITING = "WAITING", e.NOTICE = "NOTICE", e))(or || {});
class Pn {
  constructor() {
    P(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(t) {
    let r = t.size;
    const n = ["Bytes", "KB", "MB", "GB"];
    let o = 0;
    for (; r > 900; )
      r /= 1024, o++;
    return `${Math.round(r * 100) / 100} ${n[o]}`;
  }
  getExtension(t) {
    return t.split(".").pop();
  }
  getFileName(t) {
    return t.split("/").pop();
  }
  isValidHttpUrl(t) {
    let r;
    try {
      r = new URL(t);
    } catch {
      return !1;
    }
    return /https?/.test(r.protocol);
  }
  makeUniqueid(t = 10) {
    let r = "";
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = n.length;
    for (let s = 0; s < t; s++)
      r += n.charAt(Math.floor(Math.random() * o));
    return r;
  }
  nameToText(t) {
    return t.split("_").join(" ");
  }
  getRandomColor() {
    const t = "0123456789ABCDEF";
    let r = "#";
    for (let n = 0; n < 6; n++)
      r += t[Math.floor(Math.random() * 16)];
    return r;
  }
  concat(t, r) {
    return `${t} ${r}`;
  }
  isEmptyOrNull(t) {
    return t === "" || t == null || t == null;
  }
  toStringDefault(t, r = "") {
    return this.isEmptyOrNull(t) ? r.toString() : t;
  }
  toString(t) {
    return t + "";
  }
  isEmpty(t) {
    return t === "" || t === void 0 || t === null;
  }
  validatePasswords(t, r) {
    return t !== "" && t === r;
  }
  validatePassword(t) {
    const r = /[A-Z]/.test(t), n = /[a-z]/.test(t), o = /\d/.test(t), s = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(t), i = t.length >= 8;
    return { hasUppercase: r, hasLowercase: n, hasNumber: o, hasSpecialCharacter: s, has8Characters: i, allValidationsPassed: r && n && o && s && i };
  }
  isNotEmpty(t) {
    return t !== "";
  }
  convertUnderscoreToSpaceString(t) {
    return t.replace(/_/g, " ");
  }
  async imageSize(t) {
    return new Promise((r, n) => {
      try {
        const o = new FileReader();
        o.onload = () => {
          const s = new Image();
          s.onload = () => {
            r({ width: s.width, height: s.height });
          }, s.src = o.result;
        }, o.onerror = (s) => {
          n(s);
        }, o.readAsDataURL(t);
      } catch (o) {
        n(o);
      }
    });
  }
  capitalizeEachWord(t) {
    return t.toLowerCase().split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
  }
  formatDateString(t) {
    const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!r)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, n, o, s] = r;
    return `${s}-${o}-${n}`;
  }
  validateEmail(t) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
  }
  convertNumber(t) {
    return Math.abs(t) >= 1e6 ? (t / 1e6).toString().substring(0, 4) + "M" : Math.abs(t) >= 1e3 ? (t / 1e3).toString().substring(0, 4) + "k" : t.toString();
  }
  daysLeft(t) {
    const r = new Date(t), n = /* @__PURE__ */ new Date(), o = r.getTime() - n.getTime();
    return Math.ceil(o / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(t) {
    const n = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t.getDay()], o = t.getDate(), i = [
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
    ][t.getMonth()], l = t.getFullYear();
    function u(f) {
      if (f >= 11 && f <= 13)
        return "th";
      switch (f % 10) {
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
    const p = u(o);
    return `${n}, ${o}${p} ${i}, ${l}`;
  }
  getTimeAgoAndCustomDate(t) {
    const r = /* @__PURE__ */ new Date(), n = new Date(t), o = r.getTime() - n.getTime();
    if (r < n)
      return "Future date";
    const s = Math.floor(o / 1e3);
    return s < 60 ? `${s} seconds ago` : s < 3600 ? `${Math.floor(s / 60)} minutes ago` : s < 86400 ? `${Math.floor(s / 3600)} hours ago` : s < 2592e3 ? `${Math.floor(s / 86400)} days ago` : n.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    });
  }
  roundTo2dp(t) {
    const r = parseFloat(t);
    return isNaN(r) ? t : (Math.round(r * 100) / 100).toFixed(2);
  }
}
const A = new Pn();
class Dn extends q.Component {
  constructor(r) {
    super(r);
    P(this, "handleValueChange", (r) => {
      try {
        const { data: n } = this.state;
        n.start_date = r.startDate, n.end_date = r.endDate, this.setState({ data: n, value: r });
      } catch {
      }
    });
    P(this, "handleClose", (r) => {
      try {
        this.props.settings.loading && r && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const n = { ...this.state.data, status: r };
        this.props.settings.datalist !== void 0 && (n.option_data = this.state.data_value), A.isEmptyOrNull(this.state.input.user_input) || (n.user_input = this.state.input.user_input), this.props.onClose(n);
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
        defaultvalue: "",
        onchange: "",
        data: []
      }
    };
  }
  render() {
    const { settings: r } = this.props;
    return /* @__PURE__ */ v.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ v.jsx(
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
          children: /* @__PURE__ */ v.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ v.jsx(
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
      /* @__PURE__ */ v.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col w-full my-5", children: /* @__PURE__ */ v.jsx("div", { className: "flex w-full", children: this.props.children }) }) }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ v.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ v.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        r.btnPosition != null && r.btnPosition !== void 0 && !A.isEmptyOrNull(r.btnPosition) ? /* @__PURE__ */ v.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: r.btnPosition
          }
        ) }) : null,
        r.btnNegative != null && r.btnNegative !== void 0 && !A.isEmptyOrNull(r.btnNegative) ? /* @__PURE__ */ v.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!1),
            className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: r.btnNegative
          }
        ) }) : null
      ] }) })
    ] }) });
  }
}
class jo extends q.Component {
  constructor(r) {
    super(r);
    P(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: or.ERROR,
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
          data: []
        }
      }
    }, this.modalContainer = document.createElement("div"), this.modalContainer.className = "modal-container";
  }
  componentDidMount() {
    try {
      const r = { ...this.state.settings }, n = this.props.settings;
      n.title !== void 0 && (r.title = n.title), n.forceLoading !== void 0 && (r.forceLoading = n.forceLoading), n.hint !== void 0 && (r.hint = n.hint), n.handleOnClose !== void 0 && (r.handleOnClose = n.handleOnClose), n.btnPosition !== void 0 && (r.btnPosition = n.btnPosition), n.btnNegative !== void 0 && (r.btnNegative = n.btnNegative), n.type !== void 0 && (r.type = n.type), n.loading !== void 0 && (r.loading = n.loading), n.loadinghint !== void 0 && (r.loadinghint = n.loadinghint), n.showDateRange !== void 0 && (r.showDateRange = n.showDateRange), n.date !== void 0 && (r.date = n.date), n.time !== void 0 && (r.time = n.time), n.showDateRangeTitle !== void 0 && (r.showDateRangeTitle = n.showDateRangeTitle), n.inputFieldLabel !== void 0 && (r.inputFieldLabel = n.inputFieldLabel), n.zIndex !== void 0 && (r.zIndex = n.zIndex), n.datalist !== void 0 && (r.datalist = n.datalist), this.setState({ settings: r, loaded: !0 });
    } catch {
    }
    document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const r = /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsx("div", { className: "fixed z-[10000] inset-0 overflow-y-auto", children: /* @__PURE__ */ v.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ v.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ v.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ v.jsx(Dn, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children })
    ] }) }) }) });
    return On.createPortal(r, this.modalContainer);
  }
}
const ze = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd"
}, ir = ({
  children: e,
  onClickOutside: t,
  focusEvent: r = "focusin",
  mouseEvent: n = "click",
  touchEvent: o = "touchend"
}) => {
  const s = We(null), i = We(null), l = We(!1);
  It(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = (w) => (h) => {
    i.current = h.target;
    const g = e == null ? void 0 : e.props[w];
    g && g(h);
  }, p = (w) => {
    s.current = w;
    let { ref: h } = e;
    typeof h == "function" ? h(w) : h && (h.current = w);
  };
  It(() => {
    var g;
    const w = ((g = s.current) == null ? void 0 : g.ownerDocument) ?? document, h = (R) => {
      l.current && (s.current && s.current.contains(R.target) || i.current === R.target || !w.contains(R.target) || t(R));
    };
    return w.addEventListener(n, h), w.addEventListener(o, h), w.addEventListener(r, h), () => {
      w.removeEventListener(n, h), w.removeEventListener(o, h), w.removeEventListener(r, h);
    };
  }, [r, n, t, o]);
  const f = ze[n], c = ze[o], b = ze[r];
  return q.Children.only(
    Rn(e, {
      ref: p,
      [b]: u(b),
      [f]: u(f),
      [c]: u(c)
    })
  );
};
ir.displayName = "DesmyClickOutsideListener";
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
var he = typeof window < "u" && typeof document < "u" && typeof navigator < "u", An = function() {
  for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
    if (he && navigator.userAgent.indexOf(e[t]) >= 0)
      return 1;
  return 0;
}();
function _n(e) {
  var t = !1;
  return function() {
    t || (t = !0, window.Promise.resolve().then(function() {
      t = !1, e();
    }));
  };
}
function jn(e) {
  var t = !1;
  return function() {
    t || (t = !0, setTimeout(function() {
      t = !1, e();
    }, An));
  };
}
var kn = he && window.Promise, Ln = kn ? _n : jn;
function ar(e) {
  var t = {};
  return e && t.toString.call(e) === "[object Function]";
}
function X(e, t) {
  if (e.nodeType !== 1)
    return [];
  var r = e.ownerDocument.defaultView, n = r.getComputedStyle(e, null);
  return t ? n[t] : n;
}
function it(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function me(e) {
  if (!e)
    return document.body;
  switch (e.nodeName) {
    case "HTML":
    case "BODY":
      return e.ownerDocument.body;
    case "#document":
      return e.body;
  }
  var t = X(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /(auto|scroll|overlay)/.test(r + o + n) ? e : me(it(e));
}
function lr(e) {
  return e && e.referenceNode ? e.referenceNode : e;
}
var Ht = he && !!(window.MSInputMethodContext && document.documentMode), Wt = he && /MSIE 10/.test(navigator.userAgent);
function se(e) {
  return e === 11 ? Ht : e === 10 ? Wt : Ht || Wt;
}
function ee(e) {
  if (!e)
    return document.documentElement;
  for (var t = se(10) ? document.body : null, r = e.offsetParent || null; r === t && e.nextElementSibling; )
    r = (e = e.nextElementSibling).offsetParent;
  var n = r && r.nodeName;
  return !n || n === "BODY" || n === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(r.nodeName) !== -1 && X(r, "position") === "static" ? ee(r) : r;
}
function Fn(e) {
  var t = e.nodeName;
  return t === "BODY" ? !1 : t === "HTML" || ee(e.firstElementChild) === e;
}
function Ze(e) {
  return e.parentNode !== null ? Ze(e.parentNode) : e;
}
function Te(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType)
    return document.documentElement;
  var r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = r ? e : t, o = r ? t : e, s = document.createRange();
  s.setStart(n, 0), s.setEnd(o, 0);
  var i = s.commonAncestorContainer;
  if (e !== i && t !== i || n.contains(o))
    return Fn(i) ? i : ee(i);
  var l = Ze(e);
  return l.host ? Te(l.host, t) : Te(e, Ze(t).host);
}
function te(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", r = t === "top" ? "scrollTop" : "scrollLeft", n = e.nodeName;
  if (n === "BODY" || n === "HTML") {
    var o = e.ownerDocument.documentElement, s = e.ownerDocument.scrollingElement || o;
    return s[r];
  }
  return e[r];
}
function Mn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = te(t, "top"), o = te(t, "left"), s = r ? -1 : 1;
  return e.top += n * s, e.bottom += n * s, e.left += o * s, e.right += o * s, e;
}
function zt(e, t) {
  var r = t === "x" ? "Left" : "Top", n = r === "Left" ? "Right" : "Bottom";
  return parseFloat(e["border" + r + "Width"]) + parseFloat(e["border" + n + "Width"]);
}
function Vt(e, t, r, n) {
  return Math.max(t["offset" + e], t["scroll" + e], r["client" + e], r["offset" + e], r["scroll" + e], se(10) ? parseInt(r["offset" + e]) + parseInt(n["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(n["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function cr(e) {
  var t = e.body, r = e.documentElement, n = se(10) && getComputedStyle(r);
  return {
    height: Vt("Height", t, r, n),
    width: Vt("Width", t, r, n)
  };
}
var Bn = function(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}, In = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  };
}(), re = function(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}, I = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
};
function J(e) {
  return I({}, e, {
    right: e.left + e.width,
    bottom: e.top + e.height
  });
}
function Qe(e) {
  var t = {};
  try {
    if (se(10)) {
      t = e.getBoundingClientRect();
      var r = te(e, "top"), n = te(e, "left");
      t.top += r, t.left += n, t.bottom += r, t.right += n;
    } else
      t = e.getBoundingClientRect();
  } catch {
  }
  var o = {
    left: t.left,
    top: t.top,
    width: t.right - t.left,
    height: t.bottom - t.top
  }, s = e.nodeName === "HTML" ? cr(e.ownerDocument) : {}, i = s.width || e.clientWidth || o.width, l = s.height || e.clientHeight || o.height, u = e.offsetWidth - i, p = e.offsetHeight - l;
  if (u || p) {
    var f = X(e);
    u -= zt(f, "x"), p -= zt(f, "y"), o.width -= u, o.height -= p;
  }
  return J(o);
}
function at(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = se(10), o = t.nodeName === "HTML", s = Qe(e), i = Qe(t), l = me(e), u = X(t), p = parseFloat(u.borderTopWidth), f = parseFloat(u.borderLeftWidth);
  r && o && (i.top = Math.max(i.top, 0), i.left = Math.max(i.left, 0));
  var c = J({
    top: s.top - i.top - p,
    left: s.left - i.left - f,
    width: s.width,
    height: s.height
  });
  if (c.marginTop = 0, c.marginLeft = 0, !n && o) {
    var b = parseFloat(u.marginTop), w = parseFloat(u.marginLeft);
    c.top -= p - b, c.bottom -= p - b, c.left -= f - w, c.right -= f - w, c.marginTop = b, c.marginLeft = w;
  }
  return (n && !r ? t.contains(l) : t === l && l.nodeName !== "BODY") && (c = Mn(c, t)), c;
}
function Un(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.ownerDocument.documentElement, n = at(e, r), o = Math.max(r.clientWidth, window.innerWidth || 0), s = Math.max(r.clientHeight, window.innerHeight || 0), i = t ? 0 : te(r), l = t ? 0 : te(r, "left"), u = {
    top: i - n.top + n.marginTop,
    left: l - n.left + n.marginLeft,
    width: o,
    height: s
  };
  return J(u);
}
function ur(e) {
  var t = e.nodeName;
  if (t === "BODY" || t === "HTML")
    return !1;
  if (X(e, "position") === "fixed")
    return !0;
  var r = it(e);
  return r ? ur(r) : !1;
}
function fr(e) {
  if (!e || !e.parentElement || se())
    return document.documentElement;
  for (var t = e.parentElement; t && X(t, "transform") === "none"; )
    t = t.parentElement;
  return t || document.documentElement;
}
function lt(e, t, r, n) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, s = { top: 0, left: 0 }, i = o ? fr(e) : Te(e, lr(t));
  if (n === "viewport")
    s = Un(i, o);
  else {
    var l = void 0;
    n === "scrollParent" ? (l = me(it(t)), l.nodeName === "BODY" && (l = e.ownerDocument.documentElement)) : n === "window" ? l = e.ownerDocument.documentElement : l = n;
    var u = at(l, i, o);
    if (l.nodeName === "HTML" && !ur(i)) {
      var p = cr(e.ownerDocument), f = p.height, c = p.width;
      s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = c + u.left;
    } else
      s = u;
  }
  r = r || 0;
  var b = typeof r == "number";
  return s.left += b ? r : r.left || 0, s.top += b ? r : r.top || 0, s.right -= b ? r : r.right || 0, s.bottom -= b ? r : r.bottom || 0, s;
}
function $n(e) {
  var t = e.width, r = e.height;
  return t * r;
}
function dr(e, t, r, n, o) {
  var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (e.indexOf("auto") === -1)
    return e;
  var i = lt(r, n, s, o), l = {
    top: {
      width: i.width,
      height: t.top - i.top
    },
    right: {
      width: i.right - t.right,
      height: i.height
    },
    bottom: {
      width: i.width,
      height: i.bottom - t.bottom
    },
    left: {
      width: t.left - i.left,
      height: i.height
    }
  }, u = Object.keys(l).map(function(b) {
    return I({
      key: b
    }, l[b], {
      area: $n(l[b])
    });
  }).sort(function(b, w) {
    return w.area - b.area;
  }), p = u.filter(function(b) {
    var w = b.width, h = b.height;
    return w >= r.clientWidth && h >= r.clientHeight;
  }), f = p.length > 0 ? p[0].key : u[0].key, c = e.split("-")[1];
  return f + (c ? "-" + c : "");
}
function pr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, o = n ? fr(t) : Te(t, lr(r));
  return at(r, o, n);
}
function hr(e) {
  var t = e.ownerDocument.defaultView, r = t.getComputedStyle(e), n = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0), o = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0), s = {
    width: e.offsetWidth + o,
    height: e.offsetHeight + n
  };
  return s;
}
function Ne(e) {
  var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return e.replace(/left|right|bottom|top/g, function(r) {
    return t[r];
  });
}
function mr(e, t, r) {
  r = r.split("-")[0];
  var n = hr(e), o = {
    width: n.width,
    height: n.height
  }, s = ["right", "left"].indexOf(r) !== -1, i = s ? "top" : "left", l = s ? "left" : "top", u = s ? "height" : "width", p = s ? "width" : "height";
  return o[i] = t[i] + t[u] / 2 - n[u] / 2, r === l ? o[l] = t[l] - n[p] : o[l] = t[Ne(l)], o;
}
function ve(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function Hn(e, t, r) {
  if (Array.prototype.findIndex)
    return e.findIndex(function(o) {
      return o[t] === r;
    });
  var n = ve(e, function(o) {
    return o[t] === r;
  });
  return e.indexOf(n);
}
function vr(e, t, r) {
  var n = r === void 0 ? e : e.slice(0, Hn(e, "name", r));
  return n.forEach(function(o) {
    o.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var s = o.function || o.fn;
    o.enabled && ar(s) && (t.offsets.popper = J(t.offsets.popper), t.offsets.reference = J(t.offsets.reference), t = s(t, o));
  }), t;
}
function Wn() {
  if (!this.state.isDestroyed) {
    var e = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    e.offsets.reference = pr(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = dr(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = mr(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = vr(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
  }
}
function gr(e, t) {
  return e.some(function(r) {
    var n = r.name, o = r.enabled;
    return o && n === t;
  });
}
function ct(e) {
  for (var t = [!1, "ms", "Webkit", "Moz", "O"], r = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
    var o = t[n], s = o ? "" + o + r : e;
    if (typeof document.body.style[s] < "u")
      return s;
  }
  return null;
}
function zn() {
  return this.state.isDestroyed = !0, gr(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function wr(e) {
  var t = e.ownerDocument;
  return t ? t.defaultView : window;
}
function yr(e, t, r, n) {
  var o = e.nodeName === "BODY", s = o ? e.ownerDocument.defaultView : e;
  s.addEventListener(t, r, { passive: !0 }), o || yr(me(s.parentNode), t, r, n), n.push(s);
}
function Vn(e, t, r, n) {
  r.updateBound = n, wr(e).addEventListener("resize", r.updateBound, { passive: !0 });
  var o = me(e);
  return yr(o, "scroll", r.updateBound, r.scrollParents), r.scrollElement = o, r.eventsEnabled = !0, r;
}
function qn() {
  this.state.eventsEnabled || (this.state = Vn(this.reference, this.options, this.state, this.scheduleUpdate));
}
function Jn(e, t) {
  return wr(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(r) {
    r.removeEventListener("scroll", t.updateBound);
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function Yn() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Jn(this.reference, this.state));
}
function ut(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function et(e, t) {
  Object.keys(t).forEach(function(r) {
    var n = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(r) !== -1 && ut(t[r]) && (n = "px"), e.style[r] = t[r] + n;
  });
}
function Kn(e, t) {
  Object.keys(t).forEach(function(r) {
    var n = t[r];
    n !== !1 ? e.setAttribute(r, t[r]) : e.removeAttribute(r);
  });
}
function Gn(e) {
  return et(e.instance.popper, e.styles), Kn(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && et(e.arrowElement, e.arrowStyles), e;
}
function Xn(e, t, r, n, o) {
  var s = pr(o, t, e, r.positionFixed), i = dr(r.placement, s, t, e, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
  return t.setAttribute("x-placement", i), et(t, { position: r.positionFixed ? "fixed" : "absolute" }), r;
}
function Zn(e, t) {
  var r = e.offsets, n = r.popper, o = r.reference, s = Math.round, i = Math.floor, l = function(T) {
    return T;
  }, u = s(o.width), p = s(n.width), f = ["left", "right"].indexOf(e.placement) !== -1, c = e.placement.indexOf("-") !== -1, b = u % 2 === p % 2, w = u % 2 === 1 && p % 2 === 1, h = t ? f || c || b ? s : i : l, g = t ? s : l;
  return {
    left: h(w && !c && t ? n.left - 1 : n.left),
    top: g(n.top),
    bottom: g(n.bottom),
    right: h(n.right)
  };
}
var Qn = he && /Firefox/i.test(navigator.userAgent);
function es(e, t) {
  var r = t.x, n = t.y, o = e.offsets.popper, s = ve(e.instance.modifiers, function(L) {
    return L.name === "applyStyle";
  }).gpuAcceleration;
  s !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var i = s !== void 0 ? s : t.gpuAcceleration, l = ee(e.instance.popper), u = Qe(l), p = {
    position: o.position
  }, f = Zn(e, window.devicePixelRatio < 2 || !Qn), c = r === "bottom" ? "top" : "bottom", b = n === "right" ? "left" : "right", w = ct("transform"), h = void 0, g = void 0;
  if (c === "bottom" ? l.nodeName === "HTML" ? g = -l.clientHeight + f.bottom : g = -u.height + f.bottom : g = f.top, b === "right" ? l.nodeName === "HTML" ? h = -l.clientWidth + f.right : h = -u.width + f.right : h = f.left, i && w)
    p[w] = "translate3d(" + h + "px, " + g + "px, 0)", p[c] = 0, p[b] = 0, p.willChange = "transform";
  else {
    var R = c === "bottom" ? -1 : 1, T = b === "right" ? -1 : 1;
    p[c] = g * R, p[b] = h * T, p.willChange = c + ", " + b;
  }
  var E = {
    "x-placement": e.placement
  };
  return e.attributes = I({}, E, e.attributes), e.styles = I({}, p, e.styles), e.arrowStyles = I({}, e.offsets.arrow, e.arrowStyles), e;
}
function br(e, t, r) {
  var n = ve(e, function(l) {
    var u = l.name;
    return u === t;
  }), o = !!n && e.some(function(l) {
    return l.name === r && l.enabled && l.order < n.order;
  });
  if (!o) {
    var s = "`" + t + "`", i = "`" + r + "`";
    console.warn(i + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!");
  }
  return o;
}
function ts(e, t) {
  var r;
  if (!br(e.instance.modifiers, "arrow", "keepTogether"))
    return e;
  var n = t.element;
  if (typeof n == "string") {
    if (n = e.instance.popper.querySelector(n), !n)
      return e;
  } else if (!e.instance.popper.contains(n))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
  var o = e.placement.split("-")[0], s = e.offsets, i = s.popper, l = s.reference, u = ["left", "right"].indexOf(o) !== -1, p = u ? "height" : "width", f = u ? "Top" : "Left", c = f.toLowerCase(), b = u ? "left" : "top", w = u ? "bottom" : "right", h = hr(n)[p];
  l[w] - h < i[c] && (e.offsets.popper[c] -= i[c] - (l[w] - h)), l[c] + h > i[w] && (e.offsets.popper[c] += l[c] + h - i[w]), e.offsets.popper = J(e.offsets.popper);
  var g = l[c] + l[p] / 2 - h / 2, R = X(e.instance.popper), T = parseFloat(R["margin" + f]), E = parseFloat(R["border" + f + "Width"]), L = g - e.offsets.popper[c] - T - E;
  return L = Math.max(Math.min(i[p] - h, L), 0), e.arrowElement = n, e.offsets.arrow = (r = {}, re(r, c, Math.round(L)), re(r, b, ""), r), e;
}
function rs(e) {
  return e === "end" ? "start" : e === "start" ? "end" : e;
}
var xr = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ve = xr.slice(3);
function qt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Ve.indexOf(e), n = Ve.slice(r + 1).concat(Ve.slice(0, r));
  return t ? n.reverse() : n;
}
var qe = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function ns(e, t) {
  if (gr(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
    return e;
  var r = lt(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split("-")[0], o = Ne(n), s = e.placement.split("-")[1] || "", i = [];
  switch (t.behavior) {
    case qe.FLIP:
      i = [n, o];
      break;
    case qe.CLOCKWISE:
      i = qt(n);
      break;
    case qe.COUNTERCLOCKWISE:
      i = qt(n, !0);
      break;
    default:
      i = t.behavior;
  }
  return i.forEach(function(l, u) {
    if (n !== l || i.length === u + 1)
      return e;
    n = e.placement.split("-")[0], o = Ne(n);
    var p = e.offsets.popper, f = e.offsets.reference, c = Math.floor, b = n === "left" && c(p.right) > c(f.left) || n === "right" && c(p.left) < c(f.right) || n === "top" && c(p.bottom) > c(f.top) || n === "bottom" && c(p.top) < c(f.bottom), w = c(p.left) < c(r.left), h = c(p.right) > c(r.right), g = c(p.top) < c(r.top), R = c(p.bottom) > c(r.bottom), T = n === "left" && w || n === "right" && h || n === "top" && g || n === "bottom" && R, E = ["top", "bottom"].indexOf(n) !== -1, L = !!t.flipVariations && (E && s === "start" && w || E && s === "end" && h || !E && s === "start" && g || !E && s === "end" && R), ie = !!t.flipVariationsByContent && (E && s === "start" && h || E && s === "end" && w || !E && s === "start" && R || !E && s === "end" && g), be = L || ie;
    (b || T || be) && (e.flipped = !0, (b || T) && (n = i[u + 1]), be && (s = rs(s)), e.placement = n + (s ? "-" + s : ""), e.offsets.popper = I({}, e.offsets.popper, mr(e.instance.popper, e.offsets.reference, e.placement)), e = vr(e.instance.modifiers, e, "flip"));
  }), e;
}
function ss(e) {
  var t = e.offsets, r = t.popper, n = t.reference, o = e.placement.split("-")[0], s = Math.floor, i = ["top", "bottom"].indexOf(o) !== -1, l = i ? "right" : "bottom", u = i ? "left" : "top", p = i ? "width" : "height";
  return r[l] < s(n[u]) && (e.offsets.popper[u] = s(n[u]) - r[p]), r[u] > s(n[l]) && (e.offsets.popper[u] = s(n[l])), e;
}
function os(e, t, r, n) {
  var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), s = +o[1], i = o[2];
  if (!s)
    return e;
  if (i.indexOf("%") === 0) {
    var l = void 0;
    switch (i) {
      case "%p":
        l = r;
        break;
      case "%":
      case "%r":
      default:
        l = n;
    }
    var u = J(l);
    return u[t] / 100 * s;
  } else if (i === "vh" || i === "vw") {
    var p = void 0;
    return i === "vh" ? p = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : p = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), p / 100 * s;
  } else
    return s;
}
function is(e, t, r, n) {
  var o = [0, 0], s = ["right", "left"].indexOf(n) !== -1, i = e.split(/(\+|\-)/).map(function(f) {
    return f.trim();
  }), l = i.indexOf(ve(i, function(f) {
    return f.search(/,|\s/) !== -1;
  }));
  i[l] && i[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var u = /\s*,\s*|\s+/, p = l !== -1 ? [i.slice(0, l).concat([i[l].split(u)[0]]), [i[l].split(u)[1]].concat(i.slice(l + 1))] : [i];
  return p = p.map(function(f, c) {
    var b = (c === 1 ? !s : s) ? "height" : "width", w = !1;
    return f.reduce(function(h, g) {
      return h[h.length - 1] === "" && ["+", "-"].indexOf(g) !== -1 ? (h[h.length - 1] = g, w = !0, h) : w ? (h[h.length - 1] += g, w = !1, h) : h.concat(g);
    }, []).map(function(h) {
      return os(h, b, t, r);
    });
  }), p.forEach(function(f, c) {
    f.forEach(function(b, w) {
      ut(b) && (o[c] += b * (f[w - 1] === "-" ? -1 : 1));
    });
  }), o;
}
function as(e, t) {
  var r = t.offset, n = e.placement, o = e.offsets, s = o.popper, i = o.reference, l = n.split("-")[0], u = void 0;
  return ut(+r) ? u = [+r, 0] : u = is(r, s, i, l), l === "left" ? (s.top += u[0], s.left -= u[1]) : l === "right" ? (s.top += u[0], s.left += u[1]) : l === "top" ? (s.left += u[0], s.top -= u[1]) : l === "bottom" && (s.left += u[0], s.top += u[1]), e.popper = s, e;
}
function ls(e, t) {
  var r = t.boundariesElement || ee(e.instance.popper);
  e.instance.reference === r && (r = ee(r));
  var n = ct("transform"), o = e.instance.popper.style, s = o.top, i = o.left, l = o[n];
  o.top = "", o.left = "", o[n] = "";
  var u = lt(e.instance.popper, e.instance.reference, t.padding, r, e.positionFixed);
  o.top = s, o.left = i, o[n] = l, t.boundaries = u;
  var p = t.priority, f = e.offsets.popper, c = {
    primary: function(w) {
      var h = f[w];
      return f[w] < u[w] && !t.escapeWithReference && (h = Math.max(f[w], u[w])), re({}, w, h);
    },
    secondary: function(w) {
      var h = w === "right" ? "left" : "top", g = f[h];
      return f[w] > u[w] && !t.escapeWithReference && (g = Math.min(f[h], u[w] - (w === "right" ? f.width : f.height))), re({}, h, g);
    }
  };
  return p.forEach(function(b) {
    var w = ["left", "top"].indexOf(b) !== -1 ? "primary" : "secondary";
    f = I({}, f, c[w](b));
  }), e.offsets.popper = f, e;
}
function cs(e) {
  var t = e.placement, r = t.split("-")[0], n = t.split("-")[1];
  if (n) {
    var o = e.offsets, s = o.reference, i = o.popper, l = ["bottom", "top"].indexOf(r) !== -1, u = l ? "left" : "top", p = l ? "width" : "height", f = {
      start: re({}, u, s[u]),
      end: re({}, u, s[u] + s[p] - i[p])
    };
    e.offsets.popper = I({}, i, f[n]);
  }
  return e;
}
function us(e) {
  if (!br(e.instance.modifiers, "hide", "preventOverflow"))
    return e;
  var t = e.offsets.reference, r = ve(e.instance.modifiers, function(n) {
    return n.name === "preventOverflow";
  }).boundaries;
  if (t.bottom < r.top || t.left > r.right || t.top > r.bottom || t.right < r.left) {
    if (e.hide === !0)
      return e;
    e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
  } else {
    if (e.hide === !1)
      return e;
    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
  }
  return e;
}
function fs(e) {
  var t = e.placement, r = t.split("-")[0], n = e.offsets, o = n.popper, s = n.reference, i = ["left", "right"].indexOf(r) !== -1, l = ["top", "left"].indexOf(r) === -1;
  return o[i ? "left" : "top"] = s[r] - (l ? o[i ? "width" : "height"] : 0), e.placement = Ne(t), e.offsets.popper = J(o), e;
}
var ds = {
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
    fn: cs
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
    fn: as,
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
    fn: ls,
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
    fn: ss
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
    fn: ts,
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
    fn: ns,
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
    fn: fs
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
    fn: us
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
    fn: es,
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
    fn: Gn,
    /** @prop {Function} */
    onLoad: Xn,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, ps = {
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
  modifiers: ds
}, Pe = function() {
  function e(t, r) {
    var n = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Bn(this, e), this.scheduleUpdate = function() {
      return requestAnimationFrame(n.update);
    }, this.update = Ln(this.update.bind(this)), this.options = I({}, e.Defaults, o), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = t && t.jquery ? t[0] : t, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(I({}, e.Defaults.modifiers, o.modifiers)).forEach(function(i) {
      n.options.modifiers[i] = I({}, e.Defaults.modifiers[i] || {}, o.modifiers ? o.modifiers[i] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(i) {
      return I({
        name: i
      }, n.options.modifiers[i]);
    }).sort(function(i, l) {
      return i.order - l.order;
    }), this.modifiers.forEach(function(i) {
      i.enabled && ar(i.onLoad) && i.onLoad(n.reference, n.popper, n.options, i, n.state);
    }), this.update();
    var s = this.options.eventsEnabled;
    s && this.enableEventListeners(), this.state.eventsEnabled = s;
  }
  return In(e, [{
    key: "update",
    value: function() {
      return Wn.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return zn.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return qn.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return Yn.call(this);
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
  }]), e;
}();
Pe.Utils = (typeof window < "u" ? window : global).PopperUtils;
Pe.placements = xr;
Pe.Defaults = ps;
function Er(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: hs } = Object.prototype, { getPrototypeOf: ft } = Object, De = /* @__PURE__ */ ((e) => (t) => {
  const r = hs.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), z = (e) => (e = e.toLowerCase(), (t) => De(t) === e), Ae = (e) => (t) => typeof t === e, { isArray: oe } = Array, pe = Ae("undefined");
function ms(e) {
  return e !== null && !pe(e) && e.constructor !== null && !pe(e.constructor) && U(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Sr = z("ArrayBuffer");
function vs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Sr(e.buffer), t;
}
const gs = Ae("string"), U = Ae("function"), Rr = Ae("number"), _e = (e) => e !== null && typeof e == "object", ws = (e) => e === !0 || e === !1, Ce = (e) => {
  if (De(e) !== "object")
    return !1;
  const t = ft(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ys = z("Date"), bs = z("File"), xs = z("Blob"), Es = z("FileList"), Ss = (e) => _e(e) && U(e.pipe), Rs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || U(e.append) && ((t = De(e)) === "formdata" || // detect form-data instance
  t === "object" && U(e.toString) && e.toString() === "[object FormData]"));
}, Cs = z("URLSearchParams"), Os = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ge(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), oe(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (n = 0; n < i; n++)
      l = s[n], t.call(null, e[l], l, e);
  }
}
function Cr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Or = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Tr = (e) => !pe(e) && e !== Or;
function tt() {
  const { caseless: e } = Tr(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Cr(t, o) || o;
    Ce(t[s]) && Ce(n) ? t[s] = tt(t[s], n) : Ce(n) ? t[s] = tt({}, n) : oe(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ge(arguments[n], r);
  return t;
}
const Ts = (e, t, r, { allOwnKeys: n } = {}) => (ge(t, (o, s) => {
  r && U(o) ? e[s] = Er(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), Ns = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ps = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ds = (e, t, r, n) => {
  let o, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!n || n(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = r !== !1 && ft(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, As = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, _s = (e) => {
  if (!e)
    return null;
  if (oe(e))
    return e;
  let t = e.length;
  if (!Rr(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, js = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ft(Uint8Array)), ks = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Ls = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Fs = z("HTMLFormElement"), Ms = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Jt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Bs = z("RegExp"), Nr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ge(r, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (n[s] = i || o);
  }), Object.defineProperties(e, n);
}, Is = (e) => {
  Nr(e, (t, r) => {
    if (U(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (U(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Us = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return oe(e) ? n(e) : n(String(e).split(t)), r;
}, $s = () => {
}, Hs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Je = "abcdefghijklmnopqrstuvwxyz", Yt = "0123456789", Pr = {
  DIGIT: Yt,
  ALPHA: Je,
  ALPHA_DIGIT: Je + Je.toUpperCase() + Yt
}, Ws = (e = 16, t = Pr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function zs(e) {
  return !!(e && U(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Vs = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (_e(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = oe(n) ? [] : {};
        return ge(n, (i, l) => {
          const u = r(i, o + 1);
          !pe(u) && (s[l] = u);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, qs = z("AsyncFunction"), Js = (e) => e && (_e(e) || U(e)) && U(e.then) && U(e.catch), d = {
  isArray: oe,
  isArrayBuffer: Sr,
  isBuffer: ms,
  isFormData: Rs,
  isArrayBufferView: vs,
  isString: gs,
  isNumber: Rr,
  isBoolean: ws,
  isObject: _e,
  isPlainObject: Ce,
  isUndefined: pe,
  isDate: ys,
  isFile: bs,
  isBlob: xs,
  isRegExp: Bs,
  isFunction: U,
  isStream: Ss,
  isURLSearchParams: Cs,
  isTypedArray: js,
  isFileList: Es,
  forEach: ge,
  merge: tt,
  extend: Ts,
  trim: Os,
  stripBOM: Ns,
  inherits: Ps,
  toFlatObject: Ds,
  kindOf: De,
  kindOfTest: z,
  endsWith: As,
  toArray: _s,
  forEachEntry: ks,
  matchAll: Ls,
  isHTMLForm: Fs,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Nr,
  freezeMethods: Is,
  toObjectSet: Us,
  toCamelCase: Ms,
  noop: $s,
  toFiniteNumber: Hs,
  findKey: Cr,
  global: Or,
  isContextDefined: Tr,
  ALPHABET: Pr,
  generateString: Ws,
  isSpecCompliantForm: zs,
  toJSONObject: Vs,
  isAsyncFn: qs,
  isThenable: Js
};
function O(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
d.inherits(O, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Dr = O.prototype, Ar = {};
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
  Ar[e] = { value: e };
});
Object.defineProperties(O, Ar);
Object.defineProperty(Dr, "isAxiosError", { value: !0 });
O.from = (e, t, r, n, o, s) => {
  const i = Object.create(Dr);
  return d.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError"), O.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Ys = null;
function rt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function _r(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kt(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = _r(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function Ks(e) {
  return d.isArray(e) && !e.some(rt);
}
const Gs = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function je(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, R) {
    return !d.isUndefined(R[g]);
  });
  const n = r.metaTokens, o = r.visitor || f, s = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function p(h) {
    if (h === null)
      return "";
    if (d.isDate(h))
      return h.toISOString();
    if (!u && d.isBlob(h))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(h) || d.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, g, R) {
    let T = h;
    if (h && !R && typeof h == "object") {
      if (d.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), h = JSON.stringify(h);
      else if (d.isArray(h) && Ks(h) || (d.isFileList(h) || d.endsWith(g, "[]")) && (T = d.toArray(h)))
        return g = _r(g), T.forEach(function(L, ie) {
          !(d.isUndefined(L) || L === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Kt([g], ie, s) : i === null ? g : g + "[]",
            p(L)
          );
        }), !1;
    }
    return rt(h) ? !0 : (t.append(Kt(R, g, s), p(h)), !1);
  }
  const c = [], b = Object.assign(Gs, {
    defaultVisitor: f,
    convertValue: p,
    isVisitable: rt
  });
  function w(h, g) {
    if (!d.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(h), d.forEach(h, function(T, E) {
        (!(d.isUndefined(T) || T === null) && o.call(
          t,
          T,
          d.isString(E) ? E.trim() : E,
          g,
          b
        )) === !0 && w(T, g ? g.concat(E) : [E]);
      }), c.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Gt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function dt(e, t) {
  this._pairs = [], e && je(e, this, t);
}
const jr = dt.prototype;
jr.append = function(t, r) {
  this._pairs.push([t, r]);
};
jr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Gt);
  } : Gt;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function Xs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function kr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Xs, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = d.isURLSearchParams(t) ? t.toString() : new dt(t, r).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Xt {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Lr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Zs = typeof URLSearchParams < "u" ? URLSearchParams : dt, Qs = typeof FormData < "u" ? FormData : null, eo = typeof Blob < "u" ? Blob : null, to = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Zs,
    FormData: Qs,
    Blob: eo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fr = typeof window < "u" && typeof document < "u", ro = ((e) => Fr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), no = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fr,
  hasStandardBrowserEnv: ro,
  hasStandardBrowserWebWorkerEnv: no
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...so,
  ...to
};
function oo(e, t) {
  return je(e, new W.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return W.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function io(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ao(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function Mr(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), u = s >= r.length;
    return i = !i && d.isArray(o) ? o.length : i, u ? (d.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !l) : ((!o[i] || !d.isObject(o[i])) && (o[i] = []), t(r, n, o[i], s) && d.isArray(o[i]) && (o[i] = ao(o[i])), !l);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, o) => {
      t(io(n), o, r, 0);
    }), r;
  }
  return null;
}
function lo(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const we = {
  transitional: Lr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return o ? JSON.stringify(Mr(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return oo(t, this.formSerializer).toString();
      if ((l = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return je(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), lo(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || we.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && d.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? O.from(l, O.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
    FormData: W.classes.FormData,
    Blob: W.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  we.headers[e] = {};
});
const co = d.toObjectSet([
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
]), uo = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && co[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Zt = Symbol("internals");
function de(e) {
  return e && String(e).trim().toLowerCase();
}
function Oe(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Oe) : String(e);
}
function fo(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const po = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ye(e, t, r, n, o) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function ho(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function mo(e, t) {
  const r = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class $ {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(l, u, p) {
      const f = de(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const c = d.findKey(o, f);
      (!c || o[c] === void 0 || p === !0 || p === void 0 && o[c] !== !1) && (o[c || u] = Oe(l));
    }
    const i = (l, u) => d.forEach(l, (p, f) => s(p, f, u));
    return d.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : d.isString(t) && (t = t.trim()) && !po(t) ? i(uo(t), r) : t != null && s(r, t, n), this;
  }
  get(t, r) {
    if (t = de(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return fo(o);
        if (d.isFunction(r))
          return r.call(this, o, n);
        if (d.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = de(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ye(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(i) {
      if (i = de(i), i) {
        const l = d.findKey(n, i);
        l && (!r || Ye(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || Ye(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (o, s) => {
      const i = d.findKey(n, s);
      if (i) {
        r[i] = Oe(o), delete r[s];
        return;
      }
      const l = t ? ho(s) : String(s).trim();
      l !== s && delete r[s], r[l] = Oe(o), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && d.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Zt] = this[Zt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const l = de(i);
      n[l] || (mo(o, i), n[l] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods($);
function Ke(e, t) {
  const r = this || we, n = t || r, o = $.from(n.headers);
  let s = n.data;
  return d.forEach(e, function(l) {
    s = l.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Br(e) {
  return !!(e && e.__CANCEL__);
}
function ye(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(ye, O, {
  __CANCEL__: !0
});
function vo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const go = W.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      d.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), d.isString(n) && i.push("path=" + n), d.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
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
function wo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ir(e, t) {
  return e && !wo(t) ? yo(e, t) : t;
}
const bo = W.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(i) {
      const l = d.isString(i) ? o(i) : i;
      return l.protocol === n.protocol && l.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function xo(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Eo(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const p = Date.now(), f = n[s];
    i || (i = p), r[o] = u, n[o] = p;
    let c = s, b = 0;
    for (; c !== o; )
      b += r[c++], c = c % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), p - i < t)
      return;
    const w = f && p - f;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function Qt(e, t) {
  let r = 0;
  const n = Eo(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, l = s - r, u = n(l), p = s <= i;
    r = s;
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && i && p ? (i - s) / u : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const So = typeof XMLHttpRequest < "u", Ro = So && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const s = $.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: l } = e, u;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let f;
    if (d.isFormData(o)) {
      if (W.hasStandardBrowserEnv || W.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((f = s.getContentType()) !== !1) {
        const [g, ...R] = f ? f.split(";").map((T) => T.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...R].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", R = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + R));
    }
    const b = Ir(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), kr(b, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function w() {
      if (!c)
        return;
      const g = $.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), T = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      vo(function(L) {
        r(L), p();
      }, function(L) {
        n(L), p();
      }, T), c = null;
    }
    if ("onloadend" in c ? c.onloadend = w : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, c.onabort = function() {
      c && (n(new O("Request aborted", O.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let R = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Lr;
      e.timeoutErrorMessage && (R = e.timeoutErrorMessage), n(new O(
        R,
        T.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        c
      )), c = null;
    }, W.hasStandardBrowserEnv && (l && d.isFunction(l) && (l = l(e)), l || l !== !1 && bo(b))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && go.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && d.forEach(s.toJSON(), function(R, T) {
      c.setRequestHeader(T, R);
    }), d.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Qt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Qt(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (g) => {
      c && (n(!g || g.type ? new ye(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const h = xo(b);
    if (h && W.protocols.indexOf(h) === -1) {
      n(new O("Unsupported protocol " + h + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, nt = {
  http: Ys,
  xhr: Ro
};
d.forEach(nt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const er = (e) => `- ${e}`, Co = (e) => d.isFunction(e) || e === null || e === !1, Ur = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let i;
      if (n = r, !Co(r) && (n = nt[(i = String(r)).toLowerCase()], n === void 0))
        throw new O(`Unknown adapter '${i}'`);
      if (n)
        break;
      o[i || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(o).map(
        ([l, u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(er).join(`
`) : " " + er(s[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: nt
};
function Ge(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ye(null, e);
}
function tr(e) {
  return Ge(e), e.headers = $.from(e.headers), e.data = Ke.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ur.getAdapter(e.adapter || we.adapter)(e).then(function(n) {
    return Ge(e), n.data = Ke.call(
      e,
      e.transformResponse,
      n
    ), n.headers = $.from(n.headers), n;
  }, function(n) {
    return Br(n) || (Ge(e), n && n.response && (n.response.data = Ke.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = $.from(n.response.headers))), Promise.reject(n);
  });
}
const rr = (e) => e instanceof $ ? { ...e } : e;
function ne(e, t) {
  t = t || {};
  const r = {};
  function n(p, f, c) {
    return d.isPlainObject(p) && d.isPlainObject(f) ? d.merge.call({ caseless: c }, p, f) : d.isPlainObject(f) ? d.merge({}, f) : d.isArray(f) ? f.slice() : f;
  }
  function o(p, f, c) {
    if (d.isUndefined(f)) {
      if (!d.isUndefined(p))
        return n(void 0, p, c);
    } else
      return n(p, f, c);
  }
  function s(p, f) {
    if (!d.isUndefined(f))
      return n(void 0, f);
  }
  function i(p, f) {
    if (d.isUndefined(f)) {
      if (!d.isUndefined(p))
        return n(void 0, p);
    } else
      return n(void 0, f);
  }
  function l(p, f, c) {
    if (c in t)
      return n(p, f);
    if (c in e)
      return n(void 0, p);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (p, f) => o(rr(p), rr(f), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const c = u[f] || o, b = c(e[f], t[f], f);
    d.isUndefined(b) && c !== l || (r[f] = b);
  }), r;
}
const $r = "1.6.8", pt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nr = {};
pt.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + $r + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new O(
        o(i, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !nr[i] && (nr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function Oo(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], i = t[s];
    if (i) {
      const l = e[s], u = l === void 0 || i(l, s, e);
      if (u !== !0)
        throw new O("option " + s + " must be " + u, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const st = {
  assertOptions: Oo,
  validators: pt
}, V = st.validators;
class G {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Xt(),
      response: new Xt()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ne(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && st.assertOptions(n, {
      silentJSONParsing: V.transitional(V.boolean),
      forcedJSONParsing: V.transitional(V.boolean),
      clarifyTimeoutError: V.transitional(V.boolean)
    }, !1), o != null && (d.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : st.assertOptions(o, {
      encode: V.function,
      serialize: V.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && d.merge(
      s.common,
      s[r.method]
    );
    s && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), r.headers = $.concat(i, s);
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (u = u && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(g) {
      p.push(g.fulfilled, g.rejected);
    });
    let f, c = 0, b;
    if (!u) {
      const h = [tr.bind(this), void 0];
      for (h.unshift.apply(h, l), h.push.apply(h, p), b = h.length, f = Promise.resolve(r); c < b; )
        f = f.then(h[c++], h[c++]);
      return f;
    }
    b = l.length;
    let w = r;
    for (c = 0; c < b; ) {
      const h = l[c++], g = l[c++];
      try {
        w = h(w);
      } catch (R) {
        g.call(this, R);
        break;
      }
    }
    try {
      f = tr.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, b = p.length; c < b; )
      f = f.then(p[c++], p[c++]);
    return f;
  }
  getUri(t) {
    t = ne(this.defaults, t);
    const r = Ir(t.baseURL, t.url);
    return kr(r, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  G.prototype[t] = function(r, n) {
    return this.request(ne(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, i, l) {
      return this.request(ne(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  G.prototype[t] = r(), G.prototype[t + "Form"] = r(!0);
});
class ht {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((l) => {
        n.subscribe(l), s = l;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, l) {
      n.reason || (n.reason = new ye(s, i, l), r(n.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ht(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function To(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function No(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const ot = {
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
Object.entries(ot).forEach(([e, t]) => {
  ot[t] = e;
});
function Hr(e) {
  const t = new G(e), r = Er(G.prototype.request, t);
  return d.extend(r, G.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Hr(ne(e, o));
  }, r;
}
const k = Hr(we);
k.Axios = G;
k.CanceledError = ye;
k.CancelToken = ht;
k.isCancel = Br;
k.VERSION = $r;
k.toFormData = je;
k.AxiosError = O;
k.Cancel = k.CanceledError;
k.all = function(t) {
  return Promise.all(t);
};
k.spread = To;
k.isAxiosError = No;
k.mergeConfig = ne;
k.AxiosHeaders = $;
k.formToJSON = (e) => Mr(d.isHTMLForm(e) ? new FormData(e) : e);
k.getAdapter = Ur.getAdapter;
k.HttpStatusCode = ot;
k.default = k;
class Po {
  constructor() {
    P(this, "authenticated");
    this.authenticated = this.hasSession();
  }
  logout() {
    localStorage.removeItem("access_token"), this.authenticated = !1;
  }
  logoutApplication() {
    localStorage.removeItem("a_token"), localStorage.removeItem("app_req");
  }
  getSession() {
    return localStorage.getItem("access_token");
  }
  getApplicantSession() {
    return localStorage.getItem("a_token");
  }
  getAccount() {
    return localStorage.getItem("account_req");
  }
  isDebug() {
    var t;
    return ((t = localStorage.getItem("access_d")) == null ? void 0 : t.toLowerCase()) === "true";
  }
  getSessionItem(t) {
    return localStorage.getItem(t);
  }
  removeLocalData(t) {
    localStorage.removeItem(t);
  }
  saveSession(t, r) {
    localStorage.setItem(t, r);
  }
  getLocalData(t) {
    return localStorage.getItem(t);
  }
  getAccountInfo() {
  }
  hasSession() {
    return this.getSession() !== null;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  getCookie(t) {
    let r = null;
    if (document.cookie && document.cookie !== "") {
      const n = document.cookie.split(";");
      for (let o = 0; o < n.length; o++) {
        const s = n[o].trim();
        if (s.substring(0, t.length + 1) === t + "=") {
          r = decodeURIComponent(s.substring(t.length + 1));
          break;
        }
      }
    }
    return r;
  }
  fetchAccount(t) {
    t();
  }
}
const sr = new Po();
class ko extends Cn {
  constructor(r) {
    super(r);
    P(this, "popoverDropdownRef");
    P(this, "btnDropdownRef");
    P(this, "searchRef");
    P(this, "handleChange", (r) => {
      const n = { ...this.state.input };
      n[r.target.name] = r.target.value, this.setState({
        input: n
      });
    });
    P(this, "handleRequestData", () => {
      const r = this.props.request;
      if (r !== void 0 && !A.isEmptyOrNull(r.url) && this.state.requestUrl !== r.url) {
        this.setState({ requestUrl: r.url, isLoading: !0 }, this.fetch);
        return;
      }
    });
    P(this, "handleSelectedMultiple", async (r) => {
      const { data: n } = this.props;
      return n ? r.map((s) => s.id !== void 0 ? s : s.id === void 0 ? void 0 : s.find((l) => l.id === this.handleEncrypt(s))).filter((s) => s !== void 0) : [];
    });
    P(this, "handleDefault", async () => {
      try {
        const r = this.props.data !== void 0 && this.props.data !== null ? this.props.data : this.state.datalist;
        if (r.length > 0 && this.props.defaultValue !== void 0 && this.props.defaultValue !== null)
          if (!(this.props.is_multiple === void 0 || this.props.is_multiple === !1)) {
            const o = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue], s = r.filter(
              (i) => o.some((l) => (l == null ? void 0 : l.id) === i.id || A.toString(l) === A.toString(i.id))
            );
            s !== void 0 && this.props.handleChange !== void 0 && this.setState({ selectedMultiple: s, hasLoaded: !0 }, () => {
              this.props.handleChange !== void 0 && this.props.handleChange(s);
            });
          } else {
            const o = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue, s = r.find((i) => {
              if (typeof o == "object" && o !== null) {
                if (A.toString(i.id).toLowerCase() === A.toString(o == null ? void 0 : o.id).toLowerCase())
                  return i;
              } else if (A.toString(i.id).toLowerCase() === A.toString(o).toLowerCase() || A.toString(i.name).toLowerCase() === A.toString(o).toLowerCase())
                return i;
            });
            if (s !== void 0 && this.props.handleChange !== void 0) {
              const i = this.handleEncrypt(s == null ? void 0 : s.id), l = {
                selectedList: {
                  id: A.isEmptyOrNull(i) ? s == null ? void 0 : s.id : i,
                  name: s == null ? void 0 : s.name,
                  icon: s == null ? void 0 : s.icon,
                  data: s == null ? void 0 : s.data
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
    P(this, "handleEncrypt", (r) => {
      if (this.props.enableDecrypt) {
        const n = A.toString(r);
        return A.isEmptyOrNull(n) ? r : n;
      } else
        return r;
    });
    P(this, "handleDelayedProcess", () => {
      setTimeout(() => {
        this.handleProcess();
      }, 1e3);
    });
    P(this, "handleProcess", () => {
      this.handleDefault();
    });
    P(this, "fetch", async () => {
      const { request: r } = this.props, { error: n } = this.state, o = (r == null ? void 0 : r.token) ?? sr.getSession();
      n.state = !1, this.setState({ isLoading: !0, error: n });
      try {
        const i = (await k.get((r == null ? void 0 : r.url) ?? "", {
          headers: {
            "X-CSRFToken": `${sr.getCookie("csrftoken")}`,
            Authorization: `Token ${o}`
          }
        })).data;
        if (i.success) {
          const l = i.data;
          this.setState({ datalist: l, isLoading: !1 }, this.handleDelayedProcess);
        } else
          this.handleError(i.message);
      } catch {
        this.handleError();
      }
    });
    P(this, "handleError", (r = "") => {
      try {
        const { error: n } = this.state, o = {
          ...n,
          state: !0,
          message: r
        };
        this.setState({ isLoading: !1, error: o });
      } catch (n) {
        console.error("Error occurred while handling error:", n);
      }
    });
    P(this, "onClear", () => {
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
    P(this, "openDropdownPopover", () => {
      this.props.disabled !== void 0 && this.props.disabled || (new Pe(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
        placement: "bottom-start"
      }), this.setState({ dropdownPopoverShow: !0 }, () => {
        this.searchRef.current && this.searchRef.current.focus();
      }));
    });
    P(this, "removeItem", (r, n, o) => {
      if (o === void 0)
        return r;
      for (let s = 0; s < r.length; s++)
        if (r[s][n] === o) {
          r.splice(s, 1);
          break;
        }
      return r;
    });
    P(this, "handleSearch", (r, n) => {
      try {
        return r.find((o) => o.id === n);
      } catch {
        return !1;
      }
    });
    P(this, "handleSelectMessage", (r) => {
      try {
        return r == null ? "" : r.map((n) => this.handleEncrypt(n.name)).join(", ");
      } catch {
        return "";
      }
    });
    P(this, "deleteItems", (r) => this.state.selectedMultiple.filter((o) => o.id !== r));
    P(this, "handleSelectedItem", (r, n) => {
      r.preventDefault();
      const o = !(this.props.is_multiple === void 0 || this.props.is_multiple === !1);
      let { selectedMultiple: s } = this.state;
      o ? this.state.selectedMultiple.find((l) => l.id === n.id) ? (s = this.deleteItems(n.id), this.setState({ selectedMultiple: s, clear: !1 }), this.props.handleChange && this.props.handleChange(s)) : (s.push(n), this.setState({ selectedMultiple: s, clear: !1 }), this.props.handleChange && this.props.handleChange(s)) : this.setState({ selectedList: n, clear: !1 }), this.props.handleDropdownChange !== void 0 ? this.props.handleDropdownChange(o ? s : n, this.props.type) : this.props.handleChange !== void 0 && this.props.handleChange(o ? s : n), o || this.closeDropdownPopover(), this.handleClearSearch();
    });
    P(this, "handleClearSearch", () => {
      const { input: r } = this.state;
      r.search = "", this.setState({ input: r });
    });
    P(this, "handleClickAway", () => {
      this.closeDropdownPopover();
    });
    P(this, "handleClearSelected", () => {
      const r = this.props.is_multiple !== void 0 && this.props.is_multiple ? [] : {};
      this.setState({ selectedMultiple: [], selectedList: { id: "", name: null, icon: null, data: null }, clear: !0 }, this.handleClickAway), this.props.handleChange && this.props.handleChange(r);
    });
    P(this, "closeDropdownPopover", () => {
      this.setState({ dropdownPopoverShow: !1 });
    });
    this.popoverDropdownRef = q.createRef(), this.btnDropdownRef = q.createRef(), this.searchRef = q.createRef(), this.state = {
      dropdownPopoverShow: !1,
      selectedList: { id: "", name: null, icon: null, data: null },
      selectedMultiple: [],
      datalist: [],
      intervalId: 0,
      hasLoaded: !1,
      isLoading: !1,
      clear: !1,
      requestUrl: "",
      bgColor: "dark:bg-slate-800",
      input: {
        search: ""
      },
      error: {
        state: !1,
        message: ""
      }
    };
  }
  componentDidUpdate(r, n) {
    n.isLoading, !A.isEmptyOrNull(this.props.defaultValue) && !this.state.hasLoaded && this.props.data !== void 0 && this.props.data !== null && this.handleDefault(), this.props.request !== void 0 && this.handleRequestData(), r.selectedData !== void 0 && r.selectedData !== null && r.selectedData.length > 0 && this.state.selectedMultiple.length === 0 && !this.state.clear && this.handleSelectedMultiple(r.selectedData).then((o) => {
      this.setState({ selectedMultiple: o }), this.handleSelectedMultiple(o), this.props.handleChange && this.props.handleChange(o);
    }).catch((o) => {
      console.log(o);
    });
  }
  async componentDidMount() {
    this.props.onRef && this.props.onRef(this);
    const r = this.props.request;
    if (r !== void 0 && !A.isEmptyOrNull(r.url)) {
      this.setState({ isLoading: !0, requestUrl: r.url }, () => {
        this.fetch().then(() => {
        });
      });
      return;
    }
    const n = this.props.data || [];
    this.setState({ datalist: n }, () => {
      this.handleDelayedProcess();
    });
  }
  render() {
    return /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsx(ir, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full font-poppinsRegular ", children: [
      /* @__PURE__ */ v.jsx("div", { className: `${this.props.className} cursor-pointer`, ref: this.btnDropdownRef, onClick: () => {
        this.state.dropdownPopoverShow ? this.closeDropdownPopover() : this.openDropdownPopover();
      }, children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col w-full h-12 relative border-[1px] border-black dark:border-white", children: /* @__PURE__ */ v.jsxs("div", { className: "absolute bottom-0  px-2 pb-3 left-0 right-0", children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex", children: /* @__PURE__ */ v.jsx("div", { className: `text-[11px]  line-clamp-1  px-1 -mt-6 ${(this.props.showPlaceHolderHint === void 0 || this.props.showPlaceHolderHint !== !1) && (this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0) ? "bg-white dark:bg-gray-900" : "bg-transparent"} dark:text-white items-center`, children: (this.props.showPlaceHolderHint === void 0 || this.props.showPlaceHolderHint !== !1) && (this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0) ? this.props.placeholder : "" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ v.jsx("div", { className: `flex mr-2 text-black dark:text-white w-full line-clamp-1  ${this.props.selectedRef}`, children: this.props.is_multiple != null && this.props.is_multiple && this.state.selectedMultiple.length > 0 ? this.handleSelectMessage(this.state.selectedMultiple) : A.isEmptyOrNull(this.state.selectedList.name) ? this.props.all !== void 0 ? `${this.props.all}` : A.isEmptyOrNull(this.props.placeholder) ? null : this.props.placeholder : /* @__PURE__ */ v.jsxs("div", { className: "flex w-full line-clamp-1 text-start justify-start", title: `${this.handleEncrypt(this.state.selectedList.name)}`, children: [
            A.isEmptyOrNull(this.state.selectedList.icon) ? "" : /* @__PURE__ */ v.jsx("img", { className: "object-fill w-4 h-4 mr-2 items-center text-start justify-start", alt: "image", src: `${this.handleEncrypt(this.state.selectedList.icon)}` }),
            /* @__PURE__ */ v.jsx("div", { className: "w-full line-clamp-1 justify-start text-start", children: this.handleEncrypt(this.state.selectedList.name) })
          ] }) }),
          this.props.disabled !== void 0 && this.props.disabled ? null : /* @__PURE__ */ v.jsx("div", { children: this.state.dropdownPopoverShow ? /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
        ] })
      ] }) }) }),
      this.props.data != null || this.props.request != null ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          ref: this.popoverDropdownRef,
          className: (this.state.dropdownPopoverShow ? "inline-block " : "hidden ") + this.props.dropdownClass + "absolute border-[1px] z-[800] border-gray-200 dark:border-gray-700 text-base w-96 float-left py-2 bg-white dark:bg-slate-800  text-white list-none text-left rounded shadow-lg mt-1",
          style: { minWidth: "12rem" },
          children: [
            /* @__PURE__ */ v.jsx("div", { className: "flex w-full justify-between items-center bg-white text-black dark:bg-slate-800", children: /* @__PURE__ */ v.jsxs("div", { className: "flex w-full relative z-0 mx-3 my-2 group border-b border-black dark:border-white", children: [
              /* @__PURE__ */ v.jsx("input", { type: "text", name: "search", autoFocus: !0, autoComplete: "off", ref: this.searchRef, value: this.state.input.search, onChange: this.handleChange, className: "block py-2.5 text-xs 2xl:text-sm px-0 w-full text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer", placeholder: " " }),
              /* @__PURE__ */ v.jsx("label", { htmlFor: "floating_search", className: "absolute text-sm text-black dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6", children: "Search here...." })
            ] }) }),
            /* @__PURE__ */ v.jsx("div", { className: "flex w-full flex-col min-h-24 max-h-96 overflow-auto bg-white dark:bg-slate-800 text-black dark:text-white", children: this.state.error.state && this.props.request !== void 0 ? this.state.isLoading && this.props.request !== void 0 ? /* @__PURE__ */ v.jsx("div", { className: "flex flex-col w-full justify-center items-center mt-5", children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full justify-center items-center space-y-3", children: [
              /* @__PURE__ */ v.jsxs("svg", { role: "status", className: "inline w-6 h-6  animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ v.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
                /* @__PURE__ */ v.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
              ] }),
              /* @__PURE__ */ v.jsx("span", { className: "text-sm", children: "Loading..." })
            ] }) }) : /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full", children: [
              this.props.all !== void 0 ? /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-500 ${this.props.dropdownListClass} ${this.state.selectedMultiple.length == 0 ? " font-poppinsBold" : "font-normal"} `,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ v.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ v.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6", children: [
                      "  ",
                      this.props.all
                    ] })
                  ]
                }
              ) : null,
              this.props.onClear !== void 0 ? /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-500 ${this.props.dropdownListClass}`,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ v.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ v.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6", children: [
                      "  ",
                      this.props.onClear
                    ] })
                  ]
                }
              ) : null,
              this.state.datalist.length != 0 ? this.state.datalist.filter((r) => A.toString(this.handleEncrypt(r.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((r, n) => {
                var o = this.handleSearch(this.state.selectedMultiple, r.id);
                return /* @__PURE__ */ v.jsxs(
                  "div",
                  {
                    className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-gray-900 dark:text-white ${this.props.dropdownListClass} ${this.props.is_multiple != null && this.props.is_multiple ? o ? " font-poppinsBold" : "font-normal" : A.toString(this.state.selectedList.id) == A.toString(r.id) ? " font-poppinsBold" : "font-normal"} `,
                    onClick: (s) => this.handleSelectedItem(s, r),
                    children: [
                      /* @__PURE__ */ v.jsx("div", { className: "mr-2", children: A.isEmptyOrNull(r.icon) ? "" : /* @__PURE__ */ v.jsx("img", { className: "object-fill w-4 h-4", alt: "image", src: `${this.handleEncrypt(r.icon)}` }) }),
                      /* @__PURE__ */ v.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                        "  ",
                        this.handleEncrypt(r.name)
                      ] }),
                      o ? /* @__PURE__ */ v.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", clipRule: "evenodd" }) }) : this.props.is_multiple ? /* @__PURE__ */ v.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-5 h-5", children: /* @__PURE__ */ v.jsx("path", { d: "M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" }) }) : null
                    ]
                  },
                  `${n}`
                );
              }) : null
            ] }) }) : /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col w-full text-red-500 justify-center items-center h-24", children: [
              /* @__PURE__ */ v.jsx("div", { className: "text-xs", children: this.state.error.message }),
              /* @__PURE__ */ v.jsx("div", { onClick: () => this.fetch(), className: "text-xs uppercase bg-red-500 hover:bg-red-600 transition-all rounded-full text-white px-4 py-2 font-poppinsBold mt-2 cursor-pointer", children: "Retry" })
            ] }) }),
            this.props.is_multiple !== void 0 && this.props.is_multiple ? /* @__PURE__ */ v.jsx("div", { className: "flex w-full mt-4", children: /* @__PURE__ */ v.jsx("div", { onClick: () => this.handleClickAway(), className: "flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold", children: "Done" }) }) : null
          ]
        }
      ) }) : null
    ] }) }) });
  }
}
export {
  ir as DesmyClickOutsideListener,
  ko as DesmyDropdown,
  jo as DesmyModalHandler
};
//# sourceMappingURL=index.es.js.map
