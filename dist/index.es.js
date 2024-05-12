var vt = Object.defineProperty;
var mt = (p, n, r) => n in p ? vt(p, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : p[n] = r;
var L = (p, n, r) => (mt(p, typeof n != "symbol" ? n + "" : n, r), r);
import V from "react";
import pt from "react-dom";
var re = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function gt() {
  if (De)
    return I;
  De = 1;
  var p = V, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, d = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, g, j) {
    var y, T = {}, D = null, W = null;
    j !== void 0 && (D = "" + j), g.key !== void 0 && (D = "" + g.key), g.ref !== void 0 && (W = g.ref);
    for (y in g)
      a.call(g, y) && !u.hasOwnProperty(y) && (T[y] = g[y]);
    if (_ && _.defaultProps)
      for (y in g = _.defaultProps, g)
        T[y] === void 0 && (T[y] = g[y]);
    return { $$typeof: n, type: _, key: D, ref: W, props: T, _owner: d.current };
  }
  return I.Fragment = r, I.jsx = x, I.jsxs = x, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function yt() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var p = V, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ne = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ne && e[ne] || e[Pe];
      return typeof t == "function" ? t : null;
    }
    var P = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          i[o - 1] = arguments[o];
        Ne("error", e, i);
      }
    }
    function Ne(e, t, i) {
      {
        var o = P.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", i = i.concat([c]));
        var h = i.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Ae = !1, Fe = !1, Me = !1, Le = !1, Ie = !1, ae;
    ae = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === u || Ie || e === d || e === j || e === y || Le || e === W || Ae || Fe || Me || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === T || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, t, i) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? i + "(" + c + ")" : i;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case d:
          return "StrictMode";
        case j:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return ie(t) + ".Consumer";
          case x:
            var i = e;
            return ie(i._context) + ".Provider";
          case g:
            return We(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case D: {
            var c = e, h = c._payload, l = c._init;
            try {
              return C(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, A = 0, oe, se, le, ue, ce, fe, de;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ue() {
      {
        if (A === 0) {
          oe = console.log, se = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
        A++;
      }
    }
    function Ye() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: se
            }),
            warn: S({}, e, {
              value: le
            }),
            error: S({}, e, {
              value: ue
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: de
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, G;
    function U(e, t, i) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, Y;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new ze();
    }
    function ve(e, t) {
      if (!e || K)
        return "";
      {
        var i = Y.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      K = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = J.current, J.current = null, Ue();
      try {
        if (t) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (w) {
              o = w;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (w) {
              o = w;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            o = w;
          }
          e();
        }
      } catch (w) {
        if (w && o && typeof w.stack == "string") {
          for (var s = w.stack.split(`
`), R = o.stack.split(`
`), v = s.length - 1, m = R.length - 1; v >= 1 && m >= 0 && s[v] !== R[m]; )
            m--;
          for (; v >= 1 && m >= 0; v--, m--)
            if (s[v] !== R[m]) {
              if (v !== 1 || m !== 1)
                do
                  if (v--, m--, m < 0 || s[v] !== R[m]) {
                    var E = `
` + s[v].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, E), E;
                  }
                while (v >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = h, Ye(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", O = N ? U(N) : "";
      return typeof e == "function" && Y.set(e, O), O;
    }
    function Be(e, t, i) {
      return ve(e, !1);
    }
    function Ve(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function z(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ve(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case j:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Be(e.render);
          case T:
            return z(e.type, t, i);
          case D: {
            var o = e, c = o._payload, h = o._init;
            try {
              return z(h(c), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, me = {}, pe = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var t = e._owner, i = z(e.type, e._source, t ? t.type : null);
        pe.setExtraStackFrame(i);
      } else
        pe.setExtraStackFrame(null);
    }
    function Je(e, t, i, o, c) {
      {
        var h = Function.call.bind(F);
        for (var l in e)
          if (h(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((o || "React class") + ": " + i + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[l](t, l, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (B(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, l, typeof s), B(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, B(c), b("Failed %s type: %s", i, s.message), B(null));
          }
      }
    }
    var Ge = Array.isArray;
    function q(e) {
      return Ge(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function qe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (qe(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ge(e);
    }
    var M = P.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, xe, X;
    X = {};
    function He(e) {
      if (F.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (F.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      if (typeof e.ref == "string" && M.current && t && M.current.stateNode !== t) {
        var i = C(M.current.type);
        X[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(M.current.type), e.ref), X[i] = !0);
      }
    }
    function et(e, t) {
      {
        var i = function() {
          be || (be = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function tt(e, t) {
      {
        var i = function() {
          xe || (xe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var rt = function(e, t, i, o, c, h, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: l,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function nt(e, t, i, o, c) {
      {
        var h, l = {}, s = null, R = null;
        i !== void 0 && (ye(i), s = "" + i), Ze(t) && (ye(t.key), s = "" + t.key), He(t) && (R = t.ref, Qe(t, c));
        for (h in t)
          F.call(t, h) && !Xe.hasOwnProperty(h) && (l[h] = t[h]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (h in v)
            l[h] === void 0 && (l[h] = v[h]);
        }
        if (s || R) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && et(l, m), R && tt(l, m);
        }
        return rt(e, s, R, c, o, M.current, l);
      }
    }
    var H = P.ReactCurrentOwner, Re = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var t = e._owner, i = z(e.type, e._source, t ? t.type : null);
        Re.setExtraStackFrame(i);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function we() {
      {
        if (H.current) {
          var e = C(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function at(e) {
      return "";
    }
    var Ee = {};
    function it(e) {
      {
        var t = we();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function _e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = it(t);
        if (Ee[i])
          return;
        Ee[i] = !0;
        var o = "";
        e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + C(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, o), k(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            Q(o) && _e(o, t);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = ke(e);
          if (typeof c == "function" && c !== e.entries)
            for (var h = c.call(e), l; !(l = h.next()).done; )
              Q(l.value) && _e(l.value, t);
        }
      }
    }
    function ot(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === T))
          i = t.propTypes;
        else
          return;
        if (i) {
          var o = C(t);
          Je(i, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = C(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var o = t[i];
          if (o !== "children" && o !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Te = {};
    function je(e, t, i, o, c, h) {
      {
        var l = $e(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = at();
          R ? s += R : s += we();
          var v;
          e === null ? v = "null" : q(e) ? v = "array" : e !== void 0 && e.$$typeof === n ? (v = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var m = nt(e, t, i, c, h);
        if (m == null)
          return m;
        if (l) {
          var E = t.children;
          if (E !== void 0)
            if (o)
              if (q(E)) {
                for (var N = 0; N < E.length; N++)
                  Ce(E[N], e);
                Object.freeze && Object.freeze(E);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(E, e);
        }
        if (F.call(t, "key")) {
          var O = C(e), w = Object.keys(t).filter(function(ht) {
            return ht !== "key";
          }), ee = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + ee]) {
            var dt = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, O, dt, O), Te[O + ee] = !0;
          }
        }
        return e === a ? st(m) : ot(m), m;
      }
    }
    function lt(e, t, i) {
      return je(e, t, i, !0);
    }
    function ut(e, t, i) {
      return je(e, t, i, !1);
    }
    var ct = ut, ft = lt;
    $.Fragment = a, $.jsx = ct, $.jsxs = ft;
  }()), $;
}
process.env.NODE_ENV === "production" ? re.exports = gt() : re.exports = yt();
var f = re.exports, Oe = /* @__PURE__ */ ((p) => (p.LOADING = "LOADING", p.ERROR = "ERROR", p.LOADED = "LOADED", p.WAITING = "WAITING", p.NOTICE = "NOTICE", p))(Oe || {});
class bt {
  constructor() {
    L(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(n) {
    let r = n.size;
    const a = ["Bytes", "KB", "MB", "GB"];
    let d = 0;
    for (; r > 900; )
      r /= 1024, d++;
    return `${Math.round(r * 100) / 100} ${a[d]}`;
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
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = a.length;
    for (let u = 0; u < n; u++)
      r += a.charAt(Math.floor(Math.random() * d));
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
    const r = /[A-Z]/.test(n), a = /[a-z]/.test(n), d = /\d/.test(n), u = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(n), x = n.length >= 8;
    return { hasUppercase: r, hasLowercase: a, hasNumber: d, hasSpecialCharacter: u, has8Characters: x, allValidationsPassed: r && a && d && u && x };
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
        const d = new FileReader();
        d.onload = () => {
          const u = new Image();
          u.onload = () => {
            r({ width: u.width, height: u.height });
          }, u.src = d.result;
        }, d.onerror = (u) => {
          a(u);
        }, d.readAsDataURL(n);
      } catch (d) {
        a(d);
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
    const [, a, d, u] = r;
    return `${u}-${d}-${a}`;
  }
  validateEmail(n) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n);
  }
  convertNumber(n) {
    return Math.abs(n) >= 1e6 ? (n / 1e6).toString().substring(0, 4) + "M" : Math.abs(n) >= 1e3 ? (n / 1e3).toString().substring(0, 4) + "k" : n.toString();
  }
  daysLeft(n) {
    const r = new Date(n), a = /* @__PURE__ */ new Date(), d = r.getTime() - a.getTime();
    return Math.ceil(d / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(n) {
    const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][n.getDay()], d = n.getDate(), x = [
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
    function g(y) {
      if (y >= 11 && y <= 13)
        return "th";
      switch (y % 10) {
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
    const j = g(d);
    return `${a}, ${d}${j} ${x}, ${_}`;
  }
  getTimeAgoAndCustomDate(n) {
    const r = /* @__PURE__ */ new Date(), a = new Date(n), d = r.getTime() - a.getTime();
    if (r < a)
      return "Future date";
    const u = Math.floor(d / 1e3);
    return u < 60 ? `${u} seconds ago` : u < 3600 ? `${Math.floor(u / 60)} minutes ago` : u < 86400 ? `${Math.floor(u / 3600)} hours ago` : u < 2592e3 ? `${Math.floor(u / 86400)} days ago` : a.toLocaleString("en-US", {
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
const te = new bt();
class xt extends V.Component {
  constructor(r) {
    super(r);
    L(this, "handleValueChange", (r) => {
      try {
        const { data: a } = this.state;
        a.start_date = r.startDate, a.end_date = r.endDate, this.setState({ data: a, value: r });
      } catch {
      }
    });
    L(this, "handleClose", (r) => {
      try {
        this.props.settings.loading && r && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const a = { ...this.state.data, status: r };
        this.props.settings.datalist !== void 0 && (a.option_data = this.state.data_value), te.isEmptyOrNull(this.state.input.user_input) || (a.user_input = this.state.input.user_input), this.props.onClose(a);
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
    return /* @__PURE__ */ f.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ f.jsx(
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
          children: /* @__PURE__ */ f.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ f.jsx(
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
      /* @__PURE__ */ f.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ f.jsx("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: /* @__PURE__ */ f.jsx("div", { className: "flex flex-col w-full my-5", children: /* @__PURE__ */ f.jsx("div", { className: "flex w-full", children: this.props.children }) }) }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ f.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ f.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ f.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        r.btnPosition != null && r.btnPosition !== void 0 && !te.isEmptyOrNull(r.btnPosition) ? /* @__PURE__ */ f.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ f.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: r.btnPosition
          }
        ) }) : null,
        r.btnNegative != null && r.btnNegative !== void 0 && !te.isEmptyOrNull(r.btnNegative) ? /* @__PURE__ */ f.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ f.jsx(
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
class _t extends V.Component {
  constructor(r) {
    super(r);
    L(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
        zIndex: 3e3,
        btnPosition: "",
        btnNegative: "",
        type: Oe.ERROR,
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
    const r = /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx("div", { className: "fixed z-[10000] inset-0 overflow-y-auto", children: /* @__PURE__ */ f.jsx("div", { className: "fixed justify-items-center px-2 backdrop-blur-sm top-0 right-0 left-0 z-40 w-full inset-0 h-modal h-full justify-center items-center overflow-y-auto", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ f.jsx("div", { className: "absolute inset-0 bg-black/25 opacity-75" }) }),
      /* @__PURE__ */ f.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen" }),
      /* @__PURE__ */ f.jsx(xt, { settings: this.props.settings, data: this.props.data, onClose: this.props.onClose, children: this.props.children })
    ] }) }) }) });
    return pt.createPortal(r, this.modalContainer);
  }
}
export {
  _t as DesmyModalHandler
};
//# sourceMappingURL=index.es.js.map
