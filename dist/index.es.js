var As = Object.defineProperty;
var Ps = (t, r, e) => r in t ? As(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var x = (t, r, e) => (Ps(t, typeof r != "symbol" ? r + "" : r, e), e);
import J, { useRef as Ze, useEffect as Zt, cloneElement as Ms, Component as ue, useState as Fs } from "react";
import wr from "react-dom";
var ot = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function Bs() {
  if (Qt)
    return ve;
  Qt = 1;
  var t = J, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, d, h) {
    var u, p = {}, w = null, v = null;
    h !== void 0 && (w = "" + h), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (u in d)
      s.call(d, u) && !i.hasOwnProperty(u) && (p[u] = d[u]);
    if (l && l.defaultProps)
      for (u in d = l.defaultProps, d)
        p[u] === void 0 && (p[u] = d[u]);
    return { $$typeof: r, type: l, key: w, ref: v, props: p, _owner: n.current };
  }
  return ve.Fragment = e, ve.jsx = o, ve.jsxs = o, ve;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Is() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var t = J, r = Symbol.for("react.element"), e = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function k(c) {
      if (c === null || typeof c != "object")
        return null;
      var g = m && c[m] || c[b];
      return typeof g == "function" ? g : null;
    }
    var _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(c) {
      {
        for (var g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++)
          y[E - 1] = arguments[E];
        O("error", c, y);
      }
    }
    function O(c, g, y) {
      {
        var E = _.ReactDebugCurrentFrame, T = E.getStackAddendum();
        T !== "" && (g += "%s", y = y.concat([T]));
        var L = y.map(function(j) {
          return String(j);
        });
        L.unshift("Warning: " + g), Function.prototype.apply.call(console[c], console, L);
      }
    }
    var K = !1, ne = !1, q = !1, Y = !1, Ne = !1, kt;
    kt = Symbol.for("react.module.reference");
    function is(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === s || c === i || Ne || c === n || c === h || c === u || Y || c === v || K || ne || q || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === p || c.$$typeof === o || c.$$typeof === l || c.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === kt || c.getModuleId !== void 0));
    }
    function os(c, g, y) {
      var E = c.displayName;
      if (E)
        return E;
      var T = g.displayName || g.name || "";
      return T !== "" ? y + "(" + T + ")" : y;
    }
    function Ot(c) {
      return c.displayName || "Context";
    }
    function V(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case s:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var g = c;
            return Ot(g) + ".Consumer";
          case o:
            var y = c;
            return Ot(y._context) + ".Provider";
          case d:
            return os(c, c.render, "ForwardRef");
          case p:
            var E = c.displayName || null;
            return E !== null ? E : V(c.type) || "Memo";
          case w: {
            var T = c, L = T._payload, j = T._init;
            try {
              return V(j(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, pe = 0, _t, Tt, Lt, Dt, At, Pt, Mt;
    function Ft() {
    }
    Ft.__reactDisabledLog = !0;
    function as() {
      {
        if (pe === 0) {
          _t = console.log, Tt = console.info, Lt = console.warn, Dt = console.error, At = console.group, Pt = console.groupCollapsed, Mt = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: Ft,
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
        pe++;
      }
    }
    function ls() {
      {
        if (pe--, pe === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, c, {
              value: _t
            }),
            info: Z({}, c, {
              value: Tt
            }),
            warn: Z({}, c, {
              value: Lt
            }),
            error: Z({}, c, {
              value: Dt
            }),
            group: Z({}, c, {
              value: At
            }),
            groupCollapsed: Z({}, c, {
              value: Pt
            }),
            groupEnd: Z({}, c, {
              value: Mt
            })
          });
        }
        pe < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = _.ReactCurrentDispatcher, ze;
    function je(c, g, y) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (T) {
            var E = T.stack.trim().match(/\n( *(at )?)/);
            ze = E && E[1] || "";
          }
        return `
` + ze + c;
      }
    }
    var qe = !1, ke;
    {
      var cs = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new cs();
    }
    function Bt(c, g) {
      if (!c || qe)
        return "";
      {
        var y = ke.get(c);
        if (y !== void 0)
          return y;
      }
      var E;
      qe = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = We.current, We.current = null, as();
      try {
        if (g) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (B) {
              E = B;
            }
            Reflect.construct(c, [], j);
          } else {
            try {
              j.call();
            } catch (B) {
              E = B;
            }
            c.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            E = B;
          }
          c();
        }
      } catch (B) {
        if (B && E && typeof B.stack == "string") {
          for (var N = B.stack.split(`
`), F = E.stack.split(`
`), P = N.length - 1, M = F.length - 1; P >= 1 && M >= 0 && N[P] !== F[M]; )
            M--;
          for (; P >= 1 && M >= 0; P--, M--)
            if (N[P] !== F[M]) {
              if (P !== 1 || M !== 1)
                do
                  if (P--, M--, M < 0 || N[P] !== F[M]) {
                    var U = `
` + N[P].replace(" at new ", " at ");
                    return c.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", c.displayName)), typeof c == "function" && ke.set(c, U), U;
                  }
                while (P >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        qe = !1, We.current = L, ls(), Error.prepareStackTrace = T;
      }
      var oe = c ? c.displayName || c.name : "", Q = oe ? je(oe) : "";
      return typeof c == "function" && ke.set(c, Q), Q;
    }
    function us(c, g, y) {
      return Bt(c, !1);
    }
    function ds(c) {
      var g = c.prototype;
      return !!(g && g.isReactComponent);
    }
    function Oe(c, g, y) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Bt(c, ds(c));
      if (typeof c == "string")
        return je(c);
      switch (c) {
        case h:
          return je("Suspense");
        case u:
          return je("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case d:
            return us(c.render);
          case p:
            return Oe(c.type, g, y);
          case w: {
            var E = c, T = E._payload, L = E._init;
            try {
              return Oe(L(T), g, y);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, It = {}, Ut = _.ReactDebugCurrentFrame;
    function _e(c) {
      if (c) {
        var g = c._owner, y = Oe(c.type, c._source, g ? g.type : null);
        Ut.setExtraStackFrame(y);
      } else
        Ut.setExtraStackFrame(null);
    }
    function hs(c, g, y, E, T) {
      {
        var L = Function.call.bind(me);
        for (var j in c)
          if (L(c, j)) {
            var N = void 0;
            try {
              if (typeof c[j] != "function") {
                var F = Error((E || "React class") + ": " + y + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              N = c[j](g, j, E, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              N = P;
            }
            N && !(N instanceof Error) && (_e(T), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, j, typeof N), _e(null)), N instanceof Error && !(N.message in It) && (It[N.message] = !0, _e(T), R("Failed %s type: %s", y, N.message), _e(null));
          }
      }
    }
    var fs = Array.isArray;
    function Ve(c) {
      return fs(c);
    }
    function ps(c) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, y = g && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return y;
      }
    }
    function ms(c) {
      try {
        return $t(c), !1;
      } catch {
        return !0;
      }
    }
    function $t(c) {
      return "" + c;
    }
    function Ht(c) {
      if (ms(c))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ps(c)), $t(c);
    }
    var ge = _.ReactCurrentOwner, gs = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wt, zt, Je;
    Je = {};
    function vs(c) {
      if (me.call(c, "ref")) {
        var g = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function xs(c) {
      if (me.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function ws(c, g) {
      if (typeof c.ref == "string" && ge.current && g && ge.current.stateNode !== g) {
        var y = V(ge.current.type);
        Je[y] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ge.current.type), c.ref), Je[y] = !0);
      }
    }
    function ys(c, g) {
      {
        var y = function() {
          Wt || (Wt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        y.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function bs(c, g) {
      {
        var y = function() {
          zt || (zt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        y.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Cs = function(c, g, y, E, T, L, j) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: c,
        key: g,
        ref: y,
        props: j,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Es(c, g, y, E, T) {
      {
        var L, j = {}, N = null, F = null;
        y !== void 0 && (Ht(y), N = "" + y), xs(g) && (Ht(g.key), N = "" + g.key), vs(g) && (F = g.ref, ws(g, T));
        for (L in g)
          me.call(g, L) && !gs.hasOwnProperty(L) && (j[L] = g[L]);
        if (c && c.defaultProps) {
          var P = c.defaultProps;
          for (L in P)
            j[L] === void 0 && (j[L] = P[L]);
        }
        if (N || F) {
          var M = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          N && ys(j, M), F && bs(j, M);
        }
        return Cs(c, N, F, T, E, ge.current, j);
      }
    }
    var Ke = _.ReactCurrentOwner, qt = _.ReactDebugCurrentFrame;
    function ie(c) {
      if (c) {
        var g = c._owner, y = Oe(c.type, c._source, g ? g.type : null);
        qt.setExtraStackFrame(y);
      } else
        qt.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function Ge(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function Vt() {
      {
        if (Ke.current) {
          var c = V(Ke.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Ss(c) {
      return "";
    }
    var Jt = {};
    function Rs(c) {
      {
        var g = Vt();
        if (!g) {
          var y = typeof c == "string" ? c : c.displayName || c.name;
          y && (g = `

Check the top-level render call using <` + y + ">.");
        }
        return g;
      }
    }
    function Kt(c, g) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var y = Rs(g);
        if (Jt[y])
          return;
        Jt[y] = !0;
        var E = "";
        c && c._owner && c._owner !== Ke.current && (E = " It was passed a child from " + V(c._owner.type) + "."), ie(c), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), ie(null);
      }
    }
    function Yt(c, g) {
      {
        if (typeof c != "object")
          return;
        if (Ve(c))
          for (var y = 0; y < c.length; y++) {
            var E = c[y];
            Ge(E) && Kt(E, g);
          }
        else if (Ge(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var T = k(c);
          if (typeof T == "function" && T !== c.entries)
            for (var L = T.call(c), j; !(j = L.next()).done; )
              Ge(j.value) && Kt(j.value, g);
        }
      }
    }
    function Ns(c) {
      {
        var g = c.type;
        if (g == null || typeof g == "string")
          return;
        var y;
        if (typeof g == "function")
          y = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          y = g.propTypes;
        else
          return;
        if (y) {
          var E = V(g);
          hs(y, c.props, "prop", E, c);
        } else if (g.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var T = V(g);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function js(c) {
      {
        for (var g = Object.keys(c.props), y = 0; y < g.length; y++) {
          var E = g[y];
          if (E !== "children" && E !== "key") {
            ie(c), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), ie(null);
            break;
          }
        }
        c.ref !== null && (ie(c), R("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var Gt = {};
    function Xt(c, g, y, E, T, L) {
      {
        var j = is(c);
        if (!j) {
          var N = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = Ss();
          F ? N += F : N += Vt();
          var P;
          c === null ? P = "null" : Ve(c) ? P = "array" : c !== void 0 && c.$$typeof === r ? (P = "<" + (V(c.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : P = typeof c, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, N);
        }
        var M = Es(c, g, y, T, L);
        if (M == null)
          return M;
        if (j) {
          var U = g.children;
          if (U !== void 0)
            if (E)
              if (Ve(U)) {
                for (var oe = 0; oe < U.length; oe++)
                  Yt(U[oe], c);
                Object.freeze && Object.freeze(U);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(U, c);
        }
        if (me.call(g, "key")) {
          var Q = V(c), B = Object.keys(g).filter(function(Ds) {
            return Ds !== "key";
          }), Xe = B.length > 0 ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[Q + Xe]) {
            var Ls = B.length > 0 ? "{" + B.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, Q, Ls, Q), Gt[Q + Xe] = !0;
          }
        }
        return c === s ? js(M) : Ns(M), M;
      }
    }
    function ks(c, g, y) {
      return Xt(c, g, y, !0);
    }
    function Os(c, g, y) {
      return Xt(c, g, y, !1);
    }
    var _s = Os, Ts = ks;
    xe.Fragment = s, xe.jsx = _s, xe.jsxs = Ts;
  }()), xe;
}
process.env.NODE_ENV === "production" ? ot.exports = Bs() : ot.exports = Is();
var a = ot.exports, D = /* @__PURE__ */ ((t) => (t.LOADING = "LOADING", t.ERROR = "ERROR", t.APPROVED = "APPROVED", t.ACTIVE = "ACTIVE", t.LOADED = "LOADED", t.RUNNING = "RUNNING", t.WAITING = "WAITING", t.IN_PROGRESS = "IN_PROGRESS", t.NOTICE = "NOTICE", t.ACCESS_TOKEN = "access_token", t.TEXT = "TEXT", t.EMAIL = "EMAIL", t.PHONE = "PHONE", t.NUMBER = "NUMBER", t.PASSWORD = "PASSWORD", t.ERROR_MESSAGE = "Sorry for the inconvenience caused by the error. Please contact us if the issue persists. ", t))(D || {});
class Us {
  constructor() {
    x(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(r) {
    let e = r.size;
    const s = ["Bytes", "KB", "MB", "GB"];
    let n = 0;
    for (; e > 900; )
      e /= 1024, n++;
    return `${Math.round(e * 100) / 100} ${s[n]}`;
  }
  getExtension(r) {
    return r.split(".").pop();
  }
  getFileName(r) {
    return r.split("/").pop();
  }
  isValidHttpUrl(r) {
    let e;
    try {
      e = new URL(r);
    } catch {
      return !1;
    }
    return /https?/.test(e.protocol);
  }
  makeUniqueid(r = 10) {
    let e = "";
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = s.length;
    for (let i = 0; i < r; i++)
      e += s.charAt(Math.floor(Math.random() * n));
    return e;
  }
  nameToText(r) {
    return r.split("_").join(" ");
  }
  getRandomColor() {
    const r = "0123456789ABCDEF";
    let e = "#";
    for (let s = 0; s < 6; s++)
      e += r[Math.floor(Math.random() * 16)];
    return e;
  }
  concat(r, e) {
    return `${r} ${e}`;
  }
  isEmptyOrNull(r) {
    return r === "" || r == null || r == null;
  }
  toStringDefault(r, e = "") {
    return this.isEmptyOrNull(r) ? e.toString() : r;
  }
  toString(r) {
    return r + "";
  }
  isEmpty(r) {
    return r === "" || r === void 0 || r === null;
  }
  validatePasswords(r, e) {
    return r !== "" && r === e;
  }
  validatePassword(r) {
    const e = /[A-Z]/.test(r), s = /[a-z]/.test(r), n = /\d/.test(r), i = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(r), o = r.length >= 8;
    return { hasUppercase: e, hasLowercase: s, hasNumber: n, hasSpecialCharacter: i, has8Characters: o, allValidationsPassed: e && s && n && i && o };
  }
  isNotEmpty(r) {
    return r !== "";
  }
  convertUnderscoreToSpaceString(r) {
    return r.replace(/_/g, " ");
  }
  async imageSize(r) {
    return new Promise((e, s) => {
      try {
        const n = new FileReader();
        n.onload = () => {
          const i = new Image();
          i.onload = () => {
            e({ width: i.width, height: i.height });
          }, i.src = n.result;
        }, n.onerror = (i) => {
          s(i);
        }, n.readAsDataURL(r);
      } catch (n) {
        s(n);
      }
    });
  }
  capitalizeEachWord(r) {
    return r.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
  }
  formatDateString(r) {
    const e = r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!e)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, s, n, i] = e;
    return `${i}-${n}-${s}`;
  }
  validateEmail(r) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r);
  }
  convertNumber(r) {
    return Math.abs(r) >= 1e6 ? (r / 1e6).toString().substring(0, 4) + "M" : Math.abs(r) >= 1e3 ? (r / 1e3).toString().substring(0, 4) + "k" : r.toString();
  }
  daysLeft(r) {
    const e = new Date(r), s = /* @__PURE__ */ new Date(), n = e.getTime() - s.getTime();
    return Math.ceil(n / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(r) {
    const s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][r.getDay()], n = r.getDate(), o = [
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
    ][r.getMonth()], l = r.getFullYear();
    function d(u) {
      if (u >= 11 && u <= 13)
        return "th";
      switch (u % 10) {
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
    const h = d(n);
    return `${s}, ${n}${h} ${o}, ${l}`;
  }
  getTimeAgoAndCustomDate(r) {
    const e = /* @__PURE__ */ new Date(), s = new Date(r), n = e.getTime() - s.getTime();
    if (e < s)
      return "Future date";
    const i = Math.floor(n / 1e3);
    return i < 60 ? `${i} seconds ago` : i < 3600 ? `${Math.floor(i / 60)} minutes ago` : i < 86400 ? `${Math.floor(i / 3600)} hours ago` : i < 2592e3 ? `${Math.floor(i / 86400)} days ago` : s.toLocaleString("en-US", {
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
    const e = parseFloat(r);
    return isNaN(e) ? r : (Math.round(e * 100) / 100).toFixed(2);
  }
}
const C = new Us();
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
var be = typeof window < "u" && typeof document < "u" && typeof navigator < "u", $s = function() {
  for (var t = ["Edge", "Trident", "Firefox"], r = 0; r < t.length; r += 1)
    if (be && navigator.userAgent.indexOf(t[r]) >= 0)
      return 1;
  return 0;
}();
function Hs(t) {
  var r = !1;
  return function() {
    r || (r = !0, window.Promise.resolve().then(function() {
      r = !1, t();
    }));
  };
}
function Ws(t) {
  var r = !1;
  return function() {
    r || (r = !0, setTimeout(function() {
      r = !1, t();
    }, $s));
  };
}
var zs = be && window.Promise, qs = zs ? Hs : Ws;
function yr(t) {
  var r = {};
  return t && r.toString.call(t) === "[object Function]";
}
function se(t, r) {
  if (t.nodeType !== 1)
    return [];
  var e = t.ownerDocument.defaultView, s = e.getComputedStyle(t, null);
  return r ? s[r] : s;
}
function vt(t) {
  return t.nodeName === "HTML" ? t : t.parentNode || t.host;
}
function Ce(t) {
  if (!t)
    return document.body;
  switch (t.nodeName) {
    case "HTML":
    case "BODY":
      return t.ownerDocument.body;
    case "#document":
      return t.body;
  }
  var r = se(t), e = r.overflow, s = r.overflowX, n = r.overflowY;
  return /(auto|scroll|overlay)/.test(e + n + s) ? t : Ce(vt(t));
}
function br(t) {
  return t && t.referenceNode ? t.referenceNode : t;
}
var tr = be && !!(window.MSInputMethodContext && document.documentMode), rr = be && /MSIE 10/.test(navigator.userAgent);
function de(t) {
  return t === 11 ? tr : t === 10 ? rr : tr || rr;
}
function ae(t) {
  if (!t)
    return document.documentElement;
  for (var r = de(10) ? document.body : null, e = t.offsetParent || null; e === r && t.nextElementSibling; )
    e = (t = t.nextElementSibling).offsetParent;
  var s = e && e.nodeName;
  return !s || s === "BODY" || s === "HTML" ? t ? t.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(e.nodeName) !== -1 && se(e, "position") === "static" ? ae(e) : e;
}
function Vs(t) {
  var r = t.nodeName;
  return r === "BODY" ? !1 : r === "HTML" || ae(t.firstElementChild) === t;
}
function at(t) {
  return t.parentNode !== null ? at(t.parentNode) : t;
}
function De(t, r) {
  if (!t || !t.nodeType || !r || !r.nodeType)
    return document.documentElement;
  var e = t.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING, s = e ? t : r, n = e ? r : t, i = document.createRange();
  i.setStart(s, 0), i.setEnd(n, 0);
  var o = i.commonAncestorContainer;
  if (t !== o && r !== o || s.contains(n))
    return Vs(o) ? o : ae(o);
  var l = at(t);
  return l.host ? De(l.host, r) : De(t, at(r).host);
}
function le(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", e = r === "top" ? "scrollTop" : "scrollLeft", s = t.nodeName;
  if (s === "BODY" || s === "HTML") {
    var n = t.ownerDocument.documentElement, i = t.ownerDocument.scrollingElement || n;
    return i[e];
  }
  return t[e];
}
function Js(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = le(r, "top"), n = le(r, "left"), i = e ? -1 : 1;
  return t.top += s * i, t.bottom += s * i, t.left += n * i, t.right += n * i, t;
}
function sr(t, r) {
  var e = r === "x" ? "Left" : "Top", s = e === "Left" ? "Right" : "Bottom";
  return parseFloat(t["border" + e + "Width"]) + parseFloat(t["border" + s + "Width"]);
}
function nr(t, r, e, s) {
  return Math.max(r["offset" + t], r["scroll" + t], e["client" + t], e["offset" + t], e["scroll" + t], de(10) ? parseInt(e["offset" + t]) + parseInt(s["margin" + (t === "Height" ? "Top" : "Left")]) + parseInt(s["margin" + (t === "Height" ? "Bottom" : "Right")]) : 0);
}
function Cr(t) {
  var r = t.body, e = t.documentElement, s = de(10) && getComputedStyle(e);
  return {
    height: nr("Height", r, e, s),
    width: nr("Width", r, e, s)
  };
}
var Ks = function(t, r) {
  if (!(t instanceof r))
    throw new TypeError("Cannot call a class as a function");
}, Ys = /* @__PURE__ */ function() {
  function t(r, e) {
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
    }
  }
  return function(r, e, s) {
    return e && t(r.prototype, e), s && t(r, s), r;
  };
}(), ce = function(t, r, e) {
  return r in t ? Object.defineProperty(t, r, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = e, t;
}, $ = Object.assign || function(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r];
    for (var s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
  }
  return t;
};
function X(t) {
  return $({}, t, {
    right: t.left + t.width,
    bottom: t.top + t.height
  });
}
function lt(t) {
  var r = {};
  try {
    if (de(10)) {
      r = t.getBoundingClientRect();
      var e = le(t, "top"), s = le(t, "left");
      r.top += e, r.left += s, r.bottom += e, r.right += s;
    } else
      r = t.getBoundingClientRect();
  } catch {
  }
  var n = {
    left: r.left,
    top: r.top,
    width: r.right - r.left,
    height: r.bottom - r.top
  }, i = t.nodeName === "HTML" ? Cr(t.ownerDocument) : {}, o = i.width || t.clientWidth || n.width, l = i.height || t.clientHeight || n.height, d = t.offsetWidth - o, h = t.offsetHeight - l;
  if (d || h) {
    var u = se(t);
    d -= sr(u, "x"), h -= sr(u, "y"), n.width -= d, n.height -= h;
  }
  return X(n);
}
function xt(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = de(10), n = r.nodeName === "HTML", i = lt(t), o = lt(r), l = Ce(t), d = se(r), h = parseFloat(d.borderTopWidth), u = parseFloat(d.borderLeftWidth);
  e && n && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
  var p = X({
    top: i.top - o.top - h,
    left: i.left - o.left - u,
    width: i.width,
    height: i.height
  });
  if (p.marginTop = 0, p.marginLeft = 0, !s && n) {
    var w = parseFloat(d.marginTop), v = parseFloat(d.marginLeft);
    p.top -= h - w, p.bottom -= h - w, p.left -= u - v, p.right -= u - v, p.marginTop = w, p.marginLeft = v;
  }
  return (s && !e ? r.contains(l) : r === l && l.nodeName !== "BODY") && (p = Js(p, r)), p;
}
function Gs(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = t.ownerDocument.documentElement, s = xt(t, e), n = Math.max(e.clientWidth, window.innerWidth || 0), i = Math.max(e.clientHeight, window.innerHeight || 0), o = r ? 0 : le(e), l = r ? 0 : le(e, "left"), d = {
    top: o - s.top + s.marginTop,
    left: l - s.left + s.marginLeft,
    width: n,
    height: i
  };
  return X(d);
}
function Er(t) {
  var r = t.nodeName;
  if (r === "BODY" || r === "HTML")
    return !1;
  if (se(t, "position") === "fixed")
    return !0;
  var e = vt(t);
  return e ? Er(e) : !1;
}
function Sr(t) {
  if (!t || !t.parentElement || de())
    return document.documentElement;
  for (var r = t.parentElement; r && se(r, "transform") === "none"; )
    r = r.parentElement;
  return r || document.documentElement;
}
function wt(t, r, e, s) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = { top: 0, left: 0 }, o = n ? Sr(t) : De(t, br(r));
  if (s === "viewport")
    i = Gs(o, n);
  else {
    var l = void 0;
    s === "scrollParent" ? (l = Ce(vt(r)), l.nodeName === "BODY" && (l = t.ownerDocument.documentElement)) : s === "window" ? l = t.ownerDocument.documentElement : l = s;
    var d = xt(l, o, n);
    if (l.nodeName === "HTML" && !Er(o)) {
      var h = Cr(t.ownerDocument), u = h.height, p = h.width;
      i.top += d.top - d.marginTop, i.bottom = u + d.top, i.left += d.left - d.marginLeft, i.right = p + d.left;
    } else
      i = d;
  }
  e = e || 0;
  var w = typeof e == "number";
  return i.left += w ? e : e.left || 0, i.top += w ? e : e.top || 0, i.right -= w ? e : e.right || 0, i.bottom -= w ? e : e.bottom || 0, i;
}
function Xs(t) {
  var r = t.width, e = t.height;
  return r * e;
}
function Rr(t, r, e, s, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (t.indexOf("auto") === -1)
    return t;
  var o = wt(e, s, i, n), l = {
    top: {
      width: o.width,
      height: r.top - o.top
    },
    right: {
      width: o.right - r.right,
      height: o.height
    },
    bottom: {
      width: o.width,
      height: o.bottom - r.bottom
    },
    left: {
      width: r.left - o.left,
      height: o.height
    }
  }, d = Object.keys(l).map(function(w) {
    return $({
      key: w
    }, l[w], {
      area: Xs(l[w])
    });
  }).sort(function(w, v) {
    return v.area - w.area;
  }), h = d.filter(function(w) {
    var v = w.width, m = w.height;
    return v >= e.clientWidth && m >= e.clientHeight;
  }), u = h.length > 0 ? h[0].key : d[0].key, p = t.split("-")[1];
  return u + (p ? "-" + p : "");
}
function Nr(t, r, e) {
  var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, n = s ? Sr(r) : De(r, br(e));
  return xt(e, n, s);
}
function jr(t) {
  var r = t.ownerDocument.defaultView, e = r.getComputedStyle(t), s = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0), n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0), i = {
    width: t.offsetWidth + n,
    height: t.offsetHeight + s
  };
  return i;
}
function Ae(t) {
  var r = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return t.replace(/left|right|bottom|top/g, function(e) {
    return r[e];
  });
}
function kr(t, r, e) {
  e = e.split("-")[0];
  var s = jr(t), n = {
    width: s.width,
    height: s.height
  }, i = ["right", "left"].indexOf(e) !== -1, o = i ? "top" : "left", l = i ? "left" : "top", d = i ? "height" : "width", h = i ? "width" : "height";
  return n[o] = r[o] + r[d] / 2 - s[d] / 2, e === l ? n[l] = r[l] - s[h] : n[l] = r[Ae(l)], n;
}
function Ee(t, r) {
  return Array.prototype.find ? t.find(r) : t.filter(r)[0];
}
function Zs(t, r, e) {
  if (Array.prototype.findIndex)
    return t.findIndex(function(n) {
      return n[r] === e;
    });
  var s = Ee(t, function(n) {
    return n[r] === e;
  });
  return t.indexOf(s);
}
function Or(t, r, e) {
  var s = e === void 0 ? t : t.slice(0, Zs(t, "name", e));
  return s.forEach(function(n) {
    n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var i = n.function || n.fn;
    n.enabled && yr(i) && (r.offsets.popper = X(r.offsets.popper), r.offsets.reference = X(r.offsets.reference), r = i(r, n));
  }), r;
}
function Qs() {
  if (!this.state.isDestroyed) {
    var t = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    t.offsets.reference = Nr(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Rr(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = kr(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = Or(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
  }
}
function _r(t, r) {
  return t.some(function(e) {
    var s = e.name, n = e.enabled;
    return n && s === r;
  });
}
function yt(t) {
  for (var r = [!1, "ms", "Webkit", "Moz", "O"], e = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < r.length; s++) {
    var n = r[s], i = n ? "" + n + e : t;
    if (typeof document.body.style[i] < "u")
      return i;
  }
  return null;
}
function en() {
  return this.state.isDestroyed = !0, _r(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[yt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function Tr(t) {
  var r = t.ownerDocument;
  return r ? r.defaultView : window;
}
function Lr(t, r, e, s) {
  var n = t.nodeName === "BODY", i = n ? t.ownerDocument.defaultView : t;
  i.addEventListener(r, e, { passive: !0 }), n || Lr(Ce(i.parentNode), r, e, s), s.push(i);
}
function tn(t, r, e, s) {
  e.updateBound = s, Tr(t).addEventListener("resize", e.updateBound, { passive: !0 });
  var n = Ce(t);
  return Lr(n, "scroll", e.updateBound, e.scrollParents), e.scrollElement = n, e.eventsEnabled = !0, e;
}
function rn() {
  this.state.eventsEnabled || (this.state = tn(this.reference, this.options, this.state, this.scheduleUpdate));
}
function sn(t, r) {
  return Tr(t).removeEventListener("resize", r.updateBound), r.scrollParents.forEach(function(e) {
    e.removeEventListener("scroll", r.updateBound);
  }), r.updateBound = null, r.scrollParents = [], r.scrollElement = null, r.eventsEnabled = !1, r;
}
function nn() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = sn(this.reference, this.state));
}
function bt(t) {
  return t !== "" && !isNaN(parseFloat(t)) && isFinite(t);
}
function ct(t, r) {
  Object.keys(r).forEach(function(e) {
    var s = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(e) !== -1 && bt(r[e]) && (s = "px"), t.style[e] = r[e] + s;
  });
}
function on(t, r) {
  Object.keys(r).forEach(function(e) {
    var s = r[e];
    s !== !1 ? t.setAttribute(e, r[e]) : t.removeAttribute(e);
  });
}
function an(t) {
  return ct(t.instance.popper, t.styles), on(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && ct(t.arrowElement, t.arrowStyles), t;
}
function ln(t, r, e, s, n) {
  var i = Nr(n, r, t, e.positionFixed), o = Rr(e.placement, i, r, t, e.modifiers.flip.boundariesElement, e.modifiers.flip.padding);
  return r.setAttribute("x-placement", o), ct(r, { position: e.positionFixed ? "fixed" : "absolute" }), e;
}
function cn(t, r) {
  var e = t.offsets, s = e.popper, n = e.reference, i = Math.round, o = Math.floor, l = function(_) {
    return _;
  }, d = i(n.width), h = i(s.width), u = ["left", "right"].indexOf(t.placement) !== -1, p = t.placement.indexOf("-") !== -1, w = d % 2 === h % 2, v = d % 2 === 1 && h % 2 === 1, m = r ? u || p || w ? i : o : l, b = r ? i : l;
  return {
    left: m(v && !p && r ? s.left - 1 : s.left),
    top: b(s.top),
    bottom: b(s.bottom),
    right: m(s.right)
  };
}
var un = be && /Firefox/i.test(navigator.userAgent);
function dn(t, r) {
  var e = r.x, s = r.y, n = t.offsets.popper, i = Ee(t.instance.modifiers, function(O) {
    return O.name === "applyStyle";
  }).gpuAcceleration;
  i !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var o = i !== void 0 ? i : r.gpuAcceleration, l = ae(t.instance.popper), d = lt(l), h = {
    position: n.position
  }, u = cn(t, window.devicePixelRatio < 2 || !un), p = e === "bottom" ? "top" : "bottom", w = s === "right" ? "left" : "right", v = yt("transform"), m = void 0, b = void 0;
  if (p === "bottom" ? l.nodeName === "HTML" ? b = -l.clientHeight + u.bottom : b = -d.height + u.bottom : b = u.top, w === "right" ? l.nodeName === "HTML" ? m = -l.clientWidth + u.right : m = -d.width + u.right : m = u.left, o && v)
    h[v] = "translate3d(" + m + "px, " + b + "px, 0)", h[p] = 0, h[w] = 0, h.willChange = "transform";
  else {
    var k = p === "bottom" ? -1 : 1, _ = w === "right" ? -1 : 1;
    h[p] = b * k, h[w] = m * _, h.willChange = p + ", " + w;
  }
  var R = {
    "x-placement": t.placement
  };
  return t.attributes = $({}, R, t.attributes), t.styles = $({}, h, t.styles), t.arrowStyles = $({}, t.offsets.arrow, t.arrowStyles), t;
}
function Dr(t, r, e) {
  var s = Ee(t, function(l) {
    var d = l.name;
    return d === r;
  }), n = !!s && t.some(function(l) {
    return l.name === e && l.enabled && l.order < s.order;
  });
  if (!n) {
    var i = "`" + r + "`", o = "`" + e + "`";
    console.warn(o + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
  }
  return n;
}
function hn(t, r) {
  var e;
  if (!Dr(t.instance.modifiers, "arrow", "keepTogether"))
    return t;
  var s = r.element;
  if (typeof s == "string") {
    if (s = t.instance.popper.querySelector(s), !s)
      return t;
  } else if (!t.instance.popper.contains(s))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
  var n = t.placement.split("-")[0], i = t.offsets, o = i.popper, l = i.reference, d = ["left", "right"].indexOf(n) !== -1, h = d ? "height" : "width", u = d ? "Top" : "Left", p = u.toLowerCase(), w = d ? "left" : "top", v = d ? "bottom" : "right", m = jr(s)[h];
  l[v] - m < o[p] && (t.offsets.popper[p] -= o[p] - (l[v] - m)), l[p] + m > o[v] && (t.offsets.popper[p] += l[p] + m - o[v]), t.offsets.popper = X(t.offsets.popper);
  var b = l[p] + l[h] / 2 - m / 2, k = se(t.instance.popper), _ = parseFloat(k["margin" + u]), R = parseFloat(k["border" + u + "Width"]), O = b - t.offsets.popper[p] - _ - R;
  return O = Math.max(Math.min(o[h] - m, O), 0), t.arrowElement = s, t.offsets.arrow = (e = {}, ce(e, p, Math.round(O)), ce(e, w, ""), e), t;
}
function fn(t) {
  return t === "end" ? "start" : t === "start" ? "end" : t;
}
var Ar = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Qe = Ar.slice(3);
function ir(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = Qe.indexOf(t), s = Qe.slice(e + 1).concat(Qe.slice(0, e));
  return r ? s.reverse() : s;
}
var et = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function pn(t, r) {
  if (_r(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)
    return t;
  var e = wt(t.instance.popper, t.instance.reference, r.padding, r.boundariesElement, t.positionFixed), s = t.placement.split("-")[0], n = Ae(s), i = t.placement.split("-")[1] || "", o = [];
  switch (r.behavior) {
    case et.FLIP:
      o = [s, n];
      break;
    case et.CLOCKWISE:
      o = ir(s);
      break;
    case et.COUNTERCLOCKWISE:
      o = ir(s, !0);
      break;
    default:
      o = r.behavior;
  }
  return o.forEach(function(l, d) {
    if (s !== l || o.length === d + 1)
      return t;
    s = t.placement.split("-")[0], n = Ae(s);
    var h = t.offsets.popper, u = t.offsets.reference, p = Math.floor, w = s === "left" && p(h.right) > p(u.left) || s === "right" && p(h.left) < p(u.right) || s === "top" && p(h.bottom) > p(u.top) || s === "bottom" && p(h.top) < p(u.bottom), v = p(h.left) < p(e.left), m = p(h.right) > p(e.right), b = p(h.top) < p(e.top), k = p(h.bottom) > p(e.bottom), _ = s === "left" && v || s === "right" && m || s === "top" && b || s === "bottom" && k, R = ["top", "bottom"].indexOf(s) !== -1, O = !!r.flipVariations && (R && i === "start" && v || R && i === "end" && m || !R && i === "start" && b || !R && i === "end" && k), K = !!r.flipVariationsByContent && (R && i === "start" && m || R && i === "end" && v || !R && i === "start" && k || !R && i === "end" && b), ne = O || K;
    (w || _ || ne) && (t.flipped = !0, (w || _) && (s = o[d + 1]), ne && (i = fn(i)), t.placement = s + (i ? "-" + i : ""), t.offsets.popper = $({}, t.offsets.popper, kr(t.instance.popper, t.offsets.reference, t.placement)), t = Or(t.instance.modifiers, t, "flip"));
  }), t;
}
function mn(t) {
  var r = t.offsets, e = r.popper, s = r.reference, n = t.placement.split("-")[0], i = Math.floor, o = ["top", "bottom"].indexOf(n) !== -1, l = o ? "right" : "bottom", d = o ? "left" : "top", h = o ? "width" : "height";
  return e[l] < i(s[d]) && (t.offsets.popper[d] = i(s[d]) - e[h]), e[d] > i(s[l]) && (t.offsets.popper[d] = i(s[l])), t;
}
function gn(t, r, e, s) {
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
        l = s;
    }
    var d = X(l);
    return d[r] / 100 * i;
  } else if (o === "vh" || o === "vw") {
    var h = void 0;
    return o === "vh" ? h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), h / 100 * i;
  } else
    return i;
}
function vn(t, r, e, s) {
  var n = [0, 0], i = ["right", "left"].indexOf(s) !== -1, o = t.split(/(\+|\-)/).map(function(u) {
    return u.trim();
  }), l = o.indexOf(Ee(o, function(u) {
    return u.search(/,|\s/) !== -1;
  }));
  o[l] && o[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var d = /\s*,\s*|\s+/, h = l !== -1 ? [o.slice(0, l).concat([o[l].split(d)[0]]), [o[l].split(d)[1]].concat(o.slice(l + 1))] : [o];
  return h = h.map(function(u, p) {
    var w = (p === 1 ? !i : i) ? "height" : "width", v = !1;
    return u.reduce(function(m, b) {
      return m[m.length - 1] === "" && ["+", "-"].indexOf(b) !== -1 ? (m[m.length - 1] = b, v = !0, m) : v ? (m[m.length - 1] += b, v = !1, m) : m.concat(b);
    }, []).map(function(m) {
      return gn(m, w, r, e);
    });
  }), h.forEach(function(u, p) {
    u.forEach(function(w, v) {
      bt(w) && (n[p] += w * (u[v - 1] === "-" ? -1 : 1));
    });
  }), n;
}
function xn(t, r) {
  var e = r.offset, s = t.placement, n = t.offsets, i = n.popper, o = n.reference, l = s.split("-")[0], d = void 0;
  return bt(+e) ? d = [+e, 0] : d = vn(e, i, o, l), l === "left" ? (i.top += d[0], i.left -= d[1]) : l === "right" ? (i.top += d[0], i.left += d[1]) : l === "top" ? (i.left += d[0], i.top -= d[1]) : l === "bottom" && (i.left += d[0], i.top += d[1]), t.popper = i, t;
}
function wn(t, r) {
  var e = r.boundariesElement || ae(t.instance.popper);
  t.instance.reference === e && (e = ae(e));
  var s = yt("transform"), n = t.instance.popper.style, i = n.top, o = n.left, l = n[s];
  n.top = "", n.left = "", n[s] = "";
  var d = wt(t.instance.popper, t.instance.reference, r.padding, e, t.positionFixed);
  n.top = i, n.left = o, n[s] = l, r.boundaries = d;
  var h = r.priority, u = t.offsets.popper, p = {
    primary: function(v) {
      var m = u[v];
      return u[v] < d[v] && !r.escapeWithReference && (m = Math.max(u[v], d[v])), ce({}, v, m);
    },
    secondary: function(v) {
      var m = v === "right" ? "left" : "top", b = u[m];
      return u[v] > d[v] && !r.escapeWithReference && (b = Math.min(u[m], d[v] - (v === "right" ? u.width : u.height))), ce({}, m, b);
    }
  };
  return h.forEach(function(w) {
    var v = ["left", "top"].indexOf(w) !== -1 ? "primary" : "secondary";
    u = $({}, u, p[v](w));
  }), t.offsets.popper = u, t;
}
function yn(t) {
  var r = t.placement, e = r.split("-")[0], s = r.split("-")[1];
  if (s) {
    var n = t.offsets, i = n.reference, o = n.popper, l = ["bottom", "top"].indexOf(e) !== -1, d = l ? "left" : "top", h = l ? "width" : "height", u = {
      start: ce({}, d, i[d]),
      end: ce({}, d, i[d] + i[h] - o[h])
    };
    t.offsets.popper = $({}, o, u[s]);
  }
  return t;
}
function bn(t) {
  if (!Dr(t.instance.modifiers, "hide", "preventOverflow"))
    return t;
  var r = t.offsets.reference, e = Ee(t.instance.modifiers, function(s) {
    return s.name === "preventOverflow";
  }).boundaries;
  if (r.bottom < e.top || r.left > e.right || r.top > e.bottom || r.right < e.left) {
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
function Cn(t) {
  var r = t.placement, e = r.split("-")[0], s = t.offsets, n = s.popper, i = s.reference, o = ["left", "right"].indexOf(e) !== -1, l = ["top", "left"].indexOf(e) === -1;
  return n[o ? "left" : "top"] = i[e] - (l ? n[o ? "width" : "height"] : 0), t.placement = Ae(r), t.offsets.popper = X(n), t;
}
var En = {
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
    fn: yn
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
    fn: xn,
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
    fn: wn,
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
    fn: mn
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
    fn: hn,
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
    fn: pn,
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
    fn: Cn
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
    fn: bn
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
    fn: dn,
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
    fn: an,
    /** @prop {Function} */
    onLoad: ln,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
}, Sn = {
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
  modifiers: En
}, Fe = function() {
  function t(r, e) {
    var s = this, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Ks(this, t), this.scheduleUpdate = function() {
      return requestAnimationFrame(s.update);
    }, this.update = qs(this.update.bind(this)), this.options = $({}, t.Defaults, n), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = r && r.jquery ? r[0] : r, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys($({}, t.Defaults.modifiers, n.modifiers)).forEach(function(o) {
      s.options.modifiers[o] = $({}, t.Defaults.modifiers[o] || {}, n.modifiers ? n.modifiers[o] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(o) {
      return $({
        name: o
      }, s.options.modifiers[o]);
    }).sort(function(o, l) {
      return o.order - l.order;
    }), this.modifiers.forEach(function(o) {
      o.enabled && yr(o.onLoad) && o.onLoad(s.reference, s.popper, s.options, o, s.state);
    }), this.update();
    var i = this.options.eventsEnabled;
    i && this.enableEventListeners(), this.state.eventsEnabled = i;
  }
  return Ys(t, [{
    key: "update",
    value: function() {
      return Qs.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return en.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return rn.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return nn.call(this);
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
Fe.Utils = (typeof window < "u" ? window : global).PopperUtils;
Fe.placements = Ar;
Fe.Defaults = Sn;
function Pr(t, r) {
  return function() {
    return t.apply(r, arguments);
  };
}
const { toString: Rn } = Object.prototype, { getPrototypeOf: Ct } = Object, Be = /* @__PURE__ */ ((t) => (r) => {
  const e = Rn.call(r);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), z = (t) => (t = t.toLowerCase(), (r) => Be(r) === t), Ie = (t) => (r) => typeof r === t, { isArray: he } = Array, ye = Ie("undefined");
function Nn(t) {
  return t !== null && !ye(t) && t.constructor !== null && !ye(t.constructor) && H(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Mr = z("ArrayBuffer");
function jn(t) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(t) : r = t && t.buffer && Mr(t.buffer), r;
}
const kn = Ie("string"), H = Ie("function"), Fr = Ie("number"), Ue = (t) => t !== null && typeof t == "object", On = (t) => t === !0 || t === !1, Te = (t) => {
  if (Be(t) !== "object")
    return !1;
  const r = Ct(t);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, _n = z("Date"), Tn = z("File"), Ln = z("Blob"), Dn = z("FileList"), An = (t) => Ue(t) && H(t.pipe), Pn = (t) => {
  let r;
  return t && (typeof FormData == "function" && t instanceof FormData || H(t.append) && ((r = Be(t)) === "formdata" || // detect form-data instance
  r === "object" && H(t.toString) && t.toString() === "[object FormData]"));
}, Mn = z("URLSearchParams"), [Fn, Bn, In, Un] = ["ReadableStream", "Request", "Response", "Headers"].map(z), $n = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Se(t, r, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let s, n;
  if (typeof t != "object" && (t = [t]), he(t))
    for (s = 0, n = t.length; s < n; s++)
      r.call(null, t[s], s, t);
  else {
    const i = e ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let l;
    for (s = 0; s < o; s++)
      l = i[s], r.call(null, t[l], l, t);
  }
}
function Br(t, r) {
  r = r.toLowerCase();
  const e = Object.keys(t);
  let s = e.length, n;
  for (; s-- > 0; )
    if (n = e[s], r === n.toLowerCase())
      return n;
  return null;
}
const Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ur = (t) => !ye(t) && t !== Ir;
function ut() {
  const { caseless: t } = Ur(this) && this || {}, r = {}, e = (s, n) => {
    const i = t && Br(r, n) || n;
    Te(r[i]) && Te(s) ? r[i] = ut(r[i], s) : Te(s) ? r[i] = ut({}, s) : he(s) ? r[i] = s.slice() : r[i] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && Se(arguments[s], e);
  return r;
}
const Hn = (t, r, e, { allOwnKeys: s } = {}) => (Se(r, (n, i) => {
  e && H(n) ? t[i] = Pr(n, e) : t[i] = n;
}, { allOwnKeys: s }), t), Wn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), zn = (t, r, e, s) => {
  t.prototype = Object.create(r.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: r.prototype
  }), e && Object.assign(t.prototype, e);
}, qn = (t, r, e, s) => {
  let n, i, o;
  const l = {};
  if (r = r || {}, t == null)
    return r;
  do {
    for (n = Object.getOwnPropertyNames(t), i = n.length; i-- > 0; )
      o = n[i], (!s || s(o, t, r)) && !l[o] && (r[o] = t[o], l[o] = !0);
    t = e !== !1 && Ct(t);
  } while (t && (!e || e(t, r)) && t !== Object.prototype);
  return r;
}, Vn = (t, r, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= r.length;
  const s = t.indexOf(r, e);
  return s !== -1 && s === e;
}, Jn = (t) => {
  if (!t)
    return null;
  if (he(t))
    return t;
  let r = t.length;
  if (!Fr(r))
    return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = t[r];
  return e;
}, Kn = /* @__PURE__ */ ((t) => (r) => t && r instanceof t)(typeof Uint8Array < "u" && Ct(Uint8Array)), Yn = (t, r) => {
  const s = (t && t[Symbol.iterator]).call(t);
  let n;
  for (; (n = s.next()) && !n.done; ) {
    const i = n.value;
    r.call(t, i[0], i[1]);
  }
}, Gn = (t, r) => {
  let e;
  const s = [];
  for (; (e = t.exec(r)) !== null; )
    s.push(e);
  return s;
}, Xn = z("HTMLFormElement"), Zn = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, s, n) {
    return s.toUpperCase() + n;
  }
), or = (({ hasOwnProperty: t }) => (r, e) => t.call(r, e))(Object.prototype), Qn = z("RegExp"), $r = (t, r) => {
  const e = Object.getOwnPropertyDescriptors(t), s = {};
  Se(e, (n, i) => {
    let o;
    (o = r(n, i, t)) !== !1 && (s[i] = o || n);
  }), Object.defineProperties(t, s);
}, ei = (t) => {
  $r(t, (r, e) => {
    if (H(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const s = t[e];
    if (H(s)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, ti = (t, r) => {
  const e = {}, s = (n) => {
    n.forEach((i) => {
      e[i] = !0;
    });
  };
  return he(t) ? s(t) : s(String(t).split(r)), e;
}, ri = () => {
}, si = (t, r) => t != null && Number.isFinite(t = +t) ? t : r, tt = "abcdefghijklmnopqrstuvwxyz", ar = "0123456789", Hr = {
  DIGIT: ar,
  ALPHA: tt,
  ALPHA_DIGIT: tt + tt.toUpperCase() + ar
}, ni = (t = 16, r = Hr.ALPHA_DIGIT) => {
  let e = "";
  const { length: s } = r;
  for (; t--; )
    e += r[Math.random() * s | 0];
  return e;
};
function ii(t) {
  return !!(t && H(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const oi = (t) => {
  const r = new Array(10), e = (s, n) => {
    if (Ue(s)) {
      if (r.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        r[n] = s;
        const i = he(s) ? [] : {};
        return Se(s, (o, l) => {
          const d = e(o, n + 1);
          !ye(d) && (i[l] = d);
        }), r[n] = void 0, i;
      }
    }
    return s;
  };
  return e(t, 0);
}, ai = z("AsyncFunction"), li = (t) => t && (Ue(t) || H(t)) && H(t.then) && H(t.catch), f = {
  isArray: he,
  isArrayBuffer: Mr,
  isBuffer: Nn,
  isFormData: Pn,
  isArrayBufferView: jn,
  isString: kn,
  isNumber: Fr,
  isBoolean: On,
  isObject: Ue,
  isPlainObject: Te,
  isReadableStream: Fn,
  isRequest: Bn,
  isResponse: In,
  isHeaders: Un,
  isUndefined: ye,
  isDate: _n,
  isFile: Tn,
  isBlob: Ln,
  isRegExp: Qn,
  isFunction: H,
  isStream: An,
  isURLSearchParams: Mn,
  isTypedArray: Kn,
  isFileList: Dn,
  forEach: Se,
  merge: ut,
  extend: Hn,
  trim: $n,
  stripBOM: Wn,
  inherits: zn,
  toFlatObject: qn,
  kindOf: Be,
  kindOfTest: z,
  endsWith: Vn,
  toArray: Jn,
  forEachEntry: Yn,
  matchAll: Gn,
  isHTMLForm: Xn,
  hasOwnProperty: or,
  hasOwnProp: or,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $r,
  freezeMethods: ei,
  toObjectSet: ti,
  toCamelCase: Zn,
  noop: ri,
  toFiniteNumber: si,
  findKey: Br,
  global: Ir,
  isContextDefined: Ur,
  ALPHABET: Hr,
  generateString: ni,
  isSpecCompliantForm: ii,
  toJSONObject: oi,
  isAsyncFn: ai,
  isThenable: li
};
function S(t, r, e, s, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", r && (this.code = r), e && (this.config = e), s && (this.request = s), n && (this.response = n);
}
f.inherits(S, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Wr = S.prototype, zr = {};
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
  zr[t] = { value: t };
});
Object.defineProperties(S, zr);
Object.defineProperty(Wr, "isAxiosError", { value: !0 });
S.from = (t, r, e, s, n, i) => {
  const o = Object.create(Wr);
  return f.toFlatObject(t, o, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), S.call(o, t.message, r, e, s, n), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const ci = null;
function dt(t) {
  return f.isPlainObject(t) || f.isArray(t);
}
function qr(t) {
  return f.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function lr(t, r, e) {
  return t ? t.concat(r).map(function(n, i) {
    return n = qr(n), !e && i ? "[" + n + "]" : n;
  }).join(e ? "." : "") : r;
}
function ui(t) {
  return f.isArray(t) && !t.some(dt);
}
const di = f.toFlatObject(f, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function $e(t, r, e) {
  if (!f.isObject(t))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = f.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, k) {
    return !f.isUndefined(k[b]);
  });
  const s = e.metaTokens, n = e.visitor || u, i = e.dots, o = e.indexes, d = (e.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(r);
  if (!f.isFunction(n))
    throw new TypeError("visitor must be a function");
  function h(m) {
    if (m === null)
      return "";
    if (f.isDate(m))
      return m.toISOString();
    if (!d && f.isBlob(m))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(m) || f.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, b, k) {
    let _ = m;
    if (m && !k && typeof m == "object") {
      if (f.endsWith(b, "{}"))
        b = s ? b : b.slice(0, -2), m = JSON.stringify(m);
      else if (f.isArray(m) && ui(m) || (f.isFileList(m) || f.endsWith(b, "[]")) && (_ = f.toArray(m)))
        return b = qr(b), _.forEach(function(O, K) {
          !(f.isUndefined(O) || O === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? lr([b], K, i) : o === null ? b : b + "[]",
            h(O)
          );
        }), !1;
    }
    return dt(m) ? !0 : (r.append(lr(k, b, i), h(m)), !1);
  }
  const p = [], w = Object.assign(di, {
    defaultVisitor: u,
    convertValue: h,
    isVisitable: dt
  });
  function v(m, b) {
    if (!f.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      p.push(m), f.forEach(m, function(_, R) {
        (!(f.isUndefined(_) || _ === null) && n.call(
          r,
          _,
          f.isString(R) ? R.trim() : R,
          b,
          w
        )) === !0 && v(_, b ? b.concat(R) : [R]);
      }), p.pop();
    }
  }
  if (!f.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), r;
}
function cr(t) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
    return r[s];
  });
}
function Et(t, r) {
  this._pairs = [], t && $e(t, this, r);
}
const Vr = Et.prototype;
Vr.append = function(r, e) {
  this._pairs.push([r, e]);
};
Vr.toString = function(r) {
  const e = r ? function(s) {
    return r.call(this, s, cr);
  } : cr;
  return this._pairs.map(function(n) {
    return e(n[0]) + "=" + e(n[1]);
  }, "").join("&");
};
function hi(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jr(t, r, e) {
  if (!r)
    return t;
  const s = e && e.encode || hi, n = e && e.serialize;
  let i;
  if (n ? i = n(r, e) : i = f.isURLSearchParams(r) ? r.toString() : new Et(r, e).toString(s), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class ur {
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
  use(r, e, s) {
    return this.handlers.push({
      fulfilled: r,
      rejected: e,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    f.forEach(this.handlers, function(s) {
      s !== null && r(s);
    });
  }
}
const Kr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fi = typeof URLSearchParams < "u" ? URLSearchParams : Et, pi = typeof FormData < "u" ? FormData : null, mi = typeof Blob < "u" ? Blob : null, gi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fi,
    FormData: pi,
    Blob: mi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, St = typeof window < "u" && typeof document < "u", vi = ((t) => St && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), xi = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wi = St && window.location.href || "http://localhost", yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: St,
  hasStandardBrowserEnv: vi,
  hasStandardBrowserWebWorkerEnv: xi,
  origin: wi
}, Symbol.toStringTag, { value: "Module" })), W = {
  ...yi,
  ...gi
};
function bi(t, r) {
  return $e(t, new W.classes.URLSearchParams(), Object.assign({
    visitor: function(e, s, n, i) {
      return W.isNode && f.isBuffer(e) ? (this.append(s, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Ci(t) {
  return f.matchAll(/\w+|\[(\w*)]/g, t).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Ei(t) {
  const r = {}, e = Object.keys(t);
  let s;
  const n = e.length;
  let i;
  for (s = 0; s < n; s++)
    i = e[s], r[i] = t[i];
  return r;
}
function Yr(t) {
  function r(e, s, n, i) {
    let o = e[i++];
    if (o === "__proto__")
      return !0;
    const l = Number.isFinite(+o), d = i >= e.length;
    return o = !o && f.isArray(n) ? n.length : o, d ? (f.hasOwnProp(n, o) ? n[o] = [n[o], s] : n[o] = s, !l) : ((!n[o] || !f.isObject(n[o])) && (n[o] = []), r(e, s, n[o], i) && f.isArray(n[o]) && (n[o] = Ei(n[o])), !l);
  }
  if (f.isFormData(t) && f.isFunction(t.entries)) {
    const e = {};
    return f.forEachEntry(t, (s, n) => {
      r(Ci(s), n, e, 0);
    }), e;
  }
  return null;
}
function Si(t, r, e) {
  if (f.isString(t))
    try {
      return (r || JSON.parse)(t), f.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (e || JSON.stringify)(t);
}
const Re = {
  transitional: Kr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const s = e.getContentType() || "", n = s.indexOf("application/json") > -1, i = f.isObject(r);
    if (i && f.isHTMLForm(r) && (r = new FormData(r)), f.isFormData(r))
      return n ? JSON.stringify(Yr(r)) : r;
    if (f.isArrayBuffer(r) || f.isBuffer(r) || f.isStream(r) || f.isFile(r) || f.isBlob(r) || f.isReadableStream(r))
      return r;
    if (f.isArrayBufferView(r))
      return r.buffer;
    if (f.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let l;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return bi(r, this.formSerializer).toString();
      if ((l = f.isFileList(r)) || s.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return $e(
          l ? { "files[]": r } : r,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || n ? (e.setContentType("application/json", !1), Si(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || Re.transitional, s = e && e.forcedJSONParsing, n = this.responseType === "json";
    if (f.isResponse(r) || f.isReadableStream(r))
      return r;
    if (r && f.isString(r) && (s && !this.responseType || n)) {
      const o = !(e && e.silentJSONParsing) && n;
      try {
        return JSON.parse(r);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? S.from(l, S.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
    FormData: W.classes.FormData,
    Blob: W.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Re.headers[t] = {};
});
const Ri = f.toObjectSet([
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
]), Ni = (t) => {
  const r = {};
  let e, s, n;
  return t && t.split(`
`).forEach(function(o) {
    n = o.indexOf(":"), e = o.substring(0, n).trim().toLowerCase(), s = o.substring(n + 1).trim(), !(!e || r[e] && Ri[e]) && (e === "set-cookie" ? r[e] ? r[e].push(s) : r[e] = [s] : r[e] = r[e] ? r[e] + ", " + s : s);
  }), r;
}, dr = Symbol("internals");
function we(t) {
  return t && String(t).trim().toLowerCase();
}
function Le(t) {
  return t === !1 || t == null ? t : f.isArray(t) ? t.map(Le) : String(t);
}
function ji(t) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = e.exec(t); )
    r[s[1]] = s[2];
  return r;
}
const ki = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function rt(t, r, e, s, n) {
  if (f.isFunction(s))
    return s.call(this, r, e);
  if (n && (r = e), !!f.isString(r)) {
    if (f.isString(s))
      return r.indexOf(s) !== -1;
    if (f.isRegExp(s))
      return s.test(r);
  }
}
function Oi(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, s) => e.toUpperCase() + s);
}
function _i(t, r) {
  const e = f.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + e, {
      value: function(n, i, o) {
        return this[s].call(this, r, n, i, o);
      },
      configurable: !0
    });
  });
}
class I {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, s) {
    const n = this;
    function i(l, d, h) {
      const u = we(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = f.findKey(n, u);
      (!p || n[p] === void 0 || h === !0 || h === void 0 && n[p] !== !1) && (n[p || d] = Le(l));
    }
    const o = (l, d) => f.forEach(l, (h, u) => i(h, u, d));
    if (f.isPlainObject(r) || r instanceof this.constructor)
      o(r, e);
    else if (f.isString(r) && (r = r.trim()) && !ki(r))
      o(Ni(r), e);
    else if (f.isHeaders(r))
      for (const [l, d] of r.entries())
        i(d, l, s);
    else
      r != null && i(e, r, s);
    return this;
  }
  get(r, e) {
    if (r = we(r), r) {
      const s = f.findKey(this, r);
      if (s) {
        const n = this[s];
        if (!e)
          return n;
        if (e === !0)
          return ji(n);
        if (f.isFunction(e))
          return e.call(this, n, s);
        if (f.isRegExp(e))
          return e.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, e) {
    if (r = we(r), r) {
      const s = f.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!e || rt(this, this[s], s, e)));
    }
    return !1;
  }
  delete(r, e) {
    const s = this;
    let n = !1;
    function i(o) {
      if (o = we(o), o) {
        const l = f.findKey(s, o);
        l && (!e || rt(s, s[l], l, e)) && (delete s[l], n = !0);
      }
    }
    return f.isArray(r) ? r.forEach(i) : i(r), n;
  }
  clear(r) {
    const e = Object.keys(this);
    let s = e.length, n = !1;
    for (; s--; ) {
      const i = e[s];
      (!r || rt(this, this[i], i, r, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(r) {
    const e = this, s = {};
    return f.forEach(this, (n, i) => {
      const o = f.findKey(s, i);
      if (o) {
        e[o] = Le(n), delete e[i];
        return;
      }
      const l = r ? Oi(i) : String(i).trim();
      l !== i && delete e[i], e[l] = Le(n), s[l] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const e = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (s, n) => {
      s != null && s !== !1 && (e[n] = r && f.isArray(s) ? s.join(", ") : s);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, e]) => r + ": " + e).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...e) {
    const s = new this(r);
    return e.forEach((n) => s.set(n)), s;
  }
  static accessor(r) {
    const s = (this[dr] = this[dr] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(o) {
      const l = we(o);
      s[l] || (_i(n, o), s[l] = !0);
    }
    return f.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
I.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(I.prototype, ({ value: t }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(s) {
      this[e] = s;
    }
  };
});
f.freezeMethods(I);
function st(t, r) {
  const e = this || Re, s = r || e, n = I.from(s.headers);
  let i = s.data;
  return f.forEach(t, function(l) {
    i = l.call(e, i, n.normalize(), r ? r.status : void 0);
  }), n.normalize(), i;
}
function Gr(t) {
  return !!(t && t.__CANCEL__);
}
function fe(t, r, e) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, r, e), this.name = "CanceledError";
}
f.inherits(fe, S, {
  __CANCEL__: !0
});
function Xr(t, r, e) {
  const s = e.config.validateStatus;
  !e.status || !s || s(e.status) ? t(e) : r(new S(
    "Request failed with status code " + e.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Ti(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return r && r[1] || "";
}
function Li(t, r) {
  t = t || 10;
  const e = new Array(t), s = new Array(t);
  let n = 0, i = 0, o;
  return r = r !== void 0 ? r : 1e3, function(d) {
    const h = Date.now(), u = s[i];
    o || (o = h), e[n] = d, s[n] = h;
    let p = i, w = 0;
    for (; p !== n; )
      w += e[p++], p = p % t;
    if (n = (n + 1) % t, n === i && (i = (i + 1) % t), h - o < r)
      return;
    const v = u && h - u;
    return v ? Math.round(w * 1e3 / v) : void 0;
  };
}
function Di(t, r) {
  let e = 0;
  const s = 1e3 / r;
  let n = null;
  return function() {
    const o = this === !0, l = Date.now();
    if (o || l - e > s)
      return n && (clearTimeout(n), n = null), e = l, t.apply(null, arguments);
    n || (n = setTimeout(() => (n = null, e = Date.now(), t.apply(null, arguments)), s - (l - e)));
  };
}
const Pe = (t, r, e = 3) => {
  let s = 0;
  const n = Li(50, 250);
  return Di((i) => {
    const o = i.loaded, l = i.lengthComputable ? i.total : void 0, d = o - s, h = n(d), u = o <= l;
    s = o;
    const p = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: d,
      rate: h || void 0,
      estimated: h && l && u ? (l - o) / h : void 0,
      event: i,
      lengthComputable: l != null
    };
    p[r ? "download" : "upload"] = !0, t(p);
  }, e);
}, Ai = W.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), e = document.createElement("a");
    let s;
    function n(i) {
      let o = i;
      return r && (e.setAttribute("href", o), o = e.href), e.setAttribute("href", o), {
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
    return s = n(window.location.href), function(o) {
      const l = f.isString(o) ? n(o) : o;
      return l.protocol === s.protocol && l.host === s.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Pi = W.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, r, e, s, n, i) {
      const o = [t + "=" + encodeURIComponent(r)];
      f.isNumber(e) && o.push("expires=" + new Date(e).toGMTString()), f.isString(s) && o.push("path=" + s), f.isString(n) && o.push("domain=" + n), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
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
function Mi(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Fi(t, r) {
  return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
}
function Zr(t, r) {
  return t && !Mi(r) ? Fi(t, r) : r;
}
const hr = (t) => t instanceof I ? { ...t } : t;
function te(t, r) {
  r = r || {};
  const e = {};
  function s(h, u, p) {
    return f.isPlainObject(h) && f.isPlainObject(u) ? f.merge.call({ caseless: p }, h, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u;
  }
  function n(h, u, p) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(h))
        return s(void 0, h, p);
    } else
      return s(h, u, p);
  }
  function i(h, u) {
    if (!f.isUndefined(u))
      return s(void 0, u);
  }
  function o(h, u) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(h))
        return s(void 0, h);
    } else
      return s(void 0, u);
  }
  function l(h, u, p) {
    if (p in r)
      return s(h, u);
    if (p in t)
      return s(void 0, h);
  }
  const d = {
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
    headers: (h, u) => n(hr(h), hr(u), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, t, r)), function(u) {
    const p = d[u] || n, w = p(t[u], r[u], u);
    f.isUndefined(w) && p !== l || (e[u] = w);
  }), e;
}
const Qr = (t) => {
  const r = te({}, t);
  let { data: e, withXSRFToken: s, xsrfHeaderName: n, xsrfCookieName: i, headers: o, auth: l } = r;
  r.headers = o = I.from(o), r.url = Jr(Zr(r.baseURL, r.url), t.params, t.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let d;
  if (f.isFormData(e)) {
    if (W.hasStandardBrowserEnv || W.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((d = o.getContentType()) !== !1) {
      const [h, ...u] = d ? d.split(";").map((p) => p.trim()).filter(Boolean) : [];
      o.setContentType([h || "multipart/form-data", ...u].join("; "));
    }
  }
  if (W.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(r)), s || s !== !1 && Ai(r.url))) {
    const h = n && i && Pi.read(i);
    h && o.set(n, h);
  }
  return r;
}, Bi = typeof XMLHttpRequest < "u", Ii = Bi && function(t) {
  return new Promise(function(e, s) {
    const n = Qr(t);
    let i = n.data;
    const o = I.from(n.headers).normalize();
    let { responseType: l } = n, d;
    function h() {
      n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let u = new XMLHttpRequest();
    u.open(n.method.toUpperCase(), n.url, !0), u.timeout = n.timeout;
    function p() {
      if (!u)
        return;
      const v = I.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), b = {
        data: !l || l === "text" || l === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: t,
        request: u
      };
      Xr(function(_) {
        e(_), h();
      }, function(_) {
        s(_), h();
      }, b), u = null;
    }
    "onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, u.onabort = function() {
      u && (s(new S("Request aborted", S.ECONNABORTED, n, u)), u = null);
    }, u.onerror = function() {
      s(new S("Network Error", S.ERR_NETWORK, n, u)), u = null;
    }, u.ontimeout = function() {
      let m = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const b = n.transitional || Kr;
      n.timeoutErrorMessage && (m = n.timeoutErrorMessage), s(new S(
        m,
        b.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        n,
        u
      )), u = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in u && f.forEach(o.toJSON(), function(m, b) {
      u.setRequestHeader(b, m);
    }), f.isUndefined(n.withCredentials) || (u.withCredentials = !!n.withCredentials), l && l !== "json" && (u.responseType = n.responseType), typeof n.onDownloadProgress == "function" && u.addEventListener("progress", Pe(n.onDownloadProgress, !0)), typeof n.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Pe(n.onUploadProgress)), (n.cancelToken || n.signal) && (d = (v) => {
      u && (s(!v || v.type ? new fe(null, t, u) : v), u.abort(), u = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const w = Ti(n.url);
    if (w && W.protocols.indexOf(w) === -1) {
      s(new S("Unsupported protocol " + w + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    u.send(i || null);
  });
}, Ui = (t, r) => {
  let e = new AbortController(), s;
  const n = function(d) {
    if (!s) {
      s = !0, o();
      const h = d instanceof Error ? d : this.reason;
      e.abort(h instanceof S ? h : new fe(h instanceof Error ? h.message : h));
    }
  };
  let i = r && setTimeout(() => {
    n(new S(`timeout ${r} of ms exceeded`, S.ETIMEDOUT));
  }, r);
  const o = () => {
    t && (i && clearTimeout(i), i = null, t.forEach((d) => {
      d && (d.removeEventListener ? d.removeEventListener("abort", n) : d.unsubscribe(n));
    }), t = null);
  };
  t.forEach((d) => d && d.addEventListener && d.addEventListener("abort", n));
  const { signal: l } = e;
  return l.unsubscribe = o, [l, () => {
    i && clearTimeout(i), i = null;
  }];
}, $i = function* (t, r) {
  let e = t.byteLength;
  if (!r || e < r) {
    yield t;
    return;
  }
  let s = 0, n;
  for (; s < e; )
    n = s + r, yield t.slice(s, n), s = n;
}, Hi = async function* (t, r, e) {
  for await (const s of t)
    yield* $i(ArrayBuffer.isView(s) ? s : await e(String(s)), r);
}, fr = (t, r, e, s, n) => {
  const i = Hi(t, r, n);
  let o = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(l) {
      const { done: d, value: h } = await i.next();
      if (d) {
        l.close(), s();
        return;
      }
      let u = h.byteLength;
      e && e(o += u), l.enqueue(new Uint8Array(h));
    },
    cancel(l) {
      return s(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, pr = (t, r) => {
  const e = t != null;
  return (s) => setTimeout(() => r({
    lengthComputable: e,
    total: t,
    loaded: s
  }));
}, He = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", es = He && typeof ReadableStream == "function", ht = He && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (r) => t.encode(r))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Wi = es && (() => {
  let t = !1;
  const r = new Request(W.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !r;
})(), mr = 64 * 1024, ft = es && !!(() => {
  try {
    return f.isReadableStream(new Response("").body);
  } catch {
  }
})(), Me = {
  stream: ft && ((t) => t.body)
};
He && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !Me[r] && (Me[r] = f.isFunction(t[r]) ? (e) => e[r]() : (e, s) => {
      throw new S(`Response type '${r}' is not supported`, S.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const zi = async (t) => {
  if (t == null)
    return 0;
  if (f.isBlob(t))
    return t.size;
  if (f.isSpecCompliantForm(t))
    return (await new Request(t).arrayBuffer()).byteLength;
  if (f.isArrayBufferView(t))
    return t.byteLength;
  if (f.isURLSearchParams(t) && (t = t + ""), f.isString(t))
    return (await ht(t)).byteLength;
}, qi = async (t, r) => {
  const e = f.toFiniteNumber(t.getContentLength());
  return e ?? zi(r);
}, Vi = He && (async (t) => {
  let {
    url: r,
    method: e,
    data: s,
    signal: n,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: l,
    onUploadProgress: d,
    responseType: h,
    headers: u,
    withCredentials: p = "same-origin",
    fetchOptions: w
  } = Qr(t);
  h = h ? (h + "").toLowerCase() : "text";
  let [v, m] = n || i || o ? Ui([n, i], o) : [], b, k;
  const _ = () => {
    !b && setTimeout(() => {
      v && v.unsubscribe();
    }), b = !0;
  };
  let R;
  try {
    if (d && Wi && e !== "get" && e !== "head" && (R = await qi(u, s)) !== 0) {
      let q = new Request(r, {
        method: "POST",
        body: s,
        duplex: "half"
      }), Y;
      f.isFormData(s) && (Y = q.headers.get("content-type")) && u.setContentType(Y), q.body && (s = fr(q.body, mr, pr(
        R,
        Pe(d)
      ), null, ht));
    }
    f.isString(p) || (p = p ? "cors" : "omit"), k = new Request(r, {
      ...w,
      signal: v,
      method: e.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: s,
      duplex: "half",
      withCredentials: p
    });
    let O = await fetch(k);
    const K = ft && (h === "stream" || h === "response");
    if (ft && (l || K)) {
      const q = {};
      ["status", "statusText", "headers"].forEach((Ne) => {
        q[Ne] = O[Ne];
      });
      const Y = f.toFiniteNumber(O.headers.get("content-length"));
      O = new Response(
        fr(O.body, mr, l && pr(
          Y,
          Pe(l, !0)
        ), K && _, ht),
        q
      );
    }
    h = h || "text";
    let ne = await Me[f.findKey(Me, h) || "text"](O, t);
    return !K && _(), m && m(), await new Promise((q, Y) => {
      Xr(q, Y, {
        data: ne,
        headers: I.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: t,
        request: k
      });
    });
  } catch (O) {
    throw _(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, k),
      {
        cause: O.cause || O
      }
    ) : S.from(O, O && O.code, t, k);
  }
}), pt = {
  http: ci,
  xhr: Ii,
  fetch: Vi
};
f.forEach(pt, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: r });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: r });
  }
});
const gr = (t) => `- ${t}`, Ji = (t) => f.isFunction(t) || t === null || t === !1, ts = {
  getAdapter: (t) => {
    t = f.isArray(t) ? t : [t];
    const { length: r } = t;
    let e, s;
    const n = {};
    for (let i = 0; i < r; i++) {
      e = t[i];
      let o;
      if (s = e, !Ji(e) && (s = pt[(o = String(e)).toLowerCase()], s === void 0))
        throw new S(`Unknown adapter '${o}'`);
      if (s)
        break;
      n[o || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(n).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = r ? i.length > 1 ? `since :
` + i.map(gr).join(`
`) : " " + gr(i[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: pt
};
function nt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new fe(null, t);
}
function vr(t) {
  return nt(t), t.headers = I.from(t.headers), t.data = st.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ts.getAdapter(t.adapter || Re.adapter)(t).then(function(s) {
    return nt(t), s.data = st.call(
      t,
      t.transformResponse,
      s
    ), s.headers = I.from(s.headers), s;
  }, function(s) {
    return Gr(s) || (nt(t), s && s.response && (s.response.data = st.call(
      t,
      t.transformResponse,
      s.response
    ), s.response.headers = I.from(s.response.headers))), Promise.reject(s);
  });
}
const rs = "1.7.2", Rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, r) => {
  Rt[t] = function(s) {
    return typeof s === t || "a" + (r < 1 ? "n " : " ") + t;
  };
});
const xr = {};
Rt.transitional = function(r, e, s) {
  function n(i, o) {
    return "[Axios v" + rs + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, l) => {
    if (r === !1)
      throw new S(
        n(o, " has been removed" + (e ? " in " + e : "")),
        S.ERR_DEPRECATED
      );
    return e && !xr[o] && (xr[o] = !0, console.warn(
      n(
        o,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(i, o, l) : !0;
  };
};
function Ki(t, r, e) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let n = s.length;
  for (; n-- > 0; ) {
    const i = s[n], o = r[i];
    if (o) {
      const l = t[i], d = l === void 0 || o(l, i, t);
      if (d !== !0)
        throw new S("option " + i + " must be " + d, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const mt = {
  assertOptions: Ki,
  validators: Rt
}, G = mt.validators;
class ee {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new ur(),
      response: new ur()
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
  async request(r, e) {
    try {
      return await this._request(r, e);
    } catch (s) {
      if (s instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(r, e) {
    typeof r == "string" ? (e = e || {}, e.url = r) : e = r || {}, e = te(this.defaults, e);
    const { transitional: s, paramsSerializer: n, headers: i } = e;
    s !== void 0 && mt.assertOptions(s, {
      silentJSONParsing: G.transitional(G.boolean),
      forcedJSONParsing: G.transitional(G.boolean),
      clarifyTimeoutError: G.transitional(G.boolean)
    }, !1), n != null && (f.isFunction(n) ? e.paramsSerializer = {
      serialize: n
    } : mt.assertOptions(n, {
      encode: G.function,
      serialize: G.function
    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let o = i && f.merge(
      i.common,
      i[e.method]
    );
    i && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), e.headers = I.concat(o, i);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(e) === !1 || (d = d && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(b) {
      h.push(b.fulfilled, b.rejected);
    });
    let u, p = 0, w;
    if (!d) {
      const m = [vr.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, h), w = m.length, u = Promise.resolve(e); p < w; )
        u = u.then(m[p++], m[p++]);
      return u;
    }
    w = l.length;
    let v = e;
    for (p = 0; p < w; ) {
      const m = l[p++], b = l[p++];
      try {
        v = m(v);
      } catch (k) {
        b.call(this, k);
        break;
      }
    }
    try {
      u = vr.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, w = h.length; p < w; )
      u = u.then(h[p++], h[p++]);
    return u;
  }
  getUri(r) {
    r = te(this.defaults, r);
    const e = Zr(r.baseURL, r.url);
    return Jr(e, r.params, r.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(r) {
  ee.prototype[r] = function(e, s) {
    return this.request(te(s || {}, {
      method: r,
      url: e,
      data: (s || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(r) {
  function e(s) {
    return function(i, o, l) {
      return this.request(te(l || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  ee.prototype[r] = e(), ee.prototype[r + "Form"] = e(!0);
});
class Nt {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(i) {
      e = i;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners)
        return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const o = new Promise((l) => {
        s.subscribe(l), i = l;
      }).then(n);
      return o.cancel = function() {
        s.unsubscribe(i);
      }, o;
    }, r(function(i, o, l) {
      s.reason || (s.reason = new fe(i, o, l), e(s.reason));
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
    const e = this._listeners.indexOf(r);
    e !== -1 && this._listeners.splice(e, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Nt(function(n) {
        r = n;
      }),
      cancel: r
    };
  }
}
function Yi(t) {
  return function(e) {
    return t.apply(null, e);
  };
}
function Gi(t) {
  return f.isObject(t) && t.isAxiosError === !0;
}
const gt = {
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
Object.entries(gt).forEach(([t, r]) => {
  gt[r] = t;
});
function ss(t) {
  const r = new ee(t), e = Pr(ee.prototype.request, r);
  return f.extend(e, ee.prototype, r, { allOwnKeys: !0 }), f.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(n) {
    return ss(te(t, n));
  }, e;
}
const A = ss(Re);
A.Axios = ee;
A.CanceledError = fe;
A.CancelToken = Nt;
A.isCancel = Gr;
A.VERSION = rs;
A.toFormData = $e;
A.AxiosError = S;
A.Cancel = A.CanceledError;
A.all = function(r) {
  return Promise.all(r);
};
A.spread = Yi;
A.isAxiosError = Gi;
A.mergeConfig = te;
A.AxiosHeaders = I;
A.formToJSON = (t) => Yr(f.isHTMLForm(t) ? new FormData(t) : t);
A.getAdapter = ts.getAdapter;
A.HttpStatusCode = gt;
A.default = A;
class Xi {
  constructor() {
  }
  logout() {
    this.clear();
  }
  clearList(r, e) {
    try {
      r && r.length > 0 && r.forEach((s) => {
        localStorage.removeItem(s.key);
      }), e(!0);
    } catch {
      e(!1);
    }
  }
  get(r) {
    return localStorage.getItem(r);
  }
  saveList(r, e) {
    try {
      r && r.length > 0 && r.forEach((s) => {
        localStorage.setItem(s.key, s.value.toString());
      }), e(!0);
    } catch {
      e(!1);
    }
  }
  clear() {
    localStorage.clear();
  }
  remove(r) {
    localStorage.removeItem(r);
  }
  save(r, e) {
    localStorage.setItem(r, e);
  }
  getCookie(r) {
    let e = null;
    if (document.cookie && document.cookie !== "") {
      const s = document.cookie.split(";");
      for (let n = 0; n < s.length; n++) {
        const i = s[n].trim();
        if (i.substring(0, r.length + 1) === r + "=") {
          e = decodeURIComponent(i.substring(r.length + 1));
          break;
        }
      }
    }
    return e;
  }
}
const re = new Xi(), it = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd"
}, jt = ({
  children: t,
  onClickOutside: r,
  focusEvent: e = "focusin",
  mouseEvent: s = "click",
  touchEvent: n = "touchend"
}) => {
  const i = Ze(null), o = Ze(null), l = Ze(!1);
  Zt(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const d = (v) => (m) => {
    o.current = m.target;
    const b = t == null ? void 0 : t.props[v];
    b && b(m);
  }, h = (v) => {
    i.current = v;
    let { ref: m } = t;
    typeof m == "function" ? m(v) : m && (m.current = v);
  };
  Zt(() => {
    var b;
    const v = ((b = i.current) == null ? void 0 : b.ownerDocument) ?? document, m = (k) => {
      l.current && (i.current && i.current.contains(k.target) || o.current === k.target || !v.contains(k.target) || r(k));
    };
    return v.addEventListener(s, m), v.addEventListener(n, m), v.addEventListener(e, m), () => {
      v.removeEventListener(s, m), v.removeEventListener(n, m), v.removeEventListener(e, m);
    };
  }, [e, s, r, n]);
  const u = it[s], p = it[n], w = it[e];
  return J.Children.only(
    Ms(t, {
      ref: h,
      [w]: d(w),
      [u]: d(u),
      [p]: d(p)
    })
  );
};
jt.displayName = "DesmyClickOutsideListener";
class ns extends ue {
  constructor(e) {
    super(e);
    x(this, "popoverDropdownRef");
    x(this, "btnDropdownRef");
    x(this, "searchRef");
    x(this, "handleChange", (e) => {
      const s = { ...this.state.input };
      s[e.target.name] = e.target.value, this.setState({
        input: s
      });
    });
    x(this, "handleRequestData", () => {
      const e = this.props.request;
      if (e !== void 0 && !C.isEmptyOrNull(e.url) && this.state.requestUrl !== e.url) {
        this.setState({ requestUrl: e.url, isLoading: !0 }, this.fetch);
        return;
      }
    });
    x(this, "handleSelectedMultiple", async (e) => {
      try {
        const { data: s } = this.props;
        return !s || !Array.isArray(e) ? [] : e.map((i) => i.id !== void 0 ? i : i.id === void 0 ? void 0 : i.find((l) => l.id === this.handleEncrypt(i))).filter((i) => i !== void 0);
      } catch {
        return [];
      }
    });
    x(this, "handleDefault", async () => {
      try {
        const e = this.props.data !== void 0 && this.props.data !== null ? this.props.data : this.state.datalist;
        if (e.length > 0 && this.props.defaultValue !== void 0 && this.props.defaultValue !== null)
          if (!(this.props.is_multiple === void 0 || this.props.is_multiple === !1)) {
            const n = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue], i = e.filter(
              (o) => n.some((l) => (l == null ? void 0 : l.id) === o.id || C.toString(l) === C.toString(o.id))
            );
            i !== void 0 && this.props.handleChange !== void 0 && this.setState({ selectedMultiple: i, hasLoaded: !0 }, () => {
              this.props.handleChange !== void 0 && this.props.handleChange(i);
            });
          } else {
            const n = Array.isArray(this.props.defaultValue) ? this.props.defaultValue[0] : this.props.defaultValue, i = e.find((o) => {
              if (typeof n == "object" && n !== null) {
                if (C.toString(o.id).toLowerCase() === C.toString(n == null ? void 0 : n.id).toLowerCase())
                  return o;
              } else if (C.toString(o.id).toLowerCase() === C.toString(n).toLowerCase() || C.toString(o.name).toLowerCase() === C.toString(n).toLowerCase())
                return o;
            });
            if (i !== void 0 && this.props.handleChange !== void 0) {
              const o = this.handleEncrypt(i == null ? void 0 : i.id), l = {
                selectedList: {
                  id: C.isEmptyOrNull(o) ? i == null ? void 0 : i.id : o,
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
      } catch (e) {
        console.log(e);
      }
    });
    x(this, "handleEncrypt", (e) => {
      if (this.props.enableDecrypt) {
        const s = C.toString(e);
        return C.isEmptyOrNull(s) ? e : s;
      } else
        return e;
    });
    x(this, "handleDelayedProcess", () => {
      setTimeout(() => {
        this.handleProcess();
      }, 1e3);
    });
    x(this, "handleProcess", () => {
      this.handleDefault();
    });
    x(this, "fetch", async () => {
      const { request: e } = this.props, { error: s } = this.state, n = e == null ? void 0 : e.token;
      s.state = !1, this.setState({ isLoading: !0, error: s });
      try {
        const o = (await A.get((e == null ? void 0 : e.url) ?? "", {
          headers: {
            "X-CSRFToken": `${re.getCookie("csrftoken")}`,
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
    x(this, "handleError", (e = "") => {
      try {
        const { error: s } = this.state, n = {
          ...s,
          state: !0,
          message: e
        };
        this.setState({ isLoading: !1, error: n });
      } catch (s) {
        console.error("Error occurred while handling error:", s);
      }
    });
    x(this, "onClear", () => {
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
    x(this, "openDropdownPopover", () => {
      this.props.disabled !== void 0 && this.props.disabled || (new Fe(this.btnDropdownRef.current, this.popoverDropdownRef.current, {
        placement: "bottom-start"
      }), this.setState({ dropdownPopoverShow: !0 }, () => {
        this.searchRef.current && this.searchRef.current.focus();
      }));
    });
    x(this, "removeItem", (e, s, n) => {
      if (n === void 0)
        return e;
      for (let i = 0; i < e.length; i++)
        if (e[i][s] === n) {
          e.splice(i, 1);
          break;
        }
      return e;
    });
    x(this, "handleSearch", (e, s) => {
      try {
        return e.find((n) => n.id === s);
      } catch {
        return !1;
      }
    });
    x(this, "handleSelectMessage", (e) => {
      try {
        return e == null ? "" : e.map((s) => this.handleEncrypt(s.name)).join(", ");
      } catch {
        return "";
      }
    });
    x(this, "deleteItems", (e) => this.state.selectedMultiple.filter((n) => n.id !== e));
    x(this, "handleSelectedItem", (e, s) => {
      e.preventDefault();
      const n = !(this.props.is_multiple === void 0 || this.props.is_multiple === !1);
      let { selectedMultiple: i } = this.state;
      n ? this.state.selectedMultiple.find((l) => l.id === s.id) ? (i = this.deleteItems(s.id), this.setState({ selectedMultiple: i, clear: !1 }), this.props.handleChange && this.props.handleChange(i)) : (i.push(s), this.setState({ selectedMultiple: i, clear: !1 }), this.props.handleChange && this.props.handleChange(i)) : this.setState({ selectedList: s, clear: !1 }), this.props.handleDropdownChange !== void 0 ? this.props.handleDropdownChange(n ? i : s, this.props.type) : this.props.handleChange !== void 0 && this.props.handleChange(n ? i : s), n || this.closeDropdownPopover(), this.handleClearSearch();
    });
    x(this, "handleClearSearch", () => {
      const { input: e } = this.state;
      e.search = "", this.setState({ input: e });
    });
    x(this, "handleClickAway", () => {
      this.closeDropdownPopover();
    });
    x(this, "handleClearSelected", () => {
      const e = this.props.is_multiple !== void 0 && this.props.is_multiple ? [] : {};
      this.setState({ selectedMultiple: [], selectedList: { id: "", name: null, icon: null, data: null }, clear: !0 }, this.handleClickAway), this.props.handleChange && this.props.handleChange(e);
    });
    x(this, "closeDropdownPopover", () => {
      this.setState({ dropdownPopoverShow: !1 });
    });
    this.popoverDropdownRef = J.createRef(), this.btnDropdownRef = J.createRef(), this.searchRef = J.createRef(), this.state = {
      dropdownPopoverShow: !1,
      selectedList: { id: "", name: null, icon: null, data: null },
      selectedMultiple: [],
      datalist: [],
      intervalId: 0,
      hasLoaded: !1,
      isLoading: !1,
      clear: !1,
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
  componentDidUpdate(e, s) {
    if (s.isLoading, !C.isEmptyOrNull(this.props.defaultValue) && !this.state.hasLoaded && this.props.data !== void 0 && this.props.data !== null && this.handleDefault(), this.props.request !== void 0 && this.handleRequestData(), Array.isArray(e.selectedData))
      e.selectedData.length > 0 && this.state.selectedMultiple.length === 0 && !this.state.clear && this.handleSelectedMultiple(e.selectedData).then((n) => {
        this.setState({ selectedMultiple: n }), this.handleSelectedMultiple(n), this.props.handleChange && this.props.handleChange(n);
      }).catch((n) => {
        console.log(n);
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
      if (!C.isEmptyOrNull(e.url)) {
        this.setState({ isLoading: !0, requestUrl: e.url }, () => {
          this.fetch().then(() => {
          });
        });
        return;
      }
    } else
      this.handleDefault();
    const s = this.props.data || [];
    this.setState({ datalist: s }, () => {
      this.handleDelayedProcess();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(jt, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ a.jsxs("div", { className: `flex flex-col w-full font-poppinsRegular ${this.props.containerClassName != null ? this.props.containerClassName : "bg-white dark:bg-darkBackground"}`, children: [
      /* @__PURE__ */ a.jsx("div", { className: `bg-inherit ${this.props.className} cursor-pointer `, ref: this.btnDropdownRef, onClick: () => {
        this.state.dropdownPopoverShow ? this.closeDropdownPopover() : this.openDropdownPopover();
      }, children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full h-12  bg-inherit relative border-[1px] border-black dark:border-white", children: /* @__PURE__ */ a.jsxs("div", { className: `absolute bottom-0 ${(this.props.showPlaceHolderHint === void 0 || this.props.showPlaceHolderHint !== !1) && (this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0) ? "bg-inherit" : ""} px-2 pb-3 left-0 right-0`, children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex bg-inherit ", children: /* @__PURE__ */ a.jsx("div", { className: "flex text-[11px]  line-clamp-1  px-1 -mt-6 bg-inherit dark:text-white items-center", children: (this.props.showPlaceHolderHint === void 0 || this.props.showPlaceHolderHint !== !1) && (this.props.placeholder != null && (this.state.selectedList.name != null || this.state.selectedMultiple.length > 0) || this.props.all !== void 0) ? this.props.placeholder : "" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ a.jsx("div", { className: `mr-2 bg-inherit text-black text-sm dark:text-white w-full justify-start text-start line-clamp-1  ${this.props.selectedRef}`, children: this.props.is_multiple != null && this.props.is_multiple && this.state.selectedMultiple.length > 0 ? this.handleSelectMessage(this.state.selectedMultiple) : C.isEmptyOrNull(this.state.selectedList.name) ? /* @__PURE__ */ a.jsx("div", { className: "w-full line-clamp-1", children: this.props.all !== void 0 ? `${this.props.all}` : C.isEmptyOrNull(this.props.placeholder) ? null : this.props.placeholder }) : /* @__PURE__ */ a.jsxs("span", { className: "flex w-full line-clamp-1 text-start justify-start", title: `${this.handleEncrypt(this.state.selectedList.name)}`, children: [
            C.isEmptyOrNull(this.state.selectedList.icon) ? "" : /* @__PURE__ */ a.jsx("img", { className: "object-fill w-4 h-4 mr-2 items-center text-start justify-start", alt: "image", src: `${this.handleEncrypt(this.state.selectedList.icon)}` }),
            /* @__PURE__ */ a.jsx("div", { className: "w-full line-clamp-1 justify-start text-start", children: this.handleEncrypt(this.state.selectedList.name) })
          ] }) }),
          this.props.disabled !== void 0 && this.props.disabled ? null : /* @__PURE__ */ a.jsx("div", { children: this.state.dropdownPopoverShow ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z", clipRule: "evenodd" }) }) : /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 dark:text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
        ] })
      ] }) }) }),
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
              this.props.all !== void 0 ? /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass} ${this.state.selectedMultiple.length == 0 ? " font-poppinsBold" : "font-normal"} `,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ a.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6", children: [
                      "  ",
                      this.props.all
                    ] })
                  ]
                }
              ) : null,
              this.props.onClear !== void 0 ? /* @__PURE__ */ a.jsxs(
                "div",
                {
                  className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap dark:hover:bg-white dark:hover:text-black ${this.props.dropdownListClass}`,
                  onClick: this.handleClearSelected,
                  children: [
                    /* @__PURE__ */ a.jsx("div", { className: "mr-2" }),
                    /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap dark:text-white overflow-hidden h-6", children: [
                      "  ",
                      this.props.onClear
                    ] })
                  ]
                }
              ) : null,
              this.state.datalist.length != 0 ? this.state.datalist.filter((e) => C.toString(this.handleEncrypt(e.name)).toLowerCase().includes(this.state.input.search.toLowerCase())).map((e, s) => {
                var n = this.handleSearch(this.state.selectedMultiple, e.id);
                return /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: `flex text-sm py-2 px-4 font-normal cursor-pointer w-full whitespace-no-wrap  dark:hover:bg-white dark:hover:text-black transition duration-500 ease-in-out dark:text-white ${this.props.dropdownListClass} ${this.props.is_multiple != null && this.props.is_multiple ? n ? " font-poppinsBold" : "font-normal" : C.toString(this.state.selectedList.id) == C.toString(e.id) ? " font-poppinsBold" : "font-normal"} `,
                    onClick: (i) => this.handleSelectedItem(i, e),
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "mr-2", children: C.isEmptyOrNull(e.icon) ? "" : /* @__PURE__ */ a.jsx("img", { className: "object-fill w-4 h-4", alt: "image", src: `${this.handleEncrypt(e.icon)}` }) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-maxlines whitespace-no-wrap overflow-hidden h-6", children: [
                        "  ",
                        this.handleEncrypt(e.name)
                      ] }),
                      n ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z", clipRule: "evenodd" }) }) : this.props.is_multiple ? /* @__PURE__ */ a.jsx("svg", { fill: "currentColor", viewBox: "0 0 16 16", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { d: "M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" }) }) : null
                    ]
                  },
                  `${s}`
                );
              }) : null
            ] }) }) }),
            this.props.is_multiple !== void 0 && this.props.is_multiple ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full mt-4", children: /* @__PURE__ */ a.jsx("div", { onClick: () => this.handleClickAway(), className: "flex px-3 py-3 w-full text-black text-center justify-center rounded uppercase mx-2 cursor-pointer text-xs border border-gray-800 bg-white font-poppinsSemiBold", children: "Done" }) }) : null
          ]
        }
      ) }) : null
    ] }) }) });
  }
}
class Zi extends J.Component {
  constructor(e) {
    super(e);
    x(this, "handleDataChange", (e) => {
      const s = this.state.datalist.is_multiple !== void 0 ? Array.isArray(e) && e.length > 0 ? e.map((n) => n.id) : [] : e;
      this.setState({ data_value: s });
    });
    x(this, "handleValueChange", (e) => {
      try {
        const { data: s } = this.state;
        s.start_date = e.startDate, s.end_date = e.endDate, this.setState({ data: s, value: e });
      } catch {
      }
    });
    x(this, "handleClose", (e) => {
      try {
        this.props.settings.loading && e && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const s = { ...this.state.data, status: e };
        this.props.settings.datalist !== void 0 && (s.option_data = this.state.data_value), C.isEmptyOrNull(this.state.input.user_input) || (s.user_input = this.state.input.user_input), this.props.onClose(s);
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
          let e = { ...this.state.value }, s = { ...this.state.data };
          e.startDate = this.props.data.start_date, e.endDate = this.props.data.end_date, this.setState({ value: e, data: s });
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
    } catch (e) {
      console.log(e);
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
        /* @__PURE__ */ a.jsx("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col w-full my-5", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full", children: this.props.children }),
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full relative", children: e.datalist != null && (!C.isEmptyOrNull(e.datalist.url) || e.datalist.data != null) && e.datalist.data.length > 0 ? /* @__PURE__ */ a.jsx(
            ns,
            {
              data: e.datalist.data != null ? e.datalist.data : [],
              request: {
                url: `${C.isEmptyOrNull(e.datalist.url) ? "" : e.datalist.url}`
              },
              selectedData: this.state.data_value,
              defaultValue: e.datalist.default_value,
              handleChange: this.handleDataChange,
              is_multiple: e.datalist.is_multiple !== void 0 ? e.datalist.is_multiple : !1,
              containerClassName: "bg-inherit",
              enableDecrypt: e.datalist.encrypted !== void 0 ? e.datalist.encrypted : !1,
              placeholder: `${e.datalist.title}`
            }
          ) : null })
        ] }) }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ a.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ a.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        e.btnPosition != null && e.btnPosition !== void 0 && !C.isEmptyOrNull(e.btnPosition) ? /* @__PURE__ */ a.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: e.btnPosition
          }
        ) }) : null,
        e.btnNegative != null && e.btnNegative !== void 0 && !C.isEmptyOrNull(e.btnNegative) ? /* @__PURE__ */ a.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ a.jsx(
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
class Qi extends J.Component {
  constructor(e) {
    super(e);
    x(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: D.ERROR,
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
      const e = { ...this.state.settings }, s = this.props.settings;
      s.title !== void 0 && (e.title = s.title), s.forceLoading !== void 0 && (e.forceLoading = s.forceLoading), s.hint !== void 0 && (e.hint = s.hint), s.handleOnClose !== void 0 && (e.handleOnClose = s.handleOnClose), s.btnPosition !== void 0 && (e.btnPosition = s.btnPosition), s.btnNegative !== void 0 && (e.btnNegative = s.btnNegative), s.type !== void 0 && (e.type = s.type), s.loading !== void 0 && (e.loading = s.loading), s.loadinghint !== void 0 && (e.loadinghint = s.loadinghint), s.showDateRange !== void 0 && (e.showDateRange = s.showDateRange), s.date !== void 0 && (e.date = s.date), s.time !== void 0 && (e.time = s.time), s.showDateRangeTitle !== void 0 && (e.showDateRangeTitle = s.showDateRangeTitle), s.inputFieldLabel !== void 0 && (e.inputFieldLabel = s.inputFieldLabel), s.zIndex !== void 0 && (e.zIndex = s.zIndex), s.datalist !== void 0 && (e.datalist = s.datalist), this.setState({ settings: e, loaded: !0 });
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
      /* @__PURE__ */ a.jsx(Zi, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children })
    ] }) }) }) });
    return wr.createPortal(e, this.modalContainer);
  }
}
class oo extends ue {
  constructor(e) {
    super(e);
    x(this, "handleClose", () => {
      this.props.onClose();
    });
    this.state = {
      modal: null
    };
  }
  render() {
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.modal,
      /* @__PURE__ */ a.jsx("div", { className: "fixed z-[3000] inset-0 overflow-y-hidden bg-white/75 dark:bg-darkBackground/75 md:bg-transparent", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-lg top-0 overflow-hidden right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center h-[calc(100vh-160px)] overflow-auto justify-center min-h-screen px-4 pt-20 md:pt-4 pb-20 text-center sm:block sm:p-0", children: [
        /* @__PURE__ */ a.jsx("div", { className: "fixed w-full h-full inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute px-4 xl:px-0 inset-0 bg-transparent md:bg-white/75 md:dark:bg-darkBackground/75 dark:text-white w-full h-full", children: /* @__PURE__ */ a.jsxs("div", { className: "hidden md:flex md:container mx-auto my-10 px-10 text-start uppercase justify-between font-poppinsBlack text-2xl 2xl:text-4xl", children: [
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
        /* @__PURE__ */ a.jsxs("div", { className: "inline-block align-bottom min-h-96 font-poppinsRegular dark:text-white px-4 pt-5 pb-0 text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl w-full sm:p-2", children: [
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
class ao extends ue {
  constructor(e) {
    super(e);
    x(this, "componentDidUpdate", async (e, s) => {
      try {
        const n = C.toStringDefault(this.props.defaultValue, ""), i = C.toStringDefault(this.props.type, D.TEXT), { input: o } = this.state;
        if (i === D.EMAIL ? C.isEmptyOrNull(i) && C.isEmptyOrNull(o.data) && n !== o.data && (o.data = n, this.setState({ input: o })) : n !== o.data && (o.data = n, this.setState({ input: o })), e.defaultValue !== s.input.data)
          return !1;
      } catch {
      }
    });
    x(this, "handleChange", (e) => {
      try {
        const s = this.state.input, n = C.toStringDefault(this.props.type, D.TEXT), i = e.target.value;
        n === D.PHONE ? /^[0-9+]*$/.test(i) && (s[e.target.name] = i, this.setState({ input: s }, () => {
          this.props.onChange(i);
        })) : n === D.NUMBER ? /^[0-9]*$/.test(i) && (s[e.target.name] = i, this.setState({ input: s }, () => {
          this.props.onChange(i);
        })) : (s[e.target.name] = i, this.setState({ input: s }, () => {
          if (n === D.EMAIL) {
            const o = C.toStringDefault(this.props.emailExtension, ""), l = i;
            if (C.validateEmail(l)) {
              if (C.isEmptyOrNull(o)) {
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
      input: {
        data: C.toStringDefault(this.props.defaultValue, "")
      }
    };
  }
  componentDidMount() {
    try {
      this.props.onRef && this.props.onRef(this);
    } catch {
    }
  }
  render() {
    return /* @__PURE__ */ a.jsx("div", { className: `${this.props.className !== void 0 ? this.props.className : "bg-white dark:bg-darkBackground"}`, children: /* @__PURE__ */ a.jsxs("div", { className: "relative bg-inherit", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          id: "data",
          name: "data",
          autoFocus: this.props.autoFocus ? this.props.autoFocus : !1,
          value: this.state.input.data,
          onChange: this.handleChange,
          className: `peer bg-transparent h-12 border border-black dark:border-white  dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`,
          placeholder: `${this.props.label}`
        }
      ),
      /* @__PURE__ */ a.jsx("label", { htmlFor: "data", className: "before:content[' '] after:content[' ']  pointer-events-none absolute cursor-text left-0 -top-3.5  text-[11px] dark:text-white bg-inherit mx-1 px-2 peer-placeholder-shown:text-sm  dark:peer-placeholder-shown:text-white peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-[11px] transition-all", children: this.props.label })
    ] }) });
  }
}
const eo = ({ charLimit: t, children: r }) => {
  const e = r, [s, n] = Fs(!0), i = () => {
    n(!s);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "text", children: [
    e.length <= t ? e : s ? e.slice(0, t) : e,
    e.length > t && /* @__PURE__ */ a.jsx("span", { onClick: i, className: "read-or-hide font-bold", children: s ? "...read more" : " show less" })
  ] });
};
class to extends ue {
  constructor(e) {
    super(e);
    x(this, "header");
    x(this, "status");
    x(this, "handleDelete", () => {
      const e = {
        title: "Confirmation!",
        btnPosition: "delete",
        btnNegative: "cancel",
        type: D.NOTICE,
        // Providing default value
        loading: !1,
        // Providing default valuez\\
        forceLoading: !1,
        // Providing default value
        loadinghint: "",
        // Providing default value
        showDateRange: !1,
        // Providing default value
        date: {
          // Providing default value
          show: !1,
          minDate: null,
          title: "",
          value: {
            startDate: null,
            endDate: null
          }
        },
        time: {
          // Providing default value
          show: !1,
          value: "",
          title: ""
        },
        datalist: {
          // Providing default value
          title: "",
          url: "",
          data: [],
          default_value: ""
        }
      }, s = (i) => {
        let o = { ...this.state.request };
        o.delete || (o.delete = i.status, i.status && (this.handleDeleteRequest(), this.props.error({})), this.setState({ request: o, modal: void 0 }));
      }, n = /* @__PURE__ */ a.jsx(Qi, { settings: e, onClose: s, children: /* @__PURE__ */ a.jsxs("div", { className: "w-full py-2 text-sm", children: [
        "Are you sure you want to delete",
        /* @__PURE__ */ a.jsxs("span", { className: "text-primary dark:text-white ml-1 font-poppinsBold", children: [
          this.props.user[this.props.settings.deleteinfo.name],
          "?"
        ] })
      ] }) });
      this.setState({ modal: n });
    });
    x(this, "handleError", (e = "") => {
      try {
        let s = { ...this.state.request }, n = { ...this.state.error }, i = C.isEmptyOrNull(e) ? "Error Message" : e;
        s.delete = !1, n.state = !0, n.message = i, n.type = "Error", n.color = "red", this.setState({ request: s }), this.props.error(n);
      } catch {
      }
    });
    x(this, "handleDeleteRequest", () => {
      try {
        let e = { ...this.state.error };
        e.state = !1, A.get(`${this.props.settings.request_url}/${this.props.user[this.props.settings.deleteinfo.id]}/delete/`, {
          headers: {
            "X-CSRFToken": `${re.getCookie("csrftoken")}`,
            Authorization: `Token ${re.get(D.ACCESS_TOKEN)}`
          }
        }).then(
          (s) => {
            s.data.success ? (e.state = !1, this.props.handleOnSuccess(this.props.index)) : this.handleError(s.data.message);
          },
          (s) => {
            this.handleError();
          }
        ).catch((s) => {
          this.handleError();
        });
      } catch {
        this.handleError();
      }
    });
    x(this, "handleEdit", () => {
      this.state.request.delete || this.props.handleEdit(this.props.user);
    });
    x(this, "onImageClick", (e) => {
    });
    x(this, "extra_handle", () => this.props.settings.extra_handle ? this.props.settings.extra_handle.find((e) => e.name === this.header) : !1);
    this.state = {
      stateList: [D.APPROVED, D.ACTIVE, D.RUNNING, D.IN_PROGRESS],
      imageExtensions: ["jpg", "jpeg", "png", "svg"],
      imgColumnTypes: ["picture", "photo"],
      title: "",
      header: "",
      request: { delete: !1 },
      error: { state: !1, message: "", type: D.ERROR, color: "" },
      isLoading: !1
    }, this.header = "", this.status = "";
  }
  async componentDidMount() {
    let e = this.props.user, s = this.props.acces_key, n = this.props.headers, i = e[n[s]];
    this.header = C.toString(n[s]).toLowerCase(), this.status = e.status, this.setState({ title: C.toString(i) });
  }
  render() {
    var o, l;
    const e = /* @__PURE__ */ a.jsx("span", { className: "text-blue-800 dark:text-blue-300 cursor-pointer flex-col", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) }) }), s = /* @__PURE__ */ a.jsx("span", { className: "text-red-800 dark:text-red-300 cursor-pointer", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) }), n = /* @__PURE__ */ a.jsx("span", { className: "text-black dark:text-white cursor-pointer ", children: /* @__PURE__ */ a.jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
      /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
    ] }) }), i = C.isEmptyOrNull(this.state.title) && this.props.settings.image !== void 0 ? this.props.settings.image.placeholder : this.state.title;
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.modal,
      this.props.exceptional_columns.includes(this.header) || this.extra_handle() ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full justify-center items-center", children: this.header === "edit" ? /* @__PURE__ */ a.jsx("span", { onClick: () => this.handleEdit(), children: e }) : this.header === "view" ? /* @__PURE__ */ a.jsx("span", { onClick: () => this.props.settings.handleOnViewClick(this.props.user), children: n }) : this.header === "delete" && this.state.request.delete ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "flex w-4 h-4 text-black dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ a.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "#E5E7EB" }),
        /* @__PURE__ */ a.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentColor" })
      ] }) : /* @__PURE__ */ a.jsx("span", { onClick: () => this.handleDelete(), children: s }) }) : this.header.toLowerCase() === "status" ? /* @__PURE__ */ a.jsx("div", { className: `w-full text-xs 2xl:text-sm rounded-full border ${this.state.stateList.includes(this.status) ? "bg-green-400 text-green-700 border-green-500" : "bg-red-400 text-red-700 border-red-500"} text-xs py-0.5 justify-center text-center items-center`, children: this.status }) : this.state.imgColumnTypes.includes(((o = this.header) == null ? void 0 : o.toLowerCase()) || "") || this.state.imageExtensions.includes(((l = this.state.title) == null ? void 0 : l.toLowerCase().split(".").pop()) || "") ? /* @__PURE__ */ a.jsx("div", { className: "w-8 ml-3", children: /* @__PURE__ */ a.jsx("img", { onClick: () => this.onImageClick(this.state.title), title: "View photo", className: `object-center object-cover w-6 h-6 2xl:w-8 2xl:h-8 ${this.props.settings.image == null || this.props.settings.image.rounded == !1 ? "" : "rounded-full"} cursor-pointer mx-auto`, alt: "photo", src: i }) }) : /* @__PURE__ */ a.jsx("span", { className: "text-xs 2xl:text-sm px-4 py-2 flex items-center", children: /* @__PURE__ */ a.jsx(eo, { charLimit: this.props.settings.read_more_limit !== void 0 ? this.props.settings.read_more_limit : 50, children: this.state.title }) })
    ] });
  }
}
class ro extends J.Component {
  constructor(e) {
    super(e);
    x(this, "modalContainer");
    x(this, "handleClose", (e) => {
      try {
        this.props.settings.loading && e && this.setState({ isLoading: !0 });
        const s = { ...this.state.data, status: e, filters: this.state.filter };
        this.props.onClose(s);
      } catch {
      }
    });
    x(this, "handleDataChange", (e, s) => {
      try {
        const n = this.state.filter.is_multiple ? s.length > 0 ? s.map((i) => i.id) : [] : s;
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
    const { settings: e } = this.state, s = /* @__PURE__ */ a.jsx("div", { className: "fixed z-[3000] inset-0 overflow-y-auto", children: /* @__PURE__ */ a.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ a.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ a.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col lg:-ml-2 w-full", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left items-center", children: [
            e.title && !C.isEmptyOrNull(e.title) && /* @__PURE__ */ a.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-md uppercase xl:text-base mt-1.5 ${e.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"} font-poppinsBold`, children: e.title }),
            e.hint && !C.isEmptyOrNull(e.hint) && /* @__PURE__ */ a.jsx("div", { className: `flex w-full justify-center items-center text-start lg:justify-start text-sm mt-1.5 ${e.type === "ERROR" ? "text-red-600" : "text-gray-900 dark:text-white"}`, children: e.hint }),
            /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full my-5", children: e.filter && e.filter.data.map((n, i) => /* @__PURE__ */ a.jsx("div", { className: "flex w-full relative", children: /* @__PURE__ */ a.jsx(
              ns,
              {
                data: n.data,
                selectedData: this.state.settings.data_value,
                defaultValue: n.defaults,
                onClear: "None",
                handleChange: (o) => this.handleDataChange(n.name, o),
                is_multiple: e.filter.is_multiple,
                dropdownClass: "bg-white text-black",
                enableDecrypt: e.filter.encrypted,
                placeholder: `By ${C.convertUnderscoreToSpaceString(n.name)}`,
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
    return wr.createPortal(s, this.modalContainer);
  }
}
class lo extends ue {
  constructor(e) {
    super(e);
    x(this, "renderedSettings", []);
    x(this, "dataCollection", []);
    x(this, "chunkSize");
    x(this, "currentIndex");
    x(this, "hasClear");
    x(this, "isLoading");
    x(this, "hasLoadLastData");
    x(this, "current_page");
    x(this, "search");
    x(this, "filterloaded");
    x(this, "componentDidUpdate", async (e, s) => {
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
    x(this, "errors", (e) => {
      this.setState({ alerterror: e });
    });
    x(this, "handleReset", () => {
      this.setState({ alerterror: { state: !1, message: "", type: D.ERROR, color: "" } });
    });
    x(this, "handleError", (e = "") => {
      try {
        var s = this.state.error, n = this.state.input;
        n.is_searching = !1, s.state = !0, s.message = C.isEmptyOrNull(e) ? D.ERROR_MESSAGE : e, s.type = D.ERROR, s.color = "red", this.setState({ isLoading: !1, error: s, input: n });
      } catch (i) {
        console.error(i);
      }
    });
    x(this, "tableHeads", () => {
      let e;
      return this.state.custom_settings.order === "asc" ? e = /* @__PURE__ */ a.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15l7-7 7 7" }) }) : e = /* @__PURE__ */ a.jsx("svg", { className: "w-3 h-3 2xl:w-4 2xl:h-4 dark:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }), this.props.settings.headers.map((s, n) => {
        var l;
        const i = this.state.exceptionalColumns.includes(s.toLowerCase()), o = (l = this.state.settings.table_data) == null ? void 0 : l.find((d) => d.name === s.toLowerCase());
        return /* @__PURE__ */ a.jsx("th", { onClick: () => this.sortByColumn(this.props.settings.columns[n]), className: `py-2 sticky ${i ? "w-4" : o ? o.class : ""}  top-0 border-b border-gray-200 text-xs 2xl:text-sm bg-gray-100 dark:border-gray-700 dark:bg-darkPrimary`, children: /* @__PURE__ */ a.jsxs("div", { className: "flex dark:text-white sticky top-0 px-6 py-2 2xl:py-3 text-gray-600 font-poppinsSemiBold tracking-wider uppercase text-xs", children: [
          /* @__PURE__ */ a.jsx("span", { children: this.columnHead(s) }),
          /* @__PURE__ */ a.jsx("span", { children: this.state.custom_settings.sorted_column === this.props.settings.columns[n] && e })
        ] }) }, n);
      });
    });
    x(this, "handleClear", () => {
      let e = this.state.input, s = this.state.entities;
      var n = this.state.error;
      n.state = !1, e.is_searching = !1, s.meta.total = 0, this.setState({ input: e }), this.dataCollection = [], this.renderedSettings = [], this.currentIndex = 0, this.current_page = 0, this.forceUpdate(), this.setState({ entities: s, error: n });
    });
    x(this, "clearFetchEntities", () => {
      let e = this.state.custom_settings;
      e.current_page = 1, this.handleClear(), this.setState({ custom_settings: e }, this.fetchEntities);
    });
    x(this, "handleSearch", (e) => {
      let s = this.state.input;
      (e.key === "Enter" || e.keyCode === 13) && !C.isEmptyOrNull(s.search) && s.search.length > 2 && (s.is_searching = !0, this.search = s.search, this.setState({ input: s }, this.clearFetchEntities));
    });
    x(this, "searchFilter", async (e) => {
      let s = this.state.input;
      Object.entries(e.search).length > 0 && (s.is_searching = !0, this.setState({ filters: e, input: s }, this.clearFetchEntities));
    });
    x(this, "handleInput", (e) => {
      const { value: s } = e.target;
      this.setState((n) => ({
        input: {
          ...n.input,
          search: s
        }
      }));
    });
    x(this, "loadNextPage", () => {
      try {
        if (!this.isLoading) {
          let e = this.state.custom_settings, s = this.state.entities.meta.next_page;
          !C.isEmptyOrNull(s) && this.current_page !== s && (e.current_page = s ?? 1, this.current_page = s ?? 1, this.setState({ isLoading: !0, custom_settings: e }, () => {
            this.fetchEntities();
          }));
        }
      } catch {
      }
    });
    x(this, "onChangeValue", (e) => {
      try {
        this.search = e.target.value, C.isEmptyOrNull(this.search) && !this.state.input.is_searching && this.handleSearhing();
      } catch (s) {
        console.error(s);
      }
    });
    x(this, "handleKeyDown", (e) => {
      try {
        e.key === "Enter" && !C.isEmptyOrNull(this.search) && this.handleSearhing();
      } catch (s) {
        console.error(s);
      }
    });
    x(this, "loadNextBatch", () => {
      try {
        this.renderChunk(), this.forceUpdate(), this.currentIndex += this.chunkSize, this.isLoading = !1;
      } catch {
      }
    });
    x(this, "removeFilterByName", (e) => {
      try {
        const s = { ...this.state.filters }, n = { ...this.state.filters.search };
        delete n[e], s.search = n;
        const i = this.state.filterhead.filter((l) => l.name !== e), o = this.state.filters.data.map((l) => {
          if (l.name === e) {
            const { defaults: d, ...h } = l;
            return h;
          }
          return l;
        });
        s.data = o, this.handleClear(), this.setState({ filterhead: i, filters: s }, this.fetchEntities);
      } catch (s) {
        console.error(s);
      }
    });
    x(this, "handleFiltered", () => {
      var d;
      const { settings: e } = this.props, { filters: s } = this.state, n = (h) => {
        if (h.status) {
          const u = { ...s }, p = [];
          u.search = h.filters, Object.entries(h.filters).map(([w, v]) => {
            p.push({ name: w, data: v.name });
          }), u.data = s.data.map((w) => {
            const v = h.filters[w.name];
            return {
              name: w.name,
              data: w.data,
              defaults: v !== void 0 ? v : {}
            };
          }), this.handleClear(), this.setState({ filterhead: p, filters: u }, this.fetchEntities);
        }
        this.setState({ dtablemodal: null, hasRequest: !1 });
      }, o = {
        title: (d = {
          ...e,
          filter: {
            ...e.filter,
            data: this.state.filters.data
          }
        }.filter) == null ? void 0 : d.title,
        type: D.NOTICE,
        datalist: this.state.filters,
        btnPosition: "Continue",
        btnNegative: "Cancel"
      }, l = /* @__PURE__ */ a.jsx(ro, { settings: o, onClose: n });
      this.setState({ dtablemodal: l });
    });
    x(this, "handleRetry", () => {
      try {
        this.handleClear();
        let e = this.state.custom_settings;
        e.current_page = 1, this.setState({ isLoading: !0, error: {}, custom_settings: e }, this.fetchEntities);
      } catch {
      }
    });
    x(this, "handleHint", () => {
      try {
        return this.state.settings.header.hint ? this.state.settings.header.hint : this.state.error.state ? "" : "Loaded " + this.state.entities.meta.total + " data";
      } catch {
        return this.state.error.state ? "" : "Loaded 0 data";
      }
    });
    x(this, "handleOnSuccess", (e) => {
      this.renderedSettings.splice(e, 1), this.dataCollection.splice(e, 1);
      let s = this.state.entities;
      s.meta.total = this.renderedSettings.length, this.renderedSettings.length == 0 && this.handleClear(), this.forceUpdate();
    });
    x(this, "handleEdit", (e) => {
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
        type: D.ERROR,
        color: ""
      },
      alerterror: {
        state: !1,
        message: "",
        type: D.ERROR,
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
    const s = e.target;
    s.scrollTop + s.clientHeight >= s.scrollHeight - 10 && this.loadNextPage();
  }
  async fetchEntities() {
    try {
      let e = [], s = "";
      this.state.filters.search !== void 0 && this.state.filters.search !== null && Object.entries(this.state.filters.search).length > 0 && (Object.entries(this.state.filters.search).map(([o, l]) => C.isEmptyOrNull(l.id) ? null : e.push(`${o}=${l.id}`)), s = `&${e.join("&")}`);
      let n = this.state.entities, i = `${this.props.settings.url}/?page=${this.state.custom_settings.current_page}&column=${this.state.custom_settings.sorted_column}&order=${this.state.custom_settings.order}&per_page=${this.state.entities.meta.per_page}&search=${this.search}${s}`;
      A.get(i, {
        headers: {
          "X-CSRFToken": `${re.getCookie("csrftoken")}`,
          Authorization: `Token ${re.get(D.ACCESS_TOKEN)}`
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
    let s = e.split("_");
    return s.length > 1 && this.state.exceptionalColumns.includes(C.toString(s.slice(-1)).toString().toLowerCase()) ? s.slice(0, -1).join(" ").toUpperCase() : s.join(" ").toUpperCase();
  }
  sortByColumn(e) {
    try {
      var s = this.state.custom_settings, n = e === this.state.custom_settings.sorted_column && this.state.custom_settings.order === "asc" ? "desc" : "asc";
      this.handleClear(), s.current_page = 1, s.sorted_column = e, s.order = n, this.setState({ isLoading: !0, error: {}, custom_settings: s }, this.fetchEntities);
    } catch (i) {
      console.error(i);
    }
  }
  initialChunck() {
    this.loadNextBatch();
  }
  renderChunk() {
    try {
      const e = this.state.settings.headers, s = this.currentIndex + this.chunkSize > this.dataCollection.length ? this.dataCollection.length : this.currentIndex + this.chunkSize;
      for (let n = this.currentIndex; n < s; n++) {
        const i = this.dataCollection[n];
        let o = this.state.selected === n ? " bg-gray-300 dark:bg-darkPrimary" : n % 2 === 0 ? " dark:bg-[#1c1c1c] bg-[#f3f4f6] " : " bg-inherit";
        if (i !== void 0) {
          const l = /* @__PURE__ */ a.jsx("tr", { className: `${o} cursor-pointer text-gray-700  dark:text-white dark:hover:text-black hover:bg-gray-300 dark:hover:bg-white  transition duration-500 ease-in-out`, children: Object.keys(e).map((d, h) => /* @__PURE__ */ a.jsx("td", { className: "px-3 justify-content-center flex-wrap", children: /* @__PURE__ */ a.jsx(
            to,
            {
              index: n,
              handleOnSuccess: this.handleOnSuccess,
              acces_key: parseInt(d, 10),
              error: this.errors,
              handleEdit: () => this.props.settings.handleEdit(i),
              settings: this.props.settings,
              exceptional_columns: this.state.exceptionalColumns,
              user: i,
              headers: e
            },
            `dtaw${d}${this.search}`
          ) }, `trex${h}`)) }, n);
          this.renderedSettings.push(l);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  handleSearhing() {
    let e = this.state.custom_settings, s = this.state.input;
    e.current_page = 1, s.is_searching = !0, this.hasClear = !0, this.setState({ custom_settings: e, input: s }, () => {
      this.fetchEntities();
    });
  }
  render() {
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.state.dtablemodal,
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full mb-5", children: /* @__PURE__ */ a.jsxs("header", { className: "flex w-full flex-col lg:flex-row justify-start lg:justify-between items-center", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-col w-full lg:w-auto", children: this.state.settings.header !== void 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex w-full flex-col", children: [
            /* @__PURE__ */ a.jsx("h3", { className: `${this.state.settings.header !== void 0 ? C.isEmptyOrNull(this.state.settings.header.class) ? " text-grey-darkest uppercase text-3xl 2xl:text-5xl dark:text-white font-poppinsBlack" : this.state.settings.header.class : ""}`, children: this.state.settings.header.title }),
            /* @__PURE__ */ a.jsx("div", { className: "text-grey font-thin text-xs 2xl:text-sm dark:text-white", children: this.handleHint() })
          ] }) : null }),
          /* @__PURE__ */ a.jsx("div", { className: "flex w-full lg:max-w-2xl flex-col lg:items-end justify-start lg:justify-end", children: /* @__PURE__ */ a.jsx("div", { className: "flex flex-col lg:items-end justify-start lg:justify-end ", children: /* @__PURE__ */ a.jsx("div", { className: "flex items-center w-full lg:max-w-md justify-start lg:justify-end mt-5 lg:mt-0", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full text-grey font-thin text-sm dark:text-white", children: [
            /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex w-full relative", children: [
              /* @__PURE__ */ a.jsx("input", { className: "rounded lg:rounded-full w-full py-3 px-4 dark:focus:border-white dark:focus:ring-0 text-gray-700 text-xs 2xl:text-sm leading-tight border focus:outline-none focus:border-transparent focus:ring-0  bg-inherit dark:text-white", name: "search", onChange: this.onChangeValue, onKeyDown: this.handleKeyDown, id: "search", type: "text", placeholder: "Search" }),
              this.state.input.is_searching && !C.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsxs("svg", { role: "status", className: "inline absolute top-2.5 bottom-0 right-2 w-4 h-4 2xl:w-6 2xl:h-6 text-primary dark:text-white animate-spin", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
        /* @__PURE__ */ a.jsx("div", { className: `scrollable_table flex flex-col min-h-[200px] ${this.renderedSettings.length > 10 ? "h-[calc(100vh-160px)]" : "h-auto"} overflow-auto  scrollbar-width`, onScroll: this.handleScroll, children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col ", children: [
          /* @__PURE__ */ a.jsx("div", { children: this.state.filterhead.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "flex w-full overflow-x-auto mb-2 space-x-4", children: this.state.filterhead.map((e, s) => C.isEmptyOrNull(e.data) ? null : /* @__PURE__ */ a.jsxs("div", { className: "flex flex-shrink-0 text-sm relative pl-4 pr-6 py-2 rounded-none border-[1px] border-gray-200 bg-gray-50", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex mr-2", children: [
              C.capitalizeEachWord(C.convertUnderscoreToSpaceString(e.name)),
              ":"
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "flex font-poppinsSemiBold", children: e.data }),
            /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 512 512", fill: "currentColor", className: "absolute right-1 top-2 bottom-1 cursor-pointer w-4 h-4 2xl:w-5 2xl:h-5", onClick: () => this.removeFilterByName(e.name), children: /* @__PURE__ */ a.jsx("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32, d: "M368 368L144 144M368 144L144 368" }) })
          ] }, `flter=${s}`)) }) : null }),
          /* @__PURE__ */ a.jsxs("table", { children: [
            /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsx("tr", { className: "text-sm", children: this.tableHeads() }) }),
            /* @__PURE__ */ a.jsx("tbody", { children: this.state.error.state ? null : this.renderedSettings })
          ] }),
          !this.state.isLoading && (!this.dataCollection.length || this.state.error.state) ? /* @__PURE__ */ a.jsxs("div", { className: `flex flex-col w-full h-96 justify-center ${this.state.error.state ? "text-red-500" : "dark:text-white"} space-y-5 items-center text-base`, children: [
            this.state.error.state ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" }) }) : C.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }) }) : /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-10 h-10", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" }) }),
            /* @__PURE__ */ a.jsx("div", { className: "flex w-full text-sm justify-center text-center", children: this.state.error.state ? this.state.error.message : C.isEmptyOrNull(this.search) ? "No data available to show" : /* @__PURE__ */ a.jsx("span", { className: " font-poppinsSemiBold", children: " Sorry we couldn't find anything!" }) }),
            C.isEmptyOrNull(this.search) ? /* @__PURE__ */ a.jsx("div", { onClick: () => this.handleRetry(), className: `uppercase flex font-poppinsSemiBold ${this.state.error.state ? "bg-red-400 text-red-700" : ""} px-6 py-2 cursor-pointer rounded-full my-4`, children: this.state.error.state ? "RETRY" : "REFRESH" }) : null
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
class co extends J.Component {
  constructor(r) {
    super(r);
  }
  render() {
    return /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: this.props.onClick,
        disabled: this.props.hasRequest,
        className: "text-xs px-6 py-4 uppercase text-white bg-primary hover:bg-primary/75 dark:bg-darkPrimary dark:hover:bg-white dark:hover:text-black rounded-full cursor-pointer  transition duration-500 ease-in-out",
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
        ] }) : /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
          this.props.icon,
          /* @__PURE__ */ a.jsx("span", { children: this.props.label })
        ] })
      }
    );
  }
}
class uo extends ue {
  constructor(e) {
    super(e);
    x(this, "toggleDropdown", () => {
      try {
        (this.props.request.isEnable === void 0 || this.props.request.isEnable) && this.setState((e) => ({
          isOpen: !e.isOpen
        }));
      } catch (e) {
        console.error(e);
      }
    });
    x(this, "componentDidMount", async () => {
      this.setState({ isLoading: !0 }, this.fetch);
    });
    x(this, "fetch", async () => {
      const { serverRequest: e, url: s, list: n } = this.props.request;
      if (e)
        try {
          const o = (await A.get(s, {
            headers: {
              "X-CSRFToken": `${re.getCookie("csrftoken")}`,
              Authorization: `Token ${re.get(D.ACCESS_TOKEN)}`
            }
          })).data;
          o.success ? this.setState({ datalist: o.data, isLoading: !1 }) : this.handleAlert();
        } catch {
          this.handleAlert();
        }
      else
        n && this.setState({ datalist: n, isLoading: !1 });
    });
    x(this, "handleOnSelect", (e) => {
      this.setState({ isOpen: !1 }, () => {
        this.props.request.onSelect(e);
      });
    });
    x(this, "handleClickAway", () => {
      this.setState({ isOpen: !1 });
    });
    x(this, "handleAlert", (e) => {
      this.setState({ isLoading: !1 });
    });
    this.state = {
      isOpen: !1,
      datalist: [],
      isLoading: !1
    };
  }
  render() {
    return /* @__PURE__ */ a.jsx(jt, { onClickOutside: this.handleClickAway, children: /* @__PURE__ */ a.jsxs("div", { className: "inline-block text-left dropdown font-poppinsRegular dark:text-white", children: [
      /* @__PURE__ */ a.jsx("span", { className: "rounded-md shadow-sm", children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `${this.props.className}`,
          onClick: this.toggleDropdown,
          "aria-expanded": this.state.isOpen ? "true" : "false",
          children: this.props.children
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `${this.state.isOpen ? "opacity-100 visible" : "opacity-0 invisible"} dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-20 mt-3`,
          children: /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `absolute flex flex-col w-72 min-h-24 -top-5 lg:min-w-96 lg:max-w-96 mt-2 py-3 max-h-96 overflow-auto origin-top-right bg-white dark:bg-darkPrimary  border border-[#e5e7eb] dark:border-[#1a1a1a] divide-y dark:divide-[#1a1a1a] divide-[#f3f4f6]  rounded-md shadow-sm outline-none ${this.props.dropdownClassName}`,
              children: this.state.isLoading ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : this.state.datalist.map((e, s) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "px-4 py-3 text-sm cursor-pointer hover:bg-gray-100  dark:hover:bg-white dark:hover:text-black transition ease-in-out duration-150",
                  onClick: () => this.handleOnSelect(e),
                  children: e.name
                },
                `piexmxx${s}`
              ))
            }
          )
        }
      )
    ] }) });
  }
}
export {
  re as DesmyAuth,
  co as DesmyButton,
  jt as DesmyClickOutsideListener,
  C as DesmyCommons,
  lo as DesmyDataTable,
  ns as DesmyDropdown,
  oo as DesmyModalContainer,
  Qi as DesmyModalHandler,
  uo as DesmyPopupMenu,
  eo as DesmyReadMoreOrLess,
  ao as DesmyTextInput
};
//# sourceMappingURL=index.es.js.map
