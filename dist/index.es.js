var ht = Object.defineProperty;
var pt = (m, r, a) => r in m ? ht(m, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : m[r] = a;
var $ = (m, r, a) => (pt(m, typeof r != "symbol" ? r + "" : r, a), a);
import W from "react";
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
function mt() {
  if (De)
    return I;
  De = 1;
  var m = W, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(_, g, S) {
    var y, C = {}, D = null, U = null;
    S !== void 0 && (D = "" + S), g.key !== void 0 && (D = "" + g.key), g.ref !== void 0 && (U = g.ref);
    for (y in g)
      i.call(g, y) && !u.hasOwnProperty(y) && (C[y] = g[y]);
    if (_ && _.defaultProps)
      for (y in g = _.defaultProps, g)
        C[y] === void 0 && (C[y] = g[y]);
    return { $$typeof: r, type: _, key: D, ref: U, props: C, _owner: f.current };
  }
  return I.Fragment = a, I.jsx = x, I.jsxs = x, I;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function gt() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var m = W, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), ne = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ne && e[ne] || e[Pe];
      return typeof t == "function" ? t : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        Ne("error", e, n);
      }
    }
    function Ne(e, t, n) {
      {
        var o = P.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", n = n.concat([c]));
        var d = n.map(function(l) {
          return String(l);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Ae = !1, Fe = !1, Me = !1, $e = !1, Ie = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || Ie || e === f || e === S || e === y || $e || e === U || Ae || Fe || Me || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === C || e.$$typeof === x || e.$$typeof === _ || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case S:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return oe(t) + ".Consumer";
          case x:
            var n = e;
            return oe(n._context) + ".Provider";
          case g:
            return We(e, e.render, "ForwardRef");
          case C:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case D: {
            var c = e, d = c._payload, l = c._init;
            try {
              return T(l(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, A = 0, ie, se, le, ue, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ue() {
      {
        if (A === 0) {
          ie = console.log, se = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
            log: j({}, e, {
              value: ie
            }),
            info: j({}, e, {
              value: se
            }),
            warn: j({}, e, {
              value: le
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: ce
            }),
            groupCollapsed: j({}, e, {
              value: fe
            }),
            groupEnd: j({}, e, {
              value: de
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, G;
    function Y(e, t, n) {
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
    var K = !1, B;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Be();
    }
    function he(e, t) {
      if (!e || K)
        return "";
      {
        var n = B.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      K = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = J.current, J.current = null, Ue();
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
            } catch (E) {
              o = E;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (E) {
              o = E;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            o = E;
          }
          e();
        }
      } catch (E) {
        if (E && o && typeof E.stack == "string") {
          for (var s = E.stack.split(`
`), R = o.stack.split(`
`), v = s.length - 1, p = R.length - 1; v >= 1 && p >= 0 && s[v] !== R[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (s[v] !== R[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || s[v] !== R[p]) {
                    var w = `
` + s[v].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, w), w;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = d, Ye(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", O = N ? Y(N) : "";
      return typeof e == "function" && B.set(e, O), O;
    }
    function Ve(e, t, n) {
      return he(e, !1);
    }
    function ze(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function V(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case S:
          return Y("Suspense");
        case y:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ve(e.render);
          case C:
            return V(e.type, t, n);
          case D: {
            var o = e, c = o._payload, d = o._init;
            try {
              return V(d(c), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, pe = {}, me = P.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, n = V(e.type, e._source, t ? t.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Je(e, t, n, o, c) {
      {
        var d = Function.call.bind(F);
        for (var l in e)
          if (d(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[l](t, l, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (z(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, l, typeof s), z(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, z(c), b("Failed %s type: %s", n, s.message), z(null));
          }
      }
    }
    var Ge = Array.isArray;
    function q(e) {
      return Ge(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
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
        var n = T(M.current.type);
        X[n] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(M.current.type), e.ref), X[n] = !0);
      }
    }
    function et(e, t) {
      {
        var n = function() {
          be || (be = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function tt(e, t) {
      {
        var n = function() {
          xe || (xe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rt = function(e, t, n, o, c, d, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: d
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
    function nt(e, t, n, o, c) {
      {
        var d, l = {}, s = null, R = null;
        n !== void 0 && (ye(n), s = "" + n), Ze(t) && (ye(t.key), s = "" + t.key), He(t) && (R = t.ref, Qe(t, c));
        for (d in t)
          F.call(t, d) && !Xe.hasOwnProperty(d) && (l[d] = t[d]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (d in v)
            l[d] === void 0 && (l[d] = v[d]);
        }
        if (s || R) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && et(l, p), R && tt(l, p);
        }
        return rt(e, s, R, c, o, M.current, l);
      }
    }
    var H = P.ReactCurrentOwner, Re = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var t = e._owner, n = V(e.type, e._source, t ? t.type : null);
        Re.setExtraStackFrame(n);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ee() {
      {
        if (H.current) {
          var e = T(H.current.type);
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
    var we = {};
    function ot(e) {
      {
        var t = Ee();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function _e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ot(t);
        if (we[n])
          return;
        we[n] = !0;
        var o = "";
        e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + T(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), k(null);
      }
    }
    function Te(e, t) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            Q(o) && _e(o, t);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = ke(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), l; !(l = d.next()).done; )
              Q(l.value) && _e(l.value, t);
        }
      }
    }
    function it(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === C))
          n = t.propTypes;
        else
          return;
        if (n) {
          var o = T(t);
          Je(n, e.props, "prop", o, e);
        } else if (t.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = T(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var o = t[n];
          if (o !== "children" && o !== "key") {
            k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Ce = {};
    function Se(e, t, n, o, c, d) {
      {
        var l = Le(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = at();
          R ? s += R : s += Ee();
          var v;
          e === null ? v = "null" : q(e) ? v = "array" : e !== void 0 && e.$$typeof === r ? (v = "<" + (T(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var p = nt(e, t, n, c, d);
        if (p == null)
          return p;
        if (l) {
          var w = t.children;
          if (w !== void 0)
            if (o)
              if (q(w)) {
                for (var N = 0; N < w.length; N++)
                  Te(w[N], e);
                Object.freeze && Object.freeze(w);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(w, e);
        }
        if (F.call(t, "key")) {
          var O = T(e), E = Object.keys(t).filter(function(vt) {
            return vt !== "key";
          }), ee = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[O + ee]) {
            var dt = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, O, dt, O), Ce[O + ee] = !0;
          }
        }
        return e === i ? st(p) : it(p), p;
      }
    }
    function lt(e, t, n) {
      return Se(e, t, n, !0);
    }
    function ut(e, t, n) {
      return Se(e, t, n, !1);
    }
    var ct = ut, ft = lt;
    L.Fragment = i, L.jsx = ct, L.jsxs = ft;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = mt() : re.exports = gt();
var h = re.exports, Oe = /* @__PURE__ */ ((m) => (m.LOADING = "LOADING", m.ERROR = "ERROR", m.LOADED = "LOADED", m.WAITING = "WAITING", m.NOTICE = "NOTICE", m))(Oe || {});
class yt {
  constructor() {
    $(this, "generateKey", () => Math.floor(Math.random() * 100) + 1);
  }
  getFileSize(r) {
    let a = r.size;
    const i = ["Bytes", "KB", "MB", "GB"];
    let f = 0;
    for (; a > 900; )
      a /= 1024, f++;
    return `${Math.round(a * 100) / 100} ${i[f]}`;
  }
  getExtension(r) {
    return r.split(".").pop();
  }
  getFileName(r) {
    return r.split("/").pop();
  }
  isValidHttpUrl(r) {
    let a;
    try {
      a = new URL(r);
    } catch {
      return !1;
    }
    return /https?/.test(a.protocol);
  }
  makeUniqueid(r = 10) {
    let a = "";
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", f = i.length;
    for (let u = 0; u < r; u++)
      a += i.charAt(Math.floor(Math.random() * f));
    return a;
  }
  nameToText(r) {
    return r.split("_").join(" ");
  }
  getRandomColor() {
    const r = "0123456789ABCDEF";
    let a = "#";
    for (let i = 0; i < 6; i++)
      a += r[Math.floor(Math.random() * 16)];
    return a;
  }
  concat(r, a) {
    return `${r} ${a}`;
  }
  isEmptyOrNull(r) {
    return r === "" || r == null || r == null;
  }
  toStringDefault(r, a = "") {
    return this.isEmptyOrNull(r) ? a.toString() : r;
  }
  toString(r) {
    return r + "";
  }
  isEmpty(r) {
    return r === "" || r === void 0 || r === null;
  }
  validatePasswords(r, a) {
    return r !== "" && r === a;
  }
  validatePassword(r) {
    const a = /[A-Z]/.test(r), i = /[a-z]/.test(r), f = /\d/.test(r), u = /[~`!#@$%^&*+=\-[\]\\';,/{}|\\":<>?]/.test(r), x = r.length >= 8;
    return { hasUppercase: a, hasLowercase: i, hasNumber: f, hasSpecialCharacter: u, has8Characters: x, allValidationsPassed: a && i && f && u && x };
  }
  isNotEmpty(r) {
    return r !== "";
  }
  convertUnderscoreToSpaceString(r) {
    return r.replace(/_/g, " ");
  }
  async imageSize(r) {
    return new Promise((a, i) => {
      try {
        const f = new FileReader();
        f.onload = () => {
          const u = new Image();
          u.onload = () => {
            a({ width: u.width, height: u.height });
          }, u.src = f.result;
        }, f.onerror = (u) => {
          i(u);
        }, f.readAsDataURL(r);
      } catch (f) {
        i(f);
      }
    });
  }
  capitalizeEachWord(r) {
    return r.toLowerCase().split(" ").map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join(" ");
  }
  formatDateString(r) {
    const a = r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!a)
      throw new Error("Invalid date format. Please provide date in dd/mm/yyyy format.");
    const [, i, f, u] = a;
    return `${u}-${f}-${i}`;
  }
  validateEmail(r) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r);
  }
  convertNumber(r) {
    return Math.abs(r) >= 1e6 ? (r / 1e6).toString().substring(0, 4) + "M" : Math.abs(r) >= 1e3 ? (r / 1e3).toString().substring(0, 4) + "k" : r.toString();
  }
  daysLeft(r) {
    const a = new Date(r), i = /* @__PURE__ */ new Date(), f = a.getTime() - i.getTime();
    return Math.ceil(f / (1e3 * 3600 * 24));
  }
  formatDateToCustomFormat(r) {
    const i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][r.getDay()], f = r.getDate(), x = [
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
    ][r.getMonth()], _ = r.getFullYear();
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
    const S = g(f);
    return `${i}, ${f}${S} ${x}, ${_}`;
  }
  getTimeAgoAndCustomDate(r) {
    const a = /* @__PURE__ */ new Date(), i = new Date(r), f = a.getTime() - i.getTime();
    if (a < i)
      return "Future date";
    const u = Math.floor(f / 1e3);
    return u < 60 ? `${u} seconds ago` : u < 3600 ? `${Math.floor(u / 60)} minutes ago` : u < 86400 ? `${Math.floor(u / 3600)} hours ago` : u < 2592e3 ? `${Math.floor(u / 86400)} days ago` : i.toLocaleString("en-US", {
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
    const a = parseFloat(r);
    return isNaN(a) ? r : (Math.round(a * 100) / 100).toFixed(2);
  }
}
const te = new yt();
class Rt extends W.Component {
  constructor(a) {
    super(a);
    $(this, "handleValueChange", (a) => {
      try {
        const { data: i } = this.state;
        i.start_date = a.startDate, i.end_date = a.endDate, this.setState({ data: i, value: a });
      } catch {
      }
    });
    $(this, "handleClose", (a) => {
      try {
        this.props.settings.loading && a && this.setState({ isLoading: !0, loadinghint: this.props.settings.loadinghint });
        const i = { ...this.state.data, status: a };
        this.props.settings.datalist !== void 0 && (i.option_data = this.state.data_value), te.isEmptyOrNull(this.state.input.user_input) || (i.user_input = this.state.input.user_input), this.props.onClose(i);
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
    const { settings: a } = this.props;
    return /* @__PURE__ */ h.jsx("div", { className: "inline-block align-bottom font-poppinsRegular bg-white dark:bg-slate-800 dark:text-white px-4 pt-5 pb-0 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:p-6", children: this.state.isLoading ? /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col w-full h-48 justify-center text-primary dark:text-white items-center", children: [
      /* @__PURE__ */ h.jsx(
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
          children: /* @__PURE__ */ h.jsx("path", { fill: "currentColor", d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50", children: /* @__PURE__ */ h.jsx(
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
      /* @__PURE__ */ h.jsx("div", { className: "text-sm w-full text-black dark:text-white text-center justify-center", children: this.state.loadinghint })
    ] }) : /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "relative sm:flex sm:items-start items-center", children: [
        /* @__PURE__ */ h.jsx("div", { className: "flex w-full flex-col mt-5 text-center sm:mt-0  sm:text-left items-center", children: /* @__PURE__ */ h.jsx("div", { className: "flex flex-col w-full my-5", children: /* @__PURE__ */ h.jsx("div", { className: "flex w-full", children: this.props.children }) }) }),
        this.props.settings.handleOnClose !== void 0 ? /* @__PURE__ */ h.jsx("div", { className: "absolute right-0 -top-2 cursor-pointer", onClick: () => this.handleClose(!1), children: /* @__PURE__ */ h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ h.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z", clipRule: "evenodd" }) }) }) : null
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "mt-4  sm:flex sm:flex-row-reverse", children: [
        a.btnPosition != null && a.btnPosition !== void 0 && !te.isEmptyOrNull(a.btnPosition) ? /* @__PURE__ */ h.jsx("span", { className: "flex w-full rounded-md sm:ml-3 sm:w-auto", children: /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!0),
            className: " uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: a.btnPosition
          }
        ) }) : null,
        a.btnNegative != null && a.btnNegative !== void 0 && !te.isEmptyOrNull(a.btnNegative) ? /* @__PURE__ */ h.jsx("span", { className: "mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto", children: /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            onClick: () => this.handleClose(!1),
            className: "uppercase inline-flex justify-center w-full rounded-md border border-transparent px-2 py-2 font-poppinsBold text-primary dark:text-white  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 text-sm",
            children: a.btnNegative
          }
        ) }) : null
      ] })
    ] }) });
  }
}
class Et extends W.Component {
  // Adjust type
  constructor(a) {
    super(a);
    $(this, "modalContainer");
    this.state = {
      loaded: !1,
      settings: {
        title: "",
        hint: "",
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
    }, this.modalContainer = W.createRef();
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    document.body.removeChild(this.modalContainer.current);
  }
  render() {
    const { children: a } = this.props;
    return /* @__PURE__ */ h.jsx("div", { className: "modal-wrapper", children: /* @__PURE__ */ h.jsx("div", { className: "modal-body", children: a }) });
  }
}
export {
  Et as DesmyModalHandler
};
//# sourceMappingURL=index.es.js.map
