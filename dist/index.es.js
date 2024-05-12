var gt = Object.defineProperty;
var yt = (h, n, r) => n in h ? gt(h, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[n] = r;
var U = (h, n, r) => (yt(h, typeof n != "symbol" ? n + "" : n, r), r);
import B, { useRef as ae, useEffect as ke, cloneElement as bt } from "react";
import xt from "react-dom";
var se = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Rt() {
  if (Ne)
    return Y;
  Ne = 1;
  var h = B, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(_, p, j) {
    var g, T = {}, S = null, x = null;
    j !== void 0 && (S = "" + j), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (x = p.ref);
    for (g in p)
      a.call(p, g) && !s.hasOwnProperty(g) && (T[g] = p[g]);
    if (_ && _.defaultProps)
      for (g in p = _.defaultProps, p)
        T[g] === void 0 && (T[g] = p[g]);
    return { $$typeof: n, type: _, key: S, ref: x, props: T, _owner: c.current };
  }
  return Y.Fragment = r, Y.jsx = b, Y.jsxs = b, Y;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function wt() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var h = B, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), _ = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), R = Symbol.iterator, P = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = R && e[R] || e[P];
      return typeof t == "function" ? t : null;
    }
    var F = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        Le("error", e, i);
      }
    }
    function Le(e, t, i) {
      {
        var o = F.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (t += "%s", i = i.concat([f]));
        var m = i.map(function(u) {
          return String(u);
        });
        m.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var Me = !1, Ie = !1, $e = !1, We = !1, Ue = !1, le;
    le = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || Ue || e === c || e === j || e === g || We || e === x || Me || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ze(e, t, i) {
      var o = e.displayName;
      if (o)
        return o;
      var f = t.displayName || t.name || "";
      return f !== "" ? i + "(" + f + ")" : i;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case c:
          return "StrictMode";
        case j:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return ue(t) + ".Consumer";
          case b:
            var i = e;
            return ue(i._context) + ".Provider";
          case p:
            return ze(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : O(e.type) || "Memo";
          case S: {
            var f = e, m = f._payload, u = f._init;
            try {
              return O(u(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ce, fe, de, me, he, pe, ve;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Be() {
      {
        if (I === 0) {
          ce = console.log, fe = console.info, de = console.warn, me = console.error, he = console.group, pe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ve() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ce
            }),
            info: k({}, e, {
              value: fe
            }),
            warn: k({}, e, {
              value: de
            }),
            error: k({}, e, {
              value: me
            }),
            group: k({}, e, {
              value: he
            }),
            groupCollapsed: k({}, e, {
              value: pe
            }),
            groupEnd: k({}, e, {
              value: ve
            })
          });
        }
        I < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = F.ReactCurrentDispatcher, X;
    function V(e, t, i) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            X = o && o[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, J;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Je();
    }
    function ye(e, t) {
      if (!e || H)
        return "";
      {
        var i = J.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      H = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = q.current, q.current = null, Be();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              o = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              o = C;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            o = C;
          }
          e();
        }
      } catch (C) {
        if (C && o && typeof C.stack == "string") {
          for (var l = C.stack.split(`
`), E = o.stack.split(`
`), v = l.length - 1, y = E.length - 1; v >= 1 && y >= 0 && l[v] !== E[y]; )
            y--;
          for (; v >= 1 && y >= 0; v--, y--)
            if (l[v] !== E[y]) {
              if (v !== 1 || y !== 1)
                do
                  if (v--, y--, y < 0 || l[v] !== E[y]) {
                    var D = `
` + l[v].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, D), D;
                  }
                while (v >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        H = !1, q.current = m, Ve(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", N = M ? V(M) : "";
      return typeof e == "function" && J.set(e, N), N;
    }
    function Ge(e, t, i) {
      return ye(e, !1);
    }
    function Ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Ke(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case j:
          return V("Suspense");
        case g:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ge(e.render);
          case T:
            return G(e.type, t, i);
          case S: {
            var o = e, f = o._payload, m = o._init;
            try {
              return G(m(f), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, be = {}, xe = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner, i = G(e.type, e._source, t ? t.type : null);
        xe.setExtraStackFrame(i);
      } else
        xe.setExtraStackFrame(null);
    }
    function qe(e, t, i, o, f) {
      {
        var m = Function.call.bind($);
        for (var u in e)
          if (m(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var E = Error((o || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              l = e[u](t, u, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              l = v;
            }
            l && !(l instanceof Error) && (K(f), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, u, typeof l), K(null)), l instanceof Error && !(l.message in be) && (be[l.message] = !0, K(f), w("Failed %s type: %s", i, l.message), K(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Z(e) {
      return Xe(e);
    }
    function He(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Ze(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function we(e) {
      if (Ze(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), Re(e);
    }
    var W = F.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, _e, Q;
    Q = {};
    function et(e) {
      if ($.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if ($.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, t) {
      if (typeof e.ref == "string" && W.current && t && W.current.stateNode !== t) {
        var i = O(W.current.type);
        Q[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(W.current.type), e.ref), Q[i] = !0);
      }
    }
    function nt(e, t) {
      {
        var i = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function at(e, t) {
      {
        var i = function() {
          _e || (_e = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var it = function(e, t, i, o, f, m, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: u,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ot(e, t, i, o, f) {
      {
        var m, u = {}, l = null, E = null;
        i !== void 0 && (we(i), l = "" + i), tt(t) && (we(t.key), l = "" + t.key), et(t) && (E = t.ref, rt(t, f));
        for (m in t)
          $.call(t, m) && !Qe.hasOwnProperty(m) && (u[m] = t[m]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (m in v)
            u[m] === void 0 && (u[m] = v[m]);
        }
        if (l || E) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && nt(u, y), E && at(u, y);
        }
        return it(e, l, E, f, o, W.current, u);
      }
    }
    var ee = F.ReactCurrentOwner, Ce = F.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, i = G(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(i);
      } else
        Ce.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Te() {
      {
        if (ee.current) {
          var e = O(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function st(e) {
      return "";
    }
    var De = {};
    function lt(e) {
      {
        var t = Te();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function je(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = lt(t);
        if (De[i])
          return;
        De[i] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + O(e._owner.type) + "."), L(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, o), L(null);
      }
    }
    function Se(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            re(o) && je(o, t);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = A(e);
          if (typeof f == "function" && f !== e.entries)
            for (var m = f.call(e), u; !(u = m.next()).done; )
              re(u.value) && je(u.value, t);
        }
      }
    }
    function ut(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === T))
          i = t.propTypes;
        else
          return;
        if (i) {
          var o = O(t);
          qe(i, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !te) {
          te = !0;
          var f = O(t);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var o = t[i];
          if (o !== "children" && o !== "key") {
            L(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Oe = {};
    function Pe(e, t, i, o, f, m) {
      {
        var u = Ye(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = st();
          E ? l += E : l += Te();
          var v;
          e === null ? v = "null" : Z(e) ? v = "array" : e !== void 0 && e.$$typeof === n ? (v = "<" + (O(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, l);
        }
        var y = ot(e, t, i, f, m);
        if (y == null)
          return y;
        if (u) {
          var D = t.children;
          if (D !== void 0)
            if (o)
              if (Z(D)) {
                for (var M = 0; M < D.length; M++)
                  Se(D[M], e);
                Object.freeze && Object.freeze(D);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(D, e);
        }
        if ($.call(t, "key")) {
          var N = O(e), C = Object.keys(t).filter(function(vt) {
            return vt !== "key";
          }), ne = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[N + ne]) {
            var pt = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, N, pt, N), Oe[N + ne] = !0;
          }
        }
        return e === a ? ct(y) : ut(y), y;
      }
    }
    function ft(e, t, i) {
      return Pe(e, t, i, !0);
    }
    function dt(e, t, i) {
      return Pe(e, t, i, !1);
    }
    var mt = dt, ht = ft;
    z.Fragment = a, z.jsx = mt, z.jsxs = ht;
  }()), z;
}
process.env.NODE_ENV === "production" ? se.exports = Rt() : se.exports = wt();
var d = se.exports, Fe = /* @__PURE__ */ ((h) => (h.LOADING = "LOADING", h.ERROR = "ERROR", h.LOADED = "LOADED", h.WAITING = "WAITING", h.NOTICE = "NOTICE", h))(Fe || {});
class Et {
  constructor() {
    U(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(n) {
    let r = n.size;
    const a = ["Bytes", "KB", "MB", "GB"];
    let c = 0;
    for (; r > 900; )
      r /= 1024, c++;
    return `${Math.round(r * 100) / 100} ${a[c]}`;
  }
  getExtension(n) {
    return n.split(".").pop();
  }
  getFileName(n) {
    return n.split("/").pop();
  }
  isValidHttpUrl(n) {
    let r;
    try {
      r = new URL(n);
    } catch {
      return !1;
    }
    return /https?/.test(r.protocol);
  }
  makeUniqueid(n = 10) {
    let r = "";
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", c = a.length;
    for (let s = 0; s < n; s++)
      r += a.charAt(Math.floor(Math.random() * c));
    return r;
  }
  nameToText(n) {
    return n.split("_").join(" ");
  }
  getRandomColor() {
    const n = "0123456789ABCDEF";
    let r = "#";
    for (let a = 0; a < 6; a++)
      r += n[Math.floor(Math.random() * 16)];
    return r;
  }
  concat(n, r) {
    return `${n} ${r}`;
  }
  isEmptyOrNull(n) {
    return n === "" || n == null || n == null;
  }
  toStringDefault(n, r = "") {
    return this.isEmptyOrNull(n) ? r.toString() : n;
  }
  toString(n) {
    return n + "";
  }
  isEmpty(n) {
    return n === "" || n === void 0 || n === null;
  }
  validatePasswords(n, r) {
    return n !== "" && n === r;
  }
  validatePassword(n) {
    const r = /[A-Z]/.test(n), a = /[a-z]/.test(n), c = /\d/.test(n), s = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(n), b = n.length >= 8;
    return { hasUppercase: r, hasLowercase: a, hasNumber: c, hasSpecialCharacter: s, has8Characters: b, allValidationsPassed: r && a && c && s && b };
  }
  isNotEmpty(n) {
    return n !== "";
  }
  convertUnderscoreToSpaceString(n) {
    return n.replace(/_/g, " ");
  }
  async imageSize(n) {
    return new Promise((r, a) => {
      try {
        const c = new FileReader();
        c.onload = () => {
          const s = new Image();
          s.onload = () => {
            r({ width: s.width, height: s.height });
          }, s.src = c.result;
        }, c.onerror = (s) => {
          a(s);
        }, c.readAsDataURL(n);
      } catch (c) {
        a(c);
      }
    });
  }
  capitalizeEachWord(n) {
    return n.toLowerCase().split(" ").map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(" ");
  }
  formatDateString(n) {
    const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!r)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, a, c, s] = r;
    return `${s}-${c}-${a}`;
  }
  validateEmail(n) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n);
  }
  convertNumber(n) {
    return Math.abs(n) >= 1e6 ? (n / 1e6).toString().substring(0, 4) + "M" : Math.abs(n) >= 1e3 ? (n / 1e3).toString().substring(0, 4) + "k" : n.toString();
  }
  daysLeft(n) {
    const r = new Date(n), a = /* @__PURE__ */ new Date(), c = r.getTime() - a.getTime();
    return Math.ceil(c / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(n) {
    const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][n.getDay()], c = n.getDate(), b = [
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
    ][n.getMonth()], _ = n.getFullYear();
    function p(g) {
      if (g >= 11 && g <= 13)
        return "th";
      switch (g % 10) {
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
    const j = p(c);
    return `${a}, ${c}${j} ${b}, ${_}`;
  }
  getTimeAgoAndCustomDate(n) {
    const r = /* @__PURE__ */ new Date(), a = new Date(n), c = r.getTime() - a.getTime();
    if (r < a)
      return "Future date";
    const s = Math.floor(c / 1e3);
    return s < 60 ? `${s} seconds ago` : s < 3600 ? `${Math.floor(s / 60)} minutes ago` : s < 86400 ? `${Math.floor(s / 3600)} hours ago` : s < 2592e3 ? `${Math.floor(s / 86400)} days ago` : a.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    });
  }
  roundTo2dp(n) {
    const r = parseFloat(n);
    return isNaN(r) ? n : (Math.round(r * 100) / 100).toFixed(2);
  }
}
const ie = new Et();
class _t extends B.Component {
  constructor(r) {
    super(r);
    U(this, "handleValueChange", (r) => {
      try {
        const { data: a } = this.state;
        a.start_date = r.startDate, a.end_date = r.endDate, this.setState({ data: a, value: r });
      } catch {
      }
    });
    U(this, "handleClose", (r) => {
      try {
        this.props.settings.loading && r && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const a = { ...this.state.data, status: r };
        this.props.settings.datalist !== void 0 && (a.option_data = this.state.data_value), ie.isEmptyOrNull(this.state.input.user_input) || (a.user_input = this.state.input.user_input), this.props.onClose(a);
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
    return /* @__PURE__ */ d.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ d.jsx(
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
          children: /* @__PURE__ */ d.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ d.jsx(
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
      /* @__PURE__ */ d.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ d.jsx("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: /* @__PURE__ */ d.jsx("div", { className: "flex flex-col w-full my-5", children: /* @__PURE__ */ d.jsx("div", { className: "flex w-full", children: this.props.children }) }) }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ d.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ d.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        r.btnPosition != null && r.btnPosition !== void 0 && !ie.isEmptyOrNull(r.btnPosition) ? /* @__PURE__ */ d.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: r.btnPosition
          }
        ) }) : null,
        r.btnNegative != null && r.btnNegative !== void 0 && !ie.isEmptyOrNull(r.btnNegative) ? /* @__PURE__ */ d.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ d.jsx(
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
class St extends B.Component {
  constructor(r) {
    super(r);
    U(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: Fe.ERROR,
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
      const r = { ...this.state.settings }, a = this.props.settings;
      a.title !== void 0 && (r.title = a.title), a.forceLoading !== void 0 && (r.forceLoading = a.forceLoading), a.hint !== void 0 && (r.hint = a.hint), a.handleOnClose !== void 0 && (r.handleOnClose = a.handleOnClose), a.btnPosition !== void 0 && (r.btnPosition = a.btnPosition), a.btnNegative !== void 0 && (r.btnNegative = a.btnNegative), a.type !== void 0 && (r.type = a.type), a.loading !== void 0 && (r.loading = a.loading), a.loadinghint !== void 0 && (r.loadinghint = a.loadinghint), a.showDateRange !== void 0 && (r.showDateRange = a.showDateRange), a.date !== void 0 && (r.date = a.date), a.time !== void 0 && (r.time = a.time), a.showDateRangeTitle !== void 0 && (r.showDateRangeTitle = a.showDateRangeTitle), a.inputFieldLabel !== void 0 && (r.inputFieldLabel = a.inputFieldLabel), a.zIndex !== void 0 && (r.zIndex = a.zIndex), a.datalist !== void 0 && (r.datalist = a.datalist), this.setState({ settings: r, loaded: !0 });
    } catch {
    }
    document.body.appendChild(this.modalContainer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }
  render() {
    const r = /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx("div", { className: "fixed z-[10000] inset-0 overflow-y-auto", children: /* @__PURE__ */ d.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ d.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ d.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ d.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ d.jsx(_t, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children })
    ] }) }) }) });
    return xt.createPortal(r, this.modalContainer);
  }
}
const oe = {
  click: "onClick",
  focusin: "onFocus",
  focusout: "onFocus",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd"
}, Ct = ({
  children: h,
  onClickOutside: n,
  focusEvent: r = "focusin",
  mouseEvent: a = "click",
  touchEvent: c = "touchend"
}) => {
  const s = ae(null), b = ae(null), _ = ae(!1);
  ke(() => (setTimeout(() => {
    _.current = !0;
  }, 0), () => {
    _.current = !1;
  }), []);
  const p = (x) => (R) => {
    b.current = R.target;
    const P = h == null ? void 0 : h.props[x];
    P && P(R);
  }, j = (x) => {
    s.current = x;
    let { ref: R } = h;
    typeof R == "function" ? R(x) : R && (R.current = x);
  };
  ke(() => {
    var P;
    const x = ((P = s.current) == null ? void 0 : P.ownerDocument) ?? document, R = (A) => {
      _.current && (s.current && s.current.contains(A.target) || b.current === A.target || !x.contains(A.target) || n(A));
    };
    return x.addEventListener(a, R), x.addEventListener(c, R), x.addEventListener(r, R), () => {
      x.removeEventListener(a, R), x.removeEventListener(c, R), x.removeEventListener(r, R);
    };
  }, [r, a, n, c]);
  const g = oe[a], T = oe[c], S = oe[r];
  return B.Children.only(
    bt(h, {
      ref: j,
      [S]: p(S),
      [g]: p(g),
      [T]: p(T)
    })
  );
};
Ct.displayName = "DesmyClickOutsideListener";
export {
  Ct as DesmyClickOutsideListener,
  St as DesmyModalHandler
};
//# sourceMappingURL=index.es.js.map
